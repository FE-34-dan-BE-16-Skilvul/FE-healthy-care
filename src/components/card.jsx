import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const fiturData = [
  {
    id: 1,
    image: 'https://asset.kompas.com/crops/8J4DTKeBL0WAEo0ATEM8OAgnGOs=/36x0:1000x643/750x500/data/photo/2021/08/26/612717866a03a.jpg',
    time: '15 Maret 2023',
    title: 'Membuat Smootie Dengan Lembut',
    description: 'Alpukat bisa dicampurkan dengan smootie dengan cara menghaluskan alpukat terlebih dahulu.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2020/11/09/298439771.jpg',
    time: '7 Mei 2023',
    title: 'Roti Panggang Telur Dengan Alpukat',
    description: 'Yuk simak resep dan cara membuat roti panggang alpukat sebagai ide sarapan praktis dan sehat.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: 'https://massageishealthy.com/wp-content/uploads/2018/05/cach-lam-sinh-to-dau-tay-don-gian-cho-be-6.jpg',
    time: '23 Feb 2023',
    title: 'Olahan Jus Strawberry Bergizi',
    description: 'Sebagaimana nutrisi di dalam buahnya, jus strawberry mengandung vitamin C, yang baik untuk tubuh. ',
    link: 'https://www.twitter.com'
  },
  {
    id: 4,
    image: 'https://moondoggiesmusic.com/wp-content/uploads/2019/07/fruit-salad.jpg',
    time: '25 Jan 2023',
    title: 'Olahan Salad Buah Sehat',
    description: 'Salad buah adalah salah satu makanan sehat karena terdiri dari macam-macam buah-buahan yang sehat.',
    link: 'https://www.twitter.com'
  }
]


function Fitur() {

    return (
      <>
      <section id='detail-food' className='detail-blog'>
        <Container fluid>
          <div className='title-holder'>
            <h2>Pilih Makanan Kamu</h2>
          </div>
          <div className='photo-card'>
            <img className="photo" src='https://i.pinimg.com/originals/d2/b8/46/d2b846201c41d3164f0da3ec53c02f74.jpg'/>
            
          </div>
          <div className='detail-deskripsi'>
            <Card>
              <Card.Body>
                <Card.Title>Deskripsi</Card.Title>
                <Card.Text>Alpukat adalah buah yang kaya akan nutrisi dan memiliki banyak manfaat bagi kesehatan tubuh. Alpukat juga mengandung sejumlah nutrisi penting lainnya seperti vitamin E, vitamin B2, vitamin B3, vitamin A, magnesium, mangan, tembaga, zat besi, fosfor, dan seng. Selain itu, alpukat juga mengandung lemak sehat, seperti asam lemak tak jenuh tunggal dan asam lemak tak jenuh ganda, yang dapat membantu menurunkan risiko penyakit jantung dan meningkatkan kadar kolesterol HDL (kolesterol baik) dalam tubuh. Namun, karena tinggi kalori dan lemaknya, sebaiknya alpukat dikonsumsi dengan porsi yang seimbang sebagai bagian dari pola makan yang sehat dan seimbang.</Card.Text>
                <Card.Title>Kandungan</Card.Title>
                <Card.Text>Kalori: 160 kalori
Karbohidrat: 8,5 gram
Protein: 2 gram
Lemak: 14,7 gram
Serat: 6,7 gram
Vitamin K: 26% dari AKG (Angka Kecukupan Gizi)
Vitamin C: 17% dari AKG
Vitamin B5 (Asam pantotenat): 14% dari AKG
Vitamin B6: 13% dari AKG
Potasium: 14% dari AKG
Folat: 10% dari AKG</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='parent'>
            <Link to="/hasil" id="button-food" className='btn btn-primary'>Tambah</Link>
          </div>
        </Container>

      </section>
      <section id="fitur" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Rekomendasi Cara Mengolah</h2>
        </div>
        <Row>
          {
            fiturData.map(fitur => {
              return (
                <Col sm={3} key={fitur.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={fitur.image} />
                      <Card.Body>
                        <time>{fitur.time}</time>
                        <Card.Title>{fitur.title}</Card.Title>
                        <Card.Text>
                          {fitur.description}
                        </Card.Text>
                        <a href={fitur.link} className="btn btn-primary">Baca Selengkapnya <i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
        
      </>
    )
  }
  
  export default Fitur