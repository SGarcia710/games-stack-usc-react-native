import axios from 'axios';
import {ENDPOINT} from '../assets/config/';

export const ROUTE = '/estudiantes';

const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const createStudent = payload => {
  return axios.post(`${ENDPOINT}${ROUTE}`, payload, options);
};

export const getStudents = () => {
  return axios.get(`${ENDPOINT}${ROUTE}`);
};
