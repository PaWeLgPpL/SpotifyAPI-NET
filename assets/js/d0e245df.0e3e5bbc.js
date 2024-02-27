"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[7944],{9556:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>a});var r=s(2488),i=s(7052);const n={id:"artists",title:"Artists",sidebar_label:"Artists"},l=void 0,d={id:"web/artists",title:"Artists",description:"GetArtist",source:"@site/versioned_docs/version-5.1.1/web/artists.md",sourceDirName:"web",slug:"/web/artists",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/artists",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/artists.md",tags:[],version:"5.1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1709065779,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{id:"artists",title:"Artists",sidebar_label:"Artists"},sidebar:"someSidebar",previous:{title:"Albums",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/albums"},next:{title:"Browse",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/browse"}},c={},a=[{value:"GetArtist",id:"getartist",level:2},{value:"GetRelatedArtists",id:"getrelatedartists",level:2},{value:"GetArtistsTopTracks",id:"getartiststoptracks",level:2},{value:"GetArtistsAlbums",id:"getartistsalbums",level:2},{value:"GetSeveralArtists",id:"getseveralartists",level:2}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"getartist",children:"GetArtist"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Get Spotify catalog information for a single artist identified by their unique Spotify ID."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"The Spotify ID for the artist."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'"1KpCi9BOfviCVhmpI4G2sY"'})})]})})]}),"\n",(0,r.jsxs)(t.p,{children:["Returns a ",(0,r.jsx)(t.a,{href:"https://developer.spotify.com/web-api/object-model/#artist-object-full",children:"FullArtist"})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Usage"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'FullArtist artist = _spotify.GetArtist("1KpCi9BOfviCVhmpI4G2sY");\nConsole.WriteLine()\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"getrelatedartists",children:"GetRelatedArtists"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"The Spotify ID for the artist."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'"1KpCi9BOfviCVhmpI4G2sY"'})})]})})]}),"\n",(0,r.jsxs)(t.p,{children:["Returns a ",(0,r.jsx)(t.code,{children:"SeveralArtists"})," object which contains the property ",(0,r.jsx)(t.code,{children:"List<FullArtist> Artists"})," (",(0,r.jsx)(t.a,{href:"https://developer.spotify.com/web-api/object-model/#artist-object-full",children:"FullArtist"}),")"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Usage"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'SeveralArtists artists = _spotify.GetRelatedArtists("1KpCi9BOfviCVhmpI4G2sY");\nConsole.WriteLine(artists.Artists[0].Name);\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"getartiststoptracks",children:"GetArtistsTopTracks"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Get Spotify catalog information about an artist's top tracks by country."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"The Spotify ID for the artist."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'"1KpCi9BOfviCVhmpI4G2sY"'})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"country"}),(0,r.jsx)(t.td,{children:"The country: an ISO 3166-1 alpha-2 country code."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'"DE"'})})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Returns a ",(0,r.jsx)(t.code,{children:"SeveralTracks"})," object which contains the property ",(0,r.jsx)(t.code,{children:"List<FullTrack> Tracks"})," (",(0,r.jsx)(t.a,{href:"https://developer.spotify.com/web-api/object-model/#track-object-full",children:"FullTrack"}),")"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Usage"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'SeveralTracks tracks = _spotify.GetArtistsTopTracks("1KpCi9BOfviCVhmpI4G2sY", "DE");\nConsole.WriteLine(tracks.Tracks.Count); //How many tracks did we get?\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"getartistsalbums",children:"GetArtistsAlbums"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Get Spotify catalog information about an artist's albums. Optional parameters can be specified in the query string to filter and sort the response."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"The Spotify ID for the artist."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'"1KpCi9BOfviCVhmpI4G2sY"'})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[type]"}),(0,r.jsx)(t.td,{children:"A list of keywords that will be used to filter the response. If not supplied, all album types will be returned"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"AlbumType.All"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[limit]"}),(0,r.jsx)(t.td,{children:"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"20"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[offset]"}),(0,r.jsx)(t.td,{children:"The index of the first album to return. Default: 0"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"0"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[market]"}),(0,r.jsx)(t.td,{children:"An ISO 3166-1 alpha-2 country code. Supply this parameter to limit the response to one particular geographical market"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'"DE"'})})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Returns a ",(0,r.jsx)(t.a,{href:"https://developer.spotify.com/web-api/object-model/#album-object-simplified",children:"SimpleAlbum"})," wrapped inside a ",(0,r.jsx)(t.a,{href:"https://developer.spotify.com/web-api/object-model/#paging-object",children:"Paging-object"})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Usage"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'Paging<SimpleAlbum> albums = _spotify.GetArtistsAlbums("1KpCi9BOfviCVhmpI4G2sY", AlbumType.All);\nalbums.Items.ForEach(album => Console.WriteLine(album.Name));\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"getseveralartists",children:"GetSeveralArtists"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Get Spotify catalog information for several artists based on their Spotify IDs."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ids"}),(0,r.jsx)(t.td,{children:"A list of the Spotify IDs for the artists. Maximum: 50 IDs."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'new List<String>() { "1KpCi9BOfviCVhmpI4G2sY" } '})})]})})]}),"\n",(0,r.jsxs)(t.p,{children:["Returns a ",(0,r.jsx)(t.code,{children:"SeveralArtists"})," object which contains the property ",(0,r.jsx)(t.code,{children:"List<FullArtist> Artists"})," (",(0,r.jsx)(t.a,{href:"https://developer.spotify.com/web-api/object-model/#artist-object-full",children:"FullArtist"}),")"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Usage"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'SeveralArtists artists = _spotify.GetSeveralArtists(new List<String>() {"1KpCi9BOfviCVhmpI4G2sY"});\nartists.Artists.ForEach(artist => Console.WriteLine(artist.Name));\n'})}),"\n",(0,r.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},7052:(e,t,s)=>{s.d(t,{I:()=>d,M:()=>l});var r=s(6651);const i={},n=r.createContext(i);function l(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);