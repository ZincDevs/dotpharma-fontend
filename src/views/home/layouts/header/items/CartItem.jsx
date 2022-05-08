/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

export default function CartItem() {
  return (
    <li className="notifications-item">
      <Link to="/notifications">
        <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
          {/* <div className="dropdown-list-image d-flex align-items-center justify-content-center rounded-circle text-white">DR</div> */}
          <div>
            <img src="https://res.cloudinary.com/dqpwqfbjf/image/upload/v1651011414/dotpharma/gallery/769915190199-1000x1000-1000x1000.jpg_apfipr.webp" alt="cartimage" width={60} height={60} />
          </div>
          <div className="font-weight-bold px-3">
            <div className="text-truncate"><strong>Name</strong></div>
            <div className=""><p>2500RWF</p></div>
          </div>
          <span className="ml-auto mb-auto">
            <div className="btn-group">
              <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="mdi mdi-dots-vertical" />
              </button>
            </div>
            <br />
            {/* <div className="text-right text-muted pt-1"><small>{time}</small></div> */}
          </span>
        </div>
      </Link>
    </li>
  );
}
