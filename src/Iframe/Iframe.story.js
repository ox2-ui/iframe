import React from 'react';
import { storiesOf } from '@storybook/react';
import Iframe from './Iframe';

const styles = {
  wrapper: {
    width: '1200px',
    height: '800px',
  },
};

storiesOf('Iframe', module).add('default', () =>
  <div style={styles.wrapper}>
    <Iframe url={'sample/index.html'} />
  </div>,
);
