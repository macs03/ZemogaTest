import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainGreen,
  },
  lightText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  darkText: {
    fontSize: 20,
    marginBottom: 10,
    color: colors.white,
  },
});

export default styles;
