module.exports = {
  title: 'phila-ui',
  theme: {
    color: {
      base: '#444444',
      sidebarBackground: '#DAEDFE',
    },
    fontFamily: {
      base: [
        'Montserrat',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Roboto"',
        '"Oxygen"',
        '"Ubuntu"',
        '"Cantarell"',
        '"Fira Sans"',
        '"Droid Sans"',
        '"Helvetica Neue"',
        'sans-serif',
      ],
      monospace: [ 'Consolas', '"Liberation Mono"', 'Menlo', 'monospace' ],
    },
    
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Installation',
      content: 'docs/installation.md',
      description: '',
    },
    {
      name: 'Contributing',
      content: 'docs/contributing.md',
    },
    {
      name: 'Vue Components',
      components: 'src/components/**/[A-Z]*.vue',
    },
    {
      name: 'Style Guide',
      content: 'docs/style-guide.md',
    },
  ],
  exampleMode: 'expand',
  usageMode: 'expand',
};
