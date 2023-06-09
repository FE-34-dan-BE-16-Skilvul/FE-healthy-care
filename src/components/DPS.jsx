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



const DPS = () => {
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
                <h1 className="home__title">Diet Protein Shake</h1>
                <div className="home__img">
                  <img src={diet8} alt="" className="mx-auto d-block" />
                </div>
                <div className="kiri">
                <p>Protein shake adalah minuman tinggi protein yang ditambahkan zat-zat pelengkap. Minuman ini sering digunakan sebagai asupan gizi tambahan. Biasanya, protein shake diminum ketika seseorang ingin menambah maupun menurunkan berat badan.
                            Protein shake bisa juga diminum untuk membentuk otot atau saat masa penyembuhan ketika seseorang tidak dapat mengonsumsi makanan keras.</p>
                            <h2>Manfaat Konsumsi Protein Shake</h2>
                            <p>Dilansir dari MyProtein, ada sejumlah manfaat konsumsi protein shake yang bisa Anda dapatkan. Antara lain :</p>
            
                            <h4>1. Membantu Pertumbuhan Otot</h4>
                            <p>Protein shake digunakan sebagai bahan bakar untuk membantu membangun jaringan otot. Tentunya otot dapat dibentuk dengan dibarengi latihan beban. Latihan beban tanpa asupan protein yang cukup justru akan rusak secara perlahan-lahan. Jika otot terbentuk, maka kekuatan otot pun ikut bertambah.</p>
            
                            <h4>2. Mempertahankan Massa Otot</h4>
                            <p>Protein mampu mencegah Anda kehilangan massa otot. Orang yang mengonsumsi suplemen protein cenderung tidak akan cepat kehilangan jaringan otot di masa tua.</p>
            
                            <h4>3. Meningkatkan Metabolisme Tubuh</h4>
                            <p>Protein shake dapat meningkatkan metabolisme tubuh. Dengan demikian, lemak dapat mudah terbakar.</p>
            
                            <h2>Cara Mengkonsumsi Protein Shake</h2>
                            <p>cara mengonsumsi protein shake yang paling mudah adalah dengan mencampurnya dengan air lalu diminum. Namun ada cara lainnya yang bisa Anda lakukan, misal mencampurkan dengan cairan beraroma seperti susu atau air kelapa dan mencampurnya untuk smoothie buah.
            
                            Biasanya, produsen protein shake menyarankan penyajian sekitar 30 gram satu porsi. Waktu yang tepat untuk meminumnya ialah setelah berolahraga, yaitu ketika otot sangat membutuhkannya.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="col col-sm-3" style={{margin:'100px 0px 0px 0px'}}>
            <div className="card accessory__content" onClick={() => navigate("/diet-mayo")}>
                <img src={diet2} alt="nature" />
                <h3>Diet Mayo</h3>              
            </div>

            <div className="card" onClick={() => navigate("/dtp")}>
                <img src={diet3} alt="people" />
                <h3>Diet Tinggi Protein</h3>
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
export default DPS;
