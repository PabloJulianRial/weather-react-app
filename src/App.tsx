import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Dashboard from "./containers/dashboard/Dashboard";
import ChangeLocation from "../src/components/changeLocation/ChangeLocation";
import { WeatherProvider } from "./context/WeatherContext";

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
