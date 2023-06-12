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
import DTPPopUp from '../menu/DTPPopUp';

const DTP = () => {
    const navigate = useNavigate();
    return (
      <div className='dtp'>
        <a href="#" className="scrolltop" id="scroll-top">
          <i className='bx bx-up-arrow-alt scrolltop__icon'></i>
        </a>  
        
        <main className="l-main row">
          <section className="home col-sm-8" id="home">
            <div className="home__container bd-container bd-grid">
              <div className="home__data">
                <h1 className="home__title">Diet Tinggi Protein</h1>
                <div className="home__img">
                  <img src={diet3} alt="" className="mx-auto d-block" />
                </div>
                <div className="kiri">
                <p>Protein merupakan zat yang sangat penting yang dibutuhkan oleh tubuh. Zat gizi ini terdapat di hampir seluruh jaringan tubuh dan menjadi zat pembangun tubuh. Berbagai peran penting yang dilakukan protein dalam tubuh di antaranya adalah untuk menunjang pertumbuhan, pembentukan sistem kekebalan tubuh, hormon, enzim, dan berbagai jaringan tubuh lain. Berbagai prinsip diet banyak yang menganjurkan untuk mengonsumsi protein yang tinggi dan mengurangi karbohidrat. Selain itu, protein dianggap dapat menahan rasa lapar lebih lama. </p>

                <h2>Tujuan Diet Tinggi Protein</h2>
                <p>Terdapat dua jenis tipe diet tinggi protein, yaitu diet yang disertai dengan pembatasan karbohidrat dan digantikan dengan protein, dan diet yang menggantikan seluruh kebutuhan karbohidrat dengan protein. Diet tinggi protein biasanya menghabiskan 25 hingga 35 persen dari total kalori dalam sehari. Sedangkan yang tubuh kita butuhkan hanya sekitar 10 sampai 15 persen protein dari total kalori sehari. Menurut ketentuan Kementerian Kesehatan tentang angka kecukupan gizi, kebutuhan protein normal yang harus dipenuhi setiap harinya adalah sebesar 62 hingga 65 gram untuk laki-laki dan 56 hingga 57 untuk perempuan usia dewasa, atau sebanyak 0,8-1,0 gram per kg berat badan per hari.</p>
                <h2>Manfaat Diet Tinggi Protein</h2>
                <p>Tahukah kamu bahwa otak, tepatnya area yang disebut hipotalamus, berperan besar dalam mengatur berat badan kamu. Organ vital tersebut memproses berbagai jenis informasi untuk menentukan kapan kamu harus makan dan seberapa banyak jumlah makanan yang perlu kamu makan untuk merasa kenyang. Beberapa sinyal penting yang dikirim ke otak adalah perubahan hormon sebagai respons untuk mengonsumsi makanan.

                Nah, meningkatkan asupan protein dapat meningkatkan kadar hormon kenyang (pengurang napsu makan) GLP-1, peptidpeptiden kadar kolesistokinin, sekaligus mengurangi kadar hormon lapar, yaitu ghrelin. Berkurangnya rasa lapar membuat kamu makan lebih sedikit kalori secara otomatis. Hal ini yang membuat diet tinggi protein dapat mengurangi berat badan.</p>    
                </div>
              </div>
            </div>
          </section>

          <div className="col col-sm-3" style={{margin:'100px 0px 0px 0px'}}>
            <div className="card accessory__content" onClick={() => navigate("/diet-mayo")}>
                <img src={diet2} alt="nature" />
                <h3>Diet Mayo</h3>
            </div>

            <div className="card accessory__content" onClick={() => navigate("/dps")}>
                <img src={diet8} alt="people" />
                <h3>Diet Protein Shake</h3>
            </div>

            <div className="card accessory__content" onClick={() => navigate("/zone-diet")}>
                <img src={diet5} alt="tech" />
                <h3>Zone Diet</h3>
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

       
        <DTPPopUp />

        
    </div>
    );
};
export default DTP;
