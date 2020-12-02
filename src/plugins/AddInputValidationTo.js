import { withValidation } from 'vee-validate';

export default (Vue, options) => {
  options.forEach(input => {
    const inputWV = `Vee${input}`;
    let cWithValidation = withValidation(Vue.options.components[input]);
    Vue.component(inputWV, cWithValidation);
  });
  console.log(Vue.options.components);
};
