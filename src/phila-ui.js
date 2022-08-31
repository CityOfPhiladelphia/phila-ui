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
import Phone from './components/Inputs/Phone';
import TabsNav from './components/TabsNav';
import MobileNav from './components/MobileNav';
import DropdownNav from './components/DropdownNav';
import DateText from './components/Inputs/DateText';
import DatePicker from './components/Inputs/DatePicker';
import MaskedInput from './components/Inputs/MaskedInput';
import Tooltip from './components/Tooltip';
import Modal from './components/Modal';
import ResponsiveHelpers from './plugins/ResponsiveHelpers';

/**
 * Function to install components globally
 */
const install = function(Vue, settings = {}) {

  Vue.use(ResponsiveHelpers);

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
  InputForm,
  Checkbox,
  LangSelector,
  Radio,
  Dropdown,
  Textbox,
  TextArea,
  Phone,
  TabsNav,
  MobileNav,
  DropdownNav,
  DateText,
  DatePicker,
  MaskedInput,
  Tooltip,
  Modal,
  ResponsiveHelpers,
  install,
};

