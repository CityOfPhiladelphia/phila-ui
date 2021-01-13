import { mount, createLocalVue } from '@vue/test-utils';
import DropdownNav from '@/components/DropdownNav';
import VueRouter from 'vue-router';
import { links } from './resources';

// Creates a view instance for local unit test.
const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();


describe('DropdownNav', () => {
  it('Test the dropdown nav prop.nav and, test the default slot.', async () => {
    const testSlot = '<div>Renders nav slot</div>';

    const wrapper = mount(DropdownNav, {
      localVue,
      router,
      propsData: {
        nav: {
          button: 'Test Button',
          icon: true,
          links,
        },
      },
      slots: { default: testSlot },
    });

    // Test the prop and the class type.
    const html = wrapper.html();
    expect(html).toContain(links[0].text);
    expect(html).toContain(links[1].text);
    expect(html).toContain(links[2].text);

    // Test the slot.
    wrapper.setProps({ nav: { links: [] }});
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toContain(testSlot);
  });
});
