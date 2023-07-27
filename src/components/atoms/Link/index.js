import React from 'react';
import './link.css';

const Link = ({title = 'Ini adalah link', onClick}) => {
  return (
    <div className='link'>
      <p 
        onClick={onClick}
        >
        {title}
      </p>
    </div>
  )
};

export default Link;