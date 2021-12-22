import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  box: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  folderIcon: {
    color: COLORS.MUSTARD_YELLOW,
    marginRight: 5,
  },
  folderTitle: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 24,
    color: COLORS.WHITE,
    marginLeft: 5,
  },
  folderInfo: {
    color: COLORS.LIGHT_ORANGE,
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
  },
});