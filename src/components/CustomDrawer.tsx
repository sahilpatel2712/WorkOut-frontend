import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import CommonLabels from './CustomLabel';
import {LogOutIcon} from '../assets/svg/svg';
import {useAppDispatch, useAppSelector} from '../redux/hook';
import {logOut} from '../redux/user/userSlice';

const CustomDrawer = (props: any) => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.user);
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={drawerStyles.container}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 20,
            alignItems: 'center',
            marginBottom: 20,
            gap: 15,
          }}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{height: 50, width: 50,borderRadius:5}}
          />
          <Text style={{color: '#000', fontSize: 20, fontWeight: '600'}}>
            {auth.username}
          </Text>
        </View>
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
    marginTop: 20,
  },
});
