(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],u=0,h=[];u<o.length;u++)r=o[u],i[r]&&h.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},a=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"08f3a73a"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise(function(e,s){n=i[t]=[e,s]});e.push(n[2]=s);var a,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t),a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+s+": "+a+")");r.type=s,r.request=a,n[1](r)}i[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,l.appendChild(c)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var s=n("c21b"),i=n.n(s);i.a},"08a7":function(t,e,n){"use strict";n("0dc2");var s=n("c93e"),i=n("d61f"),a=n("4308");function r(t,e){let n=0;function s(t,i){if(e(t,n,i),t.subUnits){n+=1;for(const e of t.subUnits)s(e,t);n-=1}}s(t,null)}n.d(e,"a",function(){return l}),n.d(e,"b",function(){return h});const o="\n.o-line {\n  stroke: black;\n  stroke-width: 1pt;\n  fill:none;\n}\n\n.o-label {\n  text-anchor: middle;\n}\n\n.o-unit:hover {\n  font-weight: bold;\n}\n",l={symbolSize:32,maxLevels:0,debug:!1,connectorOffset:5};function c(t,e){const n=new i["Symbol"](t.sidc,{size:e.symbolSize}),s=n.getSize(),a=n.getAnchor(),r=n.getOctagonAnchor();return{size:s,anchor:a,octagonAnchor:r,symb:n,x:null,y:null,parent:null,node:t}}function u(t,e,n,s){const i=n-e.octagonAnchor.x,a=s-e.octagonAnchor.y;return t.attr("transform",`translate(${i}, ${a})`)}function d(t,e,n){const s=t.append("g").attr("class","o-unit");let i=s.append("rect").classed("o-rect",!0);s.append("g").html(e.symb.asSVG());s.append("text").attr("x",e.octagonAnchor.x).attr("dy","1.1em").attr("y",e.size.height).attr("class","o-label").text(e.node.name);const a=s.node().getBBox();return n.debug&&(i=i.attr("x",a.x).attr("y",a.y).attr("width",a.width).attr("height",a.height).style("fill","#ccc").style("fill-opacity",".3").style("stroke","#666").style("stroke-width","1.5px")),s}class h{constructor(t,e={}){this.rootNode=t,this.levels=[],this.options=Object(s["a"])({},l,e),t&&this._computeOrbatInfo(t)}cleanup(){if(this.svg){let t=this.svg.selectAll("g.o-unit");t.on("click",null)}}toSVG(t,e){this.width=t.width||600,this.height=t.height||600,e.innerHTML="";const n=Object(a["a"])(e),s=n.append("svg");this.svg=s;let i=this.options;s.attr("viewBox",`0 0 ${this.width} ${this.height}`),s.append("style").text(o),s.attr("width","100%"),s.attr("height","100%");s.append("rect").attr("fill","none").attr("stroke","red").attr("y","0").attr("x","0").attr("width",this.width).attr("height",this.height);const r=this.levels.length;return this.levels.forEach((t,e)=>{if(i.maxLevels&&e>=i.maxLevels)return;let n=t.reduce((t,e)=>t.concat(e),[]);const a=n.length;let o=0;t.forEach((t,n)=>{t.forEach(t=>{const n=(o+1)*this.width/(a+1),l=this.height*((e+1)/(r+1));t.x=n,t.y=l;const c=d(s,t,this.options);i.onClick&&c.on("click",e=>{i.onClick(t)});const h=c.node().getBBox();if(t.ly=l+(h.height-t.octagonAnchor.y),u(c,t,n,l),t.parent){t.parent.x;const e=l-(l-t.parent.y)/2,a=`M ${n}, ${l-t.octagonAnchor.y-i.connectorOffset} V ${e}`;s.append("path").attr("d",a).classed("o-line",!0)}o+=1});let l=t[0];if(!l.parent)return;let c=l.parent,h=t[t.length-1];const f=l.y-(l.y-c.y)/2,p=`M ${c.x}, ${c.ly+i.connectorOffset} V ${f}`;s.append("path").attr("d",p).classed("o-line",!0);const m=`M ${l.x}, ${f} H ${h.x}`;s.append("path").attr("d",m).classed("o-line",!0)})}),s.node()}_computeOrbatInfo(t){let e=[];const n={};r(t,(t,s,i)=>{const a=c(t,this.options),r=e[s]||[];i&&(a.parent=n[i.id]),n[t.id]=a,r.push(a),e[s]=r}),e.forEach((t,n)=>{let s=t.reduce((t,e,n,s)=>{return 0===n?(t.push([e]),t):s[n-1].parent===e.parent?(t[t.length-1].push(e),t):(t.push([e]),t)},[]);e[n]=s}),this.levels=e}}},"273c":function(t,e,n){"use strict";var s=n("276e"),i=n.n(s);i.a},"276e":function(t,e,n){},"2b07":function(t,e,n){},"357f":function(t,e,n){"use strict";var s=n("8814"),i=n.n(s);i.a},"3a62":function(t,e,n){},"79eb":function(t,e,n){"use strict";var s=n("8ebc"),i=n.n(s);i.a},8814:function(t,e,n){},"8ebc":function(t,e,n){},ab77:function(t,e,n){"use strict";var s=n("08a7");n("d65a");n.d(e,"DEFAULT_OPTIONS",function(){return s["a"]}),e["default"]=s["b"]},b491:function(t,e,n){"use strict";var s=n("2b07"),i=n.n(s);i.a},c21b:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var s=n("2b0e"),i=n("ce5b"),a=n.n(i),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-navigation-drawer",{staticClass:"mdrawer",attrs:{temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-toolbar",{staticClass:"transparent",attrs:{prominent:"",flat:""}},[n("v-toolbar-title",[t._v("ORBAT Chart Builder")])],1)],1)],1),n("v-content",[n("v-container",{staticClass:"py-0 px-0 mx-0 my-0",attrs:{fluid:"","fill-height":""}},[n("v-layout",[n("v-flex",{staticClass:"sidebar",staticStyle:{"z-index":"4"}},[n("v-toolbar-side-icon",{attrs:{dark:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-btn",{class:{"v-btn--active":t.orbatPanel},attrs:{flat:"",icon:"",dark:"",title:"Toggle ORBAT panel"},on:{click:function(e){t.orbatPanel=!t.orbatPanel}}},[t._v("\n            ORB\n          ")]),n("v-btn",{class:{"v-btn--active":t.settingsPanel},attrs:{flat:"",icon:"",dark:"",title:"Toggle settings panel"},on:{click:function(e){t.settingsPanel=!t.settingsPanel}}},[n("v-icon",[t._v("settings")])],1)],1),n("v-flex",[n("router-view")],1)],1)],1)],1)],1)},o=[],l=n("9ab4"),c=n("65d9"),u=n.n(c);let d=class extends s["default"]{get orbatPanel(){return this.$store.state.orbatPanel}set orbatPanel(t){this.$store.commit("setOrbatPanel",t)}get settingsPanel(){return this.$store.state.settingsPanel}set settingsPanel(t){this.$store.commit("setSettingsPanel",t)}};d=l["a"]([u.a],d);var h=n("cf68");const f=h;var p=s["default"].extend({mixins:[d],components:{},data:()=>({drawer:null}),created(){this.$store.commit("setOrbat",[f])}}),m=p,b=(n("034f"),n("2877")),v=Object(b["a"])(m,r,o,!1,null,null,null);v.options.__file="App.vue";var g,y,x=v.exports,O=n("8c4f"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{staticClass:"panel",staticStyle:{"z-index":"3"}},[n("SlidePanel",{attrs:{"header-title":"ORBAT"},on:{onSlide:t.onSlide},model:{value:t.orbatPanel,callback:function(e){t.orbatPanel=e},expression:"orbatPanel"}},[n("OrbatTree",{attrs:{rootUnits:t.orbat},on:{selectunit:t.onSelectUnit}})],1)],1),n("v-flex",{staticClass:"panel",staticStyle:{"z-index":"2"}},[n("SlidePanel",{attrs:{"header-title":"Settings"},model:{value:t.settingsPanel,callback:function(e){t.settingsPanel=e},expression:"settingsPanel"}},[n("v-container",{attrs:{fluid:""}},[n("v-text-field",{attrs:{type:"number",label:"Levels"},model:{value:t.settings.maxLevels,callback:function(e){t.$set(t.settings,"maxLevels",t._n(e))},expression:"settings.maxLevels"}}),n("v-text-field",{attrs:{label:"Symbol size",type:"number",min:"5"},model:{value:t.settings.symbolSize,callback:function(e){t.$set(t.settings,"symbolSize",t._n(e))},expression:"settings.symbolSize"}}),n("v-text-field",{attrs:{label:"Connector offset",type:"number",min:"0"},model:{value:t.settings.connectorOffset,callback:function(e){t.$set(t.settings,"connectorOffset",t._n(e))},expression:"settings.connectorOffset"}}),n("v-checkbox",{attrs:{label:"Debug"},model:{value:t.settings.debug,callback:function(e){t.$set(t.settings,"debug",e)},expression:"settings.debug"}})],1)],1)],1),n("v-flex",[n("OrbatChart",t._b({staticClass:"px-0 py-0 home",attrs:{unit:t.currentUnit},on:{unitclick:t.onUnitClick}},"OrbatChart",t.settings,!1))],1)],1)},w=[],C=n("60a3"),P=n("ab77"),_=s["default"].extend({name:"OrbatChart",props:{unit:{type:Object,required:!0},levels:{type:Number,default:3},debug:{type:Boolean,default:!1},symbolSize:{type:Number,default:32},connectorOffset:{type:Number,default:P["DEFAULT_OPTIONS"].connectorOffset}},data:()=>({resizeTimeout:null,width:600,height:600,isMounted:!1}),created(){},mounted(){this.isMounted=!0,this.width=this.$el.clientWidth,this.height=this.$el.clientHeight},destroyed(){this.orbchart&&this.orbchart.cleanup()},methods:{onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{},200)},onClick(t){this.$emit("unitclick",t)}},render(t){this.orbchart&&this.orbchart.cleanup();let e=new P["default"](this.unit,{maxLevels:this.levels,debug:this.debug,symbolSize:this.symbolSize,onClick:this.onClick,connectorOffset:this.connectorOffset});if(this.orbchart=e,this.isMounted){e.toSVG({width:1920,height:1080},this.$el)}return t("div",{attrs:{class:"orbat-chart"}})}}),U=_,k=(n("b491"),Object(b["a"])(U,g,y,!1,null,null,null));k.options.__file="OrbatChart.vue";var A=k.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spanel",class:{large:t.large}},[n("transition",{attrs:{name:"slide"},on:{"after-leave":t.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"slide"},[n("v-toolbar",{attrs:{dense:"",flat:""}},[t._t("header",[n("v-toolbar-title",[t._v(t._s(t.headerTitle))])]),n("v-spacer"),n("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){t.isActive=!1}}},[n("v-icon",[t._v("chevron_left")])],1)],2),n("div",{staticClass:"slide-content"},[t._t("default")],2)],1)])],1)},T=[],$={name:"slide-panel",data:()=>({isActive:!1}),beforeMount(){this.isActive=this.value},props:{value:{required:!1},headerTitle:String,large:Boolean},watch:{isActive(t){this.$emit("input",t)},value(t){this.isActive=t}},methods:{afterLeave(){this.$emit("onSlide")}}},j=$,B=(n("79eb"),Object(b["a"])(j,N,T,!1,null,"295853b8",null));B.options.__file="SlidePanel.vue";var z,M,L=B.exports,E=n("d61f"),G=n.n(E),D=s["default"].extend({name:"MilSymbol",props:{sidc:String,size:{type:Number,default:15},modifiers:{type:Object}},render(t){let e=new G.a.Symbol(this.sidc,{size:this.size,simpleStatusModifier:!0},this.modifiers||{});return t("span",{attrs:{class:"milsymbol"},domProps:{innerHTML:e.asSVG()}})}}),I=D,V=Object(b["a"])(I,z,M,!1,null,null,null);V.options.__file="MilSymbol.vue";var q=V.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-treeview",{attrs:{items:t.rootUnits,activatable:"","item-children":"subUnits"},on:{"update:active":t.onUnitClick},scopedSlots:t._u([{key:"prepend",fn:function(t){var e=t.item;t.open,t.leaf;return[n("MilSymbol",{attrs:{sidc:e.sidc}})]}},{key:"append",fn:function(e){var s=e.item;return[s.id==t.currentUnitKey?n("v-icon",{staticClass:"pr-3"},[t._v("\n      my_location\n    ")]):t._e()]}}])})},X=[];n("ac6a");let Z=class extends s["default"]{constructor(){super(...arguments),this.currentUnitKey=null}created(){this.unitMap=new Map,this.buildUnitMap(this.rootUnits),this.currentUnitKey=this.rootUnits[0].id}onUnitClick(t){t.length&&(this.currentUnitKey=t[0],this.$emit("selectunit",this.unitMap.get(t[0])))}buildUnitMap(t){for(const e of t)this.unitMap.set(e.id,e),e.subUnits&&e.subUnits.length&&this.buildUnitMap(e.subUnits)}};l["a"]([Object(C["b"])()],Z.prototype,"rootUnits",void 0),Z=l["a"]([u()({components:{MilSymbol:q}})],Z);var J=Z,R=J,H=(n("357f"),Object(b["a"])(R,Y,X,!1,null,"3c826ab3",null));H.options.__file="OrbatTree.vue";var W=H.exports;let F=class extends(Object(c["mixins"])(d)){created(){this.currentUnit=this.orbat[0]}get orbat(){return this.$store.state.orbat}get currentUnit(){return this.$store.state.currentUnit}get settings(){return this.$store.state.chartOptions}set currentUnit(t){this.$store.commit("setCurrentUnit",t)}onSlide(){}onUnitClick(t){console.log("Clicked",t.node.name)}onSelectUnit(t){this.currentUnit=t}};F=l["a"]([Object(C["a"])({components:{OrbatTree:W,OrbatChart:A,SlidePanel:L,MilSymbol:q},mixins:[d]})],F);var Q=F,K=Q,tt=(n("273c"),Object(b["a"])(K,S,w,!1,null,"11806b3e",null));tt.options.__file="MainView.vue";var et=tt.exports;s["default"].use(O["a"]);var nt=new O["a"]({routes:[{path:"/",name:"mainView",component:et},{path:"/about",name:"about",component:()=>n.e("about").then(n.bind(null,"f820"))}]}),st=n("c93e"),it=n("2f62");s["default"].use(it["a"]);const at={orbat:[],orbatPanel:!0,settingsPanel:!0,currentUnit:null,chartOptions:Object(st["a"])({},P["DEFAULT_OPTIONS"],{maxLevels:3})};var rt=new it["a"].Store({state:at,mutations:{setOrbatPanel(t,e){t.orbatPanel=e},setSettingsPanel(t,e){t.settingsPanel=e},setCurrentUnit(t,e){t.currentUnit=e},setOrbat(t,e){t.orbat=e},setChartOptions(t,e){t.chartOptions=e}},actions:{}});n("bf40"),n("3a62");s["default"].config.productionTip=!1,s["default"].use(a.a),new s["default"]({router:nt,store:rt,render:t=>t(x)}).$mount("#app")},cf68:function(t){t.exports={name:"TG 317.1 LG",sidc:"10031004001211000000",subUnits:[{name:"3 Cdo Bde",sidc:"10031000181211004600",subUnits:[{name:"40 Cdo",sidc:"10031000161211004600",state:[],id:"u0xGEGuOLzIcIirsioK0h",subUnits:[{name:"A",sidc:"10031000151211004600",id:"IZI2tUkYvhmVxShmC8~n~",state:[]},{name:"B",sidc:"10031000151211004600",id:"bJewqRWgkcxt3Lt53sz_c",state:[]},{name:"C",sidc:"10031000151211004600",id:"1ytAWaNFpcrYFLuGetut1",state:[]}]},{name:"42 Cdo",sidc:"10031000161211004600",state:[],id:"xcEG3htG0iZEuisD9IhGY",subUnits:[{name:"J",sidc:"10031000151211004600",id:"Yfj4qs4nUyG3DOLwzG8hY",state:[]},{name:"K",sidc:"10031000151211004600",id:"Od6fwg9FD5upCkXDIBalQ",state:[]},{name:"L",sidc:"10031000151211004600",id:"jdXcqNaLkNJxH97rVmUP_",state:[]}]},{name:"45 Cdo",sidc:"10031000161211004600",state:[],id:"0fm4O5tSvrVwjnv9~6ECy",subUnits:[{name:"X",sidc:"10031000151211004600",id:"7yI8rtwPIXI07Ag1Qyuem",state:[]},{name:"Y",sidc:"10031000151211004600",id:"QrSxdjL5eV~w1mJkRhUzH",state:[]},{name:"Z",sidc:"10031000151211004600",id:"~WAhIuR0DjOs6vxdNmTcn",state:[]}]},{name:"29 Cdo RA",sidc:"10031000161303000000",state:[],id:"qF9mX0pKVgtu7cVHjsXy5"},{name:"2 Para",sidc:"10031000161211000001",subUnits:[{name:"29 FB",sidc:"10031000151303000000",state:[],id:"vydX8pjg7sB1t37a5pBN1"},{name:"43 AD",sidc:"10031000141301020000",state:[],id:"peqkxwOqZXYkpSsx4KRCj"},{name:"A COY",sidc:"10031000151211000001",id:"wbPe8yifmaTgAxT2oD1Ff",state:[],shortName:"A"},{name:"B COY",sidc:"10031000151211000001",id:"rVxn2~0XEf8E7WeuPxUe6",state:[],shortName:"B"},{name:"C COY",sidc:"10031000151213000001",id:"vu2TRMUpnGI2klzs19BgZ",state:[],shortName:"C"},{name:"D COY",sidc:"10031000151211000001",id:"~78NfpA426AitI60JeWSa",state:[],shortName:"D"}],state:[],id:"QyZAnvqo5EXsjcNis_GSE"},{name:"3 Para",sidc:"10031000161211000001",subUnits:[{name:"A COY",sidc:"10031000151211000001",id:"INGH8mxuQMnN7LBZhXV_y",state:[],shortName:"A"},{name:"B COY",sidc:"10031000151211000001",id:"~8cVJd3hQNPr8exESXML9",state:[],shortName:"B"},{name:"C COY",sidc:"10031000151211000001",id:"bsMEfBAVOxvYu86qvP0Wq",state:[],shortName:"C"},{name:"D COY",sidc:"10031000151213000001",id:"uUlcvH2~mvagZr1QGoZcP",state:[],shortName:"D"}],state:[],id:"UlbrqVz6kysuUCzz7hSTu"}],state:[],id:"yeyNm2QTCh_yivrfpnv0N"},{name:"5 Inf Bde",sidc:"10031000181211000000",state:[],id:"LurqqM75Avg1_t0AjxUgi",subUnits:[{name:"2nd Bn Scots Guards",sidc:"10031000161211000000",id:"ZZhPAmDQzAT6JWhesPzQ2",state:[],shortName:"SG"},{name:"1st Bn Welsh Guards",sidc:"10031000161211000000",id:"gkcIswEB_vLPW_a3NCJzx",state:[],shortName:"WG"},{name:"1st Bn 7th Gurkha Rifles",sidc:"10031000161211000000",id:"ugu_gHIyde1iuwHYC34_k",state:[],shortName:"7 GR"},{name:"36 Engineer Regiment",sidc:"10031000161407000000",id:"kkfnLWpc2cK1uw2qX6XwB",state:[],shortName:"36 Eng"},{name:"63 AD Squadron",sidc:"10031000151301020000",id:"qhZBaHDgQYOvP4fCSqMXZ",state:[],shortName:"63 AD"},{name:"97 Field Battery",sidc:"10031000151303000000",id:"5yU8AvSZGcNDLjGpCZJJC",state:[],shortName:"97 FB"}]}],state:[],id:"Apc~4XNmoJDViPTPdcoJS"}},d65a:function(t,e){}});
//# sourceMappingURL=app.70182065.js.map