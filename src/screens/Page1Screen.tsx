import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useContext} from 'react'
// import { StackScreenProps } from '@react-navigation/stack'
import { colors, styles } from '../themes/AppTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerScreenProps } from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../context/AuthContext'

// interface Props extends StackScreenProps<any , any>{}
interface Props extends DrawerScreenProps<any , any>{}

const Page1Screen = ({ navigation }: Props) => {

  const { authState } =  useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={{ marginLeft: 18 }} onPress={() => navigation.toggleDrawer()}>
          <Icon name="bars" size={25} color={ colors.primary }  />  
       </TouchableOpacity>
      )
    })
  }, [])
  

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Page1 Screen</Text>

      <Button  title='Go Pag 2' onPress={() => navigation.navigate('Page2')}/>

      <Text style={{ ...styles.title, marginVertical:20 }}>Navigation With Argumentos</Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity 
          style={{ ...styles.BigBtn, backgroundColor: '#5856D6'  }} 
          onPress={() => navigation.navigate('Person', {id: 1, name: 'Peter'})}>
          <Icon name="users" size={25} color="white"  />  
          <Text style={ styles.textBtn }>Peter</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{ ...styles.BigBtn, backgroundColor: '#ff9427'  }} 
          onPress={() => navigation.navigate('Person', {id: 2, name: 'Eltro'})}>
          <Icon name="users" size={25} color="white"  />  
          <Text style={ styles.textBtn }>Eltro</Text>
        </TouchableOpacity>
      </View>

     
    </View>
  )
}

export default Page1Screen

