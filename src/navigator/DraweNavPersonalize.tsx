import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { styles } from '../themes/AppTheme'

const Drawer = createDrawerNavigator();

const DraweNavPersonalize = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            drawerContent={(props) => <InternalMenu {...props} />}
        >
          <Drawer.Screen name="StackNav" component={StackNavigator} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      )
}

const InternalMenu = ({ navigation } : DrawerContentComponentProps ) =>{
    return (
        <DrawerContentScrollView>
            <View style={ styles.avatarContainer }>
                <Image source={ {
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
                } }
                    style={ styles.avatar }
                />
            </View>

            <View style={ styles.menuContainer }>
                <TouchableOpacity 
                    style={ styles.menuBtn }
                    onPress={() => navigation.navigate('StackNav')}
                    >
                    <Text style={ styles.menuText }>Navegation</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={ styles.menuBtn }
                    onPress={() => navigation.navigate('Settings')}
                    >
                    <Text style={ styles.menuText }>Settings</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}

export default DraweNavPersonalize
