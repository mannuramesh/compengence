import{s as F,n as U,o as J,d as M}from"../chunks/scheduler.CL6iDiRY.js";import{S as K,i as Q,e as v,s as L,m as R,c as y,g as f,h as H,d as x,n as C,k as p,j as d,o as j,p as V,b as I,f as B,l as T,q as S,r as W}from"../chunks/index.BcetXPmv.js";import{f as X,p as Y,u as Z,c as D,e as w}from"../chunks/store.P_NXBuoE.js";import{p as $}from"../chunks/stores.Bj-Qy7cJ.js";import{g as ee}from"../chunks/entry.CDpf0YUo.js";function G(c,e,n){const t=c.slice();return t[5]=e[n],t}function te(c){let e,n="Go to Home Page to Load",t,l;return{c(){e=v("button"),e.textContent=n,this.h()},l(a){e=y(a,"BUTTON",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-1bnbvru"&&(e.textContent=n),this.h()},h(){C(e,"class","mb-8 px-4 py-2 bg-black text-white rounded")},m(a,s){d(a,e,s),t||(l=V(e,"click",c[3]),t=!0)},p:U,d(a){a&&f(e),t=!1,l()}}}function le(c){let e,n=c[0].title+"",t,l,a,s=c[0].body+"",i,r,u,h,N="Comments",E,k,_=c[1]&&O(c);function g(o,m){return D?ne:se}let P=g()(c);return{c(){e=v("h1"),t=I(n),l=L(),a=v("p"),i=I(s),r=L(),_&&_.c(),u=L(),h=v("h2"),h.textContent=N,E=L(),k=v("ul"),P.c(),this.h()},l(o){e=y(o,"H1",{class:!0});var m=x(e);t=B(m,n),m.forEach(f),l=H(o),a=y(o,"P",{});var q=x(a);i=B(q,s),q.forEach(f),r=H(o),_&&_.l(o),u=H(o),h=y(o,"H2",{class:!0,"data-svelte-h":!0}),j(h)!=="svelte-1ruavuu"&&(h.textContent=N),E=H(o),k=y(o,"UL",{});var A=x(k);P.l(A),A.forEach(f),this.h()},h(){C(e,"class","text-2xl font-bold mb-4"),C(h,"class","text-xl font-semibold mt-6")},m(o,m){d(o,e,m),p(e,t),d(o,l,m),d(o,a,m),p(a,i),d(o,r,m),_&&_.m(o,m),d(o,u,m),d(o,h,m),d(o,E,m),d(o,k,m),P.m(k,null)},p(o,m){m&1&&n!==(n=o[0].title+"")&&T(t,n),m&1&&s!==(s=o[0].body+"")&&T(i,s),o[1]?_?_.p(o,m):(_=O(o),_.c(),_.m(u.parentNode,u)):_&&(_.d(1),_=null),P.p(o,m)},d(o){o&&(f(e),f(l),f(a),f(r),f(u),f(h),f(E),f(k)),_&&_.d(o),P.d()}}}function O(c){let e,n,t=c[1].name+"",l;return{c(){e=v("p"),n=I("By: "),l=I(t),this.h()},l(a){e=y(a,"P",{class:!0});var s=x(e);n=B(s,"By: "),l=B(s,t),s.forEach(f),this.h()},h(){C(e,"class","text-sm text-gray-600 mt-4")},m(a,s){d(a,e,s),p(e,n),p(e,l)},p(a,s){s&2&&t!==(t=a[1].name+"")&&T(l,t)},d(a){a&&f(e)}}}function se(c){let e,n='<h3 class="font-semibold">No Comments</h3> <p class="text-sm text-gray-600">By: No User</p>';return{c(){e=v("li"),e.innerHTML=n,this.h()},l(t){e=y(t,"LI",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-1x6a636"&&(e.innerHTML=n),this.h()},h(){C(e,"class","mb-4 p-4 border-b")},m(t,l){d(t,e,l)},p:U,d(t){t&&f(e)}}}function ne(c){let e,n=w(c[2]),t=[];for(let l=0;l<n.length;l+=1)t[l]=z(G(c,n,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=S()},l(l){for(let a=0;a<t.length;a+=1)t[a].l(l);e=S()},m(l,a){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(l,a);d(l,e,a)},p(l,a){if(a&4){n=w(l[2]);let s;for(s=0;s<n.length;s+=1){const i=G(l,n,s);t[s]?t[s].p(i,a):(t[s]=z(i),t[s].c(),t[s].m(e.parentNode,e))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},d(l){l&&f(e),W(t,l)}}}function z(c){let e,n,t=c[5].name+"",l,a,s,i=c[5].body+"",r,u,h,N,E=c[5].email+"",k,_;return{c(){e=v("li"),n=v("h3"),l=I(t),a=L(),s=v("p"),r=I(i),u=L(),h=v("p"),N=I("By: "),k=I(E),_=L(),this.h()},l(g){e=y(g,"LI",{class:!0});var b=x(e);n=y(b,"H3",{class:!0});var P=x(n);l=B(P,t),P.forEach(f),a=H(b),s=y(b,"P",{});var o=x(s);r=B(o,i),o.forEach(f),u=H(b),h=y(b,"P",{class:!0});var m=x(h);N=B(m,"By: "),k=B(m,E),m.forEach(f),_=H(b),b.forEach(f),this.h()},h(){C(n,"class","font-semibold"),C(h,"class","text-sm text-gray-600"),C(e,"class","mb-4 p-4 border-b")},m(g,b){d(g,e,b),p(e,n),p(n,l),p(e,a),p(e,s),p(s,r),p(e,u),p(e,h),p(h,N),p(h,k),p(e,_)},p(g,b){b&4&&t!==(t=g[5].name+"")&&T(l,t),b&4&&i!==(i=g[5].body+"")&&T(r,i),b&4&&E!==(E=g[5].email+"")&&T(k,E)},d(g){g&&f(e)}}}function ae(c){let e,n,t,l;document.title=e=c[0]?c[0].title:"Loading...";function a(r,u){return r[0]?le:te}let s=a(c),i=s(c);return{c(){n=v("meta"),t=L(),l=v("main"),i.c(),this.h()},l(r){const u=R("svelte-1x3b8rt",document.head);n=y(u,"META",{name:!0,content:!0}),u.forEach(f),t=H(r),l=y(r,"MAIN",{class:!0});var h=x(l);i.l(h),h.forEach(f),this.h()},h(){C(n,"name","description"),C(n,"content","Post details page"),C(l,"class","flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4")},m(r,u){p(document.head,n),d(r,t,u),d(r,l,u),i.m(l,null)},p(r,[u]){u&1&&e!==(e=r[0]?r[0].title:"Loading...")&&(document.title=e),s===(s=a(r))&&i?i.p(r,u):(i.d(1),i=s(r),i&&(i.c(),i.m(l,null)))},i:U,o:U,d(r){r&&(f(t),f(l)),f(n),i.d()}}}function oe(c,e,n){let t,l=null,a=null,s=[];J(async()=>{const r=M(Y);if(n(0,l=r.find(u=>u.id===parseInt(t))||null),l!==null){const u=M(Z);n(1,a=u.find(h=>h.id===(l==null?void 0:l.userId))??null)}X(parseInt(t))});const i=()=>{ee("/")};return t=M($).params.id,n(2,s=M(D)),[l,a,s,i]}class me extends K{constructor(e){super(),Q(this,e,oe,ae,F,{})}}export{me as component};
