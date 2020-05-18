export const LOGIN = '[Auth] Login user';
export const LOGOUT = '[Auth] Logout user';
export const START_GUEST_SESSION = '[Auth] Guest session started';

export const login = (user, password) => {
  //TODO: Aquí hago el fetch
  console.log(user, password);
  return {
    type: LOGIN,
    payload: {user},
  };
};

export const startGuestSession = () => {
  return {
    type: START_GUEST_SESSION,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
