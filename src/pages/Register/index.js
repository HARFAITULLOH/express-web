import React from 'react';
import '../Login/login.css'
import { Button, Input } from '../../components';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className='login'>
      <div className="content">
        <div className="header">
          <h1>Register</h1>
          <p>Isi data Anda dengan benar</p>
        </div>
        <div className="body">
          <Input title='Full Name'/>
          <Input title='Username'/>
          <Input title='Password' type='password'/>
          <Button title='REGISTER' onClick={() => {
            navigate('/login');
          }}/>
        </div>
      </div>
    </div>
  )
};

export default Register;