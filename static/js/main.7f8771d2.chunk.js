(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(13),s=n.n(o),r=n(19),i=n(3),l=n(10),d=n(14),j=n(8),b=Object(d.b)({name:"todos",initialState:{todos:[]},reducers:{addTodo:function(e,t){var n={id:Date.now(),description:t.payload.description,completed:!1};e.todos.push(n)},signIn:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{name:t.payload.name,signedIn:!0})},changeTheme:function(e,t){var n=Object(j.a)(Object(j.a)({},e),{},{theme:t.payload.theme});return n},changeName:function(e,t){var n=Object(j.a)(Object(j.a)({},e),{},{name:t.payload.name});return n},deleteTodo:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.payload.id}))})},completeTodo:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.payload.id?Object(j.a)(Object(j.a)({},e),{},{completed:!0}):e}))})}}}),u=b.actions,m=u.addTodo,h=u.signIn,O=(u.changeTheme,u.completeTodo),p=u.deleteTodo,x=b.reducer,g=Object(d.a)({reducer:{user:x}}),f=n(1);var v=function(){var e=localStorage.getItem("theme"),t=Object(c.useState)(),n=Object(l.a)(t,2),a=n[0],o=n[1];function s(){o(!a)}function r(e){var t=e.target.innerHTML;console.log(t),"Default"===t&&localStorage.setItem("theme","default"),"Dark"===t&&localStorage.setItem("theme","dark")}return Object(f.jsxs)(f.Fragment,{children:[a?Object(f.jsx)("div",{className:"modal-background",onClick:s,children:Object(f.jsxs)("div",{className:"modal",onClick:function(e){e.stopPropagation()},children:[Object(f.jsx)("h1",{children:"Settings"}),Object(f.jsx)("h2",{children:"Username"}),Object(f.jsx)("input",{placeholder:localStorage.getItem("username")}),Object(f.jsx)("h2",{children:"Theme"}),Object(f.jsxs)("div",{className:"button-container",children:[Object(f.jsx)("button",{className:"default"===e?"active":"theme-button-default",onClick:r,children:"Default"}),Object(f.jsx)("button",{className:"dark"===e?"active":"theme-button-dark",onClick:r,children:"Dark"})]}),Object(f.jsx)("button",{className:"modal-button",onClick:s,children:"Confirm"})]})}):Object(f.jsx)(f.Fragment,{children:" "}),Object(f.jsxs)("nav",{children:[Object(f.jsx)("button",{onClick:s,children:"Settings"}),Object(f.jsx)("span",{className:"full-title",children:"Not Another Todo List"}),Object(f.jsx)("span",{className:"short-title",children:"Todo List"}),Object(f.jsx)("button",{onClick:function(){localStorage.removeItem("signedIn"),localStorage.removeItem("username"),window.location.pathname="/signin"},children:"logout"})]})]})},N=n(9);var S=function(){var e=Object(N.b)(),t=Object(N.c)((function(e){return e.user.todos}));return Object(f.jsxs)("aside",{children:[Object(f.jsx)("label",{htmlFor:"select-status",className:"aside-label",children:"TODOS"}),Object(f.jsxs)("select",{name:"select-status",id:"status",children:[Object(f.jsx)("option",{value:"both",children:"All Todos"}),Object(f.jsx)("option",{value:"completed",children:"Completed"}),Object(f.jsx)("option",{value:"todo",children:"TODO :'("})]}),Object(f.jsx)("ol",{children:t.map((function(t){return Object(f.jsxs)("li",{className:t.completed?"complete":"",children:[t.description," ",t.completed?Object(f.jsx)("button",{className:"delete-todo-button",onClick:function(){return n=t.id,void e(p({id:n}));var n}}):Object(f.jsx)("button",{className:"complete-todo-button",onClick:function(){return n=t.id,void e(O({id:n}));var n}})]},t.id)}))})]})};var I=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(N.b)();return Object(f.jsxs)("section",{children:[Object(f.jsx)("label",{children:"ADD TODO"}),Object(f.jsx)("form",{onSubmit:function(e){e.preventDefault(),o(m({description:n}))},children:Object(f.jsxs)("div",{className:"input-wrapper",children:[Object(f.jsx)("div",{className:"input-background",children:Object(f.jsx)("input",{className:"todoInput",placeholder:"type todo here...",type:"text",value:n,onChange:function(e){return a(e.target.value)}})}),Object(f.jsx)("button",{type:"submit",children:"+"})]})})]})};var k=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(v,{}),Object(f.jsxs)("main",{className:"container",children:[Object(f.jsx)(I,{}),Object(f.jsx)(S,{})]})]})};var T=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)("hidden"),s=Object(l.a)(o,2),r=s[0],i=s[1],d=Object(N.b)();return Object(f.jsxs)("form",{className:"sign-in-form",onSubmit:function(e){e.preventDefault(),!n||n.length<4?(i("show"),setTimeout((function(){i("hidden")}),5e3)):n.length>=4&&(d(h({name:n,signedIn:!0})),localStorage.setItem("signedIn",!0),localStorage.setItem("username",n),localStorage.setItem("theme","default"),window.location.pathname="/dashboard")},children:[Object(f.jsx)("h2",{children:"Username:"}),Object(f.jsx)("input",{placeholder:"4+ characters",type:"text",onChange:function(e){a(e.target.value)}}),Object(f.jsxs)("p",{className:r,children:["Please enter a username with 4 or more characters"," "]}),Object(f.jsx)("button",{className:"signIn-button",type:"submit",children:"login"})]})};var C=function(){var e=localStorage.getItem("signedIn");return Object(f.jsx)("div",{className:"background",children:Object(f.jsx)(r.a,{children:e?Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(i.b,{path:"/",component:k})}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(i.a,{to:"/signin"})," ",Object(f.jsx)(i.b,{path:"/signin",component:T})]})})})};n(35);s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(N.a,{store:g,children:Object(f.jsx)(C,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.7f8771d2.chunk.js.map