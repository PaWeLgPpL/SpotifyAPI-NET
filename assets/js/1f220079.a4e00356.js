"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[4002],{1507:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return l}});var n=i(1527),s=i(6274);const o={id:"utilities",title:"Utilities",sidebar_label:"Utilities"},r=void 0,a={id:"web/utilities",title:"Utilities",description:"Paging-Methods",source:"@site/versioned_docs/version-5.1.1/web/utilities.md",sourceDirName:"web",slug:"/web/utilities",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/utilities",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/utilities.md",tags:[],version:"5.1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1707559073,formattedLastUpdatedAt:"Feb 10, 2024",frontMatter:{id:"utilities",title:"Utilities",sidebar_label:"Utilities"},sidebar:"someSidebar",previous:{title:"Tracks",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/tracks"},next:{title:"Getting Started",permalink:"/SpotifyAPI-NET/docs/5.1.1/auth/getting_started"}},c={},l=[{value:"Paging-Methods",id:"paging-methods",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"paging-methods",children:"Paging-Methods"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"SpotifyWebAPI"})," features two paging-helper Methods, ",(0,n.jsx)(t.code,{children:"GetNextPage(Paging<T> page)"})," and ",(0,n.jsx)(t.code,{children:"GetPreviousPage(Paging<T> page)"}),".\nBoth are an easy way to receive the next/previous page of a Paging-Object."]}),"\n",(0,n.jsx)(t.p,{children:"Sample:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'var playlistTracks = _spotify.GetPlaylistTracks("1122095781", "4EcNf2l8rXInbJOf3tQdgU", "", 50);\nwhile (true)\n{\n    Console.WriteLine(playlistTracks.Items.Count);\n    if (!playlistTracks.HasNextPage())\n        break;\n    playlistTracks = _spotify.GetNextPage(playlistTracks);\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},6274:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return r}});var n=i(959);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);