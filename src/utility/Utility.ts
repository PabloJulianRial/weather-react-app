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

export const getmonthOfTheYear = (localtime: string) => {
  const monthNumber = localtime.slice(5, 7);

  let monthName = "";

  switch (monthNumber) {
    case "01":
      monthName = "January";
      break;
    case "02":
      monthName = "February";
      break;
    case "03":
      monthName = "March";
      break;
    case "04":
      monthName = "April";
      break;
    case "05":
      monthName = "May";
      break;
    case "06":
      monthName = "June";
      break;
    case "07":
      monthName = "July";
      break;
    case "08":
      monthName = "August";
      break;
    case "09":
      monthName = "September";
      break;
    case "10":
      monthName = "October";
      break;
    case "11":
      monthName = "November";
      break;
    case "12":
      monthName = "December";
      break;
    default:
      throw new Error("Invalid month number extracted from the string.");
  }
  return monthName;
};
