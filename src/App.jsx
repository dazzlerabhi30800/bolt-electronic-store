import React from "react";
import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ProductSection from "./Components/ProductsSection";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
      </main>
    </div>
  );
}

export default App;
