import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  button: {
    width: '60%',
    height: 60,
    backgroundColor: COLORS.ORANGE,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 28,
    color: COLORS.BLACK,
  },
});