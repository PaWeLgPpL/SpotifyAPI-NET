"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[5445],{3272:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return p}});var o=n(1527),r=n(6274);const i={id:"proxy",title:"Proxy Settings",sidebar_label:"Proxy Settings"},s=void 0,a={id:"web/proxy",title:"Proxy Settings",description:"You can forward your proxy settings to the web api by using a field in the SpotifyLocalAPIConfig.",source:"@site/versioned_docs/version-5.1.1/web/proxy.md",sourceDirName:"web",slug:"/web/proxy",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/proxy.md",tags:[],version:"5.1.1",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1699051940,formattedLastUpdatedAt:"Nov 3, 2023",frontMatter:{id:"proxy",title:"Proxy Settings",sidebar_label:"Proxy Settings"},sidebar:"someSidebar",previous:{title:"Profiles",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/profiles"},next:{title:"Search",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/search"}},c={},p=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["You can forward your proxy settings to the web api by using a field in the ",(0,o.jsx)(t.code,{children:"SpotifyLocalAPIConfig"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:'ProxyConfig proxyConfig = new ProxyConfig()\n{\n    Host = "127.0.0.1",\n    Port = 8080\n    // Additional values like Username and Password are available\n};\n\nSpotifyWebAPI api = new SpotifyWebAPI(proxyConfig);\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6274:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var o=n(959);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);