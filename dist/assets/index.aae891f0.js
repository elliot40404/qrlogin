import{d as E,o as p,c as D,u as m,R as H,a as M,b as Q,r as k,e as A,w as W,f as j,g as z,h as _,i as c,j as S,v as q,k as v,l as I,m as K,n as w,p as V,q as x,s as y,t as F,x as G,y as Z,z as X,A as J,B as Y,C as ee,D as te,E as oe,F as se,G as re,H as ae}from"./vendor.53359e62.js";const ne=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(t){if(t.ep)return;t.ep=!0;const l=a(t);fetch(t.href,l)}};ne();const ie=E({setup(r){return(n,a)=>(p(),D(m(H)))}}),le="modulepreload",P={},ue="/",O=function(n,a){return!a||a.length===0?n():Promise.all(a.map(e=>{if(e=`${ue}${e}`,e in P)return;P[e]=!0;const t=e.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const s=document.createElement("link");if(s.rel=t?"stylesheet":le,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t)return new Promise((d,f)=>{s.addEventListener("load",d),s.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())},ce=M({id:"user",state:()=>({user:"",pass:"",name:""}),getters:{},actions:{},persist:!0});var T=(r,n)=>{const a=r.__vccOpts||r;for(const[e,t]of n)a[e]=t;return a};const C=r=>(V("data-v-60e9bb80"),r=r(),x(),r),de={key:0,class:"loader"},pe=C(()=>c("h3",null,"Logging you in",-1)),me=C(()=>c("div",{class:"lds-ripple"},[c("div"),c("div")],-1)),_e=[pe,me],fe={key:1,class:"login"},he={for:"user"},ve=w(" Username "),ge={key:0,for:"name"},ye=w(" Name "),be={for:"pass"},ke=w(" Password "),we=C(()=>c("h5",null,"OR",-1)),Ae={key:0,class:"qr"},Se=["src"],qe={key:0,class:"error"},Ie=w(" QR Timed out "),Ee=E({setup(r){let n=ce();const a=Q();let e=k(!0),t=k(!1),l=k(!1),s=A({get:()=>n.user,set:i=>n.user=i}),d=A({get:()=>n.pass,set:i=>n.pass=i}),f=A({get:()=>n.name,set:i=>n.name=i});const b=k(""),L=()=>{if(s.value&&d.value){const i=y();F(i,s.value,d.value).then(o=>{a.push("/home")}).catch(o=>{console.error(o.code,o.message)})}},N=()=>{if(s.value&&d.value&&f.value){const i=y();G(i,s.value,d.value).then(()=>{Z(i.currentUser,{displayName:f.value}).then(()=>{a.push("/home")}).catch(o=>{console.error(o.code,o.message)})}).catch(o=>{console.error(o.code,o.message)})}};let h;const $=i=>{const o={}.VITE_SOCKET||"/";h=J(`${o}`),h.on("connect",()=>{h.emit("join",{room:i})}),h.on("login",u=>{l.value=!0,s.value=u.user,d.value=u.password,L()})},R=async()=>{try{const i=await fetch(`${{}.VITE_API}/qr`);if(!i.ok)return;const o=await i.json(),u=await X.toDataURL(o.id);return t.value=!1,b.value=u,$(o.id),!0}catch(i){return console.error(i),!1}};W(t,()=>{t.value&&(h.disconnect(),h=null)});const B=setInterval(()=>{!b.value||(b.value="",t.value=!0)},30*1e3);return j(async()=>{await R()}),z(()=>{clearInterval(B)}),(i,o)=>m(l)?(p(),_("div",de,_e)):(p(),_("div",fe,[c("form",{onSubmit:o[5]||(o[5]=K(()=>{},["prevent"]))},[c("label",he,[ve,S(c("input",{type:"email",id:"user","onUpdate:modelValue":o[0]||(o[0]=u=>v(s)?s.value=u:s=u),placeholder:"user@abc.com",autocomplete:"off",required:"",minlength:"5"},null,512),[[q,m(s)]])]),m(e)?I("",!0):(p(),_("label",ge,[ye,S(c("input",{type:"text",id:"name","onUpdate:modelValue":o[1]||(o[1]=u=>v(f)?f.value=u:f=u),placeholder:"Sam Sepiol",autocomplete:"off",minlength:"5"},null,512),[[q,m(f)]])])),c("label",be,[ke,S(c("input",{type:"password",autocomplete:"off",required:"",id:"pass","onUpdate:modelValue":o[2]||(o[2]=u=>v(d)?d.value=u:d=u),placeholder:"Password1234",minlength:"5"},null,512),[[q,m(d)]])]),m(e)?(p(),_("button",{key:1,onClick:L,type:"submit"},"Login")):(p(),_("button",{key:2,onClick:N,type:"submit"},"Signup")),we,m(e)?(p(),_("h4",{key:4,onClick:o[4]||(o[4]=u=>v(e)?e.value=!1:e=!1),type:"submit"}," Don't have an Account? Signup ")):(p(),_("h4",{key:3,onClick:o[3]||(o[3]=u=>v(e)?e.value=!0:e=!0),type:"submit"}," Have an Account? Login "))],32),m(e)?(p(),_("div",Ae,[c("img",{src:b.value,class:"box"},null,8,Se),m(t)?(p(),_("h6",qe,[Ie,c("span",{onClick:R},"Refresh")])):I("",!0)])):I("",!0)]))}});var Ce=T(Ee,[["__scopeId","data-v-60e9bb80"]]);const Le=r=>(V("data-v-0dae3a1d"),r=r(),x(),r),Re=Le(()=>c("h1",null,"QR LOGIN",-1)),Pe=E({setup(r){return(n,a)=>(p(),_("main",null,[Re,Y(Ce)]))}});var Oe=T(Pe,[["__scopeId","data-v-0dae3a1d"]]);const U=ee({history:te("/"),routes:[{path:"/",name:"home",component:Oe,meta:{requiresAuth:!1,title:"Login"},beforeEnter:(r,n,a)=>{y().currentUser?a({name:"dashboard"}):a()}},{path:"/home",name:"dashboard",component:()=>O(()=>import("./DashboardView.8f743ef1.js"),["assets/DashboardView.8f743ef1.js","assets/DashboardView.4ef793c6.css","assets/vendor.53359e62.js"]),meta:{requiresAuth:!0,title:"Home"}},{path:"/:pathMatch(.*)*",name:"ERROR",component:()=>O(()=>import("./404.cf0c81a2.js"),["assets/404.cf0c81a2.js","assets/404.1d8ccc6a.css","assets/vendor.53359e62.js"]),meta:{title:"404"}}]});U.beforeEach((r,n,a)=>{document.title="QR Login | "+r.meta.title,r.matched.some(e=>e.meta.requiresAuth)?y().onAuthStateChanged(e=>{e?a():a({path:"/",query:{redirect:r.fullPath}})}):a()});const Ve={apiKey:"AIzaSyAXZOatCQRzgu8_aZ2Ti64PgTTWQ9_AMuM",authDomain:"vueqrlogin.firebaseapp.com",projectId:"vueqrlogin",storageBucket:"vueqrlogin.appspot.com",messagingSenderId:"995291357183",appId:"1:995291357183:web:56a68ea8cf63d3829251ca"};oe(Ve);let g;y().onAuthStateChanged(()=>{g||(g=se(ie),g.use(re().use(ae)),g.use(U),g.mount("#app"))});export{T as _,ce as u};
