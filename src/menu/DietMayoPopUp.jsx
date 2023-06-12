import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DietMayoPopUp() {
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
          Menu Diet Mayo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
              
              <div className="col-sm-4">
                <p>Hari Pertama</p>
                <ul className="circle">
                  <li>Pagi: 1 cangkir kopi tubruk/tea + 1 sdk gula pasir</li>
                  <li>Siang: 2 telur rebus matang + 1 ikat bayam + tomat</li>
                  <li>Malam: 1,5 ons bistik panggang/rebus + selada yang ditaburi jeruk citrun</li>
                </ul>
                <p>Hari Kedua</p>
                <ul className="circle">
                  <li>Pagi: 1 cangkir kopi tubruk/tea + 1 sdk gula pasir</li>
                  <li>Siang: 1,5 ons bistik panggang/rebus + selada + 1 buah segar (pear)</li>
                  <li>Malam: 2,5 ons ayam kukus + 1 buah pisang</li>
                </ul>
                <p>Hari Ketiga</p>
                <ul className="circle">
                  <li>Pagi: 1 cangkir kopi tubruk/tea + 1 sdk gula pasir</li>
                  <li>Siang: 2 telur rebus matang + 1 ikat bayam + tomat + pear</li>
                  <li>Malam: 2,5 ons ayam kukus + selada yang ditaburi jeruk citrun</li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p>Hari Keempat</p>
                <ul className="circle">
                  <li>Pagi: 1 cangkir kopi tubruk/tea + 1 sdk gula pasir + 1 iris roti bakar</li>
                  <li>Siang: 1 telur rebus + wortel rebus sebentar + keju trim 20 gr (di gelael)</li>
                  <li>Malam: 1 mangkok penuh pepaya + citrun + 1 gelas susu non fat</li>
                </ul>
                <p>Hari Kelima</p>
                <ul className="circle">
                  <li>Pagi: 1 wortel besar mentah diparut kasar ditaburi jeruk citrun</li>
                  <li>Siang: 2,5 ons ayam kukus dengan sedikit saus mentega yg tidak asin</li>
                  <li>Malam: 2,5 ons bistik panggang/rebus + selada + bayam</li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p>Hari Keenam</p>
                <ul className="circle">
                  <li>Pagi: 1 cangkir kopi tubruk/tea + 1 sdk gula pasir + 1 iris roti bakar</li>
                  <li>Siang: 2,5 ons ayam kukus + selada ditaburi jeruk citrun</li>
                  <li>Malam: 2 telur rebus + wortel besar parut mentah ditaburi citrun</li>
                </ul>
                <p>Hari Ketujuh</p>
                <ul className="circle">
                  <li>Pagi: 1 cangkir kopi tubruk/tea tanpa gula</li>
                  <li>Siang: 1,5 ons bistik panggang+ 1 buah segar (pear)</li>
                  <li>Malam: 2 telur rebus + wortel besar parut mentah ditaburi citrun</li>
                  <p><strong>Note: Ulangi jika berat badan ingin terus menurun</strong></p>
                </ul>
              </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DietMayoPopUp;