import React, { useState, useEffect } from 'react';
import { Button, Image, View, StyleSheet, Touchable, Alert } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from 'react-native';


import * as ImagePicker from 'expo-image-picker';


export default function ImageInput({imageUri, onChangeImage}) {
  const handlePress = () =>{
    if(!imageUri) pickImage();
    else Alert.alert('Delete', 'Are you sure you want to delete this image?',[
    {text: 'Yes', onPress: () => onChangeImage(null)},
    {text:'No' }
    ] )
  }
  const pickImage = async () => {
    try{
        const result = await ImagePicker.launchImageLibraryAsync({mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.5,});

        if(!result.canceled){
          onChangeImage(result.assets[0].uri)
        }
    } catch (error) {
      console.log('error with selection image', error)
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress} >
        <View style={styles.container}>
          {!imageUri&&
          <MaterialCommunityIcons name='camera' color={colors.medium} size={40} />}
          {imageUri&&         
          <Image style={styles.image} source={{ uri: imageUri }} />
          }
        </View>
        </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.light,
    height: 100,
    width: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center' ,
    overflow: 'hidden',
  },
  image: {
    height: 100,
    width: 100,
  }
})