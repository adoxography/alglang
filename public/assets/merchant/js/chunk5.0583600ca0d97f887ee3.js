webpackJsonp([5],{GqYo:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("4Cd4"),n=i.n(s),a=i("28+M"),o=i.n(a),r={extends:n.a,props:["list"],components:{InputTag:o.a,editable:{props:["value"],template:'\n\t\t\t\t<div\n\t\t\t\t\tcontenteditable="true"\n\t\t\t\t\tclass="input"\n\t\t\t\t\t:innerHTML="value"\n\t\t\t\t\t@input="update($event)"\n\t\t\t\t\t@keydown="keydown($event)"\n\t\t\t\t>{{ value }}</div>\n\t\t\t',methods:{update:function(t){console.log(this.clearUselessTags(t.target.innerHTML)),this.$emit("input",this.clearUselessTags(t.target.innerHTML))},clearUselessTags:function(t){return t.replace(/<[^>]*>{2}/,"")},keydown:function(t){this.$emit("keydown",t)}}}},data:function(){return{queryParamName:"term",id:"",tagsArray:[]}},methods:{onHit:function(t){this.query=t.name,this.id=t.id,this.items=[]},triggerUpdate:function(){Array.isArray(this.list)?this.filter():this.update()},filter:function(){var t=this;this.items=this.list.filter(function(e){return e.name.toLowerCase().includes(t.query.toLowerCase())})},onDown:function(){this.filter(),this.hasItems||(this.items=this.list)},enter:function(t){this.current>=0&&(t.preventDefault(),this.hit())},toggleList:function(){this.hasItems?this.items=[]:(this.filter(),this.hasItems||(this.items=this.list))}}},u=i("XyMi");var l=function(t){i("qPLk")},c=Object(u.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("input-tag",{attrs:{tags:t.tagsArray}}),t._v(" "),i("button",{on:{click:t.toggleList}},[t._v("Click me")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"hidden"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.hasItems,expression:"hasItems"}]},t._l(t.items,function(e,s){return i("li",{class:t.activeClass(s),on:{mousedown:t.hit,mousemove:function(e){t.setActive(s)}}},[i("span",{domProps:{textContent:t._s(e.name)}})])}))],1)},[],!1,l,null,null);e.default=c.exports},LD2m:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"li.active{background-color:red}",""])},qPLk:function(t,e,i){var s=i("LD2m");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i("po5z").default)("2ac97b04",s,!0,{})}});