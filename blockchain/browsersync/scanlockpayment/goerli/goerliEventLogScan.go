package goerli

import (
	"math/big"
	"multi-chain-storage/blockchain/browsersync/blockutils"
	"multi-chain-storage/common/constants"
	common2 "multi-chain-storage/common/utils"
	"multi-chain-storage/database"
	"multi-chain-storage/logs"
	models2 "multi-chain-storage/models"
	"strconv"
	"sync"
	"time"
)

func ScanEventFromChainAndSaveDataToDbForGoerli() {
	startScanBlockNo := blockutils.GetStartBlockNo(constants.NETWORK_TYPE_GOERLI, GetConfig().GoerliMainnetNode.StartFromBlockNo)

	for {
		var mutex sync.Mutex
		mutex.Lock()
		var blockNoCurrent *big.Int
		var err error
		var getBlockFlag bool = true
		for getBlockFlag {
			blockNoCurrent, err = WebConn.GetBlockNumber()
			if err != nil {
				ClientInit()
				logs.GetLogger().Error(err)
				time.Sleep(5 * time.Second)
				continue
			}
			if err == nil {
				getBlockFlag = false
			}
		}

		blockScanRecord := new(models2.BlockScanRecord)
		whereCondition := "network_type='" + constants.NETWORK_TYPE_GOERLI + "'"
		blockScanRecordList, err := blockScanRecord.FindLastCurrentBlockNumber(whereCondition)
		if err != nil {
			logs.GetLogger().Error(err)
			startScanBlockNo = GetConfig().GoerliMainnetNode.StartFromBlockNo
		}
		if len(blockScanRecordList) > 0 {
			if blockScanRecordList[0].LastCurrentBlockNumber <= blockNoCurrent.Int64() {
				startScanBlockNo = blockScanRecordList[0].LastCurrentBlockNumber
			} else {
				startScanBlockNo = GetConfig().GoerliMainnetNode.StartFromBlockNo
			}
			blockScanRecord.ID = blockScanRecordList[0].ID
		}

		for {
			start := startScanBlockNo
			end := start + GetConfig().GoerliMainnetNode.ScanStep
			if startScanBlockNo > blockNoCurrent.Int64() {
				break
			}
			err = ScanGoerliEventFromChainAndSaveEventLogData(start, end)
			if err != nil {
				logs.GetLogger().Error(err)
				continue
			}

			if end >= blockNoCurrent.Int64() {
				blockScanRecord.LastCurrentBlockNumber = blockNoCurrent.Int64()
			} else {
				blockScanRecord.LastCurrentBlockNumber = end
			}
			networkId, err := models2.FindNetworkIdByUUID(constants.NETWORK_TYPE_GOERLI_UUID)
			if err != nil {
				logs.GetLogger().Error(err)
			} else {
				blockScanRecord.NetworkId = networkId
			}
			blockScanRecord.UpdateAt = strconv.FormatInt(common2.GetEpochInMillis(), 10)

			err = database.SaveOne(blockScanRecord)
			if err != nil {
				logs.GetLogger().Error(err)
				continue
			}
			start = end
			startScanBlockNo = end
			if end >= blockNoCurrent.Int64() {
				break
			}
		}

		getBlockFlag = true
		mutex.Unlock()

		time.Sleep(time.Second * GetConfig().GoerliMainnetNode.CycleTimeInterval)
		logs.GetLogger().Info("--------------------goerli---------------------------------")
	}
}
