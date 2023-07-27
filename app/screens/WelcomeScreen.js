import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text } from 'react-native';
import Button from "../components/Button.js";
import colors from '../config/colors'
import AppText from "../components/AppText.js";


function WelcomeScreen(props) {
    return (
        <ImageBackground
        style={styles.background}
        source={require('../assets/background.jpg')}
        >
            
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
        <AppText>Sell what you don't need!</AppText>  
        </View>    

        <View style={styles.loginBtn}>
        <Button colorBtn={colors.primary} textBtn='Login' />
        </View>

        <View style={styles.registerBtn}>
        <Button colorBtn={colors.secondary} textBtn='Register' />
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end", //default is flex direction column, it means y axis

    },
    loginBtn: {
        marginBottom: 20,
    },
    registerBtn: {
        marginBottom: 20,
    },
    logo: {
        height: 100,
        width: 100,
        bottom: 10,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignSelf: 'center',
        alignItems: 'center',
    },

})

export default WelcomeScreen;