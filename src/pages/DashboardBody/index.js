import React from 'react';
import './dashboardBody.css'
import { useOutletContext } from 'react-router-dom';

const DashboardBody = () => {
  const { username } = useOutletContext();
  return (
    <div className='dashboardBody'>
      <div className="content">
        <div className="title">
          <h1>Hello, {username}!</h1>
          <p>Semoga Allah senantiasa memberkahi <span>Anda</span></p>
        </div>
      </div>
    </div>
  )
};

export default DashboardBody;