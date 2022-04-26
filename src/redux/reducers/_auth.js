/* eslint-disable default-param-last */
import { USER_SIGNUP, USER_LOGIN, ADMIN_USER_LOGIN } from '../actions/_types';

const initialState = {
  signupResponse: {},
  loginResponse: {},
  adminLoginResponse: {},
};

export default (state = initialState, action) => {
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
        loginResponse: {
          ...rest,
          status,
        },
      };
    case ADMIN_USER_LOGIN:
      return {
        ...state,
        adminLoginResponse: {
          ...rest,
          status,
        },
      };
    default:
      return state;
  }
};
