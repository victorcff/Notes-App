import React from 'react';
import { View, Text, FlatList } from 'react-native'
import { AddButton } from '../../Components/AddButton';
import { FolderItem } from '../../Components/FolderItem';
import { SearchBar } from '../../Components/SearchBar';
import { styles } from './styles';

export function Folders(){
  const folders = [
    {
      id: 1,
      title: 'Lists'
    }, 
    {
      id: 2,
      title: 'Work'
    }, 
    {
      id: 3,
      title: 'Ideas'
    }, 
    {
      id: 4,
      title: 'Personal'
    },
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Folders</Text>
      <Text style={styles.subtitle}>{`${folders.length} folders`}</Text>
      <View style={styles.list}>
        <SearchBar
          placeholder='Search for folders...'
        />
        <FlatList 
          data={folders}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <FolderItem 
              title={item.title}
            />
          )}
        />
      </View>
      <View style={styles.addButton}>
        <AddButton 
          icon='add'
        />
      </View>
      
    </View>
  );
}