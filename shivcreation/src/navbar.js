import React, { useState } from "react";
import "./navbar.css";
import MobileDropdown from "./mobiledrop";

const Header = () => {
  // State to track sidebar visibility
  // State to track sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar open/close
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (

    <>
      <div className="announcement">
        <p>Announcement Here!&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="image">Full Story</a></p>
      </div>
      <header className="site-navbar" role="banner">
        <nav>
          { }



          {/* Desktop navigation */}
          <ul>

            <li className="mobile-menu">
              <button className="hamburger" onClick={toggleSidebar}>
                ☰
              </button>
            </li>
            <li className="image">
            <img src="/assets/logi.png" alt="website-logo"></img>
              <a href="/home">
              </a>
            </li>
            <li className="hideonMobile">
              <a href="/home">Home</a>
            </li>
            <li className="hideonMobile">
              <a href="/shopall">Catalog</a>
            </li>
            <li className="hideonMobile">
              <a href="/about">About Us </a>
            </li>
            <li className="hideonMobile">
              <a href="/contact">Contact</a>
            </li>
            { }


            <li className="icons">
              <div className="user">
                <i class="fa-solid fa-user"></i>
              </div>
              <div className="search-tool">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </li>
          </ul>


        </nav>
        {sidebarOpen && (
          <MobileDropdown toggle={toggleSidebar} />
        )}

        {/* Optionally, you can conditionally render the MobileDropdown component */}
        {/*sidebarOpen && <MobileDropdown />*/}
      </header>
    </>
  );
};

export default Header;
