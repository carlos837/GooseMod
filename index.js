(function(){"use strict";var sleep=e=>new Promise((o=>setTimeout(o,e)));const init=async()=>{for(;!window.webpackJsonp?.push&&!window.webpackChunkdiscord_app?.push;)await sleep(10);let wpRequire;window.webpackJsonp?(wpRequire=window.webpackJsonp.push([[],{get_require:(e,o,t)=>e.exports=t},[["get_require"]]]),delete wpRequire.m.get_require,delete wpRequire.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([["gm_webpackInject"],{},e=>{wpRequire=e}]);const locale=Object.keys(wpRequire.c).map((e=>wpRequire.c[e].exports)).find((e=>e?.default?.getLocaleInfo)).default.getLocale();console.log("[GooseMod Bootstrap]","Found locale",locale),eval(await(await fetch(`https://raw.githubusercontent.com/GooseMod/GooseMod/dist-dev/goosemod.${locale}.js?_1653323094417`,{cache:"force-cache"})).text())};init()})();
