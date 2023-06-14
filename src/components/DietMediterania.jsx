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
import DietMediteraniaPopUp from '../menu/DietMediteraniaPopUp';



const DietMediterania = () => {
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
                <h1 className="home__title">Diet Mediterania</h1>
                <div className="home__img">
                  <img src={diet6} alt="" className="mx-auto d-block" />
                </div>
                <div className="kiri">
                <p>Diet mediterania adalah diet yang diadaptasi dari pola makan masyarakat yang tinggal di wilayah Mediterania. Pola makan ini mengedepankan bahan makanan dari sumber tumbuhan yang kaya akan vitamin, mineral, antioksidan, dan karbohidrat kompleks.
                            Pola makan diet mediterania tetap memperbolehkan konsumsi sumber protein dan lemak, seperti ikan, daging putih, daging merah, dan telur, namun dalam jumlah lebih sedikit dan juga membatasi konsumsi gula atau pemanis tambahan lainnya. </p>
            
                            <h2>Manfaat Diet Mediterania</h2>
                            <p>Melaksanakan diet mediterania secara tepat akan memberikan banyak manfaat bagi tubuh. Jadi, tidak hanya menurunkan berat badan saja, berikut adalah beberapa manfaat diet mediterania untuk kesehatan lainnya:</p>
            
                            <h3>1. Menjaga Kadar Gula Darah Normal</h3>
                            <p>Salah satu manfaat diet mediterania adalah membantu menstabilkan gula darah. Hal ini karena diet mediterania mengutamakan konsumsi buah, sayur, dan kacang-kacangan, yang mana jenis makanan tersebut mampu menurunkan asupan gula dalam tubuh.</p>
            
                            <h3>2. Memelihara Kesehatan Jantung</h3>
                            <p>Penyakit jantung dan stroke sering kali berkaitan dengan pola makan yang buruk, terutama konsumsi lemak dan kolesterol yang berlebihan. Menjalani pola makan sehat dengan diet mediterania diketahui dapat mengurangi kadar kolesterol jahat dalam darah.</p>
                            <p>Pola makan ini juga diketahui dapat membantu menurunkan tekanan darah sistolik dan diastolik. Yang artinya, diet ini bermanfaat menjaga kesehatan jantung dan organ pembuluh darah sehingga bisa menjalankan fungsinya dengan baik.</p>
            
                            <h3>3. Mengurangi Peradangan</h3>
                            <p>Manfaat lain dari diet mediterania adalah membantu mengurangi peradangan di dalam tubuh. Pasalnya, pola makan ini dapat meringankan gejala berbagai penyakit peradangan, seperti rheumatoid arthritis yang disebabkan oleh gangguan autoimun, dan menimbulkan rasa nyeri serta pembengkakan pada sendi.</p>
            
                            <h2>Cara Melakukan Diet Mediterania</h2>
                            <p>Jika ingin menerapkan pola makan diet mediterania, ada baiknya Anda melakukannya secara bertahap dari waktu ke waktu. Beberapa hal yang perlu dilakukan selama menjalani diet mediterania adalah sebagai berikut:</p>
            
                            <h3>1. Memperbanyak Konsumsi Buah dan Sayur</h3>
                            <p>MJumlah asupan sayur dan buah yang perlu dikonsumsi selama menjalani diet mediterania adalah 5–8 porsi per hari. Di mana satu porsi sayur dan buah setara dengan setengah piring. Kemudian, Anda juga disarankan memperbanyak konsumsi makanan dari biji-bijian utuh, seperti sereal, pasta, dan roti gandum.</p>
            
                            <h3>2. Rutin Mengonsumsi Protein</h3>
                            <p>Meski mengutamakan konsumsi buah dan sayur, orang yang menjalani diet mediterania tetap dianjurkan untuk mencukupi kebutuhan protein. Asupan protein tersebut bisa didapatkan dengan mengonsumsi ayam tanpa lemak atau ikan sebanyak dua kali dalam seminggu. Anda juga disarankan untuk mengolah ayam dan ikan tersebut dengan cara dibakar, direbus, atau dikukus.</p>
            
                            <h3>3. Mengurangi Konsumsi Lemak Tidak Sehat</h3>
                            <p>Hal yang tak kalah penting untuk diperhatikan dalam menjalani diet mediterania adalah mengurangi asupan lemak tidak sehat, seperti lemak trans dan lemak jenuh yang terdapat dalam minyak goreng atau margarin. Sebagai alternatif, Anda bisa memasak menggunakan minyak zaitun.</p>
                            <span>Penulis : Mahardhika Alif Surya</span>
                </div>
              </div>
            </div>

            <DietMediteraniaPopUp />
          </section>

          <div className="col col-sm-3" style={{margin:'100px 0px 0px 0px'}}>

            <div className="card accessory__content" onClick={() => navigate("/diet-mayo")}>
                <img src={diet2} alt="architecture" />
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

            <div className="card accessory__content" onClick={() => navigate("/zone-diet")}>        
                <img src={diet5} alt="tech" />
                <h3>Zone Diet</h3>
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
export default DietMediterania;
