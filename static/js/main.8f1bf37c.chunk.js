(this["webpackJsonp01-first-app"]=this["webpackJsonp01-first-app"]||[]).push([[0],{125:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(42),a=n(5),s="social-network/dialogs/SEND-MESSAGE",c={dialogs:[{id:1,name:"Shyam Rupa"},{id:2,name:"Vasliy"},{id:3,name:"Uncle Gena"},{id:4,name:"\u0412\u0430\u043b\u0435\u0440\u0430"},{id:5,name:"\u0418\u0432\u0430\u043d \u0412\u0438\u043a\u0442\u043e\u0440\u043e\u0432\u0438\u0447"}],messages:[{id:1,message:"Hello"},{id:2,message:"What' s up?"},{id:3,message:"Merhaba"},{id:4,message:"Namaste!"},{id:5,message:"Hari-bol!"}]},i=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},129:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__2Feob",item:"Sidebar_item__2j5NB",active:"Sidebar_active__ZvFwn"}},13:function(e,t,n){e.exports={nav:"Navbar_nav__2axvJ",item:"Navbar_item__3RIMF",active:"Navbar_active__3p_Rc"}},130:function(e,t,n){e.exports={item:"Friend_item__8y4tW"}},164:function(e,t,n){},165:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(131),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"91cc1011-293a-4a6f-955d-371d85cc4175"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t))},unfollowUser:function(e){return a.delete("follow/".concat(e))},followUser:function(e){return a.post("follow/".concat(e))}},c={getUserProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},289:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(64),c=n.n(s),i=(n(164),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,294)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))}),o=n(34),u=n(35),l=n(37),d=n(36),j=(n(165),n(10)),p=n(14),f=n(0),b=function(){return Object(f.jsx)("div",{children:"News"})},h=function(){return Object(f.jsx)("div",{children:"Music"})},O=function(){return Object(f.jsx)("div",{children:"Settings"})},g=n(129),m=n.n(g),v=n(13),x=n.n(v),w=function(){return Object(f.jsxs)("nav",{className:x.a.nav,children:[Object(f.jsx)("div",{className:x.a.item,children:Object(f.jsx)(p.b,{to:"/profile",activeClassName:x.a.active,children:"Profile"})}),Object(f.jsx)("div",{className:"".concat(x.a.item," ").concat(x.a.active),children:Object(f.jsx)(p.b,{to:"/dialogs",activeClassName:x.a.active,children:"Messages"})}),Object(f.jsx)("div",{className:"".concat(x.a.item," ").concat(x.a.active),children:Object(f.jsx)(p.b,{to:"/users",activeClassName:x.a.active,children:"Users"})}),Object(f.jsx)("div",{className:x.a.item,children:Object(f.jsx)(p.b,{to:"/news",activeClassName:x.a.active,children:"News"})}),Object(f.jsx)("div",{className:x.a.item,children:Object(f.jsx)(p.b,{to:"/music",activeClassName:x.a.active,children:"Music"})}),Object(f.jsx)("div",{className:x.a.item,children:Object(f.jsx)(p.b,{to:"/settings",activeClassName:x.a.active,children:"Settings"})})]})},_=n(68),P=n.n(_),C=n(130),S=n.n(C),y=function(){return Object(f.jsx)("div",{className:S.a.item,children:Object(f.jsx)("img",{src:"https://hypeava.ru/uploads/posts/2018-05/1527186681_1.jpg",alt:"Ava"})})},k=function(){return Object(f.jsxs)("div",{className:P.a.wrapper,children:[Object(f.jsx)("div",{className:P.a.header,children:"Friends:"}),Object(f.jsxs)("div",{className:P.a.content,children:[Object(f.jsx)(y,{}),Object(f.jsx)(y,{}),Object(f.jsx)(y,{})]})]})},N=function(){return Object(f.jsxs)("div",{className:m.a.sidebar,children:[Object(f.jsx)(w,{}),Object(f.jsx)(k,{})]})},U=n(17),F=n(11),I=n.n(F),E=n(20),T=n(42),A=n(5),L=n(21),z="social-network/users/FOLLOW",M="social-network/users/UNFOLLOW",R="social-network/users/SET_USERS",G="social-network/users/SET_CURRENT_PAGE",D="social-network/users/SET_TOTAL_USERS_COUNT",B="social-network/users/TOGGLE_IS_FETCHING",W="social-network/users/TOGGLE_FOLLOWING_IN_PROGRESS",H={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},J=function(e){return{type:z,userId:e}},K=function(e){return{type:M,userId:e}},Q=function(e){return{type:R,users:e}},V=function(e){return{type:G,currentPage:e}},X=function(e){return{type:D,count:e}},q=function(e){return{type:B,isFetching:e}},Y=function(e,t){return{type:W,isFetching:e,userId:t}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(A.a)(Object(A.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(A.a)(Object(A.a)({},e),{},{followed:!0}):e}))});case M:return Object(A.a)(Object(A.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(A.a)(Object(A.a)({},e),{},{followed:!1}):e}))});case R:return Object(A.a)(Object(A.a)({},e),{},{users:t.users});case G:return Object(A.a)(Object(A.a)({},e),{},{currentPage:t.currentPage});case D:return Object(A.a)(Object(A.a)({},e),{},{totalUsersCount:t.count});case B:return Object(A.a)(Object(A.a)({},e),{},{isFetching:t.isFetching});case W:return Object(A.a)(Object(A.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(T.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},$=n(51),ee=n.n($),te=n(90),ne=n.n(te),re=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);return Object(f.jsxs)("div",{className:ne.a.paginator,children:[Object(f.jsx)("span",{onClick:function(){e.onPageChanged(1)},children:"First "}),Object(f.jsx)("span",{onClick:function(){e.currentPage>1&&e.onPageChanged(e.currentPage-1)},children:"Prev. "}),n.map((function(t,n){if(e.currentPage-t<2&&t-e.currentPage<2)return Object(f.jsx)("span",{className:e.currentPage===t?ne.a.selectedPage:void 0,onClick:function(n){e.onPageChanged(t)},children:t+" "},n)})),Object(f.jsx)("span",{onClick:function(){e.currentPage<t&&e.onPageChanged(e.currentPage+1)},children:"Next "}),Object(f.jsx)("span",{onClick:function(){e.onPageChanged(t)},children:"Last"})]})},ae=n.p+"static/media/user.30a11b1f.jpg",se=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:Object(f.jsx)(p.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{src:null!=t.photos.small?t.photos.small:ae,className:ee.a.userPhoto,alt:"Some img"})})}),Object(f.jsx)("div",{children:t.followed?Object(f.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(f.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]}),Object(f.jsxs)("span",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:t.name}),Object(f.jsx)("div",{children:t.status})]}),Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:"u.location.country"}),Object(f.jsx)("div",{children:"u.location.city"})]})]})]})},ce=function(e){return Object(f.jsxs)("div",{className:ee.a.wrapper,children:[Object(f.jsx)(re,{onPageChanged:e.onPageChanged,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage}),Object(f.jsx)("div",{className:ee.a.usersWrapper,children:e.users.map((function(t){return Object(f.jsx)(se,{user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow},t.id)}))}),Object(f.jsx)(re,{onPageChanged:e.onPageChanged,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage})]})},ie=n(48),oe=n(9),ue=n(132),le=Object(ue.a)((function(e){return e.userPage.users}),(function(e){return e.filter((function(e){return!0}))})),de=function(e){return e.userPage.pageSize},je=function(e){return e.userPage.totalUsersCount},pe=function(e){return e.userPage.currentPage},fe=function(e){return e.userPage.isFetching},be=function(e){return e.userPage.followingInProgress},he=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(ie.a,{}):null,Object(f.jsx)(ce,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),Oe=Object(oe.compose)(Object(U.b)((function(e){return{users:le(e),pageSize:de(e),totalUsersCount:je(e),currentPage:pe(e),isFetching:fe(e),followingInProgress:be(e)}}),{follow:function(e){return function(){var t=Object(E.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Y(!0,e)),t.next=3,L.c.followUser(e);case 3:0===t.sent.data.resultCode&&n(J(e)),n(Y(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(E.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Y(!0,e)),t.next=3,L.c.unfollowUser(e);case 3:0===t.sent.data.resultCode&&n(K(e)),n(Y(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:Q,setCurrentPage:V,setTotalUsersCount:X,toggleIsFetching:q,getUsers:function(e,t){return function(){var n=Object(E.a)(I.a.mark((function n(r){var a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(V(e)),r(q(!0)),n.next=4,L.c.getUsers(e,t);case 4:a=n.sent,r(q(!1)),r(Q(a.data.items)),r(X(a.data.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(he),ge=n(91),me=n.n(ge),ve=n.p+"static/media/logo.a65ceb6c.png",xe=function(e){return Object(f.jsxs)("header",{className:me.a.header,children:[Object(f.jsx)(p.b,{to:"/",children:Object(f.jsx)("img",{src:ve,alt:"Logo"})}),Object(f.jsx)("div",{className:me.a.loginBlock,children:e.isAuth?Object(f.jsxs)("div",{children:[e.login," - ",Object(f.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(f.jsx)(p.b,{to:"/login",children:"Login"})})]})},we=n(55),_e="social-network/auth/SET_AUTH_USER_DATA",Pe={id:null,login:null,email:null,isAuth:!1,isFetching:!1},Ce=function(e,t,n,r){return{type:_e,payload:{id:e,login:t,email:n,isAuth:r}}},Se=function(){return function(){var e=Object(E.a)(I.a.mark((function e(t){var n,r,a,s,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,c=r.email,t(Ce(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return Object(A.a)(Object(A.a)({},e),t.payload);default:return e}},ke=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)(xe,Object(A.a)({},this.props))}}]),n}(a.a.Component),Ne=Object(U.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:Ce,logout:function(){return function(){var e=Object(E.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.logout();case 2:0===e.sent.data.resultCode&&t(Ce(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ke),Ue=n(52),Fe=n.n(Ue),Ie=n(126),Ee=n(127),Te=n(65),Ae=n(73),Le=Object(Ee.a)({form:"login"})((function(e){return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(f.jsx)("div",{children:Object(f.jsx)(Ie.a,{component:Te.a,name:"email",placeholder:"Email",validate:Ae.b})}),Object(f.jsx)("div",{children:Object(f.jsx)(Ie.a,{component:Te.a,name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",validate:Ae.b})}),Object(f.jsxs)("div",{children:[Object(f.jsx)(Ie.a,{component:Te.a,name:"rememberMe",type:"checkbox"}),"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"]}),e.error&&Object(f.jsx)("span",{className:Fe.a.formSummaryError,children:e.error}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"\u0412\u043e\u0439\u0442\u0438"})})]})})})),ze=Object(U.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(E.a)(I.a.mark((function r(a){var s,c;return I.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,L.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(Se()):(c=s.data.messages.length>0?s.data.messages:"Some error",a(Object(we.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(f.jsx)(j.a,{to:"/profile"}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsx)(Le,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Me="social-network/app/INITIALIZING_SUCCESS",Re={initialized:!1},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Me:return Object(A.a)(Object(A.a)({},e),{},{initialized:!0});default:return e}},De=n(94),Be=n(125),We={},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We;return e},Je=n(134),Ke=n(128),Qe=(0,n(9).createStore)(Object(oe.combineReducers)({profilePage:De.b,dialogsPage:Be.a,sidebar:He,userPage:Z,auth:ye,form:Ke.a,app:Ge}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.compose)(Object(oe.applyMiddleware)(Je.a)));window.__store__=Qe;var Ve=Qe,Xe=a.a.lazy((function(){return n.e(3).then(n.bind(null,295))})),qe=a.a.lazy((function(){return n.e(4).then(n.bind(null,296))})),Ye=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(f.jsxs)("div",{className:"app-wrapper",children:[Object(f.jsx)(Ne,{}),Object(f.jsx)(N,{}),Object(f.jsxs)("div",{className:"app-wrapper-content",children:[Object(f.jsxs)(r.Suspense,{fallback:Object(f.jsx)(ie.a,{}),children:[Object(f.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(f.jsx)(Xe,{})}}),Object(f.jsx)(j.b,{path:"/dialogs",render:function(){return Object(f.jsx)(qe,{})}})]}),Object(f.jsx)(j.b,{path:"/users",render:function(){return Object(f.jsx)(Oe,{})}}),Object(f.jsx)(j.b,{path:"/news",render:function(){return Object(f.jsx)(b,{})}}),Object(f.jsx)(j.b,{path:"/music",render:function(){return Object(f.jsx)(h,{})}}),Object(f.jsx)(j.b,{path:"/settings",render:function(){return Object(f.jsx)(O,{})}}),Object(f.jsx)(j.b,{path:"/login",render:function(){return Object(f.jsx)(ze,{})}})]})]}):Object(f.jsx)(ie.a,{})}}]),n}(r.Component),Ze=Object(U.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Se());Promise.all([t]).then((function(){e({type:Me})}))}}})(Ye),$e=function(){return Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(p.a,{basename:"/social-network",children:Object(f.jsx)(U.a,{store:Ve,children:Object(f.jsx)(Ze,{})})})})};c.a.render(Object(f.jsx)($e,{}),document.getElementById("root")),i()},48:function(e,t,n){"use strict";var r=n.p+"static/media/preloader.d5566c27.gif",a=(n(1),n(0));t.a=function(e){return Object(a.jsx)("img",{src:r})}},51:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__2aKDn",wrapper:"Users_wrapper__2FfqK",usersWrapper:"Users_usersWrapper__3MkcI"}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__31SGv",error:"FormsControls_error__18jPF",formSummaryError:"FormsControls_formSummaryError__3bM-o"}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return p}));var r=n(5),a=n(70),s=n(52),c=n.n(s),i=n(0),o=["input","meta","child"],u=["input","meta","child"],l=["input","meta","child"],d=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,o)),r=t.touched&&t.error;return Object(i.jsxs)("div",{className:c.a.formControl+" "+(r&&c.a.error),children:[Object(i.jsx)("div",{children:n.children}),r&&Object(i.jsx)("span",{children:t.error})]})},j=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,u));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},p=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},68:function(e,t,n){e.exports={wrapper:"Friends_wrapper__3rQQ6",content:"Friends_content__1ruEQ",header:"Friends_header__1vXwg"}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},90:function(e,t,n){e.exports={selectedPage:"_20nsCVktnFlaMjpar7ngtK",paginator:"_2pmlOnyA4cl7BlNmuCeH04",content:"_2690J2Bvems-UeSLUb_xsA"}},91:function(e,t,n){e.exports={header:"Header_header__GYraG",loginBlock:"Header_loginBlock__3-vRB"}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return g}));var r=n(11),a=n.n(r),s=n(20),c=n(42),i=n(5),o=n(21),u="social-network/profile/ADD-POST",l="social-network/profile/SET_USER_PROFILE",d="social-network/profile/SET_STATUS",j="social-network/profile/DELETE_POST",p={posts:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u0438\u0440!",likesCount:5},{id:2,message:"\u041e\u043c \u043d\u0430\u043c\u043e \u0431\u0445\u0430\u0433\u0430\u0432\u0430\u0442\u0435 \u0432\u0430\u0441\u0443\u0434\u0435\u0432\u0430\u0439\u0430!",likesCount:108},{id:3,message:"\u041a\u0430\u043a\u043e\u0439-\u043d\u0438\u0431\u0443\u0434\u044c \u0435\u0449\u0435 \u043f\u043e\u0441\u0442",likesCount:1108}],profile:null,status:""},f=function(e){return{type:u,newPostText:e}},b=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getUserProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:4,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}}},[[289,1,2]]]);
//# sourceMappingURL=main.8f1bf37c.chunk.js.map