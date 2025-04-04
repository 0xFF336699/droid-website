import"./modulepreload-polyfill-B5Qt9EMX.js";import{W as e,l as n,A as t,i as a,c as l,g as o,a as i}from"./AutoWebViewJs-C3CFEN_X.js";let c=function(a){if(!e.instance.isInApp)return;let l=n.merge({},a),o=l.injects||[],i=[];for(let e=0;e<o.length;e++){let t;let a=o[e];n.isArray(a)?t=a:n.isString(a)?t=[a]:n.isObject(a)&&(t=[a.name,a.alias]),i.push(t)}l.injects=i;let c=JSON.stringify(l);return t.instance.callScriptRunner(c)},s=new t;!async function(){a(),l();let e="htmls/pages/accessibility-pn-an-info/content",n=await o(e),t=await i(e,"content.title");s.init(),document.title=t,function(e){console.log(3);let n=document.getElementById("pn"),t=document.getElementById("an"),a=document.getElementById("cls"),l=document.getElementById("closeBtn"),o=document.getElementById("useBtn"),i=document.getElementById("lpn"),u=document.getElementById("lan"),d=document.getElementById("lan"),r=document.getElementById("apn"),g=document.getElementById("aan"),y=document.getElementById("acn");if(!n||!t||!a||!l||!o||!i||!u||!d||!r||!g||!y){console.log(`!inputPn=${!n}, !inputAn=${!t}, !inputCls=${!a}, !closeBtn=${!l}, !useBtn=${!o}, !lpn=${!i}, !lan=${!u}, !lcls=${!d}, !buttonPn=${!r}, !buttonAn=${g}, !buttonCn=${!y}`);return}i.innerText=e("content.pnLabel"),u.innerText=e("content.anLabel"),d.innerText=e("content.clsLable"),l.innerText=e("content.closeBtn"),o.innerText=e("content.useBtn"),r.innerText=e("content.copyButtonText"),r.onclick=function(){s.clipboardSetText(n.value)},g.innerText=e("content.copyButtonText"),g.onclick=function(){s.clipboardSetText(t.value)},y.innerText=e("content.copyButtonText"),y.onclick=function(){s.clipboardSetText(a.value)};let w=JSON.parse(s.callJavaToJsDataString().javaResultString||"{}");l.onclick=function(){s.onJsCallEvent("callExit",""),s.callExitFromJs()},o.onclick=function(){s.dispatchData("WebViewJsDispatcher",w.eventType,JSON.stringify({pn:n.value,an:t.value,cn:a.value}))},console.log(4);let m=s.webViewJsId().javaResultString||"id failed",p="onSetPackage",v="onSetActivity",b="onSetClass";s.listen("a11yModel","eventLastPackageChanged","onLastPackageChanged",!1),console.log(5),window.global||(console.log(5.5),window.global=window);let f=window;function C(){c({injects:[["webViewJs"],["a11yModel"]],script:`
        var pn = a11yModel.nowApplicationPackageName;
        webViewJs.callJsEvent("${p}", pn, ${m});
        `})}console.log(6),f.onCallJsEvent=window.global.onCallJsEvent=function(e){var l,o,i;if(console.log("global.onCallJsEvent-fn",e),e)switch(e.type){case p:l=e.data,n.value=l;break;case"onLastPackageChanged":C();break;case v:o=e.data,t.value=o;break;case b:i=e.data,a.value=i;break;default:console.log("uuuuuuuuuuuuuuuuuunknow event")}},console.log("global=",window.global),console.log("window=",window),C(),c({injects:[["webViewJs"],{name:"a11yModel",alias:"a11yModel"}],script:`
        // a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastFullScreenActivityChanged, webViewJs, function(e){
        //     var an = a11yModel.lastFullScreenActivity;
        //     webViewJs.callJsEvent("${v}", an, ${m});
        // });
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastFullScreenActivityChanged, webViewJs, onActivityChange);
        onActivityChange(null);
        function onActivityChange(e){
            var an = a11yModel.lastFullScreenActivity;
            webViewJs.callJsEvent("${v}", an, ${m});
        }
        `}),c({injects:[["webViewJs"],{name:"a11yModel",alias:"a11yModel"}],script:`
       
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventAppWindowRefresh, webViewJs, onClassChange);
        onClassChange(null);
        function onClassChange(e){
            var cls = a11yModel.lastClassName;
            webViewJs.callJsEvent("${b}", cls, ${m});
        }
        `}),s.onDocumentReady(),console.log(7)}(n)}();