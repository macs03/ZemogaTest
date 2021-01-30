import {Animated} from 'react-native';

export default class Animations {
  constructor(component) {
    Object.assign(this, {...component});
    this.bootAnimations();
  }

  bootAnimations() {}
}
