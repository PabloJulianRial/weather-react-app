import axios from "axios";
import WeatherResponse from "../types/WeatherResponse";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
console.log("API Key:", apiKey);
const baseUrl = "https://api.weatherapi.com/v1/current.json";

export const getUserLocation = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error("Geolocation is not supported by this browser"));
    }
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
    console.log(response);

    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
    throw error;
  }
}
