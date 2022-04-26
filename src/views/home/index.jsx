/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './layouts/Header';
import Home from './fragments/Home';
import Empty from '../shared/Empty';

export default function index() {
  return (
    <div className="home-container">
      <Header />
      <Home />
      <Empty />
    </div>
  );
}
