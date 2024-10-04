import React from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../assets/styles/global';
import {recordStyles} from '../assets/styles/record';
import {BarChart} from 'react-native-gifted-charts';
import {Dropdown} from 'react-native-element-dropdown';
import {DownIcon} from '../assets/svg/svg';
import {homeStyles} from '../assets/styles/home';
import {graphData, timeGraphData} from '../api-service/analysis';
import {useAppDispatch, useAppSelector} from '../redux/hook';
import {ErrorToast} from '../utils/toast';
import {useFocusEffect} from '@react-navigation/native';
import {loaderState} from '../redux/loader/loaderSlice';

const Analysis = () => {
  const auth = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const [dropValue, setDropValue] = React.useState<string>('weekly');
  const [avgCalories, setAvgCalories] = React.useState<number>(0);
  const [CaloriesBarData, setCaloriesBarData] = React.useState([]);
  const [avgTime, setAvgTime] = React.useState<number>(0);
  const [timeBarData, setTimeBarData] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  const handleCondition = async (value: string) => {
    dispatch(loaderState(true));
    try {
      const [caloriesRes, timeRes] = await Promise.all([
        handleCaloriesGraphData(value),
        handleTimeGraphData(value),
      ]);
      setDropValue(value);
      setAvgCalories(caloriesRes?.avg_calories || 0);
      setCaloriesBarData(caloriesRes?.barData || []);
      setAvgTime(timeRes?.avg_time || 0);
      setTimeBarData(timeRes?.barData || []);
    } catch (error: any) {
      ErrorToast(error?.response?.data);
    }
    dispatch(loaderState(false));
  };

  const handleCaloriesGraphData = async (value: string) => {
    return await graphData({condition: value}, auth.token);
  };

  const handleTimeGraphData = async (value: string) => {
    return await timeGraphData({condition: value}, auth.token);
  };
  useFocusEffect(
    React.useCallback(() => {
      handleCondition(dropValue);
    }, []),
  );
  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: '#6C4E31', padding: 20},
      ]}>
      <ScrollView
        style={[recordStyles.scrollContainer]}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={async () => {
              setRefreshing(true);
              handleCondition(dropValue);
              setRefreshing(false);
            }}
          />
        }>
        <View>
          <View></View>
        </View>
        <View>
          <View style={{marginVertical: 15}}>
            <Dropdown
              data={[
                {label: 'Week', value: 'weekly'},
                {label: 'Month', value: 'monthly'},
                // {label: 'Yearly', value: 'yearly'},
              ]}
              value={dropValue}
              onChange={item => handleCondition(item.value)}
              labelField="label"
              valueField="value"
              placeholder="Gender"
              itemTextStyle={{color: '#000', fontSize: 16, fontWeight: '500'}}
              placeholderStyle={{color: '#B7B7B7'}}
              selectedTextStyle={{
                color: '#000',
                fontSize: 16,
                fontWeight: '500',
              }}
              renderRightIcon={() => DownIcon()}
              style={[
                homeStyles.inputField,
                {padding: 10, backgroundColor: '#fff'},
              ]}
            />
          </View>
          <View
            style={{
              marginVertical: 15,
              height: 500,
              backgroundColor: '#fff',
              elevation: 10,
              borderRadius: 5,
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                color: '#333',
                marginBottom: 20,
              }}>
              Total Calories :
            </Text>
            <View>
              <Text style={{fontSize: 24, fontWeight: '700', color: '#000'}}>
                {avgCalories} kcal
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', color: '#686D76'}}>
                Average
              </Text>
            </View>
            <BarChart
              barWidth={22}
              noOfSections={3}
              horizontalRulesStyle={{color: '#333'}}
              yAxisTextStyle={{color: '#333'}}
              xAxisLabelTextStyle={{color: '#333'}}
              barBorderRadius={4}
              frontColor="lightgray"
              data={CaloriesBarData}
              yAxisThickness={0}
              xAxisThickness={0}
              isAnimated
              yAxisExtraHeight={80}
              renderTooltip={(item: any, index: number) => {
                return (
                  <View
                    key={index}
                    style={{
                      marginBottom: -50,
                      marginLeft: -6,
                      backgroundColor: '#000',
                      paddingHorizontal: 6,
                      paddingVertical: 4,
                      borderRadius: 4,
                    }}>
                    <Text>{item.value} kcal</Text>
                  </View>
                );
              }}
            />
          </View>
          <View
            style={{
              marginVertical: 15,
              height: 500,
              backgroundColor: '#fff',
              elevation: 10,
              borderRadius: 5,
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                color: '#333',
                marginBottom: 20,
              }}>
              Total Time :
            </Text>
            <View>
              <Text style={{fontSize: 24, fontWeight: '700', color: '#000'}}>
                {avgTime} minutes
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', color: '#686D76'}}>
                Average
              </Text>
            </View>
            <BarChart
              barWidth={22}
              noOfSections={3}
              horizontalRulesStyle={{color: '#333'}}
              yAxisTextStyle={{color: '#333'}}
              xAxisLabelTextStyle={{color: '#333'}}
              barBorderRadius={4}
              frontColor="lightgray"
              data={timeBarData}
              yAxisThickness={0}
              xAxisThickness={0}
              isAnimated
              yAxisExtraHeight={80}
              renderTooltip={(item: any, index: number) => {
                return (
                  <View
                    key={index}
                    style={{
                      marginBottom: -50,
                      marginLeft: -6,
                      backgroundColor: '#000',
                      paddingHorizontal: 6,
                      paddingVertical: 4,
                      borderRadius: 4,
                    }}>
                    <Text>{item.value} m</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Analysis;
