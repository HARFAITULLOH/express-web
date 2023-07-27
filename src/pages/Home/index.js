import React from 'react';
import './home.css'
import { Button } from '../../components/atoms';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home'>
      <div className="content">
        <h1>Mau Kirim Paket? <br/> Pilih Express Cargo Aja!</h1>
        <p><b>Express Cargo</b> hadir untuk memudahkan Anda dalam mengirimkan paket ke seluruh wilayah Indonesia dengan cepat dan tentunya dengan harga terjangkau</p>
        <Button title='Drop Point Terdekat' onClick={() => {
          navigate('/about');
        }}/>
      </div>
    </div>
  )
};

export default Home;