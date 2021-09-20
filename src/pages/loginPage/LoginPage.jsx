import React from 'react';
import { Link } from 'react-router-dom';

import './LoginPage.css';

import GenericTextbox from '../../components/genericTextbox/GenericTextbox.jsx';
import GenericButton from '../../components/genericButton/GenericButton.jsx';

const placeHolder = ['Email', 'Password'];

const LoginPage = () => {
  return (
    <div className='container'>
      <div className='login-container'>
        <h1>Login</h1>
        {placeHolder.map((title) => {
          return <GenericTextbox placeholderText={title} />;
        })}
        <h3>
          <Link to='/passwordReset'>forgot Password?</Link>
        </h3>
        <h3>
          dont have an account yet? <Link to='/signup'>Create one here</Link>
        </h3>
        <GenericButton name='Login' />
      </div>
    </div>
  );
};

export default LoginPage;
