import React from 'react';
import './navbar.css';





const Header = () => {
  return (
    <header className="site-navbar" role="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-11 col-xl-2">
            <h1 className="mb-0 site-logo">
            <a class="navbar-brand" href="#">
              <img src="" alt="logo-here" width="30" height="24" class="d-inline-block align-text-top" />
              Shiv's Creations
            </a>
            </h1>
          </div>

          <div className="col-12 col-md-10 d-none d-xl-block">
            <nav className="site-navigation position-relative text-right" role="navigation">
             
              <a href='/home'> Home </a>
              <a href='/shopall'> Shop All </a>
              <a href='/about'> About </a>
              <a href='/contact'> Contact Us</a>
              

            </nav>
          </div>

          

          <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{ position: 'relative', top: '3px' }}>
            <a href="#" className="site-menu-toggle js-menu-toggle text-white">
              <span className="icon-menu h3"></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
