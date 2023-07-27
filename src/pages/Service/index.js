import React from 'react';
import './service.css'

const Service = () => {
  return (
    <div className='service'>
      <div className="content">

        <h1>LAYANAN KAMI</h1>
        <p>Express Cargo hadir menjadi solusi bagi kamu</p>
        <div className="menu">
          <div className="layanan reguler">
            <h5>REGULAR</h5>
            <p><b>Regular</b> adalah layanan pengiriman dengan perkiraan waktu sampai 1-3 hari kerja, tergantung pada zona daerah yang menjadi tujuan pengiriman</p>
          </div>
          <div className="layanan ekonomi">
            <h5>EKONOMI</h5>
            <p><b>Ekonomi</b> adalah layanan pengiriman dengan tarif ekonomis, dengan perkiraan waktu sampai lebih lama dari layanan regular. Waktu sampai berkisar 4-7 hari kerja</p>
          </div>
          <div className="layanan kargo">
            <h5>KARGO</h5>
            <p><b>Kargo</b> adalah layanan pengiriman dalam jumlah / volume yang besar, degnan minimun charge 10 Kg. Layanan ini memiliki harga yang kompetitif</p>
          </div>
      </div>
      </div>
    </div>
  )
};

export default Service;