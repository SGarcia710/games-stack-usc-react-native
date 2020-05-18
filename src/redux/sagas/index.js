import {all, takeEvery, takeLatest} from 'redux-saga/effects';
import * as Students from '../actions/Students';
import {fetchAllOwnStudents} from './StudentsSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(Students.Types.FetchAllOwnStudents, fetchAllOwnStudents),
  ]);
}
