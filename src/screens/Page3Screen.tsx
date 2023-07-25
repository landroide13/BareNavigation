import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'

import { styles } from '../themes/AppTheme'

interface Props extends StackScreenProps<any , any>{}

const Page3Screen = ({ navigation }: Props) => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Page 3 Screen</Text>

      <Button  title='Go Pag 1' onPress={() => navigation.navigate('Page1')}/>
    </View>
  )
}

export default Page3Screen

