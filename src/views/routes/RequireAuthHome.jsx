import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import GuestHome from '../home/fragments/home/GuestHome';

function RequireAuthHome() {
  const { auth } = useAuth();
  return (
    auth?.token
      ? <Outlet />
      : <GuestHome />
  );
}

export default RequireAuthHome;
