webpackJsonp([38],{"2WXv":function(t,s,i){var e=i("VU/8")(i("F5q5"),i("J7W4"),!1,null,null,null);t.exports=e.exports},F5q5:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{title:{default:""},content:{default:""},footer:{default:""}},data:function(){return{active:!1}},methods:{open:function(){this.active=!0},close:function(){this.active=!1},onClickOutside:function(){var t=this;Vue.nextTick(function(){t.active&&t.close()})}}}},J7W4:function(t,s){t.exports={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"modal",class:{"is-active":this.active}},[s("div",{staticClass:"modal-background",on:{click:this.close}}),this._v(" "),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[this._t("title",[s("div",{domProps:{innerHTML:this._s(this.title)}})])],2),this._v(" "),s("button",{staticClass:"delete",on:{click:this.close}})]),this._v(" "),s("section",{staticClass:"modal-card-body"},[this._t("default",[s("div",{domProps:{innerHTML:this._s(this.content)}})])],2),this._v(" "),s("footer",{staticClass:"modal-card-foot"},[this._t("footer",[s("div",{domProps:{innerHTML:this._s(this.footer)}})])],2)])])},staticRenderFns:[]}}});