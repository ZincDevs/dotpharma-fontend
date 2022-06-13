/* eslint-disable import/prefer-default-export */
import { getMedicines } from '../../api';
import {
  GET_MEDICINES,
} from './_types';

export const getMedicinesAction = ({ page, limit }, dispach) => {
  dispach({ type: GET_MEDICINES, status: 'pending' });
  getMedicines({ page, limit }, (err, data) => {
    if (err) {
      dispach({
        type: GET_MEDICINES,
        status: 'fail',
        message: 'Something went wrong.😞',
      });
    } else {
      dispach({ type: GET_MEDICINES, medicines: [...data], status: 'success' });
    }
  });
};
