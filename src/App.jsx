import * as React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Section from "./components/Section";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrayerTimes from "./pages/PrayerTimes";
// import LowerSection from "./components/LowerSection";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/prayertimes" element={<PrayerTimes />} />
        {/* <LowerSection /> */}
      </Routes>
    </div>
  );
}

export default App;
