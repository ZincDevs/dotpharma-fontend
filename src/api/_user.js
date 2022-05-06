/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import axios from './_axios';
// import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { Constants } from '../helpers';

const {
  verify_user_api,
  resend_verification_api,
  get_all_users_api,
  r_psw_rese_api,
  r_r_psw_rese_api,
} = Constants;
// const axiosPrivate = useAxiosPrivate();
export const verifyUser = async token => {
  try {
    const { data } = await axios.put(verify_user_api(token));
    return { ...data, status: 'success' };
  } catch ({ response: { data } }) {
    return { ...data, status: 'fail' };
  }
};
export const getAllUsers = async () => {
  // try {
  //   const data = await axiosPrivate.get('/user/allusers');
  //   console.log(data);
  //   return { ...data, status: 'success' };
  // } catch (error) {
  //   console.log(error);
  //   return { status: 'fail' };
  // }
};
export const resentVerification = async email => {
  try {
    const { data } = await axios.post(resend_verification_api, { email });
    return { ...data, status: 'success' };
  } catch ({ response: { data } }) {
    return { ...data, status: 'fail' };
  }
};

export const passwordReset = async (info, callback) => {
  try {
    const { data } = await axios.post(r_psw_rese_api, info);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const resendPasswordReset = async (info, callback) => {
  try {
    const { data } = await axios.post(r_r_psw_rese_api, info);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
