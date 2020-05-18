import {LOGIN, LOGOUT, START_GUEST_SESSION} from '../actions/auth';

const initialState = {
  isLoggedIn: false,
  user: null,
  isGuest: null,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
      };
    }
    case START_GUEST_SESSION: {
      return {
        ...state,
        user: 'Invitado',
        isLoggedIn: true,
        isGuest: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};
