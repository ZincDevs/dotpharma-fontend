/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef } from 'react';

function Product({
  handleAddToCart,
  handleRemooveFromCart,
  productDetails: {
    name, image, description, currency, price,
  },
}) {
  const productBotton = useRef();
  return (
    <div className="product">
      <div className="content">
        <div
          className="top"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div ref={productBotton} className="bottom">
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
              onClick={() => {
                handleAddToCart(productBotton);
              }}
              className="buy d-flex justify-content-center align-items-center"
            >
              <i className="bi bi-cart-plus" />
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
              onClick={() => {
                handleRemooveFromCart(productBotton);
              }}
              className="remove d-flex justify-content-center align-items-center"
            >
              <i className="bi bi-x-lg" />
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

Product.defaultProps = {
  name: 'Baobab Oil',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis, magnam deleniti deserunt totam minus pariatur. A nihil recusandae facilis perspiciatis? Eius atque, ut sapiente dignissimos voluptas voluptatibus fugit consequuntur',
  price: '25000',
  currency: 'RWF',
  inCart: false,
};

export default Product;
