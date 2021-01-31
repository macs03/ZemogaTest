/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../../../src/screens/home/home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Home
      navigation={{
        setOptions: () => {},
      }}
      route={{}}
    />,
  );
  expect(tree).toMatchSnapshot();
});
