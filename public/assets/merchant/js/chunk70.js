webpackJsonp([70],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tab.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    name: {
      required: true
    },
    selected: {
      default: false
    }
  },
  data: function data() {
    return {
      isActive: false
    };
  },
  computed: {
    href: function href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },
  mounted: function mounted() {
    this.isActive = this.selected;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tab.vue?vue&type=template&id=dbd21ca4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isActive,
          expression: "isActive"
        }
      ]
    },
    [_c("div", { staticClass: "tabs-details" }, [_vm._t("default")], 2)]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Tab.vue":
=======
/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Filter.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Filter =
/*#__PURE__*/
function () {
  function Filter(name, value, operator) {
    _classCallCheck(this, Filter);

    this.keys = name.split('.');
    this.operator = operator;
    this.setValue(value);
  }

  _createClass(Filter, [{
    key: "allows",
    value: function allows(item) {
      var itemValue = this.getValue(item);
      var rc = false;

      if (this.value == 'null') {
        return itemValue == null;
      } else if (!this.value) {
        rc = true;
      } else if (itemValue === null) {
        rc = false;
      } else if (this.operator == 'like') {
        var val = itemValue.toLowerCase();

        if (val.includes(this.value) || val.replace(/\(|\)/g, '').includes(this.value)) {
          rc = true;
        }
      } else if (itemValue == this.value) {
        rc = true;
      }

      return rc;
    }
  }, {
    key: "update",
    value: function update(newValue) {
      this.setValue(newValue);
    }
  }, {
    key: "getValue",
    value: function getValue(item) {
      var found = true;

      if (item.form) {
        item = item.form;
      }

      for (var i = 0; i < this.keys.length && found; i++) {
        var key = this.keys[i];

        if (item.hasOwnProperty(key)) {
          item = item[key];
        } else {
          item = null;
          found = false;
        }
      }

      return item;
    }
  }, {
    key: "setValue",
    value: function setValue(newValue) {
      if (typeof newValue === 'string') {
        this.value = newValue.toLowerCase();
      } else {
        this.value = newValue;
      }
    }
  }]);

  return Filter;
}();

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["lists"],
  data: function data() {
    return {
      filteredLists: [],
      filters: {}
    };
  },
  created: function created() {
    this.filteredLists = this.lists;
  },
  methods: {
    onInput: function onInput(event) {
      var name = event.target.name;
      var value = event.target.value;
      var operator = event.target.dataset.operator;

      if (this.filters[name]) {
        this.filters[name].update(value);
      } else {
        this.filters[name] = new Filter(name, value, operator);
      }

      this.filter();
    },
    filter: function filter() {
      var _this = this;

      var tempLists = {};

      _.each(this.lists, function (list, key) {
        if (Array.isArray(list)) {
          var tempList = [];
          list.forEach(function (item) {
            if (!_this.isFiltered(item)) {
              tempList.push(item);
            }
          });
          tempLists[key] = tempList;
        }
      });

      this.filteredLists = tempLists;
    },
    isFiltered: function isFiltered(item) {
      var rc = false;

      _.forEach(this.filters, function (filter) {
        if (!filter.allows(item)) {
          rc = true;
          return false;
        }
      });

      return rc;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/components/Filter.vue":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tab_vue_vue_type_template_id_dbd21ca4___ = __webpack_require__("./resources/assets/js/components/Tab.vue?vue&type=template&id=dbd21ca4&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tab_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Tab.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Filter_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Filter.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
>>>>>>> Move gloss rendering into the GlossLine class




/* normalize component */

<<<<<<< HEAD
var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Tab_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Tab_vue_vue_type_template_id_dbd21ca4___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Tab_vue_vue_type_template_id_dbd21ca4___["b" /* staticRenderFns */],
=======
var component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__Filter_vue_vue_type_script_lang_js___["a" /* default */],
  render,
  staticRenderFns,
>>>>>>> Move gloss rendering into the GlossLine class
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/etc/httpd/docs/alglang.localhost/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
<<<<<<< HEAD
      api.createRecord('dbd21ca4', component.options)
    } else {
      api.reload('dbd21ca4', component.options)
    }
    module.hot.accept("./Tab.vue?vue&type=template&id=dbd21ca4&", function () {
      api.rerender('dbd21ca4', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Tab.vue"
=======
      api.createRecord('4aa1e46f', component.options)
    } else {
      api.reload('4aa1e46f', component.options)
    }
    
  }
}
component.options.__file = "resources/assets/js/components/Filter.vue"
>>>>>>> Move gloss rendering into the GlossLine class
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/assets/js/components/Tab.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tab.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Tab.vue?vue&type=template&id=dbd21ca4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_dbd21ca4___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Tab.vue?vue&type=template&id=dbd21ca4&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_dbd21ca4___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_dbd21ca4___["b"]; });

=======
/***/ "./resources/assets/js/components/Filter.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Filter.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_vue_vue_type_script_lang_js___["a" /* default */]); 
>>>>>>> Move gloss rendering into the GlossLine class

/***/ })

});