import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/Home"),
    },
    {
      path: "/examples",
      name: "examples",
      component: () => import("@/components/Examples"),
      children: [
        {
          path: "app-header-1",
          name: "app-header-1",
          component: () => import("@/components/examples/AppHeader1"),
          meta: {
            label: 'with title and subtitle',
            category: "Navigation",
            component: "AppHeader",
          },
        },
        {
          path: "app-header-2",
          name: "app-header-2",
          component: () => import("@/components/examples/AppHeader2"),
          meta: {
            label: 'with branding image and link',
            category: "Navigation",
            component: "AppHeader",
          },
        },
        {
          path: "app-header-3",
          name: "app-header-3",
          component: () => import("@/components/examples/AppHeader3"),
          meta: {
            label: 'with tabbed navigation',
            category: "Navigation",
            component: "AppHeader",
          },
        },
        {
          path: "app-header-4",
          name: "app-header-4",
          component: () => import("@/components/examples/AppHeader4"),
          meta: {
            label: 'with dropdown navigation',
            category: "Navigation",
            component: "AppHeader",
          },
        },
        {
          path: "app-header-5",
          name: "app-header-5",
          component: () => import("@/components/examples/AppHeader5"),
          meta: {
            label: 'with language selector',
            category: "Navigation",
            component: "AppHeader",
          },
        },
        {
          path: "app-header-6",
          name: "app-header-6",
          component: () => import("@/components/examples/AppHeader6"),
          meta: {
            label: 'with mobile navigation',
            category: "Navigation",
            component: "AppHeader",
          },
        },
        {
          path: "app-header",
          name: "app-header",
          component: () => import("@/components/examples/AppHeader"),
          meta: {
            label: 'with all main props and slots',
            category: "Navigation",
            component: "AppHeader",
          },
        },
        {
          path: "app-footer-1",
          name: "app-footer-1",
          component: () => import("@/components/examples/AppFooter1"),
          meta: {
            label: 'with basic links',
            category: "Navigation",
            component: "AppFooter",
          },
        },
        {
          path: "app-footer-2",
          name: "app-footer-2",
          component: () => import("@/components/examples/AppFooter2"),
          meta: {
            label: 'with positon fixed',
            category: "Navigation",
            component: "AppFooter",
          },
        },
        {
          path: "form-1",
          name: "form-1",
          component: () => import("@/components/examples/Form1"),
          meta: {
            label: 'with validation on each field',
            category: "Inputs",
            component: "Form",
          },
        },
        {
          path: "form-2",
          name: "form-2",
          component: () => import("@/components/examples/Form2"),
          meta: {
            label: 'with validation on submit',
            category: "Inputs",
            component: "Form",
          },
        },
        {
          path: "textbox-1",
          name: "textbox-1",
          component: () => import("@/components/examples/Textbox1"),
          meta: {
            label: 'with placeholder as label (default)',
            category: "Inputs",
            component: "Textbox",
          },
        },
        {
          path: "textbox-3",
          name: "textbox-3",
          component: () => import("@/components/examples/Textbox3"),
          meta: {
            label: 'with label on top',
            category: "Inputs",
            component: "Textbox",
          },
        },
        {
          path: "textbox-2",
          name: "textbox-2",
          component: () => import("@/components/examples/Textbox2"),
          meta: {
            label: 'with error',
            category: "Inputs",
            component: "Textbox",
          },
        },
        {
          path: "textbox-4",
          name: "textbox-4",
          component: () => import("@/components/examples/Textbox4"),
          meta: {
            label: 'with validation',
            category: "Inputs",
            component: "Textbox",
          },
        },
        {
          path: "checkbox-1",
          name: "checkbox-1",
          component: () => import("@/components/examples/Checkbox1"),
          meta: {
            label: 'with Array of options',
            category: "Inputs",
            component: "Checkbox",
          },
        },
        {
          path: "checkbox-2",
          name: "checkbox-2",
          component: () => import("@/components/examples/Checkbox2"),
          meta: {
            label: 'with options Object',
            category: "Inputs",
            component: "Checkbox",
          },
        },
        {
          path: "checkbox-3",
          name: "checkbox-3",
          component: () => import("@/components/examples/Checkbox3"),
          meta: {
            label: 'with Array of Object options',
            category: "Inputs",
            component: "Checkbox",
          },
        },
        {
          path: "checkbox-4",
          name: "checkbox-4",
          component: () => import("@/components/examples/Checkbox4"),
          meta: {
            label: 'with error',
            category: "Inputs",
            component: "Checkbox",
          },
        },
        {
          path: "checkbox-5",
          name: "checkbox-5",
          component: () => import("@/components/examples/Checkbox5"),
          meta: {
            label: 'with validation',
            category: "Inputs",
            component: "Checkbox",
          },
        },
        {
          path: "radio-1",
          name: "radio-1",
          component: () => import("@/components/examples/Radio1"),
          meta: {
            label: 'with Array of options',
            category: "Inputs",
            component: "Radio",
          },
        },
        {
          path: "radio-2",
          name: "radio-2",
          component: () => import("@/components/examples/Radio2"),
          meta: {
            label: 'with options Object',
            category: "Inputs",
            component: "Radio",
          },
        },
        {
          path: "radio-3",
          name: "radio-3",
          component: () => import("@/components/examples/Radio3"),
          meta: {
            label: 'with Array of Object options',
            category: "Inputs",
            component: "Radio",
          },
        },
        {
          path: "radio-4",
          name: "radio-4",
          component: () => import("@/components/examples/Radio4"),
          meta: {
            label: 'with error',
            category: "Inputs",
            component: "Radio",
          },
        },
        {
          path: "radio-5",
          name: "radio-5",
          component: () => import("@/components/examples/Radio5"),
          meta: {
            label: 'with validation',
            category: "Inputs",
            component: "Radio",
          },
        },
        {
          path: "dropdown-1",
          name: "dropdown-1",
          component: () => import("@/components/examples/Dropdown1"),
          meta: {
            label: 'with Array of options',
            category: "Inputs",
            component: "Dropdown",
          },
        },
        {
          path: "dropdown-2",
          name: "dropdown-2",
          component: () => import("@/components/examples/Dropdown2"),
          meta: {
            label: 'with options Object',
            category: "Inputs",
            component: "Dropdown",
          },
        },
        {
          path: "dropdown-3",
          name: "dropdown-3",
          component: () => import("@/components/examples/Dropdown3"),
          meta: {
            label: 'with Array of Object options',
            category: "Inputs",
            component: "Dropdown",
          },
        },
        {
          path: "text-area-1",
          name: "text-area-1",
          component: () => import("@/components/examples/TextArea1"),
          meta: {
            label: 'with placeholder and description',
            category: "Inputs",
            component: "TextArea",
          },
        },
        {
          path: "text-area-2",
          name: "text-area-2",
          component: () => import("@/components/examples/TextArea2"),
          meta: {
            label: 'with error',
            category: "Inputs",
            component: "TextArea",
          },
        },
        {
          path: "text-area-3",
          name: "text-area-3",
          component: () => import("@/components/examples/TextArea3"),
          meta: {
            label: 'with validation',
            category: "Inputs",
            component: "TextArea",
          },
        },
        {
          path: "callout-1",
          name: "callout-1",
          component: () => import("@/components/examples/Callout1"),
          meta: {
            label: 'with custom types',
            component: 'Callout',
            category: 'Other',
          },
        },
        {
          path: "callout-2",
          name: "callout-2",
          component: () => import("@/components/examples/Callout2"),
          meta: {
            label: 'using class and slot',
            component: 'Callout',
            category: 'Other',
          },
        },
        {
          path: "full-1",
          name: "full-1",
          component: () => import("@/components/examples/Full1"),
          meta: {
            label: 'Full example using all components and styles',
            component: 'All',
            category: 'Other',
          },
        },
      ],
    },
  ],
});