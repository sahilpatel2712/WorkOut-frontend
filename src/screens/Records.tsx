/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import dayjs from 'dayjs';
import {globalStyles} from '../assets/styles/global';
import {recordStyles} from '../assets/styles/record';
import {CalendarIcon} from '../assets/svg/svg';
import DateTimePicker, {DateType} from 'react-native-ui-datepicker';
import {getWorkOutRecords} from '../api-service/records';
import {useAppSelector} from '../redux/hook';
import CustomCard from '../components/CustomCard';
const Records = () => {
  const auth = useAppSelector(state => state.user);
  const [datePickerShown, setDatePickerShown] = React.useState(false);
  const [date, setDate] = React.useState<any>(dayjs().toISOString());
  const [initialFlag, setInitialFlag] = React.useState(true);
  const [recordList, setRecordList] = React.useState([]);
  const [totalCalories, setTotalCalories] = React.useState(0);

  const handleDateChange = async (date: DateType) => {
    try {
      const res = await getWorkOutRecords({date: date}, auth.token);
      setRecordList(res?.exercises || []);
      setTotalCalories(res?.total_calories || 0);
    } catch (error: any) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    handleDateChange(dayjs().toISOString());
  }, []);

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
        <ScrollView style={recordStyles.scrollContainer}>
          {recordList.length !== 0
            ? recordList.map((value: any) => (
                <React.Fragment key={value.id}>
                  <CustomCard value={value} />
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
    </SafeAreaView>
  );
};

export default Records;
