import {connect} from 'react-redux';
import * as Students from '../../redux/actions/Students';

import MenuScreen from './MenuScreen';

const mapStateToProps = state => {
  return {
    isGuest: state.auth.isGuest,
    userEmail: state.auth.userEmail,
    isFetching: state.students.isFetching,
    studentsLoaded: state.students.studentsLoaded,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllOwnStudents: userEmail =>
      dispatch(Students.Actions.fetchAllOwnStudents(userEmail)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuScreen);
