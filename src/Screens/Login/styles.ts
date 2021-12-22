import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
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
});