import React from "react";
import "./Contact.css";

import asktiveLogo from "../assets/asktive_logo.jpg"

// jadi form

const Contact: React.FC = () => {
  return (
    <div className="about">
      <header className="about-header">
        <h1><img src={asktiveLogo} alt="asktive-logo" className="asktive-logo"/></h1>
        <h1>Reach out to our agents.</h1>
      </header>
      <section className="about-content">
        <p>
          IG: virtuelly 
        </p>
        <p>
          {/* image virtuelly */}
        </p>
      </section>
    </div>
  );
};

export default Contact;