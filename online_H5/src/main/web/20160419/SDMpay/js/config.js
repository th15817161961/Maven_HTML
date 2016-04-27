/**
 * Created by liuyun on 15/4/26.
 * Version 1.0
 * (C)Copyright www.bestpay.com.cn Corporation. 2015-20XX All rights reserved.
 */
define({
    'dummy' : false,
    'debug' : true,
    'browser' : false,

    'page' : {
        'main' : {
            'id' : 'page_main',
            'title' : '水电煤'
        },
        'bill_queries' : {
            'id' : 'page_bill_queries',
            'title' : '水费'
        },
        'comfirm' : {
            'id' : 'order_comfirm',
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
        'flatFee' : {
            'id' : 'id_flatFee_show',
            'title' : null,
            'prompt' : true
        },
        'selectPage' : {
            'id' : 'id_SelectProPage',
            'title' : '选择省市'
        },
        'LocalHost' : {
            'id' : 'page_LocalHost',
            'title' : null,
            'prompt' : true,
            'isDisable':true
        }
    },

    'CARDTYPECODE' : '2004',

    'CODE' : {
        'COMMOSSION_ERROR' : '004010'
    },
    'ResultMSG' : {
        '006770' : '请确认号码无误后再试',
        '000031' : '外系统超时',
        '009002' : '请点击“确认”键核实订单状态，若订单已生成且状态不为“失败”，即可收取顾客款项。充值一般10分钟内到账，最晚24小时。如有延误敬请耐心等待，或通过“在线客服”和4008011888客服热线查询，点击确定到订单列表详情。'
    }
});