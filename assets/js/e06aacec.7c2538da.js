"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[2892],{8599:function(e,s,r){r.r(s),r.d(s,{assets:function(){return c},contentTitle:function(){return n},default:function(){return o},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var t=r(1527),i=r(6274);const l={id:"playlists",title:"Playlists",sidebar_label:"Playlists"},n=void 0,d={id:"web/playlists",title:"Playlists",description:"GetUserPlaylists",source:"@site/versioned_docs/version-5.1.1/web/playlists.md",sourceDirName:"web",slug:"/web/playlists",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/playlists",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/playlists.md",tags:[],version:"5.1.1",lastUpdatedBy:"Brad",lastUpdatedAt:1705312467,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{id:"playlists",title:"Playlists",sidebar_label:"Playlists"},sidebar:"someSidebar",previous:{title:"Player",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/player"},next:{title:"Profiles",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/profiles"}},c={},h=[{value:"GetUserPlaylists",id:"getuserplaylists",level:2},{value:"GetPlaylist",id:"getplaylist",level:2},{value:"GetPlaylistTracks",id:"getplaylisttracks",level:2},{value:"CreatePlaylist",id:"createplaylist",level:2},{value:"UpdatePlaylist",id:"updateplaylist",level:2},{value:"ReplacePlaylistTracks",id:"replaceplaylisttracks",level:2},{value:"RemovePlaylistTracks",id:"removeplaylisttracks",level:2},{value:"RemovePlaylistTrack",id:"removeplaylisttrack",level:2},{value:"AddPlaylistTracks",id:"addplaylisttracks",level:2},{value:"AddPlaylistTrack",id:"addplaylisttrack",level:2},{value:"ReorderPlaylist",id:"reorderplaylist",level:2}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"getuserplaylists",children:"GetUserPlaylists"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Get a list of the playlists owned or followed by a Spotify user."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userId"}),(0,t.jsx)(s.td,{children:"The user's Spotify user ID."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1122095781"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[limit]"}),(0,t.jsx)(s.td,{children:"The maximum number of playlists to return. Default: 20. Minimum: 1. Maximum: 50."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"20"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[offset]"}),(0,t.jsx)(s.td,{children:"The index of the first playlist to return. Default: 0 (the first object)"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"0"})})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns a ",(0,t.jsx)(s.a,{href:"https://developer.spotify.com/web-api/object-model/#playlist-object-simplified",children:"SimplePlaylist"})," wrapped inside a ",(0,t.jsx)(s.a,{href:"https://developer.spotify.com/web-api/object-model/#paging-object",children:"Paging Object"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'Paging<SimplePlaylist> userPlaylists = _spotify.GetUserPlaylists("1122095781");\nuserPlaylists.Items.ForEach(playlist => playlist.Owner.DisplayName) //Who is the owner of the playlist?\n'})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"getplaylist",children:"GetPlaylist"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Get a playlist owned by a Spotify user."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userId"}),(0,t.jsx)(s.td,{children:"The user's Spotify user ID."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1122095781"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"playlistId"}),(0,t.jsx)(s.td,{children:"The Spotify ID for the playlist."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1TtEejT1y4D1WmcOnLfha2"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[fields]"}),(0,t.jsx)(s.td,{children:"Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"description,uri"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[market]"}),(0,t.jsx)(s.td,{children:"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."}),(0,t.jsx)(s.td,{children:'"DE"'})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns a ",(0,t.jsx)(s.a,{href:"https://developer.spotify.com/web-api/object-model/#track-object-full",children:"FullTrack"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'FullPlaylist playlist = _spotify.GetPlaylist("1122095781", "1TtEejT1y4D1WmcOnLfha2");\nplaylist.Tracks.Items.ForEach(track => Console.WriteLine(track.Track.Name));\n'})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"getplaylisttracks",children:"GetPlaylistTracks"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Get full details of the tracks of a playlist owned by a Spotify user."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userId"}),(0,t.jsx)(s.td,{children:"The user's Spotify user ID."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1122095781"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"playlistId"}),(0,t.jsx)(s.td,{children:"The Spotify ID for the playlist."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1TtEejT1y4D1WmcOnLfha2"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[fields]"}),(0,t.jsx)(s.td,{children:"Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"description,uri"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[limit]"}),(0,t.jsx)(s.td,{children:"The maximum number of tracks to return. Default: 100. Minimum: 1. Maximum: 100."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"100"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[offset]"}),(0,t.jsx)(s.td,{children:"The index of the first object to return. Default: 0 (i.e., the first object)"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"0"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[market]"}),(0,t.jsx)(s.td,{children:"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"DE"})})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns a ",(0,t.jsx)(s.a,{href:"https://developer.spotify.com/web-api/object-model/#playlist-object-simplified",children:"PlaylistTrack"})," wrapped inside a ",(0,t.jsx)(s.a,{href:"https://developer.spotify.com/web-api/object-model/#paging-object",children:"Paging Object"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'Paging<PlaylistTrack> playlist = _spotify.GetPlaylistTracks("1122095781", "1TtEejT1y4D1WmcOnLfha2");\nplaylist.Items.ForEach(track => Console.WriteLine(track.Track.Name));\n'})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"createplaylist",children:"CreatePlaylist"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.)"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userId"}),(0,t.jsx)(s.td,{children:"The user's Spotify user ID."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1122095781"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"playlistName"}),(0,t.jsx)(s.td,{children:'The name for the new playlist, for example "Your Coolest Playlist". This name does not need to be unique.'}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"This is my new Playlist"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[isPublic]"}),(0,t.jsx)(s.td,{children:"default true. If true the playlist will be public, if false it will be private. To be able to create private playlists, the user must have granted the playlist-modify-private scope."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"true"})})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns a ",(0,t.jsx)(s.a,{href:"https://developer.spotify.com/web-api/object-model/#playlist-object-full",children:"FullPlaylist"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'FullPlaylist playlist = _spotify.CreatePlaylist("1122095781", "This is my new Playlist");\nif(!playlist.HasError())\n    Console.WriteLine("Playlist-URI: " + playlist.Uri);\n'})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"updateplaylist",children:"UpdatePlaylist"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Change a playlist\u2019s name and public/private state. (The user must, of course, own the playlist.)"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userId"}),(0,t.jsx)(s.td,{children:"The user's Spotify user ID."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1122095781"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"playlistId"}),(0,t.jsx)(s.td,{children:"The Spotify ID for the playlist."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1TtEejT1y4D1WmcOnLfha2"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[newName]"}),(0,t.jsx)(s.td,{children:'The new name for the playlist, for example "My New Playlist Title".'}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"New Playlistname"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[newPublic]"}),(0,t.jsx)(s.td,{children:"If true the playlist will be public, if false it will be private."}),(0,t.jsx)(s.td,{children:"EXAMPLE"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns a ",(0,t.jsx)(s.code,{children:"ErrorResponse"})," which just contains a possible error. (",(0,t.jsx)(s.code,{children:"response.HasError()"})," and ",(0,t.jsx)(s.code,{children:"response.Error"}),")"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'ErrorResponse response = _spotify.UpdatePlaylist("1122095781", "1TtEejT1y4D1WmcOnLfha2", "New Name", true);\nif(!response.HasError())\n    Console.WriteLine("success");\n'})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"replaceplaylisttracks",children:"ReplacePlaylistTracks"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Replace all the tracks in a playlist, overwriting its existing tracks. This powerful request can be useful for replacing tracks, re-ordering existing tracks, or clearing the playlist."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userId"}),(0,t.jsx)(s.td,{children:"The user's Spotify user ID."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1122095781"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"playlistId"}),(0,t.jsx)(s.td,{children:"The Spotify ID for the playlist."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1TtEejT1y4D1WmcOnLfha2"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uris"}),(0,t.jsx)(s.td,{children:"A list of Spotify track URIs to set. A maximum of 100 tracks can be set in one request."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'new List<string> { "1ri6UZpjPLmTCswIXZ6Uq1" }'})})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns a ",(0,t.jsx)(s.code,{children:"ErrorResponse"})," which just contains a possible error. (",(0,t.jsx)(s.code,{children:"response.HasError()"})," and ",(0,t.jsx)(s.code,{children:"response.Error"}),")"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'ErrorResponse response = _spotify.ReplacePlaylistTracks("1122095781", "1TtEejT1y4D1WmcOnLfha2", new List<string> { "1ri6UZpjPLmTCswIXZ6Uq1" });\nif(!response.HasError())\n    Console.WriteLine("success");\n'})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"removeplaylisttracks",children:"RemovePlaylistTracks"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Remove one or more tracks from a user\u2019s playlist."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userId"}),(0,t.jsx)(s.td,{children:"The user's Spotify user ID."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1122095781"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"playlistId"}),(0,t.jsx)(s.td,{children:"The Spotify ID for the playlist."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1TtEejT1y4D1WmcOnLfha2"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uris"}),(0,t.jsx)(s.td,{children:"array of objects containing Spotify URI strings (and their position in the playlist). A maximum of 100 objects can be sent at once."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"(example below)"})})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns a ",(0,t.jsx)(s.code,{children:"ErrorResponse"})," which just contains a possible error. (",(0,t.jsx)(s.code,{children:"response.HasError()"})," and ",(0,t.jsx)(s.code,{children:"response.Error"}),")"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'//Remove multiple tracks\nErrorResponse playlist = _spotify.RemovePlaylistTracks("1122095781", "1TtEejT1y4D1WmcOnLfha2", new List<DeleteTrackUri>()\n{\n    new DeleteTrackUri("1ri6UZpjPLmTCswIXZ6Uq1"),\n    new DeleteTrackUri("47xtGU3vht7mXLHqnbaau5")\n});\n//Remove multiple tracks at their specified positions\nErrorResponse playlist = _spotify.RemovePlaylistTracks("1122095781", "1TtEejT1y4D1WmcOnLfha2", new List<DeleteTrackUri>()\n{\n    new DeleteTrackUri("1ri6UZpjPLmTCswIXZ6Uq1", 2),\n    new DeleteTrackUri("47xtGU3vht7mXLHqnbaau5", 0, 50)\n});\n'})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"removeplaylisttrack",children:"RemovePlaylistTrack"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Remove one or more tracks from a user\u2019s playlist."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userId"}),(0,t.jsx)(s.td,{children:"The user's Spotify user ID."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1122095781"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"playlistId"}),(0,t.jsx)(s.td,{children:"The Spotify ID for the playlist."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1TtEejT1y4D1WmcOnLfha2"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uri"}),(0,t.jsx)(s.td,{children:"Spotify URI"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'new DeleteTrackUri("1ri6UZpjPLmTCswIXZ6Uq1")'})})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns a ",(0,t.jsx)(s.code,{children:"ErrorResponse"})," which just contains a possible error. (",(0,t.jsx)(s.code,{children:"response.HasError()"})," and ",(0,t.jsx)(s.code,{children:"response.Error"}),")"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'//Remove all tracks with the specified URI\nErrorResponse response = _spotify.RemovePlaylistTrack("1122095781", "1TtEejT1y4D1WmcOnLfha2", new DeleteTrackUri("1ri6UZpjPLmTCswIXZ6Uq1"));\n//Remove all tracks with the specified URI and the specified positions\nErrorResponse response = _spotify.RemovePlaylistTrack("1122095781", "1TtEejT1y4D1WmcOnLfha2", new DeleteTrackUri("1ri6UZpjPLmTCswIXZ6Uq1", 0, 10, 20));\n'})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"addplaylisttracks",children:"AddPlaylistTracks"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Add one or more tracks to a user\u2019s playlist."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userId"}),(0,t.jsx)(s.td,{children:"The user's Spotify user ID."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1122095781"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"playlistId"}),(0,t.jsx)(s.td,{children:"The Spotify ID for the playlist."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1TtEejT1y4D1WmcOnLfha2"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uris"}),(0,t.jsx)(s.td,{children:"A list of Spotify track URIs to add"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'new List<string> { "1ri6UZpjPLmTCswIXZ6Uq1" }'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[position]"}),(0,t.jsx)(s.td,{children:"The position to insert the tracks, a zero-based index"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"10"})})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns a ",(0,t.jsx)(s.code,{children:"ErrorResponse"})," which just contains a possible error. (",(0,t.jsx)(s.code,{children:"response.HasError()"})," and ",(0,t.jsx)(s.code,{children:"response.Error"}),")"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'ErrorResponse response = _spotify.AddPlaylistTracks("1122095781", "1TtEejT1y4D1WmcOnLfha2", new List<string> { "1ri6UZpjPLmTCswIXZ6Uq1" });\nif(!response.HasError())\n    Console.WriteLine("Success");\n'})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"addplaylisttrack",children:"AddPlaylistTrack"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Add one or more tracks to a user\u2019s playlist."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userId"}),(0,t.jsx)(s.td,{children:"The user's Spotify user ID."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1122095781"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"playlistId"}),(0,t.jsx)(s.td,{children:"The Spotify ID for the playlist."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1TtEejT1y4D1WmcOnLfha2"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uri"}),(0,t.jsx)(s.td,{children:"A Spotify Track URI"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1ri6UZpjPLmTCswIXZ6Uq1"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"position"}),(0,t.jsx)(s.td,{children:"The position to insert the tracks, a zero-based index"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"10"})})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns a ",(0,t.jsx)(s.code,{children:"ErrorResponse"})," which just contains a possible error. (",(0,t.jsx)(s.code,{children:"response.HasError()"})," and ",(0,t.jsx)(s.code,{children:"response.Error"}),")"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'ErrorResponse response = _spotify.AddPlaylistTrack("1122095781", "1TtEejT1y4D1WmcOnLfha2", "1ri6UZpjPLmTCswIXZ6Uq1");\nif(!response.HasError())\n    Console.WriteLine("Success");\n'})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"reorderplaylist",children:"ReorderPlaylist"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Reorder a track or a group of tracks in a playlist.\nMore Info: ",(0,t.jsx)(s.a,{href:"https://developer.spotify.com/web-api/reorder-playlists-tracks/",children:"Reorder-Playlist"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userId"}),(0,t.jsx)(s.td,{children:"The user's Spotify user ID."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1122095781"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"playlistId"}),(0,t.jsx)(s.td,{children:"The Spotify ID for the playlist."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"1TtEejT1y4D1WmcOnLfha2"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rangeStart"}),(0,t.jsx)(s.td,{children:"The position of the first track to be reordered."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"2"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"insertBefore"}),(0,t.jsx)(s.td,{children:"The position where the tracks should be inserted."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"0"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[rangeLength]"}),(0,t.jsx)(s.td,{children:"The amount of tracks to be reordered. Defaults to 1 if not set."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"2"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[snapshotId]"}),(0,t.jsx)(s.td,{children:"The playlist's snapshot ID against which you want to make the changes."}),(0,t.jsx)(s.td,{children:"``"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns a ",(0,t.jsx)(s.code,{children:"Snapshot"}),"-Object which contains the property ",(0,t.jsx)(s.code,{children:"String SnapshotId"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'Snapshot snapshot = _spotify.ReorderPlaylist("1122095781", "1TtEejT1y4D1WmcOnLfha2", 2, 0, 2);\nConsole.WriteLine("New SnapshotId: " + snapshot.SnapshotId);\n'})}),"\n",(0,t.jsx)(s.hr,{})]})}function o(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},6274:function(e,s,r){r.d(s,{Z:function(){return d},a:function(){return n}});var t=r(959);const i={},l=t.createContext(i);function n(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);