import React from 'react';

import GenericTextbox from '../../components/genericTextbox/GenericTextbox.jsx';

const placeHolder = ['email', 'password'];

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      {placeHolder.map((title) => {
        return <GenericTextbox placeholderText={title} />;
      })}
    </div>
  );
};

export default LoginPage;
