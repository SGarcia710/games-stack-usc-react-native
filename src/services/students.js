import axios from 'axios';
import {ENDPOINT} from '../config/consts';

export const ROUTE = '/estudiantes';
export const OWN_STUDENTS = '/misEstudiantes';

const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const createStudent = payload => {
  return axios.post(`${ENDPOINT}${ROUTE}`, payload, options);
};

export const getAllOwnStudents = payload => {
  return axios.post(`${ENDPOINT}${ROUTE}${OWN_STUDENTS}`, payload, options);
};

export const getAllStudents = () => {
  return axios.get(`${ENDPOINT}${ROUTE}`);
};
