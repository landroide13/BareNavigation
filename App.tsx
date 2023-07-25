import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import StackNavigator from './src/navigator/StackNavigator';
import DrawerNavigator from './src/navigator/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
