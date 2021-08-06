import { shallowMount } from '@vue/test-utils';
import LangSelector from '@/components/LangSelector';

describe('LangSelector', () => {
  it('Test prop.languages.', async () => {
    const wrapper = shallowMount(LangSelector, {
      propsData: {
        languages: [
          { language: 'en', title: 'English' },
          { language: 'es', title: 'Spanish' },
          { language: 'fr', title: 'French' },
        ],
      },
      mocks: {
        $i18n: {
          locale: 'en',
        },
      },
    });

    // Test the prop and the class type.
    const html = wrapper.html();
    expect(html).toContain('Spanish');
    expect(wrapper.vm.$i18n.locale).toBe('en');

    wrapper.find('#lang-selector button').trigger('click');
    await wrapper.vm.$nextTick();
    wrapper.findAll('ul[role="menu"] a[role="menuitem"]').at(1).trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.$i18n.locale).toBe('es');
  });
});
