/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import QueryString from 'query-string';
import { useLocation, Navigate } from 'react-router-dom';
import { Button, ProgressBar } from '../shared/Elements';
import { Validate } from '../../helpers';
import Loader from '../shared/Loader';
import { verifyUserAction } from '../../redux/actions';
import {
  Email,
} from '../shared/Input';

function Time({ handleRedirect }) {
  const [rTime, setRTime] = useState(10);
  const countDown = setInterval(() => { setRTime(rTime - 1); }, 1000);
  if (rTime === 0) {
    clearInterval(countDown);
    handleRedirect();
  }
  return (
    <span>{`${rTime}s`}</span>
  );
}

function VericationFailed({
  verifyResponse,
}) {
  const [email, setEmail] = useState();
  const [emailErrors, setEmailErrors] = useState(null);
  const canContinue = !!(!emailErrors && email);
  const handleEmailChange = e => {
    setEmail(e.target.value);
    const { error } = Validate('signup', { email: e.target.value });
    setEmailErrors(error ? error.details : undefined);
  };
  const ValidateInputs = () => {
    handleEmailChange({ target: { value: email } });
  };
  const handleResend = e => {
    e.preventDefault();
    if (!canContinue) {
      ValidateInputs();
    }
    console.log('Resend');
  };
  return (
    <div className="empty-content email-sent">
      <h1 className="error"><i className="bi bi-envelope-exclamation" /></h1>
      <h3 className="text-1 mt-3">{`${verifyResponse.error.message} 😥`}</h3>
      <small className="text-2 px-5 text-center">The provided toke is invalid or expired. </small>
      <small className="text-2 px-5 text-center">Please keep in mind that the verfication token is only valid for 30 minutes. </small>
      <div className="v-comp-1 d-flex justify-content-center align-items-center mt-3">
        <div>
          <form onSubmit={handleResend}>
            <Email handleOnChange={handleEmailChange} value={email} errors={emailErrors} labeled={false} />
            <Button label="Resend verification" classes={`primary-button ${canContinue ? '' : 'disabled'} mt-3`} />
          </form>
        </div>
      </div>
    </div>
  );
}

function SignUpVerificationComple({ verifyUserAction, user: { verifyResponse } }) {
  const [status, setStatus] = useState('pending');
  const [done, setDone] = useState(false);
  const location = useLocation();
  const handleRedirect = () => {
    setDone(true);
  };

  useEffect(() => {
    const { token } = QueryString.parse(location.search);
    verifyUserAction(token);
  }, []);
  useEffect(() => {
    switch (verifyResponse.status) {
      case 'success': {
        setStatus('success');
        break;
      }
      case 'pending': {
        setStatus('pending');
        break;
      }
      case 'fail': {
        setStatus('fail');
        break;
      }
      default:
    }
  }, [verifyResponse]);

  if (done) {
    return (
      <Navigate to="/login" />
    );
  }

  return (
    <div className="empty-container d-flex flex-column email-sent">
      {
        status === 'pending' ? (
          <div>
            <ProgressBar />
            <div className="empty-content email-sent d-flex flex-column">
              <div className="d-flex position-relative"><Loader /></div>
            </div>
          </div>
        ) : status === 'fail' ? (
          <VericationFailed
            verifyResponse={verifyResponse}
          />
        ) : status === 'success' ? (
          <div className="empty-content email-sent">
            <h1 className="email-sent"><i className="bi bi-envelope-check" /></h1>
            <h3 className="text-1 mt-3"> Account validated 👍</h3>
            <small className="text-2">Your account has been validated successfully</small>
            <small className="text-2">
              You will be redirected in
              {' '}
              <Time handleRedirect={handleRedirect} />
            </small>
          </div>
        ) : (<div />)
      }
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { verifyUserAction })(SignUpVerificationComple);
