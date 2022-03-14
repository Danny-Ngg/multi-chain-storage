package database

import (
	"context"
	"multi-chain-storage/config"

	"github.com/filswan/go-swan-lib/logs"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

type Database struct {
	*gorm.DB
}

var DB *gorm.DB

// Opening a database and save the reference to `Database` struct.
func Init() *gorm.DB {
	dbSource := config.GetConfig().Database.DbUsername + ":" + config.GetConfig().Database.DbPassword + "@tcp(" + config.GetConfig().Database.DbHost + ":" + config.GetConfig().Database.DbPort + ")/" + config.GetConfig().Database.DbSchemaName + "?" + config.GetConfig().Database.DbArgs
	logs.GetLogger().Info(dbSource)
	db, err := gorm.Open("mysql", dbSource)
	if err != nil {
		logs.GetLogger().Fatal("db err: ", err)
	}
	db.SingularTable(true)
	db.DB().SetMaxIdleConns(10)
	db.LogMode(!config.GetConfig().Release)
	DB = db
	return DB
}

// Using this function to get a connection, you can create your connection pool here.
func GetDB() *gorm.DB {
	return DB
}

func SaveOne(data interface{}) error {
	db := GetDB()
	err := db.Save(data).Error
	if err != nil {
		logs.GetLogger().Error(err)
		return err
	}

	return nil
}

func SaveOneWithResult(data interface{}) (interface{}, error) {
	db := GetDB()
	//err := db.Save(data).Error

	result := db.Create(data)
	err := result.Error
	if err != nil {
		logs.GetLogger().Error(err)
		return nil, err
	}

	return result.Value, nil
}

func SaveOneInTransaction(db *gorm.DB, data interface{}) error {
	err := db.Set("gorm:query_option", "FOR UPDATE").Save(data).Error
	if err != nil {
		logs.GetLogger().Error(err)
	}
	return err
}

func SaveOneWithTransaction(data interface{}) error {
	tx := GetDB().Begin()
	err := tx.Set("gorm:query_option", "FOR UPDATE").Save(data).Error
	if err != nil {
		logs.GetLogger().Error(err)
	}
	err = tx.Commit().Error
	if err != nil {
		logs.GetLogger().Error(err)
	}
	return err
}

func GetDBTransaction() *gorm.DB {
	ctx := context.Background()
	db := GetDB().BeginTx(ctx, nil)
	return db
}

func CloseDB(db *gorm.DB) {
	err := db.Close()
	if err != nil {
		logs.GetLogger().Error(err)
	}
}
