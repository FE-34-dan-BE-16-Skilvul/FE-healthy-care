import React, {useState, useEffect} from 'react';
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
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import DietMayoPopUp from '../menu/DietMayoPopUp';


const DietMayo = () => {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const [articles, setArticles] = useState([]);
    const articleId = 1;

    useEffect(() => {
      axios.get(`https://api-healthycare-dev.up.railway.app/articles/${articleId}`)
      .then(response => {
        setArticles([response.data.data]);
        console.log(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

    return (
      <div className='diet-mayo'>
        <a href="#" className="scrolltop" id="scroll-top">
          <i className='bx bx-up-arrow-alt scrolltop__icon'></i>
        </a>
          <main className="l-main row">
          <section className="home col-sm-8" id="home">
          {articles.map(article => (
                <div>
            <div className="home__container bd-container bd-grid">
              <div className="home__data">
                
                    <div dangerouslySetInnerHTML={{__html: article.title}} className='home__title'></div>
                    <div className="home__img">
                      <img src={article.image} alt="" className="mx-auto d-block" />
                    </div>
                    <div className="kiri">
                    <div dangerouslySetInnerHTML={{__html: article.content}}></div>
                    <span className='nulis'>penulis : {article.author}</span>
                    </div>              
                
              </div>
            </div>
            <DietMayoPopUp />
            </div>
                ))}
          </section>

          <div className="col col-sm-3" style={{margin:'100px 0px 0px 0px'}}>
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

            <div className="card accessory__content" onClick={() => navigate("/diet-atkins")}>
                <img src={diet7} alt="any" />
                <h3>Diet Atkins</h3>
            </div>
          </div>
        </main>

      
             
    </div>
    );
};
export default DietMayo;
