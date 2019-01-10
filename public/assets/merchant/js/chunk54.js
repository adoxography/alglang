<<<<<<< HEAD:public/assets/merchant/js/chunk54.js
webpackJsonp([54,72],{
=======
webpackJsonp([1,18],{
>>>>>>> Adapt async autocomplete into Buefy component:public/assets/merchant/js/chunk1.js

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_OldErrors__ = __webpack_require__("./resources/assets/js/mixins/OldErrors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_OldSources__ = __webpack_require__("./resources/assets/js/mixins/OldSources.js");
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
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_OldSources__["a" /* default */]],
  props: ['method', 'action'],
  data: function data() {
    return {
      sources: [],
      csrfToken: Laravel.csrfToken
    };
  },
  methods: {
    validateBeforeSubmit: function validateBeforeSubmit(event) {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.$children.forEach(function (child) {
            if (child.beforeSubmit) {
              child.beforeSubmit();
            }
          });

          _this.$nextTick(function () {
            return _this.$refs.form.submit();
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/NominalForm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__("./resources/assets/js/components/forms/Form.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_HasMorphemes__ = __webpack_require__("./resources/assets/js/mixins/HasMorphemes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");



/* harmony default export */ __webpack_exports__["a"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0__Form__["default"],
  props: ['pronominalFeatures', 'nominalFeatures', 'paradigms', 'oldParadigm', 'oldNominalFeature', 'oldPronominalFeature', 'oldTranslation'],
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_HasMorphemes__["a" /* default */]],
  data: function data() {
    return {
      language: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
      pronominalFeature: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
      nominalFeature: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
      paradigm: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
      mode: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
      parent: new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */](),
      translation: '',
      validations: {
        nominalFeature: 'datalist_required|datalist_exists',
        pronominalFeature: 'datalist_required|datalist_exists'
      }
    };
  },
  computed: {
    filteredParadigms: function filteredParadigms() {
      var _this = this;

      return this.paradigms.filter(function (paradigm) {
        return paradigm.language_id == _this.language.id;
      });
    },
    translationRequired: function translationRequired() {
      return this.morphemes.length == 0 || !this.morphemesContainStem;
    },
    translationRules: function translationRules() {
      if (this.morphemes.length == 0 || this.morphemesContainStem) {
        return '';
      }

      return 'required';
    },
    paradigmHasPronominalFeature: function paradigmHasPronominalFeature() {
      var paradigm = this.getParadigm();
      var result = false;

      if (paradigm) {
        result = paradigm.type.hasPronominalFeature;
      }

      return result;
    },
    paradigmHasNominalFeature: function paradigmHasNominalFeature() {
      var paradigm = this.getParadigm();
      var result = false;

      if (paradigm) {
        result = paradigm.type.hasNominalFeature;
      }

      return result;
    },
    morphemesContainStem: function morphemesContainStem() {
      var stems = ['V', 'N'];
      var result = this.morphemes.find(function (item) {
        return stems.includes(item.name.replace(/[-*]/g, ''));
      });
      return typeof result !== 'undefined';
    }
  },
  watch: {
    language: function language() {
      this.paradigm = new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */]();
    },
    paradigm: function paradigm() {
      this.pronominalFeature = new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */]();
      this.nominalFeature = new __WEBPACK_IMPORTED_MODULE_2__Datalist_js__["a" /* Datalist */]();

      if (this.paradigmHasPronominalFeature) {
        this.validations.pronominalFeature = 'datalist_required|datalist_exists';
      } else {
        this.validations.pronominalFeature = '';
      }

      if (this.paradigmHasNominalFeature) {
        this.validations.nominalFeature = 'datalist_required|datalist_exists';
      } else {
        this.validations.nominalFeature = '';
      }
    },
    translationRequired: function translationRequired(value) {
      if (!value) {
        this.translation = '';
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.oldParadigm) {
      Vue.nextTick(function () {
        _this2.$refs.paradigm.update(_this2.oldParadigm);

        if (_this2.oldPronominalFeature) {
          Vue.nextTick(function () {
            _this2.$refs.pronominalFeature.update(_this2.oldPronominalFeature);
          });
        }

        if (_this2.oldNominalFeature) {
          Vue.nextTick(function () {
            _this2.$refs.nominalFeature.update(_this2.oldNominalFeature);
          });
        }
      });
    }
  },
  created: function created() {
    if (this.oldTranslation) {
      this.translation = this.oldTranslation;
    }
  },
  methods: {
    getParadigm: function getParadigm() {
      var id = this.paradigm.id;
      var lookup = null;

      if (id) {
        lookup = this.paradigms.find(function (paradigm) {
          return paradigm.id == id;
        });
      }

      return lookup;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      ref: "form",
      attrs: {
        method: _vm.method == "GET" ? _vm.method : "POST",
        action: _vm.action
      },
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.validateBeforeSubmit($event)
        }
      }
    },
    [
      _c("input", {
        attrs: { name: "_token", type: "hidden" },
        domProps: { value: _vm.csrfToken }
      }),
      _vm._v(" "),
      _vm.method != "POST" && _vm.method != "GET"
        ? _c("input", {
            attrs: { type: "hidden", name: "_method" },
            domProps: { value: _vm.method }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c(
          "button",
          {
            staticClass: "button is-primary has-text-grey-dark",
            attrs: { type: "submit", disabled: _vm.errors.any() }
          },
          [_vm._v("Submit")]
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/Datalist.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Datalist; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Datalist =
/*#__PURE__*/
function () {
  function Datalist() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

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

/***/ "./resources/assets/js/components/forms/Form.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___ = __webpack_require__("./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Form_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_68350a1b___["b" /* staticRenderFns */],
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
      api.createRecord('68350a1b', component.options)
    } else {
      api.reload('68350a1b', component.options)
    }
    module.hot.accept("./Form.vue?vue&type=template&id=68350a1b&", function () {
      api.rerender('68350a1b', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/forms/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_68350a1b___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/Form.vue?vue&type=template&id=68350a1b&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_68350a1b___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_68350a1b___["b"]; });


/***/ }),

/***/ "./resources/assets/js/components/forms/NominalForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NominalForm_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/forms/NominalForm.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__NominalForm_vue_vue_type_script_lang_js___["a" /* default */],
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
      api.createRecord('71c4068e', component.options)
    } else {
      api.reload('71c4068e', component.options)
    }
    
  }
}
component.options.__file = "resources/assets/js/components/forms/NominalForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/NominalForm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NominalForm_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/forms/NominalForm.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NominalForm_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/mixins/HasMorphemes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['init-morphemes'],
  data: function data() {
    return {
      morphemes: []
    };
  },
  created: function created() {
    if (this.initMorphemes) {
      this.morphemes = this.initMorphemes;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/mixins/OldErrors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({
  props: ['oldErrors'],
  mounted: function mounted() {
    var _this = this;

    if (this.oldErrors) {
      _.forEach(this.oldErrors, function (errors, field) {
        errors.forEach(function (message) {
          return _this.$root.errors.add({
            field: field,
            msg: message
          });
        });
      });
    }

    ;
  }
});

/***/ }),

/***/ "./resources/assets/js/mixins/OldSources.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['oldSources'],
  created: function created() {
    var _this = this;

    if (this.oldSources) {
      this.oldSources.forEach(function (source) {
        _this.sources.push({
          short: source.display ? source.display : source.short,
          id: source.id,
          long: source.long,
          extraInfo: source.pivot ? source.pivot.extraInfo : source.extraInfo,
          description: source.pivot ? source.pivot.description : source.description
        });
      });
    }
  }
});

/***/ })

});