webpackJsonp([23],{eOhn:function(e,t,i){"use strict";i.d(t,"a",function(){return a});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.text=t,this.id=i,this.extra=n}return n(e,[{key:"reset",value:function(){this.text="",this.id="",this.extra=""}}]),e}()},gs3v:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("eOhn"),a={props:["value","list","name","disabled"],data:function(){return{numFields:1,suggestions:{cree:[new n.a("Plains Cree",2),new n.a("Woods Cree",35),new n.a("Swampy Cree",59),new n.a("Moose Cree",5),new n.a("Atikamekw",36),new n.a("Southern East Cree",37),new n.a("Northern East Cree",38),new n.a("Sheshatshiu Innu",39)],ojibwe:[new n.a("Saulteaux",27),new n.a("Southwestern Ojibwe",21),new n.a("Oji-Cree",28),new n.a("Odawa",29),new n.a("Nishnaabemwin",22),new n.a("Nipissing",31),new n.a("Old Algonquin",32),new n.a("Lac Simon Algonquin",33),new n.a("Golden Lake Algonquin",34)]}}},methods:{addField:function(){if(this.value.length<5){var e=this.value;e.push({text:"",id:""}),this.$emit("input",e)}},removeField:function(){if(this.value.length>1){var e=this.value;e.pop(),this.$emit("input",e)}},suggest:function(e){var t=[];this.suggestions[e].forEach(function(e){t.push({text:e.text,id:e.id})}),this.$emit("input",t)}}},s=i("XyMi"),l=Object(s.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._l(e.value,function(t,n){return i("div",{staticClass:"field"},[i("alg-datalist",{key:n,ref:"datalists",refInFor:!0,attrs:{list:e.list,name:e.name,disabled:e.disabled},model:{value:e.value[n],callback:function(t){e.$set(e.value,n,t)},expression:"value[n]"}})],1)}),e._v(" "),i("div",{staticClass:"level"},[i("div",{staticClass:"level-left"}),e._v(" "),i("div",{staticClass:"level-right"},[i("div",{staticClass:"level-item"},[i("a",{staticClass:"button is-primary is-small",attrs:{disabled:e.value.length>=5||e.disabled},on:{click:function(t){e.addField()}}},[e._m(0)])]),e._v(" "),i("div",{staticClass:"level-item"},[i("a",{staticClass:"button is-primary is-small",attrs:{disabled:e.value.length<=1||e.disabled},on:{click:function(t){e.removeField()}}},[e._m(1)])])])]),e._v(" "),i("em",[e._v("Suggestions: ")]),e._v(" "),i("a",{on:{click:function(t){e.suggest("cree")}}},[e._v("Cree Dialects")]),e._v(",\n\t"),i("a",{on:{click:function(t){e.suggest("ojibwe")}}},[e._v("Ojibwe Dialects")])],2)},[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fa fa-plus"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fa fa-minus"})])}],!1,null,null,null);t.default=l.exports}});