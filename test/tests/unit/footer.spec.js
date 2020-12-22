import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import AppFooter from '@/components/AppFooter';
// import AppHeader from '@/components/AppHeader';

// Creates a view instance for local unit test.
const localVue = createLocalVue();
localVue.use(VueRouter);
// localVue.component('AppHeader', AppHeader);
const router = new VueRouter();

describe('AppFooter', () => {
  it('Render props.links when passed. Also test the default slot', async () => {
    const linksSlot = `<p>Links slot</p>`;

    const links = [
      {
        type: 'native',
        href: 'https://example.com',
        attrs: {
          id: 'id1',
        },
      },
      {
        type: 'native',
        href: 'https://example.com',
        click: () => { console.log('Just clicked'); },
        attrs: {
          id: 'id2',
        },
      },
      {
        href: '',
        attrs: {
          id: 'id3',
        },
      },
    ];
    const wrapper = mount(AppFooter, {
      localVue,
      router,
      propsData: { links },
      slots: { default: linksSlot },
    });

    // Test the links prop. 
    const html = wrapper.html();

    expect(html).toContain('https://example.com');
    expect(html).toContain('id1');
    expect(html).toContain('id2');
    expect(html).toContain('id3');

    wrapper.setProps({ links: [] });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toContain(linksSlot);
  });
});
