(this["webpackJsonp01-first-app"]=this["webpackJsonp01-first-app"]||[]).push([[0],{107:function(e,t,n){"use strict";t.a=n.p+"static/media/user.30a11b1f.jpg"},128:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(43),a=n(3),c="social-network/dialogs/SEND-MESSAGE",s={dialogs:[{id:1,name:"Shyam Rupa"},{id:2,name:"Vasliy"},{id:3,name:"Uncle Gena"},{id:4,name:"\u0412\u0430\u043b\u0435\u0440\u0430"},{id:5,name:"\u0418\u0432\u0430\u043d \u0412\u0438\u043a\u0442\u043e\u0440\u043e\u0432\u0438\u0447"}],messages:[{id:1,message:"Hello"},{id:2,message:"What' s up?"},{id:3,message:"Merhaba"},{id:4,message:"Namaste!"},{id:5,message:"Hari-bol!"}]},i=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},13:function(e,t,n){e.exports={nav:"Navbar_nav__3CEd7",item:"Navbar_item__2UnZK",active:"Navbar_active__1lp_t"}},131:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__2Z7A9",item:"Sidebar_item__3js7J",active:"Sidebar_active__7cFzY"}},132:function(e,t,n){e.exports={item:"Friend_item__2I8qH"}},136:function(e,t,n){e.exports={wrapper:"Login_wrapper__3QaUD"}},16:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var r=n(133),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"91cc1011-293a-4a6f-955d-371d85cc4175 "}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t))},unfollowUser:function(e){return a.delete("follow/".concat(e))},followUser:function(e){return a.post("follow/".concat(e))}},s={getUserProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("/profile",e)}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},o={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},168:function(e,t,n){},169:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(65),s=n.n(c),i=(n(168),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,298)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))}),o=n(35),u=n(36),l=n(38),d=n(37),j=(n(169),n(11)),p=n(14),f=n(0),b=function(){return Object(f.jsx)("div",{children:"News"})},h=function(){return Object(f.jsx)("div",{children:"Music"})},O=function(){return Object(f.jsx)("div",{children:"Settings"})},g=n(131),m=n.n(g),v=n(13),x=n.n(v),w=function(){return Object(f.jsxs)("nav",{className:x.a.nav,children:[Object(f.jsx)("div",{className:x.a.item,children:Object(f.jsx)(p.b,{to:"/profile",activeClassName:x.a.active,children:"Profile"})}),Object(f.jsx)("div",{className:"".concat(x.a.item," ").concat(x.a.active),children:Object(f.jsx)(p.b,{to:"/dialogs",activeClassName:x.a.active,children:"Messages"})}),Object(f.jsx)("div",{className:"".concat(x.a.item," ").concat(x.a.active),children:Object(f.jsx)(p.b,{to:"/users",activeClassName:x.a.active,children:"Users"})}),Object(f.jsx)("div",{className:x.a.item,children:Object(f.jsx)(p.b,{to:"/news",activeClassName:x.a.active,children:"News"})}),Object(f.jsx)("div",{className:x.a.item,children:Object(f.jsx)(p.b,{to:"/music",activeClassName:x.a.active,children:"Music"})}),Object(f.jsx)("div",{className:x.a.item,children:Object(f.jsx)(p.b,{to:"/settings",activeClassName:x.a.active,children:"Settings"})})]})},_=n(70),C=n.n(_),P=n(132),S=n.n(P),y=function(){return Object(f.jsx)("div",{className:S.a.item,children:Object(f.jsx)("img",{src:"https://hypeava.ru/uploads/posts/2018-05/1527186681_1.jpg",alt:"Ava"})})},U=function(){return Object(f.jsxs)("div",{className:C.a.wrapper,children:[Object(f.jsx)("div",{className:C.a.header,children:"Friends:"}),Object(f.jsxs)("div",{className:C.a.content,children:[Object(f.jsx)(y,{}),Object(f.jsx)(y,{}),Object(f.jsx)(y,{})]})]})},k=function(){return Object(f.jsxs)("div",{className:m.a.sidebar,children:[Object(f.jsx)(w,{}),Object(f.jsx)(U,{})]})},N=n(19),E=n(9),I=n.n(E),F=n(15),A=n(43),T=n(3),L=n(16),z="social-network/users/FOLLOW",M="social-network/users/UNFOLLOW",R="social-network/users/SET_USERS",D="social-network/users/SET_CURRENT_PAGE",G="social-network/users/SET_TOTAL_USERS_COUNT",B="social-network/users/TOGGLE_IS_FETCHING",H="social-network/users/TOGGLE_FOLLOWING_IN_PROGRESS",J={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},W=function(e){return{type:z,userId:e}},q=function(e){return{type:M,userId:e}},K=function(e){return{type:R,users:e}},V=function(e){return{type:D,currentPage:e}},Y=function(e){return{type:G,count:e}},Z=function(e){return{type:B,isFetching:e}},X=function(e,t){return{type:H,isFetching:e,userId:t}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(T.a)(Object(T.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(T.a)(Object(T.a)({},e),{},{followed:!0}):e}))});case M:return Object(T.a)(Object(T.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(T.a)(Object(T.a)({},e),{},{followed:!1}):e}))});case R:return Object(T.a)(Object(T.a)({},e),{},{users:t.users});case D:return Object(T.a)(Object(T.a)({},e),{},{currentPage:t.currentPage});case G:return Object(T.a)(Object(T.a)({},e),{},{totalUsersCount:t.count});case B:return Object(T.a)(Object(T.a)({},e),{},{isFetching:t.isFetching});case H:return Object(T.a)(Object(T.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(A.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},$=n(54),ee=n.n($),te=n(68),ne=n(71),re=n.n(ne),ae=n(134),ce=n.n(ae),se=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);return Object(f.jsxs)("div",{className:re.a.paginator,children:[Object(f.jsx)("span",{onClick:function(){e.onPageChanged(1)},children:"First "}),Object(f.jsx)("span",{onClick:function(){e.currentPage>1&&e.onPageChanged(e.currentPage-1)},children:"Prev. "}),n.map((function(t,n){if(e.currentPage-t<2&&t-e.currentPage<2)return Object(f.jsx)("span",{className:ce()(Object(te.a)({},re.a.selectedPage,e.currentPage===t),re.a.pageNumber),onClick:function(n){e.onPageChanged(t)},children:t+" "},n)})),Object(f.jsx)("span",{onClick:function(){e.currentPage<t&&e.onPageChanged(e.currentPage+1)},children:"Next "}),Object(f.jsx)("span",{onClick:function(){e.onPageChanged(t)},children:"Last"})]})},ie=n(107),oe=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:Object(f.jsx)(p.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{src:t.photos.small||ie.a,className:ee.a.userPhoto,alt:"Some img"})})}),Object(f.jsx)("div",{children:t.followed?Object(f.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(f.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]}),Object(f.jsxs)("span",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:t.name}),Object(f.jsx)("div",{children:t.status})]}),Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:"u.location.country"}),Object(f.jsx)("div",{children:"u.location.city"})]})]})]})},ue=function(e){return Object(f.jsxs)("div",{className:ee.a.wrapper,children:[Object(f.jsx)(se,{onPageChanged:e.onPageChanged,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage}),Object(f.jsx)("div",{className:ee.a.usersWrapper,children:e.users.map((function(t){return Object(f.jsx)(oe,{user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow},t.id)}))}),Object(f.jsx)(se,{onPageChanged:e.onPageChanged,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage})]})},le=n(51),de=n(10),je=n(135),pe=Object(je.a)((function(e){return e.userPage.users}),(function(e){return e.filter((function(e){return!0}))})),fe=function(e){return e.userPage.pageSize},be=function(e){return e.userPage.totalUsersCount},he=function(e){return e.userPage.currentPage},Oe=function(e){return e.userPage.isFetching},ge=function(e){return e.userPage.followingInProgress},me=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(le.a,{}):null,Object(f.jsx)(ue,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),ve=Object(de.compose)(Object(N.b)((function(e){return{users:pe(e),pageSize:fe(e),totalUsersCount:be(e),currentPage:he(e),isFetching:Oe(e),followingInProgress:ge(e)}}),{follow:function(e){return function(){var t=Object(F.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(X(!0,e)),t.next=3,L.d.followUser(e);case 3:0===t.sent.data.resultCode&&n(W(e)),n(X(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(F.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(X(!0,e)),t.next=3,L.d.unfollowUser(e);case 3:0===t.sent.data.resultCode&&n(q(e)),n(X(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:K,setCurrentPage:V,setTotalUsersCount:Y,toggleIsFetching:Z,getUsers:function(e,t){return function(){var n=Object(F.a)(I.a.mark((function n(r){var a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(V(e)),r(Z(!0)),n.next=4,L.d.getUsers(e,t);case 4:a=n.sent,r(Z(!1)),r(K(a.data.items)),r(Y(a.data.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(me),xe=n(93),we=n.n(xe),_e=n.p+"static/media/logo.a65ceb6c.png",Ce=function(e){return Object(f.jsxs)("header",{className:we.a.header,children:[Object(f.jsx)(p.b,{to:"/",children:Object(f.jsx)("img",{src:_e,alt:"Logo"})}),Object(f.jsx)("div",{className:we.a.loginBlock,children:e.isAuth?Object(f.jsxs)("div",{children:[e.login," - ",Object(f.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(f.jsx)(p.b,{to:"/login",children:"Login"})})]})},Pe=n(30),Se="social-network/auth/SET_AUTH_USER_DATA",ye="social-network/auth/GET_CAPTCHA_URL_SUCCESS",Ue={id:null,login:null,email:null,isAuth:!1,isFetching:!1,captchaUrl:null},ke=function(e,t,n,r){return{type:Se,payload:{id:e,login:t,email:n,isAuth:r}}},Ne=function(e){return{type:ye,payload:{captchaUrl:e}}},Ee=function(){return function(){var e=Object(F.a)(I.a.mark((function e(t){var n,r,a,c,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,s=r.email,t(ke(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ie=function(){return function(){var e=Object(F.a)(I.a.mark((function e(t){var n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(Ne(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:case ye:return Object(T.a)(Object(T.a)({},e),t.payload);default:return e}},Ae=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)(Ce,Object(T.a)({},this.props))}}]),n}(a.a.Component),Te=Object(N.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:ke,logout:function(){return function(){var e=Object(F.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.logout();case 2:0===e.sent.data.resultCode&&t(ke(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ae),Le=n(48),ze=n.n(Le),Me=n(136),Re=n.n(Me),De=n(90),Ge=n(129),Be=n(46),He=n(66),Je=Object(Ge.a)({form:"login"})((function(e){return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(f.jsx)("div",{children:Object(f.jsx)(De.a,{component:Be.a,name:"email",placeholder:"Email",validate:He.b})}),Object(f.jsx)("div",{children:Object(f.jsx)(De.a,{component:Be.a,name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",validate:He.b})}),Object(f.jsxs)("div",{children:[Object(f.jsx)(De.a,{component:Be.a,name:"rememberMe",type:"checkbox"}),"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"]}),e.error&&Object(f.jsx)("span",{className:ze.a.formSummaryError,children:e.error}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"\u0412\u043e\u0439\u0442\u0438"})}),e.captchaUrl&&Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0441 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"}),Object(f.jsx)("img",{src:e.captchaUrl,alt:"captcha"}),Object(f.jsx)("div",{children:Object(f.jsx)(De.a,{component:Be.a,name:"captcha",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b",validate:He.b})})]})]})})})),We=Object(N.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(){var a=Object(F.a)(I.a.mark((function a(c){var s,i;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,L.a.login(e,t,n,r);case 2:0===(s=a.sent).data.resultCode?c(Ee()):(10===s.data.resultCode&&c(Ie()),i=s.data.messages.length>0?s.data.messages:"Some error",c(Object(Pe.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(f.jsx)(j.a,{to:"/profile"}):Object(f.jsxs)("div",{className:Re.a.wrapper,children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsx)(Je,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),qe="social-network/app/INITIALIZING_SUCCESS",Ke={initialized:!1},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case qe:return Object(T.a)(Object(T.a)({},e),{},{initialized:!0});default:return e}},Ye=n(96),Ze=n(128),Xe={},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe;return e},$e=n(138),et=n(130),tt=(0,n(10).createStore)(Object(de.combineReducers)({profilePage:Ye.b,dialogsPage:Ze.a,sidebar:Qe,userPage:Q,auth:Fe,form:et.a,app:Ve}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.compose)(Object(de.applyMiddleware)($e.a)));window.__store__=tt;var nt=tt,rt=a.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),at=a.a.lazy((function(){return n.e(4).then(n.bind(null,300))})),ct=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430!")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(f.jsxs)("div",{className:"app-wrapper",children:[Object(f.jsx)(Te,{}),Object(f.jsx)(k,{}),Object(f.jsxs)("div",{className:"app-wrapper-content",children:[Object(f.jsxs)(r.Suspense,{fallback:Object(f.jsx)(le.a,{}),children:[Object(f.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(f.jsx)(rt,{})}}),Object(f.jsx)(j.b,{path:"/dialogs",render:function(){return Object(f.jsx)(at,{})}})]}),Object(f.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(f.jsx)(j.a,{to:"/profile"})}}),Object(f.jsx)(j.b,{path:"/users",render:function(){return Object(f.jsx)(ve,{})}}),Object(f.jsx)(j.b,{path:"/news",render:function(){return Object(f.jsx)(b,{})}}),Object(f.jsx)(j.b,{path:"/music",render:function(){return Object(f.jsx)(h,{})}}),Object(f.jsx)(j.b,{path:"/settings",render:function(){return Object(f.jsx)(O,{})}}),Object(f.jsx)(j.b,{path:"/login",render:function(){return Object(f.jsx)(We,{})}})]})]}):Object(f.jsx)(le.a,{})}}]),n}(r.Component),st=Object(N.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Ee());Promise.all([t]).then((function(){e({type:qe})}))}}})(ct),it=function(){return Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(p.a,{children:Object(f.jsx)(N.a,{store:nt,children:Object(f.jsx)(st,{})})})})};s.a.render(Object(f.jsx)(it,{}),document.getElementById("root")),i()},46:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return b}));var r=n(3),a=n(73),c=n(48),s=n.n(c),i=n(90),o=n(0),u=["input","meta","child"],l=["input","meta","child"],d=["input","meta","child"],j=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,u)),r=t.touched&&t.error;return Object(o.jsxs)("div",{className:s.a.formControl+" "+(r&&s.a.error),children:[Object(o.jsx)("div",{children:n.children}),r&&Object(o.jsx)("span",{children:t.error})]})},p=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return Object(o.jsx)(j,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,d));return Object(o.jsx)(j,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},b=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,Object(r.a)({placeholder:e,name:t,validators:n,component:a},c))," ",s]})}},48:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3K4IF",error:"FormsControls_error__2Zrga",formSummaryError:"FormsControls_formSummaryError__1_J3E"}},51:function(e,t,n){"use strict";var r=n.p+"static/media/preloader.d5566c27.gif",a=(n(1),n(0));t.a=function(e){return Object(a.jsx)("img",{src:r})}},54:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__2DnJU",wrapper:"Users_wrapper__1qq-B",usersWrapper:"Users_usersWrapper__NmYSr"}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},70:function(e,t,n){e.exports={wrapper:"Friends_wrapper__PUQdO",content:"Friends_content__2FhxB",header:"Friends_header__1MXzJ"}},71:function(e,t,n){e.exports={selectedPage:"_20nsCVktnFlaMjpar7ngtK",pageNumber:"_3qaHP8yMRLTxjzeYEa2US2",paginator:"_2pmlOnyA4cl7BlNmuCeH04",content:"_2690J2Bvems-UeSLUb_xsA"}},93:function(e,t,n){e.exports={header:"Header_header__7AGEp",loginBlock:"Header_loginBlock__1r6zJ"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return w}));var r=n(9),a=n.n(r),c=n(15),s=n(43),i=n(3),o=n(16),u=n(30),l="social-network/profile/ADD-POST",d="social-network/profile/SET_USER_PROFILE",j="social-network/profile/SET_STATUS",p="social-network/profile/DELETE_POST",f="social-network/profile/SAVE_PHOTO_SUCCESS",b={posts:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u0438\u0440!",likesCount:5},{id:2,message:"\u041e\u043c \u043d\u0430\u043c\u043e \u0431\u0445\u0430\u0433\u0430\u0432\u0430\u0442\u0435 \u0432\u0430\u0441\u0443\u0434\u0435\u0432\u0430\u0439\u0430!",likesCount:108},{id:3,message:"\u041a\u0430\u043a\u043e\u0439-\u043d\u0438\u0431\u0443\u0434\u044c \u0435\u0449\u0435 \u043f\u043e\u0441\u0442",likesCount:1108}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},O=function(e){return{type:j,status:e}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getUserProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(O(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430:\n\n        ".concat(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:f,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.saveProfile(e);case 2:if(0!==(r=t.sent).data.resultCode){t.next=7;break}n(g(e.userId)),t.next=9;break;case 7:return n(Object(u.a)("edit-profile",{_error:r.data.messages[0]})),t.abrupt("return",Promise.reject(r.data.messages[0]));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:4,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case j:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case d:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case p:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case f:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[293,1,2]]]);
//# sourceMappingURL=main.62a46dcf.chunk.js.map