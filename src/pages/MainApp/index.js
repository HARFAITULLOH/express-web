import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../../components';
import './mainApp.css';

const MainApp = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='container'>
      <Navbar menu={['home', 'service', 'about']} path='/' />
      <div className="content-mainApp">
        <Outlet />
      </div>
    </div>
  )
};

export default MainApp;