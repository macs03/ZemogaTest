/**
 * @format
 */

import 'react-native';
import React from 'react';
import DeleteButton from '../../../src/components/deleteButton/deleteButton';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {on, Interactions, findByTestId} from '../../../src/lib/user-simulator';

it('renders correctly', () => {
  const tree = renderer.create(<DeleteButton onDelete={() => {}} />);
  expect(tree).toMatchSnapshot();
});

it('calls onDelete after tap button', () => {
  const spy = jest.fn();
  const tree = renderer.create(<DeleteButton onDelete={spy} />);

  const button = findByTestId(tree, 'deleteButton');

  on(button).simulate(Interactions.PRESS);

  expect(spy).toHaveBeenCalled();
});
