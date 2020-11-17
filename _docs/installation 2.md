
### Bulma
phila-ui styles are built on top of the [Bulma] (https://bulma.io/) css framework.
```static
npm install bulma --save-dev
```

### phila-ui components
```static
npm install @phila/phila-ui --save
```

### Usage

**Import all components:**

```js static
import * as PhilaUI from '@phila/phila-ui';
```

**Import just the components you need:**

```js static
import { AppHeader, AppFooter } from '@phila/phila-ui';
```

### Options
| Option | Desc | Usage |
| ---- | --- | --- |
| altName | Give the component an alternartive name in case of conflict with other libraries | Vue.use(AppHeader, { altName: 'PhlHeader' })


### SCSS
The phila-ui scss modifies and expands on the defaults of the bulma library.

**Import all styles:**

Import all styles at once using the ```all.scss``` file (including bulma.sass file).

```scss static
@import "@phila/phila-ui/src/styles/all.scss";
```

**Import individual files:**

Or import the files individually, which allows for some customization/overwriting
```scss static
@import "@phila/phila-ui/src/styles/variables.scss";
@import "your-own-scss-file-here.scss";
@import "node_modules/bulma/bulma.sass";
@import "@phila/phila-ui/src/styles/base.scss";
```