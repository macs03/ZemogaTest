/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Assets} from 'react-native-ui-lib';
import PostItem from '../../../src/components/postItem/postItem';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {on, Interactions, findByTestId} from '../../../src/lib/user-simulator';

const item = {
  userId: 1,
  id: 1,
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body:
    'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  rightItems: {
    text: 'Delete',
    icon: Assets.icons.trash,
    background: '#fff',
    onPress: () => {},
  },
};

it('renders correctly', () => {
  const tree = renderer.create(
    <PostItem
      item={item}
      index={0}
      addRef={() => {}}
      onSwipeableWillOpen={() => {}}
      navigationTo={() => {}}
    />,
  );
  expect(tree).toMatchSnapshot();
});

it('calls navigation after tap an Item', () => {
  const spy = jest.fn();
  const tree = renderer.create(
    <PostItem
      item={item}
      index={0}
      addRef={() => {}}
      onSwipeableWillOpen={() => {}}
      navigationTo={spy}
    />,
  );

  const button = findByTestId(tree, 'navigateToPost');

  on(button).simulate(Interactions.PRESS);

  expect(spy).toHaveBeenCalled();
});
