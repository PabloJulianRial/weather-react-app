import {
  HashRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.scss";
import Dashboard from "./containers/dashboard/Dashboard";
import ChangeLocation from "../src/components/changeLocation/ChangeLocation";
import { WeatherProvider } from "./context/WeatherContext";

const App = () => {
  return (
    <BrowserRouter basename="/weather-react-app">
      <div className="app">
        <WeatherProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/change-location" element={<ChangeLocation />} />
          </Routes>
        </WeatherProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
