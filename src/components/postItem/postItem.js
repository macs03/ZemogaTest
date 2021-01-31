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
import {Platform, View} from 'react-native';

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
        }}
        testID="navigateToPost"
        style={styles.item}>
        <View>
          <View style={styles.dot} />
        </View>
        {Platform.OS === 'ios' && (
          <View>
            <Image source={Assets.icons.favorite} style={styles.favoriteIcon} />
          </View>
        )}
        <View style={styles.border}>
          <View style={styles.middle}>
            <Text
              style={styles.text}
              text70
              color={Colors.dark10}
              numberOfLines={1}>
              {item.title}
            </Text>
          </View>
        </View>

        {Platform.OS === 'ios' && (
          <View>
            <Image source={Assets.icons.chevron} style={styles.chevronIcon} />
          </View>
        )}
        {Platform.OS === 'android' && (
          <View>
            <Image source={Assets.icons.favorite} style={styles.favoriteIcon} />
          </View>
        )}
      </ListItem>
    </Drawer>
  );
};

PostItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default PostItem;
