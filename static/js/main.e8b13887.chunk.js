(window["webpackJsonppersonal-account-example"]=window["webpackJsonppersonal-account-example"]||[]).push([[0],{28:function(e,a,t){e.exports=t(86)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(19),c=t.n(i),s=t(10),m=t(11);t(33),t(34),t(35);function r(e){document.querySelector("#".concat(e)).classList.remove("hide"),document.onkeydown=function(e){27==e.keyCode&&(document.querySelectorAll(".modal-wrap").forEach(function(e){e.classList.add("hide")}),document.onkeydown=null)}}var o=function(){return n.a.createElement("header",{className:"site-header"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col l8"},n.a.createElement("h1",{className:"site-title"},"Account example")),n.a.createElement("div",{className:"col l2 right-align"},n.a.createElement("button",{className:"modal-show waves-effect waves-light btn",onClick:function(){return r("signup")}},"Signup")),n.a.createElement("div",{className:"col l2 right-align"},n.a.createElement("button",{className:"modal-show waves-effect waves-light btn",onClick:function(){return r("login")}},"Login")))))},u=t(15);function d(e){(e.target.classList.contains("modal-wrap")||e.target.classList.contains("modal-project-close"))&&(document.querySelectorAll(".modal-wrap").forEach(function(e){e.classList.add("hide")}),document.onkeydown=null)}function p(e){var a=document.forms.signupForm,t=a.name.value,l=a.pass.value,n=a.email.value,i=a.birthday.value;t&&l&&n&&i||(alert("Fill all the fields!"),e.preventDefault())}var E=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"modal-wrap hide",id:"signup",onClick:d},n.a.createElement("div",{className:"modal-project signup-modal"},n.a.createElement("button",{className:"modal-project-close btn-floating waves-effect waves-light  lighten-1"},"X"),n.a.createElement("div",{className:"form-slider-wrapper"},n.a.createElement("div",{className:"form-slider"},n.a.createElement("div",{className:"left-50"},n.a.createElement("form",{name:"signupForm"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col l6"},n.a.createElement("input",{placeholder:"Your name",name:"name",id:"signup-name",type:"text",className:"validate"}),n.a.createElement("label",{htmlFor:"signup-name",className:"active"},"Name")),n.a.createElement("div",{className:"input-field col l6"},n.a.createElement("input",{placeholder:"Your password",name:"pass",id:"signup-pass",type:"password",className:"validate"}),n.a.createElement("label",{htmlFor:"signup-pass",className:"active"},"Password")),n.a.createElement("div",{className:"input-field col l6"},n.a.createElement("input",{placeholder:"Your email",name:"email",id:"signup-email",type:"email",className:"validate"}),n.a.createElement("label",{htmlFor:"signup-email",className:"active"},"Email")),n.a.createElement("div",{className:"col l6"},n.a.createElement(u.DatePicker,{placeholder:"Your birthday",name:"birthday",id:"signup-birthday",className:"datepicker",options:{}})),n.a.createElement("div",{className:"col l12"},n.a.createElement("p",null,n.a.createElement("label",null,n.a.createElement("input",{type:"radio",value:"male",name:"sex",checked:!0,className:"sex"}),n.a.createElement("span",null,"Male"))),n.a.createElement("p",null,n.a.createElement("label",null,n.a.createElement("input",{type:"radio",value:"female",name:"sex",className:"sex"}),n.a.createElement("span",null,"Female"))),n.a.createElement("p",null,n.a.createElement("label",null,n.a.createElement("input",{type:"radio",value:"other",name:"sex",className:"sex"}),n.a.createElement("span",null,"Other")))),n.a.createElement("div",{className:"col l6"},n.a.createElement("p",null,n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",id:"agree-rules",onChange:function(){document.querySelector("#signup-submit").classList.toggle("disabled")}}),n.a.createElement("span",null,"Agree Rules")))),n.a.createElement("div",{className:"col l6",onClick:function(){document.querySelector(".form-slider").style.marginLeft="-345px"}},n.a.createElement("p",{className:"read-rules"},"(read rules)")),n.a.createElement("div",{className:"col l12 right-align"},n.a.createElement(s.b,{to:"/cabinet",style:{textDecoration:"none",color:"white"}},n.a.createElement("button",{id:"signup-submit",className:"waves-effect waves-light btn disabled",onClick:p},"Sign In")))))),n.a.createElement("div",{className:"right-50",onClick:function(){document.querySelector(".form-slider").style.marginLeft="0"}},n.a.createElement("p",{className:"read-rules-back"},"<<Back"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolores odio nobis omnis. Dolor, impedit? Eaque enim illum at."," "),n.a.createElement("p",null,"Exercitationem unde aperiam soluta minus aliquid at deleniti quas facilis ipsam."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolores odio nobis omnis. Dolor, impedit? Eaque enim illum at."," "),n.a.createElement("p",null,"Exercitationem unde aperiam soluta minus aliquid at deleniti quas facilis ipsam."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolores odio nobis omnis. Dolor, impedit? Eaque enim illum at."," "),n.a.createElement("p",null,"Exercitationem unde aperiam soluta minus aliquid at deleniti quas facilis ipsam."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolores odio nobis omnis. Dolor, impedit? Eaque enim illum at."," "),n.a.createElement("p",null,"Exercitationem unde aperiam soluta minus aliquid at deleniti quas facilis ipsam.")))))))};function v(e){(e.target.classList.contains("modal-wrap")||e.target.classList.contains("modal-project-close"))&&(document.querySelectorAll(".modal-wrap").forEach(function(e){e.classList.add("hide")}),document.onkeydown=null)}function g(e){var a=document.forms.loginForm,t=a.pass.value,l=a.email.value;t&&l||(alert("Fill all the fields!"),e.preventDefault())}var f=function(){return n.a.createElement("div",{className:"modal-wrap hide",id:"login",onClick:v},n.a.createElement("div",{className:"modal-project"},n.a.createElement("form",{name:"loginForm"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col l12"},n.a.createElement("input",{placeholder:"Your email",name:"email",id:"login-email",type:"text",className:"validate"}),n.a.createElement("label",{htmlFor:"login-email",className:"active"},"Email")),n.a.createElement("div",{className:"input-field col l12"},n.a.createElement("input",{placeholder:"Your password",name:"pass",id:"login-pass",type:"password"}),n.a.createElement("label",{htmlFor:"login-pass",className:"active"},"Password")),n.a.createElement("div",{className:"col l12 right-align"},n.a.createElement(s.b,{to:"/cabinet",style:{textDecoration:"none",color:"white"}},n.a.createElement("button",{id:"login-submit",className:"waves-effect waves-light btn",onClick:g},"Login"))))),n.a.createElement("button",{className:"modal-project-close btn-floating waves-effect waves-light lighten-1"},"X")))};var h=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o,null),n.a.createElement(E,null),n.a.createElement(f,null))};t(85);var N=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col l12 left-align"},n.a.createElement("h1",{className:"user-cabinet-header"},"User cabinet")),n.a.createElement("div",{className:"col l12  left-align"},n.a.createElement("button",{id:"logout",className:"waves-effect waves-light btn lighten-1"},n.a.createElement(s.b,{to:"/",style:{textDecoration:"none",color:"white"}},"Logout")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col l6"},n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s6"},n.a.createElement("input",{id:"signup-name",type:"text",className:"validate"}),n.a.createElement("label",{className:"active",for:"signup-name"},"Name")),n.a.createElement("div",{className:"input-field col s6"},n.a.createElement("input",{id:"signup-pass",type:"text",className:"validate"}),n.a.createElement("label",{className:"active",for:"signup-pass"},"Password")),n.a.createElement(u.DatePicker,{placeholder:"Your birthday",name:"birthday",id:"signup-birthday",classNameName:"datepicker",options:{}}),n.a.createElement("div",{className:"col l12"},n.a.createElement("p",null,n.a.createElement("label",null,n.a.createElement("input",{name:"group1",type:"radio"}),n.a.createElement("span",null,"Male"))),n.a.createElement("p",null,n.a.createElement("label",null,n.a.createElement("input",{name:"group1",type:"radio"}),n.a.createElement("span",null,"Female"))),n.a.createElement("p",null,n.a.createElement("label",null,n.a.createElement("input",{name:"group1",type:"radio"}),n.a.createElement("span",null,"Other")))),n.a.createElement("div",{className:"col l12 left-align"},n.a.createElement("button",{id:"signup-submit",className:"waves-effect waves-light btn lighten-1"},"Update"))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(s.a,null,n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/",component:h}),n.a.createElement(m.a,{exact:!0,path:"/cabinet",component:N}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.e8b13887.chunk.js.map