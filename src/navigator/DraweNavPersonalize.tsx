import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { styles, colors } from '../themes/AppTheme';
import TabNav from './TabNav';

import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

const DraweNavPersonalize = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            drawerContent={(props) => <InternalMenu {...props} />}
        >
          {/* <Drawer.Screen name="StackNav" component={StackNavigator} /> */}
          <Drawer.Screen name="Tabs" component={TabNav} />
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
                    onPress={() => navigation.navigate('Tabs')}
                    >
                    <View style={ styles.drawerItemContainer }>
                        <Text><Icon name="outdent" size={25} color='black'  /></Text>    
                        <Text style={{ ...styles.menuText, marginLeft: 8 }}>Tabs</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={ styles.menuBtn }
                    onPress={() => navigation.navigate('Settings')}
                    >
                    <View style={ styles.drawerItemContainer }>
                        <Text><Icon name="sliders" size={25} color='black'  /></Text>     
                        <Text style={{ ...styles.menuText, marginLeft: 8 }}>Settings</Text>
                    </View>    
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}

export default DraweNavPersonalize
