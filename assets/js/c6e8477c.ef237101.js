(window.webpackJsonp=window.webpackJsonp||[]).push([[800],{1112:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),o=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),d=o(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||i;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},873:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return o}));var r=n(3),a=n(8),i=(n(0),n(1112)),c={id:"knex.knex-1.seederconfig",title:"Interface: SeederConfig<V>",sidebar_label:"SeederConfig",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/interfaces/knex.knex-1.seederconfig",id:"version-4.5/api/interfaces/knex.knex-1.seederconfig",isDocsHomePage:!1,title:"Interface: SeederConfig<V>",description:"Interface: SeederConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.seederconfig.md",slug:"/api/interfaces/knex.knex-1.seederconfig",permalink:"/docs/api/interfaces/knex.knex-1.seederconfig",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1616321914,formattedLastUpdatedAt:"3/21/2021",sidebar_label:"SeederConfig",sidebar:"version-4.5/API",previous:{title:"Interface: SchemaBuilder",permalink:"/docs/api/interfaces/knex.knex-1.schemabuilder"},next:{title:"Interface: Select<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex-1.select"}},b=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Properties",id:"properties",children:[{value:"directory",id:"directory",children:[]},{value:"extension",id:"extension",children:[]},{value:"loadExtensions",id:"loadextensions",children:[]},{value:"recursive",id:"recursive",children:[]},{value:"sortDirsSeparately",id:"sortdirsseparately",children:[]},{value:"specific",id:"specific",children:[]},{value:"stub",id:"stub",children:[]},{value:"timestampFilenamePrefix",id:"timestampfilenameprefix",children:[]},{value:"variables",id:"variables",children:[]}]}],p={toc:b};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-seederconfigv"},"Interface: SeederConfig<V",">"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".SeederConfig"),Object(i.b)("h2",{id:"type-parameters"},"Type parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"V")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"object")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"any"))))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"directory"},"directory"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"directory"),": ",Object(i.b)("em",{parentName:"p"},"string")," ","|"," readonly ",Object(i.b)("em",{parentName:"p"},"string"),"[]"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2148"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"extension"},"extension"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"extension"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2147"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"loadextensions"},"loadExtensions"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"loadExtensions"),": readonly ",Object(i.b)("em",{parentName:"p"},"string"),"[]"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2149"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"recursive"},"recursive"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"recursive"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2152"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"sortdirsseparately"},"sortDirsSeparately"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"sortDirsSeparately"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2153"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"specific"},"specific"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"specific"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2150"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"stub"},"stub"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"stub"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2154"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"timestampfilenameprefix"},"timestampFilenamePrefix"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"timestampFilenamePrefix"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2151"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"variables"},"variables"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"variables"),": V"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2155"))}o.isMDXComponent=!0}}]);