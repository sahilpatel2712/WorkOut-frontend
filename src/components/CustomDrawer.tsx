import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import CommonLabels from './CustomLabel';
import {LogOutIcon} from '../assets/svg/svg';
import {useAppDispatch} from '../redux/hook';
import {logOut} from '../redux/user/userSlice';

const CustomDrawer = (props: any) => {
  const dispatch = useAppDispatch();
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={drawerStyles.container}>
      <View>
        <DrawerItemList {...props} />
      </View>
      <DrawerItem
        label={() => <CommonLabels label="Log Out" icon={LogOutIcon} />}
        onPress={() => dispatch(logOut())}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const drawerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 29,
    marginTop: 81,
  },
});
