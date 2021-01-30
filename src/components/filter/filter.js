import React, {useState} from 'react';

import {Text, TouchableOpacity, Platform, View} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const buttons = {
  all: 'All',
  favorite: 'Favorite',
};

const Filter = () => {
  const [active, setActive] = useState(0);

  const onPressButton = (index) => {
    setActive(index);
  };

  return (
    <View style={styles.container}>
      {Object.values(buttons).map((button, index) => (
        <TouchableOpacity
          style={[styles.button, active === index && styles.activeButton]}
          onPress={() => onPressButton(index)}
          key={index}>
          <Text style={[styles.text, active === index && styles.activeText]}>
            {Platform.OS === 'android' ? button.toUpperCase() : button}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

Filter.propTypes = {};

export default Filter;
