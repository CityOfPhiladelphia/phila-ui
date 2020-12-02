// Components
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Callout from './components/Callout';
import InputForm from './components/Inputs/InputForm';
import Checkbox from './components/Inputs/Checkbox';
import Radio from './components/Inputs/Radio';
import Dropdown from './components/Inputs/Dropdown';
import LangSelector from './components/LangSelector';
import Textbox from './components/Inputs/Textbox';
import TextArea from './components/Inputs/TextArea';
import TabsNav from './components/TabsNav';
import MobileNav from './components/MobileNav';
import DropdownNav from './components/DropdownNav';
import ResponsiveHelper from './plugins/ResponsiveHelper';
import addInputValidationTo from './plugins/AddInputValidationTo';

/**
 * Function to install components globally
 */
const install = function(Vue, settings = {}) {

  Vue.use(ResponsiveHelper);

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

  if (settings.addValidation) {
    Vue.use(addInputValidationTo, settings.addValidation);
  }

};

export {
  AppHeader,
  AppFooter,
  Callout,
  InputForm,
  Checkbox,
  LangSelector,
  Radio,
  Dropdown,
  Textbox,
  TextArea,
  TabsNav,
  MobileNav,
  DropdownNav,
  ResponsiveHelper,
  addInputValidationTo,
  // Install Helper for Vue
  install,
};

