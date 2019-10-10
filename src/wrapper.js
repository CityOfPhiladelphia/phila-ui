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

PhilaUI.install = function(Vue, settings) {
  if (PhilaUI.installed) {
    return;
  }

  PhilaUI.installed = true;

  for (let componentName in PhilaUI) {
    if (componentName === 'install'
      || componentName === 'installed') {
      continue;
    }

    let componentSettings = settings[componentName] || {};

    if (typeof PhilaUI[componentName].install === 'function') {
      PhilaUI[componentName].install.call(null, Vue, componentSettings);
    }
  }
};

export default PhilaUI;
