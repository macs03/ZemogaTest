import PropTypes from 'prop-types';
import {ScrollView, View, Text} from 'react-native';
import React, {useLayoutEffect, useState, useEffect} from 'react';

import handleData from '../../lib/utils/handleData';
import Comments from '../../components/comments/comments';
import Favorite from '../../components/favorite/favorite';

import styles from './styles';

const Post = ({navigation, route: {params}}) => {
  const [item, setItem] = useState({user: {}, comments: []});

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Favorite onMarkAsFavorite={() => {}} />,
      title: params.title,
    });
  }, [navigation, params]);

  useEffect(() => {
    handleData.getUserAndComments(params.userId, params.id).then((data) => {
      setItem(data);
    });
  }, [params]);

  const {
    user: {name, email, phone, website},
    comments,
  } = item;

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.description}>{params.body}</Text>
        <Text style={styles.title}>User</Text>
        <Text style={styles.description}>{name}</Text>
        <Text style={styles.description}>{email}</Text>
        <Text style={styles.description}>{phone}</Text>
        <Text style={styles.description}>{website}</Text>
        <Comments comments={comments} />
      </View>
    </ScrollView>
  );
};

Post.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Post;
