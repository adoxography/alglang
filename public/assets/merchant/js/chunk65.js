<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:public/assets/merchant/js/chunk65.js
<<<<<<< HEAD:public/assets/merchant/js/chunk65.js
webpackJsonp([65,72],{
=======
webpackJsonp([12,18],{
=======
webpackJsonp([12],{
>>>>>>> Remove unneeded components:public/assets/merchant/js/chunk12.js

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Basic-Paradigm-Search.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD:public/assets/merchant/js/chunk65.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__("./resources/assets/js/components/forms/Form.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");


/* harmony default export */ __webpack_exports__["a"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0__Form__["default"],
  props: ['method', 'action', 'variables', 'initialValue'],
  data: function data() {
    return {
      language: new __WEBPACK_IMPORTED_MODULE_1__Datalist_js__["a" /* Datalist */](),
      variable: new __WEBPACK_IMPORTED_MODULE_1__Datalist_js__["a" /* Datalist */](),
      selectedValue: ''
    };
  },
  computed: {
    values: function values() {
      var _this = this;

      var variable = this.variables.find(function (variable) {
        return variable.id == _this.variable.id;
      });

      if (variable) {
        return variable.values;
      } else {
        return [];
      }
    }
  },
  created: function created() {
    if (this.initialValue) {
      this.selectedValue = this.initialValue;
    }
  }
});

/***/ }),
>>>>>>> Adapt async autocomplete into Buefy component:public/assets/merchant/js/chunk12.js
=======
webpackJsonp([65],{
>>>>>>> Update sources component

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/search/Nominal-Paradigm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_OldErrors__ = __webpack_require__("./resources/assets/js/mixins/OldErrors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_OldSources__ = __webpack_require__("./resources/assets/js/mixins/OldSources.js");
=======
>>>>>>> Remove unneeded components:public/assets/merchant/js/chunk12.js
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
//
//
//
=======
webpackJsonp([65],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Filter-List.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
>>>>>>> Move gloss rendering into the GlossLine class
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
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
<<<<<<< HEAD
  props: ['languages'],
  data: function data() {
    return {
      values: {
        class: '',
        orders: [],
        language: {
          text: 'Proto-Algonquian',
          id: '1'
        },
        orderValue: ''
      }
    };
  },
  methods: {
    onOrderChange: function onOrderChange(value) {
      var tokens = value.split(',');
      var temp = [];
      tokens.forEach(function (token) {
        temp.push(token);
      });
      this.values.orders = temp;
    },
    getData: function getData() {
      return this.values;
    },
    importData: function importData(data) {
      var _this = this;

      var found = false;

      _.forEach(data.classes, function (theClass) {
        if (theClass.checked && theClass.id <= 4) {
          _this.values.class = theClass.id;
          found = true;
          return false;
        }
      });

      if (!found) {
        this.values.class = '';
      }

      this.values.orders = [];
      this.values.orderValue = '';
      found = false;

      for (var i = 0; i < data.orders.length && !found; i++) {
        found = false;

        if (data.orders[i].checked) {
          if (data.orders[i].id != 1) {
            found = true;
          }

          if (data.orders[i].id != 3 || this.values.orders.length == 0) {
            this.values.orders = [data.orders[i].id];
            this.values.orderValue = data.orders[i].id;
          } else {
            this.values.orders = [1, 3];
            this.values.orderValue = '1,3';
          }
        }
      }

      if (data.languages.length > 0) {
        this.values.language = data.languages[0];
      } else {
        this.values.language = {
          text: '',
          id: ''
        };
      }
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['oldLanguages'],
  data: function data() {
    return {
      languages: [new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */]()]
    };
  },
  created: function created() {
    if (this.oldLanguages && Array.isArray(this.oldLanguages)) {
      var languages = [];

      for (var i = 0; i < this.oldLanguages.length; i += 2) {
        languages.push(new __WEBPACK_IMPORTED_MODULE_0__Datalist_js__["a" /* Datalist */](this.oldLanguages[i], this.oldLanguages[i + 1]));
      }

      this.languages = languages;
>>>>>>> Update sources component
=======
  props: ['list', 'filteroptions'],
  data: function data() {
    return {
      parsedList: [],
      parsedFilterOptions: [],
      filteredList: [],
      selected: ''
    };
  },
  created: function created() {
    this.parsedList = JSON.parse(this.list);
    this.parsedFilterOptions = JSON.parse(this.filteroptions);
    this.filteredList = this.parsedList;
  },
  methods: {
    filter: function filter() {
      var _this = this;

      // console.log(this.$refs.pages);
      this.$refs.pages.selected = 0;

      if (this.selected == '') {
        this.filteredList = this.parsedList;
      } else {
        this.filteredList = [];
        this.parsedList.forEach(function (item) {
          if (item.slot_id == _this.selected) {
            _this.filteredList.push(item);
          }
        });
      }
>>>>>>> Move gloss rendering into the GlossLine class
    }
  }
});

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Basic-Paradigm-Search.vue?vue&type=template&id=6fdd8f78&":
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Filter-List.vue?vue&type=template&id=04b3280c&":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
<<<<<<< HEAD
    "form",
    { attrs: { action: "/verbs/search/paradigm/results", method: "GET" } },
    [
      _c("input", {
        attrs: { type: "hidden", name: "affirmative", value: "on" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "modeSelect", value: "indicativeOnly" }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "field is-grouped" },
        [
          _c("p", { staticClass: "control" }, [
            _c("span", { staticClass: "select" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.values.class,
                      expression: "values.class"
                    }
                  ],
                  attrs: { name: "classes[]", required: "required" },
                  on: {
                    change: function($event) {
=======
    "div",
    { staticClass: "alg-filter-list" },
    [
      _c("div", { staticClass: "control is-horizontal" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "control" }, [
          _c("span", { staticClass: "select is-fullwidth" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selected,
                    expression: "selected"
                  }
                ],
                on: {
                  change: [
                    function($event) {
>>>>>>> Move gloss rendering into the GlossLine class
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
<<<<<<< HEAD
                      _vm.$set(
                        _vm.values,
                        "class",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "1" } }, [_vm._v("AI")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "2" } }, [_vm._v("II")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "3" } }, [_vm._v("TA")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "4" } }, [_vm._v("TI")])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "control" }, [
            _c(
              "span",
              { staticClass: "select" },
              [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.values.orderValue,
                        expression: "values.orderValue"
                      }
                    ],
                    attrs: { required: "required" },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.values,
                            "orderValue",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        function($event) {
                          _vm.onOrderChange($event.target.value)
                        }
                      ]
                    }
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "1,3" } }, [
                      _vm._v("Conjunct and Independent")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Conjunct")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Imperative")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [
                      _vm._v("Independent")
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._l(_vm.values.orders, function(order) {
                  return _c("input", {
                    attrs: { type: "hidden", name: "orders[]" },
                    domProps: { value: order }
                  })
=======
                      _vm.selected = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    _vm.filter
                  ]
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("All")]),
                _vm._v(" "),
                _vm._l(_vm.parsedFilterOptions, function(option) {
                  return _c("option", { domProps: { value: option.id } }, [
                    _vm._v(_vm._s(option.abv))
                  ])
>>>>>>> Move gloss rendering into the GlossLine class
                })
              ],
              2
            )
<<<<<<< HEAD
          ]),
          _vm._v(" "),
          _c("alg-datalist", {
            attrs: {
              list: _vm.languages,
              name: "languages[]",
              required: "required"
            },
            model: {
              value: _vm.values.language,
              callback: function($$v) {
                _vm.$set(_vm.values, "language", $$v)
              },
              expression: "values.language"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "button is-success", attrs: { type: "submit" } },
        [_vm._v("Search")]
      )
    ]
=======
          ])
        ])
      ]),
      _vm._v(" "),
      _c("alg-paginated-list", {
        ref: "pages",
        attrs: { list: _vm.filteredList }
      })
    ],
    1
>>>>>>> Move gloss rendering into the GlossLine class
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
<<<<<<< HEAD
    return _c("option", { attrs: { value: "", selected: "selected" } }, [
      _c("span", { staticClass: "placeholder" }, [_vm._v("Select a class...")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("option", { attrs: { value: "", selected: "selected" } }, [
      _c("span", { staticClass: "placeholder" }, [_vm._v("Select an order...")])
=======
    return _c("div", { staticClass: "control-label" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Slot")])
>>>>>>> Move gloss rendering into the GlossLine class
    ])
  }
]
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/assets/js/components/forms/Basic-Paradigm-Search.vue":
=======
/***/ "./resources/assets/js/components/Filter-List.vue":
>>>>>>> Move gloss rendering into the GlossLine class
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Basic_Paradigm_Search_vue_vue_type_template_id_6fdd8f78___ = __webpack_require__("./resources/assets/js/components/forms/Basic-Paradigm-Search.vue?vue&type=template&id=6fdd8f78&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Basic_Paradigm_Search_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/Basic-Paradigm-Search.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Filter_List_vue_vue_type_template_id_04b3280c___ = __webpack_require__("./resources/assets/js/components/Filter-List.vue?vue&type=template&id=04b3280c&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Filter_List_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Filter-List.vue?vue&type=script&lang=js&");
>>>>>>> Move gloss rendering into the GlossLine class
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



<<<<<<< HEAD
=======
/***/ "./resources/assets/js/Datalist.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Datalist; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
>>>>>>> Update sources component

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Datalist =
/*#__PURE__*/
function () {
  function Datalist() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

<<<<<<< HEAD
var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Basic_Paradigm_Search_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Basic_Paradigm_Search_vue_vue_type_template_id_6fdd8f78___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Basic_Paradigm_Search_vue_vue_type_template_id_6fdd8f78___["b" /* staticRenderFns */],
=======


/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Filter_List_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Filter_List_vue_vue_type_template_id_04b3280c___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Filter_List_vue_vue_type_template_id_04b3280c___["b" /* staticRenderFns */],
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
      api.createRecord('6fdd8f78', component.options)
    } else {
      api.reload('6fdd8f78', component.options)
    }
    module.hot.accept("./Basic-Paradigm-Search.vue?vue&type=template&id=6fdd8f78&", function () {
      api.rerender('6fdd8f78', {
=======
      api.createRecord('04b3280c', component.options)
    } else {
      api.reload('04b3280c', component.options)
    }
    module.hot.accept("./Filter-List.vue?vue&type=template&id=04b3280c&", function () {
      api.rerender('04b3280c', {
>>>>>>> Move gloss rendering into the GlossLine class
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
<<<<<<< HEAD
component.options.__file = "resources/assets/js/components/forms/Basic-Paradigm-Search.vue"
=======
    _classCallCheck(this, Datalist);

    this.text = text;
    this.id = id;
    this.extra = extra;
  }

  _createClass(Datalist, [{
    key: "reset",
    value: function reset() {
      this.text = "";
      this.id = "";
      this.extra = "";
    }
  }]);

  return Datalist;
}();



/***/ }),

/***/ "./resources/assets/js/components/forms/search/Nominal-Paradigm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Nominal_Paradigm_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/search/Nominal-Paradigm.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__Nominal_Paradigm_vue_vue_type_script_lang_js___["a" /* default */],
  render,
  staticRenderFns,
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
      api.createRecord('ef303c88', component.options)
    } else {
      api.reload('ef303c88', component.options)
    }
    
  }
}
component.options.__file = "resources/assets/js/components/forms/search/Nominal-Paradigm.vue"
>>>>>>> Update sources component
=======
component.options.__file = "resources/assets/js/components/Filter-List.vue"
>>>>>>> Move gloss rendering into the GlossLine class
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "./resources/assets/js/components/forms/Basic-Paradigm-Search.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Basic_Paradigm_Search_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Basic-Paradigm-Search.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Basic_Paradigm_Search_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/Basic-Paradigm-Search.vue?vue&type=template&id=6fdd8f78&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Basic_Paradigm_Search_vue_vue_type_template_id_6fdd8f78___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Basic-Paradigm-Search.vue?vue&type=template&id=6fdd8f78&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Basic_Paradigm_Search_vue_vue_type_template_id_6fdd8f78___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Basic_Paradigm_Search_vue_vue_type_template_id_6fdd8f78___["b"]; });

=======
/***/ "./resources/assets/js/components/forms/search/Nominal-Paradigm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nominal_Paradigm_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/search/Nominal-Paradigm.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nominal_Paradigm_vue_vue_type_script_lang_js___["a" /* default */]); 
>>>>>>> Update sources component
=======
/***/ "./resources/assets/js/components/Filter-List.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_List_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Filter-List.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_List_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Filter-List.vue?vue&type=template&id=04b3280c&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_List_vue_vue_type_template_id_04b3280c___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Filter-List.vue?vue&type=template&id=04b3280c&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_List_vue_vue_type_template_id_04b3280c___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_List_vue_vue_type_template_id_04b3280c___["b"]; });

>>>>>>> Move gloss rendering into the GlossLine class

/***/ })

});