/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import { USER_VERIRIFICATION } from './_types';

export const verifyUserAction = token => async dispach => {
  dispach({ type: USER_VERIRIFICATION, status: 'pending' });
  const data = await verifyUserAction(token);
  dispach({
    type: USER_VERIRIFICATION,
    ...data,
  });
  // try {
  //   const data = await verifyUserAction(token);
  //   dispach({
  //     type: USER_VERIRIFICATION,
  //     payload: data,
  //     status: 'success',
  //   });
  // } catch ({ response: { data } }) {
  //   dispach({ type: USER_VERIRIFICATION, payload: data, status: 'fail' });
  // }
};
