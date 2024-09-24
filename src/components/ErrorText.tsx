import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ErrorText = ({massage}:any) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>{massage}</Text>
    </View>
  );
};

export default ErrorText;

const style = StyleSheet.create({
  text: {
    color: 'red',
  },
  container: {
    position: 'relative',
    bottom: 20,
    left: 10,
  },
});