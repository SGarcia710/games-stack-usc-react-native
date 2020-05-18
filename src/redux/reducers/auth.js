import {LOGIN, LOGOUT, START_GUEST_SESSION} from '../actions/auth';

const initialState = {
  loggedIn: false,
  user: null,
  isGuest: null,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: action.payload.user,
        loggedIn: true,
      };
    }
    case START_GUEST_SESSION: {
      return {
        ...state,
        user: 'Invitado',
        loggedIn: true,
        isGuest: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
        loggedIn: false,
      };
    }
    default:
      return state;
  }
};
