import {connect} from 'react-redux';
import RegisterStudentScreen from './RegisterStudentScreen';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(RegisterStudentScreen);
