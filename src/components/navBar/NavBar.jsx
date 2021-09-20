import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

import GenericTextbox from '../genericTextbox/GenericTextbox';
import GenericButton from '../genericButton/GenericButton';

const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-items home'>
        <Link className='nav-link' to='/'>
          Home
        </Link>
      </div>
      <div className='nav-items search'>
        <GenericTextbox placeholderText='enter keyworks to search' />
        <GenericButton name='search' />
      </div>
      <div className='nav-items nav-hover'>
        <Link className='nav-link' to='/login'>
          Login
        </Link>
      </div>
      <div className='nav-items nav-hover'>
        <Link className='nav-link' to='/signup'>
          Signup
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
