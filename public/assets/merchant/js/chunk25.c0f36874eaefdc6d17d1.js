webpackJsonp([25],{e1gq:function(o,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={mixins:[{props:["oldErrors"],mounted:function(){var o=this;this.oldErrors&&Vue.nextTick(function(){_.forEach(o.oldErrors,function(t,r){r=r.split("_")[0],t.forEach(function(t){o.errors.add(r,t,"database")})})})},methods:{validateBeforeSubmit:function(o){this.$validator.validateAll(),this.errors.any()&&o.preventDefault()}}},{props:["oldSources"],created:function(){var o=this;this.oldSources&&this.oldSources.forEach(function(t){o.sources.push({short:t.display?t.display:t.short,id:t.id,long:t.long,extraInfo:t.pivot?t.pivot.extraInfo:t.extraInfo})})}}],data:function(){return{sources:[]}}},i=r("XyMi"),s=Object(i.a)(e,void 0,void 0,!1,null,null,null);t.default=s.exports}});