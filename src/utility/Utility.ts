import axios from "axios";
import { WeatherResponse, ForecastResponse } from "../types/WeatherResponse";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
console.log("API Key:", apiKey);
const baseUrl = "https://api.weatherapi.com/v1/current.json";
const baseUrl1 = "https://api.weatherapi.com/v1/forecast.json";

export const getUserLocation = async (): Promise<GeolocationPosition> => {
  if (!navigator.geolocation) {
    throw new Error("Geolocation is not supported by this browser");
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export async function fetchWeatherData(
  lat: number,
  lon: number
): Promise<WeatherResponse> {
  if (!apiKey) {
    throw new Error("REACT_APP_WEATHER_API_KEY is not defined");
  }
  try {
    const response = await axios.get(baseUrl, {
      params: {
        key: apiKey,
        q: `${lat},${lon}`,
      },
    });
    console.log("current>>>>>>>>>>>", response);

    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
    throw error;
  }
}
export async function fetchWeatherForecast(
  lat: number,
  lon: number,
  days: number = 7
): Promise<ForecastResponse> {
  if (!apiKey) {
    throw new Error("REACT_APP_WEATHER_API_KEY is not defined");
  }
  try {
    const response = await axios.get(baseUrl1, {
      params: {
        key: apiKey,
        q: `${lat},${lon}`,
        days: days,
      },
    });
    console.log("forecast>>>>>>>>>>>", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
    throw error;
  }
}
