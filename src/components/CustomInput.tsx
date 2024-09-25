import React, {ReactNode} from 'react';
import {InputModeOptions, Text, TextInput, View} from 'react-native';
import {homeStyles} from '../assets/styles/home';

interface CustomFieldProps {
  label: string;
  inputMode?: InputModeOptions;
  placeholder: string;
  formik: any;
  name: string;
}

const CustomField = ({
  label,
  inputMode,
  placeholder,
  formik,
  name,
}: CustomFieldProps): ReactNode => {
  return (
    <View style={{gap: 5, flexGrow: 1}}>
      <Text style={homeStyles.labelText}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        inputMode={inputMode || 'text'}
        placeholderTextColor="#B7B7B7"
        style={homeStyles.inputField}
        value={formik.values[name]}
        onChangeText={formik.handleChange(name)}
        onBlur={formik.handleBlur(name)}
      />
      {formik.errors[name] && formik.touched[name] ? (
        <Text style={{color: 'red'}}>{formik.errors[name]}</Text>
      ) : null}
    </View>
  );
};
export default CustomField;
