/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-this-in-sfc */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Logo from '../../shared/Logo';

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
  return (
    <div>
      <header id="nav-bar-header" className="main_menu">
        <div className="container">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className="logo d-flex justify-content-center align-items-center" href="#">
              <Logo with={40} height={40} />
              <span>DOTPHARMA</span>
            </div>
            <div className="menu-btn d-flex d-md-none justify-content-center align-items-center">
              <div id="menu-btn-action" className="nav-icon">
                <span className="in-d" />
              </div>
            </div>
            <nav className="nav-links pt-3 d-none d-md-flex justify-content-center align-items-center">
              <ul>
                <li className={activeMenu === 'home' ? 'activepage' : ''}>
                  <a
                    onClick={() => {}}
                  >
                    Home
                  </a>
                </li>
                <li className={activeMenu === 'service' ? 'activepage' : ''}>
                  <a
                    onClick={() => {}}
                  >
                    Services
                  </a>
                </li>
                <li
                  className={activeMenu === 'portifolio' ? 'activepage' : ''}
                >
                  <a
                    onClick={() => {}}
                  >
                    Portfolio
                  </a>
                </li>
                <li className={activeMenu === 'blog' ? 'activepage' : ''}>
                  <a
                    onClick={() => {}}
                  >
                    Blog
                  </a>
                </li>
                <li className={activeMenu === 'about' ? 'activepage' : ''}>
                  <a
                    onClick={() => {}}
                  >
                    About
                  </a>
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
        className="nav-menu-lists close-menu nav-menu-lists-scrolled"
      >
        <div className="container nav-menu-content">
          <nav className="nav-links-menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active-menu">
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a
                  href="#"
                  className="btn-1"
                  onClick={() => {}}
                >
                  Talk to us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
}
