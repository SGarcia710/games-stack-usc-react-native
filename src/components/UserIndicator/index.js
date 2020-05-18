import {connect} from 'react-redux';

import {UserIndicator} from './UserIndicator';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(UserIndicator);
