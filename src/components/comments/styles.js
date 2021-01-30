import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: colors.darkGray,
    paddingLeft: 20,
    paddingVertical: 3,
    fontWeight: 'bold',
  },
  spacer: {
    backgroundColor: colors.tranparent,
    width: '100%',
    height: 38,
    marginBottom: 30,
  },
  item: {
    borderBottomColor: colors.darkGray,
    borderWidth: 2,
    borderColor: colors.transparent,
    width: '100%',
    textAlign: 'justify',
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
});

export default styles;
