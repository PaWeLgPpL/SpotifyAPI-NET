"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[5546],{2784:function(t,n,e){e.r(n),e.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return u}});var o=e(1527),r=e(6274),i=e(849);const s={id:"proxy",title:"Proxy"},c=void 0,a={id:"proxy",title:"Proxy",description:"The included HTTPClient has full proxy configuration support:",source:"@site/docs/proxy.md",sourceDirName:".",slug:"/proxy",permalink:"/SpotifyAPI-NET/docs/proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/proxy.md",tags:[],version:"current",lastUpdatedBy:"Brad",lastUpdatedAt:1705312467,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{id:"proxy",title:"Proxy"},sidebar:"docs",previous:{title:"Logging",permalink:"/SpotifyAPI-NET/docs/logging"},next:{title:"Pagination",permalink:"/SpotifyAPI-NET/docs/pagination"}},p={},u=[];function d(t){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The included ",(0,o.jsx)(n.code,{children:"HTTPClient"})," has full proxy configuration support:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'var httpClient = new NetHttpClient(new ProxyConfig("localhost", 8080)\n{\n  User = "",\n  Password = "",\n  SkipSSLCheck = false,\n});\nvar config = SpotifyClientConfig\n  .CreateDefault()\n  .WithHTTPClient(httpClient);\n\nvar spotify = new SpotifyClient(config);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["As an example, ",(0,o.jsx)(n.a,{href:"https://mitmproxy.org/",children:"mitmproxy"})," can be used to inspect the requests and responses:"]}),"\n",(0,o.jsx)("img",{alt:"mitmproxy",src:(0,i.Z)("img/mitmproxy.png")})]})}function l(t={}){const{wrapper:n}={...(0,r.a)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},6274:function(t,n,e){e.d(n,{Z:function(){return c},a:function(){return s}});var o=e(959);const r={},i=o.createContext(r);function s(t){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),o.createElement(i.Provider,{value:n},t.children)}}}]);