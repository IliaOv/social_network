(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(43),a=n(5),s="ADD_MESSAGE",c={messages:[{id:1,message:"Hi"},{id:2,message:"Yo"},{id:3,message:"Yo"},{id:4,message:"Bye"}],dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"}]},i=function(e){return{type:s,newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:5,message:t.newMessageText}])});default:return e}}},132:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__3-HUc"}},14:function(e,t,n){e.exports={nav:"Navbar_nav__3BDlC",item:"Navbar_item__3ZosF",active:"Navbar_active__2ABut",friends:"Navbar_friends__7-8ks"}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n(131),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"4c4798d8-d881-4c94-a57d-ce44c776a220"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e),{})},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return i.getProfile(e)}},c={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}},i={getProfile:function(e){return e?a.get("profile/".concat(e)):""},getStatus:function(e){return e?a.get("profile/status/".concat(e)):""},updateStatus:function(e){return e?a.put("profile/status",{status:e}):""}}},165:function(e,t,n){},166:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var r=n(1);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),s=n.n(a),c=n(64),i=n.n(c),o=(n(165),n(35)),u=n(36),l=n(38),d=n(37),j=(n(166),n(14)),f=n.n(j),b=n(15),p=function(){return Object(r.jsxs)("nav",{className:f.a.nav,children:[Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/profile",activeClassName:f.a.active,children:"Profile"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/dialogs",activeClassName:f.a.active,children:"Messages"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/users",activeClassName:f.a.active,children:"Users"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/news",activeClassName:f.a.active,children:"News"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/music",activeClassName:f.a.active,children:"Music"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/settings",activeClassName:f.a.active,children:"Settings"})}),Object(r.jsxs)("div",{className:f.a.sideBar,children:[Object(r.jsx)("h3",{children:"Friends"}),Object(r.jsx)("div",{className:f.a.friends})]})]})},h=n(11),O=function(e){return Object(r.jsx)("div",{children:"News"})},g=function(e){return Object(r.jsx)("div",{children:"Music"})},m=function(e){return Object(r.jsx)("div",{children:"Settings"})},v=n(18),x=n(10),w=n.n(x),_=n(21),P=n(43),y=n(5),S=n(16),C=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(y.a)(Object(y.a)({},e),r):e}))},N="FOLLOW",k="UNFOLLOW",E="SET_USERS",I="SET_CURRENT-PAGE",T="SET_TOTAL_USERS_COUNT",U="TOGGLE_IS_FETCHING",A="TOGGLE_IS_FOLLOWING_PROGRESS",F={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},z=function(e){return{type:N,userId:e}},L=function(e){return{type:k,userId:e}},D=function(e){return{type:I,currentPage:e}},M=function(e){return{type:U,isFetching:e}},B=function(e,t){return{type:A,isFetching:e,userId:t}},R=function(){var e=Object(_.a)(w.a.mark((function e(t,n,r,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(B(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(B(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(y.a)(Object(y.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!0})});case k:return Object(y.a)(Object(y.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!1})});case E:return Object(y.a)(Object(y.a)({},e),{},{users:t.users});case I:return Object(y.a)(Object(y.a)({},e),{},{currentPage:t.currentPage});case T:return Object(y.a)(Object(y.a)({},e),{},{totalUsersCount:t.count});case U:return Object(y.a)(Object(y.a)({},e),{},{isFetching:t.isFetching});case A:return Object(y.a)(Object(y.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(P.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},Y=n(128),H=n(68),W=n.n(H),X=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.currentPage,c=e.onPageChanged,i=e.portionSize,o=void 0===i?10:i,u=Math.ceil(t/n),l=[],d=Math.ceil(u/o),j=Object(a.useState)(1),f=Object(Y.a)(j,2),b=f[0],p=f[1],h=(b-1)*o+1,O=b*o,g=1;g<=u;g++)l.push(g);return Object(r.jsxs)("div",{className:W.a.pages,children:[b>1&&Object(r.jsx)("button",{onClick:function(){p(b-1)},children:"PREV"}),l.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(r.jsx)("span",{className:s===e?W.a.selectedPage:W.a.pageNumber,onClick:function(){return c(e)},children:e},e)})),d>b&&Object(r.jsx)("button",{onClick:function(){p(b+1)},children:"NEXT"})]})},J=n(132),K=n.n(J),V=n.p+"static/media/user.250f7c46.png",Z=function(e){var t=e.user,n=e.follow,a=e.unfollow,s=e.followingInProgress;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(b.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:V,className:K.a.userPhoto,alt:"avatar"})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:s.some((function(e){return e===t.id})),onClick:function(){return a(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:s.some((function(e){return e===t.id})),onClick:function(){return n(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.country"}),Object(r.jsx)("div",{children:"user.location.city"})]})]})]})},q=function(e){var t=e.currentPage,n=e.onPageChanged,a=e.totalUsersCount,s=e.pageSize,c=e.users,i=e.follow,o=e.unfollow,u=e.followingInProgress;return Object(r.jsxs)("div",{children:[Object(r.jsx)(X,{currentPage:t,onPageChanged:n,totalItemsCount:a,pageSize:s}),c.map((function(e){return Object(r.jsx)(Z,{user:e,follow:i,unfollow:o,followingInProgress:u},e.id)}))]})},$=n(44),Q=n(9),ee=function(e){return e.usersPage.users},te=function(e){return e.usersPage.pageSize},ne=function(e){return e.usersPage.totalUsersCount},re=function(e){return e.usersPage.currentPage},ae=function(e){return e.usersPage.isFetching},se=function(e){return e.usersPage.followingInProgress},ce=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)($.a,{}):null,Object(r.jsx)(q,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress,onPageChanged:this.onPageChanged})]})}}]),n}(s.a.Component),ie=Object(Q.d)(Object(v.b)((function(e){return{users:ee(e),pageSize:te(e),totalUsersCount:ne(e),currentPage:re(e),isFetching:ae(e),followingInProgress:se(e)}}),{follow:function(e){return function(){var t=Object(_.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",R(n,e,S.c.follow.bind(S.c),z));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(_.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",R(n,e,S.c.unfollow.bind(S.c),L));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:D,toggleFollowingProgress:B,getUsers:function(e,t){return function(){var n=Object(_.a)(w.a.mark((function n(r){var a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(M(!0)),r(D(e)),n.next=4,S.c.getUsers(e,t);case 4:a=n.sent,r(M(!1)),r((c=a.items,{type:E,users:c})),r((s=a.totalCount,{type:T,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ce),oe=n(92),ue=n.n(oe),le=function(e){return Object(r.jsxs)("header",{className:ue.a.header,children:[Object(r.jsx)("img",{src:"https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png",alt:"logo"}),Object(r.jsx)("div",{className:ue.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," \u2013 ",Object(r.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(r.jsx)(b.b,{to:"/login",children:"Login"})})]})},de=n(45),je="auth/SET_USER_DATA",fe={userId:null,email:null,login:null,isAuth:!1,isFetching:!1},be=function(e,t,n,r){return{type:je,payload:{userId:e,email:t,login:n,isAuth:r}}},pe=function(){return function(){var e=Object(_.a)(w.a.mark((function e(t){var n,r,a,s,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.email,c=r.login,t(be(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:return Object(y.a)(Object(y.a)({},e),t.payload);default:return e}},Oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(le,Object(y.a)({},this.props))}}]),n}(s.a.Component),ge=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,logout:e.auth.logout}}),{logout:function(){return function(){var e=Object(_.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.logout();case 2:0===e.sent.data.resultCode&&t(be(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Oe),me=n(127),ve=n(33),xe=n(85),we=n(53),_e=n.n(we),Pe=Object(me.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(ve.c)("Email","email",[xe.b],ve.a),Object(ve.c)("Password","password",[xe.b],ve.a,{type:"password"}),Object(ve.c)(null,"rememberMe",[],ve.a,{type:"checkbox"},"remember me"),n&&Object(r.jsx)("div",{className:_e.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),ye=Object(v.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(_.a)(w.a.mark((function r(a){var s,c;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(pe()):(c=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(de.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.login;return e.isAuth?Object(r.jsx)(h.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(Pe,{onSubmit:function(e){t(e.email,e.password,e.rememberMe)}})]})})),Se="INITIALIZED_SUCCESS",Ce={initialized:!1},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Object(y.a)(Object(y.a)({},e),{},{initialized:!0});default:return e}},ke=n(96),Ee=n(126),Ie={friends:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"}]},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie;return e},Ue=n(134),Ae=n(129),Fe=Object(Q.c)({profilePage:ke.b,dialogsPage:Ee.b,sideBar:Te,usersPage:G,auth:he,form:Ae.a,app:Ne}),ze=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,Le=Object(Q.e)(Fe,ze(Object(Q.a)(Ue.a)));window.__store__=Le;var De=Le,Me=s.a.lazy((function(){return n.e(4).then(n.bind(null,292))})),Be=s.a.lazy((function(){return n.e(3).then(n.bind(null,291))})),Re=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(ge,{}),Object(r.jsx)(p,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(h.b,{path:"/dialogs",render:function(){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)($.a,{}),children:Object(r.jsx)(Me,{})})}}),Object(r.jsx)(h.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)($.a,{}),children:Object(r.jsx)(Be,{})})}}),Object(r.jsx)(h.b,{path:"/users",render:function(){return Object(r.jsx)(ie,{})}}),Object(r.jsx)(h.b,{path:"/login",render:function(){return Object(r.jsx)(ye,{})}}),Object(r.jsx)(h.b,{path:"/news",render:function(){return Object(r.jsx)(O,{})}}),Object(r.jsx)(h.b,{path:"/music",render:function(){return Object(r.jsx)(g,{})}}),Object(r.jsx)(h.b,{path:"/settings",render:function(){return Object(r.jsx)(m,{})}})]})]}):Object(r.jsx)($.a,{})}}]),n}(a.Component),Ge=Object(Q.d)(h.f,Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(pe());Promise.all([t]).then((function(){e({type:Se})}))}}}))(Re),Ye=function(e){return Object(r.jsx)(b.a,{children:Object(r.jsx)(v.a,{store:De,children:Object(r.jsx)(Ge,{})})})};i.a.render(Object(r.jsx)(Ye,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return j}));var r=n(5),a=n(93),s=n(1),c=(n(0),n(53)),i=n.n(c),o=n(88),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=r&&n;return Object(s.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(s.jsx)("div",{children:a}),Object(s.jsx)("div",{children:c&&Object(s.jsx)("span",{children:r})})]})},l=function(e){var t=e.input,n=Object(a.a)(e,["input"]);return Object(s.jsxs)(u,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))," "]}))},d=function(e){var t=e.input,n=Object(a.a)(e,["input"]);return Object(s.jsxs)(u,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),n))," "]}))},j=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(s.jsxs)("div",{children:[Object(s.jsx)(o.a,Object(r.a)({placeholder:e,name:t,validators:n,component:a},c))," ",i]})}},44:function(e,t,n){"use strict";var r=n(1),a=n.p+"static/media/preloader.8b17b396.svg";n(0),t.a=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{style:{width:"50px"},src:a,alt:"preloader"})})}},53:function(e,t,n){e.exports={formControl:"FormsControls_formControl__oO9NX",error:"FormsControls_error__1Yd6l",formSummaryError:"FormsControls_formSummaryError__1hAKn"}},68:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__1Y_xD",pages:"Paginator_pages__10zLO",pageNumber:"Paginator_pageNumber__1BYYy"}},85:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},92:function(e,t,n){e.exports={header:"Header_header__2Da7s",loginBlock:"Header_loginBlock__B-_Xh"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return g}));var r=n(10),a=n.n(r),s=n(21),c=n(43),i=n(5),o=n(16),u="ADD_POST",l="SET_USER_PROFILE",d="SET_STATUS",j="DELETE_POST",f={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"My first post!",likesCount:5}],profile:null,status:""},b=function(e){return{type:u,newPostText:e}},p=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[{id:3,message:t.newPostText,likesCount:0}])});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}}},[[286,1,2]]]);
//# sourceMappingURL=main.c74df066.chunk.js.map