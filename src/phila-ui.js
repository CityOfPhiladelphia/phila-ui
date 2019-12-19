// Components
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Callout from './components/Callout';
import Checkbox from './components/Inputs/Checkbox';
import Radio from './components/Inputs/Radio';
import Dropdown from './components/Inputs/Dropdown';
import LangSelector from './components/LangSelector';
import Textbox from './components/Inputs/Textbox';
import TextArea from './components/Inputs/TextArea';

/**
 * Function to install components globally
 */
const install = function(Vue, settings = {}) {
  if (this.installed) {
    return;
  }

  this.installed = true;

  for (let componentName in this) {
    let componentSettings = settings[componentName] || {};

    if (typeof this[componentName].install === 'function') {
      this[componentName].install.call(null, Vue, componentSettings);
    }
  }
};

export {
  AppHeader,
  AppFooter,
  Callout,
  Checkbox,
  LangSelector,
  Radio,
  Dropdown,
  Textbox,
  TextArea,

  // Install Helper for Vue
  install,
};
