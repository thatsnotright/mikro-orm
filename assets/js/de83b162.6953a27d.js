(window.webpackJsonp=window.webpackJsonp||[]).push([[897],{1112:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(t),d=r,f=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return t?a.a.createElement(f,c(c({ref:n},p),{},{components:t})):a.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},970:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(8),i=(t(0),t(1112)),o={id:"knex.knex-1.foreignconstraintbuilder",title:"Interface: ForeignConstraintBuilder",sidebar_label:"ForeignConstraintBuilder",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/knex.knex-1.foreignconstraintbuilder",id:"version-4.5/api/interfaces/knex.knex-1.foreignconstraintbuilder",isDocsHomePage:!1,title:"Interface: ForeignConstraintBuilder",description:"Interface: ForeignConstraintBuilder",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.foreignconstraintbuilder.md",slug:"/api/interfaces/knex.knex-1.foreignconstraintbuilder",permalink:"/docs/api/interfaces/knex.knex-1.foreignconstraintbuilder",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1616321914,formattedLastUpdatedAt:"3/21/2021",sidebar_label:"ForeignConstraintBuilder",sidebar:"version-4.5/API",previous:{title:"Interface: EnumOptions",permalink:"/docs/api/interfaces/knex.knex-1.enumoptions"},next:{title:"Interface: FunctionHelper",permalink:"/docs/api/interfaces/knex.knex-1.functionhelper"}},l=[{value:"Methods",id:"methods",children:[{value:"references",id:"references",children:[]}]}],p={toc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-foreignconstraintbuilder"},"Interface: ForeignConstraintBuilder"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".ForeignConstraintBuilder"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"references"},"references"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"references"),"(",Object(i.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(i.b)("em",{parentName:"p"},"string"),"): ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.referencingcolumnbuilder"},Object(i.b)("em",{parentName:"a"},"ReferencingColumnBuilder"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"columnName")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"string"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.referencingcolumnbuilder"},Object(i.b)("em",{parentName:"a"},"ReferencingColumnBuilder"))),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1822"))}b.isMDXComponent=!0}}]);