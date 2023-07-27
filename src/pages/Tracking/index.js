import React from 'react';
import './tracking.css'
import { Button, Input } from '../../components';

const Tracking = () => {
  const username = JSON.parse(localStorage.getItem('username'));
  return (
    (username !== 'admin') ?
    (
      <div className='tracking'>
        <div className="content">
          <div className="title">
            <h1>TRACKING</h1>
            <p>Lokasi paket Anda saat ini</p>
          </div>
          <div className="table">
            <h5 className='item'>NO</h5>
            <h5 className='item'>NOMOR RESI</h5>
            <h5 className='item'>TANGGAL</h5>
            <h5 className='item'>LOKASI TERKINI</h5>
            <p className='item'>1.</p>
            <p className='item'>EC1234569068206</p>
            <p className='item'>2 OKTOBER 2023</p>
            <p className='item'>Paket telah diterima oleh yang bersangkutan</p>
          </div>
        </div>
      </div>
    )
    :
    (
      <div className='trackingAdmin'>
        <div className="content">
          <div className="title">
            <h1>TRACKING</h1>
            <p>Isi form dibawah dengan benar</p>
          </div>
          <div className="body">
            <div className="searchBar">
              <Input title='No Resi'/>
              <Button title='Cari' />
            </div>
            <div className="result">
              <Input cond='disabled'/>
            </div>
          </div>
        </div>
      </div>
    )
  )
};

export default Tracking;