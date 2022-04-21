/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import { USER_SIGNUP, USER_LOGIN } from './_types';
import request from './_request';
import { Constants } from '../../helpers';

const { login_api, signup_api } = Constants;
export const signUp = user => async dispach => {
  try {
    user.role = 'patient';
    const data = await request('post', signup_api, null, user);
    dispach({
      type: USER_SIGNUP,
      payload: data,
      status: 'success',
    });
  } catch ({ response: { data } }) {
    dispach({ type: USER_SIGNUP, payload: data, status: 'fail' });
  }
};
export const logIn = auth => async dispach => {
  dispach({ type: USER_LOGIN, status: 'pending' });
  try {
    const data = await request('post', login_api, null, auth);
    dispach({
      type: USER_LOGIN,
      payload: data,
      status: 'success',
    });
  } catch ({ response: { data } }) {
    dispach({ type: USER_LOGIN, payload: data, status: 'fail' });
  }
};

export const logOut = () => async dispach => {
  dispach({
    type: 'USER_LOGOUT',
  });
};
