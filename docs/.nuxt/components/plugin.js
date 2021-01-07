import Vue from 'vue'

const globalComponents = {
  BuiltWithNuxtDark: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/BuiltWithNuxtDark.vue' /* webpackChunkName: "components/global/icons/BuiltWithNuxtDark" */).then(c => c.default || c),
  BuiltWithNuxtLight: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/BuiltWithNuxtLight.vue' /* webpackChunkName: "components/global/icons/BuiltWithNuxtLight" */).then(c => c.default || c),
  IconArrowLeft: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconArrowLeft.vue' /* webpackChunkName: "components/global/icons/IconArrowLeft" */).then(c => c.default || c),
  IconArrowRight: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconArrowRight.vue' /* webpackChunkName: "components/global/icons/IconArrowRight" */).then(c => c.default || c),
  IconBadgeCheck: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconBadgeCheck.vue' /* webpackChunkName: "components/global/icons/IconBadgeCheck" */).then(c => c.default || c),
  IconCheckCircle: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconCheckCircle.vue' /* webpackChunkName: "components/global/icons/IconCheckCircle" */).then(c => c.default || c),
  IconChevronRight: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconChevronRight.vue' /* webpackChunkName: "components/global/icons/IconChevronRight" */).then(c => c.default || c),
  IconClipboardCheck: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconClipboardCheck.vue' /* webpackChunkName: "components/global/icons/IconClipboardCheck" */).then(c => c.default || c),
  IconClipboardCopy: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconClipboardCopy.vue' /* webpackChunkName: "components/global/icons/IconClipboardCopy" */).then(c => c.default || c),
  IconExclamationCircle: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconExclamationCircle.vue' /* webpackChunkName: "components/global/icons/IconExclamationCircle" */).then(c => c.default || c),
  IconExternalLink: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconExternalLink.vue' /* webpackChunkName: "components/global/icons/IconExternalLink" */).then(c => c.default || c),
  IconGithub: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconGithub.vue' /* webpackChunkName: "components/global/icons/IconGithub" */).then(c => c.default || c),
  IconInformationCircle: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconInformationCircle.vue' /* webpackChunkName: "components/global/icons/IconInformationCircle" */).then(c => c.default || c),
  IconMenu: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconMenu.vue' /* webpackChunkName: "components/global/icons/IconMenu" */).then(c => c.default || c),
  IconMoon: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconMoon.vue' /* webpackChunkName: "components/global/icons/IconMoon" */).then(c => c.default || c),
  IconSearch: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconSearch.vue' /* webpackChunkName: "components/global/icons/IconSearch" */).then(c => c.default || c),
  IconSun: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconSun.vue' /* webpackChunkName: "components/global/icons/IconSun" */).then(c => c.default || c),
  IconTranslate: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconTranslate.vue' /* webpackChunkName: "components/global/icons/IconTranslate" */).then(c => c.default || c),
  IconTwitter: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconTwitter.vue' /* webpackChunkName: "components/global/icons/IconTwitter" */).then(c => c.default || c),
  IconX: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconX.vue' /* webpackChunkName: "components/global/icons/IconX" */).then(c => c.default || c),
  IconXCircle: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconXCircle.vue' /* webpackChunkName: "components/global/icons/IconXCircle" */).then(c => c.default || c),
  AppColorSwitcher: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/app/AppColorSwitcher.vue' /* webpackChunkName: "components/global/app/AppColorSwitcher" */).then(c => c.default || c),
  Alert: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/base/Alert.vue' /* webpackChunkName: "components/global/base/Alert" */).then(c => c.default || c),
  Badge: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/base/Badge.vue' /* webpackChunkName: "components/global/base/Badge" */).then(c => c.default || c),
  CodeBlock: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/base/CodeBlock.vue' /* webpackChunkName: "components/global/base/CodeBlock" */).then(c => c.default || c),
  CodeGroup: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/base/CodeGroup.vue' /* webpackChunkName: "components/global/base/CodeGroup" */).then(c => c.default || c),
  CodeSandbox: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/base/CodeSandbox.vue' /* webpackChunkName: "components/global/base/CodeSandbox" */).then(c => c.default || c),
  List: () => import('../../node_modules/@nuxt/content-theme-docs/src/components/global/base/List.vue' /* webpackChunkName: "components/global/base/List" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
