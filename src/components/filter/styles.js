import {StyleSheet, Platform} from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        height: 80,
        backgroundColor: colors.mainGreen,
      },
      ios: {
        height: 50,
        backgroundColor: colors.gray,
        paddingHorizontal: 20,
      },
    }),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      android: {
        width: '50%',
        height: '100%',
      },
      ios: {
        borderRadius: 2,
        borderColor: colors.mainGreen,
        borderWidth: 1,
        width: '50%',
        height: '60%',
      },
    }),
  },
  text: {
    ...Platform.select({
      android: {
        color: colors.white,
      },
      ios: {
        color: colors.mainGreen,
      },
    }),
  },
  activeButton: {
    ...Platform.select({
      android: {
        borderBottomColor: colors.white,
        borderWidth: 4,
        borderColor: colors.transparent,
      },
      ios: {
        backgroundColor: colors.mainGreen,
      },
    }),
  },
  activeText: {
    ...Platform.select({
      ios: {
        color: colors.white,
      },
    }),
  },
});

export default styles;
