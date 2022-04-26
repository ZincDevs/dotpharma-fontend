/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../shared/Icon';

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="container">
          <div className="row no-gutters slider-text align-items-center">
            <div className="col-md-8 ftco-animate d-flex align-items-end">
              <div className="text w-100 banner-text-iner">
                <h3>
                  Welcome to
                  <strong>Dotpharma</strong>
                </h3>
                <h1 className="mb-4 expand">
                  Order medecine and other health care products with just one click 🤞
                </h1>
                <Link to="/signup" className="btn-1 py-3 px-4">
                  Join Dotpharma
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="scroll-to-top" className="mouse mb-2 d-flex align-items-center">
          <a href="#" className="mouse-icon">
            <div className="mouse-wheel">
              <span><Icon icon={faChevronDown} /></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
