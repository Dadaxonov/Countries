import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./layaut/header/Header";
import Simple from "./pages/simple/simple";
import "./styleResponsive.css";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />4
        <Route path="/simple/:cioc" element={<Simple />} />
        <Route path="*" element={<h1>SORRY!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
