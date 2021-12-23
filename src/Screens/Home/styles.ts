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
    fontFamily: 'Pacifico_400Regular',
    color: COLORS.WHITE,
    fontSize: 38,
    marginTop: getStatusBarHeight() + 10,
  },
  subtitle: {
    color: COLORS.WHITE,
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
  noNotesMessageFirst: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    color: COLORS.WHITE,
    textAlign: 'center',
    lineHeight: 35,
  },
  noNotesMessageSecond: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    color: COLORS.WHITE,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 15,
  },
});