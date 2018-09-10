webpackJsonp([29],{"Y/26":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("XyMi"),i=Object(s.a)({props:["list","initial"],data:function(){return{valueText:"",values:[],usedValues:[]}},computed:{filteredValues:function(){var e=this,t=[],a=[];return this.values.forEach(function(s){s.name.toLowerCase().includes(e.valueText.toLowerCase())&&(s.checked?a.push(s):t.push(s))}),a.concat(t)},selectedValues:function(){var e=[];return this.values.forEach(function(t){t.checked&&e.unshift({id:t.id,name:t.name})}),e}},created:function(){for(var e=this,t=0;t<this.list.length;t++)this.values.push({id:this.list[t].id,name:this.list[t].name,checked:!1,used:!1});this.initial&&this.initial.forEach(function(t){var a=e.selectItemInList(t.name,e.values);t.used&&(e.values[a].used=!0,e.usedValues.push(t.name))})},methods:{onEnter:function(e){this.valueText.length>0&&(e.preventDefault(),this.selectItemInList(e.target.value,this.values)<0&&this.values.push({id:0,name:e.target.value,checked:!0}),this.valueText="")},removeValue:function(e){var t=this.values.findIndex(function(t){return t.name==e});this.values.splice(t,1)},selectItemInList:function(e,t){for(var a=-1,s=0;s<t.length&&a<0;s++)t[s].name.toLowerCase()==e.toLowerCase()&&(a=s,t[s].checked=!0);return a}}},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Options")]),e._v(" "),a("div",{staticClass:"multi-select box"},[a("div",{staticClass:"field"},[a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.valueText,expression:"valueText"}],staticClass:"input",attrs:{type:"text",name:"value-input",id:"value-input",placeholder:"Filter the options"},domProps:{value:e.valueText},on:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.onEnter(t)},input:function(t){t.target.composing||(e.valueText=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"box",staticStyle:{height:"200px",overflow:"auto"}},[a("p",{directives:[{name:"show",rawName:"v-show",value:0==e.filteredValues.length&&e.valueText.length>0,expression:"filteredValues.length == 0 && valueText.length > 0"}]},[a("em",[e._v("Press 'enter' to add '"+e._s(e.valueText)+"' as an option")])]),e._v(" "),e._l(e.filteredValues,function(t){return a("div",{staticClass:"field"},[a("p",{staticClass:"control"},[a("label",{staticClass:"checkbox",attrs:{title:t.used?"This value cannot be removed because it is being used in a datapoint.":""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"item.checked"}],attrs:{type:"checkbox",name:"values[]",disabled:t.used},domProps:{value:t.name,checked:Array.isArray(t.checked)?e._i(t.checked,t.name)>-1:t.checked},on:{change:function(a){var s=t.checked,i=a.target,n=!!i.checked;if(Array.isArray(s)){var l=t.name,u=e._i(s,l);i.checked?u<0&&e.$set(t,"checked",s.concat([l])):u>-1&&e.$set(t,"checked",s.slice(0,u).concat(s.slice(u+1)))}else e.$set(t,"checked",n)}}}),e._v("\n\t\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t\t")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:0==t.id,expression:"item.id == 0"}],staticClass:"delete is-small is-pulled-right",on:{click:function(a){a.preventDefault(),e.removeValue(t.name)}}})])])})],2),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.selectedValues.length<2,expression:"selectedValues.length < 2"}],staticClass:"help is-danger"},[e._v("\n\t\t\tVariables must have at least two options\n\t\t")])]),e._v(" "),e._l(e.usedValues,function(e){return a("input",{attrs:{type:"hidden",name:"values[]"},domProps:{value:e}})})],2)},[],!1,null,null,null);t.default=i.exports}});