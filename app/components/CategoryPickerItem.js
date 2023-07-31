import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import IconList from "./IconList";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity  onPress={onPress}>  
      <View style={styles.container}>
       <IconList 
      name={item.icon}
      size={80}
      backgroundColor={item.backgroundColor}
      />
      <AppText style={styles.text}>{item.label}</AppText> 
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
        paddingHorizontal: 12,
        alignItems: 'center',   
    },
    text: {
        maxWidth: 100,
        textAlign: 'center',
  },
});

export default CategoryPickerItem;
