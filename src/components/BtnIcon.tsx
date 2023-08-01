import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../themes/AppTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
    name: string
}

const BtnIcon = ({ name }: Props) => {

    const { changeFavoriteIcon } = useContext(AuthContext);


  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(name)}>
      <Icon name={ name } size={60} color={ colors.primary }  />
    </TouchableOpacity>
  )
}

export default BtnIcon

