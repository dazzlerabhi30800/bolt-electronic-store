import React from "react";
import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
