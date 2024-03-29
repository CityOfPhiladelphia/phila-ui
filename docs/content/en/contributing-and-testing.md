---
title: Contributing & Testing
menuTitle: Contributing & Testing
category: "Get Started"
position: 3
badge: ""
---

## Contributing

Ways to contribute to Phila-UI by:

1. Add new components
2. Test and improve existing components
3. Review, update and add new documentation

## Local Setup

### Install PhilaUI

Install PhilaUI for local testing:

1. Clone the PhilaUI repo `git clone https://github.com/CityOfPhiladelphia/phila-ui`

2. CD into the phila-ui directory and run `npm install`

3. Next, run `npm run watch` to watch for file changes.

4. On a separate terminal window, run `npm link` to create a symlink.

### Install the boilerplate

Use this boilerplate to quickly test phila-ui components locally

1. Clone the Vue boilerplate `git clone https://github.com/CityOfPhiladelphia/phila-vue-boilerplate`
2. Go into the boilerplate folder `cd phila-vue-boilerplate` and run `npm install`
3. Add the symlink created on step 4 above to the boiler plate by running `npm link @phila/phila-ui`

As long as the PhilaUI watcher is running, changes to the PhilaUI library should be reflected locally in the boilerplate.

### Submit your changes

Whenever changes are made to PhilaUI a PR should be submitted and approved before the content is pushed to production.

PhilaUI follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) guidelines for commit messages.

**Usage summary:**
| Message | Usage | Effect |
|---|---|---|
| **_fix:_** | for bug fixing and patches | release: patch bump |
| **_style:_** |for styles only fixes | no release |
| **_docs:_** | for documentation updates | no release |
| **_feat:_** | for minor added features | release: minor version bump |
| **_BREAKING CHANGE:_** | (in the commit body) for major releases | release: major version bump |

For the sake of keeping things organized branch names can follow a similar convention:

- fix/{fix-name}
- style/{style-name}
- feat/{feat-name}
- docs/{docs-name}

### Component requirements

Before making to production components should be checked for the following requirements:

1. Follow the web accessibility guidelines ([WCAG](https://www.w3.org/WAI/WCAG2AA-Conformance)) with a minimum of AA level.
2. Pass the [wave test](https://wave.webaim.org/), with especial attention to color contrast warnings/errors.
3. [ARIA attributes](https://www.w3.org/TR/html-aria/) should be added as needed
4. Tested on IE11 and new versions of Chrome, Firefox, Safari and Edge.

## Documentation

PhilaUI's documentation (this website) is kept in PhilaUI's docs folder. It's built with:

1. [Nuxt/Content](https://content.nuxtjs.org) (using the [theme](https://content.nuxtjs.org/themes/docs) option)
2. [Docgen-cli](https://vue-styleguidist.github.io/docs/docgen-cli.html)

### Updating the docs

1. Follow [steps 1 and 2 above](#install-philaui) to install PhilaUI locally.
2. CD into the `docs` folder in the root of PhilaUI.
3. Run `npm run docgen` to start the documentation watcher
4. On a separate terminal window run `npm run dev` to start the Nuxt server

### Docgen

Docgen generates a .md file, named after the component file name, by reading all the comments from a Vue component file and then searches for a readme.md file in the same component folder and appends it to the bottom. All files generated are placed in the `/docs/content/en/components` folder.

<alert type="warning">Files in the `/docs/content/en/components` folder should never be changed as they will be overwritten each time the watcher runs</alert>

Check the [vue-styleguidist](https://vue-styleguidist.github.io/docs/Documenting.html#code-comments) documentation to learn how to write comments used by Docgen.

At a minimum each component should have the following comment above the `export default`:

```js
/**
 * My component description
 * @niceName My Nice Component Name
 * @group My Component Group
 * @position 0
 */
```

| Tag       | Description                                       |
| :-------- | :------------------------------------------------ |
| @niceName | The name used in the navigation menu              |
| @group    | Use it to group components in the navigation menu |
| @position | Use it to order components in the navigation menu |

Positioning is a manual process. To avoid switching positions often, positioning is currently increased by 100 per group, and increased by 5 inside each @group.

For instance the **Get Started** group starts at 0, and each item inside the group increases by 5.

- Item 1 position = 0
- Item 2 position = 5
- Item 3 position = 10 and so on...

The **Components Navigation** group starts at 100, and each item inside the group increases by 5.

- Item 1 position = 100
- Item 2 position = 105
- Item 3 position = 110 and so on...

<alert>The word "Components" in the navigation menu is prefixed automatically to each component group.</alert>

### Other tags available

| Tag         | Description                                              |
| :---------- | :------------------------------------------------------- |
| @badge next | Indicates that the documentation is for the next release |
| @noExport   | Indicates that the component is not exported             |

### Nuxt/Content

The Nuxt/Content module is used to generate the theme and the static files that are published/distributed. Any other documentation that's not generated by Docgen can be created in the `/docs/content/en` folder manually, these will not be overwritten by Docgen.

Please see the Nuxt/Content [documentation on how to write markdown](https://content.nuxtjs.org/writing#markdown) and how to use [Front-matter](https://content.nuxtjs.org/themes/docs#front-matter) with the theme.

### Deploying the documentation

Updates to the master branch will deploy `docs/dist` folder.
