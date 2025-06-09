//npm run dev

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";

import Home from "./components/Home"

function App() {
  // let items = ["Lorem", "Ipsum", "OO", "II", "AA"];
  // let menus = ["Home", "About Us", "Contact us!"];
  return (
    //style debug
    <div style={{ height: "2000px" }}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} /> */}
      </Routes>
    </Router>
    {/* <ListGroup items={items} heading="First Fullstack Project" /> */}
    </div>
  );
};

export default App;
