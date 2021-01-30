import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import styles from './styles';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        backgroundColor="#30B650"
        label="Go to Post"
        labelStyle={{fontWeight: '600'}}
        style={{marginBottom: 2}}
        enableShadow
        onPress={() => navigation.navigate('Post')}
      />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
