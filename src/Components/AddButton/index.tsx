import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, PressableProps, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from './styles';

type Props = PressableProps & {
  icon?: React.ComponentProps<typeof MaterialIcons>['name']
}

export function AddButton({
  icon,
  ...rest
}: Props){
  return (
    <Pressable 
      style={styles.box}
      {...rest}
    >
      <MaterialIcons 
        name={icon}
        size={50}
        style={styles.icon}
      />
    </Pressable>
  );
}