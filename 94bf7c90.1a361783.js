(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),a=(t(0),t(96)),i={id:"projects",title:"web -> projects:",sidebar_label:"projects"},c={unversionedId:"web_schema/projects",id:"web_schema/projects",isDocsHomePage:!1,title:"web -> projects:",description:"`yaml",source:"@site/docs/web_schema/projects.md",slug:"/web_schema/projects",permalink:"/docs/web_schema/projects",editUrl:"https://github.com/acrlakshman/profileio/edit/master/docs/docs/web_schema/projects.md",version:"current",sidebar_label:"projects",sidebar:"docs",previous:{title:"web -> education:",permalink:"/docs/web_schema/education"},next:{title:"web -> publications:",permalink:"/docs/web_schema/publications"}},s=[],l={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'projects:\n  # required\n  label: "Projects"\n\n  # optional\n  rank: 4\n\n  # optional (maximum items to render in homepage for website)\n  maxItemsToRender: 3 # If this is not provided, it defaults to 5 (src/config.ts)\n\n  # required\n  list:\n    - value:\n        # required\n        name: ProfileIO\n        # required\n        description: "Delightfully simple website and resume generator for students, researchers, and engineers"\n        # optional (supports markdown for web)\n        team: "_with [Lakshman Anumolu](//lakshmananumolu.com)_"\n        # optional\n        note: ""\n        # optional\n        thumbnail: profileio.png\n        # optional\n        highlights:\n          - brief: ""\n            detail: Website and resume generator via YAML\n        # optional\n        keywords:\n          - resume\n          - website\n          - YAML\n          - markdown\n        # optional\n        startDate: \'2020\' # string (if you want to just enter numbers, enclose it in quotes)\n        # optional\n        endDate: Present\n\n        # optional\n        # If webPage is not provided, then url will be linked in the homepage for this project\n        url: https://github.com/acrlakshman/profileio\n\n        # optional\n        roles:\n          - Architect\n          - Developer\n        # optional\n        type: application\n        # optional\n        webPage:\n          slug: profileio\n          detail: project/profileio.md # if the content is empty, "url" will be linked in the homepage for the project\n      render: true # required\n')))}p.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return t?o.a.createElement(b,c(c({ref:n},l),{},{components:t})):o.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);