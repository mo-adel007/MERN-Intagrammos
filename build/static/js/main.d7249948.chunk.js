(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(21),o=n.n(i),r=(n(29),n(2)),l=n(3),d=n(4),j=function(){var e=Object(a.useContext)(S),t=e.state,n=e.dispatch,s=Object(l.f)();return Object(c.jsx)("nav",{children:Object(c.jsxs)("div",{className:"nav-wrapper black",children:[Object(c.jsxs)(d.b,{to:t?"/":"/signin",className:"brand-logo",children:[" ","Instagramos"]}),Object(c.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:t?[Object(c.jsx)("li",{children:Object(c.jsx)("i",{"data-target":"modal1",className:"large material-icons modal-trigger",style:{color:"black"},children:"search"})},"1"),Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/profile",children:"Profile"})},"2"),Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/create",children:"Create Post"})},"3"),Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/myfollowingpost",children:"My following Posts"})},"4"),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"btn #c62828 red darken-3",onClick:function(){localStorage.clear(),n({type:"CLEAR"}),s.push("/signin")},children:"Logout"})},"5")]:[Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/signin",children:"Signin"})},"6"),Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/signup",children:"Signup"})},"7")]})]})})},u=(n(34),function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(a.useContext)(S),o=i.state;i.dispatch;Object(a.useEffect)((function(){fetch("/allpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),s(e.posts)}))}),[]);return Object(c.jsx)("div",{className:"home",children:n.map((function(e){return Object(c.jsxs)("div",{className:"card home-card",children:[Object(c.jsxs)("h5",{style:{padding:"5px"},children:[Object(c.jsx)(d.b,{to:e.postedBy._id!==o._id?"/profile/"+e.postedBy._id:"/profile",children:e.postedBy.name})," ",e.postedBy._id==o._id&&Object(c.jsx)("i",{className:"material-icons",style:{float:"right"},onClick:function(){return t=e._id,void fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.filter((function(t){return t._id!==e._id}));s(t)}));var t},children:"delete"})]}),Object(c.jsx)("div",{className:"card-image",children:Object(c.jsx)("img",{src:e.photo})}),Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsx)("i",{className:"material-icons",style:{color:"red"},children:"favorite"}),e.likes.includes(o._id)?Object(c.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));s(t)})).catch((function(e){console.log(e)}))},children:"thumb_down"}):Object(c.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));s(t)})).catch((function(e){console.log(e)}))},children:"thumb_up"}),Object(c.jsxs)("h6",{children:[e.likes.length," likes"]}),Object(c.jsx)("h6",{children:e.title}),Object(c.jsx)("p",{children:e.body}),e.comments.map((function(e){return Object(c.jsxs)("h6",{children:[Object(c.jsx)("span",{style:{fontWeight:"500"},children:e.postedBy.name})," ",e.text]},e._id)})),Object(c.jsx)("form",{onSubmit:function(t){var c,a;t.preventDefault(),c=t.target[0].value,a=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:a,text:c})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id==e._id?e:t}));s(t)})).catch((function(e){console.log(e)}))},children:Object(c.jsx)("input",{type:"text",placeholder:"add a comment"})})]})]},e._id)}))})}),h=n(7),p=n.n(h),b=function(){var e=Object(a.useContext)(S),t=(e.state,e.dispatch),n=Object(l.f)(),s=Object(a.useState)(""),i=Object(r.a)(s,2),o=i[0],j=i[1],u=Object(a.useState)(""),h=Object(r.a)(u,2),b=h[0],f=h[1];return Object(c.jsx)("div",{className:"mycard",children:Object(c.jsxs)("div",{className:"card auth-card input-field",children:[Object(c.jsx)("h2",{children:"Instagramos"}),Object(c.jsx)("input",{type:"text",placeholder:"email",value:b,onChange:function(e){return f(e.target.value)}}),Object(c.jsx)("input",{type:"password",placeholder:"password",value:o,onChange:function(e){return j(e.target.value)}}),Object(c.jsx)("button",{className:"btn waves-effect waves-light #1976d2 blue darken-2 ",onClick:function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(b)?fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:o,email:b})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?p.a.toast({html:e.error,classes:"#c62828 red darken-3"}):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),p.a.toast({html:"signedin success",classes:"#43a047 green darken-1"}),n.push("/"),p.a.toast({html:"Signed in succefully",classes:"#43a047 green darken-1"}),n.push("/"))})).catch((function(e){console.log(e)})):p.a.toast({html:"Invalid email",classes:"#c62828 red darken-3"})},children:"Sign in"}),Object(c.jsx)("h5",{children:Object(c.jsx)(d.b,{to:"/signup",children:"Don't have and account?"})})]})})},f=n(6),O=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(a.useContext)(S),o=i.state,l=i.dispatch,d=Object(a.useState)(""),j=Object(r.a)(d,2),u=j[0],h=j[1];Object(a.useEffect)((function(){fetch("/mypost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),s(e.mypost)}))}),[]),Object(a.useEffect)((function(){if(u){var e=new FormData;e.append("file",u),e.append("upload_preset","insta-clone"),e.append("cloud_name","cnq"),fetch("https://api.cloudinary.com/v1_1/dula/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){fetch("/updatepic",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({pic:e.url})}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("user",JSON.stringify(Object(f.a)(Object(f.a)({},o),{},{pic:e.pic}))),l({type:"UPDATEPIC",payload:e.pic})}))})).catch((function(e){console.log(e)}))}}),[u]);return Object(c.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:[Object(c.jsxs)("div",{style:{margin:"18px 0px",borderBottom:"1px solid grey"},children:[Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:o?o.pic:"loading"})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:o?o.name:"loading"}),Object(c.jsx)("h5",{children:o?o.email:"loading"}),Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"},children:[Object(c.jsxs)("h6",{children:[n.length," posts"]}),Object(c.jsxs)("h6",{children:[o?o.followers.length:"0"," followers"]}),Object(c.jsxs)("h6",{children:[o?o.following.length:"0"," following"]})]})]})]}),Object(c.jsxs)("div",{className:"file-field input-field",style:{margin:"10px"},children:[Object(c.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(c.jsx)("span",{children:"Update pic"}),Object(c.jsx)("input",{type:"file",onChange:function(e){return t=e.target.files[0],void h(t);var t}})]}),Object(c.jsx)("div",{className:"file-path-wrapper",children:Object(c.jsx)("input",{className:"file-path validate",type:"text"})})]})]}),Object(c.jsx)("div",{className:"gallery",children:n.map((function(e){return Object(c.jsx)("img",{className:"item",src:e.photo,alt:e.title},e._id)}))})]})},m=function(){var e=Object(l.f)(),t=Object(a.useState)(""),n=Object(r.a)(t,2),s=n[0],i=n[1],o=Object(a.useState)(""),j=Object(r.a)(o,2),u=j[0],h=j[1],b=Object(a.useState)(""),f=Object(r.a)(b,2),O=f[0],m=f[1],g=Object(a.useState)(""),x=Object(r.a)(g,2),y=(x[0],x[1]),v=Object(a.useState)(void 0),w=Object(r.a)(v,2),S=w[0];w[1];Object(a.useEffect)((function(){S&&N()}),[S]);var N=function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(O)?fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,password:u,email:O,pic:S})}).then((function(e){return e.json()})).then((function(t){t.error?p.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(p.a.toast({html:t.message,classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)})):p.a.toast({html:"invalid email",classes:"#c62828 red darken-3"})};return Object(c.jsx)("div",{className:"mycard",children:Object(c.jsxs)("div",{className:"card auth-card input-field",children:[Object(c.jsx)("h2",{children:"Instagramos"}),Object(c.jsx)("input",{type:"text",placeholder:"name",value:s,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)("input",{type:"text",placeholder:"email",value:O,onChange:function(e){return m(e.target.value)}}),Object(c.jsx)("input",{type:"password",placeholder:"password",value:u,onChange:function(e){return h(e.target.value)}}),Object(c.jsxs)("div",{className:"file-field input-field",children:[Object(c.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(c.jsx)("span",{children:"Upload pic"}),Object(c.jsx)("input",{type:"file",onChange:function(e){return y(e.target.files[0])}})]}),Object(c.jsx)("div",{className:"file-path-wrapper",children:Object(c.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(c.jsx)("button",{className:"btn waves-effect waves-light #1976d2 blue darken-2",onClick:function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(O)?fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,password:u,email:O})}).then((function(e){return e.json()})).then((function(t){t.error?p.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(p.a.toast({html:t.message,classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)})):p.a.toast({html:"Invalid email",classes:"#c62828 red darken-3"})},children:"Sign up"}),Object(c.jsx)("h5",{children:Object(c.jsx)(d.b,{to:"/signin",children:"Already have an account?"})})]})})},g=function(){var e=Object(l.f)(),t=Object(a.useState)(""),n=Object(r.a)(t,2),s=n[0],i=n[1],o=Object(a.useState)(""),d=Object(r.a)(o,2),j=d[0],u=d[1],h=Object(a.useState)(""),b=Object(r.a)(h,2),f=b[0],O=b[1],m=Object(a.useState)(""),g=Object(r.a)(m,2),x=g[0],y=g[1];Object(a.useEffect)((function(){x&&fetch("/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:s,body:j,pic:x})}).then((function(e){return e.json()})).then((function(t){t.error?p.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(p.a.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"}),e.push("/"))})).catch((function(e){console.log(e)}))}),[x]);return Object(c.jsxs)("div",{className:"card input-filed",style:{margin:"30px auto",maxWidth:"500px",padding:"20px",textAlign:"center"},children:[Object(c.jsx)("input",{type:"text",placeholder:"title",value:s,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)("input",{type:"text",placeholder:"body",value:j,onChange:function(e){return u(e.target.value)}}),Object(c.jsxs)("div",{className:"file-field input-field",children:[Object(c.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(c.jsx)("span",{children:"Uplaod Image"}),Object(c.jsx)("input",{type:"file",onChange:function(e){return O(e.target.files[0])}})]}),Object(c.jsx)("div",{className:"file-path-wrapper",children:Object(c.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(c.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){return function(){var e=new FormData;e.append("file",f),e.append("upload_preset","instagram-clone"),e.append("cloud_name","dula"),fetch("https://api.cloudinary.com/v1_1/dula/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){y(e.url)})).catch((function(e){console.log(e)}))}()},children:"Submit post"})]})},x=function(e,t){return"USER"==t.type?t.payload:"CLEAR"==t.type?null:"UPDATE"==t.type?Object(f.a)(Object(f.a)({},e),{},{followers:t.payload.followers,following:t.payload.following}):"UPDATEPIC"==t.type?Object(f.a)(Object(f.a)({},e),{},{pic:t.payload}):e},y=n(23),v=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(a.useContext)(S),o=i.state,d=i.dispatch,j=Object(l.g)().userid,u=Object(a.useState)(!o||!o.following.includes(j)),h=Object(r.a)(u,2),p=h[0],b=h[1];Object(a.useEffect)((function(){fetch("/user/".concat(j),{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);return Object(c.jsx)(c.Fragment,{children:n?Object(c.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:[Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"},children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:n.user.pic})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:n.user.name}),Object(c.jsx)("h5",{children:n.user.email}),Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"},children:[Object(c.jsxs)("h6",{children:[n.posts.length," posts"]}),Object(c.jsxs)("h6",{children:[n.user.followers.length," followers"]}),Object(c.jsxs)("h6",{children:[n.user.following.length," following"]})]}),p?Object(c.jsx)("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({followId:j})}).then((function(e){return e.json()})).then((function(e){d({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),s((function(t){return Object(f.a)(Object(f.a)({},t),{},{user:Object(f.a)(Object(f.a)({},t.user),{},{followers:[].concat(Object(y.a)(t.user.followers),[e._id])})})})),b(!1)}))},children:"Follow"}):Object(c.jsx)("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/unfollow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({unfollowId:j})}).then((function(e){return e.json()})).then((function(e){d({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),s((function(t){var n=t.user.followers.filter((function(t){return t!=e._id}));return Object(f.a)(Object(f.a)({},t),{},{user:Object(f.a)(Object(f.a)({},t.user),{},{followers:n})})})),b(!0)}))},children:"UnFollow"})]})]}),Object(c.jsx)("div",{className:"gallery",children:n.posts.map((function(e){return Object(c.jsx)("img",{className:"item",src:e.photo,alt:e.title},e._id)}))})]}):Object(c.jsx)("h2",{children:"loading...!"})})},w=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(a.useContext)(S),o=i.state;i.dispatch;Object(a.useEffect)((function(){fetch("/getsubpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),s(e.posts)}))}),[]);return Object(c.jsx)("div",{className:"home",children:n.map((function(e){return Object(c.jsxs)("div",{className:"card home-card",children:[Object(c.jsxs)("h5",{style:{padding:"5px"},children:[Object(c.jsx)(d.b,{to:e.postedBy._id!==o._id?"/profile/"+e.postedBy._id:"/profile",children:e.postedBy.name})," ",e.postedBy._id==o._id&&Object(c.jsx)("i",{className:"material-icons",style:{float:"right"},onClick:function(){return t=e._id,void fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.filter((function(t){return t._id!==e._id}));s(t)}));var t},children:"delete"})]}),Object(c.jsx)("div",{className:"card-image",children:Object(c.jsx)("img",{src:e.photo})}),Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsx)("i",{className:"material-icons",style:{color:"red"},children:"favorite"}),e.likes.includes(o._id)?Object(c.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));s(t)})).catch((function(e){console.log(e)}))},children:"thumb_down"}):Object(c.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));s(t)})).catch((function(e){console.log(e)}))},children:"thumb_up"}),Object(c.jsxs)("h6",{children:[e.likes.length," likes"]}),Object(c.jsx)("h6",{children:e.title}),Object(c.jsx)("p",{children:e.body}),e.comments.map((function(e){return Object(c.jsxs)("h6",{children:[Object(c.jsx)("span",{style:{fontWeight:"500"},children:e.postedBy.name})," ",e.text]},e._id)})),Object(c.jsx)("form",{onSubmit:function(t){var c,a;t.preventDefault(),c=t.target[0].value,a=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:a,text:c})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id==e._id?e:t}));s(t)})).catch((function(e){console.log(e)}))},children:Object(c.jsx)("input",{type:"text",placeholder:"add a comment"})})]})]},e._id)}))})},S=Object(a.createContext)(),N=function(){var e=Object(l.f)(),t=Object(a.useContext)(S),n=(t.state,t.dispatch);return Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?n({type:"USER",payload:t}):e.location.pathname.startsWith("/reset")||e.push("/signin")}),[]),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/home",children:Object(c.jsx)(u,{})}),Object(c.jsx)(l.a,{path:"/signin",children:Object(c.jsx)(b,{})}),Object(c.jsx)(l.a,{path:"/signup",children:Object(c.jsx)(m,{})}),Object(c.jsx)(l.a,{path:"/profile",children:Object(c.jsx)(O,{})}),Object(c.jsx)(l.a,{path:"/create",children:Object(c.jsx)(g,{})}),Object(c.jsx)(l.a,{path:"/profile/:userid",children:Object(c.jsx)(v,{})}),Object(c.jsx)(l.a,{path:"/myfollowingpost",children:Object(c.jsx)(w,{})})]})};var C=function(){var e=Object(a.useReducer)(x,null),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(c.jsx)(S.Provider,{value:{state:n,dispatch:s},children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(j,{}),Object(c.jsx)(N,{})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),_()}},[[35,1,2]]]);
//# sourceMappingURL=main.d7249948.chunk.js.map