import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    justifyContent: 'flex-start',
  },
  title: {
    paddingLeft: 20,
    paddingVertical: 6,
    fontWeight: 'bold',
    width: '100%',
  },
  description: {
    width: '100%',
    textAlign: 'justify',
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
});

export default styles;
