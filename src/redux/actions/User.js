/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import { USER_VERIRIFICATION } from './_types';
import request from './_request';
import { Constants } from '../../helpers';

const { verify_user_api } = Constants;
export const verifyUser = token => async dispach => {
  dispach({ type: USER_VERIRIFICATION, status: 'pending' });
  try {
    const data = await request('put', verify_user_api(token));
    dispach({
      type: USER_VERIRIFICATION,
      payload: data,
      status: 'success',
    });
  } catch ({ response: { data } }) {
    dispach({ type: USER_VERIRIFICATION, payload: data, status: 'fail' });
  }
};
