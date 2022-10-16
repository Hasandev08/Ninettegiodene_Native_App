import React from 'react'
import { ImageBackground, Image, StyleSheet } from 'react-native'
import AppText from '../components/AppText'

import NextButton from '../components/NextButton'

import colors from '../config/colors'

const WelcomeScreen = ({ navigation }) => (
  <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
    <Image style={styles.icon} source={require('../assets/logo.png')} />
    <AppText style={styles.tagline}>Let's find your{'\n'}dream house!</AppText>
    <NextButton onPress={() => navigation.navigate('Signup')} />
  </ImageBackground>
)

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: 230,
    height: 230,
    marginTop: 40,
  },
  tagline: {
    color: colors.dark,
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 310,
  },
})

export default WelcomeScreen
