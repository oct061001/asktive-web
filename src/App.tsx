import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./components/Home"
import Portofolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portofolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
