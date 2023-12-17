import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Work from "./pages/Work";
import ScrollToTop from "./utils/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";

//project
import WonderfulJogja from "./pages/WonderfulJogja";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Work />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        {/* project */}
        <Route
          path="/project/wonderful-jogja"
          element={<WonderfulJogja />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
