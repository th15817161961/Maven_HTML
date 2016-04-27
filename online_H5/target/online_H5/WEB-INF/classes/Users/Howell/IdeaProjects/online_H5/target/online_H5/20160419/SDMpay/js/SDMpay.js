define(["jquery","bestpay.ui","bestpay.lang","bestpay.http"],function(j,g,k,b){var d=null;var i="4400004401002001";var h="001";var a="002";var f="003";var n="004";var e=1;var m=10;var l=20;function c(){d=this;this.userInfo=JSON.parse(Bestpay.User.getSuccessLoginInfo());this.selectCityCode=this.userInfo.areaCode;console.log("-----------selectCityCode:"+this.selectCityCode);this.selectCityName=b.getLocalName();this.isMoney=null;this.ipPassword=null;this.ipPassword_val="";this.selectTypeVal="0";this.orderPageJson={};this.successJson={};this.accepProvinceCode="";this.accepProvinceName="";this.accepCityCode="";this.accepCityName="";this.flatFee=null;this.userNumber=null;this.tollCompanyJSON={};this.tollCompanyArray=new Array();this.billInfo_selectType="001";this.billInfo_selectPaymentName="";this.billInfo_selectPaymentCode="";this.billInfo_stored="";this.billInfo_Month="";this.oldVal=null;this.selectDateInit=false;this.selectDate_arg=null;this.payType="0";this.checkBillCheck=false;this.SDMpayData={};this.productId="0030001";this.userAmountInput=null;this.userAmountInput_val="";this.noPwd=null;this.cashType="1";this.noInputMoney=false;this.deffered=null;this.paymentPlugin=null;this.businessName=""}c.prototype.initApp=function(){config.TRADE_LIST_QUERY_TYPE=config.BUS_TYPE.BUS_TYPE_SDM;var o=this;goTo(config.page.main,function(){o.btnInit();var q=true;j(".eachBlock").one("click",function(){var s=j(this).data("value");var t="#item"+s;j(this).addClass("eachhover");j(t).trigger("click");if(s=="1"){o.businessName="水费"}else{if(s=="2"){o.businessName="电费"}else{if(s=="3"){o.businessName="天然气"}else{if(s=="4"){o.businessName="煤气"}}}}q=false});var p=null;var r=function(s,u,v){o.goToBillQueries();o.selectTypeVal=s;if(s=="1"){o.businessName="水费"}else{if(s=="2"){o.businessName="电费"}else{if(s=="4"){o.businessName="天然气"}else{if(s=="3"){o.businessName="煤气"}}}}var t=j(v).find("img");if(p!=null){p.attr("src",p.attr("src").replace("_on","_off"))}p=t;t.attr("src",t.attr("src").replace("_off","_on"));if(q){console.log("== hide first page ==");j("#firstPage_id").addClass("firstPagehide");setTimeout(function(){j("#firstPage_id").hide()},800)}o.reCheck()};o.selectType=new g.BlockRadioGroup("brg_amount",null,r);o.itMobile=new g.InputText("mobile","mobile");o.isMoney=new g.InputText("id_money","number",function(s){if(s.replace(/\s/g,"").length==0){o.noPwd=true;o.oldVal=null}else{if(o.quickTranInfo==null||o.quickTranInfo==undefined){o.callQuickTradingQuery()}if(!o.noPwd&&o.IsNeedPassWord(k.yuan2fen(s))){o.noPwd=true}else{if(o.noPwd&&!o.IsNeedPassWord(k.yuan2fen(s))){o.noPwd=false}}}},function(){o.noPwd=true;o.oldVal=null},2)})};c.prototype.reCheck=function(){j("#btn_billInfo_wrap").show();j("#billShow").hide();j("#id_bills_show").html("")};c.prototype.gotoOrder=function(o){b.getRandomServices(function(q){var p=q;if(q.code===config.RES.SUCCESS){d.random=q.randNum}d.getSDMRecharge(o)},false)};c.prototype.queryStart=function(){var o=this;o.defferred=j.Deferred();showDialog()};c.prototype.queryEnd=function(){var o=this;var p={businessName:o.businessName,accountName:"水电煤",accouontValue:o.orderPageJson.customerName,rechargeMoney:o.orderPageJson.amount,rewardMoney:o.orderPageJson.reward,jfyBalance:o.orderPageJson.jfy_amount,tybBalance:o.orderPageJson.tyb_amount,enablePassword:o.noPwd,userInfo:o.userInfo,callback:o.gotoOrder};console.log("pluginParam = "+JSON.stringify(p));o.paymentPlugin=new g.paymentPlugin(p);dismissDialog();goTo(config.page.comfirm,function(){});o.defferred.resolve()};c.prototype.goPayAnimation=function(){console.log("done=========================");j("#order_comfirm").removeClass("backPayAnimation").addClass("goPayAnimation")};c.prototype.gotobuy=function(){var o=this;o.mobile_val=o.itMobile.getToEmptyValue();if(o.mobile_val.length>=1&&o.mobile_val.length<11){Bestpay.Toast.makeText("请输入11位的顾客手机号码",Bestpay.Toast.LENGTH_SHORT);return}else{if(o.mobile_val.length==11&&!o.itMobile.getInputCheck()){Bestpay.Toast.makeText("您输入的手机号号码段不正确",Bestpay.Toast.LENGTH_SHORT);return}}if(this.orderPageJson.amount.length==0){Bestpay.Toast.makeText("请选择一期账单",Bestpay.Toast.LENGTH_SHORT);return}if(this.noInputMoney&&this.isMoney.getToEmptyValue().length>=1){if(this.isMoney.getToEmptyValue()*1==0){Bestpay.Toast.makeText("预存金额不能输入0，请输入大于0的金额",Bestpay.Toast.LENGTH_SHORT);return}else{if(this.isMoney.getToEmptyValue()*1<this.orderPageJson.amount*1){Bestpay.Toast.makeText("输入的金额不能小于应付金额",Bestpay.Toast.LENGTH_SHORT);return}else{o.orderPageJson.amount=o.isMoney.getToEmptyValue()}}}if(this.orderPageJson.amount*1==0&&this.billInfo_stored+""=="0"){Bestpay.Toast.makeText("应付金额为0时不能提交！",Bestpay.Toast.LENGTH_SHORT);return}o.itJudgeLocalStorage=new g.JudgeLocalStorage();o.itJudgeLocalStorage.checkOrder(o.orderPageJson.customerName,o.orderPageJson.amount*1,b.getCurrentTime(),function(){o.queryStart();var p=o.orderPageJson.amount*1;console.log("total_amount == "+p);o.getCommission(p,null);o.defferred.done(o.goPayAnimation)},o.businessName)};c.prototype.setBottomAblely=function(o){var q=this;var p=j("#btn_buy");if(!!o){console.log("ablezzz");p.removeClass("btn_buyGray").addClass("btn_buyBlue");p.on("click",function(){console.log("gotobuy click!!!");q.gotobuy()})}else{console.log("unablezzz");p.removeClass("btn_buyBlue").addClass("btn_buyGray");p.off("click")}};c.prototype.btnInit=function(){var o=this;this.selectType();console.log("btnInit -------------");document.getElementById("selectArea").onclick=function(){o.accepCityName="";goTo(config.page.selectPage,function(){o.accepProvinceCode="";j("#id_optionsBoxLeft").hide();j("#id_optionsBoxRight").hide();o.getAreaInfo()});if(o.selectCityName!==""){Bestpay.App.setTitle(o.selectCityName)}};document.getElementById("id_selectProBtn").onclick=function(){if(o.accepCityName==""){Bestpay.Toast.makeText("请选择完整的所在地区",Bestpay.Toast.LENGTH_SHORT);return}o.selectCityName=o.accepProvinceName+""+o.accepCityName;o.selectCityCode=o.accepCityCode;o.reCheck();back();o.getPartnerList()};document.getElementById("id_select_data").onclick=function(){if(o.selectDateInit){o.selectData=new g.showDialogClass("showDateChoiceDialog",function(p){o.selectDate_arg=p;j("#id_show_calendar").html(p);o.selectDateInit=false;o.reCheck()})}else{o.selectData=new g.showDialogClass("showDateModifyDialog",function(p){o.selectDate_arg=p;j("#id_show_calendar").html(p);o.reCheck()},o.selectDate_arg)}};document.getElementById("btn_billInfo").onclick=function(){o.checkBillCheck=false;o.billInfo_selectType=j("#id_userNumber").data("spanCode")!=""&&j("#id_userNumber").data("spanCode")==j("#id_userNumber").val()?"002":"001";if(o.userNumber.getToEmptyValue().length==0){Bestpay.Toast.makeText("请输入用户号",Bestpay.Toast.LENGTH_SHORT);return}if(o.billInfo_selectPaymentCode==""||o.billInfo_selectPaymentCode==null){Bestpay.Toast.makeText("请选择城市",Bestpay.Toast.LENGTH_SHORT);return}if(o.selectCityName.indexOf("上海市")>=0){o.userAmountInput_val=o.userAmountInput.getToEmptyValue();if(o.userAmountInput_val.length==0){Bestpay.Toast.makeText("请输入缴费金额!",Bestpay.Toast.LENGTH_SHORT);return}}showDialog(config.MSG.loading);o.getBillInfo()};document.getElementById("btn_buy").onclick=function(){o.gotobuy()}};c.prototype.selectType=function(){var q=this;var p=document.getElementById("brg_Type");var o=j(p).children();for(var r=0;r<o.size();r++){o[r].onclick=function(){q.selectTypeVal=j(this).data("value")+"";console.log("select type :"+q.selectTypeVal);q.selectCityCode=q.userInfo.areaCode;q.selectCityName=b.getLocalName();q.goToBillQueries()}}};c.prototype.goToBillQueries=function(){var r=this;if(r.userNumber==null){var p=function(s){if(!s.length){r.reCheck()}}}var o=function(){r.reCheck()};r.userNumber=new g.InputText("id_userNumber","sanCode",p,o);r.selectCityCode=this.userInfo.areaCode;r.selectCityName=b.getLocalName();r.billInfo_selectPaymentName="";r.billInfo_selectPaymentCode="";r.userAmountInput=new g.InputText("id_userAmount","number",null,null,2);r.userAmountInput.clearValue();j("#id_Area").html("");var q=document.getElementById("id_flatFee");j(q).find(".item-out").html('<div>缴费单位 </div><div class="textIndent box-f1"></div>');r.getPartnerList();j("#id_show_calendar").html(k.getDate_YYYY_MM_DD());r.selectDateInit=true};c.prototype.getPartnerList=function(){var o=this;o.tollCompanyArray=new Array();o.tollCompanyJSON={};o.userNumber.clearValue();if(o.flatFee!=null){o.flatFee.clearDropDownBox()}b.callCPSService({service:config.CPS.SDM_PARTNER_LIST,params:o.partnerListParams(),showLoading:true,success:o.partnerListSuccessCallback})};c.prototype.partnerListParams=function(){var o=this.selectCityCode+"";if(o.length==6&&o.indexOf("310")==0||o.indexOf("110")==0||o.indexOf("120")==0){o=o.substring(0,3)+"100"}else{if(o.length==6){o=o.substring(0,4)+"00"}}var p={accepTareaCode:o,acceptDate:k.getDate_YYYYMMDD()+""+k.getTime_HHMMSS()};p=b.setCPSCommonParams(p);return p};c.prototype.partnerListSuccessCallback=function(q){if(q.code!==config.RES.SUCCESS){Bestpay.Dialog.showAlertDialog("查询地市信息失败",q.content,"确定",q.code);return}var t=q.cities;var p=0;if(t.length>0){for(var s=0;s<t.length;s++){var o=t[s].busCode;var r=t[s].paymentName;var u=t[s].paymentCode;if(o==h&&d.selectTypeVal=="1"){d.tollCompanyArray.push(t[s]);d.tollCompanyJSON[r]=u}else{if(o==a&&d.selectTypeVal=="2"){d.tollCompanyArray.push(t[s]);d.tollCompanyJSON[r]=u;if(u+""==i){p++}}else{if(o==f&&d.selectTypeVal=="3"){d.tollCompanyArray.push(t[s]);d.tollCompanyJSON[r]=u}else{if(o==n&&d.selectTypeVal=="4"){d.tollCompanyArray.push(t[s]);d.tollCompanyJSON[r]=u}}}}}}console.log("selectCityCode=="+d.selectCityCode);if(p>0||d.selectCityCode.toString().slice(0,4)=="5201"){j("#id_select_data").show()}else{j("#id_select_data").hide()}d.initBillQueries()};c.prototype.initBillQueries=function(){j("#id_Area").html(this.selectCityName);var o=document.getElementById("id_flatFee");if(d.tollCompanyArray.length>1){o.onclick=function(){goTo(config.page.flatFee);d.flatFee=new g.dropDownBox("id_flatFee_show",this,d.tollCompanyJSON,function(s,q){d.billInfo_selectPaymentCode=s;d.billInfo_selectPaymentName=j(q).html();for(var r=0;r<d.tollCompanyArray.length;r++){if(d.tollCompanyArray[r].paymentCode==s){d.billInfo_stored=d.tollCompanyArray[r].stored}}j(o).find(".item-out").html("<div>"+d.billInfo_selectPaymentName+"</div>");d.reCheck();d.flatFee.clearDropDownBox();back()},function(){d.flatFee.clearDropDownBox();back()})};j(o).find(".btn-down").show();j(o).find(".item-out").html("<div>"+d.tollCompanyArray[0].paymentName+"</div>")}else{if(d.tollCompanyArray.length==1){o.onclick=function(){};j(o).find(".btn-down").hide();j(o).find(".item-out").html('<div>缴费单位</div><div class="textIndent box-f1">'+d.tollCompanyArray[0].paymentName+"</div>")}else{var p="亲，很抱歉!"+this.selectCityName+"的"+config.page.bill_queries.title+"业务暂未开通，敬请期待哟!";Bestpay.Dialog.showAlertTwoBtnDialog("查询地市信息失败",p,"切换城市","取消","",function(q){console.log(q);if(q.toString()=="1"){j("#selectArea").click()}else{if(q.toString()=="2"){back()}}});return}}if(this.selectCityName.indexOf("上海市")>=0){j("#id_userAmount_div").show();j("#id_div_tips_wrap").show()}else{j("#id_userAmount_div").hide();j("#id_div_tips_wrap").hide()}this.userAmountInput_val="";d.billInfo_selectPaymentCode=d.tollCompanyArray[0].paymentCode;d.billInfo_selectPaymentName=d.tollCompanyArray[0].paymentName;d.billInfo_stored=d.tollCompanyArray[0].stored};c.prototype.getBillInfo=function(){var o=this;b.callCPSService({async:false,service:config.CPS.SDM_BILL_QUERY,params:o.billInfoParams(),showLoading:false,success:o.billInfoSuccessCallback})};c.prototype.billInfoParams=function(){var q=this;var o=q.billInfo_selectPaymentCode.substring(6,12);if(q.billInfo_selectPaymentCode==i||q.selectCityCode.toString().slice(0,4)=="5201"){q.billInfo_Month=j("#id_show_calendar").html().replace("-","")}else{q.billInfo_Month=""}var p={acceptAreaCode:o,acceptDate:k.getDate_YYYYMMDD()+""+k.getTime_HHMMSS(),additem1:q.billInfo_selectPaymentCode,additem2:q.userAmountInput_val,billMonth:q.billInfo_Month,orderSeq:b.getOrderSeq,selectType:q.billInfo_selectType,selectValue:q.userNumber.getToEmptyValue()};p=b.setCPSCommonParams(p);return p};c.prototype.billInfoSuccessCallback=function(q){if(q.code!==config.RES.SUCCESS){if(q.code=="006913"){Bestpay.Dialog.showAlertDialog("处理失败","该地市暂不支持水电煤缴费","确定",q.code);return}Bestpay.Dialog.showAlertDialog(config.TITLE.dialog_title,q.content,"确定",q.code);return}d.itMobile.clearValue();d.isMoney.clearValue();d.orderPageJson.paymentName=d.billInfo_selectPaymentName;d.orderPageJson.totalCount=q.totalCount;d.orderPageJson.systemNo=q.systemNo;d.orderPageJson.billStat=q.billStat;if(q.bills.length<=0){var o="没有查到交易记录";var s="091124";Bestpay.Dialog.showAlertDialog("处理失败",o,"确定",s);return}d.orderPageJson.bills=q.bills;d.orderPageJson.customerName=q.bills[0].customerName;d.orderPageJson.billNo=q.bills[0].billNo;var p=q.bills[0].balance;if(p*1>0){d.orderPageJson.balance=k.fen2yuan(p)}else{d.orderPageJson.balance=""}var r=q.billStat+"";if(r=="0"||r=="1"){e=m}else{if(r=="2"||r=="3"){e=l}}d.initConfirm()};c.prototype.getCommission=function(o,p){b.getCommission(config.BUS_TYPE.BUS_TYPE_SDM,config.BUS_CODE.SDM,config.BUS_CODE.SDM,o,function(q){var r=q;if(q.code===config.RES.SUCCESS){r.commission=k.fen2yuan(q.reward)}else{if(q.code===config.CODE.COMMOSSION_ERROR){r.code=config.RES.SUCCESS;r.commission="0.00"}else{r.code=config.RES.UNKNOWN_ERROR;r.content=config.RES.UNKNOWN_ERROR_MSG}}if(p!=null){p(r.commission)}else{d.orderPageJson.reward=r.commission;console.log("SDMpaySelf.userInfo.authenStatus=="+d.userInfo.authenStatus);if(d.userInfo.authenStatus=="A02"){console.log("SDMpaySelf.userInfo.hadEpt  "+d.userInfo.hadEpt);if(d.userInfo.hadEpt==1){d.getFinancialProducts()}else{d.fundAccountBalanceInquiry()}}else{d.fundAccountBalanceInquiry()}}},false)};c.prototype.getAmount=function(){var r="";var q=this.orderPageJson.billStat+"";var p=this.orderPageJson.bills;if(q=="0"||q=="1"){var o=0;for(var s=0;s<p.length;s++){o=o+p[s].billAmount*1+p[s].billDelay*1}r=o}else{if(q=="2"){r=p[0].billAmount*1+p[0].billDelay*1}else{if(q=="3"){r=p[0].billAmount*1+p[0].billDelay*1}}}console.log("酬金查询 总金额:"+r);return r};c.prototype.initConfirm=function(){var r=this;var q=this.orderPageJson.billStat+"";console.log("initConfirm==============");var p=this.orderPageJson.bills;j("#customerName").html(p[0].customerName);j("#number").html(p.length+"个");for(var s=0;s<p.length;s++){p[s].billAmount=k.fen2yuan(p[s].billAmount);p[s].billDelay=k.fen2yuan(p[s].billDelay);p[s].totalAmount=p[s].billAmount*1+p[s].billDelay*1;p[s].index=s}var o=new g.Template();o.template_MoreToOne("id_bills","id_bills_show",p);console.log("template成功");r.setBillStat(q);console.log("dismissDialog");r.setStored();d.callQuickTradingQuery();dismissDialog();j("#btn_billInfo_wrap").hide();j("#billShow").show()};c.prototype.setBillStat=function(p){var o=this;if(p==="0"){o.setBillSelect("default");o.setBillClick(true)}else{if(p==="1"){o.setBillSelect("all");o.setBillClick(false)}else{if(p==="2"){o.setBillSelect("default");o.setBillClick(false)}else{if(p==="3"){o.setBillSelect("none");o.setBillClick(true)}}}}};c.prototype.setBillSelect=function(p){var o=this;console.log("到选择项");if(p==="all"){j(".radio").addClass("radio-on");o.setAllBills()}else{if(p==="none"){j(".radio").removeClass("radio-on");o.orderPageJson.feePayment="";o.orderPageJson.amount=""}else{if(p==="default"){j(".radio").removeClass("radio-on");j(".radio").eq(0).addClass("radio-on");o.setSingleBill(0)}}}console.log("选择成功")};c.prototype.setBillClick=function(p){var q=this;var o;if(p){j(".radio").on("click",function(){if(j(this).hasClass("radio-on")){return}j(".radio").removeClass("radio-on");j(this).addClass("radio-on");o=j(this).data("code");q.setSingleBill(o)})}else{j(".radio").off("click")}};c.prototype.setSingleBill=function(s){var r=this;var u=this.orderPageJson.bills;var s=s*1;console.log("index==="+s);var t=u[s].billMonth;var p=u[s].billAmount;var q=u[s].billDelay;console.log("billAmount=="+p);console.log("billDelay=="+q);var o=p*1+q*1;console.log("totalAmount=="+o);r.orderPageJson.feePayment=t;r.orderPageJson.amount=o;j("#bills_total_amount").html(o.toFixed(2));console.log("feePayment=="+r.orderPageJson.feePayment);console.log("amount=="+r.orderPageJson.amount)};c.prototype.setAllBills=function(){var s=this;var o=this.orderPageJson.bills;var p=0;for(var t=0;t<o.length;t++){p=p+o[t].billAmount*1+o[t].billDelay*1}var r=[];for(var t=0,q=o.length;t<q;t++){r.push(o[t].billMonth)}s.orderPageJson.feePayment=r.join("|");s.orderPageJson.amount=p;console.log("显示多笔一次缴完=="+s.orderPageJson.feePayment);j("#bills_total_amount").html(p.toFixed(2))};c.prototype.setStored=function(){if(this.billInfo_stored+""=="0"){j("#id_money_out").hide();this.noInputMoney=false}else{if(this.orderPageJson.amount*1>0){j("#id_money").attr("placeholder","缴纳金额:请输入")}else{j("#id_money").attr("placeholder","预存金额:请输入")}j("#id_money_out").show();this.noInputMoney=true;this.callQuickTradingQuery()}};c.prototype.callQuickTradingQuery=function(){var o=this;b.callCPSService({async:false,service:config.CPS.QUICK_TRADING_QUERY,params:o.quickTradingQueryParams(),showLoading:true,success:o.quickTradingQuerySuccessCallback})};c.prototype.quickTradingQueryParams=function(){var o={};o=b.setCPSCommonParams(o);return o};c.prototype.quickTradingQuerySuccessCallback=function(o){if(o.code!==config.RES.SUCCESS){Bestpay.Dialog.showAlertDialog("处理失败",o.content,"确定",o.code);return}d.quickTranInfo={perAmount:o.perAmount,allamount:o.allamount,alltransaction:o.alltransaction};if(d.IsNeedPassWord(k.yuan2fen(d.orderPageJson.amount))){d.noPwd=true}else{d.noPwd=false}};c.prototype.IsNeedPassWord=function(o){var p=this.quickTranInfo;var q=this;console.log("amount : "+o);console.log("quickTranInfo : "+JSON.stringify(p));if(o*1<=1*p.perAmount&&(o*1+1*p.alltransaction)<=1*p.allamount){console.log("免密");return false}else{console.log("加密");return true}};c.prototype.getFinancialProducts=function(){var o=this;b.callCPSService({service:config.CPS.FINANCIAL_PRODUCTS,params:o.getFinancialProductsParams(),showLoading:false,success:o.getFinancialProductsSuccessCallback})};c.prototype.getFinancialProductsParams=function(){var o=this;var p={};p=b.setCPSCommonParams(p);return p};c.prototype.getFinancialProductsSuccessCallback=function(q){if(q.code!==config.RES.SUCCESS){if(q.code==="018888"){d.fundAccountBalanceInquiry();return}else{Bestpay.Dialog.showAlertDialog("提醒",q.content,"确定",q.code);return}}var p=q.datas;for(var o=0;o<p.length;o++){d.orderPageJson.productId=p[o]["productId"];d.orderPageJson.userId=p[o]["userId"];d.orderPageJson.tyb_amount=k.fen2yuan(p[o]["balance"])}d.fundAccountBalanceInquiry()};c.prototype.fundAccountBalanceInquiry=function(){var o=this;b.callCPSService({service:config.CPS.CCOUNT_BALANCE_QUERY,params:o.fundAccountBalanceInquiryParams(),showLoading:false,success:o.fundAccountBalanceInquirySuccessCallback})};c.prototype.fundAccountBalanceInquiryParams=function(){var o=this;var p={bankMode:o.userInfo.bankMode};p=b.setCPSCommonParams(p);return p};c.prototype.fundAccountBalanceInquirySuccessCallback=function(w){if(w.code!==config.RES.SUCCESS){Bestpay.Dialog.showAlertDialog("提醒",w.content,"确定",w.code);return}console.log("资金账户余额查询 SAcc003出参======="+JSON.stringify(w));var u=w.dayLimit;var y=w.dayTotal;var A=u*1-y*1;var x=w.monthLimit;var q=w.monthTotal;var p=x*1-q*1;var s=w.motherBoard;var r=w.accountItems;for(var o=0;o<r.length;o++){var t=r[o]["acctType"];if(t!=null||t!="null"||t!="undefined"||t!=""){if("0007"==t){var z=r[o].activeBalance;d.orderPageJson.jfy_amount=k.fen2yuan(z);break}}}if(config.CARD_TYPE.BANK_MODE_FUND_POOL_MEMBER_CARD===d.userInfo.bankMode){var v="";if(u==="0"){v=s}else{if(s>A){v=A}else{v=s}}if(x==="0"){v=s}else{if(s>p){v=p}else{v=s}}d.orderPageJson.jfy_amount=k.fen2yuan(v);console.log("子卡＝＝＝＝SDMpaySelf.orderPageJson['jfy_amount']=="+d.orderPageJson.jfy_amount)}d.queryEnd()};c.prototype.getSDMRecharge=function(p){var o=this;b.callCPSService({async:false,service:config.CPS.SDM_PAY_BILL,params:o.SDMRechargeParams(p),showLoading:true,success:o.SDMRechargeSuccessCallback})};c.prototype.SDMRechargeParams=function(p){var q=this;var r="";if(p!=null&&p!=""){r=p}var o={systemNo:q.orderPageJson.systemNo,orderSeq:b.getOrderSeq(),acceptDate:k.getDate_YYYYMMDD()+""+k.getTime_HHMMSS(),operPassword:Bestpay.Security.encryptPassword(q.userInfo.staffCode,r,q.random),cashOrder:q.orderPageJson.feePayment,cashType:q.cashType,cashNumber:q.orderPageJson.billNo,operUser:q.userInfo.staffCode};var s=q.isMoney.getToEmptyValue();if(q.billInfo_stored=="0"){o.txnAmount=k.yuan2fen(q.orderPageJson.amount)}else{if(q.billInfo_stored=="1"&&s.length>0){o.txnAmount=k.yuan2fen(s)}else{if(q.billInfo_stored=="1"&&s.length==0){o.txnAmount=k.yuan2fen(q.orderPageJson.amount)}}}if(q.userInfo.hadEpt.toString()=="1"){o.costWay=q.paymentPlugin.getPayType();o.productId=q.productId;o.userId=q.orderPageJson.userId}console.log("支付接口 出参 == "+JSON.stringify(o));o=b.setCPSCommonParams(o);return o};c.prototype.SDMRechargeSuccessCallback=function(o){if(o.code!==config.RES.SUCCESS){if(o.code===config.RES.MONEY_NOT_ENOUGH){Bestpay.Dialog.showAlertDialog(config.TITLE.no_repeat,config.RES.MONEY_NOT_ENOUGH_MSG,"确定",o.code,function(q){back();d.itJudgeLocalStorage.putLocalValue("","","","")});return}if(o.code=="009002"||o.code=="006751"){d.paymentPlugin.setOrderDisplay("overtime");goTo(config.page.page_float);return}if(o.code==config.RES.PASSWORD_ERROR_LOCKED_002136){Bestpay.Dialog.showAlertDialog(config.TITLE.no_repeat,o.content,"确定",o.code,function(q){App.exitCompleteApp();d.itJudgeLocalStorage.putLocalValue("","","","")})}Bestpay.Dialog.showAlertDialog(config.TITLE.dialog_title,o.content,"确定",o.code,function(q){back();d.itJudgeLocalStorage.putLocalValue("","","","")});return}d.itJudgeLocalStorage.putLocalValue("","","","");var p=d.itMobile.getToEmptyValue();if(p.length>0){b.sendSmsCertificate(o.content,p,"")}d.paymentPlugin.setOrderDisplay("success");goTo(config.page.float_dia);config.isBack=function(){if(window.jqXHR.readyState>2){Bestpay.App.exitApp()}}};c.prototype.getAreaInfo=function(){var o=this;b.callCPSService({async:false,service:config.CPS.COALWATERINFO_QUERY,params:o.areaInfoParams(),showLoading:true,success:o.areaInfoSuccessCallback})};c.prototype.areaInfoParams=function(){var o={areaCode:d.accepProvinceCode,payType:d.selectTypeVal};o=b.setCPSCommonParams(o);return o};c.prototype.areaInfoSuccessCallback=function(q){if(q.code!==config.RES.SUCCESS){Bestpay.Toast.makeText(q.content+"("+q.code+")",Bestpay.Toast.LENGTH_SHORT);return}var s=q.orders;var p="";for(var r=0;r<s.length;r++){var o=s[r];p+='<span data-code="'+o.areaCode+'">'+o.areaName+"</span>"}if(d.accepProvinceCode==""){j("#id_optionsBoxLeft").html(p);j("#id_optionsBoxLeft").show();d.getProvinceCode()}else{j("#id_optionsBoxRight").html(p);j("#id_optionsBoxRight").show();d.getCityCode()}};c.prototype.getProvinceCode=function(){j("#id_optionsBoxLeft span").each(function(){j(this).on("click",function(){d.accepProvinceCode=j(this).data("code");d.accepProvinceName=j(this).html();Bestpay.App.setTitle(d.accepProvinceName);j("#id_optionsBoxLeft .selectSpan").removeClass("selectSpan");j(this).addClass("selectSpan");d.getAreaInfo()})})};c.prototype.getCityCode=function(){var o=this;j("#id_optionsBoxRight span").each(function(){j(this).on("click",function(){d.accepCityCode=j(this).data("code");d.accepCityName=j(this).html();Bestpay.App.setTitle(d.accepProvinceName+d.accepCityName);j("#id_optionsBoxRight .selectSpan").removeClass("selectSpan");j(this).addClass("selectSpan");o.selectCityName=o.accepProvinceName+""+o.accepCityName;o.selectCityCode=o.accepCityCode;o.reCheck();back();o.getPartnerList()})})};return c});