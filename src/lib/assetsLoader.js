import {Assets} from 'react-native-ui-lib';

export default class AssetsLoader {
  static boot() {
    Assets.loadAssetsGroup('icons', {
      refresh: require('../assets/icons/refresh.png'),
      favorite: require('../assets/icons/star.png'),
      trash: require('../assets/icons/delete.png'),
      chevron: require('../assets/icons/chevronRight.png'),
    });
  }
}
