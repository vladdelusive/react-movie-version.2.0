(this["webpackJsonpreact-practice-movie"]=this["webpackJsonpreact-practice-movie"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/image.e2705afd.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/image.e2705afd.jpg"},34:function(e,t,a){e.exports=a(59)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),s=(a(39),a(40),a(41),a(8));a(42);function o(){return r.a.createElement("ul",{className:"nav nav-pills my-1",id:"pills-tab"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.c,{to:"/main",className:"nav-link",id:"pills-home-tab","data-toggle":"pill"},"Main")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.c,{className:"nav-link",id:"pills-profile-tab","data-toggle":"pill",to:"/popular"},"Popular")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.c,{className:"nav-link",id:"pills-contact-tab","data-toggle":"pill",to:"/top"},"Top Rated")))}function i(e){return r.a.createElement("nav",{className:"navbar navbar-light bg-light justify-content-between flex-nowrap"},r.a.createElement(o,null))}var u=a(6),m=a.n(u),d=a(2),p=a(9),f=a(11);a(48),a(49);function v(e){var t=e.title,a=(e.id,e.overview),n=e.poster,c=e.pathTo;return r.a.createElement("div",{className:"search-movie col-3 mb-5",style:{width:300}},r.a.createElement(s.b,{to:c},r.a.createElement("img",{src:n,className:"search-movie-img-top",alt:"sorry"})),r.a.createElement("div",{className:"search-movie-body"},r.a.createElement("h5",{className:"search-movie-title"},t),r.a.createElement("p",{className:"search-movie-text"},a),r.a.createElement(s.b,{to:c,className:"btn btn-primary"},"Read more...")))}var h="https://api.themoviedb.org/3/",g="844dba0bfd8f3a4f3799f6130ef9e335",b=function(e){return"".concat(h,"search/movie?api_key=").concat(g,"&query=").concat(e)},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"".concat(h,"movie/popular?api_key=").concat(g,"&page=").concat(e)},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"".concat(h,"movie/top_rated?api_key=").concat(g,"&page=").concat(e)},y="http://image.tmdb.org/t/p/",O=a(31),x=a.n(O);function N(e){var t=e.slice(0,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:150,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:190;return Math.floor(e+Math.random()*(t-e))}()),a=t.lastIndexOf(".");return t.slice(0,a)+"...."}function k(e){var t=e.results,a=e.path,n=[];return t.map((function(e){if(n.find((function(t){return t===e.id})))return"";n.push(e.id);var t=e.poster_path?"".concat(y).concat("w500").concat(e.poster_path):x.a,c=e.overview.length>150?N(e.overview):e.overview;return r.a.createElement(v,{title:e.title,id:e.id,key:e.id,overview:c,poster:t,pathTo:"".concat(a).concat(e.id)})}))}a(50);function w(e,t){localStorage.setItem(e,JSON.stringify(t))}function S(e){var t=JSON.parse(localStorage.getItem(e));return null!=t&&t}a(51);function P(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}a(52);var R=function(){window.scrollTo({top:0,behavior:"smooth"})};function T(){return r.a.createElement("div",{className:"arrow",onClick:R})}var _=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(1),s=Object(f.a)(l,2),o=s[0],i=s[1],u=Object(n.useState)(!0),v=Object(f.a)(u,2),h=v[0],g=v[1],b=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(E(o));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,w("POPULAR",{results:[].concat(Object(d.a)(a),Object(d.a)(n.results)),page:o+1,loading:!1}),c([].concat(Object(d.a)(a),Object(d.a)(n.results))),i(o+1),g(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(S("POPULAR")){var e=S("POPULAR");c(e.results),i(e.page),g(!1)}else b()}),[c,i,g]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-1 mx-auto"},"Popular"),h?r.a.createElement(P,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"search-movie-deck row justify-content-center my-5"},r.a.createElement(k,{results:a,path:"/"}))),r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement("button",{className:"btn btn-info mx-auto center",onClick:b},"Load more.."))))};a(53);var B=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(1),s=Object(f.a)(l,2),o=s[0],i=s[1],u=Object(n.useState)(!0),v=Object(f.a)(u,2),h=v[0],g=v[1],b=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j(o));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,w("TOP",{results:[].concat(Object(d.a)(a),Object(d.a)(n.results)),page:o+1,loading:!1}),c([].concat(Object(d.a)(a),Object(d.a)(n.results))),i(o+1),g(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(S("TOP")){var e=S("TOP");c(e.results),i(e.page),g(!1)}else b()}),[c,i,g]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-1 mx-auto"},"Top Rated"),h?r.a.createElement(P,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"search-movie-deck row justify-content-center my-5"},r.a.createElement(k,{results:a,path:"/"}))),r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement("button",{className:"btn btn-info mx-auto center",onClick:b},"Load more.."))))},C=a(18),D=a(19),L=a(22),M=a(21),A=(a(54),a(32)),F=a.n(A),I=a(23),U=function(e){Object(L.a)(a,e);var t=Object(M.a)(a);function a(){var e;Object(C.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={results:[],trailer:"",badges:["success","warning","danger","primary","info","secondary","dark"],movieBadges:[]},e.onDragEnd=function(t){var a=t.destination,n=t.source;if(a&&a.index!==n.index){console.log(e.state.movieBadges);var r=Object(d.a)(e.state.movieBadges),c=r[n.index];r.splice(n.index,1),r.splice(a.index,0,c),e.setState({movieBadges:r})}},e.render=function(){return r.a.createElement("div",{className:"container row new-row"},e.state.trailer?r.a.createElement("img",{src:e.state.results.poster_path?"".concat(y).concat("w780").concat(e.state.results.poster_path):F.a,className:"rounded col-xl-4 offset-md-1",alt:"movie-post"}):r.a.createElement(P,null),r.a.createElement("div",{className:"col-xl-4 offset-xl-1"},r.a.createElement("h1",null,e.state.results.title),r.a.createElement("hr",null),r.a.createElement("strong",null," Description: "),r.a.createElement("p",null,e.state.results.overview||"loading.."),r.a.createElement("hr",null),r.a.createElement(I.a,{onDragEnd:e.onDragEnd},r.a.createElement("div",null,r.a.createElement("strong",null,"Generes: "),r.a.createElement(I.c,{droppableId:"droppable",direction:"horizontal"},(function(t){return r.a.createElement("span",Object.assign({ref:t.innerRef},t.droppableProps),e.state.movieBadges,t.placeholder)})))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("strong",null,"Rate: "),r.a.createElement("i",null,e.averageRate()||"?","/10")),e.setRate(),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("strong",null," Trailer: ")),r.a.createElement("div",{className:"trailer"},e.state.trailer?r.a.createElement("iframe",{frameBorder:"0",allowFullScreen:"1",title:"YouTube video player",src:"https://www.youtube.com/embed/".concat(e.state.trailer,"?controls=1")}):"loading...")))},e}return Object(D.a)(a,[{key:"getStateResults",value:function(){return!!this.state.results}},{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t,a,n,r,c,l,s,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.match.params.movie,!(a=S(t))){e.next=6;break}this.setState({results:a.results,trailer:a.trailer},this.setBadges),e.next=22;break;case 6:return n="".concat(h,"movie/").concat(t,"?api_key=").concat(g),e.next=9,fetch(n);case 9:return r=e.sent,e.next=12,r.json();case 12:return c=e.sent,e.next=15,fetch((i=t,"".concat(h,"movie/").concat(i,"/videos?api_key=").concat(g)));case 15:return l=e.sent,e.next=18,l.json();case 18:s=e.sent,o=s.results[0]?s.results[0].key:"7R1N-8SoqcM",w(t,{results:c,trailer:o}),this.setState({results:c,trailer:o},this.setBadges);case 22:case"end":return e.stop()}var i}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setBadges",value:function(){var e=this,t=[];if(!this.state.results.genres)return"loading..";for(var a=function(e){var a=Math.round(6*Math.random());t.some((function(e){return a===e}))?e--:t.push(a),n=e},n=0;n<this.state.results.genres.length;n++)a(n);var c=this.state.results.genres.map((function(a,n){return r.a.createElement(I.b,{draggableId:n+a.name,index:n,key:n},(function(c){return r.a.createElement("span",Object.assign({},c.draggableProps,c.dragHandleProps,{ref:c.innerRef,key:n,className:"badge badge-pill badge-".concat(e.state.badges[t[n]])}),a.name)}))}));this.setState({movieBadges:c})}},{key:"averageRate",value:function(){return Math.round(this.state.results.vote_average)}},{key:"setRate",value:function(){for(var e=this.averageRate()||0,t=[],a=0;a<10;a++)t[a]=r.a.createElement("span",{key:a,className:"fa fa-star".concat(a<e?" checked":"")});return t}}]),a}(r.a.Component),V=a(10),G=a(20);a(56),a(57);function H(e){var t=e.handlerLoading,a=e.handlerGoUp,n=e.leftData,c=e.data;return void 0===c||c?n()?r.a.createElement("button",{className:"btn btn-info mx-auto center",onClick:t},"Load more.."):r.a.createElement("button",{className:"btn btn-danger mx-auto center",onClick:a},"Thats all, go to up? "):""}var J;a(58);function q(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("h1",{className:"display-1"},"not found"))}var z=function(e){Object(L.a)(a,e);var t=Object(M.a)(a);function a(){var e;Object(C.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:"",page:1,results:void 0,allPages:0},e.componentDidMount=function(){var t=S("SEARCH");t&&e.setState({results:t.results,allPages:t.allPages,inputValue:t.inputValue})},e.valueTarget=function(t){var a=t.target;if(e.setState({inputValue:a.value}),clearTimeout(J),""===a.value)return e.setState({results:void 0,allPages:0,page:1}),void localStorage.removeItem("SEARCH");J=setTimeout(e.doSearch.bind(Object(G.a)(e),a.value),500)},e.doSearch=function(){var t=Object(p.a)(m.a.mark((function t(a){var n,r,c,l,s,o,i,u=arguments;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=u.length>1&&void 0!==u[1]&&u[1])){t.next=12;break}return r="".concat(b(a),"&page=").concat(n),t.next=5,fetch(r);case 5:return c=t.sent,t.next=8,c.json();case 8:l=t.sent,e.setState((function(e){return{results:[].concat(Object(d.a)(e.results),Object(d.a)(l.results)),page:e.page+1}})),t.next=22;break;case 12:return t.next=14,fetch(b(a));case 14:return s=t.sent,t.next=17,s.json();case 17:o=t.sent,i={results:Object(d.a)(o.results),allPages:o.total_pages},e.setState(i),i.inputValue=a,w("SEARCH",i);case 22:return t.abrupt("return",!1);case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handlerLoading=function(){var t=e.state.page+1;e.doSearch(e.state.inputValue,t)},e.handlerGoUp=function(){window.scrollTo({top:0,behavior:"smooth"})},e.leftData=function(){return e.state.allPages>e.state.page},e}return Object(D.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form-inline order-0 center",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",value:this.state.inputValue,placeholder:"search film","aria-label":"Search",onChange:this.valueTarget})),this.state.results?r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"search-movie-deck row justify-content-center my-5"},this.state.results.length>0?r.a.createElement(k,{results:this.state.results,path:"/"}):r.a.createElement(q,null))):"",this.state.results?r.a.createElement(H,{handlerLoading:this.handlerLoading,handlerGoUp:this.handlerGoUp,leftData:this.leftData,data:this.state.results.length}):"")}}]),a}(n.Component);function Y(){return r.a.createElement("div",null,r.a.createElement(z,null))}var K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement(V.d,null,r.a.createElement(V.b,{path:"/main",exact:!0,component:Y}),r.a.createElement(V.b,{path:"/popular/",component:_}),r.a.createElement(V.b,{path:"/top",component:B}),r.a.createElement(V.b,{path:"/:movie",component:U}),r.a.createElement(V.a,{to:"/main"})))};l.a.render(r.a.createElement(s.a,null,r.a.createElement(K,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.49833186.chunk.js.map