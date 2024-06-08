import { useWeather } from "../../context/WeatherContext";
import "./WeatherImage.scss";

const WeatherImage = () => {
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
      imageSrc = "src/assets/some-clouds.png";
      break;
    case "Cloudy":
      imageSrc = "src/assets/some-clouds.png";
      break;
    case "Light rain":
      imageSrc = "src/assets/some-clouds.png";
      break;
    case "Moderate rain":
      imageSrc = "src/assets/some-clouds.png";
      break;
    case "Heavy rain":
      imageSrc = "src/assets/some-clouds.png";
      break;
    case "Light snow":
      imageSrc = "src/assets/some-clouds.png";
      break;
    case "Moderate snow":
      imageSrc = "src/assets/some-clouds.png";
      break;
    case "Heavy snow":
      imageSrc = "src/assets/some-clouds.png";
      break;
    case "Thunderstorms":
      imageSrc = "src/assets/some-clouds.png";
      break;
    case "Foggy":
      imageSrc = "src/assets/some-clouds.png";
      break;
    case "Mist":
      imageSrc = "src/assets/some-clouds.png";
      break;
    case "Haze":
      imageSrc = "src/assets/some-clouds.png";
      break;
    case "Smoke":
      imageSrc = "src/assets/some-clouds.png";
      break;
    case "Drizzle":
      imageSrc = "src/assets/some-clouds.png";
      break;
    case "Freezing rain":
      imageSrc = "src/assets/some-clouds.png";
      break;
    case "Sleet":
      imageSrc = "src/assets/some-clouds.png";
      break;
    default:
      throw new Error("Invalid month number extracted from the string.");
  }
  return <img src={imageSrc} className="weather-image" />;
};

export default WeatherImage;
