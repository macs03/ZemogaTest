import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';

import styles from './styles';

const Post = ({navigation: {goBack}, route: {params}}) => {
  return <View style={styles.container} />;
};

Post.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Post;
