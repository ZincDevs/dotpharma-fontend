/* eslint-disable default-param-last */
import { USER_SIGNUP, USER_LOGIN } from '../actions/_types';

export default (state = { signupResponse: { data: {} } }, action) => {
  const { type, status, ...rest } = action;
  switch (type) {
    case USER_SIGNUP:
      return {
        ...state,
        signupResponse: {
          ...rest,
          status,
        },
      };
    case USER_LOGIN:
      return {
        ...state,
        ...rest,
        status,
      };
    default:
      return state;
  }
};
