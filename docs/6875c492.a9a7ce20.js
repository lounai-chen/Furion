(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{151:function(e,a,t){"use strict";var r=t(149);t.d(a,"a",(function(){return r.a}))},153:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(143),m=t(139),c=t(152),o=t(148),s=t(156),i=t(141),u=t(48),g=t.n(u),E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,u,d,v=e.children,h=e.frontMatter,p=e.metadata,f=e.truncated,b=e.isBlogPostPage,N=void 0!==b&&b,_=p.date,w=p.permalink,k=p.tags,y=p.readingTime,T=h.author,M=h.title,P=h.image,J=h.keywords,F=h.author_url||h.authorURL,I=h.author_title||h.authorTitle,R=h.author_image_url||h.authorImageURL,j=Object(i.a)(P,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,J&&J.length&&n.a.createElement("meta",{name:"keywords",content:J.join(",")}),P&&n.a.createElement("meta",{property:"og:image",content:j}),P&&n.a.createElement("meta",{property:"twitter:image",content:j}),P&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+M})),n.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=_.substring(0,10).split("-"),r=t[0],u=E[parseInt(t[1],10)-1],d=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",g.a.blogPostTitle)},N?M:n.a.createElement(o.a,{to:w},M)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:_,className:g.a.blogPostDate},u," ",d,", ",r," ",y&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},R&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:F,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:R,alt:T})),n.a.createElement("div",{className:"avatar__intro"},T&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:F,target:"_blank",rel:"noreferrer noopener"},T)),n.a.createElement("small",{className:"avatar__subtitle"},I)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(m.a,{components:s.a},v)),(k.length>0||f)&&n.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),k.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),f&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(o.a,{to:p.permalink,"aria-label":"Read more about "+M},n.a.createElement("strong",null,"Read More"))))))}},92:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(150),m=t(153),c=t(148);a.default=function(e){var a=e.metadata,t=e.items,r=a.allTagsPath,o=a.name,s=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+o+'"',description:'Blog | Tagged "'+o+'"'},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("main",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,s," ",function(e,a){return e>1?a+"s":a}(s,"post"),' tagged with "',o,'"'),n.a.createElement(c.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return n.a.createElement(m.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},n.a.createElement(a,null))})))))))}}}]);