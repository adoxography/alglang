webpackJsonp([45],{W4fp:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function e(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);_.forEach({verbClass:1,subject:1,primaryObject:0,secondaryObject:0,order:1,mode:1,isNegative:!1,isDiminutive:!1},function(e,i){s[i]?t[i]=s[i]:t[i]=e})},a={props:["args","classes","modes","orders","oldValues"],data:function(){return{lines:[new i]}},computed:{numLines:function(){return this.lines.length}},methods:{addLine:function(){if(this.numLines<10){var e=JSON.parse(JSON.stringify(this.lines[this.lines.length-1]));this.lines.push(e)}},removeLine:function(){this.numLines>1&&this.lines.pop()}},created:function(){if(this.oldValues){for(var e=[],t=0;t<this.oldValues.classes.length;t++){var s=new i({verbClass:this.oldValues.classes[t],subject:this.oldValues.subjects[t],primaryObject:this.oldValues.primaryObjects[t],secondaryObject:this.oldValues.secondaryObjects[t],order:this.oldValues.orders[t],mode:this.oldValues.modes[t]});this.oldValues.isNegative&&(s.isNegative=this.oldValues.isNegative[t]),this.oldValues.isDiminutive&&(s.isDiminutive=this.oldValues.isDiminutive[t]),e.push(s)}this.lines=e}}},l=s("XyMi"),n=Object(l.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._l(e.lines,function(t,i){return s("div",{staticClass:"box"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("h5",{staticClass:"title is-5"},[e._v("Class")]),e._v(" "),s("p",{staticClass:"control",staticStyle:{"padding-top":"1.5rem"}},[s("span",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.verbClass,expression:"line.verbClass"}],attrs:{name:"classes["+i+"]"},on:{change:function(s){var i=Array.prototype.filter.call(s.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"verbClass",s.target.multiple?i:i[0])}}},e._l(e.classes,function(t){return s("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])}))])])]),e._v(" "),s("div",{staticClass:"column"},[s("h5",{staticClass:"title is-5",staticStyle:{"margin-bottom":"1rem"}},[e._v("Arguments")]),e._v(" "),s("div",{staticClass:"control is-horizontal"},[s("div",{staticClass:"field is-grouped"},[s("p",{staticClass:"control"},[s("label",{staticClass:"label argument-label"},[e._v("Subject")]),e._v(" "),s("span",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"line.subject"}],attrs:{name:"subjects["+i+"]"},on:{change:function(s){var i=Array.prototype.filter.call(s.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"subject",s.target.multiple?i:i[0])}}},e._l(e.args,function(t){return s("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])}))])]),e._v(" "),s("p",{staticClass:"control"},[s("label",{staticClass:"label argument-label"},[e._v("P. Object")]),e._v(" "),s("span",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.primaryObject,expression:"line.primaryObject"}],attrs:{name:"primaryObjects["+i+"]"},on:{change:function(s){var i=Array.prototype.filter.call(s.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"primaryObject",s.target.multiple?i:i[0])}}},[s("option",{attrs:{value:"0"}},[e._v("None")]),e._v(" "),e._l(e.args,function(t){return s("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)])]),e._v(" "),s("p",{staticClass:"control"},[s("label",{staticClass:"label argument-label"},[e._v("S. Object")]),e._v(" "),s("span",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.secondaryObject,expression:"line.secondaryObject"}],attrs:{name:"secondaryObjects["+i+"]"},on:{change:function(s){var i=Array.prototype.filter.call(s.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"secondaryObject",s.target.multiple?i:i[0])}}},[s("option",{attrs:{value:"0"}},[e._v("None")]),e._v(" "),e._l(e.args,function(t){return s("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)])])])])]),e._v(" "),s("div",{staticClass:"column"},[s("h5",{staticClass:"title is-5"},[e._v("Order")]),e._v(" "),s("p",{staticClass:"control",staticStyle:{"padding-top":"1.5rem"}},[s("span",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.order,expression:"line.order"}],attrs:{name:"orders["+i+"]"},on:{change:function(s){var i=Array.prototype.filter.call(s.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"order",s.target.multiple?i:i[0])}}},e._l(e.orders,function(t){return s("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])}))])])]),e._v(" "),s("div",{staticClass:"column"},[s("h5",{staticClass:"title is-5"},[e._v("Mode")]),e._v(" "),s("p",{staticClass:"control",staticStyle:{"padding-top":"1.5rem"}},[s("span",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"line.mode"}],attrs:{name:"modes["+i+"]"},on:{change:function(s){var i=Array.prototype.filter.call(s.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"mode",s.target.multiple?i:i[0])}}},e._l(e.modes,function(t){return s("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])}))])])]),e._v(" "),s("div",{staticClass:"column"},[s("p",{staticClass:"control"},[s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.isNegative,expression:"line.isNegative"}],attrs:{type:"checkbox",name:"isNegative["+i+"]"},domProps:{checked:Array.isArray(t.isNegative)?e._i(t.isNegative,null)>-1:t.isNegative},on:{change:function(s){var i=t.isNegative,a=s.target,l=!!a.checked;if(Array.isArray(i)){var n=e._i(i,null);a.checked?n<0&&e.$set(t,"isNegative",i.concat([null])):n>-1&&e.$set(t,"isNegative",i.slice(0,n).concat(i.slice(n+1)))}else e.$set(t,"isNegative",l)}}}),e._v("\n\t\t\t\t\t\tNegative\n\t\t\t\t\t")])]),e._v(" "),s("p",{staticClass:"control"},[s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.isDiminutive,expression:"line.isDiminutive"}],attrs:{type:"checkbox",name:"isDiminutive["+i+"]"},domProps:{checked:Array.isArray(t.isDiminutive)?e._i(t.isDiminutive,null)>-1:t.isDiminutive},on:{change:function(s){var i=t.isDiminutive,a=s.target,l=!!a.checked;if(Array.isArray(i)){var n=e._i(i,null);a.checked?n<0&&e.$set(t,"isDiminutive",i.concat([null])):n>-1&&e.$set(t,"isDiminutive",i.slice(0,n).concat(i.slice(n+1)))}else e.$set(t,"isDiminutive",l)}}}),e._v("\n\t\t\t\t\t\tDiminutive\n\t\t\t\t\t")])])])])])}),e._v(" "),s("div",{staticClass:"level"},[s("div",{staticClass:"level-left"}),e._v(" "),s("div",{staticClass:"level-right"},[s("div",{staticClass:"level-item"},[s("a",{staticClass:"button is-primary",attrs:{disabled:e.numLines>=10,title:"Add"},on:{click:e.addLine}},[e._m(0)])]),e._v(" "),s("div",{staticClass:"level-item"},[s("a",{staticClass:"button is-primary",attrs:{disabled:e.numLines<=1,title:"Remove"},on:{click:e.removeLine}},[e._m(1)])])])])],2)},[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fa fa-plus"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fa fa-minus"})])}],!1,null,null,null);t.default=n.exports}});