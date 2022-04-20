/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../shared/Logo';

function SignUpVerification({ email }) {
  return (
    <div className="empty-container text-center">
      <div className="empty-content">
        <Logo />
        <h3 className="text-1 mt-3"> Verfication sent 🤞 </h3>
        <p className="text-2">{`Verfication mail has been sent to your email(${email}), Please go to your email and click on Verify button.`}</p>
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
SignUpVerification.defaultProps = {
  email: 'eric@gmail.com',
};

export default SignUpVerification;
