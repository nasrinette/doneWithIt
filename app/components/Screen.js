import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

export default function Screen({children}) {
  return (
    <SafeAreaView>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
     
})