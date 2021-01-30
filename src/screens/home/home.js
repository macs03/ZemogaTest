import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Home = ({navigation}) => {
  return <View style={styles.container} />;
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
