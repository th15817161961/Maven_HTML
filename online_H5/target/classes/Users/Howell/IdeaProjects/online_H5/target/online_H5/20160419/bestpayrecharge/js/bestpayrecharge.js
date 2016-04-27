define(["bestpay.ui","bestpay.lang","bestpay.http"],function(c,a,b){var d=null;function e(){d=this;this.userInfo=JSON.parse(Bestpay.User.getSuccessLoginInfo());console.log("userInfo============="+JSON.stringify(userInfo));this.brgAmount=null;this.cardAmount="50";this.idAcountItem="50";this.quickTranInfo={};this.payType="0";this.selectType=null;this.random=null;this.phone_amount=null;this.itMobile=null;this.ipPassword=null;this.orderPageJson={};this.successJson={};this.checkPhome=false;this.rechargeData={};this.productId="0030001";this.defferred=null;this.paymentPlugin="";this.noPwd="";this.businessName="翼支付充值"}e.prototype.initApp=function(){config.TRADE_LIST_QUERY_TYPE=config.BUS_TYPE.BUS_TYPE_PERSON_ACCOUNT;var f=this;goTo(config.page.main,function(){var h=function(k){if(k.length==11){var i=document.getElementById("Mobile");var j=i.value;i.focus();i.value="";i.value=j;d.phoneNumber=k;d.phonetrueoffalse=false;d.getVerifyResp()}else{$("#custNameDiv").hide()}};var g=function(){f.brgAmount.setDisabled(false);f.phoneNumber=null;f.other_money=null};f.itMobile=new c.InputText("Mobile","phone",h,g);f.btnInit()})};e.prototype.btnInit=function(){var f=this;document.getElementById("btn_next").onclick=function(){f.getCommission()};f.selectMoney=function(){var g=this;goTo(config.page.id_Acount);var h={"10":"10","30":"30","50":"50","100":"100","200":"200","其他金额":"0"};var i=new c.dropDownBox("page_id_Acount",this,h,function(k,j){f.idAcountItem=k;if(k=="0"){$("#select_amount_list").hide();$("#phone_amount").show();back();g.onclick=null;return}$("#select_amount_list").show();$("#phone_amount").hide();f.phone_amount.clearValue();i.hideDropDownBox();f.idAcountHtml=$(j).html();$("#AccountSpan").html(f.idAcountHtml+"元");back()},function(){i.hideDropDownBox();back()})};f.phone_amount=new c.InputText("phone_amount","number",function(g){if(g.length==0){document.getElementById("btn_Account_down").onclick=f.selectMoney;document.getElementById("btn_Account_down").onclick()}},function(){document.getElementById("btn_Account_down").onclick=f.selectMoney});document.getElementById("btn_Account_down").onclick=f.selectMoney};e.prototype.callQuickTradingQuery=function(){var f=this;b.callCPSService({service:config.CPS.QUICK_TRADING_QUERY,params:f.quickTradingQueryParams(),showLoading:false,success:f.quickTradingQuerySuccessCallback})};e.prototype.quickTradingQueryParams=function(){var f=this;var g={};g=b.setCPSCommonParams(g);return g};e.prototype.quickTradingQuerySuccessCallback=function(f){if(f.code!==config.RES.SUCCESS){Bestpay.Dialog.showAlertDialog("提醒",f.content,"确定",f.code);return}d.quickTranInfo={perAmount:f.perAmount,allAmount:f.allamount,allTransAction:f.alltransaction};d.handleIsneedpassword()};e.prototype.handleIsneedpassword=function(){var g=this.quickTranInfo;var f=a.yuan2fen(this.cardAmount);console.log("amount : "+f);console.log("quickTranInfo : "+JSON.stringify(g));if(f*1<=1*g.perAmount&&(f*1+1*g.allTransAction)<=1*g.allAmount){d.noPwd=false}else{d.noPwd=true}console.log("BestpayCardSelf.userInfo.authenStatus=="+d.userInfo.authenStatus);if(d.userInfo.authenStatus=="A02"){console.log("BestpayCardSelf.userInfo.hadEpt  "+d.userInfo.hadEpt);if(d.userInfo.hadEpt==1){d.getFinancialProducts()}else{d.fundAccountBalanceInquiry()}}else{d.fundAccountBalanceInquiry()}};e.prototype.getVerifyResp=function(){var f=this;b.callCPSService({service:config.CPS.RECHARE_ACCOUNT_VERIFY,params:f.getVerifyRespParams(),showLoading:true,success:f.getVerifyRespSuccessCallback})};e.prototype.getVerifyRespParams=function(){var h=this;var f=0;var g={verify:f,acctCode:h.phoneNumber,isQryUserInfo:"Y",reamount:a.yuan2fen(this.cardAmount),acceptDate:a.getDate_YYYYMMDD(),acceptTime:a.getTime_HHMMSS()};g=b.setCPSCommonParams(g);return g};e.prototype.getVerifyRespSuccessCallback=function(f){if(f.code!==config.RES.SUCCESS){if(f.code=="006792"){f.content=config.CODE.VAL0_006792}Bestpay.Dialog.showAlertDialog("提醒",f.content,"确定",f.code);d.checkPhome=false;return}d.checkPhome=true;d.orderPageJson.content=f.content;d.orderPageJson.systemNo=f.systemNo;d.orderPageJson._tradeSeq=f.tradeSeq;d.orderPageJson.flag=f.flag;d.orderPageJson.custName=f.custName;d.orderPageJson.amount=f.amount;d.orderPageJson.queryType=f.queryType;d.orderPageJson.ifrefush=f.ifrefush;if(!f.custName){$("#custNameDiv").hide();$("#custNameitemGray").text("")}else{$("#custNameDiv").show();$("#custNameitemGray").text(f.custName)}};e.prototype.getFinancialProducts=function(){var f=this;b.callCPSService({service:config.CPS.FINANCIAL_PRODUCTS,params:f.getFinancialProductsParams(),showLoading:false,success:f.getFinancialProductsSuccessCallback})};e.prototype.getFinancialProductsParams=function(){var f=this;var g={};g=b.setCPSCommonParams(g);return g};e.prototype.getFinancialProductsSuccessCallback=function(h){if(h.code!==config.RES.SUCCESS){if(h.code==="018888"){d.fundAccountBalanceInquiry();return}else{Bestpay.Dialog.showAlertDialog("提醒",h.content,"确定",h.code);return}}var g=h.datas;for(var f=0;f<g.length;f++){d.orderPageJson.productId=g[f]["productId"];d.orderPageJson.userId=g[f]["userId"];d.orderPageJson.tyb_amount=a.fen2yuan(g[f]["balance"])}d.fundAccountBalanceInquiry()};e.prototype.fundAccountBalanceInquiry=function(){var f=this;b.callCPSService({service:config.CPS.CCOUNT_BALANCE_QUERY,params:f.fundAccountBalanceInquiryParams(),showLoading:false,success:f.fundAccountBalanceInquirySuccessCallback})};e.prototype.fundAccountBalanceInquiryParams=function(){var f=this;var g={bankMode:f.userInfo.bankMode};g=b.setCPSCommonParams(g);console.log("资金账户余额查询 SAcc003入参======="+JSON.stringify(g));return g};e.prototype.fundAccountBalanceInquirySuccessCallback=function(f){if(f.code!==config.RES.SUCCESS){Bestpay.Dialog.showAlertDialog("提醒",f.content,"确定",f.code);return}console.log("资金账户余额查询 SAcc003出参======="+JSON.stringify(f));var l=f.dayLimit;var k=f.dayTotal;var o=l*1-k*1;var j=f.monthLimit;var r=f.monthTotal;var q=j*1-r*1;var h=f.motherBoard;var g=f.accountItems;for(var p=0;p<g.length;p++){var i=g[p]["acctType"];if(i!=null||i!="null"||i!="undefined"||i!=""){if("0007"==i){var n=g[p].activeBalance;d.orderPageJson.jfy_amount=a.fen2yuan(n);console.log("普通卡＝＝BestpayCardSelf.orderPageJson['jfy_amount']=="+d.orderPageJson.jfy_amount);break}}}if(config.CARD_TYPE.BANK_MODE_FUND_POOL_MEMBER_CARD===d.userInfo.bankMode){var m="";if(l==="0"){m=h}else{if(h>o){m=o}else{m=h}}if(j==="0"){m=h}else{if(h>q){m=q}else{m=h}}d.orderPageJson.jfy_amount=a.fen2yuan(m);console.log("子卡＝＝＝＝"+d.orderPageJson.jfy_amount)}d.queryEnd()};e.prototype.getCommission=function(){var f=this;f.cardAmount=f.idAcountItem;this.mobile_val=this.itMobile.getToEmptyValue();if(this.mobile_val==""){Bestpay.Toast.makeText("请输入手机号码",Bestpay.Toast.LENGTH_SHORT);return}else{if(this.mobile_val.length>=1&&this.mobile_val.length<11){Bestpay.Toast.makeText("请输入11位的顾客手机号码",Bestpay.Toast.LENGTH_SHORT);return}else{if(d.checkPhome==false){Bestpay.Toast.makeText("请重新输入手机号码",Bestpay.Toast.LENGTH_SHORT);return}}}if(f.idAcountItem=="0"){f.cardAmount=f.phone_amount.getToEmptyValue();if(f.phone_amount.getToEmptyValue().length==0||f.phone_amount.getToEmptyValue()<5||f.phone_amount.getToEmptyValue()>1000){Bestpay.Toast.makeText("请输入5到1000元的整数金额",Bestpay.Toast.LENGTH_SHORT);return}}console.log("酬金查询");f.itJudgeLocalStorage=new c.JudgeLocalStorage();f.itJudgeLocalStorage.checkOrder(f.mobile_val,f.cardAmount*1,b.getCurrentTime(),function(){console.log(" self.mobile_val = "+f.mobile_val);console.log(" self.cardAmount = "+f.cardAmount);f.queryStart();f.defferred.done(f.goPayAnimation);f.orderPageJson.contact=f.mobile_val.replace(/(\d{3})(\d{4})/g,"$1 $2 ");f.orderPageJson.cardAmount=(f.cardAmount*1).toFixed(2);b.getCommission(config.BUS_TYPE.BUS_TYPE_PERSON_ACCOUNT,config.BUS_CODE.PERSON_ACCOUNT,config.BUS_CODE.PERSON_ACCOUNT,f.cardAmount,function(h){var g=h;if(h.code===config.RES.SUCCESS){g.commission=a.fen2yuan(h.reward)}else{if(h.code===config.CODE.COMMOSSION_ERROR){g.code=config.RES.SUCCESS;g.commission="0.00"}else{g.code=config.RES.UNKNOWN_ERROR;g.content=config.RES.UNKNOWN_ERROR_MSG}}f.orderPageJson.reward=g.commission;d.callQuickTradingQuery()},false)},f.businessName)};e.prototype.queryStart=function(){var f=this;f.defferred=$.Deferred();showDialog()};e.prototype.queryEnd=function(){var f=this;console.log("self.noPwd="+f.noPwd);var g={businessName:f.businessName,accountName:"翼支付充值",accouontValue:f.mobile_val,rechargeMoney:f.cardAmount,rewardMoney:f.orderPageJson.reward,jfyBalance:f.orderPageJson.jfy_amount,tybBalance:f.orderPageJson.tyb_amount,enablePassword:f.noPwd,userInfo:f.userInfo,callback:f.gotoOrder};console.log("pluginParam = "+JSON.stringify(g));f.paymentPlugin=new c.paymentPlugin(g);dismissDialog();goTo(config.page.comfirm,function(){});f.defferred.resolve()};e.prototype.goPayAnimation=function(){$("#order_comfirm").removeClass("backPayAnimation").addClass("goPayAnimation")};e.prototype.gotoOrder=function(f){b.getRandomServices(function(h){var g=h;if(h.code===config.RES.SUCCESS){d.random=h.randNum}d.rechargeResp(f)},false)};e.prototype.rechargeResp=function(g){var f=this;b.callCPSService({service:config.CPS.TACCCHARGE,params:f.rechargeParams(g),showLoading:true,success:f.rechargeSuccessCallback,error:f.rechargeErrorCallback})};e.prototype.rechargeParams=function(g){var h=this;var i="";if(g!=null&&g!=""){i=g}var f={costWay:h.paymentPlugin.getPayType(),orderSeq:d.orderPageJson._tradeSeq,acctCode:h.mobile_val,txnAmount:a.yuan2fen(h.orderPageJson.cardAmount),systemNO:h.orderPageJson.systemNo,acceptDate:a.getDate_YYYYMMDD()+""+a.getTime_HHMMSS(),payType:"0",operUser:h.userInfo.staffCode,operPassword:Bestpay.Security.encryptPassword(h.userInfo.staffCode,i,h.random)};console.log("self.payType"+h.payType);console.log("self.orderPageJson[userId] 666 "+h.orderPageJson.userId);if(h.userInfo.hadEpt.toString()=="1"){f.productId=h.productId;f.userId=h.orderPageJson.userId;console.log("self.orderPageJson[userId] 666 xxxx"+h.orderPageJson.userId)}f=b.setCPSCommonParams(f);console.log("翼支付充值 TTrdAcc003入参======="+JSON.stringify(f));return f};e.prototype.rechargeSuccessCallback=function(f){PasswordKeyBoard.hideKeyboardUI3();if(f.code!==config.RES.SUCCESS){if(f.code=="009002"||f.code=="006751"){d.paymentPlugin.setOrderDisplay("overtime");goTo(config.page.float_dia);return}if(f.code==config.RES.PASSWORD_ERROR_LOCKED_002136){Bestpay.Dialog.showAlertDialog("提醒",f.content,"确定",f.code,function(){App.exitCompleteApp();d.itJudgeLocalStorage.putLocalValue("","","","")})}else{Bestpay.Dialog.showAlertDialog("提醒",f.content,"确定",f.code,function(){back();d.itJudgeLocalStorage.putLocalValue("","","","")})}return}d.itJudgeLocalStorage.putLocalValue("","","","");console.log("翼支付充值 TTrdAcc003出参========"+JSON.stringify(f));b.sendSmsCertificate(f.transSeq,d.mobile_val,"");d.paymentPlugin.setOrderDisplay("success");goTo(config.page.float_dia);config.isBack=function(){if(window.jqXHR.readyState>2){Bestpay.App.exitApp()}}};e.prototype.rechargeErrorCallback=function(f){if(f.code===config.RES.MONEY_NOT_ENOUGH){Bestpay.Dialog.showAlertDialog("提醒","余额不足","确定",config.RES.MONEY_NOT_ENOUGH_MSG,function(){back();d.itJudgeLocalStorage.putLocalValue("","","","")});return}};return e});