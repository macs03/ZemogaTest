import React from 'react';
import PropTypes from 'prop-types';
import {Assets, Image} from 'react-native-ui-lib';
import {Animated, TouchableOpacity} from 'react-native';

import styles from './styles';
import Animations from './animations';

const Refresh = ({onRefresh}) => {
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
    onRefresh();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPressButton}
      testID="onRefresh">
      <Animated.View style={{transform: [{rotate: spin}]}}>
        <Image source={Assets.icons.refresh} style={styles.icon} />
      </Animated.View>
    </TouchableOpacity>
  );
};

Refresh.propTypes = {
  onRefresh: PropTypes.func.isRequired,
};

export default Refresh;
