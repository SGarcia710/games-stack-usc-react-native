import {connect} from 'react-redux';
import {setSelectedGame} from '../../redux/actions/games';

import GamesMenuScreen from './GamesMenuScreen';

const mapDispatchToProps = dispatch => {
  return {
    setSelectedGame: setSelectedGameId =>
      dispatch(setSelectedGame(setSelectedGameId)),
  };
};

const mapStateToProps = state => {
  return {
    gamesList: state.games.gamesList,
    selectedGameId: state.games.selectedGameId,
    user: state.auth.user,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GamesMenuScreen);
