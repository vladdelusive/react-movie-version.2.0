(this["webpackJsonpreact-practice-movie"]=this["webpackJsonpreact-practice-movie"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/image.e2705afd.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/image.e2705afd.jpg"},35:function(e,t,a){e.exports=a(60)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),o=(a(40),a(41),a(42),a(9));a(43);function s(){return r.a.createElement("ul",{className:"nav nav-pills my-1",id:"pills-tab"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{to:"/main",className:"nav-link",id:"pills-home-tab","data-toggle":"pill"},"Main")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{className:"nav-link",id:"pills-profile-tab","data-toggle":"pill",to:"/popular"},"Popular")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{className:"nav-link",id:"pills-contact-tab","data-toggle":"pill",to:"/top"},"Top Rated")))}function i(e){return r.a.createElement("nav",{className:"navbar navbar-light bg-light justify-content-between flex-nowrap"},r.a.createElement(s,null))}var u=a(2),m=a.n(u),p=a(8),d=a(11),v=a(12),f=a(14),h=a(13);a(49),a(50);function g(e){var t=e.title,a=(e.id,e.overview),n=e.poster,l=e.pathTo;return r.a.createElement("div",{className:"search-movie col-3 mb-5",style:{width:300}},r.a.createElement(o.b,{to:l},r.a.createElement("img",{src:n,className:"search-movie-img-top",alt:"sorry"})),r.a.createElement("div",{className:"search-movie-body"},r.a.createElement("h5",{className:"search-movie-title"},t),r.a.createElement("p",{className:"search-movie-text"},a),r.a.createElement(o.b,{to:l,className:"btn btn-primary"},"Read more...")))}var E="https://api.themoviedb.org/3/",b="844dba0bfd8f3a4f3799f6130ef9e335",y=function(e){return"".concat(E,"search/movie?api_key=").concat(b,"&query=").concat(e)},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"".concat(E,"movie/popular?api_key=").concat(b,"&page=").concat(e)},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"".concat(E,"movie/top_rated?api_key=").concat(b,"&page=").concat(e)},w="http://image.tmdb.org/t/p/",k=a(31),N=a.n(k);function x(e){var t=e.slice(0,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:150,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:190;return Math.floor(e+Math.random()*(t-e))}()),a=t.lastIndexOf(".");return t.slice(0,a)+"...."}function S(e){var t=e.results,a=e.path,n=[];return t.map((function(e){if(n.find((function(t){return t===e.id})))return"";n.push(e.id);var t=e.poster_path?"".concat(w).concat("w500").concat(e.poster_path):N.a,l=e.overview.length>150?x(e.overview):e.overview;return r.a.createElement(g,{title:e.title,id:e.id,key:e.id,overview:l,poster:t,pathTo:"".concat(a).concat(e.id)})}))}a(51);var R=a(10);function T(e,t){localStorage.setItem(e,JSON.stringify(t))}function P(e){var t=JSON.parse(localStorage.getItem(e));return null!=t&&t}var _=function(){var e=Object(p.a)(m.a.mark((function e(t,a,n){var r,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a(t.state.page));case 2:return r=e.sent,e.next=5,r.json();case 5:l=e.sent,t.setState((function(e){var t={results:[].concat(Object(R.a)(e.results),Object(R.a)(l.results)),page:e.page+1,loading:!1};return T(n,t),t}));case 7:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();a(52);function L(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}a(53);var D=function(){window.scrollTo({top:0,behavior:"smooth"})};function A(){return r.a.createElement("div",{className:"arrow",onClick:D})}var B=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={results:[],page:1,loading:!0},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P("POPULAR")?(t=P("POPULAR"),this.setState({results:t.results,page:t.page,loading:!1})):_.call(null,this,O,"POPULAR");case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-1 mx-auto"},"Popular"),this.state.loading?r.a.createElement(L,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"search-movie-deck row justify-content-center my-5"},r.a.createElement(S,{results:this.state.results,path:"/"}))),r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("button",{className:"btn btn-info mx-auto center",onClick:_.bind(null,this,O,"POPULAR")},"Load more.."))))}}]),a}(n.Component),C=(a(54),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={results:[],page:1,loading:!0},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P("TOP")?(t=P("TOP"),this.setState({results:t.results,page:t.page,loading:!1})):_.call(null,this,j,"TOP");case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-1 mx-auto"},"Top Rated"),this.state.loading?r.a.createElement(L,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"search-movie-deck row justify-content-center my-5"},r.a.createElement(S,{results:this.state.results,path:"/"}))),r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("button",{className:"btn btn-info mx-auto center",onClick:_.bind(null,this,j,"TOP")},"Load more.."))))}}]),a}(n.Component)),M=(a(55),a(32)),I=a.n(M),U=a(22),V=a(15),F=function(e,t){return function(){var a=Object(p.a)(m.a.mark((function a(n){var r,l,c,o,s,i,u;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(r=P(e))){a.next=6;break}return t(r.results),a.abrupt("return",n({type:"SET_RESULTS_TRAILER",payloadTrailer:r.trailer,payloadResults:r.results}));case 6:return l="".concat(E,"movie/").concat(e,"?api_key=").concat(b),a.next=9,fetch(l);case 9:return c=a.sent,a.next=12,c.json();case 12:return o=a.sent,a.next=15,fetch((m=e,"".concat(E,"movie/").concat(m,"/videos?api_key=").concat(b)));case 15:return s=a.sent,a.next=18,s.json();case 18:return i=a.sent,u=i.results[0]?i.results[0].key:"7R1N-8SoqcM",T(e,{results:o,trailer:u}),t(o),a.abrupt("return",n({type:"SET_RESULTS_TRAILER",payloadTrailer:u,payloadResults:o}));case 23:case"end":return a.stop()}var m}),a)})));return function(e){return a.apply(this,arguments)}}()},G=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).onDragEnd=function(t){var a=t.destination,n=t.source;if(a&&a.index!==n.index){var r=Object(R.a)(e.props.movieBadges),l=r[n.index];r.splice(n.index,1),r.splice(a.index,0,l),e.props.setChangeMovieBadges(r)}},e.render=function(){return r.a.createElement("div",{className:"container row new-row"},e.props.trailer?r.a.createElement("img",{src:e.props.results.poster_path?"".concat(w).concat("w780").concat(e.props.results.poster_path):I.a,className:"rounded col-xl-4 offset-md-1",alt:"movie-post"}):r.a.createElement(L,null),r.a.createElement("div",{className:"col-xl-4 offset-xl-1"},r.a.createElement("h1",null,e.props.results.title),r.a.createElement("hr",null),r.a.createElement("strong",null," Description: "),r.a.createElement("p",null,e.props.results.overview||"loading.."),r.a.createElement("hr",null),r.a.createElement(U.a,{onDragEnd:e.onDragEnd},r.a.createElement("div",null,r.a.createElement("strong",null,"Generes: "),r.a.createElement(U.c,{droppableId:"droppable",direction:"horizontal"},(function(t){return r.a.createElement("span",Object.assign({ref:t.innerRef},t.droppableProps),e.props.movieBadges,t.placeholder)})))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("strong",null,"Rate: "),r.a.createElement("i",null,e.averageRate()||"?","/10")),e.setRate(),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("strong",null," Trailer: ")),r.a.createElement("div",{className:"trailer"},e.props.trailer?r.a.createElement("iframe",{frameBorder:"0",allowFullScreen:"1",title:"YouTube video player",src:"https://www.youtube.com/embed/".concat(e.props.trailer,"?controls=1")}):"loading...")))},e}return Object(v.a)(a,[{key:"componentWillUnmount",value:function(){this.props.reload()}},{key:"componentDidMount",value:function(){this.props.setData(this.props.match.params.movie,this.setBadges.bind(this))}},{key:"setBadges",value:function(e){for(var t=this,a=[],n=function(e){var t=Math.round(6*Math.random());a.some((function(e){return t===e}))?e--:a.push(t),l=e},l=0;l<e.genres.length;l++)n(l);var c=e.genres.map((function(e,n){return r.a.createElement(U.b,{draggableId:n+e.name,index:n,key:n},(function(l){return r.a.createElement("span",Object.assign({},l.draggableProps,l.dragHandleProps,{ref:l.innerRef,key:n,className:"badge badge-pill badge-".concat(t.props.badges[a[n]])}),e.name)}))}));this.props.setChangeMovieBadges(c)}},{key:"averageRate",value:function(){return Math.round(this.props.results.vote_average)}},{key:"setRate",value:function(){for(var e=this.averageRate()||0,t=[],a=0;a<10;a++)t[a]=r.a.createElement("span",{key:a,className:"fa fa-star".concat(a<e?" checked":"")});return t}}]),a}(r.a.Component);var H=Object(V.b)((function(e){return{results:e.movie.results,trailer:e.movie.trailer,badges:e.movie.badges,movieBadges:e.movie.movieBadges}}),(function(e){return{setData:function(t,a){return e(F(t,a))},setChangeMovieBadges:function(t){return e({type:"SET_MOVIE_BADGES",payload:t})},reload:function(){return e({type:"RELOAD"})}}}))(G),J=a(16),q=a(21);a(57),a(58);function z(e){var t=e.handlerLoading,a=e.handlerGoUp,n=e.leftData,l=e.data;return void 0===l||l?n()?r.a.createElement("button",{className:"btn btn-info mx-auto center",onClick:t},"Load more.."):r.a.createElement("button",{className:"btn btn-danger mx-auto center",onClick:a},"Thats all, go to up? "):""}var W;a(59);function Y(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("h1",{className:"display-1"},"not found"))}var K=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:"",page:1,results:void 0,allPages:0},e.componentDidMount=function(){var t=P("SEARCH");t&&e.setState({results:t.results,allPages:t.allPages,inputValue:t.inputValue})},e.valueTarget=function(t){var a=t.target;if(e.setState({inputValue:a.value}),clearTimeout(W),""===a.value)return e.setState({results:void 0,allPages:0,page:1}),void localStorage.removeItem("SEARCH");W=setTimeout(e.doSearch.bind(Object(q.a)(e),a.value),500)},e.doSearch=function(){var t=Object(p.a)(m.a.mark((function t(a){var n,r,l,c,o,s,i,u=arguments;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=u.length>1&&void 0!==u[1]&&u[1])){t.next=12;break}return r="".concat(y(a),"&page=").concat(n),t.next=5,fetch(r);case 5:return l=t.sent,t.next=8,l.json();case 8:c=t.sent,e.setState((function(e){return{results:[].concat(Object(R.a)(e.results),Object(R.a)(c.results)),page:e.page+1}})),t.next=22;break;case 12:return t.next=14,fetch(y(a));case 14:return o=t.sent,t.next=17,o.json();case 17:s=t.sent,i={results:Object(R.a)(s.results),allPages:s.total_pages},e.setState(i),i.inputValue=a,T("SEARCH",i);case 22:return t.abrupt("return",!1);case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handlerLoading=function(){var t=e.state.page+1;e.doSearch(e.state.inputValue,t)},e.handlerGoUp=function(){window.scrollTo({top:0,behavior:"smooth"})},e.leftData=function(){return e.state.allPages>e.state.page},e}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form-inline order-0 center",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",value:this.state.inputValue,placeholder:"search film","aria-label":"Search",onChange:this.valueTarget})),this.state.results?r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"search-movie-deck row justify-content-center my-5"},this.state.results.length>0?r.a.createElement(S,{results:this.state.results,path:"/"}):r.a.createElement(Y,null))):"",this.state.results?r.a.createElement(z,{handlerLoading:this.handlerLoading,handlerGoUp:this.handlerGoUp,leftData:this.leftData,data:this.state.results.length}):"")}}]),a}(n.Component);function Q(){return r.a.createElement("div",null,r.a.createElement(K,null))}function X(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement(J.d,null,r.a.createElement(J.b,{path:"/main",exact:!0,component:Q}),r.a.createElement(J.b,{path:"/popular/",component:B}),r.a.createElement(J.b,{path:"/top",component:C}),r.a.createElement(J.b,{path:"/:movie",component:H}),r.a.createElement(J.a,{to:"/main"})))}var Z=a(5),$=a(23),ee={results:[],trailer:"",badges:["success","warning","danger","primary","info","secondary","dark"],movieBadges:[]};var te=Object(Z.c)({movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RESULTS_TRAILER":return Object($.a)({},e,{results:t.payloadResults,trailer:t.payloadTrailer});case"SET_MOVIE_BADGES":return Object($.a)({},e,{movieBadges:t.payload});case"RELOAD":return Object($.a)({},e,{results:[],trailer:"",movieBadges:[]});default:return e}}}),ae=a(34),ne=Object(Z.e)(te,Object(Z.a)(ae.a)),re=r.a.createElement(V.a,{store:ne},r.a.createElement(o.a,null,r.a.createElement(X,null)));c.a.render(re,document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.8d33566d.chunk.js.map