/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import QueryString from 'query-string';
import { useLocation, Navigate } from 'react-router-dom';
import { ProgressBar } from '../shared/Elements';
import Loader from '../shared/Loader';
import { verifyUserAction } from '../../redux/actions';
import VerificationFailed from './VerificationFailed';

function SignUpVerificationComple({ verifyUserAction, user: { verifyResponse } }) {
  const [status, setStatus] = useState('pending');
  const [done, setDone] = useState(false);
  const location = useLocation();
  const handleRedirect = () => {
    setTimeout(() => {
      setDone(true);
    }, 8000);
  };

  useEffect(() => {
    const { token } = QueryString.parse(location.search);
    verifyUserAction(token);
  }, []);
  useEffect(() => {
    switch (verifyResponse.status) {
      case 'success': {
        setStatus('success');
        handleRedirect();
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
  if (status === 'fail') {
    return (<VerificationFailed />);
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
        ) : status === 'success' ? (
          <div className="empty-content email-sent">
            <h1 className="email-sent"><i className="bi bi-envelope-check" /></h1>
            <h3 className="text-1 mt-3"> Account validated 👍</h3>
            <small className="text-2">Your account has been validated successfully</small>
            <small className="text-2">
              You will be redirected in 5 seconds
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
