import {connect} from 'react-redux';
import {startGuestSession} from '../../redux/actions/auth';

import LandingScreen from './LandingScreen';

const mapDispatchToProps = dispatch => {
  return {
    startGuestSession: () => dispatch(startGuestSession()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(LandingScreen);
