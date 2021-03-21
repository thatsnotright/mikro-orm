(window.webpackJsonp=window.webpackJsonp||[]).push([[840],{1112:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),d=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=d(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,b=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return t?a.a.createElement(b,c(c({ref:n},s),{},{components:t})):a.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},913:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(8),i=(t(0),t(1112)),o={title:"Naming strategy"},c={unversionedId:"naming-strategy",id:"version-2.7/naming-strategy",isDocsHomePage:!1,title:"Naming strategy",description:"When mapping your entities to database tables and columns, their names will be defined by naming",source:"@site/versioned_docs/version-2.7/naming-strategy.md",slug:"/naming-strategy",permalink:"/docs/2.7/naming-strategy",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/naming-strategy.md",version:"2.7",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1616321914,formattedLastUpdatedAt:"3/21/2021",sidebar:"version-2.7/docs",previous:{title:"Lifecycle hooks",permalink:"/docs/2.7/lifecycle-hooks"},next:{title:"Metadata cache",permalink:"/docs/2.7/metadata-cache"}},l=[{value:"Naming strategy in mongo driver",id:"naming-strategy-in-mongo-driver",children:[]},{value:"Naming strategy in SQL drivers",id:"naming-strategy-in-sql-drivers",children:[]}],s={toc:l};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When mapping your entities to database tables and columns, their names will be defined by naming\nstrategy. There are 2 basic naming strategies you can choose from:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"UnderscoreNamingStrategy")," - default of ",Object(i.b)("inlineCode",{parentName:"li"},"MySqlDriver")," and ",Object(i.b)("inlineCode",{parentName:"li"},"SqliteDriver")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MongoNamingStrategy")," - default of ",Object(i.b)("inlineCode",{parentName:"li"},"MongoDriver"))),Object(i.b)("p",null,"You can override this when initializing ORM. You can also provide your own naming strategy, just\nimplement ",Object(i.b)("inlineCode",{parentName:"p"},"NamingStrategy")," interface and provide your implementation when bootstrapping ORM:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"class YourCustomNamingStrategy implements NamingStrategy {\n  ...\n}\n\nconst orm = await MikroORM.init({\n  ...\n  namingStrategy: YourCustomNamingStrategy,\n  ...\n});\n")),Object(i.b)("h2",{id:"naming-strategy-in-mongo-driver"},"Naming strategy in mongo driver"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MongoNamingStrategy")," will simply use all field names as they are defined. Collection names will\nbe translated into lower-cased dashed form:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MyCoolEntity")," will be translated into ",Object(i.b)("inlineCode",{parentName:"p"},"my-cool-entity")," collection name."),Object(i.b)("h2",{id:"naming-strategy-in-sql-drivers"},"Naming strategy in SQL drivers"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MySqlDriver")," defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"UnderscoreNamingStrategy"),", which means your all your database tables and\ncolumns will be lower-cased and words divided by underscored:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `author` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `created_at` datetime(3) DEFAULT NULL,\n  `updated_at` datetime(3) DEFAULT NULL,\n  `terms_accepted` tinyint(1) DEFAULT NULL,\n  `name` varchar(255) DEFAULT NULL,\n  `email` varchar(255) DEFAULT NULL,\n  `born` datetime DEFAULT NULL,\n  `favourite_book_id` int(11) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/2.7/index#table-of-contents"},"\u2190"," Back to table of contents")))}d.isMDXComponent=!0}}]);