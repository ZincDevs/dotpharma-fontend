/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React, { useState, Suspense, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import _ from 'lodash';
import key from 'uniqid';
import { Link } from 'react-router-dom';
import Path from '../../../shared/Path';
import UserHeader from '../../layouts/header/UserHeader';
import Alert from '../../../shared/Alert';
import { ProductPlaceholder } from '../../../shared/Placeholder';
import HClinics from './components/HClinics';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { getMyProfile } from '../../../../app/features/user';
import { getMedicines } from '../../../../app/features/medicine';
import { addToCart, removeCart } from '../../../../api/index';

const Product = React.lazy(() => import('../../../products/items/Product.item'));

function UserHome({ alert: defaultAlert }) {
  const dispatch = useDispatch();
  const axios = useAxiosPrivate();
  const [alert] = useState(defaultAlert);
  const [showAlert, setShowAlert] = useState(true);

  const profile = useSelector(state => state?.user?.MyProfile, shallowEqual);
  const products = useSelector(state => state?.medicine?.medicines, shallowEqual);

  const handleAddToCart = (elem, e, changeStatus) => {
    const m_id = e.target?.id;
    changeStatus('pending');
    addToCart(axios, m_id, err => {
      if (err) {
        changeStatus('fail');
        const resScode = err?.response?.status;
        console.log(err?.response);
      } else {
        setTimeout(() => {
          changeStatus('success');
          elem.current.classList.add('clicked');
          getMyProfile(dispatch, axios);
        }, 2000);
      }
    });
  };
  const handleRemoveFromCart = (elem, e, changeStatus) => {
    const c_id = e.target?.id;
    changeStatus('pending');
    removeCart(axios, c_id, err => {
      if (err) {
        changeStatus('fail');
        const resScode = err?.response?.status;
        console.log(err?.response);
      } else {
        setTimeout(() => {
          changeStatus('success');
          elem.current.classList.remove('clicked');
          getMyProfile(dispatch, axios);
        }, 2000);
      }
    });
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    getMyProfile(dispatch, axios);
    getMedicines({ limit: 2 }, dispatch);
  }, []);

  // console.log(profile);

  return (
    <div className="content-home">
      <UserHeader profile={profile} />
      <Path />
      {(showAlert && alert) && (<div className="container mt-4"><Alert info={alert} handleCloseAlert={handleCloseAlert} /></div>)}
      <div className="d-flex flex-column j-x-i-content container my-4">
        <div className="d-flex flex-column flex-md-row">
          <div className="col-12 col-md-7 j-x-i-left">
            <div className="j-x-i-header py-2 px-3 d-flex">
              <div className="flex-grow-1"><span>Most searched medecines</span></div>
              <div className="search-btn"><span label="search"><i className="bi bi-search" /></span></div>
            </div>
            <div className="d-flex flex-wrap">
              {_.map(products, product => (
                <div key={key()} className="col-lg-6 product-card">
                  <Suspense fallback={<ProductPlaceholder />}>
                    <Product
                      handleAddToCart={handleAddToCart}
                      handleRemooveFromCart={handleRemoveFromCart}
                      productDetails={product}
                      key={`${key()}-${key()}`}
                      cart={profile?.cart || []}
                    />
                  </Suspense>
                </div>
              ))}
            </div>
            <div className="j-x-i-header py-2 px-3 text-center">
              <div><Link to="/medicines">View More</Link></div>
            </div>
          </div>
          <div className="col-12 col-md-5 j-x-i-right">
            <div className="j-x-i-inner">
              <div className="j-x-i-header py-2 px-3 d-flex">
                <div className="flex-grow-1"><span>Weekly health tip</span></div>
                <div className="search-btn"><span label="search"><i className="bi bi-three-dots-vertical" /></span></div>
              </div>
              <div className="j-x-i-right-content p-4">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, facere ducimus in expedita odit laudantium? Fugiat ducimus deserunt repellendus corporis, consequatur corrupti ad, hic eius dolores rerum ipsam magni eveniet.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, facere ducimus in expedita odit laudantium? Fugiat ducimus deserunt repellendus corporis, consequatur corrupti ad, hic eius dolores rerum ipsam magni eveniet.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, facere ducimus in expedita odit laudantium? Fugiat ducimus deserunt repellendus corporis, consequatur corrupti ad, hic eius dolores rerum ipsam magni eveniet.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, facere ducimus in expedita odit laudantium? Fugiat ducimus deserunt repellendus corporis, consequatur corrupti ad, hic eius dolores rerum ipsam magni eveniet.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, facere ducimus in expedita odit laudantium? Fugiat ducimus deserunt repellendus corporis, consequatur corrupti ad, hic eius dolores rerum ipsam magni eveniet.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, facere ducimus in expedita odit laudantium? Fugiat ducimus deserunt repellendus corporis, consequatur corrupti ad, hic eius dolores rerum ipsam magni eveniet.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, facere ducimus in expedita odit laudantium? Fugiat ducimus deserunt repellendus corporis, consequatur corrupti ad, hic eius dolores rerum ipsam magni eveniet.</p>
              </div>
              <div className="j-x-i-header py-2 px-3 text-center">
                <div><Link to="/health-tips">View more tips</Link></div>
              </div>
            </div>
          </div>
        </div>
        <HClinics />
      </div>
    </div>
  );
}

UserHome.defaultProps = {
  alert: {
    type: 'info',
    message: 'Welcome to Dotpharma, be connected to health care products anytime from anywhere. we deliver the product to you in less than 54 minutes.',
  },
};

export default UserHome;
