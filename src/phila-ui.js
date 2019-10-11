// Base Styles
import css from './styles/base.scss';

// Components
import Header from './components/Header';
import InputCheckbox from './components/InputCheckbox';
import InputRadio from './components/InputRadio';
import InputSelect from './components/InputSelect';
import InputText from './components/InputText';
import InputTextarea from './components/InputTextarea';
import CallOut from './components/Callout';

/**
 * Function to install components globally
 */
const install = function(Vue, settings) {
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

/**
 * Function to inject the phila-ui styles in the header
 */
// const Styles = function () {
//   if (!css) {
//     return;
//   }
//   if (typeof window === 'undefined') {
//     return;
//   }

//   var style = document.createElement('style');

//   style.setAttribute('type', 'text/css');
//   style.innerHTML = css;
//   document.head.appendChild(style);
// };

export {
  // Styles,

  Header,
  InputCheckbox,
  InputRadio,
  InputSelect,
  InputText,
  InputTextarea,
  CallOut,

  // Install Helper for Vue
  install,
};
