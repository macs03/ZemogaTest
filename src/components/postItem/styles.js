import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.darkGray,
    paddingHorizontal: 17,
    width: '100%',
  },
  middle: {
    marginBottom: 3,
  },
  text: {
    flex: 1,
    marginRight: 10,
  },
});

export default styles;
