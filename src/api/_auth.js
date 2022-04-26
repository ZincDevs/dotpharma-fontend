/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import request from './_request';
import { Constants } from '../helpers';

const { login_api, signup_api, admin_login_api } = Constants;
export const signUp = async user => {
  try {
    user.role = 'patient';
    const data = await request('post', signup_api, null, user);
    return { ...data, status: 'success' };
  } catch ({ response: { data } }) {
    return { ...data, status: 'fail' };
  }
};
export const logIn = async (auth, isAdmin) => {
  try {
    const data = await request('post', isAdmin ? admin_login_api : login_api, null, auth);
    return { ...data, status: 'success' };
  } catch ({ response: { data } }) {
    return { ...data, status: 'fail' };
  }
};
