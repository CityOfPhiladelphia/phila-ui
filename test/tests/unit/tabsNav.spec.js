import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import TabsNav from '@/components/TabsNav';
import { links } from './resources';

// Creates a view instance for local unit test.
const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();


describe('TabsNav', () => {
  it('Test tabs nav props: links. And test slot.', async () => {
    const slotContent = '<p>Slot content</p>';
    const wrapper = mount(TabsNav, {
      localVue,
      router,
      propsData: { links },
      slots: { default: slotContent },
    });

    // Test the prop
    const html = wrapper.html();

    expect(html).toContain(links[0].href);
    expect(html).toContain(links[0].text);
    expect(html).toContain(links[1].text);
    expect(html).toContain(links[2].text);

    expect(wrapper.findAll('a').length).toBe(links.length);

    // Test the slot.
    wrapper.setProps({ links: [] });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toContain(slotContent);
  });
});
