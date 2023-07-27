import React from 'react';
import './input.css';

const Input = ({title, type = 'input', cond, ...rest}) => {
  return (
    <input type={type} placeholder={title} disabled={cond} {...rest}/>
  )
};

export default Input;