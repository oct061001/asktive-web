import React from "react";
import "./About.css";

//tampilin agent2
//mobile scroll bawah
//web card 2x2

const About: React.FC = () => {
  return (
    <div className="about">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <p>
          Meet The Team.
        </p>
        <p>
          Our mission is to help businesses grow by leveraging technology and creativity.
        </p>
      </section>
    </div>
  );
};

export default About;