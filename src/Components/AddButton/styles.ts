import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.WHITE,
    height: 70,
    width: 70,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: COLORS.ORANGE,
  },
});