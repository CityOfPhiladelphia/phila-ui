// Import vue component
import component from './Modal.vue';
import prepareForExport from '@/utils/prepareForExport';

prepareForExport(component);

// To allow use as module (npm/webpack/etc.) export component
export default component;
