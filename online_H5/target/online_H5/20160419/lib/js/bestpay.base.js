var urlAll=window.location.href,url,isRecords,isMin=false;url=urlAll.substring(urlAll.lastIndexOf("/")+1,urlAll.lastIndexOf(".html"));if(url.indexOf(".min")>0){isMin=true;url=url.substring(0,url.lastIndexOf(".min"))}!function(N,M){function L(){console.log("base:flexible1");var a=I.getBoundingClientRect().width;a/F>540&&(a=540*F);var d=a/9;I.style.fontSize=d+"px",D.rem=N.rem=d;console.log("base:flexible2")}var K,J=N.document,I=J.documentElement,H=J.querySelector('meta[name="viewport"]'),G=J.querySelector('meta[name="flexible"]'),F=0,E=0,D=M.flexible||(M.flexible={});if(H){console.warn("将根据已有的meta标签来设置缩放比例");var C=H.getAttribute("content").match(/initial\-scale=([\d\.]+)/);C&&(E=parseFloat(C[1]),F=parseInt(1/E))}else{if(G){var B=G.getAttribute("content");if(B){var A=B.match(/initial\-dpr=([\d\.]+)/),z=B.match(/maximum\-dpr=([\d\.]+)/);A&&(F=parseFloat(A[1]),E=parseFloat((1/F).toFixed(2))),z&&(F=parseFloat(z[1]),E=parseFloat((1/F).toFixed(2)))}}}if(!F&&!E){var y=N.navigator.userAgent,x=(!!y.match(/android/gi),!!y.match(/iphone/gi)),w=x&&!!y.match(/OS 9_3/),v=N.devicePixelRatio;F=x&&!w?v>=3&&(!F||F>=3)?3:v>=2&&(!F||F>=2)?2:1:1,E=1/F}if(I.setAttribute("data-dpr",F),!H){if(H=J.createElement("meta"),H.setAttribute("name","viewport"),H.setAttribute("content","initial-scale="+E+", maximum-scale="+E+", minimum-scale="+E+", user-scalable=no"),I.firstElementChild){I.firstElementChild.appendChild(H)}else{var u=J.createElement("div");u.appendChild(H),J.write(u.innerHTML)}}N.addEventListener("resize",function(){clearTimeout(K),K=setTimeout(L,300)},!1),N.addEventListener("pageshow",function(b){b.persisted&&(clearTimeout(K),K=setTimeout(L,300))},!1),"complete"===J.readyState?J.body.style.fontSize=12*F+"px":J.addEventListener("DOMContentLoaded",function(){J.body.style.fontSize=12*F+"px"},!1),L(),D.dpr=N.dpr=F,D.refreshRem=L,D.rem2px=function(d){var c=parseFloat(d)*this.rem;return"string"==typeof d&&d.match(/rem$/)&&(c+="px"),c},D.px2rem=function(d){var c=parseFloat(d)/this.rem;return"string"==typeof d&&d.match(/px$/)&&(c+="rem"),c}}(window,window.lib||(window.lib={}));var eObj=document.getElementById("page_main");if(!!eObj){eObj.style.display="block"}(function(){this.FastButton=function(a,b){console.log("fastbutton init");this.element=a;this.handler=b;console.log(this);a.addEventListener("touchstart",this,false);a.addEventListener("click",this,false)};this.FastButton.prototype.handleEvent=function(a){console.log(a);switch(a.type){case"touchstart":this.onTouchStart(a);break;case"touchmove":this.onTouchMove(a);break;case"touchend":this.onClick(a);break;case"click":this.onClick(a);break}};this.FastButton.prototype.onTouchStart=function(a){a.stopPropagation();this.element.addEventListener("touchend",this,false);document.body.addEventListener("touchmove",this,false);this.startX=a.touches[0].clientX;this.startY=a.touches[0].clientY};this.FastButton.prototype.onTouchMove=function(a){if(Math.abs(a.touches[0].clientX-this.startX)>10||Math.abs(a.touches[0].clientY-this.startY)>10){this.reset()}};this.FastButton.prototype.onClick=function(a){a.stopPropagation();this.reset();this.handler(a);if(a.type=="touchend"){console.log("touchend")}};this.FastButton.prototype.reset=function(){this.element.removeEventListener("touchend",this,false);document.body.removeEventListener("touchmove",this,false)};this.clickbuster=function(){console.log("init clickbuster")};this.clickbuster.preventGhostClick=function(a,b){clickbuster.coordinates.push(a,b);window.setTimeout(this.clickbuster.pop,2500)};this.clickbuster.pop=function(){this.clickbuster.coordinates.splice(0,2)};this.clickbuster.onClick=function(c){for(var b=0;b<clickbuster.coordinates.length;b+=2){console.log(this);var a=clickbuster.coordinates[b];var d=clickbuster.coordinates[b+1];if(Math.abs(c.clientX-a)<25&&Math.abs(c.clientY-d)<25){c.stopPropagation();c.preventDefault()}}}})(this);function urlParameters(e){var c;if(e==null){c=document.URL}else{c=e}if(c.lastIndexOf("#")!=-1){c=c.substring(0,c.lastIndexOf("#"))}var b="";var f={};if(c.lastIndexOf("?")>0){b=c.substring(c.lastIndexOf("?")+1,c.length);var a=b.split("&");b="";for(var d=0;d<a.length;d++){f[a[d].split("=")[0]]=a[d].split("=")[1]}console.log(JSON.stringify(f))}else{console.log("没有参数!")}return f}document.addEventListener("click",clickbuster.onClick,true);clickbuster.coordinates=[];var baseUrl="../../lib/js/",minStr="";if(isMin){minStr="min.";baseUrl="../../lib/js/"+minStr}require.config({baseUrl:"js",waitSeconds:0,paths:{jquery:"../../lib/js/jquery-1.10.2.min",android:"../../lib/js/android",ios:"../../lib/js/ios",browser:"../../lib/js/browser","bestpay.lang":baseUrl+"bestpay.lang","bestpay.ui":baseUrl+"bestpay.ui","bestpay.http":baseUrl+"bestpay.http",global:baseUrl+"global","bestpay.base":baseUrl+"bestpay.base",jtemplates:"../../lib/js/jquery-jtemplates",dummy:"../../dummy",subconfig:minStr+"config",subclass:minStr+url},shim:{jtemplates:["jquery"]},urlArgs:"bust=ENV46-1.0.0-20160427190717"});require(["global","subconfig"],function(a,b){for(var e in b){a[e]=b[e]}window.config=a;window.dialogId=0;var c=urlParameters(urlAll);if(c.ENV!=null){a.ENV=c.ENV}if(!a.debug||a.ENV==="PRODUCT"){console.log=function(){};console.info=function(){};console.error=function(){}}var d="";if(!!a.browser){d="browser/"+minStr+"bestpay.html5";a.dummy=true}else{if((/android/gi).test(navigator.appVersion)){d="android/"+minStr+"bestpay.html5";a.bisChannel="01"}else{d="ios/bestpay.html5";a.bisChannel="02"}}console.log("loading "+d);window.showDialog=function(f){if(dialogId!==0){dismissDialog()}if(f==null||f==""){f=a.MSG.loading}dialogId=Bestpay.Dialog.showProgressDialog("",f)};window.dismissDialog=function(){if(dialogId===0){return}Bestpay.Dialog.dismissDialog(dialogId);dialogId=0};window.pageStack=new Array();window.goTo=function(g,i){console.log("----------goTo page--------- : "+g.title);initPage(g,"goto");if(typeof i==="function"){i()}if(a.isDialogBack==true){a.isDialogBack=false;return}if(isRecords==true){isRecords=false;return}if(g.prompt!=true){var f=pageStack.length;if(f>0){var h=pageStack[pageStack.length-1];document.getElementById(h.id).style.display="none";if(g.goToRecords!=null&&g.goToRecords==true){document.getElementById(h.id).style.display="block"}}}pageStack.push(g);document.getElementById(g.id).style.display="block";if(g.title!=null){Bestpay.App.setTitle(g.title)}};window.back=function(j){initPage(null,"back");var f=pageStack.length;if(f<=1){if(f==1&&pageStack[0].isGoToMain!=null&&pageStack[0].isGoToMain==true){console.log("isGoToMain:"+pageStack[0].isGoToMain);Bestpay.App.jumpToMain();return}Bestpay.App.exitApp();return}var g=pageStack.pop();f=pageStack.length;var h=pageStack[f-1];if(typeof j==="function"){j(g,h)}var i=document.getElementById(g.id);i.style.display="none";i=document.getElementById(h.id);i.style.display="block";Bestpay.App.setTitle(h.title)};window.onback=function(g){console.log("isBack() : "+g);if(pageStack[pageStack.length-1]==="overTimePage"){var f=document.getElementById("overTimePage");f.style.display="none";Bestpay.App.exitApp()}console.log("state  ======= "+a.payingBack);if(!!a.payingBack){isRecords=true;PasswordKeyBoard.hideKeyboardUI3();a.payingBack=false;dismissDialog();Bestpay.Dialog.showAlertSynchroDialog(a.TITLE.submited_title,a.MSG.msg_submited_content,"确定",a.TRADE_LIST_QUERY_TYPE,a.TRADE_LIST_QUERY_NUMBER);if(typeof a.isBack==="function"){a.isBack();a.isBack=null;return}return}if(pageStack.length>1&&pageStack[pageStack.length-1].goToRecords!=null&&!!pageStack[pageStack.length-1].goToRecords){$(document).scrollTop(0);$("#order_comfirm").removeClass("goPayAnimation").addClass("backPayAnimation");setTimeout(function(){back()},600);return}if(pageStack.length>1&&pageStack[pageStack.length-1].isDisable==true){return}else{if(pageStack.length>1&&pageStack[pageStack.length-1].goahead_main==true){Bestpay.App.exitApp()}}if(pageStack.length>=1&&pageStack[pageStack.length-1].togo!=null){console.log("togo:"+pageStack[pageStack.length-1].togo);if(pageStack[pageStack.length-1].togo!=true){pageStack=pageStack[pageStack.length-1].togo}else{if(typeof a.isBack==="function"){a.isBack();a.isBack=null;return}}}else{if(typeof a.isBack==="function"&&pageStack.length==0){a.isBack();a.isBack=null;return}}if(g=="dismissDialog"){a.isOpen=true;a.isDialogBack=true}if(g=="backpress"){back()}else{if(g!="backpress"){a.otherEvent(g)}}};window.initPage=function(f,g){PasswordKeyBoard.hideKeyboardUI3();if(!!NumberKeyBoard.HidenumKeyboard){NumberKeyBoard.HidenumKeyboard()}a.startPage(f,g);if(!!f&&f.goToRecords==true){return}$(document).scrollTop(0)};require([d,"subclass"],function(g,f){window.Bestpay=g;window.BestpayHtml5=g.BestpayHtml5;window.App=g.App;window.PasswordKeyBoard=g.PasswordKeyBoard;window.returnkey=g.PasswordKeyBoard.returnkey;window.deleteKey=g.PasswordKeyBoard.deleteKey;window.NumberKeyBoard=g.NumberKeyBoard;window.returnNum=g.NumberKeyBoard.returnNum;window.deleteNum=g.NumberKeyBoard.deleteNum;window.userInfo=g.User.getSuccessLoginInfo();window.product=g.User.getProduct();g.App.overrideBackPressed(true);g.App.setKeyEventListener(onback);new f().initApp()})});