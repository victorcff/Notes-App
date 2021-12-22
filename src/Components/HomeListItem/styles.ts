import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  box: { 
    width: '45%',
    height: 100,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: COLORS.MUSTARD_YELLOW,
  },
  notePreview: {
    marginHorizontal: 15,
    marginTop: 5,
    fontFamily: 'Roboto_400Regular',
    fontSize: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 5,
  },
  title: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 22,
    color: COLORS.WHITE,
    marginTop: 5,
  },
  icon: {
    color: COLORS.BLACK,
    marginLeft: 10,
  },
});