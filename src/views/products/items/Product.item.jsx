/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import _ from 'lodash';

function Product({
  handleAddToCart,
  handleRemooveFromCart,
  productDetails: {
    m_id,
    m_name: name,
    m_image: image,
    m_desciption: description,
    currency = 'RWF',
    m_price: price,
  },
  cart,
  key,
}) {
  const [status, setStatus] = useState();
  const productBotton = useRef();
  const cart_item = _.find(cart, item => item?.medicine?.m_id === m_id);
  const changeStatus = status => {
    setStatus(status);
  };

  useEffect(() => {
    if (cart && cart_item) productBotton.current.classList.add('clicked');
  }, []);

  return (
    <div className="product">
      <div className="content">
        <div
          className="top"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div ref={productBotton} key={key} className="bottom">
          <div className="left">
            <div className="details">
              <h5>{name}</h5>
              <h6>
                {currency === 'RWF'
                  ? `${price} ${currency}`
                  : `${currency} ${price}`}
              </h6>
            </div>
            <div
              id={m_id}
              onClick={e => {
                handleAddToCart(productBotton, e, changeStatus);
              }}
              className="buy d-flex justify-content-center align-items-center"
            >
              {
                status === 'pending' ? (
                  <ThreeDots
                    color="#F5F5F5"
                    height="50"
                    width="50"
                  />
                ) : (<i id={m_id} className="bi bi-cart-plus" />)
              }

            </div>
          </div>
          <div className="right">
            <div className="done d-flex justify-content-center align-items-center">
              <i className="bi bi-check2" />
            </div>
            <div className="details">
              <h5>{name}</h5>
              <p>Added to your cart</p>
            </div>
            <div
              id={cart_item?.c_id}
              onClick={e => {
                handleRemooveFromCart(productBotton, e, changeStatus);
              }}
              className="remove d-flex justify-content-center align-items-center"
            >
              {
                status === 'pending' ? (
                  <ThreeDots
                    color="#F5F5F5"
                    height="50"
                    width="50"
                  />
                ) : (<i id={cart_item?.c_id} className="bi bi-x-lg" />)
              }
            </div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <i className="bi bi-info" />
        </div>
        <div className="contents">
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
