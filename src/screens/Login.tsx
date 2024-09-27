import React from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {globalStyles} from '../assets/styles/global';
import {authStyle} from '../assets/styles/authStyle';
import {LockIcon, UserIcon} from '../assets/svg/svg';
import {useAppDispatch} from '../redux/hook';
import {login} from '../redux/user/userSlice';

const initialValue = {
  email: '',
  password: '',
};
const validation = Yup.object({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const Login = ({navigation}: any) => {
  const dispatch = useAppDispatch();

  const handleSubmit = (value: any) => {
    dispatch(login(value));
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validation,
    onSubmit: handleSubmit,
  });

  return (
    <SafeAreaView style={globalStyles.container}>
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
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
          />
        </View>
        {formik.errors.email && formik.touched.email ? (
          <Text style={{color: 'red'}}>{formik.errors.email}</Text>
        ) : null}
        <View style={authStyle.textInputContainer}>
          <View style={{justifyContent: 'center'}}>{LockIcon()}</View>
          <TextInput
            style={authStyle.textInput}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#333"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
          />
        </View>
        {formik.errors.password && formik.touched.password ? (
          <Text style={{color: 'red'}}>{formik.errors.password}</Text>
        ) : null}
        <Pressable onPress={() => navigation.navigate('signup')}>
          <Text style={authStyle.authText}>Don't have an account?</Text>
        </Pressable>
        <Button
          onPress={() => formik.handleSubmit()}
          title="SIGN IN"
          color="#009EFF"
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
