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
import DietAtkinsPopUp from '../menu/DietAtkinsPopUp';



const DietAtkins = () => {
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
                <h1 className="home__title">Diet Atkins</h1>
                <div className="home__img">
                  <img src={diet7} alt="" className="mx-auto d-block" />
                </div>
                <div className="kiri">
                <p>Diet Atkins ini pertama kali diciptakan oleh ahli jantung Robert Atkins pada tahun 1960-an. Diet ini dipercaya bahwa asupan karbohidrat, protein tanpa lemak dapat bertanggung jawab atas masalah kesehatan dan penambahan berat badan. 

                Tujuan dari diet Atkins adalah untuk mengubah metabolisme tubuh anda saat membakar lemak tubuh yang tersimpan, bukan untuk karbohidrat melainkan untuk energi. Tidak semua orang dapat mengikuti diet ini karena memiliki pro dan kontra mengenai risiko kesehatan yang terlibat. Namun, anda dapat melakukan ini jika mengikuti diet Atkins dengan cermat.</p>

                <h2>Manfaat Diet Atkins</h2>
                <p>Berikut ini adalah beberapa manfaat yang bisa anda dapatkan dengan melakukan diet Atkins dengan tepat sesuai dengan arahan, yaitu:</p>

                <h3>1. Mengurangi Nafsu Makan Anda</h3>
                <p>Bagi sebagian orang, efek samping terburuk dari melakukan diet adalah kelaparan. Fase ini merupakan salah satu alasan utama mengapa banyak orang merasa sengsara dan akhirnya memilih untuk menyerah.

                Namun, makan dengan melakukan diet Atkins rendah karbohidrat dapat menyebabkan pengurangan nafsu makan secara otomatis. Studi mengatakan bahwa seseorang yang mengurangi karbohidrat dan lebih banyak makan protein dan lemak, pada akhirnya kalori mereka akan jauh lebih sedikit.</p>

                <h3>2. Menurunkan Lebih Banyak Berat Badan</h3>
                <p>Mengurangi makanan berkarbohidrat adalah salah satu cara paling sederhana dan paling efektif untuk menurunkan berat badan. Menjalani diet Atkins rendah karbohidrat dapat membuat kehilangan lebih banyak berat badan lebih cepat, daripada mereka yang menjalani diet rendah lemak.

                Hal tersebut dikarenakan diet rendah karbohidrat dapat bertindak untuk menghilangkan kelebihan air di dalam tubuh sehingga menurunkan kadar insulin dan menyebabkan penurunan berat badan yang cepat dalam satu atau dua minggu pertama.</p>

                <h3>3. Sebagian Besar Lemak Akan Menghilang</h3>
                <p>Diet makanan rendah karbohidrat akan sangat efektif dalam mengurangi lemak perut yang berbahaya. Faktanya, sebagian besar orang yang melakukan diet Atkins akan kehilangan lemak yang tampaknya berasal dari rongga perut. Seiring berjalannya waktu, diet Atkins ini akan mengarah pada penurunan risiko penyakit jantung dan diabetes tipe 2 secara drastis.</p>

                <h3>4. Trigliserida Cenderung Menurun Drastis</h3>
                <p>Salah satu pendorong utama peningkatan trigliserida adalah orang yang tidak banyak melakukan aktivitas. Ketika seseorang membatasi karbohidrat, mereka cenderung mengalami penurunan trigliserida darah yang sangat dramatis. Di sisi lain, diet rendah lemak sering menyebabkan trigliserida mengalami peningkatan.</p>

                <h3>5. Meningkatkan Kadar Kolesterol HDL </h3>
                <p>Semakin tinggi kadar kolesterol high-density lipoprotein (HDL) atau kolesterol baik, maka akan semakin rendah risiko penyakit jantung. Salah satu cara terbaik untuk meningkatkan kadar kolesterol HDL adalah dengan diet rendah karbohidrat dan mengonsumsi protein dan lemak.</p>

                <h2>Tips Diet Atknis</h2>
                <p>Berikut ringkasan singkat tentang tips mengikuti diet Atkins. Ide terbaik untuk memulai perencanaan diet penurunan badan adalah dengan berkonsultasi kepada ahli diet atau dokter. Pada dasarnya, diet Atkins terbagi menjadi 4 fase berbeda, meliputi:</p>

                <h3>1. Fase 1 (Induksi)</h3>
                <p>memasukan makanan berkarbohidrat di bawah 20 gram per hari selama 2 minggu. Pada fase ini Anda diharuskan memakan makanan tinggi lemak, tinggi protein, dengan sayuran rendah karbohidrat seperti sayuran berdaun hijau untuk memulai penurunan berat badan.</p>

                <h3>2. Fase 2 (Penyeimbangan)</h3>
                <p>Pada fase kedua, secara perlahan tambahkan lebih banyak kacang, sayuran rendah karbohidrat, dan sedikit buah kembali ke dalam diet Anda.</p>

                <h3>3. Fase 3 (Penyesuaian)</h3>
                <p>Pada fase ketiga, biasanya Anda sudah sangat dekat dengan target berat badan Anda, sehingga Anda dapat menambahkan lebih banyak karbohidrat ke dalam diet Anda sampai penurunan berat badan melambat.</p>

                <h3>4. Fase 4 (Pemeliharaan)</h3>
                <p>Pada fase keempat, Anda dapat makan makanan berkarbohidrat sehat sebanyak yang dapat ditoleransi oleh tubuh Anda tanpa menambah berat badan.</p>
                <span>Penulis : Herlambang Nasution</span>
                </div>
              </div>
            </div>

            <DietAtkinsPopUp />

          </section>

          <div className="col col-sm-3 buku" style={{margin:'100px 0px 0px 0px'}}>

          <div className="card accessory__content" onClick={() => navigate("/diet-mayo")}>
                <img src={diet2} alt="any" />
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

            <div className="card accessory__content" onClick={() => navigate("/diet-mediterania")}>
                <img src={diet6} alt="architecture" />
                <h3>Diet Mediterania</h3>
            </div>

            
          </div>
        </main>

       


        
    </div>
    );
};
export default DietAtkins;
