import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import AppText from './AppText'

import colors from '../config/colors'

const SignOutButton = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <AppText style={{ color: colors.white, fontSize: 15 }}>Sign Out</AppText>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 40,
  },
  button: {
    width: '40%',
    height: 45,
    backgroundColor: colors.signoutButton,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
})

export default SignOutButton
