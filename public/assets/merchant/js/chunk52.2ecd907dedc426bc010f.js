webpackJsonp([52],{JmZv:function(o,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e={props:["oldErrors"],mounted:function(){var o=this;this.oldErrors&&Vue.nextTick(function(){_.forEach(o.oldErrors,function(r,t){t=t.split("_")[0],r.forEach(function(r){o.errors.add(t,r,"database")})})})},methods:{validateBeforeSubmit:function(o){this.$validator.validateAll(),this.errors.any()&&o.preventDefault()}}};r.default={mixins:[e,{props:["oldSources"],created:function(){var o=this;this.oldSources&&this.oldSources.forEach(function(r){o.sources.push({short:r.display?r.display:r.short,id:r.id,long:r.long,extraInfo:r.pivot?r.pivot.extraInfo:r.extraInfo})})}}],data:function(){return{sources:[]}}}},e1gq:function(o,r,t){var e=t("VU/8")(t("JmZv"),null,!1,null,null,null);o.exports=e.exports}});