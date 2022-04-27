import React from 'react';
import Banner from '../../contents/Banner';
import Products from '../../../products/Products';
import GuestHeader from '../../layouts/header/GuestHeader';

export default function GuestHome() {
  return (
    <div>
      <GuestHeader />
      <Banner />
      <Products />
    </div>
  );
}
