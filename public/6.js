(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1AUW":function(t,e,a){"use strict";var s=a("Yo2Q");a.n(s).a},BEyz:function(t,e,a){"use strict";a.r(e);function s(t,e){var a;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var s=0,i=function(){};return{s:i,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,o=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return l=t.done,t},e:function(t){o=!0,r=t},f:function(){try{l||null==a.return||a.return()}finally{if(o)throw r}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}var i=function t(e,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.label=e,this.value=-1,this.options=a},r={props:{language:{default:0},languages:{default:null},morpheme:{default:null},source:{default:null},filterData:{},uri:{},perPage:{default:20},showAddButtons:{default:!1},formUri:{}},data:function(){return{forms:null,numPages:0,page:1,showFilter:!1,shape:"",filters:[]}},computed:{addURI:function(){if(this.language)return"/languages/".concat(this.language)}},watch:{page:function(){this.getForms()}},created:function(){for(var t in this.languages&&this.filters.push(new i("Language",this.languages)),this.getForms(),this.filterData)this.filters.push(new i(t,this.filterData[t]))},methods:{getForms:function(){var t=this;this.forms=null;var e={perPage:this.perPage,page:this.page,shape:this.shape};this.language&&(e.language=this.language),this.morpheme&&(e.morpheme=this.morpheme),this.source&&(e.source=this.source);var a,n=s(this.filters);try{for(n.s();!(a=n.n()).done;){var i=a.value;e[_.camelCase(i.label)]=i.value}}catch(t){n.e(t)}finally{n.f()}axios.get(this.uri,{params:e}).then((function(e){t.forms=e.data.data,t.numPages=e.data.last_page,t.forms.forEach((function(t){0==t.examples.length&&t.examples.push({html:'<p class="table-note">No examples in the database</p>'})}))}))},debounceGetForms:_.debounce((function(t){this.getForms()}),300)}},l=(a("1AUW"),a("KHd+")),o=Object(l.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alg-form-filter"},[a("div",{attrs:{role:"pagination"}},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("a",{staticClass:"pagination-previous",attrs:{disabled:t.page<=1},on:{click:function(e){t.page--}}},[t._v("Previous")])])]),t._v(" "),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[a("a",{staticClass:"pagination-next",attrs:{disabled:t.page>=t.numPages},on:{click:function(e){t.page++}}},[t._v("Next")])])])]),t._v(" "),a("nav",{staticClass:"pagination",attrs:{"aria-label":"pagination"}},[t.forms&&t.forms.length>0?a("ul",{staticClass:"pagination-list"},t._l(t.numPages,(function(e){return a("li",[a("a",{staticClass:"pagination-link",class:{"is-current":t.page==e},attrs:{"aria-label":"Goto page"+e},on:{click:function(a){t.page=e}}},[t._v(t._s(e))])])})),0):t._e()]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showFilter,expression:"showFilter"}],staticClass:"filter-panel"},[a("div",{staticClass:"field is-horizontal"},[t._m(0),t._v(" "),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field"},[a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.shape,expression:"shape"}],staticClass:"input",attrs:{type:"text",placeholder:"Filter by form shape"},domProps:{value:t.shape},on:{input:[function(e){e.target.composing||(t.shape=e.target.value)},function(e){return t.debounceGetForms()}]}})])])])]),t._v(" "),t._l(t.filters,(function(e){return a("div",{staticClass:"field is-horizontal"},[a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v(t._s(e.label))])]),t._v(" "),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control is-expanded"},[a("div",{staticClass:"select is-fullwidth"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"filter.value"}],on:{change:[function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(e,"value",a.target.multiple?s:s[0])},function(e){return t.getForms()}]}},[a("option",{attrs:{default:"default"},domProps:{value:-1}},[t._v("All")]),t._v(" "),t._l(e.options,(function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)])])])])])}))],2),t._v(" "),a("span",{staticClass:"is-pulled-right"},[t.showFilter?a("a",{on:{click:function(e){t.showFilter=!1}}},[t._v("Hide filters")]):a("a",{on:{click:function(e){t.showFilter=!0}}},[t._v("Filter")])])]),t._v(" "),a("hr"),t._v(" "),t.forms?t.forms.length>0?a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("\n          Forms\n          "),a("a",{directives:[{name:"show",rawName:"v-show",value:t.showAddButtons,expression:"showAddButtons"}],staticClass:"icon add-icon",attrs:{href:t.addURI+t.formUri}},[t._m(1)])]),t._v(" "),a("th",[t._v("\n          Examples\n          "),a("a",{directives:[{name:"show",rawName:"v-show",value:t.showAddButtons,expression:"showAddButtons"}],staticClass:"icon add-icon",attrs:{href:t.addURI+"/addExample"}},[t._m(2)])])])]),t._v(" "),t._l(t.forms,(function(e){return a("tbody",t._l(e.examples,(function(s,n){return e.examples.length>0?a("tr",[0==n?a("td",{attrs:{rowspan:e.examples.length},domProps:{innerHTML:t._s(e.html)}}):t._e(),t._v(" "),a("td",{domProps:{innerHTML:t._s(s.html)}})]):a("tr",[a("td",{domProps:{innerHTML:t._s(e.html)}}),t._v(" "),a("td",[t._v("No examples in the database")])])})),0)}))],2):a("div",[a("p",[t._v("No forms in the database match that description.")])]):a("div",[a("p",[t._v("Loading...")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[this._v("Shape")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon",attrs:{title:"Add another"}},[e("i",{staticClass:"fa fa-plus-square"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon",attrs:{title:"Add another"}},[e("i",{staticClass:"fa fa-plus-square"})])}],!1,null,null,null);e.default=o.exports},Yo2Q:function(t,e,a){var s=a("tieO");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,n);s.locals&&(t.exports=s.locals)},tieO:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".table tbody tr:last-child td {\n  border-bottom-width: thin;\n}\n.alg-form-filter .table-note {\n  font-style: italic;\n}\n.alg-form-filter .level {\n  margin-bottom: .5em;\n}\n.alg-form-filter .filter-panel {\n  margin-top: 1em;\n}\n",""])}}]);