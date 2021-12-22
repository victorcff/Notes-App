import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    top: getStatusBarHeight() + 10,
    fontFamily: 'Pacifico_400Regular',
    fontSize: 34,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    width: '70%',
    height: 40,
    marginVertical: 10,
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    borderRadius: 10,
    paddingLeft: 9,
  },
  lastInput: {
    marginBottom: 30,
    marginTop: 10,
    backgroundColor: COLORS.WHITE,
    width: '70%',
    height: 40,
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    borderRadius: 10,
    paddingLeft: 9,
  },
});