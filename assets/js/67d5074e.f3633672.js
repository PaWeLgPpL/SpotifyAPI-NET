"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[1837],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),f=p(a),k=l,y=f["".concat(o,".").concat(k)]||f[k]||u[k]||i;return a?r.createElement(y,s(s({ref:t},c),{},{components:a})):r.createElement(y,s({ref:t},c))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,s=new Array(i);s[0]=f;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n.mdxType="string"==typeof e?e:l,s[1]=n;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2224:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var r=a(7462),l=a(3366),i=(a(7294),a(3905)),s=["components"],n={id:"getting_started",title:"Getting Started",sidebar_label:"Getting Started"},o=void 0,p={unversionedId:"web/getting_started",id:"version-5.1.1/web/getting_started",title:"Getting Started",description:"This API provides full access to the new SpotifyWebAPI introduced here.",source:"@site/versioned_docs/version-5.1.1/web/getting_started.md",sourceDirName:"web",slug:"/web/getting_started",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/getting_started",draft:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/getting_started.md",tags:[],version:"5.1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1667941110,formattedLastUpdatedAt:"11/8/2022",frontMatter:{id:"getting_started",title:"Getting Started",sidebar_label:"Getting Started"},sidebar:"version-5.1.1/someSidebar",previous:{title:"Home",permalink:"/SpotifyAPI-NET/docs/5.1.1/home"},next:{title:"Albums",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/albums"}},c={},u=[{value:"First steps",id:"first-steps",level:2},{value:"Imports",id:"imports",level:3},{value:"Basic-Usage",id:"basic-usage",level:3},{value:"Error-Handling",id:"error-handling",level:2},{value:"Sync vs Asynchronous",id:"sync-vs-asynchronous",level:2},{value:"API-Reference",id:"api-reference",level:2},{value:"Albums",id:"albums",level:3},{value:"Artists",id:"artists",level:3},{value:"Browse",id:"browse",level:3},{value:"Follow",id:"follow",level:3},{value:"Library",id:"library",level:3},{value:"Personalization",id:"personalization",level:3},{value:"Player",id:"player",level:3},{value:"Playlists",id:"playlists",level:3},{value:"Profiles",id:"profiles",level:3},{value:"Search",id:"search",level:3},{value:"Tracks",id:"tracks",level:3},{value:"Util",id:"util",level:3}],f={toc:u};function k(e){var t=e.components,a=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This API provides full access to the new SpotifyWebAPI introduced ",(0,i.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/"},"here"),".\nWith it, you can search for Tracks/Albums/Artists and also get User-based information.\nIt's also possible to create new playlists and add tracks to it."),(0,i.kt)("h2",{id:"first-steps"},"First steps"),(0,i.kt)("h3",{id:"imports"},"Imports"),(0,i.kt)("p",null,"So after you added the API to your project, you may want to add following imports to your files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using SpotifyAPI.Web; //Base Namespace\nusing SpotifyAPI.Web.Enums; //Enums\nusing SpotifyAPI.Web.Models; //Models for the JSON-responses\n")),(0,i.kt)("h3",{id:"basic-usage"},"Basic-Usage"),(0,i.kt)("p",null,"Now you can actually start doing calls to the SpotifyAPI, just create a new Instance of SpotifyWebAPI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'private static SpotifyWebAPI _spotify;\n\npublic static void Main(String[] args)\n{\n    _spotify = new SpotifyWebAPI()\n    {\n        AccessToken = "XXXXXXXXXXXX",\n        TokenType = "Bearer"\n    }\n    FullTrack track = _spotify.GetTrack("3Hvu1pq89D4R0lyPBoujSv");\n    Console.WriteLine(track.Name); //Yeay! We just printed a tracks name.\n}\n')),(0,i.kt)("p",null,"You may note that we used ",(0,i.kt)("inlineCode",{parentName:"p"},"AccessToken")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenType"),". Spotify does not allow un-authorized access to their API. You will need to implement one of the auth flows. Luckily, ",(0,i.kt)("inlineCode",{parentName:"p"},"SpotifyAPI.Web.Auth")," exists for this reason. A simple way to receive a ",(0,i.kt)("inlineCode",{parentName:"p"},"AccessToken")," is via ",(0,i.kt)("inlineCode",{parentName:"p"},"CredentialAuth"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'CredentialsAuth auth = new CredentialsAuth("YourClientID", "YourClientSecret");\nToken token = await auth.GetToken();\n_spotify = new SpotifyWebAPI()\n{\n  AccessToken = token.AccessToken,\n  TokenType = token.TokenType\n}\n')),(0,i.kt)("p",null,"For more info, visit the ",(0,i.kt)("a",{parentName:"p",href:"/SpotifyAPI-NET/docs/5.1.1/auth/getting_started"},"Getting Started of SpotifyAPI.Web.Auth")),(0,i.kt)("h2",{id:"error-handling"},"Error-Handling"),(0,i.kt)("p",null,"Every API-Call returns a reponse-model which consists of base-error model. To check if a specific API-Call was successful, use the following approach:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'PrivateProfile profile = _spotify.GetPrivateProfile();\nif (profile.HasError())\n{\n  Console.WriteLine("Error Status: " + profile.Error.Status);\n  Console.WriteLine("Error Msg: " + profile.Error.Message);\n}\n')),(0,i.kt)("p",null,"In case some or all of the returned values are null, consult error status and message, they can lead to an explanation!"),(0,i.kt)("h2",{id:"sync-vs-asynchronous"},"Sync vs Asynchronous"),(0,i.kt)("p",null,"Every API-Call has an ",(0,i.kt)("inlineCode",{parentName:"p"},"asynchronous")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"synchronous")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public async void Test()\n{\n  var asyncProfile = await _spotify.GetPrivateProfileAsync();\n  var syncProfile = _spotify.GetPrivateProfile();\n}\n")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"synchronous")," call will block the current Thread!"),(0,i.kt)("h2",{id:"api-reference"},"API-Reference"),(0,i.kt)("h3",{id:"albums"},"Albums"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/albums#getalbumtracks"},"GetAlbumTracks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/albums#getalbum"},"GetAlbum")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/albums#getseveralalbums"},"GetSeveralAlbums"))),(0,i.kt)("h3",{id:"artists"},"Artists"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/artists#getartist"},"GetArtist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/artists#getrelatedartists"},"GetRelatedArtists")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/artists#getartiststoptracks"},"GetArtistsTopTracks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/artists#getartistsalbums"},"GetArtistsAlbums")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/artists#getseveralartists"},"GetSeveralArtists"))),(0,i.kt)("h3",{id:"browse"},"Browse"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/browse#getfeaturedplaylists"},"GetFeaturedPlaylists")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/browse#getnewalbumreleases"},"GetNewAlbumReleases")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/browse#getcategories"},"GetCategories")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/browse#getcategory"},"GetCategory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/browse#getcategoryplaylists"},"GetCategoryPlaylists"))),(0,i.kt)("h3",{id:"follow"},"Follow"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/follow#follow"},"Follow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/follow#unfollow"},"Unfollow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/follow#isfollowing"},"IsFollowing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/follow#followplaylist"},"FollowPlaylist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/follow#unfollowplaylist"},"UnfollowPlaylist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/follow#isfollowingplaylist"},"IsFollowingPlaylist"))),(0,i.kt)("h3",{id:"library"},"Library"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/library#savetracks"},"SaveTracks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/library#savetrack"},"SaveTrack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/library#getsavedtracks"},"GetSavedTracks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/library#removesavedtracks"},"RemoveSavedTracks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/library#checksavedtracks"},"CheckSavedTracks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/library#savealbums"},"SaveAlbums")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/library#savealbum"},"SaveAlbum")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/library#getsavedalbums"},"GetSavedAlbums")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/library#removesavedalbums"},"RemoveSavedAlbums")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/library#checksavedalbums"},"CheckSavedAlbums"))),(0,i.kt)("h3",{id:"personalization"},"Personalization"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/personalization#getuserstoptracks"},"GetUsersTopTracks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/personalization#getuserstopartists"},"GetUsersTopArtists")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/personalization#getusersrecentlyplayedtracks"},"GetUsersRecentlyPlayedTracks"))),(0,i.kt)("h3",{id:"player"},"Player"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/player#getdevices"},"GetDevices")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/player#getplayback"},"GetPlayback")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/player#getplayingtrack"},"GetPlayingTrack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/player#transferplayback"},"TransferPlayback")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/player#resumeplayback"},"ResumePlayback")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/player#pauseplayback"},"PausePlayback")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/player#skipplaybacktonext"},"SkipPlaybackToNext")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/player#skipplaybacktoprevious"},"SkipPlaybackToPrevious")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/player#setrepeatmode"},"SetRepeatMode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/player#setvolume"},"SetVolume")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/player#setshuffle"},"SetShuffle"))),(0,i.kt)("h3",{id:"playlists"},"Playlists"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/playlists#getuserplaylists"},"GetUserPlaylists")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/playlists#getplaylist"},"GetPlaylist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/playlists#getplaylisttracks"},"GetPlaylistTracks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/playlists#createplaylist"},"CreatePlaylist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/playlists#updateplaylist"},"UpdatePlaylist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/playlists#replaceplaylisttracks"},"ReplacePlaylistTracks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/playlists#removeplaylisttracks"},"RemovePlaylistTracks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/playlists#removeplaylisttrack"},"RemovePlaylistTrack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/playlists#addplaylisttracks"},"AddPlaylistTracks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/playlists#addplaylisttrack"},"AddPlaylistTrack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/playlists#reorderplaylist"},"ReorderPlaylist"))),(0,i.kt)("h3",{id:"profiles"},"Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/profiles#getpublicprofile"},"GetPublicProfile")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/profiles#getprivateprofile"},"GetPrivateProfile"))),(0,i.kt)("h3",{id:"search"},"Search"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/search#searchitems"},"SearchItems")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/search#searchitemsescaped"},"SearchItemsEscaped"))),(0,i.kt)("h3",{id:"tracks"},"Tracks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/tracks#getseveraltracks"},"GetSeveralTracks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/tracks#gettrack"},"GetTrack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/tracks#getaudioanalysis"},"GetAudioAnalysis"))),(0,i.kt)("h3",{id:"util"},"Util"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/5.1.1/web/utilities"},"Utility-Functions"))))}k.isMDXComponent=!0}}]);