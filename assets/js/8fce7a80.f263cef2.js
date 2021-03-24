(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),o=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=o(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=o(a),d=n,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||s;return a?i.a.createElement(m,r(r({ref:t},b),{},{components:a})):i.a.createElement(m,r({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,c=new Array(s);c[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var b=2;b<s;b++)c[b]=a[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(3),i=a(7),s=(a(0),a(105)),c={id:"whatis",title:"What's buchu",sidebar_label:"What's buchu",slug:"/usecase"},r={unversionedId:"usecase/whatis",id:"usecase/whatis",isDocsHomePage:!1,title:"What's buchu",description:"CI build codecov",source:"@site/docs/usecase/whatis.md",slug:"/usecase",permalink:"/docs/usecase",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/usecase/whatis.md",version:"current",sidebar_label:"What's buchu",sidebar:"sidebar",previous:{title:"Getting Started with HerbsJS",permalink:"/docs/introduction/getting-started"},next:{title:"Getting started",permalink:"/docs/usecase/getting-started"}},l=[{value:"What&#39;s a use case?",id:"whats-a-use-case",children:[]},{value:"Why Buchu?",id:"why-buchu",children:[{value:"Maintainability",id:"maintainability",children:[]},{value:"Metadata for system intent",id:"metadata-for-system-intent",children:[]},{value:"Auditable and Secure",id:"auditable-and-secure",children:[]}]},{value:"Best pratices",id:"best-pratices",children:[{value:"Architecture",id:"architecture",children:[]},{value:"References",id:"references",children:[]}]},{value:"To Do",id:"to-do",children:[]},{value:"Contribute",id:"contribute",children:[]},{value:"License",id:"license",children:[]}],b={toc:l};function o(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",{align:"center"},Object(s.b)("img",{src:"https://raw.githubusercontent.com/herbsjs/buchu/master/docs/logo.png",height:"220"})),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://github.com/herbsjs/buchu/workflows/Node.js%20CI/badge.svg",alt:"CI build"})," ",Object(s.b)("a",{parentName:"p",href:"https://codecov.io/gh/herbsjs/buchu"},Object(s.b)("img",{parentName:"a",src:"https://codecov.io/gh/herbsjs/buchu/branch/master/graph/badge.svg",alt:"codecov"}))),Object(s.b)("p",null,"Uniform, auditable and secure use case javascript library. Influenced by Clean Architecture and Trailblazer"),Object(s.b)("h2",{id:"whats-a-use-case"},"What's a use case?"),Object(s.b)("h4",{id:"what-is-it"},"What is it?"),Object(s.b)("p",null,"A Use Case reflects a single action exposed by the Domain to the end user. Ex: ",Object(s.b)("em",{parentName:"p"},"Reopen Ticket"),", ",Object(s.b)("em",{parentName:"p"},"Reply Message"),", ",Object(s.b)("em",{parentName:"p"},"Add User")),Object(s.b)("p",null,"Internaly a Use Case control the interaction between Entities, Repositories (infrastructure) and other Domain components."),Object(s.b)("p",null,"It should:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Be modeled around business"),Object(s.b)("li",{parentName:"ul"},"Be reusable"),Object(s.b)("li",{parentName:"ul"},"Be testable / Have clear acceptance criteria"),Object(s.b)("li",{parentName:"ul"},"Help identify right architecture"),Object(s.b)("li",{parentName:"ul"},"Ubiquitous language")),Object(s.b)("p",null,'"Use cases orchestrate the flow of data to and from the entities, and direct those entities to use their Critical Business Rules to achieve the goals of the use case." - Clean Architecture book'),Object(s.b)("p",null,"We\u2019ve already talked about the complexity of business rules and how we try to solve this with herbsJS, but if you look closely you can see that at the center of the clean architecture concept, you\u2019ll notice that ",Object(s.b)("em",{parentName:"p"}," use cases ")," are at the center of everything, that's where the business rule is, along with the entities that guide and model the behavior of that system. HerbsJS was born from there, to try to describe complex business rules in an easy way for humans and machines to read."),Object(s.b)("p",null,"Here we can see an example of a use case implemented with ",Object(s.b)("strong",{parentName:"p"}," buchu "),", one of the herbsJS libs:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'usecase("Add or Update an Item on a to-do List", {\n        request: { listId: Number, item: Object },\n\n        authorize: (user) => user.isAdmin ? Ok() : Err(),\n\n        setup: (ctx) => ctx.di = Object.assign({}, dependency, injection),\n\n        "Check if the Item is valid": step((ctx) => {\n            const item = ctx.ret.item = new ctx.di.Item(ctx.req.item)\n            return item.validate() // Ok or Error\n        }),\n\n        "Check if the List exists": step(async (ctx) => {\n            const listRepo = new ctx.di.ListRepository(ctx.di)\n            const list = await listRepo.first(ctx.req.listId)\n            const hasList = (list != null)\n            if (!hasList) { return Err("List does not exist. listId: " + ctx.req.listId) }\n            return Ok()\n        }),\n\n        "Add or Update the Item": ifElse({\n\n            "If the Item exists": step(async (ctx) => {\n                const itemRepo = new ctx.di.ItemRepository(ctx.di)\n                const item = await itemRepo.firstLike(ctx.req.item.name)\n                const newItem = (item == null)\n                if (!newItem) ctx.ret.item = item\n                return Ok(newItem)\n            }),\n\n            "Then: Add a new Item to the List": step(async (ctx) => {\n                const item = ctx.ret.item = new ctx.di.Item(ctx.req.item)\n                const itemRepo = new ctx.di.ItemRepository(ctx.di)\n                return await itemRepo.save(item) // Ok or Error\n            }),\n\n            "Else: Update Item on the List": step(async (ctx) => {\n                const item = ctx.ret.item\n                item.name = ctx.req.item.name\n                item.position = ctx.req.item.position\n                const itemRepo = new ctx.di.ItemRepository(ctx.di)\n                return await itemRepo.save(item) // Ok or Error\n            })\n        })\n    })\n')),Object(s.b)("p",null,"With just one method, you can generate documentation for that usecase:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"console.log(uc.doc())\n/*\n {\n  type: 'use case',\n  description: 'Add or Update an Item on a to-do List',\n  steps: [\n    {\n      type: 'step',\n      description: 'Check if the Item is valid',\n      steps: null\n    },\n    {\n      type: 'step',\n      description: 'Check if the List exists',\n      steps: null\n    },\n    {\n      description: 'Add or Update the Item',\n      type: 'if else',\n      if: [Object],\n      then: [Object],\n      else: [Object]\n    }\n  ],\n  request: { listId: [Function: Number], item: [Function: Object] }\n}*/\n")),Object(s.b)("p",null,"And with another, you can audit it:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"uc.audit()\n/* {\n  type: 'use case',\n  description: 'Add or Update an Item on a to-do List',\n  transactionId: 'c7702d26-aad2-4641-9bc3-409fc5a310f7',\n  user: { user: 'John', id: '923b8b9a', isAdmin: true },\n  authorized: true,\n  return: Ok { value: { item: [Item] } },\n  steps: [\n    {\n      type: 'step',\n      description: 'Check if the Item is valid',\n      return: [Ok],\n      elapsedTime: 64400n\n    },\n    {\n      type: 'step',\n      description: 'Check if the List exists',\n      return: [Ok],\n      elapsedTime: 53700n\n    },\n    {\n      type: 'if else',\n      description: 'Add or Update the Item',\n      returnIf: [Ok],\n      returnThen: [Ok],\n      elapsedTime: 119300n\n    }\n  ],\n  elapsedTime: 802300n\n}*/\n")),Object(s.b)("h2",{id:"why-buchu"},"Why Buchu?"),Object(s.b)("h3",{id:"maintainability"},"Maintainability"),Object(s.b)("p",null,'"Programs must be written for people to read, and only incidentally for machines to execute" - Harold Abelson, Structure and Interpretation of Computer Programs'),Object(s.b)("p",null,"Understanding what a software is doing from a business perspective is a must in order to be able to change it quickly and in a sustainable way."),Object(s.b)("h3",{id:"metadata-for-system-intent"},"Metadata for system intent"),Object(s.b)("p",null,"It should be easy to retrieve a system's metadata for all its use cases and steps. This info could be used to leverage innovative interfaces (ex: dynamic admin pages, use case documentations, etc), helping narrow the gap between developers, testers and product managers."),Object(s.b)("h3",{id:"auditable-and-secure"},"Auditable and Secure"),Object(s.b)("p",null,"It should be easy to have enterprise grade features even for simple applications. Authorization and auditing, for instance, should be available out of the box. Not using should be opt-in."),Object(s.b)("h2",{id:"best-pratices"},"Best pratices"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Keep it simple by telling stories"),Object(s.b)("li",{parentName:"ul"},"Understand the big picture"),Object(s.b)("li",{parentName:"ul"},"Focus on value"),Object(s.b)("li",{parentName:"ul"},"Build the use case in steps")),Object(s.b)("h3",{id:"architecture"},"Architecture"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Implement business ",Object(s.b)("strong",{parentName:"p"},"flows")," using Use Cases."),Object(s.b)("p",{parentName:"li"},"Ex: ",Object(s.b)("em",{parentName:"p"},"Reply Message")," use case interacts with ",Object(s.b)("inlineCode",{parentName:"p"},"Message"),", ",Object(s.b)("inlineCode",{parentName:"p"},"Ticket"),", ",Object(s.b)("inlineCode",{parentName:"p"},"User")," and others entities in order to reply a message for a user")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Split the ",Object(s.b)("strong",{parentName:"p"},"flows")," in smaller steps")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Avoid implement ",Object(s.b)("strong",{parentName:"p"},"validations")," using Use Cases. Prefer Entities for validations")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Access Use Cases from outside the Domain"),Object(s.b)("p",{parentName:"li"},'Use cases are the "entry points" for the Domain layer, so it is the only accessible layer from outside the Domain.')),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Don't access any other sublayer which belongs to Domain layer (Entities, etc) apart Use Case from outside Domain")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Name the Use Case folder, file and its steps  as an action (verb)."),Object(s.b)("p",{parentName:"li"},"Ex: ",Object(s.b)("inlineCode",{parentName:"p"},"OpenTicket.js"),", ",Object(s.b)("inlineCode",{parentName:"p"},"ReplyMessage.js"),", ",Object(s.b)("inlineCode",{parentName:"p"},"AddUser.js")),Object(s.b)("p",{parentName:"li"},"Use Cases are implemented as ",Object(s.b)("a",{parentName:"p",href:"https://sourcemaking.com/design_patterns/command"},"command patterns"),"."))),Object(s.b)("h3",{id:"references"},"References"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Clean Architecture book ",Object(s.b)("a",{parentName:"li",href:"https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164"},"link")),Object(s.b)("li",{parentName:"ul"},"Use Case 2.0 ",Object(s.b)("a",{parentName:"li",href:"https://www.ivarjacobson.com/sites/default/files/field_iji_file/article/use-case_2.0_final_rev3.pdf"},"link")),Object(s.b)("li",{parentName:"ul"},"Use Case diagram ",Object(s.b)("a",{parentName:"li",href:"http://www.agilemodeling.com/artifacts/useCaseDiagram.htm"},"link")),Object(s.b)("li",{parentName:"ul"},"Service Layer ",Object(s.b)("a",{parentName:"li",href:"https://martinfowler.com/eaaCatalog/serviceLayer.html"},"link"))),Object(s.b)("h2",{id:"to-do"},"To Do"),Object(s.b)("ul",{className:"contains-task-list"},Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Base - Run a use case"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Use Case Error - Ok or Error results for a use case (Rust inspired)"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Steps - Enable multiple steps for a use case"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Nested Steps - Enable multiple steps for a parent step"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Nested Steps - multiple files - Enable multiple steps in diferent files for a parent step"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Use usecase as a step"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Doc Step - Get description and structure from use case and its steps"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Request - Be able to describe and validate the use case request object"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Response - Be able to describe and validate the use case response object"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Dependency Injection (removed)"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",Object(s.b)("inlineCode",{parentName:"li"},"ctx")," var - Share context between Steps"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Conditional Steps - Enable a If/Else constructor for steps"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Authorization - Be able to authorize the execution of a use case and its steps"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Audit - Be able to track use case runtime information"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Audit - Timing - Be able to track use case and its steps execution time"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Async / MQ - Multiple Rounds - Be able to partially execute a use case and continue (when a MQ is necessary, for instance)"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","transaction ID - A ID to track execution between steps"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","session ID - A ID to track execution between use cases"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Deal with exceptions"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Deal with no default results (Ok/Err)"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Deal with async / await steps"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Use case examples"),Object(s.b)("li",{parentName:"ul",className:"task-list-item"},Object(s.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Doc - Documentation and samples for each feature")),Object(s.b)("h2",{id:"contribute"},"Contribute"),Object(s.b)("p",null,"Come with us to make an awesome ",Object(s.b)("em",{parentName:"p"},"Buchu"),"."),Object(s.b)("p",null,"Now, if you do not have technical knowledge and also have intend to help us, do not feel shy, ",Object(s.b)("a",{parentName:"p",href:"https://github.com/herbsjs/buchu/issues"},"click here")," to open an issue and collaborate their ideas, the contribution may be a criticism or a compliment (why not?)"),Object(s.b)("p",null,"If you would like to help contribute to this repository, please see ",Object(s.b)("a",{parentName:"p",href:"https://github.com/herbsjs/buchu/blob/master/.github/CONTRIBUTING.md"},"CONTRIBUTING")),Object(s.b)("h2",{id:"license"},"License"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Buchu")," is released under the\n",Object(s.b)("a",{parentName:"p",href:"https://github.com/herbsjs/buchu/blob/development/LICENSE.md"},"MIT license"),"."))}o.isMDXComponent=!0}}]);