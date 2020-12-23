import { shallowMount } from '@vue/test-utils';
import Textbox from '@/components/inputs/Textbox';

import { textErrors } from './helpers';

describe('Textbox', () => {
  it('Test textbox props and error functionality', async () => {
    const propsData = {
      id: 'input-id',
      errors: '',

      name: 'inputName',
      label: 'Input label',
      desc: 'Input description',
      placeholder: 'Input placeholder',
      type: 'email',
      value: 'Textbox value',
      isLoading: false,
      innerLabel: true,
    };

    const wrapper = shallowMount(Textbox, {
      propsData,
    });

    // Test basic input structure
    let html = wrapper.html();
    let input = wrapper.find('input');

    expect(input.attributes('placeholder')).toBe(propsData.placeholder);
    expect(input.attributes('type')).toBe(propsData.type);
    expect(input.element.value).toBe(propsData.value);
    expect(html).toContain(propsData.desc);
   
    let label = wrapper.find('label');
    expect(label.text()).toBe(propsData.label);

    // Test that v-model emit input happens.
    let testUpdateValue = 'New Value';

    input.element.value = testUpdateValue;
    input.trigger('input');

    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual([ testUpdateValue ]);
  
    await textErrors(wrapper, expect);
  });
});
