webpackJsonp([48],{"5SvZ":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={props:["list","filteroptions"],data:function(){return{parsedList:[],parsedFilterOptions:[],filteredList:[],selected:""}},created:function(){this.parsedList=JSON.parse(this.list),this.parsedFilterOptions=JSON.parse(this.filteroptions),this.filteredList=this.parsedList},methods:{filter:function(){var t=this;this.$refs.pages.selected=0,""==this.selected?this.filteredList=this.parsedList:(this.filteredList=[],this.parsedList.forEach(function(e){e.slot_id==t.selected&&t.filteredList.push(e)}))}}},l=s("XyMi"),r=Object(l.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"alg-filter-list"},[s("div",{staticClass:"control is-horizontal"},[t._m(0),t._v(" "),s("div",{staticClass:"control"},[s("span",{staticClass:"select is-fullwidth"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?s:s[0]},t.filter]}},[s("option",{attrs:{value:""}},[t._v("All")]),t._v(" "),t._l(t.parsedFilterOptions,function(e){return s("option",{domProps:{value:e.id}},[t._v(t._s(e.abv))])})],2)])])]),t._v(" "),s("alg-paginated-list",{ref:"pages",attrs:{list:t.filteredList}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"control-label"},[e("label",{staticClass:"label"},[this._v("Slot")])])}],!1,null,null,null);e.default=r.exports}});