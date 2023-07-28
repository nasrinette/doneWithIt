import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from "../components/AppText.js";



export default function Card({title='title', subTitle="subtitle", image=require('../assets/jacket.jpg')}) {
  return (
    <View style={styles.card} >
        <Image      
            style={styles.cardPic} 
            source={image}
        />
        <View style={styles.cardText}>
            <AppText>{title}</AppText>
            <AppText style={styles.subTit}>{subTitle}</AppText>
        </View>
        
    </View>
    
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        marginVertical: 15,
    },
    cardPic:{
        width: '100%',
        height: 250,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    subTit: {
      color: colors.secondary,
      paddingTop: 5,

    },
    cardText: {
        padding: 17,
    }

})