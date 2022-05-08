/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import Products from '../../../products/Products';
import Path from '../../../shared/Path';
import UserHeader from '../../layouts/header/UserHeader';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';

export default function GuestHome() {
  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get('/user/allusers', {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  console.log(users);
  return (
    <div>
      <UserHeader />
      <Path />
      <Products />
    </div>
  );
}
