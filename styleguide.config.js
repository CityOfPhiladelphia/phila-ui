var path = require('path');

module.exports = {
  title: 'phila-ui',
  jssThemedEditor: false,
  require: [    
    path.join(__dirname, './styleguide/phila-theme.css'),
  ],
  theme: {
    color: {
      base: '#444444',
      link: '#25cef7',
      linkHover: '#f3c613',
      sidebarBackground: '#0f4d90',
      baseBackground: '#fff',
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
  styles: function(theme) {
    return {
      StyleGuide: {
        '@global .token.tag': {
          fontSize: 'inherit',
          height: 'auto',
          lineHeight: 'initial',
          padding: 'initial',
          margin: 'initial',
          display: 'initial',
          pointerEvents: 'none',
          whiteSpace: 'pre-wrap',
        },
      },
      Logo: {
        logo: {          
          backgroundImage: 'url(./styleguide/phila-ui.png)',
          backgroundSize: "84px 25px",
          backgroundRepeat: 'no-repeat',
          fontSize: 0,
          width: '84px',
          height: '25px',
        },
      },
    };
  },
  template: {
    title: 'phila-ui',
    favicon: 'https://standards.phila.gov/img/favicon.png',
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
