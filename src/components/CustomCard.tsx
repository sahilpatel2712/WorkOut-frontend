import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {recordStyles} from '../assets/styles/record';
import {PencilIcon, TrashIcon} from '../assets/svg/svg';
import {useNavigation} from '@react-navigation/native';

const CustomCard = ({value, showModal}: any) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#fff',
        elevation: 5,
        width: '100%',
        borderRadius: 5,
        marginBottom: 20,
      }}>
      <View style={recordStyles.recordContainer}>
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
            Calories Burn
          </Text>
          <Text style={[recordStyles.recordText, {textAlign: 'center',color:"#6EC207"}]}>
            {value?.calories} kcal
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 15,
        }}>
        <TouchableOpacity onPress={() => showModal()}>
          {TrashIcon()}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('home', {record: value})}>
          <Text style={{fontSize: 16, fontWeight: '600', color: '#333'}}>
            {PencilIcon()}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomCard;
