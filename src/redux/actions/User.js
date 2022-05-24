/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
import { getMyProfile } from '../../api';
import {
  GET_MY_PROFILE,
} from './_types';

export const getMyProfileAction = (axios, dispach) => {
  dispach({ type: GET_MY_PROFILE, status: 'pending' });
  getMyProfile(axios, (err, data) => {
    console.log(err, data);
    if (err) {
      const resScode = err?.response?.status;
      resScode === 401 ? dispach({ type: GET_MY_PROFILE, status: 'fail', message: 'Unauthorized 😞' })
        : resScode === 403 ? dispach({ type: GET_MY_PROFILE, status: 'fail', message: 'Forbidden 😞' })
          : dispach({ type: GET_MY_PROFILE, status: 'fail', message: 'Something went wrong. 😞' });
    } else {
      dispach({ type: GET_MY_PROFILE, user: data, status: 'success' });
    }
  });
};
