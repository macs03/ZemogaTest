import React from 'react';
import {Assets} from 'react-native-ui-lib';
import {View, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Filter from '../../components/filter/filter';
import DeleteButton from '../../components/deleteButton/deleteButton';
import PostItem from '../../components/postItem/postItem';
import colors from '../../themes/colors';

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
    if (lastIndex !== undefined && lastIndex !== index) {
      closeDrawer(lastIndex);
    }
    lastIndex = index;
  };

  const onDeleteItem = (index) => {
    console.log(refArray);
    refArray[index].openRightFull();
  };

  const rightButtons = [
    {
      text: 'Delete',
      icon: Assets.icons.trash,
      background: colors.red,
      onPress: (item) => {
        onDeleteItem(item.index);
      },
    },
  ];

  return (
    <View style={styles.container}>
      <Filter onFilter={() => {}} />
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
            onDeleteItem={() => {
              console.log('deleted');
            }}
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
