(window.webpackJsonppidtchay_project=window.webpackJsonppidtchay_project||[]).push([[43],{10:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i}));var r=n(0),o=n(37);function a(){var t=Object(r.useState)(!0),e=t[0],n=t[1],a=Object(o.d)((function(t){return t.literals}));return Object(r.useEffect)((function(){Object.keys(a).length>0&&n(!1)}),[a,e]),{isLoading:e,getValue:function(t){var e,n=t.split(".");return e=a,n.reduce((function(t,e){return t&&t[e]?t[e]:null}),e)}}}function u(t,e){var n=Object(r.useRef)(null),a=Object(o.c)();return[Object(r.useCallback)((function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];n.current&&clearTimeout(n.current),n.current=setTimeout((function(){return a(t.apply(void 0,r))}),e)}),[e])]}function i(t,e){var n=Object(r.useRef)(null);return[Object(r.useCallback)((function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];n.current&&clearTimeout(n.current),n.current=setTimeout((function(){return t.apply(void 0,r)}),e)}),[e])]}},1013:function(t,e,n){"use strict";n.r(e);var r=n(1036),o=n(534),a=n(0),u=n.n(a),i=n(59),c=n(915),s=n(918),l=n(933),f=n(585),p=n.n(f),d=(n(1007),n(184)),y=n(10),_=r.a.Header,b=r.a.Content,h=r.a.Sider,v=r.a.Footer,m=n(562),g=n(15),w=n(37),O=n(208),E=n(930),j=n(931),T=n(564),k=function(){return(k=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},S=n(69),A=n(25),x=function(){return(x=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},N=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var a=arguments[e],u=0,i=a.length;u<i;u++,o++)r[o]=a[u];return r},R={currentNote:null,notes:[],step:A.a.LIST,markdownText:""};var I=n(167),P=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var a=arguments[e],u=0,i=a.length;u<i;u++,o++)r[o]=a[u];return r},L=n(404),D=function(){return(D=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},C={authenticated:!1,session:"",userName:""},M=Object(O.combineReducers)({system:function(t,e){switch(void 0===t&&(t=C),e.type){case L.b:return D(D({},t),e.payload);case L.a:return{authenticated:!1,session:"",userName:""};default:return D({},t)}},repository:function(t,e){switch(void 0===t&&(t=[]),e.type){case I.b:return P(e.payload);case I.a:return[];default:return P(t)}},literals:function(t,e){switch(void 0===t&&(t={}),e.type){case T.a:return k({},e.payload);default:return t}},markdownNotes:function(t,e){switch(void 0===t&&(t=R),e.type){case S.a:var n=N(t.notes,[e.payload]);return x(x({},t),{notes:n});case S.e:var r=x(x({},t.currentNote),{text:e.payload}),o=t.notes.findIndex((function(e){return e.id===t.currentNote.id}));return{currentNote:null,notes:N(t.notes.slice(0,o),[r],t.notes.slice(o+1))};case S.b:return x(x({},t),{currentNote:e.payload});case S.c:return x(x({},t),{step:e.payload});case S.d:return x(x({},t),{markdownText:e.payload});default:return t}}}),G=n(563),F=Object(O.createStore)(M,Object(E.composeWithDevTools)(Object(O.applyMiddleware)(j.a)));Object(m.a)().then((function(t){return F.dispatch(Object(G.a)(t))})),g.render(a.createElement(w.a,{store:F},a.createElement((function(){var t=Object(a.useState)(!0),e=t[0],n=t[1],f=Object(y.a)(),m=f.isLoading,g=f.getValue;return u.a.createElement(o.a,{spinning:m},u.a.createElement(i.c,{history:d.a},u.a.createElement(r.a,null,u.a.createElement(h,{trigger:null,collapsible:!0,collapsed:e},u.a.createElement(s.a,null)),u.a.createElement(r.a,{className:p.a.site_layout},u.a.createElement(_,{className:p.a.site_layout_header},u.a.createElement(c.a,{isSideMenuToogle:e,onToggleTrueFalse:function(){return n(!e)}})),u.a.createElement(b,{className:p.a.site_layout_content},u.a.createElement(l.a,null)),u.a.createElement(v,null,g("Layout.footer"))))))}),null)),document.getElementById("root"))},167:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r="FETCH_REPOSITORY_DATA",o="CLEAR_REPOSITORY_DATA"},184:function(t,e,n){"use strict";var r=n(541),o=Object(r.a)();e.a=o},24:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return u}));var r=n(552),o=function(t){var e=t.description,n=t.type,o=t.title;r.a[n]({message:o,description:e})};function a(t,e){var n,r=e.split(".");return n=t,r.reduce((function(t,e){return t&&t[e]?t[e]:null}),n)}var u=function(t){return Array.isArray(t)?t.join(""):t}},259:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));var r,o=n(26),a=n(258),u=n(907),i=n(0),c=n(50),s=n(184);!function(t){t.TEXT="TEXT",t.AVATAR="AVATAR",t.LINK="LINK",t.TAG="TAG"}(r||(r={}));var l=function(t){return t?t.map((function(t){var e={dataIndex:null==t?void 0:t.name,key:null==t?void 0:t.name,title:null==t?void 0:t.name};return t.type===r.LINK&&(e.render=function(){return i.createElement(o.a,{type:"link",onClick:function(){return s.a.push(c.b.REPOSITORIES.DETAILS(t.description))}},t.description)}),t.type===r.AVATAR&&(e.render=function(){return i.createElement(a.a,{src:t.description})}),t.type===r.TAG&&(e.render=function(){return i.createElement(u.a,{color:"geekblue"},t.description)}),e})):[]},f=function(t){return t?Object.keys(t).map((function(e){var n={name:e,type:r.TEXT,description:t[e]};return"id"===e&&(n.type=r.LINK),"avatarImg"===e&&(n.type=r.AVATAR),"owner"!==e&&"language"!==e||(n.type=r.TAG),n})):[]}},260:function(t,e,n){t.exports={repositories_body:"repositories_body__1Z7_l",repositories_body_up_button:"repositories_body_up_button__18G4u"}},404:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r="UPDATE_SESSION",o="CLEAN_SESSION"},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return c}));var r=n(69);function o(t){return{type:r.a,payload:t}}function a(t){return{type:r.e,payload:t}}function u(t){return{type:r.b,payload:t}}function i(t){return{type:r.c,payload:t}}function c(t){return{type:r.d,payload:t}}},518:function(t,e,n){t.exports={home_title:"home_title__-Nas_"}},519:function(t,e,n){t.exports={markdownInput:"markdownInput__3c1SE"}},520:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(70),o=function(t,e,n,r){return new(n||(n=Promise))((function(o,a){function u(t){try{c(r.next(t))}catch(t){a(t)}}function i(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,i)}c((r=r.apply(t,e||[])).next())}))},a=function(t,e){var n,r,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=e.call(t,u)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};function u(){var t=this,e=r.enc.Hex.parse("0jioj12e-9dj902j1jej01jfj2j10jej10"),n=r.enc.Hex.parse("10111121315161718aeds2f43g3t321"),u=function(t){return Object(r.PBKDF2)(t,e,{keySize:8,iterations:1e3})},i={iv:n,padding:r.pad.Pkcs7,mode:r.mode.CBC};return{encryptMessage:function(e,n){return o(t,void 0,void 0,(function(){var t;return a(this,(function(o){switch(o.label){case 0:return t=u(n),[4,r.AES.encrypt(e,t,i).toString()];case 1:return[2,o.sent()]}}))}))},decryptMessage:function(e,n){return o(t,void 0,void 0,(function(){var t;return a(this,(function(o){switch(o.label){case 0:return t=u(n),[4,r.AES.decrypt(e,t,i).toString(r.enc.Utf8)];case 1:return[2,o.sent()]}}))}))}}}},522:function(t,e,n){t.exports={reactMarkdownContainer:"reactMarkdownContainer__2S-Wo"}},523:function(t,e,n){t.exports={markdownNote:"markdownNote__12215"}},546:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(524),o=n(24),a=n(167);var u=function(t,e,n,r){return new(n||(n=Promise))((function(o,a){function u(t){try{c(r.next(t))}catch(t){a(t)}}function i(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,i)}c((r=r.apply(t,e||[])).next())}))},i=function(t,e){var n,r,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=e.call(t,u)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},c=function(t,e){return function(n){return u(void 0,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return[4,s(t).then((function(t){var e;n((e=t,{type:a.b,payload:e}))})).catch((function(t){console.error(t),n({type:a.a}),Object(o.c)({description:Object(o.a)(Object(o.b)(e,"Notification.request.error.description")),title:Object(o.a)(Object(o.b)(e,"Notification.request.error.title")),type:"error"})}))];case 1:return r.sent(),[2]}}))}))}},s=function(t){return u(void 0,void 0,Promise,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,fetch(r.a.REPOS.LIST_BY_ORGNAME(t))];case 1:return[4,e.sent().json()];case 2:return[2,e.sent().map((function(t){return{id:t.id,avatarImg:t.owner.avatar_url,owner:t.owner.login,name:t.name,description:t.description,language:t.language,forks:t.forks,watchers:t.watchers,homepage:t.homepage}}))]}}))}))}},551:function(t,e,n){t.exports={header_layout:"header_layout__2Moob",header_layout_i18n:"header_layout_i18n__1oQ9B",header_layout_avatar:"header_layout_avatar__2E88S",header_layout_button:"header_layout_button__1o-ol"}},562:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return void 0===t&&(t="en"),n(943)("./"+t+".json")}},563:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(564);function o(t){return{type:r.a,payload:t}}},564:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r="LOAD_LITERALS "},565:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));var r=n(404);function o(t){return{type:r.b,payload:t}}function a(){return{type:r.a}}},585:function(t,e,n){t.exports={"components-layout-demo-custom-trigger":"components-layout-demo-custom-trigger__3Ri2x",trigger:"trigger__zsppO",site_layout:"site_layout__-UcNY",site_layout_header:"site_layout_header__fprzq",site_layout_content:"site_layout_content__RUy30",loading_spin:"loading_spin__1iVw5",about_me:"about_me__2y9Jm"}},69:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return i}));var r="CREATE_NOTE",o="SET_CURRENT_NOTE",a="UPDATE_NOTE",u="SET_MARKDOWD_STEP",i="SET_MARKDOWD_TEXT"},904:function(t,e,n){t.exports={login_form:"login_form__3PsLY",login_form_info:"login_form_info__3tu9y"}},905:function(t,e,n){t.exports={details_layout:"details_layout__hHfFu",avatar_panel:"avatar_panel__1HRY1"}},925:function(t,e,n){t.exports={loginForm:"loginForm__10LHj"}},927:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(24),o=n(565),a=function(t,e,n,r){return new(n||(n=Promise))((function(o,a){function u(t){try{c(r.next(t))}catch(t){a(t)}}function i(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,i)}c((r=r.apply(t,e||[])).next())}))},u=function(t,e){var n,r,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=e.call(t,u)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},i=function(t){var e=t.loginData,n=t.loginDescription,i=t.loginTitle,s=t.errorDescription,l=t.errorTitle;return function(t){return a(void 0,void 0,void 0,(function(){return u(this,(function(a){switch(a.label){case 0:return[4,c(e).then((function(e){t(Object(o.b)(e)),Object(r.c)({description:n,title:i,type:"success"})})).catch((function(t){console.error(t),Object(r.c)({description:s,title:l,type:"error"})}))];case 1:return a.sent(),[2]}}))}))}},c=function(t){var e={authenticated:!0,session:"test session",userName:t.nickName};return Promise.resolve(e)}},943:function(t,e,n){var r={"./en.json":[1033,85],"./ru.json":[1034,86]};function o(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return n.e(e[1]).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(r)},o.id=943,t.exports=o}},[[1013,81,3,1,5,2,8,4,7,0,6,9,10,16,13,12,14,18,17,15,11,35,24,21,49,38,36,50,39,34,32,31,27,47,33,26,45,48,44,20,22,37,40,42,52,30,23,29,46,25,41,51,28]]]);