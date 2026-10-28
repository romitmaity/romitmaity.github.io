(()=>{var E0=Object.defineProperty;var A0=(r,t,e)=>t in r?E0(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Lt=(r,t,e)=>A0(r,typeof t!="symbol"?t+"":t,e);function nr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Fd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zo={duration:.5,overwrite:!1,delay:0},tu,dn,Ne,_i=1e8,Te=1/_i,Wh=Math.PI*2,C0=Wh/4,R0=0,Bd=Math.sqrt,P0=Math.cos,I0=Math.sin,en=function(t){return typeof t=="string"},ke=function(t){return typeof t=="function"},rr=function(t){return typeof t=="number"},ol=function(t){return typeof t>"u"},Hi=function(t){return typeof t=="object"},Yn=function(t){return t!==!1},eu=function(){return typeof window<"u"},Ka=function(t){return ke(t)||en(t)},zd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},yn=Array.isArray,L0=/random\([^)]+\)/g,D0=/,\s*/g,Rd=/(?:-?\.?\d|\.)+/gi,nu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,iu=/[+-]=-?[.\d]+/,N0=/[^,'"\[\]\s]+/gi,U0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Fe,Vi,Xh,ru,jn={},el={},kd,Vd=function(t){return(el=Fs(t,jn))&&Sn},al=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ko=function(t,e){return!e&&console.warn(t)},Gd=function(t,e){return t&&(jn[t]=e)&&el&&(el[t]=e)||jn},Vo=function(){return 0},O0={suppressEvents:!0,isStart:!0,kill:!1},Qa={suppressEvents:!0,kill:!1},F0={suppressEvents:!0},su={},Tr=[],Yh={},Hd,Wn={},Bh={},Pd=30,ja=[],ou="",au=function(t){var e=t[0],n,i;if(Hi(e)||ke(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ja.length;i--&&!ja[i].targetTest(e););n=ja[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new uu(t[i],n)))||t.splice(i,1);return t},Er=function(t){return t._gsap||au(xi(t))[0]._gsap},lu=function(t,e,n){return(n=t[e])&&ke(n)?t[e]():ol(n)&&t.getAttribute&&t.getAttribute(e)||n},Dn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ve=function(t){return Math.round(t*1e5)/1e5||0},Oe=function(t){return Math.round(t*1e7)/1e7||0},ss=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},B0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},nl=function(){var t=Tr.length,e=Tr.slice(0),n,i;for(Yh={},Tr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},cu=function(t){return!!(t._initted||t._startAt||t.add)},Wd=function(t,e,n,i){Tr.length&&!dn&&nl(),t.render(e,n,i||!!(dn&&e<0&&cu(t))),Tr.length&&!dn&&nl()},Xd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(N0).length<2?e:en(t)?t.trim():t},Yd=function(t){return t},ti=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},z0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Fs=function(t,e){for(var n in e)t[n]=e[n];return t},Id=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Hi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},il=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Oo=function(t){var e=t.parent||Fe,n=t.keyframes?z0(yn(t.keyframes)):ti;if(Yn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},k0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},qd=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},ll=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Ar=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},es=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},V0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},qh=function(t,e,n,i){return t._startAt&&(dn?t._startAt.revert(Qa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},G0=function r(t){return!t||t._ts&&r(t.parent)},Ld=function(t){return t._repeat?Bs(t._tTime,t=t.duration()+t._rDelay)*t:0},Bs=function(t,e){var n=Math.floor(t=Oe(t/e));return t&&n===t?n-1:n},rl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},cl=function(t){return t._end=Oe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},hl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Oe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),cl(t),n._dirty||es(n,t)),t},Zd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=rl(t.rawTime(),e),(!e._dur||Wo(0,e.totalDuration(),n)-e._tTime>Te)&&e.render(n,!0)),es(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Te}},Gi=function(t,e,n,i){return e.parent&&Ar(e),e._start=Oe((rr(n)?n:n||t!==Fe?gi(t,n,e):t._time)+e._delay),e._end=Oe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),qd(t,e,"_first","_last",t._sort?"_start":0),Zh(e)||(t._recent=e),i||Zd(t,e),t._ts<0&&hl(t,t._tTime),t},Jd=function(t,e){return(jn.ScrollTrigger||al("scrollTrigger",e))&&jn.ScrollTrigger.create(e,t)},$d=function(t,e,n,i,s){if(pu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!dn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Hd!==Xn.frame)return Tr.push(t),t._lazy=[s,i],1},H0=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Zh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},W0=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&H0(t)&&!(!t._initted&&Zh(t))||(t._ts<0||t._dp._ts<0)&&!Zh(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Wo(0,t._tDur,e),h=Bs(l,a),t._yoyo&&h&1&&(o=1-o),h!==Bs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||dn||i||t._zTime===Te||!e&&t._zTime){if(!t._initted&&$d(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Te:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&qh(t,e,n,!0),t._onUpdate&&!n&&Qn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Qn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ar(t,1),!n&&!dn&&(Qn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},X0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},zs=function(t,e,n,i){var s=t._repeat,o=Oe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Oe(o*(s+1)+t._rDelay*s):o,a>0&&!i&&hl(t,t._tTime=t._tDur*a),t.parent&&cl(t),n||es(t.parent,t),t},Dd=function(t){return t instanceof vn?es(t):zs(t,t._dur)},Y0={_start:0,endTime:Vo,totalDuration:Vo},gi=function r(t,e,n){var i=t.labels,s=t._recent||Y0,o=t.duration()>=_i?s.endTime(!1):t._dur,a,l,c;return en(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(yn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Fo=function(t,e,n){var i=rr(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Yn(l.vars.inherit)&&l.parent;o.immediateRender=Yn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ye(e[0],o,e[s+1])},Cr=function(t,e){return t||t===0?e(t):e},Wo=function(t,e,n){return n<t?t:n>e?e:n},pn=function(t,e){return!en(t)||!(e=U0.exec(t))?"":e[1]},q0=function(t,e,n){return Cr(n,function(i){return Wo(t,e,i)})},Jh=[].slice,Kd=function(t,e){return t&&Hi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Hi(t[0]))&&!t.nodeType&&t!==Vi},Z0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return en(i)&&!e||Kd(i,1)?(s=n).push.apply(s,xi(i)):n.push(i)})||n},xi=function(t,e,n){return Ne&&!e&&Ne.selector?Ne.selector(t):en(t)&&!n&&(Xh||!ks())?Jh.call((e||ru).querySelectorAll(t),0):yn(t)?Z0(t,n):Kd(t)?Jh.call(t,0):t?[t]:[]},$h=function(t){return t=xi(t)[0]||ko("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return xi(e,n.querySelectorAll?n:n===t?ko("Invalid scope")||ru.createElement("div"):t)}},Qd=function(t){return t.sort(function(){return .5-Math.random()})},jd=function(t){if(ke(t))return t;var e=Hi(t)?t:{each:t},n=ns(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return en(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,m){var _=(m||e).length,p=o[_],g,w,C,y,M,T,E,v,S;if(!p){if(S=e.grid==="auto"?0:(e.grid||[1,_i])[1],!S){for(E=-_i;E<(E=m[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(p=o[_]=[],g=l?Math.min(S,_)*h-.5:i%S,w=S===_i?0:l?_*d/S-.5:i/S|0,E=0,v=_i,T=0;T<_;T++)C=T%S-g,y=w-(T/S|0),p[T]=M=c?Math.abs(c==="y"?y:C):Bd(C*C+y*y),M>E&&(E=M),M<v&&(v=M);i==="random"&&Qd(p),p.max=E-v,p.min=v,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=pn(e.amount||e.each)||0,n=n&&_<0?a_(n):n}return _=(p[u]-p.min)/p.max||0,Oe(p.b+(n?n(_):_)*p.v)+p.u}},Kh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Oe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(rr(n)?0:pn(n))}},tp=function(t,e){var n=yn(t),i,s;return!n&&Hi(t)&&(i=n=t.radius||_i,t.values?(t=xi(t.values),(s=!rr(t[0]))&&(i*=i)):t=Kh(t.increment)),Cr(e,n?ke(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=_i,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,s||h===o||rr(o)?h:h+pn(o)}:Kh(t))},ep=function(t,e,n,i){return Cr(yn(t)?!e:n===!0?!!(n=0):!i,function(){return yn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},J0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},$0=function(t,e){return function(n){return t(parseFloat(n))+(e||pn(n))}},K0=function(t,e,n){return ip(t,e,0,1,n)},np=function(t,e,n){return Cr(n,function(i){return t[~~e(i)]})},Q0=function r(t,e,n){var i=e-t;return yn(t)?np(t,r(0,t.length),e):Cr(n,function(s){return(i+(s-t)%i)%i+t})},j0=function r(t,e,n){var i=e-t,s=i*2;return yn(t)?np(t,r(0,t.length-1),e):Cr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Vs=function(t){return t.replace(L0,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(D0);return ep(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ip=function(t,e,n,i,s){var o=e-t,a=i-n;return Cr(s,function(l){return n+((l-t)/o*a||0)})},t_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=en(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(yn(t)&&!yn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(m){m*=d;var _=Math.min(u,~~m);return h[_](m-_)},n=e}else i||(t=Fs(yn(t)?[]:{},t));if(!h){for(l in e)fu.call(a,t,l,"get",e[l]);s=function(m){return _u(m,a)||(o?t.p:t)}}}return Cr(n,s)},Nd=function(t,e,n){var i=t.labels,s=_i,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Qn=function(t,e,n){var i=t.vars,s=i[e],o=Ne,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Tr.length&&nl(),a&&(Ne=a),h=l?s.apply(c,l):s.call(c),Ne=o,h},No=function(t){return Ar(t),t.scrollTrigger&&t.scrollTrigger.kill(!!dn),t.progress()<1&&Qn(t,"onInterrupt"),t},Os,rp=[],sp=function(t){if(t)if(t=!t.name&&t.default||t,eu()||t.headless){var e=t.name,n=ke(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Vo,render:_u,add:fu,kill:__,modifier:g_,rawVars:0},o={targetTest:0,get:0,getSetter:ul,aliases:{},register:0};if(ks(),t!==i){if(Wn[e])return;ti(i,ti(il(t,s),o)),Fs(i.prototype,Fs(s,il(t,o))),Wn[i.prop=e]=i,t.targetTest&&(ja.push(i),su[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Gd(e,i),t.register&&t.register(Sn,i,Nn)}else rp.push(t)},we=255,Uo={aqua:[0,we,we],lime:[0,we,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,we],navy:[0,0,128],white:[we,we,we],olive:[128,128,0],yellow:[we,we,0],orange:[we,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[we,0,0],pink:[we,192,203],cyan:[0,we,we],transparent:[we,we,we,0]},zh=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*we+.5|0},op=function(t,e,n){var i=t?rr(t)?[t>>16,t>>8&we,t&we]:0:Uo.black,s,o,a,l,c,h,d,u,f,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Uo[t])i=Uo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&we,i&we,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&we,t&we]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(Rd),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=zh(l+1/3,s,o),i[1]=zh(l,s,o),i[2]=zh(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(nu),n&&i.length<4&&(i[3]=1),i}else i=t.match(Rd)||Uo.transparent;i=i.map(Number)}return e&&!m&&(s=i[0]/we,o=i[1]/we,a=i[2]/we,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ap=function(t){var e=[],n=[],i=-1;return t.split(ir).forEach(function(s){var o=s.match(rs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Ud=function(t,e,n){var i="",s=(t+i).match(ir),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=op(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=ap(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ir,"1").split(rs),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ir),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},ir=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Uo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),e_=/hsl[a]?\(/,hu=function(t){var e=t.join(" "),n;if(ir.lastIndex=0,ir.test(e))return n=e_.test(e),t[1]=Ud(t[1],n),t[0]=Ud(t[0],n,ap(t[1])),!0},Go,Xn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,d,u,f,m=function _(p){var g=r()-i,w=p===!0,C,y,M,T;if((g>t||g<0)&&(n+=g-e),i+=g,M=i-n,C=M-o,(C>0||w)&&(T=++d.frame,u=M-d.time*1e3,d.time=M=M/1e3,o+=C+(C>=s?4:s-C),y=1),w||(l=c(_)),y)for(f=0;f<a.length;f++)a[f](M,u,T,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){kd&&(!Xh&&eu()&&(Vi=Xh=window,ru=Vi.document||{},jn.gsap=Sn,(Vi.gsapVersions||(Vi.gsapVersions=[])).push(Sn.version),Vd(el||Vi.GreenSockGlobals||!Vi.gsap&&Vi||{}),rp.forEach(sp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Go=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Go=0,c=Vo},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,g,w){var C=g?function(y,M,T,E){p(y,M,T,E),d.remove(C)}:p;return d.remove(p),a[w?"unshift":"push"](C),ks(),C},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),ks=function(){return!Go&&Xn.wake()},ue={},n_=/^[\d.\-M][\d.\-,\s]/,i_=/["']/g,r_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(i_,"").trim():+c,i=l.substr(a+1).trim();return e},s_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},o_=function(t){var e=(t+"").split("("),n=ue[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[r_(e[1])]:s_(t).split(",").map(Xd)):ue._CE&&n_.test(t)?ue._CE("",t):n},a_=function(t){return function(e){return 1-t(1-e)}},ns=function(t,e){return t&&(ke(t)?t:ue[t]||o_(t))||e},os=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Dn(t,function(a){ue[a]=jn[a]=s,ue[o=a.toLowerCase()]=n;for(var l in s)ue[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ue[a+"."+l]=s[l]}),s},lp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},kh=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Wh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*I0((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:lp(a);return s=Wh/s,l.config=function(c,h){return r(t,c,h)},l},Vh=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:lp(n);return i.config=function(s){return r(t,s)},i};Dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;os(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ue.Linear.easeNone=ue.none=ue.Linear.easeIn;os("Elastic",kh("in"),kh("out"),kh());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};os("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);os("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});os("Circ",function(r){return-(Bd(1-r*r)-1)});os("Sine",function(r){return r===1?1:-P0(r*C0)+1});os("Back",Vh("in"),Vh("out"),Vh());ue.SteppedEase=ue.steps=jn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Te;return function(a){return((i*Wo(0,o,a)|0)+s)*n}}};zo.ease=ue["quad.out"];Dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ou+=r+","+r+"Params,"});var uu=function(t,e){this.id=R0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:lu,this.set=e?e.getSetter:ul},Ho=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,zs(this,+e.duration,1,1),this.data=e.data,Ne&&(this._ctx=Ne,Ne.data.push(this)),Go||Xn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,zs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ks(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(hl(this,n),!s._dp||s.parent||Zd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Gi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Wd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ld(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ld(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Bs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?rl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Te?0:this._rts,this.totalTime(Wo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),cl(this),V0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Te&&(this._tTime-=Te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Oe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Gi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?rl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=F0);var i=dn;return dn=n,cu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Dd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Dd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(gi(this,n),Yn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Yn(i)),this._dur||(this._zTime=-Te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Te)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=ke(n)?n:Yd,l=function(){var h=i.then;i.then=null,s&&s(),ke(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){No(this)},r})();ti(Ho.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var vn=(function(r){Fd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Yn(n.sortChildren),Fe&&Gi(n.parent||Fe,nr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Jd(nr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Fo(0,arguments,this),this},e.from=function(i,s,o){return Fo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Fo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Oo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ye(i,s,gi(this,o),1),this},e.call=function(i,s,o){return Gi(this,Ye.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ye(i,o,gi(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Oo(o).immediateRender=Yn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,d){return a.startAt=o,Oo(a).immediateRender=Yn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,d)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Oe(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,m,_,p,g,w,C,y,M,T,E;if(this!==Fe&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,y=this._start,C=this._ts,g=!C,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(u=Oe(h%p),h===l?(_=this._repeat,u=c):(M=Oe(h/p),_=~~M,_&&_===M&&(u=c,_--),u>c&&(u=c)),M=Bs(this._tTime,p),!a&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),T&&_&1&&(u=c-u,E=1),_!==M&&!this._lock){var v=T&&M&1,S=v===(T&&_&1);if(_<M&&(v=!v),a=v?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Oe(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Qn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,M=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=X0(this,Oe(a),Oe(u)),w&&(h-=u-(u=w._start))),this._tTime=h,this._time=u,this._act=!!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!M&&(Qn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||u>=f._start)&&f._ts&&w!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!g){w=0,m&&(h+=this._zTime=-Te);break}}f=m}else{f=this._last;for(var A=i<0?i:u;f;){if(m=f._prev,(f._act||A<=f._end)&&f._ts&&w!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,s,o||dn&&cu(f)),u!==this._time||!this._ts&&!g){w=0,m&&(h+=this._zTime=A?-Te:Te);break}}f=m}}if(w&&!s&&(this.pause(),w.render(u>=a?0:-Te)._zTime=u>=a?1:-1,this._ts))return this._start=y,cl(this),this.render(i,s,o);this._onUpdate&&!s&&Qn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ar(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Qn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(rr(s)||(s=gi(this,s,i)),!(i instanceof Ho)){if(yn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(en(i))return this.addLabel(i,s);if(ke(i))i=Ye.delayedCall(0,i);else return this}return this!==i?Gi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-_i);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ye?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return en(i)?this.removeLabel(i):ke(i)?this.killTweensOf(i):(i.parent===this&&ll(this,i),i===this._recent&&(this._recent=this._last),es(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Oe(Xn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=gi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ye.delayedCall(0,s||Vo,o);return a.data="isPause",this._hasPause=1,Gi(this,a,gi(this,i))},e.removePause=function(i){var s=this._first;for(i=gi(this,i);s;)s._start===i&&s.data==="isPause"&&Ar(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)wr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=xi(i),l=this._first,c=rr(s),h;l;)l instanceof Ye?B0(l._targets,a)&&(c?(!wr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=gi(o,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,m=Ye.to(o,ti({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Te,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&zs(m,p,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,d||[])}},s));return u?m.render(0):m},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ti({startAt:{time:gi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Nd(this,gi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Nd(this,gi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Te)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Oe(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return es(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),es(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=_i,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Gi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Oe(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;zs(o,o===Fe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Fe._ts&&(Wd(Fe,rl(i,Fe)),Hd=Xn.frame),Xn.frame>=Pd){Pd+=qn.autoSleep||120;var s=Fe._first;if((!s||!s._ts)&&qn.autoSleep&&Xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Xn.sleep()}}},t})(Ho);ti(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var l_=function(t,e,n,i,s,o,a){var l=new Nn(this._pt,t,e,0,1,gu,null,s),c=0,h=0,d,u,f,m,_,p,g,w;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Vs(i)),o&&(w=[n,i],o(w,t,e),n=w[0],i=w[1]),u=n.match(Fh)||[];d=Fh.exec(i);)m=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?ss(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=Fh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(iu.test(i)||g)&&(l.e=0),this._pt=l,l},fu=function(t,e,n,i,s,o,a,l,c,h){ke(i)&&(i=i(s||0,t,o));var d=t[e],u=n!=="get"?n:ke(d)?c?t[e.indexOf("set")||!ke(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=ke(d)?c?d_:up:mu,m;if(en(i)&&(~i.indexOf("random(")&&(i=Vs(i)),i.charAt(1)==="="&&(m=ss(u,i)+(pn(u)||0),(m||m===0)&&(i=m))),!h||u!==i||Qh)return!isNaN(u*i)&&i!==""?(m=new Nn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?m_:fp,0,f),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!d&&!(e in t)&&al(e,i),l_.call(this,t,e,u,i,f,l||qn.stringFilter,c))},c_=function(t,e,n,i,s){if(ke(t)&&(t=Bo(t,s,e,n,i)),!Hi(t)||t.style&&t.nodeType||yn(t)||zd(t))return en(t)?Bo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Bo(t[a],s,e,n,i);return o},du=function(t,e,n,i,s,o){var a,l,c,h;if(Wn[t]&&(a=new Wn[t]).init(s,a.rawVars?e[t]:c_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Nn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Os))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},wr,Qh,pu=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,w=g&&g.data==="nested"?g.vars.targets:p,C=t._overwrite==="auto"&&!tu,y=t.timeline,M=i.easeReverse||d,T,E,v,S,A,D,I,F,L,B,X,k,Q;if(y&&(!u||!s)&&(s="none"),t._ease=ns(s,zo.ease),t._rEase=M&&(ns(M)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if(F=p[0]?Er(p[0]).harness:0,k=F&&i[F.prop],T=il(i,su),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&m?Qa:O0),_._lazy=0),o){if(Ar(t._startAt=Ye.set(p,ti({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Yn(l),startAt:null,delay:0,onUpdate:c&&function(){return Qn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn||!a&&!f)&&t._startAt.revert(Qa),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),v=ti({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Yn(l),immediateRender:a,stagger:0,parent:g},T),k&&(v[F.prop]=k),Ar(t._startAt=Ye.set(p,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn?t._startAt.revert(Qa):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Te,Te);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Yn(l)||l&&!m,E=0;E<p.length;E++){if(A=p[E],I=A._gsap||au(p)[E]._gsap,t._ptLookup[E]=B={},Yh[I.id]&&Tr.length&&nl(),X=w===p?E:w.indexOf(A),F&&(L=new F).init(A,k||T,t,X,w)!==!1&&(t._pt=S=new Nn(t._pt,A,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(Y){B[Y]=S}),L.priority&&(D=1)),!F||k)for(v in T)Wn[v]&&(L=du(v,T,t,X,A,w))?L.priority&&(D=1):B[v]=S=fu.call(t,A,v,"get",T[v],X,w,0,i.stringFilter);t._op&&t._op[E]&&t.kill(A,t._op[E]),C&&t._pt&&(wr=t,Fe.killTweensOf(A,B,t.globalTime(e)),Q=!t.parent,wr=0),t._pt&&l&&(Yh[I.id]=1)}D&&xu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,u&&e<=0&&y.render(_i,!0,!0)},h_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Qh=1,t.vars[e]="+=0",pu(t,a),Qh=0,l?ko(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Ve(n)+pn(d.e)),d.b&&(d.b=h.s+pn(d.b))},u_=function(t,e){var n=t[0]?Er(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Fs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},f_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(yn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Bo=function(t,e,n,i,s){return ke(t)?t.call(e,n,i,s):en(t)&&~t.indexOf("random(")?Vs(t):t},cp=ou+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",hp={};Dn(cp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return hp[r]=1});var Ye=(function(r){Fd(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Oo(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||Fe,w=(yn(n)||zd(n)?rr(n[0]):"length"in i)?[n]:xi(n),C,y,M,T,E,v,S,A;if(a._targets=w.length?au(w):ko("GSAP target "+n+" not found. https://gsap.com",!qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||u||Ka(c)||Ka(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(C=a.timeline=new vn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:w}),C.kill(),C.parent=C._dp=nr(a),C._start=0,u||Ka(c)||Ka(h)){if(T=w.length,S=u&&jd(u),Hi(u))for(E in u)~cp.indexOf(E)&&(A||(A={}),A[E]=u[E]);for(y=0;y<T;y++)M=il(i,hp),M.stagger=0,D&&(M.easeReverse=D),A&&Fs(M,A),v=w[y],M.duration=+Bo(c,nr(a),y,v,w),M.delay=(+Bo(h,nr(a),y,v,w)||0)-a._delay,!u&&T===1&&M.delay&&(a._delay=h=M.delay,a._start+=h,M.delay=0),C.to(v,M,S?S(y,v,w):0),C._ease=ue.none;C.duration()?c=h=0:a.timeline=0}else if(m){Oo(ti(C.vars.defaults,{ease:"none"})),C._ease=ns(m.ease||i.ease||"none");var I=0,F,L,B;if(yn(m))m.forEach(function(X){return C.to(w,X,">")}),C.duration();else{M={};for(E in m)E==="ease"||E==="easeEach"||f_(E,m[E],M,m.easeEach);for(E in M)for(F=M[E].sort(function(X,k){return X.t-k.t}),I=0,y=0;y<F.length;y++)L=F[y],B={ease:L.e,duration:(L.t-(y?F[y-1].t:0))/100*c},B[E]=L.v,C.to(w,B,I),I+=B.duration;C.duration()<c&&C.to({},{duration:c-C.duration()})}}c||a.duration(c=C.duration())}else a.timeline=0;return f===!0&&!tu&&(wr=nr(a),Fe.killTweensOf(w),wr=0),Gi(g,nr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!m&&a._start===Oe(g._time)&&Yn(d)&&G0(nr(a))&&g.data!=="nested")&&(a._tTime=-Te,a.render(Math.max(0,-h)||0)),p&&Jd(nr(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Te&&!h?l:i<Te?0:i,u,f,m,_,p,g,w,C;if(!c)W0(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,C=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=Oe(d%_),d===l?(m=this._repeat,u=c):(p=Oe(d/_),m=~~p,m&&m===p?(u=c,m--):u>c&&(u=c)),g=this._yoyo&&m&1,g&&(u=c-u),p=Bs(this._tTime,_),u===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Oe(_*m),!0).invalidate()._lock=0)}if(!this._initted){if($d(this,h?i:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var y=u<a;if(y!==this._inv){var M=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=M?(y?-1:1)/M:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(u/c);if(this._from&&(this.ratio=w=1-w),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!p&&(Qn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(w,f.d),f=f._next;C&&C.render(i<0?i:C._dur*C._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&qh(this,i,s,o),Qn(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&Qn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&qh(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ar(this,1),!s&&!(h&&!a)&&(d||a||g)&&(Qn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Go||Xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||pu(this,c),h=this._ease(c/this._dur),h_(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(hl(this,0),this.parent||qd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?No(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,wr&&wr.vars.overwrite!==!0)._first||No(this),this.parent&&o!==this.timeline.totalDuration()&&zs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?xi(i):a,c=this._ptLookup,h=this._pt,d,u,f,m,_,p,g;if((!s||s==="all")&&k0(a,l))return s==="all"&&(this._pt=0),No(this);for(d=this._op=this._op||[],s!=="all"&&(en(s)&&(_={},Dn(s,function(w){return _[w]=1}),s=_),s=u_(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],s==="all"?(d[g]=s,m=u,f={}):(f=d[g]=d[g]||{},m=s);for(_ in m)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&ll(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&No(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Fo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Fo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Fe.killTweensOf(i,s,o)},t})(Ho);ti(Ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Dn("staggerTo,staggerFrom,staggerFromTo",function(r){Ye[r]=function(){var t=new vn,e=Jh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var mu=function(t,e,n){return t[e]=n},up=function(t,e,n){return t[e](n)},d_=function(t,e,n,i){return t[e](i.fp,n)},p_=function(t,e,n){return t.setAttribute(e,n)},ul=function(t,e){return ke(t[e])?up:ol(t[e])&&t.setAttribute?p_:mu},fp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},m_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},gu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},_u=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},g_=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},__=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ll(this,e,"_pt"):e.dep||(n=1),e=i;return!n},x_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},xu=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Nn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||fp,this.d=l||this,this.set=c||mu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=x_,this.m=n,this.mt=s,this.tween=i},r})();Dn(ou+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return su[r]=1});jn.TweenMax=jn.TweenLite=Ye;jn.TimelineLite=jn.TimelineMax=vn;Fe=new vn({sortChildren:!1,defaults:zo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qn.stringFilter=hu;var is=[],tl={},v_=[],Od=0,y_=0,Gh=function(t){return(tl[t]||v_).map(function(e){return e()})},jh=function(){var t=Date.now(),e=[];t-Od>2&&(Gh("matchMediaInit"),is.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Vi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Gh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Od=t,Gh("matchMedia"))},dp=(function(){function r(e,n){this.selector=n&&$h(n),this.data=[],this._r=[],this.isReverted=!1,this.id=y_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ke(n)&&(s=i,i=n,n=ke);var o=this,a=function(){var c=Ne,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=$h(s)),Ne=o,d=i.apply(o,arguments),ke(d)&&o._r.push(d),Ne=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===ke?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ne;Ne=null,n(this),Ne=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ye)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=is.length;o--;)is[o].id===this.id&&is.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),S_=(function(){function r(e){this.contexts=[],this.scope=e,Ne&&Ne.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Hi(n)||(n={matches:n});var o=new dp(0,s||this.scope),a=o.conditions={},l,c,h;Ne&&!o.selector&&(o.selector=Ne.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Vi.matchMedia(n[c]),l&&(is.indexOf(o)<0&&is.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(jh):l.addEventListener("change",jh)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),sl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return sp(i)})},timeline:function(t){return new vn(t)},getTweensOf:function(t,e){return Fe.getTweensOf(t,e)},getProperty:function(t,e,n,i){en(t)&&(t=xi(t)[0]);var s=Er(t||{}).get,o=n?Yd:Xd;return n==="native"&&(n=""),t&&(e?o((Wn[e]&&Wn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Wn[a]&&Wn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=xi(t),t.length>1){var i=t.map(function(h){return Sn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var o=Wn[e],a=Er(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Os._pt=0,d.init(t,n?h+n:h,Os,0,[t]),d.render(1,d),Os._pt&&_u(1,Os)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=Sn.to(t,ti((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Fe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ns(t.ease,zo.ease)),Id(zo,t||{})},config:function(t){return Id(qn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Wn[a]&&!jn[a]&&ko(e+" effect requires "+a+" plugin.")}),Bh[e]=function(a,l,c){return n(xi(a),ti(l||{},s),c)},o&&(vn.prototype[e]=function(a,l,c){return this.add(Bh[e](a,Hi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ue[t]=ns(e)},parseEase:function(t,e){return arguments.length?ns(t,e):ue},getById:function(t){return Fe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new vn(t),i,s;for(n.smoothChildTiming=Yn(t.smoothChildTiming),Fe.remove(n),n._dp=0,n._time=n._tTime=Fe._time,i=Fe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ye&&i.vars.onComplete===i._targets[0]))&&Gi(n,i,i._start-i._delay),i=s;return Gi(Fe,n,0),n},context:function(t,e){return t?new dp(t,e):Ne},matchMedia:function(t){return new S_(t)},matchMediaRefresh:function(){return is.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||jh()},addEventListener:function(t,e){var n=tl[t]||(tl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=tl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Q0,wrapYoyo:j0,distribute:jd,random:ep,snap:tp,normalize:K0,getUnit:pn,clamp:q0,splitColor:op,toArray:xi,selector:$h,mapRange:ip,pipe:J0,unitize:$0,interpolate:t_,shuffle:Qd},install:Vd,effects:Bh,ticker:Xn,updateRoot:vn.updateRoot,plugins:Wn,globalTimeline:Fe,core:{PropTween:Nn,globals:Gd,Tween:Ye,Timeline:vn,Animation:Ho,getCache:Er,_removeLinkedListItem:ll,reverting:function(){return dn},context:function(t){return t&&Ne&&(Ne.data.push(t),t._ctx=Ne),Ne},suppressOverwrites:function(t){return tu=t}}};Dn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return sl[r]=Ye[r]});Xn.add(vn.updateRoot);Os=sl.to({},{duration:0});var M_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},b_=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=M_(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Hh=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(en(s)&&(l={},Dn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}b_(a,s)}}}},Sn=sl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Hh("roundProps",Kh),Hh("modifiers"),Hh("snap",tp))||sl;Ye.version=vn.version=Sn.version="3.15.0";kd=1;eu()&&ks();var w_=ue.Power0,T_=ue.Power1,E_=ue.Power2,A_=ue.Power3,C_=ue.Power4,R_=ue.Linear,P_=ue.Quad,I_=ue.Cubic,L_=ue.Quart,D_=ue.Quint,N_=ue.Strong,U_=ue.Elastic,O_=ue.Back,F_=ue.SteppedEase,B_=ue.Bounce,z_=ue.Sine,k_=ue.Expo,V_=ue.Circ;var pp,Rr,Hs,wu,hs,G_,mp,Tu,H_=function(){return typeof window<"u"},or={},cs=180/Math.PI,Ws=Math.PI/180,Gs=Math.atan2,gp=1e8,Eu=/([A-Z])/g,W_=/(left|right|width|margin|padding|x)/i,X_=/[\s,\(]\S/,Wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Y_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},q_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Z_=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},J_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},wp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Tp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},$_=function(t,e,n){return t.style[e]=n},K_=function(t,e,n){return t.style.setProperty(e,n)},Q_=function(t,e,n){return t._gsap[e]=n},j_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},tx=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},ex=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Be="transform",Zn=Be+"Origin",nx=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in or&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Wi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=sr(i,a)}):this.tfm[t]=o.x?o[t]:sr(i,t),t===Zn&&(this.tfm.zOrigin=o.zOrigin);else return Wi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Be)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Zn,e,"")),t=Be}(s||e)&&this.props.push(t,e,s[t])},Ep=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ix=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Eu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Tu(),(!s||!s.isStart)&&!n[Be]&&(Ep(n),i.zOrigin&&n[Zn]&&(n[Zn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ap=function(t,e){var n={target:t,props:[],revert:ix,save:nx};return t._gsap||Sn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Cp,Su=function(t,e){var n=Rr.createElementNS?Rr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Rr.createElement(t);return n&&n.style?n:Rr.createElement(t)},ei=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Eu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Xs(e)||e,1)||""},_p="O,Moz,ms,Ms,Webkit".split(","),Xs=function(t,e,n){var i=e||hs,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(_p[o]+t in s););return o<0?null:(o===3?"ms":o>=0?_p[o]:"")+t},Mu=function(){H_()&&window.document&&(pp=window,Rr=pp.document,Hs=Rr.documentElement,hs=Su("div")||{style:{}},G_=Su("div"),Be=Xs(Be),Zn=Be+"Origin",hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cp=!!Xs("perspective"),Tu=Sn.core.reverting,wu=1)},xp=function(t){var e=t.ownerSVGElement,n=Su("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Hs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Hs.removeChild(n),s},vp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Rp=function(t){var e,n;try{e=t.getBBox()}catch{e=xp(t),n=1}return e&&(e.width||e.height)||n||(e=xp(t)),e&&!e.width&&!e.x&&!e.y?{x:+vp(t,["x","cx","x1"])||0,y:+vp(t,["y","cy","y1"])||0,width:0,height:0}:e},Pp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Rp(t))},Ir=function(t,e){if(e){var n=t.style,i;e in or&&e!==Zn&&(e=Be),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Eu,"-$1").toLowerCase())):n.removeAttribute(e)}},Pr=function(t,e,n,i,s,o){var a=new Nn(t._pt,e,n,0,1,o?Tp:wp);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},yp={deg:1,rad:1,turn:1},rx={grid:1,flex:1},Lr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=hs.style,l=W_.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",m,_,p,g;if(i===o||!s||yp[i]||yp[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),g=t.getCTM&&Pp(t),(f||o==="%")&&(or[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],Ve(f?s/m*d:s/100*m);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Rr||!_.appendChild)&&(_=Rr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Xn.time&&!p.uncache)return Ve(s/p.width*d);if(f&&(e==="height"||e==="width")){var w=t.style[e];t.style[e]=d+i,m=t[h],w?t.style[e]=w:Ir(t,e)}else(f||o==="%")&&!rx[ei(_,"display")]&&(a.position=ei(t,"position")),_===t&&(a.position="static"),_.appendChild(hs),m=hs[h],_.removeChild(hs),a.position="absolute";return l&&f&&(p=Er(_),p.time=Xn.time,p.width=_[h]),Ve(u?m*s/d:m&&s?d/m*s:0)},sr=function(t,e,n,i){var s;return wu||Mu(),e in Wi&&e!=="transform"&&(e=Wi[e],~e.indexOf(",")&&(e=e.split(",")[0])),or[e]&&e!=="transform"?(s=qo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:dl(ei(t,Zn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=fl[e]&&fl[e](t,e,n)||ei(t,e)||lu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Lr(t,e,s,n)+n:s},sx=function(t,e,n,i){if(!n||n==="none"){var s=Xs(e,t,1),o=s&&ei(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=ei(t,"borderTopColor"))}var a=new Nn(this._pt,t.style,e,0,1,gu),l=0,c=0,h,d,u,f,m,_,p,g,w,C,y,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ei(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ei(t,e)||i,_?t.style[e]=_:Ir(t,e)),h=[n,i],hu(h),n=h[0],i=h[1],u=n.match(rs)||[],M=i.match(rs)||[],M.length){for(;d=rs.exec(i);)p=d[0],w=i.substring(l,d.index),m?m=(m+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(m=1),p!==(_=u[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),p.charAt(1)==="="&&(p=ss(f,p)+y),g=parseFloat(p),C=p.substr((g+"").length),l=rs.lastIndex-C.length,C||(C=C||qn.units[e]||y,l===i.length&&(i+=C,a.e+=C)),y!==C&&(f=Lr(t,e,_,C)||0),a._pt={_next:a._pt,p:w||c===1?w:",",s:f,c:g-f,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Tp:wp;return iu.test(i)&&(a.e=0),this._pt=a,a},Sp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ox=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Sp[n]||n,e[1]=Sp[i]||i,e.join(" ")},ax=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],or[a]&&(l=1,a=a==="transformOrigin"?Zn:Be),Ir(n,a);l&&(Ir(n,Be),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",qo(n,1),o.uncache=1,Ep(i)))}},fl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Nn(t._pt,e,n,0,0,ax);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Yo=[1,0,0,1,0,0],Ip={},Lp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Mp=function(t){var e=ei(t,Be);return Lp(e)?Yo:e.substr(7).match(nu).map(Ve)},Au=function(t,e){var n=t._gsap||Er(t),i=t.style,s=Mp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Yo:s):(s===Yo&&!t.offsetParent&&t!==Hs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Hs.appendChild(t)),s=Mp(t),l?i.display=l:Ir(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Hs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},bu=function(t,e,n,i,s,o){var a=t._gsap,l=s||Au(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],m=l[1],_=l[2],p=l[3],g=l[4],w=l[5],C=e.split(" "),y=parseFloat(C[0])||0,M=parseFloat(C[1])||0,T,E,v,S;n?l!==Yo&&(E=f*p-m*_)&&(v=y*(p/E)+M*(-_/E)+(_*w-p*g)/E,S=y*(-m/E)+M*(f/E)-(f*w-m*g)/E,y=v,M=S):(T=Rp(t),y=T.x+(~C[0].indexOf("%")?y/100*T.width:y),M=T.y+(~(C[1]||C[0]).indexOf("%")?M/100*T.height:M)),i||i!==!1&&a.smooth?(g=y-c,w=M-h,a.xOffset=d+(g*f+w*_)-g,a.yOffset=u+(g*m+w*p)-w):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Zn]="0px 0px",o&&(Pr(o,a,"xOrigin",c,y),Pr(o,a,"yOrigin",h,M),Pr(o,a,"xOffset",d,a.xOffset),Pr(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+M)},qo=function(t,e){var n=t._gsap||new uu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ei(t,Zn)||"0",h,d,u,f,m,_,p,g,w,C,y,M,T,E,v,S,A,D,I,F,L,B,X,k,Q,Y,R,$,ct,yt,Gt,Bt;return h=d=u=_=p=g=w=C=y=0,f=m=1,n.svg=!!(t.getCTM&&Pp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Be]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Be]!=="none"?l[Be]:"")),i.scale=i.rotate=i.translate="none"),E=Au(t,n.svg),n.svg&&(n.uncache?(Q=t.getBBox(),c=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),bu(t,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,E)),M=n.xOrigin||0,T=n.yOrigin||0,E!==Yo&&(D=E[0],I=E[1],F=E[2],L=E[3],h=B=E[4],d=X=E[5],E.length===6?(f=Math.sqrt(D*D+I*I),m=Math.sqrt(L*L+F*F),_=D||I?Gs(I,D)*cs:0,w=F||L?Gs(F,L)*cs+_:0,w&&(m*=Math.abs(Math.cos(w*Ws))),n.svg&&(h-=M-(M*D+T*F),d-=T-(M*I+T*L))):(Bt=E[6],yt=E[7],R=E[8],$=E[9],ct=E[10],Gt=E[11],h=E[12],d=E[13],u=E[14],v=Gs(Bt,ct),p=v*cs,v&&(S=Math.cos(-v),A=Math.sin(-v),k=B*S+R*A,Q=X*S+$*A,Y=Bt*S+ct*A,R=B*-A+R*S,$=X*-A+$*S,ct=Bt*-A+ct*S,Gt=yt*-A+Gt*S,B=k,X=Q,Bt=Y),v=Gs(-F,ct),g=v*cs,v&&(S=Math.cos(-v),A=Math.sin(-v),k=D*S-R*A,Q=I*S-$*A,Y=F*S-ct*A,Gt=L*A+Gt*S,D=k,I=Q,F=Y),v=Gs(I,D),_=v*cs,v&&(S=Math.cos(v),A=Math.sin(v),k=D*S+I*A,Q=B*S+X*A,I=I*S-D*A,X=X*S-B*A,D=k,B=Q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=Ve(Math.sqrt(D*D+I*I+F*F)),m=Ve(Math.sqrt(X*X+Bt*Bt)),v=Gs(B,X),w=Math.abs(v)>2e-4?v*cs:0,y=Gt?1/(Gt<0?-Gt:Gt):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Lp(ei(t,Be)),k&&t.setAttribute("transform",k))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(f*=-1,w+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,w+=w<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Ve(f),n.scaleY=Ve(m),n.rotation=Ve(_)+a,n.rotationX=Ve(p)+a,n.rotationY=Ve(g)+a,n.skewX=w+a,n.skewY=C+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Zn]=dl(c)),n.xOffset=n.yOffset=0,n.force3D=qn.force3D,n.renderTransform=n.svg?cx:Cp?Dp:lx,n.uncache=0,n},dl=function(t){return(t=t.split(" "))[0]+" "+t[1]},vu=function(t,e,n){var i=pn(e);return Ve(parseFloat(e)+parseFloat(Lr(t,"x",n+"px",i)))+i},lx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Dp(t,e)},as="0deg",Xo="0px",ls=") ",Dp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,w=n.target,C=n.zOrigin,y="",M=g==="auto"&&t&&t!==1||g===!0;if(C&&(d!==as||h!==as)){var T=parseFloat(h)*Ws,E=Math.sin(T),v=Math.cos(T),S;T=parseFloat(d)*Ws,S=Math.cos(T),o=vu(w,o,E*S*-C),a=vu(w,a,-Math.sin(T)*-C),l=vu(w,l,v*S*-C+C)}p!==Xo&&(y+="perspective("+p+ls),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(M||o!==Xo||a!==Xo||l!==Xo)&&(y+=l!==Xo||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ls),c!==as&&(y+="rotate("+c+ls),h!==as&&(y+="rotateY("+h+ls),d!==as&&(y+="rotateX("+d+ls),(u!==as||f!==as)&&(y+="skew("+u+", "+f+ls),(m!==1||_!==1)&&(y+="scale("+m+", "+_+ls),w.style[Be]=y||"translate(0, 0)"},cx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,w=n.forceCSS,C=parseFloat(o),y=parseFloat(a),M,T,E,v,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ws,c*=Ws,M=Math.cos(l)*d,T=Math.sin(l)*d,E=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=Ws,S=Math.tan(c-h),S=Math.sqrt(1+S*S),E*=S,v*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),M*=S,T*=S)),M=Ve(M),T=Ve(T),E=Ve(E),v=Ve(v)):(M=d,v=u,T=E=0),(C&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(C=Lr(f,"x",o,"px"),y=Lr(f,"y",a,"px")),(m||_||p||g)&&(C=Ve(C+m-(m*M+_*E)+p),y=Ve(y+_-(m*T+_*v)+g)),(i||s)&&(S=f.getBBox(),C=Ve(C+i/100*S.width),y=Ve(y+s/100*S.height)),S="matrix("+M+","+T+","+E+","+v+","+C+","+y+")",f.setAttribute("transform",S),w&&(f.style[Be]=S)},hx=function(t,e,n,i,s){var o=360,a=en(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?cs:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*gp)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*gp)%o-~~(c/o)*o)),t._pt=u=new Nn(t._pt,e,n,i,c,Y_),u.e=h,u.u="deg",t._props.push(n),u},bp=function(t,e){for(var n in e)t[n]=e[n];return t},ux=function(t,e,n){var i=bp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Be]=e,a=qo(n,1),Ir(n,Be),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Be],o[Be]=e,a=qo(n,1),o[Be]=c);for(l in or)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=pn(c),m=pn(h),d=f!==m?Lr(n,l,c,m):parseFloat(c),u=parseFloat(h),t._pt=new Nn(t._pt,a,l,d,u-d,yu),t._pt.u=m||0,t._props.push(l));bp(a,i)};Dn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});fl[t>1?"border"+r:r]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(m){return sr(a,m,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(m,_){return f[m]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var Cu={name:"css",register:Mu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,m,_,p,g,w,C,y,M,T,E,v,S;wu||Mu(),this.styles=this.styles||Ap(t),v=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Wn[_]&&du(_,e,n,i,t,s)))){if(f=typeof h,m=fl[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Vs(h)),m)m(this,t,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ir.lastIndex=0,ir.test(c)||(p=pn(c),g=pn(h),g?p!==g&&(c=Lr(t,_,c,g)+g):p&&(h+=p)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),v.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],en(c)&&~c.indexOf("random(")&&(c=Vs(c)),pn(c+"")||c==="auto"||(c+=qn.units[_]||pn(sr(t,_))||""),(c+"").charAt(1)==="="&&(c=sr(t,_))):c=sr(t,_),u=parseFloat(c),w=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),w&&(h=h.substr(2)),d=parseFloat(h),_ in Wi&&(_==="autoAlpha"&&(u===1&&sr(t,"visibility")==="hidden"&&d&&(u=0),v.push("visibility",0,a.visibility),Pr(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Wi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),C=_ in or,C){if(this.styles.save(_),S=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ei(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=h,h=ei(t,"perspective"),A?t.style.perspective=A:Ir(t,"perspective")}d=parseFloat(h)}if(y||(M=t._gsap,M.renderTransform&&!e.parseTransform||qo(t,e.parseTransform),T=e.smoothOrigin!==!1&&M.smooth,y=this._pt=new Nn(this._pt,a,Be,0,1,M.renderTransform,M,0,-1),y.dep=1),_==="scale")this._pt=new Nn(this._pt,M,"scaleY",M.scaleY,(w?ss(M.scaleY,w+d):d)-M.scaleY||0,yu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(Zn,0,a[Zn]),h=ox(h),M.svg?bu(t,h,0,T,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==M.zOrigin&&Pr(this,M,"zOrigin",M.zOrigin,g),Pr(this,a,_,dl(c),dl(h)));continue}else if(_==="svgOrigin"){bu(t,h,1,T,0,this);continue}else if(_ in Ip){hx(this,M,_,u,w?ss(u,w+h):h);continue}else if(_==="smoothOrigin"){Pr(this,M,"smooth",M.smooth,h);continue}else if(_==="force3D"){M[_]=h;continue}else if(_==="transform"){ux(this,h,t);continue}}else _ in a||(_=Xs(_)||_);if(C||(d||d===0)&&(u||u===0)&&!X_.test(h)&&_ in a)p=(c+"").substr((u+"").length),d||(d=0),g=pn(h)||(_ in qn.units?qn.units[_]:p),p!==g&&(u=Lr(t,_,c,g)),this._pt=new Nn(this._pt,C?M:a,_,u,(w?ss(u,w+d):d)-u,!C&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?J_:yu),this._pt.u=g||0,C&&S!==h?(this._pt.b=c,this._pt.e=S,this._pt.r=Z_):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=q_);else if(_ in a)sx.call(this,t,_,c,w?w+h:h);else if(_ in t)this.add(t,_,c||t[_],w?w+h:h,i,s);else if(_!=="parseTransform"){al(_,h);continue}C||(_ in a?v.push(_,0,a[_]):typeof t[_]=="function"?v.push(_,2,t[_]()):v.push(_,1,c||t[_])),o.push(_)}}E&&xu(this)},render:function(t,e){if(e.tween._time||!Tu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:sr,aliases:Wi,getSetter:function(t,e,n){var i=Wi[e];return i&&i.indexOf(",")<0&&(e=i),e in or&&e!==Zn&&(t._gsap.x||sr(t,"x"))?n&&mp===n?e==="scale"?j_:Q_:(mp=n||{})&&(e==="scale"?tx:ex):t.style&&!ol(t.style[e])?$_:~e.indexOf("-")?K_:ul(t,e)},core:{_removeProperty:Ir,_getMatrix:Au}};Sn.utils.checkPrefix=Xs;Sn.core.getStyleSaver=Ap;(function(r,t,e,n){var i=Dn(r+","+t+","+e,function(s){or[s]=1});Dn(t,function(s){qn.units[s]="deg",Ip[s]=1}),Wi[i[13]]=r+","+t,Dn(n,function(s){var o=s.split(":");Wi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){qn.units[r]="px"});Sn.registerPlugin(Cu);var bt=Sn.registerPlugin(Cu)||Sn,T1=bt.core.Tween;function Np(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function fx(r,t,e){return t&&Np(r.prototype,t),e&&Np(r,e),r}var mn,gl,dx,ni,Dr,Nr,qs,Op,us,Zs,Fp,ar,Ai,Bp,zp=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},kp=1,Ys=[],ee=[],Ci=[],Jo=Date.now,Ru=function(t,e){return e},px=function(){var t=Zs.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ee),i.push.apply(i,Ci),ee=n,Ci=i,Ru=function(o,a){return e[o](a)}},cr=function(t,e){return~Ci.indexOf(t)&&Ci[Ci.indexOf(t)+1][e]},$o=function(t){return!!~Fp.indexOf(t)},On=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Un=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},pl="scrollLeft",ml="scrollTop",Pu=function(){return ar&&ar.isPressed||ee.cache++},_l=function(t,e){var n=function i(s){if(s||s===0){kp&&(ni.history.scrollRestoration="manual");var o=ar&&ar.isPressed;s=i.v=Math.round(s)||(ar&&ar.iOS?1:0),t(s),i.cacheID=ee.cache,o&&Ru("ss",s)}else(e||ee.cache!==i.cacheID||Ru("ref"))&&(i.cacheID=ee.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Mn={s:pl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:_l(function(r){return arguments.length?ni.scrollTo(r,$e.sc()):ni.pageXOffset||Dr[pl]||Nr[pl]||qs[pl]||0})},$e={s:ml,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Mn,sc:_l(function(r){return arguments.length?ni.scrollTo(Mn.sc(),r):ni.pageYOffset||Dr[ml]||Nr[ml]||qs[ml]||0})},Fn=function(t,e){return(e&&e._ctx&&e._ctx.selector||mn.utils.toArray)(t)[0]||(typeof t=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},mx=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},lr=function(t,e){var n=e.s,i=e.sc;$o(t)&&(t=Dr.scrollingElement||Nr);var s=ee.indexOf(t),o=i===$e.sc?1:2;!~s&&(s=ee.push(t)-1),ee[s+o]||On(t,"scroll",Pu);var a=ee[s+o],l=a||(ee[s+o]=_l(cr(t,n),!0)||($o(t)?i:_l(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=mn.getProperty(t,"scrollBehavior")==="smooth"),l},xl=function(t,e,n){var i=t,s=t,o=Jo(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=Jo();_||p-o>l?(s=i,i=m,a=o,o=p):n?i+=m:i=s+(m-s)/(p-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},u=function(m){var _=a,p=s,g=Jo();return(m||m===0)&&m!==i&&h(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},Zo=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Up=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Vp=function(){Zs=mn.core.globals().ScrollTrigger,Zs&&Zs.core&&px()},Gp=function(t){return mn=t||zp(),!gl&&mn&&typeof document<"u"&&document.body&&(ni=window,Dr=document,Nr=Dr.documentElement,qs=Dr.body,Fp=[ni,Dr,Nr,qs],dx=mn.utils.clamp,Bp=mn.core.context||function(){},us="onpointerenter"in qs?"pointer":"mouse",Op=Ge.isTouch=ni.matchMedia&&ni.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ni||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ai=Ge.eventTypes=("ontouchstart"in Nr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Nr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return kp=0},500),gl=1),Zs||Vp(),gl};Mn.op=$e;ee.cache=0;var Ge=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){gl||Gp(mn)||console.warn("Please gsap.registerPlugin(Observer)"),Zs||Vp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,w=n.onDrag,C=n.onPress,y=n.onRelease,M=n.onRight,T=n.onLeft,E=n.onUp,v=n.onDown,S=n.onChangeX,A=n.onChangeY,D=n.onChange,I=n.onToggleX,F=n.onToggleY,L=n.onHover,B=n.onHoverEnd,X=n.onMove,k=n.ignoreCheck,Q=n.isNormalizer,Y=n.onGestureStart,R=n.onGestureEnd,$=n.onWheel,ct=n.onEnable,yt=n.onDisable,Gt=n.onClick,Bt=n.scrollSpeed,Ht=n.capture,J=n.allowClicks,tt=n.lockAxis,_t=n.onLockAxis;this.target=a=Fn(a)||Nr,this.vars=n,f&&(f=mn.utils.toArray(f)),i=i||1e-9,s=s||0,m=m||1,Bt=Bt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ni.getComputedStyle(qs).lineHeight)||22);var zt,dt,Ct,Ft,Dt,qt,Qt,V=this,re=0,ye=0,Ue=n.passive||!h&&n.passive!==!1,Jt=lr(a,Mn),me=lr(a,$e),O=Jt(),De=me(),Xt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ai[0]==="pointerdown",P=$o(a),x=a.ownerDocument||Dr,z=[0,0,0],H=[0,0,0],K=0,ht=function(){return K=Jo()},ot=function(rt,Ot){return(V.event=rt)&&f&&mx(rt.target,f)||Ot&&Xt&&rt.pointerType!=="touch"||k&&k(rt,Ot)},j=function(){V._vx.reset(),V._vy.reset(),dt.pause(),d&&d(V)},nt=function(){var rt=V.deltaX=Up(z),Ot=V.deltaY=Up(H),st=Math.abs(rt)>=i,kt=Math.abs(Ot)>=i;D&&(st||kt)&&D(V,rt,Ot,z,H),st&&(M&&V.deltaX>0&&M(V),T&&V.deltaX<0&&T(V),S&&S(V),I&&V.deltaX<0!=re<0&&I(V),re=V.deltaX,z[0]=z[1]=z[2]=0),kt&&(v&&V.deltaY>0&&v(V),E&&V.deltaY<0&&E(V),A&&A(V),F&&V.deltaY<0!=ye<0&&F(V),ye=V.deltaY,H[0]=H[1]=H[2]=0),(Ft||Ct)&&(X&&X(V),Ct&&(p&&Ct===1&&p(V),w&&w(V),Ct=0),Ft=!1),qt&&!(qt=!1)&&_t&&_t(V),Dt&&($(V),Dt=!1),zt=0},pt=function(rt,Ot,st){z[st]+=rt,H[st]+=Ot,V._vx.update(rt),V._vy.update(Ot),c?zt||(zt=requestAnimationFrame(nt)):nt()},At=function(rt,Ot){tt&&!Qt&&(V.axis=Qt=Math.abs(rt)>Math.abs(Ot)?"x":"y",qt=!0),Qt!=="y"&&(z[2]+=rt,V._vx.update(rt,!0)),Qt!=="x"&&(H[2]+=Ot,V._vy.update(Ot,!0)),c?zt||(zt=requestAnimationFrame(nt)):nt()},mt=function(rt){if(!ot(rt,1)){rt=Zo(rt,h);var Ot=rt.clientX,st=rt.clientY,kt=Ot-V.x,Rt=st-V.y,$t=V.isDragging;V.x=Ot,V.y=st,($t||(kt||Rt)&&(Math.abs(V.startX-Ot)>=s||Math.abs(V.startY-st)>=s))&&(Ct||(Ct=$t?2:1),$t||(V.isDragging=!0),At(kt,Rt))}},ft=V.onPress=function(at){ot(at,1)||at&&at.button||(V.axis=Qt=null,dt.pause(),V.isPressed=!0,at=Zo(at),re=ye=0,V.startX=V.x=at.clientX,V.startY=V.y=at.clientY,V._vx.reset(),V._vy.reset(),On(Q?a:x,Ai[1],mt,Ue,!0),V.deltaX=V.deltaY=0,C&&C(V))},lt=V.onRelease=function(at){if(!ot(at,1)){Un(Q?a:x,Ai[1],mt,!0);var rt=!isNaN(V.y-V.startY),Ot=V.isDragging,st=Ot&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),kt=Zo(at);!st&&rt&&(V._vx.reset(),V._vy.reset(),h&&J&&mn.delayedCall(.08,function(){if(Jo()-K>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(x.createEvent){var Rt=x.createEvent("MouseEvents");Rt.initMouseEvent("click",!0,!0,ni,1,kt.screenX,kt.screenY,kt.clientX,kt.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(Rt)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,d&&Ot&&!Q&&dt.restart(!0),Ct&&nt(),g&&Ot&&g(V),y&&y(V,st)}},Nt=function(rt){return rt.touches&&rt.touches.length>1&&(V.isGesturing=!0)&&Y(rt,V.isDragging)},Vt=function(){return(V.isGesturing=!1)||R(V)},N=function(rt){if(!ot(rt)){var Ot=Jt(),st=me();pt((Ot-O)*Bt,(st-De)*Bt,1),O=Ot,De=st,d&&dt.restart(!0)}},ut=function(rt){if(!ot(rt)){rt=Zo(rt,h),$&&(Dt=!0);var Ot=(rt.deltaMode===1?l:rt.deltaMode===2?ni.innerHeight:1)*m;pt(rt.deltaX*Ot,rt.deltaY*Ot,0),d&&!Q&&dt.restart(!0)}},et=function(rt){if(!ot(rt)){var Ot=rt.clientX,st=rt.clientY,kt=Ot-V.x,Rt=st-V.y;V.x=Ot,V.y=st,Ft=!0,d&&dt.restart(!0),(kt||Rt)&&At(kt,Rt)}},gt=function(rt){V.event=rt,L(V)},vt=function(rt){V.event=rt,B(V)},it=function(rt){return ot(rt)||Zo(rt,h)&&Gt(V)};dt=V._dc=mn.delayedCall(u||.25,j).pause(),V.deltaX=V.deltaY=0,V._vx=xl(0,50,!0),V._vy=xl(0,50,!0),V.scrollX=Jt,V.scrollY=me,V.isDragging=V.isGesturing=V.isPressed=!1,Bp(this),V.enable=function(at){return V.isEnabled||(On(P?x:a,"scroll",Pu),o.indexOf("scroll")>=0&&On(P?x:a,"scroll",N,Ue,Ht),o.indexOf("wheel")>=0&&On(a,"wheel",ut,Ue,Ht),(o.indexOf("touch")>=0&&Op||o.indexOf("pointer")>=0)&&(On(a,Ai[0],ft,Ue,Ht),On(x,Ai[2],lt),On(x,Ai[3],lt),J&&On(a,"click",ht,!0,!0),Gt&&On(a,"click",it),Y&&On(x,"gesturestart",Nt),R&&On(x,"gestureend",Vt),L&&On(a,us+"enter",gt),B&&On(a,us+"leave",vt),X&&On(a,us+"move",et)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=Ft=Ct=!1,V._vx.reset(),V._vy.reset(),O=Jt(),De=me(),at&&at.type&&ft(at),ct&&ct(V)),V},V.disable=function(){V.isEnabled&&(Ys.filter(function(at){return at!==V&&$o(at.target)}).length||Un(P?x:a,"scroll",Pu),V.isPressed&&(V._vx.reset(),V._vy.reset(),Un(Q?a:x,Ai[1],mt,!0)),Un(P?x:a,"scroll",N,Ht),Un(a,"wheel",ut,Ht),Un(a,Ai[0],ft,Ht),Un(x,Ai[2],lt),Un(x,Ai[3],lt),Un(a,"click",ht,!0),Un(a,"click",it),Un(x,"gesturestart",Nt),Un(x,"gestureend",Vt),Un(a,us+"enter",gt),Un(a,us+"leave",vt),Un(a,us+"move",et),V.isEnabled=V.isPressed=V.isDragging=!1,yt&&yt(V))},V.kill=V.revert=function(){V.disable();var at=Ys.indexOf(V);at>=0&&Ys.splice(at,1),ar===V&&(ar=0)},Ys.push(V),Q&&$o(a)&&(ar=V),V.enable(_)},fx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ge.version="3.15.0";Ge.create=function(r){return new Ge(r)};Ge.register=Gp;Ge.getAll=function(){return Ys.slice()};Ge.getById=function(r){return Ys.filter(function(t){return t.vars.id===r})[0]};zp()&&mn.registerPlugin(Ge);var Et,Qs,oe,ve,si,_e,Wu,Nl,ha,ia,Qo,vl,bn,Fl,Fu,zn,Hp,Wp,js,om,Iu,am,Bn,Bu,lm,cm,Ur,zu,Xu,to,Yu,ra,ku,Lu,yl=1,wn=Date.now,Du=wn(),Si=0,jo=0,Xp=function(t,e,n){var i=ri(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Yp=function(t,e){return e&&(!ri(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},gx=function r(){return jo&&requestAnimationFrame(r)},qp=function(){return Fl=1},Zp=function(){return Fl=0},Xi=function(t){return t},ta=function(t){return Math.round(t*1e5)/1e5||0},hm=function(){return typeof window<"u"},um=function(){return Et||hm()&&(Et=window.gsap)&&Et.registerPlugin&&Et},_s=function(t){return!!~Wu.indexOf(t)},fm=function(t){return(t==="Height"?Yu:oe["inner"+t])||si["client"+t]||_e["client"+t]},dm=function(t){return cr(t,"getBoundingClientRect")||(_s(t)?function(){return Dl.width=oe.innerWidth,Dl.height=Yu,Dl}:function(){return hr(t)})},_x=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=cr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?fm(s):t["client"+s])||0}},xx=function(t,e){return!e||~Ci.indexOf(t)?dm(t):function(){return Dl}},Yi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=cr(t,n))?o()-dm(t)()[s]:_s(t)?(si[n]||_e[n])-fm(i):t[n]-t["offset"+i])},Sl=function(t,e){for(var n=0;n<js.length;n+=3)(!e||~e.indexOf(js[n+1]))&&t(js[n],js[n+1],js[n+2])},ri=function(t){return typeof t=="string"},Tn=function(t){return typeof t=="function"},ea=function(t){return typeof t=="number"},fs=function(t){return typeof t=="object"},Ko=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Js=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},$s=Math.abs,pm="left",mm="top",qu="right",Zu="bottom",ps="width",ms="height",sa="Right",oa="Left",aa="Top",la="Bottom",Ke="padding",vi="margin",no="Width",Ju="Height",nn="px",yi=function(t){return oe.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},vx=function(t){var e=yi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Jp=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},hr=function(t,e){var n=e&&yi(t)[Fu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Et.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ul=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},gm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},yx=function(t){return function(e){return Et.utils.snap(gm(t),e)}},$u=function(t){var e=Et.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Sx=function(t){return function(e,n){return $u(gm(t))(e,n.direction)}},Ml=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},cn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},ln=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},bl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},$p={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},wl={toggleActions:"play",anticipatePin:0},Ol={top:0,left:0,center:.5,bottom:1,right:1},Rl=function(t,e){if(ri(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Ol?Ol[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Tl=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,m=ve.createElement("div"),_=_s(n)||cr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?_e:n.tagName==="IFRAME"?n.contentDocument.body:n,w=t.indexOf("start")!==-1,C=w?c:h,y="border-color:"+C+";font-size:"+d+";color:"+C+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===$e?qu:Zu)+":"+(o+parseFloat(u))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=w,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=y,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],Pl(m,0,i,w),m},Pl=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+no]=1,s["border"+a+no]=0,s[n.p]=e+"px",Et.set(t,s)},ne=[],Vu={},ua,Kp=function(){return wn()-Si>34&&(ua||(ua=requestAnimationFrame(ur)))},Ks=function(){(!Bn||!Bn.isPressed||Bn.startX>_e.clientWidth)&&(ee.cache++,Bn?ua||(ua=requestAnimationFrame(ur)):ur(),Si||vs("scrollStart"),Si=wn())},Nu=function(){cm=oe.innerWidth,lm=oe.innerHeight},na=function(t){ee.cache++,(t===!0||!bn&&!am&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!Bu||cm!==oe.innerWidth||Math.abs(oe.innerHeight-lm)>oe.innerHeight*.25))&&Nl.restart(!0)},xs={},Mx=[],_m=function r(){return ln(Zt,"scrollEnd",r)||ds(!0)},vs=function(t){return xs[t]&&xs[t].map(function(e){return e()})||Mx},ii=[],xm=function(t){for(var e=0;e<ii.length;e+=5)(!t||ii[e+4]&&ii[e+4].query===t)&&(ii[e].style.cssText=ii[e+1],ii[e].getBBox&&ii[e].setAttribute("transform",ii[e+2]||""),ii[e+3].uncache=1)},vm=function(){return ee.forEach(function(t){return Tn(t)&&++t.cacheID&&(t.rec=t())})},Ku=function(t,e){var n;for(zn=0;zn<ne.length;zn++)n=ne[zn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));ra=!0,e&&xm(e),e||vs("revert")},ym=function(t,e){ee.cache++,(e||!kn)&&ee.forEach(function(n){return Tn(n)&&n.cacheID++&&(n.rec=0)}),ri(t)&&(oe.history.scrollRestoration=Xu=t)},kn,gs=0,Qp,bx=function(){if(Qp!==gs){var t=Qp=gs;requestAnimationFrame(function(){return t===gs&&ds(!0)})}},Sm=function(){_e.appendChild(to),Yu=!Bn&&to.offsetHeight||oe.innerHeight,_e.removeChild(to)},jp=function(t){return ha(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},ds=function(t,e){if(si=ve.documentElement,_e=ve.body,Wu=[oe,ve,si,_e],Si&&!t&&!ra){cn(Zt,"scrollEnd",_m);return}Sm(),kn=Zt.isRefreshing=!0,ra||vm();var n=vs("refreshInit");om&&Zt.sort(),e||Ku(),ee.forEach(function(i){Tn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ne.slice(0).forEach(function(i){return i.refresh()}),ra=!1,ne.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),ku=1,jp(!0),ne.forEach(function(i){var s=Yi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),jp(!1),ku=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ee.forEach(function(i){Tn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),ym(Xu,1),Nl.pause(),gs++,kn=2,ur(2),ne.forEach(function(i){return Tn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),kn=Zt.isRefreshing=!1,vs("refresh")},Gu=0,Il=1,ca,ur=function(t){if(t===2||!kn&&!ra){Zt.isUpdating=!0,ca&&ca.update(0);var e=ne.length,n=wn(),i=n-Du>=50,s=e&&ne[0].scroll();if(Il=Gu>s?-1:1,kn||(Gu=s),i&&(Si&&!Fl&&n-Si>200&&(Si=0,vs("scrollEnd")),Qo=Du,Du=n),Il<0){for(zn=e;zn-- >0;)ne[zn]&&ne[zn].update(0,i);Il=1}else for(zn=0;zn<e;zn++)ne[zn]&&ne[zn].update(0,i);Zt.isUpdating=!1}ua=0},Hu=[pm,mm,Zu,qu,vi+la,vi+sa,vi+aa,vi+oa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ll=Hu.concat([ps,ms,"boxSizing","max"+no,"max"+Ju,"position",vi,Ke,Ke+aa,Ke+sa,Ke+la,Ke+oa]),wx=function(t,e,n){eo(n);var i=t._gsap;if(i.spacerIsNative)eo(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Uu=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Hu.length,o=e.style,a=t.style,l;s--;)l=Hu[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Zu]=a[qu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ps]=Ul(t,Mn)+nn,o[ms]=Ul(t,$e)+nn,o[Ke]=a[vi]=a[mm]=a[pm]="0",eo(i),a[ps]=a["max"+no]=n[ps],a[ms]=a["max"+Ju]=n[ms],a[Ke]=n[Ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Tx=/([A-Z])/g,eo=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Et.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Tx,"-$1").toLowerCase())}},El=function(t){for(var e=Ll.length,n=t.style,i=[],s=0;s<e;s++)i.push(Ll[s],n[Ll[s]]);return i.t=t,i},Ex=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Dl={left:0,top:0},tm=function(t,e,n,i,s,o,a,l,c,h,d,u,f,m){Tn(t)&&(t=t(l)),ri(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Rl("0"+t.substr(3),n):0));var _=f?f.time():0,p,g,w;if(f&&f.seek(0),isNaN(t)||(t=+t),ea(t))f&&(t=Et.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&Pl(a,n,i,!0);else{Tn(e)&&(e=e(l));var C=(t||"0").split(" "),y,M,T,E;w=Fn(e,l)||_e,y=hr(w)||{},(!y||!y.left&&!y.top)&&yi(w).display==="none"&&(E=w.style.display,w.style.display="block",y=hr(w),E?w.style.display=E:w.style.removeProperty("display")),M=Rl(C[0],y[i.d]),T=Rl(C[1]||"0",n),t=y[i.p]-c[i.p]-h+M+s-T,a&&Pl(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var v=t+n,S=o._isStart;p="scroll"+i.d2,Pl(o,v,i,S&&v>20||!S&&(d?Math.max(_e[p],si[p]):o.parentNode[p])<=v+1),d&&(c=hr(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+nn))}return f&&w&&(p=hr(w),f.seek(u),g=hr(w),f._caScrollDist=p[i.p]-g[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},Ax=/(webkit|moz|length|cssText|inset)/i,em=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===_e){t._stOrig=s.cssText,a=yi(t);for(o in a)!+o&&!Ax.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Et.core.getCache(t).uncache=1,e.appendChild(t)}},Mm=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Al=function(t,e,n){var i={};i[e.p]="+="+n,Et.set(t,i)},nm=function(t,e){var n=lr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,m={};c=c||n();var _=Mm(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){ee.cache++,o.tween&&ur()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Et.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(t,"wheel",n.wheelHandler),Zt.isTouch&&cn(t,"touchmove",n.wheelHandler),s},Zt=(function(){function r(e,n){Qs||r.register(Et)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),zu(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!jo){this.update=this.refresh=this.kill=Xi;return}n=Jp(ri(n)||ea(n)||n.nodeType?{trigger:n}:n,wl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,w=s.onSnapComplete,C=s.once,y=s.snap,M=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,v=s.fastScrollEnd,S=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Mn:$e,D=!d&&d!==0,I=Fn(n.scroller||oe),F=Et.core.getCache(I),L=_s(I),B=("pinType"in n?n.pinType:cr(I,"pinType")||L&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=D&&n.toggleActions.split(" "),Q="markers"in n?n.markers:wl.markers,Y=L?0:parseFloat(yi(I)["border"+A.p2+no])||0,R=this,$=n.onRefreshInit&&function(){return n.onRefreshInit(R)},ct=_x(I,L,A),yt=xx(I,L),Gt=0,Bt=0,Ht=0,J=lr(I,A),tt,_t,zt,dt,Ct,Ft,Dt,qt,Qt,V,re,ye,Ue,Jt,me,O,De,Xt,P,x,z,H,K,ht,ot,j,nt,pt,At,mt,ft,lt,Nt,Vt,N,ut,et,gt,vt;if(R._startClamp=R._endClamp=!1,R._dir=A,p*=45,R.scroller=I,R.scroll=E?E.time.bind(E):J,dt=J(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(om=1,n.refreshPriority===-9999&&(ca=R)),F.tweenScroll=F.tweenScroll||{top:nm(I,$e),left:nm(I,Mn)},R.tweenTo=tt=F.tweenScroll[A.p],R.scrubDuration=function(st){Nt=ea(st)&&st,Nt?lt?lt.duration(st):lt=Et.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Nt,paused:!0,onComplete:function(){return g&&g(R)}}):(lt&&lt.progress(1).kill(),lt=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),mt=0,l||(l=i.vars.id)),y&&((!fs(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in _e.style&&Et.set(L?[_e,si]:I,{scrollBehavior:"auto"}),ee.forEach(function(st){return Tn(st)&&st.target===(L?ve.scrollingElement||si:I)&&(st.smooth=!1)}),zt=Tn(y.snapTo)?y.snapTo:y.snapTo==="labels"?yx(i):y.snapTo==="labelsDirectional"?Sx(i):y.directional!==!1?function(st,kt){return $u(y.snapTo)(st,wn()-Bt<500?0:kt.direction)}:Et.utils.snap(y.snapTo),Vt=y.duration||{min:.1,max:2},Vt=fs(Vt)?ia(Vt.min,Vt.max):ia(Vt,Vt),N=Et.delayedCall(y.delay||Nt/2||.1,function(){var st=J(),kt=wn()-Bt<500,Rt=tt.tween;if((kt||Math.abs(R.getVelocity())<10)&&!Rt&&!Fl&&Gt!==st){var $t=(st-Ft)/Jt,qe=i&&!D?i.totalProgress():$t,se=kt?0:(qe-ft)/(wn()-Qo)*1e3||0,Re=Et.utils.clamp(-$t,1-$t,$s(se/2)*se/.185),on=$t+(y.inertia===!1?0:Re),Pe,Me,he=y,Pn=he.onStart,Ae=he.onInterrupt,_n=he.onComplete;if(Pe=zt(on,R),ea(Pe)||(Pe=on),Me=Math.max(0,Math.round(Ft+Pe*Jt)),st<=Dt&&st>=Ft&&Me!==st){if(Rt&&!Rt._initted&&Rt.data<=$s(Me-st))return;y.inertia===!1&&(Re=Pe-$t),tt(Me,{duration:Vt($s(Math.max($s(on-qe),$s(Pe-qe))*.185/se/.05||0)),ease:y.ease||"power3",data:$s(Me-st),onInterrupt:function(){return N.restart(!0)&&Ae&&Js(R,Ae)},onComplete:function(){R.update(),Gt=J(),i&&!D&&(lt?lt.resetTo("totalProgress",Pe,i._tTime/i._tDur):i.progress(Pe)),mt=ft=i&&!D?i.totalProgress():R.progress,w&&w(R),_n&&Js(R,_n)}},st,Re*Jt,Me-st-Re*Jt),Pn&&Js(R,Pn,tt.tween)}}else R.isActive&&Gt!==st&&N.restart(!0)}).pause()),l&&(Vu[l]=R),u=R.trigger=Fn(u||f!==!0&&f),vt=u&&u._gsap&&u._gsap.stRevert,vt&&(vt=vt(R)),f=f===!0?u:Fn(f),ri(a)&&(a={targets:u,className:a}),f&&(m===!1||m===vi||(m=!m&&f.parentNode&&f.parentNode.style&&yi(f.parentNode).display==="flex"?!1:Ke),R.pin=f,_t=Et.core.getCache(f),_t.spacer?me=_t.pinState:(T&&(T=Fn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),_t.spacerIsNative=!!T,T&&(_t.spacerState=El(T))),_t.spacer=Xt=T||ve.createElement("div"),Xt.classList.add("pin-spacer"),l&&Xt.classList.add("pin-spacer-"+l),_t.pinState=me=El(f)),n.force3D!==!1&&Et.set(f,{force3D:!0}),R.spacer=Xt=_t.spacer,At=yi(f),ht=At[m+A.os2],x=Et.getProperty(f),z=Et.quickSetter(f,A.a,nn),Uu(f,Xt,At),De=El(f)),Q){ye=fs(Q)?Jp(Q,$p):$p,V=Tl("scroller-start",l,I,A,ye,0),re=Tl("scroller-end",l,I,A,ye,0,V),P=V["offset"+A.op.d2];var it=Fn(cr(I,"content")||I);qt=this.markerStart=Tl("start",l,it,A,ye,P,0,E),Qt=this.markerEnd=Tl("end",l,it,A,ye,P,0,E),E&&(gt=Et.quickSetter([qt,Qt],A.a,nn)),!B&&!(Ci.length&&cr(I,"fixedMarkers")===!0)&&(vx(L?_e:I),Et.set([V,re],{force3D:!0}),j=Et.quickSetter(V,A.a,nn),pt=Et.quickSetter(re,A.a,nn))}if(E){var at=E.vars.onUpdate,rt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),at&&at.apply(E,rt||[])})}if(R.previous=function(){return ne[ne.indexOf(R)-1]},R.next=function(){return ne[ne.indexOf(R)+1]},R.revert=function(st,kt){if(!kt)return R.kill(!0);var Rt=st!==!1||!R.enabled,$t=bn;Rt!==R.isReverted&&(Rt&&(ut=Math.max(J(),R.scroll.rec||0),Ht=R.progress,et=i&&i.progress()),qt&&[qt,Qt,V,re].forEach(function(qe){return qe.style.display=Rt?"none":"block"}),Rt&&(bn=R,R.update(Rt)),f&&(!M||!R.isActive)&&(Rt?wx(f,Xt,me):Uu(f,Xt,yi(f),ot)),Rt||R.update(Rt),bn=$t,R.isReverted=Rt)},R.refresh=function(st,kt,Rt,$t){if(!((bn||!R.enabled)&&!kt)){if(f&&st&&Si){cn(r,"scrollEnd",_m);return}!kn&&$&&$(R),bn=R,tt.tween&&!Rt&&(tt.tween.kill(),tt.tween=0),lt&&lt.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(xt){return xt.vars.immediateRender&&xt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var qe=ct(),se=yt(),Re=E?E.duration():Yi(I,A),on=Jt<=.01||!Jt,Pe=0,Me=$t||0,he=fs(Rt)?Rt.end:n.end,Pn=n.endTrigger||u,Ae=fs(Rt)?Rt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),_n=R.pinnedContainer=n.pinnedContainer&&Fn(n.pinnedContainer,R),In=u&&Math.max(0,ne.indexOf(R))||0,Ze=In,ze,tn,zi,Ls,an,We,pi,Ds,b,U,q,G,W;for(Q&&fs(Rt)&&(G=Et.getProperty(V,A.p),W=Et.getProperty(re,A.p));Ze-- >0;)We=ne[Ze],We.end||We.refresh(0,1)||(bn=R),pi=We.pin,pi&&(pi===u||pi===f||pi===_n)&&!We.isReverted&&(U||(U=[]),U.unshift(We),We.revert(!0,!0)),We!==ne[Ze]&&(In--,Ze--);for(Tn(Ae)&&(Ae=Ae(R)),Ae=Xp(Ae,"start",R),Ft=tm(Ae,u,qe,A,J(),qt,V,R,se,Y,B,Re,E,R._startClamp&&"_startClamp")||(f?-.001:0),Tn(he)&&(he=he(R)),ri(he)&&!he.indexOf("+=")&&(~he.indexOf(" ")?he=(ri(Ae)?Ae.split(" ")[0]:"")+he:(Pe=Rl(he.substr(2),qe),he=ri(Ae)?Ae:(E?Et.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ft):Ft)+Pe,Pn=u)),he=Xp(he,"end",R),Dt=Math.max(Ft,tm(he||(Pn?"100% 0":Re),Pn,qe,A,J()+Pe,Qt,re,R,se,Y,B,Re,E,R._endClamp&&"_endClamp"))||-.001,Pe=0,Ze=In;Ze--;)We=ne[Ze]||{},pi=We.pin,pi&&We.start-We._pinPush<=Ft&&!E&&We.end>0&&(ze=We.end-(R._startClamp?Math.max(0,We.start):We.start),(pi===u&&We.start-We._pinPush<Ft||pi===_n)&&isNaN(Ae)&&(Pe+=ze*(1-We.progress)),pi===f&&(Me+=ze));if(Ft+=Pe,Dt+=Pe,R._startClamp&&(R._startClamp+=Pe),R._endClamp&&!kn&&(R._endClamp=Dt||-.001,Dt=Math.min(Dt,Yi(I,A))),Jt=Dt-Ft||(Ft-=.01)&&.001,on&&(Ht=Et.utils.clamp(0,1,Et.utils.normalize(Ft,Dt,ut))),R._pinPush=Me,qt&&Pe&&(ze={},ze[A.a]="+="+Pe,_n&&(ze[A.p]="-="+J()),Et.set([qt,Qt],ze)),f&&!(ku&&R.end>=Yi(I,A)))ze=yi(f),Ls=A===$e,zi=J(),H=parseFloat(x(A.a))+Me,!Re&&Dt>1&&(q=(L?ve.scrollingElement||si:I).style,q={style:q,value:q["overflow"+A.a.toUpperCase()]},L&&yi(_e)["overflow"+A.a.toUpperCase()]!=="scroll"&&(q.style["overflow"+A.a.toUpperCase()]="scroll")),Uu(f,Xt,ze),De=El(f),tn=hr(f,!0),Ds=B&&lr(I,Ls?Mn:$e)(),m?(ot=[m+A.os2,Jt+Me+nn],ot.t=Xt,Ze=m===Ke?Ul(f,A)+Jt+Me:0,Ze&&(ot.push(A.d,Ze+nn),Xt.style.flexBasis!=="auto"&&(Xt.style.flexBasis=Ze+nn)),eo(ot),_n&&ne.forEach(function(xt){xt.pin===_n&&xt.vars.pinSpacing!==!1&&(xt._subPinOffset=!0)}),B&&J(ut)):(Ze=Ul(f,A),Ze&&Xt.style.flexBasis!=="auto"&&(Xt.style.flexBasis=Ze+nn)),B&&(an={top:tn.top+(Ls?zi-Ft:Ds)+nn,left:tn.left+(Ls?Ds:zi-Ft)+nn,boxSizing:"border-box",position:"fixed"},an[ps]=an["max"+no]=Math.ceil(tn.width)+nn,an[ms]=an["max"+Ju]=Math.ceil(tn.height)+nn,an[vi]=an[vi+aa]=an[vi+sa]=an[vi+la]=an[vi+oa]="0",an[Ke]=ze[Ke],an[Ke+aa]=ze[Ke+aa],an[Ke+sa]=ze[Ke+sa],an[Ke+la]=ze[Ke+la],an[Ke+oa]=ze[Ke+oa],O=Ex(me,an,M),kn&&J(0)),i?(b=i._initted,Iu(1),i.render(i.duration(),!0,!0),K=x(A.a)-H+Jt+Me,nt=Math.abs(Jt-K)>1,B&&nt&&O.splice(O.length-2,2),i.render(0,!0,!0),b||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Iu(0)):K=Jt,q&&(q.value?q.style["overflow"+A.a.toUpperCase()]=q.value:q.style.removeProperty("overflow-"+A.a));else if(u&&J()&&!E)for(tn=u.parentNode;tn&&tn!==_e;)tn._pinOffset&&(Ft-=tn._pinOffset,Dt-=tn._pinOffset),tn=tn.parentNode;U&&U.forEach(function(xt){return xt.revert(!1,!0)}),R.start=Ft,R.end=Dt,dt=Ct=kn?ut:J(),!E&&!kn&&(dt<ut&&J(ut),R.scroll.rec=0),R.revert(!1,!0),Bt=wn(),N&&(Gt=-1,N.restart(!0)),bn=0,i&&D&&(i._initted||et)&&i.progress()!==et&&i.progress(et||0,!0).render(i.time(),!0,!0),(on||Ht!==R.progress||E||_||i&&!i._initted)&&(i&&!D&&(i._initted||Ht||i.vars.immediateRender!==!1)&&i.totalProgress(E&&Ft<-.001&&!Ht?Et.utils.normalize(Ft,Dt,0):Ht,!0),R.progress=on||(dt-Ft)/Jt===Ht?0:Ht),f&&m&&(Xt._pinOffset=Math.round(R.progress*K)),lt&&lt.invalidate(),isNaN(G)||(G-=Et.getProperty(V,A.p),W-=Et.getProperty(re,A.p),Al(V,A,G),Al(qt,A,G-($t||0)),Al(re,A,W),Al(Qt,A,W-($t||0))),on&&!kn&&R.update(),h&&!kn&&!Ue&&(Ue=!0,h(R),Ue=!1)}},R.getVelocity=function(){return(J()-Ct)/(wn()-Qo)*1e3||0},R.endAnimation=function(){Ko(R.callbackAnimation),i&&(lt?lt.progress(1):i.paused()?D||Ko(i,R.direction<0,1):Ko(i,i.reversed()))},R.labelToScroll=function(st){return i&&i.labels&&(Ft||R.refresh()||Ft)+i.labels[st]/i.duration()*Jt||0},R.getTrailing=function(st){var kt=ne.indexOf(R),Rt=R.direction>0?ne.slice(0,kt).reverse():ne.slice(kt+1);return(ri(st)?Rt.filter(function($t){return $t.vars.preventOverlaps===st}):Rt).filter(function($t){return R.direction>0?$t.end<=Ft:$t.start>=Dt})},R.update=function(st,kt,Rt){if(!(E&&!Rt&&!st)){var $t=kn===!0?ut:R.scroll(),qe=st?0:($t-Ft)/Jt,se=qe<0?0:qe>1?1:qe||0,Re=R.progress,on,Pe,Me,he,Pn,Ae,_n,In;if(kt&&(Ct=dt,dt=E?J():$t,y&&(ft=mt,mt=i&&!D?i.totalProgress():se)),p&&f&&!bn&&!yl&&Si&&(!se&&Ft<$t+($t-Ct)/(wn()-Qo)*p?se=1e-4:se===1&&Dt>$t+($t-Ct)/(wn()-Qo)*p&&(se=.9999)),se!==Re&&R.enabled){if(on=R.isActive=!!se&&se<1,Pe=!!Re&&Re<1,Ae=on!==Pe,Pn=Ae||!!se!=!!Re,R.direction=se>Re?1:-1,R.progress=se,Pn&&!bn&&(Me=se&&!Re?0:se===1?1:Re===1?2:3,D&&(he=!Ae&&k[Me+1]!=="none"&&k[Me+1]||k[Me],In=i&&(he==="complete"||he==="reset"||he in i))),S&&(Ae||In)&&(In||d||!i)&&(Tn(S)?S(R):R.getTrailing(S).forEach(function(zi){return zi.endAnimation()})),D||(lt&&!bn&&!yl?(lt._dp._time-lt._start!==lt._time&&lt.render(lt._dp._time-lt._start),lt.resetTo?lt.resetTo("totalProgress",se,i._tTime/i._tDur):(lt.vars.totalProgress=se,lt.invalidate().restart())):i&&i.totalProgress(se,!!(bn&&(Bt||st)))),f){if(st&&m&&(Xt.style[m+A.os2]=ht),!B)z(ta(H+K*se));else if(Pn){if(_n=!st&&se>Re&&Dt+1>$t&&$t+1>=Yi(I,A),M)if(!st&&(on||_n)){var Ze=hr(f,!0),ze=$t-Ft;em(f,_e,Ze.top+(A===$e?ze:0)+nn,Ze.left+(A===$e?0:ze)+nn)}else em(f,Xt);eo(on||_n?O:De),nt&&se<1&&on||z(H+(se===1&&!_n?K:0))}}y&&!tt.tween&&!bn&&!yl&&N.restart(!0),a&&(Ae||C&&se&&(se<1||!Lu))&&ha(a.targets).forEach(function(zi){return zi.classList[on||C?"add":"remove"](a.className)}),o&&!D&&!st&&o(R),Pn&&!bn?(D&&(In&&(he==="complete"?i.pause().totalProgress(1):he==="reset"?i.restart(!0).pause():he==="restart"?i.restart(!0):i[he]()),o&&o(R)),(Ae||!Lu)&&(c&&Ae&&Js(R,c),X[Me]&&Js(R,X[Me]),C&&(se===1?R.kill(!1,1):X[Me]=0),Ae||(Me=se===1?1:3,X[Me]&&Js(R,X[Me]))),v&&!on&&Math.abs(R.getVelocity())>(ea(v)?v:2500)&&(Ko(R.callbackAnimation),lt?lt.progress(1):Ko(i,he==="reverse"?1:!se,1))):D&&o&&!bn&&o(R)}if(pt){var tn=E?$t/E.duration()*(E._caScrollDist||0):$t;j(tn+(V._isFlipped?1:0)),pt(tn)}gt&&gt(-$t/E.duration()*(E._caScrollDist||0))}},R.enable=function(st,kt){R.enabled||(R.enabled=!0,cn(I,"resize",na),L||cn(I,"scroll",Ks),$&&cn(r,"refreshInit",$),st!==!1&&(R.progress=Ht=0,dt=Ct=Gt=J()),kt!==!1&&R.refresh())},R.getTween=function(st){return st&&tt?tt.tween:lt},R.setPositions=function(st,kt,Rt,$t){if(E){var qe=E.scrollTrigger,se=E.duration(),Re=qe.end-qe.start;st=qe.start+Re*st/se,kt=qe.start+Re*kt/se}R.refresh(!1,!1,{start:Yp(st,Rt&&!!R._startClamp),end:Yp(kt,Rt&&!!R._endClamp)},$t),R.update()},R.adjustPinSpacing=function(st){if(ot&&st){var kt=ot.indexOf(A.d)+1;ot[kt]=parseFloat(ot[kt])+st+nn,ot[1]=parseFloat(ot[1])+st+nn,eo(ot)}},R.disable=function(st,kt){if(st!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,kt||lt&&lt.pause(),ut=0,_t&&(_t.uncache=1),$&&ln(r,"refreshInit",$),N&&(N.pause(),tt.tween&&tt.tween.kill()&&(tt.tween=0)),!L)){for(var Rt=ne.length;Rt--;)if(ne[Rt].scroller===I&&ne[Rt]!==R)return;ln(I,"resize",na),L||ln(I,"scroll",Ks)}},R.kill=function(st,kt){R.disable(st,kt),lt&&!kt&&lt.kill(),l&&delete Vu[l];var Rt=ne.indexOf(R);Rt>=0&&ne.splice(Rt,1),Rt===zn&&Il>0&&zn--,Rt=0,ne.forEach(function($t){return $t.scroller===R.scroller&&(Rt=1)}),Rt||kn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,st&&i.revert({kill:!1}),kt||i.kill()),qt&&[qt,Qt,V,re].forEach(function($t){return $t.parentNode&&$t.parentNode.removeChild($t)}),ca===R&&(ca=0),f&&(_t&&(_t.uncache=1),Rt=0,ne.forEach(function($t){return $t.pin===f&&Rt++}),Rt||(_t.spacer=0)),n.onKill&&n.onKill(R)},ne.push(R),R.enable(!1,!1),vt&&vt(R),i&&i.add&&!Jt){var Ot=R.update;R.update=function(){R.update=Ot,ee.cache++,Ft||Dt||R.refresh()},Et.delayedCall(.01,R.update),Jt=.01,Ft=Dt=0}else R.refresh();f&&bx()},r.register=function(n){return Qs||(Et=n||um(),hm()&&window.document&&r.enable(),Qs=jo),Qs},r.defaults=function(n){if(n)for(var i in n)wl[i]=n[i];return wl},r.disable=function(n,i){jo=0,ne.forEach(function(o){return o[i?"kill":"disable"](n)}),ln(oe,"wheel",Ks),ln(ve,"scroll",Ks),clearInterval(vl),ln(ve,"touchcancel",Xi),ln(_e,"touchstart",Xi),Ml(ln,ve,"pointerdown,touchstart,mousedown",qp),Ml(ln,ve,"pointerup,touchend,mouseup",Zp),Nl.kill(),Sl(ln);for(var s=0;s<ee.length;s+=3)bl(ln,ee[s],ee[s+1]),bl(ln,ee[s],ee[s+2])},r.enable=function(){if(oe=window,ve=document,si=ve.documentElement,_e=ve.body,Et){if(ha=Et.utils.toArray,ia=Et.utils.clamp,zu=Et.core.context||Xi,Iu=Et.core.suppressOverwrites||Xi,Xu=oe.history.scrollRestoration||"auto",Gu=oe.pageYOffset||0,Et.core.globals("ScrollTrigger",r),_e){jo=1,to=document.createElement("div"),to.style.height="100vh",to.style.position="absolute",Sm(),gx(),Ge.register(Et),r.isTouch=Ge.isTouch,Ur=Ge.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Bu=Ge.isTouch===1,cn(oe,"wheel",Ks),Wu=[oe,ve,si,_e],Et.matchMedia?(r.matchMedia=function(h){var d=Et.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Et.addEventListener("matchMediaInit",function(){vm(),Ku()}),Et.addEventListener("matchMediaRevert",function(){return xm()}),Et.addEventListener("matchMedia",function(){ds(0,1),vs("matchMedia")}),Et.matchMedia().add("(orientation: portrait)",function(){return Nu(),Nu})):console.warn("Requires GSAP 3.11.0 or later"),Nu(),cn(ve,"scroll",Ks);var n=_e.hasAttribute("style"),i=_e.style,s=i.borderTopStyle,o=Et.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=hr(_e),$e.m=Math.round(a.top+$e.sc())||0,Mn.m=Math.round(a.left+Mn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),vl=setInterval(Kp,250),Et.delayedCall(.5,function(){return yl=0}),cn(ve,"touchcancel",Xi),cn(_e,"touchstart",Xi),Ml(cn,ve,"pointerdown,touchstart,mousedown",qp),Ml(cn,ve,"pointerup,touchend,mouseup",Zp),Fu=Et.utils.checkPrefix("transform"),Ll.push(Fu),Qs=wn(),Nl=Et.delayedCall(.2,ds).pause(),js=[ve,"visibilitychange",function(){var h=oe.innerWidth,d=oe.innerHeight;ve.hidden?(Hp=h,Wp=d):(Hp!==h||Wp!==d)&&na()},ve,"DOMContentLoaded",ds,oe,"load",ds,oe,"resize",na],Sl(cn),ne.forEach(function(h){return h.enable(0,1)}),l=0;l<ee.length;l+=3)bl(ln,ee[l],ee[l+1]),bl(ln,ee[l],ee[l+2])}else if(ve){var c=function h(){r.enable(),ve.removeEventListener("DOMContentLoaded",h)};ve.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Lu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(vl)||(vl=i)&&setInterval(Kp,i),"ignoreMobileResize"in n&&(Bu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Sl(ln)||Sl(cn,n.autoRefreshEvents||"none"),am=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Fn(n),o=ee.indexOf(s),a=_s(s);~o&&ee.splice(o,a?6:2),i&&(a?Ci.unshift(oe,i,_e,i,si,i):Ci.unshift(s,i))},r.clearMatchMedia=function(n){ne.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(ri(n)?Fn(n):n).getBoundingClientRect(),a=o[s?ps:ms]*i||0;return s?o.right-a>0&&o.left+a<oe.innerWidth:o.bottom-a>0&&o.top+a<oe.innerHeight},r.positionInViewport=function(n,i,s){ri(n)&&(n=Fn(n));var o=n.getBoundingClientRect(),a=o[s?ps:ms],l=i==null?a/2:i in Ol?Ol[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/oe.innerWidth:(o.top+l)/oe.innerHeight},r.killAll=function(n){if(ne.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=xs.killAll||[];xs={},i.forEach(function(s){return s()})}},r})();Zt.version="3.15.0";Zt.saveStyles=function(r){return r?ha(r).forEach(function(t){if(t&&t.style){var e=ii.indexOf(t);e>=0&&ii.splice(e,5),ii.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Et.core.getCache(t),zu())}}):ii};Zt.revert=function(r,t){return Ku(!r,t)};Zt.create=function(r,t){return new Zt(r,t)};Zt.refresh=function(r){return r?na(!0):(Qs||Zt.register())&&ds(!0)};Zt.update=function(r){return++ee.cache&&ur(r===!0?2:0)};Zt.clearScrollMemory=ym;Zt.maxScroll=function(r,t){return Yi(r,t?Mn:$e)};Zt.getScrollFunc=function(r,t){return lr(Fn(r),t?Mn:$e)};Zt.getById=function(r){return Vu[r]};Zt.getAll=function(){return ne.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Zt.isScrolling=function(){return!!Si};Zt.snapDirectional=$u;Zt.addEventListener=function(r,t){var e=xs[r]||(xs[r]=[]);~e.indexOf(t)||e.push(t)};Zt.removeEventListener=function(r,t){var e=xs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Zt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Et.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(m){d.length||f.restart(!0),d.push(m.trigger),u.push(m),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Tn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Tn(s)&&(s=s(),cn(Zt,"refresh",function(){return s=t.batchMax()})),ha(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Zt.create(c))}),e};var im=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Ou=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ge.isTouch?" pinch-zoom":""):"none",t===si&&r(_e,e)},Cl={auto:1,scroll:1},Cx=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Et.core.getCache(s),a=wn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_e&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Cl[(l=yi(s)).overflowY]||Cl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!_s(s)&&(Cl[(l=yi(s)).overflowY]||Cl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},bm=function(t,e,n,i){return Ge.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Cx,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&cn(ve,Ge.eventTypes[0],sm,!1,!0)},onDisable:function(){return ln(ve,Ge.eventTypes[0],sm,!0)}})},Rx=/(input|label|select|textarea)/i,rm,sm=function(t){var e=Rx.test(t.target.tagName);(e||rm)&&(t._gsapAllow=!0,rm=e)},Px=function(t){fs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Fn(t.target)||si,h=Et.core.globals().ScrollSmoother,d=h&&h.get(),u=Ur&&(t.content&&Fn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=lr(c,$e),m=lr(c,Mn),_=1,p=(Ge.isTouch&&oe.visualViewport?oe.visualViewport.scale*oe.visualViewport.width:oe.outerWidth)/oe.innerWidth,g=0,w=Tn(i)?function(){return i(a)}:function(){return i||2.8},C,y,M=bm(c,t.type,!0,s),T=function(){return y=!1},E=Xi,v=Xi,S=function(){l=Yi(c,$e),v=ia(Ur?1:0,l),n&&(E=ia(0,Yi(c,Mn))),C=gs},A=function(){u._gsap.y=ta(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(y){requestAnimationFrame(T);var Q=ta(a.deltaY/2),Y=v(f.v-Q);if(u&&Y!==f.v+f.offset){f.offset=Y-f.v;var R=ta((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=ee.cache,ur()}return!0}f.offset&&A(),y=!0},I,F,L,B,X=function(){S(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo("scrollY",l))};return u&&Et.set(u,{y:"+=0"}),t.ignoreCheck=function(k){return Ur&&k.type==="touchmove"&&D(k)||_>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},t.onPress=function(){y=!1;var k=_;_=ta((oe.visualViewport&&oe.visualViewport.scale||1)/p),I.pause(),k!==_&&Ou(c,_>1.01?!0:n?!1:"x"),F=m(),L=f(),S(),C=gs},t.onRelease=t.onGestureStart=function(k,Q){if(f.offset&&A(),!Q)B.restart(!0);else{ee.cache++;var Y=w(),R,$;n&&(R=m(),$=R+Y*.05*-k.velocityX/.227,Y*=im(m,R,$,Yi(c,Mn)),I.vars.scrollX=E($)),R=f(),$=R+Y*.05*-k.velocityY/.227,Y*=im(f,R,$,Yi(c,$e)),I.vars.scrollY=v($),I.invalidate().duration(Y).play(.01),(Ur&&I.vars.scrollY>=l||R>=l-1)&&Et.to({},{onUpdate:X,duration:Y})}o&&o(k)},t.onWheel=function(){I._ts&&I.pause(),wn()-g>1e3&&(C=0,g=wn())},t.onChange=function(k,Q,Y,R,$){if(gs!==C&&S(),Q&&n&&m(E(R[2]===Q?F+(k.startX-k.x):m()+Q-R[1])),Y){f.offset&&A();var ct=$[2]===Y,yt=ct?L+k.startY-k.y:f()+Y-$[1],Gt=v(yt);ct&&yt!==Gt&&(L+=Gt-yt),f(Gt)}(Y||Q)&&ur()},t.onEnable=function(){Ou(c,n?!1:"x"),Zt.addEventListener("refresh",X),cn(oe,"resize",X),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),M.enable()},t.onDisable=function(){Ou(c,!0),ln(oe,"resize",X),Zt.removeEventListener("refresh",X),M.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ge(t),a.iOS=Ur,Ur&&!f()&&f(1),Ur&&Et.ticker.add(Xi),B=a._dc,I=Et.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Mm(f,f(),function(){return I.pause()})},onUpdate:ur,onComplete:B.vars.onComplete}),a};Zt.sort=function(r){if(Tn(r))return ne.sort(r);var t=oe.pageYOffset||0;return Zt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+oe.innerHeight}),ne.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Zt.observe=function(r){return new Ge(r)};Zt.normalizeScroll=function(r){if(typeof r>"u")return Bn;if(r===!0&&Bn)return Bn.enable();if(r===!1){Bn&&Bn.kill(),Bn=r;return}var t=r instanceof Ge?r:Px(r);return Bn&&Bn.target===t.target&&Bn.kill(),_s(t.target)&&(Bn=t),t};Zt.core={_getVelocityProp:xl,_inputObserver:bm,_scrollers:ee,_proxies:Ci,bridge:{ss:function(){Si||vs("scrollStart"),Si=wn()},ref:function(){return bn}}};um()&&Et.registerPlugin(Zt);var wm="1.3.27";function Am(r,t,e){return Math.max(r,Math.min(t,e))}function Ix(r,t,e){return(1-e)*r+e*t}function Lx(r,t,e,n){return Ix(r,t,1-Math.exp(-e*n))}function Dx(r,t){return(r%t+t)%t}var Nx=class{constructor(){Lt(this,"isRunning",!1);Lt(this,"value",0);Lt(this,"from",0);Lt(this,"to",0);Lt(this,"currentTime",0);Lt(this,"lerp");Lt(this,"duration");Lt(this,"easing");Lt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=Am(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Lx(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Ux(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var Ox=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Lt(this,"width",0);Lt(this,"height",0);Lt(this,"scrollHeight",0);Lt(this,"scrollWidth",0);Lt(this,"debouncedResize");Lt(this,"wrapperResizeObserver");Lt(this,"contentResizeObserver");Lt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Lt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Lt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=Ux(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Cm=class{constructor(){Lt(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},Fx=100/6,Or={passive:!1};function Tm(r,t){return r===1?Fx:r===2?t:1}var Bx=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Lt(this,"touchStart",{x:0,y:0});Lt(this,"lastDelta",{x:0,y:0});Lt(this,"window",{width:0,height:0});Lt(this,"emitter",new Cm);Lt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Lt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Lt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Lt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=Tm(n,this.window.width),s=Tm(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Lt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Or),this.element.addEventListener("touchstart",this.onTouchStart,Or),this.element.addEventListener("touchmove",this.onTouchMove,Or),this.element.addEventListener("touchend",this.onTouchEnd,Or)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Or),this.element.removeEventListener("touchstart",this.onTouchStart,Or),this.element.removeEventListener("touchmove",this.onTouchMove,Or),this.element.removeEventListener("touchend",this.onTouchEnd,Or)}},Em=r=>Math.min(1,1.001-2**(-10*r)),Rm=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:w=!0,autoRaf:C=!1,anchors:y=!1,autoToggle:M=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:v=E,stopInertiaOnNavigate:S=!1,respectReducedMotion:A=!0}={}){Lt(this,"_isScrolling",!1);Lt(this,"_isStopped",!1);Lt(this,"_isLocked",!1);Lt(this,"_preventNextNativeScrollEvent",!1);Lt(this,"_resetVelocityTimeout",null);Lt(this,"_rafId",null);Lt(this,"_isDraggingSelection",!1);Lt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Lt(this,"isTouching");Lt(this,"isIos");Lt(this,"time",0);Lt(this,"userData",{});Lt(this,"lastVelocity",0);Lt(this,"velocity",0);Lt(this,"direction",0);Lt(this,"options");Lt(this,"targetScroll");Lt(this,"animatedScroll");Lt(this,"animate",new Nx);Lt(this,"emitter",new Cm);Lt(this,"dimensions");Lt(this,"virtualScroll");Lt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Lt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Lt(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Lt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Lt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Lt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>m instanceof HTMLElement&&(typeof c=="function"&&c?.(m)||m.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&m.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&m.hasAttribute?.("data-lenis-prevent-horizontal")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Lt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Lt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=wm,window.lenis||(window.lenis={}),window.lenis.version=wm,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Em:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:w,autoRaf:C,anchors:y,autoToggle:M,allowNestedScroll:T,naiveDimensions:v,stopInertiaOnNavigate:S,respectReducedMotion:A},this.dimensions=new Ox(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Bx(e,{touchMultiplier:f,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let m=null;if(typeof u=="string"?(m=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),m||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(m=u),m){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}let _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),w=getComputedStyle(this.rootElement),C=this.isHorizontal?Number.parseFloat(w.scrollPaddingLeft):Number.parseFloat(w.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(C)?0:C)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let m=u-this.animatedScroll;m>this.limit/2?u-=this.limit:m<-this.limit/2&&(u+=this.limit)}}else u=Am(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Em:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,d,u,f,m;if(n-(i.time??0)>2e3){i.time=Date.now();let T=window.getComputedStyle(r);if(i.computedStyle=T,s=["auto","overlay","scroll"].includes(T.overflowX),o=["auto","overlay","scroll"].includes(T.overflowY),c=["auto"].includes(T.overscrollBehaviorX),h=["auto"].includes(T.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,m=r.clientHeight,a=d>f,l=u>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",p,g,w,C,y,M;if(_==="horizontal")p=Math.round(r.scrollLeft),g=d-f,w=t,C=s,y=a,M=c;else if(_==="vertical")p=Math.round(r.scrollTop),g=u-m,w=e,C=o,y=l,M=h;else return!1;return!M&&(p>=g||p<=0)?!0:(w>0?p<g:p>0)&&C&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Dx(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var Km=0,Cf=1,Qm=2;var Fa=1,jm=2,bo=3,$r=0,Gn=1,Qi=2,ji=0,wo=1,Ba=2,Rf=3,Pf=4,tg=5;var As=100,eg=101,ng=102,ig=103,rg=104,sg=200,og=201,ag=202,lg=203,If=204,Lf=205,cg=206,hg=207,ug=208,fg=209,dg=210,pg=211,mg=212,gg=213,_g=214,ac=0,lc=1,cc=2,xo=3,hc=4,uc=5,fc=6,dc=7,Df=0,xg=1,vg=2,Ni=0,Nf=1,Uf=2,Of=3,Ff=4,Bf=5,zf=6,kf=7;var Vf=300,Kr=301,Cs=302,kc=303,Vc=304,za=306,pc=1e3,Zi=1001,mc=1002,fn=1003,yg=1004;var ka=1005;var gn=1006,Gc=1007;var Qr=1008;var fi=1009,Gf=1010,Hf=1011,To=1012,Hc=1013,Ui=1014,Oi=1015,Fi=1016,Wc=1017,Xc=1018,Eo=1020,Wf=35902,Xf=35899,Yf=1021,qf=1022,Ti=1023,Ji=1026,jr=1027,Zf=1028,Yc=1029,ts=1030,qc=1031;var Zc=1033,Va=33776,Ga=33777,Ha=33778,Wa=33779,Jc=35840,$c=35841,Kc=35842,Qc=35843,jc=36196,th=37492,eh=37496,nh=37488,ih=37489,Xa=37490,rh=37491,sh=37808,oh=37809,ah=37810,lh=37811,ch=37812,hh=37813,uh=37814,fh=37815,dh=37816,ph=37817,mh=37818,gh=37819,_h=37820,xh=37821,vh=36492,yh=36494,Sh=36495,Mh=36283,bh=36284,Ya=36285,wh=36286;var _a=2300,gc=2301,sc=2302,Sf=2303,Mf=2400,bf=2401,wf=2402;var Sg=3200;var Jf=0,Mg=1,xr="",li="srgb",xa="srgb-linear",va="linear",xe="srgb";var oc=7680;var bg=519,wg=512,Tg=513,Eg=514,Th=515,Ag=516,Cg=517,Eh=518,Rg=519,Pg=35044;var $f="300 es",Di=2e3,ya=2001;function zx(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function kx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Sa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ig(){let r=Sa("canvas");return r.style.display="block",r}var Pm={},vo=null;function Kf(...r){let t="THREE."+r.shift();vo?vo("log",t,...r):console.log(t,...r)}function Lg(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Wt(...r){r=Lg(r);let t="THREE."+r.shift();if(vo)vo("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Yt(...r){r=Lg(r);let t="THREE."+r.shift();if(vo)vo("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Ts(...r){let t=r.join(" ");t in Pm||(Pm[t]=!0,Wt(...r))}function Dg(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Ng={[ac]:lc,[cc]:fc,[hc]:dc,[xo]:uc,[lc]:ac,[fc]:cc,[dc]:hc,[uc]:xo},$i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qu=Math.PI/180,_c=180/Math.PI;function qa(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[e&63|128]+En[e>>8&255]+"-"+En[e>>16&255]+En[e>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function fe(r,t,e){return Math.max(t,Math.min(e,r))}function Vx(r,t){return(r%t+t)%t}function ju(r,t,e){return(1-e)*r+e*t}function fa(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var nd=class nd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nd.prototype.isVector2=!0;var ce=nd,Ki=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(d!==_||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*_;p<0&&(u=-u,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let w=Math.acos(p),C=Math.sin(w);g=Math.sin(g*w)/C,a=Math.sin(a*w)/C,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a;let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},id=class id{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Im.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Im.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tf.copy(this).projectOnVector(t),this.sub(tf)}reflect(t){return this.sub(tf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};id.prototype.isVector3=!0;var Z=id,tf=new Z,Im=new Ki,rd=class rd{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],w=i[1],C=i[4],y=i[7],M=i[2],T=i[5],E=i[8];return s[0]=o*_+a*w+l*M,s[3]=o*p+a*C+l*T,s[6]=o*g+a*y+l*E,s[1]=c*_+h*w+d*M,s[4]=c*p+h*C+d*T,s[7]=c*g+h*y+d*E,s[2]=u*_+f*w+m*M,s[5]=u*p+f*C+m*T,s[8]=u*g+f*y+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ef.makeScale(t,e)),this}rotate(t){return Ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ef.makeRotation(-t)),this}translate(t,e){return Ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ef.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};rd.prototype.isMatrix3=!0;var Kt=rd,ef=new Kt,Lm=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dm=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gx(){let r={enabled:!0,workingColorSpace:xa,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xe&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(i.r=_o(i.r),i.g=_o(i.g),i.b=_o(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xr?va:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[xa]:{primaries:t,whitePoint:n,transfer:va,toXYZ:Lm,fromXYZ:Dm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Lm,fromXYZ:Dm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),r}var le=Gx();function _r(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _o(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var io,xc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{io===void 0&&(io=Sa("canvas")),io.width=t.width,io.height=t.height;let i=io.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=io}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=_r(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_r(e[n]/255)*255):e[n]=_r(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Hx=0,yo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=qa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(nf(i[o].image)):s.push(nf(i[o]))}else s=nf(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function nf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var Wx=0,rf=new Z,$n=class r extends $i{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Zi,i=Zi,s=gn,o=Qr,a=Ti,l=fi,c=r.DEFAULT_ANISOTROPY,h=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=qa(),this.name="",this.source=new yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rf).x}get height(){return this.source.getSize(rf).y}get depth(){return this.source.getSize(rf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pc:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pc:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Vf;$n.DEFAULT_ANISOTROPY=1;var sd=class sd{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,y=(f+1)/2,M=(g+1)/2,T=(h+u)/4,E=(d+_)/4,v=(m+p)/4;return C>y&&C>M?C<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(C),i=T/n,s=E/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=v/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=E/s,i=v/s),this.set(n,i,s,e),this}let w=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(p-m)/w,this.y=(d-_)/w,this.z=(u-h)/w,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sd.prototype.isVector4=!0;var Ee=sd,vc=class extends $i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new $n(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new yo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends vc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ma=class extends $n{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var yc=class extends $n{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var zc=class zc{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,p)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ro.setFromMatrixColumn(t,0).length(),s=1/ro.setFromMatrixColumn(t,1).length(),o=1/ro.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xx,t,Yx)}lookAt(t,e,n){let i=this.elements;return oi.subVectors(t,e),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Fr.crossVectors(n,oi),Fr.lengthSq()===0&&(Math.abs(n.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Fr.crossVectors(n,oi)),Fr.normalize(),Bl.crossVectors(oi,Fr),i[0]=Fr.x,i[4]=Bl.x,i[8]=oi.x,i[1]=Fr.y,i[5]=Bl.y,i[9]=oi.y,i[2]=Fr.z,i[6]=Bl.z,i[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],w=n[3],C=n[7],y=n[11],M=n[15],T=i[0],E=i[4],v=i[8],S=i[12],A=i[1],D=i[5],I=i[9],F=i[13],L=i[2],B=i[6],X=i[10],k=i[14],Q=i[3],Y=i[7],R=i[11],$=i[15];return s[0]=o*T+a*A+l*L+c*Q,s[4]=o*E+a*D+l*B+c*Y,s[8]=o*v+a*I+l*X+c*R,s[12]=o*S+a*F+l*k+c*$,s[1]=h*T+d*A+u*L+f*Q,s[5]=h*E+d*D+u*B+f*Y,s[9]=h*v+d*I+u*X+f*R,s[13]=h*S+d*F+u*k+f*$,s[2]=m*T+_*A+p*L+g*Q,s[6]=m*E+_*D+p*B+g*Y,s[10]=m*v+_*I+p*X+g*R,s[14]=m*S+_*F+p*k+g*$,s[3]=w*T+C*A+y*L+M*Q,s[7]=w*E+C*D+y*B+M*Y,s[11]=w*v+C*I+y*X+M*R,s[15]=w*S+C*F+y*k+M*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15],w=l*f-c*u,C=a*f-c*d,y=a*u-l*d,M=o*f-c*h,T=o*u-l*h,E=o*d-a*h;return e*(_*w-p*C+g*y)-n*(m*w-p*M+g*T)+i*(m*C-_*M+g*E)-s*(m*y-_*T+p*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],w=e*a-n*o,C=e*l-i*o,y=e*c-s*o,M=n*l-i*a,T=n*c-s*a,E=i*c-s*l,v=h*_-d*m,S=h*p-u*m,A=h*g-f*m,D=d*p-u*_,I=d*g-f*_,F=u*g-f*p,L=w*F-C*I+y*D+M*A-T*S+E*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return t[0]=(a*F-l*I+c*D)*B,t[1]=(i*I-n*F-s*D)*B,t[2]=(_*E-p*T+g*M)*B,t[3]=(u*T-d*E-f*M)*B,t[4]=(l*A-o*F-c*S)*B,t[5]=(e*F-i*A+s*S)*B,t[6]=(p*y-m*E-g*C)*B,t[7]=(h*E-u*y+f*C)*B,t[8]=(o*I-a*A+c*v)*B,t[9]=(n*A-e*I-s*v)*B,t[10]=(m*T-_*y+g*w)*B,t[11]=(d*y-h*T-f*w)*B,t[12]=(a*S-o*D-l*v)*B,t[13]=(e*D-n*S+i*v)*B,t[14]=(_*C-m*M-p*w)*B,t[15]=(h*M-d*C+u*w)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,m=s*d,_=o*h,p=o*d,g=a*d,w=l*c,C=l*h,y=l*d,M=n.x,T=n.y,E=n.z;return i[0]=(1-(_+g))*M,i[1]=(f+y)*M,i[2]=(m-C)*M,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(u+g))*T,i[6]=(p+w)*T,i[7]=0,i[8]=(m+C)*E,i[9]=(p-w)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=ro.set(i[0],i[1],i[2]).length(),a=ro.set(i[4],i[5],i[6]).length(),l=ro.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Ri.copy(this);let c=1/o,h=1/a,d=1/l;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=h,Ri.elements[5]*=h,Ri.elements[6]*=h,Ri.elements[8]*=d,Ri.elements[9]*=d,Ri.elements[10]*=d,e.setFromRotationMatrix(Ri),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=Di,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===Di)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ya)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Di,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===Di)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===ya)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};zc.prototype.isMatrix4=!0;var He=zc,ro=new Z,Ri=new He,Xx=new Z(0,0,0),Yx=new Z(1,1,1),Fr=new Z,Bl=new Z,oi=new Z,Nm=new He,Um=new Ki,Hr=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Um.setFromEuler(this),this.setFromQuaternion(Um,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hr.DEFAULT_ORDER="XYZ";var ba=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qx=0,Om=new Z,so=new Ki,fr=new He,zl=new Z,da=new Z,Zx=new Z,Jx=new Ki,Fm=new Z(1,0,0),Bm=new Z(0,1,0),zm=new Z(0,0,1),km={type:"added"},$x={type:"removed"},oo={type:"childadded",child:null},sf={type:"childremoved",child:null},ci=class r extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new Z,e=new Hr,n=new Ki,i=new Z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new Kt}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return so.setFromAxisAngle(t,e),this.quaternion.multiply(so),this}rotateOnWorldAxis(t,e){return so.setFromAxisAngle(t,e),this.quaternion.premultiply(so),this}rotateX(t){return this.rotateOnAxis(Fm,t)}rotateY(t){return this.rotateOnAxis(Bm,t)}rotateZ(t){return this.rotateOnAxis(zm,t)}translateOnAxis(t,e){return Om.copy(t).applyQuaternion(this.quaternion),this.position.add(Om.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fm,t)}translateY(t){return this.translateOnAxis(Bm,t)}translateZ(t){return this.translateOnAxis(zm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zl.copy(t):zl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(da,zl,this.up):fr.lookAt(zl,da,this.up),this.quaternion.setFromRotationMatrix(fr),i&&(fr.extractRotation(i.matrixWorld),so.setFromRotationMatrix(fr),this.quaternion.premultiply(so.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(km),oo.child=t,this.dispatchEvent(oo),oo.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($x),sf.child=t,this.dispatchEvent(sf),sf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fr.multiply(t.parent.matrixWorld)),t.applyMatrix4(fr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(km),oo.child=t,this.dispatchEvent(oo),oo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,t,Zx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,Jx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ci.DEFAULT_UP=new Z(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ws=class extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kx={type:"move"},So=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ws;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},kl={h:0,s:0,l:0};function of(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var de=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=Vx(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=of(o,s,t+1/3),this.g=of(o,s,t),this.b=of(o,s,t-1/3)}return le.colorSpaceToWorking(this,i),this}setStyle(t,e=li){function n(s){s!==void 0&&parseFloat(s)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=li){let n=Ug[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}copyLinearToSRGB(t){return this.r=_o(t.r),this.g=_o(t.g),this.b=_o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return le.workingToColorSpace(An.copy(this),t),Math.round(fe(An.r*255,0,255))*65536+Math.round(fe(An.g*255,0,255))*256+Math.round(fe(An.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(An.copy(this),e);let n=An.r,i=An.g,s=An.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(An.copy(this),e),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=li){le.workingToColorSpace(An.copy(this),t);let e=An.r,n=An.g,i=An.b;return t!==li?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Br),this.setHSL(Br.h+t,Br.s+e,Br.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Br),t.getHSL(kl);let n=ju(Br.h,kl.h,e),i=ju(Br.s,kl.s,e),s=ju(Br.l,kl.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new de;de.NAMES=Ug;var wa=class extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hr,this.environmentIntensity=1,this.environmentRotation=new Hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pi=new Z,dr=new Z,af=new Z,pr=new Z,ao=new Z,lo=new Z,Vm=new Z,lf=new Z,cf=new Z,hf=new Z,uf=new Ee,ff=new Ee,df=new Ee,Gr=class r{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Pi.subVectors(t,e),i.cross(Pi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Pi.subVectors(i,e),dr.subVectors(n,e),af.subVectors(t,e);let o=Pi.dot(Pi),a=Pi.dot(dr),l=Pi.dot(af),c=dr.dot(dr),h=dr.dot(af),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,pr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pr.x),l.addScaledVector(o,pr.y),l.addScaledVector(a,pr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return uf.setScalar(0),ff.setScalar(0),df.setScalar(0),uf.fromBufferAttribute(t,e),ff.fromBufferAttribute(t,n),df.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(uf,s.x),o.addScaledVector(ff,s.y),o.addScaledVector(df,s.z),o}static isFrontFacing(t,e,n,i){return Pi.subVectors(n,e),dr.subVectors(t,e),Pi.cross(dr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),Pi.cross(dr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;ao.subVectors(i,n),lo.subVectors(s,n),lf.subVectors(t,n);let l=ao.dot(lf),c=lo.dot(lf);if(l<=0&&c<=0)return e.copy(n);cf.subVectors(t,i);let h=ao.dot(cf),d=lo.dot(cf);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ao,o);hf.subVectors(t,s);let f=ao.dot(hf),m=lo.dot(hf);if(m>=0&&f<=m)return e.copy(s);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(lo,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return Vm.subVectors(s,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(Vm,a);let g=1/(p+_+u);return o=_*g,a=u*g,e.copy(n).addScaledVector(ao,o).addScaledVector(lo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wr=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ii):Ii.fromBufferAttribute(s,o),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vl.copy(n.boundingBox)),Vl.applyMatrix4(t.matrixWorld),this.union(Vl)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pa),Gl.subVectors(this.max,pa),co.subVectors(t.a,pa),ho.subVectors(t.b,pa),uo.subVectors(t.c,pa),zr.subVectors(ho,co),kr.subVectors(uo,ho),ys.subVectors(co,uo);let e=[0,-zr.z,zr.y,0,-kr.z,kr.y,0,-ys.z,ys.y,zr.z,0,-zr.x,kr.z,0,-kr.x,ys.z,0,-ys.x,-zr.y,zr.x,0,-kr.y,kr.x,0,-ys.y,ys.x,0];return!pf(e,co,ho,uo,Gl)||(e=[1,0,0,0,1,0,0,0,1],!pf(e,co,ho,uo,Gl))?!1:(Hl.crossVectors(zr,kr),e=[Hl.x,Hl.y,Hl.z],pf(e,co,ho,uo,Gl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},mr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ii=new Z,Vl=new Wr,co=new Z,ho=new Z,uo=new Z,zr=new Z,kr=new Z,ys=new Z,pa=new Z,Gl=new Z,Hl=new Z,Ss=new Z;function pf(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ss.fromArray(r,s);let a=i.x*Math.abs(Ss.x)+i.y*Math.abs(Ss.y)+i.z*Math.abs(Ss.z),l=t.dot(Ss),c=e.dot(Ss),h=n.dot(Ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qe=new Z,Wl=new ce,Qx=0,un=class extends $i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pg,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wl.fromBufferAttribute(this,e),Wl.applyMatrix3(t),this.setXY(e,Wl.x,Wl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fa(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fa(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fa(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fa(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fa(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jn(e,this.array),n=Jn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Jn(e,this.array),n=Jn(n,this.array),i=Jn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Jn(e,this.array),n=Jn(n,this.array),i=Jn(i,this.array),s=Jn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ta=class extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ea=class extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var bi=class extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}},jx=new Wr,ma=new Z,mf=new Z,Es=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jx.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ma.subVectors(t,this.center);let e=ma.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ma,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ma.copy(t.center).add(mf)),this.expandByPoint(ma.copy(t.center).sub(mf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},tv=0,Mi=new He,gf=new ci,fo=new Z,ai=new Wr,ga=new Wr,hn=new Z,hi=class r extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zx(t)?Ea:Ta)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,e,n){return Mi.makeTranslation(t,e,n),this.applyMatrix4(Mi),this}scale(t,e,n){return Mi.makeScale(t,e,n),this.applyMatrix4(Mi),this}lookAt(t){return gf.lookAt(t),gf.updateMatrix(),this.applyMatrix4(gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bi(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ai.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ga.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(ai.min,ga.min),ai.expandByPoint(hn),hn.addVectors(ai.max,ga.max),ai.expandByPoint(hn)):(ai.expandByPoint(ga.min),ai.expandByPoint(ga.max))}ai.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)hn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(hn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(fo.fromBufferAttribute(t,c),hn.add(fo)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new un(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new Z,l[v]=new Z;let c=new Z,h=new Z,d=new Z,u=new ce,f=new ce,m=new ce,_=new Z,p=new Z;function g(v,S,A){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,A),u.fromBufferAttribute(s,v),f.fromBufferAttribute(s,S),m.fromBufferAttribute(s,A),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),a[v].add(_),a[S].add(_),a[A].add(_),l[v].add(p),l[S].add(p),l[A].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let v=0,S=w.length;v<S;++v){let A=w[v],D=A.start,I=A.count;for(let F=D,L=D+I;F<L;F+=3)g(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let C=new Z,y=new Z,M=new Z,T=new Z;function E(v){M.fromBufferAttribute(i,v),T.copy(M);let S=a[v];C.copy(S),C.sub(M.multiplyScalar(M.dot(S))).normalize(),y.crossVectors(T,S);let D=y.dot(l[v])<0?-1:1;o.setXYZW(v,C.x,C.y,C.z,D)}for(let v=0,S=w.length;v<S;++v){let A=w[v],D=A.start,I=A.count;for(let F=D,L=D+I;F<L;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,h=new Z,d=new Z;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new un(u,h,d)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var _f=new Z,ev=new Z,nv=new Kt,Li=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=_f.subVectors(n,e).cross(ev.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(_f),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||nv.getNormalMatrix(t),i=this.coplanarPoint(_f).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},iv=0,Xr=class extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=qa(),this.name="",this.type="Material",this.blending=wo,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=If,this.blendDst=Lf,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oc,this.stencilZFail=oc,this.stencilZPass=oc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new de().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Li().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ce().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var gr=new Z,xf=new Z,Xl=new Z,Yl=new Z,Aa=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gr.copy(this.origin).addScaledVector(this.direction,e),gr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){xf.copy(t).add(e).multiplyScalar(.5),Xl.copy(e).sub(t).normalize(),Yl.copy(this.origin).sub(xf);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Xl),a=Yl.dot(this.direction),l=-Yl.dot(Xl),c=Yl.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=s*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(xf).addScaledVector(Xl,u),f}intersectSphere(t,e){if(t.radius<0)return null;gr.subVectors(t.center,this.origin);let n=gr.dot(this.direction),i=gr.dot(gr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,gr)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,g=n.x-o.x,w=n.y-o.y,C=n.z-o.z,y=Math.abs(l),M=Math.abs(c),T=Math.abs(h),E,v,S,A,D,I,F,L,B,X,k,Q;if(y>=M&&y>=T?(S=l,I=d,B=m,Q=g,l>=0?(E=c,v=h,A=u,D=f,F=_,L=p,X=w,k=C):(E=h,v=c,A=f,D=u,F=p,L=_,X=C,k=w)):M>=T?(S=c,I=u,B=_,Q=w,c>=0?(E=h,v=l,A=f,D=d,F=p,L=m,X=C,k=g):(E=l,v=h,A=d,D=f,F=m,L=p,X=g,k=C)):(S=h,I=f,B=p,Q=C,h>=0?(E=l,v=c,A=d,D=u,F=m,L=_,X=g,k=w):(E=c,v=l,A=u,D=d,F=_,L=m,X=w,k=g)),S===0)return null;let Y=E/S,R=v/S,$=1/S,ct=A-Y*I,yt=D-R*I,Gt=F-Y*B,Bt=L-R*B,Ht=X-Y*Q,J=k-R*Q,tt=Ht*Bt-J*Gt,_t=ct*J-yt*Ht,zt=Gt*yt-Bt*ct;if(i){if(tt<0||_t<0||zt<0)return null}else if((tt<0||_t<0||zt<0)&&(tt>0||_t>0||zt>0))return null;let dt=tt+_t+zt;if(dt===0)return null;let Ct=$*(tt*I+_t*B+zt*Q);return(dt>0?Ct<0:Ct>0)?null:this.at(Ct/dt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ca=class extends Xr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hr,this.combine=Df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gm=new He,Ms=new Aa,ql=new Es,Hm=new Z,Zl=new Z,Jl=new Z,$l=new Z,vf=new Z,Kl=new Z,Wm=new Z,Ql=new Z,wi=class extends ci{constructor(t=new hi,e=new Ca){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Kl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(vf.fromBufferAttribute(d,t),o?Kl.addScaledVector(vf,h):Kl.addScaledVector(vf.sub(e),h))}e.add(Kl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ql.copy(n.boundingSphere),ql.applyMatrix4(s),Ms.copy(t.ray).recast(t.near),!(ql.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(ql,Hm)===null||Ms.origin.distanceToSquared(Hm)>(t.far-t.near)**2))&&(Gm.copy(s).invert(),Ms.copy(t.ray).applyMatrix4(Gm),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ms)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],w=Math.max(p.start,f.start),C=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=w,M=C;y<M;y+=3){let T=a.getX(y),E=a.getX(y+1),v=a.getX(y+2);i=jl(this,g,t,n,c,h,d,T,E,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let w=a.getX(p),C=a.getX(p+1),y=a.getX(p+2);i=jl(this,o,t,n,c,h,d,w,C,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],w=Math.max(p.start,f.start),C=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=w,M=C;y<M;y+=3){let T=y,E=y+1,v=y+2;i=jl(this,g,t,n,c,h,d,T,E,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let w=p,C=p+1,y=p+2;i=jl(this,o,t,n,c,h,d,w,C,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function rv(r,t,e,n,i,s,o,a){let l;if(t.side===Gn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===$r,a),l===null)return null;Ql.copy(a),Ql.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Ql);return c<e.near||c>e.far?null:{distance:c,point:Ql.clone(),object:r}}function jl(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Zl),r.getVertexPosition(l,Jl),r.getVertexPosition(c,$l);let h=rv(r,t,e,n,Zl,Jl,$l,Wm);if(h){let d=new Z;Gr.getBarycoord(Wm,Zl,Jl,$l,d),i&&(h.uv=Gr.getInterpolatedAttribute(i,a,l,c,d,new ce)),s&&(h.uv1=Gr.getInterpolatedAttribute(s,a,l,c,d,new ce)),o&&(h.normal=Gr.getInterpolatedAttribute(o,a,l,c,d,new Z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new Z,materialIndex:0};Gr.getNormal(Zl,Jl,$l,u.normal),h.face=u,h.barycoord=d}return h}var Sc=class extends $n{constructor(t=null,e=1,n=1,i,s,o,a,l,c=fn,h=fn,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bs=new Es,sv=new ce(.5,.5),tc=new Z,Ra=class{constructor(t=new Li,e=new Li,n=new Li,i=new Li,s=new Li,o=new Li){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Di,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],m=s[8],_=s[9],p=s[10],g=s[11],w=s[12],C=s[13],y=s[14],M=s[15];if(i[0].setComponents(c-o,f-h,g-m,M-w).normalize(),i[1].setComponents(c+o,f+h,g+m,M+w).normalize(),i[2].setComponents(c+a,f+d,g+_,M+C).normalize(),i[3].setComponents(c-a,f-d,g-_,M-C).normalize(),n)i[4].setComponents(l,u,p,y).normalize(),i[5].setComponents(c-l,f-u,g-p,M-y).normalize();else if(i[4].setComponents(c-l,f-u,g-p,M-y).normalize(),e===Di)i[5].setComponents(c+l,f+u,g+p,M+y).normalize();else if(e===ya)i[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){bs.center.set(0,0,0);let e=sv.distanceTo(t.center);return bs.radius=.7071067811865476+e,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(tc.x=i.normal.x>0?t.max.x:t.min.x,tc.y=i.normal.y>0?t.max.y:t.min.y,tc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(tc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mc=class extends Xr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xm=new He,Tf=new Aa,ec=new Es,nc=new Z,Pa=class extends ci{constructor(t=new hi,e=new Mc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ec.copy(n.boundingSphere),ec.applyMatrix4(i),ec.radius+=s,t.ray.intersectsSphere(ec)===!1)return;Xm.copy(i).invert(),Tf.copy(t.ray).applyMatrix4(Xm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,_=f;m<_;m++){let p=c.getX(m);nc.fromBufferAttribute(d,p),Ym(nc,p,l,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,_=f;m<_;m++)nc.fromBufferAttribute(d,m),Ym(nc,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ym(r,t,e,n,i,s,o){let a=Tf.distanceSqToPoint(r);if(a<e){let l=new Z;Tf.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ia=class extends $n{constructor(t=[],e=Kr,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Yr=class extends $n{constructor(t,e,n=Ui,i,s,o,a=fn,l=fn,c,h=Ji,d=1){if(h!==Ji&&h!==jr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},bc=class extends Yr{constructor(t,e=Ui,n=Kr,i,s,o=fn,a=fn,l,c=Ji){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},La=class extends $n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Mo=class r extends hi{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new bi(c,3)),this.setAttribute("normal",new bi(h,3)),this.setAttribute("uv",new bi(d,2));function m(_,p,g,w,C,y,M,T,E,v,S){let A=y/E,D=M/v,I=y/2,F=M/2,L=T/2,B=E+1,X=v+1,k=0,Q=0,Y=new Z;for(let R=0;R<X;R++){let $=R*D-F;for(let ct=0;ct<B;ct++){let yt=ct*A-I;Y[_]=yt*w,Y[p]=$*C,Y[g]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[g]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(ct/E),d.push(1-R/v),k+=1}}for(let R=0;R<v;R++)for(let $=0;$<E;$++){let ct=u+$+B*R,yt=u+$+B*(R+1),Gt=u+($+1)+B*(R+1),Bt=u+($+1)+B*R;l.push(ct,yt,Bt),l.push(yt,Gt,Bt),Q+=6}a.addGroup(f,Q,S),f+=Q,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Da=class r extends hi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let w=g*u-o;for(let C=0;C<c;C++){let y=C*d-s;m.push(y,-w,0),_.push(0,0,1),p.push(C/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let w=0;w<a;w++){let C=w+c*g,y=w+c*(g+1),M=w+1+c*(g+1),T=w+1+c*g;f.push(C,y,T),f.push(y,M,T)}this.setIndex(f),this.setAttribute("position",new bi(m,3)),this.setAttribute("normal",new bi(_,3)),this.setAttribute("uv",new bi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};function Rs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(qm(i))i.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(qm(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Rn(r){let t={};for(let e=0;e<r.length;e++){let n=Rs(r[e]);for(let i in n)t[i]=n[i]}return t}function qm(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function ov(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Qf(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Og={clone:Rs,merge:Rn},av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vn=class extends Xr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=av,this.fragmentShader=lv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=ov(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(i.value);break;case"v2":this.uniforms[n].value=new ce().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new He().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wc=class extends Vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Tc=class extends Xr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ec=class extends Xr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function po(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function yf(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var qr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ac=class extends qr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mf,endingEnd:Mf}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case bf:s=t,a=2*e-n;break;case wf:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bf:o=t,l=2*n-e;break;case wf:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-u*p+2*u*_-u*m,w=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*m+1,C=(-1-f)*p+(1.5+f)*_+.5*m,y=f*p-f*_;for(let M=0;M!==a;++M)s[M]=g*o[h+M]+w*o[c+M]+C*o[l+M]+y*o[d+M];return s}},Cc=class extends qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},Rc=class extends qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Pc=class extends qr{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),_=1-m;for(let p=0;p!==a;++p)s[p]=o[c+p]*_+o[l+p]*m;return s}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=f*u+m*2,w=d[g],C=d[g+1],y=t*u+m*2,M=h[y],T=h[y+1],E=hv(n,e,w,M,i);s[m]=Fg(E,_,C,T,p)}return s}};function Fg(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function cv(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function hv(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=Fg(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=cv(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var ui=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=po(e,this.TimeBufferType),this.values=po(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:po(t.times,Array),values:po(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),yf(t.settings)&&(n.settings={inTangents:po(t.settings.inTangents,Array),outTangents:po(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Pc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _a:e=this.InterpolantFactoryMethodDiscrete;break;case gc:e=this.InterpolantFactoryMethodLinear;break;case sc:e=this.InterpolantFactoryMethodSmooth;break;case Sf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _a;case this.InterpolantFactoryMethodLinear:return gc;case this.InterpolantFactoryMethodSmooth:return sc;case this.InterpolantFactoryMethodBezier:return Sf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;yf(this.settings)&&(Zm(this.settings.inTangents,t),Zm(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Yt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&kx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===sc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[u+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,yf(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Zm(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=gc;var Zr=class extends ui{constructor(t,e,n){super(t,e,n)}};Zr.prototype.ValueTypeName="bool";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=_a;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ic=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};Ic.prototype.ValueTypeName="color";var Lc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};Lc.prototype.ValueTypeName="number";var Dc=class extends qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ki.slerpFlat(s,0,o,c-a,o,c,l);return s}},Na=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Dc(this.times,this.values,this.getValueSize(),t)}};Na.prototype.ValueTypeName="quaternion";Na.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends ui{constructor(t,e,n){super(t,e,n)}};Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=_a;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};Nc.prototype.ValueTypeName="vector";var Uc=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bg=new Uc,Oc=class{constructor(t){this.manager=t!==void 0?t:Bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Oc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ic=new Z,rc=new Ki,qi=new Z,Ua=class extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ic,rc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,rc,qi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ic,rc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,rc,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vr=new Z,Jm=new ce,$m=new ce,Cn=class extends Ua{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_c*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _c*2*Math.atan(Math.tan(Qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vr.x,Vr.y).multiplyScalar(-t/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vr.x,Vr.y).multiplyScalar(-t/Vr.z)}getViewSize(t,e){return this.getViewBounds(t,Jm,$m),e.subVectors($m,Jm)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qu*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Oa=class extends Ua{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var mo=-90,go=1,Fc=class extends ci{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Cn(mo,go,t,e);i.layers=this.layers,this.add(i);let s=new Cn(mo,go,t,e);s.layers=this.layers,this.add(s);let o=new Cn(mo,go,t,e);o.layers=this.layers,this.add(o);let a=new Cn(mo,go,t,e);a.layers=this.layers,this.add(a);let l=new Cn(mo,go,t,e);l.layers=this.layers,this.add(l);let c=new Cn(mo,go,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Bc=class extends Cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var jf="\\[\\]\\.:\\/",uv=new RegExp("["+jf+"]","g"),td="[^"+jf+"]",fv="[^"+jf.replace("\\.","")+"]",dv=/((?:WC+[\/:])*)/.source.replace("WC",td),pv=/(WCOD+)?/.source.replace("WCOD",fv),mv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",td),gv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",td),_v=new RegExp("^"+dv+pv+mv+gv+"$"),xv=["material","materials","bones","map"],Ef=class{constructor(t,e,n){let i=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(uv,"")}static parseTrackName(t){let e=_v.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);xv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=Ef;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var F1=new Float32Array(1);var od=class od{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};od.prototype.isMatrix2=!0;var Af=od;function ed(r,t,e,n){let i=vv(n);switch(e){case Yf:return r*t;case Zf:return r*t/i.components*i.byteLength;case Yc:return r*t/i.components*i.byteLength;case ts:return r*t*2/i.components*i.byteLength;case qc:return r*t*2/i.components*i.byteLength;case qf:return r*t*3/i.components*i.byteLength;case Ti:return r*t*4/i.components*i.byteLength;case Zc:return r*t*4/i.components*i.byteLength;case Va:case Ga:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ha:case Wa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $c:case Qc:return Math.max(r,16)*Math.max(t,8)/4;case Jc:case Kc:return Math.max(r,8)*Math.max(t,8)/2;case jc:case th:case nh:case ih:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case eh:case Xa:case rh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case sh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case oh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ah:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case lh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ch:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case hh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case uh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case fh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case dh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ph:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case mh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case gh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case _h:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case xh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case vh:case yh:case Sh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Mh:case bh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ya:case wh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vv(r){switch(r){case fi:case Gf:return{byteLength:1,components:1};case To:case Hf:case Fi:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case Ui:case Hc:case Oi:return{byteLength:4,components:1};case Wf:case Xf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function o0(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Sv(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Mv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bv=`#ifdef USE_ALPHAHASH
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
#endif`,wv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ev=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cv=`#ifdef USE_AOMAP
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
#endif`,Rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pv=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Iv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uv=`#ifdef USE_IRIDESCENCE
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
#endif`,Ov=`#ifdef USE_BUMPMAP
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
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xv=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Yv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qv=`vec3 transformedNormal = objectNormal;
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
#endif`,Zv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$v=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",jv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ny=`#ifdef USE_ENVMAP
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
#endif`,iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cy=`#ifdef USE_GRADIENTMAP
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
}`,hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dy=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,py=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,my=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,yy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sy=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,My=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,by=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ly=`#if defined( USE_POINTS_UV )
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
#endif`,Dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ny=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Oy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,By=`#ifdef USE_MORPHTARGETS
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
#endif`,zy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ky=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xy=`#ifdef USE_NORMALMAP
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
#endif`,Yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ky=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Qy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,oS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,aS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,lS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cS=`#ifdef USE_SKINNING
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
#endif`,hS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uS=`#ifdef USE_SKINNING
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
#endif`,fS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gS=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_S=`#ifdef USE_TRANSMISSION
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
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,MS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bS=`uniform sampler2D t2D;
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
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ES=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`#include <common>
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
}`,RS=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PS=`#define DISTANCE
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
}`,IS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`uniform float scale;
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
}`,US=`uniform vec3 diffuse;
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
}`,OS=`#include <common>
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
}`,FS=`uniform vec3 diffuse;
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
}`,BS=`#define LAMBERT
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
}`,zS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,kS=`#define MATCAP
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
}`,VS=`#define MATCAP
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
}`,GS=`#define NORMAL
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
}`,HS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WS=`#define PHONG
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
}`,XS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,YS=`#define STANDARD
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
}`,qS=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,ZS=`#define TOON
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
}`,JS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,$S=`uniform float size;
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
}`,KS=`uniform vec3 diffuse;
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
}`,QS=`#include <common>
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
}`,jS=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,tM=`uniform float rotation;
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
}`,eM=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:Mv,alphahash_pars_fragment:bv,alphamap_fragment:wv,alphamap_pars_fragment:Tv,alphatest_fragment:Ev,alphatest_pars_fragment:Av,aomap_fragment:Cv,aomap_pars_fragment:Rv,batching_pars_vertex:Pv,batching_vertex:Iv,begin_vertex:Lv,beginnormal_vertex:Dv,bsdfs:Nv,iridescence_fragment:Uv,bumpmap_pars_fragment:Ov,clipping_planes_fragment:Fv,clipping_planes_pars_fragment:Bv,clipping_planes_pars_vertex:zv,clipping_planes_vertex:kv,color_fragment:Vv,color_pars_fragment:Gv,color_pars_vertex:Hv,color_vertex:Wv,common:Xv,cube_uv_reflection_fragment:Yv,defaultnormal_vertex:qv,displacementmap_pars_vertex:Zv,displacementmap_vertex:Jv,emissivemap_fragment:$v,emissivemap_pars_fragment:Kv,colorspace_fragment:Qv,colorspace_pars_fragment:jv,envmap_fragment:ty,envmap_common_pars_fragment:ey,envmap_pars_fragment:ny,envmap_pars_vertex:iy,envmap_physical_pars_fragment:py,envmap_vertex:ry,fog_vertex:sy,fog_pars_vertex:oy,fog_fragment:ay,fog_pars_fragment:ly,gradientmap_pars_fragment:cy,lightmap_pars_fragment:hy,lights_lambert_fragment:uy,lights_lambert_pars_fragment:fy,lights_pars_begin:dy,lights_toon_fragment:my,lights_toon_pars_fragment:gy,lights_phong_fragment:_y,lights_phong_pars_fragment:xy,lights_physical_fragment:vy,lights_physical_pars_fragment:yy,lights_fragment_begin:Sy,lights_fragment_maps:My,lights_fragment_end:by,lightprobes_pars_fragment:wy,logdepthbuf_fragment:Ty,logdepthbuf_pars_fragment:Ey,logdepthbuf_pars_vertex:Ay,logdepthbuf_vertex:Cy,map_fragment:Ry,map_pars_fragment:Py,map_particle_fragment:Iy,map_particle_pars_fragment:Ly,metalnessmap_fragment:Dy,metalnessmap_pars_fragment:Ny,morphinstance_vertex:Uy,morphcolor_vertex:Oy,morphnormal_vertex:Fy,morphtarget_pars_vertex:By,morphtarget_vertex:zy,normal_fragment_begin:ky,normal_fragment_maps:Vy,normal_pars_fragment:Gy,normal_pars_vertex:Hy,normal_vertex:Wy,normalmap_pars_fragment:Xy,clearcoat_normal_fragment_begin:Yy,clearcoat_normal_fragment_maps:qy,clearcoat_pars_fragment:Zy,iridescence_pars_fragment:Jy,opaque_fragment:$y,packing:Ky,premultiplied_alpha_fragment:Qy,project_vertex:jy,dithering_fragment:tS,dithering_pars_fragment:eS,roughnessmap_fragment:nS,roughnessmap_pars_fragment:iS,shadowmap_pars_fragment:rS,shadowmap_pars_vertex:sS,shadowmap_vertex:oS,shadowmask_pars_fragment:aS,skinbase_vertex:lS,skinning_pars_vertex:cS,skinning_vertex:hS,skinnormal_vertex:uS,specularmap_fragment:fS,specularmap_pars_fragment:dS,tonemapping_fragment:pS,tonemapping_pars_fragment:mS,transmission_fragment:gS,transmission_pars_fragment:_S,uv_pars_fragment:xS,uv_pars_vertex:vS,uv_vertex:yS,worldpos_vertex:SS,background_vert:MS,background_frag:bS,backgroundCube_vert:wS,backgroundCube_frag:TS,cube_vert:ES,cube_frag:AS,depth_vert:CS,depth_frag:RS,distance_vert:PS,distance_frag:IS,equirect_vert:LS,equirect_frag:DS,linedashed_vert:NS,linedashed_frag:US,meshbasic_vert:OS,meshbasic_frag:FS,meshlambert_vert:BS,meshlambert_frag:zS,meshmatcap_vert:kS,meshmatcap_frag:VS,meshnormal_vert:GS,meshnormal_frag:HS,meshphong_vert:WS,meshphong_frag:XS,meshphysical_vert:YS,meshphysical_frag:qS,meshtoon_vert:ZS,meshtoon_frag:JS,points_vert:$S,points_frag:KS,shadow_vert:QS,shadow_frag:jS,sprite_vert:tM,sprite_frag:eM},St={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},er={basic:{uniforms:Rn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Rn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Rn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Rn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Rn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new de(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Rn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Rn([St.points,St.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Rn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Rn([St.common,St.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Rn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Rn([St.sprite,St.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:Rn([St.common,St.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:Rn([St.lights,St.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};er.physical={uniforms:Rn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Ah={r:0,b:0,g:0},nM=new He,a0=new Kt;a0.set(-1,0,0,0,1,0,0,0,1);function iM(r,t,e,n,i,s){let o=new de(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(w){let C=w.isScene===!0?w.background:null;if(C&&C.isTexture){let y=w.backgroundBlurriness>0;C=t.get(C,y)}return C}function m(w){let C=!1,y=f(w);y===null?p(o,a):y&&y.isColor&&(p(y,1),C=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(w,C){let y=f(C);y&&(y.isCubeTexture||y.mapping===za)?(c===void 0&&(c=new wi(new Mo(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Rs(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nM.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(a0),c.material.toneMapped=le.getTransfer(y.colorSpace)!==xe,(h!==y||d!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new wi(new Da(2,2),new Vn({name:"BackgroundMaterial",uniforms:Rs(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=le.getTransfer(y.colorSpace)!==xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,C){w.getRGB(Ah,Qf(r)),e.buffers.color.setClear(Ah.r,Ah.g,Ah.b,C,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,C=1){o.set(w),a=C,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,p(o,a)},render:m,addToRenderList:_,dispose:g}}function rM(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(D,I,F,L,B){let X=!1,k=d(D,L,F,I);s!==k&&(s=k,c(s.object)),X=f(D,L,F,B),X&&m(D,L,F,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(D,I,F,L),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function h(D){return r.deleteVertexArray(D)}function d(D,I,F,L){let B=L.wireframe===!0,X=n[I.id];X===void 0&&(X={},n[I.id]=X);let k=D.isInstancedMesh===!0?D.id:0,Q=X[k];Q===void 0&&(Q={},X[k]=Q);let Y=Q[F.id];Y===void 0&&(Y={},Q[F.id]=Y);let R=Y[B];return R===void 0&&(R=u(l()),Y[B]=R),R}function u(D){let I=[],F=[],L=[];for(let B=0;B<e;B++)I[B]=0,F[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,I,F,L){let B=s.attributes,X=I.attributes,k=0,Q=F.getAttributes();for(let Y in Q)if(Q[Y].location>=0){let $=B[Y],ct=X[Y];if(ct===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(ct=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(ct=D.instanceColor)),$===void 0||$.attribute!==ct||ct&&$.data!==ct.data)return!0;k++}return s.attributesNum!==k||s.index!==L}function m(D,I,F,L){let B={},X=I.attributes,k=0,Q=F.getAttributes();for(let Y in Q)if(Q[Y].location>=0){let $=X[Y];$===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&($=D.instanceColor));let ct={};ct.attribute=$,$&&$.data&&(ct.data=$.data),B[Y]=ct,k++}s.attributes=B,s.attributesNum=k,s.index=L}function _(){let D=s.newAttributes;for(let I=0,F=D.length;I<F;I++)D[I]=0}function p(D){g(D,0)}function g(D,I){let F=s.newAttributes,L=s.enabledAttributes,B=s.attributeDivisors;F[D]=1,L[D]===0&&(r.enableVertexAttribArray(D),L[D]=1),B[D]!==I&&(r.vertexAttribDivisor(D,I),B[D]=I)}function w(){let D=s.newAttributes,I=s.enabledAttributes;for(let F=0,L=I.length;F<L;F++)I[F]!==D[F]&&(r.disableVertexAttribArray(F),I[F]=0)}function C(D,I,F,L,B,X,k){k===!0?r.vertexAttribIPointer(D,I,F,B,X):r.vertexAttribPointer(D,I,F,L,B,X)}function y(D,I,F,L){_();let B=L.attributes,X=F.getAttributes(),k=I.defaultAttributeValues;for(let Q in X){let Y=X[Q];if(Y.location>=0){let R=B[Q];if(R===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let $=R.normalized,ct=R.itemSize,yt=t.get(R);if(yt===void 0)continue;let Gt=yt.buffer,Bt=yt.type,Ht=yt.bytesPerElement,J=Bt===r.INT||Bt===r.UNSIGNED_INT||R.gpuType===Hc;if(R.isInterleavedBufferAttribute){let tt=R.data,_t=tt.stride,zt=R.offset;if(tt.isInstancedInterleavedBuffer){for(let dt=0;dt<Y.locationSize;dt++)g(Y.location+dt,tt.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let dt=0;dt<Y.locationSize;dt++)p(Y.location+dt);r.bindBuffer(r.ARRAY_BUFFER,Gt);for(let dt=0;dt<Y.locationSize;dt++)C(Y.location+dt,ct/Y.locationSize,Bt,$,_t*Ht,(zt+ct/Y.locationSize*dt)*Ht,J)}else{if(R.isInstancedBufferAttribute){for(let tt=0;tt<Y.locationSize;tt++)g(Y.location+tt,R.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let tt=0;tt<Y.locationSize;tt++)p(Y.location+tt);r.bindBuffer(r.ARRAY_BUFFER,Gt);for(let tt=0;tt<Y.locationSize;tt++)C(Y.location+tt,ct/Y.locationSize,Bt,$,ct*Ht,ct/Y.locationSize*tt*Ht,J)}}else if(k!==void 0){let $=k[Q];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(Y.location,$);break;case 3:r.vertexAttrib3fv(Y.location,$);break;case 4:r.vertexAttrib4fv(Y.location,$);break;default:r.vertexAttrib1fv(Y.location,$)}}}}w()}function M(){S();for(let D in n){let I=n[D];for(let F in I){let L=I[F];for(let B in L){let X=L[B];for(let k in X)h(X[k].object),delete X[k];delete L[B]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let I=n[D.id];for(let F in I){let L=I[F];for(let B in L){let X=L[B];for(let k in X)h(X[k].object),delete X[k];delete L[B]}}delete n[D.id]}function E(D){for(let I in n){let F=n[I];for(let L in F){let B=F[L];if(B[D.id]===void 0)continue;let X=B[D.id];for(let k in X)h(X[k].object),delete X[k];delete B[D.id]}}}function v(D){for(let I in n){let F=n[I],L=D.isInstancedMesh===!0?D.id:0,B=F[L];if(B!==void 0){for(let X in B){let k=B[X];for(let Q in k)h(k[Q].object),delete k[Q];delete B[X]}delete F[L],Object.keys(F).length===0&&delete n[I]}}}function S(){A(),o=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function sM(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function oM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Ti&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let v=E===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==fi&&E!==Oi&&!v&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:y,maxSamples:M,samples:T}}function aM(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Li,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{let w=s?0:n,C=w*4,y=g.clippingState||null;l.value=y,y=h(m,u,C,f);for(let M=0;M!==C;++M)y[M]=e[M];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=f+_*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<g)&&(p=new Float32Array(g));for(let C=0,y=f;C!==_;++C,y+=4)o.copy(d[C]).applyMatrix4(w,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Co=4,lM=6,cM=20,hM=256,Za=new Oa,zg=new de,ad=null,ld=0,cd=0,hd=!1,uM=new Z,Ps=new Z,Rh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=uM}=s;ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ad,ld,cd),this._renderer.xr.enabled=hd,t.scissorTest=!1,Ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Kr||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Fi,format:Ti,colorSpace:xa,depthBuffer:!1},i=kg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kg(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fM(s)),this._blurMaterial=pM(s,t,e),this._ggxMaterial=dM(s,t,e)}return i}_compileMaterial(t){let e=new wi(new hi,t);this._renderer.compile(e,Za)}_sceneToCubeUV(t,e,n,i,s){let l=new Cn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(zg),d.toneMapping=Ni,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wi(new Mo,new Ca({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,g=!1,w=t.background;w?w.isColor&&(p.color.copy(w),t.background=null,g=!0):(p.color.copy(zg),g=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[C],s.y,s.z)):y===1?(l.up.set(0,0,c[C]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[C],s.z)):(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[C]));let M=this._cubeSize;Ao(i,y*M,C>2?M:0,M,M),d.setRenderTarget(i),g&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Kr||t.mapping===Cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vg());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Ao(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Za)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-Co?n-m+Co:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Ao(s,p,g,3*_,2*_),i.setRenderTarget(s),i.render(a,Za),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Ao(t,p,g,3*_,2*_),i.setRenderTarget(t),i.render(a,Za)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,i,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-Co?i-this._lodMax+Co:0),u=4*(this._cubeSize-h);Ao(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Za)}};function fM(r){let t=[],e=[],n=r,i=r-Co+1+lM;for(let s=0;s<i;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let g=0;g<d;g++){let w=g%3*2/3-1,C=g>2?0:-1,y=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];m.set(y,f*u*g);for(let M=0;M<u;M++){let T=h[M*2]*2-1,E=h[M*2+1]*2-1;g===0?Ps.set(1,E,T):g===1?Ps.set(-T,1,-E):g===2?Ps.set(-T,E,1):g===3?Ps.set(-1,E,-T):g===4?Ps.set(-T,-1,E):Ps.set(T,E,-1),Ps.toArray(_,(g*u+M)*f)}}let p=new hi;p.setAttribute("position",new un(m,f)),p.setAttribute("outputDirection",new un(_,f)),e.push(new wi(p,null)),n>Co&&n--}return{lodMeshes:e,sizeLods:t}}function kg(r,t,e){let n=new Kn(r,t,e);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ao(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function dM(r,t,e){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function pM(r,t,e){return new Vn({name:"SphericalGaussianBlur",defines:{SAMPLES:cM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Lh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Vg(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Gg(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Lh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ph=class extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ia(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Mo(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:ji});s.uniforms.tEquirect.value=e;let o=new wi(i,s),a=e.minFilter;return e.minFilter===Qr&&(e.minFilter=gn),new Fc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}};function mM(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===kc||f===Vc)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new Ph(m.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===kc||f===Vc,_=f===Kr||f===Cs;if(m||_){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Rh(r)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let w=u.image;return m&&w&&w.height>0||_&&w&&l(w)?(n===null&&(n=new Rh(r)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===kc?u.mapping=Kr:f===Vc&&(u.mapping=Cs),u}function l(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function gM(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ts("WebGLRenderer: "+n+" extension not supported."),i}}}function _M(r,t,e,n){let i={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,_=0;if(m===void 0)return;if(f!==null){let w=f.array;_=f.version;for(let C=0,y=w.length;C<y;C+=3){let M=w[C+0],T=w[C+1],E=w[C+2];u.push(M,T,T,E,E,M)}}else{let w=m.array;_=m.version;for(let C=0,y=w.length/3-1;C<y;C+=3){let M=C+0,T=C+1,E=C+2;u.push(M,T,T,E,E,M)}}let p=new(m.count>=65535?Ea:Ta)(u,1);p.version=_;let g=s.get(d);g&&t.remove(g),s.set(d,p)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function xM(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vM(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Yt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function yM(r,t,e){let n=new WeakMap,i=new Ee;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],C=0;f===!0&&(C=1),m===!0&&(C=2),_===!0&&(C=3);let y=a.attributes.position.count*C,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*M*4*d),E=new Ma(T,y,M,d);E.type=Oi,E.needsUpdate=!0;let v=C*4;for(let A=0;A<d;A++){let D=p[A],I=g[A],F=w[A],L=y*M*4*A;for(let B=0;B<D.count;B++){let X=B*v;f===!0&&(i.fromBufferAttribute(D,B),T[L+X+0]=i.x,T[L+X+1]=i.y,T[L+X+2]=i.z,T[L+X+3]=0),m===!0&&(i.fromBufferAttribute(I,B),T[L+X+4]=i.x,T[L+X+5]=i.y,T[L+X+6]=i.z,T[L+X+7]=0),_===!0&&(i.fromBufferAttribute(F,B),T[L+X+8]=i.x,T[L+X+9]=i.y,T[L+X+10]=i.z,T[L+X+11]=F.itemSize===4?i.w:1)}}u={count:d,texture:E,size:new ce(y,M)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function SM(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var MM={[Nf]:"LINEAR_TONE_MAPPING",[Uf]:"REINHARD_TONE_MAPPING",[Of]:"CINEON_TONE_MAPPING",[Ff]:"ACES_FILMIC_TONE_MAPPING",[zf]:"AGX_TONE_MAPPING",[kf]:"NEUTRAL_TONE_MAPPING",[Bf]:"CUSTOM_TONE_MAPPING"};function bM(r,t,e,n,i,s){let o=new Kn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new hi;c.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new bi([0,2,0,0,2,0],2));let h=new wc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new wi(c,h),u=new Oa(-1,1,1,-1,0,1),f=null,m=null,_=!1,p,g=null,w=[],C=!1;this.setSize=function(y,M){o.setSize(y,M),a!==null&&a.setSize(y,M),l!==null&&l.setSize(y,M);for(let T=0;T<w.length;T++){let E=w[T];E.setSize&&E.setSize(y,M)}},this.setEffects=function(y){w=y,C=w.length>0&&w[0].isRenderPass===!0;let M=o.width,T=o.height;w.length>0&&a===null&&(a=new Kn(M,T,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new Kn(M,T,{type:Fi,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<w.length;E++){let v=w[E];v.setSize&&v.setSize(M,T)}},this.begin=function(y,M){if(_||y.toneMapping===Ni&&w.length===0)return!1;if(g=M,M!==null){let T=M.width,E=M.height;(o.width!==T||o.height!==E)&&this.setSize(T,E)}return C===!1&&y.setRenderTarget(o),p=y.toneMapping,y.toneMapping=Ni,!0},this.hasRenderPass=function(){return C},this.end=function(y,M){y.toneMapping=p,_=!0;let T=o,E=a;for(let v=0;v<w.length;v++){let S=w[v];S.enabled!==!1&&(S.render(y,E,T,M),S.needsSwap!==!1&&(T=E,E=E===a?l:a))}if(f!==y.outputColorSpace||m!==y.toneMapping){f=y.outputColorSpace,m=y.toneMapping,h.defines={},le.getTransfer(f)===xe&&(h.defines.SRGB_TRANSFER="");let v=MM[m];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(g),y.render(d,u),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var l0=new $n,dd=new Yr(1,1),c0=new Ma,h0=new yc,u0=new Ia,Hg=[],Wg=[],Xg=new Float32Array(16),Yg=new Float32Array(9),qg=new Float32Array(4);function Po(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Hg[i];if(s===void 0&&(s=new Float32Array(i),Hg[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function rn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function sn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Dh(r,t){let e=Wg[t];e===void 0&&(e=new Int32Array(t),Wg[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function wM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function TM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2fv(this.addr,t),sn(e,t)}}function EM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;r.uniform3fv(this.addr,t),sn(e,t)}}function AM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4fv(this.addr,t),sn(e,t)}}function CM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;qg.set(n),r.uniformMatrix2fv(this.addr,!1,qg),sn(e,n)}}function RM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;Yg.set(n),r.uniformMatrix3fv(this.addr,!1,Yg),sn(e,n)}}function PM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;Xg.set(n),r.uniformMatrix4fv(this.addr,!1,Xg),sn(e,n)}}function IM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function LM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2iv(this.addr,t),sn(e,t)}}function DM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;r.uniform3iv(this.addr,t),sn(e,t)}}function NM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4iv(this.addr,t),sn(e,t)}}function UM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function OM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2uiv(this.addr,t),sn(e,t)}}function FM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;r.uniform3uiv(this.addr,t),sn(e,t)}}function BM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4uiv(this.addr,t),sn(e,t)}}function zM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(dd.compareFunction=e.isReversedDepthBuffer()?Eh:Th,s=dd):s=l0,e.setTexture2D(t||s,i)}function kM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||h0,i)}function VM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||u0,i)}function GM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||c0,i)}function HM(r){switch(r){case 5126:return wM;case 35664:return TM;case 35665:return EM;case 35666:return AM;case 35674:return CM;case 35675:return RM;case 35676:return PM;case 5124:case 35670:return IM;case 35667:case 35671:return LM;case 35668:case 35672:return DM;case 35669:case 35673:return NM;case 5125:return UM;case 36294:return OM;case 36295:return FM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return kM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return GM}}function WM(r,t){r.uniform1fv(this.addr,t)}function XM(r,t){let e=Po(t,this.size,2);r.uniform2fv(this.addr,e)}function YM(r,t){let e=Po(t,this.size,3);r.uniform3fv(this.addr,e)}function qM(r,t){let e=Po(t,this.size,4);r.uniform4fv(this.addr,e)}function ZM(r,t){let e=Po(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function JM(r,t){let e=Po(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function $M(r,t){let e=Po(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function KM(r,t){r.uniform1iv(this.addr,t)}function QM(r,t){r.uniform2iv(this.addr,t)}function jM(r,t){r.uniform3iv(this.addr,t)}function tb(r,t){r.uniform4iv(this.addr,t)}function eb(r,t){r.uniform1uiv(this.addr,t)}function nb(r,t){r.uniform2uiv(this.addr,t)}function ib(r,t){r.uniform3uiv(this.addr,t)}function rb(r,t){r.uniform4uiv(this.addr,t)}function sb(r,t,e){let n=this.cache,i=t.length,s=Dh(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=dd:o=l0;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function ob(r,t,e){let n=this.cache,i=t.length,s=Dh(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||h0,s[o])}function ab(r,t,e){let n=this.cache,i=t.length,s=Dh(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||u0,s[o])}function lb(r,t,e){let n=this.cache,i=t.length,s=Dh(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||c0,s[o])}function cb(r){switch(r){case 5126:return WM;case 35664:return XM;case 35665:return YM;case 35666:return qM;case 35674:return ZM;case 35675:return JM;case 35676:return $M;case 5124:case 35670:return KM;case 35667:case 35671:return QM;case 35668:case 35672:return jM;case 35669:case 35673:return tb;case 5125:return eb;case 36294:return nb;case 36295:return ib;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return lb}}var pd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=HM(e.type)}},md=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cb(e.type)}},gd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},ud=/(\w+)(\])?(\[|\.)?/g;function Zg(r,t){r.seq.push(t),r.map[t.id]=t}function hb(r,t,e){let n=r.name,i=n.length;for(ud.lastIndex=0;;){let s=ud.exec(n),o=ud.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Zg(e,c===void 0?new pd(a,r,t):new md(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new gd(a),Zg(e,d)),e=d}}}var Ro=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);hb(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Jg(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var ub=37297,fb=0;function db(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var $g=new Kt;function pb(r){le._getMatrix($g,le.workingColorSpace,r);let t=`mat3( ${$g.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(r)){case va:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Kg(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+db(r.getShaderSource(t),a)}else return s}function mb(r,t){let e=pb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var gb={[Nf]:"Linear",[Uf]:"Reinhard",[Of]:"Cineon",[Ff]:"ACESFilmic",[zf]:"AgX",[kf]:"Neutral",[Bf]:"Custom"};function _b(r,t){let e=gb[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ch=new Z;function xb(){le.getLuminanceCoefficients(Ch);let r=Ch.x.toFixed(4),t=Ch.y.toFixed(4),e=Ch.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($a).join(`
`)}function yb(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sb(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function $a(r){return r!==""}function Qg(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jg(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function _d(r){return r.replace(Mb,wb)}var bb=new Map;function wb(r,t){let e=te[t];if(e===void 0){let n=bb.get(t);if(n!==void 0)e=te[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return _d(e)}var Tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t0(r){return r.replace(Tb,Eb)}function Eb(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function e0(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var Ab={[Fa]:"SHADOWMAP_TYPE_PCF",[bo]:"SHADOWMAP_TYPE_VSM"};function Cb(r){return Ab[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rb={[Kr]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE",[za]:"ENVMAP_TYPE_CUBE_UV"};function Pb(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Rb[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ib={[Cs]:"ENVMAP_MODE_REFRACTION"};function Lb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Ib[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Db={[Df]:"ENVMAP_BLENDING_MULTIPLY",[xg]:"ENVMAP_BLENDING_MIX",[vg]:"ENVMAP_BLENDING_ADD"};function Nb(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Db[r.combine]||"ENVMAP_BLENDING_NONE"}function Ub(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ob(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Cb(e),c=Pb(e),h=Lb(e),d=Nb(e),u=Ub(e),f=vb(e),m=yb(s),_=i.createProgram(),p,g,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter($a).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter($a).join(`
`),g.length>0&&(g+=`
`)):(p=[e0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($a).join(`
`),g=[e0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?te.tonemapping_pars_fragment:"",e.toneMapping!==Ni?_b("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,mb("linearToOutputTexel",e.outputColorSpace),xb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($a).join(`
`)),o=_d(o),o=Qg(o,e),o=jg(o,e),a=_d(a),a=Qg(a,e),a=jg(a,e),o=t0(o),a=t0(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===$f?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let C=w+p+o,y=w+g+a,M=Jg(i,i.VERTEX_SHADER,C),T=Jg(i,i.FRAGMENT_SHADER,y);i.attachShader(_,M),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(D){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(M)||"",L=i.getShaderInfoLog(T)||"",B=I.trim(),X=F.trim(),k=L.trim(),Q=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,T);else{let R=Kg(i,M,"vertex"),$=Kg(i,T,"fragment");Yt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+R+`
`+$)}else B!==""?Wt("WebGLProgram: Program Info Log:",B):(X===""||k==="")&&(Y=!1);Y&&(D.diagnostics={runnable:Q,programLog:B,vertexShader:{log:X,prefix:p},fragmentShader:{log:k,prefix:g}})}i.deleteShader(M),i.deleteShader(T),v=new Ro(i,_),S=Sb(i,_)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(_,ub)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fb++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=T,this}var Fb=0,xd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vd(t),e.set(t,n)),n}},vd=class{constructor(t){this.id=Fb++,this.code=t,this.usedTimes=0}};function Bb(r){return r===ts||r===Xa||r===Ya}function zb(r,t,e,n,i,s){let o=new ba,a=new xd,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,S,A,D,I,F){let L=D.fog,B=I.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Q=t.get(v.envMap||X,k),Y=Q&&Q.mapping===za?Q.image.height:null,R=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Wt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ct=$!==void 0?$.length:0,yt=0;B.morphAttributes.position!==void 0&&(yt=1),B.morphAttributes.normal!==void 0&&(yt=2),B.morphAttributes.color!==void 0&&(yt=3);let Gt,Bt,Ht,J;if(R){let Ot=er[R];Gt=Ot.vertexShader,Bt=Ot.fragmentShader}else{Gt=v.vertexShader,Bt=v.fragmentShader;let Ot=a.getVertexShaderStage(v),st=a.getFragmentShaderStage(v);a.update(v,Ot,st),Ht=Ot.id,J=st.id}let tt=r.getRenderTarget(),_t=r.state.buffers.depth.getReversed(),zt=I.isInstancedMesh===!0,dt=I.isBatchedMesh===!0,Ct=!!v.map,Ft=!!v.matcap,Dt=!!Q,qt=!!v.aoMap,Qt=!!v.lightMap,V=!!v.bumpMap&&v.wireframe===!1,re=!!v.normalMap,ye=!!v.displacementMap,Ue=!!v.emissiveMap,Jt=!!v.metalnessMap,me=!!v.roughnessMap,O=v.anisotropy>0,De=v.clearcoat>0,Xt=v.dispersion>0,P=v.retroreflectivity>0,x=v.iridescence>0,z=v.sheen>0,H=v.transmission>0,K=O&&!!v.anisotropyMap,ht=De&&!!v.clearcoatMap,ot=De&&!!v.clearcoatNormalMap,j=De&&!!v.clearcoatRoughnessMap,nt=x&&!!v.iridescenceMap,pt=x&&!!v.iridescenceThicknessMap,At=z&&!!v.sheenColorMap,mt=z&&!!v.sheenRoughnessMap,ft=!!v.specularMap,lt=!!v.specularColorMap,Nt=!!v.specularIntensityMap,Vt=H&&!!v.transmissionMap,N=H&&!!v.thicknessMap,ut=!!v.gradientMap,et=!!v.alphaMap,gt=v.alphaTest>0,vt=!!v.alphaHash,it=!!v.extensions,at=Ni;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(at=r.toneMapping);let rt={shaderID:R,shaderType:v.type,shaderName:v.name,vertexShader:Gt,fragmentShader:Bt,defines:v.defines,customVertexShaderID:Ht,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:dt,batchingColor:dt&&I._colorsTexture!==null,instancing:zt,instancingColor:zt&&I.instanceColor!==null,instancingMorph:zt&&I.morphTexture!==null,outputColorSpace:tt===null?r.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ct,matcap:Ft,envMap:Dt,envMapMode:Dt&&Q.mapping,envMapCubeUVHeight:Y,aoMap:qt,lightMap:Qt,bumpMap:V,normalMap:re,displacementMap:ye,emissiveMap:Ue,normalMapObjectSpace:re&&v.normalMapType===Mg,normalMapTangentSpace:re&&v.normalMapType===Jf,packedNormalMap:re&&v.normalMapType===Jf&&Bb(v.normalMap.format),metalnessMap:Jt,roughnessMap:me,anisotropy:O,anisotropyMap:K,clearcoat:De,clearcoatMap:ht,clearcoatNormalMap:ot,clearcoatRoughnessMap:j,dispersion:Xt,retroreflection:P,iridescence:x,iridescenceMap:nt,iridescenceThicknessMap:pt,sheen:z,sheenColorMap:At,sheenRoughnessMap:mt,specularMap:ft,specularColorMap:lt,specularIntensityMap:Nt,transmission:H,transmissionMap:Vt,thicknessMap:N,gradientMap:ut,opaque:v.transparent===!1&&v.blending===wo&&v.alphaToCoverage===!1,alphaMap:et,alphaTest:gt,alphaHash:vt,combine:v.combine,mapUv:Ct&&m(v.map.channel),aoMapUv:qt&&m(v.aoMap.channel),lightMapUv:Qt&&m(v.lightMap.channel),bumpMapUv:V&&m(v.bumpMap.channel),normalMapUv:re&&m(v.normalMap.channel),displacementMapUv:ye&&m(v.displacementMap.channel),emissiveMapUv:Ue&&m(v.emissiveMap.channel),metalnessMapUv:Jt&&m(v.metalnessMap.channel),roughnessMapUv:me&&m(v.roughnessMap.channel),anisotropyMapUv:K&&m(v.anisotropyMap.channel),clearcoatMapUv:ht&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ot&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:At&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:mt&&m(v.sheenRoughnessMap.channel),specularMapUv:ft&&m(v.specularMap.channel),specularColorMapUv:lt&&m(v.specularColorMap.channel),specularIntensityMapUv:Nt&&m(v.specularIntensityMap.channel),transmissionMapUv:Vt&&m(v.transmissionMap.channel),thicknessMapUv:N&&m(v.thicknessMap.channel),alphaMapUv:et&&m(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(re||O),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Ct||et),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&re===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:yt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,decodeVideoTexture:Ct&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===xe,decodeVideoTextureEmissive:Ue&&v.emissiveMap.isVideoTexture===!0&&le.getTransfer(v.emissiveMap.colorSpace)===xe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Qi,flipSided:v.side===Gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function p(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let A in v.defines)S.push(A),S.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(g(S,v),w(S,v),S.push(r.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function g(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function w(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function C(v){let S=f[v.type],A;if(S){let D=er[S];A=Og.clone(D.uniforms)}else A=v.uniforms;return A}function y(v,S){let A=h.get(S);return A!==void 0?++A.usedTimes:(A=new Ob(r,S,v,i),c.push(A),h.set(S,A)),A}function M(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:C,acquireProgram:y,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:E}}function kb(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Vb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function n0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function i0(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,p,g){let w=r[t];return w===void 0?(w={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},r[t]=w):(w.id=u.id,w.object=u,w.geometry=f,w.material=m,w.materialVariant=o(u),w.groupOrder=_,w.renderOrder=u.renderOrder,w.z=p,w.group=g),t++,w}function l(u,f,m,_,p,g,w){w.reversedDepth===!0&&(p=-p);let C=a(u,f,m,_,p,g);m.transmission>0?n.push(C):m.transparent===!0?i.push(C):e.push(C)}function c(u,f,m,_,p,g){let w=a(u,f,m,_,p,g);m.transmission>0?n.unshift(w):m.transparent===!0?i.unshift(w):e.unshift(w)}function h(u,f){e.length>1&&e.sort(u||Vb),n.length>1&&n.sort(f||n0),i.length>1&&i.sort(f||n0)}function d(){for(let u=t,f=r.length;u<f;u++){let m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function Gb(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new i0,r.set(n,[o])):i>=s.length?(o=new i0,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Hb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new de};break;case"SpotLight":e={position:new Z,direction:new Z,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=e,e}}}function Wb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Xb=0;function Yb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function qb(r){let t=new Hb,e=Wb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let i=new Z,s=new He,o=new He;function a(c){let h=0,d=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,w=0,C=0,y=0,M=0,T=0,E=0,v=0,S=0,A=0;c.sort(Yb);for(let I=0,F=c.length;I<F;I++){let L=c[I],B=L.color,X=L.intensity,k=L.distance,Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ts?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*X,d+=B.g*X,u+=B.b*X;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],X);A++}else if(L.isSunLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,$=e.get(L);$.shadowIntensity=R.intensity,$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[m]=$,n.sunShadowMap[m]=Q;let ct=R.getViewportCount();for(let yt=0;yt<ct;yt++)n.sunShadowMatrix[_+yt]=R.getMatrix(yt),n.sunShadowCascade[_+yt]=R._cascadeData[yt];_+=ct,m++}n.sun[f]=Y,f++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,$=e.get(L);$.shadowIntensity=R.intensity,$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=L.shadow.matrix,M++}n.directional[p]=Y,p++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(B).multiplyScalar(X),Y.distance=k,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[w]=Y;let R=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,R.updateMatrices(L),L.castShadow&&S++),n.spotLightMatrix[w]=R.matrix,L.castShadow){let $=e.get(L);$.shadowIntensity=R.intensity,$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,n.spotShadow[w]=$,n.spotShadowMap[w]=Q,E++}w++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(B).multiplyScalar(X),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[C]=Y,C++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let R=L.shadow,$=e.get(L);$.shadowIntensity=R.intensity,$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,$.shadowCameraNear=R.camera.near,$.shadowCameraFar=R.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=Y,g++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(X),Y.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[y]=Y,y++}}C>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==g||D.spotLength!==w||D.rectAreaLength!==C||D.hemiLength!==y||D.numSunShadows!==m||D.numDirectionalShadows!==M||D.numPointShadows!==T||D.numSpotShadows!==E||D.numSpotMaps!==v||D.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=p,n.spot.length=w,n.rectArea.length=C,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+v-S,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,D.sunLength=f,D.directionalLength=p,D.pointLength=g,D.spotLength=w,D.rectAreaLength=C,D.hemiLength=y,D.numSunShadows=m,D.numDirectionalShadows=M,D.numPointShadows=T,D.numSpotShadows=E,D.numSpotMaps=v,D.numLightProbes=A,n.version=Xb++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let w=0,C=c.length;w<C;w++){let y=c[w];if(y.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),u++}else if(y.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function r0(r){let t=new qb(r),e=[],n=[],i=[];function s(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Zb(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new r0(r),t.set(i,[a])):s>=o.length?(a=new r0(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Jb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$b=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kb=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Qb=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],s0=new He,Ja=new Z,fd=new Z;function jb(r,t,e){let n=new Ra,i=new ce,s=new ce,o=new Ee,a=new Tc,l=new Ec,c={},h=e.maxTextureSize,d={[$r]:Gn,[Gn]:$r,[Qi]:Qi},u=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Jb,fragmentShader:$b}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new hi;m.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new wi(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fa;let g=this.type;this.render=function(T,E,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===jm&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fa);let S=r.getRenderTarget(),A=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending(ji),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let F=g!==this.type;F&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=T.length;L<B;L++){let X=T[L],k=X.shadow;if(k===void 0){Wt("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let Q=k.getFrameExtents();i.multiply(Q),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Q.x),i.x=s.x*Q.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Q.y),i.y=s.y*Q.y,k.mapSize.y=s.y));let Y=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Y,k.map===null||F===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===bo){if(X.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Kn(i.x,i.y,{format:ts,type:Fi,minFilter:gn,magFilter:gn,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new Yr(i.x,i.y,Oi),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=Ji,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=fn,k.map.depthTexture.magFilter=fn}else X.isPointLight?(k.map=new Ph(i.x),k.map.depthTexture=new bc(i.x,Ui)):(k.map=new Kn(i.x,i.y),k.map.depthTexture=new Yr(i.x,i.y,Ui)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=Ji,this.type===Fa?(k.map.depthTexture.compareFunction=Y?Eh:Th,k.map.depthTexture.minFilter=gn,k.map.depthTexture.magFilter=gn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=fn,k.map.depthTexture.magFilter=fn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);let R=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();X.isPointLight!==!0&&k.updateMatrices(X,v);for(let $=0;$<R;$++){let ct=k.getCamera($);if(X.isPointLight){let yt=k.camera,Gt=k.matrix,Bt=X.distance||yt.far;Bt!==yt.far&&(yt.far=Bt,yt.updateProjectionMatrix()),Ja.setFromMatrixPosition(X.matrixWorld),yt.position.copy(Ja),fd.copy(yt.position),fd.add(Kb[$]),yt.up.copy(Qb[$]),yt.lookAt(fd),yt.updateMatrixWorld(),Gt.makeTranslation(-Ja.x,-Ja.y,-Ja.z),s0.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(s0,yt.coordinateSystem,yt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,$),r.clear();else{$===0&&(r.setRenderTarget(k.map),r.clear());let yt=k.getViewport($);o.set(s.x*yt.x,s.y*yt.y,s.x*yt.z,s.y*yt.w),I.viewport(o)}n=k.getFrustum($),y(E,v,ct,X,this.type)}k.isPointLightShadow!==!0&&this.type===bo&&w(k,v),k.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(S,A,D)};function w(T,E){let v=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Kn(i.x,i.y,{format:ts,type:Fi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(E,null,v,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(E,null,v,f,_,null)}function C(T,E,v,S){let A=null,D=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)A=D;else if(A=v.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let I=A.uuid,F=E.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let B=L[F];B===void 0&&(B=A.clone(),L[F]=B,E.addEventListener("dispose",M)),A=B}if(A.visible=E.visible,A.wireframe=E.wireframe,S===bo?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:d[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let I=r.properties.get(A);I.light=v}return A}function y(T,E,v,S,A){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===bo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let F=t.update(T),L=T.material;if(Array.isArray(L)){let B=F.groups;for(let X=0,k=B.length;X<k;X++){let Q=B[X],Y=L[Q.materialIndex];if(Y&&Y.visible){let R=C(T,Y,S,A);T.onBeforeShadow(r,T,E,v,F,R,Q),r.renderBufferDirect(v,null,F,R,T,Q),T.onAfterShadow(r,T,E,v,F,R,Q)}}}else if(L.visible){let B=C(T,L,S,A);T.onBeforeShadow(r,T,E,v,F,B,null),r.renderBufferDirect(v,null,F,B,T,null),T.onAfterShadow(r,T,E,v,F,B,null)}}let I=T.children;for(let F=0,L=I.length;F<L;F++)y(I[F],E,v,S,A)}function M(T){T.target.removeEventListener("dispose",M);for(let v in c){let S=c[v],A=T.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function t1(r,t){function e(){let N=!1,ut=new Ee,et=null,gt=new Ee(0,0,0,0);return{setMask:function(vt){et!==vt&&!N&&(r.colorMask(vt,vt,vt,vt),et=vt)},setLocked:function(vt){N=vt},setClear:function(vt,it,at,rt,Ot){Ot===!0&&(vt*=rt,it*=rt,at*=rt),ut.set(vt,it,at,rt),gt.equals(ut)===!1&&(r.clearColor(vt,it,at,rt),gt.copy(ut))},reset:function(){N=!1,et=null,gt.set(-1,0,0,0)}}}function n(){let N=!1,ut=!1,et=null,gt=null,vt=null;return{setReversed:function(it){if(ut!==it){let at=t.get("EXT_clip_control");it?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),ut=it;let rt=vt;vt=null,this.setClear(rt)}},getReversed:function(){return ut},setTest:function(it){it?tt(r.DEPTH_TEST):_t(r.DEPTH_TEST)},setMask:function(it){et!==it&&!N&&(r.depthMask(it),et=it)},setFunc:function(it){if(ut&&(it=Ng[it]),gt!==it){switch(it){case ac:r.depthFunc(r.NEVER);break;case lc:r.depthFunc(r.ALWAYS);break;case cc:r.depthFunc(r.LESS);break;case xo:r.depthFunc(r.LEQUAL);break;case hc:r.depthFunc(r.EQUAL);break;case uc:r.depthFunc(r.GEQUAL);break;case fc:r.depthFunc(r.GREATER);break;case dc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}gt=it}},setLocked:function(it){N=it},setClear:function(it){vt!==it&&(vt=it,ut&&(it=1-it),r.clearDepth(it))},reset:function(){N=!1,et=null,gt=null,vt=null,ut=!1}}}function i(){let N=!1,ut=null,et=null,gt=null,vt=null,it=null,at=null,rt=null,Ot=null;return{setTest:function(st){N||(st?tt(r.STENCIL_TEST):_t(r.STENCIL_TEST))},setMask:function(st){ut!==st&&!N&&(r.stencilMask(st),ut=st)},setFunc:function(st,kt,Rt){(et!==st||gt!==kt||vt!==Rt)&&(r.stencilFunc(st,kt,Rt),et=st,gt=kt,vt=Rt)},setOp:function(st,kt,Rt){(it!==st||at!==kt||rt!==Rt)&&(r.stencilOp(st,kt,Rt),it=st,at=kt,rt=Rt)},setLocked:function(st){N=st},setClear:function(st){Ot!==st&&(r.clearStencil(st),Ot=st)},reset:function(){N=!1,ut=null,et=null,gt=null,vt=null,it=null,at=null,rt=null,Ot=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,w=null,C=null,y=null,M=null,T=null,E=null,v=new de(0,0,0),S=0,A=!1,D=null,I=null,F=null,L=null,B=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Q=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=Q>=2);let R=null,$={},ct=r.getParameter(r.SCISSOR_BOX),yt=r.getParameter(r.VIEWPORT),Gt=new Ee().fromArray(ct),Bt=new Ee().fromArray(yt);function Ht(N,ut,et,gt){let vt=new Uint8Array(4),it=r.createTexture();r.bindTexture(N,it),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<et;at++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,gt,0,r.RGBA,r.UNSIGNED_BYTE,vt):r.texImage2D(ut+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,vt);return it}let J={};J[r.TEXTURE_2D]=Ht(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(r.DEPTH_TEST),o.setFunc(xo),V(!1),re(Cf),tt(r.CULL_FACE),qt(ji);function tt(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function _t(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function zt(N,ut){return u[N]!==ut?(r.bindFramebuffer(N,ut),u[N]=ut,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ut),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function dt(N,ut){let et=m,gt=!1;if(N){et=f.get(ut),et===void 0&&(et=[],f.set(ut,et));let vt=N.textures;if(et.length!==vt.length||et[0]!==r.COLOR_ATTACHMENT0){for(let it=0,at=vt.length;it<at;it++)et[it]=r.COLOR_ATTACHMENT0+it;et.length=vt.length,gt=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,gt=!0);gt&&r.drawBuffers(et)}function Ct(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let Ft={[As]:r.FUNC_ADD,[eg]:r.FUNC_SUBTRACT,[ng]:r.FUNC_REVERSE_SUBTRACT};Ft[ig]=r.MIN,Ft[rg]=r.MAX;let Dt={[sg]:r.ZERO,[og]:r.ONE,[ag]:r.SRC_COLOR,[If]:r.SRC_ALPHA,[dg]:r.SRC_ALPHA_SATURATE,[ug]:r.DST_COLOR,[cg]:r.DST_ALPHA,[lg]:r.ONE_MINUS_SRC_COLOR,[Lf]:r.ONE_MINUS_SRC_ALPHA,[fg]:r.ONE_MINUS_DST_COLOR,[hg]:r.ONE_MINUS_DST_ALPHA,[pg]:r.CONSTANT_COLOR,[mg]:r.ONE_MINUS_CONSTANT_COLOR,[gg]:r.CONSTANT_ALPHA,[_g]:r.ONE_MINUS_CONSTANT_ALPHA};function qt(N,ut,et,gt,vt,it,at,rt,Ot,st){if(N===ji){p===!0&&(_t(r.BLEND),p=!1);return}if(p===!1&&(tt(r.BLEND),p=!0),N!==tg){if(N!==g||st!==A){if((w!==As||M!==As)&&(r.blendEquation(r.FUNC_ADD),w=As,M=As),st)switch(N){case wo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ba:r.blendFunc(r.ONE,r.ONE);break;case Rf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Yt("WebGLState: Invalid blending: ",N);break}else switch(N){case wo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ba:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Rf:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pf:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",N);break}C=null,y=null,T=null,E=null,v.set(0,0,0),S=0,g=N,A=st}return}vt=vt||ut,it=it||et,at=at||gt,(ut!==w||vt!==M)&&(r.blendEquationSeparate(Ft[ut],Ft[vt]),w=ut,M=vt),(et!==C||gt!==y||it!==T||at!==E)&&(r.blendFuncSeparate(Dt[et],Dt[gt],Dt[it],Dt[at]),C=et,y=gt,T=it,E=at),(rt.equals(v)===!1||Ot!==S)&&(r.blendColor(rt.r,rt.g,rt.b,Ot),v.copy(rt),S=Ot),g=N,A=!1}function Qt(N,ut){N.side===Qi?_t(r.CULL_FACE):tt(r.CULL_FACE);let et=N.side===Gn;ut&&(et=!et),V(et),N.blending===wo&&N.transparent===!1?qt(ji):qt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let gt=N.stencilWrite;a.setTest(gt),gt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(r.SAMPLE_ALPHA_TO_COVERAGE):_t(r.SAMPLE_ALPHA_TO_COVERAGE)}function V(N){D!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),D=N)}function re(N){N!==Km?(tt(r.CULL_FACE),N!==I&&(N===Cf?r.cullFace(r.BACK):N===Qm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_t(r.CULL_FACE),I=N}function ye(N){N!==F&&(k&&r.lineWidth(N),F=N)}function Ue(N,ut,et){N?(tt(r.POLYGON_OFFSET_FILL),(L!==ut||B!==et)&&(L=ut,B=et,o.getReversed()&&(ut=-ut),r.polygonOffset(ut,et))):_t(r.POLYGON_OFFSET_FILL)}function Jt(N){N?tt(r.SCISSOR_TEST):_t(r.SCISSOR_TEST)}function me(N){N===void 0&&(N=r.TEXTURE0+X-1),R!==N&&(r.activeTexture(N),R=N)}function O(N,ut,et){et===void 0&&(R===null?et=r.TEXTURE0+X-1:et=R);let gt=$[et];gt===void 0&&(gt={type:void 0,texture:void 0},$[et]=gt),(gt.type!==N||gt.texture!==ut)&&(R!==et&&(r.activeTexture(et),R=et),r.bindTexture(N,ut||J[N]),gt.type=N,gt.texture=ut)}function De(){let N=$[R];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Xt(){try{r.compressedTexImage2D(...arguments)}catch(N){Yt("WebGLState:",N)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(N){Yt("WebGLState:",N)}}function x(){try{r.texSubImage2D(...arguments)}catch(N){Yt("WebGLState:",N)}}function z(){try{r.texSubImage3D(...arguments)}catch(N){Yt("WebGLState:",N)}}function H(){try{r.compressedTexSubImage2D(...arguments)}catch(N){Yt("WebGLState:",N)}}function K(){try{r.compressedTexSubImage3D(...arguments)}catch(N){Yt("WebGLState:",N)}}function ht(){try{r.texStorage2D(...arguments)}catch(N){Yt("WebGLState:",N)}}function ot(){try{r.texStorage3D(...arguments)}catch(N){Yt("WebGLState:",N)}}function j(){try{r.texImage2D(...arguments)}catch(N){Yt("WebGLState:",N)}}function nt(){try{r.texImage3D(...arguments)}catch(N){Yt("WebGLState:",N)}}function pt(N){return d[N]!==void 0?d[N]:r.getParameter(N)}function At(N,ut){d[N]!==ut&&(r.pixelStorei(N,ut),d[N]=ut)}function mt(N){Gt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Gt.copy(N))}function ft(N){Bt.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Bt.copy(N))}function lt(N,ut){let et=c.get(ut);et===void 0&&(et=new WeakMap,c.set(ut,et));let gt=et.get(N);gt===void 0&&(gt=r.getUniformBlockIndex(ut,N.name),et.set(N,gt))}function Nt(N,ut){let gt=c.get(ut).get(N);l.get(ut)!==gt&&(r.uniformBlockBinding(ut,gt,N.__bindingPointIndex),l.set(ut,gt))}function Vt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,$={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,w=null,C=null,y=null,M=null,T=null,E=null,v=new de(0,0,0),S=0,A=!1,D=null,I=null,F=null,L=null,B=null,Gt.set(0,0,r.canvas.width,r.canvas.height),Bt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:tt,disable:_t,bindFramebuffer:zt,drawBuffers:dt,useProgram:Ct,setBlending:qt,setMaterial:Qt,setFlipSided:V,setCullFace:re,setLineWidth:ye,setPolygonOffset:Ue,setScissorTest:Jt,activeTexture:me,bindTexture:O,unbindTexture:De,compressedTexImage2D:Xt,compressedTexImage3D:P,texImage2D:j,texImage3D:nt,pixelStorei:At,getParameter:pt,updateUBOMapping:lt,uniformBlockBinding:Nt,texStorage2D:ht,texStorage3D:ot,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:K,scissor:mt,viewport:ft,reset:Vt}}function e1(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,x){return m?new OffscreenCanvas(P,x):Sa("canvas")}function p(P,x,z){let H=1,K=Xt(P);if((K.width>z||K.height>z)&&(H=z/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ht=Math.floor(H*K.width),ot=Math.floor(H*K.height);u===void 0&&(u=_(ht,ot));let j=x?_(ht,ot):u;return j.width=ht,j.height=ot,j.getContext("2d").drawImage(P,0,0,ht,ot),Wt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ht+"x"+ot+")."),j}else return"data"in P&&Wt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function g(P){return P.generateMipmaps}function w(P){r.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,x,z,H,K,ht=!1){if(P!==null){if(r[P]!==void 0)return r[P];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ot;H&&(ot=t.get("EXT_texture_norm16"),ot||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===r.RED&&(z===r.FLOAT&&(j=r.R32F),z===r.HALF_FLOAT&&(j=r.R16F),z===r.UNSIGNED_BYTE&&(j=r.R8),z===r.UNSIGNED_SHORT&&ot&&(j=ot.R16_EXT),z===r.SHORT&&ot&&(j=ot.R16_SNORM_EXT)),x===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(j=r.R8UI),z===r.UNSIGNED_SHORT&&(j=r.R16UI),z===r.UNSIGNED_INT&&(j=r.R32UI),z===r.BYTE&&(j=r.R8I),z===r.SHORT&&(j=r.R16I),z===r.INT&&(j=r.R32I)),x===r.RG&&(z===r.FLOAT&&(j=r.RG32F),z===r.HALF_FLOAT&&(j=r.RG16F),z===r.UNSIGNED_BYTE&&(j=r.RG8),z===r.UNSIGNED_SHORT&&ot&&(j=ot.RG16_EXT),z===r.SHORT&&ot&&(j=ot.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(j=r.RG8UI),z===r.UNSIGNED_SHORT&&(j=r.RG16UI),z===r.UNSIGNED_INT&&(j=r.RG32UI),z===r.BYTE&&(j=r.RG8I),z===r.SHORT&&(j=r.RG16I),z===r.INT&&(j=r.RG32I)),x===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(j=r.RGB8UI),z===r.UNSIGNED_SHORT&&(j=r.RGB16UI),z===r.UNSIGNED_INT&&(j=r.RGB32UI),z===r.BYTE&&(j=r.RGB8I),z===r.SHORT&&(j=r.RGB16I),z===r.INT&&(j=r.RGB32I)),x===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),z===r.UNSIGNED_INT&&(j=r.RGBA32UI),z===r.BYTE&&(j=r.RGBA8I),z===r.SHORT&&(j=r.RGBA16I),z===r.INT&&(j=r.RGBA32I)),x===r.RGB&&(z===r.UNSIGNED_SHORT&&ot&&(j=ot.RGB16_EXT),z===r.SHORT&&ot&&(j=ot.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),x===r.RGBA){let nt=ht?va:le.getTransfer(K);z===r.FLOAT&&(j=r.RGBA32F),z===r.HALF_FLOAT&&(j=r.RGBA16F),z===r.UNSIGNED_BYTE&&(j=nt===xe?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&ot&&(j=ot.RGBA16_EXT),z===r.SHORT&&ot&&(j=ot.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function M(P,x){let z;return P?x===null||x===Ui||x===Eo?z=r.DEPTH24_STENCIL8:x===Oi?z=r.DEPTH32F_STENCIL8:x===To&&(z=r.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ui||x===Eo?z=r.DEPTH_COMPONENT24:x===Oi?z=r.DEPTH_COMPONENT32F:x===To&&(z=r.DEPTH_COMPONENT16),z}function T(P,x){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==fn&&P.minFilter!==gn?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function E(P){let x=P.target;x.removeEventListener("dispose",E),S(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function v(P){let x=P.target;x.removeEventListener("dispose",v),D(x)}function S(P){let x=n.get(P);if(x.__webglInit===void 0)return;let z=P.source,H=f.get(z);if(H){let K=H[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&A(P),Object.keys(H).length===0&&f.delete(z)}n.remove(P)}function A(P){let x=n.get(P);r.deleteTexture(x.__webglTexture);let z=P.source,H=f.get(z);delete H[x.__cacheKey],o.memory.textures--}function D(P){let x=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let K=0;K<x.__webglFramebuffer[H].length;K++)r.deleteFramebuffer(x.__webglFramebuffer[H][K]);else r.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)r.deleteFramebuffer(x.__webglFramebuffer[H]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=P.textures;for(let H=0,K=z.length;H<K;H++){let ht=n.get(z[H]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),o.memory.textures--),n.remove(z[H])}n.remove(P)}let I=0;function F(){I=0}function L(){return I}function B(P){I=P}function X(){let P=I;return P>=i.maxTextures&&Wt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function k(P){let x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function Q(P,x){let z=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){let H=P.image;if(H===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(z,P,x);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+x)}function Y(P,x){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){_t(z,P,x);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+x)}function R(P,x){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){_t(z,P,x);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+x)}function $(P,x){let z=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){zt(z,P,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+x)}let ct={[pc]:r.REPEAT,[Zi]:r.CLAMP_TO_EDGE,[mc]:r.MIRRORED_REPEAT},yt={[fn]:r.NEAREST,[yg]:r.NEAREST_MIPMAP_NEAREST,[ka]:r.NEAREST_MIPMAP_LINEAR,[gn]:r.LINEAR,[Gc]:r.LINEAR_MIPMAP_NEAREST,[Qr]:r.LINEAR_MIPMAP_LINEAR},Gt={[wg]:r.NEVER,[Rg]:r.ALWAYS,[Tg]:r.LESS,[Th]:r.LEQUAL,[Eg]:r.EQUAL,[Eh]:r.GEQUAL,[Ag]:r.GREATER,[Cg]:r.NOTEQUAL};function Bt(P,x){if(x.type===Oi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===gn||x.magFilter===Gc||x.magFilter===ka||x.magFilter===Qr||x.minFilter===gn||x.minFilter===Gc||x.minFilter===ka||x.minFilter===Qr)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ct[x.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ct[x.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ct[x.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,yt[x.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,yt[x.minFilter]),x.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Gt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===fn||x.minFilter!==ka&&x.minFilter!==Qr||x.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ht(P,x){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",E));let H=x.source,K=f.get(H);K===void 0&&(K={},f.set(H,K));let ht=k(x);if(ht!==P.__cacheKey){K[ht]===void 0&&(K[ht]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),K[ht].usedTimes++;let ot=K[P.__cacheKey];ot!==void 0&&(K[P.__cacheKey].usedTimes--,ot.usedTimes===0&&A(x)),P.__cacheKey=ht,P.__webglTexture=K[ht].texture}return z}function J(P,x,z){return Math.floor(Math.floor(P/z)/x)}function tt(P,x,z,H){let ht=P.updateRanges;if(ht.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,z,H,x.data);else{ht.sort((At,mt)=>At.start-mt.start);let ot=0;for(let At=1;At<ht.length;At++){let mt=ht[ot],ft=ht[At],lt=mt.start+mt.count,Nt=J(ft.start,x.width,4),Vt=J(mt.start,x.width,4);ft.start<=lt+1&&Nt===Vt&&J(ft.start+ft.count-1,x.width,4)===Nt?mt.count=Math.max(mt.count,ft.start+ft.count-mt.start):(++ot,ht[ot]=ft)}ht.length=ot+1;let j=e.getParameter(r.UNPACK_ROW_LENGTH),nt=e.getParameter(r.UNPACK_SKIP_PIXELS),pt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let At=0,mt=ht.length;At<mt;At++){let ft=ht[At],lt=Math.floor(ft.start/4),Nt=Math.ceil(ft.count/4),Vt=lt%x.width,N=Math.floor(lt/x.width),ut=Nt,et=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Vt),e.pixelStorei(r.UNPACK_SKIP_ROWS,N),e.texSubImage2D(r.TEXTURE_2D,0,Vt,N,ut,et,z,H,x.data)}P.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,j),e.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(r.UNPACK_SKIP_ROWS,pt)}}function _t(P,x,z){let H=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=r.TEXTURE_3D);let K=Ht(P,x),ht=x.source;e.bindTexture(H,P.__webglTexture,r.TEXTURE0+z);let ot=n.get(ht);if(ht.version!==ot.__version||K===!0){if(e.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let et=le.getPrimaries(le.workingColorSpace),gt=x.colorSpace===xr?null:le.getPrimaries(x.colorSpace),vt=x.colorSpace===xr||et===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let nt=p(x.image,!1,i.maxTextureSize);nt=De(x,nt);let pt=s.convert(x.format,x.colorSpace),At=s.convert(x.type),mt=y(x.internalFormat,pt,At,x.normalized,x.colorSpace,x.isVideoTexture);Bt(H,x);let ft,lt=x.mipmaps,Nt=x.isVideoTexture!==!0,Vt=ot.__version===void 0||K===!0,N=ht.dataReady,ut=T(x,nt);if(x.isDepthTexture)mt=M(x.format===jr,x.type),Vt&&(Nt?e.texStorage2D(r.TEXTURE_2D,1,mt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,mt,nt.width,nt.height,0,pt,At,null));else if(x.isDataTexture)if(lt.length>0){Nt&&Vt&&e.texStorage2D(r.TEXTURE_2D,ut,mt,lt[0].width,lt[0].height);for(let et=0,gt=lt.length;et<gt;et++)ft=lt[et],Nt?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ft.width,ft.height,pt,At,ft.data):e.texImage2D(r.TEXTURE_2D,et,mt,ft.width,ft.height,0,pt,At,ft.data);x.generateMipmaps=!1}else Nt?(Vt&&e.texStorage2D(r.TEXTURE_2D,ut,mt,nt.width,nt.height),N&&tt(x,nt,pt,At)):e.texImage2D(r.TEXTURE_2D,0,mt,nt.width,nt.height,0,pt,At,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Nt&&Vt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,mt,lt[0].width,lt[0].height,nt.depth);for(let et=0,gt=lt.length;et<gt;et++)if(ft=lt[et],x.format!==Ti)if(pt!==null)if(Nt){if(N)if(x.layerUpdates.size>0){let vt=ed(ft.width,ft.height,x.format,x.type);for(let it of x.layerUpdates){let at=ft.data.subarray(it*vt/ft.data.BYTES_PER_ELEMENT,(it+1)*vt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,it,ft.width,ft.height,1,pt,at)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,ft.width,ft.height,nt.depth,pt,ft.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,mt,ft.width,ft.height,nt.depth,0,ft.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,ft.width,ft.height,nt.depth,pt,At,ft.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,mt,ft.width,ft.height,nt.depth,0,pt,At,ft.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Nt&&Vt&&e.texStorage2D(r.TEXTURE_2D,ut,mt,lt[0].width,lt[0].height);for(let et=0,gt=lt.length;et<gt;et++)ft=lt[et],x.format!==Ti?pt!==null?Nt?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,ft.width,ft.height,pt,ft.data):e.compressedTexImage2D(r.TEXTURE_2D,et,mt,ft.width,ft.height,0,ft.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ft.width,ft.height,pt,At,ft.data):e.texImage2D(r.TEXTURE_2D,et,mt,ft.width,ft.height,0,pt,At,ft.data)}else if(x.isDataArrayTexture)if(Nt){if(Vt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,mt,nt.width,nt.height,nt.depth),N)if(x.layerUpdates.size>0){let et=ed(nt.width,nt.height,x.format,x.type);for(let gt of x.layerUpdates){let vt=nt.data.subarray(gt*et/nt.data.BYTES_PER_ELEMENT,(gt+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,gt,nt.width,nt.height,1,pt,At,vt)}x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,pt,At,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,mt,nt.width,nt.height,nt.depth,0,pt,At,nt.data);else if(x.isData3DTexture)Nt?(Vt&&e.texStorage3D(r.TEXTURE_3D,ut,mt,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,pt,At,nt.data)):e.texImage3D(r.TEXTURE_3D,0,mt,nt.width,nt.height,nt.depth,0,pt,At,nt.data);else if(x.isFramebufferTexture){if(Vt)if(Nt)e.texStorage2D(r.TEXTURE_2D,ut,mt,nt.width,nt.height);else{let et=nt.width,gt=nt.height;for(let vt=0;vt<ut;vt++)e.texImage2D(r.TEXTURE_2D,vt,mt,et,gt,0,pt,At,null),et>>=1,gt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){let et=r.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),nt.parentNode!==et){et.appendChild(nt),d.add(x),et.onpaint=gt=>{let vt=gt.changedElements;for(let it of d)vt.includes(it.image)&&(it.needsUpdate=!0)},et.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,nt);else{let vt=r.RGBA,it=r.RGBA,at=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,vt,it,at,nt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(lt.length>0){if(Nt&&Vt){let et=Xt(lt[0]);e.texStorage2D(r.TEXTURE_2D,ut,mt,et.width,et.height)}for(let et=0,gt=lt.length;et<gt;et++)ft=lt[et],Nt?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,pt,At,ft):e.texImage2D(r.TEXTURE_2D,et,mt,pt,At,ft);x.generateMipmaps=!1}else if(Nt){if(Vt){let et=Xt(nt);e.texStorage2D(r.TEXTURE_2D,ut,mt,et.width,et.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,pt,At,nt)}else e.texImage2D(r.TEXTURE_2D,0,mt,pt,At,nt);g(x)&&w(H),ot.__version=ht.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function zt(P,x,z){if(x.image.length!==6)return;let H=Ht(P,x),K=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+z);let ht=n.get(K);if(K.version!==ht.__version||H===!0){e.activeTexture(r.TEXTURE0+z);let ot=le.getPrimaries(le.workingColorSpace),j=x.colorSpace===xr?null:le.getPrimaries(x.colorSpace),nt=x.colorSpace===xr||ot===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let pt=x.isCompressedTexture||x.image[0].isCompressedTexture,At=x.image[0]&&x.image[0].isDataTexture,mt=[];for(let it=0;it<6;it++)!pt&&!At?mt[it]=p(x.image[it],!0,i.maxCubemapSize):mt[it]=At?x.image[it].image:x.image[it],mt[it]=De(x,mt[it]);let ft=mt[0],lt=s.convert(x.format,x.colorSpace),Nt=s.convert(x.type),Vt=y(x.internalFormat,lt,Nt,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,ut=ht.__version===void 0||H===!0,et=K.dataReady,gt=T(x,ft);Bt(r.TEXTURE_CUBE_MAP,x);let vt;if(pt){N&&ut&&e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,Vt,ft.width,ft.height);for(let it=0;it<6;it++){vt=mt[it].mipmaps;for(let at=0;at<vt.length;at++){let rt=vt[at];x.format!==Ti?lt!==null?N?et&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,0,0,rt.width,rt.height,lt,rt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,Vt,rt.width,rt.height,0,rt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,0,0,rt.width,rt.height,lt,Nt,rt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,Vt,rt.width,rt.height,0,lt,Nt,rt.data)}}}else{if(vt=x.mipmaps,N&&ut){vt.length>0&&gt++;let it=Xt(mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,Vt,it.width,it.height)}for(let it=0;it<6;it++)if(At){N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,mt[it].width,mt[it].height,lt,Nt,mt[it].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Vt,mt[it].width,mt[it].height,0,lt,Nt,mt[it].data);for(let at=0;at<vt.length;at++){let Ot=vt[at].image[it].image;N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,0,0,Ot.width,Ot.height,lt,Nt,Ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,Vt,Ot.width,Ot.height,0,lt,Nt,Ot.data)}}else{N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,lt,Nt,mt[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Vt,lt,Nt,mt[it]);for(let at=0;at<vt.length;at++){let rt=vt[at];N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,0,0,lt,Nt,rt.image[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,Vt,lt,Nt,rt.image[it])}}}g(x)&&w(r.TEXTURE_CUBE_MAP),ht.__version=K.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function dt(P,x,z,H,K,ht){let ot=s.convert(z.format,z.colorSpace),j=s.convert(z.type),nt=y(z.internalFormat,ot,j,z.normalized,z.colorSpace),pt=n.get(x),At=n.get(z);if(At.__renderTarget=x,!pt.__hasExternalTextures){let mt=Math.max(1,x.width>>ht),ft=Math.max(1,x.height>>ht);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?e.texImage3D(K,ht,nt,mt,ft,x.depth,0,ot,j,null):e.texImage2D(K,ht,nt,mt,ft,0,ot,j,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),me(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,K,At.__webglTexture,0,Jt(x)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,H,K,At.__webglTexture,ht),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(P,x,z){if(r.bindRenderbuffer(r.RENDERBUFFER,P),x.depthBuffer){let H=x.depthTexture,K=H&&H.isDepthTexture?H.type:null,ht=M(x.stencilBuffer,K),ot=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;me(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Jt(x),ht,x.width,x.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt(x),ht,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ht,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,P)}else{let H=x.textures;for(let K=0;K<H.length;K++){let ht=H[K],ot=s.convert(ht.format,ht.colorSpace),j=s.convert(ht.type),nt=y(ht.internalFormat,ot,j,ht.normalized,ht.colorSpace);me(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Jt(x),nt,x.width,x.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt(x),nt,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,nt,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ft(P,x,z){let H=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",E)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,x.depthTexture);let pt=s.convert(x.depthTexture.format),At=s.convert(x.depthTexture.type),mt;x.depthTexture.format===Ji?mt=r.DEPTH_COMPONENT24:x.depthTexture.format===jr&&(mt=r.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,mt,x.width,x.height,0,pt,At,null)}}else Q(x.depthTexture,0);let ht=K.__webglTexture,ot=Jt(x),j=H?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,nt=x.depthTexture.format===jr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ji)me(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,j,ht,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,nt,j,ht,0);else if(x.depthTexture.format===jr)me(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,j,ht,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,nt,j,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Dt(P){let x=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){let H=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=H}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)Ft(x.__webglFramebuffer[H],P,H);else{let H=P.texture.mipmaps;H&&H.length>0?Ft(x.__webglFramebuffer[0],P,0):Ft(x.__webglFramebuffer,P,0)}else if(z){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=r.createRenderbuffer(),Ct(x.__webglDepthbuffer[H],P,!1);else{let K=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer[H];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,ht)}}else{let H=P.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Ct(x.__webglDepthbuffer,P,!1);else{let K=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,ht)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(P,x,z){let H=n.get(P);x!==void 0&&dt(H.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Dt(P)}function Qt(P){let x=P.texture,z=n.get(P),H=n.get(x);P.addEventListener("dispose",v);let K=P.textures,ht=P.isWebGLCubeRenderTarget===!0,ot=K.length>1;if(ot||(H.__webglTexture===void 0&&(H.__webglTexture=r.createTexture()),H.__version=x.version,o.memory.textures++),ht){z.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[j]=[];for(let nt=0;nt<x.mipmaps.length;nt++)z.__webglFramebuffer[j][nt]=r.createFramebuffer()}else z.__webglFramebuffer[j]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)z.__webglFramebuffer[j]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ot)for(let j=0,nt=K.length;j<nt;j++){let pt=n.get(K[j]);pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&me(P)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let nt=K[j];z.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[j]);let pt=s.convert(nt.format,nt.colorSpace),At=s.convert(nt.type),mt=y(nt.internalFormat,pt,At,nt.normalized,nt.colorSpace,P.isXRRenderTarget===!0),ft=Jt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,mt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,z.__webglColorRenderbuffer[j])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ct(z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let nt=0;nt<x.mipmaps.length;nt++)dt(z.__webglFramebuffer[j][nt],P,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt);else dt(z.__webglFramebuffer[j],P,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(x)&&w(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let j=0,nt=K.length;j<nt;j++){let pt=K[j],At=n.get(pt),mt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(mt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(mt,At.__webglTexture),Bt(mt,pt),dt(z.__webglFramebuffer,P,pt,r.COLOR_ATTACHMENT0+j,mt,0),g(pt)&&w(mt)}e.unbindTexture()}else{let j=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(j,H.__webglTexture),Bt(j,x),x.mipmaps&&x.mipmaps.length>0)for(let nt=0;nt<x.mipmaps.length;nt++)dt(z.__webglFramebuffer[nt],P,x,r.COLOR_ATTACHMENT0,j,nt);else dt(z.__webglFramebuffer,P,x,r.COLOR_ATTACHMENT0,j,0);g(x)&&w(j),e.unbindTexture()}P.depthBuffer&&Dt(P)}function V(P){let x=P.textures;for(let z=0,H=x.length;z<H;z++){let K=x[z];if(g(K)){let ht=C(P),ot=n.get(K).__webglTexture;e.bindTexture(ht,ot),w(ht),e.unbindTexture()}}}let re=[],ye=[];function Ue(P){if(P.samples>0){if(me(P)===!1){let x=P.textures,z=P.width,H=P.height,K=r.COLOR_BUFFER_BIT,ht=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=n.get(P),j=x.length>1;if(j)for(let pt=0;pt<x.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);let nt=P.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let pt=0;pt<x.length;pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),j){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ot.__webglColorRenderbuffer[pt]);let At=n.get(x[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,z,H,0,0,z,H,K,r.NEAREST),l===!0&&(re.length=0,ye.length=0,re.push(r.COLOR_ATTACHMENT0+pt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(re.push(ht),ye.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ye)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),j)for(let pt=0;pt<x.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,ot.__webglColorRenderbuffer[pt]);let At=n.get(x[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,At,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let x=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function Jt(P){return Math.min(i.maxSamples,P.samples)}function me(P){let x=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function O(P){let x=o.render.frame;h.get(P)!==x&&(h.set(P,x),P.update())}function De(P,x){let z=P.colorSpace,H=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==xa&&z!==xr&&(le.getTransfer(z)===xe?(H!==Ti||K!==fi)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",z)),x}function Xt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=F,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=R,this.setTextureCube=$,this.rebindTextures=qt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function n1(r,t){function e(n,i=xr){let s,o=le.getTransfer(i);if(n===fi)return r.UNSIGNED_BYTE;if(n===Wc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Xc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Wf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Xf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gf)return r.BYTE;if(n===Hf)return r.SHORT;if(n===To)return r.UNSIGNED_SHORT;if(n===Hc)return r.INT;if(n===Ui)return r.UNSIGNED_INT;if(n===Oi)return r.FLOAT;if(n===Fi)return r.HALF_FLOAT;if(n===Yf)return r.ALPHA;if(n===qf)return r.RGB;if(n===Ti)return r.RGBA;if(n===Ji)return r.DEPTH_COMPONENT;if(n===jr)return r.DEPTH_STENCIL;if(n===Zf)return r.RED;if(n===Yc)return r.RED_INTEGER;if(n===ts)return r.RG;if(n===qc)return r.RG_INTEGER;if(n===Zc)return r.RGBA_INTEGER;if(n===Va||n===Ga||n===Ha||n===Wa)if(o===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Va)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Va)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ga)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jc||n===$c||n===Kc||n===Qc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Jc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$c)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jc||n===th||n===eh||n===nh||n===ih||n===Xa||n===rh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===jc||n===th)return o===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===eh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===nh)return s.COMPRESSED_R11_EAC;if(n===ih)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Xa)return s.COMPRESSED_RG11_EAC;if(n===rh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sh||n===oh||n===ah||n===lh||n===ch||n===hh||n===uh||n===fh||n===dh||n===ph||n===mh||n===gh||n===_h||n===xh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ah)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ch)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ph)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_h)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vh||n===yh||n===Sh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===vh)return o===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mh||n===bh||n===Ya||n===wh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Mh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Eo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var i1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r1=`
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

}`,yd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new La(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Vn({vertexShader:i1,fragmentShader:r1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wi(new Da(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sd=class extends $i{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",p=new yd,g={},w=e.getContextAttributes(),C=null,y=null,M=[],T=[],E=new ce,v=null,S=null,A=new Cn;A.viewport=new Ee;let D=new Cn;D.viewport=new Ee;let I=[A,D],F=new Bc,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=M[J];return tt===void 0&&(tt=new So,M[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=M[J];return tt===void 0&&(tt=new So,M[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=M[J];return tt===void 0&&(tt=new So,M[J]=tt),tt.getHandSpace()};function X(J){let tt=T.indexOf(J.inputSource);if(tt===-1)return;let _t=M[tt];_t!==void 0&&(_t.update(J.inputSource,J.frame,c||o),_t.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",Q);for(let J=0;J<M.length;J++){let tt=T[J];tt!==null&&(T[J]=null,M[J].disconnect(tt))}L=null,B=null,p.reset();for(let J in g)delete g[J];if(t.setRenderTarget(C),f=null,u=null,d=null,i=null,y=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(E.width,E.height,!1),S!==null){let J=S.camera;J.fov=S.fov,J.zoom=S.zoom,J.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(C=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",k),i.addEventListener("inputsourceschange",Q),w.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,zt=null,dt=null;w.depth&&(dt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=w.stencil?jr:Ji,zt=w.stencil?Eo:Ui);let Ct={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ct),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Kn(u.textureWidth,u.textureHeight,{format:Ti,type:fi,depthTexture:new Yr(u.textureWidth,u.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Kn(f.framebufferWidth,f.framebufferHeight,{format:Ti,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ht.setContext(i),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(J){for(let tt=0;tt<J.removed.length;tt++){let _t=J.removed[tt],zt=T.indexOf(_t);zt>=0&&(T[zt]=null,M[zt].disconnect(_t))}for(let tt=0;tt<J.added.length;tt++){let _t=J.added[tt],zt=T.indexOf(_t);if(zt===-1){for(let Ct=0;Ct<M.length;Ct++)if(Ct>=T.length){T.push(_t),zt=Ct;break}else if(T[Ct]===null){T[Ct]=_t,zt=Ct;break}if(zt===-1)break}let dt=M[zt];dt&&dt.connect(_t)}}let Y=new Z,R=new Z;function $(J,tt,_t){Y.setFromMatrixPosition(tt.matrixWorld),R.setFromMatrixPosition(_t.matrixWorld);let zt=Y.distanceTo(R),dt=tt.projectionMatrix.elements,Ct=_t.projectionMatrix.elements,Ft=dt[14]/(dt[10]-1),Dt=dt[14]/(dt[10]+1),qt=(dt[9]+1)/dt[5],Qt=(dt[9]-1)/dt[5],V=(dt[8]-1)/dt[0],re=(Ct[8]+1)/Ct[0],ye=Ft*V,Ue=Ft*re,Jt=zt/(-V+re),me=Jt*-V;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(me),J.translateZ(Jt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),dt[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let O=Ft+Jt,De=Dt+Jt,Xt=ye-me,P=Ue+(zt-me),x=qt*Dt/De*O,z=Qt*Dt/De*O;J.projectionMatrix.makePerspective(Xt,P,x,z,O,De),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ct(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let tt=J.near,_t=J.far;p.texture!==null&&(p.depthNear>0&&(tt=p.depthNear),p.depthFar>0&&(_t=p.depthFar)),F.near=D.near=A.near=tt,F.far=D.far=A.far=_t,(L!==F.near||B!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,B=F.far),F.layers.mask=J.layers.mask|6,A.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;let zt=J.parent,dt=F.cameras;ct(F,zt);for(let Ct=0;Ct<dt.length;Ct++)ct(dt[Ct],zt);dt.length===2?$(F,A,D):F.projectionMatrix.copy(A.projectionMatrix),S===null&&J.isPerspectiveCamera&&(S={camera:J,fov:J.fov,zoom:J.zoom}),yt(J,F,zt)};function yt(J,tt,_t){_t===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(_t.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=_c*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(J){return g[J]};let Gt=null;function Bt(J,tt){if(h=tt.getViewerPose(c||o),m=tt,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let zt=!1;_t.length!==F.cameras.length&&(F.cameras.length=0,zt=!0);for(let Dt=0;Dt<_t.length;Dt++){let qt=_t[Dt],Qt=null;if(f!==null)Qt=f.getViewport(qt);else{let re=d.getViewSubImage(u,qt);Qt=re.viewport,Dt===0&&(t.setRenderTargetTextures(y,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(y))}let V=I[Dt];V===void 0&&(V=new Cn,V.layers.enable(Dt),V.viewport=new Ee,I[Dt]=V),V.matrix.fromArray(qt.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(qt.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Dt===0&&(F.matrix.copy(V.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),zt===!0&&F.cameras.push(V)}let dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Dt=d.getDepthInformation(_t[0]);Dt&&Dt.isValid&&Dt.texture&&p.init(Dt,i.renderState)}if(dt&&dt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Dt=0;Dt<_t.length;Dt++){let qt=_t[Dt].camera;if(qt){let Qt=g[qt];Qt||(Qt=new La,g[qt]=Qt);let V=d.getCameraImage(qt);Qt.sourceTexture=V}}}}for(let _t=0;_t<M.length;_t++){let zt=T[_t],dt=M[_t];zt!==null&&dt!==void 0&&dt.update(zt,tt,c||o)}Gt&&Gt(J,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let Ht=new o0;Ht.setAnimationLoop(Bt),this.setAnimationLoop=function(J){Gt=J},this.dispose=function(){}}},s1=new He,f0=new Kt;f0.set(-1,0,0,0,1,0,0,0,1);function o1(r,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Qf(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,w,C,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,w,C):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Gn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Gn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let w=t.get(g),C=w.envMap,y=w.envMapRotation;C&&(p.envMap.value=C,p.envMapRotation.value.setFromMatrix4(s1.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(f0),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,w,C){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*w,p.scale.value=C*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,w){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Gn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let w=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function a1(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let T=M.program;n.uniformBlockBinding(y,T)}function c(y,M){let T=i[y.id];T===void 0&&(p(y),T=h(y),i[y.id]=T,y.addEventListener("dispose",w));let E=M.program;n.updateUBOMapping(y,E);let v=t.render.frame;s[y.id]!==v&&(u(y),s[y.id]=v)}function h(y){let M=d();y.__bindingPointIndex=M;let T=r.createBuffer(),E=y.__size,v=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,E,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,T),T}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let M=i[y.id],T=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let v=0,S=T.length;v<S;v++){let A=T[v];if(Array.isArray(A))for(let D=0,I=A.length;D<I;D++)f(A[D],v,D,E);else f(A,v,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,M,T,E){if(_(y,M,T,E)===!0){let v=y.__offset,S=y.value;if(Array.isArray(S)){let A=0;for(let D=0;D<S.length;D++){let I=S[D],F=g(I);m(I,y.__data,A),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(A+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(S,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,y.__data)}}function m(y,M,T){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,T)}function _(y,M,T,E){let v=y.value,S=M+"_"+T;if(E[S]===void 0)return typeof v=="number"||typeof v=="boolean"?E[S]=v:ArrayBuffer.isView(v)?E[S]=v.slice():E[S]=v.clone(),!0;{let A=E[S];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return E[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function p(y){let M=y.uniforms,T=0,E=16;for(let S=0,A=M.length;S<A;S++){let D=Array.isArray(M[S])?M[S]:[M[S]];for(let I=0,F=D.length;I<F;I++){let L=D[I],B=Array.isArray(L.value)?L.value:[L.value];for(let X=0,k=B.length;X<k;X++){let Q=B[X],Y=g(Q),R=T%E,$=R%Y.boundary,ct=R+$;T+=$,ct!==0&&E-ct<Y.storage&&(T+=E-ct),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=Y.storage}}}let v=T%E;return v>0&&(T+=E-v),y.__size=T,y.__cache={},this}function g(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",y),M}function w(y){let M=y.target;M.removeEventListener("dispose",w);let T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function C(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:C}}var l1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),tr=null;function c1(){return tr===null&&(tr=new Sc(l1,16,16,ts,Fi),tr.name="DFG_LUT",tr.minFilter=gn,tr.magFilter=gn,tr.wrapS=Zi,tr.wrapT=Zi,tr.generateMipmaps=!1,tr.needsUpdate=!0),tr}var Ih=class{constructor(t={}){let{canvas:e=Ig(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=fi}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,p=new Set([Zc,qc,Yc]),g=new Set([fi,Ui,To,Eo,Wc,Xc]),w=new Uint32Array(4),C=new Int32Array(4),y=new Z,M=null,T=null,E=[],v=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,I=null,F=null,L=null,B=null;this._outputColorSpace=li;let X=0,k=0,Q=null,Y=-1,R=null,$=new Ee,ct=new Ee,yt=null,Gt=new de(0),Bt=0,Ht=e.width,J=e.height,tt=1,_t=null,zt=null,dt=new Ee(0,0,Ht,J),Ct=new Ee(0,0,Ht,J),Ft=!1,Dt=new Ra,qt=!1,Qt=!1,V=new He,re=new Z,ye=new Ee,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function me(){return Q===null?tt:1}let O=n;function De(b,U){return e.getContext(b,U)}let Xt,P,x,z,H,K,ht,ot,j,nt,pt,At,mt,ft,lt,Nt,Vt,N,ut,et,gt,vt,it;try{let b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ot,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",kt,!1),O===null){let U="webgl2";if(O=De(U,b),O===null)throw De(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(b){throw e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",kt,!1),Yt("WebGLRenderer: "+b.message),b}function at(){Xt=new gM(O),Xt.init(),gt=new n1(O,Xt),P=new oM(O,Xt,t,gt),x=new t1(O,Xt),P.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),F=O.createFramebuffer(),L=O.createFramebuffer(),B=O.createFramebuffer(),z=new vM(O),H=new kb,K=new e1(O,Xt,x,H,P,gt,z),ht=new mM(A),ot=new Sv(O),vt=new rM(O,ot),j=new _M(O,ot,z,vt),nt=new SM(O,j,ot,vt,z),N=new yM(O,P,K),lt=new aM(H),pt=new zb(A,ht,Xt,P,vt,lt),At=new o1(A,H),mt=new Gb,ft=new Zb(Xt),Vt=new iM(A,ht,x,nt,m,l),Nt=new jb(A,nt,P),it=new a1(O,z,P,x),ut=new sM(O,Xt,z),et=new xM(O,Xt,z),z.programs=pt.programs,A.capabilities=P,A.extensions=Xt,A.properties=H,A.renderLists=mt,A.shadowMap=Nt,A.state=x,A.info=z}_!==fi&&(S=new bM(_,e.width,e.height,a,i,s));let rt=new Sd(A,O);this.xr=rt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=Xt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Xt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(b){b!==void 0&&(tt=b,this.setSize(Ht,J,!1))},this.getSize=function(b){return b.set(Ht,J)},this.setSize=function(b,U,q=!0){if(rt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ht=b,J=U,e.width=Math.floor(b*tt),e.height=Math.floor(U*tt),q===!0&&(e.style.width=b+"px",e.style.height=U+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Ht*tt,J*tt).floor()},this.setDrawingBufferSize=function(b,U,q){Ht=b,J=U,tt=q,e.width=Math.floor(b*q),e.height=Math.floor(U*q),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(_===fi){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy($)},this.getViewport=function(b){return b.copy(dt)},this.setViewport=function(b,U,q,G){b.isVector4?dt.set(b.x,b.y,b.z,b.w):dt.set(b,U,q,G),x.viewport($.copy(dt).multiplyScalar(tt).round())},this.getScissor=function(b){return b.copy(Ct)},this.setScissor=function(b,U,q,G){b.isVector4?Ct.set(b.x,b.y,b.z,b.w):Ct.set(b,U,q,G),x.scissor(ct.copy(Ct).multiplyScalar(tt).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(b){x.setScissorTest(Ft=b)},this.setOpaqueSort=function(b){_t=b},this.setTransparentSort=function(b){zt=b},this.getClearColor=function(b){return b.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,q=!0){let G=0;if(b){let W=!1;if(Q!==null){let xt=Q.texture.format;W=p.has(xt)}if(W){let xt=Q.texture.type,Tt=g.has(xt),Mt=Vt.getClearColor(),Pt=Vt.getClearAlpha(),Ut=Mt.r,jt=Mt.g,ae=Mt.b;Tt?(w[0]=Ut,w[1]=jt,w[2]=ae,w[3]=Pt,O.clearBufferuiv(O.COLOR,0,w)):(C[0]=Ut,C[1]=jt,C[2]=ae,C[3]=Pt,O.clearBufferiv(O.COLOR,0,C))}else G|=O.COLOR_BUFFER_BIT}U&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",kt,!1),Vt.dispose(),mt.dispose(),ft.dispose(),H.dispose(),ht.dispose(),nt.dispose(),vt.dispose(),it.dispose(),pt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Pe),rt.removeEventListener("sessionend",Me),he.stop()};function Ot(b){b.preventDefault(),Kf("WebGLRenderer: Context Lost."),D=!0}function st(){Kf("WebGLRenderer: Context Restored."),D=!1;let b=z.autoReset,U=Nt.enabled,q=Nt.autoUpdate,G=Nt.needsUpdate,W=Nt.type;at(),z.autoReset=b,Nt.enabled=U,Nt.autoUpdate=q,Nt.needsUpdate=G,Nt.type=W}function kt(b){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Rt(b){let U=b.target;U.removeEventListener("dispose",Rt),$t(U)}function $t(b){qe(b),H.remove(b)}function qe(b){let U=H.get(b).programs;U!==void 0&&(U.forEach(function(q){pt.releaseProgram(q)}),b.isShaderMaterial&&pt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,q,G,W,xt){U===null&&(U=Ue);let Tt=W.isMesh&&W.matrixWorld.determinantAffine()<0,Mt=an(b,U,q,G,W);x.setMaterial(G,Tt);let Pt=q.index,Ut=1;if(G.wireframe===!0){if(Pt=j.getWireframeAttribute(q),Pt===void 0)return;Ut=2}let jt=q.drawRange,ae=q.attributes.position,It=jt.start*Ut,ge=(jt.start+jt.count)*Ut;xt!==null&&(It=Math.max(It,xt.start*Ut),ge=Math.min(ge,(xt.start+xt.count)*Ut)),Pt!==null?(It=Math.max(It,0),ge=Math.min(ge,Pt.count)):ae!=null&&(It=Math.max(It,0),ge=Math.min(ge,ae.count));let Je=ge-It;if(Je<0||Je===1/0)return;vt.setup(W,G,Mt,q,Pt);let Ie,be=ut;if(Pt!==null&&(Ie=ot.get(Pt),be=et,be.setIndex(Ie)),W.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*me()),be.setMode(O.LINES)):be.setMode(O.TRIANGLES);else if(W.isLine){let xn=G.linewidth;xn===void 0&&(xn=1),x.setLineWidth(xn*me()),W.isLineSegments?be.setMode(O.LINES):W.isLineLoop?be.setMode(O.LINE_LOOP):be.setMode(O.LINE_STRIP)}else W.isPoints?be.setMode(O.POINTS):W.isSprite&&be.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(Xt.get("WEBGL_multi_draw"))be.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let xn=W._multiDrawStarts,wt=W._multiDrawCounts,Ln=W._multiDrawCount,pe=Pt?ot.get(Pt).bytesPerElement:1,mi=H.get(G).currentProgram.getUniforms();for(let ki=0;ki<Ln;ki++)mi.setValue(O,"_gl_DrawID",ki),be.render(xn[ki]/pe,wt[ki])}else if(W.isInstancedMesh)be.renderInstances(It,Je,W.count);else if(q.isInstancedBufferGeometry){let xn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,wt=Math.min(q.instanceCount,xn);be.renderInstances(It,Je,wt)}else be.render(It,Je)};function se(b,U,q,G){I!==null&&b.isNodeMaterial&&I.setObject(G,b),qt===!0&&lt.setState(b,q,!1),b.transparent===!0&&b.side===Qi&&b.forceSinglePass===!1?(b.side=Gn,b.needsUpdate=!0,ze(b,U,G),b.side=$r,b.needsUpdate=!0,ze(b,U,G),b.side=Qi):ze(b,U,G)}this.compile=function(b,U,q=null){q===null&&(q=b),I!==null&&I.renderStart(b,U,q),T=ft.get(q),T.init(U),v.push(T),q.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),b!==q&&b.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),Qt=this.localClippingEnabled,qt=lt.init(this.clippingPlanes,Qt),qt===!0&&lt.setGlobalState(this.clippingPlanes,U),I!==null&&Nt.render(T.state.shadowsArray,q,U);let G=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let xt=W.material;if(xt)if(Array.isArray(xt))for(let Tt=0;Tt<xt.length;Tt++){let Mt=xt[Tt];se(Mt,q,U,W),G.add(Mt)}else se(xt,q,U,W),G.add(xt)}),T=v.pop(),I!==null&&I.renderEnd(),G},this.compileAsync=function(b,U,q=null){let G=this.compile(b,U,q);return new Promise(W=>{function xt(){if(G.forEach(function(Tt){let Pt=H.get(Tt).currentProgram;(Pt===void 0||Pt.isReady())&&G.delete(Tt)}),G.size===0){W(b);return}setTimeout(xt,10)}Xt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Re=null;function on(b){Re&&Re(b)}function Pe(){he.stop()}function Me(){he.start()}let he=new o0;he.setAnimationLoop(on),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(b){Re=b,rt.setAnimationLoop(b),b===null?he.stop():he.start()},rt.addEventListener("sessionstart",Pe),rt.addEventListener("sessionend",Me),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(b,U);let q=rt.enabled===!0&&rt.isPresenting===!0,G=S!==null&&(Q===null||q)&&S.begin(A,Q);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,U,Q),T=ft.get(b,v.length),T.init(U),T.state.textureUnits=K.getTextureUnits(),v.push(T),V.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Dt.setFromProjectionMatrix(V,Di,U.reversedDepth),Qt=this.localClippingEnabled,qt=lt.init(this.clippingPlanes,Qt),M=mt.get(b,E.length),M.init(),E.push(M),rt.enabled===!0&&rt.isPresenting===!0){let Tt=A.xr.getDepthSensingMesh();Tt!==null&&Pn(Tt,U,-1/0,A.sortObjects)}Pn(b,U,0,A.sortObjects),M.finish(),I!==null&&I.updateLights(T.state.lightsArray),A.sortObjects===!0&&M.sort(_t,zt),Jt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Jt&&Vt.addToRenderList(M,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qt===!0&&lt.beginShadows();let W=T.state.shadowsArray;if(Nt.render(W,b,U),qt===!0&&lt.endShadows(),(G&&S.hasRenderPass())===!1){let Tt=M.opaque,Mt=M.transmissive;if(T.setupLights(),U.isArrayCamera){let Pt=U.cameras;if(Mt.length>0)for(let Ut=0,jt=Pt.length;Ut<jt;Ut++){let ae=Pt[Ut];_n(Tt,Mt,b,ae)}Jt&&Vt.render(b);for(let Ut=0,jt=Pt.length;Ut<jt;Ut++){let ae=Pt[Ut];Ae(M,b,ae,ae.viewport)}}else Mt.length>0&&_n(Tt,Mt,b,U),Jt&&Vt.render(b),Ae(M,b,U)}Q!==null&&k===0&&(K.updateMultisampleRenderTarget(Q),K.updateRenderTargetMipmap(Q)),G&&S.end(A),b.isScene===!0&&b.onAfterRender(A,b,U),vt.resetDefaultState(),Y=-1,R=null,v.pop(),v.length>0?(T=v[v.length-1],K.setTextureUnits(T.state.textureUnits),qt===!0&&lt.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,I!==null&&I.renderEnd()};function Pn(b,U,q,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Dt)){G&&ye.setFromMatrixPosition(b.matrixWorld).applyMatrix4(V);let Tt=nt.update(b),Mt=b.material;Mt.visible&&M.push(b,Tt,Mt,q,ye.z,null,U)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Dt))){let Tt=nt.update(b),Mt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ye.copy(b.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),ye.copy(Tt.boundingSphere.center)),ye.applyMatrix4(b.matrixWorld).applyMatrix4(V)),Array.isArray(Mt)){let Pt=Tt.groups;for(let Ut=0,jt=Pt.length;Ut<jt;Ut++){let ae=Pt[Ut],It=Mt[ae.materialIndex];It&&It.visible&&M.push(b,Tt,It,q,ye.z,ae,U)}}else Mt.visible&&M.push(b,Tt,Mt,q,ye.z,null,U)}}let xt=b.children;for(let Tt=0,Mt=xt.length;Tt<Mt;Tt++)Pn(xt[Tt],U,q,G)}function Ae(b,U,q,G){let{opaque:W,transmissive:xt,transparent:Tt}=b;T.setupLightsView(q),qt===!0&&lt.setGlobalState(A.clippingPlanes,q),G&&x.viewport($.copy(G)),W.length>0&&In(W,U,q),xt.length>0&&In(xt,U,q),Tt.length>0&&In(Tt,U,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function _n(b,U,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let It=Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new Kn(1,1,{generateMipmaps:!0,type:It?Fi:fi,minFilter:Qr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let xt=T.state.transmissionRenderTarget[G.id],Tt=G.viewport||$;xt.setSize(Tt.z*A.transmissionResolutionScale,Tt.w*A.transmissionResolutionScale);let Mt=A.getRenderTarget(),Pt=A.getActiveCubeFace(),Ut=A.getActiveMipmapLevel();A.setRenderTarget(xt),A.getClearColor(Gt),Bt=A.getClearAlpha(),Bt<1&&A.setClearColor(16777215,.5),A.clear(),Jt&&Vt.render(q);let jt=A.toneMapping;A.toneMapping=Ni;let ae=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),qt===!0&&lt.setGlobalState(A.clippingPlanes,G),In(b,q,G),K.updateMultisampleRenderTarget(xt),K.updateRenderTargetMipmap(xt),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let ge=0,Je=U.length;ge<Je;ge++){let Ie=U[ge],{object:be,geometry:xn,material:wt,group:Ln}=Ie;if(wt.side===Qi&&be.layers.test(G.layers)){let pe=wt.side;wt.side=Gn,wt.needsUpdate=!0,Ze(be,q,G,xn,wt,Ln),wt.side=pe,wt.needsUpdate=!0,It=!0}}It===!0&&(K.updateMultisampleRenderTarget(xt),K.updateRenderTargetMipmap(xt))}A.setRenderTarget(Mt,Pt,Ut),A.setClearColor(Gt,Bt),ae!==void 0&&(G.viewport=ae),A.toneMapping=jt}function In(b,U,q){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,xt=b.length;W<xt;W++){let Tt=b[W],{object:Mt,geometry:Pt,group:Ut}=Tt,jt=Tt.material;jt.allowOverride===!0&&G!==null&&(jt=G),Mt.layers.test(q.layers)&&Ze(Mt,U,q,Pt,jt,Ut)}}function Ze(b,U,q,G,W,xt){I!==null&&W.isNodeMaterial&&I.setObject(b,W),b.onBeforeRender(A,U,q,G,W,xt),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(A,U,q,G,b,xt),W.transparent===!0&&W.side===Qi&&W.forceSinglePass===!1?(W.side=Gn,W.needsUpdate=!0,A.renderBufferDirect(q,U,G,W,b,xt),W.side=$r,W.needsUpdate=!0,A.renderBufferDirect(q,U,G,W,b,xt),W.side=Qi):A.renderBufferDirect(q,U,G,W,b,xt),b.onAfterRender(A,U,q,G,W,xt)}function ze(b,U,q){U.isScene!==!0&&(U=Ue);let G=H.get(b),W=T.state.lights,xt=T.state.shadowsArray,Tt=W.state.version,Mt=pt.getParameters(b,W.state,xt,U,q,T.state.lightProbeGridArray),Pt=pt.getProgramCacheKey(Mt),Ut=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let jt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=ht.get(b.envMap||G.environment,jt),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",Rt),Ut=new Map,G.programs=Ut);let ae=Ut.get(Pt);if(ae!==void 0){if(G.currentProgram===ae&&G.lightsStateVersion===Tt)return zi(b,Mt),ae}else Mt.uniforms=pt.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,q,Mt),b.onBeforeCompile(Mt,A),ae=pt.acquireProgram(Mt,Pt),Ut.set(Pt,ae),G.uniforms=Mt.uniforms;let It=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(It.clippingPlanes=lt.uniform),zi(b,Mt),G.needsLights=pi(b),G.lightsStateVersion=Tt,G.needsLights&&(It.ambientLightColor.value=W.state.ambient,It.lightProbe.value=W.state.probe,It.sunLights.value=W.state.sun,It.sunLightShadows.value=W.state.sunShadow,It.directionalLights.value=W.state.directional,It.directionalLightShadows.value=W.state.directionalShadow,It.spotLights.value=W.state.spot,It.spotLightShadows.value=W.state.spotShadow,It.rectAreaLights.value=W.state.rectArea,It.ltc_1.value=W.state.rectAreaLTC1,It.ltc_2.value=W.state.rectAreaLTC2,It.pointLights.value=W.state.point,It.pointLightShadows.value=W.state.pointShadow,It.hemisphereLights.value=W.state.hemi,It.sunShadowMatrix.value=W.state.sunShadowMatrix,It.sunShadowCascade.value=W.state.sunShadowCascade,It.directionalShadowMatrix.value=W.state.directionalShadowMatrix,It.spotLightMatrix.value=W.state.spotLightMatrix,It.spotLightMap.value=W.state.spotLightMap,It.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=ae,G.uniformsList=null,ae}function tn(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Ro.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function zi(b,U){let q=H.get(b);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Ls(b,U){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let q=0,G=b.length;q<G;q++){let W=b[q];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function an(b,U,q,G,W){U.isScene!==!0&&(U=Ue),K.resetTextureUnits();let xt=U.fog,Tt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,Mt=Q===null?A.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:le.workingColorSpace,Pt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ut=ht.get(G.envMap||Tt,Pt),jt=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ae=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),It=!!q.morphAttributes.position,ge=!!q.morphAttributes.normal,Je=!!q.morphAttributes.color,Ie=Ni;G.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ie=A.toneMapping);let be=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xn=be!==void 0?be.length:0,wt=H.get(G),Ln=T.state.lights;if(qt===!0&&(Qt===!0||b!==R)){let Ce=b===R&&G.id===Y;lt.setState(G,b,Ce)}let pe=!1;G.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Ln.state.version||wt.outputColorSpace!==Mt||W.isBatchedMesh&&wt.batching===!1||!W.isBatchedMesh&&wt.batching===!0||W.isBatchedMesh&&wt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&wt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&wt.instancing===!1||!W.isInstancedMesh&&wt.instancing===!0||W.isSkinnedMesh&&wt.skinning===!1||!W.isSkinnedMesh&&wt.skinning===!0||W.isInstancedMesh&&wt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&wt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&wt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&wt.instancingMorph===!1&&W.morphTexture!==null||wt.envMap!==Ut||G.fog===!0&&wt.fog!==xt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==lt.numPlanes||wt.numIntersection!==lt.numIntersection)||wt.vertexAlphas!==jt||wt.vertexTangents!==ae||wt.morphTargets!==It||wt.morphNormals!==ge||wt.morphColors!==Je||wt.toneMapping!==Ie||wt.morphTargetsCount!==xn||!!wt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,wt.__version=G.version);let mi=wt.currentProgram;pe===!0&&(mi=ze(G,U,W),I&&G.isNodeMaterial&&I.onUpdateProgram(G,mi,wt));let ki=!1,Sr=!1,Ns=!1,Se=mi.getUniforms(),Xe=wt.uniforms;if(x.useProgram(mi.program)&&(ki=!0,Sr=!0,Ns=!0),G.id!==Y&&(Y=G.id,Sr=!0),wt.needsLights){let Ce=Ls(T.state.lightProbeGridArray,W);wt.lightProbeGrid!==Ce&&(wt.lightProbeGrid=Ce,Sr=!0)}if(ki||R!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Se.setValue(O,"projectionMatrix",b.projectionMatrix),Se.setValue(O,"viewMatrix",b.matrixWorldInverse);let br=Se.map.cameraPosition;br!==void 0&&br.setValue(O,re.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&Se.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Se.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Sr=!0,Ns=!0)}if(wt.needsLights&&(Ln.state.sunShadowMap.length>0&&Se.setValue(O,"sunShadowMap",Ln.state.sunShadowMap,K),Ln.state.directionalShadowMap.length>0&&Se.setValue(O,"directionalShadowMap",Ln.state.directionalShadowMap,K),Ln.state.spotShadowMap.length>0&&Se.setValue(O,"spotShadowMap",Ln.state.spotShadowMap,K),Ln.state.pointShadowMap.length>0&&Se.setValue(O,"pointShadowMap",Ln.state.pointShadowMap,K)),W.isSkinnedMesh){Se.setOptional(O,W,"bindMatrix"),Se.setOptional(O,W,"bindMatrixInverse");let Ce=W.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),Se.setValue(O,"boneTexture",Ce.boneTexture,K))}W.isBatchedMesh&&(Se.setOptional(O,W,"batchingTexture"),Se.setValue(O,"batchingTexture",W._matricesTexture,K),Se.setOptional(O,W,"batchingIdTexture"),Se.setValue(O,"batchingIdTexture",W._indirectTexture,K),Se.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&Se.setValue(O,"batchingColorTexture",W._colorsTexture,K));let Mr=q.morphAttributes;if((Mr.position!==void 0||Mr.normal!==void 0||Mr.color!==void 0)&&N.update(W,q,mi),(Sr||wt.receiveShadow!==W.receiveShadow)&&(wt.receiveShadow=W.receiveShadow,Se.setValue(O,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Xe.envMapIntensity.value=U.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=c1()),Sr){if(Se.setValue(O,"toneMappingExposure",A.toneMappingExposure),wt.needsLights&&We(Xe,Ns),xt&&G.fog===!0&&At.refreshFogUniforms(Xe,xt),At.refreshMaterialUniforms(Xe,G,tt,J,T.state.transmissionRenderTarget[b.id]),wt.needsLights&&wt.lightProbeGrid){let Ce=wt.lightProbeGrid;Xe.probesSH.value=Ce.texture,Xe.probesMin.value.copy(Ce.boundingBox.min),Xe.probesMax.value.copy(Ce.boundingBox.max),Xe.probesResolution.value.copy(Ce.resolution)}Ro.upload(O,tn(wt),Xe,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ro.upload(O,tn(wt),Xe,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Se.setValue(O,"center",W.center),Se.setValue(O,"modelViewMatrix",W.modelViewMatrix),Se.setValue(O,"normalMatrix",W.normalMatrix),Se.setValue(O,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Ce=G.uniformsGroups;for(let br=0,Us=Ce.length;br<Us;br++){let Cd=Ce[br];it.update(Cd,mi),it.bind(Cd,mi)}}return mi}function We(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function pi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(b,U,q){let G=H.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),H.get(b.texture).__webglTexture=U,H.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let q=H.get(b);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,q=0){Q=b,X=U,k=q;let G=null,W=!1,xt=!1;if(b){let Mt=H.get(b);if(Mt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(O.FRAMEBUFFER,Mt.__webglFramebuffer),$.copy(b.viewport),ct.copy(b.scissor),yt=b.scissorTest,x.viewport($),x.scissor(ct),x.setScissorTest(yt),Y=-1;return}else if(Mt.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(Mt.__hasExternalTextures)K.rebindTextures(b,H.get(b.texture).__webglTexture,H.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let jt=b.depthTexture;if(Mt.__boundDepthTexture!==jt){if(jt!==null&&H.has(jt)&&(b.width!==jt.image.width||b.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}let Pt=b.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(xt=!0);let Ut=H.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?G=Ut[U][q]:G=Ut[U],W=!0):b.samples>0&&K.useMultisampledRTT(b)===!1?G=H.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?G=Ut[q]:G=Ut,$.copy(b.viewport),ct.copy(b.scissor),yt=b.scissorTest}else $.copy(dt).multiplyScalar(tt).floor(),ct.copy(Ct).multiplyScalar(tt).floor(),yt=Ft;if(q!==0&&(G=F),x.bindFramebuffer(O.FRAMEBUFFER,G)&&x.drawBuffers(b,G),x.viewport($),x.scissor(ct),x.setScissorTest(yt),W){let Mt=H.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,q)}else if(xt){let Mt=U;for(let Pt=0;Pt<b.textures.length;Pt++){let Ut=H.get(b.textures[Pt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Pt,Ut.__webglTexture,q,Mt)}}else if(b!==null&&q!==0){let Mt=H.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mt.__webglTexture,q)}Y=-1};function Ds(b){let U=H.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=P.textureFormatReadable(b.format),U.__typeReadable=P.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,q,G,W,xt,Tt,Mt=0){if(!(b&&b.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt){x.bindFramebuffer(O.FRAMEBUFFER,Pt);try{let Ut=b.textures[Mt],jt=Ut.format,ae=Ut.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Mt);let It=Ds(Ut);if(It.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&q>=0&&q<=b.height-W&&O.readPixels(U,q,G,W,gt.convert(jt),gt.convert(ae),xt)}finally{let Ut=Q!==null?H.get(Q).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(b,U,q,G,W,xt,Tt,Mt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt)if(U>=0&&U<=b.width-G&&q>=0&&q<=b.height-W){x.bindFramebuffer(O.FRAMEBUFFER,Pt);let Ut=b.textures[Mt],jt=Ut.format,ae=Ut.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Mt);let It=Ds(Ut);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ge),O.bufferData(O.PIXEL_PACK_BUFFER,xt.byteLength,O.STREAM_READ),O.readPixels(U,q,G,W,gt.convert(jt),gt.convert(ae),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Je=Q!==null?H.get(Q).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Je);let Ie=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Dg(O,Ie,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ge),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,xt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ge),O.deleteSync(Ie),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,q=0){let G=Math.pow(2,-q),W=Math.floor(b.image.width*G),xt=Math.floor(b.image.height*G),Tt=U!==null?U.x:0,Mt=U!==null?U.y:0;K.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,Tt,Mt,W,xt),x.unbindTexture()},this.copyTextureToTexture=function(b,U,q=null,G=null,W=0,xt=0){let Tt,Mt,Pt,Ut,jt,ae,It,ge,Je,Ie=b.isCompressedTexture?b.mipmaps[xt]:b.image;if(q!==null)Tt=q.max.x-q.min.x,Mt=q.max.y-q.min.y,Pt=q.isBox3?q.max.z-q.min.z:1,Ut=q.min.x,jt=q.min.y,ae=q.isBox3?q.min.z:0;else{let Xe=Math.pow(2,-W);Tt=Math.floor(Ie.width*Xe),Mt=Math.floor(Ie.height*Xe),b.isDataArrayTexture?Pt=Ie.depth:b.isData3DTexture?Pt=Math.floor(Ie.depth*Xe):Pt=1,Ut=0,jt=0,ae=0}G!==null?(It=G.x,ge=G.y,Je=G.z):(It=0,ge=0,Je=0);let be=gt.convert(U.format),xn=gt.convert(U.type),wt;U.isData3DTexture?(K.setTexture3D(U,0),wt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(K.setTexture2DArray(U,0),wt=O.TEXTURE_2D_ARRAY):(K.setTexture2D(U,0),wt=O.TEXTURE_2D),x.activeTexture(O.TEXTURE0),x.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let Ln=x.getParameter(O.UNPACK_ROW_LENGTH),pe=x.getParameter(O.UNPACK_IMAGE_HEIGHT),mi=x.getParameter(O.UNPACK_SKIP_PIXELS),ki=x.getParameter(O.UNPACK_SKIP_ROWS),Sr=x.getParameter(O.UNPACK_SKIP_IMAGES);x.pixelStorei(O.UNPACK_ROW_LENGTH,Ie.width),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ie.height),x.pixelStorei(O.UNPACK_SKIP_PIXELS,Ut),x.pixelStorei(O.UNPACK_SKIP_ROWS,jt),x.pixelStorei(O.UNPACK_SKIP_IMAGES,ae);let Ns=b.isDataArrayTexture||b.isData3DTexture,Se=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let Xe=H.get(b),Mr=H.get(U),Ce=H.get(Xe.__renderTarget),br=H.get(Mr.__renderTarget);x.bindFramebuffer(O.READ_FRAMEBUFFER,Ce.__webglFramebuffer),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,br.__webglFramebuffer);for(let Us=0;Us<Pt;Us++)Ns&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(b).__webglTexture,W,ae+Us),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(U).__webglTexture,xt,Je+Us)),O.blitFramebuffer(Ut,jt,Tt,Mt,It,ge,Tt,Mt,O.DEPTH_BUFFER_BIT,O.NEAREST);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||H.has(b)){let Xe=H.get(b),Mr=H.get(U);x.bindFramebuffer(O.READ_FRAMEBUFFER,L),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let Ce=0;Ce<Pt;Ce++)Ns?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xe.__webglTexture,W,ae+Ce):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xe.__webglTexture,W),Se?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Mr.__webglTexture,xt,Je+Ce):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mr.__webglTexture,xt),W!==0?O.blitFramebuffer(Ut,jt,Tt,Mt,It,ge,Tt,Mt,O.COLOR_BUFFER_BIT,O.NEAREST):Se?O.copyTexSubImage3D(wt,xt,It,ge,Je+Ce,Ut,jt,Tt,Mt):O.copyTexSubImage2D(wt,xt,It,ge,Ut,jt,Tt,Mt);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Se?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(wt,xt,It,ge,Je,Tt,Mt,Pt,be,xn,Ie.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(wt,xt,It,ge,Je,Tt,Mt,Pt,be,Ie.data):O.texSubImage3D(wt,xt,It,ge,Je,Tt,Mt,Pt,be,xn,Ie):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,xt,It,ge,Tt,Mt,be,xn,Ie.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,xt,It,ge,Ie.width,Ie.height,be,Ie.data):O.texSubImage2D(O.TEXTURE_2D,xt,It,ge,Tt,Mt,be,xn,Ie);x.pixelStorei(O.UNPACK_ROW_LENGTH,Ln),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pe),x.pixelStorei(O.UNPACK_SKIP_PIXELS,mi),x.pixelStorei(O.UNPACK_SKIP_ROWS,ki),x.pixelStorei(O.UNPACK_SKIP_IMAGES,Sr),xt===0&&U.generateMipmaps&&O.generateMipmap(wt),x.unbindTexture()},this.initRenderTarget=function(b){H.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){X=0,k=0,Q=null,x.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var Md=Math.PI*2,Nh=9;function d0(r){return()=>{r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ei=r=>{let t=0;for(;!t;)t=r();return Math.sqrt(-2*Math.log(t))*Math.cos(Md*r())};function h1(r){let t=[...Array(256).keys()];for(let s=255;s>0;s--){let o=Math.floor(r()*(s+1));[t[s],t[o]]=[t[o],t[s]]}let e=new Uint8Array(512);for(let s=0;s<512;s++)e[s]=t[s&255];let n=s=>s*s*s*(s*(s*6-15)+10),i=(s,o)=>e[e[s&255]+o&511]/255;return(s,o)=>{let a=Math.floor(s),l=Math.floor(o),c=s-a,h=o-l,d=n(c),u=n(h),f=i(a,l),m=i(a+1,l),_=i(a,l+1),p=i(a+1,l+1);return f+(m-f)*d+(_-f)*u+(f-m-_+p)*d*u}}var Uh=(r,t)=>{let e=Math.cos(t),n=Math.sin(t);return[r[0],r[1]*e-r[2]*n,r[1]*n+r[2]*e]},p0=(r,t)=>{let e=Math.cos(t),n=Math.sin(t);return[r[0]*e+r[2]*n,r[1],-r[0]*n+r[2]*e]},m0=(r,t)=>{let e=Math.cos(t),n=Math.sin(t);return[r[0]*e-r[1]*n,r[0]*n+r[1]*e,r[2]]},vr=r=>r*Math.PI/180;function u1(r){let t=d0(7),e=h1(d0(19)),n=[0,1,2,3].map(()=>new Float32Array(r*3)),i=new Float32Array(r*4);for(let s=0;s<r;s++)i[s*4]=t(),i[s*4+1]=t(),i[s*4+2]=t(),i[s*4+3]=t();for(let s=0;s<r;s++){let o;if(s<r*.13)o=[Ei(t)*.5,Ei(t)*.3,Ei(t)*.5];else{let a=Math.pow(t(),.72)*6.4+.35,l=Math.floor(t()*3),c=a*.66+l*(Md/3)+Ei(t)*.2*(.35+a*.07),h=.16*(.4+a*.12);o=[Math.cos(c)*a+Ei(t)*h,Ei(t)*.12*(1.1-a/8),Math.sin(c)*a+Ei(t)*h]}o=m0(Uh(o,vr(-62)),vr(18)),n[0].set(o,s*3)}{let a=[];for(let l=0;l<15;l++)for(let c=0;c<15;c++){let h=.35+.95*(l/14),d=(.35+Math.pow(e(l*.34+3,c*.34+9),1.4)*3.6)*h;a.push([l,c,d])}for(let l=0;l<r;l++){let c=a[Math.floor(t()*a.length)],h=(c[0]-15/2)*.82,d=(c[1]-15/2)*.82*.9,u=t()<.27,f=u?.2:.045,m=u?c[2]:c[2]*(.1+.9*t()),_=[h+(t()-.5)*.82*(u?.8:.25),m-1.7,d+(t()-.5)*.82*(u?.8:.25)+Ei(t)*f*.1];_=Uh(p0(_,vr(-28)),.42),n[1].set(_,l*3)}}{let s=[{rad:1.75,rx:68,rz:-15,ry:0},{rad:2.3,rx:0,rz:20,ry:67},{rad:2.95,rx:75,rz:60,ry:0}];for(let o=0;o<r;o++){let a;if(o<r*.48){let l=o+.5,c=Math.acos(1-2*l/(r*.48)),h=Math.PI*(1+Math.sqrt(5))*l,d=1.12+Ei(t)*.012;a=[d*Math.cos(h)*Math.sin(c),d*Math.cos(c),d*Math.sin(h)*Math.sin(c)]}else{let l=s[o%3],c=t()*Md,h=l.rad+Ei(t)*.018;a=[Math.cos(c)*h,Ei(t)*.018,Math.sin(c)*h],a=m0(p0(Uh(a,vr(l.rx)),vr(l.ry)),vr(l.rz))}n[2].set(a,o*3)}}{let s=(c,h)=>{let d=1,u=.15,f=0,m=0;for(let _=0;_<5;_++){let p=e(c*u+7.3*_,h*u*1.25+3.1*_),g=1-Math.abs(2*p-1);f+=g*g*d,m+=d,d*=.5,u*=2.05}return f/m};for(let c=0;c<r;c++){let h;if(c<r*.06)h=[(t()-.5)*26,2.6+t()*4.5,-12+t()*5];else{let u=-12+Math.floor(t()*26)/25*(1.5- -12),f=(t()-.5)*22,_=6.2-4.6*((u- -12)/(1.5- -12)),p=1-Math.pow(Math.abs(f)/11,5);h=[f,-2.6+s(f,u)*_*p+Ei(t)*.012,u]}n[3].set(Uh(h,vr(15)),c*3)}}return{f:n,rnd:i}}var f1=`
attribute vec3 t1; attribute vec3 t2; attribute vec3 t3; attribute vec4 aRnd;
uniform float uTime, uPix, uWarp, uWarpZ, uScale, uRotY, uOpacity, uMouseK;
uniform vec4 uW, uRed, uBright;
uniform vec3 uOff;
uniform vec2 uMouse;
varying vec3 vCol; varying float vA;
void main(){
  vec3 p = position*uW.x + t1*uW.y + t2*uW.z + t3*uW.w;
  float settle = max(max(uW.x,uW.y),max(uW.z,uW.w));
  float turb = 1.0 - settle;

  float tt = uTime*(0.25 + aRnd.z*0.5);
  p += vec3(sin(tt + aRnd.y*6.283 + p.y*0.9), cos(tt*1.1 + aRnd.x*6.283 + p.z*0.8), sin(tt*0.9 + aRnd.z*6.283 + p.x*0.7)) * (0.04 + 0.07*aRnd.y);
  vec3 dir = normalize(vec3(sin(aRnd.x*40.0), cos(aRnd.y*37.0), sin(aRnd.z*53.0)) + 0.001);
  p += dir * turb*turb * 14.0 * (0.3 + aRnd.w);

  float cy = cos(uRotY), sy = sin(uRotY);
  p.xz = mat2(cy,-sy,sy,cy) * p.xz;
  p *= uScale;
  p += uOff;

  vec2 d2 = p.xy - uMouse; float dist = length(d2);
  float m = smoothstep(2.4, 0.0, dist) * uMouseK;
  p.xy += (d2/(dist + 0.001)) * m * 0.8;
  p.z  += m * 1.3 * (aRnd.y - 0.25);

  float zr = mod(p.z + uWarpZ*(0.5 + aRnd.x) + 18.0, 36.0) - 18.0;
  p.z = mix(p.z, zr, clamp(uWarp, 0.0, 1.0));
  p.xy *= 1.0 + uWarp*0.4*aRnd.y;

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float size = (0.55 + aRnd.x*1.7) * (1.0 + uWarp*1.6) * (1.0 + m*0.6);
  gl_PointSize = clamp(size * uPix * 3.0 * (9.0 / -mv.z), 0.0, 20.0 * uPix);

  float redAmt = dot(uW, uRed);
  float isRed = step(1.0 - redAmt, aRnd.w);
  vec3 bone = vec3(0.949, 0.937, 0.914);
  vec3 red  = vec3(0.941, 0.267, 0.196);
  vCol = mix(bone*1.05, red*1.35, isRed);
  vCol = mix(vCol, red*1.3, m*0.7);
  float tw = 0.72 + 0.28*sin(uTime*(1.0 + aRnd.z*3.0) + aRnd.y*30.0);
  float depthFade = smoothstep(1.5, 5.0, -mv.z) * (1.0 - smoothstep(16.0, 34.0, -mv.z));
  vA = dot(uW, uBright) * tw * (0.3 + 0.7*aRnd.y) * depthFade * uOpacity + m*0.35;
}`,d1=`
varying vec3 vCol; varying float vA;
void main(){
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  float a = smoothstep(0.5, 0.0, d); a = a*a*(0.6 + 0.9*a);
  gl_FragColor = vec4(vCol, a * vA);
}`;function g0(r,{anchors:t,reduce:e,mobile:n}){let i;try{i=new Ih({canvas:r,antialias:!1,alpha:!0,powerPreference:"high-performance"})}catch{return null}if(!i.getContext())return null;let s=Math.min(window.devicePixelRatio||1,n?1.5:1.75);i.setPixelRatio(s),i.setClearColor(0,0);let o=new wa,a=new Cn(50,1,.1,80);a.position.set(0,0,Nh);let l=(navigator.hardwareConcurrency||8)<=4,c=n?9e3:l?16e3:28e3,{f:h,rnd:d}=u1(c),u=new hi;u.setAttribute("position",new un(h[0],3)),u.setAttribute("t1",new un(h[1],3)),u.setAttribute("t2",new un(h[2],3)),u.setAttribute("t3",new un(h[3],3)),u.setAttribute("aRnd",new un(d,4));let f={uTime:{value:0},uPix:{value:s},uWarp:{value:0},uWarpZ:{value:0},uScale:{value:1},uRotY:{value:0},uOpacity:{value:0},uMouseK:{value:0},uW:{value:new Ee(1,0,0,0)},uRed:{value:new Ee(.24,.12,.32,.1)},uBright:{value:new Ee(1.15,.8,1.2,1.7)},uOff:{value:new Z},uMouse:{value:new ce(99,99)}},m=new Vn({vertexShader:f1,fragmentShader:d1,uniforms:f,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ba}),_=new Pa(u,m);_.frustumCulled=!1,o.add(_);let p={progress:0,warp:{v:0},fade:{v:0},pointer:{x:0,y:0,active:!1},active:!0,stops:[0,1,2,3].map(()=>0)},g=16,w=0,C=0,y=s;function M(R){R<=w||(w=R,w>=1&&(y=Math.min(y,1),i.setPixelRatio(y),f.uPix.value=y,i.setSize(v,S,!1),u.setDrawRange(0,Math.floor(c*.65))),w>=2&&(y=Math.min(y,.8),i.setPixelRatio(y),f.uPix.value=y,i.setSize(v,S,!1),u.setDrawRange(0,Math.floor(c*.32))))}let T=new ce(99,99),E=new ce,v=1,S=1,A=50,D=0,I=0,F=new Z,L=new Z;function B(){v=window.innerWidth,S=window.innerHeight,i.setSize(v,S,!1),a.aspect=v/S,a.updateProjectionMatrix()}B(),/cin-lite/.test(location.search)&&setTimeout(()=>M(2),0);function X(R){let $=Math.min(2,Math.max(0,Math.floor(R))),ct=Math.min(1,Math.max(0,R-$));ct=ct*ct*(3-2*ct),ct=ct*ct*(3-2*ct);let yt=[0,0,0,0];return yt[$]=1-ct,yt[$+1]=ct,yt}function k(R,$){let ct=t[R]&&t[R]();if(!ct)return null;let yt=ct.getBoundingClientRect();return[(yt.left+yt.width/2-v/2)*$,-(yt.top+yt.height/2-S/2)*$]}let Q=[1,.92,1,1];function Y(R){if(!p.active&&!e)return;I+=e?0:R,g+=(R*1e3-g)*.05,g>34&&I>2.5?++C>90&&(C=0,M(w+1)):C=0;let $=50+p.warp.v*62;Math.abs($-A)>.01&&(a.fov=$,a.updateProjectionMatrix(),A=$),D+=R*p.warp.v*46;let ct=X(p.progress);f.uW.value.set(ct[0],ct[1],ct[2],ct[3]);let yt=2*Math.tan(vr(A)/2)*Nh/S,Gt=Math.min(1.3,Math.max(.62,S/900)),Bt=0;F.set(0,0,0);for(let Ct=0;Ct<4;Ct++){if(ct[Ct]<.002)continue;let Ft=k(Ct,yt);Bt+=ct[Ct]*Q[Ct],Ft&&(F.x+=ct[Ct]*Ft[0],F.y+=ct[Ct]*Ft[1])}let Ht=v<760?.55:1;f.uOff.value.copy(F),f.uScale.value=Gt*(Bt||1)*Ht;let J=1-.9*ct[3];f.uRotY.value=(I*.05+p.progress*.55)*J;let tt=Math.tan(vr(A)/2)*Nh,_t=tt*a.aspect,zt=p.pointer.x*_t,dt=p.pointer.y*tt;T.x+=(zt-T.x)*.16,T.y+=(dt-T.y)*.16,f.uMouse.value.copy(T),f.uMouseK.value+=((p.pointer.active&&!n?1:0)-f.uMouseK.value)*.06,E.x+=(p.pointer.x*.55-E.x)*.04,E.y+=(p.pointer.y*.35-E.y)*.04,a.position.set(E.x,E.y,Nh),a.lookAt(0,0,0),f.uTime.value=I,f.uWarp.value=p.warp.v,f.uWarpZ.value=D,f.uOpacity.value=p.fade.v,i.render(o,a)}return{state:p,frame:Y,resize:B,count:c,canvas:r}}var ie=(r,t=document)=>t.querySelector(r),je=(r,t=document)=>[...t.querySelectorAll(r)],Bi=matchMedia("(prefers-reduced-motion: reduce)").matches,Io=matchMedia("(pointer:fine)").matches,_0=()=>innerWidth<760;function Lo(r,t={}){if(r._chars)return r._chars;r.hasAttribute("aria-label")||r.setAttribute("aria-label",r.textContent.replace(/\s+/g," ").trim());let e=[],n=i=>{[...i.childNodes].forEach(s=>{if(s.nodeType===3){let o=document.createDocumentFragment();s.textContent.split(/(\s+)/).forEach(a=>{if(!a)return;if(/^\s+$/.test(a)){o.appendChild(document.createTextNode(" "));return}let l=document.createElement("span");l.className="cw",l.setAttribute("aria-hidden","true"),[...a].forEach(c=>{let h=document.createElement("span");h.className="cc",h.textContent=c,l.appendChild(h),e.push(h)}),o.appendChild(l)}),s.replaceWith(o)}else s.nodeType===1&&!t.shallow&&n(s)})};return n(r),r._chars=e,e}function x0(r){let{sc:t}=r,e=ie(".kinetic"),n=e?Lo(e):[],i=ie(".intro-object-stage"),s=i&&parseFloat(getComputedStyle(i).opacity)||1,o=je(".intro-head, .intro-main > .eyebrow, .intro-bottomline p, #launch");bt.set(n,{yPercent:120,rotationZ:6,transformOrigin:"0% 100%"}),bt.set(o,{autoAlpha:0}),bt.set(".intro-head",{y:-18}),bt.set(".intro-main > .eyebrow, .intro-bottomline p",{y:22}),bt.set(".intro-side-note, .intro-shape",{autoAlpha:0}),i&&bt.set(i,{autoAlpha:0,scale:.84,y:50});function a(){let u=bt.timeline({defaults:{ease:"expo.out"}});return u.to(t?t.state.fade:{},{v:1,duration:2.8,ease:"power2.out"},0).to(n,{yPercent:0,rotationZ:0,duration:1.35,stagger:.024},.1).to(".intro-head",{autoAlpha:1,y:0,duration:1.1},.2).to(".intro-main > .eyebrow",{autoAlpha:1,y:0,duration:1.1},.4).to(i,{autoAlpha:s,scale:1,y:0,duration:2},.25).to(".intro-shape, .intro-side-note",{autoAlpha:1,duration:1.6,ease:"power2.out"},.7).to(".intro-bottomline p",{autoAlpha:1,y:0,duration:1.1},1).to("#launch",{autoAlpha:1,duration:1.1,ease:"power2.out"},1.15),u}let l=je(".hero-title b").flatMap(u=>Lo(u)),c=ie(".portrait-image"),h=je(".hero .eyebrow, .hero-desc, .hero-actions, .hero-meta, .hero-bottom, .visual-caption, .crosshair, .portrait-index");bt.set(l,{yPercent:120,rotationZ:5,transformOrigin:"0% 100%"}),bt.set(h,{autoAlpha:0,y:30}),bt.set(".portrait-orbit, .floating-chip, .portrait-backdrop",{autoAlpha:0}),bt.set(".floating-chip",{scale:.3}),c&&(bt.set(c,{clipPath:"inset(100% -40px -40px -40px)"}),bt.set(ie("img",c),{"--ps":1.55}));function d(){let u=bt.timeline({defaults:{ease:"expo.out"}});return u.to(".hero .eyebrow",{autoAlpha:1,y:0,duration:1},0).to(l,{yPercent:0,rotationZ:0,duration:1.35,stagger:.02},.05).to(".portrait-backdrop",{autoAlpha:1,duration:2},.1).to(c,{clipPath:"inset(0% -40px -40px -40px)",duration:1.7,ease:"expo.inOut"},.15).to(ie("img",c),{"--ps":1,duration:2.4},.15).to(".portrait-orbit",{autoAlpha:1,duration:1.6,stagger:.16,ease:"power2.out"},.55).to(".hero-desc, .hero-actions, .hero-meta",{autoAlpha:1,y:0,duration:1.1,stagger:.1},.65).to(".floating-chip",{autoAlpha:1,scale:1,duration:.9,ease:"back.out(2.4)",stagger:.14},.95).to(".visual-caption, .crosshair, .portrait-index, .hero-bottom",{autoAlpha:1,y:0,duration:1,stagger:.06},1.1).add(()=>{c&&bt.set(c,{clearProps:"clipPath"})},">"),u}return{playIntro:a,playHero:d}}function v0(r){let{lenis:t}=r,e=je(".reveal-up").filter(c=>!c.closest(".hero"));bt.set(e,{autoAlpha:0,y:44}),Zt.batch(e,{start:"top 90%",once:!0,onEnter:c=>bt.to(c,{autoAlpha:1,y:0,duration:1.2,ease:"expo.out",stagger:.1,overwrite:!0})}),je(".giant-heading, .split-heading, .contact-title").forEach(c=>{let h=Lo(c);bt.set(h,{opacity:0,yPercent:70,rotationX:-80,transformOrigin:"50% 100%",transformPerspective:800}),bt.to(h,{opacity:1,yPercent:0,rotationX:0,duration:1.2,ease:"expo.out",stagger:.024,scrollTrigger:{trigger:c,start:"top 86%",once:!0}})});let n=ie(".manifesto-title");if(n){let c=Lo(n);bt.set(c,{opacity:.12}),bt.to(c,{opacity:1,ease:"none",stagger:.07,scrollTrigger:{trigger:n,start:"top 78%",end:"bottom 48%",scrub:.5}})}let i=je(".method-card");if(i.length&&bt.fromTo(i,{y:150,rotationX:58,z:-200,autoAlpha:0,transformOrigin:"50% 100%",transformPerspective:900},{y:0,rotationX:0,z:0,autoAlpha:1,ease:"power3.out",stagger:.14,scrollTrigger:{trigger:".method-grid",start:"top 94%",end:"top 46%",scrub:.8}}),je(".light-scene").forEach(c=>{bt.fromTo(c,{clipPath:"inset(5vh 4vw 0vh 4vw round 48px 48px 0px 0px)"},{clipPath:"inset(0vh 0vw 0vh 0vw round 0px 0px 0px 0px)",ease:"none",scrollTrigger:{trigger:c,start:"top 98%",end:"top 36%",scrub:!0}})}),ie(".hero")){let c={trigger:".hero",start:"top top",end:"bottom top",scrub:!0};bt.to(".hero-copy",{yPercent:-10,ease:"none",scrollTrigger:c}),bt.to(".hero-visual",{yPercent:9,scale:.95,ease:"none",scrollTrigger:c})}je(".story-photo, .journey-image").forEach(c=>{let h=ie("img",c);if(!h)return;let d=c.classList.contains("story-photo"),u=d?3.5:9,f=d?1.08:1.18;bt.fromTo(h,{"--py":-u,"--ps":f},{"--py":u,"--ps":f,ease:"none",scrollTrigger:{trigger:c,start:"top bottom",end:"bottom top",scrub:!0}})}),je(".journey-item").forEach(c=>{let h=je(".journey-date, .journey-mark, .journey-copy > *",c),d=ie(".journey-image",c),u=bt.timeline({defaults:{ease:"expo.out"},scrollTrigger:{trigger:c,start:"top 84%",once:!0}});bt.set(h,{autoAlpha:0,y:34}),d&&bt.set(d,{clipPath:"inset(0 0 0 100%)"}),u.to(h,{autoAlpha:1,y:0,duration:1.1,stagger:.07},0),d&&u.to(d,{clipPath:"inset(0 0 0 0%)",duration:1.3,ease:"expo.inOut"},.15)});let s=je(".project-card");s.forEach((c,h)=>{bt.from(c,{y:90,autoAlpha:0,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:c,start:"top 94%",once:!0}});let d=s[h+1];d&&bt.to(c,{"--stack":.9,"--dim":.6,ease:"none",scrollTrigger:{trigger:d,start:"top 82%",end:"top 16%",scrub:!0}})});let o=ie(".ticker-track");if(o){o.style.animation="none";let c=0,h=0,d=()=>o.scrollWidth/2;bt.ticker.add((u,f)=>{let m=t?t.velocity:0;c-=(70+m*26)*(f/1e3);let _=d();c<=-_?c+=_:c>0&&(c-=_),h+=(bt.utils.clamp(-9,9,-m*.45)-h)*.1,o.style.transform=`translate3d(${c}px,0,0) skewX(${h}deg)`})}bt.matchMedia().add("(min-width: 700px)",()=>{let c=ie("#photoWorld");if(!c)return;let h=je(".photo-card",c);if(bt.set(h,{"--z":-1200,"--s":.7,"--o":0,"--py":150}),bt.set(".photo-stamp",{autoAlpha:0}),bt.timeline({scrollTrigger:{trigger:c,start:"center center",end:"+=115%",pin:!0,scrub:.7,anticipatePin:1}}).to(h,{"--z":0,"--s":1,"--o":1,"--py":0,duration:1,ease:"power3.out",stagger:.24}).to(".photo-stamp",{autoAlpha:1,duration:.4},">-0.2"),!Io)return;let d={x:0,y:0,tx:0,ty:0},u=_=>{let p=c.getBoundingClientRect();d.tx=(_.clientX-p.left)/p.width-.5,d.ty=(_.clientY-p.top)/p.height-.5},f=()=>{d.tx=0,d.ty=0},m=()=>{d.x+=(d.tx-d.x)*.07,d.y+=(d.ty-d.y)*.07,h.forEach(_=>{let p=parseFloat(_.dataset.depth)||.1;_.style.setProperty("--mx",(-d.x*p*300).toFixed(2)),_.style.setProperty("--my",(-d.y*p*260).toFixed(2))})};return c.addEventListener("pointermove",u),c.addEventListener("pointerleave",f),bt.ticker.add(m),()=>{c.removeEventListener("pointermove",u),c.removeEventListener("pointerleave",f),bt.ticker.remove(m)}});let l=ie(".giant-footer");if(l){let c=Lo(l,{shallow:!0});bt.set(c,{yPercent:110}),bt.to(c,{yPercent:0,duration:1.4,ease:"expo.out",stagger:.04,scrollTrigger:{trigger:l,start:"top 94%",once:!0}}),Io&&(l.addEventListener("pointermove",h=>{c.forEach(d=>{let u=d.getBoundingClientRect(),f=Math.abs(h.clientX-(u.left+u.width/2)),m=Math.exp(-(f*f)/(260*130));bt.to(d,{yPercent:-m*16,scaleY:1+m*.09,transformOrigin:"50% 100%",duration:.5,ease:"power3.out",overwrite:"auto"})})}),l.addEventListener("pointerleave",()=>bt.to(c,{yPercent:0,scaleY:1,duration:.9,ease:"elastic.out(1,.5)",stagger:.015})))}}function y0(r){let{lenis:t,sc:e}=r;if(e&&Io&&(window.addEventListener("pointermove",S=>{e.state.pointer.x=S.clientX/innerWidth*2-1,e.state.pointer.y=-(S.clientY/innerHeight*2-1),e.state.pointer.active=!0},{passive:!0}),document.addEventListener("pointerleave",()=>{e.state.pointer.active=!1})),Io){let S=ie(".cursor-halo");if(S){let A=document.createElement("span");A.className="cin-halo-label",S.appendChild(A),[[".project-card","OPEN"],[".photo-card","VIEW"],[".story-photo","VIEW"],[".journey-image","VIEW"],[".skill-node","TOOLS"],["#launch","ENTER"],['a[href^="mailto"]',"WRITE"],[".portrait-image","VIEW"]].forEach(([I,F])=>je(I).forEach(L=>{L.addEventListener("pointerenter",()=>{A.textContent=F,S.classList.add("has-label")}),L.addEventListener("pointerleave",()=>S.classList.remove("has-label"))}))}je(".pill, .menu-toggle, #launch, .project-link, .text-link, .contact-links a, .skill-node").forEach(A=>{A.classList.add("mag"),A.style.setProperty("--mx",0),A.style.setProperty("--my",0),A.addEventListener("pointermove",D=>{let I=A.getBoundingClientRect();bt.to(A,{"--mx":(D.clientX-(I.left+I.width/2))*.28,"--my":(D.clientY-(I.top+I.height/2))*.28,duration:.45,ease:"power3.out",overwrite:"auto"})}),A.addEventListener("pointerleave",()=>bt.to(A,{"--mx":0,"--my":0,duration:1,ease:"elastic.out(1,.4)",overwrite:"auto"}))}),je(".project-card").forEach(A=>{A.addEventListener("pointermove",D=>{if(innerWidth<900)return;let I=A.getBoundingClientRect(),F=(D.clientX-I.left)/I.width,L=(D.clientY-I.top)/I.height;A.style.setProperty("--gx",(F*100).toFixed(1)+"%"),A.style.setProperty("--gy",(L*100).toFixed(1)+"%"),bt.to(A,{rotationY:(F-.5)*5,rotationX:-(L-.5)*5,transformPerspective:1400,duration:.6,ease:"power2.out",overwrite:"auto"})}),A.addEventListener("pointerleave",()=>bt.to(A,{rotationX:0,rotationY:0,duration:1,ease:"expo.out",overwrite:"auto"}))})}let n=document.createElement("div");n.className="cin-lightbox",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Photo viewer"),n.innerHTML='<button class="cin-lb-close" type="button" aria-label="Close photo">CLOSE <span>\xD7</span></button><figure><img alt=""><figcaption></figcaption></figure>',document.body.appendChild(n);let i=ie("img",n),s=ie("figcaption",n),o=ie(".cin-lb-close",n);bt.set(n,{autoAlpha:0});let a=!1,l=null;function c(S,A,D){if(a)return;a=!0,l=D,i.src=S,i.alt=A||"",s.textContent=A||"",document.body.classList.add("lightbox-open");let I=Bi?0:1;bt.to(n,{autoAlpha:1,duration:.45*I,ease:"power2.out"}),bt.fromTo(i,{scale:.9,y:36,autoAlpha:0},{scale:1,y:0,autoAlpha:1,duration:.9*I,ease:"expo.out"}),bt.fromTo(s,{autoAlpha:0,y:12},{autoAlpha:1,y:0,duration:.7*I,delay:.25*I,ease:"expo.out"}),o.focus({preventScroll:!0})}function h(){if(!a)return;a=!1;let S=Bi?0:1;bt.to(i,{scale:.94,autoAlpha:0,duration:.35*S,ease:"power2.in"}),bt.to(n,{autoAlpha:0,duration:.4*S,delay:.1*S,ease:"power2.inOut",onComplete:()=>{document.body.classList.remove("lightbox-open"),i.removeAttribute("src"),l&&l.focus&&l.focus({preventScroll:!0})}})}je(".portrait-image, .story-photo, .journey-image, .photo-card").forEach(S=>{let A=ie("img",S);if(!A)return;S.setAttribute("role","button"),S.setAttribute("tabindex","0"),S.setAttribute("aria-label","View photo: "+(A.alt||"photo")),S.classList.add("cin-zoomable");let D=()=>c(A.currentSrc||A.src,A.alt,S);S.addEventListener("click",D),S.addEventListener("keydown",I=>{(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),D())})}),n.addEventListener("click",S=>{S.target!==i&&h()}),o.addEventListener("click",h),addEventListener("keydown",S=>{S.key==="Escape"&&a&&(S.stopPropagation(),h())},!0);let d=document.createElement("div");d.className="cin-curtain",d.setAttribute("aria-hidden","true"),d.innerHTML='<div class="cin-slats">'+"<i></i>".repeat(7)+'</div><div class="cin-curtain-label"><small></small><div><span></span></div></div>',document.body.appendChild(d);let u=je(".cin-slats i",d),f=ie("small",d),m=ie("span",d);bt.set(m,{yPercent:115}),bt.set(d,{autoAlpha:0});let _=!1;function p(S){if(S==="#top")return 0;let A=document.querySelector(S);return A||null}function g(S){t?t.scrollTo(S===0?0:Math.max(0,S.getBoundingClientRect().top+scrollY-72),{immediate:!0,force:!0}):S===0?scrollTo(0,0):S.scrollIntoView({behavior:"auto"}),Zt.update()}function w(S){let A=p(S);if(A===null||_)return;if(Bi){g(A);return}_=!0;let D=A===0?null:ie(".section-top span",A),I=(D?D.textContent:"00 / HELLO").split("/").map(B=>B.trim());f.textContent=I[0]||"",m.textContent=I[1]||I[0],d.style.pointerEvents="auto";let F=()=>{_=!1,d.style.pointerEvents="none",bt.set(d,{autoAlpha:0}),bt.set(m,{yPercent:115})};bt.set(d,{autoAlpha:1}),bt.timeline({onComplete:F,onInterrupt:F}).set(u,{transformOrigin:"50% 100%"}).to(u,{scaleY:1,duration:.65,ease:"power4.inOut",stagger:{each:.05,from:"edges"}}).fromTo(m,{yPercent:115},{yPercent:0,duration:.7,ease:"expo.out"},"-=0.3").fromTo(f,{autoAlpha:0},{autoAlpha:1,duration:.4},"<").add(()=>g(A),"+=0.12").to(m,{yPercent:-115,duration:.45,ease:"power3.in"},"+=0.22").to(f,{autoAlpha:0,duration:.3},"<").set(u,{transformOrigin:"50% 0%"}).to(u,{scaleY:0,duration:.7,ease:"power4.inOut",stagger:{each:.05,from:"edges"}},"-=0.1")}let C=je("main .scene"),y=document.createElement("div");y.className="cin-chapter",y.setAttribute("aria-hidden","true"),y.innerHTML='<span class="cin-ch-num">01</span><span class="cin-ch-tot">/ '+String(C.length).padStart(2,"0")+'</span><span class="cin-ch-name"><i>HELLO</i></span>',document.body.appendChild(y);let M=ie(".cin-ch-num",y),T=ie(".cin-ch-name",y),E=-1;function v(S){if(S===E)return;let A=E;E=S;let D=C[S],I=ie(".section-top span",D)?.textContent.split("/").pop().trim()||"HELLO";M.textContent=String(S+1).padStart(2,"0");let F=ie("i",T),L=document.createElement("i");L.textContent=I,T.appendChild(L),T.style.width=L.offsetWidth+14+"px";let B=S>A?1:-1;bt.fromTo(L,{yPercent:110*B},{yPercent:0,duration:.7,ease:"expo.out"}),F&&bt.to(F,{yPercent:-110*B,duration:.5,ease:"power3.in",onComplete:()=>F.remove()})}return C.forEach((S,A)=>Zt.create({trigger:S,start:"top 55%",end:"bottom 55%",onToggle:D=>{D.isActive&&v(A)}})),v(0),{goTo:w}}bt.registerPlugin(Zt);var b0=document.documentElement;b0.classList.add("cin");"scrollRestoration"in history&&(history.scrollRestoration="manual");scrollTo(0,0);var di=Bi?null:new Rm({lerp:.085,wheelMultiplier:.95,smoothWheel:!0});di&&(di.on("scroll",Zt.update),bt.ticker.add(r=>di.raf(r*1e3)),bt.ticker.lagSmoothing(0));var Do=document.createElement("canvas");Do.id="cinCanvas";Do.setAttribute("aria-hidden","true");document.body.prepend(Do);var yr=ie("#intro"),p1=[()=>(yr&&yr.isConnected?ie(".intro-object-stage"):null)||ie(".portrait-stage"),()=>ie(".method-grid"),()=>ie(".skill-center"),()=>ie("#photoWorld")],Hn=g0(Do,{anchors:p1,reduce:Bi,mobile:_0()});Hn?b0.classList.add("has-gl"):Do.remove();var bd={lenis:di,sc:Hn},w0=[".hero",".manifesto",".skills",".outside"].map(r=>ie(r)),T0=[];function wd(){let r=scrollY,t=w0.map(e=>{let n=e.getBoundingClientRect();return{top:n.top+r,bottom:n.bottom+r}});T0=[0,1,2].map(e=>({a:t[e].bottom-innerHeight*.5,b:t[e+1].top-innerHeight*.5}))}function m1(){let r=scrollY,t=0;return T0.forEach(e=>{t+=Math.min(1,Math.max(0,(r-e.a)/Math.max(1,e.b-e.a)))}),t}if(Hn){let r=new Set,t=new IntersectionObserver(e=>{e.forEach(n=>n.isIntersecting?r.add(n.target):r.delete(n.target)),Hn.state.active=r.size>0,Do.style.visibility=Hn.state.active?"visible":"hidden"},{threshold:0});[yr,...w0].filter(Boolean).forEach(e=>t.observe(e)),window.__cinForget=e=>{r.delete(e),t.unobserve(e),Hn.state.active=r.size>0},bt.ticker.add((e,n)=>{Hn.state.progress=m1(),Hn.frame(Math.min(.05,n/1e3))}),window.addEventListener("resize",()=>{Hn.resize()}),Bi&&(Hn.state.fade.v=1,window.addEventListener("scroll",()=>Hn.frame(0),{passive:!0}))}var Td={playIntro(){},playHero(){}},Ed={goTo(){return!1}};Bi||(Td=x0(bd),v0(bd));Ed=y0(bd);Zt.addEventListener("refresh",wd);wd();var Oh=()=>{Zt.refresh(),wd()};addEventListener("load",Oh);document.fonts&&document.fonts.ready&&document.fonts.ready.then(Oh);var S0;addEventListener("resize",()=>{clearTimeout(S0),S0=setTimeout(Oh,200)});if(di){let r=()=>{document.body.classList.contains("menu-open")||document.body.classList.contains("lightbox-open")||ie("#skillModal")?.classList.contains("open")||yr&&yr.isConnected?di.stop():di.start()};new MutationObserver(r).observe(document.body,{attributes:!0,attributeFilter:["class"]});let t=ie("#skillModal");t&&new MutationObserver(r).observe(t,{attributes:!0,attributeFilter:["class"]}),r()}var M0=!1,Ad=()=>{M0||(M0=!0,Td.playIntro())};window.addEventListener("cin:loaded",()=>setTimeout(Ad,250));ie("#loader")||Ad();setTimeout(Ad,6e3);var Is=document.createElement("div");Is.className="cin-iris";Is.setAttribute("aria-hidden","true");document.body.appendChild(Is);function g1(r,t){if(Bi||!Hn){t();return}let e=ie("#launch"),n=e?e.getBoundingClientRect():{left:innerWidth/2,top:innerHeight/2,width:0,height:0},i=n.left+n.width/2,s=n.top+n.height/2,o=Math.hypot(Math.max(i,innerWidth-i),Math.max(s,innerHeight-s))+40;bt.timeline().to(Hn.state.warp,{v:1,duration:1.15,ease:"power3.in"},0).to(".intro-main",{scale:1.1,autoAlpha:0,duration:.8,ease:"power2.in",transformOrigin:"30% 50%"},.05).to(".intro-head, .intro-bottomline",{autoAlpha:0,duration:.5,ease:"power2.in"},0).to(".intro-object-stage",{scale:2.1,autoAlpha:0,duration:1,ease:"power3.in"},0).fromTo(Is,{clipPath:`circle(0px at ${i}px ${s}px)`,autoAlpha:1},{clipPath:`circle(${o}px at ${i}px ${s}px)`,duration:.8,ease:"power3.inOut"},.5).add(()=>{t(),window.__cinForget&&yr&&window.__cinForget(yr),scrollTo(0,0),di&&di.scrollTo(0,{immediate:!0,force:!0}),Oh(),bt.set(Is,{clipPath:"inset(0% 0% 0% 0%)"})},1.35).to(Is,{clipPath:"inset(0% 0% 100% 0%)",duration:.95,ease:"expo.inOut"},1.4).to(Hn.state.warp,{v:0,duration:1.9,ease:"expo.out"},1.4).add(()=>{Td.playHero(),di&&di.start(),r&&r!=="#top"&&Ed.goTo(r)},1.55).set(Is,{autoAlpha:0})}if(yr&&!Bi){let r=()=>{let e=ie("#launch");e&&yr.isConnected&&e.click()},t=null;addEventListener("wheel",e=>{e.deltaY>12&&r()},{passive:!0}),addEventListener("touchstart",e=>{t=e.touches[0].clientY},{passive:!0}),addEventListener("touchmove",e=>{t!==null&&t-e.touches[0].clientY>50&&(t=null,r())},{passive:!0}),addEventListener("keydown",e=>{["ArrowDown","PageDown"," "].includes(e.key)&&document.activeElement?.id!=="launch"&&(e.preventDefault(),r())})}location.search.includes("cin-debug")&&(window.__cin={gsap:bt,ScrollTrigger:Zt,sc:Hn,lenis:di});window.cinematic={launch:g1,goTo:r=>(Ed.goTo(r),!0),lenis:di,ready:!0};})();
