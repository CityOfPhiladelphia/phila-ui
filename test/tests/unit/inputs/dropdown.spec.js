import { shallowMount } from '@vue/test-utils';
import Dropdown from '@/components/Inputs/Dropdown';

import { inputCommonProps } from '../resources';
import { textErrors, testBasicAttrs } from './helpers';

describe('Dropdown', () => {
  it('Test dropdown props and error functionality', async () => {
    let props = {
      ...inputCommonProps,
      options: {
        'First value': 'First value',
        'Second value': 'Second value',
      },
    };
    const wrapper = shallowMount(Dropdown, {
      propsData: props,
    });

    // Test basic input structure
    await testBasicAttrs(wrapper, expect, props, 'select');
    
    // Test errors
    await textErrors(wrapper, expect);

    // Custom tests
  });

  it('Test dropdown props.valueKey, and props.textKey when using an array of object', async () => {
    let options = [
      { id: 'First value', text: 'First value' },
      { id: 'Second value', text: 'Second value' },
    ]

    const props = {
      ...inputCommonProps,
      options,
      valueKey: 'id',
      textKey: 'text',
    };

    const wrapper = shallowMount(Dropdown, {
      propsData: props
    });

    // Test basic input structure
    await testBasicAttrs(wrapper, expect, props, 'select');
    
    // Test errors
    await textErrors(wrapper, expect);
  });
});
