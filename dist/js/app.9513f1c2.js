(function(t){function e(e){for(var r,i,l=e[0],a=e[1],c=e[2],p=0,f=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,l=1;l<n.length;l++){var a=n[l];0!==o[a]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=a;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),t._m(0),r("LatestPosts",{attrs:{title:"Here I display my latest blog posts",sub_title:"this is a sub title"}})],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-thumb"},[n("h1",{staticClass:"title"},[t._v("Latest posts from our blog")]),n("p",{staticClass:"detail"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, molestiae.")])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.title))]),n("h3",[t._v(t._s(t.sub_title))]),n("ul",t._l(t.posts,(function(e){return n("li",{key:e},[t._v(" "+t._s(e.question_text)+" ")])})),0)])},l=[],a=n("bc3a"),c=n.n(a),u={name:"LatestPosts",props:{title:String,sub_title:String},data:function(){return{posts:null,message:""}},created:function(){console.log("Fetching data...");var t={responseType:"json"};c.a.get("http://localhost:8000/whatever",t).then((function(t){console.log("response has arrived")})).catch((function(t){console.log("some error happened")})),console.log("Done fetching.")}},p=u,f=n("2877"),d=Object(f["a"])(p,i,l,!1,null,null,null),h=d.exports,b={name:"App",components:{LatestPosts:h}},v=b,g=(n("5c0b"),Object(f["a"])(v,o,s,!1,null,null,null)),m=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.9513f1c2.js.map