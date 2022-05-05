/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ContentHead } from '../../shared/Contents';
import { Email, Password, TCPRemember } from '../../shared/Input';
import { Button, ProgressBar } from '../../shared/Elements';
import { adminLogInAction } from '../../../redux/actions';

function Login({ auth: { adminLoginResponse }, adminLogInAction }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailErrors, setEmailErrors] = useState(null);
  const [passwordErrors, setPasswordErrors] = useState(null);
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handleLogin = e => {
    e.preventDefault();
    const data = { email, password };
    adminLogInAction(data);
  };
  useEffect(() => {
    switch (adminLoginResponse.status) {
      case 'success': {
        setEmailErrors(undefined);
        setPasswordErrors(undefined);
        break;
      }
      case 'fail': {
        setEmailErrors(adminLoginResponse.error.email && [{ ...adminLoginResponse.error.email }]);
        setPasswordErrors(adminLoginResponse.error.password && [{ ...adminLoginResponse.error.password }]);
        break;
      }
      default:
    }
  }, [adminLoginResponse]);
  return (
    <div className="loginContainer">
      <div className="row loginContent">
        <div className="col-12 right d-flex justify-content-center align-items-center">
          <div className="c-f-content p-4">
            {adminLoginResponse.status === 'pending' && (<ProgressBar />)}
            <div className="py-4 px-5">
              <ContentHead label="Sign In 🔐" />
              <div className="c-content-fields w-auto">
                <form onSubmit={handleLogin}>
                  <Email
                    handleOnChange={handleEmailChange}
                    value={email}
                    errors={emailErrors}
                    labeled
                  />
                  <Password
                    handleOnChange={handlePasswordChange}
                    value={password}
                    errors={passwordErrors}
                  />
                  <TCPRemember />
                  <div className="c-c-link px-3 py-2 d-flex flex-row-reverse w-auto">
                    <Link to="/admin/login/password-reset">Forgot password?</Link>
                  </div>
                  <Button label="Sign In" classes="primary-button" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { adminLogInAction })(Login);
