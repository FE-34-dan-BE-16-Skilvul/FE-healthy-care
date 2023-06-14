import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DietMediteraniaPopUp() {
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
          Menu Diet Mediterania
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
              
              <div className="col-sm-4">
                <p>Hari Pertama</p>
                <ul className="circle">
                <li>Pagi: Oatmeal dengan buah-buahan segar seperti pisang, stroberi, dan potongan kacang almond. </li>
                  <li>Siang: Salad Caprese dengan tomat, mozzarella rendah lemak, dan daun basil. Sajikan dengan irisan roti gandum. </li>
                  <li>Malam: Ikan salmon panggang dengan jus lemon dan herba Mediterania. Tambahkan sisi sayuran seperti brokoli panggang dan kentang panggang. </li>
                </ul>
                <p>Hari Kedua</p>
                <ul className="circle">
                  <li>Pagi: Omelet sayuran dengan paprika, bayam, bawang bombay, dan keju feta.. </li>
                  <li>Siang: Wrap roti gandum dengan hummus, irisan daging ayam panggang, dan sayuran segar seperti selada, tomat, dan mentimun. </li>
                  <li>Malam: Daging sapi panggang dengan sayuran panggang (terong, paprika, dan zukini) dan quinoa. </li>
                </ul>
                <p>Hari Ketiga</p>
                <ul className="circle">
                  <li>Pagi: Smoothie bayam dengan pisang, alpukat, yogurt Greek rendah lemak, dan sejumput madu. </li>
                  <li>Siang: Quinoa salad dengan sayuran segar seperti selada, mentimun, tomat, dan zaitun hitam. Tambahkan keju feta. </li>
                  <li>Malam: Ayam panggang dengan saus lemon dan herba Mediterania. Sajikan dengan sisi sayuran seperti wortel panggang dan kentang manis. </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p>Hari Keempat</p>
                <ul className="circle">
                  <li>Pagi: Greek yogurt dengan potongan buah-buahan segar, kacang almond, dan sedikit madu. </li>
                  <li>Siang: Pasta gandum utuh dengan saus tomat, zaitun hitam, dan sayuran seperti bayam dan paprika. </li>
                  <li>Malam:  Ikan panggang dengan rempah-rempah Mediterania dan saus pesto. Sajikan dengan sisi sayuran seperti brokoli dan kentang panggang. </li>
                </ul>
                <p>Hari Kelima</p>
                <ul className="circle">
                  <li>Pagi: Telur rebus dengan roti gandum panggang dan irisan alpukat. </li>
                  <li>Siang: Salad kacang-kacangan dengan campuran kacang (kacang almond, kenari, kacang mete), selada, tomat, dan bawang merah. Tambahkan potongan daging ayam panggang. </li>
                  <li>Malam: Sup sayuran dengan kaldu rendah lemak, termasuk sayuran seperti wortel, bawang bombay, brokoli, dan kacang polong. </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p>Hari Keenam</p>
                <ul className="circle">
                  <li>Pagi: Smoothie blueberry dengan yogurt Greek rendah lemak, pisang, bayam, dan sedikit madu. </li>
                  <li>Siang: Wrap roti gandum dengan hummus, irisan mentimun, tomat, dan sayuran panggang seperti paprika dan terong. </li>
                  <li>Malam: Paella dengan nasi merah, udang, kerang, potongan ayam tanpa kulit, sayuran (bawang bombay, paprika, dan kacang polong), dan rempah-rempah Mediterania. </li>
                </ul>
                <p>Hari Ketujuh</p>
                <ul className="circle">
                  <li>Pagi: Pancake gandum utuh dengan topping potongan buah-buahan segar dan yogurt Greek rendah lemak. </li>
                  <li>Siang: Salad tomat dan mentimun dengan irisan daging ayam panggang dan keju feta. </li>
                  <li>Malam: Sayuran panggang seperti paprika, terong, dan zukini </li>
                  <p><strong>Note: Ulangi jika berat badan ingin terus menurun</strong></p>
                </ul>
              </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DietMediteraniaPopUp;