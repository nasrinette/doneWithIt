import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import MessagesScreen from '../screens/MessagesScreen';
import AccountScreen from '../screens/AccountScreen';
import routes from './routes';

const Stack = createStackNavigator();

export default function AccountNavigator() {
  return (
    <Stack.Navigator screenOptions={{presentation: 'modal'}} >
      <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
      <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
  
    </Stack.Navigator>
  )
}

