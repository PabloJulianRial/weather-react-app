import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
  fetchWeatherData,
  fetchWeatherForecast,
  getUserLocation,
} from "../utility/Utility";
import { WeatherResponse, ForecastResponse } from "../types/WeatherResponse";

interface WeatherContextProps {
  currentWeather: WeatherResponse | null;
  forecast: ForecastResponse | null;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(
  undefined
);

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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
    <WeatherContext.Provider value={{ currentWeather, forecast }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = React.useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
