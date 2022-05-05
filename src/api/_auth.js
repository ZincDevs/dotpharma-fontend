/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import axios from './_axios';
import { Constants } from '../helpers';

const {
  login_api, signup_api, admin_login_api, refresh_token_api,
} = Constants;
export const signUp = async user => {
  try {
    user.role = 'patient';
    const { data } = await axios.post(signup_api, user);
    return { ...data, status: 'success' };
  } catch ({ response: { data } }) {
    return { ...data, status: 'fail' };
  }
};
export const logIn = async (auth, isAdmin) => {
  try {
    const { data } = await axios.post(isAdmin ? admin_login_api : login_api, auth);
    return { ...data, status: 'success' };
  } catch ({ response: { data } }) {
    return { ...data, status: 'fail' };
  }
};

export const refreshToken = async () => {
  const { data } = await axios.get(refresh_token_api);
  return { ...data, status: 'success' };
};
