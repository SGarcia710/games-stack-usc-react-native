import {connect} from 'react-redux';
import * as Games from '../../redux/actions/Games';

import GamesMenuScreen from './GamesMenuScreen';

const mapDispatchToProps = dispatch => {
  return {
    setSelectedGame: setSelectedGameId =>
      dispatch(Games.Actions.setSelectedGame(setSelectedGameId)),
  };
};

const mapStateToProps = state => {
  return {
    gamesList: state.games.gamesList,
    selectedGameId: state.games.selectedGameId,
    isGuest: state.auth.isGuest,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GamesMenuScreen);
