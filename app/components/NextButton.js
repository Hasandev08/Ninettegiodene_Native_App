import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import colors from '../config/colors'

const NextButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <AntDesign name='right' size={20} color={colors.white} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.button,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    marginVertical: 10,
    paddingLeft: 3,
  },
})

export default NextButton
