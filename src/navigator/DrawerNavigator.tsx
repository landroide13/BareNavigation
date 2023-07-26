import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    const { width } = useWindowDimensions();


  return (
    <Drawer.Navigator
        screenOptions={{
            headerShown: false,
            drawerType: width >= 760 ? 'permanent' : 'front', 
        }}
    >
      <Drawer.Screen name="StackNav" options={{ title: "Home"}} component={StackNavigator} />
      <Drawer.Screen name="Settings" options={{ title: "Settings"}} component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
