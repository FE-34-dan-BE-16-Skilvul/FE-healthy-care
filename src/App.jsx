import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {

  return (
    <>
    <Provider store={store}>
      <Header />
      <Home />
      <Cart />
      <Footer />
    </Provider> 
    </>
  )
}

export default App
