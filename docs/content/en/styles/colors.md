---
title: Colors
menuTitle: Colors
category: "Style Guide"
position: 13
badge: ""
---

PhilaUI colors are based off of Phila.gov's [Digital Standards](https://standards.phila.gov/). All PhilaUI components and most elements within _.content_ class are already styled, thus adding new colors and/or using color classes should be done sparingly.

Visit [installation-and-usage#making-variables-available](/installation-and-usage#making-variables-available) to learn how to use SCSS variables in a project.

## Color variable names and values

These colors are custom to PhilaUI.

- \$ben-franklin-blue-light: <span style="background-color:#daedfe">#daedfe</span>

- \$ben-franklin-blue: <span style="background-color:#2176d2;color:white">#2176d2</span>
- \$ben-franklin-blue-light: <span style="background-color:#0f4d90;color:white">#0f4d90</span>
- \$electric-blue: <span style="background-color:#25CEF7;color:white">#25CEF7</span>
- \$bell-yellow-light: <span style="background-color:#fff7d0;">#fff7d0</span>
- \$bell-yellow: <span style="background-color:#f3c613;color:white">#f3c613</span>
- \$phanatic-green-light: <span style="background-color:#dcf8d8;">#dcf8d8</span>
- \$phanatic-green: <span style="background-color:#3a833c;color:white">#3a833c</span>
- \$phanatic-green-dark: <span style="background-color:#295b29;color:white">#295b29</span>
- \$love-park-red-light: <span style="background-color:#fee7e7;">#fee7e7</span>
- \$love-park-red: <span style="background-color:#cc3000;color:white">#cc3000</span>
- \$love-park-red-dark: <span style="background-color:#a82400;color:white">#a82400</span>
- \$flyers-orange: <span style="background-color:#F99300;color:white">#F99300</span>

### Greys or grays

- \$white: <span style="background-color:#ffffff;">#ffffff</span>
- \$ghost-grey, \$ghost-gray: <span style="background-color:#f0f0f0;">#f0f0f0</span>
- \$sidewalk-grey, \$sidewalk-gray: <span style="background-color:#cfcfcf;">#cfcfcf</span>
- \$grey-light, \$gray-light: same as \$sidewalk-gray
- \$grey-medium, \$gray-medium: <span style="background-color:#a1a1a1;color:white">#a1a1a1</span>
- \$grey-dark, \$gray-dark: <span style="background-color:#444444;color:white">#444444</span>
- \$black: <span style="background-color:#000000;color:white">#000000</span>

### Bulma color variables

Some Bulma color variables have been overwritten to match PhilaUI colors.

### Success

- $success: $phanatic-green;
- $success-invert: $white;
- $success-light: $phanatic-green-light;
- $success-dark: $phanatic-green-dark;

### Warning

- $warning: $bell-yellow;
- $warning-invert: $grey-dark;
- $warning-light: $bell-yellow-light;
- $warning-dark: $grey-dark;

### Danger

- $danger: $love-park-red;
- $danger-invert: $white;
- $danger-light: $love-park-red-light;
- $danger-dark: $love-park-red-dark;

### Primary

- $primary: $ben-franklin-blue;
- $primary-invert: $white;
- $primary-dark: $ben-franklin-blue-dark;
- $primary-light: $ben-franklin-blue-light;

### Link

- $link: $ben-franklin-blue;
- $link-invert: $white;
- $link-light: $ben-franklin-blue-light;
- $link-dark: $ben-franklin-blue-dark;

- $info: $ben-franklin-blue;
- $info-invert: $white;
- $info-light: $ben-franklin-blue-light;
- $info-dark: $ben-franklin-blue-dark;

## Color classes

PhilaUI uses Bulma's color functions to form some custom classes. These classes have the following pattern:

### has-text-COLOR

- has-text-love-park-red
- has-text-ben-franklin-blue
  ...

### has-background-COLOR

- has-background-love-park-red
- has-background-ben-franklin-blue
  ...

<alert type="warning">Bulma's default color helpers are mostly ignored and will eventually be deprecated.</alert>
