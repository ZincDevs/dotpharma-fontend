/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import { USER_SIGNUP, USER_LOGIN, ADMIN_USER_LOGIN } from './_types';
import { signUp, logIn } from '../../api';

export const signUpAction = user => async dispach => {
  dispach({ type: USER_SIGNUP, status: 'pending' });
  const data = await signUp(user);
  dispach({
    type: USER_SIGNUP,
    ...data,
  });
};

export const logInAction = auth => async dispach => {
  dispach({ type: USER_LOGIN, status: 'pending' });
  const data = await logIn(auth);
  dispach({
    type: USER_LOGIN,
    ...data,
  });
};

export const adminLogInAction = auth => async dispach => {
  dispach({ type: ADMIN_USER_LOGIN, status: 'pending' });
  const data = await logIn(auth, true);
  dispach({
    type: ADMIN_USER_LOGIN,
    ...data,
  });
};

export const logOut = () => async dispach => {
  dispach({
    type: 'USER_LOGOUT',
  });
};