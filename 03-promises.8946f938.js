function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var i=r("eWCmQ");const u={},l=document.querySelector(".form");function f(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;timeoutId=setTimeout((()=>{r?n(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}l.addEventListener("input",(function(e){u[e.target.name]=Number(e.target.value)})),l.addEventListener("submit",(function(t){t.preventDefault(),function({amount:t,delay:n,step:o}){let r=n;for(let n=1;n<=t;n+=1)f(n,r).then((t=>e(i).Notify.success(t))).catch((t=>e(i).Notify.failure(t))),r+=o}(u)}));
//# sourceMappingURL=03-promises.8946f938.js.map