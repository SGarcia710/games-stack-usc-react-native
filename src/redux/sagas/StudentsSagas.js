import {call, put} from 'redux-saga/effects';
import {
  getAllOwnStudentsController,
  createStudentController,
} from '../../controllers/studentsController';
import * as Students from '../actions/Students';

// workers Saga
export function* fetchAllOwnStudents(action) {
  try {
    const students = yield call(getAllOwnStudentsController, action.userEmail);
    if (students.hasOwnProperty('message')) {
      yield put(Students.Actions.requestFailure(students.message));
    } else {
      yield put(Students.Actions.setAllOwnStudents(students));
    }
  } catch (error) {
    yield put(
      Students.Actions.requestFailure(
        'No se pudieron descargar los estudiantes.',
      ),
    );
  }
}

export function* createStudent(action) {
  try {
    const createdStudent = yield call(
      createStudentController,
      action.names,
      action.lastNames,
      action.code,
      action.date,
      action.institute,
      action.country,
      action.city,
      action.user,
    );
    if (createdStudent.hasOwnProperty('message')) {
      yield put(Students.Actions.requestFailure(createdStudent.message));
    } else {
      yield put(Students.Actions.addCreatedStudent(createdStudent));
    }
  } catch (error) {
    yield put(
      Students.Actions.requestFailure('No se pudo crear el estudiante.'),
    );
  }
}
