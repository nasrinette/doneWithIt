import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/colors'


export default function Button({textBtn='text', onPress, colorBtn=colors.primary}) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colorBtn}]} onPress={onPress}>
            <Text style={styles.buttonText}>{textBtn}</Text>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        paddingVertical: 13,
        backgroundColor: colors.primary,
        borderRadius: 25,

    },
    buttonText: {
        color: colors.white,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 16,

    }

})