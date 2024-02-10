"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[5003],{3888:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=t(1527),i=t(6274);const o={id:"pagination",title:"Pagination"},r=void 0,s={id:"pagination",title:"Pagination",description:"When working with Spotify responses, you will often encounter the Paging type.",source:"@site/docs/pagination.md",sourceDirName:".",slug:"/pagination",permalink:"/SpotifyAPI-NET/docs/pagination",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/pagination.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1707561707,formattedLastUpdatedAt:"Feb 10, 2024",frontMatter:{id:"pagination",title:"Pagination"},sidebar:"docs",previous:{title:"Proxy",permalink:"/SpotifyAPI-NET/docs/proxy"},next:{title:"Retry Handling",permalink:"/SpotifyAPI-NET/docs/retry_handling"}},l={},c=[{value:"PaginateAll",id:"paginateall",level:2},{value:"Paginate",id:"paginate",level:2},{value:"Paginators",id:"paginators",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["When working with Spotify responses, you will often encounter the ",(0,a.jsx)(n.code,{children:"Paging<T>"})," type."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"The offset-based paging object is a container for a set of objects. It contains a key called Items (whose value is an array of the requested objects) along with other keys like Previous, Next and Limit which can be useful in future calls."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["It allows you to only receive a subset of all available data and dynamically check if more requests are required. The library supports ",(0,a.jsx)(n.code,{children:"Paging<T>"})," responses in two ways:"]}),"\n",(0,a.jsx)(n.h2,{id:"paginateall",children:"PaginateAll"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"PaginateAll"})," will query all remaining elements based on a first page and return all of them in an ",(0,a.jsx)(n.code,{children:"IList"}),". This method should not be used for huge amounts of pages (e.g ",(0,a.jsx)(n.code,{children:"Search"})," Endpoint), since it stores every response in memory."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"// we need the first page\nvar page = await spotify.Playlists.CurrentUsers();\n\n// allPages will include the first page retrived before\nvar allPages = await spotify.PaginateAll(page);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"paginate",children:"Paginate"}),"\n",(0,a.jsx)(n.admonition,{title:".NET Standard >= 2.1 required",type:"info"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Paginate"})," is based on ",(0,a.jsx)(n.code,{children:"IAsyncEnumerable"})," and streams pages instead of returning them all in one list. This allows it to break the fetching early and keep only 1 page in memory at a time. This method should always be preferred to ",(0,a.jsx)(n.code,{children:"PaginateAll"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'// we need the first page\nvar page = await spotify.Playlists.CurrentUsers();\n\nawait foreach(var item in spotify.Paginate(page))\n{\n  Console.WriteLine(item.Name);\n  // you can use "break" here!\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Some endpoints have nested and/or multiple paginations objects. When requesting the next page, it will not return the actual paging object but rather the root level endpoint object. A good example is the ",(0,a.jsx)(n.code,{children:"Search"})," endpoint, which contains up to 5 Paging objects. Requesting the next page of the nested ",(0,a.jsx)(n.code,{children:"Artists"})," paging object will return another ",(0,a.jsx)(n.code,{children:"Search"})," response, instead of just ",(0,a.jsx)(n.code,{children:"Artists"}),". You will need to supply a mapper function to the ",(0,a.jsx)(n.code,{children:"Paginate"})," call, which returns the correct paging object:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'var search = await spotify.Search.Item(new SearchRequest(\n  SearchRequest.Types.All, "Jake"\n));\n\nawait foreach(var item in spotify.Paginate(search.Albums, (s) => s.Albums))\n{\n  Console.WriteLine(item.Name);\n  // you can use "break" here!\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"paginators",children:"Paginators"}),"\n",(0,a.jsxs)(n.p,{children:["Via the interface ",(0,a.jsx)(n.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IPaginator.cs",children:(0,a.jsx)(n.code,{children:"IPaginator"})}),", it can be configured how pages are fetched. It can be configured on a global level:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"var config = SpotifyClientConfig\n  .CreateDefault()\n  .WithPaginator(new YourCustomPaginator());\n"})}),"\n",(0,a.jsx)(n.p,{children:"or on method level:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'await foreach(var item in spotify.Paginate(page, new YourCustomPaginator()))\n{\n  Console.WriteLine(item.Name);\n  // you can use "break" here!\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/SimplePaginator.cs",children:(0,a.jsx)(n.code,{children:"SimplePaginator"})})," is used. It fetches pages without any delay."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},6274:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var a=t(959);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);