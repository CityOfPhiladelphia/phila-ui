import { mount } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader';
import { links } from './resources';


describe('AppHeader', () => {
  it('Render props: appTitle, appLink, appSubtittle, brandingImage and brandingLink when passed, and slotss.', async () => {
    const brandingLink = links[0];

    const tabsNav = `<div>Tabs Nav</div>`;
    const leftNav = `<div>Left Nav</div>`;
    const rightNav = `<div>Right Nav</div>`;
    const langNav = `<div>Language Selector Nav</div>`;
    const dropdownNav = `<div>Dropdown Nav</div>`;
    const mobileNav = `<div>Mobile Nav</div>`;
    
    const wrapper = mount(AppHeader, {
      data() {
        return { isMobile: false };
      },

      propsData: {
        appTitle: 'Title test',
        appSubtitle: 'Subtitle test',
        appLink: 'http://example.com',
        brandingImage: {
          src: 'https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png',
          title: 'City Of Philadelphia Logo',
        }, 
        brandingLink,
      },
      
      slots: {
        'tabs-nav': tabsNav,
        'left-nav': leftNav,
        'right-nav': rightNav,
        'lang-selector-nav': langNav,
        'dropdown-nav': dropdownNav,
        'mobile-nav': mobileNav,
      }
    });

    const html = wrapper.html();

    // Test props
    expect(html).toContain('Title test'); // Test title
    expect(html).toContain('Subtitle test'); // Test render subtitle
    expect(html).toContain('http://example.com'); // Test render app link
    expect(html).toContain('https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png'); // Test render branding image
    expect(html).toContain('City Of Philadelphia Logo'); // Second test render branding image
    expect(html).toContain(links[0].text); // Test render branding link.


    // Test slots
    expect(html).toContain(tabsNav);
    expect(html).toContain(leftNav);
    expect(html).toContain(rightNav);
    expect(html).toContain(langNav);
    expect(html).toContain(dropdownNav);


    // Modify isMobile parameter and test mobile slot to be rendered
    wrapper.setData({ isMobile: true });
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain(mobileNav)
  });
});
