(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),i=n(4),l=n(5),s=n(7),u=n(6),b=n(1),m=(n(13),function(t){var e=t.tabs,n=t.onClick;return e.map((function(t){return c.a.createElement("button",{className:"btn btn-primary",key:t.id,type:"button",onClick:function(){n(t.id)}},t.title)}))}),d=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}].map((function(t,e){return Object(b.a)(Object(b.a)({},t),{},{id:e})})),p=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={tabsOnPage:d,selectedTabContent:""},t.onTabSelected=function(e){t.setState((function(t){return{selectedTabContent:t.tabsOnPage.find((function(t){return t.id===e})).content}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.selectedTabContent,n=t.tabsOnPage;return c.a.createElement("div",{className:"position-absolute top-50 start-50 translate-middle"},c.a.createElement("div",{className:"btn-group",role:"group"},c.a.createElement(m,{tabs:n,onClick:this.onTabSelected})),c.a.createElement("p",null,e))}}]),n}(c.a.Component);o.a.render(c.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.86f38e78.chunk.js.map