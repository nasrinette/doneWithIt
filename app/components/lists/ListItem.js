import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
import React from "react";
import AppText from "../AppText.js";
import colors from "../../config/colors.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function ListItem({
  title = "text",
  subTitle = "subtitle",
  onPress,
  image = require("../../assets/mosh.jpg"),
}) {
  return (
    <TouchableHighlight underlayColor={colors.gray} onPress={onPress}>
      <View style={styles.list}>
        <Image style={styles.listPic} source={image} />
        <View style={styles.listText}>
          <AppText numberOfLines={1} style={styles.tit}>{title}</AppText>
          <AppText numberOfLines={2} style={styles.subTit}>{subTitle}</AppText>
        </View>
      <MaterialCommunityIcons 
      name="chevron-right" 
      size={25} 
      color={colors.medium} />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    padding: 17,
    alignItems: 'center'
  },
  listPic: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  listText: {
    margin: 10,
    flex: 1,
  },
  tit: {
    fontSize: 16,
  },
  subTit: {
    color: colors.gray,
    fontSize: 14,
  },

});
