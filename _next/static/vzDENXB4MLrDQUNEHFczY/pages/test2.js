(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{TJeZ:function(e,t,n){"use strict";var o;function r(e,t){var n,o,r=(n={current:0,next:function(){return++this.current}},o={},{add:function(e,t){var r=null!=t?t:n.next();return o[r]=e,r},resolve:function(e,t,n,r){var i=o[e];i&&(n(r)?i.resolve(t):i.reject(r),o[e]=null)}});return t(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&r.resolve(n,t.data,function(e){return!e},t.error)}}),function(){var t=arguments;return new Promise(function(n,o){var i=r.add({resolve:n,reject:o});e.apply(void 0,[i].concat([].slice.call(t)))})}}n.r(t),function(e){e.getMe="GetMe",e.getPhone="GetPhone",e.getContacts="GetContacts",e.getUserProfile="GetUserProfile",e.enableNotifications="AllowNotifications",e.disableNotifications="DisableNotifications"}(o||(o={}));var i="invoke",a="storage",s="undefined"!=typeof window&&window.AndroidBridge,c="undefined"!=typeof window&&window.webkit&&window.webkit.messageHandlers,u="undefined"!=typeof window&&window.top!==window&&(window.WebBridge=window.WebBridge||{});if(u){var d=window.AITU_ORIGIN||"https://aitu.io";[i,a].forEach(function(e){u[e]||(u[e]=function(){return window.top.postMessage(JSON.stringify({method:e,payload:[].slice.call(arguments)}),d)})}),window.addEventListener("message",function(e){if(e.origin===d&&e.data)try{var t=JSON.parse(e.data);window.dispatchEvent(new CustomEvent("aituEvents",{detail:t}))}catch(e){}})}var l=function(){var e=[];"undefined"!=typeof window&&window.addEventListener("aituEvents",function(t){[].concat(e).map(function(e){return e.call(null,t)})});var t,n,d,l=function(t){e.push(t)},f=(t={current:0,next:function(){return++this.current}},n={},d={add:function(e,o){var r=null!=o?o:t.next();return n[r]=e,r},resolve:function(e,t,o,r){var i=n[e];i&&(o(r)?i.resolve(t):i.reject(r),n[e]=null)}},l(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&d.resolve(n,t.data,function(e){return!e},t.error)}}),function(e,t){return void 0===t&&(t={}),new Promise(function(n,o){!function(e,t,n){void 0===n&&(n={});var o=c&&c[i],r=u&&u[i];s&&s[i]?s[i](e,t,JSON.stringify(n)):o?c[i].postMessage({reqId:e,method:t,data:n}):r?u[i](e,t,n):"undefined"!=typeof window&&console.log("--invoke-isUnknown")}(d.add({resolve:n,reject:o},t.reqId),e,t)})}),p=function(e,t){var n,o,r=(n={current:0,next:function(){return++this.current}},o={},{add:function(e,t){var r="s"+(null!=t?t:n.next());return o[r]=e,r},resolve:function(e,t,n,r){var i=o[e];i&&(n(r)?i.resolve(t):i.reject(r),o[e]=null)}});return l(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&r.resolve(n,t.data,function(e){return!e},t.error)}}),{setItem:function(t,n){return new Promise(function(o,i){var a=r.add({resolve:o,reject:i});e(a,"setItem",{keyName:t,keyValue:n})})},getItem:function(t){return new Promise(function(n,o){var i=r.add({resolve:n,reject:o});e(i,"getItem",{keyName:t})})},clear:function(){return new Promise(function(t,n){var o=r.add({resolve:t,reject:n});e(o,"clear",{})})}}}(function(e,t,n){void 0===n&&(n={});var o=c&&c[a],r=u&&u[a];s&&s[a]?s[a](e,t,JSON.stringify(n)):o?c[a].postMessage({reqId:e,method:t,data:n}):r?u[a](e,t,n):"undefined"!=typeof window&&console.log("--storage-isUnknown")}),g=r(function(e){var t=c&&c.getGeo;s&&s.getGeo?s.getGeo(e):t?c.getGeo.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--getGeo-isWeb")},l),v=r(function(e){var t=c&&c.getQr;s&&s.getQr?s.getQr(e):t?c.getQr.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--getQr-isWeb")},l),w=r(function(e){var t=c&&c.getSMSCode;s&&s.getSMSCode?s.getSMSCode(e):t?c.getSMSCode.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--getSMSCode-isWeb")},l),b=r(function(e){var t=c&&c.selectContact;s&&s.selectContact?s.selectContact(e):t?c.selectContact.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--selectContact-isWeb")},l),h=r(function(e){var t=c&&c.openSettings;s&&s.openSettings?s.openSettings(e):t?c.openSettings.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--openSettings-isWeb")},l),m=r(function(e){var t=c&&c.closeApplication;s&&s.closeApplication?s.closeApplication(e):t?c.closeApplication.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--closeApplication-isWeb")},l),y=r(function(e,t){var n=c&&c.share;s&&s.share?s.share(e,t):n?c.share.postMessage({reqId:e,text:t}):"undefined"!=typeof window&&console.log("--share-isWeb")},l),I=r(function(e,t){var n=c&&c.setTitle;s&&s.setTitle?s.setTitle(e,t):n?c.setTitle.postMessage({reqId:e,text:t}):"undefined"!=typeof window&&console.log("--setTitle-isWeb")},l),S=r(function(e,t){var n=c&&c.copyToClipboard;s&&s.copyToClipboard?s.copyToClipboard(e,t):n?c.copyToClipboard.postMessage({reqId:e,text:t}):"undefined"!=typeof window&&console.log("--copyToClipboard-isWeb")},l),C=r(function(e,t,n){var o=s&&s.shareFile,r=c&&c.shareFile,i="image."+n.split(";")[0].split("/")[1],a=n.substr(n.indexOf(",")+1);o?s.shareFile(e,t,i,a):r?c.shareFile.postMessage({reqId:e,text:t,filename:i,base64Data:a}):"undefined"!=typeof window&&console.log("--shareFile-isWeb")},l),k=r(function(e,t,n,o){var r=c&&c.shareFile;s&&s.shareFile?s.shareFile(e,t,n,o):r?c.shareFile.postMessage({reqId:e,text:t,filename:n,base64Data:o}):"undefined"!=typeof window&&console.log("--shareFile-isWeb")},l),M=r(function(e,t){if(!Array.isArray(t)||t.some(function(e){return e<1||e!==Math.floor(e)})||t.reduce(function(e,t){return e+t})>1e4)console.error("Pattern should be an array of positive integers no longer than 10000ms total");else{var n=c&&c.vibrate;s&&s.vibrate?s.vibrate(e,JSON.stringify(t)):n?c.vibrate.postMessage({reqId:e,pattern:t}):"undefined"!=typeof window&&console.log("--vibrate-isWeb")}},l),T=r(function(e){var t=c&&c.enableScreenCapture;s&&s.enableScreenCapture?s.enableScreenCapture(e):t?c.enableScreenCapture.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--enableScreenCapture-isWeb")},l),q=r(function(e){var t=c&&c.disableScreenCapture;s&&s.disableScreenCapture?s.disableScreenCapture(e):t?c.disableScreenCapture.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--disableScreenCapture-isWeb")},l);return{version:String("0.2.13"),copyToClipboard:S,invoke:f,storage:p,getMe:function(){return f(o.getMe)},getPhone:function(){return f(o.getPhone)},getContacts:function(){return f(o.getContacts)},getGeo:g,getQr:v,getSMSCode:w,getUserProfile:function(e){return f(o.getUserProfile,{id:e})},selectContact:b,enableNotifications:function(){return f(o.enableNotifications)},disableNotifications:function(){return f(o.disableNotifications)},openSettings:h,closeApplication:m,setTitle:I,share:y,shareImage:C,shareFile:k,setShakeHandler:function(e){s&&s.setShakeHandler||c&&c.setShakeHandler?window.onAituBridgeShake=e:"undefined"!=typeof window&&console.log("--setShakeHandler-isWeb")},setTabActiveHandler:function(e){s&&s.setTabActiveHandler||c&&c.setTabActiveHandler?window.onAituBridgeTabActive=e:"undefined"!=typeof window&&console.log("--setTabActiveHandler-isWeb")},vibrate:M,isSupported:function(){var e=c&&window.webkit.messageHandlers.invoke;return Boolean(s||e||u)},supports:function(e){return s&&"function"==typeof s[e]||c&&c[e]&&"function"==typeof c[e].postMessage||u&&"function"==typeof u[e]},sub:l,enableScreenCapture:T,disableScreenCapture:q}}();t.default=l},hq78:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test2",function(){return n("wjp+")}])},"wjp+":function(e,t,n){"use strict";n.r(t);var o=n("ln6h"),r=n.n(o),i=n("9Jkg"),a=n.n(i),s=n("dfwq"),c=n("O40h"),u=n("q1tI"),d=n.n(u),l=n("DYRK"),f=d.a.createElement;t.default=Object(l.a)({testWrapper:{width:"100%",maxWidth:800,margin:"0 auto"},btnWrapper:{padding:20,border:"10px solid black",marginTop:20,"& button:not(:first-child)":{marginLeft:20}}})(function(e){var t=e.classes,o=Object(u.useState)([]),i=o[0],d=o[1],l=Object(u.useState)([]),p=l[0],g=l[1],v=Object(u.useState)([]),w=v[0],b=v[1],h=Object(u.useState)(),m=h[0],y=h[1];Object(u.useEffect)(function(){window.AITU_ORIGIN="http://localhost:3000",y(n("TJeZ").default)},[]);var I=function(){var e=Object(c.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(function(e){return[].concat(Object(s.a)(e),["setItem(".concat(t,", ").concat(n,")")])}),e.prev=1,e.next=4,m.storage.setItem(t,n);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),b(function(t){return[].concat(Object(s.a)(t),[a()(e.t0)])});case 9:case"end":return e.stop()}},e,null,[[1,6]])}));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(c.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(function(e){return[].concat(Object(s.a)(e),["getItem(".concat(t,")")])}),e.prev=1,e.next=4,m.storage.getItem(t);case 4:n=e.sent,g(function(e){return[].concat(Object(s.a)(e),[a()(n)])}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),b(function(t){return[].concat(Object(s.a)(t),[a()(e.t0)])});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(function(e){return[].concat(Object(s.a)(e),["clear()"])}),e.prev=1,e.next=4,m.storage.clear();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),b(function(t){return[].concat(Object(s.a)(t),[a()(e.t0)])});case 9:case"end":return e.stop()}},e,null,[[1,6]])}));return function(){return e.apply(this,arguments)}}();return f("div",{className:t.testWrapper},f("a",{href:"/test"},"To test"),f("br",null),f("a",{href:"/test-share"},"To test share"),f("div",{className:t.btnWrapper},f("button",{onClick:function(){return I("testItem","123-456-789")}},"setItem('testItem', '123-456-789')"),f("button",{onClick:function(){return S("testItem")}},"getItem('testItem')")),f("div",{className:t.btnWrapper},f("button",{onClick:function(){return I("oneMoreTest","tatatatata")}},"setItem('oneMoreTest', 'tatatatata')"),f("button",{onClick:function(){return S("oneMoreTest")}},"getItem('oneMoreTest')")),f("div",{className:t.btnWrapper},f("button",{onClick:function(){return C()}},"clear()")),f("div",{style:{marginTop:20,display:"flex"}},f("div",{style:{width:"30%"}},f("b",{style:{marginBottom:10}},"Invoked methods:"),i.map(function(e,t){return f("div",{key:t+e},t+1+") ",e)})),f("div",{style:{width:"30%"}},f("b",{style:{marginBottom:10}},"Received data:"),p&&p.map(function(e,t){return f("div",{key:t+e},t+1+". ",e)})),f("div",{style:{width:"30%"}},f("b",{style:{marginBottom:10}},"Received errors:"),w&&w.map(function(e,t){return f("div",{key:t+e},t+1+". ",e)}))))})}},[["hq78",1,0]]]);