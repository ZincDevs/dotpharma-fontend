export default {
  t_key_name: 'dotpharma-key-c-u',
  login_api: '/user/login',
  refresh_token_api: '/user/refresh-token',
  admin_login_api: '/user/admin/login',
  signup_api: '/user/signup',
  logout_api: 'user/logout',
  get_all_users_api: 'user/allusers',
  verify_user_api: token => `/user/activateuser/${token}`,
  resend_verification_api: '/user/resendverification',
};
