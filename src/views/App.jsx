/* eslint-disable no-lone-blocks */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import key from 'uniqid';
import Login from './auth/Login';
import AdminLogin from './admin/Login';
import Signup from './auth/Signup';
import PRAdmin from './admin/PRAdmin';
import PasswordReset from './auth/PasswordReset';
import NotFound from './shared/NotFound';
import Verification from './auth/VerificationComplete';
import TermsAndConditions from './settings/TermsAndConditions';
import PrivacyPolicy from './settings/PrivacyPolicy';
import Services from './home/fragments/Services';
import HealthTips from './home/fragments/HealthTips';
import Layout from './layouts/Layout';
import RequireAuth from './routes/RequireAuth';
import RequireAuthHome from './routes/RequireAuthHome';
import UserHome from './home/fragments/home/UserHome';
// import ContactUs from './communication/contactus/ContactUs';

{ /* <ContactUs /> */ }

function App() {
  return (
    <Routes>

      <Route path="/" key={key()} element={<Layout />}>

        {/* Public Routes */}
        <Route path="/login" key={key()} element={<Login />} />
        <Route path="/login/password-reset" key={key()} element={<PasswordReset />} />
        <Route path="/admin/login" key={key()} element={<AdminLogin />} />
        <Route path="/admin/login/password-reset" key={key()} element={<PRAdmin />} />
        <Route path="/signup" key={key()} element={<Signup />} />
        <Route path="/signup/verify" key={key()} element={<Verification />} />
        <Route path="/terms-and-conditions" key={key()} element={<TermsAndConditions />} />
        <Route path="/privacy-policy" key={key()} element={<PrivacyPolicy />} />

        {/* Private Routes */}
        <Route element={<RequireAuthHome />}>
          <Route path="/" key={key()} element={<UserHome />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="/cart" key={key()} element={<Services />} />
          <Route path="/orders" key={key()} element={<Services />} />
          <Route path="/medecines" key={key()} element={<Services />} />
          <Route path="/services" key={key()} element={<Services />} />
          <Route path="/health-tips" key={key()} element={<HealthTips />} />
        </Route>

        <Route path="*" key={key()} element={<NotFound />} />

      </Route>
    </Routes>
  );
}

export default App;
