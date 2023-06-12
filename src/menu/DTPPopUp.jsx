import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DTPPopUp() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button  className='pop'  variant="primary" onClick={() => setShow(true)}>
        Menu Diet
      </button>

      <Modal
        show={show} 
        onHide={() => setShow(false)}
        dialogClassName="modal-90w" 
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          Menu Diet Tinggi Protein
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
              
              <div className="col-sm-4">
                <p>Hari Pertama</p>
                <ul className="circle">
                  <li>Pagi: Omelet dengan 3putih telur dan 1 kuning telur + 1 potong sayuran bayam + 1 roti gandum panggang + segelas susu rendah lemak </li>
                  <li>Siang: 150gr ayam panggang tanpa kulit + 1 porsi salad sayuran segar dengan 2 sendok dressing rendah lemak + air putih atau teh herbal tanpa gula </li>
                  <li>Malam:  150gr ikan panggang + 1/2 cangkir nasi merah + sayuran panggang </li>
                </ul>
                <p>Hari Kedua</p>
                <ul className="circle">
                  <li>Pagi: Shake protein dengan 1 scoop whey protein + 1 pisang + 1 cangkir bayam segar + 1 cangkir susu almond </li>
                  <li>Siang: tofu panggang dengan rempah dan sedikit minyak zaitun + 1 porsi brokoli kukus + 1/2 cangkir beras merah </li>
                  <li>Malam: 150gr dada ayam panggang + 1/2 cangkir quinoa + sayuran hijau (bayam atau asparagus) </li>
                </ul>
                <p>Hari Ketiga</p>
                <ul className="circle">
                  <li>Pagi: Oatmeal + 1/2 cangkir bububuk protein + potongan buah buah (pisang atau stroberi) + 1 sendok makan almond cincang </li>
                  <li>Siang: salad dada ayam panggang dengan sayuran hijau(selada, bayam dan daun bawang) + dressing rendah lemak(lemon dan balsamic) </li>
                  <li>Malam: 150gr salmon panggang dan rempah + 1/2 cangkir kentang manis panggang + sayuran panggang(asparagus atau paprika) </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p>Hari Keempat</p>
                <ul className="circle">
                  <li>Pagi: 3 putih telur rebus dengan potongan bayam dan tomat + 1 iris roti gandum panggang </li>
                  <li>Siang: salad tuna + 1/2 alpukat + selada + tomat + dressing rendah lemak + air putih atau teh herbal tanpa gula</li>
                  <li>Malam: 150gr daging sapi panggang + 1/2 cangkir kacang hijau + 1/2 cangkir nasi merah</li>
                </ul>
                <p>Hari Kelima</p>
                <ul className="circle">
                  <li>Pagi: Shake protein dengan 1 cangkir yoghurt yunani rendah lemak + 1/2 cangkir blueberry beku + 1 sendok makan selai kacang</li>
                  <li>Siang: ayam panggang dengan rempah + 1/2 cangkir quinoa + sayuran kukus(brokoli atau wortel)</li>
                  <li>Malam: tofu goreng dengan rempah dan sedikit minyak zaitun + 1/2 cangkir nasi cokelat + sajikan dengan tumis sayuran(paprika atau buncis)</li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p>Hari Keenam</p>
                <ul className="circle">
                  <li>Pagi: pancake protein dengan 3 putih telur + 1/2 pisang + 1 sendok makan madu</li>
                  <li>Siang: salad salmon dengan sayuran hijay(selada atau bayam) + dressing rendah lemak seperti lemon atau balsamic</li>
                  <li>Malam: 150gr udang panggang dengan rempah + 1 porsi sobda(mie gandum) dan wortel panggang</li>
                </ul>
                <p>Hari Ketujuh</p>
                <ul className="circle">
                  <li>Pagi: sandwich telur rebu dengan 2 lembar roti gandum + porongan sayur (selada, tomat atau mentimun) + 1/4 alpukat</li>
                  <li>Siang: sup ayam dengan potongan ayam, sayurang segar dan kacang merah</li>
                  <li>Malam: 150gr dada ayam panggang dengan rempah + 1/2 cangkir kentang panggang + 1 porsi brokoli kukus</li>
                  <p><strong>Note: Ulangi jika berat badan ingin terus menurun</strong></p>
                </ul>
              </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DTPPopUp;