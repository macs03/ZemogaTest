import React from 'react';

import {Animated, TouchableOpacity} from 'react-native';
import {Assets, Image} from 'react-native-ui-lib';

import PropTypes from 'prop-types';

import styles from './styles';
import Animations from './animations';

const Refresh = () => {
  let spinNumber = new Animated.Value(0);
  const animations = new Animations({spinNumber});

  const spin = spinNumber.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '360deg', '720deg'],
  });

  const onPressButton = () => {
    animations.startSpin.start(() => {
      spinNumber.setValue(0);
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressButton}>
      <Animated.View style={{transform: [{rotate: spin}]}}>
        <Image source={Assets.icons.refresh} style={styles.icon} />
      </Animated.View>
    </TouchableOpacity>
  );
};

Refresh.propTypes = {};

export default Refresh;
