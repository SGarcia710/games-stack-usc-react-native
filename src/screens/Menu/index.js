import {connect} from 'react-redux';

import MenuScreen from './MenuScreen';

const mapStateToProps = state => {
  return {
    isGuest: state.auth.isGuest,
  };
};

export default connect(mapStateToProps)(MenuScreen);
