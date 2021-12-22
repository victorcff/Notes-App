import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native'
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string,
}

export function FolderItem({
  title,
  ...rest
}: Props){
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.box}
        {...rest}
      >
        <MaterialCommunityIcons 
          name='folder' 
          size={40}
          style={styles.folderIcon} 
        />
        <Text style={styles.folderTitle}>{title}</Text>
      </TouchableOpacity>
      <Text style={styles.folderInfo}>? notes</Text>
    </View>
  );
}