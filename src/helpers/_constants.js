export default {
  t_key_name: 'dotpharma-key-c-u',
  login_api: '/user/login',
  admin_login_api: '/user/admin/login',
  signup_api: '/user/signup',
  verify_user_api: token => `/user/activateuser/${token}`,
  resend_verification_api: '/user/resendverification',
};
