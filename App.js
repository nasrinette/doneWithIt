import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen.js";
import ViewImageScreen from "./app/screens/ViewImageScreen.js";
import DetailsScreen from "./app/screens/DetailsScreen.js";
import MessagesScreen from "./app/screens/MessagesScreen.js";
import ListingsScreen from "./app/screens/ListingsScreen.js";
import AccountScreen from "./app/screens/AccountScreen.js";
import LoginScreen from "./app/screens/LoginScreen.js";

import AppButton from "./app/components/AppButton.js";
import Card from "./app/components/Card.js";
import ListItem from "./app/components/lists/ListItem.js";
import IconList from "./app/components/IconList.js";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
