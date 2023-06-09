import React from 'react';
import logo from '../assets/logo.png';
import diet1 from '../assets/diet1.jpg';
import diet2 from '../assets/diet2.jpeg';
import diet3 from '../assets/diet3.jpg';
import diet5 from '../assets/diet5.jpg';
import diet6 from '../assets/diet6.jpg';
import diet7 from '../assets/diet7.jpeg';
import diet8 from '../assets/diet8.jpg';
import danone from '../assets/danone.png';
import skilvul from '../assets/skilvul.png';

import { useNavigate } from 'react-router-dom';



const DietMayo = () => {
    const navigate = useNavigate();
    return (
      <div className='diet-mayo'>
        <a href="#" className="scrolltop" id="scroll-top">
          <i className='bx bx-up-arrow-alt scrolltop__icon'></i>
        </a>
          <main className="l-main row">
          <section className="home col-sm-8" id="home">
            <div className="home__container bd-container bd-grid">
              <div className="home__data">
                <h1 className="home__title">Diet Mayo</h1>
                <div className="home__img">
                  <img src={diet2} alt="" className="mx-auto d-block" />
                </div>
                <div className="kiri">
                  <p>Diet mayo adalah metode diet yang dirancang oleh Mayo Clinic, sebuah organisasi medis non-profit asal Amerika Serikat. Tak hanya untuk menurunkan berat badan, diet ini juga mendukung perubahan gaya hidup menjadi lebih sehat secara bertahap dan berkelanjutan.</p>
                  <p>Salah satu fokus utama dari diet ini adalah berfokus pada perubahan perilaku. Seperti tidak makan sambil menonton televisi atau meningkatkan asupan buah dan sayuran yang kamu makan dalam sehari, untuk membantu menurunkan berat badan dan mempertahankannya.</p>
                  <h2>Tujuan Diet Mayo</h2>
                  <p>Tujuan dari diet mayo adalah untuk membantu menurunkan berat badan berlebih, dan menemukan cara makan yang lebih sehat. Tak hanya untuk saat ini, tapi juga untuk dipertahankan seumur hidup.</p>
                  <p>Diet ini didasarkan pada ilmu perubahan perilaku, yang akan membantu menemukan motivasi batin, untuk menurunkan berat badan. Ini juga dapat membantu menetapkan tujuan yang dapat dicapai, dan belajar menangani kemunduran.</p>
                  <h2>Manfaat Diet Mayo</h2>
                  <p>Manfaat terbesar dari diet mayo adalah tentang membuat perubahan perilaku sehat, alih-alih menghitung kalori atau zat gizi makro. Salah satu alasan diet tidak berhasil adalah begitu orang berhenti membatasi makanan tertentu dan melanjutkan perilaku pra-diet, berat badan akan naik kembali. Untuk itu, diet ini berfokus untuk mempertahankan perubahan perilaku untuk kesehatan</p>
                </div>
              </div>
            </div>
          </section>

          <div className="col col-sm-3" style={{margin:'100px 0px 0px 0px'}}>
            <div className="card" onClick={() => navigate("/dtp")}>
                <img src={diet3} alt="nature" />
                <h3>Diet Tinggi Protein</h3>              
            </div>

            <div className="card" onClick={() => navigate("/dps")}>
                <img src={diet8} alt="people" />
                <h3>Diet Protein Shake</h3>
            </div>

            <div className="card" onClick={() => navigate("/zone-diet")}>        
                <img src={diet5} alt="tech" />
                <h3>Zone Diet</h3>
            </div>

            <div className="card" onClick={() => navigate("/diet-mediterania")}>
                <img src={diet6} alt="architecture" />
                <h3>Diet Mediterania</h3>
            </div>

            <div className="card" onClick={() => navigate("/diet-atkins")}>
                <img src={diet7} alt="any" />
                <h3>Diet Atkins</h3>
            </div>
          </div>
        </main>

       


       
    </div>
    );
};
export default DietMayo;
