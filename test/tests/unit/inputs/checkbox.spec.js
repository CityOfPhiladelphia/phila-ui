import { shallowMount } from '@vue/test-utils';
import Checkbox from '@/components/Inputs/Checkbox';

import { inputCommonProps } from '../resources';
import { textErrors, testBasicAttrs } from './helpers';

describe('Checkbox', () => {
  it('Test checkbox props and error functionality', async () => {
    let props = {
      errors: '',

      name: 'inputName',
      label: 'Input label',
      desc: 'Input description',
      value: 'Option 1',
      isLoading: false,
      innerLabel: true,
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
    };
    const wrapper = shallowMount(Checkbox, {
      propsData: props,
    });

    // Test basic input structure
    let html = wrapper.html();
    let input = wrapper.find(inputTag);

    // Test attrs
    expect(input.attributes('id')).toContain(attrs.id);
    expect(html).toContain(attrs.desc);
    expect(input.element.value).toBe(attrs.value);
    
    if (attrs.type)
      expect(input.attributes('type')).toBe(attrs.type);

    let label = wrapper.find('label');
    expect(label.text()).toBe(attrs.label);
    
    // Test v-model
    let testUpdateValue = 'Second value';

    input.element.value = testUpdateValue;
    input.trigger('input');
    input.trigger('change');

    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual([ testUpdateValue ]);
    
    // Test errors
    await textErrors(wrapper, expect);

    // Custom tests
  });
});
