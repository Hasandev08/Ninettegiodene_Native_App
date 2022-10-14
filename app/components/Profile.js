import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import AppText from './AppText'

import colors from '../config/colors'

const Profile = (props) => (
  <View style={styles.profile}>
    <View style={styles.background}>
      <Image style={styles.image} source={require('../assets/profile.png')} />
    </View>
    <AppText style={styles.name}>Jean</AppText>
  </View>
)

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
    marginTop: 60,
  },
  background: {
    backgroundColor: colors.black,
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginBottom: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})

export default Profile
