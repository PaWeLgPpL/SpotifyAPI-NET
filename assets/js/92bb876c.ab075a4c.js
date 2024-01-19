"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[6347],{9377:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});var r=n(1527),a=n(6274),i=n(2733);const l={id:"getting_started",title:"Getting Started"},s=void 0,o={id:"getting_started",title:"Getting Started",description:"Adding SpotifyAPI-NET to your project",source:"@site/docs/getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/SpotifyAPI-NET/docs/getting_started",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/getting_started.md",tags:[],version:"current",lastUpdatedBy:"Noel Griffin",lastUpdatedAt:1705690567,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{id:"getting_started",title:"Getting Started"},sidebar:"docs",previous:{title:"Introduction",permalink:"/SpotifyAPI-NET/docs/introduction"},next:{title:"Error Handling",permalink:"/SpotifyAPI-NET/docs/error_handling"}},u={},c=[{value:"Adding SpotifyAPI-NET to your project",id:"adding-spotifyapi-net-to-your-project",level:2},{value:"Package Managers",id:"package-managers",level:3},{value:"Add DLL Manually",id:"add-dll-manually",level:3},{value:"Compile Yourself",id:"compile-yourself",level:3},{value:"First API Calls",id:"first-api-calls",level:2},{value:"Query/Body Parameters",id:"querybody-parameters",level:2},{value:"Guides",id:"guides",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"adding-spotifyapi-net-to-your-project",children:"Adding SpotifyAPI-NET to your project"}),"\n",(0,r.jsx)(t.p,{children:"The library can be added to your project via the following methods:"}),"\n",(0,r.jsx)(t.h3,{id:"package-managers",children:"Package Managers"}),"\n",(0,r.jsx)(i.Z,{}),"\n",(0,r.jsx)(t.h3,{id:"add-dll-manually",children:"Add DLL Manually"}),"\n",(0,r.jsxs)(t.p,{children:["You can also grab the latest compiled DLL from our ",(0,r.jsx)(t.a,{href:"https://github.com/johnnycrazy/spotifyapi-net/releases",children:"GitHub Releases Page"}),". It can be added to your project via Visual Studio or directly in your ",(0,r.jsx)(t.code,{children:".csproj"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<ItemGroup>\n  <Reference Include="SpotifyAPI.Web">\n    <HintPath>..\\Dlls\\SpotifyAPI.Web.dll</HintPath>\n  </Reference>\n</ItemGroup>\n'})}),"\n",(0,r.jsx)(t.h3,{id:"compile-yourself",children:"Compile Yourself"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/JohnnyCrazy/SpotifyAPI-NET.git\ncd SpotifyAPI-NET\ndotnet restore\ndotnet build\n\nls -la SpotifyAPI.Web/bin/Debug/netstandard2.1/SpotifyAPI.Web.dll\n"})}),"\n",(0,r.jsx)(t.h2,{id:"first-api-calls",children:"First API Calls"}),"\n",(0,r.jsx)(t.p,{children:"You're now ready to issue your first calls to the Spotify API, a small console example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'using System;\nusing System.Threading.Tasks;\nusing SpotifyAPI.Web;\n\nclass Program\n{\n    static async Task Main()\n    {\n      var spotify = new SpotifyClient("YourAccessToken");\n\n      var track = await spotify.Tracks.Get("1s6ux0lNiTziSrd7iUAADH");\n      Console.WriteLine(track.Name);\n    }\n}\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Notice that the spotify api does not allow unauthorized API access. Wondering where you should get an access token from? For a quick test, head over to the ",(0,r.jsx)(t.a,{href:"https://developer.spotify.com/console/get-album/",children:"Spotify Developer Console"})," and generate an access token with the required scopes! For a permanent solution, head over to the ",(0,r.jsx)(t.a,{href:"/SpotifyAPI-NET/docs/auth_introduction",children:"authentication guides"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:"There is no online documentation for every available API call, but XML inline docs are available:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IUserProfileClient.cs",children:"UserProfile"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IBrowseClient.cs",children:"Browse"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IShowsClient.cs",children:"Shows"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IPlaylistsClient.cs",children:"Playlists"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/ISearchClient.cs",children:"Search"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IFollowClient.cs",children:"Follow"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/ITracksClient.cs",children:"Tracks"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IPlayerClient.cs",children:"Player"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IAlbumsClient.cs",children:"Albums"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IArtistsClient.cs",children:"Artists"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IPersonalizationClient.cs",children:"Personalization"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IEpisodesClient.cs",children:"Episodes"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/ILibraryClient.cs",children:"Library"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["All calls have the ",(0,r.jsx)(t.a,{href:"https://developer.spotify.com/documentation/web-api/reference-beta/",children:"Spotify Web API documentation reference"})," attached as a remark."]}),"\n",(0,r.jsx)(t.h2,{id:"querybody-parameters",children:"Query/Body Parameters"}),"\n",(0,r.jsx)(t.p,{children:"If an API endpoint has query or body parameters, a request model can be supplied to the method"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'// No optional or required query/body parameters\n// The track ID is part of the request path --\x3e it\'s not treated as query/body parameter\nvar track = await spotify.Tracks.Get("1s6ux0lNiTziSrd7iUAADH");\n\n// Optional query/body parameter\nvar track = await spotify.Tracks.Get("1s6ux0lNiTziSrd7iUAADH", new TrackRequest{\n  Market = "DE"\n});\n\n// Sometimes, query/body parameters are also required!\nvar tracks = await spotify.Tracks.GetSeveral(new TracksRequest(new List<string> {\n  "1s6ux0lNiTziSrd7iUAADH",\n  "6YlOxoHWLjH6uVQvxUIUug"\n}));\n'})}),"\n",(0,r.jsx)(t.p,{children:"If a query/body parameter is required, it has to be supplied in the constructor of the request model. In the background, empty/null checks are also performed to make sure required parameters are not empty/null. If it is optional, it can be supplied as a property to the request model."}),"\n",(0,r.jsx)(t.h2,{id:"guides",children:"Guides"}),"\n",(0,r.jsxs)(t.p,{children:['All other relevant topics are covered in the "Guides" and ',(0,r.jsx)(t.a,{href:"/SpotifyAPI-NET/docs/auth_introduction",children:"Authentication Guides"})," section in the sidebar!"]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2733:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(1762),a=n(959),i=n(5924),l="tabItem_JbbH",s=n(1527);function o(e){var t=e.children,n=e.hidden,r=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:n,children:t})}var u=n(118),c=n(8903),d=n(5339),h=n(9316),p=n(6006),f=n(3623);function y(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function b(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return y(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,c.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,h._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function v(e){var t,n,r,i,l=e.defaultValue,s=e.queryString,o=void 0!==s&&s,u=e.groupId,c=b(e),h=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:c})})),p=h[0],y=h[1],v=g({queryString:o,groupId:u}),I=v[0],x=v[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,f.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),A=j[0],P=j[1],S=function(){var e=null!=I?I:A;return m({value:e,tabValues:c})?e:null}();return(0,d.Z)((function(){S&&y(S)}),[S]),{selectedValue:p,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);y(e),x(e),P(e)}),[x,P,c]),tabValues:c}}var I=n(5089),x={tabList:"tabList_GQMQ",tabItem:"tabItem_Y22w"};function j(e){var t=e.className,n=e.block,r=e.selectedValue,a=e.selectValue,l=e.tabValues,o=[],c=(0,u.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=o.indexOf(t),i=l[n].value;i!==r&&(c(t),a(i))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;n=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var i,l=o.indexOf(e.currentTarget)-1;n=null!=(i=o[l])?i:o[o.length-1]}null==(t=n)||t.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,s.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return o.push(e)},onKeyDown:h,onClick:d},a,{className:(0,i.Z)("tabs__item",x.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function A(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function P(e){var t=v(e);return(0,s.jsxs)("div",{className:(0,i.Z)("tabs-container",x.tabList),children:[(0,s.jsx)(j,Object.assign({},e,t)),(0,s.jsx)(A,Object.assign({},e,t))]})}function S(e){var t=(0,I.Z)();return(0,s.jsx)(P,Object.assign({},e,{children:y(e.children)}),String(t))}var T=function(){return(0,s.jsx)("div",{style:{padding:"10px"},children:(0,s.jsxs)(S,{defaultValue:"cli",values:[{label:".NET CLI",value:"cli"},{label:"Package Manager",value:"nuget"},{label:"Package Reference",value:"reference"}],children:[(0,s.jsx)(o,{value:"cli",children:(0,s.jsx)(r.Z,{language:"shell",className:"shell",children:"dotnet add package SpotifyAPI.Web\n# Optional Auth module, which includes an embedded HTTP Server for OAuth2\ndotnet add package SpotifyAPI.Web.Auth\n"})}),(0,s.jsx)(o,{value:"nuget",children:(0,s.jsx)(r.Z,{language:"shell",className:"shell",children:"Install-Package SpotifyAPI.Web\n# Optional Auth module, which includes an embedded HTTP Server for OAuth2\nInstall-Package SpotifyAPI.Web.Auth\n"})}),(0,s.jsx)(o,{value:"reference",children:(0,s.jsx)(r.Z,{language:"xml",className:"xml",children:'<PackageReference Include="SpotifyAPI.Web" Version="7.0.0" />\n\x3c!-- Optional Auth module, which includes an embedded HTTP Server for OAuth2 --\x3e\n<PackageReference Include="SpotifyAPI.Web.Auth" Version="7.0.0" />\n'})})]})})}},6274:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return l}});var r=n(959);const a={},i=r.createContext(a);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);