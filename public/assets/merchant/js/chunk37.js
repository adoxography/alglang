webpackJsonp([37],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Tabs.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: ['active'],

	data: function data() {
		return {
			tabs: []
		};
	},
	created: function created() {
		this.tabs = this.$children;
	},
	mounted: function mounted() {
		if (!this.active) {
			var hash = location.hash;

			if (hash != '') {
				this.tabs.forEach(function (tab) {
					tab.isActive = tab.href == location.hash;
				});
			}
		} else {
			this.selectTabByName(this.active);
		}
	},


	methods: {
		selectTab: function selectTab(targetTab) {
			this.selectTabByName(targetTab.name);

			this.$emit('tabChanged', targetTab.name);
		},
		selectTabByName: function selectTabByName(name) {
			this.tabs.forEach(function (tab) {
				tab.isActive = tab.name === name;
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-971a3596\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Tabs.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { class: { tabs: _vm.tabs.length > 0 } }, [
      _c(
        "ul",
        _vm._l(_vm.tabs, function(tab) {
          return _c(
            "li",
            {
              class: { "is-active": tab.isActive },
              staticStyle: { "margin-top": "0" }
            },
            [
              _c(
                "a",
                {
                  attrs: { href: tab.href },
                  on: {
                    click: function($event) {
                      _vm.selectTab(tab)
                    }
                  }
                },
                [_vm._v(_vm._s(tab.name))]
              )
            ]
          )
        })
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "tabs-details" }, [_vm._t("default")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-971a3596", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/Tabs.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Tabs.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-971a3596\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Tabs.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Tabs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-971a3596", Component.options)
  } else {
    hotAPI.reload("data-v-971a3596", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});