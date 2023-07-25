import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../themes/AppTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RouteStackParams } from '../navigator/StackNavigator';

// interface RoutesParams{
//     id: number,
//     name: string
// }

interface Props extends StackScreenProps<RouteStackParams, 'Person'>{};

const PersonScreen = ({route, navigation}: Props) => {

    //const params = route.params as RoutesParams;

    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.name 
        })
    }, [])

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Person Screen</Text>
    </View>
  )
}

export default PersonScreen

