webpackJsonp([33],{"7ifm":function(e,s,i){var t=i("VU/8")(i("aEPF"),i("cSi0"),!1,null,null,null);e.exports=t.exports},aEPF:function(e,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:["list"],data:function(){return{selected:0}},computed:{pages:function(){for(var e=[],s=0;s<this.list.length;s+=10)e.push(this.list.slice(s,s+10));return e},mid:function(){return Math.max(Math.min(this.selected,this.pages.length-3),2)}},methods:{previousPage:function(){this.selected>0&&this.selected--},nextPage:function(){this.selected<this.pages.length-1&&this.selected++}}}},cSi0:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",{staticClass:"alg-paginated-list box"},[i("nav",{staticClass:"pagination"},[i("a",{staticClass:"pagination-previous",class:{"is-disabled":e.selected<=0},on:{click:e.previousPage}},[e._v("Previous")]),e._v(" "),i("a",{staticClass:"pagination-next",class:{"is-disabled":e.selected>=e.pages.length-1},on:{click:e.nextPage}},[e._v("Next")]),e._v(" "),i("ul",{staticClass:"pagination-list"},[i("li",[i("a",{staticClass:"pagination-link",class:{"is-disabled":0==e.selected},on:{click:function(s){e.selected=0}}},[e._v("1")])]),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:e.selected>2&&e.pages.length>5,expression:"selected > 2 && pages.length > 5"}]},[i("span",{staticClass:"pagination-ellipsis"},[e._v("…")])]),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:e.pages.length>2,expression:"pages.length > 2"}]},[i("a",{staticClass:"pagination-link",class:{"is-disabled":e.selected==e.mid-1},on:{click:function(s){e.selected=e.mid-1}}},[e._v(e._s(e.mid))])]),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:e.pages.length>3,expression:"pages.length > 3"}]},[i("a",{staticClass:"pagination-link",class:{"is-disabled":e.selected==e.mid},on:{click:function(s){e.selected=e.mid}}},[e._v(e._s(e.mid+1))])]),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:e.pages.length>4,expression:"pages.length > 4"}]},[i("a",{staticClass:"pagination-link",class:{"is-disabled":e.selected==e.mid+1},on:{click:function(s){e.selected=e.mid+1}}},[e._v(e._s(e.mid+2))])]),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:e.selected<e.pages.length-3&&e.pages.length>5,expression:"selected < pages.length - 3 && pages.length > 5"}]},[i("span",{staticClass:"pagination-ellipsis"},[e._v("…")])]),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:e.pages.length>1,expression:"pages.length > 1"}]},[i("a",{staticClass:"pagination-link",class:{"is-disabled":e.selected==e.pages.length-1},on:{click:function(s){e.selected=e.pages.length-1}}},[e._v(e._s(e.pages.length))])])])]),e._v(" "),i("div",{staticClass:"content"},e._l(e.pages,function(s,t){return i("ul",{directives:[{name:"show",rawName:"v-show",value:e.selected==t,expression:"selected == index"}]},e._l(s,function(s){return i("li",[i("a",{attrs:{href:"/morphemes/"+s.id}},[e._v(e._s(s.name)),s.hasDuplicates?i("sup",[e._v(e._s(s.disambiguator))]):e._e(),e._v(" ("),i("span",{staticClass:"gloss"},[e._v(e._s(s.gloss))]),e._v(")")])])}))}))])},staticRenderFns:[]}}});