/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../shared/Logo';
import {
  Email, Password, Button, GoogleBtn,
} from '../shared/Input';
import Line from '../shared/Line';
import { Welcome } from '../shared/Content';

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="row loginContent">
        <div className="col-6 d-none d-lg-flex loginLeft">
          <Welcome />
        </div>
        <div className="col-lg-6 col-12 loginRight d-flex justify-content-center align-items-center">
          <div className="c-f-content">
            <div className="c-header">
              <div className="w-auto d-flex justify-content-center align-items-center py-2">
                <Logo />
              </div>
              <div className="w-auto d-flex justify-content-center align-items-center py-2">
                <h3 className="text-1">Login 🤞</h3>
              </div>
            </div>
            <div className="c-content-fields w-auto">
              <GoogleBtn />
              <Line label="Or Log in with Email" />
              <Email handleOnChange={() => {}} />
              <Password handleOnChange={() => {}} />
              <div className="c-c-link px-3 py-2 d-flex flex-row-reverse w-auto">
                <Link to="/password-reset">Forgot password?</Link>
              </div>
              <Button label="Log In" classes="primary-button" />
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
