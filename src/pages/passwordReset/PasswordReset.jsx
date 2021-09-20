import React from 'react';

import GenericTextbox from '../../components/genericTextbox/GenericTextbox';
import GenericButton from '../../components/genericButton/GenericButton';

const PasswordReset = () => {
  return (
    <div>
      <GenericTextbox placeholderText='email' />
      <GenericButton name='Reset Password' />
    </div>
  );
};

export default PasswordReset;
