import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../themes/AppTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<any , any>{}

const Page1Screen = ({ navigation }: Props) => {
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

