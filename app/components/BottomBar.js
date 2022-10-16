import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { AntDesign, Feather, Fontisto, Octicons } from '@expo/vector-icons'

import colors from '../config/colors'

const BottomBar = (props) => (
  <View style={styles.bottomBar}>
    <TouchableOpacity>
      <Octicons name='home' size={25} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Fontisto name='world-o' size={25} />
    </TouchableOpacity>
    <TouchableOpacity>
      <AntDesign name='search1' size={25} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Feather name='user' size={25} />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: colors.white,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
})

export default BottomBar
