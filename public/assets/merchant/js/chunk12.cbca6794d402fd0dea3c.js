webpackJsonp([12,25],{"3iEA":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("e1gq"),i=n("eOhn"),r={extends:o.default,props:["init-glosses"],data:function(){return{language:new i.a,slot:new i.a,parent:new i.a,glosses:[]}},created:function(){this.initGlosses&&(this.glosses=this.initGlosses)}},s=n("XyMi"),a=Object(s.a)(r,void 0,void 0,!1,null,null,null);e.default=a.exports},e1gq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={mixins:[{props:["oldErrors"],mounted:function(){var t=this;this.oldErrors&&Vue.nextTick(function(){_.forEach(t.oldErrors,function(e,n){n=n.split("_")[0],e.forEach(function(e){t.errors.add(n,e,"database")})})})},methods:{validateBeforeSubmit:function(t){this.$validator.validateAll(),this.errors.any()&&t.preventDefault()}}},{props:["oldSources"],created:function(){var t=this;this.oldSources&&this.oldSources.forEach(function(e){t.sources.push({short:e.display?e.display:e.short,id:e.id,long:e.long,extraInfo:e.pivot?e.pivot.extraInfo:e.extraInfo})})}}],data:function(){return{sources:[]}}},i=n("XyMi"),r=Object(i.a)(o,void 0,void 0,!1,null,null,null);e.default=r.exports},eOhn:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.text=e,this.id=n,this.extra=o}return o(t,[{key:"reset",value:function(){this.text="",this.id="",this.extra=""}}]),t}()}});