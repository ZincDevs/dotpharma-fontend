const BASE = `${process.env.REACT_APP_API_URL}/api`;

export default {
  login_api: `${BASE}/user/login`,
  signup_api: `${BASE}/user/signup`,
};
