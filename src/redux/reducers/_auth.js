/* eslint-disable default-param-last */
import { USER_SIGNUP, USER_LOGIN } from '../actions/_types';

export default (state = { signupResponse: { data: {} } }, action) => {
  const { type, payload, status } = action;
  switch (type) {
    case USER_SIGNUP:
      return {
        ...state,
        signupResponse: {
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
