/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Email, Password, Button, GoogleBtn,
} from '../shared/Input';
import Line from '../shared/Line';
import { Welcome, ContentHead } from '../shared/Contents';

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="row loginContent">
        <div className="col-6 d-none d-lg-flex left">
          <Welcome />
        </div>
        <div className="col-lg-6 col-12 right d-flex justify-content-center align-items-center">
          <div className="c-f-content">
            <ContentHead label="Sign In 🤞" />
            <div className="c-content-fields w-auto">
              <GoogleBtn />
              <Line label="Or Sign In with Email" />
              <Email handleOnChange={() => {}} />
              <Password handleOnChange={() => {}} />
              <div className="c-c-link px-3 py-2 d-flex flex-row-reverse w-auto">
                <Link to="/password-reset">Forgot password?</Link>
              </div>
              <Button label="Sign In" classes="primary-button" />
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
  );
}
