(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global['phila-ui'] = {}));
}(this, function (exports) { 'use strict';

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
            width: 170
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
      },
      isSticky: {
        type: Boolean,
        "default": false
      }
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
    return _c("header", { staticClass: "header" }, [
      _c(
        "nav",
        {
          staticClass: "navbar main-nav is-dark-ben-franklin",
          class: _vm.isSticky ? "is-fixed-top" : "",
          attrs: { role: "navigation", "aria-label": "main navigation" }
        },
        [
          _c(
            "div",
            { staticClass: "container", class: { "is-fluid": _vm.fluid } },
            [
              _c(
                "div",
                { staticClass: "navbar-brand is-block-mobile" },
                [
                  _c(
                    "div",
                    { staticClass: "navbar-item is-block-mobile phl-logo" },
                    [
                      _c(
                        "a",
                        _vm._b(
                          { staticClass: "is-inline-block" },
                          "a",
                          _vm.appLogoLink,
                          false
                        ),
                        [_c("img", _vm._b({}, "img", _vm.appLogoImage, false))]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "navbar-item is-block-mobile has-text-centered-mobile"
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "phl-app-title",
                          attrs: { href: _vm.appLink }
                        },
                        [
                          _c("h1", { staticClass: "is-size-5" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.appTitle) +
                                "\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _vm.appSubtitle
                            ? _c("h2", { staticClass: "is-size-6" }, [
                                _vm._v(_vm._s(_vm.appSubtitle) + "\n            ")
                              ])
                            : _vm._e()
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._t("mobile-menu")
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "navbar-menu is-hidden-mobile" }, [
                _c("div", { staticClass: "navbar-end" }, [_vm._t("default")], 2)
              ])
            ]
          )
        ]
      )
    ])
  };
  var __vue_staticRenderFns__ = [
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        { staticClass: "navbar-item navbar-separator is-hidden-mobile" },
        [_c("span")]
      )
    }
  ];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-253158ec_0", { source: "@keyframes spinAround-data-v-253158ec {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(359deg);\n}\n}\n.header .main-nav[data-v-253158ec] {\n  border-bottom: 5px solid #26cdf7;\n}\n.navbar[data-v-253158ec] {\n  min-height: 73px;\n}\n.navbar .navbar-burger span[data-v-253158ec] {\n  height: 2px;\n}\n.navbar h1[data-v-253158ec], .navbar h2[data-v-253158ec] {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n}\n.navbar .navbar-separator[data-v-253158ec] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.navbar .navbar-separator span[data-v-253158ec] {\n  width: 1px;\n  height: 45px;\n  background: white;\n}\n.navbar a.phl-app-title[data-v-253158ec] {\n  color: inherit;\n}\n.navbar a.phl-app-title[data-v-253158ec]:hover {\n  color: #26cdf7;\n}\n@media screen and (max-width: 768px) {\n.navbar-item[data-v-253158ec] {\n    margin: 5px 0;\n}\n.navbar-item.phl-logo[data-v-253158ec] {\n    margin: 8.5px 13.5px;\n}\n.navbar-item img[data-v-253158ec] {\n    max-height: 40px !important;\n    width: auto;\n}\n}\n\n/*# sourceMappingURL=AppHeader.vue.map */", map: {"version":3,"sources":["AppHeader.vue","/Users/alejandrolopez/code/apps/phila-ui/src/components/AppHeader/AppHeader.vue"],"names":[],"mappings":"AAAA;AACE;IACE,uBAAuB;AACzB;AACA;IACE,yBAAyB;AAC3B;AACF;ACiGA;EACA,gCAAA;AD/FA;ACiGA;EAGA,gBAAA;ADhGA;ACkGA;EACA,WAAA;ADhGA;ACmGA;EACA,oLAAA;EACA,gBAAA;ADjGA;ACmGA;EACA,eAAA;EACA,gBAAA;ADjGA;ACkGA;EACA,UAAA;EACA,YAAA;EACA,iBAAA;ADhGA;ACmGA;EACA,cAAA;ADjGA;ACkGA;EACA,cAAA;ADhGA;AAEA;ACmGA;IDjGI,aAAa;AACf;ACiGF;IACA,oBAAA;AD/FE;ACiGF;IACA,2BAAA;ID/FI,WAAW;AACb;AACF;;AAEA,wCAAwC","file":"AppHeader.vue","sourcesContent":["@keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n.header .main-nav {\n  border-bottom: 5px solid #26cdf7;\n}\n\n.navbar {\n  min-height: 73px;\n}\n.navbar .navbar-burger span {\n  height: 2px;\n}\n.navbar h1, .navbar h2 {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n}\n.navbar .navbar-separator {\n  padding-left: 0;\n  padding-right: 0;\n}\n.navbar .navbar-separator span {\n  width: 1px;\n  height: 45px;\n  background: white;\n}\n.navbar a.phl-app-title {\n  color: inherit;\n}\n.navbar a.phl-app-title:hover {\n  color: #26cdf7;\n}\n\n@media screen and (max-width: 768px) {\n  .navbar-item {\n    margin: 5px 0;\n  }\n  .navbar-item.phl-logo {\n    margin: 8.5px 13.5px;\n  }\n  .navbar-item img {\n    max-height: 40px !important;\n    width: auto;\n  }\n}\n\n/*# sourceMappingURL=AppHeader.vue.map */","<template>\n  <header class=\"header\">\n    <nav\n      :class=\"isSticky ? 'is-fixed-top' : ''\"\n      class=\"navbar main-nav is-dark-ben-franklin\"\n      role=\"navigation\"\n      aria-label=\"main navigation\"\n    >\n      <div\n        :class=\"{ 'is-fluid': fluid }\"\n        class=\"container\"\n      >\n        <div class=\"navbar-brand is-block-mobile\">\n          <div class=\"navbar-item is-block-mobile phl-logo\">\n            <a\n              v-bind=\"appLogoLink\"\n              class=\"is-inline-block\"\n            >\n              <img\n                v-bind=\"appLogoImage\"\n              >\n            </a>\n          </div>\n          <div class=\"navbar-item navbar-separator is-hidden-mobile\">\n            <span />\n          </div>\n          <div\n            class=\"navbar-item is-block-mobile has-text-centered-mobile\"\n          >\n            <a\n              class=\"phl-app-title\"\n              :href=\"appLink\"\n            >\n              <h1 class=\"is-size-5\">\n                {{ appTitle }}\n              </h1>\n              <h2\n                v-if=\"appSubtitle\"\n                class=\"is-size-6\"\n              >{{ appSubtitle }}\n              </h2>\n            </a>\n          </div>\n\n          <slot name=\"mobile-menu\" />\n        </div>\n\n        <div class=\"navbar-menu is-hidden-mobile\">\n          <div class=\"navbar-end\">\n            <slot />\n          </div>\n        </div>\n      </div>\n    </nav>\n  </header>\n</template>\n<script>\nexport default {\n  name: 'AppHeader',\n  props: {\n    appLogoLink: {\n      type: Object,\n      default: () => ({\n        href: \"https://www.phila.gov\",\n        target: \"_blank\",\n      }),\n    },\n    appLogoImage: {\n      type: Object,\n      default: () => ({\n        src: \"https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png\",\n        alt: \"City of Philadelphia logo\",\n        width: 170,\n      }),\n    },\n    appTitle: {\n      type: String,\n      default: \"\",\n    },\n    appSubtitle: {\n      type: String,\n      default: \"\",\n    },\n    appLink: {\n      type: String,\n      default: \"/\",\n    },\n    fluid: {\n      type: Boolean,\n      default: true,\n    },\n    isSticky: {\n      type: Boolean,\n      default: false,\n    },\n  },\n};\n</script>\n<style lang=\"scss\" scoped>\n  .header .main-nav {\n    border-bottom: 5px solid $electric-blue;\n  }\n  .navbar {\n    // IE vertical align hack\n    // height: 73px;\n    min-height: 73px;\n    .navbar-burger {\n      span {\n        height: 2px;\n      }\n    }\n    h1, h2 {\n      font-family: $family-secondary;\n      font-weight: $weight-normal;\n    }\n    .navbar-separator {\n      padding-left: 0;\n      padding-right: 0;\n      span {\n        width: 1px;\n        height: 45px;\n        background: $white;\n      }\n    }\n    a.phl-app-title {\n      color: inherit;\n      &:hover {\n        color: $electric-blue;\n      }\n    }\n  }\n  @include until($tablet) {\n    .navbar-item {\n      &.phl-logo {\n        margin: 8.5px 13.5px;\n      }\n      img {\n        max-height: 40px !important;\n        width: auto;\n      }\n      margin: 5px 0;\n    }\n  }\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = "data-v-253158ec";
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      browser,
      undefined,
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
  prepareForExport(__vue_component__); // To allow use as module (npm/webpack/etc.) export component

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
  var script$1 = {
    name: 'AppFooter',
    props: {
      links: {
        type: Array,
        "default": function _default() {
          return []; // Each link requires at least a href and text properties.
        }
      }
    },
    computed: {
      localLinks: function localLinks() {
        // Prepare links
        var localLinks = [];
        this.links.forEach(function (link) {
          var defaults = {
            href: "#",
            text: "link here",
            "attrs": {}
          };
          Object.keys(link).forEach(function (key) {
            if (defaults[key]) {
              defaults[key] = link[key];
            } else {
              defaults.attrs[key] = link[key];
            }
          });
          localLinks.push(Object.assign({}, defaults));
        });
        return localLinks;
      }
    },
    methods: {
      isURL: function isURL(link) {
        return /https?:\/\//.test(link);
      }
    }
  };

  /* script */
  const __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("footer", { staticClass: "footer" }, [
      _c("div", { staticClass: "has-text-centered" }, [
        _c(
          "ul",
          { staticClass: "inline-list" },
          _vm._l(_vm.localLinks, function(link, index) {
            return _c(
              "li",
              { key: index },
              [
                typeof link.href === "function"
                  ? [
                      _c(
                        "a",
                        _vm._b(
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault();
                                return link.href($event)
                              }
                            }
                          },
                          "a",
                          link.attrs || {},
                          false
                        ),
                        [
                          _vm._v(
                            "\n            " + _vm._s(link.text) + "\n          "
                          )
                        ]
                      )
                    ]
                  : !_vm.isURL(link.href)
                  ? [
                      _c(
                        "router-link",
                        _vm._b(
                          { attrs: { to: link.href } },
                          "router-link",
                          link.attrs || {},
                          false
                        ),
                        [
                          _vm._v(
                            "\n            " + _vm._s(link.text) + "\n          "
                          )
                        ]
                      )
                    ]
                  : _vm.isURL(link.href)
                  ? [
                      _c(
                        "a",
                        _vm._b(
                          { attrs: { href: link.href } },
                          "a",
                          link.attrs || {},
                          false
                        ),
                        [_vm._v(_vm._s(link.text))]
                      )
                    ]
                  : _vm._e()
              ],
              2
            )
          }),
          0
        )
      ])
    ])
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = function (inject) {
      if (!inject) return
      inject("data-v-7e73b847_0", { source: "@keyframes spinAround-data-v-7e73b847 {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(359deg);\n}\n}\n#app[data-v-7e73b847] {\n  padding-bottom: 46px;\n}\n#app .footer[data-v-7e73b847] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n#app .footer ul[data-v-7e73b847] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n#app .footer ul li[data-v-7e73b847] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 1rem;\n}\n#app .footer ul li a[data-v-7e73b847] {\n  color: inherit;\n}\n#app .footer ul li a[data-v-7e73b847]:hover {\n  color: #26cdf7;\n}\n\n/*# sourceMappingURL=AppFooter.vue.map */", map: {"version":3,"sources":["AppFooter.vue","/Users/alejandrolopez/code/apps/phila-ui/src/components/AppFooter/AppFooter.vue"],"names":[],"mappings":"AAAA;AACE;IACE,uBAAuB;AACzB;AACA;IACE,yBAAyB;AAC3B;AACF;ACsEA;EACA,oBAAA;ADpEA;ACqEA;EACA,eAAA;EACA,SAAA;EACA,WAAA;ADnEA;ACoEA;EACA,gBAAA;EACA,UAAA;EACA,SAAA;ADlEA;ACmEA;EACA,qBAAA;EACA,sBAAA;EACA,cAAA;ADjEA;ACkEA;EACA,cAAA;ADhEA;ACiEA;EACA,cAAA;AD/DA;;AAEA,wCAAwC","file":"AppFooter.vue","sourcesContent":["@keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n#app {\n  padding-bottom: 46px;\n}\n#app .footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n#app .footer ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n#app .footer ul li {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 1rem;\n}\n#app .footer ul li a {\n  color: inherit;\n}\n#app .footer ul li a:hover {\n  color: #26cdf7;\n}\n\n/*# sourceMappingURL=AppFooter.vue.map */","<template>\n  <footer class=\"footer\">\n    <div class=\"has-text-centered\">\n      <ul class=\"inline-list\">\n        <li\n          v-for=\"(link, index) in localLinks\"\n          :key=\"index\"\n        >\n          <template v-if=\"typeof link.href === 'function'\">\n            <a\n              v-bind=\"link.attrs || {}\"\n              @click.prevent=\"link.href\"\n            >\n              {{ link.text }}\n            </a>\n          </template>\n          <template v-else-if=\"!isURL(link.href)\">\n            <router-link\n              :to=\"link.href\"\n              v-bind=\"link.attrs || {}\"\n            >\n              {{ link.text }}\n            </router-link>\n          </template>\n          <template v-else-if=\"isURL(link.href)\">\n            <a\n              :href=\"link.href\"\n              v-bind=\"link.attrs || {}\"\n            >{{ link.text }}</a>\n          </template>\n        </li>\n      </ul>\n    </div>\n  </footer>\n</template>\n<script>\nexport default {\n  name: 'AppFooter',\n  props: {\n    links: {\n      type: Array,\n      default: () => {\n        return []; // Each link requires at least a href and text properties.\n      },\n    },\n  },\n  computed: {\n    localLinks() {\n      // Prepare links\n      let localLinks = [];\n      this.links.forEach(link => {\n        let defaults =  { href: \"#\", text: \"link here\", \"attrs\": {}};\n        Object.keys(link).forEach(key =>  {\n          if (defaults[key]) {\n            defaults[key] = link[key];\n          } else {\n            defaults.attrs[key] = link[key];\n          }\n        });\n        localLinks.push(Object.assign({}, defaults));\n      });\n      return localLinks;\n    },\n  },\n  methods: {\n    isURL(link) {\n      return (/https?:\\/\\//.test(link));\n    },\n  },\n};\n</script>\n<style lang=\"scss\" scoped>\n  #app {\n    padding-bottom: 46px;\n    .footer {\n      position: fixed;\n      bottom: 0;\n      width: 100%;\n      ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        li {\n          display: inline-block;\n          vertical-align: middle;\n          margin: 0 1rem;\n          a {\n            color: inherit;\n            &:hover {\n              color: $electric-blue;\n            }\n          }\n        }\n      }\n    }\n  }\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$1 = "data-v-7e73b847";
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$1 = normalizeComponent_1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      false,
      browser,
      undefined,
      undefined
    );

  // Import vue component
  prepareForExport(__vue_component__$1); // To allow use as module (npm/webpack/etc.) export component

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
  var script$2 = {
    name: 'MobileMenu',
    data: function data() {
      return {
        showOnBurgerClicked: true
      };
    },
    watch: {
      '$route': function $route() {
        this.showOnBurgerClicked = true;
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
    return _c(
      "div",
      [
        _c(
          "a",
          {
            staticClass: "navbar-burger burger",
            class: { "is-active": !_vm.showOnBurgerClicked },
            attrs: {
              "aria-expanded": !_vm.showOnBurgerClicked,
              "aria-hidden": _vm.showOnBurgerClicked,
              role: "button",
              "aria-label": "menu",
              "data-target": "navbarBasicExample"
            },
            on: {
              click: function($event) {
                _vm.showOnBurgerClicked = !_vm.showOnBurgerClicked;
              }
            }
          },
          [
            _c("span", { attrs: { "aria-hidden": "true" } }),
            _vm._v(" "),
            _c("span", { attrs: { "aria-hidden": "true" } }),
            _vm._v(" "),
            _c("span", { attrs: { "aria-hidden": "true" } })
          ]
        ),
        _vm._v(" "),
        _c("transition", { attrs: { name: "slide-in-out" } }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.showOnBurgerClicked,
                  expression: "!showOnBurgerClicked"
                }
              ],
              staticClass: "navbar-menu mobile-menu is-hidden-desktop",
              attrs: {
                "aria-expanded": !_vm.showOnBurgerClicked,
                "aria-hidden": _vm.showOnBurgerClicked
              }
            },
            [_vm._t("default")],
            2
          )
        ])
      ],
      1
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = function (inject) {
      if (!inject) return
      inject("data-v-77e16404_0", { source: "@keyframes spinAround {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(359deg);\n}\n}\n@media screen and (max-width: 768px) {\n.navbar-brand {\n    padding: 1px 0;\n}\n.navbar-burger {\n    z-index: 12;\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n.navbar-burger span {\n    height: 3px;\n    width: 24px;\n    left: calc(50% - 12px);\n}\n.navbar-burger span:nth-child(1) {\n    top: calc(50% - 9px);\n}\n.navbar-burger span:nth-child(2) {\n    top: calc(50% - 1px);\n}\n.navbar-burger span:nth-child(3) {\n    top: calc(50% + 7px);\n}\n.navbar-burger.is-active span:nth-child(1) {\n    top: calc(50% - 7px);\n}\n.navbar-burger.is-active span:nth-child(3) {\n    top: calc(50% + 3px);\n}\n.mobile-menu {\n    background: none;\n    position: fixed;\n    z-index: 11;\n    top: 0;\n    left: 0;\n    background-color: #0f4d8f;\n    height: 100vh;\n    width: 100vw;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n}\n}\n@media screen and (max-width: 768px) {\n.navbar-brand .is-block-mobile {\n    padding: 0;\n}\n}\n.slide-in-out-leave-active,\n.slide-in-out-enter-active {\n  transition: all 0.25s;\n}\n.slide-in-out-leave,\n.slide-in-out-enter-to {\n  opacity: 1;\n  transform: translate(0%);\n}\n.slide-in-out-leave-to,\n.slide-in-out-enter {\n  opacity: 0;\n  transform: translate(calc(100% + 10px));\n}\n\n/*# sourceMappingURL=MobileMenu.vue.map */", map: {"version":3,"sources":["MobileMenu.vue","/Users/alejandrolopez/code/apps/phila-ui/src/components/MobileMenu/MobileMenu.vue"],"names":[],"mappings":"AAAA;AACE;IACE,uBAAuB;AACzB;AACA;IACE,yBAAyB;AAC3B;AACF;ACsEA;AAzBA;IACA,cAAA;AD1CE;AC4CF;IACA,WAAA;IACA,kBAAA;IACA,MAAA;IACA,QAAA;ADzCE;AC0CF;IACA,WAAA;IACA,WAAA;IACA,sBAAA;ADxCE;ACyCF;IACA,oBAAA;ADvCE;ACyCF;IACA,oBAAA;ADvCE;ACyCF;IACA,oBAAA;ADvCE;AC4CF;IACA,oBAAA;AD1CE;AC4CF;IACA,oBAAA;AD1CE;AC+CF;IACA,gBAAA;IACA,eAAA;IACA,WAAA;IACA,MAAA;ID5CI,OAAO;IC8CX,yBAAA;IACA,aAAA;IACA,YAAA;IACA,UAAA;IAGA,aAAA;IACA,uBAAA;IACA,sBAAA;IACA,kBAAA;IACA,mBAAA;AD9CE;AACF;ACqBA;ADnBE;ICiDF,UAAA;AD/CE;AACF;ACmDA;;EAEA,qBAAA;ADjDA;AAEA;;ECoDA,UAAA;EACA,wBAAA;ADjDA;AAEA;;EAEE,UAAU;EACV,uCAAuC;AACzC;;AAEA,yCAAyC","file":"MobileMenu.vue","sourcesContent":["@keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n@media screen and (max-width: 768px) {\n  .navbar-brand {\n    padding: 1px 0;\n  }\n\n  .navbar-burger {\n    z-index: 12;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n  .navbar-burger span {\n    height: 3px;\n    width: 24px;\n    left: calc(50% - 12px);\n  }\n  .navbar-burger span:nth-child(1) {\n    top: calc(50% - 9px);\n  }\n  .navbar-burger span:nth-child(2) {\n    top: calc(50% - 1px);\n  }\n  .navbar-burger span:nth-child(3) {\n    top: calc(50% + 7px);\n  }\n  .navbar-burger.is-active span:nth-child(1) {\n    top: calc(50% - 7px);\n  }\n  .navbar-burger.is-active span:nth-child(3) {\n    top: calc(50% + 3px);\n  }\n\n  .mobile-menu {\n    background: none;\n    position: fixed;\n    z-index: 11;\n    top: 0;\n    left: 0;\n    background-color: #0f4d8f;\n    height: 100vh;\n    width: 100vw;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n  }\n}\n@media screen and (max-width: 768px) {\n  .navbar-brand .is-block-mobile {\n    padding: 0;\n  }\n}\n.slide-in-out-leave-active,\n.slide-in-out-enter-active {\n  transition: all 0.25s;\n}\n\n.slide-in-out-leave,\n.slide-in-out-enter-to {\n  opacity: 1;\n  transform: translate(0%);\n}\n\n.slide-in-out-leave-to,\n.slide-in-out-enter {\n  opacity: 0;\n  transform: translate(calc(100% + 10px));\n}\n\n/*# sourceMappingURL=MobileMenu.vue.map */","<template>\n  <div>\n    <!-- Mobile Menu Slot -->\n    <a\n      :aria-expanded=\"!showOnBurgerClicked\"\n      :aria-hidden=\"showOnBurgerClicked\"\n      :class=\"{ 'is-active': !showOnBurgerClicked }\"\n      role=\"button\"\n      class=\"navbar-burger burger\"\n      aria-label=\"menu\"\n      data-target=\"navbarBasicExample\"\n      @click=\"showOnBurgerClicked = !showOnBurgerClicked\"\n    >\n      <span aria-hidden=\"true\" />\n      <span aria-hidden=\"true\" />\n      <span aria-hidden=\"true\" />\n    </a>\n    <transition name=\"slide-in-out\">\n      <div\n        v-show=\"!showOnBurgerClicked\"\n        :aria-expanded=\"!showOnBurgerClicked\"\n        :aria-hidden=\"showOnBurgerClicked\"\n        class=\"navbar-menu mobile-menu is-hidden-desktop\"\n      >\n        <slot />\n      </div>\n    </transition>\n  </div>\n</template>\n<script>\nexport default {\n  name: 'MobileMenu',\n  data() {\n    return {\n      showOnBurgerClicked: true,\n    };\n  },\n  watch: {\n    '$route' () {\n      this.showOnBurgerClicked = true;\n    },\n  },\n}\n</script>\n<style lang=\"scss\">\n  @include until($tablet) {\n    // Fix Margin\n    .navbar-brand {\n      padding: 1px 0;\n    }\n    .navbar-burger {\n      z-index: 12;\n      position: absolute;\n      top: 0;\n      right: 0;\n      span {\n        height: 3px;\n        width: 24px;\n        left: calc(50% - 12px);\n        &:nth-child(1) {\n          top: calc(50% - 9px);\n        }\n        &:nth-child(2) {\n          top: calc(50% - 1px);\n        }\n        &:nth-child(3) {\n          top: calc(50% + 7px);\n        }\n      }\n      &.is-active {\n        span {\n          &:nth-child(1) {\n            top: calc(50% - 7px);\n          }\n          &:nth-child(3) {\n            top: calc(50% + 3px);\n          }\n        }\n      }\n    }\n    .mobile-menu {\n      background: none;\n      position: fixed;\n      z-index: 11;\n      top: 0;\n      left: 0;\n      background-color: $primary;\n      height: 100vh;\n      width: 100vw;\n      padding: 0;\n\n      // Centering the mobile menu buttons (links)\n      display: flex;\n      justify-content: center;\n      flex-direction: column;\n      text-align: center;\n      align-items: center;\n    }\n  }\n  @include until($tablet) {\n    .navbar-brand {\n      .is-block-mobile {\n        padding: 0;\n      }\n    }\n  }\n\n  .slide-in-out-leave-active,\n  .slide-in-out-enter-active {\n    transition: all 0.25s; // trick\n  }\n\n  .slide-in-out-leave,\n  .slide-in-out-enter-to {\n    opacity: 1; // trick\n    transform: translate(0%);\n  }\n\n  .slide-in-out-leave-to,\n  .slide-in-out-enter {\n    opacity: 0; // trick\n    transform: translate(calc(100% + 10px));\n  }\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$2 = normalizeComponent_1(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      false,
      browser,
      undefined,
      undefined
    );

  // Import vue component
  prepareForExport(__vue_component__$2); // To allow use as module (npm/webpack/etc.) export component

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
    name: 'Callout',
    props: {
      message: {
        type: String,
        "default": 'Your message here.',
        required: true
      }
    }
  };

  /* script */
  const __vue_script__$3 = script$3;

  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("article", { staticClass: "message" }, [
      _c("div", { class: "message-body" }, [
        _c("div", { domProps: { innerHTML: _vm._s(_vm.message) } })
      ])
    ])
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

    /* style */
    const __vue_inject_styles__$3 = undefined;
    /* scoped */
    const __vue_scope_id__$3 = undefined;
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$3 = normalizeComponent_1(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      false,
      undefined,
      undefined,
      undefined
    );

  // Import vue component
  prepareForExport(__vue_component__$3); // To allow use as module (npm/webpack/etc.) export component

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
  var script$4 = {
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
  const __vue_script__$4 = script$4;

  /* template */
  var __vue_render__$4 = function() {
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
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    const __vue_inject_styles__$4 = function (inject) {
      if (!inject) return
      inject("data-v-5d0e83f7_0", { source: "@keyframes spinAround {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(359deg);\n}\n}\ninput:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\n\n/*# sourceMappingURL=Checkbox.vue.map */", map: {"version":3,"sources":["Checkbox.vue"],"names":[],"mappings":"AAAA;AACE;IACE,uBAAuB;AACzB;AACA;IACE,yBAAyB;AAC3B;AACF;AACA;EACE,kBAAkB;AACpB;AAEA;EACE,kBAAkB;AACpB;;AAEA,YAAY;AACZ;EACE,kBAAkB;AACpB;;AAEA,WAAW;AACX;EACE,kBAAkB;AACpB;;AAEA,uCAAuC","file":"Checkbox.vue","sourcesContent":["@keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\ninput:focus::-webkit-input-placeholder {\n  color: transparent;\n}\n\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\n\n/*# sourceMappingURL=Checkbox.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$4 = undefined;
    /* module identifier */
    const __vue_module_identifier__$4 = undefined;
    /* functional template */
    const __vue_is_functional_template__$4 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$4 = normalizeComponent_1(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      false,
      browser,
      undefined,
      undefined
    );

  // Import vue component
  prepareForExport(__vue_component__$4); // To allow use as module (npm/webpack/etc.) export component

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
  const __vue_script__$5 = script$5;

  /* template */
  var __vue_render__$5 = function() {
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
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    const __vue_inject_styles__$5 = function (inject) {
      if (!inject) return
      inject("data-v-50349be1_0", { source: "@keyframes spinAround {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(359deg);\n}\n}\ninput:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\n\n/*# sourceMappingURL=Radio.vue.map */", map: {"version":3,"sources":["Radio.vue"],"names":[],"mappings":"AAAA;AACE;IACE,uBAAuB;AACzB;AACA;IACE,yBAAyB;AAC3B;AACF;AACA;EACE,kBAAkB;AACpB;AAEA;EACE,kBAAkB;AACpB;;AAEA,YAAY;AACZ;EACE,kBAAkB;AACpB;;AAEA,WAAW;AACX;EACE,kBAAkB;AACpB;;AAEA,oCAAoC","file":"Radio.vue","sourcesContent":["@keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\ninput:focus::-webkit-input-placeholder {\n  color: transparent;\n}\n\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\n\n/*# sourceMappingURL=Radio.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$5 = undefined;
    /* module identifier */
    const __vue_module_identifier__$5 = undefined;
    /* functional template */
    const __vue_is_functional_template__$5 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$5 = normalizeComponent_1(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      false,
      browser,
      undefined,
      undefined
    );

  // Import vue component
  prepareForExport(__vue_component__$5); // To allow use as module (npm/webpack/etc.) export component

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
  var script$6 = {
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
  const __vue_script__$6 = script$6;

  /* template */
  var __vue_render__$6 = function() {
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
                on: _vm.$listeners,
                change: function($event) {
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
  var __vue_staticRenderFns__$6 = [];
  __vue_render__$6._withStripped = true;

    /* style */
    const __vue_inject_styles__$6 = function (inject) {
      if (!inject) return
      inject("data-v-adeb4404_0", { source: "@keyframes spinAround {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(359deg);\n}\n}\n\n/*# sourceMappingURL=Dropdown.vue.map */", map: {"version":3,"sources":["Dropdown.vue"],"names":[],"mappings":"AAAA;AACE;IACE,uBAAuB;AACzB;AACA;IACE,yBAAyB;AAC3B;AACF;;AAEA,uCAAuC","file":"Dropdown.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$6 = undefined;
    /* module identifier */
    const __vue_module_identifier__$6 = undefined;
    /* functional template */
    const __vue_is_functional_template__$6 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$6 = normalizeComponent_1(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      false,
      browser,
      undefined,
      undefined
    );

  // Import vue component
  prepareForExport(__vue_component__$6); // To allow use as module (npm/webpack/etc.) export component

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
  var script$7 = {
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
  const __vue_script__$7 = script$7;

  /* template */
  var __vue_render__$7 = function() {
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
  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;

    /* style */
    const __vue_inject_styles__$7 = function (inject) {
      if (!inject) return
      inject("data-v-7a25e6e0_0", { source: "@keyframes spinAround {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(359deg);\n}\n}\ninput:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\n.input-text {\n  position: relative;\n}\n.input-text label {\n  position: absolute;\n  top: 0px;\n  left: 10px;\n  z-index: 5;\n  font-size: 10px;\n  color: #454545;\n  font-weight: 300;\n  opacity: 0;\n}\n.input-text input[type=text]:focus,\n.input-text input[type=email]:focus,\n.input-text input[type=password]:focus,\n.input-text input[type=search]:focus,\n.input-text input[type=tell]:focus,\n.input-text input[type=number]:focus {\n  border-width: 2px;\n  padding-bottom: 0;\n}\n.input-text input[type=text]:focus + label,\n.input-text input[type=email]:focus + label,\n.input-text input[type=password]:focus + label,\n.input-text input[type=search]:focus + label,\n.input-text input[type=tell]:focus + label,\n.input-text input[type=number]:focus + label {\n  opacity: 1;\n}\n\n/*# sourceMappingURL=Textbox.vue.map */", map: {"version":3,"sources":["Textbox.vue","/Users/alejandrolopez/code/apps/phila-ui/src/components/Inputs/Textbox/Textbox.vue"],"names":[],"mappings":"AAAA;AACE;IACE,uBAAuB;AACzB;AACA;IACE,yBAAyB;AAC3B;AACF;AACA;EACE,kBAAkB;AACpB;AAEA;EACE,kBAAkB;AACpB;;AAEA,YAAY;AACZ;EACE,kBAAkB;AACpB;;AAEA,WAAW;AACX;EACE,kBAAkB;AACpB;ACkCA;EACA,kBAAA;AD/BA;ACgCA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,UAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;AD9BA;ACsCA;;;;;;EACA,iBAAA;EACA,iBAAA;AD/BA;ACgCA;;;;;;EDzBE,UAAU;AACZ;;AAEA,sCAAsC","file":"Textbox.vue","sourcesContent":["@keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\ninput:focus::-webkit-input-placeholder {\n  color: transparent;\n}\n\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\n\n.input-text {\n  position: relative;\n}\n.input-text label {\n  position: absolute;\n  top: 0px;\n  left: 10px;\n  z-index: 5;\n  font-size: 10px;\n  color: #454545;\n  font-weight: 300;\n  opacity: 0;\n}\n.input-text input[type=text]:focus,\n.input-text input[type=email]:focus,\n.input-text input[type=password]:focus,\n.input-text input[type=search]:focus,\n.input-text input[type=tell]:focus,\n.input-text input[type=number]:focus {\n  border-width: 2px;\n  padding-bottom: 0;\n}\n.input-text input[type=text]:focus + label,\n.input-text input[type=email]:focus + label,\n.input-text input[type=password]:focus + label,\n.input-text input[type=search]:focus + label,\n.input-text input[type=tell]:focus + label,\n.input-text input[type=number]:focus + label {\n  opacity: 1;\n}\n\n/*# sourceMappingURL=Textbox.vue.map */","<template>\n  <div\n    class=\"input-wrap input-text\"\n    :class=\"{ required: $attrs.required !== undefined }\"\n  >\n    <input\n      :id=\"id\"\n      class=\"input\"\n      v-bind=\"$attrs\"\n      :name=\"name\"\n      :aria-labelledby=\"id\"\n      :aria-required=\"$attrs.required !== undefined\"\n      :value=\"value\"\n      :type=\"type\"\n      :placeholder=\"placeholder\"\n      @input=\"$emit('input', $event.target.value)\"\n      @on=\"$listeners\"\n    >\n    <label :for=\"id\">{{ placeholder }}</label>\n  </div>\n</template>\n<script>\nexport default {\n  name: \"Textbox\",\n  inheritAttrs: false,\n  props: {\n    id: {\n      type: String,\n      default: () => `tx_${Math.random().toString(12).substring(2, 8)}`,\n    },\n    name: {\n      type: String,\n      default: 'Field Name',\n    },\n    value: {\n      type: [ String, Number ],\n      default: \"\",\n    },\n    type: {\n      type: String,\n      default: 'text',\n    },\n    placeholder: {\n      type: String,\n      default: 'Insert placeholder here',\n    },\n  },\n};\n</script>\n<style lang=\"scss\">\n  // @import '../base.scss';\n  @import '../../../styles/inputs.scss';\n\n  .input-text {\n    position: relative;\n    label {\n      position: absolute;\n      top: 0px;\n      left: 10px;\n      z-index: 5;\n      font-size: 10px;\n      color: $dark-gray;\n      font-weight: 300;\n      opacity: 0;\n    }\n    input[type=\"text\"],\n    input[type=\"email\"],\n    input[type=\"password\"],\n    input[type=\"search\"],\n    input[type=\"tell\"],\n    input[type=\"number\"] {\n      &:focus {\n        border-width: 2px;\n        padding-bottom: 0;\n        + label {\n          opacity: 1;\n        }\n      }\n    }\n  }\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$7 = undefined;
    /* module identifier */
    const __vue_module_identifier__$7 = undefined;
    /* functional template */
    const __vue_is_functional_template__$7 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$7 = normalizeComponent_1(
      { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
      __vue_inject_styles__$7,
      __vue_script__$7,
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
      false,
      browser,
      undefined,
      undefined
    );

  // Import vue component
  prepareForExport(__vue_component__$7); // To allow use as module (npm/webpack/etc.) export component

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
  var script$8 = {
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
  const __vue_script__$8 = script$8;

  /* template */
  var __vue_render__$8 = function() {
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
  var __vue_staticRenderFns__$8 = [];
  __vue_render__$8._withStripped = true;

    /* style */
    const __vue_inject_styles__$8 = function (inject) {
      if (!inject) return
      inject("data-v-d4acc670_0", { source: "@keyframes spinAround {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(359deg);\n}\n}\ninput:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\ntextarea:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ntextarea:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ntextarea:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ntextarea:focus:-ms-input-placeholder {\n  color: transparent;\n}\n.input-textarea {\n  position: relative;\n}\n.input-textarea label {\n  position: absolute;\n  top: 0px;\n  left: 10px;\n  z-index: 5;\n  font-size: 10px;\n  color: #909090;\n  font-weight: 300;\n}\n.input-textarea textarea:focus {\n  border-width: 2px;\n  padding-bottom: 0;\n}\n\n/*# sourceMappingURL=TextArea.vue.map */", map: {"version":3,"sources":["TextArea.vue","/Users/alejandrolopez/code/apps/phila-ui/src/components/Inputs/TextArea/TextArea.vue"],"names":[],"mappings":"AAAA;AACE;IACE,uBAAuB;AACzB;AACA;IACE,yBAAyB;AAC3B;AACF;AACA;EACE,kBAAkB;AACpB;AAEA;EACE,kBAAkB;AACpB;;AAEA,YAAY;AACZ;EACE,kBAAkB;AACpB;;AAEA,WAAW;AACX;EACE,kBAAkB;AACpB;ACsBA;EACA,kBAAA;ADnBA;ACsBA;EACA,kBAAA;ADnBA;;ACqBA,YAAA;AACA;EACA,kBAAA;ADlBA;;ACoBA,WAAA;AACA;EACA,kBAAA;ADjBA;ACoBA;EACA,kBAAA;ADjBA;ACkBA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,UAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;ADhBA;ACmBA;EDjBE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA,uCAAuC","file":"TextArea.vue","sourcesContent":["@keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\ninput:focus::-webkit-input-placeholder {\n  color: transparent;\n}\n\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\n\ntextarea:focus::-webkit-input-placeholder {\n  color: transparent;\n}\n\ntextarea:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ntextarea:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ntextarea:focus:-ms-input-placeholder {\n  color: transparent;\n}\n\n.input-textarea {\n  position: relative;\n}\n.input-textarea label {\n  position: absolute;\n  top: 0px;\n  left: 10px;\n  z-index: 5;\n  font-size: 10px;\n  color: #909090;\n  font-weight: 300;\n}\n.input-textarea textarea:focus {\n  border-width: 2px;\n  padding-bottom: 0;\n}\n\n/*# sourceMappingURL=TextArea.vue.map */","<template>\n  <div\n    class=\"input-wrap input-textarea\"\n    :class=\"{ required: $attrs.required !== undefined }\"\n  >\n    <label :for=\"id\">{{ placeholder }}</label>\n    <textarea\n      class=\"textarea\"\n      v-bind=\"$attrs\"\n      :aria-labelledby=\"id\"\n      :aria-required=\"$attrs.required !== undefined\"\n      :value=\"value\"\n      @input=\"$emit('input', $event.target.value)\"\n      @on=\"$listeners\"\n    />\n  </div>\n</template>\n<script>\nexport default {\n  name: \"TextArea\",\n  inheritAttrs: false,\n  props: {\n    id: {\n      type: String,\n      default: () => `ta_${Math.random().toString(12).substring(2, 8)}`,\n    },\n    value: {\n      type: [ String, Number ],\n      default: \"\",\n    },\n    placeholder: {\n      type: String,\n      default: 'Insert label placeholder here',\n    },\n  },\n};\n</script>\n<style lang=\"scss\">\n  // @import '../base.scss';\n  @import '../../../styles/inputs.scss';\n\n  textarea:focus::-webkit-input-placeholder {\n    color: transparent;\n  }\n\n  textarea:focus:-moz-placeholder {\n    color: transparent;\n  }\n  /* FF 4-18 */\n  textarea:focus::-moz-placeholder {\n    color: transparent;\n  }\n  /* FF 19+ */\n  textarea:focus:-ms-input-placeholder {\n    color: transparent;\n  }\n\n  .input-textarea {\n    position: relative;\n    label {\n      position: absolute;\n      top: 0px;\n      left: 10px;\n      z-index: 5;\n      font-size: 10px;\n      color: #909090;\n      font-weight: 300;\n    }\n    textarea{\n      &:focus {\n        border-width: 2px;\n        padding-bottom: 0;\n      }\n    }\n  }\n</style>\n\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$8 = undefined;
    /* module identifier */
    const __vue_module_identifier__$8 = undefined;
    /* functional template */
    const __vue_is_functional_template__$8 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$8 = normalizeComponent_1(
      { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
      __vue_inject_styles__$8,
      __vue_script__$8,
      __vue_scope_id__$8,
      __vue_is_functional_template__$8,
      __vue_module_identifier__$8,
      false,
      browser,
      undefined,
      undefined
    );

  // Import vue component
  prepareForExport(__vue_component__$8); // To allow use as module (npm/webpack/etc.) export component

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

  exports.AppFooter = __vue_component__$1;
  exports.AppHeader = __vue_component__;
  exports.Callout = __vue_component__$3;
  exports.Checkbox = __vue_component__$4;
  exports.Dropdown = __vue_component__$6;
  exports.MobileMenu = __vue_component__$2;
  exports.Radio = __vue_component__$5;
  exports.TextArea = __vue_component__$8;
  exports.Textbox = __vue_component__$7;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
