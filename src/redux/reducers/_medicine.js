/* eslint-disable default-param-last */
import { GET_MEDICINES } from '../actions/_types';

const defaultState = {};
export default (state = defaultState, action) => {
  const { type, status, ...rest } = action;
  switch (type) {
    case GET_MEDICINES:
      return {
        ...state,
        ...rest,
        status,
      };
    default:
      return defaultState;
  }
};
