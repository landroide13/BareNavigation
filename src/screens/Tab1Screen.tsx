import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles, colors } from '../themes/AppTheme';

import Icon from 'react-native-vector-icons/FontAwesome';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab1Screen = () => {

  const { top } = useSafeAreaInsets();

    useEffect(() => {
     console.log('Tab1')
    }, [])
    
  return (
    <View style={{ ...styles.globalMargin, marginTop: top }}>
      <Text style={ styles.title }>Tab1 Screen Of Icons</Text>

     
     <Text>
        <Icon name="facebook" size={60} color={ colors.primary }  />
     </Text>

     <Text>
        <Icon name="user" size={60} color={ colors.primary } />
     </Text>

     <Text>
        <Icon name="cloud" size={60} color={ colors.primary } />
     </Text>

     <Text>
        <Icon name="transgender" size={60} color={ colors.primary } />
     </Text>
      
    </View>
  )
}

export default Tab1Screen

