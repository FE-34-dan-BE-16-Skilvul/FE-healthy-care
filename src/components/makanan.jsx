import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const dataMakanan = [
  {
    id: 1,
    image: 'https://i.pinimg.com/originals/d2/b8/46/d2b846201c41d3164f0da3ec53c02f74.jpg',
    kalori: '160 kal / 100gr',
    nama: 'Alpukat'
  },
  {
    id: 2,
    image: 'https://www.masakapahariini.com/wp-content/uploads/2020/01/jenis-jeruk-lemon-mandarin-1024x682.jpg',
    kalori: '47 kal / 100gr',
    nama: 'Jeruk'
  },
  {
    id: 3,
    image: 'https://www.hdwallpaper.nu/wp-content/uploads/2015/10/Strawberry_wallpaper_017.jpg',
    kalori: '32 kal / 100gr',
    nama: 'Strawberry'
  },
  {
    id: 4,
    image: 'https://i1.wp.com/pupuknaturalnusantara.net/wp-content/uploads/2020/12/buah-nanas.png?w=750&ssl=1',
    kalori: '48 kal / 100gr',
    nama: 'Nanas'
  },
  {
    id: 5,
    image: 'https://th.bing.com/th/id/R.f868d013ba442719173779b8539491d3?rik=dNIV3wWcL8558w&riu=http%3a%2f%2fwww.pregonagropecuario.com%2fassets%2fimages%2fupload%2fcerezas_del_valle.jpg&ehk=1VnJJSlysfSp7Mk4eBO4A8okfu%2fNijn3gz76WG%2f4wls%3d&risl=&pid=ImgRaw&r=0',
    kalori: '50 kal / 100gr',
    nama: 'Ceri'
  },
  {
    id: 6,
    image: 'https://th.bing.com/th/id/R.d6b6aee7013672c1ef3be0ea4c886306?rik=vFJvNS4UINsJsw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-M3FB9VP4_W8%2fVFOulYbdDSI%2fAAAAAAAAYpM%2fkXqBKuisqQ8%2fs1600%2fapel.JPG&ehk=KgBNURZERolCgTIwveTsElguiHOCyp7JS4HYaA%2bOln8%3d&risl=&pid=ImgRaw&r=0',
    kalori: '52 kal / 100gr',
    nama: 'Apel'
  },
  {
    id: 7,
    image: 'https://www.tagar.id/Asset/uploads2019/1590342528674-anggur.jpg',
    kalori: '67 kal / 100gr',
    nama: 'Anggur'
  },
  {
    id: 8,
    image: 'https://hawagym.com/wp-content/uploads/2017/09/Semangka-1.jpg',
    kalori: '30 kal / 100gr',
    nama: 'Semangka'
  }
]


function Buah() {

    return (
      <>
      <section id="dtlMakanan" className="makananDetail">
      <Container fluid>
        <div className="title-holder">
          <h2>Pilih Makanan Kamu</h2>
        </div>
        <Row>
          {
            dataMakanan.map(dtlMakanan => {
              return (
                <Col sm={3} key={dtlMakanan.id}>
                  <div className='holderCard'>
                    <Card className='makananCard'>
                      <Card.Img variant="top" className="imgMakanan" src={dtlMakanan.image}/>
                      <Card.Body>
                        <Card.Title>{dtlMakanan.nama}</Card.Title>
                        <Card.Text>{dtlMakanan.kalori}</Card.Text>
                        <Link to="/detail" id="button-makanan" className='btn btn-primary'>Detail gizi</Link>
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
  
  export default Buah