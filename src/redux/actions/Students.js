export const Types = {
  SetSelectedStudent: 'students.setSelectedStudent',
  FetchAllOwnStudents: 'students.fetchAllOwnStudents',
  SetAllOwnStudents: 'students.setAllOwnStudents',
  RequestFailure: 'students.requestFailure',
};

export const Actions = {
  setSelectedStudent: selectedStudentId => ({
    type: Types.SetSelectedStudent,
    selectedStudentId,
  }),
  fetchAllOwnStudents: userEmail => ({
    type: Types.FetchAllOwnStudents,
    userEmail,
  }),
  setAllOwnStudents: studentsList => ({
    type: Types.SetAllOwnStudents,
    studentsList,
  }),
  requestFailure: error => ({type: Types.RequestFailure, error}),
};
