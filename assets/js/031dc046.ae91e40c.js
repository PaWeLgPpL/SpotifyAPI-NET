"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[1918],{8717:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=o(1527),n=o(6274),s=o(849);const a={id:"example_blazor_wasm",title:"Blazor WASM"},i=void 0,l={id:"example_blazor_wasm",title:"Blazor WASM",description:"Description",source:"@site/docs/example_blazor_wasm.md",sourceDirName:".",slug:"/example_blazor_wasm",permalink:"/SpotifyAPI-NET/docs/example_blazor_wasm",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/example_blazor_wasm.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1707561707,formattedLastUpdatedAt:"Feb 10, 2024",frontMatter:{id:"example_blazor_wasm",title:"Blazor WASM"},sidebar:"docs",previous:{title:"ASP.NET",permalink:"/SpotifyAPI-NET/docs/example_asp"},next:{title:"Blazor ServerSide",permalink:"/SpotifyAPI-NET/docs/example_blazor"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Run it",id:"run-it",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["This small cross-platform web app runs on ",(0,r.jsx)(t.code,{children:"Blazor WebAssembly"}),", which was released on 19. May 2020. It allows to run C# code in any browser which supports WebAssembly. This allows to create .NET full-stack web projects without writing any JavaScript. Find more about ",(0,r.jsx)(t.a,{href:"https://devblogs.microsoft.com/aspnet/blazor-webassembly-3-2-0-now-available/",children:"Blazor WebAssembly here"})]}),"\n",(0,r.jsxs)(t.p,{children:["Since this library is compatible with ",(0,r.jsx)(t.code,{children:".NET Standard 2.1"}),", you can use all features of ",(0,r.jsx)(t.code,{children:"SpotifyAPI.Web"})," in your blazor wasm app. The example logs the user in via ",(0,r.jsx)(t.code,{children:"Implicit Grant"})," and does 2 user-related API requests from the browser. You can observe the requests from your browsers network tools."]}),"\n",(0,r.jsx)("img",{alt:"BlazorWASM Spotify Example",src:(0,s.Z)("img/blazorwasm_homepage.png")}),"\n",(0,r.jsx)("img",{alt:"BlazorWASM Spotify Example - network tools",src:(0,s.Z)("img/blazorwasm_network_tools.png")}),"\n",(0,r.jsx)(t.h2,{id:"run-it",children:"Run it"}),"\n",(0,r.jsxs)(t.p,{children:["Before running it, make sure you created an app in your ",(0,r.jsx)(t.a,{href:"https://developer.spotify.com/dashboard/",children:"spotify dashboard"})," and ",(0,r.jsx)(t.code,{children:"https://localhost:5543"})," is a redirect uri of it."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# Assumes linux and current working directory is the cloned repository\ncd SpotifyAPI.Web.Examples/Example.BlazorWASM\ndotnet restore\n\necho "{ \\"SPOTIFY_CLIENT_ID\\": \\"YourSpotifyClientId\\" }" > wwwroot/appsettings.json\ndotnet run\n\n# Visit https://localhost:5543\n'})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6274:function(e,t,o){o.d(t,{Z:function(){return i},a:function(){return a}});var r=o(959);const n={},s=r.createContext(n);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);