/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-this-in-sfc */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Logo from '../../../shared/Logo';

export default function GuestHeader({ activeMenu }) {
  useEffect(() => {
    $(window).scroll(() => {
      const windowTop = $(window).scrollTop() + 1;
      if (windowTop > 150) {
        $('#nav-bar-header')
          .addClass('header-scrolled animated fadeInDown');
        $('#nav-menu-lists').addClass('nav-menu-lists-scrolled');
      } else {
        $('#nav-bar-header')
          .removeClass('header-scrolled animated fadeInDown');
        $('#nav-menu-lists').removeClass('nav-menu-lists-scrolled');
      }
    });
  }, []);
  const handleOpenMenu = () => {
    if ($('.nav-menu-lists')[0].classList.contains('open-menu')) {
      $('.nav-menu-lists')[0].classList.remove('open-menu');
      $('.nav-icon')[0].classList.remove('open-menu-btn');
    } else {
      $('.nav-menu-lists')[0].classList.add('open-menu');
      $('.nav-icon')[0].classList.add('open-menu-btn');
    }
  };
  return (
    <div>
      <header id="nav-bar-header" className="main_menu">
        <div className="container">
          <div className="df py-3 py-md-2 d-flex flex-row justify-content-between align-items-center">
            <div className="logo d-flex justify-content-center align-items-center" href="#">
              <Logo with={40} height={40} />
              <span>DOTPHARMA</span>
            </div>
            <div className="menu-btn d-flex d-md-none justify-content-center align-items-center">
              <div onClick={handleOpenMenu} id="menu-btn-action" className="nav-icon">
                <span className="in-d" />
              </div>
            </div>
            <nav className="nav-links pt-3 d-none d-md-flex justify-content-center align-items-center">
              <ul>
                <li className={activeMenu === 'home' ? 'activepage' : ''}>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className={activeMenu === 'service' ? 'activepage' : ''}>
                  <Link to="/services">
                    Services
                  </Link>
                </li>
                <li
                  className={activeMenu === 'health-tips' ? 'activepage' : ''}
                >
                  <Link to="/health-tips">
                    Health Tips
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="btn-1"
                  >
                    Log In
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <nav
        id="nav-menu-lists"
        className="d-flex d-md-none nav-menu-lists close-menu nav-menu-lists-scrolled"
      >
        <div className="container nav-menu-content">
          <nav className="nav-links-menu">
            <ul>
              <li className={activeMenu === 'home' ? 'activepage' : ''}>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li className={activeMenu === 'service' ? 'activepage' : ''}>
                <Link to="/services">
                  Services
                </Link>
              </li>
              <li
                className={activeMenu === 'health-tips' ? 'activepage' : ''}
              >
                <Link to="/health-tips">
                  Health Tips
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="btn-1"
                >
                  Log In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
}
