import React from "react";
import "./Footer.css";
import logo from "../assets/logotest.png"; // reuse your logo

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>© {new Date().getFullYear()} Asktive. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact-us">Contact</a>
          {/* <a href="#">Privacy Policy</a> */}
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/ask.tive/#" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="http://wa.me/+628161487776?text=Hi%20Asktive!%20I'm%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer">Whatsapp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
