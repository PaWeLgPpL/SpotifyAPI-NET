"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[9400],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,h=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},445:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"5_to_6",title:"5.x.x to 6.x.x"},p=void 0,l={unversionedId:"5_to_6",id:"5_to_6",title:"5.x.x to 6.x.x",description:"SpotifyAPI.Web",source:"@site/docs/5_to_6.md",sourceDirName:".",slug:"/5_to_6",permalink:"/SpotifyAPI-NET/docs/5_to_6",draft:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/5_to_6.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1667941110,formattedLastUpdatedAt:"11/8/2022",sidebarPosition:5,frontMatter:{id:"5_to_6",title:"5.x.x to 6.x.x"},sidebar:"docs",previous:{title:"UWP",permalink:"/SpotifyAPI-NET/docs/example_uwp"}},c={},d=[{value:"SpotifyAPI.Web",id:"spotifyapiweb",level:2},{value:"Initialization",id:"initialization",level:3},{value:"Proxy",id:"proxy",level:3},{value:"Calling API Endpoints",id:"calling-api-endpoints",level:3},{value:"Error/Header Handling",id:"errorheader-handling",level:3},{value:"SpotifyAPI.Web.Auth",id:"spotifyapiwebauth",level:2},{value:"Authorization Code Auth",id:"authorization-code-auth",level:3}],u={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"spotifyapiweb"},"SpotifyAPI.Web"),(0,o.kt)("h3",{id:"initialization"},"Initialization"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"5.x"),", a new ",(0,o.kt)("inlineCode",{parentName:"p"},"SpotifyWebAPI")," instance could be created without supplying necessary values, since they were implemented as properties. With ",(0,o.kt)("inlineCode",{parentName:"p"},"6.x"),", necessary values have to be given in the constructor and ",(0,o.kt)("inlineCode",{parentName:"p"},"SpotifyWebAPI")," has been renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"SpotifyClient"),". Also, ",(0,o.kt)("inlineCode",{parentName:"p"},"SpotifyClientConfig")," has been introduced to give a better configuration experience, including retry handlers, automatic authenticators and proxy configurations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// OLD\nvar spotify = new SpotifyWebAPI { AccessToken = "YourAccessToken" };\nvar spotify = new SpotifyWebAPI(ProxyConfig); // No access token - invalid\n\n// NEW\nvar spotify = new SpotifyClient("YourAccessToken");\n\nvar config = SpotifyClientConfig\n  .CreateDefault()\n  .WithToken("YourAccessToken");\nvar spotify = new SpotifyClient(config);\n\nvar config = SpotifyClientConfig\n  .CreateDefault()\n  .WithAuthenticator(new ClientCredentialsAuthenticator(CLIENT_ID, CLIENT_SECRET)); // takes care of access tokens\nvar spotify = new SpotifyClient(config);\n')),(0,o.kt)("p",null,"For some performance guides, have a look at the ",(0,o.kt)("a",{parentName:"p",href:"/SpotifyAPI-NET/docs/configuration"},"Configuration Guide")),(0,o.kt)("h3",{id:"proxy"},"Proxy"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"5.x"),", the proxy configuration could be passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SpotifyWebAPI")," constructor. In ",(0,o.kt)("inlineCode",{parentName:"p"},"6.x"),", they're part of the HTTP Client. The built-in http client supports proxies out of the box:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var httpClient = new NetHttpClient(new ProxyConfig("localhost", 8080)\n{\n  User = "",\n  Password = "",\n  SkipSSLCheck = false,\n});\nvar config = SpotifyClientConfig\n  .CreateDefault()\n  .WithHTTPClient(httpClient);\n\nvar spotify = new SpotifyClient(config);\n')),(0,o.kt)("h3",{id:"calling-api-endpoints"},"Calling API Endpoints"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"5.x"),", there was one big instance to support all API endpoints. Parameters to these endpoints were passed directly as method parameters. Optional parameters were nullable and could be excluded. In ",(0,o.kt)("inlineCode",{parentName:"p"},"6.x"),", every endpoint group (",(0,o.kt)("inlineCode",{parentName:"p"},"albums"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tracks"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"userprofile"),") has their own API-Client, which is available as a property in a ",(0,o.kt)("inlineCode",{parentName:"p"},"SpotifyClient")," instance. While URI path parameters are still passed as method parameter, query and body parameters are now passed as a grouped class instance, where required parameters are needed in the constructor and optional parameters can be supplied as properties. All endpoints are also only implemented as async methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// OLD:\nPrivateProfile profile = await spotify.GetPrivateProfileAsync();\nvar playlists = await spotify.GetUserPlaylists(profile.Id, 100, 0);\n\n// NEW:\nPrivateUser user = await spotify.UserProfile.Current();\nvar playlists = await spotify.Playlists.GetUsers(user.Id, new PlaylistGetUsersRequest\n{\n  Limit = 100,\n  Offset = 0\n});\n")),(0,o.kt)("p",null,"All required arguments are checked for non-null values. If it's null, the methods will throw a ",(0,o.kt)("inlineCode",{parentName:"p"},"ArgumentNullException")),(0,o.kt)("h3",{id:"errorheader-handling"},"Error/Header Handling"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"5.x"),", all response models included a base error model, with properties like ",(0,o.kt)("inlineCode",{parentName:"p"},"Headers"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HasError"),". This was not a good decision since response models should be clean and only contain API response data. In ",(0,o.kt)("inlineCode",{parentName:"p"},"6.x"),", error handling is ",(0,o.kt)("inlineCode",{parentName:"p"},"Exception")," based. For example, if the access token is invalid, calling API endpoints will throw a ",(0,o.kt)("inlineCode",{parentName:"p"},"APIUnauthorizedException"),". If you hit the API too many times, the method will throw a ",(0,o.kt)("inlineCode",{parentName:"p"},"APITooManyRequestsException"),". They all derive from a base exception ",(0,o.kt)("inlineCode",{parentName:"p"},"APIException"),", which is also thrown in more general cases, e.g bad request input parameters. If you're interested in the headers of the last response, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"spotify.LastResponse"),", ",(0,o.kt)("strong",{parentName:"p"},"make sure there is only one thread using this instance!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// OLD:\nPrivateProfile profile = await spotify.GetPrivateProfileAsync();\nif(profile.HasError())\n{\n  // handle error\n}\nvar headers = profile.Headers(); // access to headers\n\n// NEW:\ntry\n{\n    PrivateProfile profile = await spotify.GetPrivateProfileAsync();\n    var response = spotify.LastResponse; // response.Headers\n}\ncatch (APIUnauthorizedException e)\n{\n  // handle unauthorized error\n  // e.Response contains HTTP response\n  // e.Message contains Spotify error message\n}\ncatch (APIException e)\n{\n  // handle common error\n  // e.Response contains HTTP response\n  // e.Message contains Spotify error message\n}\n")),(0,o.kt)("p",null,"More Info: ",(0,o.kt)("a",{parentName:"p",href:"./error_handling"},"Error Handling")),(0,o.kt)("h2",{id:"spotifyapiwebauth"},"SpotifyAPI.Web.Auth"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"5.x"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SpotifyAPI.Web.Auth")," contained every logic related to the OAuth flows. In ",(0,o.kt)("inlineCode",{parentName:"p"},"6.x"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SpotifyAPI.Web.Auth")," is only required if you need a HTTP Server for handling OAuth responses. For example, if you're in a ASP.NET environment or just use the ",(0,o.kt)("a",{parentName:"p",href:"client_credentials"},"Client Credentials")," flow, there is no need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"SpotifyAPI.Web.Auth")," anymore."),(0,o.kt)("h3",{id:"authorization-code-auth"},"Authorization Code Auth"),(0,o.kt)("p",null,"As an example, this shows how to convert a ",(0,o.kt)("inlineCode",{parentName:"p"},"5.x")," authorization code flow to ",(0,o.kt)("inlineCode",{parentName:"p"},"6.x"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// OLD\nvar auth =\n  new AuthorizationCodeAuth(_clientId, _secretId, "http://localhost:4002", "http://localhost:4002",\n    Scope.PlaylistReadPrivate | Scope.PlaylistReadCollaborative);\nauth.AuthReceived += AuthOnAuthReceived;\nauth.Start();\nauth.OpenBrowser();\n\nprivate static async void AuthOnAuthReceived(object sender, AuthorizationCode payload)\n{\n  var auth = (AuthorizationCodeAuth) sender;\n  auth.Stop();\n\n  Token token = await auth.ExchangeCode(payload.Code);\n  var spotify = new SpotifyWebAPI { AccessToken = token.AccessToken };\n  await PrintUsefulData(spotify);\n}\n\n// NEW\nvar config = SpotifyClientConfig.CreateDefault();\nvar server = new EmbedIOAuthServer(new Uri("http://localhost:5000/callback"), 5000);\nserver.AuthorizationCodeReceived += async (sender, response) =>\n{\n  await server.Stop();\n  var tokenResponse = await new OAuthClient(config).RequestToken(new AuthorizationCodeTokenRequest(\n    _clientId, _secretId, response.Code, server.BaseUri\n  ));\n\n  var spotify = new SpotifyClient(config.WithToken(tokenResponse.AccessToken));\n}\nawait server.Start();\n\nvar loginRequest = new LoginRequest(server.BaseUri, _clientId, LoginRequest.ResponseType.Code)\n{\n  Scope = new[] { Scopes.PlaylistReadPrivate, Scopes.PlaylistReadCollaborative }\n};\nBrowserUtil.Open(loginRequest.ToUri());\n')),(0,o.kt)("p",null,"While it is more code to write, there is a better seperation of concerns. For example, it is able to construct a ",(0,o.kt)("inlineCode",{parentName:"p"},"LoginRequest")," without starting a server. This ",(0,o.kt)("inlineCode",{parentName:"p"},"LoginRequest")," can also be used to forward the user to in a web-based context. The same auth server ",(0,o.kt)("inlineCode",{parentName:"p"},"EmbedIOAuthServer")," can be used to receive ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthorizationCodes")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ImplictGrants")," responses."))}f.isMDXComponent=!0}}]);