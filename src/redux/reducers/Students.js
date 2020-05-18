import * as Students from '../actions/Students';

const INITIAL_STATE = {
  studentsList: null,
  selectedStudentId: null,
  errorMessage: null,
  isFetching: false,
  studentsLoaded: false,
};

// Handlers
const setSelectedStudent = (state, {selectedStudentId}) => {
  return {...state, selectedStudentId};
};

const fetchAllOwnStudents = (state, action) => ({
  ...INITIAL_STATE,
  isFetching: true,
});

const setAllOwnStudents = (state, {studentsList}) => {
  return {...state, isFetching: false, studentsLoaded: true, studentsList};
};

const requestFailure = (state, action) => ({
  ...state,
  isFetching: false,
  errorMessage: action.error,
});

// Binding actions to handlers
const reducerMap = {
  [Students.Types.SetSelectedStudent]: setSelectedStudent,
  [Students.Types.FetchAllOwnStudents]: fetchAllOwnStudents,
  [Students.Types.SetAllOwnStudents]: setAllOwnStudents,
  [Students.Types.RequestFailure]: requestFailure,
};

export const reducer = (state = INITIAL_STATE, action) => {
  const handler = reducerMap[action.type];
  return typeof handler === 'function' ? handler(state, action) : state;
};
