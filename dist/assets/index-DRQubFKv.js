(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yf="174",Eo={ROTATE:0,DOLLY:1,PAN:2},xo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},q0=0,Qd=1,Z0=2,u_=1,h_=2,cr=3,Jr=0,yn=1,zi=2,qr=0,Do=1,Rc=2,tp=3,ep=4,j0=5,vs=100,$0=101,K0=102,J0=103,Q0=104,tx=200,ex=201,nx=202,ix=203,Mh=204,Sh=205,rx=206,sx=207,ox=208,ax=209,lx=210,cx=211,ux=212,hx=213,fx=214,Eh=0,Dh=1,Ah=2,Oo=3,Th=4,bh=5,wh=6,Ch=7,f_=0,dx=1,px=2,Zr=0,mx=1,_x=2,gx=3,xx=4,vx=5,yx=6,Mx=7,d_=300,Bo=301,zo=302,Rh=303,Ph=304,eu=306,Lh=1e3,Ss=1001,Fh=1002,pi=1003,Sx=1004,pl=1005,Zi=1006,pu=1007,Es=1008,Dr=1009,p_=1010,m_=1011,Za=1012,qf=1013,Us=1014,ji=1015,ll=1016,Zf=1017,jf=1018,ko=1020,__=35902,g_=1021,x_=1022,Hi=1023,v_=1024,y_=1025,Ao=1026,Ho=1027,$f=1028,Kf=1029,M_=1030,Jf=1031,Qf=1033,oc=33776,ac=33777,lc=33778,cc=33779,Ih=35840,Uh=35841,Nh=35842,Oh=35843,Bh=36196,zh=37492,kh=37496,Hh=37808,Vh=37809,Gh=37810,Wh=37811,Xh=37812,Yh=37813,qh=37814,Zh=37815,jh=37816,$h=37817,Kh=37818,Jh=37819,Qh=37820,tf=37821,uc=36492,ef=36494,nf=36495,S_=36283,rf=36284,sf=36285,of=36286,Ex=3200,Dx=3201,E_=0,Ax=1,kr="",Ti="srgb",Vo="srgb-linear",Pc="linear",be="srgb",qs=7680,np=519,Tx=512,bx=513,wx=514,D_=515,Cx=516,Rx=517,Px=518,Lx=519,ip=35044,rp="300 es",gr=2e3,Lc=2001;let Gs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}};const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=Math.PI/180,af=180/Math.PI;function cl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function le(r,t,e){return Math.max(t,Math.min(e,r))}function Fx(r,t){return(r%t+t)%t}function mu(r,t,e){return(1-e)*r+e*t}function ia(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ix={DEG2RAD:hc};class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(t,e,n,i,s,o,a,l,u){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,u)}set(t,e,n,i,s,o,a,l,u){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],f=n[7],d=n[2],c=n[5],p=n[8],g=i[0],_=i[3],m=i[6],S=i[1],M=i[4],x=i[7],A=i[2],b=i[5],D=i[8];return s[0]=o*g+a*S+l*A,s[3]=o*_+a*M+l*b,s[6]=o*m+a*x+l*D,s[1]=u*g+h*S+f*A,s[4]=u*_+h*M+f*b,s[7]=u*m+h*x+f*D,s[2]=d*g+c*S+p*A,s[5]=d*_+c*M+p*b,s[8]=d*m+c*x+p*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8];return e*o*h-e*a*u-n*s*h+n*a*l+i*s*u-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8],f=h*o-a*u,d=a*l-h*s,c=u*s-o*l,p=e*f+n*d+i*c;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return t[0]=f*g,t[1]=(i*u-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=c*g,t[7]=(n*l-u*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+t,-i*u,i*l,-i*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_u.makeScale(t,e)),this}rotate(t){return this.premultiply(_u.makeRotation(-t)),this}translate(t,e){return this.premultiply(_u.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _u=new re;function A_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ja(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ux(){const r=ja("canvas");return r.style.display="block",r}const sp={};function ps(r){r in sp||(sp[r]=!0,console.warn(r))}function Nx(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Ox(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bx(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const op=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ap=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zx(){const r={enabled:!0,workingColorSpace:Vo,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===be&&(i.r=Mr(i.r),i.g=Mr(i.g),i.b=Mr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(i.r=To(i.r),i.g=To(i.g),i.b=To(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kr?Pc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Vo]:{primaries:t,whitePoint:n,transfer:Pc,toXYZ:op,fromXYZ:ap,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ti},outputColorSpaceConfig:{drawingBufferColorSpace:Ti}},[Ti]:{primaries:t,whitePoint:n,transfer:be,toXYZ:op,fromXYZ:ap,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ti}}}),r}const Me=zx();function Mr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function To(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Zs;class kx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zs===void 0&&(Zs=ja("canvas")),Zs.width=t.width,Zs.height=t.height;const n=Zs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zs}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ja("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Mr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mr(e[n]/255)*255):e[n]=Mr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hx=0;class td{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=cl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(gu(i[o].image)):s.push(gu(i[o]))}else s=gu(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function gu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?kx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vx=0;class Cn extends Gs{constructor(t=Cn.DEFAULT_IMAGE,e=Cn.DEFAULT_MAPPING,n=Ss,i=Ss,s=Zi,o=Es,a=Hi,l=Dr,u=Cn.DEFAULT_ANISOTROPY,h=kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=cl(),this.name="",this.source=new td(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==d_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lh:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case Fh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lh:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case Fh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=d_;Cn.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,n=0,i=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,u=l[0],h=l[4],f=l[8],d=l[1],c=l[5],p=l[9],g=l[2],_=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(p-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(p+_)<.1&&Math.abs(u+c+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(u+1)/2,x=(c+1)/2,A=(m+1)/2,b=(h+d)/4,D=(f+g)/4,w=(p+_)/4;return M>x&&M>A?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=b/n,s=D/n):x>A?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=b/i,s=w/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=D/s,i=w/s),this.set(n,i,s,e),this}let S=Math.sqrt((_-p)*(_-p)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(_-p)/S,this.y=(f-g)/S,this.z=(d-h)/S,this.w=Math.acos((u+c+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gx extends Gs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new td(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ns extends Gx{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class T_ extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=pi,this.minFilter=pi,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wx extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=pi,this.minFilter=pi,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Os{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],u=n[i+1],h=n[i+2],f=n[i+3];const d=s[o+0],c=s[o+1],p=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=c,t[e+2]=p,t[e+3]=g;return}if(f!==g||l!==d||u!==c||h!==p){let _=1-a;const m=l*d+u*c+h*p+f*g,S=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const A=Math.sqrt(M),b=Math.atan2(A,m*S);_=Math.sin(_*b)/A,a=Math.sin(a*b)/A}const x=a*S;if(l=l*_+d*x,u=u*_+c*x,h=h*_+p*x,f=f*_+g*x,_===1-a){const A=1/Math.sqrt(l*l+u*u+h*h+f*f);l*=A,u*=A,h*=A,f*=A}}t[e]=l,t[e+1]=u,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],u=n[i+2],h=n[i+3],f=s[o],d=s[o+1],c=s[o+2],p=s[o+3];return t[e]=a*p+h*f+l*c-u*d,t[e+1]=l*p+h*d+u*f-a*c,t[e+2]=u*p+h*c+a*d-l*f,t[e+3]=h*p-a*f-l*d-u*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(i/2),f=a(s/2),d=l(n/2),c=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=d*h*f+u*c*p,this._y=u*c*f-d*h*p,this._z=u*h*p+d*c*f,this._w=u*h*f-d*c*p;break;case"YXZ":this._x=d*h*f+u*c*p,this._y=u*c*f-d*h*p,this._z=u*h*p-d*c*f,this._w=u*h*f+d*c*p;break;case"ZXY":this._x=d*h*f-u*c*p,this._y=u*c*f+d*h*p,this._z=u*h*p+d*c*f,this._w=u*h*f-d*c*p;break;case"ZYX":this._x=d*h*f-u*c*p,this._y=u*c*f+d*h*p,this._z=u*h*p-d*c*f,this._w=u*h*f+d*c*p;break;case"YZX":this._x=d*h*f+u*c*p,this._y=u*c*f+d*h*p,this._z=u*h*p-d*c*f,this._w=u*h*f-d*c*p;break;case"XZY":this._x=d*h*f-u*c*p,this._y=u*c*f-d*h*p,this._z=u*h*p+d*c*f,this._w=u*h*f+d*c*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){const c=.5/Math.sqrt(d+1);this._w=.25/c,this._x=(h-l)*c,this._y=(s-u)*c,this._z=(o-i)*c}else if(n>a&&n>f){const c=2*Math.sqrt(1+n-a-f);this._w=(h-l)/c,this._x=.25*c,this._y=(i+o)/c,this._z=(s+u)/c}else if(a>f){const c=2*Math.sqrt(1+a-n-f);this._w=(s-u)/c,this._x=(i+o)/c,this._y=.25*c,this._z=(l+h)/c}else{const c=2*Math.sqrt(1+f-n-a);this._w=(o-i)/c,this._x=(s+u)/c,this._y=(l+h)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,h=e._w;return this._x=n*h+o*a+i*u-s*l,this._y=i*h+o*l+s*a-n*u,this._z=s*h+o*u+n*l-i*a,this._w=o*h-n*a-i*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const c=1-e;return this._w=c*o+e*this._w,this._x=c*n+e*this._x,this._y=c*i+e*this._y,this._z=c*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),f=Math.sin((1-e)*h)/u,d=Math.sin(e*h)/u;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lp.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*i-a*n),h=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*u+o*f-a*h,this.y=n+l*h+a*u-s*f,this.z=i+l*f+s*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xu.copy(this).projectOnVector(t),this.sub(xu)}reflect(t){return this.sub(xu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xu=new B,lp=new Os;class Ws{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Li):Li.fromBufferAttribute(s,o),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ml.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ml.copy(n.boundingBox)),ml.applyMatrix4(t.matrixWorld),this.union(ml)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ra),_l.subVectors(this.max,ra),js.subVectors(t.a,ra),$s.subVectors(t.b,ra),Ks.subVectors(t.c,ra),Rr.subVectors($s,js),Pr.subVectors(Ks,$s),ss.subVectors(js,Ks);let e=[0,-Rr.z,Rr.y,0,-Pr.z,Pr.y,0,-ss.z,ss.y,Rr.z,0,-Rr.x,Pr.z,0,-Pr.x,ss.z,0,-ss.x,-Rr.y,Rr.x,0,-Pr.y,Pr.x,0,-ss.y,ss.x,0];return!vu(e,js,$s,Ks,_l)||(e=[1,0,0,0,1,0,0,0,1],!vu(e,js,$s,Ks,_l))?!1:(gl.crossVectors(Rr,Pr),e=[gl.x,gl.y,gl.z],vu(e,js,$s,Ks,_l))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ir),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ir=[new B,new B,new B,new B,new B,new B,new B,new B],Li=new B,ml=new Ws,js=new B,$s=new B,Ks=new B,Rr=new B,Pr=new B,ss=new B,ra=new B,_l=new B,gl=new B,os=new B;function vu(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){os.fromArray(r,s);const a=i.x*Math.abs(os.x)+i.y*Math.abs(os.y)+i.z*Math.abs(os.z),l=t.dot(os),u=e.dot(os),h=n.dot(os);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const Xx=new Ws,sa=new B,yu=new B;class Jo{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xx.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sa.subVectors(t,this.center);const e=sa.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(sa,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sa.copy(t.center).add(yu)),this.expandByPoint(sa.copy(t.center).sub(yu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rr=new B,Mu=new B,xl=new B,Lr=new B,Su=new B,vl=new B,Eu=new B;class nu{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=rr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rr.copy(this.origin).addScaledVector(this.direction,e),rr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Mu.copy(t).add(e).multiplyScalar(.5),xl.copy(e).sub(t).normalize(),Lr.copy(this.origin).sub(Mu);const s=t.distanceTo(e)*.5,o=-this.direction.dot(xl),a=Lr.dot(this.direction),l=-Lr.dot(xl),u=Lr.lengthSq(),h=Math.abs(1-o*o);let f,d,c,p;if(h>0)if(f=o*l-a,d=o*a-l,p=s*h,f>=0)if(d>=-p)if(d<=p){const g=1/h;f*=g,d*=g,c=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),c=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),c=-f*f+d*(d+2*l)+u;else d<=-p?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),c=-f*f+d*(d+2*l)+u):d<=p?(f=0,d=Math.min(Math.max(-s,-l),s),c=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),c=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),c=-f*f+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Mu).addScaledVector(xl,d),c}intersectSphere(t,e){rr.subVectors(t.center,this.origin);const n=rr.dot(this.direction),i=rr.dot(rr)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,i=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,i=(t.min.x-d.x)*u),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,rr)!==null}intersectTriangle(t,e,n,i,s){Su.subVectors(e,t),vl.subVectors(n,t),Eu.crossVectors(Su,vl);let o=this.direction.dot(Eu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Lr.subVectors(this.origin,t);const l=a*this.direction.dot(vl.crossVectors(Lr,vl));if(l<0)return null;const u=a*this.direction.dot(Su.cross(Lr));if(u<0||l+u>o)return null;const h=-a*Lr.dot(Eu);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(t,e,n,i,s,o,a,l,u,h,f,d,c,p,g,_){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,u,h,f,d,c,p,g,_)}set(t,e,n,i,s,o,a,l,u,h,f,d,c,p,g,_){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=h,m[10]=f,m[14]=d,m[3]=c,m[7]=p,m[11]=g,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Js.setFromMatrixColumn(t,0).length(),s=1/Js.setFromMatrixColumn(t,1).length(),o=1/Js.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),u=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*h,c=o*f,p=a*h,g=a*f;e[0]=l*h,e[4]=-l*f,e[8]=u,e[1]=c+p*u,e[5]=d-g*u,e[9]=-a*l,e[2]=g-d*u,e[6]=p+c*u,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,c=l*f,p=u*h,g=u*f;e[0]=d+g*a,e[4]=p*a-c,e[8]=o*u,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=c*a-p,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,c=l*f,p=u*h,g=u*f;e[0]=d-g*a,e[4]=-o*f,e[8]=p+c*a,e[1]=c+p*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,c=o*f,p=a*h,g=a*f;e[0]=l*h,e[4]=p*u-c,e[8]=d*u+g,e[1]=l*f,e[5]=g*u+d,e[9]=c*u-p,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,c=o*u,p=a*l,g=a*u;e[0]=l*h,e[4]=g-d*f,e[8]=p*f+c,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-u*h,e[6]=c*f+p,e[10]=d-g*f}else if(t.order==="XZY"){const d=o*l,c=o*u,p=a*l,g=a*u;e[0]=l*h,e[4]=-f,e[8]=u*h,e[1]=d*f+g,e[5]=o*h,e[9]=c*f-p,e[2]=p*f-c,e[6]=a*h,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yx,t,qx)}lookAt(t,e,n){const i=this.elements;return ei.subVectors(t,e),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Fr.crossVectors(n,ei),Fr.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Fr.crossVectors(n,ei)),Fr.normalize(),yl.crossVectors(ei,Fr),i[0]=Fr.x,i[4]=yl.x,i[8]=ei.x,i[1]=Fr.y,i[5]=yl.y,i[9]=ei.y,i[2]=Fr.z,i[6]=yl.z,i[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],f=n[5],d=n[9],c=n[13],p=n[2],g=n[6],_=n[10],m=n[14],S=n[3],M=n[7],x=n[11],A=n[15],b=i[0],D=i[4],w=i[8],y=i[12],v=i[1],R=i[5],N=i[9],P=i[13],z=i[2],H=i[6],I=i[10],V=i[14],W=i[3],et=i[7],L=i[11],it=i[15];return s[0]=o*b+a*v+l*z+u*W,s[4]=o*D+a*R+l*H+u*et,s[8]=o*w+a*N+l*I+u*L,s[12]=o*y+a*P+l*V+u*it,s[1]=h*b+f*v+d*z+c*W,s[5]=h*D+f*R+d*H+c*et,s[9]=h*w+f*N+d*I+c*L,s[13]=h*y+f*P+d*V+c*it,s[2]=p*b+g*v+_*z+m*W,s[6]=p*D+g*R+_*H+m*et,s[10]=p*w+g*N+_*I+m*L,s[14]=p*y+g*P+_*V+m*it,s[3]=S*b+M*v+x*z+A*W,s[7]=S*D+M*R+x*H+A*et,s[11]=S*w+M*N+x*I+A*L,s[15]=S*y+M*P+x*V+A*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],h=t[2],f=t[6],d=t[10],c=t[14],p=t[3],g=t[7],_=t[11],m=t[15];return p*(+s*l*f-i*u*f-s*a*d+n*u*d+i*a*c-n*l*c)+g*(+e*l*c-e*u*d+s*o*d-i*o*c+i*u*h-s*l*h)+_*(+e*u*f-e*a*c-s*o*f+n*o*c+s*a*h-n*u*h)+m*(-i*a*h-e*l*f+e*a*d+i*o*f-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8],f=t[9],d=t[10],c=t[11],p=t[12],g=t[13],_=t[14],m=t[15],S=f*_*u-g*d*u+g*l*c-a*_*c-f*l*m+a*d*m,M=p*d*u-h*_*u-p*l*c+o*_*c+h*l*m-o*d*m,x=h*g*u-p*f*u+p*a*c-o*g*c-h*a*m+o*f*m,A=p*f*l-h*g*l-p*a*d+o*g*d+h*a*_-o*f*_,b=e*S+n*M+i*x+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/b;return t[0]=S*D,t[1]=(g*d*s-f*_*s-g*i*c+n*_*c+f*i*m-n*d*m)*D,t[2]=(a*_*s-g*l*s+g*i*u-n*_*u-a*i*m+n*l*m)*D,t[3]=(f*l*s-a*d*s-f*i*u+n*d*u+a*i*c-n*l*c)*D,t[4]=M*D,t[5]=(h*_*s-p*d*s+p*i*c-e*_*c-h*i*m+e*d*m)*D,t[6]=(p*l*s-o*_*s-p*i*u+e*_*u+o*i*m-e*l*m)*D,t[7]=(o*d*s-h*l*s+h*i*u-e*d*u-o*i*c+e*l*c)*D,t[8]=x*D,t[9]=(p*f*s-h*g*s-p*n*c+e*g*c+h*n*m-e*f*m)*D,t[10]=(o*g*s-p*a*s+p*n*u-e*g*u-o*n*m+e*a*m)*D,t[11]=(h*a*s-o*f*s-h*n*u+e*f*u+o*n*c-e*a*c)*D,t[12]=A*D,t[13]=(h*g*i-p*f*i+p*n*d-e*g*d-h*n*_+e*f*_)*D,t[14]=(p*a*i-o*g*i-p*n*l+e*g*l+o*n*_-e*a*_)*D,t[15]=(o*f*i-h*a*i+h*n*l-e*f*l-o*n*d+e*a*d)*D,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,u=s*o,h=s*a;return this.set(u*o+n,u*a-i*l,u*l+i*a,0,u*a+i*l,h*a+n,h*l-i*o,0,u*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,h=o+o,f=a+a,d=s*u,c=s*h,p=s*f,g=o*h,_=o*f,m=a*f,S=l*u,M=l*h,x=l*f,A=n.x,b=n.y,D=n.z;return i[0]=(1-(g+m))*A,i[1]=(c+x)*A,i[2]=(p-M)*A,i[3]=0,i[4]=(c-x)*b,i[5]=(1-(d+m))*b,i[6]=(_+S)*b,i[7]=0,i[8]=(p+M)*D,i[9]=(_-S)*D,i[10]=(1-(d+g))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Js.set(i[0],i[1],i[2]).length();const o=Js.set(i[4],i[5],i[6]).length(),a=Js.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Fi.copy(this);const u=1/s,h=1/o,f=1/a;return Fi.elements[0]*=u,Fi.elements[1]*=u,Fi.elements[2]*=u,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=f,Fi.elements[9]*=f,Fi.elements[10]*=f,e.setFromRotationMatrix(Fi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=gr){const l=this.elements,u=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let c,p;if(a===gr)c=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===Lc)c=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=c,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=gr){const l=this.elements,u=1/(e-t),h=1/(n-i),f=1/(o-s),d=(e+t)*u,c=(n+i)*h;let p,g;if(a===gr)p=(o+s)*f,g=-2*f;else if(a===Lc)p=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-c,l[2]=0,l[6]=0,l[10]=g,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Js=new B,Fi=new Te,Yx=new B(0,0,0),qx=new B(1,1,1),Fr=new B,yl=new B,ei=new B,cp=new Te,up=new Os;class er{constructor(t=0,e=0,n=0,i=er.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],u=i[5],h=i[9],f=i[2],d=i[6],c=i[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,c),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,c),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,c),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return up.setFromEuler(this),this.setFromQuaternion(up,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class ed{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zx=0;const hp=new B,Qs=new Os,sr=new Te,Ml=new B,oa=new B,jx=new B,$x=new Os,fp=new B(1,0,0),dp=new B(0,1,0),pp=new B(0,0,1),mp={type:"added"},Kx={type:"removed"},to={type:"childadded",child:null},Du={type:"childremoved",child:null};class pn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new B,e=new er,n=new Os,i=new B(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new re}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ed,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.premultiply(Qs),this}rotateX(t){return this.rotateOnAxis(fp,t)}rotateY(t){return this.rotateOnAxis(dp,t)}rotateZ(t){return this.rotateOnAxis(pp,t)}translateOnAxis(t,e){return hp.copy(t).applyQuaternion(this.quaternion),this.position.add(hp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fp,t)}translateY(t){return this.translateOnAxis(dp,t)}translateZ(t){return this.translateOnAxis(pp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ml.copy(t):Ml.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(oa,Ml,this.up):sr.lookAt(Ml,oa,this.up),this.quaternion.setFromRotationMatrix(sr),i&&(sr.extractRotation(i.matrixWorld),Qs.setFromRotationMatrix(sr),this.quaternion.premultiply(Qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mp),to.child=t,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kx),Du.child=t,this.dispatchEvent(Du),Du.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sr.multiply(t.parent.matrixWorld)),t.applyMatrix4(sr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mp),to.child=t,this.dispatchEvent(to),to.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,t,jx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,$x,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),c=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),c.length>0&&(n.animations=c),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}pn.DEFAULT_UP=new B(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ii=new B,or=new B,Au=new B,ar=new B,eo=new B,no=new B,_p=new B,Tu=new B,bu=new B,wu=new B,Cu=new Ce,Ru=new Ce,Pu=new Ce;class ki{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ii.subVectors(t,e),i.cross(Ii);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ii.subVectors(i,e),or.subVectors(n,e),Au.subVectors(t,e);const o=Ii.dot(Ii),a=Ii.dot(or),l=Ii.dot(Au),u=or.dot(or),h=or.dot(Au),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,c=(u*l-a*h)*d,p=(o*h-a*l)*d;return s.set(1-c-p,p,c)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ar.x),l.addScaledVector(o,ar.y),l.addScaledVector(a,ar.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Cu.setScalar(0),Ru.setScalar(0),Pu.setScalar(0),Cu.fromBufferAttribute(t,e),Ru.fromBufferAttribute(t,n),Pu.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Cu,s.x),o.addScaledVector(Ru,s.y),o.addScaledVector(Pu,s.z),o}static isFrontFacing(t,e,n,i){return Ii.subVectors(n,e),or.subVectors(t,e),Ii.cross(or).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Ii.cross(or).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ki.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ki.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ki.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ki.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ki.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;eo.subVectors(i,n),no.subVectors(s,n),Tu.subVectors(t,n);const l=eo.dot(Tu),u=no.dot(Tu);if(l<=0&&u<=0)return e.copy(n);bu.subVectors(t,i);const h=eo.dot(bu),f=no.dot(bu);if(h>=0&&f<=h)return e.copy(i);const d=l*f-h*u;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(eo,o);wu.subVectors(t,s);const c=eo.dot(wu),p=no.dot(wu);if(p>=0&&c<=p)return e.copy(s);const g=c*u-l*p;if(g<=0&&u>=0&&p<=0)return a=u/(u-p),e.copy(n).addScaledVector(no,a);const _=h*p-c*f;if(_<=0&&f-h>=0&&c-p>=0)return _p.subVectors(s,i),a=(f-h)/(f-h+(c-p)),e.copy(i).addScaledVector(_p,a);const m=1/(_+g+d);return o=g*m,a=d*m,e.copy(n).addScaledVector(eo,o).addScaledVector(no,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const b_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function Lu(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Me.workingColorSpace){if(t=Fx(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Lu(o,s,t+1/3),this.g=Lu(o,s,t),this.b=Lu(o,s,t-1/3)}return Me.toWorkingColorSpace(this,i),this}setStyle(t,e=Ti){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ti){const n=b_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}copyLinearToSRGB(t){return this.r=To(t.r),this.g=To(t.g),this.b=To(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ti){return Me.fromWorkingColorSpace(En.copy(this),t),Math.round(le(En.r*255,0,255))*65536+Math.round(le(En.g*255,0,255))*256+Math.round(le(En.b*255,0,255))}getHexString(t=Ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.fromWorkingColorSpace(En.copy(this),e);const n=En.r,i=En.g,s=En.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=h,t}getRGB(t,e=Me.workingColorSpace){return Me.fromWorkingColorSpace(En.copy(this),e),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=Ti){Me.fromWorkingColorSpace(En.copy(this),t);const e=En.r,n=En.g,i=En.b;return t!==Ti?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ir),this.setHSL(Ir.h+t,Ir.s+e,Ir.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ir),t.getHSL(Sl);const n=mu(Ir.h,Sl.h,e),i=mu(Ir.s,Sl.s,e),s=mu(Ir.l,Sl.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new qt;qt.NAMES=b_;let Jx=0;class Qo extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=Do,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=Sh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Do&&(n.blending=this.blending),this.side!==Jr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mh&&(n.blendSrc=this.blendSrc),this.blendDst!==Sh&&(n.blendDst=this.blendDst),this.blendEquation!==vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==np&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zn extends Qo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=f_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ze=new B,El=new Nt;let Qx=0;class Hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ip,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)El.fromBufferAttribute(this,e),El.applyMatrix3(t),this.setXY(e,El.x,El.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ia(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ia(e,this.array)),e}setX(t,e){return this.normalized&&(e=Gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ia(e,this.array)),e}setY(t,e){return this.normalized&&(e=Gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ia(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ia(e,this.array)),e}setW(t,e){return this.normalized&&(e=Gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Gn(e,this.array),n=Gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Gn(e,this.array),n=Gn(n,this.array),i=Gn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Gn(e,this.array),n=Gn(n,this.array),i=Gn(i,this.array),s=Gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ip&&(t.usage=this.usage),t}}class w_ extends Hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class C_ extends Hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ke extends Hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let tv=0;const Si=new Te,Fu=new pn,io=new B,ni=new Ws,aa=new Ws,un=new B;class Pn extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(A_(t)?C_:w_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new re().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,e,n){return Si.makeTranslation(t,e,n),this.applyMatrix4(Si),this}scale(t,e,n){return Si.makeScale(t,e,n),this.applyMatrix4(Si),this}lookAt(t){return Fu.lookAt(t),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ke(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];aa.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(ni.min,aa.min),ni.expandByPoint(un),un.addVectors(ni.max,aa.max),ni.expandByPoint(un)):(ni.expandByPoint(aa.min),ni.expandByPoint(aa.max))}ni.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)un.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(un));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)un.fromBufferAttribute(a,u),l&&(io.fromBufferAttribute(t,u),un.add(io)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new B,l[w]=new B;const u=new B,h=new B,f=new B,d=new Nt,c=new Nt,p=new Nt,g=new B,_=new B;function m(w,y,v){u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,v),d.fromBufferAttribute(s,w),c.fromBufferAttribute(s,y),p.fromBufferAttribute(s,v),h.sub(u),f.sub(u),c.sub(d),p.sub(d);const R=1/(c.x*p.y-p.x*c.y);isFinite(R)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(f,-c.y).multiplyScalar(R),_.copy(f).multiplyScalar(c.x).addScaledVector(h,-p.x).multiplyScalar(R),a[w].add(g),a[y].add(g),a[v].add(g),l[w].add(_),l[y].add(_),l[v].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let w=0,y=S.length;w<y;++w){const v=S[w],R=v.start,N=v.count;for(let P=R,z=R+N;P<z;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const M=new B,x=new B,A=new B,b=new B;function D(w){A.fromBufferAttribute(i,w),b.copy(A);const y=a[w];M.copy(y),M.sub(A.multiplyScalar(A.dot(y))).normalize(),x.crossVectors(b,y);const R=x.dot(l[w])<0?-1:1;o.setXYZW(w,M.x,M.y,M.z,R)}for(let w=0,y=S.length;w<y;++w){const v=S[w],R=v.start,N=v.count;for(let P=R,z=R+N;P<z;P+=3)D(t.getX(P+0)),D(t.getX(P+1)),D(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,c=n.count;d<c;d++)n.setXYZ(d,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,u=new B,h=new B,f=new B;if(t)for(let d=0,c=t.count;d<c;d+=3){const p=t.getX(d+0),g=t.getX(d+1),_=t.getX(d+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,_),a.add(h),l.add(h),u.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let d=0,c=e.count;d<c;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,l){const u=a.array,h=a.itemSize,f=a.normalized,d=new u.constructor(l.length*h);let c=0,p=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?c=l[g]*a.data.stride+a.offset:c=l[g]*h;for(let m=0;m<h;m++)d[p++]=u[c++]}return new Hn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],u=t(l,n);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,f=u.length;h<f;h++){const d=u[h],c=t(d,n);l.push(c)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let f=0,d=u.length;f<d;f++){const c=u[f];h.push(c.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const u in i){const h=i[u];this.setAttribute(u,h.clone(e))}const s=t.morphAttributes;for(const u in s){const h=[],f=s[u];for(let d=0,c=f.length;d<c;d++)h.push(f[d].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gp=new Te,as=new nu,Dl=new Jo,xp=new B,Al=new B,Tl=new B,bl=new B,Iu=new B,wl=new B,vp=new B,Cl=new B;class Oe extends pn{constructor(t=new Pn,e=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){wl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],f=s[l];h!==0&&(Iu.fromBufferAttribute(f,t),o?wl.addScaledVector(Iu,h):wl.addScaledVector(Iu.sub(e),h))}e.add(wl)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dl.copy(n.boundingSphere),Dl.applyMatrix4(s),as.copy(t.ray).recast(t.near),!(Dl.containsPoint(as.origin)===!1&&(as.intersectSphere(Dl,xp)===null||as.origin.distanceToSquared(xp)>(t.far-t.near)**2))&&(gp.copy(s).invert(),as.copy(t.ray).applyMatrix4(gp),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,c=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){const _=d[p],m=o[_.materialIndex],S=Math.max(_.start,c.start),M=Math.min(a.count,Math.min(_.start+_.count,c.start+c.count));for(let x=S,A=M;x<A;x+=3){const b=a.getX(x),D=a.getX(x+1),w=a.getX(x+2);i=Rl(this,m,t,n,u,h,f,b,D,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const p=Math.max(0,c.start),g=Math.min(a.count,c.start+c.count);for(let _=p,m=g;_<m;_+=3){const S=a.getX(_),M=a.getX(_+1),x=a.getX(_+2);i=Rl(this,o,t,n,u,h,f,S,M,x),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){const _=d[p],m=o[_.materialIndex],S=Math.max(_.start,c.start),M=Math.min(l.count,Math.min(_.start+_.count,c.start+c.count));for(let x=S,A=M;x<A;x+=3){const b=x,D=x+1,w=x+2;i=Rl(this,m,t,n,u,h,f,b,D,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const p=Math.max(0,c.start),g=Math.min(l.count,c.start+c.count);for(let _=p,m=g;_<m;_+=3){const S=_,M=_+1,x=_+2;i=Rl(this,o,t,n,u,h,f,S,M,x),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}}}function ev(r,t,e,n,i,s,o,a){let l;if(t.side===yn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Jr,a),l===null)return null;Cl.copy(a),Cl.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(Cl);return u<e.near||u>e.far?null:{distance:u,point:Cl.clone(),object:r}}function Rl(r,t,e,n,i,s,o,a,l,u){r.getVertexPosition(a,Al),r.getVertexPosition(l,Tl),r.getVertexPosition(u,bl);const h=ev(r,t,e,n,Al,Tl,bl,vp);if(h){const f=new B;ki.getBarycoord(vp,Al,Tl,bl,f),i&&(h.uv=ki.getInterpolatedAttribute(i,a,l,u,f,new Nt)),s&&(h.uv1=ki.getInterpolatedAttribute(s,a,l,u,f,new Nt)),o&&(h.normal=ki.getInterpolatedAttribute(o,a,l,u,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new B,materialIndex:0};ki.getNormal(Al,Tl,bl,d.normal),h.face=d,h.barycoord=f}return h}class Ar extends Pn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],f=[];let d=0,c=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ke(u,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(f,2));function p(g,_,m,S,M,x,A,b,D,w,y){const v=x/D,R=A/w,N=x/2,P=A/2,z=b/2,H=D+1,I=w+1;let V=0,W=0;const et=new B;for(let L=0;L<I;L++){const it=L*R-P;for(let Tt=0;Tt<H;Tt++){const zt=Tt*v-N;et[g]=zt*S,et[_]=it*M,et[m]=z,u.push(et.x,et.y,et.z),et[g]=0,et[_]=0,et[m]=b>0?1:-1,h.push(et.x,et.y,et.z),f.push(Tt/D),f.push(1-L/w),V+=1}}for(let L=0;L<w;L++)for(let it=0;it<D;it++){const Tt=d+it+H*L,zt=d+it+H*(L+1),j=d+(it+1)+H*(L+1),ut=d+(it+1)+H*L;l.push(Tt,zt,ut),l.push(zt,j,ut),W+=6}a.addGroup(c,W,y),c+=W,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Go(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Un(r){const t={};for(let e=0;e<r.length;e++){const n=Go(r[e]);for(const i in n)t[i]=n[i]}return t}function nv(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function R_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const iv={clone:Go,merge:Un};var rv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qr extends Qo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rv,this.fragmentShader=sv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Go(t.uniforms),this.uniformsGroups=nv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class P_ extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=gr}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new B,yp=new Nt,Mp=new Nt;class qn extends P_{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=af*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return af*2*Math.atan(Math.tan(hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ur.x,Ur.y).multiplyScalar(-t/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ur.x,Ur.y).multiplyScalar(-t/Ur.z)}getViewSize(t,e){return this.getViewBounds(t,yp,Mp),e.subVectors(Mp,yp)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ro=-90,so=1;class ov extends pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qn(ro,so,t,e);i.layers=this.layers,this.add(i);const s=new qn(ro,so,t,e);s.layers=this.layers,this.add(s);const o=new qn(ro,so,t,e);o.layers=this.layers,this.add(o);const a=new qn(ro,so,t,e);a.layers=this.layers,this.add(a);const l=new qn(ro,so,t,e);l.layers=this.layers,this.add(l);const u=new qn(ro,so,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===gr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),c=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,u),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,d,c),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class L_ extends Cn{constructor(t,e,n,i,s,o,a,l,u,h){t=t!==void 0?t:[],e=e!==void 0?e:Bo,super(t,e,n,i,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class av extends Ns{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new L_(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Zi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ar(5,5,5),s=new Qr({name:"CubemapFromEquirect",uniforms:Go(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:qr});s.uniforms.tEquirect.value=e;const o=new Oe(i,s),a=e.minFilter;return e.minFilter===Es&&(e.minFilter=Zi),new ov(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}class Pl extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lv={type:"move"};class Uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const g of t.hand.values()){const _=e.getJointPose(g,n),m=this._getHandJoint(u,g);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),c=.02,p=.005;u.inputState.pinching&&d>c+p?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=c-p&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pl;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class nd extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class cv extends Cn{constructor(t=null,e=1,n=1,i,s,o,a,l,u=pi,h=pi,f,d){super(null,o,a,l,u,h,i,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lf extends Hn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const oo=new Te,Sp=new Te,Ll=[],Ep=new Ws,uv=new Te,la=new Oe,ca=new Jo;class hv extends Oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new lf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,uv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ws),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,oo),Ep.copy(t.boundingBox).applyMatrix4(oo),this.boundingBox.union(Ep)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,oo),ca.copy(t.boundingSphere).applyMatrix4(oo),this.boundingSphere.union(ca)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(n),t.ray.intersectsSphere(ca)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,oo),Sp.multiplyMatrices(n,oo),la.matrixWorld=Sp,la.raycast(t,Ll);for(let o=0,a=Ll.length;o<a;o++){const l=Ll[o];l.instanceId=s,l.object=this,e.push(l)}Ll.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new lf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new cv(new Float32Array(i*this.count),i,this.count,$f,ji));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Nu=new B,fv=new B,dv=new re;class fr{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Nu.subVectors(n,e).cross(fv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Nu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||dv.getNormalMatrix(t),i=this.coplanarPoint(Nu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Jo,Fl=new B;class id{constructor(t=new fr,e=new fr,n=new fr,i=new fr,s=new fr,o=new fr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gr){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],u=i[4],h=i[5],f=i[6],d=i[7],c=i[8],p=i[9],g=i[10],_=i[11],m=i[12],S=i[13],M=i[14],x=i[15];if(n[0].setComponents(l-s,d-u,_-c,x-m).normalize(),n[1].setComponents(l+s,d+u,_+c,x+m).normalize(),n[2].setComponents(l+o,d+h,_+p,x+S).normalize(),n[3].setComponents(l-o,d-h,_-p,x-S).normalize(),n[4].setComponents(l-a,d-f,_-g,x-M).normalize(),e===gr)n[5].setComponents(l+a,d+f,_+g,x+M).normalize();else if(e===Lc)n[5].setComponents(a,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Fl.x=i.normal.x>0?t.max.x:t.min.x,Fl.y=i.normal.y>0?t.max.y:t.min.y,Fl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iu extends Qo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Dp=new Te,cf=new nu,Il=new Jo,Ul=new B;class rd extends pn{constructor(t=new Pn,e=new iu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Il.copy(n.boundingSphere),Il.applyMatrix4(i),Il.radius+=s,t.ray.intersectsSphere(Il)===!1)return;Dp.copy(i).invert(),cf.copy(t.ray).applyMatrix4(Dp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),c=Math.min(u.count,o.start+o.count);for(let p=d,g=c;p<g;p++){const _=u.getX(p);Ul.fromBufferAttribute(f,_),Ap(Ul,_,l,i,t,e,this)}}else{const d=Math.max(0,o.start),c=Math.min(f.count,o.start+o.count);for(let p=d,g=c;p<g;p++)Ul.fromBufferAttribute(f,p),Ap(Ul,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ap(r,t,e,n,i,s,o){const a=cf.distanceSqToPoint(r);if(a<e){const l=new B;cf.closestPointToPoint(r,l),l.applyMatrix4(n);const u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class F_ extends Cn{constructor(t,e,n,i,s,o,a,l,u,h=Ao){if(h!==Ao&&h!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ao&&(n=Us),n===void 0&&h===Ho&&(n=ko),super(null,i,s,o,a,l,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pi,this.minFilter=l!==void 0?l:pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new td(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Cr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,u;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),u=n[i]-o,u<0)a=i+1;else if(u>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,c=(o-h)/d;return(i+c)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Nt:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new B,i=[],s=[],o=[],a=new B,l=new Te;for(let c=0;c<=t;c++){const p=c/t;i[c]=this.getTangentAt(p,new B)}s[0]=new B,o[0]=new B;let u=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=u&&(u=h,n.set(1,0,0)),f<=u&&(u=f,n.set(0,1,0)),d<=u&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let c=1;c<=t;c++){if(s[c]=s[c-1].clone(),o[c]=o[c-1].clone(),a.crossVectors(i[c-1],i[c]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(le(i[c-1].dot(i[c]),-1,1));s[c].applyMatrix4(l.makeRotationAxis(a,p))}o[c].crossVectors(i[c],s[c])}if(e===!0){let c=Math.acos(le(s[0].dot(s[t]),-1,1));c/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(c=-c);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],c*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class I_ extends Cr{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Nt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,c=u-this.aY;l=d*h-c*f+this.aX,u=d*f+c*h+this.aY}return n.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class pv extends I_{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sd(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){i(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,h,f){let d=(o-s)/u-(a-s)/(u+h)+(a-o)/h,c=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,c*=h,i(o,a,d,c)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Nl=new B,Ou=new sd,Bu=new sd,zu=new sd;class U_ extends Cr{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new B){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,h;this.closed||a>0?u=i[(a-1)%s]:(Nl.subVectors(i[0],i[1]).add(i[0]),u=Nl);const f=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Nl.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Nl),this.curveType==="centripetal"||this.curveType==="chordal"){const c=this.curveType==="chordal"?.5:.25;let p=Math.pow(u.distanceToSquared(f),c),g=Math.pow(f.distanceToSquared(d),c),_=Math.pow(d.distanceToSquared(h),c);g<1e-4&&(g=1),p<1e-4&&(p=g),_<1e-4&&(_=g),Ou.initNonuniformCatmullRom(u.x,f.x,d.x,h.x,p,g,_),Bu.initNonuniformCatmullRom(u.y,f.y,d.y,h.y,p,g,_),zu.initNonuniformCatmullRom(u.z,f.z,d.z,h.z,p,g,_)}else this.curveType==="catmullrom"&&(Ou.initCatmullRom(u.x,f.x,d.x,h.x,this.tension),Bu.initCatmullRom(u.y,f.y,d.y,h.y,this.tension),zu.initCatmullRom(u.z,f.z,d.z,h.z,this.tension));return n.set(Ou.calc(l),Bu.calc(l),zu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new B().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Tp(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function mv(r,t){const e=1-r;return e*e*t}function _v(r,t){return 2*(1-r)*r*t}function gv(r,t){return r*r*t}function Ra(r,t,e,n){return mv(r,t)+_v(r,e)+gv(r,n)}function xv(r,t){const e=1-r;return e*e*e*t}function vv(r,t){const e=1-r;return 3*e*e*r*t}function yv(r,t){return 3*(1-r)*r*r*t}function Mv(r,t){return r*r*r*t}function Pa(r,t,e,n,i){return xv(r,t)+vv(r,e)+yv(r,n)+Mv(r,i)}class Sv extends Cr{constructor(t=new Nt,e=new Nt,n=new Nt,i=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Nt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Pa(t,i.x,s.x,o.x,a.x),Pa(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ev extends Cr{constructor(t=new B,e=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new B){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Pa(t,i.x,s.x,o.x,a.x),Pa(t,i.y,s.y,o.y,a.y),Pa(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dv extends Cr{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Av extends Cr{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tv extends Cr{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ra(t,i.x,s.x,o.x),Ra(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class N_ extends Cr{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ra(t,i.x,s.x,o.x),Ra(t,i.y,s.y,o.y),Ra(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bv extends Cr{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],u=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Tp(a,l.x,u.x,h.x,f.x),Tp(a,l.y,u.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Nt().fromArray(i))}return this}}var wv=Object.freeze({__proto__:null,ArcCurve:pv,CatmullRomCurve3:U_,CubicBezierCurve:Sv,CubicBezierCurve3:Ev,EllipseCurve:I_,LineCurve:Dv,LineCurve3:Av,QuadraticBezierCurve:Tv,QuadraticBezierCurve3:N_,SplineCurve:bv});class od extends Pn{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;i=Math.floor(i),s=Math.floor(s);const h=[],f=[],d=[],c=[];let p=0;const g=[],_=n/2;let m=0;S(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ke(f,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(c,2));function S(){const x=new B,A=new B;let b=0;const D=(e-t)/n;for(let w=0;w<=s;w++){const y=[],v=w/s,R=v*(e-t)+t;for(let N=0;N<=i;N++){const P=N/i,z=P*l+a,H=Math.sin(z),I=Math.cos(z);A.x=R*H,A.y=-v*n+_,A.z=R*I,f.push(A.x,A.y,A.z),x.set(H,D,I).normalize(),d.push(x.x,x.y,x.z),c.push(P,1-v),y.push(p++)}g.push(y)}for(let w=0;w<i;w++)for(let y=0;y<s;y++){const v=g[y][w],R=g[y+1][w],N=g[y+1][w+1],P=g[y][w+1];(t>0||y!==0)&&(h.push(v,R,P),b+=3),(e>0||y!==s-1)&&(h.push(R,N,P),b+=3)}u.addGroup(m,b,0),m+=b}function M(x){const A=p,b=new Nt,D=new B;let w=0;const y=x===!0?t:e,v=x===!0?1:-1;for(let N=1;N<=i;N++)f.push(0,_*v,0),d.push(0,v,0),c.push(.5,.5),p++;const R=p;for(let N=0;N<=i;N++){const z=N/i*l+a,H=Math.cos(z),I=Math.sin(z);D.x=y*I,D.y=_*v,D.z=y*H,f.push(D.x,D.y,D.z),d.push(0,v,0),b.x=H*.5+.5,b.y=I*.5*v+.5,c.push(b.x,b.y),p++}for(let N=0;N<i;N++){const P=A+N,z=R+N;x===!0?h.push(z,z+1,P):h.push(z+1,z,P),w+=3}u.addGroup(m,w,x===!0?1:2),m+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new od(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ad extends od{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ad(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ld extends Pn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),u(n),h(),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(s.slice(),3)),this.setAttribute("uv",new ke(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new B,x=new B,A=new B;for(let b=0;b<e.length;b+=3)c(e[b+0],M),c(e[b+1],x),c(e[b+2],A),l(M,x,A,S)}function l(S,M,x,A){const b=A+1,D=[];for(let w=0;w<=b;w++){D[w]=[];const y=S.clone().lerp(x,w/b),v=M.clone().lerp(x,w/b),R=b-w;for(let N=0;N<=R;N++)N===0&&w===b?D[w][N]=y:D[w][N]=y.clone().lerp(v,N/R)}for(let w=0;w<b;w++)for(let y=0;y<2*(b-w)-1;y++){const v=Math.floor(y/2);y%2===0?(d(D[w][v+1]),d(D[w+1][v]),d(D[w][v])):(d(D[w][v+1]),d(D[w+1][v+1]),d(D[w+1][v]))}}function u(S){const M=new B;for(let x=0;x<s.length;x+=3)M.x=s[x+0],M.y=s[x+1],M.z=s[x+2],M.normalize().multiplyScalar(S),s[x+0]=M.x,s[x+1]=M.y,s[x+2]=M.z}function h(){const S=new B;for(let M=0;M<s.length;M+=3){S.x=s[M+0],S.y=s[M+1],S.z=s[M+2];const x=_(S)/2/Math.PI+.5,A=m(S)/Math.PI+.5;o.push(x,1-A)}p(),f()}function f(){for(let S=0;S<o.length;S+=6){const M=o[S+0],x=o[S+2],A=o[S+4],b=Math.max(M,x,A),D=Math.min(M,x,A);b>.9&&D<.1&&(M<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),A<.2&&(o[S+4]+=1))}}function d(S){s.push(S.x,S.y,S.z)}function c(S,M){const x=S*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function p(){const S=new B,M=new B,x=new B,A=new B,b=new Nt,D=new Nt,w=new Nt;for(let y=0,v=0;y<s.length;y+=9,v+=6){S.set(s[y+0],s[y+1],s[y+2]),M.set(s[y+3],s[y+4],s[y+5]),x.set(s[y+6],s[y+7],s[y+8]),b.set(o[v+0],o[v+1]),D.set(o[v+2],o[v+3]),w.set(o[v+4],o[v+5]),A.copy(S).add(M).add(x).divideScalar(3);const R=_(A);g(b,v+0,S,R),g(D,v+2,M,R),g(w,v+4,x,R)}}function g(S,M,x,A){A<0&&S.x===1&&(o[M]=S.x-1),x.x===0&&x.z===0&&(o[M]=A/2/Math.PI+.5)}function _(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ld(t.vertices,t.indices,t.radius,t.details)}}class cd extends ld{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cd(t.radius,t.detail)}}class ru extends Pn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),u=a+1,h=l+1,f=t/a,d=e/l,c=[],p=[],g=[],_=[];for(let m=0;m<h;m++){const S=m*d-o;for(let M=0;M<u;M++){const x=M*f-s;p.push(x,-S,0),g.push(0,0,1),_.push(M/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const M=S+u*m,x=S+u*(m+1),A=S+1+u*(m+1),b=S+1+u*m;c.push(M,x,b),c.push(x,A,b)}this.setIndex(c),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(g,3)),this.setAttribute("uv",new ke(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.width,t.height,t.widthSegments,t.heightSegments)}}class Tr extends Pn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const h=[],f=new B,d=new B,c=[],p=[],g=[],_=[];for(let m=0;m<=n;m++){const S=[],M=m/n;let x=0;m===0&&o===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const b=A/e;f.x=-t*Math.cos(i+b*s)*Math.sin(o+M*a),f.y=t*Math.cos(o+M*a),f.z=t*Math.sin(i+b*s)*Math.sin(o+M*a),p.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),_.push(b+x,1-M),S.push(u++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){const M=h[m][S+1],x=h[m][S],A=h[m+1][S],b=h[m+1][S+1];(m!==0||o>0)&&c.push(M,x,b),(m!==n-1||l<Math.PI)&&c.push(x,A,b)}this.setIndex(c),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(g,3)),this.setAttribute("uv",new ke(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ul extends Pn{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],u=[],h=new B,f=new B,d=new B;for(let c=0;c<=n;c++)for(let p=0;p<=i;p++){const g=p/i*s,_=c/n*Math.PI*2;f.x=(t+e*Math.cos(_))*Math.cos(g),f.y=(t+e*Math.cos(_))*Math.sin(g),f.z=e*Math.sin(_),a.push(f.x,f.y,f.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),u.push(p/i),u.push(c/n)}for(let c=1;c<=n;c++)for(let p=1;p<=i;p++){const g=(i+1)*c+p-1,_=(i+1)*(c-1)+p-1,m=(i+1)*(c-1)+p,S=(i+1)*c+p;o.push(g,_,S),o.push(_,m,S)}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ud extends Pn{constructor(t=new N_(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,u=new Nt;let h=new B;const f=[],d=[],c=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new ke(f,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(c,2));function g(){for(let M=0;M<e;M++)_(M);_(s===!1?e:0),S(),m()}function _(M){h=t.getPointAt(M/e,h);const x=o.normals[M],A=o.binormals[M];for(let b=0;b<=i;b++){const D=b/i*Math.PI*2,w=Math.sin(D),y=-Math.cos(D);l.x=y*x.x+w*A.x,l.y=y*x.y+w*A.y,l.z=y*x.z+w*A.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=e;M++)for(let x=1;x<=i;x++){const A=(i+1)*(M-1)+(x-1),b=(i+1)*M+(x-1),D=(i+1)*M+x,w=(i+1)*(M-1)+x;p.push(A,b,w),p.push(b,D,w)}}function S(){for(let M=0;M<=e;M++)for(let x=0;x<=i;x++)u.x=M/e,u.y=x/i,c.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ud(new wv[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class O_ extends Qo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=E_,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class B_ extends O_{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Cv extends Qo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ex,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rv extends Qo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const bp={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Pv{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){const f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){const c=u[f],p=u[f+1];if(c.global&&(c.lastIndex=0),c.test(h))return p}return null}}}const Lv=new Pv;class hd{constructor(t){this.manager=t!==void 0?t:Lv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}hd.DEFAULT_MATERIAL_NAME="__DEFAULT";class Fv extends hd{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=bp.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=ja("img");function l(){h(),bp.add(t,this),e&&e(this),s.manager.itemEnd(t)}function u(f){h(),i&&i(f),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Iv extends hd{constructor(t){super(t)}load(t,e,n,i){const s=new Cn,o=new Fv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class z_ extends pn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ku=new Te,wp=new B,Cp=new B;class Uv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new id,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wp.setFromMatrixPosition(t.matrixWorld),e.position.copy(wp),Cp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cp),e.updateMatrixWorld(),ku.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ku),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ku)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Rp=new Te,ua=new B,Hu=new B;class Nv extends Uv{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new Ce(2,1,1,1),new Ce(0,1,1,1),new Ce(3,1,1,1),new Ce(1,1,1,1),new Ce(3,0,1,1),new Ce(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ua.setFromMatrixPosition(t.matrixWorld),n.position.copy(ua),Hu.copy(n.position),Hu.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Hu),n.updateMatrixWorld(),i.makeTranslation(-ua.x,-ua.y,-ua.z),Rp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rp)}}class k_ extends z_{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ov extends P_{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class fd extends z_{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bv extends qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class zv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Pp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Pp(){return performance.now()}const Lp=new Te;class H_{constructor(t,e,n=0,i=1/0){this.ray=new nu(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ed,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lp),this}intersectObject(t,e=!0,n=[]){return uf(t,this,n,e),n.sort(Fp),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)uf(t[i],this,n,e);return n.sort(Fp),n}}function Fp(r,t){return r.distance-t.distance}function uf(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)uf(s[o],t,e,!0)}}class Ip{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class V_ extends Oe{constructor(t,e,n){const i=new Tr(e,4,2),s=new Zn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}class kv extends Gs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Up(r,t,e,n){const i=Hv(n);switch(e){case g_:return r*t;case v_:return r*t;case y_:return r*t*2;case $f:return r*t/i.components*i.byteLength;case Kf:return r*t/i.components*i.byteLength;case M_:return r*t*2/i.components*i.byteLength;case Jf:return r*t*2/i.components*i.byteLength;case x_:return r*t*3/i.components*i.byteLength;case Hi:return r*t*4/i.components*i.byteLength;case Qf:return r*t*4/i.components*i.byteLength;case oc:case ac:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case lc:case cc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Uh:case Oh:return Math.max(r,16)*Math.max(t,8)/4;case Ih:case Nh:return Math.max(r,8)*Math.max(t,8)/2;case Bh:case zh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case kh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Yh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case qh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case jh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case $h:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Jh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Qh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case tf:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case uc:case ef:case nf:return Math.ceil(r/4)*Math.ceil(t/4)*16;case S_:case rf:return Math.ceil(r/4)*Math.ceil(t/4)*8;case sf:case of:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hv(r){switch(r){case Dr:case p_:return{byteLength:1,components:1};case Za:case m_:case ll:return{byteLength:2,components:1};case Zf:case jf:return{byteLength:2,components:4};case Us:case qf:case ji:return{byteLength:4,components:1};case __:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function G_(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Vv(r){const t=new WeakMap;function e(a,l){const u=a.array,h=a.usage,f=u.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,u,h),a.onUploadCallback();let c;if(u instanceof Float32Array)c=r.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?c=r.HALF_FLOAT:c=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)c=r.SHORT;else if(u instanceof Uint32Array)c=r.UNSIGNED_INT;else if(u instanceof Int32Array)c=r.INT;else if(u instanceof Int8Array)c=r.BYTE;else if(u instanceof Uint8Array)c=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)c=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:c,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,u){const h=l.array,f=l.updateRanges;if(r.bindBuffer(u,a),f.length===0)r.bufferSubData(u,0,h);else{f.sort((c,p)=>c.start-p.start);let d=0;for(let c=1;c<f.length;c++){const p=f[d],g=f[c];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,f[d]=g)}f.length=d+1;for(let c=0,p=f.length;c<p;c++){const g=f[c];r.bufferSubData(u,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:i,remove:s,update:o}}var Gv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wv=`#ifdef USE_ALPHAHASH
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
#endif`,Xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jv=`#ifdef USE_AOMAP
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
#endif`,$v=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kv=`#ifdef USE_BATCHING
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
#endif`,Jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ey=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ny=`#ifdef USE_IRIDESCENCE
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
#endif`,iy=`#ifdef USE_BUMPMAP
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
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fy=`#define PI 3.141592653589793
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
} // validated`,dy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,py=`vec3 transformedNormal = objectNormal;
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
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",yy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,My=`#ifdef USE_ENVMAP
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
#endif`,Sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ey=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,by=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ry=`#ifdef USE_GRADIENTMAP
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
}`,Py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ly=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iy=`uniform bool receiveShadow;
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
#endif`,Uy=`#ifdef USE_ENVMAP
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
#endif`,Ny=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,By=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ky=`PhysicalMaterial material;
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
#endif`,Hy=`struct PhysicalMaterial {
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
}`,Vy=`
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
#endif`,Gy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$y=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jy=`#if defined( USE_POINTS_UV )
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
#endif`,Qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rM=`#ifdef USE_MORPHTARGETS
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
#endif`,sM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hM=`#ifdef USE_NORMALMAP
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
#endif`,fM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_M=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bM=`float getShadowMask() {
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
}`,wM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CM=`#ifdef USE_SKINNING
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
#endif`,RM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PM=`#ifdef USE_SKINNING
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
#endif`,LM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NM=`#ifdef USE_TRANSMISSION
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
#endif`,OM=`#ifdef USE_TRANSMISSION
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
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GM=`uniform sampler2D t2D;
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
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZM=`#include <common>
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
}`,jM=`#if DEPTH_PACKING == 3200
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
}`,$M=`#define DISTANCE
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
}`,KM=`#define DISTANCE
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
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`uniform float scale;
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
}`,eS=`uniform vec3 diffuse;
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
}`,nS=`#include <common>
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
}`,iS=`uniform vec3 diffuse;
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
}`,rS=`#define LAMBERT
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
}`,sS=`#define LAMBERT
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
}`,oS=`#define MATCAP
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
}`,aS=`#define MATCAP
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
}`,lS=`#define NORMAL
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
}`,cS=`#define NORMAL
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
}`,uS=`#define PHONG
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
}`,hS=`#define PHONG
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
}`,fS=`#define STANDARD
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
}`,dS=`#define STANDARD
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
}`,pS=`#define TOON
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
}`,mS=`#define TOON
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
}`,_S=`uniform float size;
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
}`,gS=`uniform vec3 diffuse;
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
}`,xS=`#include <common>
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
}`,vS=`uniform vec3 color;
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
}`,yS=`uniform float rotation;
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
}`,MS=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:Gv,alphahash_pars_fragment:Wv,alphamap_fragment:Xv,alphamap_pars_fragment:Yv,alphatest_fragment:qv,alphatest_pars_fragment:Zv,aomap_fragment:jv,aomap_pars_fragment:$v,batching_pars_vertex:Kv,batching_vertex:Jv,begin_vertex:Qv,beginnormal_vertex:ty,bsdfs:ey,iridescence_fragment:ny,bumpmap_pars_fragment:iy,clipping_planes_fragment:ry,clipping_planes_pars_fragment:sy,clipping_planes_pars_vertex:oy,clipping_planes_vertex:ay,color_fragment:ly,color_pars_fragment:cy,color_pars_vertex:uy,color_vertex:hy,common:fy,cube_uv_reflection_fragment:dy,defaultnormal_vertex:py,displacementmap_pars_vertex:my,displacementmap_vertex:_y,emissivemap_fragment:gy,emissivemap_pars_fragment:xy,colorspace_fragment:vy,colorspace_pars_fragment:yy,envmap_fragment:My,envmap_common_pars_fragment:Sy,envmap_pars_fragment:Ey,envmap_pars_vertex:Dy,envmap_physical_pars_fragment:Uy,envmap_vertex:Ay,fog_vertex:Ty,fog_pars_vertex:by,fog_fragment:wy,fog_pars_fragment:Cy,gradientmap_pars_fragment:Ry,lightmap_pars_fragment:Py,lights_lambert_fragment:Ly,lights_lambert_pars_fragment:Fy,lights_pars_begin:Iy,lights_toon_fragment:Ny,lights_toon_pars_fragment:Oy,lights_phong_fragment:By,lights_phong_pars_fragment:zy,lights_physical_fragment:ky,lights_physical_pars_fragment:Hy,lights_fragment_begin:Vy,lights_fragment_maps:Gy,lights_fragment_end:Wy,logdepthbuf_fragment:Xy,logdepthbuf_pars_fragment:Yy,logdepthbuf_pars_vertex:qy,logdepthbuf_vertex:Zy,map_fragment:jy,map_pars_fragment:$y,map_particle_fragment:Ky,map_particle_pars_fragment:Jy,metalnessmap_fragment:Qy,metalnessmap_pars_fragment:tM,morphinstance_vertex:eM,morphcolor_vertex:nM,morphnormal_vertex:iM,morphtarget_pars_vertex:rM,morphtarget_vertex:sM,normal_fragment_begin:oM,normal_fragment_maps:aM,normal_pars_fragment:lM,normal_pars_vertex:cM,normal_vertex:uM,normalmap_pars_fragment:hM,clearcoat_normal_fragment_begin:fM,clearcoat_normal_fragment_maps:dM,clearcoat_pars_fragment:pM,iridescence_pars_fragment:mM,opaque_fragment:_M,packing:gM,premultiplied_alpha_fragment:xM,project_vertex:vM,dithering_fragment:yM,dithering_pars_fragment:MM,roughnessmap_fragment:SM,roughnessmap_pars_fragment:EM,shadowmap_pars_fragment:DM,shadowmap_pars_vertex:AM,shadowmap_vertex:TM,shadowmask_pars_fragment:bM,skinbase_vertex:wM,skinning_pars_vertex:CM,skinning_vertex:RM,skinnormal_vertex:PM,specularmap_fragment:LM,specularmap_pars_fragment:FM,tonemapping_fragment:IM,tonemapping_pars_fragment:UM,transmission_fragment:NM,transmission_pars_fragment:OM,uv_pars_fragment:BM,uv_pars_vertex:zM,uv_vertex:kM,worldpos_vertex:HM,background_vert:VM,background_frag:GM,backgroundCube_vert:WM,backgroundCube_frag:XM,cube_vert:YM,cube_frag:qM,depth_vert:ZM,depth_frag:jM,distanceRGBA_vert:$M,distanceRGBA_frag:KM,equirect_vert:JM,equirect_frag:QM,linedashed_vert:tS,linedashed_frag:eS,meshbasic_vert:nS,meshbasic_frag:iS,meshlambert_vert:rS,meshlambert_frag:sS,meshmatcap_vert:oS,meshmatcap_frag:aS,meshnormal_vert:lS,meshnormal_frag:cS,meshphong_vert:uS,meshphong_frag:hS,meshphysical_vert:fS,meshphysical_frag:dS,meshtoon_vert:pS,meshtoon_frag:mS,points_vert:_S,points_frag:gS,shadow_vert:xS,shadow_frag:vS,sprite_vert:yS,sprite_frag:MS},Rt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Yi={basic:{uniforms:Un([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Un([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new qt(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Un([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Un([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Un([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new qt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Un([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Un([Rt.points,Rt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Un([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Un([Rt.common,Rt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Un([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Un([Rt.sprite,Rt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:Un([Rt.common,Rt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:Un([Rt.lights,Rt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Yi.physical={uniforms:Un([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const Ol={r:0,b:0,g:0},cs=new er,SS=new Te;function ES(r,t,e,n,i,s,o){const a=new qt(0);let l=s===!0?0:1,u,h,f=null,d=0,c=null;function p(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function g(M){let x=!1;const A=p(M);A===null?m(a,l):A&&A.isColor&&(m(A,1),x=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(M,x){const A=p(x);A&&(A.isCubeTexture||A.mapping===eu)?(h===void 0&&(h=new Oe(new Ar(1,1,1),new Qr({name:"BackgroundCubeMaterial",uniforms:Go(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,D,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),cs.copy(x.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(SS.makeRotationFromEuler(cs)),h.material.toneMapped=Me.getTransfer(A.colorSpace)!==be,(f!==A||d!==A.version||c!==r.toneMapping)&&(h.material.needsUpdate=!0,f=A,d=A.version,c=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new Oe(new ru(2,2),new Qr({name:"BackgroundMaterial",uniforms:Go(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=Me.getTransfer(A.colorSpace)!==be,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||c!==r.toneMapping)&&(u.material.needsUpdate=!0,f=A,d=A.version,c=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function m(M,x){M.getRGB(Ol,R_(r)),n.buffers.color.setClear(Ol.r,Ol.g,Ol.b,x,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:g,addToRenderList:_,dispose:S}}function DS(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(v,R,N,P,z){let H=!1;const I=f(P,N,R);s!==I&&(s=I,u(s.object)),H=c(v,P,N,z),H&&p(v,P,N,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(v,R,N,P),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function u(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function f(v,R,N){const P=N.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let H=z[R.id];H===void 0&&(H={},z[R.id]=H);let I=H[P];return I===void 0&&(I=d(l()),H[P]=I),I}function d(v){const R=[],N=[],P=[];for(let z=0;z<e;z++)R[z]=0,N[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:P,object:v,attributes:{},index:null}}function c(v,R,N,P){const z=s.attributes,H=R.attributes;let I=0;const V=N.getAttributes();for(const W in V)if(V[W].location>=0){const L=z[W];let it=H[W];if(it===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),L===void 0||L.attribute!==it||it&&L.data!==it.data)return!0;I++}return s.attributesNum!==I||s.index!==P}function p(v,R,N,P){const z={},H=R.attributes;let I=0;const V=N.getAttributes();for(const W in V)if(V[W].location>=0){let L=H[W];L===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(L=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(L=v.instanceColor));const it={};it.attribute=L,L&&L.data&&(it.data=L.data),z[W]=it,I++}s.attributes=z,s.attributesNum=I,s.index=P}function g(){const v=s.newAttributes;for(let R=0,N=v.length;R<N;R++)v[R]=0}function _(v){m(v,0)}function m(v,R){const N=s.newAttributes,P=s.enabledAttributes,z=s.attributeDivisors;N[v]=1,P[v]===0&&(r.enableVertexAttribArray(v),P[v]=1),z[v]!==R&&(r.vertexAttribDivisor(v,R),z[v]=R)}function S(){const v=s.newAttributes,R=s.enabledAttributes;for(let N=0,P=R.length;N<P;N++)R[N]!==v[N]&&(r.disableVertexAttribArray(N),R[N]=0)}function M(v,R,N,P,z,H,I){I===!0?r.vertexAttribIPointer(v,R,N,z,H):r.vertexAttribPointer(v,R,N,P,z,H)}function x(v,R,N,P){g();const z=P.attributes,H=N.getAttributes(),I=R.defaultAttributeValues;for(const V in H){const W=H[V];if(W.location>=0){let et=z[V];if(et===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(et=v.instanceColor)),et!==void 0){const L=et.normalized,it=et.itemSize,Tt=t.get(et);if(Tt===void 0)continue;const zt=Tt.buffer,j=Tt.type,ut=Tt.bytesPerElement,pt=j===r.INT||j===r.UNSIGNED_INT||et.gpuType===qf;if(et.isInterleavedBufferAttribute){const ft=et.data,Mt=ft.stride,Yt=et.offset;if(ft.isInstancedInterleavedBuffer){for(let Bt=0;Bt<W.locationSize;Bt++)m(W.location+Bt,ft.meshPerAttribute);v.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Bt=0;Bt<W.locationSize;Bt++)_(W.location+Bt);r.bindBuffer(r.ARRAY_BUFFER,zt);for(let Bt=0;Bt<W.locationSize;Bt++)M(W.location+Bt,it/W.locationSize,j,L,Mt*ut,(Yt+it/W.locationSize*Bt)*ut,pt)}else{if(et.isInstancedBufferAttribute){for(let ft=0;ft<W.locationSize;ft++)m(W.location+ft,et.meshPerAttribute);v.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ft=0;ft<W.locationSize;ft++)_(W.location+ft);r.bindBuffer(r.ARRAY_BUFFER,zt);for(let ft=0;ft<W.locationSize;ft++)M(W.location+ft,it/W.locationSize,j,L,it*ut,it/W.locationSize*ft*ut,pt)}}else if(I!==void 0){const L=I[V];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(W.location,L);break;case 3:r.vertexAttrib3fv(W.location,L);break;case 4:r.vertexAttrib4fv(W.location,L);break;default:r.vertexAttrib1fv(W.location,L)}}}}S()}function A(){w();for(const v in n){const R=n[v];for(const N in R){const P=R[N];for(const z in P)h(P[z].object),delete P[z];delete R[N]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const N in R){const P=R[N];for(const z in P)h(P[z].object),delete P[z];delete R[N]}delete n[v.id]}function D(v){for(const R in n){const N=n[R];if(N[v.id]===void 0)continue;const P=N[v.id];for(const z in P)h(P[z].object),delete P[z];delete N[v.id]}}function w(){y(),o=!0,s!==i&&(s=i,u(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:D,initAttributes:g,enableAttribute:_,disableUnusedAttributes:S}}function AS(r,t,e){let n;function i(u){n=u}function s(u,h){r.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,f){f!==0&&(r.drawArraysInstanced(n,u,h,f),e.update(h,n,f))}function a(u,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,f);let c=0;for(let p=0;p<f;p++)c+=h[p];e.update(c,n,1)}function l(u,h,f,d){if(f===0)return;const c=t.get("WEBGL_multi_draw");if(c===null)for(let p=0;p<u.length;p++)o(u[p],h[p],d[p]);else{c.multiDrawArraysInstancedWEBGL(n,u,0,h,0,d,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g]*d[g];e.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function TS(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(D){return!(D!==Hi&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const w=D===ll&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Dr&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ji&&!w)}function l(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:c,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:A,maxSamples:b}}function bS(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new fr,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const c=f.length!==0||d||n!==0||i;return i=d,n=f.length,c},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,c){const p=f.clippingPlanes,g=f.clipIntersection,_=f.clipShadows,m=r.get(f);if(!i||p===null||p.length===0||s&&!_)s?h(null):u();else{const S=s?0:n,M=S*4;let x=m.clippingState||null;l.value=x,x=h(p,d,M,c);for(let A=0;A!==M;++A)x[A]=e[A];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,c,p){const g=f!==null?f.length:0;let _=null;if(g!==0){if(_=l.value,p!==!0||_===null){const m=c+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(_===null||_.length<m)&&(_=new Float32Array(m));for(let M=0,x=c;M!==g;++M,x+=4)o.copy(f[M]).applyMatrix4(S,a),o.normal.toArray(_,x),_[x+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,_}}function wS(r){let t=new WeakMap;function e(o,a){return a===Rh?o.mapping=Bo:a===Ph&&(o.mapping=zo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rh||a===Ph)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new av(l.height);return u.fromEquirectangularTexture(r,o),t.set(o,u),o.addEventListener("dispose",i),e(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const vo=4,Np=[.125,.215,.35,.446,.526,.582],ys=20,Vu=new Ov,Op=new qt;let Gu=null,Wu=0,Xu=0,Yu=!1;const ms=(1+Math.sqrt(5))/2,ao=1/ms,Bp=[new B(-ms,ao,0),new B(ms,ao,0),new B(-ao,0,ms),new B(ao,0,ms),new B(0,ms,-ao),new B(0,ms,ao),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],CS=new B;class zp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){const{size:o=256,position:a=CS}=s;Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gu,Wu,Xu),this._renderer.xr.enabled=Yu,t.scissorTest=!1,Bl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bo||t.mapping===zo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Zi,minFilter:Zi,generateMipmaps:!1,type:ll,format:Hi,colorSpace:Vo,depthBuffer:!1},i=kp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kp(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RS(s)),this._blurMaterial=PS(s,t,e)}return i}_compileMaterial(t){const e=new Oe(this._lodPlanes[0],t);this._renderer.compile(e,Vu)}_sceneToCubeUV(t,e,n,i,s){const l=new qn(90,1,e,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,c=f.toneMapping;f.getClearColor(Op),f.toneMapping=Zr,f.autoClear=!1;const p=new Zn({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new Oe(new Ar,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Op),_=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):M===1?(l.up.set(0,0,u[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));const x=this._cubeSize;Bl(i,M*x,S>2?x:0,x,x),f.setRenderTarget(i),_&&f.render(g,l),f.render(t,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=c,f.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Bo||t.mapping===zo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Bl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Vu)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bp[(i-s-1)%Bp.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Oe(this._lodPlanes[i],u),d=u.uniforms,c=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*c):2*Math.PI/(2*ys-1),g=s/p,_=isFinite(s)?1+Math.floor(h*g):ys;_>ys&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ys}`);const m=[];let S=0;for(let D=0;D<ys;++D){const w=D/g,y=Math.exp(-w*w/2);m.push(y),D===0?S+=y:D<_&&(S+=2*y)}for(let D=0;D<m.length;D++)m[D]=m[D]/S;d.envMap.value=t.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=p,d.mipInt.value=M-n;const x=this._sizeLods[i],A=3*x*(i>M-vo?i-M+vo:0),b=4*(this._cubeSize-x);Bl(e,A,b,3*x,2*x),l.setRenderTarget(e),l.render(f,Vu)}}function RS(r){const t=[],e=[],n=[];let i=r;const s=r-vo+1+Np.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-vo?l=Np[o-r+vo-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],c=6,p=6,g=3,_=2,m=1,S=new Float32Array(g*p*c),M=new Float32Array(_*p*c),x=new Float32Array(m*p*c);for(let b=0;b<c;b++){const D=b%3*2/3-1,w=b>2?0:-1,y=[D,w,0,D+2/3,w,0,D+2/3,w+1,0,D,w,0,D+2/3,w+1,0,D,w+1,0];S.set(y,g*p*b),M.set(d,_*p*b);const v=[b,b,b,b,b,b];x.set(v,m*p*b)}const A=new Pn;A.setAttribute("position",new Hn(S,g)),A.setAttribute("uv",new Hn(M,_)),A.setAttribute("faceIndex",new Hn(x,m)),t.push(A),i>vo&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kp(r,t,e){const n=new Ns(r,t,e);return n.texture.mapping=eu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bl(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function PS(r,t,e){const n=new Float32Array(ys),i=new B(0,1,0);return new Qr({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dd(),fragmentShader:`

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
		`,blending:qr,depthTest:!1,depthWrite:!1})}function Hp(){return new Qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dd(),fragmentShader:`

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
		`,blending:qr,depthTest:!1,depthWrite:!1})}function Vp(){return new Qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function dd(){return`

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
	`}function LS(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Rh||l===Ph,h=l===Bo||l===zo;if(u||h){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new zp(r)),f=u?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const c=a.image;return u&&c&&c.height>0||h&&c&&i(c)?(e===null&&(e=new zp(r)),f=u?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function FS(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ps("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function IS(r,t,e,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];const c=s.get(d);c&&(t.remove(c),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const c in d)t.update(d[c],r.ARRAY_BUFFER)}function u(f){const d=[],c=f.index,p=f.attributes.position;let g=0;if(c!==null){const S=c.array;g=c.version;for(let M=0,x=S.length;M<x;M+=3){const A=S[M+0],b=S[M+1],D=S[M+2];d.push(A,b,b,D,D,A)}}else if(p!==void 0){const S=p.array;g=p.version;for(let M=0,x=S.length/3-1;M<x;M+=3){const A=M+0,b=M+1,D=M+2;d.push(A,b,b,D,D,A)}}else return;const _=new(A_(d)?C_:w_)(d,1);_.version=g;const m=s.get(f);m&&t.remove(m),s.set(f,_)}function h(f){const d=s.get(f);if(d){const c=f.index;c!==null&&d.version<c.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function US(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,c){r.drawElements(n,c,s,d*o),e.update(c,n,1)}function u(d,c,p){p!==0&&(r.drawElementsInstanced(n,c,s,d*o,p),e.update(c,n,p))}function h(d,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,s,d,0,p);let _=0;for(let m=0;m<p;m++)_+=c[m];e.update(_,n,1)}function f(d,c,p,g){if(p===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<d.length;m++)u(d[m]/o,c[m],g[m]);else{_.multiDrawElementsInstancedWEBGL(n,c,0,s,d,0,g,0,p);let m=0;for(let S=0;S<p;S++)m+=c[S]*g[S];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function NS(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function OS(r,t,e){const n=new WeakMap,i=new Ce;function s(o,a,l){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let v=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var c=v;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let A=a.attributes.position.count*x,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const D=new Float32Array(A*b*4*f),w=new T_(D,A,b,f);w.type=ji,w.needsUpdate=!0;const y=x*4;for(let R=0;R<f;R++){const N=m[R],P=S[R],z=M[R],H=A*b*4*R;for(let I=0;I<N.count;I++){const V=I*y;p===!0&&(i.fromBufferAttribute(N,I),D[H+V+0]=i.x,D[H+V+1]=i.y,D[H+V+2]=i.z,D[H+V+3]=0),g===!0&&(i.fromBufferAttribute(P,I),D[H+V+4]=i.x,D[H+V+5]=i.y,D[H+V+6]=i.z,D[H+V+7]=0),_===!0&&(i.fromBufferAttribute(z,I),D[H+V+8]=i.x,D[H+V+9]=i.y,D[H+V+10]=i.z,D[H+V+11]=z.itemSize===4?i.w:1)}}d={count:f,texture:w,size:new Nt(A,b)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<u.length;_++)p+=u[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",u)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function BS(r,t,e,n){let i=new WeakMap;function s(l){const u=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==u&&(t.update(f),i.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==u&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==u&&(d.update(),i.set(d,u))}return f}function o(){i=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}const W_=new Cn,Gp=new F_(1,1),X_=new T_,Y_=new Wx,q_=new L_,Wp=[],Xp=[],Yp=new Float32Array(16),qp=new Float32Array(9),Zp=new Float32Array(4);function ta(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Wp[i];if(s===void 0&&(s=new Float32Array(i),Wp[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ln(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function cn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function su(r,t){let e=Xp[t];e===void 0&&(e=new Int32Array(t),Xp[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function zS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function kS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;r.uniform2fv(this.addr,t),cn(e,t)}}function HS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;r.uniform3fv(this.addr,t),cn(e,t)}}function VS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;r.uniform4fv(this.addr,t),cn(e,t)}}function GS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Zp.set(n),r.uniformMatrix2fv(this.addr,!1,Zp),cn(e,n)}}function WS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;qp.set(n),r.uniformMatrix3fv(this.addr,!1,qp),cn(e,n)}}function XS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Yp.set(n),r.uniformMatrix4fv(this.addr,!1,Yp),cn(e,n)}}function YS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function qS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;r.uniform2iv(this.addr,t),cn(e,t)}}function ZS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;r.uniform3iv(this.addr,t),cn(e,t)}}function jS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;r.uniform4iv(this.addr,t),cn(e,t)}}function $S(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function KS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;r.uniform2uiv(this.addr,t),cn(e,t)}}function JS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;r.uniform3uiv(this.addr,t),cn(e,t)}}function QS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;r.uniform4uiv(this.addr,t),cn(e,t)}}function tE(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Gp.compareFunction=D_,s=Gp):s=W_,e.setTexture2D(t||s,i)}function eE(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Y_,i)}function nE(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||q_,i)}function iE(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||X_,i)}function rE(r){switch(r){case 5126:return zS;case 35664:return kS;case 35665:return HS;case 35666:return VS;case 35674:return GS;case 35675:return WS;case 35676:return XS;case 5124:case 35670:return YS;case 35667:case 35671:return qS;case 35668:case 35672:return ZS;case 35669:case 35673:return jS;case 5125:return $S;case 36294:return KS;case 36295:return JS;case 36296:return QS;case 35678:case 36198:case 36298:case 36306:case 35682:return tE;case 35679:case 36299:case 36307:return eE;case 35680:case 36300:case 36308:case 36293:return nE;case 36289:case 36303:case 36311:case 36292:return iE}}function sE(r,t){r.uniform1fv(this.addr,t)}function oE(r,t){const e=ta(t,this.size,2);r.uniform2fv(this.addr,e)}function aE(r,t){const e=ta(t,this.size,3);r.uniform3fv(this.addr,e)}function lE(r,t){const e=ta(t,this.size,4);r.uniform4fv(this.addr,e)}function cE(r,t){const e=ta(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function uE(r,t){const e=ta(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function hE(r,t){const e=ta(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function fE(r,t){r.uniform1iv(this.addr,t)}function dE(r,t){r.uniform2iv(this.addr,t)}function pE(r,t){r.uniform3iv(this.addr,t)}function mE(r,t){r.uniform4iv(this.addr,t)}function _E(r,t){r.uniform1uiv(this.addr,t)}function gE(r,t){r.uniform2uiv(this.addr,t)}function xE(r,t){r.uniform3uiv(this.addr,t)}function vE(r,t){r.uniform4uiv(this.addr,t)}function yE(r,t,e){const n=this.cache,i=t.length,s=su(e,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||W_,s[o])}function ME(r,t,e){const n=this.cache,i=t.length,s=su(e,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Y_,s[o])}function SE(r,t,e){const n=this.cache,i=t.length,s=su(e,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||q_,s[o])}function EE(r,t,e){const n=this.cache,i=t.length,s=su(e,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||X_,s[o])}function DE(r){switch(r){case 5126:return sE;case 35664:return oE;case 35665:return aE;case 35666:return lE;case 35674:return cE;case 35675:return uE;case 35676:return hE;case 5124:case 35670:return fE;case 35667:case 35671:return dE;case 35668:case 35672:return pE;case 35669:case 35673:return mE;case 5125:return _E;case 36294:return gE;case 36295:return xE;case 36296:return vE;case 35678:case 36198:case 36298:case 36306:case 35682:return yE;case 35679:case 36299:case 36307:return ME;case 35680:case 36300:case 36308:case 36293:return SE;case 36289:case 36303:case 36311:case 36292:return EE}}class AE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rE(e.type)}}class TE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=DE(e.type)}}class bE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const qu=/(\w+)(\])?(\[|\.)?/g;function jp(r,t){r.seq.push(t),r.map[t.id]=t}function wE(r,t,e){const n=r.name,i=n.length;for(qu.lastIndex=0;;){const s=qu.exec(n),o=qu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===i){jp(e,u===void 0?new AE(a,r,t):new TE(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new bE(a),jp(e,f)),e=f}}}class fc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);wE(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function $p(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const CE=37297;let RE=0;function PE(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Kp=new re;function LE(r){Me._getMatrix(Kp,Me.workingColorSpace,r);const t=`mat3( ${Kp.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(r)){case Pc:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Jp(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+PE(r.getShaderSource(t),o)}else return i}function FE(r,t){const e=LE(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function IE(r,t){let e;switch(t){case mx:e="Linear";break;case _x:e="Reinhard";break;case gx:e="Cineon";break;case xx:e="ACESFilmic";break;case yx:e="AgX";break;case Mx:e="Neutral";break;case vx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zl=new B;function UE(){Me.getLuminanceCoefficients(zl);const r=zl.x.toFixed(4),t=zl.y.toFixed(4),e=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function OE(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function BE(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function ga(r){return r!==""}function Qp(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zE=/^[ \t]*#include +<([\w\d./]+)>/gm;function hf(r){return r.replace(zE,HE)}const kE=new Map;function HE(r,t){let e=ae[t];if(e===void 0){const n=kE.get(t);if(n!==void 0)e=ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hf(e)}const VE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function em(r){return r.replace(VE,GE)}function GE(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function nm(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function WE(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===u_?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===h_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===cr&&(t="SHADOWMAP_TYPE_VSM"),t}function XE(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Bo:case zo:t="ENVMAP_TYPE_CUBE";break;case eu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function YE(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zo:t="ENVMAP_MODE_REFRACTION";break}return t}function qE(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case f_:t="ENVMAP_BLENDING_MULTIPLY";break;case dx:t="ENVMAP_BLENDING_MIX";break;case px:t="ENVMAP_BLENDING_ADD";break}return t}function ZE(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function jE(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=WE(e),u=XE(e),h=YE(e),f=qE(e),d=ZE(e),c=NE(e),p=OE(s),g=i.createProgram();let _,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ga).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ga).join(`
`),m.length>0&&(m+=`
`)):(_=[nm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),m=[nm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zr?"#define TONE_MAPPING":"",e.toneMapping!==Zr?ae.tonemapping_pars_fragment:"",e.toneMapping!==Zr?IE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,FE("linearToOutputTexel",e.outputColorSpace),UE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ga).join(`
`)),o=hf(o),o=Qp(o,e),o=tm(o,e),a=hf(a),a=Qp(a,e),a=tm(a,e),o=em(o),a=em(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,_=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=S+_+o,x=S+m+a,A=$p(i,i.VERTEX_SHADER,M),b=$p(i,i.FRAGMENT_SHADER,x);i.attachShader(g,A),i.attachShader(g,b),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function D(R){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(A).trim(),z=i.getShaderInfoLog(b).trim();let H=!0,I=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,b);else{const V=Jp(i,A,"vertex"),W=Jp(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+V+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(P===""||z==="")&&(I=!1);I&&(R.diagnostics={runnable:H,programLog:N,vertexShader:{log:P,prefix:_},fragmentShader:{log:z,prefix:m}})}i.deleteShader(A),i.deleteShader(b),w=new fc(i,g),y=BE(i,g)}let w;this.getUniforms=function(){return w===void 0&&D(this),w};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,CE)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=RE++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=b,this}let $E=0;class KE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new JE(t),e.set(t,n)),n}}class JE{constructor(t){this.id=$E++,this.code=t,this.usedTimes=0}}function QE(r,t,e,n,i,s,o){const a=new ed,l=new KE,u=new Set,h=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let c=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return u.add(y),y===0?"uv":`uv${y}`}function _(y,v,R,N,P){const z=N.fog,H=P.geometry,I=y.isMeshStandardMaterial?N.environment:null,V=(y.isMeshStandardMaterial?e:t).get(y.envMap||I),W=V&&V.mapping===eu?V.image.height:null,et=p[y.type];y.precision!==null&&(c=i.getMaxPrecision(y.precision),c!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",c,"instead."));const L=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,it=L!==void 0?L.length:0;let Tt=0;H.morphAttributes.position!==void 0&&(Tt=1),H.morphAttributes.normal!==void 0&&(Tt=2),H.morphAttributes.color!==void 0&&(Tt=3);let zt,j,ut,pt;if(et){const k=Yi[et];zt=k.vertexShader,j=k.fragmentShader}else zt=y.vertexShader,j=y.fragmentShader,l.update(y),ut=l.getVertexShaderID(y),pt=l.getFragmentShaderID(y);const ft=r.getRenderTarget(),Mt=r.state.buffers.depth.getReversed(),Yt=P.isInstancedMesh===!0,Bt=P.isBatchedMesh===!0,ee=!!y.map,ne=!!y.matcap,Pt=!!V,F=!!y.aoMap,Ht=!!y.lightMap,Zt=!!y.bumpMap,Y=!!y.normalMap,Dt=!!y.displacementMap,ce=!!y.emissiveMap,It=!!y.metalnessMap,C=!!y.roughnessMap,E=y.anisotropy>0,q=y.clearcoat>0,ot=y.dispersion>0,st=y.iridescence>0,tt=y.sheen>0,_t=y.transmission>0,mt=E&&!!y.anisotropyMap,At=q&&!!y.clearcoatMap,Qt=q&&!!y.clearcoatNormalMap,dt=q&&!!y.clearcoatRoughnessMap,gt=st&&!!y.iridescenceMap,Gt=st&&!!y.iridescenceThicknessMap,kt=tt&&!!y.sheenColorMap,Ct=tt&&!!y.sheenRoughnessMap,te=!!y.specularMap,jt=!!y.specularColorMap,se=!!y.specularIntensityMap,U=_t&&!!y.transmissionMap,xt=_t&&!!y.thicknessMap,K=!!y.gradientMap,nt=!!y.alphaMap,yt=y.alphaTest>0,St=!!y.alphaHash,ct=!!y.extensions;let O=Zr;y.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(O=r.toneMapping);const rt={shaderID:et,shaderType:y.type,shaderName:y.name,vertexShader:zt,fragmentShader:j,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:pt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:c,batching:Bt,batchingColor:Bt&&P._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&P.instanceColor!==null,instancingMorph:Yt&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ft===null?r.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Vo,alphaToCoverage:!!y.alphaToCoverage,map:ee,matcap:ne,envMap:Pt,envMapMode:Pt&&V.mapping,envMapCubeUVHeight:W,aoMap:F,lightMap:Ht,bumpMap:Zt,normalMap:Y,displacementMap:d&&Dt,emissiveMap:ce,normalMapObjectSpace:Y&&y.normalMapType===Ax,normalMapTangentSpace:Y&&y.normalMapType===E_,metalnessMap:It,roughnessMap:C,anisotropy:E,anisotropyMap:mt,clearcoat:q,clearcoatMap:At,clearcoatNormalMap:Qt,clearcoatRoughnessMap:dt,dispersion:ot,iridescence:st,iridescenceMap:gt,iridescenceThicknessMap:Gt,sheen:tt,sheenColorMap:kt,sheenRoughnessMap:Ct,specularMap:te,specularColorMap:jt,specularIntensityMap:se,transmission:_t,transmissionMap:U,thicknessMap:xt,gradientMap:K,opaque:y.transparent===!1&&y.blending===Do&&y.alphaToCoverage===!1,alphaMap:nt,alphaTest:yt,alphaHash:St,combine:y.combine,mapUv:ee&&g(y.map.channel),aoMapUv:F&&g(y.aoMap.channel),lightMapUv:Ht&&g(y.lightMap.channel),bumpMapUv:Zt&&g(y.bumpMap.channel),normalMapUv:Y&&g(y.normalMap.channel),displacementMapUv:Dt&&g(y.displacementMap.channel),emissiveMapUv:ce&&g(y.emissiveMap.channel),metalnessMapUv:It&&g(y.metalnessMap.channel),roughnessMapUv:C&&g(y.roughnessMap.channel),anisotropyMapUv:mt&&g(y.anisotropyMap.channel),clearcoatMapUv:At&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&g(y.sheenRoughnessMap.channel),specularMapUv:te&&g(y.specularMap.channel),specularColorMapUv:jt&&g(y.specularColorMap.channel),specularIntensityMapUv:se&&g(y.specularIntensityMap.channel),transmissionMapUv:U&&g(y.transmissionMap.channel),thicknessMapUv:xt&&g(y.thicknessMap.channel),alphaMapUv:nt&&g(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Y||E),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!H.attributes.uv&&(ee||nt),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Mt,skinning:P.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Tt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:O,decodeVideoTexture:ee&&y.map.isVideoTexture===!0&&Me.getTransfer(y.map.colorSpace)===be,decodeVideoTextureEmissive:ce&&y.emissiveMap.isVideoTexture===!0&&Me.getTransfer(y.emissiveMap.colorSpace)===be,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zi,flipSided:y.side===yn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ct&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&y.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=u.has(1),rt.vertexUv2s=u.has(2),rt.vertexUv3s=u.has(3),u.clear(),rt}function m(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)v.push(R),v.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(S(v,y),M(v,y),v.push(r.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function S(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function M(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const v=p[y.type];let R;if(v){const N=Yi[v];R=iv.clone(N.uniforms)}else R=y.uniforms;return R}function A(y,v){let R;for(let N=0,P=h.length;N<P;N++){const z=h[N];if(z.cacheKey===v){R=z,++R.usedTimes;break}}return R===void 0&&(R=new jE(r,v,y,s),h.push(R)),R}function b(y){if(--y.usedTimes===0){const v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function D(y){l.remove(y)}function w(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:x,acquireProgram:A,releaseProgram:b,releaseShaderCache:D,programs:h,dispose:w}}function tD(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function eD(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function im(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function rm(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,d,c,p,g,_){let m=r[t];return m===void 0?(m={id:f.id,object:f,geometry:d,material:c,groupOrder:p,renderOrder:f.renderOrder,z:g,group:_},r[t]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=c,m.groupOrder=p,m.renderOrder=f.renderOrder,m.z=g,m.group=_),t++,m}function a(f,d,c,p,g,_){const m=o(f,d,c,p,g,_);c.transmission>0?n.push(m):c.transparent===!0?i.push(m):e.push(m)}function l(f,d,c,p,g,_){const m=o(f,d,c,p,g,_);c.transmission>0?n.unshift(m):c.transparent===!0?i.unshift(m):e.unshift(m)}function u(f,d){e.length>1&&e.sort(f||eD),n.length>1&&n.sort(d||im),i.length>1&&i.sort(d||im)}function h(){for(let f=t,d=r.length;f<d;f++){const c=r[f];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:u}}function nD(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new rm,r.set(n,[o])):i>=s.length?(o=new rm,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function iD(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new qt};break;case"SpotLight":e={position:new B,direction:new B,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new B,halfWidth:new B,halfHeight:new B};break}return r[t.id]=e,e}}}function rD(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let sD=0;function oD(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function aD(r){const t=new iD,e=rD(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new B);const i=new B,s=new Te,o=new Te;function a(u){let h=0,f=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let c=0,p=0,g=0,_=0,m=0,S=0,M=0,x=0,A=0,b=0,D=0;u.sort(oD);for(let y=0,v=u.length;y<v;y++){const R=u[y],N=R.color,P=R.intensity,z=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=N.r*P,f+=N.g*P,d+=N.b*P;else if(R.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(R.sh.coefficients[I],P);D++}else if(R.isDirectionalLight){const I=t.get(R);if(I.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const V=R.shadow,W=e.get(R);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,n.directionalShadow[c]=W,n.directionalShadowMap[c]=H,n.directionalShadowMatrix[c]=R.shadow.matrix,S++}n.directional[c]=I,c++}else if(R.isSpotLight){const I=t.get(R);I.position.setFromMatrixPosition(R.matrixWorld),I.color.copy(N).multiplyScalar(P),I.distance=z,I.coneCos=Math.cos(R.angle),I.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),I.decay=R.decay,n.spot[g]=I;const V=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,V.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[g]=V.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=H,x++}g++}else if(R.isRectAreaLight){const I=t.get(R);I.color.copy(N).multiplyScalar(P),I.halfWidth.set(R.width*.5,0,0),I.halfHeight.set(0,R.height*.5,0),n.rectArea[_]=I,_++}else if(R.isPointLight){const I=t.get(R);if(I.color.copy(R.color).multiplyScalar(R.intensity),I.distance=R.distance,I.decay=R.decay,R.castShadow){const V=R.shadow,W=e.get(R);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,W.shadowCameraNear=V.camera.near,W.shadowCameraFar=V.camera.far,n.pointShadow[p]=W,n.pointShadowMap[p]=H,n.pointShadowMatrix[p]=R.shadow.matrix,M++}n.point[p]=I,p++}else if(R.isHemisphereLight){const I=t.get(R);I.skyColor.copy(R.color).multiplyScalar(P),I.groundColor.copy(R.groundColor).multiplyScalar(P),n.hemi[m]=I,m++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const w=n.hash;(w.directionalLength!==c||w.pointLength!==p||w.spotLength!==g||w.rectAreaLength!==_||w.hemiLength!==m||w.numDirectionalShadows!==S||w.numPointShadows!==M||w.numSpotShadows!==x||w.numSpotMaps!==A||w.numLightProbes!==D)&&(n.directional.length=c,n.spot.length=g,n.rectArea.length=_,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=D,w.directionalLength=c,w.pointLength=p,w.spotLength=g,w.rectAreaLength=_,w.hemiLength=m,w.numDirectionalShadows=S,w.numPointShadows=M,w.numSpotShadows=x,w.numSpotMaps=A,w.numLightProbes=D,n.version=sD++)}function l(u,h){let f=0,d=0,c=0,p=0,g=0;const _=h.matrixWorldInverse;for(let m=0,S=u.length;m<S;m++){const M=u[m];if(M.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(_),f++}else if(M.isSpotLight){const x=n.spot[c];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(_),c++}else if(M.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(_),o.identity(),s.copy(M.matrixWorld),s.premultiply(_),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(_),d++}else if(M.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:n}}function sm(r){const t=new aD(r),e=[],n=[];function i(h){u.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function lD(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new sm(r),t.set(i,[a])):s>=o.length?(a=new sm(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const cD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uD=`uniform sampler2D shadow_pass;
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
}`;function hD(r,t,e){let n=new id;const i=new Nt,s=new Nt,o=new Ce,a=new Cv({depthPacking:Dx}),l=new Rv,u={},h=e.maxTextureSize,f={[Jr]:yn,[yn]:Jr,[zi]:zi},d=new Qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:cD,fragmentShader:uD}),c=d.clone();c.defines.HORIZONTAL_PASS=1;const p=new Pn;p.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Oe(p,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u_;let m=this.type;this.render=function(b,D,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||b.length===0)return;const y=r.getRenderTarget(),v=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),N=r.state;N.setBlending(qr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const P=m!==cr&&this.type===cr,z=m===cr&&this.type!==cr;for(let H=0,I=b.length;H<I;H++){const V=b[H],W=V.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const et=W.getFrameExtents();if(i.multiply(et),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/et.x),i.x=s.x*et.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/et.y),i.y=s.y*et.y,W.mapSize.y=s.y)),W.map===null||P===!0||z===!0){const it=this.type!==cr?{minFilter:pi,magFilter:pi}:{};W.map!==null&&W.map.dispose(),W.map=new Ns(i.x,i.y,it),W.map.texture.name=V.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const L=W.getViewportCount();for(let it=0;it<L;it++){const Tt=W.getViewport(it);o.set(s.x*Tt.x,s.y*Tt.y,s.x*Tt.z,s.y*Tt.w),N.viewport(o),W.updateMatrices(V,it),n=W.getFrustum(),x(D,w,W.camera,V,this.type)}W.isPointLightShadow!==!0&&this.type===cr&&S(W,w),W.needsUpdate=!1}m=this.type,_.needsUpdate=!1,r.setRenderTarget(y,v,R)};function S(b,D){const w=t.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,c.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,c.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ns(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(D,null,w,d,g,null),c.uniforms.shadow_pass.value=b.mapPass.texture,c.uniforms.resolution.value=b.mapSize,c.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(D,null,w,c,g,null)}function M(b,D,w,y){let v=null;const R=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)v=R;else if(v=w.isPointLight===!0?l:a,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const N=v.uuid,P=D.uuid;let z=u[N];z===void 0&&(z={},u[N]=z);let H=z[P];H===void 0&&(H=v.clone(),z[P]=H,D.addEventListener("dispose",A)),v=H}if(v.visible=D.visible,v.wireframe=D.wireframe,y===cr?v.side=D.shadowSide!==null?D.shadowSide:D.side:v.side=D.shadowSide!==null?D.shadowSide:f[D.side],v.alphaMap=D.alphaMap,v.alphaTest=D.alphaTest,v.map=D.map,v.clipShadows=D.clipShadows,v.clippingPlanes=D.clippingPlanes,v.clipIntersection=D.clipIntersection,v.displacementMap=D.displacementMap,v.displacementScale=D.displacementScale,v.displacementBias=D.displacementBias,v.wireframeLinewidth=D.wireframeLinewidth,v.linewidth=D.linewidth,w.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=r.properties.get(v);N.light=w}return v}function x(b,D,w,y,v){if(b.visible===!1)return;if(b.layers.test(D.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===cr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);const P=t.update(b),z=b.material;if(Array.isArray(z)){const H=P.groups;for(let I=0,V=H.length;I<V;I++){const W=H[I],et=z[W.materialIndex];if(et&&et.visible){const L=M(b,et,y,v);b.onBeforeShadow(r,b,D,w,P,L,W),r.renderBufferDirect(w,null,P,L,b,W),b.onAfterShadow(r,b,D,w,P,L,W)}}}else if(z.visible){const H=M(b,z,y,v);b.onBeforeShadow(r,b,D,w,P,H,null),r.renderBufferDirect(w,null,P,H,b,null),b.onAfterShadow(r,b,D,w,P,H,null)}}const N=b.children;for(let P=0,z=N.length;P<z;P++)x(N[P],D,w,y,v)}function A(b){b.target.removeEventListener("dispose",A);for(const w in u){const y=u[w],v=b.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const fD={[Eh]:Dh,[Ah]:wh,[Th]:Ch,[Oo]:bh,[Dh]:Eh,[wh]:Ah,[Ch]:Th,[bh]:Oo};function dD(r,t){function e(){let U=!1;const xt=new Ce;let K=null;const nt=new Ce(0,0,0,0);return{setMask:function(yt){K!==yt&&!U&&(r.colorMask(yt,yt,yt,yt),K=yt)},setLocked:function(yt){U=yt},setClear:function(yt,St,ct,O,rt){rt===!0&&(yt*=O,St*=O,ct*=O),xt.set(yt,St,ct,O),nt.equals(xt)===!1&&(r.clearColor(yt,St,ct,O),nt.copy(xt))},reset:function(){U=!1,K=null,nt.set(-1,0,0,0)}}}function n(){let U=!1,xt=!1,K=null,nt=null,yt=null;return{setReversed:function(St){if(xt!==St){const ct=t.get("EXT_clip_control");xt?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);const O=yt;yt=null,this.setClear(O)}xt=St},getReversed:function(){return xt},setTest:function(St){St?ft(r.DEPTH_TEST):Mt(r.DEPTH_TEST)},setMask:function(St){K!==St&&!U&&(r.depthMask(St),K=St)},setFunc:function(St){if(xt&&(St=fD[St]),nt!==St){switch(St){case Eh:r.depthFunc(r.NEVER);break;case Dh:r.depthFunc(r.ALWAYS);break;case Ah:r.depthFunc(r.LESS);break;case Oo:r.depthFunc(r.LEQUAL);break;case Th:r.depthFunc(r.EQUAL);break;case bh:r.depthFunc(r.GEQUAL);break;case wh:r.depthFunc(r.GREATER);break;case Ch:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}nt=St}},setLocked:function(St){U=St},setClear:function(St){yt!==St&&(xt&&(St=1-St),r.clearDepth(St),yt=St)},reset:function(){U=!1,K=null,nt=null,yt=null,xt=!1}}}function i(){let U=!1,xt=null,K=null,nt=null,yt=null,St=null,ct=null,O=null,rt=null;return{setTest:function(k){U||(k?ft(r.STENCIL_TEST):Mt(r.STENCIL_TEST))},setMask:function(k){xt!==k&&!U&&(r.stencilMask(k),xt=k)},setFunc:function(k,$,lt){(K!==k||nt!==$||yt!==lt)&&(r.stencilFunc(k,$,lt),K=k,nt=$,yt=lt)},setOp:function(k,$,lt){(St!==k||ct!==$||O!==lt)&&(r.stencilOp(k,$,lt),St=k,ct=$,O=lt)},setLocked:function(k){U=k},setClear:function(k){rt!==k&&(r.clearStencil(k),rt=k)},reset:function(){U=!1,xt=null,K=null,nt=null,yt=null,St=null,ct=null,O=null,rt=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,u=new WeakMap;let h={},f={},d=new WeakMap,c=[],p=null,g=!1,_=null,m=null,S=null,M=null,x=null,A=null,b=null,D=new qt(0,0,0),w=0,y=!1,v=null,R=null,N=null,P=null,z=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,V=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(W)[1]),I=V>=1):W.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),I=V>=2);let et=null,L={};const it=r.getParameter(r.SCISSOR_BOX),Tt=r.getParameter(r.VIEWPORT),zt=new Ce().fromArray(it),j=new Ce().fromArray(Tt);function ut(U,xt,K,nt){const yt=new Uint8Array(4),St=r.createTexture();r.bindTexture(U,St),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ct=0;ct<K;ct++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(xt,0,r.RGBA,1,1,nt,0,r.RGBA,r.UNSIGNED_BYTE,yt):r.texImage2D(xt+ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,yt);return St}const pt={};pt[r.TEXTURE_2D]=ut(r.TEXTURE_2D,r.TEXTURE_2D,1),pt[r.TEXTURE_CUBE_MAP]=ut(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[r.TEXTURE_2D_ARRAY]=ut(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),pt[r.TEXTURE_3D]=ut(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(r.DEPTH_TEST),o.setFunc(Oo),Zt(!1),Y(Qd),ft(r.CULL_FACE),F(qr);function ft(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function Mt(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Yt(U,xt){return f[U]!==xt?(r.bindFramebuffer(U,xt),f[U]=xt,U===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=xt),U===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=xt),!0):!1}function Bt(U,xt){let K=c,nt=!1;if(U){K=d.get(xt),K===void 0&&(K=[],d.set(xt,K));const yt=U.textures;if(K.length!==yt.length||K[0]!==r.COLOR_ATTACHMENT0){for(let St=0,ct=yt.length;St<ct;St++)K[St]=r.COLOR_ATTACHMENT0+St;K.length=yt.length,nt=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,nt=!0);nt&&r.drawBuffers(K)}function ee(U){return p!==U?(r.useProgram(U),p=U,!0):!1}const ne={[vs]:r.FUNC_ADD,[$0]:r.FUNC_SUBTRACT,[K0]:r.FUNC_REVERSE_SUBTRACT};ne[J0]=r.MIN,ne[Q0]=r.MAX;const Pt={[tx]:r.ZERO,[ex]:r.ONE,[nx]:r.SRC_COLOR,[Mh]:r.SRC_ALPHA,[lx]:r.SRC_ALPHA_SATURATE,[ox]:r.DST_COLOR,[rx]:r.DST_ALPHA,[ix]:r.ONE_MINUS_SRC_COLOR,[Sh]:r.ONE_MINUS_SRC_ALPHA,[ax]:r.ONE_MINUS_DST_COLOR,[sx]:r.ONE_MINUS_DST_ALPHA,[cx]:r.CONSTANT_COLOR,[ux]:r.ONE_MINUS_CONSTANT_COLOR,[hx]:r.CONSTANT_ALPHA,[fx]:r.ONE_MINUS_CONSTANT_ALPHA};function F(U,xt,K,nt,yt,St,ct,O,rt,k){if(U===qr){g===!0&&(Mt(r.BLEND),g=!1);return}if(g===!1&&(ft(r.BLEND),g=!0),U!==j0){if(U!==_||k!==y){if((m!==vs||x!==vs)&&(r.blendEquation(r.FUNC_ADD),m=vs,x=vs),k)switch(U){case Do:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rc:r.blendFunc(r.ONE,r.ONE);break;case tp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ep:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Do:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case tp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ep:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,M=null,A=null,b=null,D.set(0,0,0),w=0,_=U,y=k}return}yt=yt||xt,St=St||K,ct=ct||nt,(xt!==m||yt!==x)&&(r.blendEquationSeparate(ne[xt],ne[yt]),m=xt,x=yt),(K!==S||nt!==M||St!==A||ct!==b)&&(r.blendFuncSeparate(Pt[K],Pt[nt],Pt[St],Pt[ct]),S=K,M=nt,A=St,b=ct),(O.equals(D)===!1||rt!==w)&&(r.blendColor(O.r,O.g,O.b,rt),D.copy(O),w=rt),_=U,y=!1}function Ht(U,xt){U.side===zi?Mt(r.CULL_FACE):ft(r.CULL_FACE);let K=U.side===yn;xt&&(K=!K),Zt(K),U.blending===Do&&U.transparent===!1?F(qr):F(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const nt=U.stencilWrite;a.setTest(nt),nt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ce(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ft(r.SAMPLE_ALPHA_TO_COVERAGE):Mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(U){v!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),v=U)}function Y(U){U!==q0?(ft(r.CULL_FACE),U!==R&&(U===Qd?r.cullFace(r.BACK):U===Z0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Mt(r.CULL_FACE),R=U}function Dt(U){U!==N&&(I&&r.lineWidth(U),N=U)}function ce(U,xt,K){U?(ft(r.POLYGON_OFFSET_FILL),(P!==xt||z!==K)&&(r.polygonOffset(xt,K),P=xt,z=K)):Mt(r.POLYGON_OFFSET_FILL)}function It(U){U?ft(r.SCISSOR_TEST):Mt(r.SCISSOR_TEST)}function C(U){U===void 0&&(U=r.TEXTURE0+H-1),et!==U&&(r.activeTexture(U),et=U)}function E(U,xt,K){K===void 0&&(et===null?K=r.TEXTURE0+H-1:K=et);let nt=L[K];nt===void 0&&(nt={type:void 0,texture:void 0},L[K]=nt),(nt.type!==U||nt.texture!==xt)&&(et!==K&&(r.activeTexture(K),et=K),r.bindTexture(U,xt||pt[U]),nt.type=U,nt.texture=xt)}function q(){const U=L[et];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ot(){try{r.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{r.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{r.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{r.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{r.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{r.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qt(){try{r.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{r.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{r.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{r.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(U){zt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),zt.copy(U))}function Ct(U){j.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),j.copy(U))}function te(U,xt){let K=u.get(xt);K===void 0&&(K=new WeakMap,u.set(xt,K));let nt=K.get(U);nt===void 0&&(nt=r.getUniformBlockIndex(xt,U.name),K.set(U,nt))}function jt(U,xt){const nt=u.get(xt).get(U);l.get(xt)!==nt&&(r.uniformBlockBinding(xt,nt,U.__bindingPointIndex),l.set(xt,nt))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},et=null,L={},f={},d=new WeakMap,c=[],p=null,g=!1,_=null,m=null,S=null,M=null,x=null,A=null,b=null,D=new qt(0,0,0),w=0,y=!1,v=null,R=null,N=null,P=null,z=null,zt.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ft,disable:Mt,bindFramebuffer:Yt,drawBuffers:Bt,useProgram:ee,setBlending:F,setMaterial:Ht,setFlipSided:Zt,setCullFace:Y,setLineWidth:Dt,setPolygonOffset:ce,setScissorTest:It,activeTexture:C,bindTexture:E,unbindTexture:q,compressedTexImage2D:ot,compressedTexImage3D:st,texImage2D:gt,texImage3D:Gt,updateUBOMapping:te,uniformBlockBinding:jt,texStorage2D:Qt,texStorage3D:dt,texSubImage2D:tt,texSubImage3D:_t,compressedTexSubImage2D:mt,compressedTexSubImage3D:At,scissor:kt,viewport:Ct,reset:se}}function pD(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Nt,h=new WeakMap;let f;const d=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,E){return c?new OffscreenCanvas(C,E):ja("canvas")}function g(C,E,q){let ot=1;const st=It(C);if((st.width>q||st.height>q)&&(ot=q/Math.max(st.width,st.height)),ot<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const tt=Math.floor(ot*st.width),_t=Math.floor(ot*st.height);f===void 0&&(f=p(tt,_t));const mt=E?p(tt,_t):f;return mt.width=tt,mt.height=_t,mt.getContext("2d").drawImage(C,0,0,tt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+tt+"x"+_t+")."),mt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),C;return C}function _(C){return C.generateMipmaps}function m(C){r.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(C,E,q,ot,st=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let tt=E;if(E===r.RED&&(q===r.FLOAT&&(tt=r.R32F),q===r.HALF_FLOAT&&(tt=r.R16F),q===r.UNSIGNED_BYTE&&(tt=r.R8)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(tt=r.R8UI),q===r.UNSIGNED_SHORT&&(tt=r.R16UI),q===r.UNSIGNED_INT&&(tt=r.R32UI),q===r.BYTE&&(tt=r.R8I),q===r.SHORT&&(tt=r.R16I),q===r.INT&&(tt=r.R32I)),E===r.RG&&(q===r.FLOAT&&(tt=r.RG32F),q===r.HALF_FLOAT&&(tt=r.RG16F),q===r.UNSIGNED_BYTE&&(tt=r.RG8)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(tt=r.RG8UI),q===r.UNSIGNED_SHORT&&(tt=r.RG16UI),q===r.UNSIGNED_INT&&(tt=r.RG32UI),q===r.BYTE&&(tt=r.RG8I),q===r.SHORT&&(tt=r.RG16I),q===r.INT&&(tt=r.RG32I)),E===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(tt=r.RGB8UI),q===r.UNSIGNED_SHORT&&(tt=r.RGB16UI),q===r.UNSIGNED_INT&&(tt=r.RGB32UI),q===r.BYTE&&(tt=r.RGB8I),q===r.SHORT&&(tt=r.RGB16I),q===r.INT&&(tt=r.RGB32I)),E===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(tt=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(tt=r.RGBA16UI),q===r.UNSIGNED_INT&&(tt=r.RGBA32UI),q===r.BYTE&&(tt=r.RGBA8I),q===r.SHORT&&(tt=r.RGBA16I),q===r.INT&&(tt=r.RGBA32I)),E===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),E===r.RGBA){const _t=st?Pc:Me.getTransfer(ot);q===r.FLOAT&&(tt=r.RGBA32F),q===r.HALF_FLOAT&&(tt=r.RGBA16F),q===r.UNSIGNED_BYTE&&(tt=_t===be?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(C,E){let q;return C?E===null||E===Us||E===ko?q=r.DEPTH24_STENCIL8:E===ji?q=r.DEPTH32F_STENCIL8:E===Za&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Us||E===ko?q=r.DEPTH_COMPONENT24:E===ji?q=r.DEPTH_COMPONENT32F:E===Za&&(q=r.DEPTH_COMPONENT16),q}function A(C,E){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==pi&&C.minFilter!==Zi?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function b(C){const E=C.target;E.removeEventListener("dispose",b),w(E),E.isVideoTexture&&h.delete(E)}function D(C){const E=C.target;E.removeEventListener("dispose",D),v(E)}function w(C){const E=n.get(C);if(E.__webglInit===void 0)return;const q=C.source,ot=d.get(q);if(ot){const st=ot[E.__cacheKey];st.usedTimes--,st.usedTimes===0&&y(C),Object.keys(ot).length===0&&d.delete(q)}n.remove(C)}function y(C){const E=n.get(C);r.deleteTexture(E.__webglTexture);const q=C.source,ot=d.get(q);delete ot[E.__cacheKey],o.memory.textures--}function v(C){const E=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(E.__webglFramebuffer[ot]))for(let st=0;st<E.__webglFramebuffer[ot].length;st++)r.deleteFramebuffer(E.__webglFramebuffer[ot][st]);else r.deleteFramebuffer(E.__webglFramebuffer[ot]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ot])}else{if(Array.isArray(E.__webglFramebuffer))for(let ot=0;ot<E.__webglFramebuffer.length;ot++)r.deleteFramebuffer(E.__webglFramebuffer[ot]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ot=0;ot<E.__webglColorRenderbuffer.length;ot++)E.__webglColorRenderbuffer[ot]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ot]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=C.textures;for(let ot=0,st=q.length;ot<st;ot++){const tt=n.get(q[ot]);tt.__webglTexture&&(r.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(q[ot])}n.remove(C)}let R=0;function N(){R=0}function P(){const C=R;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function z(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function H(C,E){const q=n.get(C);if(C.isVideoTexture&&Dt(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){const ot=C.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(q,C,E);return}}e.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function I(C,E){const q=n.get(C);if(C.version>0&&q.__version!==C.version){j(q,C,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function V(C,E){const q=n.get(C);if(C.version>0&&q.__version!==C.version){j(q,C,E);return}e.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function W(C,E){const q=n.get(C);if(C.version>0&&q.__version!==C.version){ut(q,C,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const et={[Lh]:r.REPEAT,[Ss]:r.CLAMP_TO_EDGE,[Fh]:r.MIRRORED_REPEAT},L={[pi]:r.NEAREST,[Sx]:r.NEAREST_MIPMAP_NEAREST,[pl]:r.NEAREST_MIPMAP_LINEAR,[Zi]:r.LINEAR,[pu]:r.LINEAR_MIPMAP_NEAREST,[Es]:r.LINEAR_MIPMAP_LINEAR},it={[Tx]:r.NEVER,[Lx]:r.ALWAYS,[bx]:r.LESS,[D_]:r.LEQUAL,[wx]:r.EQUAL,[Px]:r.GEQUAL,[Cx]:r.GREATER,[Rx]:r.NOTEQUAL};function Tt(C,E){if(E.type===ji&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Zi||E.magFilter===pu||E.magFilter===pl||E.magFilter===Es||E.minFilter===Zi||E.minFilter===pu||E.minFilter===pl||E.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,et[E.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,et[E.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,et[E.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,L[E.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,it[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===pi||E.minFilter!==pl&&E.minFilter!==Es||E.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function zt(C,E){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",b));const ot=E.source;let st=d.get(ot);st===void 0&&(st={},d.set(ot,st));const tt=z(E);if(tt!==C.__cacheKey){st[tt]===void 0&&(st[tt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),st[tt].usedTimes++;const _t=st[C.__cacheKey];_t!==void 0&&(st[C.__cacheKey].usedTimes--,_t.usedTimes===0&&y(E)),C.__cacheKey=tt,C.__webglTexture=st[tt].texture}return q}function j(C,E,q){let ot=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ot=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ot=r.TEXTURE_3D);const st=zt(C,E),tt=E.source;e.bindTexture(ot,C.__webglTexture,r.TEXTURE0+q);const _t=n.get(tt);if(tt.version!==_t.__version||st===!0){e.activeTexture(r.TEXTURE0+q);const mt=Me.getPrimaries(Me.workingColorSpace),At=E.colorSpace===kr?null:Me.getPrimaries(E.colorSpace),Qt=E.colorSpace===kr||mt===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let dt=g(E.image,!1,i.maxTextureSize);dt=ce(E,dt);const gt=s.convert(E.format,E.colorSpace),Gt=s.convert(E.type);let kt=M(E.internalFormat,gt,Gt,E.colorSpace,E.isVideoTexture);Tt(ot,E);let Ct;const te=E.mipmaps,jt=E.isVideoTexture!==!0,se=_t.__version===void 0||st===!0,U=tt.dataReady,xt=A(E,dt);if(E.isDepthTexture)kt=x(E.format===Ho,E.type),se&&(jt?e.texStorage2D(r.TEXTURE_2D,1,kt,dt.width,dt.height):e.texImage2D(r.TEXTURE_2D,0,kt,dt.width,dt.height,0,gt,Gt,null));else if(E.isDataTexture)if(te.length>0){jt&&se&&e.texStorage2D(r.TEXTURE_2D,xt,kt,te[0].width,te[0].height);for(let K=0,nt=te.length;K<nt;K++)Ct=te[K],jt?U&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Ct.width,Ct.height,gt,Gt,Ct.data):e.texImage2D(r.TEXTURE_2D,K,kt,Ct.width,Ct.height,0,gt,Gt,Ct.data);E.generateMipmaps=!1}else jt?(se&&e.texStorage2D(r.TEXTURE_2D,xt,kt,dt.width,dt.height),U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,dt.width,dt.height,gt,Gt,dt.data)):e.texImage2D(r.TEXTURE_2D,0,kt,dt.width,dt.height,0,gt,Gt,dt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){jt&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,kt,te[0].width,te[0].height,dt.depth);for(let K=0,nt=te.length;K<nt;K++)if(Ct=te[K],E.format!==Hi)if(gt!==null)if(jt){if(U)if(E.layerUpdates.size>0){const yt=Up(Ct.width,Ct.height,E.format,E.type);for(const St of E.layerUpdates){const ct=Ct.data.subarray(St*yt/Ct.data.BYTES_PER_ELEMENT,(St+1)*yt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,St,Ct.width,Ct.height,1,gt,ct)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Ct.width,Ct.height,dt.depth,gt,Ct.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,kt,Ct.width,Ct.height,dt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Ct.width,Ct.height,dt.depth,gt,Gt,Ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,K,kt,Ct.width,Ct.height,dt.depth,0,gt,Gt,Ct.data)}else{jt&&se&&e.texStorage2D(r.TEXTURE_2D,xt,kt,te[0].width,te[0].height);for(let K=0,nt=te.length;K<nt;K++)Ct=te[K],E.format!==Hi?gt!==null?jt?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,Ct.width,Ct.height,gt,Ct.data):e.compressedTexImage2D(r.TEXTURE_2D,K,kt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?U&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Ct.width,Ct.height,gt,Gt,Ct.data):e.texImage2D(r.TEXTURE_2D,K,kt,Ct.width,Ct.height,0,gt,Gt,Ct.data)}else if(E.isDataArrayTexture)if(jt){if(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,kt,dt.width,dt.height,dt.depth),U)if(E.layerUpdates.size>0){const K=Up(dt.width,dt.height,E.format,E.type);for(const nt of E.layerUpdates){const yt=dt.data.subarray(nt*K/dt.data.BYTES_PER_ELEMENT,(nt+1)*K/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,nt,dt.width,dt.height,1,gt,Gt,yt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,gt,Gt,dt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,kt,dt.width,dt.height,dt.depth,0,gt,Gt,dt.data);else if(E.isData3DTexture)jt?(se&&e.texStorage3D(r.TEXTURE_3D,xt,kt,dt.width,dt.height,dt.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,gt,Gt,dt.data)):e.texImage3D(r.TEXTURE_3D,0,kt,dt.width,dt.height,dt.depth,0,gt,Gt,dt.data);else if(E.isFramebufferTexture){if(se)if(jt)e.texStorage2D(r.TEXTURE_2D,xt,kt,dt.width,dt.height);else{let K=dt.width,nt=dt.height;for(let yt=0;yt<xt;yt++)e.texImage2D(r.TEXTURE_2D,yt,kt,K,nt,0,gt,Gt,null),K>>=1,nt>>=1}}else if(te.length>0){if(jt&&se){const K=It(te[0]);e.texStorage2D(r.TEXTURE_2D,xt,kt,K.width,K.height)}for(let K=0,nt=te.length;K<nt;K++)Ct=te[K],jt?U&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,gt,Gt,Ct):e.texImage2D(r.TEXTURE_2D,K,kt,gt,Gt,Ct);E.generateMipmaps=!1}else if(jt){if(se){const K=It(dt);e.texStorage2D(r.TEXTURE_2D,xt,kt,K.width,K.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,gt,Gt,dt)}else e.texImage2D(r.TEXTURE_2D,0,kt,gt,Gt,dt);_(E)&&m(ot),_t.__version=tt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ut(C,E,q){if(E.image.length!==6)return;const ot=zt(C,E),st=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+q);const tt=n.get(st);if(st.version!==tt.__version||ot===!0){e.activeTexture(r.TEXTURE0+q);const _t=Me.getPrimaries(Me.workingColorSpace),mt=E.colorSpace===kr?null:Me.getPrimaries(E.colorSpace),At=E.colorSpace===kr||_t===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Qt=E.isCompressedTexture||E.image[0].isCompressedTexture,dt=E.image[0]&&E.image[0].isDataTexture,gt=[];for(let nt=0;nt<6;nt++)!Qt&&!dt?gt[nt]=g(E.image[nt],!0,i.maxCubemapSize):gt[nt]=dt?E.image[nt].image:E.image[nt],gt[nt]=ce(E,gt[nt]);const Gt=gt[0],kt=s.convert(E.format,E.colorSpace),Ct=s.convert(E.type),te=M(E.internalFormat,kt,Ct,E.colorSpace),jt=E.isVideoTexture!==!0,se=tt.__version===void 0||ot===!0,U=st.dataReady;let xt=A(E,Gt);Tt(r.TEXTURE_CUBE_MAP,E);let K;if(Qt){jt&&se&&e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,te,Gt.width,Gt.height);for(let nt=0;nt<6;nt++){K=gt[nt].mipmaps;for(let yt=0;yt<K.length;yt++){const St=K[yt];E.format!==Hi?kt!==null?jt?U&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt,0,0,St.width,St.height,kt,St.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt,te,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt,0,0,St.width,St.height,kt,Ct,St.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt,te,St.width,St.height,0,kt,Ct,St.data)}}}else{if(K=E.mipmaps,jt&&se){K.length>0&&xt++;const nt=It(gt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,te,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(dt){jt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,gt[nt].width,gt[nt].height,kt,Ct,gt[nt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,te,gt[nt].width,gt[nt].height,0,kt,Ct,gt[nt].data);for(let yt=0;yt<K.length;yt++){const ct=K[yt].image[nt].image;jt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt+1,0,0,ct.width,ct.height,kt,Ct,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt+1,te,ct.width,ct.height,0,kt,Ct,ct.data)}}else{jt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,kt,Ct,gt[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,te,kt,Ct,gt[nt]);for(let yt=0;yt<K.length;yt++){const St=K[yt];jt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt+1,0,0,kt,Ct,St.image[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt+1,te,kt,Ct,St.image[nt])}}}_(E)&&m(r.TEXTURE_CUBE_MAP),tt.__version=st.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function pt(C,E,q,ot,st,tt){const _t=s.convert(q.format,q.colorSpace),mt=s.convert(q.type),At=M(q.internalFormat,_t,mt,q.colorSpace),Qt=n.get(E),dt=n.get(q);if(dt.__renderTarget=E,!Qt.__hasExternalTextures){const gt=Math.max(1,E.width>>tt),Gt=Math.max(1,E.height>>tt);st===r.TEXTURE_3D||st===r.TEXTURE_2D_ARRAY?e.texImage3D(st,tt,At,gt,Gt,E.depth,0,_t,mt,null):e.texImage2D(st,tt,At,gt,Gt,0,_t,mt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Y(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,st,dt.__webglTexture,0,Zt(E)):(st===r.TEXTURE_2D||st>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ot,st,dt.__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(C,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,C),E.depthBuffer){const ot=E.depthTexture,st=ot&&ot.isDepthTexture?ot.type:null,tt=x(E.stencilBuffer,st),_t=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=Zt(E);Y(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,mt,tt,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,mt,tt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,tt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,C)}else{const ot=E.textures;for(let st=0;st<ot.length;st++){const tt=ot[st],_t=s.convert(tt.format,tt.colorSpace),mt=s.convert(tt.type),At=M(tt.internalFormat,_t,mt,tt.colorSpace),Qt=Zt(E);q&&Y(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt,At,E.width,E.height):Y(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qt,At,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,At,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ot=n.get(E.depthTexture);ot.__renderTarget=E,(!ot.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const st=ot.__webglTexture,tt=Zt(E);if(E.depthTexture.format===Ao)Y(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0);else if(E.depthTexture.format===Ho)Y(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Yt(C){const E=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const ot=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ot){const st=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ot.removeEventListener("dispose",st)};ot.addEventListener("dispose",st),E.__depthDisposeCallback=st}E.__boundDepthTexture=ot}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Mt(E.__webglFramebuffer,C)}else if(q){E.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ot]),E.__webglDepthbuffer[ot]===void 0)E.__webglDepthbuffer[ot]=r.createRenderbuffer(),ft(E.__webglDepthbuffer[ot],C,!1);else{const st=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,tt=E.__webglDepthbuffer[ot];r.bindRenderbuffer(r.RENDERBUFFER,tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ft(E.__webglDepthbuffer,C,!1);else{const ot=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,st),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,st)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(C,E,q){const ot=n.get(C);E!==void 0&&pt(ot.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Yt(C)}function ee(C){const E=C.texture,q=n.get(C),ot=n.get(E);C.addEventListener("dispose",D);const st=C.textures,tt=C.isWebGLCubeRenderTarget===!0,_t=st.length>1;if(_t||(ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture()),ot.__version=E.version,o.memory.textures++),tt){q.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[mt]=[];for(let At=0;At<E.mipmaps.length;At++)q.__webglFramebuffer[mt][At]=r.createFramebuffer()}else q.__webglFramebuffer[mt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let mt=0;mt<E.mipmaps.length;mt++)q.__webglFramebuffer[mt]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(_t)for(let mt=0,At=st.length;mt<At;mt++){const Qt=n.get(st[mt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Y(C)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let mt=0;mt<st.length;mt++){const At=st[mt];q.__webglColorRenderbuffer[mt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[mt]);const Qt=s.convert(At.format,At.colorSpace),dt=s.convert(At.type),gt=M(At.internalFormat,Qt,dt,At.colorSpace,C.isXRRenderTarget===!0),Gt=Zt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,gt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,q.__webglColorRenderbuffer[mt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),ft(q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(tt){e.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture),Tt(r.TEXTURE_CUBE_MAP,E);for(let mt=0;mt<6;mt++)if(E.mipmaps&&E.mipmaps.length>0)for(let At=0;At<E.mipmaps.length;At++)pt(q.__webglFramebuffer[mt][At],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At);else pt(q.__webglFramebuffer[mt],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);_(E)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let mt=0,At=st.length;mt<At;mt++){const Qt=st[mt],dt=n.get(Qt);e.bindTexture(r.TEXTURE_2D,dt.__webglTexture),Tt(r.TEXTURE_2D,Qt),pt(q.__webglFramebuffer,C,Qt,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,0),_(Qt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let mt=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(mt,ot.__webglTexture),Tt(mt,E),E.mipmaps&&E.mipmaps.length>0)for(let At=0;At<E.mipmaps.length;At++)pt(q.__webglFramebuffer[At],C,E,r.COLOR_ATTACHMENT0,mt,At);else pt(q.__webglFramebuffer,C,E,r.COLOR_ATTACHMENT0,mt,0);_(E)&&m(mt),e.unbindTexture()}C.depthBuffer&&Yt(C)}function ne(C){const E=C.textures;for(let q=0,ot=E.length;q<ot;q++){const st=E[q];if(_(st)){const tt=S(C),_t=n.get(st).__webglTexture;e.bindTexture(tt,_t),m(tt),e.unbindTexture()}}}const Pt=[],F=[];function Ht(C){if(C.samples>0){if(Y(C)===!1){const E=C.textures,q=C.width,ot=C.height;let st=r.COLOR_BUFFER_BIT;const tt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_t=n.get(C),mt=E.length>1;if(mt)for(let At=0;At<E.length;At++)e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let At=0;At<E.length;At++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(st|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(st|=r.STENCIL_BUFFER_BIT)),mt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_t.__webglColorRenderbuffer[At]);const Qt=n.get(E[At]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Qt,0)}r.blitFramebuffer(0,0,q,ot,0,0,q,ot,st,r.NEAREST),l===!0&&(Pt.length=0,F.length=0,Pt.push(r.COLOR_ATTACHMENT0+At),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Pt.push(tt),F.push(tt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Pt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),mt)for(let At=0;At<E.length;At++){e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,_t.__webglColorRenderbuffer[At]);const Qt=n.get(E[At]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,Qt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Zt(C){return Math.min(i.maxSamples,C.samples)}function Y(C){const E=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Dt(C){const E=o.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function ce(C,E){const q=C.colorSpace,ot=C.format,st=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==Vo&&q!==kr&&(Me.getTransfer(q)===be?(ot!==Hi||st!==Dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function It(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=P,this.resetTextureUnits=N,this.setTexture2D=H,this.setTexture2DArray=I,this.setTexture3D=V,this.setTextureCube=W,this.rebindTextures=Bt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Y}function mD(r,t){function e(n,i=kr){let s;const o=Me.getTransfer(i);if(n===Dr)return r.UNSIGNED_BYTE;if(n===Zf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===jf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===__)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===p_)return r.BYTE;if(n===m_)return r.SHORT;if(n===Za)return r.UNSIGNED_SHORT;if(n===qf)return r.INT;if(n===Us)return r.UNSIGNED_INT;if(n===ji)return r.FLOAT;if(n===ll)return r.HALF_FLOAT;if(n===g_)return r.ALPHA;if(n===x_)return r.RGB;if(n===Hi)return r.RGBA;if(n===v_)return r.LUMINANCE;if(n===y_)return r.LUMINANCE_ALPHA;if(n===Ao)return r.DEPTH_COMPONENT;if(n===Ho)return r.DEPTH_STENCIL;if(n===$f)return r.RED;if(n===Kf)return r.RED_INTEGER;if(n===M_)return r.RG;if(n===Jf)return r.RG_INTEGER;if(n===Qf)return r.RGBA_INTEGER;if(n===oc||n===ac||n===lc||n===cc)if(o===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===oc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===oc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ac)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ih||n===Uh||n===Nh||n===Oh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ih)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bh||n===zh||n===kh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bh||n===zh)return o===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===kh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hh||n===Vh||n===Gh||n===Wh||n===Xh||n===Yh||n===qh||n===Zh||n===jh||n===$h||n===Kh||n===Jh||n===Qh||n===tf)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Hh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$h)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uc||n===ef||n===nf)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===uc)return o===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ef)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===S_||n===rf||n===sf||n===of)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===uc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===rf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===of)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ko?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const _D=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gD=`
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

}`;class xD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Cn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Qr({vertexShader:_D,fragmentShader:gD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new ru(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vD extends Gs{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,f=null,d=null,c=null,p=null;const g=new xD,_=e.getContextAttributes();let m=null,S=null;const M=[],x=[],A=new Nt;let b=null;const D=new qn;D.viewport=new Ce;const w=new qn;w.viewport=new Ce;const y=[D,w],v=new Bv;let R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ut=M[j];return ut===void 0&&(ut=new Uu,M[j]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(j){let ut=M[j];return ut===void 0&&(ut=new Uu,M[j]=ut),ut.getGripSpace()},this.getHand=function(j){let ut=M[j];return ut===void 0&&(ut=new Uu,M[j]=ut),ut.getHandSpace()};function P(j){const ut=x.indexOf(j.inputSource);if(ut===-1)return;const pt=M[ut];pt!==void 0&&(pt.update(j.inputSource,j.frame,u||o),pt.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",H);for(let j=0;j<M.length;j++){const ut=x[j];ut!==null&&(x[j]=null,M[j].disconnect(ut))}R=null,N=null,g.reset(),t.setRenderTarget(m),c=null,d=null,f=null,i=null,S=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",z),i.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,ft=null,Mt=null;_.depth&&(Mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=_.stencil?Ho:Ao,ft=_.stencil?ko:Us);const Yt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};f=new XRWebGLBinding(i,e),d=f.createProjectionLayer(Yt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Ns(d.textureWidth,d.textureHeight,{format:Hi,type:Dr,depthTexture:new F_(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};c=new XRWebGLLayer(i,e,pt),i.updateRenderState({baseLayer:c}),t.setPixelRatio(1),t.setSize(c.framebufferWidth,c.framebufferHeight,!1),S=new Ns(c.framebufferWidth,c.framebufferHeight,{format:Hi,type:Dr,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(a),zt.setContext(i),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(j){for(let ut=0;ut<j.removed.length;ut++){const pt=j.removed[ut],ft=x.indexOf(pt);ft>=0&&(x[ft]=null,M[ft].disconnect(pt))}for(let ut=0;ut<j.added.length;ut++){const pt=j.added[ut];let ft=x.indexOf(pt);if(ft===-1){for(let Yt=0;Yt<M.length;Yt++)if(Yt>=x.length){x.push(pt),ft=Yt;break}else if(x[Yt]===null){x[Yt]=pt,ft=Yt;break}if(ft===-1)break}const Mt=M[ft];Mt&&Mt.connect(pt)}}const I=new B,V=new B;function W(j,ut,pt){I.setFromMatrixPosition(ut.matrixWorld),V.setFromMatrixPosition(pt.matrixWorld);const ft=I.distanceTo(V),Mt=ut.projectionMatrix.elements,Yt=pt.projectionMatrix.elements,Bt=Mt[14]/(Mt[10]-1),ee=Mt[14]/(Mt[10]+1),ne=(Mt[9]+1)/Mt[5],Pt=(Mt[9]-1)/Mt[5],F=(Mt[8]-1)/Mt[0],Ht=(Yt[8]+1)/Yt[0],Zt=Bt*F,Y=Bt*Ht,Dt=ft/(-F+Ht),ce=Dt*-F;if(ut.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ce),j.translateZ(Dt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Mt[10]===-1)j.projectionMatrix.copy(ut.projectionMatrix),j.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const It=Bt+Dt,C=ee+Dt,E=Zt-ce,q=Y+(ft-ce),ot=ne*ee/C*It,st=Pt*ee/C*It;j.projectionMatrix.makePerspective(E,q,ot,st,It,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function et(j,ut){ut===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ut.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ut=j.near,pt=j.far;g.texture!==null&&(g.depthNear>0&&(ut=g.depthNear),g.depthFar>0&&(pt=g.depthFar)),v.near=w.near=D.near=ut,v.far=w.far=D.far=pt,(R!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,N=v.far),D.layers.mask=j.layers.mask|2,w.layers.mask=j.layers.mask|4,v.layers.mask=D.layers.mask|w.layers.mask;const ft=j.parent,Mt=v.cameras;et(v,ft);for(let Yt=0;Yt<Mt.length;Yt++)et(Mt[Yt],ft);Mt.length===2?W(v,D,w):v.projectionMatrix.copy(D.projectionMatrix),L(j,v,ft)};function L(j,ut,pt){pt===null?j.matrix.copy(ut.matrixWorld):(j.matrix.copy(pt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ut.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ut.projectionMatrix),j.projectionMatrixInverse.copy(ut.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=af*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&c===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let it=null;function Tt(j,ut){if(h=ut.getViewerPose(u||o),p=ut,h!==null){const pt=h.views;c!==null&&(t.setRenderTargetFramebuffer(S,c.framebuffer),t.setRenderTarget(S));let ft=!1;pt.length!==v.cameras.length&&(v.cameras.length=0,ft=!0);for(let Bt=0;Bt<pt.length;Bt++){const ee=pt[Bt];let ne=null;if(c!==null)ne=c.getViewport(ee);else{const F=f.getViewSubImage(d,ee);ne=F.viewport,Bt===0&&(t.setRenderTargetTextures(S,F.colorTexture,d.ignoreDepthValues?void 0:F.depthStencilTexture),t.setRenderTarget(S))}let Pt=y[Bt];Pt===void 0&&(Pt=new qn,Pt.layers.enable(Bt),Pt.viewport=new Ce,y[Bt]=Pt),Pt.matrix.fromArray(ee.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(ee.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(ne.x,ne.y,ne.width,ne.height),Bt===0&&(v.matrix.copy(Pt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ft===!0&&v.cameras.push(Pt)}const Mt=i.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&f){const Bt=f.getDepthInformation(pt[0]);Bt&&Bt.isValid&&Bt.texture&&g.init(t,Bt,i.renderState)}}for(let pt=0;pt<M.length;pt++){const ft=x[pt],Mt=M[pt];ft!==null&&Mt!==void 0&&Mt.update(ft,ut,u||o)}it&&it(j,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),p=null}const zt=new G_;zt.setAnimationLoop(Tt),this.setAnimationLoop=function(j){it=j},this.dispose=function(){}}}const us=new er,yD=new Te;function MD(r,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,R_(r)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function i(_,m,S,M,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),f(_,m)):m.isMeshPhongMaterial?(s(_,m),h(_,m)):m.isMeshStandardMaterial?(s(_,m),d(_,m),m.isMeshPhysicalMaterial&&c(_,m,x)):m.isMeshMatcapMaterial?(s(_,m),p(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),g(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,S,M):m.isSpriteMaterial?u(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===yn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===yn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const S=t.get(m),M=S.envMap,x=S.envMapRotation;M&&(_.envMap.value=M,us.copy(x),us.x*=-1,us.y*=-1,us.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),_.envMapRotation.value.setFromMatrix4(yD.makeRotationFromEuler(us)),_.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,S,M){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*S,_.scale.value=M*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function f(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function d(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function c(_,m,S){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function p(_,m){m.matcap&&(_.matcap.value=m.matcap)}function g(_,m){const S=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function SD(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const x=M.program;n.uniformBlockBinding(S,x)}function u(S,M){let x=i[S.id];x===void 0&&(p(S),x=h(S),i[S.id]=x,S.addEventListener("dispose",_));const A=M.program;n.updateUBOMapping(S,A);const b=t.render.frame;s[S.id]!==b&&(d(S),s[S.id]=b)}function h(S){const M=f();S.__bindingPointIndex=M;const x=r.createBuffer(),A=S.__size,b=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,x),x}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=i[S.id],x=S.uniforms,A=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let b=0,D=x.length;b<D;b++){const w=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,v=w.length;y<v;y++){const R=w[y];if(c(R,b,y,A)===!0){const N=R.__offset,P=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let H=0;H<P.length;H++){const I=P[H],V=g(I);typeof I=="number"||typeof I=="boolean"?(R.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,N+z,R.__data)):I.isMatrix3?(R.__data[0]=I.elements[0],R.__data[1]=I.elements[1],R.__data[2]=I.elements[2],R.__data[3]=0,R.__data[4]=I.elements[3],R.__data[5]=I.elements[4],R.__data[6]=I.elements[5],R.__data[7]=0,R.__data[8]=I.elements[6],R.__data[9]=I.elements[7],R.__data[10]=I.elements[8],R.__data[11]=0):(I.toArray(R.__data,z),z+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function c(S,M,x,A){const b=S.value,D=M+"_"+x;if(A[D]===void 0)return typeof b=="number"||typeof b=="boolean"?A[D]=b:A[D]=b.clone(),!0;{const w=A[D];if(typeof b=="number"||typeof b=="boolean"){if(w!==b)return A[D]=b,!0}else if(w.equals(b)===!1)return w.copy(b),!0}return!1}function p(S){const M=S.uniforms;let x=0;const A=16;for(let D=0,w=M.length;D<w;D++){const y=Array.isArray(M[D])?M[D]:[M[D]];for(let v=0,R=y.length;v<R;v++){const N=y[v],P=Array.isArray(N.value)?N.value:[N.value];for(let z=0,H=P.length;z<H;z++){const I=P[z],V=g(I),W=x%A,et=W%V.boundary,L=W+et;x+=et,L!==0&&A-L<V.storage&&(x+=A-L),N.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=V.storage}}}const b=x%A;return b>0&&(x+=A-b),S.__size=x,S.__cache={},this}function g(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function _(S){const M=S.target;M.removeEventListener("dispose",_);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:u,dispose:m}}class Z_{constructor(t={}){const{canvas:e=Ux(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let c;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=n.getContextAttributes().alpha}else c=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ti,this.toneMapping=Zr,this.toneMappingExposure=1;const x=this;let A=!1,b=0,D=0,w=null,y=-1,v=null;const R=new Ce,N=new Ce;let P=null;const z=new qt(0);let H=0,I=e.width,V=e.height,W=1,et=null,L=null;const it=new Ce(0,0,I,V),Tt=new Ce(0,0,I,V);let zt=!1;const j=new id;let ut=!1,pt=!1;this.transmissionResolutionScale=1;const ft=new Te,Mt=new Te,Yt=new B,Bt=new Ce,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Pt(){return w===null?W:1}let F=n;function Ht(T,X){return e.getContext(T,X)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yf}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",St,!1),F===null){const X="webgl2";if(F=Ht(X,T),F===null)throw Ht(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Zt,Y,Dt,ce,It,C,E,q,ot,st,tt,_t,mt,At,Qt,dt,gt,Gt,kt,Ct,te,jt,se,U;function xt(){Zt=new FS(F),Zt.init(),jt=new mD(F,Zt),Y=new TS(F,Zt,t,jt),Dt=new dD(F,Zt),Y.reverseDepthBuffer&&d&&Dt.buffers.depth.setReversed(!0),ce=new NS(F),It=new tD,C=new pD(F,Zt,Dt,It,Y,jt,ce),E=new wS(x),q=new LS(x),ot=new Vv(F),se=new DS(F,ot),st=new IS(F,ot,ce,se),tt=new BS(F,st,ot,ce),kt=new OS(F,Y,C),dt=new bS(It),_t=new QE(x,E,q,Zt,Y,se,dt),mt=new MD(x,It),At=new nD,Qt=new lD(Zt),Gt=new ES(x,E,q,Dt,tt,c,l),gt=new hD(x,tt,Y),U=new SD(F,ce,Y,Dt),Ct=new AS(F,Zt,ce),te=new US(F,Zt,ce),ce.programs=_t.programs,x.capabilities=Y,x.extensions=Zt,x.properties=It,x.renderLists=At,x.shadowMap=gt,x.state=Dt,x.info=ce}xt();const K=new vD(x,F);this.xr=K,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Zt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Zt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(I,V,!1))},this.getSize=function(T){return T.set(I,V)},this.setSize=function(T,X,J=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=T,V=X,e.width=Math.floor(T*W),e.height=Math.floor(X*W),J===!0&&(e.style.width=T+"px",e.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(I*W,V*W).floor()},this.setDrawingBufferSize=function(T,X,J){I=T,V=X,W=J,e.width=Math.floor(T*J),e.height=Math.floor(X*J),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(it)},this.setViewport=function(T,X,J,Z){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,X,J,Z),Dt.viewport(R.copy(it).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(Tt)},this.setScissor=function(T,X,J,Z){T.isVector4?Tt.set(T.x,T.y,T.z,T.w):Tt.set(T,X,J,Z),Dt.scissor(N.copy(Tt).multiplyScalar(W).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(T){Dt.setScissorTest(zt=T)},this.setOpaqueSort=function(T){et=T},this.setTransparentSort=function(T){L=T},this.getClearColor=function(T){return T.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,J=!0){let Z=0;if(T){let G=!1;if(w!==null){const ht=w.texture.format;G=ht===Qf||ht===Jf||ht===Kf}if(G){const ht=w.texture.type,wt=ht===Dr||ht===Us||ht===Za||ht===ko||ht===Zf||ht===jf,Ft=Gt.getClearColor(),Lt=Gt.getClearAlpha(),Xt=Ft.r,Kt=Ft.g,Vt=Ft.b;wt?(p[0]=Xt,p[1]=Kt,p[2]=Vt,p[3]=Lt,F.clearBufferuiv(F.COLOR,0,p)):(g[0]=Xt,g[1]=Kt,g[2]=Vt,g[3]=Lt,F.clearBufferiv(F.COLOR,0,g))}else Z|=F.COLOR_BUFFER_BIT}X&&(Z|=F.DEPTH_BUFFER_BIT),J&&(Z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Gt.dispose(),At.dispose(),Qt.dispose(),It.dispose(),E.dispose(),q.dispose(),tt.dispose(),se.dispose(),U.dispose(),_t.dispose(),K.dispose(),K.removeEventListener("sessionstart",Q),K.removeEventListener("sessionend",vt),at.stop()};function nt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=ce.autoReset,X=gt.enabled,J=gt.autoUpdate,Z=gt.needsUpdate,G=gt.type;xt(),ce.autoReset=T,gt.enabled=X,gt.autoUpdate=J,gt.needsUpdate=Z,gt.type=G}function St(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ct(T){const X=T.target;X.removeEventListener("dispose",ct),O(X)}function O(T){rt(T),It.remove(T)}function rt(T){const X=It.get(T).programs;X!==void 0&&(X.forEach(function(J){_t.releaseProgram(J)}),T.isShaderMaterial&&_t.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,J,Z,G,ht){X===null&&(X=ee);const wt=G.isMesh&&G.matrixWorld.determinant()<0,Ft=Se(T,X,J,Z,G);Dt.setMaterial(Z,wt);let Lt=J.index,Xt=1;if(Z.wireframe===!0){if(Lt=st.getWireframeAttribute(J),Lt===void 0)return;Xt=2}const Kt=J.drawRange,Vt=J.attributes.position;let he=Kt.start*Xt,Ee=(Kt.start+Kt.count)*Xt;ht!==null&&(he=Math.max(he,ht.start*Xt),Ee=Math.min(Ee,(ht.start+ht.count)*Xt)),Lt!==null?(he=Math.max(he,0),Ee=Math.min(Ee,Lt.count)):Vt!=null&&(he=Math.max(he,0),Ee=Math.min(Ee,Vt.count));const qe=Ee-he;if(qe<0||qe===1/0)return;se.setup(G,Z,Ft,J,Lt);let He,ye=Ct;if(Lt!==null&&(He=ot.get(Lt),ye=te,ye.setIndex(He)),G.isMesh)Z.wireframe===!0?(Dt.setLineWidth(Z.wireframeLinewidth*Pt()),ye.setMode(F.LINES)):ye.setMode(F.TRIANGLES);else if(G.isLine){let $t=Z.linewidth;$t===void 0&&($t=1),Dt.setLineWidth($t*Pt()),G.isLineSegments?ye.setMode(F.LINES):G.isLineLoop?ye.setMode(F.LINE_LOOP):ye.setMode(F.LINE_STRIP)}else G.isPoints?ye.setMode(F.POINTS):G.isSprite&&ye.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ps("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))ye.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const $t=G._multiDrawStarts,xn=G._multiDrawCounts,De=G._multiDrawCount,Pi=Lt?ot.get(Lt).bytesPerElement:1,Ys=It.get(Z).currentProgram.getUniforms();for(let ti=0;ti<De;ti++)Ys.setValue(F,"_gl_DrawID",ti),ye.render($t[ti]/Pi,xn[ti])}else if(G.isInstancedMesh)ye.renderInstances(he,qe,G.count);else if(J.isInstancedBufferGeometry){const $t=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,xn=Math.min(J.instanceCount,$t);ye.renderInstances(he,qe,xn)}else ye.render(he,qe)};function k(T,X,J){T.transparent===!0&&T.side===zi&&T.forceSinglePass===!1?(T.side=yn,T.needsUpdate=!0,_e(T,X,J),T.side=Jr,T.needsUpdate=!0,_e(T,X,J),T.side=zi):_e(T,X,J)}this.compile=function(T,X,J=null){J===null&&(J=T),m=Qt.get(J),m.init(X),M.push(m),J.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==J&&T.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const Z=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ht=G.material;if(ht)if(Array.isArray(ht))for(let wt=0;wt<ht.length;wt++){const Ft=ht[wt];k(Ft,J,G),Z.add(Ft)}else k(ht,J,G),Z.add(ht)}),m=M.pop(),Z},this.compileAsync=function(T,X,J=null){const Z=this.compile(T,X,J);return new Promise(G=>{function ht(){if(Z.forEach(function(wt){It.get(wt).currentProgram.isReady()&&Z.delete(wt)}),Z.size===0){G(T);return}setTimeout(ht,10)}Zt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let $=null;function lt(T){$&&$(T)}function Q(){at.stop()}function vt(){at.start()}const at=new G_;at.setAnimationLoop(lt),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(T){$=T,K.setAnimationLoop(T),T===null?at.stop():at.start()},K.addEventListener("sessionstart",Q),K.addEventListener("sessionend",vt),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(X),X=K.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,X,w),m=Qt.get(T,M.length),m.init(X),M.push(m),Mt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),j.setFromProjectionMatrix(Mt),pt=this.localClippingEnabled,ut=dt.init(this.clippingPlanes,pt),_=At.get(T,S.length),_.init(),S.push(_),K.enabled===!0&&K.isPresenting===!0){const ht=x.xr.getDepthSensingMesh();ht!==null&&bt(ht,X,-1/0,x.sortObjects)}bt(T,X,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(et,L),ne=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ne&&Gt.addToRenderList(_,T),this.info.render.frame++,ut===!0&&dt.beginShadows();const J=m.state.shadowsArray;gt.render(J,T,X),ut===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=_.opaque,G=_.transmissive;if(m.setupLights(),X.isArrayCamera){const ht=X.cameras;if(G.length>0)for(let wt=0,Ft=ht.length;wt<Ft;wt++){const Lt=ht[wt];Ut(Z,G,T,Lt)}ne&&Gt.render(T);for(let wt=0,Ft=ht.length;wt<Ft;wt++){const Lt=ht[wt];Wt(_,T,Lt,Lt.viewport)}}else G.length>0&&Ut(Z,G,T,X),ne&&Gt.render(T),Wt(_,T,X);w!==null&&D===0&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(x,T,X),se.resetDefaultState(),y=-1,v=null,M.pop(),M.length>0?(m=M[M.length-1],ut===!0&&dt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?_=S[S.length-1]:_=null};function bt(T,X,J,Z){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){Z&&Bt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Mt);const wt=tt.update(T),Ft=T.material;Ft.visible&&_.push(T,wt,Ft,J,Bt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){const wt=tt.update(T),Ft=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Bt.copy(T.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Bt.copy(wt.boundingSphere.center)),Bt.applyMatrix4(T.matrixWorld).applyMatrix4(Mt)),Array.isArray(Ft)){const Lt=wt.groups;for(let Xt=0,Kt=Lt.length;Xt<Kt;Xt++){const Vt=Lt[Xt],he=Ft[Vt.materialIndex];he&&he.visible&&_.push(T,wt,he,J,Bt.z,Vt)}}else Ft.visible&&_.push(T,wt,Ft,J,Bt.z,null)}}const ht=T.children;for(let wt=0,Ft=ht.length;wt<Ft;wt++)bt(ht[wt],X,J,Z)}function Wt(T,X,J,Z){const G=T.opaque,ht=T.transmissive,wt=T.transparent;m.setupLightsView(J),ut===!0&&dt.setGlobalState(x.clippingPlanes,J),Z&&Dt.viewport(R.copy(Z)),G.length>0&&Jt(G,X,J),ht.length>0&&Jt(ht,X,J),wt.length>0&&Jt(wt,X,J),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Ut(T,X,J,Z){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new Ns(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?ll:Dr,minFilter:Es,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));const ht=m.state.transmissionRenderTarget[Z.id],wt=Z.viewport||R;ht.setSize(wt.z*x.transmissionResolutionScale,wt.w*x.transmissionResolutionScale);const Ft=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(z),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),ne&&Gt.render(J);const Lt=x.toneMapping;x.toneMapping=Zr;const Xt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),ut===!0&&dt.setGlobalState(x.clippingPlanes,Z),Jt(T,J,Z),C.updateMultisampleRenderTarget(ht),C.updateRenderTargetMipmap(ht),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Vt=0,he=X.length;Vt<he;Vt++){const Ee=X[Vt],qe=Ee.object,He=Ee.geometry,ye=Ee.material,$t=Ee.group;if(ye.side===zi&&qe.layers.test(Z.layers)){const xn=ye.side;ye.side=yn,ye.needsUpdate=!0,ge(qe,J,Z,He,ye,$t),ye.side=xn,ye.needsUpdate=!0,Kt=!0}}Kt===!0&&(C.updateMultisampleRenderTarget(ht),C.updateRenderTargetMipmap(ht))}x.setRenderTarget(Ft),x.setClearColor(z,H),Xt!==void 0&&(Z.viewport=Xt),x.toneMapping=Lt}function Jt(T,X,J){const Z=X.isScene===!0?X.overrideMaterial:null;for(let G=0,ht=T.length;G<ht;G++){const wt=T[G],Ft=wt.object,Lt=wt.geometry,Xt=Z===null?wt.material:Z,Kt=wt.group;Ft.layers.test(J.layers)&&ge(Ft,X,J,Lt,Xt,Kt)}}function ge(T,X,J,Z,G,ht){T.onBeforeRender(x,X,J,Z,G,ht),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(x,X,J,Z,T,ht),G.transparent===!0&&G.side===zi&&G.forceSinglePass===!1?(G.side=yn,G.needsUpdate=!0,x.renderBufferDirect(J,X,Z,G,T,ht),G.side=Jr,G.needsUpdate=!0,x.renderBufferDirect(J,X,Z,G,T,ht),G.side=zi):x.renderBufferDirect(J,X,Z,G,T,ht),T.onAfterRender(x,X,J,Z,G,ht)}function _e(T,X,J){X.isScene!==!0&&(X=ee);const Z=It.get(T),G=m.state.lights,ht=m.state.shadowsArray,wt=G.state.version,Ft=_t.getParameters(T,G.state,ht,X,J),Lt=_t.getProgramCacheKey(Ft);let Xt=Z.programs;Z.environment=T.isMeshStandardMaterial?X.environment:null,Z.fog=X.fog,Z.envMap=(T.isMeshStandardMaterial?q:E).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,Xt===void 0&&(T.addEventListener("dispose",ct),Xt=new Map,Z.programs=Xt);let Kt=Xt.get(Lt);if(Kt!==void 0){if(Z.currentProgram===Kt&&Z.lightsStateVersion===wt)return ue(T,Ft),Kt}else Ft.uniforms=_t.getUniforms(T),T.onBeforeCompile(Ft,x),Kt=_t.acquireProgram(Ft,Lt),Xt.set(Lt,Kt),Z.uniforms=Ft.uniforms;const Vt=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Vt.clippingPlanes=dt.uniform),ue(T,Ft),Z.needsLights=tn(T),Z.lightsStateVersion=wt,Z.needsLights&&(Vt.ambientLightColor.value=G.state.ambient,Vt.lightProbe.value=G.state.probe,Vt.directionalLights.value=G.state.directional,Vt.directionalLightShadows.value=G.state.directionalShadow,Vt.spotLights.value=G.state.spot,Vt.spotLightShadows.value=G.state.spotShadow,Vt.rectAreaLights.value=G.state.rectArea,Vt.ltc_1.value=G.state.rectAreaLTC1,Vt.ltc_2.value=G.state.rectAreaLTC2,Vt.pointLights.value=G.state.point,Vt.pointLightShadows.value=G.state.pointShadow,Vt.hemisphereLights.value=G.state.hemi,Vt.directionalShadowMap.value=G.state.directionalShadowMap,Vt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Vt.spotShadowMap.value=G.state.spotShadowMap,Vt.spotLightMatrix.value=G.state.spotLightMatrix,Vt.spotLightMap.value=G.state.spotLightMap,Vt.pointShadowMap.value=G.state.pointShadowMap,Vt.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Kt,Z.uniformsList=null,Kt}function oe(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=fc.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function ue(T,X){const J=It.get(T);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Se(T,X,J,Z,G){X.isScene!==!0&&(X=ee),C.resetTextureUnits();const ht=X.fog,wt=Z.isMeshStandardMaterial?X.environment:null,Ft=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Vo,Lt=(Z.isMeshStandardMaterial?q:E).get(Z.envMap||wt),Xt=Z.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Kt=!!J.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Vt=!!J.morphAttributes.position,he=!!J.morphAttributes.normal,Ee=!!J.morphAttributes.color;let qe=Zr;Z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(qe=x.toneMapping);const He=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ye=He!==void 0?He.length:0,$t=It.get(Z),xn=m.state.lights;if(ut===!0&&(pt===!0||T!==v)){const Ln=T===v&&Z.id===y;dt.setState(Z,T,Ln)}let De=!1;Z.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==xn.state.version||$t.outputColorSpace!==Ft||G.isBatchedMesh&&$t.batching===!1||!G.isBatchedMesh&&$t.batching===!0||G.isBatchedMesh&&$t.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&$t.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&$t.instancing===!1||!G.isInstancedMesh&&$t.instancing===!0||G.isSkinnedMesh&&$t.skinning===!1||!G.isSkinnedMesh&&$t.skinning===!0||G.isInstancedMesh&&$t.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&$t.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&$t.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&$t.instancingMorph===!1&&G.morphTexture!==null||$t.envMap!==Lt||Z.fog===!0&&$t.fog!==ht||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==dt.numPlanes||$t.numIntersection!==dt.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==Kt||$t.morphTargets!==Vt||$t.morphNormals!==he||$t.morphColors!==Ee||$t.toneMapping!==qe||$t.morphTargetsCount!==ye)&&(De=!0):(De=!0,$t.__version=Z.version);let Pi=$t.currentProgram;De===!0&&(Pi=_e(Z,X,G));let Ys=!1,ti=!1,na=!1;const Ie=Pi.getUniforms(),yi=$t.uniforms;if(Dt.useProgram(Pi.program)&&(Ys=!0,ti=!0,na=!0),Z.id!==y&&(y=Z.id,ti=!0),Ys||v!==T){Dt.buffers.depth.getReversed()?(ft.copy(T.projectionMatrix),Ox(ft),Bx(ft),Ie.setValue(F,"projectionMatrix",ft)):Ie.setValue(F,"projectionMatrix",T.projectionMatrix),Ie.setValue(F,"viewMatrix",T.matrixWorldInverse);const Vn=Ie.map.cameraPosition;Vn!==void 0&&Vn.setValue(F,Yt.setFromMatrixPosition(T.matrixWorld)),Y.logarithmicDepthBuffer&&Ie.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ie.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,ti=!0,na=!0)}if(G.isSkinnedMesh){Ie.setOptional(F,G,"bindMatrix"),Ie.setOptional(F,G,"bindMatrixInverse");const Ln=G.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),Ie.setValue(F,"boneTexture",Ln.boneTexture,C))}G.isBatchedMesh&&(Ie.setOptional(F,G,"batchingTexture"),Ie.setValue(F,"batchingTexture",G._matricesTexture,C),Ie.setOptional(F,G,"batchingIdTexture"),Ie.setValue(F,"batchingIdTexture",G._indirectTexture,C),Ie.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&Ie.setValue(F,"batchingColorTexture",G._colorsTexture,C));const Mi=J.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&kt.update(G,J,Pi),(ti||$t.receiveShadow!==G.receiveShadow)&&($t.receiveShadow=G.receiveShadow,Ie.setValue(F,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(yi.envMap.value=Lt,yi.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&X.environment!==null&&(yi.envMapIntensity.value=X.environmentIntensity),ti&&(Ie.setValue(F,"toneMappingExposure",x.toneMappingExposure),$t.needsLights&&ie(yi,na),ht&&Z.fog===!0&&mt.refreshFogUniforms(yi,ht),mt.refreshMaterialUniforms(yi,Z,W,V,m.state.transmissionRenderTarget[T.id]),fc.upload(F,oe($t),yi,C)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(fc.upload(F,oe($t),yi,C),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ie.setValue(F,"center",G.center),Ie.setValue(F,"modelViewMatrix",G.modelViewMatrix),Ie.setValue(F,"normalMatrix",G.normalMatrix),Ie.setValue(F,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Ln=Z.uniformsGroups;for(let Vn=0,du=Ln.length;Vn<du;Vn++){const rs=Ln[Vn];U.update(rs,Pi),U.bind(rs,Pi)}}return Pi}function ie(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function tn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,X,J){It.get(T.texture).__webglTexture=X,It.get(T.depthTexture).__webglTexture=J;const Z=It.get(T);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=J===void 0,Z.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,X){const J=It.get(T);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0};const Fe=F.createFramebuffer();this.setRenderTarget=function(T,X=0,J=0){w=T,b=X,D=J;let Z=!0,G=null,ht=!1,wt=!1;if(T){const Lt=It.get(T);if(Lt.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(F.FRAMEBUFFER,null),Z=!1;else if(Lt.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Lt.__hasExternalTextures)C.rebindTextures(T,It.get(T.texture).__webglTexture,It.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Vt=T.depthTexture;if(Lt.__boundDepthTexture!==Vt){if(Vt!==null&&It.has(Vt)&&(T.width!==Vt.image.width||T.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const Xt=T.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(wt=!0);const Kt=It.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Kt[X])?G=Kt[X][J]:G=Kt[X],ht=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?G=It.get(T).__webglMultisampledFramebuffer:Array.isArray(Kt)?G=Kt[J]:G=Kt,R.copy(T.viewport),N.copy(T.scissor),P=T.scissorTest}else R.copy(it).multiplyScalar(W).floor(),N.copy(Tt).multiplyScalar(W).floor(),P=zt;if(J!==0&&(G=Fe),Dt.bindFramebuffer(F.FRAMEBUFFER,G)&&Z&&Dt.drawBuffers(T,G),Dt.viewport(R),Dt.scissor(N),Dt.setScissorTest(P),ht){const Lt=It.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Lt.__webglTexture,J)}else if(wt){const Lt=It.get(T.texture),Xt=X;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.__webglTexture,J,Xt)}else if(T!==null&&J!==0){const Lt=It.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Lt.__webglTexture,J)}y=-1},this.readRenderTargetPixels=function(T,X,J,Z,G,ht,wt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Ft=Ft[wt]),Ft){Dt.bindFramebuffer(F.FRAMEBUFFER,Ft);try{const Lt=T.texture,Xt=Lt.format,Kt=Lt.type;if(!Y.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-Z&&J>=0&&J<=T.height-G&&F.readPixels(X,J,Z,G,jt.convert(Xt),jt.convert(Kt),ht)}finally{const Lt=w!==null?It.get(w).__webglFramebuffer:null;Dt.bindFramebuffer(F.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(T,X,J,Z,G,ht,wt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Ft=Ft[wt]),Ft){const Lt=T.texture,Xt=Lt.format,Kt=Lt.type;if(!Y.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=T.width-Z&&J>=0&&J<=T.height-G){Dt.bindFramebuffer(F.FRAMEBUFFER,Ft);const Vt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Vt),F.bufferData(F.PIXEL_PACK_BUFFER,ht.byteLength,F.STREAM_READ),F.readPixels(X,J,Z,G,jt.convert(Xt),jt.convert(Kt),0);const he=w!==null?It.get(w).__webglFramebuffer:null;Dt.bindFramebuffer(F.FRAMEBUFFER,he);const Ee=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Nx(F,Ee,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Vt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ht),F.deleteBuffer(Vt),F.deleteSync(Ee),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,X=null,J=0){T.isTexture!==!0&&(ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1]);const Z=Math.pow(2,-J),G=Math.floor(T.image.width*Z),ht=Math.floor(T.image.height*Z),wt=X!==null?X.x:0,Ft=X!==null?X.y:0;C.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,wt,Ft,G,ht),Dt.unbindTexture()};const en=F.createFramebuffer(),nn=F.createFramebuffer();this.copyTextureToTexture=function(T,X,J=null,Z=null,G=0,ht=null){T.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,T=arguments[1],X=arguments[2],ht=arguments[3]||0,J=null),ht===null&&(G!==0?(ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=G,G=0):ht=0);let wt,Ft,Lt,Xt,Kt,Vt,he,Ee,qe;const He=T.isCompressedTexture?T.mipmaps[ht]:T.image;if(J!==null)wt=J.max.x-J.min.x,Ft=J.max.y-J.min.y,Lt=J.isBox3?J.max.z-J.min.z:1,Xt=J.min.x,Kt=J.min.y,Vt=J.isBox3?J.min.z:0;else{const Mi=Math.pow(2,-G);wt=Math.floor(He.width*Mi),Ft=Math.floor(He.height*Mi),T.isDataArrayTexture?Lt=He.depth:T.isData3DTexture?Lt=Math.floor(He.depth*Mi):Lt=1,Xt=0,Kt=0,Vt=0}Z!==null?(he=Z.x,Ee=Z.y,qe=Z.z):(he=0,Ee=0,qe=0);const ye=jt.convert(X.format),$t=jt.convert(X.type);let xn;X.isData3DTexture?(C.setTexture3D(X,0),xn=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(C.setTexture2DArray(X,0),xn=F.TEXTURE_2D_ARRAY):(C.setTexture2D(X,0),xn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const De=F.getParameter(F.UNPACK_ROW_LENGTH),Pi=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ys=F.getParameter(F.UNPACK_SKIP_PIXELS),ti=F.getParameter(F.UNPACK_SKIP_ROWS),na=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,He.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,He.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Xt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Kt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Vt);const Ie=T.isDataArrayTexture||T.isData3DTexture,yi=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const Mi=It.get(T),Ln=It.get(X),Vn=It.get(Mi.__renderTarget),du=It.get(Ln.__renderTarget);Dt.bindFramebuffer(F.READ_FRAMEBUFFER,Vn.__webglFramebuffer),Dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,du.__webglFramebuffer);for(let rs=0;rs<Lt;rs++)Ie&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.get(T).__webglTexture,G,Vt+rs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.get(X).__webglTexture,ht,qe+rs)),F.blitFramebuffer(Xt,Kt,wt,Ft,he,Ee,wt,Ft,F.DEPTH_BUFFER_BIT,F.NEAREST);Dt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||It.has(T)){const Mi=It.get(T),Ln=It.get(X);Dt.bindFramebuffer(F.READ_FRAMEBUFFER,en),Dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,nn);for(let Vn=0;Vn<Lt;Vn++)Ie?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mi.__webglTexture,G,Vt+Vn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mi.__webglTexture,G),yi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ln.__webglTexture,ht,qe+Vn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ln.__webglTexture,ht),G!==0?F.blitFramebuffer(Xt,Kt,wt,Ft,he,Ee,wt,Ft,F.COLOR_BUFFER_BIT,F.NEAREST):yi?F.copyTexSubImage3D(xn,ht,he,Ee,qe+Vn,Xt,Kt,wt,Ft):F.copyTexSubImage2D(xn,ht,he,Ee,Xt,Kt,wt,Ft);Dt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else yi?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(xn,ht,he,Ee,qe,wt,Ft,Lt,ye,$t,He.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(xn,ht,he,Ee,qe,wt,Ft,Lt,ye,He.data):F.texSubImage3D(xn,ht,he,Ee,qe,wt,Ft,Lt,ye,$t,He):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ht,he,Ee,wt,Ft,ye,$t,He.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ht,he,Ee,He.width,He.height,ye,He.data):F.texSubImage2D(F.TEXTURE_2D,ht,he,Ee,wt,Ft,ye,$t,He);F.pixelStorei(F.UNPACK_ROW_LENGTH,De),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pi),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ys),F.pixelStorei(F.UNPACK_SKIP_ROWS,ti),F.pixelStorei(F.UNPACK_SKIP_IMAGES,na),ht===0&&X.generateMipmaps&&F.generateMipmap(xn),Dt.unbindTexture()},this.copyTextureToTexture3D=function(T,X,J=null,Z=null,G=0){return T.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Z=arguments[1]||null,T=arguments[2],X=arguments[3],G=arguments[4]||0),ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,X,J,Z,G)},this.initRenderTarget=function(T){It.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),Dt.unbindTexture()},this.resetState=function(){b=0,D=0,w=null,Dt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}}const om={type:"change"},pd={type:"start"},j_={type:"end"},kl=new nu,am=new fr,ED=Math.cos(70*Ix.DEG2RAD),rn=new B,Wn=2*Math.PI,we={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zu=1e-6;class $_ extends kv{constructor(t,e=null){super(t,e),this.state=we.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Eo.ROTATE,MIDDLE:Eo.DOLLY,RIGHT:Eo.PAN},this.touches={ONE:xo.ROTATE,TWO:xo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Os,this._lastTargetPosition=new B,this._quat=new Os().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ip,this._sphericalDelta=new Ip,this._scale=1,this._panOffset=new B,this._rotateStart=new Nt,this._rotateEnd=new Nt,this._rotateDelta=new Nt,this._panStart=new Nt,this._panEnd=new Nt,this._panDelta=new Nt,this._dollyStart=new Nt,this._dollyEnd=new Nt,this._dollyDelta=new Nt,this._dollyDirection=new B,this._mouse=new Nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=AD.bind(this),this._onPointerDown=DD.bind(this),this._onPointerUp=TD.bind(this),this._onContextMenu=FD.bind(this),this._onMouseWheel=CD.bind(this),this._onKeyDown=RD.bind(this),this._onTouchStart=PD.bind(this),this._onTouchMove=LD.bind(this),this._onMouseDown=bD.bind(this),this._onMouseMove=wD.bind(this),this._interceptControlDown=ID.bind(this),this._interceptControlUp=UD.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(om),this.update(),this.state=we.NONE}update(t=null){const e=this.object.position;rn.copy(e).sub(this.target),rn.applyQuaternion(this._quat),this._spherical.setFromVector3(rn),this.autoRotate&&this.state===we.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Wn:n>Math.PI&&(n-=Wn),i<-Math.PI?i+=Wn:i>Math.PI&&(i-=Wn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(rn.setFromSpherical(this._spherical),rn.applyQuaternion(this._quatInverse),e.copy(this.target).add(rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=rn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new B(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(kl.origin.copy(this.object.position),kl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kl.direction))<ED?this.object.lookAt(this.target):(am.setFromNormalAndCoplanarPoint(this.object.up,this.target),kl.intersectPlane(am,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Zu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zu||this._lastTargetPosition.distanceToSquared(this.target)>Zu?(this.dispatchEvent(om),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Wn/60*this.autoRotateSpeed*t:Wn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){rn.setFromMatrixColumn(e,0),rn.multiplyScalar(-t),this._panOffset.add(rn)}_panUp(t,e){this.screenSpacePanning===!0?rn.setFromMatrixColumn(e,1):(rn.setFromMatrixColumn(e,0),rn.crossVectors(this.object.up,rn)),rn.multiplyScalar(t),this._panOffset.add(rn)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;rn.copy(i).sub(this.target);let s=rn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function DD(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function AD(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function TD(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(j_),this.state=we.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function bD(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Eo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=we.DOLLY;break;case Eo.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=we.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=we.ROTATE}break;case Eo.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=we.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=we.PAN}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(pd)}function wD(r){switch(this.state){case we.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case we.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case we.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function CD(r){this.enabled===!1||this.enableZoom===!1||this.state!==we.NONE||(r.preventDefault(),this.dispatchEvent(pd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(j_))}function RD(r){this.enabled!==!1&&this._handleKeyDown(r)}function PD(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case xo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=we.TOUCH_ROTATE;break;case xo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=we.TOUCH_PAN;break;default:this.state=we.NONE}break;case 2:switch(this.touches.TWO){case xo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=we.TOUCH_DOLLY_PAN;break;case xo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=we.TOUCH_DOLLY_ROTATE;break;default:this.state=we.NONE}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(pd)}function LD(r){switch(this._trackPointer(r),this.state){case we.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case we.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case we.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case we.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=we.NONE}}function FD(r){this.enabled!==!1&&r.preventDefault()}function ID(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function UD(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function K_(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wo={duration:.5,overwrite:!1,delay:0},md,Mn,Ne,Ji=1e8,wn=1/Ji,ff=Math.PI*2,ND=ff/4,OD=0,J_=Math.sqrt,BD=Math.cos,zD=Math.sin,_n=function(t){return typeof t=="string"},Ge=function(t){return typeof t=="function"},br=function(t){return typeof t=="number"},_d=function(t){return typeof t>"u"},nr=function(t){return typeof t=="object"},jn=function(t){return t!==!1},gd=function(){return typeof window<"u"},Hl=function(t){return Ge(t)||_n(t)},Q_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rn=Array.isArray,df=/(?:-?\.?\d|\.)+/gi,tg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,yo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ju=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,eg=/[+-]=-?[.\d]+/,ng=/[^,'"\[\]\s]+/gi,kD=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Be,Wi,pf,xd,xi={},Fc={},ig,rg=function(t){return(Fc=Xo(t,xi))&&Qn},vd=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},$a=function(t,e){return!e&&console.warn(t)},sg=function(t,e){return t&&(xi[t]=e)&&Fc&&(Fc[t]=e)||xi},Ka=function(){return 0},HD={suppressEvents:!0,isStart:!0,kill:!1},dc={suppressEvents:!0,kill:!1},VD={suppressEvents:!0},yd={},jr=[],mf={},og,si={},$u={},lm=30,pc=[],Md="",Sd=function(t){var e=t[0],n,i;if(nr(e)||Ge(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=pc.length;i--&&!pc[i].targetTest(e););n=pc[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Rg(t[i],n)))||t.splice(i,1);return t},Ts=function(t){return t._gsap||Sd(Ci(t))[0]._gsap},ag=function(t,e,n){return(n=t[e])&&Ge(n)?t[e]():_d(n)&&t.getAttribute&&t.getAttribute(e)||n},$n=function(t,e){return(t=t.split(",")).forEach(e)||t},Xe=function(t){return Math.round(t*1e5)/1e5||0},Je=function(t){return Math.round(t*1e7)/1e7||0},bo=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},GD=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ic=function(){var t=jr.length,e=jr.slice(0),n,i;for(mf={},jr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},lg=function(t,e,n,i){jr.length&&!Mn&&Ic(),t.render(e,n,Mn&&e<0&&(t._initted||t._startAt)),jr.length&&!Mn&&Ic()},cg=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(ng).length<2?e:_n(t)?t.trim():t},ug=function(t){return t},vi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},WD=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Xo=function(t,e){for(var n in e)t[n]=e[n];return t},cm=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=nr(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Uc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},La=function(t){var e=t.parent||Be,n=t.keyframes?WD(Rn(t.keyframes)):vi;if(jn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},XD=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},hg=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},ou=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ts=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},bs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},YD=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},_f=function(t,e,n,i){return t._startAt&&(Mn?t._startAt.revert(dc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},qD=function r(t){return!t||t._ts&&r(t.parent)},um=function(t){return t._repeat?Yo(t._tTime,t=t.duration()+t._rDelay)*t:0},Yo=function(t,e){var n=Math.floor(t=Je(t/e));return t&&n===t?n-1:n},Nc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},au=function(t){return t._end=Je(t._start+(t._tDur/Math.abs(t._ts||t._rts||wn)||0))},lu=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Je(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),au(t),n._dirty||bs(n,t)),t},fg=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Nc(t.rawTime(),e),(!e._dur||hl(0,e.totalDuration(),n)-e._tTime>wn)&&e.render(n,!0)),bs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-1e-8}},qi=function(t,e,n,i){return e.parent&&ts(e),e._start=Je((br(n)?n:n||t!==Be?Ai(t,n,e):t._time)+e._delay),e._end=Je(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),hg(t,e,"_first","_last",t._sort?"_start":0),gf(e)||(t._recent=e),i||fg(t,e),t._ts<0&&lu(t,t._tTime),t},dg=function(t,e){return(xi.ScrollTrigger||vd("scrollTrigger",e))&&xi.ScrollTrigger.create(e,t)},pg=function(t,e,n,i,s){if(Dd(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&og!==li.frame)return jr.push(t),t._lazy=[s,i],1},ZD=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},gf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},jD=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&ZD(t)&&!(!t._initted&&gf(t))||(t._ts<0||t._dp._ts<0)&&!gf(t))?0:1,a=t._rDelay,l=0,u,h,f;if(a&&t._repeat&&(l=hl(0,t._tDur,e),h=Yo(l,a),t._yoyo&&h&1&&(o=1-o),h!==Yo(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Mn||i||t._zTime===wn||!e&&t._zTime){if(!t._initted&&pg(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?wn:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,u=t._pt;u;)u.r(o,u.d),u=u._next;e<0&&_f(t,e,n,!0),t._onUpdate&&!n&&di(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&di(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&ts(t,1),!n&&!Mn&&(di(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},$D=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},qo=function(t,e,n,i){var s=t._repeat,o=Je(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Je(o*(s+1)+t._rDelay*s):o,a>0&&!i&&lu(t,t._tTime=t._tDur*a),t.parent&&au(t),n||bs(t.parent,t),t},hm=function(t){return t instanceof zn?bs(t):qo(t,t._dur)},KD={_start:0,endTime:Ka,totalDuration:Ka},Ai=function r(t,e,n){var i=t.labels,s=t._recent||KD,o=t.duration()>=Ji?s.endTime(!1):t._dur,a,l,u;return _n(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),u=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(u?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),u&&n&&(l=l/100*(Rn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Fa=function(t,e,n){var i=br(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=jn(l.vars.inherit)&&l.parent;o.immediateRender=jn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ke(e[0],o,e[s+1])},is=function(t,e){return t||t===0?e(t):e},hl=function(t,e,n){return n<t?t:n>e?e:n},Tn=function(t,e){return!_n(t)||!(e=kD.exec(t))?"":e[1]},JD=function(t,e,n){return is(n,function(i){return hl(t,e,i)})},xf=[].slice,mg=function(t,e){return t&&nr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&nr(t[0]))&&!t.nodeType&&t!==Wi},QD=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return _n(i)&&!e||mg(i,1)?(s=n).push.apply(s,Ci(i)):n.push(i)})||n},Ci=function(t,e,n){return Ne&&!e&&Ne.selector?Ne.selector(t):_n(t)&&!n&&(pf||!Zo())?xf.call((e||xd).querySelectorAll(t),0):Rn(t)?QD(t,n):mg(t)?xf.call(t,0):t?[t]:[]},vf=function(t){return t=Ci(t)[0]||$a("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ci(e,n.querySelectorAll?n:n===t?$a("Invalid scope")||xd.createElement("div"):t)}},_g=function(t){return t.sort(function(){return .5-Math.random()})},gg=function(t){if(Ge(t))return t;var e=nr(t)?t:{each:t},n=ws(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,u=e.axis,h=i,f=i;return _n(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(d,c,p){var g=(p||e).length,_=o[g],m,S,M,x,A,b,D,w,y;if(!_){if(y=e.grid==="auto"?0:(e.grid||[1,Ji])[1],!y){for(D=-1e8;D<(D=p[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(_=o[g]=[],m=l?Math.min(y,g)*h-.5:i%y,S=y===Ji?0:l?g*f/y-.5:i/y|0,D=0,w=Ji,b=0;b<g;b++)M=b%y-m,x=S-(b/y|0),_[b]=A=u?Math.abs(u==="y"?x:M):J_(M*M+x*x),A>D&&(D=A),A<w&&(w=A);i==="random"&&_g(_),_.max=D-w,_.min=w,_.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:u?u==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),_.b=g<0?s-g:s,_.u=Tn(e.amount||e.each)||0,n=n&&g<0?bg(n):n}return g=(_[d]-_.min)/_.max||0,Je(_.b+(n?n(g):g)*_.v)+_.u}},yf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Je(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(br(n)?0:Tn(n))}},xg=function(t,e){var n=Rn(t),i,s;return!n&&nr(t)&&(i=n=t.radius||Ji,t.values?(t=Ci(t.values),(s=!br(t[0]))&&(i*=i)):t=yf(t.increment)),is(e,n?Ge(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Ji,h=0,f=t.length,d,c;f--;)s?(d=t[f].x-a,c=t[f].y-l,d=d*d+c*c):d=Math.abs(t[f]-a),d<u&&(u=d,h=f);return h=!i||u<=i?t[h]:o,s||h===o||br(o)?h:h+Tn(o)}:yf(t))},vg=function(t,e,n,i){return is(Rn(t)?!e:n===!0?!!(n=0):!i,function(){return Rn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},tA=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},eA=function(t,e){return function(n){return t(parseFloat(n))+(e||Tn(n))}},nA=function(t,e,n){return Mg(t,e,0,1,n)},yg=function(t,e,n){return is(n,function(i){return t[~~e(i)]})},iA=function r(t,e,n){var i=e-t;return Rn(t)?yg(t,r(0,t.length),e):is(n,function(s){return(i+(s-t)%i)%i+t})},rA=function r(t,e,n){var i=e-t,s=i*2;return Rn(t)?yg(t,r(0,t.length-1),e):is(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Ja=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?ng:df),n+=t.substr(e,i-e)+vg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Mg=function(t,e,n,i,s){var o=e-t,a=i-n;return is(s,function(l){return n+((l-t)/o*a||0)})},sA=function r(t,e,n,i){var s=isNaN(t+e)?0:function(c){return(1-c)*t+c*e};if(!s){var o=_n(t),a={},l,u,h,f,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Rn(t)&&!Rn(e)){for(h=[],f=t.length,d=f-2,u=1;u<f;u++)h.push(r(t[u-1],t[u]));f--,s=function(p){p*=f;var g=Math.min(d,~~p);return h[g](p-g)},n=e}else i||(t=Xo(Rn(t)?[]:{},t));if(!h){for(l in e)Ed.call(a,t,l,"get",e[l]);s=function(p){return bd(p,a)||(o?t.p:t)}}}return is(n,s)},fm=function(t,e,n){var i=t.labels,s=Ji,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},di=function(t,e,n){var i=t.vars,s=i[e],o=Ne,a=t._ctx,l,u,h;if(s)return l=i[e+"Params"],u=i.callbackScope||t,n&&jr.length&&Ic(),a&&(Ne=a),h=l?s.apply(u,l):s.call(u),Ne=o,h},xa=function(t){return ts(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Mn),t.progress()<1&&di(t,"onInterrupt"),t},Mo,Sg=[],Eg=function(t){if(t)if(t=!t.name&&t.default||t,gd()||t.headless){var e=t.name,n=Ge(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ka,render:bd,add:Ed,kill:MA,modifier:yA,rawVars:0},o={targetTest:0,get:0,getSetter:Td,aliases:{},register:0};if(Zo(),t!==i){if(si[e])return;vi(i,vi(Uc(t,s),o)),Xo(i.prototype,Xo(s,Uc(t,o))),si[i.prop=e]=i,t.targetTest&&(pc.push(i),yd[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}sg(e,i),t.register&&t.register(Qn,i,Kn)}else Sg.push(t)},Re=255,va={aqua:[0,Re,Re],lime:[0,Re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Re],navy:[0,0,128],white:[Re,Re,Re],olive:[128,128,0],yellow:[Re,Re,0],orange:[Re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Re,0,0],pink:[Re,192,203],cyan:[0,Re,Re],transparent:[Re,Re,Re,0]},Ku=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Re+.5|0},Dg=function(t,e,n){var i=t?br(t)?[t>>16,t>>8&Re,t&Re]:0:va.black,s,o,a,l,u,h,f,d,c,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),va[t])i=va[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Re,i&Re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Re,t&Re]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(df),!e)l=+i[0]%360/360,u=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(u+1):h+u-h*u,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Ku(l+1/3,s,o),i[1]=Ku(l,s,o),i[2]=Ku(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(tg),n&&i.length<4&&(i[3]=1),i}else i=t.match(df)||va.transparent;i=i.map(Number)}return e&&!p&&(s=i[0]/Re,o=i[1]/Re,a=i[2]/Re,f=Math.max(s,o,a),d=Math.min(s,o,a),h=(f+d)/2,f===d?l=u=0:(c=f-d,u=h>.5?c/(2-f-d):c/(f+d),l=f===s?(o-a)/c+(o<a?6:0):f===o?(a-s)/c+2:(s-o)/c+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Ag=function(t){var e=[],n=[],i=-1;return t.split($r).forEach(function(s){var o=s.match(yo)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},dm=function(t,e,n){var i="",s=(t+i).match($r),o=e?"hsla(":"rgba(",a=0,l,u,h,f;if(!s)return t;if(s=s.map(function(d){return(d=Dg(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Ag(t),l=n.c,l.join(i)!==h.c.join(i)))for(u=t.replace($r,"1").split(yo),f=u.length-1;a<f;a++)i+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!u)for(u=t.split($r),f=u.length-1;a<f;a++)i+=u[a]+s[a];return i+u[f]},$r=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in va)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),oA=/hsl[a]?\(/,Tg=function(t){var e=t.join(" "),n;if($r.lastIndex=0,$r.test(e))return n=oA.test(e),t[1]=dm(t[1],n),t[0]=dm(t[0],n,Ag(t[1])),!0},Qa,li=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,u,h,f,d,c,p=function g(_){var m=r()-i,S=_===!0,M,x,A,b;if((m>t||m<0)&&(n+=m-e),i+=m,A=i-n,M=A-o,(M>0||S)&&(b=++f.frame,d=A-f.time*1e3,f.time=A=A/1e3,o+=M+(M>=s?4:s-M),x=1),S||(l=u(g)),x)for(c=0;c<a.length;c++)a[c](A,d,b,_)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){ig&&(!pf&&gd()&&(Wi=pf=window,xd=Wi.document||{},xi.gsap=Qn,(Wi.gsapVersions||(Wi.gsapVersions=[])).push(Qn.version),rg(Fc||Wi.GreenSockGlobals||!Wi.gsap&&Wi||{}),Sg.forEach(Eg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=h||function(_){return setTimeout(_,o-f.time*1e3+1|0)},Qa=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Qa=0,u=Ka},lagSmoothing:function(_,m){t=_||1/0,e=Math.min(m||33,t)},fps:function(_){s=1e3/(_||240),o=f.time*1e3+s},add:function(_,m,S){var M=m?function(x,A,b,D){_(x,A,b,D),f.remove(M)}:_;return f.remove(_),a[S?"unshift":"push"](M),Zo(),M},remove:function(_,m){~(m=a.indexOf(_))&&a.splice(m,1)&&c>=m&&c--},_listeners:a},f}(),Zo=function(){return!Qa&&li.wake()},ve={},aA=/^[\d.\-M][\d.\-,\s]/,lA=/["']/g,cA=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,u;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),e[i]=isNaN(u)?u.replace(lA,"").trim():+u,i=l.substr(a+1).trim();return e},uA=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},hA=function(t){var e=(t+"").split("("),n=ve[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[cA(e[1])]:uA(t).split(",").map(cg)):ve._CE&&aA.test(t)?ve._CE("",t):n},bg=function(t){return function(e){return 1-t(1-e)}},wg=function r(t,e){for(var n=t._first,i;n;)n instanceof zn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},ws=function(t,e){return t&&(Ge(t)?t:ve[t]||hA(t))||e},Xs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return $n(t,function(a){ve[a]=xi[a]=s,ve[o=a.toLowerCase()]=n;for(var l in s)ve[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ve[a+"."+l]=s[l]}),s},Cg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ju=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/ff*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*zD((h-o)*s)+1},l=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:Cg(a);return s=ff/s,l.config=function(u,h){return r(t,u,h)},l},Qu=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Cg(n);return i.config=function(s){return r(t,s)},i};$n("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Xs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ve.Linear.easeNone=ve.none=ve.Linear.easeIn;Xs("Elastic",Ju("in"),Ju("out"),Ju());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Xs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Xs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Xs("Circ",function(r){return-(J_(1-r*r)-1)});Xs("Sine",function(r){return r===1?1:-BD(r*ND)+1});Xs("Back",Qu("in"),Qu("out"),Qu());ve.SteppedEase=ve.steps=xi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-wn;return function(a){return((i*hl(0,o,a)|0)+s)*n}}};Wo.ease=ve["quad.out"];$n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Md+=r+","+r+"Params,"});var Rg=function(t,e){this.id=OD++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ag,this.set=e?e.getSetter:Td},tl=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,qo(this,+e.duration,1,1),this.data=e.data,Ne&&(this._ctx=Ne,Ne.data.push(this)),Qa||li.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,qo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Zo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(lu(this,n),!s._dp||s.parent||fg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&qi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===wn||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),lg(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+um(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+um(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Yo(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Nc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(hl(-Math.abs(this._delay),this._tDur,s),i!==!1),au(this),YD(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wn&&(this._tTime-=wn)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&qi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(jn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=VD);var i=Mn;return Mn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ai(this,n),jn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,jn(i)),this._dur||(this._zTime=-1e-8),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-wn)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Ge(n)?n:ug,a=function(){var u=i.then;i.then=null,Ge(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),s(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){xa(this)},r}();vi(tl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var zn=function(r){K_(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=jn(n.sortChildren),Be&&qi(n.parent||Be,hr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&dg(hr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Fa(0,arguments,this),this},e.from=function(i,s,o){return Fa(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Fa(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,La(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ke(i,s,Ai(this,o),1),this},e.call=function(i,s,o){return qi(this,Ke.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,u,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=h,o.parent=this,new Ke(i,o,Ai(this,l)),this},e.staggerFrom=function(i,s,o,a,l,u,h){return o.runBackwards=1,La(o).immediateRender=jn(o.immediateRender),this.staggerTo(i,s,o,a,l,u,h)},e.staggerFromTo=function(i,s,o,a,l,u,h,f){return a.startAt=o,La(a).immediateRender=jn(a.immediateRender),this.staggerTo(i,s,a,l,u,h,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,h=i<=0?0:Je(i),f=this._zTime<0!=i<0&&(this._initted||!u),d,c,p,g,_,m,S,M,x,A,b,D;if(this!==Be&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&u&&(h+=this._time-a,i+=this._time-a),d=h,x=this._start,M=this._ts,m=!M,f&&(u||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,_=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,o);if(d=Je(h%_),h===l?(g=this._repeat,d=u):(A=Je(h/_),g=~~A,g&&g===A&&(d=u,g--),d>u&&(d=u)),A=Yo(this._tTime,_),!a&&this._tTime&&A!==g&&this._tTime-A*_-this._dur<=0&&(A=g),b&&g&1&&(d=u-d,D=1),g!==A&&!this._lock){var w=b&&A&1,y=w===(b&&g&1);if(g<A&&(w=!w),a=w?0:h%u?u:h,this._lock=1,this.render(a||(D?0:Je(g*_)),s,!u)._lock=0,this._tTime=h,!s&&this.parent&&di(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,y&&(this._lock=2,a=w?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;wg(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=$D(this,Je(a),Je(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!g&&(di(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(c=this._first;c;){if(p=c._next,(c._act||d>=c._start)&&c._ts&&S!==c){if(c.parent!==this)return this.render(i,s,o);if(c.render(c._ts>0?(d-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(d-c._start)*c._ts,s,o),d!==this._time||!this._ts&&!m){S=0,p&&(h+=this._zTime=-1e-8);break}}c=p}else{c=this._last;for(var v=i<0?i:d;c;){if(p=c._prev,(c._act||v<=c._end)&&c._ts&&S!==c){if(c.parent!==this)return this.render(i,s,o);if(c.render(c._ts>0?(v-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(v-c._start)*c._ts,s,o||Mn&&(c._initted||c._startAt)),d!==this._time||!this._ts&&!m){S=0,p&&(h+=this._zTime=v?-1e-8:wn);break}}c=p}}if(S&&!s&&(this.pause(),S.render(d>=a?0:-1e-8)._zTime=d>=a?1:-1,this._ts))return this._start=x,au(this),this.render(i,s,o);this._onUpdate&&!s&&di(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ts(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(di(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(br(s)||(s=Ai(this,s,i)),!(i instanceof tl)){if(Rn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(_n(i))return this.addLabel(i,s);if(Ge(i))i=Ke.delayedCall(0,i);else return this}return this!==i?qi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Ke?s&&l.push(u):(o&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return _n(i)?this.removeLabel(i):Ge(i)?this.killTweensOf(i):(i.parent===this&&ou(this,i),i===this._recent&&(this._recent=this._last),bs(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Je(li.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Ai(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ke.delayedCall(0,s||Ka,o);return a.data="isPause",this._hasPause=1,qi(this,a,Ai(this,i))},e.removePause=function(i){var s=this._first;for(i=Ai(this,i);s;)s._start===i&&s.data==="isPause"&&ts(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Hr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Ci(i),l=this._first,u=br(s),h;l;)l instanceof Ke?GD(l._targets,a)&&(u?(!Hr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Ai(o,i),l=s,u=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,c,p=Ke.to(o,vi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||wn,onStart:function(){if(o.pause(),!c){var _=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());p._dur!==_&&qo(p,_,0,1).render(p._time,!0,!0),c=1}h&&h.apply(p,f||[])}},s));return d?p.render(0):p},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,vi({startAt:{time:Ai(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),fm(this,Ai(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),fm(this,Ai(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+wn)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=i);return bs(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),bs(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ji,u,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,qi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;qo(o,o===Be&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Be._ts&&(lg(Be,Nc(i,Be)),og=li.frame),li.frame>=lm){lm+=mi.autoSleep||120;var s=Be._first;if((!s||!s._ts)&&mi.autoSleep&&li._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||li.sleep()}}},t}(tl);vi(zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var fA=function(t,e,n,i,s,o,a){var l=new Kn(this._pt,t,e,0,1,Ng,null,s),u=0,h=0,f,d,c,p,g,_,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ja(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),d=n.match(ju)||[];f=ju.exec(i);)p=f[0],g=i.substring(u,f.index),c?c=(c+1)%5:g.substr(-5)==="rgba("&&(c=1),p!==d[h++]&&(_=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:_,c:p.charAt(1)==="="?bo(_,p)-_:parseFloat(p)-_,m:c&&c<4?Math.round:0},u=ju.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=a,(eg.test(i)||m)&&(l.e=0),this._pt=l,l},Ed=function(t,e,n,i,s,o,a,l,u,h){Ge(i)&&(i=i(s||0,t,o));var f=t[e],d=n!=="get"?n:Ge(f)?u?t[e.indexOf("set")||!Ge(t["get"+e.substr(3)])?e:"get"+e.substr(3)](u):t[e]():f,c=Ge(f)?u?gA:Ig:Ad,p;if(_n(i)&&(~i.indexOf("random(")&&(i=Ja(i)),i.charAt(1)==="="&&(p=bo(d,i)+(Tn(d)||0),(p||p===0)&&(i=p))),!h||d!==i||Mf)return!isNaN(d*i)&&i!==""?(p=new Kn(this._pt,t,e,+d||0,i-(d||0),typeof f=="boolean"?vA:Ug,0,c),u&&(p.fp=u),a&&p.modifier(a,this,t),this._pt=p):(!f&&!(e in t)&&vd(e,i),fA.call(this,t,e,d,i,c,l||mi.stringFilter,u))},dA=function(t,e,n,i,s){if(Ge(t)&&(t=Ia(t,s,e,n,i)),!nr(t)||t.style&&t.nodeType||Rn(t)||Q_(t))return _n(t)?Ia(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Ia(t[a],s,e,n,i);return o},Pg=function(t,e,n,i,s,o){var a,l,u,h;if(si[t]&&(a=new si[t]).init(s,a.rawVars?e[t]:dA(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Kn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Mo))for(u=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)u[a._props[h]]=l;return a},Hr,Mf,Dd=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,u=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,c=i.autoRevert,p=t._dur,g=t._startAt,_=t._targets,m=t.parent,S=m&&m.data==="nested"?m.vars.targets:_,M=t._overwrite==="auto"&&!md,x=t.timeline,A,b,D,w,y,v,R,N,P,z,H,I,V;if(x&&(!d||!s)&&(s="none"),t._ease=ws(s,Wo.ease),t._yEase=f?bg(ws(f===!0?s:f,Wo.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(N=_[0]?Ts(_[0]).harness:0,I=N&&i[N.prop],A=Uc(i,yd),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!c?g.render(-1,!0):g.revert(h&&p?dc:HD),g._lazy=0),o){if(ts(t._startAt=Ke.set(_,vi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&jn(l),startAt:null,delay:0,onUpdate:u&&function(){return di(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mn||!a&&!c)&&t._startAt.revert(dc),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!g){if(e&&(a=!1),D=vi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&jn(l),immediateRender:a,stagger:0,parent:m},A),I&&(D[N.prop]=I),ts(t._startAt=Ke.set(_,D)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mn?t._startAt.revert(dc):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,wn,wn);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&jn(l)||l&&!p,b=0;b<_.length;b++){if(y=_[b],R=y._gsap||Sd(_)[b]._gsap,t._ptLookup[b]=z={},mf[R.id]&&jr.length&&Ic(),H=S===_?b:S.indexOf(y),N&&(P=new N).init(y,I||A,t,H,S)!==!1&&(t._pt=w=new Kn(t._pt,y,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(W){z[W]=w}),P.priority&&(v=1)),!N||I)for(D in A)si[D]&&(P=Pg(D,A,t,H,y,S))?P.priority&&(v=1):z[D]=w=Ed.call(t,y,D,"get",A[D],H,S,0,i.stringFilter);t._op&&t._op[b]&&t.kill(y,t._op[b]),M&&t._pt&&(Hr=t,Be.killTweensOf(y,z,t.globalTime(e)),V=!t.parent,Hr=0),t._pt&&l&&(mf[R.id]=1)}v&&Og(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!V,d&&e<=0&&x.render(Ji,!0,!0)},pA=function(t,e,n,i,s,o,a,l){var u=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,d,c;if(!u)for(u=t._ptCache[e]=[],d=t._ptLookup,c=t._targets.length;c--;){if(h=d[c][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Mf=1,t.vars[e]="+=0",Dd(t,a),Mf=0,l?$a(e+" not eligible for reset"):1;u.push(h)}for(c=u.length;c--;)f=u[c],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Xe(n)+Tn(f.e)),f.b&&(f.b=h.s+Tn(f.b))},mA=function(t,e){var n=t[0]?Ts(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Xo({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},_A=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Rn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,u){return a.push({t:u/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Ia=function(t,e,n,i,s){return Ge(t)?t.call(e,n,i,s):_n(t)&&~t.indexOf("random(")?Ja(t):t},Lg=Md+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Fg={};$n(Lg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Fg[r]=1});var Ke=function(r){K_(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:La(i))||this;var l=a.vars,u=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,c=l.overwrite,p=l.keyframes,g=l.defaults,_=l.scrollTrigger,m=l.yoyoEase,S=i.parent||Be,M=(Rn(n)||Q_(n)?br(n[0]):"length"in i)?[n]:Ci(n),x,A,b,D,w,y,v,R;if(a._targets=M.length?Sd(M):$a("GSAP target "+n+" not found. https://gsap.com",!mi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=c,p||d||Hl(u)||Hl(h)){if(i=a.vars,x=a.timeline=new zn({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:M}),x.kill(),x.parent=x._dp=hr(a),x._start=0,d||Hl(u)||Hl(h)){if(D=M.length,v=d&&gg(d),nr(d))for(w in d)~Lg.indexOf(w)&&(R||(R={}),R[w]=d[w]);for(A=0;A<D;A++)b=Uc(i,Fg),b.stagger=0,m&&(b.yoyoEase=m),R&&Xo(b,R),y=M[A],b.duration=+Ia(u,hr(a),A,y,M),b.delay=(+Ia(h,hr(a),A,y,M)||0)-a._delay,!d&&D===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),x.to(y,b,v?v(A,y,M):0),x._ease=ve.none;x.duration()?u=h=0:a.timeline=0}else if(p){La(vi(x.vars.defaults,{ease:"none"})),x._ease=ws(p.ease||i.ease||"none");var N=0,P,z,H;if(Rn(p))p.forEach(function(I){return x.to(M,I,">")}),x.duration();else{b={};for(w in p)w==="ease"||w==="easeEach"||_A(w,p[w],b,p.easeEach);for(w in b)for(P=b[w].sort(function(I,V){return I.t-V.t}),N=0,A=0;A<P.length;A++)z=P[A],H={ease:z.e,duration:(z.t-(A?P[A-1].t:0))/100*u},H[w]=z.v,x.to(M,H,N),N+=H.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return c===!0&&!md&&(Hr=hr(a),Be.killTweensOf(M),Hr=0),qi(S,hr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!u&&!p&&a._start===Je(S._time)&&jn(f)&&qD(hr(a))&&S.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-h)||0)),_&&dg(hr(a),_),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,u=this._dur,h=i<0,f=i>l-wn&&!h?l:i<wn?0:i,d,c,p,g,_,m,S,M,x;if(!u)jD(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=f,M=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,o);if(d=Je(f%g),f===l?(p=this._repeat,d=u):(_=Je(f/g),p=~~_,p&&p===_?(d=u,p--):d>u&&(d=u)),m=this._yoyo&&p&1,m&&(x=this._yEase,d=u-d),_=Yo(this._tTime,g),d===a&&!o&&this._initted&&p===_)return this._tTime=f,this;p!==_&&(M&&this._yEase&&wg(M,m),this.vars.repeatRefresh&&!m&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Je(g*p),!0).invalidate()._lock=0))}if(!this._initted){if(pg(this,h?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==_))return this;if(u!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(x||this._ease)(d/u),this._from&&(this.ratio=S=1-S),d&&!a&&!s&&!p&&(di(this,"onStart"),this._tTime!==f))return this;for(c=this._pt;c;)c.r(S,c.d),c=c._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&_f(this,i,s,o),di(this,"onUpdate")),this._repeat&&p!==_&&this.vars.onRepeat&&!s&&this.parent&&di(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&_f(this,i,!0,!0),(i||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ts(this,1),!s&&!(h&&!a)&&(f||a||m)&&(di(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Qa||li.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Dd(this,u),h=this._ease(u/this._dur),pA(this,i,s,o,a,h,u,l)?this.resetTo(i,s,o,a,1):(lu(this,0),this.parent||hg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?xa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Hr&&Hr.vars.overwrite!==!0)._first||xa(this),this.parent&&o!==this.timeline.totalDuration()&&qo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ci(i):a,u=this._ptLookup,h=this._pt,f,d,c,p,g,_,m;if((!s||s==="all")&&XD(a,l))return s==="all"&&(this._pt=0),xa(this);for(f=this._op=this._op||[],s!=="all"&&(_n(s)&&(g={},$n(s,function(S){return g[S]=1}),s=g),s=mA(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=u[m],s==="all"?(f[m]=s,p=d,c={}):(c=f[m]=f[m]||{},p=s);for(g in p)_=d&&d[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&ou(this,_,"_pt"),delete d[g]),c!=="all"&&(c[g]=1)}return this._initted&&!this._pt&&h&&xa(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Fa(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Fa(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Be.killTweensOf(i,s,o)},t}(tl);vi(Ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});$n("staggerTo,staggerFrom,staggerFromTo",function(r){Ke[r]=function(){var t=new zn,e=xf.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Ad=function(t,e,n){return t[e]=n},Ig=function(t,e,n){return t[e](n)},gA=function(t,e,n,i){return t[e](i.fp,n)},xA=function(t,e,n){return t.setAttribute(e,n)},Td=function(t,e){return Ge(t[e])?Ig:_d(t[e])&&t.setAttribute?xA:Ad},Ug=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},vA=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ng=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},bd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},yA=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},MA=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ou(this,e,"_pt"):e.dep||(n=1),e=i;return!n},SA=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Og=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Kn=function(){function r(e,n,i,s,o,a,l,u,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Ug,this.d=l||this,this.set=u||Ad,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=SA,this.m=n,this.mt=s,this.tween=i},r}();$n(Md+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return yd[r]=1});xi.TweenMax=xi.TweenLite=Ke;xi.TimelineLite=xi.TimelineMax=zn;Be=new zn({sortChildren:!1,defaults:Wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mi.stringFilter=Tg;var Cs=[],mc={},EA=[],pm=0,DA=0,th=function(t){return(mc[t]||EA).map(function(e){return e()})},Sf=function(){var t=Date.now(),e=[];t-pm>2&&(th("matchMediaInit"),Cs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,u;for(a in i)o=Wi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(n.revert(),l&&e.push(n))}),th("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),pm=t,th("matchMedia"))},Bg=function(){function r(e,n){this.selector=n&&vf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=DA++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ge(n)&&(s=i,i=n,n=Ge);var o=this,a=function(){var u=Ne,h=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=vf(s)),Ne=o,f=i.apply(o,arguments),Ge(f)&&o._r.push(f),Ne=u,o.selector=h,o.isReverted=!1,f};return o.last=a,n===Ge?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ne;Ne=null,n(this),Ne=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)u=s.data[l],u instanceof zn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Ke)&&u.revert&&u.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Cs.length;o--;)Cs[o].id===this.id&&Cs.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),AA=function(){function r(e){this.contexts=[],this.scope=e,Ne&&Ne.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){nr(n)||(n={matches:n});var o=new Bg(0,s||this.scope),a=o.conditions={},l,u,h;Ne&&!o.selector&&(o.selector=Ne.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(u in n)u==="all"?h=1:(l=Wi.matchMedia(n[u]),l&&(Cs.indexOf(o)<0&&Cs.push(o),(a[u]=l.matches)&&(h=1),l.addListener?l.addListener(Sf):l.addEventListener("change",Sf)));return h&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Oc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Eg(i)})},timeline:function(t){return new zn(t)},getTweensOf:function(t,e){return Be.getTweensOf(t,e)},getProperty:function(t,e,n,i){_n(t)&&(t=Ci(t)[0]);var s=Ts(t||{}).get,o=n?ug:cg;return n==="native"&&(n=""),t&&(e?o((si[e]&&si[e].get||s)(t,e,n,i)):function(a,l,u){return o((si[a]&&si[a].get||s)(t,a,l,u))})},quickSetter:function(t,e,n){if(t=Ci(t),t.length>1){var i=t.map(function(h){return Qn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var o=si[e],a=Ts(t),l=a.harness&&(a.harness.aliases||{})[e]||e,u=o?function(h){var f=new o;Mo._pt=0,f.init(t,n?h+n:h,Mo,0,[t]),f.render(1,f),Mo._pt&&bd(1,Mo)}:a.set(t,l);return o?u:function(h){return u(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=Qn.to(t,vi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,u,h){return s.resetTo(e,l,u,h)};return o.tween=s,o},isTweening:function(t){return Be.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ws(t.ease,Wo.ease)),cm(Wo,t||{})},config:function(t){return cm(mi,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!si[a]&&!xi[a]&&$a(e+" effect requires "+a+" plugin.")}),$u[e]=function(a,l,u){return n(Ci(a),vi(l||{},s),u)},o&&(zn.prototype[e]=function(a,l,u){return this.add($u[e](a,nr(l)?l:(u=l)&&{},this),u)})},registerEase:function(t,e){ve[t]=ws(e)},parseEase:function(t,e){return arguments.length?ws(t,e):ve},getById:function(t){return Be.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new zn(t),i,s;for(n.smoothChildTiming=jn(t.smoothChildTiming),Be.remove(n),n._dp=0,n._time=n._tTime=Be._time,i=Be._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ke&&i.vars.onComplete===i._targets[0]))&&qi(n,i,i._start-i._delay),i=s;return qi(Be,n,0),n},context:function(t,e){return t?new Bg(t,e):Ne},matchMedia:function(t){return new AA(t)},matchMediaRefresh:function(){return Cs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Sf()},addEventListener:function(t,e){var n=mc[t]||(mc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=mc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:iA,wrapYoyo:rA,distribute:gg,random:vg,snap:xg,normalize:nA,getUnit:Tn,clamp:JD,splitColor:Dg,toArray:Ci,selector:vf,mapRange:Mg,pipe:tA,unitize:eA,interpolate:sA,shuffle:_g},install:rg,effects:$u,ticker:li,updateRoot:zn.updateRoot,plugins:si,globalTimeline:Be,core:{PropTween:Kn,globals:sg,Tween:Ke,Timeline:zn,Animation:tl,getCache:Ts,_removeLinkedListItem:ou,reverting:function(){return Mn},context:function(t){return t&&Ne&&(Ne.data.push(t),t._ctx=Ne),Ne},suppressOverwrites:function(t){return md=t}}};$n("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Oc[r]=Ke[r]});li.add(zn.updateRoot);Mo=Oc.to({},{duration:0});var TA=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},bA=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=TA(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},eh=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,u;if(_n(s)&&(l={},$n(s,function(h){return l[h]=1}),s=l),e){l={};for(u in s)l[u]=e(s[u]);s=l}bA(a,s)}}}},Qn=Oc.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},eh("roundProps",yf),eh("modifiers"),eh("snap",xg))||Oc;Ke.version=zn.version=Qn.version="3.12.7";ig=1;gd()&&Zo();ve.Power0;ve.Power1;ve.Power2;ve.Power3;ve.Power4;ve.Linear;ve.Quad;ve.Cubic;ve.Quart;ve.Quint;ve.Strong;ve.Elastic;ve.Back;ve.SteppedEase;ve.Bounce;ve.Sine;ve.Expo;ve.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var mm,Vr,wo,wd,Ds,_m,Cd,wA=function(){return typeof window<"u"},wr={},_s=180/Math.PI,Co=Math.PI/180,lo=Math.atan2,gm=1e8,Rd=/([A-Z])/g,CA=/(left|right|width|margin|padding|x)/i,RA=/[\s,\(]\S/,$i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ef=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},PA=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},LA=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},FA=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},zg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},kg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},IA=function(t,e,n){return t.style[e]=n},UA=function(t,e,n){return t.style.setProperty(e,n)},NA=function(t,e,n){return t._gsap[e]=n},OA=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},BA=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},zA=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},ze="transform",Jn=ze+"Origin",kA=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in wr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=$i[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=dr(i,a)}):this.tfm[t]=o.x?o[t]:dr(i,t),t===Jn&&(this.tfm.zOrigin=o.zOrigin);else return $i.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(ze)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Jn,e,"")),t=ze}(s||e)&&this.props.push(t,e,s[t])},Hg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},HA=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Rd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Cd(),(!s||!s.isStart)&&!n[ze]&&(Hg(n),i.zOrigin&&n[Jn]&&(n[Jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Vg=function(t,e){var n={target:t,props:[],revert:HA,save:kA};return t._gsap||Qn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Gg,Df=function(t,e){var n=Vr.createElementNS?Vr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Vr.createElement(t);return n&&n.style?n:Vr.createElement(t)},Qi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Rd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,jo(e)||e,1)||""},xm="O,Moz,ms,Ms,Webkit".split(","),jo=function(t,e,n){var i=e||Ds,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(xm[o]+t in s););return o<0?null:(o===3?"ms":o>=0?xm[o]:"")+t},Af=function(){wA()&&window.document&&(mm=window,Vr=mm.document,wo=Vr.documentElement,Ds=Df("div")||{style:{}},Df("div"),ze=jo(ze),Jn=ze+"Origin",Ds.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gg=!!jo("perspective"),Cd=Qn.core.reverting,wd=1)},vm=function(t){var e=t.ownerSVGElement,n=Df("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),wo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),wo.removeChild(n),s},ym=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Wg=function(t){var e,n;try{e=t.getBBox()}catch{e=vm(t),n=1}return e&&(e.width||e.height)||n||(e=vm(t)),e&&!e.width&&!e.x&&!e.y?{x:+ym(t,["x","cx","x1"])||0,y:+ym(t,["y","cy","y1"])||0,width:0,height:0}:e},Xg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Wg(t))},Bs=function(t,e){if(e){var n=t.style,i;e in wr&&e!==Jn&&(e=ze),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Rd,"-$1").toLowerCase())):n.removeAttribute(e)}},Gr=function(t,e,n,i,s,o){var a=new Kn(t._pt,e,n,0,1,o?kg:zg);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Mm={deg:1,rad:1,turn:1},VA={grid:1,flex:1},es=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ds.style,l=CA.test(e),u=t.tagName.toLowerCase()==="svg",h=(u?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",c=i==="%",p,g,_,m;if(i===o||!s||Mm[i]||Mm[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),m=t.getCTM&&Xg(t),(c||o==="%")&&(wr[e]||~e.indexOf("adius")))return p=m?t.getBBox()[l?"width":"height"]:t[h],Xe(c?s/p*f:s/100*p);if(a[l?"width":"height"]=f+(d?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!u?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Vr||!g.appendChild)&&(g=Vr.body),_=g._gsap,_&&c&&_.width&&l&&_.time===li.time&&!_.uncache)return Xe(s/_.width*f);if(c&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=f+i,p=t[h],S?t.style[e]=S:Bs(t,e)}else(c||o==="%")&&!VA[Qi(g,"display")]&&(a.position=Qi(t,"position")),g===t&&(a.position="static"),g.appendChild(Ds),p=Ds[h],g.removeChild(Ds),a.position="absolute";return l&&c&&(_=Ts(g),_.time=li.time,_.width=g[h]),Xe(d?p*s/f:p&&s?f/p*s:0)},dr=function(t,e,n,i){var s;return wd||Af(),e in $i&&e!=="transform"&&(e=$i[e],~e.indexOf(",")&&(e=e.split(",")[0])),wr[e]&&e!=="transform"?(s=nl(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:zc(Qi(t,Jn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Bc[e]&&Bc[e](t,e,n)||Qi(t,e)||ag(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?es(t,e,s,n)+n:s},GA=function(t,e,n,i){if(!n||n==="none"){var s=jo(e,t,1),o=s&&Qi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Qi(t,"borderTopColor"))}var a=new Kn(this._pt,t.style,e,0,1,Ng),l=0,u=0,h,f,d,c,p,g,_,m,S,M,x,A;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=Qi(t,e)||i,g?t.style[e]=g:Bs(t,e)),h=[n,i],Tg(h),n=h[0],i=h[1],d=n.match(yo)||[],A=i.match(yo)||[],A.length){for(;f=yo.exec(i);)_=f[0],S=i.substring(l,f.index),p?p=(p+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(p=1),_!==(g=d[u++]||"")&&(c=parseFloat(g)||0,x=g.substr((c+"").length),_.charAt(1)==="="&&(_=bo(c,_)+x),m=parseFloat(_),M=_.substr((m+"").length),l=yo.lastIndex-M.length,M||(M=M||mi.units[e]||x,l===i.length&&(i+=M,a.e+=M)),x!==M&&(c=es(t,e,g,M)||0),a._pt={_next:a._pt,p:S||u===1?S:",",s:c,c:m-c,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?kg:zg;return eg.test(i)&&(a.e=0),this._pt=a,a},Sm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},WA=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Sm[n]||n,e[1]=Sm[i]||i,e.join(" ")},XA=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,u;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],wr[a]&&(l=1,a=a==="transformOrigin"?Jn:ze),Bs(n,a);l&&(Bs(n,ze),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",nl(n,1),o.uncache=1,Hg(i)))}},Bc={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Kn(t._pt,e,n,0,0,XA);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},el=[1,0,0,1,0,0],Yg={},qg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Em=function(t){var e=Qi(t,ze);return qg(e)?el:e.substr(7).match(tg).map(Xe)},Pd=function(t,e){var n=t._gsap||Ts(t),i=t.style,s=Em(t),o,a,l,u;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?el:s):(s===el&&!t.offsetParent&&t!==wo&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(u=1,a=t.nextElementSibling,wo.appendChild(t)),s=Em(t),l?i.display=l:Bs(t,"display"),u&&(a?o.insertBefore(t,a):o?o.appendChild(t):wo.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Tf=function(t,e,n,i,s,o){var a=t._gsap,l=s||Pd(t,!0),u=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,c=l[0],p=l[1],g=l[2],_=l[3],m=l[4],S=l[5],M=e.split(" "),x=parseFloat(M[0])||0,A=parseFloat(M[1])||0,b,D,w,y;n?l!==el&&(D=c*_-p*g)&&(w=x*(_/D)+A*(-g/D)+(g*S-_*m)/D,y=x*(-p/D)+A*(c/D)-(c*S-p*m)/D,x=w,A=y):(b=Wg(t),x=b.x+(~M[0].indexOf("%")?x/100*b.width:x),A=b.y+(~(M[1]||M[0]).indexOf("%")?A/100*b.height:A)),i||i!==!1&&a.smooth?(m=x-u,S=A-h,a.xOffset=f+(m*c+S*g)-m,a.yOffset=d+(m*p+S*_)-S):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Jn]="0px 0px",o&&(Gr(o,a,"xOrigin",u,x),Gr(o,a,"yOrigin",h,A),Gr(o,a,"xOffset",f,a.xOffset),Gr(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+A)},nl=function(t,e){var n=t._gsap||new Rg(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),u=Qi(t,Jn)||"0",h,f,d,c,p,g,_,m,S,M,x,A,b,D,w,y,v,R,N,P,z,H,I,V,W,et,L,it,Tt,zt,j,ut;return h=f=d=g=_=m=S=M=x=0,c=p=1,n.svg=!!(t.getCTM&&Xg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ze]!=="none"?l[ze]:"")),i.scale=i.rotate=i.translate="none"),D=Pd(t,n.svg),n.svg&&(n.uncache?(W=t.getBBox(),u=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",V=""):V=!e&&t.getAttribute("data-svg-origin"),Tf(t,V||u,!!V||n.originIsAbsolute,n.smooth!==!1,D)),A=n.xOrigin||0,b=n.yOrigin||0,D!==el&&(R=D[0],N=D[1],P=D[2],z=D[3],h=H=D[4],f=I=D[5],D.length===6?(c=Math.sqrt(R*R+N*N),p=Math.sqrt(z*z+P*P),g=R||N?lo(N,R)*_s:0,S=P||z?lo(P,z)*_s+g:0,S&&(p*=Math.abs(Math.cos(S*Co))),n.svg&&(h-=A-(A*R+b*P),f-=b-(A*N+b*z))):(ut=D[6],zt=D[7],L=D[8],it=D[9],Tt=D[10],j=D[11],h=D[12],f=D[13],d=D[14],w=lo(ut,Tt),_=w*_s,w&&(y=Math.cos(-w),v=Math.sin(-w),V=H*y+L*v,W=I*y+it*v,et=ut*y+Tt*v,L=H*-v+L*y,it=I*-v+it*y,Tt=ut*-v+Tt*y,j=zt*-v+j*y,H=V,I=W,ut=et),w=lo(-P,Tt),m=w*_s,w&&(y=Math.cos(-w),v=Math.sin(-w),V=R*y-L*v,W=N*y-it*v,et=P*y-Tt*v,j=z*v+j*y,R=V,N=W,P=et),w=lo(N,R),g=w*_s,w&&(y=Math.cos(w),v=Math.sin(w),V=R*y+N*v,W=H*y+I*v,N=N*y-R*v,I=I*y-H*v,R=V,H=W),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,m=180-m),c=Xe(Math.sqrt(R*R+N*N+P*P)),p=Xe(Math.sqrt(I*I+ut*ut)),w=lo(H,I),S=Math.abs(w)>2e-4?w*_s:0,x=j?1/(j<0?-j:j):0),n.svg&&(V=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!qg(Qi(t,ze)),V&&t.setAttribute("transform",V))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(c*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Xe(c),n.scaleY=Xe(p),n.rotation=Xe(g)+a,n.rotationX=Xe(_)+a,n.rotationY=Xe(m)+a,n.skewX=S+a,n.skewY=M+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(u.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Jn]=zc(u)),n.xOffset=n.yOffset=0,n.force3D=mi.force3D,n.renderTransform=n.svg?qA:Gg?Zg:YA,n.uncache=0,n},zc=function(t){return(t=t.split(" "))[0]+" "+t[1]},nh=function(t,e,n){var i=Tn(e);return Xe(parseFloat(e)+parseFloat(es(t,"x",n+"px",i)))+i},YA=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Zg(t,e)},hs="0deg",ha="0px",fs=") ",Zg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,u=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,c=n.skewY,p=n.scaleX,g=n.scaleY,_=n.transformPerspective,m=n.force3D,S=n.target,M=n.zOrigin,x="",A=m==="auto"&&t&&t!==1||m===!0;if(M&&(f!==hs||h!==hs)){var b=parseFloat(h)*Co,D=Math.sin(b),w=Math.cos(b),y;b=parseFloat(f)*Co,y=Math.cos(b),o=nh(S,o,D*y*-M),a=nh(S,a,-Math.sin(b)*-M),l=nh(S,l,w*y*-M+M)}_!==ha&&(x+="perspective("+_+fs),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(A||o!==ha||a!==ha||l!==ha)&&(x+=l!==ha||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+fs),u!==hs&&(x+="rotate("+u+fs),h!==hs&&(x+="rotateY("+h+fs),f!==hs&&(x+="rotateX("+f+fs),(d!==hs||c!==hs)&&(x+="skew("+d+", "+c+fs),(p!==1||g!==1)&&(x+="scale("+p+", "+g+fs),S.style[ze]=x||"translate(0, 0)"},qA=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,u=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,c=n.target,p=n.xOrigin,g=n.yOrigin,_=n.xOffset,m=n.yOffset,S=n.forceCSS,M=parseFloat(o),x=parseFloat(a),A,b,D,w,y;l=parseFloat(l),u=parseFloat(u),h=parseFloat(h),h&&(h=parseFloat(h),u+=h,l+=h),l||u?(l*=Co,u*=Co,A=Math.cos(l)*f,b=Math.sin(l)*f,D=Math.sin(l-u)*-d,w=Math.cos(l-u)*d,u&&(h*=Co,y=Math.tan(u-h),y=Math.sqrt(1+y*y),D*=y,w*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),A*=y,b*=y)),A=Xe(A),b=Xe(b),D=Xe(D),w=Xe(w)):(A=f,w=d,b=D=0),(M&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(M=es(c,"x",o,"px"),x=es(c,"y",a,"px")),(p||g||_||m)&&(M=Xe(M+p-(p*A+g*D)+_),x=Xe(x+g-(p*b+g*w)+m)),(i||s)&&(y=c.getBBox(),M=Xe(M+i/100*y.width),x=Xe(x+s/100*y.height)),y="matrix("+A+","+b+","+D+","+w+","+M+","+x+")",c.setAttribute("transform",y),S&&(c.style[ze]=y)},ZA=function(t,e,n,i,s){var o=360,a=_n(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?_s:1),u=l-i,h=i+u+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-360)),f==="cw"&&u<0?u=(u+o*gm)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*gm)%o-~~(u/o)*o)),t._pt=d=new Kn(t._pt,e,n,i,u,PA),d.e=h,d.u="deg",t._props.push(n),d},Dm=function(t,e){for(var n in e)t[n]=e[n];return t},jA=function(t,e,n){var i=Dm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,u,h,f,d,c,p;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),o[ze]=e,a=nl(n,1),Bs(n,ze),n.setAttribute("transform",u)):(u=getComputedStyle(n)[ze],o[ze]=e,a=nl(n,1),o[ze]=u);for(l in wr)u=i[l],h=a[l],u!==h&&s.indexOf(l)<0&&(c=Tn(u),p=Tn(h),f=c!==p?es(n,l,u,p):parseFloat(u),d=parseFloat(h),t._pt=new Kn(t._pt,a,l,f,d-f,Ef),t._pt.u=p||0,t._props.push(l));Dm(a,i)};$n("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Bc[t>1?"border"+r:r]=function(a,l,u,h,f){var d,c;if(arguments.length<4)return d=o.map(function(p){return dr(a,p,u)}),c=d.join(" "),c.split(d[0]).length===5?d[0]:c;d=(h+"").split(" "),c={},o.forEach(function(p,g){return c[p]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,c,f)}});var jg={name:"css",register:Af,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,u,h,f,d,c,p,g,_,m,S,M,x,A,b,D,w;wd||Af(),this.styles=this.styles||Vg(t),w=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(si[g]&&Pg(g,e,n,i,t,s)))){if(c=typeof h,p=Bc[g],c==="function"&&(h=h.call(n,i,t,s),c=typeof h),c==="string"&&~h.indexOf("random(")&&(h=Ja(h)),p)p(this,t,g,h,n)&&(D=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",$r.lastIndex=0,$r.test(u)||(_=Tn(u),m=Tn(h)),m?_!==m&&(u=es(t,g,u,m)+m):_&&(h+=_),this.add(a,"setProperty",u,h,i,s,0,0,g),o.push(g),w.push(g,0,a[g]);else if(c!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],_n(u)&&~u.indexOf("random(")&&(u=Ja(u)),Tn(u+"")||u==="auto"||(u+=mi.units[g]||Tn(dr(t,g))||""),(u+"").charAt(1)==="="&&(u=dr(t,g))):u=dr(t,g),d=parseFloat(u),S=c==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),f=parseFloat(h),g in $i&&(g==="autoAlpha"&&(d===1&&dr(t,"visibility")==="hidden"&&f&&(d=0),w.push("visibility",0,a.visibility),Gr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=$i[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in wr,M){if(this.styles.save(g),x||(A=t._gsap,A.renderTransform&&!e.parseTransform||nl(t,e.parseTransform),b=e.smoothOrigin!==!1&&A.smooth,x=this._pt=new Kn(this._pt,a,ze,0,1,A.renderTransform,A,0,-1),x.dep=1),g==="scale")this._pt=new Kn(this._pt,A,"scaleY",A.scaleY,(S?bo(A.scaleY,S+f):f)-A.scaleY||0,Ef),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){w.push(Jn,0,a[Jn]),h=WA(h),A.svg?Tf(t,h,0,b,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==A.zOrigin&&Gr(this,A,"zOrigin",A.zOrigin,m),Gr(this,a,g,zc(u),zc(h)));continue}else if(g==="svgOrigin"){Tf(t,h,1,b,0,this);continue}else if(g in Yg){ZA(this,A,g,d,S?bo(d,S+h):h);continue}else if(g==="smoothOrigin"){Gr(this,A,"smooth",A.smooth,h);continue}else if(g==="force3D"){A[g]=h;continue}else if(g==="transform"){jA(this,h,t);continue}}else g in a||(g=jo(g)||g);if(M||(f||f===0)&&(d||d===0)&&!RA.test(h)&&g in a)_=(u+"").substr((d+"").length),f||(f=0),m=Tn(h)||(g in mi.units?mi.units[g]:_),_!==m&&(d=es(t,g,u,m)),this._pt=new Kn(this._pt,M?A:a,g,d,(S?bo(d,S+f):f)-d,!M&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?FA:Ef),this._pt.u=m||0,_!==m&&m!=="%"&&(this._pt.b=u,this._pt.r=LA);else if(g in a)GA.call(this,t,g,u,S?S+h:h);else if(g in t)this.add(t,g,u||t[g],S?S+h:h,i,s);else if(g!=="parseTransform"){vd(g,h);continue}M||(g in a?w.push(g,0,a[g]):typeof t[g]=="function"?w.push(g,2,t[g]()):w.push(g,1,u||t[g])),o.push(g)}}D&&Og(this)},render:function(t,e){if(e.tween._time||!Cd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:dr,aliases:$i,getSetter:function(t,e,n){var i=$i[e];return i&&i.indexOf(",")<0&&(e=i),e in wr&&e!==Jn&&(t._gsap.x||dr(t,"x"))?n&&_m===n?e==="scale"?OA:NA:(_m=n||{})&&(e==="scale"?BA:zA):t.style&&!_d(t.style[e])?IA:~e.indexOf("-")?UA:Td(t,e)},core:{_removeProperty:Bs,_getMatrix:Pd}};Qn.utils.checkPrefix=jo;Qn.core.getStyleSaver=Vg;(function(r,t,e,n){var i=$n(r+","+t+","+e,function(s){wr[s]=1});$n(t,function(s){mi.units[s]="deg",Yg[s]=1}),$i[i[13]]=r+","+t,$n(n,function(s){var o=s.split(":");$i[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");$n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){mi.units[r]="px"});Qn.registerPlugin(jg);var Ve=Qn.registerPlugin(jg)||Qn;Ve.core.Tween;/*!
 * matrix 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xr,Rs,Ld,cu,ya,_c,kc,Ua,Vi="transform",bf=Vi+"Origin",$g,Kg=function(t){var e=t.ownerDocument||t;for(!(Vi in t.style)&&("msTransform"in t.style)&&(Vi="msTransform",bf=Vi+"Origin");e.parentNode&&(e=e.parentNode););if(Rs=window,kc=new zs,e){xr=e,Ld=e.documentElement,cu=e.body,Ua=xr.createElementNS("http://www.w3.org/2000/svg","g"),Ua.style.transform="none";var n=e.createElement("div"),i=e.createElement("div"),s=e&&(e.body||e.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(i),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),$g=i.offsetParent!==n,s.removeChild(n))}return e},$A=function(t){for(var e,n;t&&t!==cu;)n=t._gsap,n&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e},Jg=[],Qg=[],KA=function(){return Rs.pageYOffset||xr.scrollTop||Ld.scrollTop||cu.scrollTop||0},JA=function(){return Rs.pageXOffset||xr.scrollLeft||Ld.scrollLeft||cu.scrollLeft||0},Fd=function(t){return t.ownerSVGElement||((t.tagName+"").toLowerCase()==="svg"?t:null)},QA=function r(t){if(Rs.getComputedStyle(t).position==="fixed")return!0;if(t=t.parentNode,t&&t.nodeType===1)return r(t)},ih=function r(t,e){if(t.parentNode&&(xr||Kg(t))){var n=Fd(t),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?e?"rect":"g":"div",o=e!==2?0:100,a=e===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",u=xr.createElementNS?xr.createElementNS(i.replace(/^https/,"http"),s):xr.createElement(s);return e&&(n?(_c||(_c=r(t)),u.setAttribute("width",.01),u.setAttribute("height",.01),u.setAttribute("transform","translate("+o+","+a+")"),_c.appendChild(u)):(ya||(ya=r(t),ya.style.cssText=l),u.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",ya.appendChild(u))),u}throw"Need document and parent."},tT=function(t){for(var e=new zs,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e},eT=function(t){var e=t.getCTM(),n;return e||(n=t.style[Vi],t.style[Vi]="none",t.appendChild(Ua),e=Ua.getCTM(),t.removeChild(Ua),n?t.style[Vi]=n:t.style.removeProperty(Vi.replace(/([A-Z])/g,"-$1").toLowerCase())),e||kc.clone()},nT=function(t,e){var n=Fd(t),i=t===n,s=n?Jg:Qg,o=t.parentNode,a,l,u,h,f,d;if(t===Rs)return t;if(s.length||s.push(ih(t,1),ih(t,2),ih(t,3)),a=n?_c:ya,n)i?(u=eT(t),h=-u.e/u.a,f=-u.f/u.d,l=kc):t.getBBox?(u=t.getBBox(),l=t.transform?t.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?tT(l):l.getItem(0).matrix:kc,h=l.a*u.x+l.c*u.y,f=l.b*u.x+l.d*u.y):(l=new zs,h=f=0),(i?n:o).appendChild(a),a.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+h)+","+(l.f+f)+")");else{if(h=f=0,$g)for(l=t.offsetParent,u=t;u&&(u=u.parentNode)&&u!==l&&u.parentNode;)(Rs.getComputedStyle(u)[Vi]+"").length>4&&(h=u.offsetLeft,f=u.offsetTop,u=0);if(d=Rs.getComputedStyle(t),d.position!=="absolute"&&d.position!=="fixed")for(l=t.offsetParent;o&&o!==l;)h+=o.scrollLeft||0,f+=o.scrollTop||0,o=o.parentNode;u=a.style,u.top=t.offsetTop-f+"px",u.left=t.offsetLeft-h+"px",u[Vi]=d[Vi],u[bf]=d[bf],u.position=d.position==="fixed"?"fixed":"absolute",t.parentNode.appendChild(a)}return a},rh=function(t,e,n,i,s,o,a){return t.a=e,t.b=n,t.c=i,t.d=s,t.e=o,t.f=a,t},zs=function(){function r(e,n,i,s,o,a){e===void 0&&(e=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),rh(this,e,n,i,s,o,a)}var t=r.prototype;return t.inverse=function(){var n=this.a,i=this.b,s=this.c,o=this.d,a=this.e,l=this.f,u=n*o-i*s||1e-10;return rh(this,o/u,-i/u,-s/u,n/u,(s*l-o*a)/u,-(n*l-i*a)/u)},t.multiply=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,u=this.f,h=n.a,f=n.c,d=n.b,c=n.d,p=n.e,g=n.f;return rh(this,h*i+d*o,h*s+d*a,f*i+c*o,f*s+c*a,l+p*i+g*o,u+p*s+g*a)},t.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},t.equals=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,u=this.f;return i===n.a&&s===n.b&&o===n.c&&a===n.d&&l===n.e&&u===n.f},t.apply=function(n,i){i===void 0&&(i={});var s=n.x,o=n.y,a=this.a,l=this.b,u=this.c,h=this.d,f=this.e,d=this.f;return i.x=s*a+o*u+f||0,i.y=s*l+o*h+d||0,i},r}();function Ms(r,t,e,n){if(!r||!r.parentNode||(xr||Kg(r)).documentElement===r)return new zs;var i=$A(r),s=Fd(r),o=s?Jg:Qg,a=nT(r),l=o[0].getBoundingClientRect(),u=o[1].getBoundingClientRect(),h=o[2].getBoundingClientRect(),f=a.parentNode,d=QA(r),c=new zs((u.left-l.left)/100,(u.top-l.top)/100,(h.left-l.left)/100,(h.top-l.top)/100,l.left+(d?0:JA()),l.top+(d?0:KA()));if(f.removeChild(a),i)for(l=i.length;l--;)u=i[l],u.scaleX=u.scaleY=0,u.renderTransform(1,u);return t?c.inverse():c}function Am(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function iT(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var xe,Pe,ci,Gi,vr,sh,pr,wf,Ma,Wr,t0,Cf,il,Id,Sa,Ni,Ea,gc,e0,Rf,Hc=0,n0=function(){return typeof window<"u"},i0=function(){return xe||n0()&&(xe=window.gsap)&&xe.registerPlugin&&xe},zr=function(t){return typeof t=="function"},Na=function(t){return typeof t=="object"},Bi=function(t){return typeof t>"u"},xc=function(){return!1},Oa="transform",Pf="transformOrigin",Nr=function(t){return Math.round(t*1e4)/1e4},fa=Array.isArray,Vl=function(t,e){var n=ci.createElementNS?ci.createElementNS("http://www.w3.org/1999/xhtml".replace(/^https/,"http"),t):ci.createElement(t);return n.style?n:ci.createElement(t)},Tm=180/Math.PI,co=1e20,rT=new zs,Or=Date.now||function(){return new Date().getTime()},Ps=[],Ro={},sT=0,oT=/^(?:a|input|textarea|button|select)$/i,bm=0,uo={},ur={},r0=function(t,e){var n={},i;for(i in t)n[i]=e?t[i]*e:t[i];return n},aT=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},wm=function r(t,e){for(var n=t.length,i;n--;)e?t[n].style.touchAction=e:t[n].style.removeProperty("touch-action"),i=t[n].children,i&&i.length&&r(i,e)},s0=function(){return Ps.forEach(function(t){return t()})},lT=function(t){Ps.push(t),Ps.length===1&&xe.ticker.add(s0)},Cm=function(){return!Ps.length&&xe.ticker.remove(s0)},Rm=function(t){for(var e=Ps.length;e--;)Ps[e]===t&&Ps.splice(e,1);xe.to(Cm,{overwrite:!0,delay:15,duration:0,onComplete:Cm,data:"_draggable"})},cT=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},on=function(t,e,n,i){if(t.addEventListener){var s=il[e];i=i||(t0?{passive:!1}:null),t.addEventListener(s||e,n,i),s&&e!==s&&t.addEventListener(e,n,i)}},je=function(t,e,n,i){if(t.removeEventListener){var s=il[e];t.removeEventListener(s||e,n,i),s&&e!==s&&t.removeEventListener(e,n,i)}},Ei=function(t){t.preventDefault&&t.preventDefault(),t.preventManipulation&&t.preventManipulation()},uT=function(t,e){for(var n=t.length;n--;)if(t[n].identifier===e)return!0},hT=function r(t){Id=t.touches&&Hc<t.touches.length,je(t.target,"touchend",r)},Pm=function(t){Id=t.touches&&Hc<t.touches.length,on(t.target,"touchend",hT)},Po=function(t){return Pe.pageYOffset||t.scrollTop||t.documentElement.scrollTop||t.body.scrollTop||0},Lo=function(t){return Pe.pageXOffset||t.scrollLeft||t.documentElement.scrollLeft||t.body.scrollLeft||0},Lm=function r(t,e){on(t,"scroll",e),$o(t.parentNode)||r(t.parentNode,e)},Fm=function r(t,e){je(t,"scroll",e),$o(t.parentNode)||r(t.parentNode,e)},$o=function(t){return!t||t===Gi||t.nodeType===9||t===ci.body||t===Pe||!t.nodeType||!t.parentNode},Im=function(t,e){var n=e==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return Math.max(0,$o(t)?Math.max(Gi[i],vr[i])-(Pe["inner"+n]||Gi[s]||vr[s]):t[i]-t[s])},oh=function r(t,e){var n=Im(t,"x"),i=Im(t,"y");$o(t)?t=ur:r(t.parentNode,e),t._gsMaxScrollX=n,t._gsMaxScrollY=i,e||(t._gsScrollX=t.scrollLeft||0,t._gsScrollY=t.scrollTop||0)},ah=function(t,e,n){var i=t.style;i&&(Bi(i[e])&&(e=Ma(e,t)||e),n==null?i.removeProperty&&i.removeProperty(e.replace(/([A-Z])/g,"-$1").toLowerCase()):i[e]=n)},rl=function(t){return Pe.getComputedStyle(t instanceof Element?t:t.host||(t.parentNode||{}).host||t)},ds={},ho=function(t){if(t===Pe)return ds.left=ds.top=0,ds.width=ds.right=Gi.clientWidth||t.innerWidth||vr.clientWidth||0,ds.height=ds.bottom=(t.innerHeight||0)-20<Gi.clientHeight?Gi.clientHeight:t.innerHeight||vr.clientHeight||0,ds;var e=t.ownerDocument||ci,n=Bi(t.pageX)?!t.nodeType&&!Bi(t.left)&&!Bi(t.top)?t:Wr(t)[0].getBoundingClientRect():{left:t.pageX-Lo(e),top:t.pageY-Po(e),right:t.pageX-Lo(e)+1,bottom:t.pageY-Po(e)+1};return Bi(n.right)&&!Bi(n.width)?(n.right=n.left+n.width,n.bottom=n.top+n.height):Bi(n.width)&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n},We=function(t,e,n){var i=t.vars,s=i[n],o=t._listeners[e],a;return zr(s)&&(a=s.apply(i.callbackScope||t,i[n+"Params"]||[t.pointerEvent])),o&&t.dispatchEvent(e)===!1&&(a=!1),a},Um=function(t,e){var n=Wr(t)[0],i,s,o;return!n.nodeType&&n!==Pe?Bi(t.left)?(s=t.min||t.minX||t.minRotation||0,i=t.min||t.minY||0,{left:s,top:i,width:(t.max||t.maxX||t.maxRotation||0)-s,height:(t.max||t.maxY||0)-i}):(o={x:0,y:0},{left:t.left-o.x,top:t.top-o.y,width:t.width,height:t.height}):fT(n,e)},Di={},fT=function(t,e){e=Wr(e)[0];var n=t.getBBox&&t.ownerSVGElement,i=t.ownerDocument||ci,s,o,a,l,u,h,f,d,c,p,g,_,m;if(t===Pe)a=Po(i),s=Lo(i),o=s+(i.documentElement.clientWidth||t.innerWidth||i.body.clientWidth||0),l=a+((t.innerHeight||0)-20<i.documentElement.clientHeight?i.documentElement.clientHeight:t.innerHeight||i.body.clientHeight||0);else{if(e===Pe||Bi(e))return t.getBoundingClientRect();s=a=0,n?(p=t.getBBox(),g=p.width,_=p.height):(t.viewBox&&(p=t.viewBox.baseVal)&&(s=p.x||0,a=p.y||0,g=p.width,_=p.height),g||(m=rl(t),p=m.boxSizing==="border-box",g=(parseFloat(m.width)||t.clientWidth||0)+(p?0:parseFloat(m.borderLeftWidth)+parseFloat(m.borderRightWidth)),_=(parseFloat(m.height)||t.clientHeight||0)+(p?0:parseFloat(m.borderTopWidth)+parseFloat(m.borderBottomWidth)))),o=g,l=_}return t===e?{left:s,top:a,width:o-s,height:l-a}:(u=Ms(e,!0).multiply(Ms(t)),h=u.apply({x:s,y:a}),f=u.apply({x:o,y:a}),d=u.apply({x:o,y:l}),c=u.apply({x:s,y:l}),s=Math.min(h.x,f.x,d.x,c.x),a=Math.min(h.y,f.y,d.y,c.y),{left:s,top:a,width:Math.max(h.x,f.x,d.x,c.x)-s,height:Math.max(h.y,f.y,d.y,c.y)-a})},lh=function(t,e,n,i,s,o){var a={},l,u,h;if(e)if(s!==1&&e instanceof Array){if(a.end=l=[],h=e.length,Na(e[0]))for(u=0;u<h;u++)l[u]=r0(e[u],s);else for(u=0;u<h;u++)l[u]=e[u]*s;n+=1.1,i-=1.1}else zr(e)?a.end=function(f){var d=e.call(t,f),c,p;if(s!==1)if(Na(d)){c={};for(p in d)c[p]=d[p]*s;d=c}else d*=s;return d}:a.end=e;return(n||n===0)&&(a.max=n),(i||i===0)&&(a.min=i),o&&(a.velocity=0),a},dT=function r(t){var e;return!t||!t.getAttribute||t===vr?!1:(e=t.getAttribute("data-clickable"))==="true"||e!=="false"&&(oT.test(t.nodeName+"")||t.getAttribute("contentEditable")==="true")?!0:r(t.parentNode)},Gl=function(t,e){for(var n=t.length,i;n--;)i=t[n],i.ondragstart=i.onselectstart=e?null:xc,xe.set(i,{lazy:!0,userSelect:e?"text":"none"})},pT=function r(t){if(rl(t).position==="fixed")return!0;if(t=t.parentNode,t&&t.nodeType===1)return r(t)},o0,Lf,mT=function(t,e){t=xe.utils.toArray(t)[0],e=e||{};var n=document.createElement("div"),i=n.style,s=t.firstChild,o=0,a=0,l=t.scrollTop,u=t.scrollLeft,h=t.scrollWidth,f=t.scrollHeight,d=0,c=0,p=0,g,_,m,S,M,x;o0&&e.force3D!==!1?(M="translate3d(",x="px,0px)"):Oa&&(M="translate(",x="px)"),this.scrollTop=function(A,b){if(!arguments.length)return-this.top();this.top(-A,b)},this.scrollLeft=function(A,b){if(!arguments.length)return-this.left();this.left(-A,b)},this.left=function(A,b){if(!arguments.length)return-(t.scrollLeft+a);var D=t.scrollLeft-u,w=a;if((D>2||D<-2)&&!b){u=t.scrollLeft,xe.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-u),e.onKill&&e.onKill();return}A=-A,A<0?(a=A-.5|0,A=0):A>c?(a=A-c|0,A=c):a=0,(a||w)&&(this._skip||(i[Oa]=M+-a+"px,"+-o+x),a+d>=0&&(i.paddingRight=a+d+"px")),t.scrollLeft=A|0,u=t.scrollLeft},this.top=function(A,b){if(!arguments.length)return-(t.scrollTop+o);var D=t.scrollTop-l,w=o;if((D>2||D<-2)&&!b){l=t.scrollTop,xe.killTweensOf(this,{top:1,scrollTop:1}),this.top(-l),e.onKill&&e.onKill();return}A=-A,A<0?(o=A-.5|0,A=0):A>p?(o=A-p|0,A=p):o=0,(o||w)&&(this._skip||(i[Oa]=M+-a+"px,"+-o+x)),t.scrollTop=A|0,l=t.scrollTop},this.maxScrollTop=function(){return p},this.maxScrollLeft=function(){return c},this.disable=function(){for(s=n.firstChild;s;)S=s.nextSibling,t.appendChild(s),s=S;t===n.parentNode&&t.removeChild(n)},this.enable=function(){if(s=t.firstChild,s!==n){for(;s;)S=s.nextSibling,n.appendChild(s),s=S;t.appendChild(n),this.calibrate()}},this.calibrate=function(A){var b=t.clientWidth===g,D,w,y;l=t.scrollTop,u=t.scrollLeft,!(b&&t.clientHeight===_&&n.offsetHeight===m&&h===t.scrollWidth&&f===t.scrollHeight&&!A)&&((o||a)&&(w=this.left(),y=this.top(),this.left(-t.scrollLeft),this.top(-t.scrollTop)),D=rl(t),(!b||A)&&(i.display="block",i.width="auto",i.paddingRight="0px",d=Math.max(0,t.scrollWidth-t.clientWidth),d&&(d+=parseFloat(D.paddingLeft)+(Lf?parseFloat(D.paddingRight):0))),i.display="inline-block",i.position="relative",i.overflow="visible",i.verticalAlign="top",i.boxSizing="content-box",i.width="100%",i.paddingRight=d+"px",Lf&&(i.paddingBottom=D.paddingBottom),g=t.clientWidth,_=t.clientHeight,h=t.scrollWidth,f=t.scrollHeight,c=t.scrollWidth-g,p=t.scrollHeight-_,m=n.offsetHeight,i.display="block",(w||y)&&(this.left(w),this.top(y)))},this.content=n,this.element=t,this._skip=!1,this.enable()},ch=function(t){if(n0()&&document.body){var e=window&&window.navigator;Pe=window,ci=document,Gi=ci.documentElement,vr=ci.body,sh=Vl("div"),gc=!!window.PointerEvent,pr=Vl("div"),pr.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",Ea=pr.style.cursor==="grab"?"grab":"move",Sa=e&&e.userAgent.toLowerCase().indexOf("android")!==-1,Cf="ontouchstart"in Gi&&"orientation"in Pe||e&&(e.MaxTouchPoints>0||e.msMaxTouchPoints>0),Lf=function(){var n=Vl("div"),i=Vl("div"),s=i.style,o=vr,a;return s.display="inline-block",s.position="relative",n.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",n.appendChild(i),o.appendChild(n),a=i.offsetHeight+18>n.scrollHeight,o.removeChild(n),a}(),il=function(n){for(var i=n.split(","),s=("onpointerdown"in sh?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in sh?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":n).split(","),o={},a=4;--a>-1;)o[i[a]]=s[a],o[s[a]]=i[a];try{Gi.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){t0=1}}))}catch{}return o}("touchstart,touchmove,touchend,touchcancel"),on(ci,"touchcancel",xc),on(Pe,"touchmove",xc),vr&&vr.addEventListener("touchstart",xc),on(ci,"contextmenu",function(){for(var n in Ro)Ro[n].isPressed&&Ro[n].endDrag()}),xe=wf=i0()}xe?(Ni=xe.plugins.inertia,e0=xe.core.context||function(){},Ma=xe.utils.checkPrefix,Oa=Ma(Oa),Pf=Ma(Pf),Wr=xe.utils.toArray,Rf=xe.core.getStyleSaver,o0=!!Ma("perspective")):t&&console.warn("Please gsap.registerPlugin(Draggable)")},_T=function(){function r(e){this._listeners={},this.target=e||this}var t=r.prototype;return t.addEventListener=function(n,i){var s=this._listeners[n]||(this._listeners[n]=[]);~s.indexOf(i)||s.push(i)},t.removeEventListener=function(n,i){var s=this._listeners[n],o=s&&s.indexOf(i);o>=0&&s.splice(o,1)},t.dispatchEvent=function(n){var i=this,s;return(this._listeners[n]||[]).forEach(function(o){return o.call(i,{type:n,target:i.target})===!1&&(s=!1)}),s},r}(),ea=function(r){iT(t,r);function t(e,n){var i;i=r.call(this)||this,wf||ch(1),e=Wr(e)[0],i.styles=Rf&&Rf(e,"transform,left,top"),Ni||(Ni=xe.plugins.inertia),i.vars=n=r0(n||{}),i.target=e,i.x=i.y=i.rotation=0,i.dragResistance=parseFloat(n.dragResistance)||0,i.edgeResistance=isNaN(n.edgeResistance)?1:parseFloat(n.edgeResistance)||0,i.lockAxis=n.lockAxis,i.autoScroll=n.autoScroll||0,i.lockedAxis=null,i.allowEventDefault=!!n.allowEventDefault,xe.getProperty(e,"x");var s=(n.type||"x,y").toLowerCase(),o=~s.indexOf("x")||~s.indexOf("y"),a=s.indexOf("rotation")!==-1,l=a?"rotation":o?"x":"left",u=o?"y":"top",h=!!(~s.indexOf("x")||~s.indexOf("left")||s==="scroll"),f=!!(~s.indexOf("y")||~s.indexOf("top")||s==="scroll"),d=n.minimumMovement||2,c=Am(i),p=Wr(n.trigger||n.handle||e),g={},_=0,m=!1,S=n.autoScrollMarginTop||40,M=n.autoScrollMarginRight||40,x=n.autoScrollMarginBottom||40,A=n.autoScrollMarginLeft||40,b=n.clickableTest||dT,D=0,w=e._gsap||xe.core.getCache(e),y=pT(e),v=function(O,rt){return parseFloat(w.get(e,O,rt))},R=e.ownerDocument||ci,N,P,z,H,I,V,W,et,L,it,Tt,zt,j,ut,pt,ft,Mt,Yt,Bt,ee,ne,Pt,F,Ht,Zt,Y,Dt,ce,It,C,E,q,ot,st=function(O){return Ei(O),O.stopImmediatePropagation&&O.stopImmediatePropagation(),!1},tt=function ct(O){if(c.autoScroll&&c.isDragging&&(m||Mt)){var rt=e,k=c.autoScroll*15,$,lt,Q,vt,at,bt,Wt,Ut;for(m=!1,ur.scrollTop=Pe.pageYOffset!=null?Pe.pageYOffset:R.documentElement.scrollTop!=null?R.documentElement.scrollTop:R.body.scrollTop,ur.scrollLeft=Pe.pageXOffset!=null?Pe.pageXOffset:R.documentElement.scrollLeft!=null?R.documentElement.scrollLeft:R.body.scrollLeft,vt=c.pointerX-ur.scrollLeft,at=c.pointerY-ur.scrollTop;rt&&!lt;)lt=$o(rt.parentNode),$=lt?ur:rt.parentNode,Q=lt?{bottom:Math.max(Gi.clientHeight,Pe.innerHeight||0),right:Math.max(Gi.clientWidth,Pe.innerWidth||0),left:0,top:0}:$.getBoundingClientRect(),bt=Wt=0,f&&(Ut=$._gsMaxScrollY-$.scrollTop,Ut<0?Wt=Ut:at>Q.bottom-x&&Ut?(m=!0,Wt=Math.min(Ut,k*(1-Math.max(0,Q.bottom-at)/x)|0)):at<Q.top+S&&$.scrollTop&&(m=!0,Wt=-Math.min($.scrollTop,k*(1-Math.max(0,at-Q.top)/S)|0)),Wt&&($.scrollTop+=Wt)),h&&(Ut=$._gsMaxScrollX-$.scrollLeft,Ut<0?bt=Ut:vt>Q.right-M&&Ut?(m=!0,bt=Math.min(Ut,k*(1-Math.max(0,Q.right-vt)/M)|0)):vt<Q.left+A&&$.scrollLeft&&(m=!0,bt=-Math.min($.scrollLeft,k*(1-Math.max(0,vt-Q.left)/A)|0)),bt&&($.scrollLeft+=bt)),lt&&(bt||Wt)&&(Pe.scrollTo($.scrollLeft,$.scrollTop),xt(c.pointerX+bt,c.pointerY+Wt)),rt=$}if(Mt){var Jt=c.x,ge=c.y;a?(c.deltaX=Jt-parseFloat(w.rotation),c.rotation=Jt,w.rotation=Jt+"deg",w.renderTransform(1,w)):P?(f&&(c.deltaY=ge-P.top(),P.top(ge)),h&&(c.deltaX=Jt-P.left(),P.left(Jt))):o?(f&&(c.deltaY=ge-parseFloat(w.y),w.y=ge+"px"),h&&(c.deltaX=Jt-parseFloat(w.x),w.x=Jt+"px"),w.renderTransform(1,w)):(f&&(c.deltaY=ge-parseFloat(e.style.top||0),e.style.top=ge+"px"),h&&(c.deltaX=Jt-parseFloat(e.style.left||0),e.style.left=Jt+"px")),et&&!O&&!ce&&(ce=!0,We(c,"drag","onDrag")===!1&&(h&&(c.x-=c.deltaX),f&&(c.y-=c.deltaY),ct(!0)),ce=!1)}Mt=!1},_t=function(O,rt){var k=c.x,$=c.y,lt,Q;e._gsap||(w=xe.core.getCache(e)),w.uncache&&xe.getProperty(e,"x"),o?(c.x=parseFloat(w.x),c.y=parseFloat(w.y)):a?c.x=c.rotation=parseFloat(w.rotation):P?(c.y=P.top(),c.x=P.left()):(c.y=parseFloat(e.style.top||(Q=rl(e))&&Q.top)||0,c.x=parseFloat(e.style.left||(Q||{}).left)||0),(Bt||ee||ne)&&!rt&&(c.isDragging||c.isThrowing)&&(ne&&(uo.x=c.x,uo.y=c.y,lt=ne(uo),lt.x!==c.x&&(c.x=lt.x,Mt=!0),lt.y!==c.y&&(c.y=lt.y,Mt=!0)),Bt&&(lt=Bt(c.x),lt!==c.x&&(c.x=lt,a&&(c.rotation=lt),Mt=!0)),ee&&(lt=ee(c.y),lt!==c.y&&(c.y=lt),Mt=!0)),Mt&&tt(!0),O||(c.deltaX=c.x-k,c.deltaY=c.y-$,We(c,"throwupdate","onThrowUpdate"))},mt=function(O,rt,k,$){return rt==null&&(rt=-1e20),k==null&&(k=co),zr(O)?function(lt){var Q=c.isPressed?1-c.edgeResistance:1;return O.call(c,(lt>k?k+(lt-k)*Q:lt<rt?rt+(lt-rt)*Q:lt)*$)*$}:fa(O)?function(lt){for(var Q=O.length,vt=0,at=co,bt,Wt;--Q>-1;)bt=O[Q],Wt=bt-lt,Wt<0&&(Wt=-Wt),Wt<at&&bt>=rt&&bt<=k&&(vt=Q,at=Wt);return O[vt]}:isNaN(O)?function(lt){return lt}:function(){return O*$}},At=function(O,rt,k,$,lt,Q,vt){return Q=Q&&Q<co?Q*Q:co,zr(O)?function(at){var bt=c.isPressed?1-c.edgeResistance:1,Wt=at.x,Ut=at.y,Jt,ge,_e;return at.x=Wt=Wt>k?k+(Wt-k)*bt:Wt<rt?rt+(Wt-rt)*bt:Wt,at.y=Ut=Ut>lt?lt+(Ut-lt)*bt:Ut<$?$+(Ut-$)*bt:Ut,Jt=O.call(c,at),Jt!==at&&(at.x=Jt.x,at.y=Jt.y),vt!==1&&(at.x*=vt,at.y*=vt),Q<co&&(ge=at.x-Wt,_e=at.y-Ut,ge*ge+_e*_e>Q&&(at.x=Wt,at.y=Ut)),at}:fa(O)?function(at){for(var bt=O.length,Wt=0,Ut=co,Jt,ge,_e,oe;--bt>-1;)_e=O[bt],Jt=_e.x-at.x,ge=_e.y-at.y,oe=Jt*Jt+ge*ge,oe<Ut&&(Wt=bt,Ut=oe);return Ut<=Q?O[Wt]:at}:function(at){return at}},Qt=function(){var O,rt,k,$;W=!1,P?(P.calibrate(),c.minX=Tt=-P.maxScrollLeft(),c.minY=j=-P.maxScrollTop(),c.maxX=it=c.maxY=zt=0,W=!0):n.bounds&&(O=Um(n.bounds,e.parentNode),a?(c.minX=Tt=O.left,c.maxX=it=O.left+O.width,c.minY=j=c.maxY=zt=0):!Bi(n.bounds.maxX)||!Bi(n.bounds.maxY)?(O=n.bounds,c.minX=Tt=O.minX,c.minY=j=O.minY,c.maxX=it=O.maxX,c.maxY=zt=O.maxY):(rt=Um(e,e.parentNode),c.minX=Tt=Math.round(v(l,"px")+O.left-rt.left),c.minY=j=Math.round(v(u,"px")+O.top-rt.top),c.maxX=it=Math.round(Tt+(O.width-rt.width)),c.maxY=zt=Math.round(j+(O.height-rt.height))),Tt>it&&(c.minX=it,c.maxX=it=Tt,Tt=c.minX),j>zt&&(c.minY=zt,c.maxY=zt=j,j=c.minY),a&&(c.minRotation=Tt,c.maxRotation=it),W=!0),n.liveSnap&&(k=n.liveSnap===!0?n.snap||{}:n.liveSnap,$=fa(k)||zr(k),a?(Bt=mt($?k:k.rotation,Tt,it,1),ee=null):k.points?ne=At($?k:k.points,Tt,it,j,zt,k.radius,P?-1:1):(h&&(Bt=mt($?k:k.x||k.left||k.scrollLeft,Tt,it,P?-1:1)),f&&(ee=mt($?k:k.y||k.top||k.scrollTop,j,zt,P?-1:1))))},dt=function(){c.isThrowing=!1,We(c,"throwcomplete","onThrowComplete")},gt=function(){c.isThrowing=!1},Gt=function(O,rt){var k,$,lt,Q;O&&Ni?(O===!0&&(k=n.snap||n.liveSnap||{},$=fa(k)||zr(k),O={resistance:(n.throwResistance||n.resistance||1e3)/(a?10:1)},a?O.rotation=lh(c,$?k:k.rotation,it,Tt,1,rt):(h&&(O[l]=lh(c,$?k:k.points||k.x||k.left,it,Tt,P?-1:1,rt||c.lockedAxis==="x")),f&&(O[u]=lh(c,$?k:k.points||k.y||k.top,zt,j,P?-1:1,rt||c.lockedAxis==="y")),(k.points||fa(k)&&Na(k[0]))&&(O.linkedProps=l+","+u,O.radius=k.radius))),c.isThrowing=!0,Q=isNaN(n.overshootTolerance)?n.edgeResistance===1?0:1-c.edgeResistance+.2:n.overshootTolerance,O.duration||(O.duration={max:Math.max(n.minDuration||0,"maxDuration"in n?n.maxDuration:2),min:isNaN(n.minDuration)?Q===0||Na(O)&&O.resistance>1e3?0:.5:n.minDuration,overshoot:Q}),c.tween=lt=xe.to(P||e,{inertia:O,data:"_draggable",inherit:!1,onComplete:dt,onInterrupt:gt,onUpdate:n.fastMode?We:_t,onUpdateParams:n.fastMode?[c,"onthrowupdate","onThrowUpdate"]:k&&k.radius?[!1,!0]:[]}),n.fastMode||(P&&(P._skip=!0),lt.render(1e9,!0,!0),_t(!0,!0),c.endX=c.x,c.endY=c.y,a&&(c.endRotation=c.x),lt.play(0),_t(!0,!0),P&&(P._skip=!1))):W&&c.applyBounds()},kt=function(O){var rt=Ht,k;Ht=Ms(e.parentNode,!0),O&&c.isPressed&&!Ht.equals(rt||new zs)&&(k=rt.inverse().apply({x:z,y:H}),Ht.apply(k,k),z=k.x,H=k.y),Ht.equals(rT)&&(Ht=null)},Ct=function(){var O=1-c.edgeResistance,rt=y?Lo(R):0,k=y?Po(R):0,$,lt,Q;o&&(w.x=v(l,"px")+"px",w.y=v(u,"px")+"px",w.renderTransform()),kt(!1),Di.x=c.pointerX-rt,Di.y=c.pointerY-k,Ht&&Ht.apply(Di,Di),z=Di.x,H=Di.y,Mt&&(xt(c.pointerX,c.pointerY),tt(!0)),q=Ms(e),P?(Qt(),V=P.top(),I=P.left()):(te()?(_t(!0,!0),Qt()):c.applyBounds(),a?($=e.ownerSVGElement?[w.xOrigin-e.getBBox().x,w.yOrigin-e.getBBox().y]:(rl(e)[Pf]||"0 0").split(" "),ft=c.rotationOrigin=Ms(e).apply({x:parseFloat($[0])||0,y:parseFloat($[1])||0}),_t(!0,!0),lt=c.pointerX-ft.x-rt,Q=ft.y-c.pointerY+k,I=c.x,V=c.y=Math.atan2(Q,lt)*Tm):(V=v(u,"px"),I=v(l,"px"))),W&&O&&(I>it?I=it+(I-it)/O:I<Tt&&(I=Tt-(Tt-I)/O),a||(V>zt?V=zt+(V-zt)/O:V<j&&(V=j-(j-V)/O))),c.startX=I=Nr(I),c.startY=V=Nr(V)},te=function(){return c.tween&&c.tween.isActive()},jt=function(){pr.parentNode&&!te()&&!c.isDragging&&pr.parentNode.removeChild(pr)},se=function(O,rt){var k;if(!N||c.isPressed||!O||(O.type==="mousedown"||O.type==="pointerdown")&&!rt&&Or()-D<30&&il[c.pointerEvent.type]){E&&O&&N&&Ei(O);return}if(Zt=te(),ot=!1,c.pointerEvent=O,il[O.type]?(F=~O.type.indexOf("touch")?O.currentTarget||O.target:R,on(F,"touchend",K),on(F,"touchmove",U),on(F,"touchcancel",K),on(R,"touchstart",Pm)):(F=null,on(R,"mousemove",U)),Dt=null,(!gc||!F)&&(on(R,"mouseup",K),O&&O.target&&on(O.target,"mouseup",K)),Pt=b.call(c,O.target)&&n.dragClickables===!1&&!rt,Pt){on(O.target,"change",K),We(c,"pressInit","onPressInit"),We(c,"press","onPress"),Gl(p,!0),E=!1;return}if(Y=!F||h===f||c.vars.allowNativeTouchScrolling===!1||c.vars.allowContextMenu&&O&&(O.ctrlKey||O.which>2)?!1:h?"y":"x",E=!Y&&!c.allowEventDefault,E&&(Ei(O),on(Pe,"touchforcechange",Ei)),O.changedTouches?(O=ut=O.changedTouches[0],pt=O.identifier):O.pointerId?pt=O.pointerId:ut=pt=null,Hc++,lT(tt),H=c.pointerY=O.pageY,z=c.pointerX=O.pageX,We(c,"pressInit","onPressInit"),(Y||c.autoScroll)&&oh(e.parentNode),e.parentNode&&c.autoScroll&&!P&&!a&&e.parentNode._gsMaxScrollX&&!pr.parentNode&&!e.getBBox&&(pr.style.width=e.parentNode.scrollWidth+"px",e.parentNode.appendChild(pr)),Ct(),c.tween&&c.tween.kill(),c.isThrowing=!1,xe.killTweensOf(P||e,g,!0),P&&xe.killTweensOf(e,{scrollTo:1},!0),c.tween=c.lockedAxis=null,(n.zIndexBoost||!a&&!P&&n.zIndexBoost!==!1)&&(e.style.zIndex=t.zIndex++),c.isPressed=!0,et=!!(n.onDrag||c._listeners.drag),L=!!(n.onMove||c._listeners.move),n.cursor!==!1||n.activeCursor)for(k=p.length;--k>-1;)xe.set(p[k],{cursor:n.activeCursor||n.cursor||(Ea==="grab"?"grabbing":Ea)});We(c,"press","onPress")},U=function(O){var rt=O,k,$,lt,Q,vt,at;if(!N||Id||!c.isPressed||!O){E&&O&&N&&Ei(O);return}if(c.pointerEvent=O,k=O.changedTouches,k){if(O=k[0],O!==ut&&O.identifier!==pt){for(Q=k.length;--Q>-1&&(O=k[Q]).identifier!==pt&&O.target!==e;);if(Q<0)return}}else if(O.pointerId&&pt&&O.pointerId!==pt)return;if(F&&Y&&!Dt&&(Di.x=O.pageX-(y?Lo(R):0),Di.y=O.pageY-(y?Po(R):0),Ht&&Ht.apply(Di,Di),$=Di.x,lt=Di.y,vt=Math.abs($-z),at=Math.abs(lt-H),(vt!==at&&(vt>d||at>d)||Sa&&Y===Dt)&&(Dt=vt>at&&h?"x":"y",Y&&Dt!==Y&&on(Pe,"touchforcechange",Ei),c.vars.lockAxisOnTouchScroll!==!1&&h&&f&&(c.lockedAxis=Dt==="x"?"y":"x",zr(c.vars.onLockAxis)&&c.vars.onLockAxis.call(c,rt)),Sa&&Y===Dt))){K(rt);return}!c.allowEventDefault&&(!Y||Dt&&Y!==Dt)&&rt.cancelable!==!1?(Ei(rt),E=!0):E&&(E=!1),c.autoScroll&&(m=!0),xt(O.pageX,O.pageY,L)},xt=function(O,rt,k){var $=1-c.dragResistance,lt=1-c.edgeResistance,Q=c.pointerX,vt=c.pointerY,at=V,bt=c.x,Wt=c.y,Ut=c.endX,Jt=c.endY,ge=c.endRotation,_e=Mt,oe,ue,Se,ie,tn,Fe;c.pointerX=O,c.pointerY=rt,y&&(O-=Lo(R),rt-=Po(R)),a?(ie=Math.atan2(ft.y-rt,O-ft.x)*Tm,tn=c.y-ie,tn>180?(V-=360,c.y=ie):tn<-180&&(V+=360,c.y=ie),c.x!==I||Math.max(Math.abs(z-O),Math.abs(H-rt))>d?(c.y=ie,Se=I+(V-ie)*$):Se=I):(Ht&&(Fe=O*Ht.a+rt*Ht.c+Ht.e,rt=O*Ht.b+rt*Ht.d+Ht.f,O=Fe),ue=rt-H,oe=O-z,ue<d&&ue>-d&&(ue=0),oe<d&&oe>-d&&(oe=0),(c.lockAxis||c.lockedAxis)&&(oe||ue)&&(Fe=c.lockedAxis,Fe||(c.lockedAxis=Fe=h&&Math.abs(oe)>Math.abs(ue)?"y":f?"x":null,Fe&&zr(c.vars.onLockAxis)&&c.vars.onLockAxis.call(c,c.pointerEvent)),Fe==="y"?ue=0:Fe==="x"&&(oe=0)),Se=Nr(I+oe*$),ie=Nr(V+ue*$)),(Bt||ee||ne)&&(c.x!==Se||c.y!==ie&&!a)&&(ne&&(uo.x=Se,uo.y=ie,Fe=ne(uo),Se=Nr(Fe.x),ie=Nr(Fe.y)),Bt&&(Se=Nr(Bt(Se))),ee&&(ie=Nr(ee(ie)))),W&&(Se>it?Se=it+Math.round((Se-it)*lt):Se<Tt&&(Se=Tt+Math.round((Se-Tt)*lt)),a||(ie>zt?ie=Math.round(zt+(ie-zt)*lt):ie<j&&(ie=Math.round(j+(ie-j)*lt)))),(c.x!==Se||c.y!==ie&&!a)&&(a?(c.endRotation=c.x=c.endX=Se,Mt=!0):(f&&(c.y=c.endY=ie,Mt=!0),h&&(c.x=c.endX=Se,Mt=!0)),!k||We(c,"move","onMove")!==!1?!c.isDragging&&c.isPressed&&(c.isDragging=ot=!0,We(c,"dragstart","onDragStart")):(c.pointerX=Q,c.pointerY=vt,V=at,c.x=bt,c.y=Wt,c.endX=Ut,c.endY=Jt,c.endRotation=ge,Mt=_e))},K=function ct(O,rt){if(!N||!c.isPressed||O&&pt!=null&&!rt&&(O.pointerId&&O.pointerId!==pt&&O.target!==e||O.changedTouches&&!uT(O.changedTouches,pt))){E&&O&&N&&Ei(O);return}c.isPressed=!1;var k=O,$=c.isDragging,lt=c.vars.allowContextMenu&&O&&(O.ctrlKey||O.which>2),Q=xe.delayedCall(.001,jt),vt,at,bt,Wt,Ut;if(F?(je(F,"touchend",ct),je(F,"touchmove",U),je(F,"touchcancel",ct),je(R,"touchstart",Pm)):je(R,"mousemove",U),je(Pe,"touchforcechange",Ei),(!gc||!F)&&(je(R,"mouseup",ct),O&&O.target&&je(O.target,"mouseup",ct)),Mt=!1,$&&(_=bm=Or(),c.isDragging=!1),Rm(tt),Pt&&!lt){O&&(je(O.target,"change",ct),c.pointerEvent=k),Gl(p,!1),We(c,"release","onRelease"),We(c,"click","onClick"),Pt=!1;return}for(at=p.length;--at>-1;)ah(p[at],"cursor",n.cursor||(n.cursor!==!1?Ea:null));if(Hc--,O){if(vt=O.changedTouches,vt&&(O=vt[0],O!==ut&&O.identifier!==pt)){for(at=vt.length;--at>-1&&(O=vt[at]).identifier!==pt&&O.target!==e;);if(at<0&&!rt)return}c.pointerEvent=k,c.pointerX=O.pageX,c.pointerY=O.pageY}return lt&&k?(Ei(k),E=!0,We(c,"release","onRelease")):k&&!$?(E=!1,Zt&&(n.snap||n.bounds)&&Gt(n.inertia||n.throwProps),We(c,"release","onRelease"),(!Sa||k.type!=="touchmove")&&k.type.indexOf("cancel")===-1&&(We(c,"click","onClick"),Or()-D<300&&We(c,"doubleclick","onDoubleClick"),Wt=k.target||e,D=Or(),Ut=function(){D!==It&&c.enabled()&&!c.isPressed&&!k.defaultPrevented&&(Wt.click?Wt.click():R.createEvent&&(bt=R.createEvent("MouseEvents"),bt.initMouseEvent("click",!0,!0,Pe,1,c.pointerEvent.screenX,c.pointerEvent.screenY,c.pointerX,c.pointerY,!1,!1,!1,!1,0,null),Wt.dispatchEvent(bt)))},!Sa&&!k.defaultPrevented&&xe.delayedCall(.05,Ut))):(Gt(n.inertia||n.throwProps),!c.allowEventDefault&&k&&(n.dragClickables!==!1||!b.call(c,k.target))&&$&&(!Y||Dt&&Y===Dt)&&k.cancelable!==!1?(E=!0,Ei(k)):E=!1,We(c,"release","onRelease")),te()&&Q.duration(c.tween.duration()),$&&We(c,"dragend","onDragEnd"),!0},nt=function(O){if(O&&c.isDragging&&!P){var rt=O.target||e.parentNode,k=rt.scrollLeft-rt._gsScrollX,$=rt.scrollTop-rt._gsScrollY;(k||$)&&(Ht?(z-=k*Ht.a+$*Ht.c,H-=$*Ht.d+k*Ht.b):(z-=k,H-=$),rt._gsScrollX+=k,rt._gsScrollY+=$,xt(c.pointerX,c.pointerY))}},yt=function(O){var rt=Or(),k=rt-D<100,$=rt-_<50,lt=k&&It===D,Q=c.pointerEvent&&c.pointerEvent.defaultPrevented,vt=k&&C===D,at=O.isTrusted||O.isTrusted==null&&k&&lt;if((lt||$&&c.vars.suppressClickOnDrag!==!1)&&O.stopImmediatePropagation&&O.stopImmediatePropagation(),k&&!(c.pointerEvent&&c.pointerEvent.defaultPrevented)&&(!lt||at&&!vt)){at&&lt&&(C=D),It=D;return}(c.isPressed||$||k)&&(!at||!O.detail||!k||Q)&&Ei(O),!k&&!$&&!ot&&(O&&O.target&&(c.pointerEvent=O),We(c,"click","onClick"))},St=function(O){return Ht?{x:O.x*Ht.a+O.y*Ht.c+Ht.e,y:O.x*Ht.b+O.y*Ht.d+Ht.f}:{x:O.x,y:O.y}};return Yt=t.get(e),Yt&&Yt.kill(),i.startDrag=function(ct,O){var rt,k,$,lt;se(ct||c.pointerEvent,!0),O&&!c.hitTest(ct||c.pointerEvent)&&(rt=ho(ct||c.pointerEvent),k=ho(e),$=St({x:rt.left+rt.width/2,y:rt.top+rt.height/2}),lt=St({x:k.left+k.width/2,y:k.top+k.height/2}),z-=$.x-lt.x,H-=$.y-lt.y),c.isDragging||(c.isDragging=ot=!0,We(c,"dragstart","onDragStart"))},i.drag=U,i.endDrag=function(ct){return K(ct||c.pointerEvent,!0)},i.timeSinceDrag=function(){return c.isDragging?0:(Or()-_)/1e3},i.timeSinceClick=function(){return(Or()-D)/1e3},i.hitTest=function(ct,O){return t.hitTest(c.target,ct,O)},i.getDirection=function(ct,O){var rt=ct==="velocity"&&Ni?ct:Na(ct)&&!a?"element":"start",k,$,lt,Q,vt,at;return rt==="element"&&(vt=ho(c.target),at=ho(ct)),k=rt==="start"?c.x-I:rt==="velocity"?Ni.getVelocity(e,l):vt.left+vt.width/2-(at.left+at.width/2),a?k<0?"counter-clockwise":"clockwise":(O=O||2,$=rt==="start"?c.y-V:rt==="velocity"?Ni.getVelocity(e,u):vt.top+vt.height/2-(at.top+at.height/2),lt=Math.abs(k/$),Q=lt<1/O?"":k<0?"left":"right",lt<O&&(Q!==""&&(Q+="-"),Q+=$<0?"up":"down"),Q)},i.applyBounds=function(ct,O){var rt,k,$,lt,Q,vt;if(ct&&n.bounds!==ct)return n.bounds=ct,c.update(!0,O);if(_t(!0),Qt(),W&&!te()){if(rt=c.x,k=c.y,rt>it?rt=it:rt<Tt&&(rt=Tt),k>zt?k=zt:k<j&&(k=j),(c.x!==rt||c.y!==k)&&($=!0,c.x=c.endX=rt,a?c.endRotation=rt:c.y=c.endY=k,Mt=!0,tt(!0),c.autoScroll&&!c.isDragging))for(oh(e.parentNode),lt=e,ur.scrollTop=Pe.pageYOffset!=null?Pe.pageYOffset:R.documentElement.scrollTop!=null?R.documentElement.scrollTop:R.body.scrollTop,ur.scrollLeft=Pe.pageXOffset!=null?Pe.pageXOffset:R.documentElement.scrollLeft!=null?R.documentElement.scrollLeft:R.body.scrollLeft;lt&&!vt;)vt=$o(lt.parentNode),Q=vt?ur:lt.parentNode,f&&Q.scrollTop>Q._gsMaxScrollY&&(Q.scrollTop=Q._gsMaxScrollY),h&&Q.scrollLeft>Q._gsMaxScrollX&&(Q.scrollLeft=Q._gsMaxScrollX),lt=Q;c.isThrowing&&($||c.endX>it||c.endX<Tt||c.endY>zt||c.endY<j)&&Gt(n.inertia||n.throwProps,$)}return c},i.update=function(ct,O,rt){if(O&&c.isPressed){var k=Ms(e),$=q.apply({x:c.x-I,y:c.y-V}),lt=Ms(e.parentNode,!0);lt.apply({x:k.e-$.x,y:k.f-$.y},$),c.x-=$.x-lt.e,c.y-=$.y-lt.f,tt(!0),Ct()}var Q=c.x,vt=c.y;return kt(!O),ct?c.applyBounds():(Mt&&rt&&tt(!0),_t(!0)),O&&(xt(c.pointerX,c.pointerY),Mt&&tt(!0)),c.isPressed&&!O&&(h&&Math.abs(Q-c.x)>.01||f&&Math.abs(vt-c.y)>.01&&!a)&&Ct(),c.autoScroll&&(oh(e.parentNode,c.isDragging),m=c.isDragging,tt(!0),Fm(e,nt),Lm(e,nt)),c},i.enable=function(ct){var O={lazy:!0},rt,k,$;if(n.cursor!==!1&&(O.cursor=n.cursor||Ea),xe.utils.checkPrefix("touchCallout")&&(O.touchCallout="none"),ct!=="soft"){for(wm(p,h===f?"none":n.allowNativeTouchScrolling&&e.scrollHeight===e.clientHeight==(e.scrollWidth===e.clientHeight)||n.allowEventDefault?"manipulation":h?"pan-y":"pan-x"),k=p.length;--k>-1;)$=p[k],gc||on($,"mousedown",se),on($,"touchstart",se),on($,"click",yt,!0),xe.set($,O),$.getBBox&&$.ownerSVGElement&&h!==f&&xe.set($.ownerSVGElement,{touchAction:n.allowNativeTouchScrolling||n.allowEventDefault?"manipulation":h?"pan-y":"pan-x"}),n.allowContextMenu||on($,"contextmenu",st);Gl(p,!1)}return Lm(e,nt),N=!0,Ni&&ct!=="soft"&&Ni.track(P||e,o?"x,y":a?"rotation":"top,left"),e._gsDragID=rt=e._gsDragID||"d"+sT++,Ro[rt]=c,P&&(P.enable(),P.element._gsDragID=rt),(n.bounds||a)&&Ct(),n.bounds&&c.applyBounds(),c},i.disable=function(ct){for(var O=c.isDragging,rt=p.length,k;--rt>-1;)ah(p[rt],"cursor",null);if(ct!=="soft"){for(wm(p,null),rt=p.length;--rt>-1;)k=p[rt],ah(k,"touchCallout",null),je(k,"mousedown",se),je(k,"touchstart",se),je(k,"click",yt,!0),je(k,"contextmenu",st);Gl(p,!0),F&&(je(F,"touchcancel",K),je(F,"touchend",K),je(F,"touchmove",U)),je(R,"mouseup",K),je(R,"mousemove",U)}return Fm(e,nt),N=!1,Ni&&ct!=="soft"&&(Ni.untrack(P||e,o?"x,y":a?"rotation":"top,left"),c.tween&&c.tween.kill()),P&&P.disable(),Rm(tt),c.isDragging=c.isPressed=Pt=!1,O&&We(c,"dragend","onDragEnd"),c},i.enabled=function(ct,O){return arguments.length?ct?c.enable(O):c.disable(O):N},i.kill=function(){return c.isThrowing=!1,c.tween&&c.tween.kill(),c.disable(),xe.set(p,{clearProps:"userSelect"}),delete Ro[e._gsDragID],c},i.revert=function(){this.kill(),this.styles&&this.styles.revert()},~s.indexOf("scroll")&&(P=i.scrollProxy=new mT(e,aT({onKill:function(){c.isPressed&&K(null)}},n)),e.style.overflowY=f&&!Cf?"auto":"hidden",e.style.overflowX=h&&!Cf?"auto":"hidden",e=P.content),a?g.rotation=1:(h&&(g[l]=1),f&&(g[u]=1)),w.force3D="force3D"in n?n.force3D:!0,e0(Am(i)),i.enable(),i}return t.register=function(n){xe=n,ch()},t.create=function(n,i){return wf||ch(!0),Wr(n).map(function(s){return new t(s,i)})},t.get=function(n){return Ro[(Wr(n)[0]||{})._gsDragID]},t.timeSinceDrag=function(){return(Or()-bm)/1e3},t.hitTest=function(n,i,s){if(n===i)return!1;var o=ho(n),a=ho(i),l=o.top,u=o.left,h=o.right,f=o.bottom,d=o.width,c=o.height,p=a.left>h||a.right<u||a.top>f||a.bottom<l,g,_,m;return p||!s?!p:(m=(s+"").indexOf("%")!==-1,s=parseFloat(s)||0,g={left:Math.max(u,a.left),top:Math.max(l,a.top)},g.width=Math.min(h,a.right)-g.left,g.height=Math.min(f,a.bottom)-g.top,g.width<0||g.height<0?!1:m?(s*=.01,_=g.width*g.height,_>=d*c*s||_>=a.width*a.height*s):g.width>s&&g.height>s)},t}(_T);cT(ea.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1});ea.zIndex=1e3;ea.version="3.12.7";i0()&&xe.registerPlugin(ea);function gT(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function xT(r,t,e){return t&&gT(r.prototype,t),r}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var vn,vc,ui,Xr,Yr,Fo,a0,gs,Ba,l0,yr,Oi,c0,u0=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},h0=1,So=[],pe=[],tr=[],za=Date.now,Ff=function(t,e){return e},vT=function(){var t=Ba.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,pe),i.push.apply(i,tr),pe=n,tr=i,Ff=function(o,a){return e[o](a)}},Kr=function(t,e){return~tr.indexOf(t)&&tr[tr.indexOf(t)+1][e]},ka=function(t){return!!~l0.indexOf(t)},In=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Fn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Wl="scrollLeft",Xl="scrollTop",If=function(){return yr&&yr.isPressed||pe.cache++},Vc=function(t,e){var n=function i(s){if(s||s===0){h0&&(ui.history.scrollRestoration="manual");var o=yr&&yr.isPressed;s=i.v=Math.round(s)||(yr&&yr.iOS?1:0),t(s),i.cacheID=pe.cache,o&&Ff("ss",s)}else(e||pe.cache!==i.cacheID||Ff("ref"))&&(i.cacheID=pe.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},kn={s:Wl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Vc(function(r){return arguments.length?ui.scrollTo(r,an.sc()):ui.pageXOffset||Xr[Wl]||Yr[Wl]||Fo[Wl]||0})},an={s:Xl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:kn,sc:Vc(function(r){return arguments.length?ui.scrollTo(kn.sc(),r):ui.pageYOffset||Xr[Xl]||Yr[Xl]||Fo[Xl]||0})},Yn=function(t,e){return(e&&e._ctx&&e._ctx.selector||vn.utils.toArray)(t)[0]||(typeof t=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},ns=function(t,e){var n=e.s,i=e.sc;ka(t)&&(t=Xr.scrollingElement||Yr);var s=pe.indexOf(t),o=i===an.sc?1:2;!~s&&(s=pe.push(t)-1),pe[s+o]||In(t,"scroll",If);var a=pe[s+o],l=a||(pe[s+o]=Vc(Kr(t,n),!0)||(ka(t)?i:Vc(function(u){return arguments.length?t[n]=u:t[n]})));return l.target=t,a||(l.smooth=vn.getProperty(t,"scrollBehavior")==="smooth"),l},Uf=function(t,e,n){var i=t,s=t,o=za(),a=o,l=e||50,u=Math.max(500,l*3),h=function(p,g){var _=za();g||_-o>l?(s=i,i=p,a=o,o=_):n?i+=p:i=s+(p-s)/(_-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(p){var g=a,_=s,m=za();return(p||p===0)&&p!==i&&h(p),o===a||m-a>u?0:(i+(n?_:-_))/((n?m:o)-g)*1e3};return{update:h,reset:f,getVelocity:d}},da=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Nm=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},f0=function(){Ba=vn.core.globals().ScrollTrigger,Ba&&Ba.core&&vT()},d0=function(t){return vn=t||u0(),!vc&&vn&&typeof document<"u"&&document.body&&(ui=window,Xr=document,Yr=Xr.documentElement,Fo=Xr.body,l0=[ui,Xr,Yr,Fo],vn.utils.clamp,c0=vn.core.context||function(){},gs="onpointerenter"in Fo?"pointer":"mouse",a0=Ye.isTouch=ui.matchMedia&&ui.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ui||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Oi=Ye.eventTypes=("ontouchstart"in Yr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Yr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return h0=0},500),f0(),vc=1),vc};kn.op=an;pe.cache=0;var Ye=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){vc||d0(vn)||console.warn("Please gsap.registerPlugin(Observer)"),Ba||f0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,u=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,c=n.ignore,p=n.wheelSpeed,g=n.event,_=n.onDragStart,m=n.onDragEnd,S=n.onDrag,M=n.onPress,x=n.onRelease,A=n.onRight,b=n.onLeft,D=n.onUp,w=n.onDown,y=n.onChangeX,v=n.onChangeY,R=n.onChange,N=n.onToggleX,P=n.onToggleY,z=n.onHover,H=n.onHoverEnd,I=n.onMove,V=n.ignoreCheck,W=n.isNormalizer,et=n.onGestureStart,L=n.onGestureEnd,it=n.onWheel,Tt=n.onEnable,zt=n.onDisable,j=n.onClick,ut=n.scrollSpeed,pt=n.capture,ft=n.allowClicks,Mt=n.lockAxis,Yt=n.onLockAxis;this.target=a=Yn(a)||Yr,this.vars=n,c&&(c=vn.utils.toArray(c)),i=i||1e-9,s=s||0,p=p||1,ut=ut||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(ui.getComputedStyle(Fo).lineHeight)||22);var Bt,ee,ne,Pt,F,Ht,Zt,Y=this,Dt=0,ce=0,It=n.passive||!h&&n.passive!==!1,C=ns(a,kn),E=ns(a,an),q=C(),ot=E(),st=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Oi[0]==="pointerdown",tt=ka(a),_t=a.ownerDocument||Xr,mt=[0,0,0],At=[0,0,0],Qt=0,dt=function(){return Qt=za()},gt=function($,lt){return(Y.event=$)&&c&&~c.indexOf($.target)||lt&&st&&$.pointerType!=="touch"||V&&V($,lt)},Gt=function(){Y._vx.reset(),Y._vy.reset(),ee.pause(),f&&f(Y)},kt=function(){var $=Y.deltaX=Nm(mt),lt=Y.deltaY=Nm(At),Q=Math.abs($)>=i,vt=Math.abs(lt)>=i;R&&(Q||vt)&&R(Y,$,lt,mt,At),Q&&(A&&Y.deltaX>0&&A(Y),b&&Y.deltaX<0&&b(Y),y&&y(Y),N&&Y.deltaX<0!=Dt<0&&N(Y),Dt=Y.deltaX,mt[0]=mt[1]=mt[2]=0),vt&&(w&&Y.deltaY>0&&w(Y),D&&Y.deltaY<0&&D(Y),v&&v(Y),P&&Y.deltaY<0!=ce<0&&P(Y),ce=Y.deltaY,At[0]=At[1]=At[2]=0),(Pt||ne)&&(I&&I(Y),ne&&(_&&ne===1&&_(Y),S&&S(Y),ne=0),Pt=!1),Ht&&!(Ht=!1)&&Yt&&Yt(Y),F&&(it(Y),F=!1),Bt=0},Ct=function($,lt,Q){mt[Q]+=$,At[Q]+=lt,Y._vx.update($),Y._vy.update(lt),u?Bt||(Bt=requestAnimationFrame(kt)):kt()},te=function($,lt){Mt&&!Zt&&(Y.axis=Zt=Math.abs($)>Math.abs(lt)?"x":"y",Ht=!0),Zt!=="y"&&(mt[2]+=$,Y._vx.update($,!0)),Zt!=="x"&&(At[2]+=lt,Y._vy.update(lt,!0)),u?Bt||(Bt=requestAnimationFrame(kt)):kt()},jt=function($){if(!gt($,1)){$=da($,h);var lt=$.clientX,Q=$.clientY,vt=lt-Y.x,at=Q-Y.y,bt=Y.isDragging;Y.x=lt,Y.y=Q,(bt||(vt||at)&&(Math.abs(Y.startX-lt)>=s||Math.abs(Y.startY-Q)>=s))&&(ne=bt?2:1,bt||(Y.isDragging=!0),te(vt,at))}},se=Y.onPress=function(k){gt(k,1)||k&&k.button||(Y.axis=Zt=null,ee.pause(),Y.isPressed=!0,k=da(k),Dt=ce=0,Y.startX=Y.x=k.clientX,Y.startY=Y.y=k.clientY,Y._vx.reset(),Y._vy.reset(),In(W?a:_t,Oi[1],jt,It,!0),Y.deltaX=Y.deltaY=0,M&&M(Y))},U=Y.onRelease=function(k){if(!gt(k,1)){Fn(W?a:_t,Oi[1],jt,!0);var $=!isNaN(Y.y-Y.startY),lt=Y.isDragging,Q=lt&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),vt=da(k);!Q&&$&&(Y._vx.reset(),Y._vy.reset(),h&&ft&&vn.delayedCall(.08,function(){if(za()-Qt>300&&!k.defaultPrevented){if(k.target.click)k.target.click();else if(_t.createEvent){var at=_t.createEvent("MouseEvents");at.initMouseEvent("click",!0,!0,ui,1,vt.screenX,vt.screenY,vt.clientX,vt.clientY,!1,!1,!1,!1,0,null),k.target.dispatchEvent(at)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,f&&lt&&!W&&ee.restart(!0),ne&&kt(),m&&lt&&m(Y),x&&x(Y,Q)}},xt=function($){return $.touches&&$.touches.length>1&&(Y.isGesturing=!0)&&et($,Y.isDragging)},K=function(){return(Y.isGesturing=!1)||L(Y)},nt=function($){if(!gt($)){var lt=C(),Q=E();Ct((lt-q)*ut,(Q-ot)*ut,1),q=lt,ot=Q,f&&ee.restart(!0)}},yt=function($){if(!gt($)){$=da($,h),it&&(F=!0);var lt=($.deltaMode===1?l:$.deltaMode===2?ui.innerHeight:1)*p;Ct($.deltaX*lt,$.deltaY*lt,0),f&&!W&&ee.restart(!0)}},St=function($){if(!gt($)){var lt=$.clientX,Q=$.clientY,vt=lt-Y.x,at=Q-Y.y;Y.x=lt,Y.y=Q,Pt=!0,f&&ee.restart(!0),(vt||at)&&te(vt,at)}},ct=function($){Y.event=$,z(Y)},O=function($){Y.event=$,H(Y)},rt=function($){return gt($)||da($,h)&&j(Y)};ee=Y._dc=vn.delayedCall(d||.25,Gt).pause(),Y.deltaX=Y.deltaY=0,Y._vx=Uf(0,50,!0),Y._vy=Uf(0,50,!0),Y.scrollX=C,Y.scrollY=E,Y.isDragging=Y.isGesturing=Y.isPressed=!1,c0(this),Y.enable=function(k){return Y.isEnabled||(In(tt?_t:a,"scroll",If),o.indexOf("scroll")>=0&&In(tt?_t:a,"scroll",nt,It,pt),o.indexOf("wheel")>=0&&In(a,"wheel",yt,It,pt),(o.indexOf("touch")>=0&&a0||o.indexOf("pointer")>=0)&&(In(a,Oi[0],se,It,pt),In(_t,Oi[2],U),In(_t,Oi[3],U),ft&&In(a,"click",dt,!0,!0),j&&In(a,"click",rt),et&&In(_t,"gesturestart",xt),L&&In(_t,"gestureend",K),z&&In(a,gs+"enter",ct),H&&In(a,gs+"leave",O),I&&In(a,gs+"move",St)),Y.isEnabled=!0,Y.isDragging=Y.isGesturing=Y.isPressed=Pt=ne=!1,Y._vx.reset(),Y._vy.reset(),q=C(),ot=E(),k&&k.type&&se(k),Tt&&Tt(Y)),Y},Y.disable=function(){Y.isEnabled&&(So.filter(function(k){return k!==Y&&ka(k.target)}).length||Fn(tt?_t:a,"scroll",If),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Fn(W?a:_t,Oi[1],jt,!0)),Fn(tt?_t:a,"scroll",nt,pt),Fn(a,"wheel",yt,pt),Fn(a,Oi[0],se,pt),Fn(_t,Oi[2],U),Fn(_t,Oi[3],U),Fn(a,"click",dt,!0),Fn(a,"click",rt),Fn(_t,"gesturestart",xt),Fn(_t,"gestureend",K),Fn(a,gs+"enter",ct),Fn(a,gs+"leave",O),Fn(a,gs+"move",St),Y.isEnabled=Y.isPressed=Y.isDragging=!1,zt&&zt(Y))},Y.kill=Y.revert=function(){Y.disable();var k=So.indexOf(Y);k>=0&&So.splice(k,1),yr===Y&&(yr=0)},So.push(Y),W&&ka(a)&&(yr=Y),Y.enable(g)},xT(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ye.version="3.12.7";Ye.create=function(r){return new Ye(r)};Ye.register=d0;Ye.getAll=function(){return So.slice()};Ye.getById=function(r){return So.filter(function(t){return t.vars.id===r})[0]};u0()&&vn.registerPlugin(Ye);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ot,_o,de,Le,oi,Ae,Ud,Gc,sl,Ha,Da,Yl,Dn,uu,Nf,On,Om,Bm,go,p0,uh,m0,Nn,Of,_0,g0,Br,Bf,Nd,Io,Od,Wc,zf,hh,ql=1,An=Date.now,fh=An(),Ri=0,Aa=0,zm=function(t,e,n){var i=ri(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},km=function(t,e){return e&&(!ri(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},yT=function r(){return Aa&&requestAnimationFrame(r)},Hm=function(){return uu=1},Vm=function(){return uu=0},Xi=function(t){return t},Ta=function(t){return Math.round(t*1e5)/1e5||0},x0=function(){return typeof window<"u"},v0=function(){return Ot||x0()&&(Ot=window.gsap)&&Ot.registerPlugin&&Ot},ks=function(t){return!!~Ud.indexOf(t)},y0=function(t){return(t==="Height"?Od:de["inner"+t])||oi["client"+t]||Ae["client"+t]},M0=function(t){return Kr(t,"getBoundingClientRect")||(ks(t)?function(){return Dc.width=de.innerWidth,Dc.height=Od,Dc}:function(){return mr(t)})},MT=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=Kr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?y0(s):t["client"+s])||0}},ST=function(t,e){return!e||~tr.indexOf(t)?M0(t):function(){return Dc}},Ki=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Kr(t,n))?o()-M0(t)()[s]:ks(t)?(oi[n]||Ae[n])-y0(i):t[n]-t["offset"+i])},Zl=function(t,e){for(var n=0;n<go.length;n+=3)(!e||~e.indexOf(go[n+1]))&&t(go[n],go[n+1],go[n+2])},ri=function(t){return typeof t=="string"},bn=function(t){return typeof t=="function"},ba=function(t){return typeof t=="number"},xs=function(t){return typeof t=="object"},pa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},dh=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},fo=Math.abs,S0="left",E0="top",Bd="right",zd="bottom",Ls="width",Fs="height",Va="Right",Ga="Left",Wa="Top",Xa="Bottom",$e="padding",bi="margin",Ko="Width",kd="Height",sn="px",wi=function(t){return de.getComputedStyle(t)},ET=function(t){var e=wi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Gm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},mr=function(t,e){var n=e&&wi(t)[Nf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ot.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Xc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},D0=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},DT=function(t){return function(e){return Ot.utils.snap(D0(t),e)}},Hd=function(t){var e=Ot.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},AT=function(t){return function(e,n){return Hd(D0(t))(e,n.direction)}},jl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},fn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},hn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},$l=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Wm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Kl={toggleActions:"play",anticipatePin:0},Yc={top:0,left:0,center:.5,bottom:1,right:1},yc=function(t,e){if(ri(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Yc?Yc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Jl=function(t,e,n,i,s,o,a,l){var u=s.startColor,h=s.endColor,f=s.fontSize,d=s.indent,c=s.fontWeight,p=Le.createElement("div"),g=ks(n)||Kr(n,"pinType")==="fixed",_=t.indexOf("scroller")!==-1,m=g?Ae:n,S=t.indexOf("start")!==-1,M=S?u:h,x="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+c+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((_||l)&&g?"fixed;":"absolute;"),(_||l||!g)&&(x+=(i===an?Bd:zd)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=S,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=x,p.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+i.op.d2],Mc(p,0,i,S),p},Mc=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ko]=1,s["border"+a+Ko]=0,s[n.p]=e+"px",Ot.set(t,s)},fe=[],kf={},ol,Xm=function(){return An()-Ri>34&&(ol||(ol=requestAnimationFrame(Sr)))},po=function(){(!Nn||!Nn.isPressed||Nn.startX>Ae.clientWidth)&&(pe.cache++,Nn?ol||(ol=requestAnimationFrame(Sr)):Sr(),Ri||Vs("scrollStart"),Ri=An())},ph=function(){g0=de.innerWidth,_0=de.innerHeight},wa=function(t){pe.cache++,(t===!0||!Dn&&!m0&&!Le.fullscreenElement&&!Le.webkitFullscreenElement&&(!Of||g0!==de.innerWidth||Math.abs(de.innerHeight-_0)>de.innerHeight*.25))&&Gc.restart(!0)},Hs={},TT=[],A0=function r(){return hn(me,"scrollEnd",r)||As(!0)},Vs=function(t){return Hs[t]&&Hs[t].map(function(e){return e()})||TT},ii=[],T0=function(t){for(var e=0;e<ii.length;e+=5)(!t||ii[e+4]&&ii[e+4].query===t)&&(ii[e].style.cssText=ii[e+1],ii[e].getBBox&&ii[e].setAttribute("transform",ii[e+2]||""),ii[e+3].uncache=1)},Vd=function(t,e){var n;for(On=0;On<fe.length;On++)n=fe[On],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Wc=!0,e&&T0(e),e||Vs("revert")},b0=function(t,e){pe.cache++,(e||!Bn)&&pe.forEach(function(n){return bn(n)&&n.cacheID++&&(n.rec=0)}),ri(t)&&(de.history.scrollRestoration=Nd=t)},Bn,Is=0,Ym,bT=function(){if(Ym!==Is){var t=Ym=Is;requestAnimationFrame(function(){return t===Is&&As(!0)})}},w0=function(){Ae.appendChild(Io),Od=!Nn&&Io.offsetHeight||de.innerHeight,Ae.removeChild(Io)},qm=function(t){return sl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},As=function(t,e){if(oi=Le.documentElement,Ae=Le.body,Ud=[de,Le,oi,Ae],Ri&&!t&&!Wc){fn(me,"scrollEnd",A0);return}w0(),Bn=me.isRefreshing=!0,pe.forEach(function(i){return bn(i)&&++i.cacheID&&(i.rec=i())});var n=Vs("refreshInit");p0&&me.sort(),e||Vd(),pe.forEach(function(i){bn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),fe.slice(0).forEach(function(i){return i.refresh()}),Wc=!1,fe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),zf=1,qm(!0),fe.forEach(function(i){var s=Ki(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),qm(!1),zf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),pe.forEach(function(i){bn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),b0(Nd,1),Gc.pause(),Is++,Bn=2,Sr(2),fe.forEach(function(i){return bn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Bn=me.isRefreshing=!1,Vs("refresh")},Hf=0,Sc=1,Ya,Sr=function(t){if(t===2||!Bn&&!Wc){me.isUpdating=!0,Ya&&Ya.update(0);var e=fe.length,n=An(),i=n-fh>=50,s=e&&fe[0].scroll();if(Sc=Hf>s?-1:1,Bn||(Hf=s),i&&(Ri&&!uu&&n-Ri>200&&(Ri=0,Vs("scrollEnd")),Da=fh,fh=n),Sc<0){for(On=e;On-- >0;)fe[On]&&fe[On].update(0,i);Sc=1}else for(On=0;On<e;On++)fe[On]&&fe[On].update(0,i);me.isUpdating=!1}ol=0},Vf=[S0,E0,zd,Bd,bi+Xa,bi+Va,bi+Wa,bi+Ga,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ec=Vf.concat([Ls,Fs,"boxSizing","max"+Ko,"max"+kd,"position",bi,$e,$e+Wa,$e+Va,$e+Xa,$e+Ga]),wT=function(t,e,n){Uo(n);var i=t._gsap;if(i.spacerIsNative)Uo(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},mh=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Vf.length,o=e.style,a=t.style,l;s--;)l=Vf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[zd]=a[Bd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ls]=Xc(t,kn)+sn,o[Fs]=Xc(t,an)+sn,o[$e]=a[bi]=a[E0]=a[S0]="0",Uo(i),a[Ls]=a["max"+Ko]=n[Ls],a[Fs]=a["max"+kd]=n[Fs],a[$e]=n[$e],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},CT=/([A-Z])/g,Uo=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Ot.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(CT,"-$1").toLowerCase())}},Ql=function(t){for(var e=Ec.length,n=t.style,i=[],s=0;s<e;s++)i.push(Ec[s],n[Ec[s]]);return i.t=t,i},RT=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Dc={left:0,top:0},Zm=function(t,e,n,i,s,o,a,l,u,h,f,d,c,p){bn(t)&&(t=t(l)),ri(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?yc("0"+t.substr(3),n):0));var g=c?c.time():0,_,m,S;if(c&&c.seek(0),isNaN(t)||(t=+t),ba(t))c&&(t=Ot.utils.mapRange(c.scrollTrigger.start,c.scrollTrigger.end,0,d,t)),a&&Mc(a,n,i,!0);else{bn(e)&&(e=e(l));var M=(t||"0").split(" "),x,A,b,D;S=Yn(e,l)||Ae,x=mr(S)||{},(!x||!x.left&&!x.top)&&wi(S).display==="none"&&(D=S.style.display,S.style.display="block",x=mr(S),D?S.style.display=D:S.style.removeProperty("display")),A=yc(M[0],x[i.d]),b=yc(M[1]||"0",n),t=x[i.p]-u[i.p]-h+A+s-b,a&&Mc(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var w=t+n,y=o._isStart;_="scroll"+i.d2,Mc(o,w,i,y&&w>20||!y&&(f?Math.max(Ae[_],oi[_]):o.parentNode[_])<=w+1),f&&(u=mr(a),f&&(o.style[i.op.p]=u[i.op.p]-i.op.m-o._offset+sn))}return c&&S&&(_=mr(S),c.seek(d),m=mr(S),c._caScrollDist=_[i.p]-m[i.p],t=t/c._caScrollDist*d),c&&c.seek(g),c?t:Math.round(t)},PT=/(webkit|moz|length|cssText|inset)/i,jm=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===Ae){t._stOrig=s.cssText,a=wi(t);for(o in a)!+o&&!PT.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Ot.core.getCache(t).uncache=1,e.appendChild(t)}},C0=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},tc=function(t,e,n){var i={};i[e.p]="+="+n,Ot.set(t,i)},$m=function(t,e){var n=ns(t,e),i="_scroll"+e.p2,s=function o(a,l,u,h,f){var d=o.tween,c=l.onComplete,p={};u=u||n();var g=C0(n,u,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-u,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return g(u+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){pe.cache++,o.tween&&Sr()},l.onComplete=function(){o.tween=0,c&&c.call(d)},d=o.tween=Ot.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(t,"wheel",n.wheelHandler),me.isTouch&&fn(t,"touchmove",n.wheelHandler),s},me=function(){function r(e,n){_o||r.register(Ot)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Bf(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Aa){this.update=this.refresh=this.kill=Xi;return}n=Gm(ri(n)||ba(n)||n.nodeType?{trigger:n}:n,Kl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,h=s.onRefresh,f=s.scrub,d=s.trigger,c=s.pin,p=s.pinSpacing,g=s.invalidateOnRefresh,_=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,M=s.once,x=s.snap,A=s.pinReparent,b=s.pinSpacer,D=s.containerAnimation,w=s.fastScrollEnd,y=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?kn:an,R=!f&&f!==0,N=Yn(n.scroller||de),P=Ot.core.getCache(N),z=ks(N),H=("pinType"in n?n.pinType:Kr(N,"pinType")||z&&"fixed")==="fixed",I=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],V=R&&n.toggleActions.split(" "),W="markers"in n?n.markers:Kl.markers,et=z?0:parseFloat(wi(N)["border"+v.p2+Ko])||0,L=this,it=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Tt=MT(N,z,v),zt=ST(N,z),j=0,ut=0,pt=0,ft=ns(N,v),Mt,Yt,Bt,ee,ne,Pt,F,Ht,Zt,Y,Dt,ce,It,C,E,q,ot,st,tt,_t,mt,At,Qt,dt,gt,Gt,kt,Ct,te,jt,se,U,xt,K,nt,yt,St,ct,O;if(L._startClamp=L._endClamp=!1,L._dir=v,_*=45,L.scroller=N,L.scroll=D?D.time.bind(D):ft,ee=ft(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(p0=1,n.refreshPriority===-9999&&(Ya=L)),P.tweenScroll=P.tweenScroll||{top:$m(N,an),left:$m(N,kn)},L.tweenTo=Mt=P.tweenScroll[v.p],L.scrubDuration=function(Q){xt=ba(Q)&&Q,xt?U?U.duration(Q):U=Ot.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:xt,paused:!0,onComplete:function(){return m&&m(L)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(f),jt=0,l||(l=i.vars.id)),x&&((!xs(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Ae.style&&Ot.set(z?[Ae,oi]:N,{scrollBehavior:"auto"}),pe.forEach(function(Q){return bn(Q)&&Q.target===(z?Le.scrollingElement||oi:N)&&(Q.smooth=!1)}),Bt=bn(x.snapTo)?x.snapTo:x.snapTo==="labels"?DT(i):x.snapTo==="labelsDirectional"?AT(i):x.directional!==!1?function(Q,vt){return Hd(x.snapTo)(Q,An()-ut<500?0:vt.direction)}:Ot.utils.snap(x.snapTo),K=x.duration||{min:.1,max:2},K=xs(K)?Ha(K.min,K.max):Ha(K,K),nt=Ot.delayedCall(x.delay||xt/2||.1,function(){var Q=ft(),vt=An()-ut<500,at=Mt.tween;if((vt||Math.abs(L.getVelocity())<10)&&!at&&!uu&&j!==Q){var bt=(Q-Pt)/C,Wt=i&&!R?i.totalProgress():bt,Ut=vt?0:(Wt-se)/(An()-Da)*1e3||0,Jt=Ot.utils.clamp(-bt,1-bt,fo(Ut/2)*Ut/.185),ge=bt+(x.inertia===!1?0:Jt),_e,oe,ue=x,Se=ue.onStart,ie=ue.onInterrupt,tn=ue.onComplete;if(_e=Bt(ge,L),ba(_e)||(_e=ge),oe=Math.max(0,Math.round(Pt+_e*C)),Q<=F&&Q>=Pt&&oe!==Q){if(at&&!at._initted&&at.data<=fo(oe-Q))return;x.inertia===!1&&(Jt=_e-bt),Mt(oe,{duration:K(fo(Math.max(fo(ge-Wt),fo(_e-Wt))*.185/Ut/.05||0)),ease:x.ease||"power3",data:fo(oe-Q),onInterrupt:function(){return nt.restart(!0)&&ie&&ie(L)},onComplete:function(){L.update(),j=ft(),i&&!R&&(U?U.resetTo("totalProgress",_e,i._tTime/i._tDur):i.progress(_e)),jt=se=i&&!R?i.totalProgress():L.progress,S&&S(L),tn&&tn(L)}},Q,Jt*C,oe-Q-Jt*C),Se&&Se(L,Mt.tween)}}else L.isActive&&j!==Q&&nt.restart(!0)}).pause()),l&&(kf[l]=L),d=L.trigger=Yn(d||c!==!0&&c),O=d&&d._gsap&&d._gsap.stRevert,O&&(O=O(L)),c=c===!0?d:Yn(c),ri(a)&&(a={targets:d,className:a}),c&&(p===!1||p===bi||(p=!p&&c.parentNode&&c.parentNode.style&&wi(c.parentNode).display==="flex"?!1:$e),L.pin=c,Yt=Ot.core.getCache(c),Yt.spacer?E=Yt.pinState:(b&&(b=Yn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Yt.spacerIsNative=!!b,b&&(Yt.spacerState=Ql(b))),Yt.spacer=st=b||Le.createElement("div"),st.classList.add("pin-spacer"),l&&st.classList.add("pin-spacer-"+l),Yt.pinState=E=Ql(c)),n.force3D!==!1&&Ot.set(c,{force3D:!0}),L.spacer=st=Yt.spacer,te=wi(c),dt=te[p+v.os2],_t=Ot.getProperty(c),mt=Ot.quickSetter(c,v.a,sn),mh(c,st,te),ot=Ql(c)),W){ce=xs(W)?Gm(W,Wm):Wm,Y=Jl("scroller-start",l,N,v,ce,0),Dt=Jl("scroller-end",l,N,v,ce,0,Y),tt=Y["offset"+v.op.d2];var rt=Yn(Kr(N,"content")||N);Ht=this.markerStart=Jl("start",l,rt,v,ce,tt,0,D),Zt=this.markerEnd=Jl("end",l,rt,v,ce,tt,0,D),D&&(ct=Ot.quickSetter([Ht,Zt],v.a,sn)),!H&&!(tr.length&&Kr(N,"fixedMarkers")===!0)&&(ET(z?Ae:N),Ot.set([Y,Dt],{force3D:!0}),Gt=Ot.quickSetter(Y,v.a,sn),Ct=Ot.quickSetter(Dt,v.a,sn))}if(D){var k=D.vars.onUpdate,$=D.vars.onUpdateParams;D.eventCallback("onUpdate",function(){L.update(0,0,1),k&&k.apply(D,$||[])})}if(L.previous=function(){return fe[fe.indexOf(L)-1]},L.next=function(){return fe[fe.indexOf(L)+1]},L.revert=function(Q,vt){if(!vt)return L.kill(!0);var at=Q!==!1||!L.enabled,bt=Dn;at!==L.isReverted&&(at&&(yt=Math.max(ft(),L.scroll.rec||0),pt=L.progress,St=i&&i.progress()),Ht&&[Ht,Zt,Y,Dt].forEach(function(Wt){return Wt.style.display=at?"none":"block"}),at&&(Dn=L,L.update(at)),c&&(!A||!L.isActive)&&(at?wT(c,st,E):mh(c,st,wi(c),gt)),at||L.update(at),Dn=bt,L.isReverted=at)},L.refresh=function(Q,vt,at,bt){if(!((Dn||!L.enabled)&&!vt)){if(c&&Q&&Ri){fn(r,"scrollEnd",A0);return}!Bn&&it&&it(L),Dn=L,Mt.tween&&!at&&(Mt.tween.kill(),Mt.tween=0),U&&U.pause(),g&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Wt=Tt(),Ut=zt(),Jt=D?D.duration():Ki(N,v),ge=C<=.01,_e=0,oe=bt||0,ue=xs(at)?at.end:n.end,Se=n.endTrigger||d,ie=xs(at)?at.start:n.start||(n.start===0||!d?0:c?"0 0":"0 100%"),tn=L.pinnedContainer=n.pinnedContainer&&Yn(n.pinnedContainer,L),Fe=d&&Math.max(0,fe.indexOf(L))||0,en=Fe,nn,T,X,J,Z,G,ht,wt,Ft,Lt,Xt,Kt,Vt;for(W&&xs(at)&&(Kt=Ot.getProperty(Y,v.p),Vt=Ot.getProperty(Dt,v.p));en-- >0;)G=fe[en],G.end||G.refresh(0,1)||(Dn=L),ht=G.pin,ht&&(ht===d||ht===c||ht===tn)&&!G.isReverted&&(Lt||(Lt=[]),Lt.unshift(G),G.revert(!0,!0)),G!==fe[en]&&(Fe--,en--);for(bn(ie)&&(ie=ie(L)),ie=zm(ie,"start",L),Pt=Zm(ie,d,Wt,v,ft(),Ht,Y,L,Ut,et,H,Jt,D,L._startClamp&&"_startClamp")||(c?-.001:0),bn(ue)&&(ue=ue(L)),ri(ue)&&!ue.indexOf("+=")&&(~ue.indexOf(" ")?ue=(ri(ie)?ie.split(" ")[0]:"")+ue:(_e=yc(ue.substr(2),Wt),ue=ri(ie)?ie:(D?Ot.utils.mapRange(0,D.duration(),D.scrollTrigger.start,D.scrollTrigger.end,Pt):Pt)+_e,Se=d)),ue=zm(ue,"end",L),F=Math.max(Pt,Zm(ue||(Se?"100% 0":Jt),Se,Wt,v,ft()+_e,Zt,Dt,L,Ut,et,H,Jt,D,L._endClamp&&"_endClamp"))||-.001,_e=0,en=Fe;en--;)G=fe[en],ht=G.pin,ht&&G.start-G._pinPush<=Pt&&!D&&G.end>0&&(nn=G.end-(L._startClamp?Math.max(0,G.start):G.start),(ht===d&&G.start-G._pinPush<Pt||ht===tn)&&isNaN(ie)&&(_e+=nn*(1-G.progress)),ht===c&&(oe+=nn));if(Pt+=_e,F+=_e,L._startClamp&&(L._startClamp+=_e),L._endClamp&&!Bn&&(L._endClamp=F||-.001,F=Math.min(F,Ki(N,v))),C=F-Pt||(Pt-=.01)&&.001,ge&&(pt=Ot.utils.clamp(0,1,Ot.utils.normalize(Pt,F,yt))),L._pinPush=oe,Ht&&_e&&(nn={},nn[v.a]="+="+_e,tn&&(nn[v.p]="-="+ft()),Ot.set([Ht,Zt],nn)),c&&!(zf&&L.end>=Ki(N,v)))nn=wi(c),J=v===an,X=ft(),At=parseFloat(_t(v.a))+oe,!Jt&&F>1&&(Xt=(z?Le.scrollingElement||oi:N).style,Xt={style:Xt,value:Xt["overflow"+v.a.toUpperCase()]},z&&wi(Ae)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Xt.style["overflow"+v.a.toUpperCase()]="scroll")),mh(c,st,nn),ot=Ql(c),T=mr(c,!0),wt=H&&ns(N,J?kn:an)(),p?(gt=[p+v.os2,C+oe+sn],gt.t=st,en=p===$e?Xc(c,v)+C+oe:0,en&&(gt.push(v.d,en+sn),st.style.flexBasis!=="auto"&&(st.style.flexBasis=en+sn)),Uo(gt),tn&&fe.forEach(function(he){he.pin===tn&&he.vars.pinSpacing!==!1&&(he._subPinOffset=!0)}),H&&ft(yt)):(en=Xc(c,v),en&&st.style.flexBasis!=="auto"&&(st.style.flexBasis=en+sn)),H&&(Z={top:T.top+(J?X-Pt:wt)+sn,left:T.left+(J?wt:X-Pt)+sn,boxSizing:"border-box",position:"fixed"},Z[Ls]=Z["max"+Ko]=Math.ceil(T.width)+sn,Z[Fs]=Z["max"+kd]=Math.ceil(T.height)+sn,Z[bi]=Z[bi+Wa]=Z[bi+Va]=Z[bi+Xa]=Z[bi+Ga]="0",Z[$e]=nn[$e],Z[$e+Wa]=nn[$e+Wa],Z[$e+Va]=nn[$e+Va],Z[$e+Xa]=nn[$e+Xa],Z[$e+Ga]=nn[$e+Ga],q=RT(E,Z,A),Bn&&ft(0)),i?(Ft=i._initted,uh(1),i.render(i.duration(),!0,!0),Qt=_t(v.a)-At+C+oe,kt=Math.abs(C-Qt)>1,H&&kt&&q.splice(q.length-2,2),i.render(0,!0,!0),Ft||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),uh(0)):Qt=C,Xt&&(Xt.value?Xt.style["overflow"+v.a.toUpperCase()]=Xt.value:Xt.style.removeProperty("overflow-"+v.a));else if(d&&ft()&&!D)for(T=d.parentNode;T&&T!==Ae;)T._pinOffset&&(Pt-=T._pinOffset,F-=T._pinOffset),T=T.parentNode;Lt&&Lt.forEach(function(he){return he.revert(!1,!0)}),L.start=Pt,L.end=F,ee=ne=Bn?yt:ft(),!D&&!Bn&&(ee<yt&&ft(yt),L.scroll.rec=0),L.revert(!1,!0),ut=An(),nt&&(j=-1,nt.restart(!0)),Dn=0,i&&R&&(i._initted||St)&&i.progress()!==St&&i.progress(St||0,!0).render(i.time(),!0,!0),(ge||pt!==L.progress||D||g||i&&!i._initted)&&(i&&!R&&i.totalProgress(D&&Pt<-.001&&!pt?Ot.utils.normalize(Pt,F,0):pt,!0),L.progress=ge||(ee-Pt)/C===pt?0:pt),c&&p&&(st._pinOffset=Math.round(L.progress*Qt)),U&&U.invalidate(),isNaN(Kt)||(Kt-=Ot.getProperty(Y,v.p),Vt-=Ot.getProperty(Dt,v.p),tc(Y,v,Kt),tc(Ht,v,Kt-(bt||0)),tc(Dt,v,Vt),tc(Zt,v,Vt-(bt||0))),ge&&!Bn&&L.update(),h&&!Bn&&!It&&(It=!0,h(L),It=!1)}},L.getVelocity=function(){return(ft()-ne)/(An()-Da)*1e3||0},L.endAnimation=function(){pa(L.callbackAnimation),i&&(U?U.progress(1):i.paused()?R||pa(i,L.direction<0,1):pa(i,i.reversed()))},L.labelToScroll=function(Q){return i&&i.labels&&(Pt||L.refresh()||Pt)+i.labels[Q]/i.duration()*C||0},L.getTrailing=function(Q){var vt=fe.indexOf(L),at=L.direction>0?fe.slice(0,vt).reverse():fe.slice(vt+1);return(ri(Q)?at.filter(function(bt){return bt.vars.preventOverlaps===Q}):at).filter(function(bt){return L.direction>0?bt.end<=Pt:bt.start>=F})},L.update=function(Q,vt,at){if(!(D&&!at&&!Q)){var bt=Bn===!0?yt:L.scroll(),Wt=Q?0:(bt-Pt)/C,Ut=Wt<0?0:Wt>1?1:Wt||0,Jt=L.progress,ge,_e,oe,ue,Se,ie,tn,Fe;if(vt&&(ne=ee,ee=D?ft():bt,x&&(se=jt,jt=i&&!R?i.totalProgress():Ut)),_&&c&&!Dn&&!ql&&Ri&&(!Ut&&Pt<bt+(bt-ne)/(An()-Da)*_?Ut=1e-4:Ut===1&&F>bt+(bt-ne)/(An()-Da)*_&&(Ut=.9999)),Ut!==Jt&&L.enabled){if(ge=L.isActive=!!Ut&&Ut<1,_e=!!Jt&&Jt<1,ie=ge!==_e,Se=ie||!!Ut!=!!Jt,L.direction=Ut>Jt?1:-1,L.progress=Ut,Se&&!Dn&&(oe=Ut&&!Jt?0:Ut===1?1:Jt===1?2:3,R&&(ue=!ie&&V[oe+1]!=="none"&&V[oe+1]||V[oe],Fe=i&&(ue==="complete"||ue==="reset"||ue in i))),y&&(ie||Fe)&&(Fe||f||!i)&&(bn(y)?y(L):L.getTrailing(y).forEach(function(X){return X.endAnimation()})),R||(U&&!Dn&&!ql?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",Ut,i._tTime/i._tDur):(U.vars.totalProgress=Ut,U.invalidate().restart())):i&&i.totalProgress(Ut,!!(Dn&&(ut||Q)))),c){if(Q&&p&&(st.style[p+v.os2]=dt),!H)mt(Ta(At+Qt*Ut));else if(Se){if(tn=!Q&&Ut>Jt&&F+1>bt&&bt+1>=Ki(N,v),A)if(!Q&&(ge||tn)){var en=mr(c,!0),nn=bt-Pt;jm(c,Ae,en.top+(v===an?nn:0)+sn,en.left+(v===an?0:nn)+sn)}else jm(c,st);Uo(ge||tn?q:ot),kt&&Ut<1&&ge||mt(At+(Ut===1&&!tn?Qt:0))}}x&&!Mt.tween&&!Dn&&!ql&&nt.restart(!0),a&&(ie||M&&Ut&&(Ut<1||!hh))&&sl(a.targets).forEach(function(X){return X.classList[ge||M?"add":"remove"](a.className)}),o&&!R&&!Q&&o(L),Se&&!Dn?(R&&(Fe&&(ue==="complete"?i.pause().totalProgress(1):ue==="reset"?i.restart(!0).pause():ue==="restart"?i.restart(!0):i[ue]()),o&&o(L)),(ie||!hh)&&(u&&ie&&dh(L,u),I[oe]&&dh(L,I[oe]),M&&(Ut===1?L.kill(!1,1):I[oe]=0),ie||(oe=Ut===1?1:3,I[oe]&&dh(L,I[oe]))),w&&!ge&&Math.abs(L.getVelocity())>(ba(w)?w:2500)&&(pa(L.callbackAnimation),U?U.progress(1):pa(i,ue==="reverse"?1:!Ut,1))):R&&o&&!Dn&&o(L)}if(Ct){var T=D?bt/D.duration()*(D._caScrollDist||0):bt;Gt(T+(Y._isFlipped?1:0)),Ct(T)}ct&&ct(-bt/D.duration()*(D._caScrollDist||0))}},L.enable=function(Q,vt){L.enabled||(L.enabled=!0,fn(N,"resize",wa),z||fn(N,"scroll",po),it&&fn(r,"refreshInit",it),Q!==!1&&(L.progress=pt=0,ee=ne=j=ft()),vt!==!1&&L.refresh())},L.getTween=function(Q){return Q&&Mt?Mt.tween:U},L.setPositions=function(Q,vt,at,bt){if(D){var Wt=D.scrollTrigger,Ut=D.duration(),Jt=Wt.end-Wt.start;Q=Wt.start+Jt*Q/Ut,vt=Wt.start+Jt*vt/Ut}L.refresh(!1,!1,{start:km(Q,at&&!!L._startClamp),end:km(vt,at&&!!L._endClamp)},bt),L.update()},L.adjustPinSpacing=function(Q){if(gt&&Q){var vt=gt.indexOf(v.d)+1;gt[vt]=parseFloat(gt[vt])+Q+sn,gt[1]=parseFloat(gt[1])+Q+sn,Uo(gt)}},L.disable=function(Q,vt){if(L.enabled&&(Q!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,vt||U&&U.pause(),yt=0,Yt&&(Yt.uncache=1),it&&hn(r,"refreshInit",it),nt&&(nt.pause(),Mt.tween&&Mt.tween.kill()&&(Mt.tween=0)),!z)){for(var at=fe.length;at--;)if(fe[at].scroller===N&&fe[at]!==L)return;hn(N,"resize",wa),z||hn(N,"scroll",po)}},L.kill=function(Q,vt){L.disable(Q,vt),U&&!vt&&U.kill(),l&&delete kf[l];var at=fe.indexOf(L);at>=0&&fe.splice(at,1),at===On&&Sc>0&&On--,at=0,fe.forEach(function(bt){return bt.scroller===L.scroller&&(at=1)}),at||Bn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,Q&&i.revert({kill:!1}),vt||i.kill()),Ht&&[Ht,Zt,Y,Dt].forEach(function(bt){return bt.parentNode&&bt.parentNode.removeChild(bt)}),Ya===L&&(Ya=0),c&&(Yt&&(Yt.uncache=1),at=0,fe.forEach(function(bt){return bt.pin===c&&at++}),at||(Yt.spacer=0)),n.onKill&&n.onKill(L)},fe.push(L),L.enable(!1,!1),O&&O(L),i&&i.add&&!C){var lt=L.update;L.update=function(){L.update=lt,pe.cache++,Pt||F||L.refresh()},Ot.delayedCall(.01,L.update),C=.01,Pt=F=0}else L.refresh();c&&bT()},r.register=function(n){return _o||(Ot=n||v0(),x0()&&window.document&&r.enable(),_o=Aa),_o},r.defaults=function(n){if(n)for(var i in n)Kl[i]=n[i];return Kl},r.disable=function(n,i){Aa=0,fe.forEach(function(o){return o[i?"kill":"disable"](n)}),hn(de,"wheel",po),hn(Le,"scroll",po),clearInterval(Yl),hn(Le,"touchcancel",Xi),hn(Ae,"touchstart",Xi),jl(hn,Le,"pointerdown,touchstart,mousedown",Hm),jl(hn,Le,"pointerup,touchend,mouseup",Vm),Gc.kill(),Zl(hn);for(var s=0;s<pe.length;s+=3)$l(hn,pe[s],pe[s+1]),$l(hn,pe[s],pe[s+2])},r.enable=function(){if(de=window,Le=document,oi=Le.documentElement,Ae=Le.body,Ot&&(sl=Ot.utils.toArray,Ha=Ot.utils.clamp,Bf=Ot.core.context||Xi,uh=Ot.core.suppressOverwrites||Xi,Nd=de.history.scrollRestoration||"auto",Hf=de.pageYOffset||0,Ot.core.globals("ScrollTrigger",r),Ae)){Aa=1,Io=document.createElement("div"),Io.style.height="100vh",Io.style.position="absolute",w0(),yT(),Ye.register(Ot),r.isTouch=Ye.isTouch,Br=Ye.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Of=Ye.isTouch===1,fn(de,"wheel",po),Ud=[de,Le,oi,Ae],Ot.matchMedia?(r.matchMedia=function(u){var h=Ot.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Ot.addEventListener("matchMediaInit",function(){return Vd()}),Ot.addEventListener("matchMediaRevert",function(){return T0()}),Ot.addEventListener("matchMedia",function(){As(0,1),Vs("matchMedia")}),Ot.matchMedia().add("(orientation: portrait)",function(){return ph(),ph})):console.warn("Requires GSAP 3.11.0 or later"),ph(),fn(Le,"scroll",po);var n=Ae.hasAttribute("style"),i=Ae.style,s=i.borderTopStyle,o=Ot.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=mr(Ae),an.m=Math.round(a.top+an.sc())||0,kn.m=Math.round(a.left+kn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Ae.setAttribute("style",""),Ae.removeAttribute("style")),Yl=setInterval(Xm,250),Ot.delayedCall(.5,function(){return ql=0}),fn(Le,"touchcancel",Xi),fn(Ae,"touchstart",Xi),jl(fn,Le,"pointerdown,touchstart,mousedown",Hm),jl(fn,Le,"pointerup,touchend,mouseup",Vm),Nf=Ot.utils.checkPrefix("transform"),Ec.push(Nf),_o=An(),Gc=Ot.delayedCall(.2,As).pause(),go=[Le,"visibilitychange",function(){var u=de.innerWidth,h=de.innerHeight;Le.hidden?(Om=u,Bm=h):(Om!==u||Bm!==h)&&wa()},Le,"DOMContentLoaded",As,de,"load",As,de,"resize",wa],Zl(fn),fe.forEach(function(u){return u.enable(0,1)}),l=0;l<pe.length;l+=3)$l(hn,pe[l],pe[l+1]),$l(hn,pe[l],pe[l+2])}},r.config=function(n){"limitCallbacks"in n&&(hh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Yl)||(Yl=i)&&setInterval(Xm,i),"ignoreMobileResize"in n&&(Of=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Zl(hn)||Zl(fn,n.autoRefreshEvents||"none"),m0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Yn(n),o=pe.indexOf(s),a=ks(s);~o&&pe.splice(o,a?6:2),i&&(a?tr.unshift(de,i,Ae,i,oi,i):tr.unshift(s,i))},r.clearMatchMedia=function(n){fe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(ri(n)?Yn(n):n).getBoundingClientRect(),a=o[s?Ls:Fs]*i||0;return s?o.right-a>0&&o.left+a<de.innerWidth:o.bottom-a>0&&o.top+a<de.innerHeight},r.positionInViewport=function(n,i,s){ri(n)&&(n=Yn(n));var o=n.getBoundingClientRect(),a=o[s?Ls:Fs],l=i==null?a/2:i in Yc?Yc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/de.innerWidth:(o.top+l)/de.innerHeight},r.killAll=function(n){if(fe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Hs.killAll||[];Hs={},i.forEach(function(s){return s()})}},r}();me.version="3.12.7";me.saveStyles=function(r){return r?sl(r).forEach(function(t){if(t&&t.style){var e=ii.indexOf(t);e>=0&&ii.splice(e,5),ii.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ot.core.getCache(t),Bf())}}):ii};me.revert=function(r,t){return Vd(!r,t)};me.create=function(r,t){return new me(r,t)};me.refresh=function(r){return r?wa(!0):(_o||me.register())&&As(!0)};me.update=function(r){return++pe.cache&&Sr(r===!0?2:0)};me.clearScrollMemory=b0;me.maxScroll=function(r,t){return Ki(r,t?kn:an)};me.getScrollFunc=function(r,t){return ns(Yn(r),t?kn:an)};me.getById=function(r){return kf[r]};me.getAll=function(){return fe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};me.isScrolling=function(){return!!Ri};me.snapDirectional=Hd;me.addEventListener=function(r,t){var e=Hs[r]||(Hs[r]=[]);~e.indexOf(t)||e.push(t)};me.removeEventListener=function(r,t){var e=Hs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};me.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(u,h){var f=[],d=[],c=Ot.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(p){f.length||c.restart(!0),f.push(p.trigger),d.push(p),s<=f.length&&c.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&bn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return bn(s)&&(s=s(),fn(me,"refresh",function(){return s=t.batchMax()})),sl(r).forEach(function(l){var u={};for(a in n)u[a]=n[a];u.trigger=l,e.push(me.create(u))}),e};var Km=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},_h=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ye.isTouch?" pinch-zoom":""):"none",t===oi&&r(Ae,e)},ec={auto:1,scroll:1},LT=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ot.core.getCache(s),a=An(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Ae&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ec[(l=wi(s)).overflowY]||ec[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ks(s)&&(ec[(l=wi(s)).overflowY]||ec[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},R0=function(t,e,n,i){return Ye.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&LT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&fn(Le,Ye.eventTypes[0],Qm,!1,!0)},onDisable:function(){return hn(Le,Ye.eventTypes[0],Qm,!0)}})},FT=/(input|label|select|textarea)/i,Jm,Qm=function(t){var e=FT.test(t.target.tagName);(e||Jm)&&(t._gsapAllow=!0,Jm=e)},IT=function(t){xs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,u=Yn(t.target)||oi,h=Ot.core.globals().ScrollSmoother,f=h&&h.get(),d=Br&&(t.content&&Yn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),c=ns(u,an),p=ns(u,kn),g=1,_=(Ye.isTouch&&de.visualViewport?de.visualViewport.scale*de.visualViewport.width:de.outerWidth)/de.innerWidth,m=0,S=bn(i)?function(){return i(a)}:function(){return i||2.8},M,x,A=R0(u,t.type,!0,s),b=function(){return x=!1},D=Xi,w=Xi,y=function(){l=Ki(u,an),w=Ha(Br?1:0,l),n&&(D=Ha(0,Ki(u,kn))),M=Is},v=function(){d._gsap.y=Ta(parseFloat(d._gsap.y)+c.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",c.offset=c.cacheID=0},R=function(){if(x){requestAnimationFrame(b);var W=Ta(a.deltaY/2),et=w(c.v-W);if(d&&et!==c.v+c.offset){c.offset=et-c.v;var L=Ta((parseFloat(d&&d._gsap.y)||0)-c.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",d._gsap.y=L+"px",c.cacheID=pe.cache,Sr()}return!0}c.offset&&v(),x=!0},N,P,z,H,I=function(){y(),N.isActive()&&N.vars.scrollY>l&&(c()>l?N.progress(1)&&c(l):N.resetTo("scrollY",l))};return d&&Ot.set(d,{y:"+=0"}),t.ignoreCheck=function(V){return Br&&V.type==="touchmove"&&R()||g>1.05&&V.type!=="touchstart"||a.isGesturing||V.touches&&V.touches.length>1},t.onPress=function(){x=!1;var V=g;g=Ta((de.visualViewport&&de.visualViewport.scale||1)/_),N.pause(),V!==g&&_h(u,g>1.01?!0:n?!1:"x"),P=p(),z=c(),y(),M=Is},t.onRelease=t.onGestureStart=function(V,W){if(c.offset&&v(),!W)H.restart(!0);else{pe.cache++;var et=S(),L,it;n&&(L=p(),it=L+et*.05*-V.velocityX/.227,et*=Km(p,L,it,Ki(u,kn)),N.vars.scrollX=D(it)),L=c(),it=L+et*.05*-V.velocityY/.227,et*=Km(c,L,it,Ki(u,an)),N.vars.scrollY=w(it),N.invalidate().duration(et).play(.01),(Br&&N.vars.scrollY>=l||L>=l-1)&&Ot.to({},{onUpdate:I,duration:et})}o&&o(V)},t.onWheel=function(){N._ts&&N.pause(),An()-m>1e3&&(M=0,m=An())},t.onChange=function(V,W,et,L,it){if(Is!==M&&y(),W&&n&&p(D(L[2]===W?P+(V.startX-V.x):p()+W-L[1])),et){c.offset&&v();var Tt=it[2]===et,zt=Tt?z+V.startY-V.y:c()+et-it[1],j=w(zt);Tt&&zt!==j&&(z+=j-zt),c(j)}(et||W)&&Sr()},t.onEnable=function(){_h(u,n?!1:"x"),me.addEventListener("refresh",I),fn(de,"resize",I),c.smooth&&(c.target.style.scrollBehavior="auto",c.smooth=p.smooth=!1),A.enable()},t.onDisable=function(){_h(u,!0),hn(de,"resize",I),me.removeEventListener("refresh",I),A.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ye(t),a.iOS=Br,Br&&!c()&&c(1),Br&&Ot.ticker.add(Xi),H=a._dc,N=Ot.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:C0(c,c(),function(){return N.pause()})},onUpdate:Sr,onComplete:H.vars.onComplete}),a};me.sort=function(r){if(bn(r))return fe.sort(r);var t=de.pageYOffset||0;return me.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+de.innerHeight}),fe.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};me.observe=function(r){return new Ye(r)};me.normalizeScroll=function(r){if(typeof r>"u")return Nn;if(r===!0&&Nn)return Nn.enable();if(r===!1){Nn&&Nn.kill(),Nn=r;return}var t=r instanceof Ye?r:IT(r);return Nn&&Nn.target===t.target&&Nn.kill(),ks(t.target)&&(Nn=t),t};me.core={_getVelocityProp:Uf,_inputObserver:R0,_scrollers:pe,_proxies:tr,bridge:{ss:function(){Ri||Vs("scrollStart"),Ri=An()},ref:function(){return Dn}}};v0()&&Ot.registerPlugin(me);/*!
 * strings: 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var UT=/(?:^\s+|\s+$)/g,NT=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function P0(r){var t=r.nodeType,e="";if(t===1||t===9||t===11){if(typeof r.textContent=="string")return r.textContent;for(r=r.firstChild;r;r=r.nextSibling)e+=P0(r)}else if(t===3||t===4)return r.nodeValue;return e}function Gf(r,t,e,n,i){for(var s=r.firstChild,o=[],a;s;)s.nodeType===3?(a=(s.nodeValue+"").replace(/^\n+/g,""),n||(a=a.replace(/\s+/g," ")),o.push.apply(o,L0(a,t,e,n,i))):(s.nodeName+"").toLowerCase()==="br"?o[o.length-1]+="<br>":o.push(s.outerHTML),s=s.nextSibling;if(!i)for(a=o.length;a--;)o[a]==="&"&&o.splice(a,1,"&amp;");return o}function L0(r,t,e,n,i){if(r+="",e&&(r=r.trim?r.trim():r.replace(UT,"")),t&&t!=="")return r.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(t);for(var s=[],o=r.length,a=0,l,u;a<o;a++)u=r.charAt(a),(u.charCodeAt(0)>=55296&&u.charCodeAt(0)<=56319||r.charCodeAt(a+1)>=65024&&r.charCodeAt(a+1)<=65039)&&(l=((r.substr(a,12).split(NT)||[])[1]||"").length||2,u=r.substr(a,l),s.emoji=1,a+=l-1),s.push(i?u:u===">"?"&gt;":u==="<"?"&lt;":n&&u===" "&&(r.charAt(a-1)===" "||r.charAt(a+1)===" ")?"&nbsp;":u);return s}/*!
 * TextPlugin 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ca,nc,OT=function(){return Ca||typeof window<"u"&&(Ca=window.gsap)&&Ca.registerPlugin&&Ca},fl={version:"3.12.7",name:"text",init:function(t,e,n){typeof e!="object"&&(e={value:e});var i=t.nodeName.toUpperCase(),s=this,o=e,a=o.newClass,l=o.oldClass,u=o.preserveSpaces,h=o.rtl,f=s.delimiter=e.delimiter||"",d=s.fillChar=e.fillChar||(e.padSpace?"&nbsp;":""),c,p,g,_,m,S,M,x;if(s.svg=t.getBBox&&(i==="TEXT"||i==="TSPAN"),!("innerHTML"in t)&&!s.svg)return!1;if(s.target=t,!("value"in e)){s.text=s.original=[""];return}for(g=Gf(t,f,!1,u,s.svg),nc||(nc=document.createElement("div")),nc.innerHTML=e.value,p=Gf(nc,f,!1,u,s.svg),s.from=n._from,(s.from||h)&&!(h&&s.from)&&(i=g,g=p,p=i),s.hasClass=!!(a||l),s.newClass=h?l:a,s.oldClass=h?a:l,i=g.length-p.length,c=i<0?g:p,i<0&&(i=-i);--i>-1;)c.push(d);if(e.type==="diff"){for(_=0,m=[],S=[],M="",i=0;i<p.length;i++)x=p[i],x===g[i]?M+=x:(m[_]=M+x,S[_++]=M+g[i],M="");p=m,g=S,M&&(p.push(M),g.push(M))}e.speed&&n.duration(Math.min(.05/e.speed*c.length,e.maxDuration||9999)),s.rtl=h,s.original=g,s.text=p,s._props.push("text")},render:function(t,e){t>1?t=1:t<0&&(t=0),e.from&&(t=1-t);var n=e.text,i=e.hasClass,s=e.newClass,o=e.oldClass,a=e.delimiter,l=e.target,u=e.fillChar,h=e.original,f=e.rtl,d=n.length,c=(f?1-t:t)*d+.5|0,p,g,_;i&&t?(p=s&&c,g=o&&c!==d,_=(p?"<span class='"+s+"'>":"")+n.slice(0,c).join(a)+(p?"</span>":"")+(g?"<span class='"+o+"'>":"")+a+h.slice(c).join(a)+(g?"</span>":"")):_=n.slice(0,c).join(a)+a+h.slice(c).join(a),e.svg?l.textContent=_:l.innerHTML=u==="&nbsp;"&&~_.indexOf("  ")?_.split("  ").join("&nbsp;&nbsp;"):_}};fl.splitInnerHTML=Gf;fl.emojiSafeSplit=L0;fl.getText=P0;OT()&&Ca.registerPlugin(fl);Ve.registerPlugin(ea);Ve.registerPlugin(me);Ve.registerPlugin(fl);let ic=0,Wf=!1,hi="home",rc=hi;function BT(){const r=navigator.userAgent.toLowerCase();return/android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(r)}if(BT()){const r=document.getElementById("mobile-warning");r.style.display="flex",document.getElementById("acknowledge-btn").addEventListener("click",()=>{r.style.display="none"})}function zT(){const r=document.createElement("canvas");r.classList.add("intro-canvas"),document.getElementById("intro-screen").appendChild(r);const t=new nd,e=new qn(75,window.innerWidth/window.innerHeight,.1,1e3),n=new Z_({canvas:r,antialias:!0});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.background=new qt("#000");const i=[],s=new $_(e,n.domElement);s.enableDamping=!0,s.dampingFactor=.05;const o=new H_,a=new Nt;let l=null,u=!1;const h=new fr,f=new B;function d(P,z,H,I,V){const W=new Ar(P,P,P),et=new Zn({color:z,transparent:!0,opacity:.7}),L=new Oe(W,et);return L.position.set(H,I,V),t.add(L),L}function c(P,z,H,I,V){const W=new Tr(P,24,24),et=new Zn({color:z,transparent:!0,opacity:.7}),L=new Oe(W,et);return L.position.set(H,I,V),t.add(L),L}function p(P,z,H,I,V,W){const et=new ad(P,z,16),L=new Zn({color:H,transparent:!0,opacity:.7}),it=new Oe(et,L);return it.position.set(I,V,W),t.add(it),it}function g(P,z,H,I,V,W){const et=new ul(P,z,16,32),L=new Zn({color:H,transparent:!0,opacity:.7}),it=new Oe(et,L);return it.position.set(I,V,W),t.add(it),it}function _(P,z,H,I,V){const W=new cd(P),et=new Zn({color:z,transparent:!0,opacity:.7}),L=new Oe(W,et);return L.position.set(H,I,V),t.add(L),L}const m=[16335172,15954476,16291358,16369487,9485933,4434571,5731728,2588065],S=160,M=80;for(let P=0;P<S;P++){const z=M-P*M/S,H=Math.cos(P)*z,I=Math.sin(P)*z,V=-100+P*1.5,W=Math.floor(Math.random()*5),et=m[Math.floor(Math.random()*m.length)],L=1+Math.random()*2;let it;switch(W){case 0:it=d(L,et,H,I,V);break;case 1:it=c(L,et,H,I,V);break;case 2:it=p(L,L*2,et,H,I,V);break;case 3:it=g(L,L*.3,et,H,I,V);break;case 4:it=_(L,et,H,I,V);break}it.rotation.x=Math.random()*Math.PI*2,it.rotation.y=Math.random()*Math.PI*2,it.rotation.z=Math.random()*Math.PI*2,it.userData.isDraggable=!0,i.push({mesh:it,initialX:H,initialY:I,initialZ:V,rotationSpeed:{x:(Math.random()-.5)*.03,y:(Math.random()-.5)*.03,z:(Math.random()-.5)*.03},moveSpeed:Math.random(),explosionDirection:new B((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2).normalize(),explosionSpeed:.75+Math.random(),isExploded:!1})}const x=new fd(16777215,.5);t.add(x),e.position.z=30;const A=document.querySelector(".intro-title");Ve.to(A,{opacity:1,duration:1.5,delay:1,ease:"power2.out"});let b=0,D=!1;function w(P){a.x=P.clientX/window.innerWidth*2-1,a.y=-(P.clientY/window.innerHeight)*2+1,performance.now()/1e3,o.setFromCamera(a,e);const z=o.intersectObjects(t.children);if(z.length>0){for(let H=0;H<z.length;H++)if(z[H].object.userData.isDraggable){s.enabled=!1,l=z[H].object,u=!0,h.setFromNormalAndCoplanarPoint(e.getWorldDirection(h.normal).negate(),l.position);const I=new B;o.ray.intersectPlane(h,I),f.copy(l.position).sub(I),l.userData.originalColor=l.material.color.clone(),l.material.color.set(16776960),l.material.opacity=.9;break}}}function y(P){if(u&&l){const z=n.domElement.getBoundingClientRect();a.x=(P.clientX-z.left)/z.width*2-1,a.y=-((P.clientY-z.top)/z.height)*2+1,o.setFromCamera(a,e);const H=new B;o.ray.intersectPlane(h,H)&&l.position.copy(H.add(f))}}function v(){u&&l&&(l.userData.originalColor&&l.material.color.copy(l.userData.originalColor),s.enabled=!0,u=!1,l=null)}n.domElement.addEventListener("mousedown",w),window.addEventListener("mousemove",y),window.addEventListener("mouseup",v);function R(){b+=.01,requestAnimationFrame(R),s.update(),Wf?Wf&&!D?(b>20&&u&&i.forEach(I=>{I.explosionDirection=new B((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2).normalize(),I.explosionSpeed=.75+Math.random(),I.mesh.position.set(I.mesh.position.x*.5,I.mesh.position.y*.5,I.mesh.position.z*.5)}),i.forEach(I=>{u&&l===I.mesh||(I.mesh.position.x+=I.explosionDirection.x*I.explosionSpeed,I.mesh.position.y+=I.explosionDirection.y*I.explosionSpeed,I.mesh.position.z+=I.explosionDirection.z*I.explosionSpeed,I.explosionDirection.y-=.01,I.explosionSpeed=Math.max(I.explosionSpeed*.99,.4),I.explosionSpeed+=.01,I.mesh.rotation.x+=I.rotationSpeed.x*2,I.mesh.rotation.y+=I.rotationSpeed.y*2,I.mesh.rotation.z+=I.rotationSpeed.z*2,I.mesh.material.opacity<.7&&(I.mesh.material.opacity+=.02),I.mesh.scale.x<1&&(I.mesh.scale.x*=1.02,I.mesh.scale.y*=1.02,I.mesh.scale.z*=1.02))}),b>300&&(D=!0)):D&&i.forEach(P=>{(!u||l!==P.mesh)&&(P.mesh.rotation.x+=P.rotationSpeed.x*.5,P.mesh.rotation.y+=P.rotationSpeed.y*.5,P.mesh.rotation.z+=P.rotationSpeed.z*.5,P.mesh.position.y-=.01,P.mesh.position.x+=Math.sin(b+P.initialX)*.01,P.mesh.position.z+=Math.cos(b+P.initialZ)*.01)}):i.forEach(z=>{z.mesh.rotation.x+=z.rotationSpeed.x,z.mesh.rotation.y+=z.rotationSpeed.y,z.mesh.rotation.z+=z.rotationSpeed.z;const H=0,I=0,V=0;z.mesh.position.x+=(H-z.mesh.position.x)*.035,z.mesh.position.y+=(I-z.mesh.position.y)*.035,z.mesh.position.z+=(V-z.mesh.position.z)*.035;const W=z.mesh.position.distanceTo(new B(0,0,0)),et=Math.max(.1,1-(1-W/100)*.8);z.mesh.scale.set(et,et,et),z.mesh.material.opacity=Math.max(.3,.7-(1-W/100)*3)}),n.render(t,e)}window.addEventListener("load",()=>{setTimeout(R,1500)});function N(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",N)}function kT(){Wf=!0}document.getElementById("intro-screen").addEventListener("click",()=>{kT(),setTimeout(()=>{HT(),Ve.to("#intro-screen",{opacity:0,duration:1,ease:"power2.inOut",onComplete:()=>{document.getElementById("intro-screen").style.display="none",document.getElementById("bg").style.opacity="0"}})},1500)});function HT(){const r=document.createElement("div");r.id="text-transition",r.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
  `;const t=document.createElement("div");t.className="glow-text",t.textContent="",t.style.cssText=`
    color: white;
    font-weight: bold;
    opacity: 0;
    text-shadow: 0 0 5px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff;
    transition: opacity 0.8s ease;
  `,r.appendChild(t),document.body.appendChild(r);const e=document.createElement("style");e.innerHTML=`
  .glow-text {
    font-size: 4vw;
    text-shadow: 0 0 6px #fff, 0 0 12px #fff, 0 0 18px #fff;
  }
  @media (max-width: 1024px) {
    .glow-text {
      font-size: 6vw;
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
    }
  }
  @media (max-width: 600px) {
    .glow-text {
      font-size: 8vw;
      text-shadow: 0 0 12px #fff, 0 0 24px #fff, 0 0 36px #fff;
    }
  }
`,document.head.appendChild(e);class n{constructor(s){this.el=s,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}setText(s){const o=this.el.innerText,a=Math.max(o.length,s.length),l=new Promise(u=>this.resolve=u);this.queue=[];for(let u=0;u<a;u++){const h=o[u]||"",f=s[u]||"",d=Math.floor(Math.random()*40),c=d+Math.floor(Math.random()*40);this.queue.push({from:h,to:f,start:d,end:c})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),l}update(){let s="",o=0;for(let a=0,l=this.queue.length;a<l;a++){let{from:u,to:h,start:f,end:d,char:c}=this.queue[a];this.frame>=d?(o++,s+=h):this.frame>=f?((!c||Math.random()<.28)&&(c=this.randomChar(),this.queue[a].char=c),s+=`<span class="dud">${c}</span>`):s+=u}this.el.innerHTML=s,o===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}Ve.to(r,{opacity:1,duration:.5}),setTimeout(()=>{Ve.to(t,{opacity:1,duration:.8,ease:"power2.inOut",onComplete:()=>{new n(t).setText("Hello World").then(()=>{setTimeout(()=>{new n(t).setText("").then(()=>{Ve.to(t,{opacity:0,duration:.8,ease:"power2.inOut",onComplete:()=>{Ve.to(r,{opacity:0,duration:1.5,ease:"power2.inOut",onComplete:()=>{r.remove(),e.remove(),Ve.to("#bg",{opacity:1,duration:1,ease:"power2.inOut"}),typeof r_=="function"&&r_(),typeof gn=="function"&&gn(0),typeof qa=="function"&&qa!==window.animate&&qa(),document.querySelector(".nav-menu").addEventListener("wheel",a=>{a.preventDefault()},{passive:!1})}})}})})},1500)})}})},400)}const F0=document.createElement("style");F0.textContent=`
  .glow-text {
    font-family: 'Arial', sans-serif;
    letter-spacing: 0.05em;
  }
  .dud {
    color: #fff !important;
    text-shadow: 0 0 6px #fff, 0 0 12px #fff, 0 0 18px #fff !important;
  }
`;document.head.appendChild(F0);document.addEventListener("DOMContentLoaded",()=>{document.getElementById("bg").style.opacity="0",zT()});const Qe=new nd,Gd=new nd,VT=new fd(16777215,15);Gd.add(VT);const Ue=new qn(75,window.innerWidth/window.innerHeight,.1,1e3),fi=new Z_({canvas:document.querySelector("#bg"),antialias:!0});fi.setPixelRatio(window.devicePixelRatio);fi.setSize(window.innerWidth,window.innerHeight);fi.shadowMap.enabled=!0;fi.shadowMap.type=h_;const al=new $_(Ue,fi.domElement);al.enableDamping=!0;al.enableZoom=!1;al.enablePan=!1;const GT=new ul(10,3,64,128),Xn=new B_({color:12187,transmission:.85,thickness:3,roughness:.1,metalness:0,ior:1.5,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1,emissive:0,emissiveIntensity:0}),Et=new Oe(GT,Xn);Et.castShadow=!0;Et.receiveShadow=!0;Qe.add(Et);const Ac=[];function WT(){const r=new Zn({color:16777215,transparent:!0,opacity:1,blending:Rc,depthWrite:!1}),t=new Oe(new Tr(.2,6,6),r),e=(Math.random()-.5)*150,n=(Math.random()-.5)*150;t.position.set(e,n,-125),t.userData.velocity=new B((Math.random()-.5)*.3,(Math.random()-.5)*.3,2+Math.random()*1),t.userData.opacity=1,t.userData.trailPoints=[t.position.clone()],t.userData.trailMesh=null,Qe.add(t),Ac.push(t),setTimeout(()=>{Qe.remove(t),t.userData.trailMesh&&Qe.remove(t.userData.trailMesh),Ac.splice(Ac.indexOf(t),1)},5e3)}setInterval(()=>{Math.random()<.3&&WT()},500);function XT(r){Ac.forEach(t=>{if(t.position.addScaledVector(t.userData.velocity,r*30),t.userData.trailPoints.push(t.position.clone()),t.userData.trailPoints.length>30&&t.userData.trailPoints.shift(),t.userData.opacity-=r*.2,t.material.opacity=Math.max(0,t.userData.opacity),t.userData.trailMesh&&Qe.remove(t.userData.trailMesh),t.userData.trailPoints.length>=3){const e=new U_(t.userData.trailPoints),n=new ud(e,16,.05,4,!1),i=new Zn({color:16777215,transparent:!0,opacity:Math.max(0,t.userData.opacity*.6)}),s=new Oe(n,i);t.userData.trailMesh=s,Qe.add(s)}})}const Wd=new Pn,Xd=500,Tc=new Float32Array(Xd*3),bc=new Float32Array(Xd*3);function I0(){const r=[new qt(4005376),new qt(16777215),new qt(8592037),new qt(2059130)];return r[Math.floor(Math.random()*r.length)]}for(let r=0;r<Xd;r++){const t=(Math.random()-.5)*200,e=(Math.random()-.5)*200,n=(Math.random()-.5)*200;Tc[r*3+0]=t,Tc[r*3+1]=e,Tc[r*3+2]=n;const i=I0();bc[r*3+0]=i.r,bc[r*3+1]=i.g,bc[r*3+2]=i.b}Wd.setAttribute("position",new Hn(Tc,3));Wd.setAttribute("color",new Hn(bc,3));const YT=new iu({size:.15,vertexColors:!0}),U0=new rd(Wd,YT);Qe.add(U0);const Yd=new Pn,qc=400,t_=50,wc=new Float32Array(qc*3),Cc=new Float32Array(qc*3);for(let r=0;r<qc;r++){const t=r/qc*Math.PI*2,e=t_*Math.cos(t),n=t_*Math.sin(t),i=(Math.random()-.5)*10;wc[r*3+0]=e,wc[r*3+1]=i,wc[r*3+2]=n;const s=I0();Cc[r*3+0]=s.r,Cc[r*3+1]=s.g,Cc[r*3+2]=s.b}Yd.setAttribute("position",new Hn(wc,3));Yd.setAttribute("color",new Hn(Cc,3));const qT=new iu({size:.2,vertexColors:!0}),Zc=new rd(Yd,qT);Qe.add(Zc);function N0(){requestAnimationFrame(N0),Zc.rotation.y+=25e-5,U0.rotation.y+=25e-5,fi.render(Qe,Ue)}N0();const ZT=new fd(4210752,2);Qe.add(ZT);const _i=new k_(13184245,500);_i.position.set(20,20,20);_i.distance=100;_i.decay=2;_i.castShadow=!0;_i.shadow.mapSize.width=1024;_i.shadow.mapSize.height=1024;_i.shadow.radius=2;_i.shadow.bias=-.001;Qe.add(_i);const gi=new k_(2960629,400);gi.position.set(-20,15,-20);gi.distance=100;gi.decay=2;gi.castShadow=!0;gi.shadow.mapSize.width=1024;gi.shadow.mapSize.height=1024;gi.shadow.radius=2;gi.shadow.bias=-.001;Qe.add(gi);const jT=new V_(_i,1);Qe.add(jT);const $T=new V_(gi,1);Qe.add($T);Ue.position.set(0,0,30);const mo={home:{cameraZ:200,cameraX:0,cameraY:0,cameraRotationY:0,donutScale:.5,donutRotation:{x:0,y:0,z:0},donutPosition:{x:0,y:0,z:0}},about:{cameraZ:75,cameraX:0,cameraY:0,cameraRotationY:0,donutScale:1,donutRotation:{x:Math.PI/4,y:Math.PI/4,z:0},donutPosition:{x:-5,y:3,z:0}},projects:{cameraZ:250,cameraY:-200,cameraX:0,cameraRotationY:0,donutScale:.3,donutRotation:{x:Math.PI/2,y:Math.PI/3,z:Math.PI/6},donutPosition:{x:0,y:50,z:0}}};function lr(r){return r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2}function sc(r){return Math.pow(2,-10*r)*Math.sin((r-.3/4)*(2*Math.PI)/.3)+1}function Ui(r,t,e,n){return r+(t-r)*n(e)}const KT=new Iv;function qd(){const t=new Tr(.05,8,6),e=new O_({emissive:16777215,emissiveIntensity:1,metalness:.3,roughness:.2,vertexColors:!0}),n=new hv(t,e,1500),i=[new qt(16711680),new qt(255),new qt(8592037),new qt(16777215)],s=new pn,o=[];for(let a=0;a<1500;a++){let l,u,h,f,d,c;do l=30+Math.random()*150,u=Math.random()*Math.PI*2,h=Math.random()*Math.PI,f=l*Math.sin(h)*Math.cos(u),d=l*Math.sin(h)*Math.sin(u),c=l*Math.cos(h);while(c>=-10);s.position.set(f,d,c);const p=.5+Math.random()*1.5;s.scale.set(p,p,p),s.updateMatrix(),n.setMatrixAt(a,s.matrix),o.push({position:{x:f,y:d,z:c},originalScale:p,twinkleSpeed:.5+Math.random()*2,twinklePhase:Math.random()*Math.PI*2,colorIndex:Math.floor(Math.random()*i.length),colorTransitionSpeed:.2+Math.random()*.8}),n.setColorAt(a,i[o[a].colorIndex])}return n.instanceColor=new lf(new Float32Array(1500*3),3),n.geometry.setAttribute("instanceColor",n.instanceColor),Qe.add(n),{mesh:n,properties:o,colors:i}}qd();const{mesh:ma}=qd();function e_(r,t){const{mesh:e,properties:n,colors:i}=r,s=new pn,o=new qt;for(let a=0;a<n.length;a++){const l=n[a];s.position.set(l.position.x,l.position.y,l.position.z);const u=.3*Math.sin(t*l.twinkleSpeed+l.twinklePhase)+.7,h=l.originalScale*u;s.scale.set(h,h,h),s.updateMatrix(),e.setMatrixAt(a,s.matrix),Math.random()<.005&&(l.colorIndex=(l.colorIndex+1)%i.length);const f=i[l.colorIndex];o.copy(f);const d=.7+.3*Math.sin(t*l.twinkleSpeed*1.3+l.twinklePhase);o.multiplyScalar(d),e.setColorAt(a,o)}e.instanceMatrix.needsUpdate=!0,e.instanceColor.needsUpdate=!0}function JT(){const r=performance.now()*.001;if(ma.material.userData.glowShader){ma.material.userData.glowShader.uniforms.time.value=r;return}const t={uniforms:{time:{value:r}},vertexShader:`
      varying vec3 vPosition;
      
      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float time;
      varying vec3 vPosition;
      
      void main() {
        vec3 baseColor = gl_FragColor.rgb;
        float glowIntensity = sin(time * 8.0 + vPosition.x * 0.1) * 0.5 + 0.5;
        gl_FragColor.rgb = baseColor * (glowIntensity * 2.0 + 0.5);
      }
    `};ma.material.onBeforeCompile=e=>{e.uniforms.time=t.uniforms.time,e.vertexShader=t.vertexShader,e.fragmentShader=t.fragmentShader,ma.material.userData.glowShader=e},ma.material.needsUpdate=!0}const n_=JT;function gh(r,t=2.5){const e=performance.now(),n=Ue.position.z,i=Ue.position.x,s=Ue.position.y,o=Ue.rotation.y,a=Et.scale.x,l={x:Et.rotation.x,y:Et.rotation.y,z:Et.rotation.z},u={x:Et.position.x,y:Et.position.y,z:Et.position.z};function h(f){const d=(f-e)/1e3;let c=Math.min(d/t,1);const p=lr(c),g=sc(c);Ue.position.z=Ui(n,r.cameraZ,p,lr),Ue.position.x=Ui(i,r.cameraX,p,lr),Ue.position.y=Ui(s,r.cameraY,p,lr),Ue.rotation.y=Ui(o,r.cameraRotationY,p,lr);const _=Ui(a,r.donutScale,c,sc);Et.scale.set(_,_,_),Et.rotation.x=Ui(l.x,r.donutRotation.x,p,lr),Et.rotation.y=Ui(l.y,r.donutRotation.y,p,lr),Et.rotation.z=Ui(l.z,r.donutRotation.z,p,lr),Et.position.x=Ui(u.x,r.donutPosition.x,g,sc),Et.position.y=Ui(u.y,r.donutPosition.y,g,sc),Et.position.z=Ui(u.z,r.donutPosition.z,p,lr),c<1&&requestAnimationFrame(h)}requestAnimationFrame(h)}let ai=!1;const QT=1500;let dn=0;const Er=document.querySelectorAll(".section");function O0(r){if(ai&&r.cancelable)return r.preventDefault(),r.stopPropagation(),!1}function tb(){const r=document.getElementById("projects");if(!r)return;new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&dn!==2&&n.intersectionRatio>.1&&gn(2)})},{threshold:[.4]}).observe(r)}tb();let i_=0;const eb=1e3;function nb(){const r=document.getElementById("projects-2d-container");if(!r)return;const t=e=>{const n=Date.now();if(n-i_<eb)return;i_=n;const i=e.deltaY>0?"down":"up";i==="up"&&dn>0?gn(dn-1):i==="down"&&dn<Er.length-1&&gn(dn+1)};r.addEventListener("wheel",t,{passive:!1}),r._removeScrollHandler=()=>{r.removeEventListener("wheel",t)}}const dl=document.querySelector(".sections");dl.addEventListener("wheel",O0,{passive:!1});dl.addEventListener("touchmove",O0,{passive:!1});document.addEventListener("wheel",r=>{$d()||ai||(r.preventDefault(),r.deltaY>0?gn(dn+1):gn(dn-1))},{passive:!1});document.addEventListener("touchstart",Zd,{passive:!0});document.addEventListener("touchend",jd,{passive:!0});function gn(r){if(ai||r<0||r>=Er.length)return;ai=!0,dn=r,document.querySelectorAll(".nav-item").forEach((n,i)=>{i===r?n.classList.add("active"):n.classList.remove("active")}),Er[r].scrollIntoView({behavior:"smooth"});const e=Er[r].id;hi=e,rc!==hi&&((rc=="home"&&hi=="about"||rc=="about"&&hi=="home")&&rb(()=>{const n=ai;ai=!1,gn(r),ai=n}),rc=hi),e==="projects"?(mo[e]&&gh(mo[e]),setTimeout(()=>{const n=document.getElementById("projects-2d-container");n&&(n.classList.add("visible"),nb(),setTimeout(()=>{document.getElementById("bg").style.opacity="0"},800))},1e3)):document.getElementById("projects-2d-container").classList.contains("visible")?(document.getElementById("projects-2d-container").classList.remove("visible"),document.getElementById("bg").style.opacity="1",mo[e]&&setTimeout(()=>{gh(mo[e])},500)):mo[e]&&gh(mo[e]),ib(e),setTimeout(()=>{ai=!1},QT)}let xh=null;function ib(r){xh&&cancelAnimationFrame(xh);const t=.005,e=.2;let n=0;function i(){switch(n+=.01,r){case"home":Et.rotation.y+=t,Et.position.y=Math.sin(n)*e,Qe.background=new qt(16777215),Xn.color=new qt(13183232),hi="home";break;case"about":Et.rotation.x+=t*.8,Et.rotation.z+=t*.3,Et.position.x=Math.sin(n*1.2)*e,Qe.background=new qt(131607),Xn.color=new qt(12187),Xn.transmission=.85,Xn.thickness=3,Xn.roughness=.1,Xn.metalness=0,Xn.ior=1.5,Xn.clearcoat=1,Xn.clearcoatRoughness=.05,Xn.envMapIntensity=1,Xn.emissive=new qt(0),Xn.emissiveIntensity=0,hi="about";break;case"projects":Et.rotation.z+=t*1.2,Et.position.y=Math.sin(n*.8)*e*1.5,Et.position.x=Math.cos(n*.5)*e,Qe.background=new qt(32),Xn.color=new qt(12187),hi="projects";break}xh=requestAnimationFrame(i)}i()}function r_(){const r=document.createElement("div");r.className="nav-menu",[{id:"home",label:"Welcome"},{id:"about",label:"About"},{id:"projects",label:"Projects"}].forEach((n,i)=>{const s=document.createElement("div");s.className="nav-item",s.textContent=n.label,s.dataset.section=n.id,i===0&&s.classList.add("active"),s.addEventListener("click",()=>{ai||gn(i)}),r.appendChild(s)}),document.body.appendChild(r);const e=document.createElement("style");e.innerHTML=`
    .nav-menu {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 30px;
      z-index: 1000;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 10px 20px;
      border-radius: 20px;
      backdrop-filter: blur(5px);
    }
    
    .nav-item {
      color: rgba(255, 255, 255, 0.7);
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      padding: 5px 0;
    }
    
    .nav-item:hover {
      color: white;
    }
    
    .nav-item:hover::after {
      width: 100%;
    }
    
    .nav-item::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: white;
      transition: width 0.3s ease;
    }
    
    .nav-item.active {
      color: white;
      font-weight: bold;
    }
    
    .nav-item.active::after {
      width: 100%;
    }
    
    @media (max-width: 768px) {
      .nav-menu {
        gap: 15px;
        padding: 8px 15px;
        top: 60px;
      }
      
      .nav-item {
        font-size: 14px;
      }
    }
  `,document.head.appendChild(e)}const B0=document.createElement("style");B0.innerHTML=`
  .transition-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease;
    perspective: 1500px;
  }
  
  .transition-container.active {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
  
  /* Horizontal doors container */
  .horizontal-doors {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000);
  }
  
  /* Vertical doors container */
  .vertical-doors {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  /* Common door styles */
  .door {
    background-color: #111;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
    transition: all 0.7s cubic-bezier(0.86, 0, 0.07, 1);
  }
  
  /* Add subtle pattern/texture to make doors more visible */
  .door::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.05) 25%, transparent 25%, 
                transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, 
                transparent 75%, transparent);
    background-size: 10px 10px;
    opacity: 0.3;
  }

  /* Horizontal doors */
  .door-left, .door-right {
    height: 100%;
    width: 0%;
  }
  
  .door-left {
    border-right: 3px solid rgba(255, 255, 255, 0.2);
  }
  
  .door-right {
    border-left: 3px solid rgba(255, 255, 255, 0.2);
  }
  
  /* Vertical doors */
  .door-top, .door-bottom {
    width: 100%;
    height: 0%;
  }
  
  .door-top {
    border-bottom: 3px solid rgba(255, 255, 255, 0.2);
  }
  
  .door-bottom {
    border-top: 3px solid rgba(255, 255, 255, 0.2);
  }
  
  /* Stage 1: Horizontal doors close */
  .transition-container.stage-1 .door-left,
  .transition-container.stage-1 .door-right {
    width: 50%;
  }
  
  /* Stage 2: Switch from horizontal to vertical */
  .transition-container.stage-2 .horizontal-doors {
    opacity: 0;
  }
  
  .transition-container.stage-2 .vertical-doors {
    opacity: 1;
  }
  
  /* Stage 2b: Vertical doors close */
  .transition-container.stage-2 .door-top,
  .transition-container.stage-2 .door-bottom {
    height: 50%;
  }
  
  /* Stage 3: Vertical doors open */
  .transition-container.stage-3 .door-top {
    height: 0%;
    transform: translateY(-20px);
    opacity: 0.7;
  }
  
  .transition-container.stage-3 .door-bottom {
    height: 0%;
    transform: translateY(20px);
    opacity: 0.7;
  }
`;document.head.appendChild(B0);const _r=document.createElement("div");_r.className="transition-container";const hu=document.createElement("div");hu.className="horizontal-doors";const jc=document.createElement("div");jc.className="door door-left";const $c=document.createElement("div");$c.className="door door-right";hu.appendChild(jc);hu.appendChild($c);const fu=document.createElement("div");fu.className="vertical-doors";const Kc=document.createElement("div");Kc.className="door door-top";const Jc=document.createElement("div");Jc.className="door door-bottom";fu.appendChild(Kc);fu.appendChild(Jc);_r.appendChild(hu);_r.appendChild(fu);document.body.appendChild(_r);function rb(r){ai=!0;const t=Er[dn].id,e=Er[dn===0?1:0].id;sb(t,e),_r.classList.add("active"),setTimeout(()=>{vh("close"),_r.classList.add("stage-1"),setTimeout(()=>{vh("flip"),_r.classList.add("stage-2"),setTimeout(()=>{r(),setTimeout(()=>{vh("open"),_r.classList.add("stage-3"),setTimeout(()=>{_r.classList.remove("active","stage-1","stage-2","stage-3"),ai=!1},700)},600)},400)},700)},100)}function sb(r,t){let e="#111";r==="home"&&t==="about"?e="#020217":r==="about"&&t==="home"&&(e="#333"),jc.style.backgroundColor=e,$c.style.backgroundColor=e,Kc.style.backgroundColor=e,Jc.style.backgroundColor=e;const n=`0 0 30px ${e}`;jc.style.boxShadow=n,$c.style.boxShadow=n,Kc.style.boxShadow=n,Jc.style.boxShadow=n}function vh(r){window.transitionAudio||(window.transitionAudio={close:new Audio,flip:new Audio,open:new Audio},window.transitionAudio.close.volume=.2,window.transitionAudio.flip.volume=.15,window.transitionAudio.open.volume=.2,window.transitionAudio.close.src="data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAAbAAqqqq39/f39/f39/f39/f39/MzMzMzMzMzMzMzMzMzJmZmZmZmZmZmZmZmZmZZmZmZmZmZmZmZmZmZmYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4zLAAAALv0lEQXAAAArUQZJQRUYmP8eQAQDgOIAAAOAAAgDAMYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMYxjGP/4zjAAAALWkNDTlYAAAA7QZJhRVYmP8eWAEBgOIAAAOFAEAYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMY//jKMAxIACuQZJSRUYmP8eYAIAAAJAAAJAAQBgAAAAAAAAAAAP/4xjAAQAANkGScUVWJj/HmACAAACQAACQAEAYAAAAAAAAAAAD/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAAbAAqqqq39/f39/f39/f39/f39/MzMzMzMzMzMzMzMzMzJmZmZmZmZmZmZmZmZmZZmZmZmZmZmZmZmZmZmYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/47jAAAALkklEQXAAAAEAQBAAA///YAAAAP83AAAQRMm0",window.transitionAudio.flip.src="data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAAbAAqqqq39/f39/f39/f39/f39/MzMzMzMzMzMzMzMzMzJmZmZmZmZmZmZmZmZmZZmZmZmZmZmZmZmZmZmYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4zjAAAALWkNDTlYAAAA7QZJhRVYmP8eWAEBgOIAAAOFAEAYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMY",window.transitionAudio.open.src="data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAAbAAqqqq39/f39/f39/f39/f39/MzMzMzMzMzMzMzMzMzJmZmZmZmZmZmZmZmZmZZmZmZmZmZmZmZmZmZmYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/47jAAAALkklEQXAAAAEAQBAAA///YAAAAP83AAAQBMH0"),window.transitionAudio[r]&&(window.transitionAudio[r].currentTime=0,window.transitionAudio[r].play().catch(t=>{console.log(`Audio '${r}' couldn't play - this is normal on first page load`)}))}document.addEventListener("keydown",r=>{r.key==="ArrowDown"||r.key==="PageDown"?gn(dn+1):(r.key==="ArrowUp"||r.key==="PageUp")&&gn(dn-1)});dl.addEventListener("wheel",r=>{$d()||ai||(r.preventDefault(),r.deltaY>0?gn(dn+1):gn(dn-1))},{passive:!1});let z0=0;function Zd(r){z0=r.changedTouches[0].clientY}function jd(r){const t=r.changedTouches[0].clientY,e=z0-t;if(Math.abs(e)>50&&!ai){if($d())return;e>0?gn(dn+1):gn(dn-1)}}function $d(){const r=document.getElementById("projects-2d-container");return hi==="projects"&&r&&r.classList.contains("visible")&&r.scrollTop>0}dl.addEventListener("touchstart",Zd,{passive:!0});dl.addEventListener("touchend",jd,{passive:!1});const yh=document.getElementById("projects-2d-container");yh&&(yh.addEventListener("touchstart",Zd,{passive:!0}),yh.addEventListener("touchend",jd,{passive:!1}));function s_(){Zc.rotation.x+=5e-4,Zc.rotation.y+=3e-4}function o_(r){const t=.8+Math.sin(r*.5)*.2;_i.intensity=500+t*200,gi.intensity=300+(1-t)*200,_i.position.x=20*Math.cos(r*.1),_i.position.z=20*Math.sin(r*.1),gi.position.x=-20*Math.cos(r*.15),gi.position.z=-20*Math.sin(r*.15)}const a_=qd();window.addEventListener("resize",()=>{Ue.aspect=window.innerWidth/window.innerHeight,Ue.updateProjectionMatrix(),fi.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".btn").forEach(e=>{e.addEventListener("click",function(n){n.preventDefault();const i=this.getAttribute("href").substring(1),s=Array.from(Er).findIndex(o=>o.id===i);s!==-1&&gn(s)})}),document.querySelectorAll(".social-link").forEach(e=>{e.addEventListener("click",function(n){if(this.getAttribute("href").startsWith("#")){n.preventDefault();const i=this.getAttribute("href").substring(1),s=Array.from(Er).findIndex(o=>o.id===i);s!==-1&&gn(s)}})})});const ob=KT.load("JS.png");function ab(){const r=[];function t(d){let c;d.useBox?c=new Ar(d.size,d.size,d.size):c=new Tr(d.size/2,32,32);const p=d.texture?new Zn({map:d.texture,transparent:!0,side:zi}):new B_({color:d.color||16777215,roughness:.4,metalness:.7,side:zi}),g=new Oe(c,p),_=d.useBox?new Ar(d.size*1.1,d.size*1.1,d.size*1.1):new Tr(d.size/2*1.1,32,32),m=new Zn({color:16777215,side:yn,transparent:!0,opacity:0}),S=new Oe(_,m);g.add(S),g.userData.outlineMesh=S,g.userData={...g.userData,...d};const M=new Pn,x=1e3,A=[];if(d.useBox){d.size/2;for(let z=0;z<x;z++){const H=Math.random()*Math.PI*2,I=Math.acos(Math.random()*2-1),V=d.size/2*Math.cbrt(Math.random());A.push(V*Math.sin(I)*Math.cos(H),V*Math.sin(I)*Math.sin(H),V*Math.cos(I))}}else for(let z=0;z<x;z++){const H=Math.random()*Math.PI*2,I=Math.acos(Math.random()*2-1),V=d.size/2*Math.cbrt(Math.random());A.push(V*Math.sin(I)*Math.cos(H),V*Math.sin(I)*Math.sin(H),V*Math.cos(I))}const b=[];if(d.useBox)for(let z=0;z<x;z++){const H=d.size/2,I=Math.floor(Math.random()*6);let V,W,et;switch(I){case 0:V=H,W=(Math.random()*2-1)*H,et=(Math.random()*2-1)*H;break;case 1:V=-H,W=(Math.random()*2-1)*H,et=(Math.random()*2-1)*H;break;case 2:V=(Math.random()*2-1)*H,W=H,et=(Math.random()*2-1)*H;break;case 3:V=(Math.random()*2-1)*H,W=-H,et=(Math.random()*2-1)*H;break;case 4:V=(Math.random()*2-1)*H,W=(Math.random()*2-1)*H,et=H;break;case 5:V=(Math.random()*2-1)*H,W=(Math.random()*2-1)*H,et=-H;break}b.push(V,W,et)}else for(let z=0;z<x;z++){const H=Math.random()*Math.PI*2,I=Math.acos(Math.random()*2-1),V=d.size/2;b.push(V*Math.sin(I)*Math.cos(H),V*Math.sin(I)*Math.sin(H),V*Math.cos(I))}M.setAttribute("position",new ke(A,3));const D=d.color||(d.texture?16776960:65535),w=new iu({color:D,size:.15,transparent:!0,opacity:.8,blending:Rc,depthWrite:!1}),y=new rd(M,w);y.userData.originalPositions=[...A],y.userData.targetPositions=b,y.userData.currentState="sphere",y.userData.animating=!1;const v=new pn;Gd.add(v);const R=d.orbitPhase||0,N=Math.cos(R)*d.orbitRadius,P=Math.sin(R)*d.orbitRadius;return g.position.set(N,0,P),y.position.set(N,0,P),v.add(g),v.add(y),g.visible=!1,y.visible=!0,g.userData.pointCloud=y,g.userData.pivot=v,y.userData.planet=g,y.userData.pivot=v,g}const n=t({name:"JS",size:5,texture:ob,orbitRadius:25,orbitSpeed:.09,orbitPhase:0,orbitTilt:.1,info:"2 Years of Javascript Working Experience",useBox:!0});r.push(n);const i={name:"Mom Star",size:3,color:8781711,orbitRadius:30,orbitSpeed:.13,orbitPhase:Math.PI/3,orbitTilt:.2,info:"Farmer!!!!!",useBox:!0},s=t(i);r.push(s);const o={name:"No clue",size:4,color:9485933,orbitRadius:25,orbitSpeed:.06,orbitPhase:Math.PI/2,orbitTilt:3.15,info:"No clue",useBox:!0},a=t(o);r.push(a);const u=t({name:"No clue",size:6,color:5731728,orbitRadius:40,orbitSpeed:.03,orbitPhase:Math.PI,orbitTilt:.3,info:"No clue",useBox:!0});r.push(u);const h={name:"No clue",size:3.5,color:4434571,orbitRadius:45,orbitSpeed:.11,orbitPhase:Math.PI*1.5,orbitTilt:.25,info:"No clue",useBox:!0},f=t(h);return r.push(f),r}const mn=ab();function k0(r,t,e=1.5){if(r.userData.animating)return;r.userData.animating=!0;const n=r.geometry.attributes.position.array,i=r.userData.originalPositions,s=r.userData.targetPositions,o=[...n],a=t==="shape"?s:i,l=[],u=[];for(let f=0;f<n.length;f+=3){const d=Math.random()*15+15;u.push(d);const c=Math.random()*Math.PI*2,p=Math.acos(Math.random()*2-1);l.push(Math.sin(p)*Math.cos(c),Math.sin(p)*Math.sin(c),Math.cos(p))}const h=Ve.timeline({onComplete:()=>{r.userData.currentState=t,r.userData.animating=!1,r.userData.planet&&(r.userData.planet.visible=t==="shape",t==="shape"?Ve.fromTo(r.material,{opacity:.8},{opacity:0,duration:.5}):Ve.fromTo(r.material,{opacity:0},{opacity:.8,duration:.5}))}});return h.to({},{duration:e,ease:"power2.inOut",onUpdate:function(){const f=this.progress(),d=f<.4?1-Math.pow(1-f/.4,3):Math.max(0,1-(f-.4)/.6),c=f<.3?0:Math.pow((f-.3)/.7,2);for(let p=0;p<n.length;p+=3){const g=l[p]*u[p/3]*d,_=l[p+1]*u[p/3]*d,m=l[p+2]*u[p/3]*d,S=o[p]+g,M=o[p+1]+_,x=o[p+2]+m;n[p]=S*(1-c)+a[p]*c,n[p+1]=M*(1-c)+a[p+1]*c,n[p+2]=x*(1-c)+a[p+2]*c}r.geometry.attributes.position.needsUpdate=!0}}),h.to(r.material,{size:t==="shape"?.25:.15,duration:e,ease:"power2.inOut"},0),h}function lb(r){if(!r||!r.userData.pointCloud)return;const t=r.userData.pointCloud,n=t.userData.currentState==="sphere"?"shape":"sphere",i=mn.indexOf(r),s=`.sci-fi-text-box[data-id="${i}"]`;if(n==="shape"){const o=Kd("",{x:r.position.x,y:r.position.y,z:r.position.z,objectIndex:i},!1),a=`${r.userData.name}: ${r.userData.info}`;Jd(o,a),r.userData.isShowingInfo=!0}else{const o=document.querySelector(s);o&&(o.classList.remove("active"),setTimeout(()=>o.remove(),500)),r.userData.isShowingInfo=!1}k0(t,n),t.userData.currentState=n}function H0(){mn.forEach((r,t)=>{if(!r||!r.userData||!r.userData.pointCloud)return;const n=r.userData.pointCloud.userData.currentState,i=Array.from(document.querySelectorAll(`.sci-fi-text-box[data-id="${t}"]`)),s=n==="shape";i.length>1&&i.forEach(a=>{a.classList.remove("active"),setTimeout(()=>a.remove(),200)});const o=i.length===1;if(s&&!o){const a=`${r.userData.name}: ${r.userData.info}`,l=Kd("",{x:r.position.x,y:r.position.y,z:r.position.z,objectIndex:t},!1);Jd(l,a),r.userData.isShowingInfo=!0}!s&&o&&(i[0].classList.remove("active"),setTimeout(()=>i[0].remove(),200),r.userData.isShowingInfo=!1)}),setTimeout(H0,1e3)}H0();Et.userData={clickable:!0,info:"Hi, I'm Pat. I'm a person with a passion for 3D development and interactive design. Click on the orbiting planets to learn more about me.",isShowingInfo:!1};const Qc=new H_,No=new Nt,V0=document.createElement("div");V0.className="sci-fi-text-containers";document.body.appendChild(V0);function cb(){document.querySelectorAll(".sci-fi-text-box").forEach(t=>{const e=t.getAttribute("data-id");let n;if(e==="donut")n=Et;else{const i=parseInt(e);!isNaN(i)&&i>=0&&i<mn.length&&(n=mn[i])}if(n){const i=new B;n.getWorldPosition(i),i.project(Ue);const s=(i.x*.5+.5)*window.innerWidth,o=(-(i.y*.5)+.5)*window.innerHeight,a=e==="donut"?-70:-50,l=10;t.style.left=`${s+l}px`,t.style.top=`${o+a}px`;const u=Ue.position.distanceTo(n.position),f=Math.max(.6,Math.min(1,50/u));t.style.transform=`translate(-50%, -50%) scale(${f})`,t.style.opacity=Math.max(.7,Math.min(1,f))}})}function Kd(r,t,e){const n=document.createElement("div");n.className="sci-fi-text-box",n.setAttribute("data-id",e?"donut":t.objectIndex),n.innerHTML=`
    <div class="sci-fi-text-box-content">
      <div class="sci-fi-text-box-header"></div>
      <div class="sci-fi-text-box-body">${r}</div>
      <div class="sci-fi-text-box-footer"></div>
    </div>
  `;const i=n.querySelector(".sci-fi-text-box-content"),s=document.createElement("button");return s.className="sci-fi-close-btn",s.innerHTML="×",s.addEventListener("click",()=>{n.classList.remove("active"),setTimeout(()=>{n.remove()},100),e?Et.userData.isShowingInfo=!1:t.objectIndex!==null&&t.objectIndex>=0&&t.objectIndex<mn.length&&(mn[t.objectIndex].userData.isShowingInfo=!1)}),i.appendChild(s),document.body.appendChild(n),n.offsetHeight,setTimeout(()=>{n.classList.add("active")},10),n}function ub(){const r=document.createElement("div");return r.className="clickable-indicator",document.body.appendChild(r),r}const _a=ub();function hb(r){const t=document.querySelector(".section:nth-child("+(dn+1)+")");if(!t||t.id!=="about"){_a.classList.remove("visible"),[Et,...mn].forEach(o=>{o&&o.userData&&o.userData.outlineMesh&&(o.userData.outlineMesh.material.opacity=0)});return}No.x=r.clientX/window.innerWidth*2-1,No.y=-(r.clientY/window.innerHeight)*2+1,Qc.setFromCamera(No,Ue);const e=[Et,...mn].filter(s=>s!==void 0),n=Qc.intersectObjects(e);let i=null;if(n.length>0){const s=n[0].object;s&&s.userData&&s.userData.clickable&&(i=s,_a.style.left=r.clientX+"px",_a.style.top=r.clientY+"px",_a.classList.add("visible"),document.body.style.cursor="pointer",s.userData.isHighlighted||(s.userData.isHighlighted=!0,s.material&&s.material.emissive&&(s.userData.originalEmissiveIntensity=s.material.emissiveIntensity||0,Ve.to(s.material,{emissiveIntensity:Math.max(.8,s.userData.originalEmissiveIntensity*2),duration:.3})),s.userData.outlineMesh&&Ve.to(s.userData.outlineMesh.material,{opacity:.7,duration:.3}),s.userData.originalScale||(s.userData.originalScale={x:s.scale.x,y:s.scale.y,z:s.scale.z}),Ve.to(s.scale,{x:s.userData.originalScale.x*1.1,y:s.userData.originalScale.y*1.1,z:s.userData.originalScale.z*1.1,duration:.3})))}else _a.classList.remove("visible"),document.body.style.cursor="default";e.forEach(s=>{!s||s===i||s.userData&&s.userData.isHighlighted&&(s.userData.isHighlighted=!1,s.material&&s.material.emissive&&s.userData.originalEmissiveIntensity!==void 0&&Ve.to(s.material,{emissiveIntensity:s.userData.originalEmissiveIntensity,duration:.3}),s.userData.outlineMesh&&Ve.to(s.userData.outlineMesh.material,{opacity:0,duration:.3}),s.userData.originalScale||(s.userData.originalScale={x:s.scale.x,y:s.scale.y,z:s.scale.z}),Ve.to(s.scale,{x:s.userData.originalScale.x,y:s.userData.originalScale.y,z:s.userData.originalScale.z,duration:.3}))})}function fb(){if(!Et||!Et.geometry)return;const r=new ul(Et.geometry.parameters.radius*1.05,Et.geometry.parameters.tube*1.05,Et.geometry.parameters.radialSegments,Et.geometry.parameters.tubularSegments),t=new Zn({color:16777215,side:yn,transparent:!0,opacity:0}),e=new Oe(r,t);Et.add(e),Et.userData.outlineMesh=e}function db(){mn.forEach(r=>{if(!r||!r.geometry)return;let t;r.geometry.type==="SphereGeometry"?t=new Tr(r.geometry.parameters.radius*1.05,r.geometry.parameters.widthSegments,r.geometry.parameters.heightSegments):r.geometry.type==="BoxGeometry"?t=new Ar(r.geometry.parameters.width*1.15,r.geometry.parameters.height*1.15,r.geometry.parameters.depth*1.15):t=r.geometry.clone();const e=new Zn({color:16777215,side:yn,transparent:!0,opacity:0}),n=new Oe(t,e);r.add(n),r.userData.outlineMesh=n})}function pb(){Et&&(Et.userData.clickable=!0,Et.userData.isShowingInfo=!1,Et.userData.originalScale={x:Et.scale.x,y:Et.scale.y,z:Et.scale.z}),mn.forEach((r,t)=>{r&&(r.userData.clickable=!0,r.userData.isShowingInfo=!1,r.userData.originalScale={x:r.scale.x,y:r.scale.y,z:r.scale.z})})}function mb(){fb(),db(),pb()}window.addEventListener("mousemove",hb);function _b(){document.getElementById("about")&&dn===Array.from(Er).findIndex(t=>t.id==="about")?(mn.forEach(t=>{t&&(t.userData.enhancedForAboutSection||(t.userData.enhancedForAboutSection=!0,t.userData.originalMaterialValues={opacity:t.material.opacity||1},t.material&&t.material.emissive&&(t.userData.originalMaterialValues.emissiveIntensity=t.material.emissiveIntensity||0,t.material.emissiveIntensity=.6),t.material&&t.material.transparent&&(t.material.opacity=1)))}),Et&&!Et.userData.enhancedForAboutSection&&(Et.userData.enhancedForAboutSection=!0,Et.userData.originalMaterialValues={transmission:Et.material.transmission||0,clearcoat:Et.material.clearcoat||0},Et.material&&Et.material.emissive&&(Et.userData.originalMaterialValues.emissiveIntensity=Et.material.emissiveIntensity||0,Et.material.emissiveIntensity=.15),Et.material&&(Et.material.transmission=.9,Et.material.clearcoat=1))):(mn.forEach(t=>{t&&t.userData&&t.userData.enhancedForAboutSection&&(t.userData.enhancedForAboutSection=!1,t.userData.originalMaterialValues&&(t.material&&t.material.emissive&&t.userData.originalMaterialValues.emissiveIntensity!==void 0&&(t.material.emissiveIntensity=t.userData.originalMaterialValues.emissiveIntensity),t.material&&t.material.transparent&&t.userData.originalMaterialValues.opacity!==void 0&&(t.material.opacity=t.userData.originalMaterialValues.opacity)))}),Et&&Et.userData&&Et.userData.enhancedForAboutSection&&(Et.userData.enhancedForAboutSection=!1,Et.userData.originalMaterialValues&&(Et.material&&Et.userData.originalMaterialValues.transmission!==void 0&&(Et.material.transmission=Et.userData.originalMaterialValues.transmission),Et.material&&Et.userData.originalMaterialValues.clearcoat!==void 0&&(Et.material.clearcoat=Et.userData.originalMaterialValues.clearcoat),Et.material&&Et.material.emissive&&Et.userData.originalMaterialValues.emissiveIntensity!==void 0&&(Et.material.emissiveIntensity=Et.userData.originalMaterialValues.emissiveIntensity))))}function Jd(r,t){if(r.innerHTML="",!document.getElementById("cursor-blink-style")){const h=document.createElement("style");h.id="cursor-blink-style",h.innerHTML=`
      @keyframes cursor-blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
      }
      .typewriter-cursor {
        animation: cursor-blink 1.1s step-end infinite;
      }
    `,document.head.appendChild(h)}const e="!<>-_\\/[]{}—=+*^?#$%&@~`|•■□▪▫▶◀▲▼►◄★☆⚡✨⚠",n="░▒▓█▄▌▐▀■□▪▫▬▲►▼◄◊○●◘◙♠♣♥♦♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼";let i=0,s=!1,o=null;function a(h=1){return Math.random()<.3*h?n.charAt(Math.floor(Math.random()*n.length)):e.charAt(Math.floor(Math.random()*e.length))}function l(h=1){if(!s)return;const f=t.substring(0,i),d=Math.floor(Math.random()*5*h)+2;let c="";for(let p=0;p<d;p++)Math.random()>.85&&h>.5?c+=a(h)+a(h):c+=a(h);r.textContent=f+c}const u=()=>{if(i<t.length){const h=Math.floor(Math.random()*66.66666666666667)+8,f=Math.random();if(f>.55){s=!0;const c=t.charAt(i)===" "||t.charAt(i+1)===" "||t.charAt(i)==="."||t.charAt(i+1)==="."?.8:.4,p=(Math.random()*300+c*200)/3;o=setInterval(()=>l(c),(30+Math.random()*20)/3),setTimeout(()=>{clearInterval(o),s=!1,i++,r.textContent=t.substring(0,i),setTimeout(u,h)},p)}else if(f>.88){const d=t.substring(0,i),c=Math.random();if(c>.7){const p=t.charAt(i);r.textContent=d+p+p}else if(c>.3){const p={q:"was",w:"qase",e:"wsdr",r:"edft",t:"rfgy",y:"tghu",u:"yhji",i:"ujko",o:"iklp",p:"ol",a:"qwsz",s:"awedxz",d:"serfcx",f:"drtgvc",g:"ftyhbv",h:"gyujnb",j:"huikmn",k:"jiolm",l:"kop",z:"asx",x:"zsdc",c:"xdfv",v:"cfgb",b:"vghn",n:"bhjm",m:"njk"},g=t.charAt(i).toLowerCase(),_=p[g]||"qwertyuiopasdfghjklzxcvbnm",m=_.charAt(Math.floor(Math.random()*_.length));r.textContent=d+m}else{const p="qwertyuiopasdfghjklzxcvbnm".charAt(Math.floor(Math.random()*26));r.textContent=d+p}setTimeout(()=>{r.textContent=d,setTimeout(u,h)},200/10)}else{i++,r.textContent=t.substring(0,i);const d=t.charAt(i-1),c=[".",",","!","?",":",";","-"].includes(d),p=d===" "||i===t.length;c?setTimeout(u,h*2.5):p&&Math.random()>.7?setTimeout(u,h*1.8):setTimeout(u,h)}}};setTimeout(u,100)}function gb(r){const t=fi.domElement.getBoundingClientRect();No.x=(r.clientX-t.left)/t.width*2-1,No.y=-((r.clientY-t.top)/t.height)*2+1,Qc.setFromCamera(No,Ue);const e=[Et];mn.forEach(i=>{i&&(e.push(i),i.userData.pointCloud&&e.push(i.userData.pointCloud))});const n=Qc.intersectObjects(e);if(n.length>0){const i=n[0].object;let s=null,o=!1;if(i===Et?(s=Et,o=!0):i.type==="Points"?s=i.userData.planet:s=i,s&&s.userData&&s.userData.clickable){if(/Mobi|Android/i.test(navigator.userAgent)&&mn.forEach(l=>{if(l.userData&&l.userData.pointCloud&&l!==s){const u=document.querySelector(`.sci-fi-text-box[data-id="${l.userData.index}"]`);u&&(u.classList.remove("active"),setTimeout(()=>u.remove(),200),l.userData.isShowingInfo=!1);const h=l.userData.pointCloud;h.userData.currentState==="shape"&&(k0(h,"sphere"),h.userData.currentState="sphere")}}),o){const l=document.querySelector('.sci-fi-text-box[data-id="donut"]');if(l&&s.userData.isShowingInfo)l.classList.remove("active"),setTimeout(()=>l.remove(),200),s.userData.isShowingInfo=!1;else if(!l&&!s.userData.isShowingInfo){const u="This is the central donut object of our universe. It represents the core of our system.",h=Kd("",{x:s.position.x,y:s.position.y,z:s.position.z,objectIndex:null},!0);Jd(h,u),s.userData.isShowingInfo=!0}}else lb(s);s.userData.originalScale||(s.userData.originalScale={x:s.scale.x,y:s.scale.y,z:s.scale.z});const a=new B(s.userData.originalScale.x,s.userData.originalScale.y,s.userData.originalScale.z);Ve.to(s.scale,{x:a.x*1.2,y:a.y*1.2,z:a.z*1.2,duration:.3,yoyo:!0,repeat:1,onComplete:()=>{s.scale.set(a.x,a.y,a.z)}})}}}let tu=!1;function xb(){if(tu)return;const r=document.querySelector("#animatedText");if(!r)return;r.style.position="relative",r.style.display="inline-block",r.innerHTML="";const t=document.createElement("span");t.className="typewriter-text",r.appendChild(t);const e=document.createElement("span");e.className="typewriter-cursor",e.innerHTML="|",e.style.display="inline-block",e.style.marginLeft="2px",e.style.color="#ffffff",e.style.fontWeight="bold",r.appendChild(e);const n=document.createElement("style");n.innerHTML=`
    @keyframes cursor-blink {
      0% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 1; }
    }
    .typewriter-cursor {
      animation: cursor-blink 1.1s step-end infinite;
    }
  `,document.head.appendChild(n),tu=!0;const i="My Projects",s="!<>-_\\/[]{}—=+*^?#________";let o=0,a=null,l=!1;function u(){return s.charAt(Math.floor(Math.random()*s.length))}function h(){if(!l)return;const d=i.substring(0,o),c=Math.floor(Math.random()*4)+2;let p="";for(let g=0;g<c;g++)p+=u();t.textContent=d+p}const f=()=>{if(o<i.length){const d=Math.floor(Math.random()*50)+80,c=Math.random();if(c>.7)l=!0,a=setInterval(h,50),setTimeout(()=>{clearInterval(a),l=!1,o++,t.textContent=i.substring(0,o),setTimeout(f,d)},Math.random()*300+100);else if(c>.92){const p="qwertyuiopasdfghjklzxcvbnm",g=p.charAt(Math.floor(Math.random()*p.length)),_=i.substring(0,o);t.textContent=_+g,setTimeout(()=>{t.textContent=_,setTimeout(f,d)},200)}else o++,t.textContent=i.substring(0,o),c>.85?setTimeout(f,Math.random()*600+400):setTimeout(f,d)}else console.log("Typewriter animation completed")};setTimeout(()=>{setTimeout(f,100)},1250),me.create({trigger:"#animatedText",start:"top 80%",end:"bottom top",markers:!1,onLeaveBack:()=>{o<i.length&&(a&&(clearInterval(a),l=!1),t.textContent="",o=0,setTimeout(f,100))}})}let G0=0,W0=0;window.addEventListener("mousemove",r=>{const t=r.clientX/window.innerWidth*2-1,e=-(r.clientY/window.innerHeight)*2+1;G0=t*6,W0=e*3.6});function l_(r){mn.forEach(t=>{if(t&&t.userData.pointCloud){const e=t.userData.pointCloud;if(!e.userData.animating&&e.userData.currentState==="sphere"&&e.visible){const n=e.geometry.attributes.position.array,i=Date.now()*5e-4;for(let s=0;s<n.length;s+=3){const o=e.userData.originalPositions[s],a=e.userData.originalPositions[s+1],l=e.userData.originalPositions[s+2];n[s]=o+Math.sin(i+s*.01)*.05,n[s+1]=a+Math.cos(i+s*.01)*.05,n[s+2]=l+Math.sin(i+s*.02)*.05}e.geometry.attributes.position.needsUpdate=!0}}})}window.addEventListener("click",gb);const c_=document.body.querySelector(".purple-fog"),vb=new zv;function qa(){const r=vb.getDelta();if(XT(r),typeof n_=="function"&&n_(),requestAnimationFrame(qa),ic+=.01,al&&al.update(),typeof e_=="function"&&a_&&e_(a_,ic),mn&&mn.length>0&&mn.forEach(e=>{if(!e)return;e.userData.rotationSpeed||(e.userData.rotationSpeed={x:Math.random()*(.002-3e-4)+3e-4,y:Math.random()*(.002-5e-6)+5e-6,z:Math.random()*(8e-4-3e-4)+3e-4}),yb(e,ic);const{x:n,y:i,z:s}=e.userData.rotationSpeed;e.rotation.x+=n,e.rotation.y+=i,e.rotation.z+=s}),cb(),typeof s_=="function"&&s_(),typeof l_=="function"&&l_(),_b(),typeof o_=="function"&&o_(ic),Ue.position.x+=(G0-Ue.position.x)*.05,Ue.position.y+=(W0-Ue.position.y)*.05,Ue.lookAt(Qe.position),fi.autoClear=!0,fi.clear(),fi.render(Qe,Ue),hi!=="home"?c_.style.opacity="1":c_.style.opacity="0",hi=="about")fi.autoClear=!1,fi.render(Gd,Ue);else{const e=document.getElementsByClassName("sci-fi-text-box");Array.from(e).forEach(n=>{n.classList.remove("active"),setTimeout(()=>{n.remove()},100)})}const t=document.querySelector(".black-gradient");t&&(hi==="projects"?(t.classList.add("visible"),tu||xb()):(t.classList.remove("visible"),tu=!1))}function yb(r,t){if(!r||!r.userData||!r.userData.pivot)return;const e=r.userData.pivot;r.userData.orbitDirection===void 0&&(r.userData.orbitDirection=Math.random()<.5?1:-1);const{orbitRadius:n,orbitSpeed:i,orbitPhase:s,orbitTilt:o,orbitDirection:a}=r.userData,l=s+t*i*a;e.rotation.y=l,e.rotation.x=o;const u=n*Math.sin(l),h=n*Math.cos(l),f=n*Math.sin(l)*o;e.position.x=u,e.position.z=h,e.position.y=f}function X0(){const r=document.getElementById("loading-screen");r&&(r.classList.add("hidden"),setTimeout(()=>{r.style.display="none"},500))}window.addEventListener("load",()=>{mb(),setTimeout(X0,1500),gn(0),console.log(navigator.userAgent),qa()});setTimeout(X0,8e3);let Xf=/Mobi|Android|iPhone|iPad|iPod|Touch/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.maxTouchPoints>0;function Y0(){Xf||(console.log("isMobile no"),Ve.from(".project-card",{y:100,opacity:0,stagger:.15,duration:1,ease:"power3.out"}),document.querySelectorAll(".project-card").forEach(r=>{ea.create(r,{type:"x,y",edgeResistance:.8,bounds:window,inertia:!1,onPress(){this.startX=this.x,this.startY=this.y},onRelease(){const t=this.x-this.startX,e=this.y-this.startY;let n=t*.5,i=e*.5;const s=.95,o=()=>{n*=s,i*=s,this.x+=n,this.y+=i,this.update(),(Math.abs(n)>.5||Math.abs(i)>.5)&&requestAnimationFrame(o)};o()}})}))}Y0();setInterval(()=>{const r=/Mobi|Android|iPhone|iPad|iPod|Touch/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.maxTouchPoints>0;r!==Xf&&(Xf=r,Y0())},2e3);
