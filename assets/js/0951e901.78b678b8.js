"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[8790],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),k=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=k(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=k(a),d=r,c=m["".concat(o,".").concat(d)]||m[d]||s[d]||l;return a?n.createElement(c,p(p({ref:t},u),{},{components:a})):n.createElement(c,p({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var k=2;k<l;k++)p[k]=a[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8954:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return k},toc:function(){return s}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),p=["components"],i={id:"player",title:"Player",sidebar_label:"Player"},o=void 0,k={unversionedId:"web/player",id:"version-5.1.1/web/player",title:"Player",description:"GetDevices",source:"@site/versioned_docs/version-5.1.1/web/player.md",sourceDirName:"web",slug:"/web/player",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/player",draft:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/player.md",tags:[],version:"5.1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1699038312,formattedLastUpdatedAt:"Nov 3, 2023",frontMatter:{id:"player",title:"Player",sidebar_label:"Player"},sidebar:"version-5.1.1/someSidebar",previous:{title:"Personalization",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/personalization"},next:{title:"Playlists",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/playlists"}},u={},s=[{value:"GetDevices",id:"getdevices",level:2},{value:"GetPlayback",id:"getplayback",level:2},{value:"GetPlayingTrack",id:"getplayingtrack",level:2},{value:"TransferPlayback",id:"transferplayback",level:2},{value:"ResumePlayback",id:"resumeplayback",level:2},{value:"PausePlayback",id:"pauseplayback",level:2},{value:"SkipPlaybackToNext",id:"skipplaybacktonext",level:2},{value:"SkipPlaybackToPrevious",id:"skipplaybacktoprevious",level:2},{value:"SeekPlayback",id:"seekplayback",level:2},{value:"SetRepeatMode",id:"setrepeatmode",level:2},{value:"SetVolume",id:"setvolume",level:2},{value:"SetShuffle",id:"setshuffle",level:2},{value:"AddToQueue",id:"addtoqueue",level:2}],m={toc:s};function d(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"getdevices"},"GetDevices"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get information about a user\u2019s available devices.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"AvailabeDevices devices = _spotify.GetDevices();\ndevices.Devices.ForEach(device => Console.WriteLine(device.Name));\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getplayback"},"GetPlayback"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get information about the user\u2019s current playback state, including track, track progress, and active device.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[market]"),(0,l.kt)("td",{parentName:"tr",align:null},"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"DE"'))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"PlaybackContext context = _spotify.GetPlayback();\nif(context.Item != null)\n  Console.WriteLine(context.Item.Name)); //Print the current song\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getplayingtrack"},"GetPlayingTrack"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get the object currently being played on the user\u2019s Spotify account.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[market]"),(0,l.kt)("td",{parentName:"tr",align:null},"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"DE"'))))),(0,l.kt)("p",null,"This is a simpler (less data) version of ",(0,l.kt)("inlineCode",{parentName:"p"},"GetPlayback")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"PlaybackContext context = _spotify.GetPlayingTrack();\nif(context.Item != null)\n  Console.WriteLine(context.Item.Name)); //Print the current song\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"transferplayback"},"TransferPlayback"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Transfer playback to a new device and determine if it should start playing.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deviceIds or deviceId"),(0,l.kt)("td",{parentName:"tr",align:null},"A JSON array containing the ID of the device on which playback should be started/transferred"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"play"),(0,l.kt)("td",{parentName:"tr",align:null},"true: ensure playback happens on new device, false: keep current playback state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse error = _spotify.TransferPlayback("XXXX-XXXX-XXXX-XXXX");\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"resumeplayback"},"ResumePlayback"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Start a new context or resume current playback on the user\u2019s active device.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[deviceId]"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contextUri"),(0,l.kt)("td",{parentName:"tr",align:null},"Spotify URI of the context to play"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uris"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of the Spotify track URIs to play."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'new List<string> { "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" }'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object, or when the uris parameter is used."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse error = _spotify.ResumePlayback(uris: new List<string> { "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" });\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"pauseplayback"},"PausePlayback"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Pause playback on the user\u2019s account.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[deviceId]"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"ErrorResponse error = _spotify.PausePlayback();\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"skipplaybacktonext"},"SkipPlaybackToNext"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Skips to next track in the user\u2019s queue.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[deviceId]"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"ErrorResponse error = _spotify.SkipPlaybackToNext();\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"skipplaybacktoprevious"},"SkipPlaybackToPrevious"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Skips to previous track in the user\u2019s queue.\nNote that this will ALWAYS skip to the previous track, regardless of the current track\u2019s progress.\nReturning to the start of the current track should be performed using the ",(0,l.kt)("a",{parentName:"p",href:"https://api.spotify.com/v1/me/player/seek"},"https://api.spotify.com/v1/me/player/seek")," endpoint.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[deviceId]"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"ErrorResponse error = _spotify.SkipPlaybackToPrevious();\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"seekplayback"},"SeekPlayback"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Seeks to the given position in the user\u2019s currently playing track.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"positionMs"),(0,l.kt)("td",{parentName:"tr",align:null},"The position in milliseconds to seek to. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"50"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[deviceId]"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"ErrorResponse error = _spotify.SeekPlayback(50);\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"setrepeatmode"},"SetRepeatMode"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Set the repeat mode for the user\u2019s playback. Options are repeat-track, repeat-context, and off.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"track, context or off."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RepeatState.Track"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[deviceId]"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"ErrorResponse error = _spotify.SetRepeatMode(RepeatState.Track);\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"setvolume"},"SetVolume"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Set the volume for the user\u2019s current playback device.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"volumePercent"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer. The volume to set. Must be a value from 0 to 100 inclusive."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"50"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[deviceId]"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"ErrorResponse error = _spotify.SetVolume(50);\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"setshuffle"},"SetShuffle"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Toggle shuffle on or off for user\u2019s playback.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shuffle"),(0,l.kt)("td",{parentName:"tr",align:null},"True or False"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[deviceId]"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"ErrorResponse error = _spotify.SetShuffle(false);\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"addtoqueue"},"AddToQueue"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Add an Item to the User's Playback Queue. BETA.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uri"),(0,l.kt)("td",{parentName:"tr",align:null},"The uri of the item to add to the queue. Must be a track or an episode uri."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"spotify:track:7zrCVKp6x0AtolOsn2iMif"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[deviceId]"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse error = _spotify.AddToQueue("spotify:track:7zrCVKp6x0AtolOsn2iMif");\n')))}d.isMDXComponent=!0}}]);