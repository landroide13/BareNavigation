import { Button, Text, View } from 'react-native'
import React, { useContext} from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors, styles } from '../themes/AppTheme'
import { AuthContext } from '../context/AuthContext'

import Icon from 'react-native-vector-icons/FontAwesome';

const AlbusmsScreen = () => {

  const insets = useSafeAreaInsets();

  const { authState, logout } =  useContext(AuthContext);

  return (
    <View style={{ ...styles.globalMargin ,marginTop: insets.top + 20 }}>
      <Text style={ styles.title }>Albums Screen</Text>

      <Text>{ JSON.stringify(authState) }</Text>

          {

              authState.isLoggedIn ? 
              <Button title='Logout' onPress={() => logout()} /> : 
              <Text style={ styles.title }>Your are Logged Out</Text>
          }

    </View>
  )
}

export default AlbusmsScreen

