import{s as J,n as T,o as K,d as U}from"../chunks/scheduler.CL6iDiRY.js";import{S as Q,i as R,e as x,s as $,m as V,c as w,g as d,h as L,d as k,o as j,n as m,k as c,j as D,p as W,r as X,b as P,f as H,l as N}from"../chunks/index.BcetXPmv.js";import{e as z,a as q,b as O,p as A,u as B}from"../chunks/store.P_NXBuoE.js";function F(h,l,n){const t=h.slice();return t[4]=l[n],t}function G(h){let l,n,t,o=h[4].title+"",y,E,r,_=h[4].body+"",v,p,g,C,u=h[2](h[4].userId)+"",a,s,f;return{c(){l=x("li"),n=x("a"),t=x("h2"),y=P(o),E=$(),r=x("p"),v=P(_),p=$(),g=x("p"),C=P("By: "),a=P(u),f=$(),this.h()},l(e){l=w(e,"LI",{class:!0});var i=k(l);n=w(i,"A",{href:!0});var b=k(n);t=w(b,"H2",{class:!0});var M=k(t);y=H(M,o),M.forEach(d),E=L(b),r=w(b,"P",{class:!0});var S=k(r);v=H(S,_),S.forEach(d),p=L(b),g=w(b,"P",{class:!0});var I=k(g);C=H(I,"By: "),a=H(I,u),I.forEach(d),b.forEach(d),f=L(i),i.forEach(d),this.h()},h(){m(t,"class","text-xl font-semibold"),m(r,"class","mt-2"),m(g,"class","mt-4 text-gray-600"),m(n,"href",s=`/post/${h[4].id}`),m(l,"class","mb-6 p-4 bg-white rounded shadow")},m(e,i){D(e,l,i),c(l,n),c(n,t),c(t,y),c(n,E),c(n,r),c(r,v),c(n,p),c(n,g),c(g,C),c(g,a),c(l,f)},p(e,i){i&1&&o!==(o=e[4].title+"")&&N(y,o),i&1&&_!==(_=e[4].body+"")&&N(v,_),i&1&&u!==(u=e[2](e[4].userId)+"")&&N(a,u),i&1&&s!==(s=`/post/${e[4].id}`)&&m(n,"href",s)},d(e){e&&d(l)}}}function Y(h){let l,n,t,o,y="Home Page",E,r,_="Load Data",v,p,g,C,u=z(h[0]),a=[];for(let s=0;s<u.length;s+=1)a[s]=G(F(h,u,s));return{c(){l=x("meta"),n=$(),t=x("main"),o=x("h1"),o.textContent=y,E=$(),r=x("button"),r.textContent=_,v=$(),p=x("ul");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){const f=V("svelte-1bol6d9",document.head);l=w(f,"META",{name:!0,content:!0}),f.forEach(d),n=L(s),t=w(s,"MAIN",{class:!0});var e=k(t);o=w(e,"H1",{class:!0,"data-svelte-h":!0}),j(o)!=="svelte-x1i9t"&&(o.textContent=y),E=L(e),r=w(e,"BUTTON",{class:!0,"data-svelte-h":!0}),j(r)!=="svelte-1dzdnwz"&&(r.textContent=_),v=L(e),p=w(e,"UL",{class:!0});var i=k(p);for(let b=0;b<a.length;b+=1)a[b].l(i);i.forEach(d),e.forEach(d),this.h()},h(){document.title="Home",m(l,"name","description"),m(l,"content","Svelte demo app"),m(o,"class","text-3xl font-bold mb-8"),m(r,"class","mb-8 px-4 py-2 bg-black text-white rounded"),m(p,"class","w-full max-w-xl"),m(t,"class","flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4")},m(s,f){c(document.head,l),D(s,n,f),D(s,t,f),c(t,o),c(t,E),c(t,r),c(t,v),c(t,p);for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(p,null);g||(C=W(r,"click",h[1]),g=!0)},p(s,[f]){if(f&5){u=z(s[0]);let e;for(e=0;e<u.length;e+=1){const i=F(s,u,e);a[e]?a[e].p(i,f):(a[e]=G(i),a[e].c(),a[e].m(p,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=u.length}},i:T,o:T,d(s){s&&(d(n),d(t)),d(l),X(a,s),g=!1,C()}}}function Z(h,l,n){let t,o;return K(async()=>{await q(),await O(),console.log(U(A)),console.log(U(B))}),t=U(A),o=U(B),[t,async()=>{await q(),await O(),n(0,t=U(A)),o=U(B)},r=>{const _=o.find(v=>v.id===r);return _?_.name:"Unknown"}]}class ae extends Q{constructor(l){super(),R(this,l,Z,Y,J,{})}}export{ae as component};
