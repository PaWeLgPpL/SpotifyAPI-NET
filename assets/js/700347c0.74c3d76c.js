"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[4904],{5596:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=s(2488),i=s(7052);const n={id:"personalization",title:"Personalization",sidebar_label:"Personalization"},d=void 0,l={id:"web/personalization",title:"Personalization",description:"GetUsersTopTracks",source:"@site/versioned_docs/version-5.1.1/web/personalization.md",sourceDirName:"web",slug:"/web/personalization",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/personalization",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/personalization.md",tags:[],version:"5.1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1715116728,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"personalization",title:"Personalization",sidebar_label:"Personalization"},sidebar:"someSidebar",previous:{title:"Library",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/library"},next:{title:"Player",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/player"}},o={},c=[{value:"GetUsersTopTracks",id:"getuserstoptracks",level:2},{value:"GetUsersTopArtists",id:"getuserstopartists",level:2},{value:"GetUsersRecentlyPlayedTracks",id:"getusersrecentlyplayedtracks",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"getuserstoptracks",children:"GetUsersTopTracks"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Get the current user\u2019s top tracks based on calculated affinity."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[timeRange]"}),(0,r.jsx)(t.td,{children:"Over what time frame the affinities are compute."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"TimeRangeType.MediumTerm"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[limit]"}),(0,r.jsx)(t.td,{children:"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"20"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[offset]"}),(0,r.jsx)(t.td,{children:"The index of the first entity to return. Default: 0 (i.e., the first track). Use with limit to get the next set of entities."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"0"})})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Returns a ",(0,r.jsx)(t.a,{href:"https://developer.spotify.com/web-api/object-model/#track-object-full",children:"FullTrack"})," wrapped inside a ",(0,r.jsx)(t.a,{href:"https://developer.spotify.com/web-api/object-model/#paging-object",children:"Paging-object"})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Usage"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Paging<FullTrack> tracks = _spotify.GetUsersTopTracks();\ntracks.Items.ForEach(item => Console.WriteLine(item.Name)); //Display all fetched Track-Names (max 20)\nConsole.WriteLine(tracks.Total.ToString()) //Display total album track count\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"getuserstopartists",children:"GetUsersTopArtists"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Get the current user\u2019s top artists based on calculated affinity."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[timeRange]"}),(0,r.jsx)(t.td,{children:"Over what time frame the affinities are compute."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"TimeRangeType.MediumTerm"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[limit]"}),(0,r.jsx)(t.td,{children:"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"20"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[offset]"}),(0,r.jsx)(t.td,{children:"The index of the first entity to return. Default: 0 (i.e., the first track). Use with limit to get the next set of entities."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"0"})})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Returns a ",(0,r.jsx)(t.a,{href:"https://developer.spotify.com/web-api/object-model/#artist-object-full",children:"FullArtist"})," wrapped inside a ",(0,r.jsx)(t.a,{href:"https://developer.spotify.com/web-api/object-model/#paging-object",children:"Paging-object"})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Usage"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Paging<FullArtist> artists = _spotify.GetUsersTopArtists();\nartists.Items.ForEach(item => Console.WriteLine(item.Name)); //Display all fetched Artist-Names (max 20)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"getusersrecentlyplayedtracks",children:"GetUsersRecentlyPlayedTracks"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Get tracks from the current user\u2019s recent play history."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[limit]"}),(0,r.jsx)(t.td,{children:"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"20"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[after]"}),(0,r.jsx)(t.td,{children:"Returns all items after (but not including) this cursor position."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"DateTime.Now.AddDays(-1)"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[before]"}),(0,r.jsx)(t.td,{children:"Returns all items before (but not including) this cursor position."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"DateTime.Now.AddDays(-1)"})})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Returns a ",(0,r.jsx)(t.code,{children:"PlayHistory"})," wrapped inside a ",(0,r.jsx)(t.a,{href:"https://developer.spotify.com/web-api/object-model/#cursor-based-paging-object",children:"CursorPaging-object"})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Usage"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"CursorPaging<PlayHistory> histories = _spotify.GetUsersRecentlyPlayedTracks();\nhistories.Items.ForEach(item => Console.WriteLine(item.Track.Name));\n"})}),"\n",(0,r.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},7052:(e,t,s)=>{s.d(t,{I:()=>l,M:()=>d});var r=s(6651);const i={},n=r.createContext(i);function d(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);