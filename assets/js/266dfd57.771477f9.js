"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[5249],{6555:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(1527),i=n(6274),o=n(849);const s={id:"implicit_grant",title:"Implicit Grant"},a=void 0,c={id:"implicit_grant",title:"Implicit Grant",description:"Implicit grant flow is for clients that are implemented entirely using JavaScript and running in the resource owner\u2019s browser. You do not need any server-side code to use it. Rate limits for requests are improved but there is no refresh token provided. This flow is described in RFC-6749.",source:"@site/docs/implicit_grant.md",sourceDirName:".",slug:"/implicit_grant",permalink:"/SpotifyAPI-NET/docs/implicit_grant",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/implicit_grant.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1707561707,formattedLastUpdatedAt:"Feb 10, 2024",frontMatter:{id:"implicit_grant",title:"Implicit Grant"},sidebar:"docs",previous:{title:"Client Credentials",permalink:"/SpotifyAPI-NET/docs/client_credentials"},next:{title:"Authorization Code",permalink:"/SpotifyAPI-NET/docs/authorization_code"}},l={},p=[{value:"Existing Web-Server",id:"existing-web-server",level:2},{value:"Using custom Protocols",id:"using-custom-protocols",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Implicit grant flow is for clients that are implemented entirely using JavaScript and running in the resource owner\u2019s browser. You do not need any server-side code to use it. Rate limits for requests are improved but there is no refresh token provided. This flow is described in ",(0,r.jsx)(t.a,{href:"http://tools.ietf.org/html/rfc6749#section-4.2",children:"RFC-6749"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This flow is useful for getting a user access token for a short timespan."}),"\n",(0,r.jsx)(t.h2,{id:"existing-web-server",children:"Existing Web-Server"}),"\n",(0,r.jsxs)(t.p,{children:["If you are already in control of a Web-Server (like ",(0,r.jsx)(t.code,{children:"ASP.NET"}),"), you can start the flow by generating a login uri:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'// Make sure "http://localhost:5543" is in your applications redirect URIs!\nvar loginRequest = new LoginRequest(\n  new Uri("http://localhost:5543"),\n  "ClientId",\n  LoginRequest.ResponseType.Token\n)\n{\n  Scope = new[] { Scopes.PlaylistReadPrivate, Scopes.PlaylistReadCollaborative }\n};\nvar uri = loginRequest.ToUri();\n// Redirect user to uri via your favorite web-server\n'})}),"\n",(0,r.jsxs)(t.p,{children:["When the user is redirected to the generated uri, they will have to login with their Spotify account and confirm that your application wants to access their user data. Once confirmed, they will be redirected to ",(0,r.jsx)(t.code,{children:"http://localhost:5543"})," and the fragment identifier (",(0,r.jsx)(t.code,{children:"#"})," part of URI) will contain an access token."]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Note, this parameter is not sent to the server! You need JavaScript to access it."})}),"\n",(0,r.jsx)(t.h2,{id:"using-custom-protocols",children:"Using custom Protocols"}),"\n",(0,r.jsxs)(t.p,{children:["This flow can also be used with custom protocols instead of ",(0,r.jsx)(t.code,{children:"http"}),"/",(0,r.jsx)(t.code,{children:"https"}),". This is especially interesting for ",(0,r.jsx)(t.code,{children:"UWP"})," apps, since your able to register custom protocol handlers quite easily."]}),"\n",(0,r.jsx)("img",{alt:"protocol handlers",src:(0,o.Z)("img/auth_protocol_handlers.png")}),"\n",(0,r.jsx)(t.p,{children:"The process is very similar, you generate a uri and open it for the user:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'// Make sure "spotifyapi.web.oauth://token" is in your applications redirect URIs!\nvar loginRequest = new LoginRequest(\n  new Uri("spotifyapi.web.oauth://token"),\n  "ClientId",\n  LoginRequest.ResponseType.Token\n)\n{\n  Scope = new[] { Scopes.PlaylistReadPrivate, Scopes.PlaylistReadCollaborative }\n};\nvar uri = loginRequest.ToUri();\n\n// This call requires Spotify.Web.Auth\nBrowserUtil.Open(uri);\n'})}),"\n",(0,r.jsxs)(t.p,{children:["After the user has logged in and consented your app, your ",(0,r.jsx)(t.code,{children:"UWP"})," app will receive a callback:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"protected override void OnActivated(IActivatedEventArgs args)\n{\n  if (args.Kind == ActivationKind.Protocol)\n  {\n    ProtocolActivatedEventArgs eventArgs = args as ProtocolActivatedEventArgs;\n    var publisher = Mvx.IoCProvider.Resolve<ITokenPublisherService>();\n\n    // This Uri contains your access token in the Fragment part\n    Console.WriteLine(eventArgs.Uri);\n  }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For a real example, have a look at the ",(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.UWP",children:"Example.UWP"}),", ",(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.ASP",children:"Example.ASP"})," or ",(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.ASPBlazor",children:"Example.ASPBlazor"})]}),"\n",(0,r.jsx)(t.h1,{id:"using-spotifywebauth",children:"Using Spotify.Web.Auth"}),"\n",(0,r.jsxs)(t.p,{children:["For cross-platform CLI and desktop apps (non ",(0,r.jsx)(t.code,{children:"UWP"})," apps), custom protocol handlers are sometimes not an option. The fallback here is a small cross-platform embedded web server running on ",(0,r.jsx)(t.code,{children:"http://localhost:5543"})," serving JavaScript. The JavaScript will parse the fragment part of the URI and sends a request to the web server in the background. The web server then notifies your appliciation via an event."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'private static EmbedIOAuthServer _server;\n\npublic static async Task Main()\n{\n  // Make sure "http://localhost:5543/callback" is in your spotify application as redirect uri!\n  _server = new EmbedIOAuthServer(new Uri("http://localhost:5543/callback"), 5543);\n  await _server.Start();\n\n  _server.ImplictGrantReceived += OnImplicitGrantReceived;\n  _server.ErrorReceived += OnErrorReceived;\n\n  var request = new LoginRequest(_server.BaseUri, "ClientId", LoginRequest.ResponseType.Token)\n  {\n    Scope = new List<string> { Scopes.UserReadEmail }\n  };\n  BrowserUtil.Open(request.ToUri());\n}\n\nprivate static async Task OnImplicitGrantReceived(object sender, ImplictGrantResponse response)\n{\n  await _server.Stop();\n  var spotify = new SpotifyClient(response.AccessToken);\n  // do calls with Spotify\n}\n\nprivate static async Task OnErrorReceived(object sender, string error, string state)\n{\n  Console.WriteLine($"Aborting authorization, error received: {error}");\n  await _server.Stop();\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["For real examples, have a look at ",(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.CLI.PersistentConfig",children:"Example.CLI.PersistentConfig"})," and ",(0,r.jsx)(t.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.CLI.CustomHTML",children:"Example.CLI.CustomHTML"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6274:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var r=n(959);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);