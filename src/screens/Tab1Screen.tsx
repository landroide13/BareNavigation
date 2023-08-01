import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles, colors } from '../themes/AppTheme';

import Icon from 'react-native-vector-icons/FontAwesome';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BtnIcon from '../components/BtnIcon';

const Tab1Screen = () => {

  const { top } = useSafeAreaInsets();

    useEffect(() => {
     console.log('Tab1')
    }, [])
    
  return (
    <View style={{ ...styles.globalMargin, marginTop: top }}>
      <Text style={ styles.title }>Tab1 Screen Of Icons</Text>

     
     <Text style={{ flexDirection: 'column', justifyContent:'space-around', alignItems: 'stretch'}}>
        <BtnIcon name="facebook" />
     
        <BtnIcon name="user"  />
     
        <BtnIcon name="cloud" />
    
        <BtnIcon name="transgender" />
     </Text>
      
    </View>
  )
}

export default Tab1Screen

