import {createStudent} from '../services/auth/students';

export const createStudentController = async (names, lastNames, code, date) => {
  try {
    const payload = {
      datos: {
        nombres: names,
        apellidos: lastNames,
        codigo: code,
        nacimiento: date,
      },
    };
    console.log(payload);
    // We catch the student to add it to the state
    const response = await createStudent(payload);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Ha ocurrido un error creando al estudiante');
  }
};
