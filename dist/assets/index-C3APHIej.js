var xx=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var FC=xx(Ut=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Iu="164",vx=0,Ph=1,yx=2,dp=1,Mx=2,ji=3,Ji=0,bn=1,ui=2,$i=0,Nr=1,eu=2,Ih=3,Dh=4,Tx=5,zs=100,Sx=101,Ex=102,Ax=103,bx=104,Nx=200,wx=201,Rx=202,Cx=203,tu=204,nu=205,Lx=206,Px=207,Ix=208,Dx=209,Ux=210,Ox=211,Fx=212,Vx=213,Bx=214,zx=0,kx=1,Hx=2,$a=3,Gx=4,Wx=5,Xx=6,qx=7,xc=0,jx=1,Yx=2,ni=0,Du=1,Uu=2,Ou=3,vc=4,$x=5,Fu=6,fp=7,Uh="attached",Kx="detached",pp=300,Br=301,zr=302,iu=303,su=304,yc=306,kr=1e3,ms=1001,Ka=1002,Jt=1003,mp=1004,wo=1005,Hn=1006,Ga=1007,Pi=1008,ys=1009,Zx=1010,Jx=1011,gp=1012,_p=1013,Hr=1014,di=1015,Ki=1016,xp=1017,vp=1018,$o=1020,Qx=35902,ev=1021,tv=1022,fi=1023,nv=1024,iv=1025,wr=1026,Fo=1027,yp=1028,Mp=1029,sv=1030,Tp=1031,Sp=1033,$c=33776,Kc=33777,Zc=33778,Jc=33779,Oh=35840,Fh=35841,Vh=35842,Bh=35843,zh=36196,kh=37492,Hh=37496,Gh=37808,Wh=37809,Xh=37810,qh=37811,jh=37812,Yh=37813,$h=37814,Kh=37815,Zh=37816,Jh=37817,Qh=37818,ed=37819,td=37820,nd=37821,Qc=36492,id=36494,sd=36495,rv=36283,rd=36284,od=36285,ad=36286,Vo=2300,Gr=2301,el=2302,cd=2400,ld=2401,ud=2402,ov=2500,av=0,Ep=1,ru=2,cv=3200,lv=3201,js=0,Ap=1,ps="",sn="srgb",jt="srgb-linear",Vu="display-p3",Mc="display-p3-linear",Za="linear",St="srgb",Ja="rec709",Qa="p3",nr=7680,hd=519,uv=512,bp=513,hv=514,Np=515,dv=516,fv=517,pv=518,mv=519,ec=35044,ou=35048,dd="300 es",pi=2e3,Wr=2001;class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fd=1234567;const Lo=Math.PI/180,Xr=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function xn(i,e,t){return Math.max(e,Math.min(t,i))}function Bu(i,e){return(i%e+e)%e}function gv(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function _v(i,e,t){return i!==e?(t-i)/(e-i):0}function Po(i,e,t){return(1-t)*i+t*e}function xv(i,e,t,n){return Po(i,e,1-Math.exp(-t*n))}function vv(i,e=1){return e-Math.abs(Bu(i,e*2)-e)}function yv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Mv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Tv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Sv(i,e){return i+Math.random()*(e-i)}function Ev(i){return i*(.5-Math.random())}function Av(i){i!==void 0&&(fd=i);let e=fd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bv(i){return i*Lo}function Nv(i){return i*Xr}function wv(i){return(i&i-1)===0&&i!==0}function Rv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lv(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const zu={DEG2RAD:Lo,RAD2DEG:Xr,generateUUID:gi,clamp:xn,euclideanModulo:Bu,mapLinear:gv,inverseLerp:_v,lerp:Po,damp:xv,pingpong:vv,smoothstep:yv,smootherstep:Mv,randInt:Tv,randFloat:Sv,randFloatSpread:Ev,seededRandom:Av,degToRad:bv,radToDeg:Nv,isPowerOfTwo:wv,ceilPowerOfTwo:Rv,floorPowerOfTwo:Cv,setQuaternionFromProperEuler:Lv,normalize:pt,denormalize:hi};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,s,r,o,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],x=s[4],S=s[7],L=s[2],N=s[5],b=s[8];return r[0]=o*_+a*M+c*L,r[3]=o*m+a*x+c*N,r[6]=o*p+a*S+c*b,r[1]=l*_+u*M+h*L,r[4]=l*m+u*x+h*N,r[7]=l*p+u*S+h*b,r[2]=d*_+f*M+g*L,r[5]=d*m+f*x+g*N,r[8]=d*p+f*S+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tl=new He;function wp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pv(){const i=Bo("canvas");return i.style.display="block",i}const pd={};function Rp(i){i in pd||(pd[i]=!0,console.warn(i))}const md=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gd=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ha={[jt]:{transfer:Za,primaries:Ja,toReference:i=>i,fromReference:i=>i},[sn]:{transfer:St,primaries:Ja,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Mc]:{transfer:Za,primaries:Qa,toReference:i=>i.applyMatrix3(gd),fromReference:i=>i.applyMatrix3(md)},[Vu]:{transfer:St,primaries:Qa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(gd),fromReference:i=>i.applyMatrix3(md).convertLinearToSRGB()}},Iv=new Set([jt,Mc]),ct={enabled:!0,_workingColorSpace:jt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Iv.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ha[e].toReference,s=ha[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ha[i].primaries},getTransfer:function(i){return i===ps?Za:ha[i].transfer}};function Rr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ir;class Dv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ir===void 0&&(ir=Bo("canvas")),ir.width=e.width,ir.height=e.height;const n=ir.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Rr(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rr(t[n]/255)*255):t[n]=Rr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uv=0;class Cp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(il(s[o].image)):r.push(il(s[o]))}else r=il(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ov=0;class qt extends As{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=ms,s=ms,r=Hn,o=Pi,a=fi,c=ys,l=qt.DEFAULT_ANISOTROPY,u=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=gi(),this.name="",this.source=new Cp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case ms:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case ms:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=pp;qt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,S=(f+1)/2,L=(p+1)/2,N=(u+d)/4,b=(h+_)/4,B=(g+m)/4;return x>S&&x>L?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=N/n,r=b/n):S>L?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=N/s,r=B/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=b/r,s=B/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ms extends As{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends Ms{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ku extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fv extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class es{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),N=Math.atan2(L,p*M);m=Math.sin(m*N)/L,a=Math.sin(a*N)/L}const S=a*M;if(c=c*m+d*S,l=l*m+f*S,u=u*m+g*S,h=h*m+_*S,m===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_d.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new C,_d=new es;class yi{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),da.copy(n.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),fa.subVectors(this.max,go),sr.subVectors(e.a,go),rr.subVectors(e.b,go),or.subVectors(e.c,go),is.subVectors(rr,sr),ss.subVectors(or,rr),Ns.subVectors(sr,or);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Ns.z,Ns.y,is.z,0,-is.x,ss.z,0,-ss.x,Ns.z,0,-Ns.x,-is.y,is.x,0,-ss.y,ss.x,0,-Ns.y,Ns.x,0];return!rl(t,sr,rr,or,fa)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,sr,rr,or,fa))?!1:(pa.crossVectors(is,ss),t=[pa.x,pa.y,pa.z],rl(t,sr,rr,or,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new C,new C,new C,new C,new C,new C,new C,new C],oi=new C,da=new yi,sr=new C,rr=new C,or=new C,is=new C,ss=new C,Ns=new C,go=new C,fa=new C,pa=new C,ws=new C;function rl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ws.fromArray(i,r);const a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),c=e.dot(ws),l=t.dot(ws),u=n.dot(ws);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Vv=new yi,_o=new C,ol=new C;class Fi{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);const t=_o.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_o,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(ol)),this.expandByPoint(_o.copy(e.center).sub(ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new C,al=new C,ma=new C,rs=new C,cl=new C,ga=new C,ll=new C;class Ko{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){al.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(al);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ma),a=rs.dot(this.direction),c=-rs.dot(ma),l=rs.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(al).addScaledVector(ma,d),f}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,s,r){cl.subVectors(t,e),ga.subVectors(n,e),ll.crossVectors(cl,ga);let o=this.direction.dot(ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const c=a*this.direction.dot(ga.crossVectors(rs,ga));if(c<0)return null;const l=a*this.direction.dot(cl.cross(rs));if(l<0||c+l>o)return null;const u=-a*rs.dot(ll);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ar.setFromMatrixColumn(e,0).length(),r=1/ar.setFromMatrixColumn(e,1).length(),o=1/ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bv,e,zv)}lookAt(e,t,n){const s=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),os.crossVectors(n,Vn),os.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),os.crossVectors(n,Vn)),os.normalize(),_a.crossVectors(Vn,os),s[0]=os.x,s[4]=_a.x,s[8]=Vn.x,s[1]=os.y,s[5]=_a.y,s[9]=Vn.y,s[2]=os.z,s[6]=_a.z,s[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],S=n[11],L=n[15],N=s[0],b=s[4],B=s[8],E=s[12],v=s[1],G=s[5],Q=s[9],O=s[13],ne=s[2],ee=s[6],ce=s[10],oe=s[14],q=s[3],le=s[7],ae=s[11],Ce=s[15];return r[0]=o*N+a*v+c*ne+l*q,r[4]=o*b+a*G+c*ee+l*le,r[8]=o*B+a*Q+c*ce+l*ae,r[12]=o*E+a*O+c*oe+l*Ce,r[1]=u*N+h*v+d*ne+f*q,r[5]=u*b+h*G+d*ee+f*le,r[9]=u*B+h*Q+d*ce+f*ae,r[13]=u*E+h*O+d*oe+f*Ce,r[2]=g*N+_*v+m*ne+p*q,r[6]=g*b+_*G+m*ee+p*le,r[10]=g*B+_*Q+m*ce+p*ae,r[14]=g*E+_*O+m*oe+p*Ce,r[3]=M*N+x*v+S*ne+L*q,r[7]=M*b+x*G+S*ee+L*le,r[11]=M*B+x*Q+S*ce+L*ae,r[15]=M*E+x*O+S*oe+L*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,x=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,S=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,L=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,N=t*M+n*x+s*S+r*L;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/N;return e[0]=M*b,e[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*b,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*b,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*b,e[4]=x*b,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*b,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*b,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*b,e[8]=S*b,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*b,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*b,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*b,e[12]=L*b,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*b,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*b,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,M=c*l,x=c*u,S=c*h,L=n.x,N=n.y,b=n.z;return s[0]=(1-(_+p))*L,s[1]=(f+S)*L,s[2]=(g-x)*L,s[3]=0,s[4]=(f-S)*N,s[5]=(1-(d+p))*N,s[6]=(m+M)*N,s[7]=0,s[8]=(g+x)*b,s[9]=(m-M)*b,s[10]=(1-(d+_))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ar.set(s[0],s[1],s[2]).length();const o=ar.set(s[4],s[5],s[6]).length(),a=ar.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ai.copy(this);const l=1/r,u=1/o,h=1/a;return ai.elements[0]*=l,ai.elements[1]*=l,ai.elements[2]*=l,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,t.setFromRotationMatrix(ai),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=pi){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===pi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Wr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pi){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,f=(n+s)*u;let g,_;if(a===pi)g=(o+r)*h,_=-2*h;else if(a===Wr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ar=new C,ai=new Ve,Bv=new C(0,0,0),zv=new C(1,1,1),os=new C,_a=new C,Vn=new C,xd=new Ve,vd=new es;class ii{constructor(e=0,t=0,n=0,s=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vd.setFromEuler(this),this.setFromQuaternion(vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kv=0;const yd=new C,cr=new es,Gi=new Ve,xa=new C,xo=new C,Hv=new C,Gv=new es,Md=new C(1,0,0),Td=new C(0,1,0),Sd=new C(0,0,1),Ed={type:"added"},Wv={type:"removed"},lr={type:"childadded",child:null},ul={type:"childremoved",child:null};class At extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new C,t=new ii,n=new es,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new He}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(Md,e)}rotateY(e){return this.rotateOnAxis(Td,e)}rotateZ(e){return this.rotateOnAxis(Sd,e)}translateOnAxis(e,t){return yd.copy(e).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Md,e)}translateY(e){return this.translateOnAxis(Td,e)}translateZ(e){return this.translateOnAxis(Sd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xa.copy(e):xa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(xo,xa,this.up):Gi.lookAt(xa,xo,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(Gi),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ed),lr.child=e,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wv),ul.child=e,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ed),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,Hv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,Gv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}At.DEFAULT_UP=new C(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new C,Wi=new C,hl=new C,Xi=new C,ur=new C,hr=new C,Ad=new C,dl=new C,fl=new C,pl=new C;class Li{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ci.subVectors(e,t),s.cross(ci);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ci.subVectors(s,t),Wi.subVectors(n,t),hl.subVectors(e,t);const o=ci.dot(ci),a=ci.dot(Wi),c=ci.dot(hl),l=Wi.dot(Wi),u=Wi.dot(hl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xi.x),c.addScaledVector(o,Xi.y),c.addScaledVector(a,Xi.z),c)}static isFrontFacing(e,t,n,s){return ci.subVectors(n,t),Wi.subVectors(e,t),ci.cross(Wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),ci.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Li.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ur.subVectors(s,n),hr.subVectors(r,n),dl.subVectors(e,n);const c=ur.dot(dl),l=hr.dot(dl);if(c<=0&&l<=0)return t.copy(n);fl.subVectors(e,s);const u=ur.dot(fl),h=hr.dot(fl);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ur,o);pl.subVectors(e,r);const f=ur.dot(pl),g=hr.dot(pl);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(hr,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Ad.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Ad,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(ur,o).addScaledVector(hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},va={h:0,s:0,l:0};function ml(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=Bu(e,1),t=xn(t,0,1),n=xn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ml(o,r,e+1/3),this.g=ml(o,r,e),this.b=ml(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const n=Lp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=nl(e.r),this.g=nl(e.g),this.b=nl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return ct.fromWorkingColorSpace(_n.copy(this),e),Math.round(xn(_n.r*255,0,255))*65536+Math.round(xn(_n.g*255,0,255))*256+Math.round(xn(_n.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(_n.copy(this),t);const n=_n.r,s=_n.g,r=_n.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=sn){ct.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,s=_n.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(va);const n=Po(as.h,va.h,t),s=Po(as.s,va.s,t),r=Po(as.l,va.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new be;be.NAMES=Lp;let Xv=0;class yn extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Nr,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tu,this.blendDst=nu,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=$a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tu&&(n.blendSrc=this.blendSrc),this.blendDst!==nu&&(n.blendDst=this.blendDst),this.blendEquation!==zs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$a&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mi extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new C,ya=new Me;class Nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Rp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ec&&(e.usage=this.usage),e}}class Pp extends Nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ip extends Nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ln extends Nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qv=0;const Kn=new Ve,gl=new At,dr=new C,Bn=new yi,vo=new yi,tn=new C;class Rn extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wp(e)?Ip:Pp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return gl.lookAt(e),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Bn.min,vo.min),Bn.expandByPoint(tn),tn.addVectors(Bn.max,vo.max),Bn.expandByPoint(tn)):(Bn.expandByPoint(vo.min),Bn.expandByPoint(vo.max))}Bn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)tn.fromBufferAttribute(a,l),c&&(dr.fromBufferAttribute(e,l),tn.add(dr)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<n.count;B++)a[B]=new C,c[B]=new C;const l=new C,u=new C,h=new C,d=new Me,f=new Me,g=new Me,_=new C,m=new C;function p(B,E,v){l.fromBufferAttribute(n,B),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,B),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,v),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const G=1/(f.x*g.y-g.x*f.y);isFinite(G)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(G),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(G),a[B].add(_),a[E].add(_),a[v].add(_),c[B].add(m),c[E].add(m),c[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let B=0,E=M.length;B<E;++B){const v=M[B],G=v.start,Q=v.count;for(let O=G,ne=G+Q;O<ne;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new C,S=new C,L=new C,N=new C;function b(B){L.fromBufferAttribute(s,B),N.copy(L);const E=a[B];x.copy(E),x.sub(L.multiplyScalar(L.dot(E))).normalize(),S.crossVectors(N,E);const G=S.dot(c[B])<0?-1:1;o.setXYZW(B,x.x,x.y,x.z,G)}for(let B=0,E=M.length;B<E;++B){const v=M[B],G=v.start,Q=v.count;for(let O=G,ne=G+Q;O<ne;O+=3)b(e.getX(O+0)),b(e.getX(O+1)),b(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Nn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bd=new Ve,Rs=new Ko,Ma=new Fi,Nd=new C,fr=new C,pr=new C,mr=new C,_l=new C,Ta=new C,Sa=new Me,Ea=new Me,Aa=new Me,wd=new C,Rd=new C,Cd=new C,ba=new C,Na=new C;class an extends At{constructor(e=new Rn,t=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ta.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(_l.fromBufferAttribute(h,e),o?Ta.addScaledVector(_l,u):Ta.addScaledVector(_l.sub(t),u))}t.add(Ta)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(Ma.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Ma,Nd)===null||Rs.origin.distanceToSquared(Nd)>(e.far-e.near)**2))&&(bd.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(bd),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,L=x;S<L;S+=3){const N=a.getX(S),b=a.getX(S+1),B=a.getX(S+2);s=wa(this,p,e,n,l,u,h,N,b,B),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);s=wa(this,o,e,n,l,u,h,M,x,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,L=x;S<L;S+=3){const N=S,b=S+1,B=S+2;s=wa(this,p,e,n,l,u,h,N,b,B),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,S=m+2;s=wa(this,o,e,n,l,u,h,M,x,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function jv(i,e,t,n,s,r,o,a){let c;if(e.side===bn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ji,a),c===null)return null;Na.copy(a),Na.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Na);return l<t.near||l>t.far?null:{distance:l,point:Na.clone(),object:i}}function wa(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,fr),i.getVertexPosition(c,pr),i.getVertexPosition(l,mr);const u=jv(i,e,t,n,fr,pr,mr,ba);if(u){s&&(Sa.fromBufferAttribute(s,a),Ea.fromBufferAttribute(s,c),Aa.fromBufferAttribute(s,l),u.uv=Li.getInterpolation(ba,fr,pr,mr,Sa,Ea,Aa,new Me)),r&&(Sa.fromBufferAttribute(r,a),Ea.fromBufferAttribute(r,c),Aa.fromBufferAttribute(r,l),u.uv1=Li.getInterpolation(ba,fr,pr,mr,Sa,Ea,Aa,new Me)),o&&(wd.fromBufferAttribute(o,a),Rd.fromBufferAttribute(o,c),Cd.fromBufferAttribute(o,l),u.normal=Li.getInterpolation(ba,fr,pr,mr,wd,Rd,Cd,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new C,materialIndex:0};Li.getNormal(fr,pr,mr,h.normal),u.face=h}return u}class Zo extends Rn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ln(l,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(h,2));function g(_,m,p,M,x,S,L,N,b,B,E){const v=S/b,G=L/B,Q=S/2,O=L/2,ne=N/2,ee=b+1,ce=B+1;let oe=0,q=0;const le=new C;for(let ae=0;ae<ce;ae++){const Ce=ae*G-O;for(let Je=0;Je<ee;Je++){const Mt=Je*v-Q;le[_]=Mt*M,le[m]=Ce*x,le[p]=ne,l.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[p]=N>0?1:-1,u.push(le.x,le.y,le.z),h.push(Je/b),h.push(1-ae/B),oe+=1}}for(let ae=0;ae<B;ae++)for(let Ce=0;Ce<b;Ce++){const Je=d+Ce+ee*ae,Mt=d+Ce+ee*(ae+1),$=d+(Ce+1)+ee*(ae+1),ue=d+(Ce+1)+ee*ae;c.push(Je,Mt,ue),c.push(Mt,$,ue),q+=6}a.addGroup(f,q,E),f+=q,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function En(i){const e={};for(let t=0;t<i.length;t++){const n=qr(i[t]);for(const s in n)e[s]=n[s]}return e}function Yv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const zo={clone:qr,merge:En};var $v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$v,this.fragmentShader=Kv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=Yv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Up extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cs=new C,Ld=new Me,Pd=new Me;class An extends Up{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,Ld,Pd),t.subVectors(Pd,Ld)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gr=-90,_r=1;class Zv extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new An(gr,_r,e,t);s.layers=this.layers,this.add(s);const r=new An(gr,_r,e,t);r.layers=this.layers,this.add(r);const o=new An(gr,_r,e,t);o.layers=this.layers,this.add(o);const a=new An(gr,_r,e,t);a.layers=this.layers,this.add(a);const c=new An(gr,_r,e,t);c.layers=this.layers,this.add(c);const l=new An(gr,_r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Op extends qt{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Br,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jv extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Op(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zo(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:$i});r.uniforms.tEquirect.value=t;const o=new an(s,r),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Hn),new Zv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const xl=new C,Qv=new C,e0=new He;class hs{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=xl.subVectors(n,t).cross(Qv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||e0.getNormalMatrix(e),s=this.coplanarPoint(xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new Fi,Ra=new C;class Hu{constructor(e=new hs,t=new hs,n=new hs,s=new hs,r=new hs,o=new hs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],M=s[13],x=s[14],S=s[15];if(n[0].setComponents(c-r,d-l,m-f,S-p).normalize(),n[1].setComponents(c+r,d+l,m+f,S+p).normalize(),n[2].setComponents(c+o,d+u,m+g,S+M).normalize(),n[3].setComponents(c-o,d-u,m-g,S-M).normalize(),n[4].setComponents(c-a,d-h,m-_,S-x).normalize(),t===pi)n[5].setComponents(c+a,d+h,m+_,S+x).normalize();else if(t===Wr)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ra.x=s.normal.x>0?e.max.x:e.min.x,Ra.y=s.normal.y>0?e.max.y:e.min.y,Ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function t0(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,a),h.count===-1&&d.length===0&&i.bufferSubData(l,0,u),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Jo extends Rn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let x=0;x<l;x++){const S=x*h-r;g.push(S,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const x=M+l*p,S=M+l*(p+1),L=M+1+l*(p+1),N=M+1+l*p;f.push(x,S,N),f.push(S,L,N)}this.setIndex(f),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.widthSegments,e.heightSegments)}}var n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
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
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c0=`#ifdef USE_AOMAP
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
#endif`,l0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,d0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m0=`#ifdef USE_IRIDESCENCE
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
#endif`,g0=`#ifdef USE_BUMPMAP
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,A0=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,b0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N0=`vec3 transformedNormal = objectNormal;
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
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,D0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G0=`#ifdef USE_GRADIENTMAP
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
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
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
#endif`,ey=`struct PhysicalMaterial {
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
}`,ty=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,ny=`#if defined( RE_IndirectDiffuse )
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
#endif`,iy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ry=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ay=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hy=`#if defined( USE_POINTS_UV )
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
#endif`,dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,py=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,my=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_y=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,xy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,My=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ey=`#ifdef USE_NORMALMAP
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
#endif`,Ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,by=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Ly=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Oy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,By=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hy=`#ifdef USE_SKINNING
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
#endif`,Gy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wy=`#ifdef USE_SKINNING
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
#endif`,Xy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yy=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$y=`#ifdef USE_TRANSMISSION
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
#endif`,Ky=`#ifdef USE_TRANSMISSION
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nM=`uniform sampler2D t2D;
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
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`#include <common>
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
}`,cM=`#if DEPTH_PACKING == 3200
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
	#endif
}`,lM=`#define DISTANCE
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
}`,uM=`#define DISTANCE
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
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`uniform float scale;
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#include <common>
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
}`,gM=`uniform vec3 diffuse;
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
}`,_M=`#define LAMBERT
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
}`,xM=`#define LAMBERT
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
}`,vM=`#define MATCAP
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
}`,yM=`#define MATCAP
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
}`,MM=`#define NORMAL
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
}`,TM=`#define NORMAL
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
}`,SM=`#define PHONG
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
}`,EM=`#define PHONG
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
}`,AM=`#define STANDARD
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
}`,bM=`#define STANDARD
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
}`,NM=`#define TOON
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
}`,wM=`#define TOON
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
}`,RM=`uniform float size;
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
}`,CM=`uniform vec3 diffuse;
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
}`,LM=`#include <common>
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
}`,PM=`uniform vec3 color;
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
}`,IM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,DM=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:s0,alphamap_pars_fragment:r0,alphatest_fragment:o0,alphatest_pars_fragment:a0,aomap_fragment:c0,aomap_pars_fragment:l0,batching_pars_vertex:u0,batching_vertex:h0,begin_vertex:d0,beginnormal_vertex:f0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:y0,color_fragment:M0,color_pars_fragment:T0,color_pars_vertex:S0,color_vertex:E0,common:A0,cube_uv_reflection_fragment:b0,defaultnormal_vertex:N0,displacementmap_pars_vertex:w0,displacementmap_vertex:R0,emissivemap_fragment:C0,emissivemap_pars_fragment:L0,colorspace_fragment:P0,colorspace_pars_fragment:I0,envmap_fragment:D0,envmap_common_pars_fragment:U0,envmap_pars_fragment:O0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:Y0,envmap_vertex:V0,fog_vertex:B0,fog_pars_vertex:z0,fog_fragment:k0,fog_pars_fragment:H0,gradientmap_pars_fragment:G0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:q0,lights_pars_begin:j0,lights_toon_fragment:$0,lights_toon_pars_fragment:K0,lights_phong_fragment:Z0,lights_phong_pars_fragment:J0,lights_physical_fragment:Q0,lights_physical_pars_fragment:ey,lights_fragment_begin:ty,lights_fragment_maps:ny,lights_fragment_end:iy,logdepthbuf_fragment:sy,logdepthbuf_pars_fragment:ry,logdepthbuf_pars_vertex:oy,logdepthbuf_vertex:ay,map_fragment:cy,map_pars_fragment:ly,map_particle_fragment:uy,map_particle_pars_fragment:hy,metalnessmap_fragment:dy,metalnessmap_pars_fragment:fy,morphinstance_vertex:py,morphcolor_vertex:my,morphnormal_vertex:gy,morphtarget_pars_vertex:_y,morphtarget_vertex:xy,normal_fragment_begin:vy,normal_fragment_maps:yy,normal_pars_fragment:My,normal_pars_vertex:Ty,normal_vertex:Sy,normalmap_pars_fragment:Ey,clearcoat_normal_fragment_begin:Ay,clearcoat_normal_fragment_maps:by,clearcoat_pars_fragment:Ny,iridescence_pars_fragment:wy,opaque_fragment:Ry,packing:Cy,premultiplied_alpha_fragment:Ly,project_vertex:Py,dithering_fragment:Iy,dithering_pars_fragment:Dy,roughnessmap_fragment:Uy,roughnessmap_pars_fragment:Oy,shadowmap_pars_fragment:Fy,shadowmap_pars_vertex:Vy,shadowmap_vertex:By,shadowmask_pars_fragment:zy,skinbase_vertex:ky,skinning_pars_vertex:Hy,skinning_vertex:Gy,skinnormal_vertex:Wy,specularmap_fragment:Xy,specularmap_pars_fragment:qy,tonemapping_fragment:jy,tonemapping_pars_fragment:Yy,transmission_fragment:$y,transmission_pars_fragment:Ky,uv_pars_fragment:Zy,uv_pars_vertex:Jy,uv_vertex:Qy,worldpos_vertex:eM,background_vert:tM,background_frag:nM,backgroundCube_vert:iM,backgroundCube_frag:sM,cube_vert:rM,cube_frag:oM,depth_vert:aM,depth_frag:cM,distanceRGBA_vert:lM,distanceRGBA_frag:uM,equirect_vert:hM,equirect_frag:dM,linedashed_vert:fM,linedashed_frag:pM,meshbasic_vert:mM,meshbasic_frag:gM,meshlambert_vert:_M,meshlambert_frag:xM,meshmatcap_vert:vM,meshmatcap_frag:yM,meshnormal_vert:MM,meshnormal_frag:TM,meshphong_vert:SM,meshphong_frag:EM,meshphysical_vert:AM,meshphysical_frag:bM,meshtoon_vert:NM,meshtoon_frag:wM,points_vert:RM,points_frag:CM,shadow_vert:LM,shadow_frag:PM,sprite_vert:IM,sprite_frag:DM},pe={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},wi={basic:{uniforms:En([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:En([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new be(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:En([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:En([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:En([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new be(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:En([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:En([pe.points,pe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:En([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:En([pe.common,pe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:En([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:En([pe.sprite,pe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:En([pe.common,pe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:En([pe.lights,pe.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};wi.physical={uniforms:En([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Ca={r:0,b:0,g:0},Ls=new ii,UM=new Ve;function OM(i,e,t,n,s,r,o){const a=new be(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const S=g(M);S===null?p(a,c):S&&S.isColor&&(p(S,1),x=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil)}function m(M,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===yc)?(u===void 0&&(u=new an(new Zo(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:qr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,N,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ls.copy(x.backgroundRotation),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(UM.makeRotationFromEuler(Ls)),u.material.toneMapped=ct.getTransfer(S.colorSpace)!==St,(h!==S||d!==S.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new an(new Jo(2,2),new Xt({name:"BackgroundMaterial",uniforms:qr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ct.getTransfer(S.colorSpace)!==St,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(Ca,Dp(i)),n.buffers.color.setClear(Ca.r,Ca.g,Ca.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:m}}function FM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(v,G,Q,O,ne){let ee=!1;const ce=h(O,Q,G);r!==ce&&(r=ce,l(r.object)),ee=f(v,O,Q,ne),ee&&g(v,O,Q,ne),ne!==null&&e.update(ne,i.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,S(v,G,Q,O),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,G,Q){const O=Q.wireframe===!0;let ne=n[v.id];ne===void 0&&(ne={},n[v.id]=ne);let ee=ne[G.id];ee===void 0&&(ee={},ne[G.id]=ee);let ce=ee[O];return ce===void 0&&(ce=d(c()),ee[O]=ce),ce}function d(v){const G=[],Q=[],O=[];for(let ne=0;ne<t;ne++)G[ne]=0,Q[ne]=0,O[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Q,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,G,Q,O){const ne=r.attributes,ee=G.attributes;let ce=0;const oe=Q.getAttributes();for(const q in oe)if(oe[q].location>=0){const ae=ne[q];let Ce=ee[q];if(Ce===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(Ce=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(Ce=v.instanceColor)),ae===void 0||ae.attribute!==Ce||Ce&&ae.data!==Ce.data)return!0;ce++}return r.attributesNum!==ce||r.index!==O}function g(v,G,Q,O){const ne={},ee=G.attributes;let ce=0;const oe=Q.getAttributes();for(const q in oe)if(oe[q].location>=0){let ae=ee[q];ae===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor));const Ce={};Ce.attribute=ae,ae&&ae.data&&(Ce.data=ae.data),ne[q]=Ce,ce++}r.attributes=ne,r.attributesNum=ce,r.index=O}function _(){const v=r.newAttributes;for(let G=0,Q=v.length;G<Q;G++)v[G]=0}function m(v){p(v,0)}function p(v,G){const Q=r.newAttributes,O=r.enabledAttributes,ne=r.attributeDivisors;Q[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),ne[v]!==G&&(i.vertexAttribDivisor(v,G),ne[v]=G)}function M(){const v=r.newAttributes,G=r.enabledAttributes;for(let Q=0,O=G.length;Q<O;Q++)G[Q]!==v[Q]&&(i.disableVertexAttribArray(Q),G[Q]=0)}function x(v,G,Q,O,ne,ee,ce){ce===!0?i.vertexAttribIPointer(v,G,Q,ne,ee):i.vertexAttribPointer(v,G,Q,O,ne,ee)}function S(v,G,Q,O){_();const ne=O.attributes,ee=Q.getAttributes(),ce=G.defaultAttributeValues;for(const oe in ee){const q=ee[oe];if(q.location>=0){let le=ne[oe];if(le===void 0&&(oe==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),oe==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),le!==void 0){const ae=le.normalized,Ce=le.itemSize,Je=e.get(le);if(Je===void 0)continue;const Mt=Je.buffer,$=Je.type,ue=Je.bytesPerElement,Ee=$===i.INT||$===i.UNSIGNED_INT||le.gpuType===_p;if(le.isInterleavedBufferAttribute){const me=le.data,Qe=me.stride,et=le.offset;if(me.isInstancedInterleavedBuffer){for(let V=0;V<q.locationSize;V++)p(q.location+V,me.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let V=0;V<q.locationSize;V++)m(q.location+V);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let V=0;V<q.locationSize;V++)x(q.location+V,Ce/q.locationSize,$,ae,Qe*ue,(et+Ce/q.locationSize*V)*ue,Ee)}else{if(le.isInstancedBufferAttribute){for(let me=0;me<q.locationSize;me++)p(q.location+me,le.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<q.locationSize;me++)m(q.location+me);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let me=0;me<q.locationSize;me++)x(q.location+me,Ce/q.locationSize,$,ae,Ce*ue,Ce/q.locationSize*me*ue,Ee)}}else if(ce!==void 0){const ae=ce[oe];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(q.location,ae);break;case 3:i.vertexAttrib3fv(q.location,ae);break;case 4:i.vertexAttrib4fv(q.location,ae);break;default:i.vertexAttrib1fv(q.location,ae)}}}}M()}function L(){B();for(const v in n){const G=n[v];for(const Q in G){const O=G[Q];for(const ne in O)u(O[ne].object),delete O[ne];delete G[Q]}delete n[v]}}function N(v){if(n[v.id]===void 0)return;const G=n[v.id];for(const Q in G){const O=G[Q];for(const ne in O)u(O[ne].object),delete O[ne];delete G[Q]}delete n[v.id]}function b(v){for(const G in n){const Q=n[G];if(Q[v.id]===void 0)continue;const O=Q[v.id];for(const ne in O)u(O[ne].object),delete O[ne];delete Q[v.id]}}function B(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function VM(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(l[f],u[f]);else{d.multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function BM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==fi&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const b=N===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==ys&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==di&&!b)}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:S,maxSamples:L}}function zM(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new hs,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const M=r?0:n,x=M*4;let S=p.clippingState||null;c.value=S,S=u(g,d,x,f);for(let L=0;L!==x;++L)S[L]=t[L];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=f;x!==_;++x,S+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function kM(i){let e=new WeakMap;function t(o,a){return a===iu?o.mapping=Br:a===su&&(o.mapping=zr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===iu||a===su)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Jv(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Qo extends Up{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yr=4,Id=[.125,.215,.35,.446,.526,.582],ks=20,vl=new Qo,Dd=new be;let yl=null,Ml=0,Tl=0,Sl=!1;const Vs=(1+Math.sqrt(5))/2,xr=1/Vs,Ud=[new C(-Vs,xr,0),new C(Vs,xr,0),new C(-xr,0,Vs),new C(xr,0,Vs),new C(0,Vs,-xr),new C(0,Vs,xr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Od{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){yl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yl,Ml,Tl),this._renderer.xr.enabled=Sl,e.scissorTest=!1,La(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Br||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Ki,format:fi,colorSpace:jt,depthBuffer:!1},s=Fd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HM(r)),this._blurMaterial=GM(r,e,t)}return s}_compileMaterial(e){const t=new an(this._lodPlanes[0],e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,n,s){const a=new An(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Dd),u.toneMapping=ni,u.autoClear=!1;const f=new mi({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),g=new an(new Zo,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Dd),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;La(s,M*x,p>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Br||e.mapping===zr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new an(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;La(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,vl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ud[(s-r-1)%Ud.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new an(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ks-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ks;m>ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ks}`);const p=[];let M=0;for(let b=0;b<ks;++b){const B=b/_,E=Math.exp(-B*B/2);p.push(E),b===0?M+=E:b<m&&(M+=2*E)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const S=this._sizeLods[s],L=3*S*(s>x-yr?s-x+yr:0),N=4*(this._cubeSize-S);La(t,L,N,3*S,2*S),c.setRenderTarget(t),c.render(h,vl)}}function HM(i){const e=[],t=[],n=[];let s=i;const r=i-yr+1+Id.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-yr?c=Id[o-i+yr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),x=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let N=0;N<f;N++){const b=N%3*2/3-1,B=N>2?0:-1,E=[b,B,0,b+2/3,B,0,b+2/3,B+1,0,b,B,0,b+2/3,B+1,0,b,B+1,0];M.set(E,_*g*N),x.set(d,m*g*N);const v=[N,N,N,N,N,N];S.set(v,p*g*N)}const L=new Rn;L.setAttribute("position",new Nn(M,_)),L.setAttribute("uv",new Nn(x,m)),L.setAttribute("faceIndex",new Nn(S,p)),e.push(L),s>yr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fd(i,e,t){const n=new _i(i,e,t);return n.texture.mapping=yc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function La(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function GM(i,e,t){const n=new Float32Array(ks),s=new C(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Vd(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Bd(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Gu(){return`

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
	`}function WM(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===iu||c===su,u=c===Br||c===zr;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Od(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Od(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function XM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qM(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let x=0,S=M.length;x<S;x+=3){const L=M[x+0],N=M[x+1],b=M[x+2];d.push(L,N,N,b,b,L)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,S=M.length/3-1;x<S;x+=3){const L=x+0,N=x+1,b=x+2;d.push(L,N,N,b,b,L)}}else return;const m=new(wp(d)?Ip:Pp)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function jM(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/o,f[m]);else{_.multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M];for(let M=0;M<_.length;M++)t.update(p,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function YM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $M(i,e,t){const n=new WeakMap,s=new nt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let v=function(){B.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let L=a.attributes.position.count*S,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const b=new Float32Array(L*N*4*h),B=new ku(b,L,N,h);B.type=di,B.needsUpdate=!0;const E=S*4;for(let G=0;G<h;G++){const Q=p[G],O=M[G],ne=x[G],ee=L*N*4*G;for(let ce=0;ce<Q.count;ce++){const oe=ce*E;g===!0&&(s.fromBufferAttribute(Q,ce),b[ee+oe+0]=s.x,b[ee+oe+1]=s.y,b[ee+oe+2]=s.z,b[ee+oe+3]=0),_===!0&&(s.fromBufferAttribute(O,ce),b[ee+oe+4]=s.x,b[ee+oe+5]=s.y,b[ee+oe+6]=s.z,b[ee+oe+7]=0),m===!0&&(s.fromBufferAttribute(ne,ce),b[ee+oe+8]=s.x,b[ee+oe+9]=s.y,b[ee+oe+10]=s.z,b[ee+oe+11]=ne.itemSize===4?s.w:1)}}d={count:h,texture:B,size:new Me(L,N)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function KM(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class ea extends qt{constructor(e,t,n,s,r,o,a,c,l,u){if(u=u!==void 0?u:wr,u!==wr&&u!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===wr&&(n=Hr),n===void 0&&u===Fo&&(n=$o),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=c!==void 0?c:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vp=new qt,Bp=new ea(1,1);Bp.compareFunction=Np;const zp=new ku,kp=new Fv,Hp=new Op,zd=[],kd=[],Hd=new Float32Array(16),Gd=new Float32Array(9),Wd=new Float32Array(4);function Qr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=zd[s];if(r===void 0&&(r=new Float32Array(s),zd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sc(i,e){let t=kd[e];t===void 0&&(t=new Int32Array(e),kd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ZM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function JM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function QM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function eT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function tT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Wd.set(n),i.uniformMatrix2fv(this.addr,!1,Wd),en(t,n)}}function nT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Gd.set(n),i.uniformMatrix3fv(this.addr,!1,Gd),en(t,n)}}function iT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Hd.set(n),i.uniformMatrix4fv(this.addr,!1,Hd),en(t,n)}}function sT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function oT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function aT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function cT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function uT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function hT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function dT(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Bp:Vp;t.setTexture2D(e||r,s)}function fT(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||kp,s)}function pT(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hp,s)}function mT(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zp,s)}function gT(i){switch(i){case 5126:return ZM;case 35664:return JM;case 35665:return QM;case 35666:return eT;case 35674:return tT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return sT;case 35667:case 35671:return rT;case 35668:case 35672:return oT;case 35669:case 35673:return aT;case 5125:return cT;case 36294:return lT;case 36295:return uT;case 36296:return hT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}function _T(i,e){i.uniform1fv(this.addr,e)}function xT(i,e){const t=Qr(e,this.size,2);i.uniform2fv(this.addr,t)}function vT(i,e){const t=Qr(e,this.size,3);i.uniform3fv(this.addr,t)}function yT(i,e){const t=Qr(e,this.size,4);i.uniform4fv(this.addr,t)}function MT(i,e){const t=Qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function TT(i,e){const t=Qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ST(i,e){const t=Qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ET(i,e){i.uniform1iv(this.addr,e)}function AT(i,e){i.uniform2iv(this.addr,e)}function bT(i,e){i.uniform3iv(this.addr,e)}function NT(i,e){i.uniform4iv(this.addr,e)}function wT(i,e){i.uniform1uiv(this.addr,e)}function RT(i,e){i.uniform2uiv(this.addr,e)}function CT(i,e){i.uniform3uiv(this.addr,e)}function LT(i,e){i.uniform4uiv(this.addr,e)}function PT(i,e,t){const n=this.cache,s=e.length,r=Sc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Vp,r[o])}function IT(i,e,t){const n=this.cache,s=e.length,r=Sc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||kp,r[o])}function DT(i,e,t){const n=this.cache,s=e.length,r=Sc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Hp,r[o])}function UT(i,e,t){const n=this.cache,s=e.length,r=Sc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zp,r[o])}function OT(i){switch(i){case 5126:return _T;case 35664:return xT;case 35665:return vT;case 35666:return yT;case 35674:return MT;case 35675:return TT;case 35676:return ST;case 5124:case 35670:return ET;case 35667:case 35671:return AT;case 35668:case 35672:return bT;case 35669:case 35673:return NT;case 5125:return wT;case 36294:return RT;case 36295:return CT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return UT}}class FT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gT(t.type)}}class VT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OT(t.type)}}class BT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const El=/(\w+)(\])?(\[|\.)?/g;function Xd(i,e){i.seq.push(e),i.map[e.id]=e}function zT(i,e,t){const n=i.name,s=n.length;for(El.lastIndex=0;;){const r=El.exec(n),o=El.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Xd(t,l===void 0?new FT(a,i,e):new VT(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new BT(a),Xd(t,h)),t=h}}}class Wa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);zT(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function qd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const kT=37297;let HT=0;function GT(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function WT(i){const e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(i);let n;switch(e===t?n="":e===Qa&&t===Ja?n="LinearDisplayP3ToLinearSRGB":e===Ja&&t===Qa&&(n="LinearSRGBToLinearDisplayP3"),i){case jt:case Mc:return[n,"LinearTransferOETF"];case sn:case Vu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function jd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+GT(i.getShaderSource(e),o)}else return s}function XT(i,e){const t=WT(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qT(i,e){let t;switch(e){case Du:t="Linear";break;case Uu:t="Reinhard";break;case Ou:t="OptimizedCineon";break;case vc:t="ACESFilmic";break;case Fu:t="AgX";break;case fp:t="Neutral";break;case $x:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function YT(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $T(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ro(i){return i!==""}function Yd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $d(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KT=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(i){return i.replace(KT,JT)}const ZT=new Map;function JT(i,e){let t=We[e];if(t===void 0){const n=ZT.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return au(t)}const QT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(i){return i.replace(QT,eS)}function eS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mx?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function nS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Br:case zr:e="ENVMAP_TYPE_CUBE";break;case yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zr:e="ENVMAP_MODE_REFRACTION";break}return e}function sS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xc:e="ENVMAP_BLENDING_MULTIPLY";break;case jx:e="ENVMAP_BLENDING_MIX";break;case Yx:e="ENVMAP_BLENDING_ADD";break}return e}function rS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function oS(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=tS(t),l=nS(t),u=iS(t),h=sS(t),d=rS(t),f=jT(t),g=YT(r),_=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ro).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ro).join(`
`),p.length>0&&(p+=`
`)):(m=[Zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),p=[Zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?We.tonemapping_pars_fragment:"",t.toneMapping!==ni?qT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,XT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ro).join(`
`)),o=au(o),o=Yd(o,t),o=$d(o,t),a=au(a),a=Yd(a,t),a=$d(a,t),o=Kd(o),a=Kd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+o,S=M+p+a,L=qd(s,s.VERTEX_SHADER,x),N=qd(s,s.FRAGMENT_SHADER,S);s.attachShader(_,L),s.attachShader(_,N),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(G){if(i.debug.checkShaderErrors){const Q=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(L).trim(),ne=s.getShaderInfoLog(N).trim();let ee=!0,ce=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,N);else{const oe=jd(s,L,"vertex"),q=jd(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Q+`
`+oe+`
`+q)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(O===""||ne==="")&&(ce=!1);ce&&(G.diagnostics={runnable:ee,programLog:Q,vertexShader:{log:O,prefix:m},fragmentShader:{log:ne,prefix:p}})}s.deleteShader(L),s.deleteShader(N),B=new Wa(s,_),E=$T(s,_)}let B;this.getUniforms=function(){return B===void 0&&b(this),B};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,kT)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=N,this}let aS=0;class cS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lS(e),t.set(e,n)),n}}class lS{constructor(e){this.id=aS++,this.code=e,this.usedTimes=0}}function uS(i,e,t,n,s,r,o){const a=new Tc,c=new cS,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,v,G,Q,O){const ne=Q.fog,ee=O.geometry,ce=E.isMeshStandardMaterial?Q.environment:null,oe=(E.isMeshStandardMaterial?t:e).get(E.envMap||ce),q=oe&&oe.mapping===yc?oe.image.height:null,le=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ae=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ce=ae!==void 0?ae.length:0;let Je=0;ee.morphAttributes.position!==void 0&&(Je=1),ee.morphAttributes.normal!==void 0&&(Je=2),ee.morphAttributes.color!==void 0&&(Je=3);let Mt,$,ue,Ee;if(le){const ft=wi[le];Mt=ft.vertexShader,$=ft.fragmentShader}else Mt=E.vertexShader,$=E.fragmentShader,c.update(E),ue=c.getVertexShaderID(E),Ee=c.getFragmentShaderID(E);const me=i.getRenderTarget(),Qe=O.isInstancedMesh===!0,et=O.isBatchedMesh===!0,V=!!E.map,bt=!!E.matcap,Ie=!!oe,Tt=!!E.aoMap,Fe=!!E.lightMap,st=!!E.bumpMap,Ye=!!E.normalMap,rt=!!E.displacementMap,It=!!E.emissiveMap,w=!!E.metalnessMap,y=!!E.roughnessMap,X=E.anisotropy>0,te=E.clearcoat>0,se=E.dispersion>0,re=E.iridescence>0,Pe=E.sheen>0,ve=E.transmission>0,xe=X&&!!E.anisotropyMap,Xe=te&&!!E.clearcoatMap,de=te&&!!E.clearcoatNormalMap,Le=te&&!!E.clearcoatRoughnessMap,ot=re&&!!E.iridescenceMap,De=re&&!!E.iridescenceThicknessMap,Te=Pe&&!!E.sheenColorMap,qe=Pe&&!!E.sheenRoughnessMap,tt=!!E.specularMap,Bt=!!E.specularColorMap,je=!!E.specularIntensityMap,I=ve&&!!E.transmissionMap,ie=ve&&!!E.thicknessMap,Z=!!E.gradientMap,ge=!!E.alphaMap,ye=E.alphaTest>0,at=!!E.alphaHash,Nt=!!E.extensions;let Dt=ni;E.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Dt=i.toneMapping);const fn={shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:Mt,fragmentShader:$,defines:E.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:et,instancing:Qe,instancingColor:Qe&&O.instanceColor!==null,instancingMorph:Qe&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:jt,alphaToCoverage:!!E.alphaToCoverage,map:V,matcap:bt,envMap:Ie,envMapMode:Ie&&oe.mapping,envMapCubeUVHeight:q,aoMap:Tt,lightMap:Fe,bumpMap:st,normalMap:Ye,displacementMap:d&&rt,emissiveMap:It,normalMapObjectSpace:Ye&&E.normalMapType===Ap,normalMapTangentSpace:Ye&&E.normalMapType===js,metalnessMap:w,roughnessMap:y,anisotropy:X,anisotropyMap:xe,clearcoat:te,clearcoatMap:Xe,clearcoatNormalMap:de,clearcoatRoughnessMap:Le,dispersion:se,iridescence:re,iridescenceMap:ot,iridescenceThicknessMap:De,sheen:Pe,sheenColorMap:Te,sheenRoughnessMap:qe,specularMap:tt,specularColorMap:Bt,specularIntensityMap:je,transmission:ve,transmissionMap:I,thicknessMap:ie,gradientMap:Z,opaque:E.transparent===!1&&E.blending===Nr&&E.alphaToCoverage===!1,alphaMap:ge,alphaTest:ye,alphaHash:at,combine:E.combine,mapUv:V&&_(E.map.channel),aoMapUv:Tt&&_(E.aoMap.channel),lightMapUv:Fe&&_(E.lightMap.channel),bumpMapUv:st&&_(E.bumpMap.channel),normalMapUv:Ye&&_(E.normalMap.channel),displacementMapUv:rt&&_(E.displacementMap.channel),emissiveMapUv:It&&_(E.emissiveMap.channel),metalnessMapUv:w&&_(E.metalnessMap.channel),roughnessMapUv:y&&_(E.roughnessMap.channel),anisotropyMapUv:xe&&_(E.anisotropyMap.channel),clearcoatMapUv:Xe&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:De&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:qe&&_(E.sheenRoughnessMap.channel),specularMapUv:tt&&_(E.specularMap.channel),specularColorMapUv:Bt&&_(E.specularColorMap.channel),specularIntensityMapUv:je&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:ie&&_(E.thicknessMap.channel),alphaMapUv:ge&&_(E.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ye||X),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!ee.attributes.uv&&(V||ge),fog:!!ne,useFog:E.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Je,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:V&&E.map.isVideoTexture===!0&&ct.getTransfer(E.map.colorSpace)===St,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ui,flipSided:E.side===bn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Nt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Nt&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return fn.vertexUv1s=l.has(1),fn.vertexUv2s=l.has(2),fn.vertexUv3s=l.has(3),l.clear(),fn}function p(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const G in E.defines)v.push(G),v.push(E.defines[G]);return E.isRawShaderMaterial===!1&&(M(v,E),x(v,E),v.push(i.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function M(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function x(E,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.useLegacyLights&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),E.push(a.mask)}function S(E){const v=g[E.type];let G;if(v){const Q=wi[v];G=zo.clone(Q.uniforms)}else G=E.uniforms;return G}function L(E,v){let G;for(let Q=0,O=u.length;Q<O;Q++){const ne=u[Q];if(ne.cacheKey===v){G=ne,++G.usedTimes;break}}return G===void 0&&(G=new oS(i,v,E,r),u.push(G)),G}function N(E){if(--E.usedTimes===0){const v=u.indexOf(E);u[v]=u[u.length-1],u.pop(),E.destroy()}}function b(E){c.remove(E)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:L,releaseProgram:N,releaseShaderCache:b,programs:u,dispose:B}}function hS(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function dS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qd(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||dS),n.length>1&&n.sort(d||Jd),s.length>1&&s.sort(d||Jd)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function fS(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qd,i.set(n,[o])):s>=r.length?(o=new Qd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function pS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new be};break;case"SpotLight":t={position:new C,direction:new C,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function mS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gS=0;function _S(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xS(i){const e=new pS,t=mS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const s=new C,r=new Ve,o=new Ve;function a(l,u){let h=0,d=0,f=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let g=0,_=0,m=0,p=0,M=0,x=0,S=0,L=0,N=0,b=0,B=0;l.sort(_S);const E=u===!0?Math.PI:1;for(let G=0,Q=l.length;G<Q;G++){const O=l[G],ne=O.color,ee=O.intensity,ce=O.distance,oe=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=ne.r*ee*E,d+=ne.g*ee*E,f+=ne.b*ee*E;else if(O.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(O.sh.coefficients[q],ee);B++}else if(O.isDirectionalLight){const q=e.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity*E),O.castShadow){const le=O.shadow,ae=t.get(O);ae.shadowBias=le.bias,ae.shadowNormalBias=le.normalBias,ae.shadowRadius=le.radius,ae.shadowMapSize=le.mapSize,n.directionalShadow[g]=ae,n.directionalShadowMap[g]=oe,n.directionalShadowMatrix[g]=O.shadow.matrix,x++}n.directional[g]=q,g++}else if(O.isSpotLight){const q=e.get(O);q.position.setFromMatrixPosition(O.matrixWorld),q.color.copy(ne).multiplyScalar(ee*E),q.distance=ce,q.coneCos=Math.cos(O.angle),q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),q.decay=O.decay,n.spot[m]=q;const le=O.shadow;if(O.map&&(n.spotLightMap[N]=O.map,N++,le.updateMatrices(O),O.castShadow&&b++),n.spotLightMatrix[m]=le.matrix,O.castShadow){const ae=t.get(O);ae.shadowBias=le.bias,ae.shadowNormalBias=le.normalBias,ae.shadowRadius=le.radius,ae.shadowMapSize=le.mapSize,n.spotShadow[m]=ae,n.spotShadowMap[m]=oe,L++}m++}else if(O.isRectAreaLight){const q=e.get(O);q.color.copy(ne).multiplyScalar(ee),q.halfWidth.set(O.width*.5,0,0),q.halfHeight.set(0,O.height*.5,0),n.rectArea[p]=q,p++}else if(O.isPointLight){const q=e.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity*E),q.distance=O.distance,q.decay=O.decay,O.castShadow){const le=O.shadow,ae=t.get(O);ae.shadowBias=le.bias,ae.shadowNormalBias=le.normalBias,ae.shadowRadius=le.radius,ae.shadowMapSize=le.mapSize,ae.shadowCameraNear=le.camera.near,ae.shadowCameraFar=le.camera.far,n.pointShadow[_]=ae,n.pointShadowMap[_]=oe,n.pointShadowMatrix[_]=O.shadow.matrix,S++}n.point[_]=q,_++}else if(O.isHemisphereLight){const q=e.get(O);q.skyColor.copy(O.color).multiplyScalar(ee*E),q.groundColor.copy(O.groundColor).multiplyScalar(ee*E),n.hemi[M]=q,M++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==g||v.pointLength!==_||v.spotLength!==m||v.rectAreaLength!==p||v.hemiLength!==M||v.numDirectionalShadows!==x||v.numPointShadows!==S||v.numSpotShadows!==L||v.numSpotMaps!==N||v.numLightProbes!==B)&&(n.directional.length=g,n.spot.length=m,n.rectArea.length=p,n.point.length=_,n.hemi.length=M,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=L+N-b,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=B,v.directionalLength=g,v.pointLength=_,v.spotLength=m,v.rectAreaLength=p,v.hemiLength=M,v.numDirectionalShadows=x,v.numPointShadows=S,v.numSpotShadows=L,v.numSpotMaps=N,v.numLightProbes=B,n.version=gS++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const x=l[p];if(x.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(x.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function ef(i){const e=new xS(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function vS(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ef(i),e.set(s,[a])):r>=o.length?(a=new ef(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class yS extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MS extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SS=`uniform sampler2D shadow_pass;
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
}`;function ES(i,e,t){let n=new Hu;const s=new Me,r=new Me,o=new nt,a=new yS({depthPacking:lv}),c=new MS,l={},u=t.maxTextureSize,h={[Ji]:bn,[bn]:Ji,[ui]:ui},d=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:TS,fragmentShader:SS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Rn;g.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new an(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dp;let p=this.type;this.render=function(N,b,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;const E=i.getRenderTarget(),v=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending($i),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const O=p!==ji&&this.type===ji,ne=p===ji&&this.type!==ji;for(let ee=0,ce=N.length;ee<ce;ee++){const oe=N[ee],q=oe.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const le=q.getFrameExtents();if(s.multiply(le),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,q.mapSize.y=r.y)),q.map===null||O===!0||ne===!0){const Ce=this.type!==ji?{minFilter:Jt,magFilter:Jt}:{};q.map!==null&&q.map.dispose(),q.map=new _i(s.x,s.y,Ce),q.map.texture.name=oe.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ae=q.getViewportCount();for(let Ce=0;Ce<ae;Ce++){const Je=q.getViewport(Ce);o.set(r.x*Je.x,r.y*Je.y,r.x*Je.z,r.y*Je.w),Q.viewport(o),q.updateMatrices(oe,Ce),n=q.getFrustum(),S(b,B,q.camera,oe,this.type)}q.isPointLightShadow!==!0&&this.type===ji&&M(q,B),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,v,G)};function M(N,b){const B=e.update(_);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,f.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new _i(s.x,s.y)),d.uniforms.shadow_pass.value=N.map.texture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(b,null,B,d,_,null),f.uniforms.shadow_pass.value=N.mapPass.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(b,null,B,f,_,null)}function x(N,b,B,E){let v=null;const G=B.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)v=G;else if(v=B.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const Q=v.uuid,O=b.uuid;let ne=l[Q];ne===void 0&&(ne={},l[Q]=ne);let ee=ne[O];ee===void 0&&(ee=v.clone(),ne[O]=ee,b.addEventListener("dispose",L)),v=ee}if(v.visible=b.visible,v.wireframe=b.wireframe,E===ji?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,B.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const Q=i.properties.get(v);Q.light=B}return v}function S(N,b,B,E,v){if(N.visible===!1)return;if(N.layers.test(b.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&v===ji)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,N.matrixWorld);const O=e.update(N),ne=N.material;if(Array.isArray(ne)){const ee=O.groups;for(let ce=0,oe=ee.length;ce<oe;ce++){const q=ee[ce],le=ne[q.materialIndex];if(le&&le.visible){const ae=x(N,le,E,v);N.onBeforeShadow(i,N,b,B,O,ae,q),i.renderBufferDirect(B,null,O,ae,N,q),N.onAfterShadow(i,N,b,B,O,ae,q)}}}else if(ne.visible){const ee=x(N,ne,E,v);N.onBeforeShadow(i,N,b,B,O,ee,null),i.renderBufferDirect(B,null,O,ee,N,null),N.onAfterShadow(i,N,b,B,O,ee,null)}}const Q=N.children;for(let O=0,ne=Q.length;O<ne;O++)S(Q[O],b,B,E,v)}function L(N){N.target.removeEventListener("dispose",L);for(const B in l){const E=l[B],v=N.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}function AS(i){function e(){let I=!1;const ie=new nt;let Z=null;const ge=new nt(0,0,0,0);return{setMask:function(ye){Z!==ye&&!I&&(i.colorMask(ye,ye,ye,ye),Z=ye)},setLocked:function(ye){I=ye},setClear:function(ye,at,Nt,Dt,fn){fn===!0&&(ye*=Dt,at*=Dt,Nt*=Dt),ie.set(ye,at,Nt,Dt),ge.equals(ie)===!1&&(i.clearColor(ye,at,Nt,Dt),ge.copy(ie))},reset:function(){I=!1,Z=null,ge.set(-1,0,0,0)}}}function t(){let I=!1,ie=null,Z=null,ge=null;return{setTest:function(ye){ye?Ee(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(ye){ie!==ye&&!I&&(i.depthMask(ye),ie=ye)},setFunc:function(ye){if(Z!==ye){switch(ye){case zx:i.depthFunc(i.NEVER);break;case kx:i.depthFunc(i.ALWAYS);break;case Hx:i.depthFunc(i.LESS);break;case $a:i.depthFunc(i.LEQUAL);break;case Gx:i.depthFunc(i.EQUAL);break;case Wx:i.depthFunc(i.GEQUAL);break;case Xx:i.depthFunc(i.GREATER);break;case qx:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ye}},setLocked:function(ye){I=ye},setClear:function(ye){ge!==ye&&(i.clearDepth(ye),ge=ye)},reset:function(){I=!1,ie=null,Z=null,ge=null}}}function n(){let I=!1,ie=null,Z=null,ge=null,ye=null,at=null,Nt=null,Dt=null,fn=null;return{setTest:function(ft){I||(ft?Ee(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(ft){ie!==ft&&!I&&(i.stencilMask(ft),ie=ft)},setFunc:function(ft,bi,Tn){(Z!==ft||ge!==bi||ye!==Tn)&&(i.stencilFunc(ft,bi,Tn),Z=ft,ge=bi,ye=Tn)},setOp:function(ft,bi,Tn){(at!==ft||Nt!==bi||Dt!==Tn)&&(i.stencilOp(ft,bi,Tn),at=ft,Nt=bi,Dt=Tn)},setLocked:function(ft){I=ft},setClear:function(ft){fn!==ft&&(i.clearStencil(ft),fn=ft)},reset:function(){I=!1,ie=null,Z=null,ge=null,ye=null,at=null,Nt=null,Dt=null,fn=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,M=null,x=null,S=null,L=null,N=new be(0,0,0),b=0,B=!1,E=null,v=null,G=null,Q=null,O=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ce=0;const oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(oe)[1]),ee=ce>=1):oe.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),ee=ce>=2);let q=null,le={};const ae=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),Je=new nt().fromArray(ae),Mt=new nt().fromArray(Ce);function $(I,ie,Z,ge){const ye=new Uint8Array(4),at=i.createTexture();i.bindTexture(I,at),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<Z;Nt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(ie+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return at}const ue={};ue[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Ee(i.DEPTH_TEST),r.setFunc($a),st(!1),Ye(Ph),Ee(i.CULL_FACE),Tt($i);function Ee(I){l[I]!==!0&&(i.enable(I),l[I]=!0)}function me(I){l[I]!==!1&&(i.disable(I),l[I]=!1)}function Qe(I,ie){return u[I]!==ie?(i.bindFramebuffer(I,ie),u[I]=ie,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ie),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function et(I,ie){let Z=d,ge=!1;if(I){Z=h.get(ie),Z===void 0&&(Z=[],h.set(ie,Z));const ye=I.textures;if(Z.length!==ye.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Nt=ye.length;at<Nt;at++)Z[at]=i.COLOR_ATTACHMENT0+at;Z.length=ye.length,ge=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ge=!0);ge&&i.drawBuffers(Z)}function V(I){return f!==I?(i.useProgram(I),f=I,!0):!1}const bt={[zs]:i.FUNC_ADD,[Sx]:i.FUNC_SUBTRACT,[Ex]:i.FUNC_REVERSE_SUBTRACT};bt[Ax]=i.MIN,bt[bx]=i.MAX;const Ie={[Nx]:i.ZERO,[wx]:i.ONE,[Rx]:i.SRC_COLOR,[tu]:i.SRC_ALPHA,[Ux]:i.SRC_ALPHA_SATURATE,[Ix]:i.DST_COLOR,[Lx]:i.DST_ALPHA,[Cx]:i.ONE_MINUS_SRC_COLOR,[nu]:i.ONE_MINUS_SRC_ALPHA,[Dx]:i.ONE_MINUS_DST_COLOR,[Px]:i.ONE_MINUS_DST_ALPHA,[Ox]:i.CONSTANT_COLOR,[Fx]:i.ONE_MINUS_CONSTANT_COLOR,[Vx]:i.CONSTANT_ALPHA,[Bx]:i.ONE_MINUS_CONSTANT_ALPHA};function Tt(I,ie,Z,ge,ye,at,Nt,Dt,fn,ft){if(I===$i){g===!0&&(me(i.BLEND),g=!1);return}if(g===!1&&(Ee(i.BLEND),g=!0),I!==Tx){if(I!==_||ft!==B){if((m!==zs||x!==zs)&&(i.blendEquation(i.FUNC_ADD),m=zs,x=zs),ft)switch(I){case Nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eu:i.blendFunc(i.ONE,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,M=null,S=null,L=null,N.set(0,0,0),b=0,_=I,B=ft}return}ye=ye||ie,at=at||Z,Nt=Nt||ge,(ie!==m||ye!==x)&&(i.blendEquationSeparate(bt[ie],bt[ye]),m=ie,x=ye),(Z!==p||ge!==M||at!==S||Nt!==L)&&(i.blendFuncSeparate(Ie[Z],Ie[ge],Ie[at],Ie[Nt]),p=Z,M=ge,S=at,L=Nt),(Dt.equals(N)===!1||fn!==b)&&(i.blendColor(Dt.r,Dt.g,Dt.b,fn),N.copy(Dt),b=fn),_=I,B=!1}function Fe(I,ie){I.side===ui?me(i.CULL_FACE):Ee(i.CULL_FACE);let Z=I.side===bn;ie&&(Z=!Z),st(Z),I.blending===Nr&&I.transparent===!1?Tt($i):Tt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const ge=I.stencilWrite;o.setTest(ge),ge&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),It(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ee(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(I){E!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),E=I)}function Ye(I){I!==vx?(Ee(i.CULL_FACE),I!==v&&(I===Ph?i.cullFace(i.BACK):I===yx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),v=I}function rt(I){I!==G&&(ee&&i.lineWidth(I),G=I)}function It(I,ie,Z){I?(Ee(i.POLYGON_OFFSET_FILL),(Q!==ie||O!==Z)&&(i.polygonOffset(ie,Z),Q=ie,O=Z)):me(i.POLYGON_OFFSET_FILL)}function w(I){I?Ee(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function y(I){I===void 0&&(I=i.TEXTURE0+ne-1),q!==I&&(i.activeTexture(I),q=I)}function X(I,ie,Z){Z===void 0&&(q===null?Z=i.TEXTURE0+ne-1:Z=q);let ge=le[Z];ge===void 0&&(ge={type:void 0,texture:void 0},le[Z]=ge),(ge.type!==I||ge.texture!==ie)&&(q!==Z&&(i.activeTexture(Z),q=Z),i.bindTexture(I,ie||ue[I]),ge.type=I,ge.texture=ie)}function te(){const I=le[q];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(I){Je.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Je.copy(I))}function qe(I){Mt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Mt.copy(I))}function tt(I,ie){let Z=c.get(ie);Z===void 0&&(Z=new WeakMap,c.set(ie,Z));let ge=Z.get(I);ge===void 0&&(ge=i.getUniformBlockIndex(ie,I.name),Z.set(I,ge))}function Bt(I,ie){const ge=c.get(ie).get(I);a.get(ie)!==ge&&(i.uniformBlockBinding(ie,ge,I.__bindingPointIndex),a.set(ie,ge))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},q=null,le={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,M=null,x=null,S=null,L=null,N=new be(0,0,0),b=0,B=!1,E=null,v=null,G=null,Q=null,O=null,Je.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Ee,disable:me,bindFramebuffer:Qe,drawBuffers:et,useProgram:V,setBlending:Tt,setMaterial:Fe,setFlipSided:st,setCullFace:Ye,setLineWidth:rt,setPolygonOffset:It,setScissorTest:w,activeTexture:y,bindTexture:X,unbindTexture:te,compressedTexImage2D:se,compressedTexImage3D:re,texImage2D:ot,texImage3D:De,updateUBOMapping:tt,uniformBlockBinding:Bt,texStorage2D:de,texStorage3D:Le,texSubImage2D:Pe,texSubImage3D:ve,compressedTexSubImage2D:xe,compressedTexSubImage3D:Xe,scissor:Te,viewport:qe,reset:je}}function bS(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return f?new OffscreenCanvas(w,y):Bo("canvas")}function _(w,y,X){let te=1;const se=It(w);if((se.width>X||se.height>X)&&(te=X/Math.max(se.width,se.height)),te<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const re=Math.floor(te*se.width),Pe=Math.floor(te*se.height);h===void 0&&(h=g(re,Pe));const ve=y?g(re,Pe):h;return ve.width=re,ve.height=Pe,ve.getContext("2d").drawImage(w,0,0,re,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+re+"x"+Pe+")."),ve}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==Jt&&w.minFilter!==Hn}function p(w){i.generateMipmap(w)}function M(w,y,X,te,se=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let re=y;if(y===i.RED&&(X===i.FLOAT&&(re=i.R32F),X===i.HALF_FLOAT&&(re=i.R16F),X===i.UNSIGNED_BYTE&&(re=i.R8)),y===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.R8UI),X===i.UNSIGNED_SHORT&&(re=i.R16UI),X===i.UNSIGNED_INT&&(re=i.R32UI),X===i.BYTE&&(re=i.R8I),X===i.SHORT&&(re=i.R16I),X===i.INT&&(re=i.R32I)),y===i.RG&&(X===i.FLOAT&&(re=i.RG32F),X===i.HALF_FLOAT&&(re=i.RG16F),X===i.UNSIGNED_BYTE&&(re=i.RG8)),y===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RG8UI),X===i.UNSIGNED_SHORT&&(re=i.RG16UI),X===i.UNSIGNED_INT&&(re=i.RG32UI),X===i.BYTE&&(re=i.RG8I),X===i.SHORT&&(re=i.RG16I),X===i.INT&&(re=i.RG32I)),y===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),y===i.RGBA){const Pe=se?Za:ct.getTransfer(te);X===i.FLOAT&&(re=i.RGBA32F),X===i.HALF_FLOAT&&(re=i.RGBA16F),X===i.UNSIGNED_BYTE&&(re=Pe===St?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function x(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Jt&&w.minFilter!==Hn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function S(w){const y=w.target;y.removeEventListener("dispose",S),N(y),y.isVideoTexture&&u.delete(y)}function L(w){const y=w.target;y.removeEventListener("dispose",L),B(y)}function N(w){const y=n.get(w);if(y.__webglInit===void 0)return;const X=w.source,te=d.get(X);if(te){const se=te[y.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(w),Object.keys(te).length===0&&d.delete(X)}n.remove(w)}function b(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const X=w.source,te=d.get(X);delete te[y.__cacheKey],o.memory.textures--}function B(w){const y=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(y.__webglFramebuffer[te]))for(let se=0;se<y.__webglFramebuffer[te].length;se++)i.deleteFramebuffer(y.__webglFramebuffer[te][se]);else i.deleteFramebuffer(y.__webglFramebuffer[te]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[te])}else{if(Array.isArray(y.__webglFramebuffer))for(let te=0;te<y.__webglFramebuffer.length;te++)i.deleteFramebuffer(y.__webglFramebuffer[te]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let te=0;te<y.__webglColorRenderbuffer.length;te++)y.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[te]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const X=w.textures;for(let te=0,se=X.length;te<se;te++){const re=n.get(X[te]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(X[te])}n.remove(w)}let E=0;function v(){E=0}function G(){const w=E;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),E+=1,w}function Q(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function O(w,y){const X=n.get(w);if(w.isVideoTexture&&Ye(w),w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){const te=w.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(X,w,y);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+y)}function ne(w,y){const X=n.get(w);if(w.version>0&&X.__version!==w.version){Je(X,w,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+y)}function ee(w,y){const X=n.get(w);if(w.version>0&&X.__version!==w.version){Je(X,w,y);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+y)}function ce(w,y){const X=n.get(w);if(w.version>0&&X.__version!==w.version){Mt(X,w,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+y)}const oe={[kr]:i.REPEAT,[ms]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},q={[Jt]:i.NEAREST,[mp]:i.NEAREST_MIPMAP_NEAREST,[wo]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[Ga]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},le={[uv]:i.NEVER,[mv]:i.ALWAYS,[bp]:i.LESS,[Np]:i.LEQUAL,[hv]:i.EQUAL,[pv]:i.GEQUAL,[dv]:i.GREATER,[fv]:i.NOTEQUAL};function ae(w,y){if(y.type===di&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Hn||y.magFilter===Ga||y.magFilter===wo||y.magFilter===Pi||y.minFilter===Hn||y.minFilter===Ga||y.minFilter===wo||y.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,oe[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,oe[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,oe[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,q[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,q[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,le[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Jt||y.minFilter!==wo&&y.minFilter!==Pi||y.type===di&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ce(w,y){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",S));const te=y.source;let se=d.get(te);se===void 0&&(se={},d.set(te,se));const re=Q(y);if(re!==w.__cacheKey){se[re]===void 0&&(se[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),se[re].usedTimes++;const Pe=se[w.__cacheKey];Pe!==void 0&&(se[w.__cacheKey].usedTimes--,Pe.usedTimes===0&&b(y)),w.__cacheKey=re,w.__webglTexture=se[re].texture}return X}function Je(w,y,X){let te=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(te=i.TEXTURE_3D);const se=Ce(w,y),re=y.source;t.bindTexture(te,w.__webglTexture,i.TEXTURE0+X);const Pe=n.get(re);if(re.version!==Pe.__version||se===!0){t.activeTexture(i.TEXTURE0+X);const ve=ct.getPrimaries(ct.workingColorSpace),xe=y.colorSpace===ps?null:ct.getPrimaries(y.colorSpace),Xe=y.colorSpace===ps||ve===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let de=_(y.image,!1,s.maxTextureSize);de=rt(y,de);const Le=r.convert(y.format,y.colorSpace),ot=r.convert(y.type);let De=M(y.internalFormat,Le,ot,y.colorSpace,y.isVideoTexture);ae(te,y);let Te;const qe=y.mipmaps,tt=y.isVideoTexture!==!0,Bt=Pe.__version===void 0||se===!0,je=re.dataReady,I=x(y,de);if(y.isDepthTexture)De=i.DEPTH_COMPONENT16,y.type===di?De=i.DEPTH_COMPONENT32F:y.type===Hr?De=i.DEPTH_COMPONENT24:y.type===$o&&(De=i.DEPTH24_STENCIL8),Bt&&(tt?t.texStorage2D(i.TEXTURE_2D,1,De,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,De,de.width,de.height,0,Le,ot,null));else if(y.isDataTexture)if(qe.length>0){tt&&Bt&&t.texStorage2D(i.TEXTURE_2D,I,De,qe[0].width,qe[0].height);for(let ie=0,Z=qe.length;ie<Z;ie++)Te=qe[ie],tt?je&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Te.width,Te.height,Le,ot,Te.data):t.texImage2D(i.TEXTURE_2D,ie,De,Te.width,Te.height,0,Le,ot,Te.data);y.generateMipmaps=!1}else tt?(Bt&&t.texStorage2D(i.TEXTURE_2D,I,De,de.width,de.height),je&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,Le,ot,de.data)):t.texImage2D(i.TEXTURE_2D,0,De,de.width,de.height,0,Le,ot,de.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){tt&&Bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,I,De,qe[0].width,qe[0].height,de.depth);for(let ie=0,Z=qe.length;ie<Z;ie++)Te=qe[ie],y.format!==fi?Le!==null?tt?je&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Te.width,Te.height,de.depth,Le,Te.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,De,Te.width,Te.height,de.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?je&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Te.width,Te.height,de.depth,Le,ot,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,De,Te.width,Te.height,de.depth,0,Le,ot,Te.data)}else{tt&&Bt&&t.texStorage2D(i.TEXTURE_2D,I,De,qe[0].width,qe[0].height);for(let ie=0,Z=qe.length;ie<Z;ie++)Te=qe[ie],y.format!==fi?Le!==null?tt?je&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Te.width,Te.height,Le,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,De,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?je&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Te.width,Te.height,Le,ot,Te.data):t.texImage2D(i.TEXTURE_2D,ie,De,Te.width,Te.height,0,Le,ot,Te.data)}else if(y.isDataArrayTexture)tt?(Bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,I,De,de.width,de.height,de.depth),je&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Le,ot,de.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,de.width,de.height,de.depth,0,Le,ot,de.data);else if(y.isData3DTexture)tt?(Bt&&t.texStorage3D(i.TEXTURE_3D,I,De,de.width,de.height,de.depth),je&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Le,ot,de.data)):t.texImage3D(i.TEXTURE_3D,0,De,de.width,de.height,de.depth,0,Le,ot,de.data);else if(y.isFramebufferTexture){if(Bt)if(tt)t.texStorage2D(i.TEXTURE_2D,I,De,de.width,de.height);else{let ie=de.width,Z=de.height;for(let ge=0;ge<I;ge++)t.texImage2D(i.TEXTURE_2D,ge,De,ie,Z,0,Le,ot,null),ie>>=1,Z>>=1}}else if(qe.length>0){if(tt&&Bt){const ie=It(qe[0]);t.texStorage2D(i.TEXTURE_2D,I,De,ie.width,ie.height)}for(let ie=0,Z=qe.length;ie<Z;ie++)Te=qe[ie],tt?je&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Le,ot,Te):t.texImage2D(i.TEXTURE_2D,ie,De,Le,ot,Te);y.generateMipmaps=!1}else if(tt){if(Bt){const ie=It(de);t.texStorage2D(i.TEXTURE_2D,I,De,ie.width,ie.height)}je&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,ot,de)}else t.texImage2D(i.TEXTURE_2D,0,De,Le,ot,de);m(y)&&p(te),Pe.__version=re.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Mt(w,y,X){if(y.image.length!==6)return;const te=Ce(w,y),se=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+X);const re=n.get(se);if(se.version!==re.__version||te===!0){t.activeTexture(i.TEXTURE0+X);const Pe=ct.getPrimaries(ct.workingColorSpace),ve=y.colorSpace===ps?null:ct.getPrimaries(y.colorSpace),xe=y.colorSpace===ps||Pe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Xe=y.isCompressedTexture||y.image[0].isCompressedTexture,de=y.image[0]&&y.image[0].isDataTexture,Le=[];for(let Z=0;Z<6;Z++)!Xe&&!de?Le[Z]=_(y.image[Z],!0,s.maxCubemapSize):Le[Z]=de?y.image[Z].image:y.image[Z],Le[Z]=rt(y,Le[Z]);const ot=Le[0],De=r.convert(y.format,y.colorSpace),Te=r.convert(y.type),qe=M(y.internalFormat,De,Te,y.colorSpace),tt=y.isVideoTexture!==!0,Bt=re.__version===void 0||te===!0,je=se.dataReady;let I=x(y,ot);ae(i.TEXTURE_CUBE_MAP,y);let ie;if(Xe){tt&&Bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,I,qe,ot.width,ot.height);for(let Z=0;Z<6;Z++){ie=Le[Z].mipmaps;for(let ge=0;ge<ie.length;ge++){const ye=ie[ge];y.format!==fi?De!==null?tt?je&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,ye.width,ye.height,De,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,qe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,ye.width,ye.height,De,Te,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,qe,ye.width,ye.height,0,De,Te,ye.data)}}}else{if(ie=y.mipmaps,tt&&Bt){ie.length>0&&I++;const Z=It(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,I,qe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(de){tt?je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le[Z].width,Le[Z].height,De,Te,Le[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qe,Le[Z].width,Le[Z].height,0,De,Te,Le[Z].data);for(let ge=0;ge<ie.length;ge++){const at=ie[ge].image[Z].image;tt?je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,at.width,at.height,De,Te,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,qe,at.width,at.height,0,De,Te,at.data)}}else{tt?je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,Te,Le[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qe,De,Te,Le[Z]);for(let ge=0;ge<ie.length;ge++){const ye=ie[ge];tt?je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,De,Te,ye.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,qe,De,Te,ye.image[Z])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),re.__version=se.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function $(w,y,X,te,se,re){const Pe=r.convert(X.format,X.colorSpace),ve=r.convert(X.type),xe=M(X.internalFormat,Pe,ve,X.colorSpace);if(!n.get(y).__hasExternalTextures){const de=Math.max(1,y.width>>re),Le=Math.max(1,y.height>>re);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,re,xe,de,Le,y.depth,0,Pe,ve,null):t.texImage2D(se,re,xe,de,Le,0,Pe,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),st(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,se,n.get(X).__webglTexture,0,Fe(y)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,se,n.get(X).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(w,y,X){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer&&!y.stencilBuffer){let te=i.DEPTH_COMPONENT24;if(X||st(y)){const se=y.depthTexture;se&&se.isDepthTexture&&(se.type===di?te=i.DEPTH_COMPONENT32F:se.type===Hr&&(te=i.DEPTH_COMPONENT24));const re=Fe(y);st(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,te,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,te,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(y.depthBuffer&&y.stencilBuffer){const te=Fe(y);X&&st(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,y.width,y.height):st(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const te=y.textures;for(let se=0;se<te.length;se++){const re=te[se],Pe=r.convert(re.format,re.colorSpace),ve=r.convert(re.type),xe=M(re.internalFormat,Pe,ve,re.colorSpace),Xe=Fe(y);X&&st(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,xe,y.width,y.height):st(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,xe,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,xe,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),O(y.depthTexture,0);const te=n.get(y.depthTexture).__webglTexture,se=Fe(y);if(y.depthTexture.format===wr)st(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(y.depthTexture.format===Fo)st(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function me(w){const y=n.get(w),X=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ee(y.__webglFramebuffer,w)}else if(X){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]=i.createRenderbuffer(),ue(y.__webglDepthbuffer[te],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),ue(y.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(w,y,X){const te=n.get(w);y!==void 0&&$(te.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&me(w)}function et(w){const y=w.texture,X=n.get(w),te=n.get(y);w.addEventListener("dispose",L);const se=w.textures,re=w.isWebGLCubeRenderTarget===!0,Pe=se.length>1;if(Pe||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=y.version,o.memory.textures++),re){X.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[ve]=[];for(let xe=0;xe<y.mipmaps.length;xe++)X.__webglFramebuffer[ve][xe]=i.createFramebuffer()}else X.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let ve=0;ve<y.mipmaps.length;ve++)X.__webglFramebuffer[ve]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ve=0,xe=se.length;ve<xe;ve++){const Xe=n.get(se[ve]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&st(w)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ve=0;ve<se.length;ve++){const xe=se[ve];X.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ve]);const Xe=r.convert(xe.format,xe.colorSpace),de=r.convert(xe.type),Le=M(xe.internalFormat,Xe,de,xe.colorSpace,w.isXRRenderTarget===!0),ot=Fe(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Le,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,X.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(X.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),ae(i.TEXTURE_CUBE_MAP,y);for(let ve=0;ve<6;ve++)if(y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)$(X.__webglFramebuffer[ve][xe],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,xe);else $(X.__webglFramebuffer[ve],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ve=0,xe=se.length;ve<xe;ve++){const Xe=se[ve],de=n.get(Xe);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),ae(i.TEXTURE_2D,Xe),$(X.__webglFramebuffer,w,Xe,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),m(Xe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ve=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,te.__webglTexture),ae(ve,y),y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)$(X.__webglFramebuffer[xe],w,y,i.COLOR_ATTACHMENT0,ve,xe);else $(X.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,ve,0);m(y)&&p(ve),t.unbindTexture()}w.depthBuffer&&me(w)}function V(w){const y=w.textures;for(let X=0,te=y.length;X<te;X++){const se=y[X];if(m(se)){const re=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(se).__webglTexture;t.bindTexture(re,Pe),p(re),t.unbindTexture()}}}const bt=[],Ie=[];function Tt(w){if(w.samples>0){if(st(w)===!1){const y=w.textures,X=w.width,te=w.height;let se=i.COLOR_BUFFER_BIT;const re=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(w),ve=y.length>1;if(ve)for(let xe=0;xe<y.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let xe=0;xe<y.length;xe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[xe]);const Xe=n.get(y[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,X,te,0,0,X,te,se,i.NEAREST),c===!0&&(bt.length=0,Ie.length=0,bt.push(i.COLOR_ATTACHMENT0+xe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(bt.push(re),Ie.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let xe=0;xe<y.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[xe]);const Xe=n.get(y[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Fe(w){return Math.min(s.maxSamples,w.samples)}function st(w){const y=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ye(w){const y=o.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function rt(w,y){const X=w.colorSpace,te=w.format,se=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||X!==jt&&X!==ps&&(ct.getTransfer(X)===St?(te!==fi||se!==ys)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),y}function It(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=v,this.setTexture2D=O,this.setTexture2DArray=ne,this.setTexture3D=ee,this.setTextureCube=ce,this.rebindTextures=Qe,this.setupRenderTarget=et,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=$,this.useMultisampledRTT=st}function NS(i,e){function t(n,s=ps){let r;const o=ct.getTransfer(s);if(n===ys)return i.UNSIGNED_BYTE;if(n===xp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vp)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qx)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zx)return i.BYTE;if(n===Jx)return i.SHORT;if(n===gp)return i.UNSIGNED_SHORT;if(n===_p)return i.INT;if(n===Hr)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===Ki)return i.HALF_FLOAT;if(n===ev)return i.ALPHA;if(n===tv)return i.RGB;if(n===fi)return i.RGBA;if(n===nv)return i.LUMINANCE;if(n===iv)return i.LUMINANCE_ALPHA;if(n===wr)return i.DEPTH_COMPONENT;if(n===Fo)return i.DEPTH_STENCIL;if(n===yp)return i.RED;if(n===Mp)return i.RED_INTEGER;if(n===sv)return i.RG;if(n===Tp)return i.RG_INTEGER;if(n===Sp)return i.RGBA_INTEGER;if(n===$c||n===Kc||n===Zc||n===Jc)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$c)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$c)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oh||n===Fh||n===Vh||n===Bh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zh||n===kh||n===Hh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zh||n===kh)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gh||n===Wh||n===Xh||n===qh||n===jh||n===Yh||n===$h||n===Kh||n===Zh||n===Jh||n===Qh||n===ed||n===td||n===nd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$h)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ed)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===td)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nd)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qc||n===id||n===sd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qc)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===id)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rv||n===rd||n===od||n===ad)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===od)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ad)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$o?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class wS extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Gs=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}};const RS={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RS)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const CS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LS=`
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

}`;class PS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new qt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new Xt({vertexShader:CS,fragmentShader:LS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new an(new Jo(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class IS extends As{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new PS,m=t.getContextAttributes();let p=null,M=null;const x=[],S=[],L=new Me;let N=null;const b=new An;b.layers.enable(1),b.viewport=new nt;const B=new An;B.layers.enable(2),B.viewport=new nt;const E=[b,B],v=new wS;v.layers.enable(1),v.layers.enable(2);let G=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ue=x[$];return ue===void 0&&(ue=new Al,x[$]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function($){let ue=x[$];return ue===void 0&&(ue=new Al,x[$]=ue),ue.getGripSpace()},this.getHand=function($){let ue=x[$];return ue===void 0&&(ue=new Al,x[$]=ue),ue.getHandSpace()};function O($){const ue=S.indexOf($.inputSource);if(ue===-1)return;const Ee=x[ue];Ee!==void 0&&(Ee.update($.inputSource,$.frame,l||o),Ee.dispatchEvent({type:$.type,data:$.inputSource}))}function ne(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",ee);for(let $=0;$<x.length;$++){const ue=S[$];ue!==null&&(S[$]=null,x[$].disconnect(ue))}G=null,Q=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,M=null,Mt.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new _i(f.framebufferWidth,f.framebufferHeight,{format:fi,type:ys,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ue=null,Ee=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?Fo:wr,Ee=m.stencil?$o:Hr);const Qe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new _i(d.textureWidth,d.textureHeight,{format:fi,type:ys,depthTexture:new ea(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function ee($){for(let ue=0;ue<$.removed.length;ue++){const Ee=$.removed[ue],me=S.indexOf(Ee);me>=0&&(S[me]=null,x[me].disconnect(Ee))}for(let ue=0;ue<$.added.length;ue++){const Ee=$.added[ue];let me=S.indexOf(Ee);if(me===-1){for(let et=0;et<x.length;et++)if(et>=S.length){S.push(Ee),me=et;break}else if(S[et]===null){S[et]=Ee,me=et;break}if(me===-1)break}const Qe=x[me];Qe&&Qe.connect(Ee)}}const ce=new C,oe=new C;function q($,ue,Ee){ce.setFromMatrixPosition(ue.matrixWorld),oe.setFromMatrixPosition(Ee.matrixWorld);const me=ce.distanceTo(oe),Qe=ue.projectionMatrix.elements,et=Ee.projectionMatrix.elements,V=Qe[14]/(Qe[10]-1),bt=Qe[14]/(Qe[10]+1),Ie=(Qe[9]+1)/Qe[5],Tt=(Qe[9]-1)/Qe[5],Fe=(Qe[8]-1)/Qe[0],st=(et[8]+1)/et[0],Ye=V*Fe,rt=V*st,It=me/(-Fe+st),w=It*-Fe;ue.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(w),$.translateZ(It),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const y=V+It,X=bt+It,te=Ye-w,se=rt+(me-w),re=Ie*bt/X*y,Pe=Tt*bt/X*y;$.projectionMatrix.makePerspective(te,se,re,Pe,y,X),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function le($,ue){ue===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ue.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;_.texture!==null&&($.near=_.depthNear,$.far=_.depthFar),v.near=B.near=b.near=$.near,v.far=B.far=b.far=$.far,(G!==v.near||Q!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),G=v.near,Q=v.far,b.near=G,b.far=Q,B.near=G,B.far=Q,b.updateProjectionMatrix(),B.updateProjectionMatrix(),$.updateProjectionMatrix());const ue=$.parent,Ee=v.cameras;le(v,ue);for(let me=0;me<Ee.length;me++)le(Ee[me],ue);Ee.length===2?q(v,b,B):v.projectionMatrix.copy(b.projectionMatrix),ae($,v,ue)};function ae($,ue,Ee){Ee===null?$.matrix.copy(ue.matrixWorld):($.matrix.copy(Ee.matrixWorld),$.matrix.invert(),$.matrix.multiply(ue.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ue.projectionMatrix),$.projectionMatrixInverse.copy(ue.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Xr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null};let Ce=null;function Je($,ue){if(u=ue.getViewerPose(l||o),g=ue,u!==null){const Ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let me=!1;Ee.length!==v.cameras.length&&(v.cameras.length=0,me=!0);for(let et=0;et<Ee.length;et++){const V=Ee[et];let bt=null;if(f!==null)bt=f.getViewport(V);else{const Tt=h.getViewSubImage(d,V);bt=Tt.viewport,et===0&&(e.setRenderTargetTextures(M,Tt.colorTexture,d.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(M))}let Ie=E[et];Ie===void 0&&(Ie=new An,Ie.layers.enable(et),Ie.viewport=new nt,E[et]=Ie),Ie.matrix.fromArray(V.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(V.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(bt.x,bt.y,bt.width,bt.height),et===0&&(v.matrix.copy(Ie.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),me===!0&&v.cameras.push(Ie)}const Qe=s.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")){const et=h.getDepthInformation(Ee[0]);et&&et.isValid&&et.texture&&_.init(e,et,s.renderState)}}for(let Ee=0;Ee<x.length;Ee++){const me=S[Ee],Qe=x[Ee];me!==null&&Qe!==void 0&&Qe.update(me,ue,l||o)}_.render(e,v),Ce&&Ce($,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}const Mt=new Fp;Mt.setAnimationLoop(Je),this.setAnimationLoop=function($){Ce=$},this.dispose=function(){}}}const Ps=new ii,DS=new Ve;function US(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),x=M.envMap,S=M.envMapRotation;if(x&&(m.envMap.value=x,Ps.copy(S),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),m.envMapRotation.value.setFromMatrix4(DS.makeRotationFromEuler(Ps)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const L=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*L,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function OS(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const S=x.program;n.uniformBlockBinding(M,S)}function l(M,x){let S=s[M.id];S===void 0&&(g(M),S=u(M),s[M.id]=S,M.addEventListener("dispose",m));const L=x.program;n.updateUBOMapping(M,L);const N=e.render.frame;r[M.id]!==N&&(d(M),r[M.id]=N)}function u(M){const x=h();M.__bindingPointIndex=x;const S=i.createBuffer(),L=M.__size,N=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],S=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let N=0,b=S.length;N<b;N++){const B=Array.isArray(S[N])?S[N]:[S[N]];for(let E=0,v=B.length;E<v;E++){const G=B[E];if(f(G,N,E,L)===!0){const Q=G.__offset,O=Array.isArray(G.value)?G.value:[G.value];let ne=0;for(let ee=0;ee<O.length;ee++){const ce=O[ee],oe=_(ce);typeof ce=="number"||typeof ce=="boolean"?(G.__data[0]=ce,i.bufferSubData(i.UNIFORM_BUFFER,Q+ne,G.__data)):ce.isMatrix3?(G.__data[0]=ce.elements[0],G.__data[1]=ce.elements[1],G.__data[2]=ce.elements[2],G.__data[3]=0,G.__data[4]=ce.elements[3],G.__data[5]=ce.elements[4],G.__data[6]=ce.elements[5],G.__data[7]=0,G.__data[8]=ce.elements[6],G.__data[9]=ce.elements[7],G.__data[10]=ce.elements[8],G.__data[11]=0):(ce.toArray(G.__data,ne),ne+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,x,S,L){const N=M.value,b=x+"_"+S;if(L[b]===void 0)return typeof N=="number"||typeof N=="boolean"?L[b]=N:L[b]=N.clone(),!0;{const B=L[b];if(typeof N=="number"||typeof N=="boolean"){if(B!==N)return L[b]=N,!0}else if(B.equals(N)===!1)return B.copy(N),!0}return!1}function g(M){const x=M.uniforms;let S=0;const L=16;for(let b=0,B=x.length;b<B;b++){const E=Array.isArray(x[b])?x[b]:[x[b]];for(let v=0,G=E.length;v<G;v++){const Q=E[v],O=Array.isArray(Q.value)?Q.value:[Q.value];for(let ne=0,ee=O.length;ne<ee;ne++){const ce=O[ne],oe=_(ce),q=S%L;q!==0&&L-q<oe.boundary&&(S+=L-q),Q.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=S,S+=oe.storage}}}const N=S%L;return N>0&&(S+=L-N),M.__size=S,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class FS{constructor(e={}){const{canvas:t=Pv(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this._useLegacyLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const x=this;let S=!1,L=0,N=0,b=null,B=-1,E=null;const v=new nt,G=new nt;let Q=null;const O=new be(0);let ne=0,ee=t.width,ce=t.height,oe=1,q=null,le=null;const ae=new nt(0,0,ee,ce),Ce=new nt(0,0,ee,ce);let Je=!1;const Mt=new Hu;let $=!1,ue=!1;const Ee=new Ve,me=new C,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return b===null?oe:1}let V=n;function bt(T,F){return t.getContext(T,F)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Iu}`),t.addEventListener("webglcontextlost",I,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",Z,!1),V===null){const F="webgl2";if(V=bt(F,T),V===null)throw bt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ie,Tt,Fe,st,Ye,rt,It,w,y,X,te,se,re,Pe,ve,xe,Xe,de,Le,ot,De,Te,qe,tt;function Bt(){Ie=new XM(V),Ie.init(),Te=new NS(V,Ie),Tt=new BM(V,Ie,e,Te),Fe=new AS(V),st=new YM(V),Ye=new hS,rt=new bS(V,Ie,Fe,Ye,Tt,Te,st),It=new kM(x),w=new WM(x),y=new t0(V),qe=new FM(V,y),X=new qM(V,y,st,qe),te=new KM(V,X,y,st),Le=new $M(V,Tt,rt),xe=new zM(Ye),se=new uS(x,It,w,Ie,Tt,qe,xe),re=new US(x,Ye),Pe=new fS,ve=new vS(Ie),de=new OM(x,It,w,Fe,te,d,c),Xe=new ES(x,te,Tt),tt=new OS(V,st,Tt,Fe),ot=new VM(V,Ie,st),De=new jM(V,Ie,st),st.programs=se.programs,x.capabilities=Tt,x.extensions=Ie,x.properties=Ye,x.renderLists=Pe,x.shadowMap=Xe,x.state=Fe,x.info=st}Bt();const je=new IS(x,V);this.xr=je,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=Ie.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ie.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(T){T!==void 0&&(oe=T,this.setSize(ee,ce,!1))},this.getSize=function(T){return T.set(ee,ce)},this.setSize=function(T,F,W=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=T,ce=F,t.width=Math.floor(T*oe),t.height=Math.floor(F*oe),W===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(ee*oe,ce*oe).floor()},this.setDrawingBufferSize=function(T,F,W){ee=T,ce=F,oe=W,t.width=Math.floor(T*W),t.height=Math.floor(F*W),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,F,W,k){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,F,W,k),Fe.viewport(v.copy(ae).multiplyScalar(oe).round())},this.getScissor=function(T){return T.copy(Ce)},this.setScissor=function(T,F,W,k){T.isVector4?Ce.set(T.x,T.y,T.z,T.w):Ce.set(T,F,W,k),Fe.scissor(G.copy(Ce).multiplyScalar(oe).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(T){Fe.setScissorTest(Je=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){le=T},this.getClearColor=function(T){return T.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(T=!0,F=!0,W=!0){let k=0;if(T){let H=!1;if(b!==null){const _e=b.texture.format;H=_e===Sp||_e===Tp||_e===Mp}if(H){const _e=b.texture.type,Ne=_e===ys||_e===Hr||_e===gp||_e===$o||_e===xp||_e===vp,we=de.getClearColor(),Ue=de.getClearAlpha(),Be=we.r,Ge=we.g,$e=we.b;Ne?(f[0]=Be,f[1]=Ge,f[2]=$e,f[3]=Ue,V.clearBufferuiv(V.COLOR,0,f)):(g[0]=Be,g[1]=Ge,g[2]=$e,g[3]=Ue,V.clearBufferiv(V.COLOR,0,g))}else k|=V.COLOR_BUFFER_BIT}F&&(k|=V.DEPTH_BUFFER_BIT),W&&(k|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",I,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Pe.dispose(),ve.dispose(),Ye.dispose(),It.dispose(),w.dispose(),te.dispose(),qe.dispose(),tt.dispose(),se.dispose(),je.dispose(),je.removeEventListener("sessionstart",ft),je.removeEventListener("sessionend",bi),Tn.stop()};function I(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=st.autoReset,F=Xe.enabled,W=Xe.autoUpdate,k=Xe.needsUpdate,H=Xe.type;Bt(),st.autoReset=T,Xe.enabled=F,Xe.autoUpdate=W,Xe.needsUpdate=k,Xe.type=H}function Z(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ge(T){const F=T.target;F.removeEventListener("dispose",ge),ye(F)}function ye(T){at(T),Ye.remove(T)}function at(T){const F=Ye.get(T).programs;F!==void 0&&(F.forEach(function(W){se.releaseProgram(W)}),T.isShaderMaterial&&se.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,W,k,H,_e){F===null&&(F=Qe);const Ne=H.isMesh&&H.matrixWorld.determinant()<0,we=px(T,F,W,k,H);Fe.setMaterial(k,Ne);let Ue=W.index,Be=1;if(k.wireframe===!0){if(Ue=X.getWireframeAttribute(W),Ue===void 0)return;Be=2}const Ge=W.drawRange,$e=W.attributes.position;let kt=Ge.start*Be,pn=(Ge.start+Ge.count)*Be;_e!==null&&(kt=Math.max(kt,_e.start*Be),pn=Math.min(pn,(_e.start+_e.count)*Be)),Ue!==null?(kt=Math.max(kt,0),pn=Math.min(pn,Ue.count)):$e!=null&&(kt=Math.max(kt,0),pn=Math.min(pn,$e.count));const Fn=pn-kt;if(Fn<0||Fn===1/0)return;qe.setup(H,k,we,W,Ue);let zi,ut=ot;if(Ue!==null&&(zi=y.get(Ue),ut=De,ut.setIndex(zi)),H.isMesh)k.wireframe===!0?(Fe.setLineWidth(k.wireframeLinewidth*et()),ut.setMode(V.LINES)):ut.setMode(V.TRIANGLES);else if(H.isLine){let ze=k.linewidth;ze===void 0&&(ze=1),Fe.setLineWidth(ze*et()),H.isLineSegments?ut.setMode(V.LINES):H.isLineLoop?ut.setMode(V.LINE_LOOP):ut.setMode(V.LINE_STRIP)}else H.isPoints?ut.setMode(V.POINTS):H.isSprite&&ut.setMode(V.TRIANGLES);if(H.isBatchedMesh)H._multiDrawInstances!==null?ut.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances):ut.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ut.renderInstances(kt,Fn,H.count);else if(W.isInstancedBufferGeometry){const ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,po=Math.min(W.instanceCount,ze);ut.renderInstances(kt,Fn,po)}else ut.render(kt,Fn)};function Nt(T,F,W){T.transparent===!0&&T.side===ui&&T.forceSinglePass===!1?(T.side=bn,T.needsUpdate=!0,ua(T,F,W),T.side=Ji,T.needsUpdate=!0,ua(T,F,W),T.side=ui):ua(T,F,W)}this.compile=function(T,F,W=null){W===null&&(W=T),m=ve.get(W),m.init(F),M.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==W&&T.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(x._useLegacyLights);const k=new Set;return T.traverse(function(H){const _e=H.material;if(_e)if(Array.isArray(_e))for(let Ne=0;Ne<_e.length;Ne++){const we=_e[Ne];Nt(we,W,H),k.add(we)}else Nt(_e,W,H),k.add(_e)}),M.pop(),m=null,k},this.compileAsync=function(T,F,W=null){const k=this.compile(T,F,W);return new Promise(H=>{function _e(){if(k.forEach(function(Ne){Ye.get(Ne).currentProgram.isReady()&&k.delete(Ne)}),k.size===0){H(T);return}setTimeout(_e,10)}Ie.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Dt=null;function fn(T){Dt&&Dt(T)}function ft(){Tn.stop()}function bi(){Tn.start()}const Tn=new Fp;Tn.setAnimationLoop(fn),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(T){Dt=T,je.setAnimationLoop(T),T===null?Tn.stop():Tn.start()},je.addEventListener("sessionstart",ft),je.addEventListener("sessionend",bi),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(F),F=je.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,F,b),m=ve.get(T,M.length),m.init(F),M.push(m),Ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Mt.setFromProjectionMatrix(Ee),ue=this.localClippingEnabled,$=xe.init(this.clippingPlanes,ue),_=Pe.get(T,p.length),_.init(),p.push(_),Eh(T,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(q,le);const W=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1;W&&de.addToRenderList(_,T),this.info.render.frame++,$===!0&&xe.beginShadows();const k=m.state.shadowsArray;Xe.render(k,T,F),$===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,_e=_.transmissive;if(m.setupLights(x._useLegacyLights),F.isArrayCamera){const Ne=F.cameras;if(_e.length>0)for(let we=0,Ue=Ne.length;we<Ue;we++){const Be=Ne[we];bh(H,_e,T,Be)}W&&de.render(T);for(let we=0,Ue=Ne.length;we<Ue;we++){const Be=Ne[we];Ah(_,T,Be,Be.viewport)}}else _e.length>0&&bh(H,_e,T,F),W&&de.render(T),Ah(_,T,F);b!==null&&(rt.updateMultisampleRenderTarget(b),rt.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(x,T,F),qe.resetDefaultState(),B=-1,E=null,M.pop(),M.length>0?(m=M[M.length-1],$===!0&&xe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Eh(T,F,W,k){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Mt.intersectsSprite(T)){k&&me.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ee);const Ne=te.update(T),we=T.material;we.visible&&_.push(T,Ne,we,W,me.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Mt.intersectsObject(T))){const Ne=te.update(T),we=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),me.copy(T.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),me.copy(Ne.boundingSphere.center)),me.applyMatrix4(T.matrixWorld).applyMatrix4(Ee)),Array.isArray(we)){const Ue=Ne.groups;for(let Be=0,Ge=Ue.length;Be<Ge;Be++){const $e=Ue[Be],kt=we[$e.materialIndex];kt&&kt.visible&&_.push(T,Ne,kt,W,me.z,$e)}}else we.visible&&_.push(T,Ne,we,W,me.z,null)}}const _e=T.children;for(let Ne=0,we=_e.length;Ne<we;Ne++)Eh(_e[Ne],F,W,k)}function Ah(T,F,W,k){const H=T.opaque,_e=T.transmissive,Ne=T.transparent;m.setupLightsView(W),$===!0&&xe.setGlobalState(x.clippingPlanes,W),k&&Fe.viewport(v.copy(k)),H.length>0&&la(H,F,W),_e.length>0&&la(_e,F,W),Ne.length>0&&la(Ne,F,W),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function bh(T,F,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new _i(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?Ki:ys,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const _e=m.state.transmissionRenderTarget[k.id],Ne=k.viewport||v;_e.setSize(Ne.z,Ne.w);const we=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(O),ne=x.getClearAlpha(),ne<1&&x.setClearColor(16777215,.5),x.clear();const Ue=x.toneMapping;x.toneMapping=ni;const Be=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),$===!0&&xe.setGlobalState(x.clippingPlanes,k),la(T,W,k),rt.updateMultisampleRenderTarget(_e),rt.updateRenderTargetMipmap(_e),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let $e=0,kt=F.length;$e<kt;$e++){const pn=F[$e],Fn=pn.object,zi=pn.geometry,ut=pn.material,ze=pn.group;if(ut.side===ui&&Fn.layers.test(k.layers)){const po=ut.side;ut.side=bn,ut.needsUpdate=!0,Nh(Fn,W,k,zi,ut,ze),ut.side=po,ut.needsUpdate=!0,Ge=!0}}Ge===!0&&(rt.updateMultisampleRenderTarget(_e),rt.updateRenderTargetMipmap(_e))}x.setRenderTarget(we),x.setClearColor(O,ne),Be!==void 0&&(k.viewport=Be),x.toneMapping=Ue}function la(T,F,W){const k=F.isScene===!0?F.overrideMaterial:null;for(let H=0,_e=T.length;H<_e;H++){const Ne=T[H],we=Ne.object,Ue=Ne.geometry,Be=k===null?Ne.material:k,Ge=Ne.group;we.layers.test(W.layers)&&Nh(we,F,W,Ue,Be,Ge)}}function Nh(T,F,W,k,H,_e){T.onBeforeRender(x,F,W,k,H,_e),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(x,F,W,k,T,_e),H.transparent===!0&&H.side===ui&&H.forceSinglePass===!1?(H.side=bn,H.needsUpdate=!0,x.renderBufferDirect(W,F,k,H,T,_e),H.side=Ji,H.needsUpdate=!0,x.renderBufferDirect(W,F,k,H,T,_e),H.side=ui):x.renderBufferDirect(W,F,k,H,T,_e),T.onAfterRender(x,F,W,k,H,_e)}function ua(T,F,W){F.isScene!==!0&&(F=Qe);const k=Ye.get(T),H=m.state.lights,_e=m.state.shadowsArray,Ne=H.state.version,we=se.getParameters(T,H.state,_e,F,W),Ue=se.getProgramCacheKey(we);let Be=k.programs;k.environment=T.isMeshStandardMaterial?F.environment:null,k.fog=F.fog,k.envMap=(T.isMeshStandardMaterial?w:It).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",ge),Be=new Map,k.programs=Be);let Ge=Be.get(Ue);if(Ge!==void 0){if(k.currentProgram===Ge&&k.lightsStateVersion===Ne)return Rh(T,we),Ge}else we.uniforms=se.getUniforms(T),T.onBuild(W,we,x),T.onBeforeCompile(we,x),Ge=se.acquireProgram(we,Ue),Be.set(Ue,Ge),k.uniforms=we.uniforms;const $e=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($e.clippingPlanes=xe.uniform),Rh(T,we),k.needsLights=gx(T),k.lightsStateVersion=Ne,k.needsLights&&($e.ambientLightColor.value=H.state.ambient,$e.lightProbe.value=H.state.probe,$e.directionalLights.value=H.state.directional,$e.directionalLightShadows.value=H.state.directionalShadow,$e.spotLights.value=H.state.spot,$e.spotLightShadows.value=H.state.spotShadow,$e.rectAreaLights.value=H.state.rectArea,$e.ltc_1.value=H.state.rectAreaLTC1,$e.ltc_2.value=H.state.rectAreaLTC2,$e.pointLights.value=H.state.point,$e.pointLightShadows.value=H.state.pointShadow,$e.hemisphereLights.value=H.state.hemi,$e.directionalShadowMap.value=H.state.directionalShadowMap,$e.directionalShadowMatrix.value=H.state.directionalShadowMatrix,$e.spotShadowMap.value=H.state.spotShadowMap,$e.spotLightMatrix.value=H.state.spotLightMatrix,$e.spotLightMap.value=H.state.spotLightMap,$e.pointShadowMap.value=H.state.pointShadowMap,$e.pointShadowMatrix.value=H.state.pointShadowMatrix),k.currentProgram=Ge,k.uniformsList=null,Ge}function wh(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Wa.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Rh(T,F){const W=Ye.get(T);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function px(T,F,W,k,H){F.isScene!==!0&&(F=Qe),rt.resetTextureUnits();const _e=F.fog,Ne=k.isMeshStandardMaterial?F.environment:null,we=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:jt,Ue=(k.isMeshStandardMaterial?w:It).get(k.envMap||Ne),Be=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),$e=!!W.morphAttributes.position,kt=!!W.morphAttributes.normal,pn=!!W.morphAttributes.color;let Fn=ni;k.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Fn=x.toneMapping);const zi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ut=zi!==void 0?zi.length:0,ze=Ye.get(k),po=m.state.lights;if($===!0&&(ue===!0||T!==E)){const $n=T===E&&k.id===B;xe.setState(k,T,$n)}let Rt=!1;k.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==po.state.version||ze.outputColorSpace!==we||H.isBatchedMesh&&ze.batching===!1||!H.isBatchedMesh&&ze.batching===!0||H.isInstancedMesh&&ze.instancing===!1||!H.isInstancedMesh&&ze.instancing===!0||H.isSkinnedMesh&&ze.skinning===!1||!H.isSkinnedMesh&&ze.skinning===!0||H.isInstancedMesh&&ze.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ze.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ze.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ze.instancingMorph===!1&&H.morphTexture!==null||ze.envMap!==Ue||k.fog===!0&&ze.fog!==_e||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==xe.numPlanes||ze.numIntersection!==xe.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==Ge||ze.morphTargets!==$e||ze.morphNormals!==kt||ze.morphColors!==pn||ze.toneMapping!==Fn||ze.morphTargetsCount!==ut)&&(Rt=!0):(Rt=!0,ze.__version=k.version);let bs=ze.currentProgram;Rt===!0&&(bs=ua(k,F,H));let Ch=!1,mo=!1,qc=!1;const mn=bs.getUniforms(),ns=ze.uniforms;if(Fe.useProgram(bs.program)&&(Ch=!0,mo=!0,qc=!0),k.id!==B&&(B=k.id,mo=!0),Ch||E!==T){mn.setValue(V,"projectionMatrix",T.projectionMatrix),mn.setValue(V,"viewMatrix",T.matrixWorldInverse);const $n=mn.map.cameraPosition;$n!==void 0&&$n.setValue(V,me.setFromMatrixPosition(T.matrixWorld)),Tt.logarithmicDepthBuffer&&mn.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&mn.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,mo=!0,qc=!0)}if(H.isSkinnedMesh){mn.setOptional(V,H,"bindMatrix"),mn.setOptional(V,H,"bindMatrixInverse");const $n=H.skeleton;$n&&($n.boneTexture===null&&$n.computeBoneTexture(),mn.setValue(V,"boneTexture",$n.boneTexture,rt))}H.isBatchedMesh&&(mn.setOptional(V,H,"batchingTexture"),mn.setValue(V,"batchingTexture",H._matricesTexture,rt));const jc=W.morphAttributes;if((jc.position!==void 0||jc.normal!==void 0||jc.color!==void 0)&&Le.update(H,W,bs),(mo||ze.receiveShadow!==H.receiveShadow)&&(ze.receiveShadow=H.receiveShadow,mn.setValue(V,"receiveShadow",H.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ns.envMap.value=Ue,ns.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&F.environment!==null&&(ns.envMapIntensity.value=F.environmentIntensity),mo&&(mn.setValue(V,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&mx(ns,qc),_e&&k.fog===!0&&re.refreshFogUniforms(ns,_e),re.refreshMaterialUniforms(ns,k,oe,ce,m.state.transmissionRenderTarget[T.id]),Wa.upload(V,wh(ze),ns,rt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Wa.upload(V,wh(ze),ns,rt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&mn.setValue(V,"center",H.center),mn.setValue(V,"modelViewMatrix",H.modelViewMatrix),mn.setValue(V,"normalMatrix",H.normalMatrix),mn.setValue(V,"modelMatrix",H.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const $n=k.uniformsGroups;for(let Yc=0,_x=$n.length;Yc<_x;Yc++){const Lh=$n[Yc];tt.update(Lh,bs),tt.bind(Lh,bs)}}return bs}function mx(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function gx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,F,W){Ye.get(T.texture).__webglTexture=F,Ye.get(T.depthTexture).__webglTexture=W;const k=Ye.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=W===void 0,k.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const W=Ye.get(T);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,W=0){b=T,L=F,N=W;let k=!0,H=null,_e=!1,Ne=!1;if(T){const Ue=Ye.get(T);Ue.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(V.FRAMEBUFFER,null),k=!1):Ue.__webglFramebuffer===void 0?rt.setupRenderTarget(T):Ue.__hasExternalTextures&&rt.rebindTextures(T,Ye.get(T.texture).__webglTexture,Ye.get(T.depthTexture).__webglTexture);const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ne=!0);const Ge=Ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?H=Ge[F][W]:H=Ge[F],_e=!0):T.samples>0&&rt.useMultisampledRTT(T)===!1?H=Ye.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?H=Ge[W]:H=Ge,v.copy(T.viewport),G.copy(T.scissor),Q=T.scissorTest}else v.copy(ae).multiplyScalar(oe).floor(),G.copy(Ce).multiplyScalar(oe).floor(),Q=Je;if(Fe.bindFramebuffer(V.FRAMEBUFFER,H)&&k&&Fe.drawBuffers(T,H),Fe.viewport(v),Fe.scissor(G),Fe.setScissorTest(Q),_e){const Ue=Ye.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ue.__webglTexture,W)}else if(Ne){const Ue=Ye.get(T.texture),Be=F||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ue.__webglTexture,W||0,Be)}B=-1},this.readRenderTargetPixels=function(T,F,W,k,H,_e,Ne){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(we=we[Ne]),we){Fe.bindFramebuffer(V.FRAMEBUFFER,we);try{const Ue=T.texture,Be=Ue.format,Ge=Ue.type;if(!Tt.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-k&&W>=0&&W<=T.height-H&&V.readPixels(F,W,k,H,Te.convert(Be),Te.convert(Ge),_e)}finally{const Ue=b!==null?Ye.get(b).__webglFramebuffer:null;Fe.bindFramebuffer(V.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(T,F,W=0){const k=Math.pow(2,-W),H=Math.floor(F.image.width*k),_e=Math.floor(F.image.height*k);rt.setTexture2D(F,0),V.copyTexSubImage2D(V.TEXTURE_2D,W,0,0,T.x,T.y,H,_e),Fe.unbindTexture()},this.copyTextureToTexture=function(T,F,W,k=0){const H=F.image.width,_e=F.image.height,Ne=Te.convert(W.format),we=Te.convert(W.type);rt.setTexture2D(W,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment),F.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,k,T.x,T.y,H,_e,Ne,we,F.image.data):F.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,k,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,Ne,F.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,k,T.x,T.y,Ne,we,F.image),k===0&&W.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(T,F,W,k,H=0){const _e=T.max.x-T.min.x,Ne=T.max.y-T.min.y,we=T.max.z-T.min.z,Ue=Te.convert(k.format),Be=Te.convert(k.type);let Ge;if(k.isData3DTexture)rt.setTexture3D(k,0),Ge=V.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)rt.setTexture2DArray(k,0),Ge=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment);const $e=V.getParameter(V.UNPACK_ROW_LENGTH),kt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),pn=V.getParameter(V.UNPACK_SKIP_PIXELS),Fn=V.getParameter(V.UNPACK_SKIP_ROWS),zi=V.getParameter(V.UNPACK_SKIP_IMAGES),ut=W.isCompressedTexture?W.mipmaps[H]:W.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,ut.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ut.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,T.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,T.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,T.min.z),W.isDataTexture||W.isData3DTexture?V.texSubImage3D(Ge,H,F.x,F.y,F.z,_e,Ne,we,Ue,Be,ut.data):k.isCompressedArrayTexture?V.compressedTexSubImage3D(Ge,H,F.x,F.y,F.z,_e,Ne,we,Ue,ut.data):V.texSubImage3D(Ge,H,F.x,F.y,F.z,_e,Ne,we,Ue,Be,ut),V.pixelStorei(V.UNPACK_ROW_LENGTH,$e),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,kt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,pn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Fn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,zi),H===0&&k.generateMipmaps&&V.generateMipmap(Ge),Fe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?rt.setTextureCube(T,0):T.isData3DTexture?rt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?rt.setTexture2DArray(T,0):rt.setTexture2D(T,0),Fe.unbindTexture()},this.resetState=function(){L=0,N=0,b=null,Fe.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Vu?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===Mc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Wu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new Wu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class VS extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Rp("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Sn=new C;class Ec{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ec(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class BS extends yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tf=new C,nf=new nt,sf=new nt,zS=new C,rf=new Ve,Pa=new C,bl=new Fi,of=new Ve,Nl=new Ko;class kS extends an{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uh,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingBox.expandByPoint(Pa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingSphere.expandByPoint(Pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bl.copy(this.boundingSphere),bl.applyMatrix4(s),e.ray.intersectsSphere(bl)!==!1&&(of.copy(s).invert(),Nl.copy(e.ray).applyMatrix4(of),!(this.boundingBox!==null&&Nl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Nl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;nf.fromBufferAttribute(s.attributes.skinIndex,e),sf.fromBufferAttribute(s.attributes.skinWeight,e),tf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=sf.getComponent(r);if(o!==0){const a=nf.getComponent(r);rf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(zS.copy(tf).applyMatrix4(rf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gp extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wp extends qt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Jt,u=Jt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const af=new Ve,HS=new Ve;class qu{constructor(e=[],t=[]){this.uuid=gi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:HS;af.multiplyMatrices(a,t[r]),af.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new qu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Wp(t,e,e,fi,di);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Gp),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class tc extends Nn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vr=new Ve,cf=new Ve,Ia=[],lf=new yi,GS=new Ve,yo=new an,Mo=new Fi;class WS extends an{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,GS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),lf.copy(e.boundingBox).applyMatrix4(vr),this.boundingBox.union(lf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),Mo.copy(e.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(Mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(n),e.ray.intersectsSphere(Mo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vr),cf.multiplyMatrices(n,vr),yo.matrixWorld=cf,yo.raycast(e,Ia);for(let o=0,a=Ia.length;o<a;o++){const c=Ia[o];c.instanceId=r,c.object=this,t.push(c)}Ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new tc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wp(new Float32Array(s*this.count),s,this.count,yp,di));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ta extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nc=new C,ic=new C,uf=new Ve,To=new Ko,Da=new Fi,wl=new C,hf=new C;class Ac extends At{constructor(e=new Rn,t=new ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)nc.fromBufferAttribute(t,s-1),ic.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=nc.distanceTo(ic);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),Da.radius+=r,e.ray.intersectsSphere(Da)===!1)return;uf.copy(s).invert(),To.copy(e.ray).applyMatrix4(uf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),M=u.getX(_+1),x=Ua(this,e,To,c,p,M);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Ua(this,e,To,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Ua(this,e,To,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ua(this,e,To,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ua(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(nc.fromBufferAttribute(o,s),ic.fromBufferAttribute(o,r),t.distanceSqToSegment(nc,ic,wl,hf)>n)return;wl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(wl);if(!(c<e.near||c>e.far))return{distance:c,point:hf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const df=new C,ff=new C;class Xp extends Ac{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)df.fromBufferAttribute(t,s),ff.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+df.distanceTo(ff);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class XS extends Ac{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bc extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pf=new Ve,cu=new Ko,Oa=new Fi,Fa=new C;class qS extends At{constructor(e=new Rn,t=new bc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(s),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;pf.copy(s).invert(),cu.copy(e.ray).applyMatrix4(pf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Fa.fromBufferAttribute(h,m),mf(Fa,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Fa.fromBufferAttribute(h,g),mf(Fa,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mf(i,e,t,n,s,r,o){const a=cu.distanceSqToPoint(i);if(a<t){const c=new C;cu.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class qp extends qt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Jt,this.minFilter=Jt,this.generateMipmaps=!1,this.needsUpdate=!0}}class jp extends qt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ju extends Rn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new C,d=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let S=0;p===0&&o===0?S=.5/t:p===n&&c===Math.PI&&(S=-.5/t);for(let L=0;L<=t;L++){const N=L/t;h.x=-e*Math.cos(s+N*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+N*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(N+S,1-x),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const x=u[p][M+1],S=u[p][M],L=u[p+1][M],N=u[p+1][M+1];(p!==0||o>0)&&f.push(x,S,N),(p!==n-1||c<Math.PI)&&f.push(S,L,N)}this.setIndex(f),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jS extends Rn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new C,r=new C;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],d=h.start,f=h.count;for(let g=d,_=d+f;g<_;g+=3)for(let m=0;m<3;m++){const p=a.getX(g+m),M=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,M),gf(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,h=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),gf(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new ln(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function gf(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class YS extends yn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class $S extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nc extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=js,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ei extends Nc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class KS extends yn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=js,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ZS extends yn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=js,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class JS extends yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=js,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yp extends ta{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Va(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function QS(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function eE(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function _f(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function $p(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class na{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tE extends na{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cd,endingEnd:cd}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ld:r=e,a=2*t-n;break;case ud:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ld:o=e,c=2*n-t;break;case ud:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,S=f*m-f*_;for(let L=0;L!==a;++L)r[L]=p*o[u+L]+M*o[l+L]+x*o[c+L]+S*o[h+L];return r}}class nE extends na{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class iE extends na{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Vi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Va(t,this.TimeBufferType),this.values=Va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Va(e.times,Array),values:Va(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new iE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vo:t=this.InterpolantFactoryMethodDiscrete;break;case Gr:t=this.InterpolantFactoryMethodLinear;break;case el:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vo;case this.InterpolantFactoryMethodLinear:return Gr;case this.InterpolantFactoryMethodSmooth:return el}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&QS(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===el,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Vi.prototype.TimeBufferType=Float32Array;Vi.prototype.ValueBufferType=Float32Array;Vi.prototype.DefaultInterpolation=Gr;class eo extends Vi{}eo.prototype.ValueTypeName="bool";eo.prototype.ValueBufferType=Array;eo.prototype.DefaultInterpolation=Vo;eo.prototype.InterpolantFactoryMethodLinear=void 0;eo.prototype.InterpolantFactoryMethodSmooth=void 0;class Kp extends Vi{}Kp.prototype.ValueTypeName="color";class jr extends Vi{}jr.prototype.ValueTypeName="number";class sE extends na{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)es.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ys extends Vi{InterpolantFactoryMethodLinear(e){return new sE(this.times,this.values,this.getValueSize(),e)}}Ys.prototype.ValueTypeName="quaternion";Ys.prototype.DefaultInterpolation=Gr;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class to extends Vi{}to.prototype.ValueTypeName="string";to.prototype.ValueBufferType=Array;to.prototype.DefaultInterpolation=Vo;to.prototype.InterpolantFactoryMethodLinear=void 0;to.prototype.InterpolantFactoryMethodSmooth=void 0;class Yr extends Vi{}Yr.prototype.ValueTypeName="vector";class rE{constructor(e="",t=-1,n=[],s=ov){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=gi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(aE(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Vi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=eE(c);c=_f(c,1,u),l=_f(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new jr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];$p(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}s.push(new jr(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(Yr,f+".position",d,"pos",s),n(Ys,f+".quaternion",d,"rot",s),n(Yr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function oE(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return jr;case"vector":case"vector2":case"vector3":case"vector4":return Yr;case"color":return Kp;case"quaternion":return Ys;case"bool":case"boolean":return eo;case"string":return to}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function aE(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=oE(i.type);if(i.times===void 0){const t=[],n=[];$p(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const gs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class cE{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const lE=new cE;class Js{constructor(e){this.manager=e!==void 0?e:lE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Js.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi={};class uE extends Error{constructor(e,t){super(e),this.response=t}}class Yu extends Js{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=gs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(qi[e]!==void 0){qi[e].push({onLoad:t,onProgress:n,onError:s});return}qi[e]=[],qi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=qi[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:x,value:S})=>{if(x)p.close();else{_+=S.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let N=0,b=u.length;N<b;N++){const B=u[N];B.onProgress&&B.onProgress(L)}p.enqueue(S),M()}})}}});return new Response(m)}else throw new uE(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{gs.add(e,l);const u=qi[e];delete qi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=qi[e];if(u===void 0)throw this.manager.itemError(e),l;delete qi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class hE extends Js{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=gs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Bo("img");function c(){u(),gs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class $u extends Js{constructor(e){super(e)}load(e,t,n,s){const r=new qt,o=new hE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ia extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class dE extends ia{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Rl=new Ve,xf=new C,vf=new C;class Ku{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hu,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xf.setFromMatrixPosition(e.matrixWorld),t.position.copy(xf),vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vf),t.updateMatrixWorld(),Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fE extends Ku{constructor(){super(new An(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Xr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Zu extends ia{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new fE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yf=new Ve,So=new C,Cl=new C;class pE extends Ku{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),So.setFromMatrixPosition(e.matrixWorld),n.position.copy(So),Cl.copy(n.position),Cl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Cl),n.updateMatrixWorld(),s.makeTranslation(-So.x,-So.y,-So.z),yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yf)}}class Zp extends ia{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new pE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mE extends Ku{constructor(){super(new Qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ko extends ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new mE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jp extends ia{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Io{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class gE extends Js{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=gs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return gs.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),gs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});gs.add(e,c),r.manager.itemStart(e)}}let Ba;class Qp{static getContext(){return Ba===void 0&&(Ba=new(window.AudioContext||window.webkitAudioContext)),Ba}static setContext(e){Ba=e}}class _E extends Js{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new Yu(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{const l=c.slice(0);Qp.getContext().decodeAudioData(l,function(h){t(h)}).catch(a)}catch(l){a(l)}},n,s);function a(c){s?s(c):console.error(c),r.manager.itemError(e)}}}class em{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Mf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Mf(){return(typeof performance>"u"?Date:performance).now()}const Is=new C,Tf=new es,xE=new C,Ds=new C;class vE extends At{constructor(){super(),this.type="AudioListener",this.context=Qp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new em}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Is,Tf,xE),Ds.set(0,0,-1).applyQuaternion(Tf),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Is.x,s),t.positionY.linearRampToValueAtTime(Is.y,s),t.positionZ.linearRampToValueAtTime(Is.z,s),t.forwardX.linearRampToValueAtTime(Ds.x,s),t.forwardY.linearRampToValueAtTime(Ds.y,s),t.forwardZ.linearRampToValueAtTime(Ds.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(Is.x,Is.y,Is.z),t.setOrientation(Ds.x,Ds.y,Ds.z,n.x,n.y,n.z)}}class tm extends At{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Ju="\\[\\]\\.:\\/",yE=new RegExp("["+Ju+"]","g"),Qu="[^"+Ju+"]",ME="[^"+Ju.replace("\\.","")+"]",TE=/((?:WC+[\/:])*)/.source.replace("WC",Qu),SE=/(WCOD+)?/.source.replace("WCOD",ME),EE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qu),AE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qu),bE=new RegExp("^"+TE+SE+EE+AE+"$"),NE=["material","materials","bones","map"];class wE{constructor(e,t,n){const s=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class mt{constructor(e,t,n){this.path=t,this.parsedPath=n||mt.parseTrackName(t),this.node=mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new mt.Composite(e,t,n):new mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yE,"")}static parseTrackName(e){const t=bE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);NE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}mt.Composite=wE;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class RE extends Xu{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Sf=new Ve;class CE{constructor(e,t,n=0,s=1/0){this.ray=new Ko(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sf),this}intersectObject(e,t=!0,n=[]){return lu(e,this,n,t),n.sort(Ef),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)lu(e[s],this,n,t);return n.sort(Ef),n}}function Ef(i,e){return i.distance-e.distance}function lu(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)lu(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Iu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Iu);var Cr=Object.freeze({Linear:Object.freeze({None:function(i){return i},In:function(i){return i},Out:function(i){return i},InOut:function(i){return i}}),Quadratic:Object.freeze({In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}}),Cubic:Object.freeze({In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}}),Quartic:Object.freeze({In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}}),Quintic:Object.freeze({In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}}),Sinusoidal:Object.freeze({In:function(i){return 1-Math.sin((1-i)*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.sin(Math.PI*(.5-i)))}}),Exponential:Object.freeze({In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}}),Circular:Object.freeze({In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}}),Elastic:Object.freeze({In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(i){var e=1.70158;return i===1?1:i*i*((e+1)*i-e)},Out:function(i){var e=1.70158;return i===0?0:--i*i*((e+1)*i+e)+1},InOut:function(i){var e=2.5949095;return(i*=2)<1?.5*(i*i*((e+1)*i-e)):.5*((i-=2)*i*((e+1)*i+e)+2)}}),Bounce:Object.freeze({In:function(i){return 1-Cr.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?Cr.Bounce.In(i*2)*.5:Cr.Bounce.Out(i*2-1)*.5+.5}}),generatePow:function(i){return i===void 0&&(i=4),i=i<Number.EPSILON?Number.EPSILON:i,i=i>1e4?1e4:i,{In:function(e){return Math.pow(e,i)},Out:function(e){return 1-Math.pow(1-e,i)},InOut:function(e){return e<.5?Math.pow(e*2,i)/2:(1-Math.pow(2-e*2,i))/2+.5}}}}),Mr=function(){return performance.now()},nm=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},i.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},i.prototype.update=function(e,t){e===void 0&&(e=Mr()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<n.length;s++){var r=this._tweens[n[s]],o=!t;r&&r.update(e,o)===!1&&!t&&delete this._tweens[n[s]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),Ws={Linear:function(i,e){var t=i.length-1,n=t*e,s=Math.floor(n),r=Ws.Utils.Linear;return e<0?r(i[0],i[1],n):e>1?r(i[t],i[t-1],t-n):r(i[s],i[s+1>t?t:s+1],n-s)},Bezier:function(i,e){for(var t=0,n=i.length-1,s=Math.pow,r=Ws.Utils.Bernstein,o=0;o<=n;o++)t+=s(1-e,n-o)*s(e,o)*i[o]*r(n,o);return t},CatmullRom:function(i,e){var t=i.length-1,n=t*e,s=Math.floor(n),r=Ws.Utils.CatmullRom;return i[0]===i[t]?(e<0&&(s=Math.floor(n=t*(1+e))),r(i[(s-1+t)%t],i[s],i[(s+1)%t],i[(s+2)%t],n-s)):e<0?i[0]-(r(i[0],i[0],i[1],i[1],-n)-i[0]):e>1?i[t]-(r(i[t],i[t],i[t-1],i[t-1],n-t)-i[t]):r(i[s?s-1:0],i[s],i[t<s+1?t:s+1],i[t<s+2?t:s+2],n-s)},Utils:{Linear:function(i,e,t){return(e-i)*t+i},Bernstein:function(i,e){var t=Ws.Utils.Factorial;return t(i)/t(e)/t(i-e)},Factorial:function(){var i=[1];return function(e){var t=1;if(i[e])return i[e];for(var n=e;n>1;n--)t*=n;return i[e]=t,t}}(),CatmullRom:function(i,e,t,n,s){var r=(t-i)*.5,o=(n-e)*.5,a=s*s,c=s*a;return(2*e-2*t+r+o)*c+(-3*e+3*t-2*r-o)*a+r*s+e}}},eh=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),uu=new nm,LE=function(){function i(e,t){t===void 0&&(t=uu),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Cr.Linear.None,this._interpolationFunction=Ws.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=eh.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.getDuration=function(){return this._duration},i.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},i.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},i.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},i.prototype.start=function(e,t){if(e===void 0&&(e=Mr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var r in this._valuesEnd)s[r]=this._valuesEnd[r];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},i.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},i.prototype._setupProperties=function(e,t,n,s,r){for(var o in n){var a=e[o],c=Array.isArray(a),l=c?"array":typeof a,u=!c&&Array.isArray(n[o]);if(!(l==="undefined"||l==="function")){if(u){var h=n[o];if(h.length===0)continue;for(var d=[a],f=0,g=h.length;f<g;f+=1){var _=this._handleRelativeValue(a,h[f]);if(isNaN(_)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}d.push(_)}u&&(n[o]=d)}if((l==="object"||c)&&a&&!u){t[o]=c?[]:{};var m=a;for(var p in m)t[o][p]=m[p];s[o]=c?[]:{};var h=n[o];if(!this._isDynamic){var M={};for(var p in h)M[p]=h[p];n[o]=h=M}this._setupProperties(m,t[o],h,s[o],r)}else(typeof t[o]>"u"||r)&&(t[o]=a),c||(t[o]*=1),u?s[o]=n[o].slice().reverse():s[o]=t[o]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(e){return e===void 0&&(e=Mr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},i.prototype.resume=function(e){return e===void 0&&(e=Mr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},i.prototype.group=function(e){return e===void 0&&(e=uu),this._group=e,this},i.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},i.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},i.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},i.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},i.prototype.easing=function(e){return e===void 0&&(e=Cr.Linear.None),this._easingFunction=e,this},i.prototype.interpolation=function(e){return e===void 0&&(e=Ws.Linear),this._interpolationFunction=e,this},i.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},i.prototype.onStart=function(e){return this._onStartCallback=e,this},i.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},i.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},i.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},i.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},i.prototype.onStop=function(e){return this._onStopCallback=e,this},i.prototype.update=function(e,t){var n;if(e===void 0&&(e=Mr()),t===void 0&&(t=!0),this._isPaused)return!0;var s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var r=e-this._startTime,o=this._duration+((n=this._repeatDelayTime)!==null&&n!==void 0?n:this._delayTime),a=this._duration+this._repeat*o,c=this._calculateElapsedPortion(r,o,a),l=this._easingFunction(c),u=this._calculateCompletionStatus(r,o);if(u==="repeat"&&this._processRepetition(r,o),this._updateProperties(this._object,this._valuesStart,this._valuesEnd,l),u==="about-to-repeat"&&this._processRepetition(r,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,c),u==="repeat"||u==="about-to-repeat")this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1;else if(u==="completed"){this._isPlaying=!1,this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var h=0,d=this._chainedTweens.length;h<d;h++)this._chainedTweens[h].start(this._startTime+this._duration,!1)}return u!=="completed"},i.prototype._calculateElapsedPortion=function(e,t,n){if(this._duration===0||e>n)return 1;var s=e%t,r=Math.min(s/this._duration,1);return r===0&&e!==0&&e%this._duration===0?1:r},i.prototype._calculateCompletionStatus=function(e,t){return this._duration!==0&&e<this._duration?"playing":this._repeat<=0?"completed":e===this._duration?"about-to-repeat":"repeat"},i.prototype._processRepetition=function(e,t){var n=Math.min(Math.trunc((e-this._duration)/t)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=n);for(var s in this._valuesStartRepeat){var r=this._valuesEnd[s];!this._yoyo&&typeof r=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(r)),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s]}this._yoyo&&(this._reversed=!this._reversed),this._startTime+=t*n},i.prototype._updateProperties=function(e,t,n,s){for(var r in n)if(t[r]!==void 0){var o=t[r]||0,a=n[r],c=Array.isArray(e[r]),l=Array.isArray(a),u=!c&&l;u?e[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(e[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*s))}},i.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},i.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},i}(),PE="23.1.2",IE=eh.nextId,Di=uu,DE=Di.getAll.bind(Di),UE=Di.removeAll.bind(Di),OE=Di.add.bind(Di),FE=Di.remove.bind(Di),VE=Di.update.bind(Di),Ut={Easing:Cr,Group:nm,Interpolation:Ws,now:Mr,Sequence:eh,nextId:IE,Tween:LE,VERSION:PE,getAll:DE,removeAll:UE,add:OE,remove:FE,update:VE};function BE(i,e){return{x:i,y:e}}class im{constructor(){this.gradients={}}randomGradient(e,t){let r=e,o=t;r*=3284157443,o^=r<<128|r>>>128,o*=1911520717,r^=o<<128|o>>>128,r*=2048419325;const a=r*(Math.PI/-1);return BE(Math.sin(a),Math.cos(a))}getGradient(e,t){const n=`${e},${t}`;return this.gradients[n]||(this.gradients[n]=this.randomGradient(e,t)),this.gradients[n]}dotGridGradient(e,t,n,s){let r=this.getGradient(e,t),o=n-e,a=s-t;return o*r.x+a*r.y}interpolate(e,t,n){return(t-e)*(3-n*2)*n*n+e}perlin(e,t){let n=Math.floor(e),s=Math.floor(t),r=n+1,o=s+1,a=e-n,c=t-s,l=this.dotGridGradient(n,s,e,t),u=this.dotGridGradient(r,s,e,t),h=this.interpolate(l,u,a);l=this.dotGridGradient(n,o,e,t),u=this.dotGridGradient(r,o,e,t);let d=this.interpolate(l,u,a);return this.interpolate(h,d,c)}}function zE(i,e,t){var n=new Jo(i,e,t,t),s=new mi({color:3552822,side:ui,opacity:.05}),r=new an(n,s);return{geom:n,mat:s,mesh:r}}function kE(i,e,t,n){var s=new im,r=i.geom.attributes.position.array;const o=.05,a=e*.4*o,c=e/2*o;for(let h=0;h<r.length;h+=3){const d=(r[h]+e/2)*o,f=(r[h+1]+t/2)*o;let g=s.perlin(d,f);g=sm(g,-1,1);const _=Math.abs(d-c),m=Math.min(1,_/a);r[h+2]=g*m*20+(1-m)*n}i.mesh.geometry.verticesNeedUpdate=!0,i.mesh.geometry.attributes.position.needsUpdate=!0,i.mesh.geometry.computeVertexNormals();let l=new jS(i.mesh.geometry),u=new Xp(l);return u.material.color.setHex(43520),u}function HE(i,e,t,n,s,r,o){var a=new im,c=i.geom.attributes.position.array;const l=.05,u=e*.4*l,h=e/2*l;for(let d=0;d<c.length;d+=3){const f=(c[d]+e/2+s)*l,g=(c[d+1]+t/2+r)*l;let _=a.perlin(f,g);_=sm(_,-1,1);const m=Math.abs(f-h),p=Math.min(1,m/u);c[d+2]=_*p*20+(1-p)*n}i.mesh.geometry.verticesNeedUpdate=!0,i.mesh.geometry.attributes.position.needsUpdate=!0,i.mesh.geometry.computeVertexNormals(),o.geometry=i.geom}function sm(i,e,t){return i<e?e:i>t?t:i}function Af(i,e){if(e===av)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ru||e===Ep){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===ru)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class rm extends Js{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jE(t)}),this.register(function(t){return new YE(t)}),this.register(function(t){return new iA(t)}),this.register(function(t){return new sA(t)}),this.register(function(t){return new rA(t)}),this.register(function(t){return new KE(t)}),this.register(function(t){return new ZE(t)}),this.register(function(t){return new JE(t)}),this.register(function(t){return new QE(t)}),this.register(function(t){return new qE(t)}),this.register(function(t){return new eA(t)}),this.register(function(t){return new $E(t)}),this.register(function(t){return new nA(t)}),this.register(function(t){return new tA(t)}),this.register(function(t){return new WE(t)}),this.register(function(t){return new oA(t)}),this.register(function(t){return new aA(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Io.extractUrlBase(e);o=Io.resolveURL(l,this.path)}else o=Io.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Yu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===om){try{o[Ze.KHR_BINARY_GLTF]=new cA(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new MA(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ze.KHR_MATERIALS_UNLIT:o[h]=new XE;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[h]=new lA(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[h]=new uA;break;case Ze.KHR_MESH_QUANTIZATION:o[h]=new hA;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function GE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class WE{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new be(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],jt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ko(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Zp(u),l.distance=h;break;case"spot":l=new Zu(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ds(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class XE{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return mi}extendParams(e,t,n){const s=[];e.color=new be(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,sn))}return Promise.all(s)}}class qE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class jE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(a,a)}return Promise.all(r)}}class YE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class $E{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class KE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,sn)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ZE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class JE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(a[0],a[1],a[2],jt),Promise.all(r)}}class QE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class eA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(a[0],a[1],a[2],jt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,sn)),Promise.all(r)}}class tA{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class nA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class iA{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class sA{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rA{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class oA{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class aA{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Zn.TRIANGLES&&l.mode!==Zn.TRIANGLE_STRIP&&l.mode!==Zn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new Ve,m=new C,p=new es,M=new C(1,1,1),x=new WS(g.geometry,g.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&M.fromBufferAttribute(c.SCALE,S),x.setMatrixAt(S,_.compose(m,p,M));for(const S in c)if(S==="_COLOR_0"){const L=c[S];x.instanceColor=new tc(L.array,L.itemSize,L.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,c[S]);At.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const om="glTF",Eo=12,bf={JSON:1313821514,BIN:5130562};class cA{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Eo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==om)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Eo,r=new DataView(e,Eo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===bf.JSON){const l=new Uint8Array(e,Eo+o,a);this.content=n.decode(l)}else if(c===bf.BIN){const l=Eo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=hu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=hu[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Lr[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},a,l,jt,d)})})}}class uA{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hA{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class am extends na{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,M=1-m,x=p-d+h;for(let S=0;S!==a;S++){const L=o[_+S+a],N=o[_+S+c]*u,b=o[g+S+a],B=o[g+S]*u;r[S]=M*L+x*N+m*b+p*B}return r}}const dA=new es;class fA extends am{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return dA.fromArray(r).normalize().toArray(r),r}}const Zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Lr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nf={9728:Jt,9729:Hn,9984:mp,9985:Ga,9986:wo,9987:Pi},wf={33071:ms,33648:Ka,10497:kr},Ll={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},pA={CUBICSPLINE:void 0,LINEAR:Gr,STEP:Vo},Pl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mA(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Nc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ji})),i.DefaultMaterial}function Us(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ds(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gA(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function _A(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xA(i){let e;const t=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Il(t.attributes):e=i.indices+":"+Il(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Il(i.targets[n]);return e}function Il(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function du(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vA(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const yA=new Ve;class MA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new GE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new $u(this.options.manager):this.textureLoader=new gE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Us(r,a,s),ds(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Io.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ll[s.type],a=Lr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Nn(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ll[s.type],l=Lr[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let x=t.cache.get(M);x||(_=new l(a,p*f,s.count*f/u),x=new Xu(_,f/u),t.cache.add(M,x)),m=new Ec(x,c,d%f/u,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new Nn(_,c,g);if(s.sparse!==void 0){const p=Ll.SCALAR,M=Lr[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,L=new M(o[1],x,s.sparse.count*p),N=new l(o[2],S,s.sparse.count*c);a!==null&&(m=new Nn(m.array.slice(),m.itemSize,m.normalized));for(let b=0,B=L.length;b<B;b++){const E=L[b];if(m.setX(E,N[b*c]),c>=2&&m.setY(E,N[b*c+1]),c>=3&&m.setZ(E,N[b*c+2]),c>=4&&m.setW(E,N[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Nf[d.magFilter]||Hn,u.minFilter=Nf[d.minFilter]||Pi,u.wrapS=wf[d.wrapS]||kr,u.wrapT=wf[d.wrapT]||kr,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new qt(_);m.needsUpdate=!0,d(m)}),t.load(Io.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||vA(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new bc,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ta,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Nc}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const h=s[Ze.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new be(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],jt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,sn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ui);const u=r.alphaMode||Pl.OPAQUE;if(u===Pl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Pl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==mi&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==mi&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==mi){const h=r.emissiveFactor;a.emissive=new be().setRGB(h[0],h[1],h[2],jt)}return r.emissiveTexture!==void 0&&o!==mi&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,sn)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ds(h,r),t.associations.set(h,{materials:e}),r.extensions&&Us(s,h,r),h})}createUniqueName(e){const t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Rf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=xA(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Rf(new Rn,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?mA(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const M=l[f];if(m.mode===Zn.TRIANGLES||m.mode===Zn.TRIANGLE_STRIP||m.mode===Zn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new kS(_,M):new an(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Zn.TRIANGLE_STRIP?p.geometry=Af(p.geometry,Ep):m.mode===Zn.TRIANGLE_FAN&&(p.geometry=Af(p.geometry,ru));else if(m.mode===Zn.LINES)p=new Xp(_,M);else if(m.mode===Zn.LINE_STRIP)p=new Ac(_,M);else if(m.mode===Zn.LINE_LOOP)p=new XS(_,M);else if(m.mode===Zn.POINTS)p=new qS(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&_A(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ds(p,r),m.extensions&&Us(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Us(s,h[0],r),h[0];const d=new Gs;r.extensions&&Us(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new An(zu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Qo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ds(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Ve;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new qu(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let M=0,x=d.length;M<x;M++){const S=d[M],L=f[M],N=g[M],b=_[M],B=m[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const E=n._createAnimationTracks(S,L,N,b,B);if(E)for(let v=0;v<E.length;v++)p.push(E[v])}return new rE(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,yA)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Gp:l.length>1?u=new Gs:l.length===1?u=l[0]:u=new At,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ds(u,r),r.extensions&&Us(n,u,r),r.matrix!==void 0){const h=new Ve;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Gs;n.name&&(r.name=s.createUniqueName(n.name)),ds(r,n),n.extensions&&Us(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof yn||d instanceof qt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];ls[r.path]===ls.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ls[r.path]){case ls.weights:l=jr;break;case ls.rotation:l=Ys;break;case ls.position:case ls.scale:l=Yr;break;default:switch(n.itemSize){case 1:l=jr;break;case 2:case 3:default:l=Yr;break}break}const u=s.interpolation!==void 0?pA[s.interpolation]:Gr,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+ls[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=du(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ys?fA:am;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function TA(i,e,t){const n=e.attributes,s=new yi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){const u=du(Lr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new C,c=new C;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=du(Lr[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Fi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Rf(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=hu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ct.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),ds(i,e),TA(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?gA(i,e.targets,t):i})}class SA extends Zu{constructor(e,t,n,s,r,o){super(e,t,n,s,r,o),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}class no{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const EA=new Qo(-1,1,1,-1,0,1);class AA extends Rn{constructor(){super(),this.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ln([0,2,0,0,2,0],2))}}const bA=new AA;class th{constructor(e){this._mesh=new an(bA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,EA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const cm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class lm extends no{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zo.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new th(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Cf extends no{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class NA extends no{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class um{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Me);this._width=n.width,this._height=n.height,t=new _i(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ki}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lm(cm),this.copyPass.material.blending=$i,this.clock=new em}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Cf!==void 0&&(o instanceof Cf?n=!0:o instanceof NA&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const wA={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class RA extends no{constructor(){super();const e=wA;this.uniforms=zo.clone(e.uniforms),this.material=new $S({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new th(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Du?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Uu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ou?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fp&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class CA extends no{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new be}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const LA={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class $r extends no{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new be(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new _i(r,o,{type:Ki}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new _i(r,o,{type:Ki});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new _i(r,o,{type:Ki});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=LA;this.highPassUniforms=zo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Me(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=cm;this.copyUniforms=zo.clone(u.uniforms),this.blendMaterial=new Xt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:eu,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new be,this.oldClearAlpha=1,this.basic=new mi,this.fsQuad=new th(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Me(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=$r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=$r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}$r.BlurDirectionX=new Me(1,0);$r.BlurDirectionY=new Me(0,1);class PA{constructor(e,t,n){this.centerPos=e,this.particles=[],this.numParticles=t,this.radius=n}initParticles(e){const t=new yi().setFromObject(e);for(let n=0;n<this.numParticles;n++){const s=new ta({color:16777215}),r=[];if(Math.random()<=.5){const l=new C(t.min.x+.85,(t.max.y-t.min.y)/2+us(-.5,.5),t.max.z-us(0,.5)),u=new C(l.x,l.y,l.z+us(.5,1));r.push(l),r.push(u)}else{const l=new C(t.max.x-.85,(t.max.y-t.min.y)/2+us(-.05,.05),t.max.z-us(0,.5)),u=new C(l.x,l.y,l.z+us(.5,1));r.push(l),r.push(u)}const a=new Rn().setFromPoints(r),c=new Ac(a,s);this.particles.push(c)}}toggleParticles(e){this.particles.forEach(t=>{t.visible=e})}moveParticles(e,t,n){const s=new yi().setFromObject(e);this.particles.forEach(r=>{r.position.z+=t,r.position.z>n&&(Math.random()<=.5?r.position.set(s.min.x,(s.max.y-s.min.y)/2+us(-.075,.075),s.max.z-.5):r.position.set(s.max.x,(s.max.y-s.min.y)/2+us(-.05,.05),s.max.z-.5))})}}function us(i,e){return Math.random()*(e-i)+i}const Lf={VERTEX:"vertex",FRAGMENT:"fragment"},xt={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},wc=["x","y","z","w"];function hm(i,e=!1){let t="{";i.isNode===!0&&(t+=i.id);for(const{property:n,childNode:s}of sc(i))t+=","+n.slice(0,-4)+":"+s.getCacheKey(e);return t+="}",t}function*sc(i,e=!1){for(const t in i){if(t.startsWith("_")===!0)continue;const n=i[t];if(Array.isArray(n)===!0)for(let s=0;s<n.length;s++){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const s in n){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}}}function _s(i){if(i==null)return null;const e=typeof i;return i.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":i.isVector2===!0?"vec2":i.isVector3===!0?"vec3":i.isVector4===!0?"vec4":i.isMatrix3===!0?"mat3":i.isMatrix4===!0?"mat4":i.isColor===!0?"color":i instanceof ArrayBuffer?"ArrayBuffer":null}function dm(i,...e){const t=i?i.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),i==="color"?new be(...e):t==="vec2"?new Me(...e):t==="vec3"?new C(...e):t==="vec4"?new nt(...e):t==="mat3"?new He(...e):t==="mat4"?new Ve(...e):i==="bool"?e[0]||!1:i==="float"||i==="int"||i==="uint"?e[0]||0:i==="string"?e[0]||"":i==="ArrayBuffer"?pm(e[0]):null}function fm(i){let e="";const t=new Uint8Array(i);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function pm(i){return Uint8Array.from(atob(i),e=>e.charCodeAt(0)).buffer}const Pf=new Map;let IA=0;class Re extends As{constructor(e=null){super(),this.nodeType=e,this.updateType=xt.NONE,this.updateBeforeType=xt.NONE,this.uuid=zu.generateUUID(),this.version=0,this._cacheKey=null,this._cacheKeyVersion=0,this.isNode=!0,Object.defineProperty(this,"id",{value:IA++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this.getSelf()),this}onFrameUpdate(e){return this.onUpdate(e,xt.FRAME)}onRenderUpdate(e){return this.onUpdate(e,xt.RENDER)}onObjectUpdate(e){return this.onUpdate(e,xt.OBJECT)}onReference(e){return this.updateReference=e.bind(this.getSelf()),this}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return!1}*getChildren(){for(const{childNode:e}of sc(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(e=!1){return e=e||this.version!==this._cacheKeyVersion,(e===!0||this._cacheKey===null)&&(this._cacheKey=hm(this,e),this._cacheKeyVersion=this.version),this._cacheKey}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);for(const n of this.getChildren())t["_node"+n.id]=n;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}increaseUsage(e){const t=e.getDataFromNode(this);return t.usageCount=t.usageCount===void 0?1:t.usageCount+1,t.usageCount}analyze(e){if(this.increaseUsage(e)===1){const n=e.getNodeProperties(this);for(const s of Object.values(n))s&&s.isNode===!0&&s.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let s=null;const r=e.getBuildStage();if(r==="setup"){this.updateReference(e);const o=e.getNodeProperties(this);if(o.initialized!==!0||e.context.tempRead===!1){const a=e.stack.nodes.length;o.initialized=!0,o.outputNode=this.setup(e),o.outputNode!==null&&e.stack.nodes.length!==a&&(o.outputNode=e.stack);for(const c of Object.values(o))c&&c.isNode===!0&&c.build(e)}}else if(r==="analyze")this.analyze(e);else if(r==="generate")if(this.generate.length===1){const a=this.getNodeType(e),c=e.getDataFromNode(this);s=c.snippet,s===void 0&&(s=this.generate(e)||"",c.snippet=s),s=e.format(s,a,t)}else s=this.generate(e,t)||"";return e.removeChain(this),s}getSerializeChildren(){return sc(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:s,index:r,childNode:o}of t)r!==void 0?(n[s]===void 0&&(n[s]=Number.isInteger(r)?[]:{}),n[s][r]=o.toJSON(e.meta).uuid):n[s]=o.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const s=[];for(const r of e.inputNodes[n])s.push(t[r]);this[n]=s}else if(typeof e.inputNodes[n]=="object"){const s={};for(const r in e.inputNodes[n]){const o=e.inputNodes[n][r];s[r]=t[o]}this[n]=s}else{const s=e.inputNodes[n];this[n]=t[s]}}}toJSON(e){const{uuid:t,type:n}=this,s=e===void 0||typeof e=="string";s&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},s!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(s){const a=o(e.textures),c=o(e.images),l=o(e.nodes);a.length>0&&(r.textures=a),c.length>0&&(r.images=c),l.length>0&&(r.nodes=l)}return r}}function K(i,e){if(typeof e!="function"||!i)throw new Error(`Node class ${i} is not a class`);if(Pf.has(i)){console.warn(`Redefinition of node class ${i}`);return}Pf.set(i,e),e.type=i}class yt extends Re{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const s=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(e.context.tempRead!==!1&&r.propertyName!==void 0)return e.format(r.propertyName,s,t);if(e.context.tempWrite!==!1&&s!=="void"&&t!=="void"&&this.hasDependencies(e)){const o=super.build(e,s),a=e.getVarFromNode(this,null,s),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${o}`),r.snippet=o,r.propertyName=c,e.format(r.propertyName,s,t)}}return super.build(e,t)}}K("TempNode",yt);class io extends Re{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}K("ArrayElementNode",io);class nh extends Re{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const s of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(s))&&(n=s);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,s=this.getNodeType(e),r=n.build(e,s);return e.format(r,s,t)}}K("ConvertNode",nh);class mm extends yt{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),s=this.nodes,r=e.getComponentType(n),o=[];for(const c of s){let l=c.build(e);const u=e.getComponentType(c.getNodeType(e));u!==r&&(l=e.format(l,u,r)),o.push(l)}const a=`${e.getType(n)}( ${o.join(", ")} )`;return e.format(a,n,t)}}K("JoinNode",mm);const DA=wc.join("");class fu extends Re{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(wc.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,s=e.getTypeLength(n.getNodeType(e));let r=null;if(s>1){let o=null;this.getVectorLength()>=s&&(o=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const c=n.build(e,o);this.components.length===s&&this.components===DA.slice(0,this.components.length)?r=e.format(c,o,t):r=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}K("SplitNode",fu);class gm extends yt{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:s}=this,r=this.getNodeType(e),o=e.getTypeFromLength(n.length),a=s.build(e,o),c=t.build(e,r),l=e.getTypeLength(r),u=[];for(let h=0;h<l;h++){const d=wc[h];d===n[0]?(u.push(a),h+=n.length-1):u.push(c+"."+d)}return`${e.getType(r)}( ${u.join(", ")} )`}}K("SetNode",gm);class Rc extends Re{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?_s(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=_s(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=fm(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?dm(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}K("InputNode",Rc);class si extends Rc{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}K("ConstNode",si);let Kr=null;const Tr=new Map;function U(i,e){if(Tr.has(i)){console.warn(`Redefinition of node element ${i}`);return}if(typeof e!="function")throw new Error(`Node element ${i} is not a function`);Tr.set(i,e)}const If=i=>i.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),_m={setup(i,e){const t=e.shift();return i(Pc(t),...e)},get(i,e,t){if(typeof e=="string"&&i[e]===void 0){if(i.isStackNode!==!0&&e==="assign")return(...n)=>(Kr.assign(t,...n),t);if(Tr.has(e)){const n=Tr.get(e);return i.isStackNode?(...s)=>t.add(n(...s)):(...s)=>n(t,...s)}else{if(e==="self")return i;if(e.endsWith("Assign")&&Tr.has(e.slice(0,e.length-6))){const n=Tr.get(e.slice(0,e.length-6));return i.isStackNode?(...s)=>t.assign(s[0],n(...s)):(...s)=>t.assign(n(t,...s))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=If(e),he(new fu(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=If(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>he(new gm(i,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),he(new fu(i,e));if(/^\d+$/.test(e)===!0)return he(new io(t,new si(Number(e),"uint")))}}}return Reflect.get(i,e,t)},set(i,e,t,n){return typeof e=="string"&&i[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(i,e,t,n)}},Dl=new WeakMap,Df=new WeakMap,UA=function(i,e=null){const t=_s(i);if(t==="node"){let n=Dl.get(i);return n===void 0&&(n=new Proxy(i,_m),Dl.set(i,n),Dl.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return he(pu(i,e));if(t==="shader")return j(i)}return i},OA=function(i,e=null){for(const t in i)i[t]=he(i[t],e);return i},FA=function(i,e=null){const t=i.length;for(let n=0;n<t;n++)i[n]=he(i[n],e);return i},VA=function(i,e=null,t=null,n=null){const s=r=>he(n!==null?Object.assign(r,n):r);return e===null?(...r)=>s(new i(...Pr(r))):t!==null?(t=he(t),(...r)=>s(new i(e,...Pr(r),t))):(...r)=>s(new i(e,...Pr(r)))},BA=function(i,...e){return he(new i(...Pr(e)))};class zA extends Re{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const{outputNode:t}=e.getNodeProperties(this);return t?t.getNodeType(e):super.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let o=Df.get(e.constructor);o===void 0&&(o=new WeakMap,Df.set(e.constructor,o));let a=o.get(t);return a===void 0&&(a=he(e.buildFunctionNode(t)),o.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),he(a.call(n))}const s=t.jsFunc,r=n!==null?s(n,e.stack,e):s(e.stack,e);return he(r)}setup(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class kA extends Re{constructor(e){super(),this.jsFunc=e,this.layout=null}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return Pc(e),he(new zA(this,e))}setup(){return this.call()}}const HA=[!1,!0],GA=[0,1,2,3],WA=[-1,-2],xm=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],ih=new Map;for(const i of HA)ih.set(i,new si(i));const sh=new Map;for(const i of GA)sh.set(i,new si(i,"uint"));const rh=new Map([...sh].map(i=>new si(i.value,"int")));for(const i of WA)rh.set(i,new si(i,"int"));const Cc=new Map([...rh].map(i=>new si(i.value)));for(const i of xm)Cc.set(i,new si(i));for(const i of xm)Cc.set(-i,new si(-i));const Lc={bool:ih,uint:sh,ints:rh,float:Cc},Uf=new Map([...ih,...Cc]),pu=(i,e)=>Uf.has(i)?Uf.get(i):i.isNode===!0?i:new si(i,e),XA=i=>{try{return i.getNodeType()}catch{return}},gt=function(i,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(i)&&t.every(s=>typeof s!="object"))&&(t=[dm(i,...t)]),t.length===1&&e!==null&&e.has(t[0]))return he(e.get(t[0]));if(t.length===1){const s=pu(t[0],i);return XA(s)===i?he(s):he(new nh(s,i))}const n=t.map(s=>pu(s));return he(new mm(n,i))}},Of=i=>i&&i.value,qA=i=>i!=null?i.nodeType||i.convertTo||(typeof i=="string"?i:null):null;function Do(i){return new Proxy(new kA(i),_m)}const he=(i,e=null)=>UA(i,e),Pc=(i,e=null)=>new OA(i,e),Pr=(i,e=null)=>new FA(i,e),z=(...i)=>new VA(...i),J=(...i)=>new BA(...i),j=i=>{const e=new Do(i),t=(...n)=>{let s;return Pc(n),n[0]&&n[0].isNode?s=[...n]:s=n[0],e.call(s)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};K("ShaderNode",Do);const Ff=i=>{Kr=i},jA=()=>Kr,Ke=(...i)=>Kr.if(...i);function YA(i){return Kr&&Kr.add(i),i}U("append",YA);const $A=new gt("color"),A=new gt("float",Lc.float),R=new gt("int",Lc.ints),fe=new gt("uint",Lc.uint),$s=new gt("bool",Lc.bool),Ae=new gt("vec2"),Xs=new gt("ivec2"),KA=new gt("uvec2"),ZA=new gt("bvec2"),D=new gt("vec3"),JA=new gt("ivec3"),sa=new gt("uvec3"),vm=new gt("bvec3"),Se=new gt("vec4"),QA=new gt("ivec4"),eb=new gt("uvec4"),tb=new gt("bvec4"),oh=new gt("mat2"),nb=new gt("imat2"),ib=new gt("umat2"),sb=new gt("bmat2"),Mi=new gt("mat3"),rb=new gt("imat3"),ob=new gt("umat3"),ab=new gt("bmat3"),Ir=new gt("mat4"),cb=new gt("imat4"),lb=new gt("umat4"),ub=new gt("bmat4"),hb=(i="")=>he(new si(i,"string")),db=i=>he(new si(i,"ArrayBuffer"));U("color",$A);U("float",A);U("int",R);U("uint",fe);U("bool",$s);U("vec2",Ae);U("ivec2",Xs);U("uvec2",KA);U("bvec2",ZA);U("vec3",D);U("ivec3",JA);U("uvec3",sa);U("bvec3",vm);U("vec4",Se);U("ivec4",QA);U("uvec4",eb);U("bvec4",tb);U("mat2",oh);U("imat2",nb);U("umat2",ib);U("bmat2",sb);U("mat3",Mi);U("imat3",rb);U("umat3",ob);U("bmat3",ab);U("mat4",Ir);U("imat4",cb);U("umat4",lb);U("bmat4",ub);U("string",hb);U("arrayBuffer",db);const fb=z(io),pb=(i,e)=>he(new nh(he(i),e));U("element",fb);U("convert",pb);class ym extends yt{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return wc.join("").slice(0,n)!==t.components}return!1}generate(e,t){const{targetNode:n,sourceNode:s}=this,r=this.needsSplitAssign(e),o=n.getNodeType(e),a=n.context({assign:!0}).build(e),c=s.build(e,o),l=s.getNodeType(e),u=e.getDataFromNode(this);let h;if(u.initialized===!0)t!=="void"&&(h=a);else if(r){const d=e.getVarFromNode(this,null,o),f=e.getPropertyName(d);e.addLineFlowCode(`${f} = ${c}`);const g=n.node.context({assign:!0}).build(e);for(let _=0;_<n.components.length;_++){const m=n.components[_];e.addLineFlowCode(`${g}.${m} = ${f}[ ${_} ]`)}t!=="void"&&(h=a)}else h=`${a} = ${c}`,(t==="void"||l==="void")&&(e.addLineFlowCode(h),t!=="void"&&(h=a));return u.initialized=!0,e.format(h,o,t)}}const mb=z(ym);K("AssignNode",ym);U("assign",mb);class Mm extends Re{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{name:t,node:n}=this,s=this.getNodeType(e),r=e.getVaryingFromNode(this,t,s);r.needsInterpolation||(r.needsInterpolation=e.shaderStage==="fragment");const o=e.getPropertyName(r,Lf.VERTEX);return e.flowNodeFromShaderStage(Lf.VERTEX,n,s,o),e.getPropertyName(r)}}const Ot=z(Mm);U("varying",Ot);K("VaryingNode",Mm);class Ic extends Re{constructor(e,t=null){super(t),this._attributeName=e}isGlobal(){return!0}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const s=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(s)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const r=e.geometry.getAttribute(t),o=e.getTypeFromAttribute(r),a=e.getAttribute(t,o);return e.shaderStage==="vertex"?e.format(a.name,o,n):Ot(this).build(e,n)}else return console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`),e.generateConst(n)}}const vn=(i,e)=>he(new Ic(i,e));K("AttributeNode",Ic);class Tm extends Re{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const Sm=z(Tm);U("bypass",Sm);K("BypassNode",Tm);let gb=0;class _b{constructor(){this.id=gb++,this.nodesData=new WeakMap}getNodeData(e){return this.nodesData.get(e)}setNodeData(e,t){this.nodesData.set(e,t)}}class Em extends Re{constructor(e,t=new _b){super(),this.isCacheNode=!0,this.node=e,this.cache=t}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),s=this.cache||e.globalCache;e.setCache(s);const r=this.node.build(e,...t);return e.setCache(n),r}}const rc=z(Em),xb=i=>rc(i,null);U("cache",rc);U("globalCache",xb);K("CacheNode",Em);class ah extends Re{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const s=this.node.build(e,t);return e.setContext(n),s}}const Zi=z(ah),vb=(i,e)=>Zi(i,{label:e});U("context",Zi);U("label",vb);K("ContextNode",ah);class Ui extends Re{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let s;if(n===Ui.VERTEX)s=e.getVertexIndex();else if(n===Ui.INSTANCE)s=e.getInstanceIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return e.shaderStage==="vertex"||e.shaderStage==="compute"?r=s:r=Ot(this).build(e,t),r}}Ui.VERTEX="vertex";Ui.INSTANCE="instance";const yb=J(Ui,Ui.VERTEX),Am=J(Ui,Ui.INSTANCE);K("IndexNode",Ui);class ch{start(){}finish(){}direct(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class bm extends Re{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVarNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,s=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),r=e.getPropertyName(s),o=t.build(e,s.type);return e.addLineFlowCode(`${r} = ${o}`),r}}const Ho=z(bm);U("temp",Ho);U("toVar",(...i)=>Ho(...i).append());K("VarNode",bm);class dt extends Re{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const on=(i,e)=>he(new dt(i,e)),Ni=(i,e)=>he(new dt(i,e,!0)),Lt=J(dt,"vec4","DiffuseColor"),xs=J(dt,"float","Roughness"),oc=J(dt,"float","Metalness"),mu=J(dt,"float","Clearcoat"),ac=J(dt,"float","ClearcoatRoughness"),Sr=J(dt,"vec3","Sheen"),lh=J(dt,"float","SheenRoughness"),uh=J(dt,"float","Iridescence"),Nm=J(dt,"float","IridescenceIOR"),wm=J(dt,"float","IridescenceThickness"),gu=J(dt,"float","AlphaT"),Bs=J(dt,"float","Anisotropy"),Xa=J(dt,"vec3","AnisotropyT"),Dr=J(dt,"vec3","AnisotropyB"),li=J(dt,"color","SpecularColor"),cc=J(dt,"float","SpecularF90"),_u=J(dt,"float","Shininess"),Mb=J(dt,"vec4","Output"),Ur=J(dt,"float","dashSize"),lc=J(dt,"float","gapSize");J(dt,"float","pointWidth");const qa=J(dt,"float","IOR"),xu=J(dt,"float","Transmission"),Rm=J(dt,"float","Thickness"),Cm=J(dt,"float","AttenuationDistance"),Lm=J(dt,"color","AttenuationColor");K("PropertyNode",dt);class Tb extends dt{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}K("ParameterNode",Tb);class hh extends Re{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const s of t)s.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}z(hh);K("CodeNode",hh);class Sb extends hh{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),s=n.name,r=n.type,o=e.getCodeFromNode(this,r);s!==""&&(o.name=s);const a=e.getPropertyName(o);let c=this.getNodeFunction(e).getCode(a);const l=this.keywords,u=Object.keys(l);if(u.length>0)for(const h of u){const d=new RegExp(`\\b${h}\\b`,"g"),f=l[h].build(e,"property");c=c.replace(d,f)}return o.code=c+`
`,t==="property"?a:e.format(`${a}()`,r,t)}}K("FunctionNode",Sb);class dh extends Re{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const Eb=i=>new dh(i),Pm=i=>new dh(i,!0);Pm("frame");Pm("render");const Ab=Eb("object");K("UniformGroupNode",dh);class Qs extends Rc{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.groupNode=Ab}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){const n=this.getSelf();return e=e.bind(n),super.onUpdate(s=>{const r=e(s,n);r!==void 0&&(this.value=r)},t)}generate(e,t){const n=this.getNodeType(e),s=this.getUniformHash(e);let r=e.getNodeFromHash(s);r===void 0&&(e.setHashNode(this,s),r=this);const o=r.getInputType(e),a=e.getUniformFromNode(r,o,e.shaderStage,e.context.label),c=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}}const vt=(i,e)=>{const t=qA(e||i),n=i&&i.isNode===!0?i.node&&i.node.value||i.value:i;return he(new Qs(n,t))};K("UniformNode",Qs);class Im extends Ic{constructor(e=0){super(null,"vec2"),this.isUVNode=!0,this.index=e}getAttributeName(){const e=this.index;return"uv"+(e>0?e:"")}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}const Bi=(...i)=>he(new Im(...i));K("UVNode",Im);class Dm extends Re{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),s=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${s} )`,this.getNodeType(e),t)}}const fh=z(Dm);U("textureSize",fh);K("TextureSizeNode",Dm);class Ct extends yt{constructor(e,t,n,...s){if(super(),this.op=e,s.length>0){let r=n;for(let o=0;o<s.length;o++)r=new Ct(e,r,s[o]);n=r}this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,s=this.aNode,r=this.bNode,o=s.getNodeType(e),a=typeof r<"u"?r.getNodeType(e):null;if(o==="void"||a==="void")return"void";if(n==="%")return o;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(o);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(o),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return o==="float"&&e.isMatrix(a)?a:e.isMatrix(o)&&e.isVector(a)?e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(o)?a:o}generate(e,t){const n=this.op,s=this.aNode,r=this.bNode,o=this.getNodeType(e,t);let a=null,c=null;o!=="void"?(a=s.getNodeType(e),c=typeof r<"u"?r.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?c=a:a=c="float":n===">>"||n==="<<"?(a=o,c=e.changeComponentType(c,"uint")):e.isMatrix(a)&&e.isVector(c)?c=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(c)?a=e.getVectorFromMatrix(c):a=c=o):a=c=o;const l=s.build(e,a),u=typeof r<"u"?r.build(e,c):null,h=e.getTypeLength(t),d=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&h>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,o,t):n==="<="&&h>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,o,t):n===">"&&h>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,o,t):n===">="&&h>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,o,t):n==="!"||n==="~"?e.format(`(${n}${l})`,a,t):d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`( ${l} ${n} ${u} )`,o,t);if(a!=="void")return d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`${l} ${n} ${u}`,o,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const qn=z(Ct,"+"),zt=z(Ct,"-"),it=z(Ct,"*"),Ts=z(Ct,"/"),bb=z(Ct,"%"),Nb=z(Ct,"=="),wb=z(Ct,"!="),Rb=z(Ct,"<"),Um=z(Ct,">"),Cb=z(Ct,"<="),Lb=z(Ct,">="),Pb=z(Ct,"&&"),Ib=z(Ct,"||"),Db=z(Ct,"!"),Ub=z(Ct,"^^"),Ob=z(Ct,"&"),Fb=z(Ct,"~"),Vb=z(Ct,"|"),Bb=z(Ct,"^"),zb=z(Ct,"<<"),kb=z(Ct,">>");U("add",qn);U("sub",zt);U("mul",it);U("div",Ts);U("remainder",bb);U("equal",Nb);U("notEqual",wb);U("lessThan",Rb);U("greaterThan",Um);U("lessThanEqual",Cb);U("greaterThanEqual",Lb);U("and",Pb);U("or",Ib);U("not",Db);U("xor",Ub);U("bitAnd",Ob);U("bitNot",Fb);U("bitOr",Vb);U("bitXor",Bb);U("shiftLeft",zb);U("shiftRight",kb);K("OperatorNode",Ct);class P extends yt{constructor(e,t,n=null,s=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=s}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,s=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),o=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(s)?0:e.getTypeLength(s);return r>o&&r>a?t:o>a?n:a>r?s:t}getNodeType(e){const t=this.method;return t===P.LENGTH||t===P.DISTANCE||t===P.DOT?"float":t===P.CROSS?"vec3":t===P.ALL?"bool":t===P.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===P.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){const n=this.method,s=this.getNodeType(e),r=this.getInputType(e),o=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===P.TRANSFORM_DIRECTION){let u=o,h=a;e.isMatrix(u.getNodeType(e))?h=Se(D(h),0):u=Se(D(u),0);const d=it(u,h).xyz;return wn(d).build(e,t)}else{if(n===P.NEGATE)return e.format("( - "+o.build(e,r)+" )",s,t);if(n===P.ONE_MINUS)return zt(1,o).build(e,t);if(n===P.RECIPROCAL)return Ts(1,o).build(e,t);if(n===P.DIFFERENCE)return Gt(zt(o,a)).build(e,t);{const u=[];return n===P.CROSS||n===P.MOD?u.push(o.build(e,s),a.build(e,s)):n===P.STEP?u.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":r),a.build(e,r)):l&&(n===P.MIN||n===P.MAX)||n===P.MOD?u.push(o.build(e,r),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":r)):n===P.REFRACT?u.push(o.build(e,r),a.build(e,r),c.build(e,"float")):n===P.MIX?u.push(o.build(e,r),a.build(e,r),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":r)):(u.push(o.build(e,r)),a!==null&&u.push(a.build(e,r)),c!==null&&u.push(c.build(e,r))),e.format(`${e.getMethod(n,s)}( ${u.join(", ")} )`,s,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}P.ALL="all";P.ANY="any";P.EQUALS="equals";P.RADIANS="radians";P.DEGREES="degrees";P.EXP="exp";P.EXP2="exp2";P.LOG="log";P.LOG2="log2";P.SQRT="sqrt";P.INVERSE_SQRT="inversesqrt";P.FLOOR="floor";P.CEIL="ceil";P.NORMALIZE="normalize";P.FRACT="fract";P.SIN="sin";P.COS="cos";P.TAN="tan";P.ASIN="asin";P.ACOS="acos";P.ATAN="atan";P.ABS="abs";P.SIGN="sign";P.LENGTH="length";P.NEGATE="negate";P.ONE_MINUS="oneMinus";P.DFDX="dFdx";P.DFDY="dFdy";P.ROUND="round";P.RECIPROCAL="reciprocal";P.TRUNC="trunc";P.FWIDTH="fwidth";P.BITCAST="bitcast";P.ATAN2="atan2";P.MIN="min";P.MAX="max";P.MOD="mod";P.STEP="step";P.REFLECT="reflect";P.DISTANCE="distance";P.DIFFERENCE="difference";P.DOT="dot";P.CROSS="cross";P.POW="pow";P.TRANSFORM_DIRECTION="transformDirection";P.MIX="mix";P.CLAMP="clamp";P.REFRACT="refract";P.SMOOTHSTEP="smoothstep";P.FACEFORWARD="faceforward";const Om=A(1e-6);A(1e6);const Vf=A(Math.PI);A(Math.PI*2);const Fm=z(P,P.ALL),Hb=z(P,P.ANY),Gb=z(P,P.EQUALS),Wb=z(P,P.RADIANS),Xb=z(P,P.DEGREES),Vm=z(P,P.EXP),vu=z(P,P.EXP2),Bm=z(P,P.LOG),Dc=z(P,P.LOG2),er=z(P,P.SQRT),qb=z(P,P.INVERSE_SQRT),so=z(P,P.FLOOR),zm=z(P,P.CEIL),wn=z(P,P.NORMALIZE),Uc=z(P,P.FRACT),Yi=z(P,P.SIN),fs=z(P,P.COS),jb=z(P,P.TAN),Yb=z(P,P.ASIN),$b=z(P,P.ACOS),Kb=z(P,P.ATAN),Gt=z(P,P.ABS),ph=z(P,P.SIGN),Uo=z(P,P.LENGTH),Zb=z(P,P.NEGATE),Jb=z(P,P.ONE_MINUS),Qb=z(P,P.DFDX),eN=z(P,P.DFDY),tN=z(P,P.ROUND),nN=z(P,P.RECIPROCAL),km=z(P,P.TRUNC),iN=z(P,P.FWIDTH);z(P,P.BITCAST);const sN=z(P,P.ATAN2),Zr=z(P,P.MIN),jn=z(P,P.MAX),rN=z(P,P.MOD),oN=z(P,P.STEP),aN=z(P,P.REFLECT),cN=z(P,P.DISTANCE),lN=z(P,P.DIFFERENCE),ro=z(P,P.DOT),Hm=z(P,P.CROSS),Ii=z(P,P.POW),Gm=z(P,P.POW,2),uN=z(P,P.POW,3),hN=z(P,P.POW,4),dN=z(P,P.TRANSFORM_DIRECTION),fN=i=>it(ph(i),Ii(Gt(i),1/3)),pN=i=>ro(i,i),hn=z(P,P.MIX),Jr=(i,e=0,t=1)=>he(new P(P.CLAMP,he(i),he(e),he(t))),mN=i=>Jr(i),Wm=z(P,P.REFRACT),Qi=z(P,P.SMOOTHSTEP),gN=z(P,P.FACEFORWARD),_N=(i,e,t)=>hn(e,t,i),xN=(i,e,t)=>Qi(e,t,i);U("all",Fm);U("any",Hb);U("equals",Gb);U("radians",Wb);U("degrees",Xb);U("exp",Vm);U("exp2",vu);U("log",Bm);U("log2",Dc);U("sqrt",er);U("inverseSqrt",qb);U("floor",so);U("ceil",zm);U("normalize",wn);U("fract",Uc);U("sin",Yi);U("cos",fs);U("tan",jb);U("asin",Yb);U("acos",$b);U("atan",Kb);U("abs",Gt);U("sign",ph);U("length",Uo);U("lengthSq",pN);U("negate",Zb);U("oneMinus",Jb);U("dFdx",Qb);U("dFdy",eN);U("round",tN);U("reciprocal",nN);U("trunc",km);U("fwidth",iN);U("atan2",sN);U("min",Zr);U("max",jn);U("mod",rN);U("step",oN);U("reflect",aN);U("distance",cN);U("dot",ro);U("cross",Hm);U("pow",Ii);U("pow2",Gm);U("pow3",uN);U("pow4",hN);U("transformDirection",dN);U("mix",_N);U("clamp",Jr);U("refract",Wm);U("smoothstep",xN);U("faceForward",gN);U("difference",lN);U("saturate",mN);U("cbrt",fN);K("MathNode",P);const vN=j(i=>{const{value:e}=i,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),s=t.mul(.0773993808),r=t.lessThanEqual(.04045),o=hn(n,s,r);return Se(o,e.a)}),yN=j(i=>{const{value:e}=i,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),s=t.mul(12.92),r=t.lessThanEqual(.0031308),o=hn(n,s,r);return Se(o,e.a)}),Bf=i=>{let e=null;return i===jt?e="Linear":i===sn&&(e="sRGB"),e},Xm=(i,e)=>Bf(i)+"To"+Bf(e);class On extends yt{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===On.LINEAR_TO_LINEAR?t:MN[e]({value:t})}}On.LINEAR_TO_LINEAR="LinearToLinear";On.LINEAR_TO_sRGB="LinearTosRGB";On.sRGB_TO_LINEAR="sRGBToLinear";const MN={[On.LINEAR_TO_sRGB]:yN,[On.sRGB_TO_LINEAR]:vN},TN=(i,e)=>he(new On(Xm(jt,e),he(i))),qm=(i,e)=>he(new On(Xm(e,jt),he(i))),SN=z(On,On.LINEAR_TO_sRGB),EN=z(On,On.sRGB_TO_LINEAR);U("linearTosRGB",SN);U("sRGBToLinear",EN);U("linearToColorSpace",TN);U("colorSpaceToLinear",qm);K("ColorSpaceNode",On);class jm extends Re{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),s=this.snippet;if(n==="void")e.addLineFlowCode(s);else return e.format(`( ${s} )`,n,t)}}const Oc=z(jm);K("ExpressionNode",jm);class Ym extends Qs{constructor(e){super(0),this.textureNode=e,this.updateType=xt.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:s,height:r}=n;this.value=Math.log2(Math.max(s,r))}}}const AN=z(Ym);K("MaxMipLevelNode",Ym);class oo extends Qs{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.gradNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=xt.NONE,this.referenceNode=null,this._value=e,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":"vec4"}getInputType(){return"texture"}getDefaultUV(){return Bi(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){const t=this.value;return vt(t.matrix).mul(D(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?xt.FRAME:xt.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let s=this.levelNode;s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),t.uvNode=n,t.levelNode=s,t.compareNode=this.compareNode,t.gradNode=this.gradNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,s,r,o,a){const c=this.value;let l;return s?l=e.generateTextureLevel(c,t,n,s,r):a?l=e.generateTextureGrad(c,t,n,a,r):o?l=e.generateTextureCompare(c,t,n,o,r):this.sampler===!1?l=e.generateTextureLoad(c,t,n,r):l=e.generateTexture(c,t,n,r),l}generate(e,t){const n=e.getNodeProperties(this),s=this.value;if(!s||s.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const r=super.generate(e,"property");if(t==="sampler")return r+"_sampler";if(e.isReference(t))return r;{const o=e.getDataFromNode(this);let a=o.propertyName;if(a===void 0){const{uvNode:u,levelNode:h,compareNode:d,depthNode:f,gradNode:g}=n,_=this.generateUV(e,u),m=h?h.build(e,"float"):null,p=f?f.build(e,"int"):null,M=d?d.build(e,"float"):null,x=g?[g[0].build(e,"vec2"),g[1].build(e,"vec2")]:null,S=e.getVarFromNode(this);a=e.getPropertyName(S);const L=this.generateSnippet(e,r,_,m,p,M,x);e.addLineFlowCode(`${a} = ${L}`),e.context.tempWrite!==!1&&(o.snippet=L,o.propertyName=a)}let c=a;const l=this.getNodeType(e);return e.needsColorSpaceToLinear(s)&&(c=qm(Oc(c,l),s.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,t.referenceNode=this,he(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(AN(t)),t.referenceNode=this,he(t)}level(e){const t=this.clone();return t.levelNode=e,t.referenceNode=this,t}size(e){return fh(this,e)}compare(e){const t=this.clone();return t.compareNode=he(e),t.referenceNode=this,he(t)}grad(e,t){const n=this.clone();return n.gradNode=[he(e),he(t)],n.referenceNode=this,he(n)}depth(e){const t=this.clone();return t.depthNode=he(e),t.referenceNode=this,he(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const Dn=z(oo),Hs=(...i)=>Dn(...i).setSampler(!1);U("texture",Dn);K("TextureNode",oo);class Fc extends Qs{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getInputType(){return"buffer"}}const mh=(i,e,t)=>he(new Fc(i,e,t));K("BufferNode",Fc);class bN extends io{constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=super.generate(e),n=this.getNodeType();return e.format(t,"vec4",n)}}class $m extends Fc{constructor(e,t=null){super(null,"vec4"),this.array=e,this.elementType=t,this._elementType=null,this._elementLength=0,this.updateType=xt.RENDER,this.isArrayBufferNode=!0}getElementType(){return this.elementType||this._elementType}getElementLength(){return this._elementLength}update(){const{array:e,value:t}=this,n=this.getElementLength(),s=this.getElementType();if(n===1)for(let r=0;r<e.length;r++){const o=r*4;t[o]=e[r]}else if(s==="color")for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.r,t[o+1]=a.g,t[o+2]=a.b||0}else for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.x,t[o+1]=a.y,t[o+2]=a.z||0,t[o+3]=a.w||0}}setup(e){const t=this.array.length;return this._elementType=this.elementType===null?_s(this.array[0]):this.elementType,this._elementLength=e.getTypeLength(this._elementType),this.value=new Float32Array(t*4),this.bufferCount=t,super.setup(e)}element(e){return he(new bN(this,he(e)))}}const yu=(i,e)=>he(new $m(i,e));K("UniformsNode",$m);class NN extends io{constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}}class ao extends Re{constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=null,this.node=null,this.updateType=xt.OBJECT}element(e){return he(new NN(this,he(e)))}setNodeType(e){let t=null;this.count!==null?t=mh(null,e,this.count):Array.isArray(this.getValueFromReference())?t=yu(null,e):e==="texture"?t=Dn(null):t=vt(null,e),this.node=t}getNodeType(e){return this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const Ti=(i,e,t)=>he(new ao(i,e,t)),wN=(i,e,t,n)=>he(new ao(i,e,n,t));K("ReferenceNode",ao);class Km extends ao{constructor(e,t,n=null){super(e,t,n),this.material=n}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const Zm=(i,e,t)=>he(new Km(i,e,t));K("MaterialReferenceNode",Km);class Oe extends Re{constructor(e=Oe.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=xt.OBJECT,this._uniformNode=new Qs(null)}getNodeType(){const e=this.scope;if(e===Oe.WORLD_MATRIX||e===Oe.VIEW_MATRIX)return"mat4";if(e===Oe.NORMAL_MATRIX)return"mat3";if(e===Oe.POSITION||e===Oe.VIEW_POSITION||e===Oe.DIRECTION||e===Oe.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,s=this.scope;if(s===Oe.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(s===Oe.NORMAL_MATRIX)n.value=t.normalMatrix;else if(s===Oe.WORLD_MATRIX)n.value=t.matrixWorld;else if(s===Oe.POSITION)n.value=n.value||new C,n.value.setFromMatrixPosition(t.matrixWorld);else if(s===Oe.SCALE)n.value=n.value||new C,n.value.setFromMatrixScale(t.matrixWorld);else if(s===Oe.DIRECTION)n.value=n.value||new C,t.getWorldDirection(n.value);else if(s===Oe.VIEW_POSITION){const r=e.camera;n.value=n.value||new C,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(e){const t=this.scope;return t===Oe.WORLD_MATRIX||t===Oe.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===Oe.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===Oe.POSITION||t===Oe.VIEW_POSITION||t===Oe.DIRECTION||t===Oe.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Oe.VIEW_MATRIX="viewMatrix";Oe.NORMAL_MATRIX="normalMatrix";Oe.WORLD_MATRIX="worldMatrix";Oe.POSITION="position";Oe.SCALE="scale";Oe.VIEW_POSITION="viewPosition";Oe.DIRECTION="direction";z(Oe,Oe.DIRECTION);z(Oe,Oe.VIEW_MATRIX);z(Oe,Oe.NORMAL_MATRIX);z(Oe,Oe.WORLD_MATRIX);const Mu=z(Oe,Oe.POSITION);z(Oe,Oe.SCALE);const Jm=z(Oe,Oe.VIEW_POSITION);K("Object3DNode",Oe);class ke extends Oe{constructor(e=ke.POSITION){super(e),this.updateType=xt.RENDER}getNodeType(e){const t=this.scope;return t===ke.PROJECTION_MATRIX||t===ke.PROJECTION_MATRIX_INVERSE?"mat4":t===ke.NEAR||t===ke.FAR||t===ke.LOG_DEPTH?"float":super.getNodeType(e)}update(e){const t=e.camera,n=this._uniformNode,s=this.scope;s===ke.VIEW_MATRIX?n.value=t.matrixWorldInverse:s===ke.PROJECTION_MATRIX?n.value=t.projectionMatrix:s===ke.PROJECTION_MATRIX_INVERSE?n.value=t.projectionMatrixInverse:s===ke.NEAR?n.value=t.near:s===ke.FAR?n.value=t.far:s===ke.LOG_DEPTH?n.value=2/(Math.log(t.far+1)/Math.LN2):(this.object3d=t,super.update(e))}generate(e){const t=this.scope;return t===ke.PROJECTION_MATRIX||t===ke.PROJECTION_MATRIX_INVERSE?this._uniformNode.nodeType="mat4":(t===ke.NEAR||t===ke.FAR||t===ke.LOG_DEPTH)&&(this._uniformNode.nodeType="float"),super.generate(e)}}ke.PROJECTION_MATRIX="projectionMatrix";ke.PROJECTION_MATRIX_INVERSE="projectionMatrixInverse";ke.NEAR="near";ke.FAR="far";ke.LOG_DEPTH="logDepth";const Ri=J(ke,ke.PROJECTION_MATRIX);J(ke,ke.PROJECTION_MATRIX_INVERSE);const Ul=J(ke,ke.NEAR),Ol=J(ke,ke.FAR),RN=J(ke,ke.LOG_DEPTH),ts=J(ke,ke.VIEW_MATRIX);J(ke,ke.NORMAL_MATRIX);J(ke,ke.WORLD_MATRIX);const CN=J(ke,ke.POSITION);K("CameraNode",ke);class dn extends Oe{constructor(e=dn.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}J(dn,dn.DIRECTION);const Ks=J(dn,dn.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),Qm=J(dn,dn.NORMAL_MATRIX),Go=J(dn,dn.WORLD_MATRIX);J(dn,dn.POSITION);J(dn,dn.SCALE);J(dn,dn.VIEW_POSITION);K("ModelNode",dn);class $t extends Re{constructor(e=$t.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`normal-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===$t.GEOMETRY)e.hasGeometryAttribute("normal")===!1?n=D(0,1,0):n=vn("normal","vec3");else if(t===$t.LOCAL)n=Ot(uc);else if(t===$t.VIEW){const s=Qm.mul(Si);n=wn(Ot(s))}else if(t===$t.WORLD){const s=Ss.transformDirection(ts);n=wn(Ot(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}$t.GEOMETRY="geometry";$t.LOCAL="local";$t.VIEW="view";$t.WORLD="world";const uc=J($t,$t.GEOMETRY),Si=J($t,$t.LOCAL).temp("Normal"),Ss=J($t,$t.VIEW),eg=J($t,$t.WORLD),Ft=on("vec3","TransformedNormalView"),tg=Ft.transformDirection(ts).normalize(),Er=on("vec3","TransformedClearcoatNormalView");K("NormalNode",$t);const zf=new Map;class Y extends Re{constructor(e){super(),this.scope=e}getCache(e,t){let n=zf.get(e);return n===void 0&&(n=Zm(e,t),zf.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let s=null;if(n===Y.COLOR){const r=this.getColor(n);t.map&&t.map.isTexture===!0?s=r.mul(this.getTexture("map")):s=r}else if(n===Y.OPACITY){const r=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?s=r.mul(this.getTexture("alpha")):s=r}else if(n===Y.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?s=this.getTexture("specular").r:s=A(1);else if(n===Y.SPECULAR_INTENSITY){const r=this.getFloat(n);t.specularMap?s=r.mul(this.getTexture(n).a):s=r}else if(n===Y.SPECULAR_COLOR){const r=this.getColor(n);t.specularColorMap&&t.specularColorMap.isTexture===!0?s=r.mul(this.getTexture(n).rgb):s=r}else if(n===Y.ROUGHNESS){const r=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).g):s=r}else if(n===Y.METALNESS){const r=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?s=r.mul(this.getTexture(n).b):s=r}else if(n===Y.EMISSIVE){const r=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?s=r.mul(this.getTexture(n)):s=r}else if(n===Y.NORMAL)t.normalMap?s=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?s=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):s=Ss;else if(n===Y.CLEARCOAT){const r=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===Y.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===Y.CLEARCOAT_NORMAL)t.clearcoatNormalMap?s=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):s=Ss;else if(n===Y.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?s=r.mul(this.getTexture("sheenColor").rgb):s=r}else if(n===Y.SHEEN_ROUGHNESS){const r=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).a):s=r,s=s.clamp(.07,1)}else if(n===Y.ANISOTROPY)if(t.anisotropyMap&&t.anisotropyMap.isTexture===!0){const r=this.getTexture(n);s=oh(Ao.x,Ao.y,Ao.y.negate(),Ao.x).mul(r.rg.mul(2).sub(Ae(1)).normalize().mul(r.b))}else s=Ao;else if(n===Y.IRIDESCENCE_THICKNESS){const r=Ti("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const o=Ti("0","float",t.iridescenceThicknessRange);s=r.sub(o).mul(this.getTexture(n).g).add(o)}else s=r}else if(n===Y.TRANSMISSION){const r=this.getFloat(n);t.transmissionMap?s=r.mul(this.getTexture(n).r):s=r}else if(n===Y.THICKNESS){const r=this.getFloat(n);t.thicknessMap?s=r.mul(this.getTexture(n).g):s=r}else if(n===Y.IOR)s=this.getFloat(n);else{const r=this.getNodeType(e);s=this.getCache(n,r)}return s}}Y.ALPHA_TEST="alphaTest";Y.COLOR="color";Y.OPACITY="opacity";Y.SHININESS="shininess";Y.SPECULAR="specular";Y.SPECULAR_STRENGTH="specularStrength";Y.SPECULAR_INTENSITY="specularIntensity";Y.SPECULAR_COLOR="specularColor";Y.REFLECTIVITY="reflectivity";Y.ROUGHNESS="roughness";Y.METALNESS="metalness";Y.NORMAL="normal";Y.CLEARCOAT="clearcoat";Y.CLEARCOAT_ROUGHNESS="clearcoatRoughness";Y.CLEARCOAT_NORMAL="clearcoatNormal";Y.EMISSIVE="emissive";Y.ROTATION="rotation";Y.SHEEN="sheen";Y.SHEEN_ROUGHNESS="sheenRoughness";Y.ANISOTROPY="anisotropy";Y.IRIDESCENCE="iridescence";Y.IRIDESCENCE_IOR="iridescenceIOR";Y.IRIDESCENCE_THICKNESS="iridescenceThickness";Y.IOR="ior";Y.TRANSMISSION="transmission";Y.THICKNESS="thickness";Y.ATTENUATION_DISTANCE="attenuationDistance";Y.ATTENUATION_COLOR="attenuationColor";Y.LINE_SCALE="scale";Y.LINE_DASH_SIZE="dashSize";Y.LINE_GAP_SIZE="gapSize";Y.LINE_WIDTH="linewidth";Y.LINE_DASH_OFFSET="dashOffset";Y.POINT_WIDTH="pointWidth";const LN=J(Y,Y.ALPHA_TEST),Wo=J(Y,Y.COLOR),PN=J(Y,Y.SHININESS),IN=J(Y,Y.EMISSIVE),ng=J(Y,Y.OPACITY),DN=J(Y,Y.SPECULAR),kf=J(Y,Y.SPECULAR_INTENSITY),UN=J(Y,Y.SPECULAR_COLOR),ON=J(Y,Y.SPECULAR_STRENGTH);J(Y,Y.REFLECTIVITY);const FN=J(Y,Y.ROUGHNESS),VN=J(Y,Y.METALNESS),BN=J(Y,Y.NORMAL),zN=J(Y,Y.CLEARCOAT),kN=J(Y,Y.CLEARCOAT_ROUGHNESS),HN=J(Y,Y.CLEARCOAT_NORMAL),GN=J(Y,Y.ROTATION),WN=J(Y,Y.SHEEN),XN=J(Y,Y.SHEEN_ROUGHNESS),qN=J(Y,Y.ANISOTROPY),jN=J(Y,Y.IRIDESCENCE),YN=J(Y,Y.IRIDESCENCE_IOR),$N=J(Y,Y.IRIDESCENCE_THICKNESS),KN=J(Y,Y.TRANSMISSION),ZN=J(Y,Y.THICKNESS),JN=J(Y,Y.IOR),QN=J(Y,Y.ATTENUATION_DISTANCE),ew=J(Y,Y.ATTENUATION_COLOR),Tu=J(Y,Y.LINE_SCALE),ig=J(Y,Y.LINE_DASH_SIZE),sg=J(Y,Y.LINE_GAP_SIZE),Fl=J(Y,Y.LINE_WIDTH),Hf=J(Y,Y.LINE_DASH_OFFSET),tw=J(Y,Y.POINT_WIDTH),Ao=vt(new Me).onReference(function(i){return i.material}).onRenderUpdate(function({material:i}){this.value.set(i.anisotropy*Math.cos(i.anisotropyRotation),i.anisotropy*Math.sin(i.anisotropyRotation))});K("MaterialNode",Y);class _t extends Re{constructor(e=_t.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`position-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===_t.GEOMETRY)n=vn("position","vec3");else if(t===_t.LOCAL)n=Ot(Ln);else if(t===_t.WORLD){const s=Go.mul(Mn);n=Ot(s)}else if(t===_t.VIEW){const s=Ks.mul(Mn);n=Ot(s)}else if(t===_t.VIEW_DIRECTION){const s=Gn.negate();n=wn(Ot(s))}else if(t===_t.WORLD_DIRECTION){const s=Mn.transformDirection(Go);n=wn(Ot(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}_t.GEOMETRY="geometry";_t.LOCAL="local";_t.WORLD="world";_t.WORLD_DIRECTION="worldDirection";_t.VIEW="view";_t.VIEW_DIRECTION="viewDirection";const Ln=J(_t,_t.GEOMETRY),Mn=J(_t,_t.LOCAL).temp("Position"),Su=J(_t,_t.WORLD),nw=J(_t,_t.WORLD_DIRECTION),Gn=J(_t,_t.VIEW),Pt=J(_t,_t.VIEW_DIRECTION);K("PositionNode",_t);class rg extends yt{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return Ot(e.context.mvp);const t=this.positionNode||Mn;return Ri.mul(Ks).mul(t)}}const Gf=z(rg);K("ModelViewProjectionNode",rg);class og extends Rc{constructor(e,t=null,n=0,s=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=s,this.usage=ec,this.instanced=!1,this.attribute=null,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,s=e.getTypeLength(t),r=this.bufferStride||s,o=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new Xu(n,r),c=new Ec(a,s,o);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),s=e.getPropertyName(n);let r=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=s,r=s):r=Ot(this).build(e,t),r}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this}setInstanced(e){return this.instanced=e,this}}const Vc=(i,e,t,n)=>he(new og(i,e,t,n)),iw=(i,e,t,n)=>Vc(i,e,t,n).setUsage(ou),Wf=(i,e,t,n)=>Vc(i,e,t,n).setInstanced(!0),Xf=(i,e,t,n)=>iw(i,e,t,n).setInstanced(!0);U("toAttribute",i=>Vc(i.value));K("BufferAttributeNode",og);class ag extends Re{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null,this.instanceColorNode=null}setup(){let e=this.instanceMatrixNode;const t=this.instanceMesh;if(e===null){const c=t.instanceMatrix,l=new RE(c.array,16,1),u=c.usage===ou?Xf:Wf,h=[u(l,"vec4",16,0),u(l,"vec4",16,4),u(l,"vec4",16,8),u(l,"vec4",16,12)];e=Ir(...h),this.instanceMatrixNode=e}const n=t.instanceColor;if(n&&this.instanceColorNode===null){const c=new tc(n.array,3),l=n.usage===ou?Xf:Wf;this.instanceColorNode=D(l(c,"vec3",3,0))}const s=e.mul(Mn).xyz,r=Mi(e[0].xyz,e[1].xyz,e[2].xyz),o=Si.div(D(r[0].dot(r[0]),r[1].dot(r[1]),r[2].dot(r[2]))),a=r.mul(o).xyz;Mn.assign(s),Si.assign(a),this.instanceColorNode!==null&&Ni("vec3","vInstanceColor").assign(this.instanceColorNode)}}const sw=z(ag);K("InstanceNode",ag);class Wt extends Re{constructor(e=Wt.LOCAL){super(),this.scope=e}getHash(){return`tangent-${this.scope}`}getNodeType(){return this.scope===Wt.GEOMETRY?"vec4":"vec3"}generate(e){const t=this.scope;let n=null;if(t===Wt.GEOMETRY)n=vn("tangent","vec4"),e.geometry.hasAttribute("tangent")===!1&&e.geometry.computeTangents();else if(t===Wt.LOCAL)n=Ot(hc.xyz);else if(t===Wt.VIEW){const s=Ks.mul(Se(Bc,0)).xyz;n=wn(Ot(s))}else if(t===Wt.WORLD){const s=zc.transformDirection(ts);n=wn(Ot(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Wt.GEOMETRY="geometry";Wt.LOCAL="local";Wt.VIEW="view";Wt.WORLD="world";const hc=J(Wt,Wt.GEOMETRY),Bc=J(Wt,Wt.LOCAL),zc=J(Wt,Wt.VIEW),rw=J(Wt,Wt.WORLD),cg=Ho(zc,"TransformedTangentView");wn(cg.transformDirection(ts));K("TangentNode",Wt);class lg extends Re{constructor(e){super("void"),this.batchMesh=e,this.instanceColorNode=null,this.batchingIdNode=null}setup(e){this.batchingIdNode===null&&(this.batchingIdNode=vn("batchId"));const t=this.batchMesh._matricesTexture,n=fh(Hs(t),0),s=A(R(this.batchingIdNode)).mul(4).toVar(),r=R(s.mod(n)),o=R(s).div(R(n)),a=Ir(Hs(t,Xs(r,o)),Hs(t,Xs(r.add(1),o)),Hs(t,Xs(r.add(2),o)),Hs(t,Xs(r.add(3),o))),c=Mi(a[0].xyz,a[1].xyz,a[2].xyz);Mn.assign(a.mul(Mn));const l=Si.div(D(c[0].dot(c[0]),c[1].dot(c[1]),c[2].dot(c[2]))),u=c.mul(l).xyz;Si.assign(u),e.hasGeometryAttribute("tangent")&&Bc.mulAssign(c)}}const ow=z(lg);K("batch",lg);class ug extends Re{constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=xt.OBJECT,this.skinIndexNode=vn("skinIndex","uvec4"),this.skinWeightNode=vn("skinWeight","vec4");let n,s,r;t?(n=Ti("bindMatrix","mat4"),s=Ti("bindMatrixInverse","mat4"),r=wN("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=vt(e.bindMatrix,"mat4"),s=vt(e.bindMatrixInverse,"mat4"),r=mh(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=s,this.boneMatricesNode=r}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:s,bindMatrixInverseNode:r,boneMatricesNode:o}=this,a=o.element(t.x),c=o.element(t.y),l=o.element(t.z),u=o.element(t.w),h=s.mul(Mn),d=qn(a.mul(n.x).mul(h),c.mul(n.y).mul(h),l.mul(n.z).mul(h),u.mul(n.w).mul(h)),f=r.mul(d).xyz;let g=qn(n.x.mul(a),n.y.mul(c),n.z.mul(l),n.w.mul(u));g=r.mul(g).mul(s);const _=g.transformDirection(Si).xyz;Mn.assign(f),Si.assign(_),e.hasGeometryAttribute("tangent")&&Bc.assign(_)}generate(e,t){if(t!=="void")return Mn.build(e,t)}update(e){(this.useReference?e.object:this.skinnedMesh).skeleton.update()}}const aw=i=>he(new ug(i,!0));K("SkinningNode",ug);class hg extends Re{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let s=0,r=this.params.length-1;s<r;s++){const o=this.params[s],a=o.isNode!==!0&&o.name||this.getVarName(s),c=o.isNode!==!0&&o.type||"int";n[a]=Oc(a,c)}return t.returnsNode=this.params[this.params.length-1](n,e.addStack(),e),t.stackNode=e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n={tempWrite:!1},s=this.params,r=t.stackNode;for(let c=0,l=s.length-1;c<l;c++){const u=s[c];let h=null,d=null,f=null,g=null,_=null,m=null;u.isNode?(g="int",f=this.getVarName(c),h="0",d=u.build(e,g),_="<"):(g=u.type||"int",f=u.name||this.getVarName(c),h=u.start,d=u.end,_=u.condition,m=u.update,typeof h=="number"?h=h.toString():h&&h.isNode&&(h=h.build(e,g)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,g)),h!==void 0&&d===void 0?(h=h+" - 1",d="0",_=">="):d!==void 0&&h===void 0&&(h="0",_="<"),_===void 0&&(Number(h)>Number(d)?_=">=":_="<"));const p={start:h,end:d,condition:_},M=p.start,x=p.end;let S="",L="",N="";m||(g==="int"||g==="uint"?_.includes("<")?m="++":m="--":_.includes("<")?m="+= 1.":m="-= 1."),S+=e.getVar(g,f)+" = "+M,L+=f+" "+_+" "+x,N+=f+" "+m;const b=`for ( ${S}; ${L}; ${N} )`;e.addFlowCode((c===0?`
`:"")+e.tab+b+` {

`).addFlowTab()}const o=Zi(r,n).build(e,"void"),a=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+o);for(let c=0,l=this.params.length-1;c<l;c++)e.addFlowCode((c===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),a}}const Et=(...i)=>he(new hg(Pr(i,"int"))).append(),cw=()=>Oc("break").append();U("loop",(i,...e)=>Sm(i,Et(...e)));K("LoopNode",hg);const Vl=new WeakMap,zn=new nt,qf=j(({bufferMap:i,influence:e,stride:t,width:n,depth:s,offset:r})=>{const o=R(yb).mul(t).add(r),a=o.div(n),c=o.sub(a.mul(n));return Hs(i,Xs(c,a)).depth(s).mul(e)});function lw(i){const e=i.morphAttributes.position!==void 0,t=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,s=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,r=s!==void 0?s.length:0;let o=Vl.get(i);if(o===void 0||o.count!==r){let M=function(){m.dispose(),Vl.delete(i),i.removeEventListener("dispose",M)};var a=M;o!==void 0&&o.texture.dispose();const c=i.morphAttributes.position||[],l=i.morphAttributes.normal||[],u=i.morphAttributes.color||[];let h=0;e===!0&&(h=1),t===!0&&(h=2),n===!0&&(h=3);let d=i.attributes.position.count*h,f=1;const g=4096;d>g&&(f=Math.ceil(d/g),d=g);const _=new Float32Array(d*f*4*r),m=new ku(_,d,f,r);m.type=di,m.needsUpdate=!0;const p=h*4;for(let x=0;x<r;x++){const S=c[x],L=l[x],N=u[x],b=d*f*4*x;for(let B=0;B<S.count;B++){const E=B*p;e===!0&&(zn.fromBufferAttribute(S,B),_[b+E+0]=zn.x,_[b+E+1]=zn.y,_[b+E+2]=zn.z,_[b+E+3]=0),t===!0&&(zn.fromBufferAttribute(L,B),_[b+E+4]=zn.x,_[b+E+5]=zn.y,_[b+E+6]=zn.z,_[b+E+7]=0),n===!0&&(zn.fromBufferAttribute(N,B),_[b+E+8]=zn.x,_[b+E+9]=zn.y,_[b+E+10]=zn.z,_[b+E+11]=N.itemSize===4?zn.w:1)}}o={count:r,texture:m,stride:h,size:new Me(d,f)},Vl.set(i,o),i.addEventListener("dispose",M)}return o}class dg extends Re{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=vt(1),this.updateType=xt.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,s=t.morphAttributes.normal!==void 0,r=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,o=r!==void 0?r.length:0,{texture:a,stride:c,size:l}=lw(t);n===!0&&Mn.mulAssign(this.morphBaseInfluence),s===!0&&Si.mulAssign(this.morphBaseInfluence);const u=R(l.width);Et(o,({i:h})=>{const d=A(0).toVar();this.mesh.isInstancedMesh===!0&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?d.assign(Hs(this.mesh.morphTexture,Xs(R(h).add(1),R(Am))).r):d.assign(Ti("morphTargetInfluences","float").element(h).toVar()),n===!0&&Mn.addAssign(qf({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:R(0)})),s===!0&&Si.addAssign(qf({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:R(1)}))})}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const uw=z(dg);K("MorphNode",dg);class fg extends Re{constructor(){super("vec3")}getHash(){return"reflectVector"}setup(){return Pt.negate().reflect(Ft).transformDirection(ts)}}const hw=J(fg);K("ReflectVectorNode",fg);class pg extends oo{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return hw}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===Wr||!n.isRenderTargetTexture?D(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const mg=z(pg);U("cubeTexture",mg);K("CubeTextureNode",pg);class ra extends Re{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}K("LightingNode",ra);let bo=null;class tr extends ra{constructor(e=null){super(),this.updateType=xt.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.shadowMaskNode=null,this.color=new be,this._defaultColorNode=vt(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){const{object:t}=e;if(t.receiveShadow===!1)return;let n=this.shadowNode;if(n===null){bo===null&&(bo=e.createNodeMaterial(),bo.fragmentNode=Se(0,0,0,1),bo.isShadowNodeMaterial=!0);const s=this.light.shadow,r=e.createRenderTarget(s.mapSize.width,s.mapSize.height),o=new ea;o.minFilter=Jt,o.magFilter=Jt,o.image.width=s.mapSize.width,o.image.height=s.mapSize.height,o.compareFunction=bp,r.depthTexture=o,s.camera.updateProjectionMatrix();const a=Ti("bias","float",s),c=Ti("normalBias","float",s),l=t.material.shadowPositionNode||Su;let u=vt(s.matrix).mul(l.add(eg.mul(c)));u=u.xyz.div(u.w);const h=u.x.greaterThanEqual(0).and(u.x.lessThanEqual(1)).and(u.y.greaterThanEqual(0)).and(u.y.lessThanEqual(1)).and(u.z.lessThanEqual(1));let d=u.z.add(a);e.renderer.coordinateSystem===Wr&&(d=d.mul(2).sub(1)),u=D(u.x,u.y.oneMinus(),d),n=((m,p,M)=>Dn(m,p).compare(M))(o,u.xy,u.z);const g=Dn(r.texture,u),_=h.mix(1,n.mix(g.a.mix(1,g),1));this.rtt=r,this.colorNode=this.colorNode.mul(_),this.shadowNode=n,this.shadowMaskNode=_,this.updateBeforeType=xt.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:s,scene:r}=e,o=r.overrideMaterial;r.overrideMaterial=bo,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n);const a=s.toneMapping,c=s.getRenderTarget(),l=s.getRenderObjectFunction();s.setRenderObjectFunction((u,...h)=>{u.castShadow===!0&&s.renderObject(u,...h)}),s.setRenderTarget(t),s.toneMapping=ni,s.render(r,n.shadow.camera),s.setRenderTarget(c),s.setRenderObjectFunction(l),s.toneMapping=a,r.overrideMaterial=o}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.shadowMaskNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}K("AnalyticLightNode",tr);const dc=new WeakMap,dw=i=>i.sort((e,t)=>e.id-t.id);class fw extends Re{constructor(e=[]){super("vec3"),this.totalDiffuseNode=D().temp("totalDiffuse"),this.totalSpecularNode=D().temp("totalSpecular"),this.outgoingLightNode=D().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}setup(e){const t=e.context,n=t.lightingModel;let s=this.outgoingLightNode;if(n){const{lightNodes:r,totalDiffuseNode:o,totalSpecularNode:a}=this;t.outgoingLight=s;const c=e.addStack();n.start(t,c,e);for(const m of r)m.build(e);n.indirectDiffuse(t,c,e),n.indirectSpecular(t,c,e),n.ambientOcclusion(t,c,e);const{backdrop:l,backdropAlpha:u}=t,{directDiffuse:h,directSpecular:d,indirectDiffuse:f,indirectSpecular:g}=t.reflectedLight;let _=h.add(f);l!==null&&(u!==null?_=D(u.mix(_,l)):_=D(l),t.material.transparent=!0),o.assign(_),a.assign(d.add(g)),s.assign(o.add(a)),n.finish(t,c,e),s=s.bypass(e.removeStack())}return s}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=dw(e);for(const n of e){let s=this._getLightNodeById(n.id);if(s===null){const r=n.constructor,o=dc.has(r)?dc.get(r):tr;s=he(new o(n))}t.push(s)}return this.lightNodes=t,this._hash=null,this}}const pw=z(fw);function co(i,e){if(dc.has(i)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof i!="function")throw new Error(`Light ${i.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);dc.set(i,e)}class gg extends ra{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}K("AONode",gg);class _g extends ah{constructor(e,t=null,n=null,s=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=s,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=D().temp("directDiffuse"),s=D().temp("directSpecular"),r=D().temp("indirectDiffuse"),o=D().temp("indirectSpecular"),a={directDiffuse:n,directSpecular:s,indirectDiffuse:r,indirectSpecular:o};return{radiance:D().temp("radiance"),irradiance:D().temp("irradiance"),iblIrradiance:D().temp("iblIrradiance"),ambientOcclusion:A(1).temp("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const xg=z(_g);U("lightingContext",xg);K("LightingContextNode",_g);class Kt extends Re{constructor(e=Kt.LOCAL){super("vec3"),this.scope=e}getHash(){return`bitangent-${this.scope}`}generate(e){const t=this.scope;let n;t===Kt.GEOMETRY?n=uc.cross(hc):t===Kt.LOCAL?n=Si.cross(Bc):t===Kt.VIEW?n=Ss.cross(zc):t===Kt.WORLD&&(n=eg.cross(rw));const s=n.mul(hc.w).xyz;return wn(Ot(s)).build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Kt.GEOMETRY="geometry";Kt.LOCAL="local";Kt.VIEW="view";Kt.WORLD="world";J(Kt,Kt.GEOMETRY);J(Kt,Kt.LOCAL);const mw=J(Kt,Kt.VIEW);J(Kt,Kt.WORLD);const gw=wn(Ft.cross(cg).mul(hc.w));wn(gw.transformDirection(ts));K("BitangentNode",Kt);const Ar=Mi(zc,mw,Ss);Pt.mul(Ar);const _w=(()=>{let i=Dr.cross(Pt);return i=i.cross(Dr).normalize(),i=hn(i,Ft,Bs.mul(xs.oneMinus()).oneMinus().pow2().pow2()).normalize(),i})();class gh extends Re{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}generate(e,t){const n=this.getNodeType(e),s={tempWrite:!1},r=e.getDataFromNode(this);if(r.nodeProperty!==void 0)return r.nodeProperty;const{ifNode:o,elseNode:a}=this,c=t!=="void",l=c?on(n).build(e):"";r.nodeProperty=l;const u=Zi(this.condNode).build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let h=Zi(o,s).build(e,n);if(h&&(c?h=l+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+"}"),a!==null){e.addFlowCode(` else {

`).addFlowTab();let d=Zi(a,s).build(e,n);d&&(c?d=l+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(l,n,t)}}const Wn=z(gh);U("cond",Wn);K("CondNode",gh);const jf=A(1),Eu=A(-2),za=A(.8),Bl=A(-1),ka=A(.4),zl=A(2),Ha=A(.305),kl=A(3),Yf=A(.21),xw=A(4),$f=A(4),vw=A(16),yw=j(([i])=>{const e=D(Gt(i)).toVar(),t=A(-1).toVar();return Ke(e.x.greaterThan(e.z),()=>{Ke(e.x.greaterThan(e.y),()=>{t.assign(Wn(i.x.greaterThan(0),0,3))}).else(()=>{t.assign(Wn(i.y.greaterThan(0),1,4))})}).else(()=>{Ke(e.z.greaterThan(e.y),()=>{t.assign(Wn(i.z.greaterThan(0),2,5))}).else(()=>{t.assign(Wn(i.y.greaterThan(0),1,4))})}),t}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),Mw=j(([i,e])=>{const t=Ae().toVar();return Ke(e.equal(0),()=>{t.assign(Ae(i.z,i.y).div(Gt(i.x)))}).elseif(e.equal(1),()=>{t.assign(Ae(i.x.negate(),i.z.negate()).div(Gt(i.y)))}).elseif(e.equal(2),()=>{t.assign(Ae(i.x.negate(),i.y).div(Gt(i.z)))}).elseif(e.equal(3),()=>{t.assign(Ae(i.z.negate(),i.y).div(Gt(i.x)))}).elseif(e.equal(4),()=>{t.assign(Ae(i.x.negate(),i.z).div(Gt(i.y)))}).else(()=>{t.assign(Ae(i.x,i.y).div(Gt(i.z)))}),it(.5,t.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),Tw=j(([i])=>{const e=A(0).toVar();return Ke(i.greaterThanEqual(za),()=>{e.assign(jf.sub(i).mul(Bl.sub(Eu)).div(jf.sub(za)).add(Eu))}).elseif(i.greaterThanEqual(ka),()=>{e.assign(za.sub(i).mul(zl.sub(Bl)).div(za.sub(ka)).add(Bl))}).elseif(i.greaterThanEqual(Ha),()=>{e.assign(ka.sub(i).mul(kl.sub(zl)).div(ka.sub(Ha)).add(zl))}).elseif(i.greaterThanEqual(Yf),()=>{e.assign(Ha.sub(i).mul(xw.sub(kl)).div(Ha.sub(Yf)).add(kl))}).else(()=>{e.assign(A(-2).mul(Dc(it(1.16,i))))}),e}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]});j(([i,e])=>{const t=i.toVar();t.assign(it(2,t).sub(1));const n=D(t,1).toVar();return Ke(e.equal(0),()=>{n.assign(n.zyx)}).elseif(e.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).elseif(e.equal(2),()=>{n.x.mulAssign(-1)}).elseif(e.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).elseif(e.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).elseif(e.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]});const Sw=j(([i,e,t,n,s,r])=>{const o=A(t),a=D(e),c=Jr(Tw(o),Eu,r),l=Uc(c),u=so(c),h=D(Au(i,a,u,n,s,r)).toVar();return Ke(l.notEqual(0),()=>{const d=D(Au(i,a,u.add(1),n,s,r)).toVar();h.assign(hn(h,d,l))}),h}),Au=j(([i,e,t,n,s,r])=>{const o=A(t).toVar(),a=D(e),c=A(yw(a)).toVar(),l=A(jn($f.sub(o),0)).toVar();o.assign(jn(o,$f));const u=A(vu(o)).toVar(),h=Ae(Mw(a,c).mul(u.sub(2)).add(1)).toVar();return Ke(c.greaterThan(2),()=>{h.y.addAssign(u),c.subAssign(3)}),h.x.addAssign(c.mul(u)),h.x.addAssign(l.mul(it(3,vw))),h.y.addAssign(it(4,vu(r).sub(u))),h.x.mulAssign(n),h.y.mulAssign(s),i.uv(h).grad(Ae(),Ae())}),Hl=j(({envMap:i,mipInt:e,outputDirection:t,theta:n,axis:s,CUBEUV_TEXEL_WIDTH:r,CUBEUV_TEXEL_HEIGHT:o,CUBEUV_MAX_MIP:a})=>{const c=fs(n),l=t.mul(c).add(s.cross(t).mul(Yi(n))).add(s.mul(s.dot(t).mul(c.oneMinus())));return Au(i,l,e,r,o,a)});j(({n:i,latitudinal:e,poleAxis:t,outputDirection:n,weights:s,samples:r,dTheta:o,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})=>{const d=D(Wn(e,t,Hm(t,n))).toVar();Ke(Fm(d.equals(D(0))),()=>{d.assign(D(n.z,0,n.x.negate()))}),d.assign(wn(d));const f=D().toVar();return f.addAssign(s.element(R(0)).mul(Hl({theta:0,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),Et({start:R(1),end:i},({i:g})=>{Ke(g.greaterThanEqual(r),()=>{cw()});const _=A(o.mul(A(g))).toVar();f.addAssign(s.element(g).mul(Hl({theta:_.mul(-1),axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),f.addAssign(s.element(g).mul(Hl({theta:_,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})))}),Se(f,1)});let fc=null;const Kf=new WeakMap;function Ew(i){const e=Math.log2(i)-2,t=1/i;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function Aw(i){let e=Kf.get(i);if((e!==void 0?e.pmremVersion:-1)!==i.pmremVersion){if(i.isCubeTexture){if(i.source.data.some(n=>n===void 0))throw new Error("PMREMNode: Undefined texture in CubeTexture. Use onLoad callback or async loader");e=fc.fromCubemap(i,e)}else{if(i.image===void 0)throw new Error("PMREMNode: Undefined image in Texture. Use onLoad callback or async loader");e=fc.fromEquirectangular(i,e)}e.pmremVersion=i.pmremVersion,Kf.set(i,e)}return e.texture}class vg extends yt{constructor(e,t=null,n=null){super("vec3"),this._value=e,this._pmrem=null,this.uvNode=t,this.levelNode=n,this._generator=null,this._texture=Dn(null),this._width=vt(0),this._height=vt(0),this._maxMip=vt(0),this.updateBeforeType=xt.RENDER}set value(e){this._value=e,this._pmrem=null}get value(){return this._value}updateFromTexture(e){const t=Ew(e.image.height);this._texture.value=e,this._width.value=t.texelWidth,this._height.value=t.texelHeight,this._maxMip.value=t.maxMip}updateBefore(){let e=this._pmrem;const t=e?e.pmremVersion:-1,n=this._value;t!==n.pmremVersion&&(n.isPMREMTexture===!0?e=n:e=Aw(n),this._pmrem=e,this.updateFromTexture(e))}setup(e){fc===null&&(fc=e.createPMREMGenerator()),this.updateBefore(e);let t=this.uvNode;t===null&&e.context.getUV&&(t=e.context.getUV(this));const n=this.value;e.renderer.coordinateSystem===pi&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(t=D(t.x.negate(),t.yz));let s=this.levelNode;return s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),Sw(this._texture,t,s,this._width,this._height,this._maxMip)}}const bw=z(vg);K("PMREMNode",vg);const Zf=new WeakMap;class yg extends ra{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode){let d=Zf.get(t.value);d===void 0&&(d=bw(t.value),Zf.set(t.value,d)),t=d}const{material:n}=e,r=n.envMap?Ti("envMapIntensity","float",e.material):Ti("environmentIntensity","float",e.scene),a=n.useAnisotropy===!0||n.anisotropy>0?_w:Ft,c=Zi(t,Jf(xs,a)).mul(r),l=Zi(t,Nw(tg)).mul(Math.PI).mul(r),u=rc(c);e.context.radiance.addAssign(u),e.context.iblIrradiance.addAssign(l);const h=e.context.lightingModel.clearcoatRadiance;if(h){const d=Zi(t,Jf(ac,Er)).mul(r),f=rc(d);h.addAssign(f)}}}const Jf=(i,e)=>{let t=null;return{getUV:()=>(t===null&&(t=Pt.negate().reflect(e),t=i.mul(i).mix(t,e).normalize(),t=t.transformDirection(ts)),t),getTextureLevel:()=>i}},Nw=i=>({getUV:()=>i,getTextureLevel:()=>A(1)});K("EnvironmentNode",yg);class Mg extends ra{constructor(e){super(),this.node=e}setup(e){e.context.irradiance.addAssign(this.node)}}K("IrradianceNode",Mg);let Gl,Wl;class lt extends Re{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===lt.VIEWPORT?"vec4":this.scope===lt.COORDINATE?"vec3":"vec2"}getUpdateType(){let e=xt.NONE;return(this.scope===lt.RESOLUTION||this.scope===lt.VIEWPORT)&&(e=xt.FRAME),this.updateType=e,e}update({renderer:e}){this.scope===lt.VIEWPORT?e.getViewport(Wl):e.getDrawingBufferSize(Gl)}setup(){const e=this.scope;let t=null;if(e===lt.RESOLUTION)t=vt(Gl||(Gl=new Me));else if(e===lt.VIEWPORT)t=vt(Wl||(Wl=new nt));else{t=ww.div(bu);let n=t.x,s=t.y;/bottom/i.test(e)&&(s=s.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=Ae(n,s)}return t}generate(e){if(this.scope===lt.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(bu).outputNode.build(e);t=`${e.getType("vec3")}( ${t}.x, ${n}.y - ${t}.y, ${t}.z )`}return t}return super.generate(e)}}lt.COORDINATE="coordinate";lt.RESOLUTION="resolution";lt.VIEWPORT="viewport";lt.TOP_LEFT="topLeft";lt.BOTTOM_LEFT="bottomLeft";lt.TOP_RIGHT="topRight";lt.BOTTOM_RIGHT="bottomRight";const ww=J(lt,lt.COORDINATE),bu=J(lt,lt.RESOLUTION),Or=J(lt,lt.VIEWPORT),Xo=J(lt,lt.TOP_LEFT);J(lt,lt.BOTTOM_LEFT);J(lt,lt.TOP_RIGHT);J(lt,lt.BOTTOM_RIGHT);K("ViewportNode",lt);const No=new Me;class oa extends oo{constructor(e=Xo,t=null,n=null){n===null&&(n=new qp,n.minFilter=Pi),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=xt.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(No);const n=this.value;(n.image.width!==No.width||n.image.height!==No.height)&&(n.image.width=No.width,n.image.height=No.height,n.needsUpdate=!0);const s=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=s}clone(){const e=new this.constructor(this.uvNode,this.levelNode,this.value);return e.generateMipmaps=this.generateMipmaps,e}}const Rw=z(oa),Tg=z(oa,null,null,{generateMipmaps:!0});U("viewportTexture",Rw);U("viewportMipTexture",Tg);K("ViewportTextureNode",oa);let Xl=null;class Sg extends oa{constructor(e=Xo,t=null){Xl===null&&(Xl=new ea),super(e,t,Xl)}}const Eg=z(Sg);U("viewportDepthTexture",Eg);K("ViewportDepthTextureNode",Sg);class cn extends Re{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===cn.DEPTH_PIXEL?e.getFragDepth():super.generate(e)}setup(){const{scope:e}=this;let t=null;if(e===cn.DEPTH)t=Nu(Gn.z,Ul,Ol);else if(e===cn.DEPTH_TEXTURE){const n=this.valueNode||Eg(),s=Ag(n,Ul,Ol);t=Nu(s,Ul,Ol)}else e===cn.DEPTH_PIXEL&&this.valueNode!==null&&(t=bg().assign(this.valueNode));return t}}const Nu=(i,e,t)=>i.add(e).div(e.sub(t)),Ag=(i,e,t)=>e.mul(t).div(t.sub(e).mul(i).sub(t));cn.DEPTH="depth";cn.DEPTH_TEXTURE="depthTexture";cn.DEPTH_PIXEL="depthPixel";const bg=z(cn,cn.DEPTH_PIXEL);J(cn,cn.DEPTH);z(cn,cn.DEPTH_TEXTURE);const Ng=J(cn,cn.DEPTH_PIXEL);Ng.assign=i=>bg(i);K("ViewportDepthNode",cn);class Es extends Re{constructor(e=Es.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);const t=e.clippingContext,{localClipIntersection:n,localClippingCount:s,globalClippingCount:r}=t,o=r+s,a=n?o-s:o;return this.scope===Es.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(t.planes,o,a):this.setupDefault(t.planes,o,a)}setupAlphaToCoverage(e,t,n){return j(()=>{const s=yu(e),r=on("float","distanceToPlane"),o=on("float","distanceToGradient"),a=on("float","clipOpacity");a.assign(1);let c;if(Et(n,({i:l})=>{c=s.element(l),r.assign(Gn.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),a.mulAssign(Qi(o.negate(),o,r)),a.equal(0).discard()}),n<t){const l=on("float","unionclipOpacity");l.assign(1),Et({start:n,end:t},({i:u})=>{c=s.element(u),r.assign(Gn.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),l.mulAssign(Qi(o.negate(),o,r).oneMinus())}),a.mulAssign(l.oneMinus())}Lt.a.mulAssign(a),Lt.a.equal(0).discard()})()}setupDefault(e,t,n){return j(()=>{const s=yu(e);let r;if(Et(n,({i:o})=>{r=s.element(o),Gn.dot(r.xyz).greaterThan(r.w).discard()}),n<t){const o=on("bool","clipped");o.assign(!0),Et({start:n,end:t},({i:a})=>{r=s.element(a),o.assign(Gn.dot(r.xyz).greaterThan(r.w).and(o))}),o.discard()}})()}}Es.ALPHA_TO_COVERAGE="alphaToCoverage";Es.DEFAULT="default";const Cw=()=>he(new Es),Lw=()=>he(new Es(Es.ALPHA_TO_COVERAGE));class wg extends Re{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){const{renderer:t,material:n}=e;return t.coordinateSystem===pi&&n.side===bn?"false":e.getFrontFacing()}}const Pw=J(wg),pc=A(Pw).mul(2).sub(1);K("FrontFacingNode",wg);const wu=new Map;class Yn extends Xt{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.lightsNode=null,this.envNode=null,this.aoNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.shadowPositionNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+hm(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;const n=this.setupClipping(e);if(this.depthWrite===!0&&this.setupDepth(e),this.fragmentNode===null){this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const s=this.setupLighting(e);n!==null&&e.stack.add(n);const r=Se(s,Lt.a).max(0);t=this.setupOutput(e,r),Mb.assign(t),this.outputNode!==null&&(t=this.outputNode)}else{let s=this.fragmentNode;s.isOutputStructNode!==!0&&(s=Se(s)),t=this.setupOutput(e,s)}e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupClipping(e){if(e.clippingContext===null)return null;const{globalClippingCount:t,localClippingCount:n}=e.clippingContext;let s=null;return(t||n)&&(this.alphaToCoverage?s=Lw():e.stack.add(Cw())),s}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=Gf().w.add(1).log2().mul(RN).mul(.5)),n!==null&&Ng.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&uw(t).append(),t.isSkinnedMesh===!0&&aw(t).append(),t.isBatchedMesh&&ow(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&e.isAvailable("instance")===!0&&sw(t).append(),this.positionNode!==null&&Mn.assign(this.positionNode);const s=Gf();return e.context.vertex=e.removeStack(),e.context.mvp=s,s}setupDiffuseColor({object:e,geometry:t}){let n=this.colorNode?Se(this.colorNode):Wo;this.vertexColors===!0&&t.hasAttribute("color")&&(n=Se(n.xyz.mul(vn("color","vec3")),n.a)),e.instanceColor&&(n=Ni("vec3","vInstanceColor").mul(n)),Lt.assign(n);const s=this.opacityNode?A(this.opacityNode):ng;if(Lt.a.assign(Lt.a.mul(s)),this.alphaTestNode!==null||this.alphaTest>0){const r=this.alphaTestNode!==null?A(this.alphaTestNode):LN;Lt.a.lessThanEqual(r).discard()}}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=Gn.dFdx().cross(Gn.dFdy()).normalize();Ft.assign(e.mul(pc))}else{const e=this.normalNode?D(this.normalNode):BN;Ft.assign(e.mul(pc))}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?mg(this.envMap):Dn(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];if(t&&n.push(new yg(t)),e.material.lightMap&&n.push(new Mg(Zm("lightMap","texture"))),this.aoNode!==null||e.material.aoMap){const r=this.aoNode!==null?this.aoNode:Dn(e.material.aoMap);n.push(new gg(r))}let s=this.lightsNode||e.lightsNode;return n.length>0&&(s=pw([...s.lightNodes,...n])),s}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:s,emissiveNode:r}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let c=Lt.rgb;if(a&&a.hasLight!==!1){const l=this.setupLightingModel(e);c=xg(a,l,n,s)}else n!==null&&(c=D(s!==null?hn(c,n,s):n));return(r&&r.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(c=c.add(D(r||IN))),c}setupOutput(e,t){const n=e.fogNode;return n&&(t=Se(n.mix(t.rgb,n.colorNode),t.a)),t}setDefaultValues(e){for(const n in e){const s=e[n];this[n]===void 0&&(this[n]=s,s&&s.clone&&(this[n]=s.clone()))}Object.assign(this.defines,e.defines);const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=yn.prototype.toJSON.call(this,e),s=sc(this);n.inputNodes={};for(const{property:o,childNode:a}of s)n.inputNodes[o]=a.toJSON(e).uuid;function r(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images),c=r(e.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.shadowNode=e.shadowNode,this.shadowPositionNode=e.shadowPositionNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=Iw(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const s in e)n[s]=e[s];return n}}function Cn(i,e){if(typeof e!="function"||!i)throw new Error(`Node material ${i} is not a class`);if(wu.has(i)){console.warn(`Redefinition of node material ${i}`);return}wu.set(i,e),e.type=i}function Iw(i){const e=wu.get(i);if(e!==void 0)return new e}Cn("NodeMaterial",Yn);class Rg extends Re{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new Do(t);return this._currentCond=Wn(e,n),this.add(this._currentCond)}elseif(e,t){const n=new Do(t),s=Wn(e,n);return this._currentCond.elseNode=s,this._currentCond=s,this}else(e){return this._currentCond.elseNode=new Do(e),this}build(e,...t){const n=jA();Ff(this);for(const s of this.nodes)s.build(e,"void");return Ff(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}z(Rg);K("StackNode",Rg);class Cg extends yt{constructor(e=nw){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return Ae(t,n)}}z(Cg);K("EquirectUVNode",Cg);class Lg extends Re{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}K("StructTypeNode",Lg);class Pg extends Re{constructor(...e){super(),this.members=e,this.isOutputStructNode=!0}setup(e){super.setup(e);const t=this.members,n=[];for(let s=0;s<t.length;s++)n.push(t[s].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new Lg(n)).name}generate(e,t){const n=e.getVarFromNode(this);n.isOutputStructVar=!0;const s=e.getPropertyName(n),r=this.members,o=s!==""?s+".":"";for(let a=0;a<r.length;a++){const c=r[a].build(e,t);e.addLineFlowCode(`${o}m${a} = ${c}`)}return s}}z(Pg);K("OutputStructNode",Pg);class Ig extends Re{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.uint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).float().mul(1/2**32)}}const Dw=z(Ig);U("hash",Dw);K("HashNode",Ig);const Ru=(i,e)=>Ii(it(4,i.mul(zt(1,i))),e),Uw=(i,e)=>i.lessThan(.5)?Ru(i.mul(2),e).div(2):zt(1,Ru(it(zt(1,i),2),e).div(2)),Ow=(i,e,t)=>Ii(Ts(Ii(i,e),qn(Ii(i,e),Ii(zt(1,i),t))),1/e),Fw=(i,e)=>Yi(Vf.mul(e.mul(i).sub(1))).div(Vf.mul(e.mul(i).sub(1)));U("parabola",Ru);U("gain",Uw);U("pcurve",Ow);U("sinc",Fw);const Ci=j(([i])=>i.fract().sub(.5).abs()),Dg=j(([i])=>D(Ci(i.z.add(Ci(i.y.mul(1)))),Ci(i.z.add(Ci(i.x.mul(1)))),Ci(i.y.add(Ci(i.x.mul(1)))))),Vw=j(([i,e,t])=>{const n=D(i).toVar(),s=A(1.4).toVar(),r=A(0).toVar(),o=D(n).toVar();return Et({start:A(0),end:A(3),type:"float",condition:"<="},()=>{const a=D(Dg(o.mul(2))).toVar();n.addAssign(a.add(t.mul(A(.1).mul(e)))),o.mulAssign(1.8),s.mulAssign(1.5),n.mulAssign(1.2);const c=A(Ci(n.z.add(Ci(n.x.add(Ci(n.y)))))).toVar();r.addAssign(c.div(s)),o.addAssign(.14)}),r});Ci.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});Dg.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});Vw.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let ql;class Ug extends gh{constructor(e){ql=ql||Oc("discard"),super(e,ql)}}const Bw=z(Ug),zw=i=>Bw(i).append();U("discard",zw);K("DiscardNode",Ug);class Og extends Re{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let s=null,r=-1;for(const o of this.functionNodes){const c=o.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(t.length===l.length){let u=0;for(let h=0;h<t.length;h++){const d=t[h],f=l[h];d.getNodeType(e)===f.type?u++:u=0}u>r&&(s=o,r=u)}}this._candidateFnCall=n=s(...t)}return n}}const kw=z(Og),ri=i=>(...e)=>kw(i,...e);K("FunctionOverloadingNode",Og);class Fg extends yt{constructor(){super("vec2")}setup(){const e=D(Pt.z,0,Pt.x.negate()).normalize(),t=Pt.cross(e);return Ae(e.dot(Ft),t.dot(Ft)).mul(.495).add(.5)}}J(Fg);K("MatcapUVNode",Fg);class In extends Qs{constructor(e=In.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=xt.FRAME}update(e){const t=this.scope,n=this.scale;t===In.LOCAL?this.value+=e.deltaTime*n:t===In.DELTA?this.value=e.deltaTime*n:t===In.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}In.LOCAL="local";In.GLOBAL="global";In.DELTA="delta";In.FRAME="frame";const Hw=(i,e=0)=>he(new In(In.LOCAL,i,e));J(In,In.FRAME).uint();K("TimerNode",In);class Zt extends Re{constructor(e=Zt.SINE,t=Hw()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=he(this.timeNode);let n=null;return e===Zt.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===Zt.SQUARE?n=t.fract().round():e===Zt.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===Zt.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}Zt.SINE="sine";Zt.SQUARE="square";Zt.TRIANGLE="triangle";Zt.SAWTOOTH="sawtooth";z(Zt,Zt.SINE);z(Zt,Zt.SQUARE);z(Zt,Zt.TRIANGLE);z(Zt,Zt.SAWTOOTH);K("OscNode",Zt);class Oi extends yt{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===Oi.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===Oi.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}Oi.DIRECTION_TO_COLOR="directionToColor";Oi.COLOR_TO_DIRECTION="colorToDirection";const Vg=z(Oi,Oi.DIRECTION_TO_COLOR),Gw=z(Oi,Oi.COLOR_TO_DIRECTION);U("directionToColor",Vg);U("colorToDirection",Gw);K("PackingNode",Oi);class _h extends Re{constructor(e,t,n,s=A(0),r=A(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=s,this.outHighNode=r,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:s,outHighNode:r,doClamp:o}=this;let a=e.sub(t).div(n.sub(t));return o===!0&&(a=a.clamp()),a.mul(r.sub(s)).add(s)}}const Ww=z(_h,null,null,{doClamp:!1}),Xw=z(_h);U("remap",Ww);U("remapClamp",Xw);K("RemapNode",_h);class Bg extends yt{constructor(e,t,n=Ae(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this;return e.sub(n).rotate(t).add(n)}}const qw=z(Bg);U("rotateUV",qw);K("RotateUVNode",Bg);class zg extends yt{constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const r=t.cos(),o=t.sin();return oh(r,o,o.negate(),r).mul(n)}else{const r=t,o=Ir(Se(1,0,0,0),Se(0,fs(r.x),Yi(r.x).negate(),0),Se(0,Yi(r.x),fs(r.x),0),Se(0,0,0,1)),a=Ir(Se(fs(r.y),0,Yi(r.y),0),Se(0,1,0,0),Se(Yi(r.y).negate(),0,fs(r.y),0),Se(0,0,0,1)),c=Ir(Se(fs(r.z),Yi(r.z).negate(),0,0),Se(Yi(r.z),fs(r.z),0,0),Se(0,0,1,0),Se(0,0,0,1));return o.mul(a).mul(c).mul(Se(n,1)).xyz}}}const jw=z(zg);U("rotate",jw);K("RotateNode",zg);class kg extends Re{constructor(e,t=Bi(),n=A(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:s,height:r}=n,o=e.mod(s.mul(r)).floor(),a=o.mod(s),c=r.sub(o.add(1).div(s).ceil()),l=n.reciprocal(),u=Ae(a,c);return t.add(u).mul(l)}}z(kg);K("SpriteSheetUVNode",kg);class Hg extends io{constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}setup(e){return e.isAvailable("storageBuffer")===!1&&!this.node.instanceIndex&&this.node.bufferObject===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n;const s=e.context.assign;if(e.isAvailable("storageBuffer")===!1){const{node:r}=this;!r.instanceIndex&&this.node.bufferObject===!0&&s!==!0?n=e.generatePBO(this):n=r.build(e)}else n=super.generate(e);if(s!==!0){const r=this.getNodeType(e);n=e.format(n,r,t)}return n}}const Gg=z(Hg);U("storageElement",Gg);K("StorageArrayElementNode",Hg);class Wg extends Re{constructor(e,t=null,n=null,s=A(1),r=Mn,o=Si){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=s,this.positionNode=r,this.normalNode=o}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:s,positionNode:r,normalNode:o}=this;let a=o.abs().normalize();a=a.div(a.dot(D(1)));const c=r.yz.mul(s),l=r.zx.mul(s),u=r.xy.mul(s),h=e.value,d=t!==null?t.value:h,f=n!==null?n.value:h,g=Dn(h,c).mul(a.x),_=Dn(d,l).mul(a.y),m=Dn(f,u).mul(a.z);return qn(g,_,m)}}const Yw=z(Wg),$w=(...i)=>Yw(...i);U("triplanarTexture",$w);K("TriplanarTexturesNode",Wg);new hs;new C;new C;new C;new Ve;new C(0,0,-1);new nt;new C;new C;new nt;new Me;new Ms;Ae(Xo.x.oneMinus(),Xo.y);class Kw extends Ic{constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let s;return n===!0?s=super.generate(e):s=e.generateConst(this.nodeType,new nt(1,1,1,1)),s}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}K("VertexColorNode",Kw);class Xg extends ao{constructor(e,t,n=null){super(e,t,n),this.renderer=n}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}}const Zw=(i,e,t)=>he(new Xg(i,e,t));K("RendererReferenceNode",Xg);const kc=1/6,qg=i=>it(kc,it(i,it(i,i.negate().add(3)).sub(3)).add(1)),Cu=i=>it(kc,it(i,it(i,it(3,i).sub(6))).add(4)),jg=i=>it(kc,it(i,it(i,it(-3,i).add(3)).add(3)).add(1)),Lu=i=>it(kc,Ii(i,3)),Qf=i=>qg(i).add(Cu(i)),ep=i=>jg(i).add(Lu(i)),tp=i=>qn(-1,Cu(i).div(qg(i).add(Cu(i)))),np=i=>qn(1,Lu(i).div(jg(i).add(Lu(i)))),ip=(i,e,t)=>{const n=i.uvNode,s=it(n,e.zw).add(.5),r=so(s),o=Uc(s),a=Qf(o.x),c=ep(o.x),l=tp(o.x),u=np(o.x),h=tp(o.y),d=np(o.y),f=Ae(r.x.add(l),r.y.add(h)).sub(.5).mul(e.xy),g=Ae(r.x.add(u),r.y.add(h)).sub(.5).mul(e.xy),_=Ae(r.x.add(l),r.y.add(d)).sub(.5).mul(e.xy),m=Ae(r.x.add(u),r.y.add(d)).sub(.5).mul(e.xy),p=Qf(o.y).mul(qn(a.mul(i.uv(f).level(t)),c.mul(i.uv(g).level(t)))),M=ep(o.y).mul(qn(a.mul(i.uv(_).level(t)),c.mul(i.uv(m).level(t))));return p.add(M)},Jw=(i,e)=>{const t=Ae(i.size(R(e))),n=Ae(i.size(R(e.add(1)))),s=Ts(1,t),r=Ts(1,n),o=ip(i,Se(s,t),so(e)),a=ip(i,Se(r,n),zm(e));return Uc(e).mix(o,a)};class Yg extends yt{constructor(e,t=A(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return Jw(this.textureNode,this.blurNode)}}const Qw=z(Yg);U("bicubic",Qw);K("TextureBicubicNode",Yg);class $g extends Re{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}J($g);K("PointUVNode",$g);class xi extends Re{constructor(e=xi.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let s;return t===xi.BACKGROUND_BLURRINESS?s=Ti("backgroundBlurriness","float",n):t===xi.BACKGROUND_INTENSITY?s=Ti("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),s}}xi.BACKGROUND_BLURRINESS="backgroundBlurriness";xi.BACKGROUND_INTENSITY="backgroundIntensity";J(xi,xi.BACKGROUND_BLURRINESS);J(xi,xi.BACKGROUND_INTENSITY);K("SceneNode",xi);class eR extends Fc{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0,this.bufferObject=!1,this._attribute=null,this._varying=null,e.isStorageBufferAttribute!==!0&&e.isStorageInstancedBufferAttribute!==!0&&(e.isInstancedBufferAttribute?e.isStorageInstancedBufferAttribute=!0:e.isStorageBufferAttribute=!0)}getInputType(){return"storageBuffer"}element(e){return Gg(this,e)}setBufferObject(e){return this.bufferObject=e,this}generate(e){if(e.isAvailable("storageBuffer"))return super.generate(e);const t=this.getNodeType(e);this._attribute===null&&(this._attribute=Vc(this.value),this._varying=Ot(this._attribute));const n=this._varying.build(e,t);return e.registerTransform(n,this._attribute),n}}K("StorageBufferNode",eR);class Kg extends oo{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStoreTextureNode=!0}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:s}=t,r=super.generate(e,"property"),o=n.build(e,"uvec2"),a=s.build(e,"vec4"),c=e.generateTextureStore(e,r,o,a);e.addLineFlowCode(c)}}z(Kg);K("TextureStoreNode",Kg);class tR extends ao{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}K("UserDataNode",tR);const nR=j(({base:i,blend:e})=>{const t=n=>e[n].lessThan(Om).cond(e[n],i[n].oneMinus().div(e[n]).oneMinus().max(0));return D(t("x"),t("y"),t("z"))}).setLayout({name:"burnColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),iR=j(({base:i,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],i[n].div(e[n].oneMinus()).max(0));return D(t("x"),t("y"),t("z"))}).setLayout({name:"dodgeColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),sR=j(({base:i,blend:e})=>{const t=n=>i[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return D(t("x"),t("y"),t("z"))}).setLayout({name:"screenColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),rR=j(({base:i,blend:e})=>{const t=n=>i[n].lessThan(.5).cond(i[n].mul(e[n],2),i[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return D(t("x"),t("y"),t("z"))}).setLayout({name:"overlayColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]});class rn extends yt{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,s={base:t,blend:n};let r=null;return e===rn.BURN?r=nR(s):e===rn.DODGE?r=iR(s):e===rn.SCREEN?r=sR(s):e===rn.OVERLAY&&(r=rR(s)),r}}rn.BURN="burn";rn.DODGE="dodge";rn.SCREEN="screen";rn.OVERLAY="overlay";const oR=z(rn,rn.BURN),aR=z(rn,rn.DODGE),cR=z(rn,rn.OVERLAY),lR=z(rn,rn.SCREEN);U("burn",oR);U("dodge",aR);U("overlay",cR);U("screen",lR);K("BlendModeNode",rn);const uR=j(({textureNode:i,bumpScale:e})=>{const t=s=>i.cache().context({getUV:r=>s(r.uvNode||Bi()),forceUVContext:!0}),n=A(t(s=>s));return Ae(A(t(s=>s.add(s.dFdx()))).sub(n),A(t(s=>s.add(s.dFdy()))).sub(n)).mul(e)}),hR=j(i=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=i,s=e.dFdx().normalize(),r=e.dFdy().normalize(),o=t,a=r.cross(o),c=o.cross(s),l=s.dot(a).mul(pc),u=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()});class Zg extends yt{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=uR({textureNode:this.textureNode,bumpScale:e});return hR({surf_pos:Gn,surf_norm:Ss,dHdxy:t})}}const dR=z(Zg);U("bumpMap",dR);K("BumpMapNode",Zg);const fR=j(({color:i,adjustment:e})=>e.mix(Jg(i.rgb),i.rgb)),pR=j(({color:i,adjustment:e})=>{const t=qn(i.r,i.g,i.b).div(3),n=i.r.max(i.g.max(i.b)),s=n.sub(t).mul(e).mul(-3);return hn(i.rgb,n,s)}),mR=j(({color:i,adjustment:e})=>{const t=D(.57735,.57735,.57735),n=e.cos();return D(i.rgb.mul(n).add(t.cross(i.rgb).mul(e.sin()).add(t.mul(ro(t,i.rgb).mul(n.oneMinus())))))});class Un extends yt{constructor(e,t,n=A(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,s={color:t,adjustment:n};let r=null;return e===Un.SATURATION?r=fR(s):e===Un.VIBRANCE?r=pR(s):e===Un.HUE?r=mR(s):console.error(`${this.type}: Method "${this.method}" not supported!`),r}}Un.SATURATION="saturation";Un.VIBRANCE="vibrance";Un.HUE="hue";const gR=z(Un,Un.SATURATION),_R=z(Un,Un.VIBRANCE),xR=z(Un,Un.HUE),vR=D(.2125,.7154,.0721),Jg=(i,e=vR)=>ro(i,e),Qg=(i,e)=>hn(D(0),i,Jg(i).sub(e).max(0));U("saturation",gR);U("vibrance",_R);U("hue",xR);U("threshold",Qg);K("ColorAdjustmentNode",Un);const yR=j(i=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:s}=i,r=e.dFdx(),o=e.dFdy(),a=s.dFdx(),c=s.dFdy(),l=t,u=o.cross(l),h=l.cross(r),d=u.mul(a.x).add(h.mul(c.x)),f=u.mul(a.y).add(h.mul(c.y)),g=d.dot(d).max(f.dot(f)),_=pc.mul(g.inverseSqrt());return qn(d.mul(n.x,_),f.mul(n.y,_),l.mul(n.z)).normalize()});class e_ extends yt{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=js}setup(e){const{normalMapType:t,scaleNode:n}=this;let s=this.node.mul(2).sub(1);n!==null&&(s=D(s.xy.mul(n),s.z));let r=null;return t===Ap?r=Qm.mul(s).normalize():t===js&&(e.hasGeometryAttribute("tangent")===!0?r=Ar.mul(s).normalize():r=yR({eye_pos:Gn,surf_norm:Ss,mapN:s,uv:Bi()})),r}}const MR=z(e_);U("normalMap",MR);K("NormalMapNode",e_);class t_ extends yt{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const TR=z(t_);U("posterize",TR);K("PosterizeNode",t_);const SR=j(({color:i,exposure:e})=>i.mul(e).clamp()),ER=j(({color:i,exposure:e})=>(i=i.mul(e),i.div(i.add(1)).clamp())),AR=j(({color:i,exposure:e})=>{i=i.mul(e),i=i.sub(.004).max(0);const t=i.mul(i.mul(6.2).add(.5)),n=i.mul(i.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),bR=j(({color:i})=>{const e=i.mul(i.add(.0245786)).sub(90537e-9),t=i.mul(i.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),NR=j(({color:i,exposure:e})=>{const t=Mi(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=Mi(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return i=i.mul(e).div(.6),i=t.mul(i),i=bR({color:i}),i=n.mul(i),i.clamp()}),wR=Mi(D(1.6605,-.1246,-.0182),D(-.5876,1.1329,-.1006),D(-.0728,-.0083,1.1187)),RR=Mi(D(.6274,.0691,.0164),D(.3293,.9195,.088),D(.0433,.0113,.8956)),CR=j(([i])=>{const e=D(i).toVar(),t=D(e.mul(e)).toVar(),n=D(t.mul(t)).toVar();return A(15.5).mul(n.mul(t)).sub(it(40.14,n.mul(e))).add(it(31.96,n).sub(it(6.868,t.mul(e))).add(it(.4298,t).add(it(.1191,e).sub(.00232))))}),LR=j(({color:i,exposure:e})=>{const t=D(i).toVar(),n=Mi(D(.856627153315983,.137318972929847,.11189821299995),D(.0951212405381588,.761241990602591,.0767994186031903),D(.0482516061458583,.101439036467562,.811302368396859)),s=Mi(D(1.1271005818144368,-.1413297634984383,-.14132976349843826),D(-.11060664309660323,1.157823702216272,-.11060664309660294),D(-.016493938717834573,-.016493938717834257,1.2519364065950405)),r=A(-12.47393),o=A(4.026069);return t.mulAssign(e),t.assign(RR.mul(t)),t.assign(n.mul(t)),t.assign(jn(t,1e-10)),t.assign(Dc(t)),t.assign(t.sub(r).div(o.sub(r))),t.assign(Jr(t,0,1)),t.assign(CR(t)),t.assign(s.mul(t)),t.assign(Ii(jn(D(0),t),D(2.2))),t.assign(wR.mul(t)),t.assign(Jr(t,0,1)),t}),PR={[Du]:SR,[Uu]:ER,[Ou]:AR,[vc]:NR,[Fu]:LR};class n_ extends yt{constructor(e=ni,t=DR,n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===ni)return t;const s={exposure:this.exposureNode,color:t},r=PR[n];let o=null;return r?o=r(s):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),o=t),o}}const IR=(i,e,t)=>he(new n_(i,he(e),he(t))),DR=Zw("toneMappingExposure","float");U("toneMapping",(i,e,t)=>IR(e,t,i));K("ToneMappingNode",n_);let jl=null;class i_ extends oa{constructor(e=Xo,t=null){jl===null&&(jl=new qp),super(e,t,jl)}updateReference(){return this}}const UR=z(i_);U("viewportSharedTexture",UR);K("ViewportSharedTextureNode",i_);class Pu extends oo{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class aa extends yt{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const s=new ea;s.isRenderTargetTexture=!0,s.name="PostProcessingDepth";const r=new Ms(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ki});r.texture.name="PostProcessing",r.depthTexture=s,this.renderTarget=r,this.updateBeforeType=xt.FRAME,this._textureNode=he(new Pu(this,r.texture)),this._depthTextureNode=he(new Pu(this,s)),this._depthNode=null,this._viewZNode=null,this._cameraNear=vt(0),this._cameraFar=vt(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getViewZNode(){if(this._viewZNode===null){const e=this._cameraNear,t=this._cameraFar;this._viewZNode=Ag(this._depthTextureNode,e,t)}return this._viewZNode}getDepthNode(){if(this._depthNode===null){const e=this._cameraNear,t=this._cameraFar;this._depthNode=Nu(this.getViewZNode(),e,t)}return this._depthNode}setup(){return this.scope===aa.COLOR?this.getTextureNode():this.getDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:s}=this;this._pixelRatio=t.getPixelRatio();const r=t.getSize(new Me);this.setSize(r.width,r.height);const o=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget();this._cameraNear.value=s.near,this._cameraFar.value=s.far,t.toneMapping=ni,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,s),t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(c)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget.setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}aa.COLOR="color";aa.DEPTH="depth";const xh=(i,e)=>he(new Pu(i,e));K("PassNode",aa);const Yl=new Qo(-1,1,1,-1,0,1);class OR extends Rn{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ln(t,2))}}const FR=new OR;class Hc extends an{constructor(e=null){super(FR,e),this.camera=Yl}renderAsync(e){return e.renderAsync(this,Yl)}render(e){e.render(this,Yl)}}const sp=new Hc,rp=new Hc;class VR extends yt{constructor(e,t=2){super("vec4"),this.textureNode=e,this.sigma=t,this.directionNode=Ae(1),this._invSize=vt(new Me),this._passDirection=vt(new Me),this._horizontalRT=new Ms,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new Ms,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=xh(this,this._verticalRT.texture),this.updateBeforeType=xt.RENDER,this.resolution=new Me(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,r=t.getRenderTarget(),o=n.value;sp.material=this._material,rp.material=this._material,this.setSize(s.image.width,s.image.height);const a=s.type;this._horizontalRT.texture.type=a,this._verticalRT.texture.type=a,t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),sp.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),rp.render(t),t.setRenderTarget(r),n.value=o}getTextureNode(){return this._textureNode}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),Se();const n=t.uvNode||Bi(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=j(()=>{const c=3+2*this.sigma,l=this._getCoefficients(c),u=this._invSize,h=Ae(this.directionNode).mul(this._passDirection),d=A(l[0]).toVar(),f=Se(s(n).mul(d)).toVar();for(let g=1;g<c;g++){const _=A(g),m=A(l[g]),p=Ae(h.mul(u.mul(_))).toVar(),M=Se(s(n.add(p))),x=Se(s(n.sub(p)));f.addAssign(M.add(x).mul(m)),d.addAssign(it(2,m))}return f.div(d)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const BR=(i,e)=>he(new VR(he(i),e));U("gaussianBlur",BR);const op=new Hc;class zR extends yt{constructor(e,t=.96){super(e),this.textureNode=e,this.textureNodeOld=Dn(),this.damp=vt(t),this._compRT=new Ms,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new Ms,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=xh(this,this._compRT.texture),this.updateBeforeType=xt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._compRT.setSize(e,t),this._oldRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,r=s.type;this._compRT.texture.type=r,this._oldRT.texture.type=r;const o=t.getRenderTarget(),a=n.value;this.textureNodeOld.value=this._oldRT.texture,t.setRenderTarget(this._compRT),op.render(t);const c=this._oldRT;this._oldRT=this._compRT,this._compRT=c,this.setSize(s.image.width,s.image.height),t.setRenderTarget(o),n.value=a}setup(e){const t=this.textureNode,n=this.textureNodeOld;if(t.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),Se();const s=t.uvNode||Bi();n.uvNode=s;const r=u=>t.cache().context({getUV:()=>u,forceUVContext:!0}),o=j(([u,h])=>{const d=A(h).toVar(),f=Se(u).toVar();return jn(ph(f.sub(d)),0)}),a=j(()=>{const u=Se(n),h=Se(r(s));return u.mulAssign(this.damp.mul(o(u,.1))),jn(h,u)}),c=this._materialComposed||(this._materialComposed=e.createNodeMaterial());c.fragmentNode=a(),op.material=c;const l=e.getNodeProperties(this);return l.textureNode=t,this._textureNode}}const kR=(i,e)=>he(new zR(he(i),e));U("afterImage",kR);const ap=new Hc;class HR extends yt{constructor(e,t,n,s){super("vec4"),this.textureNode=e,this.tresholdNode=t,this.scaleNode=n,this.colorNode=D(.1,0,1),this.samples=s,this.resolution=new Me(1,1),this._renderTarget=new Ms,this._renderTarget.texture.name="anamorphic",this._invSize=vt(new Me),this._textureNode=xh(this,this._renderTarget.texture),this.updateBeforeType=xt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._invSize.value.set(1/e,1/t),e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value;this._renderTarget.texture.type=s.type;const r=t.getRenderTarget(),o=n.value;ap.material=this._material,this.setSize(s.image.width,s.image.height),t.setRenderTarget(this._renderTarget),ap.render(t),t.setRenderTarget(r),n.value=o}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),Se();const n=t.uvNode||Bi(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=j(()=>{const c=this.samples,l=Math.floor(c/2),u=D(0).toVar();return Et({start:-l,end:l},({i:h})=>{const d=A(h).abs().div(l).oneMinus(),f=Ae(n.x.add(this._invSize.x.mul(h).mul(this.scaleNode)),n.y),g=s(f),_=Qg(g,this.tresholdNode).mul(d);u.addAssign(_)}),u.mul(this.colorNode)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}}const GR=(i,e=.9,t=3,n=32)=>he(new HR(he(i),he(e),he(t),n));U("anamorphic",GR);class s_ extends yt{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,s=n.getInputs(e),r=this.parameters;if(Array.isArray(r))for(let a=0;a<r.length;a++){const c=s[a],l=r[a];t.push(l.build(e,c.type))}else for(const a of s){const c=r[a.name];if(c!==void 0)t.push(c.build(e,a.type));else throw new Error(`FunctionCallNode: Input '${a.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const WR=(i,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?Pr(e):Pc(e[0]),he(new s_(he(i),e)));U("call",WR);K("FunctionCallNode",s_);class r_ extends Re{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new As,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:A()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=fm(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=pm(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const ja=z(r_);U("scriptableValue",ja);K("ScriptableValueNode",r_);class o_ extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const s=t(...n);return this.set(e,s),s}}}class XR{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const $l=new o_;class a_ extends Re{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new o_,this._output=ja(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=ja(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=ja(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s(...t)}async callAsync(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s.constructor.name==="AsyncFunction"?await s(...t):s(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new XR(this),s=$l.get("THREE"),r=$l.get("TSL"),o=this.getMethod(this.codeNode),a=[n,this._local,$l,e,t,s,r];this._object=o(...a);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:A()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),s="var "+n+`; var output = {};
`,r=`
return { ...output, `+n+" };",o=s+this.codeNode.code+r;return this._method=new Function(...e,o),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const qR=z(a_);U("scriptable",qR);K("ScriptableNode",a_);class Gc extends Re{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}getViewZNode(e){let t;const n=e.context.getViewZ;return n!==void 0&&(t=n(this)),(t||Gn.z).negate()}setup(){return this.factorNode}}const jR=z(Gc);U("fog",jR);K("FogNode",Gc);class c_ extends Gc{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(e){const t=this.getViewZNode(e);return Qi(this.nearNode,this.farNode,t)}}const YR=z(c_);U("rangeFog",YR);K("FogRangeNode",c_);class l_ extends Gc{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(e){const t=this.getViewZNode(e),n=this.densityNode;return n.mul(n,t,t).negate().exp().oneMinus()}}const $R=z(l_);U("densityFog",$R);K("FogExp2Node",l_);let Os=null,Fs=null;class u_ extends Re{constructor(e=A(),t=A()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(_s(this.minNode.value)),n=e.getTypeLength(_s(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.isInstancedMesh===!0?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.isInstancedMesh===!0){const s=this.minNode.value,r=this.maxNode.value,o=e.getTypeLength(_s(s)),a=e.getTypeLength(_s(r));Os=Os||new nt,Fs=Fs||new nt,Os.setScalar(0),Fs.setScalar(0),o===1?Os.setScalar(s):s.isColor?Os.set(s.r,s.g,s.b):Os.set(s.x,s.y,s.z||0,s.w||0),a===1?Fs.setScalar(r):r.isColor?Fs.set(r.r,r.g,r.b):Fs.set(r.x,r.y,r.z||0,r.w||0);const c=4,l=c*t.count,u=new Float32Array(l);for(let d=0;d<l;d++){const f=d%c,g=Os.getComponent(f),_=Fs.getComponent(f);u[d]=zu.lerp(g,_,Math.random())}const h=this.getNodeType(e);n=mh(u,"vec4",t.count).element(Am).convert(h)}else n=A(0);return n}}z(u_);K("RangeNode",u_);class h_ extends Re{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=xt.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let s=1;s<t.length;s++)n*=t[s];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const KR=(i,e,t)=>he(new h_(he(i),e,t));U("compute",KR);K("ComputeNode",h_);class Zs extends Re{constructor(e=Zs.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===Zs.TARGET_DIRECTION&&(n=ts.transformDirection(Mu(t).sub(Mu(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Zs.TARGET_DIRECTION="targetDirection";const d_=z(Zs,Zs.TARGET_DIRECTION);K("LightNode",Zs);const f_=j(i=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=i,s=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(s.mul(e.div(t).pow4().oneMinus().clamp().pow2()),s)});class p_ extends tr{constructor(e=null){super(e),this.cutoffDistanceNode=vt(0),this.decayExponentNode=vt(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:s,light:r}=this,o=e.context.lightingModel,a=Jm(r).sub(Gn),c=a.normalize(),l=a.length(),u=f_({lightDistance:l,cutoffDistance:n,decayExponent:s}),h=t.mul(u),d=e.context.reflectedLight;o.direct({lightDirection:c,lightColor:h,reflectedLight:d,shadowMask:this.shadowMaskNode},e.stack,e)}}K("PointLightNode",p_);co(Zp,p_);class m_ extends tr{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,s=d_(this.light),r=e.context.reflectedLight;t.direct({lightDirection:s,lightColor:n,reflectedLight:r,shadowMask:this.shadowMaskNode},e.stack,e)}}K("DirectionalLightNode",m_);co(ko,m_);class vh extends tr{constructor(e=null){super(e),this.coneCosNode=vt(0),this.penumbraCosNode=vt(0),this.cutoffDistanceNode=vt(0),this.decayExponentNode=vt(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return Qi(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:s,decayExponentNode:r,light:o}=this,a=Jm(o).sub(Gn),c=a.normalize(),l=c.dot(d_(o)),u=this.getSpotAttenuation(l),h=a.length(),d=f_({lightDistance:h,cutoffDistance:s,decayExponent:r}),f=n.mul(u).mul(d),g=e.context.reflectedLight;t.direct({lightDirection:c,lightColor:f,reflectedLight:g,shadowMask:this.shadowMaskNode},e.stack,e)}}K("SpotLightNode",vh);co(Zu,vh);class g_ extends vh{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const s=e.acos().mul(1/Math.PI);n=Dn(t,Ae(s,0),0).r}else n=super.getSpotAttenuation(e);return n}}K("IESSpotLightNode",g_);co(SA,g_);class __ extends tr{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}K("AmbientLightNode",__);co(Jp,__);class x_ extends tr{constructor(e=null){super(e),this.lightPositionNode=Mu(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=vt(new be)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:s}=this,o=Ss.dot(s).mul(.5).add(.5),a=hn(n,t,o);e.context.irradiance.addAssign(a)}}K("HemisphereLightNode",x_);co(dE,x_);const ZR=j(i=>{const e=i.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class v_ extends yt{constructor(e=Bi()){super("float"),this.uvNode=e}setup(){return ZR({uv:this.uvNode})}}const JR=z(v_);U("checker",JR);K("CheckerNode",v_);const QR=new bc;class e1 extends Yn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(QR),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=j(()=>{Ot(Ae(),"vUv").assign(Bi());const n=vn("instancePosition"),s=on("vec4","mvPos");s.assign(Ks.mul(Se(n,1)));const r=Or.z.div(Or.w),o=Ri.mul(s),a=on("vec2","offset");return a.assign(Ln.xy),a.assign(a.mul(tw)),a.assign(a.div(Or.z)),a.y.assign(a.y.mul(r)),a.assign(a.mul(o.w)),o.assign(o.add(Se(a,0,0))),o})(),this.fragmentNode=j(()=>{const n=Ot(Ae(),"vUv"),s=on("float","alpha");s.assign(1);const r=n.x,o=n.y,a=r.mul(r).add(o.mul(o));if(e){const l=on("float","dlen");l.assign(a.fwidth()),s.assign(Qi(l.oneMinus(),l.add(1),a).oneMinus())}else a.greaterThan(1).discard();let c;return this.pointColorNode?c=this.pointColorNode:t?c=vn("instanceColor").mul(Wo):c=Wo,Se(c,s)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}Cn("InstancedPointsNodeMaterial",e1);const t1=new ta;class n1 extends Yn{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(t1),this.setValues(e)}}Cn("LineBasicNodeMaterial",n1);const i1=new Yp;class s1 extends Yn{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(i1),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?A(this.dashScaleNode):Tu,n=this.dashSizeNode?A(this.dashSizeNode):ig,s=this.dashSizeNode?A(this.dashGapNode):sg;Ur.assign(n),lc.assign(s);const r=Ot(vn("lineDistance").mul(t));(e?r.add(e):r).mod(Ur.add(lc)).greaterThan(Ur).discard()}}Cn("LineDashedNodeMaterial",s1);const r1=new Yp;class o1 extends Yn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(r1),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setup(e){this.setupShaders(),super.setup(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,s=this.worldUnits,r=j(({start:a,end:c})=>{const l=Ri.element(2).element(2),d=Ri.element(3).element(2).mul(-.5).div(l).sub(a.z).div(c.z.sub(a.z));return Se(hn(a.xyz,c.xyz,d),c.w)});this.vertexNode=j(()=>{Ni("vec2","vUv").assign(Bi());const a=vn("instanceStart"),c=vn("instanceEnd"),l=on("vec4","start"),u=on("vec4","end");l.assign(Ks.mul(Se(a,1))),u.assign(Ks.mul(Se(c,1))),s&&(Ni("vec3","worldStart").assign(l.xyz),Ni("vec3","worldEnd").assign(u.xyz));const h=Or.z.div(Or.w),d=Ri.element(2).element(3).equal(-1);Ke(d,()=>{Ke(l.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(r({start:l,end:u}))}).elseif(u.z.lessThan(0).and(l.z.greaterThanEqual(0)),()=>{l.assign(r({start:u,end:l}))})});const f=Ri.mul(l),g=Ri.mul(u),_=f.xyz.div(f.w),m=g.xyz.div(g.w),p=m.xy.sub(_.xy).temp();p.x.assign(p.x.mul(h)),p.assign(p.normalize());const M=Ho(Se());if(s){const x=u.xyz.sub(l.xyz).normalize(),S=hn(l.xyz,u.xyz,.5).normalize(),L=x.cross(S).normalize(),N=x.cross(L),b=Ni("vec4","worldPos");b.assign(Ln.y.lessThan(.5).cond(l,u));const B=Fl.mul(.5);b.addAssign(Se(Ln.x.lessThan(0).cond(L.mul(B),L.mul(B).negate()),0)),n||(b.addAssign(Se(Ln.y.lessThan(.5).cond(x.mul(B).negate(),x.mul(B)),0)),b.addAssign(Se(N.mul(B),0)),Ke(Ln.y.greaterThan(1).or(Ln.y.lessThan(0)),()=>{b.subAssign(Se(N.mul(2).mul(B),0))})),M.assign(Ri.mul(b));const E=Ho(D());E.assign(Ln.y.lessThan(.5).cond(_,m)),M.z.assign(E.z.mul(M.w))}else{const x=on("vec2","offset");x.assign(Ae(p.y,p.x.negate())),p.x.assign(p.x.div(h)),x.x.assign(x.x.div(h)),x.assign(Ln.x.lessThan(0).cond(x.negate(),x)),Ke(Ln.y.lessThan(0),()=>{x.assign(x.sub(p))}).elseif(Ln.y.greaterThan(1),()=>{x.assign(x.add(p))}),x.assign(x.mul(Fl)),x.assign(x.div(Or.w)),M.assign(Ln.y.lessThan(.5).cond(f,g)),x.assign(x.mul(M.w)),M.assign(M.add(Se(x,0,0)))}return M})();const o=j(({p1:a,p2:c,p3:l,p4:u})=>{const h=a.sub(l),d=u.sub(l),f=c.sub(a),g=h.dot(d),_=d.dot(f),m=h.dot(f),p=d.dot(d),x=f.dot(f).mul(p).sub(_.mul(_)),L=g.mul(_).sub(m.mul(p)).div(x).clamp(),N=g.add(_.mul(L)).div(p).clamp();return Ae(L,N)});this.fragmentNode=j(()=>{const a=Ni("vec2","vUv");if(n){const u=this.offsetNode?A(this.offsetNodeNode):Hf,h=this.dashScaleNode?A(this.dashScaleNode):Tu,d=this.dashSizeNode?A(this.dashSizeNode):ig,f=this.dashSizeNode?A(this.dashGapNode):sg;Ur.assign(d),lc.assign(f);const g=vn("instanceDistanceStart"),_=vn("instanceDistanceEnd"),m=Ln.y.lessThan(.5).cond(h.mul(g),Tu.mul(_)),p=Ot(m.add(Hf)),M=u?p.add(u):p;a.y.lessThan(-1).or(a.y.greaterThan(1)).discard(),M.mod(Ur.add(lc)).greaterThan(Ur).discard()}const c=on("float","alpha");if(c.assign(1),s){const u=Ni("vec3","worldStart"),h=Ni("vec3","worldEnd"),d=Ni("vec4","worldPos").xyz.normalize().mul(1e5),f=h.sub(u),g=o({p1:u,p2:h,p3:D(0,0,0),p4:d}),_=u.add(f.mul(g.x)),m=d.mul(g.y),x=_.sub(m).length().div(Fl);if(!n)if(e){const S=x.fwidth();c.assign(Qi(S.negate().add(.5),S.add(.5),x).oneMinus())}else x.greaterThan(.5).discard()}else if(e){const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1)),d=u.mul(u).add(h.mul(h)),f=on("float","dlen");f.assign(d.fwidth()),Ke(a.y.abs().greaterThan(1),()=>{c.assign(Qi(f.oneMinus(),f.add(1),d).oneMinus())})}else Ke(a.y.abs().greaterThan(1),()=>{const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1));u.mul(u).add(h.mul(h)).greaterThan(1).discard()});let l;if(this.lineColorNode)l=this.lineColorNode;else if(t){const u=vn("instanceColorStart"),h=vn("instanceColorEnd");l=Ln.y.lessThan(.5).cond(u,h).mul(Wo)}else l=Wo;return Se(l,c)})()}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.needsUpdate=!0)}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.needsUpdate=!0)}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.needsUpdate=!0)}}Cn("Line2NodeMaterial",o1);const a1=new ZS;class c1 extends Yn{constructor(e){super(),this.isMeshNormalNodeMaterial=!0,this.setDefaultValues(a1),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?A(this.opacityNode):ng;Lt.assign(Se(Vg(Ft),e))}}Cn("MeshNormalNodeMaterial",c1);const l1=new mi;class u1 extends Yn{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(l1),this.setValues(e)}}Cn("MeshBasicNodeMaterial",u1);const qo=j(({f0:i,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return i.mul(n.oneMinus()).add(e.mul(n))}),mc=j(i=>i.diffuseColor.mul(1/Math.PI)),h1=()=>A(.25),d1=j(({dotNH:i})=>_u.mul(A(.5)).add(1).mul(A(1/Math.PI)).mul(i.pow(_u))),f1=j(({lightDirection:i})=>{const e=i.add(Pt).normalize(),t=Ft.dot(e).clamp(),n=Pt.dot(e).clamp(),s=qo({f0:li,f90:1,dotVH:n}),r=h1(),o=d1({dotNH:t});return s.mul(r).mul(o)});class y_ extends ch{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Ft.dot(e).clamp().mul(t);n.directDiffuse.addAssign(r.mul(mc({diffuseColor:Lt.rgb}))),this.specular===!0&&n.directSpecular.addAssign(r.mul(f1({lightDirection:e})).mul(ON))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(mc({diffuseColor:Lt})))}}const p1=new JS;class m1 extends Yn{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(p1),this.setValues(e)}setupLightingModel(){return new y_(!1)}}Cn("MeshLambertNodeMaterial",m1);const g1=new KS;class _1 extends Yn{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(g1),this.setValues(e)}setupLightingModel(){return new y_}setupVariants(){const e=(this.shininessNode?A(this.shininessNode):PN).max(1e-4);_u.assign(e);const t=this.specularNode||DN;li.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}Cn("MeshPhongNodeMaterial",_1);const x1=j(()=>{const i=uc.dFdx().abs().max(uc.dFdy().abs());return i.x.max(i.y).max(i.z)}),v1=j(i=>{const{roughness:e}=i,t=x1();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),y1=j(({alpha:i,dotNL:e,dotNV:t})=>{const n=i.pow2(),s=e.mul(n.add(n.oneMinus().mul(t.pow2())).sqrt()),r=t.mul(n.add(n.oneMinus().mul(e.pow2())).sqrt());return Ts(.5,s.add(r).max(Om))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),M1=j(({alphaT:i,alphaB:e,dotTV:t,dotBV:n,dotTL:s,dotBL:r,dotNV:o,dotNL:a})=>{const c=a.mul(D(i.mul(t),e.mul(n),o).length()),l=o.mul(D(i.mul(s),e.mul(r),a).length());return Ts(.5,c.add(l)).saturate()}).setLayout({name:"V_GGX_SmithCorrelated_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotTV",type:"float",qualifier:"in"},{name:"dotBV",type:"float",qualifier:"in"},{name:"dotTL",type:"float",qualifier:"in"},{name:"dotBL",type:"float",qualifier:"in"},{name:"dotNV",type:"float",qualifier:"in"},{name:"dotNL",type:"float",qualifier:"in"}]}),T1=j(({alpha:i,dotNH:e})=>{const t=i.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),S1=A(1/Math.PI),E1=j(({alphaT:i,alphaB:e,dotNH:t,dotTH:n,dotBH:s})=>{const r=i.mul(e),o=D(e.mul(n),i.mul(s),r.mul(t)),a=o.dot(o),c=r.div(a);return S1.mul(r.mul(c.pow2()))}).setLayout({name:"D_GGX_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotNH",type:"float",qualifier:"in"},{name:"dotTH",type:"float",qualifier:"in"},{name:"dotBH",type:"float",qualifier:"in"}]}),cp=j(i=>{const{lightDirection:e,f0:t,f90:n,roughness:s,f:r,USE_IRIDESCENCE:o,USE_ANISOTROPY:a}=i,c=i.normalView||Ft,l=s.pow2(),u=e.add(Pt).normalize(),h=c.dot(e).clamp(),d=c.dot(Pt).clamp(),f=c.dot(u).clamp(),g=Pt.dot(u).clamp();let _=qo({f0:t,f90:n,dotVH:g}),m,p;if(Of(o)&&(_=uh.mix(_,r)),Of(a)){const M=Xa.dot(e),x=Xa.dot(Pt),S=Xa.dot(u),L=Dr.dot(e),N=Dr.dot(Pt),b=Dr.dot(u);m=M1({alphaT:gu,alphaB:l,dotTV:x,dotBV:N,dotTL:M,dotBL:L,dotNV:d,dotNL:h}),p=E1({alphaT:gu,alphaB:l,dotNH:f,dotTH:S,dotBH:b})}else m=y1({alpha:l,dotNL:h,dotNV:d}),p=T1({alpha:l,dotNH:f});return _.mul(m).mul(p)}),M_=j(({roughness:i,dotNV:e})=>{const t=Se(-1,-.0275,-.572,.022),n=Se(1,.0425,1.04,-.04),s=i.mul(t).add(n),r=s.x.mul(s.x).min(e.mul(-9.28).exp2()).mul(s.x).add(s.y);return Ae(-1.04,1.04).mul(r).add(s.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),T_=j(i=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:s}=i,r=M_({dotNV:e,roughness:s});return t.mul(r.x).add(n.mul(r.y))}),A1=j(({f:i,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),s=n.mul(n),r=n.mul(s,s).clamp(0,.9999);return i.sub(D(e).mul(r)).div(r.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),b1=j(({roughness:i,dotNH:e})=>{const t=i.pow2(),n=A(1).div(t),r=e.pow2().oneMinus().max(.0078125);return A(2).add(n).mul(r.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),N1=j(({dotNV:i,dotNL:e})=>A(1).div(A(4).mul(e.add(i).sub(e.mul(i))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),w1=j(({lightDirection:i})=>{const e=i.add(Pt).normalize(),t=Ft.dot(i).clamp(),n=Ft.dot(Pt).clamp(),s=Ft.dot(e).clamp(),r=b1({roughness:lh,dotNH:s}),o=N1({dotNV:n,dotNL:t});return Sr.mul(r).mul(o)}),R1=j(([i,e,t,n,s])=>{const r=D(Wm(e.negate(),wn(i),Ts(1,n))),o=D(Uo(s[0].xyz),Uo(s[1].xyz),Uo(s[2].xyz));return wn(r).mul(t.mul(o))}).setLayout({name:"getVolumeTransmissionRay",type:"vec3",inputs:[{name:"n",type:"vec3"},{name:"v",type:"vec3"},{name:"thickness",type:"float"},{name:"ior",type:"float"},{name:"modelMatrix",type:"mat4"}]}),C1=j(([i,e])=>i.mul(Jr(e.mul(2).sub(2),0,1))).setLayout({name:"applyIorToRoughness",type:"float",inputs:[{name:"roughness",type:"float"},{name:"ior",type:"float"}]}),L1=Tg(),P1=j(([i,e,t])=>{const n=L1.uv(i),s=Dc(A(bu.x)).mul(C1(e,t));return n.bicubic(s)}),I1=j(([i,e,t])=>(Ke(t.notEqual(0),()=>{const n=Bm(e).negate().div(t);return Vm(n.negate().mul(i))}),D(1))).setLayout({name:"volumeAttenuation",type:"vec3",inputs:[{name:"transmissionDistance",type:"float"},{name:"attenuationColor",type:"vec3"},{name:"attenuationDistance",type:"float"}]}),D1=j(([i,e,t,n,s,r,o,a,c,l,u,h,d,f])=>{const g=R1(i,e,h,u,a),_=o.add(g),m=l.mul(c.mul(Se(_,1))),p=Ae(m.xy.div(m.w)).toVar();p.addAssign(1),p.divAssign(2),p.assign(Ae(p.x,p.y.oneMinus()));const M=P1(p,t,u),x=n.mul(I1(Uo(g),d,f)),S=x.rgb.mul(M.rgb),L=i.dot(e).clamp(),N=D(T_({dotNV:L,specularColor:s,specularF90:r,roughness:t})),b=x.r.add(x.g,x.b).div(3);return Se(N.oneMinus().mul(S),M.a.oneMinus().mul(b).oneMinus())}),U1=Mi(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),O1=i=>{const e=i.sqrt();return D(1).add(e).div(D(1).sub(e))},lp=(i,e)=>i.sub(e).div(i.add(e)).pow2(),F1=(i,e)=>{const t=i.mul(2*Math.PI*1e-9),n=D(54856e-17,44201e-17,52481e-17),s=D(1681e3,1795300,2208400),r=D(43278e5,93046e5,66121e5),o=A(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let a=n.mul(r.mul(2*Math.PI).sqrt()).mul(s.mul(t).add(e).cos()).mul(t.pow2().negate().mul(r).exp());return a=D(a.x.add(o),a.y,a.z).div(10685e-11),U1.mul(a)},V1=j(({outsideIOR:i,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:s})=>{const r=hn(i,e,Qi(0,.03,n)),o=i.div(r).pow2().mul(A(1).sub(t.pow2())),c=A(1).sub(o).sqrt(),l=lp(r,i),u=qo({f0:l,f90:1,dotVH:t}),h=u.oneMinus(),d=r.lessThan(i).cond(Math.PI,0),f=A(Math.PI).sub(d),g=O1(s.clamp(0,.9999)),_=lp(g,r.vec3()),m=qo({f0:_,f90:1,dotVH:c}),p=D(g.x.lessThan(r).cond(Math.PI,0),g.y.lessThan(r).cond(Math.PI,0),g.z.lessThan(r).cond(Math.PI,0)),M=r.mul(n,c,2),x=D(f).add(p),S=u.mul(m).clamp(1e-5,.9999),L=S.sqrt(),N=h.pow2().mul(m).div(D(1).sub(S));let B=u.add(N),E=N.sub(h);for(let v=1;v<=2;++v){E=E.mul(L);const G=F1(A(v).mul(M),A(v).mul(x)).mul(2);B=B.add(E.mul(G))}return B.max(D(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),B1=j(({normal:i,viewDir:e,roughness:t})=>{const n=i.dot(e).saturate(),s=t.pow2(),r=Wn(t.lessThan(.25),A(-339.2).mul(s).add(A(161.4).mul(t)).sub(25.9),A(-8.48).mul(s).add(A(14.3).mul(t)).sub(9.95)),o=Wn(t.lessThan(.25),A(44).mul(s).sub(A(23.7).mul(t)).add(3.26),A(1.97).mul(s).sub(A(3.27).mul(t)).add(.72));return Wn(t.lessThan(.25),0,A(.1).mul(t).sub(.025)).add(r.mul(n).add(o).exp()).mul(1/Math.PI).saturate()}),Kl=D(.04),Zl=D(1);class yh extends ch{constructor(e=!1,t=!1,n=!1,s=!1,r=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.anisotropy=s,this.transmission=r,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(e){if(this.clearcoat===!0&&(this.clearcoatRadiance=D().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=D().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=D().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=D().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=D().temp("sheenSpecularIndirect")),this.iridescence===!0){const t=Ft.dot(Pt).clamp();this.iridescenceFresnel=V1({outsideIOR:A(1),eta2:Nm,cosTheta1:t,thinFilmThickness:wm,baseF0:li}),this.iridescenceF0=A1({f:this.iridescenceFresnel,f90:1,dotVH:t})}if(this.transmission===!0){const t=Su,n=CN.sub(Su).normalize(),s=tg;e.backdrop=D1(s,n,xs,Lt,li,cc,t,Go,ts,Ri,qa,Rm,Lm,Cm),e.backdropAlpha=xu,Lt.a.mulAssign(hn(1,e.backdrop.a,xu))}}computeMultiscattering(e,t,n){const s=Ft.dot(Pt).clamp(),r=M_({roughness:xs,dotNV:s}),a=(this.iridescenceF0?uh.mix(li,this.iridescenceF0):li).mul(r.x).add(n.mul(r.y)),l=r.x.add(r.y).oneMinus(),u=li.add(li.oneMinus().mul(.047619)),h=a.mul(u).div(l.mul(u).oneMinus());e.addAssign(a),t.addAssign(h.mul(l))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Ft.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(r.mul(w1({lightDirection:e}))),this.clearcoat===!0){const a=Er.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(a.mul(cp({lightDirection:e,f0:Kl,f90:Zl,roughness:ac,normalView:Er})))}n.directDiffuse.addAssign(r.mul(mc({diffuseColor:Lt.rgb}))),n.directSpecular.addAssign(r.mul(cp({lightDirection:e,f0:li,f90:1,roughness:xs,iridescence:this.iridescence,f:this.iridescenceFresnel,USE_IRIDESCENCE:this.iridescence,USE_ANISOTROPY:this.anisotropy})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(mc({diffuseColor:Lt})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul(Sr,B1({normal:Ft,viewDir:Pt,roughness:lh}))),this.clearcoat===!0){const l=Er.dot(Pt).clamp(),u=T_({dotNV:l,specularColor:Kl,specularF90:Zl,roughness:ac});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const s=D().temp("singleScattering"),r=D().temp("multiScattering"),o=t.mul(1/Math.PI);this.computeMultiscattering(s,r,cc);const a=s.add(r),c=Lt.mul(a.r.max(a.g).max(a.b).oneMinus());n.indirectSpecular.addAssign(e.mul(s)),n.indirectSpecular.addAssign(r.mul(o)),n.indirectDiffuse.addAssign(c.mul(o))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const s=Ft.dot(Pt).clamp().add(e),r=xs.mul(-16).oneMinus().negate().exp2(),o=e.sub(s.pow(r).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(o)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=Er.dot(Pt).clamp(),s=qo({dotVH:n,f0:Kl,f90:Zl}),r=t.mul(mu.mul(s).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(mu));t.assign(r)}if(this.sheen===!0){const n=Sr.r.max(Sr.g).max(Sr.b).mul(.157).oneMinus(),s=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(s)}}}const z1=new Nc;class S_ extends Yn{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(z1),this.setValues(e)}setupLightingModel(){return new yh}setupSpecular(){const e=hn(D(.04),Lt.rgb,oc);li.assign(e),cc.assign(1)}setupVariants(){const e=this.metalnessNode?A(this.metalnessNode):VN;oc.assign(e);let t=this.roughnessNode?A(this.roughnessNode):FN;t=v1({roughness:t}),xs.assign(t),this.setupSpecular(),Lt.assign(Se(Lt.rgb.mul(e.oneMinus()),Lt.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}Cn("MeshStandardNodeMaterial",S_);const k1=new Ei;class E_ extends S_{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.iorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.anisotropyNode=null,this.setDefaultValues(k1),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}get useAnisotropy(){return this.anisotropy>0||this.anisotropyNode!==null}get useTransmission(){return this.transmission>0||this.transmissionNode!==null}setupSpecular(){const e=this.iorNode?A(this.iorNode):JN;qa.assign(e),li.assign(hn(Zr(Gm(qa.sub(1).div(qa.add(1))).mul(UN),D(1)).mul(kf),Lt.rgb,oc)),cc.assign(hn(kf,1,oc))}setupLightingModel(){return new yh(this.useClearcoat,this.useSheen,this.useIridescence,this.useAnisotropy,this.useTransmission)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?A(this.clearcoatNode):zN,n=this.clearcoatRoughnessNode?A(this.clearcoatRoughnessNode):kN;mu.assign(t),ac.assign(n)}if(this.useSheen){const t=this.sheenNode?D(this.sheenNode):WN,n=this.sheenRoughnessNode?A(this.sheenRoughnessNode):XN;Sr.assign(t),lh.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?A(this.iridescenceNode):jN,n=this.iridescenceIORNode?A(this.iridescenceIORNode):YN,s=this.iridescenceThicknessNode?A(this.iridescenceThicknessNode):$N;uh.assign(t),Nm.assign(n),wm.assign(s)}if(this.useAnisotropy){const t=(this.anisotropyNode?Ae(this.anisotropyNode):qN).toVar();Bs.assign(t.length()),Ke(Bs.equal(0),()=>{t.assign(Ae(1,0))}).else(()=>{t.divAssign(Bs),Bs.assign(Bs.saturate())}),gu.assign(Bs.pow2().mix(xs.pow2(),1)),Xa.assign(Ar[0].mul(t.x).add(Ar[1].mul(t.y))),Dr.assign(Ar[1].mul(t.x).sub(Ar[0].mul(t.y)))}if(this.useTransmission){const t=this.transmissionNode?A(this.transmissionNode):KN,n=this.thicknessNode?A(this.thicknessNode):ZN,s=this.attenuationDistanceNode?A(this.attenuationDistanceNode):QN,r=this.attenuationColorNode?D(this.attenuationColorNode):ew;xu.assign(t),Rm.assign(n),Cm.assign(s),Lm.assign(r)}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?D(this.clearcoatNormalNode):HN;Er.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,this.anisotropyNode=e.anisotropyNode,super.copy(e)}}Cn("MeshPhysicalNodeMaterial",E_);class H1 extends yh{constructor(e,t,n,s){super(e,t,n),this.useSSS=s}direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r){if(this.useSSS===!0){const o=r.material,{thicknessColorNode:a,thicknessDistortionNode:c,thicknessAmbientNode:l,thicknessAttenuationNode:u,thicknessPowerNode:h,thicknessScaleNode:d}=o,f=e.add(Ft.mul(c)).normalize(),g=A(Pt.dot(f.negate()).saturate().pow(h).mul(d)),_=D(g.add(l).mul(a));n.directDiffuse.addAssign(_.mul(u.mul(t)))}super.direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r)}}class G1 extends E_{constructor(e){super(e),this.thicknessColorNode=null,this.thicknessDistortionNode=A(.1),this.thicknessAmbientNode=A(0),this.thicknessAttenuationNode=A(.1),this.thicknessPowerNode=A(2),this.thicknessScaleNode=A(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new H1(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(e){return this.thicknessColorNode=e.thicknessColorNode,this.thicknessDistortionNode=e.thicknessDistortionNode,this.thicknessAmbientNode=e.thicknessAmbientNode,this.thicknessAttenuationNode=e.thicknessAttenuationNode,this.thicknessPowerNode=e.thicknessPowerNode,this.thicknessScaleNode=e.thicknessScaleNode,super.copy(e)}}Cn("MeshSSSNodeMaterial",G1);const W1=new bc;class X1 extends Yn{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(W1),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}Cn("PointsNodeMaterial",X1);const q1=new BS;class j1 extends Yn{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(q1),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:s,scaleNode:r}=this,o=Mn;let a=Ks.mul(D(n||0)),c=Ae(Go[0].xyz.length(),Go[1].xyz.length());r!==null&&(c=c.mul(r));let l=o.xy;e.center&&e.center.isVector2===!0&&(l=l.sub(vt(e.center).sub(.5))),l=l.mul(c);const u=A(s||GN),h=l.rotate(u);a=Se(a.xy.add(h),a.zw);const d=Ri.mul(a);return t.vertex=o,d}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}Cn("SpriteNodeMaterial",j1);class Y1 extends ch{constructor(){super(),this.shadowNode=A(1).toVar("shadowMask")}direct({shadowMask:e}){this.shadowNode.mulAssign(e)}finish(e){Lt.a.mulAssign(this.shadowNode.oneMinus()),e.outgoingLight.rgb.assign(Lt.rgb)}}const $1=new YS;class K1 extends Yn{constructor(e){super(),this.isShadowNodeMaterial=!0,this.lights=!0,this.setDefaultValues($1),this.setValues(e)}setupLightingModel(){return new Y1}}Cn("ShadowNodeMaterial",K1);const Fr=j(([i,e,t])=>{const n=A(t).toVar(),s=A(e).toVar(),r=$s(i).toVar();return Wn(r,s,n)}),jo=j(([i,e])=>{const t=$s(e).toVar(),n=A(i).toVar();return Wn(t,n.negate(),n)}),Vt=j(([i])=>{const e=A(i).toVar();return R(so(e))}),wt=j(([i,e])=>{const t=A(i).toVar();return e.assign(Vt(t)),t.sub(A(e))}),A_=j(([i,e,t,n,s,r])=>{const o=A(r).toVar(),a=A(s).toVar(),c=A(n).toVar(),l=A(t).toVar(),u=A(e).toVar(),h=A(i).toVar(),d=A(zt(1,a)).toVar();return zt(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),b_=j(([i,e,t,n,s,r])=>{const o=A(r).toVar(),a=A(s).toVar(),c=D(n).toVar(),l=D(t).toVar(),u=D(e).toVar(),h=D(i).toVar(),d=A(zt(1,a)).toVar();return zt(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),N_=ri([A_,b_]),w_=j(([i,e,t,n,s,r,o,a,c,l,u])=>{const h=A(u).toVar(),d=A(l).toVar(),f=A(c).toVar(),g=A(a).toVar(),_=A(o).toVar(),m=A(r).toVar(),p=A(s).toVar(),M=A(n).toVar(),x=A(t).toVar(),S=A(e).toVar(),L=A(i).toVar(),N=A(zt(1,f)).toVar(),b=A(zt(1,d)).toVar();return A(zt(1,h)).toVar().mul(b.mul(L.mul(N).add(S.mul(f))).add(d.mul(x.mul(N).add(M.mul(f))))).add(h.mul(b.mul(p.mul(N).add(m.mul(f))).add(d.mul(_.mul(N).add(g.mul(f))))))}),R_=j(([i,e,t,n,s,r,o,a,c,l,u])=>{const h=A(u).toVar(),d=A(l).toVar(),f=A(c).toVar(),g=D(a).toVar(),_=D(o).toVar(),m=D(r).toVar(),p=D(s).toVar(),M=D(n).toVar(),x=D(t).toVar(),S=D(e).toVar(),L=D(i).toVar(),N=A(zt(1,f)).toVar(),b=A(zt(1,d)).toVar();return A(zt(1,h)).toVar().mul(b.mul(L.mul(N).add(S.mul(f))).add(d.mul(x.mul(N).add(M.mul(f))))).add(h.mul(b.mul(p.mul(N).add(m.mul(f))).add(d.mul(_.mul(N).add(g.mul(f))))))}),C_=ri([w_,R_]),L_=j(([i,e,t])=>{const n=A(t).toVar(),s=A(e).toVar(),r=fe(i).toVar(),o=fe(r.bitAnd(fe(7))).toVar(),a=A(Fr(o.lessThan(fe(4)),s,n)).toVar(),c=A(it(2,Fr(o.lessThan(fe(4)),n,s))).toVar();return jo(a,$s(o.bitAnd(fe(1)))).add(jo(c,$s(o.bitAnd(fe(2)))))}),P_=j(([i,e,t,n])=>{const s=A(n).toVar(),r=A(t).toVar(),o=A(e).toVar(),a=fe(i).toVar(),c=fe(a.bitAnd(fe(15))).toVar(),l=A(Fr(c.lessThan(fe(8)),o,r)).toVar(),u=A(Fr(c.lessThan(fe(4)),r,Fr(c.equal(fe(12)).or(c.equal(fe(14))),o,s))).toVar();return jo(l,$s(c.bitAnd(fe(1)))).add(jo(u,$s(c.bitAnd(fe(2)))))}),nn=ri([L_,P_]),I_=j(([i,e,t])=>{const n=A(t).toVar(),s=A(e).toVar(),r=sa(i).toVar();return D(nn(r.x,s,n),nn(r.y,s,n),nn(r.z,s,n))}),D_=j(([i,e,t,n])=>{const s=A(n).toVar(),r=A(t).toVar(),o=A(e).toVar(),a=sa(i).toVar();return D(nn(a.x,o,r,s),nn(a.y,o,r,s),nn(a.z,o,r,s))}),Jn=ri([I_,D_]),U_=j(([i])=>{const e=A(i).toVar();return it(.6616,e)}),O_=j(([i])=>{const e=A(i).toVar();return it(.982,e)}),F_=j(([i])=>{const e=D(i).toVar();return it(.6616,e)}),V_=ri([U_,F_]),B_=j(([i])=>{const e=D(i).toVar();return it(.982,e)}),z_=ri([O_,B_]),Pn=j(([i,e])=>{const t=R(e).toVar(),n=fe(i).toVar();return n.shiftLeft(t).bitOr(n.shiftRight(R(32).sub(t)))}),k_=j(([i,e,t])=>{i.subAssign(t),i.bitXorAssign(Pn(t,R(4))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(Pn(i,R(6))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(Pn(e,R(8))),e.addAssign(i),i.subAssign(t),i.bitXorAssign(Pn(t,R(16))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(Pn(i,R(19))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(Pn(e,R(4))),e.addAssign(i)}),lo=j(([i,e,t])=>{const n=fe(t).toVar(),s=fe(e).toVar(),r=fe(i).toVar();return n.bitXorAssign(s),n.subAssign(Pn(s,R(14))),r.bitXorAssign(n),r.subAssign(Pn(n,R(11))),s.bitXorAssign(r),s.subAssign(Pn(r,R(25))),n.bitXorAssign(s),n.subAssign(Pn(s,R(16))),r.bitXorAssign(n),r.subAssign(Pn(n,R(4))),s.bitXorAssign(r),s.subAssign(Pn(r,R(14))),n.bitXorAssign(s),n.subAssign(Pn(s,R(24))),n}),un=j(([i])=>{const e=fe(i).toVar();return A(e).div(A(fe(R(4294967295))))}),vi=j(([i])=>{const e=A(i).toVar();return e.mul(e.mul(e.mul(e.mul(e.mul(6).sub(15)).add(10))))}),H_=j(([i])=>{const e=R(i).toVar(),t=fe(fe(1)).toVar(),n=fe(fe(R(3735928559)).add(t.shiftLeft(fe(2)).add(fe(13)))).toVar();return lo(n.add(fe(e)),n,n)}),G_=j(([i,e])=>{const t=R(e).toVar(),n=R(i).toVar(),s=fe(fe(2)).toVar(),r=fe().toVar(),o=fe().toVar(),a=fe().toVar();return r.assign(o.assign(a.assign(fe(R(3735928559)).add(s.shiftLeft(fe(2)).add(fe(13)))))),r.addAssign(fe(n)),o.addAssign(fe(t)),lo(r,o,a)}),W_=j(([i,e,t])=>{const n=R(t).toVar(),s=R(e).toVar(),r=R(i).toVar(),o=fe(fe(3)).toVar(),a=fe().toVar(),c=fe().toVar(),l=fe().toVar();return a.assign(c.assign(l.assign(fe(R(3735928559)).add(o.shiftLeft(fe(2)).add(fe(13)))))),a.addAssign(fe(r)),c.addAssign(fe(s)),l.addAssign(fe(n)),lo(a,c,l)}),X_=j(([i,e,t,n])=>{const s=R(n).toVar(),r=R(t).toVar(),o=R(e).toVar(),a=R(i).toVar(),c=fe(fe(4)).toVar(),l=fe().toVar(),u=fe().toVar(),h=fe().toVar();return l.assign(u.assign(h.assign(fe(R(3735928559)).add(c.shiftLeft(fe(2)).add(fe(13)))))),l.addAssign(fe(a)),u.addAssign(fe(o)),h.addAssign(fe(r)),k_(l,u,h),l.addAssign(fe(s)),lo(l,u,h)}),q_=j(([i,e,t,n,s])=>{const r=R(s).toVar(),o=R(n).toVar(),a=R(t).toVar(),c=R(e).toVar(),l=R(i).toVar(),u=fe(fe(5)).toVar(),h=fe().toVar(),d=fe().toVar(),f=fe().toVar();return h.assign(d.assign(f.assign(fe(R(3735928559)).add(u.shiftLeft(fe(2)).add(fe(13)))))),h.addAssign(fe(l)),d.addAssign(fe(c)),f.addAssign(fe(a)),k_(h,d,f),h.addAssign(fe(o)),d.addAssign(fe(r)),lo(h,d,f)}),ht=ri([H_,G_,W_,X_,q_]),j_=j(([i,e])=>{const t=R(e).toVar(),n=R(i).toVar(),s=fe(ht(n,t)).toVar(),r=sa().toVar();return r.x.assign(s.bitAnd(R(255))),r.y.assign(s.shiftRight(R(8)).bitAnd(R(255))),r.z.assign(s.shiftRight(R(16)).bitAnd(R(255))),r}),Y_=j(([i,e,t])=>{const n=R(t).toVar(),s=R(e).toVar(),r=R(i).toVar(),o=fe(ht(r,s,n)).toVar(),a=sa().toVar();return a.x.assign(o.bitAnd(R(255))),a.y.assign(o.shiftRight(R(8)).bitAnd(R(255))),a.z.assign(o.shiftRight(R(16)).bitAnd(R(255))),a}),Qn=ri([j_,Y_]),$_=j(([i])=>{const e=Ae(i).toVar(),t=R().toVar(),n=R().toVar(),s=A(wt(e.x,t)).toVar(),r=A(wt(e.y,n)).toVar(),o=A(vi(s)).toVar(),a=A(vi(r)).toVar(),c=A(N_(nn(ht(t,n),s,r),nn(ht(t.add(R(1)),n),s.sub(1),r),nn(ht(t,n.add(R(1))),s,r.sub(1)),nn(ht(t.add(R(1)),n.add(R(1))),s.sub(1),r.sub(1)),o,a)).toVar();return V_(c)}),K_=j(([i])=>{const e=D(i).toVar(),t=R().toVar(),n=R().toVar(),s=R().toVar(),r=A(wt(e.x,t)).toVar(),o=A(wt(e.y,n)).toVar(),a=A(wt(e.z,s)).toVar(),c=A(vi(r)).toVar(),l=A(vi(o)).toVar(),u=A(vi(a)).toVar(),h=A(C_(nn(ht(t,n,s),r,o,a),nn(ht(t.add(R(1)),n,s),r.sub(1),o,a),nn(ht(t,n.add(R(1)),s),r,o.sub(1),a),nn(ht(t.add(R(1)),n.add(R(1)),s),r.sub(1),o.sub(1),a),nn(ht(t,n,s.add(R(1))),r,o,a.sub(1)),nn(ht(t.add(R(1)),n,s.add(R(1))),r.sub(1),o,a.sub(1)),nn(ht(t,n.add(R(1)),s.add(R(1))),r,o.sub(1),a.sub(1)),nn(ht(t.add(R(1)),n.add(R(1)),s.add(R(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return z_(h)}),Z1=ri([$_,K_]),Z_=j(([i])=>{const e=Ae(i).toVar(),t=R().toVar(),n=R().toVar(),s=A(wt(e.x,t)).toVar(),r=A(wt(e.y,n)).toVar(),o=A(vi(s)).toVar(),a=A(vi(r)).toVar(),c=D(N_(Jn(Qn(t,n),s,r),Jn(Qn(t.add(R(1)),n),s.sub(1),r),Jn(Qn(t,n.add(R(1))),s,r.sub(1)),Jn(Qn(t.add(R(1)),n.add(R(1))),s.sub(1),r.sub(1)),o,a)).toVar();return V_(c)}),J_=j(([i])=>{const e=D(i).toVar(),t=R().toVar(),n=R().toVar(),s=R().toVar(),r=A(wt(e.x,t)).toVar(),o=A(wt(e.y,n)).toVar(),a=A(wt(e.z,s)).toVar(),c=A(vi(r)).toVar(),l=A(vi(o)).toVar(),u=A(vi(a)).toVar(),h=D(C_(Jn(Qn(t,n,s),r,o,a),Jn(Qn(t.add(R(1)),n,s),r.sub(1),o,a),Jn(Qn(t,n.add(R(1)),s),r,o.sub(1),a),Jn(Qn(t.add(R(1)),n.add(R(1)),s),r.sub(1),o.sub(1),a),Jn(Qn(t,n,s.add(R(1))),r,o,a.sub(1)),Jn(Qn(t.add(R(1)),n,s.add(R(1))),r.sub(1),o,a.sub(1)),Jn(Qn(t,n.add(R(1)),s.add(R(1))),r,o.sub(1),a.sub(1)),Jn(Qn(t.add(R(1)),n.add(R(1)),s.add(R(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return z_(h)}),J1=ri([Z_,J_]),Q1=j(([i])=>{const e=A(i).toVar(),t=R(Vt(e)).toVar();return un(ht(t))}),eC=j(([i])=>{const e=Ae(i).toVar(),t=R(Vt(e.x)).toVar(),n=R(Vt(e.y)).toVar();return un(ht(t,n))}),tC=j(([i])=>{const e=D(i).toVar(),t=R(Vt(e.x)).toVar(),n=R(Vt(e.y)).toVar(),s=R(Vt(e.z)).toVar();return un(ht(t,n,s))}),nC=j(([i])=>{const e=Se(i).toVar(),t=R(Vt(e.x)).toVar(),n=R(Vt(e.y)).toVar(),s=R(Vt(e.z)).toVar(),r=R(Vt(e.w)).toVar();return un(ht(t,n,s,r))}),Q_=j(([i])=>{const e=A(i).toVar(),t=R(Vt(e)).toVar();return D(un(ht(t,R(0))),un(ht(t,R(1))),un(ht(t,R(2))))}),ex=j(([i])=>{const e=Ae(i).toVar(),t=R(Vt(e.x)).toVar(),n=R(Vt(e.y)).toVar();return D(un(ht(t,n,R(0))),un(ht(t,n,R(1))),un(ht(t,n,R(2))))}),tx=j(([i])=>{const e=D(i).toVar(),t=R(Vt(e.x)).toVar(),n=R(Vt(e.y)).toVar(),s=R(Vt(e.z)).toVar();return D(un(ht(t,n,s,R(0))),un(ht(t,n,s,R(1))),un(ht(t,n,s,R(2))))}),nx=j(([i])=>{const e=Se(i).toVar(),t=R(Vt(e.x)).toVar(),n=R(Vt(e.y)).toVar(),s=R(Vt(e.z)).toVar(),r=R(Vt(e.w)).toVar();return D(un(ht(t,n,s,r,R(0))),un(ht(t,n,s,r,R(1))),un(ht(t,n,s,r,R(2))))}),ix=ri([Q_,ex,tx,nx]),gc=j(([i,e,t,n])=>{const s=A(n).toVar(),r=A(t).toVar(),o=R(e).toVar(),a=D(i).toVar(),c=A(0).toVar(),l=A(1).toVar();return Et({start:R(0),end:o},({i:u})=>{c.addAssign(l.mul(Z1(a))),l.mulAssign(s),a.mulAssign(r)}),c}),sx=j(([i,e,t,n])=>{const s=A(n).toVar(),r=A(t).toVar(),o=R(e).toVar(),a=D(i).toVar(),c=D(0).toVar(),l=A(1).toVar();return Et({start:R(0),end:o},({i:u})=>{c.addAssign(l.mul(J1(a))),l.mulAssign(s),a.mulAssign(r)}),c}),iC=j(([i,e,t,n])=>{const s=A(n).toVar(),r=A(t).toVar(),o=R(e).toVar(),a=D(i).toVar();return Ae(gc(a,o,r,s),gc(a.add(D(R(19),R(193),R(17))),o,r,s))}),sC=j(([i,e,t,n])=>{const s=A(n).toVar(),r=A(t).toVar(),o=R(e).toVar(),a=D(i).toVar(),c=D(sx(a,o,r,s)).toVar(),l=A(gc(a.add(D(R(19),R(193),R(17))),o,r,s)).toVar();return Se(c,l)}),rx=j(([i,e,t,n,s,r,o])=>{const a=R(o).toVar(),c=A(r).toVar(),l=R(s).toVar(),u=R(n).toVar(),h=R(t).toVar(),d=R(e).toVar(),f=Ae(i).toVar(),g=D(ix(Ae(d.add(u),h.add(l)))).toVar(),_=Ae(g.x,g.y).toVar();_.subAssign(.5),_.mulAssign(c),_.addAssign(.5);const m=Ae(Ae(A(d),A(h)).add(_)).toVar(),p=Ae(m.sub(f)).toVar();return Ke(a.equal(R(2)),()=>Gt(p.x).add(Gt(p.y))),Ke(a.equal(R(3)),()=>jn(Gt(p.x),Gt(p.y))),ro(p,p)}),ox=j(([i,e,t,n,s,r,o,a,c])=>{const l=R(c).toVar(),u=A(a).toVar(),h=R(o).toVar(),d=R(r).toVar(),f=R(s).toVar(),g=R(n).toVar(),_=R(t).toVar(),m=R(e).toVar(),p=D(i).toVar(),M=D(ix(D(m.add(f),_.add(d),g.add(h)))).toVar();M.subAssign(.5),M.mulAssign(u),M.addAssign(.5);const x=D(D(A(m),A(_),A(g)).add(M)).toVar(),S=D(x.sub(p)).toVar();return Ke(l.equal(R(2)),()=>Gt(S.x).add(Gt(S.y).add(Gt(S.z)))),Ke(l.equal(R(3)),()=>jn(jn(Gt(S.x),Gt(S.y)),Gt(S.z))),ro(S,S)}),uo=ri([rx,ox]),rC=j(([i,e,t])=>{const n=R(t).toVar(),s=A(e).toVar(),r=Ae(i).toVar(),o=R().toVar(),a=R().toVar(),c=Ae(wt(r.x,o),wt(r.y,a)).toVar(),l=A(1e6).toVar();return Et({start:-1,end:R(1),name:"x",condition:"<="},({x:u})=>{Et({start:-1,end:R(1),name:"y",condition:"<="},({y:h})=>{const d=A(uo(c,u,h,o,a,s,n)).toVar();l.assign(Zr(l,d))})}),Ke(n.equal(R(0)),()=>{l.assign(er(l))}),l}),oC=j(([i,e,t])=>{const n=R(t).toVar(),s=A(e).toVar(),r=Ae(i).toVar(),o=R().toVar(),a=R().toVar(),c=Ae(wt(r.x,o),wt(r.y,a)).toVar(),l=Ae(1e6,1e6).toVar();return Et({start:-1,end:R(1),name:"x",condition:"<="},({x:u})=>{Et({start:-1,end:R(1),name:"y",condition:"<="},({y:h})=>{const d=A(uo(c,u,h,o,a,s,n)).toVar();Ke(d.lessThan(l.x),()=>{l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.y.assign(d)})})}),Ke(n.equal(R(0)),()=>{l.assign(er(l))}),l}),aC=j(([i,e,t])=>{const n=R(t).toVar(),s=A(e).toVar(),r=Ae(i).toVar(),o=R().toVar(),a=R().toVar(),c=Ae(wt(r.x,o),wt(r.y,a)).toVar(),l=D(1e6,1e6,1e6).toVar();return Et({start:-1,end:R(1),name:"x",condition:"<="},({x:u})=>{Et({start:-1,end:R(1),name:"y",condition:"<="},({y:h})=>{const d=A(uo(c,u,h,o,a,s,n)).toVar();Ke(d.lessThan(l.x),()=>{l.z.assign(l.y),l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.z.assign(l.y),l.y.assign(d)}).elseif(d.lessThan(l.z),()=>{l.z.assign(d)})})}),Ke(n.equal(R(0)),()=>{l.assign(er(l))}),l}),cC=j(([i,e,t])=>{const n=R(t).toVar(),s=A(e).toVar(),r=D(i).toVar(),o=R().toVar(),a=R().toVar(),c=R().toVar(),l=D(wt(r.x,o),wt(r.y,a),wt(r.z,c)).toVar(),u=A(1e6).toVar();return Et({start:-1,end:R(1),name:"x",condition:"<="},({x:h})=>{Et({start:-1,end:R(1),name:"y",condition:"<="},({y:d})=>{Et({start:-1,end:R(1),name:"z",condition:"<="},({z:f})=>{const g=A(uo(l,h,d,f,o,a,c,s,n)).toVar();u.assign(Zr(u,g))})})}),Ke(n.equal(R(0)),()=>{u.assign(er(u))}),u}),lC=j(([i,e,t])=>{const n=R(t).toVar(),s=A(e).toVar(),r=D(i).toVar(),o=R().toVar(),a=R().toVar(),c=R().toVar(),l=D(wt(r.x,o),wt(r.y,a),wt(r.z,c)).toVar(),u=Ae(1e6,1e6).toVar();return Et({start:-1,end:R(1),name:"x",condition:"<="},({x:h})=>{Et({start:-1,end:R(1),name:"y",condition:"<="},({y:d})=>{Et({start:-1,end:R(1),name:"z",condition:"<="},({z:f})=>{const g=A(uo(l,h,d,f,o,a,c,s,n)).toVar();Ke(g.lessThan(u.x),()=>{u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.y.assign(g)})})})}),Ke(n.equal(R(0)),()=>{u.assign(er(u))}),u}),uC=j(([i,e,t])=>{const n=R(t).toVar(),s=A(e).toVar(),r=D(i).toVar(),o=R().toVar(),a=R().toVar(),c=R().toVar(),l=D(wt(r.x,o),wt(r.y,a),wt(r.z,c)).toVar(),u=D(1e6,1e6,1e6).toVar();return Et({start:-1,end:R(1),name:"x",condition:"<="},({x:h})=>{Et({start:-1,end:R(1),name:"y",condition:"<="},({y:d})=>{Et({start:-1,end:R(1),name:"z",condition:"<="},({z:f})=>{const g=A(uo(l,h,d,f,o,a,c,s,n)).toVar();Ke(g.lessThan(u.x),()=>{u.z.assign(u.y),u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.z.assign(u.y),u.y.assign(g)}).elseif(g.lessThan(u.z),()=>{u.z.assign(g)})})})}),Ke(n.equal(R(0)),()=>{u.assign(er(u))}),u});Fr.setLayout({name:"mx_select",type:"float",inputs:[{name:"b",type:"bool"},{name:"t",type:"float"},{name:"f",type:"float"}]});jo.setLayout({name:"mx_negate_if",type:"float",inputs:[{name:"val",type:"float"},{name:"b",type:"bool"}]});Vt.setLayout({name:"mx_floor",type:"int",inputs:[{name:"x",type:"float"}]});A_.setLayout({name:"mx_bilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"}]});b_.setLayout({name:"mx_bilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"}]});w_.setLayout({name:"mx_trilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"v4",type:"float"},{name:"v5",type:"float"},{name:"v6",type:"float"},{name:"v7",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});R_.setLayout({name:"mx_trilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"v4",type:"vec3"},{name:"v5",type:"vec3"},{name:"v6",type:"vec3"},{name:"v7",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});L_.setLayout({name:"mx_gradient_float_0",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"}]});P_.setLayout({name:"mx_gradient_float_1",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});I_.setLayout({name:"mx_gradient_vec3_0",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"}]});D_.setLayout({name:"mx_gradient_vec3_1",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});U_.setLayout({name:"mx_gradient_scale2d_0",type:"float",inputs:[{name:"v",type:"float"}]});O_.setLayout({name:"mx_gradient_scale3d_0",type:"float",inputs:[{name:"v",type:"float"}]});F_.setLayout({name:"mx_gradient_scale2d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});B_.setLayout({name:"mx_gradient_scale3d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});Pn.setLayout({name:"mx_rotl32",type:"uint",inputs:[{name:"x",type:"uint"},{name:"k",type:"int"}]});lo.setLayout({name:"mx_bjfinal",type:"uint",inputs:[{name:"a",type:"uint"},{name:"b",type:"uint"},{name:"c",type:"uint"}]});un.setLayout({name:"mx_bits_to_01",type:"float",inputs:[{name:"bits",type:"uint"}]});vi.setLayout({name:"mx_fade",type:"float",inputs:[{name:"t",type:"float"}]});H_.setLayout({name:"mx_hash_int_0",type:"uint",inputs:[{name:"x",type:"int"}]});G_.setLayout({name:"mx_hash_int_1",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});W_.setLayout({name:"mx_hash_int_2",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});X_.setLayout({name:"mx_hash_int_3",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"}]});q_.setLayout({name:"mx_hash_int_4",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"},{name:"yy",type:"int"}]});j_.setLayout({name:"mx_hash_vec3_0",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});Y_.setLayout({name:"mx_hash_vec3_1",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});$_.setLayout({name:"mx_perlin_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"}]});K_.setLayout({name:"mx_perlin_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"}]});Z_.setLayout({name:"mx_perlin_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"}]});J_.setLayout({name:"mx_perlin_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"}]});Q1.setLayout({name:"mx_cell_noise_float_0",type:"float",inputs:[{name:"p",type:"float"}]});eC.setLayout({name:"mx_cell_noise_float_1",type:"float",inputs:[{name:"p",type:"vec2"}]});tC.setLayout({name:"mx_cell_noise_float_2",type:"float",inputs:[{name:"p",type:"vec3"}]});nC.setLayout({name:"mx_cell_noise_float_3",type:"float",inputs:[{name:"p",type:"vec4"}]});Q_.setLayout({name:"mx_cell_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"float"}]});ex.setLayout({name:"mx_cell_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec2"}]});tx.setLayout({name:"mx_cell_noise_vec3_2",type:"vec3",inputs:[{name:"p",type:"vec3"}]});nx.setLayout({name:"mx_cell_noise_vec3_3",type:"vec3",inputs:[{name:"p",type:"vec4"}]});gc.setLayout({name:"mx_fractal_noise_float",type:"float",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});sx.setLayout({name:"mx_fractal_noise_vec3",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});iC.setLayout({name:"mx_fractal_noise_vec2",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});sC.setLayout({name:"mx_fractal_noise_vec4",type:"vec4",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});rx.setLayout({name:"mx_worley_distance_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});ox.setLayout({name:"mx_worley_distance_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"zoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});rC.setLayout({name:"mx_worley_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});oC.setLayout({name:"mx_worley_noise_vec2_0",type:"vec2",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});aC.setLayout({name:"mx_worley_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});cC.setLayout({name:"mx_worley_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});lC.setLayout({name:"mx_worley_noise_vec2_1",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});uC.setLayout({name:"mx_worley_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});const hC=j(([i])=>{const e=D(i).toVar(),t=A(e.x).toVar(),n=A(e.y).toVar(),s=A(e.z).toVar();Ke(n.lessThan(1e-4),()=>D(s,s,s)).else(()=>{t.assign(it(6,t.sub(so(t))));const r=R(km(t)).toVar(),o=A(t.sub(A(r))).toVar(),a=A(s.mul(zt(1,n))).toVar(),c=A(s.mul(zt(1,n.mul(o)))).toVar(),l=A(s.mul(zt(1,n.mul(zt(1,o))))).toVar();return Ke(r.equal(R(0)),()=>D(s,l,a)).elseif(r.equal(R(1)),()=>D(c,s,a)).elseif(r.equal(R(2)),()=>D(a,s,l)).elseif(r.equal(R(3)),()=>D(a,c,s)).elseif(r.equal(R(4)),()=>D(l,a,s)),D(s,a,c)})}),dC=j(([i])=>{const e=D(i).toVar(),t=A(e.x).toVar(),n=A(e.y).toVar(),s=A(e.z).toVar(),r=A(Zr(t,Zr(n,s))).toVar(),o=A(jn(t,jn(n,s))).toVar(),a=A(o.sub(r)).toVar(),c=A().toVar(),l=A().toVar(),u=A().toVar();return u.assign(o),Ke(o.greaterThan(0),()=>{l.assign(a.div(o))}).else(()=>{l.assign(0)}),Ke(l.lessThanEqual(0),()=>{c.assign(0)}).else(()=>{Ke(t.greaterThanEqual(o),()=>{c.assign(n.sub(s).div(a))}).elseif(n.greaterThanEqual(o),()=>{c.assign(qn(2,s.sub(t).div(a)))}).else(()=>{c.assign(qn(4,t.sub(n).div(a)))}),c.mulAssign(1/6),Ke(c.lessThan(0),()=>{c.addAssign(1)})}),D(c,l,u)});hC.setLayout({name:"mx_hsvtorgb",type:"vec3",inputs:[{name:"hsv",type:"vec3"}]});dC.setLayout({name:"mx_rgbtohsv",type:"vec3",inputs:[{name:"c",type:"vec3"}]});const fC=j(([i])=>{const e=D(i).toVar(),t=vm(Um(e,D(.04045))).toVar(),n=D(e.div(12.92)).toVar(),s=D(Ii(jn(e.add(D(.055)),D(0)).div(1.055),D(2.4))).toVar();return hn(n,s,t)});fC.setLayout({name:"mx_srgb_texture_to_lin_rec709",type:"vec3",inputs:[{name:"color",type:"vec3"}]});class pC{constructor(e,t,n,s,r){this.item=e,this.faceMaterial=t,this.infoContent=n,this.header=s,this.textureIndex=0,this.textures=r}changeFace(e){const t=e?1:-1,n=this.textureIndex+t;n==this.textures.length?this.textureIndex=0:n<0?this.textureIndex=this.textures.length-1:this.textureIndex=n;const s=this.textures[this.textureIndex],r=new $u;this.faceMaterial.uniforms.textureMap.value=r.load(s,o=>{o.encoding=void 0})}}class mC{constructor(e,t){this.billboards=[],this.headers=e.headers,this.infoContents=e.contents,this.billboardPaths=e.paths,this.textures=e.textures,this.activeBillboard,this.boardIndex=0,this.loader=new rm,this.right=!0,this.startPosition=new C(8,-4,-90),this.scene=t,this.loadCount=0,this.HOLO_HOVER_FACTOR=75e-5,this.holoHoverAcc=0,this.holoHoverMax=.3,this.vertexShader=`
            varying vec3 vNormal;
            varying vec3 vPosition;
        
            void main() {
                vNormal = normalize(normalMatrix * normal);
                vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,this.fragmentShader=`
            varying vec3 vNormal;
            varying vec3 vPosition;
        
            uniform float time;
        
            void main() {
                float intensity = dot(vNormal, vec3(0.0, 0.0, 1.0));
                vec3 baseColor = vec3(0.0, 1.0, 1.0) * intensity;
        
                float scanline = sin(vPosition.y * 50.0 + time * 10.0) * 0.1;
                baseColor += scanline;
        
                float noise = (fract(sin(dot(vPosition.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.1;
                baseColor += vec3(noise);
        
                gl_FragColor = vec4(baseColor, 0.5);
            }
        `,this.holoShader=new Xt({vertexShader:this.vertexShader,fragmentShader:this.fragmentShader,transparent:!0,uniforms:{time:{value:1}}}),this.faceShader=new Xt({uniforms:{textureMap:{value:Dn},time:{value:0}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;

            void main() {
                vUv = uv;
                vNormal = normalize(normalMatrix * normal);
                vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
                vUv.y = 1.0 - vUv.y;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
            `,fragmentShader:`
                uniform sampler2D textureMap;
                uniform float time;
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vPosition;

                void main() {
                    vec4 texelColor = texture2D(textureMap, vUv);

                    float scanline = sin(20.0 * vPosition.y + time * 10.0) * 0.1;
                    float noise = fract(sin(dot(vPosition.xy, vec2(12.9898, 78.233))) * 43758.5453) * 0.3;
                    vec3 hologramColor = vec3(0.0, 1.0, 1.0) * 0.3;

                    if (texelColor.a == 0.0) {
                        gl_FragColor = vec4(hologramColor + scanline + noise, 0.9);
                    }
                    else {
                        gl_FragColor = vec4(texelColor.rgb, 1.0);
                    }

                }
            `,transparent:!0}),this.billboardObjects=[],this.activeBillboardInstance,this.init()}init(){this.billboardPaths.forEach(e=>{console.log("Loading "+e);const t=this.right?this.startPosition.x:-1*this.startPosition.x,n=this.right?-Math.PI/1.5:-Math.PI/3,s=this.right.valueOf();this.right=!this.right,this.loader.load(e,r=>{const a=new $u().load(this.textures[this.loadCount][0],u=>{u.encoding=void 0});let c=null;r.scene.traverse(u=>{u.isMesh&&(u.name!=="Cylinder"?(u.material?u.material.name==="Material.006"?(this.faceShader.uniforms.textureMap.value=a,u.material=this.faceShader.clone(),c=u.material):u.material=this.holoShader:u.material=this.holoShader,u.position.setY(u.position.y+this.HOLO_HOVER_FACTOR),this.holoHoverAcc+=this.HOLO_HOVER_FACTOR):u.visible=!1)});const l=r.scene;l.layers.toggle(1),l.rotation.set(0,n,0),l.position.set(t,this.startPosition.y,this.startPosition.z),l.userData={isTarget:!0},l.visible=!1,this.billboards.push({item:l,angle:n,right:s,horizontalPos:t}),this.scene.add(l),this.billboardObjects.push(new pC(l,c,this.infoContents[this.loadCount],this.headers[this.loadCount],this.textures[this.loadCount])),this.loadCount++,this.loadCount==this.billboardPaths.length&&this.setActive()},void 0,r=>{console.error(r)})})}onShaderUpdate(){this.holoShader.uniforms.time.value+=.01,this.faceShader.uniforms.time.value+=.01,this.activeBillboard&&this.holoboardHover()}setActive(){const e=this.billboards[this.boardIndex];this.activeBillboardInstance=this.billboardObjects[this.boardIndex],this.right=e.right,this.activeBillboard=e.item,this.activeBillboard.visible=!0}setInfoText(){const e=document.getElementById("info-content"),t=document.getElementById("header");t.innerHTML=this.headers[this.boardIndex],e.innerHTML=this.infoContents[this.boardIndex]}load(){const e=this.right?this.startPosition.x:-1*this.startPosition.x,t=this.right?-Math.PI/1.5:-Math.PI/3;this.right=!this.right,this.boardIndex==this.billboardPaths.length&&(console.log("Reusing billboards"),this.boardIndex>=this.billboardPaths.length-1&&(this.boardIndex=0),this.activeBillboard=this.billboards[this.boardIndex],this.boardIndex++,this.activeBillboard.position.set(e,this.startPosition.y,this.startPosition.z),this.activeBillboard.rotation.set(0,t,0)),this.loader.load(this.billboardPaths[this.boardIndex],n=>{console.log("Loading new at index"+this.boardIndex);const s=n.scene;this.activeBillboard=s,this.billboards.push(s),s.rotation.set(0,t,0),s.position.set(e,this.startPosition.y,this.startPosition.z),this.scene.add(n.scene),s.userData={isTarget:!0}},void 0,n=>{console.error(n)}),this.boardIndex++}move(e){this.activeBillboard.position.set(this.activeBillboard.position.x,this.activeBillboard.position.y,this.activeBillboard.position.z+Math.abs(e)),this.activeBillboard.position.z>20&&(this.activeBillboard.visible=!1,this.activeBillboard.position.set(this.activeBillboard.position.x,this.activeBillboard.position.y,this.startPosition.z),this.boardIndex==this.billboards.length-1?this.boardIndex=0:this.boardIndex++,this.setActive())}getBillboardPosition(){return this.activeBillboard.position}holoboardHover(){Math.abs(this.holoHoverAcc)>=this.holoHoverMax&&(this.HOLO_HOVER_FACTOR*=-1,this.holoHoverAcc=0),this.activeBillboard.traverse(e=>{e.name!=="Cylinder"&&(e.position.setY(e.position.y+this.HOLO_HOVER_FACTOR),this.holoHoverAcc+=this.HOLO_HOVER_FACTOR)})}}const Xn=new VS,Yt=new An(75,window.innerWidth/window.innerHeight,.1,1e3),gC=document.getElementById("info-content").innerHTML,_C=document.getElementById("header").innerHTML,ax=1,xC=new Tc;xC.set(ax);var cx=document.createElement("canvas"),Mh=cx.getContext("2d"),Th=Mh.createLinearGradient(0,0,0,window.innerHeight);Th.addColorStop(0,"#ff0000");Th.addColorStop(1,"#0000ff");Mh.fillStyle=Th;Mh.fillRect(0,0,window.innerWidth,window.innerHeight);var vC=new jp(cx);Xn.background=vC;Yt.position.set(0,6,12);Yt.rotation.set(Math.PI/32,0,0);const Ai=new FS({antialias:!0});Ai.setPixelRatio(window.devicePixelRatio);Ai.outputColorSpace=sn;Ai.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Ai.domElement);Ai.toneMapping=vc;Ai.toneMappingExposure=.5;Ai.outputColorSpace=sn;const lx=new CA(Xn,Yt),yC=new $r(new Me(window.innerWidth,window.innerHeight),.6,.4,.3),ho=new um(Ai);ho.renderToScreen=!1;ho.addPass(lx);ho.addPass(yC);const MC=new lm(new Xt({uniforms:{baseTexture:{value:null},bloomTexture:{value:ho.renderTarget2.texture}},vertexShader:document.getElementById("vertexshader").textContent,fragmentShader:document.getElementById("fragmentshader").textContent,defines:{}}),"baseTexture"),TC=new RA,ca=new um(Ai);ca.addPass(lx);ca.addPass(MC);ca.addPass(TC);const SC=new Jp(16746632,.5);Xn.add(SC);var kn=null;function EC(i,e){const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d"),s=[{stop:0,color:i},{stop:1,color:e}],r=n.createLinearGradient(0,0,0,t.height);return s.forEach(a=>{r.addColorStop(a.stop,a.color)}),n.fillStyle=r,n.fillRect(0,0,t.width,t.height),new jp(t)}const ux=EC("red","orange"),AC=`
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float time;

    float noise(vec3 p) {
        return sin(p.x * 10.0 + time) * cos(p.y * 10.0 + time) * sin(p.z * 10.0 + time);
    }

    void main() {
        vUv = uv;
        vPosition = position;

        float displacement = noise(position) * 0.2;
        vec3 newPosition = position + normal + displacement;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
`,bC=`
    uniform sampler2D textureMap;
    uniform float time;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
        vec4 texelColor = texture2D(textureMap, vUv);

        // Scanline parameters
        float frequency = 2.0; // Frequency of scanlines
        float thickness = 0.005; // Thickness

        vec3 modifiedColor = texelColor.rgb;

        if (vPosition.y < 0.0) {
            float scanline = sin(frequency * vPosition.y + time) * 0.05;
            float noise = fract(sin(dot(vPosition.xy, vec2(12.9898, 78.233))) * 43758.5453) * thickness;
            vec3 scanlineColor = vec3(0.0, 0.0, 0.0);

            modifiedColor += (scanlineColor + scanline + noise);
        }

        //texelColor.rgb = texelColor.rgb * 0.8;
        //gl_FragColor = texelColor;
        gl_FragColor = vec4(modifiedColor, 1.0);
    }
`,NC=new ju(15,32,32);new mi({map:ux});const hx=new Xt({uniforms:{textureMap:{value:ux},time:{value:0}},vertexShader:AC,fragmentShader:bC}),vs=new an(NC,hx);vs.position.set(.2,8,-108);vs.rotation.setFromQuaternion(Yt.quaternion);vs.layers.toggle(ax);Xn.add(vs);const Ya=new ko(16755712,.15);Ya.position.set(vs.position.x,vs.position.y-10,vs.position.z+10);const Vr=new PA(new C(0,0,0),10,2.5),wC=new rm;wC.load("/cybercar.glb",function(i){Xn.add(i.scene),kn=i.scene;var e=new ko(15597568,.5);e.position.set(-1.5,.5,4),e.target.position.set(-.1,.25,10);var t=new ko(15597568,.5);t.position.set(1.5,.5,4),t.target.position.set(.1,.25,10),kn.add(e),kn.add(t),kn.position.set(0,1,0),Ya.target.position.set(kn.position.x,kn.position.y,kn.position.z),Xn.add(Ya),Xn.add(Ya.target),Yt.position.set(kn.position.x,kn.position.y+4,kn.position.z+11),Vr.initParticles(kn),Vr.particles.forEach(n=>{Xn.add(n),Vr.toggleParticles(!1)})},void 0,function(i){console.error(i)});var fo=zE(100,100,200);fo.mesh.rotation.set(Math.PI/2,0,0);fo.mesh.position.set(0,-1,0);Xn.add(fo.mesh);Xn.fog=new Wu(13421772,.0075);let Wc=kE(fo,100,100,7);Wc.rotation.set(Math.PI/2,0,0);Wc.position.set(0,7.05,0);Xn.add(Wc);fo.mesh.position.set(0,7,0);let RC=0,up=0;const Jl=-.25;let CC=0;const Yo={speedPerctg:CC};let Xc=!1;const Oo=new C().copy(Yt.position),LC=new C(Oo.x,Oo.y+2,Oo.z+5),PC=new C().copy(Yt.rotation),_c=new CE;_c.far=50;_c.near=.1;const Ql=new Me;let Co=!1,br=!1;const IC=["/holoboarduv.glb","/holoboarduv.glb","/holoboarduv.glb","/holoboarduv.glb","/holoboarduv.glb","/holoboarduv.glb"],DC=["<p class='ui'>Life is tough, but it doesn't have to be boring<br>Gamification of your life can highlight how much progress we make as humans, every single day.</p><p class='ui'>I made this webpage within a month from scratch and no THREE.js knowledge. I was roleplaying that this was a full time job and I had a boss to answer to.</p><p>And I am VERY happy about the results.</p>","<p class='ui'>I am a Computer Science and Communications double major student at the University of Toronto. I love storytelling, and most importantly, using different forms of media to convey my stories.</p><p class='ui'>I believe that video games are the ultimate form of art and interactive storytelling, and I have been self-teaching myself game development since I was 14.</p>","<p class='ui'>Title: Everytime<br>Artist: Jujus<br>Vocals: Diktshya Sharma<br>Rhythm Guitar: Murat Diken<br>Keys: Justin Regef<br>Saxophone: Nick Leiper<br>Bass: Haya Sardar<br>Drums: Baran Alkandemir</p><a href='https://soundcloud.com/jujus-862411031/everytime' target=_blank class='ui'>Listen on SoundCloud</a>","<p class='ui'>'Her name is Jacqueline' is a narrative focused puzzle & resource management game.<br>The screenshots are from a raw prototype I created for the course 'Immersive Environment Design'</p><p class='ui'>A demo is not currently available, but this page will be updated once it is!</p>","<p class='ui'>'Interval Factory' is an ear training game I developed for mobile platforms in the summer of 2023.</p><p>Currently, a <a href='https://muratdiken.itch.io/intervals' target=_blank class='ui'>demo</a> is available for Android only.</p>","<p class='ui'>These are two short stories that I wrote just for fun.</p><p class='ui'><a href=#>'Bowie's Garden & Pub'</a> is about the relationship of an estranged father and son.</p><p class='ui'><a href=#>'The End'</a> is better to experience completely blind.</p>"],UC={paths:IC,headers:["Gamify Life","About Me","My Music","My Games","My Games","My Stories"],contents:DC,textures:{0:["/textures/gamify.png"],1:["/textures/about.png","/textures/about2.png"],2:["/textures/music.png","/textures/music2.png"],3:["/textures/jacq.png","/textures/jacq1.png","/textures/jacq2.png","/textures/jacq3.png","/textures/jacq4.png"],4:["/textures/if.png","/textures/if1.png","/textures/if2.png"],5:["/textures/stories.png","/textures/stories2.png"]}},qs=new mC(UC,Xn),Sh=new vE;Yt.add(Sh);const ei=new tm(Sh),ti=new tm(Sh),dx=new _E;dx.load("/audio/engineStart.mp3",function(i){ei.setBuffer(i),ei.setLoop(!1),ei.setVolume(.5),ei.onEnded=function(){ei.isPlaying=!1,ti.play()}});dx.load("/audio/carMove.mp3",function(i){ti.setBuffer(i),ti.setLoop(!0),ti.setVolume(1)});document.getElementById("car-sound-fx-toggle").addEventListener("click",i=>{const e=document.getElementById("car-sound-icon");i.target.classList.contains("mute")?(i.target.classList.remove("mute"),ti.setVolume(1),ei.setVolume(.5),e.src="/unmuteIcon.svg"):(i.target.classList.add("mute"),ti.setVolume(0),ei.setVolume(0),e.src="/muteIcon.svg.png")});document.addEventListener("click",i=>{var n,s,r;if(i.target.classList.contains("ui"))return;Ql.x=i.clientX/window.innerWidth*2-1,Ql.y=-(i.clientY/window.innerHeight)*2+1,_c.setFromCamera(Ql,Yt);const e=_c.intersectObjects(Xn.children);let t;Co=!1;for(let o=0;o<e.length;o++){const a=e[o].object;if((r=(s=(n=a.parent)==null?void 0:n.parent)==null?void 0:s.userData)!=null&&r.isTarget){Co=!0,t=a.parent.parent,ei.stop(),ei.isPlaying=!1,ti.stop(),ti.isPlaying=!1;break}}if(Co&&!br){Ut.removeAll(),qs.setInfoText();const o=new C().copy(t.position);qs.activeBillboard.layers.toggle(1),o.y+=15,o.z+=5;let a=1;qs.right?o.x-=3:(a=-1,o.x+=3),new Ut.Tween(Yt.position).to(o).easing(Ut.Easing.Quadratic.InOut).onStart(()=>{Xc=!1,Yo.speedPerctg=0}).onComplete(()=>{br=!0}).start(),new Ut.Tween(Yt.rotation).to({x:Yt.rotation.x,y:-Math.PI/5.75*a,z:Yt.rotation.z+Math.PI/64*a}).start();return}else!Co&&br&&(ei.stop(),ei.isPlaying=!1,ti.stop(),ti.isPlaying=!1,qs.activeBillboard.layers.toggle(1),Ut.removeAll(),document.getElementById("header").innerHTML=_C,document.getElementById("info-content").innerHTML=gC,new Ut.Tween(Yt.position).to(Oo).easing(Ut.Easing.Quadratic.InOut).onComplete(()=>{br=!1}).start(),new Ut.Tween(Yt.rotation).to(PC).easing(Ut.Easing.Quadratic.InOut).start())});document.addEventListener("mousedown",i=>{ei.play(),!br&&(Xc=!0,Ut.removeAll(),new Ut.Tween(Yt.position).to(LC,2500).easing(Ut.Easing.Quadratic.In).start().onComplete(()=>{Vr.toggleParticles(!0)}),new Ut.Tween(Yo).to({speedPerctg:1},2500).easing(Ut.Easing.Quadratic.InOut).start())});document.addEventListener("mouseup",()=>{br||(Ut.removeAll(),new Ut.Tween(Yt.position).to(Oo,2500).easing(Ut.Easing.Quadratic.In).onStart(()=>{Vr.toggleParticles(!1)}).start().onComplete(()=>{Xc=!1,ti.stop(),ti.isPlaying=!1}),new Ut.Tween(Yo).to({speedPerctg:0},2500).easing(Ut.Easing.Quadratic.InOut).start())});function hp(i){Co&&qs.activeBillboardInstance.changeFace(i)}function OC(){window.addEventListener("keydown",function(i){switch(i.key){case"ArrowRight":hp(!0);break;case"ArrowLeft":hp(!1);break}})}OC();Ai.toneMappingExposure=.3;function fx(){qs.onShaderUpdate(),hx.uniforms.time.value+=.02,kn!=null&&Xc&&(up+=Jl*Yo.speedPerctg,HE(fo,100,100,7,RC,up,Wc),Vr.moveParticles(kn,-Jl*1.5,7),qs.move(Jl*Yo.speedPerctg)),Ut.update(),vs.rotation.y+=1e-4,ho.render(),ca.render(),requestAnimationFrame(fx)}fx();window.addEventListener("resize",()=>{Yt.aspect=window.innerWidth/window.innerHeight,Yt.updateProjectionMatrix(),Ai.setSize(window.innerWidth,window.innerHeight),ho.setSize(window.innerWidth,window.innerHeight),ca.setSize(window.innerWidth,window.innerHeight)})});export default FC();
