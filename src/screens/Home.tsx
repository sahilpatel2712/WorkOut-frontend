import React from 'react';
import {
  Button,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {globalStyles} from '../assets/styles/global';
import {homeStyles} from '../assets/styles/home';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import CustomField from '../components/CustomInput';
import {DownIcon} from '../assets/svg/svg';
import {Dropdown} from 'react-native-element-dropdown';
import {calculateCalories} from '../api-service/home';
import {useAppDispatch, useAppSelector} from '../redux/hook';
import {ErrorToast, SuccessToast} from '../utils/toast';
import {updateRecord} from '../api-service/records';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {loaderState} from '../redux/loader/loaderSlice';

type CaloriesModalProps = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  setCalories: (value: number | null) => void;
  caloriesData: number | null;
};

const validation = Yup.object({
  age: Yup.number().min(1, 'Must be 1 or greater').required('Required'),
  height: Yup.number().min(1, 'Must be 1 or greater').required('Required'),
  weight: Yup.number().min(1, 'Must be 1 or greater').required('Required'),
  duration: Yup.number().min(1, 'Must be 1 or greater').required('Required'),
  heart_rate: Yup.number().min(1, 'Must be 1 or greater').required('Required'),
  gender: Yup.string().required('Required'),
  body_temp: Yup.number().min(1, 'Must be 1 or greater').required('Required'),
});

const initialValue = {
  id: 0,
  age: '',
  height: '',
  weight: '',
  duration: '',
  heart_rate: '',
  gender: '',
  body_temp: '',
};

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const auth = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [calories, setCalories] = React.useState<number | null>(null);
  const [recordData, setRecordData] = React.useState(
    route.params?.record || initialValue,
  );

  const handleSubmit = async (value: any, {resetForm}: any) => {
    dispatch(loaderState(true));
    try {
      if (value?.id === 0) {
        const data = await calculateCalories(value, auth.token);
        setCalories(data?.calories || null);
        SuccessToast(data?.message);
      } else {
        const data = await updateRecord(value, auth.token);
        setCalories(data?.calories || null);
        SuccessToast(data?.message);
      }
      setModalVisible(true);
      resetForm({values: initialValue});
    } catch (error: any) {
      ErrorToast(error.response?.data?.message);
    }
    dispatch(loaderState(false));
  };
  const formik = useFormik({
    initialValues: recordData,
    validationSchema: validation,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  useFocusEffect(
    React.useCallback(() => {
      setRecordData(route.params?.record || initialValue);
    }, [route.params]),
  );

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: '#6C4E31', padding: 30},
      ]}>
      <CaloriesModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        caloriesData={calories}
        setCalories={setCalories}
      />
      <Text style={homeStyles.headerText}>Calculate Calories</Text>
      <ScrollView style={homeStyles.scrollContainer}>
        <View style={homeStyles.inputContainer}>
          <View style={{gap: 5, flexGrow: 1}}>
            <Text style={homeStyles.labelText}>Gender</Text>
            <Dropdown
              data={[
                {label: 'Male', value: 'male'},
                {label: 'Female', value: 'female'},
              ]}
              value={formik.values.gender}
              onChange={item => formik.setFieldValue('gender', item.value)}
              labelField="label"
              valueField="value"
              placeholder="Gender"
              itemTextStyle={{color: '#000'}}
              placeholderStyle={{color: '#B7B7B7'}}
              selectedTextStyle={{color: '#000'}}
              renderRightIcon={() => DownIcon()}
              style={[homeStyles.inputField, {padding: 10}]}
            />
            {formik.errors.gender && formik.touched.gender ? (
              <Text style={{color: 'red'}}>
                {formik.errors.gender as string}
              </Text>
            ) : null}
          </View>

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
        <View
          style={[homeStyles.inputContainer, {marginVertical: 30, gap: 30}]}>
          <Button
            onPress={() => {
              formik.resetForm({values: initialValue});
              navigation.setParams({records: undefined});
            }}
            title="Reset"
            color="#B31312"
          />
          <Button
            onPress={() => formik.handleSubmit()}
            title={formik.values.id == 0 ? 'Calculate' : 'Update'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const CaloriesModal = ({
  modalVisible,
  setModalVisible,
  caloriesData,
  setCalories,
}: CaloriesModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setCalories(null);
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}>
        <View style={homeStyles.modalView}>
          <Text style={{color: '#686D76', fontSize: 18, fontWeight: '600'}}>
            Calories Burn:
          </Text>
          <View>
            <Text style={homeStyles.caloriesText}>
              {caloriesData ? `${caloriesData} kcal` : null}
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Button
              onPress={() => setModalVisible(false)}
              title="Close"
              color="#ff033e"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
