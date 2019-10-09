// Base Styles
import './styles/base.scss';

// Components

import Header from './components/Header';
import InputCheckbox from './components/InputCheckbox';
import InputRadio from './components/InputRadio';
import InputSelect from './components/InputSelect';
import InputText from './components/InputText';
import InputTextarea from './components/InputTextarea';

// import MyComponent from './components/MyComponent';

const PhilaUI = {
  Header,
  InputCheckbox,
  InputRadio,
  InputSelect,
  InputText,
  InputTextarea,

  // MyComponent
};

PhilaUI.install = function (Vue) {
  if (install.installed) return;
  install.installed = true;
  for (component in PhilaUI) {
    if (component === 'install') continue;
    Vue.component(`${component}`, PhilaUI[component]);
  }
};

export default PhilaUI;