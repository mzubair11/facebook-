(this.webpackJsonpfacebook=this.webpackJsonpfacebook||[]).push([[0],{11:function(e,t,n){e.exports=n(22)},17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),l=n(10),u=n(4);var m=function(){return c.a.createElement("header",null,c.a.createElement("h1",null,"Facebook"))};var i=function(e){return c.a.createElement("div",{className:"post"},c.a.createElement("p",null,e.content))},s=n(3),f=n(5);var b=function(e){var t=Object(a.useState)({content:""}),n=Object(u.a)(t,2),r=n[0],o=n[1];return c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("textarea",{name:"content",onChange:function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(s.a)({},n,a))}))},value:r.content,placeholder:"Write something here...",rows:"5"}),c.a.createElement("button",{className:"postButton",onClick:function(t){e.onAdd(r),o({content:""}),t.preventDefault()}},"POST"),c.a.createElement("button",{className:"gifButton"},"GIF")))},E=(n(17),n(9));var v=function(){return c.a.createElement("div",{className:"searchboxWrapper"},c.a.createElement(E.a,{apiKey:"9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7",onSelect:function(e){return console.log(e)},masonryConfig:[{columns:5,imageWidth:90,gutter:5},{mq:"700px",columns:5,imageWidth:90,gutter:5}]}))};var p=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",null,c.a.createElement(m,null),c.a.createElement(b,{onAdd:function(e){r((function(t){return[].concat(Object(l.a)(t),[e])}))}}),n.map((function(e,t){return c.a.createElement(i,{key:t,content:e.content})})),c.a.createElement(v,null))};o.a.render(c.a.createElement(p,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c1e63731.chunk.js.map