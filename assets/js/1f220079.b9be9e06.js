"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[2804],{4064:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=i(2488),n=i(7052);const a={id:"utilities",title:"Utilities",sidebar_label:"Utilities"},o=void 0,r={id:"web/utilities",title:"Utilities",description:"Paging-Methods",source:"@site/versioned_docs/version-5.1.1/web/utilities.md",sourceDirName:"web",slug:"/web/utilities",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/utilities",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/utilities.md",tags:[],version:"5.1.1",lastUpdatedBy:"TheBoyLeastLikelyTo",lastUpdatedAt:1715116664,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"utilities",title:"Utilities",sidebar_label:"Utilities"},sidebar:"someSidebar",previous:{title:"Tracks",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/tracks"},next:{title:"Getting Started",permalink:"/SpotifyAPI-NET/docs/5.1.1/auth/getting_started"}},l={},c=[{value:"Paging-Methods",id:"paging-methods",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"paging-methods",children:"Paging-Methods"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"SpotifyWebAPI"})," features two paging-helper Methods, ",(0,s.jsx)(t.code,{children:"GetNextPage(Paging<T> page)"})," and ",(0,s.jsx)(t.code,{children:"GetPreviousPage(Paging<T> page)"}),".\nBoth are an easy way to receive the next/previous page of a Paging-Object."]}),"\n",(0,s.jsx)(t.p,{children:"Sample:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",children:'var playlistTracks = _spotify.GetPlaylistTracks("1122095781", "4EcNf2l8rXInbJOf3tQdgU", "", 50);\nwhile (true)\n{\n    Console.WriteLine(playlistTracks.Items.Count);\n    if (!playlistTracks.HasNextPage())\n        break;\n    playlistTracks = _spotify.GetNextPage(playlistTracks);\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7052:(e,t,i)=>{i.d(t,{I:()=>r,M:()=>o});var s=i(6651);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);