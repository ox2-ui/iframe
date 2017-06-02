import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

const req = require.context('../src/', true, /.story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

// Custom storybook options
setOptions({
  name: 'iframe',
});

configure(loadStories, module);
