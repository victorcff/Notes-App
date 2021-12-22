import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import { styles } from './styles';

type touchableOpacityProps = TouchableOpacityProps & {
  title: string
}

export function LoginButton({
  title,
  ...rest
}: touchableOpacityProps){

  return (
    <TouchableOpacity 
      style={styles.button}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}