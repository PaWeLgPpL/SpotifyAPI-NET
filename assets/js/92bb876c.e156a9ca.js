"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[2256],{5544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(2488),a=n(7052),i=n(9476);const l={id:"getting_started",title:"Getting Started"},s=void 0,o={id:"getting_started",title:"Getting Started",description:"Adding SpotifyAPI-NET to your project",source:"@site/docs/getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/SpotifyAPI-NET/docs/getting_started",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/getting_started.md",tags:[],version:"current",lastUpdatedBy:"Andrew Garvin",lastUpdatedAt:1715116684,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"getting_started",title:"Getting Started"},sidebar:"docs",previous:{title:"Introduction",permalink:"/SpotifyAPI-NET/docs/introduction"},next:{title:"Error Handling",permalink:"/SpotifyAPI-NET/docs/error_handling"}},c={},u=[{value:"Adding SpotifyAPI-NET to your project",id:"adding-spotifyapi-net-to-your-project",level:2},{value:"Package Managers",id:"package-managers",level:3},{value:"Add DLL Manually",id:"add-dll-manually",level:3},{value:"Compile Yourself",id:"compile-yourself",level:3},{value:"First API Calls",id:"first-api-calls",level:2},{value:"Query/Body Parameters",id:"querybody-parameters",level:2},{value:"Guides",id:"guides",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"adding-spotifyapi-net-to-your-project",children:"Adding SpotifyAPI-NET to your project"}),"\n",(0,r.jsx)(t.p,{children:"The library can be added to your project via the following methods:"}),"\n",(0,r.jsx)(t.h3,{id:"package-managers",children:"Package Managers"}),"\n",(0,r.jsx)(i.c,{}),"\n",(0,r.jsx)(t.h3,{id:"add-dll-manually",children:"Add DLL Manually"}),"\n",(0,r.jsxs)(t.p,{children:["You can also grab the latest compiled DLL from our ",(0,r.jsx)(t.a,{href:"https://github.com/johnnycrazy/spotifyapi-net/releases",children:"GitHub Releases Page"}),". It can be added to your project via Visual Studio or directly in your ",(0,r.jsx)(t.code,{children:".csproj"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<ItemGroup>\n  <Reference Include="SpotifyAPI.Web">\n    <HintPath>..\\Dlls\\SpotifyAPI.Web.dll</HintPath>\n  </Reference>\n</ItemGroup>\n'})}),"\n",(0,r.jsx)(t.h3,{id:"compile-yourself",children:"Compile Yourself"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/JohnnyCrazy/SpotifyAPI-NET.git\ncd SpotifyAPI-NET\ndotnet restore\ndotnet build\n\nls -la SpotifyAPI.Web/bin/Debug/netstandard2.1/SpotifyAPI.Web.dll\n"})}),"\n",(0,r.jsx)(t.h2,{id:"first-api-calls",children:"First API Calls"}),"\n",(0,r.jsx)(t.p,{children:"You're now ready to issue your first calls to the Spotify API, a small console example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'using System;\nusing System.Threading.Tasks;\nusing SpotifyAPI.Web;\n\nclass Program\n{\n    static async Task Main()\n    {\n      var spotify = new SpotifyClient("YourAccessToken");\n\n      var track = await spotify.Tracks.Get("1s6ux0lNiTziSrd7iUAADH");\n      Console.WriteLine(track.Name);\n    }\n}\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Notice that the spotify api does not allow unauthorized API access. Wondering where you should get an access token from? For a quick test, head over to the ",(0,r.jsx)(t.a,{href:"https://developer.spotify.com/console/get-album/",children:"Spotify Developer Console"})," and generate an access token with the required scopes! For a permanent solution, head over to the ",(0,r.jsx)(t.a,{href:"/SpotifyAPI-NET/docs/auth_introduction",children:"authentication guides"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:"There is no online documentation for every available API call, but XML inline docs are available:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IUserProfileClient.cs",children:"UserProfile"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IBrowseClient.cs",children:"Browse"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IShowsClient.cs",children:"Shows"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IPlaylistsClient.cs",children:"Playlists"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/ISearchClient.cs",children:"Search"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IFollowClient.cs",children:"Follow"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/ITracksClient.cs",children:"Tracks"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IPlayerClient.cs",children:"Player"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IAlbumsClient.cs",children:"Albums"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IArtistsClient.cs",children:"Artists"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IPersonalizationClient.cs",children:"Personalization"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IEpisodesClient.cs",children:"Episodes"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/ILibraryClient.cs",children:"Library"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["All calls have the ",(0,r.jsx)(t.a,{href:"https://developer.spotify.com/documentation/web-api/reference-beta/",children:"Spotify Web API documentation reference"})," attached as a remark."]}),"\n",(0,r.jsx)(t.h2,{id:"querybody-parameters",children:"Query/Body Parameters"}),"\n",(0,r.jsx)(t.p,{children:"If an API endpoint has query or body parameters, a request model can be supplied to the method"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'// No optional or required query/body parameters\n// The track ID is part of the request path --\x3e it\'s not treated as query/body parameter\nvar track = await spotify.Tracks.Get("1s6ux0lNiTziSrd7iUAADH");\n\n// Optional query/body parameter\nvar track = await spotify.Tracks.Get("1s6ux0lNiTziSrd7iUAADH", new TrackRequest{\n  Market = "DE"\n});\n\n// Sometimes, query/body parameters are also required!\nvar tracks = await spotify.Tracks.GetSeveral(new TracksRequest(new List<string> {\n  "1s6ux0lNiTziSrd7iUAADH",\n  "6YlOxoHWLjH6uVQvxUIUug"\n}));\n'})}),"\n",(0,r.jsx)(t.p,{children:"If a query/body parameter is required, it has to be supplied in the constructor of the request model. In the background, empty/null checks are also performed to make sure required parameters are not empty/null. If it is optional, it can be supplied as a property to the request model."}),"\n",(0,r.jsx)(t.h2,{id:"guides",children:"Guides"}),"\n",(0,r.jsxs)(t.p,{children:['All other relevant topics are covered in the "Guides" and ',(0,r.jsx)(t.a,{href:"/SpotifyAPI-NET/docs/auth_introduction",children:"Authentication Guides"})," section in the sidebar!"]})]})}function h(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9476:(e,t,n)=>{n.d(t,{c:()=>T});var r=n(5648),a=n(6651),i=n(6548);const l="tabItem_VAqR";var s=n(2488);function o(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.c)(l,r),hidden:n,children:t})}var c=n(2440),u=n(4760),d=n(1440),h=n(3540),p=n(6904),f=n(6008);function y(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function b(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return y(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,p.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.Uz)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,h._M)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function I(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=b(e),[l,s]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[o,c]=g({queryString:n,groupId:r}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,i]=(0,f.IN)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),p=(()=>{const e=null!=o?o:u;return m({value:e,tabValues:i})?e:null})();(0,d.c)((()=>{p&&s(p)}),[p]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);s(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var x=n(5168);const v={tabList:"tabList_zsOt",tabItem:"tabItem_wrWy"};function A(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,c.MV)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),i=l[n].value;i!==r&&(u(t),a(i))},h=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const t=o.indexOf(e.currentTarget)+1;n=null!=(r=o[t])?r:o[0];break}case"ArrowLeft":{var a;const t=o.indexOf(e.currentTarget)-1;n=null!=(a=o[t])?a:o[o.length-1];break}}null==(t=n)||t.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.c)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:h,onClick:d,...a,className:(0,i.c)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===t}),children:null!=n?n:t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function P(e){const t=I(e);return(0,s.jsxs)("div",{className:(0,i.c)("tabs-container",v.tabList),children:[(0,s.jsx)(A,{...e,...t}),(0,s.jsx)(j,{...e,...t})]})}function S(e){const t=(0,x.c)();return(0,s.jsx)(P,{...e,children:y(e.children)},String(t))}const T=()=>(0,s.jsx)("div",{style:{padding:"10px"},children:(0,s.jsxs)(S,{defaultValue:"cli",values:[{label:".NET CLI",value:"cli"},{label:"Package Manager",value:"nuget"},{label:"Package Reference",value:"reference"}],children:[(0,s.jsx)(o,{value:"cli",children:(0,s.jsx)(r.c,{language:"shell",className:"shell",children:"dotnet add package SpotifyAPI.Web\n# Optional Auth module, which includes an embedded HTTP Server for OAuth2\ndotnet add package SpotifyAPI.Web.Auth\n"})}),(0,s.jsx)(o,{value:"nuget",children:(0,s.jsx)(r.c,{language:"shell",className:"shell",children:"Install-Package SpotifyAPI.Web\n# Optional Auth module, which includes an embedded HTTP Server for OAuth2\nInstall-Package SpotifyAPI.Web.Auth\n"})}),(0,s.jsx)(o,{value:"reference",children:(0,s.jsx)(r.c,{language:"xml",className:"xml",children:'<PackageReference Include="SpotifyAPI.Web" Version="7.1.1" />\n\x3c!-- Optional Auth module, which includes an embedded HTTP Server for OAuth2 --\x3e\n<PackageReference Include="SpotifyAPI.Web.Auth" Version="7.1.1" />\n'})})]})})},7052:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>l});var r=n(6651);const a={},i=r.createContext(a);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);