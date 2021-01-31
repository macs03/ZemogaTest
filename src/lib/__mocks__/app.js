export default class App {
  static api = {
    get: jest.fn(),
  };
  static bootMocked() {
    return new Promise((resolve, reject) => {
      return App;
    });
  }
}
