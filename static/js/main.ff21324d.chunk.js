(this.webpackJsonpmyreact=this.webpackJsonpmyreact||[]).push([[0],{22:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var c,r,o,i,a=t(1),l=t.n(a),s=t(12),d=t.n(s),u=(t(22),t(5)),f=t(7),b=t(3),j=t(4),g=t(2),h=j.a.div(c||(c=Object(b.a)(["\nmax-width:512px;\nmargin:50px auto;\n.app-title {\n    background:#22b8cf;\n    color:#ffffff;\n    height:4rem;\n    font-size:1.5rem;\n    // display:flex;\n    // align-items:center;\n    // justify-content:center;\n    text-align:center;\n    line-height:4rem;\n}\n.content { background:#fff}\n"]))),x=function(e){var n=e.children;return Object(g.jsxs)(h,{children:[Object(g.jsx)("h1",{className:"app-title",children:"\uc77c\uc815\uad00\ub9ac"}),Object(g.jsx)("div",{className:"content",children:n})]})},O=t(16),m=j.a.div(r||(r=Object(b.a)(["\n.TodoInsert {\n    background:#495057;\n    display:flex;\n    input { \n        background:none;\n        outline:none;\n        border:none;\n        padding:0.5rem;\n        font-size:1.125rem;\n        line-height:1.5;\n        color:#fff;\n        flex:1;\n        &::placeholder {color:#dee2e6;}\n    }\n    button {\n        background:#868e96;\n        outline:none;\n        border:none;\n        color:#fff;\n        padding: 0px 20px;\n        font-size:1.5rem;\n        cursor:pointer;\n        &:hover {background:#adb5bd;}\n    }\n}\n"]))),p=function(e){var n=e.onInsert,t=Object(a.useRef)(""),c=Object(a.useState)(""),r=Object(f.a)(c,2),o=r[0],i=r[1];return Object(g.jsx)(m,{children:Object(g.jsxs)("form",{className:"TodoInsert",onSubmit:function(e){e.preventDefault(),n(o),i(""),t.current.focus()},children:[Object(g.jsx)("input",{type:"text",placeholder:"\ud560\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:o,onChange:function(e){i(e.target.value)},ref:t}),Object(g.jsx)("button",{type:"submit",children:Object(g.jsx)(O.a,{})})]})})},v=t(17),k=t.n(v),S=t(8),y=j.a.div(o||(o=Object(b.a)(["\n    padding:1rem;\n    display:flex;\n    align-items:center;\n    &:nth-child(even) { background:#f8f9fa}\n    & + &{ border-top:1px solid #dee2e6}\n    .list { flex:1;\n        display:flex;\n        align-items:center;\n        .red { color:#ff0000}\n        .text { \n            magin-left:0.5rem;\n            &.checked {text-decoration:line-through; \n            color:red;\n            }\n        }\n    }\n    .remove { color:#ff6b6b;\n        cursor:pointer;\n        font-size:1.5rem;\n    }\n"]))),N=function(e){var n=e.todo,t=e.onToggle,c=e.onRemove,r=n.id,o=n.text,i=n.checked;return Object(g.jsxs)(y,{children:[Object(g.jsxs)("div",{className:"list",onClick:function(){return t(r)},children:[i?Object(g.jsx)(S.a,{className:"red"}):Object(g.jsx)(S.b,{}),Object(g.jsx)("div",{className:k()("text",{checked:i}),children:o})]}),Object(g.jsx)("div",{className:"remove",onClick:function(){return c(r)},children:Object(g.jsx)(S.c,{})})]})},C=j.a.div(i||(i=Object(b.a)(["\n    min-height:320px;\n    max-height:513px;\n    overflow-y:auto;\n"]))),J=function(e){var n=e.todos,t=e.onToggle,c=e.onRemove;return Object(g.jsx)(C,{children:n.map((function(e){return Object(g.jsx)(N,{todo:e,onToggle:t,onRemove:c},e.id)}))})},T=function(){var e=Object(a.useState)([]),n=Object(f.a)(e,2),t=n[0],c=n[1],r=Object(a.useRef)(1),o=Object(a.useCallback)((function(e){c(t.map((function(n){return n.id===e?Object(u.a)(Object(u.a)({},n),{},{checked:!n.checked}):n}))),localStorage.kim=JSON.stringify(t.map((function(n){return n.id===e?Object(u.a)(Object(u.a)({},n),{},{checked:!n.checked}):n})))}),[t]),i=Object(a.useCallback)((function(e){var n={id:r.current,text:e,checked:!1};r.current=r.current+1,c(t.concat(n)),localStorage.kim=JSON.stringify(t.concat(n)),localStorage.nextid=JSON.stringify(r.current)}),[t]),l=Object(a.useCallback)((function(e){c(t.filter((function(n){return n.id!==e}))),localStorage.kim=JSON.stringify(t.filter((function(n){return n.id!==e})))}),[t]);return Object(a.useEffect)((function(){var e=localStorage.kim,n=localStorage.nextid;e&&(c(t.concat(JSON.parse(e))),r.current=JSON.parse(n))}),[]),Object(g.jsxs)(x,{children:[Object(g.jsx)(p,{onInsert:i}),Object(g.jsx)(J,{todos:t,onToggle:o,onRemove:l})]})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),o(e),i(e)}))};d.a.render(Object(g.jsx)(l.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root")),I()}},[[26,1,2]]]);
//# sourceMappingURL=main.ff21324d.chunk.js.map