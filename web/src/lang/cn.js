export default {
    route: {
        dashboard: "首页",
        Deal: "我的任务",
        Miner: "Web3存储服务商管理",
        myProfile: '个人信息',
        browse: '浏览任务',
        Tools: '工具',
        My_FS3: 'FS3',
        Stats:'统计',
        documentation: '文档',
        Upload_files: '上传文件'
    },
    navbar: {
        sidebar_header: 'FIL SWAN',
        "section": "部分",
        "myprofile": "个人信息",
        "support": "支持",
        hi: '你好，',
        "logout": "登出",
        log_in: '登录',
        sign_up: '注册',
        dashboard: '首页',
        minerDetail: 'Web3存储服务商详情',
        deal: '我的任务',
        miner: 'Web3存储服务商管理',
        deal_details: '任务详情',
        My_Profile: '个人信息',
        Browse_tasks: '浏览任务',
        create_tasks: '创建任务',
        Upload_files: '上传文件',
        Tools: '工具',
        Stats:'统计',
        copy: '© 2021 FilSwan Canada',
        'ScoreChange': '历史评分',
        'ScoreChange_legend': '评分',
        'PowerChange': '历史算力',
        'MiningData': '存储/数据封装统计',
        selectDate:{
            sevenDays: '7天',
            thirtyDays: '30天',
            oneYearL: '1年',
            roundClock: '24时'
        },
        Power: '有效算力',
        PowerGrowth: '有效算力增量'
    },
    // 首页
    dashboard: {
        text01:'Web3存储服务商总数',
        text02: '活跃Web3存储服务商',
        form_name: 'Filecoin Web3存储服务商',
        form_swith: '接受离线交易',
        form_swith_in: '网上交易',
        search: '搜索存储节点ID...',
        formTable01: '地区',
        formTable02: '存储节点ID',
        formTable03: '价格 (GiB/区块时间)',
        formTable04: '价格 (32GiB/年)',
        formTable05: '真实数据价格(GiB/区块时间)',
        formTable06: '规格',
        formTable07: '离线交易',
        formTable08: '评分',
        formTable09: '上次更新',
        formTable10: '最大规格',
        formTable11: '最小规格',
        formTable12: '状态',
        formTable13: '联系方式',
        formTable14: '节点算力',
        formNotData: '空',
        ON: '开',
        OFF:'关'
    },
    deal: {
        upload_title: '创建您的离线任务',
        upload_form_name: '任务名称:',
        upload_form_desc: '说明:',
        upload_form_tags: '标签:',
        description: '任务描述:',
        curated_dataset: '数据集:',
        upload_form_type: '类型:',
        upload_form_file: 'CSV文件:',
        upload_form_file_tip: '上传.csv文件最大不超过：2MB。',
        upload_form_minerId: '存储节点ID:',
        upload_form_dataset: '数据集:',
        upload_form_minerId_tips: '存储节点ID不能为空',
        upload_form_miner: '目标Web3存储服务商:',
        upload_form_btn: '附加文件',
        Submit: '提交',
        Cancel: '取消',
        save: '保存',
        saveSetting: '保存设置',
        form_name: '任务列表',
        form_select_title: '任务状态:',
        form_select_title01: '交易状态:',
        form_search: '高级搜索',
        task_search: '任务名称搜索...',
        task_dataset: '数据集搜索...',
        task_dataset_csv: '数据集CSV',
        formTable01: '任务名称',
        formTable02: '存储节点ID',
        formTable03: '任务状态',
        formTable04: '类型',
        formTable05: '纪录',
        formTable06: '描述',
        formTable07: '标签',
        formTable08: '创建日期（EST）',
        formTable09: '操作',
        formTable10: '客户名称',
        // formTable08: 'GENERATION TIME',
        formNotData: '空',
        detailTable01: '交易CID',
        detailTable02: '文件路径',
        detailTable03: '源URL',
        detailTable04: '状态',
        detailTable05: '起始',
        detailTable06: '上次更新',
        detailTable07: '创建日期',
        detailTable08: '纪录',
        detailTable09: '有效负载CID',
        backto: '返回',
        title_top_name: '任务名称',
        title_top_miner: '任务Web3存储服务商',
        title_top_price: '价格',
        title_top_created: '创建于',
        title_top_Last_Update: '上次更新',
        delete: '删除',
        edit: '编辑',
        tags_tips: '最多输入5个最能描述任务的标记。 Web3存储服务商将使用这些标签找到他们最感兴趣和最有经验的任务。',
        table_miner_title: '已分配任务列表',
        Clear_all: '全部清除',
        table_th_02: '分配日期（EST）',
        table_th_03: '指定Web3存储服务商',
        table_th_04: '交易',
        table_th_05: '投标',
        table_th_06: '操作',
        table_th_07: 'MD5',
        table_th_08: 'MD5',
        module_deal_tips: '是否确实要将状态修改为 ',
        Validate: '验证',
        Tips: '提示',
        deal_not_found: '未找到离线交易。',
        proposal_not_null: '描述你的建议不能为空！',
        please_tip01: '请输入任务名称',
        please_tip02: '请输入目标Web3存储服务商',
    },
    miner: {
        search_place: '搜索任务...',
        title_Type: '任务类型',
        title_Tags: '标签',
        title_Status: '状态',
        title_hasMiner: '已分配Web3存储服务商',
        title_CreateDate: '创建日期',
        title_location: '具体位置',
        Reset_filters: '重置筛选器',
        bids_title: '发布人信息',
        bids_title01: '对此任务出价',
        tab_left: '作为客户',
        tab_right: '作为Web3存储服务商',
        onle_one: '只有一个Web3存储服务商',
        Miner: 'Web3存储服务商',
        Assign_Miner: '指派Web3存储服务商'
    },
    my_profile: {
        left_menu_01: '简况',
        left_menu_02: '密码',
        left_menu_03: '支付',
        left_menu_04: '开发人员设置',
        left_menu_05: '工具',
        contact_Email: '电子邮件',
        Change_password: '修改密码',
        wrong_password: '密码错误',
        Reenter_new_password: '重新输入新密码',
        apiKey_your_title: '您的API密钥',
        apiKey_tips_01: 'API密钥提供对您的swan帐户的完全访问，因此请确保它们的安全。',
        apiKey_tips_02: '如何使用api密钥。',
        apiKey_tips_03: '保持API密钥安全的技巧。',
        apiKey_btn_01: '添加API密钥',
        apiKey_btn_02: '撤销',
        table_apiKey_th_01: '名称',
        table_apiKey_th_02: '密钥',
        table_apiKey_th_03: '访问令牌',
        table_apiKey_th_04: '创建日期',
        table_apiKey_th_05: '状态',
        create_api_title: '创建密钥',
        create_api_title01: '已成功创建API令牌',
        create_api_title02: '重要',
        create_api_tips: '名称不能为空！',
        create_api_tips01: '此令牌是您访问Filswan平台服务的私人机密。',
        create_api_tips02: '密钥只显示一次。在继续之前，你需要把它复制到安全的地方。',
        create_api_tips03: '您的新API密钥是：',
        create_api_tips04: '您的新访问令牌是：',
        create_api_tips05: '当您生成密钥时，您将看到一个带有Swan API密钥、Swan API Secret和JWT的模式。',
        create_api_tips06: '您的“Swan API密钥”充当我们restapi的公钥，您的“Swan Secret API密钥”充当您公钥的密码。JWT是两者的编码混合。一定要保密！',
        create_api_tips07: "为了增强客户的安全性，这些密钥在Swan一侧加密，并且只显示一次，所以请将它们写下来。如果丢失了这些值，则需要撤消密钥并创建一个新的密钥。",
        Check_dataCap: '检查DataCap',
        form_contact: '联系方式',
        form_username: '用户名',
        form_ProfileHeadline: '简介标题',
        form_Summary: '摘要',
        list_title: 'Web3存储服务商名单',
        list_button: '管理',
        table_child_01: '存储节点ID',
        table_child_02: '提供离线交易',
        table_child_03: '摘要',
        pass_current: '当前密码',
        pass_new: '新密码',
        pass_confirm: '确认密码',
        Your_swan_miners: '您的swan Web3存储服务商',
        swan_miners_add: '添加',
        swan_miners_Delete: '删除',
        swan_miners_Refresh: '刷新',
        miner_add_h1: '签名验证',
        miner_add_title: '目前仅对 有效算力 ≥ 32 GiB 的Web3存储服务商开放自主认证',
        miner_add_OwnerAddress: 'Owner地址',
        miner_add_Contact: '联系方式',
        miner_add_contact_place: '邮箱/手机号...',
        miner_add_Message: '信息',
        miner_add_SignCode: '签名代码',
        miner_add_Signature: '签名',
        miner_add_sign_place: '请复制上面的代码，在filecoin钱包中进行签名，将签名内容粘贴到此处',
        miner_add_ms: '特别提示：账户名称不得使用敏感词、违禁词、名人姓名等，如有违规将进行删除和禁用签名处理，谢谢配合。',
        module_tips01: '是否要删除Web3存储服务商 ',
        Executing: '执行...',
        module_tips02: '请选择Web3存储服务商。',
        module_tips03: '是否要刷新Web3存储服务商 ',
        module_tips04: '是否要删除API密钥？',
        module_tips05: '是否要更改信息 ',
        Success: '操作成功',
        Choose_Picture: '选择图片'
    },
    components: {
        choose_name: '为任务选择一个名称',
        choose_description: '任务描述',
        curated_dataset:'数据集',
        new_tag: '新标签',
        tag_description: '最多输入5个最能描述任务的标记。 Web3存储服务商将使用这些标签找到他们最感兴趣和最有经验的任务。',
        type_Regular: '常规',
        type_Verified: '真实',
        Upload_CSV: '上传CSV',
        upload_desc: '您可以在',
        upload_desc01: '下载CSV模版。',
        upload_here: '这里',
        yes: "是",
        no: '否',
        Task_expected: '任务预计完成时间',
        day: '天',
        accepted: '从接受任务的那一刻算起。',
        upload_re_upload: '请重新上传.csv文件，包括deal cid和start epoch。',
        upload_Download: '下载示例。',
        Open_bid: '开放竞标',
        Estimated_budget: '预计费用',
        Estimated_budget_min: '最少',
        Estimated_budget_max: '最多',
        e_g_name: '例如Task001'
    },
    browse: {
        create_task: '创建任务',
        Results: '结果',
        Sort_by: '排序依据',
        add_tag: '添加标签',
        clear_tags: '清除标签',
        Created: '创建',
        Completed: '完成',
        Created_on: '已创建',
        Completed_on: '已完成',
        Min_price: '最低价格',
        Max_price: '最高价格',
        Clear_prices: '清除价格',
        bids: '投标',
        Create: '创建',
        task_title: '任务详情',
        Miner_t: 'Web3存储服务商',
        Miner_Adjusted_Power:"节点算力",
        Price_per_GiB: '每GiB价格',
        Price_Gib_year: '价格 (32Gib/年)',
        Verified_Price_per_GiB: '每GiB验证价格',
        Max_Piece_size: '最大尺寸',
        Min_Piece_size: '最小尺寸',
        Offline_Deals: '线下交易',
        Score: '评分',
        Status: '状态',
        Last_Update: '上次更新',
        Location: '位置',
        bid_descipt: '您将能够编辑您的出价，直到任务分配给某人。',
        Bid_Details: '投标详情',
        Bid_Amount: '投标金额',
        Bid_Amount_tips: '投标金额不能为空',
        bid_project: '这个项目将交付在',
        bid_project_day: '天',
        bid_project_tips: '过期天数不能为空',
        bid_each_size: '每个文件大小',
        bid_each_size_tips: '文件大小不能为空',
        bid_proposal: '描述您的提议',
        bid_proposal_tips: '方案不能为空',
        bid_proposal_placehole: '什么使您成为对这一任务最好的候选人？',
        Place_bid: '投标',
        tasks_completed: '完成的任务',
        Budget: '预算',
        bids_name: '投标',
        Average_bid: '平均出价',
        Completion: '完成',
        Summary: '摘要',
        Proposal: '提案',
        Read_more: '阅读更多',
        Assigned: '分配',
        Assign: '分配',
        module_tips: 'Web3存储服务商不能为空！',
        Cancel: '取消',
        Ok: '确定',
        tab_detail: '详情',
        tab_bids: '投标',
        in: '',
        module_miner_tips: '确定要将其分配给 ',
        expect: '预计完成时间',
        expect_day: '天',
        completion: '完成时间',
        completion_day: '天',
        Leave_tip: '留下小费？',
        Leave_tip_title: '的小费',
        leave_t: '提示：',
        leave_tit_form_Currency: '币种',
        leave_tit_form_Amount: '金额',
        leave_tit_form_Message: '留言',
        leave_tit_form_Submit: '提交',
        leave_success: '已付小费：',
    },
    tools: {
        title: '检查',
        title_tips: '输入地址以检查其状态',
        btn: '检查',
        content: '还有 ',
        content01: ' 的DataCap。',
        Check_dataCap: '检查数据配额',
        market_balance: '链上托管余额',
        Escrowed_Funds: '托管资金',
        Locked_Funds: '已锁定资金'
    },
    // 登录
    login: {
        login_loginphone: '手机登录',
        login_loginmail: '邮箱登录',
        login_phonenum: '请输入您的手机号',
        login_phonepw: '请输入您的密码',
        login_phonelogin: '登录',
        login_phonereg: '注册',
        login_phoneforget: '找回密码',
        login_mailnum: '请输入您的邮箱账号',
        login_mailpw: '请输入您的密码',
        login_maillogin: '登录',
        login_mailreg: '注册',
        login_mailforget: '找回密码',
        login_validate_title: '安全验证',
        login_validate_phone: '手机号',
        login_validate_phonecode: '请输入手机验证码',
        login_validate_phone_tips_true: '请输入正确的验证码',
        login_validate_google: '谷歌验证',
        login_validate_googlecode: '请输入谷歌验证码',
        login_validate_google_tips_true: '请输入正确的验证码',
        login_validate_btn: '确定',
        login_verify_phone_tips_true: '请输入正确的手机号',
        login_verify_phone_tips_empty: '手机号不能为空',
        login_verify_phonePassword_tips_true: '请输入正确的密码',
        login_verify_mail_tips_true: '请输入正确的邮箱',
        login_verify_mail_tips_empty: '邮箱不能为空',
        login_verify_mailPassword_tips_true: '请输入正确的密码',
        login_getVerifyCodeWord: '发送验证码',
        login_getVerifyCodeWord_time: 's后获取',
        login_verify_account_tips_no: '用户不存在',
        login_verify_pw_tips_empty: '密码不能为空',
        login_verify_code_tips_empty: '请输入正确的验证码',
        login_verify_pw_tips_rule: '密码至少为8-16个字符, 至少包含1个大写字母，1个小写字母和1个数字',
        login_validate_mailcode: '请输入邮箱验证码',
        login_validate_mail_tips_true: '请输入正确的验证码',
        login_validate_mail: '邮箱',
        login_verify_zh_tips_empty:'账号不能为空',
        login_h1:'没有账号，立即注册',
        login_h2:'欢迎登录'
    },
    // 注册（账号激活）
    accountActivation: {
        accountActivation_title: '账号激活',
        accountActivation_tips_1: '验证邮件已发送至',
        accountActivation_tips_2: '请登录邮箱点击激活链接，完成账号激活。',
        accountActivation_resend: '重新发送邮件',
        getVerifyCodeWord_time: 's后获取'
    },
    // 注册（激活验证）
    activationSuccess: {
        activationSuccess_success_title: '注册验证成功',
        activationSuccess_success_tips: '后跳至登录',
        activationSuccess_success_jumptime_unit: '秒',
        activationSuccess_fail_title: '激活链接已失效',
        activationSuccess_fail_tips: '请尝试重新登录获取激活邮件',
        activationSuccess_fail_tips01: '重新获取激活邮件'
    },
    // 注册
    register: {
        register_registerphone: '手机注册',
        register_registermail: '邮箱注册',
        register_phonenum: '请输入您的手机号',
        register_phonecheckcode: '请输入手机验证码',
        register_phonepw: '请输入登录密码',
        register_phonepwconfirm: '请确认登录密码',
        register_agree: '我已阅读并同意',
        register_agreelaw: '用户服务条款',
        register_phonereg: '注册',
        register_phonelogin: '登录',
        register_mailnum: '请输入您的邮箱',
        register_mailpw: '请输入登录密码',
        register_mailpwconfirm: '请确认登录密码',
        register_mailreg: '注册',
        register_maillogin: '登录',
        register_regsuccess: '注册成功',
        register_regsuccess_tips: '后跳至登录',
        register_verify_phone_tips_true: '请输入正确的手机号',
        register_verify_phone_tips_empty: '手机号不能为空',
        register_verify_verifyCode_tips_true: '请输入正确的验证码',
        register_verify_phonePassword_tips_true: '请输入正确的密码',
        register_verify_phonePasswordVerify_tips_true: '请输入正确的密码',
        register_verify_term_tips_true: '请勾选服务条款',
        register_verify_mail_tips_true: '请输入正确的邮箱',
        register_verify_mail_tips_empty: '邮箱不能为空',
        register_verify_mailPassword_tips_true: '请输入正确的密码',
        register_verify_mailPasswordVerify_tips_true: '请输入正确的密码',
        register_getVerifyCodeWord: '获取验证码',
        register_getVerifyCodeWord_time: 's后获取',
        register_verify_account_tips_exist: '用户已存在',
        register_verify_pw_tips_empty: '密码不能为空',
        register_verify_pw_tips_rule: '密码至少为8-16个字符, 至少包含1个大写字母，1个小写字母和1个数字',
        register_verify_placehold_tips_rule: '请输入密码',
        register_verify_pw_tips_reenter: '请再次输入密码',
        register_verify_pw_tips_same: '两次密码输入需保持一致',
        register_jumptime_unit: '秒',
        register_h1:'已有账号，立即登录',
        register_h2:'邀请者邀请码（选填）'
    },
    // 找回密码
    forgetPassword: {
        forgetPassword_title: '找回密码',
        forgetPassword_phonenum: '请输入您的手机号',
        forgetPassword_phonecheckcode: '请输入手机验证码',
        forgetPassword_phonepw: '请输入登录密码',
        forgetPassword_phonepwconfirm: '请确认登录密码',
        forgetPassword_phonebtn: '确认',
        forgetPassword_mailget: '用邮箱找回密码',
        forgetPassword_mailbtn: '确认',
        forgetPassword_phoneget: '用手机找回密码',
        forgetPassword_mailnum: '请输入您的邮箱',
        forgetPassword_verify_phone_tips_true: '请输入正确的手机号',
        forgetPassword_verify_phone_tips_empty: '手机号不能为空',
        forgetPassword_verify_phonePassword_tips_true: '请输入正确的密码',
        forgetPassword_verify_phonePasswordVerify_tips_true: '请输入正确的密码',
        forgetPassword_verify_mail_tips_true: '请输入正确的邮箱',
        forgetPassword_verify_mail_tips_empty: '邮箱不能为空',
        forgetPassword_getVerifyCodeWord: '获取验证码',
        forgetPassword_getVerifyCodeWord_time: 's后获取',
        forgetPassword_verify_verifyCode_tips_true: '请输入正确的验证码',
        forgetPassword_verify_account_tips_no: '用户不存在',
        forgetPassword_verify_pw_tips_empty: '密码不能为空',
        forgetPassword_verify_pw_tips_rule: '密码至少为8-16个字符, 至少包含1个大写字母，1个小写字母和1个数字',
        forgetPassword_verify_pw_tips_same: '两次密码输入需保持一致',
        forgetPassword_success_title: '密码重置成功！',
        forgetPassword_success_btn: '登录',
        forgetPassword_h1:'已有账号，立即登录',
        forgetPassword_reenter:'再次输入密码',
        forgetPassword_submit:'提交',
        forgetPassword_phone:'手机找回',
        forgetPassword_mail:'邮箱找回'
    },
    // 找回密码（重置邮件）
    mailForget: {
        mailForget_title: '账号密码重置',
        mailForget_tips_1: '验证邮件已发送至',
        mailForget_tips_2: '，请登录邮箱点击重置密码链接，完成密码重置。',
        mailForget_resend: '重新发送邮件',
        getVerifyCodeWord: '重新发送邮件',
        getVerifyCodeWord_time: 's后获取',
    },
    // 找回密码（重置密码）
    mailResetPassword: {
        mailResetPassword_title: '重置密码',
        mailResetPassword_pw: '请输入登录密码',
        mailResetPassword_new_pw: '请输入新登录密码',
        mailResetPassword_pwconfirm: '请确认登录密码',
        mailResetPassword_btn: '确认',
        mailResetPassword_verify_pw_tips_true: '请输入正确的密码',
        mailResetPassword_verify_pwconfirm_tips_true: '请输入正确的密码',
        mailResetPassword_verify_pw_tips_rule: '密码至少为8-16个字符, 至少包含1个大写字母，1个小写字母和1个数字',
        mailResetPassword_verify_pw_tips_same: '两次密码输入需保持一致',
        mailResetPassword_link_tips: '重置密码链接有误'
    },
    // 找回密码（重置密码成功）
    mailForgetSuccess: {
        mailForgetSuccess_title: '密码重置成功',
        mailForgetSuccess_tips: '后跳至登录',
        mailForgetSuccess_jumptime_unit: '秒'
    },
    // 我的资产
    assetManagement: {
        assetManagement_coin: '币种',
        assetManagement_holdings: '持有总量',
        assetManagement_available: '持有可用',
        assetManagement_freeze: '持有冻结',
        assetManagement_appraisement: '估值',
        assetManagement_operation: '操作',
        assetManagement_recharge: '充值',
        assetManagement_deposit: '提现',
        assetManagement_transfer: '划转',
        coin: '币种',
        from: '从',
        to: '到',
        balance: '余额账户',
        pledge_account: '挖矿质押账户',
        quantity: '数量',
        transfer_quantity: '请输入划转数量',
        all: '全部',
        rotatable: '可转',
        assetManagement_deal: '交易',
        assetManagement_address: '充值地址',
        assetManagement_copy_address: '点击复制地址',
        assetManagement_warm: '温馨提示',
        assetManagement_warm_one: '禁止向',
        assetManagement_warm_two: '地址充值除',
        assetManagement_warm_three: '之外的资产',
        assetManagement_warm_four: '任何充入',
        assetManagement_warm_five: '地址的非',
        assetManagement_warm_six: '资产将不可找回',
        assetManagement_warm_seven: '使用',
        assetManagement_warm_eight: '地址充值需要网络确认才能到账',
        assetManagement_warm_nine: '充值完成后，您可以进入充值记录页面跟踪进度',
        assetManagement_deposit_address: '提现地址',
        assetManagement_add_address: '添加地址',
        assetManagement_input_deposit_address: '请输入提现地址',
        assetManagement_remark: '备注(选填)',
        assetManagement_withdrawal_amount: '提现数量',
        assetManagement_all_withdrawal: '全部提现',
        assetManagement_min_deposit: '最小提现数量为',
        assetManagement_max_deposit: '最大提现数量为',
        assetManagement_coin_service: '该币种提币手续费为',
        assetManagement_after: '您可以在提现记录页面跟踪状态',
        assetManagement_no_data: '无数据',
        assetManagement_true_deposit_address: '请输入正确的提币地址',
        assetManagement_input_withdrawal_amount: '请输入提现数量',
        assetManagement_withdrawal_success: '提现成功',
        assetManagement_copy_success: '复制成功',
        assetManagement_confirm: '确定',
        assetManagement_copy_defeat: '复制失败',
        assetManagement_my_assets: '我的资产',
        assetManagement_account_assets: '账户总资产',
        assetManagement_asset_diagram: '资产比例图',
        assetManagement_withdrawa_amount: '提现额度',
        assetManagement_total_withdrawal: '今日可提现总额',
        assetManagement_withdrawals_have_been: '今日已用提现额',
        assetManagement_add_asset: '添加资产',
        assetManagement_search_coin: '搜索币种名称',
        assetManagement_hide_eye: '隐藏小额资产',
        create_time: '合约开始日期',
        expore_time: '合约结束日期',
        myOrder_search_number:'输入商品标题或订单号进行搜索',
        recharge_activation_code:'充值卡激活码',
        get_recharge_activation_code:'如何获取激活码',
        recharge_clear:'清空输入',
        recharge_activate:'激活充值卡',
        not_withdrawable:'虚拟代币不可提现，一经充值将无法退回',
        used_at_checkout:'算力点(Hashrate Credits)是一种星海矿池内部虚拟代币，在购买时可直接使用算力点进行结算 (1HC = 1TH/s)',
        Recharge_success: '充值成功!'
    },
    // 充提记录
    rechargeRecord: {
        rechargeRecord: '充值记录',
        rechargeRecord_withdrawal_record: '提现记录',
        rechargeRecord_search_coin: '搜索币种名称',
        rechargeRecord_coin: '币种',
        rechargeRecord_time: '时间',
        rechargeRecord_prepaid_number: '充值数量',
        rechargeRecord_prepaid_site: '充值地址',
        rechargeRecord_remark: '备注',
        rechargeRecord_no_data: '暂无数据',
        rechargeRecord_withdrawal_state: '提现状态',
        rechargeRecord_all: '全部',
        rechargeRecord_succeed: '成功',
        rechargeRecord_audit: '审核中',
        rechargeRecord_defeated: '失败',
        rechargeRecord_time_attack: '发起时间',
        rechargeRecord_withdrawal_amount: '提现数量',
        rechargeRecord_actually_realized: '实到数量',
        rechargeRecord_receiving_address: '接收地址/hash值'
    },
    // 添加地址
    presentAddr: {
        presentAddr_address: '添加地址',
        presentAddr_select_coin: '选择币种',
        presentAddr_please_select_coin: '请选择币种',
        presentAddr_mention_address: '提币地址',
        presentAddr_true_withdrawal_address: '请填写正确的提币地址',
        presentAddr_true_withdrawal_address01: '该地址已存在',
        presentAddr_remark: '备注',
        presentAddr_add: '添 加',
        presentAddr_warm: '温馨提示',
        presentAddr_warm_one: '请不要在提币地址中输入特殊字符',
        presentAddr_warm_two: '请妥善备注好自己的提币地址备注便于提币识别',
        presentAddr_warm_three: '有要求填写地址标签的提币地址请务必填写标签以防币种转出丢失',
        presentAddr_warm_four: '请确保所填地址无误，如个人原因造成币种丢失平台将不承担损失',
        presentAddr_withdrawal_address: '提现地址',
        presentAddr_no_data: '无数据',
        presentAddr_coin: '币种',
        presentAddr_operation: '操作',
        presentAddr_delete: '删除',
        presentAddr_add_successfully: '添加成功',
        presentAddr_affirm: '确认',
        presentAddr_confirm_address: '是否确认添加地址',
        presentAddr_hint: '提示',
        presentAddr_cancel: '取消',
        presentAddr_confirm_deleting_address: '是否确认删除本地址',
        presentAddr_safeidenty: '安全验证',
        presentAddr_phone: '手机',
        presentAddr_pleaseWritePhonecode: '请输入手机验证码',
        presentAddr_getcode: '获取验证码',
        presentAddr_timedown: '秒后可再次发送',
        presentAddr_email: '邮箱',
        presentAddr_pleaseWriteEmailcode: '请输入邮箱验证码',
        presentAddr_google: '谷歌验证',
        presentAddr_pleaseWriteGooglecode: '请输入谷歌验证码',
        presentAddr_submit: '提交',
        presentAddr_pleaseWriteRightCode: '请输入正确的格式'
    },
    // 统计
    stats:{
        network_overview: '网络概览'
    },
    // 声誉系统
    methodology:{
        methodology_tit: '评分标准'
    },
    fs3: {
        title: '通用存储服务',
        access_key: 'Access Key',
        secret: 'Secret',
        URL: 'URL',
        Entry_btn: '前往FS3',
        copy: '复制',
        copied: '已复制'
    },
    profile: {
      "currentbalance": "当前余额：",
      "copy": "复制",
      "copied": "已复制",
      user_copysuccess: '复制成功!',
      user_copydefeat: '复制失败',
      user_OK: '确定',
      "account": "账户",
      "paymentmethod": "支付方式",
      "bills": "账单",
      "security": "安全",
      "referral": "推荐码",
      "promotion": "优惠推广",
      "setting": "设置",
      "firstLogin": "为了得到更好的服务，请完善你的信息",
      "firstname": "名字*",
      "lastname": "姓氏*",
      "email": "电子邮件*",
      "company": "公司",
      "phone": "电话*",
      "update": "更新",
  
      "require01": "请填写电话号码",
      "require02": "电话号码必须是10到16位数。",
  
      "warning01": "你暂时只能添加加拿大信用卡",
      "warning02": "为了验证你的信用卡，我们将从你的卡内扣取1美分.",
  
      "nbaiwallet": "NBAI 钱包",
      "addcard": "  添加一张信用卡",
      "creditcards": "信用卡",
      "default": "默认",
      "delete": "删除",
      "edit": "编辑",
      "cardnumber": "卡号*",
      "expirationdate": "截止日期*",
      "require03": "无法绑定过期的信用卡*",
      "streetnumber": "门牌号码*",
      "cvv":"CVV安全码*",
      "streetname": "街道名*",
      "postcode": "邮政编码*",
      "setasdefault": "  设为默认",
      "addcreditcard": "添加信用卡",
      "delcreditcard": "删除信用卡",
      "realdelcreditcard": "是否确认删除该信用卡？",
      "editcreditcard": "编辑信用卡",
      "cancel": "取消",
      "confirm": "确认",
      "close": "关闭",
      "pending":"等待验证",
      "success":"已验证",
      "fail":"验证失败",
      "verificate":"验证",
      "amount":"确认金额",
  
      "nobillyet": "你在该期间没有账单。",
      "mybills": "我的账单",
      "from": "从",
      "to": "到",
      "bill": "账单",
      "download": "下载",
      "chooseYear": "选择你的账单年份:",
      "period": "或者选择一段特定日期",
      "search": "搜索",
      "total": "总金额",
      "cnsFreehours": "CNS免费小时数",
      "notebookFreehours": "Notebook免费小时数",
      "lbFreehours": "弹性伸缩免费小时数",
  
      "oldPassword": "旧密码*",
      "newPassword": "新密码*",
      "confirmPassword": "确认密码*",
      "require04": "旧密码是必需的",
      "require05": "新密码是必需的",
      "require06": "密码必须包含至少一个数字，一个字母，长度为6-16。",
      "require07": "确认密码是必需的",
      "require08": "密码不匹配。",
  
      "referBigTitle": "与大家分享你对AI计算的爱",
      "referSmallTitle01": "分享你的邀请链接",
      "referFirstP1": "邀请一个朋友使用Orion云平台. 你俩都将会收到 ",
      "referFirstP2": "1,500 NBAI",
      "referFirstP3": "，前提是你的朋友完成了注册及登陆平台",
      "referSmallTitle02": "向你的朋友发送邀请邮件",
      "referSmallTitle03": "在社交媒体分享",
      "referSmallTitle04": "你收到的奖励",
      "refer02P1": "邀请朋友",
      "refer02P2": "你不能邀请自己",
      "refer02P3": "请输入有效的邮件地址",
      "refer03P1": "推特",
      "refer03P2": "脸书",
      "refer03P3": "微信",
      "refer04P1": "你还没有邀请任何朋友，开始邀请吧，你们都能收到NBAI奖励",
      "refer04P2": "开始邀请朋友",
      "refer04P301": "你已邀请了",
      "refer04P302": "个朋友",
      "refer04P303": " 来到Orion云平台，你已获得累计",
      "refer04P304": " NBAI",
      "refer04P4": "注册邮箱",
      "refer04P5": "激活日期",
      "emailPlaceHolder": "用逗号分隔多个邮箱地址",
  
      "promotion": "优惠推广",
      "code": "请输入你的折扣码",
      "redeemMsg": '请输入您的兑换代码',
      "submit": "提交",

      Last_week: '最近一周',
      Last_month: '最近一个月',
      Last_three_months: '最近三个月'
    },
    uploadFile: {
        title: '文件列表',
        contract_id: '合约ID',
        contract_id01: '合约ID',
        cid: 'CID',
        status: '状态',
        file_name: '文件名称',
        file_size: '文件大小',
        upload_title: '任务信息',
        task_name: '任务名称',
        w3ss_id: "Web3存储服务商",
        deal_id: '交易ID',
        download_link: '下载链接',
        upload: '上传文件',
        upload_form_file_tip: '上传文件不能为空',
        search_y: '按CID搜索',
        search_input: '输入值',
        deal_title: '选定批次的 Filecoin 交易（待定交易的 deal_id = 0）：',
        Live_deal: '实时交易',
        live_deal_btn: '查看交易',
        live_deal_btn_no: '没有链接：错误',
    }
}
