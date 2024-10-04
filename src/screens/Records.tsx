/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Modal,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import dayjs from 'dayjs';
import {globalStyles} from '../assets/styles/global';
import {recordStyles} from '../assets/styles/record';
import {CalendarIcon} from '../assets/svg/svg';
import DateTimePicker, {DateType} from 'react-native-ui-datepicker';
import {deleteRecord, getWorkOutRecords} from '../api-service/records';
import {useAppDispatch, useAppSelector} from '../redux/hook';
import CustomCard from '../components/CustomCard';
import {ErrorToast, SuccessToast} from '../utils/toast';
import {useFocusEffect} from '@react-navigation/native';
import {loaderState} from '../redux/loader/loaderSlice';
const Records = () => {
  const auth = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const [isModalVisible, setModalVisible] = React.useState<boolean>(false);
  const [datePickerShown, setDatePickerShown] = React.useState(false);
  const [date, setDate] = React.useState<any>(dayjs().toISOString());
  const [initialFlag, setInitialFlag] = React.useState(true);
  const [recordList, setRecordList] = React.useState([]);
  const [totalCalories, setTotalCalories] = React.useState(0);
  const [stagedData, setStagedData] = React.useState<any>(null);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  const handleDateChange = async (date: DateType) => {
    dispatch(loaderState(true));
    try {
      const res = await getWorkOutRecords({date: date}, auth.token);
      setRecordList(res?.exercises || []);
      setTotalCalories(res?.total_calories || 0);
    } catch (error: any) {
      ErrorToast(error?.response?.data);
    }
    dispatch(loaderState(false));
  };

  const handleDelete = async (isDelete: boolean) => {
    if (isDelete && stagedData) {
      try {
        const res = await deleteRecord(stagedData.id, auth.token);
        SuccessToast(res?.message);
        handleDateChange(date);
      } catch (error: any) {
        ErrorToast(error?.response?.data);
      }
    }
    setModalVisible(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      handleDateChange(date);
    }, []),
  );

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: '#6C4E31', padding: 20},
      ]}>
      <Pressable
        onPress={() => setDatePickerShown(true)}
        style={[recordStyles.dataText, {paddingBottom: 15}]}>
        <View style={{gap: 5, flexDirection: 'row'}}>
          <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>
            Select Date
          </Text>
          {CalendarIcon()}
        </View>
        <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>
          {initialFlag
            ? dayjs(date).format('DD/MM/YYYY')
            : dayjs(date).add(-1, 'day').format('DD/MM/YYYY')}
        </Text>
      </Pressable>
      <Modal
        animationType="fade"
        transparent={true}
        visible={datePickerShown}
        onRequestClose={() => {
          setDatePickerShown(false);
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 5,
          }}>
          <DateTimePicker
            mode="single"
            date={initialFlag ? date : dayjs(date).add(-1, 'day')}
            onChange={params => {
              setInitialFlag(false);
              const formattedDate = dayjs(params.date)
                .add(1, 'day')
                .toISOString();
              setDate(formattedDate);
            }}
            calendarTextStyle={{color: '#000'}}
            headerTextStyle={{color: '#000'}}
            weekDaysTextStyle={{color: '#000'}}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#0047FF',
              width: 70,
              alignItems: 'center',
              borderRadius: 10,
              paddingVertical: 5,
              alignSelf: 'flex-end',
              marginRight: 10,
              marginBottom: 20,
            }}
            onPress={() => {
              handleDateChange(date);
              setDatePickerShown(false);
            }}>
            <Text style={{color: '#fff', fontWeight: '500'}}>SET</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {recordList.length !== 0 ? (
        <ScrollView
          style={recordStyles.scrollContainer}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={async () => {
                setRefreshing(true);
                handleDateChange(date);
                setRefreshing(false);
              }}
            />
          }>
          {recordList.length !== 0
            ? recordList.map((value: any) => (
                <React.Fragment key={value.id}>
                  <CustomCard
                    value={value}
                    showModal={() => {
                      setModalVisible(true);
                      setStagedData(value);
                    }}
                  />
                </React.Fragment>
              ))
            : null}
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>
            No exercise data found for the given date
          </Text>
        </View>
      )}

      <View
        style={[
          recordStyles.dataText,
          {justifyContent: 'space-between', paddingTop: 15},
        ]}>
        <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>
          Total Calories Burn
        </Text>
        <Text style={{fontSize: 18, color: '#6EC207', fontWeight: '700'}}>
          {totalCalories} kcal
        </Text>
      </View>
      <View>
        <Modal visible={isModalVisible} transparent animationType="slide">
          <View style={styles.container}>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalText}>
                This record will remove from your record list.
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => handleDelete(false)}>
                <Text style={styles.buttonsText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => handleDelete(true)}>
                <Text style={styles.buttonsText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Records;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: '1%',
    height: '15%',
    alignSelf: 'center',
    marginHorizontal: '6%',
    borderRadius: 20,
    padding: '1%',
    width: '90%',
  },
  modalTextContainer: {
    height: '30%',
    marginTop: '2%',
  },
  modalText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 15,
  },
  buttonContainer: {
    marginHorizontal: '10%',
    flexDirection: 'row',
    alignSelf: 'center',
    height: '60%',
    width: '100%',
  },
  modalButton: {
    width: '50%',
  },
  buttonsText: {
    textAlign: 'center',
    height: '100%',
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
