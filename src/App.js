import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Registration from './pages/Registration';
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;