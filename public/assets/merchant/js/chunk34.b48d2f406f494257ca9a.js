webpackJsonp([34],{EZSD:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.isActive,expression:"isActive"}]},[t("div",{staticClass:"tabs-details"},[this._t("default")],2)])},staticRenderFns:[]}},JNOt:function(e,t,s){var i=s("VU/8")(s("M94l"),s("EZSD"),!1,null,null,null);e.exports=i.exports},M94l:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{name:{required:!0},selected:{default:!1}},data:function(){return{isActive:!1}},computed:{href:function(){return"#"+this.name.toLowerCase().replace(/ /g,"-")}},mounted:function(){this.isActive=this.selected}}}});