(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{1051:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),i=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},o=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=i(a),o=r,O=s["".concat(c,".").concat(o)]||s[o]||d[o]||b;return a?n.a.createElement(O,l(l({ref:t},m),{},{components:a})):n.a.createElement(O,l({ref:t},m))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=o;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var m=2;m<b;m++)c[m]=a[m];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},216:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return i}));var r=a(3),n=a(8),b=(a(0),a(1051)),c={id:"knex.knex-1.asymmetricaggregation",title:"Interface: AsymmetricAggregation<TRecord, TResult, TValue>",sidebar_label:"AsymmetricAggregation",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/interfaces/knex.knex-1.asymmetricaggregation",id:"api/interfaces/knex.knex-1.asymmetricaggregation",isDocsHomePage:!1,title:"Interface: AsymmetricAggregation<TRecord, TResult, TValue>",description:"Interface: AsymmetricAggregation",source:"@site/docs/api/interfaces/knex.knex-1.asymmetricaggregation.md",slug:"/api/interfaces/knex.knex-1.asymmetricaggregation",permalink:"/docs/next/api/interfaces/knex.knex-1.asymmetricaggregation",editUrl:null,version:"current",sidebar_label:"AsymmetricAggregation",sidebar:"API",previous:{title:"Interface: As<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-1.as"},next:{title:"Interface: BatchInsertBuilder<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-1.batchinsertbuilder"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Callable",id:"callable",children:[]}],m={toc:p};function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-asymmetricaggregationtrecord-tresult-tvalue"},"Interface: AsymmetricAggregation<TRecord, TResult, TValue",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex.knex-1"},"Knex"),".AsymmetricAggregation"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TRecord")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"unknown"),"[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TValue")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("h2",{id:"callable"},"Callable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"AsymmetricAggregation"),"<TResult2",">","(...",Object(b.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly keyof ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex.knex-1#resolvetabletype"},Object(b.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(b.b)("em",{parentName:"p"},"base"),">","[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(b.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult",">"," ",Object(b.b)("em",{parentName:"td"},"extends")," ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps, TUnionProps",">"," ? ",Object(b.b)("em",{parentName:"td"},"true")," ",Object(b.b)("em",{parentName:"td"},"extends")," THasSelect ? ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps & ",Object(b.b)("em",{parentName:"td"},"Dict"),"<TValue",">",", TUnionProps",">"," : ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<{}, never, ",Object(b.b)("em",{parentName:"td"},"true"),", {}, ",Object(b.b)("em",{parentName:"td"},"false"),", Dict<TValue",">",", never",">"," : ",Object(b.b)("em",{parentName:"td"},"Dict"),"<TValue",">",">")))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"...columnNames")),Object(b.b)("td",{parentName:"tr",align:"left"},"readonly keyof ",Object(b.b)("a",{parentName:"td",href:"/docs/next/api/modules/knex.knex-1#resolvetabletype"},Object(b.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(b.b)("em",{parentName:"td"},"base"),">","[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1330"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"AsymmetricAggregation"),"<TAliases, TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"aliases"),": TAliases): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TAliases")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"object")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"Record"),"<string, string ","|"," string[] ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.knex-1.raw"},Object(b.b)("em",{parentName:"a"},"Raw")),"<any",">",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(b.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult",">"," ",Object(b.b)("em",{parentName:"td"},"extends")," ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps, TUnionProps",">"," ? ",Object(b.b)("em",{parentName:"td"},"true")," ",Object(b.b)("em",{parentName:"td"},"extends")," THasSelect ? ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps & { ","[k in string ","|"," number ","|"," symbol]","?: TValue}, TUnionProps",">"," : ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<{}, never, ",Object(b.b)("em",{parentName:"td"},"true"),", {}, ",Object(b.b)("em",{parentName:"td"},"false"),", { ","[k in string ","|"," number ","|"," symbol]","?: TValue}, never",">"," : { ","[k in string ","|"," number ","|"," symbol]","?: TValue}",">")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"aliases")),Object(b.b)("td",{parentName:"tr",align:"left"},"TAliases")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1333"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"AsymmetricAggregation"),"<TResult2",">","(...",Object(b.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly (",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.knex-1.raw"},Object(b.b)("em",{parentName:"a"},"Raw")),"<any",">"," ","|"," ",Object(b.b)("em",{parentName:"p"},"Readonly"),"<Record<string, string ","|"," string[] ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.knex-1.raw"},Object(b.b)("em",{parentName:"a"},"Raw")),"<any",">",">",">",")[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(b.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult",">"," ",Object(b.b)("em",{parentName:"td"},"extends")," ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps, TUnionProps",">"," ? ",Object(b.b)("em",{parentName:"td"},"true")," ",Object(b.b)("em",{parentName:"td"},"extends")," THasSelect ? ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps & ",Object(b.b)("em",{parentName:"td"},"Dict"),"<TValue",">",", TUnionProps",">"," : ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<{}, never, ",Object(b.b)("em",{parentName:"td"},"true"),", {}, ",Object(b.b)("em",{parentName:"td"},"false"),", Dict<TValue",">",", never",">"," : ",Object(b.b)("em",{parentName:"td"},"Dict"),"<TValue",">",">")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"...columnNames")),Object(b.b)("td",{parentName:"tr",align:"left"},"readonly (",Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.knex-1.raw"},Object(b.b)("em",{parentName:"a"},"Raw")),"<any",">"," ","|"," ",Object(b.b)("em",{parentName:"td"},"Readonly"),"<Record<string, string ","|"," string[] ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.knex-1.raw"},Object(b.b)("em",{parentName:"a"},"Raw")),"<any",">",">",">",")[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1337"))}i.isMDXComponent=!0}}]);