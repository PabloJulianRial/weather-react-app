import { useWeather } from "../../context/WeatherContext";
import "./WeatherImage.scss";

const { currentWeather, forecast } = useWeather();
if (!currentWeather || !forecast) {
  console.log("Image not found");
}

let imageSrc = "";

switch (currentWeather?.current.condition.text) {
  case "Partly cloudy":
    imageSrc = "src/assets/some-clouds.png";
    break;
  case "Clear":
    imageSrc = "src/assets/sun.png";
    break;
  case "Overcast":
    imageSrc = "March";
    break;
  case "Cloudy":
    imageSrc = "April";
    break;
  case "Light rain":
    imageSrc = "May";
    break;
  case "Moderate rain":
    imageSrc = "June";
    break;
  case "Heavy rain":
    imageSrc = "July";
    break;
  case "Light snow":
    imageSrc = "August";
    break;
  case "Moderate snow":
    imageSrc = "August";
    break;
  case "Heavy snow":
    imageSrc = "August";
    break;
  case "Thunderstorms":
    imageSrc = "August";
    break;
  case "Foggy":
    imageSrc = "August";
    break;
  case "Mist":
    imageSrc = "August";
    break;
  case "Haze":
    imageSrc = "August";
    break;
  case "Smoke":
    imageSrc = "August";
    break;
  case "Drizzle":
    imageSrc = "August";
    break;
  case "Freezing rain":
    imageSrc = "August";
    break;
  case "Sleet":
    imageSrc = "August";
    break;
  default:
    throw new Error("Invalid month number extracted from the string.");
}

const WeatherImage = () => {
  return <img src="imageSrc" className="weather-image"></img>;
};

export default WeatherImage;
