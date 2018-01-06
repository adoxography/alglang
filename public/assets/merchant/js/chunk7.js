webpackJsonp([7],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/forms/search/Phoneme.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__("./resources/assets/js/components/forms/Form.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Datalist_js__ = __webpack_require__("./resources/assets/js/Datalist.js");




/* harmony default export */ __webpack_exports__["default"] = ({
    extends: __WEBPACK_IMPORTED_MODULE_0__Form___default.a,

    props: ['inventory', 'preset'],

    data: function data() {
        return {
            languages: [new __WEBPACK_IMPORTED_MODULE_1__Datalist_js__["a" /* Datalist */]()],
            type: '',
            mode: 'inventory',
            phonemes: {},
            pa: { 'text': 'Proto-Algonquian' }
        };
    },


    computed: {
        phones: function phones() {
            return this.inventory[this.type];
        }
    },

    watch: {
        type: function type() {
            var phonemes = {};

            _.each(this.phones, function (phone) {
                phonemes[phone.id] = true;
            });

            this.phonemes = phonemes;
        }
    },

    created: function created() {
        if (this.preset) {
            this.mode = this.preset.mode;

            var languages = [];

            for (var i = 0; i < this.preset.languages.length; i += 2) {
                var name = this.preset.languages[i];
                var id = this.preset.languages[i + 1];

                if (name) {
                    languages.push(new __WEBPACK_IMPORTED_MODULE_1__Datalist_js__["a" /* Datalist */](name, id));
                }
            }

            languages.push(this.languages[0]);
            this.languages = languages;
        }
    },
    mounted: function mounted() {
        var _this = this;

        if (this.preset) {
            this.type = this.preset.type;
            Vue.nextTick(function () {
                _.each(_this.phonemes, function (_, key) {
                    _this.phonemes[key] = _this.preset.phonemes.includes(key);
                });
            });
        } else {
            this.type = 'consonants';
        }
    },


    methods: {
        onInput: function onInput(text, index) {
            if (text == '') {
                if (this.languages.length > 1) {
                    this.languages.splice(index, 1);
                }
            } else if (index == this.languages.length - 1) {
                this.languages.push(new __WEBPACK_IMPORTED_MODULE_1__Datalist_js__["a" /* Datalist */]());
            }
        },
        phoneName: function phoneName(phoneme) {
            return phoneme.algoName;
        },
        selectAll: function selectAll() {
            this.toggle(true);
        },
        selectNone: function selectNone() {
            this.toggle(false);
        },
        toggle: function toggle(setting) {
            var _this2 = this;

            _.each(this.phonemes, function (_, key) {
                _this2.phonemes[key] = setting;
            });
        }
    }
});

/***/ }),

/***/ "./resources/assets/js/components/forms/search/Phoneme.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/forms/search/Phoneme.vue")
/* template */
var __vue_template__ = null
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
Component.options.__file = "resources/assets/js/components/forms/search/Phoneme.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69d442f6", Component.options)
  } else {
    hotAPI.reload("data-v-69d442f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});