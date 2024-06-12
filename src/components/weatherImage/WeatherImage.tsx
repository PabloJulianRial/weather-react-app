import { useWeather } from "../../context/WeatherContext";
import "./WeatherImage.scss";

const WeatherImage = () => {
  const { currentWeather, forecast } = useWeather();

  if (!currentWeather || !forecast) {
    console.log("Image not found");
    return null;
  }

  return (
    <img
      src={currentWeather.current.condition.icon}
      className="weather-image"
      alt="Weather condition icon"
    />
  );
};

export default WeatherImage;
