import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  searchBar: {
    marginVertical: 10,
    width: '80%',
    height: 40,
    borderRadius: 15,
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    height: '100%',
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchIcon: {
    color: COLORS.DARK_GRAY,
    marginHorizontal: 10,
  },
  searchInput: {
    fontSize: 18,
    fontFamily: 'Roboto_400Regular',
  },
  clearIcon: {
    marginTop: 4,
    marginRight: 8,
  },
});