(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"9Jkg":function(e,t,n){e.exports=n("oh+g")},O40h:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("eVuF"),o=n.n(r);function i(e,t,n,r,i,a,c){try{var u=e[a](c),s=u.value}catch(f){return void n(f)}u.done?t(s):o.a.resolve(s).then(r,i)}function a(e){return function(){var t=this,n=arguments;return new o.a(function(r,o){var a=e.apply(t,n);function c(e){i(a,r,o,c,u,"next",e)}function u(e){i(a,r,o,c,u,"throw",e)}c(void 0)})}}},TJeZ:function(e,t,n){"use strict";function r(e,t){var n,r,o=(n={current:0,next:function(){return++this.current}},r={},{add:function(e,t){var o=null!=t?t:n.next();return r[o]=e,o},resolve:function(e,t,n,o){var i=r[e];i&&(n(o)?i.resolve(t):i.reject(o),r[e]=null)}});return t(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&o.resolve(n,t.data,function(e){return!e},t.error)}}),function(t){return void 0===t&&(t={}),new Promise(function(n,r){var i=o.add({resolve:n,reject:r},t.reqId);e(i,t)})}}var o;!function(e){e.getMe="GetMe",e.getPhone="GetPhone",e.getContacts="GetContacts",e.enableNotifications="AllowNotifications",e.disableNotifications="DisableNotifications"}(o||(o={}));var i="undefined"!=typeof window&&window.AndroidBridge,a="undefined"!=typeof window&&window.webkit&&window.webkit.messageHandlers,c=function(){var e=[];"undefined"!=typeof window&&window.addEventListener("aituEvents",function(t){[].concat(e).map(function(e){return e.call(null,t)})});var t,n,c,u=function(t){e.push(t)},s=(t={current:0,next:function(){return++this.current}},n={},c={add:function(e,r){var o=null!=r?r:t.next();return n[o]=e,o},resolve:function(e,t,r,o){var i=n[e];i&&(r(o)?i.resolve(t):i.reject(o),n[e]=null)}},u(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&c.resolve(n,t.data,function(e){return!e},t.error)}}),function(e,t){return void 0===t&&(t={}),new Promise(function(n,r){!function(e,t,n){void 0===n&&(n={});var r=a&&a.invoke;i&&i.invoke?i.invoke(e,t,JSON.stringify(n)):r?a.invoke.postMessage({reqId:e,method:t,data:n}):"undefined"!=typeof window&&console.log("--invoke-isWeb")}(c.add({resolve:n,reject:r},t.reqId),e,t)})}),f=function(e,t){var n,r,o=(n={current:0,next:function(){return++this.current}},r={},{add:function(e,t){var o="s"+(null!=t?t:n.next());return r[o]=e,o},resolve:function(e,t,n,o){var i=r[e];i&&(n(o)?i.resolve(t):i.reject(o),r[e]=null)}});return u(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&o.resolve(n,t.data,function(e){return!e},t.error)}}),{setItem:function(t,n){return new Promise(function(r,i){var a=o.add({resolve:r,reject:i});e(a,"setItem",{keyName:t,keyValue:n})})},getItem:function(t){return new Promise(function(n,r){var i=o.add({resolve:n,reject:r});e(i,"getItem",{keyName:t})})},clear:function(){return new Promise(function(t,n){var r=o.add({resolve:t,reject:n});e(r,"clear",{})})}}}(function(e,t,n){void 0===n&&(n={});var r=a&&a.storage;i&&i.storage?i.storage(e,t,JSON.stringify(n)):r?a.storage.postMessage({reqId:e,method:t,data:n}):"undefined"!=typeof window&&console.log("--storage-isWeb")}),d=r(function(e){var t=a&&a.getGeo;i&&i.getGeo?i.getGeo(e):t?a.getGeo.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--getGeo-isWeb")},u),l=r(function(e){var t=a&&a.getQr;i&&i.getQr?i.getQr(e):t?a.getQr.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--getQr-isWeb")},u),p=r(function(e){var t=a&&a.openSettings;i&&i.openSettings?i.openSettings(e):t?a.openSettings.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--openSettings-isWeb")},u),v=r(function(e,t){var n=a&&a.share;i&&i.share?i.share(e,t):n?a.share.postMessage({reqId:e,text:t}):"undefined"!=typeof window&&console.log("--share-isWeb")},u),g=r(function(e,t,n){console.log("gonna call with",e,t,n);var r=a&&a.shareImage;i&&i.shareImage?i.shareImage(e,t,n):r?a.shareImage.postMessage({reqId:e,text:t,image:n}):"undefined"!=typeof window&&console.log("--shareImage-isWeb")},u);return{invoke:s,storage:f,getMe:function(){return s(o.getMe)},getPhone:function(){return s(o.getPhone)},getContacts:function(){return s(o.getContacts)},getGeo:d,getQr:l,enableNotifications:function(){return s(o.enableNotifications)},disableNotifications:function(){return s(o.disableNotifications)},openSettings:p,share:v,shareImage:g,isSupported:function(){return i||a},supports:function(e){return i?!("function"!=typeof i[e]):!!a&&!(!a[e]||"function"!=typeof a[e].postMessage)},sub:u}}();t.a=c},dfwq:function(e,t,n){"use strict";var r=n("p0XB"),o=n.n(r);var i=n("d04V"),a=n.n(i),c=n("yLu3"),u=n.n(c);function s(e){return function(e){if(o()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(u()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return a()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return s})},hq78:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test2",function(){return n("wjp+")}])},"oh+g":function(e,t,n){var r=n("WEpk"),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},"wjp+":function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),o=n.n(r),i=n("9Jkg"),a=n.n(i),c=n("dfwq"),u=n("O40h"),s=n("q1tI"),f=n.n(s),d=n("DYRK"),l=n("TJeZ"),p=f.a.createElement;t.default=Object(d.a)({testWrapper:{width:"100%",maxWidth:800,margin:"0 auto"},btnWrapper:{padding:20,border:"10px solid black",marginTop:20,"& button:not(:first-child)":{marginLeft:20}}})(function(e){var t=e.classes,n=Object(s.useState)([]),r=n[0],i=n[1],f=Object(s.useState)([]),d=f[0],v=f[1],g=Object(s.useState)([]),w=g[0],m=g[1],b=function(){var e=Object(u.a)(o.a.mark(function e(t,n){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i(function(e){return[].concat(Object(c.a)(e),["setItem(".concat(t,", ").concat(n,")")])}),e.prev=1,e.next=4,l.a.storage.setItem(t,n);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),m(function(t){return[].concat(Object(c.a)(t),[a()(e.t0)])});case 9:case"end":return e.stop()}},e,null,[[1,6]])}));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i(function(e){return[].concat(Object(c.a)(e),["getItem(".concat(t,")")])}),e.prev=1,e.next=4,l.a.storage.getItem(t);case 4:n=e.sent,v(function(e){return[].concat(Object(c.a)(e),[a()(n)])}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),m(function(t){return[].concat(Object(c.a)(t),[a()(e.t0)])});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i(function(e){return[].concat(Object(c.a)(e),["clear()"])}),e.prev=1,e.next=4,l.a.storage.clear();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),m(function(t){return[].concat(Object(c.a)(t),[a()(e.t0)])});case 9:case"end":return e.stop()}},e,null,[[1,6]])}));return function(){return e.apply(this,arguments)}}();return p("div",{className:t.testWrapper},p("div",{className:t.btnWrapper},p("button",{onClick:function(){return b("testItem","123-456-789")}},"setItem('testItem', '123-456-789')"),p("button",{onClick:function(){return h("testItem")}},"getItem('testItem')")),p("div",{className:t.btnWrapper},p("button",{onClick:function(){return b("oneMoreTest","tatatatata")}},"setItem('oneMoreTest', 'tatatatata')"),p("button",{onClick:function(){return h("oneMoreTest")}},"getItem('oneMoreTest')")),p("div",{className:t.btnWrapper},p("button",{onClick:function(){return y()}},"clear()")),p("div",{style:{marginTop:20,display:"flex"}},p("div",{style:{width:"30%"}},p("b",{style:{marginBottom:10}},"Invoked methods:"),r.map(function(e,t){return p("div",{key:t+e},t+1+") ",e)})),p("div",{style:{width:"30%"}},p("b",{style:{marginBottom:10}},"Received data:"),d&&d.map(function(e,t){return p("div",{key:t+e},t+1+". ",e)})),p("div",{style:{width:"30%"}},p("b",{style:{marginBottom:10}},"Received errors:"),w&&w.map(function(e,t){return p("div",{key:t+e},t+1+". ",e)}))))})}},[["hq78",1,0]]]);