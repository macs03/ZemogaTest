import React from 'react';

import {Text, View, FlatList} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const DeleteButton = ({comments}) => {
  const renderItem = ({item}) => {
    return <Text style={styles.item}>{item}</Text>;
  };

  return (
    <FlatList
      data={comments}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      removeClippedSubviews={true}
      initialNumToRender={5}
      windowSize={1}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text>COMMENTS</Text>
        </View>
      }
      ListFooterComponent={<View style={styles.spacer} />}
      scrollEnabled={false}
    />
  );
};

DeleteButton.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DeleteButton;
