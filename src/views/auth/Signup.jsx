/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable brace-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Validate } from '../../helpers';
import {
  Email, Password, TCPPAgree, Text,
} from '../shared/Input';
import { Button, GoogleBtn, ProgressBar } from '../shared/Elements';
import Line from '../shared/Line';
import { ContentHead } from '../shared/Contents';
import { signUpAction } from '../../redux/actions';
import VerificationSent from './VerificationSent';

function SignUp({ auth: { signupResponse }, signUpAction }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [agreeToTC, setAgreeToTC] = useState(false);
  const [emailErrors, setEmailErrors] = useState(null);
  const [passwordErrors, setPasswordErrors] = useState(null);
  const [agreeErrors, setAgreeErrors] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState();
  const form = useRef();
  const canContinue = !!(!emailErrors && !passwordErrors && email && password && agreeToTC);

  const handleEmailChange = e => {
    setEmail(e.target.value);
    const { error } = Validate('signup', { email: e.target.value });
    setEmailErrors(error ? error.details : undefined);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
    const { error } = Validate('signup', { password: e.target.value });
    setPasswordErrors(error ? error.details : undefined);
  };
  const handleAgree = e => {
    const { checked } = e.target;
    setAgreeToTC(checked);
    setAgreeErrors(checked ? undefined : [{ message: 'Please confirm that you agree to our terms and conditions.' }]);
  };
  const ValidateInputs = () => {
    handleEmailChange({ target: { value: email } });
    handlePasswordChange({ target: { value: password } });
    handleAgree({ target: { checked: agreeToTC } });
  };
  const handleSignUp = e => {
    e.preventDefault();
    if (signupResponse.status !== 'pending') {
      if (!canContinue) {
        ValidateInputs();
      } else {
        const data = { email, password };
        signUpAction(data);
      }
    }
  };
  const handleSignupSuccess = () => {
    setSignupSuccess(true);
  };

  useEffect(() => {
    switch (signupResponse.status) {
      case 'success': {
        handleSignupSuccess();
        break;
      }
      case 'fail': {
        setEmailErrors(signupResponse.error.email && [{ ...signupResponse.error.email }]);
        setPasswordErrors(signupResponse.error.password && [{ ...signupResponse.error.password }]);
        break;
      }
      default:
    }
  }, [signupResponse]);

  if (signupSuccess) {
    return (<VerificationSent email={email} />);
  }

  return (
    <div className="signUpContainer loginContainer">
      <div className="row loginContent">
        <div className="col-12 right d-flex justify-content-center align-items-center">
          <div className="c-f-u-content">
            <ContentHead />
            <div className="c-f-content">
              {signupResponse.status === 'pending' && (<ProgressBar />)}
              <div className="c-f-i-content py-4 px-5">
                <div className="c-content-fields w-auto">
                  <h6>Sign Up 🤞</h6>
                  <form
                    onSubmit={handleSignUp}
                    className="needs-validation"
                    ref={form}
                  >
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
                    <TCPPAgree handleAgree={handleAgree} errors={agreeErrors} />
                    <Button label="Sign Up" classes={`primary-button ${(!canContinue || signupResponse.status === 'pending') && 'disabled'} mt-3`} />
                    <Line label="Or" />
                    <GoogleBtn />
                  </form>
                </div>
              </div>
            </div>
            <div className="f-c-link-b w-auto py-3 d-flex justify-content-center align-items-center">
              <div className="d-flex flex-row">
                <span className="px-1">Already have an account? </span>
                <Link to="/login">Sign In</Link>
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

export default connect(mapStateToProps, { signUpAction })(SignUp);
