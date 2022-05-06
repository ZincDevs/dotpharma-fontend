/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { resentVerificationAction } from '../../redux/actions';
import { Button, ProgressBar } from '../shared/Elements';
import {
  Email,
} from '../shared/Input';
import Loader from '../shared/Loader';
import { Validate } from '../../helpers';
import VerificationSent from './VerificationSent';

function VericationFailed({
  user: { verifyResponse, resendVerificationResponce },
  resentVerificationAction,
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
    } else {
      resentVerificationAction(email);
    }
  };
  useEffect(() => {
    switch (resendVerificationResponce.status) {
      case 'fail': {
        setEmailErrors(resendVerificationResponce.error.email && [{ ...resendVerificationResponce.error.email }]);
        break;
      }
      default:
    }
  }, [resendVerificationResponce]);

  if (resendVerificationResponce.status === 'success') {
    return (<VerificationSent email={email} />);
  }
  return (
    <div className="empty-container d-flex flex-column email-sent">

      {resendVerificationResponce.status === 'pending' ? (
        <div>
          <ProgressBar />
          <div className="empty-content email-sent d-flex flex-column">
            <div className="d-flex position-relative"><Loader /></div>
          </div>
        </div>
      ) : (
        <div className="empty-content email-sent d-flex p-3">
          <div className="v-c-failed p-4 d-flex flex-column text-center justify-content-center align-items-center">
            <h1 className="error"><i className="bi bi-envelope-exclamation" /></h1>
            <h3 className="text-1 mt-3">Verification failed 😥</h3>
            <small className="text-2 px-4 text-center">The provided token is invalid or expired. </small>
            <small className="text-2 px-4 text-center">Please keep in mind that the verfication token is only valid for 5 minutes. </small>
            <div className="v-comp-1 d-flex justify-content-center align-items-center mt-3">
              <div>
                <form onSubmit={handleResend}>
                  <Email handleOnChange={handleEmailChange} value={email} errors={emailErrors} labeled={false} />
                  <Button label="Resend verification" classes={`primary-button ${canContinue ? '' : 'disabled'} mt-3`} />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>

  );
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { resentVerificationAction })(VericationFailed);
