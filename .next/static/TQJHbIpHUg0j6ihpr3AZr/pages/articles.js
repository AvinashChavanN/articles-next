(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/a9y":function(e,t,a){"use strict";var r=a("AroE"),n=r(a("/GRZ")),l=r(a("i2R6")),i=r(a("tCBg")),o=r(a("T0f4")),c=r(a("48fX"));function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var u=a("AroE");t.__esModule=!0,t.default=void 0;var d=u(a("q1tI")),f=u(a("8Kt/")),p={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function m(e){var t=e.res,a=e.err;return{statusCode:t&&t.statusCode?t.statusCode:a?a.statusCode:404}}var h=function(e){(0,c.default)(r,e);var t,a=(t=r,function(){var e,a=(0,o.default)(t);if(s()){var r=(0,o.default)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,i.default)(this,e)});function r(){return(0,n.default)(this,r),a.apply(this,arguments)}return(0,l.default)(r,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||p[e]||"An unexpected error has occurred";return d.default.createElement("div",{style:g.error},d.default.createElement(f.default,null,d.default.createElement("title",null,e,": ",t)),d.default.createElement("div",null,d.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?d.default.createElement("h1",{style:g.h1},e):null,d.default.createElement("div",{style:g.desc},d.default.createElement("h2",{style:g.h2},t,"."))))}}]),r}(d.default.Component);t.default=h,h.displayName="ErrorPage",h.getInitialProps=m,h.origGetInitialProps=m;var g={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},eomm:function(e,t,a){e.exports=a("/a9y")},hDBf:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return a("yRol")}])},yRol:function(e,t,a){"use strict";a.r(t);var r=a("o0o1"),n=a.n(r),l=a("lSNA"),i=a.n(l),o=a("q1tI"),c=a.n(o),s=a("5Yp1"),u=a("17x9"),d=a.n(u),f=a("YFqc"),p=a.n(f);function m(e){var t=e.title,a=e.content,r=e.author,n=e.image,l=e.publishedAt,i=e.id;return c.a.createElement("div",{className:"relative rounded overflow-hidden shadow-lg p-4 lg:w-1/4 md:w-1/3 sm:w-1/2"},c.a.createElement("img",{className:"w-full h-48 object-cover",src:n,alt:"Sunset in the mountains"}),c.a.createElement("div",{className:"px-6 py-4"},c.a.createElement("div",{className:"font-bold text-xl mb-2"},t),c.a.createElement("p",{className:"text-gray-700 text-base truncate"},a)),c.a.createElement("div",{className:"flex justify-between"},c.a.createElement("div",{className:"flex items-center px-6 py-4"},c.a.createElement("img",{className:"w-10 h-10 rounded-full mr-4",src:r.avatar,alt:"Avatar of Jonathan Reinink"}),c.a.createElement("div",{className:"text-sm"},c.a.createElement("p",{className:"text-gray-900 leading-none"},r.fullName),c.a.createElement("p",{className:"text-gray-600"},l))),c.a.createElement("div",{className:"text-sm m-auto mt-4"},c.a.createElement(p.a,{href:{pathname:"article",query:{articleId:i}}},c.a.createElement("button",{className:"btn-primary"},"Read More \u2192")))))}m.propTypes={title:d.a.string,content:d.a.string,image:d.a.string,publishedAt:d.a.string,id:d.a.string};var h=m,g=a("TyAF"),y=a("eomm"),v=a.n(y),b=a("vDqi"),x=a.n(b);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N=Object(g.b)("articleStore")(Object(g.c)((function(e){var t=e.articles;return c.a.createElement(s.a,{title:"Article Page",description:"Best place to find latest articles"},c.a.createElement("div",{className:"flex mt-24 flex-wrap px-8 justify-evenly"},t&&t.length>0?t.map((function(e){return c.a.createElement(h,{title:e.title,content:e.description,author:e.author,image:e.image,publishedAt:e.publishedAt,key:e.id,id:e.id})})):c.a.createElement(v.a,null)))})));N.getInitialProps=function(e){var t;return n.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.mobxStore,a.next=3,n.a.awrap(x.a.post("http://localhost:3000/api/graphql",{query:"{ articles{\n  id,   \n  title,       \n  author{\n    fullName,\n    avatar\n  },\n  description,\n  image,\n  publishedAt\n} }"}));case 3:return t=a.sent,a.abrupt("return",w({},t.data.data));case 5:case"end":return a.stop()}}),null,null,null,Promise)};t.default=N}},[["hDBf",1,2,4,0,5,6,3]]]);