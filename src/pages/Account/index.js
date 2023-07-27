import React from 'react';
import './account.css'

const Account = () => {
  const username = JSON.parse(localStorage.getItem('username'));
  return (
    <div className='account'>
      <div className="content">
        <div className="title">
          <h1>ACCOUNT</h1>
          <p>Selamat datang kembali <span>Harfa</span></p>
        </div>
        <div className="body">
          <p className='item'>Full Name</p>
          <p className='item'>Harfa goks</p>
          <p className='item'>Username</p>
          <p className='item'>{username}</p>
          <p className='item'>E-mail</p>
          <p className='item'>itok4911@gmail.com</p>
          <p className='item'>Password</p>
          <p className='item'>********</p>
        </div>
      </div>
    </div>
  )
};

export default Account;