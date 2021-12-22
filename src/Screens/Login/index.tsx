import React from 'react';
import { TextInput, View } from 'react-native'
import { LoginButton } from '../../Components/LoginButton';
import { COLORS } from '../../Themes/colors';
import { styles } from './styles';

export function Login(){
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Email'
        placeholderTextColor={COLORS.GRAY}
        style={styles.input}
      />
      <TextInput 
        placeholder='Password'
        placeholderTextColor={COLORS.GRAY}
        style={styles.input}
      />
      <LoginButton 
        title='Login'
      />
      <LoginButton 
        title='Register'
      />
    </View>
  );
}