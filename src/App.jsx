import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ProductSection from "./Components/ProductsSection";
import Showcase from "./Components/Showcase";

function App() {
  const [show, setShow] = useState(false);
  console.log(show);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <Showcase />
      </main>
    </div>
  );
}

export default App;
