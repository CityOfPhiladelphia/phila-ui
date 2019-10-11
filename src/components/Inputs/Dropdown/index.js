// Import vue component
import component from './Dropdown.vue';

// Declare install function executed by Vue.use()
component.install = function(Vue, settings) {
  if (component.installed) {
    return;
  }
  component.installed = true;

  const name = settings.altName ? settings.altName : component.name;
  Vue.component(name, component);
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

// To allow use as module (npm/webpack/etc.) export component
export default component;
