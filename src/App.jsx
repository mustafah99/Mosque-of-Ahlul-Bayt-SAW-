import * as React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Section from "./components/Section";
// import LowerSection from "./components/LowerSection";

function App() {
  return (
    <div className="App">
      <Hero />
      <Section />
      {/* <LowerSection /> */}
    </div>
  );
}

export default App;
