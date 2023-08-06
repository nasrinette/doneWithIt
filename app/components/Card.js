import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from "../components/AppText.js";
import { TouchableWithoutFeedback } from 'react-native';



export default function Card({title='title', subTitle="subtitle", image=require('../assets/jacket.jpg'), onPress, borderRadius=20}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.card, {borderRadius: borderRadius}]} >
        <Image      
            style={[styles.cardPic, 
                {borderTopLeftRadius: borderRadius,
                borderTopRightRadius: borderRadius,}]} 
            source={image}
        />
        <View style={styles.cardText}>
            <AppText>{title}</AppText>
            <AppText style={styles.subTit}>{subTitle}</AppText>
        </View>
        
    </View>
    </TouchableWithoutFeedback>
    
    
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        marginVertical: 15,
        // borderRadius: 20,
    },
    cardPic:{
        width: '100%',
        height: 250,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,

    },
    subTit: {
      color: colors.secondary,
      paddingTop: 5,

    },
    cardText: {
        padding: 15,
    }

})