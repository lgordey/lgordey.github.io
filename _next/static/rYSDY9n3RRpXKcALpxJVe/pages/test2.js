(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"9Jkg":function(e,t,n){e.exports=n("oh+g")},O40h:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("eVuF"),o=n.n(r);function a(e,t,n,r,a,i,c){try{var s=e[i](c),u=s.value}catch(f){return void n(f)}s.done?t(u):o.a.resolve(u).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new o.a(function(r,o){var i=e.apply(t,n);function c(e){a(i,r,o,c,s,"next",e)}function s(e){a(i,r,o,c,s,"throw",e)}c(void 0)})}}},TJeZ:function(e,t,n){"use strict";function r(e,t){var n,r,o=(n={current:0,next:function(){return++this.current}},r={},{add:function(e,t){var o=null!=t?t:n.next();return r[o]=e,o},resolve:function(e,t,n,o){var a=r[e];a&&(n(o)?a.resolve(t):a.reject(o),r[e]=null)}});return t(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&o.resolve(n,t.data,function(e){return!e},t.error)}}),function(){var t=arguments;return new Promise(function(n,r){var a=o.add({resolve:n,reject:r});e.apply(void 0,[a].concat([].slice.call(t)))})}}var o;n.r(t),function(e){e.getMe="GetMe",e.getPhone="GetPhone",e.getContacts="GetContacts",e.enableNotifications="AllowNotifications",e.disableNotifications="DisableNotifications"}(o||(o={}));var a="undefined"!=typeof window&&window.AndroidBridge,i="undefined"!=typeof window&&window.webkit&&window.webkit.messageHandlers,c=function(){var e=[];"undefined"!=typeof window&&window.addEventListener("aituEvents",function(t){[].concat(e).map(function(e){return e.call(null,t)})});var t,n,c,s=function(t){e.push(t)},u=(t={current:0,next:function(){return++this.current}},n={},c={add:function(e,r){var o=null!=r?r:t.next();return n[o]=e,o},resolve:function(e,t,r,o){var a=n[e];a&&(r(o)?a.resolve(t):a.reject(o),n[e]=null)}},s(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&c.resolve(n,t.data,function(e){return!e},t.error)}}),function(e,t){return void 0===t&&(t={}),new Promise(function(n,r){!function(e,t,n){void 0===n&&(n={});var r=i&&i.invoke;a&&a.invoke?a.invoke(e,t,JSON.stringify(n)):r?i.invoke.postMessage({reqId:e,method:t,data:n}):"undefined"!=typeof window&&console.log("--invoke-isWeb")}(c.add({resolve:n,reject:r},t.reqId),e,t)})}),f=function(e,t){var n,r,o=(n={current:0,next:function(){return++this.current}},r={},{add:function(e,t){var o="s"+(null!=t?t:n.next());return r[o]=e,o},resolve:function(e,t,n,o){var a=r[e];a&&(n(o)?a.resolve(t):a.reject(o),r[e]=null)}});return s(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&o.resolve(n,t.data,function(e){return!e},t.error)}}),{setItem:function(t,n){return new Promise(function(r,a){var i=o.add({resolve:r,reject:a});e(i,"setItem",{keyName:t,keyValue:n})})},getItem:function(t){return new Promise(function(n,r){var a=o.add({resolve:n,reject:r});e(a,"getItem",{keyName:t})})},clear:function(){return new Promise(function(t,n){var r=o.add({resolve:t,reject:n});e(r,"clear",{})})}}}(function(e,t,n){void 0===n&&(n={});var r=i&&i.storage;a&&a.storage?a.storage(e,t,JSON.stringify(n)):r?i.storage.postMessage({reqId:e,method:t,data:n}):"undefined"!=typeof window&&console.log("--storage-isWeb")}),d=r(function(e){var t=i&&i.getGeo;a&&a.getGeo?a.getGeo(e):t?i.getGeo.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--getGeo-isWeb")},s),l=r(function(e){var t=i&&i.getQr;a&&a.getQr?a.getQr(e):t?i.getQr.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--getQr-isWeb")},s),p=r(function(e){var t=i&&i.selectContact;a&&a.selectContact?a.selectContact(e):t?i.selectContact.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--selectContact-isWeb")},s),v=r(function(e){var t=i&&i.openSettings;a&&a.openSettings?a.openSettings(e):t?i.openSettings.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--openSettings-isWeb")},s),g=r(function(e,t){var n=i&&i.share;a&&a.share?a.share(e,t):n?i.share.postMessage({reqId:e,text:t}):"undefined"!=typeof window&&console.log("--share-isWeb")},s),b=r(function(e,t){var n=i&&i.copyToClipboard;a&&a.copyToClipboard?a.copyToClipboard(e,t):n?i.copyToClipboard.postMessage({reqId:e,text:t}):"undefined"!=typeof window&&console.log("--copyToClipboard-isWeb")},s),w=r(function(e,t,n){var r=i&&i.shareImage;a&&a.shareImage?a.shareImage(e,t,n):r?i.shareImage.postMessage({reqId:e,text:t,image:n}):"undefined"!=typeof window&&console.log("--shareImage-isWeb")},s),h=r(function(e,t){if(!Array.isArray(t)||t.some(function(e){return e<1||e!==Math.floor(e)})||t.reduce(function(e,t){return e+t})>1e4)console.error("Pattern should be an array of positive integers no longer than 10000ms total");else{var n=i&&i.vibrate;a&&a.vibrate?a.vibrate(e,JSON.stringify(t)):n?i.vibrate.postMessage({reqId:e,pattern:t}):"undefined"!=typeof window&&console.log("--vibrate-isWeb")}},s);return{copyToClipboard:b,invoke:u,storage:f,getMe:function(){return u(o.getMe)},getPhone:function(){return u(o.getPhone)},getContacts:function(){return u(o.getContacts)},getGeo:d,getQr:l,selectContact:p,enableNotifications:function(){return u(o.enableNotifications)},disableNotifications:function(){return u(o.disableNotifications)},openSettings:v,share:g,shareImage:w,setShakeHandler:function(e){var t=i&&i.setShakeHandler;a&&a.setShakeHandler?a.setShakeHandler(e):t?i.setShakeHandler.postMessage(e):"undefined"!=typeof window&&console.log("--setShakeHandler-isWeb")},vibrate:h,isSupported:function(){return a||i},supports:function(e){return a?!("function"!=typeof a[e]):!!i&&!(!i[e]||"function"!=typeof i[e].postMessage)},sub:s}}();t.default=c},dfwq:function(e,t,n){"use strict";var r=n("p0XB"),o=n.n(r);var a=n("d04V"),i=n.n(a),c=n("yLu3"),s=n.n(c);function u(e){return function(e){if(o()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(s()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return i()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return u})},hq78:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test2",function(){return n("wjp+")}])},"oh+g":function(e,t,n){var r=n("WEpk"),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},"wjp+":function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),o=n.n(r),a=n("9Jkg"),i=n.n(a),c=n("dfwq"),s=n("O40h"),u=n("q1tI"),f=n.n(u),d=n("DYRK"),l=f.a.createElement;t.default=Object(d.a)({testWrapper:{width:"100%",maxWidth:800,margin:"0 auto"},btnWrapper:{padding:20,border:"10px solid black",marginTop:20,"& button:not(:first-child)":{marginLeft:20}}})(function(e){var t=e.classes,r=Object(u.useState)([]),a=r[0],f=r[1],d=Object(u.useState)([]),p=d[0],v=d[1],g=Object(u.useState)([]),b=g[0],w=g[1],h=Object(u.useState)(),m=h[0],y=h[1];Object(u.useEffect)(function(){window.AITU_ORIGIN="http://localhost:3000",y(n("TJeZ").default)},[]);var I=function(){var e=Object(s.a)(o.a.mark(function e(t,n){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f(function(e){return[].concat(Object(c.a)(e),["setItem(".concat(t,", ").concat(n,")")])}),e.prev=1,e.next=4,m.storage.setItem(t,n);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),w(function(t){return[].concat(Object(c.a)(t),[i()(e.t0)])});case 9:case"end":return e.stop()}},e,null,[[1,6]])}));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f(function(e){return[].concat(Object(c.a)(e),["getItem(".concat(t,")")])}),e.prev=1,e.next=4,m.storage.getItem(t);case 4:n=e.sent,v(function(e){return[].concat(Object(c.a)(e),[i()(n)])}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),w(function(t){return[].concat(Object(c.a)(t),[i()(e.t0)])});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f(function(e){return[].concat(Object(c.a)(e),["clear()"])}),e.prev=1,e.next=4,m.storage.clear();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),w(function(t){return[].concat(Object(c.a)(t),[i()(e.t0)])});case 9:case"end":return e.stop()}},e,null,[[1,6]])}));return function(){return e.apply(this,arguments)}}();return l("div",{className:t.testWrapper},l("a",{href:"/test"},"To test"),l("br",null),l("a",{href:"/test-share"},"To test share"),l("div",{className:t.btnWrapper},l("button",{onClick:function(){return I("testItem","123-456-789")}},"setItem('testItem', '123-456-789')"),l("button",{onClick:function(){return k("testItem")}},"getItem('testItem')")),l("div",{className:t.btnWrapper},l("button",{onClick:function(){return I("oneMoreTest","tatatatata")}},"setItem('oneMoreTest', 'tatatatata')"),l("button",{onClick:function(){return k("oneMoreTest")}},"getItem('oneMoreTest')")),l("div",{className:t.btnWrapper},l("button",{onClick:function(){return j()}},"clear()")),l("div",{style:{marginTop:20,display:"flex"}},l("div",{style:{width:"30%"}},l("b",{style:{marginBottom:10}},"Invoked methods:"),a.map(function(e,t){return l("div",{key:t+e},t+1+") ",e)})),l("div",{style:{width:"30%"}},l("b",{style:{marginBottom:10}},"Received data:"),p&&p.map(function(e,t){return l("div",{key:t+e},t+1+". ",e)})),l("div",{style:{width:"30%"}},l("b",{style:{marginBottom:10}},"Received errors:"),b&&b.map(function(e,t){return l("div",{key:t+e},t+1+". ",e)}))))})}},[["hq78",1,0]]]);