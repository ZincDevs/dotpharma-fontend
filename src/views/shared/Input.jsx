/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { googleIcon } from '../../assets';

function Text() {
  return (
    <div className="input-text-content">
      <input type="text" />
    </div>
  );
}

function Email({ label, handleOnChange, errors }) {
  return (
    <div className={`py-1 input-text-content w-auto ${errors && 'error'}`}>
      <div className="px-3 py-1">
        <span>{label}</span>
      </div>
      <div className="field w-auto">
        <input
          className="w-100 px-3 py-2"
          type="email"
          onChange={handleOnChange}
          placeholder="example@gmail.com"
        />
      </div>
      {errors && (
        <div className="d-flex px-3 pt-2 error-message">
          {errors.map(({ message }) => (<span>{message}</span>))}
        </div>
      )}
    </div>
  );
}

Email.defaultProps = {
  label: 'Email',
};

function Password({
  label, handleOnChange, errors,
}) {
  return (
    <div className={`py-1 input-text-content w-auto ${errors && 'error'}`}>
      <div className="px-3 py-1">
        <span>{label}</span>
      </div>
      <div className="field w-auto">
        <input
          className="w-100 px-3 py-2"
          type="password"
          onChange={handleOnChange}
          placeholder="********"
        />
      </div>
      {errors && (
        <div className="d-flex px-3 pt-2 error-message">
          {errors.map(({ message }) => (<span>{message}</span>))}
        </div>
      )}
    </div>
  );
}

Password.defaultProps = {
  label: 'Password',
  // errors: [{ message: 'Incorrect password!' }],
  success: true,
};

function Button({ handleOnClick, label, classes }) {
  return (
    <div className="py-1 input-text-content w-auto">
      <button className={`w-100 px-3 py-2 ${classes}`} onChange={handleOnClick}>
        {label}
      </button>
    </div>
  );
}

function GoogleBtn() {
  return (
    <div className="py-2 w-auto input-text-content">
      <a href="">
        <div className="w-100 py-2 px-3 google-btn d-flex justify-content-center align-items-center">
          <div>
            <img src={googleIcon} style={{ width: 30, height: 23 }} alt="google" />
            <span className="px-1">Continue with google</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export {
  Text, Email, Password, Button, GoogleBtn,
};
