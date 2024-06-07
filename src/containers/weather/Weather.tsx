import LocationCard from "../../components/locationCard/LocationCard";
import WeatherCard from "../../components/weatherCard/WeatherCard";
import "./Weather.scss";

function Weather() {
  return (
    <div className="weather">
      <WeatherCard />
      <LocationCard />
    </div>
  );
}

export default Weather;
