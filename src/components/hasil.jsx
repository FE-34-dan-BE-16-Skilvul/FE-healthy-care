import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
// import {dtlMakanan} from './components/makanan';


function Hasil() {

    return (
        <>
            <section id="hslHitung" className="hasilHitung">
                <Container fluid>
                    <div className='title-holder'>
                        <h2>Makanan Harianku</h2>
                    </div>
                    <Table responsive striped bordered hover className='tabelMakanan'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Makanan</th>
                                <th>Kalori</th>
                                <th>Jumlah</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Alpukat</td>
                                <td>200</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jeruk</td>
                                <td>100</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><b>Hasil</b></td>
                                <td>300</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </section>

        </>
    )
}

export default Hasil