/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Email, Password, Button, GoogleBtn,
} from '../shared/Input';
import Line from '../shared/Line';
import { ContentHead } from '../shared/Contents';

export default function SignUp() {
  return (
    <div className="signUpContainer loginContainer">
      <div className="row loginContent">
        <div className="col-12 right d-flex justify-content-center align-items-center">
          <div className="c-f-content p-4">
            <ContentHead label="Sign Up 🤞" />
            <div className="c-content-fields w-auto">
              <GoogleBtn />
              <Line label="Or Sign Up with Email" />
              <Email handleOnChange={() => {}} />
              <Password handleOnChange={() => {}} />
              <Button label="Sign Up" classes="primary-button mt-3" />
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
