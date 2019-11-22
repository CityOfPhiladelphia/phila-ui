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
var script = {
  name: 'AppHeader',
  props: {
    appLogoLink: {
      type: Object,
      "default": function _default() {
        return {
          href: "https://www.phila.gov",
          target: "_blank"
        };
      }
    },
    appLogoImage: {
      type: Object,
      "default": function _default() {
        return {
          src: "https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png",
          alt: "City of Philadelphia logo",
          width: 190
        };
      }
    },
    appTitle: {
      type: String,
      "default": ""
    },
    appSubtitle: {
      type: String,
      "default": ""
    },
    appLink: {
      type: String,
      "default": "/"
    },
    fluid: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      showOnBurgerClicked: true
    };
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("header", { staticClass: "navbar is-primary" }, [
    _c(
      "div",
      { staticClass: "level container", class: { "is-fluid": _vm.fluid } },
      [
        _c("div", { staticClass: "level-left" }, [
          _c("div", { staticClass: "level-item navbar-brand is-marginless" }, [
            _c("div", { staticClass: "navbar-item is-fullwidth" }, [
              _c("a", _vm._b({}, "a", _vm.appLogoLink, false), [
                _c("img", _vm._b({}, "img", _vm.appLogoImage, false))
              ]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "navbar-burger burger",
                  attrs: {
                    "data-target": "navMenu",
                    "aria-label": "menu",
                    "aria-hidden": !_vm.showOnBurgerClicked
                  },
                  on: {
                    click: function($event) {
                      _vm.showOnBurgerClicked = !_vm.showOnBurgerClicked;
                    }
                  }
                },
                [_c("span"), _vm._v(" "), _c("span"), _vm._v(" "), _c("span")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("span", {
            staticClass: "level-item vertical-separator is-hidden-mobile"
          }),
          _vm._v(" "),
          _c("div", { staticClass: "level-item navbar-item" }, [
            _c("div", { staticClass: "page-title" }, [
              _c("a", { attrs: { href: _vm.appLink } }, [
                _c("h1", { staticClass: "is-size-4" }, [
                  _vm._v(
                    "\n              " + _vm._s(_vm.appTitle) + "\n            "
                  )
                ]),
                _vm._v(" "),
                _vm.appSubtitle
                  ? _c("h2", { staticClass: "is-size-5" }, [
                      _vm._v(_vm._s(_vm.appSubtitle) + "\n            ")
                    ])
                  : _vm._e()
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "level-right",
            class: { "is-hidden-mobile": _vm.showOnBurgerClicked }
          },
          [_c("div", { staticClass: "level-item" }, [_vm._t("default")], 2)]
        )
      ]
    )
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-6cc71588_0", { source: ".hero .navbar[data-v-6cc71588] {\n  background: #0f4d8f;\n}\n.navbar[data-v-6cc71588] {\n  border-bottom: 5px solid #26cdf7;\n}\n.navbar .navbar-burger[data-v-6cc71588] {\n  height: auto;\n}\n.navbar .navbar-burger span[data-v-6cc71588] {\n  height: 3px;\n  width: 30px;\n  left: calc(50% - 15px);\n}\n.navbar .navbar-burger span[data-v-6cc71588]:nth-child(1) {\n  top: calc(50% - 10px);\n}\n.navbar .navbar-burger span[data-v-6cc71588]:nth-child(3) {\n  top: calc(50% + 8px);\n}\n.navbar .page-title h1[data-v-6cc71588],\n.navbar .page-title h2[data-v-6cc71588] {\n  line-height: 110%;\n}\n.navbar .vertical-separator[data-v-6cc71588] {\n  width: 1px;\n  height: 45px;\n  background-color: #fff;\n  margin-left: 0.9375rem;\n}\n\n/*# sourceMappingURL=AppHeader.vue.map */", map: {"version":3,"sources":["AppHeader.vue","/Users/alejandrolopez/dev/apps/phila-ui/src/components/AppHeader/AppHeader.vue"],"names":[],"mappings":"AAAA;EC0GA,mBAAA;ADxGA;AC4GA;EDzGE,gCAAgC;AAClC;ACyGA;EACA,YAAA;ADvGA;AACA;ECyGA,WAAA;EACA,WAAA;EACA,sBAAA;ADvGA;ACyGA;EACA,qBAAA;ADvGA;AC0GA;EDxGE,oBAAoB;AACtB;AC8GA;;EAEA,iBAAA;AD5GA;ACgHA;EACA,UAAA;EACA,YAAA;EACA,sBAAA;ED9GE,sBAAsB;AACxB;;AAEA,wCAAwC","file":"AppHeader.vue","sourcesContent":[".hero .navbar {\n  background: #0f4d8f;\n}\n\n.navbar {\n  border-bottom: 5px solid #26cdf7;\n}\n.navbar .navbar-burger {\n  height: auto;\n}\n.navbar .navbar-burger span {\n  height: 3px;\n  width: 30px;\n  left: calc(50% - 15px);\n}\n.navbar .navbar-burger span:nth-child(1) {\n  top: calc(50% - 10px);\n}\n.navbar .navbar-burger span:nth-child(3) {\n  top: calc(50% + 8px);\n}\n.navbar .page-title h1,\n.navbar .page-title h2 {\n  line-height: 110%;\n}\n.navbar .vertical-separator {\n  width: 1px;\n  height: 45px;\n  background-color: #fff;\n  margin-left: 0.9375rem;\n}\n\n/*# sourceMappingURL=AppHeader.vue.map */","<template>\n  <header class=\"navbar is-primary\">\n    <div\n      class=\"level container\"\n      :class=\"{ 'is-fluid': fluid }\"\n    >\n      <div class=\"level-left\">\n        <div class=\"level-item navbar-brand is-marginless\">\n          <div class=\"navbar-item is-fullwidth\">\n            <a\n              v-bind=\"appLogoLink\"\n            >\n              <img\n                v-bind=\"appLogoImage\"\n              >\n            </a>\n            <span\n              class=\"navbar-burger burger\"\n              data-target=\"navMenu\"\n              aria-label=\"menu\"\n              :aria-hidden=\"!showOnBurgerClicked\"\n              @click=\"showOnBurgerClicked = !showOnBurgerClicked\"\n            >\n              <span />\n              <span />\n              <span />\n            </span>\n          </div>\n        </div>\n        <span class=\"level-item vertical-separator is-hidden-mobile\" />\n        <div class=\"level-item navbar-item\">\n          <div class=\"page-title\">\n            <a :href=\"appLink\">\n              <h1 class=\"is-size-4\">\n                {{ appTitle }}\n              </h1>\n              <h2\n                v-if=\"appSubtitle\"\n                class=\"is-size-5\"\n              >{{ appSubtitle }}\n              </h2>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"level-right\"\n        :class=\"{ 'is-hidden-mobile': showOnBurgerClicked }\"\n      >\n        <div class=\"level-item\">\n          <slot />\n        </div>\n      </div>\n    </div>\n  </header>\n</template>\n<script>\nexport default {\n  name: 'AppHeader',\n  props: {\n    appLogoLink: {\n      type: Object,\n      default: () => ({\n        href: \"https://www.phila.gov\",\n        target: \"_blank\",\n      }),\n    },\n    appLogoImage: {\n      type: Object,\n      default: () => ({\n        src: \"https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png\",\n        alt: \"City of Philadelphia logo\",\n        width: 190,\n      }),\n    },\n    appTitle: {\n      type: String,\n      default: \"\",\n    },\n    appSubtitle: {\n      type: String,\n      default: \"\",\n    },\n    appLink: {\n      type: String,\n      default: \"/\",\n    },\n    fluid: {\n      type: Boolean,\n      default: true,\n    },\n  },\n  data() {\n    return {\n      showOnBurgerClicked: true,\n    };\n  },\n};\n</script>\n<style lang=\"scss\" scoped>\n  .hero {\n    .navbar {\n      background: $primary;\n    }\n  }\n\n  .navbar {\n    .navbar-burger {\n      height: auto;\n\n      span {\n        height: 3px;\n        width: 30px;\n        left: calc(50% - 15px);\n\n        &:nth-child(1) {\n          top: calc(50% - 10px);\n        }\n\n        &:nth-child(3) {\n          top: calc(50% + 8px);\n        }\n      }\n    }\n\n    .page-title {\n      h1,\n      h2 {\n        line-height: 110%;\n      }\n    }\n\n    .vertical-separator {\n      width: 1px;\n      height: 45px;\n      background-color: #fff;\n      margin-left: rem-calc(15px);\n    }\n    border-bottom: 5px solid $electric-blue;\n  }\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-6cc71588";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var component = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

function prepareForExport(component) {
  // Declare install function executed by Vue.use()
  component.install = function (Vue) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (component.installed) {
      return;
    }

    component.installed = true;
    var name = settings.altName ? settings.altName : component.name;
    Vue.component(name, component);
  }; // Create module definition for Vue.use()


  var plugin = {
    install: component.install
  }; // Auto-install when vue is found (eg. in browser via <script> tag)

  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
}

// Import vue component
prepareForExport(component); // To allow use as module (npm/webpack/etc.) export component

//
//
//
//
//
//
//
//
//
var script$1 = {
  name: 'AppFooter'
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm._m(0)
};
var __vue_staticRenderFns__$1 = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("footer", { staticClass: "footer is-primary" }, [
      _c("div", { staticClass: "has-text-centered" }, [
        _c("ul", [
          _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("Feedback")])])
        ])
      ])
    ])
  }
];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-3f910fc7_0", { source: "#app[data-v-3f910fc7] {\n  padding-bottom: 46px;\n}\n#app .footer[data-v-3f910fc7] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  padding: 0.625rem;\n}\n#app .footer ul[data-v-3f910fc7] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n#app .footer ul li[data-v-3f910fc7] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 1rem;\n}\n\n/*# sourceMappingURL=AppFooter.vue.map */", map: {"version":3,"sources":["/Users/alejandrolopez/dev/apps/phila-ui/src/components/AppFooter/AppFooter.vue","AppFooter.vue"],"names":[],"mappings":"AAmBA;EACA,oBAAA;AClBA;ADmBA;ECjBE,eAAe;EDmBjB,SAAA;EACA,WAAA;EACA,iBAAA;ACjBA;ADmBA;EACA,gBAAA;EACA,UAAA;EACA,SAAA;ACjBA;ADkBA;EACA,qBAAA;EACA,sBAAA;EACA,cAAA;AChBA;;AAEA,wCAAwC","file":"AppFooter.vue","sourcesContent":["<template>\n  <footer class=\"footer is-primary\">\n    <div class=\"has-text-centered\">\n      <ul>\n        <li><a href=\"\">Feedback</a></li>\n      </ul>\n    </div>\n  </footer>\n</template>\n<script>\nexport default {\n  name: 'AppFooter',\n};\n</script>\n<style lang=\"scss\" scoped>\n  #app {\n    padding-bottom: 46px;\n    .footer {\n      position: fixed;\n      bottom: 0;\n      width: 100%;\n      padding: rem-calc(10px);\n\n      ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        li {\n          display: inline-block;\n          vertical-align: middle;\n          margin: 0 1rem;\n        }\n      }\n    }\n  }\n</style>\n","#app {\n  padding-bottom: 46px;\n}\n#app .footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  padding: 0.625rem;\n}\n#app .footer ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n#app .footer ul li {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 1rem;\n}\n\n/*# sourceMappingURL=AppFooter.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-3f910fc7";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  

  
  var component$1 = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    browser,
    undefined
  );

// Import vue component
prepareForExport(component$1); // To allow use as module (npm/webpack/etc.) export component

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

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
//
//
//
var script$2 = {
  name: 'Checkbox',
  inheritAttrs: false,
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    id: {
      type: String,
      "default": function _default() {
        return "cb_".concat(Math.random().toString(12).substring(2, 8));
      }
    },
    value: {
      type: [String, Number, Boolean],
      "default": ''
    },
    // This prop represents the v-model value
    modelValue: {
      type: [String, Number, Boolean, Array],
      "default": false
    },

    /**
     * true-value and false-value are properties from vuejs checkboxes
     * used when you want to assign a value to the v-model when checked or unchecked
     * like 'yes' or 'no'
     */
    trueValue: {
      type: [String, Number, Boolean],
      "default": true
    },
    falseValue: {
      type: [String, Number, Boolean],
      "default": false
    }
  },
  computed: {
    shouldBeChecked: function shouldBeChecked() {
      if (this.modelValue) {
        if (this.modelValue instanceof Array) {
          return this.modelValue.includes(this.value);
        }

        return this.modelValue === this.trueValue || this.modelValue === this.value;
      }

      return this.$attrs.checked;
    }
  },
  methods: {
    updateInput: function updateInput(event) {
      var isChecked = event.target.checked;

      if (this.modelValue instanceof Array) {
        var newValue = _toConsumableArray(this.modelValue);

        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }

        this.$emit('change', newValue);
      } else {
        if (this.value) {
          this.$emit('change', isChecked ? this.value : this.falseValue);
        } else {
          this.$emit('change', isChecked ? this.value : this.falseValue);
        }
      }
    }
  }
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "input-wrap input-checkbox" }, [
    _c(
      "label",
      { staticClass: "checkbox", attrs: { for: _vm.id } },
      [
        _c(
          "input",
          _vm._b(
            {
              attrs: {
                id: _vm.id,
                "aria-checked": _vm.shouldBeChecked,
                "aria-labelledby": _vm.id,
                "aria-required": _vm.$attrs.required,
                type: "checkbox"
              },
              domProps: { value: _vm.value, checked: _vm.shouldBeChecked },
              on: { change: _vm.updateInput, on: _vm.$listeners }
            },
            "input",
            _vm.$attrs,
            false
          )
        ),
        _vm._v(" "),
        _vm._t("default")
      ],
      2
    )
  ])
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-bfa4bfc6_0", { source: "input:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\n\n/*# sourceMappingURL=Checkbox.vue.map */", map: {"version":3,"sources":["Checkbox.vue"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;AAEA;EACE,kBAAkB;AACpB;;AAEA,YAAY;AACZ;EACE,kBAAkB;AACpB;;AAEA,WAAW;AACX;EACE,kBAAkB;AACpB;;AAEA,uCAAuC","file":"Checkbox.vue","sourcesContent":["input:focus::-webkit-input-placeholder {\n  color: transparent;\n}\n\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\n\n/*# sourceMappingURL=Checkbox.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  

  
  var component$2 = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    browser,
    undefined
  );

// Import vue component
prepareForExport(component$2); // To allow use as module (npm/webpack/etc.) export component

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
var script$3 = {
  name: "Radio",
  model: {
    prop: "modelValue",
    event: "change"
  },
  props: {
    id: {
      type: String,
      "default": function _default() {
        return "rb_".concat(Math.random().toString(12).substring(2, 8));
      }
    },
    value: {
      type: [String, Number, Boolean],
      "default": ""
    },
    modelValue: {
      type: [String, Number, Boolean, Array],
      "default": ""
    }
  },
  computed: {
    shouldBeChecked: function shouldBeChecked() {
      return this.modelValue === this.value;
    }
  },
  methods: {
    updateInput: function updateInput() {
      this.$emit("change", this.value);
    },
    uniqid: function uniqid() {}
  }
};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "input-wrap input-radio" }, [
    _c(
      "label",
      { staticClass: "radio", attrs: { for: _vm.id } },
      [
        _c(
          "input",
          _vm._b(
            {
              attrs: { id: _vm.id, type: "radio" },
              domProps: { checked: _vm.shouldBeChecked, value: _vm.value },
              on: { change: _vm.updateInput }
            },
            "input",
            _vm.$attrs,
            false
          )
        ),
        _vm._v(" "),
        _vm._t("default")
      ],
      2
    )
  ])
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-170f7387_0", { source: "input:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\n\n/*# sourceMappingURL=Radio.vue.map */", map: {"version":3,"sources":["Radio.vue"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;AAEA;EACE,kBAAkB;AACpB;;AAEA,YAAY;AACZ;EACE,kBAAkB;AACpB;;AAEA,WAAW;AACX;EACE,kBAAkB;AACpB;;AAEA,oCAAoC","file":"Radio.vue","sourcesContent":["input:focus::-webkit-input-placeholder {\n  color: transparent;\n}\n\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\n\n/*# sourceMappingURL=Radio.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  

  
  var component$3 = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    browser,
    undefined
  );

// Import vue component
prepareForExport(component$3); // To allow use as module (npm/webpack/etc.) export component

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
//
//
//
//
//
//
//
var script$4 = {
  name: 'Dropdown',
  inheritAttrs: false,
  props: {
    value: {
      type: [Object, String, Boolean, Number],
      "default": ''
    },
    options: {
      type: [Object],
      "default": function _default() {
        return {
          'option-1': 'Option 1',
          'option-2': 'Option 2',
          'option-3': 'Option 3'
        };
      }
    },
    defaultOption: {
      type: String,
      "default": "Default option"
    },
    valueKey: {
      type: String,
      "default": ""
    },
    textKey: {
      type: String,
      "default": ""
    }
  },
  mounted: function mounted() {}
};

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "input-wrap input-select select",
      class: { required: _vm.$attrs.required !== undefined }
    },
    [
      _c(
        "select",
        _vm._b(
          {
            on: {
              input: function($event) {
                return _vm.$emit("input", $event.target.value)
              }
            }
          },
          "select",
          _vm.$attrs,
          false
        ),
        [
          _vm.defaultOption !== null
            ? _c("option", { attrs: { value: "" } }, [
                _vm._v("\n      " + _vm._s(_vm.defaultOption) + "\n    ")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.options, function(option, key) {
            return _c(
              "option",
              {
                key: key,
                domProps: {
                  value: !_vm.valueKey ? key : option[_vm.valueKey],
                  selected: _vm.value === key
                }
              },
              [
                _vm._v(
                  "\n      " +
                    _vm._s(!_vm.textKey ? option : option[_vm.textKey]) +
                    "\n    "
                )
              ]
            )
          })
        ],
        2
      )
    ]
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = function (inject) {
    if (!inject) return
    inject("data-v-566d4376_0", { source: "\n\n/*# sourceMappingURL=Dropdown.vue.map */", map: {"version":3,"sources":["Dropdown.vue"],"names":[],"mappings":";;AAEA,uCAAuC","file":"Dropdown.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject SSR */
  

  
  var component$4 = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    browser,
    undefined
  );

// Import vue component
prepareForExport(component$4); // To allow use as module (npm/webpack/etc.) export component

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
//
//
var script$5 = {
  name: "Textbox",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      "default": function _default() {
        return "tx_".concat(Math.random().toString(12).substring(2, 8));
      }
    },
    name: {
      type: String,
      "default": 'Field Name'
    },
    value: {
      type: [String, Number],
      "default": ""
    },
    type: {
      type: String,
      "default": 'text'
    },
    placeholder: {
      type: String,
      "default": 'Insert placeholder here'
    }
  }
};

/* script */
const __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "input-wrap input-text",
      class: { required: _vm.$attrs.required !== undefined }
    },
    [
      _c(
        "input",
        _vm._b(
          {
            staticClass: "input",
            attrs: {
              id: _vm.id,
              name: _vm.name,
              "aria-labelledby": _vm.id,
              "aria-required": _vm.$attrs.required !== undefined,
              type: _vm.type,
              placeholder: _vm.placeholder
            },
            domProps: { value: _vm.value },
            on: {
              input: function($event) {
                return _vm.$emit("input", $event.target.value)
              },
              on: _vm.$listeners
            }
          },
          "input",
          _vm.$attrs,
          false
        )
      ),
      _vm._v(" "),
      _c("label", { attrs: { for: _vm.id } }, [_vm._v(_vm._s(_vm.placeholder))])
    ]
  )
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = function (inject) {
    if (!inject) return
    inject("data-v-2b092562_0", { source: "input:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\n.input-text {\n  position: relative;\n}\n.input-text label {\n  position: absolute;\n  top: 0px;\n  left: 10px;\n  z-index: 5;\n  font-size: 10px;\n  color: #909090;\n  font-weight: 300;\n  opacity: 0;\n}\n.input-text input[type=text]:focus,\n.input-text input[type=email]:focus,\n.input-text input[type=password]:focus,\n.input-text input[type=search]:focus,\n.input-text input[type=tell]:focus,\n.input-text input[type=number]:focus {\n  border-width: 2px;\n  padding-bottom: 0;\n}\n.input-text input[type=text]:focus + label,\n.input-text input[type=email]:focus + label,\n.input-text input[type=password]:focus + label,\n.input-text input[type=search]:focus + label,\n.input-text input[type=tell]:focus + label,\n.input-text input[type=number]:focus + label {\n  opacity: 1;\n}\n\n/*# sourceMappingURL=Textbox.vue.map */", map: {"version":3,"sources":["Textbox.vue","/Users/alejandrolopez/dev/apps/phila-ui/src/components/Inputs/Textbox/Textbox.vue"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;AAEA;EACE,kBAAkB;AACpB;;AAEA,YAAY;AACZ;EACE,kBAAkB;AACpB;;AAEA,WAAW;AACX;EACE,kBAAkB;AACpB;ACyCA;EACA,kBAAA;ADtCA;ACuCA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,UAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;ADrCA;AC6CA;;;;;;EACA,iBAAA;EACA,iBAAA;ADtCA;ACuCA;;;;;;EACA,UAAA;ADhCA;;AAEA,sCAAsC","file":"Textbox.vue","sourcesContent":["input:focus::-webkit-input-placeholder {\n  color: transparent;\n}\n\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\n\n.input-text {\n  position: relative;\n}\n.input-text label {\n  position: absolute;\n  top: 0px;\n  left: 10px;\n  z-index: 5;\n  font-size: 10px;\n  color: #909090;\n  font-weight: 300;\n  opacity: 0;\n}\n.input-text input[type=text]:focus,\n.input-text input[type=email]:focus,\n.input-text input[type=password]:focus,\n.input-text input[type=search]:focus,\n.input-text input[type=tell]:focus,\n.input-text input[type=number]:focus {\n  border-width: 2px;\n  padding-bottom: 0;\n}\n.input-text input[type=text]:focus + label,\n.input-text input[type=email]:focus + label,\n.input-text input[type=password]:focus + label,\n.input-text input[type=search]:focus + label,\n.input-text input[type=tell]:focus + label,\n.input-text input[type=number]:focus + label {\n  opacity: 1;\n}\n\n/*# sourceMappingURL=Textbox.vue.map */","<template>\n  <div\n    class=\"input-wrap input-text\"\n    :class=\"{ required: $attrs.required !== undefined }\"\n  >\n    <input\n      :id=\"id\"\n      class=\"input\"\n      v-bind=\"$attrs\"\n      :name=\"name\"\n      :aria-labelledby=\"id\"\n      :aria-required=\"$attrs.required !== undefined\"\n      :value=\"value\"\n      :type=\"type\"\n      :placeholder=\"placeholder\"\n      @input=\"$emit('input', $event.target.value)\"\n      @on=\"$listeners\"\n    >\n    <label :for=\"id\">{{ placeholder }}</label>\n  </div>\n</template>\n<script>\nexport default {\n  name: \"Textbox\",\n  inheritAttrs: false,\n  props: {\n    id: {\n      type: String,\n      default: () => `tx_${Math.random().toString(12).substring(2, 8)}`,\n    },\n    name: {\n      type: String,\n      default: 'Field Name',\n    },\n    value: {\n      type: [ String, Number ],\n      default: \"\",\n    },\n    type: {\n      type: String,\n      default: 'text',\n    },\n    placeholder: {\n      type: String,\n      default: 'Insert placeholder here',\n    },\n  },\n};\n</script>\n<style lang=\"scss\">\n  // @import '../base.scss';\n  @import '../../../styles/inputs.scss';\n\n  .input-text {\n    position: relative;\n    label {\n      position: absolute;\n      top: 0px;\n      left: 10px;\n      z-index: 5;\n      font-size: 10px;\n      color: #909090;\n      font-weight: 300;\n      opacity: 0;\n    }\n    input[type=\"text\"],\n    input[type=\"email\"],\n    input[type=\"password\"],\n    input[type=\"search\"],\n    input[type=\"tell\"],\n    input[type=\"number\"] {\n      &:focus {\n        border-width: 2px;\n        padding-bottom: 0;\n        + label {\n          opacity: 1;\n        }\n      }\n    }\n  }\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject SSR */
  

  
  var component$5 = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    browser,
    undefined
  );

// Import vue component
prepareForExport(component$5); // To allow use as module (npm/webpack/etc.) export component

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
var script$6 = {
  name: "TextArea",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      "default": function _default() {
        return "ta_".concat(Math.random().toString(12).substring(2, 8));
      }
    },
    value: {
      type: [String, Number],
      "default": ""
    },
    placeholder: {
      type: String,
      "default": 'Insert label placeholder here'
    }
  }
};

/* script */
const __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "input-wrap input-textarea",
      class: { required: _vm.$attrs.required !== undefined }
    },
    [
      _c("label", { attrs: { for: _vm.id } }, [
        _vm._v(_vm._s(_vm.placeholder))
      ]),
      _vm._v(" "),
      _c(
        "textarea",
        _vm._b(
          {
            staticClass: "textarea",
            attrs: {
              "aria-labelledby": _vm.id,
              "aria-required": _vm.$attrs.required !== undefined
            },
            domProps: { value: _vm.value },
            on: {
              input: function($event) {
                return _vm.$emit("input", $event.target.value)
              },
              on: _vm.$listeners
            }
          },
          "textarea",
          _vm.$attrs,
          false
        )
      )
    ]
  )
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = function (inject) {
    if (!inject) return
    inject("data-v-f6f7303c_0", { source: "input:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\ntextarea:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ntextarea:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ntextarea:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ntextarea:focus:-ms-input-placeholder {\n  color: transparent;\n}\n.input-textarea {\n  position: relative;\n}\n.input-textarea label {\n  position: absolute;\n  top: 0px;\n  left: 10px;\n  z-index: 5;\n  font-size: 10px;\n  color: #909090;\n  font-weight: 300;\n}\n.input-textarea textarea:focus {\n  border-width: 2px;\n  padding-bottom: 0;\n}\n\n/*# sourceMappingURL=TextArea.vue.map */", map: {"version":3,"sources":["TextArea.vue","/Users/alejandrolopez/dev/apps/phila-ui/src/components/Inputs/TextArea/TextArea.vue"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;AAEA;EACE,kBAAkB;AACpB;;AAEA,YAAY;AACZ;EACE,kBAAkB;AACpB;;AAEA,WAAW;AACX;EACE,kBAAkB;AACpB;AC6BA;EACA,kBAAA;AD1BA;AC6BA;EACA,kBAAA;AD1BA;;AC4BA,YAAA;AACA;EACA,kBAAA;ADzBA;;AAEA,WAAW;AC0BX;EACA,kBAAA;ADxBA;AC2BA;EACA,kBAAA;ADxBA;ACyBA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,UAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;ADvBA;AC0BA;EACA,iBAAA;EDxBE,iBAAiB;AACnB;;AAEA,uCAAuC","file":"TextArea.vue","sourcesContent":["input:focus::-webkit-input-placeholder {\n  color: transparent;\n}\n\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\n\ntextarea:focus::-webkit-input-placeholder {\n  color: transparent;\n}\n\ntextarea:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ntextarea:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ntextarea:focus:-ms-input-placeholder {\n  color: transparent;\n}\n\n.input-textarea {\n  position: relative;\n}\n.input-textarea label {\n  position: absolute;\n  top: 0px;\n  left: 10px;\n  z-index: 5;\n  font-size: 10px;\n  color: #909090;\n  font-weight: 300;\n}\n.input-textarea textarea:focus {\n  border-width: 2px;\n  padding-bottom: 0;\n}\n\n/*# sourceMappingURL=TextArea.vue.map */","<template>\n  <div\n    class=\"input-wrap input-textarea\"\n    :class=\"{ required: $attrs.required !== undefined }\"\n  >\n    <label :for=\"id\">{{ placeholder }}</label>\n    <textarea\n      class=\"textarea\"\n      v-bind=\"$attrs\"\n      :aria-labelledby=\"id\"\n      :aria-required=\"$attrs.required !== undefined\"\n      :value=\"value\"\n      @input=\"$emit('input', $event.target.value)\"\n      @on=\"$listeners\"\n    />\n  </div>\n</template>\n<script>\nexport default {\n  name: \"TextArea\",\n  inheritAttrs: false,\n  props: {\n    id: {\n      type: String,\n      default: () => `ta_${Math.random().toString(12).substring(2, 8)}`,\n    },\n    value: {\n      type: [ String, Number ],\n      default: \"\",\n    },\n    placeholder: {\n      type: String,\n      default: 'Insert label placeholder here',\n    },\n  },\n};\n</script>\n<style lang=\"scss\">\n  // @import '../base.scss';\n  @import '../../../styles/inputs.scss';\n\n  textarea:focus::-webkit-input-placeholder {\n    color: transparent;\n  }\n\n  textarea:focus:-moz-placeholder {\n    color: transparent;\n  }\n  /* FF 4-18 */\n  textarea:focus::-moz-placeholder {\n    color: transparent;\n  }\n  /* FF 19+ */\n  textarea:focus:-ms-input-placeholder {\n    color: transparent;\n  }\n\n  .input-textarea {\n    position: relative;\n    label {\n      position: absolute;\n      top: 0px;\n      left: 10px;\n      z-index: 5;\n      font-size: 10px;\n      color: #909090;\n      font-weight: 300;\n    }\n    textarea{\n      &:focus {\n        border-width: 2px;\n        padding-bottom: 0;\n      }\n    }\n  }\n</style>\n\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject SSR */
  

  
  var component$6 = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    browser,
    undefined
  );

// Import vue component
prepareForExport(component$6); // To allow use as module (npm/webpack/etc.) export component

// Components
/**
 * Function to install components globally
 */

var install = function install(Vue) {
  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (this.installed) {
    return;
  }

  this.installed = true;

  for (var componentName in this) {
    var componentSettings = settings[componentName] || {};

    if (typeof this[componentName].install === 'function') {
      this[componentName].install.call(null, Vue, componentSettings);
    }
  }
};

export { component$1 as AppFooter, component as AppHeader, component$2 as Checkbox, component$4 as Dropdown, component$3 as Radio, component$6 as TextArea, component$5 as Textbox, install };