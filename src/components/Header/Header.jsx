import React from "react";
import "./Header.css";
import logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo-wrap">
          <img src={logo} alt="LOGO" className="logo" />
        </div>
        <nav className="main-nav">
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
