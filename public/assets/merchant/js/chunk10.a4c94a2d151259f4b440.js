webpackJsonp([10,27],{e1gq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={mixins:[{props:["oldErrors"],mounted:function(){var e=this;this.oldErrors&&Vue.nextTick(function(){_.forEach(e.oldErrors,function(t,n){n=n.split("_")[0],t.forEach(function(t){e.errors.add(n,t,"database")})})})},methods:{validateBeforeSubmit:function(e){this.$validator.validateAll(),this.errors.any()&&e.preventDefault()}}},{props:["oldSources"],created:function(){var e=this;this.oldSources&&this.oldSources.forEach(function(t){e.sources.push({short:t.display?t.display:t.short,id:t.id,long:t.long,extraInfo:t.pivot?t.pivot.extraInfo:t.extraInfo})})}}],data:function(){return{sources:[]}}},o=n("XyMi"),i=Object(o.a)(r,void 0,void 0,!1,null,null,null);t.default=i.exports},eOhn:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.text=t,this.id=n,this.extra=r}return r(e,[{key:"reset",value:function(){this.text="",this.id="",this.extra=""}}]),e}()},tnZN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("e1gq"),o=n("eOhn"),i={extends:r.default,data:function(){return{language:new o.a,parent:new o.a,reflex:new o.a,deleted:!1}},created:function(){this.deleted=1==this.oldDeleted}},a=n("XyMi"),u=Object(a.a)(i,void 0,void 0,!1,null,null,null);t.default=u.exports}});