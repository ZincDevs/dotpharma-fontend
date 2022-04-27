/* eslint-disable default-param-last */
import { USER_VERIRIFICATION, RESEND_VERIRIFICATION } from '../actions/_types';

const initialState = {
  verifyResponse: { data: {} },
  resendVerificationResponce: {},
};

export default (state = initialState, action) => {
  const { type, status, ...rest } = action;
  switch (type) {
    case USER_VERIRIFICATION:
      return {
        ...state,
        verifyResponse: {
          ...rest,
          status,
        },
      };
    case RESEND_VERIRIFICATION:
      return {
        ...state,
        resendVerificationResponce: {
          ...rest,
          status,
        },
      };
    default:
      return state;
  }
};
