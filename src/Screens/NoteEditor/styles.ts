import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    marginTop: getStatusBarHeight() + 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    color: COLORS.WHITE,
  },
  titleEditor: {
    width: '90%',
    height: 50,
    marginLeft: 5,
    fontFamily: 'Roboto_400Regular',
    fontSize: 25,
    color: COLORS.WHITE,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.GRAY,
    marginVertical: 5,
  },
  noteEditor: {
    marginTop: 5,
    width: '100%',
    height: '80%',
    marginLeft: 10,
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    color: COLORS.WHITE,
  },
});