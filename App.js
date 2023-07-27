import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
// import WelcomeScreen from "./app/screens/WelcomeScreen.js"
import ViewImageScreen from "./app/screens/ViewImageScreen.js";

export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
