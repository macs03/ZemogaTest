import App from '../app';

const handleData = {
  getAndHandlePosts: async () => {
    try {
      const response = await App.api.get('posts');
      const data = await response.json();

      return data;
    } catch (error) {
      return error;
    }
  },
};

export default handleData;
