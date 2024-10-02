import axios from 'axios';
import {BASE_URL} from '@env';

export const getWorkOutRecords = async (params: any, token: string) => {
  const headers = {Authorization: token};
  const response = await axios.get(BASE_URL + '/get-exercise', {
    params,
    headers,
  });
  return response.data;
};
