import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import BottomBar from '../components/BottomBar'
import Details from '../components/Details'
import SignOutButton from '../components/SignOutButton'

import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import colors from '../config/colors'

function AccountScreen(props) {
  return (
    <View style={styles.background}>
      <Details
        icon={<Feather name='user' size={36} color={colors.title} />}
        title='My Account'
        subTitle='Edit your details, account settings'
      />
      <Details
        icon={<Feather name='shopping-bag' size={36} color={colors.title} />}
        title='Home History'
        subTitle='View history'
      />
      <Details
        icon={<Feather name='user' size={36} color={colors.title} />}
        title='Area History'
        subTitle='View your area history'
      />
      <Details
        icon={<AntDesign name='hearto' size={36} color={colors.title} />}
        title='My Ads'
        subTitle='See the Home you have added for sale'
      />
      <SignOutButton />
      <BottomBar />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
    // justifyContent: "flex-end",
  },
})

export default AccountScreen
