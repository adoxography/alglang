webpackJsonp([14],{eOhn:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}a.d(t,"a",function(){return s});var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.text=t,this.id=a,this.extra=n}var t,a,s;return t=e,(a=[{key:"reset",value:function(){this.text="",this.id="",this.extra=""}}])&&n(t.prototype,a),s&&n(t,s),e}()},kt59:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("eOhn"),s={props:["language","old"],data:function(){return{lookup:new n.a,examples:[]}},computed:{autocompleteData:function(){return{language:this.language?this.language.id:null}}},methods:{onUpdateLookup:function(e){e.text&&this.$refs.lookup.showCheck&&(this.examples.push({name:e.text,id:e.id,comment:""}),this.$refs.lookup.reset())},onDelete:function(e){this.examples.splice(e,1)}},created:function(){var e=this;this.old&&this.old.forEach(function(t){e.examples.push({name:t.name,id:t.id,comments:t.pivot.comments})})}},i=a("K1/g"),o=Object(i.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"field"},[a("span",{staticClass:"control"},[a("alg-ajaxlist",{ref:"lookup",attrs:{uri:"/autocomplete/examples",with:e.autocompleteData},on:{input:function(t){return e.onUpdateLookup(t)}},model:{value:e.lookup,callback:function(t){e.lookup=t},expression:"lookup"}})],1)]),e._v(" "),e._l(e.examples,function(t,n){return a("div",{staticClass:"field is-horizontal"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"example.id"}],attrs:{type:"hidden",name:"examples["+n+"][id]"},domProps:{value:t.id},on:{input:function(a){a.target.composing||e.$set(t,"id",a.target.value)}}}),e._v(" "),a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[e._v(e._s(t.name))])]),e._v(" "),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field is-grouped"},[a("p",{staticClass:"control is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.comments,expression:"example.comments"}],staticClass:"input",attrs:{type:"text",placeholder:"Comments",name:"examples["+n+"][comments]"},domProps:{value:t.comments},on:{input:function(a){a.target.composing||e.$set(t,"comments",a.target.value)}}})]),e._v(" "),a("span",{staticClass:"control"},[a("a",{staticClass:"button is-danger",on:{click:function(t){return e.onDelete(n)}}},[e._m(0,!0)])])])])])})],2)},[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fa fa-times"})])}],!1,null,null,null);t.default=o.exports}});