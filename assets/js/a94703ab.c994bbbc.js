"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[4368],{9298:function(e,n,t){t.r(n),t.d(n,{default:function(){return fe}});var a=t(959),i=t(5924),o=t(6307),r=t(3011),s=t(6477),l=t(8293),c=t(6530),d=t(118),u=t(3625);var m={backToTopButton:"backToTopButton_zNLY",backToTopButtonShow:"backToTopButtonShow_n2HW"},b=t(1527);function h(){var e=function(e){var n=e.threshold,t=(0,a.useState)(!1),i=t[0],o=t[1],r=(0,a.useRef)(!1),s=(0,d.Ct)(),l=s.startScroll,c=s.cancelScroll;return(0,d.RF)((function(e,t){var a=e.scrollY,i=null==t?void 0:t.scrollY;i&&(r.current?r.current=!1:a>=i?(c(),o(!1)):a<n?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.S)((function(e){e.location.hash&&(r.current=!0,o(!1))})),{shown:i,scrollToTop:function(){return l(0)}}}({threshold:300}),n=e.shown,t=e.scrollToTop;return(0,b.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",r.k.common.backToTopButton,m.backToTopButton,n&&m.backToTopButtonShow),type:"button",onClick:t})}var p=t(7797),v=t(8903),x=t(7181),f=t(5508),j=t(7687);function g(e){return(0,b.jsx)("svg",Object.assign({width:"20",height:"20","aria-hidden":"true"},e,{children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}var _={collapseSidebarButton:"collapseSidebarButton_EL1p",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_UjFb"};function k(e){var n=e.onClick;return(0,b.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",_.collapseSidebarButton),onClick:n,children:(0,b.jsx)(g,{className:_.collapseSidebarButtonIcon})})}var C=t(5598),S=t(3727),I=t(6854),N=Symbol("EmptyContext"),T=a.createContext(N);function Z(e){var n=e.children,t=(0,a.useState)(null),i=t[0],o=t[1],r=(0,a.useMemo)((function(){return{expandedItem:i,setExpandedItem:o}}),[i]);return(0,b.jsx)(T.Provider,{value:r,children:n})}var L=t(2502),y=t(318),B=t(1310),A=t(5089),w=["item","onItemClick","activePath","level","index"];function E(e){var n=e.collapsed,t=e.categoryLabel,a=e.onClick;return(0,b.jsx)("button",{"aria-label":n?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:t}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function H(e){var n=e.item,t=e.onItemClick,o=e.activePath,l=e.level,c=e.index,d=(0,S.Z)(e,w),u=n.items,m=n.label,h=n.collapsible,p=n.className,v=n.href,x=(0,f.L)().docs.sidebar.autoCollapseCategories,j=function(e){var n=(0,A.Z)();return(0,a.useMemo)((function(){return e.href&&!e.linkUnlisted?e.href:!n&&e.collapsible?(0,s.LM)(e):void 0}),[e,n])}(n),g=(0,s._F)(n,o),_=(0,y.Mg)(v,o),k=(0,L.u)({initialState:function(){return!!h&&(!g&&n.collapsed)}}),C=k.collapsed,Z=k.setCollapsed,H=function(){var e=(0,a.useContext)(T);if(e===N)throw new I.i6("DocSidebarItemsExpandedStateProvider");return e}(),M=H.expandedItem,W=H.setExpandedItem,F=function(e){void 0===e&&(e=!C),W(e?null:c),Z(e)};return function(e){var n=e.isActive,t=e.collapsed,i=e.updateCollapsed,o=(0,I.D9)(n);(0,a.useEffect)((function(){n&&!o&&t&&i(!1)}),[n,o,t,i])}({isActive:g,collapsed:C,updateCollapsed:F}),(0,a.useEffect)((function(){h&&null!=M&&M!==c&&x&&Z(!0)}),[h,M,c,Z,x]),(0,b.jsxs)("li",{className:(0,i.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":C},p),children:[(0,b.jsxs)("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_}),children:[(0,b.jsx)(B.Z,Object.assign({className:(0,i.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!v&&h,"menu__link--active":g}),onClick:h?function(e){null==t||t(n),v?F(!1):(e.preventDefault(),F())}:function(){null==t||t(n)},"aria-current":_?"page":void 0,"aria-expanded":h?!C:void 0,href:h?null!=j?j:"#":j},d,{children:m})),v&&h&&(0,b.jsx)(E,{collapsed:C,categoryLabel:m,onClick:function(e){e.preventDefault(),F()}})]}),(0,b.jsx)(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C,children:(0,b.jsx)(K,{items:u,tabIndex:C?-1:0,onItemClick:t,activePath:o,level:l+1})})]})}var M=t(8280),W=t(3866),F={menuExternalLink:"menuExternalLink_V1YE"},P=["item","onItemClick","activePath","level","index"];function R(e){var n=e.item,t=e.onItemClick,a=e.activePath,o=e.level,l=(e.index,(0,S.Z)(e,P)),c=n.href,d=n.label,u=n.className,m=n.autoAddBaseUrl,h=(0,s._F)(n,a),p=(0,M.Z)(c);return(0,b.jsx)("li",{className:(0,i.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),children:(0,b.jsxs)(B.Z,Object.assign({className:(0,i.Z)("menu__link",!p&&F.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:m,"aria-current":h?"page":void 0,to:c},p&&{onClick:t?function(){return t(n)}:void 0},l,{children:[d,!p&&(0,b.jsx)(W.Z,{})]}))},d)}var V={menuHtmlItem:"menuHtmlItem_rzFh"};function D(e){var n=e.item,t=e.level,a=e.index,o=n.value,s=n.defaultStyle,l=n.className;return(0,b.jsx)("li",{className:(0,i.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(t),s&&[V.menuHtmlItem,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:o}},a)}var O=["item"];function z(e){var n=e.item,t=(0,S.Z)(e,O);switch(n.type){case"category":return(0,b.jsx)(H,Object.assign({item:n},t));case"html":return(0,b.jsx)(D,Object.assign({item:n},t));default:return(0,b.jsx)(R,Object.assign({item:n},t))}}var U=["items"];function Y(e){var n=e.items,t=(0,S.Z)(e,U),a=(0,s.f)(n,t.activePath);return(0,b.jsx)(Z,{children:a.map((function(e,n){return(0,b.jsx)(z,Object.assign({item:e,index:n},t),n)}))})}var K=(0,a.memo)(Y),G={menu:"menu_owLA",menuWithAnnouncementBar:"menuWithAnnouncementBar_4iFh"};function X(e){var n=e.path,t=e.sidebar,o=e.className,s=function(){var e=(0,C.nT)().isActive,n=(0,a.useState)(e),t=n[0],i=n[1];return(0,d.RF)((function(n){var t=n.scrollY;e&&i(0===t)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.Z)("menu thin-scrollbar",G.menu,s&&G.menuWithAnnouncementBar,o),children:(0,b.jsx)("ul",{className:(0,i.Z)(r.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(K,{items:t,activePath:n,level:1})})})}var Q="sidebar_gUGL",q="sidebarWithHideableNavbar_yxXQ",J="sidebarHidden_yysS",$="sidebarLogo_TrFv";function ee(e){var n=e.path,t=e.sidebar,a=e.onCollapse,o=e.isHidden,r=(0,f.L)(),s=r.navbar.hideOnScroll,l=r.docs.sidebar.hideable;return(0,b.jsxs)("div",{className:(0,i.Z)(Q,s&&q,o&&J),children:[s&&(0,b.jsx)(j.Z,{tabIndex:-1,className:$}),(0,b.jsx)(X,{path:n,sidebar:t}),l&&(0,b.jsx)(k,{onClick:a})]})}var ne=a.memo(ee),te=t(6668),ae=t(289),ie=function(e){var n=e.sidebar,t=e.path,a=(0,ae.e)();return(0,b.jsx)("ul",{className:(0,i.Z)(r.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(K,{items:n,activePath:t,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function oe(e){return(0,b.jsx)(te.Zo,{component:ie,props:e})}var re=a.memo(oe);function se(e){var n=(0,x.i)(),t="desktop"===n||"ssr"===n,a="mobile"===n;return(0,b.jsxs)(b.Fragment,{children:[t&&(0,b.jsx)(ne,Object.assign({},e)),a&&(0,b.jsx)(re,Object.assign({},e))]})}var le={expandButton:"expandButton_Xg9V",expandButtonIcon:"expandButtonIcon_KDfd"};function ce(e){var n=e.toggleSidebar;return(0,b.jsx)("div",{className:le.expandButton,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:n,onClick:n,children:(0,b.jsx)(g,{className:le.expandButtonIcon})})}var de={docSidebarContainer:"docSidebarContainer_f0K6",docSidebarContainerHidden:"docSidebarContainerHidden_HcWj",sidebarViewport:"sidebarViewport_VW25"};function ue(e){var n,t=e.children,i=(0,l.V)();return(0,b.jsx)(a.Fragment,{children:t},null!=(n=null==i?void 0:i.name)?n:"noSidebar")}function me(e){var n=e.sidebar,t=e.hiddenSidebarContainer,o=e.setHiddenSidebarContainer,s=(0,v.TH)().pathname,l=(0,a.useState)(!1),c=l[0],d=l[1],u=(0,a.useCallback)((function(){c&&d(!1),!c&&(0,p.n)()&&d(!0),o((function(e){return!e}))}),[o,c]);return(0,b.jsx)("aside",{className:(0,i.Z)(r.k.docs.docSidebarContainer,de.docSidebarContainer,t&&de.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(de.docSidebarContainer)&&t&&d(!0)},children:(0,b.jsx)(ue,{children:(0,b.jsxs)("div",{className:(0,i.Z)(de.sidebarViewport,c&&de.sidebarViewportHidden),children:[(0,b.jsx)(se,{sidebar:n,path:s,onCollapse:u,isHidden:c}),c&&(0,b.jsx)(ce,{toggleSidebar:u})]})})})}var be={docMainContainer:"docMainContainer_Mfgp",docMainContainerEnhanced:"docMainContainerEnhanced_VPLv",docItemWrapperEnhanced:"docItemWrapperEnhanced_zLl3"};function he(e){var n=e.hiddenSidebarContainer,t=e.children,a=(0,l.V)();return(0,b.jsx)("main",{className:(0,i.Z)(be.docMainContainer,(n||!a)&&be.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",be.docItemWrapper,n&&be.docItemWrapperEnhanced),children:t})})}var pe={docRoot:"docRoot_pxTM",docsWrapper:"docsWrapper_WccV"};function ve(e){var n=e.children,t=(0,l.V)(),i=(0,a.useState)(!1),o=i[0],r=i[1];return(0,b.jsxs)("div",{className:pe.docsWrapper,children:[(0,b.jsx)(h,{}),(0,b.jsxs)("div",{className:pe.docRoot,children:[t&&(0,b.jsx)(me,{sidebar:t.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:r}),(0,b.jsx)(he,{hiddenSidebarContainer:o,children:n})]})]})}var xe=t(6063);function fe(e){var n=(0,s.SN)(e);if(!n)return(0,b.jsx)(xe.Z,{});var t=n.docElement,a=n.sidebarName,c=n.sidebarItems;return(0,b.jsx)(o.FG,{className:(0,i.Z)(r.k.page.docsDocPage),children:(0,b.jsx)(l.b,{name:a,items:c,children:(0,b.jsx)(ve,{children:t})})})}},6063:function(e,n,t){t.d(n,{Z:function(){return s}});t(959);var a=t(5924),i=t(6530),o=t(7784),r=t(1527);function s(e){var n=e.className;return(0,r.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",n),children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,r.jsx)(o.Z,{as:"h1",className:"hero__title",children:(0,r.jsx)(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);