import React, { useState } from 'react';
import './login.css'
import { Button, Input } from '../../components';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const inputUsernameController = ({target}) => {
    setUsername(target.value);
  }; 

  const inputPasswordController = ({target}) => {
    // setPassword(target.value);
  }; 

  return (
    <div className='login'>
      <div className="content">
        <div className="header">
          <h1>Login</h1>
          <p>Silahkan login terlebih dahulu</p>
        </div>
        <div className="body">
          <Input title='Username' onChange={(value) => inputUsernameController(value)} />
          <Input title='Password' type='password' onChange={(value) => inputPasswordController(value)}/>
          <Button title='LOGIN' onClick={() => {
            navigate(
              '/dashboard',
              {state: {
                username: username,
              }}
            );
          }}/>
        </div>
      </div>
    </div>
  )
};

export default Login;