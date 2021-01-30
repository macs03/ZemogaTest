import {StyleSheet, Platform} from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        bottom: 10,
        right: 10,
      },
      ios: {
        width: '100%',
        left: 0,
        bottom: 0,
      },
    }),
    position: 'absolute',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
    ...Platform.select({
      android: {
        height: 50,
        width: 50,
        borderRadius: 25,
      },
      ios: {
        height: 80,
        width: '100%',
      },
    }),
  },
  text: {
    color: colors.white,
  },
  icon: {
    tintColor: colors.white,
  },
});

export default styles;
