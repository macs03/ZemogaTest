import {Animated, Easing} from 'react-native';

export default class Animations {
  constructor(component) {
    Object.assign(this, {...component});
    this.bootAnimations();
  }

  bootAnimations() {
    const {spinNumber} = this;

    this.startSpin = Animated.timing(spinNumber, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    });
  }
}
