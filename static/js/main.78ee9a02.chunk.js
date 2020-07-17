(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[5],{23:function(n,a,e){"use strict";e.d(a,"a",(function(){return o})),e.d(a,"f",(function(){return i})),e.d(a,"m",(function(){return r})),e.d(a,"q",(function(){return c})),e.d(a,"d",(function(){return l})),e.d(a,"t",(function(){return u})),e.d(a,"c",(function(){return d})),e.d(a,"l",(function(){return s})),e.d(a,"u",(function(){return T})),e.d(a,"v",(function(){return p})),e.d(a,"e",(function(){return h})),e.d(a,"b",(function(){return f})),e.d(a,"r",(function(){return g})),e.d(a,"s",(function(){return m})),e.d(a,"k",(function(){return v})),e.d(a,"j",(function(){return j})),e.d(a,"i",(function(){return y})),e.d(a,"h",(function(){return S})),e.d(a,"g",(function(){return D})),e.d(a,"p",(function(){return E})),e.d(a,"n",(function(){return F})),e.d(a,"o",(function(){return w}));var t=e(24),o="https://api.covid19india.org/v4/min",i={english:"en-US",hindi:"hi",telugu:"te",kannada:"en-US",gujarati:"gu",marathi:"en-US",tamil:"ta",bengali:"bn",punjabi:"en-US",malayalam:"en-US",odiya:"en-US"},r=["confirmed","active","recovered","deceased"],c=[].concat(r,["tested"]),l=30,u=[].concat(r,["tested"]),d=300,s=20,T="UN",p="Unknown",h="T00:00:00+05:30",f={confirmed:"#ff073a",active:"#007bff",recovered:"#28a745",deceased:"#6c757d",tested:"#4b1eaa"},g={total:"Cumulative",delta:"Daily"},m={BEGINNING:"Beginning",MONTH:"1 Month",TWO_WEEKS:"2 Weeks"},v={CHOROPLETH:0,BUBBLES:1},j={STATES:0,DISTRICTS:1},y={COUNTRY:0,STATE:1},A="/mini_maps",S={AP:{geoDataFile:"".concat(A,"/andhrapradesh.json"),mapType:y.STATE},AR:{geoDataFile:"".concat(A,"/arunachalpradesh.json"),mapType:y.STATE},AS:{geoDataFile:"".concat(A,"/assam.json"),mapType:y.STATE},BR:{geoDataFile:"".concat(A,"/bihar.json"),mapType:y.STATE},CT:{name:"Chhattisgarh",geoDataFile:"".concat(A,"/chhattisgarh.json"),mapType:y.STATE},GA:{geoDataFile:"".concat(A,"/goa.json"),mapType:y.STATE},GJ:{geoDataFile:"".concat(A,"/gujarat.json"),mapType:y.STATE},HR:{geoDataFile:"".concat(A,"/haryana.json"),mapType:y.STATE},HP:{geoDataFile:"".concat(A,"/himachalpradesh.json"),mapType:y.STATE},JK:{geoDataFile:"".concat(A,"/jammukashmir.json"),mapType:y.STATE},JH:{geoDataFile:"".concat(A,"/jharkhand.json"),mapType:y.STATE},KA:{geoDataFile:"".concat(A,"/karnataka.json"),mapType:y.STATE},KL:{geoDataFile:"".concat(A,"/kerala.json"),mapType:y.STATE},MP:{geoDataFile:"".concat(A,"/madhyapradesh.json"),mapType:y.STATE},MH:{geoDataFile:"".concat(A,"/maharashtra.json"),mapType:y.STATE},MN:{geoDataFile:"".concat(A,"/manipur.json"),mapType:y.STATE},ML:{geoDataFile:"".concat(A,"/meghalaya.json"),mapType:y.STATE},MZ:{geoDataFile:"".concat(A,"/mizoram.json"),mapType:y.STATE},NL:{geoDataFile:"".concat(A,"/nagaland.json"),mapType:y.STATE},OR:{geoDataFile:"".concat(A,"/odisha.json"),mapType:y.STATE},PB:{geoDataFile:"".concat(A,"/punjab.json"),mapType:y.STATE},RJ:{geoDataFile:"".concat(A,"/rajasthan.json"),mapType:y.STATE},SK:{geoDataFile:"".concat(A,"/sikkim.json"),mapType:y.STATE},TN:{geoDataFile:"".concat(A,"/tamilnadu.json"),mapType:y.STATE},TG:{geoDataFile:"".concat(A,"/telangana.json"),mapType:y.STATE},TR:{geoDataFile:"".concat(A,"/tripura.json"),mapType:y.STATE},UT:{geoDataFile:"".concat(A,"/uttarakhand.json"),mapType:y.STATE},UP:{geoDataFile:"".concat(A,"/uttarpradesh.json"),mapType:y.STATE},WB:{geoDataFile:"".concat(A,"/westbengal.json"),mapType:y.STATE},AN:{name:"Andaman and Nicobar Islands",geoDataFile:"".concat(A,"/andamannicobarislands.json"),mapType:y.STATE},CH:{geoDataFile:"".concat(A,"/chandigarh.json"),mapType:y.STATE},DN:{geoDataFile:"".concat(A,"/dnh-and-dd.json"),mapType:y.STATE},DL:{geoDataFile:"".concat(A,"/delhi.json"),mapType:y.STATE},LA:{geoDataFile:"".concat(A,"/ladakh.json"),mapType:y.STATE},LD:{geoDataFile:"".concat(A,"/lakshadweep.json"),mapType:y.STATE},PY:{geoDataFile:"".concat(A,"/puducherry.json"),mapType:y.STATE},TT:{geoDataFile:"".concat(A,"/india.json"),mapType:y.COUNTRY}},D=50,E=Object(t.a)({AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli and Daman and Diu",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",LD:"Lakshadweep",PY:"Puducherry",TT:"India"},T,"Unassigned"),b=[],k={};Object.keys(E).map((function(n,a){return k[E[n]]=n,b.push({code:n,name:E[n]}),null}));var F=k,w=b},31:function(n,a,e){"use strict";e.d(a,"k",(function(){return s})),e.d(a,"g",(function(){return T})),e.d(a,"h",(function(){return p})),e.d(a,"i",(function(){return h})),e.d(a,"e",(function(){return f})),e.d(a,"l",(function(){return g})),e.d(a,"d",(function(){return m})),e.d(a,"f",(function(){return j})),e.d(a,"a",(function(){return y})),e.d(a,"b",(function(){return A})),e.d(a,"j",(function(){return S})),e.d(a,"c",(function(){return D}));var t=e(23),o=e(58),i=e(60),r=e(71),c=e(72),l=e(59),u=e(21),d=null,s=function(){return!1},T=function(){return Object(l.a)(new Date,"Asia/Kolkata")},p=function(){return Object(o.a)(T(),{representation:"date"})},h=function(){return Object(o.a)(Object(i.a)(T(),1),{representation:"date"})},f=function(n){return e.e(38).then(e.bind(null,77)).then((function(n){d=n[t.f[u.a.language||window.localStorage.i18nextLng]]})),Object(r.a)(new Date(n),new Date,{locale:d})},g=function(n){return new Date(n+t.e)},m=function(n,a){"string"===typeof n&&n.match(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g)&&(n+=t.e);var e=Object(l.a)(new Date(n),"Asia/Kolkata");return Object(c.a)(e,a,{locale:d})};var v=function(n){return n<1e3?n:n>=1e3&&n<1e6?+(n/1e3).toFixed(1)+"K":n>=1e6&&n<1e9?+(n/1e6).toFixed(1)+"M":n>=1e9&&n<1e12?+(n/1e9).toFixed(1)+"B":n>=1e12?+(n/1e12).toFixed(1)+"T":void 0},j=function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"long";if(isNaN(n))return"-";var e=new Intl.NumberFormat("en-IN",{maximumFractionDigits:2});return"short"===a?v(n):e.format(n)},y=function(n){return"string"!==typeof n?"":n.charAt(0).toUpperCase()+n.slice(1)},A=function(n){if("string"!==typeof n)return"";for(var a=n.toLowerCase().split(" "),e=0;e<a.length;e++)a[e]=y(a[e]);return a.join(" ")},S=function(n,a,e){var t,o,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("active"===e){var r,c,l,u,d=(null===n||void 0===n||null===(r=n[a])||void 0===r?void 0:r.confirmed)||0,s=(null===n||void 0===n||null===(c=n[a])||void 0===c?void 0:c.deceased)||0,T=(null===n||void 0===n||null===(l=n[a])||void 0===l?void 0:l.recovered)||0,p=(null===n||void 0===n||null===(u=n[a])||void 0===u?void 0:u.migrated)||0;o=d-s-T-p}else{var h;o=(null===n||void 0===n||null===(h=n[a])||void 0===h?void 0:h[e])||0}return i?1e6*o/(null===n||void 0===n||null===(t=n.meta)||void 0===t?void 0:t.population)||0:o},D=function(n){return fetch(n).then((function(n){return n.json()}))}},61:function(n,a,e){n.exports=e(70)},70:function(n,a,e){"use strict";e.r(a);var t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(n,a){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var e=n.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(n)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var i=e(31),r=e(21),c=e(52),l=e(53),u=e(76);r.a.use(l.a).use(c.a).use(u.e).init({debug:Object(i.k)()&&!1,keySeparator:!1,returnEmptyString:!1,fallbackLng:"english",load:"languageOnly",backend:{loadPath:"https://api.covid19india.org/locales/locale_{{lng}}.json",addPath:"http://localhost:9999/"},saveMissing:Object(i.k)()&&!1,interpolation:{escapeValue:!1}});r.a;var d=e(0),s=e.n(d),T=e(42),p=e(36),h=Object(d.lazy)((function(){return Promise.all([e.e(9),e.e(14)]).then(e.bind(null,250))})),f=document.getElementById("root"),g=function(){return Object(T.render)(s.a.createElement(d.Suspense,{fallback:s.a.createElement("div",null)},s.a.createElement(p.a,null,s.a.createElement(h,null))),f)};window.requestIdleCallback&&window.IntersectionObserver?g():function(n,a){var e=document.createElement("script");e.src=n,e.onload=function(){a()},e.onerror=function(){a(new Error("Failed to load script "+n))},document.head.appendChild(e)}("https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=requestIdleCallback%2CIntersectionObserver",g),function(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){return setTimeout((function(){var a="".concat("","/service-worker.js");t?(!function(n,a){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(e){var t=e.headers.get("content-type");404===e.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):o(n,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(a,n)}),3e3)}))}}()}},[[61,6,7]]]);
//# sourceMappingURL=main.78ee9a02.chunk.js.map