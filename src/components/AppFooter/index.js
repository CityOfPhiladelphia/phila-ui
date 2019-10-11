// Import vue component
import component from './AppFooter.vue';
import prepareForExport from '../../utils/prepareForExport';

prepareForExport(component);

// To allow use as module (npm/webpack/etc.) export component
export default component;
