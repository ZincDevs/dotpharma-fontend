/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function MenuItem({ item: { name, icon, count } }) {
  return (
    <li>
      {name === 'Logout' && (<hr className="dropdown-divider" />)}
      <a className="dropdown-item py-2" href="#">
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-items-center align-items-center">
            <span><i className={icon} /></span>
            <span className="px-3">{name}</span>
          </div>
          {count && (
            <div>
              <span className="count">{count}</span>
            </div>
          )}
        </div>
      </a>

    </li>
  );
}
MenuItem.defaultProps = {
  item: {
    name: 'Profile',
    icon: 'bi bi-person',
    count: '4',
  },
};

export default MenuItem;
