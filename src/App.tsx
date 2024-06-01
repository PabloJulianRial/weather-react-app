import "./App.scss";
import Dashboard from "./containers/dashboard/Dashboard";
import { fetchWeatherData, getUserLocation } from "./utility/Utility";

getUserLocation()
  .then((position) => {
    const { latitude, longitude } = position.coords;
    return fetchWeatherData(latitude, longitude);
  })
  .then((weatherData) => {
    console.log("Weather data:", weatherData);
  })
  .catch((error) => {
    console.error("Error getting user location or weather data", error);
  });

function App() {
  return (
    <div className="app">
      <Dashboard />
    </div>
  );
}

export default App;
