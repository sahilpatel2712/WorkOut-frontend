import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import DrawerNavigation from './DrawerNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="drawerNavigation" component={DrawerNavigation} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={SignUp} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
