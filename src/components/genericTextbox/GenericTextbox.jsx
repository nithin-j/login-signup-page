import React from 'react';

const GenericTextbox = ({ placeholderText }) => {
  return (
    <div className='input-container'>
      <input
        type='text'
        name=''
        className='input-textbox'
        placeholder={placeholderText}
      />
    </div>
  );
};

export default GenericTextbox;
