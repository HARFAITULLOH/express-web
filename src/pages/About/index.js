import React from 'react';
import './about.css'
import { email, location, phone } from '../../assets';
import { Button, Input } from '../../components';

const About = () => {
  return (
    <div className='about'>
      <div className="content">

        <div className="left">
          <div className="about-us">
            <h1>Tentang Kami</h1>
            <p><b>Express Cargo</b> menyediakan layanan jasa logistik yang menjangkau seluruh pulau Jawa dengan dukungan ekosistem yang lengkap. Harapan kami, Express Cargo dapat menciptakan lapangan kerja untuk mendorong perekonomian nasional</p>
          </div>

          <div className="contact">
            <h1>Kontak</h1>
            <div className="detail alamat">
              <img src={location} alt="icon-lokasi" />
              <p>Ciganitri Indah Residence No C.16, Cipagola, Bojongsoang, Bandung, Jawa Barat 40287</p>
            </div>
            <div className="detail email">
              <img src={email} alt="icon-email" />
              <p>ExpressCargo@gmail.com</p>
            </div>
            <div className="detail phone">
              <img src={phone} alt="icon-phone" />
              <p>085156981726</p>
            </div>
          </div>
        </div>

        <div className="right">
          <h2>Cari Drop Point</h2>
          <div className="searchBar">
            <Input title='Masukkan Kotamu'/>
            <Button title='Cari'/>
          </div>
          <textarea disabled value='Kami tersedia di kota Bandung, tepatnya di Jl. Batu Gosong No.15'></textarea>
        </div>
      </div>
    </div>
  )
};

export default About;