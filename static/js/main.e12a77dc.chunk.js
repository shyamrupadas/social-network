(this["webpackJsonp01-first-app"]=this["webpackJsonp01-first-app"]||[]).push([[0],{107:function(e,t,n){"use strict";t.a=n.p+"static/media/user.30a11b1f.jpg"},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var r,c,a=n(133),s=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"91cc1011-293a-4a6f-955d-371d85cc4175"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(44),c=n(3),a={dialogs:[{id:1,name:"Shyam Rupa"},{id:2,name:"Vasliy"},{id:3,name:"Uncle Gena"},{id:4,name:"\u0412\u0430\u043b\u0435\u0440\u0430"},{id:5,name:"\u0418\u0432\u0430\u043d \u0412\u0438\u043a\u0442\u043e\u0440\u043e\u0432\u0438\u0447"}],messages:[{id:1,message:"Hello"},{id:2,message:"What' s up?"},{id:3,message:"Merhaba"},{id:4,message:"Namaste!"},{id:5,message:"Hari-bol!"}]},s={sendMessage:function(e){return{type:"sn/dialogs/SEND-MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"sn/dialogs/SEND-MESSAGE":var n=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},131:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__2Z7A9",item:"Sidebar_item__3js7J",active:"Sidebar_active__7cFzY"}},132:function(e,t,n){e.exports={item:"Friend_item__2I8qH"}},136:function(e,t,n){e.exports={wrapper:"Login_wrapper__3QaUD"}},15:function(e,t,n){e.exports={nav:"Navbar_nav__3CEd7",item:"Navbar_item__2UnZK",active:"Navbar_active__1lp_t"}},168:function(e,t,n){},169:function(e,t,n){},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return f}));var r=n(3),c=n(57),a=n(48),s=n.n(a),i=n(90),o=(n(1),n(0)),u=["input","meta"],l=["input","meta"],d=function(e){var t=e.meta,n=t.touched,r=t.error,c=e.children,a=n&&r;return Object(o.jsxs)("div",{className:s.a.formControl+" "+(a&&s.a.error),children:[Object(o.jsx)("div",{children:c}),a&&Object(o.jsx)("span",{children:r})]})},p=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,u));return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,l));return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))};function f(e,t,n,c){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,Object(r.a)({placeholder:e,name:t,validate:n,component:c},a))," ",s]})}},293:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(66),s=n.n(a),i=(n(168),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,298)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))}),o=n(36),u=n(37),l=n(39),d=n(38),p=(n(169),n(11)),j=n(16),f=n(0),b=function(){return Object(f.jsx)("div",{children:"News"})},h=function(){return Object(f.jsx)("div",{children:"Music"})},O=function(){return Object(f.jsx)("div",{children:"Settings"})},g=n(131),m=n.n(g),v=n(15),x=n.n(v),_=function(){return Object(f.jsxs)("nav",{className:x.a.nav,children:[Object(f.jsx)("div",{className:x.a.item,children:Object(f.jsx)(j.b,{to:"/profile",activeClassName:x.a.active,children:"Profile"})}),Object(f.jsx)("div",{className:"".concat(x.a.item," ").concat(x.a.active),children:Object(f.jsx)(j.b,{to:"/dialogs",activeClassName:x.a.active,children:"Messages"})}),Object(f.jsx)("div",{className:"".concat(x.a.item," ").concat(x.a.active),children:Object(f.jsx)(j.b,{to:"/users",activeClassName:x.a.active,children:"Users"})}),Object(f.jsx)("div",{className:x.a.item,children:Object(f.jsx)(j.b,{to:"/news",activeClassName:x.a.active,children:"News"})}),Object(f.jsx)("div",{className:x.a.item,children:Object(f.jsx)(j.b,{to:"/music",activeClassName:x.a.active,children:"Music"})}),Object(f.jsx)("div",{className:x.a.item,children:Object(f.jsx)(j.b,{to:"/settings",activeClassName:x.a.active,children:"Settings"})})]})},S=n(71),w=n.n(S),C=n(132),P=n.n(C),E=function(){return Object(f.jsx)("div",{className:P.a.item,children:Object(f.jsx)("img",{src:"https://hypeava.ru/uploads/posts/2018-05/1527186681_1.jpg",alt:"Ava"})})},y=function(){return Object(f.jsxs)("div",{className:w.a.wrapper,children:[Object(f.jsx)("div",{className:w.a.header,children:"Friends:"}),Object(f.jsxs)("div",{className:w.a.content,children:[Object(f.jsx)(E,{}),Object(f.jsx)(E,{}),Object(f.jsx)(E,{})]})]})},U=function(){return Object(f.jsxs)("div",{className:m.a.sidebar,children:[Object(f.jsx)(_,{}),Object(f.jsx)(y,{})]})},N=n(19),T=n(7),I=n.n(T),A=n(13),k=n(44),F=n(3),L=n(12),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return L.c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},z=function(e){return L.c.post("follow/".concat(e)).then((function(e){return e.data}))},G=function(e){return L.c.delete("follow/".concat(e)).then((function(e){return e.data}))},M={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},D=function(e){return{type:"sn/users/FOLLOW",userId:e}},H=function(e){return{type:"sn/users/UNFOLLOW",userId:e}},W=function(e){return{type:"sn/users/SET_USERS",users:e}},B=function(e){return{type:"sn/users/SET_CURRENT_PAGE",currentPage:e}},q=function(e){return{type:"sn/users/SET_TOTAL_USERS_COUNT",count:e}},J=function(e){return{type:"sn/users/TOGGLE_IS_FETCHING",isFetching:e}},Z=function(e,t){return{type:"sn/users/TOGGLE_FOLLOWING_IN_PROGRESS",isFetching:e,userId:t}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"sn/users/FOLLOW":return Object(F.a)(Object(F.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(F.a)(Object(F.a)({},e),{},{followed:!0}):e}))});case"sn/users/UNFOLLOW":return Object(F.a)(Object(F.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(F.a)(Object(F.a)({},e),{},{followed:!1}):e}))});case"sn/users/SET_USERS":return Object(F.a)(Object(F.a)({},e),{},{users:t.users});case"sn/users/SET_CURRENT_PAGE":return Object(F.a)(Object(F.a)({},e),{},{currentPage:t.currentPage});case"sn/users/SET_TOTAL_USERS_COUNT":return Object(F.a)(Object(F.a)({},e),{},{totalUsersCount:t.count});case"sn/users/TOGGLE_IS_FETCHING":return Object(F.a)(Object(F.a)({},e),{},{isFetching:t.isFetching});case"sn/users/TOGGLE_FOLLOWING_IN_PROGRESS":return Object(F.a)(Object(F.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(k.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},V=n(57),X=n(54),Y=n.n(X),Q=n(69),$=n(72),ee=n.n($),te=n(134),ne=n.n(te),re=function(e){for(var t=e.totalUsersCount,n=e.pageSize,r=e.onPageChanged,c=e.currentPage,a=Math.ceil(t/n),s=[],i=1;i<=a;i++)s.push(i);return Object(f.jsxs)("div",{className:ee.a.paginator,children:[Object(f.jsx)("span",{onClick:function(){r(1)},children:"First "}),Object(f.jsx)("span",{onClick:function(){c>1&&r(c-1)},children:"Prev. "}),s.map((function(e,t){if(c-e<2&&e-c<2)return Object(f.jsx)("span",{className:ne()(Object(Q.a)({},ee.a.selectedPage,c===e),ee.a.pageNumber),onClick:function(t){r(e)},children:e+" "},t)})),Object(f.jsx)("span",{onClick:function(){c<a&&r(c+1)},children:"Next "}),Object(f.jsx)("span",{onClick:function(){r(a)},children:"Last"})]})},ce=n(107),ae=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,c=e.unfollow;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:Object(f.jsx)(j.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{src:t.photos.small||ce.a,className:Y.a.userPhoto,alt:"Some img"})})}),Object(f.jsx)("div",{children:t.followed?Object(f.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Unfollow"}):Object(f.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]}),Object(f.jsxs)("span",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:t.name}),Object(f.jsx)("div",{children:t.status})]}),Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:"u.location.country"}),Object(f.jsx)("div",{children:"u.location.city"})]})]})]})},se=["onPageChanged","totalUsersCount","pageSize","currentPage","users"],ie=function(e){var t=e.onPageChanged,n=e.totalUsersCount,r=e.pageSize,c=e.currentPage,a=e.users,s=Object(V.a)(e,se);return Object(f.jsxs)("div",{className:Y.a.wrapper,children:[Object(f.jsx)(re,{onPageChanged:t,totalUsersCount:n,pageSize:r,currentPage:c}),Object(f.jsx)("div",{className:Y.a.usersWrapper,children:a.map((function(e){return Object(f.jsx)(ae,{user:e,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow},e.id)}))}),Object(f.jsx)(re,{onPageChanged:t,totalUsersCount:n,pageSize:r,currentPage:c})]})},oe=n(51),ue=n(10),le=n(135),de=Object(le.a)((function(e){return e.userPage.users}),(function(e){return e.filter((function(e){return!0}))})),pe=function(e){return e.userPage.pageSize},je=function(e){return e.userPage.totalUsersCount},fe=function(e){return e.userPage.currentPage},be=function(e){return e.userPage.isFetching},he=function(e){return e.userPage.followingInProgress},Oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:this.props.pageTitle}),this.props.isFetching?Object(f.jsx)(oe.a,{}):null,Object(f.jsx)(ie,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),ge=Object(ue.compose)(Object(N.b)((function(e){return{users:de(e),pageSize:pe(e),totalUsersCount:je(e),currentPage:fe(e),isFetching:be(e),followingInProgress:he(e)}}),{follow:function(e){return function(){var t=Object(A.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Z(!0,e)),t.next=3,z(e);case 3:0===t.sent.resultCode&&n(D(e)),n(Z(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(A.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Z(!0,e)),t.next=3,G(e);case 3:0===t.sent.resultCode&&n(H(e)),n(Z(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUsers:function(e,t){return function(){var n=Object(A.a)(I.a.mark((function n(r){var c;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(B(e)),r(J(!0)),n.next=4,R(e,t);case 4:c=n.sent,r(J(!1)),r(W(c.items)),r(q(c.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Oe),me=n(93),ve=n.n(me),xe=n.p+"static/media/logo.a65ceb6c.png",_e=function(e){return Object(f.jsxs)("header",{className:ve.a.header,children:[Object(f.jsx)(j.b,{to:"/",children:Object(f.jsx)("img",{src:xe,alt:"Logo"})}),Object(f.jsx)("div",{className:ve.a.loginBlock,children:e.isAuth?Object(f.jsxs)("div",{children:[e.login," - ",Object(f.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(f.jsx)(j.b,{to:"/login",children:"Login"})})]})},Se=n(31),we=function(){return L.c.get("auth/me").then((function(e){return e.data}))},Ce=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return L.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},Pe=function(){return L.c.delete("auth/login")},Ee=function(){return L.c.get("security/get-captcha-url").then((function(e){return e.data}))},ye={id:null,login:null,email:null,isAuth:!1,isFetching:!1,captchaUrl:null},Ue=function(e,t,n,r){return{type:"sn/auth/SET_AUTH_USER_DATA",payload:{id:e,login:t,email:n,isAuth:r}}},Ne=function(e){return{type:"sn/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},Te=function(){return function(){var e=Object(A.a)(I.a.mark((function e(t){var n,r,c,a,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we();case 2:(n=e.sent).resultCode===L.a.Success&&(r=n.data,c=r.id,a=r.login,s=r.email,t(Ue(c,a,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ie=function(){return function(){var e=Object(A.a)(I.a.mark((function e(t){var n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ee();case 2:n=e.sent,r=n.url,t(Ne(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"sn/auth/SET_AUTH_USER_DATA":case"sn/auth/GET_CAPTCHA_URL_SUCCESS":return Object(F.a)(Object(F.a)({},e),t.payload);default:return e}},ke=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)(_e,Object(F.a)({},this.props))}}]),n}(c.a.Component),Fe=Object(N.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(A.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe();case 2:e.sent.data.resultCode===L.a.Success&&t(Ue(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ke),Le=n(48),Re=n.n(Le),ze=n(136),Ge=n.n(ze),Me=n(129),De=n(26),He=n(67),We=Object(Me.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:t,children:[Object(f.jsx)("div",{children:Object(De.c)("Email","email",[He.b],De.a)}),Object(f.jsx)("div",{children:Object(De.c)("\u041f\u0430\u0440\u043e\u043b\u044c","password",[He.b],De.a,{type:"password"})}),Object(f.jsx)("div",{children:Object(De.c)("\u041f\u0430\u0440\u043e\u043b\u044c","rememberMe",[],De.a,{type:"checkbox"})}),n&&Object(f.jsx)("span",{className:Re.a.formSummaryError,children:n}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"\u0412\u043e\u0439\u0442\u0438"})}),r&&Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0441 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"}),Object(f.jsx)("img",{src:r,alt:"captcha"}),Object(f.jsx)("div",{children:Object(De.c)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b","captcha",[He.b],De.a)})]})]})})})),Be=Object(N.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(){var c=Object(A.a)(I.a.mark((function c(a){var s,i;return I.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Ce(e,t,n,r);case 2:(s=c.sent).resultCode===L.a.Success?a(Te()):(s.resultCode===L.b.CaptchaIsRequired&&a(Ie()),i=s.messages.length>0?s.messages:"Some error",a(Object(Se.a)("login",{_error:i})));case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(f.jsx)(p.a,{to:"/profile"}):Object(f.jsxs)("div",{className:Ge.a.wrapper,children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsx)(We,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),qe={initialized:!1},Je=function(){return{type:"sn/app/INITIALIZING_SUCCESS"}},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"sn/app/INITIALIZING_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{initialized:!0});default:return e}},Ke=n(96),Ve=n(128),Xe={},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe;return e},Qe=n(138),$e=n(130),et=(0,n(10).createStore)(Object(ue.combineReducers)({profilePage:Ke.b,dialogsPage:Ve.b,sidebar:Ye,userPage:K,auth:Ae,form:$e.a,app:Ze}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.compose)(Object(ue.applyMiddleware)(Qe.a)));window.__store__=et;var tt=et,nt=c.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),rt=c.a.lazy((function(){return n.e(4).then(n.bind(null,300))})),ct=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).catchAllUnhandledErrors=function(e){alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430!")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(f.jsxs)("div",{className:"app-wrapper",children:[Object(f.jsx)(Fe,{}),Object(f.jsx)(U,{}),Object(f.jsxs)("div",{className:"app-wrapper-content",children:[Object(f.jsxs)(r.Suspense,{fallback:Object(f.jsx)(oe.a,{}),children:[Object(f.jsx)(p.b,{path:"/profile/:userId?",render:function(){return Object(f.jsx)(nt,{})}}),Object(f.jsx)(p.b,{path:"/dialogs",render:function(){return Object(f.jsx)(rt,{})}})]}),Object(f.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(f.jsx)(p.a,{to:"/profile"})}}),Object(f.jsx)(p.b,{path:"/users",render:function(){return Object(f.jsx)(ge,{pageTitle:"My social network"})}}),Object(f.jsx)(p.b,{path:"/news",render:function(){return Object(f.jsx)(b,{})}}),Object(f.jsx)(p.b,{path:"/music",render:function(){return Object(f.jsx)(h,{})}}),Object(f.jsx)(p.b,{path:"/settings",render:function(){return Object(f.jsx)(O,{})}}),Object(f.jsx)(p.b,{path:"/login",render:function(){return Object(f.jsx)(Be,{})}})]})]}):Object(f.jsx)(oe.a,{})}}]),n}(r.Component),at=Object(N.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(A.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t(Te()),Promise.all([n]).then((function(){t(Je())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ct),st=function(){return Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(j.a,{children:Object(f.jsx)(N.a,{store:tt,children:Object(f.jsx)(at,{})})})})};s.a.render(Object(f.jsx)(st,{}),document.getElementById("root")),i()},48:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3K4IF",error:"FormsControls_error__2Zrga",formSummaryError:"FormsControls_formSummaryError__1_J3E"}},51:function(e,t,n){"use strict";var r=n.p+"static/media/preloader.d5566c27.gif",c=(n(1),n(0));t.a=function(e){return Object(c.jsx)("img",{src:r})}},54:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__2DnJU",wrapper:"Users_wrapper__1qq-B",usersWrapper:"Users_usersWrapper__NmYSr"}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},71:function(e,t,n){e.exports={wrapper:"Friends_wrapper__PUQdO",content:"Friends_content__2FhxB",header:"Friends_header__1MXzJ"}},72:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__2XwMp",pageNumber:"Paginator_pageNumber__34BUw",paginator:"Paginator_paginator__2yKf6",content:"Paginator_content__3yAap"}},93:function(e,t,n){e.exports={header:"Header_header__7AGEp",loginBlock:"Header_loginBlock__1r6zJ"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return x}));var r=n(7),c=n.n(r),a=n(13),s=n(44),i=n(3),o=n(31),u=n(12),l=function(e){return u.c.get("profile/"+e).then((function(e){return e.data}))},d=function(e){return u.c.get("profile/status/"+e).then((function(e){return e.data}))},p=function(e){return u.c.put("profile/status/",{status:e}).then((function(e){return e.data}))},j=function(e){var t=new FormData;return t.append("image",e),u.c.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},f=function(e){return u.c.put("/profile",e).then((function(e){return e.data}))},b={posts:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u0438\u0440!",likesCount:5},{id:2,message:"\u041e\u043c \u043d\u0430\u043c\u043e \u0431\u0445\u0430\u0433\u0430\u0432\u0430\u0442\u0435 \u0432\u0430\u0441\u0443\u0434\u0435\u0432\u0430\u0439\u0430!",likesCount:108},{id:3,message:"\u041a\u0430\u043a\u043e\u0439-\u043d\u0438\u0431\u0443\u0434\u044c \u0435\u0449\u0435 \u043f\u043e\u0441\u0442",likesCount:1108}],profile:null,status:"",newPostText:""},h={addPostCreator:function(e){return{type:"sn/profile/ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"sn/profile/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"sn/profile/SET_STATUS",status:e}},deletePost:function(e){return{type:"sn/profile/DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"sn/profile/SAVE_PHOTO_SUCCESS",photos:e}}},O=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(h.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:r=t.sent,n(h.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p(e);case 3:0===t.sent.resultCode&&n(h.setStatus(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430:\n\n        ".concat(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:0===(r=t.sent).resultCode&&n(h.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:if(0!==(r=t.sent).resultCode){t.next=7;break}n(O(e.userId)),t.next=9;break;case 7:return n(Object(o.a)("edit-profile",{_error:r.messages[0]})),t.abrupt("return",Promise.reject(r.messages[0]));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"sn/profile/ADD-POST":var n={id:4,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case"sn/profile/SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"sn/profile/SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"sn/profile/DELETE_POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"sn/profile/SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[293,1,2]]]);
//# sourceMappingURL=main.e12a77dc.chunk.js.map