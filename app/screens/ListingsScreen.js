import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from "../components/Card.js";
import Screen from "../components/Screen.js";
import colors from '../config/colors.js';
import routes from '../navigation/routes.js';

const listings = [
    {
       id: 1, 
       title: 'Red jacket for sale',
       price: 100,
       image: require('../assets/jacket.jpg')
    },
    {
        id: 2, 
        title: 'Couch in great condition',
        price: 1000,
        image: require('../assets/couch.jpg')
     },
     {
        id: 3, 
        title: 'Couch in great condition',
        price: 1000,
        image: require('../assets/couch.jpg')
     }

]



export default function ListingsScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
    
        <FlatList 
        data={listings}
        keyExtractor={item=> item.id.toString()}
        renderItem={({item})=>
            <Card 
            title={item.title}
            subTitle={'$'+ item.price}
            image={item.image}
            onPress={()=> navigation.navigate(routes.LISTING_DETAILS, item)}
            />
        }
        showsVerticalScrollIndicator = {false}
        />
    
    </Screen>
    
  )
}

const styles = StyleSheet.create({
    screen:{
        padding: 15,
        backgroundColor: colors.light,
    }
})