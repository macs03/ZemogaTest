import React from 'react';

import {
  Colors,
  ListItem,
  Text,
  Assets,
  Image,
  Drawer,
} from 'react-native-ui-lib';

import PropTypes from 'prop-types';

import styles from './styles';
import {Platform, View} from 'react-native';

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
        }}
        style={styles.item}>
        <ListItem.Part left>
          <View style={styles.dot} />
        </ListItem.Part>
        {Platform.OS === 'ios' && (
          <ListItem.Part left>
            <Image source={Assets.icons.favorite} style={styles.favoriteIcon} />
          </ListItem.Part>
        )}
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

        {Platform.OS === 'ios' && (
          <ListItem.Part right>
            <Image source={Assets.icons.chevron} style={styles.chevronIcon} />
          </ListItem.Part>
        )}
        {Platform.OS === 'android' && (
          <ListItem.Part right>
            <Image source={Assets.icons.favorite} style={styles.favoriteIcon} />
          </ListItem.Part>
        )}
      </ListItem>
    </Drawer>
  );
};

PostItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default PostItem;
