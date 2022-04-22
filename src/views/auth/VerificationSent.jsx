/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function SignUpVerificationSent({ email }) {
  return (
    <div className="empty-container email-sent text-center">
      <div className="empty-content">
        <h1 className="email-sent"><i className="bi bi-envelope-paper" /></h1>
        <h3 className="text-1 mt-3"> Verfication sent 👍</h3>
        <small className="text-2">{`Verfication mail has been sent to your email(${email})`}</small>
        <small className="text-2">Please go to your email and click on Verify button.</small>
        <div className="f-c-link-b w-auto py-3 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-row">
            <span className="px-1">Did not reveive email? </span>
            <Link to="/login">resend</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
SignUpVerificationSent.defaultProps = {
  email: 'eric@gmail.com',
};

export default SignUpVerificationSent;
