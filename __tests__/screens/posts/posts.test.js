/**
 * @format
 */

import 'react-native';
import React from 'react';
import Post from '../../../src/screens/post/post';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Post
      navigation={{
        setOptions: () => {},
      }}
      route={{
        params: {
          itemDetail: {
            id: 1,
            title: 'post',
            body: 'post body',
          },
          markAsFavorite: () => {},
        },
      }}
    />,
  );
  expect(tree).toMatchSnapshot();
});
