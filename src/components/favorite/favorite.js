import PropTypes from 'prop-types';
import React, {useRef} from 'react';
import {Assets, Image} from 'react-native-ui-lib';
import {Animated, TouchableOpacity} from 'react-native';

import styles from './styles';
import Animations from './animations';

const Favorite = ({onMarkAsFavorite}) => {
  const iconScale = useRef(new Animated.Value(1)).current;

  const animations = new Animations({iconScale});

  const onPressButton = () => {
    animations.startScale.start(() => {
      animations.startScale.reset();
    });
    onMarkAsFavorite();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPressButton}
      testID="markAsFavorite">
      <Animated.View style={{transform: [{scale: iconScale}]}}>
        <Image source={Assets.icons.favorite} style={styles.icon} />
      </Animated.View>
    </TouchableOpacity>
  );
};

Favorite.propTypes = {
  onMarkAsFavorite: PropTypes.func.isRequired,
};

export default Favorite;
