import React from 'react';
import './logo.css';
import { icon_brand } from '../../../assets';

const Logo = () => {
  return (
    <div className='icon_brand'>
      <img src={icon_brand} alt="icon brand" />
      <p>EXPRESS CARGO</p>
    </div>
  )
};

export default Logo;