import{S as Y,i as q,s as C,k as p,r as $,a as A,l as _,m as h,u as y,h as d,c as E,p as f,b as D,D as u,n as x,o as I,E as M,z as L,A as B,B as O,F as W,G as X,H as k,g as H,d as N,C as F}from"../chunks/index.fc94f657.js";const G=!0,U=Object.freeze(Object.defineProperty({__proto__:null,prerender:G},Symbol.toStringTag,{value:"Module"}));function P(c){let t,o,l,i,a,e,s,r,v,n,b;return{c(){t=p("div"),o=p("div"),l=p("h1"),i=$("Sam"),a=A(),e=p("div"),s=p("a"),r=$("Home"),v=A(),n=p("a"),b=$("Contact"),this.h()},l(w){t=_(w,"DIV",{class:!0,id:!0});var m=h(t);o=_(m,"DIV",{class:!0});var j=h(o);l=_(j,"H1",{class:!0});var z=h(l);i=y(z,"Sam"),z.forEach(d),j.forEach(d),a=E(m),e=_(m,"DIV",{class:!0});var g=h(e);s=_(g,"A",{class:!0,href:!0});var S=h(s);r=y(S,"Home"),S.forEach(d),v=E(g),n=_(g,"A",{class:!0,href:!0});var V=h(n);b=y(V,"Contact"),V.forEach(d),g.forEach(d),m.forEach(d),this.h()},h(){f(l,"class","svelte-7vejzo"),f(o,"class","svelte-7vejzo"),f(s,"class","hover svelte-7vejzo"),f(s,"href","/"),f(n,"class","hover svelte-7vejzo"),f(n,"href","https://github.com/sam-the-programmer/"),f(e,"class","flex gap-8 svelte-7vejzo"),f(t,"class","flex justify-between p-5 fixed w-full z-50 duration-150 glass svelte-7vejzo"),f(t,"id","nav--")},m(w,m){D(w,t,m),u(t,o),u(o,l),u(l,i),u(t,a),u(t,e),u(e,s),u(s,r),u(e,v),u(e,n),u(n,b)},p:x,i:x,o:x,d(w){w&&d(t)}}}class R extends Y{constructor(t){super(),q(this,t,null,P,C,{})}}function T(){I(()=>{let c=!1;c=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let t=window.innerWidth>830;if(console.log(t,window.innerWidth),!c&&t){let o=document.querySelectorAll("[data-para-x]"),l=document.querySelectorAll("[data-para-y]"),i=document.querySelectorAll("[data-para-both]");window.addEventListener("scroll",a=>{o.forEach(e=>{let s=e.getAttribute("data-para-x"),r=e.getAttribute("data-para-offset");r=r||0,r=Number(r)*window.innerHeight,e.style.transform=`translateX(${(window.scrollY-r)*s}px)`}),l.forEach(e=>{let s=e.getAttribute("data-para-y"),r=e.getAttribute("data-para-offset");r=r||0,r=Number(r)*window.innerHeight,e.style.transform=`translateY(${(window.scrollY-r)*s}px)`}),i.forEach(e=>{let s=e.getAttribute("data-para-both").split(","),r=Number(s[0]),v=Number(s[1]),n=e.getAttribute("data-para-offset");n=n||0,n=Number(n)*window.innerHeight,e.style.transform=`translate(${(window.scrollY-n)*r}px, ${(window.scrollY-n)*v}px)`})})}})}function J(c){let t,o,l;t=new R({});const i=c[1].default,a=M(i,c,c[0],null);return{c(){L(t.$$.fragment),o=A(),a&&a.c()},l(e){B(t.$$.fragment,e),o=E(e),a&&a.l(e)},m(e,s){O(t,e,s),D(e,o,s),a&&a.m(e,s),l=!0},p(e,[s]){a&&a.p&&(!l||s&1)&&W(a,i,e,e[0],l?k(i,e[0],s,null):X(e[0]),null)},i(e){l||(H(t.$$.fragment,e),H(a,e),l=!0)},o(e){N(t.$$.fragment,e),N(a,e),l=!1},d(e){F(t,e),e&&d(o),a&&a.d(e)}}}function K(c,t,o){let{$$slots:l={},$$scope:i}=t;return T(),c.$$set=a=>{"$$scope"in a&&o(0,i=a.$$scope)},[i,l]}class Z extends Y{constructor(t){super(),q(this,t,K,J,C,{})}}export{Z as component,U as universal};