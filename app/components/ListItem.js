import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AppText from "../components/AppText.js";
import colors from '../config/colors.js';


export default function ListItem({title='text', subTitle="subtitle", image=require('../assets/mosh.jpg')}) {
  return (
    <View style={styles.list} >
    <Image
        
        style={styles.listPic} 
        source={image}
    />
    <View style={styles.listText}>
        <AppText  style={styles.tit}>{title}</AppText>
        <AppText style={styles.subTit}>{subTitle}</AppText>
    </View>
    
</View>
    
  )
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        padding: 17,
    },
    listPic: {
        width: 60,
        height: 60,
        borderRadius: 100,
        
    },
    listText: {
        margin: 10,
        
        
    },
    tit: {
        fontSize: 16,
    },
    subTit: {
        color: colors.gray,
        fontSize: 14,
        
    }
})