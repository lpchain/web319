(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a5f334a"],{"14c3":function(e,t,r){var a=r("c6b6"),o=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var n=r.call(e,t);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"44ba":function(e,t,r){"use strict";r("8a5c")},5319:function(e,t,r){"use strict";var a=r("d784"),o=r("825a"),n=r("7b0bd"),c=r("50c4"),i=r("a691"),s=r("1d80"),l=r("8aa5"),d=r("14c3"),p=Math.max,u=Math.min,f=Math.floor,b=/\$([$&'`]|\d\d?|<[^>]*>)/g,x=/\$([$&'`]|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,r,a){var m=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=a.REPLACE_KEEPS_$0,w=m?"$":"$0";return[function(r,a){var o=s(this),n=void 0==r?void 0:r[e];return void 0!==n?n.call(r,o,a):t.call(String(o),r,a)},function(e,a){if(!m&&h||"string"===typeof a&&-1===a.indexOf(w)){var n=r(t,e,this,a);if(n.done)return n.value}var s=o(e),f=String(this),b="function"===typeof a;b||(a=String(a));var x=s.global;if(x){var j=s.unicode;s.lastIndex=0}var O=[];while(1){var v=d(s,f);if(null===v)break;if(O.push(v),!x)break;var N=String(v[0]);""===N&&(s.lastIndex=l(f,c(s.lastIndex),j))}for(var V="",S=0,k=0;k<O.length;k++){v=O[k];for(var B=String(v[0]),A=p(u(i(v.index),f.length),0),C=[],E=1;E<v.length;E++)C.push(g(v[E]));var z=v.groups;if(b){var D=[B].concat(C,A,f);void 0!==z&&D.push(z);var M=String(a.apply(void 0,D))}else M=y(B,f,A,C,z,a);A>=S&&(V+=f.slice(S,A)+M,S=A+B.length)}return V+f.slice(S)}];function y(e,r,a,o,c,i){var s=a+e.length,l=o.length,d=x;return void 0!==c&&(c=n(c),d=b),t.call(i,d,(function(t,n){var i;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,a);case"'":return r.slice(s);case"<":i=c[n.slice(1,-1)];break;default:var d=+n;if(0===d)return t;if(d>l){var p=f(d/10);return 0===p?t:p<=l?void 0===o[p-1]?n.charAt(1):o[p-1]+n.charAt(1):t}i=o[d-1]}return void 0===i?"":i}))}}))},6547:function(e,t,r){var a=r("a691"),o=r("1d80"),n=function(e){return function(t,r){var n,c,i=String(o(t)),s=a(r),l=i.length;return s<0||s>=l?e?"":void 0:(n=i.charCodeAt(s),n<55296||n>56319||s+1===l||(c=i.charCodeAt(s+1))<56320||c>57343?e?i.charAt(s):n:e?i.slice(s,s+2):c-56320+(n-55296<<10)+65536)}};e.exports={codeAt:n(!1),charAt:n(!0)}},"8a5c":function(e,t,r){},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},9263:function(e,t,r){"use strict";var a=r("ad6d"),o=r("9f7f"),n=RegExp.prototype.exec,c=String.prototype.replace,i=n,s=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=o.UNSUPPORTED_Y||o.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],p=s||d||l;p&&(i=function(e){var t,r,o,i,p=this,u=l&&p.sticky,f=a.call(p),b=p.source,x=0,g=e;return u&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),g=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(b="(?: "+b+")",g=" "+g,x++),r=new RegExp("^(?:"+b+")",f)),d&&(r=new RegExp("^"+b+"$(?!\\s)",f)),s&&(t=p.lastIndex),o=n.call(u?r:p,g),u?o?(o.input=o.input.slice(x),o[0]=o[0].slice(x),o.index=p.lastIndex,p.lastIndex+=o[0].length):p.lastIndex=0:s&&o&&(p.lastIndex=p.global?o.index+o[0].length:t),d&&o&&o.length>1&&c.call(o[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o}),e.exports=i},"99d8":function(e,t,r){"use strict";r.r(t);r("b680");var a=r("7a23"),o={class:"content"},n={style:{width:"90%",margin:"10px auto",display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between"}},c={key:0,style:{width:"200px",height:"40px","border-radius":"10px","text-align":"center","line-height":"40px",background:"#7C3BED33",color:"#7C3BED"}},i=Object(a["createVNode"])("span",null,"链 接",-1),s={class:"second"},l=Object(a["createVNode"])("view",{class:"second01"},[Object(a["createVNode"])("span",{class:"second02",style:{color:"black","font-size":"18px","font-weight":"600"}},"燃烧看板")],-1),d={style:{width:"90%",margin:"8px auto",display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between","font-size":"14px"}},p={style:{display:"flex","flex-direction":"row","align-items":"center"}},u=Object(a["createVNode"])("span",{style:{"margin-right":"15px","font-size":"14px",color:"#64748B"}},"总发行量",-1),f={style:{"font-size":"14px",color:"#11181C"}},b={style:{display:"flex","flex-direction":"row","align-items":"center"}},x=Object(a["createVNode"])("span",{style:{"margin-right":"15px","font-size":"14px",color:"#64748B"}},"已销毁",-1),g={style:{"font-size":"14px",color:"#11181C"}},m={style:{width:"90%",margin:"8px auto",display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between","font-size":"14px"}},h={style:{display:"flex","flex-direction":"row","align-items":"center"}},w=Object(a["createVNode"])("span",{style:{"margin-right":"15px","font-size":"14px",color:"#64748B"}},"个人销毁",-1),y={style:{"font-size":"14px",color:"#11181C"}},j={style:{display:"flex","flex-direction":"row","align-items":"center"}},O=Object(a["createVNode"])("span",{style:{"margin-right":"15px","font-size":"14px",color:"#64748B"}},"总剩余量",-1),v={style:{"font-size":"14px",color:"#11181C"}},N={class:"second"},V={class:"second01"},S={class:"second02",style:{color:"black","font-weight":"600","font-size":"18px"}},k={style:{width:"90%",margin:"8px auto",display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between","font-size":"14px"}},B={style:{display:"flex","flex-direction":"row","align-items":"center"}},A=Object(a["createVNode"])("span",{style:{"margin-right":"15px","font-size":"14px",color:"#64748B"}},"全网累计分红",-1),C={style:{"font-size":"14px",color:"#11181C"}},E={style:{display:"flex","flex-direction":"row","align-items":"center"}},z=Object(a["createVNode"])("span",{style:{"margin-right":"15px","font-size":"14px",color:"#64748B"}},"价值",-1),D={style:{"font-size":"14px",color:"#11181C"}},M={style:{width:"90%",margin:"8px auto",display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between","font-size":"14px"}},F={style:{display:"flex","flex-direction":"row","align-items":"center"}},W=Object(a["createVNode"])("span",{style:{"margin-right":"15px","font-size":"14px",color:"#64748B"}},"全网待分红",-1),R={style:{"font-size":"14px",color:"#11181C"}},I={style:{display:"flex","flex-direction":"row","align-items":"center"}},P=Object(a["createVNode"])("span",{style:{"margin-right":"15px","font-size":"14px",color:"#64748B"}},"价值",-1),_={style:{"font-size":"14px",color:"#11181C"}},$={class:"second"},T=Object(a["createVNode"])("view",{class:"second01"},[Object(a["createVNode"])("span",{class:"second02",style:{color:"black","font-weight":"600","font-size":"18px"}},"个人收益")],-1),L={style:{width:"90%",margin:"8px auto",display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between","font-size":"14px"}},U={style:{display:"flex","flex-direction":"row","align-items":"center"}},K=Object(a["createVNode"])("span",{style:{"margin-right":"15px","font-size":"14px",color:"#64748B"}},"累计",-1),q={style:{"font-size":"14px",color:"#11181C"}},G={style:{display:"flex","flex-direction":"row","align-items":"center"}},J=Object(a["createVNode"])("span",{style:{"margin-right":"15px","font-size":"14px",color:"#64748B"}},"剩余",-1),X={style:{"font-size":"14px",color:"#11181C"}},Y={style:{"margin-bottom":"100px"},class:"second"},H=Object(a["createVNode"])("view",{style:{width:"90%",margin:"15px auto","font-size":"18px",color:"#000",display:"block","font-weight":"600"}},[Object(a["createVNode"])("span",null,"节点分红")],-1),Q={style:{width:"90%",margin:"10px auto",border:"1px solid #c8c8c8",display:"flex","flex-direction":"column",padding:"10px 0"}},Z=Object(a["createVNode"])("view",{style:{width:"90%",margin:"10px auto","text-align":"center",position:"relative"}},[Object(a["createVNode"])("span",{style:{"font-size":"20px","font-weight":"600"}},"累计已派发分红")],-1),ee={style:{width:"90%",margin:"10px auto","text-align":"center","font-size":"20px","font-weight":"600",color:"red"}},te={style:{width:"90%",margin:"10px auto",display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between"}},re=Object(a["createVNode"])("span",{style:{"font-size":"15px"}},"直推有效地址数:",-1),ae={style:{"font-size":"15px",color:"#0bba25"}},oe={key:0,style:{color:"green"}},ne={key:1,style:{color:"red"}},ce=Object(a["createVNode"])("span",{style:{"font-size":"20px",color:"gray"}},"|",-1),ie={style:{"font-size":"15px"}},se=Object(a["createVNode"])("span",null,"团队有效地址数:",-1),le={key:0,style:{color:"green"}},de={key:1,style:{color:"red"}},pe={style:{width:"70%",margin:"10px auto",display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center","font-size":"16px"}},ue=Object(a["createVNode"])("span",null,"我的节点分红",-1),fe=Object(a["createVNode"])("view",{style:{width:"90%",margin:"15px auto","font-size":"18px",color:"#000",display:"block","font-weight":"600"}},[Object(a["createVNode"])("span",null,"排名奖励")],-1),be={style:{width:"90%",margin:"10px auto",border:"1px solid #c8c8c8",display:"flex","flex-direction":"column",padding:"10px 0"}},xe=Object(a["createVNode"])("view",{style:{width:"90%",margin:"10px auto","text-align":"center",position:"relative"}},[Object(a["createVNode"])("span",{style:{"font-size":"20px","font-weight":"600"}},"你的当前排名为")],-1),ge={style:{width:"90%",margin:"10px auto","text-align":"center","font-size":"20px","font-weight":"600",color:"red"}},me={key:0},he={key:1},we={key:2},ye={key:3},je={style:{width:"70%",margin:"10px auto",display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center","font-size":"16px"}},Oe=Object(a["createVNode"])("span",null,"总待派发奖励",-1),ve={style:{color:"black"}},Ne={style:{width:"70%",margin:"10px auto",display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center","font-size":"16px"}},Ve={style:{color:"gray"}},Se={style:{width:"70%",margin:"10px auto",display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center","font-size":"16px"}},ke={style:{color:"gray"}},Be={style:{width:"70%",margin:"10px auto",display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center","font-size":"16px"}},Ae={style:{color:"gray"}};function Ce(e,t,r,Ce,Ee,ze){return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("span",{style:{color:"#7C3BED"},onClick:t[1]||(t[1]=function(e){return ze.back()})},"返回"),Ee.userAddress?(Object(a["openBlock"])(),Object(a["createBlock"])("div",c,[Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(Ee.userAddress.substring(0,10)+"..."+Ee.userAddress.substring(36)),1)])):Object(a["createCommentVNode"])("",!0),Ee.userAddress?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("div",{key:1,style:{width:"160px",height:"40px","border-radius":"10px","text-align":"center","line-height":"40px",background:"#7C3BED33",color:"#7C3BED"},onClick:t[2]||(t[2]=function(){return ze.connectBSC&&ze.connectBSC.apply(ze,arguments)})},[i]))]),Object(a["createVNode"])("view",s,[l,Object(a["createVNode"])("view",d,[Object(a["createVNode"])("view",p,[u,Object(a["createVNode"])("span",f,Object(a["toDisplayString"])(Ee.dataStat2[3]),1)]),Object(a["createVNode"])("view",b,[x,Object(a["createVNode"])("span",g,Object(a["toDisplayString"])(Ee.dataStat2[4]),1)])]),Object(a["createVNode"])("view",m,[Object(a["createVNode"])("view",h,[w,Object(a["createVNode"])("span",y,Object(a["toDisplayString"])(Ee.getrefMap2[3]),1)]),Object(a["createVNode"])("view",j,[O,Object(a["createVNode"])("span",v,Object(a["toDisplayString"])((Ee.dataStat2[3]-Ee.dataStat2[4]).toFixed(0)),1)])])]),Object(a["createVNode"])("view",N,[Object(a["createVNode"])("view",V,[Object(a["createVNode"])("span",S,Object(a["toDisplayString"])(Ee.tokenName)+"节点",1)]),Object(a["createVNode"])("view",k,[Object(a["createVNode"])("view",B,[A,Object(a["createVNode"])("span",C,Object(a["toDisplayString"])(Ee.dataStat2[7].toFixed(0)),1)]),Object(a["createVNode"])("view",E,[z,Object(a["createVNode"])("span",D,Object(a["toDisplayString"])((Ee.dataStat2[7]/Ee.price).toFixed(8))+"BNB",1)])]),Object(a["createVNode"])("view",M,[Object(a["createVNode"])("view",F,[W,Object(a["createVNode"])("span",R,Object(a["toDisplayString"])(Ee.dataStat[1].toFixed(0)),1)]),Object(a["createVNode"])("view",I,[P,Object(a["createVNode"])("span",_,Object(a["toDisplayString"])((Ee.dataStat[2]/Ee.price).toFixed(8))+"BNB",1)])])]),Object(a["createVNode"])("view",$,[T,Object(a["createVNode"])("view",L,[Object(a["createVNode"])("view",U,[K,Object(a["createVNode"])("span",q,"价值"+Object(a["toDisplayString"])((Ee.getrefMap[5]-Ee.getrefMap[6]).toFixed(8))+"BNB",1)]),Object(a["createVNode"])("view",G,[J,Object(a["createVNode"])("span",X,"价值"+Object(a["toDisplayString"])(Ee.getrefMap[6].toFixed(8))+"BNB",1)])])]),Object(a["createVNode"])("view",Y,[Object(a["createCommentVNode"])("",!0),Object(a["createCommentVNode"])("",!0),H,Object(a["createVNode"])("view",Q,[Z,Object(a["createVNode"])("view",ee,[Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(Ee.dataStat[7]),1)]),Object(a["createVNode"])("view",te,[Object(a["createVNode"])("view",null,[re,Object(a["createVNode"])("span",ae,[Ee.getrefMap[1]>=Ee.param[7]?(Object(a["openBlock"])(),Object(a["createBlock"])("span",oe,Object(a["toDisplayString"])(Ee.getrefMap[1]),1)):Object(a["createCommentVNode"])("",!0),Ee.getrefMap[1]<Ee.param[7]?(Object(a["openBlock"])(),Object(a["createBlock"])("span",ne,Object(a["toDisplayString"])(Ee.getrefMap[1]),1)):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("span",null,"/"+Object(a["toDisplayString"])(Ee.param[7]),1)])]),ce,Object(a["createVNode"])("view",ie,[se,Ee.getrefMap[2]>=Ee.param[8]?(Object(a["openBlock"])(),Object(a["createBlock"])("span",le,Object(a["toDisplayString"])(Ee.getrefMap[2]),1)):Object(a["createCommentVNode"])("",!0),Ee.getrefMap[2]<Ee.param[8]?(Object(a["openBlock"])(),Object(a["createBlock"])("span",de,Object(a["toDisplayString"])(Ee.getrefMap[2]),1)):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("span",null,"/"+Object(a["toDisplayString"])(Ee.param[8]),1)])]),Object(a["createVNode"])("view",pe,[ue,Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(Ee.getrefMap2[1]),1)])]),fe,Object(a["createVNode"])("view",be,[xe,Object(a["createVNode"])("view",ge,[Ee.userAddress==Ee.dataStat3[0].toLowerCase()?(Object(a["openBlock"])(),Object(a["createBlock"])("span",me,"第1名")):Object(a["createCommentVNode"])("",!0),Ee.userAddress==Ee.dataStat3[1].toLowerCase()?(Object(a["openBlock"])(),Object(a["createBlock"])("span",he,"第2名")):Object(a["createCommentVNode"])("",!0),Ee.userAddress==Ee.dataStat3[2].toLowerCase()?(Object(a["openBlock"])(),Object(a["createBlock"])("span",we,"第3名")):Object(a["createCommentVNode"])("",!0),Ee.userAddress!=Ee.dataStat3[0].toLowerCase()&&Ee.userAddress!=Ee.dataStat3[1].toLowerCase()&&Ee.userAddress!=Ee.dataStat3[2].toLowerCase()?(Object(a["openBlock"])(),Object(a["createBlock"])("span",ye,"未上榜")):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("view",je,[Oe,Object(a["createVNode"])("span",ve,Object(a["toDisplayString"])(Ee.dataStat3[4]),1)]),Object(a["createVNode"])("view",Ne,[Object(a["createVNode"])("span",Ve,"第1名直推燃烧: "+Object(a["toDisplayString"])(Ee.topAmount1)+",分50%",1)]),Object(a["createVNode"])("view",Se,[Object(a["createVNode"])("span",ke,"第2名直推燃烧: "+Object(a["toDisplayString"])(Ee.topAmount2)+",分30%",1)]),Object(a["createVNode"])("view",Be,[Object(a["createVNode"])("span",Ae,"第3名直推燃烧: "+Object(a["toDisplayString"])(Ee.topAmount3)+",分20%",1)])])])])}r("ac1f"),r("5319"),r("96cf");var Ee=r("1da1"),ze=r("99e5"),De=r.n(ze),Me=r("aee1"),Fe=r("f64c"),We={data:function(){return{defaultProps:{children:"children",label:"label"},contractAddress:"0xf4d4b3bee4cb5f8fa261a1483915c33bd7e65cc5",networkId:56,userAddress:"",dataStat:[0,0,0,0,0,0,0,0,0,0,0],tokenName:"Web319",mintAmount:0,price:0,dataStat2:[0,0,0,0,0,0,0,0],dataStat3:["0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000",0,0,0],getrefMap:["0x0000000000000000000000000000000000000000",0,0,0,0,0,0],getrefMap2:[0,0,0,0],param:[0,0,0,"0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000",0,0,0,0,0],exchangeAmount:0,data2:{},bnbBalance:0,topAmount1:0,topAmount2:0,topAmount3:0,web3:{}}},created:function(){this.connectBSC();var e=this;this.interval=setInterval((function(){e.loadData()}),2e4)},destroyed:function(){this.interval&&clearInterval(this.interval)},methods:{back:function(){this.$router.replace("/")},mint:function(){if(this.mintAmount)if(this.mintAmount>this.param[2]||this.mintAmount<this.param[1])Fe["a"].error("amount need "+this.param[1]+"-"+this.param[2]);else if(parseFloat(this.getrefMap[4])+parseFloat(this.mintAmount)>this.param[2])Fe["a"].error("mint max "+this.param[2]);else{var e=this.web3.utils.toWei(this.mintAmount,"ether");this.web3.eth.sendTransaction({from:this.userAddress,to:this.contractAddress,value:e},(function(e,t){e?(Fe["a"].error(e),console.error(e)):(Fe["a"].error("error:"+t),console.log(t))}))}else Fe["a"].error("must amount!")},max:function(){this.mintAmount=this.param[2]-this.getrefMap[4]},connectBSC:function(){var e=this;return Object(Ee["a"])(regeneratorRuntime.mark((function t(){var r,a,o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e,!window.ethereum){t.next=30;break}return t.prev=2,window.ethereum.on("accountsChanged",(function(e){console.log("change address:",e[0]),r.connectBSC()})),console.log(window.ethereum,"window.ethereum"),t.next=7,window.ethereum.request({method:"eth_requestAccounts"});case 7:return a=t.sent,console.log(a,"accounts"),e.web3=new De.a(window.ethereum),e.userAddress=a[0].toLowerCase(),t.next=13,e.web3.eth.getBalance(e.userAddress);case 13:return o=t.sent,e.bnbBalance=e.web3.utils.fromWei(o,"ether"),console.log(Me,"MyContractABI"),t.next=18,e.web3.eth.net.getId();case 18:n=t.sent,n!=e.networkId&&Fe["a"].error("err network，please select BNB chain"),e.contract=new e.web3.eth.Contract(Me,e.contractAddress),e.connected=!0,e.loadData(),t.next=28;break;case 25:t.prev=25,t.t0=t["catch"](2),console.error(t.t0);case 28:t.next=31;break;case 30:alert("Please install MetaMask or a BSC-compatible wallet to use this DApp.");case 31:case"end":return t.stop()}}),t,null,[[2,25]])})))()},loadData:function(){var e=this;return Object(Ee["a"])(regeneratorRuntime.mark((function t(){var r,a,o,n,c,i,s,l,d,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.contract){t.next=82;break}return t.prev=1,t.next=4,e.contract.methods.getStatData().call({});case 4:return r=t.sent,t.next=7,e.contract.methods.getStatData2().call({});case 7:return a=t.sent,t.next=10,e.contract.methods.getParam().call({});case 10:return o=t.sent,t.next=13,e.contract.methods.getrefMap(e.userAddress).call({});case 13:return n=t.sent,console.log(e.getrefMap,"this.getrefMap"),o[1]=e.web3.utils.fromWei(o[1],"ether"),o[2]=e.web3.utils.fromWei(o[2],"ether"),o[3]=o[3].toLowerCase(),o[4]=o[4].toLowerCase(),o[5]=e.web3.utils.fromWei(o[5],"ether"),o[6]=e.web3.utils.fromWei(o[6],"ether"),console.log(n[6],"getrefMap[6]"),n[6]=parseFloat(e.web3.utils.fromWei(n[6],"ether")),n[5]=parseFloat(e.web3.utils.fromWei(n[5],"ether")),n[4]=parseFloat(e.web3.utils.fromWei(n[4],"ether")),console.log(n[6],"getrefMap[6]"),r[1]=parseFloat(e.web3.utils.fromWei(r[1],"ether")),r[6]=parseFloat(e.web3.utils.fromWei(r[6],"ether")),r[7]=parseFloat(e.web3.utils.fromWei(r[7],"ether")),r[2]=parseFloat(e.web3.utils.fromWei(r[2],"ether")),a[0]=parseFloat(e.web3.utils.fromWei(a[0],"ether")),a[1]=parseFloat(e.web3.utils.fromWei(a[1],"ether")),a[0]&&a[1]&&(e.price=parseFloat(a[0])/parseFloat(a[1])),a[3]=parseFloat(e.web3.utils.fromWei(a[3],"ether")),a[4]=parseFloat(e.web3.utils.fromWei(a[4],"ether")),a[5]=parseFloat(e.web3.utils.fromWei(a[5],"ether")),a[6]=parseFloat(e.web3.utils.fromWei(a[6],"ether")),a[7]=parseFloat(e.web3.utils.fromWei(a[7],"ether")),e.dataStat=r,e.dataStat2=a,e.param=o,e.getrefMap=n,console.log(e.dataStat,"dataStat:"),console.log(e.dataStat2,"dataStat2:"),console.log(e.param,"param:"),t.next=47,e.contract.methods.getrefMap2(e.userAddress).call({});case 47:return c=t.sent,c[0]=parseFloat(e.web3.utils.fromWei(c[0],"ether")),c[1]=parseFloat(e.web3.utils.fromWei(c[1],"ether")),c[3]=parseFloat(e.web3.utils.fromWei(c[3],"ether")),t.next=53,e.contract.methods.getStatData3().call({});case 53:return i=t.sent,console.log(e.dataStat3,"dataStat3:"),i[3]=parseFloat(e.web3.utils.fromWei(i[3],"ether")),i[4]=parseFloat(e.web3.utils.fromWei(i[4],"ether")),t.next=59,e.contract.methods.refBurnAmount(i[0]).call({});case 59:return s=t.sent,t.next=62,e.contract.methods.refBurnAmount(i[1]).call({});case 62:return l=t.sent,t.next=65,e.contract.methods.refBurnAmount(i[2]).call({});case 65:return d=t.sent,e.topAmount1=e.web3.utils.fromWei(s,"ether"),e.topAmount2=e.web3.utils.fromWei(l,"ether"),e.topAmount3=e.web3.utils.fromWei(d,"ether"),t.next=71,e.contract.methods.dividAmountMap(e.userAddress).call({});case 71:p=t.sent,console.log(p,"dividAmountMap"),e.getrefMap2=c,e.dataStat3=i,t.next=80;break;case 77:t.prev=77,t.t0=t["catch"](1),console.error(t.t0);case 80:t.next=83;break;case 82:console.error("Contract not initialized.");case 83:case"end":return t.stop()}}),t,null,[[1,77]])})))()}}};r("44ba");We.render=Ce;t["default"]=We},"9f7f":function(e,t,r){"use strict";var a=r("d039");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var a=r("23e7"),o=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(e,t,r){"use strict";var a=r("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,r){"use strict";r("ac1f");var a=r("6eeb"),o=r("d039"),n=r("b622"),c=r("9263"),i=r("9112"),s=n("species"),l=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),p=n("replace"),u=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),f=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,p){var b=n(e),x=!o((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),g=x&&!o((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[b]=/./[b]),r.exec=function(){return t=!0,null},r[b](""),!t}));if(!x||!g||"replace"===e&&(!l||!d||u)||"split"===e&&!f){var m=/./[b],h=r(b,""[e],(function(e,t,r,a,o){return t.exec===c?x&&!o?{done:!0,value:m.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:u}),w=h[0],y=h[1];a(String.prototype,e,w),a(RegExp.prototype,b,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}p&&i(RegExp.prototype[b],"sham",!0)}}}]);
//# sourceMappingURL=chunk-0a5f334a.da1ea943.js.map