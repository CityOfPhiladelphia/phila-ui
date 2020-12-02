const path = require('path');

module.exports = {
  componentsRoot: '../src/components', // the folder where CLI will start searching for components.
  components: '**/[A-Z]*.vue', // the glob to define what files should be documented as components (relative to componentRoot)
  outDir: 'content/en', // folder to save components docs in (relative to the current working directry)
  apiOptions: {
    ...require('./webpack.config').resolve, // inform vue-docgen-api of your webpack aliases
    jsx: false, // tell vue-docgen-api that your components are using JSX to avoid conflicts with TypeScript <type> syntax
  },
  // getDocFileName: (componentPath) =>
  //   componentPath.replace(/\.vue$/, '.md'), // specify the name of the input md file
  getDestFile: (file, config) => {
    return path.join(config.outDir + '/components/', file.split('/').pop()).replace(/\.vue$/, '.md'); // specify the name
  },
  // output md file
  templates: {
  // global component template wrapping all others see #templates
    component: require('./templates/component'),
  // events: require('templates/events'),
  // methods: require('templates/methods'),
  // props: require('templates/props'),
  // slots: require('templates/slots'),
  // static template to display as a tag if component is functional
  // functionalTag: '**functional**',
  },
  // docsRepo: 'profile/repo',
  // docsBranch: 'master',
  // docsFolder: '',
  // editLinkLabel: 'Edit on github',
  ignore: [ '**/_*.vue' ],
};