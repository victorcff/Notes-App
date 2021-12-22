import React from 'react';
import { Text, TextInput, View } from 'react-native'
import { LoginButton } from '../../Components/LoginButton';
import { COLORS } from '../../Themes/colors';
import { styles } from './styles';

export function Register(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register your account</Text>
      <TextInput 
        placeholder='Email'
        placeholderTextColor={COLORS.GRAY}
        style={styles.input}
      />
      <TextInput 
        placeholder='Username'
        placeholderTextColor={COLORS.GRAY}
        style={styles.input}
      />
      <TextInput 
        placeholder='Password'
        placeholderTextColor={COLORS.GRAY}
        style={styles.lastInput}
      />
      <LoginButton 
        title='Register'
      />
    </View>
  );
}