import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../themes/AppTheme';
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  const { authState} =  useContext(AuthContext);

  return (
    <View style={{ ...styles.globalMargin ,marginTop: insets.top + 20 }}>
      <Text style={ styles.title }>Settings Screen</Text>

      <Text>{ JSON.stringify(authState) }</Text>
    </View>
  )
}

export default SettingsScreen

//const styles = StyleSheet.create({})