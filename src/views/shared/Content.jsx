/* eslint-disable import/prefer-default-export */
import React from 'react';

function Welcome() {
  return (
    <div className="c-lf">
      <div className="d-flex flex-column">
        <div>
          <p>
            Welcome to
            {' '}
            <span className="name">.Dot Pharma.</span>
          </p>
        </div>
        <div>
          <h1>Stay connected to health care</h1>
        </div>
        <div className="d-flex flex-row-reverse">
          <h4>Anywhere you are 👌</h4>
        </div>
      </div>
    </div>
  );
}

export {
  Welcome,
};
