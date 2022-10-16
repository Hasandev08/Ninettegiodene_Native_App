import React from 'react'
import { StyleSheet, View } from 'react-native'

import BottomBar from '../components/BottomBar'
import Card from '../components/Card'
import Profile from '../components/Profile'
import SignOutButton from '../components/SignOutButton'

import { Feather, AntDesign, Entypo } from '@expo/vector-icons'

import colors from '../config/colors'

const AccountScreen = ({ navigation }) => (
  <View style={styles.background}>
    <Profile />
    <Card
      icon={<Feather name='user' size={36} color={colors.title} />}
      title='My Account'
      subTitle='Edit your details, account settings'
    />
    <Card
      icon={<Feather name='shopping-bag' size={36} color={colors.title} />}
      title='Home History'
      subTitle='View history'
    />
    <Card
      icon={<Entypo name='map' size={36} color={colors.title} />}
      title='Area History'
      subTitle='View your area history'
    />
    <Card
      icon={<AntDesign name='hearto' size={36} color={colors.title} />}
      title='My Ads'
      subTitle='See the Home you have added for sale'
    />
    <SignOutButton onPress={() => navigation.navigate('Home')} />
    <BottomBar />
  </View>
)

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
  },
})

export default AccountScreen
