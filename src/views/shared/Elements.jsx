/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import { googleIcon } from '../../assets';

function Button({ handleOnClick, label, classes }) {
  return (
    <div className="py-1 input-text-content w-auto">
      <button type="submit" className={`w-100 px-3 py-3 ${classes}`} onChange={handleOnClick}>
        {label}
      </button>
    </div>
  );
}

function GoogleBtn() {
  return (
    <div className="py-2 w-auto input-text-content">
      <a href="#">
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

function ProgressBar({ ref }) {
  return (
    <div ref={ref} className="hidden">
      <div className="progress">
        <div className="indeterminate"> </div>
      </div>
    </div>
  );
}

export {
  Button,
  GoogleBtn,
  ProgressBar,
};
