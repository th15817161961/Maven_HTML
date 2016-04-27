define(["dummy/browser/user","dummy/browser/app","dummy/browser/security"],function(A,g,x){var v;var y={keyStr:"",keyInputId:"",initPwdId:function(B){y.keyStr="";y.keyInputId=B;$("#"+B).blur(function(){y.hideKeyboard()});$("#"+B).css("font-size","15px")},popPswKeyboard:function(){return q("PasswordKeyBoard","popPswKeyboard",null)},hideKeyboard:function(){return q("PasswordKeyBoard","hideKeyboard",null)},pswInputStr:function j(B){var D="";for(var C=0;C<y.keyStr.length;C++){if(C==y.keyStr.length-1&&B){clearTimeout(v);D+=y.keyStr.charAt(C);$("#"+y.keyInputId).val(D);v=setTimeout(function(){D=D.substring(0,D.length-1);D+="●";$("#"+y.keyInputId).val(D)},500)}else{D+="●"}}$("#"+y.keyInputId).val(D)},returnkey:function l(B){y.keyStr+=B;y.pswInputStr(true)},deleteKey:function k(){y.keyStr=y.keyStr.substr(0,y.keyStr.length-1);y.pswInputStr(false)}};var w={pay:function(D,E,B){var C={params:D};return c("Payment","pay",JSON.stringify(C),E,B)},recharge:function(E,C,F,B){var D={productNo:E,location:C};return c("Payment","recharge",JSON.stringify(D),F,B)}};var u={scan:function(D,E,B){var C={params:D};return c("Scanner","scan",JSON.stringify(C),E,B)},handlerVerifyPhoto:function(C,D,B){return c("Scanner","handlerVerifyPhoto",JSON.stringify(C),D,B)},handlerPreviewPhoto:function(C,D,B){return q("Scanner","handlerPreviewPhoto",JSON.stringify(C),D,B)}};var h={getProduct:function(){return q("User","getProduct",null)},getLocation:function(){return q("User","getLocation",null)},getSuccessLoginInfo:function(){return JSON.stringify(A.getSuccessLoginInfo)},login:function(B){return q("User","login",null)}};var s={setThresholdBtnIsVisable:function(B){var C={isvisable:B};console.log("app--------------->"+JSON.stringify(C));q("App","setThresholdBtnIsVisable",JSON.stringify(C))},jumpToRecertify:function(){var B={comefrom:"tianyibao"};c("App","jumpToRecertify",JSON.stringify(B))},jumpToBindCard:function(){var B={comefrom:"tianyibao"};c("App","jumpToBindCard",JSON.stringify(B))},jumpToUnBindCard:function(){var B={comefrom:"tianyibao"};c("App","jumpToUnBindCard",JSON.stringify(B))},getAppId:function(){return q("App","getAppId",null)},jumpToNewH5View:function(B){var C={url:B};c("App","jumpToNewH5View",JSON.stringify(C))},autoLogin:function(C){var B={productNo:"",location:""};c("App","autoLogin",JSON.stringify(B),C)},getSessionKey:function(){return q("App","getSessionKey",null)},getVersion:function(){return q("App","getVersion",null)},getHome:function(){return q("App","getHome",null)},getSecurityKey:function(){return q("App","getSecurityKey",null)},overrideBackPressed:function(C){var B={bound:C};return q("App","overrideBackPressed",JSON.stringify(B))},exitApp:function(){return q("App","exitApp",null)},setKeyEventListener:function(B){s.listener=B},onKeyEvent:function(B){if(typeof s.listener=="function"){s.listener(B)}},setTitle:function(C){var B={title:C};document.title=C},setTitleBackgroundColor:function(B){var C={color:B};q("App","setTitleBackground",JSON.stringify(C))},setTitleBackgroundPath:function(C){var B={path:C};q("App","setTitleBackground",JSON.stringify(B))},getScreen:function(){return q("App","getScreen",null)},showRightButton:function(B,D){var C={caption:B,callback:D};q("App","showRightButton",JSON.stringify(C))},hideRightButton:function(){q("App","hideRightButton","{}")},jumpToRealnameVerify:function(){q("App","jumpToRealnameVerify","{}")},jumpToAccountRecharge:function(D,B,E){var C={productNo:D,location:B};c("App","jumpToAccountRecharge",JSON.stringify(C),E)},execWhenReturnAndAppear:function(C){var B={execWhenReturnAndAppearJSFunc:C};c("App","execWhenReturnAndAppear",B)},jumpToNativeView:function(E,C,F,B){if(typeof C=="undefined"){C={}}var D=C;D.viewName=E;c("App","jumpToNativeView",JSON.stringify(D),F,B)},getDeviceInfo:function(){return JSON.stringify(g.getDeviceInfo)}};var b={base64Encode:function(B){if(typeof(B)=="undefined"||typeof(B)!="object"){return false}else{var D={};var C="";C=q("UtilPlugin","base64Encode",JSON.stringify(B));D=JSON.parse(C);return D}},base64Decode:function(B){if(typeof(B)=="undefined"||typeof(B)!="object"){return false}else{var D={};var C="";C=q("UtilPlugin","base64Decode",JSON.stringify(B));D=JSON.parse(C);return D}}};var o={put:function(D,E,C){console.log("put-key:"+D+" value:"+E+" prefname:"+C);var B={key:D,value:E,prefname:C};q("Preference","put",JSON.stringify(B))},get:function(D,E,C){console.log("get-key:"+D+" defValue:"+E+" prefname:"+C);var B={key:D,defValue:E,prefname:C};return q("Preference","get",JSON.stringify(B))},putWithApp:function(C,D,B){this.put(C,D,B)},getWithApp:function(C,D,B){return this.get(C,D,B)}};var z={execSQL:function(D,F,E){var C={dbName:D,sql:F,params:E};var B=q("Storage","exeSQL",JSON.stringify(C));return B},createDatabase:function(F,E,D,B){var C={dbName:F,createSQL:E,upgradSQL:D,version:B};return q("Storage","createDatabase",JSON.stringify(C))},batchInsert:function(B,E,D,F){var C={dbName:B,tableName:E,columns:D,data:F};return q("Storage","batchInsert",JSON.stringify(C))}};var e={SERVICE:"File",copy:function(D,E){var C={path:D,newpath:E};var B=JSON.stringify(C);return q(e.SERVICE,"copy",B)},exists:function(D){var C={file_path:D};var B=JSON.stringify(C);return q(e.SERVICE,"exists",B)},remove:function(C){var B={path:C};return q(e.SERVICE,"remove",JSON.stringify(B))}};var p={};var i={showSingleChoiceDialog:function(F,E,D,C,G){var B={title:F,list:E,checkedItem:D,displayKey:C};return c("Dialog","showSingleChoiceDialog",JSON.stringify(B),G,null)},showSwitchDialog:function(F,E,D,B,G){var C={title:F,message:E,postext:D,negtext:B};return c("Dialog","showSwitchDialog",JSON.stringify(C),G,null)},showWaitDialog:function(D,C){var B={title:D,msg:C};return q("Dialog","showWaitDialog",JSON.stringify(B))},dismissDialog:function(C){var B={id:C};return""},showProgressDialog:function(D,C){var B={title:D,msg:C};return""},jumpToAuthorityDialog:function(){return q("Dialog","jumpToAuthorityDialog",null)},alert:function(B){window.alert(B)}};var r={LENGTH_LONG:1,LENGTH_SHORT:0,makeText:function(D,C){var B={text:D,duration:C};alert(D)}};var d={openContacts:function(C,B){c("Contacts","openContacts","{}",C,B)},tel:function(B){var C={tel:B};return q("Contacts","call",JSON.stringify(C))}};var n={digest:function(B,D){var C={algorithm:B,source:D};return q("MessageDigest","digest",JSON.stringify(C))}};var f={getSign:function(B){return x.getSign},getSignINF:function(B){return q("Security","getSignINF",JSON.stringify(B))},encrypt:function(C){var B={source:C};return q("Security","encrypt",JSON.stringify(B))},decrypt:function(C){var B={encryptedData:C};return q("Security","decrypt",JSON.stringify(B))},pinkeyEncrypt:function(D,C){var B={source:D,salt:C};return q("Security","pinkeyEncrypt",JSON.stringify(B))},encryptPassword:function(D,E,C){var B={account:D,password:E,encrypRandNumber:C};return q("Security","encryptPassword",JSON.stringify(B))}};var t=function(B,F,E,D,G,C){if(D){return q(B,F,E)}else{q(B,F,E,G,C)}};var a={idCounter:0,INPUT_CMDS:"",INPUT_ARGS:"",OUTPUT_RESULTS:"",CALLBACK_SUCCESS:function(B){console.log(B);return},CALLBACK_FAIL:function(B){console.log(B);return},callNative:function(E,B){this.INPUT_CMDS=E;this.INPUT_ARGS=B;var C="ID_"+(++this.idCounter);window.nintf.setCmds(this.getInputCmd(),C);window.nintf.setArgs(this.getInputArgs(),C);var D=document.createElement("IFRAME");D.setAttribute("src","bestpayhtml://ready?id="+C);document.documentElement.appendChild(D);D.parentNode.removeChild(D);D=null;console.log(2);console.log("return this.OUTPUT_RESULTS:"+this.OUTPUT_RESULTS);return this.OUTPUT_RESULTS},getInputCmd:function(){return JSON.stringify(this.INPUT_CMDS)},getInputArgs:function(){return this.INPUT_ARGS},callBackJs:function(B){this.OUTPUT_RESULTS=B;console.log(1);var E=JSON.parse(B);var D=E.message;console.log("message:"+D);var C=E.status;if(C==0){if(typeof this.CALLBACK_SUCCESS!="undefined"){setTimeout("BestpayHtml5.CALLBACK_SUCCESS('"+D+"')",0)}}else{if(typeof this.CALLBACK_FAIL!="undefined"){setTimeout("BestpayHtml5.CALLBACK_FAIL('"+D+"')",0)}}console.log("你先:("+(a.idCounter)+")"+B)}};var q=function(E,C,G){var H={service:E,action:C};var B=prompt(JSON.stringify(H),G);var J;try{J=JSON.parse(B)}catch(F){console.error(F.message)}var D=J.status;var I=J.message;if(D==0){return I}else{console.error("service:"+E+" action:"+C+" error:"+I)}};var m;var c=function(C,G,E,H,D){var F={service:C,action:G};if(typeof D!="success"){a.CALLBACK_SUCCESS=H}if(typeof D!="undefined"){a.CALLBACK_FAIL=D}else{a.CALLBACK_FAIL=function(){}}var B=a.callNative(F,E);console.log("我先:("+(a.idCounter)+")"+B)};return{Dialog:i,App:s,exec_asyn:c,exec:q,Preference:o,Contacts:d,User:h,Toast:r,BestpayHtml5:a,Storage:z,Security:f,PasswordKeyBoard:y,Scanner:u}});