import React from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { authStyle } from '../assets/styles/authStyle';
import { globalStyles } from '../assets/styles/global';
import { LockIcon, UserIcon } from '../assets/svg/svg';

const SignUp = ({navigation}:any) => {

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
          SIGN UP
        </Text>
      </View>
      <View style={{width: '100%', padding: 60, gap: 20}}>
        <View style={authStyle.textInputContainer}>
          <View style={{justifyContent: 'center'}}>{UserIcon()}</View>
          <TextInput
            style={authStyle.textInput}
            placeholder="Username"
            placeholderTextColor="#333"
            keyboardType="email-address"
          />
        </View>
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
        <Pressable onPress={() => navigation.navigate('login')}>
          <Text style={authStyle.authText}>Already have an account?</Text>
        </Pressable>
        <Button title="SIGN UP" color="#009EFF" />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
