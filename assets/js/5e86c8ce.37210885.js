(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{1052:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),f=p(r),d=n,s=f["".concat(i,".").concat(d)]||f[d]||u[d]||c;return r?a.a.createElement(s,l(l({ref:t},o),{},{components:r})):a.a.createElement(s,l({ref:t},o))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<c;o++)i[o]=r[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},418:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),c=(r(0),r(1052)),i={id:"knex.knex-1.refbuilder",title:"Interface: RefBuilder",sidebar_label:"RefBuilder",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/interfaces/knex.knex-1.refbuilder",id:"api/interfaces/knex.knex-1.refbuilder",isDocsHomePage:!1,title:"Interface: RefBuilder",description:"Interface: RefBuilder",source:"@site/docs/api/interfaces/knex.knex-1.refbuilder.md",slug:"/api/interfaces/knex.knex-1.refbuilder",permalink:"/docs/next/api/interfaces/knex.knex-1.refbuilder",editUrl:null,version:"current",sidebar_label:"RefBuilder",sidebar:"API",previous:{title:"Interface: Ref<TSrc, TMapping>",permalink:"/docs/next/api/interfaces/knex.knex-1.ref"},next:{title:"Interface: ReferencingColumnBuilder",permalink:"/docs/next/api/interfaces/knex.knex-1.referencingcolumnbuilder"}},b=[{value:"Callable",id:"callable",children:[]}],o={toc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-refbuilder"},"Interface: RefBuilder"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex.knex-1"},"Knex"),".RefBuilder"),Object(c.b)("h2",{id:"callable"},"Callable"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"RefBuilder"),"<TSrc",">","(",Object(c.b)("inlineCode",{parentName:"p"},"src"),": TSrc): ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.knex-1.ref"},Object(c.b)("em",{parentName:"a"},"Ref")),"<TSrc, { ","[K in string]",": TSrc}",">"),Object(c.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"TSrc")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"src")),Object(c.b)("td",{parentName:"tr",align:"left"},"TSrc")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.knex-1.ref"},Object(c.b)("em",{parentName:"a"},"Ref")),"<TSrc, { ","[K in string]",": TSrc}",">"),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1540"))}p.isMDXComponent=!0}}]);