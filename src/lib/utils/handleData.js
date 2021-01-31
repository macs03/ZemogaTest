import App from '../app';
import AsyncStorage from '@react-native-async-storage/async-storage';

const handleData = {
  saveData: async (dataToStored) => {
    try {
      const jsonValue = JSON.stringify(dataToStored);
      await AsyncStorage.setItem('@app_data', jsonValue);
    } catch (error) {
      console.error(error);
    }
  },
  getAndHandlePosts: async (reload = false) => {
    try {
      const storedData = await AsyncStorage.getItem('@app_data');

      if (storedData !== null && !reload) {
        return JSON.parse(storedData);
      }

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

      handleData.saveData(handledData);

      return handledData;
    } catch (error) {
      return [];
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

    handleData.saveData(handledData);

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
      return [];
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

    handleData.saveData(handledData);

    return handledData;
  },
  deleteItem: (itemId, stateData) => {
    const filteredData = stateData.filter((item) => item.id !== itemId);
    handleData.saveData(filteredData);
    return filteredData;
  },
  deleteAll: () => {
    handleData.saveData([]);
    return [];
  },
};

export default handleData;
