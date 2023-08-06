import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { paddingBottom: 6},
    }}>
        <Tab.Screen name="Feed" component={FeedNavigator} options={{
          headerShown: false,
          tabBarIcon: ({color, size})=> <MaterialCommunityIcons name='home' size={size} color={color}  />
          }} />
        <Tab.Screen name="ListingsEdit" component={ListingEditScreen} 
        options={({navigation}) =>(
          {
            tabBarButton: () => <NewListingButton  
            onPress={()=>navigation.navigate("ListingsEdit")}
            />, 
            headerShown: false,
          }
        )} />
        <Tab.Screen name="Account " component={AccountNavigator} options={{headerShown: false,
                  tabBarIcon: ({color, size})=> <MaterialCommunityIcons name='account' size={size} color={color}  />
        }} />
  </Tab.Navigator>
  )
}

