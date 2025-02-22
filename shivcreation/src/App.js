// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from './navbar';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Shop from './components/Shopall/shopall';
import Page2 from './components/Shopall/page2';
import Page3 from './components/Shopall/page3';




const App = () => {
  

  return (
    <>
    <Router>
      <div>
        <Header />
        
        
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopall" element={<Shop />}/>
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
     

     


    </>
  );
}

export default App;