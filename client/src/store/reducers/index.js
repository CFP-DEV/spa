import { combineReducers } from 'redux';

// Reducers
import userReducer from './user';

export default combineReducers({
  user: userReducer,
});
