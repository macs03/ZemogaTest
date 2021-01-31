import PropTypes from 'prop-types';
import {Assets} from 'react-native-ui-lib';
import {View, FlatList, Text} from 'react-native';
import React, {useEffect, useState, useLayoutEffect} from 'react';

import styles from './styles';
import colors from '../../themes/colors';
import handleData from '../../lib/utils/handleData';
import Filter from '../../components/filter/filter';
import Refresh from '../../components/refresh/refresh';
import PostItem from '../../components/postItem/postItem';
import DeleteButton from '../../components/deleteButton/deleteButton';

const Home = ({navigation}) => {
  const [items, setItems] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Refresh
          onRefresh={() => {
            handleData.getAndHandlePosts().then((data) => {
              setItems(data);
            });
          }}
        />
      ),
    });
  }, [navigation]);

  const refArray = [];
  let lastIndex;

  useEffect(() => {
    handleData.getAndHandlePosts().then((data) => {
      setItems(data);
    });
  }, []);

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

  const onTapItem = (index) => {
    console.log(index);
    setItems(handleData.markAsRead(index, items));
    navigation.navigate('Post');
  };

  return (
    <View style={styles.container}>
      <Filter onFilter={() => {}} />
      {items.length > 0 ? (
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
              navigationTo={onTapItem}
              onDeleteItem={() => {
                console.log('deleted');
              }}
            />
          )}
          removeClippedSubviews={true}
          initialNumToRender={75}
          windowSize={1}
          ListFooterComponent={<View style={styles.spacer} />}
        />
      ) : (
        <Text>Loading...</Text>
      )}
      <DeleteButton onDelete={() => {}} />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
