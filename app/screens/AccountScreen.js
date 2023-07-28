import { StyleSheet, Text, FlatList, View } from 'react-native'
import React from 'react'
import ListItem from "../components/ListItem.js";
import IconList from "../components/IconList.js";
import colors from '../config/colors.js';
import ListItemSeparator from '../components/ListItemSeparator.js'

const listInfo = [
    {
      id: 1,
      text: "My Listings",
      backgroundColor: colors.primary,
      name: "format-list-bulleted"
    },
    {
      id: 2,
      text: "My Messages",
      backgroundColor: colors.secondary,
      name: "email"
    },
  ];

export default function AccountScreen() {

  return (
  
    <View style={styles.container}>

        <View style={styles.lists}>
            <ListItem title='Mosh Hamedani' subTitle="programmingwithmosh@gmail.com" image={require('../assets/mosh.jpg')} />
        </View>

        <FlatList
        style={{marginTop: 40, flexGrow:0}}
        data={listInfo}
        keyExtractor={(list) => list.id.toString()}
        renderItem={({ item }) => (
            <View style={{backgroundColor:'white'}}>
            <IconList 
            name={item.name}
            backgroundColor = {item.backgroundColor}
            text={item.text} />
            </View>
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />

        <View style={styles.lists}>
            <IconList 
            name="logout"
            size = {35}
            backgroundColor = '#ffe66d'
            text="Log Out" />
        </View>
    </View>
   
   )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        flex: 1
    },
    lists: {
        backgroundColor: colors.white,
        marginTop: 40,

    }
})