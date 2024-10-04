import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loader = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position:"absolute",
        zIndex:10,
        width:"100%",
        height:"100%"
      }}>
      <ActivityIndicator size={60} color="#177AD5"  />
    </View>
  );
};

export default Loader;
