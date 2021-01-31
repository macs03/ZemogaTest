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
  getUserAndComments: async (userId, postId) => {
    try {
      const userResponse = await App.api.get(`users/${userId}`);
      const userData = await userResponse.json();

      const commentsResponse = await App.api.get(`comments?postId=${postId}`);
      const commentsData = await commentsResponse.json();

      const {name, email, phone, website} = userData;

      return {
        user: {
          name,
          email,
          phone,
          website,
        },
        comments: commentsData,
      };
    } catch (error) {
      return error;
    }
  },
  markAsFavorite: (itemId, stateData) => {
    const handledData = stateData.map((item) => {
      if (itemId === item.id) {
        return {
          ...item,
          favorite: true,
          unread: false,
        };
      }
      return item;
    });

    return handledData;
  },
  deleteItem: (itemId, stateData) => {
    return stateData.filter((item) => item.id !== itemId);
  },
  deleteAll: () => {
    return [];
  },
};

export default handleData;
