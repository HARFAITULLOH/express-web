import React from 'react';
import './add.css'
import { Button, Input } from '../../components';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const navigate = useNavigate();
  return (
    <div className='add'>
      <div className="content">
        <div className="header">
          <h1>ADD NEW ORDER</h1>
          <p>Isi form dibawah dengan benar!</p>
        </div>
        <div className="body">
          <Input title='Username'/>
          <Input type="number" title='No HP Pengirim'/>
          <Input title='Nama Pengirim'/>
          <Input type="number" title='No HP Penerima'/>
          <Input title='Alamat Asal'/>
          <Input title='Alamat Tujuan'/>
          <Input type="number" title='Jarak Total'/>
          <Input type="number" title='Berat'/>
          <select>
            <option selected disabled value="volvo">Layanan</option>
            <option value="saab">REGULAR</option>
            <option value="opel">EKONOMI</option>
            <option value="audi">KARGO</option>
          </select>
          <Button title='ADD' onClick={() => {
            navigate('./confirm')
          }}/>
        </div>
      </div>
    </div>
  )
};

export default Add;