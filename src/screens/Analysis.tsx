import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../assets/styles/global';
import {recordStyles} from '../assets/styles/record';
import {BarChart} from 'react-native-gifted-charts';
import {Dropdown} from 'react-native-element-dropdown';
import {DownIcon} from '../assets/svg/svg';
import {homeStyles} from '../assets/styles/home';
import {graphData} from '../api-service/analysis';
import {useAppSelector} from '../redux/hook';
import {ErrorToast} from '../utils/toast';

const Analysis = () => {
  const auth = useAppSelector(state => state.user);
  const [dropValue, setDropValue] = React.useState<string>('weekly');
  const [avgCalories, setAvgCalories] = React.useState<number>(0);
  const [barData, setBarData] = React.useState([]);

  const handleCondition = async (value: string) => {
    try {
      const res = await graphData({condition: value}, auth.token);
      setDropValue(value);
      setAvgCalories(res?.avg_calories || 0);
      setBarData(res?.barData || []);
    } catch (error: any) {
      ErrorToast(error?.response?.data);
    }
  };

  React.useEffect(() => {
    handleCondition('weekly');
  }, []);

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: '#6C4E31', padding: 20},
      ]}>
      <ScrollView style={[recordStyles.scrollContainer]}>
        <View style={{marginVertical: 15}}>
          <Dropdown
            data={[
              {label: 'Weekly', value: 'weekly'},
              {label: 'Monthly', value: 'monthly'},
              // {label: 'Yearly', value: 'yearly'},
            ]}
            value={dropValue}
            onChange={item => handleCondition(item.value)}
            labelField="label"
            valueField="value"
            placeholder="Gender"
            itemTextStyle={{color: '#000'}}
            placeholderStyle={{color: '#B7B7B7'}}
            selectedTextStyle={{color: '#000'}}
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
            data={barData}
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
                  <Text>{item.value}</Text>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Analysis;
