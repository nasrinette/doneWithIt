import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
        style={styles.background}
        source={require('../assets/background.jpg')}
        >
            
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
        <Text>Sell what you don't need!</Text>  
        </View>    

        <View style={styles.loginBtn}>
        </View>
        <View style={styles.registerBtn}>
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
        height: 70,
        backgroundColor: '#fc5c65',
    },
    registerBtn: {
        height: 70,
        backgroundColor: '#72cac3',
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
    }
})

export default WelcomeScreen;