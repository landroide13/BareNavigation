import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbusmsScreen from '../screens/AlbusmsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../themes/AppTheme';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {

    const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator 
        style={{
            paddingTop: insets.top
        }}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={({ route }) => ({
            tabBarPressColor: colors.primary,
            tabBarShowIcon: true,
            tabBarStyle:{
                elevation: 0,
                shadowColor: 'transparent'
            },
            tabBarIcon: ({color, focused}) => {
                let iconName: string = '';
                switch(route.name) {
                  case 'Chat' :
                    iconName =  "comments" 
                    break;
       
                  case 'Contacts' :
                    iconName = "phone" 
                    break;
       
                  case 'Albums' :
                    iconName ="book" 
                    break;
                }
                return <Icon name={ iconName } size={25} color={ colors.primary }  />
            }
        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbusmsScreen} />
    </Tab.Navigator>
  )
}

export default TopTabNavigator

const styles = StyleSheet.create({})