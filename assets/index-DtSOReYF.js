(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function FM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var i_={exports:{}},Zu={},r_={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ka=Symbol.for("react.element"),OM=Symbol.for("react.portal"),BM=Symbol.for("react.fragment"),kM=Symbol.for("react.strict_mode"),VM=Symbol.for("react.profiler"),zM=Symbol.for("react.provider"),HM=Symbol.for("react.context"),GM=Symbol.for("react.forward_ref"),WM=Symbol.for("react.suspense"),jM=Symbol.for("react.memo"),XM=Symbol.for("react.lazy"),Im=Symbol.iterator;function YM(t){return t===null||typeof t!="object"?null:(t=Im&&t[Im]||t["@@iterator"],typeof t=="function"?t:null)}var s_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o_=Object.assign,a_={};function mo(t,e,n){this.props=t,this.context=e,this.refs=a_,this.updater=n||s_}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function l_(){}l_.prototype=mo.prototype;function Hh(t,e,n){this.props=t,this.context=e,this.refs=a_,this.updater=n||s_}var Gh=Hh.prototype=new l_;Gh.constructor=Hh;o_(Gh,mo.prototype);Gh.isPureReactComponent=!0;var Nm=Array.isArray,u_=Object.prototype.hasOwnProperty,Wh={current:null},c_={key:!0,ref:!0,__self:!0,__source:!0};function f_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)u_.call(e,i)&&!c_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ka,type:t,key:s,ref:o,props:r,_owner:Wh.current}}function qM(t,e){return{$$typeof:ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ka}function KM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Um=/\/+/g;function Ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?KM(""+t.key):e.toString(36)}function Xl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ka:case OM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ec(o,0):i,Nm(r)?(n="",t!=null&&(n=t.replace(Um,"$&/")+"/"),Xl(r,e,n,"",function(u){return u})):r!=null&&(jh(r)&&(r=qM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Um,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Nm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ec(s,a);o+=Xl(s,e,n,l,r)}else if(l=YM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ec(s,a++),o+=Xl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function el(t,e,n){if(t==null)return t;var i=[],r=0;return Xl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function $M(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ln={current:null},Yl={transition:null},ZM={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:Wh};function d_(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:el,forEach:function(t,e,n){el(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return el(t,function(){e++}),e},toArray:function(t){return el(t,function(e){return e})||[]},only:function(t){if(!jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=mo;ke.Fragment=BM;ke.Profiler=VM;ke.PureComponent=Hh;ke.StrictMode=kM;ke.Suspense=WM;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZM;ke.act=d_;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=o_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)u_.call(e,l)&&!c_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ka,type:t.type,key:r,ref:s,props:i,_owner:o}};ke.createContext=function(t){return t={$$typeof:HM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zM,_context:t},t.Consumer=t};ke.createElement=f_;ke.createFactory=function(t){var e=f_.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:GM,render:t}};ke.isValidElement=jh;ke.lazy=function(t){return{$$typeof:XM,_payload:{_status:-1,_result:t},_init:$M}};ke.memo=function(t,e){return{$$typeof:jM,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=Yl.transition;Yl.transition={};try{t()}finally{Yl.transition=e}};ke.unstable_act=d_;ke.useCallback=function(t,e){return ln.current.useCallback(t,e)};ke.useContext=function(t){return ln.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return ln.current.useDeferredValue(t)};ke.useEffect=function(t,e){return ln.current.useEffect(t,e)};ke.useId=function(){return ln.current.useId()};ke.useImperativeHandle=function(t,e,n){return ln.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return ln.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return ln.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return ln.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return ln.current.useReducer(t,e,n)};ke.useRef=function(t){return ln.current.useRef(t)};ke.useState=function(t){return ln.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return ln.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return ln.current.useTransition()};ke.version="18.3.1";r_.exports=ke;var de=r_.exports;const rr=FM(de);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QM=de,JM=Symbol.for("react.element"),eE=Symbol.for("react.fragment"),tE=Object.prototype.hasOwnProperty,nE=QM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iE={key:!0,ref:!0,__self:!0,__source:!0};function h_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)tE.call(e,i)&&!iE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:JM,type:t,key:s,ref:o,props:r,_owner:nE.current}}Zu.Fragment=eE;Zu.jsx=h_;Zu.jsxs=h_;i_.exports=Zu;var I=i_.exports,zf={},p_={exports:{}},An={},m_={exports:{}},g_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,j){var Q=L.length;L.push(j);e:for(;0<Q;){var oe=Q-1>>>1,Se=L[oe];if(0<r(Se,j))L[oe]=j,L[Q]=Se,Q=oe;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var j=L[0],Q=L.pop();if(Q!==j){L[0]=Q;e:for(var oe=0,Se=L.length,Ke=Se>>>1;oe<Ke;){var X=2*(oe+1)-1,re=L[X],pe=X+1,se=L[pe];if(0>r(re,Q))pe<Se&&0>r(se,re)?(L[oe]=se,L[pe]=Q,oe=pe):(L[oe]=re,L[X]=Q,oe=X);else if(pe<Se&&0>r(se,Q))L[oe]=se,L[pe]=Q,oe=pe;else break e}}return j}function r(L,j){var Q=L.sortIndex-j.sortIndex;return Q!==0?Q:L.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var j=n(u);j!==null;){if(j.callback===null)i(u);else if(j.startTime<=L)i(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function x(L){if(y=!1,_(L),!v)if(n(l)!==null)v=!0,Y(A);else{var j=n(u);j!==null&&W(x,j.startTime-L)}}function A(L,j){v=!1,y&&(y=!1,d(b),b=-1),p=!0;var Q=h;try{for(_(j),f=n(l);f!==null&&(!(f.expirationTime>j)||L&&!P());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,h=f.priorityLevel;var Se=oe(f.expirationTime<=j);j=t.unstable_now(),typeof Se=="function"?f.callback=Se:f===n(l)&&i(l),_(j)}else i(l);f=n(l)}if(f!==null)var Ke=!0;else{var X=n(u);X!==null&&W(x,X.startTime-j),Ke=!1}return Ke}finally{f=null,h=Q,p=!1}}var C=!1,w=null,b=-1,T=5,S=-1;function P(){return!(t.unstable_now()-S<T)}function H(){if(w!==null){var L=t.unstable_now();S=L;var j=!0;try{j=w(!0,L)}finally{j?k():(C=!1,w=null)}}else C=!1}var k;if(typeof g=="function")k=function(){g(H)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,Z=K.port2;K.port1.onmessage=H,k=function(){Z.postMessage(null)}}else k=function(){m(H,0)};function Y(L){w=L,C||(C=!0,k())}function W(L,j){b=m(function(){L(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Y(A))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var Q=h;h=j;try{return L()}finally{h=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,j){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Q=h;h=L;try{return j()}finally{h=Q}},t.unstable_scheduleCallback=function(L,j,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,L){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Q+Se,L={id:c++,callback:j,priorityLevel:L,startTime:Q,expirationTime:Se,sortIndex:-1},Q>oe?(L.sortIndex=Q,e(u,L),n(l)===null&&L===n(u)&&(y?(d(b),b=-1):y=!0,W(x,Q-oe))):(L.sortIndex=Se,e(l,L),v||p||(v=!0,Y(A))),L},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(L){var j=h;return function(){var Q=h;h=j;try{return L.apply(this,arguments)}finally{h=Q}}}})(g_);m_.exports=g_;var rE=m_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sE=de,Tn=rE;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v_=new Set,ua={};function os(t,e){eo(t,e),eo(t+"Capture",e)}function eo(t,e){for(ua[t]=e,t=0;t<e.length;t++)v_.add(e[t])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hf=Object.prototype.hasOwnProperty,oE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fm={},Om={};function aE(t){return Hf.call(Om,t)?!0:Hf.call(Fm,t)?!1:oE.test(t)?Om[t]=!0:(Fm[t]=!0,!1)}function lE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uE(t,e,n,i){if(e===null||typeof e>"u"||lE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xh=/[\-:]([a-z])/g;function Yh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xh,Yh);Ht[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xh,Yh);Ht[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xh,Yh);Ht[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function qh(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uE(e,n,r,i)&&(n=null),i||r===null?aE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Hi=sE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tl=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),Kh=Symbol.for("react.strict_mode"),Gf=Symbol.for("react.profiler"),__=Symbol.for("react.provider"),y_=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),jf=Symbol.for("react.suspense_list"),Zh=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),x_=Symbol.for("react.offscreen"),Bm=Symbol.iterator;function Ao(t){return t===null||typeof t!="object"?null:(t=Bm&&t[Bm]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Tc;function Ho(t){if(Tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tc=e&&e[1]||""}return`
`+Tc+t}var Ac=!1;function wc(t,e){if(!t||Ac)return"";Ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ho(t):""}function cE(t){switch(t.tag){case 5:return Ho(t.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 2:case 15:return t=wc(t.type,!1),t;case 11:return t=wc(t.type.render,!1),t;case 1:return t=wc(t.type,!0),t;default:return""}}function Xf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bs:return"Fragment";case Rs:return"Portal";case Gf:return"Profiler";case Kh:return"StrictMode";case Wf:return"Suspense";case jf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y_:return(t.displayName||"Context")+".Consumer";case __:return(t._context.displayName||"Context")+".Provider";case $h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zh:return e=t.displayName||null,e!==null?e:Xf(t.type)||"Memo";case Zi:e=t._payload,t=t._init;try{return Xf(t(e))}catch{}}return null}function fE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xf(e);case 8:return e===Kh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function S_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dE(t){var e=S_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nl(t){t._valueTracker||(t._valueTracker=dE(t))}function M_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=S_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function mu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yf(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function km(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function E_(t,e){e=e.checked,e!=null&&qh(t,"checked",e,!1)}function qf(t,e){E_(t,e);var n=gr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kf(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kf(t,e,n){(e!=="number"||mu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Go=Array.isArray;function Xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $f(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Go(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function T_(t,e){var n=gr(e.value),i=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Hm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function A_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?A_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var il,w_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(il=il||document.createElement("div"),il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hE=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(t){hE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ko[e]=Ko[t]})});function C_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ko.hasOwnProperty(t)&&Ko[t]?(""+e).trim():e+"px"}function R_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=C_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var pE=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qf(t,e){if(e){if(pE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Jf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ed=null;function Qh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var td=null,Ys=null,qs=null;function Gm(t){if(t=Ha(t)){if(typeof td!="function")throw Error(te(280));var e=t.stateNode;e&&(e=nc(e),td(t.stateNode,t.type,e))}}function b_(t){Ys?qs?qs.push(t):qs=[t]:Ys=t}function P_(){if(Ys){var t=Ys,e=qs;if(qs=Ys=null,Gm(t),e)for(t=0;t<e.length;t++)Gm(e[t])}}function D_(t,e){return t(e)}function L_(){}var Cc=!1;function I_(t,e,n){if(Cc)return t(e,n);Cc=!0;try{return D_(t,e,n)}finally{Cc=!1,(Ys!==null||qs!==null)&&(L_(),P_())}}function fa(t,e){var n=t.stateNode;if(n===null)return null;var i=nc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var nd=!1;if(Ni)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){nd=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{nd=!1}function mE(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var $o=!1,gu=null,vu=!1,id=null,gE={onError:function(t){$o=!0,gu=t}};function vE(t,e,n,i,r,s,o,a,l){$o=!1,gu=null,mE.apply(gE,arguments)}function _E(t,e,n,i,r,s,o,a,l){if(vE.apply(this,arguments),$o){if($o){var u=gu;$o=!1,gu=null}else throw Error(te(198));vu||(vu=!0,id=u)}}function as(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function N_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wm(t){if(as(t)!==t)throw Error(te(188))}function yE(t){var e=t.alternate;if(!e){if(e=as(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wm(r),t;if(s===i)return Wm(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function U_(t){return t=yE(t),t!==null?F_(t):null}function F_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=F_(t);if(e!==null)return e;t=t.sibling}return null}var O_=Tn.unstable_scheduleCallback,jm=Tn.unstable_cancelCallback,xE=Tn.unstable_shouldYield,SE=Tn.unstable_requestPaint,wt=Tn.unstable_now,ME=Tn.unstable_getCurrentPriorityLevel,Jh=Tn.unstable_ImmediatePriority,B_=Tn.unstable_UserBlockingPriority,_u=Tn.unstable_NormalPriority,EE=Tn.unstable_LowPriority,k_=Tn.unstable_IdlePriority,Qu=null,hi=null;function TE(t){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(Qu,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:CE,AE=Math.log,wE=Math.LN2;function CE(t){return t>>>=0,t===0?32:31-(AE(t)/wE|0)|0}var rl=64,sl=4194304;function Wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Wo(a):(s&=o,s!==0&&(i=Wo(s)))}else o=n&~r,o!==0?i=Wo(o):s!==0&&(i=Wo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function RE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ei(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=RE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function rd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function V_(){var t=rl;return rl<<=1,!(rl&4194240)&&(rl=64),t}function Rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function PE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ep(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function z_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var H_,tp,G_,W_,j_,sd=!1,ol=[],sr=null,or=null,ar=null,da=new Map,ha=new Map,Ji=[],DE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xm(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(e.pointerId)}}function Co(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ha(e),e!==null&&tp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function LE(t,e,n,i,r){switch(e){case"focusin":return sr=Co(sr,t,e,n,i,r),!0;case"dragenter":return or=Co(or,t,e,n,i,r),!0;case"mouseover":return ar=Co(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return da.set(s,Co(da.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ha.set(s,Co(ha.get(s)||null,t,e,n,i,r)),!0}return!1}function X_(t){var e=Hr(t.target);if(e!==null){var n=as(e);if(n!==null){if(e=n.tag,e===13){if(e=N_(n),e!==null){t.blockedOn=e,j_(t.priority,function(){G_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ed=i,n.target.dispatchEvent(i),ed=null}else return e=Ha(n),e!==null&&tp(e),t.blockedOn=n,!1;e.shift()}return!0}function Ym(t,e,n){ql(t)&&n.delete(e)}function IE(){sd=!1,sr!==null&&ql(sr)&&(sr=null),or!==null&&ql(or)&&(or=null),ar!==null&&ql(ar)&&(ar=null),da.forEach(Ym),ha.forEach(Ym)}function Ro(t,e){t.blockedOn===e&&(t.blockedOn=null,sd||(sd=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,IE)))}function pa(t){function e(r){return Ro(r,t)}if(0<ol.length){Ro(ol[0],t);for(var n=1;n<ol.length;n++){var i=ol[n];i.blockedOn===t&&(i.blockedOn=null)}}for(sr!==null&&Ro(sr,t),or!==null&&Ro(or,t),ar!==null&&Ro(ar,t),da.forEach(e),ha.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)X_(n),n.blockedOn===null&&Ji.shift()}var Ks=Hi.ReactCurrentBatchConfig,xu=!0;function NE(t,e,n,i){var r=it,s=Ks.transition;Ks.transition=null;try{it=1,np(t,e,n,i)}finally{it=r,Ks.transition=s}}function UE(t,e,n,i){var r=it,s=Ks.transition;Ks.transition=null;try{it=4,np(t,e,n,i)}finally{it=r,Ks.transition=s}}function np(t,e,n,i){if(xu){var r=od(t,e,n,i);if(r===null)Bc(t,e,i,Su,n),Xm(t,i);else if(LE(r,t,e,n,i))i.stopPropagation();else if(Xm(t,i),e&4&&-1<DE.indexOf(t)){for(;r!==null;){var s=Ha(r);if(s!==null&&H_(s),s=od(t,e,n,i),s===null&&Bc(t,e,i,Su,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Bc(t,e,i,null,n)}}var Su=null;function od(t,e,n,i){if(Su=null,t=Qh(i),t=Hr(t),t!==null)if(e=as(t),e===null)t=null;else if(n=e.tag,n===13){if(t=N_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Su=t,null}function Y_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ME()){case Jh:return 1;case B_:return 4;case _u:case EE:return 16;case k_:return 536870912;default:return 16}default:return 16}}var nr=null,ip=null,Kl=null;function q_(){if(Kl)return Kl;var t,e=ip,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Kl=r.slice(t,1<i?1-i:void 0)}function $l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function qm(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?al:qm,this.isPropagationStopped=qm,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rp=wn(go),za=_t({},go,{view:0,detail:0}),FE=wn(za),bc,Pc,bo,Ju=_t({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bo&&(bo&&t.type==="mousemove"?(bc=t.screenX-bo.screenX,Pc=t.screenY-bo.screenY):Pc=bc=0,bo=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:Pc}}),Km=wn(Ju),OE=_t({},Ju,{dataTransfer:0}),BE=wn(OE),kE=_t({},za,{relatedTarget:0}),Dc=wn(kE),VE=_t({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),zE=wn(VE),HE=_t({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GE=wn(HE),WE=_t({},go,{data:0}),$m=wn(WE),jE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YE[t])?!!e[t]:!1}function sp(){return qE}var KE=_t({},za,{key:function(t){if(t.key){var e=jE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?XE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sp,charCode:function(t){return t.type==="keypress"?$l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$E=wn(KE),ZE=_t({},Ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zm=wn(ZE),QE=_t({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sp}),JE=wn(QE),eT=_t({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),tT=wn(eT),nT=_t({},Ju,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iT=wn(nT),rT=[9,13,27,32],op=Ni&&"CompositionEvent"in window,Zo=null;Ni&&"documentMode"in document&&(Zo=document.documentMode);var sT=Ni&&"TextEvent"in window&&!Zo,K_=Ni&&(!op||Zo&&8<Zo&&11>=Zo),Qm=" ",Jm=!1;function $_(t,e){switch(t){case"keyup":return rT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function oT(t,e){switch(t){case"compositionend":return Z_(e);case"keypress":return e.which!==32?null:(Jm=!0,Qm);case"textInput":return t=e.data,t===Qm&&Jm?null:t;default:return null}}function aT(t,e){if(Ps)return t==="compositionend"||!op&&$_(t,e)?(t=q_(),Kl=ip=nr=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return K_&&e.locale!=="ko"?null:e.data;default:return null}}var lT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lT[t.type]:e==="textarea"}function Q_(t,e,n,i){b_(i),e=Mu(e,"onChange"),0<e.length&&(n=new rp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Qo=null,ma=null;function uT(t){uy(t,0)}function ec(t){var e=Is(t);if(M_(e))return t}function cT(t,e){if(t==="change")return e}var J_=!1;if(Ni){var Lc;if(Ni){var Ic="oninput"in document;if(!Ic){var tg=document.createElement("div");tg.setAttribute("oninput","return;"),Ic=typeof tg.oninput=="function"}Lc=Ic}else Lc=!1;J_=Lc&&(!document.documentMode||9<document.documentMode)}function ng(){Qo&&(Qo.detachEvent("onpropertychange",ey),ma=Qo=null)}function ey(t){if(t.propertyName==="value"&&ec(ma)){var e=[];Q_(e,ma,t,Qh(t)),I_(uT,e)}}function fT(t,e,n){t==="focusin"?(ng(),Qo=e,ma=n,Qo.attachEvent("onpropertychange",ey)):t==="focusout"&&ng()}function dT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ec(ma)}function hT(t,e){if(t==="click")return ec(e)}function pT(t,e){if(t==="input"||t==="change")return ec(e)}function mT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:mT;function ga(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Hf.call(e,r)||!ri(t[r],e[r]))return!1}return!0}function ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rg(t,e){var n=ig(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ig(n)}}function ty(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ty(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ny(){for(var t=window,e=mu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=mu(t.document)}return e}function ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gT(t){var e=ny(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ty(n.ownerDocument.documentElement,n)){if(i!==null&&ap(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rg(n,s);var o=rg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vT=Ni&&"documentMode"in document&&11>=document.documentMode,Ds=null,ad=null,Jo=null,ld=!1;function sg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ld||Ds==null||Ds!==mu(i)||(i=Ds,"selectionStart"in i&&ap(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Jo&&ga(Jo,i)||(Jo=i,i=Mu(ad,"onSelect"),0<i.length&&(e=new rp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ds)))}function ll(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},Nc={},iy={};Ni&&(iy=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function tc(t){if(Nc[t])return Nc[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in iy)return Nc[t]=e[n];return t}var ry=tc("animationend"),sy=tc("animationiteration"),oy=tc("animationstart"),ay=tc("transitionend"),ly=new Map,og="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){ly.set(t,e),os(e,[t])}for(var Uc=0;Uc<og.length;Uc++){var Fc=og[Uc],_T=Fc.toLowerCase(),yT=Fc[0].toUpperCase()+Fc.slice(1);Mr(_T,"on"+yT)}Mr(ry,"onAnimationEnd");Mr(sy,"onAnimationIteration");Mr(oy,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(ay,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xT=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function ag(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,_E(i,e,void 0,t),t.currentTarget=null}function uy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ag(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ag(r,a,u),s=l}}}if(vu)throw t=id,vu=!1,id=null,t}function ut(t,e){var n=e[hd];n===void 0&&(n=e[hd]=new Set);var i=t+"__bubble";n.has(i)||(cy(e,t,2,!1),n.add(i))}function Oc(t,e,n){var i=0;e&&(i|=4),cy(n,t,i,e)}var ul="_reactListening"+Math.random().toString(36).slice(2);function va(t){if(!t[ul]){t[ul]=!0,v_.forEach(function(n){n!=="selectionchange"&&(xT.has(n)||Oc(n,!1,t),Oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ul]||(e[ul]=!0,Oc("selectionchange",!1,e))}}function cy(t,e,n,i){switch(Y_(e)){case 1:var r=NE;break;case 4:r=UE;break;default:r=np}n=r.bind(null,e,n,t),r=void 0,!nd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Bc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}I_(function(){var u=s,c=Qh(n),f=[];e:{var h=ly.get(t);if(h!==void 0){var p=rp,v=t;switch(t){case"keypress":if($l(n)===0)break e;case"keydown":case"keyup":p=$E;break;case"focusin":v="focus",p=Dc;break;case"focusout":v="blur",p=Dc;break;case"beforeblur":case"afterblur":p=Dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=BE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=JE;break;case ry:case sy:case oy:p=zE;break;case ay:p=tT;break;case"scroll":p=FE;break;case"wheel":p=iT;break;case"copy":case"cut":case"paste":p=GE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zm}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var g=u,_;g!==null;){_=g;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,d!==null&&(x=fa(g,d),x!=null&&y.push(_a(g,x,_)))),m)break;g=g.return}0<y.length&&(h=new p(h,v,null,n,c),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==ed&&(v=n.relatedTarget||n.fromElement)&&(Hr(v)||v[Ui]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Hr(v):null,v!==null&&(m=as(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(y=Km,x="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Zm,x="onPointerLeave",d="onPointerEnter",g="pointer"),m=p==null?h:Is(p),_=v==null?h:Is(v),h=new y(x,g+"leave",p,n,c),h.target=m,h.relatedTarget=_,x=null,Hr(c)===u&&(y=new y(d,g+"enter",v,n,c),y.target=_,y.relatedTarget=m,x=y),m=x,p&&v)t:{for(y=p,d=v,g=0,_=y;_;_=us(_))g++;for(_=0,x=d;x;x=us(x))_++;for(;0<g-_;)y=us(y),g--;for(;0<_-g;)d=us(d),_--;for(;g--;){if(y===d||d!==null&&y===d.alternate)break t;y=us(y),d=us(d)}y=null}else y=null;p!==null&&lg(f,h,p,y,!1),v!==null&&m!==null&&lg(f,m,v,y,!0)}}e:{if(h=u?Is(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=cT;else if(eg(h))if(J_)A=pT;else{A=dT;var C=fT}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=hT);if(A&&(A=A(t,u))){Q_(f,A,n,c);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Kf(h,"number",h.value)}switch(C=u?Is(u):window,t){case"focusin":(eg(C)||C.contentEditable==="true")&&(Ds=C,ad=u,Jo=null);break;case"focusout":Jo=ad=Ds=null;break;case"mousedown":ld=!0;break;case"contextmenu":case"mouseup":case"dragend":ld=!1,sg(f,n,c);break;case"selectionchange":if(vT)break;case"keydown":case"keyup":sg(f,n,c)}var w;if(op)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ps?$_(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(K_&&n.locale!=="ko"&&(Ps||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ps&&(w=q_()):(nr=c,ip="value"in nr?nr.value:nr.textContent,Ps=!0)),C=Mu(u,b),0<C.length&&(b=new $m(b,t,null,n,c),f.push({event:b,listeners:C}),w?b.data=w:(w=Z_(n),w!==null&&(b.data=w)))),(w=sT?oT(t,n):aT(t,n))&&(u=Mu(u,"onBeforeInput"),0<u.length&&(c=new $m("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=w))}uy(f,e)})}function _a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Mu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fa(t,n),s!=null&&i.unshift(_a(t,s,r)),s=fa(t,e),s!=null&&i.push(_a(t,s,r))),t=t.return}return i}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=fa(n,s),l!=null&&o.unshift(_a(n,l,a))):r||(l=fa(n,s),l!=null&&o.push(_a(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ST=/\r\n?/g,MT=/\u0000|\uFFFD/g;function ug(t){return(typeof t=="string"?t:""+t).replace(ST,`
`).replace(MT,"")}function cl(t,e,n){if(e=ug(e),ug(t)!==e&&n)throw Error(te(425))}function Eu(){}var ud=null,cd=null;function fd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dd=typeof setTimeout=="function"?setTimeout:void 0,ET=typeof clearTimeout=="function"?clearTimeout:void 0,cg=typeof Promise=="function"?Promise:void 0,TT=typeof queueMicrotask=="function"?queueMicrotask:typeof cg<"u"?function(t){return cg.resolve(null).then(t).catch(AT)}:dd;function AT(t){setTimeout(function(){throw t})}function kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);pa(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vo=Math.random().toString(36).slice(2),ui="__reactFiber$"+vo,ya="__reactProps$"+vo,Ui="__reactContainer$"+vo,hd="__reactEvents$"+vo,wT="__reactListeners$"+vo,CT="__reactHandles$"+vo;function Hr(t){var e=t[ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ui]||n[ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fg(t);t!==null;){if(n=t[ui])return n;t=fg(t)}return e}t=n,n=t.parentNode}return null}function Ha(t){return t=t[ui]||t[Ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function nc(t){return t[ya]||null}var pd=[],Ns=-1;function Er(t){return{current:t}}function ct(t){0>Ns||(t.current=pd[Ns],pd[Ns]=null,Ns--)}function at(t,e){Ns++,pd[Ns]=t.current,t.current=e}var vr={},Zt=Er(vr),pn=Er(!1),Jr=vr;function to(t,e){var n=t.type.contextTypes;if(!n)return vr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function Tu(){ct(pn),ct(Zt)}function dg(t,e,n){if(Zt.current!==vr)throw Error(te(168));at(Zt,e),at(pn,n)}function fy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,fE(t)||"Unknown",r));return _t({},n,i)}function Au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Jr=Zt.current,at(Zt,t),at(pn,pn.current),!0}function hg(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=fy(t,e,Jr),i.__reactInternalMemoizedMergedChildContext=t,ct(pn),ct(Zt),at(Zt,t)):ct(pn),at(pn,n)}var wi=null,ic=!1,Vc=!1;function dy(t){wi===null?wi=[t]:wi.push(t)}function RT(t){ic=!0,dy(t)}function Tr(){if(!Vc&&wi!==null){Vc=!0;var t=0,e=it;try{var n=wi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}wi=null,ic=!1}catch(r){throw wi!==null&&(wi=wi.slice(t+1)),O_(Jh,Tr),r}finally{it=e,Vc=!1}}return null}var Us=[],Fs=0,wu=null,Cu=0,Nn=[],Un=0,es=null,Ri=1,bi="";function Ur(t,e){Us[Fs++]=Cu,Us[Fs++]=wu,wu=t,Cu=e}function hy(t,e,n){Nn[Un++]=Ri,Nn[Un++]=bi,Nn[Un++]=es,es=t;var i=Ri;t=bi;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ri=1<<32-ei(e)+r|n<<r|i,bi=s+t}else Ri=1<<s|n<<r|i,bi=t}function lp(t){t.return!==null&&(Ur(t,1),hy(t,1,0))}function up(t){for(;t===wu;)wu=Us[--Fs],Us[Fs]=null,Cu=Us[--Fs],Us[Fs]=null;for(;t===es;)es=Nn[--Un],Nn[Un]=null,bi=Nn[--Un],Nn[Un]=null,Ri=Nn[--Un],Nn[Un]=null}var Mn=null,Sn=null,dt=!1,Qn=null;function py(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:Ri,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,Sn=null,!0):!1;default:return!1}}function md(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gd(t){if(dt){var e=Sn;if(e){var n=e;if(!pg(t,e)){if(md(t))throw Error(te(418));e=lr(n.nextSibling);var i=Mn;e&&pg(t,e)?py(i,n):(t.flags=t.flags&-4097|2,dt=!1,Mn=t)}}else{if(md(t))throw Error(te(418));t.flags=t.flags&-4097|2,dt=!1,Mn=t}}}function mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function fl(t){if(t!==Mn)return!1;if(!dt)return mg(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fd(t.type,t.memoizedProps)),e&&(e=Sn)){if(md(t))throw my(),Error(te(418));for(;e;)py(t,e),e=lr(e.nextSibling)}if(mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=Mn?lr(t.stateNode.nextSibling):null;return!0}function my(){for(var t=Sn;t;)t=lr(t.nextSibling)}function no(){Sn=Mn=null,dt=!1}function cp(t){Qn===null?Qn=[t]:Qn.push(t)}var bT=Hi.ReactCurrentBatchConfig;function Po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function dl(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gg(t){var e=t._init;return e(t._payload)}function gy(t){function e(d,g){if(t){var _=d.deletions;_===null?(d.deletions=[g],d.flags|=16):_.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=dr(d,g),d.index=0,d.sibling=null,d}function s(d,g,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<g?(d.flags|=2,g):_):(d.flags|=2,g)):(d.flags|=1048576,g)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,g,_,x){return g===null||g.tag!==6?(g=Yc(_,d.mode,x),g.return=d,g):(g=r(g,_),g.return=d,g)}function l(d,g,_,x){var A=_.type;return A===bs?c(d,g,_.props.children,x,_.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Zi&&gg(A)===g.type)?(x=r(g,_.props),x.ref=Po(d,g,_),x.return=d,x):(x=iu(_.type,_.key,_.props,null,d.mode,x),x.ref=Po(d,g,_),x.return=d,x)}function u(d,g,_,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=qc(_,d.mode,x),g.return=d,g):(g=r(g,_.children||[]),g.return=d,g)}function c(d,g,_,x,A){return g===null||g.tag!==7?(g=$r(_,d.mode,x,A),g.return=d,g):(g=r(g,_),g.return=d,g)}function f(d,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Yc(""+g,d.mode,_),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case tl:return _=iu(g.type,g.key,g.props,null,d.mode,_),_.ref=Po(d,null,g),_.return=d,_;case Rs:return g=qc(g,d.mode,_),g.return=d,g;case Zi:var x=g._init;return f(d,x(g._payload),_)}if(Go(g)||Ao(g))return g=$r(g,d.mode,_,null),g.return=d,g;dl(d,g)}return null}function h(d,g,_,x){var A=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:a(d,g,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case tl:return _.key===A?l(d,g,_,x):null;case Rs:return _.key===A?u(d,g,_,x):null;case Zi:return A=_._init,h(d,g,A(_._payload),x)}if(Go(_)||Ao(_))return A!==null?null:c(d,g,_,x,null);dl(d,_)}return null}function p(d,g,_,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(_)||null,a(g,d,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case tl:return d=d.get(x.key===null?_:x.key)||null,l(g,d,x,A);case Rs:return d=d.get(x.key===null?_:x.key)||null,u(g,d,x,A);case Zi:var C=x._init;return p(d,g,_,C(x._payload),A)}if(Go(x)||Ao(x))return d=d.get(_)||null,c(g,d,x,A,null);dl(g,x)}return null}function v(d,g,_,x){for(var A=null,C=null,w=g,b=g=0,T=null;w!==null&&b<_.length;b++){w.index>b?(T=w,w=null):T=w.sibling;var S=h(d,w,_[b],x);if(S===null){w===null&&(w=T);break}t&&w&&S.alternate===null&&e(d,w),g=s(S,g,b),C===null?A=S:C.sibling=S,C=S,w=T}if(b===_.length)return n(d,w),dt&&Ur(d,b),A;if(w===null){for(;b<_.length;b++)w=f(d,_[b],x),w!==null&&(g=s(w,g,b),C===null?A=w:C.sibling=w,C=w);return dt&&Ur(d,b),A}for(w=i(d,w);b<_.length;b++)T=p(w,d,b,_[b],x),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?b:T.key),g=s(T,g,b),C===null?A=T:C.sibling=T,C=T);return t&&w.forEach(function(P){return e(d,P)}),dt&&Ur(d,b),A}function y(d,g,_,x){var A=Ao(_);if(typeof A!="function")throw Error(te(150));if(_=A.call(_),_==null)throw Error(te(151));for(var C=A=null,w=g,b=g=0,T=null,S=_.next();w!==null&&!S.done;b++,S=_.next()){w.index>b?(T=w,w=null):T=w.sibling;var P=h(d,w,S.value,x);if(P===null){w===null&&(w=T);break}t&&w&&P.alternate===null&&e(d,w),g=s(P,g,b),C===null?A=P:C.sibling=P,C=P,w=T}if(S.done)return n(d,w),dt&&Ur(d,b),A;if(w===null){for(;!S.done;b++,S=_.next())S=f(d,S.value,x),S!==null&&(g=s(S,g,b),C===null?A=S:C.sibling=S,C=S);return dt&&Ur(d,b),A}for(w=i(d,w);!S.done;b++,S=_.next())S=p(w,d,b,S.value,x),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?b:S.key),g=s(S,g,b),C===null?A=S:C.sibling=S,C=S);return t&&w.forEach(function(H){return e(d,H)}),dt&&Ur(d,b),A}function m(d,g,_,x){if(typeof _=="object"&&_!==null&&_.type===bs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case tl:e:{for(var A=_.key,C=g;C!==null;){if(C.key===A){if(A=_.type,A===bs){if(C.tag===7){n(d,C.sibling),g=r(C,_.props.children),g.return=d,d=g;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Zi&&gg(A)===C.type){n(d,C.sibling),g=r(C,_.props),g.ref=Po(d,C,_),g.return=d,d=g;break e}n(d,C);break}else e(d,C);C=C.sibling}_.type===bs?(g=$r(_.props.children,d.mode,x,_.key),g.return=d,d=g):(x=iu(_.type,_.key,_.props,null,d.mode,x),x.ref=Po(d,g,_),x.return=d,d=x)}return o(d);case Rs:e:{for(C=_.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(d,g.sibling),g=r(g,_.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=qc(_,d.mode,x),g.return=d,d=g}return o(d);case Zi:return C=_._init,m(d,g,C(_._payload),x)}if(Go(_))return v(d,g,_,x);if(Ao(_))return y(d,g,_,x);dl(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,_),g.return=d,d=g):(n(d,g),g=Yc(_,d.mode,x),g.return=d,d=g),o(d)):n(d,g)}return m}var io=gy(!0),vy=gy(!1),Ru=Er(null),bu=null,Os=null,fp=null;function dp(){fp=Os=bu=null}function hp(t){var e=Ru.current;ct(Ru),t._currentValue=e}function vd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){bu=t,fp=Os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(fp!==t)if(t={context:t,memoizedValue:e,next:null},Os===null){if(bu===null)throw Error(te(308));Os=t,bu.dependencies={lanes:0,firstContext:t}}else Os=Os.next=t;return e}var Gr=null;function pp(t){Gr===null?Gr=[t]:Gr.push(t)}function _y(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,pp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Fi(t,i)}function Fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qi=!1;function mp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Fi(t,n)}return r=i.interleaved,r===null?(e.next=e,pp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Fi(t,n)}function Zl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ep(t,n)}}function vg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pu(t,e,n,i){var r=t.updateQueue;Qi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(p,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(p,f,h):v,h==null)break e;f=_t({},f,h);break e;case 2:Qi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ns|=o,t.lanes=o,t.memoizedState=f}}function _g(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Ga={},pi=Er(Ga),xa=Er(Ga),Sa=Er(Ga);function Wr(t){if(t===Ga)throw Error(te(174));return t}function gp(t,e){switch(at(Sa,e),at(xa,t),at(pi,Ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zf(e,t)}ct(pi),at(pi,e)}function ro(){ct(pi),ct(xa),ct(Sa)}function xy(t){Wr(Sa.current);var e=Wr(pi.current),n=Zf(e,t.type);e!==n&&(at(xa,t),at(pi,n))}function vp(t){xa.current===t&&(ct(pi),ct(xa))}var pt=Er(0);function Du(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zc=[];function _p(){for(var t=0;t<zc.length;t++)zc[t]._workInProgressVersionPrimary=null;zc.length=0}var Ql=Hi.ReactCurrentDispatcher,Hc=Hi.ReactCurrentBatchConfig,ts=0,gt=null,Dt=null,Ft=null,Lu=!1,ea=!1,Ma=0,PT=0;function Wt(){throw Error(te(321))}function yp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function xp(t,e,n,i,r,s){if(ts=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=t===null||t.memoizedState===null?NT:UT,t=n(i,r),ea){s=0;do{if(ea=!1,Ma=0,25<=s)throw Error(te(301));s+=1,Ft=Dt=null,e.updateQueue=null,Ql.current=FT,t=n(i,r)}while(ea)}if(Ql.current=Iu,e=Dt!==null&&Dt.next!==null,ts=0,Ft=Dt=gt=null,Lu=!1,e)throw Error(te(300));return t}function Sp(){var t=Ma!==0;return Ma=0,t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?gt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Hn(){if(Dt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Ft===null?gt.memoizedState:Ft.next;if(e!==null)Ft=e,Dt=t;else{if(t===null)throw Error(te(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Ft===null?gt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Ea(t,e){return typeof e=="function"?e(t):e}function Gc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ts&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,gt.lanes|=c,ns|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ri(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,ns|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ri(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Sy(){}function My(t,e){var n=gt,i=Hn(),r=e(),s=!ri(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,Mp(Ay.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,Ta(9,Ty.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(te(349));ts&30||Ey(n,e,r)}return r}function Ey(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ty(t,e,n,i){e.value=n,e.getSnapshot=i,wy(e)&&Cy(t)}function Ay(t,e,n){return n(function(){wy(e)&&Cy(t)})}function wy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function Cy(t){var e=Fi(t,1);e!==null&&ti(e,t,1,-1)}function yg(t){var e=ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e.queue=t,t=t.dispatch=IT.bind(null,gt,t),[e.memoizedState,t]}function Ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ry(){return Hn().memoizedState}function Jl(t,e,n,i){var r=ai();gt.flags|=t,r.memoizedState=Ta(1|e,n,void 0,i===void 0?null:i)}function rc(t,e,n,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var o=Dt.memoizedState;if(s=o.destroy,i!==null&&yp(i,o.deps)){r.memoizedState=Ta(e,n,s,i);return}}gt.flags|=t,r.memoizedState=Ta(1|e,n,s,i)}function xg(t,e){return Jl(8390656,8,t,e)}function Mp(t,e){return rc(2048,8,t,e)}function by(t,e){return rc(4,2,t,e)}function Py(t,e){return rc(4,4,t,e)}function Dy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ly(t,e,n){return n=n!=null?n.concat([t]):null,rc(4,4,Dy.bind(null,e,t),n)}function Ep(){}function Iy(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ny(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Uy(t,e,n){return ts&21?(ri(n,e)||(n=V_(),gt.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function DT(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Hc.transition;Hc.transition={};try{t(!1),e()}finally{it=n,Hc.transition=i}}function Fy(){return Hn().memoizedState}function LT(t,e,n){var i=fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Oy(t))By(e,n);else if(n=_y(t,e,n,i),n!==null){var r=rn();ti(n,t,i,r),ky(n,e,i)}}function IT(t,e,n){var i=fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Oy(t))By(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ri(a,o)){var l=e.interleaved;l===null?(r.next=r,pp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=_y(t,e,r,i),n!==null&&(r=rn(),ti(n,t,i,r),ky(n,e,i))}}function Oy(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function By(t,e){ea=Lu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ky(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ep(t,n)}}var Iu={readContext:zn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},NT={readContext:zn,useCallback:function(t,e){return ai().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:xg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4194308,4,Dy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jl(4,2,t,e)},useMemo:function(t,e){var n=ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ai();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=LT.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=ai();return t={current:t},e.memoizedState=t},useState:yg,useDebugValue:Ep,useDeferredValue:function(t){return ai().memoizedState=t},useTransition:function(){var t=yg(!1),e=t[0];return t=DT.bind(null,t[1]),ai().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=ai();if(dt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Ot===null)throw Error(te(349));ts&30||Ey(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,xg(Ay.bind(null,i,s,t),[t]),i.flags|=2048,Ta(9,Ty.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ai(),e=Ot.identifierPrefix;if(dt){var n=bi,i=Ri;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=PT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},UT={readContext:zn,useCallback:Iy,useContext:zn,useEffect:Mp,useImperativeHandle:Ly,useInsertionEffect:by,useLayoutEffect:Py,useMemo:Ny,useReducer:Gc,useRef:Ry,useState:function(){return Gc(Ea)},useDebugValue:Ep,useDeferredValue:function(t){var e=Hn();return Uy(e,Dt.memoizedState,t)},useTransition:function(){var t=Gc(Ea)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:Sy,useSyncExternalStore:My,useId:Fy,unstable_isNewReconciler:!1},FT={readContext:zn,useCallback:Iy,useContext:zn,useEffect:Mp,useImperativeHandle:Ly,useInsertionEffect:by,useLayoutEffect:Py,useMemo:Ny,useReducer:Wc,useRef:Ry,useState:function(){return Wc(Ea)},useDebugValue:Ep,useDeferredValue:function(t){var e=Hn();return Dt===null?e.memoizedState=t:Uy(e,Dt.memoizedState,t)},useTransition:function(){var t=Wc(Ea)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:Sy,useSyncExternalStore:My,useId:Fy,unstable_isNewReconciler:!1};function $n(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _d(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sc={isMounted:function(t){return(t=t._reactInternals)?as(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=fr(t),s=Li(i,r);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(ti(e,t,r,i),Zl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=fr(t),s=Li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(ti(e,t,r,i),Zl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=fr(t),r=Li(n,i);r.tag=2,e!=null&&(r.callback=e),e=ur(t,r,i),e!==null&&(ti(e,t,i,n),Zl(e,t,i))}};function Sg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(n,i)||!ga(r,s):!0}function Vy(t,e,n){var i=!1,r=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=mn(e)?Jr:Zt.current,i=e.contextTypes,s=(i=i!=null)?to(t,r):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&sc.enqueueReplaceState(e,e.state,null)}function yd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},mp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=mn(e)?Jr:Zt.current,r.context=to(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_d(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&sc.enqueueReplaceState(r,r.state,null),Pu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function so(t,e){try{var n="",i=e;do n+=cE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OT=typeof WeakMap=="function"?WeakMap:Map;function zy(t,e,n){n=Li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Uu||(Uu=!0,Pd=i),xd(t,e)},n}function Hy(t,e,n){n=Li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xd(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Eg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new OT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ZT.bind(null,t,e,n),e.then(t,t))}function Tg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ag(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Li(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var BT=Hi.ReactCurrentOwner,dn=!1;function tn(t,e,n,i){e.child=t===null?vy(e,null,n,i):io(e,t.child,n,i)}function wg(t,e,n,i,r){n=n.render;var s=e.ref;return $s(e,r),i=xp(t,e,n,i,s,r),n=Sp(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(dt&&n&&lp(e),e.flags|=1,tn(t,e,i,r),e.child)}function Cg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Dp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gy(t,e,s,i,r)):(t=iu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(o,i)&&t.ref===e.ref)return Oi(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Gy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ga(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Oi(t,e,r)}return Sd(t,e,n,i,r)}function Wy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(ks,xn),xn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(ks,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(ks,xn),xn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(ks,xn),xn|=i;return tn(t,e,r,n),e.child}function jy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sd(t,e,n,i,r){var s=mn(n)?Jr:Zt.current;return s=to(e,s),$s(e,r),n=xp(t,e,n,i,s,r),i=Sp(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(dt&&i&&lp(e),e.flags|=1,tn(t,e,n,r),e.child)}function Rg(t,e,n,i,r){if(mn(n)){var s=!0;Au(e)}else s=!1;if($s(e,r),e.stateNode===null)eu(t,e),Vy(e,n,i),yd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=zn(u):(u=mn(n)?Jr:Zt.current,u=to(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Mg(e,o,i,u),Qi=!1;var h=e.memoizedState;o.state=h,Pu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||pn.current||Qi?(typeof c=="function"&&(_d(e,n,c,i),l=e.memoizedState),(a=Qi||Sg(e,n,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,yy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:$n(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=mn(n)?Jr:Zt.current,l=to(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Mg(e,o,i,l),Qi=!1,h=e.memoizedState,o.state=h,Pu(e,i,o,r);var v=e.memoizedState;a!==f||h!==v||pn.current||Qi?(typeof p=="function"&&(_d(e,n,p,i),v=e.memoizedState),(u=Qi||Sg(e,n,u,i,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Md(t,e,n,i,s,r)}function Md(t,e,n,i,r,s){jy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&hg(e,n,!1),Oi(t,e,s);i=e.stateNode,BT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=io(e,t.child,null,s),e.child=io(e,null,a,s)):tn(t,e,a,s),e.memoizedState=i.state,r&&hg(e,n,!0),e.child}function Xy(t){var e=t.stateNode;e.pendingContext?dg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dg(t,e.context,!1),gp(t,e.containerInfo)}function bg(t,e,n,i,r){return no(),cp(r),e.flags|=256,tn(t,e,n,i),e.child}var Ed={dehydrated:null,treeContext:null,retryLane:0};function Td(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yy(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(pt,r&1),t===null)return gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lc(o,i,0,null),t=$r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Td(n),e.memoizedState=Ed,t):Tp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return kT(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=dr(a,s):(s=$r(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ed,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Tp(t,e){return e=lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hl(t,e,n,i){return i!==null&&cp(i),io(e,t.child,null,n),t=Tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kT(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=jc(Error(te(422))),hl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=lc({mode:"visible",children:i.children},r,0,null),s=$r(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&io(e,t.child,null,o),e.child.memoizedState=Td(o),e.memoizedState=Ed,s);if(!(e.mode&1))return hl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=jc(s,i,void 0),hl(t,e,o,i)}if(a=(o&t.childLanes)!==0,dn||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Fi(t,r),ti(i,t,r,-1))}return Pp(),i=jc(Error(te(421))),hl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=QT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Sn=lr(r.nextSibling),Mn=e,dt=!0,Qn=null,t!==null&&(Nn[Un++]=Ri,Nn[Un++]=bi,Nn[Un++]=es,Ri=t.id,bi=t.overflow,es=e),e=Tp(e,i.children),e.flags|=4096,e)}function Pg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),vd(t.return,e,n)}function Xc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function qy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pg(t,n,e);else if(t.tag===19)Pg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Du(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Xc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Du(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Xc(e,!0,n,null,s);break;case"together":Xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Oi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VT(t,e,n){switch(e.tag){case 3:Xy(e),no();break;case 5:xy(e);break;case 1:mn(e.type)&&Au(e);break;case 4:gp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(Ru,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?Yy(t,e,n):(at(pt,pt.current&1),t=Oi(t,e,n),t!==null?t.sibling:null);at(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return qy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,Wy(t,e,n)}return Oi(t,e,n)}var Ky,Ad,$y,Zy;Ky=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ad=function(){};$y=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Wr(pi.current);var s=null;switch(n){case"input":r=Yf(t,r),i=Yf(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=$f(t,r),i=$f(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Eu)}Qf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ua.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Zy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Do(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function zT(t,e,n){var i=e.pendingProps;switch(up(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return mn(e.type)&&Tu(),jt(e),null;case 3:return i=e.stateNode,ro(),ct(pn),ct(Zt),_p(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(Id(Qn),Qn=null))),Ad(t,e),jt(e),null;case 5:vp(e);var r=Wr(Sa.current);if(n=e.type,t!==null&&e.stateNode!=null)$y(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return jt(e),null}if(t=Wr(pi.current),fl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[ya]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<jo.length;r++)ut(jo[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":km(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":zm(i,s),ut("invalid",i)}Qf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&cl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&cl(i.textContent,a,t),r=["children",""+a]):ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":nl(i),Vm(i,s,!0);break;case"textarea":nl(i),Hm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Eu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=A_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ui]=e,t[ya]=i,Ky(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jf(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<jo.length;r++)ut(jo[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":km(t,i),r=Yf(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ut("invalid",t);break;case"textarea":zm(t,i),r=$f(t,i),ut("invalid",t);break;default:r=i}Qf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?R_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&w_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ca(t,l):typeof l=="number"&&ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&qh(t,s,l,o))}switch(n){case"input":nl(t),Vm(t,i,!1);break;case"textarea":nl(t),Hm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+gr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Eu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)Zy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Wr(Sa.current),Wr(pi.current),fl(e)){if(i=e.stateNode,n=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:cl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&cl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return jt(e),null;case 13:if(ct(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&Sn!==null&&e.mode&1&&!(e.flags&128))my(),no(),e.flags|=98560,s=!1;else if(s=fl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ui]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Qn!==null&&(Id(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Lt===0&&(Lt=3):Pp())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return ro(),Ad(t,e),t===null&&va(e.stateNode.containerInfo),jt(e),null;case 10:return hp(e.type._context),jt(e),null;case 17:return mn(e.type)&&Tu(),jt(e),null;case 19:if(ct(pt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Do(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Du(t),o!==null){for(e.flags|=128,Do(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>oo&&(e.flags|=128,i=!0,Do(s,!1),e.lanes=4194304)}else{if(!i)if(t=Du(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Do(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return jt(e),null}else 2*wt()-s.renderingStartTime>oo&&n!==1073741824&&(e.flags|=128,i=!0,Do(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=pt.current,at(pt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return bp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function HT(t,e){switch(up(e),e.tag){case 1:return mn(e.type)&&Tu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ro(),ct(pn),ct(Zt),_p(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vp(e),null;case 13:if(ct(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(pt),null;case 4:return ro(),null;case 10:return hp(e.type._context),null;case 22:case 23:return bp(),null;case 24:return null;default:return null}}var pl=!1,Kt=!1,GT=typeof WeakSet=="function"?WeakSet:Set,me=null;function Bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function wd(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var Dg=!1;function WT(t,e){if(ud=xu,t=ny(),ap(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cd={focusedElem:t,selectionRange:n},xu=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:$n(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){Mt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return v=Dg,Dg=!1,v}function ta(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&wd(e,n,s)}r=r.next}while(r!==i)}}function oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qy(t){var e=t.alternate;e!==null&&(t.alternate=null,Qy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ui],delete e[ya],delete e[hd],delete e[wT],delete e[CT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jy(t){return t.tag===5||t.tag===3||t.tag===4}function Lg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Eu));else if(i!==4&&(t=t.child,t!==null))for(Rd(t,e,n),t=t.sibling;t!==null;)Rd(t,e,n),t=t.sibling}function bd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}var kt=null,Zn=!1;function Gi(t,e,n){for(n=n.child;n!==null;)ex(t,e,n),n=n.sibling}function ex(t,e,n){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(Qu,n)}catch{}switch(n.tag){case 5:Kt||Bs(n,e);case 6:var i=kt,r=Zn;kt=null,Gi(t,e,n),kt=i,Zn=r,kt!==null&&(Zn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Zn?(t=kt,n=n.stateNode,t.nodeType===8?kc(t.parentNode,n):t.nodeType===1&&kc(t,n),pa(t)):kc(kt,n.stateNode));break;case 4:i=kt,r=Zn,kt=n.stateNode.containerInfo,Zn=!0,Gi(t,e,n),kt=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wd(n,e,o),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!Kt&&(Bs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Mt(n,e,a)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,Gi(t,e,n),Kt=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function Ig(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new GT),e.forEach(function(i){var r=JT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Zn=!1;break e;case 3:kt=a.stateNode.containerInfo,Zn=!0;break e;case 4:kt=a.stateNode.containerInfo,Zn=!0;break e}a=a.return}if(kt===null)throw Error(te(160));ex(s,o,r),kt=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tx(e,t),e=e.sibling}function tx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),oi(t),i&4){try{ta(3,t,t.return),oc(3,t)}catch(y){Mt(t,t.return,y)}try{ta(5,t,t.return)}catch(y){Mt(t,t.return,y)}}break;case 1:jn(e,t),oi(t),i&512&&n!==null&&Bs(n,n.return);break;case 5:if(jn(e,t),oi(t),i&512&&n!==null&&Bs(n,n.return),t.flags&32){var r=t.stateNode;try{ca(r,"")}catch(y){Mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&E_(r,s),Jf(a,o);var u=Jf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?R_(r,f):c==="dangerouslySetInnerHTML"?w_(r,f):c==="children"?ca(r,f):qh(r,c,f,u)}switch(a){case"input":qf(r,s);break;case"textarea":T_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Xs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Xs(r,!!s.multiple,s.defaultValue,!0):Xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ya]=s}catch(y){Mt(t,t.return,y)}}break;case 6:if(jn(e,t),oi(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Mt(t,t.return,y)}}break;case 3:if(jn(e,t),oi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(y){Mt(t,t.return,y)}break;case 4:jn(e,t),oi(t);break;case 13:jn(e,t),oi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Cp=wt())),i&4&&Ig(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(u=Kt)||c,jn(e,t),Kt=u):jn(e,t),oi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(me=t,c=t.child;c!==null;){for(f=me=c;me!==null;){switch(h=me,p=h.child,h.tag){case 0:case 11:case 14:case 15:ta(4,h,h.return);break;case 1:Bs(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Mt(i,n,y)}}break;case 5:Bs(h,h.return);break;case 22:if(h.memoizedState!==null){Ug(f);continue}}p!==null?(p.return=h,me=p):Ug(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=C_("display",o))}catch(y){Mt(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){Mt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jn(e,t),oi(t),i&4&&Ig(t);break;case 21:break;default:jn(e,t),oi(t)}}function oi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jy(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ca(r,""),i.flags&=-33);var s=Lg(t);bd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Lg(t);Rd(t,a,o);break;default:throw Error(te(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jT(t,e,n){me=t,nx(t)}function nx(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||pl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=pl;var u=Kt;if(pl=o,(Kt=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Fg(r):l!==null?(l.return=o,me=l):Fg(r);for(;s!==null;)me=s,nx(s),s=s.sibling;me=r,pl=a,Kt=u}Ng(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Ng(t)}}function Ng(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||oc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_g(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_g(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&pa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Kt||e.flags&512&&Cd(e)}catch(h){Mt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Ug(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Fg(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{oc(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{Cd(e)}catch(l){Mt(e,s,l)}break;case 5:var o=e.return;try{Cd(e)}catch(l){Mt(e,o,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var XT=Math.ceil,Nu=Hi.ReactCurrentDispatcher,Ap=Hi.ReactCurrentOwner,kn=Hi.ReactCurrentBatchConfig,qe=0,Ot=null,Pt=null,zt=0,xn=0,ks=Er(0),Lt=0,Aa=null,ns=0,ac=0,wp=0,na=null,fn=null,Cp=0,oo=1/0,Ai=null,Uu=!1,Pd=null,cr=null,ml=!1,ir=null,Fu=0,ia=0,Dd=null,tu=-1,nu=0;function rn(){return qe&6?wt():tu!==-1?tu:tu=wt()}function fr(t){return t.mode&1?qe&2&&zt!==0?zt&-zt:bT.transition!==null?(nu===0&&(nu=V_()),nu):(t=it,t!==0||(t=window.event,t=t===void 0?16:Y_(t.type)),t):1}function ti(t,e,n,i){if(50<ia)throw ia=0,Dd=null,Error(te(185));Va(t,n,i),(!(qe&2)||t!==Ot)&&(t===Ot&&(!(qe&2)&&(ac|=n),Lt===4&&er(t,zt)),gn(t,i),n===1&&qe===0&&!(e.mode&1)&&(oo=wt()+500,ic&&Tr()))}function gn(t,e){var n=t.callbackNode;bE(t,e);var i=yu(t,t===Ot?zt:0);if(i===0)n!==null&&jm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jm(n),e===1)t.tag===0?RT(Og.bind(null,t)):dy(Og.bind(null,t)),TT(function(){!(qe&6)&&Tr()}),n=null;else{switch(z_(i)){case 1:n=Jh;break;case 4:n=B_;break;case 16:n=_u;break;case 536870912:n=k_;break;default:n=_u}n=cx(n,ix.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ix(t,e){if(tu=-1,nu=0,qe&6)throw Error(te(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var i=yu(t,t===Ot?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ou(t,i);else{e=i;var r=qe;qe|=2;var s=sx();(Ot!==t||zt!==e)&&(Ai=null,oo=wt()+500,Kr(t,e));do try{KT();break}catch(a){rx(t,a)}while(!0);dp(),Nu.current=s,qe=r,Pt!==null?e=0:(Ot=null,zt=0,e=Lt)}if(e!==0){if(e===2&&(r=rd(t),r!==0&&(i=r,e=Ld(t,r))),e===1)throw n=Aa,Kr(t,0),er(t,i),gn(t,wt()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!YT(r)&&(e=Ou(t,i),e===2&&(s=rd(t),s!==0&&(i=s,e=Ld(t,s))),e===1))throw n=Aa,Kr(t,0),er(t,i),gn(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Fr(t,fn,Ai);break;case 3:if(er(t,i),(i&130023424)===i&&(e=Cp+500-wt(),10<e)){if(yu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=dd(Fr.bind(null,t,fn,Ai),e);break}Fr(t,fn,Ai);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*XT(i/1960))-i,10<i){t.timeoutHandle=dd(Fr.bind(null,t,fn,Ai),i);break}Fr(t,fn,Ai);break;case 5:Fr(t,fn,Ai);break;default:throw Error(te(329))}}}return gn(t,wt()),t.callbackNode===n?ix.bind(null,t):null}function Ld(t,e){var n=na;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=Ou(t,e),t!==2&&(e=fn,fn=n,e!==null&&Id(e)),t}function Id(t){fn===null?fn=t:fn.push.apply(fn,t)}function YT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ri(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~wp,e&=~ac,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function Og(t){if(qe&6)throw Error(te(327));Zs();var e=yu(t,0);if(!(e&1))return gn(t,wt()),null;var n=Ou(t,e);if(t.tag!==0&&n===2){var i=rd(t);i!==0&&(e=i,n=Ld(t,i))}if(n===1)throw n=Aa,Kr(t,0),er(t,e),gn(t,wt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,fn,Ai),gn(t,wt()),null}function Rp(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(oo=wt()+500,ic&&Tr())}}function is(t){ir!==null&&ir.tag===0&&!(qe&6)&&Zs();var e=qe;qe|=1;var n=kn.transition,i=it;try{if(kn.transition=null,it=1,t)return t()}finally{it=i,kn.transition=n,qe=e,!(qe&6)&&Tr()}}function bp(){xn=ks.current,ct(ks)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ET(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(up(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Tu();break;case 3:ro(),ct(pn),ct(Zt),_p();break;case 5:vp(i);break;case 4:ro();break;case 13:ct(pt);break;case 19:ct(pt);break;case 10:hp(i.type._context);break;case 22:case 23:bp()}n=n.return}if(Ot=t,Pt=t=dr(t.current,null),zt=xn=e,Lt=0,Aa=null,wp=ac=ns=0,fn=na=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Gr=null}return t}function rx(t,e){do{var n=Pt;try{if(dp(),Ql.current=Iu,Lu){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Lu=!1}if(ts=0,Ft=Dt=gt=null,ea=!1,Ma=0,Ap.current=null,n===null||n.return===null){Lt=1,Aa=e,Pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Tg(o);if(p!==null){p.flags&=-257,Ag(p,o,a,s,e),p.mode&1&&Eg(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Eg(s,u,e),Pp();break e}l=Error(te(426))}}else if(dt&&a.mode&1){var m=Tg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ag(m,o,a,s,e),cp(so(l,a));break e}}s=l=so(l,a),Lt!==4&&(Lt=2),na===null?na=[s]:na.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=zy(s,l,e);vg(s,d);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(cr===null||!cr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Hy(s,a,e);vg(s,x);break e}}s=s.return}while(s!==null)}ax(n)}catch(A){e=A,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function sx(){var t=Nu.current;return Nu.current=Iu,t===null?Iu:t}function Pp(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Ot===null||!(ns&268435455)&&!(ac&268435455)||er(Ot,zt)}function Ou(t,e){var n=qe;qe|=2;var i=sx();(Ot!==t||zt!==e)&&(Ai=null,Kr(t,e));do try{qT();break}catch(r){rx(t,r)}while(!0);if(dp(),qe=n,Nu.current=i,Pt!==null)throw Error(te(261));return Ot=null,zt=0,Lt}function qT(){for(;Pt!==null;)ox(Pt)}function KT(){for(;Pt!==null&&!xE();)ox(Pt)}function ox(t){var e=ux(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?ax(t):Pt=e,Ap.current=null}function ax(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HT(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Pt=null;return}}else if(n=zT(n,e,xn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Fr(t,e,n){var i=it,r=kn.transition;try{kn.transition=null,it=1,$T(t,e,n,i)}finally{kn.transition=r,it=i}return null}function $T(t,e,n,i){do Zs();while(ir!==null);if(qe&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(PE(t,s),t===Ot&&(Pt=Ot=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ml||(ml=!0,cx(_u,function(){return Zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=it;it=1;var a=qe;qe|=4,Ap.current=null,WT(t,n),tx(n,t),gT(cd),xu=!!ud,cd=ud=null,t.current=n,jT(n),SE(),qe=a,it=o,kn.transition=s}else t.current=n;if(ml&&(ml=!1,ir=t,Fu=r),s=t.pendingLanes,s===0&&(cr=null),TE(n.stateNode),gn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Uu)throw Uu=!1,t=Pd,Pd=null,t;return Fu&1&&t.tag!==0&&Zs(),s=t.pendingLanes,s&1?t===Dd?ia++:(ia=0,Dd=t):ia=0,Tr(),null}function Zs(){if(ir!==null){var t=z_(Fu),e=kn.transition,n=it;try{if(kn.transition=null,it=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,Fu=0,qe&6)throw Error(te(331));var r=qe;for(qe|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var c=me;switch(c.tag){case 0:case 11:case 15:ta(8,c,s)}var f=c.child;if(f!==null)f.return=c,me=f;else for(;me!==null;){c=me;var h=c.sibling,p=c.return;if(Qy(c),c===u){me=null;break}if(h!==null){h.return=p,me=h;break}me=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ta(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,me=d;break e}me=s.return}}var g=t.current;for(me=g;me!==null;){o=me;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,me=_;else e:for(o=g;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:oc(9,a)}}catch(A){Mt(a,a.return,A)}if(a===o){me=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,me=x;break e}me=a.return}}if(qe=r,Tr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(Qu,t)}catch{}i=!0}return i}finally{it=n,kn.transition=e}}return!1}function Bg(t,e,n){e=so(n,e),e=zy(t,e,1),t=ur(t,e,1),e=rn(),t!==null&&(Va(t,1,e),gn(t,e))}function Mt(t,e,n){if(t.tag===3)Bg(t,t,n);else for(;e!==null;){if(e.tag===3){Bg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=so(n,t),t=Hy(e,t,1),e=ur(e,t,1),t=rn(),e!==null&&(Va(e,1,t),gn(e,t));break}}e=e.return}}function ZT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(zt&n)===n&&(Lt===4||Lt===3&&(zt&130023424)===zt&&500>wt()-Cp?Kr(t,0):wp|=n),gn(t,e)}function lx(t,e){e===0&&(t.mode&1?(e=sl,sl<<=1,!(sl&130023424)&&(sl=4194304)):e=1);var n=rn();t=Fi(t,e),t!==null&&(Va(t,e,n),gn(t,n))}function QT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lx(t,n)}function JT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),lx(t,n)}var ux;ux=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,VT(t,e,n);dn=!!(t.flags&131072)}else dn=!1,dt&&e.flags&1048576&&hy(e,Cu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;eu(t,e),t=e.pendingProps;var r=to(e,Zt.current);$s(e,n),r=xp(null,e,i,t,r,n);var s=Sp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,Au(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,mp(e),r.updater=sc,e.stateNode=r,r._reactInternals=e,yd(e,i,t,n),e=Md(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&lp(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(eu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tA(i),t=$n(i,t),r){case 0:e=Sd(null,e,i,t,n);break e;case 1:e=Rg(null,e,i,t,n);break e;case 11:e=wg(null,e,i,t,n);break e;case 14:e=Cg(null,e,i,$n(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Sd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Rg(t,e,i,r,n);case 3:e:{if(Xy(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,yy(t,e),Pu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=so(Error(te(423)),e),e=bg(t,e,i,n,r);break e}else if(i!==r){r=so(Error(te(424)),e),e=bg(t,e,i,n,r);break e}else for(Sn=lr(e.stateNode.containerInfo.firstChild),Mn=e,dt=!0,Qn=null,n=vy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),i===r){e=Oi(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return xy(e),t===null&&gd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,fd(i,r)?o=null:s!==null&&fd(i,s)&&(e.flags|=32),jy(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&gd(e),null;case 13:return Yy(t,e,n);case 4:return gp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=io(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),wg(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,at(Ru,i._currentValue),i._currentValue=o,s!==null)if(ri(s.value,o)){if(s.children===r.children&&!pn.current){e=Oi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,$s(e,n),r=zn(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),Cg(t,e,i,r,n);case 15:return Gy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),eu(t,e),e.tag=1,mn(i)?(t=!0,Au(e)):t=!1,$s(e,n),Vy(e,i,r),yd(e,i,r,n),Md(null,e,i,!0,t,n);case 19:return qy(t,e,n);case 22:return Wy(t,e,n)}throw Error(te(156,e.tag))};function cx(t,e){return O_(t,e)}function eA(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new eA(t,e,n,i)}function Dp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tA(t){if(typeof t=="function")return Dp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$h)return 11;if(t===Zh)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function iu(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Dp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bs:return $r(n.children,r,s,e);case Kh:o=8,r|=8;break;case Gf:return t=Bn(12,n,e,r|2),t.elementType=Gf,t.lanes=s,t;case Wf:return t=Bn(13,n,e,r),t.elementType=Wf,t.lanes=s,t;case jf:return t=Bn(19,n,e,r),t.elementType=jf,t.lanes=s,t;case x_:return lc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case __:o=10;break e;case y_:o=9;break e;case $h:o=11;break e;case Zh:o=14;break e;case Zi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function $r(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function lc(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=x_,t.lanes=n,t.stateNode={isHidden:!1},t}function Yc(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function qc(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nA(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rc(0),this.expirationTimes=Rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Lp(t,e,n,i,r,s,o,a,l){return t=new nA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mp(s),t}function iA(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function fx(t){if(!t)return vr;t=t._reactInternals;e:{if(as(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(mn(n))return fy(t,n,e)}return e}function dx(t,e,n,i,r,s,o,a,l){return t=Lp(n,i,!0,t,r,s,o,a,l),t.context=fx(null),n=t.current,i=rn(),r=fr(n),s=Li(i,r),s.callback=e??null,ur(n,s,r),t.current.lanes=r,Va(t,r,i),gn(t,i),t}function uc(t,e,n,i){var r=e.current,s=rn(),o=fr(r);return n=fx(n),e.context===null?e.context=n:e.pendingContext=n,e=Li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ur(r,e,o),t!==null&&(ti(t,r,o,s),Zl(t,r,o)),o}function Bu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ip(t,e){kg(t,e),(t=t.alternate)&&kg(t,e)}function rA(){return null}var hx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Np(t){this._internalRoot=t}cc.prototype.render=Np.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));uc(t,e,null,null)};cc.prototype.unmount=Np.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){uc(null,t,null,null)}),e[Ui]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=W_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&X_(t)}};function Up(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vg(){}function sA(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Bu(o);s.call(u)}}var o=dx(e,i,t,0,null,!1,!1,"",Vg);return t._reactRootContainer=o,t[Ui]=o.current,va(t.nodeType===8?t.parentNode:t),is(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Bu(l);a.call(u)}}var l=Lp(t,0,!1,null,null,!1,!1,"",Vg);return t._reactRootContainer=l,t[Ui]=l.current,va(t.nodeType===8?t.parentNode:t),is(function(){uc(e,l,n,i)}),l}function dc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Bu(o);a.call(l)}}uc(e,o,t,r)}else o=sA(n,e,t,r,i);return Bu(o)}H_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wo(e.pendingLanes);n!==0&&(ep(e,n|1),gn(e,wt()),!(qe&6)&&(oo=wt()+500,Tr()))}break;case 13:is(function(){var i=Fi(t,1);if(i!==null){var r=rn();ti(i,t,1,r)}}),Ip(t,1)}};tp=function(t){if(t.tag===13){var e=Fi(t,134217728);if(e!==null){var n=rn();ti(e,t,134217728,n)}Ip(t,134217728)}};G_=function(t){if(t.tag===13){var e=fr(t),n=Fi(t,e);if(n!==null){var i=rn();ti(n,t,e,i)}Ip(t,e)}};W_=function(){return it};j_=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};td=function(t,e,n){switch(e){case"input":if(qf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=nc(i);if(!r)throw Error(te(90));M_(i),qf(i,r)}}}break;case"textarea":T_(t,n);break;case"select":e=n.value,e!=null&&Xs(t,!!n.multiple,e,!1)}};D_=Rp;L_=is;var oA={usingClientEntryPoint:!1,Events:[Ha,Is,nc,b_,P_,Rp]},Lo={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aA={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=U_(t),t===null?null:t.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||rA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{Qu=gl.inject(aA),hi=gl}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oA;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Up(e))throw Error(te(200));return iA(t,e,null,n)};An.createRoot=function(t,e){if(!Up(t))throw Error(te(299));var n=!1,i="",r=hx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Lp(t,1,!1,null,null,n,!1,i,r),t[Ui]=e.current,va(t.nodeType===8?t.parentNode:t),new Np(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=U_(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return is(t)};An.hydrate=function(t,e,n){if(!fc(e))throw Error(te(200));return dc(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!Up(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=hx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dx(e,null,t,1,n??null,r,!1,s,o),t[Ui]=e.current,va(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new cc(e)};An.render=function(t,e,n){if(!fc(e))throw Error(te(200));return dc(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!fc(t))throw Error(te(40));return t._reactRootContainer?(is(function(){dc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ui]=null})}),!0):!1};An.unstable_batchedUpdates=Rp;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fc(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return dc(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function px(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(px)}catch(t){console.error(t)}}px(),p_.exports=An;var lA=p_.exports,zg=lA;zf.createRoot=zg.createRoot,zf.hydrateRoot=zg.hydrateRoot;const uA="/ronny.dev/assets/myPhoto2-GONbBZ6G.jpg",mx=de.createContext({});function cA(t){const e=de.useRef(null);return e.current===null&&(e.current=t()),e.current}const Fp=typeof window<"u",fA=Fp?de.useLayoutEffect:de.useEffect,Op=de.createContext(null);function Bp(t,e){t.indexOf(e)===-1&&t.push(e)}function kp(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Bi=(t,e,n)=>n>e?e:n<t?t:n;let Vp=()=>{};const ki={},gx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function vx(t){return typeof t=="object"&&t!==null}const _x=t=>/^0[^.\s]+$/u.test(t);function zp(t){let e;return()=>(e===void 0&&(e=t()),e)}const Vn=t=>t,dA=(t,e)=>n=>e(t(n)),Wa=(...t)=>t.reduce(dA),wa=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class Hp{constructor(){this.subscriptions=[]}add(e){return Bp(this.subscriptions,e),()=>kp(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const mi=t=>t*1e3,gi=t=>t/1e3;function yx(t,e){return e?t*(1e3/e):0}const xx=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,hA=1e-7,pA=12;function mA(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=xx(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>hA&&++a<pA);return o}function ja(t,e,n,i){if(t===e&&n===i)return Vn;const r=s=>mA(s,0,1,t,n);return s=>s===0||s===1?s:xx(r(s),e,i)}const Sx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Mx=t=>e=>1-t(1-e),Ex=ja(.33,1.53,.69,.99),Gp=Mx(Ex),Tx=Sx(Gp),Ax=t=>(t*=2)<1?.5*Gp(t):.5*(2-Math.pow(2,-10*(t-1))),Wp=t=>1-Math.sin(Math.acos(t)),wx=Mx(Wp),Cx=Sx(Wp),gA=ja(.42,0,1,1),vA=ja(0,0,.58,1),Rx=ja(.42,0,.58,1),_A=t=>Array.isArray(t)&&typeof t[0]!="number",bx=t=>Array.isArray(t)&&typeof t[0]=="number",yA={linear:Vn,easeIn:gA,easeInOut:Rx,easeOut:vA,circIn:Wp,circInOut:Cx,circOut:wx,backIn:Gp,backInOut:Tx,backOut:Ex,anticipate:Ax},xA=t=>typeof t=="string",Hg=t=>{if(bx(t)){Vp(t.length===4);const[e,n,i,r]=t;return ja(e,n,i,r)}else if(xA(t))return yA[t];return t},vl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],Gg={value:null};function SA(t,e){let n=new Set,i=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function u(f){o.has(f)&&(c.schedule(f),t()),l++,f(a)}const c={schedule:(f,h=!1,p=!1)=>{const y=p&&r?n:i;return h&&o.add(f),y.has(f)||y.add(f),f},cancel:f=>{i.delete(f),o.delete(f)},process:f=>{if(a=f,r){s=!0;return}r=!0,[n,i]=[i,n],n.forEach(u),e&&Gg.value&&Gg.value.frameloop[e].push(l),l=0,n.clear(),r=!1,s&&(s=!1,c.process(f))}};return c}const MA=40;function Px(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=vl.reduce((_,x)=>(_[x]=SA(s,e?x:void 0),_),{}),{setup:a,read:l,resolveKeyframes:u,preUpdate:c,update:f,preRender:h,render:p,postRender:v}=o,y=()=>{const _=ki.useManualTiming?r.timestamp:performance.now();n=!1,ki.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(_-r.timestamp,MA),1)),r.timestamp=_,r.isProcessing=!0,a.process(r),l.process(r),u.process(r),c.process(r),f.process(r),h.process(r),p.process(r),v.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(y))},m=()=>{n=!0,i=!0,r.isProcessing||t(y)};return{schedule:vl.reduce((_,x)=>{const A=o[x];return _[x]=(C,w=!1,b=!1)=>(n||m(),A.schedule(C,w,b)),_},{}),cancel:_=>{for(let x=0;x<vl.length;x++)o[vl[x]].cancel(_)},state:r,steps:o}}const{schedule:vt,cancel:_r,state:Vt,steps:Kc}=Px(typeof requestAnimationFrame<"u"?requestAnimationFrame:Vn,!0);let ru;function EA(){ru=void 0}const hn={now:()=>(ru===void 0&&hn.set(Vt.isProcessing||ki.useManualTiming?Vt.timestamp:performance.now()),ru),set:t=>{ru=t,queueMicrotask(EA)}},Dx=t=>e=>typeof e=="string"&&e.startsWith(t),jp=Dx("--"),TA=Dx("var(--"),Xp=t=>TA(t)?AA.test(t.split("/*")[0].trim()):!1,AA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,_o={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ca={..._o,transform:t=>Bi(0,1,t)},_l={..._o,default:1},ra=t=>Math.round(t*1e5)/1e5,Yp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function wA(t){return t==null}const CA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,qp=(t,e)=>n=>!!(typeof n=="string"&&CA.test(n)&&n.startsWith(t)||e&&!wA(n)&&Object.prototype.hasOwnProperty.call(n,e)),Lx=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Yp);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},RA=t=>Bi(0,255,t),$c={..._o,transform:t=>Math.round(RA(t))},jr={test:qp("rgb","red"),parse:Lx("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+$c.transform(t)+", "+$c.transform(e)+", "+$c.transform(n)+", "+ra(Ca.transform(i))+")"};function bA(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Nd={test:qp("#"),parse:bA,transform:jr.transform},Xa=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),$i=Xa("deg"),vi=Xa("%"),Re=Xa("px"),PA=Xa("vh"),DA=Xa("vw"),Wg={...vi,parse:t=>vi.parse(t)/100,transform:t=>vi.transform(t*100)},Vs={test:qp("hsl","hue"),parse:Lx("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+vi.transform(ra(e))+", "+vi.transform(ra(n))+", "+ra(Ca.transform(i))+")"},qt={test:t=>jr.test(t)||Nd.test(t)||Vs.test(t),parse:t=>jr.test(t)?jr.parse(t):Vs.test(t)?Vs.parse(t):Nd.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?jr.transform(t):Vs.transform(t)},LA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function IA(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Yp))==null?void 0:e.length)||0)+(((n=t.match(LA))==null?void 0:n.length)||0)>0}const Ix="number",Nx="color",NA="var",UA="var(",jg="${}",FA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ra(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(FA,l=>(qt.test(l)?(i.color.push(s),r.push(Nx),n.push(qt.parse(l))):l.startsWith(UA)?(i.var.push(s),r.push(NA),n.push(l)):(i.number.push(s),r.push(Ix),n.push(parseFloat(l))),++s,jg)).split(jg);return{values:n,split:a,indexes:i,types:r}}function Ux(t){return Ra(t).values}function Fx(t){const{split:e,types:n}=Ra(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===Ix?s+=ra(r[o]):a===Nx?s+=qt.transform(r[o]):s+=r[o]}return s}}const OA=t=>typeof t=="number"?0:t;function BA(t){const e=Ux(t);return Fx(t)(e.map(OA))}const yr={test:IA,parse:Ux,createTransformer:Fx,getAnimatableNone:BA};function Zc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function kA({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Zc(l,a,t+1/3),s=Zc(l,a,t),o=Zc(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function ku(t,e){return n=>n>0?e:t}const mt=(t,e,n)=>t+(e-t)*n,Qc=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},VA=[Nd,jr,Vs],zA=t=>VA.find(e=>e.test(t));function Xg(t){const e=zA(t);if(!e)return!1;let n=e.parse(t);return e===Vs&&(n=kA(n)),n}const Yg=(t,e)=>{const n=Xg(t),i=Xg(e);if(!n||!i)return ku(t,e);const r={...n};return s=>(r.red=Qc(n.red,i.red,s),r.green=Qc(n.green,i.green,s),r.blue=Qc(n.blue,i.blue,s),r.alpha=mt(n.alpha,i.alpha,s),jr.transform(r))},Ud=new Set(["none","hidden"]);function HA(t,e){return Ud.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function GA(t,e){return n=>mt(t,e,n)}function Kp(t){return typeof t=="number"?GA:typeof t=="string"?Xp(t)?ku:qt.test(t)?Yg:XA:Array.isArray(t)?Ox:typeof t=="object"?qt.test(t)?Yg:WA:ku}function Ox(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Kp(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function WA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Kp(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function jA(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const XA=(t,e)=>{const n=yr.createTransformer(e),i=Ra(t),r=Ra(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Ud.has(t)&&!r.values.length||Ud.has(e)&&!i.values.length?HA(t,e):Wa(Ox(jA(i,r),r.values),n):ku(t,e)};function Bx(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?mt(t,e,n):Kp(t)(t,e)}const YA=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>vt.update(e,n),stop:()=>_r(e),now:()=>Vt.isProcessing?Vt.timestamp:hn.now()}},kx=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(s/(r-1))+", ";return`linear(${i.substring(0,i.length-2)})`},Vu=2e4;function $p(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Vu;)e+=n,i=t.next(e);return e>=Vu?1/0:e}function qA(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min($p(i),Vu);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:gi(r)}}const KA=5;function Vx(t,e,n){const i=Math.max(e-KA,0);return yx(n-t(i),e-i)}const St={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},qg=.001;function $A({duration:t=St.duration,bounce:e=St.bounce,velocity:n=St.velocity,mass:i=St.mass}){let r,s,o=1-e;o=Bi(St.minDamping,St.maxDamping,o),t=Bi(St.minDuration,St.maxDuration,gi(t)),o<1?(r=u=>{const c=u*o,f=c*t,h=c-n,p=Fd(u,o),v=Math.exp(-f);return qg-h/p*v},s=u=>{const f=u*o*t,h=f*n+n,p=Math.pow(o,2)*Math.pow(u,2)*t,v=Math.exp(-f),y=Fd(Math.pow(u,2),o);return(-r(u)+qg>0?-1:1)*((h-p)*v)/y}):(r=u=>{const c=Math.exp(-u*t),f=(u-n)*t+1;return-.001+c*f},s=u=>{const c=Math.exp(-u*t),f=(n-u)*(t*t);return c*f});const a=5/t,l=QA(r,s,a);if(t=mi(t),isNaN(l))return{stiffness:St.stiffness,damping:St.damping,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const ZA=12;function QA(t,e,n){let i=n;for(let r=1;r<ZA;r++)i=i-t(i)/e(i);return i}function Fd(t,e){return t*Math.sqrt(1-e*e)}const JA=["duration","bounce"],ew=["stiffness","damping","mass"];function Kg(t,e){return e.some(n=>t[n]!==void 0)}function tw(t){let e={velocity:St.velocity,stiffness:St.stiffness,damping:St.damping,mass:St.mass,isResolvedFromDuration:!1,...t};if(!Kg(t,ew)&&Kg(t,JA))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Bi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:St.mass,stiffness:r,damping:s}}else{const n=$A(t);e={...e,...n,mass:St.mass},e.isResolvedFromDuration=!0}return e}function zu(t=St.visualDuration,e=St.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:f,velocity:h,isResolvedFromDuration:p}=tw({...n,velocity:-gi(n.velocity||0)}),v=h||0,y=u/(2*Math.sqrt(l*c)),m=o-s,d=gi(Math.sqrt(l/c)),g=Math.abs(m)<5;i||(i=g?St.restSpeed.granular:St.restSpeed.default),r||(r=g?St.restDelta.granular:St.restDelta.default);let _;if(y<1){const A=Fd(d,y);_=C=>{const w=Math.exp(-y*d*C);return o-w*((v+y*d*m)/A*Math.sin(A*C)+m*Math.cos(A*C))}}else if(y===1)_=A=>o-Math.exp(-d*A)*(m+(v+d*m)*A);else{const A=d*Math.sqrt(y*y-1);_=C=>{const w=Math.exp(-y*d*C),b=Math.min(A*C,300);return o-w*((v+y*d*m)*Math.sinh(b)+A*m*Math.cosh(b))/A}}const x={calculatedDuration:p&&f||null,next:A=>{const C=_(A);if(p)a.done=A>=f;else{let w=A===0?v:0;y<1&&(w=A===0?mi(v):Vx(_,A,C));const b=Math.abs(w)<=i,T=Math.abs(o-C)<=r;a.done=b&&T}return a.value=a.done?o:C,a},toString:()=>{const A=Math.min($p(x),Vu),C=kx(w=>x.next(A*w).value,A,30);return A+"ms "+C},toTransition:()=>{}};return x}zu.applyToOptions=t=>{const e=qA(t,100,zu);return t.ease=e.ease,t.duration=mi(e.duration),t.type="keyframes",t};function Od({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=t[0],h={done:!1,value:f},p=b=>a!==void 0&&b<a||l!==void 0&&b>l,v=b=>a===void 0?l:l===void 0||Math.abs(a-b)<Math.abs(l-b)?a:l;let y=n*e;const m=f+y,d=o===void 0?m:o(m);d!==m&&(y=d-f);const g=b=>-y*Math.exp(-b/i),_=b=>d+g(b),x=b=>{const T=g(b),S=_(b);h.done=Math.abs(T)<=u,h.value=h.done?d:S};let A,C;const w=b=>{p(h.value)&&(A=b,C=zu({keyframes:[h.value,v(h.value)],velocity:Vx(_,b,h.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return w(0),{calculatedDuration:null,next:b=>{let T=!1;return!C&&A===void 0&&(T=!0,x(b),w(b)),A!==void 0&&b>=A?C.next(b-A):(!T&&x(b),h)}}}function nw(t,e,n){const i=[],r=n||ki.mix||Bx,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Vn:e;a=Wa(l,a)}i.push(a)}return i}function iw(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Vp(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=nw(e,i,r),l=a.length,u=c=>{if(o&&c<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(c<t[f+1]);f++);const h=wa(t[f],t[f+1],c);return a[f](h)};return n?c=>u(Bi(t[0],t[s-1],c)):u}function rw(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=wa(0,e,i);t.push(mt(n,1,r))}}function sw(t){const e=[0];return rw(e,t.length-1),e}function ow(t,e){return t.map(n=>n*e)}function aw(t,e){return t.map(()=>e||Rx).splice(0,t.length-1)}function sa({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=_A(i)?i.map(Hg):Hg(i),s={done:!1,value:e[0]},o=ow(n&&n.length===e.length?n:sw(e),t),a=iw(o,e,{ease:Array.isArray(r)?r:aw(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const lw=t=>t!==null;function Zp(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(lw),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const uw={decay:Od,inertia:Od,tween:sa,keyframes:sa,spring:zu};function zx(t){typeof t.type=="string"&&(t.type=uw[t.type])}class Qp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const cw=t=>t/100;class Jp extends Qp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==hn.now()&&this.tick(hn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;zx(e);const{type:n=sa,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||sa;l!==sa&&typeof a[0]!="number"&&(this.mixKeyframes=Wa(cw,Bx(a[0],a[1])),a=[0,100]);const u=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=$p(u));const{calculatedDuration:c}=u;this.calculatedDuration=c,this.resolvedDuration=c+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=u}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:u=0,keyframes:c,repeat:f,repeatType:h,repeatDelay:p,type:v,onUpdate:y,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const d=this.currentTime-u*(this.playbackSpeed>=0?1:-1),g=this.playbackSpeed>=0?d<0:d>r;this.currentTime=Math.max(d,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let _=this.currentTime,x=i;if(f){const b=Math.min(this.currentTime,r)/a;let T=Math.floor(b),S=b%1;!S&&b>=1&&(S=1),S===1&&T--,T=Math.min(T,f+1),!!(T%2)&&(h==="reverse"?(S=1-S,p&&(S-=p/a)):h==="mirror"&&(x=o)),_=Bi(0,1,S)*a}const A=g?{done:!1,value:c[0]}:x.next(_);s&&(A.value=s(A.value));let{done:C}=A;!g&&l!==null&&(C=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const w=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return w&&v!==Od&&(A.value=Zp(c,this.options,m,this.speed)),y&&y(A.value),w&&this.finish(),A}then(e,n){return this.finished.then(e,n)}get duration(){return gi(this.calculatedDuration)}get time(){return gi(this.currentTime)}set time(e){var n;e=mi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(hn.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=gi(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=YA,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(hn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function fw(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Xr=t=>t*180/Math.PI,Bd=t=>{const e=Xr(Math.atan2(t[1],t[0]));return kd(e)},dw={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Bd,rotateZ:Bd,skewX:t=>Xr(Math.atan(t[1])),skewY:t=>Xr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},kd=t=>(t=t%360,t<0&&(t+=360),t),$g=Bd,Zg=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Qg=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),hw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Zg,scaleY:Qg,scale:t=>(Zg(t)+Qg(t))/2,rotateX:t=>kd(Xr(Math.atan2(t[6],t[5]))),rotateY:t=>kd(Xr(Math.atan2(-t[2],t[0]))),rotateZ:$g,rotate:$g,skewX:t=>Xr(Math.atan(t[4])),skewY:t=>Xr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Vd(t){return t.includes("scale")?1:0}function zd(t,e){if(!t||t==="none")return Vd(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=hw,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=dw,r=a}if(!r)return Vd(e);const s=i[e],o=r[1].split(",").map(mw);return typeof s=="function"?s(o):o[s]}const pw=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return zd(n,e)};function mw(t){return parseFloat(t.trim())}const yo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],xo=new Set(yo),Jg=t=>t===_o||t===Re,gw=new Set(["x","y","z"]),vw=yo.filter(t=>!gw.has(t));function _w(t){const e=[];return vw.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Zr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>zd(e,"x"),y:(t,{transform:e})=>zd(e,"y")};Zr.translateX=Zr.x;Zr.translateY=Zr.y;const Qr=new Set;let Hd=!1,Gd=!1,Wd=!1;function Hx(){if(Gd){const t=Array.from(Qr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=_w(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Gd=!1,Hd=!1,Qr.forEach(t=>t.complete(Wd)),Qr.clear()}function Gx(){Qr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Gd=!0)})}function yw(){Wd=!0,Gx(),Hx(),Wd=!1}class em{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Qr.add(this),Hd||(Hd=!0,vt.read(Gx),vt.resolveKeyframes(Hx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}fw(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Qr.delete(this)}cancel(){this.state==="scheduled"&&(Qr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const xw=t=>t.startsWith("--");function Sw(t,e,n){xw(e)?t.style.setProperty(e,n):t.style[e]=n}const Mw=zp(()=>window.ScrollTimeline!==void 0),Ew={};function Tw(t,e){const n=zp(t);return()=>Ew[e]??n()}const Wx=Tw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Xo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,ev={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xo([0,.65,.55,1]),circOut:Xo([.55,0,1,.45]),backIn:Xo([.31,.01,.66,-.59]),backOut:Xo([.33,1.53,.69,.99])};function jx(t,e){if(t)return typeof t=="function"?Wx()?kx(t,e):"ease-out":bx(t)?Xo(t):Array.isArray(t)?t.map(n=>jx(n,e)||ev.easeOut):ev[t]}function Aw(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},u=void 0){const c={[e]:n};l&&(c.offset=l);const f=jx(a,r);Array.isArray(f)&&(c.easing=f);const h={delay:i,duration:r,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return u&&(h.pseudoElement=u),t.animate(c,h)}function Xx(t){return typeof t=="function"&&"applyToOptions"in t}function ww({type:t,...e}){return Xx(t)&&Wx()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class Cw extends Qp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,Vp(typeof e.type!="string");const u=ww(e);this.animation=Aw(n,i,r,u,s),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const c=Zp(r,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(c):Sw(n,i,c),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,n;this.isPseudoElement||(n=(e=this.animation).commitStyles)==null||n.call(e)}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return gi(Number(e))}get time(){return gi(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=mi(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:n}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&Mw()?(this.animation.timeline=e,Vn):n(this)}}const Yx={anticipate:Ax,backInOut:Tx,circInOut:Cx};function Rw(t){return t in Yx}function bw(t){typeof t.ease=="string"&&Rw(t.ease)&&(t.ease=Yx[t.ease])}const tv=10;class Pw extends Cw{constructor(e){bw(e),zx(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new Jp({...o,autoplay:!1}),l=mi(this.finishedTime??this.time);n.setWithVelocity(a.sample(l-tv).value,a.sample(l).value,tv),a.stop()}}const nv=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(yr.test(t)||t==="0")&&!t.startsWith("url("));function Dw(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function Lw(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=nv(r,e),a=nv(s,e);return!o||!a?!1:Dw(t)||(n==="spring"||Xx(n))&&i}function qx(t){return vx(t)&&"offsetHeight"in t}const Iw=new Set(["opacity","clipPath","filter","transform"]),Nw=zp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Uw(t){var u;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o}=t;if(!qx((u=e==null?void 0:e.owner)==null?void 0:u.current))return!1;const{onUpdate:a,transformTemplate:l}=e.owner.getProps();return Nw()&&n&&Iw.has(n)&&(n!=="transform"||!l)&&!a&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const Fw=40;class Ow extends Qp{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:u,element:c,...f}){var v;super(),this.stop=()=>{var y,m;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(m=this.keyframeResolver)==null||m.cancel()},this.createdAt=hn.now();const h={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:u,element:c,...f},p=(c==null?void 0:c.KeyframeResolver)||em;this.keyframeResolver=new p(a,(y,m,d)=>this.onKeyframesResolved(y,m,h,!d),l,u,c),(v=this.keyframeResolver)==null||v.scheduleResolve()}onKeyframesResolved(e,n,i,r){this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:u,onUpdate:c}=i;this.resolvedAt=hn.now(),Lw(e,s,o,a)||((ki.instantAnimations||!l)&&(c==null||c(Zp(e,i,n))),e[0]=e[e.length-1],i.duration=0,i.repeat=0);const h={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>Fw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},p=!u&&Uw(h)?new Pw({...h,element:h.motionValue.owner.current}):new Jp(h);p.finished.then(()=>this.notifyFinished()).catch(Vn),this.pendingTimeline&&(this.stopTimeline=p.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),yw()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const Bw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function kw(t){const e=Bw.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function Kx(t,e,n=1){const[i,r]=kw(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return gx(o)?parseFloat(o):o}return Xp(r)?Kx(r,e,n+1):r}function tm(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const $x=new Set(["width","height","top","left","right","bottom",...yo]),Vw={test:t=>t==="auto",parse:t=>t},Zx=t=>e=>e.test(t),Qx=[_o,Re,vi,$i,DA,PA,Vw],iv=t=>Qx.find(Zx(t));function zw(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||_x(t):!0}const Hw=new Set(["brightness","contrast","saturate","opacity"]);function Gw(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Yp)||[];if(!i)return t;const r=n.replace(i,"");let s=Hw.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Ww=/\b([a-z-]*)\(.*?\)/gu,jd={...yr,getAnimatableNone:t=>{const e=t.match(Ww);return e?e.map(Gw).join(" "):t}},rv={..._o,transform:Math.round},jw={rotate:$i,rotateX:$i,rotateY:$i,rotateZ:$i,scale:_l,scaleX:_l,scaleY:_l,scaleZ:_l,skew:$i,skewX:$i,skewY:$i,distance:Re,translateX:Re,translateY:Re,translateZ:Re,x:Re,y:Re,z:Re,perspective:Re,transformPerspective:Re,opacity:Ca,originX:Wg,originY:Wg,originZ:Re},nm={borderWidth:Re,borderTopWidth:Re,borderRightWidth:Re,borderBottomWidth:Re,borderLeftWidth:Re,borderRadius:Re,radius:Re,borderTopLeftRadius:Re,borderTopRightRadius:Re,borderBottomRightRadius:Re,borderBottomLeftRadius:Re,width:Re,maxWidth:Re,height:Re,maxHeight:Re,top:Re,right:Re,bottom:Re,left:Re,padding:Re,paddingTop:Re,paddingRight:Re,paddingBottom:Re,paddingLeft:Re,margin:Re,marginTop:Re,marginRight:Re,marginBottom:Re,marginLeft:Re,backgroundPositionX:Re,backgroundPositionY:Re,...jw,zIndex:rv,fillOpacity:Ca,strokeOpacity:Ca,numOctaves:rv},Xw={...nm,color:qt,backgroundColor:qt,outlineColor:qt,fill:qt,stroke:qt,borderColor:qt,borderTopColor:qt,borderRightColor:qt,borderBottomColor:qt,borderLeftColor:qt,filter:jd,WebkitFilter:jd},Jx=t=>Xw[t];function eS(t,e){let n=Jx(t);return n!==jd&&(n=yr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Yw=new Set(["auto","none","0"]);function qw(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!Yw.has(s)&&Ra(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=eS(n,r)}class Kw extends em{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let u=e[l];if(typeof u=="string"&&(u=u.trim(),Xp(u))){const c=Kx(u,n.current);c!==void 0&&(e[l]=c),l===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!$x.has(i)||e.length!==2)return;const[r,s]=e,o=iv(r),a=iv(s);if(o!==a)if(Jg(o)&&Jg(a))for(let l=0;l<e.length;l++){const u=e[l];typeof u=="string"&&(e[l]=parseFloat(u))}else Zr[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||zw(e[r]))&&i.push(r);i.length&&qw(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Zr[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=Zr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,u])=>{e.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function $w(t,e,n){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;const r=(n==null?void 0:n[t])??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t)}const tS=(t,e)=>e&&typeof t=="number"?e.transform(t):t,sv=30,Zw=t=>!isNaN(parseFloat(t));class Qw{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{var o,a;const s=hn.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty();r&&((a=this.events.renderRequest)==null||a.notify(this.current))},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=hn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Zw(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Hp);const i=this.events[e].add(n);return e==="change"?()=>{i(),vt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=hn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>sv)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,sv);return yx(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ao(t,e){return new Qw(t,e)}const{schedule:im}=Px(queueMicrotask,!1),Kn={x:!1,y:!1};function nS(){return Kn.x||Kn.y}function Jw(t){return t==="x"||t==="y"?Kn[t]?null:(Kn[t]=!0,()=>{Kn[t]=!1}):Kn.x||Kn.y?null:(Kn.x=Kn.y=!0,()=>{Kn.x=Kn.y=!1})}function iS(t,e){const n=$w(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function ov(t){return!(t.pointerType==="touch"||nS())}function e1(t,e,n={}){const[i,r,s]=iS(t,n),o=a=>{if(!ov(a))return;const{target:l}=a,u=e(l,a);if(typeof u!="function"||!l)return;const c=f=>{ov(f)&&(u(f),l.removeEventListener("pointerleave",c))};l.addEventListener("pointerleave",c,r)};return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const rS=(t,e)=>e?t===e?!0:rS(t,e.parentElement):!1,rm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,t1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function n1(t){return t1.has(t.tagName)||t.tabIndex!==-1}const su=new WeakSet;function av(t){return e=>{e.key==="Enter"&&t(e)}}function Jc(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const i1=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=av(()=>{if(su.has(n))return;Jc(n,"down");const r=av(()=>{Jc(n,"up")}),s=()=>Jc(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function lv(t){return rm(t)&&!nS()}function r1(t,e,n={}){const[i,r,s]=iS(t,n),o=a=>{const l=a.currentTarget;if(!lv(a))return;su.add(l);const u=e(l,a),c=(p,v)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",h),su.has(l)&&su.delete(l),lv(p)&&typeof u=="function"&&u(p,{success:v})},f=p=>{c(p,l===window||l===document||n.useGlobalTarget||rS(l,p.target))},h=p=>{c(p,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",h,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),qx(a)&&(a.addEventListener("focus",u=>i1(u,r)),!n1(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function sS(t){return vx(t)&&"ownerSVGElement"in t}function s1(t){return sS(t)&&t.tagName==="svg"}const $t=t=>!!(t&&t.getVelocity),o1=[...Qx,qt,yr],a1=t=>o1.find(Zx(t)),oS=de.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function l1(t=!0){const e=de.useContext(Op);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=de.useId();de.useEffect(()=>{if(t)return r(s)},[t]);const o=de.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const aS=de.createContext({strict:!1}),uv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},lo={};for(const t in uv)lo[t]={isEnabled:e=>uv[t].some(n=>!!e[n])};function u1(t){for(const e in t)lo[e]={...lo[e],...t[e]}}const c1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Hu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||c1.has(t)}let lS=t=>!Hu(t);function f1(t){t&&(lS=e=>e.startsWith("on")?!Hu(e):t(e))}try{f1(require("@emotion/is-prop-valid").default)}catch{}function d1(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(lS(r)||n===!0&&Hu(r)||!e&&!Hu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function h1(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const hc=de.createContext({});function pc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function ba(t){return typeof t=="string"||Array.isArray(t)}const sm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],om=["initial",...sm];function mc(t){return pc(t.animate)||om.some(e=>ba(t[e]))}function uS(t){return!!(mc(t)||t.variants)}function p1(t,e){if(mc(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ba(n)?n:void 0,animate:ba(i)?i:void 0}}return t.inherit!==!1?e:{}}function m1(t){const{initial:e,animate:n}=p1(t,de.useContext(hc));return de.useMemo(()=>({initial:e,animate:n}),[cv(e),cv(n)])}function cv(t){return Array.isArray(t)?t.join(" "):t}const g1=Symbol.for("motionComponentSymbol");function zs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function v1(t,e,n){return de.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):zs(n)&&(n.current=i))},[e])}const am=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),_1="framerAppearId",cS="data-"+am(_1),fS=de.createContext({});function y1(t,e,n,i,r){var y,m;const{visualElement:s}=de.useContext(hc),o=de.useContext(aS),a=de.useContext(Op),l=de.useContext(oS).reducedMotion,u=de.useRef(null);i=i||o.renderer,!u.current&&i&&(u.current=i(t,{visualState:e,parent:s,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:l}));const c=u.current,f=de.useContext(fS);c&&!c.projection&&r&&(c.type==="html"||c.type==="svg")&&x1(u.current,n,r,f);const h=de.useRef(!1);de.useInsertionEffect(()=>{c&&h.current&&c.update(n,a)});const p=n[cS],v=de.useRef(!!p&&!((y=window.MotionHandoffIsComplete)!=null&&y.call(window,p))&&((m=window.MotionHasOptimisedAnimation)==null?void 0:m.call(window,p)));return fA(()=>{c&&(h.current=!0,window.MotionIsMounted=!0,c.updateFeatures(),im.render(c.render),v.current&&c.animationState&&c.animationState.animateChanges())}),de.useEffect(()=>{c&&(!v.current&&c.animationState&&c.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var d;(d=window.MotionHandoffMarkAsComplete)==null||d.call(window,p)}),v.current=!1))}),c}function x1(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u,layoutCrossfade:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:dS(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&zs(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:c,layoutScroll:l,layoutRoot:u})}function dS(t){if(t)return t.options.allowProjection!==!1?t.projection:dS(t.parent)}function S1({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&u1(t);function s(a,l){let u;const c={...de.useContext(oS),...a,layoutId:M1(a)},{isStatic:f}=c,h=m1(a),p=i(a,f);if(!f&&Fp){E1();const v=T1(c);u=v.MeasureLayout,h.visualElement=y1(r,p,c,e,v.ProjectionNode)}return I.jsxs(hc.Provider,{value:h,children:[u&&h.visualElement?I.jsx(u,{visualElement:h.visualElement,...c}):null,n(r,a,v1(p,h.visualElement,l),p,f,h.visualElement)]})}s.displayName=`motion.${typeof r=="string"?r:`create(${r.displayName??r.name??""})`}`;const o=de.forwardRef(s);return o[g1]=r,o}function M1({layoutId:t}){const e=de.useContext(mx).id;return e&&t!==void 0?e+"-"+t:t}function E1(t,e){de.useContext(aS).strict}function T1(t){const{drag:e,layout:n}=lo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const Pa={};function A1(t){for(const e in t)Pa[e]=t[e],jp(e)&&(Pa[e].isCSSVariable=!0)}function hS(t,{layout:e,layoutId:n}){return xo.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Pa[t]||t==="opacity")}const w1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},C1=yo.length;function R1(t,e,n){let i="",r=!0;for(let s=0;s<C1;s++){const o=yo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=tS(a,nm[o]);if(!l){r=!1;const c=w1[o]||o;i+=`${c}(${u}) `}n&&(e[o]=u)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function lm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const u=e[l];if(xo.has(l)){o=!0;continue}else if(jp(l)){r[l]=u;continue}else{const c=tS(u,nm[l]);l.startsWith("origin")?(a=!0,s[l]=c):i[l]=c}}if(e.transform||(o||n?i.transform=R1(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;i.transformOrigin=`${l} ${u} ${c}`}}const um=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function pS(t,e,n){for(const i in e)!$t(e[i])&&!hS(i,n)&&(t[i]=e[i])}function b1({transformTemplate:t},e){return de.useMemo(()=>{const n=um();return lm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function P1(t,e){const n=t.style||{},i={};return pS(i,n,t),Object.assign(i,b1(t,e)),i}function D1(t,e){const n={},i=P1(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const L1={offset:"stroke-dashoffset",array:"stroke-dasharray"},I1={offset:"strokeDashoffset",array:"strokeDasharray"};function N1(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?L1:I1;t[s.offset]=Re.transform(-i);const o=Re.transform(e),a=Re.transform(n);t[s.array]=`${o} ${a}`}function mS(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,u,c){if(lm(t,a,u),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:h}=t;f.transform&&(h.transform=f.transform,delete f.transform),(h.transform||f.transformOrigin)&&(h.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),h.transform&&(h.transformBox=(c==null?void 0:c.transformBox)??"fill-box",delete f.transformBox),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),r!==void 0&&N1(f,r,s,o,!1)}const gS=()=>({...um(),attrs:{}}),vS=t=>typeof t=="string"&&t.toLowerCase()==="svg";function U1(t,e,n,i){const r=de.useMemo(()=>{const s=gS();return mS(s,e,vS(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};pS(s,t.style,t),r.style={...s,...r.style}}return r}const F1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function cm(t){return typeof t!="string"||t.includes("-")?!1:!!(F1.indexOf(t)>-1||/[A-Z]/u.test(t))}function O1(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(cm(n)?U1:D1)(i,s,o,n),u=d1(i,typeof n=="string",t),c=n!==de.Fragment?{...u,...l,ref:r}:{},{children:f}=i,h=de.useMemo(()=>$t(f)?f.get():f,[f]);return de.createElement(n,{...c,children:h})}}function fv(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function fm(t,e,n,i){if(typeof e=="function"){const[r,s]=fv(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=fv(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function ou(t){return $t(t)?t.get():t}function B1({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:k1(n,i,r,t),renderState:e()}}const _S=t=>(e,n)=>{const i=de.useContext(hc),r=de.useContext(Op),s=()=>B1(t,e,i,r);return n?s():cA(s)};function k1(t,e,n,i){const r={},s=i(t,{});for(const h in s)r[h]=ou(s[h]);let{initial:o,animate:a}=t;const l=mc(t),u=uS(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const f=c?a:o;if(f&&typeof f!="boolean"&&!pc(f)){const h=Array.isArray(f)?f:[f];for(let p=0;p<h.length;p++){const v=fm(t,h[p]);if(v){const{transitionEnd:y,transition:m,...d}=v;for(const g in d){let _=d[g];if(Array.isArray(_)){const x=c?_.length-1:0;_=_[x]}_!==null&&(r[g]=_)}for(const g in y)r[g]=y[g]}}}return r}function dm(t,e,n){var s;const{style:i}=t,r={};for(const o in i)($t(i[o])||e.style&&$t(e.style[o])||hS(o,t)||((s=n==null?void 0:n.getValue(o))==null?void 0:s.liveStyle)!==void 0)&&(r[o]=i[o]);return r}const V1={useVisualState:_S({scrapeMotionValuesFromProps:dm,createRenderState:um})};function yS(t,e,n){const i=dm(t,e,n);for(const r in t)if($t(t[r])||$t(e[r])){const s=yo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}const z1={useVisualState:_S({scrapeMotionValuesFromProps:yS,createRenderState:gS})};function H1(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...cm(i)?z1:V1,preloadedFeatures:t,useRender:O1(r),createVisualElement:e,Component:i};return S1(o)}}function Da(t,e,n){const i=t.getProps();return fm(i,e,n!==void 0?n:i.custom,t)}const Xd=t=>Array.isArray(t);function G1(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,ao(n))}function W1(t){return Xd(t)?t[t.length-1]||0:t}function j1(t,e){const n=Da(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=W1(s[o]);G1(t,o,a)}}function X1(t){return!!($t(t)&&t.add)}function Yd(t,e){const n=t.getValue("willChange");if(X1(n))return n.add(e);if(!n&&ki.WillChange){const i=new ki.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function xS(t){return t.props[cS]}const Y1=t=>t!==null;function q1(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(Y1),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return r[s]}const K1={type:"spring",stiffness:500,damping:25,restSpeed:10},$1=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Z1={type:"keyframes",duration:.8},Q1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},J1=(t,{keyframes:e})=>e.length>2?Z1:xo.has(t)?t.startsWith("scale")?$1(e[1]):K1:Q1;function eC({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const hm=(t,e,n,i={},r,s)=>o=>{const a=tm(i,t)||{},l=a.delay||i.delay||0;let{elapsed:u=0}=i;u=u-mi(l);const c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};eC(a)||Object.assign(c,J1(t,c)),c.duration&&(c.duration=mi(c.duration)),c.repeatDelay&&(c.repeatDelay=mi(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let f=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(f=!0)),(ki.instantAnimations||ki.skipAnimations)&&(f=!0,c.duration=0,c.delay=0),c.allowFlatten=!a.type&&!a.ease,f&&!s&&e.get()!==void 0){const h=q1(c.keyframes,a);if(h!==void 0){vt.update(()=>{c.onUpdate(h),c.onComplete()});return}}return a.isSync?new Jp(c):new Ow(c)};function tC({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function SS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=e;i&&(s=i);const l=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const c in a){const f=t.getValue(c,t.latestValues[c]??null),h=a[c];if(h===void 0||u&&tC(u,c))continue;const p={delay:n,...tm(s||{},c)},v=f.get();if(v!==void 0&&!f.isAnimating&&!Array.isArray(h)&&h===v&&!p.velocity)continue;let y=!1;if(window.MotionHandoffAnimation){const d=xS(t);if(d){const g=window.MotionHandoffAnimation(d,c,vt);g!==null&&(p.startTime=g,y=!0)}}Yd(t,c),f.start(hm(c,f,h,t.shouldReduceMotion&&$x.has(c)?{type:!1}:p,t,y));const m=f.animation;m&&l.push(m)}return o&&Promise.all(l).then(()=>{vt.update(()=>{o&&j1(t,o)})}),l}function qd(t,e,n={}){var l;const i=Da(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(SS(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:h}=r;return nC(t,e,c+u,f,h,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[u,c]=a==="beforeChildren"?[s,o]:[o,s];return u().then(()=>c())}else return Promise.all([s(),o(n.delay)])}function nC(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>a-u*i;return Array.from(t.variantChildren).sort(iC).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(qd(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function iC(t,e){return t.sortNodePosition(e)}function rC(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>qd(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=qd(t,e,n);else{const r=typeof e=="function"?Da(t,e,n.custom):e;i=Promise.all(SS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}function MS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const sC=om.length;function ES(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?ES(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<sC;n++){const i=om[n],r=t.props[i];(ba(r)||r===!1)&&(e[i]=r)}return e}const oC=[...sm].reverse(),aC=sm.length;function lC(t){return e=>Promise.all(e.map(({animation:n,options:i})=>rC(t,n,i)))}function uC(t){let e=lC(t),n=dv(),i=!0;const r=l=>(u,c)=>{var h;const f=Da(t,c,l==="exit"?(h=t.presenceContext)==null?void 0:h.custom:void 0);if(f){const{transition:p,transitionEnd:v,...y}=f;u={...u,...y,...v}}return u};function s(l){e=l(t)}function o(l){const{props:u}=t,c=ES(t.parent)||{},f=[],h=new Set;let p={},v=1/0;for(let m=0;m<aC;m++){const d=oC[m],g=n[d],_=u[d]!==void 0?u[d]:c[d],x=ba(_),A=d===l?g.isActive:null;A===!1&&(v=m);let C=_===c[d]&&_!==u[d]&&x;if(C&&i&&t.manuallyAnimateOnMount&&(C=!1),g.protectedKeys={...p},!g.isActive&&A===null||!_&&!g.prevProp||pc(_)||typeof _=="boolean")continue;const w=cC(g.prevProp,_);let b=w||d===l&&g.isActive&&!C&&x||m>v&&x,T=!1;const S=Array.isArray(_)?_:[_];let P=S.reduce(r(d),{});A===!1&&(P={});const{prevResolvedValues:H={}}=g,k={...H,...P},K=W=>{b=!0,h.has(W)&&(T=!0,h.delete(W)),g.needsAnimating[W]=!0;const L=t.getValue(W);L&&(L.liveStyle=!1)};for(const W in k){const L=P[W],j=H[W];if(p.hasOwnProperty(W))continue;let Q=!1;Xd(L)&&Xd(j)?Q=!MS(L,j):Q=L!==j,Q?L!=null?K(W):h.add(W):L!==void 0&&h.has(W)?K(W):g.protectedKeys[W]=!0}g.prevProp=_,g.prevResolvedValues=P,g.isActive&&(p={...p,...P}),i&&t.blockInitialAnimation&&(b=!1),b&&(!(C&&w)||T)&&f.push(...S.map(W=>({animation:W,options:{type:d}})))}if(h.size){const m={};if(typeof u.initial!="boolean"){const d=Da(t,Array.isArray(u.initial)?u.initial[0]:u.initial);d&&d.transition&&(m.transition=d.transition)}h.forEach(d=>{const g=t.getBaseTarget(d),_=t.getValue(d);_&&(_.liveStyle=!0),m[d]=g??null}),f.push({animation:m})}let y=!!f.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(f):Promise.resolve()}function a(l,u){var f;if(n[l].isActive===u)return Promise.resolve();(f=t.variantChildren)==null||f.forEach(h=>{var p;return(p=h.animationState)==null?void 0:p.setActive(l,u)}),n[l].isActive=u;const c=o(l);for(const h in n)n[h].protectedKeys={};return c}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=dv(),i=!0}}}function cC(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!MS(e,t):!1}function Rr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function dv(){return{animate:Rr(!0),whileInView:Rr(),whileHover:Rr(),whileTap:Rr(),whileDrag:Rr(),whileFocus:Rr(),exit:Rr()}}class Ar{constructor(e){this.isMounted=!1,this.node=e}update(){}}class fC extends Ar{constructor(e){super(e),e.animationState||(e.animationState=uC(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();pc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let dC=0;class hC extends Ar{constructor(){super(...arguments),this.id=dC++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const pC={animation:{Feature:fC},exit:{Feature:hC}};function La(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Ya(t){return{point:{x:t.pageX,y:t.pageY}}}const mC=t=>e=>rm(e)&&t(e,Ya(e));function oa(t,e,n,i){return La(t,e,mC(n),i)}function TS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function gC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function vC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}const AS=1e-4,_C=1-AS,yC=1+AS,wS=.01,xC=0-wS,SC=0+wS;function nn(t){return t.max-t.min}function MC(t,e,n){return Math.abs(t-e)<=n}function hv(t,e,n,i=.5){t.origin=i,t.originPoint=mt(e.min,e.max,t.origin),t.scale=nn(n)/nn(e),t.translate=mt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=_C&&t.scale<=yC||isNaN(t.scale))&&(t.scale=1),(t.translate>=xC&&t.translate<=SC||isNaN(t.translate))&&(t.translate=0)}function aa(t,e,n,i){hv(t.x,e.x,n.x,i?i.originX:void 0),hv(t.y,e.y,n.y,i?i.originY:void 0)}function pv(t,e,n){t.min=n.min+e.min,t.max=t.min+nn(e)}function EC(t,e,n){pv(t.x,e.x,n.x),pv(t.y,e.y,n.y)}function mv(t,e,n){t.min=e.min-n.min,t.max=t.min+nn(e)}function la(t,e,n){mv(t.x,e.x,n.x),mv(t.y,e.y,n.y)}const gv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Hs=()=>({x:gv(),y:gv()}),vv=()=>({min:0,max:0}),At=()=>({x:vv(),y:vv()});function Ln(t){return[t("x"),t("y")]}function ef(t){return t===void 0||t===1}function Kd({scale:t,scaleX:e,scaleY:n}){return!ef(t)||!ef(e)||!ef(n)}function Or(t){return Kd(t)||CS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function CS(t){return _v(t.x)||_v(t.y)}function _v(t){return t&&t!=="0%"}function Gu(t,e,n){const i=t-n,r=e*i;return n+r}function yv(t,e,n,i,r){return r!==void 0&&(t=Gu(t,r,i)),Gu(t,n,i)+e}function $d(t,e=0,n=1,i,r){t.min=yv(t.min,e,n,i,r),t.max=yv(t.max,e,n,i,r)}function RS(t,{x:e,y:n}){$d(t.x,e.translate,e.scale,e.originPoint),$d(t.y,n.translate,n.scale,n.originPoint)}const xv=.999999999999,Sv=1.0000000000001;function TC(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ws(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,RS(t,o)),i&&Or(s.latestValues)&&Ws(t,s.latestValues))}e.x<Sv&&e.x>xv&&(e.x=1),e.y<Sv&&e.y>xv&&(e.y=1)}function Gs(t,e){t.min=t.min+e,t.max=t.max+e}function Mv(t,e,n,i,r=.5){const s=mt(t.min,t.max,r);$d(t,e,n,s,i)}function Ws(t,e){Mv(t.x,e.x,e.scaleX,e.scale,e.originX),Mv(t.y,e.y,e.scaleY,e.scale,e.originY)}function bS(t,e){return TS(vC(t.getBoundingClientRect(),e))}function AC(t,e,n){const i=bS(t,n),{scroll:r}=e;return r&&(Gs(i.x,r.offset.x),Gs(i.y,r.offset.y)),i}const PS=({current:t})=>t?t.ownerDocument.defaultView:null,Ev=(t,e)=>Math.abs(t-e);function wC(t,e){const n=Ev(t.x,e.x),i=Ev(t.y,e.y);return Math.sqrt(n**2+i**2)}class DS{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=nf(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=wC(f.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:v}=f,{timestamp:y}=Vt;this.history.push({...v,timestamp:y});const{onStart:m,onMove:d}=this.handlers;h||(m&&m(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),d&&d(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=tf(h,this.transformPagePoint),vt.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:p,onSessionEnd:v,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=nf(f.type==="pointercancel"?this.lastMoveEventInfo:tf(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,m),v&&v(f,m)},!rm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Ya(e),a=tf(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=Vt;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(e,nf(a,this.history)),this.removeListeners=Wa(oa(this.contextWindow,"pointermove",this.handlePointerMove),oa(this.contextWindow,"pointerup",this.handlePointerUp),oa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),_r(this.updatePoint)}}function tf(t,e){return e?{point:e(t.point)}:t}function Tv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function nf({point:t},e){return{point:t,delta:Tv(t,LS(e)),offset:Tv(t,CC(e)),velocity:RC(e,.1)}}function CC(t){return t[0]}function LS(t){return t[t.length-1]}function RC(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=LS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>mi(e)));)n--;if(!i)return{x:0,y:0};const s=gi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function bC(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?mt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?mt(n,t,i.max):Math.min(t,n)),t}function Av(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function PC(t,{top:e,left:n,bottom:i,right:r}){return{x:Av(t.x,n,r),y:Av(t.y,e,i)}}function wv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function DC(t,e){return{x:wv(t.x,e.x),y:wv(t.y,e.y)}}function LC(t,e){let n=.5;const i=nn(t),r=nn(e);return r>i?n=wa(e.min,e.max-i,t.min):i>r&&(n=wa(t.min,t.max-r,e.min)),Bi(0,1,n)}function IC(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Zd=.35;function NC(t=Zd){return t===!1?t=0:t===!0&&(t=Zd),{x:Cv(t,"left","right"),y:Cv(t,"top","bottom")}}function Cv(t,e,n){return{min:Rv(t,e),max:Rv(t,n)}}function Rv(t,e){return typeof t=="number"?t:t[e]||0}const UC=new WeakMap;class FC{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=At(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ya(c).point)},s=(c,f)=>{const{drag:h,dragPropagation:p,onDragStart:v}=this.getProps();if(h&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Jw(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ln(m=>{let d=this.getAxisMotionValue(m).get()||0;if(vi.test(d)){const{projection:g}=this.visualElement;if(g&&g.layout){const _=g.layout.layoutBox[m];_&&(d=nn(_)*(parseFloat(d)/100))}}this.originPoint[m]=d}),v&&vt.postRender(()=>v(c,f)),Yd(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(c,f)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:v,onDrag:y}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:m}=f;if(p&&this.currentDirection===null){this.currentDirection=OC(m),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),y&&y(c,f)},a=(c,f)=>this.stop(c,f),l=()=>Ln(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)==null?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new DS(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:PS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&vt.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!yl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=bC(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&zs(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=PC(i.layoutBox,e):this.constraints=!1,this.elastic=NC(n),r!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Ln(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=IC(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!zs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=AC(i,r.root,this.visualElement.getTransformPagePoint());let o=DC(r.layout.layoutBox,s);if(n){const a=n(gC(o));this.hasMutatedConstraints=!!a,a&&(o=TS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Ln(c=>{if(!yl(c,n,this.currentDirection))return;let f=l&&l[c]||{};o&&(f={min:0,max:0});const h=r?200:1e6,p=r?40:1e7,v={type:"inertia",velocity:i?e[c]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Yd(this.visualElement,e),i.start(hm(e,i,0,n,this.visualElement,!1))}stopAnimation(){Ln(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Ln(e=>{var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Ln(n=>{const{drag:i}=this.getProps();if(!yl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-mt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!zs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Ln(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=LC({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Ln(o=>{if(!yl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(mt(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;UC.set(this.visualElement,this);const e=this.visualElement.current,n=oa(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();zs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),vt.read(i);const o=La(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Ln(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Zd,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function yl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function OC(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class BC extends Ar{constructor(e){super(e),this.removeGroupControls=Vn,this.removeListeners=Vn,this.controls=new FC(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Vn}unmount(){this.removeGroupControls(),this.removeListeners()}}const bv=t=>(e,n)=>{t&&vt.postRender(()=>t(e,n))};class kC extends Ar{constructor(){super(...arguments),this.removePointerDownListener=Vn}onPointerDown(e){this.session=new DS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:PS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:bv(e),onStart:bv(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&vt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=oa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const au={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Pv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Io={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Re.test(t))t=parseFloat(t);else return t;const n=Pv(t,e.target.x),i=Pv(t,e.target.y);return`${n}% ${i}%`}},VC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=yr.parse(t);if(r.length>5)return i;const s=yr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=mt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}};class zC extends de.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;A1(HC),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),au.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||vt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),im.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function IS(t){const[e,n]=l1(),i=de.useContext(mx);return I.jsx(zC,{...t,layoutGroup:i,switchLayoutGroup:de.useContext(fS),isPresent:e,safeToRemove:n})}const HC={borderRadius:{...Io,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Io,borderTopRightRadius:Io,borderBottomLeftRadius:Io,borderBottomRightRadius:Io,boxShadow:VC};function GC(t,e,n){const i=$t(t)?t:ao(t);return i.start(hm("",i,e,n)),i.animation}const WC=(t,e)=>t.depth-e.depth;class jC{constructor(){this.children=[],this.isDirty=!1}add(e){Bp(this.children,e),this.isDirty=!0}remove(e){kp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(WC),this.isDirty=!1,this.children.forEach(e)}}function XC(t,e){const n=hn.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(_r(i),t(s-e))};return vt.setup(i,!0),()=>_r(i)}const NS=["TopLeft","TopRight","BottomLeft","BottomRight"],YC=NS.length,Dv=t=>typeof t=="string"?parseFloat(t):t,Lv=t=>typeof t=="number"||Re.test(t);function qC(t,e,n,i,r,s){r?(t.opacity=mt(0,n.opacity??1,KC(i)),t.opacityExit=mt(e.opacity??1,0,$C(i))):s&&(t.opacity=mt(e.opacity??1,n.opacity??1,i));for(let o=0;o<YC;o++){const a=`border${NS[o]}Radius`;let l=Iv(e,a),u=Iv(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Lv(l)===Lv(u)?(t[a]=Math.max(mt(Dv(l),Dv(u),i),0),(vi.test(u)||vi.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=mt(e.rotate||0,n.rotate||0,i))}function Iv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const KC=US(0,.5,wx),$C=US(.5,.95,Vn);function US(t,e,n){return i=>i<t?0:i>e?1:n(wa(t,e,i))}function Nv(t,e){t.min=e.min,t.max=e.max}function Pn(t,e){Nv(t.x,e.x),Nv(t.y,e.y)}function Uv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Fv(t,e,n,i,r){return t-=e,t=Gu(t,1/n,i),r!==void 0&&(t=Gu(t,1/r,i)),t}function ZC(t,e=0,n=1,i=.5,r,s=t,o=t){if(vi.test(e)&&(e=parseFloat(e),e=mt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=mt(s.min,s.max,i);t===s&&(a-=e),t.min=Fv(t.min,e,n,a,r),t.max=Fv(t.max,e,n,a,r)}function Ov(t,e,[n,i,r],s,o){ZC(t,e[n],e[i],e[r],e.scale,s,o)}const QC=["x","scaleX","originX"],JC=["y","scaleY","originY"];function Bv(t,e,n,i){Ov(t.x,e,QC,n?n.x:void 0,i?i.x:void 0),Ov(t.y,e,JC,n?n.y:void 0,i?i.y:void 0)}function kv(t){return t.translate===0&&t.scale===1}function FS(t){return kv(t.x)&&kv(t.y)}function Vv(t,e){return t.min===e.min&&t.max===e.max}function eR(t,e){return Vv(t.x,e.x)&&Vv(t.y,e.y)}function zv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function OS(t,e){return zv(t.x,e.x)&&zv(t.y,e.y)}function Hv(t){return nn(t.x)/nn(t.y)}function Gv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class tR{constructor(){this.members=[]}add(e){Bp(this.members,e),e.scheduleRender()}remove(e){if(kp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function nR(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:f,rotateY:h,skewX:p,skewY:v}=n;u&&(i=`perspective(${u}px) ${i}`),c&&(i+=`rotate(${c}deg) `),f&&(i+=`rotateX(${f}deg) `),h&&(i+=`rotateY(${h}deg) `),p&&(i+=`skewX(${p}deg) `),v&&(i+=`skewY(${v}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const rf=["","X","Y","Z"],iR={visibility:"hidden"},rR=1e3;let sR=0;function sf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function BS(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=xS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",vt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&BS(i)}function kS({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=sR++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(lR),this.nodes.forEach(hR),this.nodes.forEach(pR),this.nodes.forEach(uR)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new jC)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Hp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=sS(o)&&!s1(o),this.instance=o;const{layoutId:a,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let c;const f=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,c&&c(),c=XC(f,250),au.hasAnimatedSinceResize&&(au.hasAnimatedSinceResize=!1,this.nodes.forEach(jv))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&u&&(a||l)&&this.addEventListener("didUpdate",({delta:c,hasLayoutChanged:f,hasRelativeLayoutChanged:h,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||u.getDefaultTransition()||yR,{onLayoutAnimationStart:y,onLayoutAnimationComplete:m}=u.getProps(),d=!this.targetLayout||!OS(this.targetLayout,p),g=!f&&h;if(this.options.layoutRoot||this.resumeFrom||g||f&&(d||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const _={...tm(v,"layout"),onPlay:y,onComplete:m};(u.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_),this.setAnimationOrigin(c,g)}else f||jv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),_r(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(mR),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&BS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Wv);return}this.isUpdating||this.nodes.forEach(fR),this.isUpdating=!1,this.nodes.forEach(dR),this.nodes.forEach(oR),this.nodes.forEach(aR),this.clearAllSnapshots();const a=hn.now();Vt.delta=Bi(0,1e3/60,a-Vt.timestamp),Vt.timestamp=a,Vt.isProcessing=!0,Kc.update.process(Vt),Kc.preRender.process(Vt),Kc.render.process(Vt),Vt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,im.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(cR),this.sharedNodes.forEach(gR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,vt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){vt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!nn(this.snapshot.measuredBox.x)&&!nn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=At(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!FS(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&this.instance&&(a||Or(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),xR(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:o}=this.options;if(!o)return At();const a=o.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(SR))){const{scroll:c}=this.root;c&&(Gs(a.x,c.offset.x),Gs(a.y,c.offset.y))}return a}removeElementScroll(o){var l;const a=At();if(Pn(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:f,options:h}=c;c!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&Pn(a,o),Gs(a.x,f.offset.x),Gs(a.y,f.offset.y))}return a}applyTransform(o,a=!1){const l=At();Pn(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Ws(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Or(c.latestValues)&&Ws(l,c.latestValues)}return Or(this.latestValues)&&Ws(l,this.latestValues),l}removeTransform(o){const a=At();Pn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Or(u.latestValues))continue;Kd(u.latestValues)&&u.updateSnapshot();const c=At(),f=u.measurePageBox();Pn(c,f),Bv(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Or(this.latestValues)&&Bv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Vt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var h;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(h=this.parent)!=null&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:c,layoutId:f}=this.options;if(!(!this.layout||!(c||f))){if(this.resolvedRelativeTargetAt=Vt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=At(),this.relativeTargetOrigin=At(),la(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Pn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=At(),this.targetWithTransforms=At()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),EC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Pn(this.target,this.layout.layoutBox),RS(this.target,this.targetDelta)):Pn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=At(),this.relativeTargetOrigin=At(),la(this.relativeTargetOrigin,this.target,p.target),Pn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Kd(this.parent.latestValues)||CS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var v;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Vt.timestamp&&(l=!1),l)return;const{layout:u,layoutId:c}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||c))return;Pn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,h=this.treeScale.y;TC(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=At());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Uv(this.prevProjectionDelta.x,this.projectionDelta.x),Uv(this.prevProjectionDelta.y,this.projectionDelta.y)),aa(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==h||!Gv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Gv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Hs(),this.projectionDelta=Hs(),this.projectionDeltaWithTransform=Hs()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Hs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=At(),p=l?l.source:void 0,v=this.layout?this.layout.source:void 0,y=p!==v,m=this.getStack(),d=!m||m.members.length<=1,g=!!(y&&!d&&this.options.crossfade===!0&&!this.path.some(_R));this.animationProgress=0;let _;this.mixTargetDelta=x=>{const A=x/1e3;Xv(f.x,o.x,A),Xv(f.y,o.y,A),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(la(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),vR(this.relativeTarget,this.relativeTargetOrigin,h,A),_&&eR(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=At()),Pn(_,this.relativeTarget)),y&&(this.animationValues=c,qC(c,u,this.latestValues,A,g,d)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=A},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,u;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(u=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||u.stop(),this.pendingAnimation&&(_r(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=vt.update(()=>{au.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ao(0)),this.currentAnimation=GC(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:c=>{this.mixTargetDelta(c),o.onUpdate&&o.onUpdate(c)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(rR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&VS(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||At();const f=nn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const h=nn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}Pn(a,l),Ws(a,c),aa(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new tR),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&sf("z",o,u,this.animationValues);for(let c=0;c<rf.length;c++)sf(`rotate${rf[c]}`,o,u,this.animationValues),sf(`skew${rf[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}getProjectionStyles(o){if(!this.instance||this.isSVG)return;if(!this.isVisible)return iR;const a={visibility:""},l=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,a.opacity="",a.pointerEvents=ou(o==null?void 0:o.pointerEvents)||"",a.transform=l?l(this.latestValues,""):"none",a;const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){const p={};return this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=ou(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Or(this.latestValues)&&(p.transform=l?l({},""):"none",this.hasProjected=!1),p}const c=u.animationValues||u.latestValues;this.applyTransformsToTarget(),a.transform=nR(this.projectionDeltaWithTransform,this.treeScale,c),l&&(a.transform=l(c,a.transform));const{x:f,y:h}=this.projectionDelta;a.transformOrigin=`${f.origin*100}% ${h.origin*100}% 0`,u.animationValues?a.opacity=u===this?c.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:c.opacityExit:a.opacity=u===this?c.opacity!==void 0?c.opacity:"":c.opacityExit!==void 0?c.opacityExit:0;for(const p in Pa){if(c[p]===void 0)continue;const{correct:v,applyTo:y,isCSSVariable:m}=Pa[p],d=a.transform==="none"?c[p]:v(c[p],u);if(y){const g=y.length;for(let _=0;_<g;_++)a[y[_]]=d}else m?this.options.visualElement.renderState.vars[p]=d:a[p]=d}return this.options.layoutId&&(a.pointerEvents=u===this?ou(o==null?void 0:o.pointerEvents)||"":"none"),a}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Wv),this.root.sharedNodes.clear()}}}function oR(t){t.updateLayout()}function aR(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;s==="size"?Ln(f=>{const h=o?e.measuredBox[f]:e.layoutBox[f],p=nn(h);h.min=i[f].min,h.max=h.min+p}):VS(s,e.layoutBox,i)&&Ln(f=>{const h=o?e.measuredBox[f]:e.layoutBox[f],p=nn(i[f]);h.max=h.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=Hs();aa(a,i,e.layoutBox);const l=Hs();o?aa(l,t.applyTransform(r,!0),e.measuredBox):aa(l,i,e.layoutBox);const u=!FS(a);let c=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:p}=f;if(h&&p){const v=At();la(v,e.layoutBox,h.layoutBox);const y=At();la(y,i,p.layoutBox),OS(v,y)||(c=!0),f.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=v,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeLayoutChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function lR(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function uR(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function cR(t){t.clearSnapshot()}function Wv(t){t.clearMeasurements()}function fR(t){t.isLayoutDirty=!1}function dR(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function jv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function hR(t){t.resolveTargetDelta()}function pR(t){t.calcProjection()}function mR(t){t.resetSkewAndRotation()}function gR(t){t.removeLeadSnapshot()}function Xv(t,e,n){t.translate=mt(e.translate,0,n),t.scale=mt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Yv(t,e,n,i){t.min=mt(e.min,n.min,i),t.max=mt(e.max,n.max,i)}function vR(t,e,n,i){Yv(t.x,e.x,n.x,i),Yv(t.y,e.y,n.y,i)}function _R(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const yR={duration:.45,ease:[.4,0,.1,1]},qv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Kv=qv("applewebkit/")&&!qv("chrome/")?Math.round:Vn;function $v(t){t.min=Kv(t.min),t.max=Kv(t.max)}function xR(t){$v(t.x),$v(t.y)}function VS(t,e,n){return t==="position"||t==="preserve-aspect"&&!MC(Hv(e),Hv(n),.2)}function SR(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const MR=kS({attachResizeListener:(t,e)=>La(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),of={current:void 0},zS=kS({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!of.current){const t=new MR({});t.mount(window),t.setOptions({layoutScroll:!0}),of.current=t}return of.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),ER={pan:{Feature:kC},drag:{Feature:BC,ProjectionNode:zS,MeasureLayout:IS}};function Zv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&vt.postRender(()=>s(e,Ya(e)))}class TR extends Ar{mount(){const{current:e}=this.node;e&&(this.unmount=e1(e,(n,i)=>(Zv(this.node,i,"Start"),r=>Zv(this.node,r,"End"))))}unmount(){}}class AR extends Ar{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Wa(La(this.node.current,"focus",()=>this.onFocus()),La(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Qv(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&vt.postRender(()=>s(e,Ya(e)))}class wR extends Ar{mount(){const{current:e}=this.node;e&&(this.unmount=r1(e,(n,i)=>(Qv(this.node,i,"Start"),(r,{success:s})=>Qv(this.node,r,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Qd=new WeakMap,af=new WeakMap,CR=t=>{const e=Qd.get(t.target);e&&e(t)},RR=t=>{t.forEach(CR)};function bR({root:t,...e}){const n=t||document;af.has(n)||af.set(n,{});const i=af.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(RR,{root:t,...e})),i[r]}function PR(t,e,n){const i=bR(e);return Qd.set(t,n),i.observe(t),()=>{Qd.delete(t),i.unobserve(t)}}const DR={some:0,all:1};class LR extends Ar{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:DR[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),h=u?c:f;h&&h(l)};return PR(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(IR(e,n))&&this.startObserver()}unmount(){}}function IR({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const NR={inView:{Feature:LR},tap:{Feature:wR},focus:{Feature:AR},hover:{Feature:TR}},UR={layout:{ProjectionNode:zS,MeasureLayout:IS}},Jd={current:null},HS={current:!1};function FR(){if(HS.current=!0,!!Fp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Jd.current=t.matches;t.addListener(e),e()}else Jd.current=!1}const OR=new WeakMap;function BR(t,e,n){for(const i in e){const r=e[i],s=n[i];if($t(r))t.addValue(i,r);else if($t(s))t.addValue(i,ao(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,ao(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Jv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class kR{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=em,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=hn.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,vt.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=mc(n),this.isVariantNode=uS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in f){const p=f[h];l[h]!==void 0&&$t(p)&&p.set(l[h],!1)}}mount(e){this.current=e,OR.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),HS.current||FR(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Jd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),_r(this.notifyUpdate),_r(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=xo.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&vt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in lo){const n=lo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):At()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Jv.length;i++){const r=Jv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=BR(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=ao(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(gx(i)||_x(i))?i=parseFloat(i):!a1(i)&&yr.test(n)&&(i=eS(e,n)),this.setBaseTarget(e,$t(i)?i.get():i)),$t(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=fm(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!$t(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Hp),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class GS extends kR{constructor(){super(...arguments),this.KeyframeResolver=Kw}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;$t(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function WS(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}function VR(t){return window.getComputedStyle(t)}class zR extends GS{constructor(){super(...arguments),this.type="html",this.renderInstance=WS}readValueFromInstance(e,n){var i;if(xo.has(n))return(i=this.projection)!=null&&i.isProjecting?Vd(n):pw(e,n);{const r=VR(e),s=(jp(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return bS(e,n)}build(e,n,i){lm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return dm(e,n,i)}}const jS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function HR(t,e,n,i){WS(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(jS.has(r)?r:am(r),e.attrs[r])}class GR extends GS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=At}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(xo.has(n)){const i=Jx(n);return i&&i.default||0}return n=jS.has(n)?n:am(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return yS(e,n,i)}build(e,n,i){mS(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){HR(e,n,i,r)}mount(e){this.isSVGTag=vS(e.tagName),super.mount(e)}}const WR=(t,e)=>cm(t)?new GR(e):new zR(e,{allowProjection:t!==de.Fragment}),jR=H1({...pC,...NR,...ER,...UR},WR),Ve=h1(jR),XR=()=>I.jsx(I.Fragment,{children:I.jsxs("div",{id:"AboutMe",className:"about-section",children:[I.jsxs(Ve.div,{className:"about-content",initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.8,type:"spring"},children:[I.jsxs("h1",{children:[I.jsx("i",{className:"fa-regular fa-user"})," About Me"]}),I.jsxs("p",{children:["Hi, I'm ",I.jsx("b",{style:{color:"#4a90e2",fontSize:"1.2em"},children:"Ronit Raj"}),". I'm a web developer with a passion for creating dynamic and responsive web applications. With a strong background in the MERN stack and a keen eye for design, I enjoy bringing ideas to life in the browser. My journey in web development started with a curiosity for how websites are built, and it has evolved into a fulfilling career where I get to solve interesting problems every day."]})]}),I.jsx(Ve.div,{className:"about-image",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,type:"spring",stiffness:80,damping:11},children:I.jsx(Ve.img,{src:uA,alt:"Profile",draggable:"false",whileHover:{scale:1.03},transition:{type:"spring",stiffness:150}})})]})}),YR=()=>I.jsx(I.Fragment,{children:I.jsxs("div",{id:"Contact",className:"footer",children:[I.jsxs("div",{className:"footer-content",children:[I.jsxs("div",{className:"footer-ribbon",children:[I.jsx("div",{className:"ribbon-top",children:"Ronit Raj"}),I.jsx("div",{className:"ribbon-bottom",children:"A FULL-STACK DEVELOPER"})]}),I.jsxs("div",{className:"footer-icons",children:[I.jsx("p",{className:"footer-find-text",children:"You can find me here✌"}),I.jsxs("div",{className:"icon-links",children:[I.jsx("a",{href:"https://www.linkedin.com/in/hashtagronit/",target:"_blank",rel:"noopener noreferrer",children:I.jsx("i",{className:"fa-brands fa-linkedin footer-icon"})}),I.jsx("a",{href:"https://github.com/hashtagronit",target:"_blank",rel:"noopener noreferrer",children:I.jsx("i",{className:"fa-brands fa-github footer-icon"})}),I.jsx("a",{href:"https://www.instagram.com/hashtagronit",target:"_blank",rel:"noopener noreferrer",children:I.jsx("i",{className:"fab fa-instagram footer-icon"})}),I.jsx("a",{href:"https://codolio.com/profile/hashtagronit",target:"_blank",rel:"noopener noreferrer",children:I.jsx("i",{className:"fas fa-user footer-icon"})})]})]})]}),I.jsx("div",{className:"footer-border",children:I.jsx("p",{className:"footer-text",children:"2025 ❤️ © Designed and built by Ronit Raj."})})]})}),qR=()=>I.jsxs("div",{id:"Education",className:"education-section",children:[I.jsxs(Ve.h2,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1,ease:"easeOut"},children:[I.jsx("i",{className:"fa-solid fa-user-graduate"})," Education"]}),I.jsxs(Ve.div,{className:"education-item",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut",delay:.1},children:[I.jsxs("div",{className:"education-row",children:[I.jsx("span",{className:"institute",children:"Galgotias College Of Engineering and Technology"}),I.jsx("span",{className:"location",children:"Greater Noida, India"})]}),I.jsxs("div",{className:"education-row",children:[I.jsx("span",{className:"degree",children:"B.Tech in Computer Science Engineering"}),I.jsx("span",{className:"year",children:"2021 – 2025"})]})]}),I.jsxs(Ve.div,{className:"education-item",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut",delay:.3},children:[I.jsxs("div",{className:"education-row",children:[I.jsx("span",{className:"institute",children:"R L Bai Mem School"}),I.jsx("span",{className:"location",children:"Indira Nagar, Lucknow, India"})]}),I.jsxs("div",{className:"education-row",children:[I.jsx("span",{className:"degree",children:"12th Grade"}),I.jsx("span",{className:"year",children:" May 2020"})]})]}),I.jsxs(Ve.div,{className:"education-item",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut",delay:.4},children:[I.jsxs("div",{className:"education-row",children:[I.jsx("span",{className:"institute",children:"R L Bai Mem School"}),I.jsx("span",{className:"location",children:"Indira Nagar, Lucknow, India"})]}),I.jsxs("div",{className:"education-row",children:[I.jsx("span",{className:"degree",children:"10th Grade"}),I.jsx("span",{className:"year",children:"May 2018"})]})]})]});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pm="176",KR=0,e0=1,$R=2,XS=1,ZR=2,Ti=3,xr=0,sn=1,Ci=2,hr=0,Qs=1,t0=2,n0=3,i0=4,QR=5,Vr=100,JR=101,eb=102,tb=103,nb=104,ib=200,rb=201,sb=202,ob=203,eh=204,th=205,ab=206,lb=207,ub=208,cb=209,fb=210,db=211,hb=212,pb=213,mb=214,nh=0,ih=1,rh=2,uo=3,sh=4,oh=5,ah=6,lh=7,YS=0,gb=1,vb=2,pr=0,_b=1,yb=2,xb=3,Sb=4,Mb=5,Eb=6,Tb=7,qS=300,co=301,fo=302,uh=303,ch=304,gc=306,fh=1e3,Yr=1001,dh=1002,En=1003,Ab=1004,xl=1005,fi=1006,lf=1007,qr=1008,Vi=1009,KS=1010,$S=1011,Ia=1012,mm=1013,rs=1014,Pi=1015,qa=1016,gm=1017,vm=1018,Na=1020,ZS=35902,QS=1021,JS=1022,Jn=1023,Ua=1026,Fa=1027,eM=1028,_m=1029,tM=1030,ym=1031,xm=1033,lu=33776,uu=33777,cu=33778,fu=33779,hh=35840,ph=35841,mh=35842,gh=35843,vh=36196,_h=37492,yh=37496,xh=37808,Sh=37809,Mh=37810,Eh=37811,Th=37812,Ah=37813,wh=37814,Ch=37815,Rh=37816,bh=37817,Ph=37818,Dh=37819,Lh=37820,Ih=37821,du=36492,Nh=36494,Uh=36495,nM=36283,Fh=36284,Oh=36285,Bh=36286,wb=3200,Cb=3201,Rb=0,bb=1,tr="",In="srgb",ho="srgb-linear",Wu="linear",rt="srgb",cs=7680,r0=519,Pb=512,Db=513,Lb=514,iM=515,Ib=516,Nb=517,Ub=518,Fb=519,kh=35044,s0="300 es",Di=2e3,ju=2001;class So{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uf=Math.PI/180,Vh=180/Math.PI;function mr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function ze(t,e,n){return Math.max(e,Math.min(n,t))}function Ob(t,e){return(t%e+e)%e}function cf(t,e,n){return(1-n)*t+n*e}function ci(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function st(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ze(this.x,e.x,n.x),this.y=ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ze(this.x,e,n),this.y=ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],v=i[8],y=r[0],m=r[3],d=r[6],g=r[1],_=r[4],x=r[7],A=r[2],C=r[5],w=r[8];return s[0]=o*y+a*g+l*A,s[3]=o*m+a*_+l*C,s[6]=o*d+a*x+l*w,s[1]=u*y+c*g+f*A,s[4]=u*m+c*_+f*C,s[7]=u*d+c*x+f*w,s[2]=h*y+p*g+v*A,s[5]=h*m+p*_+v*C,s[8]=h*d+p*x+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,v=n*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ff.makeScale(e,n)),this}rotate(e){return this.premultiply(ff.makeRotation(-e)),this}translate(e,n){return this.premultiply(ff.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ff=new Fe;function rM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Oa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Bb(){const t=Oa("canvas");return t.style.display="block",t}const o0={};function hu(t){t in o0||(o0[t]=!0,console.warn(t))}function kb(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Vb(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zb(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const a0=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l0=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hb(){const t={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=Js(r.r),r.g=Js(r.g),r.b=Js(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?Wu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ho]:{primaries:e,whitePoint:i,transfer:Wu,toXYZ:a0,fromXYZ:l0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:a0,fromXYZ:l0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),t}const Ze=Hb();function Ii(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Js(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fs;class Gb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fs===void 0&&(fs=Oa("canvas")),fs.width=e.width,fs.height=e.height;const r=fs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Oa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ii(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ii(n[i]/255)*255):n[i]=Ii(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wb=0;class Sm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(df(r[o].image)):s.push(df(r[o]))}else s=df(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function df(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Gb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jb=0;class on extends So{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Yr,r=Yr,s=fi,o=qr,a=Jn,l=Vi,u=on.DEFAULT_ANISOTROPY,c=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=mr(),this.name="",this.source=new Sm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fh:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fh:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=qS;on.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],v=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+y)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,x=(p+1)/2,A=(d+1)/2,C=(c+h)/4,w=(f+y)/4,b=(v+m)/4;return _>x&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=w/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=b/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(f-y)*(f-y)+(h-c)*(h-c));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(f-y)/g,this.z=(h-c)/g,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ze(this.x,e.x,n.x),this.y=ze(this.y,e.y,n.y),this.z=ze(this.z,e.z,n.z),this.w=ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ze(this.x,e,n),this.y=ze(this.y,e,n),this.z=ze(this.z,e,n),this.w=ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xb extends So{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth?i.depth:1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Sm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends Xb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class sM extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yb extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ka{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(f!==y||l!==h||u!==p||c!==v){let m=1-a;const d=l*h+u*p+c*v+f*y,g=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const A=Math.sqrt(_),C=Math.atan2(A,d*g);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}const x=a*g;if(l=l*m+h*x,u=u*m+p*x,c=c*m+v*x,f=f*m+y*x,m===1-a){const A=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=A,u*=A,c*=A,f*=A}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+c*f+l*p-u*h,e[n+1]=l*v+c*h+u*f-a*p,e[n+2]=u*v+c*p+a*h-l*f,e[n+3]=c*v-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*v,this._y=u*p*f-h*c*v,this._z=u*c*v+h*p*f,this._w=u*c*f-h*p*v;break;case"YXZ":this._x=h*c*f+u*p*v,this._y=u*p*f-h*c*v,this._z=u*c*v-h*p*f,this._w=u*c*f+h*p*v;break;case"ZXY":this._x=h*c*f-u*p*v,this._y=u*p*f+h*c*v,this._z=u*c*v+h*p*f,this._w=u*c*f-h*p*v;break;case"ZYX":this._x=h*c*f-u*p*v,this._y=u*p*f+h*c*v,this._z=u*c*v-h*p*f,this._w=u*c*f+h*p*v;break;case"YZX":this._x=h*c*f+u*p*v,this._y=u*p*f+h*c*v,this._z=u*c*v-h*p*f,this._w=u*c*f-h*p*v;break;case"XZY":this._x=h*c*f-u*p*v,this._y=u*p*f-h*c*v,this._z=u*c*v+h*p*f,this._w=u*c*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(u0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(u0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ze(this.x,e.x,n.x),this.y=ze(this.y,e.y,n.y),this.z=ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ze(this.x,e,n),this.y=ze(this.y,e,n),this.z=ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hf.copy(this).projectOnVector(e),this.sub(hf)}reflect(e){return this.sub(hf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hf=new O,u0=new Ka;class $a{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sl.copy(i.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),Ml.subVectors(this.max,No),ds.subVectors(e.a,No),hs.subVectors(e.b,No),ps.subVectors(e.c,No),Wi.subVectors(hs,ds),ji.subVectors(ps,hs),br.subVectors(ds,ps);let n=[0,-Wi.z,Wi.y,0,-ji.z,ji.y,0,-br.z,br.y,Wi.z,0,-Wi.x,ji.z,0,-ji.x,br.z,0,-br.x,-Wi.y,Wi.x,0,-ji.y,ji.x,0,-br.y,br.x,0];return!pf(n,ds,hs,ps,Ml)||(n=[1,0,0,0,1,0,0,0,1],!pf(n,ds,hs,ps,Ml))?!1:(El.crossVectors(Wi,ji),n=[El.x,El.y,El.z],pf(n,ds,hs,ps,Ml))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new O,new O,new O,new O,new O,new O,new O,new O],Xn=new O,Sl=new $a,ds=new O,hs=new O,ps=new O,Wi=new O,ji=new O,br=new O,No=new O,Ml=new O,El=new O,Pr=new O;function pf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Pr.fromArray(t,s);const a=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),l=e.dot(Pr),u=n.dot(Pr),c=i.dot(Pr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const qb=new $a,Uo=new O,mf=new O;class vc{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):qb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(mf)),this.expandByPoint(Uo.copy(e.center).sub(mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new O,gf=new O,Tl=new O,Xi=new O,vf=new O,Al=new O,_f=new O;class oM{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,n),xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){gf.copy(e).add(n).multiplyScalar(.5),Tl.copy(n).sub(e).normalize(),Xi.copy(this.origin).sub(gf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Tl),a=Xi.dot(this.direction),l=-Xi.dot(Tl),u=Xi.lengthSq(),c=Math.abs(1-o*o);let f,h,p,v;if(c>0)if(f=o*l-a,h=o*a-l,v=s*c,f>=0)if(h>=-v)if(h<=v){const y=1/c;f*=y,h*=y,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(gf).addScaledVector(Tl,h),p}intersectSphere(e,n){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,n,i,r,s){vf.subVectors(n,e),Al.subVectors(i,e),_f.crossVectors(vf,Al);let o=this.direction.dot(_f),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const l=a*this.direction.dot(Al.crossVectors(Xi,Al));if(l<0)return null;const u=a*this.direction.dot(vf.cross(Xi));if(u<0||l+u>o)return null;const c=-a*Xi.dot(_f);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,o,a,l,u,c,f,h,p,v,y,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,h,p,v,y,m)}set(e,n,i,r,s,o,a,l,u,c,f,h,p,v,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ms.setFromMatrixColumn(e,0).length(),s=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,v=a*c,y=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+v*u,n[5]=h-y*u,n[9]=-a*l,n[2]=y-h*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,v=u*c,y=u*f;n[0]=h+y*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-v,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,v=u*c,y=u*f;n[0]=h-y*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*c,n[9]=y-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,v=a*c,y=a*f;n[0]=l*c,n[4]=v*u-p,n[8]=h*u+y,n[1]=l*f,n[5]=y*u+h,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,v=a*l,y=a*u;n[0]=l*c,n[4]=y-h*f,n[8]=v*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+v,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,p=o*u,v=a*l,y=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+y,n[5]=o*c,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*c,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kb,e,$b)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Yi.crossVectors(i,_n),Yi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Yi.crossVectors(i,_n)),Yi.normalize(),wl.crossVectors(_n,Yi),r[0]=Yi.x,r[4]=wl.x,r[8]=_n.x,r[1]=Yi.y,r[5]=wl.y,r[9]=_n.y,r[2]=Yi.z,r[6]=wl.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],v=i[2],y=i[6],m=i[10],d=i[14],g=i[3],_=i[7],x=i[11],A=i[15],C=r[0],w=r[4],b=r[8],T=r[12],S=r[1],P=r[5],H=r[9],k=r[13],K=r[2],Z=r[6],Y=r[10],W=r[14],L=r[3],j=r[7],Q=r[11],oe=r[15];return s[0]=o*C+a*S+l*K+u*L,s[4]=o*w+a*P+l*Z+u*j,s[8]=o*b+a*H+l*Y+u*Q,s[12]=o*T+a*k+l*W+u*oe,s[1]=c*C+f*S+h*K+p*L,s[5]=c*w+f*P+h*Z+p*j,s[9]=c*b+f*H+h*Y+p*Q,s[13]=c*T+f*k+h*W+p*oe,s[2]=v*C+y*S+m*K+d*L,s[6]=v*w+y*P+m*Z+d*j,s[10]=v*b+y*H+m*Y+d*Q,s[14]=v*T+y*k+m*W+d*oe,s[3]=g*C+_*S+x*K+A*L,s[7]=g*w+_*P+x*Z+A*j,s[11]=g*b+_*H+x*Y+A*Q,s[15]=g*T+_*k+x*W+A*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],v=e[3],y=e[7],m=e[11],d=e[15];return v*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+y*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-n*l*f+n*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],v=e[12],y=e[13],m=e[14],d=e[15],g=f*m*u-y*h*u+y*l*p-a*m*p-f*l*d+a*h*d,_=v*h*u-c*m*u-v*l*p+o*m*p+c*l*d-o*h*d,x=c*y*u-v*f*u+v*a*p-o*y*p-c*a*d+o*f*d,A=v*f*l-c*y*l-v*a*h+o*y*h+c*a*m-o*f*m,C=n*g+i*_+r*x+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=g*w,e[1]=(y*h*s-f*m*s-y*r*p+i*m*p+f*r*d-i*h*d)*w,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*d+i*l*d)*w,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*w,e[4]=_*w,e[5]=(c*m*s-v*h*s+v*r*p-n*m*p-c*r*d+n*h*d)*w,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*d-n*l*d)*w,e[7]=(o*h*s-c*l*s+c*r*u-n*h*u-o*r*p+n*l*p)*w,e[8]=x*w,e[9]=(v*f*s-c*y*s-v*i*p+n*y*p+c*i*d-n*f*d)*w,e[10]=(o*y*s-v*a*s+v*i*u-n*y*u-o*i*d+n*a*d)*w,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*w,e[12]=A*w,e[13]=(c*y*r-v*f*r+v*i*h-n*y*h-c*i*m+n*f*m)*w,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*m-n*a*m)*w,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,v=s*f,y=o*c,m=o*f,d=a*f,g=l*u,_=l*c,x=l*f,A=i.x,C=i.y,w=i.z;return r[0]=(1-(y+d))*A,r[1]=(p+x)*A,r[2]=(v-_)*A,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(h+d))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(v+_)*w,r[9]=(m-g)*w,r[10]=(1-(h+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ms.set(r[0],r[1],r[2]).length();const o=ms.set(r[4],r[5],r[6]).length(),a=ms.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const u=1/s,c=1/o,f=1/a;return Yn.elements[0]*=u,Yn.elements[1]*=u,Yn.elements[2]*=u,Yn.elements[4]*=c,Yn.elements[5]*=c,Yn.elements[6]*=c,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,n.setFromRotationMatrix(Yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Di){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===Di)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ju)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Di){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),h=(n+e)*u,p=(i+r)*c;let v,y;if(a===Di)v=(o+s)*f,y=-2*f;else if(a===ju)v=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ms=new O,Yn=new Et,Kb=new O(0,0,0),$b=new O(1,1,1),Yi=new O,wl=new O,_n=new O,c0=new Et,f0=new Ka;class zi{constructor(e=0,n=0,i=0,r=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return c0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(c0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return f0.setFromEuler(this),this.setFromQuaternion(f0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class aM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zb=0;const d0=new O,gs=new Ka,Si=new Et,Cl=new O,Fo=new O,Qb=new O,Jb=new Ka,h0=new O(1,0,0),p0=new O(0,1,0),m0=new O(0,0,1),g0={type:"added"},eP={type:"removed"},vs={type:"childadded",child:null},yf={type:"childremoved",child:null};class an extends So{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new O,n=new zi,i=new Ka,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Fe}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return gs.setFromAxisAngle(e,n),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,n){return gs.setFromAxisAngle(e,n),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(h0,e)}rotateY(e){return this.rotateOnAxis(p0,e)}rotateZ(e){return this.rotateOnAxis(m0,e)}translateOnAxis(e,n){return d0.copy(e).applyQuaternion(this.quaternion),this.position.add(d0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(h0,e)}translateY(e){return this.translateOnAxis(p0,e)}translateZ(e){return this.translateOnAxis(m0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Cl.copy(e):Cl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Fo,Cl,this.up):Si.lookAt(Cl,Fo,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),gs.setFromRotationMatrix(Si),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(g0),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(eP),yf.child=e,this.dispatchEvent(yf),yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(g0),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,Qb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,Jb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new O(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new O,Mi=new O,xf=new O,Ei=new O,_s=new O,ys=new O,v0=new O,Sf=new O,Mf=new O,Ef=new O,Tf=new Ct,Af=new Ct,wf=new Ct;class On{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){qn.subVectors(r,n),Mi.subVectors(i,n),xf.subVectors(e,n);const o=qn.dot(qn),a=qn.dot(Mi),l=qn.dot(xf),u=Mi.dot(Mi),c=Mi.dot(xf),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,v=(o*c-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Tf.setScalar(0),Af.setScalar(0),wf.setScalar(0),Tf.fromBufferAttribute(e,n),Af.fromBufferAttribute(e,i),wf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Tf,s.x),o.addScaledVector(Af,s.y),o.addScaledVector(wf,s.z),o}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),Mi.subVectors(e,n),qn.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),qn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;_s.subVectors(r,i),ys.subVectors(s,i),Sf.subVectors(e,i);const l=_s.dot(Sf),u=ys.dot(Sf);if(l<=0&&u<=0)return n.copy(i);Mf.subVectors(e,r);const c=_s.dot(Mf),f=ys.dot(Mf);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(_s,o);Ef.subVectors(e,s);const p=_s.dot(Ef),v=ys.dot(Ef);if(v>=0&&p<=v)return n.copy(s);const y=p*u-l*v;if(y<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(ys,a);const m=c*v-p*f;if(m<=0&&f-c>=0&&p-v>=0)return v0.subVectors(s,r),a=(f-c)/(f-c+(p-v)),n.copy(r).addScaledVector(v0,a);const d=1/(m+y+h);return o=y*d,a=h*d,n.copy(i).addScaledVector(_s,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Rl={h:0,s:0,l:0};function Cf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=Ob(e,1),n=ze(n,0,1),i=ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Cf(o,s,e+1/3),this.g=Cf(o,s,e),this.b=Cf(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=In){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=lM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Ze.fromWorkingColorSpace(Yt.copy(this),e),Math.round(ze(Yt.r*255,0,255))*65536+Math.round(ze(Yt.g*255,0,255))*256+Math.round(ze(Yt.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=In){Ze.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+n,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qi),e.getHSL(Rl);const i=cf(qi.h,Rl.h,n),r=cf(qi.s,Rl.s,n),s=cf(qi.l,Rl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new tt;tt.NAMES=lM;let tP=0;class Mo extends So{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tP++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=Qs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=th,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=r0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==xr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eh&&(i.blendSrc=this.blendSrc),this.blendDst!==th&&(i.blendDst=this.blendDst),this.blendEquation!==Vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==r0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mm extends Mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=YS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new O,bl=new je;let nP=0;class ni{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nP++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=kh,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)bl.fromBufferAttribute(this,n),bl.applyMatrix3(e),this.setXY(n,bl.x,bl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ci(n,this.array)),n}setX(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ci(n,this.array)),n}setY(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ci(n,this.array)),n}setZ(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ci(n,this.array)),n}setW(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kh&&(e.usage=this.usage),e}}class uM extends ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class cM extends ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ii extends ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}let iP=0;const Dn=new Et,Rf=new an,xs=new O,yn=new $a,Oo=new $a,Ut=new O;class si extends So{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iP++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rM(e)?cM:uM)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return Rf.lookAt(e),Rf.updateMatrix(),this.applyMatrix4(Rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ii(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(yn.min,Oo.min),yn.expandByPoint(Ut),Ut.addVectors(yn.max,Oo.max),yn.expandByPoint(Ut)):(yn.expandByPoint(Oo.min),yn.expandByPoint(Oo.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ut.fromBufferAttribute(a,u),l&&(xs.fromBufferAttribute(e,u),Ut.add(xs)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new O,l[b]=new O;const u=new O,c=new O,f=new O,h=new je,p=new je,v=new je,y=new O,m=new O;function d(b,T,S){u.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,S),c.sub(u),f.sub(u),p.sub(h),v.sub(h);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(y.copy(c).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(P),a[b].add(y),a[T].add(y),a[S].add(y),l[b].add(m),l[T].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,T=g.length;b<T;++b){const S=g[b],P=S.start,H=S.count;for(let k=P,K=P+H;k<K;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new O,x=new O,A=new O,C=new O;function w(b){A.fromBufferAttribute(r,b),C.copy(A);const T=a[b];_.copy(T),_.sub(A.multiplyScalar(A.dot(T))).normalize(),x.crossVectors(C,T);const P=x.dot(l[b])<0?-1:1;o.setXYZW(b,_.x,_.y,_.z,P)}for(let b=0,T=g.length;b<T;++b){const S=g[b],P=S.start,H=S.count;for(let k=P,K=P+H;k<K;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,u=new O,c=new O,f=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let d=0;d<c;d++)h[v++]=u[p++]}return new ni(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new si,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _0=new Et,Dr=new oM,Pl=new vc,y0=new O,Dl=new O,Ll=new O,Il=new O,bf=new O,Nl=new O,x0=new O,Ul=new O;class di extends an{constructor(e=new si,n=new Mm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Nl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(bf.fromBufferAttribute(f,e),o?Nl.addScaledVector(bf,c):Nl.addScaledVector(bf.sub(n),c))}n.add(Nl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pl.copy(i.boundingSphere),Pl.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(Pl.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Pl,y0)===null||Dr.origin.distanceToSquared(y0)>(e.far-e.near)**2))&&(_0.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(_0),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const m=h[v],d=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,A=_;x<A;x+=3){const C=a.getX(x),w=a.getX(x+1),b=a.getX(x+2);r=Fl(this,d,e,i,u,c,f,C,w,b),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,d=y;m<d;m+=3){const g=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);r=Fl(this,o,e,i,u,c,f,g,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const m=h[v],d=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,A=_;x<A;x+=3){const C=x,w=x+1,b=x+2;r=Fl(this,d,e,i,u,c,f,C,w,b),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,d=y;m<d;m+=3){const g=m,_=m+1,x=m+2;r=Fl(this,o,e,i,u,c,f,g,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function rP(t,e,n,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===xr,a),l===null)return null;Ul.copy(a),Ul.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ul);return u<n.near||u>n.far?null:{distance:u,point:Ul.clone(),object:t}}function Fl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Dl),t.getVertexPosition(l,Ll),t.getVertexPosition(u,Il);const c=rP(t,e,n,i,Dl,Ll,Il,x0);if(c){const f=new O;On.getBarycoord(x0,Dl,Ll,Il,f),r&&(c.uv=On.getInterpolatedAttribute(r,a,l,u,f,new je)),s&&(c.uv1=On.getInterpolatedAttribute(s,a,l,u,f,new je)),o&&(c.normal=On.getInterpolatedAttribute(o,a,l,u,f,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new O,materialIndex:0};On.getNormal(Dl,Ll,Il,h.normal),c.face=h,c.barycoord=f}return c}class Za extends si{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ii(u,3)),this.setAttribute("normal",new ii(c,3)),this.setAttribute("uv",new ii(f,2));function v(y,m,d,g,_,x,A,C,w,b,T){const S=x/w,P=A/b,H=x/2,k=A/2,K=C/2,Z=w+1,Y=b+1;let W=0,L=0;const j=new O;for(let Q=0;Q<Y;Q++){const oe=Q*P-k;for(let Se=0;Se<Z;Se++){const Ke=Se*S-H;j[y]=Ke*g,j[m]=oe*_,j[d]=K,u.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[d]=C>0?1:-1,c.push(j.x,j.y,j.z),f.push(Se/w),f.push(1-Q/b),W+=1}}for(let Q=0;Q<b;Q++)for(let oe=0;oe<w;oe++){const Se=h+oe+Z*Q,Ke=h+oe+Z*(Q+1),X=h+(oe+1)+Z*(Q+1),re=h+(oe+1)+Z*Q;l.push(Se,Ke,re),l.push(Ke,X,re),L+=6}a.addGroup(p,L,T),p+=L,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function po(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=po(t[n]);for(const r in i)e[r]=i[r]}return e}function sP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function fM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const oP={clone:po,merge:en};var aP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends Mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aP,this.fragmentShader=lP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=sP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class dM extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new O,S0=new je,M0=new je;class Fn extends dM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vh*2*Math.atan(Math.tan(uf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,n){return this.getViewBounds(e,S0,M0),n.subVectors(M0,S0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(uf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ss=-90,Ms=1;class uP extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(Ss,Ms,e,n);r.layers=this.layers,this.add(r);const s=new Fn(Ss,Ms,e,n);s.layers=this.layers,this.add(s);const o=new Fn(Ss,Ms,e,n);o.layers=this.layers,this.add(o);const a=new Fn(Ss,Ms,e,n);a.layers=this.layers,this.add(a);const l=new Fn(Ss,Ms,e,n);l.layers=this.layers,this.add(l);const u=new Fn(Ss,Ms,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ju)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class hM extends on{constructor(e=[],n=co,i,r,s,o,a,l,u,c){super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cP extends ss{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hM(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:fi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Za(5,5,5),s=new Sr({name:"CubemapFromEquirect",uniforms:po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:hr});s.uniforms.tEquirect.value=n;const o=new di(r,s),a=n.minFilter;return n.minFilter===qr&&(n.minFilter=fi),new uP(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Yo extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fP={type:"move"};class Pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(u,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,v=.005;u.inputState.pinching&&h>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Yo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class dP extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class hP{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=kh,this.updateRanges=[],this.version=0,this.uuid=mr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new O;class Xu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=st(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ci(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ci(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ci(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ci(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new ni(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class pM extends Mo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Es;const Bo=new O,Ts=new O,As=new O,ws=new je,ko=new je,mM=new Et,Ol=new O,Vo=new O,Bl=new O,E0=new je,Df=new je,T0=new je;class A0 extends an{constructor(e=new pM){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new si;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new hP(n,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new Xu(i,3,0,!1)),Es.setAttribute("uv",new Xu(i,2,3,!1))}this.geometry=Es,this.material=e,this.center=new je(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),mM.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-As.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;kl(Ol.set(-.5,-.5,0),As,o,Ts,r,s),kl(Vo.set(.5,-.5,0),As,o,Ts,r,s),kl(Bl.set(.5,.5,0),As,o,Ts,r,s),E0.set(0,0),Df.set(1,0),T0.set(1,1);let a=e.ray.intersectTriangle(Ol,Vo,Bl,!1,Bo);if(a===null&&(kl(Vo.set(-.5,.5,0),As,o,Ts,r,s),Df.set(0,1),a=e.ray.intersectTriangle(Ol,Bl,Vo,!1,Bo),a===null))return;const l=e.ray.origin.distanceTo(Bo);l<e.near||l>e.far||n.push({distance:l,point:Bo.clone(),uv:On.getInterpolation(Bo,Ol,Vo,Bl,E0,Df,T0,new je),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function kl(t,e,n,i,r,s){ws.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ko.x=s*ws.x-r*ws.y,ko.y=r*ws.x+s*ws.y):ko.copy(ws),t.copy(e),t.x+=ko.x,t.y+=ko.y,t.applyMatrix4(mM)}const Lf=new O,pP=new O,mP=new Fe;class Br{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lf.subVectors(i,n).cross(pP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mP.getNormalMatrix(e),r=this.coplanarPoint(Lf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new vc,Vl=new O;class gM{constructor(e=new Br,n=new Br,i=new Br,r=new Br,s=new Br,o=new Br){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Di){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],v=r[9],y=r[10],m=r[11],d=r[12],g=r[13],_=r[14],x=r[15];if(i[0].setComponents(l-s,h-u,m-p,x-d).normalize(),i[1].setComponents(l+s,h+u,m+p,x+d).normalize(),i[2].setComponents(l+o,h+c,m+v,x+g).normalize(),i[3].setComponents(l-o,h-c,m-v,x-g).normalize(),i[4].setComponents(l-a,h-f,m-y,x-_).normalize(),n===Di)i[5].setComponents(l+a,h+f,m+y,x+_).normalize();else if(n===ju)i[5].setComponents(a,f,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Vl.x=r.normal.x>0?e.max.x:e.min.x,Vl.y=r.normal.y>0?e.max.y:e.min.y,Vl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vM extends Mo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yu=new O,qu=new O,w0=new Et,zo=new oM,zl=new vc,If=new O,C0=new O;class gP extends an{constructor(e=new si,n=new vM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Yu.fromBufferAttribute(n,r-1),qu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Yu.distanceTo(qu);e.setAttribute("lineDistance",new ii(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(r),zl.radius+=s,e.ray.intersectsSphere(zl)===!1)return;w0.copy(r).invert(),zo.copy(e.ray).applyMatrix4(w0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),v=Math.min(c.count,o.start+o.count);for(let y=p,m=v-1;y<m;y+=u){const d=c.getX(y),g=c.getX(y+1),_=Hl(this,e,zo,l,d,g,y);_&&n.push(_)}if(this.isLineLoop){const y=c.getX(v-1),m=c.getX(p),d=Hl(this,e,zo,l,y,m,v-1);d&&n.push(d)}}else{const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let y=p,m=v-1;y<m;y+=u){const d=Hl(this,e,zo,l,y,y+1,y);d&&n.push(d)}if(this.isLineLoop){const y=Hl(this,e,zo,l,v-1,p,v-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Hl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Yu.fromBufferAttribute(a,r),qu.fromBufferAttribute(a,s),n.distanceSqToSegment(Yu,qu,If,C0)>i)return;If.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(If);if(!(u<e.near||u>e.far))return{distance:u,point:C0.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class _M extends on{constructor(e,n,i=rs,r,s,o,a=En,l=En,u,c=Ua){if(c!==Ua&&c!==Fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class _c extends si{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=n/l,p=[],v=[],y=[],m=[];for(let d=0;d<c;d++){const g=d*h-o;for(let _=0;_<u;_++){const x=_*f-s;v.push(x,-g,0),y.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<a;g++){const _=g+u*d,x=g+u*(d+1),A=g+1+u*(d+1),C=g+1+u*d;p.push(_,x,C),p.push(x,A,C)}this.setIndex(p),this.setAttribute("position",new ii(v,3)),this.setAttribute("normal",new ii(y,3)),this.setAttribute("uv",new ii(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.width,e.height,e.widthSegments,e.heightSegments)}}class Em extends si{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new O,h=new O,p=[],v=[],y=[],m=[];for(let d=0;d<=i;d++){const g=[],_=d/i;let x=0;d===0&&o===0?x=.5/n:d===i&&l===Math.PI&&(x=-.5/n);for(let A=0;A<=n;A++){const C=A/n;f.x=-e*Math.cos(r+C*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+_*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(C+x,1-_),g.push(u++)}c.push(g)}for(let d=0;d<i;d++)for(let g=0;g<n;g++){const _=c[d][g+1],x=c[d][g],A=c[d+1][g],C=c[d+1][g+1];(d!==0||o>0)&&p.push(_,x,C),(d!==i-1||l<Math.PI)&&p.push(x,A,C)}this.setIndex(p),this.setAttribute("position",new ii(v,3)),this.setAttribute("normal",new ii(y,3)),this.setAttribute("uv",new ii(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Em(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vP extends Mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _P extends Mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const R0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class yP{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],v=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return v}return null}}}const xP=new yP;class Tm{constructor(e){this.manager=e!==void 0?e:xP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Tm.DEFAULT_MATERIAL_NAME="__DEFAULT";class SP extends Tm{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=R0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Oa("img");function l(){c(),R0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class MP extends Tm{constructor(e){super(e)}load(e,n,i,r){const s=new on,o=new SP(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class EP extends dM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class TP extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function b0(t,e,n,i){const r=AP(i);switch(n){case QS:return t*e;case eM:return t*e/r.components*r.byteLength;case _m:return t*e/r.components*r.byteLength;case tM:return t*e*2/r.components*r.byteLength;case ym:return t*e*2/r.components*r.byteLength;case JS:return t*e*3/r.components*r.byteLength;case Jn:return t*e*4/r.components*r.byteLength;case xm:return t*e*4/r.components*r.byteLength;case lu:case uu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cu:case fu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ph:case gh:return Math.max(t,16)*Math.max(e,8)/4;case hh:case mh:return Math.max(t,8)*Math.max(e,8)/2;case vh:case _h:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case bh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case du:case Nh:case Uh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case nM:case Fh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Oh:case Bh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function AP(t){switch(t){case Vi:case KS:return{byteLength:1,components:1};case Ia:case $S:case qa:return{byteLength:2,components:1};case gm:case vm:return{byteLength:2,components:4};case rs:case mm:case Pi:return{byteLength:4,components:1};case ZS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function wP(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,c);else{f.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<f.length;p++){const v=f[h],y=f[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++h,f[h]=y)}f.length=h+1;for(let p=0,v=f.length;p<v;p++){const y=f[p];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var CP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,FP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,HP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$P=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,QP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i2="gl_FragColor = linearToOutputTexel( gl_FragColor );",r2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,o2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,l2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,c2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,m2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,y2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,x2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,A2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,C2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,R2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,G2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,j2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_D=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ED=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,AD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ID=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ND=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$D=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:CP,alphahash_pars_fragment:RP,alphamap_fragment:bP,alphamap_pars_fragment:PP,alphatest_fragment:DP,alphatest_pars_fragment:LP,aomap_fragment:IP,aomap_pars_fragment:NP,batching_pars_vertex:UP,batching_vertex:FP,begin_vertex:OP,beginnormal_vertex:BP,bsdfs:kP,iridescence_fragment:VP,bumpmap_pars_fragment:zP,clipping_planes_fragment:HP,clipping_planes_pars_fragment:GP,clipping_planes_pars_vertex:WP,clipping_planes_vertex:jP,color_fragment:XP,color_pars_fragment:YP,color_pars_vertex:qP,color_vertex:KP,common:$P,cube_uv_reflection_fragment:ZP,defaultnormal_vertex:QP,displacementmap_pars_vertex:JP,displacementmap_vertex:e2,emissivemap_fragment:t2,emissivemap_pars_fragment:n2,colorspace_fragment:i2,colorspace_pars_fragment:r2,envmap_fragment:s2,envmap_common_pars_fragment:o2,envmap_pars_fragment:a2,envmap_pars_vertex:l2,envmap_physical_pars_fragment:y2,envmap_vertex:u2,fog_vertex:c2,fog_pars_vertex:f2,fog_fragment:d2,fog_pars_fragment:h2,gradientmap_pars_fragment:p2,lightmap_pars_fragment:m2,lights_lambert_fragment:g2,lights_lambert_pars_fragment:v2,lights_pars_begin:_2,lights_toon_fragment:x2,lights_toon_pars_fragment:S2,lights_phong_fragment:M2,lights_phong_pars_fragment:E2,lights_physical_fragment:T2,lights_physical_pars_fragment:A2,lights_fragment_begin:w2,lights_fragment_maps:C2,lights_fragment_end:R2,logdepthbuf_fragment:b2,logdepthbuf_pars_fragment:P2,logdepthbuf_pars_vertex:D2,logdepthbuf_vertex:L2,map_fragment:I2,map_pars_fragment:N2,map_particle_fragment:U2,map_particle_pars_fragment:F2,metalnessmap_fragment:O2,metalnessmap_pars_fragment:B2,morphinstance_vertex:k2,morphcolor_vertex:V2,morphnormal_vertex:z2,morphtarget_pars_vertex:H2,morphtarget_vertex:G2,normal_fragment_begin:W2,normal_fragment_maps:j2,normal_pars_fragment:X2,normal_pars_vertex:Y2,normal_vertex:q2,normalmap_pars_fragment:K2,clearcoat_normal_fragment_begin:$2,clearcoat_normal_fragment_maps:Z2,clearcoat_pars_fragment:Q2,iridescence_pars_fragment:J2,opaque_fragment:eD,packing:tD,premultiplied_alpha_fragment:nD,project_vertex:iD,dithering_fragment:rD,dithering_pars_fragment:sD,roughnessmap_fragment:oD,roughnessmap_pars_fragment:aD,shadowmap_pars_fragment:lD,shadowmap_pars_vertex:uD,shadowmap_vertex:cD,shadowmask_pars_fragment:fD,skinbase_vertex:dD,skinning_pars_vertex:hD,skinning_vertex:pD,skinnormal_vertex:mD,specularmap_fragment:gD,specularmap_pars_fragment:vD,tonemapping_fragment:_D,tonemapping_pars_fragment:yD,transmission_fragment:xD,transmission_pars_fragment:SD,uv_pars_fragment:MD,uv_pars_vertex:ED,uv_vertex:TD,worldpos_vertex:AD,background_vert:wD,background_frag:CD,backgroundCube_vert:RD,backgroundCube_frag:bD,cube_vert:PD,cube_frag:DD,depth_vert:LD,depth_frag:ID,distanceRGBA_vert:ND,distanceRGBA_frag:UD,equirect_vert:FD,equirect_frag:OD,linedashed_vert:BD,linedashed_frag:kD,meshbasic_vert:VD,meshbasic_frag:zD,meshlambert_vert:HD,meshlambert_frag:GD,meshmatcap_vert:WD,meshmatcap_frag:jD,meshnormal_vert:XD,meshnormal_frag:YD,meshphong_vert:qD,meshphong_frag:KD,meshphysical_vert:$D,meshphysical_frag:ZD,meshtoon_vert:QD,meshtoon_frag:JD,points_vert:eL,points_frag:tL,shadow_vert:nL,shadow_frag:iL,sprite_vert:rL,sprite_frag:sL},ae={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},li={basic:{uniforms:en([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:en([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new tt(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:en([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:en([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:en([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new tt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:en([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:en([ae.points,ae.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:en([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:en([ae.common,ae.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:en([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:en([ae.sprite,ae.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:en([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:en([ae.lights,ae.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};li.physical={uniforms:en([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Gl={r:0,b:0,g:0},Ir=new zi,oL=new Et;function aL(t,e,n,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function v(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?n:e).get(x)),x}function y(_){let x=!1;const A=v(_);A===null?d(a,l):A&&A.isColor&&(d(A,1),x=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,x){const A=v(x);A&&(A.isCubeTexture||A.mapping===gc)?(c===void 0&&(c=new di(new Za(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:po(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ir.copy(x.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(oL.makeRotationFromEuler(Ir)),c.material.toneMapped=Ze.getTransfer(A.colorSpace)!==rt,(f!==A||h!==A.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=A,h=A.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new di(new _c(2,2),new Sr({name:"BackgroundMaterial",uniforms:po(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(A.colorSpace)!==rt,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=A,h=A.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function d(_,x){_.getRGB(Gl,fM(t)),i.buffers.color.setClear(Gl.r,Gl.g,Gl.b,x,o)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:y,addToRenderList:m,dispose:g}}function lL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,P,H,k,K){let Z=!1;const Y=f(k,H,P);s!==Y&&(s=Y,u(s.object)),Z=p(S,k,H,K),Z&&v(S,k,H,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(S,P,H,k),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function c(S){return t.deleteVertexArray(S)}function f(S,P,H){const k=H.wireframe===!0;let K=i[S.id];K===void 0&&(K={},i[S.id]=K);let Z=K[P.id];Z===void 0&&(Z={},K[P.id]=Z);let Y=Z[k];return Y===void 0&&(Y=h(l()),Z[k]=Y),Y}function h(S){const P=[],H=[],k=[];for(let K=0;K<n;K++)P[K]=0,H[K]=0,k[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,P,H,k){const K=s.attributes,Z=P.attributes;let Y=0;const W=H.getAttributes();for(const L in W)if(W[L].location>=0){const Q=K[L];let oe=Z[L];if(oe===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;Y++}return s.attributesNum!==Y||s.index!==k}function v(S,P,H,k){const K={},Z=P.attributes;let Y=0;const W=H.getAttributes();for(const L in W)if(W[L].location>=0){let Q=Z[L];Q===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),K[L]=oe,Y++}s.attributes=K,s.attributesNum=Y,s.index=k}function y(){const S=s.newAttributes;for(let P=0,H=S.length;P<H;P++)S[P]=0}function m(S){d(S,0)}function d(S,P){const H=s.newAttributes,k=s.enabledAttributes,K=s.attributeDivisors;H[S]=1,k[S]===0&&(t.enableVertexAttribArray(S),k[S]=1),K[S]!==P&&(t.vertexAttribDivisor(S,P),K[S]=P)}function g(){const S=s.newAttributes,P=s.enabledAttributes;for(let H=0,k=P.length;H<k;H++)P[H]!==S[H]&&(t.disableVertexAttribArray(H),P[H]=0)}function _(S,P,H,k,K,Z,Y){Y===!0?t.vertexAttribIPointer(S,P,H,K,Z):t.vertexAttribPointer(S,P,H,k,K,Z)}function x(S,P,H,k){y();const K=k.attributes,Z=H.getAttributes(),Y=P.defaultAttributeValues;for(const W in Z){const L=Z[W];if(L.location>=0){let j=K[W];if(j===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){const Q=j.normalized,oe=j.itemSize,Se=e.get(j);if(Se===void 0)continue;const Ke=Se.buffer,X=Se.type,re=Se.bytesPerElement,pe=X===t.INT||X===t.UNSIGNED_INT||j.gpuType===mm;if(j.isInterleavedBufferAttribute){const se=j.data,we=se.stride,Qe=j.offset;if(se.isInstancedInterleavedBuffer){for(let De=0;De<L.locationSize;De++)d(L.location+De,se.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let De=0;De<L.locationSize;De++)m(L.location+De);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let De=0;De<L.locationSize;De++)_(L.location+De,oe/L.locationSize,X,Q,we*re,(Qe+oe/L.locationSize*De)*re,pe)}else{if(j.isInstancedBufferAttribute){for(let se=0;se<L.locationSize;se++)d(L.location+se,j.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let se=0;se<L.locationSize;se++)m(L.location+se);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let se=0;se<L.locationSize;se++)_(L.location+se,oe/L.locationSize,X,Q,oe*re,oe/L.locationSize*se*re,pe)}}else if(Y!==void 0){const Q=Y[W];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(L.location,Q);break;case 3:t.vertexAttrib3fv(L.location,Q);break;case 4:t.vertexAttrib4fv(L.location,Q);break;default:t.vertexAttrib1fv(L.location,Q)}}}}g()}function A(){b();for(const S in i){const P=i[S];for(const H in P){const k=P[H];for(const K in k)c(k[K].object),delete k[K];delete P[H]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const H in P){const k=P[H];for(const K in k)c(k[K].object),delete k[K];delete P[H]}delete i[S.id]}function w(S){for(const P in i){const H=i[P];if(H[S.id]===void 0)continue;const k=H[S.id];for(const K in k)c(k[K].object),delete k[K];delete H[S.id]}}function b(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function uL(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let v=0;v<f;v++)p+=c[v];n.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)o(u[v],c[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let v=0;for(let y=0;y<f;y++)v+=c[y]*h[y];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Jn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const b=w===qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Vi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Pi&&!b)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:A,maxSamples:C}}function fL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Br,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const g=s?0:i,_=g*4;let x=d.clippingState||null;l.value=x,x=c(v,h,_,p);for(let A=0;A!==_;++A)x[A]=n[A];d.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,v){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const d=p+y*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,x=p;_!==y;++_,x+=4)o.copy(f[_]).applyMatrix4(g,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function dL(t){let e=new WeakMap;function n(o,a){return a===uh?o.mapping=co:a===ch&&(o.mapping=fo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===uh||a===ch)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new cP(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const js=4,P0=[.125,.215,.35,.446,.526,.582],zr=20,Nf=new EP,D0=new tt;let Uf=null,Ff=0,Of=0,Bf=!1;const kr=(1+Math.sqrt(5))/2,Cs=1/kr,L0=[new O(-kr,Cs,0),new O(kr,Cs,0),new O(-Cs,0,kr),new O(Cs,0,kr),new O(0,kr,-Cs),new O(0,kr,Cs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],hL=new O;class I0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=hL}=s;Uf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uf,Ff,Of),this._renderer.xr.enabled=Bf,e.scissorTest=!1,Wl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===co||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:qa,format:Jn,colorSpace:ho,depthBuffer:!1},r=N0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pL(s)),this._blurMaterial=mL(s,e,n)}return r}_compileMaterial(e){const n=new di(this._lodPlanes[0],e);this._renderer.compile(n,Nf)}_sceneToCubeUV(e,n,i,r,s){const l=new Fn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(D0),f.toneMapping=pr,f.autoClear=!1;const v=new Mm({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),y=new di(new Za,v);let m=!1;const d=e.background;d?d.isColor&&(v.color.copy(d),e.background=null,m=!0):(v.color.copy(D0),m=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(l.up.set(0,u[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[g],s.y,s.z)):_===1?(l.up.set(0,0,u[g]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[g],s.z)):(l.up.set(0,u[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[g]));const x=this._cubeSize;Wl(r,_*x,g>2?x:0,x,x),f.setRenderTarget(r),m&&f.render(y,l),f.render(e,l)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===co||e.mapping===fo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=F0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new di(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Wl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Nf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=L0[(r-s-1)%L0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new di(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zr-1),y=s/v,m=isFinite(s)?1+Math.floor(c*y):zr;m>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zr}`);const d=[];let g=0;for(let w=0;w<zr;++w){const b=w/y,T=Math.exp(-b*b/2);d.push(T),w===0?g+=T:w<m&&(g+=2*T)}for(let w=0;w<d.length;w++)d[w]=d[w]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const x=this._sizeLods[r],A=3*x*(r>_-js?r-_+js:0),C=4*(this._cubeSize-x);Wl(n,A,C,3*x,2*x),l.setRenderTarget(n),l.render(f,Nf)}}function pL(t){const e=[],n=[],i=[];let r=t;const s=t-js+1+P0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-js?l=P0[o-t+js-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,v=6,y=3,m=2,d=1,g=new Float32Array(y*v*p),_=new Float32Array(m*v*p),x=new Float32Array(d*v*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,b=C>2?0:-1,T=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];g.set(T,y*v*C),_.set(h,m*v*C);const S=[C,C,C,C,C,C];x.set(S,d*v*C)}const A=new si;A.setAttribute("position",new ni(g,y)),A.setAttribute("uv",new ni(_,m)),A.setAttribute("faceIndex",new ni(x,d)),e.push(A),r>js&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function N0(t,e,n){const i=new ss(t,e,n);return i.texture.mapping=gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function mL(t,e,n){const i=new Float32Array(zr),r=new O(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Am(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function U0(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Am(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function F0(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Am(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Am(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gL(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===uh||l===ch,c=l===co||l===fo;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new I0(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new I0(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function vL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&hu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _L(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,v=f.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let _=0,x=g.length;_<x;_+=3){const A=g[_+0],C=g[_+1],w=g[_+2];h.push(A,C,C,w,w,A)}}else if(v!==void 0){const g=v.array;y=v.version;for(let _=0,x=g.length/3-1;_<x;_+=3){const A=_+0,C=_+1,w=_+2;h.push(A,C,C,w,w,A)}}else return;const m=new(rM(h)?cM:uM)(h,1);m.version=y;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function yL(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function u(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*o,v),n.update(p,i,v))}function c(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];n.update(m,i,1)}function f(h,p,v,y){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,v);let d=0;for(let g=0;g<v;g++)d+=p[g]*y[g];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function xL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function SL(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;v===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*C*4*f),b=new sM(w,A,C,f);b.type=Pi,b.needsUpdate=!0;const T=x*4;for(let P=0;P<f;P++){const H=d[P],k=g[P],K=_[P],Z=A*C*4*P;for(let Y=0;Y<H.count;Y++){const W=Y*T;v===!0&&(r.fromBufferAttribute(H,Y),w[Z+W+0]=r.x,w[Z+W+1]=r.y,w[Z+W+2]=r.z,w[Z+W+3]=0),y===!0&&(r.fromBufferAttribute(k,Y),w[Z+W+4]=r.x,w[Z+W+5]=r.y,w[Z+W+6]=r.z,w[Z+W+7]=0),m===!0&&(r.fromBufferAttribute(K,Y),w[Z+W+8]=r.x,w[Z+W+9]=r.y,w[Z+W+10]=r.z,w[Z+W+11]=K.itemSize===4?r.w:1)}}h={count:f,texture:b,size:new je(A,C)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function ML(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const xM=new on,O0=new _M(1,1),SM=new sM,MM=new Yb,EM=new hM,B0=[],k0=[],V0=new Float32Array(16),z0=new Float32Array(9),H0=new Float32Array(4);function Eo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=B0[r];if(s===void 0&&(s=new Float32Array(r),B0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function yc(t,e){let n=k0[e];n===void 0&&(n=new Int32Array(e),k0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function EL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function TL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function AL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function wL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function CL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(It(n,i))return;H0.set(i),t.uniformMatrix2fv(this.addr,!1,H0),Nt(n,i)}}function RL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(It(n,i))return;z0.set(i),t.uniformMatrix3fv(this.addr,!1,z0),Nt(n,i)}}function bL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(It(n,i))return;V0.set(i),t.uniformMatrix4fv(this.addr,!1,V0),Nt(n,i)}}function PL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function DL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function LL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function IL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function NL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function UL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function FL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function OL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function BL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(O0.compareFunction=iM,s=O0):s=xM,n.setTexture2D(e||s,r)}function kL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||MM,r)}function VL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||EM,r)}function zL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||SM,r)}function HL(t){switch(t){case 5126:return EL;case 35664:return TL;case 35665:return AL;case 35666:return wL;case 35674:return CL;case 35675:return RL;case 35676:return bL;case 5124:case 35670:return PL;case 35667:case 35671:return DL;case 35668:case 35672:return LL;case 35669:case 35673:return IL;case 5125:return NL;case 36294:return UL;case 36295:return FL;case 36296:return OL;case 35678:case 36198:case 36298:case 36306:case 35682:return BL;case 35679:case 36299:case 36307:return kL;case 35680:case 36300:case 36308:case 36293:return VL;case 36289:case 36303:case 36311:case 36292:return zL}}function GL(t,e){t.uniform1fv(this.addr,e)}function WL(t,e){const n=Eo(e,this.size,2);t.uniform2fv(this.addr,n)}function jL(t,e){const n=Eo(e,this.size,3);t.uniform3fv(this.addr,n)}function XL(t,e){const n=Eo(e,this.size,4);t.uniform4fv(this.addr,n)}function YL(t,e){const n=Eo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function qL(t,e){const n=Eo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function KL(t,e){const n=Eo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $L(t,e){t.uniform1iv(this.addr,e)}function ZL(t,e){t.uniform2iv(this.addr,e)}function QL(t,e){t.uniform3iv(this.addr,e)}function JL(t,e){t.uniform4iv(this.addr,e)}function eI(t,e){t.uniform1uiv(this.addr,e)}function tI(t,e){t.uniform2uiv(this.addr,e)}function nI(t,e){t.uniform3uiv(this.addr,e)}function iI(t,e){t.uniform4uiv(this.addr,e)}function rI(t,e,n){const i=this.cache,r=e.length,s=yc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||xM,s[o])}function sI(t,e,n){const i=this.cache,r=e.length,s=yc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||MM,s[o])}function oI(t,e,n){const i=this.cache,r=e.length,s=yc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||EM,s[o])}function aI(t,e,n){const i=this.cache,r=e.length,s=yc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||SM,s[o])}function lI(t){switch(t){case 5126:return GL;case 35664:return WL;case 35665:return jL;case 35666:return XL;case 35674:return YL;case 35675:return qL;case 35676:return KL;case 5124:case 35670:return $L;case 35667:case 35671:return ZL;case 35668:case 35672:return QL;case 35669:case 35673:return JL;case 5125:return eI;case 36294:return tI;case 36295:return nI;case 36296:return iI;case 35678:case 36198:case 36298:case 36306:case 35682:return rI;case 35679:case 36299:case 36307:return sI;case 35680:case 36300:case 36308:case 36293:return oI;case 36289:case 36303:case 36311:case 36292:return aI}}class uI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=HL(n.type)}}class cI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lI(n.type)}}class fI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const kf=/(\w+)(\])?(\[|\.)?/g;function G0(t,e){t.seq.push(e),t.map[e.id]=e}function dI(t,e,n){const i=t.name,r=i.length;for(kf.lastIndex=0;;){const s=kf.exec(i),o=kf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){G0(n,u===void 0?new uI(a,t,e):new cI(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new fI(a),G0(n,f)),n=f}}}class pu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);dI(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function W0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const hI=37297;let pI=0;function mI(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const j0=new Fe;function gI(t){Ze._getMatrix(j0,Ze.workingColorSpace,t);const e=`mat3( ${j0.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Wu:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function X0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+mI(t.getShaderSource(e),o)}else return r}function vI(t,e){const n=gI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function _I(t,e){let n;switch(e){case _b:n="Linear";break;case yb:n="Reinhard";break;case xb:n="Cineon";break;case Sb:n="ACESFilmic";break;case Eb:n="AgX";break;case Tb:n="Neutral";break;case Mb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const jl=new O;function yI(){Ze.getLuminanceCoefficients(jl);const t=jl.x.toFixed(4),e=jl.y.toFixed(4),n=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function SI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function MI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function qo(t){return t!==""}function Y0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function q0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EI=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(t){return t.replace(EI,AI)}const TI=new Map;function AI(t,e){let n=Be[e];if(n===void 0){const i=TI.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zh(n)}const wI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K0(t){return t.replace(wI,CI)}function CI(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function RI(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===XS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ZR?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function bI(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case co:case fo:e="ENVMAP_TYPE_CUBE";break;case gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PI(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case fo:e="ENVMAP_MODE_REFRACTION";break}return e}function DI(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case YS:e="ENVMAP_BLENDING_MULTIPLY";break;case gb:e="ENVMAP_BLENDING_MIX";break;case vb:e="ENVMAP_BLENDING_ADD";break}return e}function LI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function II(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=RI(n),u=bI(n),c=PI(n),f=DI(n),h=LI(n),p=xI(n),v=SI(s),y=r.createProgram();let m,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(qo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(qo).join(`
`),d.length>0&&(d+=`
`)):(m=[$0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),d=[$0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pr?"#define TONE_MAPPING":"",n.toneMapping!==pr?Be.tonemapping_pars_fragment:"",n.toneMapping!==pr?_I("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,vI("linearToOutputTexel",n.outputColorSpace),yI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qo).join(`
`)),o=zh(o),o=Y0(o,n),o=q0(o,n),a=zh(a),a=Y0(a,n),a=q0(a,n),o=K0(o),a=K0(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===s0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===s0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=g+m+o,x=g+d+a,A=W0(r,r.VERTEX_SHADER,_),C=W0(r,r.FRAGMENT_SHADER,x);r.attachShader(y,A),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(P){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(A).trim(),K=r.getShaderInfoLog(C).trim();let Z=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,A,C);else{const W=X0(r,A,"vertex"),L=X0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+W+`
`+L)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||K==="")&&(Y=!1);Y&&(P.diagnostics={runnable:Z,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:K,prefix:d}})}r.deleteShader(A),r.deleteShader(C),b=new pu(r,y),T=MI(r,y)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,hI)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pI++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=C,this}let NI=0;class UI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new FI(e),n.set(e,i)),i}}class FI{constructor(e){this.id=NI++,this.code=e,this.usedTimes=0}}function OI(t,e,n,i,r,s,o){const a=new aM,l=new UI,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,S,P,H,k){const K=H.fog,Z=k.geometry,Y=T.isMeshStandardMaterial?H.environment:null,W=(T.isMeshStandardMaterial?n:e).get(T.envMap||Y),L=W&&W.mapping===gc?W.image.height:null,j=v[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Q=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,oe=Q!==void 0?Q.length:0;let Se=0;Z.morphAttributes.position!==void 0&&(Se=1),Z.morphAttributes.normal!==void 0&&(Se=2),Z.morphAttributes.color!==void 0&&(Se=3);let Ke,X,re,pe;if(j){const nt=li[j];Ke=nt.vertexShader,X=nt.fragmentShader}else Ke=T.vertexShader,X=T.fragmentShader,l.update(T),re=l.getVertexShaderID(T),pe=l.getFragmentShaderID(T);const se=t.getRenderTarget(),we=t.state.buffers.depth.getReversed(),Qe=k.isInstancedMesh===!0,De=k.isBatchedMesh===!0,Tt=!!T.map,ht=!!T.matcap,He=!!W,D=!!T.aoMap,Cn=!!T.lightMap,Xe=!!T.bumpMap,Ge=!!T.normalMap,Ee=!!T.displacementMap,lt=!!T.emissiveMap,Me=!!T.metalnessMap,R=!!T.roughnessMap,M=T.anisotropy>0,B=T.clearcoat>0,$=T.dispersion>0,ee=T.iridescence>0,q=T.sheen>0,xe=T.transmission>0,ue=M&&!!T.anisotropyMap,Ce=B&&!!T.clearcoatMap,be=B&&!!T.clearcoatNormalMap,ne=B&&!!T.clearcoatRoughnessMap,ve=ee&&!!T.iridescenceMap,Pe=ee&&!!T.iridescenceThicknessMap,Ie=q&&!!T.sheenColorMap,_e=q&&!!T.sheenRoughnessMap,We=!!T.specularMap,Oe=!!T.specularColorMap,ot=!!T.specularIntensityMap,N=xe&&!!T.transmissionMap,ce=xe&&!!T.thicknessMap,G=!!T.gradientMap,J=!!T.alphaMap,he=T.alphaTest>0,fe=!!T.alphaHash,Ue=!!T.extensions;let yt=pr;T.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(yt=t.toneMapping);const Gt={shaderID:j,shaderType:T.type,shaderName:T.name,vertexShader:Ke,fragmentShader:X,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:pe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:De,batchingColor:De&&k._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&k.instanceColor!==null,instancingMorph:Qe&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ho,alphaToCoverage:!!T.alphaToCoverage,map:Tt,matcap:ht,envMap:He,envMapMode:He&&W.mapping,envMapCubeUVHeight:L,aoMap:D,lightMap:Cn,bumpMap:Xe,normalMap:Ge,displacementMap:h&&Ee,emissiveMap:lt,normalMapObjectSpace:Ge&&T.normalMapType===bb,normalMapTangentSpace:Ge&&T.normalMapType===Rb,metalnessMap:Me,roughnessMap:R,anisotropy:M,anisotropyMap:ue,clearcoat:B,clearcoatMap:Ce,clearcoatNormalMap:be,clearcoatRoughnessMap:ne,dispersion:$,iridescence:ee,iridescenceMap:ve,iridescenceThicknessMap:Pe,sheen:q,sheenColorMap:Ie,sheenRoughnessMap:_e,specularMap:We,specularColorMap:Oe,specularIntensityMap:ot,transmission:xe,transmissionMap:N,thicknessMap:ce,gradientMap:G,opaque:T.transparent===!1&&T.blending===Qs&&T.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:fe,combine:T.combine,mapUv:Tt&&y(T.map.channel),aoMapUv:D&&y(T.aoMap.channel),lightMapUv:Cn&&y(T.lightMap.channel),bumpMapUv:Xe&&y(T.bumpMap.channel),normalMapUv:Ge&&y(T.normalMap.channel),displacementMapUv:Ee&&y(T.displacementMap.channel),emissiveMapUv:lt&&y(T.emissiveMap.channel),metalnessMapUv:Me&&y(T.metalnessMap.channel),roughnessMapUv:R&&y(T.roughnessMap.channel),anisotropyMapUv:ue&&y(T.anisotropyMap.channel),clearcoatMapUv:Ce&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:be&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(T.sheenRoughnessMap.channel),specularMapUv:We&&y(T.specularMap.channel),specularColorMapUv:Oe&&y(T.specularColorMap.channel),specularIntensityMapUv:ot&&y(T.specularIntensityMap.channel),transmissionMapUv:N&&y(T.transmissionMap.channel),thicknessMapUv:ce&&y(T.thicknessMap.channel),alphaMapUv:J&&y(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ge||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(Tt||J),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:we,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,decodeVideoTexture:Tt&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===rt,decodeVideoTextureEmissive:lt&&T.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(T.emissiveMap.colorSpace)===rt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ci,flipSided:T.side===sn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&T.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Gt.vertexUv1s=u.has(1),Gt.vertexUv2s=u.has(2),Gt.vertexUv3s=u.has(3),u.clear(),Gt}function d(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)S.push(P),S.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(g(S,T),_(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function g(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function _(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const S=v[T.type];let P;if(S){const H=li[S];P=oP.clone(H.uniforms)}else P=T.uniforms;return P}function A(T,S){let P;for(let H=0,k=c.length;H<k;H++){const K=c[H];if(K.cacheKey===S){P=K,++P.usedTimes;break}}return P===void 0&&(P=new II(t,S,T,s),c.push(P)),P}function C(T){if(--T.usedTimes===0){const S=c.indexOf(T);c[S]=c[c.length-1],c.pop(),T.destroy()}}function w(T){l.remove(T)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:A,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:b}}function BI(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function kI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Z0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Q0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,v,y,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:y,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=y,d.group=m),e++,d}function a(f,h,p,v,y,m){const d=o(f,h,p,v,y,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,v,y,m){const d=o(f,h,p,v,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||kI),i.length>1&&i.sort(h||Z0),r.length>1&&r.sort(h||Z0)}function c(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function VI(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Q0,t.set(i,[o])):r>=s.length?(o=new Q0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function zI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new tt};break;case"SpotLight":n={position:new O,direction:new O,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function HI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let GI=0;function WI(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function jI(t){const e=new zI,n=HI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,s=new Et,o=new Et;function a(u){let c=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,y=0,m=0,d=0,g=0,_=0,x=0,A=0,C=0,w=0;u.sort(WI);for(let T=0,S=u.length;T<S;T++){const P=u[T],H=P.color,k=P.intensity,K=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=H.r*k,f+=H.g*k,h+=H.b*k;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],k);w++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,L=n.get(P);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=P.shadow.matrix,g++}i.directional[p]=Y,p++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(H).multiplyScalar(k),Y.distance=K,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[y]=Y;const W=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,W.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[y]=W.matrix,P.castShadow){const L=n.get(P);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=Z,x++}y++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(H).multiplyScalar(k),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const W=P.shadow,L=n.get(P);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,L.shadowCameraNear=W.camera.near,L.shadowCameraFar=W.camera.far,i.pointShadow[v]=L,i.pointShadowMap[v]=Z,i.pointShadowMatrix[v]=P.shadow.matrix,_++}i.point[v]=Y,v++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(k),Y.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[d]=Y,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==p||b.pointLength!==v||b.spotLength!==y||b.rectAreaLength!==m||b.hemiLength!==d||b.numDirectionalShadows!==g||b.numPointShadows!==_||b.numSpotShadows!==x||b.numSpotMaps!==A||b.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,b.directionalLength=p,b.pointLength=v,b.spotLength=y,b.rectAreaLength=m,b.hemiLength=d,b.numDirectionalShadows=g,b.numPointShadows=_,b.numSpotShadows=x,b.numSpotMaps=A,b.numLightProbes=w,i.version=GI++)}function l(u,c){let f=0,h=0,p=0,v=0,y=0;const m=c.matrixWorldInverse;for(let d=0,g=u.length;d<g;d++){const _=u[d];if(_.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(_.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const x=i.rectArea[v];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function J0(t){const e=new jI(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function XI(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new J0(t),e.set(r,[a])):s>=o.length?(a=new J0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const YI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KI(t,e,n){let i=new gM;const r=new je,s=new je,o=new Ct,a=new vP({depthPacking:Cb}),l=new _P,u={},c=n.maxTextureSize,f={[xr]:sn,[sn]:xr,[Ci]:Ci},h=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:YI,fragmentShader:qI}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new si;v.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new di(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=XS;let d=this.type;this.render=function(C,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),H=t.state;H.setBlending(hr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=d!==Ti&&this.type===Ti,K=d===Ti&&this.type!==Ti;for(let Z=0,Y=C.length;Z<Y;Z++){const W=C[Z],L=W.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const j=L.getFrameExtents();if(r.multiply(j),s.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/j.x),r.x=s.x*j.x,L.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/j.y),r.y=s.y*j.y,L.mapSize.y=s.y)),L.map===null||k===!0||K===!0){const oe=this.type!==Ti?{minFilter:En,magFilter:En}:{};L.map!==null&&L.map.dispose(),L.map=new ss(r.x,r.y,oe),L.map.texture.name=W.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Q=L.getViewportCount();for(let oe=0;oe<Q;oe++){const Se=L.getViewport(oe);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),H.viewport(o),L.updateMatrices(W,oe),i=L.getFrustum(),x(w,b,L.camera,W,this.type)}L.isPointLightShadow!==!0&&this.type===Ti&&g(L,b),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(T,S,P)};function g(C,w){const b=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ss(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,b,h,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,b,p,y,null)}function _(C,w,b,T){let S=null;const P=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)S=P;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const H=S.uuid,k=w.uuid;let K=u[H];K===void 0&&(K={},u[H]=K);let Z=K[k];Z===void 0&&(Z=S.clone(),K[k]=Z,w.addEventListener("dispose",A)),S=Z}if(S.visible=w.visible,S.wireframe=w.wireframe,T===Ti?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=b}return S}function x(C,w,b,T,S){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Ti)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const k=e.update(C),K=C.material;if(Array.isArray(K)){const Z=k.groups;for(let Y=0,W=Z.length;Y<W;Y++){const L=Z[Y],j=K[L.materialIndex];if(j&&j.visible){const Q=_(C,j,T,S);C.onBeforeShadow(t,C,w,b,k,Q,L),t.renderBufferDirect(b,null,k,Q,C,L),C.onAfterShadow(t,C,w,b,k,Q,L)}}}else if(K.visible){const Z=_(C,K,T,S);C.onBeforeShadow(t,C,w,b,k,Z,null),t.renderBufferDirect(b,null,k,Z,C,null),C.onAfterShadow(t,C,w,b,k,Z,null)}}const H=C.children;for(let k=0,K=H.length;k<K;k++)x(H[k],w,b,T,S)}function A(C){C.target.removeEventListener("dispose",A);for(const b in u){const T=u[b],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const $I={[nh]:ih,[rh]:ah,[sh]:lh,[uo]:oh,[ih]:nh,[ah]:rh,[lh]:sh,[oh]:uo};function ZI(t,e){function n(){let N=!1;const ce=new Ct;let G=null;const J=new Ct(0,0,0,0);return{setMask:function(he){G!==he&&!N&&(t.colorMask(he,he,he,he),G=he)},setLocked:function(he){N=he},setClear:function(he,fe,Ue,yt,Gt){Gt===!0&&(he*=yt,fe*=yt,Ue*=yt),ce.set(he,fe,Ue,yt),J.equals(ce)===!1&&(t.clearColor(he,fe,Ue,yt),J.copy(ce))},reset:function(){N=!1,G=null,J.set(-1,0,0,0)}}}function i(){let N=!1,ce=!1,G=null,J=null,he=null;return{setReversed:function(fe){if(ce!==fe){const Ue=e.get("EXT_clip_control");fe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ce=fe;const yt=he;he=null,this.setClear(yt)}},getReversed:function(){return ce},setTest:function(fe){fe?se(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(fe){G!==fe&&!N&&(t.depthMask(fe),G=fe)},setFunc:function(fe){if(ce&&(fe=$I[fe]),J!==fe){switch(fe){case nh:t.depthFunc(t.NEVER);break;case ih:t.depthFunc(t.ALWAYS);break;case rh:t.depthFunc(t.LESS);break;case uo:t.depthFunc(t.LEQUAL);break;case sh:t.depthFunc(t.EQUAL);break;case oh:t.depthFunc(t.GEQUAL);break;case ah:t.depthFunc(t.GREATER);break;case lh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=fe}},setLocked:function(fe){N=fe},setClear:function(fe){he!==fe&&(ce&&(fe=1-fe),t.clearDepth(fe),he=fe)},reset:function(){N=!1,G=null,J=null,he=null,ce=!1}}}function r(){let N=!1,ce=null,G=null,J=null,he=null,fe=null,Ue=null,yt=null,Gt=null;return{setTest:function(nt){N||(nt?se(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!N&&(t.stencilMask(nt),ce=nt)},setFunc:function(nt,Gn,_i){(G!==nt||J!==Gn||he!==_i)&&(t.stencilFunc(nt,Gn,_i),G=nt,J=Gn,he=_i)},setOp:function(nt,Gn,_i){(fe!==nt||Ue!==Gn||yt!==_i)&&(t.stencilOp(nt,Gn,_i),fe=nt,Ue=Gn,yt=_i)},setLocked:function(nt){N=nt},setClear:function(nt){Gt!==nt&&(t.clearStencil(nt),Gt=nt)},reset:function(){N=!1,ce=null,G=null,J=null,he=null,fe=null,Ue=null,yt=null,Gt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,p=[],v=null,y=!1,m=null,d=null,g=null,_=null,x=null,A=null,C=null,w=new tt(0,0,0),b=0,T=!1,S=null,P=null,H=null,k=null,K=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,W=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(L)[1]),Y=W>=1):L.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),Y=W>=2);let j=null,Q={};const oe=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),Ke=new Ct().fromArray(oe),X=new Ct().fromArray(Se);function re(N,ce,G,J){const he=new Uint8Array(4),fe=t.createTexture();t.bindTexture(N,fe),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<G;Ue++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ce+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return fe}const pe={};pe[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(t.DEPTH_TEST),o.setFunc(uo),Xe(!1),Ge(e0),se(t.CULL_FACE),D(hr);function se(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function we(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function Qe(N,ce){return f[N]!==ce?(t.bindFramebuffer(N,ce),f[N]=ce,N===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ce),N===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function De(N,ce){let G=p,J=!1;if(N){G=h.get(ce),G===void 0&&(G=[],h.set(ce,G));const he=N.textures;if(G.length!==he.length||G[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,Ue=he.length;fe<Ue;fe++)G[fe]=t.COLOR_ATTACHMENT0+fe;G.length=he.length,J=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,J=!0);J&&t.drawBuffers(G)}function Tt(N){return v!==N?(t.useProgram(N),v=N,!0):!1}const ht={[Vr]:t.FUNC_ADD,[JR]:t.FUNC_SUBTRACT,[eb]:t.FUNC_REVERSE_SUBTRACT};ht[tb]=t.MIN,ht[nb]=t.MAX;const He={[ib]:t.ZERO,[rb]:t.ONE,[sb]:t.SRC_COLOR,[eh]:t.SRC_ALPHA,[fb]:t.SRC_ALPHA_SATURATE,[ub]:t.DST_COLOR,[ab]:t.DST_ALPHA,[ob]:t.ONE_MINUS_SRC_COLOR,[th]:t.ONE_MINUS_SRC_ALPHA,[cb]:t.ONE_MINUS_DST_COLOR,[lb]:t.ONE_MINUS_DST_ALPHA,[db]:t.CONSTANT_COLOR,[hb]:t.ONE_MINUS_CONSTANT_COLOR,[pb]:t.CONSTANT_ALPHA,[mb]:t.ONE_MINUS_CONSTANT_ALPHA};function D(N,ce,G,J,he,fe,Ue,yt,Gt,nt){if(N===hr){y===!0&&(we(t.BLEND),y=!1);return}if(y===!1&&(se(t.BLEND),y=!0),N!==QR){if(N!==m||nt!==T){if((d!==Vr||x!==Vr)&&(t.blendEquation(t.FUNC_ADD),d=Vr,x=Vr),nt)switch(N){case Qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case t0:t.blendFunc(t.ONE,t.ONE);break;case n0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case i0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case t0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case n0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case i0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,_=null,A=null,C=null,w.set(0,0,0),b=0,m=N,T=nt}return}he=he||ce,fe=fe||G,Ue=Ue||J,(ce!==d||he!==x)&&(t.blendEquationSeparate(ht[ce],ht[he]),d=ce,x=he),(G!==g||J!==_||fe!==A||Ue!==C)&&(t.blendFuncSeparate(He[G],He[J],He[fe],He[Ue]),g=G,_=J,A=fe,C=Ue),(yt.equals(w)===!1||Gt!==b)&&(t.blendColor(yt.r,yt.g,yt.b,Gt),w.copy(yt),b=Gt),m=N,T=!1}function Cn(N,ce){N.side===Ci?we(t.CULL_FACE):se(t.CULL_FACE);let G=N.side===sn;ce&&(G=!G),Xe(G),N.blending===Qs&&N.transparent===!1?D(hr):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const J=N.stencilWrite;a.setTest(J),J&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),lt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(N){S!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),S=N)}function Ge(N){N!==KR?(se(t.CULL_FACE),N!==P&&(N===e0?t.cullFace(t.BACK):N===$R?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),P=N}function Ee(N){N!==H&&(Y&&t.lineWidth(N),H=N)}function lt(N,ce,G){N?(se(t.POLYGON_OFFSET_FILL),(k!==ce||K!==G)&&(t.polygonOffset(ce,G),k=ce,K=G)):we(t.POLYGON_OFFSET_FILL)}function Me(N){N?se(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function R(N){N===void 0&&(N=t.TEXTURE0+Z-1),j!==N&&(t.activeTexture(N),j=N)}function M(N,ce,G){G===void 0&&(j===null?G=t.TEXTURE0+Z-1:G=j);let J=Q[G];J===void 0&&(J={type:void 0,texture:void 0},Q[G]=J),(J.type!==N||J.texture!==ce)&&(j!==G&&(t.activeTexture(G),j=G),t.bindTexture(N,ce||pe[N]),J.type=N,J.texture=ce)}function B(){const N=Q[j];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{t.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{t.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{t.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{t.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{t.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{t.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{t.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{t.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{t.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{t.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(N){Ke.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Ke.copy(N))}function _e(N){X.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),X.copy(N))}function We(N,ce){let G=u.get(ce);G===void 0&&(G=new WeakMap,u.set(ce,G));let J=G.get(N);J===void 0&&(J=t.getUniformBlockIndex(ce,N.name),G.set(N,J))}function Oe(N,ce){const J=u.get(ce).get(N);l.get(ce)!==J&&(t.uniformBlockBinding(ce,J,N.__bindingPointIndex),l.set(ce,J))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},j=null,Q={},f={},h=new WeakMap,p=[],v=null,y=!1,m=null,d=null,g=null,_=null,x=null,A=null,C=null,w=new tt(0,0,0),b=0,T=!1,S=null,P=null,H=null,k=null,K=null,Ke.set(0,0,t.canvas.width,t.canvas.height),X.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:we,bindFramebuffer:Qe,drawBuffers:De,useProgram:Tt,setBlending:D,setMaterial:Cn,setFlipSided:Xe,setCullFace:Ge,setLineWidth:Ee,setPolygonOffset:lt,setScissorTest:Me,activeTexture:R,bindTexture:M,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:ee,texImage2D:ve,texImage3D:Pe,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:be,texStorage3D:ne,texSubImage2D:q,texSubImage3D:xe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ce,scissor:Ie,viewport:_e,reset:ot}}function QI(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new je,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return p?new OffscreenCanvas(R,M):Oa("canvas")}function y(R,M,B){let $=1;const ee=Me(R);if((ee.width>B||ee.height>B)&&($=B/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor($*ee.width),xe=Math.floor($*ee.height);f===void 0&&(f=v(q,xe));const ue=M?v(q,xe):f;return ue.width=q,ue.height=xe,ue.getContext("2d").drawImage(R,0,0,q,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+xe+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){t.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,M,B,$,ee=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===t.RED&&(B===t.FLOAT&&(q=t.R32F),B===t.HALF_FLOAT&&(q=t.R16F),B===t.UNSIGNED_BYTE&&(q=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.R8UI),B===t.UNSIGNED_SHORT&&(q=t.R16UI),B===t.UNSIGNED_INT&&(q=t.R32UI),B===t.BYTE&&(q=t.R8I),B===t.SHORT&&(q=t.R16I),B===t.INT&&(q=t.R32I)),M===t.RG&&(B===t.FLOAT&&(q=t.RG32F),B===t.HALF_FLOAT&&(q=t.RG16F),B===t.UNSIGNED_BYTE&&(q=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.RG8UI),B===t.UNSIGNED_SHORT&&(q=t.RG16UI),B===t.UNSIGNED_INT&&(q=t.RG32UI),B===t.BYTE&&(q=t.RG8I),B===t.SHORT&&(q=t.RG16I),B===t.INT&&(q=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.RGB8UI),B===t.UNSIGNED_SHORT&&(q=t.RGB16UI),B===t.UNSIGNED_INT&&(q=t.RGB32UI),B===t.BYTE&&(q=t.RGB8I),B===t.SHORT&&(q=t.RGB16I),B===t.INT&&(q=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),B===t.UNSIGNED_INT&&(q=t.RGBA32UI),B===t.BYTE&&(q=t.RGBA8I),B===t.SHORT&&(q=t.RGBA16I),B===t.INT&&(q=t.RGBA32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),M===t.RGBA){const xe=ee?Wu:Ze.getTransfer($);B===t.FLOAT&&(q=t.RGBA32F),B===t.HALF_FLOAT&&(q=t.RGBA16F),B===t.UNSIGNED_BYTE&&(q=xe===rt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(R,M){let B;return R?M===null||M===rs||M===Na?B=t.DEPTH24_STENCIL8:M===Pi?B=t.DEPTH32F_STENCIL8:M===Ia&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===rs||M===Na?B=t.DEPTH_COMPONENT24:M===Pi?B=t.DEPTH_COMPONENT32F:M===Ia&&(B=t.DEPTH_COMPONENT16),B}function A(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==En&&R.minFilter!==fi?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),b(M),M.isVideoTexture&&c.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),S(M)}function b(R){const M=i.get(R);if(M.__webglInit===void 0)return;const B=R.source,$=h.get(B);if($){const ee=$[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(R),Object.keys($).length===0&&h.delete(B)}i.remove(R)}function T(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const B=R.source,$=h.get(B);delete $[M.__cacheKey],o.memory.textures--}function S(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let ee=0;ee<M.__webglFramebuffer[$].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[$][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)t.deleteFramebuffer(M.__webglFramebuffer[$]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let $=0,ee=B.length;$<ee;$++){const q=i.get(B[$]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(B[$])}i.remove(R)}let P=0;function H(){P=0}function k(){const R=P;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function K(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Z(R,M){const B=i.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,R,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function Y(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){X(B,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function W(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){X(B,R,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function L(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){re(B,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const j={[fh]:t.REPEAT,[Yr]:t.CLAMP_TO_EDGE,[dh]:t.MIRRORED_REPEAT},Q={[En]:t.NEAREST,[Ab]:t.NEAREST_MIPMAP_NEAREST,[xl]:t.NEAREST_MIPMAP_LINEAR,[fi]:t.LINEAR,[lf]:t.LINEAR_MIPMAP_NEAREST,[qr]:t.LINEAR_MIPMAP_LINEAR},oe={[Pb]:t.NEVER,[Fb]:t.ALWAYS,[Db]:t.LESS,[iM]:t.LEQUAL,[Lb]:t.EQUAL,[Ub]:t.GEQUAL,[Ib]:t.GREATER,[Nb]:t.NOTEQUAL};function Se(R,M){if(M.type===Pi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===fi||M.magFilter===lf||M.magFilter===xl||M.magFilter===qr||M.minFilter===fi||M.minFilter===lf||M.minFilter===xl||M.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,j[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,j[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,j[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Q[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Q[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===En||M.minFilter!==xl&&M.minFilter!==qr||M.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ke(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const $=M.source;let ee=h.get($);ee===void 0&&(ee={},h.set($,ee));const q=K(M);if(q!==R.__cacheKey){ee[q]===void 0&&(ee[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[q].usedTimes++;const xe=ee[R.__cacheKey];xe!==void 0&&(ee[R.__cacheKey].usedTimes--,xe.usedTimes===0&&T(M)),R.__cacheKey=q,R.__webglTexture=ee[q].texture}return B}function X(R,M,B){let $=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=t.TEXTURE_3D);const ee=Ke(R,M),q=M.source;n.bindTexture($,R.__webglTexture,t.TEXTURE0+B);const xe=i.get(q);if(q.version!==xe.__version||ee===!0){n.activeTexture(t.TEXTURE0+B);const ue=Ze.getPrimaries(Ze.workingColorSpace),Ce=M.colorSpace===tr?null:Ze.getPrimaries(M.colorSpace),be=M.colorSpace===tr||ue===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ne=y(M.image,!1,r.maxTextureSize);ne=lt(M,ne);const ve=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type);let Ie=_(M.internalFormat,ve,Pe,M.colorSpace,M.isVideoTexture);Se($,M);let _e;const We=M.mipmaps,Oe=M.isVideoTexture!==!0,ot=xe.__version===void 0||ee===!0,N=q.dataReady,ce=A(M,ne);if(M.isDepthTexture)Ie=x(M.format===Fa,M.type),ot&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Ie,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Ie,ne.width,ne.height,0,ve,Pe,null));else if(M.isDataTexture)if(We.length>0){Oe&&ot&&n.texStorage2D(t.TEXTURE_2D,ce,Ie,We[0].width,We[0].height);for(let G=0,J=We.length;G<J;G++)_e=We[G],Oe?N&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,ve,Pe,_e.data):n.texImage2D(t.TEXTURE_2D,G,Ie,_e.width,_e.height,0,ve,Pe,_e.data);M.generateMipmaps=!1}else Oe?(ot&&n.texStorage2D(t.TEXTURE_2D,ce,Ie,ne.width,ne.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,ve,Pe,ne.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,ne.width,ne.height,0,ve,Pe,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Ie,We[0].width,We[0].height,ne.depth);for(let G=0,J=We.length;G<J;G++)if(_e=We[G],M.format!==Jn)if(ve!==null)if(Oe){if(N)if(M.layerUpdates.size>0){const he=b0(_e.width,_e.height,M.format,M.type);for(const fe of M.layerUpdates){const Ue=_e.data.subarray(fe*he/_e.data.BYTES_PER_ELEMENT,(fe+1)*he/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,fe,_e.width,_e.height,1,ve,Ue)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,ne.depth,ve,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,Ie,_e.width,_e.height,ne.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,ne.depth,ve,Pe,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,Ie,_e.width,_e.height,ne.depth,0,ve,Pe,_e.data)}else{Oe&&ot&&n.texStorage2D(t.TEXTURE_2D,ce,Ie,We[0].width,We[0].height);for(let G=0,J=We.length;G<J;G++)_e=We[G],M.format!==Jn?ve!==null?Oe?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,ve,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,G,Ie,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,ve,Pe,_e.data):n.texImage2D(t.TEXTURE_2D,G,Ie,_e.width,_e.height,0,ve,Pe,_e.data)}else if(M.isDataArrayTexture)if(Oe){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Ie,ne.width,ne.height,ne.depth),N)if(M.layerUpdates.size>0){const G=b0(ne.width,ne.height,M.format,M.type);for(const J of M.layerUpdates){const he=ne.data.subarray(J*G/ne.data.BYTES_PER_ELEMENT,(J+1)*G/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,ve,Pe,he)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ve,Pe,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,ne.width,ne.height,ne.depth,0,ve,Pe,ne.data);else if(M.isData3DTexture)Oe?(ot&&n.texStorage3D(t.TEXTURE_3D,ce,Ie,ne.width,ne.height,ne.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ve,Pe,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,ne.width,ne.height,ne.depth,0,ve,Pe,ne.data);else if(M.isFramebufferTexture){if(ot)if(Oe)n.texStorage2D(t.TEXTURE_2D,ce,Ie,ne.width,ne.height);else{let G=ne.width,J=ne.height;for(let he=0;he<ce;he++)n.texImage2D(t.TEXTURE_2D,he,Ie,G,J,0,ve,Pe,null),G>>=1,J>>=1}}else if(We.length>0){if(Oe&&ot){const G=Me(We[0]);n.texStorage2D(t.TEXTURE_2D,ce,Ie,G.width,G.height)}for(let G=0,J=We.length;G<J;G++)_e=We[G],Oe?N&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ve,Pe,_e):n.texImage2D(t.TEXTURE_2D,G,Ie,ve,Pe,_e);M.generateMipmaps=!1}else if(Oe){if(ot){const G=Me(ne);n.texStorage2D(t.TEXTURE_2D,ce,Ie,G.width,G.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Pe,ne)}else n.texImage2D(t.TEXTURE_2D,0,Ie,ve,Pe,ne);m(M)&&d($),xe.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function re(R,M,B){if(M.image.length!==6)return;const $=Ke(R,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const q=i.get(ee);if(ee.version!==q.__version||$===!0){n.activeTexture(t.TEXTURE0+B);const xe=Ze.getPrimaries(Ze.workingColorSpace),ue=M.colorSpace===tr?null:Ze.getPrimaries(M.colorSpace),Ce=M.colorSpace===tr||xe===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!be&&!ne?ve[J]=y(M.image[J],!0,r.maxCubemapSize):ve[J]=ne?M.image[J].image:M.image[J],ve[J]=lt(M,ve[J]);const Pe=ve[0],Ie=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),We=_(M.internalFormat,Ie,_e,M.colorSpace),Oe=M.isVideoTexture!==!0,ot=q.__version===void 0||$===!0,N=ee.dataReady;let ce=A(M,Pe);Se(t.TEXTURE_CUBE_MAP,M);let G;if(be){Oe&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,We,Pe.width,Pe.height);for(let J=0;J<6;J++){G=ve[J].mipmaps;for(let he=0;he<G.length;he++){const fe=G[he];M.format!==Jn?Ie!==null?Oe?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,fe.width,fe.height,Ie,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,We,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,fe.width,fe.height,Ie,_e,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,We,fe.width,fe.height,0,Ie,_e,fe.data)}}}else{if(G=M.mipmaps,Oe&&ot){G.length>0&&ce++;const J=Me(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,We,J.width,J.height)}for(let J=0;J<6;J++)if(ne){Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Ie,_e,ve[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,ve[J].width,ve[J].height,0,Ie,_e,ve[J].data);for(let he=0;he<G.length;he++){const Ue=G[he].image[J].image;Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Ue.width,Ue.height,Ie,_e,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,We,Ue.width,Ue.height,0,Ie,_e,Ue.data)}}else{Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,_e,ve[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,Ie,_e,ve[J]);for(let he=0;he<G.length;he++){const fe=G[he];Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Ie,_e,fe.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,We,Ie,_e,fe.image[J])}}}m(M)&&d(t.TEXTURE_CUBE_MAP),q.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function pe(R,M,B,$,ee,q){const xe=s.convert(B.format,B.colorSpace),ue=s.convert(B.type),Ce=_(B.internalFormat,xe,ue,B.colorSpace),be=i.get(M),ne=i.get(B);if(ne.__renderTarget=M,!be.__hasExternalTextures){const ve=Math.max(1,M.width>>q),Pe=Math.max(1,M.height>>q);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,q,Ce,ve,Pe,M.depth,0,xe,ue,null):n.texImage2D(ee,q,Ce,ve,Pe,0,xe,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ge(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,ee,ne.__webglTexture,0,Xe(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,ee,ne.__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(R,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const $=M.depthTexture,ee=$&&$.isDepthTexture?$.type:null,q=x(M.stencilBuffer,ee),xe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=Xe(M);Ge(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,q,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,R)}else{const $=M.textures;for(let ee=0;ee<$.length;ee++){const q=$[ee],xe=s.convert(q.format,q.colorSpace),ue=s.convert(q.type),Ce=_(q.internalFormat,xe,ue,q.colorSpace),be=Xe(M);B&&Ge(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,Ce,M.width,M.height):Ge(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,Ce,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Ce,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function we(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);const ee=$.__webglTexture,q=Xe(M);if(M.depthTexture.format===Ua)Ge(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Fa)Ge(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Qe(R){const M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=$}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const $=R.texture.mipmaps;$&&$.length>0?we(M.__webglFramebuffer[0],R):we(M.__webglFramebuffer,R)}else if(B){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=t.createRenderbuffer(),se(M.__webglDepthbuffer[$],R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,q)}}else{const $=R.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),se(M.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(R,M,B){const $=i.get(R);M!==void 0&&pe($.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Qe(R)}function Tt(R){const M=R.texture,B=i.get(R),$=i.get(M);R.addEventListener("dispose",w);const ee=R.textures,q=R.isWebGLCubeRenderTarget===!0,xe=ee.length>1;if(xe||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=M.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ue]=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)B.__webglFramebuffer[ue][Ce]=t.createFramebuffer()}else B.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)B.__webglFramebuffer[ue]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(xe)for(let ue=0,Ce=ee.length;ue<Ce;ue++){const be=i.get(ee[ue]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ge(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const Ce=ee[ue];B.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ue]);const be=s.convert(Ce.format,Ce.colorSpace),ne=s.convert(Ce.type),ve=_(Ce.internalFormat,be,ne,Ce.colorSpace,R.isXRRenderTarget===!0),Pe=Xe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,ve,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,B.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),se(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),Se(t.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)pe(B.__webglFramebuffer[ue][Ce],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce);else pe(B.__webglFramebuffer[ue],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let ue=0,Ce=ee.length;ue<Ce;ue++){const be=ee[ue],ne=i.get(be);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),Se(t.TEXTURE_2D,be),pe(B.__webglFramebuffer,R,be,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),m(be)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,$.__webglTexture),Se(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)pe(B.__webglFramebuffer[Ce],R,M,t.COLOR_ATTACHMENT0,ue,Ce);else pe(B.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ue,0);m(M)&&d(ue),n.unbindTexture()}R.depthBuffer&&Qe(R)}function ht(R){const M=R.textures;for(let B=0,$=M.length;B<$;B++){const ee=M[B];if(m(ee)){const q=g(R),xe=i.get(ee).__webglTexture;n.bindTexture(q,xe),d(q),n.unbindTexture()}}}const He=[],D=[];function Cn(R){if(R.samples>0){if(Ge(R)===!1){const M=R.textures,B=R.width,$=R.height;let ee=t.COLOR_BUFFER_BIT;const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(R),ue=M.length>1;if(ue)for(let be=0;be<M.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Ce=R.texture.mipmaps;Ce&&Ce.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let be=0;be<M.length;be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[be]);const ne=i.get(M[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,B,$,0,0,B,$,ee,t.NEAREST),l===!0&&(He.length=0,D.length=0,He.push(t.COLOR_ATTACHMENT0+be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(He.push(q),D.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,He))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let be=0;be<M.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,xe.__webglColorRenderbuffer[be]);const ne=i.get(M[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Xe(R){return Math.min(r.maxSamples,R.samples)}function Ge(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ee(R){const M=o.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function lt(R,M){const B=R.colorSpace,$=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==ho&&B!==tr&&(Ze.getTransfer(B)===rt?($!==Jn||ee!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=L,this.rebindTextures=De,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ge}function JI(t,e){function n(i,r=tr){let s;const o=Ze.getTransfer(r);if(i===Vi)return t.UNSIGNED_BYTE;if(i===gm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===vm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ZS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===KS)return t.BYTE;if(i===$S)return t.SHORT;if(i===Ia)return t.UNSIGNED_SHORT;if(i===mm)return t.INT;if(i===rs)return t.UNSIGNED_INT;if(i===Pi)return t.FLOAT;if(i===qa)return t.HALF_FLOAT;if(i===QS)return t.ALPHA;if(i===JS)return t.RGB;if(i===Jn)return t.RGBA;if(i===Ua)return t.DEPTH_COMPONENT;if(i===Fa)return t.DEPTH_STENCIL;if(i===eM)return t.RED;if(i===_m)return t.RED_INTEGER;if(i===tM)return t.RG;if(i===ym)return t.RG_INTEGER;if(i===xm)return t.RGBA_INTEGER;if(i===lu||i===uu||i===cu||i===fu)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===lu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===lu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hh||i===ph||i===mh||i===gh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ph)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vh||i===_h||i===yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vh||i===_h)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xh||i===Sh||i===Mh||i===Eh||i===Th||i===Ah||i===wh||i===Ch||i===Rh||i===bh||i===Ph||i===Dh||i===Lh||i===Ih)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Eh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Th)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ah)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ch)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ph)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ih)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===du||i===Nh||i===Uh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===du)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nM||i===Fh||i===Oh||i===Bh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===du)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Na?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const e3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class n3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new on,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Sr({vertexShader:e3,fragmentShader:t3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new di(new _c(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i3 extends So{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,v=null;const y=new n3,m=n.getContextAttributes();let d=null,g=null;const _=[],x=[],A=new je;let C=null;const w=new Fn;w.viewport=new Ct;const b=new Fn;b.viewport=new Ct;const T=[w,b],S=new TP;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let re=_[X];return re===void 0&&(re=new Pf,_[X]=re),re.getTargetRaySpace()},this.getControllerGrip=function(X){let re=_[X];return re===void 0&&(re=new Pf,_[X]=re),re.getGripSpace()},this.getHand=function(X){let re=_[X];return re===void 0&&(re=new Pf,_[X]=re),re.getHandSpace()};function k(X){const re=x.indexOf(X.inputSource);if(re===-1)return;const pe=_[re];pe!==void 0&&(pe.update(X.inputSource,X.frame,u||o),pe.dispatchEvent({type:X.type,data:X.inputSource}))}function K(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<_.length;X++){const re=x[X];re!==null&&(x[X]=null,_[X].disconnect(re))}P=null,H=null,y.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,g=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,se=null,we=null;m.depth&&(we=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=m.stencil?Fa:Ua,se=m.stencil?Na:rs);const Qe={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Qe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new ss(h.textureWidth,h.textureHeight,{format:Jn,type:Vi,depthTexture:new _M(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new ss(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(X){for(let re=0;re<X.removed.length;re++){const pe=X.removed[re],se=x.indexOf(pe);se>=0&&(x[se]=null,_[se].disconnect(pe))}for(let re=0;re<X.added.length;re++){const pe=X.added[re];let se=x.indexOf(pe);if(se===-1){for(let Qe=0;Qe<_.length;Qe++)if(Qe>=x.length){x.push(pe),se=Qe;break}else if(x[Qe]===null){x[Qe]=pe,se=Qe;break}if(se===-1)break}const we=_[se];we&&we.connect(pe)}}const Y=new O,W=new O;function L(X,re,pe){Y.setFromMatrixPosition(re.matrixWorld),W.setFromMatrixPosition(pe.matrixWorld);const se=Y.distanceTo(W),we=re.projectionMatrix.elements,Qe=pe.projectionMatrix.elements,De=we[14]/(we[10]-1),Tt=we[14]/(we[10]+1),ht=(we[9]+1)/we[5],He=(we[9]-1)/we[5],D=(we[8]-1)/we[0],Cn=(Qe[8]+1)/Qe[0],Xe=De*D,Ge=De*Cn,Ee=se/(-D+Cn),lt=Ee*-D;if(re.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(lt),X.translateZ(Ee),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),we[10]===-1)X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Me=De+Ee,R=Tt+Ee,M=Xe-lt,B=Ge+(se-lt),$=ht*Tt/R*Me,ee=He*Tt/R*Me;X.projectionMatrix.makePerspective(M,B,$,ee,Me,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function j(X,re){re===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(re.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let re=X.near,pe=X.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(pe=y.depthFar)),S.near=b.near=w.near=re,S.far=b.far=w.far=pe,(P!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,H=S.far),w.layers.mask=X.layers.mask|2,b.layers.mask=X.layers.mask|4,S.layers.mask=w.layers.mask|b.layers.mask;const se=X.parent,we=S.cameras;j(S,se);for(let Qe=0;Qe<we.length;Qe++)j(we[Qe],se);we.length===2?L(S,w,b):S.projectionMatrix.copy(w.projectionMatrix),Q(X,S,se)};function Q(X,re,pe){pe===null?X.matrix.copy(re.matrixWorld):(X.matrix.copy(pe.matrixWorld),X.matrix.invert(),X.matrix.multiply(re.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Vh*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let oe=null;function Se(X,re){if(c=re.getViewerPose(u||o),v=re,c!==null){const pe=c.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let se=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let De=0;De<pe.length;De++){const Tt=pe[De];let ht=null;if(p!==null)ht=p.getViewport(Tt);else{const D=f.getViewSubImage(h,Tt);ht=D.viewport,De===0&&(e.setRenderTargetTextures(g,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(g))}let He=T[De];He===void 0&&(He=new Fn,He.layers.enable(De),He.viewport=new Ct,T[De]=He),He.matrix.fromArray(Tt.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Tt.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ht.x,ht.y,ht.width,ht.height),De===0&&(S.matrix.copy(He.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(He)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const De=f.getDepthInformation(pe[0]);De&&De.isValid&&De.texture&&y.init(e,De,r.renderState)}}for(let pe=0;pe<_.length;pe++){const se=x[pe],we=_[pe];se!==null&&we!==void 0&&we.update(se,re,u||o)}oe&&oe(X,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),v=null}const Ke=new yM;Ke.setAnimationLoop(Se),this.setAnimationLoop=function(X){oe=X},this.dispose=function(){}}}const Nr=new zi,r3=new Et;function s3(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,fM(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,g,_,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,g,_):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===sn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===sn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const g=e.get(d),_=g.envMap,x=g.envMapRotation;_&&(m.envMap.value=_,Nr.copy(x),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),m.envMapRotation.value.setFromMatrix4(r3.makeRotationFromEuler(Nr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,g,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*g,m.scale.value=_*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,g){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const g=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function o3(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const x=_.program;i.uniformBlockBinding(g,x)}function u(g,_){let x=r[g.id];x===void 0&&(v(g),x=c(g),r[g.id]=x,g.addEventListener("dispose",m));const A=_.program;i.updateUBOMapping(g,A);const C=e.render.frame;s[g.id]!==C&&(h(g),s[g.id]=C)}function c(g){const _=f();g.__bindingPointIndex=_;const x=t.createBuffer(),A=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,x),x}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],x=g.uniforms,A=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,w=x.length;C<w;C++){const b=Array.isArray(x[C])?x[C]:[x[C]];for(let T=0,S=b.length;T<S;T++){const P=b[T];if(p(P,C,T,A)===!0){const H=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let Z=0;Z<k.length;Z++){const Y=k[Z],W=y(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,H+K,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,K),K+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,x,A){const C=g.value,w=_+"_"+x;if(A[w]===void 0)return typeof C=="number"||typeof C=="boolean"?A[w]=C:A[w]=C.clone(),!0;{const b=A[w];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return A[w]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function v(g){const _=g.uniforms;let x=0;const A=16;for(let w=0,b=_.length;w<b;w++){const T=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,P=T.length;S<P;S++){const H=T[S],k=Array.isArray(H.value)?H.value:[H.value];for(let K=0,Z=k.length;K<Z;K++){const Y=k[K],W=y(Y),L=x%A,j=L%W.boundary,Q=L+j;x+=j,Q!==0&&A-Q<W.storage&&(x+=A-Q),H.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=W.storage}}}const C=x%A;return C>0&&(x+=A-C),g.__size=x,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class a3{constructor(e={}){const{canvas:n=Bb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),y=new Int32Array(4);let m=null,d=null;const g=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=In;let C=0,w=0,b=null,T=-1,S=null;const P=new Ct,H=new Ct;let k=null;const K=new tt(0);let Z=0,Y=n.width,W=n.height,L=1,j=null,Q=null;const oe=new Ct(0,0,Y,W),Se=new Ct(0,0,Y,W);let Ke=!1;const X=new gM;let re=!1,pe=!1;const se=new Et,we=new Et,Qe=new O,De=new Ct,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function He(){return b===null?L:1}let D=i;function Cn(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pm}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",fe,!1),D===null){const U="webgl2";if(D=Cn(U,E),D===null)throw Cn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Xe,Ge,Ee,lt,Me,R,M,B,$,ee,q,xe,ue,Ce,be,ne,ve,Pe,Ie,_e,We,Oe,ot,N;function ce(){Xe=new vL(D),Xe.init(),Oe=new JI(D,Xe),Ge=new cL(D,Xe,e,Oe),Ee=new ZI(D,Xe),Ge.reverseDepthBuffer&&h&&Ee.buffers.depth.setReversed(!0),lt=new xL(D),Me=new BI,R=new QI(D,Xe,Ee,Me,Ge,Oe,lt),M=new dL(x),B=new gL(x),$=new wP(D),ot=new lL(D,$),ee=new _L(D,$,lt,ot),q=new ML(D,ee,$,lt),Ie=new SL(D,Ge,R),ne=new fL(Me),xe=new OI(x,M,B,Xe,Ge,ot,ne),ue=new s3(x,Me),Ce=new VI,be=new XI(Xe),Pe=new aL(x,M,B,Ee,q,p,l),ve=new KI(x,q,Ge),N=new o3(D,lt,Ge,Ee),_e=new uL(D,Xe,lt),We=new yL(D,Xe,lt),lt.programs=xe.programs,x.capabilities=Ge,x.extensions=Xe,x.properties=Me,x.renderLists=Ce,x.shadowMap=ve,x.state=Ee,x.info=lt}ce();const G=new i3(x,D);this.xr=G,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(E){E!==void 0&&(L=E,this.setSize(Y,W,!1))},this.getSize=function(E){return E.set(Y,W)},this.setSize=function(E,U,V=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,W=U,n.width=Math.floor(E*L),n.height=Math.floor(U*L),V===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Y*L,W*L).floor()},this.setDrawingBufferSize=function(E,U,V){Y=E,W=U,L=V,n.width=Math.floor(E*V),n.height=Math.floor(U*V),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(oe)},this.setViewport=function(E,U,V,z){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,U,V,z),Ee.viewport(P.copy(oe).multiplyScalar(L).round())},this.getScissor=function(E){return E.copy(Se)},this.setScissor=function(E,U,V,z){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,U,V,z),Ee.scissor(H.copy(Se).multiplyScalar(L).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(E){Ee.setScissorTest(Ke=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,V=!0){let z=0;if(E){let F=!1;if(b!==null){const ie=b.texture.format;F=ie===xm||ie===ym||ie===_m}if(F){const ie=b.texture.type,le=ie===Vi||ie===rs||ie===Ia||ie===Na||ie===gm||ie===vm,ge=Pe.getClearColor(),ye=Pe.getClearAlpha(),Ne=ge.r,Le=ge.g,Te=ge.b;le?(v[0]=Ne,v[1]=Le,v[2]=Te,v[3]=ye,D.clearBufferuiv(D.COLOR,0,v)):(y[0]=Ne,y[1]=Le,y[2]=Te,y[3]=ye,D.clearBufferiv(D.COLOR,0,y))}else z|=D.COLOR_BUFFER_BIT}U&&(z|=D.DEPTH_BUFFER_BIT),V&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),Pe.dispose(),Ce.dispose(),be.dispose(),Me.dispose(),M.dispose(),B.dispose(),q.dispose(),ot.dispose(),N.dispose(),xe.dispose(),G.dispose(),G.removeEventListener("sessionstart",wm),G.removeEventListener("sessionend",Cm),wr.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=lt.autoReset,U=ve.enabled,V=ve.autoUpdate,z=ve.needsUpdate,F=ve.type;ce(),lt.autoReset=E,ve.enabled=U,ve.autoUpdate=V,ve.needsUpdate=z,ve.type=F}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ue(E){const U=E.target;U.removeEventListener("dispose",Ue),yt(U)}function yt(E){Gt(E),Me.remove(E)}function Gt(E){const U=Me.get(E).programs;U!==void 0&&(U.forEach(function(V){xe.releaseProgram(V)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,V,z,F,ie){U===null&&(U=Tt);const le=F.isMesh&&F.matrixWorld.determinant()<0,ge=PM(E,U,V,z,F);Ee.setMaterial(z,le);let ye=V.index,Ne=1;if(z.wireframe===!0){if(ye=ee.getWireframeAttribute(V),ye===void 0)return;Ne=2}const Le=V.drawRange,Te=V.attributes.position;let Ye=Le.start*Ne,Je=(Le.start+Le.count)*Ne;ie!==null&&(Ye=Math.max(Ye,ie.start*Ne),Je=Math.min(Je,(ie.start+ie.count)*Ne)),ye!==null?(Ye=Math.max(Ye,0),Je=Math.min(Je,ye.count)):Te!=null&&(Ye=Math.max(Ye,0),Je=Math.min(Je,Te.count));const Rt=Je-Ye;if(Rt<0||Rt===1/0)return;ot.setup(F,z,ge,V,ye);let xt,$e=_e;if(ye!==null&&(xt=$.get(ye),$e=We,$e.setIndex(xt)),F.isMesh)z.wireframe===!0?(Ee.setLineWidth(z.wireframeLinewidth*He()),$e.setMode(D.LINES)):$e.setMode(D.TRIANGLES);else if(F.isLine){let Ae=z.linewidth;Ae===void 0&&(Ae=1),Ee.setLineWidth(Ae*He()),F.isLineSegments?$e.setMode(D.LINES):F.isLineLoop?$e.setMode(D.LINE_LOOP):$e.setMode(D.LINE_STRIP)}else F.isPoints?$e.setMode(D.POINTS):F.isSprite&&$e.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)hu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))$e.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ae=F._multiDrawStarts,Bt=F._multiDrawCounts,et=F._multiDrawCount,Wn=ye?$.get(ye).bytesPerElement:1,ls=Me.get(z).currentProgram.getUniforms();for(let vn=0;vn<et;vn++)ls.setValue(D,"_gl_DrawID",vn),$e.render(Ae[vn]/Wn,Bt[vn])}else if(F.isInstancedMesh)$e.renderInstances(Ye,Rt,F.count);else if(V.isInstancedBufferGeometry){const Ae=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Bt=Math.min(V.instanceCount,Ae);$e.renderInstances(Ye,Rt,Bt)}else $e.render(Ye,Rt)};function nt(E,U,V){E.transparent===!0&&E.side===Ci&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,Ja(E,U,V),E.side=xr,E.needsUpdate=!0,Ja(E,U,V),E.side=Ci):Ja(E,U,V)}this.compile=function(E,U,V=null){V===null&&(V=E),d=be.get(V),d.init(U),_.push(d),V.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),E!==V&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const z=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ie=F.material;if(ie)if(Array.isArray(ie))for(let le=0;le<ie.length;le++){const ge=ie[le];nt(ge,V,F),z.add(ge)}else nt(ie,V,F),z.add(ie)}),d=_.pop(),z},this.compileAsync=function(E,U,V=null){const z=this.compile(E,U,V);return new Promise(F=>{function ie(){if(z.forEach(function(le){Me.get(le).currentProgram.isReady()&&z.delete(le)}),z.size===0){F(E);return}setTimeout(ie,10)}Xe.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Gn=null;function _i(E){Gn&&Gn(E)}function wm(){wr.stop()}function Cm(){wr.start()}const wr=new yM;wr.setAnimationLoop(_i),typeof self<"u"&&wr.setContext(self),this.setAnimationLoop=function(E){Gn=E,G.setAnimationLoop(E),E===null?wr.stop():wr.start()},G.addEventListener("sessionstart",wm),G.addEventListener("sessionend",Cm),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,b),d=be.get(E,_.length),d.init(U),_.push(d),we.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(we),pe=this.localClippingEnabled,re=ne.init(this.clippingPlanes,pe),m=Ce.get(E,g.length),m.init(),g.push(m),G.enabled===!0&&G.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&Sc(ie,U,-1/0,x.sortObjects)}Sc(E,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(j,Q),ht=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,ht&&Pe.addToRenderList(m,E),this.info.render.frame++,re===!0&&ne.beginShadows();const V=d.state.shadowsArray;ve.render(V,E,U),re===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,F=m.transmissive;if(d.setupLights(),U.isArrayCamera){const ie=U.cameras;if(F.length>0)for(let le=0,ge=ie.length;le<ge;le++){const ye=ie[le];bm(z,F,E,ye)}ht&&Pe.render(E);for(let le=0,ge=ie.length;le<ge;le++){const ye=ie[le];Rm(m,E,ye,ye.viewport)}}else F.length>0&&bm(z,F,E,U),ht&&Pe.render(E),Rm(m,E,U);b!==null&&w===0&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(x,E,U),ot.resetDefaultState(),T=-1,S=null,_.pop(),_.length>0?(d=_[_.length-1],re===!0&&ne.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Sc(E,U,V,z){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){z&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(we);const le=q.update(E),ge=E.material;ge.visible&&m.push(E,le,ge,V,De.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const le=q.update(E),ge=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),De.copy(le.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(we)),Array.isArray(ge)){const ye=le.groups;for(let Ne=0,Le=ye.length;Ne<Le;Ne++){const Te=ye[Ne],Ye=ge[Te.materialIndex];Ye&&Ye.visible&&m.push(E,le,Ye,V,De.z,Te)}}else ge.visible&&m.push(E,le,ge,V,De.z,null)}}const ie=E.children;for(let le=0,ge=ie.length;le<ge;le++)Sc(ie[le],U,V,z)}function Rm(E,U,V,z){const F=E.opaque,ie=E.transmissive,le=E.transparent;d.setupLightsView(V),re===!0&&ne.setGlobalState(x.clippingPlanes,V),z&&Ee.viewport(P.copy(z)),F.length>0&&Qa(F,U,V),ie.length>0&&Qa(ie,U,V),le.length>0&&Qa(le,U,V),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function bm(E,U,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new ss(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?qa:Vi,minFilter:qr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ie=d.state.transmissionRenderTarget[z.id],le=z.viewport||P;ie.setSize(le.z*x.transmissionResolutionScale,le.w*x.transmissionResolutionScale);const ge=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(K),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),ht&&Pe.render(V);const ye=x.toneMapping;x.toneMapping=pr;const Ne=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),re===!0&&ne.setGlobalState(x.clippingPlanes,z),Qa(E,V,z),R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Te=0,Ye=U.length;Te<Ye;Te++){const Je=U[Te],Rt=Je.object,xt=Je.geometry,$e=Je.material,Ae=Je.group;if($e.side===Ci&&Rt.layers.test(z.layers)){const Bt=$e.side;$e.side=sn,$e.needsUpdate=!0,Pm(Rt,V,z,xt,$e,Ae),$e.side=Bt,$e.needsUpdate=!0,Le=!0}}Le===!0&&(R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie))}x.setRenderTarget(ge),x.setClearColor(K,Z),Ne!==void 0&&(z.viewport=Ne),x.toneMapping=ye}function Qa(E,U,V){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ie=E.length;F<ie;F++){const le=E[F],ge=le.object,ye=le.geometry,Ne=le.group;let Le=le.material;Le.allowOverride===!0&&z!==null&&(Le=z),ge.layers.test(V.layers)&&Pm(ge,U,V,ye,Le,Ne)}}function Pm(E,U,V,z,F,ie){E.onBeforeRender(x,U,V,z,F,ie),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,U,V,z,E,ie),F.transparent===!0&&F.side===Ci&&F.forceSinglePass===!1?(F.side=sn,F.needsUpdate=!0,x.renderBufferDirect(V,U,z,F,E,ie),F.side=xr,F.needsUpdate=!0,x.renderBufferDirect(V,U,z,F,E,ie),F.side=Ci):x.renderBufferDirect(V,U,z,F,E,ie),E.onAfterRender(x,U,V,z,F,ie)}function Ja(E,U,V){U.isScene!==!0&&(U=Tt);const z=Me.get(E),F=d.state.lights,ie=d.state.shadowsArray,le=F.state.version,ge=xe.getParameters(E,F.state,ie,U,V),ye=xe.getProgramCacheKey(ge);let Ne=z.programs;z.environment=E.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(E.isMeshStandardMaterial?B:M).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",Ue),Ne=new Map,z.programs=Ne);let Le=Ne.get(ye);if(Le!==void 0){if(z.currentProgram===Le&&z.lightsStateVersion===le)return Lm(E,ge),Le}else ge.uniforms=xe.getUniforms(E),E.onBeforeCompile(ge,x),Le=xe.acquireProgram(ge,ye),Ne.set(ye,Le),z.uniforms=ge.uniforms;const Te=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=ne.uniform),Lm(E,ge),z.needsLights=LM(E),z.lightsStateVersion=le,z.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Le,z.uniformsList=null,Le}function Dm(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=pu.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Lm(E,U){const V=Me.get(E);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function PM(E,U,V,z,F){U.isScene!==!0&&(U=Tt),R.resetTextureUnits();const ie=U.fog,le=z.isMeshStandardMaterial?U.environment:null,ge=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ho,ye=(z.isMeshStandardMaterial?B:M).get(z.envMap||le),Ne=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Le=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!V.morphAttributes.position,Ye=!!V.morphAttributes.normal,Je=!!V.morphAttributes.color;let Rt=pr;z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Rt=x.toneMapping);const xt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$e=xt!==void 0?xt.length:0,Ae=Me.get(z),Bt=d.state.lights;if(re===!0&&(pe===!0||E!==S)){const Qt=E===S&&z.id===T;ne.setState(z,E,Qt)}let et=!1;z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Bt.state.version||Ae.outputColorSpace!==ge||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==ye||z.fog===!0&&Ae.fog!==ie||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ne.numPlanes||Ae.numIntersection!==ne.numIntersection)||Ae.vertexAlphas!==Ne||Ae.vertexTangents!==Le||Ae.morphTargets!==Te||Ae.morphNormals!==Ye||Ae.morphColors!==Je||Ae.toneMapping!==Rt||Ae.morphTargetsCount!==$e)&&(et=!0):(et=!0,Ae.__version=z.version);let Wn=Ae.currentProgram;et===!0&&(Wn=Ja(z,U,F));let ls=!1,vn=!1,To=!1;const ft=Wn.getUniforms(),Rn=Ae.uniforms;if(Ee.useProgram(Wn.program)&&(ls=!0,vn=!0,To=!0),z.id!==T&&(T=z.id,vn=!0),ls||S!==E){Ee.buffers.depth.getReversed()?(se.copy(E.projectionMatrix),Vb(se),zb(se),ft.setValue(D,"projectionMatrix",se)):ft.setValue(D,"projectionMatrix",E.projectionMatrix),ft.setValue(D,"viewMatrix",E.matrixWorldInverse);const cn=ft.map.cameraPosition;cn!==void 0&&cn.setValue(D,Qe.setFromMatrixPosition(E.matrixWorld)),Ge.logarithmicDepthBuffer&&ft.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ft.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,vn=!0,To=!0)}if(F.isSkinnedMesh){ft.setOptional(D,F,"bindMatrix"),ft.setOptional(D,F,"bindMatrixInverse");const Qt=F.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),ft.setValue(D,"boneTexture",Qt.boneTexture,R))}F.isBatchedMesh&&(ft.setOptional(D,F,"batchingTexture"),ft.setValue(D,"batchingTexture",F._matricesTexture,R),ft.setOptional(D,F,"batchingIdTexture"),ft.setValue(D,"batchingIdTexture",F._indirectTexture,R),ft.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&ft.setValue(D,"batchingColorTexture",F._colorsTexture,R));const bn=V.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Ie.update(F,V,Wn),(vn||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,ft.setValue(D,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Rn.envMap.value=ye,Rn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Rn.envMapIntensity.value=U.environmentIntensity),vn&&(ft.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&DM(Rn,To),ie&&z.fog===!0&&ue.refreshFogUniforms(Rn,ie),ue.refreshMaterialUniforms(Rn,z,L,W,d.state.transmissionRenderTarget[E.id]),pu.upload(D,Dm(Ae),Rn,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(pu.upload(D,Dm(Ae),Rn,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ft.setValue(D,"center",F.center),ft.setValue(D,"modelViewMatrix",F.modelViewMatrix),ft.setValue(D,"normalMatrix",F.normalMatrix),ft.setValue(D,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Qt=z.uniformsGroups;for(let cn=0,Mc=Qt.length;cn<Mc;cn++){const Cr=Qt[cn];N.update(Cr,Wn),N.bind(Cr,Wn)}}return Wn}function DM(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function LM(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,U,V){const z=Me.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Me.get(E.texture).__webglTexture=U,Me.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:V,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const V=Me.get(E);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0};const IM=D.createFramebuffer();this.setRenderTarget=function(E,U=0,V=0){b=E,C=U,w=V;let z=!0,F=null,ie=!1,le=!1;if(E){const ye=Me.get(E);if(ye.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(D.FRAMEBUFFER,null),z=!1;else if(ye.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(ye.__hasExternalTextures)R.rebindTextures(E,Me.get(E.texture).__webglTexture,Me.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Te=E.depthTexture;if(ye.__boundDepthTexture!==Te){if(Te!==null&&Me.has(Te)&&(E.width!==Te.image.width||E.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(le=!0);const Le=Me.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?F=Le[U][V]:F=Le[U],ie=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?F=Me.get(E).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[V]:F=Le,P.copy(E.viewport),H.copy(E.scissor),k=E.scissorTest}else P.copy(oe).multiplyScalar(L).floor(),H.copy(Se).multiplyScalar(L).floor(),k=Ke;if(V!==0&&(F=IM),Ee.bindFramebuffer(D.FRAMEBUFFER,F)&&z&&Ee.drawBuffers(E,F),Ee.viewport(P),Ee.scissor(H),Ee.setScissorTest(k),ie){const ye=Me.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,V)}else if(le){const ye=Me.get(E.texture),Ne=U;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.__webglTexture,V,Ne)}else if(E!==null&&V!==0){const ye=Me.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ye.__webglTexture,V)}T=-1},this.readRenderTargetPixels=function(E,U,V,z,F,ie,le){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge){Ee.bindFramebuffer(D.FRAMEBUFFER,ge);try{const ye=E.texture,Ne=ye.format,Le=ye.type;if(!Ge.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-z&&V>=0&&V<=E.height-F&&D.readPixels(U,V,z,F,Oe.convert(Ne),Oe.convert(Le),ie)}finally{const ye=b!==null?Me.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,U,V,z,F,ie,le){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge)if(U>=0&&U<=E.width-z&&V>=0&&V<=E.height-F){Ee.bindFramebuffer(D.FRAMEBUFFER,ge);const ye=E.texture,Ne=ye.format,Le=ye.type;if(!Ge.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,ie.byteLength,D.STREAM_READ),D.readPixels(U,V,z,F,Oe.convert(Ne),Oe.convert(Le),0);const Ye=b!==null?Me.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Ye);const Je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await kb(D,Je,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ie),D.deleteBuffer(Te),D.deleteSync(Je),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,V=0){const z=Math.pow(2,-V),F=Math.floor(E.image.width*z),ie=Math.floor(E.image.height*z),le=U!==null?U.x:0,ge=U!==null?U.y:0;R.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,le,ge,F,ie),Ee.unbindTexture()};const NM=D.createFramebuffer(),UM=D.createFramebuffer();this.copyTextureToTexture=function(E,U,V=null,z=null,F=0,ie=null){ie===null&&(F!==0?(hu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=F,F=0):ie=0);let le,ge,ye,Ne,Le,Te,Ye,Je,Rt;const xt=E.isCompressedTexture?E.mipmaps[ie]:E.image;if(V!==null)le=V.max.x-V.min.x,ge=V.max.y-V.min.y,ye=V.isBox3?V.max.z-V.min.z:1,Ne=V.min.x,Le=V.min.y,Te=V.isBox3?V.min.z:0;else{const bn=Math.pow(2,-F);le=Math.floor(xt.width*bn),ge=Math.floor(xt.height*bn),E.isDataArrayTexture?ye=xt.depth:E.isData3DTexture?ye=Math.floor(xt.depth*bn):ye=1,Ne=0,Le=0,Te=0}z!==null?(Ye=z.x,Je=z.y,Rt=z.z):(Ye=0,Je=0,Rt=0);const $e=Oe.convert(U.format),Ae=Oe.convert(U.type);let Bt;U.isData3DTexture?(R.setTexture3D(U,0),Bt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Bt=D.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Bt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const et=D.getParameter(D.UNPACK_ROW_LENGTH),Wn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ls=D.getParameter(D.UNPACK_SKIP_PIXELS),vn=D.getParameter(D.UNPACK_SKIP_ROWS),To=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ne),D.pixelStorei(D.UNPACK_SKIP_ROWS,Le),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Te);const ft=E.isDataArrayTexture||E.isData3DTexture,Rn=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const bn=Me.get(E),Qt=Me.get(U),cn=Me.get(bn.__renderTarget),Mc=Me.get(Qt.__renderTarget);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,cn.__webglFramebuffer),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mc.__webglFramebuffer);for(let Cr=0;Cr<ye;Cr++)ft&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(E).__webglTexture,F,Te+Cr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(U).__webglTexture,ie,Rt+Cr)),D.blitFramebuffer(Ne,Le,le,ge,Ye,Je,le,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||Me.has(E)){const bn=Me.get(E),Qt=Me.get(U);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,NM),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,UM);for(let cn=0;cn<ye;cn++)ft?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bn.__webglTexture,F,Te+cn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bn.__webglTexture,F),Rn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Qt.__webglTexture,ie,Rt+cn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Qt.__webglTexture,ie),F!==0?D.blitFramebuffer(Ne,Le,le,ge,Ye,Je,le,ge,D.COLOR_BUFFER_BIT,D.NEAREST):Rn?D.copyTexSubImage3D(Bt,ie,Ye,Je,Rt+cn,Ne,Le,le,ge):D.copyTexSubImage2D(Bt,ie,Ye,Je,Ne,Le,le,ge);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Rn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Bt,ie,Ye,Je,Rt,le,ge,ye,$e,Ae,xt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Bt,ie,Ye,Je,Rt,le,ge,ye,$e,xt.data):D.texSubImage3D(Bt,ie,Ye,Je,Rt,le,ge,ye,$e,Ae,xt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ie,Ye,Je,le,ge,$e,Ae,xt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ie,Ye,Je,xt.width,xt.height,$e,xt.data):D.texSubImage2D(D.TEXTURE_2D,ie,Ye,Je,le,ge,$e,Ae,xt);D.pixelStorei(D.UNPACK_ROW_LENGTH,et),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Wn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ls),D.pixelStorei(D.UNPACK_SKIP_ROWS,vn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,To),ie===0&&U.generateMipmaps&&D.generateMipmap(Bt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(E,U,V=null,z=null,F=0){return hu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,V,z,F)},this.initRenderTarget=function(E){Me.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){C=0,w=0,b=null,Ee.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}const Vf=["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original-wordmark.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg"],l3=()=>{const t=de.useRef(null);return de.useEffect(()=>{const e=t.current,n=new dP,i=new Fn(75,1,1,1e3),r=new a3({antialias:!0,alpha:!0});r.setSize(375,375),e.appendChild(r.domElement);const s=new Yo,o=new MP,a=[],l=27,u=6;let c=0;function f(T,S){const P=[],H=2/T,k=Math.PI*(3-Math.sqrt(5));for(let K=0;K<T;K++){const Z=K*H-1+H/2,Y=Math.sqrt(1-Z*Z),W=K*k,L=Math.cos(W)*Y,j=Math.sin(W)*Y;P.push(new O(L*S,Z*S,j*S))}return P}const h=f(Vf.length,l),p=()=>{const T=new vM({color:65535,transparent:!0,opacity:.3});for(let S=0;S<a.length;S++)for(let P=S+1;P<a.length;P++){const H=a[S].position,k=a[P].position;if(H.distanceTo(k)<l*1){const Z=new si().setFromPoints([H.clone(),k.clone()]),Y=new gP(Z,T);s.add(Y)}}};Vf.forEach((T,S)=>{o.load(T,P=>{P.magFilter=En,P.minFilter=En;const H=new A0(new pM({map:P})),k=P.image.width/P.image.height;H.scale.set(u*k,u,1),H.position.copy(h[S]),s.add(H),a.push(H),c++,c===Vf.length&&p()})}),n.add(s),i.position.z=50;const v=new Em(l+3.5,32,32),y=new Mm({color:255,transparent:!0,opacity:.05,side:sn}),m=new di(v,y);n.add(m);let d=!1,g={x:0,y:0},_={x:0,y:0};const x=()=>{r.domElement.getBoundingClientRect()},A=T=>{d=!0,g={x:T.clientX,y:T.clientY}},C=()=>d=!1,w=T=>{if(!d)return;const S=T.clientX-g.x,P=T.clientY-g.y;_.y=S*.005,_.x=P*.005,s.rotation.y+=_.y,s.rotation.x+=_.x,g={x:T.clientX,y:T.clientY}},b=()=>{requestAnimationFrame(b),d||(s.rotation.y+=.005),s.children.forEach(T=>{T instanceof A0&&T.lookAt(i.position)}),r.render(n,i)};return b(),window.addEventListener("scroll",x),window.addEventListener("resize",x),window.addEventListener("mousedown",A),window.addEventListener("mouseup",C),window.addEventListener("mousemove",w),()=>{e.removeChild(r.domElement),window.removeEventListener("scroll",x),window.removeEventListener("resize",x),window.removeEventListener("mousedown",A),window.removeEventListener("mouseup",C),window.removeEventListener("mousemove",w)}},[]),I.jsx("div",{className:"iconssphear-section fade-in",children:I.jsx("div",{className:"iconssphear-tag-cloud",ref:t})})},u3=({text:t,speed:e,loop:n})=>{const[i,r]=de.useState(""),[s,o]=de.useState(0);return de.useEffect(()=>{const l=setInterval(()=>{s<t.length?(r(u=>u+t[s]),o(u=>u+1)):n&&setTimeout(()=>{r(""),o(0)},2e3)},e);return()=>clearInterval(l)},[s,t,e,n]),I.jsx(Ve.span,{children:i})},c3=()=>{const[t,e]=de.useState(!1);return de.useEffect(()=>{const n=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting?e(!0):e(!1)})},{threshold:.3}),i=document.querySelector(".hero-section");return n.observe(i),()=>n.disconnect()},[]),I.jsxs("div",{children:[I.jsxs("div",{className:"availability-badge shine-button",children:[I.jsx("div",{className:"ping-dot"}),I.jsx("p",{children:"Available for new projects"})]}),I.jsxs("div",{className:"hero-section",children:[I.jsxs("div",{className:"hero-content",children:[I.jsx(Ve.h1,{initial:{opacity:0,y:50},animate:{opacity:t?1:0,y:t?0:50},transition:{duration:1,type:"spring",stiffness:100},children:I.jsx(u3,{text:"Hi, I'm Ronit Raj.",speed:200,loop:!0})}),I.jsx(Ve.h1,{initial:{opacity:0,y:50},animate:{opacity:t?1:0,y:t?0:50},transition:{duration:1.2,type:"spring",stiffness:100},children:"I build things for the WEB"}),I.jsx(Ve.p,{initial:{opacity:0},animate:{opacity:t?1:0},transition:{duration:1.5},children:"Discover the bespoke solutions and projects delivered."}),I.jsxs(Ve.div,{className:"hero-buttons",initial:{opacity:0},animate:{opacity:t?1:0},transition:{duration:1.7},children:[I.jsx("a",{href:"https://drive.google.com/file/d/1NNYnkyLHhyDjV-YD4Pkf6sQQBBWvpE8d/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"join-button shine-button",children:"My Resume"}),I.jsx("a",{href:"mailto:ronit9450@gmail.com",className:"contact-link shine-button",children:"Mail Me"})]})]}),I.jsx(l3,{})]})]})},TM=de.createContext(),f3=({children:t})=>{const[e,n]=de.useState("dark");de.useEffect(()=>{const r=localStorage.getItem("theme")||"dark";n(r),document.body.className=r},[]);const i=()=>{const r=e==="light"?"dark":"light";n(r),document.body.className=r,localStorage.setItem("theme",r)};return I.jsx(TM.Provider,{value:{theme:e,toggleTheme:i},children:t})};var AM={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},e_=rr.createContext&&rr.createContext(AM),d3=["attr","size","title"];function h3(t,e){if(t==null)return{};var n=p3(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function p3(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function Ku(){return Ku=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ku.apply(this,arguments)}function t_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function $u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?t_(Object(n),!0).forEach(function(i){m3(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):t_(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function m3(t,e,n){return e=g3(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g3(t){var e=v3(t,"string");return typeof e=="symbol"?e:e+""}function v3(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function wM(t){return t&&t.map((e,n)=>rr.createElement(e.tag,$u({key:n},e.attr),wM(e.child)))}function xc(t){return e=>rr.createElement(_3,Ku({attr:$u({},t.attr)},e),wM(t.child))}function _3(t){var e=n=>{var{attr:i,size:r,title:s}=t,o=h3(t,d3),a=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),rr.createElement("svg",Ku({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,o,{className:l,style:$u($u({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&rr.createElement("title",null,s),t.children)};return e_!==void 0?rr.createElement(e_.Consumer,null,n=>e(n)):e(AM)}function y3(t){return xc({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"},child:[]}]})(t)}function x3(t){return xc({attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(t)}function S3(t){return xc({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"},child:[]}]})(t)}function M3(t){return xc({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"},child:[]}]})(t)}const CM="/ronny.dev/assets/logo-DJdsvUdc.png",E3=()=>{const[t,e]=de.useState(!1),n=de.useRef(null),[i,r]=de.useState(""),{theme:s,toggleTheme:o}=de.useContext(TM),a=()=>{e(!t)},l=c=>{e(!1),r(c.replace("#",""))};de.useEffect(()=>{const c=()=>{const f=window.location.hash.replace("#","");r(f)};return c(),window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]),de.useEffect(()=>{const c=f=>{n.current&&!n.current.contains(f.target)&&e(!1)};return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[]);const u=[{label:"About Me",href:"#AboutMe"},{label:"Education",href:"#Education"},{label:"Skills",href:"#Skills"},{label:"Experience",href:"#Experience"},{label:"Projects",href:"#Projects"},{label:"Contact",href:"#Contact"}];return I.jsx(I.Fragment,{children:I.jsxs("nav",{className:"navbar",children:[I.jsx("a",{className:"logo",href:"/ronny.dev",children:I.jsx("img",{src:CM,alt:"Logo",className:"logo-img"})}),I.jsxs("div",{className:"navbar-right",children:[I.jsx("div",{className:`navbar-center ${t?"active":""}`,ref:n,children:u.map((c,f)=>I.jsx(Ve.a,{href:c.href,onClick:()=>l(c.href),whileHover:{scale:1.1,color:"#0dcaf0",textShadow:"0 0 8px rgba(13, 202, 240, 0.8)"},transition:{type:"spring",stiffness:300},className:`nav-link-animated ${i===c.href.replace("#","")?"active-link":""}`,children:c.label},f))}),I.jsxs("div",{className:"navbar-right-icons",children:[I.jsx(Ve.div,{className:"theme-toggle",onClick:o,whileHover:{rotate:20,scale:1.2},whileTap:{rotate:-20,scale:.9},transition:{type:"spring",stiffness:400},children:s==="light"?I.jsx(S3,{className:"theme-icon",title:"Dark Mode"}):I.jsx(M3,{className:"theme-icon",title:"Light Mode"})}),t?I.jsx(x3,{className:"navbar-menu-icon",onClick:a}):I.jsx(y3,{className:"navbar-menu-icon",onClick:a})]})]})]})})},T3=t=>{const{sourceCodeLink:e,deployedLink:n,name:i,description:r,languages:s,image:o,index:a,projectType:l}=t,u=a%2!==0;return I.jsx(Ve.div,{className:`project-card ${u?"reverse":""}`,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut",delay:a*.1},children:I.jsxs("div",{className:"project-content",children:[I.jsxs("div",{className:"project-details",children:[I.jsxs("p",{style:{color:"#ff0050"},children:["— ",l]}),I.jsx("div",{className:"project-image mobile-image",children:I.jsx("div",{className:"image-wrapper",children:I.jsx("img",{src:o,alt:`${i} Screenshot`})})}),I.jsx("h3",{className:"project-title",children:i}),I.jsx("p",{children:r}),I.jsx("div",{className:"tech-tags",children:s.split("|").map((c,f)=>I.jsx(Ve.span,{className:"tech-tag",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.2+f*.05},children:c.trim()},c.trim()))}),I.jsx(Ve.a,{href:e,target:"_blank",rel:"noopener noreferrer",className:"btn shine-button",whileHover:{scale:1.05},whileTap:{scale:.95},children:"GitHub ↗"}),I.jsx(Ve.a,{href:n,target:"_blank",rel:"noopener noreferrer",className:"btn shine-button",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Live Demo ↗"})]}),I.jsx("div",{className:"project-image desktop-image",children:I.jsx("div",{className:"image-wrapper",children:I.jsx("img",{src:o,alt:`${i} Screenshot`})})})]})})},A3="/ronny.dev/assets/MetaCut-DEb2ajT6.png",w3="/ronny.dev/assets/metaTaskImage-DWnritG8.png",C3="/ronny.dev/assets/ShipShop-Kx-LVgSz.png",R3=()=>{const t=[{sourceCodeLink:"https://github.com/hashtagronit/MetaCut",deployedLink:"https://hashtagronit.github.io/MetaCut/",name:"MetaCut - AI Image Upscaler",description:"Developed an AI-powered image upscaling web application that allows users to upload images and download enhanced, high-resolution versions using advanced AI algorithms. Built with Vite and Tailwind CSS, integrating an AI Upscaler API for quality preservation.",languages:"ReactJS | ViteJS | Tailwind CSS | AI Upscaler API | JavaScript | HTML5",image:A3,projectType:"AI-Based Image Processing Tool"},{sourceCodeLink:"https://github.com/hashtagronit/MetaTask",deployedLink:"https://hashtagronit.github.io/MetaTask/",name:"MetaTask - Task Manager",description:"MetaTask is a productivity-focused task management app where managers can assign tasks with deadlines and employees can track, accept, or complete them. It supports offline access using localStorage and features a modular, responsive UI for real-time task flow.",languages:"ReactJS | Tailwind CSS | JavaScript | LocalStorage | HTML5",image:w3,projectType:"Frontend Task Management App"},{sourceCodeLink:"https://github.com/hashtagronit/dashboard2",deployedLink:"https://hashtagronit.github.io/dashboard2/",name:"Admin Dashboard UI",description:"A dynamic admin dashboard built with React featuring customizable themes, analytics charts, calendar integration, and a Kanban board. It delivers an enterprise-grade UI with smooth user experience, responsive layout, and reusable components for managing tasks and data visually.",languages:"ReactJS | Tailwind CSS | Syncfusion | Chart.js | FullCalendar | JavaScript | HTML5",image:C3,projectType:"Interactive Admin Interface"}];return I.jsx(I.Fragment,{children:I.jsxs("div",{id:"Projects",className:"projects-section",children:[I.jsxs("h2",{children:[I.jsx("i",{className:"fas fa-project-diagram"})," Projects"]}),I.jsx("div",{className:"projects-container",children:t.map((e,n)=>I.jsx(T3,{index:n,name:e.name,description:e.description,languages:e.languages,image:e.image,sourceCodeLink:e.sourceCodeLink,deployedLink:e.deployedLink,projectType:e.projectType},`${e.name}-${n}`))})]})})},b3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFjElEQVR4nO1Xa2xURRQei2+wSHdmSxECETAGQYnbe1sQU3pvW0Dji6RqQHl0z9yq+AhGf+if+ghGJPJD8Y8YY/SHppioETVa2nMWEP3BI2oQMCIYEgLyKp3bEtGw5tx99G5pKJpuuzX9kkl2Z+6d+50z53znjBDDGMYwBgTt1bHJYijDOPYKUzsrKoYqjGuvNzXWIjEU0Vllj/ddyxjXXimGGpL10y43jvWd79pJ41Q8KIYSkvOnXGFc65OAvGudOe1aETFUcHy+Xew7dguTD4Zjvy6GCjqdyuuMY+/sJm/9mKy9eSSvJZtEUZdrzfIdu8l3rLWnayqmikJCZ3VFzDj24Sx51z7VXlU5JcgF13raONZvqXyw3zs2e/Y1opBgaizXOLafIc+/O+bGbuuoi93ou9buTC4Y11osCg2mpnKG79jtIfJ/Gqei9kxVxSTftY6kyXcZt2KuKESYUMwb1z7nV9sP87zv2B+FwqlBFCJMtXVTiCR7eg3PJ+vrR3ABS88d4gQWhYhOJ2aH5LI9ozhHq6pGhZTol6QQl4hCLVi+Y51IG7A1vBZWJOOWPyAKFca1Vqc9fYIN6p63V4ZC62B4raDAYWMce3/aiGXZ+VjsMt+x93SrUwH3Q4aT2bHbjWPvCs/71XZdd5Jb60Qho6OmvCowotp2wvOZ0zGutUoUOkxt+XTjWBvDsuk79j7ftTq66sonDC47IUQJ4HjlJZZKoDVS0wcS6BUFbfPGr9x2VeYZrsBsCP/m6uu79q9+rTXzvL0aN0+Tmt6VGn9QgF9GASvzRpwJKqAPlcZzSlMyGHFaeKF3gmJWY83jZOb/0kuUKZ2YHYHE4jHLEhNKnvi+WDbSVAn0Pu8ngUykYeu4vBjA3skSzw7sYO9JoE0SqEVq/EYBNStNnyuNrUrTdqVpr9J0SGo6k30H6P6czZuSRVLjfl6PAj6SFwNSRrTdE5DU2HG+Mb0PCdilNP4sNW1QGl9gj/e2twTaEjyvcQDuzk3JotJGnKQaaUkJ4DLlUX33wPkS6PbSBpxeHN9WcjHbjV6K10pNfmC0l6jLO/8xXstoTrqUx2hBX88Hse613VnmoextXQKuDsgD7hZNeKnINyI60dgjVPZyiEjAt6TGVxXQWgW0Xmn8QmncpzT9nTb2CIdhDvk43cHrEvBo1KMZYiDAiiSBmhTg4X+RC0eVxnf4JDgEReAIujsIHaBmlmcxGCjzcI6M05MS6Hn2vtS4TgK9qQBflJqeYsIsmT3fU17rZKXx8bENrRPFYEF6CIHKAH7GGp9daEoWjV2+WSnAmcEzmj5lree5QSMrWKth8w3SS9yaKTYS6HhumJBRgCdzil3u+jEJbbEB5V0c31aiNL0dInsqVfa5JtACBbjjInJgLyd4RJPV2zdKH/p6JK9ncqNfEfQpGSKAO1gSez4zbkVLJBLHuVwHJJAX8WhRFOg+9vboR7eM6esbKk4LUzUA5/S7AQrw92wIaPwj4lF1f+0djW8qVZpeVoBneW92hOhv8LGzfueEBNAeqemNoCvVbVUqjlMmLsUrLyS7LJOcP9wHKY2rgtYB6K90fdgVrgFsWL8aoR7DUQrwWaVxZx+xzvlxkofUdDA9Ui1Cr40gbQgKWyj2I5BwWNVEvsAKFPXw3qAx4/uApq1BR6pxf6pY0an0KbVLoAPsXQXYJoE+lppek5CIs7yK+uYROU5qbL0l6GQBT5d6bRV5MyBjRE8C/wWljTiJi53ShCy9aWPPu/j0OzjeI3G6i1vf4Eam8TkFtCSqsYZvWdHlW64PD1Yj7lL5IqOAXkoXtgNpZTurgDayauVFRvtEffMIPn4JqLmFkEBfSU0/pS4oeCJ1kcFzXMTS9eDb9N3gGW67y7ztVw886WEM4/+BfwD2Vq4z7Obe7QAAAABJRU5ErkJggg==",P3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO3ZW2xMQRgH8L+oJogHxAPxghc8iMsDbyWoiHQ7s7UlrkFtUQ0pIUKIS0IqEtdQQVwiLhFEJG4JD3WL4EG0IajbnnO2u92DaovSjmxX9HycadeZYRPZL5lkk8k5Z357vpn5dhZIRzrS8f+GwVFncohUNoPho3cAw4uUAzieqwDupBpgctz2DDA5zqsOQBT/eWuYR+5xTgWwPxWAujnkHmWeAQbHxlQAameRSbxBBVCcCsD7GQSw2DPAYshPBcCe1nq9xRHwDsjFaNnArBndhW3b7bakYtNAAohOdTyLIcszwGQYJP12J2cIOxbTA1jViwCqA44U8mOgZ0CIoWdb6WFbIXVAc7MQSzIIwMprfcabAHp4Bgigg8HQKAPEqirVAfU2GXxzEZnAjfExQCVMDkMKqLhLBmsV9lOexN8WkvwPKQ2+BcDwUAq4f5UCSoYrAxoLCeCBDsBlGaCm/AwBhNeOUwZ8mk9S6JIywGA4IgVcOUQA1aX5yoD6uQ4Ax2EdgK0yQPT8dvVJfGM7AXycTQClygCTY7kUcGKDOuDSegL4MNPxDD+W6QDMkgEih5arA86WEMC76QQwUxlg+DFBCtgdVAccn0sANY4ywmDIVgaE8jDMSxEnncT3jlHAAT/pj+S3XhvKxVBlwGsf+mgFPL5IAbvGkv6wo4yIcPRWBogsZBgMTW6Dq16dRdIlevNc+4CqWxRQOoL0O1agZhFEJ+gIk6PGDRBeMoQAah6Vtw8IV1LA+gE/+5oWkWuj0BUGR6UbwJrXlwBioZcivC5bWIHM3wFLM4XYN0mIhnfSUvrrAvIGKnQCbrjm+NQuritP7G2ViF7YJcJrxgixJ1uIOwcTVadbLO30E/A5SFag6zoBp2ST1I5Y3pfRL3UkvRoKSCF3UhvAZNgp3Y3PbmtJnT8GxFOpfK/8OIVhh07AmjaXy7yOIrxilIic3ixir57KAfE0undUiLKcxJwo/uU4xVEHmQyrtQEMhvlJr/0OjP3qiRD1sTYHLWTHKRwFOgG5njayyRm//d5N9jglxOHTBghzjNK2E8t+Si6CiDhOIywfRuoD+NH/bwAaCxP1f3SKyx6Tg37aANZ4dNUBaCqC+FSQKJmdNY/ptkmOR1fojJa3wBA0OE4bHLXJAr4EE4e1UUeV6doYGkyGawbHStOHwfib8SaAziE/xpkMW0yO+17fjpH4B6gsfv4Z9aEbUhVJv51/+S2rvB2TYeKP3ftZS4t/ZpgY7/N843SkIx3/Z3wHrTGmPWk4PzUAAAAASUVORK5CYII=",D3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEElEQVR4nO3YSUwUQRQA0J5qF4zx4JK4HEz04HrRg3G5aIxr4nJRb+pFOelBYaoaVDSgkcUVN0Qxbgfxoh5QYKp6RBQXkIjKMuAoiAziMKCCKCiU6THQXTgtM12lk5j5SSVkuqu7Hr+2LkmKRCQi8f8GQKQdIELDWiBusw6AxB12AMKvODKAH4YdAEmRZYAN4pu8DZDPNYRejlb21bchcsM6AOHMsAAOvdABEJ/lyUBSOAAgucyQAZxoGQAQ2R4WwIGnhjGAt1kHQLIhLIDEx3p9hay3DJCQY5FZw6alPqAtLS0DlmBizOVGFpHwoO89kl1daB0A86ebAcYm3hMC6KGUDjnfLwO7C3VAnHOadYDiGG0GGBKnUp+PH/Cxs/v3LhTn1AE7ckdZB0jUBhDuMkO88Xi5AbVtP1jA2XrDO3CX1gYOgH8mahA5iKdmNzGAMl8Xe8/pN4YZiLzjarwfAEmpSMD8W14GUODpZLvPCbex/lNugA3hXJGAVbk+BnCr9it7zzGXYRUmd/gBEF8SCdjsZMfFpeov7D2Hyw2rMLkoIgNpwTY21eEKeRAff9HOAlKeGzKAU7kBAJLYYAEJOZUhAxJLP7Nj4GCpcRaK4QcgsilYwM6bL0MGxD76xAKSivVn2slGboAM1eXBAqKvPw8ZsKWglQXse6iPH4Us4wZIyDFb5CC+WtPBANY5fOw9e+731ZVinbP4Afb8CSIBOW+/MoClOc1sBuLv6oD4gvH8gL3OQQCS7kCNm5nG7kgLqxoGBBS972QAc2580K9nvqNAUXsHcI8UXTKYH/BrJmoOBJh4oJABlLgbBwRUtH5nAFOym/TrGXXGGcgrpPF+ACIVgQAj995lALWNXro8s5hGxeu7yd7GDcvy0NW5Ptra2c0Axl3RvwXAqdf68yEpFwawQeIMBBhssqV+7fHSkwWv6OIzT+iK2830gusLbfnGNrw3orI8egbSq42rsCoOgHC22SCtb2q2vJ1u/97DdrEjhuMUSK6JA0CcbgY4olb/8bvALLSulFHRbxuRZjhOQfi4MABAZPefpkqtKy048Zgm57uoq77JFKB1oys1HXRtns8/JuT+X2IpzwxjAO8SB4Bka7DzvhFTVf+B+gZotGx2nILwFmEAGalrrSxi2nfz0CyLxyl2skYYQILOeaJWYtNypo7dRijqXHEAxTFZOEBbdU+6qZxS9uscSGHrSTF5k8QBYvKGCwFk1FH5aBUF+4spMCx2IEDR3ikJDS0Lihptg+Q6QPhz0Ij0GgqSn1E5Qe8egQvusEHiAApGUhyeIf3V2FE0TFYcS2yQJAOIS6xmB0Di1o7P/eef9vsjpLBF0Nn5l/9lnuxAvNK/ekNcoxXtb+037Zrl50YiEpH4P+Mn9Q+e3CSBSHQAAAAASUVORK5CYII=",L3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4klEQVR4nO1ZzW8NURS/Qgg74n8Qdjydc6bRiCBqZdNnJ11gzp1i0USCVS2EBV0Im37MOe+JRrwNC2VRrNiwI5FoQlSCin7YVIJq5b6Oph/z5s6C+ZD+kl8yyb2L3+/cc86cuaPUCv5j6AB8T1CrIkKz06IFf9TJTosqEvyBXRtJ8L0WnDUkgQ9eT2mzKgpIoPZH/ALeVUWAZmyPED9HxnaVZxztw03E8LmRAWIcy3UqkUDQMPrzpwD9Ko/wGHdoxpklYqfrXJxGM2avyhu04GBExKeI4VtEKt1TeYLPbtOy6NeFwgQxTEalkldtdlVeQAJDDYr2k2HkmsCQygN0f/OWqOiHIt9phpFGBe1XYWvW+hUxXolpm6+14HBMV7qcqfhybdvauL6vBV6QwMsYA19OXW1dl5kBCpw2S99/HrLhHgqctuwMMN6yvLSekMDTWAMCA5mI7+ravUYLjMeLw0eG8acE4+VaeXXqBvwKlGxjAzHe1wwPrONF1d2eugFi6LAbgDtmjLYaCMBP3YBm7LUKY7hdp3Uf9qZugBgfJzBQJcYbCfY9TN2AZnxrTSGBPkP7PnyTugEzqFkjK3CNGK4nKPax1A2ENw42YWbM6E5QA99TN0ACPxOcwEVivJRLA1rwawJhXXXa2+1E6gbCSdN2AmeJ8VyCVHuVuoEkb1gKsNPQbhQHMzCAFxKkRocW50SCdns+dQOeuHsT1MCxOi37/IqzJ6NpFEfjxTlH5hhr8mMm06gBsXM6NrLilqmCh211orKC11PaEHcKxM4hw7jod9ZwvcoSxLB/2e3bvED3gCfYGl24+EtX4KDKAxr1elOchpFrDGdUnkACx5eOF+b2zWe3efGpwDQxnlR5BFXQWXgLYT47F356ksAzr79pp8o1ZtWqsC5uzhswzwHuM2uqSNCCw2ZmUkWFZhgx96OqqNCCo+Z2WhUVxDCZyaz/txD+nZlSRYUO/5FlrWMF6h/iNwFD5Zin1tTcAAAAAElFTkSuQmCC",I3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACp0lEQVR4nO2Xz2sTQRTHt2D1Iijaf8FLLUmazc4ktiH9kZ3ZJN15AclBLwpCbnqsJxNoERuVHCzqQaGQVElprQh68yD0UBE8F+zFm4p67sGQkUm7yWa7m2SLUgLzgWGZfW/fe1/m5yqKRCKRSCQSieRYQRR2kMFyiqIMKYMIpsCbjbD3ykALoMCVQQRLAccMliNwQDABZzFhJUzZL/EUfaULiReJkWSFbhm1TENbim6pD9URvznUZO5MtxHoqyZVzQ9jks0jyn7YgyHKfmMCtw3DONVReDFxIrlCy+l188/c6ywXbeq5zgMFtR5a1Kq5Yu6kaw7KbmECP+05sKPvuyZETUAUvnQEdbR9O2PCf6ZC5401c88qvNU2s1wrxXjgTpgHC+re+CKat4rpJwe2CfBVEyKs7jB81HTzmnh2vCesLoIba2bjUPEHjbxM80AhvC+iqDZaAhw5MIFtkQMT2HYV4FITpnDdtaZOx+wV23E+JPrO4PGn067FW23iUaIpQIyGJcBvDtzFXyNwtcO/1xbmtEfLk5yspj0FZDaAR+5FufDzitErB3aOSDk+g8uTX8XTbkeEvTuSgEgp1izUS0SyYvxXAYjCLiZw+UjB0f1LzXkef9x9KsWfTLsKEFPAzxTSOv17F9jLHipGrEXKaW3OU4BRM1vx3BYlMuCG10bhsug/YQpTXQUgAm/c7OK9XUD4rrYcLITrQgR+MOFafGrdrOtVY7mdgzE/WzX28ifwVqPmxcM/E9QEzyFq78s7Vn+0OHp6fAFtBgrhxuwKbS/gV8D1auoDeUbOOWO0Dyb43s9hqar54SiBm86DTnyvzWbPK/+C0AK+gJZinzMbjOurqV29oo/1+qZ5dRBXAwLfrKtEX/59Xm8kEolEIpFIJBKJRBkU/gIP08f/AcFN4wAAAABJRU5ErkJggg==",N3="/ronny.dev/assets/github-BaKhpVwy.png",U3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKElEQVR4nO2WT0hVQRTGz/GZ7yEiRJJ/SsMiRaigUFwUhQgGouLChZS5Cmmj5c4kol1tRNoYLcJ0JRKUFYmUJi5EQSP/dEFxkUW4iQyUIMS+mHe5jtN7ihLeO8L54OPBmXmX+c2c+90hEolEIisFh2CTSQAcOQFIC+1GQbcM5CV2gt91SIw6we885EPm2GHarYJeMATACX7XIS3k/M+O8YZ7282xmT5CbTkjI42RGGJkHWbUVTJmX+4DgMFOQiSsx2iTkyMcHbcWYH2WkHtU18NJjILj7q9XKz7D+PPJUoCPz3U9IYEx/cKtLw4STmQzbl5jrExYfALDXbqu2uj3lJ7/64NlKRQP4MuQWa8uZXx+t9PnWQCgfPmC+eJGwozrNYz5/n0C8G2YcLYgNoFCIRdkddJyAGW1yNYGRkpyLMjpPMaPMcsBPH8fJdxvJqQfMiEar3KwACrvtwP4N+d/jlM0/7352Rk+AqgUqSphvH6kawsDJsCrDj3W/YBQeCo279tb9H+SDvgE0NNG0c+/lya36hkddwnnz5ktoe4+ar66/3i1kmLG1yG3vjxOuFSkx9TX2heAuTcaYCufPKavBg9bzZNhZhxJN68SyrcbfGyh908JqSnxF69a4e0Ts/fv3Nge+GJh/CjdMwDlpRFCUx0jJ9PNc3VNriljTD6LP3+sh3ClgpGf6+7+wVR34Y/vEdZmtkq1PQTwwyQAjpwAfG0hkUgkIj/0FxH0JVVHu8XgAAAAAElFTkSuQmCC",F3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/ElEQVR4nO2Yy29NURTGv6pHmIigngMDMTDz/BckUoRi4pUYYEaQYKIGEhMzDcGMNGSvdUqbqkebnLVOVSQakVRo4zXy6MREqoq6svdt1U3a6+7T4547OL9kT+7d99y1zl7rW2ttICMjIyMjI+MvLndPg+lcA5ZN4HCPW6RbEOhqmOfTUbFGk+wAy32wfAVrbvwl30H6AKT73G8qAqPrQdozsdETLNJ37pRShWSne6u+xheeSkM6p8GyEaw/J2e8jp5GC9raZpTP+KCrBiT9iRjPo07IPbR0z/Kyw4QL4znAcmnk+IdA2gzS42A5AJajYLlRPJGLrk6Y9tklG096xt9407EEpN9A0opb4bJx9zS1zwXptZhOPMXth4uL2xCtBEkfAtnq7wDJCZCcQy5X9c+9rCdB8itGYn9GoEfQ2Dmn4HlBuBSkZ0EyANZXMKba3wGjuzz3HwTLcMzk/gGWXrB0g+RNwcuwtSQWcbymaHdiisUu4VtLioBECaLtYB1MQHJ7YKL55TX+jxOyzsVubAekKz3jR7Faz3LaJSqXHDIfwHIY9bkpqBjMo5lgrQPrFbA+AemnkRAbBMl795ltM6xUxmo1bOtr45b0otNm1o/5h7sa0O+UgeWq60J9K+h/xZhqV1m9WgUbDlKfviNBVw1YHk9CIV679joVmjsWgPRFAjo96EKvrORyVSC9m1ihsUXLFi9fTJzWwEKyv/DPpW9EBXrz5TyWZg+D9JCfHZG/0wjDqWB5C9YvLhEDXVTwvW2obGPlo9tj+m17l1MlRsB5Jx7eWBkkfYmmaEXRfbbFzctpnNO4jsZw3rjPNeHy/GWADsYbUOxQYNWnFOywYYeOuMlNchMsx/LDj2219c7YTC0NiK0+Plitt+Nfcgmfc0WyrD2OHcDtKJmE8eREYgNSusy6MDkHxIZPHVKFotr8JZW3Qj0DhWtREdjTcPeg7mpxqIjRA65gkmxz8l2R2C6WZBUC2Qwje/OXu1Gtu9ytWKMzMjIyMjKQDr8BpC0SbqrQ1j8AAAAASUVORK5CYII=",O3="/ronny.dev/assets/reactlogo-Cw5HMvxU.png",B3="/ronny.dev/assets/vite-SSd_seXt.png",k3="/ronny.dev/assets/postman-4oQnhQs-.png",V3="/ronny.dev/assets/docker-Dbky7ayS.png",z3="/ronny.dev/assets/express1-BrQU-R40.png",H3=[{id:1,src:P3,title:"HTML"},{id:2,src:D3,title:"CSS"},{id:3,src:b3,title:"Java"},{id:4,src:O3,title:"React"},{id:5,src:U3,title:"JavaScript"},{id:6,src:F3,title:"Tailwind CSS"},{id:7,src:I3,title:"Node.js"},{id:8,src:L3,title:"MongoDB"},{id:9,src:z3,title:"Express"},{id:10,src:B3,title:"Vite"},{id:11,src:k3,title:"Postman"},{id:12,src:V3,title:"Docker"},{id:13,src:N3,title:"GitHub"}],G3=()=>I.jsxs("div",{id:"Skills",className:"skills-section",children:[I.jsxs(Ve.h2,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8,ease:"easeOut"},children:[I.jsx("i",{className:"fa fa-cogs","aria-hidden":"true"})," Skills"]}),I.jsx(Ve.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8,ease:"easeOut"},children:I.jsx("p",{className:"skills-subtitle",children:"These are the technologies I’ve worked with"})}),I.jsx(Ve.div,{className:"skills-grid",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut",delay:.1},children:H3.map(({id:t,src:e,title:n})=>I.jsxs("div",{className:"skill-box",children:[I.jsx("img",{src:e,alt:n,className:"skill-img"}),I.jsx("p",{children:n})]},t))})]}),W3=()=>{const[t,e]=de.useState(!1);de.useEffect(()=>{const i=()=>{window.pageYOffset>200?e(!0):e(!1)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return I.jsx(I.Fragment,{children:t&&I.jsx("button",{onClick:n,className:"scroll-to-top-btn",children:I.jsx("i",{className:"fa fa-arrow-up","aria-hidden":"true"})})})},j3=()=>{const t=[{role:'<a href="https://www.linkedin.com/posts/hashtagronit_successfully-completed-a-transformative-summer-activity-7227106477109297152-UOn6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRxOrwBuRh980zCGDQuloQ-Ty0ewEmPyVw" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">⚛ ReactJs Intern</a>',organization:"Celebal Technologies",duration:"May 2024- Jul 2024",details:"As a React JS Intern at Celebal Technologies, I built dynamic and responsive web apps, including a feature-rich admin dashboard and a full-stack task manager using React, and Tailwind CSS. I integrated APIs like ChatGPT and DALL·E in an AI-powered simulation tool, optimized components for performance and usability, and collaborated in an Agile team, gaining hands-on experience in real-world development and scalable UI design."},{role:`<a href="https://www.linkedin.com/posts/marketing-and-promotions-club-gcet_leadership-marketing-strategy-activity-7170162668987670528-f4g0/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
               🧑‍💼 Club President
             </a>`,organization:"Marketing & Promotions Club GCET",duration:"Nov 2023- Sep 2024",details:"As Club Head of the Marketing and Promotions Club at GCET, I led a dynamic team in promoting major college events. I strategized and executed digital campaigns that significantly boosted student engagement and event turnout. Under my leadership, the club's social media reach tripled, and we built a strong campus brand presence. I also conducted team recruitments, mentored juniors, and collaborated with the student council and faculty to ensure the smooth execution of all promotional activities."},{role:`<a href="https://www.linkedin.com/posts/galgotias-extreme-club_one-story-ends-another-begins-galgotias-activity-7168565982150557697-gGso/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
               🧑‍💻 Secretary
             </a>`,organization:"Extreme Club CSE Department GCET",duration:"Nov 2023- Sep 2024",details:"As Secretary of the Extreme Club, I coordinated club activities and strengthened engagement within the CSE department. I successfully organized a 48-hour continuous All India level hackathon, demonstrating strong leadership skills and ensuring seamless execution. I also organized meetings, managed membership drives, and led initiatives to foster a collaborative and inclusive community. Through close collaboration with faculty and students, I helped increase participation in technical events and workshops, enhancing the club’s presence and impact across the department."}],[e,n]=de.useState({}),i=r=>{n(s=>({...s,[r]:!s[r]}))};return I.jsxs("section",{id:"Experience",className:"experience-section",children:[I.jsxs(Ve.h2,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8,ease:"easeOut"},children:[I.jsx("i",{className:"fa-solid fa-business-time"})," Experience"]}),I.jsx(Ve.div,{className:"experience-timeline",initial:"hidden",whileInView:"show",variants:{hidden:{},show:{transition:{staggerChildren:.2}}},children:t.map((r,s)=>I.jsx(Ve.div,{className:"timeline-item",initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.6,type:"spring",stiffness:100,damping:25,delay:.15*s},children:I.jsxs("div",{className:"timeline-content",children:[I.jsx("h3",{dangerouslySetInnerHTML:{__html:r.role}}),I.jsx("p",{className:"organization",children:r.organization}),I.jsx("span",{className:"duration",children:r.duration}),I.jsxs("p",{className:"details",children:[e[s]?r.details:`${r.details.substring(0,250)}...`," ",I.jsx("span",{className:"toggle-button",onClick:()=>i(s),style:{color:"#0078d4",cursor:"pointer"},children:e[s]?"See Less":"See More"})]})]})},s))})]})},Ba={_origin:"https://api.emailjs.com"},X3=(t,e="https://api.emailjs.com")=>{Ba._userID=t,Ba._origin=e},RM=(t,e,n)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class n_{constructor(e){this.status=e.status,this.text=e.responseText}}const bM=(t,e,n={})=>new Promise((i,r)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new n_(o);a.status===200||a.text==="OK"?i(a):r(a)}),s.addEventListener("error",({target:o})=>{r(new n_(o))}),s.open("POST",Ba._origin+t,!0),Object.keys(n).forEach(o=>{s.setRequestHeader(o,n[o])}),s.send(e)}),Y3=(t,e,n,i)=>{const r=i||Ba._userID;return RM(r,t,e),bM("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},q3=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},K3=(t,e,n,i)=>{const r=i||Ba._userID,s=q3(n);RM(r,t,e);const o=new FormData(s);return o.append("lib_version","3.2.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",r),bM("/api/v1.0/email/send-form",o)},$3={init:X3,send:Y3,sendForm:K3},Z3=()=>{const[t,e]=de.useState({user_name:"",user_email:"",subject:"",message:""}),[n,i]=de.useState(!1),r=a=>{const{name:l,value:u}=a.target;e(c=>({...c,[l]:u}))},s=async a=>{a.preventDefault(),i(!0);try{const l=await $3.send("service_4335han","template_wgjivqc",t,"F7IkVT-krCzGCPyRj");alert("Message sent successfully!"),e({user_name:"",user_email:"",subject:"",message:""})}catch(l){console.error(l.text),alert("Failed to send the message, please try again.")}finally{i(!1)}},o={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4}}};return I.jsxs(Ve.div,{className:"contact-form",initial:"hidden",whileInView:"visible",viewport:{amount:.3},variants:{hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8}}},children:[I.jsxs(Ve.h1,{initial:"hidden",whileInView:"visible",variants:{hidden:{opacity:0,y:-20},visible:{opacity:1,y:0,transition:{duration:.6}}},children:[I.jsx("i",{className:"fa-solid fa-user"})," Contact Me"]}),I.jsxs(Ve.form,{onSubmit:s,initial:"hidden",whileInView:"visible",variants:{hidden:{},visible:{transition:{staggerChildren:.15}}},children:[I.jsxs(Ve.div,{className:"row",variants:o,children:[I.jsx(Ve.div,{className:"form-group",variants:o,children:I.jsx("input",{type:"text",id:"user_name",name:"user_name",value:t.user_name,onChange:r,placeholder:"Name",required:!0})}),I.jsx(Ve.div,{className:"form-group",variants:o,children:I.jsx("input",{type:"email",id:"user_email",name:"user_email",value:t.user_email,onChange:r,placeholder:"Email",required:!0})})]}),I.jsx(Ve.div,{className:"form-group",variants:o,children:I.jsx("input",{type:"text",id:"subject",name:"subject",value:t.subject,onChange:r,placeholder:"Subject"})}),I.jsx(Ve.div,{className:"form-group",variants:o,children:I.jsx("textarea",{id:"message",name:"message",rows:"5",value:t.message,onChange:r,placeholder:"Message...",required:!0})}),I.jsx(Ve.button,{type:"submit",disabled:n,whileHover:{scale:n?1:1.05},whileTap:{scale:n?1:.95},variants:o,style:{opacity:n?.6:1,cursor:n?"not-allowed":"pointer",pointerEvents:n?"none":"auto"},children:n?I.jsxs(I.Fragment,{children:[I.jsx("i",{className:"fa fa-spinner fa-spin",style:{marginRight:"8px"}}),"Sending..."]}):"Submit"})]})]})},Q3="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%201C12%201%2012%208%2010%2010C8%2012%201%2012%201%2012C1%2012%208%2012%2010%2014C12%2016%2012%2023%2012%2023C12%2023%2012%2016%2014%2014C16%2012%2023%2012%2023%2012C23%2012%2016%2012%2014%2010C12%208%2012%201%2012%201Z'%20fill='currentColor'/%3e%3c/svg%3e",J3=["End-to-End Web App","Reliable","Responsive","Robust","Scalable","Secure","Accessible","User Friendly","Maintainable","Interactive","Optimized","Usable","Rapid Prototyping","Feature-Rich"],eN=()=>I.jsx("div",{className:"tape-section",children:I.jsx("div",{className:"tape-gradient",children:I.jsx("div",{className:"tape-container",children:I.jsx("div",{className:"tape-scroll",children:[...Array(2)].map((t,e)=>I.jsx(de.Fragment,{children:J3.map(n=>I.jsxs("div",{className:"tape-item",children:[I.jsx("span",{children:n}),I.jsx("img",{src:Q3,alt:"star",className:"star"})]},`${e}-${n}`))},e))})})})}),tN=100,nN=()=>{const[t,e]=de.useState([]);return de.useEffect(()=>{const n=Array.from({length:tN},()=>({id:Math.random(),top:Math.random()*100,left:Math.random()*100,size:Math.random()*3+2,directionX:(Math.random()-.5)*10,directionY:(Math.random()-.5)*10,duration:Math.random()*3+12,delay:Math.random()*2}));e(n)},[]),I.jsx("div",{className:"particle-background",children:t.map(n=>I.jsx(Ve.div,{className:"particle",initial:{opacity:1},animate:{x:["0vw",`${n.directionX*10}vw`],y:["0vh",`${n.directionY*10}vh`],opacity:[1,0]},transition:{duration:n.duration,repeat:1/0,ease:"easeOut",delay:n.delay},style:{top:`${n.top}vh`,left:`${n.left}vw`,width:`${n.size}px`,height:`${n.size}px`,backgroundColor:"var(--particle-color)"}},n.id))})},iN=()=>I.jsx("div",{className:"loading-container",children:I.jsx(Ve.img,{src:CM,alt:"Logo",className:"loading-logo",initial:{scale:.9},animate:{scale:[.9,1.1,.9]},transition:{duration:1.5,ease:"easeInOut",repeat:1/0}})});function rN(){const[t,e]=de.useState(!0);return de.useEffect(()=>{const n=setTimeout(()=>e(!1),1e3);return()=>clearTimeout(n)},[]),t?I.jsx(iN,{}):I.jsxs(I.Fragment,{children:[I.jsx(nN,{}),I.jsx(E3,{}),I.jsx(c3,{}),I.jsx(XR,{}),I.jsx(qR,{}),I.jsx(G3,{}),I.jsx(eN,{}),I.jsx(j3,{}),I.jsx(R3,{}),I.jsx(Z3,{}),I.jsx(YR,{}),I.jsx(W3,{})]})}const sN=zf.createRoot(document.getElementById("root"));sN.render(I.jsx(rr.StrictMode,{children:I.jsx(f3,{children:I.jsx(rN,{})})}));
