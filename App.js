import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen.js"
import ViewImageScreen from "./app/screens/ViewImageScreen.js";
import DetailsScreen from "./app/screens/DetailsScreen.js";

import Button from "./app/components/Button.js";
import Card from "./app/components/Card.js";
import ListItem from "./app/components/ListItem.js";
import { SafeAreaView } from "react-native";

export default function App() {

  return(<SafeAreaView style={styles.container}>
    <ViewImageScreen/>
    </SafeAreaView>) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
