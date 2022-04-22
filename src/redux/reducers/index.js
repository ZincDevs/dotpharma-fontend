import { combineReducers } from 'redux';
import auth from './_auth';
import user from './_user';

export default combineReducers({
  auth,
  user,
});
