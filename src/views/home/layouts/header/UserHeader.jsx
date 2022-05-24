/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import key from 'uniqid';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import Logo from '../../../shared/Logo';
import ProfilePic from '../../../shared/ProfilePic';
import MenuItem from './items/MenuItem';
import NotificationItem from './items/NotificationItem';
import CartItem from './items/CartItem';
import useLogout from '../../../../hooks/useLogout';
import { getMyProfileAction } from '../../../../redux/actions/User';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';

function UserHeader({ profile, notifications }) {
  const dispatch = useDispatch();
  const logout = useLogout();
  const navigate = useNavigate();
  const cart = profile?.cart;
  // console.log(profile?.u_email?.split('@')[0]);
  // console.log(profile?.patients[0]?.p_name);
  const pname = profile?.u_email?.split('@')[0];
  const menuItems = [
    {
      name: 'Profile',
      icon: 'bi bi-person',
      handleOnclick: () => navigate('/profile'),
    },
    {
      name: 'Notifications',
      icon: 'bi bi-bell',
      count: '6',
      handleOnclick: () => navigate('/notifications'),
    },
    {
      name: 'Cart',
      icon: 'bi bi-cart-check',
      count: '4',
      handleOnclick: () => navigate('/cart'),
    },
    {
      name: 'Health Tips',
      icon: 'bi bi-file-medical',
      handleOnclick: () => navigate('/health-tips'),
    },
    {
      name: 'Logout',
      icon: 'bi bi-box-arrow-left',
      handleOnclick: () => logout(),
    },
  ];
  return (
    <div className="user-header">
      <header className="py-2">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="user-logo d-flex justify-content-center align-items-center" href="#">
              <Logo with={30} height={30} white />
              <span className="d-none d-sm-block">DOTPHARMA</span>
            </div>

            <div className="d-flex">
              {/* <form className="d-none d-md-block px-3">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
              </form> */}
              <div className="dropdown text-end px-4 cart d-flex align-items-center">
                <span
                  className="micon"
                  id="cart"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className={`bi bi-cart ${cart?.length && 'has_some'}`} />
                </span>
                <ul className="dropdown-menu text-small" aria-labelledby="cart">
                  {_.map(cart, item => (<CartItem key={key()} item={item} />))}
                  <li>
                    <Link to="/cart" className="notifications-item">
                      <div className="d-flex py-2 justify-content-center">
                        <span>Checkout</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown text-end px-4 notification d-flex align-items-center">
                <span
                  className="micon"
                  id="notifications"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-bell has_some" />
                </span>
                <ul className="dropdown-menu w-sm-100 text-small" aria-labelledby="notifications">
                  {notifications.map(item => (<NotificationItem key={key()} item={item} />))}
                  <li className="notifications-item">
                    <Link to="/notifications" className="notifications-item">
                      <div className="d-flex py-2 justify-content-center">
                        <span> View all</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown text-end px-4">
                <div
                  className="profile-pic-button d-flex align-items-center justify-content-center py-2 px-3"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="d-block d-md-none"><span><i className="bi bi-list" /></span></div>
                  <div className="d-none d-md-block"><span><i className="bi bi-person" /></span></div>
                  <div className="px-2 d-none d-md-block"><small>{pname || ''}</small></div>
                  <div className="d-none d-md-block"><span><i className="bi bi-chevron-down" /></span></div>
                </div>
                {/* <ProfilePic /> */}
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

  notifications: [
    {
      title: 'Welcome ✨',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      time: '3m',
    },
    {
      title: 'Did you know!',
      body: 'Lorem ipsum dolor sit amet, consectetur amet, consectetur adipisicing...',
      time: '2h',
    },
    {
      title: 'Welcome to!',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      time: '4d',
    },
  ],
};

export default UserHeader;
