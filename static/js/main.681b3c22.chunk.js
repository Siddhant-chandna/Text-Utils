(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),o=a.n(c),s=a(15),n=a.n(s),l=(a(22),a(7)),i=(a(23),a(0));function r(){var e=Object(c.useState)({color:"black",backgroundColor:"white"}),t=Object(l.a)(e,2),a=t[0],o=t[1],s=Object(c.useState)("Enable Dark Mode"),n=Object(l.a)(s,2),r=n[0],d=n[1];return Object(i.jsxs)("div",{className:"container",style:a,children:[Object(i.jsx)("h1",{className:"my-3",children:"About Us"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",style:a,children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:a,children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:a,children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:a,children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("button",{onClick:function(){"black"===a.color?(o({color:"white",backgroundColor:"black"}),d("Enable Light Mode")):(o({color:"black",backgroundColor:"white"}),d("Enable Dark Mode"))},type:"button",className:"btn btn-dark my-3",children:r})})]})}var d=a(9);function b(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/home",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link",to:"/about",children:e.about})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.togglemode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function h(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),o=a[0],s=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"#011b41":"white"},children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",value:o,onChange:function(e){console.log("Clicked"),s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#454344":"white",color:"light"===e.mode?"#011b41":"white"},id:"myBox",rows:"5"})}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=o.toUpperCase();s(t),e.ShowAlert("Converted to UpperCase","success")},children:"Convert to UpperCase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=o.toLowerCase();s(t),e.ShowAlert("Converted to LowerCase","success")},children:"Convert to LowerCase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.ShowAlert("Text Copied","info")},children:"Copy"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=o.split(/[ ]+/);s(t.join(" ")),e.ShowAlert("Extra Space Removed","success")},children:"Clear Extra Spaces"}),Object(i.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(){s(""),e.ShowAlert("TextArea Cleared","warning")},children:"Clear"})]}),Object(i.jsxs)("div",{className:"container my-3",style:{color:"light"===e.mode?"#011b41":"white"},children:[Object(i.jsx)("h3",{children:"Your Text Summary Is"}),Object(i.jsxs)("p",{children:[o.length," Letters and ",o.split(" ").length," Words"]}),Object(i.jsxs)("p",{children:[.008*o.split(" ").length," minutes is needed to read the above Text"]}),Object(i.jsx)("h3",{children:"Preview"}),Object(i.jsx)("p",{children:o})]})]})}function j(e){return e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})}b.defaultProps={title:"Set Title",about:"Set About"};var m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],o=t[1],s=Object(c.useState)(null),n=Object(l.a)(s,2),u=n[0],p=n[1],x=function(e,t){p({msg:e,type:t}),setTimeout((function(){p(null)}),1e3)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(d.a,{children:[Object(i.jsx)(b,{title:"TextUtils",about:"About",mode:a,togglemode:function(){"dark"===a?(o("light"),document.body.style.backgroundColor="white",x("Light mode has been Enabled","success")):(o("dark"),document.body.style.backgroundColor="#011b41",x("Dark mode has been Enabled","success"))}}),"                     ",Object(i.jsx)(j,{alert:u}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{exact:!0,path:"/about",children:Object(i.jsx)(r,{})}),Object(i.jsx)(m.a,{exact:!0,path:"/home",children:Object(i.jsx)(h,{ShowAlert:x,heading:"Enter Text in textArea",mode:a})}),Object(i.jsx)(m.a,{exact:!0,path:"/",children:Object(i.jsx)(h,{ShowAlert:x,heading:"Enter Text in textArea",mode:a})})]})})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),o(e),s(e),n(e)}))};n.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.681b3c22.chunk.js.map