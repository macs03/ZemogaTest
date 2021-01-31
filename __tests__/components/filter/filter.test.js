/**
 * @format
 */

import 'react-native';
import React from 'react';
import Filter from '../../../src/components/filter/filter';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {on, Interactions, findByTestId} from '../../../src/lib/user-simulator';

it('renders correctly', () => {
  const tree = renderer.create(<Filter onFilter={() => {}} />);
  expect(tree).toMatchSnapshot();
});

it('calls filtering after tap button', () => {
  const spy = jest.fn();
  const tree = renderer.create(<Filter onFilter={spy} />);

  const button = findByTestId(tree, 'filtering-1');

  on(button).simulate(Interactions.PRESS);

  expect(spy).toHaveBeenCalledWith(1);
});
