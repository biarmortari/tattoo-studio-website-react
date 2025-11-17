import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Catalog from "./components/Catalog/Catalog";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Catalog />
      </div>
    </>
  );
}

export default App;
