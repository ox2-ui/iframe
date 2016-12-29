/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Iframe from './Iframe';

it('renders correctly', () => {
  const wrapper = mount(
    <Iframe url={'sample/index.html'} />
  );

  expect(wrapper).toMatchSnapshot();
});
