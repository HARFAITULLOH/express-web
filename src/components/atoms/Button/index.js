import React from 'react';
import './button.css';

const Button = ({title = 'Ini adalah button', ...rest}) => {
  return (
    <button {...rest}>{title}</button>
  )
};

export default Button;