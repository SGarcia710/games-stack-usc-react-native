export const Types = {
  SetSelectedStudent: 'students.setSelectedStudent',
  FetchAllOwnStudents: 'students.fetchAllOwnStudents',
  SetAllOwnStudents: 'students.setAllOwnStudents',
  RequestFailure: 'students.requestFailure',
};

export const Actions = {
  setSelectedStudent: selectedStudent => ({
    type: Types.SetSelectedStudent,
    selectedStudent,
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
