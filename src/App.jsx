import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Contact from "./Pages/Contact";
import MemberShip from "./Pages/MemberShip";
import Programs from "./Pages/Programs";
import Trainers from "./Pages/Trainers";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/membership" element={<MemberShip />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;