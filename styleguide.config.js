const path = require('path');
const glob = require('glob');

module.exports = {
  title: '@ox2/iframe',
  template: './docs/src/template.html',
  serverPort: 55002,
  styleguideDir: './docs',
  webpackConfig: {
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
  sections: [
    {
      name: 'Get Started',
      sections: [
        {
          name: 'About',
          content: './docs/src/introduction.md',
        },
        {
          name: 'Installation',
          content: './docs/src/installation.md',
        },
        {
          name: 'Usage',
          content: './docs/src/usage.md',
        },
      ],
    },
    {
      name: 'Components',
      components() {
        return glob
          .sync(path.resolve(__dirname, 'src/**/*.js'))
          .filter(module => {
            return /\/[A-Z]\w*\.js$/.test(module);
          });
      },
    },
    {
      name: 'History',
      content: './CHANGELOG.md',
    },
    {
      name: 'License',
      content: './LICENSE',
    },
  ],
  getExampleFilename: componentpath =>
    componentpath.replace(/\.js$/, '.examples.md'),
  getComponentPathLine: componentPath => {
    const name = path.basename(componentPath, '.js');
    const dir = path.dirname(
      componentPath.replace(/src\//i, '')
    );
    return `import ${name} from '@ox2/iframe/${dir}';`;
  },
};
