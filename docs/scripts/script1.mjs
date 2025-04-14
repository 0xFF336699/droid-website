function e(e){var t=Error(e);return t.source="ulid",t}var t,r,n="0123456789ABCDEFGHJKMNPQRSTVWXYZ",i=n.length,a=(t||(t=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=arguments[1];r||(r="u">typeof window?window:null);var n=r&&(r.crypto||r.msCrypto);if(n)return function(){var e=new Uint8Array(1);return n.getRandomValues(e),e[0]/255};try{var i=require("crypto");return function(){return i.randomBytes(1).readUInt8()/255}}catch{}if(t){try{console.error("secure crypto unusable, falling back to insecure Math.random()!")}catch{}return function(){return Math.random()}}throw e("secure crypto unusable, insecure Math.random not allowed")}()),function(r){return isNaN(r)&&(r=Date.now()),function(t,r){if(isNaN(t))throw Error(t+" must be a number");if(t>0xffffffffffff)throw e("cannot encode time greater than 281474976710655");if(t<0)throw e("time must be positive");if(!1===Number.isInteger(t))throw e("time must be an integer");for(var a=void 0,o="";r>0;r--)a=t%i,o=n.charAt(a)+o,t=(t-a)/i;return o}(r,10)+function(e,t){for(var r="";e>0;e--)r=function(e){var t=Math.floor(e()*i);return t===i&&(t=i-1),n.charAt(t)}(t)+r;return r}(16,t)}),o="u">typeof globalThis?globalThis:"u">typeof window?window:"u">typeof global?global:"u">typeof self?self:{},c={exports:{}};c.exports,function(e,t){(function(){var r,n="Expected a function",i="__lodash_hash_undefined__",a="__lodash_placeholder__",c=1/0,s=NaN,l=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],u="[object Arguments]",d="[object Array]",f="[object Boolean]",p="[object Date]",h="[object Error]",E="[object Function]",g="[object GeneratorFunction]",_="[object Map]",C="[object Number]",A="[object Object]",v="[object Promise]",I="[object RegExp]",m="[object Set]",T="[object String]",S="[object Symbol]",y="[object WeakMap]",O="[object ArrayBuffer]",N="[object DataView]",R="[object Float32Array]",b="[object Float64Array]",j="[object Int8Array]",L="[object Int16Array]",D="[object Int32Array]",k="[object Uint8Array]",P="[object Uint8ClampedArray]",M="[object Uint16Array]",G="[object Uint32Array]",x=/\b__p \+= '';/g,U=/\b(__p \+=) '' \+/g,V=/(__e\(.*?\)|\b__t\)) \+\n'';/g,F=/&(?:amp|lt|gt|quot|#39);/g,w=/[&<>"']/g,B=RegExp(F.source),Y=RegExp(w.source),W=/<%-([\s\S]+?)%>/g,$=/<%([\s\S]+?)%>/g,H=/<%=([\s\S]+?)%>/g,K=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z=/^\w*$/,Q=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,J=/[\\^$.*+?()[\]{}|]/g,q=RegExp(J.source),X=/^\s+/,Z=/\s/,ee=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,et=/\{\n\/\* \[wrapped with (.+)\] \*/,er=/,? & /,en=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ei=/[()=,{}\[\]\/\s]/,ea=/\\(\\)?/g,eo=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ec=/\w*$/,es=/^[-+]0x[0-9a-f]+$/i,el=/^0b[01]+$/i,eu=/^\[object .+?Constructor\]$/,ed=/^0o[0-7]+$/i,ef=/^(?:0|[1-9]\d*)$/,ep=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,eh=/($^)/,eE=/['\n\r\u2028\u2029\\]/g,eg="\ud800-\udfff",e_="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",eC="\\u2700-\\u27bf",eA="a-z\\xdf-\\xf6\\xf8-\\xff",ev="A-Z\\xc0-\\xd6\\xd8-\\xde",eI="\\ufe0e\\ufe0f",em="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",eT="['’]",eS="["+em+"]",ey="["+e_+"]",eO="["+eA+"]",eN="[^"+eg+em+"\\d+"+eC+eA+ev+"]",eR="\ud83c[\udffb-\udfff]",eb="[^"+eg+"]",ej="(?:\ud83c[\udde6-\uddff]){2}",eL="[\ud800-\udbff][\udc00-\udfff]",eD="["+ev+"]",ek="\\u200d",eP="(?:"+eO+"|"+eN+")",eM="(?:"+eD+"|"+eN+")",eG="(?:"+eT+"(?:d|ll|m|re|s|t|ve))?",ex="(?:"+eT+"(?:D|LL|M|RE|S|T|VE))?",eU="(?:"+ey+"|"+eR+")?",eV="["+eI+"]?",eF="(?:"+ek+"(?:"+[eb,ej,eL].join("|")+")"+eV+eU+")*",ew=eV+eU+eF,eB="(?:"+["["+eC+"]",ej,eL].join("|")+")"+ew,eY="(?:"+[eb+ey+"?",ey,ej,eL,"["+eg+"]"].join("|")+")",eW=RegExp(eT,"g"),e$=RegExp(ey,"g"),eH=RegExp(eR+"(?="+eR+")|"+eY+ew,"g"),eK=RegExp([eD+"?"+eO+"+"+eG+"(?="+[eS,eD,"$"].join("|")+")",eM+"+"+ex+"(?="+[eS,eD+eP,"$"].join("|")+")",eD+"?"+eP+"+"+eG,eD+"+"+ex,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",eB].join("|"),"g"),ez=RegExp("["+ek+eg+e_+eI+"]"),eQ=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,eJ=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],eq=-1,eX={};eX[R]=eX[b]=eX[j]=eX[L]=eX[D]=eX[k]=eX[P]=eX[M]=eX[G]=!0,eX[u]=eX[d]=eX[O]=eX[f]=eX[N]=eX[p]=eX[h]=eX[E]=eX[_]=eX[C]=eX[A]=eX[I]=eX[m]=eX[T]=eX[y]=!1;var eZ={};eZ[u]=eZ[d]=eZ[O]=eZ[N]=eZ[f]=eZ[p]=eZ[R]=eZ[b]=eZ[j]=eZ[L]=eZ[D]=eZ[_]=eZ[C]=eZ[A]=eZ[I]=eZ[m]=eZ[T]=eZ[S]=eZ[k]=eZ[P]=eZ[M]=eZ[G]=!0,eZ[h]=eZ[E]=eZ[y]=!1;var e1={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},e0=parseFloat,e2=parseInt,e3="object"==typeof o&&o&&o.Object===Object&&o,e8="object"==typeof self&&self&&self.Object===Object&&self,e4=e3||e8||Function("return this")(),e6=t&&!t.nodeType&&t,e5=e6&&e&&!e.nodeType&&e,e9=e5&&e5.exports===e6,e7=e9&&e3.process,te=function(){try{return e5&&e5.require&&e5.require("util").types||e7&&e7.binding&&e7.binding("util")}catch{}}(),tt=te&&te.isArrayBuffer,tr=te&&te.isDate,tn=te&&te.isMap,ti=te&&te.isRegExp,ta=te&&te.isSet,to=te&&te.isTypedArray;function tc(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function ts(e,t,r,n){for(var i=-1,a=null==e?0:e.length;++i<a;){var o=e[i];t(n,o,r(o),e)}return n}function tl(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function tu(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function td(e,t){for(var r=-1,n=null==e?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a}function tf(e,t){return!!(null==e?0:e.length)&&tm(e,t,0)>-1}function tp(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1}function th(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function tE(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function tg(e,t,r,n){var i=-1,a=null==e?0:e.length;for(n&&a&&(r=e[++i]);++i<a;)r=t(r,e[i],i,e);return r}function t_(e,t,r,n){var i=null==e?0:e.length;for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e);return r}function tC(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var tA=tO("length");function tv(e,t,r){var n;return r(e,function(e,r,i){if(t(e,r,i))return n=r,!1}),n}function tI(e,t,r,n){for(var i=e.length,a=r+(n?1:-1);n?a--:++a<i;)if(t(e[a],a,e))return a;return -1}function tm(e,t,r){return t==t?function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return -1}(e,t,r):tI(e,tS,r)}function tT(e,t,r,n){for(var i=r-1,a=e.length;++i<a;)if(n(e[i],t))return i;return -1}function tS(e){return e!=e}function ty(e,t){var r=null==e?0:e.length;return r?tb(e,t)/r:s}function tO(e){return function(t){return null==t?r:t[e]}}function tN(e){return function(t){return null==e?r:e[t]}}function tR(e,t,r,n,i){return i(e,function(e,i,a){r=n?(n=!1,e):t(r,e,i,a)}),r}function tb(e,t){for(var n,i=-1,a=e.length;++i<a;){var o=t(e[i]);o!==r&&(n=n===r?o:n+o)}return n}function tj(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function tL(e){return e&&e.slice(0,tK(e)+1).replace(X,"")}function tD(e){return function(t){return e(t)}}function tk(e,t){return th(t,function(t){return e[t]})}function tP(e,t){return e.has(t)}function tM(e,t){for(var r=-1,n=e.length;++r<n&&tm(t,e[r],0)>-1;);return r}function tG(e,t){for(var r=e.length;r--&&tm(t,e[r],0)>-1;);return r}var tx=tN({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),tU=tN({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function tV(e){return"\\"+e1[e]}function tF(e){return ez.test(e)}function tw(e){var t=-1,r=Array(e.size);return e.forEach(function(e,n){r[++t]=[n,e]}),r}function tB(e,t){return function(r){return e(t(r))}}function tY(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var c=e[r];(c===t||c===a)&&(e[r]=a,o[i++]=r)}return o}function tW(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}function t$(e){return tF(e)?function(e){for(var t=eH.lastIndex=0;eH.test(e);)++t;return t}(e):tA(e)}function tH(e){return tF(e)?e.match(eH)||[]:e.split("")}function tK(e){for(var t=e.length;t--&&Z.test(e.charAt(t)););return t}var tz=tN({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),tQ=function e(t){var o,Z,eg,e_,eC=(t=null==t?e4:tQ.defaults(e4.Object(),t,tQ.pick(e4,eJ))).Array,eA=t.Date,ev=t.Error,eI=t.Function,em=t.Math,eT=t.Object,eS=t.RegExp,ey=t.String,eO=t.TypeError,eN=eC.prototype,eR=eI.prototype,eb=eT.prototype,ej=t["__core-js_shared__"],eL=eR.toString,eD=eb.hasOwnProperty,ek=0,eP=(o=/[^.]+$/.exec(ej&&ej.keys&&ej.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"",eM=eb.toString,eG=eL.call(eT),ex=e4._,eU=eS("^"+eL.call(eD).replace(J,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),eV=e9?t.Buffer:r,eF=t.Symbol,ew=t.Uint8Array,eB=eV?eV.allocUnsafe:r,eY=tB(eT.getPrototypeOf,eT),eH=eT.create,ez=eb.propertyIsEnumerable,e1=eN.splice,e3=eF?eF.isConcatSpreadable:r,e8=eF?eF.iterator:r,e6=eF?eF.toStringTag:r,e5=function(){try{var e=ih(eT,"defineProperty");return e({},"",{}),e}catch{}}(),e7=t.clearTimeout!==e4.clearTimeout&&t.clearTimeout,te=eA&&eA.now!==e4.Date.now&&eA.now,tA=t.setTimeout!==e4.setTimeout&&t.setTimeout,tN=em.ceil,tJ=em.floor,tq=eT.getOwnPropertySymbols,tX=eV?eV.isBuffer:r,tZ=t.isFinite,t1=eN.join,t0=tB(eT.keys,eT),t2=em.max,t3=em.min,t8=eA.now,t4=t.parseInt,t6=em.random,t5=eN.reverse,t9=ih(t,"DataView"),t7=ih(t,"Map"),re=ih(t,"Promise"),rt=ih(t,"Set"),rr=ih(t,"WeakMap"),rn=ih(eT,"create"),ri=rr&&new rr,ra={},ro=iV(t9),rc=iV(t7),rs=iV(re),rl=iV(rt),ru=iV(rr),rd=eF?eF.prototype:r,rf=rd?rd.valueOf:r,rp=rd?rd.toString:r;function rh(e){if(aH(e)&&!aM(e)&&!(e instanceof rC)){if(e instanceof r_)return e;if(eD.call(e,"__wrapped__"))return iF(e)}return new r_(e)}var rE=function(){function e(){}return function(t){if(!a$(t))return{};if(eH)return eH(t);e.prototype=t;var n=new e;return e.prototype=r,n}}();function rg(){}function r_(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}function rC(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=0xffffffff,this.__views__=[]}function rA(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function rv(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function rI(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function rm(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new rI;++t<r;)this.add(e[t])}function rT(e){var t=this.__data__=new rv(e);this.size=t.size}function rS(e,t){var r=aM(e),n=!r&&aP(e),i=!r&&!n&&aV(e),a=!r&&!n&&!i&&a1(e),o=r||n||i||a,c=o?tj(e.length,ey):[],s=c.length;for(var l in e)(t||eD.call(e,l))&&!(o&&("length"==l||i&&("offset"==l||"parent"==l)||a&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||iI(l,s)))&&c.push(l);return c}function ry(e){var t=e.length;return t?e[nl(0,t-1)]:r}function rO(e,t,n){(n===r||aL(e[t],n))&&(n!==r||t in e)||rL(e,t,n)}function rN(e,t,n){var i=e[t];eD.call(e,t)&&aL(i,n)&&(n!==r||t in e)||rL(e,t,n)}function rR(e,t){for(var r=e.length;r--;)if(aL(e[r][0],t))return r;return -1}function rb(e,t,r,n){return rU(e,function(e,i,a){t(n,e,r(e),a)}),n}function rj(e,t){return e&&nw(t,of(t),e)}function rL(e,t,r){"__proto__"==t&&e5?e5(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function rD(e,t){for(var n=-1,i=t.length,a=eC(i),o=null==e;++n<i;)a[n]=o?r:oc(e,t[n]);return a}function rk(e,t,n){return e==e&&(n!==r&&(e=e<=n?e:n),t!==r&&(e=e>=t?e:t)),e}function rP(e,t,n,i,a,o){var c,s=1&t,l=2&t,d=4&t;if(n&&(c=a?n(e,i,a,o):n(e)),c!==r)return c;if(!a$(e))return e;var h=aM(e);if(h){if(v=e.length,y=new e.constructor(v),v&&"string"==typeof e[0]&&eD.call(e,"index")&&(y.index=e.index,y.input=e.input),c=y,!s)return nF(e,c)}else{var v,y,x,U,V,F=i_(e),w=F==E||F==g;if(aV(e))return nP(e,s);if(F==A||F==u||w&&!a){if(c=l||w?{}:iA(e),!s)return l?(x=(V=c)&&nw(e,op(e),V),nw(e,ig(e),x)):(U=rj(c,e),nw(e,iE(e),U))}else{if(!eZ[F])return a?e:{};c=function(e,t,r){var n,i,a=e.constructor;switch(t){case O:return nM(e);case f:case p:return new a(+e);case N:return n=r?nM(e.buffer):e.buffer,new e.constructor(n,e.byteOffset,e.byteLength);case R:case b:case j:case L:case D:case k:case P:case M:case G:return nG(e,r);case _:return new a;case C:case T:return new a(e);case I:return(i=new e.constructor(e.source,ec.exec(e))).lastIndex=e.lastIndex,i;case m:return new a;case S:return rf?eT(rf.call(e)):{}}}(e,F,s)}}o||(o=new rT);var B=o.get(e);if(B)return B;o.set(e,c),aq(e)?e.forEach(function(r){c.add(rP(r,t,n,r,e,o))}):aK(e)&&e.forEach(function(r,i){c.set(i,rP(r,t,n,i,e,o))});var Y=d?l?io:ia:l?op:of,W=h?r:Y(e);return tl(W||e,function(r,i){W&&(r=e[i=r]),rN(c,i,rP(r,t,n,i,e,o))}),c}function rM(e,t,n){var i=n.length;if(null==e)return!i;for(e=eT(e);i--;){var a=n[i],o=t[a],c=e[a];if(c===r&&!(a in e)||!o(c))return!1}return!0}function rG(e,t,i){if("function"!=typeof e)throw new eO(n);return iD(function(){e.apply(r,i)},t)}function rx(e,t,r,n){var i=-1,a=tf,o=!0,c=e.length,s=[],l=t.length;if(!c)return s;r&&(t=th(t,tD(r))),n?(a=tp,o=!1):t.length>=200&&(a=tP,o=!1,t=new rm(t));e:for(;++i<c;){var u=e[i],d=null==r?u:r(u);if(u=n||0!==u?u:0,o&&d==d){for(var f=l;f--;)if(t[f]===d)continue e;s.push(u)}else a(t,d,n)||s.push(u)}return s}rh.templateSettings={escape:W,evaluate:$,interpolate:H,variable:"",imports:{_:rh}},rh.prototype=rg.prototype,rh.prototype.constructor=rh,r_.prototype=rE(rg.prototype),r_.prototype.constructor=r_,rC.prototype=rE(rg.prototype),rC.prototype.constructor=rC,rA.prototype.clear=function(){this.__data__=rn?rn(null):{},this.size=0},rA.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},rA.prototype.get=function(e){var t=this.__data__;if(rn){var n=t[e];return n===i?r:n}return eD.call(t,e)?t[e]:r},rA.prototype.has=function(e){var t=this.__data__;return rn?t[e]!==r:eD.call(t,e)},rA.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=rn&&t===r?i:t,this},rv.prototype.clear=function(){this.__data__=[],this.size=0},rv.prototype.delete=function(e){var t=this.__data__,r=rR(t,e);return!(r<0)&&(r==t.length-1?t.pop():e1.call(t,r,1),--this.size,!0)},rv.prototype.get=function(e){var t=this.__data__,n=rR(t,e);return n<0?r:t[n][1]},rv.prototype.has=function(e){return rR(this.__data__,e)>-1},rv.prototype.set=function(e,t){var r=this.__data__,n=rR(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},rI.prototype.clear=function(){this.size=0,this.__data__={hash:new rA,map:new(t7||rv),string:new rA}},rI.prototype.delete=function(e){var t=id(this,e).delete(e);return this.size-=t?1:0,t},rI.prototype.get=function(e){return id(this,e).get(e)},rI.prototype.has=function(e){return id(this,e).has(e)},rI.prototype.set=function(e,t){var r=id(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},rm.prototype.add=rm.prototype.push=function(e){return this.__data__.set(e,i),this},rm.prototype.has=function(e){return this.__data__.has(e)},rT.prototype.clear=function(){this.__data__=new rv,this.size=0},rT.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},rT.prototype.get=function(e){return this.__data__.get(e)},rT.prototype.has=function(e){return this.__data__.has(e)},rT.prototype.set=function(e,t){var r=this.__data__;if(r instanceof rv){var n=r.__data__;if(!t7||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new rI(n)}return r.set(e,t),this.size=r.size,this};var rU=nW(rH),rV=nW(rK,!0);function rF(e,t){var r=!0;return rU(e,function(e,n,i){return r=!!t(e,n,i)}),r}function rw(e,t,n){for(var i=-1,a=e.length;++i<a;){var o=e[i],c=t(o);if(null!=c&&(s===r?c==c&&!aZ(c):n(c,s)))var s=c,l=o}return l}function rB(e,t){var r=[];return rU(e,function(e,n,i){t(e,n,i)&&r.push(e)}),r}function rY(e,t,r,n,i){var a=-1,o=e.length;for(r||(r=iv),i||(i=[]);++a<o;){var c=e[a];t>0&&r(c)?t>1?rY(c,t-1,r,n,i):tE(i,c):n||(i[i.length]=c)}return i}var rW=n$(),r$=n$(!0);function rH(e,t){return e&&rW(e,t,of)}function rK(e,t){return e&&r$(e,t,of)}function rz(e,t){return td(t,function(t){return aB(e[t])})}function rQ(e,t){t=nL(t,e);for(var n=0,i=t.length;null!=e&&n<i;)e=e[iU(t[n++])];return n&&n==i?e:r}function rJ(e,t,r){var n=t(e);return aM(e)?n:tE(n,r(e))}function rq(e){return null==e?e===r?"[object Undefined]":"[object Null]":e6&&e6 in eT(e)?function(e){var t=eD.call(e,e6),n=e[e6];try{e[e6]=r;var i=!0}catch{}var a=eM.call(e);return i&&(t?e[e6]=n:delete e[e6]),a}(e):eM.call(e)}function rX(e,t){return e>t}function rZ(e,t){return null!=e&&eD.call(e,t)}function r1(e,t){return null!=e&&t in eT(e)}function r0(e,t,n){for(var i=n?tp:tf,a=e[0].length,o=e.length,c=o,s=eC(o),l=1/0,u=[];c--;){var d=e[c];c&&t&&(d=th(d,tD(t))),l=t3(d.length,l),s[c]=!n&&(t||a>=120&&d.length>=120)?new rm(c&&d):r}d=e[0];var f=-1,p=s[0];e:for(;++f<a&&u.length<l;){var h=d[f],E=t?t(h):h;if(h=n||0!==h?h:0,!(p?tP(p,E):i(u,E,n))){for(c=o;--c;){var g=s[c];if(!(g?tP(g,E):i(e[c],E,n)))continue e}p&&p.push(E),u.push(h)}}return u}function r2(e,t,n){t=nL(t,e);var i=null==(e=ib(e,t))?e:e[iU(iq(t))];return null==i?r:tc(i,e,n)}function r3(e){return aH(e)&&rq(e)==u}function r8(e,t,n,i,a){return e===t||(null!=e&&null!=t&&(aH(e)||aH(t))?function(e,t,n,i,a,o){var c=aM(e),s=aM(t),l=c?d:i_(e),E=s?d:i_(t);l=l==u?A:l,E=E==u?A:E;var g=l==A,v=E==A,y=l==E;if(y&&aV(e)){if(!aV(t))return!1;c=!0,g=!1}if(y&&!g)return o||(o=new rT),c||a1(e)?ir(e,t,n,i,a,o):function(e,t,r,n,i,a,o){switch(r){case N:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case O:return!(e.byteLength!=t.byteLength||!a(new ew(e),new ew(t)));case f:case p:case C:return aL(+e,+t);case h:return e.name==t.name&&e.message==t.message;case I:case T:return e==t+"";case _:var c=tw;case m:var s=1&n;if(c||(c=tW),e.size!=t.size&&!s)break;var l=o.get(e);if(l)return l==t;n|=2,o.set(e,t);var u=ir(c(e),c(t),n,i,a,o);return o.delete(e),u;case S:if(rf)return rf.call(e)==rf.call(t)}return!1}(e,t,l,n,i,a,o);if(!(1&n)){var R=g&&eD.call(e,"__wrapped__"),b=v&&eD.call(t,"__wrapped__");if(R||b){var j=R?e.value():e,L=b?t.value():t;return o||(o=new rT),a(j,L,n,i,o)}}return!!y&&(o||(o=new rT),function(e,t,n,i,a,o){var c=1&n,s=ia(e),l=s.length;if(l!=ia(t).length&&!c)return!1;for(var u=l;u--;){var d=s[u];if(!(c?d in t:eD.call(t,d)))return!1}var f=o.get(e),p=o.get(t);if(f&&p)return f==t&&p==e;var h=!0;o.set(e,t),o.set(t,e);for(var E=c;++u<l;){var g=e[d=s[u]],_=t[d];if(i)var C=c?i(_,g,d,t,e,o):i(g,_,d,e,t,o);if(!(C===r?g===_||a(g,_,n,i,o):C)){h=!1;break}E||(E="constructor"==d)}if(h&&!E){var A=e.constructor,v=t.constructor;A!=v&&"constructor"in e&&"constructor"in t&&!("function"==typeof A&&A instanceof A&&"function"==typeof v&&v instanceof v)&&(h=!1)}return o.delete(e),o.delete(t),h}(e,t,n,i,a,o))}(e,t,n,i,r8,a):e!=e&&t!=t)}function r4(e,t,n,i){var a=n.length,o=a,c=!i;if(null==e)return!o;for(e=eT(e);a--;){var s=n[a];if(c&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<o;){var l=(s=n[a])[0],u=e[l],d=s[1];if(c&&s[2]){if(u===r&&!(l in e))return!1}else{var f=new rT;if(i)var p=i(u,d,l,e,t,f);if(!(p===r?r8(d,u,3,i,f):p))return!1}}return!0}function r6(e){return!(!a$(e)||eP&&eP in e)&&(aB(e)?eU:eu).test(iV(e))}function r5(e){return"function"==typeof e?e:null==e?oU:"object"==typeof e?aM(e)?nr(e[0],e[1]):nt(e):oK(e)}function r9(e){if(!iO(e))return t0(e);var t=[];for(var r in eT(e))eD.call(e,r)&&"constructor"!=r&&t.push(r);return t}function r7(e,t){return e<t}function ne(e,t){var r=-1,n=ax(e)?eC(e.length):[];return rU(e,function(e,i,a){n[++r]=t(e,i,a)}),n}function nt(e){var t=ip(e);return 1==t.length&&t[0][2]?iN(t[0][0],t[0][1]):function(r){return r===e||r4(r,e,t)}}function nr(e,t){var n;return iT(e)&&(n=t)==n&&!a$(n)?iN(iU(e),t):function(n){var i=oc(n,e);return i===r&&i===t?os(n,e):r8(t,i,3)}}function nn(e,t,n,i,a){e!==t&&rW(t,function(o,c){if(a||(a=new rT),a$(o))(function(e,t,n,i,a,o,c){var s=ij(e,n),l=ij(t,n),u=c.get(l);if(u){rO(e,n,u);return}var d=o?o(s,l,n+"",e,t,c):r,f=d===r;if(f){var p=aM(l),h=!p&&aV(l),E=!p&&!h&&a1(l);d=l,p||h||E?aM(s)?d=s:aU(s)?d=nF(s):h?(f=!1,d=nP(l,!0)):E?(f=!1,d=nG(l,!0)):d=[]:aQ(l)||aP(l)?(d=s,aP(s)?d=a9(s):(!a$(s)||aB(s))&&(d=iA(l))):f=!1}f&&(c.set(l,d),a(d,l,i,o,c),c.delete(l)),rO(e,n,d)})(e,t,c,n,nn,i,a);else{var s=i?i(ij(e,c),o,c+"",e,t,a):r;s===r&&(s=o),rO(e,c,s)}},op)}function ni(e,t){var n=e.length;if(n)return iI(t+=t<0?n:0,n)?e[t]:r}function na(e,t,r){t=t.length?th(t,function(e){return aM(e)?function(t){return rQ(t,1===e.length?e[0]:e)}:e}):[oU];var n=-1;return t=th(t,tD(iu())),function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(ne(e,function(e,r,i){return{criteria:th(t,function(t){return t(e)}),index:++n,value:e}}),function(e,t){return function(e,t,r){for(var n=-1,i=e.criteria,a=t.criteria,o=i.length,c=r.length;++n<o;){var s=nx(i[n],a[n]);if(s){if(n>=c)return s;return s*("desc"==r[n]?-1:1)}}return e.index-t.index}(e,t,r)})}function no(e,t,r){for(var n=-1,i=t.length,a={};++n<i;){var o=t[n],c=rQ(e,o);r(c,o)&&nf(a,nL(o,e),c)}return a}function nc(e,t,r,n){var i=n?tT:tm,a=-1,o=t.length,c=e;for(e===t&&(t=nF(t)),r&&(c=th(e,tD(r)));++a<o;)for(var s=0,l=t[a],u=r?r(l):l;(s=i(c,u,s,n))>-1;)c!==e&&e1.call(c,s,1),e1.call(e,s,1);return e}function ns(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r];if(r==n||i!==a){var a=i;iI(i)?e1.call(e,i,1):nT(e,i)}}return e}function nl(e,t){return e+tJ(t6()*(t-e+1))}function nu(e,t){var r="";if(!e||t<1||t>0x1fffffffffffff)return r;do t%2&&(r+=e),(t=tJ(t/2))&&(e+=e);while(t);return r}function nd(e,t){return ik(iR(e,t,oU),e+"")}function nf(e,t,n,i){if(!a$(e))return e;t=nL(t,e);for(var a=-1,o=t.length,c=o-1,s=e;null!=s&&++a<o;){var l=iU(t[a]),u=n;if("__proto__"===l||"constructor"===l||"prototype"===l)break;if(a!=c){var d=s[l];(u=i?i(d,l,s):r)===r&&(u=a$(d)?d:iI(t[a+1])?[]:{})}rN(s,l,u),s=s[l]}return e}var np=ri?function(e,t){return ri.set(e,t),e}:oU,nh=e5?function(e,t){return e5(e,"toString",{configurable:!0,enumerable:!1,value:oM(t),writable:!0})}:oU;function nE(e,t,r){var n=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var a=eC(i);++n<i;)a[n]=e[n+t];return a}function ng(e,t){var r;return rU(e,function(e,n,i){return!(r=t(e,n,i))}),!!r}function n_(e,t,r){var n=0,i=null==e?n:e.length;if("number"==typeof t&&t==t&&i<=0x7fffffff){for(;n<i;){var a=n+i>>>1,o=e[a];null!==o&&!aZ(o)&&(r?o<=t:o<t)?n=a+1:i=a}return i}return nC(e,t,oU,r)}function nC(e,t,n,i){var a=0,o=null==e?0:e.length;if(0===o)return 0;t=n(t);for(var c=t!=t,s=null===t,l=aZ(t),u=t===r;a<o;){var d=tJ((a+o)/2),f=n(e[d]),p=f!==r,h=null===f,E=f==f,g=aZ(f);if(c)var _=i||E;else _=u?E&&(i||p):s?E&&p&&(i||!h):l?E&&p&&!h&&(i||!g):!h&&!g&&(i?f<=t:f<t);_?a=d+1:o=d}return t3(o,0xfffffffe)}function nA(e,t){for(var r=-1,n=e.length,i=0,a=[];++r<n;){var o=e[r],c=t?t(o):o;if(!r||!aL(c,s)){var s=c;a[i++]=0===o?0:o}}return a}function nv(e){return"number"==typeof e?e:aZ(e)?s:+e}function nI(e){if("string"==typeof e)return e;if(aM(e))return th(e,nI)+"";if(aZ(e))return rp?rp.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function nm(e,t,r){var n=-1,i=tf,a=e.length,o=!0,c=[],s=c;if(r)o=!1,i=tp;else if(a>=200){var l=t?null:n6(e);if(l)return tW(l);o=!1,i=tP,s=new rm}else s=t?[]:c;e:for(;++n<a;){var u=e[n],d=t?t(u):u;if(u=r||0!==u?u:0,o&&d==d){for(var f=s.length;f--;)if(s[f]===d)continue e;t&&s.push(d),c.push(u)}else i(s,d,r)||(s!==c&&s.push(d),c.push(u))}return c}function nT(e,t){return t=nL(t,e),null==(e=ib(e,t))||delete e[iU(iq(t))]}function nS(e,t,r,n){return nf(e,t,r(rQ(e,t)),n)}function ny(e,t,r,n){for(var i=e.length,a=n?i:-1;(n?a--:++a<i)&&t(e[a],a,e););return r?nE(e,n?0:a,n?a+1:i):nE(e,n?a+1:0,n?i:a)}function nO(e,t){var r=e;return r instanceof rC&&(r=r.value()),tg(t,function(e,t){return t.func.apply(t.thisArg,tE([e],t.args))},r)}function nN(e,t,r){var n=e.length;if(n<2)return n?nm(e[0]):[];for(var i=-1,a=eC(n);++i<n;)for(var o=e[i],c=-1;++c<n;)c!=i&&(a[i]=rx(a[i]||o,e[c],t,r));return nm(rY(a,1),t,r)}function nR(e,t,n){for(var i=-1,a=e.length,o=t.length,c={};++i<a;){var s=i<o?t[i]:r;n(c,e[i],s)}return c}function nb(e){return aU(e)?e:[]}function nj(e){return"function"==typeof e?e:oU}function nL(e,t){return aM(e)?e:iT(e,t)?[e]:ix(a7(e))}function nD(e,t,n){var i=e.length;return n=n===r?i:n,!t&&n>=i?e:nE(e,t,n)}var nk=e7||function(e){return e4.clearTimeout(e)};function nP(e,t){if(t)return e.slice();var r=e.length,n=eB?eB(r):new e.constructor(r);return e.copy(n),n}function nM(e){var t=new e.constructor(e.byteLength);return new ew(t).set(new ew(e)),t}function nG(e,t){var r=t?nM(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function nx(e,t){if(e!==t){var n=e!==r,i=null===e,a=e==e,o=aZ(e),c=t!==r,s=null===t,l=t==t,u=aZ(t);if(!s&&!u&&!o&&e>t||o&&c&&l&&!s&&!u||i&&c&&l||!n&&l||!a)return 1;if(!i&&!o&&!u&&e<t||u&&n&&a&&!i&&!o||s&&n&&a||!c&&a||!l)return -1}return 0}function nU(e,t,r,n){for(var i=-1,a=e.length,o=r.length,c=-1,s=t.length,l=t2(a-o,0),u=eC(s+l),d=!n;++c<s;)u[c]=t[c];for(;++i<o;)(d||i<a)&&(u[r[i]]=e[i]);for(;l--;)u[c++]=e[i++];return u}function nV(e,t,r,n){for(var i=-1,a=e.length,o=-1,c=r.length,s=-1,l=t.length,u=t2(a-c,0),d=eC(u+l),f=!n;++i<u;)d[i]=e[i];for(var p=i;++s<l;)d[p+s]=t[s];for(;++o<c;)(f||i<a)&&(d[p+r[o]]=e[i++]);return d}function nF(e,t){var r=-1,n=e.length;for(t||(t=eC(n));++r<n;)t[r]=e[r];return t}function nw(e,t,n,i){var a=!n;n||(n={});for(var o=-1,c=t.length;++o<c;){var s=t[o],l=i?i(n[s],e[s],s,n,e):r;l===r&&(l=e[s]),a?rL(n,s,l):rN(n,s,l)}return n}function nB(e,t){return function(r,n){var i=aM(r)?ts:rb,a=t?t():{};return i(r,e,iu(n,2),a)}}function nY(e){return nd(function(t,n){var i=-1,a=n.length,o=a>1?n[a-1]:r,c=a>2?n[2]:r;for(o=e.length>3&&"function"==typeof o?(a--,o):r,c&&im(n[0],n[1],c)&&(o=a<3?r:o,a=1),t=eT(t);++i<a;){var s=n[i];s&&e(t,s,i,o)}return t})}function nW(e,t){return function(r,n){if(null==r)return r;if(!ax(r))return e(r,n);for(var i=r.length,a=t?i:-1,o=eT(r);(t?a--:++a<i)&&!1!==n(o[a],a,o););return r}}function n$(e){return function(t,r,n){for(var i=-1,a=eT(t),o=n(t),c=o.length;c--;){var s=o[e?c:++i];if(!1===r(a[s],s,a))break}return t}}function nH(e){return function(t){var n=tF(t=a7(t))?tH(t):r,i=n?n[0]:t.charAt(0),a=n?nD(n,1).join(""):t.slice(1);return i[e]()+a}}function nK(e){return function(t){return tg(oD(oS(t).replace(eW,"")),e,"")}}function nz(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=rE(e.prototype),n=e.apply(r,t);return a$(n)?n:r}}function nQ(e){return function(t,n,i){var a=eT(t);if(!ax(t)){var o=iu(n,3);t=of(t),n=function(e){return o(a[e],e,a)}}var c=e(t,n,i);return c>-1?a[o?t[c]:c]:r}}function nJ(e){return ii(function(t){var i=t.length,a=i,o=r_.prototype.thru;for(e&&t.reverse();a--;){var c=t[a];if("function"!=typeof c)throw new eO(n);if(o&&!s&&"wrapper"==is(c))var s=new r_([],!0)}for(a=s?a:i;++a<i;){var l=is(c=t[a]),u="wrapper"==l?ic(c):r;s=u&&iS(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?s[is(u[0])].apply(s,u[3]):1==c.length&&iS(c)?s[l]():s.thru(c)}return function(){var e=arguments,r=e[0];if(s&&1==e.length&&aM(r))return s.plant(r).value();for(var n=0,a=i?t[n].apply(this,e):r;++n<i;)a=t[n].call(this,a);return a}})}function nq(e,t,n,i,a,o,c,s,l,u){var d=128&t,f=1&t,p=2&t,h=24&t,E=512&t,g=p?r:nz(e);return function _(){for(var C=arguments.length,A=eC(C),v=C;v--;)A[v]=arguments[v];if(h)var I=il(_),m=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(A,I);if(i&&(A=nU(A,i,a,h)),o&&(A=nV(A,o,c,h)),C-=m,h&&C<u){var T=tY(A,I);return n8(e,t,nq,_.placeholder,n,A,T,s,l,u-C)}var S=f?n:this,y=p?S[e]:e;return C=A.length,s?A=function(e,t){for(var n=e.length,i=t3(t.length,n),a=nF(e);i--;){var o=t[i];e[i]=iI(o,n)?a[o]:r}return e}(A,s):E&&C>1&&A.reverse(),d&&l<C&&(A.length=l),this&&this!==e4&&this instanceof _&&(y=g||nz(y)),y.apply(S,A)}}function nX(e,t){return function(r,n){var i,a;return i=t(n),a={},rH(r,function(t,r,n){e(a,i(t),r,n)}),a}}function nZ(e,t){return function(n,i){var a;if(n===r&&i===r)return t;if(n!==r&&(a=n),i!==r){if(a===r)return i;"string"==typeof n||"string"==typeof i?(n=nI(n),i=nI(i)):(n=nv(n),i=nv(i)),a=e(n,i)}return a}}function n1(e){return ii(function(t){return t=th(t,tD(iu())),nd(function(r){var n=this;return e(t,function(e){return tc(e,n,r)})})})}function n0(e,t){var n=(t=t===r?" ":nI(t)).length;if(n<2)return n?nu(t,e):t;var i=nu(t,tN(e/t$(t)));return tF(t)?nD(tH(i),0,e).join(""):i.slice(0,e)}function n2(e){return function(t,n,i){return i&&"number"!=typeof i&&im(t,n,i)&&(n=i=r),t=a8(t),n===r?(n=t,t=0):n=a8(n),i=i===r?t<n?1:-1:a8(i),function(e,t,r,n){for(var i=-1,a=t2(tN((t-e)/(r||1)),0),o=eC(a);a--;)o[n?a:++i]=e,e+=r;return o}(t,n,i,e)}}function n3(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=a5(t),r=a5(r)),e(t,r)}}function n8(e,t,n,i,a,o,c,s,l,u){var d=8&t,f=d?c:r,p=d?r:c,h=d?o:r,E=d?r:o;t|=d?32:64,4&(t&=~(d?64:32))||(t&=-4);var g=[e,t,a,h,f,E,p,s,l,u],_=n.apply(r,g);return iS(e)&&iL(_,g),_.placeholder=i,iP(_,e,t)}function n4(e){var t=em[e];return function(e,r){if(e=a5(e),(r=null==r?0:t3(a4(r),292))&&tZ(e)){var n=(a7(e)+"e").split("e");return+((n=(a7(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var n6=rt&&1/tW(new rt([,-0]))[1]==c?function(e){return new rt(e)}:oY;function n5(e){return function(t){var r,n,i=i_(t);return i==_?tw(t):i==m?(r=-1,n=Array(t.size),t.forEach(function(e){n[++r]=[e,e]}),n):th(e(t),function(e){return[e,t[e]]})}}function n9(e,t,i,o,c,s,l,u){var d=2&t;if(!d&&"function"!=typeof e)throw new eO(n);var f=o?o.length:0;if(f||(t&=-97,o=c=r),l=l===r?l:t2(a4(l),0),u=u===r?u:a4(u),f-=c?c.length:0,64&t){var p=o,h=c;o=c=r}var E=d?r:ic(e),g=[e,t,i,o,c,p,h,s,l,u];if(E&&function(e,t){var r=e[1],n=t[1],i=r|n,o=i<131,c=128==n&&8==r||128==n&&256==r&&e[7].length<=t[8]||384==n&&t[7].length<=t[8]&&8==r;if(o||c){1&n&&(e[2]=t[2],i|=1&r?0:4);var s=t[3];if(s){var l=e[3];e[3]=l?nU(l,s,t[4]):s,e[4]=l?tY(e[3],a):t[4]}(s=t[5])&&(l=e[5],e[5]=l?nV(l,s,t[6]):s,e[6]=l?tY(e[5],a):t[6]),(s=t[7])&&(e[7]=s),128&n&&(e[8]=null==e[8]?t[8]:t3(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}}(g,E),e=g[0],t=g[1],i=g[2],o=g[3],c=g[4],(u=g[9]=g[9]===r?d?0:e.length:t2(g[9]-f,0))||!(24&t)||(t&=-25),t&&1!=t)8==t||16==t?(_=e,C=t,A=u,v=nz(_),D=function e(){for(var t=arguments.length,n=eC(t),i=t,a=il(e);i--;)n[i]=arguments[i];var o=t<3&&n[0]!==a&&n[t-1]!==a?[]:tY(n,a);return(t-=o.length)<A?n8(_,C,nq,e.placeholder,r,n,o,r,r,A-t):tc(this&&this!==e4&&this instanceof e?v:_,this,n)}):32!=t&&33!=t||c.length?D=nq.apply(r,g):(I=e,m=t,T=i,S=o,y=1&m,O=nz(I),D=function e(){for(var t=-1,r=arguments.length,n=-1,i=S.length,a=eC(i+r),o=this&&this!==e4&&this instanceof e?O:I;++n<i;)a[n]=S[n];for(;r--;)a[n++]=arguments[++t];return tc(o,y?T:this,a)});else var _,C,A,v,I,m,T,S,y,O,N,R,b,j,L,D=(N=e,R=t,b=i,j=1&R,L=nz(N),function e(){return(this&&this!==e4&&this instanceof e?L:N).apply(j?b:this,arguments)});return iP((E?np:iL)(D,g),e,t)}function n7(e,t,n,i){return e===r||aL(e,eb[n])&&!eD.call(i,n)?t:e}function ie(e,t,n,i,a,o){return a$(e)&&a$(t)&&(o.set(t,e),nn(e,t,r,ie,o),o.delete(t)),e}function it(e){return aQ(e)?r:e}function ir(e,t,n,i,a,o){var c=1&n,s=e.length,l=t.length;if(s!=l&&!(c&&l>s))return!1;var u=o.get(e),d=o.get(t);if(u&&d)return u==t&&d==e;var f=-1,p=!0,h=2&n?new rm:r;for(o.set(e,t),o.set(t,e);++f<s;){var E=e[f],g=t[f];if(i)var _=c?i(g,E,f,t,e,o):i(E,g,f,e,t,o);if(_!==r){if(_)continue;p=!1;break}if(h){if(!tC(t,function(e,t){if(!tP(h,t)&&(E===e||a(E,e,n,i,o)))return h.push(t)})){p=!1;break}}else if(!(E===g||a(E,g,n,i,o))){p=!1;break}}return o.delete(e),o.delete(t),p}function ii(e){return ik(iR(e,r,iH),e+"")}function ia(e){return rJ(e,of,iE)}function io(e){return rJ(e,op,ig)}var ic=ri?function(e){return ri.get(e)}:oY;function is(e){for(var t=e.name+"",r=ra[t],n=eD.call(ra,t)?r.length:0;n--;){var i=r[n],a=i.func;if(null==a||a==e)return i.name}return t}function il(e){return(eD.call(rh,"placeholder")?rh:e).placeholder}function iu(){var e=rh.iteratee||oV;return e=e===oV?r5:e,arguments.length?e(arguments[0],arguments[1]):e}function id(e,t){var r,n=e.__data__;return("string"==(r=typeof t)||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t)?n["string"==typeof t?"string":"hash"]:n.map}function ip(e){for(var t=of(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,i==i&&!a$(i)]}return t}function ih(e,t){var n=null==e?r:e[t];return r6(n)?n:r}var iE=tq?function(e){return null==e?[]:td(tq(e=eT(e)),function(t){return ez.call(e,t)})}:oJ,ig=tq?function(e){for(var t=[];e;)tE(t,iE(e)),e=eY(e);return t}:oJ,i_=rq;function iC(e,t,r){t=nL(t,e);for(var n=-1,i=t.length,a=!1;++n<i;){var o=iU(t[n]);if(!(a=null!=e&&r(e,o)))break;e=e[o]}return a||++n!=i?a:!!(i=null==e?0:e.length)&&aW(i)&&iI(o,i)&&(aM(e)||aP(e))}function iA(e){return"function"!=typeof e.constructor||iO(e)?{}:rE(eY(e))}function iv(e){return aM(e)||aP(e)||!!(e3&&e&&e[e3])}function iI(e,t){var r=typeof e;return!!(t=t??0x1fffffffffffff)&&("number"==r||"symbol"!=r&&ef.test(e))&&e>-1&&e%1==0&&e<t}function im(e,t,r){if(!a$(r))return!1;var n=typeof t;return("number"==n?!!(ax(r)&&iI(t,r.length)):"string"==n&&t in r)&&aL(r[t],e)}function iT(e,t){if(aM(e))return!1;var r=typeof e;return!!("number"==r||"symbol"==r||"boolean"==r||null==e||aZ(e))||z.test(e)||!K.test(e)||null!=t&&e in eT(t)}function iS(e){var t=is(e),r=rh[t];if("function"!=typeof r||!(t in rC.prototype))return!1;if(e===r)return!0;var n=ic(r);return!!n&&e===n[0]}(t9&&i_(new t9(new ArrayBuffer(1)))!=N||t7&&i_(new t7)!=_||re&&i_(re.resolve())!=v||rt&&i_(new rt)!=m||rr&&i_(new rr)!=y)&&(i_=function(e){var t=rq(e),n=t==A?e.constructor:r,i=n?iV(n):"";if(i)switch(i){case ro:return N;case rc:return _;case rs:return v;case rl:return m;case ru:return y}return t});var iy=ej?aB:oq;function iO(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||eb)}function iN(e,t){return function(n){return null!=n&&n[e]===t&&(t!==r||e in eT(n))}}function iR(e,t,n){return t=t2(t===r?e.length-1:t,0),function(){for(var r=arguments,i=-1,a=t2(r.length-t,0),o=eC(a);++i<a;)o[i]=r[t+i];i=-1;for(var c=eC(t+1);++i<t;)c[i]=r[i];return c[t]=n(o),tc(e,this,c)}}function ib(e,t){return t.length<2?e:rQ(e,nE(t,0,-1))}function ij(e,t){if(!("constructor"===t&&"function"==typeof e[t])&&"__proto__"!=t)return e[t]}var iL=iM(np),iD=tA||function(e,t){return e4.setTimeout(e,t)},ik=iM(nh);function iP(e,t,r){var n,i,a=t+"";return ik(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(ee,`{
/* [wrapped with `+t+`] */
`)}(a,(n=(i=a.match(et))?i[1].split(er):[],tl(l,function(e){var t="_."+e[0];r&e[1]&&!tf(n,t)&&n.push(t)}),n.sort())))}function iM(e){var t=0,n=0;return function(){var i=t8(),a=16-(i-n);if(n=i,a>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(r,arguments)}}function iG(e,t){var n=-1,i=e.length,a=i-1;for(t=t===r?i:t;++n<t;){var o=nl(n,a),c=e[o];e[o]=e[n],e[n]=c}return e.length=t,e}var ix=(eg=(Z=ay(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Q,function(e,r,n,i){t.push(n?i.replace(ea,"$1"):r||e)}),t},function(e){return 500===eg.size&&eg.clear(),e})).cache,Z);function iU(e){if("string"==typeof e||aZ(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function iV(e){if(null!=e){try{return eL.call(e)}catch{}try{return e+""}catch{}}return""}function iF(e){if(e instanceof rC)return e.clone();var t=new r_(e.__wrapped__,e.__chain__);return t.__actions__=nF(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var iw=nd(function(e,t){return aU(e)?rx(e,rY(t,1,aU,!0)):[]}),iB=nd(function(e,t){var n=iq(t);return aU(n)&&(n=r),aU(e)?rx(e,rY(t,1,aU,!0),iu(n,2)):[]}),iY=nd(function(e,t){var n=iq(t);return aU(n)&&(n=r),aU(e)?rx(e,rY(t,1,aU,!0),r,n):[]});function iW(e,t,r){var n=null==e?0:e.length;if(!n)return -1;var i=null==r?0:a4(r);return i<0&&(i=t2(n+i,0)),tI(e,iu(t,3),i)}function i$(e,t,n){var i=null==e?0:e.length;if(!i)return -1;var a=i-1;return n!==r&&(a=a4(n),a=n<0?t2(i+a,0):t3(a,i-1)),tI(e,iu(t,3),a,!0)}function iH(e){return(null==e?0:e.length)?rY(e,1):[]}function iK(e){return e&&e.length?e[0]:r}var iz=nd(function(e){var t=th(e,nb);return t.length&&t[0]===e[0]?r0(t):[]}),iQ=nd(function(e){var t=iq(e),n=th(e,nb);return t===iq(n)?t=r:n.pop(),n.length&&n[0]===e[0]?r0(n,iu(t,2)):[]}),iJ=nd(function(e){var t=iq(e),n=th(e,nb);return(t="function"==typeof t?t:r)&&n.pop(),n.length&&n[0]===e[0]?r0(n,r,t):[]});function iq(e){var t=null==e?0:e.length;return t?e[t-1]:r}var iX=nd(iZ);function iZ(e,t){return e&&e.length&&t&&t.length?nc(e,t):e}var i1=ii(function(e,t){var r=null==e?0:e.length,n=rD(e,t);return ns(e,th(t,function(e){return iI(e,r)?+e:e}).sort(nx)),n});function i0(e){return null==e?e:t5.call(e)}var i2=nd(function(e){return nm(rY(e,1,aU,!0))}),i3=nd(function(e){var t=iq(e);return aU(t)&&(t=r),nm(rY(e,1,aU,!0),iu(t,2))}),i8=nd(function(e){var t=iq(e);return t="function"==typeof t?t:r,nm(rY(e,1,aU,!0),r,t)});function i4(e){if(!(e&&e.length))return[];var t=0;return e=td(e,function(e){if(aU(e))return t=t2(e.length,t),!0}),tj(t,function(t){return th(e,tO(t))})}function i6(e,t){if(!(e&&e.length))return[];var n=i4(e);return null==t?n:th(n,function(e){return tc(t,r,e)})}var i5=nd(function(e,t){return aU(e)?rx(e,t):[]}),i9=nd(function(e){return nN(td(e,aU))}),i7=nd(function(e){var t=iq(e);return aU(t)&&(t=r),nN(td(e,aU),iu(t,2))}),ae=nd(function(e){var t=iq(e);return t="function"==typeof t?t:r,nN(td(e,aU),r,t)}),at=nd(i4),ar=nd(function(e){var t=e.length,n=t>1?e[t-1]:r;return n="function"==typeof n?(e.pop(),n):r,i6(e,n)});function an(e){var t=rh(e);return t.__chain__=!0,t}function ai(e,t){return t(e)}var aa=ii(function(e){var t=e.length,n=t?e[0]:0,i=this.__wrapped__,a=function(t){return rD(t,e)};return!(t>1)&&!this.__actions__.length&&i instanceof rC&&iI(n)?((i=i.slice(n,+n+(t?1:0))).__actions__.push({func:ai,args:[a],thisArg:r}),new r_(i,this.__chain__).thru(function(e){return t&&!e.length&&e.push(r),e})):this.thru(a)}),ao=nB(function(e,t,r){eD.call(e,r)?++e[r]:rL(e,r,1)}),ac=nQ(iW),as=nQ(i$);function al(e,t){return(aM(e)?tl:rU)(e,iu(t,3))}function au(e,t){return(aM(e)?function(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}:rV)(e,iu(t,3))}var ad=nB(function(e,t,r){eD.call(e,r)?e[r].push(t):rL(e,r,[t])}),af=nd(function(e,t,r){var n=-1,i="function"==typeof t,a=ax(e)?eC(e.length):[];return rU(e,function(e){a[++n]=i?tc(t,e,r):r2(e,t,r)}),a}),ap=nB(function(e,t,r){rL(e,r,t)});function ah(e,t){return(aM(e)?th:ne)(e,iu(t,3))}var aE=nB(function(e,t,r){e[r?0:1].push(t)},function(){return[[],[]]}),ag=nd(function(e,t){if(null==e)return[];var r=t.length;return r>1&&im(e,t[0],t[1])?t=[]:r>2&&im(t[0],t[1],t[2])&&(t=[t[0]]),na(e,rY(t,1),[])}),a_=te||function(){return e4.Date.now()};function aC(e,t,n){return t=n?r:t,t=e&&null==t?e.length:t,n9(e,128,r,r,r,r,t)}function aA(e,t){var i;if("function"!=typeof t)throw new eO(n);return e=a4(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=r),i}}var av=nd(function(e,t,r){var n=1;if(r.length){var i=tY(r,il(av));n|=32}return n9(e,n,t,r,i)}),aI=nd(function(e,t,r){var n=3;if(r.length){var i=tY(r,il(aI));n|=32}return n9(t,n,e,r,i)});function am(e,t,i){var a,o,c,s,l,u,d=0,f=!1,p=!1,h=!0;if("function"!=typeof e)throw new eO(n);function E(t){var n=a,i=o;return a=o=r,d=t,s=e.apply(i,n)}function g(e){var n=e-u,i=e-d;return u===r||n>=t||n<0||p&&i>=c}function _(){var e,r,n,i=a_();if(g(i))return C(i);l=iD(_,(e=i-u,r=i-d,n=t-e,p?t3(n,c-r):n))}function C(e){return l=r,h&&a?E(e):(a=o=r,s)}function A(){var e,n=a_(),i=g(n);if(a=arguments,o=this,u=n,i){if(l===r)return d=e=u,l=iD(_,t),f?E(e):s;if(p)return nk(l),l=iD(_,t),E(u)}return l===r&&(l=iD(_,t)),s}return t=a5(t)||0,a$(i)&&(f=!!i.leading,c=(p="maxWait"in i)?t2(a5(i.maxWait)||0,t):c,h="trailing"in i?!!i.trailing:h),A.cancel=function(){l!==r&&nk(l),d=0,a=u=o=l=r},A.flush=function(){return l===r?s:C(a_())},A}var aT=nd(function(e,t){return rG(e,1,t)}),aS=nd(function(e,t,r){return rG(e,a5(t)||0,r)});function ay(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new eO(n);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(ay.Cache||rI),r}function aO(e){if("function"!=typeof e)throw new eO(n);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}ay.Cache=rI;var aN=nd(function(e,t){var r=(t=1==t.length&&aM(t[0])?th(t[0],tD(iu())):th(rY(t,1),tD(iu()))).length;return nd(function(n){for(var i=-1,a=t3(n.length,r);++i<a;)n[i]=t[i].call(this,n[i]);return tc(e,this,n)})}),aR=nd(function(e,t){var n=tY(t,il(aR));return n9(e,32,r,t,n)}),ab=nd(function(e,t){var n=tY(t,il(ab));return n9(e,64,r,t,n)}),aj=ii(function(e,t){return n9(e,256,r,r,r,t)});function aL(e,t){return e===t||e!=e&&t!=t}var aD=n3(rX),ak=n3(function(e,t){return e>=t}),aP=r3(function(){return arguments}())?r3:function(e){return aH(e)&&eD.call(e,"callee")&&!ez.call(e,"callee")},aM=eC.isArray,aG=tt?tD(tt):function(e){return aH(e)&&rq(e)==O};function ax(e){return null!=e&&aW(e.length)&&!aB(e)}function aU(e){return aH(e)&&ax(e)}var aV=tX||oq,aF=tr?tD(tr):function(e){return aH(e)&&rq(e)==p};function aw(e){if(!aH(e))return!1;var t=rq(e);return t==h||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!aQ(e)}function aB(e){if(!a$(e))return!1;var t=rq(e);return t==E||t==g||"[object AsyncFunction]"==t||"[object Proxy]"==t}function aY(e){return"number"==typeof e&&e==a4(e)}function aW(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=0x1fffffffffffff}function a$(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function aH(e){return null!=e&&"object"==typeof e}var aK=tn?tD(tn):function(e){return aH(e)&&i_(e)==_};function az(e){return"number"==typeof e||aH(e)&&rq(e)==C}function aQ(e){if(!aH(e)||rq(e)!=A)return!1;var t=eY(e);if(null===t)return!0;var r=eD.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&eL.call(r)==eG}var aJ=ti?tD(ti):function(e){return aH(e)&&rq(e)==I},aq=ta?tD(ta):function(e){return aH(e)&&i_(e)==m};function aX(e){return"string"==typeof e||!aM(e)&&aH(e)&&rq(e)==T}function aZ(e){return"symbol"==typeof e||aH(e)&&rq(e)==S}var a1=to?tD(to):function(e){return aH(e)&&aW(e.length)&&!!eX[rq(e)]},a0=n3(r7),a2=n3(function(e,t){return e<=t});function a3(e){if(!e)return[];if(ax(e))return aX(e)?tH(e):nF(e);if(e8&&e[e8])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[e8]());var t=i_(e);return(t==_?tw:t==m?tW:oI)(e)}function a8(e){return e?(e=a5(e))===c||e===-1/0?(e<0?-1:1)*17976931348623157e292:e==e?e:0:0===e?e:0}function a4(e){var t=a8(e),r=t%1;return t==t?r?t-r:t:0}function a6(e){return e?rk(a4(e),0,0xffffffff):0}function a5(e){if("number"==typeof e)return e;if(aZ(e))return s;if(a$(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a$(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=tL(e);var r=el.test(e);return r||ed.test(e)?e2(e.slice(2),r?2:8):es.test(e)?s:+e}function a9(e){return nw(e,op(e))}function a7(e){return null==e?"":nI(e)}var oe=nY(function(e,t){if(iO(t)||ax(t)){nw(t,of(t),e);return}for(var r in t)eD.call(t,r)&&rN(e,r,t[r])}),ot=nY(function(e,t){nw(t,op(t),e)}),or=nY(function(e,t,r,n){nw(t,op(t),e,n)}),on=nY(function(e,t,r,n){nw(t,of(t),e,n)}),oi=ii(rD),oa=nd(function(e,t){e=eT(e);var n=-1,i=t.length,a=i>2?t[2]:r;for(a&&im(t[0],t[1],a)&&(i=1);++n<i;)for(var o=t[n],c=op(o),s=-1,l=c.length;++s<l;){var u=c[s],d=e[u];(d===r||aL(d,eb[u])&&!eD.call(e,u))&&(e[u]=o[u])}return e}),oo=nd(function(e){return e.push(r,ie),tc(oE,r,e)});function oc(e,t,n){var i=null==e?r:rQ(e,t);return i===r?n:i}function os(e,t){return null!=e&&iC(e,t,r1)}var ol=nX(function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=eM.call(t)),e[t]=r},oM(oU)),ou=nX(function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=eM.call(t)),eD.call(e,t)?e[t].push(r):e[t]=[r]},iu),od=nd(r2);function of(e){return ax(e)?rS(e):r9(e)}function op(e){return ax(e)?rS(e,!0):function(e){if(!a$(e))return function(e){var t=[];if(null!=e)for(var r in eT(e))t.push(r);return t}(e);var t=iO(e),r=[];for(var n in e)"constructor"==n&&(t||!eD.call(e,n))||r.push(n);return r}(e)}var oh=nY(function(e,t,r){nn(e,t,r)}),oE=nY(function(e,t,r,n){nn(e,t,r,n)}),og=ii(function(e,t){var r={};if(null==e)return r;var n=!1;t=th(t,function(t){return t=nL(t,e),n||(n=t.length>1),t}),nw(e,io(e),r),n&&(r=rP(r,7,it));for(var i=t.length;i--;)nT(r,t[i]);return r}),o_=ii(function(e,t){return null==e?{}:no(e,t,function(t,r){return os(e,r)})});function oC(e,t){if(null==e)return{};var r=th(io(e),function(e){return[e]});return t=iu(t),no(e,r,function(e,r){return t(e,r[0])})}var oA=n5(of),ov=n5(op);function oI(e){return null==e?[]:tk(e,of(e))}var om=nK(function(e,t,r){return t=t.toLowerCase(),e+(r?oT(t):t)});function oT(e){return oL(a7(e).toLowerCase())}function oS(e){return(e=a7(e))&&e.replace(ep,tx).replace(e$,"")}var oy=nK(function(e,t,r){return e+(r?"-":"")+t.toLowerCase()}),oO=nK(function(e,t,r){return e+(r?" ":"")+t.toLowerCase()}),oN=nH("toLowerCase"),oR=nK(function(e,t,r){return e+(r?"_":"")+t.toLowerCase()}),ob=nK(function(e,t,r){return e+(r?" ":"")+oL(t)}),oj=nK(function(e,t,r){return e+(r?" ":"")+t.toUpperCase()}),oL=nH("toUpperCase");function oD(e,t,n){var i;return e=a7(e),(t=n?r:t)===r?(i=e,eQ.test(i))?e.match(eK)||[]:e.match(en)||[]:e.match(t)||[]}var ok=nd(function(e,t){try{return tc(e,r,t)}catch(e){return aw(e)?e:new ev(e)}}),oP=ii(function(e,t){return tl(t,function(t){rL(e,t=iU(t),av(e[t],e))}),e});function oM(e){return function(){return e}}var oG=nJ(),ox=nJ(!0);function oU(e){return e}function oV(e){return r5("function"==typeof e?e:rP(e,1))}var oF=nd(function(e,t){return function(r){return r2(r,e,t)}}),ow=nd(function(e,t){return function(r){return r2(e,r,t)}});function oB(e,t,r){var n=of(t),i=rz(t,n);null!=r||a$(t)&&(i.length||!n.length)||(r=t,t=e,e=this,i=rz(t,of(t)));var a=!(a$(r)&&"chain"in r)||!!r.chain,o=aB(e);return tl(i,function(r){var n=t[r];e[r]=n,o&&(e.prototype[r]=function(){var t=this.__chain__;if(a||t){var r=e(this.__wrapped__);return(r.__actions__=nF(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,tE([this.value()],arguments))})}),e}function oY(){}var oW=n1(th),o$=n1(tu),oH=n1(tC);function oK(e){return iT(e)?tO(iU(e)):function(t){return rQ(t,e)}}var oz=n2(),oQ=n2(!0);function oJ(){return[]}function oq(){return!1}var oX=nZ(function(e,t){return e+t},0),oZ=n4("ceil"),o1=nZ(function(e,t){return e/t},1),o0=n4("floor"),o2=nZ(function(e,t){return e*t},1),o3=n4("round"),o8=nZ(function(e,t){return e-t},0);return rh.after=function(e,t){if("function"!=typeof t)throw new eO(n);return e=a4(e),function(){if(--e<1)return t.apply(this,arguments)}},rh.ary=aC,rh.assign=oe,rh.assignIn=ot,rh.assignInWith=or,rh.assignWith=on,rh.at=oi,rh.before=aA,rh.bind=av,rh.bindAll=oP,rh.bindKey=aI,rh.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return aM(e)?e:[e]},rh.chain=an,rh.chunk=function(e,t,n){t=(n?im(e,t,n):t===r)?1:t2(a4(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var a=0,o=0,c=eC(tN(i/t));a<i;)c[o++]=nE(e,a,a+=t);return c},rh.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var a=e[t];a&&(i[n++]=a)}return i},rh.concat=function(){var e=arguments.length;if(!e)return[];for(var t=eC(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return tE(aM(r)?nF(r):[r],rY(t,1))},rh.cond=function(e){var t=null==e?0:e.length,r=iu();return e=t?th(e,function(e){if("function"!=typeof e[1])throw new eO(n);return[r(e[0]),e[1]]}):[],nd(function(r){for(var n=-1;++n<t;){var i=e[n];if(tc(i[0],this,r))return tc(i[1],this,r)}})},rh.conforms=function(e){var t,r;return r=of(t=rP(e,1)),function(e){return rM(e,t,r)}},rh.constant=oM,rh.countBy=ao,rh.create=function(e,t){var r=rE(e);return null==t?r:rj(r,t)},rh.curry=function e(t,n,i){n=i?r:n;var a=n9(t,8,r,r,r,r,r,n);return a.placeholder=e.placeholder,a},rh.curryRight=function e(t,n,i){n=i?r:n;var a=n9(t,16,r,r,r,r,r,n);return a.placeholder=e.placeholder,a},rh.debounce=am,rh.defaults=oa,rh.defaultsDeep=oo,rh.defer=aT,rh.delay=aS,rh.difference=iw,rh.differenceBy=iB,rh.differenceWith=iY,rh.drop=function(e,t,n){var i=null==e?0:e.length;return i?nE(e,(t=n||t===r?1:a4(t))<0?0:t,i):[]},rh.dropRight=function(e,t,n){var i=null==e?0:e.length;return i?nE(e,0,(t=i-(t=n||t===r?1:a4(t)))<0?0:t):[]},rh.dropRightWhile=function(e,t){return e&&e.length?ny(e,iu(t,3),!0,!0):[]},rh.dropWhile=function(e,t){return e&&e.length?ny(e,iu(t,3),!0):[]},rh.fill=function(e,t,n,i){var a=null==e?0:e.length;return a?(n&&"number"!=typeof n&&im(e,t,n)&&(n=0,i=a),function(e,t,n,i){var a=e.length;for((n=a4(n))<0&&(n=-n>a?0:a+n),(i=i===r||i>a?a:a4(i))<0&&(i+=a),i=n>i?0:a6(i);n<i;)e[n++]=t;return e}(e,t,n,i)):[]},rh.filter=function(e,t){return(aM(e)?td:rB)(e,iu(t,3))},rh.flatMap=function(e,t){return rY(ah(e,t),1)},rh.flatMapDeep=function(e,t){return rY(ah(e,t),c)},rh.flatMapDepth=function(e,t,n){return n=n===r?1:a4(n),rY(ah(e,t),n)},rh.flatten=iH,rh.flattenDeep=function(e){return(null==e?0:e.length)?rY(e,c):[]},rh.flattenDepth=function(e,t){return(null==e?0:e.length)?rY(e,t=t===r?1:a4(t)):[]},rh.flip=function(e){return n9(e,512)},rh.flow=oG,rh.flowRight=ox,rh.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t];n[i[0]]=i[1]}return n},rh.functions=function(e){return null==e?[]:rz(e,of(e))},rh.functionsIn=function(e){return null==e?[]:rz(e,op(e))},rh.groupBy=ad,rh.initial=function(e){return(null==e?0:e.length)?nE(e,0,-1):[]},rh.intersection=iz,rh.intersectionBy=iQ,rh.intersectionWith=iJ,rh.invert=ol,rh.invertBy=ou,rh.invokeMap=af,rh.iteratee=oV,rh.keyBy=ap,rh.keys=of,rh.keysIn=op,rh.map=ah,rh.mapKeys=function(e,t){var r={};return t=iu(t,3),rH(e,function(e,n,i){rL(r,t(e,n,i),e)}),r},rh.mapValues=function(e,t){var r={};return t=iu(t,3),rH(e,function(e,n,i){rL(r,n,t(e,n,i))}),r},rh.matches=function(e){return nt(rP(e,1))},rh.matchesProperty=function(e,t){return nr(e,rP(t,1))},rh.memoize=ay,rh.merge=oh,rh.mergeWith=oE,rh.method=oF,rh.methodOf=ow,rh.mixin=oB,rh.negate=aO,rh.nthArg=function(e){return e=a4(e),nd(function(t){return ni(t,e)})},rh.omit=og,rh.omitBy=function(e,t){return oC(e,aO(iu(t)))},rh.once=function(e){return aA(2,e)},rh.orderBy=function(e,t,n,i){return null==e?[]:(aM(t)||(t=null==t?[]:[t]),aM(n=i?r:n)||(n=null==n?[]:[n]),na(e,t,n))},rh.over=oW,rh.overArgs=aN,rh.overEvery=o$,rh.overSome=oH,rh.partial=aR,rh.partialRight=ab,rh.partition=aE,rh.pick=o_,rh.pickBy=oC,rh.property=oK,rh.propertyOf=function(e){return function(t){return null==e?r:rQ(e,t)}},rh.pull=iX,rh.pullAll=iZ,rh.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?nc(e,t,iu(r,2)):e},rh.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?nc(e,t,r,n):e},rh.pullAt=i1,rh.range=oz,rh.rangeRight=oQ,rh.rearg=aj,rh.reject=function(e,t){return(aM(e)?td:rB)(e,aO(iu(t,3)))},rh.remove=function(e,t){var r=[];if(!(e&&e.length))return r;var n=-1,i=[],a=e.length;for(t=iu(t,3);++n<a;){var o=e[n];t(o,n,e)&&(r.push(o),i.push(n))}return ns(e,i),r},rh.rest=function(e,t){if("function"!=typeof e)throw new eO(n);return nd(e,t=t===r?t:a4(t))},rh.reverse=i0,rh.sampleSize=function(e,t,n){return t=(n?im(e,t,n):t===r)?1:a4(t),(aM(e)?function(e,t){return iG(nF(e),rk(t,0,e.length))}:function(e,t){var r=oI(e);return iG(r,rk(t,0,r.length))})(e,t)},rh.set=function(e,t,r){return null==e?e:nf(e,t,r)},rh.setWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:nf(e,t,n,i)},rh.shuffle=function(e){return(aM(e)?function(e){return iG(nF(e))}:function(e){return iG(oI(e))})(e)},rh.slice=function(e,t,n){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&im(e,t,n)?(t=0,n=i):(t=null==t?0:a4(t),n=n===r?i:a4(n)),nE(e,t,n)):[]},rh.sortBy=ag,rh.sortedUniq=function(e){return e&&e.length?nA(e):[]},rh.sortedUniqBy=function(e,t){return e&&e.length?nA(e,iu(t,2)):[]},rh.split=function(e,t,n){return n&&"number"!=typeof n&&im(e,t,n)&&(t=n=r),(n=n===r?0xffffffff:n>>>0)?(e=a7(e))&&("string"==typeof t||null!=t&&!aJ(t))&&!(t=nI(t))&&tF(e)?nD(tH(e),0,n):e.split(t,n):[]},rh.spread=function(e,t){if("function"!=typeof e)throw new eO(n);return t=null==t?0:t2(a4(t),0),nd(function(r){var n=r[t],i=nD(r,0,t);return n&&tE(i,n),tc(e,this,i)})},rh.tail=function(e){var t=null==e?0:e.length;return t?nE(e,1,t):[]},rh.take=function(e,t,n){return e&&e.length?nE(e,0,(t=n||t===r?1:a4(t))<0?0:t):[]},rh.takeRight=function(e,t,n){var i=null==e?0:e.length;return i?nE(e,(t=i-(t=n||t===r?1:a4(t)))<0?0:t,i):[]},rh.takeRightWhile=function(e,t){return e&&e.length?ny(e,iu(t,3),!1,!0):[]},rh.takeWhile=function(e,t){return e&&e.length?ny(e,iu(t,3)):[]},rh.tap=function(e,t){return t(e),e},rh.throttle=function(e,t,r){var i=!0,a=!0;if("function"!=typeof e)throw new eO(n);return a$(r)&&(i="leading"in r?!!r.leading:i,a="trailing"in r?!!r.trailing:a),am(e,t,{leading:i,maxWait:t,trailing:a})},rh.thru=ai,rh.toArray=a3,rh.toPairs=oA,rh.toPairsIn=ov,rh.toPath=function(e){return aM(e)?th(e,iU):aZ(e)?[e]:nF(ix(a7(e)))},rh.toPlainObject=a9,rh.transform=function(e,t,r){var n=aM(e),i=n||aV(e)||a1(e);if(t=iu(t,4),null==r){var a=e&&e.constructor;r=i?n?new a:[]:a$(e)&&aB(a)?rE(eY(e)):{}}return(i?tl:rH)(e,function(e,n,i){return t(r,e,n,i)}),r},rh.unary=function(e){return aC(e,1)},rh.union=i2,rh.unionBy=i3,rh.unionWith=i8,rh.uniq=function(e){return e&&e.length?nm(e):[]},rh.uniqBy=function(e,t){return e&&e.length?nm(e,iu(t,2)):[]},rh.uniqWith=function(e,t){return t="function"==typeof t?t:r,e&&e.length?nm(e,r,t):[]},rh.unset=function(e,t){return null==e||nT(e,t)},rh.unzip=i4,rh.unzipWith=i6,rh.update=function(e,t,r){return null==e?e:nS(e,t,nj(r))},rh.updateWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:nS(e,t,nj(n),i)},rh.values=oI,rh.valuesIn=function(e){return null==e?[]:tk(e,op(e))},rh.without=i5,rh.words=oD,rh.wrap=function(e,t){return aR(nj(t),e)},rh.xor=i9,rh.xorBy=i7,rh.xorWith=ae,rh.zip=at,rh.zipObject=function(e,t){return nR(e||[],t||[],rN)},rh.zipObjectDeep=function(e,t){return nR(e||[],t||[],nf)},rh.zipWith=ar,rh.entries=oA,rh.entriesIn=ov,rh.extend=ot,rh.extendWith=or,oB(rh,rh),rh.add=oX,rh.attempt=ok,rh.camelCase=om,rh.capitalize=oT,rh.ceil=oZ,rh.clamp=function(e,t,n){return n===r&&(n=t,t=r),n!==r&&(n=(n=a5(n))==n?n:0),t!==r&&(t=(t=a5(t))==t?t:0),rk(a5(e),t,n)},rh.clone=function(e){return rP(e,4)},rh.cloneDeep=function(e){return rP(e,5)},rh.cloneDeepWith=function(e,t){return rP(e,5,t="function"==typeof t?t:r)},rh.cloneWith=function(e,t){return rP(e,4,t="function"==typeof t?t:r)},rh.conformsTo=function(e,t){return null==t||rM(e,t,of(t))},rh.deburr=oS,rh.defaultTo=function(e,t){return null==e||e!=e?t:e},rh.divide=o1,rh.endsWith=function(e,t,n){e=a7(e),t=nI(t);var i=e.length,a=n=n===r?i:rk(a4(n),0,i);return(n-=t.length)>=0&&e.slice(n,a)==t},rh.eq=aL,rh.escape=function(e){return(e=a7(e))&&Y.test(e)?e.replace(w,tU):e},rh.escapeRegExp=function(e){return(e=a7(e))&&q.test(e)?e.replace(J,"\\$&"):e},rh.every=function(e,t,n){var i=aM(e)?tu:rF;return n&&im(e,t,n)&&(t=r),i(e,iu(t,3))},rh.find=ac,rh.findIndex=iW,rh.findKey=function(e,t){return tv(e,iu(t,3),rH)},rh.findLast=as,rh.findLastIndex=i$,rh.findLastKey=function(e,t){return tv(e,iu(t,3),rK)},rh.floor=o0,rh.forEach=al,rh.forEachRight=au,rh.forIn=function(e,t){return null==e?e:rW(e,iu(t,3),op)},rh.forInRight=function(e,t){return null==e?e:r$(e,iu(t,3),op)},rh.forOwn=function(e,t){return e&&rH(e,iu(t,3))},rh.forOwnRight=function(e,t){return e&&rK(e,iu(t,3))},rh.get=oc,rh.gt=aD,rh.gte=ak,rh.has=function(e,t){return null!=e&&iC(e,t,rZ)},rh.hasIn=os,rh.head=iK,rh.identity=oU,rh.includes=function(e,t,r,n){e=ax(e)?e:oI(e),r=r&&!n?a4(r):0;var i=e.length;return r<0&&(r=t2(i+r,0)),aX(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&tm(e,t,r)>-1},rh.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return -1;var i=null==r?0:a4(r);return i<0&&(i=t2(n+i,0)),tm(e,t,i)},rh.inRange=function(e,t,n){var i,a,o;return t=a8(t),n===r?(n=t,t=0):n=a8(n),(i=e=a5(e))>=t3(a=t,o=n)&&i<t2(a,o)},rh.invoke=od,rh.isArguments=aP,rh.isArray=aM,rh.isArrayBuffer=aG,rh.isArrayLike=ax,rh.isArrayLikeObject=aU,rh.isBoolean=function(e){return!0===e||!1===e||aH(e)&&rq(e)==f},rh.isBuffer=aV,rh.isDate=aF,rh.isElement=function(e){return aH(e)&&1===e.nodeType&&!aQ(e)},rh.isEmpty=function(e){if(null==e)return!0;if(ax(e)&&(aM(e)||"string"==typeof e||"function"==typeof e.splice||aV(e)||a1(e)||aP(e)))return!e.length;var t=i_(e);if(t==_||t==m)return!e.size;if(iO(e))return!r9(e).length;for(var r in e)if(eD.call(e,r))return!1;return!0},rh.isEqual=function(e,t){return r8(e,t)},rh.isEqualWith=function(e,t,n){var i=(n="function"==typeof n?n:r)?n(e,t):r;return i===r?r8(e,t,r,n):!!i},rh.isError=aw,rh.isFinite=function(e){return"number"==typeof e&&tZ(e)},rh.isFunction=aB,rh.isInteger=aY,rh.isLength=aW,rh.isMap=aK,rh.isMatch=function(e,t){return e===t||r4(e,t,ip(t))},rh.isMatchWith=function(e,t,n){return n="function"==typeof n?n:r,r4(e,t,ip(t),n)},rh.isNaN=function(e){return az(e)&&e!=+e},rh.isNative=function(e){if(iy(e))throw new ev("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return r6(e)},rh.isNil=function(e){return null==e},rh.isNull=function(e){return null===e},rh.isNumber=az,rh.isObject=a$,rh.isObjectLike=aH,rh.isPlainObject=aQ,rh.isRegExp=aJ,rh.isSafeInteger=function(e){return aY(e)&&e>=-0x1fffffffffffff&&e<=0x1fffffffffffff},rh.isSet=aq,rh.isString=aX,rh.isSymbol=aZ,rh.isTypedArray=a1,rh.isUndefined=function(e){return e===r},rh.isWeakMap=function(e){return aH(e)&&i_(e)==y},rh.isWeakSet=function(e){return aH(e)&&"[object WeakSet]"==rq(e)},rh.join=function(e,t){return null==e?"":t1.call(e,t)},rh.kebabCase=oy,rh.last=iq,rh.lastIndexOf=function(e,t,n){var i=null==e?0:e.length;if(!i)return -1;var a=i;return n!==r&&(a=(a=a4(n))<0?t2(i+a,0):t3(a,i-1)),t==t?function(e,t,r){for(var n=r+1;n--&&e[n]!==t;);return n}(e,t,a):tI(e,tS,a,!0)},rh.lowerCase=oO,rh.lowerFirst=oN,rh.lt=a0,rh.lte=a2,rh.max=function(e){return e&&e.length?rw(e,oU,rX):r},rh.maxBy=function(e,t){return e&&e.length?rw(e,iu(t,2),rX):r},rh.mean=function(e){return ty(e,oU)},rh.meanBy=function(e,t){return ty(e,iu(t,2))},rh.min=function(e){return e&&e.length?rw(e,oU,r7):r},rh.minBy=function(e,t){return e&&e.length?rw(e,iu(t,2),r7):r},rh.stubArray=oJ,rh.stubFalse=oq,rh.stubObject=function(){return{}},rh.stubString=function(){return""},rh.stubTrue=function(){return!0},rh.multiply=o2,rh.nth=function(e,t){return e&&e.length?ni(e,a4(t)):r},rh.noConflict=function(){return e4._===this&&(e4._=ex),this},rh.noop=oY,rh.now=a_,rh.pad=function(e,t,r){e=a7(e);var n=(t=a4(t))?t$(e):0;if(!t||n>=t)return e;var i=(t-n)/2;return n0(tJ(i),r)+e+n0(tN(i),r)},rh.padEnd=function(e,t,r){e=a7(e);var n=(t=a4(t))?t$(e):0;return t&&n<t?e+n0(t-n,r):e},rh.padStart=function(e,t,r){e=a7(e);var n=(t=a4(t))?t$(e):0;return t&&n<t?n0(t-n,r)+e:e},rh.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),t4(a7(e).replace(X,""),t||0)},rh.random=function(e,t,n){if(n&&"boolean"!=typeof n&&im(e,t,n)&&(t=n=r),n===r&&("boolean"==typeof t?(n=t,t=r):"boolean"==typeof e&&(n=e,e=r)),e===r&&t===r?(e=0,t=1):(e=a8(e),t===r?(t=e,e=0):t=a8(t)),e>t){var i=e;e=t,t=i}if(n||e%1||t%1){var a=t6();return t3(e+a*(t-e+e0("1e-"+((a+"").length-1))),t)}return nl(e,t)},rh.reduce=function(e,t,r){var n=aM(e)?tg:tR,i=arguments.length<3;return n(e,iu(t,4),r,i,rU)},rh.reduceRight=function(e,t,r){var n=aM(e)?t_:tR,i=arguments.length<3;return n(e,iu(t,4),r,i,rV)},rh.repeat=function(e,t,n){return t=(n?im(e,t,n):t===r)?1:a4(t),nu(a7(e),t)},rh.replace=function(){var e=arguments,t=a7(e[0]);return e.length<3?t:t.replace(e[1],e[2])},rh.result=function(e,t,n){t=nL(t,e);var i=-1,a=t.length;for(a||(a=1,e=r);++i<a;){var o=null==e?r:e[iU(t[i])];o===r&&(i=a,o=n),e=aB(o)?o.call(e):o}return e},rh.round=o3,rh.runInContext=e,rh.sample=function(e){return(aM(e)?ry:function(e){return ry(oI(e))})(e)},rh.size=function(e){if(null==e)return 0;if(ax(e))return aX(e)?t$(e):e.length;var t=i_(e);return t==_||t==m?e.size:r9(e).length},rh.snakeCase=oR,rh.some=function(e,t,n){var i=aM(e)?tC:ng;return n&&im(e,t,n)&&(t=r),i(e,iu(t,3))},rh.sortedIndex=function(e,t){return n_(e,t)},rh.sortedIndexBy=function(e,t,r){return nC(e,t,iu(r,2))},rh.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=n_(e,t);if(n<r&&aL(e[n],t))return n}return -1},rh.sortedLastIndex=function(e,t){return n_(e,t,!0)},rh.sortedLastIndexBy=function(e,t,r){return nC(e,t,iu(r,2),!0)},rh.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var r=n_(e,t,!0)-1;if(aL(e[r],t))return r}return -1},rh.startCase=ob,rh.startsWith=function(e,t,r){return e=a7(e),r=null==r?0:rk(a4(r),0,e.length),t=nI(t),e.slice(r,r+t.length)==t},rh.subtract=o8,rh.sum=function(e){return e&&e.length?tb(e,oU):0},rh.sumBy=function(e,t){return e&&e.length?tb(e,iu(t,2)):0},rh.template=function(e,t,n){var i=rh.templateSettings;n&&im(e,t,n)&&(t=r),e=a7(e),t=or({},t,i,n7);var a,o,c=or({},t.imports,i.imports,n7),s=of(c),l=tk(c,s),u=0,d=t.interpolate||eh,f="__p += '",p=eS((t.escape||eh).source+"|"+d.source+"|"+(d===H?eo:eh).source+"|"+(t.evaluate||eh).source+"|$","g"),h="//# sourceURL="+(eD.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++eq+"]")+`
`;e.replace(p,function(t,r,n,i,c,s){return n||(n=i),f+=e.slice(u,s).replace(eE,tV),r&&(a=!0,f+=`' +
__e(`+r+`) +
'`),c&&(o=!0,f+=`';
`+c+`;
__p += '`),n&&(f+=`' +
((__t = (`+n+`)) == null ? '' : __t) +
'`),u=s+t.length,t}),f+=`';
`;var E=eD.call(t,"variable")&&t.variable;if(E){if(ei.test(E))throw new ev("Invalid `variable` option passed into `_.template`")}else f=`with (obj) {
`+f+`
}
`;f=(o?f.replace(x,""):f).replace(U,"$1").replace(V,"$1;"),f="function("+(E||"obj")+`) {
`+(E?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(a?", __e = _.escape":"")+(o?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+f+`return __p
}`;var g=ok(function(){return eI(s,h+"return "+f).apply(r,l)});if(g.source=f,aw(g))throw g;return g},rh.times=function(e,t){if((e=a4(e))<1||e>0x1fffffffffffff)return[];var r=0xffffffff,n=t3(e,0xffffffff);t=iu(t),e-=0xffffffff;for(var i=tj(n,t);++r<e;)t(r);return i},rh.toFinite=a8,rh.toInteger=a4,rh.toLength=a6,rh.toLower=function(e){return a7(e).toLowerCase()},rh.toNumber=a5,rh.toSafeInteger=function(e){return e?rk(a4(e),-0x1fffffffffffff,0x1fffffffffffff):0===e?e:0},rh.toString=a7,rh.toUpper=function(e){return a7(e).toUpperCase()},rh.trim=function(e,t,n){if((e=a7(e))&&(n||t===r))return tL(e);if(!e||!(t=nI(t)))return e;var i=tH(e),a=tH(t),o=tM(i,a),c=tG(i,a)+1;return nD(i,o,c).join("")},rh.trimEnd=function(e,t,n){if((e=a7(e))&&(n||t===r))return e.slice(0,tK(e)+1);if(!e||!(t=nI(t)))return e;var i=tH(e),a=tG(i,tH(t))+1;return nD(i,0,a).join("")},rh.trimStart=function(e,t,n){if((e=a7(e))&&(n||t===r))return e.replace(X,"");if(!e||!(t=nI(t)))return e;var i=tH(e),a=tM(i,tH(t));return nD(i,a).join("")},rh.truncate=function(e,t){var n=30,i="...";if(a$(t)){var a="separator"in t?t.separator:a;n="length"in t?a4(t.length):n,i="omission"in t?nI(t.omission):i}var o=(e=a7(e)).length;if(tF(e)){var c=tH(e);o=c.length}if(n>=o)return e;var s=n-t$(i);if(s<1)return i;var l=c?nD(c,0,s).join(""):e.slice(0,s);if(a===r)return l+i;if(c&&(s+=l.length-s),aJ(a)){if(e.slice(s).search(a)){var u,d=l;for(a.global||(a=eS(a.source,a7(ec.exec(a))+"g")),a.lastIndex=0;u=a.exec(d);)var f=u.index;l=l.slice(0,f===r?s:f)}}else if(e.indexOf(nI(a),s)!=s){var p=l.lastIndexOf(a);p>-1&&(l=l.slice(0,p))}return l+i},rh.unescape=function(e){return(e=a7(e))&&B.test(e)?e.replace(F,tz):e},rh.uniqueId=function(e){var t=++ek;return a7(e)+t},rh.upperCase=oj,rh.upperFirst=oL,rh.each=al,rh.eachRight=au,rh.first=iK,oB(rh,(e_={},rH(rh,function(e,t){eD.call(rh.prototype,t)||(e_[t]=e)}),e_),{chain:!1}),rh.VERSION="4.17.21",tl(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){rh[e].placeholder=rh}),tl(["drop","take"],function(e,t){rC.prototype[e]=function(n){n=n===r?1:t2(a4(n),0);var i=this.__filtered__&&!t?new rC(this):this.clone();return i.__filtered__?i.__takeCount__=t3(n,i.__takeCount__):i.__views__.push({size:t3(n,0xffffffff),type:e+(i.__dir__<0?"Right":"")}),i},rC.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}}),tl(["filter","map","takeWhile"],function(e,t){var r=t+1,n=1==r||3==r;rC.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:iu(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}}),tl(["head","last"],function(e,t){var r="take"+(t?"Right":"");rC.prototype[e]=function(){return this[r](1).value()[0]}}),tl(["initial","tail"],function(e,t){var r="drop"+(t?"":"Right");rC.prototype[e]=function(){return this.__filtered__?new rC(this):this[r](1)}}),rC.prototype.compact=function(){return this.filter(oU)},rC.prototype.find=function(e){return this.filter(e).head()},rC.prototype.findLast=function(e){return this.reverse().find(e)},rC.prototype.invokeMap=nd(function(e,t){return"function"==typeof e?new rC(this):this.map(function(r){return r2(r,e,t)})}),rC.prototype.reject=function(e){return this.filter(aO(iu(e)))},rC.prototype.slice=function(e,t){e=a4(e);var n=this;return n.__filtered__&&(e>0||t<0)?new rC(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==r&&(n=(t=a4(t))<0?n.dropRight(-t):n.take(t-e)),n)},rC.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},rC.prototype.toArray=function(){return this.take(0xffffffff)},rH(rC.prototype,function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),a=rh[i?"take"+("last"==t?"Right":""):t],o=i||/^find/.test(t);a&&(rh.prototype[t]=function(){var t=this.__wrapped__,c=i?[1]:arguments,s=t instanceof rC,l=c[0],u=s||aM(t),d=function(e){var t=a.apply(rh,tE([e],c));return i&&f?t[0]:t};u&&n&&"function"==typeof l&&1!=l.length&&(s=u=!1);var f=this.__chain__,p=!!this.__actions__.length,h=o&&!f,E=s&&!p;if(!o&&u){t=E?t:new rC(this);var g=e.apply(t,c);return g.__actions__.push({func:ai,args:[d],thisArg:r}),new r_(g,f)}return h&&E?e.apply(this,c):(g=this.thru(d),h?i?g.value()[0]:g.value():g)})}),tl(["pop","push","shift","sort","splice","unshift"],function(e){var t=eN[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);rh.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var i=this.value();return t.apply(aM(i)?i:[],e)}return this[r](function(r){return t.apply(aM(r)?r:[],e)})}}),rH(rC.prototype,function(e,t){var r=rh[t];if(r){var n=r.name+"";eD.call(ra,n)||(ra[n]=[]),ra[n].push({name:t,func:r})}}),ra[nq(r,2).name]=[{name:"wrapper",func:r}],rC.prototype.clone=function(){var e=new rC(this.__wrapped__);return e.__actions__=nF(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=nF(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=nF(this.__views__),e},rC.prototype.reverse=function(){if(this.__filtered__){var e=new rC(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e},rC.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=aM(e),n=t<0,i=r?e.length:0,a=function(e,t,r){for(var n=-1,i=r.length;++n<i;){var a=r[n],o=a.size;switch(a.type){case"drop":e+=o;break;case"dropRight":t-=o;break;case"take":t=t3(t,e+o);break;case"takeRight":e=t2(e,t-o)}}return{start:e,end:t}}(0,i,this.__views__),o=a.start,c=a.end,s=c-o,l=n?c:o-1,u=this.__iteratees__,d=u.length,f=0,p=t3(s,this.__takeCount__);if(!r||!n&&i==s&&p==s)return nO(e,this.__actions__);var h=[];e:for(;s--&&f<p;){l+=t;for(var E=-1,g=e[l];++E<d;){var _=u[E],C=_.iteratee,A=_.type,v=C(g);if(2==A)g=v;else if(!v){if(1==A)continue e;break e}}h[f++]=g}return h},rh.prototype.at=aa,rh.prototype.chain=function(){return an(this)},rh.prototype.commit=function(){return new r_(this.value(),this.__chain__)},rh.prototype.next=function(){this.__values__===r&&(this.__values__=a3(this.value()));var e=this.__index__>=this.__values__.length,t=e?r:this.__values__[this.__index__++];return{done:e,value:t}},rh.prototype.plant=function(e){for(var t,n=this;n instanceof rg;){var i=iF(n);i.__index__=0,i.__values__=r,t?a.__wrapped__=i:t=i;var a=i;n=n.__wrapped__}return a.__wrapped__=e,t},rh.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof rC){var t=e;return this.__actions__.length&&(t=new rC(this)),(t=t.reverse()).__actions__.push({func:ai,args:[i0],thisArg:r}),new r_(t,this.__chain__)}return this.thru(i0)},rh.prototype.toJSON=rh.prototype.valueOf=rh.prototype.value=function(){return nO(this.__wrapped__,this.__actions__)},rh.prototype.first=rh.prototype.head,e8&&(rh.prototype[e8]=function(){return this}),rh}();e5?((e5.exports=tQ)._=tQ,e6._=tQ):e4._=tQ}).call(o)}(c,c.exports);let s=(r=c.exports)&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r;var l={"fanfanlo/javajs/v1/a11y/a11yUtils":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({
            get Types(){
                return javaLib["fanfanlo/javajs/v1/a11y/node/ICondition"].Types;
            }
            ,
            get Action(){
                return javaLib["fanfanlo/javajs/v1/a11y/node/ICondition"].Action;
            }
            ,
            get Wait(){
                return javaLib["fanfanlo/javajs/v1/a11y/node/ICondition"].Wait;
            }
            }){
            \r
\r
function checkIsPackageActivities(pn, activities){\r
    let packageName = a11yModel.lastFullScreenPackage;\r
    let activityName = a11yModel.lastFullScreenActivity;\r
    let pnMatched = pn == packageName;\r
    let anMatched = activities.some(an=>an==activityName);\r
    console.log("aaaaaaaaaaaaaapppppppppp", pnMatched, anMatched)\r
    return pnMatched && anMatched;\r
}\r
\r
function checkNodesOnShow(pn, conditions, checkList, callback){\r
    function cb(nodes){\r
        if(!isScriptRunnable)return;\r
        if(!nodes){\r
            callback(undefined, false, undefined, undefined)\r
            return;\r
        }\r
        if(!checkList){\r
            callback(nodes, true, undefined, undefined)\r
            return;\r
        }\r
        for (let i = 0; i < checkList.length; i++) {\r
            let list = checkList[i];\r
            let isOk = list.every((data)=>nodes[data.index] != null);\r
            if(isOk){\r
                callback(nodes, isOk, undefined, list);\r
                return;\r
            }\r
        }\r
        callback(nodes, false, undefined, undefined)\r
    }\r
    function onError(err){\r
        callback(undefined, false, err, undefined)\r
    }\r
    let proxy = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SfProxy();\r
    let job = proxy.find(a11yModel, pn, conditions, cb, onError);\r
    return job;\r
}\r
function conditionJsonToData(data){\r
    let s = JSON.stringify(data);\r
    // return com.fanfanlo.droidlib.auto.command.objectmapper.projectObjectMapper.stringToSfRoot(s)\r
    return com.fanfanlo.droidlib.auto.command.objectmapper.projectObjectMapper.stringToSfCond(s)\r
}\r
function createCheckNodesOnShow(data, callback, logger){\r
    if(logger) logger = logger.createSub(\`checkNodesOnShowFn-\${data.name}\`)\r
    let nodeConditions = JSON.parse(JSON.stringify(data.nodeConditions))\r
    let conditions = nodeConditions.map(cond=>{\r
        let root = cond;\r
        while(cond){\r
            cond.type = Types[cond.type];\r
            if(cond.action){\r
                cond.action.type = Action[cond.action.type]\r
            }\r
            if(cond.wait){\r
                cond.wait.type = Wait[cond.wait.type]\r
            }\r
            cond = cond.next;\r
        }\r
        return conditionJsonToData(root)\r
    })\r
    data.conditions = conditions;\r
    let lastCheckNodesIntervalTime = 0;\r
    let lastJob = undefined;\r
    function check(){\r
        let now = Date.now();\r
        if(lastJob){\r
            let checkNodesCancelPrevJobMaxIntervalTime = data.checkNodesCancelPrevJobMaxIntervalTime || 1000 * 1;\r
            let diff = now - lastCheckNodesIntervalTime;\r
            if(diff < checkNodesCancelPrevJobMaxIntervalTime){\r
                lastJob.cancel();\r
            }\r
        }\r
        function cb(nodes, isOk, err, matchedCheckList){\r
            logger.log("1on1 cb", isOk, err)\r
            if(!isOk){\r
                logger.log(\`1on1 cb not ok\`, conditions)\r
            }\r
            lastCheckNodesIntervalTime = now;\r
            callback(nodes, isOk, err, matchedCheckList);\r
        }\r
        lastJob = checkNodesOnShow(data.packageName, conditions, data.nodeCheckList, cb)\r
        return lastJob;\r
    }\r
    return {check}\r
}\r
\r
function keyboardIsOpen(){\r
    return com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.checkKeyboardIsOpened(a11yModel.service);\r
}\r
let prevGlobalBackKeyTime = 0;\r
let globalBackKeyInterval = 100 * 25;\r
// 如果ime已经打开则会尝试关闭ime并返回true\r
// 否则返回false\r
function hideIme(){\r
    // if(!checkCanGlobalActionBack())return false;\r
    let isIme = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.checkKeyboardIsOpened(a11yModel.service);\r
    console.log("iiiiiiiiiiiis ime", isIme);\r
    if(isIme){\r
        let bl = com.fanfanlo.lib.utils.KeyboardUtils.hideKeyboard();\r
        console.log("hide ime222", bl);\r
        return bl\r
    }\r
    return false;\r
}\r
\r
function globalActionBack(globalBackActionIntervalTime){\r
    console.log("globalActionBack1")\r
    if(!checkCanGlobalActionBack(globalBackActionIntervalTime))return false;\r
    let bl = a11yModel.globalActionBack();\r
    if(bl){\r
        prevGlobalBackKeyTime = Date.now();\r
    }\r
    console.log("globalActionBack2", bl)\r
    return bl;\r
}\r
function checkCanGlobalActionBack(globalBackActionIntervalTime){\r
    let now = Date.now();\r
    let diff = now - prevGlobalBackKeyTime;\r
    let time = globalBackActionIntervalTime == undefined || globalBackActionIntervalTime <= 0 ? globalBackKeyInterval : globalBackActionIntervalTime\r
    let bl =  diff > time;\r
    console.log("1checkCanGlobalActionBack1 back", bl, diff, now, prevGlobalBackKeyTime);\r
    return bl;\r
}\r
// 如果package已经打开并且ime也是open，则会尝试关闭ime，返回true\r
// 否则返回false\r
function hideImeIfPackageOpened(pn){\r
    let win = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.getWindowByPackageName(a11yModel.service, pn, false, -1);\r
    console.log("hideImeIfPackageOpened1 win!=null", win != null, pn)\r
    if(!win)return false;\r
    return hideIme();\r
}\r
\r
function createNodeAction(actionConf){\r
    let type = actionConf.type;\r
    let nodeAction;\r
    switch (type){\r
        case "Click":\r
            nodeAction = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.Click();\r
            break;\r
        case "LongClick":\r
            nodeAction = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.LongClick();\r
            break;\r
        case "TryClick":\r
            nodeAction = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.TryClick();\r
            break;\r
        case "TryLongClick":\r
            nodeAction = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.TryLongClick();\r
            break;\r
        case "SetText":\r
            nodeAction = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SetText(actionConf.value);\r
            break;\r
        default:\r
            let msg = \`no action matched, \${type}\`\r
            console.log(\`createNodeAction1\`, actionConf)\r
            throw new Error(msg)\r
    }\r
    return nodeAction\r
}\r
return {checkIsPackageActivities, checkNodesOnShow, createCheckNodesOnShow, hideIme, hideImeIfPackageOpened, checkCanGlobalActionBack, globalActionBack, keyboardIsOpen, createNodeAction}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/a11y/a11yUtils.java.js", e);
    }
    })()
    `,dependencies:[{path:"fanfanlo/javajs/v1/a11y/node/ICondition",properties:["Types"," Action"," Wait"]}]},"fanfanlo/javajs/v1/event/createEventDispatcher":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({}){
            \r
function createEventDispatcher(){\r
    return new com.fanfanlo.lib.event.EventDispatcher()\r
}\r
\r
return {createEventDispatcher}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/event/createEventDispatcher.java.js", e);
    }
    })()
    `,dependencies:[]},"fanfanlo/javajs/v1/permission/permission":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({}){
            let PermissionGroup = {\r
\r
    ACTIVITY_RECOGNITION : "android.permission-group.ACTIVITY_RECOGNITION",\r
    CALENDAR : "android.permission-group.CALENDAR",\r
    CALL_LOG : "android.permission-group.CALL_LOG",\r
    CAMERA : "android.permission-group.CAMERA",\r
    CONTACTS : "android.permission-group.CONTACTS",\r
    LOCATION : "android.permission-group.LOCATION",\r
    MICROPHONE : "android.permission-group.MICROPHONE",\r
    NEARBY_DEVICES : "android.permission-group.NEARBY_DEVICES",\r
    NOTIFICATIONS : "android.permission-group.NOTIFICATIONS",\r
    PHONE : "android.permission-group.PHONE",\r
    READ_MEDIA_AURAL : "android.permission-group.READ_MEDIA_AURAL",\r
    READ_MEDIA_VISUAL : "android.permission-group.READ_MEDIA_VISUAL",\r
    SENSORS : "android.permission-group.SENSORS",\r
    SMS : "android.permission-group.SMS",\r
    STORAGE : "android.permission-group.STORAGE",\r
}\r
\r
let Permission = {\r
\r
    ACCEPT_HANDOVER : "android.permission.ACCEPT_HANDOVER",\r
    ACCESS_BACKGROUND_LOCATION : "android.permission.ACCESS_BACKGROUND_LOCATION",\r
    ACCESS_BLOBS_ACROSS_USERS : "android.permission.ACCESS_BLOBS_ACROSS_USERS",\r
    ACCESS_CHECKIN_PROPERTIES : "android.permission.ACCESS_CHECKIN_PROPERTIES",\r
    ACCESS_COARSE_LOCATION : "android.permission.ACCESS_COARSE_LOCATION",\r
    ACCESS_FINE_LOCATION : "android.permission.ACCESS_FINE_LOCATION",\r
    ACCESS_LOCATION_EXTRA_COMMANDS : "android.permission.ACCESS_LOCATION_EXTRA_COMMANDS",\r
    ACCESS_MEDIA_LOCATION : "android.permission.ACCESS_MEDIA_LOCATION",\r
    ACCESS_NETWORK_STATE : "android.permission.ACCESS_NETWORK_STATE",\r
    ACCESS_NOTIFICATION_POLICY : "android.permission.ACCESS_NOTIFICATION_POLICY",\r
    ACCESS_WIFI_STATE : "android.permission.ACCESS_WIFI_STATE",\r
    ACCOUNT_MANAGER : "android.permission.ACCOUNT_MANAGER",\r
    ACTIVITY_RECOGNITION : "android.permission.ACTIVITY_RECOGNITION",\r
    ADD_VOICEMAIL : "com.android.voicemail.permission.ADD_VOICEMAIL",\r
    ANSWER_PHONE_CALLS : "android.permission.ANSWER_PHONE_CALLS",\r
    BATTERY_STATS : "android.permission.BATTERY_STATS",\r
    BIND_ACCESSIBILITY_SERVICE : "android.permission.BIND_ACCESSIBILITY_SERVICE",\r
    BIND_APPWIDGET : "android.permission.BIND_APPWIDGET",\r
    BIND_AUTOFILL_SERVICE : "android.permission.BIND_AUTOFILL_SERVICE",\r
    BIND_CALL_REDIRECTION_SERVICE : "android.permission.BIND_CALL_REDIRECTION_SERVICE",\r
    BIND_CARRIER_MESSAGING_CLIENT_SERVICE : "android.permission.BIND_CARRIER_MESSAGING_CLIENT_SERVICE",\r
    /** @deprecated */\r
\r
    BIND_CARRIER_MESSAGING_SERVICE : "android.permission.BIND_CARRIER_MESSAGING_SERVICE",\r
    BIND_CARRIER_SERVICES : "android.permission.BIND_CARRIER_SERVICES",\r
    /** @deprecated */\r
\r
    BIND_CHOOSER_TARGET_SERVICE : "android.permission.BIND_CHOOSER_TARGET_SERVICE",\r
    BIND_COMPANION_DEVICE_SERVICE : "android.permission.BIND_COMPANION_DEVICE_SERVICE",\r
    BIND_CONDITION_PROVIDER_SERVICE : "android.permission.BIND_CONDITION_PROVIDER_SERVICE",\r
    BIND_CONTROLS : "android.permission.BIND_CONTROLS",\r
    BIND_CREDENTIAL_PROVIDER_SERVICE : "android.permission.BIND_CREDENTIAL_PROVIDER_SERVICE",\r
    BIND_DEVICE_ADMIN : "android.permission.BIND_DEVICE_ADMIN",\r
    BIND_DREAM_SERVICE : "android.permission.BIND_DREAM_SERVICE",\r
    BIND_INCALL_SERVICE : "android.permission.BIND_INCALL_SERVICE",\r
    BIND_INPUT_METHOD : "android.permission.BIND_INPUT_METHOD",\r
    BIND_MIDI_DEVICE_SERVICE : "android.permission.BIND_MIDI_DEVICE_SERVICE",\r
    BIND_NFC_SERVICE : "android.permission.BIND_NFC_SERVICE",\r
    BIND_NOTIFICATION_LISTENER_SERVICE : "android.permission.BIND_NOTIFICATION_LISTENER_SERVICE",\r
    BIND_PRINT_SERVICE : "android.permission.BIND_PRINT_SERVICE",\r
    BIND_QUICK_ACCESS_WALLET_SERVICE : "android.permission.BIND_QUICK_ACCESS_WALLET_SERVICE",\r
    BIND_QUICK_SETTINGS_TILE : "android.permission.BIND_QUICK_SETTINGS_TILE",\r
    BIND_REMOTEVIEWS : "android.permission.BIND_REMOTEVIEWS",\r
    BIND_SCREENING_SERVICE : "android.permission.BIND_SCREENING_SERVICE",\r
    BIND_TELECOM_CONNECTION_SERVICE : "android.permission.BIND_TELECOM_CONNECTION_SERVICE",\r
    BIND_TEXT_SERVICE : "android.permission.BIND_TEXT_SERVICE",\r
    BIND_TV_INPUT : "android.permission.BIND_TV_INPUT",\r
    BIND_TV_INTERACTIVE_APP : "android.permission.BIND_TV_INTERACTIVE_APP",\r
    BIND_VISUAL_VOICEMAIL_SERVICE : "android.permission.BIND_VISUAL_VOICEMAIL_SERVICE",\r
    BIND_VOICE_INTERACTION : "android.permission.BIND_VOICE_INTERACTION",\r
    BIND_VPN_SERVICE : "android.permission.BIND_VPN_SERVICE",\r
    BIND_VR_LISTENER_SERVICE : "android.permission.BIND_VR_LISTENER_SERVICE",\r
    BIND_WALLPAPER : "android.permission.BIND_WALLPAPER",\r
    BLUETOOTH : "android.permission.BLUETOOTH",\r
    BLUETOOTH_ADMIN : "android.permission.BLUETOOTH_ADMIN",\r
    BLUETOOTH_ADVERTISE : "android.permission.BLUETOOTH_ADVERTISE",\r
    BLUETOOTH_CONNECT : "android.permission.BLUETOOTH_CONNECT",\r
    BLUETOOTH_PRIVILEGED : "android.permission.BLUETOOTH_PRIVILEGED",\r
    BLUETOOTH_SCAN : "android.permission.BLUETOOTH_SCAN",\r
    BODY_SENSORS : "android.permission.BODY_SENSORS",\r
    BODY_SENSORS_BACKGROUND : "android.permission.BODY_SENSORS_BACKGROUND",\r
    BROADCAST_PACKAGE_REMOVED : "android.permission.BROADCAST_PACKAGE_REMOVED",\r
    BROADCAST_SMS : "android.permission.BROADCAST_SMS",\r
    BROADCAST_STICKY : "android.permission.BROADCAST_STICKY",\r
    BROADCAST_WAP_PUSH : "android.permission.BROADCAST_WAP_PUSH",\r
    CALL_COMPANION_APP : "android.permission.CALL_COMPANION_APP",\r
    CALL_PHONE : "android.permission.CALL_PHONE",\r
    CALL_PRIVILEGED : "android.permission.CALL_PRIVILEGED",\r
    CAMERA : "android.permission.CAMERA",\r
    CAPTURE_AUDIO_OUTPUT : "android.permission.CAPTURE_AUDIO_OUTPUT",\r
    CHANGE_COMPONENT_ENABLED_STATE : "android.permission.CHANGE_COMPONENT_ENABLED_STATE",\r
    CHANGE_CONFIGURATION : "android.permission.CHANGE_CONFIGURATION",\r
    CHANGE_NETWORK_STATE : "android.permission.CHANGE_NETWORK_STATE",\r
    CHANGE_WIFI_MULTICAST_STATE : "android.permission.CHANGE_WIFI_MULTICAST_STATE",\r
    CHANGE_WIFI_STATE : "android.permission.CHANGE_WIFI_STATE",\r
    CLEAR_APP_CACHE : "android.permission.CLEAR_APP_CACHE",\r
    CONFIGURE_WIFI_DISPLAY : "android.permission.CONFIGURE_WIFI_DISPLAY",\r
    CONTROL_LOCATION_UPDATES : "android.permission.CONTROL_LOCATION_UPDATES",\r
    CREDENTIAL_MANAGER_QUERY_CANDIDATE_CREDENTIALS : "android.permission.CREDENTIAL_MANAGER_QUERY_CANDIDATE_CREDENTIALS",\r
    CREDENTIAL_MANAGER_SET_ALLOWED_PROVIDERS : "android.permission.CREDENTIAL_MANAGER_SET_ALLOWED_PROVIDERS",\r
    CREDENTIAL_MANAGER_SET_ORIGIN : "android.permission.CREDENTIAL_MANAGER_SET_ORIGIN",\r
    DELETE_CACHE_FILES : "android.permission.DELETE_CACHE_FILES",\r
    DELETE_PACKAGES : "android.permission.DELETE_PACKAGES",\r
    DELIVER_COMPANION_MESSAGES : "android.permission.DELIVER_COMPANION_MESSAGES",\r
    DETECT_SCREEN_CAPTURE : "android.permission.DETECT_SCREEN_CAPTURE",\r
    DIAGNOSTIC : "android.permission.DIAGNOSTIC",\r
    DISABLE_KEYGUARD : "android.permission.DISABLE_KEYGUARD",\r
    DUMP : "android.permission.DUMP",\r
    ENFORCE_UPDATE_OWNERSHIP : "android.permission.ENFORCE_UPDATE_OWNERSHIP",\r
    EXECUTE_APP_ACTION : "android.permission.EXECUTE_APP_ACTION",\r
    EXPAND_STATUS_BAR : "android.permission.EXPAND_STATUS_BAR",\r
    FACTORY_TEST : "android.permission.FACTORY_TEST",\r
    FOREGROUND_SERVICE : "android.permission.FOREGROUND_SERVICE",\r
    FOREGROUND_SERVICE_CAMERA : "android.permission.FOREGROUND_SERVICE_CAMERA",\r
    FOREGROUND_SERVICE_CONNECTED_DEVICE : "android.permission.FOREGROUND_SERVICE_CONNECTED_DEVICE",\r
    FOREGROUND_SERVICE_DATA_SYNC : "android.permission.FOREGROUND_SERVICE_DATA_SYNC",\r
    FOREGROUND_SERVICE_HEALTH : "android.permission.FOREGROUND_SERVICE_HEALTH",\r
    FOREGROUND_SERVICE_LOCATION : "android.permission.FOREGROUND_SERVICE_LOCATION",\r
    FOREGROUND_SERVICE_MEDIA_PLAYBACK : "android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK",\r
    FOREGROUND_SERVICE_MEDIA_PROJECTION : "android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION",\r
    FOREGROUND_SERVICE_MICROPHONE : "android.permission.FOREGROUND_SERVICE_MICROPHONE",\r
    FOREGROUND_SERVICE_PHONE_CALL : "android.permission.FOREGROUND_SERVICE_PHONE_CALL",\r
    FOREGROUND_SERVICE_REMOTE_MESSAGING : "android.permission.FOREGROUND_SERVICE_REMOTE_MESSAGING",\r
    FOREGROUND_SERVICE_SPECIAL_USE : "android.permission.FOREGROUND_SERVICE_SPECIAL_USE",\r
    FOREGROUND_SERVICE_SYSTEM_EXEMPTED : "android.permission.FOREGROUND_SERVICE_SYSTEM_EXEMPTED",\r
    GET_ACCOUNTS : "android.permission.GET_ACCOUNTS",\r
    GET_ACCOUNTS_PRIVILEGED : "android.permission.GET_ACCOUNTS_PRIVILEGED",\r
    GET_PACKAGE_SIZE : "android.permission.GET_PACKAGE_SIZE",\r
    /** @deprecated */\r
\r
    GET_TASKS : "android.permission.GET_TASKS",\r
    GLOBAL_SEARCH : "android.permission.GLOBAL_SEARCH",\r
    HIDE_OVERLAY_WINDOWS : "android.permission.HIDE_OVERLAY_WINDOWS",\r
    HIGH_SAMPLING_RATE_SENSORS : "android.permission.HIGH_SAMPLING_RATE_SENSORS",\r
    INSTALL_LOCATION_PROVIDER : "android.permission.INSTALL_LOCATION_PROVIDER",\r
    INSTALL_PACKAGES : "android.permission.INSTALL_PACKAGES",\r
    INSTALL_SHORTCUT : "com.android.launcher.permission.INSTALL_SHORTCUT",\r
    INSTANT_APP_FOREGROUND_SERVICE : "android.permission.INSTANT_APP_FOREGROUND_SERVICE",\r
    INTERACT_ACROSS_PROFILES : "android.permission.INTERACT_ACROSS_PROFILES",\r
    INTERNET : "android.permission.INTERNET",\r
    KILL_BACKGROUND_PROCESSES : "android.permission.KILL_BACKGROUND_PROCESSES",\r
    LAUNCH_CAPTURE_CONTENT_ACTIVITY_FOR_NOTE : "android.permission.LAUNCH_CAPTURE_CONTENT_ACTIVITY_FOR_NOTE",\r
    LAUNCH_MULTI_PANE_SETTINGS_DEEP_LINK : "android.permission.LAUNCH_MULTI_PANE_SETTINGS_DEEP_LINK",\r
    LOADER_USAGE_STATS : "android.permission.LOADER_USAGE_STATS",\r
    LOCATION_HARDWARE : "android.permission.LOCATION_HARDWARE",\r
    MANAGE_DEVICE_LOCK_STATE : "android.permission.MANAGE_DEVICE_LOCK_STATE",\r
    MANAGE_DEVICE_POLICY_ACCESSIBILITY : "android.permission.MANAGE_DEVICE_POLICY_ACCESSIBILITY",\r
    MANAGE_DEVICE_POLICY_ACCOUNT_MANAGEMENT : "android.permission.MANAGE_DEVICE_POLICY_ACCOUNT_MANAGEMENT",\r
    MANAGE_DEVICE_POLICY_ACROSS_USERS : "android.permission.MANAGE_DEVICE_POLICY_ACROSS_USERS",\r
    MANAGE_DEVICE_POLICY_ACROSS_USERS_FULL : "android.permission.MANAGE_DEVICE_POLICY_ACROSS_USERS_FULL",\r
    MANAGE_DEVICE_POLICY_ACROSS_USERS_SECURITY_CRITICAL : "android.permission.MANAGE_DEVICE_POLICY_ACROSS_USERS_SECURITY_CRITICAL",\r
    MANAGE_DEVICE_POLICY_AIRPLANE_MODE : "android.permission.MANAGE_DEVICE_POLICY_AIRPLANE_MODE",\r
    MANAGE_DEVICE_POLICY_APPS_CONTROL : "android.permission.MANAGE_DEVICE_POLICY_APPS_CONTROL",\r
    MANAGE_DEVICE_POLICY_APP_RESTRICTIONS : "android.permission.MANAGE_DEVICE_POLICY_APP_RESTRICTIONS",\r
    MANAGE_DEVICE_POLICY_APP_USER_DATA : "android.permission.MANAGE_DEVICE_POLICY_APP_USER_DATA",\r
    MANAGE_DEVICE_POLICY_AUDIO_OUTPUT : "android.permission.MANAGE_DEVICE_POLICY_AUDIO_OUTPUT",\r
    MANAGE_DEVICE_POLICY_AUTOFILL : "android.permission.MANAGE_DEVICE_POLICY_AUTOFILL",\r
    MANAGE_DEVICE_POLICY_BACKUP_SERVICE : "android.permission.MANAGE_DEVICE_POLICY_BACKUP_SERVICE",\r
    MANAGE_DEVICE_POLICY_BLUETOOTH : "android.permission.MANAGE_DEVICE_POLICY_BLUETOOTH",\r
    MANAGE_DEVICE_POLICY_BUGREPORT : "android.permission.MANAGE_DEVICE_POLICY_BUGREPORT",\r
    MANAGE_DEVICE_POLICY_CALLS : "android.permission.MANAGE_DEVICE_POLICY_CALLS",\r
    MANAGE_DEVICE_POLICY_CAMERA : "android.permission.MANAGE_DEVICE_POLICY_CAMERA",\r
    MANAGE_DEVICE_POLICY_CERTIFICATES : "android.permission.MANAGE_DEVICE_POLICY_CERTIFICATES",\r
    MANAGE_DEVICE_POLICY_COMMON_CRITERIA_MODE : "android.permission.MANAGE_DEVICE_POLICY_COMMON_CRITERIA_MODE",\r
    MANAGE_DEVICE_POLICY_DEBUGGING_FEATURES : "android.permission.MANAGE_DEVICE_POLICY_DEBUGGING_FEATURES",\r
    MANAGE_DEVICE_POLICY_DEFAULT_SMS : "android.permission.MANAGE_DEVICE_POLICY_DEFAULT_SMS",\r
    MANAGE_DEVICE_POLICY_DEVICE_IDENTIFIERS : "android.permission.MANAGE_DEVICE_POLICY_DEVICE_IDENTIFIERS",\r
    MANAGE_DEVICE_POLICY_DISPLAY : "android.permission.MANAGE_DEVICE_POLICY_DISPLAY",\r
    MANAGE_DEVICE_POLICY_FACTORY_RESET : "android.permission.MANAGE_DEVICE_POLICY_FACTORY_RESET",\r
    MANAGE_DEVICE_POLICY_FUN : "android.permission.MANAGE_DEVICE_POLICY_FUN",\r
    MANAGE_DEVICE_POLICY_INPUT_METHODS : "android.permission.MANAGE_DEVICE_POLICY_INPUT_METHODS",\r
    MANAGE_DEVICE_POLICY_INSTALL_UNKNOWN_SOURCES : "android.permission.MANAGE_DEVICE_POLICY_INSTALL_UNKNOWN_SOURCES",\r
    MANAGE_DEVICE_POLICY_KEEP_UNINSTALLED_PACKAGES : "android.permission.MANAGE_DEVICE_POLICY_KEEP_UNINSTALLED_PACKAGES",\r
    MANAGE_DEVICE_POLICY_KEYGUARD : "android.permission.MANAGE_DEVICE_POLICY_KEYGUARD",\r
    MANAGE_DEVICE_POLICY_LOCALE : "android.permission.MANAGE_DEVICE_POLICY_LOCALE",\r
    MANAGE_DEVICE_POLICY_LOCATION : "android.permission.MANAGE_DEVICE_POLICY_LOCATION",\r
    MANAGE_DEVICE_POLICY_LOCK : "android.permission.MANAGE_DEVICE_POLICY_LOCK",\r
    MANAGE_DEVICE_POLICY_LOCK_CREDENTIALS : "android.permission.MANAGE_DEVICE_POLICY_LOCK_CREDENTIALS",\r
    MANAGE_DEVICE_POLICY_LOCK_TASK : "android.permission.MANAGE_DEVICE_POLICY_LOCK_TASK",\r
    MANAGE_DEVICE_POLICY_METERED_DATA : "android.permission.MANAGE_DEVICE_POLICY_METERED_DATA",\r
    MANAGE_DEVICE_POLICY_MICROPHONE : "android.permission.MANAGE_DEVICE_POLICY_MICROPHONE",\r
    MANAGE_DEVICE_POLICY_MOBILE_NETWORK : "android.permission.MANAGE_DEVICE_POLICY_MOBILE_NETWORK",\r
    MANAGE_DEVICE_POLICY_MODIFY_USERS : "android.permission.MANAGE_DEVICE_POLICY_MODIFY_USERS",\r
    MANAGE_DEVICE_POLICY_MTE : "android.permission.MANAGE_DEVICE_POLICY_MTE",\r
    MANAGE_DEVICE_POLICY_NEARBY_COMMUNICATION : "android.permission.MANAGE_DEVICE_POLICY_NEARBY_COMMUNICATION",\r
    MANAGE_DEVICE_POLICY_NETWORK_LOGGING : "android.permission.MANAGE_DEVICE_POLICY_NETWORK_LOGGING",\r
    MANAGE_DEVICE_POLICY_ORGANIZATION_IDENTITY : "android.permission.MANAGE_DEVICE_POLICY_ORGANIZATION_IDENTITY",\r
    MANAGE_DEVICE_POLICY_OVERRIDE_APN : "android.permission.MANAGE_DEVICE_POLICY_OVERRIDE_APN",\r
    MANAGE_DEVICE_POLICY_PACKAGE_STATE : "android.permission.MANAGE_DEVICE_POLICY_PACKAGE_STATE",\r
    MANAGE_DEVICE_POLICY_PHYSICAL_MEDIA : "android.permission.MANAGE_DEVICE_POLICY_PHYSICAL_MEDIA",\r
    MANAGE_DEVICE_POLICY_PRINTING : "android.permission.MANAGE_DEVICE_POLICY_PRINTING",\r
    MANAGE_DEVICE_POLICY_PRIVATE_DNS : "android.permission.MANAGE_DEVICE_POLICY_PRIVATE_DNS",\r
    MANAGE_DEVICE_POLICY_PROFILES : "android.permission.MANAGE_DEVICE_POLICY_PROFILES",\r
    MANAGE_DEVICE_POLICY_PROFILE_INTERACTION : "android.permission.MANAGE_DEVICE_POLICY_PROFILE_INTERACTION",\r
    MANAGE_DEVICE_POLICY_PROXY : "android.permission.MANAGE_DEVICE_POLICY_PROXY",\r
    MANAGE_DEVICE_POLICY_QUERY_SYSTEM_UPDATES : "android.permission.MANAGE_DEVICE_POLICY_QUERY_SYSTEM_UPDATES",\r
    MANAGE_DEVICE_POLICY_RESET_PASSWORD : "android.permission.MANAGE_DEVICE_POLICY_RESET_PASSWORD",\r
    MANAGE_DEVICE_POLICY_RESTRICT_PRIVATE_DNS : "android.permission.MANAGE_DEVICE_POLICY_RESTRICT_PRIVATE_DNS",\r
    MANAGE_DEVICE_POLICY_RUNTIME_PERMISSIONS : "android.permission.MANAGE_DEVICE_POLICY_RUNTIME_PERMISSIONS",\r
    MANAGE_DEVICE_POLICY_RUN_IN_BACKGROUND : "android.permission.MANAGE_DEVICE_POLICY_RUN_IN_BACKGROUND",\r
    MANAGE_DEVICE_POLICY_SAFE_BOOT : "android.permission.MANAGE_DEVICE_POLICY_SAFE_BOOT",\r
    MANAGE_DEVICE_POLICY_SCREEN_CAPTURE : "android.permission.MANAGE_DEVICE_POLICY_SCREEN_CAPTURE",\r
    MANAGE_DEVICE_POLICY_SCREEN_CONTENT : "android.permission.MANAGE_DEVICE_POLICY_SCREEN_CONTENT",\r
    MANAGE_DEVICE_POLICY_SECURITY_LOGGING : "android.permission.MANAGE_DEVICE_POLICY_SECURITY_LOGGING",\r
    MANAGE_DEVICE_POLICY_SETTINGS : "android.permission.MANAGE_DEVICE_POLICY_SETTINGS",\r
    MANAGE_DEVICE_POLICY_SMS : "android.permission.MANAGE_DEVICE_POLICY_SMS",\r
    MANAGE_DEVICE_POLICY_STATUS_BAR : "android.permission.MANAGE_DEVICE_POLICY_STATUS_BAR",\r
    MANAGE_DEVICE_POLICY_SUPPORT_MESSAGE : "android.permission.MANAGE_DEVICE_POLICY_SUPPORT_MESSAGE",\r
    MANAGE_DEVICE_POLICY_SUSPEND_PERSONAL_APPS : "android.permission.MANAGE_DEVICE_POLICY_SUSPEND_PERSONAL_APPS",\r
    MANAGE_DEVICE_POLICY_SYSTEM_APPS : "android.permission.MANAGE_DEVICE_POLICY_SYSTEM_APPS",\r
    MANAGE_DEVICE_POLICY_SYSTEM_DIALOGS : "android.permission.MANAGE_DEVICE_POLICY_SYSTEM_DIALOGS",\r
    MANAGE_DEVICE_POLICY_SYSTEM_UPDATES : "android.permission.MANAGE_DEVICE_POLICY_SYSTEM_UPDATES",\r
    MANAGE_DEVICE_POLICY_TIME : "android.permission.MANAGE_DEVICE_POLICY_TIME",\r
    MANAGE_DEVICE_POLICY_USB_DATA_SIGNALLING : "android.permission.MANAGE_DEVICE_POLICY_USB_DATA_SIGNALLING",\r
    MANAGE_DEVICE_POLICY_USB_FILE_TRANSFER : "android.permission.MANAGE_DEVICE_POLICY_USB_FILE_TRANSFER",\r
    MANAGE_DEVICE_POLICY_USERS : "android.permission.MANAGE_DEVICE_POLICY_USERS",\r
    MANAGE_DEVICE_POLICY_VPN : "android.permission.MANAGE_DEVICE_POLICY_VPN",\r
    MANAGE_DEVICE_POLICY_WALLPAPER : "android.permission.MANAGE_DEVICE_POLICY_WALLPAPER",\r
    MANAGE_DEVICE_POLICY_WIFI : "android.permission.MANAGE_DEVICE_POLICY_WIFI",\r
    MANAGE_DEVICE_POLICY_WINDOWS : "android.permission.MANAGE_DEVICE_POLICY_WINDOWS",\r
    MANAGE_DEVICE_POLICY_WIPE_DATA : "android.permission.MANAGE_DEVICE_POLICY_WIPE_DATA",\r
    MANAGE_DOCUMENTS : "android.permission.MANAGE_DOCUMENTS",\r
    MANAGE_EXTERNAL_STORAGE : "android.permission.MANAGE_EXTERNAL_STORAGE",\r
    MANAGE_MEDIA : "android.permission.MANAGE_MEDIA",\r
    MANAGE_ONGOING_CALLS : "android.permission.MANAGE_ONGOING_CALLS",\r
    MANAGE_OWN_CALLS : "android.permission.MANAGE_OWN_CALLS",\r
    MANAGE_WIFI_INTERFACES : "android.permission.MANAGE_WIFI_INTERFACES",\r
    MANAGE_WIFI_NETWORK_SELECTION : "android.permission.MANAGE_WIFI_NETWORK_SELECTION",\r
    MASTER_CLEAR : "android.permission.MASTER_CLEAR",\r
    MEDIA_CONTENT_CONTROL : "android.permission.MEDIA_CONTENT_CONTROL",\r
    MODIFY_AUDIO_SETTINGS : "android.permission.MODIFY_AUDIO_SETTINGS",\r
    MODIFY_PHONE_STATE : "android.permission.MODIFY_PHONE_STATE",\r
    MOUNT_FORMAT_FILESYSTEMS : "android.permission.MOUNT_FORMAT_FILESYSTEMS",\r
    MOUNT_UNMOUNT_FILESYSTEMS : "android.permission.MOUNT_UNMOUNT_FILESYSTEMS",\r
    NEARBY_WIFI_DEVICES : "android.permission.NEARBY_WIFI_DEVICES",\r
    NFC : "android.permission.NFC",\r
    NFC_PREFERRED_PAYMENT_INFO : "android.permission.NFC_PREFERRED_PAYMENT_INFO",\r
    NFC_TRANSACTION_EVENT : "android.permission.NFC_TRANSACTION_EVENT",\r
    OVERRIDE_WIFI_CONFIG : "android.permission.OVERRIDE_WIFI_CONFIG",\r
    PACKAGE_USAGE_STATS : "android.permission.PACKAGE_USAGE_STATS",\r
    /** @deprecated */\r
\r
    PERSISTENT_ACTIVITY : "android.permission.PERSISTENT_ACTIVITY",\r
    POST_NOTIFICATIONS : "android.permission.POST_NOTIFICATIONS",\r
    /** @deprecated */\r
\r
    PROCESS_OUTGOING_CALLS : "android.permission.PROCESS_OUTGOING_CALLS",\r
    PROVIDE_OWN_AUTOFILL_SUGGESTIONS : "android.permission.PROVIDE_OWN_AUTOFILL_SUGGESTIONS",\r
    PROVIDE_REMOTE_CREDENTIALS : "android.permission.PROVIDE_REMOTE_CREDENTIALS",\r
    QUERY_ALL_PACKAGES : "android.permission.QUERY_ALL_PACKAGES",\r
    READ_ASSISTANT_APP_SEARCH_DATA : "android.permission.READ_ASSISTANT_APP_SEARCH_DATA",\r
    READ_BASIC_PHONE_STATE : "android.permission.READ_BASIC_PHONE_STATE",\r
    READ_CALENDAR : "android.permission.READ_CALENDAR",\r
    READ_CALL_LOG : "android.permission.READ_CALL_LOG",\r
    READ_CONTACTS : "android.permission.READ_CONTACTS",\r
    READ_EXTERNAL_STORAGE : "android.permission.READ_EXTERNAL_STORAGE",\r
    READ_HOME_APP_SEARCH_DATA : "android.permission.READ_HOME_APP_SEARCH_DATA",\r
    /** @deprecated */\r
\r
    READ_INPUT_STATE : "android.permission.READ_INPUT_STATE",\r
    READ_LOGS : "android.permission.READ_LOGS",\r
    READ_MEDIA_AUDIO : "android.permission.READ_MEDIA_AUDIO",\r
    READ_MEDIA_IMAGES : "android.permission.READ_MEDIA_IMAGES",\r
    READ_MEDIA_VIDEO : "android.permission.READ_MEDIA_VIDEO",\r
    READ_MEDIA_VISUAL_USER_SELECTED : "android.permission.READ_MEDIA_VISUAL_USER_SELECTED",\r
    READ_NEARBY_STREAMING_POLICY : "android.permission.READ_NEARBY_STREAMING_POLICY",\r
    READ_PHONE_NUMBERS : "android.permission.READ_PHONE_NUMBERS",\r
    READ_PHONE_STATE : "android.permission.READ_PHONE_STATE",\r
    READ_PRECISE_PHONE_STATE : "android.permission.READ_PRECISE_PHONE_STATE",\r
    READ_SMS : "android.permission.READ_SMS",\r
    READ_SYNC_SETTINGS : "android.permission.READ_SYNC_SETTINGS",\r
    READ_SYNC_STATS : "android.permission.READ_SYNC_STATS",\r
    READ_VOICEMAIL : "com.android.voicemail.permission.READ_VOICEMAIL",\r
    REBOOT : "android.permission.REBOOT",\r
    RECEIVE_BOOT_COMPLETED : "android.permission.RECEIVE_BOOT_COMPLETED",\r
    RECEIVE_MMS : "android.permission.RECEIVE_MMS",\r
    RECEIVE_SMS : "android.permission.RECEIVE_SMS",\r
    RECEIVE_WAP_PUSH : "android.permission.RECEIVE_WAP_PUSH",\r
    RECORD_AUDIO : "android.permission.RECORD_AUDIO",\r
    REORDER_TASKS : "android.permission.REORDER_TASKS",\r
    REQUEST_COMPANION_PROFILE_APP_STREAMING : "android.permission.REQUEST_COMPANION_PROFILE_APP_STREAMING",\r
    REQUEST_COMPANION_PROFILE_AUTOMOTIVE_PROJECTION : "android.permission.REQUEST_COMPANION_PROFILE_AUTOMOTIVE_PROJECTION",\r
    REQUEST_COMPANION_PROFILE_COMPUTER : "android.permission.REQUEST_COMPANION_PROFILE_COMPUTER",\r
    REQUEST_COMPANION_PROFILE_GLASSES : "android.permission.REQUEST_COMPANION_PROFILE_GLASSES",\r
    REQUEST_COMPANION_PROFILE_NEARBY_DEVICE_STREAMING : "android.permission.REQUEST_COMPANION_PROFILE_NEARBY_DEVICE_STREAMING",\r
    REQUEST_COMPANION_PROFILE_WATCH : "android.permission.REQUEST_COMPANION_PROFILE_WATCH",\r
    REQUEST_COMPANION_RUN_IN_BACKGROUND : "android.permission.REQUEST_COMPANION_RUN_IN_BACKGROUND",\r
    REQUEST_COMPANION_SELF_MANAGED : "android.permission.REQUEST_COMPANION_SELF_MANAGED",\r
    REQUEST_COMPANION_START_FOREGROUND_SERVICES_FROM_BACKGROUND : "android.permission.REQUEST_COMPANION_START_FOREGROUND_SERVICES_FROM_BACKGROUND",\r
    REQUEST_COMPANION_USE_DATA_IN_BACKGROUND : "android.permission.REQUEST_COMPANION_USE_DATA_IN_BACKGROUND",\r
    REQUEST_DELETE_PACKAGES : "android.permission.REQUEST_DELETE_PACKAGES",\r
    REQUEST_IGNORE_BATTERY_OPTIMIZATIONS : "android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS",\r
    REQUEST_INSTALL_PACKAGES : "android.permission.REQUEST_INSTALL_PACKAGES",\r
    REQUEST_OBSERVE_COMPANION_DEVICE_PRESENCE : "android.permission.REQUEST_OBSERVE_COMPANION_DEVICE_PRESENCE",\r
    REQUEST_PASSWORD_COMPLEXITY : "android.permission.REQUEST_PASSWORD_COMPLEXITY",\r
    /** @deprecated */\r
\r
    RESTART_PACKAGES : "android.permission.RESTART_PACKAGES",\r
    RUN_USER_INITIATED_JOBS : "android.permission.RUN_USER_INITIATED_JOBS",\r
    SCHEDULE_EXACT_ALARM : "android.permission.SCHEDULE_EXACT_ALARM",\r
    SEND_RESPOND_VIA_MESSAGE : "android.permission.SEND_RESPOND_VIA_MESSAGE",\r
    SEND_SMS : "android.permission.SEND_SMS",\r
    SET_ALARM : "com.android.alarm.permission.SET_ALARM",\r
    SET_ALWAYS_FINISH : "android.permission.SET_ALWAYS_FINISH",\r
    SET_ANIMATION_SCALE : "android.permission.SET_ANIMATION_SCALE",\r
    SET_DEBUG_APP : "android.permission.SET_DEBUG_APP",\r
    /** @deprecated */\r
\r
    SET_PREFERRED_APPLICATIONS : "android.permission.SET_PREFERRED_APPLICATIONS",\r
    SET_PROCESS_LIMIT : "android.permission.SET_PROCESS_LIMIT",\r
    SET_TIME : "android.permission.SET_TIME",\r
    SET_TIME_ZONE : "android.permission.SET_TIME_ZONE",\r
    SET_WALLPAPER : "android.permission.SET_WALLPAPER",\r
    SET_WALLPAPER_HINTS : "android.permission.SET_WALLPAPER_HINTS",\r
    SIGNAL_PERSISTENT_PROCESSES : "android.permission.SIGNAL_PERSISTENT_PROCESSES",\r
    /** @deprecated */\r
\r
    SMS_FINANCIAL_TRANSACTIONS : "android.permission.SMS_FINANCIAL_TRANSACTIONS",\r
    START_FOREGROUND_SERVICES_FROM_BACKGROUND : "android.permission.START_FOREGROUND_SERVICES_FROM_BACKGROUND",\r
    START_VIEW_APP_FEATURES : "android.permission.START_VIEW_APP_FEATURES",\r
    START_VIEW_PERMISSION_USAGE : "android.permission.START_VIEW_PERMISSION_USAGE",\r
    STATUS_BAR : "android.permission.STATUS_BAR",\r
    SUBSCRIBE_TO_KEYGUARD_LOCKED_STATE : "android.permission.SUBSCRIBE_TO_KEYGUARD_LOCKED_STATE",\r
    // 浮窗\r
    SYSTEM_ALERT_WINDOW : "android.permission.SYSTEM_ALERT_WINDOW",\r
    TRANSMIT_IR : "android.permission.TRANSMIT_IR",\r
    TURN_SCREEN_ON : "android.permission.TURN_SCREEN_ON",\r
    UNINSTALL_SHORTCUT : "com.android.launcher.permission.UNINSTALL_SHORTCUT",\r
    UPDATE_DEVICE_STATS : "android.permission.UPDATE_DEVICE_STATS",\r
    UPDATE_PACKAGES_WITHOUT_USER_ACTION : "android.permission.UPDATE_PACKAGES_WITHOUT_USER_ACTION",\r
    USE_BIOMETRIC : "android.permission.USE_BIOMETRIC",\r
    USE_EXACT_ALARM : "android.permission.USE_EXACT_ALARM",\r
    /** @deprecated */\r
\r
    USE_FINGERPRINT : "android.permission.USE_FINGERPRINT",\r
    USE_FULL_SCREEN_INTENT : "android.permission.USE_FULL_SCREEN_INTENT",\r
    USE_ICC_AUTH_WITH_DEVICE_IDENTIFIER : "android.permission.USE_ICC_AUTH_WITH_DEVICE_IDENTIFIER",\r
    USE_SIP : "android.permission.USE_SIP",\r
    UWB_RANGING : "android.permission.UWB_RANGING",\r
    VIBRATE : "android.permission.VIBRATE",\r
    WAKE_LOCK : "android.permission.WAKE_LOCK",\r
    WRITE_APN_SETTINGS : "android.permission.WRITE_APN_SETTINGS",\r
    WRITE_CALENDAR : "android.permission.WRITE_CALENDAR",\r
    WRITE_CALL_LOG : "android.permission.WRITE_CALL_LOG",\r
    WRITE_CONTACTS : "android.permission.WRITE_CONTACTS",\r
    WRITE_EXTERNAL_STORAGE : "android.permission.WRITE_EXTERNAL_STORAGE",\r
    WRITE_GSERVICES : "android.permission.WRITE_GSERVICES",\r
    WRITE_SECURE_SETTINGS : "android.permission.WRITE_SECURE_SETTINGS",\r
    WRITE_SETTINGS : "android.permission.WRITE_SETTINGS",\r
    WRITE_SYNC_SETTINGS : "android.permission.WRITE_SYNC_SETTINGS",\r
    WRITE_VOICEMAIL : "com.android.voicemail.permission.WRITE_VOICEMAIL",\r
}\r
\r
let permissions = {};\r
let groups = {};\r
\r
function addP(obj, permission, description, successText, faildText){\r
    obj[permission] = {permission, description, successText, faildText}\r
}\r
function addPermission(permission, description, successText, faildText){\r
    addP(permissions, permission, description, successText, faildText);\r
}\r
function addPermissionGroup(permission, description, successText, faildText){\r
    addP(groups, permission, description, successText, faildText);\r
}\r
\r
function checkPermission(){\r
\r
}\r
return {Permission, PermissionGroup, addPermission, addPermissionGroup, checkPermission}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/permission/permission.java.js", e);
    }
    })()
    `,dependencies:[]},"fanfanlo/javajs/v1/project/store":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({}){
            let projectMap={\r
\r
    },\r
    taskMap={\r
\r
    },\r
    actionMap={\r
        "fanfanlo/javajs/v1/project/components/action/app/openApp":{\r
            type:"fanfanlo/javajs/v1/project/components/action/app/openApp",\r
            attach:undefined\r
        }\r
    },\r
    triggerMap={\r
        "fanfanlo/javajs/v1/project/components/trigger/time/later":{\r
            type:"fanfanlo/javajs/v1/project/components/trigger/time/later",\r
            attach:undefined\r
        }\r
    }\r
function getFromMap(map, type, mapName){\r
    if(map[type] == undefined){\r
        throw new Error(mapName + " no type registered " + type )\r
    }\r
    return map[type];\r
}\r
\r
function getProject(type){\r
    return getFromMap(projectMap, type, "project")\r
}\r
function getTask(type){\r
    return getFromMap(taskMap, type, "task")\r
}\r
function getAction(type){\r
    return getFromMap(actionMap, type, "action")\r
}\r
function getTrigger(type){\r
    return getFromMap(triggerMap, type, "trigger")\r
}\r
function regProject(type, attach){\r
    regToMap(projectMap, type, attach, "project")\r
}\r
function regTask(type, attach){\r
    regToMap(taskMap, type, attach, "task")\r
}\r
function regAction(type, attach){\r
    regToMap(actionMap, type, attach, "action")\r
}\r
function regTrigger(type, attach){\r
    regToMap(triggerMap, type, attach, "trigger")\r
}\r
function regToMap(map, type, attach, mapName){\r
    // if(map[type] != undefined){\r
    //     throw new Error(mapName + \` type already registerd, type is \` + type)\r
    // }\r
    // if(!type || type.length == 0){\r
    //     throw new Error(mapName + \` type is undefined or empty \` + type);\r
    // }\r
    map[type] = {\r
        type, attach\r
    }\r
    projectStoreLogger.log(\`store register \${type}\`)\r
}\r
return {projectMap, taskMap, actionMap, triggerMap,\r
    regProject, regTask,  regAction, regTrigger,\r
    getProject, getTask, getAction, getTrigger\r
}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/store.java.js", e);
    }
    })()
    `,dependencies:[]},"fanfanlo/javajs/v1/utils/createGetterSetter":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({}){
            \r
function createGetterSetter(that, key, value, conf, dispatcher, setFn, getFn){\r
    Object.defineProperty(that, key, {\r
        get(){\r
            let v = getFn ? getFn(value, that, key) : value;\r
            if(conf & conf.setter){\r
                let s = conf.setter;\r
                if(s.logger){\r
                    s.logger(that, key).log(v);\r
                }\r
                if(s.stack){\r
                    try {\r
                        throw new Error(key);\r
                    }catch (e) {\r
                        console.log(v, e.stack)\r
                    }\r
                }\r
            }\r
            return v;\r
        },\r
        set(v){\r
            if(conf.readonly){\r
                return;\r
            }\r
            let old = value;\r
            value = setFn ? setFn(v, that, key) : v;\r
            if(conf & conf.getter){\r
                let s = conf.getter;\r
                if(s.logger){\r
                    s.logger(that, key).log(v)\r
                }\r
                if(s.stack){\r
                    try {\r
                        throw new Error(key);\r
                    }catch (e) {\r
                        let log = s.logger ? s.logger(that, key).log : console.log;\r
                        log(key, "setter old value is", old);\r
                        log(key, "setter now value is", value)\r
                        log(key, "setter", e.stack)\r
                    }\r
                }\r
            }\r
\r
            if(dispatcher){\r
                dispatcher.dispatchData(\`\${key}Changed\`,{old, now:value})\r
            }\r
        }\r
    })\r
}\r
\r
return {createGetterSetter}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/utils/createGetterSetter.java.js", e);
    }
    })()
    `,dependencies:[]},"fanfanlo/javajs/v1/utils/ExitHandler":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({
            get eventTypeComplete(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeComplete;
            }
            ,
            get eventTypeExit(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeExit;
            }
            }){
            \r
\r
function createExitHandler(exitOrCompleteDispatcher, dispatchers, logger){\r
    if(logger)logger = logger.createSub("exitHandler");\r
    let eventDispatchers = dispatchers || [];\r
    let cleanList = [];\r
    let domain = {};\r
    function onScriptCallExit(){\r
        if(logger) logger.log("onScriptCallExit1");\r
        onExit();\r
    }\r
    addScriptExitListener(onScriptCallExit);\r
    exitOrCompleteDispatcher.listenData(eventTypeExit, onExit);\r
    exitOrCompleteDispatcher.listenData(eventTypeComplete, onExit);\r
    function onExit(e){\r
        if(logger) logger.log("onExit1");\r
        clean();\r
    }\r
    function clean(){\r
        if(logger) logger.log("clean1");\r
        eventDispatchers.forEach(dispatcher=>{\r
            if(!dispatcher)return;\r
            dispatcher.removeDomain(domain);\r
        })\r
        cleanList.forEach(fn=>fn())\r
        removeScriptExitListener(onScriptCallExit);\r
    }\r
    function addExitFn(fn){\r
        let index = cleanList.indexOf(fn);\r
        if(index > -1)return;\r
        cleanList.push(fn);\r
    }\r
    function removeExitFn(fn){\r
        let index = cleanList.indexOf(fn);\r
        if(index == -1)return;\r
        cleanList.splice(index, 1);\r
    }\r
    function addEventDispatcher(dispatcher){\r
        eventDispatchers.push(dispatcher);\r
    }\r
\r
    return {domain, addEventDispatcher, addExitFn, removeExitFn, logger}\r
}\r
\r
return {createExitHandler}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/utils/ExitHandler.java.js", e);
    }
    })()
    `,dependencies:[{path:"fanfanlo/javajs/v1/project/base/projectMembers",properties:["eventTypeComplete"," eventTypeExit"]}]},"fanfanlo/javajs/v1/utils/IntervalCheck":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({
            get setTimeout(){
                return javaLib["fanfanlo/javajs/v1/utils/setTimeout"].setTimeout;
            }
            ,
            get clearTimeout(){
                return javaLib["fanfanlo/javajs/v1/utils/setTimeout"].clearTimeout;
            }
            }){
            \r
\r
function createIntervalChecker(interval, fn, logger){\r
    if(logger)logger = logger.createSub("intervalChecker")\r
    let last = 0;\r
    let timeoutId = undefined;\r
    let exited = false;\r
    function checkCanRun(){\r
        let now = Date.now();\r
        let diff = now - last;\r
        let canRun = diff > interval;\r
        return canRun;\r
    }\r
    function exit(){\r
        exited = true;\r
        clearTimeoutId();\r
    }\r
    function callLater(){\r
        if(timeoutId != undefined)return;\r
        timeoutId = setTimeout(laterRun, interval);\r
        return timeoutId;\r
    }\r
    function clearTimeoutId(){\r
        let id = timeoutId;\r
        if(!id)return;\r
        timeoutId = undefined;\r
        clearTimeout(id);\r
    }\r
    function checkRun(){\r
        if(exited)return;\r
        let canRun = checkCanRun();\r
        if(!canRun){\r
            callLater();\r
            return false;\r
        }\r
        run();\r
        return true;\r
    }\r
    function setNow(){\r
        last = Date.now();\r
    }\r
    function laterRun(){\r
        timeoutId = undefined;\r
        run();\r
    }\r
    function run(){\r
        if(exited)return;\r
        setNow();\r
        if(fn != undefined)fn();\r
    }\r
    return {checkRun, exit, check: checkCanRun, setNow, clearTimeoutId};\r
}\r
\r
return {createIntervalChecker}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/utils/IntervalCheck.java.js", e);
    }
    })()
    `,dependencies:[{path:"fanfanlo/javajs/v1/utils/setTimeout",properties:["setTimeout"," clearTimeout"]}]},"fanfanlo/javajs/v1/utils/setTimeout":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({}){
            \r
\r
function setTimeout(fn, delay){\r
    var conf = com.fanfanlo.lib.utils.coroutine.CoroutineUtils.Companion.later(delay, fn);\r
    return conf;\r
}\r
\r
function clearTimeout(conf){\r
    // console.log("clearTimeout1", 1)\r
    if(!conf)return;\r
    // console.log("clearTimeout1", 2)\r
    var job = conf.job || conf.deferred\r
    // console.log("clearTimeout1", 3)\r
    if(!job)return;\r
    // console.log("clearTimeout1", 4)\r
    if(job.isCancelled || job.isCompleted)return;\r
    // console.log("clearTimeout1", 5)\r
    job.cancel();\r
    console.log("clearTimeout1", 6)\r
}\r
\r
function setInterval(fn, delay, times){\r
    if(!times){\r
        times = 1000000000000\r
    }\r
    var conf = com.fanfanlo.lib.utils.coroutine.CoroutineUtils.Companion.repeat(times, delay, fn);\r
    return conf;\r
}\r
\r
function clearInterval(conf){\r
    clearTimeout(conf)\r
}\r
return {setTimeout, clearTimeout, setInterval, clearInterval}\r
;
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/utils/setTimeout.java.js", e);
    }
    })()
    `,dependencies:[]},"fanfanlo/javajs/v1/a11y/node/ICondition":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({}){
            \r
let path = "com.fanfanlo.droidlib.auto.service.accessibility.krosxx."\r
let Types = {\r
    get Id(){\r
        return \`\${path}Id\`;\r
    },\r
    get Text(){\r
        return \`\${path}Text\`;\r
    },\r
    get MatchText(){\r
        return \`\${path}MatchText\`;\r
    },\r
    get Desc(){\r
        return \`\${path}Desc\`;\r
    },\r
    get Clickable(){\r
        return \`\${path}Clickable\`;\r
    },\r
    get Type(){\r
        return \`\${path}Type\`;\r
    },\r
    get Ids(){\r
        return \`\${path}Ids\`;\r
    },\r
    get Descs(){\r
        return \`\${path}Descs\`;\r
    },\r
    get Texts(){\r
        return \`\${path}Texts\`;\r
    },\r
    get Root(){\r
        return \`\${path}SFRoot\`;\r
    },\r
\r
}\r
\r
let Action = {\r
    get Focus(){\r
        return \`\${path}Focus\`;\r
    },\r
    get ClearFocus(){\r
        return \`\${path}ClearFocus\`;\r
    },\r
    get Click(){\r
        return \`\${path}Click\`;\r
    },\r
    get TryClick(){\r
        return \`\${path}TryClick\`;\r
    },\r
    get LongClick(){\r
        return \`\${path}LongClick\`;\r
    },\r
    get GlobalClick(){\r
        return \`\${path}GlobalClick\`;\r
    },\r
    get SetText(){\r
        return \`\${path}SetText\`;\r
    },\r
}\r
\r
let Wait = {\r
    get Wait(){\r
        return \`\${path}SFWait\`;\r
    },\r
}\r
\r
let Data = {\r
    get Data(){\r
        return \`\${path}SFData\`;\r
    },\r
}\r
\r
return {Types, Action, Wait, Data}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/a11y/node/ICondition.java.js", e);
    }
    })()
    `,dependencies:[]},"fanfanlo/javajs/v1/project/base/base":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({
            get createEventDispatcher(){
                return javaLib["fanfanlo/javajs/v1/event/createEventDispatcher"].createEventDispatcher;
            }
            }){
            \r
\r
\r
\r
let eventTypeComplete = "complete";\r
let eventTypeFailed = "failed";\r
let eventTypeSuccess = "success";\r
let eventTypeError = "error"\r
let eventTypeTrigger = "trigger"\r
let eventTypeDataAttached = "dataAttached";\r
let classTypeAction = "action";\r
let classTypeTrigger = "trigger";\r
let classTypeTask = "task";\r
let classTypeProject = "project";\r
\r
let projectInitData;\r
function callProjectMemberListExit(list){\r
    for (let i = 0; i < list.length; i++) {\r
        try{\r
            list[i].exit();\r
        }catch(e){\r
            console.log("java error callProjectMemberListExit, fanfanlo/javajs/v1/project/base/base ", e.message);\r
        }\r
    }\r
}\r
\r
function createCommonBase(that, name, type){\r
    try{\r
        that = that || {};\r
        function setData(data){\r
            projectFlowLogger.log("setData1", data);\r
            this.data = data\r
        }\r
        function run(owner){\r
            this.owner = owner;\r
            if(!this.getIsRunnable()){\r
                return;\r
            }\r
            this.isRuning = true;\r
            this.onRun()\r
        }\r
        function onRun(){\r
            // override this function\r
        }\r
        function exit(){\r
            if(this.isExited)return;\r
            this.setIsExited(true);\r
            this.dispatcher.removeAllListeners();\r
            this.onExit();\r
        }\r
        function onExit(){\r
\r
        }\r
        function getIsRunning(){\r
            return this.isRunning;\r
        }\r
        function setIsRunning(isRunning){\r
            this.isRunning = isRunning;\r
        }\r
        function getIsTerminated(){\r
            // 自己被终止或者调用者被终止都会停止执行.\r
            return this.isTerminated || this.owner ? this.owner.getIsTerminated() : false;\r
        }\r
        function setIsTerminated(isTerminated){\r
            this.isTerminated = isTerminated;\r
        }\r
\r
        function getIsRunnable(){\r
            return !(this.isExited || this.getIsTerminated()) && this.owner ? this.owner.getIsRunnable() : true;\r
        }\r
\r
        function getIsExited(){\r
            return this.isExited;\r
        }\r
        function setIsExited(isExited){\r
            this.isExited = isExited;\r
            projectFlowLogger.log("setIsExited1", isExited, this.name || this.type);\r
        }\r
        that.name = name || type;\r
        that.type = type;\r
        that.owner = undefined;\r
        that.data = undefined;\r
\r
        that.isRunning = false;\r
        that.setIsRunning = setIsRunning.bind(that);\r
        that.getIsRunning = getIsRunning.bind(that);\r
\r
        that.isTerminated = false;\r
        that.setIsTerminated = setIsTerminated.bind(that);\r
        that.getIsTerminated = getIsTerminated.bind(that);\r
\r
        that.isExited = false;\r
        that.getIsExited = getIsExited.bind(that);\r
        that.setIsExited = setIsExited.bind(that);\r
\r
        that.dispatcher = createEventDispatcher();\r
\r
        that.setData = setData.bind(that);\r
        that.run = run.bind(that);\r
        that.onRun = onRun.bind(that);\r
        that.exit = exit.bind(that);\r
        that.onExit = onExit.bind(that);\r
        that.getIsRunnable = getIsRunnable.bind(that);\r
        // that.setAttachData = setAttachData.bind(that);\r
\r
        return that;\r
    }catch(e){\r
        console.log("java error createCommonBase, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
\r
\r
function attachAbstractAct(that){\r
    try{\r
        let superRun = that.run;\r
        function dispatchSuccess(){\r
            this.isSuccess = true;\r
            projectEventLogger.log("dispatchSuccess1", this.name)\r
            this.dispatcher.dispatchData(eventTypeSuccess, {target:this});\r
            this.dispatchComplete();\r
        }\r
        function dispatchComplete(){\r
            projectEventLogger.log("dispatchComplete1", this.name)\r
            this.isRuning = false;\r
            this.dispatcher.dispatchData(eventTypeComplete, {target:this})\r
        }\r
        function dispatchFailed(data){\r
            this.isSuccess = false;\r
            projectFailedLogger.log("dispatchFailed1", this.name)\r
            this.dispatcher.dispatchData(eventTypeFailed, {target:this, data:data});\r
            this.dispatchComplete()\r
        }\r
        function run(parent){\r
            this.isSuccess = false;\r
            superRun(parent);\r
        }\r
        that.isSuccess = false;\r
        that.dispatchSuccess = dispatchSuccess.bind(that);\r
        that.dispatchComplete = dispatchComplete.bind(that);\r
        that.dispatchFailed = dispatchFailed.bind(that);\r
        that.run = run.bind(that);\r
        return that;\r
    }catch(e){\r
        console.log("java error attachAbstractAct, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
\r
function attachAbstractParent(that){\r
    try{\r
        that.children = [];\r
        let oldOnExit = that.onExit;\r
        function onExit(){\r
            callProjectMemberListExit(this.children);\r
            oldOnExit();\r
        }\r
        that.onExit = onExit.bind(that);\r
    }catch(e){\r
        console.log("java error attachAbstractParent, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function attachAction(that){\r
    try{\r
        let superRun = that.run;\r
        let superOnExit = that.onExit;\r
        that.triggers = [];\r
        function run(parent){\r
            this.runTriggers();\r
            superRun(parent);\r
        }\r
        function onTrigger(event){\r
            projectEventLogger.log("onTrigger1")\r
            this.doAction(event ? event.data : undefined);\r
        }\r
        function doAction(data){\r
            // override this method\r
        }\r
        function runTriggers(){\r
            for (let i = 0; i < this.triggers.length; i++) {\r
                let trigger = this.triggers[i];\r
                trigger.dispatcher.listenDomainData(eventTypeTrigger, this, this.onTrigger);\r
                trigger.run(this);\r
            }\r
        }\r
        function onExit(){\r
            callProjectMemberListExit(this.triggers);\r
            superOnExit();\r
        }\r
        that.run = run.bind(that);\r
        that.onTrigger = onTrigger.bind(that);\r
        that.doAction = doAction.bind(that);\r
        that.runTriggers = runTriggers.bind(that);\r
        that.onExit = onExit.bind(that);\r
        return that;\r
    }catch(e){\r
        console.log("java error attachAction, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function attachConcurrentGroup(that){\r
    try{\r
        attachAbstractAct(that);\r
        attachAbstractParent(that);\r
        that.completeConditions = [\r
            // 数组内的是children的index，index标记的是必须完成的。\r
            // [0]\r
            // [1,3]\r
        ];\r
        function checkIsSuccess(){\r
            if(this.completeConditions.length == 0){\r
                projectFlowLogger.log("checkIsSuccess1 completeConditions.length is zero");\r
                return true;\r
            }\r
            for (let i = 0; i < this.completeConditions.length; i++) {\r
                let list = this.completeConditions[i];\r
                let hasFailed = false;\r
                for (let j = 0; j < list.length; j++) {\r
                    let action = this.children[list[j]];\r
                    if(action.isSuccess == false){\r
                        projectFailedLogger.log("checkIsSuccess1 hasFailed");\r
                        hasFailed = true;\r
                        break;\r
                    }\r
                }\r
                if(!hasFailed){\r
                    projectFlowLogger.log("checkIsSuccess1 !hasFailed")\r
                    return true;\r
                }\r
            }\r
            return false;\r
        }\r
\r
        function checkSuccess(){\r
            // 已经完成过了就不需要再次派发事件了\r
            if(this.isSuccess)return;\r
            if(!this.checkIsSuccess())return;\r
            this.dispatchSuccess();\r
        }\r
\r
        function checkComplete(){\r
            // 每当child完成后就检测一下是否本组已完成，如果条件检测已完成则视为已完成，不在管打酱油的是否还在执行。\r
            // 如果有酱油动作在其具备条件时想完成需要覆写这些方法重构检测条件。\r
            if(this.isSuccess)return;\r
            for (let i = 0; i < this.children.length; i++) {\r
                let action = this.children[i];\r
                if(!action.isExited)return;\r
            }\r
            this.dispatchComplete();\r
        }\r
        function onChildSuccess(event){\r
            projectEventLogger.log("onChildSuccess1 child complete", this.name, event.target.name)\r
            this.checkSuccess();\r
        }\r
        function onChildFailed(event){\r
            projectFailedLogger.log("onChildFailed1 child failed", this.name, event.target.name);\r
            this.checkSuccess();\r
        }\r
        function onChildComplete(event){\r
            projectEventLogger.log("onChildComplete1 child complete", this.name, event.target.name);\r
            this.checkComplete();\r
        }\r
\r
        function onRun(){\r
            for(let i = 0; i < this.children.length; i ++){\r
                let child = this.children[i];\r
                child.dispatcher.listenData(eventTypeComplete, this.onChildComplete)\r
                child.dispatcher.listenData(eventTypeFailed, this.onChildFailed)\r
                child.dispatcher.listenData(eventTypeSuccess, this.onChildSuccess)\r
                child.run(this);\r
            }\r
        }\r
        let oldOnExit = that.onExit;\r
        function onExit(){\r
            callProjectMemberListExit(this.children);\r
            oldOnExit();\r
        }\r
        that.checkIsSuccess = checkIsSuccess.bind(that);\r
        that.onChildSuccess = onChildSuccess.bind(that);\r
        that.onChildFailed = onChildFailed.bind(that);\r
        that.onChildComplete = onChildComplete.bind(that);\r
        that.checkSuccess = checkSuccess.bind(that);\r
        that.checkComplete = checkComplete.bind(that);\r
        that.onRun = onRun.bind(that);\r
    }catch(e){\r
        console.log("java error attachConcurrentGroup, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function attachQueueGroup(that){\r
    try{\r
        attachAbstractAct(that);\r
        attachAbstractParent(that);\r
        that.childIndex = 0;\r
        that.children = [];\r
        function onChildSuccess(event){\r
            projectEventLogger.log("onChildSuccess1 child complete", this.name, event.target.name)\r
            this.checkDoNextOrComplete();\r
        }\r
\r
        function checkDoNextOrComplete(){\r
            projectEventLogger.log("checkDoNextOrComplete1 child check do next or complete", this.name)\r
            if(this.childIndex < this.children.length - 1){\r
                this.childIndex ++\r
                this.checkRunIndex()\r
            }else{\r
                this.dispatchSuccess();\r
            }\r
        }\r
        function onChildFailed(event){\r
            projectFailedLogger.log("onChildFailed child failed", this.name, event.target.name)\r
            // if data == children[n]\r
            // 判断是否是必须执行完毕的，如果是必须执行的则提示人工干预或者放弃继续执行\r
            // 如果是非必须执行的则忽略跳过\r
            this.dispatchFailed({target:this, data:event.data})\r
        }\r
        function onChildComplete(event){\r
            projectEventLogger.log("child complete", this.name, event.target.name)\r
            this.dispatchComplete();\r
        }\r
        let oldOnRun = that.onRun;\r
        function onRun(){\r
            projectFlowLogger.log("onRun", this.name)\r
            this.checkRunIndex();\r
            oldOnRun();\r
        }\r
\r
        function checkRunIndex(){\r
            let child = this.children[this.childIndex];\r
            if(child == undefined){\r
                projectFlowLogger.log("checkRunIndex is  undefined", this.childIndex)\r
                this.dispatchFailed({err:new Error("check run index child is undefined"), index:this.childIndex});\r
                return\r
            }\r
            child.dispatcher.listenData(eventTypeComplete, this.onChildComplete)\r
            child.dispatcher.listenData(eventTypeFailed, this.onChildFailed)\r
            child.dispatcher.listenData(eventTypeSuccess, this.onChildSuccess)\r
            child.run(this);\r
        }\r
\r
        that.onChildSuccess = onChildSuccess.bind(that);\r
        that.checkDoNextOrComplete = checkDoNextOrComplete.bind(that);\r
        that.onChildFailed = onChildFailed.bind(that);\r
        that.onChildComplete = onChildComplete.bind(that);\r
        that.onRun = onRun.bind(that);\r
        that.checkRunIndex = checkRunIndex.bind(that);\r
        return that;\r
    }catch(e){\r
        console.log("java error attachQueueGroup, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
\r
function createTrigger(that, type, name){\r
    try{\r
        that = createCommonBase(that, name, type);\r
        function dispatchTrigger(data){\r
            if(!this.getIsRunnable()){\r
                return;\r
            }\r
            this.dispatcher.dispatchData(eventTypeTrigger, {target:this, data:data});\r
        }\r
        that.dispatchTrigger = dispatchTrigger.bind(that);\r
        return that;\r
    }catch(e){\r
        console.log("java error createTrigger, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
\r
function createAction(that, name, type){\r
    try{\r
        that = createCommonBase(that, name, type);\r
        attachAbstractAct(that)\r
        attachAction(that);\r
        return that;\r
    }catch(e){\r
        console.log("java error createAction, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
\r
function createConcurrentActionGroup(that, name, type){\r
    try{\r
        that = createCommonBase(that, name, type);\r
        attachConcurrentGroup(that);\r
        return that;\r
    }catch(e){\r
        console.log("java error createConcurrentActionGroup, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function createTask(that, name, type){\r
    try{\r
        that = createCommonBase(that, name, type);\r
        attachQueueGroup(that);\r
        return that;\r
    }catch(e){\r
        console.log("java error createTask, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function createProject(that, name, type){\r
    try{\r
        that = createCommonBase(that, name, type);\r
        attachQueueGroup(that);\r
        return that;\r
    }catch(e){\r
        console.log("java error createProject, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function buildTrigger(initData){\r
    try{\r
        let trigger = createTrigger({}, initData.name, initData.type);\r
        trigger.setData(initData.data);\r
        if(initData.type){\r
            javaLib["fanfanlo/javajs/v1/project/store"].getTrigger(initData.type).attach(trigger);\r
        }\r
        return trigger;\r
    }catch(e){\r
        console.log("java error buildTrigger, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
\r
function buildActionList(children){\r
    try{\r
        let list = [];\r
        for (let i = 0; i < children.length; i++) {\r
            let initData = children[i];\r
            let action = buildAction(initData);\r
            list.push(action);\r
        }\r
        return list;\r
    }catch(e){\r
        console.log("java error buildActionList, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function buildAction(initData){\r
    try{\r
        let action = {};\r
        if(initData.children){\r
            action = createConcurrentActionGroup(action, initData.name, initData.type);\r
            action.children = buildActionList(initData.children);\r
        }else{\r
            action = createAction(action, initData.n, initData.type);\r
        }\r
        action.setData(initData.data);\r
        if(initData.triggers){\r
            action.triggers = action.triggers || [];\r
            for (let i = 0; i < initData.triggers.length; i++) {\r
                let trigger = buildTrigger(initData.triggers[i])\r
                action.triggers.push(trigger);\r
            }\r
        }\r
        if(initData.type){\r
            javaLib["fanfanlo/javajs/v1/project/store"].getAction(initData.type).attach(action);\r
        }\r
        return action;\r
    }catch(e){\r
        console.log("java error buildAction, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function buildTask(initData){\r
    try{\r
        let task = createTask({}, initData.name, initData.type);\r
        task.children = buildActionList(initData.children);\r
        if(initData.type){\r
            javaLib["fanfanlo/javajs/v1/project/store"].getTask(initData.type).attach(task);\r
        }\r
        task.setData(initData.data);\r
        return task;\r
    }catch(e){\r
        console.log("java error buildTask, fanfanlo/javajs/v1/project/base/base ", e.message);\r
    }\r
}\r
function buildProject(initData){\r
    try{\r
        let project = createProject({}, initData.name, initData.type);\r
        project.children = [];\r
        for (let i = 0; i < initData.children.length; i++) {\r
            let taskInitData = initData.children[i];\r
            let task = buildTask(taskInitData);\r
            project.children.push(task);\r
        }\r
        if(initData.type){\r
            javaLib["fanfanlo/javajs/v1/project/store"].getProject(initData.type).attach(project);\r
        }\r
        project.setData(initData.data);\r
        return project;\r
    }catch(e){\r
        console.log("java error buildProject2, fanfanlo/javajs/v1/project/base/base ", e.message, e.stack);\r
    }\r
}\r
function projectBuilder(initData){\r
    try{\r
        projectInitData = initData.projectInitData;\r
        let project = buildProject(projectInitData);\r
        project.run();\r
    }catch(e){\r
        console.log("java error projectBuilder3, fanfanlo/javajs/v1/project/base/base ", e.message, e.stack);\r
    }\r
}\r
\r
return {projectBuilder}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/base/base.java.js", e);
    }
    })()
    `,dependencies:[{path:"fanfanlo/javajs/v1/event/createEventDispatcher",properties:["createEventDispatcher"]}]},"fanfanlo/javajs/v1/project/base/projectMembers":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({
            get createEventDispatcher(){
                return javaLib["fanfanlo/javajs/v1/event/createEventDispatcher"].createEventDispatcher;
            }
            ,
            get createGetterSetter(){
                return javaLib["fanfanlo/javajs/v1/utils/createGetterSetter"].createGetterSetter;
            }
            }){
            \r
\r
let eventTypeComplete = "eventTypeComplete";\r
let eventTypeFailed = "eventTypeFailed";\r
let eventTypeSuccess = "eventTypeSuccess";\r
let eventTypeError = "eventTypeError"\r
let eventTypeExit = "eventTypeExit";\r
let eventTypeTriggerCondistionsOn = "eventTypeTriggerCondistionsOn"\r
let eventTypeTriggerCondistionsOff = "eventTypeTriggerCondistionsOff"\r
let baseType = {\r
    trigger:"trigger",\r
    action:"action",\r
    task:"task",\r
    project:"project"\r
};\r
let eventTypeDataAttached = "dataAttached";\r
let classTypeAction = "action";\r
let classTypeTrigger = "trigger";\r
let classTypeTask = "task";\r
let classTypeProject = "project";\r
\r
let baseInternalIndex = 0\r
let projectInitData;\r
\r
function callProjectMemberListExit(list){\r
    for (let i = 0; i < list.length; i++) {\r
        try{\r
            list[i].exit();\r
        }catch(e){\r
            console.log("java error callProjectMemberListExit, fanfanlo/javajs/v1/project/base/base ", e.message);\r
        }\r
    }\r
}\r
function createCommonBase(that, name, type, baseType){\r
\r
    baseInternalIndex++\r
    that = that || {};\r
    let dispatcher = createEventDispatcher();\r
    let loggerName = name || baseType || type;\r
    let logger = console.createSubLogger(\`\${loggerName}:\${baseInternalIndex}\`);\r
    // let logger = com.fanfanlo.lib.utils.Logger.Companion.create(\`\${loggerName}:\${baseInternalIndex}\`);\r
    logger.log(\`test111.name=\${name},baseType=\${baseType}\`);\r
    createGetterSetter(that, "logger", logger, {readonly:true});\r
    // createGetterSetter(that, "log", log, {readonly:true});\r
    createGetterSetter(that, "dispatcher", dispatcher, {readonly:true}, undefined, undefined, undefined)\r
    createGetterSetter(that, "baseType", baseType, {readonly:true}, that.dispatcher);\r
    createGetterSetter(that, "isRunnable", undefined, {readonly:true}, undefined, undefined, (value, that, key)=>{\r
        let bl = isScriptRunnable && (that.project? that.project.isRunnable : true) &&\r
            (that.owner ? that.owner.isRunnable : true) && (!that.isExited && !that.isTerminated)\r
        // logger.log("settgett isScriptRunnable", isScriptRunnable, \`has project=\${that.project != undefined}\`, \`project.isRunnable=\${that.project?that.project.isRunnable:undefined}\`,\r
        //     \`has owner=\${that.owner != undefined}\`, \`owner.isRunnable=\${that.owner?that.owner.isRunnable : undefined}\`, \`isExited=\${that.isExited}\`, \`isTerminated=\${that.isTerminated}\`, \`name is \${that.name}\`, \`type is \${that.type}\`, \`bl=\${bl}\`)\r
        return bl;\r
    });\r
    createGetterSetter(that, "baseMsg", undefined, {readonly:true}, undefined, undefined, (value, that, key)=>{\r
        return \`base msg|baseInternalIndex is \${that.baseInternalIndex}, baseType is \${that.baseType}, name is \${that.name}, type is \${that.type}\`\r
    });\r
    createGetterSetter(that, "data", undefined, {}, dispatcher)\r
    createGetterSetter(that, "buildData", undefined, {}, dispatcher)\r
    createGetterSetter(that, "owner", undefined, {}, dispatcher)\r
    createGetterSetter(that, "isRunning", false, {}, dispatcher)\r
    createGetterSetter(that, "isExited", false, {}, dispatcher)\r
    createGetterSetter(that, "isTerminated", false, {}, dispatcher)\r
    createGetterSetter(that, "name", name || type, {}, dispatcher)\r
    createGetterSetter(that, "type", type, {}, dispatcher)\r
    createGetterSetter(that, "baseInternalIndex", baseInternalIndex, {readonly:true}, dispatcher)\r
    createGetterSetter(that, "project", undefined, {}, dispatcher)\r
    createGetterSetter(that, "task", undefined, {}, dispatcher);\r
\r
    function run(owner){\r
        this.owner = owner;\r
        if(!this.isRunnable){\r
            return;\r
        }\r
        this.isRunning = true;\r
        this.onRun()\r
    }\r
    function onRun(){}\r
    function exit(){\r
        this.logger.log("exit", this.type)\r
        if(this.isExited)return;\r
        this.isExited = true;\r
        this.dispatcher.dispatch(eventTypeExit)\r
        this.dispatcher.removeAllListeners();\r
        this.onExit();\r
    }\r
    function onExit(){}\r
    that.run = run.bind(that);\r
    that.onRun = onRun.bind(that);\r
    that.exit = exit.bind(that);\r
    that.onExit = onExit.bind(that);\r
    return that;\r
}\r
\r
function createTriggerListener(that){\r
    createGetterSetter(that, "conditionOnTriggers", [], {}, that.dispatcher)\r
    createGetterSetter(that, "conditionOffTriggers", [], {}, that.dispatcher)\r
    createGetterSetter(that, "isConditionOk", false, {}, that.dispatcher)\r
    function onConditionsOn(event){\r
        this.isConditionOk = true;\r
    }\r
    function onConditionsOff(event){\r
        this.isConditionOk = false;\r
    }\r
    that.onConditionsOn = onConditionsOn.bind(that);\r
    that.onConditionsOff = onConditionsOff.bind(that);\r
}\r
function createTrigger(that, name, type){\r
\r
    that = createCommonBase(that, name, type, baseType.t);\r
    createGetterSetter(that, "action", undefined, {}, that.dispatcher);\r
    createTriggerListener(that)\r
    function dispatchConditionsOn(data){\r
        if(!this.isRunnable)return;\r
        this.dispatcher.dispatchData(eventTypeTriggerCondistionsOn, {target:this, data:data});\r
    }\r
    function dispatchConditionsOff(data){\r
        if(!this.isRunnable)return;\r
        this.dispatcher.dispatchData(eventTypeTriggerCondistionsOff, {target:this, data:data});\r
    }\r
    that.dispatchConditionsOn = dispatchConditionsOn.bind(that);\r
    that.dispatchConditionsOff = dispatchConditionsOff.bind(that);\r
    return that;\r
}\r
\r
function attachAbstractAct(that){\r
    let dispatcher = that.dispatcher;\r
    createGetterSetter(that, "isSuccess", false, {}, dispatcher);\r
    createGetterSetter(that, "isFailed", false, {}, dispatcher);\r
    createGetterSetter(that, "isCompleted", false, {}, dispatcher);\r
    function dispatchSuccess(){\r
        projectEventLogger.log("dispatch success1", this.baseMsg);\r
        if(this.isSuccess)return;\r
        this.isSuccess = true;\r
        this.isFailed = false;\r
        projectEventLogger.log("dispatchSuccess1", this.baseMsg)\r
        this.dispatcher.dispatchData(eventTypeSuccess, {target:this});\r
        this.dispatchComplete();\r
    }\r
    function dispatchComplete(){\r
        projectEventLogger.log("dispatch complete1", this.baseMsg);\r
        if(!this.isRunning)return;\r
        projectEventLogger.log("dispatchComplete1", this.baseMsg);\r
        this.isRunning = false;\r
        this.isCompleted = true;\r
        this.dispatcher.dispatchData(eventTypeComplete, {target:this})\r
    }\r
    function dispatchFailed(data){\r
        if(!this.isFailed)return;\r
        this.isSuccess = false;\r
        this.isFailed = true;\r
        projectFailedLogger.log("dispatchFailed1", this.baseMsg)\r
        this.dispatcher.dispatchData(eventTypeFailed, {target:this, data:data});\r
        this.dispatchComplete()\r
    }\r
    let superRun = that.run;\r
    function run(owner){\r
        this.isSuccess = false;\r
        this.isFailed = false;\r
        superRun(owner);\r
    }\r
    that.dispatchSuccess = dispatchSuccess.bind(that);\r
    that.dispatchComplete = dispatchComplete.bind(that);\r
    that.dispatchFailed = dispatchFailed.bind(that);\r
    that.run = run.bind(that);\r
    return that;\r
}\r
function attachAbstractParent(that){\r
    createGetterSetter(that, "children", [], {}, that.dispatcher)\r
    let superOnExit = that.onExit;\r
    function onExit(){\r
        callProjectMemberListExit(this.children);\r
        superOnExit();\r
    }\r
    that.onExit = onExit.bind(that);\r
}\r
\r
\r
function createBaseAction(that, name, type){\r
    createCommonBase(that, name, type, baseType.action);\r
    return that;\r
}\r
function attachAction(that){\r
\r
    let superRun = that.run;\r
    let superOnExit = that.onExit;\r
    createGetterSetter(that, "conditionOnTriggers", [], {}, that.dispatcher)\r
    createGetterSetter(that, "conditionOffTriggers", [], {}, that.dispatcher)\r
    createGetterSetter(that, "onTriggerData", undefined, {}, that.dispatcher)\r
\r
    function run(parent){\r
        this.runTriggers();\r
        superRun(parent);\r
    }\r
    function checkDoAction(data){\r
        if(!this.isRunnable)return;\r
        this.onTriggerData = data;\r
        this.doAction();\r
    }\r
    function doAction(data){}\r
    function runTriggers(){\r
        if(!that.conditionOnTriggers || that.conditionOnTriggers.length == 0){\r
            that.checkDoAction(undefined)\r
        }else{\r
            that.conditionOnTriggers.forEach((trigger)=>{\r
                this.runTrigger(trigger, eventTypeTriggerCondistionsOn, this.onConditionsOn)\r
            })\r
        }\r
        if(that.conditionOffTriggers){\r
            that.conditionOffTriggers.forEach((trigger)=>{\r
                this.runTrigger(trigger, eventTypeTriggerCondistionsOff, this.onConditionsOff)\r
            });\r
        }\r
    }\r
    function runTrigger(trigger, eventType, cb){\r
        trigger.dispatcher.listenDomainData(eventType, this, cb);\r
        setChildProjectTaskAction(this, trigger);\r
        trigger.run(this);\r
    }\r
    function onConditionsOn(event){\r
        // console.log("onConditionsOnonConditionsOn event is", Object.keys(event))\r
        this.checkDoAction(event && event.data ? event.data : event)\r
    }\r
    function onConditionsOff(event){\r
    }\r
    function onExit(){\r
        this.exitTriggers();\r
        superOnExit();\r
    }\r
    function exitTriggers(){\r
        callProjectMemberListExit(this.conditionOnTriggers);\r
        callProjectMemberListExit(this.conditionOffTriggers);\r
    }\r
    that.run = run.bind(that);\r
    that.checkDoAction = checkDoAction.bind(that);\r
    that.doAction = doAction.bind(that);\r
    that.runTriggers = runTriggers.bind(that);\r
    that.runTrigger = runTrigger.bind(that);\r
    that.onExit = onExit.bind(that);\r
    that.exitTriggers = exitTriggers.bind(that);\r
    that.onConditionsOn = onConditionsOn.bind(that);\r
    that.onConditionsOff = onConditionsOff.bind(that);\r
    return that;\r
}\r
function attachConcurrentGroup(that){\r
\r
    attachAbstractAct(that);\r
    attachAbstractParent(that);\r
    createGetterSetter(that, "completeConditions", [], {}, that.dispatcher)\r
    // that.completeConditions = [\r
    //     // 数组内的是children的index，index标记的是必须完成的。\r
    //     // [0]\r
    //     // [1,3]\r
    // ];\r
    function checkIsSuccess(){\r
        if(this.completeConditions.length == 0){\r
            projectFlowLogger.log("checkIsSuccess1 completeConditions.length is zero");\r
            return true;\r
        }\r
        for (let i = 0; i < this.completeConditions.length; i++) {\r
            let list = this.completeConditions[i];\r
            let hasFailed = false;\r
            for (let j = 0; j < list.length; j++) {\r
                let action = this.children[list[j]];\r
                if(action.isSuccess == false){\r
                    projectFailedLogger.log("checkIsSuccess1 hasFailed");\r
                    hasFailed = true;\r
                    break;\r
                }\r
            }\r
            if(!hasFailed){\r
                projectFlowLogger.log("checkIsSuccess1 !hasFailed")\r
                return true;\r
            }\r
        }\r
        return false;\r
    }\r
\r
    function checkSuccess(){\r
        // 已经完成过了就不需要再次派发事件了\r
        if(this.isSuccess)return;\r
        if(!this.checkIsSuccess())return;\r
        this.dispatchSuccess();\r
    }\r
\r
    function checkComplete(){\r
        // 每当child完成后就检测一下是否本组已完成，如果条件检测已完成则视为已完成，不在管打酱油的是否还在执行。\r
        // 如果有酱油动作在其具备条件时想完成需要覆写这些方法重构检测条件。\r
        if(this.isSuccess)return;\r
        for (let i = 0; i < this.children.length; i++) {\r
            let action = this.children[i];\r
            if(!action.isExited)return;\r
        }\r
        this.dispatchComplete();\r
    }\r
    function onChildSuccess(event){\r
        projectEventLogger.log("onChildSuccess1 child complete", this.name, event.target.name)\r
        this.checkSuccess();\r
    }\r
    function onChildFailed(event){\r
        projectFailedLogger.log("onChildFailed1 child failed", this.name, event.target.name);\r
        this.checkSuccess();\r
    }\r
    function onChildComplete(event){\r
        projectEventLogger.log("onChildComplete1 child complete", this.name, event.target.name);\r
        this.checkComplete();\r
    }\r
\r
    function onRun(){\r
        for(let i = 0; i < this.children.length; i ++){\r
            let child = this.children[i];\r
            child.dispatcher.listenData(eventTypeComplete, this.onChildComplete)\r
            child.dispatcher.listenData(eventTypeFailed, this.onChildFailed)\r
            child.dispatcher.listenData(eventTypeSuccess, this.onChildSuccess)\r
            setChildProjectTaskAction(this, child);\r
            child.run(this);\r
        }\r
    }\r
    let superOnExit = that.onExit;\r
    function onExit(){\r
        callProjectMemberListExit(this.children);\r
        superOnExit();\r
    }\r
    that.checkIsSuccess = checkIsSuccess.bind(that);\r
    that.onChildSuccess = onChildSuccess.bind(that);\r
    that.onChildFailed = onChildFailed.bind(that);\r
    that.onChildComplete = onChildComplete.bind(that);\r
    that.checkSuccess = checkSuccess.bind(that);\r
    that.checkComplete = checkComplete.bind(that);\r
    that.onRun = onRun.bind(that);\r
}\r
\r
function attachQueueGroup(that){\r
\r
    attachAbstractAct(that);\r
    attachAbstractParent(that);\r
    createGetterSetter(that, "childIndex", 0, {}, that.dispatcher);\r
    function onChildSuccess(event){\r
        projectEventLogger.log("onChildSuccess1 child complete", this.name, event.target.name)\r
        this.checkDoNextOrComplete();\r
    }\r
\r
    function checkDoNextOrComplete(){\r
        if(!this.isRunnable)return;\r
        projectEventLogger.log("attachQueueGroup heckDoNextOrComplete1 child check do next or complete", this.name, this.childIndex , this.children.length - 1)\r
        if(this.childIndex < this.children.length - 1){\r
            this.childIndex ++\r
            this.checkRunIndex()\r
        }else{\r
            this.dispatchSuccess();\r
        }\r
    }\r
    function onChildFailed(event){\r
        projectFailedLogger.log("onChildFailed child failed", this.name, event.target.name)\r
        // if data == children[n]\r
        // 判断是否是必须执行完毕的，如果是必须执行的则提示人工干预或者放弃继续执行\r
        // 如果是非必须执行的则忽略跳过\r
        this.dispatchFailed({target:this, data:event.data})\r
    }\r
    function onChildComplete(event){\r
        projectEventLogger.log("child complete", this.name, event.target.name)\r
        // this.dispatchComplete();\r
    }\r
    let superOnRun = that.onRun;\r
    function onRun(){\r
        projectFlowLogger.log("onRun", this.name)\r
        this.checkRunIndex();\r
        superOnRun();\r
    }\r
\r
    function checkRunIndex(){\r
        let child = this.children[this.childIndex];\r
        if(child == undefined){\r
            projectFlowLogger.log("checkRunIndex is  undefined", this.childIndex)\r
            this.dispatchFailed({err:new Error("check run index child is undefined"), index:this.childIndex});\r
            return\r
        }\r
        child.dispatcher.listenData(eventTypeComplete, this.onChildComplete);\r
        child.dispatcher.listenData(eventTypeFailed, this.onChildFailed);\r
        child.dispatcher.listenData(eventTypeSuccess, this.onChildSuccess);\r
        setChildProjectTaskAction(this, child);\r
        child.run(this);\r
    }\r
\r
    that.onChildSuccess = onChildSuccess.bind(that);\r
    that.checkDoNextOrComplete = checkDoNextOrComplete.bind(that);\r
    that.onChildFailed = onChildFailed.bind(that);\r
    that.onChildComplete = onChildComplete.bind(that);\r
    that.onRun = onRun.bind(that);\r
    that.checkRunIndex = checkRunIndex.bind(that);\r
    return that;\r
}\r
function setChildProjectTaskAction(that, child){\r
    let project = that.baseType == baseType.project ? that : that.project;\r
    child.project = project;\r
    if(child.baseType == baseType.action || child.baseType == baseType.trigger){\r
        // that有可能是task，也可能是actionGroup\r
        child.task = that.baseType == baseType.task ? that : that.task;\r
    }\r
    if(child.baseType == baseType.trigger){\r
        // 如果that是trigger则返回that的action\r
        child.action = that.baseType == baseType.action ? that : that.action\r
    }\r
    if(!that.baseType){\r
        throw new Error(\`setChildProjectTaskAction that no base type \${that.type}, \${that.name}\`)\r
    }\r
}\r
function createSingleAction(that, name, type){\r
\r
    that = createBaseAction(that, name, type);\r
    attachAbstractAct(that)\r
    attachAction(that);\r
    return that;\r
}\r
function createConcurrentActionGroup(that, name, type){\r
\r
    that = createBaseAction(that, name, type);\r
    attachConcurrentGroup(that);\r
    return that;\r
}\r
function createTask(that, name, type){\r
\r
    that = createCommonBase(that, name, type, baseType.task);\r
    attachQueueGroup(that);\r
    return that;\r
}\r
function createProject(that, name, type){\r
    that = createCommonBase(that, name, type, baseType.project);\r
    attachQueueGroup(that);\r
    function terminate(){\r
        console.log("project call terminate")\r
        that.isTerminated = true;\r
        that.exit();\r
    }\r
    that.terminate = terminate.bind(that);\r
    return that;\r
}\r
function buildTrigger(initData, action){\r
    let trigger = createTrigger({}, initData.name, initData.type);\r
    trigger.data = initData.data;\r
    trigger.action = action;\r
    trigger.task = action.task;\r
    trigger.project = action.project;\r
    if(initData.type){\r
        javaLib["fanfanlo/javajs/v1/project/store"].getTrigger(initData.type).attach(trigger);\r
    }\r
    return trigger;\r
}\r
\r
function buildActionList(children, task){\r
    let list = [];\r
    for (let i = 0; i < children.length; i++) {\r
        let initData = children[i];\r
        let action = buildAction(initData, task);\r
        list.push(action);\r
    }\r
    return list;\r
}\r
\r
function buildTriggerList(dest, source, action){\r
    dest = dest || [];\r
    if(!source)return  dest;\r
    source.forEach((data)=>{\r
        dest.push(buildTrigger(data, action))\r
    });\r
    return dest;\r
}\r
function buildAction(initData, task){\r
    let action = {};\r
    if(initData.children){\r
        action = createConcurrentActionGroup(action, initData.name, initData.type);\r
        action.children = buildActionList(initData.children);\r
    }else{\r
        action = createSingleAction(action, initData.name, initData.type);\r
    }\r
    action.task = task;\r
    action.project = task.project;\r
    action.data = initData.data;\r
    action.conditionOnTriggers = buildTriggerList(action.conditionOnTriggers, initData.conditionOnTriggers, action);\r
    action.conditionOffTriggers = buildTriggerList(action.conditionOffTriggers, initData.conditionOffTriggers, action);\r
    if(initData.type){\r
        javaLib["fanfanlo/javajs/v1/project/store"].getAction(initData.type).attach(action);\r
    }\r
    return action;\r
}\r
function buildTask(initData){\r
    let task = createTask({}, initData.name, initData.type);\r
    task.children = buildActionList(initData.children, task);\r
    if(initData.type){\r
        javaLib["fanfanlo/javajs/v1/project/store"].getTask(initData.type).attach(task);\r
    }\r
    task.data = initData.data;\r
    return task;\r
}\r
function buildProject(initData){\r
    let project = createProject({}, initData.name, initData.type);\r
    for (let i = 0; i < initData.children.length; i++) {\r
        let taskInitData = initData.children[i];\r
        let task = buildTask(taskInitData);\r
        task.project = project;\r
        project.children.push(task);\r
    }\r
    if(initData.type){\r
        javaLib["fanfanlo/javajs/v1/project/store"].getProject(initData.type).attach(project);\r
    }\r
    project.data = initData.data;\r
    return project;\r
}\r
function projectBuilder(initData){\r
    try{\r
        projectInitData = initData.projectInitData;\r
        let project = buildProject(projectInitData);\r
        function onScriptCallExit(){\r
            // project.terminate();\r
            if(project.isTerminated || project.isExited || project.isSuccess || project.isFailed)return;\r
            project.isTerminated = true;\r
            project.exit();\r
            project.dispatchComplete();\r
        }\r
        addScriptExitListener(onScriptCallExit);\r
        project.dispatcher.listenData(eventTypeComplete,(event)=>{\r
            console.log("ppppppppppproject complete");\r
            project.exit();\r
            console.log("ppppppppppproject completed")\r
        })\r
        project.dispatcher.listenData(eventTypeFailed,(event)=>{\r
            console.log("ppppppppppproject eventTypeFailed");\r
            project.exit();\r
            console.log("ppppppppppproject eventTypeFailed2")\r
        })\r
        project.dispatcher.listenData(eventTypeExit,(event)=>{\r
            jsCallComplete();\r
        });\r
        project.run();\r
    }catch(e){\r
        console.log("java error projectBuilder3, fanfanlo/javajs/v1/project/base/projectMembers ", e.message, e.stack, e.stack);\r
    }\r
}\r
\r
return {projectBuilder, eventTypeTriggerCondistionsOn, eventTypeTriggerCondistionsOff,\r
eventTypeDataAttached, eventTypeComplete, eventTypeError,\r
    eventTypeExit, eventTypeFailed, eventTypeSuccess,\r
    baseType}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/base/projectMembers.java.js", e);
    }
    })()
    `,dependencies:[{path:"fanfanlo/javajs/v1/event/createEventDispatcher",properties:["createEventDispatcher"]},{path:"fanfanlo/javajs/v1/utils/createGetterSetter",properties:["createGetterSetter"]}]},"fanfanlo/javajs/v1/project/base/projectRunner":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({
            get createEventDispatcher(){
                return javaLib["fanfanlo/javajs/v1/event/createEventDispatcher"].createEventDispatcher;
            }
            ,
            get createGetterSetter(){
                return javaLib["fanfanlo/javajs/v1/utils/createGetterSetter"].createGetterSetter;
            }
            ,
            get eventTypeExit(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeExit;
            }
            }){
            \r
\r
let eventTypeComplete = "eventTypeComplete";\r
let eventTypeFailed = "eventTypeFailed";\r
let eventTypeSuccess = "eventTypeSuccess";\r
let eventTypeError = "eventTypeError"\r
let eventTypeExit = "eventTypeExit";\r
let eventTypeTriggerCondistionsOn = "eventTypeTriggerCondistionsOn"\r
let eventTypeTriggerCondistionsOff = "eventTypeTriggerCondistionsOff"\r
let baseType = {\r
    trigger:"trigger",\r
    action:"action",\r
    task:"task",\r
    project:"project"\r
};\r
function callProjectMemberListExit(list){\r
    for (let i = 0; i < list.length; i++) {\r
        try{\r
            list[i].exit();\r
        }catch(e){\r
            console.log("java error callProjectMemberListExit, fanfanlo/javajs/v1/project/base/base ", e.message);\r
        }\r
    }\r
}\r
function createCommonBase(that, name, type, baseType){\r
\r
    baseInternalIndex++\r
    that = that || {};\r
    let dispatcher = createEventDispatcher();\r
    let loggerName = name || baseType || type;\r
    let logger = console.createSubLogger(\`\${loggerName}:\${baseInternalIndex}\`);\r
    // let logger = com.fanfanlo.lib.utils.Logger.Companion.create(\`\${loggerName}:\${baseInternalIndex}\`);\r
    logger.log(\`test111.name=\${name},baseType=\${baseType}\`);\r
    createGetterSetter(that, "logger", logger, {readonly:true});\r
    // createGetterSetter(that, "log", log, {readonly:true});\r
    createGetterSetter(that, "dispatcher", dispatcher, {readonly:true}, undefined, undefined, undefined)\r
    createGetterSetter(that, "baseType", baseType, {readonly:true}, that.dispatcher);\r
    createGetterSetter(that, "isRunnable", undefined, {readonly:true}, undefined, undefined, (value, that, key)=>{\r
        let bl = isScriptRunnable && (that.project? that.project.isRunnable : true) &&\r
            (that.owner ? that.owner.isRunnable : true) && (!that.isExited && !that.isTerminated)\r
        // logger.log("settgett isScriptRunnable", isScriptRunnable, \`has project=\${that.project != undefined}\`, \`project.isRunnable=\${that.project?that.project.isRunnable:undefined}\`,\r
        //     \`has owner=\${that.owner != undefined}\`, \`owner.isRunnable=\${that.owner?that.owner.isRunnable : undefined}\`, \`isExited=\${that.isExited}\`, \`isTerminated=\${that.isTerminated}\`, \`name is \${that.name}\`, \`type is \${that.type}\`, \`bl=\${bl}\`)\r
        return bl;\r
    });\r
    createGetterSetter(that, "baseMsg", undefined, {readonly:true}, undefined, undefined, (value, that, key)=>{\r
        return \`base msg|baseInternalIndex is \${that.baseInternalIndex}, baseType is \${that.baseType}, name is \${that.name}, type is \${that.type}\`\r
    });\r
    createGetterSetter(that, "data", undefined, {}, dispatcher)\r
    createGetterSetter(that, "buildData", undefined, {}, dispatcher)\r
    createGetterSetter(that, "owner", undefined, {}, dispatcher)\r
    createGetterSetter(that, "isRunning", false, {}, dispatcher)\r
    createGetterSetter(that, "isExited", false, {}, dispatcher)\r
    createGetterSetter(that, "isTerminated", false, {}, dispatcher)\r
    createGetterSetter(that, "name", name || type, {}, dispatcher)\r
    createGetterSetter(that, "type", type, {}, dispatcher)\r
    createGetterSetter(that, "baseInternalIndex", baseInternalIndex, {readonly:true}, dispatcher)\r
    createGetterSetter(that, "project", undefined, {}, dispatcher)\r
    createGetterSetter(that, "task", undefined, {}, dispatcher);\r
\r
    function run(owner){\r
        this.owner = owner;\r
        if(!this.isRunnable){\r
            return;\r
        }\r
        this.isRunning = true;\r
        this.onRun()\r
    }\r
    function onRun(){}\r
    function exit(){\r
        this.logger.log("exit", this.type)\r
        if(this.isExited)return;\r
        this.isExited = true;\r
        this.dispatcher.dispatch(eventTypeExit)\r
        this.dispatcher.removeAllListeners();\r
        this.onExit();\r
    }\r
    function onExit(){}\r
    that.run = run.bind(that);\r
    that.onRun = onRun.bind(that);\r
    that.exit = exit.bind(that);\r
    that.onExit = onExit.bind(that);\r
    return that;\r
}\r
\r
function runProject(project){\r
    let triggerActionGroup = project.triggerActionGroup;\r
    let triggerActionGroupList = triggerActionGroup.list;\r
    for (let i = 0; i < triggerActionGroupList.length; i++) {\r
        runTriggerActionGroup(triggerActionGroupList[i]);\r
    }\r
    function runTriggerActionGroup(triggerActionGroup){\r
        let triggerGroup = triggerActionGroup.triggerGroup;\r
        let triggerGroupList = triggerGroup.list;\r
        let isSequential = triggerGroup.isSequential;\r
        isSequential ? triggerGroupRunSequential() : triggerGroupRunConcurrent();\r
        function triggerGroupRunConcurrent(){\r
            for (let j = 0; j < triggerGroupList.length; j++) {\r
                let trigger = triggerGroupList[j];\r
                trigger.run();\r
            }\r
        }\r
        let triggerGroupRunIndex = 0;\r
        function triggerGroupRunSequential(){\r
            let trigger = triggerGroupList[triggerGroupRunIndex];\r
            trigger.listen(onTriggerCompleted);\r
            trigger.run();\r
            function onTriggerCompleted(){\r
                if(triggerGroupRunIndex == triggerGroupList.length - 1){\r
                    checkTriggerGroupComplete();\r
                }else{\r
                    triggerGroupRunIndex ++;\r
                    triggerGroupRunSequential();\r
                }\r
            }\r
        }\r
        function checkTriggerGroupComplete() {\r
            isSequential ? checkTriggerGroupCompleteSequential() : checkTriggerGroupCompleteConcurrent();\r
        }\r
        function checkTriggerGroupCompleteSequential() {\r
\r
        }\r
        function checkTriggerGroupCompleteConcurrent() {\r
\r
        }\r
        function runActionGroup(){\r
\r
        }\r
    }\r
}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/base/projectRunner.java.js", e);
    }
    })()
    `,dependencies:[{path:"fanfanlo/javajs/v1/event/createEventDispatcher",properties:["createEventDispatcher"]},{path:"fanfanlo/javajs/v1/utils/createGetterSetter",properties:["createGetterSetter"]},{path:"fanfanlo/javajs/v1/project/base/projectMembers",properties:["eventTypeExit"]}]},"fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({
            get runNodeOperator(){
                return javaLib["fanfanlo/javajs/v1/project/components/action/a11y/NodeOperator"].runNodeOperator;
            }
            }){
            \r
\r
/**\r
 *\r
 * @param operateConf\r
 * @param logger\r
 * @param that that is project's action, has properties and methods [dispatchSuccess, isRunnable] will be used.\r
 * @returns {{createOperator: createOperator, runOperator: runOperator}}\r
 */\r
function createA11yOperator(operateConf, l, that){\r
    let logger = l.createSubLogger(\`createA11yOperatorFn\`);\r
    logger.log("hiiiiiiiiiiiiiii")\r
    let nodesChecker;\r
\r
    function createA11yOperator(operateConf){\r
        // nodesChecker = createNodeChecker(operateConf, logger, that)\r
        nodesChecker = runNodeOperator(operateConf, logger, that)\r
    }\r
    function createNodeOperator(operateConf){\r
        // nodesChecker =  createNodeChecker(operateConf, logger, that);\r
        nodesChecker =  runNodeOperator(operateConf, logger, that);\r
    }\r
    function createOperator(operateConf){\r
        switch (operateConf.type){\r
            case "node":\r
                createNodeOperator(operateConf);\r
                break;\r
            case "a11y":\r
                createA11yOperator(operateConf);\r
                break;\r
            default:\r
                throw new Error("no operate conf")\r
        }\r
    }\r
    function runOperator(){\r
        createOperator(operateConf);\r
        try {\r
            nodesChecker.doAction();\r
        }catch (e) {\r
            logger.log(\`runOperatoreeeeeeeeror\`, e.message, e.stack)\r
        }\r
    }\r
    return {createOperator, runOperator}\r
}\r
\r
return {createA11yOperator}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator.java.js", e);
    }
    })()
    `,dependencies:[{path:"fanfanlo/javajs/v1/project/components/action/a11y/NodeOperator",properties:["runNodeOperator"]}]},"fanfanlo/javajs/v1/project/components/action/a11y/NodeOperator":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({
            get createExitHandler(){
                return javaLib["fanfanlo/javajs/v1/utils/ExitHandler"].createExitHandler;
            }
            ,
            get createCheckNodesOnShow(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].createCheckNodesOnShow;
            }
            ,
            get createNodeAction(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].createNodeAction;
            }
            ,
            get globalActionBack(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].globalActionBack;
            }
            ,
            get hideIme(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].hideIme;
            }
            ,
            get keyboardIsOpen(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].keyboardIsOpen;
            }
            ,
            get setTimeout(){
                return javaLib["fanfanlo/javajs/v1/utils/setTimeout"].setTimeout;
            }
            ,
            get clearTimeout(){
                return javaLib["fanfanlo/javajs/v1/utils/setTimeout"].clearTimeout;
            }
            ,
            get createIntervalChecker(){
                return javaLib["fanfanlo/javajs/v1/utils/IntervalCheck"].createIntervalChecker;
            }
            ,
            get createA11yOperator(){
                return javaLib["fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator"].createA11yOperator;
            }
            }){
            \r
\r
\r
let runningConf = undefined;\r
function runNodeOperator(operateConf, logger, that){\r
    runningConf = operateConf;\r
    let shortMsg = \`operateConf short info \${operateConf.name ? operateConf.name : JSON.stringify(operateConf)}\`\r
    let backToPnAn = !!operateConf.backToPackageActivity\r
    logger.log("iiiiiiiiiimmmmmmmmmmmmmm logger")\r
    let l  = logger.createSubLogger(\`runNodeOperatorFn22\`);\r
    l.log("iiiiiiiiiiimmmmmmmmmmm l")\r
    logger = l\r
    logger.log(\`operateConfIs1\`, shortMsg, operateConf);\r
    let exitHandler = createExitHandler(that.dispatcher, [a11yModel], logger);\r
    exitHandler.addExitFn(onExit);\r
    let domain = exitHandler.domain;\r
    let isComplete = false;\r
    function setComplete(){\r
        if(isComplete)return;\r
        let l = logger.createSubLogger(\`setCompleteFn-\${operateConf.name}\`);\r
        l.log(\`complete11 operate conf\`, operateConf);\r
        isComplete = true;\r
        onExit();\r
    }\r
    function onExit() {\r
        let l = logger.createSubLogger(\`onExitFn-\${operateConf.name}\`);\r
        l.log(\`onExit1245\`, operateConf);\r
        removeListener();\r
    }\r
    function removeListener(){\r
        tryRemoveContentChangeListener();\r
        tryRemovePackageActivityChangeListener()\r
        tryClearLastCheckNodesChanceTimer();\r
    }\r
    let contentChangeListenData = undefined;\r
    function tryRemoveContentChangeListener() {\r
        let data = contentChangeListenData;\r
        contentChangeListenData = undefined;\r
        if (data == undefined) return;\r
        a11yModel.removeListener(data);\r
    }\r
    let packageActivityChangeData = undefined;\r
    function tryRemovePackageActivityChangeListener(){\r
        let data = packageActivityChangeData;\r
        packageActivityChangeData = undefined;\r
        if(data == undefined)return;\r
        a11yModel.removeListener(data);\r
    }\r
\r
    let nodesCheckCompleted = false;\r
    function canRun(){\r
        return !isComplete && !nodesCheckCompleted && runningConf == operateConf;\r
    }\r
    function listenPnAn(){\r
        let l = logger.createSubLogger(\`listenPnAnFn-\${operateConf.name}\`);\r
        if (!that.isRunnable || !canRun()) return;\r
        if (packageActivityChangeData == undefined) {\r
            packageActivityChangeData = a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastFullScreenPackageActivityChanged, domain, onPackageOrActivityChange);\r
        }\r
    }\r
    function onPackageOrActivityChange(e){\r
        checkPnAnLater();\r
    }\r
    let intervalCheckPnAn = undefined;\r
    function checkPnAnLater(){\r
        if(intervalCheckPnAn == undefined){\r
            intervalCheckPnAn = createIntervalChecker(operateConf.globalBackActionConf.interval, checkPnAn, logger);\r
        }\r
        intervalCheckPnAn.checkRun();\r
    }\r
    let laterCheckNodesCheckTimeOver;\r
    let prevActivity = undefined\r
    function listenPnAnAndCheckLater(){\r
        listenPnAn();\r
        checkPnAnLater();\r
    }\r
    function checkPnAn(){\r
        let l = logger.createSubLogger(\`checkPnAnFn-\${operateConf.name}\`);\r
        if (!that.isRunnable || !canRun()) return;\r
\r
        let pn = a11yModel.lastFullScreenPackage;\r
        if (pn != operateConf.packageName) {\r
            l.log(\`error error a11yModel.lastFullScreenPackage != operateConf.packageName, a11yModel.lastFullScreenPackage: \${a11yModel.lastFullScreenPackage}, operateConf.packageName:\${operateConf.packageName}\`);\r
            // 如果package不同就停止侦听node更新\r
            tryRemoveContentChangeListener();\r
            dispatchFailed({reason:\`package not match\`, keyboardIsOpen:keyboardIsOpen()})\r
            return;\r
        }\r
        let nowActivity = a11yModel.lastFullScreenActivity;\r
        let isActivityMatch = operateConf.activities.some(an => an == nowActivity);\r
        l.log("isMathActivity22", isActivityMatch, nowActivity, keyboardIsOpen())\r
\r
        if(!isActivityMatch){\r
            tryRemoveContentChangeListener();\r
            if(!operateConf.globalBackActionConf){\r
                dispatchFailed({nowActivity,activities:operateConf.activities, reason:"activity not match"});\r
                return;\r
            }\r
            let interval = operateConf.globalBackActionConf.interval;\r
            if(keyboardIsOpen()){\r
                interval = 10;\r
            }else if(prevActivity != nowActivity){\r
                interval = 10;\r
            }\r
            prevActivity = nowActivity\r
            let bl = globalActionBack(interval);\r
            l.log(\`global2 action back \${bl}\`);\r
            listenPnAnAndCheckLater();\r
            return;\r
        }\r
        if(operateConf.nodeConditions){\r
            tryRemovePackageActivityChangeListener();\r
            checkNodesLater();\r
        }else{\r
            dispatchSuccess({from:"checkPnAn"});\r
        }\r
    }\r
    function runLaterCheckNodesCheckTimeOver(){\r
        if(laterCheckNodesCheckTimeOver != undefined)return;\r
        laterCheckNodesCheckTimeOver = setTimeout(onLaterCheckNodesCheckTimeOver, operateConf.nodesLastCheckTime)\r
    }\r
    function tryClearLastCheckNodesChanceTimer(){\r
        let id = laterCheckNodesCheckTimeOver;\r
        laterCheckNodesCheckTimeOver = undefined;\r
        clearTimeout(id);\r
    }\r
    function onLaterCheckNodesCheckTimeOver(){\r
        dispatchFailed({reason:\`nodesLastCheckTime time over \${operateConf.nodesLastCheckTime}\`})\r
    }\r
    let intervalCheckLaterCheckNodes = undefined;\r
    function checkNodesLater(){\r
        let l = logger.createSubLogger(\`checkNodesLaterFn-\${operateConf.name}\`);\r
        if (!that.isRunnable || !canRun()) return;\r
        // runLaterCheckNodes();\r
        if(intervalCheckLaterCheckNodes == undefined){\r
            intervalCheckLaterCheckNodes = createIntervalChecker(operateConf.nodesCheckInterval, checkNodes, l);\r
        }\r
        l.log(\`run2 intervalCheckLaterCheckNodes.checkRun\`);\r
        intervalCheckLaterCheckNodes.checkRun();\r
    }\r
    let nodesChecker = undefined;\r
    function checkNodes(){\r
        let l = logger.createSubLogger(\`checkNodesFn-\${operateConf.name}\`);\r
        if (!that.isRunnable || !canRun()) return;\r
        runLaterCheckNodesCheckTimeOver();\r
        if(nodesChecker == undefined){\r
            nodesChecker = createCheckNodesOnShow(operateConf, onCheckNodesBack, l)\r
        }\r
        l.log(\`nodesChecker.check22\`);\r
        nodesChecker.check();\r
    }\r
    function onCheckNodesBack(nodes, isOk, err, matchedCheckList){\r
        let l = logger.createSubLogger(\`onCheckNodesBack2-\${operateConf.name}\`);\r
        l.log(\`1onCheckNodesBack isRunnable=\${that.isRunnable}, canrun=\${canRun()}\`)\r
        if (!that.isRunnable || !canRun()) return;\r
        if(isOk){\r
            setComplete();\r
        }\r
        l.log("1params", nodes ? nodes.size() : "no nodes result", isOk, err)\r
        l.log('1matchedCheckList', matchedCheckList)\r
        l.log('1conditions', operateConf.conditions)\r
        l.log('1Nodeconditions', operateConf.nodeConditions)\r
        if (isOk) {\r
            nodesCheckCompleted = true;\r
            removeListener();\r
            checkNodesAction(nodes, matchedCheckList);\r
        }else{\r
            l.log(\`bbbbbbbbbbbbbbbackonCheckNodesBack isRunnable \${that.isRunnable}, canrun \${canRun()}\`)\r
            onNodesNotMatch();\r
        }\r
    }\r
\r
    function onNodesNotMatch(){\r
        if(isInPnAn()){\r
            listenContentChange();\r
        }else if(keyboardIsOpen()){\r
            // hideIme();\r
            globalActionBack(operateConf.globalBackActionConf.interval)\r
            // 这里预期是在pn an时打开了ime，关闭ime后必然是pn an，所以下一步是执行checkNodesLater，但是这里似乎做一个很小的延时就好了.\r
            setTimeout(checkNodesLater, 100 * 10);\r
        }else{\r
            checkPnAn();\r
        }\r
    }\r
    function isInPnAn(){\r
        let pn = a11yModel.lastFullScreenPackage;\r
        if(pn != operateConf.packageName)return false;\r
        let activity = a11yModel.lastFullScreenActivity;\r
        let bl = operateConf.activities.some(an => an == activity);\r
        return bl;\r
    }\r
    function listenContentChange() {\r
        if (!that.isRunnable || !canRun()) return;\r
        if(contentChangeListenData != undefined)return;\r
        tryRemoveContentChangeListener();\r
        let typeId = android.view.accessibility.AccessibilityEvent.TYPE_WINDOW_CONTENT_CHANGED\r
        let type = com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.getAccessibilityEventType(typeId);\r
        contentChangeListenData = a11yModel.listenDomainData(type, domain, onContentChange)\r
        checkNodes();\r
    }\r
\r
    function onContentChange(e) {\r
        if (!that.isRunnable || !canRun()) return;\r
        checkNodes();\r
    }\r
\r
    function checkNodesAction(nodes, matchedCheckList){\r
        if (!that.isRunnable) return;\r
        let l = logger.createSubLogger(\`checkNodesAction-\${operateConf.name}\`);\r
        l.log(\`2node size \${nodes.size()}\`)\r
        l.log(\`2matchedCheckList \${matchedCheckList}\`)\r
        if((!nodes || nodes.size() == 0) && (!matchedCheckList || matchedCheckList.length == 0)){\r
            dispatchFailed({reason:\`no nodes=\${(!nodes || nodes.size() == 0)}, no matchedCheckList=\${(!matchedCheckList || matchedCheckList.length == 0)}\`})\r
            return;\r
        }\r
        let nodeConditions = operateConf.nodeConditions;\r
        for (let i = 0; i < matchedCheckList.length; i++) {\r
            let matchConf = matchedCheckList[i];\r
            l.log("doaction1", matchConf)\r
            if(!matchConf.doAction)continue;\r
            let nodeConf = nodeConditions[matchedCheckList[i].index];\r
            l.log(\`1nodeConf is\`, nodeConf);\r
            let node = nodes[matchedCheckList[i].index];\r
            let actionConf = nodeConf.action;\r
            l.log(\`1actionConf1\`, actionConf)\r
            let nodeAction = createNodeAction(actionConf);\r
            let beforeActionDelay = 1;\r
            let afterActionDelay = 1;\r
            if(nodeAction.type == "SetText"){\r
                beforeActionDelay = actionConf.beforeSetTextDelay || 100 * 1;\r
                afterActionDelay = actionConf.afterSetTextDelay || 100 * 2;\r
                l.log("beforeSetTextDelay333", beforeActionDelay, afterActionDelay)\r
            }\r
            setTimeout(()=>{\r
                l.log(\`nodeAction1\`, nodeAction.type)\r
                l.log(\`nodeAction2\`, nodeAction)\r
                let bl = a11yModel.doAction(node, nodeAction);\r
                l.log("1bbbbbbbbbbbbbbbbbbbbbb2234", bl, nodeAction.type, "bltypeis",typeof bl);\r
                if(bl){\r
                    setTimeout(()=>{\r
                        l.log("bbbbbbbbbbbllllllll")\r
                        checkNodesActionNext(actionConf)\r
                    }, afterActionDelay)\r
                    return;\r
                }else{\r
                    // 去掉当前这match的node和checklist的index数据后再次调用该方法\r
                }\r
            }, beforeActionDelay)\r
            return\r
        }\r
        l.log("dddddddddddddispach success")\r
        // success without actionConf.doAction\r
        dispatchSuccess({checkNodesAction:"no action need to do"});\r
    }\r
    function checkNodesActionNext(actionConf){\r
        if (!that.isRunnable) return;\r
        let l = logger.createSubLogger(\`checkNodesActionNext-\${operateConf.name}\`);\r
        l.log('actionConf1is', actionConf)\r
        if(!actionConf.nextOperateConf){\r
            l.log('dispatchSuccess23')\r
            dispatchSuccess({checkNodesActionNext:"all operator complete"});\r
        }else{\r
            l.log('5createa11yoperator5')\r
            createA11yOperator(actionConf.nextOperateConf, l, that).runOperator();\r
        }\r
    }\r
    function dispatchSuccess(data){\r
        let l = logger.createSubLogger(\`dispatchSuccessFn-\${operateConf.name}\`);\r
        if(!canRun())return;\r
        setComplete();\r
        l.log(\`success2 data\`, data);\r
        if(operateConf.dispatchSuccess){\r
            l.log('nodeOperator.dispatchSuccess2')\r
            that.dispatchSuccess();\r
        }\r
    }\r
    function dispatchFailed(data){\r
        let l = logger.createSubLogger(\`dispatchFailedFn-\${operateConf.name}\`);\r
        if(!canRun())return;\r
        setComplete();\r
        l.log(\`failed reason\`, data);\r
        if(operateConf.dispatchFailed){\r
            l.log('nodeOperator.dispatchFailed2')\r
            that.dispatchFailed(data);\r
        }\r
    }\r
    function checkOvertime() {\r
        let l = logger.createSubLogger(\`checkOvertime-\${operateConf.name}\`);\r
        let overtime = operateConf.overtime;\r
        l.log(\`1overtime1 is \${overtime}\`);\r
        if (overtime == undefined || overtime <= 0) return;\r
        setTimeout(() => {\r
            l.log(\`isRunnable is \${that.isRunnable}, canrun is \${canRun()}\`);\r
            if (that.isRunnable && !isComplete) {\r
                l.log(\`call project terminate msg=\${operateConf.terminateMsg}\`, operateConf);\r
                that.project.terminate();\r
            }\r
        }, overtime)\r
    }\r
    function doAction(){\r
        checkOvertime();\r
        checkPnAn();\r
    }\r
    return {doAction}\r
}\r
\r
return {runNodeOperator}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/action/a11y/NodeOperator.java.js", e);
    }
    })()
    `,dependencies:[{path:"fanfanlo/javajs/v1/utils/ExitHandler",properties:["createExitHandler"]},{path:"fanfanlo/javajs/v1/a11y/a11yUtils",properties:["createCheckNodesOnShow",`\r
    createNodeAction`,`\r
    globalActionBack`," hideIme"," keyboardIsOpen"]},{path:"fanfanlo/javajs/v1/utils/setTimeout",properties:["setTimeout"," clearTimeout"]},{path:"fanfanlo/javajs/v1/utils/IntervalCheck",properties:["createIntervalChecker"]},{path:"fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator",properties:["createA11yOperator"]}]},"fanfanlo/javajs/v1/project/components/action/a11y/NodesChecker":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({
            get createCheckNodesOnShow(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].createCheckNodesOnShow;
            }
            ,
            get createNodeAction(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].createNodeAction;
            }
            ,
            get globalActionBack(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].globalActionBack;
            }
            ,
            get hideImeIfPackageOpened(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].hideImeIfPackageOpened;
            }
            ,
            get keyboardIsOpen(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].keyboardIsOpen;
            }
            ,
            get createIntervalChecker(){
                return javaLib["fanfanlo/javajs/v1/utils/IntervalCheck"].createIntervalChecker;
            }
            ,
            get createExitHandler(){
                return javaLib["fanfanlo/javajs/v1/utils/ExitHandler"].createExitHandler;
            }
            ,
            get setTimeout(){
                return javaLib["fanfanlo/javajs/v1/utils/setTimeout"].setTimeout;
            }
            ,
            get clearTimeout(){
                return javaLib["fanfanlo/javajs/v1/utils/setTimeout"].clearTimeout;
            }
            ,
            get createA11yOperator(){
                return javaLib["fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator"].createA11yOperator;
            }
            }){
            \r
\r
let runningOerateConf = undefined;\r
//@permission android.permission.BIND_ACCESSIBILITY_SERVICE\r
function createNodeChecker(operateConf, logger, that) {\r
    runningOerateConf = operateConf;\r
    logger = logger.createSub("createNodeChecker");\r
    logger.log('createNodeCheckeroperateConf', operateConf)\r
    let exitHandler = createExitHandler(that.dispatcher, [a11yModel], logger);\r
    exitHandler.addExitFn(onExit);\r
    let domain = exitHandler.domain;\r
    let isComplete = false;\r
    function setComplete(){\r
        isComplete = true;\r
        onExit();\r
    }\r
    let nodeDelayChecker = createIntervalChecker(operateConf.nodesCheckInterval, nodesCheckerCheck, logger)\r
    let checkFnChecker = createIntervalChecker(operateConf.nodesCheckInterval, check, logger);\r
\r
    let isCheckNodesLastChance = false;\r
    let checkNodesLastSetTimeoutID = undefined;\r
\r
    function resetCheckNodesLastChance(){\r
        isCheckNodesLastChance = false;\r
        clearCheckNodesLastSetTimeout();\r
    }\r
    function clearCheckNodesLastSetTimeout(){\r
        let id = checkNodesLastSetTimeoutID;\r
        checkNodesLastSetTimeoutID = undefined;\r
        if(!id)return;\r
        clearTimeout(id)\r
    }\r
    function runCheckNodesLastSetTimeout(){\r
        if(checkNodesLastSetTimeoutID != undefined)return;\r
        let delay = operateConf.nodesLastCheckTime == undefined || operateConf.nodesLastCheckTime <=0 ? 100 * 15 : operateConf.nodesLastCheckTime\r
        checkNodesLastSetTimeoutID = setTimeout(runNodesLastCheck, delay)\r
    }\r
    function runNodesLastCheck(){\r
        let l = logger.createSubLogger(\`runNodesLastCheck\`);\r
        l.log("1lastNodesCheck")\r
        clearCheckNodesLastSetTimeout();\r
        isCheckNodesLastChance = true;\r
        nodesCheckerCheck();\r
\r
    }\r
    let checkDoActionCount = 0;\r
    let nodesCheckCompleted = false;\r
    function canRun(){\r
        return !nodesCheckCompleted &&  !isComplete && operateConf == runningOerateConf;\r
    }\r
    function onExit() {\r
        let l = logger.createSubLogger(\`onExit\`);\r
        l.log('eeeeeeeeeeeeexit NodesChecker', operateConf);\r
        checkFnChecker.exit();\r
        nodeDelayChecker.exit();\r
        removeListener();\r
    }\r
    function removeListener(){\r
        tryRemoveContentChangeListener();\r
        tryRemovePackageActivityChangeListener()\r
    }\r
    function checkDoAction() {\r
        let l = logger.createSubLogger(\`checkDoAction\`);\r
        if (keyboardIsOpen()) {\r
            l.log(\`keyboard is open\`);\r
            // 收起ime会调用返回键\r
            // 所以需要配置了可以使用全局快捷键才会执行\r
            if(!operateConf.globalBackActionConf){\r
                l.log(\`globalbackactionconf not set\`, operateConf)\r
                that.dispatchFailed({msg:"ime is open, globalBackActionConf not set"});\r
                return;\r
            }\r
            if (++checkDoActionCount > 5) {\r
                l.log(\`checkDoActionCount more then 5\`)\r
                that.dispatchFailed({msg:"checkDoActionCount more then 5"});\r
                return;\r
            }\r
            let bl = hideImeIfPackageOpened(operateConf.packageName);\r
            l.log(\`hideImeIfPackageOpened return bl = \${bl}\`);\r
            if (bl) {\r
                listenPackageActivity();\r
            }\r
\r
            l.log(\`hideImeIfPackageOpened wait settimeout\`);\r
            setTimeout(() => {\r
                l.log(\`hideImeIfPackageOpened settimeout checkDoAction\`);\r
                checkDoAction();\r
            }, 100 * 15)\r
        } else {\r
            act();\r
        }\r
    }\r
\r
    function doAction() {\r
        logger.log("doaction")\r
        checkOvertime();\r
        // that.exitTriggers();\r
        checkDoAction();\r
\r
    }\r
\r
\r
    that.doAction = doAction.bind(that);\r
\r
    let contentChangeListenData = undefined;\r
\r
    function tryRemoveContentChangeListener() {\r
        let data = contentChangeListenData;\r
        contentChangeListenData = undefined;\r
        if (data == undefined) return;\r
        a11yModel.removeListener(data);\r
    }\r
\r
    function act() {\r
        logger.log(\`act1\`);\r
        listenPackageActivity();\r
        checkFnChecker.checkRun();\r
    }\r
\r
    let packageActivityChangeData = undefined;\r
\r
    function tryRemovePackageActivityChangeListener(){\r
        let data = packageActivityChangeData;\r
        packageActivityChangeData = undefined;\r
        if(data == undefined)return;\r
        a11yModel.removeListener(data);\r
    }\r
    function listenPackageActivity() {\r
        let l = logger.createSubLogger(\`listenPackageActivity\`);\r
        // l.log("listenpackageactivity1")\r
        if (!that.isRunnable || !canRun()) return;\r
        if (packageActivityChangeData == undefined) {\r
            l.log("listenpackageactivity1 create")\r
            packageActivityChangeData = a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastFullScreenPackageActivityChanged, domain, onPackageOrActivityChange);\r
        }\r
        listenContentChange();\r
    }\r
\r
    function onPackageOrActivityChange(e) {\r
        if (!that.isRunnable || !canRun()) return;\r
        resetCheckNodesLastChance();\r
        checkFnChecker.checkRun();\r
    }\r
\r
    function check() {\r
        if (!that.isRunnable || !canRun()) return;\r
        let l = logger.createSubLogger(\`1check\`);\r
        if (a11yModel.lastFullScreenPackage != operateConf.packageName) {\r
            l.log(\`error error a11yModel.lastFullScreenPackage != operateConf.packageName, a11yModel.lastFullScreenPackage: \${a11yModel.lastFullScreenPackage}, operateConf.packageName:\${operateConf.packageName}\`);\r
            tryRemoveContentChangeListener();\r
            //这种情况可能需要人工干预了，不行的话可能得放弃任务\r
            return;\r
        }\r
        let nowActivity = a11yModel.lastFullScreenActivity;\r
        let isMathActivity = operateConf.activities.some(an => an == nowActivity);\r
        l.log("isMathActivity", isMathActivity, nowActivity)\r
        if (!isMathActivity && operateConf.globalBackActionConf) {\r
            l.log(\`isMatchActivity=false\`);\r
            let bl = globalActionBack(operateConf.globalBackActionConf.interval);\r
            checkFnChecker.checkRun();\r
        } else if (operateConf.nodeConditions) {\r
            l.log(\`has nodeConditions1\`);\r
            checkNodes();\r
        } else {\r
            l.log(\`dispatchSuccess2\`);\r
            that.dispatchSuccess();\r
        }\r
    }\r
\r
    function listenContentChange() {\r
        if (!that.isRunnable || !canRun()) return;\r
        tryRemoveContentChangeListener();\r
        let typeId = android.view.accessibility.AccessibilityEvent.TYPE_WINDOW_CONTENT_CHANGED\r
        let type = com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.getAccessibilityEventType(typeId);\r
        contentChangeListenData = a11yModel.listenDomainData(type, domain, onContentChange)\r
    }\r
\r
    function onContentChange(e) {\r
        let l = logger.createSubLogger(\`onContentChange\`);\r
        // l.log(\`ccccccccccontentchange isRunnable \${that.isRunnable}, canrun is  \${canRun()}\`)\r
        if (!that.isRunnable || !canRun()) return;\r
        runCheckNodesLastSetTimeout()\r
        checkFnChecker.checkRun();\r
    }\r
\r
    let nodesChecker = undefined;\r
\r
    function checkNodes() {\r
        let l = logger.createSubLogger(\`checkNodes\`);\r
        // l.log("tttttt isRunnable, canRun", that.isRunnable, canRun());\r
        if (!that.isRunnable || !canRun()) return;\r
        nodeDelayChecker.checkRun();\r
    }\r
\r
    function nodesCheckerCheck() {\r
        if (!that.isRunnable || !canRun()) return;\r
        let l = logger.createSubLogger(\`1nodesCheckerCheck\`);\r
        // l.log(\`nnnnnnnnodesCheckerCheck isRunnable=\${that.isRunnable}, canrun=\${canRun()}\`)\r
        if (!nodesChecker) {\r
            l.log('create nodesChecker')\r
            nodesChecker = createCheckNodesOnShow(operateConf, onCheckNodesBack, logger)\r
        }\r
        // l.log(\`run nodesChecker.check223 \${that.isRunnable}, \${canRun()}\`)\r
        nodesChecker.check();\r
    }\r
\r
    function onCheckNodesBack(nodes, isOk, err, matchedCheckList) {\r
        let l = logger.createSubLogger(\`onCheckNodesBack\`);\r
        l.log(\`ccccccccconCheckNodesBack isRunnable=\${that.isRunnable}, canrun=\${canRun()}\`)\r
        if (!that.isRunnable || !canRun()) return;\r
        if(isOk){\r
            setComplete();\r
        }\r
        l.log("1params", nodes ? nodes.size() : "no nodes result", isOk, err)\r
        l.log('1matchedCheckList is', matchedCheckList)\r
        l.log('1conditions are', operateConf.conditions)\r
        l.log('1Nodeconditions are', operateConf.nodeConditions)\r
        if (isOk) {\r
            resetCheckNodesLastChance();\r
            nodesCheckCompleted = true;\r
            removeListener();\r
            checkNodesAction(nodes, matchedCheckList);\r
        } else if(!isComplete && isCheckNodesLastChance && !nodesCheckCompleted && operateConf.globalBackActionConf) {\r
            l.log(\`1isCheckNodesLastChance=\${isCheckNodesLastChance}, 1nodesCheckCompleted=\${nodesCheckCompleted}\`)\r
            resetCheckNodesLastChance();\r
            let bl = globalActionBack(operateConf.globalBackActionConf.interval);\r
            l.log(\`12globalActionback2 bl=\${bl}\`, operateConf);\r
        }else{\r
            l.log(\`bbbbbbbbbbbbbbbackonCheckNodesBack isRunnable \${that.isRunnable}, canrun \${canRun()}\`)\r
            nodesCheckerCheck();\r
        }\r
    }\r
\r
    function checkNodesAction(nodes, matchedCheckList){\r
        if (!that.isRunnable) return;\r
        let l = logger.createSubLogger(\`checkNodesAction\`);\r
        l.log(\`2node size \${nodes.size()}\`)\r
        l.log(\`2matchedCheckList \${matchedCheckList}\`)\r
        if((!nodes || nodes.size() == 0) && (!matchedCheckList || matchedCheckList.length == 0))return;\r
        let nodeConditions = operateConf.nodeConditions;\r
        for (let i = 0; i < matchedCheckList.length; i++) {\r
            let matchConf = matchedCheckList[i];\r
            l.log("doaction1", matchConf.doAction)\r
            if(!matchConf.doAction)continue;\r
            let nodeConf = nodeConditions[matchedCheckList[i].index];\r
            l.log(\`1nodeConf is\`, nodeConf);\r
            let node = nodes[matchedCheckList[i].index];\r
            let actionConf = nodeConf.action;\r
            l.log(\`1actionConf1\`, actionConf)\r
            let nodeAction = createNodeAction(actionConf);\r
            l.log(\`nodeAction1\`, nodeAction.type)\r
            l.log(\`nodeAction2\`, nodeAction)\r
            let bl = a11yModel.doAction(node, nodeAction);\r
            l.log("1bbbbbbbbbbbbbbbbbbbbbb2234", bl, nodeAction.type, "bltypeis",typeof bl);\r
            if(bl){\r
                l.log("bbbbbbbbbbbllllllll")\r
                checkNodesActionNext(actionConf)\r
                return;\r
            }\r
        }\r
        l.log("dddddddddddddispach success")\r
        // success without actionConf.doAction\r
        that.dispatchSuccess();\r
    }\r
    function checkNodesActionNext(actionConf){\r
        if (!that.isRunnable) return;\r
        let l = logger.createSubLogger(\`checkNodesActionNext\`);\r
        l.log('actionConf1is', actionConf)\r
        if(!actionConf.nextOperateConf){\r
            l.log('dispatchSuccess23')\r
            that.dispatchSuccess();\r
        }else{\r
            l.log('5createa11yoperator5')\r
            createA11yOperator(actionConf.nextOperateConf, logger, that).runOperator();\r
        }\r
    }\r
    function checkOvertime() {\r
        let l = logger.createSubLogger(\`checkOvertime\`);\r
        let overtime = operateConf.overtime;\r
        l.log(\`1overtime1 is \${overtime}\`);\r
        if (overtime == undefined || overtime <= 0) return;\r
        setTimeout(() => {\r
            l.log(\`isRunnable is \${that.isRunnable}, canrun is \${canRun()}\`);\r
            if (that.isRunnable && !isComplete) {\r
                l.log(\`call project terminate msg=\${operateConf.terminateMsg}\`, operateConf);\r
                that.project.terminate();\r
            }\r
        }, overtime)\r
    }\r
    return {doAction}\r
}\r
\r
\r
\r
return {createNodeChecker}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/action/a11y/NodesChecker.java.js", e);
    }
    })()
    `,dependencies:[{path:"fanfanlo/javajs/v1/a11y/a11yUtils",properties:["createCheckNodesOnShow"," createNodeAction",`\r
    globalActionBack`," hideImeIfPackageOpened",`\r
    keyboardIsOpen`]},{path:"fanfanlo/javajs/v1/utils/IntervalCheck",properties:["createIntervalChecker"]},{path:"fanfanlo/javajs/v1/utils/ExitHandler",properties:["createExitHandler"]},{path:"fanfanlo/javajs/v1/utils/setTimeout",properties:["setTimeout"," clearTimeout"]},{path:"fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator",properties:["createA11yOperator"]}]},"fanfanlo/javajs/v1/project/components/action/a11y/TryBackToMain":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({
            get regAction(){
                return javaLib["fanfanlo/javajs/v1/project/store"].regAction;
            }
            ,
            get createCheckNodesOnShow(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].createCheckNodesOnShow;
            }
            ,
            get globalActionBack(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].globalActionBack;
            }
            ,
            get hideImeIfPackageOpened(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].hideImeIfPackageOpened;
            }
            ,
            get keyboardIsOpen(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].keyboardIsOpen;
            }
            ,
            get eventTypeComplete(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeComplete;
            }
            ,
            get eventTypeExit(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeExit;
            }
            ,
            get setTimeout(){
                return javaLib["fanfanlo/javajs/v1/utils/setTimeout"].setTimeout;
            }
            ,
            get createIntervalChecker(){
                return javaLib["fanfanlo/javajs/v1/utils/IntervalCheck"].createIntervalChecker;
            }
            ,
            get createExitHandler(){
                return javaLib["fanfanlo/javajs/v1/utils/ExitHandler"].createExitHandler;
            }
            ,
            get createA11yOperator(){
                return javaLib["fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator"].createA11yOperator;
            }
            }){
            \r
\r
let type = "fanfanlo/javajs/v1/project/components/action/a11y/TryBackToMain"\r
\r
onLibReady(()=>{\r
    regAction(type, attach)\r
}, \`src/droid/java_js/fanfanlo/javajs/v1/project/components/action/a11y/TryBackToMain.java.js\`);\r
\r
function attach(that){\r
    let superDoAction = that.doAction;\r
    let logger = that.logger.createSub("TryBackToMainClazz");\r
    console.log("tyr back to main running")\r
    function doAction(){\r
        superDoAction();\r
        that.exitTriggers();\r
        createA11yOperator(that.data, logger, that).runOperator();\r
        checkOvertime();\r
    }\r
    function checkOvertime(){\r
        let l = logger.createSubLogger(\`TryBackToMainClazz.checkOvertimeFn\`);\r
        let overtime = that.data.overtime;\r
        l.log(\`try back to main overtime is \${overtime}\`);\r
        if(overtime == undefined || overtime <=0)return;\r
        setTimeout(()=>{\r
            l.log(\`isRunnable is \${that.isRunnable}\`);\r
            if(that.isRunnable){\r
                l.log(\`call project terminate\`);\r
                that.project.terminate();\r
            }\r
        }, overtime)\r
    }\r
    that.doAction = doAction.bind(that);\r
}\r
\r
return {type}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/action/a11y/TryBackToMain.java.js", e);
    }
    })()
    `,dependencies:[{path:"fanfanlo/javajs/v1/project/store",properties:["regAction"]},{path:"fanfanlo/javajs/v1/a11y/a11yUtils",properties:["createCheckNodesOnShow",`\r
    globalActionBack`," hideImeIfPackageOpened",`\r
    keyboardIsOpen`]},{path:"fanfanlo/javajs/v1/project/base/projectMembers",properties:["eventTypeComplete"," eventTypeExit"]},{path:"fanfanlo/javajs/v1/utils/setTimeout",properties:["setTimeout"]},{path:"fanfanlo/javajs/v1/utils/IntervalCheck",properties:["createIntervalChecker"]},{path:"fanfanlo/javajs/v1/utils/ExitHandler",properties:["createExitHandler"]},{path:"fanfanlo/javajs/v1/project/components/action/a11y/A11yOperator",properties:["createA11yOperator"]}]},"fanfanlo/javajs/v1/project/components/action/app/openApp":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({
            get regAction(){
                return javaLib["fanfanlo/javajs/v1/project/store"].regAction;
            }
            ,
            get eventTypeComplete(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeComplete;
            }
            ,
            get eventTypeExit(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeExit;
            }
            }){
            \r
\r
let type = "fanfanlo/javajs/v1/project/components/action/app/openApp";\r
onLibReady(()=>{\r
    regAction(type, attach)\r
}, \`src.droid.java_js.fanfanlo.javajs.v1.project.components.action.app.openApp.java.js\`)\r
function attach(that){\r
    let superDoAction = that.doAction;\r
    let logger = that.logger;\r
    let domain = {};\r
    function onScriptCallExit(){\r
        logger.log("onScriptCallExit", that.baseMsg)\r
        onExit();\r
    }\r
    addScriptExitListener(onScriptCallExit);\r
    that.dispatcher.listenData(eventTypeExit, onExit);\r
    that.dispatcher.listenData(eventTypeComplete, onExit);\r
    function onExit(e){\r
        logger.log("OpenAppOnExit")\r
        clean();\r
    }\r
    function clean(){\r
        a11yModel.removeDomain(domain)\r
        removeScriptExitListener(onScriptCallExit);\r
    }\r
\r
    that.doAction = doAction.bind(that);\r
    function doAction() {\r
        superDoAction();\r
        check();\r
    }\r
\r
    function check(){\r
        if(trySuccess())return;\r
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastPackageChanged, domain, onPackageChange);\r
        com.fanfanlo.lib.intent.Funcs.openApp(that.data.packageName);\r
    }\r
    function onPackageChange(e){\r
        console.log("iiiiiiiiiiiiiii222i")\r
        trySuccess();\r
    }\r
    function trySuccess(){\r
        console.log("a11yModel.lastFullScreenPackage != that.data.packageName222", a11yModel.lastFullScreenPackage != that.data.packageName, a11yModel.lastFullScreenPackage, that.data.packageName)\r
        if(a11yModel.lastFullScreenPackage != that.data.packageName)return;\r
        that.dispatchSuccess();\r
    }\r
}\r
\r
return {type}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/action/app/openApp.java.js", e);
    }
    })()
    `,dependencies:[{path:"fanfanlo/javajs/v1/project/store",properties:["regAction"]},{path:"fanfanlo/javajs/v1/project/base/projectMembers",properties:["eventTypeComplete"," eventTypeExit"]}]},"fanfanlo/javajs/v1/project/components/trigger/a11y/ActivityInOut":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({
            get regTrigger(){
                return javaLib["fanfanlo/javajs/v1/project/store"].regTrigger;
            }
            ,
            get hideImeIfPackageOpened(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].hideImeIfPackageOpened;
            }
            ,
            get eventTypeComplete(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeComplete;
            }
            ,
            get eventTypeExit(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeExit;
            }
            }){
            \r
\r
let type = "fanfanlo/javajs/v1/project/components/trigger/a11y/activityInOut";\r
\r
let data = {\r
    packageName:"packageA", // *\r
    activities:["activityA", "activityB"], // *\r
    hideIme:true,\r
}\r
onLibReady(()=>{\r
    regTrigger(type, attach)\r
}, \`src/droid/java_js/fanfanlo/javajs/v1/project/components/trigger/a11y/activityInOut.js\`)\r
\r
\r
function attach(that){\r
    let domain = {};\r
    function clean(){\r
        a11yModel.removeDomain(that);\r
        that.removeDomain(domain)\r
    }\r
    function onExitComplete(e){\r
        clean();\r
    }\r
    let superOnRun = that.onRun;\r
    that.onRun = onRun.bind(that);\r
    function onRun() {\r
        superOnRun();\r
        addListener();\r
    }\r
    function addListener(){\r
        that.dispatcher.listenDomain(eventTypeExit, domain, onExitComplete);\r
        that.dispatcher.listenDomain(eventTypeComplete, domain, onExitComplete);\r
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastPackageChanged, this, onPackageOrActivityChange);\r
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastActivityInfoChanged, this, onPackageOrActivityChange);\r
    }\r
    let isOn = false;\r
    function onPackageOrActivityChange(event){\r
        check();\r
    }\r
    function check(){\r
        if(!that.isRunnable){\r
            clean();\r
            return;\r
        }\r
        let pn = that.data.packageName;\r
        if(that.data.hideIme && hideImeIfPackageOpened(pn)){\r
            return;\r
        }\r
        let packageName = a11yModel.lastFullScreenPackage;\r
        let activityName = a11yModel.lastFullScreenActivity;\r
        let data = {packageName, activityName}\r
        let activities = that.data.activities;\r
        if(activities.indexOf(activityName) == -1){\r
            return triggerOff(data);\r
        }\r
        triggerOn(data);\r
    }\r
    function triggerOff(data){\r
        if(!isOn)return;\r
        isOn = false;\r
        that.dispatchConditionsOff({data})\r
    }\r
    function triggerOn(data){\r
        if(isOn)return;\r
        isOn = true;\r
        that.dispatchConditionsOn({data})\r
    }\r
    let superOnExit = that.onExit;\r
\r
    function onExit(){\r
        superOnExit();\r
        a11yModel.removeDomain(this);\r
    }\r
    that.onExit = onExit.bind(that);\r
\r
}\r
\r
return {type}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/trigger/a11y/ActivityInOut.java.js", e);
    }
    })()
    `,dependencies:[{path:"fanfanlo/javajs/v1/project/store",properties:["regTrigger"]},{path:"fanfanlo/javajs/v1/a11y/a11yUtils",properties:["hideImeIfPackageOpened"]},{path:"fanfanlo/javajs/v1/project/base/projectMembers",properties:["eventTypeComplete"," eventTypeExit"]}]},"fanfanlo/javajs/v1/project/components/trigger/a11y/NodesInOut":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({
            get regTrigger(){
                return javaLib["fanfanlo/javajs/v1/project/store"].regTrigger;
            }
            ,
            get Types(){
                return javaLib["fanfanlo/javajs/v1/a11y/node/ICondition"].Types;
            }
            ,
            get eventTypeExit(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeExit;
            }
            }){
            \r
let type = "fanfanlo/javajs/v1/project/components/trigger/a11y/NodesInOut";\r
onLibReady(()=>{\r
    regTrigger(type, attach)\r
}, \`src/droid/java_js/fanfanlo/javajs/v1/project/components/trigger/a11y/NodesInOut.java.js\`)\r
function attach(that){\r
    let logger = console.createSubLogger(\`\${Date.now()}\`)\r
    function onScriptCallExit(){\r
        onExit();\r
    }\r
    addScriptExitListener(onScriptCallExit);\r
    that.dispatcher.listenData(eventTypeExit, onExit);\r
    function onExit(e){\r
        tryRemoveContentChangeListener();\r
        a11yModeRemoveThis()\r
        removeScriptExitListener(onScriptCallExit);\r
    }\r
\r
    function a11yModeRemoveThis(){\r
        a11yModel.removeDomain(that);\r
    }\r
\r
    var pnAnMatched = false;\r
    var lastJob = undefined;\r
    var contentChangeListener = undefined;\r
    let superOnRun = that.onRun;\r
    that.onRun = onRun.bind(that);\r
    function onRun() {\r
        prepareConditions()\r
        superOnRun();\r
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastPackageChanged, this, onPackageOrActivityChange);\r
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastActivityInfoChanged, this, onPackageOrActivityChange);\r
        check();\r
    }\r
    function prepareConditions(){\r
        // nodeCondition是SFRoot，不是SFData\r
        that.data.conditions = that.data.nodeConditions.map((cond)=>{\r
            let root = {\r
                type:"Root",\r
                next:cond\r
            }\r
            cond = root;\r
            while(cond){\r
                cond.type = Types[cond.type];\r
                cond = cond.next;\r
            }\r
            let data = conditionJsonToData(root);\r
            return data.next;\r
        })\r
    }\r
    function conditionJsonToData(data){\r
        let s = JSON.stringify(data);\r
        return com.fanfanlo.droidlib.auto.command.objectmapper.projectObjectMapper.stringToSfRoot(s)\r
    }\r
    let isOn = false;\r
    function onPackageOrActivityChange(event){\r
        if(!isScriptRunnable){\r
            return a11yModeRemoveThis();\r
        }\r
        check();\r
    }\r
    function check(){\r
        var checkDomain = {}\r
        let packageName = a11yModel.lastFullScreenPackage;\r
        let activityName = a11yModel.lastFullScreenActivity;\r
        let data = {packageName, activityName, nodes:undefined}\r
        if(!checkIsPackageActivity()){\r
            tryRemoveContentChangeListener()\r
            return triggerOff(data)\r
        }\r
        if(!pnAnMatched){\r
            pnAnMatched = true;\r
            listenContentChange();\r
        }\r
        checkNodes();\r
        function checkIsPackageActivity(){\r
            return packageName == that.data.packageName && that.data.activities.some(name=>name==activityName);\r
          return packageName == that.data.packageName && that.data.activities.indexOf(activityName) > -1\r
        }\r
\r
        function listenContentChange(){\r
            tryRemoveContentChangeListener();\r
            let typeId = android.view.accessibility.AccessibilityEvent.TYPE_WINDOW_CONTENT_CHANGED\r
            let type = com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.getAccessibilityEventType(typeId);\r
            contentChangeListener = a11yModel.listenData(type, onContentChange)\r
        }\r
        function onContentChange(e){\r
            if(isScriptExited())return;\r
            if(!pnAnMatched){\r
                tryRemoveContentChangeListener();\r
                return;\r
            }\r
            checkNodes()\r
        }\r
        var job = undefined;\r
        function checkNodes(){\r
            if(lastJob && (!job || job == lastJob)){\r
                tryCancelJob(lastJob);\r
                lastJob = undefined;\r
            }\r
            let proxy = new com.fanfanlo.droidlib.auto.service.accessibility.krosxx.SfProxy();\r
           job = lastJob = proxy.find(a11yModel, packageName, that.data.conditions, callback, onError);\r
        }\r
        function callback(nodes){\r
            if(isScriptExited())return;\r
            if(job != lastJob)return;\r
            if(!nodes){\r
                // java里model.getRootByPackageName(pn)返回的是null，这个得观察一下怎么回事\r
                // console.log("cccccccccno nodes is null")\r
                return;\r
            }\r
            for (let i = 0; i < that.data.nodeCheckList.length; i++) {\r
                let list = that.data.nodeCheckList[i];\r
                let isOk = list.every((index)=>nodes[index] != null);\r
                if(isOk){\r
                    data.nodes = nodes\r
                    triggerOn(data)\r
                    return;\r
                }\r
            }\r
        }\r
        function onError(err){\r
            console.log("cccccccccno on error", err)\r
            if(isScriptExited())return;\r
            if(job != lastJob)return;\r
        }\r
        function triggerOff(data){\r
            if(pnAnMatched){\r
                pnAnMatched = false;\r
            }\r
            if(!isOn)return;\r
            isOn = false;\r
            that.dispatchConditionsOff({data})\r
        }\r
        function triggerOn(data){\r
            if(isOn)return;\r
            isOn = true;\r
            console.log("triggerOntriggerOn", data);\r
            that.dispatchConditionsOn(data)\r
        }\r
        function tryCancelJob(job){\r
            if(job && !job.isCompleted && !job.isCancelled){\r
                job.cancel();\r
            }\r
        }\r
        function checkComplete(){\r
            a11yModel.removeDomain(checkDomain);\r
            tryCancelJob(job);\r
        }\r
\r
        function isScriptExited(){\r
            if(isScriptRunnable)return false;\r
            tryRemoveContentChangeListener();\r
            a11yModeRemoveThis();\r
            return true;\r
        }\r
    }\r
\r
    function tryRemoveContentChangeListener(){\r
        if(!contentChangeListener)return;\r
        a11yModel.removeListener(contentChangeListener);\r
        contentChangeListener = undefined;\r
    }\r
    let superOnExit = that.onExit;\r
\r
    function onExit(){\r
        superOnExit();\r
        a11yModel.removeDomain(this);\r
    }\r
    that.onExit = onExit.bind(that);\r
\r
}\r
\r
return {type}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/trigger/a11y/NodesInOut.java.js", e);
    }
    })()
    `,dependencies:[{path:"fanfanlo/javajs/v1/project/store",properties:["regTrigger"]},{path:"fanfanlo/javajs/v1/a11y/node/ICondition",properties:["Types"]},{path:"fanfanlo/javajs/v1/project/base/projectMembers",properties:["eventTypeExit"]}]},"fanfanlo/javajs/v1/project/components/trigger/a11y/PackageIn":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({
            get regTrigger(){
                return javaLib["fanfanlo/javajs/v1/project/store"].regTrigger;
            }
            ,
            get eventTypeComplete(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeComplete;
            }
            ,
            get eventTypeExit(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeExit;
            }
            ,
            get hideImeIfPackageOpened(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].hideImeIfPackageOpened;
            }
            }){
            \r
\r
let type = \`fanfanlo/javajs/v1/project/components/trigger/a11y/PackageIn\`;\r
onLibReady(()=>{\r
    regTrigger(type, attach)\r
}, \`src/droid/java_js/fanfanlo/javajs/v1/project/components/trigger/a11y/PackageIn.java.js\`)\r
\r
function attach(that){\r
    let domain = {};\r
    let logger = that.logger;\r
    addScriptExitListener(onScriptCallExit);\r
    function onScriptCallExit(){\r
        logger.log("script call PackageIn exit", that.baseMsg)\r
        onExit();\r
    }\r
    function onExit(e){\r
        clean();\r
    }\r
    function clean(){\r
        removeListener();\r
        removeScriptExitListener(onScriptCallExit);\r
    }\r
    function onExitOrComplete(e){\r
        clean();\r
    }\r
\r
    let superOnRun = that.onRun;\r
    that.onRun = onRun.bind(that);\r
    function onRun() {\r
        superOnRun();\r
        addListener();\r
        check();\r
    }\r
    function addListener(){\r
        that.dispatcher.listenDomain(eventTypeExit, domain, onExitOrComplete);\r
        that.dispatcher.listenDomain(eventTypeComplete, domain, onExitOrComplete);\r
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastPackageChanged, domain, onChange);\r
    }\r
    function removeListener(){\r
        a11yModel.removeDomain(domain);\r
        that.dispatcher.removeDomain(domain)\r
    }\r
    function onChange(event){\r
        check();\r
    }\r
\r
\r
    function check(){\r
        if(!that.isRunnable){\r
            clean();\r
            return;\r
        }\r
        let isOk = a11yModel.lastFullScreenPackage == that.data.packageName\r
        logger.log(\`equals lastpackage \${isOk}, lastFullScreenPackage=\${a11yModel.lastFullScreenPackage}, packageName=\${that.data.packageName}\`);\r
        if(isOk){\r
            logger.log(\`check isok dispatch conditions on\`);\r
            that.dispatchConditionsOn({target:that})\r
        }else if(that.data.hideIme){\r
            logger.log(\`check isnotok hide ime\`);\r
            hideImeIfPackageOpened(that.data.packageName);\r
        }\r
    }\r
}\r
\r
return {type}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/trigger/a11y/PackageIn.java.js", e);
    }
    })()
    `,dependencies:[{path:"fanfanlo/javajs/v1/project/store",properties:["regTrigger"]},{path:"fanfanlo/javajs/v1/project/base/projectMembers",properties:["eventTypeComplete"," eventTypeExit"]},{path:"fanfanlo/javajs/v1/a11y/a11yUtils",properties:["hideImeIfPackageOpened"]}]},"fanfanlo/javajs/v1/project/components/trigger/a11y/PackageInOut":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({
            get regTrigger(){
                return javaLib["fanfanlo/javajs/v1/project/store"].regTrigger;
            }
            ,
            get eventTypeComplete(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeComplete;
            }
            ,
            get eventTypeExit(){
                return javaLib["fanfanlo/javajs/v1/project/base/projectMembers"].eventTypeExit;
            }
            ,
            get hideImeIfPackageOpened(){
                return javaLib["fanfanlo/javajs/v1/a11y/a11yUtils"].hideImeIfPackageOpened;
            }
            }){
            \r
let type = "fanfanlo/javajs/v1/project/components/trigger/a11y/PackageInOut";\r
onLibReady(()=>{\r
    regTrigger(type, attach)\r
}, \`src/droid/java_js/fanfanlo/javajs/v1/project/components/trigger/a11y/packageInOut.js\`)\r
function attach(that){\r
    let domain = {};\r
    function clean(){\r
        a11yModel.removeDomain(that);\r
        that.removeDomain(domain)\r
    }\r
    function onExitOrComplete(e){\r
        clean();\r
    }\r
\r
    let superOnRun = that.onRun;\r
    that.onRun = onRun.bind(that);\r
    function onRun() {\r
        superOnRun();\r
        addListener();\r
        check();\r
    }\r
    function addListener(){\r
        that.dispatcher.listenDomain(eventTypeExit, domain, onExitOrComplete);\r
        that.dispatcher.listenDomain(eventTypeComplete, domain, onExitOrComplete);\r
        a11yModel.listenDomainData(com.fanfanlo.droidlib.auto.service.accessibility.A11yModel.Companion.eventLastPackageChanged, this, onPackageChange);\r
    }\r
    function onPackageChange(event){\r
        check();\r
    }\r
\r
    function check(){\r
        console.log("triiiiiiiiiiiiii", that.isRunnable)\r
        if(!that.isRunnable){\r
            clean();\r
            return;\r
        }\r
        let pn = that.data.packageName;\r
        if(that.data.hideIme && hideImeIfPackageOpened(pn)){\r
            return;\r
        }\r
        if(a11yModel.lastFullScreenPackage == that.data.packageName){\r
            that.dispatchConditionsOn({packageName:a11yModel.lastFullScreenPackage})\r
        }else{\r
            that.dispatchConditionsOff({packageName:a11yModel.lastFullScreenPackage})\r
        }\r
    }\r
}\r
\r
return {type}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/trigger/a11y/PackageInOut.java.js", e);
    }
    })()
    `,dependencies:[{path:"fanfanlo/javajs/v1/project/store",properties:["regTrigger"]},{path:"fanfanlo/javajs/v1/project/base/projectMembers",properties:["eventTypeComplete"," eventTypeExit"]},{path:"fanfanlo/javajs/v1/a11y/a11yUtils",properties:["hideImeIfPackageOpened"]}]},"fanfanlo/javajs/v1/project/components/trigger/time/later":{content:`
    (()=>{
    try{
        // @ts-ignore
        with({
            get setTimeout(){
                return javaLib["fanfanlo/javajs/v1/utils/setTimeout"].setTimeout;
            }
            ,
            get regTrigger(){
                return javaLib["fanfanlo/javajs/v1/project/store"].regTrigger;
            }
            }){
            \r
\r
\r
let type = "fanfanlo/javajs/v1/project/components/trigger/time/later";\r
\r
onLibReady(()=>{\r
    regTrigger(type, attach)\r
}, \`src/droid/java_js/fanfanlo/javajs/v1/project/components/trigger/time/later.java.js\`)\r
function attach(that){\r
    let old = that.onRun;\r
    that.onRun = onRun.bind(that);\r
\r
    function onRun() {\r
        setTimeout(()=>{\r
            old();\r
            that.dispatchConditionsOn({data:that.data});\r
        }, that.data.time)\r
    }\r
}\r
\r
return {type}
        }
    }catch(e){
        console.log("init error key is fanfanlo/javajs/v1/project/components/trigger/time/later.java.js", e);
    }
    })()
    `,dependencies:[{path:"fanfanlo/javajs/v1/utils/setTimeout",properties:["setTimeout"]},{path:"fanfanlo/javajs/v1/project/store",properties:["regTrigger"]}]}};let u=`
console.paused = false;
let javaLibInitLogger = console.createSubLogger("lib9");
let projectStoreLogger = javaLibInitLogger.createSubLogger("store9");
let projectEventLogger = console.createSubLogger("event9");
let projectFailedLogger = console.createSubLogger("failed9");
let projectFlowLogger = console.createSubLogger("flow9");
projectFlowLogger.paused = false;
projectStoreLogger.paused = false;


`,d=`
;
const onLibReadyInitFuncs = [];
function onLibReady(f, info){
    console.log('reg onLiReady', info);
    onLibReadyInitFuncs.push({f, info});
}
;
`,f=`
;
for(let i = 0; i < onLibReadyInitFuncs.length; i++){
    let data = onLibReadyInitFuncs[i];
    try{
        data.f();
    }catch(e){
        console.log("on lib ready init fun error", data.info, e);
    }
}
;
`;function p(e,t,r){try{let n=s.merge({},{bridgeId:a(),forceStopTime:0,injects:[],onlyRunSingle:!0,params:{},script:"",stopPrevIfOnlyRunSingle:!0,languageVersion:200,optimizationLevel:-1,printScript:!1,scriptId:void 0},e),i=`let javaLib = {
        ${(function e(t,r=new Set,n=[]){for(let i=0;i<t.length;i++){let a=t[i];if(r.has(a))continue;let o=l[a];if(!o)throw console.log("error script runner prepare dependencies error, path is",a),console.log("--------------------"),console.log(a),console.log("============== java lib"),console.log(l),console.log("================== java lib end"),console.log(t),console.log("-------------------dependencies"),Error(`no path in javaLib, path is ${a}`);r.add(a),n.push(`"${a}":${o.content}`),o.dependencies&&o.dependencies.length>0&&e(o.dependencies.map(e=>e.path),r,n)}return n})(t).join(",")}
        }`;return n.script=`
    ${u}
    ;
    ${r}
    ;
    ${d}
    ;
    ${i}
    ;
    ${f}
    ;
    ${n.script}
    ;
    `,n}catch(t){throw console.log("runJavaLibScript catch error",null==t?void 0:t.message,null==t?void 0:t.stack),console.log("-------------------"),console.log(e),console.log("====================="),console.log(r),t}}function h(e){console.log(e),console.log("=====================")}export{p as buildScript,h as printScript1};