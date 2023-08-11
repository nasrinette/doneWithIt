import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from "../components/Card.js";
import Screen from "../components/Screen.js";
import colors from '../config/colors.js';
import routes from '../navigation/routes.js';
import listingsApi from '../api/listings.js'
import AppText from '../components/AppText.js';
import AppButton from '../components/AppButton.js';
import useApi from '../hooks/useApi.js'

import ActivityIndicator from '../components/Activityİndicator.js'

export default function ListingsScreen({navigation}) {
    const {data: listings, error, loading, request: loadListings} = useApi(listingsApi.getListings) //useApi returns an object
    
    useEffect(()=>{
        loadListings(1,2,3)
    }, [])

  return (
    <Screen style={styles.screen}>
        {error &&
        <>
        <AppText>Couldn't find the listings, please try again.</AppText>
        <AppButton title='Retry' onPress={loadListings} />
        </> }
        <ActivityIndicator visible={loading} />
        <FlatList 
        data={listings}
        keyExtractor={item=> item.id.toString()}
        renderItem={({item})=>
            <Card 
            title={item.title}
            subTitle={'$'+ item.price}
            imageUrl={item.images[0].url}
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