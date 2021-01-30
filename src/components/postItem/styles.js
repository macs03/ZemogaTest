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
  item: {
    paddingHorizontal: 20,
  },
  favoriteIcon: {
    tintColor: colors.gold,
  },
  chevronIcon: {
    tintColor: colors.darkGray,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: colors.blue,
    marginHorizontal: 2,
  },
});

export default styles;
