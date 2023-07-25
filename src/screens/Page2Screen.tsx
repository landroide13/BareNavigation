import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack'

import { styles } from '../themes/AppTheme'

interface Props extends StackScreenProps<any , any>{}

const Page2Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      title: 'About useEffect', 
      headerBackTitle: 'GO Back'
    })
  }, [])


  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Page 2 Screen</Text>

      <Button  title='Go Pag 3' onPress={() => navigation.navigate('Page3')}/>
    </View>
  )
}

export default Page2Screen

