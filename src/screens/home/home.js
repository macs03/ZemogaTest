import PropTypes from 'prop-types';
import {Assets} from 'react-native-ui-lib';
import {View, FlatList, Text, Animated} from 'react-native';
import React, {useEffect, useState, useLayoutEffect} from 'react';

import styles from './styles';
import Animations from './animations';
import colors from '../../themes/colors';
import handleData from '../../lib/utils/handleData';
import Filter from '../../components/filter/filter';
import Refresh from '../../components/refresh/refresh';
import PostItem from '../../components/postItem/postItem';
import DeleteButton from '../../components/deleteButton/deleteButton';

const Home = ({navigation}) => {
  const [items, setItems] = useState([]);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  let spinNumber = new Animated.Value(0);
  const animations = new Animations({spinNumber});

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

  const markAsFavorite = (itemId) => {
    setItems(handleData.markAsFavorite(itemId, items));
  };

  const onTapItem = (index) => {
    setItems(handleData.markAsRead(index, items));
    navigation.navigate('Post', {itemDetail: items[index], markAsFavorite});
  };

  const onFilter = (option) => {
    setOnlyFavorites(option);
  };

  const deleteAll = () => {
    animations.startSpin.start(() => {
      spinNumber.setValue(0);
      setItems(handleData.deleteAll());
    });
  };

  const deleteItem = (index) => {
    refArray[index].closeDrawer();
    setItems(handleData.deleteItem(items[index].id, items));
  };

  const spinContent = spinNumber.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '45deg', '90deg'],
  });

  const scaleContent = spinNumber.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.5, 0],
  });

  return (
    <View style={styles.container}>
      <Filter onFilter={onFilter} />
      {items.length > 0 ? (
        <Animated.View
          style={{
            transform: [
              {rotateX: spinContent},
              {rotateY: spinContent},
              {rotateZ: spinContent},
              {scale: scaleContent},
            ],
          }}>
          <FlatList
            style={styles.flatlist}
            data={
              onlyFavorites === 1
                ? items.filter((item) => item.favorite)
                : items
            }
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <PostItem
                item={{...item, rightButtons}}
                index={index}
                addRef={addRef}
                onSwipeableWillOpen={closeLast}
                navigationTo={onTapItem}
                onDeleteItem={deleteItem}
              />
            )}
            removeClippedSubviews={true}
            initialNumToRender={75}
            windowSize={1}
            ListFooterComponent={<View style={styles.spacer} />}
          />
        </Animated.View>
      ) : (
        <Text>There is nothing</Text>
      )}
      <DeleteButton onDelete={deleteAll} />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
