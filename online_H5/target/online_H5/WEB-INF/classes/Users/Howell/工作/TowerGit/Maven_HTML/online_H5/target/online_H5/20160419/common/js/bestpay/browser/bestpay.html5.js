define(function(){var u;var w={keyStr:"",keyInputId:"",initPwdId:function(y){w.keyStr="";w.keyInputId=y;$("#"+y).blur(function(){w.hideKeyboard()});$("#"+y).css("font-size","15px")},popPswKeyboard:function(){return p("PasswordKeyBoard","popPswKeyboard",null)},hideKeyboard:function(){return p("PasswordKeyBoard","hideKeyboard",null)},pswInputStr:function i(y){var A="";for(var z=0;z<w.keyStr.length;z++){if(z==w.keyStr.length-1&&y){clearTimeout(u);A+=w.keyStr.charAt(z);$("#"+w.keyInputId).val(A);u=setTimeout(function(){A=A.substring(0,A.length-1);A+="●";$("#"+w.keyInputId).val(A)},500)}else{A+="●"}}$("#"+w.keyInputId).val(A)},returnkey:function k(y){w.keyStr+=y;w.pswInputStr(true)},deleteKey:function j(){w.keyStr=w.keyStr.substr(0,w.keyStr.length-1);w.pswInputStr(false)}};var v={pay:function(A,B,y){var z={params:A};return c("Payment","pay",JSON.stringify(z),B,y)},recharge:function(B,z,C,y){var A={productNo:B,location:z};return c("Payment","recharge",JSON.stringify(A),C,y)}};var t={scan:function(A,B,y){var z={params:A};return c("Scanner","scan",JSON.stringify(z),B,y)},handlerVerifyPhoto:function(z,A,y){return c("Scanner","handlerVerifyPhoto",JSON.stringify(z),A,y)},handlerPreviewPhoto:function(z,A,y){return p("Scanner","handlerPreviewPhoto",JSON.stringify(z),A,y)}};var g={getProduct:function(){return p("User","getProduct",null)},getLocation:function(){return p("User","getLocation",null)},getSuccessLoginInfo:function(){return p("User","getSuccessLoginInfo",null)},login:function(y){return p("User","login",null)}};var r={setThresholdBtnIsVisable:function(y){var z={isvisable:y};console.log("app--------------->"+JSON.stringify(z));p("App","setThresholdBtnIsVisable",JSON.stringify(z))},jumpToRecertify:function(){var y={comefrom:"tianyibao"};c("App","jumpToRecertify",JSON.stringify(y))},jumpToBindCard:function(){var y={comefrom:"tianyibao"};c("App","jumpToBindCard",JSON.stringify(y))},jumpToUnBindCard:function(){var y={comefrom:"tianyibao"};c("App","jumpToUnBindCard",JSON.stringify(y))},getAppId:function(){return p("App","getAppId",null)},jumpToNewH5View:function(y){var z={url:y};c("App","jumpToNewH5View",JSON.stringify(z))},autoLogin:function(z){var y={productNo:"",location:""};c("App","autoLogin",JSON.stringify(y),z)},getSessionKey:function(){return p("App","getSessionKey",null)},getVersion:function(){return p("App","getVersion",null)},getHome:function(){return p("App","getHome",null)},getSecurityKey:function(){return p("App","getSecurityKey",null)},overrideBackPressed:function(y){},exitApp:function(){return p("App","exitApp",null)},setKeyEventListener:function(y){r.listener=y},onKeyEvent:function(y){if(typeof r.listener=="function"){r.listener(y)}},setTitle:function(z){var y={title:z};p("App","setTitle",JSON.stringify(y))},setTitleBackgroundColor:function(y){var z={color:y};p("App","setTitleBackground",JSON.stringify(z))},setTitleBackgroundPath:function(z){var y={path:z};p("App","setTitleBackground",JSON.stringify(y))},getScreen:function(){return p("App","getScreen",null)},showRightButton:function(y,A){var z={caption:y,callback:A};p("App","showRightButton",JSON.stringify(z))},hideRightButton:function(){p("App","hideRightButton","{}")},jumpToRealnameVerify:function(){p("App","jumpToRealnameVerify","{}")},jumpToAccountRecharge:function(A,y,B){var z={productNo:A,location:y};c("App","jumpToAccountRecharge",JSON.stringify(z),B)},execWhenReturnAndAppear:function(z){var y={execWhenReturnAndAppearJSFunc:z};c("App","execWhenReturnAndAppear",y)},jumpToNativeView:function(B,z,C,y){if(typeof z=="undefined"){z={}}var A=z;A.viewName=B;c("App","jumpToNativeView",JSON.stringify(A),C,y)}};var b={base64Encode:function(y){if(typeof(y)=="undefined"||typeof(y)!="object"){return false}else{var A={};var z="";z=p("UtilPlugin","base64Encode",JSON.stringify(y));A=JSON.parse(z);return A}},base64Decode:function(y){if(typeof(y)=="undefined"||typeof(y)!="object"){return false}else{var A={};var z="";z=p("UtilPlugin","base64Decode",JSON.stringify(y));A=JSON.parse(z);return A}}};var n={put:function(A,B,z){console.log("put-key:"+A+" value:"+B+" prefname:"+z);var y={key:A,value:B,prefname:z};p("Preference","put",JSON.stringify(y))},get:function(A,B,z){console.log("get-key:"+A+" defValue:"+B+" prefname:"+z);var y={key:A,defValue:B,prefname:z};return p("Preference","get",JSON.stringify(y))},putWithApp:function(z,A,y){this.put(z,A,y)},getWithApp:function(z,A,y){return this.get(z,A,y)}};var x={execSQL:function(A,C,B){var z={dbName:A,sql:C,params:B};var y=p("Storage","exeSQL",JSON.stringify(z));return y},createDatabase:function(C,B,A,y){var z={dbName:C,createSQL:B,upgradSQL:A,version:y};return p("Storage","createDatabase",JSON.stringify(z))},batchInsert:function(y,B,A,C){var z={dbName:y,tableName:B,columns:A,data:C};return p("Storage","batchInsert",JSON.stringify(z))}};var e={SERVICE:"File",copy:function(A,B){var z={path:A,newpath:B};var y=JSON.stringify(z);return p(e.SERVICE,"copy",y)},exists:function(A){var z={file_path:A};var y=JSON.stringify(z);return p(e.SERVICE,"exists",y)},remove:function(z){var y={path:z};return p(e.SERVICE,"remove",JSON.stringify(y))}};var o={};var h={showSingleChoiceDialog:function(C,B,A,z,D){var y={title:C,list:B,checkedItem:A,displayKey:z};return c("Dialog","showSingleChoiceDialog",JSON.stringify(y),D,null)},showSwitchDialog:function(C,B,A,y,D){var z={title:C,message:B,postext:A,negtext:y};return c("Dialog","showSwitchDialog",JSON.stringify(z),D,null)},showWaitDialog:function(A,z){var y={title:A,msg:z};return p("Dialog","showWaitDialog",JSON.stringify(y))},dismissDialog:function(z){var y={id:z};return p("Dialog","dismissDialog",JSON.stringify(y))},showProgressDialog:function(A,z){var y={title:A,msg:z};return p("Dialog","showProgressDialog",JSON.stringify(y))},jumpToAuthorityDialog:function(){return p("Dialog","jumpToAuthorityDialog",null)},alert:function(y){window.alert(y)}};var q={LENGTH_LONG:1,LENGTH_SHORT:0,makeText:function(A,z){var y={text:A,duration:z};alert(A)}};var d={openContacts:function(z,y){c("Contacts","openContacts","{}",z,y)},tel:function(y){var z={tel:y};return p("Contacts","call",JSON.stringify(z))}};var m={digest:function(y,A){var z={algorithm:y,source:A};return p("MessageDigest","digest",JSON.stringify(z))}};var f={getSign:function(y){return{}},getSignINF:function(y){return p("Security","getSignINF",JSON.stringify(y))},encrypt:function(z){var y={source:z};return p("Security","encrypt",JSON.stringify(y))},decrypt:function(z){var y={encryptedData:z};return p("Security","decrypt",JSON.stringify(y))},pinkeyEncrypt:function(A,z){var y={source:A,salt:z};return p("Security","pinkeyEncrypt",JSON.stringify(y))},encryptPassword:function(A,B,z){var y={account:A,password:B,encrypRandNumber:z};return p("Security","encryptPassword",JSON.stringify(y))}};var s=function(y,C,B,A,D,z){if(A){return p(y,C,B)}else{p(y,C,B,D,z)}};var a={idCounter:0,INPUT_CMDS:"",INPUT_ARGS:"",OUTPUT_RESULTS:"",CALLBACK_SUCCESS:function(y){console.log(y);return},CALLBACK_FAIL:function(y){console.log(y);return},callNative:function(B,y){this.INPUT_CMDS=B;this.INPUT_ARGS=y;var z="ID_"+(++this.idCounter);window.nintf.setCmds(this.getInputCmd(),z);window.nintf.setArgs(this.getInputArgs(),z);var A=document.createElement("IFRAME");A.setAttribute("src","bestpayhtml://ready?id="+z);document.documentElement.appendChild(A);A.parentNode.removeChild(A);A=null;console.log(2);console.log("return this.OUTPUT_RESULTS:"+this.OUTPUT_RESULTS);return this.OUTPUT_RESULTS},getInputCmd:function(){return JSON.stringify(this.INPUT_CMDS)},getInputArgs:function(){return this.INPUT_ARGS},callBackJs:function(y){this.OUTPUT_RESULTS=y;console.log(1);var B=JSON.parse(y);var A=B.message;console.log("message:"+A);var z=B.status;if(z==0){if(typeof this.CALLBACK_SUCCESS!="undefined"){setTimeout("BestpayHtml5.CALLBACK_SUCCESS('"+A+"')",0)}}else{if(typeof this.CALLBACK_FAIL!="undefined"){setTimeout("BestpayHtml5.CALLBACK_FAIL('"+A+"')",0)}}console.log("你先:("+(a.idCounter)+")"+y)}};var p=function(B,z,D){var E={service:B,action:z};var y=prompt(JSON.stringify(E),D);var G;try{G=JSON.parse(y)}catch(C){console.error(C.message)}var A=G.status;var F=G.message;if(A==0){return F}else{console.error("service:"+B+" action:"+z+" error:"+F)}};var l;var c=function(z,D,B,E,A){var C={service:z,action:D};if(typeof A!="success"){a.CALLBACK_SUCCESS=E}if(typeof A!="undefined"){a.CALLBACK_FAIL=A}else{a.CALLBACK_FAIL=function(){}}var y=a.callNative(C,B);console.log("我先:("+(a.idCounter)+")"+y)};return{Dialog:h,App:r,exec_asyn:c,exec:p,Preference:n,Contacts:d,User:g,Toast:q,BestpayHtml5:a,Storage:x,Security:f,PasswordKeyBoard:w,Scanner:t}});