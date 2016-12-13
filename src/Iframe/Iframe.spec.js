/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import Iframe from './Iframe';
import { assert } from 'chai';

describe('Iframe', () => {
  it('should render a <Iframe> element', () => {
    const wrapper = shallow(
      <Iframe />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
