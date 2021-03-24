(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),b=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return n?i.a.createElement(m,s(s({ref:t},o),{},{components:n})):i.a.createElement(m,s({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var o=2;o<r;o++)c[o]=n[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(105)),c={id:"whatis",title:"What's Gotu  \u2800\u2800\u2800",sidebar_label:"What's Gotu",slug:"/entity"},s={unversionedId:"entity/whatis",id:"entity/whatis",isDocsHomePage:!1,title:"What's Gotu  \u2800\u2800\u2800",description:"Node.js CIcodecov",source:"@site/docs/entity/whatis.md",slug:"/entity",permalink:"/docs/entity",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/entity/whatis.md",version:"current",sidebar_label:"What's Gotu",sidebar:"sidebar",previous:{title:"Features",permalink:"/docs/usecase/features"},next:{title:"Getting started",permalink:"/docs/entity/getting-started"}},l=[{value:"Installing",id:"installing",children:[]},{value:"Using",id:"using",children:[]},{value:"TODO",id:"todo",children:[{value:"Contribute",id:"contribute",children:[]},{value:"The Herb",id:"the-herb",children:[]},{value:"License",id:"license",children:[]}]}],o={toc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"https://raw.githubusercontent.com/herbsjs/gotu/master/docs/logo.png",height:"220"})),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://github.com/herbsjs/gotu/workflows/Node.js%20CI/badge.svg?branch=master",alt:"Node.js CI"}),Object(r.b)("a",{parentName:"p",href:"https://codecov.io/gh/herbsjs/gotu"},Object(r.b)("img",{parentName:"a",src:"https://codecov.io/gh/herbsjs/gotu/branch/master/graph/badge.svg",alt:"codecov"}))),Object(r.b)("h1",{id:"gotu-kola"},"Gotu Kola"),Object(r.b)("p",null,"Gotu Kola helps define your business entities (*)"),Object(r.b)("p",null,"(*) Entities: they are the first natural place we should aim to place business logic in domain-driven applications."),Object(r.b)("h3",{id:"installing"},"Installing"),Object(r.b)("p",null,"$ npm install gotu"),Object(r.b)("h3",{id:"using"},"Using"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const { entity, field } = require('gotu')\n\nconst Feature = \n        entity('Feature', {\n            name: field(String),\n            hasAccess: field(Boolean)\n        })\n\nconst Plan = \n    entity('Plan', {\n        name: field(String),\n        monthlyCost: field(Number)\n    })\n\nconst User = \n    entity('User', {\n        name: field(String),\n        lastAccess: field(Date),\n        accessCount: field(Number),\n        features: field([Feature]),\n        plan: field(Plan),\n    })\n\nconst user = new User()\nuser.name = \"Beth\"\nuser.plan.monthlyCost = 10\nuser.features = [ \n    new Feature(),\n    new Feature(),\n    new Feature()\n]\nuser.validate()\n")),Object(r.b)("h2",{id:"todo"},"TODO"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",'Field basic JS type definition and validation (ex: "name": String)'),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",'Field entity type definition and validation (ex: "user": User)'),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",'Field enum type definition and validation (ex: "paymentType": ',"['CC', 'Check']",")"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",'Field list type definition and validation (ex: "users": ',"[User]",")"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Entity custom methods (ex: payment.calculate())"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Default values"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Entity (complex) validation (ex: payment.validate() )"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Field validation error message (ex: payment.errors )"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Field validation error code (ex: payment.errors )"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Entity hidrate (ex: fromJson)"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Entity serialize (ex: toJson)"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Extend / Custom field validation (ex: email, greater than, etc)"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Valitation contexts (ex: Payment validation for ","[1]"," credit card or ","[2]"," check)"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Conditional Validation (ex: if email is present, emailConfirmation must be present)"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Entities Inheritance (schema and validations inheritance)")),Object(r.b)("h3",{id:"contribute"},"Contribute"),Object(r.b)("p",null,"Come with us to make an awesome ",Object(r.b)("em",{parentName:"p"},"Gotu"),"."),Object(r.b)("p",null,"Now, if you do not have technical knowledge and also have intend to help us, do not feel shy, ",Object(r.b)("a",{parentName:"p",href:"https://github.com/herbsjs/gotu/issues"},"click here")," to open an issue and collaborate their ideas, the contribution may be a criticism or a compliment (why not?)"),Object(r.b)("p",null,"If you would like to help contribute to this repository, please see ",Object(r.b)("a",{parentName:"p",href:"https://github.com/herbsjs/gotu/blob/master/.github/CONTRIBUTING.md"},"CONTRIBUTING")),Object(r.b)("h3",{id:"the-herb"},"The Herb"),Object(r.b)("p",null,"Gotu Kola has been used historically to relieve congestion from upper respiratory infections and colds and for wound healing. It is very popular for treating varicose veins and memory loss."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.herbslist.net/"},"https://www.herbslist.net/")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Centella_asiatica"},"https://en.wikipedia.org/wiki/Centella_asiatica")),Object(r.b)("h3",{id:"license"},"License"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Gotu")," is released under the\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/herbsjs/gotu/blob/master/LICENSE.md"},"MIT license"),"."))}b.isMDXComponent=!0}}]);