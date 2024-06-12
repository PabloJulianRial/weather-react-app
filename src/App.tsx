import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Dashboard from "./containers/dashboard/Dashboard";
import ChangeLocation from "../src/components/changeLocation/ChangeLocation";
import { WeatherProvider, useWeather } from "./context/WeatherContext";
import { useState } from "react";

const App = () => {
  return (
    <div className="app">
      <Router>
        <WeatherProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/change-location" element={<ChangeLocation />} />
          </Routes>
        </WeatherProvider>
      </Router>
    </div>
  );
};

export default App;
