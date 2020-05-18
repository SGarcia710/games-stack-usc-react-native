import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import {not, contains} from 'ramda';

// Importing sagas
import rootSaga from './sagas';

// Importing reducers
import {reducer as studentsReducer} from './reducers/Students';
import {auth, games} from './reducers';

const rootReducer = combineReducers({
  auth,
  games,
  students: studentsReducer,
});

// the logger master switch
const USE_LOGGING = false;

// silence these saga-based messages
const SAGA_LOGGING_BLACKLIST = [
  'EFFECT_TRIGGERED',
  'EFFECT_RESOLVED',
  'EFFECT_REJECTED',
];

// create the logger
const logger = createLogger({
  predicate: (getState, {type}) =>
    USE_LOGGING && not(contains(type, SAGA_LOGGING_BLACKLIST)),
});

// a function which can create our store and auto-persist the data
export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(logger, sagaMiddleware);
  const store = createStore(rootReducer, middleware);
  sagaMiddleware.run(rootSaga);
  return store;
};

// export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(studentsSagas);
