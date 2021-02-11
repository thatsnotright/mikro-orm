(window.webpackJsonp=window.webpackJsonp||[]).push([[845],{1048:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),o=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=o(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=o(n),u=r,f=s["".concat(i,".").concat(u)]||s[u]||m[u]||c;return n?a.a.createElement(f,b(b({ref:t},l),{},{components:n})):a.a.createElement(f,b({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=u;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},917:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return o}));var r=n(3),a=n(8),c=(n(0),n(1048)),i={id:"knex.column",title:"Interface: Column",sidebar_label:"Column",custom_edit_url:null,hide_title:!0},b={unversionedId:"api/interfaces/knex.column",id:"api/interfaces/knex.column",isDocsHomePage:!1,title:"Interface: Column",description:"Interface: Column",source:"@site/docs/api/interfaces/knex.column.md",slug:"/api/interfaces/knex.column",permalink:"/docs/next/api/interfaces/knex.column",editUrl:null,version:"current",sidebar_label:"Column",sidebar:"API",previous:{title:"Interface: WithWrapped<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-1.withwrapped"},next:{title:"Interface: ForeignKey",permalink:"/docs/next/api/interfaces/knex.foreignkey"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"defaultValue",id:"defaultvalue",children:[]},{value:"enumItems",id:"enumitems",children:[]},{value:"fk",id:"fk",children:[]},{value:"fks",id:"fks",children:[]},{value:"indexes",id:"indexes",children:[]},{value:"maxLength",id:"maxlength",children:[]},{value:"name",id:"name",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"primary",id:"primary",children:[]},{value:"type",id:"type",children:[]},{value:"unique",id:"unique",children:[]}]}],l={toc:p};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-column"},"Interface: Column"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".Column"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Column"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"defaultvalue"},"defaultValue"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"defaultValue"),": ",Object(c.b)("em",{parentName:"p"},"null")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/56e1e1f/packages/knex/src/typings.ts#L40"},"packages/knex/src/typings.ts:40")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"enumitems"},"enumItems"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"enumItems"),": ",Object(c.b)("em",{parentName:"p"},"string"),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/56e1e1f/packages/knex/src/typings.ts#L41"},"packages/knex/src/typings.ts:41")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"fk"},"fk"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"fk"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.foreignkey"},Object(c.b)("em",{parentName:"a"},"ForeignKey"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/56e1e1f/packages/knex/src/typings.ts#L33"},"packages/knex/src/typings.ts:33")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"fks"},"fks"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"fks"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.foreignkey"},Object(c.b)("em",{parentName:"a"},"ForeignKey")),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/56e1e1f/packages/knex/src/typings.ts#L34"},"packages/knex/src/typings.ts:34")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"indexes"},"indexes"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"indexes"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.index"},Object(c.b)("em",{parentName:"a"},"Index")),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/56e1e1f/packages/knex/src/typings.ts#L35"},"packages/knex/src/typings.ts:35")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"maxlength"},"maxLength"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"maxLength"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/56e1e1f/packages/knex/src/typings.ts#L39"},"packages/knex/src/typings.ts:39")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/56e1e1f/packages/knex/src/typings.ts#L31"},"packages/knex/src/typings.ts:31")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"nullable"},"nullable"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"nullable"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/56e1e1f/packages/knex/src/typings.ts#L38"},"packages/knex/src/typings.ts:38")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"primary"},"primary"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"primary"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/56e1e1f/packages/knex/src/typings.ts#L36"},"packages/knex/src/typings.ts:36")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"type"},"type"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"type"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/56e1e1f/packages/knex/src/typings.ts#L32"},"packages/knex/src/typings.ts:32")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"unique"},"unique"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"unique"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/56e1e1f/packages/knex/src/typings.ts#L37"},"packages/knex/src/typings.ts:37")))}o.isMDXComponent=!0}}]);