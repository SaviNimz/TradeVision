var Jk=Object.defineProperty;var Zk=(t,e,n)=>e in t?Jk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var j=(t,e,n)=>Zk(t,typeof e!="symbol"?e+"":e,n);function eE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $u(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rx={exports:{}},Uu={},Mx={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),tE=Symbol.for("react.portal"),nE=Symbol.for("react.fragment"),rE=Symbol.for("react.strict_mode"),iE=Symbol.for("react.profiler"),sE=Symbol.for("react.provider"),oE=Symbol.for("react.context"),aE=Symbol.for("react.forward_ref"),lE=Symbol.for("react.suspense"),cE=Symbol.for("react.memo"),uE=Symbol.for("react.lazy"),Wm=Symbol.iterator;function dE(t){return t===null||typeof t!="object"?null:(t=Wm&&t[Wm]||t["@@iterator"],typeof t=="function"?t:null)}var Lx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dx=Object.assign,Nx={};function eo(t,e,n){this.props=t,this.context=e,this.refs=Nx,this.updater=n||Lx}eo.prototype.isReactComponent={};eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fx(){}Fx.prototype=eo.prototype;function Xp(t,e,n){this.props=t,this.context=e,this.refs=Nx,this.updater=n||Lx}var Qp=Xp.prototype=new Fx;Qp.constructor=Xp;Dx(Qp,eo.prototype);Qp.isPureReactComponent=!0;var Ym=Array.isArray,jx=Object.prototype.hasOwnProperty,Jp={current:null},zx={key:!0,ref:!0,__self:!0,__source:!0};function Bx(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jx.call(e,r)&&!zx.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xa,type:t,key:s,ref:o,props:i,_owner:Jp.current}}function fE(t,e){return{$$typeof:Xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xa}function hE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gm=/\/+/g;function Nd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hE(""+t.key):e.toString(36)}function ac(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xa:case tE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Nd(o,0):r,Ym(i)?(n="",t!=null&&(n=t.replace(Gm,"$&/")+"/"),ac(i,e,n,"",function(c){return c})):i!=null&&(Zp(i)&&(i=fE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ym(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Nd(s,a);o+=ac(s,e,n,l,i)}else if(l=dE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Nd(s,a++),o+=ac(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function vl(t,e,n){if(t==null)return t;var r=[],i=0;return ac(t,r,"","",function(s){return e.call(n,s,i++)}),r}function pE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gt={current:null},lc={transition:null},gE={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:lc,ReactCurrentOwner:Jp};function $x(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:vl,forEach:function(t,e,n){vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return vl(t,function(){e++}),e},toArray:function(t){return vl(t,function(e){return e})||[]},only:function(t){if(!Zp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=eo;ie.Fragment=nE;ie.Profiler=iE;ie.PureComponent=Xp;ie.StrictMode=rE;ie.Suspense=lE;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gE;ie.act=$x;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Dx({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jx.call(e,l)&&!zx.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Xa,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:oE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sE,_context:t},t.Consumer=t};ie.createElement=Bx;ie.createFactory=function(t){var e=Bx.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:aE,render:t}};ie.isValidElement=Zp;ie.lazy=function(t){return{$$typeof:uE,_payload:{_status:-1,_result:t},_init:pE}};ie.memo=function(t,e){return{$$typeof:cE,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=lc.transition;lc.transition={};try{t()}finally{lc.transition=e}};ie.unstable_act=$x;ie.useCallback=function(t,e){return gt.current.useCallback(t,e)};ie.useContext=function(t){return gt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return gt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return gt.current.useEffect(t,e)};ie.useId=function(){return gt.current.useId()};ie.useImperativeHandle=function(t,e,n){return gt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return gt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return gt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return gt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return gt.current.useReducer(t,e,n)};ie.useRef=function(t){return gt.current.useRef(t)};ie.useState=function(t){return gt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return gt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return gt.current.useTransition()};ie.version="18.3.1";Mx.exports=ie;var P=Mx.exports;const q=$u(P),mE=eE({__proto__:null,default:q},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yE=P,vE=Symbol.for("react.element"),xE=Symbol.for("react.fragment"),bE=Object.prototype.hasOwnProperty,_E=yE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wE={key:!0,ref:!0,__self:!0,__source:!0};function Ux(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bE.call(e,r)&&!wE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:vE,type:t,key:s,ref:o,props:i,_owner:_E.current}}Uu.Fragment=xE;Uu.jsx=Ux;Uu.jsxs=Ux;Rx.exports=Uu;var _=Rx.exports,Kf={},Hx={exports:{}},Bt={},Vx={exports:{}},Wx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,R){var B=M.length;M.push(R);e:for(;0<B;){var G=B-1>>>1,D=M[G];if(0<i(D,R))M[G]=R,M[B]=D,B=G;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var R=M[0],B=M.pop();if(B!==R){M[0]=B;e:for(var G=0,D=M.length,K=D>>>1;G<K;){var X=2*(G+1)-1,Q=M[X],Z=X+1,ae=M[Z];if(0>i(Q,B))Z<D&&0>i(ae,Q)?(M[G]=ae,M[Z]=B,G=Z):(M[G]=Q,M[X]=B,G=X);else if(Z<D&&0>i(ae,B))M[G]=ae,M[Z]=B,G=Z;else break e}}return R}function i(M,R){var B=M.sortIndex-R.sortIndex;return B!==0?B:M.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,h=!1,p=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(M){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=M)r(c),R.sortIndex=R.expirationTime,e(l,R);else break;R=n(c)}}function w(M){if(y=!1,x(M),!p)if(n(l)!==null)p=!0,V(k);else{var R=n(c);R!==null&&N(w,R.startTime-M)}}function k(M,R){p=!1,y&&(y=!1,m(b),b=-1),h=!0;var B=f;try{for(x(R),d=n(l);d!==null&&(!(d.expirationTime>R)||M&&!A());){var G=d.callback;if(typeof G=="function"){d.callback=null,f=d.priorityLevel;var D=G(d.expirationTime<=R);R=t.unstable_now(),typeof D=="function"?d.callback=D:d===n(l)&&r(l),x(R)}else r(l);d=n(l)}if(d!==null)var K=!0;else{var X=n(c);X!==null&&N(w,X.startTime-R),K=!1}return K}finally{d=null,f=B,h=!1}}var C=!1,E=null,b=-1,S=5,T=-1;function A(){return!(t.unstable_now()-T<S)}function L(){if(E!==null){var M=t.unstable_now();T=M;var R=!0;try{R=E(!0,M)}finally{R?z():(C=!1,E=null)}}else C=!1}var z;if(typeof g=="function")z=function(){g(L)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,Y=U.port2;U.port1.onmessage=L,z=function(){Y.postMessage(null)}}else z=function(){v(L,0)};function V(M){E=M,C||(C=!0,z())}function N(M,R){b=v(function(){M(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){p||h||(p=!0,V(k))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(M){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var B=f;f=R;try{return M()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,R){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var B=f;f=M;try{return R()}finally{f=B}},t.unstable_scheduleCallback=function(M,R,B){var G=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?G+B:G):B=G,M){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=B+D,M={id:u++,callback:R,priorityLevel:M,startTime:B,expirationTime:D,sortIndex:-1},B>G?(M.sortIndex=B,e(c,M),n(l)===null&&M===n(c)&&(y?(m(b),b=-1):y=!0,N(w,B-G))):(M.sortIndex=D,e(l,M),p||h||(p=!0,V(k))),M},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(M){var R=f;return function(){var B=f;f=R;try{return M.apply(this,arguments)}finally{f=B}}}})(Wx);Vx.exports=Wx;var SE=Vx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE=P,zt=SE;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yx=new Set,da={};function Qi(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(da[t]=e,t=0;t<e.length;t++)Yx.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qf=Object.prototype.hasOwnProperty,EE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Km={},qm={};function CE(t){return qf.call(qm,t)?!0:qf.call(Km,t)?!1:EE.test(t)?qm[t]=!0:(Km[t]=!0,!1)}function TE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function PE(t,e,n,r){if(e===null||typeof e>"u"||TE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var eg=/[\-:]([a-z])/g;function tg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(eg,tg);nt[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(eg,tg);nt[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(eg,tg);nt[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ng(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(PE(e,n,i,r)&&(n=null),r||i===null?CE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ar=kE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xl=Symbol.for("react.element"),ls=Symbol.for("react.portal"),cs=Symbol.for("react.fragment"),rg=Symbol.for("react.strict_mode"),Xf=Symbol.for("react.profiler"),Gx=Symbol.for("react.provider"),Kx=Symbol.for("react.context"),ig=Symbol.for("react.forward_ref"),Qf=Symbol.for("react.suspense"),Jf=Symbol.for("react.suspense_list"),sg=Symbol.for("react.memo"),br=Symbol.for("react.lazy"),qx=Symbol.for("react.offscreen"),Xm=Symbol.iterator;function fo(t){return t===null||typeof t!="object"?null:(t=Xm&&t[Xm]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Fd;function Oo(t){if(Fd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fd=e&&e[1]||""}return`
`+Fd+t}var jd=!1;function zd(t,e){if(!t||jd)return"";jd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{jd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oo(t):""}function IE(t){switch(t.tag){case 5:return Oo(t.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return t=zd(t.type,!1),t;case 11:return t=zd(t.type.render,!1),t;case 1:return t=zd(t.type,!0),t;default:return""}}function Zf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cs:return"Fragment";case ls:return"Portal";case Xf:return"Profiler";case rg:return"StrictMode";case Qf:return"Suspense";case Jf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Kx:return(t.displayName||"Context")+".Consumer";case Gx:return(t._context.displayName||"Context")+".Provider";case ig:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sg:return e=t.displayName||null,e!==null?e:Zf(t.type)||"Memo";case br:e=t._payload,t=t._init;try{return Zf(t(e))}catch{}}return null}function OE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zf(e);case 8:return e===rg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function AE(t){var e=Xx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bl(t){t._valueTracker||(t._valueTracker=AE(t))}function Qx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xx(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $c(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function eh(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jx(t,e){e=e.checked,e!=null&&ng(t,"checked",e,!1)}function th(t,e){Jx(t,e);var n=Kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nh(t,e.type,n):e.hasOwnProperty("defaultValue")&&nh(t,e.type,Kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nh(t,e,n){(e!=="number"||$c(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ao=Array.isArray;function Ss(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function rh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Ao(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kr(n)}}function Zx(t,e){var n=Kr(e.value),r=Kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function e0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function eb(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ih(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?eb(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _l,tb=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_l=_l||document.createElement("div"),_l.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_l.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RE=["Webkit","ms","Moz","O"];Object.keys(Wo).forEach(function(t){RE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wo[e]=Wo[t]})});function nb(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wo.hasOwnProperty(t)&&Wo[t]?(""+e).trim():e+"px"}function rb(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nb(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ME=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sh(t,e){if(e){if(ME[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function oh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ah=null;function og(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lh=null,ks=null,Es=null;function t0(t){if(t=Za(t)){if(typeof lh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Gu(e),lh(t.stateNode,t.type,e))}}function ib(t){ks?Es?Es.push(t):Es=[t]:ks=t}function sb(){if(ks){var t=ks,e=Es;if(Es=ks=null,t0(t),e)for(t=0;t<e.length;t++)t0(e[t])}}function ob(t,e){return t(e)}function ab(){}var Bd=!1;function lb(t,e,n){if(Bd)return t(e,n);Bd=!0;try{return ob(t,e,n)}finally{Bd=!1,(ks!==null||Es!==null)&&(ab(),sb())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var r=Gu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var ch=!1;if(Zn)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){ch=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{ch=!1}function LE(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Yo=!1,Uc=null,Hc=!1,uh=null,DE={onError:function(t){Yo=!0,Uc=t}};function NE(t,e,n,r,i,s,o,a,l){Yo=!1,Uc=null,LE.apply(DE,arguments)}function FE(t,e,n,r,i,s,o,a,l){if(NE.apply(this,arguments),Yo){if(Yo){var c=Uc;Yo=!1,Uc=null}else throw Error(F(198));Hc||(Hc=!0,uh=c)}}function Ji(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cb(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function n0(t){if(Ji(t)!==t)throw Error(F(188))}function jE(t){var e=t.alternate;if(!e){if(e=Ji(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return n0(i),t;if(s===r)return n0(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function ub(t){return t=jE(t),t!==null?db(t):null}function db(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=db(t);if(e!==null)return e;t=t.sibling}return null}var fb=zt.unstable_scheduleCallback,r0=zt.unstable_cancelCallback,zE=zt.unstable_shouldYield,BE=zt.unstable_requestPaint,$e=zt.unstable_now,$E=zt.unstable_getCurrentPriorityLevel,ag=zt.unstable_ImmediatePriority,hb=zt.unstable_UserBlockingPriority,Vc=zt.unstable_NormalPriority,UE=zt.unstable_LowPriority,pb=zt.unstable_IdlePriority,Hu=null,In=null;function HE(t){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(Hu,t,void 0,(t.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:YE,VE=Math.log,WE=Math.LN2;function YE(t){return t>>>=0,t===0?32:31-(VE(t)/WE|0)|0}var wl=64,Sl=4194304;function Ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ro(a):(s&=o,s!==0&&(r=Ro(s)))}else o=n&~i,o!==0?r=Ro(o):s!==0&&(r=Ro(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-un(e),i=1<<n,r|=t[n],e&=~i;return r}function GE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-un(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=GE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function dh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gb(){var t=wl;return wl<<=1,!(wl&4194240)&&(wl=64),t}function $d(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-un(e),t[e]=n}function qE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-un(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function lg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function mb(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yb,cg,vb,xb,bb,fh=!1,kl=[],Nr=null,Fr=null,jr=null,pa=new Map,ga=new Map,wr=[],XE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function i0(t,e){switch(t){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ga.delete(e.pointerId)}}function po(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Za(e),e!==null&&cg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function QE(t,e,n,r,i){switch(e){case"focusin":return Nr=po(Nr,t,e,n,r,i),!0;case"dragenter":return Fr=po(Fr,t,e,n,r,i),!0;case"mouseover":return jr=po(jr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return pa.set(s,po(pa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ga.set(s,po(ga.get(s)||null,t,e,n,r,i)),!0}return!1}function _b(t){var e=wi(t.target);if(e!==null){var n=Ji(e);if(n!==null){if(e=n.tag,e===13){if(e=cb(n),e!==null){t.blockedOn=e,bb(t.priority,function(){vb(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ah=r,n.target.dispatchEvent(r),ah=null}else return e=Za(n),e!==null&&cg(e),t.blockedOn=n,!1;e.shift()}return!0}function s0(t,e,n){cc(t)&&n.delete(e)}function JE(){fh=!1,Nr!==null&&cc(Nr)&&(Nr=null),Fr!==null&&cc(Fr)&&(Fr=null),jr!==null&&cc(jr)&&(jr=null),pa.forEach(s0),ga.forEach(s0)}function go(t,e){t.blockedOn===e&&(t.blockedOn=null,fh||(fh=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,JE)))}function ma(t){function e(i){return go(i,t)}if(0<kl.length){go(kl[0],t);for(var n=1;n<kl.length;n++){var r=kl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Nr!==null&&go(Nr,t),Fr!==null&&go(Fr,t),jr!==null&&go(jr,t),pa.forEach(e),ga.forEach(e),n=0;n<wr.length;n++)r=wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<wr.length&&(n=wr[0],n.blockedOn===null);)_b(n),n.blockedOn===null&&wr.shift()}var Cs=ar.ReactCurrentBatchConfig,Yc=!0;function ZE(t,e,n,r){var i=he,s=Cs.transition;Cs.transition=null;try{he=1,ug(t,e,n,r)}finally{he=i,Cs.transition=s}}function eC(t,e,n,r){var i=he,s=Cs.transition;Cs.transition=null;try{he=4,ug(t,e,n,r)}finally{he=i,Cs.transition=s}}function ug(t,e,n,r){if(Yc){var i=hh(t,e,n,r);if(i===null)Qd(t,e,r,Gc,n),i0(t,r);else if(QE(i,t,e,n,r))r.stopPropagation();else if(i0(t,r),e&4&&-1<XE.indexOf(t)){for(;i!==null;){var s=Za(i);if(s!==null&&yb(s),s=hh(t,e,n,r),s===null&&Qd(t,e,r,Gc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Qd(t,e,r,null,n)}}var Gc=null;function hh(t,e,n,r){if(Gc=null,t=og(r),t=wi(t),t!==null)if(e=Ji(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cb(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gc=t,null}function wb(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($E()){case ag:return 1;case hb:return 4;case Vc:case UE:return 16;case pb:return 536870912;default:return 16}default:return 16}}var Tr=null,dg=null,uc=null;function Sb(){if(uc)return uc;var t,e=dg,n=e.length,r,i="value"in Tr?Tr.value:Tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return uc=i.slice(t,1<r?1-r:void 0)}function dc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function o0(){return!1}function $t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?El:o0,this.isPropagationStopped=o0,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),e}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fg=$t(to),Ja=Ne({},to,{view:0,detail:0}),tC=$t(Ja),Ud,Hd,mo,Vu=Ne({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(Ud=t.screenX-mo.screenX,Hd=t.screenY-mo.screenY):Hd=Ud=0,mo=t),Ud)},movementY:function(t){return"movementY"in t?t.movementY:Hd}}),a0=$t(Vu),nC=Ne({},Vu,{dataTransfer:0}),rC=$t(nC),iC=Ne({},Ja,{relatedTarget:0}),Vd=$t(iC),sC=Ne({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),oC=$t(sC),aC=Ne({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lC=$t(aC),cC=Ne({},to,{data:0}),l0=$t(cC),uC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fC[t])?!!e[t]:!1}function hg(){return hC}var pC=Ne({},Ja,{key:function(t){if(t.key){var e=uC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hg,charCode:function(t){return t.type==="keypress"?dc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gC=$t(pC),mC=Ne({},Vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),c0=$t(mC),yC=Ne({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hg}),vC=$t(yC),xC=Ne({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),bC=$t(xC),_C=Ne({},Vu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wC=$t(_C),SC=[9,13,27,32],pg=Zn&&"CompositionEvent"in window,Go=null;Zn&&"documentMode"in document&&(Go=document.documentMode);var kC=Zn&&"TextEvent"in window&&!Go,kb=Zn&&(!pg||Go&&8<Go&&11>=Go),u0=" ",d0=!1;function Eb(t,e){switch(t){case"keyup":return SC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cb(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function EC(t,e){switch(t){case"compositionend":return Cb(e);case"keypress":return e.which!==32?null:(d0=!0,u0);case"textInput":return t=e.data,t===u0&&d0?null:t;default:return null}}function CC(t,e){if(us)return t==="compositionend"||!pg&&Eb(t,e)?(t=Sb(),uc=dg=Tr=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kb&&e.locale!=="ko"?null:e.data;default:return null}}var TC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function f0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TC[t.type]:e==="textarea"}function Tb(t,e,n,r){ib(r),e=Kc(e,"onChange"),0<e.length&&(n=new fg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ko=null,ya=null;function PC(t){jb(t,0)}function Wu(t){var e=hs(t);if(Qx(e))return t}function IC(t,e){if(t==="change")return e}var Pb=!1;if(Zn){var Wd;if(Zn){var Yd="oninput"in document;if(!Yd){var h0=document.createElement("div");h0.setAttribute("oninput","return;"),Yd=typeof h0.oninput=="function"}Wd=Yd}else Wd=!1;Pb=Wd&&(!document.documentMode||9<document.documentMode)}function p0(){Ko&&(Ko.detachEvent("onpropertychange",Ib),ya=Ko=null)}function Ib(t){if(t.propertyName==="value"&&Wu(ya)){var e=[];Tb(e,ya,t,og(t)),lb(PC,e)}}function OC(t,e,n){t==="focusin"?(p0(),Ko=e,ya=n,Ko.attachEvent("onpropertychange",Ib)):t==="focusout"&&p0()}function AC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wu(ya)}function RC(t,e){if(t==="click")return Wu(e)}function MC(t,e){if(t==="input"||t==="change")return Wu(e)}function LC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:LC;function va(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qf.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function g0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function m0(t,e){var n=g0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=g0(n)}}function Ob(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ob(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ab(){for(var t=window,e=$c();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$c(t.document)}return e}function gg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function DC(t){var e=Ab(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ob(n.ownerDocument.documentElement,n)){if(r!==null&&gg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=m0(n,s);var o=m0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NC=Zn&&"documentMode"in document&&11>=document.documentMode,ds=null,ph=null,qo=null,gh=!1;function y0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gh||ds==null||ds!==$c(r)||(r=ds,"selectionStart"in r&&gg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qo&&va(qo,r)||(qo=r,r=Kc(ph,"onSelect"),0<r.length&&(e=new fg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ds)))}function Cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fs={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},Gd={},Rb={};Zn&&(Rb=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Yu(t){if(Gd[t])return Gd[t];if(!fs[t])return t;var e=fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rb)return Gd[t]=e[n];return t}var Mb=Yu("animationend"),Lb=Yu("animationiteration"),Db=Yu("animationstart"),Nb=Yu("transitionend"),Fb=new Map,v0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(t,e){Fb.set(t,e),Qi(e,[t])}for(var Kd=0;Kd<v0.length;Kd++){var qd=v0[Kd],FC=qd.toLowerCase(),jC=qd[0].toUpperCase()+qd.slice(1);ti(FC,"on"+jC)}ti(Mb,"onAnimationEnd");ti(Lb,"onAnimationIteration");ti(Db,"onAnimationStart");ti("dblclick","onDoubleClick");ti("focusin","onFocus");ti("focusout","onBlur");ti(Nb,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);Qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function x0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,FE(r,e,void 0,t),t.currentTarget=null}function jb(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;x0(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;x0(i,a,c),s=l}}}if(Hc)throw t=uh,Hc=!1,uh=null,t}function Se(t,e){var n=e[bh];n===void 0&&(n=e[bh]=new Set);var r=t+"__bubble";n.has(r)||(zb(e,t,2,!1),n.add(r))}function Xd(t,e,n){var r=0;e&&(r|=4),zb(n,t,r,e)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[Tl]){t[Tl]=!0,Yx.forEach(function(n){n!=="selectionchange"&&(zC.has(n)||Xd(n,!1,t),Xd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tl]||(e[Tl]=!0,Xd("selectionchange",!1,e))}}function zb(t,e,n,r){switch(wb(e)){case 1:var i=ZE;break;case 4:i=eC;break;default:i=ug}n=i.bind(null,e,n,t),i=void 0,!ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=wi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}lb(function(){var c=s,u=og(n),d=[];e:{var f=Fb.get(t);if(f!==void 0){var h=fg,p=t;switch(t){case"keypress":if(dc(n)===0)break e;case"keydown":case"keyup":h=gC;break;case"focusin":p="focus",h=Vd;break;case"focusout":p="blur",h=Vd;break;case"beforeblur":case"afterblur":h=Vd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=a0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=rC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=vC;break;case Mb:case Lb:case Db:h=oC;break;case Nb:h=bC;break;case"scroll":h=tC;break;case"wheel":h=wC;break;case"copy":case"cut":case"paste":h=lC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=c0}var y=(e&4)!==0,v=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var g=c,x;g!==null;){x=g;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,m!==null&&(w=ha(g,m),w!=null&&y.push(ba(g,w,x)))),v)break;g=g.return}0<y.length&&(f=new h(f,p,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&n!==ah&&(p=n.relatedTarget||n.fromElement)&&(wi(p)||p[er]))break e;if((h||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=c,p=p?wi(p):null,p!==null&&(v=Ji(p),p!==v||p.tag!==5&&p.tag!==6)&&(p=null)):(h=null,p=c),h!==p)){if(y=a0,w="onMouseLeave",m="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=c0,w="onPointerLeave",m="onPointerEnter",g="pointer"),v=h==null?f:hs(h),x=p==null?f:hs(p),f=new y(w,g+"leave",h,n,u),f.target=v,f.relatedTarget=x,w=null,wi(u)===c&&(y=new y(m,g+"enter",p,n,u),y.target=x,y.relatedTarget=v,w=y),v=w,h&&p)t:{for(y=h,m=p,g=0,x=y;x;x=is(x))g++;for(x=0,w=m;w;w=is(w))x++;for(;0<g-x;)y=is(y),g--;for(;0<x-g;)m=is(m),x--;for(;g--;){if(y===m||m!==null&&y===m.alternate)break t;y=is(y),m=is(m)}y=null}else y=null;h!==null&&b0(d,f,h,y,!1),p!==null&&v!==null&&b0(d,v,p,y,!0)}}e:{if(f=c?hs(c):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var k=IC;else if(f0(f))if(Pb)k=MC;else{k=AC;var C=OC}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=RC);if(k&&(k=k(t,c))){Tb(d,k,n,u);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&nh(f,"number",f.value)}switch(C=c?hs(c):window,t){case"focusin":(f0(C)||C.contentEditable==="true")&&(ds=C,ph=c,qo=null);break;case"focusout":qo=ph=ds=null;break;case"mousedown":gh=!0;break;case"contextmenu":case"mouseup":case"dragend":gh=!1,y0(d,n,u);break;case"selectionchange":if(NC)break;case"keydown":case"keyup":y0(d,n,u)}var E;if(pg)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else us?Eb(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(kb&&n.locale!=="ko"&&(us||b!=="onCompositionStart"?b==="onCompositionEnd"&&us&&(E=Sb()):(Tr=u,dg="value"in Tr?Tr.value:Tr.textContent,us=!0)),C=Kc(c,b),0<C.length&&(b=new l0(b,t,null,n,u),d.push({event:b,listeners:C}),E?b.data=E:(E=Cb(n),E!==null&&(b.data=E)))),(E=kC?EC(t,n):CC(t,n))&&(c=Kc(c,"onBeforeInput"),0<c.length&&(u=new l0("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=E))}jb(d,e)})}function ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ha(t,n),s!=null&&r.unshift(ba(t,s,i)),s=ha(t,e),s!=null&&r.push(ba(t,s,i))),t=t.return}return r}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function b0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=ha(n,s),l!=null&&o.unshift(ba(n,l,a))):i||(l=ha(n,s),l!=null&&o.push(ba(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var BC=/\r\n?/g,$C=/\u0000|\uFFFD/g;function _0(t){return(typeof t=="string"?t:""+t).replace(BC,`
`).replace($C,"")}function Pl(t,e,n){if(e=_0(e),_0(t)!==e&&n)throw Error(F(425))}function qc(){}var mh=null,yh=null;function vh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xh=typeof setTimeout=="function"?setTimeout:void 0,UC=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,HC=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(t){return w0.resolve(null).then(t).catch(VC)}:xh;function VC(t){setTimeout(function(){throw t})}function Jd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ma(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ma(e)}function zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function S0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),En="__reactFiber$"+no,_a="__reactProps$"+no,er="__reactContainer$"+no,bh="__reactEvents$"+no,WC="__reactListeners$"+no,YC="__reactHandles$"+no;function wi(t){var e=t[En];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[En]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=S0(t);t!==null;){if(n=t[En])return n;t=S0(t)}return e}t=n,n=t.parentNode}return null}function Za(t){return t=t[En]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Gu(t){return t[_a]||null}var _h=[],ps=-1;function ni(t){return{current:t}}function Ee(t){0>ps||(t.current=_h[ps],_h[ps]=null,ps--)}function _e(t,e){ps++,_h[ps]=t.current,t.current=e}var qr={},ct=ni(qr),St=ni(!1),zi=qr;function Ns(t,e){var n=t.type.contextTypes;if(!n)return qr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function Xc(){Ee(St),Ee(ct)}function k0(t,e,n){if(ct.current!==qr)throw Error(F(168));_e(ct,e),_e(St,n)}function Bb(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,OE(t)||"Unknown",i));return Ne({},n,r)}function Qc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qr,zi=ct.current,_e(ct,t),_e(St,St.current),!0}function E0(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Bb(t,e,zi),r.__reactInternalMemoizedMergedChildContext=t,Ee(St),Ee(ct),_e(ct,t)):Ee(St),_e(St,n)}var $n=null,Ku=!1,Zd=!1;function $b(t){$n===null?$n=[t]:$n.push(t)}function GC(t){Ku=!0,$b(t)}function ri(){if(!Zd&&$n!==null){Zd=!0;var t=0,e=he;try{var n=$n;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$n=null,Ku=!1}catch(i){throw $n!==null&&($n=$n.slice(t+1)),fb(ag,ri),i}finally{he=e,Zd=!1}}return null}var gs=[],ms=0,Jc=null,Zc=0,Kt=[],qt=0,Bi=null,Hn=1,Vn="";function mi(t,e){gs[ms++]=Zc,gs[ms++]=Jc,Jc=t,Zc=e}function Ub(t,e,n){Kt[qt++]=Hn,Kt[qt++]=Vn,Kt[qt++]=Bi,Bi=t;var r=Hn;t=Vn;var i=32-un(r)-1;r&=~(1<<i),n+=1;var s=32-un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hn=1<<32-un(e)+i|n<<i|r,Vn=s+t}else Hn=1<<s|n<<i|r,Vn=t}function mg(t){t.return!==null&&(mi(t,1),Ub(t,1,0))}function yg(t){for(;t===Jc;)Jc=gs[--ms],gs[ms]=null,Zc=gs[--ms],gs[ms]=null;for(;t===Bi;)Bi=Kt[--qt],Kt[qt]=null,Vn=Kt[--qt],Kt[qt]=null,Hn=Kt[--qt],Kt[qt]=null}var Dt=null,Mt=null,Ie=!1,an=null;function Hb(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function C0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dt=t,Mt=zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dt=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Bi!==null?{id:Hn,overflow:Vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dt=t,Mt=null,!0):!1;default:return!1}}function wh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sh(t){if(Ie){var e=Mt;if(e){var n=e;if(!C0(t,e)){if(wh(t))throw Error(F(418));e=zr(n.nextSibling);var r=Dt;e&&C0(t,e)?Hb(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Dt=t)}}else{if(wh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ie=!1,Dt=t}}}function T0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function Il(t){if(t!==Dt)return!1;if(!Ie)return T0(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vh(t.type,t.memoizedProps)),e&&(e=Mt)){if(wh(t))throw Vb(),Error(F(418));for(;e;)Hb(t,e),e=zr(e.nextSibling)}if(T0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Dt?zr(t.stateNode.nextSibling):null;return!0}function Vb(){for(var t=Mt;t;)t=zr(t.nextSibling)}function Fs(){Mt=Dt=null,Ie=!1}function vg(t){an===null?an=[t]:an.push(t)}var KC=ar.ReactCurrentBatchConfig;function yo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ol(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function P0(t){var e=t._init;return e(t._payload)}function Wb(t){function e(m,g){if(t){var x=m.deletions;x===null?(m.deletions=[g],m.flags|=16):x.push(g)}}function n(m,g){if(!t)return null;for(;g!==null;)e(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function i(m,g){return m=Hr(m,g),m.index=0,m.sibling=null,m}function s(m,g,x){return m.index=x,t?(x=m.alternate,x!==null?(x=x.index,x<g?(m.flags|=2,g):x):(m.flags|=2,g)):(m.flags|=1048576,g)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,g,x,w){return g===null||g.tag!==6?(g=af(x,m.mode,w),g.return=m,g):(g=i(g,x),g.return=m,g)}function l(m,g,x,w){var k=x.type;return k===cs?u(m,g,x.props.children,w,x.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===br&&P0(k)===g.type)?(w=i(g,x.props),w.ref=yo(m,g,x),w.return=m,w):(w=vc(x.type,x.key,x.props,null,m.mode,w),w.ref=yo(m,g,x),w.return=m,w)}function c(m,g,x,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=lf(x,m.mode,w),g.return=m,g):(g=i(g,x.children||[]),g.return=m,g)}function u(m,g,x,w,k){return g===null||g.tag!==7?(g=Oi(x,m.mode,w,k),g.return=m,g):(g=i(g,x),g.return=m,g)}function d(m,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=af(""+g,m.mode,x),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case xl:return x=vc(g.type,g.key,g.props,null,m.mode,x),x.ref=yo(m,null,g),x.return=m,x;case ls:return g=lf(g,m.mode,x),g.return=m,g;case br:var w=g._init;return d(m,w(g._payload),x)}if(Ao(g)||fo(g))return g=Oi(g,m.mode,x,null),g.return=m,g;Ol(m,g)}return null}function f(m,g,x,w){var k=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return k!==null?null:a(m,g,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case xl:return x.key===k?l(m,g,x,w):null;case ls:return x.key===k?c(m,g,x,w):null;case br:return k=x._init,f(m,g,k(x._payload),w)}if(Ao(x)||fo(x))return k!==null?null:u(m,g,x,w,null);Ol(m,x)}return null}function h(m,g,x,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(x)||null,a(g,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case xl:return m=m.get(w.key===null?x:w.key)||null,l(g,m,w,k);case ls:return m=m.get(w.key===null?x:w.key)||null,c(g,m,w,k);case br:var C=w._init;return h(m,g,x,C(w._payload),k)}if(Ao(w)||fo(w))return m=m.get(x)||null,u(g,m,w,k,null);Ol(g,w)}return null}function p(m,g,x,w){for(var k=null,C=null,E=g,b=g=0,S=null;E!==null&&b<x.length;b++){E.index>b?(S=E,E=null):S=E.sibling;var T=f(m,E,x[b],w);if(T===null){E===null&&(E=S);break}t&&E&&T.alternate===null&&e(m,E),g=s(T,g,b),C===null?k=T:C.sibling=T,C=T,E=S}if(b===x.length)return n(m,E),Ie&&mi(m,b),k;if(E===null){for(;b<x.length;b++)E=d(m,x[b],w),E!==null&&(g=s(E,g,b),C===null?k=E:C.sibling=E,C=E);return Ie&&mi(m,b),k}for(E=r(m,E);b<x.length;b++)S=h(E,m,b,x[b],w),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?b:S.key),g=s(S,g,b),C===null?k=S:C.sibling=S,C=S);return t&&E.forEach(function(A){return e(m,A)}),Ie&&mi(m,b),k}function y(m,g,x,w){var k=fo(x);if(typeof k!="function")throw Error(F(150));if(x=k.call(x),x==null)throw Error(F(151));for(var C=k=null,E=g,b=g=0,S=null,T=x.next();E!==null&&!T.done;b++,T=x.next()){E.index>b?(S=E,E=null):S=E.sibling;var A=f(m,E,T.value,w);if(A===null){E===null&&(E=S);break}t&&E&&A.alternate===null&&e(m,E),g=s(A,g,b),C===null?k=A:C.sibling=A,C=A,E=S}if(T.done)return n(m,E),Ie&&mi(m,b),k;if(E===null){for(;!T.done;b++,T=x.next())T=d(m,T.value,w),T!==null&&(g=s(T,g,b),C===null?k=T:C.sibling=T,C=T);return Ie&&mi(m,b),k}for(E=r(m,E);!T.done;b++,T=x.next())T=h(E,m,b,T.value,w),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?b:T.key),g=s(T,g,b),C===null?k=T:C.sibling=T,C=T);return t&&E.forEach(function(L){return e(m,L)}),Ie&&mi(m,b),k}function v(m,g,x,w){if(typeof x=="object"&&x!==null&&x.type===cs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case xl:e:{for(var k=x.key,C=g;C!==null;){if(C.key===k){if(k=x.type,k===cs){if(C.tag===7){n(m,C.sibling),g=i(C,x.props.children),g.return=m,m=g;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===br&&P0(k)===C.type){n(m,C.sibling),g=i(C,x.props),g.ref=yo(m,C,x),g.return=m,m=g;break e}n(m,C);break}else e(m,C);C=C.sibling}x.type===cs?(g=Oi(x.props.children,m.mode,w,x.key),g.return=m,m=g):(w=vc(x.type,x.key,x.props,null,m.mode,w),w.ref=yo(m,g,x),w.return=m,m=w)}return o(m);case ls:e:{for(C=x.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(m,g.sibling),g=i(g,x.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else e(m,g);g=g.sibling}g=lf(x,m.mode,w),g.return=m,m=g}return o(m);case br:return C=x._init,v(m,g,C(x._payload),w)}if(Ao(x))return p(m,g,x,w);if(fo(x))return y(m,g,x,w);Ol(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(m,g.sibling),g=i(g,x),g.return=m,m=g):(n(m,g),g=af(x,m.mode,w),g.return=m,m=g),o(m)):n(m,g)}return v}var js=Wb(!0),Yb=Wb(!1),eu=ni(null),tu=null,ys=null,xg=null;function bg(){xg=ys=tu=null}function _g(t){var e=eu.current;Ee(eu),t._currentValue=e}function kh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ts(t,e){tu=t,xg=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function Jt(t){var e=t._currentValue;if(xg!==t)if(t={context:t,memoizedValue:e,next:null},ys===null){if(tu===null)throw Error(F(308));ys=t,tu.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return e}var Si=null;function wg(t){Si===null?Si=[t]:Si.push(t)}function Gb(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wg(e)):(n.next=i.next,i.next=n),e.interleaved=n,tr(t,r)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function Sg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kb(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Br(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tr(t,n)}return i=r.interleaved,i===null?(e.next=e,wg(r)):(e.next=i.next,i.next=e),r.interleaved=e,tr(t,n)}function fc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lg(t,n)}}function I0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nu(t,e,n,r){var i=t.updateQueue;_r=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,h=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,y=a;switch(f=e,h=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,f=typeof p=="function"?p.call(h,d,f):p,f==null)break e;d=Ne({},d,f);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=h,l=d):u=u.next=h,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ui|=o,t.lanes=o,t.memoizedState=d}}function O0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var el={},On=ni(el),wa=ni(el),Sa=ni(el);function ki(t){if(t===el)throw Error(F(174));return t}function kg(t,e){switch(_e(Sa,e),_e(wa,t),_e(On,el),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ih(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ih(e,t)}Ee(On),_e(On,e)}function zs(){Ee(On),Ee(wa),Ee(Sa)}function qb(t){ki(Sa.current);var e=ki(On.current),n=ih(e,t.type);e!==n&&(_e(wa,t),_e(On,n))}function Eg(t){wa.current===t&&(Ee(On),Ee(wa))}var Me=ni(0);function ru(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ef=[];function Cg(){for(var t=0;t<ef.length;t++)ef[t]._workInProgressVersionPrimary=null;ef.length=0}var hc=ar.ReactCurrentDispatcher,tf=ar.ReactCurrentBatchConfig,$i=0,Le=null,Ge=null,Xe=null,iu=!1,Xo=!1,ka=0,qC=0;function it(){throw Error(F(321))}function Tg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function Pg(t,e,n,r,i,s){if($i=s,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hc.current=t===null||t.memoizedState===null?ZC:eT,t=n(r,i),Xo){s=0;do{if(Xo=!1,ka=0,25<=s)throw Error(F(301));s+=1,Xe=Ge=null,e.updateQueue=null,hc.current=tT,t=n(r,i)}while(Xo)}if(hc.current=su,e=Ge!==null&&Ge.next!==null,$i=0,Xe=Ge=Le=null,iu=!1,e)throw Error(F(300));return t}function Ig(){var t=ka!==0;return ka=0,t}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Le.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Zt(){if(Ge===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=Xe===null?Le.memoizedState:Xe.next;if(e!==null)Xe=e,Ge=t;else{if(t===null)throw Error(F(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Xe===null?Le.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function Ea(t,e){return typeof e=="function"?e(t):e}function nf(t){var e=Zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if(($i&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Le.lanes|=u,Ui|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,gn(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Le.lanes|=s,Ui|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rf(t){var e=Zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gn(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Xb(){}function Qb(t,e){var n=Le,r=Zt(),i=e(),s=!gn(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,Og(e_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Ca(9,Zb.bind(null,n,r,i,e),void 0,null),Ze===null)throw Error(F(349));$i&30||Jb(n,e,i)}return i}function Jb(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zb(t,e,n,r){e.value=n,e.getSnapshot=r,t_(e)&&n_(t)}function e_(t,e,n){return n(function(){t_(e)&&n_(t)})}function t_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function n_(t){var e=tr(t,1);e!==null&&dn(e,t,1,-1)}function A0(t){var e=_n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e.queue=t,t=t.dispatch=JC.bind(null,Le,t),[e.memoizedState,t]}function Ca(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function r_(){return Zt().memoizedState}function pc(t,e,n,r){var i=_n();Le.flags|=t,i.memoizedState=Ca(1|e,n,void 0,r===void 0?null:r)}function qu(t,e,n,r){var i=Zt();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&Tg(r,o.deps)){i.memoizedState=Ca(e,n,s,r);return}}Le.flags|=t,i.memoizedState=Ca(1|e,n,s,r)}function R0(t,e){return pc(8390656,8,t,e)}function Og(t,e){return qu(2048,8,t,e)}function i_(t,e){return qu(4,2,t,e)}function s_(t,e){return qu(4,4,t,e)}function o_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function a_(t,e,n){return n=n!=null?n.concat([t]):null,qu(4,4,o_.bind(null,e,t),n)}function Ag(){}function l_(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function c_(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function u_(t,e,n){return $i&21?(gn(n,e)||(n=gb(),Le.lanes|=n,Ui|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function XC(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=tf.transition;tf.transition={};try{t(!1),e()}finally{he=n,tf.transition=r}}function d_(){return Zt().memoizedState}function QC(t,e,n){var r=Ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},f_(t))h_(e,n);else if(n=Gb(t,e,n,r),n!==null){var i=ht();dn(n,t,r,i),p_(n,e,r)}}function JC(t,e,n){var r=Ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(f_(t))h_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gn(a,o)){var l=e.interleaved;l===null?(i.next=i,wg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Gb(t,e,i,r),n!==null&&(i=ht(),dn(n,t,r,i),p_(n,e,r))}}function f_(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function h_(t,e){Xo=iu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function p_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lg(t,n)}}var su={readContext:Jt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},ZC={readContext:Jt,useCallback:function(t,e){return _n().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:R0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pc(4194308,4,o_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pc(4194308,4,t,e)},useInsertionEffect:function(t,e){return pc(4,2,t,e)},useMemo:function(t,e){var n=_n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QC.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=_n();return t={current:t},e.memoizedState=t},useState:A0,useDebugValue:Ag,useDeferredValue:function(t){return _n().memoizedState=t},useTransition:function(){var t=A0(!1),e=t[0];return t=XC.bind(null,t[1]),_n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,i=_n();if(Ie){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ze===null)throw Error(F(349));$i&30||Jb(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,R0(e_.bind(null,r,s,t),[t]),r.flags|=2048,Ca(9,Zb.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_n(),e=Ze.identifierPrefix;if(Ie){var n=Vn,r=Hn;n=(r&~(1<<32-un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eT={readContext:Jt,useCallback:l_,useContext:Jt,useEffect:Og,useImperativeHandle:a_,useInsertionEffect:i_,useLayoutEffect:s_,useMemo:c_,useReducer:nf,useRef:r_,useState:function(){return nf(Ea)},useDebugValue:Ag,useDeferredValue:function(t){var e=Zt();return u_(e,Ge.memoizedState,t)},useTransition:function(){var t=nf(Ea)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:Xb,useSyncExternalStore:Qb,useId:d_,unstable_isNewReconciler:!1},tT={readContext:Jt,useCallback:l_,useContext:Jt,useEffect:Og,useImperativeHandle:a_,useInsertionEffect:i_,useLayoutEffect:s_,useMemo:c_,useReducer:rf,useRef:r_,useState:function(){return rf(Ea)},useDebugValue:Ag,useDeferredValue:function(t){var e=Zt();return Ge===null?e.memoizedState=t:u_(e,Ge.memoizedState,t)},useTransition:function(){var t=rf(Ea)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:Xb,useSyncExternalStore:Qb,useId:d_,unstable_isNewReconciler:!1};function sn(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Eh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xu={isMounted:function(t){return(t=t._reactInternals)?Ji(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=Ur(t),s=Qn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Br(t,s,i),e!==null&&(dn(e,t,i,r),fc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=Ur(t),s=Qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Br(t,s,i),e!==null&&(dn(e,t,i,r),fc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=Ur(t),i=Qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Br(t,i,r),e!==null&&(dn(e,t,r,n),fc(e,t,r))}};function M0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!va(n,r)||!va(i,s):!0}function g_(t,e,n){var r=!1,i=qr,s=e.contextType;return typeof s=="object"&&s!==null?s=Jt(s):(i=kt(e)?zi:ct.current,r=e.contextTypes,s=(r=r!=null)?Ns(t,i):qr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function L0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xu.enqueueReplaceState(e,e.state,null)}function Ch(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Sg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Jt(s):(s=kt(e)?zi:ct.current,i.context=Ns(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Eh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xu.enqueueReplaceState(i,i.state,null),nu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",r=e;do n+=IE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function sf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Th(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nT=typeof WeakMap=="function"?WeakMap:Map;function m_(t,e,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){au||(au=!0,Fh=r),Th(t,e)},n}function y_(t,e,n){n=Qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Th(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Th(t,e),typeof r!="function"&&($r===null?$r=new Set([this]):$r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function D0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=mT.bind(null,t,e,n),e.then(t,t))}function N0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function F0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qn(-1,1),e.tag=2,Br(n,e,1))),n.lanes|=1),t)}var rT=ar.ReactCurrentOwner,_t=!1;function dt(t,e,n,r){e.child=t===null?Yb(e,null,n,r):js(e,t.child,n,r)}function j0(t,e,n,r,i){n=n.render;var s=e.ref;return Ts(e,i),r=Pg(t,e,n,r,s,i),n=Ig(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Ie&&n&&mg(e),e.flags|=1,dt(t,e,r,i),e.child)}function z0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,v_(t,e,s,r,i)):(t=vc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(o,r)&&t.ref===e.ref)return nr(t,e,i)}return e.flags|=1,t=Hr(s,r),t.ref=e.ref,t.return=e,e.child=t}function v_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(va(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,nr(t,e,i)}return Ph(t,e,n,r,i)}function x_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(xs,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(xs,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(xs,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(xs,At),At|=r;return dt(t,e,i,n),e.child}function b_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ph(t,e,n,r,i){var s=kt(n)?zi:ct.current;return s=Ns(e,s),Ts(e,i),n=Pg(t,e,n,r,s,i),r=Ig(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Ie&&r&&mg(e),e.flags|=1,dt(t,e,n,i),e.child)}function B0(t,e,n,r,i){if(kt(n)){var s=!0;Qc(e)}else s=!1;if(Ts(e,i),e.stateNode===null)gc(t,e),g_(e,n,r),Ch(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Jt(c):(c=kt(n)?zi:ct.current,c=Ns(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&L0(e,o,r,c),_r=!1;var f=e.memoizedState;o.state=f,nu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||St.current||_r?(typeof u=="function"&&(Eh(e,n,u,r),l=e.memoizedState),(a=_r||M0(e,n,a,r,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Kb(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:sn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Jt(l):(l=kt(n)?zi:ct.current,l=Ns(e,l));var h=n.getDerivedStateFromProps;(u=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&L0(e,o,r,l),_r=!1,f=e.memoizedState,o.state=f,nu(e,r,o,i);var p=e.memoizedState;a!==d||f!==p||St.current||_r?(typeof h=="function"&&(Eh(e,n,h,r),p=e.memoizedState),(c=_r||M0(e,n,c,r,f,p,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Ih(t,e,n,r,s,i)}function Ih(t,e,n,r,i,s){b_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&E0(e,n,!1),nr(t,e,s);r=e.stateNode,rT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=js(e,t.child,null,s),e.child=js(e,null,a,s)):dt(t,e,a,s),e.memoizedState=r.state,i&&E0(e,n,!0),e.child}function __(t){var e=t.stateNode;e.pendingContext?k0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&k0(t,e.context,!1),kg(t,e.containerInfo)}function $0(t,e,n,r,i){return Fs(),vg(i),e.flags|=256,dt(t,e,n,r),e.child}var Oh={dehydrated:null,treeContext:null,retryLane:0};function Ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function w_(t,e,n){var r=e.pendingProps,i=Me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Me,i&1),t===null)return Sh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zu(o,r,0,null),t=Oi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ah(n),e.memoizedState=Oh,t):Rg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return iT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Hr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Hr(a,s):(s=Oi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ah(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Oh,r}return s=t.child,t=s.sibling,r=Hr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rg(t,e){return e=Zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Al(t,e,n,r){return r!==null&&vg(r),js(e,t.child,null,n),t=Rg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=sf(Error(F(422))),Al(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Zu({mode:"visible",children:r.children},i,0,null),s=Oi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&js(e,t.child,null,o),e.child.memoizedState=Ah(o),e.memoizedState=Oh,s);if(!(e.mode&1))return Al(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(F(419)),r=sf(s,r,void 0),Al(t,e,o,r)}if(a=(o&t.childLanes)!==0,_t||a){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tr(t,i),dn(r,t,i,-1))}return jg(),r=sf(Error(F(421))),Al(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=yT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mt=zr(i.nextSibling),Dt=e,Ie=!0,an=null,t!==null&&(Kt[qt++]=Hn,Kt[qt++]=Vn,Kt[qt++]=Bi,Hn=t.id,Vn=t.overflow,Bi=e),e=Rg(e,r.children),e.flags|=4096,e)}function U0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kh(t.return,e,n)}function of(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function S_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=Me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&U0(t,n,e);else if(t.tag===19)U0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ru(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),of(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ru(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}of(e,!0,n,null,s);break;case"together":of(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ui|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sT(t,e,n){switch(e.tag){case 3:__(e),Fs();break;case 5:qb(e);break;case 1:kt(e.type)&&Qc(e);break;case 4:kg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(eu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Me,Me.current&1),e.flags|=128,null):n&e.child.childLanes?w_(t,e,n):(_e(Me,Me.current&1),t=nr(t,e,n),t!==null?t.sibling:null);_e(Me,Me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return S_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Me,Me.current),r)break;return null;case 22:case 23:return e.lanes=0,x_(t,e,n)}return nr(t,e,n)}var k_,Rh,E_,C_;k_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rh=function(){};E_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ki(On.current);var s=null;switch(n){case"input":i=eh(t,i),r=eh(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=rh(t,i),r=rh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qc)}sh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(da.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(da.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};C_=function(t,e,n,r){n!==r&&(e.flags|=4)};function vo(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function oT(t,e,n){var r=e.pendingProps;switch(yg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return kt(e.type)&&Xc(),st(e),null;case 3:return r=e.stateNode,zs(),Ee(St),Ee(ct),Cg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&(Bh(an),an=null))),Rh(t,e),st(e),null;case 5:Eg(e);var i=ki(Sa.current);if(n=e.type,t!==null&&e.stateNode!=null)E_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return st(e),null}if(t=ki(On.current),Il(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[En]=e,r[_a]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<Mo.length;i++)Se(Mo[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":Qm(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":Zm(r,s),Se("invalid",r)}sh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pl(r.textContent,a,t),i=["children",""+a]):da.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":bl(r),Jm(r,s,!0);break;case"textarea":bl(r),e0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=qc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=eb(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[En]=e,t[_a]=r,k_(t,e,!1,!1),e.stateNode=t;e:{switch(o=oh(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<Mo.length;i++)Se(Mo[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":Qm(t,r),i=eh(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Se("invalid",t);break;case"textarea":Zm(t,r),i=rh(t,r),Se("invalid",t);break;default:i=r}sh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?rb(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tb(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fa(t,l):typeof l=="number"&&fa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(da.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Se("scroll",t):l!=null&&ng(t,s,l,o))}switch(n){case"input":bl(t),Jm(t,r,!1);break;case"textarea":bl(t),e0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ss(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ss(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)C_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ki(Sa.current),ki(On.current),Il(e)){if(r=e.stateNode,n=e.memoizedProps,r[En]=e,(s=r.nodeValue!==n)&&(t=Dt,t!==null))switch(t.tag){case 3:Pl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=e,e.stateNode=r}return st(e),null;case 13:if(Ee(Me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Mt!==null&&e.mode&1&&!(e.flags&128))Vb(),Fs(),e.flags|=98560,s=!1;else if(s=Il(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[En]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else an!==null&&(Bh(an),an=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Me.current&1?Ke===0&&(Ke=3):jg())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return zs(),Rh(t,e),t===null&&xa(e.stateNode.containerInfo),st(e),null;case 10:return _g(e.type._context),st(e),null;case 17:return kt(e.type)&&Xc(),st(e),null;case 19:if(Ee(Me),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)vo(s,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ru(t),o!==null){for(e.flags|=128,vo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Me,Me.current&1|2),e.child}t=t.sibling}s.tail!==null&&$e()>$s&&(e.flags|=128,r=!0,vo(s,!1),e.lanes=4194304)}else{if(!r)if(t=ru(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return st(e),null}else 2*$e()-s.renderingStartTime>$s&&n!==1073741824&&(e.flags|=128,r=!0,vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=$e(),e.sibling=null,n=Me.current,_e(Me,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Fg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function aT(t,e){switch(yg(e),e.tag){case 1:return kt(e.type)&&Xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),Ee(St),Ee(ct),Cg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Eg(e),null;case 13:if(Ee(Me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Me),null;case 4:return zs(),null;case 10:return _g(e.type._context),null;case 22:case 23:return Fg(),null;case 24:return null;default:return null}}var Rl=!1,at=!1,lT=typeof WeakSet=="function"?WeakSet:Set,$=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function Mh(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var H0=!1;function cT(t,e){if(mh=Yc,t=Ab(),gg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++u===r&&(l=o),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yh={focusedElem:t,selectionRange:n},Yc=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,v=p.memoizedState,m=e.stateNode,g=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:sn(e.type,y),v);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(w){Fe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return p=H0,H0=!1,p}function Qo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Mh(e,n,s)}i=i.next}while(i!==r)}}function Qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Lh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function T_(t){var e=t.alternate;e!==null&&(t.alternate=null,T_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[En],delete e[_a],delete e[bh],delete e[WC],delete e[YC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function P_(t){return t.tag===5||t.tag===3||t.tag===4}function V0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||P_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qc));else if(r!==4&&(t=t.child,t!==null))for(Dh(t,e,n),t=t.sibling;t!==null;)Dh(t,e,n),t=t.sibling}function Nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nh(t,e,n),t=t.sibling;t!==null;)Nh(t,e,n),t=t.sibling}var et=null,on=!1;function hr(t,e,n){for(n=n.child;n!==null;)I_(t,e,n),n=n.sibling}function I_(t,e,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(Hu,n)}catch{}switch(n.tag){case 5:at||vs(n,e);case 6:var r=et,i=on;et=null,hr(t,e,n),et=r,on=i,et!==null&&(on?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(on?(t=et,n=n.stateNode,t.nodeType===8?Jd(t.parentNode,n):t.nodeType===1&&Jd(t,n),ma(t)):Jd(et,n.stateNode));break;case 4:r=et,i=on,et=n.stateNode.containerInfo,on=!0,hr(t,e,n),et=r,on=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mh(n,e,o),i=i.next}while(i!==r)}hr(t,e,n);break;case 1:if(!at&&(vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Fe(n,e,a)}hr(t,e,n);break;case 21:hr(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,hr(t,e,n),at=r):hr(t,e,n);break;default:hr(t,e,n)}}function W0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lT),e.forEach(function(r){var i=vT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:et=a.stateNode,on=!1;break e;case 3:et=a.stateNode.containerInfo,on=!0;break e;case 4:et=a.stateNode.containerInfo,on=!0;break e}a=a.return}if(et===null)throw Error(F(160));I_(s,o,i),et=null,on=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Fe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)O_(e,t),e=e.sibling}function O_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(e,t),xn(t),r&4){try{Qo(3,t,t.return),Qu(3,t)}catch(y){Fe(t,t.return,y)}try{Qo(5,t,t.return)}catch(y){Fe(t,t.return,y)}}break;case 1:rn(e,t),xn(t),r&512&&n!==null&&vs(n,n.return);break;case 5:if(rn(e,t),xn(t),r&512&&n!==null&&vs(n,n.return),t.flags&32){var i=t.stateNode;try{fa(i,"")}catch(y){Fe(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Jx(i,s),oh(a,o);var c=oh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?rb(i,d):u==="dangerouslySetInnerHTML"?tb(i,d):u==="children"?fa(i,d):ng(i,u,d,c)}switch(a){case"input":th(i,s);break;case"textarea":Zx(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Ss(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ss(i,!!s.multiple,s.defaultValue,!0):Ss(i,!!s.multiple,s.multiple?[]:"",!1))}i[_a]=s}catch(y){Fe(t,t.return,y)}}break;case 6:if(rn(e,t),xn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Fe(t,t.return,y)}}break;case 3:if(rn(e,t),xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ma(e.containerInfo)}catch(y){Fe(t,t.return,y)}break;case 4:rn(e,t),xn(t);break;case 13:rn(e,t),xn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dg=$e())),r&4&&W0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(at=(c=at)||u,rn(e,t),at=c):rn(e,t),xn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for($=t,u=t.child;u!==null;){for(d=$=u;$!==null;){switch(f=$,h=f.child,f.tag){case 0:case 11:case 14:case 15:Qo(4,f,f.return);break;case 1:vs(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(y){Fe(r,n,y)}}break;case 5:vs(f,f.return);break;case 22:if(f.memoizedState!==null){G0(d);continue}}h!==null?(h.return=f,$=h):G0(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=nb("display",o))}catch(y){Fe(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Fe(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:rn(e,t),xn(t),r&4&&W0(t);break;case 21:break;default:rn(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(P_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fa(i,""),r.flags&=-33);var s=V0(t);Nh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=V0(t);Dh(t,a,o);break;default:throw Error(F(161))}}catch(l){Fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uT(t,e,n){$=t,A_(t)}function A_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Rl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||at;a=Rl;var c=at;if(Rl=o,(at=l)&&!c)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?K0(i):l!==null?(l.return=o,$=l):K0(i);for(;s!==null;)$=s,A_(s),s=s.sibling;$=i,Rl=a,at=c}Y0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Y0(t)}}function Y0(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||Qu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&O0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}O0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ma(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}at||e.flags&512&&Lh(e)}catch(f){Fe(e,e.return,f)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function G0(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function K0(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qu(4,e)}catch(l){Fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Fe(e,i,l)}}var s=e.return;try{Lh(e)}catch(l){Fe(e,s,l)}break;case 5:var o=e.return;try{Lh(e)}catch(l){Fe(e,o,l)}}}catch(l){Fe(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var dT=Math.ceil,ou=ar.ReactCurrentDispatcher,Mg=ar.ReactCurrentOwner,Qt=ar.ReactCurrentBatchConfig,ce=0,Ze=null,We=null,tt=0,At=0,xs=ni(0),Ke=0,Ta=null,Ui=0,Ju=0,Lg=0,Jo=null,xt=null,Dg=0,$s=1/0,zn=null,au=!1,Fh=null,$r=null,Ml=!1,Pr=null,lu=0,Zo=0,jh=null,mc=-1,yc=0;function ht(){return ce&6?$e():mc!==-1?mc:mc=$e()}function Ur(t){return t.mode&1?ce&2&&tt!==0?tt&-tt:KC.transition!==null?(yc===0&&(yc=gb()),yc):(t=he,t!==0||(t=window.event,t=t===void 0?16:wb(t.type)),t):1}function dn(t,e,n,r){if(50<Zo)throw Zo=0,jh=null,Error(F(185));Qa(t,n,r),(!(ce&2)||t!==Ze)&&(t===Ze&&(!(ce&2)&&(Ju|=n),Ke===4&&Sr(t,tt)),Et(t,r),n===1&&ce===0&&!(e.mode&1)&&($s=$e()+500,Ku&&ri()))}function Et(t,e){var n=t.callbackNode;KE(t,e);var r=Wc(t,t===Ze?tt:0);if(r===0)n!==null&&r0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&r0(n),e===1)t.tag===0?GC(q0.bind(null,t)):$b(q0.bind(null,t)),HC(function(){!(ce&6)&&ri()}),n=null;else{switch(mb(r)){case 1:n=ag;break;case 4:n=hb;break;case 16:n=Vc;break;case 536870912:n=pb;break;default:n=Vc}n=z_(n,R_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function R_(t,e){if(mc=-1,yc=0,ce&6)throw Error(F(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var r=Wc(t,t===Ze?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cu(t,r);else{e=r;var i=ce;ce|=2;var s=L_();(Ze!==t||tt!==e)&&(zn=null,$s=$e()+500,Ii(t,e));do try{pT();break}catch(a){M_(t,a)}while(!0);bg(),ou.current=s,ce=i,We!==null?e=0:(Ze=null,tt=0,e=Ke)}if(e!==0){if(e===2&&(i=dh(t),i!==0&&(r=i,e=zh(t,i))),e===1)throw n=Ta,Ii(t,0),Sr(t,r),Et(t,$e()),n;if(e===6)Sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!fT(i)&&(e=cu(t,r),e===2&&(s=dh(t),s!==0&&(r=s,e=zh(t,s))),e===1))throw n=Ta,Ii(t,0),Sr(t,r),Et(t,$e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:yi(t,xt,zn);break;case 3:if(Sr(t,r),(r&130023424)===r&&(e=Dg+500-$e(),10<e)){if(Wc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xh(yi.bind(null,t,xt,zn),e);break}yi(t,xt,zn);break;case 4:if(Sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dT(r/1960))-r,10<r){t.timeoutHandle=xh(yi.bind(null,t,xt,zn),r);break}yi(t,xt,zn);break;case 5:yi(t,xt,zn);break;default:throw Error(F(329))}}}return Et(t,$e()),t.callbackNode===n?R_.bind(null,t):null}function zh(t,e){var n=Jo;return t.current.memoizedState.isDehydrated&&(Ii(t,e).flags|=256),t=cu(t,e),t!==2&&(e=xt,xt=n,e!==null&&Bh(e)),t}function Bh(t){xt===null?xt=t:xt.push.apply(xt,t)}function fT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~Lg,e&=~Ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-un(e),r=1<<n;t[n]=-1,e&=~r}}function q0(t){if(ce&6)throw Error(F(327));Ps();var e=Wc(t,0);if(!(e&1))return Et(t,$e()),null;var n=cu(t,e);if(t.tag!==0&&n===2){var r=dh(t);r!==0&&(e=r,n=zh(t,r))}if(n===1)throw n=Ta,Ii(t,0),Sr(t,e),Et(t,$e()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yi(t,xt,zn),Et(t,$e()),null}function Ng(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&($s=$e()+500,Ku&&ri())}}function Hi(t){Pr!==null&&Pr.tag===0&&!(ce&6)&&Ps();var e=ce;ce|=1;var n=Qt.transition,r=he;try{if(Qt.transition=null,he=1,t)return t()}finally{he=r,Qt.transition=n,ce=e,!(ce&6)&&ri()}}function Fg(){At=xs.current,Ee(xs)}function Ii(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,UC(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(yg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xc();break;case 3:zs(),Ee(St),Ee(ct),Cg();break;case 5:Eg(r);break;case 4:zs();break;case 13:Ee(Me);break;case 19:Ee(Me);break;case 10:_g(r.type._context);break;case 22:case 23:Fg()}n=n.return}if(Ze=t,We=t=Hr(t.current,null),tt=At=e,Ke=0,Ta=null,Lg=Ju=Ui=0,xt=Jo=null,Si!==null){for(e=0;e<Si.length;e++)if(n=Si[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Si=null}return t}function M_(t,e){do{var n=We;try{if(bg(),hc.current=su,iu){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}iu=!1}if($i=0,Xe=Ge=Le=null,Xo=!1,ka=0,Mg.current=null,n===null||n.return===null){Ke=1,Ta=e,We=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=N0(o);if(h!==null){h.flags&=-257,F0(h,o,a,s,e),h.mode&1&&D0(s,c,e),e=h,l=c;var p=e.updateQueue;if(p===null){var y=new Set;y.add(l),e.updateQueue=y}else p.add(l);break e}else{if(!(e&1)){D0(s,c,e),jg();break e}l=Error(F(426))}}else if(Ie&&a.mode&1){var v=N0(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),F0(v,o,a,s,e),vg(Bs(l,a));break e}}s=l=Bs(l,a),Ke!==4&&(Ke=2),Jo===null?Jo=[s]:Jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=m_(s,l,e);I0(s,m);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&($r===null||!$r.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=y_(s,a,e);I0(s,w);break e}}s=s.return}while(s!==null)}N_(n)}catch(k){e=k,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function L_(){var t=ou.current;return ou.current=su,t===null?su:t}function jg(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Ze===null||!(Ui&268435455)&&!(Ju&268435455)||Sr(Ze,tt)}function cu(t,e){var n=ce;ce|=2;var r=L_();(Ze!==t||tt!==e)&&(zn=null,Ii(t,e));do try{hT();break}catch(i){M_(t,i)}while(!0);if(bg(),ce=n,ou.current=r,We!==null)throw Error(F(261));return Ze=null,tt=0,Ke}function hT(){for(;We!==null;)D_(We)}function pT(){for(;We!==null&&!zE();)D_(We)}function D_(t){var e=j_(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?N_(t):We=e,Mg.current=null}function N_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aT(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,We=null;return}}else if(n=oT(n,e,At),n!==null){We=n;return}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Ke===0&&(Ke=5)}function yi(t,e,n){var r=he,i=Qt.transition;try{Qt.transition=null,he=1,gT(t,e,n,r)}finally{Qt.transition=i,he=r}return null}function gT(t,e,n,r){do Ps();while(Pr!==null);if(ce&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(qE(t,s),t===Ze&&(We=Ze=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ml||(Ml=!0,z_(Vc,function(){return Ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qt.transition,Qt.transition=null;var o=he;he=1;var a=ce;ce|=4,Mg.current=null,cT(t,n),O_(n,t),DC(yh),Yc=!!mh,yh=mh=null,t.current=n,uT(n),BE(),ce=a,he=o,Qt.transition=s}else t.current=n;if(Ml&&(Ml=!1,Pr=t,lu=i),s=t.pendingLanes,s===0&&($r=null),HE(n.stateNode),Et(t,$e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(au)throw au=!1,t=Fh,Fh=null,t;return lu&1&&t.tag!==0&&Ps(),s=t.pendingLanes,s&1?t===jh?Zo++:(Zo=0,jh=t):Zo=0,ri(),null}function Ps(){if(Pr!==null){var t=mb(lu),e=Qt.transition,n=he;try{if(Qt.transition=null,he=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,lu=0,ce&6)throw Error(F(331));var i=ce;for(ce|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for($=c;$!==null;){var u=$;switch(u.tag){case 0:case 11:case 15:Qo(8,u,s)}var d=u.child;if(d!==null)d.return=u,$=d;else for(;$!==null;){u=$;var f=u.sibling,h=u.return;if(T_(u),u===c){$=null;break}if(f!==null){f.return=h,$=f;break}$=h}}}var p=s.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,$=m;break e}$=s.return}}var g=t.current;for($=g;$!==null;){o=$;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,$=x;else e:for(o=g;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qu(9,a)}}catch(k){Fe(a,a.return,k)}if(a===o){$=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,$=w;break e}$=a.return}}if(ce=i,ri(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(Hu,t)}catch{}r=!0}return r}finally{he=n,Qt.transition=e}}return!1}function X0(t,e,n){e=Bs(n,e),e=m_(t,e,1),t=Br(t,e,1),e=ht(),t!==null&&(Qa(t,1,e),Et(t,e))}function Fe(t,e,n){if(t.tag===3)X0(t,t,n);else for(;e!==null;){if(e.tag===3){X0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($r===null||!$r.has(r))){t=Bs(n,t),t=y_(e,t,1),e=Br(e,t,1),t=ht(),e!==null&&(Qa(e,1,t),Et(e,t));break}}e=e.return}}function mT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(tt&n)===n&&(Ke===4||Ke===3&&(tt&130023424)===tt&&500>$e()-Dg?Ii(t,0):Lg|=n),Et(t,e)}function F_(t,e){e===0&&(t.mode&1?(e=Sl,Sl<<=1,!(Sl&130023424)&&(Sl=4194304)):e=1);var n=ht();t=tr(t,e),t!==null&&(Qa(t,e,n),Et(t,n))}function yT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),F_(t,n)}function vT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),F_(t,n)}var j_;j_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,sT(t,e,n);_t=!!(t.flags&131072)}else _t=!1,Ie&&e.flags&1048576&&Ub(e,Zc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gc(t,e),t=e.pendingProps;var i=Ns(e,ct.current);Ts(e,n),i=Pg(null,e,r,t,i,n);var s=Ig();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,Qc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sg(e),i.updater=Xu,e.stateNode=i,i._reactInternals=e,Ch(e,r,t,n),e=Ih(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&mg(e),dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=bT(r),t=sn(r,t),i){case 0:e=Ph(null,e,r,t,n);break e;case 1:e=B0(null,e,r,t,n);break e;case 11:e=j0(null,e,r,t,n);break e;case 14:e=z0(null,e,r,sn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Ph(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),B0(t,e,r,i,n);case 3:e:{if(__(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Kb(t,e),nu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bs(Error(F(423)),e),e=$0(t,e,r,n,i);break e}else if(r!==i){i=Bs(Error(F(424)),e),e=$0(t,e,r,n,i);break e}else for(Mt=zr(e.stateNode.containerInfo.firstChild),Dt=e,Ie=!0,an=null,n=Yb(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),r===i){e=nr(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return qb(e),t===null&&Sh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,vh(r,i)?o=null:s!==null&&vh(r,s)&&(e.flags|=32),b_(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&Sh(e),null;case 13:return w_(t,e,n);case 4:return kg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=js(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),j0(t,e,r,i,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(eu,r._currentValue),r._currentValue=o,s!==null)if(gn(s.value,o)){if(s.children===i.children&&!St.current){e=nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Qn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),kh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),kh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ts(e,n),i=Jt(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,i=sn(r,e.pendingProps),i=sn(r.type,i),z0(t,e,r,i,n);case 15:return v_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),gc(t,e),e.tag=1,kt(r)?(t=!0,Qc(e)):t=!1,Ts(e,n),g_(e,r,i),Ch(e,r,i,n),Ih(null,e,r,!0,t,n);case 19:return S_(t,e,n);case 22:return x_(t,e,n)}throw Error(F(156,e.tag))};function z_(t,e){return fb(t,e)}function xT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new xT(t,e,n,r)}function zg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bT(t){if(typeof t=="function")return zg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ig)return 11;if(t===sg)return 14}return 2}function Hr(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case cs:return Oi(n.children,i,s,e);case rg:o=8,i|=8;break;case Xf:return t=Xt(12,n,e,i|2),t.elementType=Xf,t.lanes=s,t;case Qf:return t=Xt(13,n,e,i),t.elementType=Qf,t.lanes=s,t;case Jf:return t=Xt(19,n,e,i),t.elementType=Jf,t.lanes=s,t;case qx:return Zu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gx:o=10;break e;case Kx:o=9;break e;case ig:o=11;break e;case sg:o=14;break e;case br:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Oi(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function Zu(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=qx,t.lanes=n,t.stateNode={isHidden:!1},t}function af(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function lf(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _T(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$d(0),this.expirationTimes=$d(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$d(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bg(t,e,n,r,i,s,o,a,l){return t=new _T(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sg(s),t}function wT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function B_(t){if(!t)return qr;t=t._reactInternals;e:{if(Ji(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(kt(n))return Bb(t,n,e)}return e}function $_(t,e,n,r,i,s,o,a,l){return t=Bg(n,r,!0,t,i,s,o,a,l),t.context=B_(null),n=t.current,r=ht(),i=Ur(n),s=Qn(r,i),s.callback=e??null,Br(n,s,i),t.current.lanes=i,Qa(t,i,r),Et(t,r),t}function ed(t,e,n,r){var i=e.current,s=ht(),o=Ur(i);return n=B_(n),e.context===null?e.context=n:e.pendingContext=n,e=Qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Br(i,e,o),t!==null&&(dn(t,i,o,s),fc(t,i,o)),o}function uu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Q0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $g(t,e){Q0(t,e),(t=t.alternate)&&Q0(t,e)}function ST(){return null}var U_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ug(t){this._internalRoot=t}td.prototype.render=Ug.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));ed(t,e,null,null)};td.prototype.unmount=Ug.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hi(function(){ed(null,t,null,null)}),e[er]=null}};function td(t){this._internalRoot=t}td.prototype.unstable_scheduleHydration=function(t){if(t){var e=xb();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wr.length&&e!==0&&e<wr[n].priority;n++);wr.splice(n,0,t),n===0&&_b(t)}};function Hg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function J0(){}function kT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=uu(o);s.call(c)}}var o=$_(e,r,t,0,null,!1,!1,"",J0);return t._reactRootContainer=o,t[er]=o.current,xa(t.nodeType===8?t.parentNode:t),Hi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=uu(l);a.call(c)}}var l=Bg(t,0,!1,null,null,!1,!1,"",J0);return t._reactRootContainer=l,t[er]=l.current,xa(t.nodeType===8?t.parentNode:t),Hi(function(){ed(e,l,n,r)}),l}function rd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=uu(o);a.call(l)}}ed(e,o,t,i)}else o=kT(n,e,t,i,r);return uu(o)}yb=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ro(e.pendingLanes);n!==0&&(lg(e,n|1),Et(e,$e()),!(ce&6)&&($s=$e()+500,ri()))}break;case 13:Hi(function(){var r=tr(t,1);if(r!==null){var i=ht();dn(r,t,1,i)}}),$g(t,1)}};cg=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=ht();dn(e,t,134217728,n)}$g(t,134217728)}};vb=function(t){if(t.tag===13){var e=Ur(t),n=tr(t,e);if(n!==null){var r=ht();dn(n,t,e,r)}$g(t,e)}};xb=function(){return he};bb=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};lh=function(t,e,n){switch(e){case"input":if(th(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Gu(r);if(!i)throw Error(F(90));Qx(r),th(r,i)}}}break;case"textarea":Zx(t,n);break;case"select":e=n.value,e!=null&&Ss(t,!!n.multiple,e,!1)}};ob=Ng;ab=Hi;var ET={usingClientEntryPoint:!1,Events:[Za,hs,Gu,ib,sb,Ng]},xo={findFiberByHostInstance:wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CT={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ub(t),t===null?null:t.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||ST,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{Hu=Ll.inject(CT),In=Ll}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ET;Bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hg(e))throw Error(F(200));return wT(t,e,null,n)};Bt.createRoot=function(t,e){if(!Hg(t))throw Error(F(299));var n=!1,r="",i=U_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bg(t,1,!1,null,null,n,!1,r,i),t[er]=e.current,xa(t.nodeType===8?t.parentNode:t),new Ug(e)};Bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=ub(e),t=t===null?null:t.stateNode,t};Bt.flushSync=function(t){return Hi(t)};Bt.hydrate=function(t,e,n){if(!nd(e))throw Error(F(200));return rd(null,t,e,!0,n)};Bt.hydrateRoot=function(t,e,n){if(!Hg(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=U_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$_(e,null,t,1,n??null,i,!1,s,o),t[er]=e.current,xa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new td(e)};Bt.render=function(t,e,n){if(!nd(e))throw Error(F(200));return rd(null,t,e,!1,n)};Bt.unmountComponentAtNode=function(t){if(!nd(t))throw Error(F(40));return t._reactRootContainer?(Hi(function(){rd(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};Bt.unstable_batchedUpdates=Ng;Bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nd(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return rd(t,e,n,!1,r)};Bt.version="18.3.1-next-f1338f8080-20240426";function H_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H_)}catch(t){console.error(t)}}H_(),Hx.exports=Bt;var TT=Hx.exports,Z0=TT;Kf.createRoot=Z0.createRoot,Kf.hydrateRoot=Z0.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pa.apply(this,arguments)}var Ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ir||(Ir={}));const ey="popstate";function PT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return $h("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:du(i)}return OT(e,n,null,t)}function De(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function V_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function IT(){return Math.random().toString(36).substr(2,8)}function ty(t,e){return{usr:t.state,key:t.key,idx:e}}function $h(t,e,n,r){return n===void 0&&(n=null),Pa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ro(e):e,{state:n,key:e&&e.key||r||IT()})}function du(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ro(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function OT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ir.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Pa({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=Ir.Pop;let v=u(),m=v==null?null:v-c;c=v,l&&l({action:a,location:y.location,delta:m})}function f(v,m){a=Ir.Push;let g=$h(y.location,v,m);c=u()+1;let x=ty(g,c),w=y.createHref(g);try{o.pushState(x,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}s&&l&&l({action:a,location:y.location,delta:1})}function h(v,m){a=Ir.Replace;let g=$h(y.location,v,m);c=u();let x=ty(g,c),w=y.createHref(g);o.replaceState(x,"",w),s&&l&&l({action:a,location:y.location,delta:0})}function p(v){let m=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof v=="string"?v:du(v);return g=g.replace(/ $/,"%20"),De(m,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,m)}let y={get action(){return a},get location(){return t(i,o)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ey,d),l=v,()=>{i.removeEventListener(ey,d),l=null}},createHref(v){return e(i,v)},createURL:p,encodeLocation(v){let m=p(v);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:h,go(v){return o.go(v)}};return y}var ny;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ny||(ny={}));function AT(t,e,n){return n===void 0&&(n="/"),RT(t,e,n,!1)}function RT(t,e,n,r){let i=typeof e=="string"?ro(e):e,s=Us(i.pathname||"/",n);if(s==null)return null;let o=W_(t);MT(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=VT(s);a=UT(o[l],c,r)}return a}function W_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(De(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Vr([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(De(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),W_(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:BT(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Y_(s.path))i(s,o,l)}),e}function Y_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Y_(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function MT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:$T(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const LT=/^:[\w-]+$/,DT=3,NT=2,FT=1,jT=10,zT=-2,ry=t=>t==="*";function BT(t,e){let n=t.split("/"),r=n.length;return n.some(ry)&&(r+=zT),e&&(r+=NT),n.filter(i=>!ry(i)).reduce((i,s)=>i+(LT.test(s)?DT:s===""?FT:jT),r)}function $T(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function UT(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=fu({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),f=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=fu({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Vr([s,d.pathname]),pathnameBase:KT(Vr([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=Vr([s,d.pathnameBase]))}return o}function fu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=HT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:f,isOptional:h}=u;if(f==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const p=a[d];return h&&!p?c[f]=void 0:c[f]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function HT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),V_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function VT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return V_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Us(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function WT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ro(t):t;return{pathname:n?n.startsWith("/")?n:YT(n,e):e,search:qT(r),hash:XT(i)}}function YT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function cf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function GT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vg(t,e){let n=GT(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Wg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ro(t):(i=Pa({},t),De(!i.pathname||!i.pathname.includes("?"),cf("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),cf("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),cf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=WT(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Vr=t=>t.join("/").replace(/\/\/+/g,"/"),KT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,XT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function QT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const G_=["post","put","patch","delete"];new Set(G_);const JT=["get",...G_];new Set(JT);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ia(){return Ia=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ia.apply(this,arguments)}const id=P.createContext(null),K_=P.createContext(null),lr=P.createContext(null),sd=P.createContext(null),ii=P.createContext({outlet:null,matches:[],isDataRoute:!1}),q_=P.createContext(null);function ZT(t,e){let{relative:n}=e===void 0?{}:e;io()||De(!1);let{basename:r,navigator:i}=P.useContext(lr),{hash:s,pathname:o,search:a}=od(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Vr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function io(){return P.useContext(sd)!=null}function Zi(){return io()||De(!1),P.useContext(sd).location}function X_(t){P.useContext(lr).static||P.useLayoutEffect(t)}function es(){let{isDataRoute:t}=P.useContext(ii);return t?fP():eP()}function eP(){io()||De(!1);let t=P.useContext(id),{basename:e,future:n,navigator:r}=P.useContext(lr),{matches:i}=P.useContext(ii),{pathname:s}=Zi(),o=JSON.stringify(Vg(i,n.v7_relativeSplatPath)),a=P.useRef(!1);return X_(()=>{a.current=!0}),P.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=Wg(c,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Vr([e,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[e,r,o,s,t])}function od(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=P.useContext(lr),{matches:i}=P.useContext(ii),{pathname:s}=Zi(),o=JSON.stringify(Vg(i,r.v7_relativeSplatPath));return P.useMemo(()=>Wg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function tP(t,e){return nP(t,e)}function nP(t,e,n,r){io()||De(!1);let{navigator:i}=P.useContext(lr),{matches:s}=P.useContext(ii),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Zi(),u;if(e){var d;let v=typeof e=="string"?ro(e):e;l==="/"||(d=v.pathname)!=null&&d.startsWith(l)||De(!1),u=v}else u=c;let f=u.pathname||"/",h=f;if(l!=="/"){let v=l.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(v.length).join("/")}let p=AT(t,{pathname:h}),y=aP(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:Vr([l,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Vr([l,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r);return e&&y?P.createElement(sd.Provider,{value:{location:Ia({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ir.Pop}},y):y}function rP(){let t=dP(),e=QT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:i},n):null,null)}const iP=P.createElement(rP,null);class sP extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?P.createElement(ii.Provider,{value:this.props.routeContext},P.createElement(q_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oP(t){let{routeContext:e,match:n,children:r}=t,i=P.useContext(id);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(ii.Provider,{value:e},r)}function aP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||De(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:f,errors:h}=n,p=d.route.loader&&f[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||p){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,f)=>{let h,p=!1,y=null,v=null;n&&(h=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||iP,l&&(c<0&&f===0?(p=!0,v=null):c===f&&(p=!0,v=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),g=()=>{let x;return h?x=y:p?x=v:d.route.Component?x=P.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=u,P.createElement(oP,{match:d,routeContext:{outlet:u,matches:m,isDataRoute:n!=null},children:x})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?P.createElement(sP,{location:n.location,revalidation:n.revalidation,component:y,error:h,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var Q_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Q_||{}),hu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(hu||{});function lP(t){let e=P.useContext(id);return e||De(!1),e}function cP(t){let e=P.useContext(K_);return e||De(!1),e}function uP(t){let e=P.useContext(ii);return e||De(!1),e}function J_(t){let e=uP(),n=e.matches[e.matches.length-1];return n.route.id||De(!1),n.route.id}function dP(){var t;let e=P.useContext(q_),n=cP(hu.UseRouteError),r=J_(hu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function fP(){let{router:t}=lP(Q_.UseNavigateStable),e=J_(hu.UseNavigateStable),n=P.useRef(!1);return X_(()=>{n.current=!0}),P.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ia({fromRouteId:e},s)))},[t,e])}function bo(t){let{to:e,replace:n,state:r,relative:i}=t;io()||De(!1);let{future:s,static:o}=P.useContext(lr),{matches:a}=P.useContext(ii),{pathname:l}=Zi(),c=es(),u=Wg(e,Vg(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(u);return P.useEffect(()=>c(JSON.parse(d),{replace:n,state:r,relative:i}),[c,d,i,n,r]),null}function vr(t){De(!1)}function hP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ir.Pop,navigator:s,static:o=!1,future:a}=t;io()&&De(!1);let l=e.replace(/^\/*/,"/"),c=P.useMemo(()=>({basename:l,navigator:s,static:o,future:Ia({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ro(r));let{pathname:u="/",search:d="",hash:f="",state:h=null,key:p="default"}=r,y=P.useMemo(()=>{let v=Us(u,l);return v==null?null:{location:{pathname:v,search:d,hash:f,state:h,key:p},navigationType:i}},[l,u,d,f,h,p,i]);return y==null?null:P.createElement(lr.Provider,{value:c},P.createElement(sd.Provider,{children:n,value:y}))}function pP(t){let{children:e,location:n}=t;return tP(Uh(e),n)}new Promise(()=>{});function Uh(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(r,i)=>{if(!P.isValidElement(r))return;let s=[...e,i];if(r.type===P.Fragment){n.push.apply(n,Uh(r.props.children,s));return}r.type!==vr&&De(!1),!r.props.index||!r.props.children||De(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Uh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pu(){return pu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pu.apply(this,arguments)}function Z_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function gP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function mP(t,e){return t.button===0&&(!e||e==="_self")&&!gP(t)}const yP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],vP=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],xP="6";try{window.__reactRouterVersion=xP}catch{}const bP=P.createContext({isTransitioning:!1}),_P="startTransition",iy=mE[_P];function wP(t){let{basename:e,children:n,future:r,window:i}=t,s=P.useRef();s.current==null&&(s.current=PT({window:i,v5Compat:!0}));let o=s.current,[a,l]=P.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=P.useCallback(d=>{c&&iy?iy(()=>l(d)):l(d)},[l,c]);return P.useLayoutEffect(()=>o.listen(u),[o,u]),P.createElement(hP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const SP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,EP=P.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,unstable_viewTransition:d}=e,f=Z_(e,yP),{basename:h}=P.useContext(lr),p,y=!1;if(typeof c=="string"&&kP.test(c)&&(p=c,SP))try{let x=new URL(window.location.href),w=c.startsWith("//")?new URL(x.protocol+c):new URL(c),k=Us(w.pathname,h);w.origin===x.origin&&k!=null?c=k+w.search+w.hash:y=!0}catch{}let v=ZT(c,{relative:i}),m=PP(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:i,unstable_viewTransition:d});function g(x){r&&r(x),x.defaultPrevented||m(x)}return P.createElement("a",pu({},f,{href:p||v,onClick:y||s?r:g,ref:n,target:l}))}),CP=P.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:c,children:u}=e,d=Z_(e,vP),f=od(l,{relative:d.relative}),h=Zi(),p=P.useContext(K_),{navigator:y,basename:v}=P.useContext(lr),m=p!=null&&IP(f)&&c===!0,g=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,x=h.pathname,w=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(x=x.toLowerCase(),w=w?w.toLowerCase():null,g=g.toLowerCase()),w&&v&&(w=Us(w,v)||w);const k=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=x===g||!o&&x.startsWith(g)&&x.charAt(k)==="/",E=w!=null&&(w===g||!o&&w.startsWith(g)&&w.charAt(g.length)==="/"),b={isActive:C,isPending:E,isTransitioning:m},S=C?r:void 0,T;typeof s=="function"?T=s(b):T=[s,C?"active":null,E?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let A=typeof a=="function"?a(b):a;return P.createElement(EP,pu({},d,{"aria-current":S,className:T,ref:n,style:A,to:l,unstable_viewTransition:c}),typeof u=="function"?u(b):u)});var Hh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Hh||(Hh={}));var sy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(sy||(sy={}));function TP(t){let e=P.useContext(id);return e||De(!1),e}function PP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=es(),c=Zi(),u=od(t,{relative:o});return P.useCallback(d=>{if(mP(d,n)){d.preventDefault();let f=r!==void 0?r:du(c)===du(u);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,l,u,r,i,n,t,s,o,a])}function IP(t,e){e===void 0&&(e={});let n=P.useContext(bP);n==null&&De(!1);let{basename:r}=TP(Hh.useViewTransitionState),i=od(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Us(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Us(n.nextLocation.pathname,r)||n.nextLocation.pathname;return fu(i.pathname,o)!=null||fu(i.pathname,s)!=null}var wt=function(){return wt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},wt.apply(this,arguments)};function Oa(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var ke="-ms-",ea="-moz-",de="-webkit-",ew="comm",ad="rule",Yg="decl",OP="@import",tw="@keyframes",AP="@layer",nw=Math.abs,Gg=String.fromCharCode,Vh=Object.assign;function RP(t,e){return Qe(t,0)^45?(((e<<2^Qe(t,0))<<2^Qe(t,1))<<2^Qe(t,2))<<2^Qe(t,3):0}function rw(t){return t.trim()}function Bn(t,e){return(t=e.exec(t))?t[0]:t}function ne(t,e,n){return t.replace(e,n)}function xc(t,e,n){return t.indexOf(e,n)}function Qe(t,e){return t.charCodeAt(e)|0}function Hs(t,e,n){return t.slice(e,n)}function Sn(t){return t.length}function iw(t){return t.length}function Lo(t,e){return e.push(t),t}function MP(t,e){return t.map(e).join("")}function oy(t,e){return t.filter(function(n){return!Bn(n,e)})}var ld=1,Vs=1,sw=0,en=0,Ve=0,so="";function cd(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:ld,column:Vs,length:o,return:"",siblings:a}}function xr(t,e){return Vh(cd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ss(t){for(;t.root;)t=xr(t.root,{children:[t]});Lo(t,t.siblings)}function LP(){return Ve}function DP(){return Ve=en>0?Qe(so,--en):0,Vs--,Ve===10&&(Vs=1,ld--),Ve}function fn(){return Ve=en<sw?Qe(so,en++):0,Vs++,Ve===10&&(Vs=1,ld++),Ve}function Ai(){return Qe(so,en)}function bc(){return en}function ud(t,e){return Hs(so,t,e)}function Wh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function NP(t){return ld=Vs=1,sw=Sn(so=t),en=0,[]}function FP(t){return so="",t}function uf(t){return rw(ud(en-1,Yh(t===91?t+2:t===40?t+1:t)))}function jP(t){for(;(Ve=Ai())&&Ve<33;)fn();return Wh(t)>2||Wh(Ve)>3?"":" "}function zP(t,e){for(;--e&&fn()&&!(Ve<48||Ve>102||Ve>57&&Ve<65||Ve>70&&Ve<97););return ud(t,bc()+(e<6&&Ai()==32&&fn()==32))}function Yh(t){for(;fn();)switch(Ve){case t:return en;case 34:case 39:t!==34&&t!==39&&Yh(Ve);break;case 40:t===41&&Yh(t);break;case 92:fn();break}return en}function BP(t,e){for(;fn()&&t+Ve!==57;)if(t+Ve===84&&Ai()===47)break;return"/*"+ud(e,en-1)+"*"+Gg(t===47?t:fn())}function $P(t){for(;!Wh(Ai());)fn();return ud(t,en)}function UP(t){return FP(_c("",null,null,null,[""],t=NP(t),0,[0],t))}function _c(t,e,n,r,i,s,o,a,l){for(var c=0,u=0,d=o,f=0,h=0,p=0,y=1,v=1,m=1,g=0,x="",w=i,k=s,C=r,E=x;v;)switch(p=g,g=fn()){case 40:if(p!=108&&Qe(E,d-1)==58){xc(E+=ne(uf(g),"&","&\f"),"&\f",nw(c?a[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:E+=uf(g);break;case 9:case 10:case 13:case 32:E+=jP(p);break;case 92:E+=zP(bc()-1,7);continue;case 47:switch(Ai()){case 42:case 47:Lo(HP(BP(fn(),bc()),e,n,l),l);break;default:E+="/"}break;case 123*y:a[c++]=Sn(E)*m;case 125*y:case 59:case 0:switch(g){case 0:case 125:v=0;case 59+u:m==-1&&(E=ne(E,/\f/g,"")),h>0&&Sn(E)-d&&Lo(h>32?ly(E+";",r,n,d-1,l):ly(ne(E," ","")+";",r,n,d-2,l),l);break;case 59:E+=";";default:if(Lo(C=ay(E,e,n,c,u,i,a,x,w=[],k=[],d,s),s),g===123)if(u===0)_c(E,e,C,C,w,s,d,a,k);else switch(f===99&&Qe(E,3)===110?100:f){case 100:case 108:case 109:case 115:_c(t,C,C,r&&Lo(ay(t,C,C,0,0,i,a,x,i,w=[],d,k),k),i,k,d,a,r?w:k);break;default:_c(E,C,C,C,[""],k,0,a,k)}}c=u=h=0,y=m=1,x=E="",d=o;break;case 58:d=1+Sn(E),h=p;default:if(y<1){if(g==123)--y;else if(g==125&&y++==0&&DP()==125)continue}switch(E+=Gg(g),g*y){case 38:m=u>0?1:(E+="\f",-1);break;case 44:a[c++]=(Sn(E)-1)*m,m=1;break;case 64:Ai()===45&&(E+=uf(fn())),f=Ai(),u=d=Sn(x=E+=$P(bc())),g++;break;case 45:p===45&&Sn(E)==2&&(y=0)}}return s}function ay(t,e,n,r,i,s,o,a,l,c,u,d){for(var f=i-1,h=i===0?s:[""],p=iw(h),y=0,v=0,m=0;y<r;++y)for(var g=0,x=Hs(t,f+1,f=nw(v=o[y])),w=t;g<p;++g)(w=rw(v>0?h[g]+" "+x:ne(x,/&\f/g,h[g])))&&(l[m++]=w);return cd(t,e,n,i===0?ad:a,l,c,u,d)}function HP(t,e,n,r){return cd(t,e,n,ew,Gg(LP()),Hs(t,2,-2),0,r)}function ly(t,e,n,r,i){return cd(t,e,n,Yg,Hs(t,0,r),Hs(t,r+1,-1),r,i)}function ow(t,e,n){switch(RP(t,e)){case 5103:return de+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+t+t;case 4789:return ea+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return de+t+ea+t+ke+t+t;case 5936:switch(Qe(t,e+11)){case 114:return de+t+ke+ne(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return de+t+ke+ne(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return de+t+ke+ne(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return de+t+ke+t+t;case 6165:return de+t+ke+"flex-"+t+t;case 5187:return de+t+ne(t,/(\w+).+(:[^]+)/,de+"box-$1$2"+ke+"flex-$1$2")+t;case 5443:return de+t+ke+"flex-item-"+ne(t,/flex-|-self/g,"")+(Bn(t,/flex-|baseline/)?"":ke+"grid-row-"+ne(t,/flex-|-self/g,""))+t;case 4675:return de+t+ke+"flex-line-pack"+ne(t,/align-content|flex-|-self/g,"")+t;case 5548:return de+t+ke+ne(t,"shrink","negative")+t;case 5292:return de+t+ke+ne(t,"basis","preferred-size")+t;case 6060:return de+"box-"+ne(t,"-grow","")+de+t+ke+ne(t,"grow","positive")+t;case 4554:return de+ne(t,/([^-])(transform)/g,"$1"+de+"$2")+t;case 6187:return ne(ne(ne(t,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),t,"")+t;case 5495:case 3959:return ne(t,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return ne(ne(t,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+t+t;case 4200:if(!Bn(t,/flex-|baseline/))return ke+"grid-column-align"+Hs(t,e)+t;break;case 2592:case 3360:return ke+ne(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Bn(r.props,/grid-\w+-end/)})?~xc(t+(n=n[e].value),"span",0)?t:ke+ne(t,"-start","")+t+ke+"grid-row-span:"+(~xc(n,"span",0)?Bn(n,/\d+/):+Bn(n,/\d+/)-+Bn(t,/\d+/))+";":ke+ne(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Bn(r.props,/grid-\w+-start/)})?t:ke+ne(ne(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ne(t,/(.+)-inline(.+)/,de+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Sn(t)-1-e>6)switch(Qe(t,e+1)){case 109:if(Qe(t,e+4)!==45)break;case 102:return ne(t,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+ea+(Qe(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~xc(t,"stretch",0)?ow(ne(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ne(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return ke+i+":"+s+c+(o?ke+i+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(Qe(t,e+6)===121)return ne(t,":",":"+de)+t;break;case 6444:switch(Qe(t,Qe(t,14)===45?18:11)){case 120:return ne(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+de+(Qe(t,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+ke+"$2box$3")+t;case 100:return ne(t,":",":"+ke)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(t,"scroll-","scroll-snap-")+t}return t}function gu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function VP(t,e,n,r){switch(t.type){case AP:if(t.children.length)break;case OP:case Yg:return t.return=t.return||t.value;case ew:return"";case tw:return t.return=t.value+"{"+gu(t.children,r)+"}";case ad:if(!Sn(t.value=t.props.join(",")))return""}return Sn(n=gu(t.children,r))?t.return=t.value+"{"+n+"}":""}function WP(t){var e=iw(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function YP(t){return function(e){e.root||(e=e.return)&&t(e)}}function GP(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Yg:t.return=ow(t.value,t.length,n);return;case tw:return gu([xr(t,{value:ne(t.value,"@","@"+de)})],r);case ad:if(t.length)return MP(n=t.props,function(i){switch(Bn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ss(xr(t,{props:[ne(i,/:(read-\w+)/,":"+ea+"$1")]})),ss(xr(t,{props:[i]})),Vh(t,{props:oy(n,r)});break;case"::placeholder":ss(xr(t,{props:[ne(i,/:(plac\w+)/,":"+de+"input-$1")]})),ss(xr(t,{props:[ne(i,/:(plac\w+)/,":"+ea+"$1")]})),ss(xr(t,{props:[ne(i,/:(plac\w+)/,ke+"input-$1")]})),ss(xr(t,{props:[i]})),Vh(t,{props:oy(n,r)});break}return""})}}var KP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},It={},Ws=typeof process<"u"&&It!==void 0&&(It.REACT_APP_SC_ATTR||It.SC_ATTR)||"data-styled",aw="active",lw="data-styled-version",dd="6.1.13",Kg=`/*!sc*/
`,mu=typeof window<"u"&&"HTMLElement"in window,qP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&It!==void 0&&It.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&It.REACT_APP_SC_DISABLE_SPEEDY!==""?It.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&It.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&It!==void 0&&It.SC_DISABLE_SPEEDY!==void 0&&It.SC_DISABLE_SPEEDY!==""&&It.SC_DISABLE_SPEEDY!=="false"&&It.SC_DISABLE_SPEEDY),fd=Object.freeze([]),Ys=Object.freeze({});function XP(t,e,n){return n===void 0&&(n=Ys),t.theme!==n.theme&&t.theme||e||n.theme}var cw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),QP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,JP=/(^-|-$)/g;function cy(t){return t.replace(QP,"-").replace(JP,"")}var ZP=/(a)(d)/gi,Dl=52,uy=function(t){return String.fromCharCode(t+(t>25?39:97))};function Gh(t){var e,n="";for(e=Math.abs(t);e>Dl;e=e/Dl|0)n=uy(e%Dl)+n;return(uy(e%Dl)+n).replace(ZP,"$1-$2")}var df,uw=5381,bs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},dw=function(t){return bs(uw,t)};function fw(t){return Gh(dw(t)>>>0)}function eI(t){return t.displayName||t.name||"Component"}function ff(t){return typeof t=="string"&&!0}var hw=typeof Symbol=="function"&&Symbol.for,pw=hw?Symbol.for("react.memo"):60115,tI=hw?Symbol.for("react.forward_ref"):60112,nI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},rI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},iI=((df={})[tI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},df[pw]=gw,df);function dy(t){return("type"in(e=t)&&e.type.$$typeof)===pw?gw:"$$typeof"in t?iI[t.$$typeof]:nI;var e}var sI=Object.defineProperty,oI=Object.getOwnPropertyNames,fy=Object.getOwnPropertySymbols,aI=Object.getOwnPropertyDescriptor,lI=Object.getPrototypeOf,hy=Object.prototype;function mw(t,e,n){if(typeof e!="string"){if(hy){var r=lI(e);r&&r!==hy&&mw(t,r,n)}var i=oI(e);fy&&(i=i.concat(fy(e)));for(var s=dy(t),o=dy(e),a=0;a<i.length;++a){var l=i[a];if(!(l in rI||n&&n[l]||o&&l in o||s&&l in s)){var c=aI(e,l);try{sI(t,l,c)}catch{}}}}return t}function Gs(t){return typeof t=="function"}function qg(t){return typeof t=="object"&&"styledComponentId"in t}function Ei(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Kh(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Aa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function qh(t,e,n){if(n===void 0&&(n=!1),!n&&!Aa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=qh(t[r],e[r]);else if(Aa(e))for(var r in e)t[r]=qh(t[r],e[r]);return t}function Xg(t,e){Object.defineProperty(t,"toString",{value:e})}function tl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var cI=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw tl(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Kg);return n},t}(),wc=new Map,yu=new Map,Sc=1,Nl=function(t){if(wc.has(t))return wc.get(t);for(;yu.has(Sc);)Sc++;var e=Sc++;return wc.set(t,e),yu.set(e,t),e},uI=function(t,e){Sc=e+1,wc.set(t,e),yu.set(e,t)},dI="style[".concat(Ws,"][").concat(lw,'="').concat(dd,'"]'),fI=new RegExp("^".concat(Ws,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),hI=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},pI=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Kg),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(fI);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(uI(u,c),hI(t,u,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},py=function(t){for(var e=document.querySelectorAll(dI),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Ws)!==aw&&(pI(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function gI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var yw=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ws,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ws,aw),r.setAttribute(lw,dd);var o=gI();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},mI=function(){function t(e){this.element=yw(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw tl(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),yI=function(){function t(e){this.element=yw(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),vI=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),gy=mu,xI={isServer:!mu,useCSSOMInjection:!qP},vw=function(){function t(e,n,r){e===void 0&&(e=Ys),n===void 0&&(n={});var i=this;this.options=wt(wt({},xI),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&mu&&gy&&(gy=!1,py(this)),Xg(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(d){var f=function(m){return yu.get(m)}(d);if(f===void 0)return"continue";var h=s.names.get(f),p=o.getGroup(d);if(h===void 0||!h.size||p.length===0)return"continue";var y="".concat(Ws,".g").concat(d,'[id="').concat(f,'"]'),v="";h!==void 0&&h.forEach(function(m){m.length>0&&(v+="".concat(m,","))}),l+="".concat(p).concat(y,'{content:"').concat(v,'"}').concat(Kg)},u=0;u<a;u++)c(u);return l}(i)})}return t.registerId=function(e){return Nl(e)},t.prototype.rehydrate=function(){!this.server&&mu&&py(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(wt(wt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new vI(i):r?new mI(i):new yI(i)}(this.options),new cI(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Nl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Nl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Nl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),bI=/&/g,_I=/^\s*\/\/.*$/gm;function xw(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=xw(n.children,e)),n})}function wI(t){var e,n,r,i=Ys,s=i.options,o=s===void 0?Ys:s,a=i.plugins,l=a===void 0?fd:a,c=function(f,h,p){return p.startsWith(n)&&p.endsWith(n)&&p.replaceAll(n,"").length>0?".".concat(e):f},u=l.slice();u.push(function(f){f.type===ad&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(bI,n).replace(r,c))}),o.prefix&&u.push(GP),u.push(VP);var d=function(f,h,p,y){h===void 0&&(h=""),p===void 0&&(p=""),y===void 0&&(y="&"),e=y,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var v=f.replace(_I,""),m=UP(p||h?"".concat(p," ").concat(h," { ").concat(v," }"):v);o.namespace&&(m=xw(m,o.namespace));var g=[];return gu(m,WP(u.concat(YP(function(x){return g.push(x)})))),g};return d.hash=l.length?l.reduce(function(f,h){return h.name||tl(15),bs(f,h.name)},uw).toString():"",d}var SI=new vw,Xh=wI(),bw=q.createContext({shouldForwardProp:void 0,styleSheet:SI,stylis:Xh});bw.Consumer;q.createContext(void 0);function my(){return P.useContext(bw)}var _w=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Xh);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Xg(this,function(){throw tl(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Xh),this.name+e.hash},t}(),kI=function(t){return t>="A"&&t<="Z"};function yy(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;kI(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var ww=function(t){return t==null||t===!1||t===""},Sw=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!ww(s)&&(Array.isArray(s)&&s.isCss||Gs(s)?r.push("".concat(yy(i),":"),s,";"):Aa(s)?r.push.apply(r,Oa(Oa(["".concat(i," {")],Sw(s),!1),["}"],!1)):r.push("".concat(yy(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in KP||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ri(t,e,n,r){if(ww(t))return[];if(qg(t))return[".".concat(t.styledComponentId)];if(Gs(t)){if(!Gs(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Ri(i,e,n,r)}var s;return t instanceof _w?n?(t.inject(n,r),[t.getName(r)]):[t]:Aa(t)?Sw(t):Array.isArray(t)?Array.prototype.concat.apply(fd,t.map(function(o){return Ri(o,e,n,r)})):[t.toString()]}function EI(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Gs(n)&&!qg(n))return!1}return!0}var CI=dw(dd),TI=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&EI(e),this.componentId=n,this.baseHash=bs(CI,n),this.baseStyle=r,vw.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ei(i,this.staticRulesId);else{var s=Kh(Ri(this.rules,e,n,r)),o=Gh(bs(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Ei(i,o),this.staticRulesId=o}else{for(var l=bs(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var f=Kh(Ri(d,e,n,r));l=bs(l,f+u),c+=f}}if(c){var h=Gh(l>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(c,".".concat(h),void 0,this.componentId)),i=Ei(i,h)}}return i},t}(),kw=q.createContext(void 0);kw.Consumer;var hf={};function PI(t,e,n){var r=qg(t),i=t,s=!ff(t),o=e.attrs,a=o===void 0?fd:o,l=e.componentId,c=l===void 0?function(w,k){var C=typeof w!="string"?"sc":cy(w);hf[C]=(hf[C]||0)+1;var E="".concat(C,"-").concat(fw(dd+C+hf[C]));return k?"".concat(k,"-").concat(E):E}(e.displayName,e.parentComponentId):l,u=e.displayName,d=u===void 0?function(w){return ff(w)?"styled.".concat(w):"Styled(".concat(eI(w),")")}(t):u,f=e.displayName&&e.componentId?"".concat(cy(e.displayName),"-").concat(e.componentId):e.componentId||c,h=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,p=e.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(e.shouldForwardProp){var v=e.shouldForwardProp;p=function(w,k){return y(w,k)&&v(w,k)}}else p=y}var m=new TI(n,f,r?i.componentStyle:void 0);function g(w,k){return function(C,E,b){var S=C.attrs,T=C.componentStyle,A=C.defaultProps,L=C.foldedComponentIds,z=C.styledComponentId,U=C.target,Y=q.useContext(kw),V=my(),N=C.shouldForwardProp||V.shouldForwardProp,M=XP(E,Y,A)||Ys,R=function(Q,Z,ae){for(var ve,W=wt(wt({},Z),{className:void 0,theme:ae}),le=0;le<Q.length;le+=1){var pe=Gs(ve=Q[le])?ve(W):ve;for(var ge in pe)W[ge]=ge==="className"?Ei(W[ge],pe[ge]):ge==="style"?wt(wt({},W[ge]),pe[ge]):pe[ge]}return Z.className&&(W.className=Ei(W.className,Z.className)),W}(S,E,M),B=R.as||U,G={};for(var D in R)R[D]===void 0||D[0]==="$"||D==="as"||D==="theme"&&R.theme===M||(D==="forwardedAs"?G.as=R.forwardedAs:N&&!N(D,B)||(G[D]=R[D]));var K=function(Q,Z){var ae=my(),ve=Q.generateAndInjectStyles(Z,ae.styleSheet,ae.stylis);return ve}(T,R),X=Ei(L,z);return K&&(X+=" "+K),R.className&&(X+=" "+R.className),G[ff(B)&&!cw.has(B)?"class":"className"]=X,G.ref=b,P.createElement(B,G)}(x,w,k)}g.displayName=d;var x=q.forwardRef(g);return x.attrs=h,x.componentStyle=m,x.displayName=d,x.shouldForwardProp=p,x.foldedComponentIds=r?Ei(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=f,x.target=r?i.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(k){for(var C=[],E=1;E<arguments.length;E++)C[E-1]=arguments[E];for(var b=0,S=C;b<S.length;b++)qh(k,S[b],!0);return k}({},i.defaultProps,w):w}}),Xg(x,function(){return".".concat(x.styledComponentId)}),s&&mw(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function vy(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var xy=function(t){return Object.assign(t,{isCss:!0})};function nl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Gs(t)||Aa(t))return xy(Ri(vy(fd,Oa([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Ri(r):xy(Ri(vy(r,e)))}function Qh(t,e,n){if(n===void 0&&(n=Ys),!e)throw tl(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,nl.apply(void 0,Oa([i],s,!1)))};return r.attrs=function(i){return Qh(t,e,wt(wt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Qh(t,e,wt(wt({},n),i))},r}var Ew=function(t){return Qh(PI,t)},I=Ew;cw.forEach(function(t){I[t]=Ew(t)});function oo(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Kh(nl.apply(void 0,Oa([t],e,!1))),i=fw(r);return new _w(i,r)}const II=I.section`
  grid-column: span 2;
  height: 600px;
  padding: 0 16px; /* Add padding from left and right */

  @media (max-width: 768px) {
    height: 600px;
  }
`,OI=I.div`
  height: 100%;
`,AI=q.memo(({symbol:t})=>(P.useEffect(()=>{const e=document.createElement("script");e.src="https://s3.tradingview.com/tv.js",e.async=!0;const n=()=>{new window.TradingView.widget({autosize:!0,symbol:t||"NASDAQ:AAPL",interval:"D",timezone:"Etc/UTC",theme:"dark",style:"1",locale:"en",hide_side_toolbar:!1,allow_symbol_change:!0,container_id:"tradingview_ae7da"})};return document.querySelector("#advanced-chart .tradingview-widget-container").appendChild(e),e.onload=n,()=>{const r=document.querySelector("#advanced-chart .tradingview-widget-container");r&&e&&r.removeChild(e)}},[t]),_.jsx("div",{id:"tradingview_ae7da",style:{height:"100%",width:"100%"}})));function RI(){const t=P.useMemo(()=>"NASDAQ:AAPL",[]);return _.jsx(II,{id:"advanced-chart",children:_.jsx(OI,{className:"tradingview-widget-container",style:{width:"100%"},children:_.jsx(AI,{symbol:t})})})}function MI(){return P.useEffect(()=>{const t=document.createElement("script");return t.src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",t.async=!0,t.innerHTML=JSON.stringify({symbols:[{proName:"NASDAQ:TSLA",description:""},{proName:"NASDAQ:AAPL",description:""},{proName:"NASDAQ:NVDA",description:""},{proName:"NASDAQ:MSFT",description:""},{proName:"NASDAQ:AMZN",description:""},{proName:"NASDAQ:GOOGL",description:""},{proName:"NASDAQ:META",description:""},{proName:"NYSE:BRK.B",description:""},{proName:"NYSE:LLY",description:""},{proName:"NYSE:UNH",description:""},{proName:"NYSE:V",description:""},{proName:"NYSE:WMT",description:""}],showSymbolLogo:!0,colorTheme:"dark",isTransparent:!1,displayMode:"adaptive",locale:"en"}),document.querySelector("#ticker-tape .tradingview-widget-container").appendChild(t),()=>{const e=document.querySelector("#ticker-tape .tradingview-widget-container");e&&(e.innerHTML="")}},[]),_.jsx(LI,{id:"ticker-tape",children:_.jsx("div",{className:"tradingview-widget-container",children:_.jsx("div",{className:"tradingview-widget-container__widget"})})})}const LI=I.nav`
  margin-bottom: 32px;
  margin-top: 32px;
  padding: 0 40px; /* Add padding from left and right */
  border-radius: 40px; /* Round corners */
  background-color: rgba(255, 255, 255, 0.1); /* Optional: Add a background color */
`,DI=I.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;

  @media (min-width: 1024px) {
    
    padding: 20px;
    height: 600px;
  }

  @media (max-width: 1023px) {
    height: 600px;
  }
`,NI=I.div`
  width: 100%;
  height: 100%;
`,FI=()=>{const t=P.useRef(null);return P.useEffect(()=>{const e=t.current;if(e&&!e.querySelector("script")){const n=document.createElement("script");n.type="text/javascript",n.src="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js",n.async=!0,n.innerHTML=JSON.stringify({colorTheme:"dark",dateRange:"12M",exchange:"US",showChart:!0,locale:"en",width:"100%",height:"100%",largeChartUrl:"",isTransparent:!1,showSymbolLogo:!1,showFloatingTooltip:!1,plotLineColorGrowing:"rgba(41, 98, 255, 1)",plotLineColorFalling:"rgba(41, 98, 255, 1)",gridLineColor:"rgba(240, 243, 250, 0)",scaleFontColor:"rgba(209, 212, 220, 1)",belowLineFillColorGrowing:"rgba(41, 98, 255, 0.12)",belowLineFillColorFalling:"rgba(41, 98, 255, 0.12)",belowLineFillColorGrowingBottom:"rgba(41, 98, 255, 0)",belowLineFillColorFallingBottom:"rgba(41, 98, 255, 0)",symbolActiveColor:"rgba(41, 98, 255, 0.12)"}),e.appendChild(n)}},[]),_.jsx(DI,{children:_.jsx(NI,{ref:t,children:_.jsx("div",{className:"tradingview-widget-container__widget"})})})},jI=I.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`,zI=I.div`
  width: ${t=>t.isSmallScreen?"400px":"1200px"};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,BI=q.memo(()=>{const[t,e]=P.useState(window.innerWidth<768),n=P.useRef(null);return P.useEffect(()=>{const r=()=>{e(window.innerWidth<768)};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),P.useEffect(()=>{const r=document.createElement("script");return r.src="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js",r.async=!0,r.innerHTML=JSON.stringify({feedMode:"all_symbols",isTransparent:!1,displayMode:"regular",width:t?400:1200,height:600,colorTheme:"dark",locale:"en"}),n.current&&n.current.appendChild(r),()=>{n.current&&n.current.firstChild&&n.current.removeChild(n.current.firstChild)}},[t]),_.jsx(jI,{children:_.jsx(zI,{isSmallScreen:t,children:_.jsx("div",{ref:n})})})});var Cw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},by=q.createContext&&q.createContext(Cw),$I=["attr","size","title"];function UI(t,e){if(t==null)return{};var n=HI(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function HI(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function vu(){return vu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vu.apply(this,arguments)}function _y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function xu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_y(Object(n),!0).forEach(function(r){VI(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_y(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function VI(t,e,n){return e=WI(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function WI(t){var e=YI(t,"string");return typeof e=="symbol"?e:e+""}function YI(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Tw(t){return t&&t.map((e,n)=>q.createElement(e.tag,xu({key:n},e.attr),Tw(e.child)))}function yt(t){return e=>q.createElement(GI,vu({attr:xu({},t.attr)},e),Tw(t.child))}function GI(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=UI(t,$I),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),q.createElement("svg",vu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:xu(xu({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&q.createElement("title",null,s),t.children)};return by!==void 0?q.createElement(by.Consumer,null,n=>e(n)):e(Cw)}function Pw(t){return yt({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(t)}const KI="/assets/bot-BbamPofH.png",Qg=()=>{const[t,e]=P.useState([{from:"bot",text:"I am an AI chatbot designed to answer questions related to Stock Markets and Trading. How can I help you today?"}]),[n,r]=P.useState(""),[i,s]=P.useState(!1),[o,a]=P.useState(!1),l=P.useRef(null);P.useEffect(()=>{i&&l.current&&(l.current.scrollTop=l.current.scrollHeight)},[t,i]);const c=f=>f.split(`

`).map((p,y)=>{if(p.startsWith("*")){const m=p.split(`
`).filter(g=>g.trim());return _.jsx("div",{style:{marginBottom:"10px"},children:_.jsx("ul",{style:{listStyleType:"disc",paddingLeft:"20px",textAlign:"left"},children:m.map((g,x)=>{const w=g.replace(/^\* /,"").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");return _.jsx("li",{style:{color:"#FFD700"},dangerouslySetInnerHTML:{__html:w}},x)})})},y)}const v=p.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");return _.jsx("div",{style:{marginBottom:"10px",textAlign:"left"},dangerouslySetInnerHTML:{__html:v}},y)}),u=async()=>{if(n.trim()){const f={from:"user",text:n.trim()};e(h=>[...h,f]),r(""),a(!0);try{const h=await fetch("http://127.0.0.1:5000/api/get_answer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:n.trim()})});if(!h.ok)throw new Error("Network response was not ok");const p=await h.json(),y=c(p.answer);e(v=>[...v,{from:"bot",text:y}])}catch(h){console.error("Error communicating with the backend:",h),e(p=>[...p,{from:"bot",text:"Sorry, I couldn't get a response from the server."}])}finally{a(!1)}}},d=f=>r(f.target.value);return _.jsx(qI,{children:i?_.jsxs(JI,{children:[_.jsx(ZI,{onClick:()=>s(!1),children:_.jsx(Pw,{})}),_.jsxs(e4,{ref:l,children:[t.map((f,h)=>_.jsx(wy,{from:f.from,children:(f.from==="bot",f.text)},h)),o&&_.jsx(wy,{from:"bot",children:"Generating..."})," "]}),_.jsxs(t4,{children:[_.jsx(n4,{type:"text",placeholder:"Type your message...",value:n,onChange:d,onKeyPress:f=>f.key==="Enter"&&u()}),_.jsx(r4,{onClick:u,children:"Send"})]})]}):_.jsx(XI,{onClick:()=>s(!0),children:_.jsx(QI,{})})})},qI=I.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background-color: #121212; 
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,XI=I.div`
  cursor: pointer;
  border: 2px solid #FFFFFF; /* Change border color to white */
  border-radius: 50%; /* Make it circular */
  width: 60px; /* Fixed width for circular shape */
  height: 60px; /* Fixed height for circular shape */
  display: flex; /* Align items horizontally */
  align-items: center; /* Center align the items */
  justify-content: center; /* Center the text within the container */
  transition: background-color 0.3s ease, border-color 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  /* Background color settings */
  background-color: rgba(255, 255, 255, 0.7); /* Light semi-transparent background */
  background-image: url(${KI}); /* Set the imported image as background */
  background-size: cover; /* Cover the whole area */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent repetition */
`,QI=I.div`
  font-size: 16px;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: transparent;
  color: #FFFFFF; 
  border-radius: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
`,JI=I.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
  position: relative;
`,ZI=I.div`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  font-size: 24px;
  color: #FFFFFFF; 
  transition: color 0.3s ease;
  &:hover {
    color: #FFA500; /* Lighter golden on hover */
  }
`,e4=I.div`
  padding: 20px;
  background-color: #1c1c1c; /* Dark gray background for chat history */
  overflow-y: auto;
  flex: 1;
  border-radius: 0 0 15px 15px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.3);

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #0056b3, #001f3f); /* Fancy gradient */
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5); /* Shadow inside the thumb */
  }

  &::-webkit-scrollbar-track {
    background: #2a2a2a; /* Slightly lighter gray for track */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #007bff, #003366); /* Lighter on hover */
  }

  &::-webkit-scrollbar-thumb:active {
    background: linear-gradient(135deg, #0056b3, #001f3f); /* Darker on active */
  }
`,wy=I.div`
  padding: 15px;
  margin: 10px 0;
  border-radius: 20px; 
  max-width: 90%; 
  word-break: break-word;
  background: ${({from:t})=>t==="bot"?"linear-gradient(135deg, #001f3f, #0056b3)":"linear-gradient(135deg, #a0d4ff, #4ca1ff)"}; 
  color: ${({from:t})=>t==="bot"?"white":"#333333"}; 
  align-self: ${({from:t})=>t==="bot"?"flex-start":"flex-end"};
  transition: background 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background: ${({from:t})=>t==="bot"?"linear-gradient(135deg, #003366, #007bff)":"linear-gradient(135deg, #80c7ff, #0092ff)"}; 
    transform: scale(1.02);
  }
`,t4=I.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #00000; 
  border-radius: 0 0 15px 15px;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
`,n4=I.input`
  flex: 1;
  padding: 15px;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  outline: none;
  background-color: #3a3a3a; /* Dark input field */
  font-size: 16px;
  color: #fff; /* White text */
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
  &:focus {
    background-color: #4a4a4a; /* Slightly lighter gray on focus */
  }
`,r4=I.button`
  padding: 15px 20px;
  background: linear-gradient(135deg, #001f3f, #0056b3); /* Dark blue gradient */
  color: white; /* White text */
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background: linear-gradient(135deg, #003366, #007bff); /* Slightly lighter blue on hover */
    transform: scale(1.05);
  }

  &:active {
    background: linear-gradient(135deg, #002147, #0056b3); /* Even darker on click */
    transform: scale(0.98);
  }
`,i4=()=>{const[t,e]=P.useState(!0),[n,r]=P.useState(!1),i=()=>{n||(e(!1),r(!0))};return _.jsxs(s4,{children:[_.jsx(MI,{}),_.jsxs(o4,{children:[_.jsx(RI,{}),_.jsx(FI,{}),_.jsx(BI,{})]}),_.jsx(l4,{isBouncing:t,onClick:i,children:_.jsx(Qg,{})})]})},s4=I.div`
  background: linear-gradient(235deg, #000000 0%, #002f4c 40%, rgba(0, 0, 0, 0.9) 80%, #002080 100%); 
  color: #ffffff;
  min-height: 100vh; /* Full height */
  padding: 20px;
  color: #fff; /* Ensure text is readable */
`,o4=I.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;I.h2`
  font-size: 48px; /* Increase font size for better visibility */
  font-weight: 700; /* Slightly bolder */
  margin: 0; /* Remove default margin */
  text-align: center; /* Center the title */
  background: linear-gradient(to right, #ffffff, #e0e0e0); /* Light gradient background */
  -webkit-background-clip: text; /* Clip background to text */
  -webkit-text-fill-color: transparent; /* Make text color transparent */
  animation: glowing 1.5s infinite alternate; /* Add glowing animation */
  text-shadow: 
    0 1px 5px rgba(255, 255, 255, 0.8), /* Subtle white shadow for depth */
    0 2px 10px rgba(255, 255, 255, 0.6), /* Softer shadow for a gentle glow */
    0 3px 15px rgba(0, 255, 255, 0.4); /* Light cyan highlight for a neon effect */
  transform: perspective(500px) rotateX(5deg); /* Create a 3D effect */

  /* Keyframes for glowing effect */
  @keyframes glowing {
    0% {
      text-shadow: 
        0 0 5px #ffffff,
        0 0 10px #ffffff,
        0 0 15px #e0e0e0,
        0 0 20px #e0e0e0,
        0 0 30px #e0e0e0;
    }
    100% {
      text-shadow: 
        0 0 10px #ffffff,
        0 0 20px #ffffff,
        0 0 30px #e0e0e0,
        0 0 40px #e0e0e0,
        0 0 50px #e0e0e0;
    }
  }
`;const a4=oo`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`,l4=I.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  ${({isBouncing:t})=>t&&nl`
      animation: ${a4} 2.5s infinite;
    `}
  cursor: pointer;
`;function Iw(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=Iw(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Or(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=Iw(t))&&(r&&(r+=" "),r+=e);return r}const Ra=t=>typeof t=="number"&&!isNaN(t),Mi=t=>typeof t=="string",Lt=t=>typeof t=="function",kc=t=>Mi(t)||Lt(t)?t:null,Jh=t=>P.isValidElement(t)||Mi(t)||Lt(t)||Ra(t);function c4(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function hd(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:f,playToast:h}=o;const p=r?`${e}--${l}`:e,y=r?`${n}--${l}`:n,v=P.useRef(0);return P.useLayoutEffect(()=>{const m=d.current,g=p.split(" "),x=w=>{w.target===d.current&&(h(),m.removeEventListener("animationend",x),m.removeEventListener("animationcancel",x),v.current===0&&w.type!=="animationcancel"&&m.classList.remove(...g))};m.classList.add(...g),m.addEventListener("animationend",x),m.addEventListener("animationcancel",x)},[]),P.useEffect(()=>{const m=d.current,g=()=>{m.removeEventListener("animationend",g),i?c4(m,u,s):u()};f||(c?g():(v.current=1,m.className+=` ${y}`,m.addEventListener("animationend",g)))},[f]),q.createElement(q.Fragment,null,a)}}function Sy(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const ft=new Map;let Ma=[];const Zh=new Set,u4=t=>Zh.forEach(e=>e(t)),Ow=()=>ft.size>0;function Aw(t,e){var n;if(e)return!((n=ft.get(e))==null||!n.isToastActive(t));let r=!1;return ft.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function Rw(t,e){Jh(t)&&(Ow()||Ma.push({content:t,options:e}),ft.forEach(n=>{n.buildToast(t,e)}))}function ky(t,e){ft.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function d4(t){const{subscribe:e,getSnapshot:n,setProps:r}=P.useRef(function(s){const o=s.containerId||1;return{subscribe(a){const l=function(u,d,f){let h=1,p=0,y=[],v=[],m=[],g=d;const x=new Map,w=new Set,k=()=>{m=Array.from(x.values()),w.forEach(b=>b())},C=b=>{v=b==null?[]:v.filter(S=>S!==b),k()},E=b=>{const{toastId:S,onOpen:T,updateId:A,children:L}=b.props,z=A==null;b.staleId&&x.delete(b.staleId),x.set(S,b),v=[...v,b.props.toastId].filter(U=>U!==b.staleId),k(),f(Sy(b,z?"added":"updated")),z&&Lt(T)&&T(P.isValidElement(L)&&L.props)};return{id:u,props:g,observe:b=>(w.add(b),()=>w.delete(b)),toggle:(b,S)=>{x.forEach(T=>{S!=null&&S!==T.props.toastId||Lt(T.toggle)&&T.toggle(b)})},removeToast:C,toasts:x,clearQueue:()=>{p-=y.length,y=[]},buildToast:(b,S)=>{if((D=>{let{containerId:K,toastId:X,updateId:Q}=D;const Z=K?K!==u:u!==1,ae=x.has(X)&&Q==null;return Z||ae})(S))return;const{toastId:T,updateId:A,data:L,staleId:z,delay:U}=S,Y=()=>{C(T)},V=A==null;V&&p++;const N={...g,style:g.toastStyle,key:h++,...Object.fromEntries(Object.entries(S).filter(D=>{let[K,X]=D;return X!=null})),toastId:T,updateId:A,data:L,closeToast:Y,isIn:!1,className:kc(S.className||g.toastClassName),bodyClassName:kc(S.bodyClassName||g.bodyClassName),progressClassName:kc(S.progressClassName||g.progressClassName),autoClose:!S.isLoading&&(M=S.autoClose,R=g.autoClose,M===!1||Ra(M)&&M>0?M:R),deleteToast(){const D=x.get(T),{onClose:K,children:X}=D.props;Lt(K)&&K(P.isValidElement(X)&&X.props),f(Sy(D,"removed")),x.delete(T),p--,p<0&&(p=0),y.length>0?E(y.shift()):k()}};var M,R;N.closeButton=g.closeButton,S.closeButton===!1||Jh(S.closeButton)?N.closeButton=S.closeButton:S.closeButton===!0&&(N.closeButton=!Jh(g.closeButton)||g.closeButton);let B=b;P.isValidElement(b)&&!Mi(b.type)?B=P.cloneElement(b,{closeToast:Y,toastProps:N,data:L}):Lt(b)&&(B=b({closeToast:Y,toastProps:N,data:L}));const G={content:B,props:N,staleId:z};g.limit&&g.limit>0&&p>g.limit&&V?y.push(G):Ra(U)?setTimeout(()=>{E(G)},U):E(G)},setProps(b){g=b},setToggle:(b,S)=>{x.get(b).toggle=S},isToastActive:b=>v.some(S=>S===b),getSnapshot:()=>g.newestOnTop?m.reverse():m}}(o,s,u4);ft.set(o,l);const c=l.observe(a);return Ma.forEach(u=>Rw(u.content,u.options)),Ma=[],()=>{c(),ft.delete(o)}},setProps(a){var l;(l=ft.get(o))==null||l.setProps(a)},getSnapshot(){var a;return(a=ft.get(o))==null?void 0:a.getSnapshot()}}}(t)).current;r(t);const i=P.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return i.forEach(a=>{const{position:l}=a.props;o.has(l)||o.set(l,[]),o.get(l).push(a)}),Array.from(o,a=>s(a[0],a[1]))},isToastActive:Aw,count:i==null?void 0:i.length}}function f4(t){const[e,n]=P.useState(!1),[r,i]=P.useState(!1),s=P.useRef(null),o=P.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:l,closeToast:c,onClick:u,closeOnClick:d}=t;var f,h;function p(){n(!0)}function y(){n(!1)}function v(x){const w=s.current;o.canDrag&&w&&(o.didMove=!0,e&&y(),o.delta=t.draggableDirection==="x"?x.clientX-o.start:x.clientY-o.start,o.start!==x.clientX&&(o.canCloseOnClick=!1),w.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,w.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function m(){document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",m);const x=s.current;if(o.canDrag&&o.didMove&&x){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();x.style.transition="transform 0.2s, opacity 0.2s",x.style.removeProperty("transform"),x.style.removeProperty("opacity")}}(h=ft.get((f={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||h.setToggle(f.id,f.fn),P.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||y(),window.addEventListener("focus",p),window.addEventListener("blur",y),()=>{window.removeEventListener("focus",p),window.removeEventListener("blur",y)}},[t.pauseOnFocusLoss]);const g={onPointerDown:function(x){if(t.draggable===!0||t.draggable===x.pointerType){o.didMove=!1,document.addEventListener("pointermove",v),document.addEventListener("pointerup",m);const w=s.current;o.canCloseOnClick=!0,o.canDrag=!0,w.style.transition="none",t.draggableDirection==="x"?(o.start=x.clientX,o.removalDistance=w.offsetWidth*(t.draggablePercent/100)):(o.start=x.clientY,o.removalDistance=w.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(x){const{top:w,bottom:k,left:C,right:E}=s.current.getBoundingClientRect();x.nativeEvent.type!=="touchend"&&t.pauseOnHover&&x.clientX>=C&&x.clientX<=E&&x.clientY>=w&&x.clientY<=k?y():p()}};return a&&l&&(g.onMouseEnter=y,t.stacked||(g.onMouseLeave=p)),d&&(g.onClick=x=>{u&&u(x),o.canCloseOnClick&&c()}),{playToast:p,pauseToast:y,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:g}}function h4(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:c,rtl:u,isIn:d,theme:f}=t;const h=s||l&&c===0,p={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};l&&(p.transform=`scaleX(${c})`);const y=Or("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":u}),v=Lt(o)?o({rtl:u,type:i,defaultClassName:y}):Or(y,o),m={[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{d&&r()}};return q.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":h},q.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${i}`}),q.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:v,style:p,...m}))}let p4=1;const Mw=()=>""+p4++;function g4(t){return t&&(Mi(t.toastId)||Ra(t.toastId))?t.toastId:Mw()}function ta(t,e){return Rw(t,e),e.toastId}function bu(t,e){return{...e,type:e&&e.type||t,toastId:g4(e)}}function Fl(t){return(e,n)=>ta(e,bu(t,n))}function se(t,e){return ta(t,bu("default",e))}se.loading=(t,e)=>ta(t,bu("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),se.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Mi(i)?se.loading(i,n):se.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,d,f)=>{if(d==null)return void se.dismiss(r);const h={type:u,...a,...n,data:f},p=Mi(d)?{render:d}:d;return r?se.update(r,{...h,...p}):se(p.render,{...h,...p}),f},c=Lt(t)?t():t;return c.then(u=>l("success",o,u)).catch(u=>l("error",s,u)),c},se.success=Fl("success"),se.info=Fl("info"),se.error=Fl("error"),se.warning=Fl("warning"),se.warn=se.warning,se.dark=(t,e)=>ta(t,bu("default",{theme:"dark",...e})),se.dismiss=function(t){(function(e){var n;if(Ow()){if(e==null||Mi(n=e)||Ra(n))ft.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=ft.get(e.containerId);r?r.removeToast(e.id):ft.forEach(i=>{i.removeToast(e.id)})}}else Ma=Ma.filter(r=>e!=null&&r.options.toastId!==e)})(t)},se.clearWaitingQueue=function(t){t===void 0&&(t={}),ft.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},se.isActive=Aw,se.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=ft.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:Mw()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,ta(o,s)}},se.done=t=>{se.update(t,{progress:1})},se.onChange=function(t){return Zh.add(t),()=>{Zh.delete(t)}},se.play=t=>ky(!0,t),se.pause=t=>ky(!1,t);const m4=typeof window<"u"?P.useLayoutEffect:P.useEffect,jl=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},pf={info:function(t){return q.createElement(jl,{...t},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return q.createElement(jl,{...t},q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return q.createElement(jl,{...t},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return q.createElement(jl,{...t},q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return q.createElement("div",{className:"Toastify__spinner"})}},y4=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=f4(t),{closeButton:o,children:a,autoClose:l,onClick:c,type:u,hideProgressBar:d,closeToast:f,transition:h,position:p,className:y,style:v,bodyClassName:m,bodyStyle:g,progressClassName:x,progressStyle:w,updateId:k,role:C,progress:E,rtl:b,toastId:S,deleteToast:T,isIn:A,isLoading:L,closeOnClick:z,theme:U}=t,Y=Or("Toastify__toast",`Toastify__toast-theme--${U}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":b},{"Toastify__toast--close-on-click":z}),V=Lt(y)?y({rtl:b,position:p,type:u,defaultClassName:Y}):Or(Y,y),N=function(G){let{theme:D,type:K,isLoading:X,icon:Q}=G,Z=null;const ae={theme:D,type:K};return Q===!1||(Lt(Q)?Z=Q({...ae,isLoading:X}):P.isValidElement(Q)?Z=P.cloneElement(Q,ae):X?Z=pf.spinner():(ve=>ve in pf)(K)&&(Z=pf[K](ae))),Z}(t),M=!!E||!l,R={closeToast:f,type:u,theme:U};let B=null;return o===!1||(B=Lt(o)?o(R):P.isValidElement(o)?P.cloneElement(o,R):function(G){let{closeToast:D,theme:K,ariaLabel:X="close"}=G;return q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${K}`,type:"button",onClick:Q=>{Q.stopPropagation(),D(Q)},"aria-label":X},q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(R)),q.createElement(h,{isIn:A,done:T,position:p,preventExitTransition:n,nodeRef:r,playToast:s},q.createElement("div",{id:S,onClick:c,"data-in":A,className:V,...i,style:v,ref:r},q.createElement("div",{...A&&{role:C},className:Lt(m)?m({type:u}):Or("Toastify__toast-body",m),style:g},N!=null&&q.createElement("div",{className:Or("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!L})},N),q.createElement("div",null,a)),B,q.createElement(h4,{...k&&!M?{key:`pb-${k}`}:{},rtl:b,theme:U,delay:l,isRunning:e,isIn:A,closeToast:f,hide:d,type:u,style:w,className:x,controlledProgress:M,progress:E||0})))},pd=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},v4=hd(pd("bounce",!0));hd(pd("slide",!0));hd(pd("zoom"));hd(pd("flip"));const x4={position:"top-right",transition:v4,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function gd(t){let e={...x4,...t};const n=t.stacked,[r,i]=P.useState(!0),s=P.useRef(null),{getToastToRender:o,isToastActive:a,count:l}=d4(e),{className:c,style:u,rtl:d,containerId:f}=e;function h(y){const v=Or("Toastify__toast-container",`Toastify__toast-container--${y}`,{"Toastify__toast-container--rtl":d});return Lt(c)?c({position:y,rtl:d,defaultClassName:v}):Or(v,kc(c))}function p(){n&&(i(!0),se.play())}return m4(()=>{if(n){var y;const v=s.current.querySelectorAll('[data-in="true"]'),m=12,g=(y=e.position)==null?void 0:y.includes("top");let x=0,w=0;Array.from(v).reverse().forEach((k,C)=>{const E=k;E.classList.add("Toastify__toast--stacked"),C>0&&(E.dataset.collapsed=`${r}`),E.dataset.pos||(E.dataset.pos=g?"top":"bot");const b=x*(r?.2:1)+(r?0:m*C);E.style.setProperty("--y",`${g?b:-1*b}px`),E.style.setProperty("--g",`${m}`),E.style.setProperty("--s",""+(1-(r?w:0))),x+=E.offsetHeight,w+=.025})}},[r,l,n]),q.createElement("div",{ref:s,className:"Toastify",id:f,onMouseEnter:()=>{n&&(i(!1),se.pause())},onMouseLeave:p},o((y,v)=>{const m=v.length?{...u}:{...u,pointerEvents:"none"};return q.createElement("div",{className:h(y),style:m,key:`container-${y}`},v.map(g=>{let{content:x,props:w}=g;return q.createElement(y4,{...w,stacked:n,collapseAll:p,isIn:a(w.toastId,w.containerId),style:w.style,key:`toast-${w.key}`},x)}))}))}function b4(t){return yt({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},child:[]}]})(t)}function _4(t){return yt({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(t)}function w4(t){return yt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}function S4(t){return yt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(t)}function k4(t){return yt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(t)}function E4(t){return yt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(t)}function C4(t){return yt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(t)}function Lw(t){return yt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(t)}function T4(t){return yt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(t)}function P4(t){return yt({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm-96 144c0 4.42-3.58 8-8 8h-8c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h8c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-8c-26.51 0-48-21.49-48-48v-32c0-26.51 21.49-48 48-48h8c4.42 0 8 3.58 8 8v16zm44.27 104H160c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h12.27c5.95 0 10.41-3.5 10.41-6.62 0-1.3-.75-2.66-2.12-3.84l-21.89-18.77c-8.47-7.22-13.33-17.48-13.33-28.14 0-21.3 19.02-38.62 42.41-38.62H200c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-12.27c-5.95 0-10.41 3.5-10.41 6.62 0 1.3.75 2.66 2.12 3.84l21.89 18.77c8.47 7.22 13.33 17.48 13.33 28.14.01 21.29-19 38.62-42.39 38.62zM256 264v20.8c0 20.27 5.7 40.17 16 56.88 10.3-16.7 16-36.61 16-56.88V264c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v20.8c0 35.48-12.88 68.89-36.28 94.09-3.02 3.25-7.27 5.11-11.72 5.11s-8.7-1.86-11.72-5.11c-23.4-25.2-36.28-58.61-36.28-94.09V264c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8zm121-159L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"},child:[]}]})(t)}function Dw(t){return yt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(t)}function Nw(t){return yt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"},child:[]}]})(t)}function I4(t){return yt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z"},child:[]}]})(t)}function O4(t){return yt({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"},child:[]}]})(t)}const A4=({message:t,onClose:e})=>_.jsx(R4,{children:_.jsxs(M4,{children:[_.jsx("h4",{children:"Error"}),_.jsx("p",{children:t}),_.jsx(L4,{onClick:e,children:"Close"})]})}),R4=I.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`,M4=I.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 300px;
`,L4=I.button`
    margin-top: 15px;
    background-color: #c0392b;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
        background-color: #a93226; // A darker shade for hover effect
    }
`,D4=({onUploadSuccess:t})=>{const[e,n]=P.useState(null),[r,i]=P.useState(""),[s,o]=P.useState(""),[a,l]=P.useState(!1),c=h=>{const p=h.target.files[0];if(p){const y=p.type;if(y!=="text/csv"&&y!=="application/vnd.ms-excel"){se.error("Only CSV files are accepted.",{autoClose:1500});return}n(p),i(""),se.success("File added successfully!",{autoClose:1500})}},u=()=>{n(null),i(""),se.info("File removed.",{autoClose:1500})},d=async()=>{if(!e){i("Please select a file.");return}const h=new FormData;h.append("file",e);try{const p=await fetch("http://localhost:5000/api/CSVupload",{method:"POST",body:h}),y=await p.json();if(p.ok)se.success("File uploaded successfully!",{autoClose:1500}),t(y.data);else{const v=y.error||"An unknown error occurred.";o(v),se.error(v,{autoClose:1500}),l(!0)}}catch{o("An error occurred while uploading the file."),l(!0)}},f=()=>{l(!1)};return _.jsxs(N4,{children:[_.jsx(F4,{children:"Upload CSV File"}),!e&&_.jsx(j4,{type:"file",accept:".csv",onChange:c}),e&&_.jsxs(B4,{children:[_.jsx(U4,{}),_.jsx($4,{children:e.name}),_.jsx(H4,{onClick:u})]}),_.jsx(z4,{onClick:d,children:"Upload"}),r&&_.jsx(Message,{children:r}),_.jsx(gd,{}),a&&_.jsx(A4,{message:s,onClose:f})]})},N4=I.div`
    width: 400px;
    padding: 35px;
    border: 1px solid #444;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 128, 255, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(135deg, rgba(10, 10, 30, 0.9), rgba(30, 30, 60, 0.9));
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.6);
    }
`,F4=I.h3`
    margin: 0 0 20px;
    font-size: 1.8rem;
    color: #ffffff;
    text-shadow: 0 0 10px rgba(0, 128, 255, 0.8);
`,j4=I.input`
    margin-bottom: 15px;
    border: 2px solid #666;
    border-radius: 8px;
    padding: 12px;
    width: 100%;
    font-size: 1rem;
    background-color: rgba(20, 20, 40, 0.9);
    color: #ffffff;
    transition: border-color 0.3s;

    &::placeholder {
        color: #bbb;
    }

    &:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`,z4=I.button`
    background: linear-gradient(135deg, #28a745, #21b146);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 15px 30px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s, box-shadow 0.3s;
    width: 100%;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: linear-gradient(135deg, #218838, #1e7e34);
        box-shadow: 0 0 15px rgba(40, 167, 69, 0.7);
    }
`,B4=I.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
`,$4=I.div`
    margin-left: 10px;
    font-size: 1rem;
    color: #ffffff;
`,U4=I(P4)`
    font-size: 3rem;
    color: #28a745;
`,H4=I(Pw)`
    margin-left: 10px;
    font-size: 1.5rem;
    color: #db4437;
    cursor: pointer;

    &:hover {
        color: #c13527;
    }
`;var Fw={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(t,e){(function(n,r){t.exports=r()})(Io,function n(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},i=!r.document&&!!r.postMessage,s=r.IS_PAPA_WORKER||!1,o={},a=0,l={parse:function(b,S){var T=(S=S||{}).dynamicTyping||!1;if(E(T)&&(S.dynamicTypingFunction=T,T={}),S.dynamicTyping=T,S.transform=!!E(S.transform)&&S.transform,S.worker&&l.WORKERS_SUPPORTED){var A=function(){if(!l.WORKERS_SUPPORTED)return!1;var z=(Y=r.URL||r.webkitURL||null,V=n.toString(),l.BLOB_URL||(l.BLOB_URL=Y.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",V,")();"],{type:"text/javascript"})))),U=new r.Worker(z),Y,V;return U.onmessage=g,U.id=a++,o[U.id]=U}();return A.userStep=S.step,A.userChunk=S.chunk,A.userComplete=S.complete,A.userError=S.error,S.step=E(S.step),S.chunk=E(S.chunk),S.complete=E(S.complete),S.error=E(S.error),delete S.worker,void A.postMessage({input:b,config:S,workerId:A.id})}var L=null;return l.NODE_STREAM_INPUT,typeof b=="string"?(b=function(z){return z.charCodeAt(0)===65279?z.slice(1):z}(b),L=S.download?new d(S):new h(S)):b.readable===!0&&E(b.read)&&E(b.on)?L=new p(S):(r.File&&b instanceof File||b instanceof Object)&&(L=new f(S)),L.stream(b)},unparse:function(b,S){var T=!1,A=!0,L=",",z=`\r
`,U='"',Y=U+U,V=!1,N=null,M=!1;(function(){if(typeof S=="object"){if(typeof S.delimiter!="string"||l.BAD_DELIMITERS.filter(function(D){return S.delimiter.indexOf(D)!==-1}).length||(L=S.delimiter),(typeof S.quotes=="boolean"||typeof S.quotes=="function"||Array.isArray(S.quotes))&&(T=S.quotes),typeof S.skipEmptyLines!="boolean"&&typeof S.skipEmptyLines!="string"||(V=S.skipEmptyLines),typeof S.newline=="string"&&(z=S.newline),typeof S.quoteChar=="string"&&(U=S.quoteChar),typeof S.header=="boolean"&&(A=S.header),Array.isArray(S.columns)){if(S.columns.length===0)throw new Error("Option columns is empty");N=S.columns}S.escapeChar!==void 0&&(Y=S.escapeChar+U),(typeof S.escapeFormulae=="boolean"||S.escapeFormulae instanceof RegExp)&&(M=S.escapeFormulae instanceof RegExp?S.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var R=new RegExp(v(U),"g");if(typeof b=="string"&&(b=JSON.parse(b)),Array.isArray(b)){if(!b.length||Array.isArray(b[0]))return B(null,b,V);if(typeof b[0]=="object")return B(N||Object.keys(b[0]),b,V)}else if(typeof b=="object")return typeof b.data=="string"&&(b.data=JSON.parse(b.data)),Array.isArray(b.data)&&(b.fields||(b.fields=b.meta&&b.meta.fields||N),b.fields||(b.fields=Array.isArray(b.data[0])?b.fields:typeof b.data[0]=="object"?Object.keys(b.data[0]):[]),Array.isArray(b.data[0])||typeof b.data[0]=="object"||(b.data=[b.data])),B(b.fields||[],b.data||[],V);throw new Error("Unable to serialize unrecognized input");function B(D,K,X){var Q="";typeof D=="string"&&(D=JSON.parse(D)),typeof K=="string"&&(K=JSON.parse(K));var Z=Array.isArray(D)&&0<D.length,ae=!Array.isArray(K[0]);if(Z&&A){for(var ve=0;ve<D.length;ve++)0<ve&&(Q+=L),Q+=G(D[ve],ve);0<K.length&&(Q+=z)}for(var W=0;W<K.length;W++){var le=Z?D.length:K[W].length,pe=!1,ge=Z?Object.keys(K[W]).length===0:K[W].length===0;if(X&&!Z&&(pe=X==="greedy"?K[W].join("").trim()==="":K[W].length===1&&K[W][0].length===0),X==="greedy"&&Z){for(var xe=[],rt=0;rt<le;rt++){var Be=ae?D[rt]:rt;xe.push(K[W][Be])}pe=xe.join("").trim()===""}if(!pe){for(var we=0;we<le;we++){0<we&&!ge&&(Q+=L);var nn=Z&&ae?D[we]:we;Q+=G(K[W][nn],we)}W<K.length-1&&(!X||0<le&&!ge)&&(Q+=z)}}return Q}function G(D,K){if(D==null)return"";if(D.constructor===Date)return JSON.stringify(D).slice(1,25);var X=!1;M&&typeof D=="string"&&M.test(D)&&(D="'"+D,X=!0);var Q=D.toString().replace(R,Y);return(X=X||T===!0||typeof T=="function"&&T(D,K)||Array.isArray(T)&&T[K]||function(Z,ae){for(var ve=0;ve<ae.length;ve++)if(-1<Z.indexOf(ae[ve]))return!0;return!1}(Q,l.BAD_DELIMITERS)||-1<Q.indexOf(L)||Q.charAt(0)===" "||Q.charAt(Q.length-1)===" ")?U+Q+U:Q}}};if(l.RECORD_SEP="",l.UNIT_SEP="",l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!i&&!!r.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=m,l.ParserHandle=y,l.NetworkStreamer=d,l.FileStreamer=f,l.StringStreamer=h,l.ReadableStreamStreamer=p,r.jQuery){var c=r.jQuery;c.fn.parse=function(b){var S=b.config||{},T=[];return this.each(function(z){if(!(c(this).prop("tagName").toUpperCase()==="INPUT"&&c(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var U=0;U<this.files.length;U++)T.push({file:this.files[U],inputElem:this,instanceConfig:c.extend({},S)})}),A(),this;function A(){if(T.length!==0){var z,U,Y,V,N=T[0];if(E(b.before)){var M=b.before(N.file,N.inputElem);if(typeof M=="object"){if(M.action==="abort")return z="AbortError",U=N.file,Y=N.inputElem,V=M.reason,void(E(b.error)&&b.error({name:z},U,Y,V));if(M.action==="skip")return void L();typeof M.config=="object"&&(N.instanceConfig=c.extend(N.instanceConfig,M.config))}else if(M==="skip")return void L()}var R=N.instanceConfig.complete;N.instanceConfig.complete=function(B){E(R)&&R(B,N.file,N.inputElem),L()},l.parse(N.file,N.instanceConfig)}else E(b.complete)&&b.complete()}function L(){T.splice(0,1),A()}}}function u(b){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(S){var T=k(S);T.chunkSize=parseInt(T.chunkSize),S.step||S.chunk||(T.chunkSize=null),this._handle=new y(T),(this._handle.streamer=this)._config=T}).call(this,b),this.parseChunk=function(S,T){if(this.isFirstChunk&&E(this._config.beforeFirstChunk)){var A=this._config.beforeFirstChunk(S);A!==void 0&&(S=A)}this.isFirstChunk=!1,this._halted=!1;var L=this._partialLine+S;this._partialLine="";var z=this._handle.parse(L,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var U=z.meta.cursor;this._finished||(this._partialLine=L.substring(U-this._baseIndex),this._baseIndex=U),z&&z.data&&(this._rowCount+=z.data.length);var Y=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(s)r.postMessage({results:z,workerId:l.WORKER_ID,finished:Y});else if(E(this._config.chunk)&&!T){if(this._config.chunk(z,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);z=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(z.data),this._completeResults.errors=this._completeResults.errors.concat(z.errors),this._completeResults.meta=z.meta),this._completed||!Y||!E(this._config.complete)||z&&z.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),Y||z&&z.meta.paused||this._nextChunk(),z}this._halted=!0},this._sendError=function(S){E(this._config.error)?this._config.error(S):s&&this._config.error&&r.postMessage({workerId:l.WORKER_ID,error:S,finished:!1})}}function d(b){var S;(b=b||{}).chunkSize||(b.chunkSize=l.RemoteChunkSize),u.call(this,b),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(T){this._input=T,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(S=new XMLHttpRequest,this._config.withCredentials&&(S.withCredentials=this._config.withCredentials),i||(S.onload=C(this._chunkLoaded,this),S.onerror=C(this._chunkError,this)),S.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var T=this._config.downloadRequestHeaders;for(var A in T)S.setRequestHeader(A,T[A])}if(this._config.chunkSize){var L=this._start+this._config.chunkSize-1;S.setRequestHeader("Range","bytes="+this._start+"-"+L)}try{S.send(this._config.downloadRequestBody)}catch(z){this._chunkError(z.message)}i&&S.status===0&&this._chunkError()}},this._chunkLoaded=function(){S.readyState===4&&(S.status<200||400<=S.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:S.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(T){var A=T.getResponseHeader("Content-Range");return A===null?-1:parseInt(A.substring(A.lastIndexOf("/")+1))}(S),this.parseChunk(S.responseText)))},this._chunkError=function(T){var A=S.statusText||T;this._sendError(new Error(A))}}function f(b){var S,T;(b=b||{}).chunkSize||(b.chunkSize=l.LocalChunkSize),u.call(this,b);var A=typeof FileReader<"u";this.stream=function(L){this._input=L,T=L.slice||L.webkitSlice||L.mozSlice,A?((S=new FileReader).onload=C(this._chunkLoaded,this),S.onerror=C(this._chunkError,this)):S=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var L=this._input;if(this._config.chunkSize){var z=Math.min(this._start+this._config.chunkSize,this._input.size);L=T.call(L,this._start,z)}var U=S.readAsText(L,this._config.encoding);A||this._chunkLoaded({target:{result:U}})},this._chunkLoaded=function(L){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(L.target.result)},this._chunkError=function(){this._sendError(S.error)}}function h(b){var S;u.call(this,b=b||{}),this.stream=function(T){return S=T,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var T,A=this._config.chunkSize;return A?(T=S.substring(0,A),S=S.substring(A)):(T=S,S=""),this._finished=!S,this.parseChunk(T)}}}function p(b){u.call(this,b=b||{});var S=[],T=!0,A=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(L){this._input=L,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){A&&S.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),S.length?this.parseChunk(S.shift()):T=!0},this._streamData=C(function(L){try{S.push(typeof L=="string"?L:L.toString(this._config.encoding)),T&&(T=!1,this._checkIsFinished(),this.parseChunk(S.shift()))}catch(z){this._streamError(z)}},this),this._streamError=C(function(L){this._streamCleanUp(),this._sendError(L)},this),this._streamEnd=C(function(){this._streamCleanUp(),A=!0,this._streamData("")},this),this._streamCleanUp=C(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function y(b){var S,T,A,L=Math.pow(2,53),z=-L,U=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Y=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,V=this,N=0,M=0,R=!1,B=!1,G=[],D={data:[],errors:[],meta:{}};if(E(b.step)){var K=b.step;b.step=function(W){if(D=W,Z())Q();else{if(Q(),D.data.length===0)return;N+=W.data.length,b.preview&&N>b.preview?T.abort():(D.data=D.data[0],K(D,V))}}}function X(W){return b.skipEmptyLines==="greedy"?W.join("").trim()==="":W.length===1&&W[0].length===0}function Q(){return D&&A&&(ve("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),A=!1),b.skipEmptyLines&&(D.data=D.data.filter(function(W){return!X(W)})),Z()&&function(){if(!D)return;function W(pe,ge){E(b.transformHeader)&&(pe=b.transformHeader(pe,ge)),G.push(pe)}if(Array.isArray(D.data[0])){for(var le=0;Z()&&le<D.data.length;le++)D.data[le].forEach(W);D.data.splice(0,1)}else D.data.forEach(W)}(),function(){if(!D||!b.header&&!b.dynamicTyping&&!b.transform)return D;function W(pe,ge){var xe,rt=b.header?{}:[];for(xe=0;xe<pe.length;xe++){var Be=xe,we=pe[xe];b.header&&(Be=xe>=G.length?"__parsed_extra":G[xe]),b.transform&&(we=b.transform(we,Be)),we=ae(Be,we),Be==="__parsed_extra"?(rt[Be]=rt[Be]||[],rt[Be].push(we)):rt[Be]=we}return b.header&&(xe>G.length?ve("FieldMismatch","TooManyFields","Too many fields: expected "+G.length+" fields but parsed "+xe,M+ge):xe<G.length&&ve("FieldMismatch","TooFewFields","Too few fields: expected "+G.length+" fields but parsed "+xe,M+ge)),rt}var le=1;return!D.data.length||Array.isArray(D.data[0])?(D.data=D.data.map(W),le=D.data.length):D.data=W(D.data,0),b.header&&D.meta&&(D.meta.fields=G),M+=le,D}()}function Z(){return b.header&&G.length===0}function ae(W,le){return pe=W,b.dynamicTypingFunction&&b.dynamicTyping[pe]===void 0&&(b.dynamicTyping[pe]=b.dynamicTypingFunction(pe)),(b.dynamicTyping[pe]||b.dynamicTyping)===!0?le==="true"||le==="TRUE"||le!=="false"&&le!=="FALSE"&&(function(ge){if(U.test(ge)){var xe=parseFloat(ge);if(z<xe&&xe<L)return!0}return!1}(le)?parseFloat(le):Y.test(le)?new Date(le):le===""?null:le):le;var pe}function ve(W,le,pe,ge){var xe={type:W,code:le,message:pe};ge!==void 0&&(xe.row=ge),D.errors.push(xe)}this.parse=function(W,le,pe){var ge=b.quoteChar||'"';if(b.newline||(b.newline=function(Be,we){Be=Be.substring(0,1048576);var nn=new RegExp(v(we)+"([^]*?)"+v(we),"gm"),Ht=(Be=Be.replace(nn,"")).split("\r"),vn=Be.split(`
`),Ln=1<vn.length&&vn[0].length<Ht[0].length;if(Ht.length===1||Ln)return`
`;for(var Vt=0,Re=0;Re<Ht.length;Re++)Ht[Re][0]===`
`&&Vt++;return Vt>=Ht.length/2?`\r
`:"\r"}(W,ge)),A=!1,b.delimiter)E(b.delimiter)&&(b.delimiter=b.delimiter(W),D.meta.delimiter=b.delimiter);else{var xe=function(Be,we,nn,Ht,vn){var Ln,Vt,Re,He;vn=vn||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var ui=0;ui<vn.length;ui++){var me=vn[ui],rs=0,Dn=0,di=0;Re=void 0;for(var ur=new m({comments:Ht,delimiter:me,newline:we,preview:10}).parse(Be),dr=0;dr<ur.data.length;dr++)if(nn&&X(ur.data[dr]))di++;else{var fr=ur.data[dr].length;Dn+=fr,Re!==void 0?0<fr&&(rs+=Math.abs(fr-Re),Re=fr):Re=fr}0<ur.data.length&&(Dn/=ur.data.length-di),(Vt===void 0||rs<=Vt)&&(He===void 0||He<Dn)&&1.99<Dn&&(Vt=rs,Ln=me,He=Dn)}return{successful:!!(b.delimiter=Ln),bestDelimiter:Ln}}(W,b.newline,b.skipEmptyLines,b.comments,b.delimitersToGuess);xe.successful?b.delimiter=xe.bestDelimiter:(A=!0,b.delimiter=l.DefaultDelimiter),D.meta.delimiter=b.delimiter}var rt=k(b);return b.preview&&b.header&&rt.preview++,S=W,T=new m(rt),D=T.parse(S,le,pe),Q(),R?{meta:{paused:!0}}:D||{meta:{paused:!1}}},this.paused=function(){return R},this.pause=function(){R=!0,T.abort(),S=E(b.chunk)?"":S.substring(T.getCharIndex())},this.resume=function(){V.streamer._halted?(R=!1,V.streamer.parseChunk(S,!0)):setTimeout(V.resume,3)},this.aborted=function(){return B},this.abort=function(){B=!0,T.abort(),D.meta.aborted=!0,E(b.complete)&&b.complete(D),S=""}}function v(b){return b.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(b){var S,T=(b=b||{}).delimiter,A=b.newline,L=b.comments,z=b.step,U=b.preview,Y=b.fastMode,V=S=b.quoteChar===void 0||b.quoteChar===null?'"':b.quoteChar;if(b.escapeChar!==void 0&&(V=b.escapeChar),(typeof T!="string"||-1<l.BAD_DELIMITERS.indexOf(T))&&(T=","),L===T)throw new Error("Comment character same as delimiter");L===!0?L="#":(typeof L!="string"||-1<l.BAD_DELIMITERS.indexOf(L))&&(L=!1),A!==`
`&&A!=="\r"&&A!==`\r
`&&(A=`
`);var N=0,M=!1;this.parse=function(R,B,G){if(typeof R!="string")throw new Error("Input must be a string");var D=R.length,K=T.length,X=A.length,Q=L.length,Z=E(z),ae=[],ve=[],W=[],le=N=0;if(!R)return Wt();if(b.header&&!B){var pe=R.split(A)[0].split(T),ge=[],xe={},rt=!1;for(var Be in pe){var we=pe[Be];E(b.transformHeader)&&(we=b.transformHeader(we,Be));var nn=we,Ht=xe[we]||0;for(0<Ht&&(rt=!0,nn=we+"_"+Ht),xe[we]=Ht+1;ge.includes(nn);)nn=nn+"_"+Ht;ge.push(nn)}if(rt){var vn=R.split(A);vn[0]=ge.join(T),R=vn.join(A)}}if(Y||Y!==!1&&R.indexOf(S)===-1){for(var Ln=R.split(A),Vt=0;Vt<Ln.length;Vt++){if(W=Ln[Vt],N+=W.length,Vt!==Ln.length-1)N+=A.length;else if(G)return Wt();if(!L||W.substring(0,Q)!==L){if(Z){if(ae=[],di(W.split(T)),yl(),M)return Wt()}else di(W.split(T));if(U&&U<=Vt)return ae=ae.slice(0,U),Wt(!0)}}return Wt()}for(var Re=R.indexOf(T,N),He=R.indexOf(A,N),ui=new RegExp(v(V)+v(S),"g"),me=R.indexOf(S,N);;)if(R[N]!==S)if(L&&W.length===0&&R.substring(N,N+Q)===L){if(He===-1)return Wt();N=He+X,He=R.indexOf(A,N),Re=R.indexOf(T,N)}else if(Re!==-1&&(Re<He||He===-1))W.push(R.substring(N,Re)),N=Re+K,Re=R.indexOf(T,N);else{if(He===-1)break;if(W.push(R.substring(N,He)),fr(He+X),Z&&(yl(),M))return Wt();if(U&&ae.length>=U)return Wt(!0)}else for(me=N,N++;;){if((me=R.indexOf(S,me+1))===-1)return G||ve.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ae.length,index:N}),dr();if(me===D-1)return dr(R.substring(N,me).replace(ui,S));if(S!==V||R[me+1]!==V){if(S===V||me===0||R[me-1]!==V){Re!==-1&&Re<me+1&&(Re=R.indexOf(T,me+1)),He!==-1&&He<me+1&&(He=R.indexOf(A,me+1));var rs=ur(He===-1?Re:Math.min(Re,He));if(R.substr(me+1+rs,K)===T){W.push(R.substring(N,me).replace(ui,S)),R[N=me+1+rs+K]!==S&&(me=R.indexOf(S,N)),Re=R.indexOf(T,N),He=R.indexOf(A,N);break}var Dn=ur(He);if(R.substring(me+1+Dn,me+1+Dn+X)===A){if(W.push(R.substring(N,me).replace(ui,S)),fr(me+1+Dn+X),Re=R.indexOf(T,N),me=R.indexOf(S,N),Z&&(yl(),M))return Wt();if(U&&ae.length>=U)return Wt(!0);break}ve.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ae.length,index:N}),me++}}else me++}return dr();function di(Yt){ae.push(Yt),le=N}function ur(Yt){var Vm=0;if(Yt!==-1){var Dd=R.substring(me+1,Yt);Dd&&Dd.trim()===""&&(Vm=Dd.length)}return Vm}function dr(Yt){return G||(Yt===void 0&&(Yt=R.substring(N)),W.push(Yt),N=D,di(W),Z&&yl()),Wt()}function fr(Yt){N=Yt,di(W),W=[],He=R.indexOf(A,N)}function Wt(Yt){return{data:ae,errors:ve,meta:{delimiter:T,linebreak:A,aborted:M,truncated:!!Yt,cursor:le+(B||0)}}}function yl(){z(Wt()),ae=[],ve=[]}},this.abort=function(){M=!0},this.getCharIndex=function(){return N}}function g(b){var S=b.data,T=o[S.workerId],A=!1;if(S.error)T.userError(S.error,S.file);else if(S.results&&S.results.data){var L={abort:function(){A=!0,x(S.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:w,resume:w};if(E(T.userStep)){for(var z=0;z<S.results.data.length&&(T.userStep({data:S.results.data[z],errors:S.results.errors,meta:S.results.meta},L),!A);z++);delete S.results}else E(T.userChunk)&&(T.userChunk(S.results,L,S.file),delete S.results)}S.finished&&!A&&x(S.workerId,S.results)}function x(b,S){var T=o[b];E(T.userComplete)&&T.userComplete(S),T.terminate(),delete o[b]}function w(){throw new Error("Not implemented.")}function k(b){if(typeof b!="object"||b===null)return b;var S=Array.isArray(b)?[]:{};for(var T in b)S[T]=k(b[T]);return S}function C(b,S){return function(){b.apply(S,arguments)}}function E(b){return typeof b=="function"}return s&&(r.onmessage=function(b){var S=b.data;if(l.WORKER_ID===void 0&&S&&(l.WORKER_ID=S.workerId),typeof S.input=="string")r.postMessage({workerId:l.WORKER_ID,results:l.parse(S.input,S.config),finished:!0});else if(r.File&&S.input instanceof File||S.input instanceof Object){var T=l.parse(S.input,S.config);T&&r.postMessage({workerId:l.WORKER_ID,results:T,finished:!0})}}),(d.prototype=Object.create(u.prototype)).constructor=d,(f.prototype=Object.create(u.prototype)).constructor=f,(h.prototype=Object.create(h.prototype)).constructor=h,(p.prototype=Object.create(u.prototype)).constructor=p,l})})(Fw);var V4=Fw.exports;const W4=$u(V4),Y4=({csvData:t,onForecast:e})=>{const[n,r]=P.useState(""),[i,s]=P.useState([]),[o,a]=P.useState(""),[l,c]=P.useState(null),u=h=>{r(h.target.value),a("")},d=h=>{s(p=>p.includes(h)?p.filter(y=>y!==h):[...p,h]),a("")},f=async()=>{if(!n||i.length===0){a("You need to select a Column and Model to Continue");return}const h={column:n,methods:i,csvData:t};try{const p=await fetch("http://localhost:5000/api/forecast",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)});if(!p.ok)throw new Error("Network response was not ok");const y=await p.json(),v=Object.entries(y.ARIMA).map(([g,x])=>({index:g,forecast:x}));e&&e(v);const m=W4.unparse(v);c(m)}catch(p){console.error("Error in forecasting:",p)}};return _.jsxs(G4,{children:[o&&_.jsx(K4,{children:o}),_.jsx(Ey,{children:"What column do you want to forecast?"}),_.jsxs(q4,{value:n,onChange:u,children:[_.jsx("option",{value:"",children:"Select a column"}),_.jsx("option",{value:"open",children:"Open"}),_.jsx("option",{value:"high",children:"High"}),_.jsx("option",{value:"low",children:"Low"}),_.jsx("option",{value:"close",children:"Close"}),_.jsx("option",{value:"volume",children:"Volume"})]}),_.jsx(Ey,{children:"Select forecasting model(s)"}),_.jsx(X4,{children:["ARIMA","Prophet","ResNLS"].map(h=>_.jsxs(Q4,{className:i.includes(h)?"selected":"",onClick:()=>d(h),children:[_.jsx("input",{type:"checkbox",value:h,checked:i.includes(h),onChange:()=>d(h)}),_.jsxs(J4,{children:[h==="ARIMA"&&_.jsx(E4,{}),h==="Prophet"&&_.jsx(I4,{}),h==="ResNLS"&&_.jsx(O4,{})]}),_.jsx("span",{children:h})]},h))}),_.jsx(Z4,{onClick:f,children:"Forecast"})]})},G4=I.div`
  background: #1e1e2f;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
  padding: 30px;
  width: 600px;
  margin: 40px auto;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.8);
  }
`,K4=I.div`
  background-color: #e74c3c;
  color: white;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  text-align: center;
`,Ey=I.h3`
  margin-bottom: 15px;
  text-align: center;
  color: #e0e0e0;
  font-size: 20px;
`,q4=I.select`
  width: 100%;
  padding: 14px;
  margin-bottom: 20px;
  border: 1px solid #555;
  border-radius: 6px;
  background-color: #2c2c3e;
  color: #fff;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4db8ff;
    outline: none;
  }
`,X4=I.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`,Q4=I.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 90px;
  padding: 10px;
  margin: 0 5px;
  border-radius: 6px;
  background-color: #2c2c3e;
  transition: background-color 0.3s ease;

  input[type="checkbox"] {
    display: none;
  }

  span {
    margin-top: 8px;
    font-size: 16px;
    color: #fff;
  }

  &.selected {
    background-color: #4db8ff;
    color: white;

    &:hover {
      background-color: #3498db;
    }
  }

  &:hover {
    background-color: #353549;
  }
`,J4=I.div`
  font-size: 26px;
  color: #4db8ff;
`,Z4=I.button`
  width: 100%;
  padding: 14px;
  margin-top: 20px;
  background-color: #28a745;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function rl(t){return t+.5|0}const Ar=(t,e,n)=>Math.max(Math.min(t,n),e);function Do(t){return Ar(rl(t*2.55),0,255)}function Wr(t){return Ar(rl(t*255),0,255)}function Un(t){return Ar(rl(t/2.55)/100,0,1)}function Cy(t){return Ar(rl(t*100),0,100)}const Gt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},ep=[..."0123456789ABCDEF"],eO=t=>ep[t&15],tO=t=>ep[(t&240)>>4]+ep[t&15],zl=t=>(t&240)>>4===(t&15),nO=t=>zl(t.r)&&zl(t.g)&&zl(t.b)&&zl(t.a);function rO(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&Gt[t[1]]*17,g:255&Gt[t[2]]*17,b:255&Gt[t[3]]*17,a:e===5?Gt[t[4]]*17:255}:(e===7||e===9)&&(n={r:Gt[t[1]]<<4|Gt[t[2]],g:Gt[t[3]]<<4|Gt[t[4]],b:Gt[t[5]]<<4|Gt[t[6]],a:e===9?Gt[t[7]]<<4|Gt[t[8]]:255})),n}const iO=(t,e)=>t<255?e(t):"";function sO(t){var e=nO(t)?eO:tO;return t?"#"+e(t.r)+e(t.g)+e(t.b)+iO(t.a,e):void 0}const oO=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function jw(t,e,n){const r=e*Math.min(n,1-n),i=(s,o=(s+t/30)%12)=>n-r*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function aO(t,e,n){const r=(i,s=(i+t/60)%6)=>n-n*e*Math.max(Math.min(s,4-s,1),0);return[r(5),r(3),r(1)]}function lO(t,e,n){const r=jw(t,1,.5);let i;for(e+n>1&&(i=1/(e+n),e*=i,n*=i),i=0;i<3;i++)r[i]*=1-e-n,r[i]+=e;return r}function cO(t,e,n,r,i){return t===i?(e-n)/r+(e<n?6:0):e===i?(n-t)/r+2:(t-e)/r+4}function Jg(t){const n=t.r/255,r=t.g/255,i=t.b/255,s=Math.max(n,r,i),o=Math.min(n,r,i),a=(s+o)/2;let l,c,u;return s!==o&&(u=s-o,c=a>.5?u/(2-s-o):u/(s+o),l=cO(n,r,i,u,s),l=l*60+.5),[l|0,c||0,a]}function Zg(t,e,n,r){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,r)).map(Wr)}function em(t,e,n){return Zg(jw,t,e,n)}function uO(t,e,n){return Zg(lO,t,e,n)}function dO(t,e,n){return Zg(aO,t,e,n)}function zw(t){return(t%360+360)%360}function fO(t){const e=oO.exec(t);let n=255,r;if(!e)return;e[5]!==r&&(n=e[6]?Do(+e[5]):Wr(+e[5]));const i=zw(+e[2]),s=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?r=uO(i,s,o):e[1]==="hsv"?r=dO(i,s,o):r=em(i,s,o),{r:r[0],g:r[1],b:r[2],a:n}}function hO(t,e){var n=Jg(t);n[0]=zw(n[0]+e),n=em(n),t.r=n[0],t.g=n[1],t.b=n[2]}function pO(t){if(!t)return;const e=Jg(t),n=e[0],r=Cy(e[1]),i=Cy(e[2]);return t.a<255?`hsla(${n}, ${r}%, ${i}%, ${Un(t.a)})`:`hsl(${n}, ${r}%, ${i}%)`}const Ty={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Py={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function gO(){const t={},e=Object.keys(Py),n=Object.keys(Ty);let r,i,s,o,a;for(r=0;r<e.length;r++){for(o=a=e[r],i=0;i<n.length;i++)s=n[i],a=a.replace(s,Ty[s]);s=parseInt(Py[o],16),t[a]=[s>>16&255,s>>8&255,s&255]}return t}let Bl;function mO(t){Bl||(Bl=gO(),Bl.transparent=[0,0,0,0]);const e=Bl[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const yO=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function vO(t){const e=yO.exec(t);let n=255,r,i,s;if(e){if(e[7]!==r){const o=+e[7];n=e[8]?Do(o):Ar(o*255,0,255)}return r=+e[1],i=+e[3],s=+e[5],r=255&(e[2]?Do(r):Ar(r,0,255)),i=255&(e[4]?Do(i):Ar(i,0,255)),s=255&(e[6]?Do(s):Ar(s,0,255)),{r,g:i,b:s,a:n}}}function xO(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Un(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const gf=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,os=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function bO(t,e,n){const r=os(Un(t.r)),i=os(Un(t.g)),s=os(Un(t.b));return{r:Wr(gf(r+n*(os(Un(e.r))-r))),g:Wr(gf(i+n*(os(Un(e.g))-i))),b:Wr(gf(s+n*(os(Un(e.b))-s))),a:t.a+n*(e.a-t.a)}}function $l(t,e,n){if(t){let r=Jg(t);r[e]=Math.max(0,Math.min(r[e]+r[e]*n,e===0?360:1)),r=em(r),t.r=r[0],t.g=r[1],t.b=r[2]}}function Bw(t,e){return t&&Object.assign(e||{},t)}function Iy(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Wr(t[3]))):(e=Bw(t,{r:0,g:0,b:0,a:1}),e.a=Wr(e.a)),e}function _O(t){return t.charAt(0)==="r"?vO(t):fO(t)}class La{constructor(e){if(e instanceof La)return e;const n=typeof e;let r;n==="object"?r=Iy(e):n==="string"&&(r=rO(e)||mO(e)||_O(e)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=Bw(this._rgb);return e&&(e.a=Un(e.a)),e}set rgb(e){this._rgb=Iy(e)}rgbString(){return this._valid?xO(this._rgb):void 0}hexString(){return this._valid?sO(this._rgb):void 0}hslString(){return this._valid?pO(this._rgb):void 0}mix(e,n){if(e){const r=this.rgb,i=e.rgb;let s;const o=n===s?.5:n,a=2*o-1,l=r.a-i.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;s=1-c,r.r=255&c*r.r+s*i.r+.5,r.g=255&c*r.g+s*i.g+.5,r.b=255&c*r.b+s*i.b+.5,r.a=o*r.a+(1-o)*i.a,this.rgb=r}return this}interpolate(e,n){return e&&(this._rgb=bO(this._rgb,e._rgb,n)),this}clone(){return new La(this.rgb)}alpha(e){return this._rgb.a=Wr(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=rl(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return $l(this._rgb,2,e),this}darken(e){return $l(this._rgb,2,-e),this}saturate(e){return $l(this._rgb,1,e),this}desaturate(e){return $l(this._rgb,1,-e),this}rotate(e){return hO(this._rgb,e),this}}/*!
 * Chart.js v4.4.4
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */function Nn(){}const wO=(()=>{let t=0;return()=>t++})();function ue(t){return t===null||typeof t>"u"}function Oe(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function oe(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function je(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function Ot(t,e){return je(t)?t:e}function te(t,e){return typeof t>"u"?e:t}const SO=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100:+t/e,$w=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function be(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function fe(t,e,n,r){let i,s,o;if(Oe(t))for(s=t.length,i=0;i<s;i++)e.call(n,t[i],i);else if(oe(t))for(o=Object.keys(t),s=o.length,i=0;i<s;i++)e.call(n,t[o[i]],o[i])}function _u(t,e){let n,r,i,s;if(!t||!e||t.length!==e.length)return!1;for(n=0,r=t.length;n<r;++n)if(i=t[n],s=e[n],i.datasetIndex!==s.datasetIndex||i.index!==s.index)return!1;return!0}function wu(t){if(Oe(t))return t.map(wu);if(oe(t)){const e=Object.create(null),n=Object.keys(t),r=n.length;let i=0;for(;i<r;++i)e[n[i]]=wu(t[n[i]]);return e}return t}function Uw(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function kO(t,e,n,r){if(!Uw(t))return;const i=e[t],s=n[t];oe(i)&&oe(s)?Da(i,s,r):e[t]=wu(s)}function Da(t,e,n){const r=Oe(e)?e:[e],i=r.length;if(!oe(t))return t;n=n||{};const s=n.merger||kO;let o;for(let a=0;a<i;++a){if(o=r[a],!oe(o))continue;const l=Object.keys(o);for(let c=0,u=l.length;c<u;++c)s(l[c],t,o,n)}return t}function na(t,e){return Da(t,e,{merger:EO})}function EO(t,e,n){if(!Uw(t))return;const r=e[t],i=n[t];oe(r)&&oe(i)?na(r,i):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=wu(i))}const Oy={"":t=>t,x:t=>t.x,y:t=>t.y};function CO(t){const e=t.split("."),n=[];let r="";for(const i of e)r+=i,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function TO(t){const e=CO(t);return n=>{for(const r of e){if(r==="")break;n=n&&n[r]}return n}}function Xr(t,e){return(Oy[e]||(Oy[e]=TO(e)))(t)}function tm(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Na=t=>typeof t<"u",Qr=t=>typeof t=="function",Ay=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function PO(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const Pe=Math.PI,Ce=2*Pe,IO=Ce+Pe,Su=Number.POSITIVE_INFINITY,OO=Pe/180,Ue=Pe/2,fi=Pe/4,Ry=Pe*2/3,Rr=Math.log10,An=Math.sign;function ra(t,e,n){return Math.abs(t-e)<n}function My(t){const e=Math.round(t);t=ra(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(Rr(t))),r=t/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function AO(t){const e=[],n=Math.sqrt(t);let r;for(r=1;r<n;r++)t%r===0&&(e.push(r),e.push(t/r));return n===(n|0)&&e.push(n),e.sort((i,s)=>i-s).pop(),e}function Ks(t){return!isNaN(parseFloat(t))&&isFinite(t)}function RO(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function Hw(t,e,n){let r,i,s;for(r=0,i=t.length;r<i;r++)s=t[r][n],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function ln(t){return t*(Pe/180)}function nm(t){return t*(180/Pe)}function Ly(t){if(!je(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function Vw(t,e){const n=e.x-t.x,r=e.y-t.y,i=Math.sqrt(n*n+r*r);let s=Math.atan2(r,n);return s<-.5*Pe&&(s+=Ce),{angle:s,distance:i}}function tp(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function MO(t,e){return(t-e+IO)%Ce-Pe}function Rt(t){return(t%Ce+Ce)%Ce}function Fa(t,e,n,r){const i=Rt(t),s=Rt(e),o=Rt(n),a=Rt(s-i),l=Rt(o-i),c=Rt(i-s),u=Rt(i-o);return i===s||i===o||r&&s===o||a>l&&c<u}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function LO(t){return Je(t,-32768,32767)}function Wn(t,e,n,r=1e-6){return t>=Math.min(e,n)-r&&t<=Math.max(e,n)+r}function rm(t,e,n){n=n||(o=>t[o]<e);let r=t.length-1,i=0,s;for(;r-i>1;)s=i+r>>1,n(s)?i=s:r=s;return{lo:i,hi:r}}const Yn=(t,e,n,r)=>rm(t,n,r?i=>{const s=t[i][e];return s<n||s===n&&t[i+1][e]===n}:i=>t[i][e]<n),DO=(t,e,n)=>rm(t,n,r=>t[r][e]>=n);function NO(t,e,n){let r=0,i=t.length;for(;r<i&&t[r]<e;)r++;for(;i>r&&t[i-1]>n;)i--;return r>0||i<t.length?t.slice(r,i):t}const Ww=["push","pop","shift","splice","unshift"];function FO(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Ww.forEach(n=>{const r="_onData"+tm(n),i=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...s){const o=i.apply(this,s);return t._chartjs.listeners.forEach(a=>{typeof a[r]=="function"&&a[r](...s)}),o}})})}function Dy(t,e){const n=t._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(e);i!==-1&&r.splice(i,1),!(r.length>0)&&(Ww.forEach(s=>{delete t[s]}),delete t._chartjs)}function Yw(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const Gw=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function Kw(t,e){let n=[],r=!1;return function(...i){n=i,r||(r=!0,Gw.call(window,()=>{r=!1,t.apply(e,n)}))}}function jO(t,e){let n;return function(...r){return e?(clearTimeout(n),n=setTimeout(t,e,r)):t.apply(this,r),e}}const im=t=>t==="start"?"left":t==="end"?"right":"center",ot=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,zO=(t,e,n,r)=>t===(r?"left":"right")?n:t==="center"?(e+n)/2:e;function qw(t,e,n){const r=e.length;let i=0,s=r;if(t._sorted){const{iScale:o,_parsed:a}=t,l=o.axis,{min:c,max:u,minDefined:d,maxDefined:f}=o.getUserBounds();d&&(i=Je(Math.min(Yn(a,l,c).lo,n?r:Yn(e,l,o.getPixelForValue(c)).lo),0,r-1)),f?s=Je(Math.max(Yn(a,o.axis,u,!0).hi+1,n?0:Yn(e,l,o.getPixelForValue(u),!0).hi+1),i,r)-i:s=r-i}return{start:i,count:s}}function Xw(t){const{xScale:e,yScale:n,_scaleRanges:r}=t,i={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!r)return t._scaleRanges=i,!0;const s=r.xmin!==e.min||r.xmax!==e.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),s}const Ul=t=>t===0||t===1,Ny=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Ce/n)),Fy=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*Ce/n)+1,ia={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*Ue)+1,easeOutSine:t=>Math.sin(t*Ue),easeInOutSine:t=>-.5*(Math.cos(Pe*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>Ul(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>Ul(t)?t:Ny(t,.075,.3),easeOutElastic:t=>Ul(t)?t:Fy(t,.075,.3),easeInOutElastic(t){return Ul(t)?t:t<.5?.5*Ny(t*2,.1125,.45):.5+.5*Fy(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-ia.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?ia.easeInBounce(t*2)*.5:ia.easeOutBounce(t*2-1)*.5+.5};function sm(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function jy(t){return sm(t)?t:new La(t)}function mf(t){return sm(t)?t:new La(t).saturate(.5).darken(.1).hexString()}const BO=["x","y","borderWidth","radius","tension"],$O=["color","borderColor","backgroundColor"];function UO(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:$O},numbers:{type:"number",properties:BO}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function HO(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const zy=new Map;function VO(t,e){e=e||{};const n=t+JSON.stringify(e);let r=zy.get(n);return r||(r=new Intl.NumberFormat(t,e),zy.set(n,r)),r}function il(t,e,n){return VO(e,n).format(t)}const Qw={values(t){return Oe(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const r=this.chart.options.locale;let i,s=t;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(i="scientific"),s=WO(t,n)}const o=Rr(Math.abs(s)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),il(t,r,l)},logarithmic(t,e,n){if(t===0)return"0";const r=n[e].significand||t/Math.pow(10,Math.floor(Rr(t)));return[1,2,3,5,10,15].includes(r)||e>.8*n.length?Qw.numeric.call(this,t,e,n):""}};function WO(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var md={formatters:Qw};function YO(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:md.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Vi=Object.create(null),np=Object.create(null);function sa(t,e){if(!e)return t;const n=e.split(".");for(let r=0,i=n.length;r<i;++r){const s=n[r];t=t[s]||(t[s]=Object.create(null))}return t}function yf(t,e,n){return typeof e=="string"?Da(sa(t,e),n):Da(sa(t,""),e)}class GO{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,i)=>mf(i.backgroundColor),this.hoverBorderColor=(r,i)=>mf(i.borderColor),this.hoverColor=(r,i)=>mf(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return yf(this,e,n)}get(e){return sa(this,e)}describe(e,n){return yf(np,e,n)}override(e,n){return yf(Vi,e,n)}route(e,n,r,i){const s=sa(this,e),o=sa(this,r),a="_"+n;Object.defineProperties(s,{[a]:{value:s[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],c=o[i];return oe(l)?Object.assign({},c,l):te(l,c)},set(l){this[a]=l}}})}apply(e){e.forEach(n=>n(this))}}var ze=new GO({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[UO,HO,YO]);function KO(t){return!t||ue(t.size)||ue(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function ku(t,e,n,r,i){let s=e[i];return s||(s=e[i]=t.measureText(i).width,n.push(i)),s>r&&(r=s),r}function qO(t,e,n,r){r=r||{};let i=r.data=r.data||{},s=r.garbageCollect=r.garbageCollect||[];r.font!==e&&(i=r.data={},s=r.garbageCollect=[],r.font=e),t.save(),t.font=e;let o=0;const a=n.length;let l,c,u,d,f;for(l=0;l<a;l++)if(d=n[l],d!=null&&!Oe(d))o=ku(t,i,s,o,d);else if(Oe(d))for(c=0,u=d.length;c<u;c++)f=d[c],f!=null&&!Oe(f)&&(o=ku(t,i,s,o,f));t.restore();const h=s.length/2;if(h>n.length){for(l=0;l<h;l++)delete i[s[l]];s.splice(0,h)}return o}function hi(t,e,n){const r=t.currentDevicePixelRatio,i=n!==0?Math.max(n/2,.5):0;return Math.round((e-i)*r)/r+i}function By(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function rp(t,e,n,r){Jw(t,e,n,r,null)}function Jw(t,e,n,r,i){let s,o,a,l,c,u,d,f;const h=e.pointStyle,p=e.rotation,y=e.radius;let v=(p||0)*OO;if(h&&typeof h=="object"&&(s=h.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){t.save(),t.translate(n,r),t.rotate(v),t.drawImage(h,-h.width/2,-h.height/2,h.width,h.height),t.restore();return}if(!(isNaN(y)||y<=0)){switch(t.beginPath(),h){default:i?t.ellipse(n,r,i/2,y,0,0,Ce):t.arc(n,r,y,0,Ce),t.closePath();break;case"triangle":u=i?i/2:y,t.moveTo(n+Math.sin(v)*u,r-Math.cos(v)*y),v+=Ry,t.lineTo(n+Math.sin(v)*u,r-Math.cos(v)*y),v+=Ry,t.lineTo(n+Math.sin(v)*u,r-Math.cos(v)*y),t.closePath();break;case"rectRounded":c=y*.516,l=y-c,o=Math.cos(v+fi)*l,d=Math.cos(v+fi)*(i?i/2-c:l),a=Math.sin(v+fi)*l,f=Math.sin(v+fi)*(i?i/2-c:l),t.arc(n-d,r-a,c,v-Pe,v-Ue),t.arc(n+f,r-o,c,v-Ue,v),t.arc(n+d,r+a,c,v,v+Ue),t.arc(n-f,r+o,c,v+Ue,v+Pe),t.closePath();break;case"rect":if(!p){l=Math.SQRT1_2*y,u=i?i/2:l,t.rect(n-u,r-l,2*u,2*l);break}v+=fi;case"rectRot":d=Math.cos(v)*(i?i/2:y),o=Math.cos(v)*y,a=Math.sin(v)*y,f=Math.sin(v)*(i?i/2:y),t.moveTo(n-d,r-a),t.lineTo(n+f,r-o),t.lineTo(n+d,r+a),t.lineTo(n-f,r+o),t.closePath();break;case"crossRot":v+=fi;case"cross":d=Math.cos(v)*(i?i/2:y),o=Math.cos(v)*y,a=Math.sin(v)*y,f=Math.sin(v)*(i?i/2:y),t.moveTo(n-d,r-a),t.lineTo(n+d,r+a),t.moveTo(n+f,r-o),t.lineTo(n-f,r+o);break;case"star":d=Math.cos(v)*(i?i/2:y),o=Math.cos(v)*y,a=Math.sin(v)*y,f=Math.sin(v)*(i?i/2:y),t.moveTo(n-d,r-a),t.lineTo(n+d,r+a),t.moveTo(n+f,r-o),t.lineTo(n-f,r+o),v+=fi,d=Math.cos(v)*(i?i/2:y),o=Math.cos(v)*y,a=Math.sin(v)*y,f=Math.sin(v)*(i?i/2:y),t.moveTo(n-d,r-a),t.lineTo(n+d,r+a),t.moveTo(n+f,r-o),t.lineTo(n-f,r+o);break;case"line":o=i?i/2:Math.cos(v)*y,a=Math.sin(v)*y,t.moveTo(n-o,r-a),t.lineTo(n+o,r+a);break;case"dash":t.moveTo(n,r),t.lineTo(n+Math.cos(v)*(i?i/2:y),r+Math.sin(v)*y);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function Gn(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function yd(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function vd(t){t.restore()}function XO(t,e,n,r,i){if(!e)return t.lineTo(n.x,n.y);if(i==="middle"){const s=(e.x+n.x)/2;t.lineTo(s,e.y),t.lineTo(s,n.y)}else i==="after"!=!!r?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function QO(t,e,n,r){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function JO(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),ue(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function ZO(t,e,n,r,i){if(i.strikethrough||i.underline){const s=t.measureText(r),o=e-s.actualBoundingBoxLeft,a=e+s.actualBoundingBoxRight,l=n-s.actualBoundingBoxAscent,c=n+s.actualBoundingBoxDescent,u=i.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=i.decorationWidth||2,t.moveTo(o,u),t.lineTo(a,u),t.stroke()}}function eA(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Wi(t,e,n,r,i,s={}){const o=Oe(e)?e:[e],a=s.strokeWidth>0&&s.strokeColor!=="";let l,c;for(t.save(),t.font=i.string,JO(t,s),l=0;l<o.length;++l)c=o[l],s.backdrop&&eA(t,s.backdrop),a&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),ue(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(c,n,r,s.maxWidth)),t.fillText(c,n,r,s.maxWidth),ZO(t,n,r,c,s),r+=Number(i.lineHeight);t.restore()}function ja(t,e){const{x:n,y:r,w:i,h:s,radius:o}=e;t.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*Pe,Pe,!0),t.lineTo(n,r+s-o.bottomLeft),t.arc(n+o.bottomLeft,r+s-o.bottomLeft,o.bottomLeft,Pe,Ue,!0),t.lineTo(n+i-o.bottomRight,r+s),t.arc(n+i-o.bottomRight,r+s-o.bottomRight,o.bottomRight,Ue,0,!0),t.lineTo(n+i,r+o.topRight),t.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-Ue,!0),t.lineTo(n+o.topLeft,r)}const tA=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,nA=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function rA(t,e){const n=(""+t).match(tA);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const iA=t=>+t||0;function om(t,e){const n={},r=oe(e),i=r?Object.keys(e):e,s=oe(t)?r?o=>te(t[o],t[e[o]]):o=>t[o]:()=>t;for(const o of i)n[o]=iA(s(o));return n}function Zw(t){return om(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Li(t){return om(t,["topLeft","topRight","bottomLeft","bottomRight"])}function ut(t){const e=Zw(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function qe(t,e){t=t||{},e=e||ze.font;let n=te(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let r=te(t.style,e.style);r&&!(""+r).match(nA)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const i={family:te(t.family,e.family),lineHeight:rA(te(t.lineHeight,e.lineHeight),n),size:n,style:r,weight:te(t.weight,e.weight),string:""};return i.string=KO(i),i}function No(t,e,n,r){let i,s,o;for(i=0,s=t.length;i<s;++i)if(o=t[i],o!==void 0&&o!==void 0)return o}function sA(t,e,n){const{min:r,max:i}=t,s=$w(e,(i-r)/2),o=(a,l)=>n&&a===0?0:a+l;return{min:o(r,-Math.abs(s)),max:o(i,s)}}function si(t,e){return Object.assign(Object.create(t),e)}function am(t,e=[""],n,r,i=()=>t[0]){const s=n||t;typeof r>"u"&&(r=r2("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:s,_fallback:r,_getTarget:i,override:a=>am([a,...t],e,s,r)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete t[0][l],!0},get(a,l){return t2(a,l,()=>hA(l,e,t,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(a,l){return Uy(a).includes(l)},ownKeys(a){return Uy(a)},set(a,l,c){const u=a._storage||(a._storage=i());return a[l]=u[l]=c,delete a._keys,!0}})}function qs(t,e,n,r){const i={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:e2(t,r),setContext:s=>qs(t,s,n,r),override:s=>qs(t.override(s),e,n,r)};return new Proxy(i,{deleteProperty(s,o){return delete s[o],delete t[o],!0},get(s,o,a){return t2(s,o,()=>aA(s,o,a))},getOwnPropertyDescriptor(s,o){return s._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(s,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(s,o,a){return t[o]=a,delete s[o],!0}})}function e2(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:r=e.indexable,_allKeys:i=e.allKeys}=t;return{allKeys:i,scriptable:n,indexable:r,isScriptable:Qr(n)?n:()=>n,isIndexable:Qr(r)?r:()=>r}}const oA=(t,e)=>t?t+tm(e):e,lm=(t,e)=>oe(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function t2(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const r=n();return t[e]=r,r}function aA(t,e,n){const{_proxy:r,_context:i,_subProxy:s,_descriptors:o}=t;let a=r[e];return Qr(a)&&o.isScriptable(e)&&(a=lA(e,a,t,n)),Oe(a)&&a.length&&(a=cA(e,a,t,o.isIndexable)),lm(e,a)&&(a=qs(a,i,s&&s[e],o)),a}function lA(t,e,n,r){const{_proxy:i,_context:s,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let l=e(s,o||r);return a.delete(t),lm(t,l)&&(l=cm(i._scopes,i,t,l)),l}function cA(t,e,n,r){const{_proxy:i,_context:s,_subProxy:o,_descriptors:a}=n;if(typeof s.index<"u"&&r(t))return e[s.index%e.length];if(oe(e[0])){const l=e,c=i._scopes.filter(u=>u!==l);e=[];for(const u of l){const d=cm(c,i,t,u);e.push(qs(d,s,o&&o[t],a))}}return e}function n2(t,e,n){return Qr(t)?t(e,n):t}const uA=(t,e)=>t===!0?e:typeof t=="string"?Xr(e,t):void 0;function dA(t,e,n,r,i){for(const s of e){const o=uA(n,s);if(o){t.add(o);const a=n2(o._fallback,n,i);if(typeof a<"u"&&a!==n&&a!==r)return a}else if(o===!1&&typeof r<"u"&&n!==r)return null}return!1}function cm(t,e,n,r){const i=e._rootScopes,s=n2(e._fallback,n,r),o=[...t,...i],a=new Set;a.add(r);let l=$y(a,o,n,s||n,r);return l===null||typeof s<"u"&&s!==n&&(l=$y(a,o,s,l,r),l===null)?!1:am(Array.from(a),[""],i,s,()=>fA(e,n,r))}function $y(t,e,n,r,i){for(;n;)n=dA(t,e,n,r,i);return n}function fA(t,e,n){const r=t._getTarget();e in r||(r[e]={});const i=r[e];return Oe(i)&&oe(n)?n:i||{}}function hA(t,e,n,r){let i;for(const s of e)if(i=r2(oA(s,t),n),typeof i<"u")return lm(t,i)?cm(n,r,t,i):i}function r2(t,e){for(const n of e){if(!n)continue;const r=n[t];if(typeof r<"u")return r}}function Uy(t){let e=t._keys;return e||(e=t._keys=pA(t._scopes)),e}function pA(t){const e=new Set;for(const n of t)for(const r of Object.keys(n).filter(i=>!i.startsWith("_")))e.add(r);return Array.from(e)}function i2(t,e,n,r){const{iScale:i}=t,{key:s="r"}=this._parsing,o=new Array(r);let a,l,c,u;for(a=0,l=r;a<l;++a)c=a+n,u=e[c],o[a]={r:i.parse(Xr(u,s),c)};return o}const gA=Number.EPSILON||1e-14,Xs=(t,e)=>e<t.length&&!t[e].skip&&t[e],s2=t=>t==="x"?"y":"x";function mA(t,e,n,r){const i=t.skip?e:t,s=e,o=n.skip?e:n,a=tp(s,i),l=tp(o,s);let c=a/(a+l),u=l/(a+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const d=r*c,f=r*u;return{previous:{x:s.x-d*(o.x-i.x),y:s.y-d*(o.y-i.y)},next:{x:s.x+f*(o.x-i.x),y:s.y+f*(o.y-i.y)}}}function yA(t,e,n){const r=t.length;let i,s,o,a,l,c=Xs(t,0);for(let u=0;u<r-1;++u)if(l=c,c=Xs(t,u+1),!(!l||!c)){if(ra(e[u],0,gA)){n[u]=n[u+1]=0;continue}i=n[u]/e[u],s=n[u+1]/e[u],a=Math.pow(i,2)+Math.pow(s,2),!(a<=9)&&(o=3/Math.sqrt(a),n[u]=i*o*e[u],n[u+1]=s*o*e[u])}}function vA(t,e,n="x"){const r=s2(n),i=t.length;let s,o,a,l=Xs(t,0);for(let c=0;c<i;++c){if(o=a,a=l,l=Xs(t,c+1),!a)continue;const u=a[n],d=a[r];o&&(s=(u-o[n])/3,a[`cp1${n}`]=u-s,a[`cp1${r}`]=d-s*e[c]),l&&(s=(l[n]-u)/3,a[`cp2${n}`]=u+s,a[`cp2${r}`]=d+s*e[c])}}function xA(t,e="x"){const n=s2(e),r=t.length,i=Array(r).fill(0),s=Array(r);let o,a,l,c=Xs(t,0);for(o=0;o<r;++o)if(a=l,l=c,c=Xs(t,o+1),!!l){if(c){const u=c[e]-l[e];i[o]=u!==0?(c[n]-l[n])/u:0}s[o]=a?c?An(i[o-1])!==An(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}yA(t,i,s),vA(t,s,e)}function Hl(t,e,n){return Math.max(Math.min(t,n),e)}function bA(t,e){let n,r,i,s,o,a=Gn(t[0],e);for(n=0,r=t.length;n<r;++n)o=s,s=a,a=n<r-1&&Gn(t[n+1],e),s&&(i=t[n],o&&(i.cp1x=Hl(i.cp1x,e.left,e.right),i.cp1y=Hl(i.cp1y,e.top,e.bottom)),a&&(i.cp2x=Hl(i.cp2x,e.left,e.right),i.cp2y=Hl(i.cp2y,e.top,e.bottom)))}function _A(t,e,n,r,i){let s,o,a,l;if(e.spanGaps&&(t=t.filter(c=>!c.skip)),e.cubicInterpolationMode==="monotone")xA(t,i);else{let c=r?t[t.length-1]:t[0];for(s=0,o=t.length;s<o;++s)a=t[s],l=mA(c,a,t[Math.min(s+1,o-(r?0:1))%o],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}e.capBezierPoints&&bA(t,n)}function um(){return typeof window<"u"&&typeof document<"u"}function dm(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Eu(t,e,n){let r;return typeof t=="string"?(r=parseInt(t,10),t.indexOf("%")!==-1&&(r=r/100*e.parentNode[n])):r=t,r}const xd=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function wA(t,e){return xd(t).getPropertyValue(e)}const SA=["top","right","bottom","left"];function Di(t,e,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const s=SA[i];r[s]=parseFloat(t[e+"-"+s+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const kA=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function EA(t,e){const n=t.touches,r=n&&n.length?n[0]:t,{offsetX:i,offsetY:s}=r;let o=!1,a,l;if(kA(i,s,t.target))a=i,l=s;else{const c=e.getBoundingClientRect();a=r.clientX-c.left,l=r.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function vi(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:r}=e,i=xd(n),s=i.boxSizing==="border-box",o=Di(i,"padding"),a=Di(i,"border","width"),{x:l,y:c,box:u}=EA(t,n),d=o.left+(u&&a.left),f=o.top+(u&&a.top);let{width:h,height:p}=e;return s&&(h-=o.width+a.width,p-=o.height+a.height),{x:Math.round((l-d)/h*n.width/r),y:Math.round((c-f)/p*n.height/r)}}function CA(t,e,n){let r,i;if(e===void 0||n===void 0){const s=t&&dm(t);if(!s)e=t.clientWidth,n=t.clientHeight;else{const o=s.getBoundingClientRect(),a=xd(s),l=Di(a,"border","width"),c=Di(a,"padding");e=o.width-c.width-l.width,n=o.height-c.height-l.height,r=Eu(a.maxWidth,s,"clientWidth"),i=Eu(a.maxHeight,s,"clientHeight")}}return{width:e,height:n,maxWidth:r||Su,maxHeight:i||Su}}const Vl=t=>Math.round(t*10)/10;function TA(t,e,n,r){const i=xd(t),s=Di(i,"margin"),o=Eu(i.maxWidth,t,"clientWidth")||Su,a=Eu(i.maxHeight,t,"clientHeight")||Su,l=CA(t,e,n);let{width:c,height:u}=l;if(i.boxSizing==="content-box"){const f=Di(i,"border","width"),h=Di(i,"padding");c-=h.width+f.width,u-=h.height+f.height}return c=Math.max(0,c-s.width),u=Math.max(0,r?c/r:u-s.height),c=Vl(Math.min(c,o,l.maxWidth)),u=Vl(Math.min(u,a,l.maxHeight)),c&&!u&&(u=Vl(c/2)),(e!==void 0||n!==void 0)&&r&&l.height&&u>l.height&&(u=l.height,c=Vl(Math.floor(u*r))),{width:c,height:u}}function Hy(t,e,n){const r=e||1,i=Math.floor(t.height*r),s=Math.floor(t.width*r);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==r||o.height!==i||o.width!==s?(t.currentDevicePixelRatio=r,o.height=i,o.width=s,t.ctx.setTransform(r,0,0,r,0,0),!0):!1}const PA=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};um()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t}();function Vy(t,e){const n=wA(t,e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function xi(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function IA(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:r==="middle"?n<.5?t.y:e.y:r==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function OA(t,e,n,r){const i={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},o=xi(t,i,n),a=xi(i,s,n),l=xi(s,e,n),c=xi(o,a,n),u=xi(a,l,n);return xi(c,u,n)}const AA=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},RA=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function Is(t,e,n){return t?AA(e,n):RA()}function o2(t,e){let n,r;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=r)}function a2(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function l2(t){return t==="angle"?{between:Fa,compare:MO,normalize:Rt}:{between:Wn,compare:(e,n)=>e-n,normalize:e=>e}}function Wy({start:t,end:e,count:n,loop:r,style:i}){return{start:t%n,end:e%n,loop:r&&(e-t+1)%n===0,style:i}}function MA(t,e,n){const{property:r,start:i,end:s}=n,{between:o,normalize:a}=l2(r),l=e.length;let{start:c,end:u,loop:d}=t,f,h;if(d){for(c+=l,u+=l,f=0,h=l;f<h&&o(a(e[c%l][r]),i,s);++f)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:d,style:t.style}}function c2(t,e,n){if(!n)return[t];const{property:r,start:i,end:s}=n,o=e.length,{compare:a,between:l,normalize:c}=l2(r),{start:u,end:d,loop:f,style:h}=MA(t,e,n),p=[];let y=!1,v=null,m,g,x;const w=()=>l(i,x,m)&&a(i,x)!==0,k=()=>a(s,m)===0||l(s,x,m),C=()=>y||w(),E=()=>!y||k();for(let b=u,S=u;b<=d;++b)g=e[b%o],!g.skip&&(m=c(g[r]),m!==x&&(y=l(m,i,s),v===null&&C()&&(v=a(m,i)===0?b:S),v!==null&&E()&&(p.push(Wy({start:v,end:b,loop:f,count:o,style:h})),v=null),S=b,x=m));return v!==null&&p.push(Wy({start:v,end:d,loop:f,count:o,style:h})),p}function u2(t,e){const n=[],r=t.segments;for(let i=0;i<r.length;i++){const s=c2(r[i],t.points,e);s.length&&n.push(...s)}return n}function LA(t,e,n,r){let i=0,s=e-1;if(n&&!r)for(;i<e&&!t[i].skip;)i++;for(;i<e&&t[i].skip;)i++;for(i%=e,n&&(s+=i);s>i&&t[s%e].skip;)s--;return s%=e,{start:i,end:s}}function DA(t,e,n,r){const i=t.length,s=[];let o=e,a=t[e],l;for(l=e+1;l<=n;++l){const c=t[l%i];c.skip||c.stop?a.skip||(r=!1,s.push({start:e%i,end:(l-1)%i,loop:r}),e=o=c.stop?l:null):(o=l,a.skip&&(e=l)),a=c}return o!==null&&s.push({start:e%i,end:o%i,loop:r}),s}function NA(t,e){const n=t.points,r=t.options.spanGaps,i=n.length;if(!i)return[];const s=!!t._loop,{start:o,end:a}=LA(n,i,s,r);if(r===!0)return Yy(t,[{start:o,end:a,loop:s}],n,e);const l=a<o?a+i:a,c=!!t._fullLoop&&o===0&&a===i-1;return Yy(t,DA(n,o,l,c),n,e)}function Yy(t,e,n,r){return!r||!r.setContext||!n?e:FA(t,e,n,r)}function FA(t,e,n,r){const i=t._chart.getContext(),s=Gy(t.options),{_datasetIndex:o,options:{spanGaps:a}}=t,l=n.length,c=[];let u=s,d=e[0].start,f=d;function h(p,y,v,m){const g=a?-1:1;if(p!==y){for(p+=l;n[p%l].skip;)p-=g;for(;n[y%l].skip;)y+=g;p%l!==y%l&&(c.push({start:p%l,end:y%l,loop:v,style:m}),u=m,d=y%l)}}for(const p of e){d=a?d:p.start;let y=n[d%l],v;for(f=d+1;f<=p.end;f++){const m=n[f%l];v=Gy(r.setContext(si(i,{type:"segment",p0:y,p1:m,p0DataIndex:(f-1)%l,p1DataIndex:f%l,datasetIndex:o}))),jA(v,u)&&h(d,f-1,p.loop,u),y=m,u=v}d<f-1&&h(d,f-1,p.loop,u)}return c}function Gy(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function jA(t,e){if(!e)return!1;const n=[],r=function(i,s){return sm(s)?(n.includes(s)||n.push(s),n.indexOf(s)):s};return JSON.stringify(t,r)!==JSON.stringify(e,r)}/*!
 * Chart.js v4.4.4
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */class zA{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,r,i){const s=n.listeners[i],o=n.duration;s.forEach(a=>a({chart:e,initial:n.initial,numSteps:o,currentStep:Math.min(r-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Gw.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((r,i)=>{if(!r.running||!r.items.length)return;const s=r.items;let o=s.length-1,a=!1,l;for(;o>=0;--o)l=s[o],l._active?(l._total>r.duration&&(r.duration=l._total),l.tick(e),a=!0):(s[o]=s[s.length-1],s.pop());a&&(i.draw(),this._notify(i,r,e,"progress")),s.length||(r.running=!1,this._notify(i,r,e,"complete"),r.initial=!1),n+=s.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let r=n.get(e);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,r)),r}listen(e,n,r){this._getAnims(e).listeners[n].push(r)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,i)=>Math.max(r,i._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const r=n.items;let i=r.length-1;for(;i>=0;--i)r[i].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Fn=new zA;const Ky="transparent",BA={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const r=jy(t||Ky),i=r.valid&&jy(e||Ky);return i&&i.valid?i.mix(r,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class $A{constructor(e,n,r,i){const s=n[r];i=No([e.to,i,s,e.from]);const o=No([e.from,s,i]);this._active=!0,this._fn=e.fn||BA[e.type||typeof o],this._easing=ia[e.easing]||ia.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=r,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(e,n,r){if(this._active){this._notify(!1);const i=this._target[this._prop],s=r-this._start,o=this._duration-s;this._start=r,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=s,this._loop=!!e.loop,this._to=No([e.to,n,i,e.from]),this._from=No([e.from,i,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,r=this._duration,i=this._prop,s=this._from,o=this._loop,a=this._to;let l;if(this._active=s!==a&&(o||n<r),!this._active){this._target[i]=a,this._notify(!0);return}if(n<0){this._target[i]=s;return}l=n/r%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(s,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,r)=>{e.push({res:n,rej:r})})}_notify(e){const n=e?"res":"rej",r=this._promises||[];for(let i=0;i<r.length;i++)r[i][n]()}}class d2{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!oe(e))return;const n=Object.keys(ze.animation),r=this._properties;Object.getOwnPropertyNames(e).forEach(i=>{const s=e[i];if(!oe(s))return;const o={};for(const a of n)o[a]=s[a];(Oe(s.properties)&&s.properties||[i]).forEach(a=>{(a===i||!r.has(a))&&r.set(a,o)})})}_animateOptions(e,n){const r=n.options,i=HA(e,r);if(!i)return[];const s=this._createAnimations(i,r);return r.$shared&&UA(e.options.$animations,r).then(()=>{e.options=r},()=>{}),s}_createAnimations(e,n){const r=this._properties,i=[],s=e.$animations||(e.$animations={}),o=Object.keys(n),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){i.push(...this._animateOptions(e,n));continue}const u=n[c];let d=s[c];const f=r.get(c);if(d)if(f&&d.active()){d.update(f,u,a);continue}else d.cancel();if(!f||!f.duration){e[c]=u;continue}s[c]=d=new $A(f,e,c,u),i.push(d)}return i}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const r=this._createAnimations(e,n);if(r.length)return Fn.add(this._chart,r),!0}}function UA(t,e){const n=[],r=Object.keys(e);for(let i=0;i<r.length;i++){const s=t[r[i]];s&&s.active()&&n.push(s.wait())}return Promise.all(n)}function HA(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function qy(t,e){const n=t&&t.options||{},r=n.reverse,i=n.min===void 0?e:0,s=n.max===void 0?e:0;return{start:r?s:i,end:r?i:s}}function VA(t,e,n){if(n===!1)return!1;const r=qy(t,n),i=qy(e,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function WA(t){let e,n,r,i;return oe(t)?(e=t.top,n=t.right,r=t.bottom,i=t.left):e=n=r=i=t,{top:e,right:n,bottom:r,left:i,disabled:t===!1}}function f2(t,e){const n=[],r=t._getSortedDatasetMetas(e);let i,s;for(i=0,s=r.length;i<s;++i)n.push(r[i].index);return n}function Xy(t,e,n,r={}){const i=t.keys,s=r.mode==="single";let o,a,l,c;if(e!==null){for(o=0,a=i.length;o<a;++o){if(l=+i[o],l===n){if(r.all)continue;break}c=t.values[l],je(c)&&(s||e===0||An(e)===An(c))&&(e+=c)}return e}}function YA(t,e){const{iScale:n,vScale:r}=e,i=n.axis==="x"?"x":"y",s=r.axis==="x"?"x":"y",o=Object.keys(t),a=new Array(o.length);let l,c,u;for(l=0,c=o.length;l<c;++l)u=o[l],a[l]={[i]:u,[s]:t[u]};return a}function Qy(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function GA(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function KA(t){const{min:e,max:n,minDefined:r,maxDefined:i}=t.getUserBounds();return{min:r?e:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}function qA(t,e,n){const r=t[e]||(t[e]={});return r[n]||(r[n]={})}function Jy(t,e,n,r){for(const i of e.getMatchingVisibleMetas(r).reverse()){const s=t[i.index];if(n&&s>0||!n&&s<0)return i.index}return null}function Zy(t,e){const{chart:n,_cachedMeta:r}=t,i=n._stacks||(n._stacks={}),{iScale:s,vScale:o,index:a}=r,l=s.axis,c=o.axis,u=GA(s,o,r),d=e.length;let f;for(let h=0;h<d;++h){const p=e[h],{[l]:y,[c]:v}=p,m=p._stacks||(p._stacks={});f=m[c]=qA(i,u,y),f[a]=v,f._top=Jy(f,o,!0,r.type),f._bottom=Jy(f,o,!1,r.type);const g=f._visualValues||(f._visualValues={});g[a]=v}}function vf(t,e){const n=t.scales;return Object.keys(n).filter(r=>n[r].axis===e).shift()}function XA(t,e){return si(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function QA(t,e,n){return si(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function _o(t,e){const n=t.controller.index,r=t.vScale&&t.vScale.axis;if(r){e=e||t._parsed;for(const i of e){const s=i._stacks;if(!s||s[r]===void 0||s[r][n]===void 0)return;delete s[r][n],s[r]._visualValues!==void 0&&s[r]._visualValues[n]!==void 0&&delete s[r]._visualValues[n]}}}const xf=t=>t==="reset"||t==="none",e1=(t,e)=>e?t:Object.assign({},t),JA=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:f2(n,!0),values:null};class hn{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Qy(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&_o(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,r=this.getDataset(),i=(d,f,h,p)=>d==="x"?f:d==="r"?p:h,s=n.xAxisID=te(r.xAxisID,vf(e,"x")),o=n.yAxisID=te(r.yAxisID,vf(e,"y")),a=n.rAxisID=te(r.rAxisID,vf(e,"r")),l=n.indexAxis,c=n.iAxisID=i(l,s,o,a),u=n.vAxisID=i(l,o,s,a);n.xScale=this.getScaleForId(s),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&Dy(this._data,this),e._stacked&&_o(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),r=this._data;if(oe(n)){const i=this._cachedMeta;this._data=YA(n,i)}else if(r!==n){if(r){Dy(r,this);const i=this._cachedMeta;_o(i),i._parsed=[]}n&&Object.isExtensible(n)&&FO(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,r=this.getDataset();let i=!1;this._dataCheck();const s=n._stacked;n._stacked=Qy(n.vScale,n),n.stack!==r.stack&&(i=!0,_o(n),n.stack=r.stack),this._resyncElements(e),(i||s!==n._stacked)&&Zy(this,n._parsed)}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),r=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:r,_data:i}=this,{iScale:s,_stacked:o}=r,a=s.axis;let l=e===0&&n===i.length?!0:r._sorted,c=e>0&&r._parsed[e-1],u,d,f;if(this._parsing===!1)r._parsed=i,r._sorted=!0,f=i;else{Oe(i[e])?f=this.parseArrayData(r,i,e,n):oe(i[e])?f=this.parseObjectData(r,i,e,n):f=this.parsePrimitiveData(r,i,e,n);const h=()=>d[a]===null||c&&d[a]<c[a];for(u=0;u<n;++u)r._parsed[u+e]=d=f[u],l&&(h()&&(l=!1),c=d);r._sorted=l}o&&Zy(this,f)}parsePrimitiveData(e,n,r,i){const{iScale:s,vScale:o}=e,a=s.axis,l=o.axis,c=s.getLabels(),u=s===o,d=new Array(i);let f,h,p;for(f=0,h=i;f<h;++f)p=f+r,d[f]={[a]:u||s.parse(c[p],p),[l]:o.parse(n[p],p)};return d}parseArrayData(e,n,r,i){const{xScale:s,yScale:o}=e,a=new Array(i);let l,c,u,d;for(l=0,c=i;l<c;++l)u=l+r,d=n[u],a[l]={x:s.parse(d[0],u),y:o.parse(d[1],u)};return a}parseObjectData(e,n,r,i){const{xScale:s,yScale:o}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(i);let u,d,f,h;for(u=0,d=i;u<d;++u)f=u+r,h=n[f],c[u]={x:s.parse(Xr(h,a),f),y:o.parse(Xr(h,l),f)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,r){const i=this.chart,s=this._cachedMeta,o=n[e.axis],a={keys:f2(i,!0),values:n._stacks[e.axis]._visualValues};return Xy(a,o,s.index,{mode:r})}updateRangeFromParsed(e,n,r,i){const s=r[n.axis];let o=s===null?NaN:s;const a=i&&r._stacks[n.axis];i&&a&&(i.values=a,o=Xy(i,s,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,n){const r=this._cachedMeta,i=r._parsed,s=r._sorted&&e===r.iScale,o=i.length,a=this._getOtherScale(e),l=JA(n,r,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:d}=KA(a);let f,h;function p(){h=i[f];const y=h[a.axis];return!je(h[e.axis])||u>y||d<y}for(f=0;f<o&&!(!p()&&(this.updateRangeFromParsed(c,e,h,l),s));++f);if(s){for(f=o-1;f>=0;--f)if(!p()){this.updateRangeFromParsed(c,e,h,l);break}}return c}getAllParsedValues(e){const n=this._cachedMeta._parsed,r=[];let i,s,o;for(i=0,s=n.length;i<s;++i)o=n[i][e.axis],je(o)&&r.push(o);return r}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,r=n.iScale,i=n.vScale,s=this.getParsed(e);return{label:r?""+r.getLabelForValue(s[r.axis]):"",value:i?""+i.getLabelForValue(s[i.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=WA(te(this.options.clip,VA(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,r=this._cachedMeta,i=r.data||[],s=n.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||i.length-a,c=this.options.drawActiveElementsOnTop;let u;for(r.dataset&&r.dataset.draw(e,s,a,l),u=a;u<a+l;++u){const d=i[u];d.hidden||(d.active&&c?o.push(d):d.draw(e,s))}for(u=0;u<o.length;++u)o[u].draw(e,s)}getStyle(e,n){const r=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(e||0,r)}getContext(e,n,r){const i=this.getDataset();let s;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];s=o.$context||(o.$context=QA(this.getContext(),e,o)),s.parsed=this.getParsed(e),s.raw=i.data[e],s.index=s.dataIndex=e}else s=this.$context||(this.$context=XA(this.chart.getContext(),this.index)),s.dataset=i,s.index=s.datasetIndex=this.index;return s.active=!!n,s.mode=r,s}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",r){const i=n==="active",s=this._cachedDataOpts,o=e+"-"+n,a=s[o],l=this.enableOptionSharing&&Na(r);if(a)return e1(a,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,e),d=i?[`${e}Hover`,"hover",e,""]:[e,""],f=c.getOptionScopes(this.getDataset(),u),h=Object.keys(ze.elements[e]),p=()=>this.getContext(r,i,n),y=c.resolveNamedOptions(f,h,p,d);return y.$shared&&(y.$shared=l,s[o]=Object.freeze(e1(y,l))),y}_resolveAnimations(e,n,r){const i=this.chart,s=this._cachedDataOpts,o=`animation-${n}`,a=s[o];if(a)return a;let l;if(i.options.animation!==!1){const u=this.chart.config,d=u.datasetAnimationScopeKeys(this._type,n),f=u.getOptionScopes(this.getDataset(),d);l=u.createResolver(f,this.getContext(e,r,n))}const c=new d2(i,l&&l.animations);return l&&l._cacheable&&(s[o]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||xf(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const r=this.resolveDataElementOptions(e,n),i=this._sharedOptions,s=this.getSharedOptions(r),o=this.includeOptions(n,s)||s!==i;return this.updateSharedOptions(s,n,r),{sharedOptions:s,includeOptions:o}}updateElement(e,n,r,i){xf(i)?Object.assign(e,r):this._resolveAnimations(n,i).update(e,r)}updateSharedOptions(e,n,r){e&&!xf(n)&&this._resolveAnimations(void 0,n).update(e,r)}_setStyle(e,n,r,i){e.active=i;const s=this.getStyle(n,i);this._resolveAnimations(n,r,i).update(e,{options:!i&&this.getSharedOptions(s)||s})}removeHoverStyle(e,n,r){this._setStyle(e,r,"active",!1)}setHoverStyle(e,n,r){this._setStyle(e,r,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,r=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const i=r.length,s=n.length,o=Math.min(s,i);o&&this.parse(0,o),s>i?this._insertElements(i,s-i,e):s<i&&this._removeElements(s,i-s)}_insertElements(e,n,r=!0){const i=this._cachedMeta,s=i.data,o=e+n;let a;const l=c=>{for(c.length+=n,a=c.length-1;a>=o;a--)c[a]=c[a-n]};for(l(s),a=e;a<o;++a)s[a]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(e,n),r&&this.updateElements(s,e,n,"reset")}updateElements(e,n,r,i){}_removeElements(e,n){const r=this._cachedMeta;if(this._parsing){const i=r._parsed.splice(e,n);r._stacked&&_o(r,i)}r.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,r,i]=e;this[n](r,i)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",e,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}j(hn,"defaults",{}),j(hn,"datasetElementType",null),j(hn,"dataElementType",null);function ZA(t,e){if(!t._cache.$bar){const n=t.getMatchingVisibleMetas(e);let r=[];for(let i=0,s=n.length;i<s;i++)r=r.concat(n[i].controller.getAllParsedValues(t));t._cache.$bar=Yw(r.sort((i,s)=>i-s))}return t._cache.$bar}function e5(t){const e=t.iScale,n=ZA(e,t.type);let r=e._length,i,s,o,a;const l=()=>{o===32767||o===-32768||(Na(a)&&(r=Math.min(r,Math.abs(o-a)||r)),a=o)};for(i=0,s=n.length;i<s;++i)o=e.getPixelForValue(n[i]),l();for(a=void 0,i=0,s=e.ticks.length;i<s;++i)o=e.getPixelForTick(i),l();return r}function t5(t,e,n,r){const i=n.barThickness;let s,o;return ue(i)?(s=e.min*n.categoryPercentage,o=n.barPercentage):(s=i*r,o=1),{chunk:s/r,ratio:o,start:e.pixels[t]-s/2}}function n5(t,e,n,r){const i=e.pixels,s=i[t];let o=t>0?i[t-1]:null,a=t<i.length-1?i[t+1]:null;const l=n.categoryPercentage;o===null&&(o=s-(a===null?e.end-e.start:a-s)),a===null&&(a=s+s-o);const c=s-(s-Math.min(o,a))/2*l;return{chunk:Math.abs(a-o)/2*l/r,ratio:n.barPercentage,start:c}}function r5(t,e,n,r){const i=n.parse(t[0],r),s=n.parse(t[1],r),o=Math.min(i,s),a=Math.max(i,s);let l=o,c=a;Math.abs(o)>Math.abs(a)&&(l=a,c=o),e[n.axis]=c,e._custom={barStart:l,barEnd:c,start:i,end:s,min:o,max:a}}function h2(t,e,n,r){return Oe(t)?r5(t,e,n,r):e[n.axis]=n.parse(t,r),e}function t1(t,e,n,r){const i=t.iScale,s=t.vScale,o=i.getLabels(),a=i===s,l=[];let c,u,d,f;for(c=n,u=n+r;c<u;++c)f=e[c],d={},d[i.axis]=a||i.parse(o[c],c),l.push(h2(f,d,s,c));return l}function bf(t){return t&&t.barStart!==void 0&&t.barEnd!==void 0}function i5(t,e,n){return t!==0?An(t):(e.isHorizontal()?1:-1)*(e.min>=n?1:-1)}function s5(t){let e,n,r,i,s;return t.horizontal?(e=t.base>t.x,n="left",r="right"):(e=t.base<t.y,n="bottom",r="top"),e?(i="end",s="start"):(i="start",s="end"),{start:n,end:r,reverse:e,top:i,bottom:s}}function o5(t,e,n,r){let i=e.borderSkipped;const s={};if(!i){t.borderSkipped=s;return}if(i===!0){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:l,top:c,bottom:u}=s5(t);i==="middle"&&n&&(t.enableBorderRadius=!0,(n._top||0)===r?i=c:(n._bottom||0)===r?i=u:(s[n1(u,o,a,l)]=!0,i=c)),s[n1(i,o,a,l)]=!0,t.borderSkipped=s}function n1(t,e,n,r){return r?(t=a5(t,e,n),t=r1(t,n,e)):t=r1(t,e,n),t}function a5(t,e,n){return t===e?n:t===n?e:t}function r1(t,e,n){return t==="start"?e:t==="end"?n:t}function l5(t,{inflateAmount:e},n){t.inflateAmount=e==="auto"?n===1?.33:0:e}class Ec extends hn{parsePrimitiveData(e,n,r,i){return t1(e,n,r,i)}parseArrayData(e,n,r,i){return t1(e,n,r,i)}parseObjectData(e,n,r,i){const{iScale:s,vScale:o}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=s.axis==="x"?a:l,u=o.axis==="x"?a:l,d=[];let f,h,p,y;for(f=r,h=r+i;f<h;++f)y=n[f],p={},p[s.axis]=s.parse(Xr(y,c),f),d.push(h2(Xr(y,u),p,o,f));return d}updateRangeFromParsed(e,n,r,i){super.updateRangeFromParsed(e,n,r,i);const s=r._custom;s&&n===this._cachedMeta.vScale&&(e.min=Math.min(e.min,s.min),e.max=Math.max(e.max,s.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const n=this._cachedMeta,{iScale:r,vScale:i}=n,s=this.getParsed(e),o=s._custom,a=bf(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(s[i.axis]);return{label:""+r.getLabelForValue(s[r.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,e)}updateElements(e,n,r,i){const s=i==="reset",{index:o,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),c=a.isHorizontal(),u=this._getRuler(),{sharedOptions:d,includeOptions:f}=this._getSharedOptions(n,i);for(let h=n;h<n+r;h++){const p=this.getParsed(h),y=s||ue(p[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(h),v=this._calculateBarIndexPixels(h,u),m=(p._stacks||{})[a.axis],g={horizontal:c,base:y.base,enableBorderRadius:!m||bf(p._custom)||o===m._top||o===m._bottom,x:c?y.head:v.center,y:c?v.center:y.head,height:c?v.size:Math.abs(y.size),width:c?Math.abs(y.size):v.size};f&&(g.options=d||this.resolveDataElementOptions(h,e[h].active?"active":i));const x=g.options||e[h].options;o5(g,x,m,o),l5(g,x,u.ratio),this.updateElement(e[h],h,g,i)}}_getStacks(e,n){const{iScale:r}=this._cachedMeta,i=r.getMatchingVisibleMetas(this._type).filter(u=>u.controller.options.grouped),s=r.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(n),l=a&&a[r.axis],c=u=>{const d=u._parsed.find(h=>h[r.axis]===l),f=d&&d[u.vScale.axis];if(ue(f)||isNaN(f))return!0};for(const u of i)if(!(n!==void 0&&c(u))&&((s===!1||o.indexOf(u.stack)===-1||s===void 0&&u.stack===void 0)&&o.push(u.stack),u.index===e))break;return o.length||o.push(void 0),o}_getStackCount(e){return this._getStacks(void 0,e).length}_getStackIndex(e,n,r){const i=this._getStacks(e,r),s=n!==void 0?i.indexOf(n):-1;return s===-1?i.length-1:s}_getRuler(){const e=this.options,n=this._cachedMeta,r=n.iScale,i=[];let s,o;for(s=0,o=n.data.length;s<o;++s)i.push(r.getPixelForValue(this.getParsed(s)[r.axis],s));const a=e.barThickness;return{min:a||e5(n),pixels:i,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:e.grouped,ratio:a?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:n,_stacked:r,index:i},options:{base:s,minBarLength:o}}=this,a=s||0,l=this.getParsed(e),c=l._custom,u=bf(c);let d=l[n.axis],f=0,h=r?this.applyStack(n,l,r):d,p,y;h!==d&&(f=h-d,h=d),u&&(d=c.barStart,h=c.barEnd-c.barStart,d!==0&&An(d)!==An(c.barEnd)&&(f=0),f+=d);const v=!ue(s)&&!u?s:f;let m=n.getPixelForValue(v);if(this.chart.getDataVisibility(e)?p=n.getPixelForValue(f+h):p=m,y=p-m,Math.abs(y)<o){y=i5(y,n,a)*o,d===a&&(m-=y/2);const g=n.getPixelForDecimal(0),x=n.getPixelForDecimal(1),w=Math.min(g,x),k=Math.max(g,x);m=Math.max(Math.min(m,k),w),p=m+y,r&&!u&&(l._stacks[n.axis]._visualValues[i]=n.getValueForPixel(p)-n.getValueForPixel(m))}if(m===n.getPixelForValue(a)){const g=An(y)*n.getLineWidthForValue(a)/2;m+=g,y-=g}return{size:y,base:m,head:p,center:p+y/2}}_calculateBarIndexPixels(e,n){const r=n.scale,i=this.options,s=i.skipNull,o=te(i.maxBarThickness,1/0);let a,l;if(n.grouped){const c=s?this._getStackCount(e):n.stackCount,u=i.barThickness==="flex"?n5(e,n,i,c):t5(e,n,i,c),d=this._getStackIndex(this.index,this._cachedMeta.stack,s?e:void 0);a=u.start+u.chunk*d+u.chunk/2,l=Math.min(o,u.chunk*u.ratio)}else a=r.getPixelForValue(this.getParsed(e)[r.axis],e),l=Math.min(o,n.min*n.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const e=this._cachedMeta,n=e.vScale,r=e.data,i=r.length;let s=0;for(;s<i;++s)this.getParsed(s)[n.axis]!==null&&!r[s].hidden&&r[s].draw(this._ctx)}}j(Ec,"id","bar"),j(Ec,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),j(Ec,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Cc extends hn{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(e,n,r,i){const s=super.parsePrimitiveData(e,n,r,i);for(let o=0;o<s.length;o++)s[o]._custom=this.resolveDataElementOptions(o+r).radius;return s}parseArrayData(e,n,r,i){const s=super.parseArrayData(e,n,r,i);for(let o=0;o<s.length;o++){const a=n[r+o];s[o]._custom=te(a[2],this.resolveDataElementOptions(o+r).radius)}return s}parseObjectData(e,n,r,i){const s=super.parseObjectData(e,n,r,i);for(let o=0;o<s.length;o++){const a=n[r+o];s[o]._custom=te(a&&a.r&&+a.r,this.resolveDataElementOptions(o+r).radius)}return s}getMaxOverflow(){const e=this._cachedMeta.data;let n=0;for(let r=e.length-1;r>=0;--r)n=Math.max(n,e[r].size(this.resolveDataElementOptions(r))/2);return n>0&&n}getLabelAndValue(e){const n=this._cachedMeta,r=this.chart.data.labels||[],{xScale:i,yScale:s}=n,o=this.getParsed(e),a=i.getLabelForValue(o.x),l=s.getLabelForValue(o.y),c=o._custom;return{label:r[e]||"",value:"("+a+", "+l+(c?", "+c:"")+")"}}update(e){const n=this._cachedMeta.data;this.updateElements(n,0,n.length,e)}updateElements(e,n,r,i){const s=i==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(n,i),u=o.axis,d=a.axis;for(let f=n;f<n+r;f++){const h=e[f],p=!s&&this.getParsed(f),y={},v=y[u]=s?o.getPixelForDecimal(.5):o.getPixelForValue(p[u]),m=y[d]=s?a.getBasePixel():a.getPixelForValue(p[d]);y.skip=isNaN(v)||isNaN(m),c&&(y.options=l||this.resolveDataElementOptions(f,h.active?"active":i),s&&(y.options.radius=0)),this.updateElement(h,f,y,i)}}resolveDataElementOptions(e,n){const r=this.getParsed(e);let i=super.resolveDataElementOptions(e,n);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const s=i.radius;return n!=="active"&&(i.radius=0),i.radius+=te(r&&r._custom,s),i}}j(Cc,"id","bubble"),j(Cc,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),j(Cc,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function c5(t,e,n){let r=1,i=1,s=0,o=0;if(e<Ce){const a=t,l=a+e,c=Math.cos(a),u=Math.sin(a),d=Math.cos(l),f=Math.sin(l),h=(x,w,k)=>Fa(x,a,l,!0)?1:Math.max(w,w*n,k,k*n),p=(x,w,k)=>Fa(x,a,l,!0)?-1:Math.min(w,w*n,k,k*n),y=h(0,c,d),v=h(Ue,u,f),m=p(Pe,c,d),g=p(Pe+Ue,u,f);r=(y-m)/2,i=(v-g)/2,s=-(y+m)/2,o=-(v+g)/2}return{ratioX:r,ratioY:i,offsetX:s,offsetY:o}}class Ci extends hn{constructor(e,n){super(e,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,n){const r=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=r;else{let s=l=>+r[l];if(oe(r[e])){const{key:l="value"}=this._parsing;s=c=>+Xr(r[c],l)}let o,a;for(o=e,a=e+n;o<a;++o)i._parsed[o]=s(o)}}_getRotation(){return ln(this.options.rotation-90)}_getCircumference(){return ln(this.options.circumference)}_getRotationExtents(){let e=Ce,n=-Ce;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)&&this.chart.getDatasetMeta(r).type===this._type){const i=this.chart.getDatasetMeta(r).controller,s=i._getRotation(),o=i._getCircumference();e=Math.min(e,s),n=Math.max(n,s+o)}return{rotation:e,circumference:n-e}}update(e){const n=this.chart,{chartArea:r}=n,i=this._cachedMeta,s=i.data,o=this.getMaxBorderWidth()+this.getMaxOffset(s)+this.options.spacing,a=Math.max((Math.min(r.width,r.height)-o)/2,0),l=Math.min(SO(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:u,rotation:d}=this._getRotationExtents(),{ratioX:f,ratioY:h,offsetX:p,offsetY:y}=c5(d,u,l),v=(r.width-o)/f,m=(r.height-o)/h,g=Math.max(Math.min(v,m)/2,0),x=$w(this.options.radius,g),w=Math.max(x*l,0),k=(x-w)/this._getVisibleDatasetWeightTotal();this.offsetX=p*x,this.offsetY=y*x,i.total=this.calculateTotal(),this.outerRadius=x-k*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-k*c,0),this.updateElements(s,0,s.length,e)}_circumference(e,n){const r=this.options,i=this._cachedMeta,s=this._getCircumference();return n&&r.animation.animateRotate||!this.chart.getDataVisibility(e)||i._parsed[e]===null||i.data[e].hidden?0:this.calculateCircumference(i._parsed[e]*s/Ce)}updateElements(e,n,r,i){const s=i==="reset",o=this.chart,a=o.chartArea,c=o.options.animation,u=(a.left+a.right)/2,d=(a.top+a.bottom)/2,f=s&&c.animateScale,h=f?0:this.innerRadius,p=f?0:this.outerRadius,{sharedOptions:y,includeOptions:v}=this._getSharedOptions(n,i);let m=this._getRotation(),g;for(g=0;g<n;++g)m+=this._circumference(g,s);for(g=n;g<n+r;++g){const x=this._circumference(g,s),w=e[g],k={x:u+this.offsetX,y:d+this.offsetY,startAngle:m,endAngle:m+x,circumference:x,outerRadius:p,innerRadius:h};v&&(k.options=y||this.resolveDataElementOptions(g,w.active?"active":i)),m+=x,this.updateElement(w,g,k,i)}}calculateTotal(){const e=this._cachedMeta,n=e.data;let r=0,i;for(i=0;i<n.length;i++){const s=e._parsed[i];s!==null&&!isNaN(s)&&this.chart.getDataVisibility(i)&&!n[i].hidden&&(r+=Math.abs(s))}return r}calculateCircumference(e){const n=this._cachedMeta.total;return n>0&&!isNaN(e)?Ce*(Math.abs(e)/n):0}getLabelAndValue(e){const n=this._cachedMeta,r=this.chart,i=r.data.labels||[],s=il(n._parsed[e],r.options.locale);return{label:i[e]||"",value:s}}getMaxBorderWidth(e){let n=0;const r=this.chart;let i,s,o,a,l;if(!e){for(i=0,s=r.data.datasets.length;i<s;++i)if(r.isDatasetVisible(i)){o=r.getDatasetMeta(i),e=o.data,a=o.controller;break}}if(!e)return 0;for(i=0,s=e.length;i<s;++i)l=a.resolveDataElementOptions(i),l.borderAlign!=="inner"&&(n=Math.max(n,l.borderWidth||0,l.hoverBorderWidth||0));return n}getMaxOffset(e){let n=0;for(let r=0,i=e.length;r<i;++r){const s=this.resolveDataElementOptions(r);n=Math.max(n,s.offset||0,s.hoverOffset||0)}return n}_getRingWeightOffset(e){let n=0;for(let r=0;r<e;++r)this.chart.isDatasetVisible(r)&&(n+=this._getRingWeight(r));return n}_getRingWeight(e){return Math.max(te(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}j(Ci,"id","doughnut"),j(Ci,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),j(Ci,"descriptors",{_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")}),j(Ci,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const n=e.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:r,color:i}}=e.legend.options;return n.labels.map((s,o)=>{const l=e.getDatasetMeta(0).controller.getStyle(o);return{text:s,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:i,lineWidth:l.borderWidth,pointStyle:r,hidden:!e.getDataVisibility(o),index:o}})}return[]}},onClick(e,n,r){r.chart.toggleDataVisibility(n.index),r.chart.update()}}}});class oa extends hn{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:r,data:i=[],_dataset:s}=n,o=this.chart._animationsDisabled;let{start:a,count:l}=qw(n,i,o);this._drawStart=a,this._drawCount=l,Xw(n)&&(a=0,l=i.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!s._decimated,r.points=i;const c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(r,void 0,{animated:!o,options:c},e),this.updateElements(i,a,l,e)}updateElements(e,n,r,i){const s=i==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:d}=this._getSharedOptions(n,i),f=o.axis,h=a.axis,{spanGaps:p,segment:y}=this.options,v=Ks(p)?p:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||s||i==="none",g=n+r,x=e.length;let w=n>0&&this.getParsed(n-1);for(let k=0;k<x;++k){const C=e[k],E=m?C:{};if(k<n||k>=g){E.skip=!0;continue}const b=this.getParsed(k),S=ue(b[h]),T=E[f]=o.getPixelForValue(b[f],k),A=E[h]=s||S?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,b,l):b[h],k);E.skip=isNaN(T)||isNaN(A)||S,E.stop=k>0&&Math.abs(b[f]-w[f])>v,y&&(E.parsed=b,E.raw=c.data[k]),d&&(E.options=u||this.resolveDataElementOptions(k,C.active?"active":i)),m||this.updateElement(C,k,E,i),w=b}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,r=n.options&&n.options.borderWidth||0,i=e.data||[];if(!i.length)return r;const s=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(r,s,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}j(oa,"id","line"),j(oa,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),j(oa,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class aa extends hn{constructor(e,n){super(e,n),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(e){const n=this._cachedMeta,r=this.chart,i=r.data.labels||[],s=il(n._parsed[e].r,r.options.locale);return{label:i[e]||"",value:s}}parseObjectData(e,n,r,i){return i2.bind(this)(e,n,r,i)}update(e){const n=this._cachedMeta.data;this._updateRadius(),this.updateElements(n,0,n.length,e)}getMinMax(){const e=this._cachedMeta,n={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return e.data.forEach((r,i)=>{const s=this.getParsed(i).r;!isNaN(s)&&this.chart.getDataVisibility(i)&&(s<n.min&&(n.min=s),s>n.max&&(n.max=s))}),n}_updateRadius(){const e=this.chart,n=e.chartArea,r=e.options,i=Math.min(n.right-n.left,n.bottom-n.top),s=Math.max(i/2,0),o=Math.max(r.cutoutPercentage?s/100*r.cutoutPercentage:1,0),a=(s-o)/e.getVisibleDatasetCount();this.outerRadius=s-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(e,n,r,i){const s=i==="reset",o=this.chart,l=o.options.animation,c=this._cachedMeta.rScale,u=c.xCenter,d=c.yCenter,f=c.getIndexAngle(0)-.5*Pe;let h=f,p;const y=360/this.countVisibleElements();for(p=0;p<n;++p)h+=this._computeAngle(p,i,y);for(p=n;p<n+r;p++){const v=e[p];let m=h,g=h+this._computeAngle(p,i,y),x=o.getDataVisibility(p)?c.getDistanceFromCenterForValue(this.getParsed(p).r):0;h=g,s&&(l.animateScale&&(x=0),l.animateRotate&&(m=g=f));const w={x:u,y:d,innerRadius:0,outerRadius:x,startAngle:m,endAngle:g,options:this.resolveDataElementOptions(p,v.active?"active":i)};this.updateElement(v,p,w,i)}}countVisibleElements(){const e=this._cachedMeta;let n=0;return e.data.forEach((r,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&n++}),n}_computeAngle(e,n,r){return this.chart.getDataVisibility(e)?ln(this.resolveDataElementOptions(e,n).angle||r):0}}j(aa,"id","polarArea"),j(aa,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),j(aa,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const n=e.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:r,color:i}}=e.legend.options;return n.labels.map((s,o)=>{const l=e.getDatasetMeta(0).controller.getStyle(o);return{text:s,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:i,lineWidth:l.borderWidth,pointStyle:r,hidden:!e.getDataVisibility(o),index:o}})}return[]}},onClick(e,n,r){r.chart.toggleDataVisibility(n.index),r.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class ip extends Ci{}j(ip,"id","pie"),j(ip,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Tc extends hn{getLabelAndValue(e){const n=this._cachedMeta.vScale,r=this.getParsed(e);return{label:n.getLabels()[e],value:""+n.getLabelForValue(r[n.axis])}}parseObjectData(e,n,r,i){return i2.bind(this)(e,n,r,i)}update(e){const n=this._cachedMeta,r=n.dataset,i=n.data||[],s=n.iScale.getLabels();if(r.points=i,e!=="resize"){const o=this.resolveDatasetElementOptions(e);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:s.length===i.length,options:o};this.updateElement(r,void 0,a,e)}this.updateElements(i,0,i.length,e)}updateElements(e,n,r,i){const s=this._cachedMeta.rScale,o=i==="reset";for(let a=n;a<n+r;a++){const l=e[a],c=this.resolveDataElementOptions(a,l.active?"active":i),u=s.getPointPositionForValue(a,this.getParsed(a).r),d=o?s.xCenter:u.x,f=o?s.yCenter:u.y,h={x:d,y:f,angle:u.angle,skip:isNaN(d)||isNaN(f),options:c};this.updateElement(l,a,h,i)}}}j(Tc,"id","radar"),j(Tc,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),j(Tc,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Pc extends hn{getLabelAndValue(e){const n=this._cachedMeta,r=this.chart.data.labels||[],{xScale:i,yScale:s}=n,o=this.getParsed(e),a=i.getLabelForValue(o.x),l=s.getLabelForValue(o.y);return{label:r[e]||"",value:"("+a+", "+l+")"}}update(e){const n=this._cachedMeta,{data:r=[]}=n,i=this.chart._animationsDisabled;let{start:s,count:o}=qw(n,r,i);if(this._drawStart=s,this._drawCount=o,Xw(n)&&(s=0,o=r.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=n;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=r;const c=this.resolveDatasetElementOptions(e);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!i,options:c},e)}else this.datasetElementType&&(delete n.dataset,this.datasetElementType=!1);this.updateElements(r,s,o,e)}addElements(){const{showLine:e}=this.options;!this.datasetElementType&&e&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(e,n,r,i){const s=i==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,u=this.resolveDataElementOptions(n,i),d=this.getSharedOptions(u),f=this.includeOptions(i,d),h=o.axis,p=a.axis,{spanGaps:y,segment:v}=this.options,m=Ks(y)?y:Number.POSITIVE_INFINITY,g=this.chart._animationsDisabled||s||i==="none";let x=n>0&&this.getParsed(n-1);for(let w=n;w<n+r;++w){const k=e[w],C=this.getParsed(w),E=g?k:{},b=ue(C[p]),S=E[h]=o.getPixelForValue(C[h],w),T=E[p]=s||b?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,C,l):C[p],w);E.skip=isNaN(S)||isNaN(T)||b,E.stop=w>0&&Math.abs(C[h]-x[h])>m,v&&(E.parsed=C,E.raw=c.data[w]),f&&(E.options=d||this.resolveDataElementOptions(w,k.active?"active":i)),g||this.updateElement(k,w,E,i),x=C}this.updateSharedOptions(d,i,u)}getMaxOverflow(){const e=this._cachedMeta,n=e.data||[];if(!this.options.showLine){let a=0;for(let l=n.length-1;l>=0;--l)a=Math.max(a,n[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const r=e.dataset,i=r.options&&r.options.borderWidth||0;if(!n.length)return i;const s=n[0].size(this.resolveDataElementOptions(0)),o=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(i,s,o)/2}}j(Pc,"id","scatter"),j(Pc,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),j(Pc,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var u5=Object.freeze({__proto__:null,BarController:Ec,BubbleController:Cc,DoughnutController:Ci,LineController:oa,PieController:ip,PolarAreaController:aa,RadarController:Tc,ScatterController:Pc});function pi(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class fm{constructor(e){j(this,"options");this.options=e||{}}static override(e){Object.assign(fm.prototype,e)}init(){}formats(){return pi()}parse(){return pi()}format(){return pi()}add(){return pi()}diff(){return pi()}startOf(){return pi()}endOf(){return pi()}}var d5={_date:fm};function f5(t,e,n,r){const{controller:i,data:s,_sorted:o}=t,a=i._cachedMeta.iScale;if(a&&e===a.axis&&e!=="r"&&o&&s.length){const l=a._reversePixels?DO:Yn;if(r){if(i._sharedOptions){const c=s[0],u=typeof c.getRange=="function"&&c.getRange(e);if(u){const d=l(s,e,n-u),f=l(s,e,n+u);return{lo:d.lo,hi:f.hi}}}}else return l(s,e,n)}return{lo:0,hi:s.length-1}}function sl(t,e,n,r,i){const s=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,l=s.length;a<l;++a){const{index:c,data:u}=s[a],{lo:d,hi:f}=f5(s[a],e,o,i);for(let h=d;h<=f;++h){const p=u[h];p.skip||r(p,c,h)}}}function h5(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(r,i){const s=e?Math.abs(r.x-i.x):0,o=n?Math.abs(r.y-i.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(o,2))}}function _f(t,e,n,r,i){const s=[];return!i&&!t.isPointInArea(e)||sl(t,n,e,function(a,l,c){!i&&!Gn(a,t.chartArea,0)||a.inRange(e.x,e.y,r)&&s.push({element:a,datasetIndex:l,index:c})},!0),s}function p5(t,e,n,r){let i=[];function s(o,a,l){const{startAngle:c,endAngle:u}=o.getProps(["startAngle","endAngle"],r),{angle:d}=Vw(o,{x:e.x,y:e.y});Fa(d,c,u)&&i.push({element:o,datasetIndex:a,index:l})}return sl(t,n,e,s),i}function g5(t,e,n,r,i,s){let o=[];const a=h5(n);let l=Number.POSITIVE_INFINITY;function c(u,d,f){const h=u.inRange(e.x,e.y,i);if(r&&!h)return;const p=u.getCenterPoint(i);if(!(!!s||t.isPointInArea(p))&&!h)return;const v=a(e,p);v<l?(o=[{element:u,datasetIndex:d,index:f}],l=v):v===l&&o.push({element:u,datasetIndex:d,index:f})}return sl(t,n,e,c),o}function wf(t,e,n,r,i,s){return!s&&!t.isPointInArea(e)?[]:n==="r"&&!r?p5(t,e,n,i):g5(t,e,n,r,i,s)}function i1(t,e,n,r,i){const s=[],o=n==="x"?"inXRange":"inYRange";let a=!1;return sl(t,n,e,(l,c,u)=>{l[o]&&l[o](e[n],i)&&(s.push({element:l,datasetIndex:c,index:u}),a=a||l.inRange(e.x,e.y,i))}),r&&!a?[]:s}var m5={evaluateInteractionItems:sl,modes:{index(t,e,n,r){const i=vi(e,t),s=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?_f(t,i,s,r,o):wf(t,i,s,!1,r,o),l=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach(c=>{const u=a[0].index,d=c.data[u];d&&!d.skip&&l.push({element:d,datasetIndex:c.index,index:u})}),l):[]},dataset(t,e,n,r){const i=vi(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?_f(t,i,s,r,o):wf(t,i,s,!1,r,o);if(a.length>0){const l=a[0].datasetIndex,c=t.getDatasetMeta(l).data;a=[];for(let u=0;u<c.length;++u)a.push({element:c[u],datasetIndex:l,index:u})}return a},point(t,e,n,r){const i=vi(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;return _f(t,i,s,r,o)},nearest(t,e,n,r){const i=vi(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;return wf(t,i,s,n.intersect,r,o)},x(t,e,n,r){const i=vi(e,t);return i1(t,i,"x",n.intersect,r)},y(t,e,n,r){const i=vi(e,t);return i1(t,i,"y",n.intersect,r)}}};const p2=["left","top","right","bottom"];function wo(t,e){return t.filter(n=>n.pos===e)}function s1(t,e){return t.filter(n=>p2.indexOf(n.pos)===-1&&n.box.axis===e)}function So(t,e){return t.sort((n,r)=>{const i=e?r:n,s=e?n:r;return i.weight===s.weight?i.index-s.index:i.weight-s.weight})}function y5(t){const e=[];let n,r,i,s,o,a;for(n=0,r=(t||[]).length;n<r;++n)i=t[n],{position:s,options:{stack:o,stackWeight:a=1}}=i,e.push({index:n,box:i,pos:s,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&s+o,stackWeight:a});return e}function v5(t){const e={};for(const n of t){const{stack:r,pos:i,stackWeight:s}=n;if(!r||!p2.includes(i))continue;const o=e[r]||(e[r]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=s}return e}function x5(t,e){const n=v5(t),{vBoxMaxWidth:r,hBoxMaxHeight:i}=e;let s,o,a;for(s=0,o=t.length;s<o;++s){a=t[s];const{fullSize:l}=a.box,c=n[a.stack],u=c&&a.stackWeight/c.weight;a.horizontal?(a.width=u?u*r:l&&e.availableWidth,a.height=i):(a.width=r,a.height=u?u*i:l&&e.availableHeight)}return n}function b5(t){const e=y5(t),n=So(e.filter(c=>c.box.fullSize),!0),r=So(wo(e,"left"),!0),i=So(wo(e,"right")),s=So(wo(e,"top"),!0),o=So(wo(e,"bottom")),a=s1(e,"x"),l=s1(e,"y");return{fullSize:n,leftAndTop:r.concat(s),rightAndBottom:i.concat(l).concat(o).concat(a),chartArea:wo(e,"chartArea"),vertical:r.concat(i).concat(l),horizontal:s.concat(o).concat(a)}}function o1(t,e,n,r){return Math.max(t[n],e[n])+Math.max(t[r],e[r])}function g2(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function _5(t,e,n,r){const{pos:i,box:s}=n,o=t.maxPadding;if(!oe(i)){n.size&&(t[i]-=n.size);const d=r[n.stack]||{size:0,count:1};d.size=Math.max(d.size,n.horizontal?s.height:s.width),n.size=d.size/d.count,t[i]+=n.size}s.getPadding&&g2(o,s.getPadding());const a=Math.max(0,e.outerWidth-o1(o,t,"left","right")),l=Math.max(0,e.outerHeight-o1(o,t,"top","bottom")),c=a!==t.w,u=l!==t.h;return t.w=a,t.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function w5(t){const e=t.maxPadding;function n(r){const i=Math.max(e[r]-t[r],0);return t[r]+=i,i}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function S5(t,e){const n=e.maxPadding;function r(i){const s={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{s[o]=Math.max(e[o],n[o])}),s}return r(t?["left","right"]:["top","bottom"])}function Fo(t,e,n,r){const i=[];let s,o,a,l,c,u;for(s=0,o=t.length,c=0;s<o;++s){a=t[s],l=a.box,l.update(a.width||e.w,a.height||e.h,S5(a.horizontal,e));const{same:d,other:f}=_5(e,n,a,r);c|=d&&i.length,u=u||f,l.fullSize||i.push(a)}return c&&Fo(i,e,n,r)||u}function Wl(t,e,n,r,i){t.top=n,t.left=e,t.right=e+r,t.bottom=n+i,t.width=r,t.height=i}function a1(t,e,n,r){const i=n.padding;let{x:s,y:o}=e;for(const a of t){const l=a.box,c=r[a.stack]||{count:1,placed:0,weight:1},u=a.stackWeight/c.weight||1;if(a.horizontal){const d=e.w*u,f=c.size||l.height;Na(c.start)&&(o=c.start),l.fullSize?Wl(l,i.left,o,n.outerWidth-i.right-i.left,f):Wl(l,e.left+c.placed,o,d,f),c.start=o,c.placed+=d,o=l.bottom}else{const d=e.h*u,f=c.size||l.width;Na(c.start)&&(s=c.start),l.fullSize?Wl(l,s,i.top,f,n.outerHeight-i.bottom-i.top):Wl(l,s,e.top+c.placed,f,d),c.start=s,c.placed+=d,s=l.right}}e.x=s,e.y=o}var lt={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,r){if(!t)return;const i=ut(t.options.layout.padding),s=Math.max(e-i.width,0),o=Math.max(n-i.height,0),a=b5(t.boxes),l=a.vertical,c=a.horizontal;fe(t.boxes,y=>{typeof y.beforeLayout=="function"&&y.beforeLayout()});const u=l.reduce((y,v)=>v.box.options&&v.box.options.display===!1?y:y+1,0)||1,d=Object.freeze({outerWidth:e,outerHeight:n,padding:i,availableWidth:s,availableHeight:o,vBoxMaxWidth:s/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},i);g2(f,ut(r));const h=Object.assign({maxPadding:f,w:s,h:o,x:i.left,y:i.top},i),p=x5(l.concat(c),d);Fo(a.fullSize,h,d,p),Fo(l,h,d,p),Fo(c,h,d,p)&&Fo(l,h,d,p),w5(h),a1(a.leftAndTop,h,d,p),h.x+=h.w,h.y+=h.h,a1(a.rightAndBottom,h,d,p),t.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h,height:h.h,width:h.w},fe(a.chartArea,y=>{const v=y.box;Object.assign(v,t.chartArea),v.update(h.w,h.h,{left:0,top:0,right:0,bottom:0})})}};class m2{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,r){}removeEventListener(e,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,r,i){return n=Math.max(0,n||e.width),r=r||e.height,{width:n,height:Math.max(0,i?Math.floor(n/i):r)}}isAttached(e){return!0}updateConfig(e){}}class k5 extends m2{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Ic="$chartjs",E5={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},l1=t=>t===null||t==="";function C5(t,e){const n=t.style,r=t.getAttribute("height"),i=t.getAttribute("width");if(t[Ic]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",l1(i)){const s=Vy(t,"width");s!==void 0&&(t.width=s)}if(l1(r))if(t.style.height==="")t.height=t.width/(e||2);else{const s=Vy(t,"height");s!==void 0&&(t.height=s)}return t}const y2=PA?{passive:!0}:!1;function T5(t,e,n){t&&t.addEventListener(e,n,y2)}function P5(t,e,n){t&&t.canvas&&t.canvas.removeEventListener(e,n,y2)}function I5(t,e){const n=E5[t.type]||t.type,{x:r,y:i}=vi(t,e);return{type:n,chart:e,native:t,x:r!==void 0?r:null,y:i!==void 0?i:null}}function Cu(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function O5(t,e,n){const r=t.canvas,i=new MutationObserver(s=>{let o=!1;for(const a of s)o=o||Cu(a.addedNodes,r),o=o&&!Cu(a.removedNodes,r);o&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function A5(t,e,n){const r=t.canvas,i=new MutationObserver(s=>{let o=!1;for(const a of s)o=o||Cu(a.removedNodes,r),o=o&&!Cu(a.addedNodes,r);o&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}const za=new Map;let c1=0;function v2(){const t=window.devicePixelRatio;t!==c1&&(c1=t,za.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function R5(t,e){za.size||window.addEventListener("resize",v2),za.set(t,e)}function M5(t){za.delete(t),za.size||window.removeEventListener("resize",v2)}function L5(t,e,n){const r=t.canvas,i=r&&dm(r);if(!i)return;const s=Kw((a,l)=>{const c=i.clientWidth;n(a,l),c<i.clientWidth&&n()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||s(c,u)});return o.observe(i),R5(t,s),o}function Sf(t,e,n){n&&n.disconnect(),e==="resize"&&M5(t)}function D5(t,e,n){const r=t.canvas,i=Kw(s=>{t.ctx!==null&&n(I5(s,t))},t);return T5(r,e,i),i}class N5 extends m2{acquireContext(e,n){const r=e&&e.getContext&&e.getContext("2d");return r&&r.canvas===e?(C5(e,n),r):null}releaseContext(e){const n=e.canvas;if(!n[Ic])return!1;const r=n[Ic].initial;["height","width"].forEach(s=>{const o=r[s];ue(o)?n.removeAttribute(s):n.setAttribute(s,o)});const i=r.style||{};return Object.keys(i).forEach(s=>{n.style[s]=i[s]}),n.width=n.width,delete n[Ic],!0}addEventListener(e,n,r){this.removeEventListener(e,n);const i=e.$proxies||(e.$proxies={}),o={attach:O5,detach:A5,resize:L5}[n]||D5;i[n]=o(e,n,r)}removeEventListener(e,n){const r=e.$proxies||(e.$proxies={}),i=r[n];if(!i)return;({attach:Sf,detach:Sf,resize:Sf}[n]||P5)(e,n,i),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,r,i){return TA(e,n,r,i)}isAttached(e){const n=e&&dm(e);return!!(n&&n.isConnected)}}function F5(t){return!um()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?k5:N5}class mn{constructor(){j(this,"x");j(this,"y");j(this,"active",!1);j(this,"options");j(this,"$animations")}tooltipPosition(e){const{x:n,y:r}=this.getProps(["x","y"],e);return{x:n,y:r}}hasValue(){return Ks(this.x)&&Ks(this.y)}getProps(e,n){const r=this.$animations;if(!n||!r)return this;const i={};return e.forEach(s=>{i[s]=r[s]&&r[s].active()?r[s]._to:this[s]}),i}}j(mn,"defaults",{}),j(mn,"defaultRoutes");function j5(t,e){const n=t.options.ticks,r=z5(t),i=Math.min(n.maxTicksLimit||r,r),s=n.major.enabled?$5(e):[],o=s.length,a=s[0],l=s[o-1],c=[];if(o>i)return U5(e,c,s,o/i),c;const u=B5(s,e,i);if(o>0){let d,f;const h=o>1?Math.round((l-a)/(o-1)):null;for(Yl(e,c,u,ue(h)?0:a-h,a),d=0,f=o-1;d<f;d++)Yl(e,c,u,s[d],s[d+1]);return Yl(e,c,u,l,ue(h)?e.length:l+h),c}return Yl(e,c,u),c}function z5(t){const e=t.options.offset,n=t._tickSize(),r=t._length/n+(e?0:1),i=t._maxLength/n;return Math.floor(Math.min(r,i))}function B5(t,e,n){const r=H5(t),i=e.length/n;if(!r)return Math.max(i,1);const s=AO(r);for(let o=0,a=s.length-1;o<a;o++){const l=s[o];if(l>i)return l}return Math.max(i,1)}function $5(t){const e=[];let n,r;for(n=0,r=t.length;n<r;n++)t[n].major&&e.push(n);return e}function U5(t,e,n,r){let i=0,s=n[0],o;for(r=Math.ceil(r),o=0;o<t.length;o++)o===s&&(e.push(t[o]),i++,s=n[i*r])}function Yl(t,e,n,r,i){const s=te(r,0),o=Math.min(te(i,t.length),t.length);let a=0,l,c,u;for(n=Math.ceil(n),i&&(l=i-r,n=l/Math.floor(l/n)),u=s;u<0;)a++,u=Math.round(s+a*n);for(c=Math.max(s,0);c<o;c++)c===u&&(e.push(t[c]),a++,u=Math.round(s+a*n))}function H5(t){const e=t.length;let n,r;if(e<2)return!1;for(r=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==r)return!1;return r}const V5=t=>t==="left"?"right":t==="right"?"left":t,u1=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,d1=(t,e)=>Math.min(e||t,t);function f1(t,e){const n=[],r=t.length/e,i=t.length;let s=0;for(;s<i;s+=r)n.push(t[Math.floor(s)]);return n}function W5(t,e,n){const r=t.ticks.length,i=Math.min(e,r-1),s=t._startPixel,o=t._endPixel,a=1e-6;let l=t.getPixelForTick(i),c;if(!(n&&(r===1?c=Math.max(l-s,o-l):e===0?c=(t.getPixelForTick(1)-l)/2:c=(l-t.getPixelForTick(i-1))/2,l+=i<e?c:-c,l<s-a||l>o+a)))return l}function Y5(t,e){fe(t,n=>{const r=n.gc,i=r.length/2;let s;if(i>e){for(s=0;s<i;++s)delete n.data[r[s]];r.splice(0,i)}})}function ko(t){return t.drawTicks?t.tickLength:0}function h1(t,e){if(!t.display)return 0;const n=qe(t.font,e),r=ut(t.padding);return(Oe(t.text)?t.text.length:1)*n.lineHeight+r.height}function G5(t,e){return si(t,{scale:e,type:"scale"})}function K5(t,e,n){return si(t,{tick:n,index:e,type:"tick"})}function q5(t,e,n){let r=im(t);return(n&&e!=="right"||!n&&e==="right")&&(r=V5(r)),r}function X5(t,e,n,r){const{top:i,left:s,bottom:o,right:a,chart:l}=t,{chartArea:c,scales:u}=l;let d=0,f,h,p;const y=o-i,v=a-s;if(t.isHorizontal()){if(h=ot(r,s,a),oe(n)){const m=Object.keys(n)[0],g=n[m];p=u[m].getPixelForValue(g)+y-e}else n==="center"?p=(c.bottom+c.top)/2+y-e:p=u1(t,n,e);f=a-s}else{if(oe(n)){const m=Object.keys(n)[0],g=n[m];h=u[m].getPixelForValue(g)-v+e}else n==="center"?h=(c.left+c.right)/2-v+e:h=u1(t,n,e);p=ot(r,o,i),d=n==="left"?-Ue:Ue}return{titleX:h,titleY:p,maxWidth:f,rotation:d}}class ts extends mn{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:r,_suggestedMax:i}=this;return e=Ot(e,Number.POSITIVE_INFINITY),n=Ot(n,Number.NEGATIVE_INFINITY),r=Ot(r,Number.POSITIVE_INFINITY),i=Ot(i,Number.NEGATIVE_INFINITY),{min:Ot(e,r),max:Ot(n,i),minDefined:je(e),maxDefined:je(n)}}getMinMax(e){let{min:n,max:r,minDefined:i,maxDefined:s}=this.getUserBounds(),o;if(i&&s)return{min:n,max:r};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,e),i||(n=Math.min(n,o.min)),s||(r=Math.max(r,o.max));return n=s&&n>r?r:n,r=i&&n>r?n:r,{min:Ot(n,Ot(r,n)),max:Ot(r,Ot(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){be(this.options.beforeUpdate,[this])}update(e,n,r){const{beginAtZero:i,grace:s,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=sA(this,s,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?f1(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=j5(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,e=!e),this._startPixel=n,this._endPixel=r,this._reversePixels=e,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){be(this.options.afterUpdate,[this])}beforeSetDimensions(){be(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){be(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),be(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){be(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let r,i,s;for(r=0,i=e.length;r<i;r++)s=e[r],s.label=be(n.callback,[s.value,r,e],this)}afterTickToLabelConversion(){be(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){be(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,r=d1(this.ticks.length,e.ticks.maxTicksLimit),i=n.minRotation||0,s=n.maxRotation;let o=i,a,l,c;if(!this._isVisible()||!n.display||i>=s||r<=1||!this.isHorizontal()){this.labelRotation=i;return}const u=this._getLabelSizes(),d=u.widest.width,f=u.highest.height,h=Je(this.chart.width-d,0,this.maxWidth);a=e.offset?this.maxWidth/r:h/(r-1),d+6>a&&(a=h/(r-(e.offset?.5:1)),l=this.maxHeight-ko(e.grid)-n.padding-h1(e.title,this.chart.options.font),c=Math.sqrt(d*d+f*f),o=nm(Math.min(Math.asin(Je((u.highest.height+6)/a,-1,1)),Math.asin(Je(l/c,-1,1))-Math.asin(Je(f/c,-1,1)))),o=Math.max(i,Math.min(s,o))),this.labelRotation=o}afterCalculateLabelRotation(){be(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){be(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:r,title:i,grid:s}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=h1(i,n.options.font);if(a?(e.width=this.maxWidth,e.height=ko(s)+l):(e.height=this.maxHeight,e.width=ko(s)+l),r.display&&this.ticks.length){const{first:c,last:u,widest:d,highest:f}=this._getLabelSizes(),h=r.padding*2,p=ln(this.labelRotation),y=Math.cos(p),v=Math.sin(p);if(a){const m=r.mirror?0:v*d.width+y*f.height;e.height=Math.min(this.maxHeight,e.height+m+h)}else{const m=r.mirror?0:y*d.width+v*f.height;e.width=Math.min(this.maxWidth,e.width+m+h)}this._calculatePadding(c,u,v,y)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,r,i){const{ticks:{align:s,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,h=0;l?c?(f=i*e.width,h=r*n.height):(f=r*e.height,h=i*n.width):s==="start"?h=n.width:s==="end"?f=e.width:s!=="inner"&&(f=e.width/2,h=n.width/2),this.paddingLeft=Math.max((f-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((h-d+o)*this.width/(this.width-d),0)}else{let u=n.height/2,d=e.height/2;s==="start"?(u=0,d=e.height):s==="end"&&(u=n.height,d=0),this.paddingTop=u+o,this.paddingBottom=d+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){be(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,r;for(n=0,r=e.length;n<r;n++)ue(e[n].label)&&(e.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=f1(r,n)),this._labelSizes=e=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,r){const{ctx:i,_longestTextCache:s}=this,o=[],a=[],l=Math.floor(n/d1(n,r));let c=0,u=0,d,f,h,p,y,v,m,g,x,w,k;for(d=0;d<n;d+=l){if(p=e[d].label,y=this._resolveTickFontOptions(d),i.font=v=y.string,m=s[v]=s[v]||{data:{},gc:[]},g=y.lineHeight,x=w=0,!ue(p)&&!Oe(p))x=ku(i,m.data,m.gc,x,p),w=g;else if(Oe(p))for(f=0,h=p.length;f<h;++f)k=p[f],!ue(k)&&!Oe(k)&&(x=ku(i,m.data,m.gc,x,k),w+=g);o.push(x),a.push(w),c=Math.max(x,c),u=Math.max(w,u)}Y5(s,n);const C=o.indexOf(c),E=a.indexOf(u),b=S=>({width:o[S]||0,height:a[S]||0});return{first:b(0),last:b(n-1),widest:b(C),highest:b(E),widths:o,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return LO(this._alignToPixels?hi(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const r=n[e];return r.$context||(r.$context=K5(this.getContext(),e,r))}return this.$context||(this.$context=G5(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=ln(this.labelRotation),r=Math.abs(Math.cos(n)),i=Math.abs(Math.sin(n)),s=this._getLabelSizes(),o=e.autoSkipPadding||0,a=s?s.widest.width+o:0,l=s?s.highest.height+o:0;return this.isHorizontal()?l*r>a*i?a/r:l/i:l*i<a*r?l/r:a/i}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,r=this.chart,i=this.options,{grid:s,position:o,border:a}=i,l=s.offset,c=this.isHorizontal(),d=this.ticks.length+(l?1:0),f=ko(s),h=[],p=a.setContext(this.getContext()),y=p.display?p.width:0,v=y/2,m=function(V){return hi(r,V,y)};let g,x,w,k,C,E,b,S,T,A,L,z;if(o==="top")g=m(this.bottom),E=this.bottom-f,S=g-v,A=m(e.top)+v,z=e.bottom;else if(o==="bottom")g=m(this.top),A=e.top,z=m(e.bottom)-v,E=g+v,S=this.top+f;else if(o==="left")g=m(this.right),C=this.right-f,b=g-v,T=m(e.left)+v,L=e.right;else if(o==="right")g=m(this.left),T=e.left,L=m(e.right)-v,C=g+v,b=this.left+f;else if(n==="x"){if(o==="center")g=m((e.top+e.bottom)/2+.5);else if(oe(o)){const V=Object.keys(o)[0],N=o[V];g=m(this.chart.scales[V].getPixelForValue(N))}A=e.top,z=e.bottom,E=g+v,S=E+f}else if(n==="y"){if(o==="center")g=m((e.left+e.right)/2);else if(oe(o)){const V=Object.keys(o)[0],N=o[V];g=m(this.chart.scales[V].getPixelForValue(N))}C=g-v,b=C-f,T=e.left,L=e.right}const U=te(i.ticks.maxTicksLimit,d),Y=Math.max(1,Math.ceil(d/U));for(x=0;x<d;x+=Y){const V=this.getContext(x),N=s.setContext(V),M=a.setContext(V),R=N.lineWidth,B=N.color,G=M.dash||[],D=M.dashOffset,K=N.tickWidth,X=N.tickColor,Q=N.tickBorderDash||[],Z=N.tickBorderDashOffset;w=W5(this,x,l),w!==void 0&&(k=hi(r,w,R),c?C=b=T=L=k:E=S=A=z=k,h.push({tx1:C,ty1:E,tx2:b,ty2:S,x1:T,y1:A,x2:L,y2:z,width:R,color:B,borderDash:G,borderDashOffset:D,tickWidth:K,tickColor:X,tickBorderDash:Q,tickBorderDashOffset:Z}))}return this._ticksLength=d,this._borderValue=g,h}_computeLabelItems(e){const n=this.axis,r=this.options,{position:i,ticks:s}=r,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:u,mirror:d}=s,f=ko(r.grid),h=f+u,p=d?-u:h,y=-ln(this.labelRotation),v=[];let m,g,x,w,k,C,E,b,S,T,A,L,z="middle";if(i==="top")C=this.bottom-p,E=this._getXAxisLabelAlignment();else if(i==="bottom")C=this.top+p,E=this._getXAxisLabelAlignment();else if(i==="left"){const Y=this._getYAxisLabelAlignment(f);E=Y.textAlign,k=Y.x}else if(i==="right"){const Y=this._getYAxisLabelAlignment(f);E=Y.textAlign,k=Y.x}else if(n==="x"){if(i==="center")C=(e.top+e.bottom)/2+h;else if(oe(i)){const Y=Object.keys(i)[0],V=i[Y];C=this.chart.scales[Y].getPixelForValue(V)+h}E=this._getXAxisLabelAlignment()}else if(n==="y"){if(i==="center")k=(e.left+e.right)/2-h;else if(oe(i)){const Y=Object.keys(i)[0],V=i[Y];k=this.chart.scales[Y].getPixelForValue(V)}E=this._getYAxisLabelAlignment(f).textAlign}n==="y"&&(l==="start"?z="top":l==="end"&&(z="bottom"));const U=this._getLabelSizes();for(m=0,g=a.length;m<g;++m){x=a[m],w=x.label;const Y=s.setContext(this.getContext(m));b=this.getPixelForTick(m)+s.labelOffset,S=this._resolveTickFontOptions(m),T=S.lineHeight,A=Oe(w)?w.length:1;const V=A/2,N=Y.color,M=Y.textStrokeColor,R=Y.textStrokeWidth;let B=E;o?(k=b,E==="inner"&&(m===g-1?B=this.options.reverse?"left":"right":m===0?B=this.options.reverse?"right":"left":B="center"),i==="top"?c==="near"||y!==0?L=-A*T+T/2:c==="center"?L=-U.highest.height/2-V*T+T:L=-U.highest.height+T/2:c==="near"||y!==0?L=T/2:c==="center"?L=U.highest.height/2-V*T:L=U.highest.height-A*T,d&&(L*=-1),y!==0&&!Y.showLabelBackdrop&&(k+=T/2*Math.sin(y))):(C=b,L=(1-A)*T/2);let G;if(Y.showLabelBackdrop){const D=ut(Y.backdropPadding),K=U.heights[m],X=U.widths[m];let Q=L-D.top,Z=0-D.left;switch(z){case"middle":Q-=K/2;break;case"bottom":Q-=K;break}switch(E){case"center":Z-=X/2;break;case"right":Z-=X;break;case"inner":m===g-1?Z-=X:m>0&&(Z-=X/2);break}G={left:Z,top:Q,width:X+D.width,height:K+D.height,color:Y.backdropColor}}v.push({label:w,font:S,textOffset:L,options:{rotation:y,color:N,strokeColor:M,strokeWidth:R,textAlign:B,textBaseline:z,translation:[k,C],backdrop:G}})}return v}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-ln(this.labelRotation))return e==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:r,mirror:i,padding:s}}=this.options,o=this._getLabelSizes(),a=e+s,l=o.widest.width;let c,u;return n==="left"?i?(u=this.right+s,r==="near"?c="left":r==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-a,r==="near"?c="right":r==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?i?(u=this.left+s,r==="near"?c="right":r==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+a,r==="near"?c="left":r==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:r,top:i,width:s,height:o}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(r,i,s,o),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(s=>s.value===e);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(e){const n=this.options.grid,r=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let s,o;const a=(l,c,u)=>{!u.width||!u.color||(r.save(),r.lineWidth=u.width,r.strokeStyle=u.color,r.setLineDash(u.borderDash||[]),r.lineDashOffset=u.borderDashOffset,r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(c.x,c.y),r.stroke(),r.restore())};if(n.display)for(s=0,o=i.length;s<o;++s){const l=i[s];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:r,grid:i}}=this,s=r.setContext(this.getContext()),o=r.display?s.width:0;if(!o)return;const a=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,d,f;this.isHorizontal()?(c=hi(e,this.left,o)-o/2,u=hi(e,this.right,a)+a/2,d=f=l):(d=hi(e,this.top,o)-o/2,f=hi(e,this.bottom,a)+a/2,c=u=l),n.save(),n.lineWidth=s.width,n.strokeStyle=s.color,n.beginPath(),n.moveTo(c,d),n.lineTo(u,f),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const r=this.ctx,i=this._computeLabelArea();i&&yd(r,i);const s=this.getLabelItems(e);for(const o of s){const a=o.options,l=o.font,c=o.label,u=o.textOffset;Wi(r,c,0,u,l,a)}i&&vd(r)}drawTitle(){const{ctx:e,options:{position:n,title:r,reverse:i}}=this;if(!r.display)return;const s=qe(r.font),o=ut(r.padding),a=r.align;let l=s.lineHeight/2;n==="bottom"||n==="center"||oe(n)?(l+=o.bottom,Oe(r.text)&&(l+=s.lineHeight*(r.text.length-1))):l+=o.top;const{titleX:c,titleY:u,maxWidth:d,rotation:f}=X5(this,l,n,a);Wi(e,r.text,0,0,s,{color:r.color,maxWidth:d,rotation:f,textAlign:q5(a,n,i),textBaseline:"middle",translation:[c,u]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,r=te(e.grid&&e.grid.z,-1),i=te(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==ts.prototype.draw?[{z:n,draw:s=>{this.draw(s)}}]:[{z:r,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",i=[];let s,o;for(s=0,o=n.length;s<o;++s){const a=n[s];a[r]===this.id&&(!e||a.type===e)&&i.push(a)}return i}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return qe(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class Gl{constructor(e,n,r){this.type=e,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let r;Z5(n)&&(r=this.register(n));const i=this.items,s=e.id,o=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+e);return s in i||(i[s]=e,Q5(e,o,r),this.override&&ze.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const n=this.items,r=e.id,i=this.scope;r in n&&delete n[r],i&&r in ze[i]&&(delete ze[i][r],this.override&&delete Vi[r])}}function Q5(t,e,n){const r=Da(Object.create(null),[n?ze.get(n):{},ze.get(e),t.defaults]);ze.set(e,r),t.defaultRoutes&&J5(e,t.defaultRoutes),t.descriptors&&ze.describe(e,t.descriptors)}function J5(t,e){Object.keys(e).forEach(n=>{const r=n.split("."),i=r.pop(),s=[t].concat(r).join("."),o=e[n].split("."),a=o.pop(),l=o.join(".");ze.route(s,i,l,a)})}function Z5(t){return"id"in t&&"defaults"in t}class eR{constructor(){this.controllers=new Gl(hn,"datasets",!0),this.elements=new Gl(mn,"elements"),this.plugins=new Gl(Object,"plugins"),this.scales=new Gl(ts,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,r){[...n].forEach(i=>{const s=r||this._getRegistryForType(i);r||s.isForType(i)||s===this.plugins&&i.id?this._exec(e,s,i):fe(i,o=>{const a=r||this._getRegistryForType(o);this._exec(e,a,o)})})}_exec(e,n,r){const i=tm(e);be(r["before"+i],[],r),n[e](r),be(r["after"+i],[],r)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(e))return r}return this.plugins}_get(e,n,r){const i=n.get(e);if(i===void 0)throw new Error('"'+e+'" is not a registered '+r+".");return i}}var wn=new eR;class tR{constructor(){this._init=[]}notify(e,n,r,i){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const s=i?this._descriptors(e).filter(i):this._descriptors(e),o=this._notify(s,e,n,r);return n==="afterDestroy"&&(this._notify(s,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,n,r,i){i=i||{};for(const s of e){const o=s.plugin,a=o[r],l=[n,i,s.options];if(be(a,l,o)===!1&&i.cancelable)return!1}return!0}invalidate(){ue(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const r=e&&e.config,i=te(r.options&&r.options.plugins,{}),s=nR(r);return i===!1&&!n?[]:iR(e,s,i,n)}_notifyStateChanges(e){const n=this._oldCache||[],r=this._cache,i=(s,o)=>s.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(i(n,r),e,"stop"),this._notify(i(r,n),e,"start")}}function nR(t){const e={},n=[],r=Object.keys(wn.plugins.items);for(let s=0;s<r.length;s++)n.push(wn.getPlugin(r[s]));const i=t.plugins||[];for(let s=0;s<i.length;s++){const o=i[s];n.indexOf(o)===-1&&(n.push(o),e[o.id]=!0)}return{plugins:n,localIds:e}}function rR(t,e){return!e&&t===!1?null:t===!0?{}:t}function iR(t,{plugins:e,localIds:n},r,i){const s=[],o=t.getContext();for(const a of e){const l=a.id,c=rR(r[l],i);c!==null&&s.push({plugin:a,options:sR(t.config,{plugin:a,local:n[l]},c,o)})}return s}function sR(t,{plugin:e,local:n},r,i){const s=t.pluginScopeKeys(e),o=t.getOptionScopes(r,s);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function sp(t,e){const n=ze.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function oR(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function aR(t,e){return t===e?"_index_":"_value_"}function p1(t){if(t==="x"||t==="y"||t==="r")return t}function lR(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function op(t,...e){if(p1(t))return t;for(const n of e){const r=n.axis||lR(n.position)||t.length>1&&p1(t[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function g1(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function cR(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(r=>r.xAxisID===t||r.yAxisID===t);if(n.length)return g1(t,"x",n[0])||g1(t,"y",n[0])}return{}}function uR(t,e){const n=Vi[t.type]||{scales:{}},r=e.scales||{},i=sp(t.type,e),s=Object.create(null);return Object.keys(r).forEach(o=>{const a=r[o];if(!oe(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=op(o,a,cR(o,t),ze.scales[a.type]),c=aR(l,i),u=n.scales||{};s[o]=na(Object.create(null),[{axis:l},a,u[l],u[c]])}),t.data.datasets.forEach(o=>{const a=o.type||t.type,l=o.indexAxis||sp(a,e),u=(Vi[a]||{}).scales||{};Object.keys(u).forEach(d=>{const f=oR(d,l),h=o[f+"AxisID"]||f;s[h]=s[h]||Object.create(null),na(s[h],[{axis:f},r[h],u[d]])})}),Object.keys(s).forEach(o=>{const a=s[o];na(a,[ze.scales[a.type],ze.scale])}),s}function x2(t){const e=t.options||(t.options={});e.plugins=te(e.plugins,{}),e.scales=uR(t,e)}function b2(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function dR(t){return t=t||{},t.data=b2(t.data),x2(t),t}const m1=new Map,_2=new Set;function Kl(t,e){let n=m1.get(t);return n||(n=e(),m1.set(t,n),_2.add(n)),n}const Eo=(t,e,n)=>{const r=Xr(e,n);r!==void 0&&t.add(r)};class fR{constructor(e){this._config=dR(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=b2(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),x2(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Kl(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return Kl(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return Kl(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,r=this.type;return Kl(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const r=this._scopeCache;let i=r.get(e);return(!i||n)&&(i=new Map,r.set(e,i)),i}getOptionScopes(e,n,r){const{options:i,type:s}=this,o=this._cachedScopes(e,r),a=o.get(n);if(a)return a;const l=new Set;n.forEach(u=>{e&&(l.add(e),u.forEach(d=>Eo(l,e,d))),u.forEach(d=>Eo(l,i,d)),u.forEach(d=>Eo(l,Vi[s]||{},d)),u.forEach(d=>Eo(l,ze,d)),u.forEach(d=>Eo(l,np,d))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),_2.has(n)&&o.set(n,c),c}chartOptionScopes(){const{options:e,type:n}=this;return[e,Vi[n]||{},ze.datasets[n]||{},{type:n},ze,np]}resolveNamedOptions(e,n,r,i=[""]){const s={$shared:!0},{resolver:o,subPrefixes:a}=y1(this._resolverCache,e,i);let l=o;if(pR(o,n)){s.$shared=!1,r=Qr(r)?r():r;const c=this.createResolver(e,r,a);l=qs(o,r,c)}for(const c of n)s[c]=l[c];return s}createResolver(e,n,r=[""],i){const{resolver:s}=y1(this._resolverCache,e,r);return oe(n)?qs(s,n,void 0,i):s}}function y1(t,e,n){let r=t.get(e);r||(r=new Map,t.set(e,r));const i=n.join();let s=r.get(i);return s||(s={resolver:am(e,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},r.set(i,s)),s}const hR=t=>oe(t)&&Object.getOwnPropertyNames(t).some(e=>Qr(t[e]));function pR(t,e){const{isScriptable:n,isIndexable:r}=e2(t);for(const i of e){const s=n(i),o=r(i),a=(o||s)&&t[i];if(s&&(Qr(a)||hR(a))||o&&Oe(a))return!0}return!1}var gR="4.4.4";const mR=["top","bottom","left","right","chartArea"];function v1(t,e){return t==="top"||t==="bottom"||mR.indexOf(t)===-1&&e==="x"}function x1(t,e){return function(n,r){return n[t]===r[t]?n[e]-r[e]:n[t]-r[t]}}function b1(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),be(n&&n.onComplete,[t],e)}function yR(t){const e=t.chart,n=e.options.animation;be(n&&n.onProgress,[t],e)}function w2(t){return um()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Oc={},_1=t=>{const e=w2(t);return Object.values(Oc).filter(n=>n.canvas===e).pop()};function vR(t,e,n){const r=Object.keys(t);for(const i of r){const s=+i;if(s>=e){const o=t[i];delete t[i],(n>0||s>e)&&(t[s+n]=o)}}}function xR(t,e,n,r){return!n||t.type==="mouseout"?null:r?e:t}function ql(t,e,n){return t.options.clip?t[n]:e[n]}function bR(t,e){const{xScale:n,yScale:r}=t;return n&&r?{left:ql(n,e,"left"),right:ql(n,e,"right"),top:ql(r,e,"top"),bottom:ql(r,e,"bottom")}:e}var yr;let bd=(yr=class{static register(...e){wn.add(...e),w1()}static unregister(...e){wn.remove(...e),w1()}constructor(e,n){const r=this.config=new fR(n),i=w2(e),s=_1(i);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const o=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||F5(i)),this.platform.updateConfig(r);const a=this.platform.acquireContext(i,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,u=l&&l.width;if(this.id=wO(),this.ctx=a,this.canvas=l,this.width=u,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new tR,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=jO(d=>this.update(d),o.resizeDelay||0),this._dataChanges=[],Oc[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Fn.listen(this,"complete",b1),Fn.listen(this,"progress",yR),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:r,height:i,_aspectRatio:s}=this;return ue(e)?n&&s?s:i?r/i:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return wn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Hy(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return By(this.canvas,this.ctx),this}stop(){return Fn.stop(this),this}resize(e,n){Fn.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const r=this.options,i=this.canvas,s=r.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,e,n,s),a=r.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Hy(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),be(r.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};fe(n,(r,i)=>{r.id=i})}buildOrUpdateScales(){const e=this.options,n=e.scales,r=this.scales,i=Object.keys(r).reduce((o,a)=>(o[a]=!1,o),{});let s=[];n&&(s=s.concat(Object.keys(n).map(o=>{const a=n[o],l=op(o,a),c=l==="r",u=l==="x";return{options:a,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),fe(s,o=>{const a=o.options,l=a.id,c=op(l,a),u=te(a.type,o.dtype);(a.position===void 0||v1(a.position,c)!==v1(o.dposition))&&(a.position=o.dposition),i[l]=!0;let d=null;if(l in r&&r[l].type===u)d=r[l];else{const f=wn.getScale(u);d=new f({id:l,type:u,ctx:this.ctx,chart:this}),r[d.id]=d}d.init(a,e)}),fe(i,(o,a)=>{o||delete r[a]}),fe(r,o=>{lt.configure(this,o,o.options),lt.addBox(this,o)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,r=e.length;if(e.sort((i,s)=>i.index-s.index),r>n){for(let i=n;i<r;++i)this._destroyDatasetMeta(i);e.splice(n,r-n)}this._sortedMetasets=e.slice(0).sort(x1("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((r,i)=>{n.filter(s=>s===r._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let r,i;for(this._removeUnreferencedMetasets(),r=0,i=n.length;r<i;r++){const s=n[r];let o=this.getDatasetMeta(r);const a=s.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(r),o=this.getDatasetMeta(r)),o.type=a,o.indexAxis=s.indexAxis||sp(a,this.options),o.order=s.order||0,o.index=r,o.label=""+s.label,o.visible=this.isDatasetVisible(r),o.controller)o.controller.updateIndex(r),o.controller.linkScales();else{const l=wn.getController(a),{datasetElementType:c,dataElementType:u}=ze.datasets[a];Object.assign(l,{dataElementType:wn.getElement(u),datasetElementType:c&&wn.getElement(c)}),o.controller=new l(this,r),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){fe(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:d}=this.getDatasetMeta(c),f=!i&&s.indexOf(d)===-1;d.buildOrUpdateElements(f),o=Math.max(+d.getMaxOverflow(),o)}o=this._minPadding=r.layout.autoPadding?o:0,this._updateLayout(o),i||fe(s,c=>{c.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(x1("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){fe(this.scales,e=>{lt.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(e.events);(!Ay(n,r)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:i,count:s}of n){const o=r==="_removeElements"?-s:s;vR(e,i,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=s=>new Set(e.filter(o=>o[0]===s).map((o,a)=>a+","+o.splice(1).join(","))),i=r(0);for(let s=1;s<n;s++)if(!Ay(i,r(s)))return;return Array.from(i).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;lt.update(this,this.width,this.height,e);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],fe(this.boxes,i=>{r&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,s)=>{i._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,Qr(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const r=this.getDatasetMeta(e),i={meta:r,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(r.controller._update(n),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Fn.has(this)?this.attached&&!Fn.running(this)&&Fn.start(this):(this.draw(),b1({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:r,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,r=[];let i,s;for(i=0,s=n.length;i<s;++i){const o=n[i];(!e||o.visible)&&r.push(o)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,r=e._clip,i=!r.disabled,s=bR(e,this.chartArea),o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(i&&yd(n,{left:r.left===!1?0:s.left-r.left,right:r.right===!1?this.width:s.right+r.right,top:r.top===!1?0:s.top-r.top,bottom:r.bottom===!1?this.height:s.bottom+r.bottom}),e.controller.draw(),i&&vd(n),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return Gn(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,r,i){const s=m5.modes[n];return typeof s=="function"?s(this,e,r,i):[]}getDatasetMeta(e){const n=this.data.datasets[e],r=this._metasets;let i=r.filter(s=>s&&s._dataset===n).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},r.push(i)),i}getContext(){return this.$context||(this.$context=si(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const r=this.getDatasetMeta(e);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(e,n){const r=this.getDatasetMeta(e);r.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,r){const i=r?"show":"hide",s=this.getDatasetMeta(e),o=s.controller._resolveAnimations(void 0,i);Na(n)?(s.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(e,r),o.update(s,{visible:r}),this.update(a=>a.datasetIndex===e?i:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),Fn.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),By(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Oc[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,r=(s,o)=>{n.addEventListener(this,s,o),e[s]=o},i=(s,o,a)=>{s.offsetX=o,s.offsetY=a,this._eventHandler(s)};fe(this.options.events,s=>r(s,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,r=(l,c)=>{n.addEventListener(this,l,c),e[l]=c},i=(l,c)=>{e[l]&&(n.removeEventListener(this,l,c),delete e[l])},s=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{i("attach",a),this.attached=!0,this.resize(),r("resize",s),r("detach",o)};o=()=>{this.attached=!1,i("resize",s),this._stop(),this._resize(0,0),r("attach",a)},n.isAttached(this.canvas)?a():o()}unbindEvents(){fe(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},fe(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,r){const i=r?"set":"remove";let s,o,a,l;for(n==="dataset"&&(s=this.getDatasetMeta(e[0].datasetIndex),s.controller["_"+i+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){o=e[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],r=e.map(({datasetIndex:s,index:o})=>{const a=this.getDatasetMeta(s);if(!a)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:a.data[o],index:o}});!_u(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(e,n,r){return this._plugins.notify(this,e,n,r)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,r){const i=this.options.hover,s=(l,c)=>l.filter(u=>!c.some(d=>u.datasetIndex===d.datasetIndex&&u.index===d.index)),o=s(n,e),a=r?e:s(e,n);o.length&&this.updateHoverStyle(o,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(e,n){const r={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},i=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",r,i)===!1)return;const s=this._handleEvent(e,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,i),(s||r.changed)&&this.render(),this}_handleEvent(e,n,r){const{_active:i=[],options:s}=this,o=n,a=this._getActiveElements(e,i,r,o),l=PO(e),c=xR(e,this._lastEvent,r,l);r&&(this._lastEvent=null,be(s.onHover,[e,a,this],this),l&&be(s.onClick,[e,a,this],this));const u=!_u(a,i);return(u||n)&&(this._active=a,this._updateHoverStyles(a,i,n)),this._lastEvent=c,u}_getActiveElements(e,n,r,i){if(e.type==="mouseout")return[];if(!r)return n;const s=this.options.hover;return this.getElementsAtEventForMode(e,s.mode,s,i)}},j(yr,"defaults",ze),j(yr,"instances",Oc),j(yr,"overrides",Vi),j(yr,"registry",wn),j(yr,"version",gR),j(yr,"getChart",_1),yr);function w1(){return fe(bd.instances,t=>t._plugins.invalidate())}function _R(t,e,n){const{startAngle:r,pixelMargin:i,x:s,y:o,outerRadius:a,innerRadius:l}=e;let c=i/a;t.beginPath(),t.arc(s,o,a,r-c,n+c),l>i?(c=i/l,t.arc(s,o,l,n+c,r-c,!0)):t.arc(s,o,i,n+Ue,r-Ue),t.closePath(),t.clip()}function wR(t){return om(t,["outerStart","outerEnd","innerStart","innerEnd"])}function SR(t,e,n,r){const i=wR(t.options.borderRadius),s=(n-e)/2,o=Math.min(s,r*e/2),a=l=>{const c=(n-Math.min(s,l))*r/2;return Je(l,0,Math.min(s,c))};return{outerStart:a(i.outerStart),outerEnd:a(i.outerEnd),innerStart:Je(i.innerStart,0,o),innerEnd:Je(i.innerEnd,0,o)}}function as(t,e,n,r){return{x:n+t*Math.cos(e),y:r+t*Math.sin(e)}}function Tu(t,e,n,r,i,s){const{x:o,y:a,startAngle:l,pixelMargin:c,innerRadius:u}=e,d=Math.max(e.outerRadius+r+n-c,0),f=u>0?u+r+n+c:0;let h=0;const p=i-l;if(r){const Y=u>0?u-r:0,V=d>0?d-r:0,N=(Y+V)/2,M=N!==0?p*N/(N+r):p;h=(p-M)/2}const y=Math.max(.001,p*d-n/Pe)/d,v=(p-y)/2,m=l+v+h,g=i-v-h,{outerStart:x,outerEnd:w,innerStart:k,innerEnd:C}=SR(e,f,d,g-m),E=d-x,b=d-w,S=m+x/E,T=g-w/b,A=f+k,L=f+C,z=m+k/A,U=g-C/L;if(t.beginPath(),s){const Y=(S+T)/2;if(t.arc(o,a,d,S,Y),t.arc(o,a,d,Y,T),w>0){const R=as(b,T,o,a);t.arc(R.x,R.y,w,T,g+Ue)}const V=as(L,g,o,a);if(t.lineTo(V.x,V.y),C>0){const R=as(L,U,o,a);t.arc(R.x,R.y,C,g+Ue,U+Math.PI)}const N=(g-C/f+(m+k/f))/2;if(t.arc(o,a,f,g-C/f,N,!0),t.arc(o,a,f,N,m+k/f,!0),k>0){const R=as(A,z,o,a);t.arc(R.x,R.y,k,z+Math.PI,m-Ue)}const M=as(E,m,o,a);if(t.lineTo(M.x,M.y),x>0){const R=as(E,S,o,a);t.arc(R.x,R.y,x,m-Ue,S)}}else{t.moveTo(o,a);const Y=Math.cos(S)*d+o,V=Math.sin(S)*d+a;t.lineTo(Y,V);const N=Math.cos(T)*d+o,M=Math.sin(T)*d+a;t.lineTo(N,M)}t.closePath()}function kR(t,e,n,r,i){const{fullCircles:s,startAngle:o,circumference:a}=e;let l=e.endAngle;if(s){Tu(t,e,n,r,l,i);for(let c=0;c<s;++c)t.fill();isNaN(a)||(l=o+(a%Ce||Ce))}return Tu(t,e,n,r,l,i),t.fill(),l}function ER(t,e,n,r,i){const{fullCircles:s,startAngle:o,circumference:a,options:l}=e,{borderWidth:c,borderJoinStyle:u,borderDash:d,borderDashOffset:f}=l,h=l.borderAlign==="inner";if(!c)return;t.setLineDash(d||[]),t.lineDashOffset=f,h?(t.lineWidth=c*2,t.lineJoin=u||"round"):(t.lineWidth=c,t.lineJoin=u||"bevel");let p=e.endAngle;if(s){Tu(t,e,n,r,p,i);for(let y=0;y<s;++y)t.stroke();isNaN(a)||(p=o+(a%Ce||Ce))}h&&_R(t,e,p),s||(Tu(t,e,n,r,p,i),t.stroke())}class jo extends mn{constructor(n){super();j(this,"circumference");j(this,"endAngle");j(this,"fullCircles");j(this,"innerRadius");j(this,"outerRadius");j(this,"pixelMargin");j(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,r,i){const s=this.getProps(["x","y"],i),{angle:o,distance:a}=Vw(s,{x:n,y:r}),{startAngle:l,endAngle:c,innerRadius:u,outerRadius:d,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),h=(this.options.spacing+this.options.borderWidth)/2,p=te(f,c-l),y=Fa(o,l,c)&&l!==c,v=p>=Ce||y,m=Wn(a,u+h,d+h);return v&&m}getCenterPoint(n){const{x:r,y:i,startAngle:s,endAngle:o,innerRadius:a,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:c,spacing:u}=this.options,d=(s+o)/2,f=(a+l+u+c)/2;return{x:r+Math.cos(d)*f,y:i+Math.sin(d)*f}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:r,circumference:i}=this,s=(r.offset||0)/4,o=(r.spacing||0)/2,a=r.circular;if(this.pixelMargin=r.borderAlign==="inner"?.33:0,this.fullCircles=i>Ce?Math.floor(i/Ce):0,i===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const l=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(l)*s,Math.sin(l)*s);const c=1-Math.sin(Math.min(Pe,i||0)),u=s*c;n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,kR(n,this,u,o,a),ER(n,this,u,o,a),n.restore()}}j(jo,"id","arc"),j(jo,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),j(jo,"defaultRoutes",{backgroundColor:"backgroundColor"}),j(jo,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function S2(t,e,n=e){t.lineCap=te(n.borderCapStyle,e.borderCapStyle),t.setLineDash(te(n.borderDash,e.borderDash)),t.lineDashOffset=te(n.borderDashOffset,e.borderDashOffset),t.lineJoin=te(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=te(n.borderWidth,e.borderWidth),t.strokeStyle=te(n.borderColor,e.borderColor)}function CR(t,e,n){t.lineTo(n.x,n.y)}function TR(t){return t.stepped?XO:t.tension||t.cubicInterpolationMode==="monotone"?QO:CR}function k2(t,e,n={}){const r=t.length,{start:i=0,end:s=r-1}=n,{start:o,end:a}=e,l=Math.max(i,o),c=Math.min(s,a),u=i<o&&s<o||i>a&&s>a;return{count:r,start:l,loop:e.loop,ilen:c<l&&!u?r+c-l:c-l}}function PR(t,e,n,r){const{points:i,options:s}=e,{count:o,start:a,loop:l,ilen:c}=k2(i,n,r),u=TR(s);let{move:d=!0,reverse:f}=r||{},h,p,y;for(h=0;h<=c;++h)p=i[(a+(f?c-h:h))%o],!p.skip&&(d?(t.moveTo(p.x,p.y),d=!1):u(t,y,p,f,s.stepped),y=p);return l&&(p=i[(a+(f?c:0))%o],u(t,y,p,f,s.stepped)),!!l}function IR(t,e,n,r){const i=e.points,{count:s,start:o,ilen:a}=k2(i,n,r),{move:l=!0,reverse:c}=r||{};let u=0,d=0,f,h,p,y,v,m;const g=w=>(o+(c?a-w:w))%s,x=()=>{y!==v&&(t.lineTo(u,v),t.lineTo(u,y),t.lineTo(u,m))};for(l&&(h=i[g(0)],t.moveTo(h.x,h.y)),f=0;f<=a;++f){if(h=i[g(f)],h.skip)continue;const w=h.x,k=h.y,C=w|0;C===p?(k<y?y=k:k>v&&(v=k),u=(d*u+w)/++d):(x(),t.lineTo(w,k),p=C,d=0,y=v=k),m=k}x()}function ap(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?IR:PR}function OR(t){return t.stepped?IA:t.tension||t.cubicInterpolationMode==="monotone"?OA:xi}function AR(t,e,n,r){let i=e._path;i||(i=e._path=new Path2D,e.path(i,n,r)&&i.closePath()),S2(t,e.options),t.stroke(i)}function RR(t,e,n,r){const{segments:i,options:s}=e,o=ap(e);for(const a of i)S2(t,s,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+r-1})&&t.closePath(),t.stroke()}const MR=typeof Path2D=="function";function LR(t,e,n,r){MR&&!e.options.segment?AR(t,e,n,r):RR(t,e,n,r)}class Mr extends mn{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const i=r.spanGaps?this._loop:this._fullLoop;_A(this._points,r,e,i,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=NA(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,r=e.length;return r&&n[e[r-1].end]}interpolate(e,n){const r=this.options,i=e[n],s=this.points,o=u2(this,{property:n,start:i,end:i});if(!o.length)return;const a=[],l=OR(r);let c,u;for(c=0,u=o.length;c<u;++c){const{start:d,end:f}=o[c],h=s[d],p=s[f];if(h===p){a.push(h);continue}const y=Math.abs((i-h[n])/(p[n]-h[n])),v=l(h,p,y,r.stepped);v[n]=e[n],a.push(v)}return a.length===1?a[0]:a}pathSegment(e,n,r){return ap(this)(e,this,n,r)}path(e,n,r){const i=this.segments,s=ap(this);let o=this._loop;n=n||0,r=r||this.points.length-n;for(const a of i)o&=s(e,this,a,{start:n,end:n+r-1});return!!o}draw(e,n,r,i){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(e.save(),LR(e,this,r,i),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}j(Mr,"id","line"),j(Mr,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),j(Mr,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),j(Mr,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function S1(t,e,n,r){const i=t.options,{[n]:s}=t.getProps([n],r);return Math.abs(e-s)<i.radius+i.hitRadius}class Ac extends mn{constructor(n){super();j(this,"parsed");j(this,"skip");j(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,i){const s=this.options,{x:o,y:a}=this.getProps(["x","y"],i);return Math.pow(n-o,2)+Math.pow(r-a,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(n,r){return S1(this,n,"x",r)}inYRange(n,r){return S1(this,n,"y",r)}getCenterPoint(n){const{x:r,y:i}=this.getProps(["x","y"],n);return{x:r,y:i}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const i=r&&n.borderWidth||0;return(r+i)*2}draw(n,r){const i=this.options;this.skip||i.radius<.1||!Gn(this,r,this.size(i)/2)||(n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.fillStyle=i.backgroundColor,rp(n,i,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}j(Ac,"id","point"),j(Ac,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),j(Ac,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function E2(t,e){const{x:n,y:r,base:i,width:s,height:o}=t.getProps(["x","y","base","width","height"],e);let a,l,c,u,d;return t.horizontal?(d=o/2,a=Math.min(n,i),l=Math.max(n,i),c=r-d,u=r+d):(d=s/2,a=n-d,l=n+d,c=Math.min(r,i),u=Math.max(r,i)),{left:a,top:c,right:l,bottom:u}}function Lr(t,e,n,r){return t?0:Je(e,n,r)}function DR(t,e,n){const r=t.options.borderWidth,i=t.borderSkipped,s=Zw(r);return{t:Lr(i.top,s.top,0,n),r:Lr(i.right,s.right,0,e),b:Lr(i.bottom,s.bottom,0,n),l:Lr(i.left,s.left,0,e)}}function NR(t,e,n){const{enableBorderRadius:r}=t.getProps(["enableBorderRadius"]),i=t.options.borderRadius,s=Li(i),o=Math.min(e,n),a=t.borderSkipped,l=r||oe(i);return{topLeft:Lr(!l||a.top||a.left,s.topLeft,0,o),topRight:Lr(!l||a.top||a.right,s.topRight,0,o),bottomLeft:Lr(!l||a.bottom||a.left,s.bottomLeft,0,o),bottomRight:Lr(!l||a.bottom||a.right,s.bottomRight,0,o)}}function FR(t){const e=E2(t),n=e.right-e.left,r=e.bottom-e.top,i=DR(t,n/2,r/2),s=NR(t,n/2,r/2);return{outer:{x:e.left,y:e.top,w:n,h:r,radius:s},inner:{x:e.left+i.l,y:e.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,s.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(i.b,i.r))}}}}function kf(t,e,n,r){const i=e===null,s=n===null,a=t&&!(i&&s)&&E2(t,r);return a&&(i||Wn(e,a.left,a.right))&&(s||Wn(n,a.top,a.bottom))}function jR(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function zR(t,e){t.rect(e.x,e.y,e.w,e.h)}function Ef(t,e,n={}){const r=t.x!==n.x?-e:0,i=t.y!==n.y?-e:0,s=(t.x+t.w!==n.x+n.w?e:0)-r,o=(t.y+t.h!==n.y+n.h?e:0)-i;return{x:t.x+r,y:t.y+i,w:t.w+s,h:t.h+o,radius:t.radius}}class Rc extends mn{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:n,options:{borderColor:r,backgroundColor:i}}=this,{inner:s,outer:o}=FR(this),a=jR(o.radius)?ja:zR;e.save(),(o.w!==s.w||o.h!==s.h)&&(e.beginPath(),a(e,Ef(o,n,s)),e.clip(),a(e,Ef(s,-n,o)),e.fillStyle=r,e.fill("evenodd")),e.beginPath(),a(e,Ef(s,n)),e.fillStyle=i,e.fill(),e.restore()}inRange(e,n,r){return kf(this,e,n,r)}inXRange(e,n){return kf(this,e,null,n)}inYRange(e,n){return kf(this,null,e,n)}getCenterPoint(e){const{x:n,y:r,base:i,horizontal:s}=this.getProps(["x","y","base","horizontal"],e);return{x:s?(n+i)/2:n,y:s?r:(r+i)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}j(Rc,"id","bar"),j(Rc,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),j(Rc,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var BR=Object.freeze({__proto__:null,ArcElement:jo,BarElement:Rc,LineElement:Mr,PointElement:Ac});const lp=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],k1=lp.map(t=>t.replace("rgb(","rgba(").replace(")",", 0.5)"));function C2(t){return lp[t%lp.length]}function T2(t){return k1[t%k1.length]}function $R(t,e){return t.borderColor=C2(e),t.backgroundColor=T2(e),++e}function UR(t,e){return t.backgroundColor=t.data.map(()=>C2(e++)),e}function HR(t,e){return t.backgroundColor=t.data.map(()=>T2(e++)),e}function VR(t){let e=0;return(n,r)=>{const i=t.getDatasetMeta(r).controller;i instanceof Ci?e=UR(n,e):i instanceof aa?e=HR(n,e):i&&(e=$R(n,e))}}function E1(t){let e;for(e in t)if(t[e].borderColor||t[e].backgroundColor)return!0;return!1}function WR(t){return t&&(t.borderColor||t.backgroundColor)}var YR={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(t,e,n){if(!n.enabled)return;const{data:{datasets:r},options:i}=t.config,{elements:s}=i;if(!n.forceOverride&&(E1(r)||WR(i)||s&&E1(s)))return;const o=VR(t);r.forEach(o)}};function GR(t,e,n,r,i){const s=i.samples||r;if(s>=n)return t.slice(e,e+n);const o=[],a=(n-2)/(s-2);let l=0;const c=e+n-1;let u=e,d,f,h,p,y;for(o[l++]=t[u],d=0;d<s-2;d++){let v=0,m=0,g;const x=Math.floor((d+1)*a)+1+e,w=Math.min(Math.floor((d+2)*a)+1,n)+e,k=w-x;for(g=x;g<w;g++)v+=t[g].x,m+=t[g].y;v/=k,m/=k;const C=Math.floor(d*a)+1+e,E=Math.min(Math.floor((d+1)*a)+1,n)+e,{x:b,y:S}=t[u];for(h=p=-1,g=C;g<E;g++)p=.5*Math.abs((b-v)*(t[g].y-S)-(b-t[g].x)*(m-S)),p>h&&(h=p,f=t[g],y=g);o[l++]=f,u=y}return o[l++]=t[c],o}function KR(t,e,n,r){let i=0,s=0,o,a,l,c,u,d,f,h,p,y;const v=[],m=e+n-1,g=t[e].x,w=t[m].x-g;for(o=e;o<e+n;++o){a=t[o],l=(a.x-g)/w*r,c=a.y;const k=l|0;if(k===u)c<p?(p=c,d=o):c>y&&(y=c,f=o),i=(s*i+a.x)/++s;else{const C=o-1;if(!ue(d)&&!ue(f)){const E=Math.min(d,f),b=Math.max(d,f);E!==h&&E!==C&&v.push({...t[E],x:i}),b!==h&&b!==C&&v.push({...t[b],x:i})}o>0&&C!==h&&v.push(t[C]),v.push(a),u=k,s=0,p=y=c,d=f=h=o}}return v}function P2(t){if(t._decimated){const e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{configurable:!0,enumerable:!0,writable:!0,value:e})}}function C1(t){t.data.datasets.forEach(e=>{P2(e)})}function qR(t,e){const n=e.length;let r=0,i;const{iScale:s}=t,{min:o,max:a,minDefined:l,maxDefined:c}=s.getUserBounds();return l&&(r=Je(Yn(e,s.axis,o).lo,0,n-1)),c?i=Je(Yn(e,s.axis,a).hi+1,r,n)-r:i=n-r,{start:r,count:i}}var XR={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,n)=>{if(!n.enabled){C1(t);return}const r=t.width;t.data.datasets.forEach((i,s)=>{const{_data:o,indexAxis:a}=i,l=t.getDatasetMeta(s),c=o||i.data;if(No([a,t.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const u=t.scales[l.xAxisID];if(u.type!=="linear"&&u.type!=="time"||t.options.parsing)return;let{start:d,count:f}=qR(l,c);const h=n.threshold||4*r;if(f<=h){P2(i);return}ue(o)&&(i._data=c,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(y){this._data=y}}));let p;switch(n.algorithm){case"lttb":p=GR(c,d,f,r,n);break;case"min-max":p=KR(c,d,f,r);break;default:throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`)}i._decimated=p})},destroy(t){C1(t)}};function QR(t,e,n){const r=t.segments,i=t.points,s=e.points,o=[];for(const a of r){let{start:l,end:c}=a;c=hm(l,c,i);const u=cp(n,i[l],i[c],a.loop);if(!e.segments){o.push({source:a,target:u,start:i[l],end:i[c]});continue}const d=u2(e,u);for(const f of d){const h=cp(n,s[f.start],s[f.end],f.loop),p=c2(a,i,h);for(const y of p)o.push({source:y,target:f,start:{[n]:T1(u,h,"start",Math.max)},end:{[n]:T1(u,h,"end",Math.min)}})}}return o}function cp(t,e,n,r){if(r)return;let i=e[t],s=n[t];return t==="angle"&&(i=Rt(i),s=Rt(s)),{property:t,start:i,end:s}}function JR(t,e){const{x:n=null,y:r=null}=t||{},i=e.points,s=[];return e.segments.forEach(({start:o,end:a})=>{a=hm(o,a,i);const l=i[o],c=i[a];r!==null?(s.push({x:l.x,y:r}),s.push({x:c.x,y:r})):n!==null&&(s.push({x:n,y:l.y}),s.push({x:n,y:c.y}))}),s}function hm(t,e,n){for(;e>t;e--){const r=n[e];if(!isNaN(r.x)&&!isNaN(r.y))break}return e}function T1(t,e,n,r){return t&&e?r(t[n],e[n]):t?t[n]:e?e[n]:0}function I2(t,e){let n=[],r=!1;return Oe(t)?(r=!0,n=t):n=JR(t,e),n.length?new Mr({points:n,options:{tension:0},_loop:r,_fullLoop:r}):null}function P1(t){return t&&t.fill!==!1}function ZR(t,e,n){let i=t[e].fill;const s=[e];let o;if(!n)return i;for(;i!==!1&&s.indexOf(i)===-1;){if(!je(i))return i;if(o=t[i],!o)return!1;if(o.visible)return i;s.push(i),i=o.fill}return!1}function eM(t,e,n){const r=iM(t);if(oe(r))return isNaN(r.value)?!1:r;let i=parseFloat(r);return je(i)&&Math.floor(i)===i?tM(r[0],e,i,n):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function tM(t,e,n,r){return(t==="-"||t==="+")&&(n=e+n),n===e||n<0||n>=r?!1:n}function nM(t,e){let n=null;return t==="start"?n=e.bottom:t==="end"?n=e.top:oe(t)?n=e.getPixelForValue(t.value):e.getBasePixel&&(n=e.getBasePixel()),n}function rM(t,e,n){let r;return t==="start"?r=n:t==="end"?r=e.options.reverse?e.min:e.max:oe(t)?r=t.value:r=e.getBaseValue(),r}function iM(t){const e=t.options,n=e.fill;let r=te(n&&n.target,n);return r===void 0&&(r=!!e.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function sM(t){const{scale:e,index:n,line:r}=t,i=[],s=r.segments,o=r.points,a=oM(e,n);a.push(I2({x:null,y:e.bottom},r));for(let l=0;l<s.length;l++){const c=s[l];for(let u=c.start;u<=c.end;u++)aM(i,o[u],a)}return new Mr({points:i,options:{}})}function oM(t,e){const n=[],r=t.getMatchingVisibleMetas("line");for(let i=0;i<r.length;i++){const s=r[i];if(s.index===e)break;s.hidden||n.unshift(s.dataset)}return n}function aM(t,e,n){const r=[];for(let i=0;i<n.length;i++){const s=n[i],{first:o,last:a,point:l}=lM(s,e,"x");if(!(!l||o&&a)){if(o)r.unshift(l);else if(t.push(l),!a)break}}t.push(...r)}function lM(t,e,n){const r=t.interpolate(e,n);if(!r)return{};const i=r[n],s=t.segments,o=t.points;let a=!1,l=!1;for(let c=0;c<s.length;c++){const u=s[c],d=o[u.start][n],f=o[u.end][n];if(Wn(i,d,f)){a=i===d,l=i===f;break}}return{first:a,last:l,point:r}}class O2{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,n,r){const{x:i,y:s,radius:o}=this;return n=n||{start:0,end:Ce},e.arc(i,s,o,n.end,n.start,!0),!r.bounds}interpolate(e){const{x:n,y:r,radius:i}=this,s=e.angle;return{x:n+Math.cos(s)*i,y:r+Math.sin(s)*i,angle:s}}}function cM(t){const{chart:e,fill:n,line:r}=t;if(je(n))return uM(e,n);if(n==="stack")return sM(t);if(n==="shape")return!0;const i=dM(t);return i instanceof O2?i:I2(i,r)}function uM(t,e){const n=t.getDatasetMeta(e);return n&&t.isDatasetVisible(e)?n.dataset:null}function dM(t){return(t.scale||{}).getPointPositionForValue?hM(t):fM(t)}function fM(t){const{scale:e={},fill:n}=t,r=nM(n,e);if(je(r)){const i=e.isHorizontal();return{x:i?r:null,y:i?null:r}}return null}function hM(t){const{scale:e,fill:n}=t,r=e.options,i=e.getLabels().length,s=r.reverse?e.max:e.min,o=rM(n,e,s),a=[];if(r.grid.circular){const l=e.getPointPositionForValue(0,s);return new O2({x:l.x,y:l.y,radius:e.getDistanceFromCenterForValue(o)})}for(let l=0;l<i;++l)a.push(e.getPointPositionForValue(l,o));return a}function Cf(t,e,n){const r=cM(e),{line:i,scale:s,axis:o}=e,a=i.options,l=a.fill,c=a.backgroundColor,{above:u=c,below:d=c}=l||{};r&&i.points.length&&(yd(t,n),pM(t,{line:i,target:r,above:u,below:d,area:n,scale:s,axis:o}),vd(t))}function pM(t,e){const{line:n,target:r,above:i,below:s,area:o,scale:a}=e,l=n._loop?"angle":e.axis;t.save(),l==="x"&&s!==i&&(I1(t,r,o.top),O1(t,{line:n,target:r,color:i,scale:a,property:l}),t.restore(),t.save(),I1(t,r,o.bottom)),O1(t,{line:n,target:r,color:s,scale:a,property:l}),t.restore()}function I1(t,e,n){const{segments:r,points:i}=e;let s=!0,o=!1;t.beginPath();for(const a of r){const{start:l,end:c}=a,u=i[l],d=i[hm(l,c,i)];s?(t.moveTo(u.x,u.y),s=!1):(t.lineTo(u.x,n),t.lineTo(u.x,u.y)),o=!!e.pathSegment(t,a,{move:o}),o?t.closePath():t.lineTo(d.x,n)}t.lineTo(e.first().x,n),t.closePath(),t.clip()}function O1(t,e){const{line:n,target:r,property:i,color:s,scale:o}=e,a=QR(n,r,i);for(const{source:l,target:c,start:u,end:d}of a){const{style:{backgroundColor:f=s}={}}=l,h=r!==!0;t.save(),t.fillStyle=f,gM(t,o,h&&cp(i,u,d)),t.beginPath();const p=!!n.pathSegment(t,l);let y;if(h){p?t.closePath():A1(t,r,d,i);const v=!!r.pathSegment(t,c,{move:p,reverse:!0});y=p&&v,y||A1(t,r,u,i)}t.closePath(),t.fill(y?"evenodd":"nonzero"),t.restore()}}function gM(t,e,n){const{top:r,bottom:i}=e.chart.chartArea,{property:s,start:o,end:a}=n||{};s==="x"&&(t.beginPath(),t.rect(o,r,a-o,i-r),t.clip())}function A1(t,e,n,r){const i=e.interpolate(n,r);i&&t.lineTo(i.x,i.y)}var mM={id:"filler",afterDatasetsUpdate(t,e,n){const r=(t.data.datasets||[]).length,i=[];let s,o,a,l;for(o=0;o<r;++o)s=t.getDatasetMeta(o),a=s.dataset,l=null,a&&a.options&&a instanceof Mr&&(l={visible:t.isDatasetVisible(o),index:o,fill:eM(a,o,r),chart:t,axis:s.controller.options.indexAxis,scale:s.vScale,line:a}),s.$filler=l,i.push(l);for(o=0;o<r;++o)l=i[o],!(!l||l.fill===!1)&&(l.fill=ZR(i,o,n.propagate))},beforeDraw(t,e,n){const r=n.drawTime==="beforeDraw",i=t.getSortedVisibleDatasetMetas(),s=t.chartArea;for(let o=i.length-1;o>=0;--o){const a=i[o].$filler;a&&(a.line.updateControlPoints(s,a.axis),r&&a.fill&&Cf(t.ctx,a,s))}},beforeDatasetsDraw(t,e,n){if(n.drawTime!=="beforeDatasetsDraw")return;const r=t.getSortedVisibleDatasetMetas();for(let i=r.length-1;i>=0;--i){const s=r[i].$filler;P1(s)&&Cf(t.ctx,s,t.chartArea)}},beforeDatasetDraw(t,e,n){const r=e.meta.$filler;!P1(r)||n.drawTime!=="beforeDatasetDraw"||Cf(t.ctx,r,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const R1=(t,e)=>{let{boxHeight:n=e,boxWidth:r=e}=t;return t.usePointStyle&&(n=Math.min(n,e),r=t.pointStyleWidth||Math.min(r,e)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(e,n)}},yM=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class M1 extends mn{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,r){this.maxWidth=e,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=be(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(r=>e.filter(r,this.chart.data))),e.sort&&(n=n.sort((r,i)=>e.sort(r,i,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const r=e.labels,i=qe(r.font),s=i.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=R1(r,s);let c,u;n.font=i.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(o,s,a,l)+10):(u=this.maxHeight,c=this._fitCols(o,i,a,l)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(u,e.maxHeight||this.maxHeight)}_fitRows(e,n,r,i){const{ctx:s,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=i+a;let d=e;s.textAlign="left",s.textBaseline="middle";let f=-1,h=-u;return this.legendItems.forEach((p,y)=>{const v=r+n/2+s.measureText(p.text).width;(y===0||c[c.length-1]+v+2*a>o)&&(d+=u,c[c.length-(y>0?0:1)]=0,h+=u,f++),l[y]={left:0,top:h,row:f,width:v,height:i},c[c.length-1]+=v+a}),d}_fitCols(e,n,r,i){const{ctx:s,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=o-e;let d=a,f=0,h=0,p=0,y=0;return this.legendItems.forEach((v,m)=>{const{itemWidth:g,itemHeight:x}=vM(r,n,s,v,i);m>0&&h+x+2*a>u&&(d+=f+a,c.push({width:f,height:h}),p+=f+a,y++,f=h=0),l[m]={left:p,top:h,col:y,width:g,height:x},f=Math.max(f,g),h+=x+a}),d+=f,c.push({width:f,height:h}),d}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:i},rtl:s}}=this,o=Is(s,this.left,this.width);if(this.isHorizontal()){let a=0,l=ot(r,this.left+i,this.right-this.lineWidths[a]);for(const c of n)a!==c.row&&(a=c.row,l=ot(r,this.left+i,this.right-this.lineWidths[a])),c.top+=this.top+e+i,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+i}else{let a=0,l=ot(r,this.top+e+i,this.bottom-this.columnSizes[a].height);for(const c of n)c.col!==a&&(a=c.col,l=ot(r,this.top+e+i,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+i,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;yd(e,this),this._draw(),vd(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:r,ctx:i}=this,{align:s,labels:o}=e,a=ze.color,l=Is(e.rtl,this.left,this.width),c=qe(o.font),{padding:u}=o,d=c.size,f=d/2;let h;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=c.string;const{boxWidth:p,boxHeight:y,itemHeight:v}=R1(o,d),m=function(C,E,b){if(isNaN(p)||p<=0||isNaN(y)||y<0)return;i.save();const S=te(b.lineWidth,1);if(i.fillStyle=te(b.fillStyle,a),i.lineCap=te(b.lineCap,"butt"),i.lineDashOffset=te(b.lineDashOffset,0),i.lineJoin=te(b.lineJoin,"miter"),i.lineWidth=S,i.strokeStyle=te(b.strokeStyle,a),i.setLineDash(te(b.lineDash,[])),o.usePointStyle){const T={radius:y*Math.SQRT2/2,pointStyle:b.pointStyle,rotation:b.rotation,borderWidth:S},A=l.xPlus(C,p/2),L=E+f;Jw(i,T,A,L,o.pointStyleWidth&&p)}else{const T=E+Math.max((d-y)/2,0),A=l.leftForLtr(C,p),L=Li(b.borderRadius);i.beginPath(),Object.values(L).some(z=>z!==0)?ja(i,{x:A,y:T,w:p,h:y,radius:L}):i.rect(A,T,p,y),i.fill(),S!==0&&i.stroke()}i.restore()},g=function(C,E,b){Wi(i,b.text,C,E+v/2,c,{strikethrough:b.hidden,textAlign:l.textAlign(b.textAlign)})},x=this.isHorizontal(),w=this._computeTitleHeight();x?h={x:ot(s,this.left+u,this.right-r[0]),y:this.top+u+w,line:0}:h={x:this.left+u,y:ot(s,this.top+w+u,this.bottom-n[0].height),line:0},o2(this.ctx,e.textDirection);const k=v+u;this.legendItems.forEach((C,E)=>{i.strokeStyle=C.fontColor,i.fillStyle=C.fontColor;const b=i.measureText(C.text).width,S=l.textAlign(C.textAlign||(C.textAlign=o.textAlign)),T=p+f+b;let A=h.x,L=h.y;l.setWidth(this.width),x?E>0&&A+T+u>this.right&&(L=h.y+=k,h.line++,A=h.x=ot(s,this.left+u,this.right-r[h.line])):E>0&&L+k>this.bottom&&(A=h.x=A+n[h.line].width+u,h.line++,L=h.y=ot(s,this.top+w+u,this.bottom-n[h.line].height));const z=l.x(A);if(m(z,L,C),A=zO(S,A+p+f,x?A+T:this.right,e.rtl),g(l.x(A),L,C),x)h.x+=T+u;else if(typeof C.text!="string"){const U=c.lineHeight;h.y+=A2(C,U)+u}else h.y+=k}),a2(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,r=qe(n.font),i=ut(n.padding);if(!n.display)return;const s=Is(e.rtl,this.left,this.width),o=this.ctx,a=n.position,l=r.size/2,c=i.top+l;let u,d=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),u=this.top+c,d=ot(e.align,d,this.right-f);else{const p=this.columnSizes.reduce((y,v)=>Math.max(y,v.height),0);u=c+ot(e.align,this.top,this.bottom-p-e.labels.padding-this._computeTitleHeight())}const h=ot(a,d,d+f);o.textAlign=s.textAlign(im(a)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=r.string,Wi(o,n.text,h,u,r)}_computeTitleHeight(){const e=this.options.title,n=qe(e.font),r=ut(e.padding);return e.display?n.lineHeight+r.height:0}_getLegendItemAt(e,n){let r,i,s;if(Wn(e,this.left,this.right)&&Wn(n,this.top,this.bottom)){for(s=this.legendHitBoxes,r=0;r<s.length;++r)if(i=s[r],Wn(e,i.left,i.left+i.width)&&Wn(n,i.top,i.top+i.height))return this.legendItems[r]}return null}handleEvent(e){const n=this.options;if(!_M(e.type,n))return;const r=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const i=this._hoveredItem,s=yM(i,r);i&&!s&&be(n.onLeave,[e,i,this],this),this._hoveredItem=r,r&&!s&&be(n.onHover,[e,r,this],this)}else r&&be(n.onClick,[e,r,this],this)}}function vM(t,e,n,r,i){const s=xM(r,t,e,n),o=bM(i,r,e.lineHeight);return{itemWidth:s,itemHeight:o}}function xM(t,e,n,r){let i=t.text;return i&&typeof i!="string"&&(i=i.reduce((s,o)=>s.length>o.length?s:o)),e+n.size/2+r.measureText(i).width}function bM(t,e,n){let r=t;return typeof e.text!="string"&&(r=A2(e,n)),r}function A2(t,e){const n=t.text?t.text.length:0;return e*n}function _M(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var wM={id:"legend",_element:M1,start(t,e,n){const r=t.legend=new M1({ctx:t.ctx,options:n,chart:t});lt.configure(t,r,n),lt.addBox(t,r)},stop(t){lt.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const r=t.legend;lt.configure(t,r,n),r.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const r=e.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),e.hidden=!0):(i.show(r),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:s,useBorderRadius:o,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),u=ut(c.borderWidth);return{text:e[l.index].label,fillStyle:c.backgroundColor,fontColor:s,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:r||c.pointStyle,rotation:c.rotation,textAlign:i||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};let pm=class extends mn{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const i=Oe(r.text)?r.text.length:1;this._padding=ut(r.padding);const s=i*qe(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=s:this.width=s}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:r,bottom:i,right:s,options:o}=this,a=o.align;let l=0,c,u,d;return this.isHorizontal()?(u=ot(a,r,s),d=n+e,c=s-r):(o.position==="left"?(u=r+e,d=ot(a,i,n),l=Pe*-.5):(u=s-e,d=ot(a,n,i),l=Pe*.5),c=i-n),{titleX:u,titleY:d,maxWidth:c,rotation:l}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const r=qe(n.font),s=r.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(s);Wi(e,n.text,0,0,r,{color:n.color,maxWidth:l,rotation:c,textAlign:im(n.align),textBaseline:"middle",translation:[o,a]})}};function SM(t,e){const n=new pm({ctx:t.ctx,options:e,chart:t});lt.configure(t,n,e),lt.addBox(t,n),t.titleBlock=n}var kM={id:"title",_element:pm,start(t,e,n){SM(t,n)},stop(t){const e=t.titleBlock;lt.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const r=t.titleBlock;lt.configure(t,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Xl=new WeakMap;var EM={id:"subtitle",start(t,e,n){const r=new pm({ctx:t.ctx,options:n,chart:t});lt.configure(t,r,n),lt.addBox(t,r),Xl.set(t,r)},stop(t){lt.removeBox(t,Xl.get(t)),Xl.delete(t)},beforeUpdate(t,e,n){const r=Xl.get(t);lt.configure(t,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const zo={average(t){if(!t.length)return!1;let e,n,r=new Set,i=0,s=0;for(e=0,n=t.length;e<n;++e){const a=t[e].element;if(a&&a.hasValue()){const l=a.tooltipPosition();r.add(l.x),i+=l.y,++s}}return s===0||r.size===0?!1:{x:[...r].reduce((a,l)=>a+l)/r.size,y:i/s}},nearest(t,e){if(!t.length)return!1;let n=e.x,r=e.y,i=Number.POSITIVE_INFINITY,s,o,a;for(s=0,o=t.length;s<o;++s){const l=t[s].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=tp(e,c);u<i&&(i=u,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,r=l.y}return{x:n,y:r}}};function bn(t,e){return e&&(Oe(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function jn(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function CM(t,e){const{element:n,datasetIndex:r,index:i}=e,s=t.getDatasetMeta(r).controller,{label:o,value:a}=s.getLabelAndValue(i);return{chart:t,label:o,parsed:s.getParsed(i),raw:t.data.datasets[r].data[i],formattedValue:a,dataset:s.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function L1(t,e){const n=t.chart.ctx,{body:r,footer:i,title:s}=t,{boxWidth:o,boxHeight:a}=e,l=qe(e.bodyFont),c=qe(e.titleFont),u=qe(e.footerFont),d=s.length,f=i.length,h=r.length,p=ut(e.padding);let y=p.height,v=0,m=r.reduce((w,k)=>w+k.before.length+k.lines.length+k.after.length,0);if(m+=t.beforeBody.length+t.afterBody.length,d&&(y+=d*c.lineHeight+(d-1)*e.titleSpacing+e.titleMarginBottom),m){const w=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;y+=h*w+(m-h)*l.lineHeight+(m-1)*e.bodySpacing}f&&(y+=e.footerMarginTop+f*u.lineHeight+(f-1)*e.footerSpacing);let g=0;const x=function(w){v=Math.max(v,n.measureText(w).width+g)};return n.save(),n.font=c.string,fe(t.title,x),n.font=l.string,fe(t.beforeBody.concat(t.afterBody),x),g=e.displayColors?o+2+e.boxPadding:0,fe(r,w=>{fe(w.before,x),fe(w.lines,x),fe(w.after,x)}),g=0,n.font=u.string,fe(t.footer,x),n.restore(),v+=p.width,{width:v,height:y}}function TM(t,e){const{y:n,height:r}=e;return n<r/2?"top":n>t.height-r/2?"bottom":"center"}function PM(t,e,n,r){const{x:i,width:s}=r,o=n.caretSize+n.caretPadding;if(t==="left"&&i+s+o>e.width||t==="right"&&i-s-o<0)return!0}function IM(t,e,n,r){const{x:i,width:s}=n,{width:o,chartArea:{left:a,right:l}}=t;let c="center";return r==="center"?c=i<=(a+l)/2?"left":"right":i<=s/2?c="left":i>=o-s/2&&(c="right"),PM(c,t,e,n)&&(c="center"),c}function D1(t,e,n){const r=n.yAlign||e.yAlign||TM(t,n);return{xAlign:n.xAlign||e.xAlign||IM(t,e,n,r),yAlign:r}}function OM(t,e){let{x:n,width:r}=t;return e==="right"?n-=r:e==="center"&&(n-=r/2),n}function AM(t,e,n){let{y:r,height:i}=t;return e==="top"?r+=n:e==="bottom"?r-=i+n:r-=i/2,r}function N1(t,e,n,r){const{caretSize:i,caretPadding:s,cornerRadius:o}=t,{xAlign:a,yAlign:l}=n,c=i+s,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:h}=Li(o);let p=OM(e,a);const y=AM(e,l,c);return l==="center"?a==="left"?p+=c:a==="right"&&(p-=c):a==="left"?p-=Math.max(u,f)+i:a==="right"&&(p+=Math.max(d,h)+i),{x:Je(p,0,r.width-e.width),y:Je(y,0,r.height-e.height)}}function Ql(t,e,n){const r=ut(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-r.right:t.x+r.left}function F1(t){return bn([],jn(t))}function RM(t,e,n){return si(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function j1(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const R2={beforeTitle:Nn,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(r>0&&e.dataIndex<r)return n[e.dataIndex]}return""},afterTitle:Nn,beforeBody:Nn,beforeLabel:Nn,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return ue(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Nn,afterBody:Nn,beforeFooter:Nn,footer:Nn,afterFooter:Nn};function vt(t,e,n,r){const i=t[e].call(n,r);return typeof i>"u"?R2[e].call(n,r):i}class up extends mn{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,r=this.options.setContext(this.getContext()),i=r.enabled&&n.options.animation&&r.animations,s=new d2(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=RM(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:r}=n,i=vt(r,"beforeTitle",this,e),s=vt(r,"title",this,e),o=vt(r,"afterTitle",this,e);let a=[];return a=bn(a,jn(i)),a=bn(a,jn(s)),a=bn(a,jn(o)),a}getBeforeBody(e,n){return F1(vt(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:r}=n,i=[];return fe(e,s=>{const o={before:[],lines:[],after:[]},a=j1(r,s);bn(o.before,jn(vt(a,"beforeLabel",this,s))),bn(o.lines,vt(a,"label",this,s)),bn(o.after,jn(vt(a,"afterLabel",this,s))),i.push(o)}),i}getAfterBody(e,n){return F1(vt(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:r}=n,i=vt(r,"beforeFooter",this,e),s=vt(r,"footer",this,e),o=vt(r,"afterFooter",this,e);let a=[];return a=bn(a,jn(i)),a=bn(a,jn(s)),a=bn(a,jn(o)),a}_createItems(e){const n=this._active,r=this.chart.data,i=[],s=[],o=[];let a=[],l,c;for(l=0,c=n.length;l<c;++l)a.push(CM(this.chart,n[l]));return e.filter&&(a=a.filter((u,d,f)=>e.filter(u,d,f,r))),e.itemSort&&(a=a.sort((u,d)=>e.itemSort(u,d,r))),fe(a,u=>{const d=j1(e.callbacks,u);i.push(vt(d,"labelColor",this,u)),s.push(vt(d,"labelPointStyle",this,u)),o.push(vt(d,"labelTextColor",this,u))}),this.labelColors=i,this.labelPointStyles=s,this.labelTextColors=o,this.dataPoints=a,a}update(e,n){const r=this.options.setContext(this.getContext()),i=this._active;let s,o=[];if(!i.length)this.opacity!==0&&(s={opacity:0});else{const a=zo[r.position].call(this,i,this._eventPosition);o=this._createItems(r),this.title=this.getTitle(o,r),this.beforeBody=this.getBeforeBody(o,r),this.body=this.getBody(o,r),this.afterBody=this.getAfterBody(o,r),this.footer=this.getFooter(o,r);const l=this._size=L1(this,r),c=Object.assign({},a,l),u=D1(this.chart,r,c),d=N1(r,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,s={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,s&&this._resolveAnimations().update(this,s),e&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,r,i){const s=this.getCaretPosition(e,r,i);n.lineTo(s.x1,s.y1),n.lineTo(s.x2,s.y2),n.lineTo(s.x3,s.y3)}getCaretPosition(e,n,r){const{xAlign:i,yAlign:s}=this,{caretSize:o,cornerRadius:a}=r,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:d}=Li(a),{x:f,y:h}=e,{width:p,height:y}=n;let v,m,g,x,w,k;return s==="center"?(w=h+y/2,i==="left"?(v=f,m=v-o,x=w+o,k=w-o):(v=f+p,m=v+o,x=w-o,k=w+o),g=v):(i==="left"?m=f+Math.max(l,u)+o:i==="right"?m=f+p-Math.max(c,d)-o:m=this.caretX,s==="top"?(x=h,w=x-o,v=m-o,g=m+o):(x=h+y,w=x+o,v=m+o,g=m-o),k=x),{x1:v,x2:m,x3:g,y1:x,y2:w,y3:k}}drawTitle(e,n,r){const i=this.title,s=i.length;let o,a,l;if(s){const c=Is(r.rtl,this.x,this.width);for(e.x=Ql(this,r.titleAlign,r),n.textAlign=c.textAlign(r.titleAlign),n.textBaseline="middle",o=qe(r.titleFont),a=r.titleSpacing,n.fillStyle=r.titleColor,n.font=o.string,l=0;l<s;++l)n.fillText(i[l],c.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+a,l+1===s&&(e.y+=r.titleMarginBottom-a)}}_drawColorBox(e,n,r,i,s){const o=this.labelColors[r],a=this.labelPointStyles[r],{boxHeight:l,boxWidth:c}=s,u=qe(s.bodyFont),d=Ql(this,"left",s),f=i.x(d),h=l<u.lineHeight?(u.lineHeight-l)/2:0,p=n.y+h;if(s.usePointStyle){const y={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},v=i.leftForLtr(f,c)+c/2,m=p+l/2;e.strokeStyle=s.multiKeyBackground,e.fillStyle=s.multiKeyBackground,rp(e,y,v,m),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,rp(e,y,v,m)}else{e.lineWidth=oe(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const y=i.leftForLtr(f,c),v=i.leftForLtr(i.xPlus(f,1),c-2),m=Li(o.borderRadius);Object.values(m).some(g=>g!==0)?(e.beginPath(),e.fillStyle=s.multiKeyBackground,ja(e,{x:y,y:p,w:c,h:l,radius:m}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),ja(e,{x:v,y:p+1,w:c-2,h:l-2,radius:m}),e.fill()):(e.fillStyle=s.multiKeyBackground,e.fillRect(y,p,c,l),e.strokeRect(y,p,c,l),e.fillStyle=o.backgroundColor,e.fillRect(v,p+1,c-2,l-2))}e.fillStyle=this.labelTextColors[r]}drawBody(e,n,r){const{body:i}=this,{bodySpacing:s,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:u}=r,d=qe(r.bodyFont);let f=d.lineHeight,h=0;const p=Is(r.rtl,this.x,this.width),y=function(b){n.fillText(b,p.x(e.x+h),e.y+f/2),e.y+=f+s},v=p.textAlign(o);let m,g,x,w,k,C,E;for(n.textAlign=o,n.textBaseline="middle",n.font=d.string,e.x=Ql(this,v,r),n.fillStyle=r.bodyColor,fe(this.beforeBody,y),h=a&&v!=="right"?o==="center"?c/2+u:c+2+u:0,w=0,C=i.length;w<C;++w){for(m=i[w],g=this.labelTextColors[w],n.fillStyle=g,fe(m.before,y),x=m.lines,a&&x.length&&(this._drawColorBox(n,e,w,p,r),f=Math.max(d.lineHeight,l)),k=0,E=x.length;k<E;++k)y(x[k]),f=d.lineHeight;fe(m.after,y)}h=0,f=d.lineHeight,fe(this.afterBody,y),e.y-=s}drawFooter(e,n,r){const i=this.footer,s=i.length;let o,a;if(s){const l=Is(r.rtl,this.x,this.width);for(e.x=Ql(this,r.footerAlign,r),e.y+=r.footerMarginTop,n.textAlign=l.textAlign(r.footerAlign),n.textBaseline="middle",o=qe(r.footerFont),n.fillStyle=r.footerColor,n.font=o.string,a=0;a<s;++a)n.fillText(i[a],l.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+r.footerSpacing}}drawBackground(e,n,r,i){const{xAlign:s,yAlign:o}=this,{x:a,y:l}=e,{width:c,height:u}=r,{topLeft:d,topRight:f,bottomLeft:h,bottomRight:p}=Li(i.cornerRadius);n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.beginPath(),n.moveTo(a+d,l),o==="top"&&this.drawCaret(e,n,r,i),n.lineTo(a+c-f,l),n.quadraticCurveTo(a+c,l,a+c,l+f),o==="center"&&s==="right"&&this.drawCaret(e,n,r,i),n.lineTo(a+c,l+u-p),n.quadraticCurveTo(a+c,l+u,a+c-p,l+u),o==="bottom"&&this.drawCaret(e,n,r,i),n.lineTo(a+h,l+u),n.quadraticCurveTo(a,l+u,a,l+u-h),o==="center"&&s==="left"&&this.drawCaret(e,n,r,i),n.lineTo(a,l+d),n.quadraticCurveTo(a,l,a+d,l),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,r=this.$animations,i=r&&r.x,s=r&&r.y;if(i||s){const o=zo[e.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=L1(this,e),l=Object.assign({},o,this._size),c=D1(n,e,l),u=N1(e,l,c,n);(i._to!==u.x||s._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const i={width:this.width,height:this.height},s={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const o=ut(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(e.save(),e.globalAlpha=r,this.drawBackground(s,e,i,n),o2(e,n.textDirection),s.y+=o.top,this.drawTitle(s,e,n),this.drawBody(s,e,n),this.drawFooter(s,e,n),a2(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const r=this._active,i=e.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),s=!_u(r,i),o=this._positionChanged(i,n);(s||o)&&(this._active=i,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,s=this._active||[],o=this._getActiveElements(e,s,n,r),a=this._positionChanged(o,e),l=n||!_u(o,s)||a;return l&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),l}_getActiveElements(e,n,r,i){const s=this.options;if(e.type==="mouseout")return[];if(!i)return n.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(e,s.mode,s,r);return s.reverse&&o.reverse(),o}_positionChanged(e,n){const{caretX:r,caretY:i,options:s}=this,o=zo[s.position].call(this,e,n);return o!==!1&&(r!==o.x||i!==o.y)}}j(up,"positioners",zo);var MM={id:"tooltip",_element:up,positioners:zo,afterInit(t,e,n){n&&(t.tooltip=new up({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:R2},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},LM=Object.freeze({__proto__:null,Colors:YR,Decimation:XR,Filler:mM,Legend:wM,SubTitle:EM,Title:kM,Tooltip:MM});const DM=(t,e,n,r)=>(typeof e=="string"?(n=t.push(e)-1,r.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function NM(t,e,n,r){const i=t.indexOf(e);if(i===-1)return DM(t,e,n,r);const s=t.lastIndexOf(e);return i!==s?n:i}const FM=(t,e)=>t===null?null:Je(Math.round(t),0,e);function z1(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class dp extends ts{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:i,label:s}of n)r[i]===s&&r.splice(i,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(ue(e))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===e?n:NM(r,e,te(n,e),this._addedLabels),FM(n,r.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:r,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(r=0),n||(i=this.getLabels().length-1)),this.min=r,this.max=i}buildTicks(){const e=this.min,n=this.max,r=this.options.offset,i=[];let s=this.getLabels();s=e===0&&n===s.length-1?s:s.slice(e,n+1),this._valueRange=Math.max(s.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let o=e;o<=n;o++)i.push({value:o});return i}getLabelForValue(e){return z1.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}j(dp,"id","category"),j(dp,"defaults",{ticks:{callback:z1}});function jM(t,e){const n=[],{bounds:i,step:s,min:o,max:a,precision:l,count:c,maxTicks:u,maxDigits:d,includeBounds:f}=t,h=s||1,p=u-1,{min:y,max:v}=e,m=!ue(o),g=!ue(a),x=!ue(c),w=(v-y)/(d+1);let k=My((v-y)/p/h)*h,C,E,b,S;if(k<1e-14&&!m&&!g)return[{value:y},{value:v}];S=Math.ceil(v/k)-Math.floor(y/k),S>p&&(k=My(S*k/p/h)*h),ue(l)||(C=Math.pow(10,l),k=Math.ceil(k*C)/C),i==="ticks"?(E=Math.floor(y/k)*k,b=Math.ceil(v/k)*k):(E=y,b=v),m&&g&&s&&RO((a-o)/s,k/1e3)?(S=Math.round(Math.min((a-o)/k,u)),k=(a-o)/S,E=o,b=a):x?(E=m?o:E,b=g?a:b,S=c-1,k=(b-E)/S):(S=(b-E)/k,ra(S,Math.round(S),k/1e3)?S=Math.round(S):S=Math.ceil(S));const T=Math.max(Ly(k),Ly(E));C=Math.pow(10,ue(l)?T:l),E=Math.round(E*C)/C,b=Math.round(b*C)/C;let A=0;for(m&&(f&&E!==o?(n.push({value:o}),E<o&&A++,ra(Math.round((E+A*k)*C)/C,o,B1(o,w,t))&&A++):E<o&&A++);A<S;++A){const L=Math.round((E+A*k)*C)/C;if(g&&L>a)break;n.push({value:L})}return g&&f&&b!==a?n.length&&ra(n[n.length-1].value,a,B1(a,w,t))?n[n.length-1].value=a:n.push({value:a}):(!g||b===a)&&n.push({value:b}),n}function B1(t,e,{horizontal:n,minRotation:r}){const i=ln(r),s=(n?Math.sin(i):Math.cos(i))||.001,o=.75*e*(""+t).length;return Math.min(e/s,o)}class Pu extends ts{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return ue(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:i,max:s}=this;const o=l=>i=n?i:l,a=l=>s=r?s:l;if(e){const l=An(i),c=An(s);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(i===s){let l=s===0?1:Math.abs(s*.05);a(s+l),e||o(i-l)}this.min=i,this.max=s}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=e,i;return r?(i=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let r=this.getTickLimit();r=Math.max(2,r);const i={maxTicks:r,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},s=this._range||this,o=jM(i,s);return e.bounds==="ticks"&&Hw(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&e.length){const i=(r-n)/Math.max(e.length-1,1)/2;n-=i,r+=i}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(e){return il(e,this.chart.options.locale,this.options.ticks.format)}}class fp extends Pu{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=je(e)?e:0,this.max=je(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,r=ln(this.options.ticks.minRotation),i=(e?Math.sin(r):Math.cos(r))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,s.lineHeight/i))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}j(fp,"id","linear"),j(fp,"defaults",{ticks:{callback:md.formatters.numeric}});const Ba=t=>Math.floor(Rr(t)),gi=(t,e)=>Math.pow(10,Ba(t)+e);function $1(t){return t/Math.pow(10,Ba(t))===1}function U1(t,e,n){const r=Math.pow(10,n),i=Math.floor(t/r);return Math.ceil(e/r)-i}function zM(t,e){const n=e-t;let r=Ba(n);for(;U1(t,e,r)>10;)r++;for(;U1(t,e,r)<10;)r--;return Math.min(r,Ba(t))}function BM(t,{min:e,max:n}){e=Ot(t.min,e);const r=[],i=Ba(e);let s=zM(e,n),o=s<0?Math.pow(10,Math.abs(s)):1;const a=Math.pow(10,s),l=i>s?Math.pow(10,i):0,c=Math.round((e-l)*o)/o,u=Math.floor((e-l)/a/10)*a*10;let d=Math.floor((c-u)/Math.pow(10,s)),f=Ot(t.min,Math.round((l+u+d*Math.pow(10,s))*o)/o);for(;f<n;)r.push({value:f,major:$1(f),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(s++,d=2,o=s>=0?1:o),f=Math.round((l+u+d*Math.pow(10,s))*o)/o;const h=Ot(t.max,f);return r.push({value:h,major:$1(h),significand:d}),r}class hp extends ts{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,n){const r=Pu.prototype.parse.apply(this,[e,n]);if(r===0){this._zero=!0;return}return je(r)&&r>0?r:null}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=je(e)?Math.max(0,e):null,this.max=je(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!je(this._userMin)&&(this.min=e===gi(this.min,0)?gi(this.min,-1):gi(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let r=this.min,i=this.max;const s=a=>r=e?r:a,o=a=>i=n?i:a;r===i&&(r<=0?(s(1),o(10)):(s(gi(r,-1)),o(gi(i,1)))),r<=0&&s(gi(i,-1)),i<=0&&o(gi(r,1)),this.min=r,this.max=i}buildTicks(){const e=this.options,n={min:this._userMin,max:this._userMax},r=BM(n,this);return e.bounds==="ticks"&&Hw(r,this,"value"),e.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(e){return e===void 0?"0":il(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=Rr(e),this._valueRange=Rr(this.max)-Rr(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(Rr(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const n=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+n*this._valueRange)}}j(hp,"id","logarithmic"),j(hp,"defaults",{ticks:{callback:md.formatters.logarithmic,major:{enabled:!0}}});function pp(t){const e=t.ticks;if(e.display&&t.display){const n=ut(e.backdropPadding);return te(e.font&&e.font.size,ze.font.size)+n.height}return 0}function $M(t,e,n){return n=Oe(n)?n:[n],{w:qO(t,e.string,n),h:n.length*e.lineHeight}}function H1(t,e,n,r,i){return t===r||t===i?{start:e-n/2,end:e+n/2}:t<r||t>i?{start:e-n,end:e}:{start:e,end:e+n}}function UM(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),r=[],i=[],s=t._pointLabels.length,o=t.options.pointLabels,a=o.centerPointLabels?Pe/s:0;for(let l=0;l<s;l++){const c=o.setContext(t.getPointLabelContext(l));i[l]=c.padding;const u=t.getPointPosition(l,t.drawingArea+i[l],a),d=qe(c.font),f=$M(t.ctx,d,t._pointLabels[l]);r[l]=f;const h=Rt(t.getIndexAngle(l)+a),p=Math.round(nm(h)),y=H1(p,u.x,f.w,0,180),v=H1(p,u.y,f.h,90,270);HM(n,e,h,y,v)}t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=YM(t,r,i)}function HM(t,e,n,r,i){const s=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,l=0;r.start<e.l?(a=(e.l-r.start)/s,t.l=Math.min(t.l,e.l-a)):r.end>e.r&&(a=(r.end-e.r)/s,t.r=Math.max(t.r,e.r+a)),i.start<e.t?(l=(e.t-i.start)/o,t.t=Math.min(t.t,e.t-l)):i.end>e.b&&(l=(i.end-e.b)/o,t.b=Math.max(t.b,e.b+l))}function VM(t,e,n){const r=t.drawingArea,{extra:i,additionalAngle:s,padding:o,size:a}=n,l=t.getPointPosition(e,r+i+o,s),c=Math.round(nm(Rt(l.angle+Ue))),u=qM(l.y,a.h,c),d=GM(c),f=KM(l.x,a.w,d);return{visible:!0,x:l.x,y:u,textAlign:d,left:f,top:u,right:f+a.w,bottom:u+a.h}}function WM(t,e){if(!e)return!0;const{left:n,top:r,right:i,bottom:s}=t;return!(Gn({x:n,y:r},e)||Gn({x:n,y:s},e)||Gn({x:i,y:r},e)||Gn({x:i,y:s},e))}function YM(t,e,n){const r=[],i=t._pointLabels.length,s=t.options,{centerPointLabels:o,display:a}=s.pointLabels,l={extra:pp(s)/2,additionalAngle:o?Pe/i:0};let c;for(let u=0;u<i;u++){l.padding=n[u],l.size=e[u];const d=VM(t,u,l);r.push(d),a==="auto"&&(d.visible=WM(d,c),d.visible&&(c=d))}return r}function GM(t){return t===0||t===180?"center":t<180?"left":"right"}function KM(t,e,n){return n==="right"?t-=e:n==="center"&&(t-=e/2),t}function qM(t,e,n){return n===90||n===270?t-=e/2:(n>270||n<90)&&(t-=e),t}function XM(t,e,n){const{left:r,top:i,right:s,bottom:o}=n,{backdropColor:a}=e;if(!ue(a)){const l=Li(e.borderRadius),c=ut(e.backdropPadding);t.fillStyle=a;const u=r-c.left,d=i-c.top,f=s-r+c.width,h=o-i+c.height;Object.values(l).some(p=>p!==0)?(t.beginPath(),ja(t,{x:u,y:d,w:f,h,radius:l}),t.fill()):t.fillRect(u,d,f,h)}}function QM(t,e){const{ctx:n,options:{pointLabels:r}}=t;for(let i=e-1;i>=0;i--){const s=t._pointLabelItems[i];if(!s.visible)continue;const o=r.setContext(t.getPointLabelContext(i));XM(n,o,s);const a=qe(o.font),{x:l,y:c,textAlign:u}=s;Wi(n,t._pointLabels[i],l,c+a.lineHeight/2,a,{color:o.color,textAlign:u,textBaseline:"middle"})}}function M2(t,e,n,r){const{ctx:i}=t;if(n)i.arc(t.xCenter,t.yCenter,e,0,Ce);else{let s=t.getPointPosition(0,e);i.moveTo(s.x,s.y);for(let o=1;o<r;o++)s=t.getPointPosition(o,e),i.lineTo(s.x,s.y)}}function JM(t,e,n,r,i){const s=t.ctx,o=e.circular,{color:a,lineWidth:l}=e;!o&&!r||!a||!l||n<0||(s.save(),s.strokeStyle=a,s.lineWidth=l,s.setLineDash(i.dash),s.lineDashOffset=i.dashOffset,s.beginPath(),M2(t,n,o,r),s.closePath(),s.stroke(),s.restore())}function ZM(t,e,n){return si(t,{label:n,index:e,type:"pointLabel"})}class Bo extends Pu{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=ut(pp(this.options)/2),n=this.width=this.maxWidth-e.width,r=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+n/2+e.left),this.yCenter=Math.floor(this.top+r/2+e.top),this.drawingArea=Math.floor(Math.min(n,r)/2)}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!1);this.min=je(e)&&!isNaN(e)?e:0,this.max=je(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/pp(this.options))}generateTickLabels(e){Pu.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((n,r)=>{const i=be(this.options.pointLabels.callback,[n,r],this);return i||i===0?i:""}).filter((n,r)=>this.chart.getDataVisibility(r))}fit(){const e=this.options;e.display&&e.pointLabels.display?UM(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,n,r,i){this.xCenter+=Math.floor((e-n)/2),this.yCenter+=Math.floor((r-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,n,r,i))}getIndexAngle(e){const n=Ce/(this._pointLabels.length||1),r=this.options.startAngle||0;return Rt(e*n+ln(r))}getDistanceFromCenterForValue(e){if(ue(e))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*n:(e-this.min)*n}getValueForDistanceFromCenter(e){if(ue(e))return NaN;const n=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(e){const n=this._pointLabels||[];if(e>=0&&e<n.length){const r=n[e];return ZM(this.getContext(),e,r)}}getPointPosition(e,n,r=0){const i=this.getIndexAngle(e)-Ue+r;return{x:Math.cos(i)*n+this.xCenter,y:Math.sin(i)*n+this.yCenter,angle:i}}getPointPositionForValue(e,n){return this.getPointPosition(e,this.getDistanceFromCenterForValue(n))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:n,top:r,right:i,bottom:s}=this._pointLabelItems[e];return{left:n,top:r,right:i,bottom:s}}drawBackground(){const{backgroundColor:e,grid:{circular:n}}=this.options;if(e){const r=this.ctx;r.save(),r.beginPath(),M2(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),r.closePath(),r.fillStyle=e,r.fill(),r.restore()}}drawGrid(){const e=this.ctx,n=this.options,{angleLines:r,grid:i,border:s}=n,o=this._pointLabels.length;let a,l,c;if(n.pointLabels.display&&QM(this,o),i.display&&this.ticks.forEach((u,d)=>{if(d!==0||d===0&&this.min<0){l=this.getDistanceFromCenterForValue(u.value);const f=this.getContext(d),h=i.setContext(f),p=s.setContext(f);JM(this,h,l,o,p)}}),r.display){for(e.save(),a=o-1;a>=0;a--){const u=r.setContext(this.getPointLabelContext(a)),{color:d,lineWidth:f}=u;!f||!d||(e.lineWidth=f,e.strokeStyle=d,e.setLineDash(u.borderDash),e.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(n.reverse?this.min:this.max),c=this.getPointPosition(a,l),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,n=this.options,r=n.ticks;if(!r.display)return;const i=this.getIndexAngle(0);let s,o;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(i),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!n.reverse)return;const c=r.setContext(this.getContext(l)),u=qe(c.font);if(s=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){e.font=u.string,o=e.measureText(a.label).width,e.fillStyle=c.backdropColor;const d=ut(c.backdropPadding);e.fillRect(-o/2-d.left,-s-u.size/2-d.top,o+d.width,u.size+d.height)}Wi(e,a.label,0,-s,u,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),e.restore()}drawTitle(){}}j(Bo,"id","radialLinear"),j(Bo,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:md.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),j(Bo,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),j(Bo,"descriptors",{angleLines:{_fallback:"grid"}});const _d={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},bt=Object.keys(_d);function V1(t,e){return t-e}function W1(t,e){if(ue(e))return null;const n=t._adapter,{parser:r,round:i,isoWeekday:s}=t._parseOpts;let o=e;return typeof r=="function"&&(o=r(o)),je(o)||(o=typeof r=="string"?n.parse(o,r):n.parse(o)),o===null?null:(i&&(o=i==="week"&&(Ks(s)||s===!0)?n.startOf(o,"isoWeek",s):n.startOf(o,i)),+o)}function Y1(t,e,n,r){const i=bt.length;for(let s=bt.indexOf(t);s<i-1;++s){const o=_d[bt[s]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-e)/(a*o.size))<=r)return bt[s]}return bt[i-1]}function e3(t,e,n,r,i){for(let s=bt.length-1;s>=bt.indexOf(n);s--){const o=bt[s];if(_d[o].common&&t._adapter.diff(i,r,o)>=e-1)return o}return bt[n?bt.indexOf(n):0]}function t3(t){for(let e=bt.indexOf(t)+1,n=bt.length;e<n;++e)if(_d[bt[e]].common)return bt[e]}function G1(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:r,hi:i}=rm(n,e),s=n[r]>=e?n[r]:n[i];t[s]=!0}}function n3(t,e,n,r){const i=t._adapter,s=+i.startOf(e[0].value,r),o=e[e.length-1].value;let a,l;for(a=s;a<=o;a=+i.add(a,1,r))l=n[a],l>=0&&(e[l].major=!0);return e}function K1(t,e,n){const r=[],i={},s=e.length;let o,a;for(o=0;o<s;++o)a=e[o],i[a]=o,r.push({value:a,major:!1});return s===0||!n?r:n3(t,r,i,n)}class $a extends ts{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const r=e.time||(e.time={}),i=this._adapter=new d5._date(e.adapters.date);i.init(n),na(r.displayFormats,i.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:W1(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,r=e.time.unit||"day";let{min:i,max:s,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(i=Math.min(i,c.min)),!a&&!isNaN(c.max)&&(s=Math.max(s,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=je(i)&&!isNaN(i)?i:+n.startOf(Date.now(),r),s=je(s)&&!isNaN(s)?s:+n.endOf(Date.now(),r)+1,this.min=Math.min(i,s-1),this.max=Math.max(i+1,s)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],r=e[e.length-1]),{min:n,max:r}}buildTicks(){const e=this.options,n=e.time,r=e.ticks,i=r.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const s=this.min,o=this.max,a=NO(i,s,o);return this._unit=n.unit||(r.autoSkip?Y1(n.minUnit,this.min,this.max,this._getLabelCapacity(s)):e3(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:t3(this._unit),this.initOffsets(i),e.reverse&&a.reverse(),K1(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,r=0,i,s;this.options.offset&&e.length&&(i=this.getDecimalForValue(e[0]),e.length===1?n=1-i:n=(this.getDecimalForValue(e[1])-i)/2,s=this.getDecimalForValue(e[e.length-1]),e.length===1?r=s:r=(s-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;n=Je(n,0,o),r=Je(r,0,o),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const e=this._adapter,n=this.min,r=this.max,i=this.options,s=i.time,o=s.unit||Y1(s.minUnit,n,r,this._getLabelCapacity(n)),a=te(i.ticks.stepSize,1),l=o==="week"?s.isoWeekday:!1,c=Ks(l)||l===!0,u={};let d=n,f,h;if(c&&(d=+e.startOf(d,"isoWeek",l)),d=+e.startOf(d,c?"day":o),e.diff(r,n,o)>1e5*a)throw new Error(n+" and "+r+" are too far apart with stepSize of "+a+" "+o);const p=i.ticks.source==="data"&&this.getDataTimestamps();for(f=d,h=0;f<r;f=+e.add(f,a,o),h++)G1(u,f,p);return(f===r||i.bounds==="ticks"||h===1)&&G1(u,f,p),Object.keys(u).sort(V1).map(y=>+y)}getLabelForValue(e){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(e,r.tooltipFormat):n.format(e,r.displayFormats.datetime)}format(e,n){const i=this.options.time.displayFormats,s=this._unit,o=n||i[s];return this._adapter.format(e,o)}_tickFormatFunction(e,n,r,i){const s=this.options,o=s.ticks.callback;if(o)return be(o,[e,n,r],this);const a=s.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&a[l],d=c&&a[c],f=r[n],h=c&&d&&f&&f.major;return this._adapter.format(e,i||(h?d:u))}generateTickLabels(e){let n,r,i;for(n=0,r=e.length;n<r;++n)i=e[n],i.label=this._tickFormatFunction(i.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,r=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(e){const n=this._offsets,r=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,r=this.ctx.measureText(e).width,i=ln(this.isHorizontal()?n.maxRotation:n.minRotation),s=Math.cos(i),o=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:r*s+a*o,h:r*o+a*s}}_getLabelCapacity(e){const n=this.options.time,r=n.displayFormats,i=r[n.unit]||r.millisecond,s=this._tickFormatFunction(e,0,K1(this,[e],this._majorUnit),i),o=this._getLabelSize(s),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],n,r;if(e.length)return e;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(n=0,r=i.length;n<r;++n)e=e.concat(i[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,r;if(e.length)return e;const i=this.getLabels();for(n=0,r=i.length;n<r;++n)e.push(W1(this,i[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Yw(e.sort(V1))}}j($a,"id","time"),j($a,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Jl(t,e,n){let r=0,i=t.length-1,s,o,a,l;n?(e>=t[r].pos&&e<=t[i].pos&&({lo:r,hi:i}=Yn(t,"pos",e)),{pos:s,time:a}=t[r],{pos:o,time:l}=t[i]):(e>=t[r].time&&e<=t[i].time&&({lo:r,hi:i}=Yn(t,"time",e)),{time:s,pos:a}=t[r],{time:o,pos:l}=t[i]);const c=o-s;return c?a+(l-a)*(e-s)/c:a}class gp extends $a{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=Jl(n,this.min),this._tableRange=Jl(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:r}=this,i=[],s=[];let o,a,l,c,u;for(o=0,a=e.length;o<a;++o)c=e[o],c>=n&&c<=r&&i.push(c);if(i.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(o=0,a=i.length;o<a;++o)u=i[o+1],l=i[o-1],c=i[o],Math.round((u+l)/2)!==c&&s.push({time:c,pos:o/(a-1)});return s}_generate(){const e=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(e)||!r.length)&&r.splice(0,0,e),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((i,s)=>i-s)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?e=this.normalize(n.concat(r)):e=n.length?n:r,e=this._cache.all=e,e}getDecimalForValue(e){return(Jl(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,r=this.getDecimalForPixel(e)/n.factor-n.end;return Jl(this._table,r*this._tableRange+this._minPos,!0)}}j(gp,"id","timeseries"),j(gp,"defaults",$a.defaults);var r3=Object.freeze({__proto__:null,CategoryScale:dp,LinearScale:fp,LogarithmicScale:hp,RadialLinearScale:Bo,TimeScale:$a,TimeSeriesScale:gp});const i3=[u5,BR,LM,r3],L2="label";function q1(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function s3(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function D2(t,e){t.labels=e}function N2(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:L2;const r=[];t.datasets=e.map(i=>{const s=t.datasets.find(o=>o[n]===i[n]);return!s||!i.data||r.includes(s)?{...i}:(r.push(s),Object.assign(s,i),s)})}function o3(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L2;const n={labels:[],datasets:[]};return D2(n,t.labels),N2(n,t.datasets,e),n}function a3(t,e){const{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:s,type:o,data:a,options:l,plugins:c=[],fallbackContent:u,updateMode:d,...f}=t,h=P.useRef(null),p=P.useRef(),y=()=>{h.current&&(p.current=new bd(h.current,{type:o,data:o3(a,s),options:l&&{...l},plugins:c}),q1(e,p.current))},v=()=>{q1(e,null),p.current&&(p.current.destroy(),p.current=null)};return P.useEffect(()=>{!i&&p.current&&l&&s3(p.current,l)},[i,l]),P.useEffect(()=>{!i&&p.current&&D2(p.current.config.data,a.labels)},[i,a.labels]),P.useEffect(()=>{!i&&p.current&&a.datasets&&N2(p.current.config.data,a.datasets,s)},[i,a.datasets]),P.useEffect(()=>{p.current&&(i?(v(),setTimeout(y)):p.current.update(d))},[i,l,a.labels,a.datasets,d]),P.useEffect(()=>{p.current&&(v(),setTimeout(y))},[o]),P.useEffect(()=>(y(),()=>v()),[]),q.createElement("canvas",Object.assign({ref:h,role:"img",height:n,width:r},f),u)}const l3=P.forwardRef(a3);function c3(t,e){return bd.register(e),P.forwardRef((n,r)=>q.createElement(l3,Object.assign({},n,{ref:r,type:t})))}const u3=c3("line",oa);bd.register(...i3);const d3=t=>{const e=[],n=new Date;for(let r=1;r<=t;r++){const i=new Date;i.setDate(n.getDate()+r),e.push(i.toISOString().split("T")[0])}return e},F2=({predictedPrices:t})=>{const[e,n]=P.useState(null);return P.useEffect(()=>{if(t&&t.length>0){const i={labels:d3(t.length),datasets:[{label:"Predicted Closing Stock Prices",data:t,fill:!1,borderColor:"rgba(75, 192, 192, 1)",tension:.1}]};n(i)}},[t]),_.jsx(f3,{children:e?_.jsx(u3,{data:e}):_.jsx("p",{children:"No forecast data available"})})},f3=I.div`
  width: 90%; /* Responsive width, adjusts to screen size */
  max-width: 700px; /* Limit the width on larger screens */
  margin: 0 auto;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: white;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    font-size: 14px; /* Adjust text size for small screens */
  }
`,h3=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent),j2=t=>Array.isArray(t)&&t.every(e=>typeof e=="object"&&!(e instanceof Array)),p3=t=>Array.isArray(t)&&t.every(e=>Array.isArray(e)),g3=t=>Array.from(t.map(e=>Object.keys(e)).reduce((e,n)=>new Set([...e,...n]),[])),m3=(t,e)=>{e=e||g3(t);let n=e,r=e;j2(e)&&(n=e.map(s=>s.label),r=e.map(s=>s.key));const i=t.map(s=>r.map(o=>y3(o,s)));return[n,...i]},y3=(t,e)=>{const n=t.replace(/\[([^\]]+)]/g,".$1").split(".").reduce(function(r,i,s,o){const a=r[i];if(a==null)o.splice(1);else return a},e);return n===void 0?t in e?e[t]:"":n},v3=t=>typeof t>"u"||t===null?"":t,z2=(t,e=",",n='"')=>t.filter(r=>r).map(r=>r.map(i=>v3(i)).map(i=>`${n}${i}${n}`).join(e)).join(`
`),x3=(t,e,n,r)=>z2(e?[e,...t]:t,n,r),b3=(t,e,n,r)=>z2(m3(t,e),n,r),_3=(t,e,n,r)=>e?`${e.join(n)}
${t}`:t.replace(/"/g,'""'),B2=(t,e,n,r)=>{if(j2(t))return b3(t,e,n,r);if(p3(t))return x3(t,e,n,r);if(typeof t=="string")return _3(t,e,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')},$2=(t,e,n,r,i)=>{const s=B2(t,n,r,i),o=h3()?"application/csv":"text/csv",a=new Blob([e?"\uFEFF":"",s],{type:o}),l=`data:${o};charset=utf-8,${e?"\uFEFF":""}${s}`,c=window.URL||window.webkitURL;return typeof c.createObjectURL>"u"?l:c.createObjectURL(a)};var U2={exports:{}},w3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",S3=w3,k3=S3;function H2(){}function V2(){}V2.resetWarningCache=H2;var E3=function(){function t(r,i,s,o,a,l){if(l!==k3){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:V2,resetWarningCache:H2};return n.PropTypes=n,n};U2.exports=E3();var Pt=U2.exports;const re=$u(Pt),W2={data:Pt.oneOfType([Pt.string,Pt.array,Pt.func]).isRequired,headers:Pt.array,target:Pt.string,separator:Pt.string,filename:Pt.string,uFEFF:Pt.bool,onClick:Pt.func,asyncOnClick:Pt.bool,enclosingCharacter:Pt.string},Y2={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},C3={target:"_blank"};class X1 extends q.Component{constructor(e){super(e),this.state={}}buildURI(){return $2(...arguments)}componentDidMount(){const{data:e,headers:n,separator:r,enclosingCharacter:i,uFEFF:s,target:o,specs:a,replace:l}=this.props;this.state.page=window.open(this.buildURI(e,s,n,r,i),o,a,l)}getWindow(){return this.state.page}render(){return null}}j(X1,"defaultProps",Object.assign(Y2,C3)),j(X1,"propTypes",W2);var oc;let T3=(oc=class extends q.Component{constructor(e){super(e),this.buildURI=this.buildURI.bind(this)}buildURI(){return $2(...arguments)}handleLegacy(e,n=!1){if(window.navigator.msSaveOrOpenBlob){e.preventDefault();const{data:r,headers:i,separator:s,filename:o,enclosingCharacter:a,uFEFF:l}=this.props,c=n&&typeof r=="function"?r():r;let u=new Blob([l?"\uFEFF":"",B2(c,i,s,a)]);return window.navigator.msSaveBlob(u,o),!1}}handleAsyncClick(e){const n=r=>{if(r===!1){e.preventDefault();return}this.handleLegacy(e,!0)};this.props.onClick(e,n)}handleSyncClick(e){if(this.props.onClick(e)===!1){e.preventDefault();return}this.handleLegacy(e)}handleClick(){return e=>{if(typeof this.props.onClick=="function")return this.props.asyncOnClick?this.handleAsyncClick(e):this.handleSyncClick(e);this.handleLegacy(e)}}render(){const{data:e,headers:n,separator:r,filename:i,uFEFF:s,children:o,onClick:a,asyncOnClick:l,enclosingCharacter:c,...u}=this.props,f=typeof window>"u"?"":this.buildURI(e,s,n,r,c);return _.jsx("a",{download:i,...u,ref:h=>this.link=h,target:"_self",href:f,onClick:this.handleClick(),children:o})}},j(oc,"defaultProps",Y2),j(oc,"propTypes",W2),oc);const G2=T3,P3=({predictedPrices:t})=>{if(!t||t.length===0)return _.jsx("p",{children:"No predicted prices available."});const e=Math.max(...t).toFixed(2);console.log(e);const n=Math.min(...t).toFixed(2);console.log(n);const r=t.map(i=>({Price:i.toFixed(2)}));return _.jsxs(I3,{children:[_.jsxs(Q1,{children:[_.jsx("h2",{children:"Highest Price"}),_.jsxs("p",{children:["Price: $",e]})]}),_.jsxs(Q1,{children:[_.jsx("h2",{children:"Lowest Price"}),_.jsxs("p",{children:["Price: $",n]})]}),_.jsxs(O3,{children:[_.jsx(Lw,{})," ",_.jsx(G2,{data:r,filename:"forecasted_prices.csv",target:"_blank",children:"Download as CSV"})]})]})},I3=I.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: #ffffff;

    @media (max-width: 768px) {
        margin-right: 0;
        padding: 10px;
    }

    @media (max-width: 480px) {
        padding: 5px;
    }
`,Q1=I.div`
    background: rgba(0, 0, 0, 0.5);
    padding: 15px;
    border-radius: 8px;
    text-align: center;

    h2 {
        margin-bottom: 10px;
        font-size: 1.2rem;
    }

    p {
        margin: 5px 0;
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        padding: 10px;

        h2 {
            font-size: 1rem;
        }

        p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        padding: 8px;

        h2 {
            font-size: 0.9rem;
        }

        p {
            font-size: 0.8rem;
        }
    }
`,O3=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    font-size: 1.2rem;
    background: #004080;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;

    svg {
        font-size: 1.5rem;
    }

    a {
        color: #ffffff;
        text-decoration: none;
    }

    &:hover {
        background: #0050a0;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 8px 16px;

        svg {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 6px 12px;

        svg {
            font-size: 1rem;
        }
    }
`,A3="/assets/forecast%20page-CHLKh0kT.jpg",R3=()=>{const[t,e]=P.useState([]),[n,r]=P.useState(null),[i,s]=P.useState(!1),o=l=>{e(l),console.log(l)},a=async l=>{s(!0),await new Promise(u=>setTimeout(u,1e3));const c=l.map(u=>u.forecast);r(c),console.log("Received cleaned forecast result:",c),s(!1)};return _.jsxs(M3,{children:[_.jsx(L3,{}),_.jsxs(D3,{children:[_.jsxs(N3,{children:[_.jsx("h1",{children:"CSV Stock Forecast"}),_.jsx("p",{children:"Upload your CSV file and get detailed stock price predictions."})]}),_.jsx(F3,{children:t.length===0?_.jsx(D4,{onUploadSuccess:o}):_.jsx(Y4,{csvData:t,onForecast:a})}),n&&_.jsxs(j3,{children:[_.jsx(z3,{children:_.jsx(F2,{predictedPrices:n})}),_.jsx(B3,{children:_.jsx(P3,{predictedPrices:n})})]})]}),i&&_.jsx($3,{children:_.jsxs(U3,{children:[_.jsx(Nw,{className:"spinner"}),_.jsx(H3,{children:"Generating forecast..."})]})})]})},M3=I.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 84vh;
  padding: 20px;
  background-color: #0f2027;
  color: white;
  overflow: hidden;
`,L3=I.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${A3});
  background-size: cover;
  background-position: center;
  z-index: 1;
  filter: blur(5px) brightness(0.5);
`,D3=I.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  width: 100%; /* Ensure full width */
  padding: 20px;
  gap: 20px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    padding: 10px; /* Adjust padding for smaller screens */
  }
     animation: fadeIn 1s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0.5; }
    to { opacity: 1; }
  }
`,N3=I.div`
  text-align: center;
  color: #f0f0f0;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    background: linear-gradient(90deg, #00f260, #0575e6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    color: #c0c0c0;
  }
`,F3=I.div`
  width: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 10px; /* Reduce padding for smaller screens */
  }
`,j3=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 10px; /* Reduce padding for smaller screens */
  }
`,z3=I.div`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
  max-height: 600px; /* Increased max height */
  min-height: 300px; /* Set a minimum height */
  overflow: hidden;

  @media (max-width: 768px) {
    max-height: 300px; /* Adjust for smaller screens */
  }
`,B3=I.div`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
  overflow-y: auto;
  max-height: 400px; /* Set max height */
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  display: flex; /* Add flex display */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */

  @media (max-width: 768px) {
    max-height: 400px; /* Adjust for smaller screens */
  }
`,$3=I.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`,U3=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .spinner {
    font-size: 4rem;
    color: #ffffff;
    animation: spin 2s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,H3=I.div`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #ffffff;
`,J1=({image:t,text:e,onClick:n})=>_.jsxs(V3,{image:t,onClick:n,children:[_.jsx("span",{children:e})," "]}),V3=I.div`
  position: relative;
  width: 90%; // Reduced width for small screens
  max-width: 400px; // Reduced max width for larger screens
  height: 200px; // Reduced height for better visibility
  background-image: url(${t=>t.image}); 
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover {
    opacity: 0.8;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    filter: blur(0px);
    z-index: 1;
  }

  & > span {
    position: relative;
    top: 0;

    z-index:2;
    font-size: 16px; // Reduced font size for smaller screens
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    padding: 10px;
  }

  @media (min-width: 768px) {
    width: 40%; // Reduced width for larger screens
    height: 250px; // Reduced height for larger screens
    & > span {
      font-size: 24px; // Adjusted font size for larger screens
    }
  }
`,W3="/assets/data-analysis-C0DpbCRa.gif",Y3="/assets/full-analysis-AHPXtfY0.gif",Z1="/assets/profpic-DUp6ZNyD.jpg";var ev={};/**
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
 */const K2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},G3=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},q2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,h=c&63;l||(h=64,o||(f=64)),r.push(n[u],n[d],n[f],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(K2(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):G3(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new K3;const f=s<<2|a>>4;if(r.push(f),c!==64){const h=a<<4&240|c>>2;if(r.push(h),d!==64){const p=c<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class K3 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const q3=function(t){const e=K2(t);return q2.encodeByteArray(e,!0)},X2=function(t){return q3(t).replace(/\./g,"")},Q2=function(t){try{return q2.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function X3(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Q3=()=>X3().__FIREBASE_DEFAULTS__,J3=()=>{if(typeof process>"u"||typeof ev>"u")return;const t=ev.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Z3=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Q2(t[1]);return e&&JSON.parse(e)},gm=()=>{try{return Q3()||J3()||Z3()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eL=t=>{var e,n;return(n=(e=gm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},J2=()=>{var t;return(t=gm())===null||t===void 0?void 0:t.config},Z2=t=>{var e;return(e=gm())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class tL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function rL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function iL(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oL(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aL(){try{return typeof indexedDB=="object"}catch{return!1}}function lL(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const cL="FirebaseError";class oi extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cL,Object.setPrototypeOf(this,oi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ol.prototype.create)}}class ol{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uL(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new oi(i,a,r)}}function uL(t,e){return t.replace(dL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dL=/\{\$([^}]+)}/g;function fL(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Iu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(tv(s)&&tv(o)){if(!Iu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function tv(t){return t!==null&&typeof t=="object"}/**
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
 */function al(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $o(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Uo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function hL(t,e){const n=new pL(t,e);return n.subscribe.bind(n)}class pL{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gL(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Tf),i.error===void 0&&(i.error=Tf),i.complete===void 0&&(i.complete=Tf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gL(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tf(){}/**
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
 */function ns(t){return t&&t._delegate?t._delegate:t}class Qs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bi="[DEFAULT]";/**
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
 */class mL{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vL(e))try{this.getOrInitializeService({instanceIdentifier:bi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bi){return this.instances.has(e)}getOptions(e=bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yL(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bi){return this.component?this.component.multipleInstances?e:bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yL(t){return t===bi?void 0:t}function vL(t){return t.instantiationMode==="EAGER"}/**
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
 */class xL{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mL(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const bL={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},_L=ye.INFO,wL={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},SL=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wL[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eS{constructor(e){this.name=e,this._logLevel=_L,this._logHandler=SL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const kL=(t,e)=>e.some(n=>t instanceof n);let nv,rv;function EL(){return nv||(nv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CL(){return rv||(rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tS=new WeakMap,mp=new WeakMap,nS=new WeakMap,Pf=new WeakMap,mm=new WeakMap;function TL(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tS.set(n,t)}).catch(()=>{}),mm.set(e,t),e}function PL(t){if(mp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});mp.set(t,e)}let yp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IL(t){yp=t(yp)}function OL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(If(this),e,...n);return nS.set(r,e.sort?e.sort():[e]),Yr(r)}:CL().includes(t)?function(...e){return t.apply(If(this),e),Yr(tS.get(this))}:function(...e){return Yr(t.apply(If(this),e))}}function AL(t){return typeof t=="function"?OL(t):(t instanceof IDBTransaction&&PL(t),kL(t,EL())?new Proxy(t,yp):t)}function Yr(t){if(t instanceof IDBRequest)return TL(t);if(Pf.has(t))return Pf.get(t);const e=AL(t);return e!==t&&(Pf.set(t,e),mm.set(e,t)),e}const If=t=>mm.get(t);function RL(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Yr(o.result),l.oldVersion,l.newVersion,Yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ML=["get","getKey","getAll","getAllKeys","count"],LL=["put","add","delete","clear"],Of=new Map;function iv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Of.get(e))return Of.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=LL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ML.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Of.set(e,s),s}IL(t=>({...t,get:(e,n,r)=>iv(e,n)||t.get(e,n,r),has:(e,n)=>!!iv(e,n)||t.has(e,n)}));/**
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
 */class DL{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NL(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NL(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vp="@firebase/app",sv="0.10.11";/**
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
 */const rr=new eS("@firebase/app"),FL="@firebase/app-compat",jL="@firebase/analytics-compat",zL="@firebase/analytics",BL="@firebase/app-check-compat",$L="@firebase/app-check",UL="@firebase/auth",HL="@firebase/auth-compat",VL="@firebase/database",WL="@firebase/database-compat",YL="@firebase/functions",GL="@firebase/functions-compat",KL="@firebase/installations",qL="@firebase/installations-compat",XL="@firebase/messaging",QL="@firebase/messaging-compat",JL="@firebase/performance",ZL="@firebase/performance-compat",eD="@firebase/remote-config",tD="@firebase/remote-config-compat",nD="@firebase/storage",rD="@firebase/storage-compat",iD="@firebase/firestore",sD="@firebase/vertexai-preview",oD="@firebase/firestore-compat",aD="firebase",lD="10.13.2";/**
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
 */const xp="[DEFAULT]",cD={[vp]:"fire-core",[FL]:"fire-core-compat",[zL]:"fire-analytics",[jL]:"fire-analytics-compat",[$L]:"fire-app-check",[BL]:"fire-app-check-compat",[UL]:"fire-auth",[HL]:"fire-auth-compat",[VL]:"fire-rtdb",[WL]:"fire-rtdb-compat",[YL]:"fire-fn",[GL]:"fire-fn-compat",[KL]:"fire-iid",[qL]:"fire-iid-compat",[XL]:"fire-fcm",[QL]:"fire-fcm-compat",[JL]:"fire-perf",[ZL]:"fire-perf-compat",[eD]:"fire-rc",[tD]:"fire-rc-compat",[nD]:"fire-gcs",[rD]:"fire-gcs-compat",[iD]:"fire-fst",[oD]:"fire-fst-compat",[sD]:"fire-vertex","fire-js":"fire-js",[aD]:"fire-js-all"};/**
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
 */const Ou=new Map,uD=new Map,bp=new Map;function ov(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ua(t){const e=t.name;if(bp.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;bp.set(e,t);for(const n of Ou.values())ov(n,t);for(const n of uD.values())ov(n,t);return!0}function rS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t.settings!==void 0}/**
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
 */const dD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new ol("app","Firebase",dD);/**
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
 */class fD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
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
 */const ll=lD;function iS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gr.create("bad-app-name",{appName:String(i)});if(n||(n=J2()),!n)throw Gr.create("no-options");const s=Ou.get(i);if(s){if(Iu(n,s.options)&&Iu(r,s.config))return s;throw Gr.create("duplicate-app",{appName:i})}const o=new xL(i);for(const l of bp.values())o.addComponent(l);const a=new fD(n,r,o);return Ou.set(i,a),a}function hD(t=xp){const e=Ou.get(t);if(!e&&t===xp&&J2())return iS();if(!e)throw Gr.create("no-app",{appName:t});return e}function Os(t,e,n){var r;let i=(r=cD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(a.join(" "));return}Ua(new Qs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const pD="firebase-heartbeat-database",gD=1,Ha="firebase-heartbeat-store";let Af=null;function sS(){return Af||(Af=RL(pD,gD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ha)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),Af}async function mD(t){try{const n=(await sS()).transaction(Ha),r=await n.objectStore(Ha).get(oS(t));return await n.done,r}catch(e){if(e instanceof oi)rr.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(n.message)}}}async function av(t,e){try{const r=(await sS()).transaction(Ha,"readwrite");await r.objectStore(Ha).put(e,oS(t)),await r.done}catch(n){if(n instanceof oi)rr.warn(n.message);else{const r=Gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(r.message)}}}function oS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yD=1024,vD=30*24*60*60*1e3;class xD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _D(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=vD}),this._storage.overwrite(this._heartbeatsCache))}catch(r){rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lv(),{heartbeatsToSend:r,unsentEntries:i}=bD(this._heartbeatsCache.heartbeats),s=X2(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return rr.warn(n),""}}}function lv(){return new Date().toISOString().substring(0,10)}function bD(t,e=yD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _D{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aL()?lL().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return av(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return av(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cv(t){return X2(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wD(t){Ua(new Qs("platform-logger",e=>new DL(e),"PRIVATE")),Ua(new Qs("heartbeat",e=>new xD(e),"PRIVATE")),Os(vp,sv,t),Os(vp,sv,"esm2017"),Os("fire-js","")}wD("");var SD="firebase",kD="10.13.2";/**
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
 */Os(SD,kD,"app");function ym(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function aS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ED=aS,lS=new ol("auth","Firebase",aS());/**
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
 */const Au=new eS("@firebase/auth");function CD(t,...e){Au.logLevel<=ye.WARN&&Au.warn(`Auth (${ll}): ${t}`,...e)}function Mc(t,...e){Au.logLevel<=ye.ERROR&&Au.error(`Auth (${ll}): ${t}`,...e)}/**
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
 */function tn(t,...e){throw xm(t,...e)}function pn(t,...e){return xm(t,...e)}function vm(t,e,n){const r=Object.assign(Object.assign({},ED()),{[e]:n});return new ol("auth","Firebase",r).create(e,{appName:t.name})}function Jn(t){return vm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function TD(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&tn(t,"argument-error"),vm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return lS.create(t,...e)}function J(t,e,...n){if(!t)throw xm(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mc(e),new Error(e)}function ir(t,e){t||Kn(e)}/**
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
 */function _p(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PD(){return uv()==="http:"||uv()==="https:"}function uv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ID(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PD()||iL()||"connection"in navigator)?navigator.onLine:!0}function OD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class cl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=nL()||sL()}get(){return ID()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bm(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class cS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const AD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const RD=new cl(3e4,6e4);function ai(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function li(t,e,n,r,i={}){return uS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=al(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return rL()||(c.referrerPolicy="no-referrer"),cS.fetch()(dS(t,t.config.apiHost,n,a),c)})}async function uS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AD),e);try{const i=new LD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zl(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw vm(t,u,c);tn(t,u)}}catch(i){if(i instanceof oi)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function ul(t,e,n,r,i={}){const s=await li(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function dS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bm(t.config,i):`${t.config.apiScheme}://${i}`}function MD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),RD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pn(t,e,r);return i.customData._tokenResponse=n,i}function dv(t){return t!==void 0&&t.enterprise!==void 0}class DD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return MD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ND(t,e){return li(t,"GET","/v2/recaptchaConfig",ai(t,e))}/**
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
 */async function FD(t,e){return li(t,"POST","/v1/accounts:delete",e)}async function fS(t,e){return li(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function la(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jD(t,e=!1){const n=ns(t),r=await n.getIdToken(e),i=_m(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:la(Rf(i.auth_time)),issuedAtTime:la(Rf(i.iat)),expirationTime:la(Rf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rf(t){return Number(t)*1e3}function _m(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Mc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Q2(n);return i?JSON.parse(i):(Mc("Failed to decode base64 JWT payload"),null)}catch(i){return Mc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fv(t){const e=_m(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Va(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof oi&&zD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class BD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=la(this.lastLoginAt),this.creationTime=la(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ru(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Va(t,fS(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?hS(s.providerUserInfo):[],a=UD(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new wp(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function $D(t){const e=ns(t);await Ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function hS(t){return t.map(e=>{var{providerId:n}=e,r=ym(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function HD(t,e){const n=await uS(t,{},async()=>{const r=al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=dS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VD(t,e){return li(t,"POST","/v2/accounts:revokeToken",ai(t,e))}/**
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
 */class As{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=fv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await HD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new As;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new As,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
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
 */function pr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ym(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Va(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jD(this,e)}reload(){return $D(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ru(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(Jn(this.auth));const e=await this.getIdToken();return await Va(this,FD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:x,emailVerified:w,isAnonymous:k,providerData:C,stsTokenManager:E}=n;J(x&&E,e,"internal-error");const b=As.fromJSON(this.name,E);J(typeof x=="string",e,"internal-error"),pr(d,e.name),pr(f,e.name),J(typeof w=="boolean",e,"internal-error"),J(typeof k=="boolean",e,"internal-error"),pr(h,e.name),pr(p,e.name),pr(y,e.name),pr(v,e.name),pr(m,e.name),pr(g,e.name);const S=new qn({uid:x,auth:e,email:f,emailVerified:w,displayName:d,isAnonymous:k,photoURL:p,phoneNumber:h,tenantId:y,stsTokenManager:b,createdAt:m,lastLoginAt:g});return C&&Array.isArray(C)&&(S.providerData=C.map(T=>Object.assign({},T))),v&&(S._redirectEventId=v),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new As;i.updateFromServerResponse(n);const s=new qn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ru(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?hS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new As;a.updateFromIdToken(r);const l=new qn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new wp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const hv=new Map;function Xn(t){ir(t instanceof Function,"Expected a class definition");let e=hv.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hv.set(t,e),e)}/**
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
 */class pS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pS.type="NONE";const pv=pS;/**
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
 */function Lc(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Lc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Lc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rs(Xn(pv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Xn(pv);const o=Lc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=qn._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Rs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Rs(s,e,r))}}/**
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
 */function gv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bS(e))return"Blackberry";if(_S(e))return"Webos";if(mS(e))return"Safari";if((e.includes("chrome/")||yS(e))&&!e.includes("edge/"))return"Chrome";if(xS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gS(t=pt()){return/firefox\//i.test(t)}function mS(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yS(t=pt()){return/crios\//i.test(t)}function vS(t=pt()){return/iemobile/i.test(t)}function xS(t=pt()){return/android/i.test(t)}function bS(t=pt()){return/blackberry/i.test(t)}function _S(t=pt()){return/webos/i.test(t)}function wm(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WD(t=pt()){var e;return wm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YD(){return oL()&&document.documentMode===10}function wS(t=pt()){return wm(t)||xS(t)||_S(t)||bS(t)||/windows phone/i.test(t)||vS(t)}/**
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
 */function SS(t,e=[]){let n;switch(t){case"Browser":n=gv(pt());break;case"Worker":n=`${gv(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ll}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class GD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function KD(t,e={}){return li(t,"GET","/v2/passwordPolicy",ai(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const qD=6;class XD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:qD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class QD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mv(this),this.idTokenSubscription=new mv(this),this.beforeStateQueue=new GD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await fS(this,{idToken:e}),r=await qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ru(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(Jn(this));const n=e?ns(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(Jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(Jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KD(this),n=new XD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ol("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=SS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ci(t){return ns(t)}class mv{constructor(e){this.auth=e,this.observer=null,this.addObserver=hL(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JD(t){wd=t}function kS(t){return wd.loadJS(t)}function ZD(){return wd.recaptchaEnterpriseScript}function e8(){return wd.gapiScript}function t8(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const n8="recaptcha-enterprise",r8="NO_RECAPTCHA";class i8{constructor(e){this.type=n8,this.auth=ci(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ND(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new DD(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;dv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(r8)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&dv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ZD();l.length!==0&&(l+=a),kS(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function yv(t,e,n,r=!1){const i=new i8(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Sp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await yv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await yv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function s8(t,e){const n=rS(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Iu(s,e??{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function o8(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function a8(t,e,n){const r=ci(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ES(e),{host:o,port:a}=l8(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),c8()}function ES(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function l8(t){const e=ES(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vv(o)}}}function vv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function c8(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Sm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}async function u8(t,e){return li(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function d8(t,e){return ul(t,"POST","/v1/accounts:signInWithPassword",ai(t,e))}/**
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
 */async function f8(t,e){return ul(t,"POST","/v1/accounts:signInWithEmailLink",ai(t,e))}async function h8(t,e){return ul(t,"POST","/v1/accounts:signInWithEmailLink",ai(t,e))}/**
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
 */class Wa extends Sm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Wa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sp(e,n,"signInWithPassword",d8);case"emailLink":return f8(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sp(e,r,"signUpPassword",u8);case"emailLink":return h8(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ms(t,e){return ul(t,"POST","/v1/accounts:signInWithIdp",ai(t,e))}/**
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
 */const p8="http://localhost";class Yi extends Sm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ym(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:p8,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=al(n)}return e}}/**
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
 */function g8(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function m8(t){const e=$o(Uo(t)).link,n=e?$o(Uo(e)).deep_link_id:null,r=$o(Uo(t)).deep_link_id;return(r?$o(Uo(r)).link:null)||r||n||e||t}class km{constructor(e){var n,r,i,s,o,a;const l=$o(Uo(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=g8((i=l.mode)!==null&&i!==void 0?i:null);J(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=m8(e);try{return new km(n)}catch{return null}}}/**
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
 */class ao{constructor(){this.providerId=ao.PROVIDER_ID}static credential(e,n){return Wa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=km.parseLink(n);return J(r,"argument-error"),Wa._fromEmailAndCode(e,r.code,r.tenantId)}}ao.PROVIDER_ID="password";ao.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ao.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Em{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dl extends Em{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class kr extends dl{constructor(){super("facebook.com")}static credential(e){return Yi._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";kr.PROVIDER_ID="facebook.com";/**
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
 */class Cn extends dl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yi._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
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
 */class Er extends dl{constructor(){super("github.com")}static credential(e){return Yi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
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
 */class Cr extends dl{constructor(){super("twitter.com")}static credential(e,n){return Yi._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cr.credential(n,r)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
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
 */async function y8(t,e){return ul(t,"POST","/v1/accounts:signUp",ai(t,e))}/**
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
 */class Gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await qn._fromIdTokenResponse(e,r,i),o=xv(r);return new Gi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xv(r);return new Gi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Mu extends oi{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mu(e,n,r,i)}}function CS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mu._fromErrorAndOperation(t,s,e,r):s})}async function v8(t,e,n=!1){const r=await Va(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gi._forOperation(t,"link",r)}/**
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
 */async function x8(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(Jn(r));const i="reauthenticate";try{const s=await Va(t,CS(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=_m(s.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),Gi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
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
 */async function TS(t,e,n=!1){if(cn(t.app))return Promise.reject(Jn(t));const r="signIn",i=await CS(t,r,e),s=await Gi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function b8(t,e){return TS(ci(t),e)}/**
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
 */async function PS(t){const e=ci(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _8(t,e,n){if(cn(t.app))return Promise.reject(Jn(t));const r=ci(t),o=await Sp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",y8).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&PS(t),l}),a=await Gi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function w8(t,e,n){return cn(t.app)?Promise.reject(Jn(t)):b8(ns(t),ao.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&PS(t),r})}function S8(t,e,n,r){return ns(t).onIdTokenChanged(e,n,r)}function k8(t,e,n){return ns(t).beforeAuthStateChanged(e,n)}const Lu="__sak";/**
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
 */class IS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lu,"1"),this.storage.removeItem(Lu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const E8=1e3,C8=10;class OS extends IS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);YD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,C8):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},E8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}OS.type="LOCAL";const T8=OS;/**
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
 */class AS extends IS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}AS.type="SESSION";const RS=AS;/**
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
 */function P8(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Sd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Sd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await P8(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sd.receivers=[];/**
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
 */function Cm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class I8{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Cm("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Rn(){return window}function O8(t){Rn().location.href=t}/**
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
 */function MS(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function A8(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function R8(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function M8(){return MS()?self:null}/**
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
 */const LS="firebaseLocalStorageDb",L8=1,Du="firebaseLocalStorage",DS="fbase_key";class fl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kd(t,e){return t.transaction([Du],e?"readwrite":"readonly").objectStore(Du)}function D8(){const t=indexedDB.deleteDatabase(LS);return new fl(t).toPromise()}function kp(){const t=indexedDB.open(LS,L8);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Du,{keyPath:DS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Du)?e(r):(r.close(),await D8(),e(await kp()))})})}async function bv(t,e,n){const r=kd(t,!0).put({[DS]:e,value:n});return new fl(r).toPromise()}async function N8(t,e){const n=kd(t,!1).get(e),r=await new fl(n).toPromise();return r===void 0?null:r.value}function _v(t,e){const n=kd(t,!0).delete(e);return new fl(n).toPromise()}const F8=800,j8=3;class NS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>j8)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return MS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sd._getInstance(M8()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await A8(),!this.activeServiceWorker)return;this.sender=new I8(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||R8()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kp();return await bv(e,Lu,"1"),await _v(e,Lu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>N8(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_v(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kd(i,!1).getAll();return new fl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}NS.type="LOCAL";const z8=NS;new cl(3e4,6e4);/**
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
 */function FS(t,e){return e?Xn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Tm extends Sm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function B8(t){return TS(t.auth,new Tm(t),t.bypassAuthState)}function $8(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),x8(n,new Tm(t),t.bypassAuthState)}async function U8(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),v8(n,new Tm(t),t.bypassAuthState)}/**
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
 */class jS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return B8;case"linkViaPopup":case"linkViaRedirect":return U8;case"reauthViaPopup":case"reauthViaRedirect":return $8;default:tn(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const H8=new cl(2e3,1e4);async function zS(t,e,n){if(cn(t.app))return Promise.reject(pn(t,"operation-not-supported-in-this-environment"));const r=ci(t);TD(t,e,Em);const i=FS(r,n);return new Ti(r,"signInViaPopup",e,i).executeNotNull()}class Ti extends jS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ti.currentPopupAction&&Ti.currentPopupAction.cancel(),Ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=Cm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,H8.get())};e()}}Ti.currentPopupAction=null;/**
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
 */const V8="pendingRedirect",Dc=new Map;class W8 extends jS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Dc.get(this.auth._key());if(!e){try{const r=await Y8(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Dc.set(this.auth._key(),e)}return this.bypassAuthState||Dc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Y8(t,e){const n=q8(e),r=K8(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function G8(t,e){Dc.set(t._key(),e)}function K8(t){return Xn(t._redirectPersistence)}function q8(t){return Lc(V8,t.config.apiKey,t.name)}async function X8(t,e,n=!1){if(cn(t.app))return Promise.reject(Jn(t));const r=ci(t),i=FS(r,e),o=await new W8(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Q8=10*60*1e3;class J8{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Z8(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!BS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Q8&&this.cachedEventUids.clear(),this.cachedEventUids.has(wv(e))}saveEventToCache(e){this.cachedEventUids.add(wv(e)),this.lastProcessedEventTime=Date.now()}}function wv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function BS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Z8(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return BS(t);default:return!1}}/**
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
 */async function eN(t,e={}){return li(t,"GET","/v1/projects",e)}/**
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
 */const tN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nN=/^https?/;async function rN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eN(t);for(const n of e)try{if(iN(n))return}catch{}tn(t,"unauthorized-domain")}function iN(t){const e=_p(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nN.test(n))return!1;if(tN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const sN=new cl(3e4,6e4);function Sv(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function oN(t){return new Promise((e,n)=>{var r,i,s;function o(){Sv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sv(),n(pn(t,"network-request-failed"))},timeout:sN.get()})}if(!((i=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Rn().gapi)===null||s===void 0)&&s.load)o();else{const a=t8("iframefcb");return Rn()[a]=()=>{gapi.load?o():n(pn(t,"network-request-failed"))},kS(`${e8()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Nc=null,e})}let Nc=null;function aN(t){return Nc=Nc||oN(t),Nc}/**
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
 */const lN=new cl(5e3,15e3),cN="__/auth/iframe",uN="emulator/auth/iframe",dN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hN(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bm(e,uN):`https://${t.config.authDomain}/${cN}`,r={apiKey:e.apiKey,appName:t.name,v:ll},i=fN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${al(r).slice(1)}`}async function pN(t){const e=await aN(t),n=Rn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:hN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),a=Rn().setTimeout(()=>{s(o)},lN.get());function l(){Rn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const gN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mN=500,yN=600,vN="_blank",xN="http://localhost";class kv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bN(t,e,n,r=mN,i=yN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},gN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=pt().toLowerCase();n&&(a=yS(c)?vN:n),gS(c)&&(e=e||xN,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[h,p])=>`${f}${h}=${p},`,"");if(WD(c)&&a!=="_self")return _N(e||"",a),new kv(null);const d=window.open(e||"",a,u);J(d,t,"popup-blocked");try{d.focus()}catch{}return new kv(d)}function _N(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const wN="__/auth/handler",SN="emulator/auth/handler",kN=encodeURIComponent("fac");async function Ev(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ll,eventId:i};if(e instanceof Em){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fL(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof dl){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${kN}=${encodeURIComponent(l)}`:"";return`${EN(t)}?${al(a).slice(1)}${c}`}function EN({config:t}){return t.emulator?bm(t,SN):`https://${t.authDomain}/${wN}`}/**
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
 */const Mf="webStorageSupport";class CN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=RS,this._completeRedirectFn=X8,this._overrideRedirectResult=G8}async _openPopup(e,n,r,i){var s;ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ev(e,n,r,_p(),i);return bN(e,o,Cm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ev(e,n,r,_p(),i);return O8(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pN(e),r=new J8(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mf,{type:Mf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Mf];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wS()||mS()||wm()}}const TN=CN;var Cv="@firebase/auth",Tv="1.7.9";/**
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
 */class PN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ON(t){Ua(new Qs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:SS(t)},c=new QD(r,i,s,l);return o8(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ua(new Qs("auth-internal",e=>{const n=ci(e.getProvider("auth").getImmediate());return(r=>new PN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Os(Cv,Tv,IN(t)),Os(Cv,Tv,"esm2017")}/**
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
 */const AN=5*60,RN=Z2("authIdTokenMaxAge")||AN;let Pv=null;const MN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RN)return;const i=n==null?void 0:n.token;Pv!==i&&(Pv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function LN(t=hD()){const e=rS(t,"auth");if(e.isInitialized())return e.getImmediate();const n=s8(t,{popupRedirectResolver:TN,persistence:[z8,T8,RS]}),r=Z2("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=MN(s.toString());k8(n,o,()=>o(n.currentUser)),S8(n,a=>o(a))}}const i=eL("auth");return i&&a8(n,`http://${i}`),n}function DN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}JD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ON("Browser");const NN={apiKey:"AIzaSyBKZmx_gXtQ_8_r-4kizDN79f10Xoz3mRc",authDomain:"tradevision-3c543.firebaseapp.com",projectId:"tradevision-3c543",storageBucket:"tradevision-3c543.appspot.com",messagingSenderId:"224401465960",appId:"1:224401465960:web:008df110daebbe1cf051dd",measurementId:"G-74PSEJ2Q37"},FN=iS(NN),Ya=LN(FN),jN=()=>{const t=es(),[e,n]=P.useState({name:"",email:"harithamihimal@gmail.com",profilePicture:Z1}),[r,i]=P.useState(!0),[s,o]=P.useState(!1);P.useEffect(()=>{const u=Ya.currentUser;u&&n({name:u.displayName||"Anonymous User",email:u.email||"harithamihimal@gmail.com",profilePicture:u.photoURL||Z1})},[]);const a=()=>{t("/CsvUpload")},l=()=>{alert("Retrieve Saved Forecasts clicked!")},c=()=>{s||(i(!1),o(!0))};return _.jsxs(zN,{children:[_.jsxs(BN,{children:[_.jsx($N,{src:e.profilePicture,alt:"Profile"}),_.jsxs(UN,{children:[_.jsxs(HN,{children:["Hi, ",e.name," 👋"]}),_.jsx(VN,{children:e.email})]})]}),_.jsx(Iv,{children:_.jsxs(WN,{children:[_.jsx(J1,{image:W3,text:"Generate Forecasts",onClick:a}),_.jsx(J1,{image:Y3,text:"Retrieve Saved Forecasts",onClick:l})]})}),_.jsxs(Iv,{children:[_.jsxs(YN,{children:[_.jsx(Ov,{children:"My Account"}),_.jsxs(ec,{children:[_.jsx(tc,{children:"Preferences"}),_.jsx(Lf,{children:_.jsxs(GN,{children:[_.jsxs(Av,{children:[_.jsx("input",{type:"radio",id:"light",name:"theme",value:"Light"}),_.jsx("label",{htmlFor:"light",children:"Light"})]}),_.jsxs(Av,{children:[_.jsx("input",{type:"radio",id:"dark",name:"theme",value:"Dark"}),_.jsx("label",{htmlFor:"dark",children:"Dark"})]})]})})]}),_.jsxs(ec,{children:[_.jsx(tc,{children:"Email:"}),_.jsx(Lf,{children:e.email})]}),_.jsxs(ec,{children:[_.jsx(tc,{children:"Update Password"}),_.jsx(Rv,{children:"Change Password"})]}),_.jsxs(ec,{children:[_.jsx(tc,{children:"Manage Subscription"}),_.jsx(Lf,{children:"No active subscription"}),_.jsx(Rv,{children:"Upgrade to Stock Analysis Pro"})]})]}),_.jsxs(KN,{children:[_.jsx(Ov,{children:"Get Support"}),_.jsx(qN,{children:"You can reach us through the following channels:"}),_.jsxs(JN,{children:[_.jsxs(Co,{href:"https://wa.me/your-number",target:"_blank",children:[_.jsx(S4,{})," WhatsApp"]}),_.jsxs(Co,{href:"https://facebook.com/your-page",target:"_blank",children:[_.jsx(_4,{})," Facebook"]}),_.jsxs(Co,{href:"https://instagram.com/your-handle",target:"_blank",children:[_.jsx(w4,{})," Instagram"]}),_.jsxs(Co,{href:"https://discord.com/invite/your-invite",target:"_blank",children:[_.jsx(b4,{})," Discord"]}),_.jsxs(Co,{href:"mailto:support@stockanalysis.com",children:[_.jsx(T4,{})," Email"]})]})]})]}),_.jsx(QN,{isBouncing:r,onClick:c,children:_.jsx(Qg,{})})]})},zN=I.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(135deg, #0a0a23, #001f3f, #003f5c); 
  color: #ffffff;
  min-height: 100vh;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 15px;
  }
`,BN=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20px;
  
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 15px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`,$N=I.img`
  border-radius: 50%;
  width: 100px;
  height: 90px;
  border: 3px solid #0066cc;
  box-shadow: 0px 0px 15px rgba(0, 102, 204, 0.8);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    border-color: #00ccff;
    box-shadow: 0px 0px 25px rgba(0, 204, 255, 0.9);
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`,UN=I.div`
  flex: 1;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 15px;
  }
`,HN=I.h2`
  margin: 5px 0;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.8);
  font-size: 1.8rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,VN=I.p`
  margin: 0;
  color: #bbb;
  font-size: 1rem;
`,WN=I.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 5px;
  width: 90%;
  max-width: 1200px;
  max-height: 300px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`,Iv=I.div`
  display: flex;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.0);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  max-width: 1700px;
  gap: 20px;
  width: 98%;
  blur: 10px;
`,YN=I.div`
   background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 15px;
  max-width: 800px;
  gap: 20px;
  width: 100%;
`,Ov=I.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 20px;
  text-transform: uppercase;
`,ec=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,tc=I.label`
  font-size: 1.1rem;
  color: #ffffff;
`,Lf=I.div`
  font-size: 1rem;
  color: #bbb;
`,GN=I.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,Av=I.div`
  display: flex;
  align-items: center;
  gap: 5px;

  label {
    font-size: 1rem;
    color: #ffffff;
  }

  input[type='radio'] {
    accent-color: #0066cc;
  }
`,Rv=I.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #0066cc;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0055aa;
  }
`,KN=I.div`
   background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 15px;
  max-width: 800px;
  gap: 20px;
  width: 100%;
`,qN=I.p`
  font-size: 1rem;
  color: #bbb;
`;I.a`
  color: #0066cc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;const XN=oo`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,QN=I.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;

  animation: ${({isBouncing:t})=>t?nl`${XN} 2s infinite`:"none"};
`,JN=I.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Co=I.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00ccff;
  }

  svg {
    font-size: 1.5rem;
  }
`;function $S(t,e){return function(){return t.apply(e,arguments)}}const{toString:ZN}=Object.prototype,{getPrototypeOf:Pm}=Object,Ed=(t=>e=>{const n=ZN.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),yn=t=>(t=t.toLowerCase(),e=>Ed(e)===t),Cd=t=>e=>typeof e===t,{isArray:lo}=Array,Ga=Cd("undefined");function e6(t){return t!==null&&!Ga(t)&&t.constructor!==null&&!Ga(t.constructor)&&Nt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const US=yn("ArrayBuffer");function t6(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&US(t.buffer),e}const n6=Cd("string"),Nt=Cd("function"),HS=Cd("number"),Td=t=>t!==null&&typeof t=="object",r6=t=>t===!0||t===!1,Fc=t=>{if(Ed(t)!=="object")return!1;const e=Pm(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},i6=yn("Date"),s6=yn("File"),o6=yn("Blob"),a6=yn("FileList"),l6=t=>Td(t)&&Nt(t.pipe),c6=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Nt(t.append)&&((e=Ed(t))==="formdata"||e==="object"&&Nt(t.toString)&&t.toString()==="[object FormData]"))},u6=yn("URLSearchParams"),[d6,f6,h6,p6]=["ReadableStream","Request","Response","Headers"].map(yn),g6=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function hl(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),lo(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function VS(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const Pi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,WS=t=>!Ga(t)&&t!==Pi;function Ep(){const{caseless:t}=WS(this)&&this||{},e={},n=(r,i)=>{const s=t&&VS(e,i)||i;Fc(e[s])&&Fc(r)?e[s]=Ep(e[s],r):Fc(r)?e[s]=Ep({},r):lo(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&hl(arguments[r],n);return e}const m6=(t,e,n,{allOwnKeys:r}={})=>(hl(e,(i,s)=>{n&&Nt(i)?t[s]=$S(i,n):t[s]=i},{allOwnKeys:r}),t),y6=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),v6=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},x6=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Pm(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},b6=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},_6=t=>{if(!t)return null;if(lo(t))return t;let e=t.length;if(!HS(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},w6=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Pm(Uint8Array)),S6=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},k6=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},E6=yn("HTMLFormElement"),C6=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Mv=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),T6=yn("RegExp"),YS=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};hl(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},P6=t=>{YS(t,(e,n)=>{if(Nt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Nt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},I6=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return lo(t)?r(t):r(String(t).split(e)),n},O6=()=>{},A6=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Df="abcdefghijklmnopqrstuvwxyz",Lv="0123456789",GS={DIGIT:Lv,ALPHA:Df,ALPHA_DIGIT:Df+Df.toUpperCase()+Lv},R6=(t=16,e=GS.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function M6(t){return!!(t&&Nt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const L6=t=>{const e=new Array(10),n=(r,i)=>{if(Td(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=lo(r)?[]:{};return hl(r,(o,a)=>{const l=n(o,i+1);!Ga(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},D6=yn("AsyncFunction"),N6=t=>t&&(Td(t)||Nt(t))&&Nt(t.then)&&Nt(t.catch),KS=((t,e)=>t?setImmediate:e?((n,r)=>(Pi.addEventListener("message",({source:i,data:s})=>{i===Pi&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),Pi.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Nt(Pi.postMessage)),F6=typeof queueMicrotask<"u"?queueMicrotask.bind(Pi):typeof process<"u"&&process.nextTick||KS,O={isArray:lo,isArrayBuffer:US,isBuffer:e6,isFormData:c6,isArrayBufferView:t6,isString:n6,isNumber:HS,isBoolean:r6,isObject:Td,isPlainObject:Fc,isReadableStream:d6,isRequest:f6,isResponse:h6,isHeaders:p6,isUndefined:Ga,isDate:i6,isFile:s6,isBlob:o6,isRegExp:T6,isFunction:Nt,isStream:l6,isURLSearchParams:u6,isTypedArray:w6,isFileList:a6,forEach:hl,merge:Ep,extend:m6,trim:g6,stripBOM:y6,inherits:v6,toFlatObject:x6,kindOf:Ed,kindOfTest:yn,endsWith:b6,toArray:_6,forEachEntry:S6,matchAll:k6,isHTMLForm:E6,hasOwnProperty:Mv,hasOwnProp:Mv,reduceDescriptors:YS,freezeMethods:P6,toObjectSet:I6,toCamelCase:C6,noop:O6,toFiniteNumber:A6,findKey:VS,global:Pi,isContextDefined:WS,ALPHABET:GS,generateString:R6,isSpecCompliantForm:M6,toJSONObject:L6,isAsyncFn:D6,isThenable:N6,setImmediate:KS,asap:F6};function ee(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}O.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:O.toJSONObject(this.config),code:this.code,status:this.status}}});const qS=ee.prototype,XS={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{XS[t]={value:t}});Object.defineProperties(ee,XS);Object.defineProperty(qS,"isAxiosError",{value:!0});ee.from=(t,e,n,r,i,s)=>{const o=Object.create(qS);return O.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ee.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const j6=null;function Cp(t){return O.isPlainObject(t)||O.isArray(t)}function QS(t){return O.endsWith(t,"[]")?t.slice(0,-2):t}function Dv(t,e,n){return t?t.concat(e).map(function(i,s){return i=QS(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function z6(t){return O.isArray(t)&&!t.some(Cp)}const B6=O.toFlatObject(O,{},null,function(e){return/^is[A-Z]/.test(e)});function Pd(t,e,n){if(!O.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=O.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,v){return!O.isUndefined(v[y])});const r=n.metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&O.isSpecCompliantForm(e);if(!O.isFunction(i))throw new TypeError("visitor must be a function");function c(p){if(p===null)return"";if(O.isDate(p))return p.toISOString();if(!l&&O.isBlob(p))throw new ee("Blob is not supported. Use a Buffer instead.");return O.isArrayBuffer(p)||O.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,y,v){let m=p;if(p&&!v&&typeof p=="object"){if(O.endsWith(y,"{}"))y=r?y:y.slice(0,-2),p=JSON.stringify(p);else if(O.isArray(p)&&z6(p)||(O.isFileList(p)||O.endsWith(y,"[]"))&&(m=O.toArray(p)))return y=QS(y),m.forEach(function(x,w){!(O.isUndefined(x)||x===null)&&e.append(o===!0?Dv([y],w,s):o===null?y:y+"[]",c(x))}),!1}return Cp(p)?!0:(e.append(Dv(v,y,s),c(p)),!1)}const d=[],f=Object.assign(B6,{defaultVisitor:u,convertValue:c,isVisitable:Cp});function h(p,y){if(!O.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(p),O.forEach(p,function(m,g){(!(O.isUndefined(m)||m===null)&&i.call(e,m,O.isString(g)?g.trim():g,y,f))===!0&&h(m,y?y.concat(g):[g])}),d.pop()}}if(!O.isObject(t))throw new TypeError("data must be an object");return h(t),e}function Nv(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Im(t,e){this._pairs=[],t&&Pd(t,this,e)}const JS=Im.prototype;JS.append=function(e,n){this._pairs.push([e,n])};JS.toString=function(e){const n=e?function(r){return e.call(this,r,Nv)}:Nv;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function $6(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ZS(t,e,n){if(!e)return t;const r=n&&n.encode||$6,i=n&&n.serialize;let s;if(i?s=i(e,n):s=O.isURLSearchParams(e)?e.toString():new Im(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Fv{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){O.forEach(this.handlers,function(r){r!==null&&e(r)})}}const ek={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},U6=typeof URLSearchParams<"u"?URLSearchParams:Im,H6=typeof FormData<"u"?FormData:null,V6=typeof Blob<"u"?Blob:null,W6={isBrowser:!0,classes:{URLSearchParams:U6,FormData:H6,Blob:V6},protocols:["http","https","file","blob","url","data"]},Om=typeof window<"u"&&typeof document<"u",Tp=typeof navigator=="object"&&navigator||void 0,Y6=Om&&(!Tp||["ReactNative","NativeScript","NS"].indexOf(Tp.product)<0),G6=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",K6=Om&&window.location.href||"http://localhost",q6=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Om,hasStandardBrowserEnv:Y6,hasStandardBrowserWebWorkerEnv:G6,navigator:Tp,origin:K6},Symbol.toStringTag,{value:"Module"})),Ct={...q6,...W6};function X6(t,e){return Pd(t,new Ct.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Ct.isNode&&O.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function Q6(t){return O.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function J6(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function tk(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&O.isArray(i)?i.length:o,l?(O.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!O.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&O.isArray(i[o])&&(i[o]=J6(i[o])),!a)}if(O.isFormData(t)&&O.isFunction(t.entries)){const n={};return O.forEachEntry(t,(r,i)=>{e(Q6(r),i,n,0)}),n}return null}function Z6(t,e,n){if(O.isString(t))try{return(e||JSON.parse)(t),O.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const pl={transitional:ek,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=O.isObject(e);if(s&&O.isHTMLForm(e)&&(e=new FormData(e)),O.isFormData(e))return i?JSON.stringify(tk(e)):e;if(O.isArrayBuffer(e)||O.isBuffer(e)||O.isStream(e)||O.isFile(e)||O.isBlob(e)||O.isReadableStream(e))return e;if(O.isArrayBufferView(e))return e.buffer;if(O.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return X6(e,this.formSerializer).toString();if((a=O.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Pd(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),Z6(e)):e}],transformResponse:[function(e){const n=this.transitional||pl.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(O.isResponse(e)||O.isReadableStream(e))return e;if(e&&O.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ee.from(a,ee.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ct.classes.FormData,Blob:Ct.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};O.forEach(["delete","get","head","post","put","patch"],t=>{pl.headers[t]={}});const eF=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),tF=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&eF[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},jv=Symbol("internals");function To(t){return t&&String(t).trim().toLowerCase()}function jc(t){return t===!1||t==null?t:O.isArray(t)?t.map(jc):String(t)}function nF(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const rF=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Nf(t,e,n,r,i){if(O.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!O.isString(e)){if(O.isString(r))return e.indexOf(r)!==-1;if(O.isRegExp(r))return r.test(e)}}function iF(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function sF(t,e){const n=O.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class Tt{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,c){const u=To(l);if(!u)throw new Error("header name must be a non-empty string");const d=O.findKey(i,u);(!d||i[d]===void 0||c===!0||c===void 0&&i[d]!==!1)&&(i[d||l]=jc(a))}const o=(a,l)=>O.forEach(a,(c,u)=>s(c,u,l));if(O.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(O.isString(e)&&(e=e.trim())&&!rF(e))o(tF(e),n);else if(O.isHeaders(e))for(const[a,l]of e.entries())s(l,a,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=To(e),e){const r=O.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return nF(i);if(O.isFunction(n))return n.call(this,i,r);if(O.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=To(e),e){const r=O.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Nf(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=To(o),o){const a=O.findKey(r,o);a&&(!n||Nf(r,r[a],a,n))&&(delete r[a],i=!0)}}return O.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||Nf(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return O.forEach(this,(i,s)=>{const o=O.findKey(r,s);if(o){n[o]=jc(i),delete n[s];return}const a=e?iF(s):String(s).trim();a!==s&&delete n[s],n[a]=jc(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return O.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&O.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[jv]=this[jv]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=To(o);r[a]||(sF(i,o),r[a]=!0)}return O.isArray(e)?e.forEach(s):s(e),this}}Tt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);O.reduceDescriptors(Tt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});O.freezeMethods(Tt);function Ff(t,e){const n=this||pl,r=e||n,i=Tt.from(r.headers);let s=r.data;return O.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function nk(t){return!!(t&&t.__CANCEL__)}function co(t,e,n){ee.call(this,t??"canceled",ee.ERR_CANCELED,e,n),this.name="CanceledError"}O.inherits(co,ee,{__CANCEL__:!0});function rk(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function oF(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function aF(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=r[s];o||(o=c),n[i]=l,r[i]=c;let d=s,f=0;for(;d!==i;)f+=n[d++],d=d%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<e)return;const h=u&&c-u;return h?Math.round(f*1e3/h):void 0}}function lF(t,e){let n=0,r=1e3/e,i,s;const o=(c,u=Date.now())=>{n=u,i=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),d=u-n;d>=r?o(c,u):(i=c,s||(s=setTimeout(()=>{s=null,o(i)},r-d)))},()=>i&&o(i)]}const Nu=(t,e,n=3)=>{let r=0;const i=aF(50,250);return lF(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-r,c=i(l),u=o<=a;r=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(d)},n)},zv=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Bv=t=>(...e)=>O.asap(()=>t(...e)),cF=Ct.hasStandardBrowserEnv?function(){const e=Ct.navigator&&/(msie|trident)/i.test(Ct.navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=O.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),uF=Ct.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];O.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),O.isString(r)&&o.push("path="+r),O.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function dF(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function fF(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function ik(t,e){return t&&!dF(e)?fF(t,e):e}const $v=t=>t instanceof Tt?{...t}:t;function Ki(t,e){e=e||{};const n={};function r(c,u,d){return O.isPlainObject(c)&&O.isPlainObject(u)?O.merge.call({caseless:d},c,u):O.isPlainObject(u)?O.merge({},u):O.isArray(u)?u.slice():u}function i(c,u,d){if(O.isUndefined(u)){if(!O.isUndefined(c))return r(void 0,c,d)}else return r(c,u,d)}function s(c,u){if(!O.isUndefined(u))return r(void 0,u)}function o(c,u){if(O.isUndefined(u)){if(!O.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function a(c,u,d){if(d in e)return r(c,u);if(d in t)return r(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>i($v(c),$v(u),!0)};return O.forEach(Object.keys(Object.assign({},t,e)),function(u){const d=l[u]||i,f=d(t[u],e[u],u);O.isUndefined(f)&&d!==a||(n[u]=f)}),n}const sk=t=>{const e=Ki({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=Tt.from(o),e.url=ZS(ik(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(O.isFormData(n)){if(Ct.hasStandardBrowserEnv||Ct.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(Ct.hasStandardBrowserEnv&&(r&&O.isFunction(r)&&(r=r(e)),r||r!==!1&&cF(e.url))){const c=i&&s&&uF.read(s);c&&o.set(i,c)}return e},hF=typeof XMLHttpRequest<"u",pF=hF&&function(t){return new Promise(function(n,r){const i=sk(t);let s=i.data;const o=Tt.from(i.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=i,u,d,f,h,p;function y(){h&&h(),p&&p(),i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let v=new XMLHttpRequest;v.open(i.method.toUpperCase(),i.url,!0),v.timeout=i.timeout;function m(){if(!v)return;const x=Tt.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),k={data:!a||a==="text"||a==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:x,config:t,request:v};rk(function(E){n(E),y()},function(E){r(E),y()},k),v=null}"onloadend"in v?v.onloadend=m:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(m)},v.onabort=function(){v&&(r(new ee("Request aborted",ee.ECONNABORTED,t,v)),v=null)},v.onerror=function(){r(new ee("Network Error",ee.ERR_NETWORK,t,v)),v=null},v.ontimeout=function(){let w=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const k=i.transitional||ek;i.timeoutErrorMessage&&(w=i.timeoutErrorMessage),r(new ee(w,k.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,t,v)),v=null},s===void 0&&o.setContentType(null),"setRequestHeader"in v&&O.forEach(o.toJSON(),function(w,k){v.setRequestHeader(k,w)}),O.isUndefined(i.withCredentials)||(v.withCredentials=!!i.withCredentials),a&&a!=="json"&&(v.responseType=i.responseType),c&&([f,p]=Nu(c,!0),v.addEventListener("progress",f)),l&&v.upload&&([d,h]=Nu(l),v.upload.addEventListener("progress",d),v.upload.addEventListener("loadend",h)),(i.cancelToken||i.signal)&&(u=x=>{v&&(r(!x||x.type?new co(null,t,v):x),v.abort(),v=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const g=oF(i.url);if(g&&Ct.protocols.indexOf(g)===-1){r(new ee("Unsupported protocol "+g+":",ee.ERR_BAD_REQUEST,t));return}v.send(s||null)})},gF=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,i;const s=function(c){if(!i){i=!0,a();const u=c instanceof Error?c:this.reason;r.abort(u instanceof ee?u:new co(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new ee(`timeout ${e} of ms exceeded`,ee.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=r;return l.unsubscribe=()=>O.asap(a),l}},mF=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},yF=async function*(t,e){for await(const n of vF(t))yield*mF(n,e)},vF=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Uv=(t,e,n,r)=>{const i=yF(t,e);let s=0,o,a=l=>{o||(o=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await i.next();if(c){a(),l.close();return}let d=u.byteLength;if(n){let f=s+=d;n(f)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),i.return()}},{highWaterMark:2})},Id=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",ok=Id&&typeof ReadableStream=="function",xF=Id&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),ak=(t,...e)=>{try{return!!t(...e)}catch{return!1}},bF=ok&&ak(()=>{let t=!1;const e=new Request(Ct.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Hv=64*1024,Pp=ok&&ak(()=>O.isReadableStream(new Response("").body)),Fu={stream:Pp&&(t=>t.body)};Id&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Fu[e]&&(Fu[e]=O.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new ee(`Response type '${e}' is not supported`,ee.ERR_NOT_SUPPORT,r)})})})(new Response);const _F=async t=>{if(t==null)return 0;if(O.isBlob(t))return t.size;if(O.isSpecCompliantForm(t))return(await new Request(Ct.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(O.isArrayBufferView(t)||O.isArrayBuffer(t))return t.byteLength;if(O.isURLSearchParams(t)&&(t=t+""),O.isString(t))return(await xF(t)).byteLength},wF=async(t,e)=>{const n=O.toFiniteNumber(t.getContentLength());return n??_F(e)},SF=Id&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:f}=sk(t);c=c?(c+"").toLowerCase():"text";let h=gF([i,s&&s.toAbortSignal()],o),p;const y=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let v;try{if(l&&bF&&n!=="get"&&n!=="head"&&(v=await wF(u,r))!==0){let k=new Request(e,{method:"POST",body:r,duplex:"half"}),C;if(O.isFormData(r)&&(C=k.headers.get("content-type"))&&u.setContentType(C),k.body){const[E,b]=zv(v,Nu(Bv(l)));r=Uv(k.body,Hv,E,b)}}O.isString(d)||(d=d?"include":"omit");const m="credentials"in Request.prototype;p=new Request(e,{...f,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:m?d:void 0});let g=await fetch(p);const x=Pp&&(c==="stream"||c==="response");if(Pp&&(a||x&&y)){const k={};["status","statusText","headers"].forEach(S=>{k[S]=g[S]});const C=O.toFiniteNumber(g.headers.get("content-length")),[E,b]=a&&zv(C,Nu(Bv(a),!0))||[];g=new Response(Uv(g.body,Hv,E,()=>{b&&b(),y&&y()}),k)}c=c||"text";let w=await Fu[O.findKey(Fu,c)||"text"](g,t);return!x&&y&&y(),await new Promise((k,C)=>{rk(k,C,{data:w,headers:Tt.from(g.headers),status:g.status,statusText:g.statusText,config:t,request:p})})}catch(m){throw y&&y(),m&&m.name==="TypeError"&&/fetch/i.test(m.message)?Object.assign(new ee("Network Error",ee.ERR_NETWORK,t,p),{cause:m.cause||m}):ee.from(m,m&&m.code,t,p)}}),Ip={http:j6,xhr:pF,fetch:SF};O.forEach(Ip,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Vv=t=>`- ${t}`,kF=t=>O.isFunction(t)||t===null||t===!1,lk={getAdapter:t=>{t=O.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!kF(n)&&(r=Ip[(o=String(n)).toLowerCase()],r===void 0))throw new ee(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Vv).join(`
`):" "+Vv(s[0]):"as no adapter specified";throw new ee("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ip};function jf(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new co(null,t)}function Wv(t){return jf(t),t.headers=Tt.from(t.headers),t.data=Ff.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),lk.getAdapter(t.adapter||pl.adapter)(t).then(function(r){return jf(t),r.data=Ff.call(t,t.transformResponse,r),r.headers=Tt.from(r.headers),r},function(r){return nk(r)||(jf(t),r&&r.response&&(r.response.data=Ff.call(t,t.transformResponse,r.response),r.response.headers=Tt.from(r.response.headers))),Promise.reject(r)})}const ck="1.7.7",Am={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Am[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Yv={};Am.transitional=function(e,n,r){function i(s,o){return"[Axios v"+ck+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new ee(i(o," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!Yv[o]&&(Yv[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function EF(t,e,n){if(typeof t!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new ee("option "+s+" must be "+l,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+s,ee.ERR_BAD_OPTION)}}const Op={assertOptions:EF,validators:Am},gr=Op.validators;class Ni{constructor(e){this.defaults=e,this.interceptors={request:new Fv,response:new Fv}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ki(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Op.assertOptions(r,{silentJSONParsing:gr.transitional(gr.boolean),forcedJSONParsing:gr.transitional(gr.boolean),clarifyTimeoutError:gr.transitional(gr.boolean)},!1),i!=null&&(O.isFunction(i)?n.paramsSerializer={serialize:i}:Op.assertOptions(i,{encode:gr.function,serialize:gr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&O.merge(s.common,s[n.method]);s&&O.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),n.headers=Tt.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let u,d=0,f;if(!l){const p=[Wv.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,c),f=p.length,u=Promise.resolve(n);d<f;)u=u.then(p[d++],p[d++]);return u}f=a.length;let h=n;for(d=0;d<f;){const p=a[d++],y=a[d++];try{h=p(h)}catch(v){y.call(this,v);break}}try{u=Wv.call(this,h)}catch(p){return Promise.reject(p)}for(d=0,f=c.length;d<f;)u=u.then(c[d++],c[d++]);return u}getUri(e){e=Ki(this.defaults,e);const n=ik(e.baseURL,e.url);return ZS(n,e.params,e.paramsSerializer)}}O.forEach(["delete","get","head","options"],function(e){Ni.prototype[e]=function(n,r){return this.request(Ki(r||{},{method:e,url:n,data:(r||{}).data}))}});O.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(Ki(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Ni.prototype[e]=n(),Ni.prototype[e+"Form"]=n(!0)});class Rm{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new co(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Rm(function(i){e=i}),cancel:e}}}function CF(t){return function(n){return t.apply(null,n)}}function TF(t){return O.isObject(t)&&t.isAxiosError===!0}const Ap={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ap).forEach(([t,e])=>{Ap[e]=t});function uk(t){const e=new Ni(t),n=$S(Ni.prototype.request,e);return O.extend(n,Ni.prototype,e,{allOwnKeys:!0}),O.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return uk(Ki(t,i))},n}const Ye=uk(pl);Ye.Axios=Ni;Ye.CanceledError=co;Ye.CancelToken=Rm;Ye.isCancel=nk;Ye.VERSION=ck;Ye.toFormData=Pd;Ye.AxiosError=ee;Ye.Cancel=Ye.CanceledError;Ye.all=function(e){return Promise.all(e)};Ye.spread=CF;Ye.isAxiosError=TF;Ye.mergeConfig=Ki;Ye.AxiosHeaders=Tt;Ye.formToJSON=t=>tk(O.isHTMLForm(t)?new FormData(t):t);Ye.getAdapter=lk.getAdapter;Ye.HttpStatusCode=Ap;Ye.default=Ye;const PF=({onSubmit:t})=>{const[e,n]=P.useState(""),[r,i]=P.useState(""),[s,o]=P.useState(""),[a,l]=P.useState(""),c=u=>{u.preventDefault(),Ye.post("http://localhost:5000/api/feedbacks",{name:e,email:r,feedback:s}).then(d=>{l(""),n(""),i(""),o(""),se.success("Feedback submitted successfully!",{autoClose:2e3}),t&&t(d.data)}).catch(d=>{l(d.response?d.response.data.message:"An error occurred"),se.error("Failed to submit feedback!",{autoClose:2e3})})};return _.jsxs(IF,{children:[_.jsx(OF,{children:"Submit Your Feedback"}),a&&_.jsx("p",{style:{color:"red",textAlign:"center"},children:a}),_.jsxs("form",{onSubmit:c,children:[_.jsx(Gv,{type:"text",placeholder:"Your Name",value:e,onChange:u=>n(u.target.value),required:!0}),_.jsx(Gv,{type:"email",placeholder:"Your Email",value:r,onChange:u=>i(u.target.value),required:!0}),_.jsx(AF,{placeholder:"Your Feedback",value:s,onChange:u=>o(u.target.value),required:!0}),_.jsx(RF,{type:"submit",children:"Submit"})]})]})},IF=I.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  min-height: 500px;
  max-height: 700px;
  padding: 20px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(10, 10, 30, 0.9), rgba(30, 30, 60, 0.9));
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 128, 255, 0.5);

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 90%; /* Takes more screen width on smaller devices */
  }

  @media (max-width: 480px) {
    padding: 10px;
    max-width: 100%; /* Full width for mobile */
  }
`,OF=I.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
  color: #ffffff; /* Updated color for the title */
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 20px; /* Smaller title on tablet */
  }

  @media (max-width: 480px) {
    font-size: 18px; /* Even smaller title on mobile */
  }
`,Gv=I.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #666; /* Updated border color */
  border-radius: 4px;
  background-color: rgba(20, 20, 40, 0.9); /* Updated background color */
  color: #ffffff; /* Updated text color */
  box-sizing: border-box;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  @media (max-width: 600px) {
    padding: 20px;
    margin: 8px 0;
  }
`,AF=I.textarea`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #666; /* Updated border color */
  border-radius: 4px;
  background-color: rgba(20, 20, 40, 0.9); /* Updated background color */
  color: #ffffff; /* Updated text color */
  min-height: 120px;
  box-sizing: border-box;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  @media (max-width: 600px) {
    padding: 10px;
    margin: 8px 0;
    min-height: 100px;
  }
`,RF=I.button`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  background: linear-gradient(135deg, #28a745, #21b146); /* Updated background color */
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  display: block;
  margin: 20px auto 0;

  &:hover {
    background: linear-gradient(135deg, #218838, #1e7e34); /* Updated hover color */
    box-shadow: 0 0 15px rgba(40, 167, 69, 0.7);
  }

  @media (max-width: 600px) {
    padding: 10px 20px;
    font-size: 24px;
  }
`;I.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(10, 10, 30, 0.9), rgba(30, 30, 60, 0.9)); /* Updated background */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 128, 255, 0.5);
  max-height: 500px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    padding: 10px;
    max-width: 100%;
    max-height: 300px;
  }
`;I.h2`
  color: #ffffff; /* Updated color for the title */
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.8); /* Glowing effect */

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;I.div`
  padding: 15px;
  border: 1px solid rgba(60, 60, 90, 0.7); /* Updated border color */
  border-radius: 8px;
  margin-bottom: 10px;
  background: rgba(40, 40, 60, 0.8); /* Updated background */
  color: #ffffff; /* Updated text color */
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.7); /* Updated hover effect */
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    padding: 12px;
  }
`;I.p`
  color: #cccccc; /* Updated color */
  text-align: center;
  font-style: italic;
`;I.p`
  color: #007bff; /* Consistent with the scheme */
  text-align: center;
`;const MF="/assets/image-B_bLNyXX.png",LF="/assets/dependability-C3QJlT0w.png",DF="/assets/Safeandsecure-CDS99Mni.webp",NF="/assets/Regulated-Sgn2rYIb.jpeg",FF="/assets/247support-C0nyqyyX.avif",jF=()=>{const[t,e]=P.useState([]),[n,r]=P.useState(!0),[i,s]=P.useState(!1),o=c=>{e([c,...t]),se.success("Feedback submitted successfully!",{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},a=()=>{i||(r(!1),s(!0))},l=[{icon:LF,title:"Dependable",description:"Our 99.97% uptime ensures your uninterrupted access to the markets."},{icon:DF,title:"Safe and secure",description:"We keep your personal data and funds safe."},{icon:NF,title:"Regulated",description:"We’re regulated and licensed by global financial authorities."},{icon:FF,title:"24/7 support",description:"Our professional multilingual team is here for you anytime."}];return _.jsxs($F,{children:[_.jsxs(UF,{children:[_.jsx(Kv,{children:_.jsx(VF,{children:l.map((c,u)=>_.jsxs(WF,{children:[_.jsx(YF,{src:c.icon,alt:c.title}),_.jsx(GF,{children:c.title}),_.jsx(KF,{children:c.description})]},u))})}),_.jsxs(Kv,{children:[_.jsx(HF,{children:"We Value Your Feedback!"}),_.jsx(PF,{onSubmit:o})]})]}),_.jsx(gd,{}),_.jsx(BF,{isBouncing:n,onClick:a,children:_.jsx(Qg,{})})]})},zF=oo`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`,BF=I.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  ${({isBouncing:t})=>t&&nl`
      animation: ${zF} 2.5s infinite;
    `}
  cursor: pointer;
`,$F=I.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: url(${MF}) no-repeat center center fixed;
  background-size: cover;
  color: #ffffff;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`,Kv=I.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 15px;
  max-width: 800px;
  gap: 20px;
  width: 100%;
`,UF=I.div`
  display: flex;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  max-width: 1700px;
  gap: 30px;
  width: 100%;
`,HF=I.h1`
  text-align: center;
  margin-bottom: 60px;
  font-size: 2.5em;
  color: #f9f9f9;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`,VF=I.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`,WF=I.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
  }
`,YF=I.img`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`,GF=I.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`,KF=I.p`
  font-size: 16px;
  color: #666;
`,qF="/assets/logo-BfYD808F.jpeg",XF=I.nav`
  display: flex;
   
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #0a1e3a; /* Dark futuristic blue */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  position: sticky;
  z-index: 1;
`,QF=I.div`
  display: flex;
  align-items: center; /* Center image and text vertically */
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 1.5px;

  img {
    height: 60px; 
    width: 80px;
    margin-right: 10px; /* Space between image and text */
  }
`,JF=I.ul`
  display: flex;
  justify-content: center; /* Center the options */
  align-items: center;
  gap: 80px; /* Increased gap for desktop */

  @media (max-width: 768px) {
    display: ${t=>t.isOpen?"flex":"none"}; /* Show/hide nav links */
    flex-direction: column; /* Stack links vertically */
    position: absolute;
    top: 60px; /* Adjust as needed */
    left: 0;
    right: 0;
    background-color: #0a1e3a; /* Match navbar background */
    padding: 15px 0; /* Decreased padding for mobile */
    border-top: 2px solid #1a3b5d; /* Top border for separation */
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  }
`,nc=I.li`
  list-style: none;
  width: 100%; /* Full width for clickable area */

  @media (max-width: 768px) {
    text-align: center; /* Center text for mobile */
    padding: 5px 0; /* Decreased padding for mobile */
  }
`,rc=I(CP)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: #b0c7e8;
  padding: 10px 20px; /* Increased padding for better touch area */
  border-radius: 5px;
  display: block; /* Block display for full-width links */
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(176, 199, 232, 0.3); /* Slightly darker on hover */
  }

  &.active {
    color: #ffffff;
    background-color: #1a3b5d;
  }
`,ZF=I.div`
  display: none; /* Hide by default */

  @media (max-width: 768px) {
    display: block; /* Show hamburger menu on mobile */
    cursor: pointer;
    font-size: 2rem;
    color: #ffffff;
  }

  &::before {
    content: '☰'; /* Hamburger icon */
  }
`;function ej(){const[t,e]=P.useState(!1),n=()=>e(!t);return _.jsxs(XF,{children:[_.jsxs(QF,{children:[_.jsx("img",{src:qF,alt:"Trade Vision Logo"})," ","Trade Vision"]}),_.jsx(ZF,{onClick:n}),_.jsxs(JF,{isOpen:t,children:[_.jsx(nc,{children:_.jsx(rc,{to:"/dashboard",children:"Dashboard"})}),_.jsx(nc,{children:_.jsx(rc,{to:"/forecast",children:"Forecast"})}),_.jsx(nc,{children:_.jsx(rc,{to:"/feedback",children:"Feedback"})}),_.jsx(nc,{children:_.jsx(rc,{to:"/profile",children:"Profile"})})]})]})}const tj=I.div`
  display: flex;
  flex-direction: column;
`,nj=I.footer`
  background-color: #0f2027;
  color: white;
  text-align: center;
  padding: 20px 0;
  margin-top: auto; // Push the footer to the bottom
`,rj=I.p`
  margin: 0;
  font-size: 14px;
`,ij=()=>_.jsx(tj,{children:_.jsx(nj,{children:_.jsx(rj,{children:"© 2024 Trade Vision. All rights reserved."})})}),sj=()=>{const t=P.useRef(null),e=es();return P.useEffect(()=>{const n=()=>{window.VANTA&&window.VANTA.NET({el:t.current,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color:446408,backgroundColor:1710109})},r=document.createElement("script");return r.src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js",r.onload=()=>{const i=document.createElement("script");i.src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js",i.onload=n,document.body.appendChild(i)},document.body.appendChild(r),()=>{window.VANTA&&t.current&&window.VANTA.destroy()}},[]),_.jsxs(oj,{ref:t,children:[_.jsx(aj,{children:"Trade Vision"}),_.jsx(cj,{children:"Your Gateway to Stock Market Predictions"}),_.jsxs(uj,{onClick:()=>e("/dashboard"),children:[_.jsx(dj,{children:"Check Out"}),_.jsx(fj,{})]})]})},oj=I.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 97.5vh;
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box; 
`,aj=I.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;

  &:hover {
    color: #00000;  
    transform: scale(1.10); 
    transition: all 0.5s ease-in-out;  
  }
`,lj=oo`
  0% {
    width: 0;
  }
  70% {
    width: 100%;
  }
`,cj=I.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  z-index: 1;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: ${lj} 6s steps(100, end) infinite;
`,uj=I.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(0, 150, 255, 0.8); /* Futuristic blue with transparency */
  padding: 20px 40px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 150, 255, 0.7);
  animation: glow 1.5s infinite alternate;

  @keyframes glow {
    from {
      box-shadow: 0 0 10px rgba(0, 150, 255, 0.7);
    }
    to {
      box-shadow: 0 0 20px rgba(0, 150, 255, 1);
    }
  }

  &:hover {
    box-shadow: 0 0 30px rgba(0, 150, 255, 1);
  }
`,dj=I.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`,fj=I(k4)`
  color: #fff;
  font-size: 1.5rem;
  animation: slideIn 1.5s infinite alternate;

  @keyframes slideIn {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(10px);
    }
  }
`,hj=[{id:1,name:"Apple Inc.",symbol:"AAPL"},{id:2,name:"Tesla Inc.",symbol:"TSLA"},{id:3,name:"Bitcoin",symbol:"BTC"},{id:4,name:"Ethereum",symbol:"ETH"},{id:5,name:"Google LLC",symbol:"GOOGL"},{id:6,name:"Microsoft Corporation",symbol:"MSFT"},{id:7,name:"Amazon.com, Inc.",symbol:"AMZN"},{id:8,name:"Meta Platforms Inc.",symbol:"META"},{id:9,name:"NVIDIA Corporation",symbol:"NVDA"},{id:10,name:"Netflix Inc.",symbol:"NFLX"},{id:11,name:"Cardano",symbol:"ADA"},{id:12,name:"Ripple",symbol:"XRP"},{id:13,name:"Polkadot",symbol:"DOT"},{id:14,name:"Solana",symbol:"SOL"},{id:15,name:"Dogecoin",symbol:"DOGE"},{id:16,name:"Litecoin",symbol:"LTC"},{id:17,name:"Chainlink",symbol:"LINK"},{id:18,name:"Uniswap",symbol:"UNI"},{id:19,name:"Monero",symbol:"XMR"},{id:20,name:"Stellar",symbol:"XLM"},{id:21,name:"Tether",symbol:"USDT"},{id:22,name:"Shiba Inu",symbol:"SHIB"},{id:23,name:"Terra",symbol:"LUNA"},{id:24,name:"VeChain",symbol:"VET"},{id:25,name:"Polygon",symbol:"MATIC"},{id:26,name:"Algorand",symbol:"ALGO"},{id:27,name:"Aave",symbol:"AAVE"},{id:28,name:"SushiSwap",symbol:"SUSHI"},{id:29,name:"Cosmos",symbol:"ATOM"},{id:30,name:"Maker",symbol:"MKR"}];function pj(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var dk=pj,gj=typeof Io=="object"&&Io&&Io.Object===Object&&Io,mj=gj,yj=mj,vj=typeof self=="object"&&self&&self.Object===Object&&self,xj=yj||vj||Function("return this")(),fk=xj,bj=fk,_j=function(){return bj.Date.now()},wj=_j,Sj=/\s/;function kj(t){for(var e=t.length;e--&&Sj.test(t.charAt(e)););return e}var Ej=kj,Cj=Ej,Tj=/^\s+/;function Pj(t){return t&&t.slice(0,Cj(t)+1).replace(Tj,"")}var Ij=Pj,Oj=fk,Aj=Oj.Symbol,hk=Aj,qv=hk,pk=Object.prototype,Rj=pk.hasOwnProperty,Mj=pk.toString,Po=qv?qv.toStringTag:void 0;function Lj(t){var e=Rj.call(t,Po),n=t[Po];try{t[Po]=void 0;var r=!0}catch{}var i=Mj.call(t);return r&&(e?t[Po]=n:delete t[Po]),i}var Dj=Lj,Nj=Object.prototype,Fj=Nj.toString;function jj(t){return Fj.call(t)}var zj=jj,Xv=hk,Bj=Dj,$j=zj,Uj="[object Null]",Hj="[object Undefined]",Qv=Xv?Xv.toStringTag:void 0;function Vj(t){return t==null?t===void 0?Hj:Uj:Qv&&Qv in Object(t)?Bj(t):$j(t)}var Wj=Vj;function Yj(t){return t!=null&&typeof t=="object"}var Gj=Yj,Kj=Wj,qj=Gj,Xj="[object Symbol]";function Qj(t){return typeof t=="symbol"||qj(t)&&Kj(t)==Xj}var Jj=Qj,Zj=Ij,Jv=dk,ez=Jj,Zv=NaN,tz=/^[-+]0x[0-9a-f]+$/i,nz=/^0b[01]+$/i,rz=/^0o[0-7]+$/i,iz=parseInt;function sz(t){if(typeof t=="number")return t;if(ez(t))return Zv;if(Jv(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Jv(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=Zj(t);var n=nz.test(t);return n||rz.test(t)?iz(t.slice(2),n?2:8):tz.test(t)?Zv:+t}var oz=sz,az=dk,zf=wj,ex=oz,lz="Expected a function",cz=Math.max,uz=Math.min;function dz(t,e,n){var r,i,s,o,a,l,c=0,u=!1,d=!1,f=!0;if(typeof t!="function")throw new TypeError(lz);e=ex(e)||0,az(n)&&(u=!!n.leading,d="maxWait"in n,s=d?cz(ex(n.maxWait)||0,e):s,f="trailing"in n?!!n.trailing:f);function h(C){var E=r,b=i;return r=i=void 0,c=C,o=t.apply(b,E),o}function p(C){return c=C,a=setTimeout(m,e),u?h(C):o}function y(C){var E=C-l,b=C-c,S=e-E;return d?uz(S,s-b):S}function v(C){var E=C-l,b=C-c;return l===void 0||E>=e||E<0||d&&b>=s}function m(){var C=zf();if(v(C))return g(C);a=setTimeout(m,y(C))}function g(C){return a=void 0,f&&r?h(C):(r=i=void 0,o)}function x(){a!==void 0&&clearTimeout(a),c=0,r=l=i=a=void 0}function w(){return a===void 0?o:g(zf())}function k(){var C=zf(),E=v(C);if(r=arguments,i=this,l=C,E){if(a===void 0)return p(l);if(d)return clearTimeout(a),a=setTimeout(m,e),h(l)}return a===void 0&&(a=setTimeout(m,e)),o}return k.cancel=x,k.flush=w,k}var fz=dz;const hz=$u(fz),pz=I.div`
  position: relative;
  width: 100%;
  max-width: 500px; /* Constrain width for large screens */
  margin: 0 auto; /* Center horizontally */
  padding: 0 15px; /* Padding for small screens */

  @media (max-width: 768px) {
    max-width: 400px; /* Reduce width for tablet screens */
  }

  @media (max-width: 480px) {
    max-width: 100%; /* Full width for mobile screens */
    padding: 0 10px; /* Add some side padding */
  }
`,gz=I.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 10px;
  transition: border-color 0.3s ease;

  &:focus-within {
    border-color: #007bff;
  }

  @media (max-width: 480px) {
    padding: 0 8px; /* Adjust padding for mobile screens */
  }
`,mz=I.input`
  flex: 1;
  padding: 12px 10px;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 10px 8px; /* Slightly reduce padding for tablets */
    font-size: 15px; /* Adjust font size for tablets */
  }

  @media (max-width: 480px) {
    padding: 8px 6px; /* Reduce padding for mobile */
    font-size: 14px; /* Adjust font size for mobile */
  }
`,yz=I(Dw)`
  color: #888;
  font-size: 18px;
  margin-right: 8px;

  @media (max-width: 480px) {
    font-size: 16px; /* Adjust icon size for mobile */
    margin-right: 6px; /* Reduce space between icon and input */
  }
`,vz=I.ul`
  position: absolute;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #ddd;
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    max-height: 200px; /* Reduce max-height for mobile */
  }
`,xz=I.li`
  padding: 12px 15px;
  cursor: pointer;
  font-size: 16px;
  color: #333;

  &:hover {
    background-color: #f5f5f5;
  }

  &:active {
    background-color: #e0e0e0;
  }

  @media (max-width: 768px) {
    font-size: 15px; /* Adjust font size for tablets */
    padding: 10px 12px; /* Adjust padding for tablets */
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Adjust font size for mobile */
    padding: 8px 10px; /* Adjust padding for mobile */
  }
`,bz=({onSelect:t})=>{const[e,n]=P.useState(""),[r,i]=P.useState([]),s=P.useRef(null);P.useEffect(()=>{console.log("Query changed:",e);const l=hz(c=>{if(console.log("Debounced query:",c),c.length>2){const u=hj.filter(d=>d.name.toLowerCase().includes(c.toLowerCase())||d.symbol.toLowerCase().includes(c.toLowerCase()));i(u)}else i([])},300);return l(e),()=>{l.cancel()}},[e]);const o=l=>{n(l.target.value),console.log("Input changed:",l.target.value)},a=l=>{n(l.name),i([]),t&&t(l)};return _.jsxs(pz,{children:[_.jsxs(gz,{children:[_.jsx(yz,{}),_.jsx(mz,{ref:s,type:"text",value:e,onChange:o,placeholder:"Search stocks and crypto..."})]}),r.length>0&&_.jsx(vz,{children:r.map(l=>_.jsxs(xz,{onClick:()=>a(l),children:[l.name," (",l.symbol,")"]},l.id))})]})},_z=I.div`
  text-align: center;
  margin-bottom: 20px;
`,wz=I.h1`
  font-size: 2rem;
  color: #ffffff; /* Light text color for dark background */
`,Sz=I.p`
  font-size: 1.2rem;
  color: #cccccc; /* Lighter text color for slogan */
`,kz=()=>_.jsxs(_z,{children:[_.jsx(wz,{children:"Stock Forecast Page"}),_.jsx(Sz,{children:"Predict real-time market stock data"})]}),Ez=I.div`
  padding: 16px; /* Adjust padding as needed */
`,Cz=({symbol:t})=>{const e=P.useRef(null),n=`NASDAQ:${t}`;return console.log(n),P.useEffect(()=>{if(!e.current)return;const r=document.createElement("script");return r.src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js",r.async=!0,r.innerHTML=JSON.stringify({symbol:n,width:"100%",locale:"en",colorTheme:"dark",isTransparent:!1}),e.current.appendChild(r),()=>{e.current&&(e.current.innerHTML="")}},[n]),_.jsx(Ez,{children:_.jsx("div",{ref:e,className:"tradingview-widget-container__widget"})})},Tz=I.section`
  grid-column: span 2;
  height: 600px;
  padding: 0 16px; /* Add padding from left and right */

  @media (max-width: 768px) {
    height: 600px;
  }
`,Pz=I.div`
  height: 100%;
`,Iz=({symbol:t})=>{const e=P.useRef(null),n=`NASDAQ:${t}`;return P.useEffect(()=>{if(!e.current)return;const r=document.createElement("script");return r.src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js",r.async=!0,r.innerHTML=JSON.stringify({autosize:!0,symbol:n,interval:"D",timezone:"Etc/UTC",theme:"dark",style:"3",locale:"en",hide_top_toolbar:!0,allow_symbol_change:!1,save_image:!1,calendar:!1,hide_volume:!0,support_host:"https://www.tradingview.com"}),e.current.appendChild(r),()=>{e.current&&(e.current.innerHTML="")}},[n]),_.jsx(Tz,{children:_.jsx(Pz,{ref:e,className:"tradingview-widget-container__widget"})})},Oz=oo`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`,Az=({onClick:t})=>_.jsx(Rz,{onClick:t,children:"Forecast Now!"}),Rz=I.button`
  font-size: 1.5rem;
  color: #ffffff;
  background-color: #01182b;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  z-index: 9999;
  animation: ${Oz} 2s infinite;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2), 
              0 0 20px rgba(0, 200, 255, 0.6),  /* Glow effect */
              0 0 40px rgba(0, 200, 255, 0.4); /* Glow spread */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1); /* Slight zoom on hover */
    box-shadow: 0 4px 20px rgba(0, 200, 255, 0.8),  /* Enhanced glow on hover */
                0 0 60px rgba(0, 200, 255, 0.6);
  }

  &:active {
    transform: scale(1); /* Reset zoom when clicked */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2), 
                0 0 20px rgba(0, 200, 255, 0.6), /* Glow remains when clicked */
                0 0 40px rgba(0, 200, 255, 0.4);
  }
`,Mz=({predictedPrices:t})=>{if(!t||t.length===0)return _.jsx("p",{children:"No predicted prices available."});const e=Math.max(...t).toFixed(2);console.log(e);const n=Math.min(...t).toFixed(2);console.log(n);const r=t.map(i=>({Price:i.toFixed(2)}));return _.jsxs(Lz,{children:[_.jsxs(tx,{children:[_.jsx("h2",{children:"Highest Price"}),_.jsxs("p",{children:["Price: $",e]})]}),_.jsxs(tx,{children:[_.jsx("h2",{children:"Lowest Price"}),_.jsxs("p",{children:["Price: $",n]})]}),_.jsxs(Dz,{children:[_.jsx(Lw,{})," ",_.jsx(G2,{data:r,filename:"forecasted_prices.csv",target:"_blank",children:"Download as CSV"})]})]})},Lz=I.div`
    display: flex;
    flex-direction: column;
    margin-right: 220px;
    gap: 20px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: #ffffff;

    @media (max-width: 768px) {
        margin-right: 0;
        padding: 10px;
    }

    @media (max-width: 480px) {
        padding: 5px;
    }
`,tx=I.div`
    background: rgba(0, 0, 0, 0.5);
    padding: 15px;
    border-radius: 8px;
    text-align: center;

    h2 {
        margin-bottom: 10px;
        font-size: 1.2rem;
    }

    p {
        margin: 5px 0;
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        padding: 10px;

        h2 {
            font-size: 1rem;
        }

        p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        padding: 8px;

        h2 {
            font-size: 0.9rem;
        }

        p {
            font-size: 0.8rem;
        }
    }
`,Dz=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    font-size: 1.2rem;
    background: #004080;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;

    svg {
        font-size: 1.5rem;
    }

    a {
        color: #ffffff;
        text-decoration: none;
    }

    &:hover {
        background: #0050a0;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 8px 16px;

        svg {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 6px 12px;

        svg {
            font-size: 1rem;
        }
    }
`,Nz=()=>{const[t,e]=P.useState(null),[n,r]=P.useState([]),[i,s]=P.useState(!1),[o,a]=P.useState(!1),l=u=>e(u),c=async()=>{s(!0),a(!1);const u=10,d=t.symbol;try{const f=await fetch("http://localhost:5000/api/Stockpredict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({symbol:d,n_future:u})});if(!f.ok)throw new Error(`HTTP error! status: ${f.status}`);const h=await f.json();r(h.predicted_prices),a(!0)}catch(f){console.error("Error fetching forecast data:",f)}finally{s(!1)}};return _.jsxs(_.Fragment,{children:[i&&_.jsx(Vz,{children:o?_.jsxs(Yz,{children:[_.jsx(C4,{className:"check-icon"}),_.jsx(nx,{children:"Forecast generated!"})]}):_.jsxs(Wz,{children:[_.jsx(Nw,{className:"spinner"}),_.jsx(nx,{children:"Generating forecast..."})]})}),_.jsxs($z,{blur:i,children:[_.jsx(kz,{}),_.jsx(bz,{onSelect:l}),t?_.jsxs(Uz,{children:[_.jsx(Cz,{symbol:t.symbol}),_.jsx(Iz,{symbol:t.symbol})]}):_.jsxs(jz,{children:[_.jsx(zz,{children:_.jsx(Dw,{})}),_.jsx(Bz,{children:"Search for stocks and get your prediction now!"})]}),t&&_.jsx(Az,{onClick:c}),n.length>0&&_.jsxs(Hz,{children:[_.jsx(F2,{predictedPrices:n}),_.jsx(Mz,{predictedPrices:n})]})]})]})},Fz=oo`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`,jz=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`,zz=I.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;

  svg {
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.7);
    animation: ${Fz} 2s infinite;
  }
`,Bz=I.div`
  margin-top: 10px;
  font-size: 1rem;
  color: #ffffff;
  text-align: center;
`,$z=I.div`
  padding: 20px;
  background: linear-gradient(135deg, #000000, #002f4c, #004080); 
  color: #ffffff;
  min-height: 84vh;
  position: relative;
  filter: ${({blur:t})=>t?"blur(5px)":"none"};
  `,Uz=I.div`
  margin-top: 20px;
`,Hz=I.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Vz=I.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`,Wz=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .spinner {
    font-size: 4rem;
    color: #ffffff;
    animation: spin 2s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,Yz=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .check-icon {
    font-size: 4rem;
    color: #00ff00;
  }
`,nx=I.div`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #ffffff;
`,rx=()=>{};let Mm={},gk={},mk=null,yk={mark:rx,measure:rx};try{typeof window<"u"&&(Mm=window),typeof document<"u"&&(gk=document),typeof MutationObserver<"u"&&(mk=MutationObserver),typeof performance<"u"&&(yk=performance)}catch{}const{userAgent:ix=""}=Mm.navigator||{},Jr=Mm,Te=gk,sx=mk,ic=yk;Jr.document;const cr=!!Te.documentElement&&!!Te.head&&typeof Te.addEventListener=="function"&&typeof Te.createElement=="function",vk=~ix.indexOf("MSIE")||~ix.indexOf("Trident/");var Ae="classic",xk="duotone",Ft="sharp",jt="sharp-duotone",Gz=[Ae,xk,Ft,jt],Kz={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},ox={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},qz=["kit"],Xz=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Qz=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Jz={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Zz={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},e9={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},t9={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},n9={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},r9={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},bk={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},i9=["solid","regular","light","thin","duotone","brands"],_k=[1,2,3,4,5,6,7,8,9,10],s9=_k.concat([11,12,13,14,15,16,17,18,19,20]),Ho={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},o9=[...Object.keys(t9),...i9,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ho.GROUP,Ho.SWAP_OPACITY,Ho.PRIMARY,Ho.SECONDARY].concat(_k.map(t=>"".concat(t,"x"))).concat(s9.map(t=>"w-".concat(t))),a9={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},l9={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},c9={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ax={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const sr="___FONT_AWESOME___",Rp=16,wk="fa",Sk="svg-inline--fa",qi="data-fa-i2svg",Mp="data-fa-pseudo-element",u9="data-fa-pseudo-element-pending",Lm="data-prefix",Dm="data-icon",lx="fontawesome-i2svg",d9="async",f9=["HTML","HEAD","STYLE","SCRIPT"],kk=(()=>{try{return!0}catch{return!1}})(),Ek=[Ae,Ft,jt];function gl(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Ae]}})}const Ck={...bk};Ck[Ae]={...bk[Ae],...ox.kit,...ox["kit-duotone"]};const Fi=gl(Ck),Lp={...r9};Lp[Ae]={...Lp[Ae],...ax.kit,...ax["kit-duotone"]};const Ka=gl(Lp),Dp={...n9};Dp[Ae]={...Dp[Ae],...c9.kit};const ji=gl(Dp),Np={...e9};Np[Ae]={...Np[Ae],...l9.kit};const h9=gl(Np),p9=Xz,Tk="fa-layers-text",g9=Qz,m9={...Kz};gl(m9);const y9=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Bf=Ho,Js=new Set;Object.keys(Ka[Ae]).map(Js.add.bind(Js));Object.keys(Ka[Ft]).map(Js.add.bind(Js));Object.keys(Ka[jt]).map(Js.add.bind(Js));const v9=[...qz,...o9],ca=Jr.FontAwesomeConfig||{};function x9(t){var e=Te.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function b9(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Te&&typeof Te.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=b9(x9(n));i!=null&&(ca[r]=i)});const Pk={styleDefault:"solid",familyDefault:"classic",cssPrefix:wk,replacementClass:Sk,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ca.familyPrefix&&(ca.cssPrefix=ca.familyPrefix);const Zs={...Pk,...ca};Zs.autoReplaceSvg||(Zs.observeMutations=!1);const H={};Object.keys(Pk).forEach(t=>{Object.defineProperty(H,t,{enumerable:!0,set:function(e){Zs[t]=e,ua.forEach(n=>n(H))},get:function(){return Zs[t]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(t){Zs.cssPrefix=t,ua.forEach(e=>e(H))},get:function(){return Zs.cssPrefix}});Jr.FontAwesomeConfig=H;const ua=[];function _9(t){return ua.push(t),()=>{ua.splice(ua.indexOf(t),1)}}const mr=Rp,Tn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function w9(t){if(!t||!cr)return;const e=Te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Te.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Te.head.insertBefore(e,r),t}const S9="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function qa(){let t=12,e="";for(;t-- >0;)e+=S9[Math.random()*62|0];return e}function uo(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Nm(t){return t.classList?uo(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ik(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function k9(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ik(t[n]),'" '),"").trim()}function Od(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Fm(t){return t.size!==Tn.size||t.x!==Tn.x||t.y!==Tn.y||t.rotate!==Tn.rotate||t.flipX||t.flipY}function E9(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function C9(t){let{transform:e,width:n=Rp,height:r=Rp,startCentered:i=!1}=t,s="";return i&&vk?s+="translate(".concat(e.x/mr-n/2,"em, ").concat(e.y/mr-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/mr,"em), calc(-50% + ").concat(e.y/mr,"em)) "):s+="translate(".concat(e.x/mr,"em, ").concat(e.y/mr,"em) "),s+="scale(".concat(e.size/mr*(e.flipX?-1:1),", ").concat(e.size/mr*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var T9=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ok(){const t=wk,e=Sk,n=H.cssPrefix,r=H.replacementClass;let i=T9;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let cx=!1;function $f(){H.autoAddCss&&!cx&&(w9(Ok()),cx=!0)}var P9={mixout(){return{dom:{css:Ok,insertCss:$f}}},hooks(){return{beforeDOMElementCreation(){$f()},beforeI2svg(){$f()}}}};const or=Jr||{};or[sr]||(or[sr]={});or[sr].styles||(or[sr].styles={});or[sr].hooks||(or[sr].hooks={});or[sr].shims||(or[sr].shims=[]);var Pn=or[sr];const Ak=[],Rk=function(){Te.removeEventListener("DOMContentLoaded",Rk),ju=1,Ak.map(t=>t())};let ju=!1;cr&&(ju=(Te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Te.readyState),ju||Te.addEventListener("DOMContentLoaded",Rk));function I9(t){cr&&(ju?setTimeout(t,0):Ak.push(t))}function ml(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Ik(t):"<".concat(e," ").concat(k9(n),">").concat(r.map(ml).join(""),"</").concat(e,">")}function ux(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Uf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,l,c,u;for(r===void 0?(l=1,u=e[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function O9(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Fp(t){const e=O9(t);return e.length===1?e[0].toString(16):null}function A9(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function dx(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function jp(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=dx(e);typeof Pn.hooks.addPack=="function"&&!r?Pn.hooks.addPack(t,dx(e)):Pn.styles[t]={...Pn.styles[t]||{},...i},t==="fas"&&jp("fa",e)}const{styles:_i,shims:R9}=Pn,M9={[Ae]:Object.values(ji[Ae]),[Ft]:Object.values(ji[Ft]),[jt]:Object.values(ji[jt])};let jm=null,Mk={},Lk={},Dk={},Nk={},Fk={};const L9={[Ae]:Object.keys(Fi[Ae]),[Ft]:Object.keys(Fi[Ft]),[jt]:Object.keys(Fi[jt])};function D9(t){return~v9.indexOf(t)}function N9(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!D9(i)?i:null}const jk=()=>{const t=r=>Uf(_i,(i,s,o)=>(i[o]=Uf(s,r,{}),i),{});Mk=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),Lk=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),Fk=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in _i||H.autoFetchSvg,n=Uf(R9,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});Dk=n.names,Nk=n.unicodes,jm=Ad(H.styleDefault,{family:H.familyDefault})};_9(t=>{jm=Ad(t.styleDefault,{family:H.familyDefault})});jk();function zm(t,e){return(Mk[t]||{})[e]}function F9(t,e){return(Lk[t]||{})[e]}function Dr(t,e){return(Fk[t]||{})[e]}function zk(t){return Dk[t]||{prefix:null,iconName:null}}function j9(t){const e=Nk[t],n=zm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Zr(){return jm}const Bm=()=>({prefix:null,iconName:null,rest:[]});function Ad(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Ae}=e,r=Fi[n][t],i=Ka[n][t]||Ka[n][r],s=t in Pn.styles?t:null;return i||s||null}const z9={[Ae]:Object.keys(ji[Ae]),[Ft]:Object.keys(ji[Ft]),[jt]:Object.keys(ji[jt])};function Rd(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Ae]:"".concat(H.cssPrefix,"-").concat(Ae),[Ft]:"".concat(H.cssPrefix,"-").concat(Ft),[jt]:"".concat(H.cssPrefix,"-").concat(jt)};let i=null,s=Ae;const o=Gz.filter(l=>l!==xk);o.forEach(l=>{(t.includes(r[l])||t.some(c=>z9[l].includes(c)))&&(s=l)});const a=t.reduce((l,c)=>{const u=N9(H.cssPrefix,c);if(_i[c]?(c=M9[s].includes(c)?h9[s][c]:c,i=c,l.prefix=c):L9[s].indexOf(c)>-1?(i=c,l.prefix=Ad(c,{family:s})):u?l.iconName=u:c!==H.replacementClass&&!o.some(d=>c===r[d])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const d=i==="fa"?zk(l.iconName):{},f=Dr(l.prefix,l.iconName);d.prefix&&(i=null),l.iconName=d.iconName||f||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!_i.far&&_i.fas&&!H.autoFetchSvg&&(l.prefix="fas")}return l},Bm());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===Ft&&(_i.fass||H.autoFetchSvg)&&(a.prefix="fass",a.iconName=Dr(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===jt&&(_i.fasds||H.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Dr(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=Zr()||"fas"),a}class B9{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},jp(s,i[s]);const o=ji[Ae][s];o&&jp(o,i[s]),jk()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],l=a[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let fx=[],_s={};const Ls={},$9=Object.keys(Ls);function U9(t,e){let{mixoutsTo:n}=e;return fx=t,_s={},Object.keys(Ls).forEach(r=>{$9.indexOf(r)===-1&&delete Ls[r]}),fx.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{_s[o]||(_s[o]=[]),_s[o].push(s[o])})}r.provides&&r.provides(Ls)}),n}function zp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(_s[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Xi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(_s[t]||[]).forEach(s=>{s.apply(null,n)})}function ei(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ls[t]?Ls[t].apply(null,e):void 0}function Bp(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Zr();if(e)return e=Dr(n,e)||e,ux(Bk.definitions,n,e)||ux(Pn.styles,n,e)}const Bk=new B9,H9=()=>{H.autoReplaceSvg=!1,H.observeMutations=!1,Xi("noAuto")},V9={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return cr?(Xi("beforeI2svg",t),ei("pseudoElements2svg",t),ei("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,I9(()=>{Y9({autoReplaceSvgRoot:e}),Xi("watch",t)})}},W9={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Dr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ad(t[0]);return{prefix:n,iconName:Dr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(H.cssPrefix,"-"))>-1||t.match(p9))){const e=Rd(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Zr(),iconName:Dr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Zr();return{prefix:e,iconName:Dr(e,t)||t}}}},Ut={noAuto:H9,config:H,dom:V9,parse:W9,library:Bk,findIconDefinition:Bp,toHtml:ml},Y9=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Te}=t;(Object.keys(Pn.styles).length>0||H.autoFetchSvg)&&cr&&H.autoReplaceSvg&&Ut.dom.i2svg({node:e})};function Md(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ml(n))}}),Object.defineProperty(t,"node",{get:function(){if(!cr)return;const n=Te.createElement("div");return n.innerHTML=t.html,n.children}}),t}function G9(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Fm(o)&&n.found&&!r.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=Od({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function K9(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(H.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function $m(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:l,titleId:c,extra:u,watchable:d=!1}=t,{width:f,height:h}=n.found?n:e,p=r==="fak",y=[H.replacementClass,i?"".concat(H.cssPrefix,"-").concat(i):""].filter(k=>u.classes.indexOf(k)===-1).filter(k=>k!==""||!!k).concat(u.classes).join(" ");let v={children:[],attributes:{...u.attributes,"data-prefix":r,"data-icon":i,class:y,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(h)}};const m=p&&!~u.classes.indexOf("fa-fw")?{width:"".concat(f/h*16*.0625,"em")}:{};d&&(v.attributes[qi]=""),a&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||qa())},children:[a]}),delete v.attributes.title);const g={...v,prefix:r,iconName:i,main:e,mask:n,maskId:l,transform:s,symbol:o,styles:{...m,...u.styles}},{children:x,attributes:w}=n.found&&e.found?ei("generateAbstractMask",g)||{children:[],attributes:{}}:ei("generateAbstractIcon",g)||{children:[],attributes:{}};return g.children=x,g.attributes=w,o?K9(g):G9(g)}function hx(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[qi]="");const c={...o.styles};Fm(i)&&(c.transform=C9({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const u=Od(c);u.length>0&&(l.style=u);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function q9(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Od(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Hf}=Pn;function $p(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(Bf.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Bf.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Bf.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const X9={found:!1,width:512,height:512};function Q9(t,e){!kk&&!H.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Up(t,e){let n=e;return e==="fa"&&H.styleDefault!==null&&(e=Zr()),new Promise((r,i)=>{if(n==="fa"){const s=zk(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Hf[e]&&Hf[e][t]){const s=Hf[e][t];return r($p(s))}Q9(t,e),r({...X9,icon:H.showMissingIcons&&t?ei("missingIconAbstract")||{}:{}})})}const px=()=>{},Hp=H.measurePerformance&&ic&&ic.mark&&ic.measure?ic:{mark:px,measure:px},Vo='FA "6.6.0"',J9=t=>(Hp.mark("".concat(Vo," ").concat(t," begins")),()=>$k(t)),$k=t=>{Hp.mark("".concat(Vo," ").concat(t," ends")),Hp.measure("".concat(Vo," ").concat(t),"".concat(Vo," ").concat(t," begins"),"".concat(Vo," ").concat(t," ends"))};var Um={begin:J9,end:$k};const zc=()=>{};function gx(t){return typeof(t.getAttribute?t.getAttribute(qi):null)=="string"}function Z9(t){const e=t.getAttribute?t.getAttribute(Lm):null,n=t.getAttribute?t.getAttribute(Dm):null;return e&&n}function e7(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(H.replacementClass)}function t7(){return H.autoReplaceSvg===!0?Bc.replace:Bc[H.autoReplaceSvg]||Bc.replace}function n7(t){return Te.createElementNS("http://www.w3.org/2000/svg",t)}function r7(t){return Te.createElement(t)}function Uk(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?n7:r7}=e;if(typeof t=="string")return Te.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(Uk(s,{ceFn:n}))}),r}function i7(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Bc={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Uk(n),e)}),e.getAttribute(qi)===null&&H.keepOriginalSource){let n=Te.createComment(i7(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Nm(e).indexOf(H.replacementClass))return Bc.replace(t);const r=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===H.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>ml(s)).join(`
`);e.setAttribute(qi,""),e.innerHTML=i}};function mx(t){t()}function Hk(t,e){const n=typeof e=="function"?e:zc;if(t.length===0)n();else{let r=mx;H.mutateApproach===d9&&(r=Jr.requestAnimationFrame||mx),r(()=>{const i=t7(),s=Um.begin("mutate");t.map(i),s(),n()})}}let Hm=!1;function Vk(){Hm=!0}function Vp(){Hm=!1}let zu=null;function yx(t){if(!sx||!H.observeMutations)return;const{treeCallback:e=zc,nodeCallback:n=zc,pseudoElementsCallback:r=zc,observeMutationsRoot:i=Te}=t;zu=new sx(s=>{if(Hm)return;const o=Zr();uo(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!gx(a.addedNodes[0])&&(H.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&H.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&gx(a.target)&&~y9.indexOf(a.attributeName))if(a.attributeName==="class"&&Z9(a.target)){const{prefix:l,iconName:c}=Rd(Nm(a.target));a.target.setAttribute(Lm,l||o),c&&a.target.setAttribute(Dm,c)}else e7(a.target)&&n(a.target)})}),cr&&zu.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function s7(){zu&&zu.disconnect()}function o7(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function a7(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Rd(Nm(t));return i.prefix||(i.prefix=Zr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=F9(i.prefix,t.innerText)||zm(i.prefix,Fp(t.innerText))),!i.iconName&&H.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function l7(t){const e=uo(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return H.autoA11y&&(n?e["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||qa()):(e["aria-hidden"]="true",e.focusable="false")),e}function c7(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Tn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vx(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=a7(t),s=l7(t),o=zp("parseNodeAttributes",{},t);let a=e.styleParser?o7(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Tn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:u7}=Pn;function Wk(t){const e=H.autoReplaceSvg==="nest"?vx(t,{styleParser:!1}):vx(t);return~e.extra.classes.indexOf(Tk)?ei("generateLayersText",t,e):ei("generateSvgReplacementMutation",t,e)}let Mn=new Set;Ek.map(t=>{Mn.add("fa-".concat(t))});Object.keys(Fi[Ae]).map(Mn.add.bind(Mn));Object.keys(Fi[Ft]).map(Mn.add.bind(Mn));Object.keys(Fi[jt]).map(Mn.add.bind(Mn));Mn=[...Mn];function xx(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!cr)return Promise.resolve();const n=Te.documentElement.classList,r=u=>n.add("".concat(lx,"-").concat(u)),i=u=>n.remove("".concat(lx,"-").concat(u)),s=H.autoFetchSvg?Mn:Ek.map(u=>"fa-".concat(u)).concat(Object.keys(u7));s.includes("fa")||s.push("fa");const o=[".".concat(Tk,":not([").concat(qi,"])")].concat(s.map(u=>".".concat(u,":not([").concat(qi,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=uo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=Um.begin("onTree"),c=a.reduce((u,d)=>{try{const f=Wk(d);f&&u.push(f)}catch(f){kk||f.name==="MissingIcon"&&console.error(f)}return u},[]);return new Promise((u,d)=>{Promise.all(c).then(f=>{Hk(f,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(f=>{l(),d(f)})})}function d7(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wk(t).then(n=>{n&&Hk([n],e)})}function f7(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Bp(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Bp(i||{})),t(r,{...n,mask:i})}}const h7=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Tn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:d,iconName:f,icon:h}=t;return Md({type:"icon",...t},()=>(Xi("beforeDOMElementCreation",{iconDefinition:t,params:e}),H.autoA11y&&(o?c["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(a||qa()):(c["aria-hidden"]="true",c.focusable="false")),$m({icons:{main:$p(h),mask:i?$p(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:{...Tn,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:u,classes:l}})))};var p7={mixout(){return{icon:f7(h7)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=xx,t.nodeCallback=d7,t}}},provides(t){t.i2svg=function(e){const{node:n=Te,callback:r=()=>{}}=e;return xx(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:l,mask:c,maskId:u,extra:d}=n;return new Promise((f,h)=>{Promise.all([Up(r,o),c.iconName?Up(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(p=>{let[y,v]=p;f([e,$m({icons:{main:y,mask:v},prefix:o,iconName:r,transform:a,symbol:l,maskId:u,title:i,titleId:s,extra:d,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=Od(o);a.length>0&&(r.style=a);let l;return Fm(s)&&(l=ei("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},g7={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Md({type:"layer"},()=>{Xi("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},m7={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Md({type:"counter",content:t},()=>(Xi("beforeDOMElementCreation",{content:t,params:e}),q9({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(H.cssPrefix,"-layers-counter"),...r]}})))}}}},y7={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Tn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Md({type:"text",content:t},()=>(Xi("beforeDOMElementCreation",{content:t,params:e}),hx({content:t,transform:{...Tn,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(H.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(vk){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return H.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,hx({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const v7=new RegExp('"',"ug"),bx=[1105920,1112319],_x={FontAwesome:{normal:"fas",400:"fas"},...Zz,...Jz,...a9},Wp=Object.keys(_x).reduce((t,e)=>(t[e.toLowerCase()]=_x[e],t),{}),x7=Object.keys(Wp).reduce((t,e)=>{const n=Wp[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function b7(t){const e=t.replace(v7,""),n=A9(e,0),r=n>=bx[0]&&n<=bx[1],i=e.length===2?e[0]===e[1]:!1;return{value:Fp(i?e[0]:e),isSecondary:r||i}}function _7(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Wp[n]||{})[i]||x7[n]}function wx(t,e){const n="".concat(u9).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=uo(t.children).filter(f=>f.getAttribute(Mp)===e)[0],a=Jr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(g9),u=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&d!=="none"&&d!==""){const f=a.getPropertyValue("content");let h=_7(l,u);const{value:p,isSecondary:y}=b7(f),v=c[0].startsWith("FontAwesome");let m=zm(h,p),g=m;if(v){const x=j9(p);x.iconName&&x.prefix&&(m=x.iconName,h=x.prefix)}if(m&&!y&&(!o||o.getAttribute(Lm)!==h||o.getAttribute(Dm)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);const x=c7(),{extra:w}=x;w.attributes[Mp]=e,Up(m,h).then(k=>{const C=$m({...x,icons:{main:k,mask:Bm()},prefix:h,iconName:g,extra:w,watchable:!0}),E=Te.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=C.map(b=>ml(b)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function w7(t){return Promise.all([wx(t,"::before"),wx(t,"::after")])}function S7(t){return t.parentNode!==document.head&&!~f9.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Mp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Sx(t){if(cr)return new Promise((e,n)=>{const r=uo(t.querySelectorAll("*")).filter(S7).map(w7),i=Um.begin("searchPseudoElements");Vk(),Promise.all(r).then(()=>{i(),Vp(),e()}).catch(()=>{i(),Vp(),n()})})}var k7={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Sx,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Te}=e;H.searchPseudoElements&&Sx(n)}}};let kx=!1;var E7={mixout(){return{dom:{unwatch(){Vk(),kx=!0}}}},hooks(){return{bootstrap(){yx(zp("mutationObserverCallbacks",{}))},noAuto(){s7()},watch(t){const{observeMutationsRoot:e}=t;kx?Vp():yx(zp("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ex=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var C7={mixout(){return{parse:{transform:t=>Ex(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ex(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(a," ").concat(l," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},f={outer:o,inner:u,path:d};return{tag:"g",attributes:{...f.outer},children:[{tag:"g",attributes:{...f.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...f.path}}]}]}}}};const Vf={x:0,y:0,width:"100%",height:"100%"};function Cx(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function T7(t){return t.tag==="g"?t.children:[t]}var P7={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Rd(n.split(" ").map(i=>i.trim())):Bm();return r.prefix||(r.prefix=Zr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:l,icon:c}=i,{width:u,icon:d}=s,f=E9({transform:a,containerWidth:u,iconWidth:l}),h={tag:"rect",attributes:{...Vf,fill:"white"}},p=c.children?{children:c.children.map(Cx)}:{},y={tag:"g",attributes:{...f.inner},children:[Cx({tag:c.tag,attributes:{...c.attributes,...f.path},...p})]},v={tag:"g",attributes:{...f.outer},children:[y]},m="mask-".concat(o||qa()),g="clip-".concat(o||qa()),x={tag:"mask",attributes:{...Vf,id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[h,v]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:T7(d)},x]};return n.push(w,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(m,")"),...Vf}}),{children:n,attributes:r}}}},I7={provides(t){let e=!1;Jr.matchMedia&&(e=Jr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},O7={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},A7=[P9,p7,g7,m7,y7,k7,E7,C7,P7,I7,O7];U9(A7,{mixoutsTo:Ut});Ut.noAuto;Ut.config;Ut.library;Ut.dom;const Yp=Ut.parse;Ut.findIconDefinition;Ut.toHtml;const R7=Ut.icon;Ut.layer;Ut.text;Ut.counter;function Tx(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function kn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Tx(Object(n),!0).forEach(function(r){ws(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Tx(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Bu(t){"@babel/helpers - typeof";return Bu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bu(t)}function ws(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M7(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function L7(t,e){if(t==null)return{};var n=M7(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Gp(t){return D7(t)||N7(t)||F7(t)||j7()}function D7(t){if(Array.isArray(t))return Kp(t)}function N7(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function F7(t,e){if(t){if(typeof t=="string")return Kp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kp(t,e)}}function Kp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function j7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z7(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,d=t.pulse,f=t.fixedWidth,h=t.inverse,p=t.border,y=t.listItem,v=t.flip,m=t.size,g=t.rotation,x=t.pull,w=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":f,"fa-inverse":h,"fa-border":p,"fa-li":y,"fa-flip":v===!0,"fa-flip-horizontal":v==="horizontal"||v==="both","fa-flip-vertical":v==="vertical"||v==="both"},ws(e,"fa-".concat(m),typeof m<"u"&&m!==null),ws(e,"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),ws(e,"fa-pull-".concat(x),typeof x<"u"&&x!==null),ws(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(w).map(function(k){return w[k]?k:null}).filter(function(k){return k})}function B7(t){return t=t-0,t===t}function Yk(t){return B7(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var $7=["style"];function U7(t){return t.charAt(0).toUpperCase()+t.slice(1)}function H7(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Yk(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[U7(i)]=s:e[i]=s,e},{})}function Gk(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Gk(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=H7(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[Yk(c)]=u}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=L7(n,$7);return i.attrs.style=kn(kn({},i.attrs.style),o),t.apply(void 0,[e.tag,kn(kn({},i.attrs),a)].concat(Gp(r)))}var Kk=!1;try{Kk=!0}catch{}function V7(){if(!Kk&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Px(t){if(t&&Bu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Yp.icon)return Yp.icon(t);if(t===null)return null;if(t&&Bu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Wf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ws({},t,e):{}}var Ix={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ld=q.forwardRef(function(t,e){var n=kn(kn({},Ix),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,c=n.maskId,u=Px(r),d=Wf("classes",[].concat(Gp(z7(n)),Gp((o||"").split(" ")))),f=Wf("transform",typeof n.transform=="string"?Yp.transform(n.transform):n.transform),h=Wf("mask",Px(i)),p=R7(u,kn(kn(kn(kn({},d),f),h),{},{symbol:s,title:a,titleId:l,maskId:c}));if(!p)return V7("Could not find icon",u),null;var y=p.abstract,v={ref:e};return Object.keys(n).forEach(function(m){Ix.hasOwnProperty(m)||(v[m]=n[m])}),W7(y[0],v)});Ld.displayName="FontAwesomeIcon";Ld.propTypes={beat:re.bool,border:re.bool,beatFade:re.bool,bounce:re.bool,className:re.string,fade:re.bool,flash:re.bool,mask:re.oneOfType([re.object,re.array,re.string]),maskId:re.string,fixedWidth:re.bool,inverse:re.bool,flip:re.oneOf([!0,!1,"horizontal","vertical","both"]),icon:re.oneOfType([re.object,re.array,re.string]),listItem:re.bool,pull:re.oneOf(["right","left"]),pulse:re.bool,rotation:re.oneOf([0,90,180,270]),shake:re.bool,size:re.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:re.bool,spinPulse:re.bool,spinReverse:re.bool,symbol:re.oneOfType([re.bool,re.string]),title:re.string,titleId:re.string,transform:re.oneOfType([re.string,re.object]),swapOpacity:re.bool};var W7=Gk.bind(null,q.createElement);const Y7={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]},qk={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},G7=I.div`
  max-width: 400px;
  width: 100%;
  margin: auto;
  padding: 20px;
  border: 1px solid #444;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(10, 10, 30, 0.9), rgba(30, 30, 60, 0.9));
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 128, 255, 0.5);
  position: relative;
  z-index: 1;
  min-height: 400px;
`,K7=I.h2`
  color: #ffffff;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.8);
`,Ox=I.input`
  width: 100%;
  padding: 10px;
  margin: 10px -10px;
  border: 1px solid #666;
  border-radius: 4px;
  background-color: rgba(20, 20, 40, 0.9);
  color: #ffffff;
  font-size: 16px;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`,Xk=I.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: linear-gradient(135deg, #28a745, #21b146);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background: linear-gradient(135deg, #218838, #1e7e34);
    box-shadow: 0 0 15px rgba(40, 167, 69, 0.7);
  }
`,q7=I(Xk)`
  background: linear-gradient(135deg, #db4437, #c13527);
  margin-top: 10px;

  &:hover {
    background: linear-gradient(135deg, #c13527, #a8231f);
    box-shadow: 0 0 15px rgba(219, 68, 55, 0.7);
  }
`,Ax=I(Ld)`
  margin-right: 8px;
`,X7=({onSwitchToSignup:t,onGoogleLogin:e,onLoginSuccess:n})=>{const[r,i]=P.useState(""),[s,o]=P.useState(""),a=es(),l=async u=>{u.preventDefault();try{await w8(Ya,r,s),console.log("User logged in successfully!"),n(),a("/dashboard")}catch(d){console.error("Failed to log in user:",d.message),se.error("Invalid email or password. Please try again.")}},c=async()=>{const u=new Cn;try{await zS(Ya,u),console.log("User logged in with Google successfully!"),e(),a("/dashboard")}catch(d){console.error("Failed to log in with Google:",d.message),se.error("Failed to log in with Google. Please try again.")}};return _.jsxs(G7,{children:[_.jsx(K7,{children:"Login"}),_.jsxs("form",{onSubmit:l,style:{width:"100%"},children:[_.jsx(Ox,{type:"email",placeholder:"Email",value:r,onChange:u=>i(u.target.value),required:!0}),_.jsx(Ox,{type:"password",placeholder:"Password",value:s,onChange:u=>o(u.target.value),required:!0}),_.jsxs(Xk,{type:"submit",children:[_.jsx(Ax,{icon:Y7}),"Login"]}),_.jsxs(q7,{type:"button",onClick:c,children:[_.jsx(Ax,{icon:qk}),"Login with Google"]})]}),_.jsxs("p",{style:{color:"#aaa"},children:["Don't have an account?"," ",_.jsx("span",{onClick:t,style:{color:"#007bff",cursor:"pointer"},children:"Sign up"})]}),_.jsx(gd,{position:"top-right",autoClose:1500,hideProgressBar:!0,closeOnClick:!0})]})},Q7=({onSwitchToLogin:t})=>{const[e,n]=P.useState(""),[r,i]=P.useState(""),[s,o]=P.useState(""),a=es(),l=async u=>{u.preventDefault();try{await _8(Ya,r,s),console.log("User registered successfully!"),a("/dashboard")}catch(d){console.error("Failed to register user:",d.message),d.code==="auth/email-already-in-use"&&se.error("Email already taken!",{position:"top-right",autoClose:1500,hideProgressBar:!0,closeOnClick:!0})}},c=async()=>{const u=new Cn;try{await zS(Ya,u),console.log("User registered with Google successfully!"),a("/dashboard")}catch(d){console.error("Failed to sign up with Google:",d.message)}};return _.jsxs(J7,{children:[_.jsx(gd,{}),_.jsx(Z7,{children:"Sign Up"}),_.jsxs("form",{onSubmit:l,children:[_.jsx(Yf,{type:"text",placeholder:"Username",value:e,onChange:u=>n(u.target.value),required:!0}),_.jsx(Yf,{type:"email",placeholder:"Email",value:r,onChange:u=>i(u.target.value),required:!0}),_.jsx(Yf,{type:"password",placeholder:"Password",value:s,onChange:u=>o(u.target.value),required:!0}),_.jsx(Qk,{type:"submit",children:"Sign Up"}),_.jsxs(eB,{type:"button",onClick:c,children:[_.jsx(Ld,{icon:qk,style:{marginRight:"8px"}}),"Sign up with Google"]})]}),_.jsxs("p",{style:{color:"#aaa"},children:["Already have an account?"," ",_.jsx("span",{onClick:t,style:{color:"#007bff",cursor:"pointer"},children:"Login"})]})]})},J7=I.div`
  max-width: 400px;
  width: 100%;
  margin: auto;
  padding: 20px;
  border: 1px solid #444; // Darker border
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(10, 10, 30, 0.9), rgba(30, 30, 60, 0.9)); // Dark blue futuristic gradient
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 128, 255, 0.5); // Added glow effect
  position: relative;
  z-index: 1;
`,Z7=I.h2`
  color: #ffffff;
  text-align: center; // Center align the title
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.8); // Added glow to the title
`,Yf=I.input`
  width: 100%;
  padding: 10px;
  margin: 10px -10px;
  border: 1px solid #666; // Darker border
  border-radius: 4px;
  background-color: rgba(20, 20, 40, 0.9); // Darker input background
  color: #ffffff; // White text
  font-size: 16px;

  &::placeholder {
    color: #bbb; // Lighter placeholder text
  }

  &:focus {
    outline: none;
    border-color: #007bff; // Highlight border color on focus
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); // Glow effect on focus
  }
`,Qk=I.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: linear-gradient(135deg, #007bff, #0056b3); // Blue gradient background
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s, box-shadow 0.3s; // Smooth transition for hover effects

  &:hover {
    background: linear-gradient(135deg, #0056b3, #004494); // Darker gradient on hover
    box-shadow: 0 0 15px rgba(0, 123, 255, 0.7); // Glow effect on hover
  }
`,eB=I(Qk)`
  background: linear-gradient(135deg, #db4437, #c13527); // Gradient for Google button
  margin-top: 20px;

  &:hover {
    background: linear-gradient(135deg, #c13527, #a8231f); // Darker gradient on hover
    box-shadow: 0 0 15px rgba(219, 68, 55, 0.7); // Glow effect on hover
  }
`,tB="/assets/loginpg-bSpYx08h.jpg",nB=I.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88vh;
  position: relative;
`,rB=I.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${tB}); 
  background-size: cover;
  background-position: center;
  z-index: 0;
  filter: blur(8px);
`,iB=({onLogin:t})=>{const[e,n]=P.useState(!0),r=es(),i=()=>{console.log("Google login clicked"),t(),r("/dashboard")},s=()=>{t(),r("/dashboard")},o=()=>{t(),r("/dashboard")};return _.jsxs(nB,{children:[_.jsx(rB,{}),e?_.jsx(X7,{onSwitchToSignup:()=>n(!1),onGoogleLogin:i,onLoginSuccess:s}):_.jsx(Q7,{onSwitchToLogin:()=>n(!0),onSignupSuccess:o})]})};/*! js-cookie v3.0.5 | MIT */function sc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}var sB={read:function(t){return t[0]==='"'&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function qp(t,e){function n(i,s,o){if(!(typeof document>"u")){o=sc({},e,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var l in o)o[l]&&(a+="; "+l,o[l]!==!0&&(a+="="+o[l].split(";")[0]));return document.cookie=i+"="+t.write(s,i)+a}}function r(i){if(!(typeof document>"u"||arguments.length&&!i)){for(var s=document.cookie?document.cookie.split("; "):[],o={},a=0;a<s.length;a++){var l=s[a].split("="),c=l.slice(1).join("=");try{var u=decodeURIComponent(l[0]);if(o[u]=t.read(c,u),i===u)break}catch{}}return i?o[i]:o}}return Object.create({set:n,get:r,remove:function(i,s){n(i,"",sc({},s,{expires:-1}))},withAttributes:function(i){return qp(this.converter,sc({},this.attributes,i))},withConverter:function(i){return qp(sc({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(t)}})}var Gf=qp(sB,{path:"/"});function oB(){const[t,e]=P.useState(!1),[n,r]=P.useState(!0),s=Zi().pathname==="/";P.useEffect(()=>{const l=Gf.get("isAuthenticated");console.log("Auth Cookie:",l),l==="true"&&e(!0),r(!1)},[]);const o=()=>{e(!0),Gf.set("isAuthenticated",!0,{expires:7}),console.log("Cookie set on login")},a=()=>{e(!1),Gf.remove("isAuthenticated"),console.log("Cookie removed on logout")};return n?_.jsx("div",{children:"Loading..."}):_.jsxs(_.Fragment,{children:[!s&&_.jsx(ej,{onLogout:a})," ",_.jsxs(pP,{children:[_.jsx(vr,{path:"/",element:_.jsx(sj,{})}),_.jsx(vr,{path:"/login",element:_.jsx(iB,{onLogin:o})}),_.jsx(vr,{path:"/dashboard",element:t?_.jsx(i4,{}):_.jsx(bo,{to:"/login"})}),_.jsx(vr,{path:"/forecast",element:t?_.jsx(Nz,{}):_.jsx(bo,{to:"/login"})}),_.jsx(vr,{path:"/profile",element:t?_.jsx(jN,{}):_.jsx(bo,{to:"/login"})}),_.jsx(vr,{path:"/feedback",element:t?_.jsx(jF,{}):_.jsx(bo,{to:"/login"})}),_.jsx(vr,{path:"/CsvUpload",element:t?_.jsx(R3,{}):_.jsx(bo,{to:"/login"})})]}),_.jsx(ij,{})]})}function aB(){return _.jsx(wP,{children:_.jsx(oB,{})})}Kf.createRoot(document.getElementById("root")).render(_.jsx(q.StrictMode,{children:_.jsx(aB,{})}));
