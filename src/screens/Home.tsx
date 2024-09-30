import React from 'react';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {globalStyles} from '../assets/styles/global';
import {homeStyles} from '../assets/styles/home';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import CustomField from '../components/CustomInput';

const validation = Yup.object({
  age: Yup.string().required('Require'),
  height: Yup.string().required('Require'),
  weight: Yup.string().required('Require'),
  duration: Yup.string().required('Require'),
  heart_rate: Yup.string().required('Require'),
  gender: Yup.string().required('Require'),
  body_temp: Yup.string().required('Require'),
});

const initialValue = {
  age: '',
  height: '',
  weight: '',
  duration: '',
  heart_rate: '',
  gender: '',
  body_temp: '',
};

const Home = () => {
  const handleSubmit = (value: any) => {
    console.log(value);
  };
  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validation,
    onSubmit: handleSubmit,
  });

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: '#6C4E31', padding: 30},
      ]}>
      <Text style={homeStyles.headerText}>Calculate Calories</Text>
      <ScrollView style={homeStyles.scrollContainer}>
        <View style={homeStyles.inputContainer}>
          <CustomField
            name="gender"
            formik={formik}
            label="Gender"
            placeholder="eg. Male"
          />
          <CustomField
            name="age"
            formik={formik}
            label="Age"
            placeholder="eg. 21"
            inputMode="numeric"
          />
        </View>
        <View style={homeStyles.inputContainer}>
          <CustomField
            name="height"
            formik={formik}
            label="Height"
            placeholder="Cm"
            inputMode="decimal"
          />
          <CustomField
            name="weight"
            formik={formik}
            label="Weight"
            placeholder="KG"
            inputMode="decimal"
          />
        </View>
        <View style={homeStyles.inputContainer}>
          <CustomField
            name="duration"
            formik={formik}
            label="Duration"
            placeholder="Minute"
            inputMode="decimal"
          />
          <CustomField
            name="heart_rate"
            formik={formik}
            label="Heart Rate"
            placeholder="BPM"
            inputMode="numeric"
          />
        </View>
        <View style={[homeStyles.inputContainer, {width: '45%'}]}>
          <CustomField
            name="body_temp"
            formik={formik}
            label="Body Temperature"
            placeholder="°C"
            inputMode="decimal"
          />
        </View>
        <View style={[homeStyles.inputContainer, {marginVertical: 30}]}>
          <Button onPress={() => formik.handleSubmit()} title="Calculate" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
