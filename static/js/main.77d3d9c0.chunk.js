(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,n){e.exports=n.p+"static/media/logo.8ac83418.svg"},208:function(e,t,n){e.exports=n(369)},368:function(e,t,n){},369:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(16),c=n.n(r),i=n(55),s=n(56),l=n(60),u=n(57),p=n(61),h=n(18),d=n(49),m=n.n(d),f=n(50),g=n.n(f),b=n(35),v=n.n(b),E=n(29),w=n.n(E),k=n(37),y=n.n(k),O=n(27),C=n(15),j=n(127),x=n.n(j),S=n(47),M=n.n(S),B=n(125),T=n.n(B),P=Object(C.withStyles)(function(e){return{avatar:{height:40,width:40,margin:10,background:e.palette.iconColor}}})(function(e){var t=e.classes;return o.a.createElement("div",{className:t.logo},o.a.createElement(M.a,{alt:"Logo",src:T.a,className:t.avatar}))}),N=n(23),A=n(59),D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={anchorEl:null,mobileMoreAnchorEl:null,themeCheckBox:!1},n.handleChange=function(e){return function(t){n.setState(Object(h.a)({},e,t.target.checked)),n.props.toggleTheme(t.target.checked)}},n.handleProfileMenuOpen=function(e){n.setState({anchorEl:e.currentTarget})},n.handleMenuClose=function(){n.setState({anchorEl:null}),n.handleMobileMenuClose()},n.handleMobileMenuOpen=function(e){n.setState({mobileMoreAnchorEl:e.currentTarget})},n.handleMobileMenuClose=function(){n.setState({mobileMoreAnchorEl:null})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.anchorEl,n=e.mobileMoreAnchorEl,a=this.props.classes,r=Boolean(t),c=Boolean(n),i=o.a.createElement(y.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:this.handleMenuClose},o.a.createElement(w.a,{onClick:this.handleMenuClose},"Profile"),o.a.createElement(w.a,{onClick:this.handleMenuClose},"My account")),s=o.a.createElement(y.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:c,onClose:this.handleMenuClose},o.a.createElement(w.a,null,o.a.createElement(A.a,{checked:this.state.themeCheckBox,onChange:this.handleChange("themeCheckBox"),value:"themeCheckBox"})));return o.a.createElement("div",{className:a.root},o.a.createElement(m.a,{className:a.appbar,position:"static"},o.a.createElement(g.a,null,o.a.createElement(P,null),o.a.createElement("div",{className:a.grow}),o.a.createElement("div",{className:a.sectionDesktop},o.a.createElement(A.a,{checked:this.state.themeCheckBox,onChange:this.handleChange("themeCheckBox"),value:"themeCheckBox"})),o.a.createElement("div",{className:a.sectionMobile},o.a.createElement(v.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},o.a.createElement(x.a,null))))),i,s)}}]),t}(o.a.Component),R=Object(N.b)(function(e){return{posts:e.postsReducer.posts}},function(e){return{toggleTheme:function(t){return e({type:"UPDATE_THEME",payload:t})}}})(Object(C.withStyles)(function(e){var t;return{root:{width:"100%"},appbar:{backgroundColor:e.palette.background,boxShadow:e.boxShadow,color:e.palette.text},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:(t={display:"none"},Object(h.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(h.a)(t,"fontFamily","Google Sans"),t),search:Object(h.a)({position:"relative",float:"right",borderRadius:e.shape.borderRadius,backgroundColor:e.palette.accentBackground,"&:hover":{backgroundColor:Object(O.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(h.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(h.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(h.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})(D)),L=n(38),U=n.n(L),W=n(51),F=n.n(W),z=n(53),G=n.n(z),_=n(52),I=n.n(_),H=n(36),J=n.n(H),Q=n(30),$=n.n(Q);var q=Object(C.withStyles)(function(e){return{card:{minWidth:275,boxShadow:e.boxShadow,background:e.palette.background},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:10,fontFamily:"Google Sans",color:e.palette.text},pos:{marginBottom:12},customFont:{fontFamily:"Google Sans",color:e.palette.text},actionBlue:{color:e.palette.primaryColor,fontFamily:"Google Sans"}}})(function(e){var t=e.classes;return o.a.createElement(F.a,{className:t.card},o.a.createElement(I.a,null,o.a.createElement($.a,{className:t.title,color:"textSecondary",gutterBottom:!0},"Quote of the Day"),o.a.createElement($.a,{className:t.customFont,variant:"h5",component:"h4"},e.post.title),o.a.createElement($.a,{className:t.customFont,component:"p"},e.post.body)),o.a.createElement(G.a,null,o.a.createElement(J.a,{className:t.actionBlue,size:"small"},"Learn More")))}),K=n(40),V=n.n(K),X=n(83),Y=n(128),Z=n.n(Y),ee=new(n(129).a)("PostsDB");ee.version(1).stores({posts:"++id, title, body"});var te=ee,ne=n(54),ae=n.n(ne),oe=Object(N.b)(function(e){return{posts:e.postsReducer.posts}},function(e){return{fetchPosts:function(){e(function(e){Z.a.get("https://jsonplaceholder.typicode.com/posts").then(function(){var t=Object(X.a)(V.a.mark(function t(n){var a;return V.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"UPDATE_POSTS",payload:n.data.sort(function(){return.5-Math.random()})}),(a=n.data.sort(function(){return.5-Math.random()}).splice(5,10)).forEach(function(e){delete e.id}),t.next=5,te.posts.toCollection().delete();case 5:te.posts.bulkPut(a);case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()).catch(function(e){console.error(e)})})},updateCachedPosts:function(){e(function(){var e=Object(X.a)(V.a.mark(function e(t){var n;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.posts.toArray();case 2:n=e.sent,t({type:"UPDATE_POSTS",payload:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}}})(Object(C.withStyles)(function(e){return{root:{flexGrow:1,padding:20,background:e.palette.background},progress:{display:"block",margin:"0 auto",marginTop:"30%",color:"#ea4436"},progressContainer:{width:"100%"}}})(function(e){var t=e.classes,n=e.posts;return Object(a.useEffect)(function(){navigator.onLine?e.fetchPosts():e.updateCachedPosts()},[]),n.length?o.a.createElement("div",null,o.a.createElement("div",{className:t.root},o.a.createElement(U.a,{container:!0,spacing:16},e.posts.map(function(e,t){return o.a.createElement(U.a,{key:t,item:!0,xs:12,sm:3},o.a.createElement(q,{post:e}))})))):o.a.createElement("div",{className:t.progressContainer},o.a.createElement(ae.a,{className:t.progress}))})),re=n(20),ce=Object(C.createMuiTheme)({palette:{main:re.grey[500],background:"#fff",text:"#333",primaryColor:re.blue[400],iconColor:"#999",accentBackground:"#efefef"},boxShadow:"0 5px 40px -20px rgba(40,44,63,.15)"}),ie=Object(C.createMuiTheme)({palette:{main:re.grey[500],background:"#222",text:"#fff",primaryColor:re.blue[400],iconColor:re.red[600],accentBackground:re.grey[800]},boxShadow:"0 5px 40px -20px #000"}),se=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(C.MuiThemeProvider,{theme:this.props.isDark?ie:ce},o.a.createElement("div",null,o.a.createElement(R,null),o.a.createElement(oe,null)))}}]),t}(a.Component),le=Object(N.b)(function(e){return{isDark:e.postsReducer.isDark}})(se),ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pe(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}window.addEventListener("beforeinstallprompt",function(e){e.preventDefault(),e.prompt()});n(368);var he=n(24),de=n(130),me=n.n(de),fe=n(131),ge=n(84),be={posts:[],isDark:!1},ve=Object(he.c)({postsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"UPDATE_POSTS":return Object(ge.a)({},e,{posts:a});case"UPDATE_THEME":return Object(ge.a)({},e,{isDark:a});default:return e}}}),Ee=Object(he.d)(ve,Object(he.a)(me.a,fe.a));c.a.render(o.a.createElement(N.a,{store:Ee},o.a.createElement(le,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/re-posts",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/re-posts","/service-worker.js");ue?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):pe(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):pe(t,e)})}}()}},[[208,1,2]]]);
//# sourceMappingURL=main.77d3d9c0.chunk.js.map