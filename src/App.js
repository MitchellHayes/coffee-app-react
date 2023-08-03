import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BrewTrack from "./components/BrewTrack";
import BrewMetrics from "./components/Metrics";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <Router>
      <div className="appCard">
        <MenuBar />

        <Routes>
          <Route path="/metrics" element={<BrewMetrics />} />
          <Route path="/" element={<BrewTrack />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
