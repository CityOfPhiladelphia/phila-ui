// Base Styles
import './styles/base.scss';

// Components
import AppButton from './components/AppButton';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Checkbox from './components/Inputs/Checkbox';
import Radio from './components/Inputs/Radio';
import Dropdown from './components/Inputs/Dropdown';
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
  AppButton,
  AppHeader,
  AppFooter,
  Checkbox,
  Radio,
  Dropdown,
  Textbox,
  TextArea,

  // Install Helper for Vue
  install,
};
