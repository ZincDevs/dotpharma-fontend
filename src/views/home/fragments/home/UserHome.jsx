/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React, { useState, Suspense } from 'react';
import _ from 'lodash';
import key from 'uniqid';
import { Link } from 'react-router-dom';
import Path from '../../../shared/Path';
import UserHeader from '../../layouts/header/UserHeader';
import Alert from '../../../shared/Alert';
import { ProductPlaceholder } from '../../../shared/Placeholder';
import HClinics from './components/HClinics';

const Product = React.lazy(() => import('../../../products/items/Product.item'));
function UserHome({ alert: defaultAlert, products }) {
  const [alert] = useState(defaultAlert);
  const [showAlert, setShowAlert] = useState(true);

  const handleAddToCart = elem => {
    elem.current.classList.add('clicked');
  };
  const handleRemooveFromCart = elem => {
    elem.current.classList.remove('clicked');
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <div className="content-home">
      <UserHeader />
      <Path />
      {(showAlert && alert) && (<div className="container mt-4"><Alert info={alert} handleCloseAlert={handleCloseAlert} /></div>)}
      <div className="d-flex flex-column j-x-i-content container my-4">
        <div className="d-flex flex-column-reverse flex-md-row">
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
                      handleRemooveFromCart={handleRemooveFromCart}
                      productDetails={product}
                    />
                  </Suspense>
                </div>
              ))}
            </div>
            <div className="j-x-i-header py-2 px-3 text-center">
              <div><Link to="/medicines">View all</Link></div>
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
    message: 'This action will only be accepted in next short less than 10 minutes. if you run out of time, you will have to request password reset confirmation again.',
  },
  products: [
    {
      name: 'The Ordinary',
      image: 'https://res.cloudinary.com/dqpwqfbjf/image/upload/v1651011414/dotpharma/gallery/769915190199-1000x1000-1000x1000.jpg_apfipr.webp',
      description: 'The Ordinary Hyaluronic Acid 2% + B5 Moisturizing Formula With Ultra-Pure, Vegan Hyaluronic Acid. Hyaluronic Acid Is A Sponge-Like Substance That Absorbs Water And It Keeps It Inside The Skin, So The Face Appears Moist, Fresh And Tight Make The Skin Less Vulnerable To Damage From External And Environmental Factors. It Acts As An Antioxidant, Thus Reducing The Appearance Of Wrinkles And Fine Lines.',
      price: '10000',
      currency: 'RWF',
    },
    {
      name: 'The Ordinary',
      image: 'https://res.cloudinary.com/dqpwqfbjf/image/upload/v1651011414/dotpharma/gallery/769915190199-1000x1000-1000x1000.jpg_apfipr.webp',
      description: 'The Ordinary Hyaluronic Acid 2% + B5 Moisturizing Formula With Ultra-Pure, Vegan Hyaluronic Acid. Hyaluronic Acid Is A Sponge-Like Substance That Absorbs Water And It Keeps It Inside The Skin, So The Face Appears Moist, Fresh And Tight Make The Skin Less Vulnerable To Damage From External And Environmental Factors. It Acts As An Antioxidant, Thus Reducing The Appearance Of Wrinkles And Fine Lines.',
      price: '10000',
      currency: 'RWF',
    },
  ],
};

export default UserHome;
