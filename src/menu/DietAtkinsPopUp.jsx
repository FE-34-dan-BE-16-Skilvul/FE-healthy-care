import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DietAtkinsPopUp() {
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
          Menu Diet Atkins
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
              
              <div className="col-sm-4">
                <p>Hari Pertama</p>
                <ul className="circle">
                  <li>Pagi: Telur dadar dengan keju cheddar parut dan irisan alpukat. </li>
                  <li>Siang: Daging ayam panggang dengan saus rendah karbohidrat dan sayuran seperti brokoli atau bayam.  </li>
                  <li>Malam: Salmon panggang dengan mentega lemon dan sayuran panggang seperti asparagus atau kembang kol.  </li>
                </ul>
                <p>Hari Kedua</p>
                <ul className="circle">
                  <li>Pagi: Smoothie protein dengan protein bubuk rendah karbohidrat, bayam, almond, dan air. </li>
                  <li>Siang: Salad dengan potongan daging sapi panggang, sayuran segar, dan dressing rendah karbohidrat. </li>
                  <li>Malam: Burger tanpa roti dengan keju, tomat, selada, dan saus rendah karbohidrat. Sajikan dengan sisi sayuran seperti kubis panggang atau mentimun. </li>
                </ul>
                <p>Hari Ketiga</p>
                <ul className="circle">
                  <li>Pagi: Yogurt Greek rendah lemak dengan potongan buah-buahan segar dan almond.  </li>
                  <li>Siang: Wrap selada dengan irisan daging ayam panggang, irisan alpukat, dan saus rendah karbohidrat. </li>
                  <li>Malam:  Udang goreng dengan tepung almond dan sayuran seperti paprika, bawang bombay, dan zukini. </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p>Hari Keempat</p>
                <ul className="circle">
                  <li>Pagi: Telur rebus dengan irisan alpukat dan keju feta. </li>
                  <li>Siang: Sup ayam rendah karbohidrat dengan potongan daging ayam, sayuran, dan kaldu yang rendah lemak. </li>
                  <li>Malam: Steak sapi panggang dengan saus rendah karbohidrat dan sisi sayuran seperti brokoli panggang atau kembang kol. </li>
                </ul>
                <p>Hari Kelima</p>
                <ul className="circle">
                  <li>Pagi: Omelét dengan potongan sayuran seperti paprika, bawang bombay, dan bayam. </li>
                  <li>Siang: Salad tuna dengan mayones rendah karbohidrat, potongan telur rebus, sayuran segar, dan keju parut. </li>
                  <li>Malam: Ayam panggang dengan rempah-rempah dan saus rendah karbohidrat. Sajikan dengan sisi sayuran seperti asparagus panggang atau kubis panggang. </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p>Hari Keenam</p>
                <ul className="circle">
                  <li>Pagi: Pancake protein dengan protein bubuk rendah karbohidrat, telur, dan sedikit bubuk kayu manis. </li>
                  <li>Siang: Taco selada dengan daging sapi cincang, keju parut, irisan alpukat, dan saus rendah karbohidrat. </li>
                  <li>Malam: Ikan panggang dengan mentega lemon dan sayuran panggang seperti wortel atau kentang panggang. </li>
                </ul>
                <p>Hari Ketujuh</p>
                <ul className="circle">
                  <li>Pagi: Smoothie almond dengan protein bubuk rendah karbohidrat, almond, bayam, dan ai </li>
                  <li>Siang: Wrap selada dengan irisan daging ayam panggang, irisan alpukat, keju feta, dan saus rendah karbohidrat. </li>
                  <li>Malam: Daging sapi panggang dengan saus rendah karbohidrat dan sisi sayuran seperti brokoli panggang atau kubis panggang. </li>
                  <p><strong>Note: Ulangi jika berat badan ingin terus menurun</strong></p>
                </ul>
              </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DietAtkinsPopUp;