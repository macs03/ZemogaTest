import React from 'react';
import {View} from 'react-native';
import {Button, Assets, Image} from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import styles from './styles';

Assets.loadAssetsGroup('icons', {
  icon1: require('../../assets/icons/refresh.png'),
});

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
        iconOnRight={true}
      />
      <Image assetName="refresh" />
      <Image source={Assets.icons.icon1} />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
