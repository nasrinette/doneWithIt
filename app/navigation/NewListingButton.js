import { StyleSheet, TouchableHighlight, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from 'react-native';

export default function NewListingButton({onPress}) {
  return (
    <TouchableHighlight underlayColor={colors.medium} style={styles.container} onPress={onPress}>    
      <MaterialCommunityIcons style={{alignSelf: 'center'}} name='plus-circle' color={colors.light} size={35} />  
    </TouchableHighlight>
   
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 80,
        width: 80,
        bottom: 25,
        borderRadius: 40,
        borderWidth: 10,
        borderColor: colors.white,
        alignContent: 'center',
        justifyContent: 'center',
    }
})