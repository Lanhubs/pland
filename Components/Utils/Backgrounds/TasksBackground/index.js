import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject]}>
      <View style={styles.header} />
      <View style={styles.mainBody}/>
    </View>
  )
}

export default index
const styles = StyleSheet.create({
    contaniner: {
      backgroundColor: 'rgb(255, 255, 255)',
    },
    header: {
      height: '40%',
    },
    mainBody: {
      flex: 1,
      backgroundColor: 'rgb(0, 0, 0)',
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
    },
  });