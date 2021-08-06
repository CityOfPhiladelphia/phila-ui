import { shallowMount } from '@vue/test-utils';
import Textbox from '@/components/Inputs/Textbox';

import { inputCommonProps } from '../resources';
import { textErrors, testBasicAttrs } from './helpers';

describe('Textbox', () => {
  it('Test textbox props and error functionality', async () => {
    let attrs = {
      ...inputCommonProps,
      type: 'email',
    };
    const wrapper = shallowMount(Textbox, {
      propsData: attrs,
    });

    // Test basic input structure
    await testBasicAttrs(wrapper, expect, attrs, 'input');
    
    // Test errors
    await textErrors(wrapper, expect);
  });
});
