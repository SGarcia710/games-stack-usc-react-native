import {call, put} from 'redux-saga/effects';
import {getAllOwnStudentsController} from '../../controllers/studentsController';
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
