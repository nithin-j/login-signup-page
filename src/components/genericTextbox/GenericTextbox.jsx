import React from 'react';
import './GenericTextbox.css';

const GenericTextbox = ({ placeholderText }) => {
  return (
    <div className='input-container'>
      <input
        class='generic-input'
        type={placeholderText.includes('Password') ? 'password' : 'text'}
        name=''
        className='input-textbox'
        placeholder={placeholderText}
      />
    </div>
  );
};

export default GenericTextbox;
