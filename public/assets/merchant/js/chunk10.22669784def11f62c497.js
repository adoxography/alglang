webpackJsonp([10],{CoJ8:function(t,i,s){!function(){"use strict";function i(t,i,s,e,l){this.config={scrollThrottle:10,draggerThrottle:10,resizeRefresh:!0,observerThrottle:100,resizeDebounce:100,unselectableBody:!0,scrollingPhantomDelay:1e3,draggingPhantomDelay:1e3,preventParentScroll:!1,el1Class:"vb",el1ScrollVisibleClass:"vb-visible",el1ScrollInvisibleClass:"vb-invisible",el1ScrollingClass:"vb-scrolling",el1ScrollingPhantomClass:"vb-scrolling-phantom",el1DraggingClass:"vb-dragging",el1DraggingPhantomClass:"vb-dragging-phantom",el2Class:"vb-content",draggerCommonClass:"vb-dragger",draggerCommonStylerClass:"vb-dragger-styler",draggerYClass:"vb-dragger-y",draggerXClass:"vb-dragger-x"},this.ins={binding:null,el1:null,el2:null,dragger:null,mutationObserver:null,scrollingClassTimeout:null,draggingClassTimeout:null,scrollingPhantomClassTimeout:null,draggingPhantomClassTimeout:null,windowResize:null,scrollHandler:null,wheelHandler:null,y:{barMousedown:null,documentMousemove:null,documentMouseup:null},x:{barMousedown:null,documentMousemove:null,documentMouseup:null}},this.state={nativeScrollbarSize:null,y:{visibleRatio:0,barTop:0,barBaseHeight:0,barClickOffset:0,scrollPercent:0,scrollTop:0},x:{visibleRatio:0,barLeft:0,barBaseWidth:0,barClickOffset:0,scrollPercent:0,scrollLeft:0},barDragging:!1},this.validateMarkup=function(){return!!i.firstChild||this.util.warn("Element 1 with v-bar directive doesn't have required child element 2.")},this.initializeOptions=function(){var t=s.value?s.value:s||{};for(var i in t)this.config[i]=t[i]},this.initializeEvents=function(){this.ins.y.barMousedown=this.barMousedown("y"),this.ins.x.barMousedown=this.barMousedown("x"),this.ins.y.documentMousemove=this.documentMousemove("y"),this.ins.x.documentMousemove=this.documentMousemove("x"),this.ins.y.documentMouseup=this.documentMouseup("y"),this.ins.x.documentMouseup=this.documentMouseup("x"),this.ins.windowResize=this.windowResize(),this.ins.scrollHandler=this.scrollHandler(),this.ins.wheelHandler=this.wheelHandler(),this.ins.el2.addEventListener("scroll",this.ins.scrollHandler,0),this.ins.draggerY.addEventListener("mousedown",this.ins.y.barMousedown,0),this.ins.draggerX.addEventListener("mousedown",this.ins.x.barMousedown,0),this.config.preventParentScroll&&this.ins.el2.addEventListener("wheel",this.ins.wheelHandler,0),this.config.resizeRefresh&&window.addEventListener("resize",this.ins.windowResize,0)},this.initializeStyles=function(){this.util.aC(this.ins.el1,this.config.el1Class),this.ins.el1.style.position="relative",this.ins.el1.style.overflow="hidden",this.util.aC(this.ins.el2,this.config.el2Class),this.ins.el2.style.display="block",this.ins.el2.style.overflowX="scroll",this.ins.el2.style.overflowY="scroll",this.ins.el2.style.width="100%",this.ins.el2.style.height="100%",this.util.cS(this.ins.el2,"BoxSizing","content-box");var t=(this.state.y.visibleRatio<1||this.state.x.visibleRatio<1)&&this.state.nativeScrollbarSize,i=this.state.nativeScrollbarSize?this.state.nativeScrollbarSize:20;t&&this.state.nativeScrollbarSize>0&&(this.ins.el2.style.width="calc(100% + "+i+"px)",this.ins.el2.style.height="calc(100% + "+i+"px)")},this.initializeMutationObserver=function(){if("undefined"==typeof MutationObserver)return null;var t=new MutationObserver(this.util.throttle(function(t){this.refresh()}.bind(this),this.config.observerThrottle));return t.observe(this.ins.el2,{childList:!0,characterData:!0,subtree:!0}),this.ins.mutationObserver=t,t},this.initialize=function(){return i.$_vuebar?this.util.warn("Can't initialize on already initialized element."):this.validateMarkup()?(this.initializeOptions(),this.state.nativeScrollbarSize=this.util.getNativeScrollbarSize(i.firstElementChild),this.ins.binding=s.value?s:null,this.ins.el1=i,this.ins.el2=i.firstElementChild,this.ins.draggerY=this.createDragger("y"),this.ins.draggerX=this.createDragger("x"),this.initializeEvents(),this.initializeMutationObserver(),this.initializeStyles(),this.ins.el1.$_vuebar=this,this.refresh({alsoImmediately:!0}),this):void 0},this.destroy=function(t){t=t||{};return this.ins.draggerY.removeEventListener("mousedown",this.ins.y.barMousedown,0),this.ins.draggerX.removeEventListener("mousedown",this.ins.x.barMousedown,0),this.ins.el2.removeEventListener("scroll",this.ins.scrollHandler,0),this.ins.el2.removeEventListener("wheel",this.ins.scrollHandler,0),window.removeEventListener("resize",this.ins.windowResize,0),this.ins.mutationObserver&&this.ins.mutationObserver.disconnect(),this.util.rC(this.ins.el1,this.config.el1Class),this.util.rC(this.ins.el1,this.config.el1ScrollVisibleClass),this.util.rC(this.ins.el1,this.config.el1ScrollInvisibleClass),this.util.rC(this.ins.el1,this.config.el1ScrollingClass),this.util.rC(this.ins.el1,this.config.el1ScrollingPhantomClass),this.util.rC(this.ins.el1,this.config.el1DraggingClass),t.skipStyles||(this.ins.el1.style.position="",this.ins.el1.style.overflow=""),this.util.rC(this.ins.el2,this.config.el2Class),t.skipStyles||(this.ins.el2.style.boxSizing="",this.ins.el2.style.display="",this.ins.el2.style.overflowX="",this.ins.el2.style.overflowY="",this.ins.el2.style.height="",this.ins.el2.style.width="",this.ins.el2.style.paddingRight=""),this.ins.draggerY.removeChild(this.ins.draggerY.firstChild),this.ins.draggerX.removeChild(this.ins.draggerX.firstChild),this.ins.el1.removeChild(this.ins.draggerY),this.ins.el1.removeChild(this.ins.draggerX),this.ins.scrollingPhantomClassTimeout&&clearTimeout(this.ins.scrollingPhantomClassTimeout),this.ins.draggingPhantomClassTimeout&&clearTimeout(this.ins.draggingPhantomClassTimeout),delete this.ins.el1.$_vuebar,this.ins.el1},this.refresh=function(s){(s=s||{}).alsoImmediately&&(this.computeVisibleRatios(),this.computeBarTopOnScroll(),this.computeBarLeftOnScroll(),this.computeBarBaseHeight(),this.computeBarBaseWidth(),this.updateDraggers()),t.nextTick(function(){i.$_vuebar&&(this.computeVisibleRatios(),this.computeBarTopOnScroll(),this.computeBarLeftOnScroll(),this.computeBarBaseHeight(),this.computeBarBaseWidth(),this.updateDraggers())}.bind(this))},this.computeVisibleRatios=function(){this.state.y.visibleRatio=this.ins.el2.clientHeight/this.ins.el2.scrollHeight,this.state.x.visibleRatio=this.ins.el2.clientWidth/this.ins.el2.scrollWidth},this.computeScrollTop=function(){var t=this.ins.draggerY.offsetHeight;this.state.y.scrollPercent=this.state.y.barTop/(this.ins.el2.clientHeight-t);var i=(this.ins.el2.scrollHeight-this.ins.el2.clientHeight)*this.state.y.scrollPercent;this.state.y.scrollTop=i},this.computeScrollLeft=function(){var t=this.ins.draggerX.offsetWidth;this.state.x.scrollPercent=this.state.x.barLeft/(this.ins.el2.clientWidth-t);var i=(this.ins.el2.scrollWidth-this.ins.el2.clientWidth)*this.state.x.scrollPercent;this.state.x.scrollLeft=i},this.computeBarBaseHeight=function(){this.state.y.visibleRatio>=1?this.state.y.barBaseHeight=0:this.state.y.barBaseHeight=this.ins.el2.clientHeight*this.state.y.visibleRatio},this.computeBarBaseWidth=function(){this.state.x.visibleRatio>=1?this.state.x.barBaseWidth=0:this.state.x.barBaseWidth=this.ins.el2.clientWidth*this.state.x.visibleRatio},this.computeBarTopOnDrag=function(t){var i=this.ins.draggerY.offsetHeight,s=t.clientY-this.ins.el1.getBoundingClientRect().top;s<=this.state.y.barClickOffset&&(this.state.y.barTop=0),s>this.state.y.barClickOffset&&(this.state.y.barTop=s-this.state.y.barClickOffset),this.state.y.barTop+i>=this.ins.el2.clientHeight&&(this.state.y.barTop=this.ins.el2.clientHeight-i)},this.computeBarLeftOnDrag=function(t){var i=this.ins.draggerX.offsetWidth,s=t.clientX-this.ins.el1.getBoundingClientRect().left;s<=this.state.x.barClickOffset&&(this.state.x.barLeft=0),s>this.state.x.barClickOffset&&(this.state.x.barLeft=s-this.state.x.barClickOffset),this.state.x.barLeft+i>=this.ins.el2.clientWidth&&(this.state.x.barLeft=this.ins.el2.clientWidth-i)},this.computeBarTopOnScroll=function(){var t=this.ins.el2.clientHeight,i=this.ins.el2.scrollHeight,s=this.ins.el2.scrollTop/(i-t),e=t-this.ins.draggerY.offsetHeight;this.state.y.barTop=e*s},this.computeBarLeftOnScroll=function(){var t=this.ins.el2.clientWidth,i=this.ins.el2.scrollWidth,s=this.ins.el2.scrollLeft/(i-t),e=t-this.ins.draggerX.offsetWidth;this.state.x.barLeft=e*s},this.createDragger=function(t){var i=document.createElement("div"),s=document.createElement("div");return this.util.aC(i,this.config.draggerCommonClass),this.util.aC(s,this.config.draggerCommonStylerClass),"y"===t&&this.util.aC(i,this.config.draggerYClass),"x"===t&&this.util.aC(i,this.config.draggerXClass),i.style.position="absolute",i.appendChild(s),this.ins.el1.appendChild(i),i},this.updateDraggers=function(t){t=t||{};var i=!!this.state.nativeScrollbarSize&&this.state.y.visibleRatio<1,s=!!this.state.nativeScrollbarSize&&this.state.x.visibleRatio<1;if(this.ins.draggerY.style.display=i?"":"none",this.ins.draggerX.style.display=s?"":"none",!i&&!s)return this.util.rC(this.ins.el1,this.config.el1ScrollVisibleClass),void this.util.aC(this.ins.el1,this.config.el1ScrollInvisibleClass);this.util.rC(this.ins.el1,this.config.el1ScrollInvisibleClass),this.util.aC(this.ins.el1,this.config.el1ScrollVisibleClass),this.ins.draggerY.style.height=parseInt(Math.round(this.state.y.barBaseHeight))+"px",this.ins.draggerY.style.top=parseInt(Math.round(this.state.y.barTop))+"px",this.ins.draggerX.style.width=parseInt(Math.round(this.state.x.barBaseWidth))+"px",this.ins.draggerX.style.left=parseInt(Math.round(this.state.x.barLeft))+"px",t.withScrollingClasses&&(this.util.aC(this.ins.el1,this.config.el1ScrollingClass),this.ins.scrollingClassTimeout&&clearTimeout(this.ins.scrollingClassTimeout),this.ins.scrollingClassTimeout=setTimeout(function(){this.util.rC(this.ins.el1,this.config.el1ScrollingClass)}.bind(this),this.config.scrollThrottle+5),this.util.aC(this.ins.el1,this.config.el1ScrollingPhantomClass),this.ins.scrollingPhantomClassTimeout&&clearTimeout(this.ins.scrollingPhantomClassTimeout),this.ins.scrollingPhantomClassTimeout=setTimeout(function(){this.util.rC(this.ins.el1,this.config.el1ScrollingPhantomClass)}.bind(this),this.config.scrollThrottle+this.config.scrollingPhantomDelay))},this.preventParentScroll=function(t){if(this.state.y.visibleRatio>=1)return!1;var i=this.ins.el2.scrollHeight-this.ins.el2.clientHeight,s=this.ins.el2.scrollTop,e=t.deltaY<0,l=t.deltaY>0;return s<=0&&e?(t.preventDefault(),!1):s>=i&&l?(t.preventDefault(),!1):void 0},this.updateScroll=function(){this.ins.el2.scrollTop=this.state.y.scrollTop,this.ins.el2.scrollLeft=this.state.x.scrollLeft},this.scrollHandler=function(){return this.util.throttle(function(t){this.computeVisibleRatios(),this.computeBarBaseHeight(),this.computeBarBaseWidth(),this.state.barDragging||(this.computeBarTopOnScroll(),this.computeBarLeftOnScroll(),this.updateDraggers({withScrollingClasses:!0}))}.bind(this),this.config.scrollThrottle)},this.wheelHandler=function(){return function(t){this.preventParentScroll(t)}.bind(this)},this.documentMousemove=function(t){return this.util.throttle(function(i){"y"===t&&this.computeBarTopOnDrag(i),"x"===t&&this.computeBarLeftOnDrag(i),this.updateDraggers(),this.computeScrollTop(),this.computeScrollLeft(),this.updateScroll()}.bind(this),this.config.draggerThrottle)},this.documentMouseup=function(t){return function(i){this.state.barDragging=!1,this.ins.el1.style.userSelect="",this.config.unselectableBody&&this.util.cS(document.body,"UserSelect",""),this.util.rC(this.ins.el1,this.config.el1DraggingClass),this.ins.draggingPhantomClassTimeout=setTimeout(function(){this.util.rC(this.ins.el1,this.config.el1DraggingPhantomClass)}.bind(this),this.config.draggingPhantomDelay),document.removeEventListener("mousemove",this.ins[t].documentMousemove,0),document.removeEventListener("mouseup",this.ins[t].documentMouseup,0)}.bind(this)},this.barMousedown=function(t){return function(i){if(1!==i.which)return!1;"y"===t&&(this.state.barDragging="y",this.state.y.barClickOffset=i.offsetY),"x"===t&&(this.state.barDragging="x",this.state.x.barClickOffset=i.offsetX),this.ins.el1.style.userSelect="none",this.config.unselectableBody&&this.util.cS(document.body,"UserSelect","none"),this.util.aC(this.ins.el1,this.config.el1DraggingClass),this.ins.draggingPhantomClassTimeout&&clearTimeout(this.ins.draggingPhantomClassTimeout),this.util.aC(this.ins.el1,this.config.el1DraggingPhantomClass),document.addEventListener("mousemove",this.ins[t].documentMousemove,0),document.addEventListener("mouseup",this.ins[t].documentMouseup,0)}.bind(this)},this.windowResize=function(){return this.util.debounce(function(t){this.refresh()}.bind(this),this.config.resizeDebounce)},this.scrollTo=function(t,i){if(!t)return this.util.warn("[scrollTo]: You need to specify position to scroll.");"top"===t?this.ins.el2.scrollTop=0:"bottom"===t?this.ins.el2.scrollTop=this.ins.el2.scrollHeight:(this.ins.el2.scrollTop=t,this.ins.el2.scrollLeft=i)},this.util={warn:function(i){i="[Vuebar]: "+i;return t.util&&t.util.warn?t.util.warn(i):window.console.warn(i)},debounce:function(t,i){var s=null;return function(){var e=this,l=arguments;clearTimeout(s),s=setTimeout(function(){t.apply(e,l)},i)}},throttle:function(t,i,s){var e,l;return i||(i=250),function(){var n=s||this,r=+new Date,o=arguments;e&&r<e+i?(clearTimeout(l),l=setTimeout(function(){e=r,t.apply(n,o)},i)):(e=r,t.apply(n,o))}},cS:function(t,i,s){t.style["webkit"+i]=s,t.style["moz"+i]=s,t.style["ms"+i]=s,t.style["o"+i]=s,t.style[i.slice(0,1).toLowerCase()+i.substring(1)]=s},hC:function(t,i){return t.classLists?t.classList.contains(i):new RegExp("\\b"+i+"\\b").test(t.className)},aC:function(t,i){var s=this.util&&this.util.hC?this.util.hC:this.hC;t.classList?t.classList.add(i):s(t,i)||(t.className+=" "+i)},rC:function(t,i){t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("\\b"+i+"\\b","g"),"")},getNativeScrollbarSize:function(t){t=t||document.body;var i,s,e=document.createElement("div"),l=document.createElement("div");return e.style.display="block",e.style.boxSizing="content-box",e.style.position="absolute",e.style.pointerEvents="none",e.style.opacity="0",e.style.bottom="0",e.style.right="0",e.style.width="100px",e.style.height="30px",e.style.overflow="hidden",e.appendChild(l),t.appendChild(e),i=l.offsetWidth,e.style.overflowY="scroll",l.style.height="60px",l.style.width="100%",s=i-l.offsetWidth,t.removeChild(e),s}}}function s(t,s){(s=s||{}).directive=s.directive||"bar",t.$_Vuebar=i,t.prototype.$_Vuebar=i,t.directive(s.directive,{inserted:function(s,e,l){new i(t,s,e,l).initialize()},componentUpdated:function(t,i,s,e){t.$_vuebar&&t.$_vuebar.refresh()},unbind:function(t,i,s,e){t.$_vuebar&&t.$_vuebar.destroy({skipStyles:!0})}})}t.exports=s}()},GRWm:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("CoJ8"),l=s.n(e);Vue.use(l.a);var n={props:["morphemesOn","hasMorphemes"],data:function(){return{show:!1}},methods:{toggleShow:function(){this.show=!this.show}},created:function(){this.morphemesOn&&(this.show=this.hasMorphemes&&this.morphemesOn)},mounted:function(){var t=this.$refs.table;Vue.nextTick(function(){t.style.width=t.firstChild.scrollWidth+"px"});var i=t.firstChild,s=!0,e=!1,l=void 0;try{for(var n,r=i.children[Symbol.iterator]();!(s=(n=r.next()).done);s=!0){var o=n.value,a=!0,h=!1,c=void 0;try{for(var u,g=o.children[Symbol.iterator]();!(a=(u=g.next()).done);a=!0){var d=u.value;d.style.top=d.offsetTop+"px"}}catch(t){h=!0,c=t}finally{try{a||null==g.return||g.return()}finally{if(h)throw c}}}}catch(t){e=!0,l=t}finally{try{s||null==r.return||r.return()}finally{if(e)throw l}}}},r=s("K1/g"),o=Object(r.a)(n,void 0,void 0,!1,null,null,null);i.default=o.exports}});