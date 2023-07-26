import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect} from 'react'
// import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../themes/AppTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerScreenProps } from '@react-navigation/drawer'

// interface Props extends StackScreenProps<any , any>{}
interface Props extends DrawerScreenProps<any , any>{}

const Page1Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title='Toggle'
          onPress={() => navigation.toggleDrawer()}
        />
    )
    })
  }, [])
  

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Page1 Screen</Text>

      <Button  title='Go Pag 2' onPress={() => navigation.navigate('Page2')}/>

      <Text style={ styles.title }>Navigation With Argumentos</Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity 
          style={{ ...styles.BigBtn, backgroundColor: '#5856D6'  }} 
          onPress={() => navigation.navigate('Person', {id: 1, name: 'Peter'})}>
          <Text style={ styles.textBtn }>Peter</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{ ...styles.BigBtn, backgroundColor: '#ff9427'  }} 
          onPress={() => navigation.navigate('Person', {id: 2, name: 'Eltro'})}>
          <Text style={ styles.textBtn }>Eltro</Text>
        </TouchableOpacity>
      </View>

     
    </View>
  )
}

export default Page1Screen

