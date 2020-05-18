export const SET_SELECTED_GAME = '[Games] Set selected game';

export const setSelectedGame = selectedGameId => {
  return {
    type: SET_SELECTED_GAME,
    payload: {selectedGameId},
  };
};
