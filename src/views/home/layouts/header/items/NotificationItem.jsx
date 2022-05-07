/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../shared/Logo';

export default function NotificationItem({ item: { title, body, time } }) {
  return (
    <li className="notifications-item">
      <Link to="/notifications">
        <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
          {/* <div className="dropdown-list-image d-flex align-items-center justify-content-center rounded-circle text-white">DR</div> */}
          <Logo width={30} height={30} />
          <div className="font-weight-bold px-3">
            <div className="text-truncate"><strong>{title}</strong></div>
            <div className=""><p>{body}</p></div>
          </div>
          <span className="ml-auto mb-auto">
            <div className="btn-group">
              <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="mdi mdi-dots-vertical" />
              </button>
            </div>
            <br />
            <div className="text-right text-muted pt-1"><small>{time}</small></div>
          </span>
        </div>
      </Link>
    </li>
  );
}
