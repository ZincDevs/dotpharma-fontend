/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import request from './_request';
import { Constants } from '../helpers';

const { verify_user_api, resend_verification_api } = Constants;
export const verifyUser = async token => {
  try {
    const data = await request('put', verify_user_api(token));
    return { ...data, status: 'success' };
  } catch ({ response: { data } }) {
    return { ...data, status: 'fail' };
  }
};
export const resentVerification = async email => {
  try {
    const data = await request('post', resend_verification_api, null, { email });
    return { ...data, status: 'success' };
  } catch ({ response: { data } }) {
    return { ...data, status: 'fail' };
  }
};
