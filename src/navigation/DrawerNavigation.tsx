import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../screens/Home';
import Records from '../screens/Records';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="home" component={Home} />
            <Drawer.Screen name="records" component={Records} />
            <Drawer.Screen name="analysis" component={Home} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
