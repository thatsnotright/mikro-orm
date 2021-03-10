(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{1052:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),c=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var p=c.a.createContext({}),u=function(e){var r=c.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return c.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},d=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),d=n,f=l["".concat(a,".").concat(d)]||l[d]||b[d]||o;return t?c.a.createElement(f,i(i({ref:r},p),{},{components:t})):c.a.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<o;p++)a[p]=t[p];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},425:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(3),c=t(8),o=(t(0),t(1052)),a={id:"core.queryresult",title:"Interface: QueryResult",sidebar_label:"QueryResult",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/core.queryresult",id:"api/interfaces/core.queryresult",isDocsHomePage:!1,title:"Interface: QueryResult",description:"Interface: QueryResult",source:"@site/docs/api/interfaces/core.queryresult.md",slug:"/api/interfaces/core.queryresult",permalink:"/docs/next/api/interfaces/core.queryresult",editUrl:null,version:"current",sidebar_label:"QueryResult",sidebar:"API",previous:{title:"Interface: QueryOrderMap",permalink:"/docs/next/api/interfaces/core.queryordermap"},next:{title:"Interface: ReferenceOptions<T, O>",permalink:"/docs/next/api/interfaces/core.referenceoptions"}},s=[{value:"Properties",id:"properties",children:[{value:"affectedRows",id:"affectedrows",children:[]},{value:"insertId",id:"insertid",children:[]},{value:"row",id:"row",children:[]},{value:"rows",id:"rows",children:[]}]}],p={toc:s};function u(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-queryresult"},"Interface: QueryResult"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".QueryResult"),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"affectedrows"},"affectedRows"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"affectedRows"),": ",Object(o.b)("em",{parentName:"p"},"number")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/dce2643/packages/core/src/connections/Connection.ts#L127"},"packages/core/src/connections/Connection.ts:127")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"insertid"},"insertId"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"insertId"),": ",Object(o.b)("em",{parentName:"p"},"number")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/dce2643/packages/core/src/connections/Connection.ts#L128"},"packages/core/src/connections/Connection.ts:128")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"row"},"row"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"row"),": ",Object(o.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(o.b)("em",{parentName:"a"},"Dictionary")),"<any",">"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/dce2643/packages/core/src/connections/Connection.ts#L129"},"packages/core/src/connections/Connection.ts:129")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"rows"},"rows"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"rows"),": ",Object(o.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(o.b)("em",{parentName:"a"},"Dictionary")),"<any",">","[]"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/dce2643/packages/core/src/connections/Connection.ts#L130"},"packages/core/src/connections/Connection.ts:130")))}u.isMDXComponent=!0}}]);