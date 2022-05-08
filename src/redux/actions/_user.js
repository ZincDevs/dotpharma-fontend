/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import {
  USER_VERIRIFICATION,
  RESEND_VERIRIFICATION,
} from './_types';
import {
  resentVerification,
  verifyUser,
} from '../../api';

export const verifyUserAction = token => async dispach => {
  dispach({ type: USER_VERIRIFICATION, status: 'pending' });
  const data = await verifyUser(token);
  dispach({
    type: USER_VERIRIFICATION,
    ...data,
  });
};
export const resentVerificationAction = token => async dispach => {
  dispach({ type: RESEND_VERIRIFICATION, status: 'pending' });
  const data = await resentVerification(token);
  dispach({
    type: RESEND_VERIRIFICATION,
    ...data,
  });
};

// export const getAllUsersAction = token => async dispach => {
//   dispach({ type: GET_ALL_USERS, status: 'pending' });
//   const data = await getAllUsers(token);
//   dispach({
//     type: GET_ALL_USERS,
//     ...data,
//   });
// };
