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
import ZoneDietPopUp from '../menu/ZoneDietPopUp';



const ZoneDiet = () => {
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
                <h1 className="home__title">Zone Diet</h1>
                <div className="home__img">
                  <img src={diet5} alt="" className="mx-auto d-block" />
                </div>
                <div className="kiri">
                <p>Zone Diet adalah metode penurunan berat badan yang dilakukan dengan menerapkan rasio dari makanan yang dikonsumsi, yaitu 40 persen karbohidrat, 30 persen protein, dan 30 persen lemak. Agar diet berhasil, karbohidrat yang dikonsumsi harus memiliki indeks glikemik yang rendah. Hal tersebut dapat membuat tubuh melepaskan gula secara perlahan ke dalam darah agar perasaan kenyang bertahan lebih lama. Protein yang dikonsumsi harus rendah lemak dan sebagian besar lemak tak jenuh tunggal.</p>

                <h2>Metode Zone Diet</h2>
                <h4>1. Metode Mata - Tangan</h4>
                <p>Metode mata-tangan adalah cara yang paling mudah untuk menerapkan jenis diet ini. Tangan digunakan untuk menentukan ukuran porsi dan lima jari guna mengingatkan makan lima kali sehari dan jangan pernah tanpa makanan selama lima jam. Lalu, mata digunakan untuk memperkirakan porsi di piring yang harus terbagi menjadi tiga kandungan nutrisi, yaitu:</p>
                <ul type="circle">
                    <li>
                        Sepertiga protein tanpa lemak yang diperkirakan ukuran dan ketebalannya sebesar telapak tangan
                    </li>
                    <li>
                        Dua pertiga karbohidrat dari makanan yang dikonsumsi harus memiliki indeks glikemik yang rendah.
                    </li>
                    <li>Sedikit lemak tak jenuh tunggal sebagai tambahan, seperti minyak zaitun dan alpukat.</li>
                </ul>

                <h4>2. Metode Blok makanan</h4>
                <p>Blok makanan dapat memungkinkan seseorang untuk mengatur sendiri The Zone Diet yang diterapkan dengan menghitung besaran gram dari protein, karbohidrat, hingga lemak yang dapat dikonsumsi per harinya. Cara menentukannya tergantung dari berat badan, tinggi badan, ukuran pinggang, dan pinggul.

                Rata-rata pria mengonsumsi 14 blok Zone per harinya, sedangkan wanita membutuhkan 11 blok. Makanan utama, seperti sarapan, makan siang, serta makan malam berisi tiga hingga lima blok Zone. Lalu, camilan berisi satu blok. Setiap blok Zone terdiri dari protein, lemak, dan karbohidrat, yaitu:</p>
                <ul type="circle">
                    <li>
                        Blok protein mengandung 7 gram protein.
                    </li>
                    <li>
                        Blok karbohidrat mengandung 9 gram karbohidrat.
                    </li>
                    <li>Blok lemak hanya 1,5 gram.</li>
                </ul>
                <span>Arisandi Darmaji</span>
                </div>
              </div>
            </div>
            <ZoneDietPopUp />

          </section>

          <div className="col col-sm-3" style={{margin:'100px 0px 0px 0px'}}>

            <div className="card accessory__content" onClick={() => navigate("/diet-mayo")}>
                <img src={diet2} alt="tech" />
                <h3>Diet Mayo</h3>
            </div>

            <div className="card accessory__content" onClick={() => navigate("/dtp")}>
                <img src={diet3} alt="nature" />
                <h3>Diet Tinggi Protein</h3>              
            </div>

            <div className="card accessory__content" onClick={() => navigate("/dps")}>
                <img src={diet8} alt="people" />
                <h3>Diet Protein Shake</h3>
            </div>

            <div className="card accessory__content" onClick={() => navigate("/diet-mediterania")}>
                <img src={diet6} alt="architecture" />
                <h3>Diet Mediterania</h3>
            </div>

            <div className="card accessory__content" onClick={() => navigate("/diet-atkins")}>
                <img src={diet7} alt="any" />
                <h3>Diet Atkins</h3>
            </div>
          </div>
        </main>
    </div>
    );
};
export default ZoneDiet;
