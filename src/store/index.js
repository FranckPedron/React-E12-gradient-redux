/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import reducer from '../reducers';

// https://github.com/reduxjs/redux-devtools/tree/main/extension#11-basic-store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
