_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"HaE+":function(e,n,t){"use strict";function o(e,n,t,o,r,i,s){try{var u=e[i](s),a=u.value}catch(c){return void t(c)}u.done?n(a):Promise.resolve(a).then(o,r)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var s=e.apply(n,t);function u(e){o(s,r,i,u,a,"next",e)}function a(e){o(s,r,i,u,a,"throw",e)}u(void 0)}))}}t.d(n,"a",(function(){return r}))},"i2/s":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test-kundelik",function(){return t("s6jl")}])},o0o1:function(e,n,t){e.exports=t("ls82")},s6jl:function(e,n,t){"use strict";t.r(n);var o=t("o0o1"),r=t.n(o),i=t("KQm4"),s=t("HaE+"),u=t("q1tI"),a=t.n(u),c=t("DYRK");function d(e,n){var t,o,r=(t={current:0,next:function(){return++this.current}},o={},{add:function(e,n){var r=null!=n?n:t.next();return o[r]=e,r},resolve:function(e,n,t,r){var i=o[e];i&&(t(r)?i.resolve(n):i.reject(r),o[e]=null)}});return n((function(e){if(e.detail&&"requestId"in e.detail){var n=e.detail,t=n.requestId;t&&r.resolve(t,n.data,(function(e){return!e}),n.error)}})),function(){var n=arguments;return new Promise((function(t,o){var i=r.add({resolve:t,reject:o});e.apply(void 0,[i].concat([].slice.call(n)))}))}}var l="undefined"!=typeof window&&window.aitu_embedded_bridge,f="undefined"!=typeof window&&window.webkit&&window.webkit.messageHandlers,p=function(){var e=[];"undefined"!=typeof window&&window.addEventListener("aituEvents",(function(n){[].concat(e).map((function(e){return e.call(null,n)}))}));var n=function(n){e.push(n)};return{getKundelikAuthToken:d((function(e){var n=f&&f.getKundelikAuthToken;l&&l.getKundelikAuthToken?l.getKundelikAuthToken(e):n?f.getKundelikAuthToken.postMessage({requestId:e}):"undefined"!=typeof window&&console.log("--getKundelikAuthToken-isWeb")}),n),openSettings:d((function(e){var n=f&&f.openSettings;l&&l.openSettings?l.openSettings(e):n?f.openSettings.postMessage({requestId:e}):"undefined"!=typeof window&&console.log("--openSettings-isWeb")}),n),getContacts:d((function(e){var n=f&&f.getContacts;l&&l.getContacts?l.getContacts(e):n?f.getContacts.postMessage({requestId:e}):"undefined"!=typeof window&&console.log("--getContacts-isWeb")}),n),getKundelikUserInfo:d((function(e){var n=f&&f.getKundelikUserInfo;l&&l.getKundelikUserInfo?l.getKundelikUserInfo(e):n?f.getKundelikUserInfo.postMessage({requestId:e}):"undefined"!=typeof window&&console.log("--getKundelikUserInfo-isWeb")}),n),showNewMessengerEvent:d((function(e,n){var t=f&&f.showNewMessengerEvent;l&&l.showNewMessengerEvent?l.showNewMessengerEvent(e,n):t?f.showNewMessengerEvent.postMessage({requestId:e,data:n}):"undefined"!=typeof window&&console.log("--showNewMessengerEventMethod-isWeb")}),n),isSupported:function(){return Boolean(l||f)},supports:function(e){return l&&"function"==typeof l[e]||f&&f[e]&&"function"==typeof f[e].postMessage},sub:n}}(),g=a.a.createElement;n.default=Object(c.a)({testWrapper:{width:"100%",maxWidth:800,margin:"0 auto"},btnWrapper:{padding:"0 20px 20px 0",border:"10px solid black",marginTop:20,"& button, & a, & span":{margin:"20px 0 0 20px",display:"inline-block"}}})((function(e){var n=e.classes,t=Object(u.useState)([]),o=t[0],a=t[1],c=Object(u.useState)([]),d=c[0],l=c[1],f=Object(u.useState)([]),w=f[0],v=f[1],k=Object(u.useState)([]),h=k[0],b=(k[1],function(){var e=Object(s.a)(r.a.mark((function e(n){var t,o,s,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:[],a((function(e){return[].concat(Object(i.a)(e),[n])})),console.log("==handle ".concat(n," method").concat(t.length>0?" with params ".concat(JSON.stringify(t)):"")),e.prev=3,e.next=6,p[n].apply(p,Object(i.a)(t));case 6:o=e.sent,l((function(e){return[].concat(Object(i.a)(e),[JSON.stringify(o)])})),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0),s=e.t0 instanceof Error?"".concat(e.t0.name,": ").concat(e.t0.message):JSON.stringify(e.t0),v((function(e){return[].concat(Object(i.a)(e),[s])}));case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(n){return e.apply(this,arguments)}}());return g("div",{className:n.testWrapper},g("div",{className:n.btnWrapper},g("button",{onClick:function(){return b("getKundelikAuthToken")}},"getKundelikAuthToken"),g("button",{onClick:function(){return b("openSettings")}},"openSettings"),g("button",{onClick:function(){return b("getContacts")}},"getContacts"),g("button",{onClick:function(){return b("getKundelikUserInfo")}},"getKundelikUserInfo"),g("button",{onClick:function(){return b("showNewMessengerEvent")}},"showNewMessengerEvent")),g("div",{style:{marginTop:20}},g("b",null,"Errors:"),h.map((function(e,n){return g("div",{key:n+e},e)}))),g("div",{style:{marginTop:20,display:"flex"}},g("div",{style:{width:"30%"}},g("b",{style:{marginBottom:10}},"Invoked methods:"),o.map((function(e,n){return g("div",{key:n+e},n+1+") ",e)}))),g("div",{style:{width:"30%"}},g("b",{style:{marginBottom:10}},"Received data:"),d&&d.map((function(e,n){return g("div",{key:n+e},n+1+". ",e)}))),g("div",{style:{width:"30%"}},g("b",{style:{marginBottom:10}},"Received errors:"),w&&w.map((function(e,n){return g("div",{key:n+e},n+1+". ",e)})))))}))}},[["i2/s",0,1,2,3]]]);