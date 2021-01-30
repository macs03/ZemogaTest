import {Animated, Easing} from 'react-native';

export default class Animations {
  constructor(component) {
    Object.assign(this, {...component});
    this.bootAnimations();
  }

  bootAnimations() {
    const {iconScale} = this;

    this.startScale = Animated.sequence([
      Animated.timing(iconScale, {
        toValue: 1.5,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(iconScale, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]);
  }
}
