import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import DrawerNavigation from './DrawerNavigation';
import {useAppDispatch, useAppSelector} from '../redux/hook';
import {initializeData} from '../redux/user/userSlice';
import Loader from '../components/Loader';
import BootSplash from 'react-native-bootsplash';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const auth = useAppSelector(state => state.user);
  const loader = useAppSelector(state => state.loader.isLoader);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const init = async () => {
      await dispatch(initializeData());
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);
  return (
    <>
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
      {loader ? <Loader /> : null}
    </>
  );
};

export default StackNavigation;
