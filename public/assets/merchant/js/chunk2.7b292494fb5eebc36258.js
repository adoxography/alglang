webpackJsonp([2,45],{ISEI:function(e,t,n){var o=n("VU/8")(n("Uqbb"),n("xcW1"),!1,null,null,null);e.exports=o.exports},JmZv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("sUu7"),r={props:["oldErrors"],mounted:function(){var e=this;this.oldErrors&&Vue.nextTick(function(){_.forEach(e.oldErrors,function(t,n){n=n.split("_")[0],t.forEach(function(t){e.errors.add(n,t,"database")})})})},methods:{validateBeforeSubmit:function(e){this.$validator.validateAll(),this.errors.any()&&e.preventDefault()}}};Vue.use(o.b);t.default={mixins:[r,{props:["oldSources"],created:function(){var e=this;this.oldSources&&this.oldSources.forEach(function(t){e.sources.push({short:t.display?t.display:t.short,id:t.id,long:t.long,extraInfo:t.pivot?t.pivot.extraInfo:t.extraInfo})})}}],data:function(){return{sources:[]}}}},Uqbb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("e1gq"),r=n.n(o),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.allophone=t,this.environment=n}return s(e,[{key:"isEmpty",value:function(){return 0==this.allophone.length&&0==this.environment.length}},{key:"clear",value:function(){this.allophone="",this.environment=""}}]),e}();t.default={extends:r.a,props:["old"],data:function(){return{rows:[]}},created:function(){var e=this;this.old&&this.old.length>0&&this.old.forEach(function(t){e.rows.push(new i(t.name.replace(/[\[\]\*]/g,""),t.environment))}),this.rows.push(new i)},methods:{onInput:function(e){e==this.rows.length-1&&this.rows.push(new i)},onDelete:function(e){this.rows.length>1?this.rows.splice(e,1):this.rows[0].clear()}}}},e1gq:function(e,t,n){var o=n("VU/8")(n("JmZv"),null,!1,null,null,null);e.exports=o.exports},xcW1:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.rows,function(t,o){return n("div",{staticClass:"field is-grouped"},[n("p",{staticClass:"control"},[n("alg-typewriter",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.allophone,expression:"row.allophone"}],staticClass:"input",attrs:{name:"allophones["+o+"][name]",type:"text",placeholder:"allophone",autocomplete:"off"},domProps:{value:t.allophone},on:{input:[function(n){n.target.composing||e.$set(t,"allophone",n.target.value)},function(t){e.onInput(o)}]}})])],1),e._v(" "),n("p",{staticClass:"control is-expanded"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.environment,expression:"row.environment"}],staticClass:"input",attrs:{name:"allophones["+o+"][environment]",type:"text",placeholder:"environment (leave blank if elsewhere case)",autocomplete:"off"},domProps:{value:t.environment},on:{input:[function(n){n.target.composing||e.$set(t,"environment",n.target.value)},function(t){e.onInput(o)}]}})]),e._v(" "),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-danger",attrs:{disabled:1==e.rows.length&&t.isEmpty(),tabindex:"-1"},on:{click:function(t){e.onDelete(o)}}},[e._m(0,!0)])])])}))},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fa fa-times"})])}]}}});