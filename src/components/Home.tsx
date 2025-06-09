import React from "react";
import "./Home.css"; // Optional: Add styles specific to the Home page.

import asktiveLogo from "../assets/asktive_logo.jpg"

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1><img src={asktiveLogo} alt="asktive-logo" /></h1>
        <p>virtual agency, at your service.</p>
      </header>
      <section className="home-content">
        <div className="home-section">
          <h2>Who are we?</h2>
          <p>
            We are a team of aspiring creators that 
            provide creative services for your business.
          </p>
        </div>
        <div className="home-section">
          <h2>Our Services</h2>
          <ul>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Digital Marketing</li>
            <li>Consulting</li>
          </ul>
        </div>
        <div className="home-section">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us via our Contact page.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;