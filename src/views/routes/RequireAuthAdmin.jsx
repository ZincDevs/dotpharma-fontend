import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function RequireAuth() {
  const { auth } = useAuth();
  // console.log(auth);
  const location = useLocation();
  return (
    auth?.access_token && auth?.userData?.u_role === 'SUPER_ADMIN'
      ? <Outlet />
      : <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
}

export default RequireAuth;
