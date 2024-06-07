import "./LocationOverview.scss";
import { useWeather } from "../../context/WeatherContext";
import { getmonthOfTheYear } from "../../utility/Utility";
import { Link } from "react-router-dom";

const LocationOverview = () => {
  const { currentWeather, forecast } = useWeather();
  if (!currentWeather || !forecast) {
    return <div>Loading...</div>;
  }

  const monthOfTheYear = getmonthOfTheYear(currentWeather.location.localtime);
  return (
    <div className="location-overview">
      <div className="location-overview__time">
        <div className="location-overview__time--time">
          {currentWeather.location.localtime.slice(-5)}
        </div>
        <div className="location-overview__time--date--month">
          {monthOfTheYear}
        </div>
        <div className="location-overview__time--date">
          {currentWeather.location.localtime.slice(5, 7)}
        </div>
      </div>
      <div className="location-overview__location">
        <div className="location-overview__location--city">
          {currentWeather.location.region}
        </div>
        <div className="location-overview__location--country">
          {currentWeather.location.country}
        </div>
      </div>
      <div className="location-overview__links">
        <Link to={"/change-location"}>
          <div className="location-overview__links--location">
            change location
          </div>
        </Link>
        <div className="location-overview__links--time">change time</div>
      </div>
    </div>
  );
};

export default LocationOverview;
