import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  border: {
    paddingHorizontal: 17,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    height: '70%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    marginRight: 10,
    textAlignVertical: 'center',
    textAlign: 'left',
  },
  item: {
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.darkGray,
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
