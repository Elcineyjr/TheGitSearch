import { createStore } from 'redux';
import ThemeReducer from './reducer';

const store = createStore(
  ThemeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
