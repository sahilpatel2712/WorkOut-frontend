import axios from 'axios';
import {BASE_URL} from '@env';

export const getWorkOutRecords = async (params: any, token: string) => {
  const response = await axios.get(BASE_URL + '/get-exercise', {
    params,
    headers: {Authorization: token},
  });
  return response.data;
};

export const deleteRecord = async (id: number, token: string) => {
  const response = await axios.delete(BASE_URL + `/exercise/${id}`, {
    headers: {Authorization: token},
  });
  return response.data;
};
export const updateRecord = async (data: any, token: string) => {
  const response = await axios.put(BASE_URL + `/exercise/${data?.id}`, data, {
    headers: {Authorization: token},
  });
  return response.data;
};
