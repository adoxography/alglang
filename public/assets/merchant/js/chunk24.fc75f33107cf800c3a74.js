webpackJsonp([24],{eOhn:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.text=t,this.id=n,this.extra=a}return a(e,[{key:"reset",value:function(){this.text="",this.id="",this.extra=""}}]),e}()},kt59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("eOhn"),s={props:["language","old"],data:function(){return{lookup:new a.a,examples:[]}},computed:{autocompleteData:function(){return{language:this.language?this.language.id:null}}},methods:{onUpdateLookup:function(e){e.text&&this.$refs.lookup.showCheck&&(this.examples.push({name:e.text,id:e.id,comment:""}),this.$refs.lookup.reset())},onDelete:function(e){this.examples.splice(e,1)}},created:function(){var e=this;this.old&&this.old.forEach(function(t){e.examples.push({name:t.name,id:t.id,comments:t.pivot.comments})})}},i=n("XyMi"),o=Object(i.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"field"},[n("span",{staticClass:"control"},[n("alg-ajaxlist",{ref:"lookup",attrs:{uri:"/autocomplete/examples",with:e.autocompleteData},on:{input:function(t){e.onUpdateLookup(t)}},model:{value:e.lookup,callback:function(t){e.lookup=t},expression:"lookup"}})],1)]),e._v(" "),e._l(e.examples,function(t,a){return n("div",{staticClass:"field is-horizontal"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"example.id"}],attrs:{type:"hidden",name:"examples["+a+"][id]"},domProps:{value:t.id},on:{input:function(n){n.target.composing||e.$set(t,"id",n.target.value)}}}),e._v(" "),n("div",{staticClass:"field-label is-normal"},[n("label",{staticClass:"label"},[e._v(e._s(t.name))])]),e._v(" "),n("div",{staticClass:"field-body"},[n("div",{staticClass:"field is-grouped"},[n("p",{staticClass:"control is-expanded"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.comments,expression:"example.comments"}],staticClass:"input",attrs:{type:"text",placeholder:"Comments",name:"examples["+a+"][comments]"},domProps:{value:t.comments},on:{input:function(n){n.target.composing||e.$set(t,"comments",n.target.value)}}})]),e._v(" "),n("span",{staticClass:"control"},[n("a",{staticClass:"button is-danger",on:{click:function(t){e.onDelete(a)}}},[e._m(0,!0)])])])])])})],2)},[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fa fa-times"})])}],!1,null,null,null);t.default=o.exports}});