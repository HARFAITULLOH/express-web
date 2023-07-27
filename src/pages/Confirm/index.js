import React from 'react';
import './confirm.css'
import { Button, Input } from '../../components';

const Confirm = () => {
  return (
    <div className='confirm'>
      <div className="content">
        <div className="title">
          <h1>CONFIRM ORDER</h1>
          <p>Konfirmasi order ketika customer sudah membayar</p>
        </div>
        <div className="body">
          <div className="input bp">
            <label>Biaya Pengiriman</label>
            <Input type='number' />
          </div>
          <div className="input username">
            <label>Username</label>
            <Input />
          </div>
          <Button title='CONFIRM ORDER' />
        </div>
      </div>
    </div>
  )
};

export default Confirm;