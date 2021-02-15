(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1051:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(1051)),i={title:"Lifecycle hooks"},c={unversionedId:"lifecycle-hooks",id:"version-2.7/lifecycle-hooks",isDocsHomePage:!1,title:"Lifecycle hooks",description:"You can use lifecycle hooks to run some code when entity gets persisted. You can mark any of",source:"@site/versioned_docs/version-2.7/lifecycle-hooks.md",slug:"/lifecycle-hooks",permalink:"/docs/2.7/lifecycle-hooks",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/lifecycle-hooks.md",version:"2.7",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1613370264,sidebar:"version-2.7/docs",previous:{title:"Property validation",permalink:"/docs/2.7/property-validation"},next:{title:"Naming strategy",permalink:"/docs/2.7/naming-strategy"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can use lifecycle hooks to run some code when entity gets persisted. You can mark any of\nentity methods with them, you can also mark multiple methods with same hook."),Object(a.b)("p",null,"All hooks support async methods."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"@BeforeCreate()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"@BeforeUpdate()")," is fired right before we persist the entity in database")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"@AfterCreate()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"@AfterUpdate()")," is fired right after the entity is updated in database and\nmerged to identity map. Since this event entity will have reference to ",Object(a.b)("inlineCode",{parentName:"p"},"EntityManager")," and will be\nenabled to call ",Object(a.b)("inlineCode",{parentName:"p"},"entity.init()")," method (including all entity references and collections).")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"@BeforeDelete()")," is fired right before we delete the record from database. It is fired only when\nremoving entity or entity reference, not when deleting records by query. ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"@AfterDelete()")," is fired right after the record gets deleted from database and it is unset from\nthe identity map."))),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/2.7/index#table-of-contents"},"\u2190"," Back to table of contents")))}p.isMDXComponent=!0}}]);