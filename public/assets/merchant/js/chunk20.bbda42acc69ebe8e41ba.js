webpackJsonp([20],{WJkX:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("eOhn"),i={props:["oldLanguages"],data:function(){return{languages:[new a.a]}},created:function(){if(this.oldLanguages&&Array.isArray(this.oldLanguages)){for(var e=[],n=0;n<this.oldLanguages.length;n+=2)e.push(new a.a(this.oldLanguages[n],this.oldLanguages[n+1]));this.languages=e}}},r=t("XyMi"),u=Object(r.a)(i,void 0,void 0,!1,null,null,null);n.default=u.exports},eOhn:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();var i=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.text=n,this.id=t,this.extra=a}return a(e,[{key:"reset",value:function(){this.text="",this.id="",this.extra=""}}]),e}()}});