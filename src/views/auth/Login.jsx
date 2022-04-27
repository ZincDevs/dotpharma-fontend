/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Email, Password, TCPRemember,
} from '../shared/Input';
import { Button, GoogleBtn, ProgressBar } from '../shared/Elements';
import Line from '../shared/Line';
import { ContentHead } from '../shared/Contents';
import { logInAction } from '../../redux/actions';
import useAuth from '../hooks/useAuth';

function Login({ auth: { loginResponse }, logInAction }) {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
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
    logInAction(data);
  };
  const handleLoginSuccess = token => {
    setAuth({ email, password, token });
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 3000);
  };

  useEffect(() => {
    switch (loginResponse.status) {
      case 'success': {
        setEmailErrors(undefined);
        setPasswordErrors(undefined);
        handleLoginSuccess(loginResponse.token);
        break;
      }
      case 'fail': {
        setEmailErrors(loginResponse.error.email && [{ ...loginResponse.error.email }]);
        setPasswordErrors(loginResponse.error.password && [{ ...loginResponse.error.password }]);
        break;
      }
      default:
    }
  }, [loginResponse]);

  return (
    <div className="loginContainer">
      <div className="row loginContent">
        <div className="col-12 right d-flex justify-content-center align-items-center">
          <div className="c-f-content">
            {loginResponse.status === 'pending' && (<ProgressBar />)}
            <div className="py-4 px-5">
              <ContentHead label="Sign In 🤞" />
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
                    <Link to="/login/password-reset">Forgot password?</Link>
                  </div>
                  <Button label="Sign In" classes="primary-button" />
                  <Line label="Or Sign In with Email" />
                  <GoogleBtn />
                </form>
              </div>
              <div className="f-c-link-b w-auto py-3 d-flex justify-content-center align-items-center">
                <div className="d-flex flex-row">
                  <span className="px-1">Don&apos;t an account? </span>
                  <Link to="/signup">Sign Up</Link>
                </div>
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

export default connect(mapStateToProps, { logInAction })(Login);
