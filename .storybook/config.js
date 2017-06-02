import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '@ox2/css-font-roboto-condensed';
import '@ox2/css-font-roboto';
import '@ox2/ycss';

const req = require.context('../src/', true, /.story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

// Custom storybook options
setOptions({
  name: 'iframe',
});

configure(loadStories, module);
