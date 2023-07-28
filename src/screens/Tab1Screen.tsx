import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Tab1Screen = () => {


    useEffect(() => {
     console.log('Tab1')
    }, [])
    

  return (
    <View>
      <Text>Tab1 Screen</Text>
    </View>
  )
}

export default Tab1Screen

