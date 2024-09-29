import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import DrawerNavigation from './DrawerNavigation';
import {useAppDispatch, useAppSelector} from '../redux/hook';
import {initializeData} from '../redux/user/userSlice';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const auth = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(initializeData());
  }, []);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {auth.token ? (
        <Stack.Screen name="drawerNavigation" component={DrawerNavigation} />
      ) : (
        <>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
