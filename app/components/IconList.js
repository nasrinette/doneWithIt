import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconList({
  name,
  size = 35,
  backgroundColor = "#000",
  iconColor = "#fff",
  text
}) {
  return (
    <View style={{flexDirection:'row', padding: 15 }}>
        <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }} >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
    
      {text &&
      <View style={{alignSelf: 'center', padding: 7,}}>
         <Text style={{fontWeight: 'bold'}}>{text}</Text>
      </View> }
    
    </View>
  );
}

export default IconList;
