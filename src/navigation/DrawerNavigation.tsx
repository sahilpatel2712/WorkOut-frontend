import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Home from '../screens/Home';
import Records from '../screens/Records';
import Analysis from '../screens/Analysis';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{title: 'Calculator'}}
        name="home"
        component={Home}
      />
      <Drawer.Screen
        options={{title: 'Records'}}
        name="records"
        component={Records}
      />

      <Drawer.Screen
        options={{title: 'Analysis'}}
        name="analysis"
        component={Analysis}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
