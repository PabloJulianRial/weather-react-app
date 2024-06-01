import LocationOverview from "../../components/locationOverview/LocationOverview";
import WeatherCard from "../../components/weatherCard/WeatherCard";
import "./Weather.scss";

function Weather() {
  return (
    <div className="weather">
      <WeatherCard />
      <LocationOverview />
    </div>
  );
}

export default Weather;
