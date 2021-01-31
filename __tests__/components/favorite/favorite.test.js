/**
 * @format
 */

import 'react-native';
import React from 'react';
import Favorite from '../../../src/components/favorite/favorite';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {on, Interactions, findByTestId} from '../../../src/lib/user-simulator';

it('renders correctly', () => {
  const tree = renderer.create(<Favorite onMarkAsFavorite={() => {}} />);
  expect(tree).toMatchSnapshot();
});

it('calls markFavorite after tap button', () => {
  const spy = jest.fn();
  const tree = renderer.create(<Favorite onMarkAsFavorite={spy} />);

  const button = findByTestId(tree, 'markAsFavorite');

  on(button).simulate(Interactions.PRESS);

  expect(spy).toHaveBeenCalled();
});
