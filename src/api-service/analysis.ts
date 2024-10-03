import axios from 'axios';
import {BASE_URL} from '@env';

export const graphData = async (data: any, token: string) => {
  const response = await axios.post(BASE_URL + '/get-graph-data', data, {
    headers: {Authorization: token},
  });
  return response.data;
};
