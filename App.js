import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen.js";
import ViewImageScreen from "./app/screens/ViewImageScreen.js";
import DetailsScreen from "./app/screens/DetailsScreen.js";
import MessagesScreen from "./app/screens/MessagesScreen.js";
import ListingsScreen from "./app/screens/ListingsScreen.js";
import AccountScreen from "./app/screens/AccountScreen.js";
import LoginScreen from "./app/screens/LoginScreen.js";
import RegisterScreen from "./app/screens/RegisterScreen.js";
import ListingEditScreen from "./app/screens/ListingEditScreen.js"

import ImageInput from "./app/components/ImageInput.js";
import AppButton from "./app/components/AppButton.js";
import Card from "./app/components/Card.js";
import ListItem from "./app/components/lists/ListItem.js";
import IconList from "./app/components/IconList.js";
import Screen from "./app/components/Screen.js";

import React, { useState} from 'react';
import InputList from "./app/components/lists/ImageInputList.js";
import ImageInputList from "./app/components/lists/ImageInputList.js";
import ImageInputListForm from "./app/components/forms/ImageInputListForm.js";


export default function App() {

  return (
    <Screen style={styles.container}>
        <ListingEditScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
