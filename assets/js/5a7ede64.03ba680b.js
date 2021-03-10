(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{1052:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(t),d=r,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return t?a.a.createElement(m,o(o({ref:n},l),{},{components:t})):a.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},401:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(8),i=(t(0),t(1052)),c={id:"knex.knex.functionhelper",title:"Interface: FunctionHelper",sidebar_label:"FunctionHelper",hide_title:!0},o={unversionedId:"api/interfaces/knex.knex.functionhelper",id:"version-4.4/api/interfaces/knex.knex.functionhelper",isDocsHomePage:!1,title:"Interface: FunctionHelper",description:"Interface: FunctionHelper",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.functionhelper.md",slug:"/api/interfaces/knex.knex.functionhelper",permalink:"/docs/api/interfaces/knex.knex.functionhelper",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.functionhelper.md",version:"4.4",lastUpdatedBy:"Huynh Ninh Binh",lastUpdatedAt:1615384707,sidebar_label:"FunctionHelper",sidebar:"version-4.4/API",previous:{title:"Interface: ForeignConstraintBuilder",permalink:"/docs/api/interfaces/knex.knex.foreignconstraintbuilder"},next:{title:"Interface: GroupBy<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.groupby"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"now",id:"now",children:[]}]}],l={toc:p};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-functionhelper"},"Interface: FunctionHelper"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".FunctionHelper"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"FunctionHelper"))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"now"},"now"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"now"),"(",Object(i.b)("inlineCode",{parentName:"p"},"precision?"),": ",Object(i.b)("em",{parentName:"p"},"number"),"): ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.raw"},Object(i.b)("em",{parentName:"a"},"Raw")),"<",Object(i.b)("em",{parentName:"p"},"any"),">"),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"precision?")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"number"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.raw"},Object(i.b)("em",{parentName:"a"},"Raw")),"<",Object(i.b)("em",{parentName:"p"},"any"),">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2160"))}b.isMDXComponent=!0}}]);