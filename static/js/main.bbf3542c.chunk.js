(this["webpackJsonpdaeun-moviesite"]=this["webpackJsonpdaeun-moviesite"]||[]).push([[0],{18:function(e,n,t){e.exports=t.p+"static/media/noPosterSmall.87a0eb6a.png"},43:function(e,n,t){e.exports=t(70)},70:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(35),c=t.n(i),l=t(14),o=t(4),u=t(6),s=t.n(u),m=t(13),p=t(11),g=t(36),d=t.n(g).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"1a88ef42580a45520eead93aeb5a5933",language:"en-US"}}),f={params:{api_key:"1a88ef42580a45520eead93aeb5a5933",language:"en-US"}},v=function(){return d.get("movie/now_playing",f)},b=function(){return d.get("movie/upcoming",f)},h=function(){return d.get("movie/popular",f)},E=function(e){return d.get("movie/".concat(e),{params:{api_key:"1a88ef42580a45520eead93aeb5a5933",language:"en-US",append_to_response:"videos"}})},x=function(e){return d.get("search/movie",{params:{api_key:"1a88ef42580a45520eead93aeb5a5933",language:"en-US",query:encodeURIComponent(e)}})},y=function(){return d.get("tv/top_rated",f)},j=function(){return d.get("tv/popular",f)},O=function(){return d.get("tv/airing_today",f)},_=function(e){return d.get("tv/".concat(e),{params:{api_key:"1a88ef42580a45520eead93aeb5a5933",language:"en-US",append_to_response:"videos"}})},w=function(e){return d.get("search/tv",{params:{api_key:"1a88ef42580a45520eead93aeb5a5933",language:"en-US",query:encodeURIComponent(e)}})},k=t(2),S=t(1),U=t(12);function R(){var e=Object(k.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 20px;\n"]);return R=function(){return e},e}var z=S.c.div(R()),T=function(){return r.a.createElement(z,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f0"))};function C(){var e=Object(k.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return C=function(){return e},e}function M(){var e=Object(k.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]);return M=function(){return e},e}function I(){var e=Object(k.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return I=function(){return e},e}var N=S.c.div(I()),D=S.c.span(M()),P=S.c.div(C()),F=function(e){var n=e.title,t=e.children;return r.a.createElement(N,null,r.a.createElement(D,null,n),r.a.createElement(P,null,t))};function V(){var e=Object(k.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return V=function(){return e},e}function B(){var e=Object(k.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return B=function(){return e},e}function L(){var e=Object(k.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return L=function(){return e},e}function q(){var e=Object(k.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]);return q=function(){return e},e}function A(){var e=Object(k.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return A=function(){return e},e}function J(){var e=Object(k.a)(["\n  font-size: 12px;\n"]);return J=function(){return e},e}var H=S.c.div(J()),K=S.c.div(A(),(function(e){return e.bgUrl})),G=S.c.span(q()),Q=S.c.div(L(),K,G),W=S.c.span(B()),X=S.c.span(V()),Y=function(e){var n=e.id,a=e.imageUrl,i=e.title,c=e.rating,o=e.year,u=e.isMovie,s=void 0!==u&&u;return r.a.createElement(l.b,{to:s?"/movie/".concat(n):"/show/".concat(n)},r.a.createElement(H,null,r.a.createElement(Q,null,r.a.createElement(K,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):t(18)}),r.a.createElement(G,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f")," ",c,"/10")),r.a.createElement(W,null,i.length>18?"".concat(i.substring(0,18),"..."):i),r.a.createElement(X,null,o)))};function Z(){var e=Object(k.a)(["\n  color: ",";\n"]);return Z=function(){return e},e}function $(){var e=Object(k.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return $=function(){return e},e}var ee=S.c.div($()),ne=S.c.span(Z(),(function(e){return e.color})),te=function(e){var n=e.text,t=e.color;return r.a.createElement(ee,null,r.a.createElement(ne,{color:t},n))};function ae(){var e=Object(k.a)(["\n  padding: 20px;\n"]);return ae=function(){return e},e}var re=S.c.div(ae()),ie=function(e){var n=e.nowPlaying,t=e.popular,a=e.upcoming,i=e.loading,c=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,null,r.a.createElement("title",null,"Movies | Daeun-movie")),i?r.a.createElement(T,null):r.a.createElement(re,null,r.a.createElement(U.a,null,r.a.createElement("title",null,"Movies | Daeun-movie")),n&&n.length>0&&r.a.createElement(F,{title:"Now Playing"},n.map((function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))),a&&a.length>0&&r.a.createElement(F,{title:"Upcoming Movies"},a.map((function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))),t&&t.length>0&&r.a.createElement(F,{title:"Popular Movies"},t.map((function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))),c&&r.a.createElement(te,{color:"#e74c3c",text:c})))};var ce=function(){var e=function(){var e=Object(a.useState)({nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0}),n=Object(p.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(s.a.mark((function e(){var n,t,a,i,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:return n=e.sent,t=n.data.results,e.next=7,b();case 7:return a=e.sent,i=a.data.results,e.next=11,h();case 11:c=e.sent,l=c.data.results,r({nowPlaying:t,upcoming:i,popular:l,loading:!1}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),r({error:"Can't find movie information.",loading:!1});case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),t}();return r.a.createElement(ie,e)};function le(){var e=Object(k.a)(["\n  padding: 20px;\n"]);return le=function(){return e},e}var oe=S.c.div(le()),ue=function(e){var n=e.topRated,t=e.popular,a=e.airingToday,i=e.loading,c=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,null,r.a.createElement("title",null,"TV Shows | Daeun-movie")),i?r.a.createElement(T,null):r.a.createElement(oe,null,n&&n.length>0&&r.a.createElement(F,{title:"Top Rated Shows"},n.map((function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),t&&t.length>0&&r.a.createElement(F,{title:"Popular Shows"},t.map((function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(F,{title:"Airing Today"},a.map((function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),c&&r.a.createElement(te,{color:"#e74c3c",text:c})))};var se=function(){var e=function(){var e=Object(a.useState)({topRated:null,popular:null,airingToday:null,loading:!0,error:null}),n=Object(p.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(s.a.mark((function e(){var n,t,a,i,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:return n=e.sent,t=n.data.results,e.next=7,j();case 7:return a=e.sent,i=a.data.results,e.next=11,O();case 11:c=e.sent,l=c.data.results,r({topRated:t,popular:i,airingToday:l,loading:!1}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),r({error:"Can't find TV information.",loading:!1});case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),t}();return console.log(e),r.a.createElement(ue,e)},me=t(24);function pe(){var e=Object(k.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return pe=function(){return e},e}function ge(){var e=Object(k.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return ge=function(){return e},e}function de(){var e=Object(k.a)(["\n  padding: 20px;\n"]);return de=function(){return e},e}var fe=S.c.div(de()),ve=S.c.form(ge()),be=S.c.input(pe());var he=function(e){var n=e.movieResults,t=e.tvResults,a=e.loading,i=e.error,c=e.searchTerm,l=e.handleSubmit,o=e.updateTerm;return r.a.createElement(fe,null,r.a.createElement(U.a,null,r.a.createElement("title",null,"Search | Daeun-movie")),r.a.createElement(ve,{onSubmit:l},r.a.createElement(be,{placeholder:"Search Movies or TV Shows...",value:c||"",onChange:o})),a?r.a.createElement(T,null):r.a.createElement(r.a.Fragment,null,n&&n.length>0&&r.a.createElement(F,{title:"Movie Results"},n.map((function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))),t&&t.length>0&&r.a.createElement(F,{title:"TV Show Results"},t.map((function(e){var n;return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:null===(n=e.first_air_date)||void 0===n?void 0:n.substring(0,4)})}))),i&&r.a.createElement(te,{color:"#e74c3c",text:i}),t&&n&&0===t.length&&0===n.length&&r.a.createElement(te,{text:"Nothing found",color:"#95a5a6"})))};var Ee=function(){var e=Object(a.useState)({movieResults:null,tvResults:null,loading:!1,error:null,searchTerm:""}),n=Object(p.a)(e,2),t=n[0],i=n[1];function c(e){return l.apply(this,arguments)}function l(){return(l=Object(m.a)(s.a.mark((function e(n){var t,a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,x(n);case 5:return t=e.sent,a=t.data.results,e.next=9,w(n);case 9:r=e.sent,c=r.data.results,i({movieResults:a,tvResults:c,loading:!1}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),i({error:"Can't find results.",loading:!1});case 17:case"end":return e.stop()}}),e,null,[[2,14]])})))).apply(this,arguments)}var o=function(){var e=Object(m.a)(s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),""!==(a=t.searchTerm)&&c(a);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){c("")}),[]);var u=t.movieResults,g=t.tvResults,d=t.searchTerm,f=t.loading,v=t.error;return console.log(t),r.a.createElement(he,{movieResults:u,tvResults:g,loading:f,error:v,searchTerm:d,handleSubmit:o,updateTerm:function(e){var n=e.target.value;i(Object(me.a)(Object(me.a)({},t),{},{searchTerm:n}))}})};function xe(){var e=Object(k.a)(["\n  width: 200px;\n  height: 280px;\n"]);return xe=function(){return e},e}function ye(){var e=Object(k.a)([""]);return ye=function(){return e},e}function je(){var e=Object(k.a)(["\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n  display: inline-flex;\n  align-items: center;\n"]);return je=function(){return e},e}function Oe(){var e=Object(k.a)(["\n  width: 40px;\n  height: 40px;\n"]);return Oe=function(){return e},e}function _e(){var e=Object(k.a)(["\n  font-size: 16pt;\n  color: black;\n  text-align: left;\n"]);return _e=function(){return e},e}function we(){var e=Object(k.a)(["\n  text-align: center;\n  font-size: 20px;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  margin: 10px;\n"]);return we=function(){return e},e}function ke(){var e=Object(k.a)(["\n  width: 300px;\n  height: 300px;\n"]);return ke=function(){return e},e}function Se(){var e=Object(k.a)(["\n  width: 100%;\n  margin: 20px;\n"]);return Se=function(){return e},e}function Ue(){var e=Object(k.a)(["\n  background-color: grey;\n  opacity: 1;\n  padding: 10px;\n"]);return Ue=function(){return e},e}function Re(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n  list-style: none;\n"]);return Re=function(){return e},e}function ze(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n  background-color: grey;\n  width: 100%;\n  overflow-x: auto;\n  box-sizing: border-box;\n  text-align: center;\n  height: 380px;\n  padding: 10px;\n"]);return ze=function(){return e},e}function Te(){var e=Object(k.a)(["\n  opacity: 0.7;\n  width: 100%;\n  height: 100%;\n  margin-top: 10px;\n"]);return Te=function(){return e},e}var Ce=S.c.div(Te()),Me=S.c.div(ze()),Ie=S.c.ul(Re()),Ne=S.c.li(Ue()),De=S.c.div(Se()),Pe=S.c.iframe(ke()),Fe=S.c.div(we()),Ve=S.c.div(_e()),Be=S.c.img(Oe()),Le=S.c.span(je()),qe=S.c.span(ye()),Ae=S.c.img(xe()),Je="https://image.tmdb.org/t/p/w200/",He=function(e){var n=e.videos;return r.a.createElement(Me,null,null!==n.results&&n.results.map((function(e){return r.a.createElement(De,{key:e.key},r.a.createElement(Pe,{title:e.name,src:"".concat("https://www.youtube.com/embed/").concat(e.key)}))})))},Ke=function(e){var n=e.companies,a=e.countries;return r.a.createElement(Me,null,r.a.createElement(De,null,r.a.createElement(Ve,null,"[Companies]"),null!==n&&n.map((function(e){return r.a.createElement(Fe,{key:e.id},r.a.createElement(Le,null,e.logo_path?r.a.createElement(Be,{src:"".concat(Je).concat(e.logo_path),alt:"img"}):r.a.createElement(Be,{src:t(18),alt:"img"})),r.a.createElement(qe,null,e.name))}))),r.a.createElement(De,null,r.a.createElement(Ve,null,"[Countries]"),null!==a&&a.map((function(e,n){return r.a.createElement(Fe,{key:n},r.a.createElement(Le,null," ",e.iso_3166_1),r.a.createElement(qe,null," ",e.name," "))}))))},Ge=function(e){var n=e.seasons;return r.a.createElement(Me,null,null!==n&&n.map((function(e){return r.a.createElement(De,null,r.a.createElement("div",null,e.poster_path?r.a.createElement(Ae,{src:"".concat(Je).concat(e.poster_path),alt:"img"}):r.a.createElement(Ae,{src:t(18),alt:"img"})),r.a.createElement(qe,null," ",e.name," "))})))};var Qe=function(e){var n=e.videos,t=e.companies,i=e.countries,c=e.seasons,l=Object(a.useState)(0),o=Object(p.a)(l,2),u=o[0],s=o[1],m=Object(a.useCallback)((function(e){s(e)}),[]);return r.a.createElement(Ce,null,r.a.createElement(Ie,null,n&&r.a.createElement(Ne,{onClick:function(){return m(0)}},"Videos"),t&&r.a.createElement(Ne,{onClick:function(){return m(1)}},"Production"),c&&r.a.createElement(Ne,{onClick:function(){return m(2)}},"Seasons")),0===u&&r.a.createElement(He,{videos:n}),1===u&&r.a.createElement(Ke,{companies:t,countries:i}),2===u&&r.a.createElement(Ge,{seasons:c}))};function We(){var e=Object(k.a)(["\n  background-color: yellow;\n  color: black;\n  padding: 3px;\n  font-weight: 600;\n  border-radius: 5px;\n"]);return We=function(){return e},e}function Xe(){var e=Object(k.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]);return Xe=function(){return e},e}function Ye(){var e=Object(k.a)(["\n  margin: 0 10px;\n"]);return Ye=function(){return e},e}function Ze(){var e=Object(k.a)([""]);return Ze=function(){return e},e}function $e(){var e=Object(k.a)(["\n  margin: 20px 0;\n"]);return $e=function(){return e},e}function en(){var e=Object(k.a)(["\n  font-size: 32px;\n"]);return en=function(){return e},e}function nn(){var e=Object(k.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return nn=function(){return e},e}function tn(){var e=Object(k.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"]);return tn=function(){return e},e}function an(){var e=Object(k.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]);return an=function(){return e},e}function rn(){var e=Object(k.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return rn=function(){return e},e}function cn(){var e=Object(k.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return cn=function(){return e},e}var ln=S.c.div(cn()),on=S.c.div(rn(),(function(e){return e.bgImage})),un=S.c.div(an()),sn=S.c.div(tn(),(function(e){return e.bgImage})),mn=S.c.div(nn()),pn=S.c.h3(en()),gn=S.c.div($e()),dn=S.c.span(Ze()),fn=S.c.span(Ye()),vn=S.c.p(Xe()),bn=S.c.a(We()),hn=function(e){var n=e.result,a=e.loading;e.error;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,null,r.a.createElement("title",null,"Loading | Daeun-movie")),r.a.createElement(T,null)):r.a.createElement(ln,null,r.a.createElement(U.a,null,r.a.createElement("title",null,n.original_title?n.original_title:n.original_name," ","| Daeun-movie")),r.a.createElement(on,{bgImage:"https://image.tmdb.org/t/p/original".concat(n.backdrop_path)}),r.a.createElement(un,null,r.a.createElement(sn,{bgImage:n.poster_path?"https://image.tmdb.org/t/p/original".concat(n.poster_path):t(18)}),r.a.createElement(mn,null,r.a.createElement(pn,null,n.original_title?n.original_title:n.original_name),r.a.createElement(gn,null,r.a.createElement(dn,null,n.release_date?n.release_date.substring(0,4):n.first_air_date.substring(0,4)),r.a.createElement(fn,null,"\u2022"),r.a.createElement(dn,null,n.runtime||0===n.runtime?n.runtime:n.episode_run_time[0]," ","min"),r.a.createElement(fn,null,"\u2022"),r.a.createElement(dn,null,n.genres&&n.genres.map((function(e,t){return t===n.genres.length-1?e.name:"".concat(e.name," / ")}))),r.a.createElement(fn,null,"\u2022"),n.imdb_id&&r.a.createElement(bn,{href:"https://www.imdb.com/title/".concat(n.imdb_id),target:"_BLANK"},"IMDB")),r.a.createElement(vn,null,n.overview),r.a.createElement(Qe,{videos:n.videos||null,companies:n.production_companies||null,countries:n.production_countries||null,seasons:n.seasons||null}))))};var En=function(){var e=function(){var e=Object(o.h)().pathname.includes("/movie/"),n=Object(o.i)().id,t=Object(o.g)(),r=Object(a.useState)({result:null,error:null,loading:!0}),i=Object(p.a)(r,2),c=i[0],l=i[1];return Object(a.useEffect)((function(){function a(){return(a=Object(m.a)(s.a.mark((function a(){var r,i,c;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!isNaN(Number(n))){a.next=2;break}return a.abrupt("return",t.push("/"));case 2:if(r=null,a.prev=3,!e){a.next=11;break}return a.next=7,E(Number(n));case 7:i=a.sent,r=i.data,a.next=15;break;case 11:return a.next=13,_(Number(n));case 13:c=a.sent,r=c.data;case 15:l({result:r,error:null,loading:!1}),a.next=21;break;case 18:a.prev=18,a.t0=a.catch(3),l({result:null,error:"Can't find anything.",loading:!1});case 21:case"end":return a.stop()}}),a,null,[[3,18]])})))).apply(this,arguments)}!function(){a.apply(this,arguments)}(n)}),[n,t,e]),c}();return r.a.createElement(hn,e)};var xn=function(){return r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0,component:ce}),r.a.createElement(o.b,{path:"/tv",component:se}),r.a.createElement(o.b,{path:"/search",component:Ee}),r.a.createElement(o.b,{path:"/movie/:id",component:En}),r.a.createElement(o.b,{path:"/show/:id",component:En}),r.a.createElement(o.a,{from:"*",to:"/"}))};function yn(){var e=Object(k.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return yn=function(){return e},e}function jn(){var e=Object(k.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return jn=function(){return e},e}function On(){var e=Object(k.a)(["\n  display: flex;\n"]);return On=function(){return e},e}function _n(){var e=Object(k.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return _n=function(){return e},e}var wn=S.c.header(_n()),kn=S.c.ul(On()),Sn=S.c.li(jn(),(function(e){return e.current?"#3498db":"transparent"})),Un=Object(S.c)(l.b)(yn()),Rn=Object(o.j)((function(e){var n=e.location.pathname;return r.a.createElement(wn,null,r.a.createElement(kn,null,r.a.createElement(Sn,{current:"/"===n},r.a.createElement(Un,{to:"/"},"Movies")),r.a.createElement(Sn,{current:"/tv"===n},r.a.createElement(Un,{to:"/tv"},"TV")),r.a.createElement(Sn,{current:"/search"===n},r.a.createElement(Un,{to:"/search"},"Search"))))})),zn=t(42);function Tn(){var e=Object(k.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top:50px;\n    }\n"]);return Tn=function(){return e},e}var Cn=Object(S.a)(Tn(),zn.a);var Mn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Rn,null),r.a.createElement(xn,null),r.a.createElement(Cn,null))};c.a.render(r.a.createElement(l.a,null,r.a.createElement(Mn,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.bbf3542c.chunk.js.map