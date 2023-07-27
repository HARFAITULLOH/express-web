import React from 'react';
import './update.css'
import { Button, Input } from '../../components';

const Update = () => {
  return (
    <div className='update'>
      <div className="content">
        <div className="title">
          <h1>UPDATE LOCATION</h1>
          <p>Isi form dibawah dengan benar</p>
        </div>
        <div className="body">
          <Input title='No Resi'/>
          <Input title='Lokasi Terkini'/>
          <Button title='UPDATE' />
        </div>
      </div>
    </div>
  )
};

export default Update;