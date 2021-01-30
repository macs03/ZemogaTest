import React from 'react';
import {View, FlatList} from 'react-native';
import {Button, Assets} from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import styles from './styles';
import Filter from '../../components/filter/filter';
import DeleteButton from '../../components/deleteButton/deleteButton';
import PostItem from '../../components/postItem/postItem';
import colors from '../../themes/colors';

// this could be a provider??
Assets.loadAssetsGroup('icons', {
  refresh: require('../../assets/icons/refresh.png'),
  favorite: require('../../assets/icons/star.png'),
  trash: require('../../assets/icons/delete.png'),
});

const items = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 2,
    id: 2,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 3,
    id: 3,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
];

const rightButtons = [
  {
    text: 'Delete',
    icon: Assets.icons.trash,
    background: colors.red,
    onPress: (item) => console.log(item.index),
  },
];

const Home = ({navigation}) => {
  const refArray = [];
  let lastIndex;

  const addRef = (ref, index) => {
    refArray[index] = ref;
  };

  const closeDrawer = (index) => {
    refArray[index].closeDrawer();
  };

  const closeLast = ({index}) => {
    console.log(index);
    if (lastIndex !== undefined && lastIndex !== index) {
      closeDrawer(lastIndex);
    }
    lastIndex = index;
  };

  return (
    <View style={styles.container}>
      <Filter />
      <FlatList
        style={styles.flatlist}
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <PostItem
            item={{...item, rightButtons}}
            index={index}
            addRef={addRef}
            onSwipeableWillOpen={closeLast}
            navigationTo={() => navigation.navigate('Post')}
          />
        )}
        removeClippedSubviews={true}
        initialNumToRender={5}
        windowSize={1}
        ListFooterComponent={<View style={styles.spacer} />}
      />
      <DeleteButton onDelete={() => {}} />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
