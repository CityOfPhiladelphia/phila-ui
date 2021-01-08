import { shallowMount } from '@vue/test-utils';
import Textarea from '@/components/Inputs/Textarea';

import { inputCommonProps } from '../resources';
import { textErrors, testBasicAttrs } from './helpers';

describe('Textarea', () => {
  it('Test textarea props and error functionality', async () => {
    const wrapper = shallowMount(Textarea, {
      propsData: inputCommonProps,
    });

    // Test basic input structure
    await testBasicAttrs(wrapper, expect, inputCommonProps, 'textarea');
    
    // Test errors
    await textErrors(wrapper, expect);
  });
});
