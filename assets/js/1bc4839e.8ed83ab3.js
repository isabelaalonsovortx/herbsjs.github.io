(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||s;return n?r.a.createElement(d,c(c({ref:t},o),{},{components:n})):r.a.createElement(d,c({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<s;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),s=(n(0),n(105)),i={id:"suma2text",title:"Suma2text",sidebar_label:"Suma2text",slug:"/glues/suma2text"},c={unversionedId:"glues/suma2text",id:"glues/suma2text",isDocsHomePage:!1,title:"Suma2text",description:"CI build codecov",source:"@site/docs/glues/suma2text.md",slug:"/glues/suma2text",permalink:"/docs/glues/suma2text",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/glues/suma2text.md",version:"current",sidebar_label:"Suma2text",sidebar:"sidebar",previous:{title:"Herbs2rpl",permalink:"/docs/glues/herbs2rpl"},next:{title:"Herbs-snippets",permalink:"/docs/glues/herbs-snippets"}},l=[{value:"Installing",id:"installing",children:[]},{value:"Using",id:"using",children:[]},{value:"TODO",id:"todo",children:[{value:"Contribute",id:"contribute",children:[]},{value:"The Herb",id:"the-herb",children:[]},{value:"License",id:"license",children:[]}]}],o={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://github.com/herbsjs/suma2text/workflows/CI%20build/badge.svg",alt:"CI build"})," ",Object(s.b)("a",{parentName:"p",href:"https://codecov.io/gh/herbsjs/suma2text"},Object(s.b)("img",{parentName:"a",src:"https://codecov.io/gh/herbsjs/suma2text/branch/master/graph/badge.svg",alt:"codecov"}))),Object(s.b)("p",null,"suma2text it's a tool to parse error codes to string, you can use in all your solution."),Object(s.b)("p",null,"Suma and suma2text native, you can translate all suma error codes, one by one or all entity error array."),Object(s.b)("h3",{id:"installing"},"Installing"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"$ npm install suma2text\n")),Object(s.b)("h3",{id:"using"},"Using"),Object(s.b)("p",null,"If your use is simple, you can just require suma2text, and execute this configure function, by default the language will be English from the united states (ISO CODE en-US)."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"const suma2text = require('suma2text')()\n\nconst suma2text.toText({ notDefined: true })\n/*\n    Not defined\n*/\n")),Object(s.b)("p",null,"You also can add a different language or customize the existing, just pass the following parameters on require function."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"const suma2text = require('suma2text')({\n    useDefault: 'ts-ME',\n    languages: [{\n            name: 'ts-ME',\n            definitions: {\n                types: [\n                    { key: 'Number',  translation: 'Numeric' },\n                    { key: 'String',  translation: 'Characters'}\n                ]\n                codes: [\n                    { key: 'cantBeEmpty', translation: 'Wont should be empty' },\n                    { key: 'wrongType', translation: 'Please the value correct is {0}' }\n                ]\n            }\n        },\n        {\n            name: 'en-US',\n            definitions: {\n                types: [\n                    { key: 'Number', translation: 'Digit' },\n                    { key: 'String', translation: 'Char Array' }\n                ],\n                codes: [\n                    { key: 'cantBeEmpty', translation: 'Wont should be empty' },\n                    { key: 'wrongType', translation: 'The value correct is {0}'}\n                ]\n            }\n        }\n    ]\n})\n\n//fully custumized language\nconst suma2text.toText({ wrongType: String }, 'ts-ME')\n/*\n   Please the value correct is Characters\n*/\nconst suma2text.toText({ notGreaterThan: 10 }, 'ts-ME')\n/*\n   Will be thrown a not implemented code exception\n*/\n\n//existing language, but some custumization\nconst suma2text.toText({ wrongType: String }, 'en-US')\n/*\n   The value correct is Char Array\n*/\nconst suma2text.toText({ notGreaterThan: 10 }, 'en-US')\n/*\n   Not greater than 10\n*/\n\n")),Object(s.b)("p",null,"But, the perfect choice is to use whit herbs.js, all suma codes are integrated into here, and we made for it, you can pass all your validation in a suma2text class, validate, and just show the results in your presentation layer, let's see how."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"const User =\n    entity('User', {\n        name: field(String),\n        plan: field(Plan)\n    })\n\nconst user = new User()\nuser.name = 42\nuser.plan.monthlyCost = true\nuser.validate()\nuser.errors // { name: [ {wrongType: 'String'} ], plan: { monthlyCost: [ {wrongType: 'Number'}  } }\n\nconst suma2text = require('suma2text')()\n\nconst englishUserErrors = suma2text.errorsToText(user.errors)\n/*\n    {\n        name: ['Wrong type, the correct type is String']\n        plan: {\n            monthlyCost: ['Wrong type, the correct type is Plan']\n        }\n    }\n*/\nconst portugueseUserErrors = suma2text.errorsToText(user.errors, 'pt-BR')\n/*\n    {\n        name: ['Foi definido um tipo incorreto, o valor esperado era Texto']\n        plan: {\n            monthlyCost: ['Foi definido um tipo incorreto, o valor esperado era Plan']\n        }\n    }\n*/\n")),Object(s.b)("h2",{id:"todo"},"TODO"),Object(s.b)("p",null,"Language localisation:"),Object(s.b)("ul",{className:"contains-task-list"},Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Arabic"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Bangla"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Chinese"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Dutch"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","English ('en-US')"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","French"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","German"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Italian"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Korean"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Portuguese ('pt-BR')"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Spanish"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Swedish   "),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Tamil")),Object(s.b)("p",null,"Text Formatting:"),Object(s.b)("ul",{className:"contains-task-list"},Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Primitive types"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Strings types"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Number types "),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Date Type and formating style"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","User Class instances types")),Object(s.b)("h3",{id:"contribute"},"Contribute"),Object(s.b)("p",null,"Come with us to make an awesome ",Object(s.b)("em",{parentName:"p"},"suma2text"),"."),Object(s.b)("p",null,"Now, if you do not have the technical knowledge and also have intended to help us, do not feel shy, ",Object(s.b)("a",{parentName:"p",href:"https://github.com/herbsjs/suma2text/issues"},"click here")," to open an issue and collaborate their ideas, the contribution may be a criticism or a compliment (why not?)"),Object(s.b)("p",null,"If you would like to help contribute to this repository, please see ",Object(s.b)("a",{parentName:"p",href:"https://github.com/herbsjs/suma2text/blob/master/.github/CONTRIBUTING.md"},"CONTRIBUTING")),Object(s.b)("h3",{id:"the-herb"},"The Herb"),Object(s.b)("p",null,"suma2text suma2text has been used historically to relieve congestion from upper respiratory infections and colds and for wound healing. It is very popular for treating varicose veins and memory loss."),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://www.herbslist.net/"},"https://www.herbslist.net/")),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Centella_asiatica"},"https://en.wikipedia.org/wiki/Centella_asiatica")),Object(s.b)("h3",{id:"license"},"License"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"suma2text")," is released under the\n",Object(s.b)("a",{parentName:"p",href:"https://github.com/herbsjs/suma2text/blob/master/LICENSE.md"},"MIT license")))}u.isMDXComponent=!0}}]);