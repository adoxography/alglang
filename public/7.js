(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{JnfV:function(e,t,n){var i=n("zdhu");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,o);i.locals&&(e.exports=i.locals)},LdLg:function(e,t,n){"use strict";n.r(t);var i={props:["preview"],data:function(){return{show:!0,overflowing:!1}},computed:{height:function(){return this.show?"100%":this.preview},toggleText:function(){return this.show?"Show less...":"Show more..."},previewHeight:function(){return/\d+/.exec(this.preview)[0]}},methods:{toggle:function(){this.show=!this.show}},mounted:function(){this.overflowing=this.$refs.slot.offsetHeight>this.previewHeight,this.show=!1}},o=(n("clS4"),n("KHd+")),s=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"alg-preview",style:{"max-height":e.height}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.overflowing&&!e.show,expression:"overflowing && !show"}],staticClass:"preview-gradient",style:{height:e.height}}),e._v(" "),n("div",{ref:"slot",staticClass:"preview-content"},[e._t("default")],2),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.overflowing,expression:"overflowing"}],staticClass:"toggle-bar"},[n("a",{on:{click:e.toggle}},[e._v(e._s(e.toggleText))])])])}),[],!1,null,null,null);t.default=s.exports},clS4:function(e,t,n){"use strict";var i=n("JnfV");n.n(i).a},zdhu:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".alg-preview {\n  overflow: hidden;\n  display: flex;\n}\n.alg-preview .preview-gradient {\n  position: absolute;\n  background: linear-gradient(rgba(0, 0, 0, 0) 70%, rgba(255, 255, 255, 0.8));\n  width: 100%;\n}\n.alg-preview .preview-content {\n  width: 100%;\n}\n.alg-preview .toggle-bar {\n  position: absolute;\n  width: 100%;\n  display: flex;\n  align-self: flex-end;\n  justify-content: center;\n  pointer-events: none;\n}\n.alg-preview .toggle-bar a {\n  pointer-events: all;\n}\n",""])}}]);