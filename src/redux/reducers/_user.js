/* eslint-disable default-param-last */
import { USER_VERIRIFICATION } from '../actions/_types';

export default (state = { verifyResponse: { data: {} } }, action) => {
  const { type, payload, status } = action;
  switch (type) {
    case USER_VERIRIFICATION:
      return {
        ...state,
        verifyResponse: {
          ...payload,
          status,
        },
      };
    default:
      return state;
  }
};
