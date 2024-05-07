"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[1956],{7860:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=i(2488),o=i(7052);const s={id:"home",title:"SpotifyAPI-NET",sidebar_label:"Home"},r=void 0,a={id:"home",title:"SpotifyAPI-NET",description:"This project, written in C#/.NET, provides 2 libraries for an easier usage of the Spotify Web API",source:"@site/versioned_docs/version-5.1.1/home.md",sourceDirName:".",slug:"/home",permalink:"/SpotifyAPI-NET/docs/5.1.1/home",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/home.md",tags:[],version:"5.1.1",lastUpdatedBy:"Andrew Garvin",lastUpdatedAt:1715116684,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"home",title:"SpotifyAPI-NET",sidebar_label:"Home"},sidebar:"someSidebar",next:{title:"Getting Started",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/getting_started"}},l={},c=[{value:"Installing",id:"installing",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Projects",id:"projects",level:2},{value:"lidarr by @lidarr",id:"lidarr-by-lidarr",level:3},{value:"botframework-solutions by @microsoft",id:"botframework-solutions-by-microsoft",level:3},{value:"Spytify by @jwallet",id:"spytify-by-jwallet",level:3},{value:"audio-band by @dsafa",id:"audio-band-by-dsafa",level:3},{value:"rocksmith-custom-song-toolkit by @catara",id:"rocksmith-custom-song-toolkit-by-catara",level:3},{value:"Spofy by @eltoncezar",id:"spofy-by-eltoncezar",level:3},{value:"Toastify by @aleab",id:"toastify-by-aleab",level:3},{value:"Spotify Oculus by @CaptainMorgs",id:"spotify-oculus-by-captainmorgs",level:3},{value:"Songify by @Inzaniity",id:"songify-by-inzaniity",level:3},{value:"Elite G19s Companion app by @MagicMau",id:"elite-g19s-companion-app-by-magicmau",level:3},{value:"ARDUINO-Spotify-Remote-Control by @NADER11NDEU",id:"arduino-spotify-remote-control-by-nader11ndeu",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This project, written in C#/.NET, provides 2 libraries for an easier usage of the Spotify Web API"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Spotify's Web API"})," (",(0,n.jsx)(t.a,{href:"https://developer.spotify.com/web-api/",children:"link"}),")"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Based on simple REST principles, our Web API endpoints return metadata in JSON format about artists, albums, and tracks directly from the Spotify catalogue.\nThe API also provides access to user-related data such as playlists and music saved in a \u201cYour Music\u201d library, subject to user\u2019s authorization."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"SpotifyAPI.Web"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"A wrapper around Spotify's Web API, providing sync and async methods to query all possible endpoints. Results are returned as typed class instances, allowing property-based access."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"SpotifyAPI.Web.Auth"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["A library providing C# implementations of the 3 supported Authentication modes, including ",(0,n.jsx)(t.code,{children:"ImplicitGrantAuth"}),", ",(0,n.jsx)(t.code,{children:"AuthorizationCodeAuth"})," and ",(0,n.jsx)(t.code,{children:"CredentialsAuth"})]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"installing",children:"Installing"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Via NuGet Package:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"Install-Package SpotifyAPI.Web -Version 5.1.1\nInstall-Package SpotifyAPI.Web.Auth -Version 5.1.1\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Download the latest binaries on the ",(0,n.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/releases",children:"GitHub Release Page"})," and add it to your Project"]}),"\n",(0,n.jsx)(t.li,{children:"Clone the Repo and build the project yourself."}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/SpotifyAPI-NET/docs/5.1.1/web/getting_started",children:"SpotifyAPI.Web"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"auth/getting_started",children:"SpotifyAPI.Web.Auth"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"projects",children:"Projects"}),"\n",(0,n.jsxs)(t.h3,{id:"lidarr-by-lidarr",children:[(0,n.jsx)(t.a,{href:"https://github.com/lidarr/Lidarr",children:"lidarr"})," by ",(0,n.jsx)(t.a,{href:"https://github.com/lidarr",children:"@lidarr"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Looks and smells like Sonarr but made for music."}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"botframework-solutions-by-microsoft",children:[(0,n.jsx)(t.a,{href:"https://github.com/microsoft/botframework-solutions",children:"botframework-solutions"})," by ",(0,n.jsx)(t.a,{href:"https://github.com/microsoft",children:"@microsoft"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"home for a set of templates and solutions to help build advanced conversational experiences using Azure Bot Service and Bot Framework"}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"spytify-by-jwallet",children:[(0,n.jsx)(t.a,{href:"https://github.com/jwallet/spy-spotify",children:"Spytify"})," by ",(0,n.jsx)(t.a,{href:"https://github.com/jwallet",children:"@jwallet"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Records Spotify to mp3 without ads while it plays and includes media tags to the recorded files"}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"audio-band-by-dsafa",children:[(0,n.jsx)(t.a,{href:"https://github.com/dsafa/audio-band",children:"audio-band"})," by ",(0,n.jsx)(t.a,{href:"https://github.com/dsafa",children:"@dsafa"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Display and control songs from the Windows taskbar"}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"rocksmith-custom-song-toolkit-by-catara",children:[(0,n.jsx)(t.a,{href:"https://github.com/catara/rocksmith-custom-song-toolkit",children:"rocksmith-custom-song-toolkit"})," by ",(0,n.jsx)(t.a,{href:"https://github.com/catara",children:"@catara"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"MASS Manipulation of Rocksmith DLC Library"}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"spofy-by-eltoncezar",children:[(0,n.jsx)(t.a,{href:"https://github.com/eltoncezar/Spofy",children:"Spofy"})," by ",(0,n.jsx)(t.a,{href:"https://github.com/eltoncezar",children:"@eltoncezar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"A Spotify mini player and notifier for Windows"}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"toastify-by-aleab",children:[(0,n.jsx)(t.a,{href:"https://github.com/aleab/toastify",children:"Toastify"})," by ",(0,n.jsx)(t.a,{href:"https://github.com/aleab",children:"@aleab"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Toastify adds global hotkeys and toast notifications to Spotify"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["Forked from ",(0,n.jsx)(t.a,{href:"https://github.com/nachmore/toastify",children:"nachmore/toastify"})]})}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"spotify-oculus-by-captainmorgs",children:[(0,n.jsx)(t.a,{href:"https://github.com/CaptainMorgs/spotify-oculus-release",children:"Spotify Oculus"})," by ",(0,n.jsx)(t.a,{href:"https://github.com/CaptainMorgs",children:"@CaptainMorgs"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Unity project for interacting with Spotify in virtual reality for the Oculus Rift."}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"songify-by-inzaniity",children:[(0,n.jsx)(t.a,{href:"https://github.com/Inzaniity/Songify",children:"Songify"})," by ",(0,n.jsx)(t.a,{href:"https://github.com/Inzaniity",children:"@Inzaniity"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"A simple tool that gets the current track from Spotify, YouTube and Nightbot."}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"elite-g19s-companion-app-by-magicmau",children:[(0,n.jsx)(t.a,{href:"https://forums.frontier.co.uk/threads/elite-g19s-companion-app-with-simulated-space-traffic-control.226782/",children:"Elite G19s Companion app"})," by ",(0,n.jsx)(t.a,{href:"https://github.com/MagicMau",children:"@MagicMau"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Main features include: system and station overview, play radio and podcast with audio visualizations, simulated Space Traffic Control, GPS functionality (including planetary races), an orrery view, a screenshot converter, and a news ticker."}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"arduino-spotify-remote-control-by-nader11ndeu",children:[(0,n.jsx)(t.a,{href:"https://github.com/NADER11NDEU/ARDUINO-Spotify-Remote-Control",children:"ARDUINO-Spotify-Remote-Control"})," by ",(0,n.jsx)(t.a,{href:"https://github.com/NADER11NDEU",children:"@NADER11NDEU"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Well, with this project we will be able to control active spotify devices with Arduino. How we gonna do that ? We will use serial communication."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7052:(e,t,i)=>{i.d(t,{I:()=>a,M:()=>r});var n=i(6651);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);