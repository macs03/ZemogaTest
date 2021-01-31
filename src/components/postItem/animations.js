import {Animated, Easing} from 'react-native';

export default class Animations {
  constructor(component) {
    Object.assign(this, {...component});
    this.bootAnimations();
  }

  bootAnimations() {
    const {itemPosition} = this;
    this.deleteItem = Animated.sequence([
      Animated.timing(itemPosition, {
        toValue: 1.5,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(itemPosition, {
        toValue: -1000,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]);
  }
}
