(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[3],{289:function(e,t,s){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3YEet",mainPhoto:"ProfileInfo_mainPhoto__3ji1C",contact:"ProfileInfo_contact__14VJZ",formSummaryError:"ProfileInfo_formSummaryError__1uZKB"}},290:function(e,t,s){e.exports={postBlock:"MyPosts_postBlock__3HcZ0",posts:"MyPosts_posts__293Eh"}},291:function(e,t,s){e.exports={item:"Post_item__FXU4g"}},292:function(e,t,s){"use strict";s.r(t);var c=s(3),i=s(36),o=s(37),r=s(39),n=s(38),a=s(1),j=s(0),l=s.n(j),u=s(97),b=s(289),d=s.n(b),h=s(45),p=function(e){var t=Object(j.useState)(!1),s=Object(u.a)(t,2),c=s[0],i=s[1],o=Object(j.useState)(e.status),r=Object(u.a)(o,2),n=r[0],l=r[1];Object(j.useEffect)((function(){l(e.status)}),[e.status]);return Object(a.jsxs)("div",{children:[!c&&Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Status: "}),Object(a.jsx)("span",{onDoubleClick:function(){i(!0)},children:e.status||"---"})]}),c&&Object(a.jsx)("div",{children:Object(a.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),e.updateUserStatus(n)},value:n})})]})},O=s(107),f=s(33),x=s(129),m=Object(x.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,s=e.profile,c=e.error;return Object(a.jsxs)("form",{onSubmit:t,children:[Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:"Save"})}),c&&Object(a.jsx)("div",{className:d.a.formSummaryError,children:c}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Full name: "}),Object(f.c)("Full name","fullName",[],f.a)]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Looking for a job: "}),Object(f.c)("","lookingForAJob",[],f.a,{type:"checkbox"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"My professional skills: "}),Object(f.c)("My professional skills","lookingForAJobDescription",[],f.b)]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Contacts: "}),Object.keys(s.contacts).map((function(e){return Object(a.jsx)("div",{className:d.a.contact,children:Object(a.jsxs)("b",{children:[e,": ",Object(f.c)(e,"contacts."+e,[],f.a)]})},e)}))]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"About me: "}),Object(f.c)("About me","aboutMe",[],f.b)]})]})})),v=function(e){var t=e.profile,s=e.isOwner,c=e.goToEditMode;return Object(a.jsxs)("div",{children:[s&&Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:c,children:"Edit"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Full name: "}),t.fullName]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Looking for a job: "}),t.lookingForAJob?"yes":"no"]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"My professional skills: "}),t.lookingForAJobDescription]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Contacts: "}),Object.keys(t.contacts).map((function(e){return Object(a.jsx)(P,{contactTitle:e,contactValue:t.contacts[e]},e)}))]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"About me: "}),t.aboutMe]})]})},P=function(e){var t=e.contactTitle,s=e.contactValue;return Object(a.jsxs)("div",{className:d.a.contact,children:[Object(a.jsxs)("b",{children:[t,": "]}),s]})},g=function(e){var t=e.profile,s=e.status,c=e.updateUserStatus,i=e.isOwner,o=e.savePhoto,r=e.saveProfile,n=Object(j.useState)(!1),l=Object(u.a)(n,2),b=l[0],f=l[1];if(!t)return Object(a.jsx)(h.a,{});return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:d.a.descriptionBlock,children:[Object(a.jsx)("img",{src:t.photos.large||O.a,className:d.a.mainPhoto,alt:"avatar"}),i&&Object(a.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}),b?Object(a.jsx)(m,{initialValues:t,profile:t,onSubmit:function(e){r(e).then((function(){f(!1)}))}}):Object(a.jsx)(v,{goToEditMode:function(){return f(!0)},profile:t,isOwner:i}),Object(a.jsx)(p,{status:s,updateUserStatus:c})]})})},k=s(96),S=s(290),_=s.n(S),w=s(291),y=s.n(w),U=function(e){return Object(a.jsxs)("div",{className:y.a.item,children:[Object(a.jsx)("img",{src:"https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",alt:"avatar"}),e.message,Object(a.jsx)("div",{children:Object(a.jsxs)("span",{children:[e.like," like"]})})]})},A=s(88),I=s(85),M=Object(I.a)(10),N=Object(x.a)({form:"profileAddNewPostForm"})((function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(a.jsx)("div",{children:Object(a.jsx)(A.a,{name:"newPostText",component:f.b,validate:[I.b,M],placeholder:"Post message"})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:"Add post"})})]})})),F=function(e){var t=e.posts.map((function(e){return Object(a.jsx)(U,{message:e.message,like:e.likesCount},e.id)}));return Object(a.jsxs)("div",{className:_.a.postBlock,children:[Object(a.jsx)("h3",{children:"My posts"}),Object(a.jsx)("div",{children:Object(a.jsx)(N,{onSubmit:function(t){e.addPost(t.newPostText)}})}),Object(a.jsx)("div",{className:_.a.posts,children:t})]})},C=s(19),E=Object(C.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),{addPost:k.a})(F),T=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(g,{isOwner:e.isOwner,savePhoto:e.savePhoto,profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus,saveProfile:e.saveProfile}),Object(a.jsx)(E,{})]})},B=s(11),J=s(10),D=function(e){Object(r.a)(s,e);var t=Object(n.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(T,Object(c.a)(Object(c.a)({},this.props),{},{isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,saveProfile:this.props.saveProfile}))})}}]),s}(l.a.Component);t.default=Object(J.d)(Object(C.b)((function(e){return{profile:e.profilePage.profile,isAuth:e.auth.isAuth,status:e.profilePage.status,authorizedUserId:e.auth.userId}}),{getUserProfile:k.c,getUserStatus:k.d,updateUserStatus:k.g,savePhoto:k.e,saveProfile:k.f}),B.f)(D)}}]);
//# sourceMappingURL=3.6f1cd7db.chunk.js.map