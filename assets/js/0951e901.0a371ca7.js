"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[3456],{9996:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var n=r(2488),t=r(7052);const i={id:"player",title:"Player",sidebar_label:"Player"},c=void 0,d={id:"web/player",title:"Player",description:"GetDevices",source:"@site/versioned_docs/version-5.1.1/web/player.md",sourceDirName:"web",slug:"/web/player",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/player",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/player.md",tags:[],version:"5.1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1715116728,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"player",title:"Player",sidebar_label:"Player"},sidebar:"someSidebar",previous:{title:"Personalization",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/personalization"},next:{title:"Playlists",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/playlists"}},l={},h=[{value:"GetDevices",id:"getdevices",level:2},{value:"GetPlayback",id:"getplayback",level:2},{value:"GetPlayingTrack",id:"getplayingtrack",level:2},{value:"TransferPlayback",id:"transferplayback",level:2},{value:"ResumePlayback",id:"resumeplayback",level:2},{value:"PausePlayback",id:"pauseplayback",level:2},{value:"SkipPlaybackToNext",id:"skipplaybacktonext",level:2},{value:"SkipPlaybackToPrevious",id:"skipplaybacktoprevious",level:2},{value:"SeekPlayback",id:"seekplayback",level:2},{value:"SetRepeatMode",id:"setrepeatmode",level:2},{value:"SetVolume",id:"setvolume",level:2},{value:"SetShuffle",id:"setshuffle",level:2},{value:"AddToQueue",id:"addtoqueue",level:2}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"getdevices",children:"GetDevices"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Get information about a user\u2019s available devices."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsx)(s.table,{children:(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:"AvailabeDevices devices = _spotify.GetDevices();\ndevices.Devices.ForEach(device => Console.WriteLine(device.Name));\n"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"getplayback",children:"GetPlayback"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Get information about the user\u2019s current playback state, including track, track progress, and active device."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"[market]"}),(0,n.jsx)(s.td,{children:"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"DE"'})})]})})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:"PlaybackContext context = _spotify.GetPlayback();\nif(context.Item != null)\n  Console.WriteLine(context.Item.Name)); //Print the current song\n"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"getplayingtrack",children:"GetPlayingTrack"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Get the object currently being played on the user\u2019s Spotify account."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"[market]"}),(0,n.jsx)(s.td,{children:"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"DE"'})})]})})]}),"\n",(0,n.jsxs)(s.p,{children:["This is a simpler (less data) version of ",(0,n.jsx)(s.code,{children:"GetPlayback"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:"PlaybackContext context = _spotify.GetPlayingTrack();\nif(context.Item != null)\n  Console.WriteLine(context.Item.Name)); //Print the current song\n"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"transferplayback",children:"TransferPlayback"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Transfer playback to a new device and determine if it should start playing."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"deviceIds or deviceId"}),(0,n.jsx)(s.td,{children:"A JSON array containing the ID of the device on which playback should be started/transferred"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"XXXX-XXXX-XXXX-XXXX"'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"play"}),(0,n.jsx)(s.td,{children:"true: ensure playback happens on new device, false: keep current playback state"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"true"})})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:'ErrorResponse error = _spotify.TransferPlayback("XXXX-XXXX-XXXX-XXXX");\n'})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"resumeplayback",children:"ResumePlayback"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Start a new context or resume current playback on the user\u2019s active device."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"[deviceId]"}),(0,n.jsx)(s.td,{children:"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"XXXX-XXXX-XXXX-XXXX"'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"contextUri"}),(0,n.jsx)(s.td,{children:"Spotify URI of the context to play"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"uris"}),(0,n.jsx)(s.td,{children:"An array of the Spotify track URIs to play."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'new List<string> { "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" }'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"offset"}),(0,n.jsx)(s.td,{children:"Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object, or when the uris parameter is used."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"0"})})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:'ErrorResponse error = _spotify.ResumePlayback(uris: new List<string> { "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" });\n'})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"pauseplayback",children:"PausePlayback"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Pause playback on the user\u2019s account."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"[deviceId]"}),(0,n.jsx)(s.td,{children:"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"XXXX-XXXX-XXXX-XXXX"'})})]})})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:"ErrorResponse error = _spotify.PausePlayback();\n"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"skipplaybacktonext",children:"SkipPlaybackToNext"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Skips to next track in the user\u2019s queue."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"[deviceId]"}),(0,n.jsx)(s.td,{children:"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"XXXX-XXXX-XXXX-XXXX"'})})]})})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:"ErrorResponse error = _spotify.SkipPlaybackToNext();\n"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"skipplaybacktoprevious",children:"SkipPlaybackToPrevious"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Skips to previous track in the user\u2019s queue.\nNote that this will ALWAYS skip to the previous track, regardless of the current track\u2019s progress.\nReturning to the start of the current track should be performed using the ",(0,n.jsx)(s.a,{href:"https://api.spotify.com/v1/me/player/seek",children:"https://api.spotify.com/v1/me/player/seek"})," endpoint."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"[deviceId]"}),(0,n.jsx)(s.td,{children:"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"XXXX-XXXX-XXXX-XXXX"'})})]})})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:"ErrorResponse error = _spotify.SkipPlaybackToPrevious();\n"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"seekplayback",children:"SeekPlayback"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Seeks to the given position in the user\u2019s currently playing track."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"positionMs"}),(0,n.jsx)(s.td,{children:"The position in milliseconds to seek to. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"50"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"[deviceId]"}),(0,n.jsx)(s.td,{children:"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"XXXX-XXXX-XXXX-XXXX"'})})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:"ErrorResponse error = _spotify.SeekPlayback(50);\n"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"setrepeatmode",children:"SetRepeatMode"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Set the repeat mode for the user\u2019s playback. Options are repeat-track, repeat-context, and off."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"state"}),(0,n.jsx)(s.td,{children:"track, context or off."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"RepeatState.Track"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"[deviceId]"}),(0,n.jsx)(s.td,{children:"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"XXXX-XXXX-XXXX-XXXX"'})})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:"ErrorResponse error = _spotify.SetRepeatMode(RepeatState.Track);\n"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"setvolume",children:"SetVolume"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Set the volume for the user\u2019s current playback device."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"volumePercent"}),(0,n.jsx)(s.td,{children:"Integer. The volume to set. Must be a value from 0 to 100 inclusive."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"50"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"[deviceId]"}),(0,n.jsx)(s.td,{children:"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"XXXX-XXXX-XXXX-XXXX"'})})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:"ErrorResponse error = _spotify.SetVolume(50);\n"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"setshuffle",children:"SetShuffle"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Toggle shuffle on or off for user\u2019s playback."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"shuffle"}),(0,n.jsx)(s.td,{children:"True or False"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"[deviceId]"}),(0,n.jsx)(s.td,{children:"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"XXXX-XXXX-XXXX-XXXX"'})})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:"ErrorResponse error = _spotify.SetShuffle(false);\n"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"addtoqueue",children:"AddToQueue"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Add an Item to the User's Playback Queue. BETA."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"uri"}),(0,n.jsx)(s.td,{children:"The uri of the item to add to the queue. Must be a track or an episode uri."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"spotify:track:7zrCVKp6x0AtolOsn2iMif"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"[deviceId]"}),(0,n.jsx)(s.td,{children:"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"XXXX-XXXX-XXXX-XXXX"'})})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:'ErrorResponse error = _spotify.AddToQueue("spotify:track:7zrCVKp6x0AtolOsn2iMif");\n'})})]})}function o(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},7052:(e,s,r)=>{r.d(s,{I:()=>d,M:()=>c});var n=r(6651);const t={},i=n.createContext(t);function c(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);