(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{LX1O:function(t,e,n){"use strict";var i=n("Twuv");n.n(i).a},Twuv:function(t,e,n){var i=n("p3Ig");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,s);i.locals&&(t.exports=i.locals)},i1lE:function(t,e,n){"use strict";n.r(e);var i=n("/1rq"),s=n.n(i),r=n("dL/0"),a=n.n(r),o={extends:s.a,props:["list"],components:{InputTag:a.a,editable:{props:["value"],template:'\n\t\t\t\t<div\n\t\t\t\t\tcontenteditable="true"\n\t\t\t\t\tclass="input"\n\t\t\t\t\t:innerHTML="value"\n\t\t\t\t\t@input="update($event)"\n\t\t\t\t\t@keydown="keydown($event)"\n\t\t\t\t>{{ value }}</div>\n\t\t\t',methods:{update:function(t){console.log(this.clearUselessTags(t.target.innerHTML)),this.$emit("input",this.clearUselessTags(t.target.innerHTML))},clearUselessTags:function(t){return t.replace(/<[^>]*>{2}/,"")},keydown:function(t){this.$emit("keydown",t)}}}},data:function(){return{queryParamName:"term",id:"",tagsArray:[]}},methods:{onHit:function(t){this.query=t.name,this.id=t.id,this.items=[]},triggerUpdate:function(){Array.isArray(this.list)?this.filter():this.update()},filter:function(){var t=this;this.items=this.list.filter((function(e){return e.name.toLowerCase().includes(t.query.toLowerCase())}))},onDown:function(){this.filter(),this.hasItems||(this.items=this.list)},enter:function(t){this.current>=0&&(t.preventDefault(),this.hit())},toggleList:function(){this.hasItems?this.items=[]:(this.filter(),this.hasItems||(this.items=this.list))}}},u=(n("LX1O"),n("KHd+")),l=Object(u.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input-tag",{attrs:{tags:t.tagsArray}}),t._v(" "),n("button",{on:{click:t.toggleList}},[t._v("Click me")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"hidden"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.hasItems,expression:"hasItems"}]},t._l(t.items,(function(e,i){return n("li",{class:t.activeClass(i),on:{mousedown:t.hit,mousemove:function(e){return t.setActive(i)}}},[n("span",{domProps:{textContent:t._s(e.name)}})])})),0)],1)}),[],!1,null,null,null);e.default=l.exports},p3Ig:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\nli.active {\n\tbackground-color:red;\n}\n",""])}}]);