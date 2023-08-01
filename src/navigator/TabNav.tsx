import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';

import StackNavigator from './StackNavigator';

import { colors, styles } from '../themes/AppTheme';
import TopTabNavigator from './TopTabNavigator';

import Icon from 'react-native-vector-icons/FontAwesome';

const TabNav = () => {
    return Platform.OS === 'ios' ? <TabNavIOS/> : <TabMD/>
}

const TabMd = createMaterialBottomTabNavigator();

const TabMD = () => {
  return (
    <TabMd.Navigator 
        sceneAnimationEnabled={ true }
        barStyle={{ backgroundColor: colors.primary }}
        screenOptions={({ route }) => ({
            tabBarLabelStyle:{
                fontSize: 15,
                //color: 'white'
            },
            tabBarIcon: ({color, focused}) => {
                let iconName: string = '';
                switch(route.name) {
                  case 'Tab1' :
                    iconName =  'home'
                    break;
       
                  case 'Tab2' :
                    iconName =  'users'
                    break;
       
                  case 'StackNav' :
                    iconName =  'slack'
                    break;
                }
                return <Icon name={ iconName } size={25} color={ colors.primary }  />
            }
        })}
    >
      <TabMd.Screen name="Tab1" component={Tab1Screen} />
      <TabMd.Screen name="Tab2"  component={TopTabNavigator} />
      <TabMd.Screen name="StackNav" component={StackNavigator} />
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
                    iconName =  'home'
                    break;
       
                  case 'Tab2' :
                    iconName =  'users'
                    break;
       
                  case 'StackNav' :
                    iconName =  'slack'
                    break;
                }
                return <Icon name={ iconName } size={25} color={ colors.primary }  />
            }
        })}
    >
      <TabIos.Screen name="Tab1"  component={Tab1Screen} />
      <TabIos.Screen name="Tab2"  component={TopTabNavigator} />
      <TabIos.Screen name="StackNav"  component={StackNavigator} />
    </TabIos.Navigator>
  )
}

export default TabNav;

