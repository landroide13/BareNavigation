import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { styles } from '../themes/AppTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RouteStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RoutesParams{
//     id: number,
//     name: string
// }

interface Props extends StackScreenProps<RouteStackParams, 'Person'>{};

const PersonScreen = ({route, navigation}: Props) => {

    //const params = route.params as RoutesParams;

    const { authState, userName } =  useContext(AuthContext);

    const params = route.params;

    useEffect(() => {
      //authState.userName = params.name
      userName(params.name)
    }, [])

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

