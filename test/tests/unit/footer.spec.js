import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import AppFooter from '@/components/AppFooter';
// import AppHeader from '@/components/AppHeader';

import { links } from './resources';

// Creates a view instance for local unit test.
const localVue = createLocalVue();
localVue.use(VueRouter);
// localVue.component('AppHeader', AppHeader);
const router = new VueRouter();

describe('AppFooter', () => {
  it('Render props.links when passed. Also test the default slot', async () => {
    const linksSlot = `<p>Links slot</p>`;
    
    const wrapper = mount(AppFooter, {
      localVue,
      router,
      propsData: { links },
      slots: { default: linksSlot },
    });

    // Test the links prop. 
    const html = wrapper.html();

    expect(html).toContain(links[0].href);
    expect(html).toContain(links[0].text);
    expect(html).toContain(links[1].text);
    expect(html).toContain(links[2].text);

    wrapper.setProps({ links: [] });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toContain(linksSlot);
  });
});
