import React from 'react';
import { Link } from 'react-router-dom';
import { ContentHead } from '../shared/Contents';
import { Email, Password, Button } from '../shared/Input';

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="row loginContent">
        <div className="col-12 right d-flex justify-content-center align-items-center">
          <div className="c-f-content p-4">
            <ContentHead label="Sign In 🔐" />
            <div className="c-content-fields w-auto">
              <Email handleOnChange={() => {}} />
              <Password handleOnChange={() => {}} />
              <div className="c-c-link px-3 py-2 d-flex flex-row-reverse w-auto">
                <Link to="/admin/login/password-reset">Forgot password?</Link>
              </div>
              <Button label="Sign In" classes="primary-button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
