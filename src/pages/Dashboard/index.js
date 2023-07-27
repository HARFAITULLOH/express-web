import React from 'react';
import { Navbar } from '../../components';
import { Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const { state } = useLocation();
  const username = JSON.parse(localStorage.getItem('username'));
  
  if(!username){
    localStorage.setItem('username', JSON.stringify(state.username));
  }

  return (
    <div className='container'>
      {username === 'admin' ? 
        (
          <Navbar menu={['add', 'update', 'tracking', 'account']} path='/dashboard/'/>
        )
        :
        (
          <Navbar menu={['tracking', 'account']} path='/dashboard/'/>
        )
      }
      <Outlet context={{
        username
      }}/>
    </div>
  )
};

export default Dashboard;