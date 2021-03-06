import React from 'react';
import {Assets, Image} from 'react-native-ui-lib';
import {Text, TouchableOpacity, Platform, View} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const DeleteButton = ({onDelete}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onDelete}
        testID="deleteButton">
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
