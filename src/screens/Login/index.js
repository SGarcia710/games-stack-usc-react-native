import {connect} from 'react-redux';
import {login} from '../../redux/actions/auth';

import LoginScreen from './LoginScreen';

const mapDispatchToProps = dispatch => {
  return {
    login: (user, password) => dispatch(login(user, password)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(LoginScreen);
