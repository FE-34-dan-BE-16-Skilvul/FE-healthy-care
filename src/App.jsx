import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import Buah from './components/makanan';
import Fitur from './components/card';
import Hasil from './components/hasil';


function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" exact element={<Buah />}/>
      <Route path="/detail" element={<Fitur />}/>
      <Route path="/hasil" element={<Hasil />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
