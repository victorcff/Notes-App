import { SimpleLineIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  id: number;
  icon?: React.ComponentProps<typeof SimpleLineIcons>['name'];
  note: string;
}

export function HomeListItem({
  title,
  id,
  note,
  icon,
}: Props){
  const notePreview = note.slice(0, 50) + '...'
  
  return (
    <TouchableOpacity style={styles.box}>
      <Text style={styles.notePreview}>
        {note.length > 50 ? notePreview : note}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.title}>
          {title}
        </Text>
        <SimpleLineIcons name={icon} size={20} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
}
