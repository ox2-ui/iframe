import React from 'react';
import { storiesOf } from '@kadira/storybook';
import IframeWrapped from './IframeWrapped';

storiesOf('IframeWrapped', module).add('default', () => (
  <IframeWrapped url={'sample/index.html'} />
));
