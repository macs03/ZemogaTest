import PropTypes from 'prop-types';
import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Comments from '../../components/comments/comments';

import styles from './styles';

const Post = ({navigation: {goBack}, route: {params}}) => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text style={styles.title}>User</Text>
        <Text style={styles.description}>Miguel</Text>
        <Text style={styles.description}>miguelcarde.3@gmail.com</Text>
        <Text style={styles.description}>3182972044</Text>
        <Text style={styles.description}>miguelcarde.com</Text>
        <Comments
          comments={[
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          ]}
        />
      </View>
    </ScrollView>
  );
};

Post.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Post;
