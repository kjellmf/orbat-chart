(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],u=0,h=[];u<r.length;u++)o=r[u],s[o]&&h.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},a=[];function o(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b79aebee"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,i){n=s[t]=[e,i]});e.push(n[2]=i);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(t),a=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+i+": "+a+")");o.type=i,o.request=a,n[1](o)}s[t]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"13be":function(t,e,n){},"3a62":function(t,e,n){},"79eb":function(t,e,n){"use strict";var i=n("83e5"),s=n.n(i);s.a},"83e5":function(t,e,n){},b491:function(t,e,n){"use strict";var i=n("e732"),s=n.n(i);s.a},cd49:function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),s=n("ce5b"),a=n.n(s),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-navigation-drawer",{staticClass:"mdrawer",attrs:{width:"400",temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-container",[n("h6",{staticClass:"title"},[t._v("ORBAT Chart Builder\n        "),n("v-chip",{attrs:{color:"warning"}},[t._v("alpha")])],1),n("p",{staticClass:"subheading"},[t._v("Work in progress ...")])])],1),n("v-content",[n("v-container",{staticClass:"py-0 px-0 mx-0 my-0",attrs:{fluid:"","fill-height":""}},[n("v-layout",[n("v-flex",{staticClass:"sidebar",staticStyle:{"z-index":"4"}},[n("v-toolbar-side-icon",{attrs:{dark:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-btn",{class:{"v-btn--active":t.orbatPanel},attrs:{flat:"",icon:"",dark:"",title:"Toggle ORBAT panel"},on:{click:function(e){t.orbatPanel=!t.orbatPanel}}},[t._v("\n            ORB\n          ")]),n("v-btn",{class:{"v-btn--active":t.settingsPanel},attrs:{flat:"",icon:"",dark:"",title:"Toggle settings panel"},on:{click:function(e){t.settingsPanel=!t.settingsPanel}}},[n("v-icon",[t._v("settings")])],1),n("router-view",{attrs:{name:"toolbar"}})],1),n("v-flex",[n("router-view")],1)],1)],1)],1)],1)},r=[],l=n("9ab4"),c=n("65d9"),u=n.n(c);let d=class extends i["default"]{get orbatPanel(){return this.$store.state.orbatPanel}set orbatPanel(t){this.$store.commit("setOrbatPanel",t)}get settingsPanel(){return this.$store.state.settingsPanel}set settingsPanel(t){this.$store.commit("setSettingsPanel",t)}get settings(){return this.$store.state.chartOptions}};d=l["a"]([u.a],d);var h=n("cf68");const p=h;var f,v,m,g,b=i["default"].extend({mixins:[d],components:{},data:()=>({drawer:null}),created(){this.$store.commit("setOrbat",[p])}}),y=b,x=n("2877"),L=Object(x["a"])(y,o,r,!1,null,null,null),w=L.exports,O=n("8c4f"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{staticClass:"panel",staticStyle:{"z-index":"3"}},[n("SlidePanel",{attrs:{"header-title":"ORBAT"},on:{onSlide:t.onSlide},model:{value:t.orbatPanel,callback:function(e){t.orbatPanel=e},expression:"orbatPanel"}},[n("OrbatTree",{attrs:{rootUnits:t.orbat},on:{selectunit:t.onSelectUnit}})],1)],1),n("v-flex",{staticClass:"panel",staticStyle:{"z-index":"2"}},[n("SlidePanel",{attrs:{"header-title":"Settings"},model:{value:t.settingsPanel,callback:function(e){t.settingsPanel=e},expression:"settingsPanel"}},[n("SettingsPanel")],1)],1),n("v-flex",{staticClass:"chart-panel"},[n("OrbatChart",t._b({staticClass:"px-0 py-0 home",attrs:{unit:t.currentUnit},on:{unitclick:t.onUnitClick}},"OrbatChart",t.settings,!1))],1)],1)},P=[],C=n("60a3"),_=(n("0dc2"),n("3835")),k=n("d61f"),U=n.n(k),T=n("4308");function A(t,e){let n=0;function i(t,s){if(e(t,n,s),t.subUnits){n+=1;for(const e of t.subUnits)i(e,t);n-=1}}i(t,null)}function E(t){return[].concat(...t)}function $(t){return t.reduce((t,e)=>t+e,0)}(function(t){t["Top"]="TOP",t["Bottom"]="BOTTOM"})(f||(f={})),function(t){t["Horizontal"]="HORIZONTAL",t["Stacked"]="STACKED",t["TreeLeft"]="TREE_LEFT",t["TreeRight"]="TREE_RIGHT"}(v||(v={})),function(t){t["Fixed"]="FIXED",t["EqualPadding"]="EQUAL_PADDING"}(m||(m={})),function(t){t["Top"]="TOP",t["Middle"]="MIDDLE",t["Bottom"]="BOTTOM"}(g||(g={}));const B={symbolSize:32,maxLevels:0,debug:!1,connectorOffset:5,orientation:f.Top,unitLevelDistance:m.Fixed,lastLevelLayout:v.Horizontal,verticalAlignment:g.Top,levelPadding:175},N=600,z=600,G=40,j=50,M=100,D="\n.o-line {\n  stroke: black;\n  stroke-width: 1pt;\n  fill:none;\n}\n\n.o-label {\n  text-anchor: middle;\n}\n\n.o-unit:hover {\n  font-weight: bold;\n}\n";function R(t,e){let n;const i={size:e.symbolSize};n=e.symbolGenerator?e.symbolGenerator(t.sidc,i):new k["Symbol"](t.sidc,i);const s=n.getSize(),a=n.getAnchor(),o=n.getOctagonAnchor();return{symbolBoxSize:s,anchor:a,octagonAnchor:o,symb:n,unit:t,x:0,y:0,ly:0,lx:0,rx:0}}function I(t,e,n,i){arguments.length>4&&void 0!==arguments[4]&&arguments[4];const s=n-e.octagonAnchor.x,a=i-e.octagonAnchor.y;return t.attr("transform",`translate(${s}, ${a})`)}function V(t,e){return t.append("g").attr("class",e)}function H(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#ccc";if(t){const n=t.node().getBBox();t.append("rect").lower().classed("dbg-rect",!0).attr("x",n.x).attr("y",n.y).attr("width",n.width).attr("height",n.height).style("fill",e).style("fill-opacity",".4").style("stroke","#666").style("stroke-width","1.5px")}}function q(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"red";t.append("circle").attr("cx",e).attr("cy",n).attr("r",4).attr("fill",i)}function X(t,e,n){const i=V(t,"o-unit");i.append("g").html(e.symb.asSVG()),i.append("text").attr("x",e.octagonAnchor.x).attr("dy","1.1em").attr("y",e.symbolBoxSize.height).attr("class","o-label").text(e.unit.name),n.onClick&&i.on("click",t=>{n.onClick(e)}),n.debug&&H(i);let s=e;return s.groupElement=i,s.boundingBox=i.node().getBBox(),s}function Y(t){return t===v.TreeRight||t===v.TreeLeft}function Z(t){const e=t.x,n=t.y;t.ly=n+(t.boundingBox.height-t.octagonAnchor.y),t.lx=e-t.boundingBox.width/2,t.rx=e+t.boundingBox.width/2}function J(t,e){q(t,e.x,e.y),q(t,e.x,e.ly),q(t,e.lx,e.y),q(t,e.rx,e.y)}class W{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.rootNode=t,this.groupedLevels=[],this.options=Object.assign({},B,e),t&&this._computeOrbatInfo(t)}cleanup(){if(this.svg){let t=this.svg.selectAll("g.o-unit");t.on("click",null)}}toSVG(t,e){this.width=t.width||N,this.height=t.height||z;let n=this._createSvgElement(e);return n.levels=this._createInitialNodeStructure(this.svg,this.groupedLevels),this._doNodeLayout(n),this._drawConnectors(n),this.svg.node()}_createSvgElement(t){t.innerHTML="";const e=Object(T["a"])(t).append("svg").attr("viewBox",`0 0 ${this.width} ${this.height}`).attr("class","orbat-chart");return e.append("style").text(D),e.attr("width","100%"),e.attr("height","100%"),this.options.debug&&e.append("rect").attr("fill","none").attr("stroke","red").attr("y","0").attr("x","0").attr("width",this.width).attr("height",this.height),this.svg=e,{groupElement:e,levels:[]}}_computeOrbatInfo(t){let e=[];const n={};function i(){let t=[];return e.forEach((e,n)=>{let i=e.reduce((t,e,n,i)=>{return 0===n?(t.push([e]),t):i[n-1].parent===e.parent?(t[t.length-1].push(e),t):(t.push([e]),t)},[]);t[n]=i}),t}A(t,(t,i,s)=>{const a=R(t,this.options),o=e[i]||[];s&&(a.parent=n[s.id]),n[t.id]=a,o.push(a),e[i]=o}),this.groupedLevels=i()}_createInitialNodeStructure(t,e){const n=this.options;let i=[];for(const a of e.entries()){var s=Object(_["a"])(a,2);const e=s[0],o=s[1];if(n.maxLevels&&e>=n.maxLevels)break;let r=V(t,"o-level"),l={groupElement:r,unitGroups:[]};i.push(l),o.forEach((t,e)=>{let i=V(r,"o-level-group");const s=t.map(t=>X(i,t,n));l.unitGroups.push({groupElement:i,units:s})})}return i}_doNodeLayout(t){const e=this.groupedLevels.length,n=this.options.maxLevels||e,i=this.height;let s=M;t.levels.forEach((t,a)=>{let o;this.options.verticalAlignment===g.Middle?o=i*((a+1)/(e+1)):(o=s,s+=this.options.levelPadding);let r=v.Horizontal;a===n-1&&(r=this.options.lastLevelLayout),this._renderLevel(t,o,r)})}_renderLevel(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v.Horizontal;const i=this.options,s=this.width,a=this.svg,o=t.unitGroups,r=E(o.map(t=>t.units)),l=r.length,c=$(r.map(t=>t.boundingBox.width)),u=s-c,d=u/l;switch(n){case v.Horizontal:h();break;case v.Stacked:case v.TreeRight:case v.TreeLeft:p(n);break;default:console.warn("Unhandled layout",n)}function h(){let n=0,o=-d/2;t.unitGroups.forEach((t,r)=>{for(const c of t.units){let t;t=i.unitLevelDistance==m.EqualPadding?o+c.boundingBox.width/2+d:(n+1)*s/(l+1),c.x=t,c.y=e,Z(c),o=c.x+c.boundingBox.width/2,I(c.groupElement,c,t,e,i.debug),i.debug&&J(a,c),n+=1}i.debug&&H(t.groupElement,"yellow")})}function p(n){const o=t.unitGroups.length;t.unitGroups.forEach((t,r)=>{let l=e;for(const e of t.units.entries()){var c=Object(_["a"])(e,2);c[0];const t=c[1];let u=t.parent?t.parent.x:(r+1)*s/(o+1);n===v.TreeRight?u+=G:n===v.TreeLeft&&(u-=G);const d=l;t.x=u,t.y=d,Z(t),l=t.ly+j,I(t.groupElement,t,u,d,i.debug),i.debug&&J(a,t)}i.debug&&H(t.groupElement,"yellow")})}i.debug&&H(t.groupElement)}_drawConnectors(t){const e=this.options.maxLevels||t.levels.length;t.levels.forEach((t,n)=>{t.unitGroups.forEach((t,i)=>{let s=n===e-1?this.options.lastLevelLayout:v.Horizontal;t.units.forEach((t,e)=>{s===v.Stacked&&e>0||Y(s)||this._drawUnitLevelGroupConnectorPath(t)}),Y(s)?this._drawUnitLevelTreeLeftRightConnectorPath(t.units,s):this._drawUnitLevelConnectorPath(t.units)})})}_drawUnitLevelGroupConnectorPath(t){const e=t.x,n=t.y;if(t.parent){const i=n-(n-t.parent.y)/2,s=`M ${e}, ${n-t.octagonAnchor.y-this.options.connectorOffset} V ${i}`;this.svg.append("path").attr("d",s).classed("o-line",!0)}}_drawUnitLevelConnectorPath(t){let e=t[0],n=this.svg,i=e.parent;if(!i)return;let s=t[t.length-1];const a=e.y-(e.y-i.y)/2,o=`M ${i.x}, ${i.ly+this.options.connectorOffset} V ${a}`;n.append("path").attr("d",o).classed("o-line",!0);const r=`M ${e.x}, ${a} H ${s.x}`;n.append("path").attr("d",r).classed("o-line",!0)}_drawUnitLevelTreeLeftRightConnectorPath(t,e){let n=this.svg,i=t[t.length-1],s=i.parent;if(!s)return;const a=`M ${s.x}, ${s.ly+this.options.connectorOffset} V ${i.y}`;n.append("path").attr("d",a).classed("o-line",!0);for(const o of t){let t;t=e===v.TreeRight?`M ${o.lx-this.options.connectorOffset}, ${o.y}  H ${s.x}`:`M ${o.rx+this.options.connectorOffset}, ${o.y}  H ${s.x}`,n.append("path").attr("d",t).classed("o-line",!0)}}}var F,Q,K,tt,et=W,nt=i["default"].extend({name:"OrbatChart",props:{unit:{type:Object,required:!0},maxLevels:{type:Number,default:3},debug:{type:Boolean,default:!1},symbolSize:{type:Number,default:32},connectorOffset:{type:Number,default:B.connectorOffset},orientation:{type:String,default:B.orientation},unitLevelDistance:{type:String,default:B.unitLevelDistance},lastLevelLayout:{type:String,default:v.Stacked},levelPadding:{type:Number,default:B.levelPadding}},data:()=>({resizeTimeout:null,width:600,height:600,isMounted:!1}),created(){},mounted(){this.isMounted=!0,this.width=this.$el.clientWidth,this.height=this.$el.clientHeight},destroyed(){this.orbchart&&this.orbchart.cleanup()},methods:{onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{},200)},onClick(t){this.$emit("unitclick",t)}},render(t){this.orbchart&&this.orbchart.cleanup();let e=new et(this.unit,{maxLevels:this.maxLevels,debug:this.debug,symbolSize:this.symbolSize,onClick:this.onClick,connectorOffset:this.connectorOffset,orientation:this.orientation,unitLevelDistance:this.unitLevelDistance,lastLevelLayout:this.lastLevelLayout,levelPadding:this.levelPadding});if(this.orbchart=e,this.isMounted){e.toSVG({width:1920,height:1080},this.$el)}return t("div",{attrs:{class:"orbat-chart"}})}}),it=nt,st=(n("b491"),Object(x["a"])(it,F,Q,!1,null,null,null)),at=st.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spanel",class:{large:t.large}},[n("transition",{attrs:{name:"slide"},on:{"after-leave":t.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"slide"},[n("v-toolbar",{attrs:{dense:"",flat:""}},[t._t("header",[n("v-toolbar-title",[t._v(t._s(t.headerTitle))])]),n("v-spacer"),n("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){t.isActive=!1}}},[n("v-icon",[t._v("chevron_left")])],1)],2),n("div",{staticClass:"slide-content"},[t._t("default")],2)],1)])],1)},rt=[],lt={name:"slide-panel",data:()=>({isActive:!1}),beforeMount(){this.isActive=this.value},props:{value:{required:!1},headerTitle:String,large:Boolean},watch:{isActive(t){this.$emit("input",t)},value(t){this.isActive=t}},methods:{afterLeave(){this.$emit("onSlide")}}},ct=lt,ut=(n("79eb"),Object(x["a"])(ct,ot,rt,!1,null,"295853b8",null)),dt=ut.exports,ht=i["default"].extend({name:"MilSymbol",props:{sidc:String,size:{type:Number,default:15},modifiers:{type:Object}},render(t){let e=new U.a.Symbol(this.sidc,{size:this.size,simpleStatusModifier:!0},this.modifiers||{});return t("span",{attrs:{class:"milsymbol"},domProps:{innerHTML:e.asSVG()}})}}),pt=ht,ft=Object(x["a"])(pt,K,tt,!1,null,null,null),vt=ft.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-treeview",{attrs:{items:t.rootUnits,activatable:"","item-children":"subUnits"},on:{"update:active":t.onUnitClick},scopedSlots:t._u([{key:"prepend",fn:function(t){var e=t.item;t.open,t.leaf;return[n("MilSymbol",{attrs:{sidc:e.sidc}})]}},{key:"append",fn:function(e){var i=e.item;return[i.id==t.currentUnitKey?n("v-icon",{staticClass:"pr-3"},[t._v("\n      my_location\n    ")]):t._e()]}}])})},gt=[];n("ac6a");let bt=class extends i["default"]{constructor(){super(...arguments),this.currentUnitKey=null}created(){this.unitMap=new Map,this.buildUnitMap(this.rootUnits),this.currentUnitKey=this.rootUnits[0].id}onUnitClick(t){t.length&&(this.currentUnitKey=t[0],this.$emit("selectunit",this.unitMap.get(t[0])))}buildUnitMap(t){for(const e of t)this.unitMap.set(e.id,e),e.subUnits&&e.subUnits.length&&this.buildUnitMap(e.subUnits)}};l["a"]([Object(C["b"])()],bt.prototype,"rootUnits",void 0),bt=l["a"]([u()({components:{MilSymbol:vt}})],bt);var yt=bt,xt=yt,Lt=Object(x["a"])(xt,mt,gt,!1,null,"10af6aec",null),wt=Lt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-text-field",{attrs:{type:"number",label:"Visible levels"},model:{value:t.settings.maxLevels,callback:function(e){t.$set(t.settings,"maxLevels",t._n(e))},expression:"settings.maxLevels"}}),n("v-text-field",{attrs:{label:"Symbol size",type:"number",min:"5"},model:{value:t.settings.symbolSize,callback:function(e){t.$set(t.settings,"symbolSize",t._n(e))},expression:"settings.symbolSize"}}),n("v-text-field",{attrs:{label:"Connector offset",type:"number",min:"0"},model:{value:t.settings.connectorOffset,callback:function(e){t.$set(t.settings,"connectorOffset",t._n(e))},expression:"settings.connectorOffset"}}),n("v-text-field",{attrs:{label:"Level padding",type:"number",min:"0"},model:{value:t.settings.levelPadding,callback:function(e){t.$set(t.settings,"levelPadding",t._n(e))},expression:"settings.levelPadding"}}),n("v-select",{attrs:{label:"Unit spacing",items:t.unitLevelDistance},model:{value:t.settings.unitLevelDistance,callback:function(e){t.$set(t.settings,"unitLevelDistance",e)},expression:"settings.unitLevelDistance"}}),n("v-select",{attrs:{label:"Last level layout",items:t.lastLevelLayout},model:{value:t.settings.lastLevelLayout,callback:function(e){t.$set(t.settings,"lastLevelLayout",e)},expression:"settings.lastLevelLayout"}}),n("v-checkbox",{attrs:{label:"Debug mode"},model:{value:t.settings.debug,callback:function(e){t.$set(t.settings,"debug",e)},expression:"settings.debug"}})],1)},St=[];function Pt(t){return Object.entries(t).map(t=>{let e=Object(_["a"])(t,2),n=e[0],i=e[1];return{text:n,value:i}})}var Ct=i["default"].extend({mixins:[d],name:"SettingsPanel",computed:{orientation(){return Pt(f)},unitLevelDistance(){return Pt(m)},lastLevelLayout(){return Pt(v)}}}),_t=Ct,kt=Object(x["a"])(_t,Ot,St,!1,null,null,null),Ut=kt.exports;let Tt=class extends(Object(c["mixins"])(d)){created(){this.currentUnit=this.orbat[0]}get orbat(){return this.$store.state.orbat}get currentUnit(){return this.$store.state.currentUnit}set currentUnit(t){this.$store.commit("setCurrentUnit",t)}onSlide(){}onUnitClick(t){console.log("Clicked",t.unit.name)}onSelectUnit(t){this.currentUnit=t}};Tt=l["a"]([Object(C["a"])({components:{SettingsPanel:Ut,OrbatTree:wt,OrbatChart:at,SlidePanel:dt,MilSymbol:vt}})],Tt);var At=Tt,Et=At,$t=(n("d6bf"),Object(x["a"])(Et,S,P,!1,null,"01c26c37",null)),Bt=$t.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{attrs:{flat:"",icon:"",dark:"",title:"Download as SVG"},on:{click:t.downloadAsSVG}},[n("v-icon",[t._v("save_alt")])],1)],1)},zt=[],Gt=n("21a6"),jt={name:"MainViewToolbar",methods:{downloadAsSVG(){let t=document.getElementsByClassName("orbat-chart")[0];Gt["saveAs"](new Blob([(new XMLSerializer).serializeToString(t)],{type:"image/svg+xml"}),"orbat-chart.svg")}}},Mt=jt,Dt=Object(x["a"])(Mt,Nt,zt,!1,null,"6b667b64",null),Rt=Dt.exports;i["default"].use(O["a"]);var It=new O["a"]({routes:[{path:"/",name:"mainView",components:{default:Bt,toolbar:Rt}},{path:"/about",name:"about",component:()=>n.e("about").then(n.bind(null,"f820"))}]}),Vt=n("be94"),Ht=n("2f62");i["default"].use(Ht["a"]);const qt={orbat:[],orbatPanel:!0,settingsPanel:!0,currentUnit:null,chartOptions:Object(Vt["a"])({},B,{maxLevels:4,lastLevelLayout:v.TreeRight})};var Xt=new Ht["a"].Store({state:qt,mutations:{setOrbatPanel(t,e){t.orbatPanel=e},setSettingsPanel(t,e){t.settingsPanel=e},setCurrentUnit(t,e){t.currentUnit=e},setOrbat(t,e){t.orbat=e},setChartOptions(t,e){t.chartOptions=e}},actions:{}});n("bf40"),n("3a62");i["default"].config.productionTip=!1,i["default"].use(a.a),new i["default"]({router:It,store:Xt,render:t=>t(w)}).$mount("#app")},cf68:function(t){t.exports={name:"TG 317.1 LG",sidc:"10031004001211000000",subUnits:[{name:"3 Cdo Bde",sidc:"10031000181211004600",subUnits:[{name:"40 Cdo",sidc:"10031000161211004600",state:[],id:"u0xGEGuOLzIcIirsioK0h",subUnits:[{name:"A",sidc:"10031000151211004600",id:"IZI2tUkYvhmVxShmC8~n~",state:[]},{name:"B",sidc:"10031000151211004600",id:"bJewqRWgkcxt3Lt53sz_c",state:[]},{name:"C",sidc:"10031000151211004600",id:"1ytAWaNFpcrYFLuGetut1",state:[]}]},{name:"42 Cdo",sidc:"10031000161211004600",state:[],id:"xcEG3htG0iZEuisD9IhGY",subUnits:[{name:"J",sidc:"10031000151211004600",id:"Yfj4qs4nUyG3DOLwzG8hY",state:[]},{name:"K",sidc:"10031000151211004600",id:"Od6fwg9FD5upCkXDIBalQ",state:[]},{name:"L",sidc:"10031000151211004600",id:"jdXcqNaLkNJxH97rVmUP_",state:[]}]},{name:"45 Cdo",sidc:"10031000161211004600",state:[],id:"0fm4O5tSvrVwjnv9~6ECy",subUnits:[{name:"X",sidc:"10031000151211004600",id:"7yI8rtwPIXI07Ag1Qyuem",state:[]},{name:"Y",sidc:"10031000151211004600",id:"QrSxdjL5eV~w1mJkRhUzH",state:[]},{name:"Z",sidc:"10031000151211004600",id:"~WAhIuR0DjOs6vxdNmTcn",state:[]}]},{name:"29 Cdo RA",sidc:"10031000161303000000",state:[],id:"qF9mX0pKVgtu7cVHjsXy5"},{name:"2 Para",sidc:"10031000161211000001",subUnits:[{name:"29 FB",sidc:"10031000151303000000",state:[],id:"vydX8pjg7sB1t37a5pBN1"},{name:"43 AD",sidc:"10031000141301020000",state:[],id:"peqkxwOqZXYkpSsx4KRCj"},{name:"A COY",sidc:"10031000151211000001",id:"wbPe8yifmaTgAxT2oD1Ff",state:[],shortName:"A"},{name:"B COY",sidc:"10031000151211000001",id:"rVxn2~0XEf8E7WeuPxUe6",state:[],shortName:"B"},{name:"C COY",sidc:"10031000151213000001",id:"vu2TRMUpnGI2klzs19BgZ",state:[],shortName:"C"},{name:"D COY",sidc:"10031000151211000001",id:"~78NfpA426AitI60JeWSa",state:[],shortName:"D"}],state:[],id:"QyZAnvqo5EXsjcNis_GSE"},{name:"3 Para",sidc:"10031000161211000001",subUnits:[{name:"A COY",sidc:"10031000151211000001",id:"INGH8mxuQMnN7LBZhXV_y",state:[],shortName:"A"},{name:"B COY",sidc:"10031000151211000001",id:"~8cVJd3hQNPr8exESXML9",state:[],shortName:"B"},{name:"C COY",sidc:"10031000151211000001",id:"bsMEfBAVOxvYu86qvP0Wq",state:[],shortName:"C"},{name:"D COY",sidc:"10031000151213000001",id:"uUlcvH2~mvagZr1QGoZcP",state:[],shortName:"D"}],state:[],id:"UlbrqVz6kysuUCzz7hSTu"}],state:[],id:"yeyNm2QTCh_yivrfpnv0N"},{name:"5 Inf Bde",sidc:"10031000181211000000",state:[],id:"LurqqM75Avg1_t0AjxUgi",subUnits:[{name:"2nd Bn Scots Guards",sidc:"10031000161211000000",id:"ZZhPAmDQzAT6JWhesPzQ2",state:[],shortName:"SG"},{name:"1st Bn Welsh Guards",sidc:"10031000161211000000",id:"gkcIswEB_vLPW_a3NCJzx",state:[],shortName:"WG"},{name:"1st Bn 7th Gurkha Rifles",sidc:"10031000161211000000",id:"ugu_gHIyde1iuwHYC34_k",state:[],shortName:"7 GR"},{name:"36 Engineer Regiment",sidc:"10031000161407000000",id:"kkfnLWpc2cK1uw2qX6XwB",state:[],shortName:"36 Eng"},{name:"63 AD Squadron",sidc:"10031000151301020000",id:"qhZBaHDgQYOvP4fCSqMXZ",state:[],shortName:"63 AD"},{name:"97 Field Battery",sidc:"10031000151303000000",id:"5yU8AvSZGcNDLjGpCZJJC",state:[],shortName:"97 FB"}]}],state:[],id:"Apc~4XNmoJDViPTPdcoJS"}},d6bf:function(t,e,n){"use strict";var i=n("13be"),s=n.n(i);s.a},e732:function(t,e,n){}});
//# sourceMappingURL=app.a73506de.js.map