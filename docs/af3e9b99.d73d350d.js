(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),c=n(6),r=(n(0),n(142)),i=n(144),b={id:"dbcontext-code-first",title:"9.20 \u6a21\u578b\u751f\u6210\u6570\u636e\u5e93",sidebar_label:"9.20 \u6a21\u578b\u751f\u6210\u6570\u636e\u5e93"},o={unversionedId:"dbcontext-code-first",id:"dbcontext-code-first",isDocsHomePage:!1,title:"9.20 \u6a21\u578b\u751f\u6210\u6570\u636e\u5e93",description:"9.20.1 \u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f",source:"@site/docs\\dbcontext-code-first.mdx",slug:"/dbcontext-code-first",permalink:"/docs/dbcontext-code-first",editUrl:"https://gitee.com/monksoul/Fur/tree/main/handbook/docs/dbcontext-code-first.mdx",version:"current",sidebar_label:"9.20 \u6a21\u578b\u751f\u6210\u6570\u636e\u5e93",sidebar:"docs",previous:{title:"9.19 \u6570\u636e\u5e93\u751f\u6210\u6a21\u578b",permalink:"/docs/dbcontext-db-first"},next:{title:"9.21 \u5b9e\u4f53\u79cd\u5b50\u6570\u636e",permalink:"/docs/dbcontext-seed-data"}},s=[{value:"9.20.1 \u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f",id:"9201-\u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f",children:[]},{value:"9.20.2 \u64cd\u4f5c\u6307\u5357",id:"9202-\u64cd\u4f5c\u6307\u5357",children:[{value:"9.20.2.1 \u521b\u5efa\u5b9e\u4f53\u6a21\u578b <code>Person</code>",id:"92021-\u521b\u5efa\u5b9e\u4f53\u6a21\u578b-person",children:[]},{value:"9.20.2.2 \u6253\u5f00 <code>\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0</code>",id:"92022-\u6253\u5f00-\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0",children:[]},{value:"9.20.2.3 \u5207\u6362\u9ed8\u8ba4\u9879\u76ee",id:"92023-\u5207\u6362\u9ed8\u8ba4\u9879\u76ee",children:[]},{value:"9.20.2.4 \u521b\u5efa\u6a21\u578b\u7248\u672c",id:"92024-\u521b\u5efa\u6a21\u578b\u7248\u672c",children:[]},{value:"9.20.2.5 \u66f4\u65b0\u5230\u6570\u636e\u5e93",id:"92025-\u66f4\u65b0\u5230\u6570\u636e\u5e93",children:[]}]},{value:"9.20.3 \u66f4\u65b0\u6a21\u578b",id:"9203-\u66f4\u65b0\u6a21\u578b",children:[]},{value:"9.20.4 \u5bfc\u51fa <code>Sql</code>",id:"9204-\u5bfc\u51fa-sql",children:[]},{value:"9.20.5 <code>VS Code</code> \u65b9\u5f0f",id:"9205-vs-code-\u65b9\u5f0f",children:[{value:"9.20.5.1 \u5b89\u88c5 <code>dotnet ef</code>",id:"92051-\u5b89\u88c5-dotnet-ef",children:[]},{value:"9.20.5.2 <code>cd</code> \u76ee\u5f55",id:"92052-cd-\u76ee\u5f55",children:[]},{value:"9.20.5.3 \u6267\u884c\u547d\u4ee4",id:"92053-\u6267\u884c\u547d\u4ee4",children:[]}]},{value:"9.20.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9206-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],d={rightToc:s};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"9201-\u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f"},"9.20.1 \u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Fur")," \u63d0\u4f9b\u4e24\u79cd\u4e3b\u8981\u65b9\u6cd5\u6765 ",Object(r.b)("strong",{parentName:"p"},"\u4fdd\u6301\u5b9e\u4f53\u6a21\u578b\u548c\u6570\u636e\u5e93\u67b6\u6784\u540c\u6b65"),"\u3002"),Object(r.b)("p",null,"\u81f3\u4e8e\u6211\u4eec\u5e94\u8be5\u9009\u7528\u54ea\u4e2a\u65b9\u6cd5\uff0c\u8bf7\u786e\u5b9a\u4f60\u662f\u5e0c\u671b\u4ee5\u5b9e\u4f53\u6a21\u578b\u4e3a\u51c6\u8fd8\u662f\u4ee5\u6570\u636e\u5e93\u4e3a\u51c6\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5982\u679c\u5e0c\u671b ",Object(r.b)("strong",{parentName:"p"},"\u4ee5\u5b9e\u4f53\u6a21\u578b\u4e3a\u51c6"),"\uff0c\u8bf7\u4f7f\u7528\u6b63\u5411\u5de5\u7a0b\uff08Code First\uff09\u3002 \u5bf9\u5b9e\u4f53\u6a21\u578b\u8fdb\u884c\u66f4\u6539\u65f6\uff0c\u6b64\u65b9\u6cd5\u4f1a\u4ee5\u589e\u91cf\u65b9\u5f0f\u5c06\u76f8\u5e94\u67b6\u6784\u66f4\u6539\u5e94\u7528\u5230\u6570\u636e\u5e93\uff0c\u4ee5\u4f7f\u6570\u636e\u5e93\u4fdd\u6301\u4e0e\u5b9e\u4f53\u6a21\u578b\u517c\u5bb9\u3002")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5982\u679c\u5e0c\u671b ",Object(r.b)("strong",{parentName:"p"},"\u4ee5\u6570\u636e\u5e93\u67b6\u6784\u4e3a\u51c6"),"\uff0c\u8bf7\u4f7f\u7528\u53cd\u5411\u5de5\u7a0b\uff08Database First\uff09\u3002 \u4f7f\u7528\u6b64\u65b9\u6cd5\uff0c\u53ef\u901a\u8fc7\u5c06\u6570\u636e\u5e93\u67b6\u6784\u53cd\u5411\u5de5\u7a0b\u5230\u5b9e\u4f53\u6a21\u578b\u6765\u751f\u6210\u76f8\u5e94\u7684\u5b9e\u4f53\u7c7b\u578b\u3002"))),Object(r.b)("p",null,"\u672c\u7ae0\u8282\u662f ",Object(r.b)("strong",{parentName:"p"},"\u6b63\u5411\u5de5\u7a0b\uff08Code First\uff09")," \u7684\u76f8\u5173\u5185\u5bb9\u3002"),Object(r.b)("h2",{id:"9202-\u64cd\u4f5c\u6307\u5357"},"9.20.2 \u64cd\u4f5c\u6307\u5357"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7279\u522b\u6ce8\u610f")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"Fur")," \u6846\u67b6\u9ed8\u8ba4\u6570\u636e\u8fc1\u79fb\u7684\u7a0b\u5e8f\u96c6\u4e3a\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"Fur.Database.Migrations"),"\uff0c\u6240\u4ee5\u5982\u679c\u60a8\u6539\u4e86\u7a0b\u5e8f\u96c6\u540d\u79f0\u6216\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"Nuget")," \u65b9\u5f0f\u5b89\u88c5\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"Fur")," \u5305\uff0c\u5219\u9700\u8981\u914d\u7f6e\u8fc1\u79fb\u7a0b\u5e8f\u96c6\u540d\u79f0\uff1a"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{4}","{4}":!0}),'services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<FurDbContext>(DbProvider.Sqlite);\n}, "\u81ea\u5b9a\u4e49\u8fc1\u79fb\u540d\u79f0");\n')),Object(r.b)("p",{parentName:"div"},"\u53e6\u5916\uff0c\u5982\u679c\u5e94\u7528\u4e2d\u914d\u7f6e\u4e86\u591a\u4e2a\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u90a3\u4e48\u6240\u6709\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"\u8fc1\u79fb\u547d\u4ee4")," \u90fd\u9700\u8981\u6307\u5b9a ",Object(r.b)("inlineCode",{parentName:"p"},"-Context \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u540d\u79f0")," \u53c2\u6570\u3002\u5982\uff1a"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Add-Migration v1.0.0 -Context FurDbContext\n")))),Object(r.b)("h3",{id:"92021-\u521b\u5efa\u5b9e\u4f53\u6a21\u578b-person"},"9.20.2.1 \u521b\u5efa\u5b9e\u4f53\u6a21\u578b ",Object(r.b)("inlineCode",{parentName:"h3"},"Person")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{1,6,8}","{1,6,8}":!0}),"using Fur.DatabaseAccessor;\nusing System;\nusing System.Collections.Generic;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace Fur.Core\n{\n    public class Person : Entity\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Person()\n        {\n            CreatedTime = DateTime.Now;\n            IsDeleted = false;\n        }\n\n        /// <summary>\n        /// \u59d3\u540d\n        /// </summary>\n        [MaxLength(32)]\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n\n        /// <summary>\n        /// \u4f4f\u5740\n        /// </summary>\n        public string Address { get; set; }\n    }\n}\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u5b9e\u4f53\u7ea6\u5b9a")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u6240\u6709\u6570\u636e\u5e93\u5b9e\u4f53\u5fc5\u987b\u76f4\u63a5\u6216\u95f4\u63a5\u7ee7\u627f ",Object(r.b)("inlineCode",{parentName:"p"},"IEntity")," \u63a5\u53e3\u3002"))),Object(r.b)("h3",{id:"92022-\u6253\u5f00-\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0"},"9.20.2.2 \u6253\u5f00 ",Object(r.b)("inlineCode",{parentName:"h3"},"\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0")),Object(r.b)("img",{src:Object(i.a)("img/dbfirst1.png")}),Object(r.b)("h3",{id:"92023-\u5207\u6362\u9ed8\u8ba4\u9879\u76ee"},"9.20.2.3 \u5207\u6362\u9ed8\u8ba4\u9879\u76ee"),Object(r.b)("p",null,"\u5c06 ",Object(r.b)("inlineCode",{parentName:"p"},"\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0")," \u9ed8\u8ba4\u9879\u76ee\u8bbe\u7f6e\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"Fur.Database.Migrations")),Object(r.b)("img",{src:Object(i.a)("img/codefirst1.png")}),Object(r.b)("h3",{id:"92024-\u521b\u5efa\u6a21\u578b\u7248\u672c"},"9.20.2.4 \u521b\u5efa\u6a21\u578b\u7248\u672c"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Add-Migration v1.0.0\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u7279\u522b\u8bf4\u660e")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"v1.0.0")," \u662f\u6b64\u5904\u6570\u636e\u5e93\u66f4\u6539\u7684\u7248\u672c\u53f7\uff0c\u53ef\u4ee5\u5199\u4efb\u4f55\u5b57\u7b26\u4e32\uff0c\u4f46\u63a8\u8350\u5199\u7248\u672c\u53f7\uff0c\u6bcf\u6b21 ",Object(r.b)("strong",{parentName:"p"},"+1"),"\u3002"))),Object(r.b)("p",null,"\u6700\u7ec8\u547d\u4ee4\u5982\u4e0b\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"PM> Add-Migration v1.0.0\nBuild started...\nBuild succeeded.\nMicrosoft.EntityFrameworkCore.Model.Validation[10400]\n      Sensitive data logging is enabled. Log entries and exception messages may include sensitive application data, this mode should only be enabled during development.\nMicrosoft.EntityFrameworkCore.Infrastructure[10403]\n      Entity Framework Core 5.0.0-rc.1.20451.13 initialized 'FurDbContext' using provider 'Microsoft.EntityFrameworkCore.Sqlite' with options: SensitiveDataLoggingEnabled DetailedErrorsEnabled MaxPoolSize=100 MigrationsAssembly=Fur.Database.Migrations\nTo undo this action, use Remove-Migration.\nPM>\n")),Object(r.b)("p",null,"\u751f\u6210\u6210\u529f\u540e\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"Fur.Database.Migrations")," \u9879\u76ee\u4e0b\u4f1a\u65b0\u589e ",Object(r.b)("inlineCode",{parentName:"p"},"Migrations")," \u6587\u4ef6\u5939\uff08\u5982\u679c\u6ca1\u6709\uff09\uff0c\u540c\u65f6\u672c\u6b21\u7684\u67b6\u6784\u751f\u6210\u6587\u4ef6\uff0c\u5982\uff1a"),Object(r.b)("img",{src:Object(i.a)("img/codefirst3.png")}),Object(r.b)("h3",{id:"92025-\u66f4\u65b0\u5230\u6570\u636e\u5e93"},"9.20.2.5 \u66f4\u65b0\u5230\u6570\u636e\u5e93"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Update-Database\n")),Object(r.b)("p",null,"\u6267\u884c\u8be5\u547d\u4ee4\u540e\uff0c\u6570\u636e\u5e93\u5c31\u4f1a\u81ea\u52a8\u6839\u636e\u6a21\u578b\u751f\u6210\u5bf9\u4e8e\u7684\u8868\u3002"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u77e5\u8bc6")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u5982\u679c ",Object(r.b)("inlineCode",{parentName:"p"},"Update-Database")," \u540e\u9762\u5e26\u5b57\u7b26\u4e32\u53c2\u6570\uff0c\u5219\u4f1a\u81ea\u52a8\u8fd8\u539f\u6570\u636e\u5e93\u5230\u6307\u5b9a\u7248\u672c\uff0c\u5982\uff1a"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Update-Database v0.0.3\n")),Object(r.b)("p",{parentName:"div"},"\u5c06\u6570\u636e\u5e93\u8fd8\u539f\u5230 ",Object(r.b)("inlineCode",{parentName:"p"},"v0.0.3")," \u7248\u672c"))),Object(r.b)("h2",{id:"9203-\u66f4\u65b0\u6a21\u578b"},"9.20.3 \u66f4\u65b0\u6a21\u578b"),Object(r.b)("p",null,"\u5982\u679c\u6a21\u578b\u6539\u53d8\u4e86\uff0c\u91cd\u590d\u4e0a\u9762\u64cd\u4f5c\u5373\u53ef\uff0c\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Add-Migration v1.0.1\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Update-Database\n")),Object(r.b)("h2",{id:"9204-\u5bfc\u51fa-sql"},"9.20.4 \u5bfc\u51fa ",Object(r.b)("inlineCode",{parentName:"h2"},"Sql")),Object(r.b)("p",null,"\u6709\u4e9b\u65f6\u5019\uff0c\u6211\u4eec\u6ca1\u6709\u76f4\u63a5\u66f4\u65b0\u6570\u636e\u5e93\u7684\u6743\u9650\uff0c\u6216\u8005\u6015\u51fa\u95ee\u9898\uff0c\u6211\u4eec\u90fd\u4f1a\u5148\u751f\u6210 ",Object(r.b)("inlineCode",{parentName:"p"},"Sql")," \u770b\u770b\uff0c\u8fd9\u65f6\u5019\u53ea\u9700\u8981\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"Script-Migration")," \u5bfc\u51fa\u5373\u53ef\uff0c\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Script-Migration\n")),Object(r.b)("img",{src:Object(i.a)("img/codefirst2.png")}),Object(r.b)("h2",{id:"9205-vs-code-\u65b9\u5f0f"},"9.20.5 ",Object(r.b)("inlineCode",{parentName:"h2"},"VS Code")," \u65b9\u5f0f"),Object(r.b)("h3",{id:"92051-\u5b89\u88c5-dotnet-ef"},"9.20.5.1 \u5b89\u88c5 ",Object(r.b)("inlineCode",{parentName:"h3"},"dotnet ef")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"dotnet tool install --global dotnet-ef --version 5.0.0-rc.2.20475.6\n")),Object(r.b)("h3",{id:"92052-cd-\u76ee\u5f55"},"9.20.5.2 ",Object(r.b)("inlineCode",{parentName:"h3"},"cd")," \u76ee\u5f55"),Object(r.b)("p",null,"\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"VS Code")," \u6253\u5f00 ",Object(r.b)("inlineCode",{parentName:"p"},".sln")," \u6240\u5728\u7684\u76ee\u5f55\uff0c\u5982\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"framework"),"\u3002"),Object(r.b)("p",null,"\u4e4b\u540e\u8fdb\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"Fur.Database.Migrations")," \u76ee\u5f55"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"cd Fur.Database.Migrations\n")),Object(r.b)("h3",{id:"92053-\u6267\u884c\u547d\u4ee4"},"9.20.5.3 \u6267\u884c\u547d\u4ee4"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'dotnet ef migrations add v1.0.0 -s "../Fur.Web.Entry"\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'dotnet ef database update -s "../Fur.Web.Entry"\n')),Object(r.b)("h2",{id:"9206-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.20.6 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u7ed9 Fur \u63d0 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Fur/issues/new?issue"}),"Issue"),"\u3002"))),Object(r.b)("hr",null),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e86\u89e3\u66f4\u591a")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",Object(r.b)("inlineCode",{parentName:"p"},"\u6b63\u5411\u5de5\u5382")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/zh-cn/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli"}),"EF Core - \u7ba1\u7406\u6570\u636e\u5e93\u67b6\u6784")," \u7ae0\u8282\u3002"))))}l.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),d=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},l=function(e){var t=d(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),l=d(n),m=a,O=l["".concat(i,".").concat(m)]||l[m]||p[m]||r;return n?c.a.createElement(O,b(b({ref:t},s),{},{components:n})):c.a.createElement(O,b({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var s=2;s<r;s++)i[s]=n[s];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},143:function(e,t,n){"use strict";var a=n(0),c=n(19);t.a=function(){const e=Object(a.useContext)(c.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},144:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(143),c=n(145);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(c.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},145:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function c(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}))}}]);