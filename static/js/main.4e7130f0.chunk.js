(this["webpackJsonpspa-react-food"]=this["webpackJsonpspa-react-food"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(18),r=c.n(s),i=(c(25),c(4)),j=c(2),o=(c(26),c(0));function l(){return Object(o.jsxs)("div",{className:"ui secondary menu container",children:[Object(o.jsx)(i.b,{to:"/",className:"item",children:"Home"}),Object(o.jsx)(i.b,{to:"/about",className:"item",children:"About"}),Object(o.jsx)(i.b,{to:"/contacts",className:"item",children:"Contacts"}),Object(o.jsx)("div",{className:"right menu",children:Object(o.jsx)("a",{href:"https://github.com/dkihada/spa-react-food",target:"_blank",className:"item",children:"REPO"})})]})}function d(){return Object(o.jsx)("div",{className:"ui inverted vertical footer segment form-page",children:Object(o.jsx)("div",{className:"ui container",children:"SPA React Project Portfolio"})})}c(33);var u=c(8),b=c(10),h=c.n(b),O=c(13),m="https://www.themealdb.com/api/json/v1/".concat("1","/"),x=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"lookup.php?i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"filter.php?c="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function v(){return Object(o.jsx)("div",{className:"ui active inverted dimmer",children:Object(o.jsx)("div",{className:"ui large text loader",children:"Loading"})})}var g=c(12);function N(e){e.idCategory;var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(o.jsx)("div",{className:"four wide column",children:Object(o.jsxs)("div",{className:"ui card ",children:[Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{src:c,alt:t})}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)(i.b,{to:"/category/".concat(t),className:"header",children:t}),Object(o.jsxs)("div",{className:"description",children:[n.slice(0,60),"..."]})]}),Object(o.jsx)("div",{className:"extra content",children:Object(o.jsx)(i.b,{to:"/category/".concat(t),children:Object(o.jsxs)("div",{className:"ui animated button",children:[Object(o.jsx)("div",{className:"visible content",children:"Watch category"}),Object(o.jsx)("div",{className:"hidden content",children:Object(o.jsx)("i",{className:"right arrow icon"})})]})})})]})})}function y(e){var t=e.catalog,c=void 0===t?[]:t;return Object(o.jsx)("div",{className:"ui grid container",children:c.map((function(e){return Object(o.jsx)(N,Object(g.a)({},e),e.idCategory)}))})}function w(e){var t=e.searchCategory,c=void 0===t?Function.prototype:t,a=Object(n.useState)(""),s=Object(u.a)(a,2),r=s[0],i=s[1],j=function(){c(r)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"item",style:{marginBottom:"20px"},children:Object(o.jsxs)("div",{className:"ui icon input container",children:[Object(o.jsx)("input",{onChange:function(e){i(e.target.value)},value:r,onKeyDown:function(e){"Enter"===e.key&&j()},type:"text",placeholder:"Search category..."}),Object(o.jsx)("i",{onClick:j,className:"search link icon"})]})})})}function C(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(u.a)(s,2),i=r[0],l=r[1],d=Object(j.g)(),b=d.pathname,h=d.search,O=Object(j.f)().push;return Object(n.useEffect)((function(){f().then((function(e){a(e.categories),l(h?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(h.split("=")[1].toLocaleLowerCase())})):e.categories)}))}),[h]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(w,{searchCategory:function(e){l(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O({pathname:b,search:"?search=".concat(e)})}}),c.length?Object(o.jsx)(y,{catalog:i}):Object(o.jsx)(v,{})]})}function k(){return Object(o.jsx)("h1",{children:"Hello, from About"})}function M(){return Object(o.jsx)("h1",{children:"Hello, from Contacts"})}function S(e){var t=e.strMeal,c=e.idMeal,n=e.strMealThumb;return Object(o.jsx)("div",{className:"flex four wide column",children:Object(o.jsxs)("div",{className:"ui card ",children:[Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{src:n,alt:t})}),Object(o.jsx)("div",{className:"content content-item",children:Object(o.jsx)(i.b,{to:"/meal/".concat(c),className:"header",children:t})}),Object(o.jsx)("div",{className:"extra content",children:Object(o.jsx)(i.b,{to:"/meal/".concat(c),children:Object(o.jsxs)("div",{className:"ui animated button",children:[Object(o.jsx)("div",{className:"visible content",children:"Watch recipe"}),Object(o.jsx)("div",{className:"hidden content",children:Object(o.jsx)("i",{className:"right arrow icon"})})]})})})]})})}function A(e){var t=e.meals;return Object(o.jsx)("div",{className:"ui grid container",children:t.map((function(e){return Object(o.jsx)(S,Object(g.a)({},e),e.idMeal)}))})}function B(){var e=Object(j.h)().name,t=Object(n.useState)([]),c=Object(u.a)(t,2),a=c[0],s=c[1],r=Object(j.f)().goBack;return Object(n.useEffect)((function(){p(e).then((function(e){return s(e.meals)}))}),[e]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"ui grid container",children:Object(o.jsxs)("div",{onClick:r,className:"ui animated button left floated",children:[Object(o.jsx)("div",{className:"visible content",children:"Go Back"}),Object(o.jsx)("div",{className:"hidden content",children:Object(o.jsx)("i",{className:"left arrow icon"})})]})}),a.length?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:e}),Object(o.jsx)(A,{meals:a})]}):Object(o.jsx)(v,{})]})}function E(){var e=Object(j.h)().id,t=Object(n.useState)({}),c=Object(u.a)(t,2),a=c[0],s=c[1],r=Object(j.f)().goBack;return Object(n.useEffect)((function(){x(e).then((function(e){return s(e.meals[0])}))}),[e]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"ui grid container btn-back",children:Object(o.jsxs)("div",{onClick:r,className:"ui animated button left floated",children:[Object(o.jsx)("div",{className:"visible content",children:"Go Back"}),Object(o.jsx)("div",{className:"hidden content",children:Object(o.jsx)("i",{className:"left arrow icon"})})]})}),a.idMeal?Object(o.jsx)("div",{className:"ui grid container",children:Object(o.jsxs)("div",{className:"ui piled segment",children:[Object(o.jsx)("h2",{className:"ui header",children:a.strMeal}),a.strArea?Object(o.jsx)("div",{className:"extra",children:a.strArea}):null,Object(o.jsx)("div",{className:"recipe-body",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:a.strMealThumb,alt:a.strMeal}),Object(o.jsx)("h3",{children:"Recipe:"}),a.strInstructions]})}),Object(o.jsxs)("table",{className:"ui olive table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Ingredient"}),Object(o.jsx)("th",{children:"Measure"})]})}),Object(o.jsx)("tbody",{children:Object.keys(a).map((function(e){if(e.includes("Ingredient")&&a[e]){var t=a[e][0].toUpperCase()+a[e].slice(1);return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t}),Object(o.jsx)("td",{children:a["strMeasure".concat(e.slice(13))]})]},e)}return null}))})]}),a.strYoutube?Object(o.jsxs)("div",{className:"ui left floated padded left aligned vertical segment",children:[Object(o.jsx)("h2",{children:"Video Recipe"}),Object(o.jsx)("iframe",{width:"550px",height:"300px",title:a.strMeal,src:"https://www.youtube.com/embed/".concat(a.strYoutube.slice(-11))})]}):null]})}):Object(o.jsx)(v,{})]})}function F(){return Object(o.jsx)("h1",{children:"Page not found!"})}var L=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(i.a,{basename:"/spa-react-food",children:[Object(o.jsx)(l,{}),Object(o.jsx)("main",{className:"content-main-page",children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:C}),Object(o.jsx)(j.a,{path:"/about",component:k}),Object(o.jsx)(j.a,{path:"/contacts",component:M}),Object(o.jsx)(j.a,{path:"/category/:name",component:B}),Object(o.jsx)(j.a,{path:"/meal/:id",component:E}),Object(o.jsx)(j.a,{component:F})]})}),Object(o.jsx)(d,{})]})})};c(35);r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.4e7130f0.chunk.js.map