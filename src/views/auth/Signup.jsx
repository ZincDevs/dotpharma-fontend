/* eslint-disable max-len */
/* eslint-disable brace-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Validate } from '../../helpers';
import {
  Email, Password, TCPPAgree,
} from '../shared/Input';
import { Button, GoogleBtn, ProgressBar } from '../shared/Elements';
import Line from '../shared/Line';
import { ContentHead } from '../shared/Contents';

export default function SignUp() {
  const progressBar = useRef();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [agreeToTC, setAgreeToTC] = useState(false);
  const [emailErrors, setEmailErrors] = useState(null);
  const [passwordErrors, setPasswordErrors] = useState(null);
  const [agreeErrors, setAgreeErrors] = useState(null);
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
    if (!canContinue) { ValidateInputs(); }
  };

  return (
    <div className="signUpContainer loginContainer">
      <div className="row loginContent">
        <div className="col-12 right d-flex justify-content-center align-items-center">
          <div className="c-f-content">
            <ProgressBar ref={progressBar} />
            <div className="c-f-i-content py-4 px-5">
              <ContentHead label="Sign Up 🤞" />
              <div className="c-content-fields w-auto">
                <form onSubmit={handleSignUp}>
                  <Email handleOnChange={handleEmailChange} value={email} errors={emailErrors} />
                  <Password
                    handleOnChange={handlePasswordChange}
                    value={password}
                    errors={passwordErrors}
                  />
                  <TCPPAgree handleAgree={handleAgree} errors={agreeErrors} />
                  <Button label="Sign Up" classes={`primary-button ${canContinue ? '' : 'disabled'} mt-3`} />
                  <Line label="Or" />
                  <GoogleBtn />
                </form>
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
    </div>
  );
}
