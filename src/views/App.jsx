import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import key from 'uniqid';
import Home from './home/index';
import Login from './auth/Login';
import AdminLogin from './admin/Login';
import Signup from './auth/Signup';
import PRAdmin from './admin/PRAdmin';
import PasswordReset from './auth/PasswordReset';
import NotFound from './shared/NotFound';
import Verification from './auth/VerificationComplete';
import TermsAndConditions from './settings/TermsAndConditions';
import PrivacyPolicy from './settings/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" key={key()} element={<Home />} />
        <Route path="/login" key={key()} element={<Login />} />
        <Route path="/login/password-reset" key={key()} element={<PasswordReset />} />
        <Route path="/admin/login" key={key()} element={<AdminLogin />} />
        <Route path="/admin/login/password-reset" key={key()} element={<PRAdmin />} />

        <Route path="/signup" key={key()} element={<Signup />} />
        <Route path="/signup/verify" key={key()} element={<Verification />} />

        <Route path="/terms-and-conditions" key={key()} element={<TermsAndConditions />} />
        <Route path="/privacy-policy" key={key()} element={<PrivacyPolicy />} />

        <Route path="*" key={key()} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
