(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{124:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),y=n,d=u["".concat(i,".").concat(y)]||u[y]||f[y]||a;return r?o.a.createElement(d,c(c({ref:t},s),{},{components:r})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(124)),i={id:"proxy",title:"Proxy Settings",sidebar_label:"Proxy Settings"},c={unversionedId:"web/proxy",id:"version-5.1.1/web/proxy",isDocsHomePage:!1,title:"Proxy Settings",description:"You can forward your proxy settings to the web api by using a field in the SpotifyLocalAPIConfig.",source:"@site/versioned_docs/version-5.1.1/web/proxy.md",slug:"/web/proxy",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/proxy",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/proxy.md",version:"5.1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1622836144,formattedLastUpdatedAt:"6/4/2021",sidebar_label:"Proxy Settings",sidebar:"version-5.1.1/someSidebar",previous:{title:"Profiles",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/profiles"},next:{title:"Search",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/search"}},p=[],s={toc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can forward your proxy settings to the web api by using a field in the ",Object(a.b)("inlineCode",{parentName:"p"},"SpotifyLocalAPIConfig"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-csharp"},'ProxyConfig proxyConfig = new ProxyConfig()\n{\n    Host = "127.0.0.1",\n    Port = 8080\n    // Additional values like Username and Password are available\n};\n\nSpotifyWebAPI api = new SpotifyWebAPI(proxyConfig);\n')))}l.isMDXComponent=!0}}]);