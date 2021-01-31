import App from '../app';

const handleData = {
  getAndHandlePosts: async () => {
    try {
      const response = await App.api.get('posts');
      const data = await response.json();

      const handledData = data.map((item, index) => {
        let handleItem;
        if (index < 20) {
          handleItem = {
            ...item,
            favorite: false,
            unread: true,
          };
        } else {
          handleItem = {
            ...item,
            favorite: false,
            unread: false,
          };
        }

        return handleItem;
      });

      return handledData;
    } catch (error) {
      return error;
    }
  },
  markAsRead: (index, stateData) => {
    const handledData = stateData.map((item, itemIndex) => {
      if (itemIndex === index) {
        return {
          ...item,
          unread: false,
        };
      }
      return item;
    });

    return handledData;
  },
};

export default handleData;
