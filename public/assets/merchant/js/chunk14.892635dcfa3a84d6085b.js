webpackJsonp([14,28],{e1gq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={mixins:[{props:["oldErrors"],mounted:function(){var e=this;this.oldErrors&&Vue.nextTick(function(){_.forEach(e.oldErrors,function(t,n){n=n.split("_")[0],t.forEach(function(t){e.errors.add(n,t,"database")})})})},methods:{validateBeforeSubmit:function(e){this.$validator.validateAll(),this.errors.any()&&e.preventDefault()}}},{props:["oldSources"],created:function(){var e=this;this.oldSources&&this.oldSources.forEach(function(t){e.sources.push({short:t.display?t.display:t.short,id:t.id,long:t.long,extraInfo:t.pivot?t.pivot.extraInfo:t.extraInfo})})}}],data:function(){return{sources:[]}}},r=n("XyMi"),o=Object(r.a)(i,void 0,void 0,!1,null,null,null);t.default=o.exports},eOhn:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.text=t,this.id=n,this.extra=i}return i(e,[{key:"reset",value:function(){this.text="",this.id="",this.extra=""}}]),e}()},uFoL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("e1gq"),r=n("eOhn"),o={extends:i.default,props:["oldType","oldIsArchiphoneme"],data:function(){return{type:"",isArchiphoneme:!1,language:new r.a,place:new r.a,manner:new r.a,voicing:new r.a,height:new r.a,backness:new r.a,length:new r.a,firstSegment:new r.a,secondSegment:new r.a}},computed:{fieldConstraints:function(){return this.isArchiphoneme?"datalist_exists":"datalist_required|datalist_exists"},archiphonemeDescriptionConstraints:function(){return this.isArchiphoneme?"required":""},typeConstraints:function(){return this.isArchiphoneme?"required|not_in:clusterTypes":"required"}},created:function(){this.oldType&&(this.type=this.oldType),this.oldIsArchiphoneme&&(this.isArchiphoneme=this.oldIsArchiphoneme);this.$validator.updateDictionary({en:{custom:{featurable_type:{not_in:"Clusters cannot be archiphonemes"}}}})},watch:{language:function(){this.firstSegment=new r.a,this.secondSegment=new r.a},type:function(e){"clusterTypes"==e&&(this.isArchiphoneme=!1)}}},s=n("XyMi"),a=Object(s.a)(o,void 0,void 0,!1,null,null,null);t.default=a.exports}});