import axios from 'axios';
import {BASE_URL} from '@env';

export const calculateCalories = async (data: any, token: string) => {
  const response = await axios.post(BASE_URL + '/exercise', data, {
    headers: {Authorization: token},
  });
  return response.data;
};
