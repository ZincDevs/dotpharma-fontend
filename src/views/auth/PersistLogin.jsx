/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-expressions */
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRefreshToken from '../../hooks/useRefreshToken';
import useAuth from '../../hooks/useAuth';
import Empty from '../shared/Empty';

function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        // navigate('/login', { state: { from: location }, replace: true });
      }
    };
    !auth.access_token ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log(`isLoading ${isLoading}`);
    console.log(`accessToken ${auth?.access_token}`);
  }, [isLoading]);

  return (
    <>
      {isLoading ? <Empty /> : <Outlet />}
    </>
  );
}

export default PersistLogin;
