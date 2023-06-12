import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DPSPopUp() {
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
                  <li>Pagi: Shake protein dengan campuran whey protein, susu almond, pisang, dan es batu. </li>
                  <li>Siang:  Salad sayuran dengan tambahan protein seperti tahu atau tempe. </li>
                  <li>Malam:  Shake protein dengan campuran whey protein, susu almond, almond butter, dan es batu. </li>
                </ul>
                <p>Hari Kedua</p>
                <ul className="circle">
                  <li>Pagi: Shake protein dengan campuran whey protein, susu kedelai, stroberi, dan es batu. </li>
                  <li>Siang: Sup ayam dengan tambahan sayuran seperti brokoli atau bayam. </li>
                  <li>Malam: Shake protein dengan campuran whey protein, susu kedelai, almond butter, dan es batu. </li>
                </ul>
                <p>Hari Ketiga</p>
                <ul className="circle">
                  <li>Pagi: Shake protein dengan campuran whey protein, susu almond, blueberry, dan es batu. </li>
                  <li>Siang: Tofu stir-fry dengan sayuran seperti paprika, wortel, dan buncis. </li>
                  <li>Malam: Shake protein dengan campuran whey protein, susu almond, almond butter, dan es batu. </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p>Hari Keempat</p>
                <ul className="circle">
                  <li>Pagi: Shake protein dengan campuran whey protein, susu kedelai, mangga, dan es batu. </li>
                  <li>Siang: Salad sayuran dengan tambahan protein seperti ikan panggang atau ayam. </li>
                  <li>Malam: Shake protein dengan campuran whey protein, susu kedelai, almond butter, dan es batu.</li>
                </ul>
                <p>Hari Kelima</p>
                <ul className="circle">
                  <li>Pagi: Shake protein dengan campuran whey protein, susu almond, kale, dan es batu.</li>
                  <li>Siang: Tumis tempe dengan sayuran seperti bawang putih, cabai, dan daun bawang.</li>
                  <li>Malam:  Shake protein dengan campuran whey protein, susu almond, almond butter, dan es batu.</li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p>Hari Keenam</p>
                <ul className="circle">
                  <li>Pagi: Shake protein dengan campuran whey protein, susu kedelai, pisang, dan es batu.</li>
                  <li>Siang: Salad sayuran dengan tambahan protein seperti telur rebus atau keju.</li>
                  <li>Malam: Shake protein dengan campuran whey protein, susu kedelai, almond butter, dan es batu.</li>
                </ul>
                <p>Hari Ketujuh</p>
                <ul className="circle">
                  <li>Pagi: Shake protein dengan campuran whey protein, susu almond, mixed berries, dan es batu.</li>
                  <li>Siang: Tofu scramble dengan sayuran seperti paprika, jamur, dan bayam.</li>
                  <li>Malam: Shake protein dengan campuran whey protein, susu almond, almond butter, dan es batu.</li>
                  <p><strong>Note: Ulangi jika berat badan ingin terus menurun</strong></p>
                </ul>
              </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DPSPopUp;