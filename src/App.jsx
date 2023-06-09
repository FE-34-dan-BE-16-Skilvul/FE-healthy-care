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
      <Route path="/" exact Component={Buah}/>
      <Route path="/detail" Component={Fitur}/>
      <Route path="/hasil" Component={Hasil }/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
