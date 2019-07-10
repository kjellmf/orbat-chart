(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)o=r[u],s[o]&&p.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},a=[];function o(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b79aebee"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,i){n=s[t]=[e,i]});e.push(n[2]=i);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(t),a=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+i+": "+a+")");o.type=i,o.request=a,n[1](o)}s[t]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"3a62":function(t,e,n){},"79eb":function(t,e,n){"use strict";var i=n("83e5"),s=n.n(i);s.a},"83e5":function(t,e,n){},"8e8f":function(t,e,n){},a630:function(t,e,n){"use strict";var i=n("8e8f"),s=n.n(i);s.a},b491:function(t,e,n){"use strict";var i=n("e732"),s=n.n(i);s.a},cd49:function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),s=n("ce5b"),a=n.n(s),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-navigation-drawer",{staticClass:"mdrawer",attrs:{width:"400",temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-container",[n("h6",{staticClass:"title"},[t._v("ORBAT Chart Builder\n        "),n("v-chip",{attrs:{color:"warning"}},[t._v("alpha")])],1),n("p",{staticClass:"subheading"},[t._v("Work in progress ...")])])],1),n("v-content",[n("v-container",{staticClass:"py-0 px-0 mx-0 my-0",attrs:{fluid:"","fill-height":""}},[n("v-layout",[n("v-flex",{staticClass:"sidebar",staticStyle:{"z-index":"4"}},[n("v-toolbar-side-icon",{attrs:{dark:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-btn",{class:{"v-btn--active":t.orbatPanel},attrs:{flat:"",icon:"",dark:"",title:"Toggle ORBAT panel"},on:{click:function(e){t.orbatPanel=!t.orbatPanel}}},[t._v("\n            ORB\n          ")]),n("v-btn",{class:{"v-btn--active":t.settingsPanel},attrs:{flat:"",icon:"",dark:"",title:"Toggle settings panel"},on:{click:function(e){t.settingsPanel=!t.settingsPanel}}},[n("v-icon",[t._v("settings")])],1),n("router-view",{attrs:{name:"toolbar"}})],1),n("v-flex",[n("router-view")],1)],1)],1)],1)],1)},r=[],l=n("9ab4"),c=n("65d9"),u=n.n(c);let d=class extends i["default"]{get orbatPanel(){return this.$store.state.ui.orbatPanel}set orbatPanel(t){this.orbatPanel!==t&&this.$store.commit("setOrbatPanel",t)}get settingsPanel(){return this.$store.state.ui.settingsPanel}set settingsPanel(t){this.settingsPanel!==t&&this.$store.commit("setSettingsPanel",t)}get settings(){return this.$store.state.chart.chartOptions}};d=l["a"]([u.a],d);var p=n("cf68");const h=p;var f,v,b,m,g=i["default"].extend({mixins:[d],components:{},data:()=>({drawer:null}),created(){this.$store.commit("setOrbat",[h])}}),O=g,y=n("2877"),x=Object(y["a"])(O,o,r,!1,null,null,null),L=x.exports,w=n("8c4f"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{staticClass:"panel",staticStyle:{"z-index":"3"}},[n("SlidePanel",{attrs:{"header-title":"ORBAT"},on:{onSlide:t.onSlide},model:{value:t.orbatPanel,callback:function(e){t.orbatPanel=e},expression:"orbatPanel"}},[n("OrbatTree",{attrs:{rootUnits:t.orbat},on:{selectunit:t.onSelectUnit}})],1)],1),n("v-flex",{staticClass:"panel",staticStyle:{"z-index":"2"}},[n("SlidePanel",{attrs:{"header-title":"Settings"},model:{value:t.settingsPanel,callback:function(e){t.settingsPanel=e},expression:"settingsPanel"}},[n("SettingsPanel")],1)],1),n("v-flex",{staticClass:"chart-panel"},[n("OrbatChart",t._b({staticClass:"px-0 py-0 home",attrs:{unit:t.currentUnit,specificOptions:t.specificOptions},on:{unitclick:t.onUnitClick}},"OrbatChart",t.settings,!1))],1)],1)},C=[],T=n("60a3"),k=(n("0dc2"),n("3835")),_=n("be94"),P=n("d61f"),U=n.n(P),j=n("4308");function E(t,e){let n=0;function i(t,s){if(e(t,n,s),t.subUnits){n+=1;for(const e of t.subUnits)i(e,t);n-=1}}i(t,null)}function G(t){return[].concat(...t)}function A(t){return t.reduce((t,e)=>t+e,0)}(function(t){t["Top"]="TOP",t["Bottom"]="BOTTOM"})(f||(f={})),function(t){t["Horizontal"]="HORIZONTAL",t["Stacked"]="STACKED",t["Tree"]="TREE",t["TreeLeft"]="TREE_LEFT",t["TreeRight"]="TREE_RIGHT"}(v||(v={})),function(t){t["Fixed"]="FIXED",t["EqualPadding"]="EQUAL_PADDING"}(b||(b={})),function(t){t["Top"]="TOP",t["Middle"]="MIDDLE",t["Bottom"]="BOTTOM"}(m||(m={}));const N=600,B=600,$=40,M=50,z=100,D={symbolSize:32,maxLevels:0,debug:!1,connectorOffset:5,orientation:f.Top,unitLevelDistance:b.Fixed,lastLevelLayout:v.Horizontal,verticalAlignment:m.Top,levelPadding:175,treeOffset:$,stackedOffset:M},R="\n.o-line {\n  stroke: black;\n  stroke-width: 1pt;\n  fill:none;\n}\n\n.o-label {\n  text-anchor: middle;\n}\n\n.o-unit:hover {\n  font-weight: bold;\n}\n";function V(t,e){let n;const i={size:e.symbolSize};n=e.symbolGenerator?e.symbolGenerator(t.unit.sidc,i):new P["Symbol"](t.unit.sidc,i);let s=t;return s.symbolBoxSize=n.getSize(),s.anchor=n.getAnchor(),s.octagonAnchor=n.getOctagonAnchor(),s.symb=n,s.x=0,s.y=0,s.lx=0,s.rx=0,s.ly=0,s}function I(t,e,n,i){arguments.length>4&&void 0!==arguments[4]&&arguments[4];const s=n-e.octagonAnchor.x,a=i-e.octagonAnchor.y;return t.attr("transform",`translate(${s}, ${a})`)}function H(t,e){return t.append("g").attr("class",e)}function q(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#ccc";if(t){const n=t.node().getBBox();t.append("rect").lower().classed("dbg-rect",!0).attr("x",n.x).attr("y",n.y).attr("width",n.width).attr("height",n.height).style("fill",e).style("fill-opacity",".4").style("stroke","#666").style("stroke-width","1.5px")}}function X(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"red";t.append("circle").attr("cx",e).attr("cy",n).attr("r",4).attr("fill",i)}function Y(t,e,n){const i=H(t,"o-unit");i.append("g").html(e.symb.asSVG()),i.append("text").attr("x",e.octagonAnchor.x).attr("dy","1.1em").attr("y",e.symbolBoxSize.height).attr("class","o-label").text(e.unit.name),n.onClick&&i.on("click",t=>{n.onClick(e)}),n.debug&&q(i);let s=e;return s.groupElement=i,s.boundingBox=i.node().getBBox(),s}function Z(t){return t===v.TreeRight||t===v.TreeLeft}function J(t){return t===v.TreeRight||t===v.TreeLeft||t===v.Tree}function W(t){return t===v.TreeRight||t===v.TreeLeft||t===v.Tree||t===v.Stacked}function F(t){const e=t.x,n=t.y;t.ly=n+(t.boundingBox.height-t.octagonAnchor.y),t.lx=e-t.boundingBox.width/2,t.rx=e+t.boundingBox.width/2}function Q(t,e){X(t,e.x,e.y),X(t,e.x,e.ly),X(t,e.lx,e.y),X(t,e.rx,e.y)}class K{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.rootNode=t,this.specificOptions=n,this.groupedLevels=[],this.options=Object(_["a"])({},D,e),t&&this._computeOrbatInfo(t)}cleanup(){if(this.svg){let t=this.svg.selectAll("g.o-unit");t.on("click",null)}}toSVG(t,e){this.width=t.width||N,this.height=t.height||B;let n=this._createSvgElement(e);return n.levels=this._createInitialNodeStructure(this.svg,this.groupedLevels),this._doNodeLayout(n),this._drawConnectors(n),this.svg.node()}_createSvgElement(t){t.innerHTML="";const e=Object(j["a"])(t).append("svg").attr("viewBox",`0 0 ${this.width} ${this.height}`).attr("class","orbat-chart");return e.append("style").text(R),e.attr("width","100%"),e.attr("height","100%"),this.options.debug&&e.append("rect").attr("fill","none").attr("stroke","red").attr("y","0").attr("x","0").attr("width",this.width).attr("height",this.height),this.svg=e,{groupElement:e,levels:[]}}_computeOrbatInfo(t){let e=[];const n={};function i(){let t=[];return e.forEach((e,n)=>{let i=e.reduce((t,e,n,i)=>{return 0===n?(t.push([e]),t):i[n-1].parent===e.parent?(t[t.length-1].push(e),t):(t.push([e]),t)},[]);t[n]=i}),t}E(t,(t,i,s)=>{const a={unit:t},o=e[i]||[];s&&(a.parent=n[s.id]),n[t.id]=a,o.push(a),e[i]=o}),this.groupedLevels=i()}_createInitialNodeStructure(t,e){const n=this.options;let i=[];for(const a of e.entries()){var s=Object(k["a"])(a,2);const e=s[0],o=s[1];if(n.maxLevels&&e>=n.maxLevels)break;let r={};this.specificOptions.level&&this.specificOptions.level[e]&&(r=this.specificOptions.level[e]||{});let l=H(t,"o-level"),c={groupElement:l,unitGroups:[],options:r};i.push(c);let u=Object(_["a"])({},n,r);o.forEach((t,e)=>{let n=t[0].parent,i={};n&&this.specificOptions&&this.specificOptions.levelGroup&&(i=this.specificOptions.levelGroup[n.unit.id]||{});let s=Object(_["a"])({},u,i),a=H(l,"o-level-group");const o=t.map(t=>{let e=this.specificOptions&&this.specificOptions.unit&&this.specificOptions.unit[t.unit.id]||{},n=Object(_["a"])({},s,e),i=Y(a,V(t,n),n);return i.options=e,i});c.unitGroups.push({groupElement:a,units:o,options:i})})}return i}_doNodeLayout(t){const e=this.groupedLevels.length,n=this.options.maxLevels||e,i=this.height;let s=z;t.levels.forEach((t,a)=>{let o;this.options.verticalAlignment===m.Middle?o=i*((a+1)/(e+1)):(o=s,s+=this.options.levelPadding);let r=v.Horizontal;a===n-1&&(r=this.options.lastLevelLayout),this._renderLevel(t,o,r)})}_renderLevel(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v.Horizontal;const i=Object(_["a"])({},this.options,t.options),s=this.width,a=this.svg,o=t.unitGroups,r=G(o.map(t=>t.units)),l=r.length,c=A(r.map(t=>t.boundingBox.width)),u=s-c,d=u/l;switch(n){case v.Horizontal:p();break;case v.Tree:h();break;case v.Stacked:case v.TreeRight:case v.TreeLeft:f(n);break;default:console.warn("Unhandled layout",n)}function p(){let n=0,o=-d/2;t.unitGroups.forEach((t,r)=>{let c=Object(_["a"])({},i,t.options);for(const i of t.units){let t,r=Object(_["a"])({},c,i.options);t=r.unitLevelDistance==b.EqualPadding?o+i.boundingBox.width/2+d:(n+1)*s/(l+1),i.x=t,i.y=e,F(i),o=i.x+i.boundingBox.width/2,I(i.groupElement,i,t,e,r.debug),r.debug&&Q(a,i),n+=1}c.debug&&q(t.groupElement,"yellow")})}function h(){const n=t.unitGroups.length;t.unitGroups.forEach((t,o)=>{let r=Object(_["a"])({},i,t.options),l=e;for(const e of t.units.entries()){var c=Object(k["a"])(e,2);const t=c[0],i=c[1];let u=Object(_["a"])({},r,i.options),d=i.parent?i.parent.x:(o+1)*s/(n+1);t%2?d+=u.treeOffset:d-=u.treeOffset;const p=l;i.x=d,i.y=p,F(i),t%2&&(l=i.ly+u.stackedOffset),I(i.groupElement,i,d,p,u.debug),u.debug&&Q(a,i)}r.debug&&q(t.groupElement,"yellow")})}function f(n){const o=t.unitGroups.length;t.unitGroups.forEach((t,r)=>{let l=Object(_["a"])({},i,t.options),c=e;for(const e of t.units.entries()){var u=Object(k["a"])(e,2);u[0];const t=u[1];let i=Object(_["a"])({},l,t.options),d=t.parent?t.parent.x:(r+1)*s/(o+1);n===v.TreeRight?d+=i.treeOffset:n===v.TreeLeft&&(d-=i.treeOffset);const p=c;t.x=d,t.y=p,F(t),c=t.ly+i.stackedOffset,I(t.groupElement,t,d,p,i.debug),i.debug&&Q(a,t)}l.debug&&q(t.groupElement,"yellow")})}i.debug&&q(t.groupElement)}_drawConnectors(t){const e=this.options.maxLevels||t.levels.length;t.levels.forEach((t,n)=>{let i=Object(_["a"])({},this.options,t.options);t.unitGroups.forEach((t,s)=>{let a=n===e-1?this.options.lastLevelLayout:v.Horizontal,o=Object(_["a"])({},i,t.options);switch(t.units.forEach((t,e)=>{let n=Object(_["a"])({},o,t.options);a===v.Stacked&&e>0||Z(a)||a!==v.Tree&&this._drawUnitLevelGroupConnectorPath(t,n)}),a){case v.TreeRight:case v.TreeLeft:case v.Tree:this._drawUnitLevelGroupTreeLeftRightConnectorPath(t.units,a,o);break;default:this._drawUnitLevelConnectorPath(t.units,o)}})})}_drawUnitLevelGroupConnectorPath(t,e){const n=t.x,i=t.y;if(t.parent){const s=i-(i-t.parent.y)/2,a=`M ${n}, ${i-t.octagonAnchor.y-e.connectorOffset} V ${s}`;this.svg.append("path").attr("d",a).classed("o-line",!0)}}_drawUnitLevelConnectorPath(t,e){let n=t[0],i=this.svg,s=n.parent;if(!s)return;let a=t[t.length-1];const o=n.y-(n.y-s.y)/2,r=`M ${s.x}, ${s.ly+e.connectorOffset} V ${o}`;i.append("path").attr("d",r).classed("o-line",!0);const l=`M ${n.x}, ${o} H ${a.x}`;i.append("path").attr("d",l).classed("o-line",!0)}_drawUnitLevelGroupTreeLeftRightConnectorPath(t,e,n){let i=this.svg,s=t[t.length-1],a=s.parent;if(!a)return;const o=`M ${a.x}, ${a.ly+n.connectorOffset} V ${s.y}`;i.append("path").attr("d",o).classed("o-line",!0);let r=Math.max(...t.map(t=>t.boundingBox.width));for(const c of t.entries()){var l=Object(k["a"])(c,2);const t=l[0],s=l[1];let o;const u=Math.abs(s.boundingBox.width/2-r/2);o=e===v.TreeRight||e===v.Tree&&t%2?`M ${s.lx-u-n.connectorOffset}, ${s.y}  H ${a.x}`:`M ${s.rx+u+n.connectorOffset}, ${s.y}  H ${a.x}`,i.append("path").attr("d",o).classed("o-line",!0)}}}var tt,et,nt,it,st=K,at=i["default"].extend({name:"OrbatChart",props:{unit:{type:Object,required:!0},maxLevels:{type:Number,default:3},debug:{type:Boolean,default:!1},symbolSize:{type:Number,default:32},connectorOffset:{type:Number,default:D.connectorOffset},orientation:{type:String,default:D.orientation},unitLevelDistance:{type:String,default:D.unitLevelDistance},lastLevelLayout:{type:String,default:v.Stacked},levelPadding:{type:Number,default:D.levelPadding},treeOffset:{type:Number,default:D.treeOffset},stackedOffset:{type:Number,default:D.stackedOffset},specificOptions:{type:Object}},data:()=>({resizeTimeout:null,width:600,height:600,isMounted:!1}),created(){},mounted(){this.isMounted=!0,this.width=this.$el.clientWidth,this.height=this.$el.clientHeight},destroyed(){this.orbchart&&this.orbchart.cleanup()},methods:{onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{},200)},onClick(t){this.$emit("unitclick",t)}},render(t){this.orbchart&&this.orbchart.cleanup();let e=new st(this.unit,{maxLevels:this.maxLevels,debug:this.debug,symbolSize:this.symbolSize,onClick:this.onClick,connectorOffset:this.connectorOffset,orientation:this.orientation,unitLevelDistance:this.unitLevelDistance,lastLevelLayout:this.lastLevelLayout,levelPadding:this.levelPadding,treeOffset:this.treeOffset,stackedOffset:this.stackedOffset},this.specificOptions||{});if(this.orbchart=e,this.isMounted){e.toSVG({width:1920,height:1080},this.$el)}return t("div",{attrs:{class:"orbat-chart"}})}}),ot=at,rt=(n("b491"),Object(y["a"])(ot,tt,et,!1,null,null,null)),lt=rt.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spanel",class:{large:t.large}},[n("transition",{attrs:{name:"slide"},on:{"after-leave":t.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"slide"},[n("v-toolbar",{attrs:{dense:"",flat:""}},[t._t("header",[n("v-toolbar-title",[t._v(t._s(t.headerTitle))])]),n("v-spacer"),n("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){t.isActive=!1}}},[n("v-icon",[t._v("chevron_left")])],1)],2),n("div",{staticClass:"slide-content"},[t._t("default")],2)],1)])],1)},ut=[],dt={name:"slide-panel",data:()=>({isActive:!1}),beforeMount(){this.isActive=this.value},props:{value:{required:!1},headerTitle:String,large:Boolean},watch:{isActive(t){this.$emit("input",t)},value(t){this.isActive=t}},methods:{afterLeave(){this.$emit("onSlide")}}},pt=dt,ht=(n("79eb"),Object(y["a"])(pt,ct,ut,!1,null,"295853b8",null)),ft=ht.exports,vt=i["default"].extend({name:"MilSymbol",props:{sidc:String,size:{type:Number,default:15},modifiers:{type:Object}},render(t){let e=new U.a.Symbol(this.sidc,{size:this.size,simpleStatusModifier:!0},this.modifiers||{});return t("span",{attrs:{class:"milsymbol"},domProps:{innerHTML:e.asSVG()}})}}),bt=vt,mt=Object(y["a"])(bt,nt,it,!1,null,null,null),gt=mt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-treeview",{attrs:{items:t.rootUnits,activatable:"","item-children":"subUnits"},on:{"update:active":t.onUnitClick},scopedSlots:t._u([{key:"prepend",fn:function(t){var e=t.item;t.open,t.leaf;return[n("MilSymbol",{attrs:{sidc:e.sidc}})]}},{key:"append",fn:function(e){var i=e.item,s=e.active;return[s?n("v-icon",{staticClass:"pr-3",attrs:{title:"Set as root unit"},on:{click:function(e){return t.setRootUnit(i)}}},[t._v("\n      center_focus_strong\n    ")]):t._e(),i.id==t.currentUnitKey?n("v-icon",{staticClass:"pr-3"},[t._v("\n      my_location\n    ")]):t._e()]}}])})},yt=[];n("ac6a");let xt=class extends i["default"]{constructor(){super(...arguments),this.currentUnitKey=null}created(){this.unitMap=new Map,this.buildUnitMap(this.rootUnits),this.currentUnitKey=this.rootUnits[0].id}onUnitClick(t){t.length}setRootUnit(t){this.currentUnitKey=t.id,this.$emit("selectunit",this.unitMap.get(t.id))}buildUnitMap(t){for(const e of t)this.unitMap.set(e.id,e),e.subUnits&&e.subUnits.length&&this.buildUnitMap(e.subUnits)}};l["a"]([Object(T["b"])()],xt.prototype,"rootUnits",void 0),xt=l["a"]([u()({components:{MilSymbol:gt}})],xt);var Lt=xt,wt=Lt,St=Object(y["a"])(wt,Ot,yt,!1,null,"853872e6",null),Ct=St.exports,Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tabs",{attrs:{centered:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("v-tab",{attrs:{href:"#"}},[t._v("Chart")]),n("v-tab",{attrs:{href:"#"}},[t._v("Level")]),n("v-tab",{attrs:{href:"#"}},[t._v("Group")]),n("v-tab",{attrs:{href:"#"}},[t._v("Unit")]),n("v-tab-item",[n("div",{staticClass:"pa-3"},[n("v-text-field",{attrs:{value:t.settings.maxLevels,type:"number",label:"Visible levels"},on:{input:function(e){return t.updateNum("maxLevels",e)}}}),n("v-text-field",{attrs:{label:"Symbol size",type:"number",min:"5",value:t.settings.symbolSize},on:{input:function(e){return t.updateNum("symbolSize",e)}}}),n("v-text-field",{attrs:{label:"Connector offset",type:"number",min:"0",value:t.settings.connectorOffset},on:{input:function(e){return t.updateNum("connectorOffset",e)}}}),n("v-text-field",{attrs:{label:"Level padding",type:"number",min:"0",value:t.settings.levelPadding},on:{input:function(e){return t.updateNum("levelPadding",e)}}}),n("v-text-field",{attrs:{disabled:t.noTreeOffset,label:"Tree offset",type:"number",min:"0",value:t.settings.treeOffset},on:{input:function(e){return t.updateNum("treeOffset",e)}}}),n("v-text-field",{attrs:{disabled:t.noStackedTreeOffset,label:"Stacked offset",type:"number",min:"0",value:t.settings.stackedOffset},on:{input:function(e){return t.updateNum("stackedOffset",e)}}}),n("v-select",{attrs:{label:"Unit spacing",items:t.unitLevelDistance,value:t.settings.unitLevelDistance},on:{input:function(e){return t.updateVal("unitLevelDistance",e)}}}),n("v-select",{attrs:{label:"Last level layout",items:t.lastLevelLayout,value:t.settings.lastLevelLayout},on:{input:function(e){return t.updateVal("lastLevelLayout",e)}}}),n("v-checkbox",{attrs:{label:"Debug mode",value:t.settings.debug},on:{change:function(e){return t.updateVal("debug",e)}}})],1)]),n("v-tab-item",[n("div",{staticClass:"pa-3"})]),n("v-tab-item",[n("div",{staticClass:"pa-3"})]),n("v-tab-item",[n("div",{staticClass:"pa-3"},[n("SettingsUnit")],1)])],1)},kt=[],_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("Unit secific settings")])},Pt=[];let Ut=class extends T["c"]{};Ut=l["a"]([T["a"]],Ut);var jt=Ut,Et=jt,Gt=Object(y["a"])(Et,_t,Pt,!1,null,null,null),At=Gt.exports;function Nt(t){return Object.entries(t).map(t=>{let e=Object(k["a"])(t,2),n=e[0],i=e[1];return{text:n,value:i}})}let Bt=class extends(Object(c["mixins"])(d)){constructor(){super(...arguments),this.active=0}get orientation(){return Nt(f)}get unitLevelDistance(){return Nt(b)}get lastLevelLayout(){return Nt(v)}get noTreeOffset(){return!J(this.settings.lastLevelLayout)}get noStackedTreeOffset(){return!W(this.settings.lastLevelLayout)}updateNum(t,e){this.$store.commit("updateChartOptions",{[t]:+e})}updateVal(t,e){this.$store.commit("updateChartOptions",{[t]:e})}};Bt=l["a"]([Object(T["a"])({components:{SettingsUnit:At}})],Bt);var $t=Bt,Mt=$t,zt=Object(y["a"])(Mt,Tt,kt,!1,null,null,null),Dt=zt.exports;let Rt=class extends(Object(c["mixins"])(d)){created(){this.currentUnit=this.orbat[0]}get orbat(){return this.$store.state.orbat.rootUnits}get currentUnit(){return this.$store.getters.currentUnit}set currentUnit(t){this.$store.commit("setCurrentUnit",t)}get specificOptions(){return this.$store.getters.specificOptions}onSlide(){}onUnitClick(t){console.log("Clicked",t.unit.name)}onSelectUnit(t){this.currentUnit=t}};Rt=l["a"]([Object(T["a"])({components:{SettingsPanel:Dt,OrbatTree:Ct,OrbatChart:lt,SlidePanel:ft,MilSymbol:gt}})],Rt);var Vt=Rt,It=Vt,Ht=(n("a630"),Object(y["a"])(It,S,C,!1,null,"92da0536",null)),qt=Ht.exports,Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{attrs:{flat:"",icon:"",dark:"",title:"Download as SVG"},on:{click:t.downloadAsSVG}},[n("v-icon",[t._v("save_alt")])],1)],1)},Yt=[],Zt=n("21a6"),Jt={name:"MainViewToolbar",methods:{downloadAsSVG(){let t=document.getElementsByClassName("orbat-chart")[0];Zt["saveAs"](new Blob([(new XMLSerializer).serializeToString(t)],{type:"image/svg+xml"}),"orbat-chart.svg")}}},Wt=Jt,Ft=Object(y["a"])(Wt,Xt,Yt,!1,null,"6b667b64",null),Qt=Ft.exports;i["default"].use(w["a"]);var Kt=new w["a"]({routes:[{path:"/",name:"mainView",components:{default:qt,toolbar:Qt}},{path:"/about",name:"about",component:()=>n.e("about").then(n.bind(null,"f820"))}]}),te=n("2f62");const ee={orbatPanel:!0,settingsPanel:!0},ne={setOrbatPanel(t,e){t.orbatPanel=e},setSettingsPanel(t,e){t.settingsPanel=e}};var ie={state:ee,mutations:ne};const se={rootUnits:[],currentUnit:null},ae={setCurrentUnit(t,e){t.currentUnit=e},setOrbat(t,e){t.rootUnits=e}},oe={currentUnit:t=>{return t.currentUnit}};var re={state:se,mutations:ae,getters:oe};const le={chartOptions:Object(_["a"])({},D,{maxLevels:4,lastLevelLayout:v.TreeRight}),levelGroupOptions:{},levelOptions:{},unitOptions:{}};function ce(t,e,n){const s=t[e]||{},a=Object.assign({},s,n);i["default"].set(t,e,a)}const ue={setChartOptions(t,e){t.chartOptions=e},updateChartOptions(t,e){t.chartOptions=Object.assign({},t.chartOptions,e)},setLevelOptions(t,e){t.levelOptions=e},setLevelGroupOptions(t,e){t.levelGroupOptions=e},setUnitOptions(t,e){t.unitOptions=e},updateLevelOptions(t,e){let n=e.id,i=e.value;ce(t.levelOptions,n,i)},updateLevelGroupOptions(t,e){let n=e.id,i=e.value;ce(t.levelGroupOptions,n,i)},updateUnitOptions(t,e){let n=e.id,i=e.value;ce(t.unitOptions,n,i)}},de={specificOptions:t=>{return{level:t.levelOptions,levelGroup:t.levelGroupOptions,unit:t.unitOptions}}};var pe={state:le,mutations:ue,getters:de};i["default"].use(te["a"]);var he=new te["a"].Store({modules:{ui:ie,orbat:re,chart:pe}});n("bf40"),n("3a62");i["default"].config.productionTip=!1,i["default"].use(a.a),new i["default"]({router:Kt,store:he,render:t=>t(L)}).$mount("#app")},cf68:function(t){t.exports={name:"TG 317.1 LG",sidc:"10031004001211000000",subUnits:[{name:"3 Cdo Bde",sidc:"10031000181211004600",subUnits:[{name:"40 Cdo",sidc:"10031000161211004600",state:[],id:"u0xGEGuOLzIcIirsioK0h",subUnits:[{name:"A",sidc:"10031000151211004600",id:"IZI2tUkYvhmVxShmC8~n~",state:[]},{name:"B",sidc:"10031000151211004600",id:"bJewqRWgkcxt3Lt53sz_c",state:[]},{name:"C",sidc:"10031000151211004600",id:"1ytAWaNFpcrYFLuGetut1",state:[]}]},{name:"42 Cdo",sidc:"10031000161211004600",state:[],id:"xcEG3htG0iZEuisD9IhGY",subUnits:[{name:"J",sidc:"10031000151211004600",id:"Yfj4qs4nUyG3DOLwzG8hY",state:[]},{name:"K",sidc:"10031000151211004600",id:"Od6fwg9FD5upCkXDIBalQ",state:[]},{name:"L",sidc:"10031000151211004600",id:"jdXcqNaLkNJxH97rVmUP_",state:[]}]},{name:"45 Cdo",sidc:"10031000161211004600",state:[],id:"0fm4O5tSvrVwjnv9~6ECy",subUnits:[{name:"X",sidc:"10031000151211004600",id:"7yI8rtwPIXI07Ag1Qyuem",state:[]},{name:"Y",sidc:"10031000151211004600",id:"QrSxdjL5eV~w1mJkRhUzH",state:[]},{name:"Z",sidc:"10031000151211004600",id:"~WAhIuR0DjOs6vxdNmTcn",state:[]}]},{name:"29 Cdo RA",sidc:"10031000161303000000",state:[],id:"qF9mX0pKVgtu7cVHjsXy5"},{name:"2 Para",sidc:"10031000161211000001",subUnits:[{name:"29 FB",sidc:"10031000151303000000",state:[],id:"vydX8pjg7sB1t37a5pBN1"},{name:"43 AD",sidc:"10031000141301020000",state:[],id:"peqkxwOqZXYkpSsx4KRCj"},{name:"A COY",sidc:"10031000151211000001",id:"wbPe8yifmaTgAxT2oD1Ff",state:[],shortName:"A"},{name:"B COY",sidc:"10031000151211000001",id:"rVxn2~0XEf8E7WeuPxUe6",state:[],shortName:"B"},{name:"C COY",sidc:"10031000151213000001",id:"vu2TRMUpnGI2klzs19BgZ",state:[],shortName:"C"},{name:"D COY",sidc:"10031000151211000001",id:"~78NfpA426AitI60JeWSa",state:[],shortName:"D"}],state:[],id:"QyZAnvqo5EXsjcNis_GSE"},{name:"3 Para",sidc:"10031000161211000001",subUnits:[{name:"A COY",sidc:"10031000151211000001",id:"INGH8mxuQMnN7LBZhXV_y",state:[],shortName:"A"},{name:"B COY",sidc:"10031000151211000001",id:"~8cVJd3hQNPr8exESXML9",state:[],shortName:"B"},{name:"C COY",sidc:"10031000151211000001",id:"bsMEfBAVOxvYu86qvP0Wq",state:[],shortName:"C"},{name:"D COY",sidc:"10031000151213000001",id:"uUlcvH2~mvagZr1QGoZcP",state:[],shortName:"D"}],state:[],id:"UlbrqVz6kysuUCzz7hSTu"}],state:[],id:"yeyNm2QTCh_yivrfpnv0N"},{name:"5 Inf Bde",sidc:"10031000181211000000",state:[],id:"LurqqM75Avg1_t0AjxUgi",subUnits:[{name:"2nd Bn Scots Guards",sidc:"10031000161211000000",id:"ZZhPAmDQzAT6JWhesPzQ2",state:[],shortName:"SG"},{name:"1st Bn Welsh Guards",sidc:"10031000161211000000",id:"gkcIswEB_vLPW_a3NCJzx",state:[],shortName:"WG"},{name:"1st Bn 7th Gurkha Rifles",sidc:"10031000161211000000",id:"ugu_gHIyde1iuwHYC34_k",state:[],shortName:"7 GR"},{name:"36 Engineer Regiment",sidc:"10031000161407000000",id:"kkfnLWpc2cK1uw2qX6XwB",state:[],shortName:"36 Eng"},{name:"63 AD Squadron",sidc:"10031000151301020000",id:"qhZBaHDgQYOvP4fCSqMXZ",state:[],shortName:"63 AD"},{name:"97 Field Battery",sidc:"10031000151303000000",id:"5yU8AvSZGcNDLjGpCZJJC",state:[],shortName:"97 FB"}]}],state:[],id:"Apc~4XNmoJDViPTPdcoJS"}},e732:function(t,e,n){}});
//# sourceMappingURL=app.1a91ce61.js.map