/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import IframeWrapped from './IframeWrapped';

it('renders correctly', () => {
  const wrapper = mount(
    <IframeWrapped url={'sample/index.html'} />
  );

  expect(wrapper).toMatchSnapshot();
});
