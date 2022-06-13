import { combineReducers } from 'redux';
import medicine from './_medicine';
import user from './_user';

export default combineReducers({
  medicine,
  user,
});
