import { shallowMount } from '@vue/test-utils';
import Callout from '@/components/Callout';

describe('Callout', () => {
  it('Test callout props: message and type. And test slot.', async () => {
    const message = '--Callout message--';
    const messageSlot = '<p>--Callout message--</p>'
    const type = 'warning'; // The prop doesn't have validation, it can be anything.

    const wrapper = shallowMount(Callout, {
      propsData: { message, type },
      slots: { default: messageSlot },
    });

    // Test the prop and the class type.
    expect(wrapper.html()).toContain(message);
    expect(wrapper.classes()).toContain(`is-${type}`);

    // Test the slot.
    wrapper.setProps({ message: undefined });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toContain(messageSlot);
  });
});
