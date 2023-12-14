import React from "react";
import Header from "./Mycomponents/Header"; // Use if needed
import Todos from "./Mycomponents/Todos";
import Footer from "./Mycomponents/Footer"; // Use if needed
import About from "./Mycomponents/About"; // Define or import

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />  
      </BrowserRouter>
    </>
  );
}

export default App;
