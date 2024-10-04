import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Home from '../screens/Home';
import Records from '../screens/Records';
import Analysis from '../screens/Analysis';
import CustomDrawer from '../components/CustomDrawer';
import CommonLabels from '../components/CustomLabel';
import {CalculationIcon, graphIcon, ListIcon} from '../assets/svg/svg';

const Drawer = createDrawerNavigator();

const ScreensName = [
  {name: 'home', title: 'Calculator', component: Home, icon: CalculationIcon},
  {name: 'records', title: 'Records', component: Records, icon: ListIcon},
  {name: 'analysis', title: 'Analysis', component: Analysis, icon: graphIcon},
];

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={CustomDrawer}>
      {ScreensName.map((DrawerItem, index) => (
        <Drawer.Screen
          key={index}
          options={{
            title: DrawerItem.title,
            drawerLabel: () => (
              <CommonLabels label={DrawerItem.title} icon={DrawerItem.icon} />
            ),
          }}
          name={DrawerItem.name}
          component={DrawerItem.component}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
