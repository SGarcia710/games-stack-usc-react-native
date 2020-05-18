import {SET_SELECTED_GAME} from '../actions/games';

import gamesData from '../data/games.json';

const initialState = {
  gamesList: gamesData,
  selectedGameId: null,
};

export const games = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_GAME: {
      return {
        ...state,
        selectedGameId: action.payload.selectedGameId,
      };
    }
    default:
      return state;
  }
};
