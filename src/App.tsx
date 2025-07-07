//npm run dev

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";

import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  // let items = ["Lorem", "Ipsum", "OO", "II", "AA"];
  // let menus = ["Home", "About Us", "Contact us!"];
  return (
    //stickynavbar debug
    <div style={{ height: "2000px" }}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
    {/* <ListGroup items={items} heading="First Fullstack Project" /> */}
    </div>
  );
};

export default App;
