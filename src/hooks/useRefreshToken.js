/* eslint-disable camelcase */
/* eslint-disable import/no-cycle */
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';
import { Constants } from '../helpers/index';
import axios from '../api/_axios';

const { refresh_token_api } = Constants;

function useRefreshToken() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const refresh = async () => {
    try {
      const res = await axios.get(refresh_token_api);
      setAuth(prev => {
        console.log('Previos token', JSON.stringify(prev));
        console.log('New token', res.data.access_token);
        return {
          ...prev,
          access_token: res.data.access_token,
          userData: res.data.userData,
        };
      });
      return res.data.access_token;
    } catch (error) {
      if (error.status === (401 || 403)) navigate('/login', { state: { from: location }, replace: true });
      return Promise.refect(error);
    }
  };
  return refresh;
}

export default useRefreshToken;
