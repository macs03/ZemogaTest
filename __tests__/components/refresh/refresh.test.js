/**
 * @format
 */

import 'react-native';
import React from 'react';
import Refresh from '../../../src/components/refresh/refresh';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {on, Interactions, findByTestId} from '../../../src/lib/user-simulator';

it('renders correctly', () => {
  const tree = renderer.create(<Refresh onRefresh={() => {}} />);
  expect(tree).toMatchSnapshot();
});

it('calls markFavorite after tap button', () => {
  const spy = jest.fn();
  const tree = renderer.create(<Refresh onRefresh={spy} />);

  const button = findByTestId(tree, 'onRefresh');

  on(button).simulate(Interactions.PRESS);

  expect(spy).toHaveBeenCalled();
});
