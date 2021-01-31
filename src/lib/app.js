import AssetsLoader from './assetsLoader';
import ApiLoader from './apiLoader';

const globalLoaders = [AssetsLoader, ApiLoader];

export default class App {
  static api = undefined;

  static boot() {
    return Promise.all(globalLoaders.map((s) => s.boot(App)))
      .then(() => {
        console.info('App is ready!!!');
      })
      .catch((err) => console.error('Error while booting the app', err));
  }
}
