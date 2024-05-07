"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[1652],{7304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(2488),o=n(7052);const s={id:"configuration",title:"Configuration"},c=void 0,r={id:"configuration",title:"Configuration",description:"To configure the Spotify client functionality, the SpotifyClientConfig class exists.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/SpotifyAPI-NET/docs/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/configuration.md",tags:[],version:"current",lastUpdatedBy:"TheBoyLeastLikelyTo",lastUpdatedAt:1715116664,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"docs",previous:{title:"Error Handling",permalink:"/SpotifyAPI-NET/docs/error_handling"},next:{title:"Logging",permalink:"/SpotifyAPI-NET/docs/logging"}},a={},l=[{value:"HTTPClient Notes",id:"httpclient-notes",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["To configure the Spotify client functionality, the ",(0,i.jsx)(t.code,{children:"SpotifyClientConfig"})," class exists."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'var config = SpotifyClientConfig.CreateDefault("YourAccessToken");\nvar spotify = new SpotifyClient(config);\n\n// is the same as\n\nvar spotify = new SpotifyClient("YourAccessToken");\n'})}),"\n",(0,i.jsx)(t.p,{children:"We won't cover every possible configuration in this part, head over to the specific guides for that:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"..."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"httpclient-notes",children:"HTTPClient Notes"}),"\n",(0,i.jsxs)(t.p,{children:["One important part of the configuration is the used HTTPClient. By default, every time a ",(0,i.jsx)(t.code,{children:"SpotifyClientConfig"})," is instantiated, a new ",(0,i.jsx)(t.code,{children:"HTTPClient"})," is created in the background. For Web Applications that require a lot of different configs due to user based access tokens, it is ",(0,i.jsx)(t.strong,{children:"not"})," advised to create a new config from scratch with every HTTP call. Instead, a default (static) config should be used to create a new config with a new access token."]}),"\n",(0,i.jsx)(t.p,{children:"Consider the following HTTP Endpoint:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'public HttpResult Get()\n{\n  var config = SpotifyClientConfig.CreateDefault("YourAccessToken")\n  var spotify = new SpotifyClient(config);\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This creates a new ",(0,i.jsx)(t.code,{children:"HTTPClient"})," every time a request is made, which can be quite bad for the performance. Instead, we should use a base config and use ",(0,i.jsx)(t.code,{children:"WithToken"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// somewhere global/static\npublic static SpotifyClientConfig DefaultConfig = SpotifyClientConfig.CreateDefault();\n\npublic HttpResult Get()\n{\n  var config = DefaultConfig.WithToken("YourAccessToken");\n  var spotify = new SpotifyClient(config);\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This way, a single ",(0,i.jsx)(t.code,{children:"HTTPClient"})," will be used. For a real example, checkout the ",(0,i.jsx)(t.a,{href:"/SpotifyAPI-NET/docs/example_asp",children:"ASP.NET Example"}),"."]})]})}function f(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7052:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>c});var i=n(6651);const o={},s=i.createContext(o);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);