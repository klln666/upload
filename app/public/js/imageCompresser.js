!function(a){"use strict";"function"==typeof define?define("imageUpload/imageCompresser",["jquery"],function(r){var e=r("jquery");return a(e)}):window.ImageCompresser=a(jQuery)}(function(a){var r=navigator.userAgent,e=r.match(/(Android)\s+([\d.]+)/),t=r.match(/(iPad).*OS\s([\d_]+)/),n=r.match(/(iPod).*OS\s([\d_]+)/),o=!n&&!t&&r.match(/(iPhone\sOS)\s([\d_]+)/),i={};e&&(i.android=!0,i.version=e[2]),o&&(i.ios=!0,i.version=o[2].replace(/_/g,".")),window.JPEGEncoder=function(a){function r(a){for(var r=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],e=0;64>e;e++){var t=x((r[e]*a+50)/100);1>t?t=1:t>255&&(t=255),R[H[e]]=t}for(var n=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],o=0;64>o;o++){var i=x((n[o]*a+50)/100);1>i?i=1:i>255&&(i=255),P[H[o]]=i}for(var f=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],c=0,v=0;8>v;v++)for(var u=0;8>u;u++)C[c]=1/(R[H[c]]*f[v]*f[u]*8),j[c]=1/(P[H[c]]*f[v]*f[u]*8),c++}function e(a,r){for(var e=0,t=0,n=new Array,o=1;16>=o;o++){for(var i=1;i<=a[o];i++)n[r[t]]=[],n[r[t]][0]=e,n[r[t]][1]=o,t++,e++;e*=2}return n}function t(){I=e(B,G),A=e(Q,z),p=e(J,N),M=e(K,V)}function n(){for(var a=1,r=2,e=1;15>=e;e++){for(var t=a;r>t;t++)E[32767+t]=e,D[32767+t]=[],D[32767+t][1]=e,D[32767+t][0]=t;for(var n=-(r-1);-a>=n;n++)E[32767+n]=e,D[32767+n]=[],D[32767+n][1]=e,D[32767+n][0]=r-1+n;a<<=1,r<<=1}}function o(){for(var a=0;256>a;a++)T[a]=19595*a,T[a+256>>0]=38470*a,T[a+512>>0]=7471*a+32768,T[a+768>>0]=-11059*a,T[a+1024>>0]=-21709*a,T[a+1280>>0]=32768*a+8421375,T[a+1536>>0]=-27439*a,T[a+1792>>0]=-5329*a}function i(a){for(var r=a[0],e=a[1]-1;e>=0;)r&1<<e&&(U|=1<<_),e--,_--,0>_&&(255==U?(f(255),f(0)):f(U),_=7,U=0)}function f(a){L.push(F[a])}function c(a){f(a>>8&255),f(255&a)}function v(a,r){var e,t,n,o,i,f,c,v,u,d=0;const s=8,h=64;for(u=0;s>u;++u){e=a[d],t=a[d+1],n=a[d+2],o=a[d+3],i=a[d+4],f=a[d+5],c=a[d+6],v=a[d+7];var w=e+v,l=e-v,g=t+c,m=t-c,y=n+f,I=n-f,A=o+i,p=o-i,M=w+A,b=w-A,x=g+y,R=g-y;a[d]=M+x,a[d+4]=M-x;var P=.707106781*(R+b);a[d+2]=b+P,a[d+6]=b-P,M=p+I,x=I+m,R=m+l;var C=.382683433*(M-R),j=.5411961*M+C,D=1.306562965*R+C,E=.707106781*x,k=l+E,L=l-E;a[d+5]=L+j,a[d+3]=L-j,a[d+1]=k+D,a[d+7]=k-D,d+=8}for(d=0,u=0;s>u;++u){e=a[d],t=a[d+8],n=a[d+16],o=a[d+24],i=a[d+32],f=a[d+40],c=a[d+48],v=a[d+56];var U=e+v,_=e-v,O=t+c,W=t-c,q=n+f,F=n-f,T=o+i,H=o-i,B=U+T,G=U-T,J=O+q,N=O-q;a[d]=B+J,a[d+32]=B-J;var Q=.707106781*(N+G);a[d+16]=G+Q,a[d+48]=G-Q,B=H+F,J=F+W,N=W+_;var z=.382683433*(B-N),K=.5411961*B+z,V=1.306562965*N+z,X=.707106781*J,Y=_+X,Z=_-X;a[d+40]=Z+K,a[d+24]=Z-K,a[d+8]=Y+V,a[d+56]=Y-V,d++}var $;for(u=0;h>u;++u)$=a[u]*r[u],S[u]=$>0?$+.5|0:$-.5|0;return S}function u(){c(65504),c(16),f(74),f(70),f(73),f(70),f(0),f(1),f(1),f(0),c(1),c(1),f(0),f(0)}function d(a,r){c(65472),c(17),f(8),c(r),c(a),f(3),f(1),f(17),f(0),f(2),f(17),f(1),f(3),f(17),f(1)}function s(){c(65499),c(132),f(0);for(var a=0;64>a;a++)f(R[a]);f(1);for(var r=0;64>r;r++)f(P[r])}function h(){c(65476),c(418),f(0);for(var a=0;16>a;a++)f(B[a+1]);for(var r=0;11>=r;r++)f(G[r]);f(16);for(var e=0;16>e;e++)f(J[e+1]);for(var t=0;161>=t;t++)f(N[t]);f(1);for(var n=0;16>n;n++)f(Q[n+1]);for(var o=0;11>=o;o++)f(z[o]);f(17);for(var i=0;16>i;i++)f(K[i+1]);for(var v=0;161>=v;v++)f(V[v])}function w(){c(65498),c(12),f(3),f(1),f(0),f(2),f(17),f(3),f(17),f(0),f(63),f(0)}function l(a,r,e,t,n){var o,f=n[0],c=n[240];const u=16,d=63,s=64;for(var h=v(a,r),w=0;s>w;++w)k[H[w]]=h[w];var l=k[0]-e;e=k[0],0==l?i(t[0]):(o=32767+l,i(t[E[o]]),i(D[o]));for(var g=63;g>0&&0==k[g];g--);if(0==g)return i(f),e;for(var m,y=1;g>=y;){for(var I=y;0==k[y]&&g>=y;++y);var A=y-I;if(A>=u){m=A>>4;for(var p=1;m>=p;++p)i(c);A=15&A}o=32767+k[y],i(n[(A<<4)+E[o]]),i(D[o]),y++}return g!=d&&i(f),e}function g(){for(var a=String.fromCharCode,r=0;256>r;r++)F[r]=a(r)}function m(a){if(0>=a&&(a=1),a>100&&(a=100),b!=a){var e=0;e=50>a?Math.floor(5e3/a):Math.floor(200-2*a),r(e),b=a}}function y(){var r=(new Date).getTime();a||(a=50),g(),t(),n(),o(),m(a);(new Date).getTime()-r}var I,A,p,M,b,x=(Math.round,Math.floor),R=new Array(64),P=new Array(64),C=new Array(64),j=new Array(64),D=new Array(65535),E=new Array(65535),S=new Array(64),k=new Array(64),L=[],U=0,_=7,O=new Array(64),W=new Array(64),q=new Array(64),F=new Array(256),T=new Array(2048),H=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],B=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],G=[0,1,2,3,4,5,6,7,8,9,10,11],J=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],N=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],Q=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],z=[0,1,2,3,4,5,6,7,8,9,10,11],K=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],V=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];this.encode=function(a,r){var e=(new Date).getTime();r&&m(r),L=new Array,U=0,_=7,c(65496),u(),s(),d(a.width,a.height),h(),w();var t=0,n=0,o=0;U=0,_=7,this.encode.displayName="_encode_";for(var f,v,g,y,b,x,R,P,D,E=a.data,S=a.width,k=a.height,F=4*S,H=0;k>H;){for(f=0;F>f;){for(b=F*H+f,x=b,R=-1,P=0,D=0;64>D;D++)P=D>>3,R=4*(7&D),x=b+P*F+R,H+P>=k&&(x-=F*(H+1+P-k)),f+R>=F&&(x-=f+R-F+4),v=E[x++],g=E[x++],y=E[x++],O[D]=(T[v]+T[g+256>>0]+T[y+512>>0]>>16)-128,W[D]=(T[v+768>>0]+T[g+1024>>0]+T[y+1280>>0]>>16)-128,q[D]=(T[v+1280>>0]+T[g+1536>>0]+T[y+1792>>0]>>16)-128;t=l(O,C,t,I,p),n=l(W,j,n,A,M),o=l(q,j,o,A,M),f+=32}H+=8}if(_>=0){var B=[];B[1]=_+1,B[0]=(1<<_+1)-1,i(B)}c(65497);var G="data:image/jpeg;base64,"+btoa(L.join(""));L=[];(new Date).getTime()-e;return G},y()};var f={isIosSubSample:function(a){var r=a.naturalWidth,e=a.naturalHeight,t=!1;if(r*e>1048576){var n=document.createElement("canvas");ctx=n.getContext("2d"),n.width=n.height=1,ctx.drawImage(a,1-r,0),t=0===ctx.getImageData(0,0,1,1).data[3],n=ctx=null}return t},getIosImageRatio:function(a,r,e){var t,n=document.createElement("canvas"),o=n.getContext("2d"),i=0,f=e,c=e;for(n.width=1,n.height=e,o.drawImage(a,1-Math.ceil(Math.random()*r),0),t=o.getImageData(0,0,1,e).data;c>i;){var v=t[4*(c-1)+3];0===v?f=c:i=c,c=f+i>>1}return c/e},getImageBase64:function(r,e){e=a.extend({maxW:800,maxH:800,quality:.8,orien:1},e);var t,n,o=e.maxW,c=e.maxW,v=e.quality,u=r.naturalWidth,d=r.naturalHeight;i.ios&&f.isIosSubSample(r)&&(u/=2,d/=2),u>o&&u/d>=o/c?(t=o,n=d*o/u):d>c&&d/u>=c/o?(t=u*c/d,n=c):(t=u,n=d);var s,h=document.createElement("canvas"),w=h.getContext("2d");if(this.doAutoRotate(h,t,n,e.orien),i.ios){var l,g,m,y,I,A,p,M,b=document.createElement("canvas"),x=b.getContext("2d"),R=1024,P=f.getIosImageRatio(r,u,d);for(b.width=b.height=R,g=0;d>g;){for(y=g+R>d?d-g:R,l=0;u>l;)m=l+R>u?u-l:R,x.clearRect(0,0,R,R),x.drawImage(r,-l,-g),I=Math.floor(l*t/u),p=Math.ceil(m*t/u),A=Math.floor(g*n/d/P),M=Math.ceil(y*n/d/P),w.drawImage(b,0,0,m,y,I,A,p,M),l+=R;g+=R}b=x=null}else w.drawImage(r,0,0,u,d,0,0,t,n);if(i.android){var C=w.getImageData(0,0,h.width,h.height),j=new JPEGEncoder(100*v);s=j.encode(C),j=null}else s=h.toDataURL("image/jpeg",v);return h=w=null,s},doAutoRotate:function(a,r,e,t){var n=a.getContext("2d");switch(t>=5&&8>=t?(a.width=e,a.height=r):(a.width=r,a.height=e),t){case 2:n.translate(r,0),n.scale(-1,1);break;case 3:n.translate(r,e),n.rotate(Math.PI);break;case 4:n.translate(0,e),n.scale(1,-1);break;case 5:n.rotate(.5*Math.PI),n.scale(1,-1);break;case 6:n.rotate(.5*Math.PI),n.translate(0,-e);break;case 7:n.rotate(.5*Math.PI),n.translate(r,-e),n.scale(-1,1);break;case 8:n.rotate(-.5*Math.PI),n.translate(-r,0)}},getFileObjectURL:function(a){var r=window.URL||window.webkitURL||!1;return r?r.createObjectURL(a):void 0},support:function(){return typeof window.File&&typeof window.FileList&&typeof window.FileReader&&typeof window.Blob}};return f});