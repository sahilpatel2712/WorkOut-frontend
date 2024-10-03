import axios from 'axios';
import {BASE_URL} from '@env';

export const getWorkOutRecords = async (params: any, token: string) => {
  const response = await axios.get(BASE_URL + '/get-exercise', {
    params,
    headers: {Authorization: token},
  });
  return response.data;
};
