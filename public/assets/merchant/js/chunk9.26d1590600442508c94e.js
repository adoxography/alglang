webpackJsonp([9],{"2jId":function(t,e,i){"use strict";var s=i("I3G/");s="default"in s?s.default:s;/^2\./.test(s.version)||s.util.warn("VueFocus 2.1.0 only supports Vue 2.x, and does not support Vue "+s.version);var n={inserted:function(t,e){e.value?t.focus():t.blur()},componentUpdated:function(t,e){e.modifiers.lazy&&Boolean(e.value)===Boolean(e.oldValue)||(e.value?t.focus():t.blur())}},o={directives:{focus:n}};e.version="2.1.0",e.focus=n,e.mixin=o},"38tI":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("2jId"),n=(i.n(s),i("WEHx"));i.n(n);e.default={props:["list","name","id","disabled","required","value","placeholder","hasErrors","initial","autofocus"],computed:{hasValue:function(){return this.value.id>0&&!this.showList}},directives:{focus:s.focus,onClickaway:n.directive},data:function(){return{options:[],showList:!1,writing:!1,curr:0,focused:!1}},created:function(){this.initial&&this.update(this.initial)},methods:{getID:function(t){for(var e="",i=0;i<this.list.length&&""===e;i++)this.list[i].name.toLowerCase()===t.toLowerCase()&&(e=this.list[i].id);return e},reset:function(){this.showList=!1,this.writing=!1,this.curr=0},toggleList:function(){this.options=this.list,this.showList=!this.showList},closeList:function(){this.options=this.list,this.showList=!1},selectItem:function(t){this.reset(),this.update(t),this.$emit("select")},onKeyUp:function(t){40==t?this.handleDownKey():38==t?this.handleUpKey():13!=t&&(this.filterOptions(),this.value.text&&this.value.text.length>0&&this.options.length>0&&(this.showList=!0),this.writing=!0)},onFocus:function(){this.focused=!0,this.$emit("focus")},onBlur:function(){this.focused=!1,this.$emit("blur")},onKeyDown:function(t){9==t.keyCode?(this.showList=!1,this.$emit("keydown",{keyCode:9})):13==t.keyCode&&(this.handleEnterKey(t),this.showList=!1)},handleHover:function(t){for(var e=0;e<this.options.length;e++)this.options[e].name==t&&(this.curr=e+1)},handleButtonClicked:function(){this.disabled||(this.toggleList(),this.$refs.textInput.focus())},filterOptions:function(){var t=this;this.options=this.list.filter(function(e){var i=void 0;return i=t.value.text?t.value.text.toLowerCase():"",e.name.toLowerCase().includes(i)})},handleDownKey:function(){this.showList?(this.curr++,this.curr%=this.options.length+1,this.curr>0&&this.update(this.options[this.curr-1].name)):(this.options=this.list,this.showList=!0)},handleUpKey:function(){this.curr+=this.options.length,this.curr%=this.options.length+1,this.curr>0&&this.update(this.options[this.curr-1].name)},handleEnterKey:function(t){this.curr>0?(t.preventDefault(),this.selectItem(this.options[this.curr-1].name)):this.value.text.length>0&&this.writing&&(t.preventDefault(),this.$emit("keydown",{keyCode:13}))},activeItem:function(t){return t+1==this.curr},update:function(t){var e=this.getID(t);this.$emit("input",{text:t,id:e})}}}},ONXL:function(t,e,i){var s=i("VU/8")(i("38tI"),i("WrjD"),!1,null,null,null);t.exports=s.exports},WEHx:function(t,e,i){"use strict";function s(t,e){n(t);var i=e.value;if("function"==typeof i){var s=!1;setTimeout(function(){s=!0},0),t[a]=function(e){if(s&&!t.contains(e.target))return i(e)},document.documentElement.addEventListener("click",t[a],!1)}}function n(t){document.documentElement.removeEventListener("click",t[a],!1),delete t[a]}var o=i("I3G/");o="default"in o?o.default:o;/^2\./.test(o.version)||o.util.warn("VueClickaway 2.1.0 only supports Vue 2.x, and does not support Vue "+o.version);var a="_vue_clickaway_handler",u={bind:s,update:function(t,e){e.value!==e.oldValue&&s(t,e)},unbind:n},r={directives:{onClickaway:u}};e.version="2.1.0",e.directive=u,e.mixin=r},WrjD:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.closeList,expression:"closeList"}],staticClass:"alg-datalist alg-datalist-container"},[i("div",{staticClass:"field has-addons"},[i("span",{staticClass:"control is-expanded"},[i("input",{directives:[{name:"focus",rawName:"v-focus",value:t.focused,expression:"focused"}],ref:"textInput",staticClass:"input",class:{"is-danger":t.hasErrors},attrs:{type:"text",name:t.name,id:t.id,disabled:t.disabled,autocomplete:"off",placeholder:t.placeholder,autofocus:t.autofocus,required:t.required},domProps:{value:t.value.text},on:{keyup:function(e){t.onKeyUp(e.keyCode)},keydown:function(e){t.onKeyDown(e)},input:function(e){t.update(e.target.value)},focus:t.onFocus,blur:t.onBlur}})]),t._v(" "),i("p",{staticClass:"control"},[i("a",{staticClass:"button",class:{"is-danger":t.hasErrors},attrs:{disabled:t.disabled},on:{click:t.handleButtonClicked}},[t._m(0)])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"box alg-datalist-dropdown"},[i("ul",t._l(t.options,function(e,s){return i("li",[i("a",{class:{"is-highlighted":t.activeItem(s)},on:{click:function(i){t.selectItem(e.name)},mouseover:function(i){t.handleHover(e.name)}}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])])}))]),t._v(" "),i("input",{attrs:{type:"hidden",name:t.name+"_id"},domProps:{value:t.value.id}})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fa fa-chevron-down"})])}]}}});