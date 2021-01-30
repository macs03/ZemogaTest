import React from 'react';
import {View} from 'react-native';
import {Button, Assets} from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import styles from './styles';
import Filter from '../../components/filter/filter';

// this could be a provider??
Assets.loadAssetsGroup('icons', {
  refresh: require('../../assets/icons/refresh.png'),
  favorite: require('../../assets/icons/star.png'),
});

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Filter />
      <Button
        backgroundColor="#30B650"
        label="Go to Post"
        labelStyle={{fontWeight: '600'}}
        style={{marginBottom: 2}}
        enableShadow
        onPress={() => navigation.navigate('Post')}
        iconOnRight={true}
      />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
