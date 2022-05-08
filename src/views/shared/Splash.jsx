import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Logo from './Logo';

export default function Splash() {
  return (
    <div className="splash empty-container text-center">
      <div className="empty-content">
        <Logo />
        <h3 className="mt-3">
          DOT
          <strong>PHARMA</strong>
        </h3>
        <div className="mt-3">
          <ThreeDots
            color="#2B8DD0"
            height="30"
            width="50"
          />
        </div>
      </div>
    </div>
  );
}
