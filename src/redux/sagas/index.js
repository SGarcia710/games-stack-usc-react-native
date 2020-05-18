import {all, takeEvery, takeLatest} from 'redux-saga/effects';
import * as Students from '../actions/Students';
import * as Auth from '../actions/Auth';
import {fetchAllOwnStudents} from './StudentsSagas';
import {checkUser} from './AuthSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(Students.Types.FetchAllOwnStudents, fetchAllOwnStudents),
    takeEvery(Auth.Types.CheckUser, checkUser),
  ]);
}
