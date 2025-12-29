import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";

// Main Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Portfolio from "./pages/Portfolio";

// Task Components
import Task_2 from "./components/Task_2";
import Task_3 from "./components/Task_3";
import Task_4 from "./components/Task_4";
import Task_5 from "./components/Task_5";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Extra dropdown pages */}
        <Route path="/page1" element={<Task_2 />} />
        <Route path="/page2" element={<Task_3 />} />
        <Route path="/page3" element={<Task_4 />} />
        <Route path="/page4" element={<Task_5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
