/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, ProgressBar } from '../shared/Elements';
import Loader from '../shared/Loader';

function SignUpVerificationComple() {
  // progressBar.current.classList.remove('hidden');
  const error = {
    message: 'Token expired',
  };
  const status = 'pending';
  return (
    <div className="empty-container d-flex flex-column email-sent text-center">
      {
        status === 'pending' ? (
          <div>
            <ProgressBar />
            <div className="empty-content email-sent d-flex flex-column">
              <div className="d-flex position-relative"><Loader /></div>
            </div>
          </div>
        ) : status === 'fail' ? (
          <div className="empty-content email-sent">
            <h1 className="error"><i className="bi bi-envelope-exclamation" /></h1>
            <h3 className="text-1 mt-3">{`${error.message} 😥`}</h3>
            <small className="text-2">The verification token is only valid for 30 minutes.</small>
            <small className="text-2">Please, make sure to use it before it  expires.</small>
            <div className="f-c-link-b w-auto py-3 d-flex justify-content-center align-items-center">
              <div className="d-flex flex-row">
                <Button label="Get new Token" classes="primary-button mt-3" />
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-content email-sent">
            <h1 className="email-sent"><i className="bi bi-envelope-check" /></h1>
            <h3 className="text-1 mt-3"> Account validated 👍</h3>
            <small className="text-2">Your account has been validated successfully</small>
            <small className="text-2">You will be redirected shortly.</small>
          </div>
        )
      }
    </div>
  );
}
SignUpVerificationComple.defaultProps = {
  email: 'eric@gmail.com',
};

export default SignUpVerificationComple;
