import React from 'react';

import {Text, TouchableOpacity, Platform, View} from 'react-native';
import {Assets, Image} from 'react-native-ui-lib';

import PropTypes from 'prop-types';

import styles from './styles';

const DeleteButton = ({onDelete}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onDelete}>
        {Platform.OS === 'android' ? (
          <Image source={Assets.icons.trash} style={styles.icon} />
        ) : (
          <Text style={styles.text}>Delete All</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
