/* eslint-disable max-len */
import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import _ from 'lodash';
import key from 'uniqid';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '../../contents/Banner';
import { ProductPlaceholder } from '../../../shared/Placeholder';
import HClinics from './components/HClinics';
import GuestHeader from '../../layouts/header/GuestHeader';
import { getMedicines } from '../../../../app/features/medicine';

const Product = React.lazy(() => import('../../../products/items/Product.item'));

export default function GuestHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state?.medicine?.medicines, shallowEqual);
  const mProducts = products?.length > 2 ? [products[0], products[1]] : products;
  const handleAddToCart = () => {
    navigate('/login');
  };
  const handleRemooveFromCart = () => {
    navigate('/login');
  };
  useEffect(() => {
    getMedicines({ limit: 9 }, dispatch);
  }, []);
  return (
    <div className="content-home">
      <GuestHeader />
      <Banner />
      <div className="d-flex flex-column j-x-i-content container my-4">
        <div className="d-flex flex-column flex-md-row">
          <div className="col-12 col-md-7 j-x-i-left">
            <div className="j-x-i-header py-2 px-3 d-flex">
              <div className="flex-grow-1"><span>Most searched medecines</span></div>
              <div className="search-btn"><span label="search"><i className="bi bi-search" /></span></div>
            </div>
            <div className="d-flex flex-wrap">
              {_.map(mProducts, product => (
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
        <div className="col-12 j-x-i-left my-4">
          <div className="j-x-i-header py-2 px-3 d-flex">
            <div className="flex-grow-1"><span>More medecines</span></div>
            <div className="search-btn"><span label="search"><i className="bi bi-search" /></span></div>
          </div>
          <div className="d-flex flex-wrap">
            {_.map(products, product => (
              <div key={key()} className="col-lg-4 product-card">
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
            <div><Link to="/medicines">View More</Link></div>
          </div>
        </div>
        <HClinics />
      </div>
    </div>
  );
}
