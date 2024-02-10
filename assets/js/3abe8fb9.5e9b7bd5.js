"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[5521],{8915:function(e,n,o){o.r(n),o.d(n,{assets:function(){return a},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var t=o(1527),r=o(6274);const i={id:"logging",title:"Logging"},s=void 0,c={id:"logging",title:"Logging",description:"The library provides a way to inject your own, custom HTTP Logger. By default, no logging is performed.",source:"@site/docs/logging.md",sourceDirName:".",slug:"/logging",permalink:"/SpotifyAPI-NET/docs/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/logging.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1707561707,formattedLastUpdatedAt:"Feb 10, 2024",frontMatter:{id:"logging",title:"Logging"},sidebar:"docs",previous:{title:"Configuration",permalink:"/SpotifyAPI-NET/docs/configuration"},next:{title:"Proxy",permalink:"/SpotifyAPI-NET/docs/proxy"}},a={},l=[{value:"SimpleConsoleHTTPLogger",id:"simpleconsolehttplogger",level:2}];function g(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The library provides a way to inject your own, custom HTTP Logger. By default, no logging is performed."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'var config = SpotifyClientConfig\n  .CreateDefault("YourAccessToken")\n  .WithHTTPLogger(new YourHTTPLogger());\n\nvar spotify = new SpotifyClient(config);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"IHTTPLogger"})," interface can be found ",(0,t.jsx)(n.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Http/Interfaces/IHTTPLogger.cs",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"simpleconsolehttplogger",children:"SimpleConsoleHTTPLogger"}),"\n",(0,t.jsx)(n.p,{children:"The library ships with a simple console-based logger."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'var config = SpotifyClientConfig\n  .CreateDefault("YourAccessToken")\n  .WithHTTPLogger(new SimpleConsoleHTTPLogger());\n\nvar spotify = new SpotifyClient(config);\n'})}),"\n",(0,t.jsx)(n.p,{children:"This logger produces a simple console output for debugging purposes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'GET tracks/NotAnid []\n--\x3e BadRequest application/json {  "error" : {    "status" : 400,    "message" : "\n\nGET tracks/6YlOxoHWLjH6uVQvxUIUug []\n--\x3e OK application/json {  "album" : {    "album_type" : "album",    "arti\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},6274:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return s}});var t=o(959);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);