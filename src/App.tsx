import { useEffect, useState } from "react";
import "./App.scss";
import Dashboard from "./containers/dashboard/Dashboard";
import {
  fetchWeatherData,
  fetchWeatherForecast,
  getUserLocation,
} from "./utility/Utility";
import { WeatherResponse, ForecastResponse } from "./types/WeatherResponse";

const App: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<WeatherResponse | null>(
    null
  );
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const position = await getUserLocation();
        const { latitude, longitude } = position.coords;

        // Fetch current weather data
        const currentWeatherData = await fetchWeatherData(latitude, longitude);
        setCurrentWeather(currentWeatherData);

        // Fetch forecast data
        const forecastData = await fetchWeatherForecast(latitude, longitude);
        setForecast(forecastData);
      } catch (err) {
        console.error("Error getting user location or weather data", err);
      }
    };

    // Fetch data initially
    fetchData();

    // Set up interval for periodic updates (if needed)
  }, []);

  return (
    <div className="app">
      <Dashboard currentWeather={currentWeather} forecast={forecast} />
    </div>
  );
};

export default App;
