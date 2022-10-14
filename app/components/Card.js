import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import AppText from './AppText'

import colors from '../config/colors'

function Details({ icon, title, subTitle }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
        <View style={styles.icon}>{icon}</View>
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  box: {
    backgroundColor: colors.mustard,
    width: '90%',
    height: 100,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 25,
    flexDirection: 'row',
  },
  icon: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: colors.title,
  },
  subTitle: {
    fontSize: 12,
    color: colors.title,
  },
})

export default Details
