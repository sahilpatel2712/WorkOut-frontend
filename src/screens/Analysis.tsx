import React from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../assets/styles/global';
import {recordStyles} from '../assets/styles/record';
import {CalendarIcon} from '../assets/svg/svg';
import dayjs from 'dayjs';
import DateTimePicker from 'react-native-ui-datepicker';

const list = [1, 2, 3, 4, 5, 6];

const Analysis = () => {
  const [datePickerShown, setDatePickerShown] = React.useState(false);
  const [startDate, setStartDate] = React.useState<any>(dayjs());
  const [endDate, setEndDate] = React.useState<any>(dayjs());
  const [initialFlag, setInitialFlag] = React.useState(true);
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
            mode="range"
            startDate={startDate}
            endDate={endDate}
            onChange={({startDate, endDate}) => {
              console.log(startDate, endDate);
            }}
            calendarTextStyle={{color: '#000'}}
            headerTextStyle={{color: '#000'}}
            weekDaysTextStyle={{color: '#000'}}
          />
          <TouchableOpacity
            style={recordStyles.dateSetButton}
            onPress={() => setDatePickerShown(false)}>
            <Text style={{color: '#fff', fontWeight: '500'}}>SET</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <ScrollView style={recordStyles.scrollContainer}>
        {list.map(value => (
          <View style={recordStyles.recordContainer} key={value}>
            <View style={{gap: 5}}>
              <Text style={recordStyles.recordText}>Duration - 30 min</Text>
              <Text style={recordStyles.recordText}>Age - 30</Text>
              <Text style={recordStyles.recordText}>Height - 130 cm</Text>
              <Text style={recordStyles.recordText}>Weight - 60 kg</Text>
              <Text style={recordStyles.recordText}>Gender - Male</Text>
              <Text style={recordStyles.recordText}>Heart Rate - 80 BPM</Text>
              <Text style={recordStyles.recordText}>
                Body Temperature - 20 °C
              </Text>
            </View>
            <View style={{gap: 5}}>
              <Text style={recordStyles.recordText}>Total Calories</Text>
              <Text style={[recordStyles.recordText, {textAlign: 'center'}]}>
                360 kcal
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View
        style={[
          recordStyles.dataText,
          {justifyContent: 'space-between', paddingTop: 15},
        ]}>
        <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>
          Total Calories Burn
        </Text>
        <Text style={{fontSize: 18, color: '#6EC207', fontWeight: '700'}}>
          600 kcal
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Analysis;
