import React from 'react';

const FormInput = ({ label, name, type, defaultValue, size, required }) => {
  return (
    <label className='form-control'>
      <div className='label'>
        <span className='label-text capitalize'>{label}</span>
      </div>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
        required={required === 'true' ? true : false}
      />
    </label>
  );
};

export default FormInput;
