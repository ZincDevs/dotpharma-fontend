import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import key from 'uniqid';
import Home from './home/index';
import Login from './auth/Login';
import AdminLogin from './admin/Login';
import Signup from './auth/Signup';
import PRAdmin from './admin/PRAdmin';
import PasswordReset from './auth/PasswordReset';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
