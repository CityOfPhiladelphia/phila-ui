function prepareForExport (component) {

  const merge = require('deepmerge');

  // Declare install function executed by Vue.use()
  component.install = function (Vue, settings = {}) {
    if (component.installed) {
      return;
    }
    component.installed = true;

    const name = settings.altName || settings.name || component.name;
    const componentWithSettings = merge.all([ component, settings ]);

    Vue.component(name, componentWithSettings);
  };

  // Create module definition for Vue.use()
  const plugin = {
    install: component.install,
  };

  // Auto-install when vue is found (eg. in browser via <script> tag)
  let GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }

}

export default prepareForExport;
