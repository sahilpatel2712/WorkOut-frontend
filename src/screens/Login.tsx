import React from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {globalStyles} from '../assets/styles/global';
import {authStyle} from '../assets/styles/authStyle';
import {LockIcon, UserIcon} from '../assets/svg/svg';

const Login = ({navigation}:any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 18,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <Text
          style={{...authStyle.headingText, ...globalStyles.defaultTextColor}}>
          SIGN IN
        </Text>
      </View>
      <View style={{width: '100%', padding: 60, gap: 20}}>
        <View style={authStyle.textInputContainer}>
          <View style={{justifyContent: 'center'}}>{UserIcon()}</View>
          <TextInput
            style={authStyle.textInput}
            placeholder="Email"
            placeholderTextColor="#333"
            keyboardType="email-address"
          />
        </View>
        <View style={authStyle.textInputContainer}>
          <View style={{justifyContent: 'center'}}>{LockIcon()}</View>
          <TextInput
            style={authStyle.textInput}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#333"
          />
        </View>
        <Pressable onPress={() => navigation.navigate('signup')}>
          <Text style={authStyle.authText}>Don't have an account?</Text>
        </Pressable>
        <Button title="SIGN IN" color="#009EFF" />
      </View>
    </SafeAreaView>
  );
};

export default Login;
