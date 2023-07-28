import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native'
import React from 'react'

export default function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS ==='android'? StatusBar.currentHeight: 0,
        flex: 1,
    
      },
})