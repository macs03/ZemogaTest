import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';

import styles from './styles';

const Modal = ({navigation: {goBack}, route: {params}}) => {
  return <View style={styles.container} />;
};

Modal.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Modal;
