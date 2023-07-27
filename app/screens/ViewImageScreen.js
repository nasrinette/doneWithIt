import React from 'react';
import {Image, StyleSheet, View, Text } from 'react-native';

import colors from '../config/colors'

import {MaterialCommunityIcons } from '@expo/vector-icons'

function  ViewImageScreen(props) {
    return (
        <View
        style={styles.background}
        >
        <View style={styles.closeIcon}>
            <MaterialCommunityIcons name='close' color='white' size={35} />
        </View>

        <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='trash-can-outline' color='white' size={35}/>
        </View>    
        <Image
            resizeMode='contain'
            style={styles.picture} 
            source={require('../assets/chair.jpg')}
        />
        
       

           
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#000000',
        
    },
    closeIcon: {
        height: 50,
        width: 50,
       
        position: 'absolute',
        top: 40,
        left: 30,
    },
    deleteIcon: {
        width: 50,
        height: 50,
       
        position: 'absolute',
        top: 40,
        right: 30,
    },

    picture: {
        width: "100%",
        height: "100%",
    },
   
})

export default ViewImageScreen;