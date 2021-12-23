import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Folders } from './src/Screens/Folders';
import { Home } from './src/Screens/Home';
import { Login } from './src/Screens/Login';
import { NoteEditor } from './src/Screens/NoteEditor';
import { Register } from './src/Screens/Register';

export type MainStackParamList = {
  Login: undefined
  Home: undefined
  Register: undefined
  Folders: undefined
  NoteEditor: undefined
}

const mainStack = createNativeStackNavigator<MainStackParamList>()

export function Routes(){
  return (
    <mainStack.Navigator initialRouteName='Home'>
      <mainStack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <mainStack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <mainStack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }}
      />
      <mainStack.Screen
        name='Folders'
        component={Folders}
        options={{ headerShown: false }}
      />
      <mainStack.Screen
        name='NoteEditor'
        component={NoteEditor}
        options={{ headerShown: false }}
      />
    </mainStack.Navigator>
  );
}