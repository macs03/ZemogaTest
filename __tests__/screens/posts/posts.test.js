/**
 * @format
 */

import 'react-native';
import React from 'react';
import Post from '../../../src/screens/post/post';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Post navigation={{}} route={{}} />);
  expect(tree).toMatchSnapshot();
});
