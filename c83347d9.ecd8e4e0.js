(window.webpackJsonp=window.webpackJsonp||[]).push([[2189],{2261:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(2839)),p=["components"],i={},c={unversionedId:"puppeteer.page.setcontent",id:"puppeteer.page.setcontent",isDocsHomePage:!1,title:"puppeteer.page.setcontent",description:"Home &gt; puppeteer &gt; Page &gt; setContent",source:"@site/docs\\puppeteer.page.setcontent.md",slug:"/puppeteer.page.setcontent",permalink:"/puppeteer/docs/next/puppeteer.page.setcontent",version:"current"},b=[{value:"Page.setContent() method",id:"pagesetcontent-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],l={toc:b};function s(e){var t=e.components,n=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page"},"Page")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.setcontent"},"setContent")),Object(o.b)("h2",{id:"pagesetcontent-method"},"Page.setContent() method"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"setContent(html: string, options?: WaitForOptions): Promise<void>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"html"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"HTML markup to assign to the page.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.waitforoptions"},"WaitForOptions")),Object(o.b)("td",{parentName:"tr",align:null},"Parameters that has some properties.")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<","void",">"),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"The parameter ",Object(o.b)("inlineCode",{parentName:"p"},"options")," might have the following options."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"timeout")," : Maximum time in milliseconds for resources to load, defaults to 30 seconds, pass ",Object(o.b)("inlineCode",{parentName:"p"},"0")," to disable timeout. The default value can be changed by using the ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.setdefaultnavigationtimeout"},"page.setDefaultNavigationTimeout(timeout)")," or ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.setdefaulttimeout"},"page.setDefaultTimeout(timeout)")," methods.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"waitUntil"),": When to consider setting markup succeeded, defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"load"),". Given an array of event strings, setting content is considered to be successful after all events have been fired. Events can be either:",Object(o.b)("br",null)," - ",Object(o.b)("inlineCode",{parentName:"p"},"load")," : consider setting content to be finished when the ",Object(o.b)("inlineCode",{parentName:"p"},"load")," event is fired.",Object(o.b)("br",null)," - ",Object(o.b)("inlineCode",{parentName:"p"},"domcontentloaded")," : consider setting content to be finished when the ",Object(o.b)("inlineCode",{parentName:"p"},"DOMContentLoaded")," event is fired.",Object(o.b)("br",null)," - ",Object(o.b)("inlineCode",{parentName:"p"},"networkidle0")," : consider setting content to be finished when there are no more than 0 network connections for at least ",Object(o.b)("inlineCode",{parentName:"p"},"500")," ms.",Object(o.b)("br",null)," - ",Object(o.b)("inlineCode",{parentName:"p"},"networkidle2")," : consider setting content to be finished when there are no more than 2 network connections for at least ",Object(o.b)("inlineCode",{parentName:"p"},"500")," ms."))))}s.isMDXComponent=!0},2839:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,m=s["".concat(p,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var b=2;b<o;b++)p[b]=n[b];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);