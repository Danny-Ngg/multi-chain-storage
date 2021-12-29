export default {
    route: {
        dashboard: "Dashboard",
        Deal: "My Files",
        Miner: "Storage Provider Management",
        myProfile: 'My Profile',
        browse: 'Browse Tasks',
        Tools: 'Tools',
        My_FS3: 'FS3',
        Stats:'Statistics',
        myAccount: 'Settings',
        Upload_files: 'Upload File',
        Search_file: 'Search File'
    },
    navbar: {
        sidebar_header: 'FIL SWAN',
        "section": "Section",
        "myprofile": "My Profile",
        "support": "Support",
        hi: 'Hi, ',
        log_in: 'Log In',
        sign_up: 'Sign Up',
        "logout": "Logout",
        dashboard: 'DASHBOARD',
        minerDetail: 'STORAGE PROVIDER DETAIL',
        deal: 'MY FILES',
        miner: 'STORAGE PROVIDER MANAGEMENT',
        deal_details: 'TASK DETAIL',
        My_Profile: 'MY PROFILE',
        Browse_tasks: 'BROWSE TASKS',
        create_tasks: 'CREATE TASK',
        Upload_files: 'UPLOAD FILE',
        Tools: 'TOOLS',
        Stats:'STATISTICS',
        copy: '© 2021 FilSwan Canada',
        'ScoreChange': 'Score Change',
        'ScoreChange_legend': 'Score',
        'PowerChange': 'Power Change',
        'MiningData': 'Storage Sealing Data',
        selectDate:{
            sevenDays: '7days',
            thirtyDays: '30days',
            oneYearL: '1year',
            roundClock: '24hours'
        },
        Power: 'Adj.Storage Power',
        PowerGrowth: 'Adj.Storage Power Growth',
        BillingHistory: 'Billing History'
    },
    // 首页
    dashboard: {
        text01:'Total Storage Provider',
        text02: 'Active Storage Provider',
        form_name: 'Filecoin Storage Provider',
        form_swith: 'Accept Offline Deal',
        form_swith_in: 'Online Deal',
        search: 'W3SS ID Search...',
        formTable01: 'LOCATION',
        formTable02: 'W3SS ID',
        formTable03: 'PRICE (GiB/epoch)',
        formTable04: 'PRICE (32GiB/year)',
        formTable05: 'PRICE VERIFIED (GiB/epoch)',
        formTable06: 'SIZE',
        formTable07: 'OFFLINE DEALS',
        formTable08: 'SCORE',
        formTable09: 'LAST UPDATE',
        formTable10: 'MAX PIECE SIZE',
        formTable11: 'MIN PIECE SIZE',
        formTable12: 'STATUS',
        formTable13: 'CONTACT INFO',
        formTable14: 'ADJUSTED POWER',
        formNotData: 'No Data',
        ON: 'ON',
        OFF:'OFF'
    },
    deal: {
        upload_title: 'Create Your Task for Offline Sealing',
        upload_form_name: 'Task Name:',
        upload_form_desc: 'Description:',
        upload_form_tags: 'Tags:',
        description: 'Task Description:',
        curated_dataset: 'Curated Dataset:',
        upload_form_type: 'Type:',
        upload_form_file: 'CSV File:',
        upload_form_file_tip: 'Maximum upload .csv file size: 2 MB',
        upload_form_minerId: 'W3SS ID:',
        upload_form_dataset: 'Curated Dataset',
        upload_form_minerId_tips: 'W3SS ID cannot be null',
        upload_form_miner: 'Target Storage Provider:',
        upload_form_btn: 'Attach File',
        Submit: 'Submit',
        Cancel: 'Cancel',
        save: 'Save',
        saveSetting: 'Save Settings',
        form_name: 'Tasks List',
        form_select_title: 'Task Status:',
        form_select_title01: 'Deal Status:',
        form_search: 'Advanced Search',
        task_search: 'Task Name Search...',
        task_dataset: 'Dataset Search...',
        task_dataset_csv: 'Dataset CSV',
        formTable01: 'TASK NAME',
        formTable02: 'W3SS ID',
        formTable03: 'TASK STATUS',
        formTable04: 'TYPE',
        formTable05: 'NOTE',
        formTable06: 'DESCRIPTION',
        formTable07: 'TAGS',
        formTable08: 'DATE CREATE (EST)',
        formTable09: 'ACTION',
        formTable10: 'CLIENT NAME',
        // formTable08: 'GENERATION TIME',
        formNotData: 'No Data',
        detailTable01: 'DEAL CID',
        detailTable02: 'file_path',
        detailTable03: 'SOURCE URL',
        detailTable04: 'STATUS',
        detailTable05: 'START EPOCH',
        detailTable06: 'LAST UPDATED',
        detailTable07: 'DATE CREATED',
        detailTable08: 'NOTE',
        detailTable09: 'DATA CID',
        backto: 'Go Back',
        title_top_name: 'Task Name',
        title_top_miner: 'Task Storage Provider',
        title_top_price: 'Price',
        title_top_created: 'Created At',
        title_top_Last_Update: 'Last Update',
        delete: 'delete',
        edit: 'Edit',
        tags_tips: 'Enter up to 5 tags that best describe your task. Web3 Storage Provider (W3SP) will use these tags to find task they are most interested and experienced in.',
        table_miner_title: 'Assigned Tasks List',
        Clear_all: 'Clear All',
        table_th_02: 'DATE ASSIGNED (EST)',
        table_th_03: 'ASSIGNED STORAGE PROVIDER',
        table_th_04: 'DEALS',
        table_th_05: 'BIDS',
        table_th_06: 'ACTION',
        table_th_07: 'MD5',
        table_th_08: 'MD5_ORIGIN',
        module_deal_tips: 'Are you sure you want to modify the status to ' ,
        Validate: 'Validate',
        Tips: 'Tips',
        deal_not_found: 'Offline deal not found.',
        proposal_not_null: 'Describe your proposal cannot be null!',
        please_tip01: 'Please enter a task name',
        please_tip02: 'Please enter W3SS ID',
    },
    miner: {
        search_place: 'Search for Tasks...',
        title_Type: 'Task Type',
        title_Tags: 'Tags',
        title_Status: 'Status',
        title_hasMiner: 'Has Storage Provider',
        title_CreateDate: 'Create Date',
        title_location: 'Specific Location',
        Reset_filters: 'Reset filters',
        bids_title: 'About the Poster',
        bids_title01: 'Place a Bid on this Task',
        tab_left: 'As Client',
        tab_right: 'As Storage Provider',
        onle_one: 'Only one Storage Provider',
        Miner: 'Storage Provider',
        Assign_Miner: 'Assign Storage Provider'
    },
    stats:{
        network_overview: 'Network overview'
    },
    my_profile: {
        left_menu_01: 'Profile',
        left_menu_02: 'Password',
        left_menu_03: 'Payment',
        left_menu_04: 'Developer Settings',
        left_menu_05: 'Tools',
        contact_Email: 'Email',
        Change_password: 'Change Password',
        wrong_password: 'wrong password',
        Reenter_new_password: 'Reenter New Password',
        apiKey_your_title: 'Your API keys',
        apiKey_tips_01: 'API keys provide full access to your swan account, so keep them safe.',
        apiKey_tips_02: 'How to use API key.',
        apiKey_tips_03: 'Tips on keeping API keys secure.',
        apiKey_btn_01: 'New API Key',
        apiKey_btn_02: 'Revoke',
        table_apiKey_th_01: 'NAME',
        table_apiKey_th_02: 'KEY',
        table_apiKey_th_03: 'ACCESS TOKEN',
        table_apiKey_th_04: 'DATE CREATED',
        table_apiKey_th_05: 'STATUS',
        create_api_title: 'Create A Key',
        create_api_title01: 'API token successfully created',
        create_api_title02: 'Important',
        create_api_tips: 'Name cannot be null!',
        create_api_tips01: 'This token is your private secret to access Filswan platform services.',
        create_api_tips02: 'The secret key is only displayed once. You’ll need to copy it somewhere safe before continuing.',
        create_api_tips03: 'Your new API Key is：',
        create_api_tips04: 'Your new Access Token is：',
        create_api_tips05: 'When you generate your keys, you will see a modal with the Swan  API Key, Swan API Secret, and the JWT.',
        create_api_tips06: 'Your "Swan API Key" acts as your public key for our REST API, and your "Swan Secret API Key" acts as the password for your public key. The JWT is an encoded mix of the two. Be sure to keep your secret key private!',
        create_api_tips07: "For added customer security, these keys are encrypted on Swan's side and will only ever be displayed once, so write them down. If you lose these values you'll need to revoke the key and create a new one.",
        Check_dataCap: 'Check DataCap',
        form_contact: 'Contact Info',
        form_username: 'User Name',
        form_ProfileHeadline: 'Profile Headline',
        form_Summary: 'Summary',
        list_title: 'Storage Provider List',
        list_button: 'Manage',
        table_child_01: 'W3StorageSystemID',
        table_child_02: 'Offline Deal Available',
        table_child_03: 'Summary',
        Your_swan_miners: 'Your Swan Storage Providers',
        swan_miners_add: 'Add',
        swan_miners_Delete: 'Delete',
        swan_miners_Refresh: 'Refresh',
        pass_current: 'Current Password',
        pass_new: 'New Password',
        pass_confirm: 'Confirm Password',
        miner_add_h1: 'Signature verification',
        miner_add_title: 'Only open claim for accounts with storage power ≥ 32 GiB',
        miner_add_OwnerAddress: 'Owner address',
        miner_add_Contact: 'Contact',
        miner_add_contact_place: 'Email, Cell phone...',
        miner_add_Message: 'Message',
        miner_add_SignCode: 'Sign code',
        miner_add_Signature: 'Signature',
        miner_add_sign_place: 'Please copy the above sign code, sign it with Filecoin wallet, and enter the signature',
        miner_add_ms: ' Special notes: sensitive words, prohibited words, celebrity names, etc. are not allowed in account names. If there is any violation, the signature will be deleted and prohibited. Thank you for your cooperation. ',
        module_tips01: 'Do you want to delete Storage Provider ',
        Executing: 'Executing...',
        module_tips02: 'Please select a Storage Provider.',
        module_tips03: 'Do you want to refresh Storage Provider ',
        module_tips04: 'Do you want to delete API key?',
        module_tips05: 'Do you want to change the information for ',
        Success: 'Success',
        Choose_Picture: 'Choose Picture'
    },
    components: {
        choose_name: 'Choose a name for your task',
        choose_description: 'Task Description',
        curated_dataset:'Curated Dataset',
        new_tag: 'New Tag',
        tag_description: 'Enter up to 5 tags that best describe your task. Web3 Storage Provider (W3SP) will use these tags to find task they are most interested and experienced in.',
        type_Regular: 'Regular',
        type_Verified: 'Verified',
        Upload_CSV: 'Upload CSV',
        upload_desc: 'You can download CSV template from',
        upload_desc01: '',
        upload_here: ' here',
        yes: "Yes",
        no: 'No',
        Task_expected: 'Task Expected Complete in',
        day: 'days',
        accepted: 'Counting from the moment the task is accepted.',
        upload_re_upload: 'Please re-upload the .csv file including deal cid and start-epoch.',
        upload_Download: 'Download Example.',
        Open_bid: 'Open bid',
        Estimated_budget: 'Estimated budget',
        Estimated_budget_min: 'Min',
        Estimated_budget_max: 'Max',
        e_g_name: 'e.g.Task001'
    },
    login: {
        login_loginphone: 'Phone',
        login_loginmail: 'Email',
        login_phonenum: 'Mobile number',
        login_phonepw: 'Password',
        login_phonelogin: 'Log In ',
        login_phonereg: 'Sign Up',
        login_phoneforget: 'Forgot Password?',
        login_mailnum: 'Email',
        login_mailpw: 'Password',
        login_maillogin: 'Log in ',
        login_mailreg: 'Sign Up',
        login_mailforget: 'Forgot password?',
        login_validate_title: 'Security Verification',
        login_validate_phone: 'Mobile number ',
        login_validate_phonecode: 'Verification Code',
        login_validate_phone_tips_true: 'Please enter valid verification code！',
        login_validate_google: 'Google Authentication Code',
        login_validate_googlecode: 'Google Authentication Code',
        login_validate_google_tips_true: 'Please enter valid verification code！',
        login_validate_btn: 'OK',
        login_verify_phone_tips_true: 'Please enter valid phone number',
        login_verify_phone_tips_empty: 'The phone number shall not be null！',
        login_verify_phonePassword_tips_true: 'Please enter correct password',
        login_verify_mail_tips_true: 'Please enter valid email ',
        login_verify_mail_tips_empty: 'Please enter an email address.',
        login_verify_mailPassword_tips_true: 'Please enter correct password',
        login_getVerifyCodeWord: 'Send code',
        login_getVerifyCodeWord_time: 's Send',
        login_verify_account_tips_no: 'Cannot Find the Account',
        login_verify_pw_tips_empty: 'Please enter a password.',
        login_verify_code_tips_empty: 'Please enter valid verification code',
        login_verify_pw_tips_rule: 'The password must contain 8-16 bytes, and at least contains 1 uppercase letter, 1 lowercase letter and 1 number.',
        login_validate_mailcode: 'Email Verification Code',
        login_validate_mail_tips_true: 'Please enter valid verification code！',
        login_validate_mail: 'Email',
        login_verify_zh_tips_empty:'Account number cannot be empty',
        login_h1:'New customer? Sign up here',
        login_h2:'Welcome'

    },
    accountActivation: {
        accountActivation_title: 'Enable Your Account',
        accountActivation_tips_1: 'Authentication mail has sent to ',
        accountActivation_tips_2: 'Please go to email to active your account.',
        accountActivation_resend: 'Resend',
        getVerifyCodeWord_time: 's Send'
    },
    activationSuccess: {
        activationSuccess_success_title: 'Verified!',
        activationSuccess_success_tips: 'Skip to log in',
        activationSuccess_success_jumptime_unit: 's',
        activationSuccess_fail_title: 'The link is invalid',
        activationSuccess_fail_tips: 'Please log in again to get active links',
        activationSuccess_fail_tips01: 'Retrieve activation mail'
    },
    register: {
        register_registerphone: 'Phone',
        register_registermail: 'Email',
        register_phonenum: 'Mobile number',
        register_phonecheckcode: 'Verification code',
        register_phonepw: 'Password',
        register_phonepwconfirm: 'Confirm Password',
        register_agree: 'I agree to the Btcsoon',
        register_agreelaw: 'Terms of User',
        register_phonereg: 'Sign Up',
        register_phonelogin: 'Log in ',
        register_mailnum: 'Email Address',
        register_mailpw: 'Password',
        register_mailpwconfirm: 'Confirm Password',
        register_mailreg: 'Sign Up',
        register_maillogin: 'Log In ',
        register_regsuccess: 'Successful!',
        register_regsuccess_tips: 'back to log in ',
        register_verify_phone_tips_true: 'Please Enter Valid Phone Number',
        register_verify_phone_tips_empty: 'The Phone Number Shall Not Be Null！',
        register_verify_verifyCode_tips_true: 'Please Enter Valid Verification Code！',
        register_verify_phonePassword_tips_true: 'Password',
        register_verify_phonePasswordVerify_tips_true: 'Please Enter Valid Password',
        register_verify_term_tips_true: 'Please Check Terms of Users',
        register_verify_mail_tips_true: 'Please Enter Valid Email ',
        register_verify_mail_tips_empty: 'Please enter an email address.',
        register_verify_mailPassword_tips_true: 'Please enter valid password',
        register_verify_mailPasswordVerify_tips_true: 'Please enter valid password',
        register_getVerifyCodeWord: 'Send code',
        register_getVerifyCodeWord_time: 's Send',
        register_verify_account_tips_exist: 'The Account Is Existed!',
        register_verify_pw_tips_empty: 'Please enter a password.',
        register_verify_pw_tips_rule: 'The password must contain 8-16 bytes, and at least contains 1 uppercase letter, 1 lowercase letter and 1 number.',
        register_verify_placehold_tips_rule: 'Password',
        register_verify_pw_tips_reenter: 'Reenter password',
        register_verify_pw_tips_same: 'Two passwords do not match',
        register_jumptime_unit: 's',
        register_h1:'Already have an account? Log in here',
        register_h2:'Reference code (optional)'
    },
    forgetPassword: {
        forgetPassword_title: 'Forgot Password?',
        forgetPassword_phonenum: 'Mobile number',
        forgetPassword_phonecheckcode: 'Verification Code',
        forgetPassword_phonepw: 'Login Password',
        forgetPassword_phonepwconfirm: 'Confirm Your Password',
        forgetPassword_phonebtn: 'OK',
        forgetPassword_mailget: 'Find Password via Email',
        forgetPassword_mailbtn: 'OK',
        forgetPassword_phoneget: 'Find Password via Phone',
        forgetPassword_mailnum: 'Email Address',
        forgetPassword_verify_phone_tips_true: 'Please Enter valid Phone Number',
        forgetPassword_verify_phone_tips_empty: 'The Phone Number Shall Not Be Null！',
        forgetPassword_verify_phonePassword_tips_true: 'Please Enter Correct Password',
        forgetPassword_verify_phonePasswordVerify_tips_true: 'Please Enter Correct Password',
        forgetPassword_verify_mail_tips_true: 'Please Enter valid Email ',
        forgetPassword_verify_mail_tips_empty: 'Please enter an email address.',
        forgetPassword_getVerifyCodeWord: 'Send code',
        forgetPassword_getVerifyCodeWord_time: 's Send',
        forgetPassword_verify_verifyCode_tips_true: 'Verification Code',
        forgetPassword_verify_account_tips_no: 'The Account Is Not Existed!',
        forgetPassword_verify_pw_tips_empty: 'Please enter a password.',
        forgetPassword_verify_pw_tips_rule: 'The password must contain 8-16 bytes, and at least contains 1 uppercase letter, 1 lowercase letter and 1 number.',
        forgetPassword_verify_pw_tips_same: 'Two Passwords Do Not Match',
        forgetPassword_success_title: 'Success',
        forgetPassword_success_btn: 'Log In',
        forgetPassword_h1:'Already have an account? Log in here',
        forgetPassword_reenter:'Reenter password',
        forgetPassword_submit:'Submit',
        forgetPassword_phone:'Phone',
        forgetPassword_mail:'Email'
    },
    mailForget: {
        mailForget_title: 'Reset ',
        mailForget_tips_1: 'Authentication Mail Has Sent To',
        mailForget_tips_2: 'Please Log In The Mail and Complete Setting',
        mailForget_resend: 'Send code',
        getVerifyCodeWord: 'Send code again',
        getVerifyCodeWord_time: 's Send',
    },
    mailResetPassword: {
        mailResetPassword_title: 'Reset',
        mailResetPassword_pw: 'Old Password',
        mailResetPassword_new_pw: 'New Password',
        mailResetPassword_pwconfirm: 'Confirm Password',
        mailResetPassword_btn: 'OK',
        mailResetPassword_verify_pw_tips_true: 'Please enter correct password',
        mailResetPassword_verify_pwconfirm_tips_true: 'Please enter correct password',
        mailResetPassword_verify_pw_tips_rule: 'The password must contain 8-16 bytes, and at least contains 1 uppercase letter, 1 lowercase letter and 1 number.',
        mailResetPassword_verify_pw_tips_same: 'Two Passwords Do Not Match',
        mailResetPassword_link_tips: 'The Link Is Incorrect'
    },
    mailForgetSuccess: {
        mailForgetSuccess_title: 'Success',
        mailForgetSuccess_tips: 'Skip to log in',
        mailForgetSuccess_jumptime_unit: 's'
    },
    fs3: {
        title: 'General Storage Service',
        access_key: 'Access Key',
        secret: 'Secret',
        URL: 'URL',
        Entry_btn: 'Entry FS3',
        copy: 'Copy',
        copied: 'Copied'
    },
    profile: {
      "currentbalance": "Current Balance:",
      "copy": "Copy",
      "copied": "Copied",
      user_copysuccess: 'Success',
      user_copydefeat: 'Failed',
      user_OK: 'OK',
      "account": "Account",
      "paymentmethod": "Payment Method",
      "bills": "Bills",
      "security": "Security",
      "referral": "Referral",
      "promotion": "Promotion",
      "setting": "Setting",
      "firstLogin": "In order to get a better service, please complete your information",
      "firstname": "First Name*",
      "lastname": "Last Name*",
      "email": "Email*",
      "company": "Company",
      "phone": "Phone*",
      "update": "Update",
  
      "require01": "Phone is required",
      "require02": "Phone Number must be 10 to 16 digits.",
  
      "warning01": "You can only add a Canadian credit cards.",
      "warning02": "To verify your credit card, we will charge $0.01 from your card.",
  
      "nbaiwallet": "NBAI Wallet",
      "addcard": "  Add a card",
      "creditcards": "Credit Cards",
      "default": "Default",
      "delete": "Delete",
      "edit": "Edit",
      "cardnumber": "Card number*",
      "expirationdate": "Expiration date*",
      "require03": "Can not bind an expired credit card*",
      "streetnumber": "Street number*",
      "cvv":"CVV*",
      "streetname": "Street name*",
      "postcode": "ZIP*",
      "setasdefault": "Set as default",
      "addcreditcard": "Add Credit Card",
      "delcreditcard": "Delete a credit card",
      "realdelcreditcard": "Do you really want to delete this credit card from your wallet?",
      "editcreditcard": "Edit Credit Card",
      "cancel": "Cancel",
      "confirm": "Confirm",
      "close": "Close",
  
      "pending":"Pending",
      "success":"Verified",
      "fail":"Invalid",
      "verificate":"Verificate",
      "amount":"Confirm Price Number",
  
      "nobillyet": "You don't have any bill in this period.",
      "mybills": "My Bills",
      "from": "From",
      "to": "To",
      "total": "Total",
      "bill": "Bill",
      "download": "Download",
      "chooseYear": "Choose the bills year:",
      "period": "Or select a period",
      "search": "Search",
      "cnsFreehours": "CNS Free Hours",
      "notebookFreehours": "Notebook Free Hours",
      "lbFreehours": "Load Balancer Free Hours",
  
      "oldPassword": "Old Password*",
      "newPassword": "New Password*",
      "confirmPassword": "Confirm Password*",
      "require04": "Old Password is required",
      "require05": "New Password is required",
      "require06": "Password must contain at least one number,one letter, length 6-16.",
      "require07": "Confirm password is required",
      "require08": "Passwords don't match.",
  
      "referBigTitle": "Share your love of AI computing",
      "referSmallTitle01": "Share your invite link",
      "referFirstP1": "Introduce a friend to the Orion Cloud Platform. Both you and your friend will receive ",
      "referFirstP2": "1,500 NBAI",
      "referFirstP3": " upon your friend's activation and registration",
      "referSmallTitle02": "Send friends an invite email",
      "referSmallTitle03": "Share on social media",
      "referSmallTitle04": "Your Rewards",
      "refer02P1": "Send invites",
      "refer02P2": "You can not invite yourself",
      "refer02P3": "You need to input valid email addresses",
      "refer03P1": "Twitter",
      "refer03P2": "Facebook",
      "refer03P3": "WeChat",
      "refer04P1": "Your have not invited any friends. Refer someone to receive NBAI each",
      "refer04P2": "Start inviting Friends",
      "refer04P301": "Your have invited ",
      "refer04P302": " friends",
      "refer04P303": " to the Orion Cloud platform. You have accumulated ",
      "refer04P304": " NBAI",
      "refer04P4": "Email",
      "refer04P5": "Activation Date",
      "emailPlaceHolder": "Email addresses separate by commas",
  
      "promotion": "Promotion",
      "code": "Please enter your coupon code",
      "redeemMsg": "Please enter your Redeem code",
  
      "submit": "Submit",

      Last_week: 'Last week',
      Last_month: 'Last month',
      Last_three_months: 'Last three months'
    },
    uploadFile: {
        title: 'Files List',
        contract_id: 'CONTRACT ID',
        contract_id01: 'Contract ID',
        cid: 'CID',
        status: 'PIN STATUS',
        file_name: 'File Name',
        file_size: 'File Size',
        upload_title: 'Task information',
        task_name: 'Task Name',
        w3ss_id: "Storage Provider",
        deal_id: 'Deal ID',
        download_link: 'Download Link',
        upload: 'Upload File',
        upload_form_file_tip: 'The uploaded file cannot be empty',
        search_y: 'Search by CID',
        search_input: 'Enter value',
        deal_title: 'Filecoin deals for selected batch (pending deals have deal_id = 0):',
        Live_deal: 'LIVE DEAL',
        live_deal_btn: 'View Deal',
        live_deal_btn_no: 'No link: Error',
    },
    billing: {
        TRANSACTION: 'TRANSACTION',
        AMOUNT: 'AMOUNT',
        PAYLOADCID: 'DATA CID',
        WALLET: 'WALLET',
        NETWORK: 'NETWORK',
        PAYMENTDATE: 'PAYMENT DATE',
        Deadline: 'Deadline'
    },
    transfer: {
      binance: 'Binance Bridge',
      binance_desc: 'The safe, fast and most secure way to bring cross-chain assets to Binance chains.',
      binance_video: 'Introduction video',
      user_guide: 'User Guide',
      quota: 'Daily quota',
      asset: 'Asset',
      from: 'From',
      to: 'To',
      amount: 'Amount',
      "GASLIMIT":"Gas Limit",
      "GASLIMITMUST":"Gas Limit Must Be Between 21000 UNITS And 4928871 UNITS.",
      "GASPRICE":"Gas Price (in Gwei)",
      min_price: 'Minimum amount must be greater than ',
      Insufficient: 'Insufficient',
      balance: 'balance',
      Available: 'Available',
      max: 'Max',
      receive: 'You will receive',
      connect_wallet: 'Connect Wallet',
      connected: 'Connected',
      connected_fail: 'Connection failed',
      next: 'Next',
      Destination: 'Destination',
      arrival_network: 'This is the arrival network address',
      tip: 'Your swap address will be your receiving address, please switch the network to check your balance after completion.',
      tip_danger: 'To protect your asset, from network must be current network of your wallet. switch your wallet to ',
      tip_danger01: ' or change the direction of your swap networks.',
      tip_title: 'Reminder'
    },
}
