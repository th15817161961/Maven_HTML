define(["dummy/browser/user","dummy/browser/app","dummy/browser/security"],function(o,e,w){var u;var x={keyStr:"",keyInputId:"",initPwdId:function(B){x.keyStr="";x.keyInputId=B;$("#"+B).blur(function(){x.hideKeyboard()});$("#"+B).css("font-size","15px")},popPswKeyboard:function(){return p("PasswordKeyBoard","popPswKeyboard",null)},hideKeyboard:function(){return p("PasswordKeyBoard","hideKeyboard",null)},pswInputStr:function h(D){var C="";for(var B=0;B<x.keyStr.length;B++){if(B==x.keyStr.length-1&&D){clearTimeout(u);C+=x.keyStr.charAt(B);$("#"+x.keyInputId).val(C);u=setTimeout(function(){C=C.substring(0,C.length-1);C+="●";$("#"+x.keyInputId).val(C)},500)}else{C+="●"}}$("#"+x.keyInputId).val(C)},returnkey:function j(B){x.keyStr+=B;x.pswInputStr(true)},deleteKey:function i(){x.keyStr=x.keyStr.substr(0,x.keyStr.length-1);x.pswInputStr(false)}};var v={pay:function(B,C,D){var E={params:B};return a("Payment","pay",JSON.stringify(E),C,D)},recharge:function(B,E,C,D){var F={productNo:B,location:E};return a("Payment","recharge",JSON.stringify(F),C,D)}};var t={scan:function(B,C,D){var E={params:B};return a("Scanner","scan",JSON.stringify(E),C,D)},handlerVerifyPhoto:function(B,C,D){return a("Scanner","handlerVerifyPhoto",JSON.stringify(B),C,D)},handlerPreviewPhoto:function(B,C,D){return p("Scanner","handlerPreviewPhoto",JSON.stringify(B),C,D)}};var f={getProduct:function(){return p("User","getProduct",null)},getLocation:function(){return p("User","getLocation",null)},getSuccessLoginInfo:function(){return JSON.stringify(o.getSuccessLoginInfo)},login:function(B){return p("User","login",null)}};var r={setThresholdBtnIsVisable:function(B){var C={isvisable:B};console.log("app--------------->"+JSON.stringify(C));p("App","setThresholdBtnIsVisable",JSON.stringify(C))},jumpToRecertify:function(){var B={comefrom:"tianyibao"};a("App","jumpToRecertify",JSON.stringify(B))},jumpToBindCard:function(){var B={comefrom:"tianyibao"};a("App","jumpToBindCard",JSON.stringify(B))},jumpToUnBindCard:function(){var B={comefrom:"tianyibao"};a("App","jumpToUnBindCard",JSON.stringify(B))},getAppId:function(){return p("App","getAppId",null)},jumpToNewH5View:function(B){var C={url:B};a("App","jumpToNewH5View",JSON.stringify(C))},autoLogin:function(C){var B={productNo:"",location:""};a("App","autoLogin",JSON.stringify(B),C)},getSessionKey:function(){return p("App","getSessionKey",null)},getVersion:function(){return p("App","getVersion",null)},getHome:function(){return p("App","getHome",null)},getSecurityKey:function(){return p("App","getSecurityKey",null)},overrideBackPressed:function(C){var B={bound:C};return p("App","overrideBackPressed",JSON.stringify(B))},exitApp:function(){return p("App","exitApp",null)},setKeyEventListener:function(B){r.listener=B},onKeyEvent:function(B){if(typeof r.listener=="function"){r.listener(B)}},setTitle:function(C){var B={title:C};document.title=C},setTitleBackgroundColor:function(B){var C={color:B};p("App","setTitleBackground",JSON.stringify(C))},setTitleBackgroundPath:function(C){var B={path:C};p("App","setTitleBackground",JSON.stringify(B))},getScreen:function(){return p("App","getScreen",null)},showRightButton:function(D,C){var B={caption:D,callback:C};p("App","showRightButton",JSON.stringify(B))},hideRightButton:function(){p("App","hideRightButton","{}")},jumpToRealnameVerify:function(){p("App","jumpToRealnameVerify","{}")},jumpToAccountRecharge:function(B,D,C){var E={productNo:B,location:D};a("App","jumpToAccountRecharge",JSON.stringify(E),C)},execWhenReturnAndAppear:function(C){var B={execWhenReturnAndAppearJSFunc:C};a("App","execWhenReturnAndAppear",B)},jumpToNativeView:function(B,E,C,D){if(typeof E=="undefined"){E={}}var F=E;F.viewName=B;a("App","jumpToNativeView",JSON.stringify(F),C,D)},getDeviceInfo:function(){return JSON.stringify(e.getDeviceInfo)}};var A={base64Encode:function(D){if(typeof(D)=="undefined"||typeof(D)!="object"){return false}else{var C={};var B="";B=p("UtilPlugin","base64Encode",JSON.stringify(D));C=JSON.parse(B);return C}},base64Decode:function(D){if(typeof(D)=="undefined"||typeof(D)!="object"){return false}else{var C={};var B="";B=p("UtilPlugin","base64Decode",JSON.stringify(D));C=JSON.parse(B);return C}}};var m={put:function(B,C,E){console.log("put-key:"+B+" value:"+C+" prefname:"+E);var D={key:B,value:C,prefname:E};p("Preference","put",JSON.stringify(D))},get:function(B,C,E){console.log("get-key:"+B+" defValue:"+C+" prefname:"+E);var D={key:B,defValue:C,prefname:E};return p("Preference","get",JSON.stringify(D))},putWithApp:function(B,C,D){this.put(B,C,D)},getWithApp:function(B,C,D){return this.get(B,C,D)}};var y={execSQL:function(F,C,B){var E={dbName:F,sql:C,params:B};var D=p("Storage","exeSQL",JSON.stringify(E));return D},createDatabase:function(C,B,F,D){var E={dbName:C,createSQL:B,upgradSQL:F,version:D};return p("Storage","createDatabase",JSON.stringify(E))},batchInsert:function(D,B,F,C){var E={dbName:D,tableName:B,columns:F,data:C};return p("Storage","batchInsert",JSON.stringify(E))}};var c={SERVICE:"File",copy:function(B,C){var E={path:B,newpath:C};var D=JSON.stringify(E);return p(c.SERVICE,"copy",D)},exists:function(C){var B={file_path:C};var D=JSON.stringify(B);return p(c.SERVICE,"exists",D)},remove:function(C){var B={path:C};return p(c.SERVICE,"remove",JSON.stringify(B))}};var n={};var g={showSingleChoiceDialog:function(B,G,F,E,C){var D={title:B,list:G,checkedItem:F,displayKey:E};return a("Dialog","showSingleChoiceDialog",JSON.stringify(D),C,null)},showSwitchDialog:function(B,G,F,D,C){var E={title:B,message:G,postext:F,negtext:D};return a("Dialog","showSwitchDialog",JSON.stringify(E),C,null)},showWaitDialog:function(C,B){var D={title:C,msg:B};return p("Dialog","showWaitDialog",JSON.stringify(D))},dismissDialog:function(C){var B={id:C};return""},showProgressDialog:function(C,B){var D={title:C,msg:B};return""},jumpToAuthorityDialog:function(){return p("Dialog","jumpToAuthorityDialog",null)},alert:function(B){window.alert(B)}};var q={LENGTH_LONG:1,LENGTH_SHORT:0,makeText:function(C,B){var D={text:C,duration:B};alert(C)}};var b={openContacts:function(C,B){a("Contacts","openContacts","{}",C,B)},tel:function(B){var C={tel:B};return p("Contacts","call",JSON.stringify(C))}};var l={digest:function(D,C){var B={algorithm:D,source:C};return p("MessageDigest","digest",JSON.stringify(B))}};var d={getSign:function(B){return w.getSign},getSignINF:function(B){return p("Security","getSignINF",JSON.stringify(B))},encrypt:function(C){var B={source:C};return p("Security","encrypt",JSON.stringify(B))},decrypt:function(C){var B={encryptedData:C};return p("Security","decrypt",JSON.stringify(B))},pinkeyEncrypt:function(C,B){var D={source:C,salt:B};return p("Security","pinkeyEncrypt",JSON.stringify(D))},encryptPassword:function(B,C,E){var D={account:B,password:C,encrypRandNumber:E};return p("Security","encryptPassword",JSON.stringify(D))}};var s=function(D,B,G,F,C,E){if(F){return p(D,B,G)}else{p(D,B,G,C,E)}};var z={idCounter:0,INPUT_CMDS:"",INPUT_ARGS:"",OUTPUT_RESULTS:"",CALLBACK_SUCCESS:function(B){console.log(B);return},CALLBACK_FAIL:function(B){console.log(B);return},callNative:function(C,D){this.INPUT_CMDS=C;this.INPUT_ARGS=D;var E="ID_"+(++this.idCounter);window.nintf.setCmds(this.getInputCmd(),E);window.nintf.setArgs(this.getInputArgs(),E);var B=document.createElement("IFRAME");B.setAttribute("src","bestpayhtml://ready?id="+E);document.documentElement.appendChild(B);B.parentNode.removeChild(B);B=null;console.log(2);console.log("return this.OUTPUT_RESULTS:"+this.OUTPUT_RESULTS);return this.OUTPUT_RESULTS},getInputCmd:function(){return JSON.stringify(this.INPUT_CMDS)},getInputArgs:function(){return this.INPUT_ARGS},callBackJs:function(D){this.OUTPUT_RESULTS=D;console.log(1);var C=JSON.parse(D);var B=C.message;console.log("message:"+B);var E=C.status;if(E==0){if(typeof this.CALLBACK_SUCCESS!="undefined"){setTimeout("BestpayHtml5.CALLBACK_SUCCESS('"+B+"')",0)}}else{if(typeof this.CALLBACK_FAIL!="undefined"){setTimeout("BestpayHtml5.CALLBACK_FAIL('"+B+"')",0)}}console.log("你先:("+(z.idCounter)+")"+D)}};var p=function(B,I,D){var E={service:B,action:I};var H=prompt(JSON.stringify(E),D);var G;try{G=JSON.parse(H)}catch(C){console.error(C.message)}var J=G.status;var F=G.message;if(J==0){return F}else{console.error("service:"+B+" action:"+I+" error:"+F)}};var k;var a=function(E,B,G,C,F){var H={service:E,action:B};if(typeof F!="success"){z.CALLBACK_SUCCESS=C}if(typeof F!="undefined"){z.CALLBACK_FAIL=F}else{z.CALLBACK_FAIL=function(){}}var D=z.callNative(H,G);console.log("我先:("+(z.idCounter)+")"+D)};return{Dialog:g,App:r,exec_asyn:a,exec:p,Preference:m,Contacts:b,User:f,Toast:q,BestpayHtml5:z,Storage:y,Security:d,PasswordKeyBoard:x,Scanner:t}});