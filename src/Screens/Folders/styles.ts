import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    marginTop: getStatusBarHeight() + 10,
    color: COLORS.WHITE,
    fontFamily: 'Pacifico_400Regular',
    fontSize: 38,
  },
  subtitle: {
    color: COLORS.GRAY,
    fontSize: 26,
    fontFamily: 'Pacifico_400Regular',
  },
  list: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: COLORS.DARK_GRAY,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 15,
  },
});