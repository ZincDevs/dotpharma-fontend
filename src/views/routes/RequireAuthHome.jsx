import { Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import GuestHome from '../home/fragments/home/GuestHome';

function RequireAuthHome() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    auth?.access_token
      ? <Outlet />
      : <GuestHome />
  );
}

export default RequireAuthHome;
