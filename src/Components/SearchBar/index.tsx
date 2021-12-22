import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles';

type Props = {
  placeholder: string;
}

export function SearchBar({
  placeholder
}: Props){
  return (
    <View style={styles.searchBar}>
      <View style={styles.searchContainer}>
        <FontAwesome 
          name='search'
          size={20}
          style={styles.searchIcon}
        />
        <TextInput 
          placeholder={placeholder}
          style={styles.searchInput}
        />
      </View>
      <TouchableOpacity>
        <MaterialIcons 
          name='clear'
          size={24}
          style={styles.clearIcon}
        />
      </TouchableOpacity>
    </View>
  );
}