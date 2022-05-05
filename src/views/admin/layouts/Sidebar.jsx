/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import key from 'uniqid';
import Logo from '../../shared/Logo';
import ProfilePic from '../../shared/ProfilePic';

function SidebarMenuItem({
  handleClick,
  activeMenu,
  menu: {
    name, to, submenu, data_bs_target, icon,
  },
}) {
  if (to) {
    return (
      <li className={`mb-1 ${(activeMenu === name) && 'active'}`}>
        <Link to={to} onClick={() => handleClick(name)}>
          <button
            className="p-3 w-100 btn-toggle d-flex align-items-center collapsed"
            onClick={() => handleClick(name)}
          >
            <div><span><i className={icon} /></span></div>
            <div className="px-3"><span>{name}</span></div>
            <div className="flex-grow-1" />
          </button>
        </Link>
      </li>
    );
  }
  return (
    <li className={`mb-1 ${(activeMenu === name) && 'active'}`}>
      <button
        className="p-3 w-100 btn-toggle d-flex align-items-center collapsed"
        data-bs-toggle="collapse"
        data-bs-target={`#${data_bs_target}`}
        aria-expanded="false"
        onClick={() => handleClick(name)}
      >
        <div><span><i className={icon} /></span></div>
        <div className="px-3"><span>{name}</span></div>
        <div className="flex-grow-1" />
        <div><span className="i-chv"><i className="bi bi-chevron-compact-down" /></span></div>
      </button>
      <div className="collapse" id={data_bs_target}>
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          {submenu.map(({ to, name }) => (<li key={key()}><Link to={to} className="py-3 w-100">{name}</Link></li>))}
        </ul>
      </div>
    </li>
  );
}

function Sidebar({ sideMenu }) {
  const [activeMenu, setActiveMenu] = useState(sideMenu[0]?.name);
  const handleClick = name => {
    setActiveMenu(name);
  };
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 text-white py-3" style={{ width: 280 }}>
      <div className="flex-grow-1">
        <Link to="/dashboard" className="logo d-flex align-items-center px-3">
          <Logo with={35} height={35} />
          <span>DOTPHARMA</span>
        </Link>
        <hr />
        <ul className="d-flex flex-column mb-auto side-menu-list">
          {
            sideMenu.map(menu => (<SidebarMenuItem key={key()} handleClick={handleClick} menu={menu} activeMenu={activeMenu} />))
          }
        </ul>
      </div>
    </div>
  );
}

Sidebar.defaultProps = {
  sideMenu: [
    {
      name: 'Dashboard',
      to: '/dashboard',
      icon: 'bi bi-speedometer2',
    },
    {
      name: 'Users',
      data_bs_target: 'users-collapse',
      icon: 'bi bi-people',
      submenu: [
        {
          name: 'Add new',
          to: '/dashboard/users',
        },
        {
          name: 'Manage users',
          to: '/dashboard/users',
        },
      ],
    },
    {
      name: 'Medicines',
      data_bs_target: 'medicine-collapse',
      icon: 'bi bi-journal-medical',
      submenu: [
        {
          name: 'Add new',
          to: '/dashboard/medicines',
        },
        {
          name: 'Manage medicines',
          to: '/dashboard/medicines',
        },
      ],
    },
    {
      name: 'Pharmacies',
      data_bs_target: 'pharmacy-collapse',
      icon: 'bi bi-hospital',
      submenu: [
        {
          name: 'Add new',
          to: '/dashboard/pharmacies',
        },
        {
          name: 'Manage Pharmacies',
          to: '/dashboard/pharmacies',
        },
      ],
    },
  ],
};

export default Sidebar;
