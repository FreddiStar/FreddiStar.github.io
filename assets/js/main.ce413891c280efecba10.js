/*! For license information please see main.ce413891c280efecba10.js.LICENSE.txt */
(()=>{"use strict";var t={91:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.makeNoise2D=void 0;var s=n(341),i=(Math.sqrt(3)-1)/2,r=(1/Math.sqrt(3)-1)/2;function o(t,e,n){return{dx:-e-t*i,dy:-n-t*i,xsb:e,ysb:n}}e.makeNoise2D=function(t){for(var e=[],n=0;n<c.length;n+=4){for(var d=a[c[n]],u=null,p=null,f=0;f<d.length;f+=3)p=o(d[f],d[f+1],d[f+2]),null===u?e[n/4]=p:u.next=p,u=p;p.next=o(c[n+1],c[n+2],c[n+3])}var m=[];for(n=0;n<l.length;n+=2)m[l[n]]=e[l[n+1]];var g=new Uint8Array(256),v=new Uint8Array(256),y=new Uint8Array(256);for(n=0;n<256;n++)y[n]=n;var w=new Uint32Array(1);for(w[0]=t,w=s.default(s.default(s.default(w))),n=255;n>=0;n--){w=s.default(w);var x=new Uint32Array(1);x[0]=(w[0]+31)%(n+1),x[0]<0&&(x[0]+=n+1),g[n]=y[x[0]],v[n]=14&g[n],y[x[0]]=y[n]}return function(t,e){for(var n=(t+e)*r,s=t+n,o=e+n,a=Math.floor(s),l=Math.floor(o),c=(a+l)*i,d=t-(a+c),u=e-(l+c),p=s-a,f=o-l,y=p+f,w=0,x=m[p-f+1|y<<1|y+f<<2|y+p<<4];void 0!==x;x=x.next){var b=d+x.dx,P=u+x.dy,_=2-b*b-P*P;if(_>0){var E=a+x.xsb,C=l+x.ysb,M=g[255&E],k=v[M+C&255];w+=_*_*_*_*(h[k]*b+h[k+1]*P)}}return.02127659574468085*w}};var a=[[1,1,0,1,0,1,0,0,0],[1,1,0,1,0,1,2,1,1]],h=[5,2,2,5,-5,2,-2,5,5,-2,2,-5,-5,-2,-2,-5],l=[0,1,1,0,4,1,17,0,20,2,21,2,22,5,23,5,26,4,39,3,42,4,43,3],c=[0,0,1,-1,0,0,-1,1,0,2,1,1,1,2,2,0,1,2,0,2,1,0,0,0]},644:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.makeNoise3D=void 0;var s=n(341),i=(Math.sqrt(4)-1)/3,r=(1/Math.sqrt(4)-1)/3;function o(t,e,n,s){return{dx:-e-t*i,dy:-n-t*i,dz:-s-t*i,xsb:e,ysb:n,zsb:s}}e.makeNoise3D=function(t){for(var e=[],n=0;n<c.length;n+=9){for(var d=a[c[n]],u=null,p=null,f=0;f<d.length;f+=4)p=o(d[f],d[f+1],d[f+2],d[f+3]),null===u?e[n/9]=p:u.next=p,u=p;p.next=o(c[n+1],c[n+2],c[n+3],c[n+4]),p.next.next=o(c[n+5],c[n+6],c[n+7],c[n+8])}var m=[];for(n=0;n<l.length;n+=2)m[l[n]]=e[l[n+1]];var g=new Uint8Array(256),v=new Uint8Array(256),y=new Uint8Array(256);for(n=0;n<256;n++)y[n]=n;var w=new Uint32Array(1);for(w[0]=t,w=s.default(s.default(s.default(w))),n=255;n>=0;n--){w=s.default(w);var x=new Uint32Array(1);x[0]=(w[0]+31)%(n+1),x[0]<0&&(x[0]+=n+1),g[n]=y[x[0]],v[n]=g[n]%24*3,y[x[0]]=y[n]}return function(t,e,n){for(var s=(t+e+n)*r,o=t+s,a=e+s,l=n+s,c=Math.floor(o),d=Math.floor(a),u=Math.floor(l),p=(c+d+u)*i,f=t-(c+p),y=e-(d+p),w=n-(u+p),x=o-c,b=a-d,P=l-u,_=x+b+P,E=0,C=m[b-P+1|x-b+1<<1|x-P+1<<2|_<<3|_+P<<5|_+b<<7|_+x<<9];void 0!==C;C=C.next){var M=f+C.dx,k=y+C.dy,z=w+C.dz,L=2-M*M-k*k-z*z;if(L>0){var S=c+C.xsb,R=d+C.ysb,O=u+C.zsb,A=g[255&S],I=g[A+R&255],N=v[I+O&255];E+=L*L*L*L*(h[N]*M+h[N+1]*k+h[N+2]*z)}}return.009708737864077669*E}};var a=[[0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1],[2,1,1,0,2,1,0,1,2,0,1,1,3,1,1,1],[1,1,0,0,1,0,1,0,1,0,0,1,2,1,1,0,2,1,0,1,2,0,1,1]],h=[-11,4,4,-4,11,4,-4,4,11,11,4,4,4,11,4,4,4,11,-11,-4,4,-4,-11,4,-4,-4,11,11,-4,4,4,-11,4,4,-4,11,-11,4,-4,-4,11,-4,-4,4,-11,11,4,-4,4,11,-4,4,4,-11,-11,-4,-4,-4,-11,-4,-4,-4,-11,11,-4,-4,4,-11,-4,4,-4,-11],l=[0,2,1,1,2,2,5,1,6,0,7,0,32,2,34,2,129,1,133,1,160,5,161,5,518,0,519,0,546,4,550,4,645,3,647,3,672,5,673,5,674,4,677,3,678,4,679,3,680,13,681,13,682,12,685,14,686,12,687,14,712,20,714,18,809,21,813,23,840,20,841,21,1198,19,1199,22,1226,18,1230,19,1325,23,1327,22,1352,15,1353,17,1354,15,1357,17,1358,16,1359,16,1360,11,1361,10,1362,11,1365,10,1366,9,1367,9,1392,11,1394,11,1489,10,1493,10,1520,8,1521,8,1878,9,1879,9,1906,7,1910,7,2005,6,2007,6,2032,8,2033,8,2034,7,2037,6,2038,7,2039,6],c=[0,0,1,-1,0,0,1,0,-1,0,0,-1,1,0,0,0,1,-1,0,0,-1,0,1,0,0,-1,1,0,2,1,1,0,1,1,1,-1,0,2,1,0,1,1,1,-1,1,0,2,0,1,1,1,-1,1,1,1,3,2,1,0,3,1,2,0,1,3,2,0,1,3,1,0,2,1,3,0,2,1,3,0,1,2,1,1,1,0,0,2,2,0,0,1,1,0,1,0,2,0,2,0,1,1,0,0,1,2,0,0,2,2,0,0,0,0,1,1,-1,1,2,0,0,0,0,1,-1,1,1,2,0,0,0,0,1,1,1,-1,2,3,1,1,1,2,0,0,2,2,3,1,1,1,2,2,0,0,2,3,1,1,1,2,0,2,0,2,1,1,-1,1,2,0,0,2,2,1,1,-1,1,2,2,0,0,2,1,-1,1,1,2,0,0,2,2,1,-1,1,1,2,0,2,0,2,1,1,1,-1,2,2,0,0,2,1,1,1,-1,2,0,2,0]},76:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.makeNoise4D=void 0;var s=n(341),i=(Math.sqrt(5)-1)/4,r=(1/Math.sqrt(5)-1)/4;function o(t,e,n,s,r){return{dx:-e-t*i,dy:-n-t*i,dz:-s-t*i,dw:-r-t*i,xsb:e,ysb:n,zsb:s,wsb:r}}e.makeNoise4D=function(t){for(var e=[],n=0;n<c.length;n+=16){for(var d=a[c[n]],u=null,p=null,f=0;f<d.length;f+=5)p=o(d[f],d[f+1],d[f+2],d[f+3],d[f+4]),null===u?e[n/16]=p:u.next=p,u=p;p.next=o(c[n+1],c[n+2],c[n+3],c[n+4],c[n+5]),p.next.next=o(c[n+6],c[n+7],c[n+8],c[n+9],c[n+10]),p.next.next.next=o(c[n+11],c[n+12],c[n+13],c[n+14],c[n+15])}var m=[];for(n=0;n<l.length;n+=2)m[l[n]]=e[l[n+1]];var g=new Uint8Array(256),v=new Uint8Array(256),y=new Uint8Array(256);for(n=0;n<256;n++)y[n]=n;var w=new Uint32Array(1);for(w[0]=t,w=s.default(s.default(s.default(w))),n=255;n>=0;n--){w=s.default(w);var x=new Uint32Array(1);x[0]=(w[0]+31)%(n+1),x[0]<0&&(x[0]+=n+1),g[n]=y[x[0]],v[n]=252&g[n],y[x[0]]=y[n]}return function(t,e,n,s){for(var o=(t+e+n+s)*r,a=t+o,l=e+o,c=n+o,d=s+o,u=Math.floor(a),p=Math.floor(l),f=Math.floor(c),y=Math.floor(d),w=(u+p+f+y)*i,x=t-(u+w),b=e-(p+w),P=n-(f+w),_=s-(y+w),E=a-u,C=l-p,M=c-f,k=d-y,z=E+C+M+k,L=0,S=m[M-k+1|C-M+1<<1|C-k+1<<2|E-C+1<<3|E-M+1<<4|E-k+1<<5|z<<6|z+k<<8|z+M<<11|z+C<<14|z+E<<17];void 0!==S;S=S.next){var R=x+S.dx,O=b+S.dy,A=P+S.dz,I=_+S.dw,N=2-R*R-O*O-A*A-I*I;if(N>0){var T=u+S.xsb,F=p+S.ysb,D=f+S.zsb,U=y+S.wsb,H=g[255&T],G=g[H+F&255],B=g[G+D&255],j=v[B+U&255];L+=N*N*N*N*(h[j]*R+h[j+1]*O+h[j+2]*A+h[j+3]*I)}}return.03333333333333333*L}};var a=[[0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1],[3,1,1,1,0,3,1,1,0,1,3,1,0,1,1,3,0,1,1,1,4,1,1,1,1],[1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,2,1,1,0,0,2,1,0,1,0,2,1,0,0,1,2,0,1,1,0,2,0,1,0,1,2,0,0,1,1],[3,1,1,1,0,3,1,1,0,1,3,1,0,1,1,3,0,1,1,1,2,1,1,0,0,2,1,0,1,0,2,1,0,0,1,2,0,1,1,0,2,0,1,0,1,2,0,0,1,1]],h=[3,1,1,1,1,3,1,1,1,1,3,1,1,1,1,3,-3,1,1,1,-1,3,1,1,-1,1,3,1,-1,1,1,3,3,-1,1,1,1,-3,1,1,1,-1,3,1,1,-1,1,3,-3,-1,1,1,-1,-3,1,1,-1,-1,3,1,-1,-1,1,3,3,1,-1,1,1,3,-1,1,1,1,-3,1,1,1,-1,3,-3,1,-1,1,-1,3,-1,1,-1,1,-3,1,-1,1,-1,3,3,-1,-1,1,1,-3,-1,1,1,-1,-3,1,1,-1,-1,3,-3,-1,-1,1,-1,-3,-1,1,-1,-1,-3,1,-1,-1,-1,3,3,1,1,-1,1,3,1,-1,1,1,3,-1,1,1,1,-3,-3,1,1,-1,-1,3,1,-1,-1,1,3,-1,-1,1,1,-3,3,-1,1,-1,1,-3,1,-1,1,-1,3,-1,1,-1,1,-3,-3,-1,1,-1,-1,-3,1,-1,-1,-1,3,-1,-1,-1,1,-3,3,1,-1,-1,1,3,-1,-1,1,1,-3,-1,1,1,-1,-3,-3,1,-1,-1,-1,3,-1,-1,-1,1,-3,-1,-1,1,-1,-3,3,-1,-1,-1,1,-3,-1,-1,1,-1,-3,-1,1,-1,-1,-3,-3,-1,-1,-1,-1,-3,-1,-1,-1,-1,-3,-1,-1,-1,-1,-3],l=[0,3,1,2,2,3,5,2,6,1,7,1,8,3,9,2,10,3,13,2,16,3,18,3,22,1,23,1,24,3,26,3,33,2,37,2,38,1,39,1,41,2,45,2,54,1,55,1,56,0,57,0,58,0,59,0,60,0,61,0,62,0,63,0,256,3,258,3,264,3,266,3,272,3,274,3,280,3,282,3,2049,2,2053,2,2057,2,2061,2,2081,2,2085,2,2089,2,2093,2,2304,9,2305,9,2312,9,2313,9,16390,1,16391,1,16406,1,16407,1,16422,1,16423,1,16438,1,16439,1,16642,8,16646,8,16658,8,16662,8,18437,6,18439,6,18469,6,18471,6,18688,9,18689,9,18690,8,18693,6,18694,8,18695,6,18696,9,18697,9,18706,8,18710,8,18725,6,18727,6,131128,0,131129,0,131130,0,131131,0,131132,0,131133,0,131134,0,131135,0,131352,7,131354,7,131384,7,131386,7,133161,5,133165,5,133177,5,133181,5,133376,9,133377,9,133384,9,133385,9,133400,7,133402,7,133417,5,133421,5,133432,7,133433,5,133434,7,133437,5,147510,4,147511,4,147518,4,147519,4,147714,8,147718,8,147730,8,147734,8,147736,7,147738,7,147766,4,147767,4,147768,7,147770,7,147774,4,147775,4,149509,6,149511,6,149541,6,149543,6,149545,5,149549,5,149558,4,149559,4,149561,5,149565,5,149566,4,149567,4,149760,9,149761,9,149762,8,149765,6,149766,8,149767,6,149768,9,149769,9,149778,8,149782,8,149784,7,149786,7,149797,6,149799,6,149801,5,149805,5,149814,4,149815,4,149816,7,149817,5,149818,7,149821,5,149822,4,149823,4,149824,37,149825,37,149826,36,149829,34,149830,36,149831,34,149832,37,149833,37,149842,36,149846,36,149848,35,149850,35,149861,34,149863,34,149865,33,149869,33,149878,32,149879,32,149880,35,149881,33,149882,35,149885,33,149886,32,149887,32,150080,49,150082,48,150088,49,150098,48,150104,47,150106,47,151873,46,151877,45,151881,46,151909,45,151913,44,151917,44,152128,49,152129,46,152136,49,152137,46,166214,43,166215,42,166230,43,166247,42,166262,41,166263,41,166466,48,166470,43,166482,48,166486,43,168261,45,168263,42,168293,45,168295,42,168512,31,168513,28,168514,31,168517,28,168518,25,168519,25,280952,40,280953,39,280954,40,280957,39,280958,38,280959,38,281176,47,281178,47,281208,40,281210,40,282985,44,282989,44,283001,39,283005,39,283208,30,283209,27,283224,30,283241,27,283256,22,283257,22,297334,41,297335,41,297342,38,297343,38,297554,29,297558,24,297562,29,297590,24,297594,21,297598,21,299365,26,299367,23,299373,26,299383,23,299389,20,299391,20,299584,31,299585,28,299586,31,299589,28,299590,25,299591,25,299592,30,299593,27,299602,29,299606,24,299608,30,299610,29,299621,26,299623,23,299625,27,299629,26,299638,24,299639,23,299640,22,299641,22,299642,21,299645,20,299646,21,299647,20,299648,61,299649,60,299650,61,299653,60,299654,59,299655,59,299656,58,299657,57,299666,55,299670,54,299672,58,299674,55,299685,52,299687,51,299689,57,299693,52,299702,54,299703,51,299704,56,299705,56,299706,53,299709,50,299710,53,299711,50,299904,61,299906,61,299912,58,299922,55,299928,58,299930,55,301697,60,301701,60,301705,57,301733,52,301737,57,301741,52,301952,79,301953,79,301960,76,301961,76,316038,59,316039,59,316054,54,316071,51,316086,54,316087,51,316290,78,316294,78,316306,73,316310,73,318085,77,318087,77,318117,70,318119,70,318336,79,318337,79,318338,78,318341,77,318342,78,318343,77,430776,56,430777,56,430778,53,430781,50,430782,53,430783,50,431e3,75,431002,72,431032,75,431034,72,432809,74,432813,69,432825,74,432829,69,433032,76,433033,76,433048,75,433065,74,433080,75,433081,74,447158,71,447159,68,447166,71,447167,68,447378,73,447382,73,447386,72,447414,71,447418,72,447422,71,449189,70,449191,70,449197,69,449207,68,449213,69,449215,68,449408,67,449409,67,449410,66,449413,64,449414,66,449415,64,449416,67,449417,67,449426,66,449430,66,449432,65,449434,65,449445,64,449447,64,449449,63,449453,63,449462,62,449463,62,449464,65,449465,63,449466,65,449469,63,449470,62,449471,62,449472,19,449473,19,449474,18,449477,16,449478,18,449479,16,449480,19,449481,19,449490,18,449494,18,449496,17,449498,17,449509,16,449511,16,449513,15,449517,15,449526,14,449527,14,449528,17,449529,15,449530,17,449533,15,449534,14,449535,14,449728,19,449729,19,449730,18,449734,18,449736,19,449737,19,449746,18,449750,18,449752,17,449754,17,449784,17,449786,17,451520,19,451521,19,451525,16,451527,16,451528,19,451529,19,451557,16,451559,16,451561,15,451565,15,451577,15,451581,15,451776,19,451777,19,451784,19,451785,19,465858,18,465861,16,465862,18,465863,16,465874,18,465878,18,465893,16,465895,16,465910,14,465911,14,465918,14,465919,14,466114,18,466118,18,466130,18,466134,18,467909,16,467911,16,467941,16,467943,16,468160,13,468161,13,468162,13,468163,13,468164,13,468165,13,468166,13,468167,13,580568,17,580570,17,580585,15,580589,15,580598,14,580599,14,580600,17,580601,15,580602,17,580605,15,580606,14,580607,14,580824,17,580826,17,580856,17,580858,17,582633,15,582637,15,582649,15,582653,15,582856,12,582857,12,582872,12,582873,12,582888,12,582889,12,582904,12,582905,12,596982,14,596983,14,596990,14,596991,14,597202,11,597206,11,597210,11,597214,11,597234,11,597238,11,597242,11,597246,11,599013,10,599015,10,599021,10,599023,10,599029,10,599031,10,599037,10,599039,10,599232,13,599233,13,599234,13,599235,13,599236,13,599237,13,599238,13,599239,13,599240,12,599241,12,599250,11,599254,11,599256,12,599257,12,599258,11,599262,11,599269,10,599271,10,599272,12,599273,12,599277,10,599279,10,599282,11,599285,10,599286,11,599287,10,599288,12,599289,12,599290,11,599293,10,599294,11,599295,10],c=[0,0,1,-1,0,0,0,1,0,-1,0,0,1,0,0,-1,0,0,-1,1,0,0,0,0,1,-1,0,0,0,1,0,-1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,-1,0,0,-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,2,1,1,0,0,1,1,1,-1,0,1,1,1,0,-1,0,2,1,0,1,0,1,1,-1,1,0,1,1,0,1,-1,0,2,0,1,1,0,1,-1,1,1,0,1,0,1,1,-1,0,2,1,0,0,1,1,1,-1,0,1,1,1,0,-1,1,0,2,0,1,0,1,1,-1,1,0,1,1,0,1,-1,1,0,2,0,0,1,1,1,-1,0,1,1,1,0,-1,1,1,1,4,2,1,1,0,4,1,2,1,0,4,1,1,2,0,1,4,2,1,0,1,4,1,2,0,1,4,1,1,0,2,1,4,2,0,1,1,4,1,0,2,1,4,1,0,1,2,1,4,0,2,1,1,4,0,1,2,1,4,0,1,1,2,1,2,1,1,0,0,3,2,1,0,0,3,1,2,0,0,1,2,1,0,1,0,3,2,0,1,0,3,1,0,2,0,1,2,0,1,1,0,3,0,2,1,0,3,0,1,2,0,1,2,1,0,0,1,3,2,0,0,1,3,1,0,0,2,1,2,0,1,0,1,3,0,2,0,1,3,0,1,0,2,1,2,0,0,1,1,3,0,0,2,1,3,0,0,1,2,2,3,1,1,1,0,2,1,1,1,-1,2,2,0,0,0,2,3,1,1,0,1,2,1,1,-1,1,2,2,0,0,0,2,3,1,0,1,1,2,1,-1,1,1,2,2,0,0,0,2,3,1,1,1,0,2,1,1,1,-1,2,0,2,0,0,2,3,1,1,0,1,2,1,1,-1,1,2,0,2,0,0,2,3,0,1,1,1,2,-1,1,1,1,2,0,2,0,0,2,3,1,1,1,0,2,1,1,1,-1,2,0,0,2,0,2,3,1,0,1,1,2,1,-1,1,1,2,0,0,2,0,2,3,0,1,1,1,2,-1,1,1,1,2,0,0,2,0,2,3,1,1,0,1,2,1,1,-1,1,2,0,0,0,2,2,3,1,0,1,1,2,1,-1,1,1,2,0,0,0,2,2,3,0,1,1,1,2,-1,1,1,1,2,0,0,0,2,2,1,1,1,-1,0,1,1,1,0,-1,0,0,0,0,0,2,1,1,-1,1,0,1,1,0,1,-1,0,0,0,0,0,2,1,-1,1,1,0,1,0,1,1,-1,0,0,0,0,0,2,1,1,-1,0,1,1,1,0,-1,1,0,0,0,0,0,2,1,-1,1,0,1,1,0,1,-1,1,0,0,0,0,0,2,1,-1,0,1,1,1,0,-1,1,1,0,0,0,0,0,2,1,1,1,-1,0,1,1,1,0,-1,2,2,0,0,0,2,1,1,-1,1,0,1,1,0,1,-1,2,2,0,0,0,2,1,1,-1,0,1,1,1,0,-1,1,2,2,0,0,0,2,1,1,1,-1,0,1,1,1,0,-1,2,0,2,0,0,2,1,-1,1,1,0,1,0,1,1,-1,2,0,2,0,0,2,1,-1,1,0,1,1,0,1,-1,1,2,0,2,0,0,2,1,1,-1,1,0,1,1,0,1,-1,2,0,0,2,0,2,1,-1,1,1,0,1,0,1,1,-1,2,0,0,2,0,2,1,-1,0,1,1,1,0,-1,1,1,2,0,0,2,0,2,1,1,-1,0,1,1,1,0,-1,1,2,0,0,0,2,2,1,-1,1,0,1,1,0,1,-1,1,2,0,0,0,2,2,1,-1,0,1,1,1,0,-1,1,1,2,0,0,0,2,3,1,1,0,0,0,2,2,0,0,0,2,1,1,1,-1,3,1,0,1,0,0,2,0,2,0,0,2,1,1,1,-1,3,1,0,0,1,0,2,0,0,2,0,2,1,1,1,-1,3,1,1,0,0,0,2,2,0,0,0,2,1,1,-1,1,3,1,0,1,0,0,2,0,2,0,0,2,1,1,-1,1,3,1,0,0,0,1,2,0,0,0,2,2,1,1,-1,1,3,1,1,0,0,0,2,2,0,0,0,2,1,-1,1,1,3,1,0,0,1,0,2,0,0,2,0,2,1,-1,1,1,3,1,0,0,0,1,2,0,0,0,2,2,1,-1,1,1,3,1,0,1,0,0,2,0,2,0,0,2,-1,1,1,1,3,1,0,0,1,0,2,0,0,2,0,2,-1,1,1,1,3,1,0,0,0,1,2,0,0,0,2,2,-1,1,1,1,3,3,2,1,0,0,3,1,2,0,0,4,1,1,1,1,3,3,2,0,1,0,3,1,0,2,0,4,1,1,1,1,3,3,0,2,1,0,3,0,1,2,0,4,1,1,1,1,3,3,2,0,0,1,3,1,0,0,2,4,1,1,1,1,3,3,0,2,0,1,3,0,1,0,2,4,1,1,1,1,3,3,0,0,2,1,3,0,0,1,2,4,1,1,1,1,3,3,2,1,0,0,3,1,2,0,0,2,1,1,1,-1,3,3,2,0,1,0,3,1,0,2,0,2,1,1,1,-1,3,3,0,2,1,0,3,0,1,2,0,2,1,1,1,-1,3,3,2,1,0,0,3,1,2,0,0,2,1,1,-1,1,3,3,2,0,0,1,3,1,0,0,2,2,1,1,-1,1,3,3,0,2,0,1,3,0,1,0,2,2,1,1,-1,1,3,3,2,0,1,0,3,1,0,2,0,2,1,-1,1,1,3,3,2,0,0,1,3,1,0,0,2,2,1,-1,1,1,3,3,0,0,2,1,3,0,0,1,2,2,1,-1,1,1,3,3,0,2,1,0,3,0,1,2,0,2,-1,1,1,1,3,3,0,2,0,1,3,0,1,0,2,2,-1,1,1,1,3,3,0,0,2,1,3,0,0,1,2,2,-1,1,1,1]},816:(t,e,n)=>{e.DA=void 0;var s=n(91);Object.defineProperty(e,"DA",{enumerable:!0,get:function(){return s.makeNoise2D}});var i=n(644);var r=n(76)},341:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=new Uint32Array(1);return e[0]=1664525*t[0]+1013904223,e}}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,n),r.exports}(()=>{class t{constructor(t=1,e=1,n=1,s=1){this.r=t,this.g=e,this.b=n,this.a=s}pad(t){return 1==t.length?"0"+t:t}static fromRGBHex(e){const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?new t(parseInt(n[1],16)/255,parseInt(n[2],16)/255,parseInt(n[3],16)/255):null}hexRGB(){const t=Number(Math.floor(255*this.r)).toString(16),e=Number(Math.floor(255*this.g)).toString(16),n=Number(Math.floor(255*this.b)).toString(16);return"#"+this.pad(t)+this.pad(e)+this.pad(n)}static hsl(e,n,s){const i=n*Math.min(s,1-s),r=(t,n=(t+e/30)%12)=>s-i*Math.max(Math.min(n-3,9-n,1),-1),o=r(0),a=r(8),h=r(4);return new t(o,a,h,1)}}t.Red=new t(1,0,0,1);class e{constructor(t=0,e=0){this.x=t,this.y=e}static up(){return new e(0,1)}copy(){return new e(this.x,this.y)}mult(t=1){return new e(this.x*t,this.y*t)}add(t=new e(0,0)){return new e(this.x+t.x,this.y+t.y)}sub(t=new e(0,0)){return new e(this.x-t.x,this.y-t.y)}len(){return Math.sqrt(this.x*this.x+this.y*this.y)}normalize(){return this.mult(1/this.len())}rotate(t=0){return new e(this.x*Math.cos(t)-this.y*Math.sin(t),this.x*Math.sin(t)+this.y*Math.cos(t))}}class s{constructor(t=[]){this.points=t}static Circle(t=10){const n=[];for(let s=0;s<t;s++)n.push(new e(0,-.5).rotate(s*(2*Math.PI/t)));return new s(n)}static Point(t){return new s([t.copy()])}static Line(t,e,n=0){const i=e.sub(t),r=[];for(let e=0;e<n;e++){const s=t.add(i.mult(e/n));r.push(s)}return s.of(r)}static of(t){return new s(t)}static Rect(){return new s([new e(-.5,-.5),new e(-.5,.5),new e(.5,.5),new e(.5,-.5)])}transform(t=1,n=new e(0,0),i=0){const r=[];for(let e=0;e<this.points.length;e++){const s=this.points[e].mult(t).rotate(i).add(n);r.push(s)}return new s(r)}}var i,r;!function(t){t[t.Closed=0]="Closed",t[t.Line=1]="Line",t[t.Point=2]="Point"}(i||(i={}));class o{constructor(e=t.Red,n=null,s=4,r=i.Closed){this.backgroundColor=e,this.strokeColor=n,this.strokeSize=s,this.drawMode=r}static Default(){return new o}static Line(){return new o(null,t.Red,.5,i.Line)}static Point(){return new o(t.Red,null,.5,i.Point)}}class a{constructor(t){this.canvasElem=t,this.ctx=this.canvasElem.getContext("2d")}render(t){this.canvasElem.width=t.size.x,this.canvasElem.height=t.size.y;const e=this.ctx;if(e){if(window.devicePixelRatio>1){const n=t.size.x,s=t.size.y;this.canvasElem.width=n*window.devicePixelRatio,this.canvasElem.height=s*window.devicePixelRatio,this.canvasElem.style.width=n+"px",this.canvasElem.style.height=s+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)}e.clearRect(0,0,this.canvasElem.width,this.canvasElem.height),e.rect(0,0,this.canvasElem.width,this.canvasElem.height),e.fillStyle=t.background.hexRGB(),e.fill(),t.layers.forEach((t=>{t.generate().forEach((t=>{t.draw(this)}))}))}}draw(t,e){const n=this.ctx;n&&(e.backgroundColor&&(n.beginPath(),this.drawPoints(n,t.points,e.drawMode),n.fillStyle=e.backgroundColor.hexRGB(),n.fill()),e.strokeColor&&e.drawMode!=i.Point&&(n.beginPath(),this.drawPoints(n,t.points,e.drawMode),n.lineWidth=e.strokeSize,n.strokeStyle=e.strokeColor.hexRGB(),n.stroke()))}drawPoints(t,e,n){if(!(e.length<1)){if(n==i.Point)for(let n=0;n<e.length;n++)t.fillRect(e[n].x,e[n].y,1,1);t.moveTo(e[0].x,e[0].y);for(let n=0;n<e.length;n++)t.lineTo(e[n].x,e[n].y);n==i.Closed&&t.lineTo(e[0].x,e[0].y)}}}class h{constructor(t=s.Point(new e),n=o.Default()){this.polygon=t,this.style=n}draw(t){t.draw(this.polygon,this.style)}}class l{desciption(){return""}help(){const t=new Map;return this.getParams().params.forEach(((e,n)=>{t.set(n,e.description)})),new c(this.name(),this.desciption(),t)}}class c{constructor(t,e,n){this.name=t,this.description=e,this.parameterExplanations=n}}!function(t){t[t.String=0]="String",t[t.Integer=1]="Integer",t[t.Float=2]="Float",t[t.Point=3]="Point"}(r||(r={}));class d{constructor(t,e,n,s){this.key=t,this.value=e,this.type=n,this.description=s}static of(t,e,n,s="no description"){return new d(t,e,n,s)}}class u{constructor(t=new Map){this.params=t}static of(t){const e=new Map;return t.forEach((t=>{e.set(t.key,t)})),new u(e)}get(t,e){const n=this.params.get(t);return void 0===n?e:n.value}set(t,e){const n=this.params.get(t);void 0!==n&&(n.value=e)}}class p{constructor(t=[]){this.ops=t}generate(){if(this.ops.length<1)return[];let t=[];for(let e=0;e<this.ops.length;e++)t=this.ops[e].execute(t);return t}removeOpAt(t){this.ops.splice(t,1)}moveOpDown(t){t<this.ops.length-1&&this.swapOp(t,t+1)}swapOp(t,e){const n=this.ops[e];this.ops[e]=this.ops[t],this.ops[t]=n}moveOpUp(t){t>0&&this.swapOp(t,t-1)}append(t){this.ops.push(t)}}class f{constructor(n=new t,s=new e(500,500),i=[]){this.background=n,this.size=s,this.layers=i}addLayer(t){this.layers.push(t)}shapes(){return this.layers}}var m=function(t,e){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},m(t,e)};function g(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}m(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var v,y=function(){function t(){}return t._xfnv1a=function(t){for(var e=2166136261,n=0;n<t.length;n++)e=Math.imul(e^t.charCodeAt(n),16777619);return function(){return e+=e<<13,e^=e>>>7,e+=e<<3,e^=e>>>17,(e+=e<<5)>>>0}},t}(),w=function(t){function e(n){var s=t.call(this)||this;return s.a=e._xfnv1a(n)(),s}return g(e,t),e.prototype.next=function(){var t=this.a+=1831565813;return t=Math.imul(t^t>>>15,1|t),(((t^=t+Math.imul(t^t>>>7,61|t))^t>>>14)>>>0)/4294967296},e}(y),x=function(t){function e(n){var s=t.call(this)||this,i=e._xfnv1a(n);return s.a=i(),s.b=i(),s.c=i(),s.d=i(),s}return g(e,t),e.prototype.next=function(){this.a>>>=0,this.b>>>=0,this.c>>>=0,this.d>>>=0;var t=this.a+this.b|0;return this.a=this.b^this.b>>>9,this.b=this.c+(this.c<<3)|0,this.c=this.c<<21|this.c>>>11,this.d=this.d+1|0,t=t+this.d|0,this.c=this.c+t|0,(t>>>0)/4294967296},e}(y),b=function(t){function e(n){var s=t.call(this)||this,i=e._xfnv1a(n);return s.a=i(),s.b=i(),s.c=i(),s.d=i(),s}return g(e,t),e.prototype.next=function(){var t=this.b<<9,e=5*this.a;return e=e<<7|9*(e>>>25),this.c^=this.a,this.d^=this.b,this.b^=this.c,this.a^=this.d,this.c^=t,this.d=this.d<<11|this.d>>>21,(e>>>0)/4294967296},e}(y);!function(t){t.sfc32="sfc32",t.mulberry32="mulberry32",t.xoshiro128ss="xoshiro128ss"}(v||(v={}));var P=function(){function t(t,e){void 0===e&&(e=v.sfc32),this.str=t,this.prng=e,this.generator=this._initializeGenerator()}return t.prototype.next=function(){return this.generator.next()},t.prototype._initializeGenerator=function(){if(function(t){return null===t}(t=this.str)||function(t){return void 0===t}(t))return this.wrap();var t;switch(this.prng){case"sfc32":return new x(this.str);case"mulberry32":return new w(this.str);case"xoshiro128ss":return new b(this.str);default:return this.wrap()}},t.prototype.wrap=function(){return{next:function(){return Math.random()}}},t}();class _{constructor(t,e=new P(t)){this.rand=e}uniform(t,e){return t+this.rand.next()*(e-t)}boxMullerTransform(){const t=this.rand.next(),e=this.rand.next();return{z0:Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e),z1:Math.sqrt(-2*Math.log(t))*Math.sin(2*Math.PI*e)}}normal(t,e){const{z0:n}=this.boxMullerTransform();return n*e+t}}class E extends l{constructor(){super(...arguments),this.seed="seed"}setParams(t){this.seed=t.get("seed","seed")}getParams(){return u.of([d.of("seed",this.seed,r.String)])}execute(e){const n=new _(this.seed);for(let s=0;s<e.length;s++){if(e[s].style.backgroundColor){const i=n.uniform(0,360);e[s].style.backgroundColor=t.hsl(i,1,.5)}if(e[s].style.strokeColor){const i=n.uniform(0,360);e[s].style.strokeColor=t.hsl(i,1,.5)}}return e}name(){return"RandomColor"}}class C extends l{constructor(){super(...arguments),this.start=new e(0,0),this.end=new e(100,100),this.divisions=10}getParams(){return u.of([d.of("start",this.start,r.Point),d.of("end",this.end,r.Point),d.of("divisions",this.divisions,r.Integer)])}setParams(t){this.start=t.get("start",new e(0,0)),this.end=t.get("end",new e(100,100)),this.divisions=t.get("divisions",10)}execute(t){return[new h(s.Line(this.start,this.end,this.divisions),o.Line())]}name(){return"StaticLine"}}class M extends l{constructor(){super(...arguments),this.divisions=10,this.direction=e.up(),this.length=100}desciption(){return"The Lines operation takes every point of every input shape as a starting point and generates a new line shape in the given direction with the given length and (sub)divisions"}getParams(){return u.of([d.of("divisions",this.divisions,r.Integer,"Number of subdivisions of each generated line"),d.of("direction",this.direction,r.Point,"Direction of each generated line"),d.of("length",this.length,r.Float,"Length of each generated line")])}setParams(t){this.divisions=t.get("divisions",10),this.length=t.get("length",100),this.direction=t.get("direction",e.up())}execute(t){const e=[];return t.forEach((t=>{t.polygon.points.forEach((t=>{const n=t.add(this.direction.mult(this.length));e.push(new h(s.Line(t,n,this.divisions),o.Line()))}))})),e}name(){return"Lines"}}class k extends l{constructor(){super(...arguments),this.radius=10,this.resolution=10}desciption(){return"This operation takes every point in every shape from the input and creates a circle at this point."}getParams(){return u.of([d.of("radius",this.radius,r.Float,"Radius of the created circles"),d.of("resolution",this.resolution,r.Integer,'Count of sides on the "circle"')])}setParams(t){this.radius=t.get("radius",10),this.resolution=t.get("resolution",10)}execute(t){const n=[];return t.forEach((t=>{t.polygon.points.forEach((t=>{n.push(new h(s.Circle(this.resolution).transform(this.radius,new e(t.x,t.y))))}))})),n}name(){return"Circles"}}var z=n(816);class L{toString(t){const e=[];t.layers.forEach((t=>e.push(this.convertLayer(t))));const n={size:t.size,background:t.background.hexRGB(),layers:e};return JSON.stringify(n,void 0,2)}convertOp(t){const e={};return t.getParams().params.forEach((t=>{e[t.key]=t.value})),{name:t.name(),params:e}}convertLayer(t){const e=[];return t.ops.forEach((t=>{e.push(this.convertOp(t))})),{ops:e}}fromString(t){const e=new f,n=JSON.parse(t);return this.parseDocument(e,n),e}parseDocument(n,s){const i=this.parsePoint(s.size);n.size=i||new e(500,500);const r=this.parseColor(s.background);n.background=r||new t(1,1,1,1),n.layers=this.parseLayer(s)}parseLayer(t){const e=[],n=t.layers;if(n)for(let t=0;t<n.length;t++){const s=n[t],i=new p,r=s.ops,o=[];for(let t=0;t<r.length;t++){const e=r[t],n=L.operationByName(e.name),s=e.params;if(n&&s){const t=n.getParams();for(const e of t.params.keys()){const n=s[e];void 0!==n&&t.set(e,n)}n.setParams(t),o.push(n)}}i.ops=o,e.push(i)}return e}static operationByName(t){if(!t)return null;for(let e=0;e<L.OPERATIONS.length;e++){const n=new L.OPERATIONS[e];if(n.name()==t)return n}return null}parseColor(e){return t.fromRGBHex(e)}parsePoint(t,n="x",s="y"){return t&&t[n]&&t[s]?new e(t[n],t[s]):null}}L.OPERATIONS=[class extends l{constructor(){super(...arguments),this.seed="seed",this.count=20,this.position=new e,this.dist=0,this.dist_deviation=50,this.angle_min=0,this.angle_max=2*Math.PI}desciption(){return"The NormalDistPoints operation generates points around the center with a normal distribution"}getParams(){return u.of([d.of("count",this.count,r.Integer,"Number of generated points"),d.of("seed",this.seed,r.String,"seed for the RNG"),d.of("dist",this.dist,r.Float,"Mean distance from the center Point"),d.of("dist_deviation",this.dist_deviation,r.Float,"Standard deviation for the distance"),d.of("angle_min",this.angle_min,r.Float,"Start angle"),d.of("angle_max",this.angle_max,r.Float,"End angle"),d.of("position",this.position,r.Point,"Center point")])}setParams(t){this.count=t.get("count",20),this.seed=t.get("seed","seed"),this.dist=t.get("dist",0),this.dist_deviation=t.get("dist_deviation",50),this.angle_min=t.get("angle_min",0),this.angle_max=t.get("angle_max",2*Math.PI),this.position=t.get("position",new e)}execute(t){const n=[],i=new _(this.seed);for(let t=0;t<this.count;t++){const t=i.uniform(this.angle_min,this.angle_max),r=i.normal(this.dist,this.dist_deviation),a=e.up().rotate(t).mult(r).add(this.position);n.push(new h(s.of([a]),o.Point()))}return n}name(){return"NormalDistPoints"}},E,class extends l{constructor(){super(...arguments),this.seed="seed",this.count=20,this.x_min=0,this.x_max=500,this.y_min=0,this.y_max=500}getParams(){return u.of([d.of("count",this.count,r.Integer),d.of("seed",this.seed,r.String),d.of("x_min",this.x_min,r.Float),d.of("x_max",this.x_max,r.Float),d.of("y_min",this.y_min,r.Float),d.of("y_max",this.y_max,r.Float)])}setParams(t){this.count=t.get("count",20),this.seed=t.get("seed","seed"),this.x_min=t.get("x_min",0),this.x_max=t.get("x_max",500),this.y_min=t.get("y_min",0),this.y_max=t.get("y_max",500)}execute(t){const n=[],i=new _(this.seed);for(let t=0;t<this.count;t++){const t=i.uniform(this.x_min,this.x_max),r=i.uniform(this.y_min,this.y_max);n.push(new h(s.Point(new e(t,r)),o.Point()))}return n}name(){return"RandomPoints"}},class extends l{constructor(){super(...arguments),this.size=10}getParams(){return u.of([d.of("size",this.size,r.Float)])}setParams(t){this.size=t.get("size",10)}execute(t){const n=[];return t.forEach((t=>{t.polygon.points.forEach((t=>{n.push(new h(s.Rect().transform(this.size,new e(t.x,t.y))))}))})),n}name(){return"Rects"}},class extends l{constructor(){super(...arguments),this.size=20,this.center=new e(0,0),this.resolution=20}getParams(){return u.of([d.of("size",this.size,r.Float),d.of("position",this.center,r.Point),d.of("resolution",this.resolution,r.Integer)])}setParams(t){this.size=t.get("size",20),this.center=t.get("position",new e(0,0)),this.resolution=t.get("resolution",20)}execute(t){return[new h(s.Circle(this.resolution).transform(this.size,this.center))]}name(){return"StaticCircle"}},C,class extends l{constructor(){super(...arguments),this.position=new e}getParams(){return u.of([d.of("position",this.position,r.Point)])}setParams(t){this.position=t.get("position",new e)}execute(t){return[new h(s.Point(this.position),o.Point())]}name(){return"StaticPoint"}},class extends l{constructor(){super(...arguments),this.size=10,this.position=new e}getParams(){return u.of([d.of("size",this.size,r.Float),d.of("position",this.position,r.Point)])}setParams(t){this.size=t.get("size",20),this.position=t.get("position",new e)}execute(t){return[new h(s.Rect().transform(this.size,this.position))]}name(){return"StaticRect"}},M,class extends l{constructor(){super(...arguments),this.position=new e(250,250),this.range=100,this.force=20,this.exp=4}getParams(){return u.of([d.of("position",this.position.x,r.Point),d.of("range",this.range,r.Float),d.of("force",this.force,r.Float),d.of("exp",this.exp,r.Float)])}setParams(t){this.position=t.get("position",new e(250,250)),this.range=t.get("range",100),this.force=t.get("force",20),this.exp=t.get("exp",4)}execute(t){for(let e=0;e<t.length;e++){const n=t[e].polygon.points;for(let t=0;t<n.length;t++){const e=n[t],s=e.sub(this.position).len(),i=e.sub(this.position).normalize();let r=0;s<this.range&&(r=this.force*Math.pow(1-s/this.range,this.exp));const o=e.add(i.mult(r));e.x=o.x,e.y=o.y}}return t}name(){return"StaticExplosion"}},k,class extends l{constructor(){super(...arguments),this.amount=2,this.seed="seed"}desciption(){return"The Jiggle operation moves every point from every input shape in a random direction and random distance between 0 and the given <i>amount</i>"}getParams(){return u.of([d.of("amount",this.amount,r.Float,"Maximum distance to move a point"),d.of("seed",this.seed,r.String,"Seed for the RNG")])}setParams(t){this.amount=t.get("amount",2),this.seed=t.get("seed","seed")}execute(t){const n=new _(this.seed);for(let s=0;s<t.length;s++){const i=t[s].polygon.points;for(let t=0;t<i.length;t++){const s=i[t],r=n.uniform(0,this.amount),o=n.uniform(0,2*Math.PI),a=e.up().rotate(o).mult(r),h=s.add(a);s.x=h.x,s.y=h.y}}return t}name(){return"Jiggle"}},class extends l{constructor(){super(...arguments),this.step_count=100,this.step_size=3,this.seed=0,this.offset=new e,this.scale=.1}desciption(){return"The FlowFieldLines operation takes every point of every input shape as a starpoint for a line which follows along a flowfield created with the open-simplex-noise algorithm."}getParams(){return u.of([d.of("step_count",this.step_count,r.Integer,"Number of steps to follow along the flowfield"),d.of("step_size",this.step_size,r.Float,"Distance between zwo steps"),d.of("seed",this.seed,r.Integer,"Seed for the RNG of the flowfield"),d.of("offset",this.offset,r.Point,"Offset to shift the flowfield"),d.of("scale",this.scale,r.Float,"Scale of the flow field")])}setParams(t){this.step_count=t.get("step_count",100),this.step_size=t.get("step_size",3),this.seed=t.get("seed",0),this.offset=t.get("offset",new e),this.scale=t.get("scale",.1)}execute(t){const n=[],i=(0,z.DA)(this.seed);return t.forEach((t=>{t.polygon.points.forEach((t=>{let r=t.copy();const a=[r];for(let t=0;t<this.step_count;t++){const t=r.add(this.offset).mult(this.scale),n=2*i(t.x,t.y)*Math.PI,s=e.up().rotate(n).normalize().mult(this.step_size);r=r.add(s),a.push(r)}n.push(new h(s.of(a),o.Line()))}))})),n}name(){return"FlowFieldLines"}}].sort(((t,e)=>(new t).name().localeCompare((new e).name())));class S{constructor(){this.nextId=0,this.opNames=L.OPERATIONS.map((t=>(new t).name())).sort()}newId(){return this.nextId++,this.nextId}select(t,e){const n=document.createElement("select");null!=t&&n.classList.add(t);for(let t=0;t<e.length;t++){const s=e[t],i=document.createElement("option");i.value=s,i.innerHTML=s,n.appendChild(i)}return n}buildHelp(t){const e=this.div(["help-wrapper"]);e.style.background="#fff";const n=this.button([],"X",(()=>{t()}));e.append(n);const s=this.div(["help-name"]),i=this.div(["help-desc"]);return s.innerHTML="CreativeJS",i.innerHTML="\nCreativeJS is a interactive tool for generative artwork in the browser.<br/><br/>\nTo generate an image you combine any of the operations below. An operation gets a \nlist of <i>shapes</i> as input and generates a list of shapes as output. \nA shape consists of a polygon(a list of 2D points) and a draw style (background color, stroke color, stroke size and draw mode (closed, line, point)).<br/>\nEach of this properties can be modified with diffrent operations<br/><br/>\n\nOperations like <i>RandomPoints</i> only generate new shapes and ignore every input.<br/>\nOperations like <i>Jiggle</i> just modify the input then return it to the next operation.<br/>\nOperations like <i>Rects</i> generate new shapes based on the given input.<br/>\n",e.append(s),e.append(i),L.OPERATIONS.forEach((t=>{const n=(new t).help(),s=this.div(["help-op-wrapper"]),i=this.div(["help-op-name"]);i.innerHTML=n.name;const r=this.div(["help-op-description"]);r.innerHTML=n.description;const o=this.div(["help-op-params-headline"]);o.innerHTML="Parameters",s.append(i),s.append(r),s.append(o),n.parameterExplanations.forEach(((t,e)=>{const n=this.div(["clearfix","help-param-wrapper"]),i=this.div(["help-param-name"]);i.innerHTML=e;const r=this.div(["help-param-description"]);r.innerHTML=t,n.append(i),n.append(r),s.append(n)})),e.append(s)})),e}build(t,e){const n=this.div();return t.layers.forEach((t=>{const s=this.div(["layer-wrapper"]),i=this.div(["layer-name"]);i.innerText="Layer",s.appendChild(i);const o=this.div(["add-op-wrapper","clearfix"]),a=this.select("add-op-select",this.opNames),h=this.button(["op-btn","op-add"],"&#43;",(()=>{const n=a.selectedOptions[0].value;console.log(n);const s=L.operationByName(n);null!=s&&(t.append(s),e())}));o.appendChild(a),o.appendChild(h),s.appendChild(o);for(let n=0;n<t.ops.length;n++){const i=t.ops[n],o=this.div(["op-wrapper"]),a=this.div(["op-name"]);a.innerText=i.name(),o.appendChild(a),o.appendChild(this.button(["op-btn","op-remove"],"&#10005;",(()=>{confirm("Do you really want to delete "+i.name()+"?")&&(t.removeOpAt(n),e())}))),n>0&&o.appendChild(this.button(["op-btn","op-move-up"],"&#9651;",(()=>{t.moveOpUp(n),e()}))),n<t.ops.length-1&&o.appendChild(this.button(["op-btn","op-move-down"],"&#9661;",(()=>{t.moveOpDown(n),e()})));const h=i.getParams(),l=this.div(["params-wrapper","clearfix"]);l.style.display="block",o.appendChild(l),a.onclick=()=>{"block"==l.style.display?l.style.display="none":l.style.display="block"},h.params.forEach((t=>{const n=this.div(["param-wrapper"]);let s=null;t.type==r.Float?s=this.input(t.key,t.value,((n,s)=>{const r=parseFloat(n);s.value=r.toString(),h.set(t.key,r),i.setParams(h),e()})):t.type==r.Integer?s=this.input(t.key,t.value,((n,s)=>{const r=parseInt(n);s.value=r.toString(),h.set(t.key,r),i.setParams(h),e()})):t.type==r.String?s=this.input(t.key,t.value,((n,s)=>{s.value=n,h.set(t.key,n),i.setParams(h),e()})):t.type==r.Point&&(s=this.inputPoint(t.key,t.value,(n=>{h.set(t.key,n),i.setParams(h),e()}))),null!=s&&n.appendChild(s),l.appendChild(n)})),s.appendChild(o)}n.appendChild(s)})),n}input(t,e,n){const s=this.div();s.classList.add("clearfix");const i="input_"+this.newId(),r=document.createElement("label");r.classList.add("param-label"),r.innerText=t,r.htmlFor=i;const o=document.createElement("input");return o.classList.add("param-input"),o.type="text",o.id=i,o.value=e,o.onchange=()=>{n(o.value,o)},s.appendChild(r),s.appendChild(o),s}inputPoint(t,n,s){const i=this.div();i.classList.add("clearfix");const r=document.createElement("label");r.classList.add("param-label"),r.innerText=t;const o=document.createElement("input"),a=document.createElement("input");o.classList.add("param-input"),a.classList.add("param-input"),o.type="text",a.type="text",o.value=n.x.toString(),a.value=n.y.toString();const h=()=>{const t=parseFloat(o.value),n=parseFloat(a.value);o.value=t.toString(),a.value=n.toString(),s(new e(t,n))};return o.onchange=h,a.onchange=h,i.appendChild(r),i.appendChild(o),i.appendChild(a),i}div(t=null){const e=document.createElement("div");return null!=t&&null!=t&&t.forEach((t=>e.classList.add(t))),e}button(t,e,n){const s=document.createElement("button");return null!=t&&t.forEach((t=>s.classList.add(t))),s.onclick=n,s.innerHTML=e,s}}const R=new class{constructor(t){this.renderer=null,this.sdoc=null,this.helpContainer=null,this.uiContainer=null,this.canvasElem=null,this.canvasWrapper=null;const e=document.getElementById(t);null!=e&&(this.createRenderer(e),this.createUiContainer(e),this.createHelpContainer(e))}createHelpContainer(t){this.helpContainer=document.createElement("div"),this.helpContainer.classList.add("creative-help-container"),t.appendChild(this.helpContainer)}createUiContainer(t){this.uiContainer=document.createElement("div"),this.uiContainer.classList.add("creative-ui-container"),t.appendChild(this.uiContainer)}createRenderer(t){this.canvasWrapper=document.createElement("div"),this.canvasWrapper.classList.add("creative-canvas-wrapper"),this.canvasElem=document.createElement("canvas"),this.canvasElem&&(this.canvasElem.id="Canvas",this.canvasElem.className="creative-canvas",this.canvasElem.width=500,this.canvasElem.height=500,this.canvasWrapper.appendChild(this.canvasElem),t.appendChild(this.canvasWrapper),this.renderer=new a(this.canvasElem))}draw(){this.sdoc&&this.renderer&&this.renderer.render(this.sdoc)}displayDocument(t){t&&(this.sdoc=t,this.buildUi(),this.draw())}download(){if(!this.canvasElem)return;const t=document.createElement("a"),e=Number(Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)).toString(16);t.setAttribute("download","Creative_"+e+".png");const n=this.canvasElem.toDataURL("image/png").replace(/^data:image\/png/,"data:application/octet-stream");t.setAttribute("href",n),t.click()}button(t,e){const n=document.createElement("button");return n.classList.add("btn"),n.classList.add("btn-primary"),n.onclick=()=>{e()},n.innerText=t,n}buildUi(){if(!this.uiContainer||!this.sdoc)return;this.uiContainer.textContent="";const t=document.createElement("div");t.classList.add("btn-group"),t.append(this.button("Update",(()=>{this.displayDocument(this.sdoc)}))),t.append(this.button("Download",(()=>{this.download()}))),t.append(this.button("Help",(()=>{this.displayHelp()}))),this.uiContainer.appendChild(t);const e=(new S).build(this.sdoc,(()=>{this.displayDocument(this.sdoc)}));this.uiContainer.append(e);const n=document.createElement("textarea");n.style.width="500px",n.style.height="500px",n.value=(new L).toString(this.sdoc)}displayHelp(){const t=this.helpContainer,e=this.uiContainer,n=this.canvasWrapper;if(t){t.style.display="block";const s=(new S).buildHelp((()=>{t.style.display="none",e&&(e.style.display="block"),n&&(n.style.display="block"),this.displayDocument(this.sdoc)}));t.innerText="",t.append(s)}e&&(e.style.display="none"),n&&(n.style.display="none")}}("app"),O=new f,A=new C,I=A.getParams();I.set("start",new e(100,100)),I.set("end",new e(400,100)),A.setParams(I);const N=new M,T=N.getParams();T.set("length",300),N.setParams(T);const F=new p([A,N,new k,new E]);O.addLayer(F),R.displayDocument(O)})()})();