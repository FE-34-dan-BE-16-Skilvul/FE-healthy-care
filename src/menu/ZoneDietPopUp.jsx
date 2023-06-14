import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ZoneDietPopUp() {
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
          Menu Zone Diet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
              
              <div className="col-sm-4">
                <p>Hari Pertama</p>
                <ul className="circle">
                  <li>Pagi: 3 telur rebus + 1 buah pisang + 10 biji almond </li>
                  <li>Siang: 120 gram dada ayam panggang + 1 porsi salad sayuran (gunakan minyak zaitun sebagai dressing)  </li>
                  <li>Malam:  150 gram ikan salmon panggang + 1 porsi brokoli panggang + 1 porsi kentang panggang </li>
                </ul>
                <p>Hari Kedua</p>
                <ul className="circle">
                  <li>Pagi: 1 porsi oatmeal dengan 30 gram kacang almond + 1 sendok teh madu </li>
                  <li>Siang: 120 gram daging sapi panggang + 1 porsi tumis sayuran dengan minyak zaitun </li>
                  <li>Malam: 150 gram ayam panggang + 1 porsi salad sayuran dengan 30 gram keju rendah lemak sebagai topping </li>
                </ul>
                <p>Hari Ketiga</p>
                <ul className="circle">
                  <li>Pagi: 1 potong roti gandum panggang dengan 2 sendok teh selai kacang alami </li>
                  <li>Siang: 120 gram udang panggang + 1 porsi tumis sayuran dengan minyak zaitun </li>
                  <li>Malam: 150 gram dada ayam panggang + 1 porsi tumis buncis dan wortel dengan minyak zaitun </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p>Hari Keempat</p>
                <ul className="circle">
                  <li>Pagi: 1 porsi yoghurt rendah lemak dengan 30 gram granola dan segenggam buah-buahan segar </li>
                  <li>Siang: 120 gram salmon panggang + 1 porsi salad sayuran dengan minyak zaitun </li>
                  <li>Malam: 150 gram daging sapi panggang
                    +1 porsi tumis bayam dengan minyak zaitun </li>
                </ul>
                <p>Hari Kelima</p>
                <ul className="circle">
                  <li>Pagi: 2 telur dadar + 1 potong roti gandum panggang </li>
                  <li>Siang: 120 gram ayam panggang + 1 porsi tumis sayuran dengan minyak zaitun </li>
                  <li>Malam: 150 gram ikan trout panggang + 1 porsi tumis jamur dengan minyak zaitun </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p>Hari Keenam</p>
                <ul className="circle">
                  <li>Pagi: 1 porsi oatmeal dengan 30 gram kacang kenari dan segenggam buah-buahan segar </li>
                  <li>Siang: 120 gram dada ayam panggang + 1 porsi salad sayuran dengan minyak zaitun </li>
                  <li>Malam: 150 gram udang panggang + 1 porsi tumis brokoli dengan minyak zaitun </li>
                </ul>
                <p>Hari Ketujuh</p>
                <ul className="circle">
                  <li>Pagi: 3 telur rebus + 1 buah pir + 10 biji kacang almond </li>
                  <li>Siang: 120 gram daging sapi panggang + 1 porsi tumis sayuran dengan minyak zaitun </li>
                  <li>Malam: 150 gram salmon panggang 1 porsi tumis buncis dengan minyak zaitun </li>
                  <p><strong>Note: Ulangi jika berat badan ingin terus menurun</strong></p>
                </ul>
              </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ZoneDietPopUp;