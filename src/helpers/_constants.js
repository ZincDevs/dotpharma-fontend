const BASE = `${process.env.REACT_APP_API_URL}/api`;

export default {
  login_api: `${BASE}/user/login`,
  admin_login_api: `${BASE}/user/admin/login`,
  signup_api: `${BASE}/user/signup`,
  verify_user_api: token => `${BASE}/user/activateuser/${token}`,
  resend_verification_api: `${BASE}/user/resendverification`,
};
