/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React, { Suspense } from 'react';
import key from 'uniqid';
import { ProductPlaceholder } from '../shared/Placeholder';

const Product = React.lazy(() => import('./items/Product.item'));

function Products({ products }) {
  const handleAddToCart = elem => {
    elem.current.classList.add('clicked');
  };
  const handleRemooveFromCart = elem => {
    elem.current.classList.remove('clicked');
  };
  return (
    <div className="product-container py-5">
      <div className="container">
        <div className="row">
          {products.map(product => (
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
      </div>
    </div>
  );
}

Products.defaultProps = {
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

export default Products;
