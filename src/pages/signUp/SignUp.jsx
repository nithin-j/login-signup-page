import React from 'react';
import { Link } from 'react-router-dom';

import GenericButton from '../../components/genericButton/GenericButton';
import GenericTextbox from '../../components/genericTextbox/GenericTextbox';

const placeHolder = ['Name', 'Email', 'Password', 'Confirm Password'];
const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <GenericButton name='Sign up With Google' />
      <GenericButton name='Sign up With Facebook' />
      {placeHolder.map((title) => {
        return <GenericTextbox placeholderText={title} />;
      })}
      <h3>
        already have an account? <Link to='/login'>Login here</Link>
      </h3>
      <GenericButton name='Sign Up' />
    </div>
  );
};

export default SignUp;
