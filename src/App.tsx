import { useEffect, useState } from "react";
import "./App.scss";
import Dashboard from "./containers/dashboard/Dashboard";
import {
  fetchWeatherData,
  fetchWeatherForecast,
  getUserLocation,
} from "./utility/Utility";
import { WeatherResponse, ForecastResponse } from "./types/WeatherResponse";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState<WeatherResponse | null>(
    null
  );
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      const position = await getUserLocation();
      const { latitude, longitude } = position.coords;

      const currentWeatherData = await fetchWeatherData(latitude, longitude);
      setCurrentWeather(currentWeatherData);

      const forecastData = await fetchWeatherForecast(latitude, longitude);
      setForecast(forecastData);
    } catch (err) {
      console.error("Error getting user location or weather data", err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <Dashboard />
    </div>
  );
};

export default App;
