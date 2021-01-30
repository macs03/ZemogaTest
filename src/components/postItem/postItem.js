import React, {useRef} from 'react';

import {
  Colors,
  ListItem,
  Text,
  Avatar,
  AvatarHelper,
  Drawer,
  Button,
} from 'react-native-ui-lib';

import PropTypes from 'prop-types';

import styles from './styles';

const PostItem = ({item, index, addRef, onSwipeableWillOpen, navigationTo}) => {
  return (
    <Drawer
      rightItems={item.rightButtons}
      ref={(ref) => addRef(ref, index)}
      index={index}
      onSwipeableWillOpen={onSwipeableWillOpen}>
      <ListItem
        height={75.8}
        onPress={() => {
          navigationTo();
        }}>
        <ListItem.Part left>
          <Text>*</Text>
        </ListItem.Part>
        <ListItem.Part middle column containerStyle={styles.border}>
          <ListItem.Part containerStyle={styles.middle}>
            <Text
              style={styles.text}
              text70
              color={Colors.dark10}
              numberOfLines={1}>
              {item.title}
            </Text>
          </ListItem.Part>
        </ListItem.Part>
        <ListItem.Part right>
          <Text>></Text>
        </ListItem.Part>
      </ListItem>
    </Drawer>
  );
};

PostItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default PostItem;
