webpackJsonp([21],{GRWm:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r("MsPN");var o=r("XyMi"),n=Object(o.a)({props:["morphemesOn","hasMorphemes"],data:function(){return{show:!1}},methods:{toggleShow:function(){this.show=!this.show}},created:function(){this.morphemesOn&&(this.show=this.hasMorphemes&&this.morphemesOn)}},void 0,void 0,!1,null,null,null);t.default=n.exports},MsPN:function(e,t,r){var o;"undefined"!=typeof self&&self,o=function(){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"VueScrollingTable",props:{deadAreaColor:{type:String,required:!1,default:"#CCC"},includeFooter:{type:Boolean,required:!1,default:!1},syncHeaderScroll:{type:Boolean,required:!1,default:!0},syncFooterScroll:{type:Boolean,required:!1,default:!0},scrollHorizontal:{type:Boolean,required:!1,default:!0},scrollVertical:{type:Boolean,required:!1,default:!0}},computed:{tableStyle:function(){return"background-color: "+this.deadAreaColor+";"},stubScrollbarStyle:function(){return"background-color: "+this.deadAreaColor+";\n\t\t\t\tscrollbar-base-color: "+this.deadAreaColor+";\n\t\t\t\tscrollbar-face-color: "+this.deadAreaColor+";\n\t\t\t\tscrollbar-highlight-color: "+this.deadAreaColor+";\n\t\t\t\tscrollbar-track-color: "+this.deadAreaColor+";\n\t\t\t\tscrollbar-arrow-color: "+this.deadAreaColor+";\n\t\t\t\tscrollbar-shadow-color: "+this.deadAreaColor+";\n\t\t\t\tscrollbar-darkshadow-color: "+this.deadAreaColor+";"}},watch:{deadAreaColor:function(){this.setColors()}},mounted:function(){this.setColors(),this.updateSyncedScroll()},methods:{updateSyncedScroll:function(){var e=this.$refs.tbody,t=e.scrollLeft;if(this.scrollHorizontal){if(this.syncHeaderScroll){var r=this.$refs.thead;r.scrollLeft!==t&&(r.scrollLeft=t)}if(this.includeFooter&&this.syncFooterScroll){var o=this.$refs.tfoot;o.scrollLeft!==t&&(o.scrollLeft=t)}}this.$emit("scroll",e.scrollTop,t,e.scrollHeight,e.scrollWidth)},setColors:function(){this.$refs.table.style.setProperty("--dead-area-color",this.deadAreaColor)},onDragEnterHeader:function(e){this.$emit("header-dragenter",e)},onDragOverHeader:function(e){this.$emit("header-dragover",e)},onDropHeader:function(e){this.$emit("header-drop",e)}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=r.n(o);for(var l in o)"default"!==l&&function(e){r.d(t,e,function(){return o[e]})}(l);var a=r(8),s=!1,i=function(e){s||r(2)},c=r(7)(n.a,a.a,!1,i,null,null);c.options.__file="src/VueScrollingTable.vue",t.default=c.exports},function(e,t,r){var o=r(3);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),r(5)("508563c8",o,!1)},function(e,t,r){(e.exports=r(4)(void 0)).push([e.i,'\ntable.scrolling {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1 1 auto;\n\t        flex: 1 1 auto;\n\twidth: 100%;\n\theight: 100%;\n\tborder-collapse: collapse;\n\toverflow: hidden;\n\t/* Use this to create a "dead" area color if table is too wide for cells */\n\tbackground-color: #ccc;\n\t--dead-area-color: #ccc;\n}\ntable.scrolling thead,\ntable.scrolling tfoot {\n\t/* Grow automatically to fit content, don\'t shrink it proportionately to the body. */\n\t-webkit-box-flex: 0;\n\t    -ms-flex: 0 0 auto;\n\t        flex: 0 0 auto;\n\tdisplay: block;\n\t/* Horizontal scrolling, when allowed, is controlled by JS, not a scroll bar. */\n\toverflow: hidden;\n}\ntable.scrolling tbody {\n\tdisplay: block;\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1 1 auto;\n\t        flex: 1 1 auto;\n\t/* Disable all scrolling by default */\n\toverflow: hidden;\n}\n\n/* Turn on vertical scrolling for all elements so scroll bars take up the same space */\ntable.scrolling.scrolly tbody,\ntable.scrolling.scrolly thead.scrollsync,\ntable.scrolling.scrolly tfoot.scrollsync {\n\toverflow-y: scroll;\n}\n\n/* Turn on horizontal scrolling for the body only */\ntable.scrolling.scrollx tbody {\n\toverflow-x: scroll;\n}\n\n/*\nFor Webkit, use "dead area" color to hide vertical scrollbar functions in the header and footer.\nSince WebKit supports CSS variables and style attributes don\'t support pseudo-classes, use variables.\nDisplay is set because otherwise Chrome ignores the other styling.\nTODO: on Chrome/Safari for Mac, scrollbars are not shown anyway and this creates an extra block. No impact on iOS Safari.\n*/\ntable.scrolling.scrolly thead.scrollsync::-webkit-scrollbar {\n\tdisplay: block;\n\tbackground-color: var(--dead-area-color);\n}\ntable.scrolling.scrolly thead.scrollsync::-webkit-scrollbar-track {\n\tbackground-color: var(--dead-area-color);\n}\n\n/* IE11 adds an extra tbody, have to hide it. */\ntable.scrolling tbody:nth-child(3) {\n\tdisplay: none;\n}\n\n/* The one caveat to scrolling this way: a hard-set width is required. Can override in thead/tbody slot. */\ntable.scrolling td,\ntable.scrolling th {\n\tborder: 1px solid #ddd;\n\n\t/* These must all be set the same in your overriding CSS */\n\twidth: 10em;\n\tmin-width: 10em;\n\tmax-width: 10em;\n\n\t/* Important in case your data is too long for your cell */\n\toverflow: hidden;\n\tword-wrap: break-word;\n}\ntable.scrolling td {\n\tbackground-color: #fff;\n}\ntable.scrolling th {\n\tbackground-color: #f7f7f7;\n}\n',""])},function(e,t){function r(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var n=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([n]).join("\n")}return[r].join("\n")}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=r(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var l=this[n][0];"number"==typeof l&&(o[l]=!0)}for(n=0;n<e.length;n++){var a=e[n];"number"==typeof a[0]&&o[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){function o(e){for(var t=0;t<e.length;t++){var r=e[t],o=c[r.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](r.parts[n]);for(;n<r.parts.length;n++)o.parts.push(l(r.parts[n]));o.parts.length>r.parts.length&&(o.parts.length=r.parts.length)}else{var a=[];for(n=0;n<r.parts.length;n++)a.push(l(r.parts[n]));c[r.id]={id:r.id,refs:1,parts:a}}}}function n(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function l(e){var t,r,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(h)return p;o.parentNode.removeChild(o)}if(b){var l=f++;o=u||(u=n()),t=a.bind(null,o,l,!1),r=a.bind(null,o,l,!0)}else o=n(),t=function(e,t){var r=t.css,o=t.media,n=t.sourceMap;if(o&&e.setAttribute("media",o),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,o),r=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else r()}}function a(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,n);else{var l=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(l,a[t]):e.appendChild(l)}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=r(6),c={},d=s&&(document.head||document.getElementsByTagName("head")[0]),u=null,f=0,h=!1,p=function(){},b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){h=r;var n=i(e,t);return o(n),function(t){for(var r=[],l=0;l<n.length;l++){var a=n[l];(s=c[a.id]).refs--,r.push(s)}t?o(n=i(e,t)):n=[];for(l=0;l<r.length;l++){var s;if(0===(s=r[l]).refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete c[s.id]}}}};var y=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var r=[],o={},n=0;n<t.length;n++){var l=t[n],a=l[0],s={id:e+":"+n,css:l[1],media:l[2],sourceMap:l[3]};o[a]?o[a].parts.push(s):r.push(o[a]={id:a,parts:[s]})}return r}},function(e,t){e.exports=function(e,t,r,o,n,l){var a,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(a=e,s=e.default);var c,d="function"==typeof s?s.options:s;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),r&&(d.functional=!0),n&&(d._scopeId=n),l?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},d._ssrRegister=c):o&&(c=o),c){var u=d.functional,f=u?d.render:d.beforeCreate;u?(d._injectStyles=c,d.render=function(e,t){return c.call(t),f(e,t)}):d.beforeCreate=f?[].concat(f,c):[c]}return{esModule:a,exports:s,options:d}}},function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",{ref:"table",staticClass:"scrolling",class:{scrolly:e.scrollVertical,scrollx:e.scrollHorizontal},style:e.tableStyle},[r("thead",{ref:"thead",class:{scrollsync:e.syncHeaderScroll},style:e.syncHeaderScroll&&e.scrollVertical?e.stubScrollbarStyle:"",attrs:{name:"thead"},on:{dragenter:e.onDragEnterHeader,dragover:function(t){t.preventDefault(),e.onDragOverHeader(t)},drop:e.onDropHeader}},[e._t("thead")],2),e._v(" "),r("tbody",{ref:"tbody",attrs:{name:"tbody"},on:{"&scroll":function(t){e.updateSyncedScroll(t)}}},[e._t("tbody")],2),e._v(" "),e.includeFooter?r("tfoot",{ref:"tfoot",class:{scrollsync:e.syncFooterScroll},style:e.syncFooterScroll&&e.scrollVertical?e.stubScrollbarStyle:"",attrs:{name:"tfoot"}},[e._t("tfoot")],2):e._e()])};o._withStripped=!0;var n={render:o,staticRenderFns:[]};t.a=n}])},e.exports=o()}});