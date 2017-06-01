import React from 'react';
import { storiesOf } from '@storybook/react';
import IframeWrapped from './IframeWrapped';

storiesOf('IframeWrapped', module).add('default', () => (
  <IframeWrapped url={'sample/index.html'} />
));
