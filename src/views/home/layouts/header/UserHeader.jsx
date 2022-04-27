/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import key from 'uniqid';
import Logo from '../../../shared/Logo';
import ProfilePic from '../../../shared/ProfilePic';
import MenuItem from './items/MenuItem';

function UserHeader({ menuItems }) {
  return (
    <div className="user-header">
      <header className="p-3">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="user-logo d-flex justify-content-center align-items-center" href="#">
              <Logo with={40} height={40} />
              <span>DOTPHARMA</span>
            </div>

            <div className="d-flex">
              <form className="d-none d-md-block px-3">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
              </form>

              <div className="dropdown text-end">
                <ProfilePic />
                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                  {menuItems.map(item => (<MenuItem key={key()} item={item} />))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

UserHeader.defaultProps = {
  menuItems: [
    {
      name: 'Profile',
      icon: 'bi bi-person',
      to: '/profile',
    },
    {
      name: 'Cart',
      icon: 'bi bi-cart-check',
      count: '4',
      to: '/cart',
    },
    {
      name: 'Health Tips',
      icon: 'bi bi-file-medical',
      to: '/health-tips',
    },
    {
      name: 'Logout',
      icon: 'bi bi-box-arrow-left',
    },
  ],
};

export default UserHeader;
