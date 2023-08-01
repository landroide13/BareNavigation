import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import StackNavigator from './src/navigator/StackNavigator';
import DrawerNavigator from './src/navigator/DrawerNavigator';
import DraweNavPersonalize from './src/navigator/DraweNavPersonalize';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <DrawerNavigator /> */}
      <AppState>
        <DraweNavPersonalize/>
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App

const styles = StyleSheet.create({})
