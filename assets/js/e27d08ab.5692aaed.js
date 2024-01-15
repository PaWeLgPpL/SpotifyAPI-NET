"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[4393],{641:function(e,t,s){s.r(t),s.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return d}});var n=s(1527),r=s(6274);const i={id:"albums",title:"Albums",sidebar_label:"Albums"},l=void 0,a={id:"web/albums",title:"Albums",description:"GetAlbumTracks",source:"@site/versioned_docs/version-5.1.1/web/albums.md",sourceDirName:"web",slug:"/web/albums",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/albums",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/albums.md",tags:[],version:"5.1.1",lastUpdatedBy:"Brad",lastUpdatedAt:1705312467,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{id:"albums",title:"Albums",sidebar_label:"Albums"},sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/getting_started"},next:{title:"Artists",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/artists"}},c={},d=[{value:"GetAlbumTracks",id:"getalbumtracks",level:2},{value:"GetAlbum",id:"getalbum",level:2},{value:"GetSeveralAlbums",id:"getseveralalbums",level:2}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"getalbumtracks",children:"GetAlbumTracks"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Get Spotify catalog information about an album's tracks. Optional parameters can be used to limit the number of tracks returned."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Example"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"The Spotify ID for the album."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"5O7V8l4SeXTymVp3IesT9C"'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"[limit]"}),(0,n.jsx)(t.td,{children:"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"20"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"[offset]"}),(0,n.jsx)(t.td,{children:"The index of the first track to return. Default: 0 (the first object)."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"0"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"[market]"}),(0,n.jsx)(t.td,{children:"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"DE"'})})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Returns a ",(0,n.jsx)(t.a,{href:"https://developer.spotify.com/web-api/object-model/#track-object-simplified",children:"SimpleTrack"})," wrapped inside a ",(0,n.jsx)(t.a,{href:"https://developer.spotify.com/web-api/object-model/#paging-object",children:"Paging-object"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Usage"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'Paging<SimpleTrack> tracks = _spotify.GetAlbumTracks("5O7V8l4SeXTymVp3IesT9C");\ntracks.Items.ForEach(item => Console.WriteLine(item.Name)); //Display all fetched Track-Names (max 20)\nConsole.WriteLine(tracks.Total.ToString()) //Display total album track count\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"getalbum",children:"GetAlbum"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Get Spotify catalog information for a single album."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Example"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"The Spotify ID for the album."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"5O7V8l4SeXTymVp3IesT9C"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"[market]"}),(0,n.jsx)(t.td,{children:"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"DE"'})})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Returns a ",(0,n.jsx)(t.a,{href:"https://developer.spotify.com/web-api/object-model/#album-object-full",children:"FullAlbum"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Usage"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'FullAlbum album = _spotify.GetAlbum("5O7V8l4SeXTymVp3IesT9C");\nConsole.WriteLine(album.Name + "| Popularity: " + album.Popularity); //Display name and Popularity\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"getseveralalbums",children:"GetSeveralAlbums"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Get Spotify catalog information for multiple albums identified by their Spotify IDs."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Example"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ids"}),(0,n.jsx)(t.td,{children:"A list of the Spotify IDs for the albums. Maximum: 20 IDs."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'new List<String>() { "5O7V8l4SeXTymVp3IesT9C" }'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"[market]"}),(0,n.jsx)(t.td,{children:"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"DE"'})})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Returns a ",(0,n.jsx)(t.code,{children:"SeveralAlbums"}),' which Property "Albums" contains a list of ',(0,n.jsx)(t.a,{href:"https://developer.spotify.com/web-api/object-model/#album-object-full",children:"FullAlbum"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Usage"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'SeveralAlbums albums = _spotify.GetSeveralAlbums(new List<String>() { "5O7V8l4SeXTymVp3IesT9C" });\nConsole.WriteLine(albums.Albums[0].Name);\n'})}),"\n",(0,n.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},6274:function(e,t,s){s.d(t,{Z:function(){return a},a:function(){return l}});var n=s(959);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);