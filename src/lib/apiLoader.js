export default class ApiLoader {
  static boot(App) {
    const baseUrl = 'https://jsonplaceholder.typicode.com/';

    App.api = {
      get: (uri) => {
        return fetch(`${baseUrl}${uri}`, {
          method: 'GET',
        });
      },
      post: (uri) => {
        return fetch(`${baseUrl}${uri}`, {
          method: 'POST',
        });
      },
      delete: (uri) => {
        return fetch(`${baseUrl}${uri}`, {
          method: 'DELETE',
        });
      },
    };
  }
}
