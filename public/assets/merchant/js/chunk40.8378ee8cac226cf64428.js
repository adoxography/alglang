webpackJsonp([40],{nAIo:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("WEHx"),o={props:["open"],data:function(){return{author:"",year:"",long:"",url:"",notes:"",loading:!1}},directives:{onClickaway:s.directive},computed:{disabled:function(){return 0==this.author.length||0==this.year.length||0==this.long.length}},methods:{close:function(){this.author="",this.year="",this.long="",this.url="",this.notes="",this.$emit("close")},clickOutside:function(t){"new-source-button"!=t.srcElement.id&&this.close()},onEnter:function(t){this.open&&(t.preventDefault(),this.disabled||this.submit())},submit:function(){var t=this;this.loading=!0,axios.post("/sources/ajax",{author:this.author,year:this.year,long:this.long,url:this.url,notes:this.notes}).then(function(e){t.$emit("input",e.data),t.loading=!1,t.close()})}}},l=a("XyMi"),i=Object(l.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal is-active",on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.onEnter(e)}}},[a("div",{staticClass:"modal-background"}),t._v(" "),a("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.clickOutside,expression:"clickOutside"}],staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Add a new source")]),t._v(" "),a("a",{staticClass:"delete",on:{click:t.close}})]),t._v(" "),a("section",{staticClass:"modal-card-body"},[a("label",{staticClass:"label"},[t._v("Author")]),t._v(" "),a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"input",attrs:{type:"text",autocomplete:"off"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})]),t._v(" "),a("label",{staticClass:"label"},[t._v("Year")]),t._v(" "),a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],staticClass:"input",attrs:{type:"text",autocomplete:"off"},domProps:{value:t.year},on:{input:function(e){e.target.composing||(t.year=e.target.value)}}})]),t._v(" "),a("label",{staticClass:"label"},[t._v("Full Citation")]),t._v(" "),a("p",{staticClass:"control"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.long,expression:"long"}],staticClass:"textarea",domProps:{value:t.long},on:{input:function(e){e.target.composing||(t.long=e.target.value)}}})]),t._v(" "),a("label",{staticClass:"label"},[t._v("URL")]),t._v(" "),a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"input",attrs:{type:"url",autocomplete:"off"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})]),t._v(" "),a("label",{staticClass:"label"},[t._v("Notes")]),t._v(" "),a("alg-textarea",{model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}})],1),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("a",{staticClass:"button is-primary",class:{"is-loading":t.loading,"is-disabled":t.disabled},on:{click:t.submit}},[t._v("Submit")]),t._v(" "),a("a",{staticClass:"button",on:{click:t.close}},[t._v("Cancel")])])])])},[],!1,null,null,null);e.default=i.exports}});