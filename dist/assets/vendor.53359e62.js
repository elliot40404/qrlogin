function Ii(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const fu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hu=Ii(fu);function Ba(t){return!!t||t===""}function Ti(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ye(r)?gu(r):Ti(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ye(t))return t;if(pe(t))return t}}const du=/;(?![^(]*\))/g,pu=/:(.+)/;function gu(t){const e={};return t.split(du).forEach(n=>{if(n){const r=n.split(pu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ci(t){let e="";if(ye(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const r=Ci(t[n]);r&&(e+=r+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const k_=t=>ye(t)?t:t==null?"":V(t)||pe(t)&&(t.toString===Ha||!K(t.toString))?JSON.stringify(t,Ua,2):String(t),Ua=(t,e)=>e&&e.__v_isRef?Ua(t,e.value):Zt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Fa(e)?{[`Set(${e.size})`]:[...e.values()]}:pe(e)&&!V(e)&&!ja(e)?String(e):e,se={},Qt=[],Le=()=>{},mu=()=>!1,yu=/^on[^a-z]/,Yr=t=>yu.test(t),Ai=t=>t.startsWith("onUpdate:"),Ee=Object.assign,Ri=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_u=Object.prototype.hasOwnProperty,G=(t,e)=>_u.call(t,e),V=Array.isArray,Zt=t=>Xr(t)==="[object Map]",Fa=t=>Xr(t)==="[object Set]",K=t=>typeof t=="function",ye=t=>typeof t=="string",Si=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",$a=t=>pe(t)&&K(t.then)&&K(t.catch),Ha=Object.prototype.toString,Xr=t=>Ha.call(t),vu=t=>Xr(t).slice(8,-1),ja=t=>Xr(t)==="[object Object]",Pi=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Tr=Ii(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bu=/-(\w)/g,rn=Qr(t=>t.replace(bu,(e,n)=>n?n.toUpperCase():"")),wu=/\B([A-Z])/g,gn=Qr(t=>t.replace(wu,"-$1").toLowerCase()),Va=Qr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Es=Qr(t=>t?`on${Va(t)}`:""),Jn=(t,e)=>!Object.is(t,e),Cr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},js=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wo;const Eu=()=>wo||(wo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Xe;class za{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Xe&&(this.parent=Xe,this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}run(e){if(this.active)try{return Xe=this,e()}finally{Xe=this.parent}}on(){Xe=this}off(){Xe=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Ka(t){return new za(t)}function Iu(t,e=Xe){e&&e.active&&e.effects.push(t)}const ki=t=>{const e=new Set(t);return e.w=0,e.n=0,e},qa=t=>(t.w&Tt)>0,Wa=t=>(t.n&Tt)>0,Tu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Tt},Cu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];qa(s)&&!Wa(s)?s.delete(t):e[n++]=s,s.w&=~Tt,s.n&=~Tt}e.length=n}},Vs=new WeakMap;let Mn=0,Tt=1;const zs=30;let je;const Mt=Symbol(""),Ks=Symbol("");class Oi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Iu(this,r)}run(){if(!this.active)return this.fn();let e=je,n=wt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=je,je=this,wt=!0,Tt=1<<++Mn,Mn<=zs?Tu(this):Eo(this),this.fn()}finally{Mn<=zs&&Cu(this),Tt=1<<--Mn,je=this.parent,wt=n,this.parent=void 0}}stop(){this.active&&(Eo(this),this.onStop&&this.onStop(),this.active=!1)}}function Eo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let wt=!0;const Ja=[];function mn(){Ja.push(wt),wt=!1}function yn(){const t=Ja.pop();wt=t===void 0?!0:t}function Se(t,e,n){if(wt&&je){let r=Vs.get(t);r||Vs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ki()),Ga(s)}}function Ga(t,e){let n=!1;Mn<=zs?Wa(t)||(t.n|=Tt,n=!qa(t)):n=!t.has(je),n&&(t.add(je),je.deps.push(t))}function st(t,e,n,r,s,i){const o=Vs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?Pi(n)&&a.push(o.get("length")):(a.push(o.get(Mt)),Zt(t)&&a.push(o.get(Ks)));break;case"delete":V(t)||(a.push(o.get(Mt)),Zt(t)&&a.push(o.get(Ks)));break;case"set":Zt(t)&&a.push(o.get(Mt));break}if(a.length===1)a[0]&&qs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);qs(ki(c))}}function qs(t,e){for(const n of V(t)?t:[...t])(n!==je||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Au=Ii("__proto__,__v_isRef,__isVue"),Ya=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Si)),Ru=Ni(),Su=Ni(!1,!0),Pu=Ni(!0),Io=ku();function ku(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)Se(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Y)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){mn();const r=Y(this)[e].apply(this,n);return yn(),r}}),t}function Ni(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?qu:tc:e?ec:Za).get(r))return r;const o=V(r);if(!t&&o&&G(Io,s))return Reflect.get(Io,s,i);const a=Reflect.get(r,s,i);return(Si(s)?Ya.has(s):Au(s))||(t||Se(r,"get",s),e)?a:fe(a)?!o||!Pi(s)?a.value:a:pe(a)?t?nc(a):_n(a):a}}const Ou=Xa(),Nu=Xa(!0);function Xa(t=!1){return function(n,r,s,i){let o=n[r];if(Gn(o)&&fe(o)&&!fe(s))return!1;if(!t&&!Gn(s)&&(rc(s)||(s=Y(s),o=Y(o)),!V(n)&&fe(o)&&!fe(s)))return o.value=s,!0;const a=V(n)&&Pi(r)?Number(r)<n.length:G(n,r),c=Reflect.set(n,r,s,i);return n===Y(i)&&(a?Jn(s,o)&&st(n,"set",r,s):st(n,"add",r,s)),c}}function Mu(t,e){const n=G(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&st(t,"delete",e,void 0),r}function Du(t,e){const n=Reflect.has(t,e);return(!Si(e)||!Ya.has(e))&&Se(t,"has",e),n}function Lu(t){return Se(t,"iterate",V(t)?"length":Mt),Reflect.ownKeys(t)}const Qa={get:Ru,set:Ou,deleteProperty:Mu,has:Du,ownKeys:Lu},xu={get:Pu,set(t,e){return!0},deleteProperty(t,e){return!0}},Bu=Ee({},Qa,{get:Su,set:Nu}),Mi=t=>t,Zr=t=>Reflect.getPrototypeOf(t);function mr(t,e,n=!1,r=!1){t=t.__v_raw;const s=Y(t),i=Y(e);e!==i&&!n&&Se(s,"get",e),!n&&Se(s,"get",i);const{has:o}=Zr(s),a=r?Mi:n?xi:Yn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function yr(t,e=!1){const n=this.__v_raw,r=Y(n),s=Y(t);return t!==s&&!e&&Se(r,"has",t),!e&&Se(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function _r(t,e=!1){return t=t.__v_raw,!e&&Se(Y(t),"iterate",Mt),Reflect.get(t,"size",t)}function To(t){t=Y(t);const e=Y(this);return Zr(e).has.call(e,t)||(e.add(t),st(e,"add",t,t)),this}function Co(t,e){e=Y(e);const n=Y(this),{has:r,get:s}=Zr(n);let i=r.call(n,t);i||(t=Y(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Jn(e,o)&&st(n,"set",t,e):st(n,"add",t,e),this}function Ao(t){const e=Y(this),{has:n,get:r}=Zr(e);let s=n.call(e,t);s||(t=Y(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&st(e,"delete",t,void 0),i}function Ro(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&st(t,"clear",void 0,void 0),n}function vr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Y(o),c=e?Mi:t?xi:Yn;return!t&&Se(a,"iterate",Mt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function br(t,e,n){return function(...r){const s=this.__v_raw,i=Y(s),o=Zt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Mi:e?xi:Yn;return!e&&Se(i,"iterate",c?Ks:Mt),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function at(t){return function(...e){return t==="delete"?!1:this}}function Uu(){const t={get(i){return mr(this,i)},get size(){return _r(this)},has:yr,add:To,set:Co,delete:Ao,clear:Ro,forEach:vr(!1,!1)},e={get(i){return mr(this,i,!1,!0)},get size(){return _r(this)},has:yr,add:To,set:Co,delete:Ao,clear:Ro,forEach:vr(!1,!0)},n={get(i){return mr(this,i,!0)},get size(){return _r(this,!0)},has(i){return yr.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:vr(!0,!1)},r={get(i){return mr(this,i,!0,!0)},get size(){return _r(this,!0)},has(i){return yr.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:vr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=br(i,!1,!1),n[i]=br(i,!0,!1),e[i]=br(i,!1,!0),r[i]=br(i,!0,!0)}),[t,n,e,r]}const[Fu,$u,Hu,ju]=Uu();function Di(t,e){const n=e?t?ju:Hu:t?$u:Fu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const Vu={get:Di(!1,!1)},zu={get:Di(!1,!0)},Ku={get:Di(!0,!1)},Za=new WeakMap,ec=new WeakMap,tc=new WeakMap,qu=new WeakMap;function Wu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ju(t){return t.__v_skip||!Object.isExtensible(t)?0:Wu(vu(t))}function _n(t){return Gn(t)?t:Li(t,!1,Qa,Vu,Za)}function Gu(t){return Li(t,!1,Bu,zu,ec)}function nc(t){return Li(t,!0,xu,Ku,tc)}function Li(t,e,n,r,s){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Ju(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Et(t){return Gn(t)?Et(t.__v_raw):!!(t&&t.__v_isReactive)}function Gn(t){return!!(t&&t.__v_isReadonly)}function rc(t){return!!(t&&t.__v_isShallow)}function sc(t){return Et(t)||Gn(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function sn(t){return Mr(t,"__v_skip",!0),t}const Yn=t=>pe(t)?_n(t):t,xi=t=>pe(t)?nc(t):t;function ic(t){wt&&je&&(t=Y(t),Ga(t.dep||(t.dep=ki())))}function oc(t,e){t=Y(t),t.dep&&qs(t.dep)}function fe(t){return!!(t&&t.__v_isRef===!0)}function Bi(t){return ac(t,!1)}function Yu(t){return ac(t,!0)}function ac(t,e){return fe(t)?t:new Xu(t,e)}class Xu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:Yn(e)}get value(){return ic(this),this._value}set value(e){e=this.__v_isShallow?e:Y(e),Jn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Yn(e),oc(this))}}function Un(t){return fe(t)?t.value:t}const Qu={get:(t,e,n)=>Un(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function cc(t){return Et(t)?t:new Proxy(t,Qu)}function Zu(t){const e=V(t)?new Array(t.length):{};for(const n in t)e[n]=tf(t,n);return e}class ef{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function tf(t,e,n){const r=t[e];return fe(r)?r:new ef(t,e,n)}class nf{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Oi(e,()=>{this._dirty||(this._dirty=!0,oc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Y(this);return ic(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function rf(t,e,n=!1){let r,s;const i=K(t);return i?(r=t,s=Le):(r=t.get,s=t.set),new nf(r,s,i||!s,n)}Promise.resolve();function It(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){es(i,e,n)}return s}function xe(t,e,n,r){if(K(t)){const i=It(t,e,n,r);return i&&$a(i)&&i.catch(o=>{es(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(xe(t[i],e,n,r));return s}function es(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){It(c,null,10,[t,o,a]);return}}sf(t,n,s,r)}function sf(t,e,n,r=!0){console.error(t)}let Dr=!1,Ws=!1;const Ae=[];let et=0;const Fn=[];let Dn=null,Wt=0;const $n=[];let ft=null,Jt=0;const lc=Promise.resolve();let Ui=null,Js=null;function Fi(t){const e=Ui||lc;return t?e.then(this?t.bind(this):t):e}function of(t){let e=et+1,n=Ae.length;for(;e<n;){const r=e+n>>>1;Xn(Ae[r])<t?e=r+1:n=r}return e}function uc(t){(!Ae.length||!Ae.includes(t,Dr&&t.allowRecurse?et+1:et))&&t!==Js&&(t.id==null?Ae.push(t):Ae.splice(of(t.id),0,t),fc())}function fc(){!Dr&&!Ws&&(Ws=!0,Ui=lc.then(pc))}function af(t){const e=Ae.indexOf(t);e>et&&Ae.splice(e,1)}function hc(t,e,n,r){V(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),fc()}function cf(t){hc(t,Dn,Fn,Wt)}function lf(t){hc(t,ft,$n,Jt)}function $i(t,e=null){if(Fn.length){for(Js=e,Dn=[...new Set(Fn)],Fn.length=0,Wt=0;Wt<Dn.length;Wt++)Dn[Wt]();Dn=null,Wt=0,Js=null,$i(t,e)}}function dc(t){if($n.length){const e=[...new Set($n)];if($n.length=0,ft){ft.push(...e);return}for(ft=e,ft.sort((n,r)=>Xn(n)-Xn(r)),Jt=0;Jt<ft.length;Jt++)ft[Jt]();ft=null,Jt=0}}const Xn=t=>t.id==null?1/0:t.id;function pc(t){Ws=!1,Dr=!0,$i(t),Ae.sort((n,r)=>Xn(n)-Xn(r));const e=Le;try{for(et=0;et<Ae.length;et++){const n=Ae[et];n&&n.active!==!1&&It(n,null,14)}}finally{et=0,Ae.length=0,dc(),Dr=!1,Ui=null,(Ae.length||Fn.length||$n.length)&&pc(t)}}function uf(t,e,...n){const r=t.vnode.props||se;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[u]||se;h?s=n.map(g=>g.trim()):d&&(s=n.map(js))}let a,c=r[a=Es(e)]||r[a=Es(rn(e))];!c&&i&&(c=r[a=Es(gn(e))]),c&&xe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,xe(l,t,6,s)}}function gc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!K(t)){const c=l=>{const u=gc(l,e,!0);u&&(a=!0,Ee(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(V(i)?i.forEach(c=>o[c]=null):Ee(o,i),r.set(t,o),o)}function Hi(t,e){return!t||!Yr(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,gn(e))||G(t,e))}let De=null,ts=null;function Lr(t){const e=De;return De=t,ts=t&&t.type.__scopeId||null,e}function O_(t){ts=t}function N_(){ts=null}function ff(t,e=De,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&xo(-1);const i=Lr(e),o=t(...s);return Lr(i),r._d&&xo(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Is(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:h,setupState:g,ctx:y,inheritAttrs:T}=t;let R,v;const S=Lr(t);try{if(n.shapeFlag&4){const I=s||r;R=He(u.call(I,I,d,i,g,h,y)),v=c}else{const I=e;R=He(I.length>1?I(i,{attrs:c,slots:a,emit:l}):I(i,null)),v=e.props?c:hf(c)}}catch(I){jn.length=0,es(I,t,1),R=Re(Bt)}let P=R;if(v&&T!==!1){const I=Object.keys(v),{shapeFlag:$}=P;I.length&&$&7&&(o&&I.some(Ai)&&(v=df(v,o)),P=Qn(P,v))}return n.dirs&&(P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),R=P,Lr(S),R}const hf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yr(n))&&((e||(e={}))[n]=t[n]);return e},df=(t,e)=>{const n={};for(const r in t)(!Ai(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function pf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?So(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==r[h]&&!Hi(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?So(r,o,l):!0:!!o;return!1}function So(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Hi(n,i))return!0}return!1}function gf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const mf=t=>t.__isSuspense;function yf(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):lf(t)}function Ar(t,e){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[t]=e}}function Ve(t,e,n=!1){const r=me||De;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&K(e)?e.call(r.proxy):e}}const Po={};function Hn(t,e,n){return mc(t,e,n)}function mc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=se){const a=me;let c,l=!1,u=!1;if(fe(t)?(c=()=>t.value,l=rc(t)):Et(t)?(c=()=>t,r=!0):V(t)?(u=!0,l=t.some(Et),c=()=>t.map(v=>{if(fe(v))return v.value;if(Et(v))return Nt(v);if(K(v))return It(v,a,2)})):K(t)?e?c=()=>It(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),xe(t,a,3,[h])}:c=Le,e&&r){const v=c;c=()=>Nt(v())}let d,h=v=>{d=R.onStop=()=>{It(v,a,4)}};if(Zn)return h=Le,e?n&&xe(e,a,3,[c(),u?[]:void 0,h]):c(),Le;let g=u?[]:Po;const y=()=>{if(!!R.active)if(e){const v=R.run();(r||l||(u?v.some((S,P)=>Jn(S,g[P])):Jn(v,g)))&&(d&&d(),xe(e,a,3,[v,g===Po?void 0:g,h]),g=v)}else R.run()};y.allowRecurse=!!e;let T;s==="sync"?T=y:s==="post"?T=()=>Ie(y,a&&a.suspense):T=()=>{!a||a.isMounted?cf(y):y()};const R=new Oi(c,T);return e?n?y():g=R.run():s==="post"?Ie(R.run.bind(R),a&&a.suspense):R.run(),()=>{R.stop(),a&&a.scope&&Ri(a.scope.effects,R)}}function _f(t,e,n){const r=this.proxy,s=ye(t)?t.includes(".")?yc(r,t):()=>r[t]:t.bind(r,r);let i;K(e)?i=e:(i=e.handler,n=e);const o=me;on(this);const a=mc(s,i.bind(r),n);return o?on(o):Lt(),a}function yc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Nt(t,e){if(!pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),fe(t))Nt(t.value,e);else if(V(t))for(let n=0;n<t.length;n++)Nt(t[n],e);else if(Fa(t)||Zt(t))t.forEach(n=>{Nt(n,e)});else if(ja(t))for(const n in t)Nt(t[n],e);return t}function _c(t){return K(t)?{setup:t,name:t.name}:t}const Gs=t=>!!t.type.__asyncLoader,vc=t=>t.type.__isKeepAlive;function vf(t,e){bc(t,"a",e)}function bf(t,e){bc(t,"da",e)}function bc(t,e,n=me){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ns(e,r,n),n){let s=n.parent;for(;s&&s.parent;)vc(s.parent.vnode)&&wf(r,e,n,s),s=s.parent}}function wf(t,e,n,r){const s=ns(e,t,r,!0);ji(()=>{Ri(r[e],s)},n)}function ns(t,e,n=me,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;mn(),on(n);const a=xe(e,n,t,o);return Lt(),yn(),a});return r?s.unshift(i):s.push(i),i}}const ot=t=>(e,n=me)=>(!Zn||t==="sp")&&ns(t,e,n),Ef=ot("bm"),If=ot("m"),Tf=ot("bu"),Cf=ot("u"),Af=ot("bum"),ji=ot("um"),Rf=ot("sp"),Sf=ot("rtg"),Pf=ot("rtc");function kf(t,e=me){ns("ec",t,e)}let Ys=!0;function Of(t){const e=Ec(t),n=t.proxy,r=t.ctx;Ys=!1,e.beforeCreate&&ko(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:g,updated:y,activated:T,deactivated:R,beforeDestroy:v,beforeUnmount:S,destroyed:P,unmounted:I,render:$,renderTracked:M,renderTriggered:x,errorCaptured:Q,serverPrefetch:X,expose:Z,inheritAttrs:ge,components:ve,directives:ue,filters:he}=e;if(l&&Nf(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const ee=o[ie];K(ee)&&(r[ie]=ee.bind(n))}if(s){const ie=s.call(n,n);pe(ie)&&(t.data=_n(ie))}if(Ys=!0,i)for(const ie in i){const ee=i[ie],Te=K(ee)?ee.bind(n,n):K(ee.get)?ee.get.bind(n,n):Le,Vt=!K(ee)&&K(ee.set)?ee.set.bind(n):Le,Ye=Me({get:Te,set:Vt});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Ue=>Ye.value=Ue})}if(a)for(const ie in a)wc(a[ie],r,n,ie);if(c){const ie=K(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(ee=>{Ar(ee,ie[ee])})}u&&ko(u,t,"c");function de(ie,ee){V(ee)?ee.forEach(Te=>ie(Te.bind(n))):ee&&ie(ee.bind(n))}if(de(Ef,d),de(If,h),de(Tf,g),de(Cf,y),de(vf,T),de(bf,R),de(kf,Q),de(Pf,M),de(Sf,x),de(Af,S),de(ji,I),de(Rf,X),V(Z))if(Z.length){const ie=t.exposed||(t.exposed={});Z.forEach(ee=>{Object.defineProperty(ie,ee,{get:()=>n[ee],set:Te=>n[ee]=Te})})}else t.exposed||(t.exposed={});$&&t.render===Le&&(t.render=$),ge!=null&&(t.inheritAttrs=ge),ve&&(t.components=ve),ue&&(t.directives=ue)}function Nf(t,e,n=Le,r=!1){V(t)&&(t=Xs(t));for(const s in t){const i=t[s];let o;pe(i)?"default"in i?o=Ve(i.from||s,i.default,!0):o=Ve(i.from||s):o=Ve(i),fe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function ko(t,e,n){xe(V(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function wc(t,e,n,r){const s=r.includes(".")?yc(n,r):()=>n[r];if(ye(t)){const i=e[t];K(i)&&Hn(s,i)}else if(K(t))Hn(s,t.bind(n));else if(pe(t))if(V(t))t.forEach(i=>wc(i,e,n,r));else{const i=K(t.handler)?t.handler.bind(n):e[t.handler];K(i)&&Hn(s,i,t)}}function Ec(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>xr(c,l,o,!0)),xr(c,e,o)),i.set(e,c),c}function xr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&xr(t,i,n,!0),s&&s.forEach(o=>xr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Mf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Mf={data:Oo,props:Pt,emits:Pt,methods:Pt,computed:Pt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Pt,directives:Pt,watch:Lf,provide:Oo,inject:Df};function Oo(t,e){return e?t?function(){return Ee(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function Df(t,e){return Pt(Xs(t),Xs(e))}function Xs(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function be(t,e){return t?[...new Set([].concat(t,e))]:e}function Pt(t,e){return t?Ee(Ee(Object.create(null),t),e):e}function Lf(t,e){if(!t)return e;if(!e)return t;const n=Ee(Object.create(null),t);for(const r in e)n[r]=be(t[r],e[r]);return n}function xf(t,e,n,r=!1){const s={},i={};Mr(i,rs,1),t.propsDefaults=Object.create(null),Ic(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Gu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Bf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Y(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];const g=e[h];if(c)if(G(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const y=rn(h);s[y]=Qs(c,a,y,g,t,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{Ic(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!G(e,d)&&((u=gn(d))===d||!G(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Qs(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!G(e,d)&&!0)&&(delete i[d],l=!0)}l&&st(t,"set","$attrs")}function Ic(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Tr(c))continue;const l=e[c];let u;s&&G(s,u=rn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Hi(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Y(n),l=a||se;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Qs(s,c,d,l[d],t,!G(l,d))}}return o}function Qs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=G(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&K(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(on(s),r=l[n]=c.call(null,e),Lt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===gn(n))&&(r=!0))}return r}function Tc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!K(t)){const u=d=>{c=!0;const[h,g]=Tc(d,e,!0);Ee(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,Qt),Qt;if(V(i))for(let u=0;u<i.length;u++){const d=rn(i[u]);No(d)&&(o[d]=se)}else if(i)for(const u in i){const d=rn(u);if(No(d)){const h=i[u],g=o[d]=V(h)||K(h)?{type:h}:h;if(g){const y=Lo(Boolean,g.type),T=Lo(String,g.type);g[0]=y>-1,g[1]=T<0||y<T,(y>-1||G(g,"default"))&&a.push(d)}}}const l=[o,a];return r.set(t,l),l}function No(t){return t[0]!=="$"}function Mo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Do(t,e){return Mo(t)===Mo(e)}function Lo(t,e){return V(e)?e.findIndex(n=>Do(n,t)):K(e)&&Do(e,t)?0:-1}const Cc=t=>t[0]==="_"||t==="$stable",Vi=t=>V(t)?t.map(He):[He(t)],Uf=(t,e,n)=>{const r=ff((...s)=>Vi(e(...s)),n);return r._c=!1,r},Ac=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Cc(s))continue;const i=t[s];if(K(i))e[s]=Uf(s,i,r);else if(i!=null){const o=Vi(i);e[s]=()=>o}}},Rc=(t,e)=>{const n=Vi(e);t.slots.default=()=>n},Ff=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),Mr(e,"_",n)):Ac(e,t.slots={})}else t.slots={},e&&Rc(t,e);Mr(t.slots,rs,1)},$f=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=se;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ee(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ac(e,s)),o=e}else e&&(Rc(t,e),o={default:1});if(i)for(const a in s)!Cc(a)&&!(a in o)&&delete s[a]};function M_(t,e){const n=De;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=se]=e[i];K(o)&&(o={mounted:o,updated:o}),o.deep&&Nt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Rt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(mn(),xe(c,n,8,[t.el,a,t,e]),yn())}}function Sc(){return{app:null,config:{isNativeTag:mu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hf=0;function jf(t,e){return function(r,s=null){s!=null&&!pe(s)&&(s=null);const i=Sc(),o=new Set;let a=!1;const c=i.app={_uid:Hf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:uh,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&K(l.install)?(o.add(l),l.install(c,...u)):K(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const h=Re(r,s);return h.appContext=i,u&&e?e(h,l):t(h,l,d),a=!0,c._container=l,l.__vue_app__=c,qi(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Zs(t,e,n,r,s=!1){if(V(t)){t.forEach((h,g)=>Zs(h,e&&(V(e)?e[g]:e),n,r,s));return}if(Gs(r)&&!s)return;const i=r.shapeFlag&4?qi(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===se?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(ye(l)?(u[l]=null,G(d,l)&&(d[l]=null)):fe(l)&&(l.value=null)),K(c))It(c,a,12,[o,u]);else{const h=ye(c),g=fe(c);if(h||g){const y=()=>{if(t.f){const T=h?u[c]:c.value;s?V(T)&&Ri(T,i):V(T)?T.includes(i)||T.push(i):h?u[c]=[i]:(c.value=[i],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,G(d,c)&&(d[c]=o)):fe(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Ie(y,n)):y()}}}const Ie=yf;function Vf(t){return zf(t)}function zf(t,e){const n=Eu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:g=Le,cloneNode:y,insertStaticContent:T}=t,R=(f,p,m,w=null,b=null,A=null,N=!1,C=null,k=!!p.dynamicChildren)=>{if(f===p)return;f&&!Sn(f,p)&&(w=B(f),ke(f,b,A,!0),f=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:E,ref:U,shapeFlag:D}=p;switch(E){case zi:v(f,p,m,w);break;case Bt:S(f,p,m,w);break;case Ts:f==null&&P(p,m,w,N);break;case Ze:ue(f,p,m,w,b,A,N,C,k);break;default:D&1?M(f,p,m,w,b,A,N,C,k):D&6?he(f,p,m,w,b,A,N,C,k):(D&64||D&128)&&E.process(f,p,m,w,b,A,N,C,k,oe)}U!=null&&b&&Zs(U,f&&f.ref,A,p||f,!p)},v=(f,p,m,w)=>{if(f==null)r(p.el=a(p.children),m,w);else{const b=p.el=f.el;p.children!==f.children&&l(b,p.children)}},S=(f,p,m,w)=>{f==null?r(p.el=c(p.children||""),m,w):p.el=f.el},P=(f,p,m,w)=>{[f.el,f.anchor]=T(f.children,p,m,w,f.el,f.anchor)},I=({el:f,anchor:p},m,w)=>{let b;for(;f&&f!==p;)b=h(f),r(f,m,w),f=b;r(p,m,w)},$=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=h(f),s(f),f=m;s(p)},M=(f,p,m,w,b,A,N,C,k)=>{N=N||p.type==="svg",f==null?x(p,m,w,b,A,N,C,k):Z(f,p,b,A,N,C,k)},x=(f,p,m,w,b,A,N,C)=>{let k,E;const{type:U,props:D,shapeFlag:F,transition:j,patchFlag:J,dirs:le}=f;if(f.el&&y!==void 0&&J===-1)k=f.el=y(f.el);else{if(k=f.el=o(f.type,A,D&&D.is,D),F&8?u(k,f.children):F&16&&X(f.children,k,null,w,b,A&&U!=="foreignObject",N,C),le&&Rt(f,null,w,"created"),D){for(const ce in D)ce!=="value"&&!Tr(ce)&&i(k,ce,null,D[ce],A,f.children,w,b,O);"value"in D&&i(k,"value",null,D.value),(E=D.onVnodeBeforeMount)&&$e(E,w,f)}Q(k,f,f.scopeId,N,w)}le&&Rt(f,null,w,"beforeMount");const ne=(!b||b&&!b.pendingBranch)&&j&&!j.persisted;ne&&j.beforeEnter(k),r(k,p,m),((E=D&&D.onVnodeMounted)||ne||le)&&Ie(()=>{E&&$e(E,w,f),ne&&j.enter(k),le&&Rt(f,null,w,"mounted")},b)},Q=(f,p,m,w,b)=>{if(m&&g(f,m),w)for(let A=0;A<w.length;A++)g(f,w[A]);if(b){let A=b.subTree;if(p===A){const N=b.vnode;Q(f,N,N.scopeId,N.slotScopeIds,b.parent)}}},X=(f,p,m,w,b,A,N,C,k=0)=>{for(let E=k;E<f.length;E++){const U=f[E]=C?ht(f[E]):He(f[E]);R(null,U,p,m,w,b,A,N,C)}},Z=(f,p,m,w,b,A,N)=>{const C=p.el=f.el;let{patchFlag:k,dynamicChildren:E,dirs:U}=p;k|=f.patchFlag&16;const D=f.props||se,F=p.props||se;let j;m&&St(m,!1),(j=F.onVnodeBeforeUpdate)&&$e(j,m,p,f),U&&Rt(p,f,m,"beforeUpdate"),m&&St(m,!0);const J=b&&p.type!=="foreignObject";if(E?ge(f.dynamicChildren,E,C,m,w,J,A):N||Te(f,p,C,null,m,w,J,A,!1),k>0){if(k&16)ve(C,p,D,F,m,w,b);else if(k&2&&D.class!==F.class&&i(C,"class",null,F.class,b),k&4&&i(C,"style",D.style,F.style,b),k&8){const le=p.dynamicProps;for(let ne=0;ne<le.length;ne++){const ce=le[ne],Oe=D[ce],zt=F[ce];(zt!==Oe||ce==="value")&&i(C,ce,Oe,zt,b,f.children,m,w,O)}}k&1&&f.children!==p.children&&u(C,p.children)}else!N&&E==null&&ve(C,p,D,F,m,w,b);((j=F.onVnodeUpdated)||U)&&Ie(()=>{j&&$e(j,m,p,f),U&&Rt(p,f,m,"updated")},w)},ge=(f,p,m,w,b,A,N)=>{for(let C=0;C<p.length;C++){const k=f[C],E=p[C],U=k.el&&(k.type===Ze||!Sn(k,E)||k.shapeFlag&70)?d(k.el):m;R(k,E,U,null,w,b,A,N,!0)}},ve=(f,p,m,w,b,A,N)=>{if(m!==w){for(const C in w){if(Tr(C))continue;const k=w[C],E=m[C];k!==E&&C!=="value"&&i(f,C,E,k,N,p.children,b,A,O)}if(m!==se)for(const C in m)!Tr(C)&&!(C in w)&&i(f,C,m[C],null,N,p.children,b,A,O);"value"in w&&i(f,"value",m.value,w.value)}},ue=(f,p,m,w,b,A,N,C,k)=>{const E=p.el=f?f.el:a(""),U=p.anchor=f?f.anchor:a("");let{patchFlag:D,dynamicChildren:F,slotScopeIds:j}=p;j&&(C=C?C.concat(j):j),f==null?(r(E,m,w),r(U,m,w),X(p.children,m,U,b,A,N,C,k)):D>0&&D&64&&F&&f.dynamicChildren?(ge(f.dynamicChildren,F,m,b,A,N,C),(p.key!=null||b&&p===b.subTree)&&Pc(f,p,!0)):Te(f,p,m,U,b,A,N,C,k)},he=(f,p,m,w,b,A,N,C,k)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?b.ctx.activate(p,m,w,N,k):jt(p,m,w,b,A,N,k):de(f,p,k)},jt=(f,p,m,w,b,A,N)=>{const C=f.component=sh(f,w,b);if(vc(f)&&(C.ctx.renderer=oe),ih(C),C.asyncDep){if(b&&b.registerDep(C,ie),!f.el){const k=C.subTree=Re(Bt);S(null,k,p,m)}return}ie(C,f,p,m,b,A,N)},de=(f,p,m)=>{const w=p.component=f.component;if(pf(f,p,m))if(w.asyncDep&&!w.asyncResolved){ee(w,p,m);return}else w.next=p,af(w.update),w.update();else p.component=f.component,p.el=f.el,w.vnode=p},ie=(f,p,m,w,b,A,N)=>{const C=()=>{if(f.isMounted){let{next:U,bu:D,u:F,parent:j,vnode:J}=f,le=U,ne;St(f,!1),U?(U.el=J.el,ee(f,U,N)):U=J,D&&Cr(D),(ne=U.props&&U.props.onVnodeBeforeUpdate)&&$e(ne,j,U,J),St(f,!0);const ce=Is(f),Oe=f.subTree;f.subTree=ce,R(Oe,ce,d(Oe.el),B(Oe),f,b,A),U.el=ce.el,le===null&&gf(f,ce.el),F&&Ie(F,b),(ne=U.props&&U.props.onVnodeUpdated)&&Ie(()=>$e(ne,j,U,J),b)}else{let U;const{el:D,props:F}=p,{bm:j,m:J,parent:le}=f,ne=Gs(p);if(St(f,!1),j&&Cr(j),!ne&&(U=F&&F.onVnodeBeforeMount)&&$e(U,le,p),St(f,!0),D&&z){const ce=()=>{f.subTree=Is(f),z(D,f.subTree,f,b,null)};ne?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ce()):ce()}else{const ce=f.subTree=Is(f);R(null,ce,m,w,f,b,A),p.el=ce.el}if(J&&Ie(J,b),!ne&&(U=F&&F.onVnodeMounted)){const ce=p;Ie(()=>$e(U,le,ce),b)}p.shapeFlag&256&&f.a&&Ie(f.a,b),f.isMounted=!0,p=m=w=null}},k=f.effect=new Oi(C,()=>uc(f.update),f.scope),E=f.update=k.run.bind(k);E.id=f.uid,St(f,!0),E()},ee=(f,p,m)=>{p.component=f;const w=f.vnode.props;f.vnode=p,f.next=null,Bf(f,p.props,w,m),$f(f,p.children,m),mn(),$i(void 0,f.update),yn()},Te=(f,p,m,w,b,A,N,C,k=!1)=>{const E=f&&f.children,U=f?f.shapeFlag:0,D=p.children,{patchFlag:F,shapeFlag:j}=p;if(F>0){if(F&128){Ye(E,D,m,w,b,A,N,C,k);return}else if(F&256){Vt(E,D,m,w,b,A,N,C,k);return}}j&8?(U&16&&O(E,b,A),D!==E&&u(m,D)):U&16?j&16?Ye(E,D,m,w,b,A,N,C,k):O(E,b,A,!0):(U&8&&u(m,""),j&16&&X(D,m,w,b,A,N,C,k))},Vt=(f,p,m,w,b,A,N,C,k)=>{f=f||Qt,p=p||Qt;const E=f.length,U=p.length,D=Math.min(E,U);let F;for(F=0;F<D;F++){const j=p[F]=k?ht(p[F]):He(p[F]);R(f[F],j,m,null,b,A,N,C,k)}E>U?O(f,b,A,!0,!1,D):X(p,m,w,b,A,N,C,k,D)},Ye=(f,p,m,w,b,A,N,C,k)=>{let E=0;const U=p.length;let D=f.length-1,F=U-1;for(;E<=D&&E<=F;){const j=f[E],J=p[E]=k?ht(p[E]):He(p[E]);if(Sn(j,J))R(j,J,m,null,b,A,N,C,k);else break;E++}for(;E<=D&&E<=F;){const j=f[D],J=p[F]=k?ht(p[F]):He(p[F]);if(Sn(j,J))R(j,J,m,null,b,A,N,C,k);else break;D--,F--}if(E>D){if(E<=F){const j=F+1,J=j<U?p[j].el:w;for(;E<=F;)R(null,p[E]=k?ht(p[E]):He(p[E]),m,J,b,A,N,C,k),E++}}else if(E>F)for(;E<=D;)ke(f[E],b,A,!0),E++;else{const j=E,J=E,le=new Map;for(E=J;E<=F;E++){const Ce=p[E]=k?ht(p[E]):He(p[E]);Ce.key!=null&&le.set(Ce.key,E)}let ne,ce=0;const Oe=F-J+1;let zt=!1,_o=0;const Rn=new Array(Oe);for(E=0;E<Oe;E++)Rn[E]=0;for(E=j;E<=D;E++){const Ce=f[E];if(ce>=Oe){ke(Ce,b,A,!0);continue}let Fe;if(Ce.key!=null)Fe=le.get(Ce.key);else for(ne=J;ne<=F;ne++)if(Rn[ne-J]===0&&Sn(Ce,p[ne])){Fe=ne;break}Fe===void 0?ke(Ce,b,A,!0):(Rn[Fe-J]=E+1,Fe>=_o?_o=Fe:zt=!0,R(Ce,p[Fe],m,null,b,A,N,C,k),ce++)}const vo=zt?Kf(Rn):Qt;for(ne=vo.length-1,E=Oe-1;E>=0;E--){const Ce=J+E,Fe=p[Ce],bo=Ce+1<U?p[Ce+1].el:w;Rn[E]===0?R(null,Fe,m,bo,b,A,N,C,k):zt&&(ne<0||E!==vo[ne]?Ue(Fe,m,bo,2):ne--)}}},Ue=(f,p,m,w,b=null)=>{const{el:A,type:N,transition:C,children:k,shapeFlag:E}=f;if(E&6){Ue(f.component.subTree,p,m,w);return}if(E&128){f.suspense.move(p,m,w);return}if(E&64){N.move(f,p,m,oe);return}if(N===Ze){r(A,p,m);for(let D=0;D<k.length;D++)Ue(k[D],p,m,w);r(f.anchor,p,m);return}if(N===Ts){I(f,p,m);return}if(w!==2&&E&1&&C)if(w===0)C.beforeEnter(A),r(A,p,m),Ie(()=>C.enter(A),b);else{const{leave:D,delayLeave:F,afterLeave:j}=C,J=()=>r(A,p,m),le=()=>{D(A,()=>{J(),j&&j()})};F?F(A,J,le):le()}else r(A,p,m)},ke=(f,p,m,w=!1,b=!1)=>{const{type:A,props:N,ref:C,children:k,dynamicChildren:E,shapeFlag:U,patchFlag:D,dirs:F}=f;if(C!=null&&Zs(C,null,m,f,!0),U&256){p.ctx.deactivate(f);return}const j=U&1&&F,J=!Gs(f);let le;if(J&&(le=N&&N.onVnodeBeforeUnmount)&&$e(le,p,f),U&6)L(f.component,m,w);else{if(U&128){f.suspense.unmount(m,w);return}j&&Rt(f,null,p,"beforeUnmount"),U&64?f.type.remove(f,p,m,b,oe,w):E&&(A!==Ze||D>0&&D&64)?O(E,p,m,!1,!0):(A===Ze&&D&384||!b&&U&16)&&O(k,p,m),w&&ws(f)}(J&&(le=N&&N.onVnodeUnmounted)||j)&&Ie(()=>{le&&$e(le,p,f),j&&Rt(f,null,p,"unmounted")},m)},ws=f=>{const{type:p,el:m,anchor:w,transition:b}=f;if(p===Ze){_(m,w);return}if(p===Ts){$(f);return}const A=()=>{s(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:N,delayLeave:C}=b,k=()=>N(m,A);C?C(f.el,A,k):k()}else A()},_=(f,p)=>{let m;for(;f!==p;)m=h(f),s(f),f=m;s(p)},L=(f,p,m)=>{const{bum:w,scope:b,update:A,subTree:N,um:C}=f;w&&Cr(w),b.stop(),A&&(A.active=!1,ke(N,f,p,m)),C&&Ie(C,p),Ie(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},O=(f,p,m,w=!1,b=!1,A=0)=>{for(let N=A;N<f.length;N++)ke(f[N],p,m,w,b)},B=f=>f.shapeFlag&6?B(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),te=(f,p,m)=>{f==null?p._vnode&&ke(p._vnode,null,null,!0):R(p._vnode||null,f,p,null,null,null,m),dc(),p._vnode=f},oe={p:R,um:ke,m:Ue,r:ws,mt:jt,mc:X,pc:Te,pbc:ge,n:B,o:t};let q,z;return e&&([q,z]=e(oe)),{render:te,hydrate:q,createApp:jf(te,q)}}function St({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Pc(t,e,n=!1){const r=t.children,s=e.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ht(s[i]),a.el=o.el),n||Pc(o,a))}}function Kf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const qf=t=>t.__isTeleport,Wf=Symbol(),Ze=Symbol(void 0),zi=Symbol(void 0),Bt=Symbol(void 0),Ts=Symbol(void 0),jn=[];let Dt=null;function Jf(t=!1){jn.push(Dt=t?null:[])}function Gf(){jn.pop(),Dt=jn[jn.length-1]||null}let Br=1;function xo(t){Br+=t}function kc(t){return t.dynamicChildren=Br>0?Dt||Qt:null,Gf(),Br>0&&Dt&&Dt.push(t),t}function D_(t,e,n,r,s,i){return kc(Nc(t,e,n,r,s,i,!0))}function Yf(t,e,n,r,s){return kc(Re(t,e,n,r,s,!0))}function ei(t){return t?t.__v_isVNode===!0:!1}function Sn(t,e){return t.type===e.type&&t.key===e.key}const rs="__vInternal",Oc=({key:t})=>t!=null?t:null,Rr=({ref:t,ref_key:e,ref_for:n})=>t!=null?ye(t)||fe(t)||K(t)?{i:De,r:t,k:e,f:!!n}:t:null;function Nc(t,e=null,n=null,r=0,s=null,i=t===Ze?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Oc(e),ref:e&&Rr(e),scopeId:ts,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ki(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ye(n)?8:16),Br>0&&!o&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const Re=Xf;function Xf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Wf)&&(t=Bt),ei(t)){const a=Qn(t,e,!0);return n&&Ki(a,n),a}if(lh(t)&&(t=t.__vccOpts),e){e=Qf(e);let{class:a,style:c}=e;a&&!ye(a)&&(e.class=Ci(a)),pe(c)&&(sc(c)&&!V(c)&&(c=Ee({},c)),e.style=Ti(c))}const o=ye(t)?1:mf(t)?128:qf(t)?64:pe(t)?4:K(t)?2:0;return Nc(t,e,n,r,s,o,i,!0)}function Qf(t){return t?sc(t)||rs in t?Ee({},t):t:null}function Qn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?eh(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Oc(a),ref:e&&e.ref?n&&s?V(s)?s.concat(Rr(e)):[s,Rr(e)]:Rr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ze?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qn(t.ssContent),ssFallback:t.ssFallback&&Qn(t.ssFallback),el:t.el,anchor:t.anchor}}function Zf(t=" ",e=0){return Re(zi,null,t,e)}function L_(t="",e=!1){return e?(Jf(),Yf(Bt,null,t)):Re(Bt,null,t)}function He(t){return t==null||typeof t=="boolean"?Re(Bt):V(t)?Re(Ze,null,t.slice()):typeof t=="object"?ht(t):Re(zi,null,String(t))}function ht(t){return t.el===null||t.memo?t:Qn(t)}function Ki(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ki(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(rs in e)?e._ctx=De:s===3&&De&&(De.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:De},n=32):(e=String(e),r&64?(n=16,e=[Zf(e)]):n=8);t.children=e,t.shapeFlag|=n}function eh(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ci([e.class,r.class]));else if(s==="style")e.style=Ti([e.style,r.style]);else if(Yr(s)){const i=e[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $e(t,e,n,r=null){xe(t,e,7,[n,r])}const ti=t=>t?Dc(t)?qi(t)||t.proxy:ti(t.parent):null,Ur=Ee(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ti(t.parent),$root:t=>ti(t.root),$emit:t=>t.emit,$options:t=>Ec(t),$forceUpdate:t=>()=>uc(t.update),$nextTick:t=>Fi.bind(t.proxy),$watch:t=>_f.bind(t)}),th={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==se&&G(r,e))return o[e]=1,r[e];if(s!==se&&G(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&G(l,e))return o[e]=3,i[e];if(n!==se&&G(n,e))return o[e]=4,n[e];Ys&&(o[e]=0)}}const u=Ur[e];let d,h;if(u)return e==="$attrs"&&Se(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==se&&G(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,G(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==se&&G(s,e)?(s[e]=n,!0):r!==se&&G(r,e)?(r[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==se&&G(t,o)||e!==se&&G(e,o)||(a=i[0])&&G(a,o)||G(r,o)||G(Ur,o)||G(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},nh=Sc();let rh=0;function sh(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||nh,i={uid:rh++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new za(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tc(r,s),emitsOptions:gc(r,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=uf.bind(null,i),t.ce&&t.ce(i),i}let me=null;const Mc=()=>me||De,on=t=>{me=t,t.scope.on()},Lt=()=>{me&&me.scope.off(),me=null};function Dc(t){return t.vnode.shapeFlag&4}let Zn=!1;function ih(t,e=!1){Zn=e;const{props:n,children:r}=t.vnode,s=Dc(t);xf(t,n,s,e),Ff(t,r);const i=s?oh(t,e):void 0;return Zn=!1,i}function oh(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=sn(new Proxy(t.ctx,th));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ch(t):null;on(t),mn();const i=It(r,t,0,[t.props,s]);if(yn(),Lt(),$a(i)){if(i.then(Lt,Lt),e)return i.then(o=>{Bo(t,o,e)}).catch(o=>{es(o,t,0)});t.asyncDep=i}else Bo(t,i,e)}else Lc(t,e)}function Bo(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=cc(e)),Lc(t,n)}let Uo;function Lc(t,e,n){const r=t.type;if(!t.render){if(!e&&Uo&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ee(Ee({isCustomElement:i,delimiters:a},o),c);r.render=Uo(s,l)}}t.render=r.render||Le}on(t),mn(),Of(t),yn(),Lt()}function ah(t){return new Proxy(t.attrs,{get(e,n){return Se(t,"get","$attrs"),e[n]}})}function ch(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=ah(t))},slots:t.slots,emit:t.emit,expose:e}}function qi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cc(sn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ur)return Ur[n](t)}}))}function lh(t){return K(t)&&"__vccOpts"in t}const Me=(t,e)=>rf(t,e,Zn);function xc(t,e,n){const r=arguments.length;return r===2?pe(e)&&!V(e)?ei(e)?Re(t,null,[e]):Re(t,e):Re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ei(n)&&(n=[n]),Re(t,e,n))}const uh="3.2.31",fh="http://www.w3.org/2000/svg",Ot=typeof document!="undefined"?document:null,Fo=Ot&&Ot.createElement("template"),hh={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ot.createElementNS(fh,t):Ot.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ot.createTextNode(t),createComment:t=>Ot.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ot.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Fo.innerHTML=r?`<svg>${t}</svg>`:t;const a=Fo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function dh(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ph(t,e,n){const r=t.style,s=ye(n);if(n&&!s){for(const i in n)ni(r,i,n[i]);if(e&&!ye(e))for(const i in e)n[i]==null&&ni(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const $o=/\s*!important$/;function ni(t,e,n){if(V(n))n.forEach(r=>ni(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=gh(t,e);$o.test(n)?t.setProperty(gn(r),n.replace($o,""),"important"):t[r]=n}}const Ho=["Webkit","Moz","ms"],Cs={};function gh(t,e){const n=Cs[e];if(n)return n;let r=rn(e);if(r!=="filter"&&r in t)return Cs[e]=r;r=Va(r);for(let s=0;s<Ho.length;s++){const i=Ho[s]+r;if(i in t)return Cs[e]=i}return e}const jo="http://www.w3.org/1999/xlink";function mh(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(jo,e.slice(6,e.length)):t.setAttributeNS(jo,e,n);else{const i=hu(e);n==null||i&&!Ba(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function yh(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Ba(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Fr=Date.now,Bc=!1;if(typeof window!="undefined"){Fr()>document.createEvent("Event").timeStamp&&(Fr=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Bc=!!(t&&Number(t[1])<=53)}let ri=0;const _h=Promise.resolve(),vh=()=>{ri=0},bh=()=>ri||(_h.then(vh),ri=Fr());function Gt(t,e,n,r){t.addEventListener(e,n,r)}function wh(t,e,n,r){t.removeEventListener(e,n,r)}function Eh(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Ih(e);if(r){const l=i[e]=Th(r,s);Gt(t,a,l,c)}else o&&(wh(t,a,o,c),i[e]=void 0)}}const Vo=/(?:Once|Passive|Capture)$/;function Ih(t){let e;if(Vo.test(t)){e={};let n;for(;n=t.match(Vo);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[gn(t.slice(2)),e]}function Th(t,e){const n=r=>{const s=r.timeStamp||Fr();(Bc||s>=n.attached-1)&&xe(Ch(r,n.value),e,5,[r])};return n.value=t,n.attached=bh(),n}function Ch(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const zo=/^on[a-z]/,Ah=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?dh(t,r,s):e==="style"?ph(t,n,r):Yr(e)?Ai(e)||Eh(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rh(t,e,r,s))?yh(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),mh(t,e,r,s))};function Rh(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&zo.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||zo.test(e)&&ye(n)?!1:e in t}const Ko=t=>{const e=t.props["onUpdate:modelValue"];return V(e)?n=>Cr(e,n):e};function Sh(t){t.target.composing=!0}function qo(t){const e=t.target;e.composing&&(e.composing=!1,Ph(e,"input"))}function Ph(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const x_={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ko(s);const i=r||s.props&&s.props.type==="number";Gt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=js(a)),t._assign(a)}),n&&Gt(t,"change",()=>{t.value=t.value.trim()}),e||(Gt(t,"compositionstart",Sh),Gt(t,"compositionend",qo),Gt(t,"change",qo))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ko(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&js(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},kh=["ctrl","shift","alt","meta"],Oh={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>kh.some(n=>t[`${n}Key`]&&!e.includes(n))},B_=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Oh[e[s]];if(i&&i(n,e))return}return t(n,...r)},U_={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Pn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Pn(t,!0),r.enter(t)):r.leave(t,()=>{Pn(t,!1)}):Pn(t,e))},beforeUnmount(t,{value:e}){Pn(t,e)}};function Pn(t,e){t.style.display=e?t._vod:"none"}const Nh=Ee({patchProp:Ah},hh);let Wo;function Mh(){return Wo||(Wo=Vf(Nh))}const F_=(...t)=>{const e=Mh().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Dh(r);if(!s)return;const i=e._component;!K(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Dh(t){return ye(t)?document.querySelector(t):t}var Lh=!1;/*!
  * pinia v2.0.11
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Uc;const ss=t=>Uc=t,Fc=Symbol();function si(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Vn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Vn||(Vn={}));function $_(){const t=Ka(!0),e=t.run(()=>Bi({}));let n=[],r=[];const s=sn({install(i){ss(s),s._a=i,i.provide(Fc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Lh?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const $c=()=>{};function Jo(t,e,n,r=$c){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Mc()&&ji(s),s}function Kt(t,...e){t.slice().forEach(n=>{n(...e)})}function ii(t,e){for(const n in e){const r=e[n],s=t[n];si(s)&&si(r)&&!fe(r)&&!Et(r)?t[n]=ii(s,r):t[n]=r}return t}const xh=Symbol();function Bh(t){return!si(t)||!t.hasOwnProperty(xh)}const{assign:Qe}=Object;function Uh(t){return!!(fe(t)&&t.effect)}function Fh(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Zu(n.state.value[t]);return Qe(u,i,Object.keys(o||{}).reduce((d,h)=>(d[h]=sn(Me(()=>{ss(n);const g=n._s.get(t);return o[h].call(g,g)})),d),{}))}return c=Hc(t,l,e,n),c.$reset=function(){const d=s?s():{};this.$patch(h=>{Qe(h,d)})},c}function Hc(t,e,n={},r,s){let i;const o=n.state,a=Qe({actions:{}},n),c={deep:!0};let l,u,d=sn([]),h=sn([]),g;const y=r.state.value[t];!o&&!y&&(r.state.value[t]={}),Bi({});function T(M){let x;l=u=!1,typeof M=="function"?(M(r.state.value[t]),x={type:Vn.patchFunction,storeId:t,events:g}):(ii(r.state.value[t],M),x={type:Vn.patchObject,payload:M,storeId:t,events:g}),Fi().then(()=>{l=!0}),u=!0,Kt(d,x,r.state.value[t])}const R=$c;function v(){i.stop(),d=[],h=[],r._s.delete(t)}function S(M,x){return function(){ss(r);const Q=Array.from(arguments),X=[],Z=[];function ge(he){X.push(he)}function ve(he){Z.push(he)}Kt(h,{args:Q,name:M,store:I,after:ge,onError:ve});let ue;try{ue=x.apply(this&&this.$id===t?this:I,Q)}catch(he){throw Kt(Z,he),he}return ue instanceof Promise?ue.then(he=>(Kt(X,he),he)).catch(he=>(Kt(Z,he),Promise.reject(he))):(Kt(X,ue),ue)}}const P={_p:r,$id:t,$onAction:Jo.bind(null,h),$patch:T,$reset:R,$subscribe(M,x={}){const Q=Jo(d,M,x.detached,()=>X()),X=i.run(()=>Hn(()=>r.state.value[t],Z=>{(x.flush==="sync"?u:l)&&M({storeId:t,type:Vn.direct,events:g},Z)},Qe({},c,x)));return Q},$dispose:v},I=_n(Qe({},P));r._s.set(t,I);const $=r._e.run(()=>(i=Ka(),i.run(()=>e())));for(const M in $){const x=$[M];if(fe(x)&&!Uh(x)||Et(x))o||(y&&Bh(x)&&(fe(x)?x.value=y[M]:ii(x,y[M])),r.state.value[t][M]=x);else if(typeof x=="function"){const Q=S(M,x);$[M]=Q,a.actions[M]=x}}return Qe(I,$),Qe(Y(I),$),Object.defineProperty(I,"$state",{get:()=>r.state.value[t],set:M=>{T(x=>{Qe(x,M)})}}),r._p.forEach(M=>{Qe(I,i.run(()=>M({store:I,app:r._a,pinia:r,options:a})))}),y&&o&&n.hydrate&&n.hydrate(I.$state,y),l=!0,u=!0,I}function H_(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Mc();return a=a||l&&Ve(Fc),a&&ss(a),a=Uc,a._s.has(r)||(i?Hc(r,e,s,a):Fh(r,s,a)),a._s.get(r)}return o.$id=r,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},$h=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),r.push(n[u],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$h(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw Error();const h=i<<2|a>>4;if(r.push(h),l!==64){const g=a<<4&240|l>>2;if(r.push(g),d!==64){const y=l<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},zc=function(t){const e=jc(t);return Vc.encodeByteArray(e,!0)},Hh=function(t){try{return Vc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vh(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function zh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qh(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wh(){return typeof indexedDB=="object"}function Jh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="FirebaseError";class vn extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=Gh,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,or.prototype.create)}}class or{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Yh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vn(s,a,r)}}function Yh(t,e){return t.replace(Xh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Xh=/\{\$([^}]+)}/g;function Qh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Go(i)&&Go(o)){if(!$r(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Go(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ln(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Zh(t,e){const n=new ed(t,e);return n.subscribe.bind(n)}class ed{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");td(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=As),s.error===void 0&&(s.error=As),s.complete===void 0&&(s.complete=As);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function td(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function As(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sd(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rd(t){return t===kt?void 0:t}function sd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const od={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},ad=ae.INFO,cd={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},ld=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=cd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kc{constructor(e){this.name=e,this._logLevel=ad,this._logHandler=ld,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?od[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}function ud(t){return Array.prototype.slice.call(t)}function qc(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function Wi(t,e,n){var r,s=new Promise(function(i,o){r=t[e].apply(t,n),qc(r).then(i,o)});return s.request=r,s}function fd(t,e,n){var r=Wi(t,e,n);return r.then(function(s){if(!!s)return new er(s,r.request)})}function wn(t,e,n){n.forEach(function(r){Object.defineProperty(t.prototype,r,{get:function(){return this[e][r]},set:function(s){this[e][r]=s}})})}function Ji(t,e,n,r){r.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return Wi(this[e],s,arguments)})})}function is(t,e,n,r){r.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return this[e][s].apply(this[e],arguments)})})}function Wc(t,e,n,r){r.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return fd(this[e],s,arguments)})})}function Ht(t){this._index=t}wn(Ht,"_index",["name","keyPath","multiEntry","unique"]);Ji(Ht,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);Wc(Ht,"_index",IDBIndex,["openCursor","openKeyCursor"]);function er(t,e){this._cursor=t,this._request=e}wn(er,"_cursor",["direction","key","primaryKey","value"]);Ji(er,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(er.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),qc(e._request).then(function(r){if(!!r)return new er(r,e._request)})})})});function Je(t){this._store=t}Je.prototype.createIndex=function(){return new Ht(this._store.createIndex.apply(this._store,arguments))};Je.prototype.index=function(){return new Ht(this._store.index.apply(this._store,arguments))};wn(Je,"_store",["name","keyPath","indexNames","autoIncrement"]);Ji(Je,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);Wc(Je,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);is(Je,"_store",IDBObjectStore,["deleteIndex"]);function cr(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}cr.prototype.objectStore=function(){return new Je(this._tx.objectStore.apply(this._tx,arguments))};wn(cr,"_tx",["objectStoreNames","mode"]);is(cr,"_tx",IDBTransaction,["abort"]);function os(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new cr(n)}os.prototype.createObjectStore=function(){return new Je(this._db.createObjectStore.apply(this._db,arguments))};wn(os,"_db",["name","version","objectStoreNames"]);is(os,"_db",IDBDatabase,["deleteObjectStore","close"]);function as(t){this._db=t}as.prototype.transaction=function(){return new cr(this._db.transaction.apply(this._db,arguments))};wn(as,"_db",["name","version","objectStoreNames"]);is(as,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[Je,Ht].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=ud(arguments),r=n[n.length-1],s=this._store||this._index,i=s[t].apply(s,n.slice(0,-1));i.onsuccess=function(){r(i.result)}})})});[Ht,Je].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var r=this,s=[];return new Promise(function(i){r.iterateCursor(e,function(o){if(!o){i(s);return}if(s.push(o.value),n!==void 0&&s.length==n){i(s);return}o.continue()})})})});function hd(t,e,n){var r=Wi(indexedDB,"open",[t,e]),s=r.request;return s&&(s.onupgradeneeded=function(i){n&&n(new os(s.result,i.oldVersion,s.transaction))}),r.then(function(i){return new as(i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oi="@firebase/app",Yo="0.7.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Kc("@firebase/app"),gd="@firebase/app-compat",md="@firebase/analytics-compat",yd="@firebase/analytics",_d="@firebase/app-check-compat",vd="@firebase/app-check",bd="@firebase/auth",wd="@firebase/auth-compat",Ed="@firebase/database",Id="@firebase/database-compat",Td="@firebase/functions",Cd="@firebase/functions-compat",Ad="@firebase/installations",Rd="@firebase/installations-compat",Sd="@firebase/messaging",Pd="@firebase/messaging-compat",kd="@firebase/performance",Od="@firebase/performance-compat",Nd="@firebase/remote-config",Md="@firebase/remote-config-compat",Dd="@firebase/storage",Ld="@firebase/storage-compat",xd="@firebase/firestore",Bd="@firebase/firestore-compat",Ud="firebase",Fd="9.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="[DEFAULT]",$d={[oi]:"fire-core",[gd]:"fire-core-compat",[yd]:"fire-analytics",[md]:"fire-analytics-compat",[vd]:"fire-app-check",[_d]:"fire-app-check-compat",[bd]:"fire-auth",[wd]:"fire-auth-compat",[Ed]:"fire-rtdb",[Id]:"fire-rtdb-compat",[Td]:"fire-fn",[Cd]:"fire-fn-compat",[Ad]:"fire-iid",[Rd]:"fire-iid-compat",[Sd]:"fire-fcm",[Pd]:"fire-fcm-compat",[kd]:"fire-perf",[Od]:"fire-perf-compat",[Nd]:"fire-rc",[Md]:"fire-rc-compat",[Dd]:"fire-gcs",[Ld]:"fire-gcs-compat",[xd]:"fire-fst",[Bd]:"fire-fst-compat","fire-js":"fire-js",[Ud]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Map,ai=new Map;function Hd(t,e){try{t.container.addComponent(e)}catch(n){Gi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tr(t){const e=t.name;if(ai.has(e))return Gi.debug(`There were multiple attempts to register component ${e}.`),!1;ai.set(e,t);for(const n of Hr.values())Hd(n,t);return!0}function Gc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ct=new or("app","Firebase",jd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=Fd;function j_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Jc,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ct.create("bad-app-name",{appName:String(r)});const s=Hr.get(r);if(s){if($r(t,s.options)&&$r(n,s.config))return s;throw Ct.create("duplicate-app",{appName:r})}const i=new id(r);for(const a of ai.values())i.addComponent(a);const o=new Vd(t,n,i);return Hr.set(r,o),o}function zd(t=Jc){const e=Hr.get(t);if(!e)throw Ct.create("no-app",{appName:t});return e}function en(t,e,n){var r;let s=(r=$d[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gi.warn(a.join(" "));return}tr(new an(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="firebase-heartbeat-database",qd=1,Ut="firebase-heartbeat-store";let Rs=null;function Yi(){return Rs||(Rs=hd(Kd,qd,t=>{switch(t.oldVersion){case 0:t.createObjectStore(Ut)}}).catch(t=>{throw Ct.create("storage-open",{originalErrorMessage:t.message})})),Rs}async function Wd(t){try{return(await Yi()).transaction(Ut).objectStore(Ut).get(Xi(t))}catch(e){throw Ct.create("storage-get",{originalErrorMessage:e.message})}}async function Ss(t,e){try{const r=(await Yi()).transaction(Ut,"readwrite");return await r.objectStore(Ut).put(e,Xi(t)),r.complete}catch(n){throw Ct.create("storage-set",{originalErrorMessage:n.message})}}async function Jd(t){try{const n=(await Yi()).transaction(Ut,"readwrite");return await n.objectStore(Ut).delete(Xi(t)),n.complete}catch(e){throw Ct.create("storage-delete",{originalErrorMessage:e.message})}}function Xi(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=1024,Yd=30*24*60*60*1e3;class Xd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ep(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(s=>s.date===r))return this._heartbeatsCache.push({date:r,userAgent:n}),this._heartbeatsCache=this._heartbeatsCache.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Yd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:n}=Zd(this._heartbeatsCache),r=zc(JSON.stringify({version:2,heartbeats:e}));return n.length>0?(this._heartbeatsCache=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),r}}function Qd(){return new Date().toISOString().substring(0,10)}function Zd(t,e=Gd){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.userAgent===s.userAgent);if(i){if(i.dates.push(s.date),Xo(n)>e){i.dates.pop();break}}else if(n.push({userAgent:s.userAgent,dates:[s.date]}),Xo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ep{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wh()?Jh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Wd(this.app);return(n==null?void 0:n.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return Ss(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ss(this.app,{heartbeats:[...r,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ss(this.app,{heartbeats:r.filter(s=>!e.includes(s))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return Jd(this.app)}}function Xo(t){return zc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t){tr(new an("platform-logger",e=>new dd(e),"PRIVATE")),tr(new an("heartbeat",e=>new Xd(e),"PRIVATE")),en(oi,Yo,t),en(oi,Yo,"esm2017"),en("fire-js","")}tp("");var np="firebase",rp="9.6.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(np,rp,"app");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Qi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Yc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sp=Yc,Xc=new or("auth","Firebase",Yc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=new Kc("@firebase/auth");function Sr(t,...e){Qo.logLevel<=ae.ERROR&&Qo.error(`Auth (${cs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,...e){throw Zi(t,...e)}function ze(t,...e){return Zi(t,...e)}function ip(t,e,n){const r=Object.assign(Object.assign({},sp()),{[e]:n});return new or("auth","Firebase",r).create(e,{appName:t.name})}function Zi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xc.create(t,...e)}function H(t,e,...n){if(!t)throw Zi(e,...n)}function nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sr(e),new Error(e)}function it(t,e){t||nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Map;function rt(t){it(t instanceof Function,"Expected a class definition");let e=Zo.get(t);return e?(it(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zo.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t,e){const n=Gc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if($r(i,e!=null?e:{}))return s;Be(s,"already-initialized")}return n.initialize({options:e})}function ap(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cp(){return ea()==="http:"||ea()==="https:"}function ea(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cp()||zh()||"connection"in navigator)?navigator.onLine:!0}function up(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){this.shortDelay=e,this.longDelay=n,it(n>e,"Short delay should be less than long delay!"),this.isMobile=Vh()||Kh()}get(){return lp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t,e){it(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=new lr(3e4,6e4);function ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function En(t,e,n,r,s={}){return Zc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ar(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Qc.fetch()(el(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Zc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fp),e);try{const s=new dp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ps(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ps(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ps(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ip(t,u,l);Be(t,u)}}catch(s){if(s instanceof vn)throw s;Be(t,"network-request-failed")}}async function fr(t,e,n,r,s={}){const i=await En(t,e,n,r,s);return"mfaPendingCredential"in i&&Be(t,"multi-factor-auth-required",{_serverResponse:i}),i}function el(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?eo(t.config,s):`${t.config.apiScheme}://${s}`}class dp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),hp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ps(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ze(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pp(t,e){return En(t,"POST","/v1/accounts:delete",e)}async function gp(t,e){return En(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mp(t,e=!1){const n=bn(t),r=await n.getIdToken(e),s=to(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zn(ks(s.auth_time)),issuedAtTime:zn(ks(s.iat)),expirationTime:zn(ks(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ks(t){return Number(t)*1e3}function to(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Sr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hh(n);return s?JSON.parse(s):(Sr("Failed to decode base64 JWT payload"),null)}catch(s){return Sr("Caught error parsing JWT payload as JSON",s),null}}function yp(t){const e=to(t);return H(e,"internal-error"),H(typeof e.exp!="undefined","internal-error"),H(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&_p(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _p({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zn(this.lastLoginAt),this.creationTime=zn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await cn(t,gp(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ep(i.providerUserInfo):[],a=wp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new tl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function bp(t){const e=bn(t);await jr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ep(t){return t.map(e=>{var{providerId:n}=e,r=Qi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(t,e){const n=await Zc(t,{},async()=>{const r=ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=el(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken!="undefined","internal-error"),H(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):yp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ip(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new nr;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nr,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e){H(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class xt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Qi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await cn(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mp(this,e)}reload(){return bp(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await cn(this,pp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:I,isAnonymous:$,providerData:M,stsTokenManager:x}=n;H(P&&x,e,"internal-error");const Q=nr.fromJSON(this.name,x);H(typeof P=="string",e,"internal-error"),ct(d,e.name),ct(h,e.name),H(typeof I=="boolean",e,"internal-error"),H(typeof $=="boolean",e,"internal-error"),ct(g,e.name),ct(y,e.name),ct(T,e.name),ct(R,e.name),ct(v,e.name),ct(S,e.name);const X=new xt({uid:P,auth:e,email:h,emailVerified:I,displayName:d,isAnonymous:$,photoURL:y,phoneNumber:g,tenantId:T,stsTokenManager:Q,createdAt:v,lastLoginAt:S});return M&&Array.isArray(M)&&(X.providerData=M.map(Z=>Object.assign({},Z))),R&&(X._redirectEventId=R),X}static async _fromIdTokenResponse(e,n,r=!1){const s=new nr;s.updateFromServerResponse(n);const i=new xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await jr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nl.type="NONE";const ta=nl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t,e,n){return`firebase:${t}:${e}:${n}`}class tn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Pr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Pr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new tn(rt(ta),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||rt(ta);const o=Pr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=xt._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new tn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new tn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(il(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(al(e))return"Blackberry";if(cl(e))return"Webos";if(no(e))return"Safari";if((e.includes("chrome/")||sl(e))&&!e.includes("edge/"))return"Chrome";if(ol(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rl(t=_e()){return/firefox\//i.test(t)}function no(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sl(t=_e()){return/crios\//i.test(t)}function il(t=_e()){return/iemobile/i.test(t)}function ol(t=_e()){return/android/i.test(t)}function al(t=_e()){return/blackberry/i.test(t)}function cl(t=_e()){return/webos/i.test(t)}function ls(t=_e()){return/iphone|ipad|ipod/i.test(t)}function Tp(t=_e()){var e;return ls(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Cp(){return qh()&&document.documentMode===10}function ll(t=_e()){return ls(t)||ol(t)||cl(t)||al(t)||/windows phone/i.test(t)||il(t)}function Ap(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t,e=[]){let n;switch(t){case"Browser":n=na(_e());break;case"Worker":n=`${na(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cs}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ra(this),this.idTokenSubscription=new ra(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=up()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?bn(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new or("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ul(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function us(t){return bn(t)}class ra{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zh(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,n){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function Sp(t,e){return En(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pp(t,e){return fr(t,"POST","/v1/accounts:signInWithPassword",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp(t,e){return fr(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}async function Op(t,e){return fr(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends ro{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new rr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new rr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Pp(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kp(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Sp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Op(e,{idToken:n,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(t,e){return fr(t,"POST","/v1/accounts:signInWithIdp",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="http://localhost";class Ft extends ro{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Qi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ft(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return nn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,nn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,nn(e,n)}buildRequest(){const e={requestUri:Np,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ar(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Dp(t){const e=Ln(xn(t)).link,n=e?Ln(xn(e)).deep_link_id:null,r=Ln(xn(t)).deep_link_id;return(r?Ln(xn(r)).link:null)||r||n||e||t}class so{constructor(e){var n,r,s,i,o,a;const c=Ln(xn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=Mp((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Dp(e);try{return new so(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.providerId=In.PROVIDER_ID}static credential(e,n){return rr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=so.parseLink(n);return H(r,"argument-error"),rr._fromEmailAndCode(e,r.code,r.tenantId)}}In.PROVIDER_ID="password";In.EMAIL_PASSWORD_SIGN_IN_METHOD="password";In.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends fl{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends hr{constructor(){super("facebook.com")}static credential(e){return Ft._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";pt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends hr{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Ft._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gt.credential(n,r)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends hr{constructor(){super("github.com")}static credential(e){return Ft._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com";mt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends hr{constructor(){super("twitter.com")}static credential(e,n){return Ft._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lp(t,e){return fr(t,"POST","/v1/accounts:signUp",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await xt._fromIdTokenResponse(e,r,s),o=sa(r);return new $t({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=sa(r);return new $t({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function sa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends vn{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,Vr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Vr(e,n,r,s)}}function hl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vr._fromErrorAndOperation(t,i,e,r):i})}async function xp(t,e,n=!1){const r=await cn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $t._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bp(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await cn(t,hl(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=to(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),$t._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(t,e,n=!1){const r="signIn",s=await hl(t,r,e),i=await $t._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Up(t,e){return dl(us(t),e)}async function V_(t,e,n){const r=us(t),s=await Lp(r,{returnSecureToken:!0,email:e,password:n}),i=await $t._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function z_(t,e,n){return Up(bn(t),In.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fp(t,e){return En(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K_(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=bn(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await cn(r,Fp(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}const zr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zr,"1"),this.storage.removeItem(zr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(){const t=_e();return no(t)||ls(t)}const Hp=1e3,jp=10;class gl extends pl{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$p()&&Ap(),this.fallbackToPolling=ll(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Cp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Hp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gl.type="LOCAL";const Vp=gl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends pl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ml.type="SESSION";const yl=ml;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new fs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await zp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=io("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function qp(t){Ke().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){return typeof Ke().WorkerGlobalScope!="undefined"&&typeof Ke().importScripts=="function"}async function Wp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Gp(){return _l()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="firebaseLocalStorageDb",Yp=1,Kr="firebaseLocalStorage",bl="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hs(t,e){return t.transaction([Kr],e?"readwrite":"readonly").objectStore(Kr)}function Xp(){const t=indexedDB.deleteDatabase(vl);return new dr(t).toPromise()}function li(){const t=indexedDB.open(vl,Yp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kr,{keyPath:bl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kr)?e(r):(r.close(),await Xp(),e(await li()))})})}async function ia(t,e,n){const r=hs(t,!0).put({[bl]:e,value:n});return new dr(r).toPromise()}async function Qp(t,e){const n=hs(t,!1).get(e),r=await new dr(n).toPromise();return r===void 0?null:r.value}function oa(t,e){const n=hs(t,!0).delete(e);return new dr(n).toPromise()}const Zp=800,eg=3;class wl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await li(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>eg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _l()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fs._getInstance(Gp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Wp(),!this.activeServiceWorker)return;this.sender=new Kp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await li();return await ia(e,zr,"1"),await oa(e,zr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ia(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>oa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=hs(s,!1).getAll();return new dr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wl.type="LOCAL";const tg=wl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function rg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ze("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ng().appendChild(r)})}function sg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new lr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t,e){return e?rt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends ro{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return nn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return nn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function og(t){return dl(t.auth,new oo(t),t.bypassAuthState)}function ag(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Bp(n,new oo(t),t.bypassAuthState)}async function cg(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),xp(n,new oo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return og;case"linkViaPopup":case"linkViaRedirect":return cg;case"reauthViaPopup":case"reauthViaRedirect":return ag;default:Be(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=new lr(2e3,1e4);class Xt extends El{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=io();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,lg.get())};e()}}Xt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug="pendingRedirect",Os=new Map;class fg extends El{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Os.get(this.auth._key());if(!e){try{const r=await hg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Os.set(this.auth._key(),e)}return this.bypassAuthState||Os.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hg(t,e){const n=pg(e),r=dg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function dg(t){return rt(t._redirectPersistence)}function pg(t){return Pr(ug,t.config.apiKey,t.name)}async function gg(t,e,n=!1){const r=us(t),s=ig(r,e),o=await new fg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=10*60*1e3;class yg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_g(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Il(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ze(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mg&&this.cachedEventUids.clear(),this.cachedEventUids.has(aa(e))}saveEventToCache(e){this.cachedEventUids.add(aa(e)),this.lastProcessedEventTime=Date.now()}}function aa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Il({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _g(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Il(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vg(t,e={}){return En(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wg=/^https?/;async function Eg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vg(t);for(const n of e)try{if(Ig(n))return}catch{}Be(t,"unauthorized-domain")}function Ig(t){const e=ci(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wg.test(n))return!1;if(bg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=new lr(3e4,6e4);function ca(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Cg(t){return new Promise((e,n)=>{var r,s,i;function o(){ca(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ca(),n(ze(t,"network-request-failed"))},timeout:Tg.get()})}if(!((s=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ke().gapi)===null||i===void 0)&&i.load)o();else{const a=sg("iframefcb");return Ke()[a]=()=>{gapi.load?o():n(ze(t,"network-request-failed"))},rg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw kr=null,e})}let kr=null;function Ag(t){return kr=kr||Cg(t),kr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=new lr(5e3,15e3),Sg="__/auth/iframe",Pg="emulator/auth/iframe",kg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Og=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ng(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eo(e,Pg):`https://${t.config.authDomain}/${Sg}`,r={apiKey:e.apiKey,appName:t.name,v:cs},s=Og.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ar(r).slice(1)}`}async function Mg(t){const e=await Ag(t),n=Ke().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:Ng(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ze(t,"network-request-failed"),a=Ke().setTimeout(()=>{i(o)},Rg.get());function c(){Ke().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lg=500,xg=600,Bg="_blank",Ug="http://localhost";class la{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fg(t,e,n,r=Lg,s=xg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Dg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=_e().toLowerCase();n&&(a=sl(l)?Bg:n),rl(l)&&(e=e||Ug,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,y])=>`${h}${g}=${y},`,"");if(Tp(l)&&a!=="_self")return $g(e||"",a),new la(null);const d=window.open(e||"",a,u);H(d,t,"popup-blocked");try{d.focus()}catch{}return new la(d)}function $g(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="__/auth/handler",jg="emulator/auth/handler";function ua(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cs,eventId:s};if(e instanceof fl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof hr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Vg(t)}?${ar(a).slice(1)}`}function Vg({config:t}){return t.emulator?eo(t,jg):`https://${t.authDomain}/${Hg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="webStorageSupport";class zg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yl,this._completeRedirectFn=gg}async _openPopup(e,n,r,s){var i;it((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ua(e,n,r,ci(),s);return Fg(e,o,io())}async _openRedirect(e,n,r,s){return await this._originValidation(e),qp(ua(e,n,r,ci(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(it(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Mg(e),r=new yg(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ns,{type:Ns},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ns];o!==void 0&&n(!!o),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Eg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ll()||no()||ls()}}const Kg=zg;var fa="@firebase/auth",ha="0.19.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Jg(t){tr(new an("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{H(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),H(!(i!=null&&i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ul(t)},c=new Rp(o,a);return ap(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tr(new an("auth-internal",e=>{const n=us(e.getProvider("auth").getImmediate());return(r=>new qg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(fa,ha,Wg(t)),en(fa,ha,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t=zd()){const e=Gc(t,"auth");return e.isInitialized()?e.getImmediate():op(t,{popupRedirectResolver:Kg,persistence:[tg,Vp,yl]})}Jg("Browser");/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Tl=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Tn=t=>Tl?Symbol(t):"_vr_"+t,Gg=Tn("rvlm"),da=Tn("rvd"),ds=Tn("r"),Cl=Tn("rl"),ui=Tn("rvl"),Yt=typeof window!="undefined";function Yg(t){return t.__esModule||Tl&&t[Symbol.toStringTag]==="Module"}const re=Object.assign;function Ms(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const Kn=()=>{},Xg=/\/$/,Qg=t=>t.replace(Xg,"");function Ds(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=nm(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Zg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function pa(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function em(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ln(e.matched[r],n.matched[s])&&Al(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ln(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Al(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!tm(t[n],e[n]))return!1;return!0}function tm(t,e){return Array.isArray(t)?ga(t,e):Array.isArray(e)?ga(e,t):t===e}function ga(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function nm(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var sr;(function(t){t.pop="pop",t.push="push"})(sr||(sr={}));var qn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qn||(qn={}));function rm(t){if(!t)if(Yt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Qg(t)}const sm=/^[^#]+#/;function im(t,e){return t.replace(sm,"#")+e}function om(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ps=()=>({left:window.pageXOffset,top:window.pageYOffset});function am(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=om(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ma(t,e){return(history.state?history.state.position-e:-1)+t}const fi=new Map;function cm(t,e){fi.set(t,e)}function lm(t){const e=fi.get(t);return fi.delete(t),e}let um=()=>location.protocol+"//"+location.host;function Rl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),pa(c,"")}return pa(n,t)+r+s}function fm(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const g=Rl(t,location),y=n.value,T=e.value;let R=0;if(h){if(n.value=g,e.value=h,o&&o===y){o=null;return}R=T?h.position-T.position:0}else r(g);s.forEach(v=>{v(n.value,y,{delta:R,type:sr.pop,direction:R?R>0?qn.forward:qn.back:qn.unknown})})};function c(){o=n.value}function l(h){s.push(h);const g=()=>{const y=s.indexOf(h);y>-1&&s.splice(y,1)};return i.push(g),g}function u(){const{history:h}=window;!h.state||h.replaceState(re({},h.state,{scroll:ps()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function ya(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ps():null}}function hm(t){const{history:e,location:n}=window,r={value:Rl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:um()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,l){const u=re({},e.state,ya(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=re({},s.value,e.state,{forward:c,scroll:ps()});i(u.current,u,!0);const d=re({},ya(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function dm(t){t=rm(t);const e=hm(t),n=fm(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=re({location:"",base:t,go:r,createHref:im.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function W_(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),dm(t)}function pm(t){return typeof t=="string"||t&&typeof t=="object"}function Sl(t){return typeof t=="string"||typeof t=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pl=Tn("nf");var _a;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_a||(_a={}));function un(t,e){return re(new Error,{type:t,[Pl]:!0},e)}function ut(t,e){return t instanceof Error&&Pl in t&&(e==null||!!(t.type&e))}const va="[^/]+?",gm={sensitive:!1,strict:!1,start:!0,end:!0},mm=/[.+*?^${}()[\]/\\]/g;function ym(t,e){const n=re({},gm,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const h=l[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(s+="/"),s+=h.value.replace(mm,"\\$&"),g+=40;else if(h.type===1){const{value:y,repeatable:T,optional:R,regexp:v}=h;i.push({name:y,repeatable:T,optional:R});const S=v||va;if(S!==va){g+=10;try{new RegExp(`(${S})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${y}" (${S}): `+I.message)}}let P=T?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(P=R&&l.length<2?`(?:/${P})`:"/"+P),R&&(P+="?"),s+=P,g+=20,R&&(g+=-8),T&&(g+=-20),S===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",y=i[h-1];d[y.name]=g&&y.repeatable?g.split("/"):g}return d}function c(l){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:T,optional:R}=g,v=y in l?l[y]:"";if(Array.isArray(v)&&!T)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const S=Array.isArray(v)?v.join("/"):v;if(!S)if(R)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);u+=S}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function _m(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function vm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=_m(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const bm={type:0,value:""},wm=/[a-zA-Z0-9_]/;function Em(t){if(!t)return[[]];if(t==="/")return[[bm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:wm.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function Im(t,e,n){const r=ym(Em(t.path),n),s=re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Tm(t,e){const n=[],r=new Map;e=wa({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,d,h){const g=!h,y=Am(u);y.aliasOf=h&&h.record;const T=wa(e,u),R=[y];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const I of P)R.push(re({},y,{components:h?h.record.components:y.components,path:I,aliasOf:h?h.record:y}))}let v,S;for(const P of R){const{path:I}=P;if(d&&I[0]!=="/"){const $=d.record.path,M=$[$.length-1]==="/"?"":"/";P.path=d.record.path+(I&&M+I)}if(v=Im(P,d,T),h?h.alias.push(v):(S=S||v,S!==v&&S.alias.push(v),g&&u.name&&!ba(v)&&o(u.name)),"children"in y){const $=y.children;for(let M=0;M<$.length;M++)i($[M],v,h&&h.children[M])}h=h||v,c(v)}return S?()=>{o(S)}:Kn}function o(u){if(Sl(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&vm(u,n[d])>=0&&(u.record.path!==n[d].record.path||!kl(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!ba(u)&&r.set(u.record.name,u)}function l(u,d){let h,g={},y,T;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw un(1,{location:u});T=h.record.name,g=re(Cm(d.params,h.keys.filter(S=>!S.optional).map(S=>S.name)),u.params),y=h.stringify(g)}else if("path"in u)y=u.path,h=n.find(S=>S.re.test(y)),h&&(g=h.parse(y),T=h.record.name);else{if(h=d.name?r.get(d.name):n.find(S=>S.re.test(d.path)),!h)throw un(1,{location:u,currentLocation:d});T=h.record.name,g=re({},d.params,u.params),y=h.stringify(g)}const R=[];let v=h;for(;v;)R.unshift(v.record),v=v.parent;return{name:T,path:y,params:g,matched:R,meta:Sm(R)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Cm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Am(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Rm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Rm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function ba(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Sm(t){return t.reduce((e,n)=>re(e,n.meta),{})}function wa(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function kl(t,e){return e.children.some(n=>n===t||kl(t,n))}const Ol=/#/g,Pm=/&/g,km=/\//g,Om=/=/g,Nm=/\?/g,Nl=/\+/g,Mm=/%5B/g,Dm=/%5D/g,Ml=/%5E/g,Lm=/%60/g,Dl=/%7B/g,xm=/%7C/g,Ll=/%7D/g,Bm=/%20/g;function ao(t){return encodeURI(""+t).replace(xm,"|").replace(Mm,"[").replace(Dm,"]")}function Um(t){return ao(t).replace(Dl,"{").replace(Ll,"}").replace(Ml,"^")}function hi(t){return ao(t).replace(Nl,"%2B").replace(Bm,"+").replace(Ol,"%23").replace(Pm,"%26").replace(Lm,"`").replace(Dl,"{").replace(Ll,"}").replace(Ml,"^")}function Fm(t){return hi(t).replace(Om,"%3D")}function $m(t){return ao(t).replace(Ol,"%23").replace(Nm,"%3F")}function Hm(t){return t==null?"":$m(t).replace(km,"%2F")}function qr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function jm(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Nl," "),o=i.indexOf("="),a=qr(o<0?i:i.slice(0,o)),c=o<0?null:qr(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ea(t){let e="";for(let n in t){const r=t[n];if(n=Fm(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&hi(i)):[r&&hi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Vm(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function kn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function dt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(un(4,{from:n,to:e})):d instanceof Error?a(d):pm(d)?a(un(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function Ls(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(zm(a)){const l=(a.__vccOpts||a)[e];l&&s.push(dt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Yg(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&dt(h,n,r,i,o)()}))}}return s}function zm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ia(t){const e=Ve(ds),n=Ve(Cl),r=Me(()=>e.resolve(Un(t.to))),s=Me(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(ln.bind(null,u));if(h>-1)return h;const g=Ta(c[l-2]);return l>1&&Ta(u)===g&&d[d.length-1].path!==g?d.findIndex(ln.bind(null,c[l-2])):h}),i=Me(()=>s.value>-1&&Jm(n.params,r.value.params)),o=Me(()=>s.value>-1&&s.value===n.matched.length-1&&Al(n.params,r.value.params));function a(c={}){return Wm(c)?e[Un(t.replace)?"replace":"push"](Un(t.to)).catch(Kn):Promise.resolve()}return{route:r,href:Me(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Km=_c({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ia,setup(t,{slots:e}){const n=_n(Ia(t)),{options:r}=Ve(ds),s=Me(()=>({[Ca(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ca(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:xc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),qm=Km;function Wm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jm(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ta(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ca=(t,e,n)=>t!=null?t:e!=null?e:n,Gm=_c({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Ve(ui),s=Me(()=>t.route||r.value),i=Ve(da,0),o=Me(()=>s.value.matched[i]);Ar(da,i+1),Ar(Gg,o),Ar(ui,s);const a=Bi();return Hn(()=>[a.value,o.value,t.name],([c,l,u],[d,h,g])=>{l&&(l.instances[u]=c,h&&h!==l&&c&&c===d&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!ln(l,h)||!d)&&(l.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],d=t.name;if(!u)return Aa(n.default,{Component:u,route:c});const h=l.props[t.name],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,T=xc(u,re({},g,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(l.instances[d]=null)},ref:a}));return Aa(n.default,{Component:T,route:c})||T}}});function Aa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ym=Gm;function J_(t){const e=Tm(t.routes,t),n=t.parseQuery||jm,r=t.stringifyQuery||Ea,s=t.history,i=kn(),o=kn(),a=kn(),c=Yu(lt);let l=lt;Yt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ms.bind(null,_=>""+_),d=Ms.bind(null,Hm),h=Ms.bind(null,qr);function g(_,L){let O,B;return Sl(_)?(O=e.getRecordMatcher(_),B=L):B=_,e.addRoute(B,O)}function y(_){const L=e.getRecordMatcher(_);L&&e.removeRoute(L)}function T(){return e.getRoutes().map(_=>_.record)}function R(_){return!!e.getRecordMatcher(_)}function v(_,L){if(L=re({},L||c.value),typeof _=="string"){const z=Ds(n,_,L.path),f=e.resolve({path:z.path},L),p=s.createHref(z.fullPath);return re(z,f,{params:h(f.params),hash:qr(z.hash),redirectedFrom:void 0,href:p})}let O;if("path"in _)O=re({},_,{path:Ds(n,_.path,L.path).path});else{const z=re({},_.params);for(const f in z)z[f]==null&&delete z[f];O=re({},_,{params:d(_.params)}),L.params=d(L.params)}const B=e.resolve(O,L),te=_.hash||"";B.params=u(h(B.params));const oe=Zg(r,re({},_,{hash:Um(te),path:B.path})),q=s.createHref(oe);return re({fullPath:oe,hash:te,query:r===Ea?Vm(_.query):_.query||{}},B,{redirectedFrom:void 0,href:q})}function S(_){return typeof _=="string"?Ds(n,_,c.value.path):re({},_)}function P(_,L){if(l!==_)return un(8,{from:L,to:_})}function I(_){return x(_)}function $(_){return I(re(S(_),{replace:!0}))}function M(_){const L=_.matched[_.matched.length-1];if(L&&L.redirect){const{redirect:O}=L;let B=typeof O=="function"?O(_):O;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=S(B):{path:B},B.params={}),re({query:_.query,hash:_.hash,params:_.params},B)}}function x(_,L){const O=l=v(_),B=c.value,te=_.state,oe=_.force,q=_.replace===!0,z=M(O);if(z)return x(re(S(z),{state:te,force:oe,replace:q}),L||O);const f=O;f.redirectedFrom=L;let p;return!oe&&em(r,B,O)&&(p=un(16,{to:f,from:B}),Vt(B,B,!0,!1)),(p?Promise.resolve(p):X(f,B)).catch(m=>ut(m)?ut(m,2)?m:Te(m):ie(m,f,B)).then(m=>{if(m){if(ut(m,2))return x(re(S(m.to),{state:te,force:oe,replace:q}),L||f)}else m=ge(f,B,!0,q,te);return Z(f,B,m),m})}function Q(_,L){const O=P(_,L);return O?Promise.reject(O):Promise.resolve()}function X(_,L){let O;const[B,te,oe]=Xm(_,L);O=Ls(B.reverse(),"beforeRouteLeave",_,L);for(const z of B)z.leaveGuards.forEach(f=>{O.push(dt(f,_,L))});const q=Q.bind(null,_,L);return O.push(q),qt(O).then(()=>{O=[];for(const z of i.list())O.push(dt(z,_,L));return O.push(q),qt(O)}).then(()=>{O=Ls(te,"beforeRouteUpdate",_,L);for(const z of te)z.updateGuards.forEach(f=>{O.push(dt(f,_,L))});return O.push(q),qt(O)}).then(()=>{O=[];for(const z of _.matched)if(z.beforeEnter&&!L.matched.includes(z))if(Array.isArray(z.beforeEnter))for(const f of z.beforeEnter)O.push(dt(f,_,L));else O.push(dt(z.beforeEnter,_,L));return O.push(q),qt(O)}).then(()=>(_.matched.forEach(z=>z.enterCallbacks={}),O=Ls(oe,"beforeRouteEnter",_,L),O.push(q),qt(O))).then(()=>{O=[];for(const z of o.list())O.push(dt(z,_,L));return O.push(q),qt(O)}).catch(z=>ut(z,8)?z:Promise.reject(z))}function Z(_,L,O){for(const B of a.list())B(_,L,O)}function ge(_,L,O,B,te){const oe=P(_,L);if(oe)return oe;const q=L===lt,z=Yt?history.state:{};O&&(B||q?s.replace(_.fullPath,re({scroll:q&&z&&z.scroll},te)):s.push(_.fullPath,te)),c.value=_,Vt(_,L,O,q),Te()}let ve;function ue(){ve=s.listen((_,L,O)=>{const B=v(_),te=M(B);if(te){x(re(te,{replace:!0}),B).catch(Kn);return}l=B;const oe=c.value;Yt&&cm(ma(oe.fullPath,O.delta),ps()),X(B,oe).catch(q=>ut(q,12)?q:ut(q,2)?(x(q.to,B).then(z=>{ut(z,20)&&!O.delta&&O.type===sr.pop&&s.go(-1,!1)}).catch(Kn),Promise.reject()):(O.delta&&s.go(-O.delta,!1),ie(q,B,oe))).then(q=>{q=q||ge(B,oe,!1),q&&(O.delta?s.go(-O.delta,!1):O.type===sr.pop&&ut(q,20)&&s.go(-1,!1)),Z(B,oe,q)}).catch(Kn)})}let he=kn(),jt=kn(),de;function ie(_,L,O){Te(_);const B=jt.list();return B.length?B.forEach(te=>te(_,L,O)):console.error(_),Promise.reject(_)}function ee(){return de&&c.value!==lt?Promise.resolve():new Promise((_,L)=>{he.add([_,L])})}function Te(_){return de||(de=!_,ue(),he.list().forEach(([L,O])=>_?O(_):L()),he.reset()),_}function Vt(_,L,O,B){const{scrollBehavior:te}=t;if(!Yt||!te)return Promise.resolve();const oe=!O&&lm(ma(_.fullPath,0))||(B||!O)&&history.state&&history.state.scroll||null;return Fi().then(()=>te(_,L,oe)).then(q=>q&&am(q)).catch(q=>ie(q,_,L))}const Ye=_=>s.go(_);let Ue;const ke=new Set;return{currentRoute:c,addRoute:g,removeRoute:y,hasRoute:R,getRoutes:T,resolve:v,options:t,push:I,replace:$,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:jt.add,isReady:ee,install(_){const L=this;_.component("RouterLink",qm),_.component("RouterView",Ym),_.config.globalProperties.$router=L,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Un(c)}),Yt&&!Ue&&c.value===lt&&(Ue=!0,I(s.location).catch(te=>{}));const O={};for(const te in lt)O[te]=Me(()=>c.value[te]);_.provide(ds,L),_.provide(Cl,_n(O)),_.provide(ui,c);const B=_.unmount;ke.add(_),_.unmount=function(){ke.delete(_),ke.size<1&&(l=lt,ve&&ve(),c.value=lt,Ue=!1,de=!1),B()}}}}function qt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Xm(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ln(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ln(l,c))||s.push(c))}return[n,r,s]}function G_(){return Ve(ds)}var Y_=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function X_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var gs={},Qm=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},xl={},Pe={};let co;const Zm=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Pe.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};Pe.getSymbolTotalCodewords=function(e){return Zm[e]};Pe.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};Pe.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');co=e};Pe.isKanjiModeEnabled=function(){return typeof co!="undefined"};Pe.toSJIS=function(e){return co(e)};var ms={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit!="undefined"&&r.bit>=0&&r.bit<4},t.from=function(r,s){if(t.isValid(r))return r;try{return e(r)}catch{return s}}})(ms);function Bl(){this.buffer=[],this.length=0}Bl.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var ey=Bl;function pr(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}pr.prototype.set=function(t,e,n,r){const s=t*this.size+e;this.data[s]=n,r&&(this.reservedBit[s]=!0)};pr.prototype.get=function(t,e){return this.data[t*this.size+e]};pr.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};pr.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var ty=pr,Ul={};(function(t){const e=Pe.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const s=Math.floor(r/7)+2,i=e(r),o=i===145?26:Math.ceil((i-13)/(2*s-2))*2,a=[i-7];for(let c=1;c<s-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},t.getPositions=function(r){const s=[],i=t.getRowColCoords(r),o=i.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||s.push([i[a],i[c]]);return s}})(Ul);var Fl={};const ny=Pe.getSymbolSize,Ra=7;Fl.getPositions=function(e){const n=ny(e);return[[0,0],[n-Ra,0],[0,n-Ra]]};var $l={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(s){return s!=null&&s!==""&&!isNaN(s)&&s>=0&&s<=7},t.from=function(s){return t.isValid(s)?parseInt(s,10):void 0},t.getPenaltyN1=function(s){const i=s.size;let o=0,a=0,c=0,l=null,u=null;for(let d=0;d<i;d++){a=c=0,l=u=null;for(let h=0;h<i;h++){let g=s.get(d,h);g===l?a++:(a>=5&&(o+=e.N1+(a-5)),l=g,a=1),g=s.get(h,d),g===u?c++:(c>=5&&(o+=e.N1+(c-5)),u=g,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},t.getPenaltyN2=function(s){const i=s.size;let o=0;for(let a=0;a<i-1;a++)for(let c=0;c<i-1;c++){const l=s.get(a,c)+s.get(a,c+1)+s.get(a+1,c)+s.get(a+1,c+1);(l===4||l===0)&&o++}return o*e.N2},t.getPenaltyN3=function(s){const i=s.size;let o=0,a=0,c=0;for(let l=0;l<i;l++){a=c=0;for(let u=0;u<i;u++)a=a<<1&2047|s.get(l,u),u>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|s.get(u,l),u>=10&&(c===1488||c===93)&&o++}return o*e.N3},t.getPenaltyN4=function(s){let i=0;const o=s.data.length;for(let c=0;c<o;c++)i+=s.data[c];return Math.abs(Math.ceil(i*100/o/5)-10)*e.N4};function n(r,s,i){switch(r){case t.Patterns.PATTERN000:return(s+i)%2===0;case t.Patterns.PATTERN001:return s%2===0;case t.Patterns.PATTERN010:return i%3===0;case t.Patterns.PATTERN011:return(s+i)%3===0;case t.Patterns.PATTERN100:return(Math.floor(s/2)+Math.floor(i/3))%2===0;case t.Patterns.PATTERN101:return s*i%2+s*i%3===0;case t.Patterns.PATTERN110:return(s*i%2+s*i%3)%2===0;case t.Patterns.PATTERN111:return(s*i%3+(s+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(s,i){const o=i.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)i.isReserved(c,a)||i.xor(c,a,n(s,c,a))},t.getBestMask=function(s,i){const o=Object.keys(t.Patterns).length;let a=0,c=1/0;for(let l=0;l<o;l++){i(l),t.applyMask(l,s);const u=t.getPenaltyN1(s)+t.getPenaltyN2(s)+t.getPenaltyN3(s)+t.getPenaltyN4(s);t.applyMask(l,s),u<c&&(c=u,a=l)}return a}})($l);var ys={};const _t=ms,wr=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Er=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];ys.getBlocksCount=function(e,n){switch(n){case _t.L:return wr[(e-1)*4+0];case _t.M:return wr[(e-1)*4+1];case _t.Q:return wr[(e-1)*4+2];case _t.H:return wr[(e-1)*4+3];default:return}};ys.getTotalCodewordsCount=function(e,n){switch(n){case _t.L:return Er[(e-1)*4+0];case _t.M:return Er[(e-1)*4+1];case _t.Q:return Er[(e-1)*4+2];case _t.H:return Er[(e-1)*4+3];default:return}};var Hl={},_s={};const Wn=new Uint8Array(512),Wr=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)Wn[n]=e,Wr[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)Wn[n]=Wn[n-255]})();_s.log=function(e){if(e<1)throw new Error("log("+e+")");return Wr[e]};_s.exp=function(e){return Wn[e]};_s.mul=function(e,n){return e===0||n===0?0:Wn[Wr[e]+Wr[n]]};(function(t){const e=_s;t.mul=function(r,s){const i=new Uint8Array(r.length+s.length-1);for(let o=0;o<r.length;o++)for(let a=0;a<s.length;a++)i[o+a]^=e.mul(r[o],s[a]);return i},t.mod=function(r,s){let i=new Uint8Array(r);for(;i.length-s.length>=0;){const o=i[0];for(let c=0;c<s.length;c++)i[c]^=e.mul(s[c],o);let a=0;for(;a<i.length&&i[a]===0;)a++;i=i.slice(a)}return i},t.generateECPolynomial=function(r){let s=new Uint8Array([1]);for(let i=0;i<r;i++)s=t.mul(s,new Uint8Array([1,e.exp(i)]));return s}})(Hl);const jl=Hl;function lo(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}lo.prototype.initialize=function(e){this.degree=e,this.genPoly=jl.generateECPolynomial(this.degree)};lo.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=jl.mod(n,this.genPoly),s=this.degree-r.length;if(s>0){const i=new Uint8Array(this.degree);return i.set(r,s),i}return r};var ry=lo,Vl={},At={},uo={};uo.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var Ge={};const zl="[0-9]+",sy="[A-Z $%*+\\-./:]+";let ir="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";ir=ir.replace(/u/g,"\\u");const iy="(?:(?![A-Z0-9 $%*+\\-./:]|"+ir+`)(?:.|[\r
]))+`;Ge.KANJI=new RegExp(ir,"g");Ge.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Ge.BYTE=new RegExp(iy,"g");Ge.NUMERIC=new RegExp(zl,"g");Ge.ALPHANUMERIC=new RegExp(sy,"g");const oy=new RegExp("^"+ir+"$"),ay=new RegExp("^"+zl+"$"),cy=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Ge.testKanji=function(e){return oy.test(e)};Ge.testNumeric=function(e){return ay.test(e)};Ge.testAlphanumeric=function(e){return cy.test(e)};(function(t){const e=uo,n=Ge;t.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(i,o){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?i.ccBits[0]:o<27?i.ccBits[1]:i.ccBits[2]},t.getBestModeForData=function(i){return n.testNumeric(i)?t.NUMERIC:n.testAlphanumeric(i)?t.ALPHANUMERIC:n.testKanji(i)?t.KANJI:t.BYTE},t.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},t.isValid=function(i){return i&&i.bit&&i.ccBits};function r(s){if(typeof s!="string")throw new Error("Param is not a string");switch(s.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+s)}}t.from=function(i,o){if(t.isValid(i))return i;try{return r(i)}catch{return o}}})(At);(function(t){const e=Pe,n=ys,r=ms,s=At,i=uo,o=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,a=e.getBCHDigit(o);function c(h,g,y){for(let T=1;T<=40;T++)if(g<=t.getCapacity(T,y,h))return T}function l(h,g){return s.getCharCountIndicator(h,g)+4}function u(h,g){let y=0;return h.forEach(function(T){y+=l(T.mode,g)+T.getBitsLength()}),y}function d(h,g){for(let y=1;y<=40;y++)if(u(h,y)<=t.getCapacity(y,g,s.MIXED))return y}t.from=function(g,y){return i.isValid(g)?parseInt(g,10):y},t.getCapacity=function(g,y,T){if(!i.isValid(g))throw new Error("Invalid QR Code version");typeof T=="undefined"&&(T=s.BYTE);const R=e.getSymbolTotalCodewords(g),v=n.getTotalCodewordsCount(g,y),S=(R-v)*8;if(T===s.MIXED)return S;const P=S-l(T,g);switch(T){case s.NUMERIC:return Math.floor(P/10*3);case s.ALPHANUMERIC:return Math.floor(P/11*2);case s.KANJI:return Math.floor(P/13);case s.BYTE:default:return Math.floor(P/8)}},t.getBestVersionForData=function(g,y){let T;const R=r.from(y,r.M);if(Array.isArray(g)){if(g.length>1)return d(g,R);if(g.length===0)return 1;T=g[0]}else T=g;return c(T.mode,T.getLength(),R)},t.getEncodedBits=function(g){if(!i.isValid(g)||g<7)throw new Error("Invalid QR Code version");let y=g<<12;for(;e.getBCHDigit(y)-a>=0;)y^=o<<e.getBCHDigit(y)-a;return g<<12|y}})(Vl);var Kl={};const di=Pe,ql=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,ly=1<<14|1<<12|1<<10|1<<4|1<<1,Sa=di.getBCHDigit(ql);Kl.getEncodedBits=function(e,n){const r=e.bit<<3|n;let s=r<<10;for(;di.getBCHDigit(s)-Sa>=0;)s^=ql<<di.getBCHDigit(s)-Sa;return(r<<10|s)^ly};var Wl={};const uy=At;function fn(t){this.mode=uy.NUMERIC,this.data=t.toString()}fn.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};fn.prototype.getLength=function(){return this.data.length};fn.prototype.getBitsLength=function(){return fn.getBitsLength(this.data.length)};fn.prototype.write=function(e){let n,r,s;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),s=parseInt(r,10),e.put(s,10);const i=this.data.length-n;i>0&&(r=this.data.substr(n),s=parseInt(r,10),e.put(s,i*3+1))};var fy=fn;const hy=At,xs=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function hn(t){this.mode=hy.ALPHANUMERIC,this.data=t}hn.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};hn.prototype.getLength=function(){return this.data.length};hn.prototype.getBitsLength=function(){return hn.getBitsLength(this.data.length)};hn.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=xs.indexOf(this.data[n])*45;r+=xs.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(xs.indexOf(this.data[n]),6)};var dy=hn,py=function(e){for(var n=[],r=e.length,s=0;s<r;s++){var i=e.charCodeAt(s);if(i>=55296&&i<=56319&&r>s+1){var o=e.charCodeAt(s+1);o>=56320&&o<=57343&&(i=(i-55296)*1024+o-56320+65536,s+=1)}if(i<128){n.push(i);continue}if(i<2048){n.push(i>>6|192),n.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){n.push(i>>12|224),n.push(i>>6&63|128),n.push(i&63|128);continue}if(i>=65536&&i<=1114111){n.push(i>>18|240),n.push(i>>12&63|128),n.push(i>>6&63|128),n.push(i&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const gy=py,my=At;function dn(t){this.mode=my.BYTE,this.data=new Uint8Array(gy(t))}dn.getBitsLength=function(e){return e*8};dn.prototype.getLength=function(){return this.data.length};dn.prototype.getBitsLength=function(){return dn.getBitsLength(this.data.length)};dn.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var yy=dn;const _y=At,vy=Pe;function pn(t){this.mode=_y.KANJI,this.data=t}pn.getBitsLength=function(e){return e*13};pn.prototype.getLength=function(){return this.data.length};pn.prototype.getBitsLength=function(){return pn.getBitsLength(this.data.length)};pn.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=vy.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var by=pn,Jl={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,s){var i={},o={};o[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var c,l,u,d,h,g,y,T,R;!a.empty();){c=a.pop(),l=c.value,d=c.cost,h=n[l]||{};for(u in h)h.hasOwnProperty(u)&&(g=h[u],y=d+g,T=o[u],R=typeof o[u]=="undefined",(R||T>y)&&(o[u]=y,a.push(u,y),i[u]=l))}if(typeof s!="undefined"&&typeof o[s]=="undefined"){var v=["Could not find a path from ",r," to ",s,"."].join("");throw new Error(v)}return i},extract_shortest_path_from_predecessor_list:function(n,r){for(var s=[],i=r;i;)s.push(i),i=n[i];return s.reverse(),s},find_path:function(n,r,s){var i=e.single_source_shortest_paths(n,r,s);return e.extract_shortest_path_from_predecessor_list(i,s)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,s={},i;n=n||{};for(i in r)r.hasOwnProperty(i)&&(s[i]=r[i]);return s.queue=[],s.sorter=n.sorter||r.default_sorter,s},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var s={value:n,cost:r};this.queue.push(s),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Jl);(function(t){const e=At,n=fy,r=dy,s=yy,i=by,o=Ge,a=Pe,c=Jl.exports;function l(v){return unescape(encodeURIComponent(v)).length}function u(v,S,P){const I=[];let $;for(;($=v.exec(P))!==null;)I.push({data:$[0],index:$.index,mode:S,length:$[0].length});return I}function d(v){const S=u(o.NUMERIC,e.NUMERIC,v),P=u(o.ALPHANUMERIC,e.ALPHANUMERIC,v);let I,$;return a.isKanjiModeEnabled()?(I=u(o.BYTE,e.BYTE,v),$=u(o.KANJI,e.KANJI,v)):(I=u(o.BYTE_KANJI,e.BYTE,v),$=[]),S.concat(P,I,$).sort(function(x,Q){return x.index-Q.index}).map(function(x){return{data:x.data,mode:x.mode,length:x.length}})}function h(v,S){switch(S){case e.NUMERIC:return n.getBitsLength(v);case e.ALPHANUMERIC:return r.getBitsLength(v);case e.KANJI:return i.getBitsLength(v);case e.BYTE:return s.getBitsLength(v)}}function g(v){return v.reduce(function(S,P){const I=S.length-1>=0?S[S.length-1]:null;return I&&I.mode===P.mode?(S[S.length-1].data+=P.data,S):(S.push(P),S)},[])}function y(v){const S=[];for(let P=0;P<v.length;P++){const I=v[P];switch(I.mode){case e.NUMERIC:S.push([I,{data:I.data,mode:e.ALPHANUMERIC,length:I.length},{data:I.data,mode:e.BYTE,length:I.length}]);break;case e.ALPHANUMERIC:S.push([I,{data:I.data,mode:e.BYTE,length:I.length}]);break;case e.KANJI:S.push([I,{data:I.data,mode:e.BYTE,length:l(I.data)}]);break;case e.BYTE:S.push([{data:I.data,mode:e.BYTE,length:l(I.data)}])}}return S}function T(v,S){const P={},I={start:{}};let $=["start"];for(let M=0;M<v.length;M++){const x=v[M],Q=[];for(let X=0;X<x.length;X++){const Z=x[X],ge=""+M+X;Q.push(ge),P[ge]={node:Z,lastCount:0},I[ge]={};for(let ve=0;ve<$.length;ve++){const ue=$[ve];P[ue]&&P[ue].node.mode===Z.mode?(I[ue][ge]=h(P[ue].lastCount+Z.length,Z.mode)-h(P[ue].lastCount,Z.mode),P[ue].lastCount+=Z.length):(P[ue]&&(P[ue].lastCount=Z.length),I[ue][ge]=h(Z.length,Z.mode)+4+e.getCharCountIndicator(Z.mode,S))}}$=Q}for(let M=0;M<$.length;M++)I[$[M]].end=0;return{map:I,table:P}}function R(v,S){let P;const I=e.getBestModeForData(v);if(P=e.from(S,I),P!==e.BYTE&&P.bit<I.bit)throw new Error('"'+v+'" cannot be encoded with mode '+e.toString(P)+`.
 Suggested mode is: `+e.toString(I));switch(P===e.KANJI&&!a.isKanjiModeEnabled()&&(P=e.BYTE),P){case e.NUMERIC:return new n(v);case e.ALPHANUMERIC:return new r(v);case e.KANJI:return new i(v);case e.BYTE:return new s(v)}}t.fromArray=function(S){return S.reduce(function(P,I){return typeof I=="string"?P.push(R(I,null)):I.data&&P.push(R(I.data,I.mode)),P},[])},t.fromString=function(S,P){const I=d(S,a.isKanjiModeEnabled()),$=y(I),M=T($,P),x=c.find_path(M.map,"start","end"),Q=[];for(let X=1;X<x.length-1;X++)Q.push(M.table[x[X]].node);return t.fromArray(g(Q))},t.rawSplit=function(S){return t.fromArray(d(S,a.isKanjiModeEnabled()))}})(Wl);const vs=Pe,Bs=ms,wy=ey,Ey=ty,Iy=Ul,Ty=Fl,pi=$l,gi=ys,Cy=ry,Jr=Vl,Ay=Kl,Ry=At,Us=Wl;function Sy(t,e){const n=t.size,r=Ty.getPositions(e);for(let s=0;s<r.length;s++){const i=r[s][0],o=r[s][1];for(let a=-1;a<=7;a++)if(!(i+a<=-1||n<=i+a))for(let c=-1;c<=7;c++)o+c<=-1||n<=o+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?t.set(i+a,o+c,!0,!0):t.set(i+a,o+c,!1,!0))}}function Py(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function ky(t,e){const n=Iy.getPositions(e);for(let r=0;r<n.length;r++){const s=n[r][0],i=n[r][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?t.set(s+o,i+a,!0,!0):t.set(s+o,i+a,!1,!0)}}function Oy(t,e){const n=t.size,r=Jr.getEncodedBits(e);let s,i,o;for(let a=0;a<18;a++)s=Math.floor(a/3),i=a%3+n-8-3,o=(r>>a&1)===1,t.set(s,i,o,!0),t.set(i,s,o,!0)}function Fs(t,e,n){const r=t.size,s=Ay.getEncodedBits(e,n);let i,o;for(i=0;i<15;i++)o=(s>>i&1)===1,i<6?t.set(i,8,o,!0):i<8?t.set(i+1,8,o,!0):t.set(r-15+i,8,o,!0),i<8?t.set(8,r-i-1,o,!0):i<9?t.set(8,15-i-1+1,o,!0):t.set(8,15-i-1,o,!0);t.set(r-8,8,1,!0)}function Ny(t,e){const n=t.size;let r=-1,s=n-1,i=7,o=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!t.isReserved(s,a-c)){let l=!1;o<e.length&&(l=(e[o]>>>i&1)===1),t.set(s,a-c,l),i--,i===-1&&(o++,i=7)}if(s+=r,s<0||n<=s){s-=r,r=-r;break}}}function My(t,e,n){const r=new wy;n.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),Ry.getCharCountIndicator(c.mode,t)),c.write(r)});const s=vs.getSymbolTotalCodewords(t),i=gi.getTotalCodewordsCount(t,e),o=(s-i)*8;for(r.getLengthInBits()+4<=o&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(o-r.getLengthInBits())/8;for(let c=0;c<a;c++)r.put(c%2?17:236,8);return Dy(r,t,e)}function Dy(t,e,n){const r=vs.getSymbolTotalCodewords(e),s=gi.getTotalCodewordsCount(e,n),i=r-s,o=gi.getBlocksCount(e,n),a=r%o,c=o-a,l=Math.floor(r/o),u=Math.floor(i/o),d=u+1,h=l-u,g=new Cy(h);let y=0;const T=new Array(o),R=new Array(o);let v=0;const S=new Uint8Array(t.buffer);for(let x=0;x<o;x++){const Q=x<c?u:d;T[x]=S.slice(y,y+Q),R[x]=g.encode(T[x]),y+=Q,v=Math.max(v,Q)}const P=new Uint8Array(r);let I=0,$,M;for($=0;$<v;$++)for(M=0;M<o;M++)$<T[M].length&&(P[I++]=T[M][$]);for($=0;$<h;$++)for(M=0;M<o;M++)P[I++]=R[M][$];return P}function Ly(t,e,n,r){let s;if(Array.isArray(t))s=Us.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const u=Us.rawSplit(t);l=Jr.getBestVersionForData(u,n)}s=Us.fromString(t,l||40)}else throw new Error("Invalid data");const i=Jr.getBestVersionForData(s,n);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=i;else if(e<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const o=My(e,n,s),a=vs.getSymbolSize(e),c=new Ey(a);return Sy(c,e),Py(c),ky(c,e),Fs(c,n,0),e>=7&&Oy(c,e),Ny(c,o),isNaN(r)&&(r=pi.getBestMask(c,Fs.bind(null,c,n))),pi.applyMask(r,c),Fs(c,n,r),{modules:c,version:e,errorCorrectionLevel:n,maskPattern:r,segments:s}}xl.create=function(e,n){if(typeof e=="undefined"||e==="")throw new Error("No input text");let r=Bs.M,s,i;return typeof n!="undefined"&&(r=Bs.from(n.errorCorrectionLevel,Bs.M),s=Jr.from(n.version),i=pi.from(n.maskPattern),n.toSJISFunc&&vs.setToSJISFunction(n.toSJISFunc)),Ly(e,s,r,i)};var Gl={},fo={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");const s=parseInt(r.join(""),16);return{r:s>>24&255,g:s>>16&255,b:s>>8&255,a:s&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const s=typeof r.margin=="undefined"||r.margin===null||r.margin<0?4:r.margin,i=r.width&&r.width>=21?r.width:void 0,o=r.scale||4;return{width:i,scale:i?4:o,margin:s,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,s){return s.width&&s.width>=r+s.margin*2?s.width/(r+s.margin*2):s.scale},t.getImageWidth=function(r,s){const i=t.getScale(r,s);return Math.floor((r+s.margin*2)*i)},t.qrToImageData=function(r,s,i){const o=s.modules.size,a=s.modules.data,c=t.getScale(o,i),l=Math.floor((o+i.margin*2)*c),u=i.margin*c,d=[i.color.light,i.color.dark];for(let h=0;h<l;h++)for(let g=0;g<l;g++){let y=(h*l+g)*4,T=i.color.light;if(h>=u&&g>=u&&h<l-u&&g<l-u){const R=Math.floor((h-u)/c),v=Math.floor((g-u)/c);T=d[a[R*o+v]?1:0]}r[y++]=T.r,r[y++]=T.g,r[y++]=T.b,r[y]=T.a}}})(fo);(function(t){const e=fo;function n(s,i,o){s.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=o,i.width=o,i.style.height=o+"px",i.style.width=o+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(i,o,a){let c=a,l=o;typeof c=="undefined"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(l=r()),c=e.getOptions(c);const u=e.getImageWidth(i.modules.size,c),d=l.getContext("2d"),h=d.createImageData(u,u);return e.qrToImageData(h.data,i,c),n(d,l,u),d.putImageData(h,0,0),l},t.renderToDataURL=function(i,o,a){let c=a;typeof c=="undefined"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const l=t.render(i,o,c),u=c.type||"image/png",d=c.rendererOpts||{};return l.toDataURL(u,d.quality)}})(Gl);var Yl={};const xy=fo;function Pa(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function $s(t,e,n){let r=t+e;return typeof n!="undefined"&&(r+=" "+n),r}function By(t,e,n){let r="",s=0,i=!1,o=0;for(let a=0;a<t.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!i&&(i=!0),t[a]?(o++,a>0&&c>0&&t[a-1]||(r+=i?$s("M",c+n,.5+l+n):$s("m",s,0),s=0,i=!1),c+1<e&&t[a+1]||(r+=$s("h",o),o=0)):s++}return r}Yl.render=function(e,n,r){const s=xy.getOptions(n),i=e.modules.size,o=e.modules.data,a=i+s.margin*2,c=s.color.light.a?"<path "+Pa(s.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+Pa(s.color.dark,"stroke")+' d="'+By(o,i,s.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',d=s.width?'width="'+s.width+'" height="'+s.width+'" ':"",h='<svg xmlns="http://www.w3.org/2000/svg" '+d+u+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof r=="function"&&r(null,h),h};const Uy=Qm,mi=xl,Xl=Gl,Fy=Yl;function ho(t,e,n,r,s){const i=[].slice.call(arguments,1),o=i.length,a=typeof i[o-1]=="function";if(!a&&!Uy())throw new Error("Callback required as last argument");if(a){if(o<2)throw new Error("Too few arguments provided");o===2?(s=n,n=e,e=r=void 0):o===3&&(e.getContext&&typeof s=="undefined"?(s=r,r=void 0):(s=r,r=n,n=e,e=void 0))}else{if(o<1)throw new Error("Too few arguments provided");return o===1?(n=e,e=r=void 0):o===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(c,l){try{const u=mi.create(n,r);c(t(u,e,r))}catch(u){l(u)}})}try{const c=mi.create(n,r);s(null,t(c,e,r))}catch(c){s(c)}}gs.create=mi.create;gs.toCanvas=ho.bind(null,Xl.render);gs.toDataURL=ho.bind(null,Xl.renderToDataURL);gs.toString=ho.bind(null,function(t,e,n){return Fy.render(t,n)});var $y=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Hy=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],yi=function(e){var n=e,r=e.indexOf("["),s=e.indexOf("]");r!=-1&&s!=-1&&(e=e.substring(0,r)+e.substring(r,s).replace(/:/g,";")+e.substring(s,e.length));for(var i=$y.exec(e||""),o={},a=14;a--;)o[Hy[a]]=i[a]||"";return r!=-1&&s!=-1&&(o.source=n,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=jy(o,o.path),o.queryKey=Vy(o,o.query),o};function jy(t,e){var n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.substr(0,1)=="/"||e.length===0)&&r.splice(0,1),e.substr(e.length-1,1)=="/"&&r.splice(r.length-1,1),r}function Vy(t,e){var n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,s,i){s&&(n[s]=i)}),n}function zy(t,e="",n){let r=t;n=n||typeof location!="undefined"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n!="undefined"?t=n.protocol+"//"+t:t="https://"+t),r=yi(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const i=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port+e,r.href=r.protocol+"://"+i+(n&&n.port===r.port?"":":"+r.port),r}var _i={exports:{}};try{_i.exports=typeof XMLHttpRequest!="undefined"&&"withCredentials"in new XMLHttpRequest}catch{_i.exports=!1}var Ky=_i.exports,vt=(()=>typeof self!="undefined"?self:typeof window!="undefined"?window:Function("return this")())();function Ql(t){const e=t.xdomain;try{if(typeof XMLHttpRequest!="undefined"&&(!e||Ky))return new XMLHttpRequest}catch{}if(!e)try{return new vt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function Zl(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const qy=setTimeout,Wy=clearTimeout;function bs(t,e){e.useNativeTimers?(t.setTimeoutFn=qy.bind(vt),t.clearTimeoutFn=Wy.bind(vt)):(t.setTimeoutFn=setTimeout.bind(vt),t.clearTimeoutFn=clearTimeout.bind(vt))}var Cn=we;function we(t){if(t)return Jy(t)}function Jy(t){for(var e in we.prototype)t[e]=we.prototype[e];return t}we.prototype.on=we.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};we.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};we.prototype.off=we.prototype.removeListener=we.prototype.removeAllListeners=we.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,s=0;s<n.length;s++)if(r=n[s],r===e||r.fn===e){n.splice(s,1);break}return n.length===0&&delete this._callbacks["$"+t],this};we.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,s=n.length;r<s;++r)n[r].apply(this,e)}return this};we.prototype.emitReserved=we.prototype.emit;we.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};we.prototype.hasListeners=function(t){return!!this.listeners(t).length};const We=Object.create(null);We.open="0";We.close="1";We.ping="2";We.pong="3";We.message="4";We.upgrade="5";We.noop="6";const Or=Object.create(null);Object.keys(We).forEach(t=>{Or[We[t]]=t});const Gy={type:"error",data:"parser error"},Yy=typeof Blob=="function"||typeof Blob!="undefined"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Xy=typeof ArrayBuffer=="function",Qy=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,eu=({type:t,data:e},n,r)=>Yy&&e instanceof Blob?n?r(e):ka(e,r):Xy&&(e instanceof ArrayBuffer||Qy(e))?n?r(e):ka(new Blob([e]),r):r(We[t]+(e||"")),ka=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+r)},n.readAsDataURL(t)};var Oa="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Bn=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var Ir=0;Ir<Oa.length;Ir++)Bn[Oa.charCodeAt(Ir)]=Ir;var Zy=function(t){var e=t.length*.75,n=t.length,r,s=0,i,o,a,c;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);var l=new ArrayBuffer(e),u=new Uint8Array(l);for(r=0;r<n;r+=4)i=Bn[t.charCodeAt(r)],o=Bn[t.charCodeAt(r+1)],a=Bn[t.charCodeAt(r+2)],c=Bn[t.charCodeAt(r+3)],u[s++]=i<<2|o>>4,u[s++]=(o&15)<<4|a>>2,u[s++]=(a&3)<<6|c&63;return l};const e_=typeof ArrayBuffer=="function",tu=(t,e)=>{if(typeof t!="string")return{type:"message",data:nu(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:t_(t.substring(1),e)}:Or[n]?t.length>1?{type:Or[n],data:t.substring(1)}:{type:Or[n]}:Gy},t_=(t,e)=>{if(e_){const n=Zy(t);return nu(n,e)}else return{base64:!0,data:t}},nu=(t,e)=>{switch(e){case"blob":return t instanceof ArrayBuffer?new Blob([t]):t;case"arraybuffer":default:return t}},ru=String.fromCharCode(30),n_=(t,e)=>{const n=t.length,r=new Array(n);let s=0;t.forEach((i,o)=>{eu(i,!1,a=>{r[o]=a,++s===n&&e(r.join(ru))})})},r_=(t,e)=>{const n=t.split(ru),r=[];for(let s=0;s<n.length;s++){const i=tu(n[s],e);if(r.push(i),i.type==="error")break}return r},su=4;class iu extends Cn{constructor(e){super();this.writable=!1,bs(this,e),this.opts=e,this.query=e.query,this.readyState="",this.socket=e.socket}onError(e,n){const r=new Error(e);return r.type="TransportError",r.description=n,super.emit("error",r),this}open(){return(this.readyState==="closed"||this.readyState==="")&&(this.readyState="opening",this.doOpen()),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emit("open")}onData(e){const n=tu(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emit("packet",e)}onClose(){this.readyState="closed",super.emit("close")}}var ou="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),Gr=64,au={},Na=0,bt=0,Ma;function vi(t){var e="";do e=ou[t%Gr]+e,t=Math.floor(t/Gr);while(t>0);return e}function s_(t){var e=0;for(bt=0;bt<t.length;bt++)e=e*Gr+au[t.charAt(bt)];return e}function po(){var t=vi(+new Date);return t!==Ma?(Na=0,Ma=t):t+"."+vi(Na++)}for(;bt<Gr;bt++)au[ou[bt]]=bt;po.encode=vi;po.decode=s_;var cu=po,gr={};gr.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e};gr.decode=function(t){for(var e={},n=t.split("&"),r=0,s=n.length;r<s;r++){var i=n[r].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e};class i_ extends iu{constructor(){super(...arguments);this.polling=!1}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let r=0;this.polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}poll(){this.polling=!0,this.doPoll(),this.emit("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose(),!1;this.onPacket(r)};r_(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this.polling=!1,this.emit("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,n_(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emit("drain")})})}uri(){let e=this.query||{};const n=this.opts.secure?"https":"http";let r="";this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=cu()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.opts.port&&(n==="https"&&Number(this.opts.port)!==443||n==="http"&&Number(this.opts.port)!==80)&&(r=":"+this.opts.port);const s=gr.encode(e),i=this.opts.hostname.indexOf(":")!==-1;return n+"://"+(i?"["+this.opts.hostname+"]":this.opts.hostname)+r+this.opts.path+(s.length?"?"+s:"")}}function o_(){}const a_=function(){return new Ql({xdomain:!1}).responseType!=null}();class c_ extends i_{constructor(e){super(e);if(typeof location!="undefined"){const r=location.protocol==="https:";let s=location.port;s||(s=r?"443":"80"),this.xd=typeof location!="undefined"&&e.hostname!==location.hostname||s!==e.port,this.xs=e.secure!==r}const n=e&&e.forceBase64;this.supportsBinary=a_&&!n}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new qe(this.uri(),e)}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",s=>{this.onError("xhr post error",s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",n=>{this.onError("xhr poll error",n)}),this.pollXhr=e}}class qe extends Cn{constructor(e,n){super();bs(this,n),this.opts=n,this.method=n.method||"GET",this.uri=e,this.async=n.async!==!1,this.data=n.data!==void 0?n.data:null,this.create()}create(){const e=Zl(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;const n=this.xhr=new Ql(e);try{n.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let r in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(r)&&n.setRequestHeader(r,this.opts.extraHeaders[r])}}catch{}if(this.method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in n&&(n.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(n.timeout=this.opts.requestTimeout),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200||n.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof n.status=="number"?n.status:0)},0))},n.send(this.data)}catch(r){this.setTimeoutFn(()=>{this.onError(r)},0);return}typeof document!="undefined"&&(this.index=qe.requestsCount++,qe.requests[this.index]=this)}onSuccess(){this.emit("success"),this.cleanup()}onData(e){this.emit("data",e),this.onSuccess()}onError(e){this.emit("error",e),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr=="undefined"||this.xhr===null)){if(this.xhr.onreadystatechange=o_,e)try{this.xhr.abort()}catch{}typeof document!="undefined"&&delete qe.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&this.onData(e)}abort(){this.cleanup()}}qe.requestsCount=0;qe.requests={};if(typeof document!="undefined"){if(typeof attachEvent=="function")attachEvent("onunload",Da);else if(typeof addEventListener=="function"){const t="onpagehide"in vt?"pagehide":"unload";addEventListener(t,Da,!1)}}function Da(){for(let t in qe.requests)qe.requests.hasOwnProperty(t)&&qe.requests[t].abort()}const l_=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),On=vt.WebSocket||vt.MozWebSocket,La=!0,u_="arraybuffer",xa=typeof navigator!="undefined"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class go extends iu{constructor(e){super(e);this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),n=this.opts.protocols,r=xa?{}:Zl(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=La&&!xa?n?new On(e,n):new On(e):new On(e,n,r)}catch(s){return this.emit("error",s)}this.ws.binaryType=this.socket.binaryType||u_,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=this.onClose.bind(this),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],s=n===e.length-1;eu(r,this.supportsBinary,i=>{const o={};try{La&&this.ws.send(i)}catch{}s&&l_(()=>{this.writable=!0,this.emit("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws!="undefined"&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const n=this.opts.secure?"wss":"ws";let r="";this.opts.port&&(n==="wss"&&Number(this.opts.port)!==443||n==="ws"&&Number(this.opts.port)!==80)&&(r=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=cu()),this.supportsBinary||(e.b64=1);const s=gr.encode(e),i=this.opts.hostname.indexOf(":")!==-1;return n+"://"+(i?"["+this.opts.hostname+"]":this.opts.hostname)+r+this.opts.path+(s.length?"?"+s:"")}check(){return!!On&&!("__initialize"in On&&this.name===go.prototype.name)}}const f_={websocket:go,polling:c_};class tt extends Cn{constructor(e,n={}){super();e&&typeof e=="object"&&(n=e,e=null),e?(e=yi(e),n.hostname=e.host,n.secure=e.protocol==="https"||e.protocol==="wss",n.port=e.port,e.query&&(n.query=e.query)):n.host&&(n.hostname=yi(n.host).host),bs(this,n),this.secure=n.secure!=null?n.secure:typeof location!="undefined"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location!="undefined"?location.hostname:"localhost"),this.port=n.port||(typeof location!="undefined"&&location.port?location.port:this.secure?"443":"80"),this.transports=n.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},n),this.opts.path=this.opts.path.replace(/\/$/,"")+"/",typeof this.opts.query=="string"&&(this.opts.query=gr.decode(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&addEventListener("beforeunload",()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},!1),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close")},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const n=h_(this.opts.query);n.EIO=su,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts.transportOptions[e],this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new f_[e](r)}open(){let e;if(this.opts.rememberUpgrade&&tt.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",()=>{this.onClose("transport close")})}probe(e){let n=this.createTransport(e),r=!1;tt.priorWebsocketSuccess=!1;const s=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",d=>{if(!r)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;tt.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(u(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=n.name,this.emitReserved("upgradeError",h)}}))};function i(){r||(r=!0,u(),n.close(),n=null)}const o=d=>{const h=new Error("probe error: "+d);h.transport=n.name,i(),this.emitReserved("upgradeError",h)};function a(){o("transport closed")}function c(){o("socket closed")}function l(d){n&&d.name!==n.name&&i()}const u=()=>{n.removeListener("open",s),n.removeListener("error",o),n.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};n.once("open",s),n.once("error",o),n.once("close",a),this.once("close",c),this.once("upgrading",l),n.open()}onOpen(){if(this.readyState="open",tt.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade&&this.transport.pause){let e=0;const n=this.upgrades.length;for(;e<n;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const n=new Error("server error");n.code=e.data,this.onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emitReserved("flush"))}write(e,n,r){return this.sendPacket("message",e,n,r),this}send(e,n,r){return this.sendPacket("message",e,n,r),this}sendPacket(e,n,r,s){if(typeof n=="function"&&(s=n,n=void 0),typeof r=="function"&&(s=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const i={type:e,data:n,options:r};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}onError(e){tt.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,n){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&removeEventListener("offline",this.offlineEventListener,!1),this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const n=[];let r=0;const s=e.length;for(;r<s;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}tt.protocol=su;function h_(t){const e={};for(let n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}tt.protocol;const d_=typeof ArrayBuffer=="function",p_=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,lu=Object.prototype.toString,g_=typeof Blob=="function"||typeof Blob!="undefined"&&lu.call(Blob)==="[object BlobConstructor]",m_=typeof File=="function"||typeof File!="undefined"&&lu.call(File)==="[object FileConstructor]";function mo(t){return d_&&(t instanceof ArrayBuffer||p_(t))||g_&&t instanceof Blob||m_&&t instanceof File}function Nr(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(Nr(t[n]))return!0;return!1}if(mo(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return Nr(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&Nr(t[n]))return!0;return!1}function y_(t){const e=[],n=t.data,r=t;return r.data=bi(n,e),r.attachments=e.length,{packet:r,buffers:e}}function bi(t,e){if(!t)return t;if(mo(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=bi(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=bi(t[r],e));return n}return t}function __(t,e){return t.data=wi(t.data,e),t.attachments=void 0,t}function wi(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=wi(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=wi(t[n],e));return t}const v_=5;var W;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(W||(W={}));class b_{encode(e){return(e.type===W.EVENT||e.type===W.ACK)&&Nr(e)?(e.type=e.type===W.EVENT?W.BINARY_EVENT:W.BINARY_ACK,this.encodeAsBinary(e)):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===W.BINARY_EVENT||e.type===W.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data)),n}encodeAsBinary(e){const n=y_(e),r=this.encodeAsString(n.packet),s=n.buffers;return s.unshift(r),s}}class yo extends Cn{constructor(){super()}add(e){let n;if(typeof e=="string")n=this.decodeString(e),n.type===W.BINARY_EVENT||n.type===W.BINARY_ACK?(this.reconstructor=new E_(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n);else if(mo(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(W[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===W.BINARY_EVENT||r.type===W.BINARY_ACK){const i=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(i,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");r.attachments=Number(o)}if(e.charAt(n+1)==="/"){const i=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(i,n)}else r.nsp="/";const s=e.charAt(n+1);if(s!==""&&Number(s)==s){const i=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(i,n+1))}if(e.charAt(++n)){const i=w_(e.substr(n));if(yo.isPayloadValid(r.type,i))r.data=i;else throw new Error("invalid payload")}return r}static isPayloadValid(e,n){switch(e){case W.CONNECT:return typeof n=="object";case W.DISCONNECT:return n===void 0;case W.CONNECT_ERROR:return typeof n=="string"||typeof n=="object";case W.EVENT:case W.BINARY_EVENT:return Array.isArray(n)&&n.length>0;case W.ACK:case W.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}function w_(t){try{return JSON.parse(t)}catch{return!1}}class E_{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=__(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}var I_=Object.freeze(Object.defineProperty({__proto__:null,protocol:v_,get PacketType(){return W},Encoder:b_,Decoder:yo},Symbol.toStringTag,{value:"Module"}));function Ne(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const T_=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class uu extends Cn{constructor(e,n,r){super();this.connected=!1,this.disconnected=!0,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this.io._autoConnect&&this.open()}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Ne(e,"open",this.onopen.bind(this)),Ne(e,"packet",this.onpacket.bind(this)),Ne(e,"error",this.onerror.bind(this)),Ne(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){if(T_.hasOwnProperty(e))throw new Error('"'+e+'" is a reserved event name');n.unshift(e);const r={type:W.EVENT,data:n};if(r.options={},r.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const o=this.ids++,a=n.pop();this._registerAckCallback(o,a),r.id=o}const s=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!s||!this.connected)||(this.connected?this.packet(r):this.sendBuffer.push(r)),this.flags={},this}_registerAckCallback(e,n){const r=this.flags.timeout;if(r===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let i=0;i<this.sendBuffer.length;i++)this.sendBuffer[i].id===e&&this.sendBuffer.splice(i,1);n.call(this,new Error("operation has timed out"))},r);this.acks[e]=(...i)=>{this.io.clearTimeoutFn(s),n.apply(this,[null,...i])}}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this.packet({type:W.CONNECT,data:e})}):this.packet({type:W.CONNECT,data:this.auth})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e){this.connected=!1,this.disconnected=!0,delete this.id,this.emitReserved("disconnect",e)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case W.CONNECT:if(e.data&&e.data.sid){const s=e.data.sid;this.onconnect(s)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case W.EVENT:this.onevent(e);break;case W.BINARY_EVENT:this.onevent(e);break;case W.ACK:this.onack(e);break;case W.BINARY_ACK:this.onack(e);break;case W.DISCONNECT:this.ondisconnect();break;case W.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e)}ack(e){const n=this;let r=!1;return function(...s){r||(r=!0,n.packet({type:W.ACK,id:e,data:s}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(n.apply(this,e.data),delete this.acks[e.id])}onconnect(e){this.id=e,this.connected=!0,this.disconnected=!1,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>this.packet(e)),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:W.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}}var C_=An;function An(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}An.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};An.prototype.reset=function(){this.attempts=0};An.prototype.setMin=function(t){this.ms=t};An.prototype.setMax=function(t){this.max=t};An.prototype.setJitter=function(t){this.jitter=t};class Ei extends Cn{constructor(e,n){var r;super();this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,bs(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new C_({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const s=n.parser||I_;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new tt(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const s=Ne(n,"open",function(){r.onopen(),e&&e()}),i=Ne(n,"error",o=>{r.cleanup(),r._readyState="closed",this.emitReserved("error",o),e?e(o):r.maybeReconnectOnOpen()});if(this._timeout!==!1){const o=this._timeout;o===0&&s();const a=this.setTimeoutFn(()=>{s(),n.close(),n.emit("error",new Error("timeout"))},o);this.opts.autoUnref&&a.unref(),this.subs.push(function(){clearTimeout(a)})}return this.subs.push(s),this.subs.push(i),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Ne(e,"ping",this.onping.bind(this)),Ne(e,"data",this.ondata.bind(this)),Ne(e,"error",this.onerror.bind(this)),Ne(e,"close",this.onclose.bind(this)),Ne(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){this.decoder.add(e)}ondecoded(e){this.emitReserved("packet",e)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r||(r=new uu(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(function(){clearTimeout(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Nn={};function Hs(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=zy(t,e.path||"/socket.io"),r=n.source,s=n.id,i=n.path,o=Nn[s]&&i in Nn[s].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let c;return a?c=new Ei(r,e):(Nn[s]||(Nn[s]=new Ei(r,e)),c=Nn[s]),n.query&&!e.query&&(e.query=n.queryKey),c.socket(n.path,e)}Object.assign(Hs,{Manager:Ei,Socket:uu,io:Hs,connect:Hs});function A_(t,e){return e.reduce((n,r)=>n==null?void 0:n[r],t)}function R_(t,e,n){return e.slice(0,-1).reduce((r,s)=>/^(__proto__)$/.test(s)?{}:r[s]=r[s]||{},t)[e[e.length-1]]=n,t}function S_(t,e){return e.reduce((n,r)=>{const s=r.split(".");return R_(n,s,A_(t,s))},{})}function P_(t={}){return function(e){var n,r,s,i;const{options:{persist:o},store:a}=e;if(!o)return;const{storage:c=(n=t.storage)!=null?n:localStorage,beforeRestore:l=(r=t.beforeRestore)!=null?r:null,afterRestore:u=(s=t.afterRestore)!=null?s:null,serializer:d=(i=t.serializer)!=null?i:{serialize:JSON.stringify,deserialize:JSON.parse},key:h=a.$id,paths:g=null}=typeof o!="boolean"?o:{};l==null||l(e);try{const y=c.getItem(h);y&&a.$patch(d.deserialize(y))}catch{}u==null||u(e),a.$subscribe((y,T)=>{try{const R=Array.isArray(g)?S_(T,g):T;c.setItem(h,d.serialize(R))}catch{}},{detached:!0})}}var Q_=P_();export{Hs as A,Re as B,J_ as C,W_ as D,j_ as E,F_ as F,$_ as G,Q_ as H,Y_ as I,X_ as J,k_ as K,U_ as L,Ym as R,H_ as a,G_ as b,Yf as c,_c as d,Me as e,If as f,Af as g,D_ as h,Nc as i,M_ as j,fe as k,L_ as l,B_ as m,Zf as n,Jf as o,O_ as p,N_ as q,Bi as r,q_ as s,z_ as t,Un as u,x_ as v,Hn as w,V_ as x,K_ as y,gs as z};
