(window.webpackJsonp=window.webpackJsonp||[]).push([[4,53],{AQDJ:function(t,n,a){"use strict";a.r(n);var i={mixins:[{props:["oldErrors"],mounted:function(){var t=this;this.oldErrors&&Vue.nextTick((function(){_.forEach(t.oldErrors,(function(n,a){a=a.split("_")[0],n.forEach((function(n){t.errors.add(a,n,"database")}))}))}))},methods:{validateBeforeSubmit:function(t){this.$validator.validateAll(),this.errors.any()&&t.preventDefault()}}},{props:["oldSources"],created:function(){var t=this;this.oldSources&&this.oldSources.forEach((function(n){t.sources.push({short:n.display?n.display:n.short,id:n.id,long:n.long,extraInfo:n.pivot?n.pivot.extraInfo:n.extraInfo,description:n.pivot?n.pivot.description:n.description})}))}}],data:function(){return{sources:[]}}},e=a("KHd+"),r=Object(e.a)(i,void 0,void 0,!1,null,null,null);n.default=r.exports},LJSk:function(t,n,a){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n){for(var a=0;a<n.length;a++){var i=n[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}a.d(n,"a",(function(){return r}));var r=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";i(this,t),this.text=n,this.id=a,this.extra=e}var n,a,r;return n=t,(a=[{key:"reset",value:function(){this.text="",this.id="",this.extra=""}}])&&e(n.prototype,a),r&&e(n,r),t}()},r68J:function(t,n,a){"use strict";n.a={props:["init-morphemes"],data:function(){return{morphemes:[]}},created:function(){this.initMorphemes&&(this.morphemes=this.initMorphemes)}}},rGqM:function(t,n,a){"use strict";a.r(n);var i=a("AQDJ"),e=a("r68J"),r=a("LJSk"),o={extends:i.default,props:["pronominalFeatures","nominalFeatures","paradigms","oldParadigm","oldNominalFeature","oldPronominalFeature","oldTranslation"],mixins:[e.a],data:function(){return{language:new r.a,pronominalFeature:new r.a,nominalFeature:new r.a,paradigm:new r.a,mode:new r.a,parent:new r.a,translation:"",validations:{nominalFeature:"datalist_required|datalist_exists",pronominalFeature:"datalist_required|datalist_exists"}}},computed:{filteredParadigms:function(){var t=this;return this.paradigms.filter((function(n){return n.language_id==t.language.id}))},translationRequired:function(){return 0==this.morphemes.length||!this.morphemesContainStem},translationRules:function(){return 0==this.morphemes.length||this.morphemesContainStem?"":"required"},paradigmHasPronominalFeature:function(){var t=this.getParadigm(),n=!1;return t&&(n=t.type.hasPronominalFeature),n},paradigmHasNominalFeature:function(){var t=this.getParadigm(),n=!1;return t&&(n=t.type.hasNominalFeature),n},morphemesContainStem:function(){var t=["V","N"];return void 0!==this.morphemes.find((function(n){return t.includes(n.name.replace(/[-*]/g,""))}))}},watch:{language:function(){this.paradigm=new r.a},paradigm:function(){this.pronominalFeature=new r.a,this.nominalFeature=new r.a,this.paradigmHasPronominalFeature?this.validations.pronominalFeature="datalist_required|datalist_exists":this.validations.pronominalFeature="",this.paradigmHasNominalFeature?this.validations.nominalFeature="datalist_required|datalist_exists":this.validations.nominalFeature=""},translationRequired:function(t){t||(this.translation="")}},mounted:function(){var t=this;this.oldParadigm&&Vue.nextTick((function(){t.$refs.paradigm.update(t.oldParadigm),t.oldPronominalFeature&&Vue.nextTick((function(){t.$refs.pronominalFeature.update(t.oldPronominalFeature)})),t.oldNominalFeature&&Vue.nextTick((function(){t.$refs.nominalFeature.update(t.oldNominalFeature)}))}))},created:function(){this.oldTranslation&&(this.translation=this.oldTranslation)},methods:{getParadigm:function(){var t=this.paradigm.id,n=null;return t&&(n=this.paradigms.find((function(n){return n.id==t}))),n}}},s=a("KHd+"),u=Object(s.a)(o,void 0,void 0,!1,null,null,null);n.default=u.exports}}]);