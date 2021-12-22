import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Routes } from './routes';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { 
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import { store } from './src/Reducer/store';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Pacifico_400Regular,
  })

  if( !fontsLoaded ) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          translucent={true}
          barStyle='light-content'
        />
        <Routes />
      </NavigationContainer>
    </Provider>
    
  );
}

