import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';

import StackNavigator from './StackNavigator';

import { colors, styles } from '../themes/AppTheme';

const TabNav = () => {
    return Platform.OS === 'ios' ? <TabNavIOS/> : <TabMD/>
}

const TabMd = createMaterialBottomTabNavigator();

const TabMD = () => {
  return (
    <TabMd.Navigator 
        sceneAnimationEnabled={ true }
        screenOptions={({ route }) => ({
            tabBarActiveTintColor: colors.primary,
            tabBarLabelStyle:{
                fontSize: 15
            },
            tabBarIcon: ({color, focused}) => {
                let iconName: string = '';
                switch(route.name) {
                  case 'Tab1' :
                    iconName = 'T1'
                    break;
       
                  case 'Tab2' :
                    iconName = 'T2'
                    break;
       
                  case 'StackNav' :
                    iconName = 'ST'
                    break;
                }
                return <Text style={{color}}>{ iconName }</Text>
            }
        })}
    >
      <TabMd.Screen name="Tab1" options={{ title: 'Tab 1' }} component={Tab1Screen} />
      <TabMd.Screen name="Tab2" options={{ title: 'Tab 2' }} component={Tab2Screen} />
      <TabMd.Screen name="StackNav" options={{ title: 'StackNav' }} component={StackNavigator} />
    </TabMd.Navigator>
  );
}

const TabIos = createBottomTabNavigator();

const TabNavIOS = () => {
  return (
    <TabIos.Navigator 
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={({ route }) => ({
            tabBarActiveTintColor: colors.primary,
            tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarLabelStyle:{
                fontSize: 15
            },
            tabBarIcon: ({color, focused, size}) => {
                let iconName: string = '';
                switch(route.name) {
                  case 'Tab1' :
                    iconName = 'T1'
                    break;
       
                  case 'Tab2' :
                    iconName = 'T2'
                    break;
       
                  case 'StackNav' :
                    iconName = 'ST'
                    break;
                }
                return <Text style={{color}}>{ iconName }</Text>
            }
        })}
    >
      <TabIos.Screen name="Tab1" options={{ title: 'Tab 1' }} component={Tab1Screen} />
      <TabIos.Screen name="Tab2" options={{ title: 'Tab 2' }} component={Tab2Screen} />
      <TabIos.Screen name="StackNav" options={{ title: 'StackNav' }} component={StackNavigator} />
    </TabIos.Navigator>
  )
}

export default TabNav;

