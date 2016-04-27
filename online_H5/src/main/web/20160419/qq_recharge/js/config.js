/**
 * Created by liuyun on 15/6/26.
 * Version 1.0
 * (C)Copyright www.bestpay.com.cn Corporation. 2015-20XX All rights reserved.
 */
define({
    'dummy': false,
    'debug': true,
    'browser': false,

    'page': {
        'main': {
            'id': 'page_main',
            'title': 'QQ充值'
        },
        'confirm' : {
            'id' : 'page_info_pay',
            'title' : '付款详情',
            'goToRecords' : true
        },
        'float_dia' : {
            'id' : 'page_float_dia',
            'title' : '付款详情',
            'togo' : true
//            'prompt' : true,
//            'isDisable':true
        },
        'select_bank' : { 
			'id' : 'id_resource_list',
            'title' : 'QQ充值',
            'prompt' : true
        },
        'select_buy_num' : {
            'id' : 'id_buyNum_list',
            'title' : 'QQ充值',
            'prompt' : true
        },
        'pay' : {
            'id' : 'page_select_pay',
            'title' : ''
        },
        'comfirm' : {
            'id' : 'order_comfirm',
            'title' : '付款详情',
            'goToRecords' : true
        },
        'LocalHost' : {
            'id' : 'page_LocalHost',
            'title' : null,
            'prompt' : true,
            'isDisable':true
        }
    },

    'QQproductCode': {
        "1010": "00000037",//QQ游戏(蓝钻)
        "1011": "00000038",//QQ秀(红钻)
        "1012": "00000039",//QQ堂(紫钻)
        "1013": "00000035",//QQ会员
        "1014": "00000036",//QQ空间(黄钻)
        "1015": "00000034"//Q币
    },
    //QQ充值类型对应购买数值
    'selectItem': {
        qb: {
            '10个': '10', '30个': '30',
            '50个': '50', '100个': '100', '300个': '300','其他数量':'0'
        },
        other: {
            '1个月': '10', '3个月': '30',
            '6个月': '60', '12个月': '120'
        }
    },
    'productName':{
        "1010": "QQ游戏(蓝钻)",//QQ游戏(蓝钻)
        "1011": "QQ秀(红钻)",//QQ秀(红钻)
        "1012": "QQ堂(紫钻)",//QQ堂(紫钻)
        "1013": "QQ会员",//QQ会员
        "1014": "QQ空间(黄钻)",//QQ空间(黄钻)
        "1015": "Q币"//Q币
    },
    'ERROR': {
        "tokenLost": "请您重新登陆",
        "phoneError": "请输入正确的手机号码",
        "pwdError": "请输入6~12位支付密码"
    },
    'CODE': {
        'COMMOSSION_ERROR' : '004010'
    }
});