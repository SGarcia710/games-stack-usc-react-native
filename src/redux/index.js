import {createStore, combineReducers} from 'redux';
import {auth, games} from './reducers';

const rootReducer = combineReducers({
  auth,
  games,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
