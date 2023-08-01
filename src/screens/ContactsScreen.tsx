import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext} from 'react'
import { styles } from '../themes/AppTheme'
import { AuthContext } from '../context/AuthContext';

const ContactsScreen = () => {

  const { signIn, authState  } = useContext(AuthContext);

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Contacts Screen</Text>

      {
        authState.isLoggedIn === false ? 
          <Button title='SignIn' onPress={() => signIn()} /> : 
          <Text style={ styles.title }>Your are Logged</Text>
      }
      
    </View>
  )
}

export default ContactsScreen

