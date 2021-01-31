import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {Text, TouchableOpacity, Platform, View} from 'react-native';

import styles from './styles';

const buttons = {
  all: 'All',
  favorite: 'Favorite',
};

const Filter = ({onFilter}) => {
  const [active, setActive] = useState(0);

  const onPressButton = (index) => {
    setActive(index);
    onFilter(index);
  };

  return (
    <View style={styles.container}>
      {Object.values(buttons).map((button, index) => (
        <TouchableOpacity
          style={[styles.button, active === index && styles.activeButton]}
          onPress={() => onPressButton(index)}
          key={index}
          testID={`filtering-${index}`}>
          <Text style={[styles.text, active === index && styles.activeText]}>
            {Platform.OS === 'android' ? button.toUpperCase() : button}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
