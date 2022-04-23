/* eslint-disable default-param-last */
import { USER_VERIRIFICATION } from '../actions/_types';

export default (state = { verifyResponse: { data: {} } }, action) => {
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
    default:
      return state;
  }
};
