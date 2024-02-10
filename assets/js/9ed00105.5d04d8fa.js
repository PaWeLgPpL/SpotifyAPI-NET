"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[9004],{62:function(e,n,t){t.r(n),t.d(n,{assets:function(){return a},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var i=t(1527),o=t(6274);const s={id:"configuration",title:"Configuration"},r=void 0,c={id:"configuration",title:"Configuration",description:"To configure the Spotify client functionality, the SpotifyClientConfig class exists.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/SpotifyAPI-NET/docs/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/configuration.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1707561707,formattedLastUpdatedAt:"Feb 10, 2024",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"docs",previous:{title:"Error Handling",permalink:"/SpotifyAPI-NET/docs/error_handling"},next:{title:"Logging",permalink:"/SpotifyAPI-NET/docs/logging"}},a={},l=[{value:"HTTPClient Notes",id:"httpclient-notes",level:2}];function f(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["To configure the Spotify client functionality, the ",(0,i.jsx)(n.code,{children:"SpotifyClientConfig"})," class exists."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'var config = SpotifyClientConfig.CreateDefault("YourAccessToken");\nvar spotify = new SpotifyClient(config);\n\n// is the same as\n\nvar spotify = new SpotifyClient("YourAccessToken");\n'})}),"\n",(0,i.jsx)(n.p,{children:"We won't cover every possible configuration in this part, head over to the specific guides for that:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"httpclient-notes",children:"HTTPClient Notes"}),"\n",(0,i.jsxs)(n.p,{children:["One important part of the configuration is the used HTTPClient. By default, every time a ",(0,i.jsx)(n.code,{children:"SpotifyClientConfig"})," is instantiated, a new ",(0,i.jsx)(n.code,{children:"HTTPClient"})," is created in the background. For Web Applications that require a lot of different configs due to user based access tokens, it is ",(0,i.jsx)(n.strong,{children:"not"})," advised to create a new config from scratch with every HTTP call. Instead, a default (static) config should be used to create a new config with a new access token."]}),"\n",(0,i.jsx)(n.p,{children:"Consider the following HTTP Endpoint:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public HttpResult Get()\n{\n  var config = SpotifyClientConfig.CreateDefault("YourAccessToken")\n  var spotify = new SpotifyClient(config);\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This creates a new ",(0,i.jsx)(n.code,{children:"HTTPClient"})," every time a request is made, which can be quite bad for the performance. Instead, we should use a base config and use ",(0,i.jsx)(n.code,{children:"WithToken"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'// somewhere global/static\npublic static SpotifyClientConfig DefaultConfig = SpotifyClientConfig.CreateDefault();\n\npublic HttpResult Get()\n{\n  var config = DefaultConfig.WithToken("YourAccessToken");\n  var spotify = new SpotifyClient(config);\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This way, a single ",(0,i.jsx)(n.code,{children:"HTTPClient"})," will be used. For a real example, checkout the ",(0,i.jsx)(n.a,{href:"/SpotifyAPI-NET/docs/example_asp",children:"ASP.NET Example"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},6274:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var i=t(959);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);