import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Work from "./pages/Work";
import ScrollToTop from "./utils/ScrollToTop";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
