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
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
