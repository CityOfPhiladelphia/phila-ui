---
title: Contributing & Testing
menuTitle: Contributing & Testing
category: 'Get Started'
position: 3
badge: ''
---

## Contributing
Ways to contribute to Phila-UI by:
1. Add new components
2. Test and improve existing components
3. Review, update and add new documentation

## Local Setup

### Install PhilaUI
Install PhilaUI for local testing:

1. Clone the PhilaUI repo ``git clone https://github.com/CityOfPhiladelphia/phila-ui``

2. CD into the phila-ui directory and run ``npm install``

3. Next, run ``npm run watch`` to watch for file changes.

4. On a seperate terminal window, run ``npm link`` to create a symlink.

### Install the boilerplate

Use this boilerplate to quickly test phila-ui components locally

1. Clone the vue boilerplate ``git clone https://github.com/CityOfPhiladelphia/phila-vue-boilerplate``
2. Go into the boilerplate folder ``cd phila-vue-boilerplate`` and run ``npm install``
3. Add the symlink created on step 4 above to the boiler plate by running ``npm link @phila/phila-ui``

As long as the PhilaUI watcher is running, changes to the PhilaUI library should be reflected locally in the boilerplate.

### Submit your changes
Whenever changes are made to PhilaUI a PR should be submitted and approved before the content is pushed to production.

## Documentation
PhilaUI's documentation (this website) is kept in PhilaUI's docs folder. It's built with:

1. [Nuxt/Content](https://content.nuxtjs.org) (using the [theme](https://content.nuxtjs.org/themes/docs) option)
2. [Docgen-cli](https://vue-styleguidist.github.io/docs/docgen-cli.html)

### Updating the docs

1. Follow [steps 1 and 2 above](#install-philaui) to install PhilaUI locally.
2. CD into the ``docs`` folder in the root of PhilaUI.
3. Run ``npm run docgen`` to start the docge watcher
4. On a seperate terminal window run ``npm run dev`` to start the nuxt server

### Docgen & Nuxt/Content
Docgen generates a .md file, named after the component file name, by reading all the comments from a vue component file and then searches for a readme.md file in the same component folder and appends it to the bottom.

Check the [vue-styleguidist](https://vue-styleguidist.github.io/docs/Documenting.html#code-comments) documentation to learn how to write comments used by Docgen.

At a minimum each component should have the following comment above the ``export default``:

```js
/**
 * My component description
 * @niceName My Nice Component Name
 * @group My Component Group
 * @position 0
 */
```

| Tag | Description |
| :------------- | :---------- |
| @niceName | The name used in the navigation menu |
| @group | Use it to group components in the navigation menu |
| @position | Use it to order components in the navigation menu |

Positioning is a manual process, to avoid switching positions often, positioning is currently increased by 100 per grouping, and by 5 inside each @group.

For instance the **Get Started** group starts at 0, and each item inside the group increases by 5.
- Item 1 position = 0
- Item 2 position = 5
- Item 3 psoition = 10 and so on...

### Other tags available
| Tag | Description |
| :------------- | :---------- |
| @wip | Indicates that the documentation is "work in progress" |
| @noExport | Indicates that the component is not exported |
