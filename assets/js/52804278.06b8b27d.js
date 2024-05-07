"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[72],{808:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var r=s(2488),n=s(7052);const i={id:"search",title:"Search",sidebar_label:"Search"},c=void 0,a={id:"web/search",title:"Search",description:"SearchItems",source:"@site/versioned_docs/version-5.1.1/web/search.md",sourceDirName:"web",slug:"/web/search",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/search",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/search.md",tags:[],version:"5.1.1",lastUpdatedBy:"TheBoyLeastLikelyTo",lastUpdatedAt:1715116664,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"search",title:"Search",sidebar_label:"Search"},sidebar:"someSidebar",previous:{title:"Proxy Settings",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/proxy"},next:{title:"Tracks",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/tracks"}},d={},o=[{value:"SearchItems",id:"searchitems",level:2},{value:"SearchItemsEscaped",id:"searchitemsescaped",level:2}];function l(e){const t={blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"searchitems",children:"SearchItems"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Get Spotify catalog information about artists, albums, tracks or playlists that match a keyword string."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["::: warning\nYou may want to use ",(0,r.jsx)(t.code,{children:"SearchItemsEscaped"})," if you're processing user-input without validation\n:::"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"q"}),(0,r.jsx)(t.td,{children:"The search query's keywords (and optional field filters and operators), for example q=roadhouse+blues."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'"roadhouse+blues"'})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:"A list of item types to search across."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"SearchType.Album"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[limit]"}),(0,r.jsx)(t.td,{children:"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"20"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[offset]"}),(0,r.jsx)(t.td,{children:"The index of the first result to return. Default: 0"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"0"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[market]"}),(0,r.jsx)(t.td,{children:"An ISO 3166-1 alpha-2 country code or the string from_token."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'"de"'})})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Returns a ",(0,r.jsx)(t.code,{children:"SearchItem"})," which contains the properties ",(0,r.jsx)(t.code,{children:"Paging<FullArtist> Artists"}),",",(0,r.jsx)(t.code,{children:"Paging<FullTrack> Tracks"}),", ",(0,r.jsx)(t.code,{children:"Paging<SimpleAlbum> Albums"}),", ",(0,r.jsx)(t.code,{children:"Paging<SimplePlaylist> Playlists"}),". They are filled based on your search-type."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Usage"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'SearchItem item = _spotify.SearchItems("roadhouse+blues", SearchType.Album | SearchType.Playlist);\nConsole.WriteLine(item.Albums.Total); //How many results are there in total? NOTE: item.Tracks = item.Artists = null\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"searchitemsescaped",children:"SearchItemsEscaped"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Get Spotify catalog information about artists, albums, tracks or playlists that match a keyword string."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Works like ",(0,r.jsx)(t.code,{children:"SearchItems"}),", but URL escapes all characters"]})]})}function h(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},7052:(e,t,s)=>{s.d(t,{I:()=>a,M:()=>c});var r=s(6651);const n={},i=r.createContext(n);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);