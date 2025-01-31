// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './navbar';
import Footer from './pages/Footer/footer';
import Home from './pages/Home/home';
import About from './pages/About/About';
import Contact from './pages/Contact/contact';
import Shop from './pages/Shopall/shopall';
import Page2 from './pages/Allrangolipages/Page2';
import Page3 from './pages/Allrangolipages/Page3';
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopall" element={<Shop />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;