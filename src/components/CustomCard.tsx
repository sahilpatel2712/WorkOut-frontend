import React from 'react';
import {Text, View} from 'react-native';
import {recordStyles} from '../assets/styles/record';

const CustomCard = ({value}: any) => {
  return (
    <View style={recordStyles.recordContainer} >
      <View style={{gap: 5}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[recordStyles.recordText, {color: '#686D76'}]}>
            Duration -{' '}
          </Text>
          <Text style={recordStyles.recordText}>{value?.duration} min</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[recordStyles.recordText, {color: '#686D76'}]}>
            Age -{' '}
          </Text>
          <Text style={recordStyles.recordText}>{value?.age}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[recordStyles.recordText, {color: '#686D76'}]}>
            Height -{' '}
          </Text>
          <Text style={recordStyles.recordText}>{value?.height} cm</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[recordStyles.recordText, {color: '#686D76'}]}>
            Weight -{' '}
          </Text>
          <Text style={recordStyles.recordText}>{value?.weight} kg</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[recordStyles.recordText, {color: '#686D76'}]}>
            Gender -{' '}
          </Text>
          <Text style={recordStyles.recordText}>{value?.gender}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[recordStyles.recordText, {color: '#686D76'}]}>
            Heart Rate -{' '}
          </Text>
          <Text style={recordStyles.recordText}>{value?.heart_rate} BPM</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[recordStyles.recordText, {color: '#686D76'}]}>
            Body Temperature -{' '}
          </Text>
          <Text style={recordStyles.recordText}>{value?.body_temp} °C</Text>
        </View>
      </View>
      <View style={{gap: 5}}>
        <Text style={[recordStyles.recordText, {color: '#686D76'}]}>
          Total Calories
        </Text>
        <Text style={[recordStyles.recordText, {textAlign: 'center'}]}>
          {value?.calories} kcal
        </Text>
      </View>
    </View>
  );
};

export default CustomCard;
