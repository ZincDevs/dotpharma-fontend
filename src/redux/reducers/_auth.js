import { USER_SIGNUP, USER_LOGIN } from '../actions/_types';

const initialState = {};
export default (action = {}, state = initialState) => {
  const { type, payload, status } = action;
  switch (type) {
    case USER_SIGNUP:
      return {
        ...state,
        signupResponce: {
          ...payload,
          status,
        },
      };
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
