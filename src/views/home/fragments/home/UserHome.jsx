import React from 'react';
import Products from '../../../products/Products';
import Path from '../../../shared/Path';
import UserHeader from '../../layouts/header/UserHeader';

export default function GuestHome() {
  return (
    <div>
      <UserHeader />
      <Path />
      <Products />
    </div>
  );
}
