import { USER_LOGIN } from '../actions/_types';

const initialState = {};
export default (action = {}, state = initialState) => {
  const { type, payload, status } = action;
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        ...payload,
        status,
      };
    default:
      return state;
  }
};
