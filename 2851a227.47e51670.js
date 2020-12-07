(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(0),n(188)),i=n(190),c={id:"auth_introduction",title:"Introduction"},s={id:"auth_introduction",title:"Introduction",description:"Spotify does not allow unauthorized access to the API. Thus, you need an access token to make requests. This access token can be gathered via multiple schemes, all following the OAuth2 spec. Since it's important to choose the correct scheme for your usecase, make sure you have a grasp of the following terminology/docs:",source:"@site/docs/auth_introduction.md",permalink:"/SpotifyAPI-NET/docs/next/auth_introduction",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/auth_introduction.md",version:"next",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1607354967,sidebar:"docs",previous:{title:"Unit Testing",permalink:"/SpotifyAPI-NET/docs/next/unit_testing"},next:{title:"Client Credentials",permalink:"/SpotifyAPI-NET/docs/next/client_credentials"}},u=[],l={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Spotify does not allow unauthorized access to the API. Thus, you need an access token to make requests. This access token can be gathered via multiple schemes, all following the OAuth2 spec. Since it's important to choose the correct scheme for your usecase, make sure you have a grasp of the following terminology/docs:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"OAuth2"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow"}),"Spotify Authorization Flows"))),Object(a.b)("p",null,"Since every auth flow also needs an application in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/dashboard/"}),"Spotify dashboard"),", make sure you have the necessary values (like ",Object(a.b)("inlineCode",{parentName:"p"},"Client Id")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Client Secret"),")."),Object(a.b)("p",null,"Then, continue with the docs of the specific auth flows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/next/client_credentials"}),"Client Credentials")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/next/implicit_grant"}),"Implicit Grant")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/next/authorization_code"}),"Authorization Code")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/next/pkce"}),"PKCE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/next/token_swap"}),"(Token Swap)"))),Object(a.b)("img",{alt:"auth comparison",src:Object(i.a)("img/auth_comparison.png")}))}p.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||a;return n?o.a.createElement(d,c({ref:t},u,{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},189:function(e,t,n){"use strict";var r=n(0),o=n(49);t.a=function(){return Object(r.useContext)(o.a)}},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(191);var r=n(189);function o(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},191:function(e,t,n){"use strict";var r=n(17),o=n(35),a=n(192),i="".startsWith;r(r.P+r.F*n(193)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})},192:function(e,t,n){var r=n(69),o=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},193:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);