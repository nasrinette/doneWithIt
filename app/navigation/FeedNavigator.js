import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import ListingsScreen from '../screens/ListingsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import routes from './routes';

const Stack = createStackNavigator();

export default function FeedNavigator() {
  return (
    <Stack.Navigator screenOptions={{presentation: 'modal', headerShown: false}} >
      <Stack.Screen name={routes.LISTING} component={ListingsScreen} />
      <Stack.Screen name={routes.LISTING_DETAILS} component={DetailsScreen}  />
    </Stack.Navigator>
  )
}

